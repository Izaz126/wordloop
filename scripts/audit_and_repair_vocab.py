import os
import sys
import json
import time
import urllib.request
import re

DATA_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'initialVocabulary.json')
LOOKUP_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'dictionaryLookup.ts')
CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

KEY = os.environ.get('GEMINI_API_KEY') or os.environ.get('GOOGLE_API_KEY')
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={KEY}"

# Specific known corrections for encoding/typos
FIX_CORRECTIONS = {
    "bona": {
        "word": "Bona fide",
        "bangla": "খাঁটি / প্রকৃত",
        "pos": "adjective",
        "def": "Genuine, real, and made or done in good faith without deceit.",
        "syns": ["Genuine", "Authentic", "Real", "Legitimate"],
        "ants": ["Bogus", "Counterfeit", "Fake"],
        "ex": "He is a bona fide expert with decades of research experience."
    },
    "far": {
        "word": "Far-fetched",
        "bangla": "অস্বাভাবিক / সন্দেহজনক",
        "pos": "adjective",
        "def": "Very unlikely to be true or difficult to believe; improbable.",
        "syns": ["Unlikely", "Improbable", "Incredible", "Doubtful"],
        "ants": ["Plausible", "Believable", "Convincing"],
        "ex": "His explanation for why he was late seemed completely far-fetched."
    },
    "a bone to pick": {
        "word": "A bone to pick",
        "bangla": "রাগান্বিত হওয়া / কথা বলার মতো অভিযোগ থাকা",
        "pos": "idiom",
        "def": "A complaint or dispute that you want to discuss and settle with someone.",
        "syns": ["Grievance", "Complaint", "Dispute"],
        "ants": ["Harmony", "Agreement"],
        "ex": "I have a bone to pick with you regarding yesterday's canceled meeting."
    },
    "expedite": {
        "word": "Expedite",
        "bangla": "অগ্রগতি ত্বরান্বিত করা",
        "pos": "verb",
        "def": "To make an action or process happen much faster.",
        "syns": ["Speed up", "Accelerate", "Hasten", "Quicken"],
        "ants": ["Delay", "Hinder", "Impede"],
        "ex": "Paying an extra delivery fee will expedite the shipping of your package."
    },
    "green eye": {
        "word": "Green eye",
        "bangla": "ঈর্ষান্বিত",
        "pos": "idiom",
        "def": "A feeling of deep jealousy or envy towards another person.",
        "syns": ["Jealousy", "Envy", "Resentment"],
        "ants": ["Contentment", "Goodwill"],
        "ex": "His promotion stirred the green eye of his less diligent colleagues."
    },
    "orchestrate": {
        "word": "Orchestrate",
        "bangla": "সমন্বিত করা / কৌশলে পরিকল্পনা করা",
        "pos": "verb",
        "def": "To plan and organize something carefully, often behind the scenes.",
        "syns": ["Organize", "Coordinate", "Plan", "Arrange"],
        "ants": ["Disorganize", "Derange", "Botch"],
        "ex": "The general orchestrated a successful retreat without losing a single soldier."
    },
    "vicissitudes": {
        "word": "Vicissitudes",
        "bangla": "উত্থান-পতন / জীবনের পরিবর্তন ও চড়াই-উতরাই",
        "pos": "noun",
        "def": "The unexpected changes, difficulties, and ups and downs that happen in life.",
        "syns": ["Ups and downs", "Fluctuations", "Changes", "Variations"],
        "ants": ["Stability", "Constancy", "Uniformity"],
        "ex": "Despite the vicissitudes of life, she remained hopeful and resilient."
    },
    "aspire": {
        "word": "Aspire",
        "bangla": "আকাঙ্ক্ষা করা / ইচ্ছা পোষণ করা",
        "pos": "verb",
        "def": "To direct one's hopes, dreams, or ambitions towards achieving something grand.",
        "syns": ["Desire", "Aim", "Strive", "Yearn"],
        "ants": ["Despise", "Disdain", "Decline"],
        "ex": "She aspired to become a dedicated doctor helping rural communities."
    },
    "convict": {
        "word": "Convict",
        "bangla": "দোষী সাব্যস্ত করা",
        "pos": "verb",
        "def": "To officially declare someone guilty of a criminal offense in a court of law.",
        "syns": ["Condemn", "Sentence", "Find guilty"],
        "ants": ["Acquit", "Exonerate", "Absolve"],
        "ex": "The jury had sufficient evidence to convict the corrupt official."
    },
    "fawn": {
        "word": "Fawn",
        "bangla": "তোষামোদ করা / তৈলমর্দন করা",
        "pos": "verb",
        "def": "To give excessive flattery, attention, or affection to gain an advantage.",
        "syns": ["Flatter", "Grovel", "Cower", "Court"],
        "ants": ["Scorn", "Disdain", "Defy"],
        "ex": "Some employees fawn over the manager hoping for a quick promotion."
    },
    "futile": {
        "word": "Futile",
        "bangla": "নিরর্থক / পণ্ডশ্রম",
        "pos": "adjective",
        "def": "Incapable of producing any useful result; completely pointless and wasted.",
        "syns": ["Useless", "Pointless", "Fruitless", "Vain"],
        "ants": ["Fruitful", "Useful", "Productive"],
        "ex": "Their futile attempts to revive the flooded engine proved exhausting."
    },
    "succinct": {
        "word": "Succinct",
        "bangla": "সংক্ষিপ্ত / প্রাঞ্জল",
        "pos": "adjective",
        "def": "Briefly and clearly expressed; concise and directly to the point.",
        "syns": ["Concise", "Brief", "Compact", "Terse"],
        "ants": ["Verbose", "Wordy", "Lengthy"],
        "ex": "He gave a succinct summary of the complex financial report."
    },
    "ubiquitous": {
        "word": "Ubiquitous",
        "bangla": "সর্বব্যাপী / সর্বত্র বিদ্যমান",
        "pos": "adjective",
        "def": "Present, appearing, or found everywhere at the same time.",
        "syns": ["Omnipresent", "Pervasive", "Widespread", "Universal"],
        "ants": ["Rare", "Scarce", "Seldom"],
        "ex": "Smartphones have become ubiquitous in modern daily life."
    },
    "xenophobia": {
        "word": "Xenophobia",
        "bangla": "বিদেশি-বিদ্বেষ",
        "pos": "noun",
        "def": "Deep dislike, distrust, or prejudice against people from other countries.",
        "syns": ["Intolerance", "Chauvinism", "Prejudice", "Bias"],
        "ants": ["Tolerance", "Hospitality", "Acceptance"],
        "ex": "The educational program was created to eradicate prejudice and xenophobia."
    }
}

