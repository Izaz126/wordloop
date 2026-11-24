import os
import json
import re

DATA_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'initialVocabulary.json')
LOOKUP_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'dictionaryLookup.ts')
CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

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

BANGLA_SUBSTITUTIONS = [
    ('রাগাি:ত', 'রাগান্বিত'),
    ('ধরাি:ত', 'ত্বরান্বিত'),
    ('ঈষর্াি:ত', 'ঈর্ষান্বিত'),
    ('সুসমি:ত', 'সমন্বিত'),
    ('সণ্টীত', 'সংগীত'),
    ('উথানপতন', 'উত্থান-পতন'),
    ('প্রতিকি্রয়ো', 'প্রতিক্রিয়া'),
    ('সনে্দহজনক', 'সন্দেহজনক'),
    ('সনে্দহভাজন', 'সন্দেহভাজন'),
    ('বিলুপ্তকরা', 'বিলুপ্ত করা'),
    ('মিশুক/ সামাজিক', 'মিশুক / সামাজিক'),
    ('আদশর্বাদী', 'আদর্শবাদী'),
    ('আকঙি্গক', 'আকস্মিক'),
    ('মাধ্যমেবৃদি্ধ', 'মাধ্যমে বৃদ্ধি'),
    ('বৃদি্ধ', 'বৃদ্ধি'),
    ('একতি্রত', 'একত্রিত'),
    ('পে্রমপূণর্', 'প্রেমপূর্ণ'),
    ('পে্রমমুঞ্ছ', 'প্রেমমুগ্ধ'),
    ('বিশ্বপে্রমিক', 'বিশ্বপ্রেমিক'),
    ('অন্ত্রানবাদী', 'অজ্ঞেয়বাদী'),
    ('বিজে্ঞদ / বিজি্ঞন্নতা', 'বিচ্ছেদ / বিচ্ছিন্নতা'),
    ('বিজি্ঞন্নতা', 'বিচ্ছিন্নতা'),
    ('যপ্সণা', 'যন্ত্রণা'),
    ('আনুষণি্টক', 'আনুষঙ্গিক'),
    ('নিণর্ায়ক যপ্স', 'নির্ণায়ক যন্ত্র'),
    ('নিণর্ায়ক সভা', 'নির্ণায়ক সভা'),
    ('নিণর্য়', 'নির্ণয়'),
    ('সংকি্ষপ্ত ন্ত্রানগর্ব', 'সংক্ষিপ্ত জ্ঞানগর্ভ উক্তি'),
    ('সংকি্ষপ্ত ভাবে', 'সংক্ষিপ্তভাবে'),
    ('সংকি্ষপ্ত করা', 'সংক্ষিপ্ত করা'),
    ('সংকি্ষপ্ত', 'সংক্ষিপ্ত'),
    ('আতটি্টত', 'আতঙ্কিত'),
    ('বৈশসি্ফক', 'বৈশিষ্ট্যসূচক'),
    ('প্রকৃতপকে্ষ', 'প্রকৃতপক্ষে'),
    ('অনিহা', 'অনীহা'),
    ('সি্বঞ্ছ', 'স্নিগ্ধ'),
    ('গ্রব্দপুনি্ন', 'গ্রন্থপঞ্জি'),
    ('দাশি্রক', 'দাম্ভিক'),
    ('বৈহ বৈচ পূণর্', 'কোলাহলপূর্ণ'),
    ('পূঁজিতাপি্সক', 'পুঁজিবাদী'),
    ('সামন্নস্যপূণর্', 'সামঞ্জস্যপূর্ণ'),
    ('অসামন্নস্যপূণর্', 'অসামঞ্জস্যপূর্ণ'),
    ('সুসনি্ত্যত', 'সুসংগত'),
    ('যৌক্তিত', 'যৌক্তিক'),
    ('আত্মতৃপি্ত', 'আত্মতৃপ্তি'),
    ('তৃপি্তদায়ক', 'তৃপ্তিদায়ক'),
    ('সামুদি্রক', 'সামুদ্রিক'),
    ('কৃতি্রম', 'কৃত্রিম'),
    ('শাসি্ত', 'শাস্তি'),
    ('ধনসশ্মতি্তর', 'ধনসম্পত্তির'),
    ('সশ্মর্ক', 'সম্পর্ক'),
    ('সশ্মকের্', 'সম্পর্কে'),
    ('ভ্রানি্তকর', 'ভ্রান্তিকর'),
    ('ভ্রানি্ত', 'ভ্রান্তি'),
    ('চূণর্', 'চূর্ণ'),
    ('আপতি্ত', 'আপত্তি'),
    ('উদে্দেশে', 'উদ্দেশ্যে'),
    ('নিবের্াধ', 'নির্বোধ'),
    ('উতে্তজিত', 'উত্তেজিত'),
    ('উতে্তজনা', 'উত্তেজনা'),
    ('শোকগাঁথা', 'শোকগাথা'),
    ('বাচনভণি্ট', 'বাচনভঙ্গি'),
    ('দীঘর্ায়িত', 'দীর্ঘায়িত'),
    ('দীঘর্', 'দীর্ঘ'),
    ('উদে্যাক্তা', 'উদ্যোক্তা'),
    ('উদে্যাগ', 'উদ্যোগ'),
    ('প্রশান্তি / মনের স্থিরতা', 'প্রশান্তি'),
    ('প্রশ্চত করা / সনি্ত্যত করা', 'প্রস্তুত করা / সজ্জিত করা'),
    ('থটপিূণর্ / উস্নাপাস্না', 'খামখেয়ালী'),
    ('বিবণর্', 'বিবর্ণ'),
    ('নিয়প্সণহীন', 'নিয়ন্ত্রণহীন'),
    ('ছেলেমানুষীপূণর্', 'ছেলেমানুষিপূর্ণ'),
    ('শানি্তপূণর্', 'শান্তিপূর্ণ'),
    ('সাফলে্যর', 'সাফল্যের'),
    ('নিভর্র', 'নির্ভর'),
    ('সংকীণর্মনা', 'সংকীর্ণমনা'),
    ('অতিরনি্নত', 'অতিরঞ্জিত'),
    ('প্রকসি্ফত', 'প্রকল্পিত'),
    ('অপ্রাসণি্টকতা', 'অপ্রাসঙ্গিকতা'),
    ('প্রাসণি্টক', 'প্রাসঙ্গিক'),
    ('বণর্নাতীত', 'বর্ণনাতীত'),
    ('বণর্না', 'বর্ণনা'),
    ('কে্রোধে', 'ক্রোধে'),
    ('কে্রোধযুক্ত', 'ক্রোধযুক্ত'),
    ('কি্ষপ্ত', 'ক্ষিপ্ত'),
    ('বুদি্ধবৃতি্তক', 'বুদ্ধিবৃত্তিক'),
    ('বুদি্ধ', 'বুদ্ধি'),
    ('বৃতি্ত', 'বৃত্তি'),
    ('ভাষাবিন্ত্রান', 'ভাষাবিজ্ঞান'),
    ('জীবাহ্ল বিন্ত্রান', 'জীবাশ্ম বিজ্ঞান'),
    ('মানকবিদে্ধষ', 'মানববিদ্বেষ'),
    ('মানবহিৈতষী', 'মানবহিতৈষী'),
    ('ক্ষীনদৃষ্টি', 'ক্ষীণদৃষ্টি'),
    ('অনে্যর', 'অন্যের'),
    ('ঔস্থলে্য', 'উজ্জ্বলতায়'),
    ('সবের্াচ্চ', 'সর্বোচ্চ'),
    ('স্তশে্রর', 'স্তম্ভের'),
    ('উদে্রককারী', 'উদ্রেককারী'),
    ('আকে্রোশ', 'আক্রোশ'),
    ('ঙ্কদ্ধামিঙি্কত', 'শ্রদ্ধামিশ্রিত'),
    ('ঘৃণাপূণর্', 'ঘৃণাপূর্ণ'),
    ('নিকি্ষ্ময়', 'নিষ্ক্রিয়'),
    ('নিল্ডতর সামাজিক ঙে্কণীর মানুষকে অবন্ত্রার', 'নিম্ন শ্রেণির মানুষকে অবজ্ঞা করে'),
    ('গাশ্রীর্যপূণর্', 'গাম্ভীর্যপূর্ণ'),
    ('অস্বসি্তকর', 'অস্বস্তিকর'),
    ('ঙে্কষ্ঠ', 'শ্রেষ্ঠ'),
    ('অনিহি্নত', 'অনিশ্চিত'),
    ('উদে্ধগপূণর্', 'উদ্বেগপূর্ণ'),
    ('আসি্তক', 'আস্তিক'),
    ('প্রানে্ত', 'প্রান্তে'),
    ('পুসি্তকা', 'পুস্তিকা'),
    ('দি্ধধা', 'দ্বিধা'),
    ('বিকে্রতো', 'বিক্রেতা'),
    ('বিকি্রে', 'বিক্রি'),
    ('সে্বজ্ঞাচারী', 'স্বেচ্ছাচারী'),
    ('কোটের্র', 'কোর্টের'),
    ('অডর্ার', 'অর্ডার'),
    ('নিদশর্ন', 'নিদর্শন'),
    ('চিতি্রত', 'চিত্রিত'),
    ('প্রহর ন্ত্রান', 'প্রখর জ্ঞান'),
    ('ন্ত্ৰানী', 'জ্ঞানী'),
    ('ন্ত্ৰানবিশিষ্ট', 'জ্ঞানবিশিষ্ট'),
    ('ন্ত্ৰান', 'জ্ঞান'),
    ('সতে্যর আলাপকারী', 'সত্য গোপনকারী')
]

