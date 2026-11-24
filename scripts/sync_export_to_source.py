#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
WordLoop - Vocabulary Synchronization Script (Exported Backup -> Master Source Files)

This script safely takes your exported WordLoop backup (from Library or Settings)
and updates your master project files:
  1. src/data/initialVocabulary.json (Master vocabulary database)
  2. src/data/dictionaryLookup.ts   (Offline dictionary for instant enrichment)
  3. src/services/storage.ts        (Increments VOCAB_DATA_VERSION for smooth migration)

Safety features:
  - Automatically creates a timestamped backup before touching ANY files.
  - Validates JSON structure, detects duplicates, and checks required fields.
  - Supports --dry-run mode to preview all changes safely without modifying anything.
  - Preserves Bengali Unicode characters without corrupting them.
"""

import sys
import os
import json
import glob
import re
import shutil
from datetime import datetime

# Root paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)

DATA_FILE = os.path.join(PROJECT_ROOT, 'src', 'data', 'initialVocabulary.json')
LOOKUP_FILE = os.path.join(PROJECT_ROOT, 'src', 'data', 'dictionaryLookup.ts')
STORAGE_FILE = os.path.join(PROJECT_ROOT, 'src', 'services', 'storage.ts')
BACKUP_DIR = os.path.join(SCRIPT_DIR, 'sync_backups')

def find_latest_download_backup():
    """Look for the most recent wordloop-backup-*.json in Downloads or workspace."""
    search_paths = [
        os.path.join(os.path.expanduser('~'), 'Downloads', 'wordloop-backup-*.json'),
        os.path.join(PROJECT_ROOT, 'wordloop-backup-*.json'),
        os.path.join(SCRIPT_DIR, 'wordloop-backup-*.json'),
    ]
    candidates = []
    for pattern in search_paths:
        candidates.extend(glob.glob(pattern))
    
    if not candidates:
        return None
    # Sort by modification time, newest first
    candidates.sort(key=lambda p: os.path.getmtime(p), reverse=True)
    return candidates[0]

def load_backup_file(file_path):
    """Load and parse the JSON file, returning the list of words."""
    if not os.path.isfile(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")

    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Could be full backup object or direct array
    if isinstance(data, dict):
        if 'words' in data and isinstance(data['words'], list):
            return data['words'], data.get('exportedAt', 'Unknown')
        else:
            raise ValueError("JSON file is an object but does not contain a 'words' list.")
    elif isinstance(data, list):
        return data, 'Direct Array'
    else:
        raise ValueError(f"Unexpected JSON format in {file_path}. Expected array or backup object.")

def validate_words(words):
    """Validate word list for completeness and duplicates."""
    issues = []
    seen = {}
    valid_words = []

    for idx, item in enumerate(words):
        if not isinstance(item, dict):
            issues.append(f"Item #{idx} is not an object: {item}")
            continue

        raw_word = item.get('word', '').strip()
        if not raw_word:
            issues.append(f"Item #{idx} (id: {item.get('id')}) is missing a 'word' string.")
            continue

        lower = raw_word.lower()
        if lower in seen:
            issues.append(f"Duplicate word found: '{raw_word}' (conflicts with item #{seen[lower]})")
        seen[lower] = idx

        # Check required fields
        bangla = item.get('banglaMeaning', '').strip()
        defn = item.get('simpleDefinition', '').strip()
        if not bangla:
            issues.append(f"Word '{raw_word}' has empty 'banglaMeaning'.")
        if not defn:
            issues.append(f"Word '{raw_word}' has empty 'simpleDefinition'.")

        valid_words.append(item)

    return valid_words, issues

def create_source_backups():
    """Safely back up original source files before making any modifications."""
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    target_dir = os.path.join(BACKUP_DIR, f"backup_{timestamp}")
    os.makedirs(target_dir, exist_ok=True)

    copied = []
    for filepath in [DATA_FILE, LOOKUP_FILE, STORAGE_FILE]:
        if os.path.exists(filepath):
            filename = os.path.basename(filepath)
            dest = os.path.join(target_dir, filename)
            shutil.copy2(filepath, dest)
            copied.append(dest)

    return target_dir, copied

def get_current_data_version():
    """Extract VOCAB_DATA_VERSION from storage.ts."""
    if not os.path.exists(STORAGE_FILE):
        return 3
    with open(STORAGE_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'const\s+VOCAB_DATA_VERSION\s*=\s*(\d+);', content)
    if match:
        return int(match.group(1))
    return 3

def bump_data_version(new_version):
    """Update VOCAB_DATA_VERSION in storage.ts."""
    with open(STORAGE_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    new_line = f'const VOCAB_DATA_VERSION = {new_version}; // Version {new_version}: Synchronized from manual user corrections'
    updated_content = re.sub(r'const\s+VOCAB_DATA_VERSION\s*=\s*\d+;.*', new_line, content)

    with open(STORAGE_FILE, 'w', encoding='utf-8') as f:
        f.write(updated_content)

def generate_dictionary_lookup(words):
    """Generate the TypeScript content for dictionaryLookup.ts."""
    lookup_dict = {}
    for w in words:
        clean_word = w.get('word', '').strip()
        if not clean_word:
            continue
        lower_key = clean_word.lower()
        lookup_dict[lower_key] = {
            "word": clean_word,
            "pos": w.get('pos', 'noun'),
            "simpleDefinition": w.get('simpleDefinition', ''),
            "banglaMeaning": w.get('banglaMeaning', ''),
            "synonyms": w.get('synonyms', []),
            "antonyms": w.get('antonyms', []),
            "example": w.get('example', ''),
        }
        if w.get('ipa'):
            lookup_dict[lower_key]["ipa"] = w['ipa']
        if w.get('banglaPron'):
            lookup_dict[lower_key]["banglaPron"] = w['banglaPron']
        if w.get('exampleBangla'):
            lookup_dict[lower_key]["exampleBangla"] = w['exampleBangla']

    ts_content = f"""// Comprehensive Offline Dictionary for Vocabulary Enrichment ({len(lookup_dict)} entries)
