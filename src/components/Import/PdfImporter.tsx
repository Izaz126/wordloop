import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertTriangle, Trash2, Sparkles, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { VocabularyWord } from '../../types/vocabulary';
import { PDFParserService, ExtractedWordItem } from '../../services/pdfParser';
import { EnrichmentService } from '../../services/enrichment';
import { StorageService } from '../../services/storage';

interface PdfImporterProps {
  existingWords: VocabularyWord[];
  onImportComplete: (importedCount: number) => void;
}

export const PdfImporter: React.FC<PdfImporterProps> = ({
  existingWords,
  onImportComplete,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState<string>('');
  
  // Extracted preview items
  const [extractedItems, setExtractedItems] = useState<ExtractedWordItem[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isScanned, setIsScanned] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  const [isImporting, setIsImporting] = useState(false);

  // Handle files
  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setIsProcessing(true);
    setWarnings([]);
    setIsScanned(false);

    try {
      const allExtracted: ExtractedWordItem[] = [];
      const allWarnings: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setFileName(file.name);
        setProcessingStatus(`Extracting text from ${file.name}...`);

        let result;
        if (file.name.toLowerCase().endsWith('.pdf')) {
          result = await PDFParserService.parsePDF(file, existingWords);
        } else {
          result = await PDFParserService.parseTextOrCSV(file, existingWords);
        }

        if (result.isScannedOrEmpty) {
          setIsScanned(true);
        }

        allWarnings.push(...result.warnings);
        allExtracted.push(...result.items);
      }

      setWarnings(allWarnings);
      setExtractedItems(allExtracted);
    } catch (err: any) {
      console.error('File parsing error:', err);
      setWarnings([`Failed to parse file: ${err.message || 'Unknown error'}`]);
    } finally {
      setIsProcessing(false);
      setProcessingStatus('');
    }
  };

  // Toggle selection
  const handleToggleSelect = (id: string) => {
    setExtractedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const handleSelectAll = (select: boolean) => {
    setExtractedItems((prev) => prev.map((item) => ({ ...item, selected: select })));
  };

  // Edit cell
  const handleEditCell = (id: string, field: 'word' | 'banglaMeaning' | 'simpleDefinition', value: string) => {
    setExtractedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Remove row
  const handleRemoveRow = (id: string) => {
    setExtractedItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Enrich selected words with dictionary
  const handleAutoEnrich = async () => {
    setIsProcessing(true);
    setProcessingStatus('Enriching words with offline dictionary definitions and examples...');

    const settings = await StorageService.getSettings();

    const updated = await Promise.all(
      extractedItems.map(async (item) => {
        if (!item.selected) return item;
        const enriched = await EnrichmentService.enrichWord(
          item.word,
          item.banglaMeaning,
          settings.aiApiKey,
          settings.aiProvider
        );
        return {
          ...item,
          pos: enriched.pos,
          banglaMeaning: enriched.banglaMeaning,
          simpleDefinition: enriched.simpleDefinition,
          synonyms: enriched.synonyms,
          antonyms: enriched.antonyms,
          example: enriched.example,
          exampleBangla: enriched.exampleBangla,
        };
      })
    );

    setExtractedItems(updated);
    setIsProcessing(false);
    setProcessingStatus('');
  };

  // Confirm Import
  const handleConfirmImport = async () => {
    const selected = extractedItems.filter((item) => item.selected);
    if (selected.length === 0) {
      alert('Please select at least one word to import.');
      return;
    }

    setIsImporting(true);

    try {
      const newVocabWords: VocabularyWord[] = [];
      const settings = await StorageService.getSettings();

      for (const item of selected) {
        const enriched = await EnrichmentService.enrichWord(
          item.word,
          item.banglaMeaning,
          settings.aiApiKey,
          settings.aiProvider
        );

        const newWord = EnrichmentService.createVocabularyWord(
          {
            word: item.word,
            pos: item.pos || enriched.pos,
            ipa: enriched.ipa,
            banglaPron: enriched.banglaPron,
            simpleDefinition: item.simpleDefinition || enriched.simpleDefinition,
            banglaMeaning: item.banglaMeaning || enriched.banglaMeaning,
            synonyms: item.synonyms && item.synonyms.length > 0 ? item.synonyms : enriched.synonyms,
            antonyms: item.antonyms && item.antonyms.length > 0 ? item.antonyms : enriched.antonyms,
            example: item.example || enriched.example,
            exampleBangla: item.exampleBangla || enriched.exampleBangla,
          },
          item.source || 'PDF Import'
        );

        newVocabWords.push(newWord);
      }

      await StorageService.saveWords(newVocabWords);
      onImportComplete(newVocabWords.length);
      setExtractedItems([]);
      alert(`Successfully imported ${newVocabWords.length} new vocabulary words into your collection!`);
    } catch (e: any) {
      alert(`Import failed: ${e.message || 'Unknown error'}`);
    } finally {
      setIsImporting(false);
    }
  };

  const selectedCount = extractedItems.filter((i) => i.selected).length;
  const duplicateCount = extractedItems.filter((i) => i.isDuplicate).length;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      
      {/* Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200/70">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-600 flex items-center justify-center">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">Import Vocabulary</h2>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              Upload PDF files, text word lists, or CSV spreadsheets
            </p>
          </div>
        </div>
      </div>

      {/* Upload Zone */}
      {extractedItems.length === 0 ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
          }}
          className={`bg-white rounded-3xl p-8 sm:p-12 text-center border-2 border-dashed transition-all cursor-pointer ${
            isDragging
              ? 'border-emerald-500 bg-emerald-50/30 scale-99'
              : 'border-stone-300 hover:border-emerald-400'
          }`}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            multiple
            accept=".pdf,.txt,.csv,.tsv,.json"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />

          <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8" />
          </div>

          <h3 className="text-lg font-bold text-navy-900 mb-1">
            Choose or drop your vocabulary PDF files
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mb-6">
            Supports PDF files, TXT, CSV, or TSV. Words are extracted with preserved spellings and checked for duplicates.
          </p>

          <button
            type="button"
            className="py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xs transition-colors"
          >
            Browse Files
          </button>
        </div>
      ) : null}

      {/* Processing Indicator */}
      {isProcessing && (
        <div className="bg-white rounded-3xl p-8 text-center border border-stone-200 space-y-3">
          <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
          <p className="text-sm font-semibold text-navy-900">{processingStatus}</p>
        </div>
      )}

      {/* Scanned PDF Warning Notification */}
      {isScanned && (
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-800 space-y-1">
            <p className="font-bold">Text Extraction Notice for Scanned Document</p>
            <p>
              This PDF appears to contain scanned images without an embedded text layer.
              Direct text extraction found very little selectable text.
            </p>
            <p className="text-xs text-amber-700">
              Tip: You can use an OCR tool (such as Google Drive or Adobe Acrobat OCR) to convert image pages to text, or copy-paste words directly into a .txt file.
            </p>
          </div>
        </div>
      )}

      {/* Extracted Preview List */}
      {extractedItems.length > 0 && !isProcessing && (
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200/70 space-y-4">
          
          {/* Header Summary & Bulk Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
            <div>
              <h3 className="font-bold text-lg text-navy-900">
                Extraction Preview ({extractedItems.length} words detected)
              </h3>
              <p className="text-xs text-stone-500">
                {selectedCount} selected for import • {duplicateCount} duplicates already in library
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleAutoEnrich}
                className="py-2 px-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                title="Enrich meanings using built-in dictionary"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Auto-Enrich All</span>
              </button>
              <button
                onClick={() => handleSelectAll(true)}
                className="py-2 px-3 rounded-xl border border-stone-200 text-stone-600 text-xs font-semibold hover:bg-stone-50"
              >
                Select All
              </button>
              <button
                onClick={() => handleSelectAll(false)}
                className="py-2 px-3 rounded-xl border border-stone-200 text-stone-600 text-xs font-semibold hover:bg-stone-50"
              >
                Deselect All
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto max-h-[480px] rounded-2xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 text-[11px] uppercase font-bold text-stone-500 sticky top-0 z-10 border-b border-stone-200">
                <tr>
                  <th className="p-3 w-10 text-center">✓</th>
                  <th className="p-3">Word (Editable)</th>
                  <th className="p-3">Bangla Meaning</th>
                  <th className="p-3">English Definition</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 w-12 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {extractedItems.map((item) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-stone-50/70 transition-colors ${
                      item.selected ? 'bg-white' : 'bg-stone-50/40 opacity-70'
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => handleToggleSelect(item.id)}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                    </td>

                    {/* Word */}
                    <td className="p-3">
                      <input
                        type="text"
                        value={item.word}
                        onChange={(e) => handleEditCell(item.id, 'word', e.target.value)}
                        className="w-full font-bold text-navy-900 bg-transparent border-b border-transparent hover:border-stone-300 focus:border-emerald-500 focus:bg-white focus:outline-none px-1 py-0.5 rounded text-sm"
                      />
                    </td>

                    {/* Bangla Meaning */}
                    <td className="p-3">
                      <input
                        type="text"
                        value={item.banglaMeaning || ''}
                        onChange={(e) => handleEditCell(item.id, 'banglaMeaning', e.target.value)}
                        placeholder="অপেক্ষারত অর্থ..."
                        className="w-full font-bengali text-stone-800 bg-transparent border-b border-transparent hover:border-stone-300 focus:border-emerald-500 focus:bg-white focus:outline-none px-1 py-0.5 rounded text-sm"
                      />
                    </td>

                    {/* Simple Definition */}
                    <td className="p-3">
                      <input
                        type="text"
                        value={item.simpleDefinition || ''}
                        onChange={(e) => handleEditCell(item.id, 'simpleDefinition', e.target.value)}
                        placeholder="Easy English definition..."
                        className="w-full text-stone-600 bg-transparent border-b border-transparent hover:border-stone-300 focus:border-emerald-500 focus:bg-white focus:outline-none px-1 py-0.5 rounded text-xs"
                      />
                    </td>

                    {/* Status Badge */}
                    <td className="p-3 text-center whitespace-nowrap">
                      {item.isDuplicate ? (
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          Duplicate
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          New Word
                        </span>
                      )}
                    </td>

                    {/* Remove Action */}
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleRemoveRow(item.id)}
                        className="p-1 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Remove word from preview"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Confirm Import Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-stone-100">
            <button
              onClick={() => setExtractedItems([])}
              className="w-full sm:w-auto py-2.5 px-5 rounded-xl border border-stone-200 text-stone-600 font-semibold text-xs hover:bg-stone-50 transition-colors"
            >
              Cancel & Clear
            </button>

            <button
              onClick={handleConfirmImport}
              disabled={isImporting || selectedCount === 0}
              className="w-full sm:w-auto py-3 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              {isImporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Importing Vocabulary...</span>
                </>
              ) : (
                <>
                  <span>Confirm & Import ({selectedCount} Words)</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
