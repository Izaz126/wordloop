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
  DATA_VERSION: 'wordloop_data_version',
};

const VOCAB_DATA_VERSION = 4; // Version 4: Exact Bengali corrections for 71 words, Bona-fide & Far-fetched replacements, and robust IndexedDB synchronization
const VERSION_KEY = 'wordloop_data_version';

export class StorageService {
  private static isInitialized = false;

  // Get current vocabulary data version
  static async getDataVersion(): Promise<number> {
    try {
      const db = await openDB();
      return new Promise((resolve) => {
        const tx = db.transaction(STORES.SETTINGS, 'readonly');
        const store = tx.objectStore(STORES.SETTINGS);
        const req = store.get(VERSION_KEY);
        req.onsuccess = () => resolve(req.result?.value ?? 0);
        req.onerror = () => resolve(0);
      });
    } catch {
      const raw = localStorage.getItem(LS_KEYS.DATA_VERSION);
      return raw ? parseInt(raw, 10) : 0;
    }
  }

  // Set vocabulary data version
  static async setDataVersion(version: number): Promise<void> {
    try {
      const db = await openDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORES.SETTINGS, 'readwrite');
        const store = tx.objectStore(STORES.SETTINGS);
        const req = store.put({ key: VERSION_KEY, value: version });
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
      });
    } catch {
      localStorage.setItem(LS_KEYS.DATA_VERSION, version.toString());
    }
  }

  // Perform safe versioned migration from initialVocabulary.json into IndexedDB/localStorage
  // Preserves 100% of user learning stages, intervals, review counts, logs, and quiz stats
  static async migrateVocabulary(force = false): Promise<void> {
    const existingWords = await this.getAllWords();
    const initialWords = initialVocabData as unknown as VocabularyWord[];
    const currentVersion = await this.getDataVersion();

    if (existingWords.length === 0) {
      console.log('Seeding initial vocabulary from master dataset...');
      await this.saveWords(initialWords);
      await this.setDataVersion(VOCAB_DATA_VERSION);
      return;
    }

    if (!force && currentVersion >= VOCAB_DATA_VERSION) {
      return;
    }

    console.log(`Migrating vocabulary to Version ${VOCAB_DATA_VERSION} (preserving all user learning progress)...`);

    // Helper to normalize strings for comparison (removes spaces, hyphens, equals, underscores)
    const normalizeKey = (str: string) => str.toLowerCase().replace(/[\s\-_=]+/g, '').trim();

    // Map existing words by multiple lookup keys
    const existingById = new Map<string, VocabularyWord>();
    const existingByLower = new Map<string, VocabularyWord>();
    const existingByNorm = new Map<string, VocabularyWord>();

    for (const w of existingWords) {
      if (w.id) existingById.set(w.id, w);
      const lower = w.word.trim().toLowerCase();
      existingByLower.set(lower, w);
      existingByNorm.set(normalizeKey(w.word), w);
    }

    const mergedList: VocabularyWord[] = [];
    const matchedExistingIds = new Set<string>();

    // Aliases to resolve old variations, OCR artifacts, or split titles:
    const aliasMap: Record<string, string[]> = {
      'bona-fide': ['bona', 'bona fide', 'bona = fide', 'bonafide'],
      'far-fetched': ['far', 'far fetched', 'far = fetched', 'farfetched'],
    };

    // 1. Process all verified words from master source
    for (const newW of initialWords) {
      const lower = newW.word.trim().toLowerCase();
      const norm = normalizeKey(newW.word);

      // Find best match in existing user data:
      let existing: VocabularyWord | undefined = undefined;

      // Check ID first
      if (newW.id && existingById.has(newW.id)) {
        existing = existingById.get(newW.id);
      }

      // Check exact lowercased word
      if (!existing && existingByLower.has(lower)) {
        existing = existingByLower.get(lower);
      }

      // Check normalized word (handles hyphens, equals signs, spaces)
      if (!existing && existingByNorm.has(norm)) {
        existing = existingByNorm.get(norm);
      }

      // Check known aliases (e.g. Bona-fide -> Bona / Bona = fide)
      if (!existing && aliasMap[lower]) {
        for (const alias of aliasMap[lower]) {
          if (existingByLower.has(alias)) {
            existing = existingByLower.get(alias);
            break;
          }
          if (existingByNorm.has(normalizeKey(alias))) {
            existing = existingByNorm.get(normalizeKey(alias));
            break;
          }
        }
      }

      if (existing) {
        matchedExistingIds.add(existing.id);

        // Update lexical content from master source, STRICTLY PRESERVE all learning metrics
        const merged: VocabularyWord = {
          ...existing,
          id: newW.id, // Ensure canonical ID from master dataset
          word: newW.word,
          pos: newW.pos,
          simpleDefinition: newW.simpleDefinition,
          banglaMeaning: newW.banglaMeaning,
          synonyms: newW.synonyms,
          antonyms: newW.antonyms,
          example: newW.example,
          exampleBangla: newW.exampleBangla || existing.exampleBangla,
          source: newW.source || existing.source,
          // Strictly preserve 100% of the user's learning history:
          category: existing.category || 'Learning',
          stage: existing.stage ?? 0,
          consecutiveCorrect: existing.consecutiveCorrect ?? 0,
          intervalDays: existing.intervalDays ?? 0,
          nextReviewDate: existing.nextReviewDate || newW.nextReviewDate,
          lastReviewedDate: existing.lastReviewedDate ?? null,
          timesReviewed: existing.timesReviewed ?? 0,
          timesCorrect: existing.timesCorrect ?? 0,
          timesIncorrect: existing.timesIncorrect ?? 0,
          isDifficult: existing.isDifficult ?? false,
          createdAt: existing.createdAt || newW.createdAt,
          updatedAt: new Date().toISOString(),
        };
        mergedList.push(merged);
      } else {
        // Brand new word from master dataset
        mergedList.push({
          ...newW,
          category: 'Learning',
        });
      }
    }

    // 2. Preserve genuine custom words manually added by the user in the app
    const allKnownAliases = new Set<string>();
    Object.values(aliasMap).forEach((aliases) => {
      aliases.forEach((a) => {
        allKnownAliases.add(a.toLowerCase());
        allKnownAliases.add(normalizeKey(a));
      });
    });

    for (const w of existingWords) {
      if (matchedExistingIds.has(w.id)) continue;
      const lower = w.word.trim().toLowerCase();
      const norm = normalizeKey(w.word);

      // Skip obsolete aliases or duplicate old records
      if (allKnownAliases.has(lower) || allKnownAliases.has(norm)) {
        continue;
      }

      // Check if it's already in mergedList
      const alreadyInList = mergedList.some(
        (m) => m.id === w.id || m.word.trim().toLowerCase() === lower
      );
      if (!alreadyInList) {
        mergedList.push(w);
      }
    }

    // 3. Atomically overwrite STORES.WORDS with clean merged list
    try {
      const db = await openDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORES.WORDS, 'readwrite');
        const store = tx.objectStore(STORES.WORDS);
        store.clear(); // Clears STORES.WORDS only; STORES.STATS, STORES.LOGS, STORES.SETTINGS remain untouched
        mergedList.forEach((w) => store.put(w));
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
      await this.setDataVersion(VOCAB_DATA_VERSION);
      console.log(`Successfully migrated ${mergedList.length} vocabulary words to data version ${VOCAB_DATA_VERSION}.`);
    } catch {
      localStorage.setItem(LS_KEYS.WORDS, JSON.stringify(mergedList));
      localStorage.setItem(LS_KEYS.DATA_VERSION, VOCAB_DATA_VERSION.toString());
    }
  }

  // Initialize DB and safely migrate vocabulary from master dataset
  static async init(): Promise<void> {
    if (this.isInitialized) return;

    try {
      const currentVersion = await this.getDataVersion();
      const existingWords = await this.getAllWords();

      if (existingWords.length === 0 || currentVersion < VOCAB_DATA_VERSION) {
        await this.migrateVocabulary(false);
      }
      this.isInitialized = true;
    } catch (err) {
      console.warn('Falling back to localStorage for storage:', err);
      try {
        await this.migrateVocabulary(false);
      } catch (e) {
        console.error('Migration failed in fallback:', e);
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
