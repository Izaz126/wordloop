import os
import re

STORAGE_FILE = os.path.join('src', 'services', 'storage.ts')

with open(STORAGE_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace VOCAB_DATA_VERSION = 3 with VOCAB_DATA_VERSION = 4
content = re.sub(
    r'const\s+VOCAB_DATA_VERSION\s*=\s*\d+;[^\r\n]*',
    'const VOCAB_DATA_VERSION = 4; // Version 4: Exact Bengali corrections for 71 words, Bona-fide & Far-fetched replacements, and robust IndexedDB synchronization',
    content
)

# New migrateVocabulary method and updated init method
new_methods = '''  // Perform safe versioned migration from initialVocabulary.json into IndexedDB/localStorage
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
    const normalizeKey = (str: string) => str.toLowerCase().replace(/[\\s\\-_=]+/g, '').trim();

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
  }'''

# Replace from `// Initialize DB and safely migrate vocabulary from audited dataset` through the end of `init()` method
pattern = r'  // Initialize DB and safely migrate vocabulary from audited dataset\s+static async init\(\): Promise<void> \{.*?this\.isInitialized = true;\s*\}\s*\}'

match = re.search(pattern, content, flags=re.DOTALL)
if not match:
    print("Could not match init() method in storage.ts")
    exit(1)

content = content[:match.start()] + new_methods + content[match.end():]

with open(STORAGE_FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print("storage.ts updated successfully!")
