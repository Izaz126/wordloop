#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Apply 71 Bengali meaning corrections and 2 entry replacements (Bona-fide, Far-fetched).
Updates:
  - src/data/initialVocabulary.json
  - src/data/dictionaryLookup.ts
"""

import os
import json
import shutil
from datetime import datetime

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
DATA_FILE = os.path.join(PROJECT_ROOT, 'src', 'data', 'initialVocabulary.json')
LOOKUP_FILE = os.path.join(PROJECT_ROOT, 'src', 'data', 'dictionaryLookup.ts')

SECTION_1_CORRECTIONS = {
    'Abrasive': 'ঘর্ষণকারী, ঘষে পরিষ্কার বা মসৃণ করার উপযোগী',
    'Aloof': 'দূরত্ব বজায় রাখা, নির্লিপ্ত, উদাসীন বা বিচ্ছিন্ন',
    'Amass': 'জমা করা, সঞ্চয় করা, পুঞ্জীভূত করা বা প্রচুর পরিমাণে সংগ্রহ করা',
    'Amenable': 'সহজে রাজি বা সম্মত হয় এমন, নমনীয়',
    'Amplification': 'সম্প্রসারণ বা কোনো কিছু বৃদ্ধি করা',
    'Asylum': 'আশ্রয়, নিরাপত্তা',
    'Blaze': 'প্রজ্জ্বলিত আগুন, অগ্নিশিখা, বা উজ্জ্বল আলো/দীপ্তি',
    'Bondage': 'দাসত্ব, বন্দিত্ব, নিয়ন্ত্রণ, সীমাবদ্ধতা',
    'Chastity': 'সতীত্ব বা চারিত্রিক বিশুদ্ধতা',
    'Chronic': 'দীর্ঘকাল ধরে চলে আসছে এমন কোনো অবস্থা, রোগ বা অভ্যাসকে বোঝাতে এই শব্দটি ব্যবহৃত হয়',
    'Composure': 'মানসিক স্থিরতা, আত্মসংযম, ধীরস্থির ভাব',
    'Concubine': 'উপপত্নী; একজন পুরুষের সাথে বৈবাহিক সম্পর্কের বাইরে থাকা নারী',
    'conduit': 'নালী বা মাধ্যম যার মধ্য দিয়ে জল, গ্যাস, বিদ্যুৎবাহী তার বা কোনো তথ্য ও সম্পদ এক স্থান থেকে অন্য স্থানে প্রবাহিত হয়',
    'Cosmos': 'মহাবিশ্ব, মহাজাগতিক',
    'crank': 'অদ্ভুত স্বভাবের মানুষ, বা কোনো যন্ত্রকে সচল করার জন্য ব্যবহৃত হাতল বা দণ্ড',
    'crone': 'বৃদ্ধা; কুৎসিত বৃদ্ধা নারী, ডাইনি',
    'cunning': 'ধূর্ত, চতুর, চালাক',
    'cupid': 'প্রেমের প্রতীক; প্রেমের অনুভূতি',
    'currency': 'মুদ্রা, গ্রহণযোগ্যতা,প্রচলন',
    'curved': 'বাঁকা, বক্র, ধনুকাকৃতি',
    'Cynical': 'অবিশ্বাসী, সন্দেহপ্রবণ, নৈরাশ্যবাদী',
    'demise': 'মৃত্যু, অবসান',
    'Demonstrative': 'নির্দেশনামূলক, অনুভূতিপ্রবণ',
    'Discover': 'আবিষ্কার করা',
    'Disinterested': 'নিরপেক্ষ, পক্ষপাতহীন, নিঃস্বার্থ',
    'Disparity': 'অসাম্য, বৈষম্য, পার্থক্য',
    'Divergence': 'অপসরণ, বিচ্যুতি, কেন্দ্র থেকে দূরে সরে যাওয়া, মতপার্থক্য',
    'Divine': 'ঈশ্বরীয়',
    'Equanimity': 'মানসিক স্থিরতা, প্রশান্তি, ধীরস্থির ভাব',
    'Errant': 'ভুল পথে চালিত, বিপথগামী, নৈতিকতা বর্জিত',
    'Expel': 'বহিষ্কার করা',
    'Fiddling': 'তুচ্ছ; নগণ্য',
    'Flat out': 'সম্পূর্ণভাবে; সর্বোচ্চ প্রচেষ্টায়',
    'Frisky': 'চঞ্চল; প্রাণবন্ত',
    'Genesis': 'উৎপত্তি; উদ্ভব; সূচনা',
    'Get along': 'কারও সঙ্গে মিলেমিশে থাকা বা ভালো সম্পর্ক বজায় রাখা',
    'Gracious': 'দয়ালু; সদয়',
    'Grateful': 'কৃতজ্ঞ',
    'Gratitude': 'কৃতজ্ঞতা, কৃতজ্ঞতা স্বীকার',
    'Hazardous': 'বিপজ্জনক; ঝুঁকিপূর্ণ',
    'Heckle': 'বক্তৃতার সময় বিরক্ত করা; প্রশ্ন তোলা',
    'Holocaust': 'গণহত্যা; ব্যাপক ধ্বংসযজ্ঞ',
    'Host in himself': 'একাই একশ; নিজেই সবকিছু',
    'Impetus': 'চালিকাশক্তি; গতিবেগ; প্রেরণা',
    'Inamorata': 'প্রেমিকা',
    'Indebted': 'ঋণী,বাধিত; কৃতজ্ঞ',
    'Indulgent': 'প্রশ্রয়পূর্ণ; নমনীয়; অতিরিক্ত ছাড় দেওয়া',
    'Innovate': 'নতুন কিছু প্রবর্তন করা; উদ্ভাবন করা',
    'Intense': 'তীব্র; প্রচন্ড',
    'Keen': 'ধারাল; তীক্ষ্ণ',
    'Kleptomania': 'চুরির রোগ; একটি মানসিক ব্যাধি যা ব্যক্তিকে চুরি করতে বাধ্য করে',
    'Lawn': 'তৃণভূমি; ঘাসের জমি',
    'Memento': 'স্মারকচিহ্ন; স্মৃতিচিহ্ন',
    'Misanthrope': 'মানবজাতিকে ঘৃণা বা অবিশ্বাস করে এমন ব্যক্তি',
    'Nadir': 'সর্বনিম্ন, চরম অবনতি',
    'Obliquity': 'বক্রতা; নীতিভ্রংশ',
    'Painstaking': 'পরিশ্রমসাধ্য, অত্যন্ত যত্নশীল; খুঁটিনাটি বিষয়ে সতর্ক',
    'parsimonious': 'অতিশয় মিতব্যয়ী; কৃপণ',
    'Persevering': 'অধ্যবসায়ী',
    'Petrology': 'ভূতত্ত্ববিদ্যার একটি শাখা যেখানে শিলার উৎপত্তি, গঠন, বিন্যাস এবং এর পরিবর্তনের প্রক্রিয়া নিয়ে বৈজ্ঞানিক আলোচনা করা হয়',
    'Piquant': 'ঝাল; মুখরোচক; তীব্র স্বাদযুক্ত',
    'Potty': 'তুচ্ছ; গুরুত্বহীন; নগণ্য',
    'Prodigy': 'অসাধারণ প্রতিভাবান বালক',
    'Profligate': 'লম্পট ব্যক্তি; দুশ্চরিত্র মানুষ',
    'Slumber': 'গভীর ঘুম; নিদ্রা',
    'Solace': 'সান্ত্বনা',
    'Sparkle': 'ঝলমল করা; উজ্জ্বলভাবে চকমক করা',
    'Supplant': 'অন্যের স্থান দখল করা; প্রতিস্থাপন করা',
    'Surreal': 'অবাস্তব মনে হওয়া',
    'Toot your own horn': 'নিজের ঢাক নিজে পেটানো বা নিজের সাফল্য নিয়ে গর্ব বা বড়াই করা',
    'Vehemently': 'তীব্রভাবে; প্রচণ্ড আবেগের সাথে'
}

def main():
    # 1. Load initialVocabulary.json
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        words = json.load(f)

    print(f"Total entries before update: {len(words)}")

    # Map words case-insensitively
    s1_lower = {k.lower(): (k, v) for k, v in SECTION_1_CORRECTIONS.items()}
    corrected_s1 = set()

    for item in words:
        w_lower = item['word'].strip().lower()

        # Section 1 corrections
        if w_lower in s1_lower:
            orig_k, exact_bangla = s1_lower[w_lower]
            item['banglaMeaning'] = exact_bangla
            corrected_s1.add(w_lower)

        # Section 2 replacements
        # A. Bona-fide
        if w_lower in ['bona fide', 'bona = fide', 'bona-fide', 'bona']:
            item['word'] = 'Bona-fide'
            item['banglaMeaning'] = 'আসল,খাঁটি'
            item['synonyms'] = ['genuine', 'authentic']
            item['antonyms'] = ['fraudulent', 'deceitful', 'fake', 'counterfeit']

        # B. Far-fetched
        if w_lower in ['far fetched', 'far = fetched', 'far-fetched', 'far']:
            item['word'] = 'Far-fetched'
            item['banglaMeaning'] = 'অস্বাভাবিক, যা সহজে বিশ্বাসযোগ্য নয়'

    print(f"Section 1 words updated: {len(corrected_s1)} / {len(SECTION_1_CORRECTIONS)}")
    missing_s1 = set(s1_lower.keys()) - corrected_s1
    if missing_s1:
        print(f"ERROR: Missing Section 1 words: {missing_s1}")
        return

    # Sort strictly alphabetically A-Z
    words.sort(key=lambda x: x['word'].strip().lower())

    # Check duplicates
    seen = set()
    duplicates = []
    for w in words:
        wl = w['word'].strip().lower()
        if wl in seen:
            duplicates.append(w['word'])
        seen.add(wl)

    if duplicates:
        print(f"ERROR: Duplicate words found: {duplicates}")
        return

    # Check Bona-fide and Far-fetched counts
    bona_count = sum(1 for w in words if w['word'].lower() == 'bona-fide')
    far_count = sum(1 for w in words if w['word'].lower() == 'far-fetched')
    print(f"Bona-fide count: {bona_count} (must be exactly 1)")
    print(f"Far-fetched count: {far_count} (must be exactly 1)")
    assert bona_count == 1, "Bona-fide count must be 1"
    assert far_count == 1, "Far-fetched count must be 1"

    # Save initialVocabulary.json
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(words, f, indent=2, ensure_ascii=False)
    print(f"Successfully saved {len(words)} entries to {DATA_FILE}")

    # Regenerate dictionaryLookup.ts
    lookup_dict = {}
    for w in words:
        clean_word = w['word'].strip()
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

    # Also add helpful aliases for lookups
    lookup_dict["bona fide"] = lookup_dict["bona-fide"]
    lookup_dict["far fetched"] = lookup_dict["far-fetched"]

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
    with open(LOOKUP_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Successfully saved dictionary lookup to {LOOKUP_FILE}")

if __name__ == '__main__':
    main()
