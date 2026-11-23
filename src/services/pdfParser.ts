import * as pdfjsLib from 'pdfjs-dist';
import { VocabularyWord } from '../types/vocabulary';

// Set up worker
try {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
} catch (e) {
  console.warn('Could not set pdfjs worker from cdn:', e);
}

export interface ExtractedWordItem {
  id: string;
  word: string;
  pos?: string;
  banglaMeaning?: string;
  simpleDefinition?: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
  exampleBangla?: string;
  source?: string;
  isDuplicate: boolean;
  selected: boolean;
}

export interface ParseResult {
  items: ExtractedWordItem[];
  totalPages: number;
  totalExtractedTextLength: number;
  isScannedOrEmpty: boolean;
  duplicateCount: number;
  warnings: string[];
}

export class PDFParserService {
  /**
   * Extract text and vocabulary items from an uploaded PDF file
   */
  static async parsePDF(file: File, existingWords: VocabularyWord[]): Promise<ParseResult> {
    const existingWordSet = new Set(existingWords.map((w) => w.word.trim().toLowerCase()));
    const warnings: string[] = [];

    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdfDoc = await loadingTask.promise;

    const totalPages = pdfDoc.numPages;
    let fullText = '';
    const pageTexts: string[] = [];

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageStr = textContent.items
        // @ts-ignore
        .map((item) => (item.str !== undefined ? item.str : ''))
        .join(' ');
      pageTexts.push(pageStr);
      fullText += `\n--- PAGE ${pageNum} ---\n` + pageStr;
    }

    const totalExtractedTextLength = fullText.trim().length;

    // Check if the PDF is scanned or contains no selectable text
    if (totalExtractedTextLength < 60) {
      return {
        items: [],
        totalPages,
        totalExtractedTextLength,
        isScannedOrEmpty: true,
        duplicateCount: 0,
        warnings: [
          'Text extraction was unsuccessful. This PDF appears to be a scanned image or contains non-selectable text.',
          'Please run OCR on the PDF first, or copy-paste words directly, or upload a text/CSV file.',
        ],
      };
    }

    // Parse words from extracted text
    const extractedItems = this.parseTextContent(fullText, existingWordSet, file.name);

    let duplicateCount = 0;
    extractedItems.forEach((item) => {
      if (item.isDuplicate) duplicateCount++;
    });

    if (extractedItems.length === 0) {
      warnings.push('Could not detect distinct vocabulary words. Please check the file formatting.');
    }