export interface WordEnrichmentData {{
  word: string;
  pos: string;
  simpleDefinition: string;
  banglaMeaning: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
  ipa?: string;
  banglaPron?: string;
  exampleBangla?: string;
}}

export const DICTIONARY_LOOKUP: Record<string, WordEnrichmentData> = {json.dumps(lookup_dict, indent=2, ensure_ascii=False)};
"""
    return ts_content

def main():
    print("=" * 70)
    print("  WordLoop Vocabulary Synchronizer (Backup -> Master Source)")
    print("=" * 70)

    # Check for dry-run flag
    is_dry_run = '--dry-run' in sys.argv
    cli_args = [arg for arg in sys.argv[1:] if arg != '--dry-run']

    if is_dry_run:
        print("[MODE] Running in DRY-RUN mode. No files will be modified.")

    # 1. Determine input file
    input_file = None
    if cli_args:
        input_file = cli_args[0]
    else:
        print("\nNo file path provided. Searching for latest backup...")
        input_file = find_latest_download_backup()

    if not input_file or not os.path.exists(input_file):
        print("\n[ERROR] No valid backup JSON file found.")
        print("\nPlease specify your backup file path. Example:")
        print("  python scripts/sync_export_to_source.py ~/Downloads/wordloop-backup-2026-11-24.json")
        sys.exit(1)

    print(f"\n[1] Reading backup file: {input_file}")
    words_from_backup, exported_at = load_backup_file(input_file)
    print(f"    Exported at: {exported_at}")
    print(f"    Total words in backup: {len(words_from_backup)}")

    # 2. Validate words
    print("\n[2] Validating vocabulary entries...")
    valid_words, issues = validate_words(words_from_backup)
    if issues:
        print(f"    [WARNING] Found {len(issues)} validation notices:")
        for issue in issues[:10]:
            print(f"      - {issue}")
        if len(issues) > 10:
            print(f"      ... and {len(issues) - 10} more notices.")
    else:
        print("    [OK] All words passed structural validation with zero errors.")

    # 3. Compare with current initialVocabulary.json
    print("\n[3] Comparing against existing initialVocabulary.json...")
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        existing_source = json.load(f)

    existing_map = {item['word'].lower(): item for item in existing_source}
    backup_map = {item['word'].lower(): item for item in valid_words}

    modified_count = 0
    added_count = 0
    unchanged_count = 0

    merged_source_list = []

    # Process all words from the backup
    for b_word in valid_words:
        lower = b_word['word'].lower()
        if lower in existing_map:
            orig = existing_map[lower]
            # Check if any lexical content changed
            changed = (
                b_word.get('banglaMeaning') != orig.get('banglaMeaning') or
                b_word.get('simpleDefinition') != orig.get('simpleDefinition') or
                b_word.get('pos') != orig.get('pos') or
                b_word.get('synonyms') != orig.get('synonyms') or
                b_word.get('antonyms') != orig.get('antonyms') or
                b_word.get('example') != orig.get('example') or
                b_word.get('exampleBangla') != orig.get('exampleBangla')
            )
            if changed:
                modified_count += 1
            else:
                unchanged_count += 1

            # Merge updated content into clean source entry (preserving template IDs/structure)
            merged_entry = {
                "id": orig.get('id', b_word.get('id')),
                "word": b_word['word'].strip(),
                "pos": b_word.get('pos', orig.get('pos', 'noun')),
                "simpleDefinition": b_word.get('simpleDefinition', orig.get('simpleDefinition', '')).strip(),
                "banglaMeaning": b_word.get('banglaMeaning', orig.get('banglaMeaning', '')).strip(),
                "synonyms": b_word.get('synonyms', orig.get('synonyms', [])),
                "antonyms": b_word.get('antonyms', orig.get('antonyms', [])),
                "example": b_word.get('example', orig.get('example', '')).strip(),
                "source": orig.get('source', b_word.get('source', 'Personal Collection')),
                # Baseline learning fields for clean installations:
                "category": orig.get('category', 'Learning'),
                "stage": 0,
                "consecutiveCorrect": 0,
                "intervalDays": 0,
                "nextReviewDate": orig.get('nextReviewDate', datetime.now().strftime('%Y-%m-%dT00:00:00.000Z')),
                "lastReviewedDate": None,
                "timesReviewed": 0,
                "timesCorrect": 0,
                "timesIncorrect": 0,
                "isDifficult": False,
                "createdAt": orig.get('createdAt', datetime.now().strftime('%Y-%m-%dT00:00:00.000Z')),
                "updatedAt": datetime.now().strftime('%Y-%m-%dT00:00:00.000Z')
            }
            if b_word.get('exampleBangla'):
                merged_entry['exampleBangla'] = b_word['exampleBangla'].strip()
            if b_word.get('ipa'):
                merged_entry['ipa'] = b_word['ipa'].strip()
            if b_word.get('banglaPron'):
                merged_entry['banglaPron'] = b_word['banglaPron'].strip()

            merged_source_list.append(merged_entry)
        else:
            # New word added by user
            added_count += 1
            merged_source_list.append(b_word)

    # Check for words in source that were not in backup
    missing_in_backup = [w for lower, w in existing_map.items() if lower not in backup_map]
    if missing_in_backup:
        print(f"    [NOTICE] {len(missing_in_backup)} words in source were not found in backup (preserving them):")
        for m in missing_in_backup[:5]:
            print(f"      - {m['word']}")
        # Keep them in source so no words are ever lost
        merged_source_list.extend(missing_in_backup)

    # Sort strictly alphabetically (A-Z)
    merged_source_list.sort(key=lambda x: x['word'].strip().lower())

    print(f"\n    Summary of Changes:")
    print(f"      - Words modified by user: {modified_count}")
    print(f"      - Words unchanged:        {unchanged_count}")
    print(f"      - New words added:        {added_count}")
    print(f"      - Total resulting words:  {len(merged_source_list)}")

    current_ver = get_current_data_version()
    new_ver = current_ver + 1
    print(f"\n    Data Version Migration:")
    print(f"      - Current VOCAB_DATA_VERSION: {current_ver}")
    print(f"      - Target  VOCAB_DATA_VERSION: {new_ver} (ensures clients auto-update)")

    if is_dry_run:
        print("\n[DRY-RUN COMPLETE] Validation passed successfully! No files were changed.")
        print("To apply these changes, run the script without '--dry-run'.")
        return

    # 4. Create automatic timestamped backup of source files
    print("\n[4] Creating safety backup of existing source files...")
    backup_folder, copied_files = create_source_backups()
    print(f"    Safety backup created at: {backup_folder}")
    for cf in copied_files:
        print(f"      - {os.path.basename(cf)}")

    # 5. Write updated initialVocabulary.json
    print(f"\n[5] Writing updated vocabulary to {os.path.basename(DATA_FILE)}...")
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(merged_source_list, f, indent=2, ensure_ascii=False)
    print(f"    [OK] Saved {len(merged_source_list)} words.")

    # 6. Generate and write updated dictionaryLookup.ts
    print(f"\n[6] Regenerating {os.path.basename(LOOKUP_FILE)}...")
    lookup_content = generate_dictionary_lookup(merged_source_list)
    with open(LOOKUP_FILE, 'w', encoding='utf-8') as f:
        f.write(lookup_content)
    print(f"    [OK] Saved dictionary lookup.")

    # 7. Bump VOCAB_DATA_VERSION in storage.ts
    print(f"\n[7] Bumping VOCAB_DATA_VERSION to {new_ver} in {os.path.basename(STORAGE_FILE)}...")
    bump_data_version(new_ver)
    print(f"    [OK] Data version set to {new_ver}.")

    print("\n" + "=" * 70)
    print("  [SUCCESS] All source files successfully updated and synchronized!")
    print("=" * 70)
    print("\nNext steps:")
    print("  1. Verify the project builds cleanly:")
    print("     npm run build")
    print("  2. When you are ready to publish to GitHub Pages:")
    print("     git add src/data/initialVocabulary.json src/data/dictionaryLookup.ts src/services/storage.ts")
    print('     git commit -m "Update master vocabulary dataset from manual corrections"')
    print("     git push origin main")
    print("=" * 70)

if __name__ == '__main__':
    main()
