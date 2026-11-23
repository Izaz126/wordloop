import { VocabularyWord, PracticeStats, DailyLog, AppSettings, SRSStats } from '../types/vocabulary';
import initialVocabData from '../data/initialVocabulary.json';

const DB_NAME = 'WordLoopDB';
const DB_VERSION = 1;

const STORES = {
  WORDS: 'vocabulary_words',
  STATS: 'practice_stats',
  LOGS: 'daily_logs',
  SETTINGS: 'app_settings',
};

// Helper to open IndexedDB
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB is not supported'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORES.WORDS)) {
        const wordStore = db.createObjectStore(STORES.WORDS, { keyPath: 'id' });
        wordStore.createIndex('word', 'word', { unique: false });
        wordStore.createIndex('category', 'category', { unique: false });
        wordStore.createIndex('nextReviewDate', 'nextReviewDate', { unique: false });
      }
      if (!db.objectStoreNames.contains(STORES.STATS)) {
        db.createObjectStore(STORES.STATS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORES.LOGS)) {
        db.createObjectStore(STORES.LOGS, { keyPath: 'date' });
      }
      if (!db.objectStoreNames.contains(STORES.SETTINGS)) {
        db.createObjectStore(STORES.SETTINGS, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// LocalStorage Fallback Keys
const LS_KEYS = {
  WORDS: 'wordloop_words',
  STATS: 'wordloop_practice_stats',
  LOGS: 'wordloop_daily_logs',
  SETTINGS: 'wordloop_settings',
};

export class StorageService {
  private static isInitialized = false;

  // Initialize DB and safely merge vocabulary from PDFs
  static async init(): Promise<void> {
    if (this.isInitialized) return;

    try {
      const existingWords = await this.getAllWords();
      const initialWords = initialVocabData as unknown as VocabularyWord[];

      if (existingWords.length === 0) {
        console.log('Seeding initial vocabulary from PDFs...');
        await this.saveWords(initialWords);
      } else {
        // Smart non-destructive merge:
        // Build map of existing words by lowercased word
        const existingMap = new Map<string, VocabularyWord>();
        for (const w of existingWords) {
          existingMap.set(w.word.toLowerCase(), w);
        }

        const mergedList: VocabularyWord[] = [];
        const processedSet = new Set<string>();

        // 1. Process all verified words from both PDFs
        for (const newW of initialWords) {
          const lower = newW.word.toLowerCase();
          processedSet.add(lower);
          const existing = existingMap.get(lower);

          if (existing) {
            // Update vocabulary data (Bangla meaning, definition, synonyms, antonyms, example)
            // BUT preserve all user learning history!
            const merged: VocabularyWord = {
              ...existing,
              word: newW.word,
              pos: newW.pos || existing.pos,
              simpleDefinition: newW.simpleDefinition,
              banglaMeaning: newW.banglaMeaning,
              synonyms: newW.synonyms && newW.synonyms.length > 0 ? newW.synonyms : existing.synonyms,
              antonyms: newW.antonyms && newW.antonyms.length > 0 ? newW.antonyms : existing.antonyms,
              example: newW.example || existing.example,
              source: newW.source || existing.source,
              // Explicitly preserve learning state
              category: existing.category,
              stage: existing.stage,
              consecutiveCorrect: existing.consecutiveCorrect,
              intervalDays: existing.intervalDays,
              nextReviewDate: existing.nextReviewDate,
              lastReviewedDate: existing.lastReviewedDate,
              timesReviewed: existing.timesReviewed,
              timesCorrect: existing.timesCorrect,
              timesIncorrect: existing.timesIncorrect,
              isDifficult: existing.isDifficult,
            };
            mergedList.push(merged);
          } else {
            // Brand new word from the combined PDFs
            mergedList.push({
              ...newW,
              category: 'Learning',
            });
          }
        }

        // 2. Also keep any custom words the user manually added in the app
        for (const w of existingWords) {
          const lower = w.word.toLowerCase();
          if (!processedSet.has(lower)) {
            mergedList.push(w);
          }
        }

        await this.saveWords(mergedList);
      }
      this.isInitialized = true;
    } catch (err) {
      console.warn('Falling back to localStorage for storage:', err);
      const lsRaw = localStorage.getItem(LS_KEYS.WORDS);
      const initialWords = initialVocabData as unknown as VocabularyWord[];
      if (!lsRaw) {
        localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(initialWords));
      } else {
        try {
          const existingWords: VocabularyWord[] = JSON.parse(lsRaw);
          const existingMap = new Map<string, VocabularyWord>();
          for (const w of existingWords) {
            existingMap.set(w.word.toLowerCase(), w);
          }
          const mergedList: VocabularyWord[] = [];
          const processedSet = new Set<string>();
          for (const newW of initialWords) {
            const lower = newW.word.toLowerCase();
            processedSet.add(lower);
            const existing = existingMap.get(lower);
            if (existing) {
              mergedList.push({
                ...existing,
                word: newW.word,
                pos: newW.pos || existing.pos,
                simpleDefinition: newW.simpleDefinition,
                banglaMeaning: newW.banglaMeaning,
                synonyms: newW.synonyms && newW.synonyms.length > 0 ? newW.synonyms : existing.synonyms,
                antonyms: newW.antonyms && newW.antonyms.length > 0 ? newW.antonyms : existing.antonyms,
                example: newW.example || existing.example,
                source: newW.source || existing.source,
                category: existing.category,
                stage: existing.stage,
                consecutiveCorrect: existing.consecutiveCorrect,
                intervalDays: existing.intervalDays,
                nextReviewDate: existing.nextReviewDate,
                lastReviewedDate: existing.lastReviewedDate,
                timesReviewed: existing.timesReviewed,
                timesCorrect: existing.timesCorrect,
                timesIncorrect: existing.timesIncorrect,
                isDifficult: existing.isDifficult,
              });
            } else {
              mergedList.push({ ...newW, category: 'Learning' });
            }
          }
          for (const w of existingWords) {
            if (!processedSet.has(w.word.toLowerCase())) {
              mergedList.push(w);
            }
          }
          localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(mergedList));
        } catch {
          localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(initialWords));
        }
      }
      this.isInitialized = true;
    }
  }

  // Get all vocabulary words
  static async getAllWords(): Promise<VocabularyWord[]> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.WORDS, 'readonly');
        const store = tx.objectStore(STORES.WORDS);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => reject(request.error);
      });
    } catch {
      const raw = localStorage.getItem(LS_KEYS.WORDS);
      return raw ? JSON.parse(raw) : [];
    }
  }

  // Save single word
  static async saveWord(word: VocabularyWord): Promise<void> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.WORDS, 'readwrite');
        const store = tx.objectStore(STORES.WORDS);
        const req = store.put(word);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      const words = await this.getAllWords();
      const idx = words.findIndex((w) => w.id === word.id);
      if (idx >= 0) words[idx] = word;
      else words.push(word);
      localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(words));
    }
  }

  // Save multiple words
  static async saveWords(words: VocabularyWord[]): Promise<void> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.WORDS, 'readwrite');
        const store = tx.objectStore(STORES.WORDS);
        words.forEach((w) => store.put(w));
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    } catch {
      localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(words));
    }
  }

  // Delete word by ID
  static async deleteWord(id: string): Promise<void> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.WORDS, 'readwrite');
        const store = tx.objectStore(STORES.WORDS);
        const req = store.delete(id);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      const words = await this.getAllWords();
      const filtered = words.filter((w) => w.id !== id);
      localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(filtered));
    }
  }

  // Get Practice Stats
  static async getPracticeStats(): Promise<PracticeStats> {
    const defaultStats: PracticeStats = {
      totalSynonymAnswered: 0,
      totalSynonymCorrect: 0,
      totalAntonymAnswered: 0,
      totalAntonymCorrect: 0,
      totalAnswered: 0,
      totalCorrect: 0,
      totalIncorrect: 0,
      synonymAccuracy: 0,
      antonymAccuracy: 0,
      overallAccuracy: 0,
    };

    try {
      const db = await openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORES.STATS, 'readonly');
        const store = tx.objectStore(STORES.STATS);
        const req = store.get('main_stats');
        req.onsuccess = () => {
          if (req.result && req.result.data) {
            resolve(req.result.data);
          } else {
            resolve(defaultStats);
          }
        };
        req.onerror = () => resolve(defaultStats);
      });
    } catch {
      const raw = localStorage.getItem(LS_KEYS.STATS);
      return raw ? JSON.parse(raw) : defaultStats;
    }
  }

  // Save Practice Stats
  static async savePracticeStats(stats: PracticeStats): Promise<void> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.STATS, 'readwrite');
        const store = tx.objectStore(STORES.STATS);
        const req = store.put({ id: 'main_stats', data: stats });
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      localStorage.setItem(LS_KEYS.STATS, JSON.stringify(stats));
    }
  }

  // App Settings
  static async getSettings(): Promise<AppSettings> {
    const defaultSettings: AppSettings = {
      autoPronounce: false,
      questionsPerSession: 10,
      srsIntervals: [1, 3, 7, 14, 30],
    };

    try {
      const db = await openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORES.SETTINGS, 'readonly');
        const store = tx.objectStore(STORES.SETTINGS);
        const req = store.get('app_config');
        req.onsuccess = () => resolve(req.result?.value || defaultSettings);
        req.onerror = () => resolve(defaultSettings);
      });
    } catch {
      const raw = localStorage.getItem(LS_KEYS.SETTINGS);
      return raw ? JSON.parse(raw) : defaultSettings;
    }
  }

  static async saveSettings(settings: AppSettings): Promise<void> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.SETTINGS, 'readwrite');
        const store = tx.objectStore(STORES.SETTINGS);
        const req = store.put({ key: 'app_config', value: settings });
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      localStorage.setItem(LS_KEYS.SETTINGS, JSON.stringify(settings));
    }
  }

  // Log today's study activity
  static async recordActivity(type: 'learn' | 'review'): Promise<void> {
    const today = new Date().toISOString().split('T')[0];
    const log = await this.getDailyLog(today);
    if (type === 'learn') log.wordsLearned += 1;
    else log.wordsReviewed += 1;
    await this.saveDailyLog(log);
  }

  static async getDailyLog(date: string): Promise<DailyLog> {
    const defaultLog: DailyLog = { date, wordsLearned: 0, wordsReviewed: 0 };
    try {
      const db = await openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORES.LOGS, 'readonly');
        const store = tx.objectStore(STORES.LOGS);
        const req = store.get(date);
        req.onsuccess = () => resolve(req.result || defaultLog);
        req.onerror = () => resolve(defaultLog);
      });
    } catch {
      const raw = localStorage.getItem(`${LS_KEYS.LOGS}_${date}`);
      return raw ? JSON.parse(raw) : defaultLog;
    }
  }

  static async saveDailyLog(log: DailyLog): Promise<void> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.LOGS, 'readwrite');
        const store = tx.objectStore(STORES.LOGS);
        const req = store.put(log);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      localStorage.setItem(`${LS_KEYS.LOGS}_${log.date}`, JSON.stringify(log));
    }
  }

  // Export full backup
  static async exportBackup(): Promise<string> {
    const words = await this.getAllWords();
    const stats = await this.getPracticeStats();
    const settings = await this.getSettings();
    const backup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      words,
      practiceStats: stats,
      settings,
    };
    return JSON.stringify(backup, null, 2);
  }

  // Restore backup
  static async restoreBackup(jsonData: string): Promise<{ success: boolean; count: number; error?: string }> {
    try {
      const data = JSON.parse(jsonData);
      if (!data.words || !Array.isArray(data.words)) {
        return { success: false, count: 0, error: 'Invalid backup format: missing words array' };
      }
      await this.saveWords(data.words);
      if (data.practiceStats) {
        await this.savePracticeStats(data.practiceStats);
      }
      if (data.settings) {
        await this.saveSettings(data.settings);
      }
      return { success: true, count: data.words.length };
    } catch (e: any) {
      return { success: false, count: 0, error: e.message || 'Failed to parse JSON backup file' };
    }
  }

  // Reset database back to default initial vocabulary
  static async resetToDefault(): Promise<void> {
    try {
      const db = await openDB();
      const tx = db.transaction([STORES.WORDS, STORES.STATS], 'readwrite');
      tx.objectStore(STORES.WORDS).clear();
      tx.objectStore(STORES.STATS).clear();
      await new Promise<void>((resolve) => {
        tx.oncomplete = () => resolve();
      });
      const initialWords = initialVocabData as unknown as VocabularyWord[];
      await this.saveWords(initialWords);
    } catch {
      localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(initialVocabData));
      localStorage.removeItem(LS_KEYS.STATS);
    }
  }
}