def clean_bangla(text):
    text = text.replace('রাগাি:ত', 'রাগান্বিত')
    text = text.replace('ধরাি:ত', 'ত্বরান্বিত')
    text = text.replace('ঈষর্াি:ত', 'ঈর্ষান্বিত')
    text = text.replace('সুসমি:ত', 'সমন্বিত')
    text = text.replace('সণ্টীত', 'সংগীত')
    text = text.replace('উথানপতন', 'উত্থান-পতন')
    text = text.replace('প্রতিকি্রয়ো', 'প্রতিক্রিয়া')
    text = text.replace('সনে্দহজনক', 'সন্দেহজনক')
    text = text.replace('বিলুপ্তকরা', 'বিলুপ্ত করা')
    text = text.replace('মিশুক/ সামাজিক', 'মিশুক / সামাজিক')
    return text.strip()

def call_gemini_batch(items):
    prompt = f"""You are a master English lexicographer and vocabulary teacher creating flashcards for ESL and competitive exam students (BCS, Bank, GRE).
Return a JSON array containing one object for each of the following words.

Requirements for each object:
- "word": exact word from input
- "pos": correct grammatical category ("noun", "verb", "adjective", "adverb", or "idiom")
- "simpleDefinition": a clear, accurate, plain English definition explaining its actual meaning. Must be simple and easy for a beginner to understand. NEVER include trivia, albums, films, songs, books, band names, or proper nouns.
- "synonyms": list of 3-4 genuine, useful, matching English synonyms. NEVER use generic words like "Related" or "Similar".
- "antonyms": list of 1-3 genuine, contextual opposite words. If the word genuinely has no natural opposite, use ["No common antonym"].
- "example": a realistic, natural English example sentence that clearly demonstrates the word's meaning in a real situation. NEVER use "The student learned how to use..." or "The teacher gave an insightful explanation...".

Input words with their Bengali meanings:
{json.dumps(items, ensure_ascii=False, indent=2)}"""

    payload = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "response_mime_type": "application/json",
            "temperature": 0.2
        }
    }).encode('utf-8')

    req = urllib.request.Request(API_URL, data=payload, headers={"Content-Type": "application/json"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=35) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                raw_text = data['candidates'][0]['content']['parts'][0]['text']
                parsed = json.loads(raw_text)
                return parsed
        except Exception as e:
            err_str = str(e)
            if '429' in err_str:
                wait_sec = 35 + attempt * 20
                print(f"  Attempt {attempt+1} got rate limited (429). Cooling down for {wait_sec}s...")
                time.sleep(wait_sec)
            else:
                wait_sec = 5 * (attempt + 1)
                print(f"  Attempt {attempt+1} failed: {e}. Retrying in {wait_sec}s...")
                time.sleep(wait_sec)
    return None

def main():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        vocab = json.load(f)

    print(f"Loaded {len(vocab)} entries from {DATA_FILE}")

    # Load cache if exists
    cache = {}
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                cache = json.load(f)
            print(f"Loaded {len(cache)} audited entries from cache.")
        except Exception:
            cache = {}

    # Identify entries needing audit
    to_audit = []
    for w in vocab:
        w_lower = w['word'].lower()
        
        # Check if already in cache
        if w_lower in cache:
            continue
            
        # Check if in hardcoded fix
        if w_lower in FIX_CORRECTIONS:
            continue

        ex = w.get('example', '')
        defn = w.get('simpleDefinition', '')
        syns = w.get('synonyms', [])
        ants = w.get('antonyms', [])

        is_generic_ex = any(k in ex.lower() for k in ['student learned', 'teacher gave', 'insightful explanation', 'correctly in a sentence'])
        is_trivia_def = any(k in defn.lower() for k in ['album', 'film', 'recorded', 'band', 'single by', 'pauly shore', 'released in', 'german mps'])
        has_bad_syn = any(s in ['Related', 'Similar'] or s.startswith('Related to') for s in syns)
        has_bad_ant = ants == ['No common antonym']
        is_pdf2 = 'pdf2' in w.get('id', '')

        if is_generic_ex or is_trivia_def or has_bad_syn or is_pdf2:
            to_audit.append({
                "word": w['word'],
                "bangla": clean_bangla(w['banglaMeaning'])
            })

    print(f"Entries to audit with Gemini: {len(to_audit)}")

    BATCH_SIZE = 35
    total_batches = (len(to_audit) + BATCH_SIZE - 1) // BATCH_SIZE

    for b_idx in range(total_batches):
        batch = to_audit[b_idx * BATCH_SIZE : (b_idx + 1) * BATCH_SIZE]
        print(f"Processing Batch {b_idx + 1}/{total_batches} ({len(batch)} words)...")
        results = call_gemini_batch(batch)
        if results:
            for item in results:
                w_key = item['word'].strip().lower()
                cache[w_key] = item
            # Save cache after each batch
            with open(CACHE_FILE, 'w', encoding='utf-8') as f:
                json.dump(cache, f, ensure_ascii=False, indent=2)
            print(f"  Batch {b_idx + 1} saved successfully. Total cached: {len(cache)}")
        else:
            print(f"  ERROR: Batch {b_idx + 1} failed completely!")
        time.sleep(6)

    print("Gemini audit processing complete. Applying corrections to vocabulary dataset...")

    # Now apply corrections
    corrected_count = 0
    syns_fixed = 0
    ants_fixed = 0
    examples_fixed = 0
    defs_fixed = 0
    pos_fixed = 0
    bangla_fixed = 0

    updated_vocab = []
    lookup = {}

    for w in vocab:
        w_lower = w['word'].lower()
        old_def = w.get('simpleDefinition', '')
        old_ex = w.get('example', '')
        old_pos = w.get('pos', '')
        old_syns = w.get('synonyms', [])
        old_ants = w.get('antonyms', [])
        old_bn = w.get('banglaMeaning', '')

        # Check hardcoded fix first
        if w_lower in FIX_CORRECTIONS:
            fix = FIX_CORRECTIONS[w_lower]
            w['word'] = fix['word']
            w['banglaMeaning'] = fix['bangla']
            w['pos'] = fix['pos']
            w['simpleDefinition'] = fix['def']
            w['synonyms'] = fix['syns']
            w['antonyms'] = fix['ants']
            w['example'] = fix['ex']
            corrected_count += 1
            defs_fixed += 1
            examples_fixed += 1
            syns_fixed += 1
            ants_fixed += 1
            pos_fixed += 1
        elif w_lower in cache:
            item = cache[w_lower]
            new_pos = item.get('pos', w.get('pos', 'noun')).lower()
            if 'plural' in new_pos or 'noun' in new_pos:
                new_pos = 'noun'
            elif 'verb' in new_pos:
                new_pos = 'verb'
            elif 'adj' in new_pos:
                new_pos = 'adjective'
            elif 'adv' in new_pos:
                new_pos = 'adverb'
            else:
                new_pos = 'noun'

            new_def = item.get('simpleDefinition', w.get('simpleDefinition', ''))
            new_syns = item.get('synonyms', w.get('synonyms', []))
            new_ants = item.get('antonyms', w.get('antonyms', []))
            new_ex = item.get('example', w.get('example', ''))
            new_bn = clean_bangla(w.get('banglaMeaning', ''))

            if new_def != old_def:
                defs_fixed += 1
            if new_ex != old_ex:
                examples_fixed += 1
            if new_pos != old_pos:
                pos_fixed += 1
            if new_syns != old_syns:
                syns_fixed += 1
            if new_ants != old_ants:
                ants_fixed += 1
            if new_bn != old_bn:
                bangla_fixed += 1

            w['pos'] = new_pos
            w['simpleDefinition'] = new_def
            w['synonyms'] = new_syns
            w['antonyms'] = new_ants
            w['example'] = new_ex
            w['banglaMeaning'] = new_bn
            corrected_count += 1
        else:
            w['banglaMeaning'] = clean_bangla(w.get('banglaMeaning', ''))

        updated_vocab.append(w)

        lookup[w['word'].lower()] = {
            "word": w['word'],
            "pos": w['pos'],
            "simpleDefinition": w['simpleDefinition'],
            "banglaMeaning": w['banglaMeaning'],
            "synonyms": w['synonyms'],
            "antonyms": w['antonyms'],
            "example": w['example']
        }

    # Save initialVocabulary.json
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(updated_vocab, f, ensure_ascii=False, indent=2)

    # Save dictionaryLookup.ts
    ts_content = f"// Comprehensive Offline Dictionary for Vocabulary Enrichment ({len(lookup)} entries)\n"
    ts_content += "export interface WordEnrichmentData {\n"
    ts_content += "  word: string;\n"
    ts_content += "  pos: string;\n"
    ts_content += "  simpleDefinition: string;\n"
    ts_content += "  banglaMeaning: string;\n"
    ts_content += "  synonyms: string[];\n"
    ts_content += "  antonyms: string[];\n"
    ts_content += "  example: string;\n"
    ts_content += "  ipa?: string;\n"
    ts_content += "  banglaPron?: string;\n"
    ts_content += "  exampleBangla?: string;\n"
    ts_content += "}\n\n"
    ts_content += "export const DICTIONARY_LOOKUP: Record<string, WordEnrichmentData> = "
    ts_content += json.dumps(lookup, indent=2, ensure_ascii=False)
    ts_content += ";\n"

    with open(LOOKUP_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)

    print(f"\n=== AUDIT SUMMARY ===")
    print(f"Total vocabulary words: {len(updated_vocab)}")
    print(f"Total entries corrected/enriched: {corrected_count}")
    print(f"Definitions corrected: {defs_fixed}")
    print(f"Examples rewritten (natural): {examples_fixed}")
    print(f"Parts of speech corrected: {pos_fixed}")
    print(f"Synonyms corrected/added: {syns_fixed}")
    print(f"Antonyms corrected/added: {ants_fixed}")
    print(f"Bangla meanings cleaned/fixed: {bangla_fixed}")

if __name__ == '__main__':
    main()
