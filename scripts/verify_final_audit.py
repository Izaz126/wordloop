#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os

DATA_FILE = os.path.join('src', 'data', 'initialVocabulary.json')
LOOKUP_FILE = os.path.join('src', 'data', 'dictionaryLookup.ts')

SECTION_1_TARGETS = {
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

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    words = json.load(f)

print(f"Total vocabulary words: {len(words)}")
assert len(words) == 1262, f"Expected 1262 words, got {len(words)}"

# Map by lowercase
w_map = {w['word'].strip().lower(): w for w in words}

# Check Section 1
s1_passed = 0
for english, exact_bangla in SECTION_1_TARGETS.items():
    key = english.strip().lower()
    assert key in w_map, f"Missing word: {english}"
    actual = w_map[key]['banglaMeaning']
    assert actual == exact_bangla, f"Mismatch for '{english}':\n  Expected: {exact_bangla}\n  Actual:   {actual}"
    s1_passed += 1

print(f"✓ All {s1_passed} Section 1 words matched exactly!")

# Check Section 2: Bona-fide
assert 'bona-fide' in w_map, "Bona-fide not found in vocabulary!"
bf = w_map['bona-fide']
assert bf['word'] == 'Bona-fide'
assert bf['banglaMeaning'] == 'আসল,খাঁটি'
assert bf['synonyms'] == ['genuine', 'authentic']
assert bf['antonyms'] == ['fraudulent', 'deceitful', 'fake', 'counterfeit']
bona_count = sum(1 for w in words if w['word'].lower() in ['bona', 'bona fide', 'bona = fide', 'bona-fide'])
assert bona_count == 1, f"Expected exactly 1 Bona-fide entry, found {bona_count}"
print("✓ Bona-fide replacement verified (count = 1, exact synonyms & antonyms).")

# Check Section 2: Far-fetched
assert 'far-fetched' in w_map, "Far-fetched not found in vocabulary!"
ff = w_map['far-fetched']
assert ff['word'] == 'Far-fetched'
assert ff['banglaMeaning'] == 'অস্বাভাবিক, যা সহজে বিশ্বাসযোগ্য নয়'
far_count = sum(1 for w in words if w['word'].lower() in ['far', 'far fetched', 'far = fetched', 'far-fetched'])
assert far_count == 1, f"Expected exactly 1 Far-fetched entry, found {far_count}"
print("✓ Far-fetched replacement verified (count = 1, exact meaning).")

# Check duplicates
seen = set()
for w in words:
    low = w['word'].strip().lower()
    assert low not in seen, f"Duplicate word: {w['word']}"
    seen.add(low)
print(f"✓ Zero duplicate words found across all {len(words)} entries.")

# Check alphabetical sort
words_keys = [w['word'].strip().lower() for w in words]
assert words_keys == sorted(words_keys), "Vocabulary list is not sorted alphabetically!"
print("✓ Vocabulary list is strictly sorted alphabetically (A-Z).")

print("\nALL VERIFICATIONS PASSED SUCCESSFULLY!")