    return {
      items: extractedItems,
      totalPages,
      totalExtractedTextLength,
      isScannedOrEmpty: false,
      duplicateCount,
      warnings,
    };
  }

  /**
   * Parse plain text, CSV, or TSV file
   */
  static async parseTextOrCSV(file: File, existingWords: VocabularyWord[]): Promise<ParseResult> {
    const existingWordSet = new Set(existingWords.map((w) => w.word.trim().toLowerCase()));
    const text = await file.text();
    const isCSV = file.name.endsWith('.csv') || file.name.endsWith('.tsv') || text.includes('\t') || (text.includes(',') && text.split('\n')[0].includes(','));

    let items: ExtractedWordItem[] = [];

    if (isCSV) {
      items = this.parseCSVText(text, existingWordSet, file.name);
    } else {
      items = this.parseTextContent(text, existingWordSet, file.name);
    }

    let duplicateCount = 0;
    items.forEach((item) => {
      if (item.isDuplicate) duplicateCount++;
    });

    return {
      items,
      totalPages: 1,
      totalExtractedTextLength: text.length,
      isScannedOrEmpty: text.trim().length === 0,
      duplicateCount,
      warnings: items.length === 0 ? ['No vocabulary words found in text file.'] : [],
    };
  }

  /**
   * Parse CSV/TSV table
   */
  private static parseCSVText(text: string, existingWordSet: Set<string>, sourceName: string): ExtractedWordItem[] {
    const lines = text.split(/\r?\n/).filter((l) => l.trim());
    if (lines.length === 0) return [];

    const delimiter = text.includes('\t') ? '\t' : ',';
    const items: ExtractedWordItem[] = [];
    const seenLocal = new Set<string>();

    const firstLine = lines[0].toLowerCase();
    const hasHeader = firstLine.includes('word') || firstLine.includes('meaning') || firstLine.includes('vocab');
    const dataLines = hasHeader ? lines.slice(1) : lines;

    dataLines.forEach((line, idx) => {
      // Split by delimiter respecting quotes
      const cols = line.split(delimiter).map((c) => c.replace(/^["']|["']$/g, '').trim());
      if (cols.length === 0 || !cols[0]) return;

      const word = cols[0];
      // Skip if not a valid word
      if (!/^[A-Za-z\s\-\']+$/.test(word) || word.length < 2) return;

      const wLower = word.toLowerCase();
      if (seenLocal.has(wLower)) return;
      seenLocal.add(wLower);

      const banglaMeaning = cols[1] || '';
      const simpleDef = cols[2] || '';
      const syns = cols[3] ? cols[3].split(/[,;|]/).map((s) => s.trim()).filter(Boolean) : [];
      const ants = cols[4] ? cols[4].split(/[,;|]/).map((a) => a.trim()).filter(Boolean) : [];
      const example = cols[5] || '';
      const exBangla = cols[6] || '';

      const isDup = existingWordSet.has(wLower);

      items.push({
        id: `extracted-${idx + 1}-${Date.now()}`,
        word,
        banglaMeaning,
        simpleDefinition: simpleDef,
        synonyms: syns,
        antonyms: ants,
        example,
        exampleBangla: exBangla,
        source: sourceName,
        isDuplicate: isDup,
        selected: !isDup,
      });
    });

    return items;
  }

  /**
   * Parse structured text content or unstructured word lists
   */
  private static parseTextContent(text: string, existingWordSet: Set<string>, sourceName: string): ExtractedWordItem[] {
    const items: ExtractedWordItem[] = [];
    const seenLocal = new Set<string>();

    // Pattern 1: Numbered entries like "1: Ambiguous - Meaning" or "1 Ambiguous - Meaning" or "1. Ambiguous"
    const numberedRegex = /(?:^|\n)\s*(\d{1,4})\s*[:.)\-]?\s*([A-Za-z\s\-\']+?)(?:\s*[-–—:]\s*([^\n\r]+))?(?=\n|$)/g;
    let match;
    let count = 0;

    while ((match = numberedRegex.exec(text)) !== null) {
      const rawWord = match[2].trim();
      const rawMeaning = match[3] ? match[3].trim() : '';

      // Clean word
      const word = rawWord.split(/\s{2,}|\/|\\/)[0].trim();
      if (word && /^[A-Za-z\s\-\']+$/.test(word) && word.length >= 2 && word.length <= 35) {
        const wLower = word.toLowerCase();
        if (!seenLocal.has(wLower)) {
          seenLocal.add(wLower);
          count++;
          const isDup = existingWordSet.has(wLower);
          items.push({
            id: `extracted-num-${count}-${Date.now()}`,
            word,
            banglaMeaning: rawMeaning,
            source: sourceName,
            isDuplicate: isDup,
            selected: !isDup,
          });
        }
      }
    }

    // Pattern 2: If numbered regex yielded few results, scan line by line
    if (items.length < 5) {
      const lines = text.split(/\r?\n/);
      lines.forEach((line) => {
        const cleanLine = line.trim();
        if (!cleanLine || cleanLine.length > 100) return;

        // Skip headers and page markers
        if (cleanLine.includes('PAGE') || cleanLine.includes('Vocabulary') || cleanLine.includes('Exam') || cleanLine.includes('http')) {
          return;
        }

        // Match "Word - Meaning" or "Word : Meaning"
        const sepMatch = cleanLine.match(/^([A-Za-z\s\-\']+?)\s*[-–—:]\s*(.+)$/);
        if (sepMatch) {
          const word = sepMatch[1].trim();
          const meaning = sepMatch[2].trim();
          if (/^[A-Za-z\s\-\']+$/.test(word) && word.length >= 2 && word.length <= 35) {
            const wLower = word.toLowerCase();
            if (!seenLocal.has(wLower)) {
              seenLocal.add(wLower);
              count++;
              const isDup = existingWordSet.has(wLower);
              items.push({
                id: `extracted-line-${count}-${Date.now()}`,
                word,
                banglaMeaning: meaning,
                source: sourceName,
                isDuplicate: isDup,
                selected: !isDup,
              });
            }
          }
          return;
        }

        // Single isolated word on a line
        if (/^[A-Za-z\s\-\']{3,25}$/.test(cleanLine) && !cleanLine.includes('   ')) {
          const word = cleanLine.trim();
          const wLower = word.toLowerCase();
          if (!seenLocal.has(wLower)) {
            seenLocal.add(wLower);
            count++;
            const isDup = existingWordSet.has(wLower);
            items.push({
              id: `extracted-single-${count}-${Date.now()}`,
              word,
              source: sourceName,
              isDuplicate: isDup,
              selected: !isDup,
            });
          }
        }
      });
    }

    // Pattern 3: If still nothing, extract all capitalized English words
    if (items.length === 0) {
      const words = text.match(/\b[A-Za-z]{3,20}\b/g) || [];
      const stopWords = new Set([
        'the', 'and', 'for', 'that', 'this', 'with', 'from', 'have', 'were', 'which',
        'will', 'would', 'there', 'their', 'about', 'page', 'meaning', 'synonym', 'antonym',
        'sentence', 'exam', 'preliminary', 'recruitment', 'teacher', 'primary', 'bank',
      ]);

      words.forEach((w) => {
        const wLower = w.toLowerCase();
        if (!stopWords.has(wLower) && !seenLocal.has(wLower)) {
          seenLocal.add(wLower);
          count++;
          const isDup = existingWordSet.has(wLower);
          items.push({
            id: `extracted-word-${count}-${Date.now()}`,
            word: w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
            source: sourceName,
            isDuplicate: isDup,
            selected: !isDup,
          });
        }
      });
    }

    return items;
  }
}