def clean_bangla(text):
    if not text:
        return ''
    for old, new in BANGLA_SUBSTITUTIONS:
        text = text.replace(old, new)
    text = text.replace('  ', ' ').strip()
    return text

def main():
    print("Loading datasets...")
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
    
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        init_vocab = json.load(f)
    
    print(f"Loaded {len(init_vocab)} initial items, {len(cache)} cache items.")
    
    updated_list = []
    lookup_dict = {}
    
    for item in init_vocab:
        w_lower = item['word'].strip().lower()
        
        # Check FIX_CORRECTIONS first
        if w_lower in FIX_CORRECTIONS:
            c = FIX_CORRECTIONS[w_lower]
            item['word'] = c['word']
            item['banglaMeaning'] = clean_bangla(c['bangla'])
            item['pos'] = c['pos']
            item['simpleDefinition'] = c['def']
            item['synonyms'] = c['syns']
            item['antonyms'] = c['ants']
            item['example'] = c['ex']
        # Check cache
        elif w_lower in cache:
            entry = cache[w_lower]
            item['pos'] = entry.get('pos', item.get('pos', 'noun'))
            item['simpleDefinition'] = entry.get('simpleDefinition', item.get('simpleDefinition', ''))
            item['synonyms'] = entry.get('synonyms', item.get('synonyms', []))
            item['antonyms'] = entry.get('antonyms', item.get('antonyms', []))
            item['example'] = entry.get('example', item.get('example', ''))
            item['banglaMeaning'] = clean_bangla(item.get('banglaMeaning', ''))
        else:
            # Word from PDF 1 or already clean, just sanitize bangla
            item['banglaMeaning'] = clean_bangla(item.get('banglaMeaning', ''))
            
        # Specific fixes
        if item['word'] == 'Bona':
            item['word'] = 'Bona fide'
        elif item['word'] == 'Far':
            item['word'] = 'Far-fetched'
            
        updated_list.append(item)
        
        # Prepare lookup entry
        lookup_dict[item['word'].lower()] = {
            "word": item['word'],
            "pos": item['pos'],
            "simpleDefinition": item['simpleDefinition'],
            "banglaMeaning": item['banglaMeaning'],
            "synonyms": item['synonyms'],
            "antonyms": item['antonyms'],
            "example": item['example']
        }
    
    print(f"Saving updated {len(updated_list)} items to {DATA_FILE}...")
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(updated_list, f, indent=2, ensure_ascii=False)
        
    print(f"Generating updated {LOOKUP_FILE}...")
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
        
    print("Master application completed successfully!")

if __name__ == '__main__':
    main()
