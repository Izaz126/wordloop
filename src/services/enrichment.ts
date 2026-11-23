import { DICTIONARY_LOOKUP, WordEnrichmentData } from '../data/dictionaryLookup';
import { VocabularyWord } from '../types/vocabulary';

export class EnrichmentService {
  /**
   * Enrich a word using offline dictionary first, and optional AI if available
   */
  static async enrichWord(
    word: string,
    existingMeaning?: string,
    aiApiKey?: string,
    aiProvider?: 'gemini' | 'openai' | 'groq'
  ): Promise<WordEnrichmentData> {
    const cleanWord = word.trim();
    const lower = cleanWord.toLowerCase();

    // 1. Check offline dictionary
    if (DICTIONARY_LOOKUP[lower]) {
      const match = DICTIONARY_LOOKUP[lower];
      return {
        ...match,
        banglaMeaning: existingMeaning && existingMeaning.trim() ? existingMeaning.trim() : match.banglaMeaning,
      };
    }

    // 2. If AI key is configured, query AI API
    if (aiApiKey && aiApiKey.trim()) {
      try {
        const aiResult = await this.queryAIEnrichment(cleanWord, aiApiKey.trim(), aiProvider || 'gemini');
        if (aiResult) return aiResult;
      } catch (e) {
        console.warn('AI enrichment failed, falling back to local heuristics:', e);
      }
    }

    // 3. Natural Heuristics Fallback
    return this.createHeuristicEnrichment(cleanWord, existingMeaning);
  }

  /**
   * Convert enriched item into a full VocabularyWord ready for saving
   */
  static createVocabularyWord(data: WordEnrichmentData, source = 'Imported'): VocabularyWord {
    const now = new Date().toISOString();
    return {
      id: `word-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      word: data.word,
      pos: data.pos,
      ipa: data.ipa,
      banglaPron: data.banglaPron,
      simpleDefinition: data.simpleDefinition,
      banglaMeaning: data.banglaMeaning,
      synonyms: data.synonyms,
      antonyms: data.antonyms,
      example: data.example,
      exampleBangla: data.exampleBangla,
      source,
      category: 'Learning',
      stage: 0,
      consecutiveCorrect: 0,
      intervalDays: 0,
      nextReviewDate: now,
      lastReviewedDate: null,
      timesReviewed: 0,
      timesCorrect: 0,
      timesIncorrect: 0,
      isDifficult: false,
      createdAt: now,
      updatedAt: now,
    };
  }

  /**
   * Smart heuristic generation for unmapped words
   */
  private static createHeuristicEnrichment(word: string, existingMeaning?: string): WordEnrichmentData {
    const lower = word.toLowerCase();
    
    // Guess POS
    let pos = 'adjective';
    if (lower.endsWith('ly')) pos = 'adverb';
    else if (lower.endsWith('tion') || lower.endsWith('ment') || lower.endsWith('ness') || lower.endsWith('ity') || lower.endsWith('ism') || lower.endsWith('ance') || lower.endsWith('ence')) pos = 'noun';
    else if (lower.endsWith('ate') || lower.endsWith('ify') || lower.endsWith('ize') || lower.endsWith('ise')) pos = 'verb';
    else if (lower.endsWith('able') || lower.endsWith('ible') || lower.endsWith('ous') || lower.endsWith('ful') || lower.endsWith('ic') || lower.endsWith('al')) pos = 'adjective';

    const cleanMeaning = existingMeaning && existingMeaning.trim() ? existingMeaning.trim() : `${word} এর বাংলা অর্থ`;
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

    return {
      word: capitalizedWord,
      pos,
      ipa: `[${lower}]`,
      banglaPron: `[${capitalizedWord}]`,
      simpleDefinition: `A useful ${pos} related to ${lower}`,
      banglaMeaning: cleanMeaning,
      synonyms: [`Related to ${lower}`, `Similar to ${lower}`],
      antonyms: ['No common antonym'],
      example: `The word ${lower} is commonly used in English exams and writing.`,
      exampleBangla: `ইংরেজি পরীক্ষা এবং লেখায় ${capitalizedWord} শব্দটি সচরাচর ব্যবহৃত হয়।`,
    };
  }

  /**
   * Query Gemini / OpenAI / Groq API for vocabulary enrichment
   */
  private static async queryAIEnrichment(
    word: string,
    apiKey: string,
    provider: 'gemini' | 'openai' | 'groq'
  ): Promise<WordEnrichmentData | null> {
    const prompt = `You are a vocabulary enrichment assistant.
For the English word "${word}", provide a JSON object with:
- "word": "${word}"
- "pos": part of speech (noun, verb, adjective, or adverb)
- "ipa": IPA pronunciation notation, e.g. [ˈwɜːd]
- "banglaPron": Bangla phonetic pronunciation in brackets, e.g. [ওয়ার্ড]
- "simpleDefinition": a very simple 1-2 word or short phrase explanation in English (easy enough for beginners)
- "banglaMeaning": accurate natural Bangla meaning (e.g. শব্দ / কথা)
- "synonyms": array of 2-3 most useful English synonyms
- "antonyms": array of 1-3 useful antonyms (or ["No common antonym"] if none)
- "example": a short, natural, beginner-friendly English sentence using "${word}"
- "exampleBangla": simple Bangla translation of that example sentence

Return ONLY raw valid JSON, no markdown codeblocks, no explanations.`;

    if (provider === 'gemini') {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!response.ok) throw new Error(`Gemini API error: ${response.statusText}`);
      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
      const cleanJson = rawText.replace(/```json|```/g, '').trim();
      return JSON.parse(cleanJson);
    }

    if (provider === 'openai' || provider === 'groq') {
      const endpoint = provider === 'groq' 
        ? 'https://api.groq.com/openai/v1/chat/completions' 
        : 'https://api.openai.com/v1/chat/completions';
      const model = provider === 'groq' ? 'llama-3.1-8b-instant' : 'gpt-4o-mini';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.2,
        }),
      });

      if (!response.ok) throw new Error(`${provider} API error: ${response.statusText}`);
      const data = await response.json();
      const rawText = data?.choices?.[0]?.message?.content || '';
      const cleanJson = rawText.replace(/```json|```/g, '').trim();
      return JSON.parse(cleanJson);
    }

    return null;
  }
}
