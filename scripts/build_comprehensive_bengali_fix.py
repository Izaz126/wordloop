import os
import json
import re

DATA_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'initialVocabulary.json')
LOOKUP_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'dictionaryLookup.ts')

# Priority 1 Authoritative Corrections & Vocabulary Fixes
AUTHORITATIVE_FIXES = {
    "undertake": {
        "word": "Undertake",
        "bangla": "দায়িত্ব গ্রহণ করা",
        "pos": "verb",
        "def": "To commit oneself to and begin an enterprise or responsibility.",
        "syns": ["Take over", "Assume responsibility", "Embark on", "Begin"],
        "ants": ["Abandon", "Relinquish", "Forgo"],
        "ex": "She agreed to undertake full responsibility for leading the new research project."
    },
    "impostor": {
        "word": "Impostor",
        "bangla": "ভণ্ড / প্রতারক",
        "pos": "noun",
        "def": "A person who pretends to be someone else in order to deceive others.",
        "syns": ["Fraud", "Pretender", "Deceiver", "Fake"],
        "ants": ["Authentic person"],
        "ex": "The man was arrested when the hospital discovered he was an impostor."
    },
    "hypocrite": {
        "word": "Hypocrite",
        "bangla": "ভণ্ড / কপট ব্যক্তি",
        "pos": "noun",
        "def": "A person who claims to have moral standards or beliefs to which their behavior does not conform.",
        "syns": ["Deceiver", "Pretender", "Fraud", "Fake"],
        "ants": ["Honest person", "Sincere person"],
        "ex": "He is a hypocrite who preaches healthy eating while secretly gorging on junk food."
    },
    "enthralling": {
        "word": "Enthralling",
        "bangla": "মুগ্ধকর",
        "pos": "adjective",
        "def": "Capturing and holding one's full attention; utterly fascinating and charming.",
        "syns": ["Fascinating", "Charming", "Captivating", "Mesmerizing"],
        "ants": ["Boring", "Dull", "Tedious"],
        "ex": "The novelist gave an enthralling reading that kept the audience spellbound."
    },
    "queer": {
        "word": "Queer",
        "bangla": "অদ্ভুত",
        "pos": "adjective",
        "def": "Strange, odd, or unusual in character or appearance.",
        "syns": ["Strange", "Odd", "Peculiar", "Unusual"],
        "ants": ["Normal", "Ordinary", "Typical"],
        "ex": "The traveler heard a queer tapping noise coming from behind the locked wooden door."
    },
    "crone": {
        "word": "Crone",
        "bangla": "বিগত যৌবনা (ঘৃণা অর্থে)",
        "pos": "noun",
        "def": "An old woman who is thin, ugly, or disagreeable (used derogatorily).",
        "syns": ["Hag", "Witch", "Old woman"],
        "ants": ["Maiden", "Youth"],
        "ex": "The folklore tale warned travelers of a wicked crone living alone deep in the forest."
    },
    "curious": {
        "word": "Curious",
        "bangla": "কৌতূহলী / জানতে আগ্রহী",
        "pos": "adjective",
        "def": "Eager to know or learn something; inquisitive.",
        "syns": ["Inquisitive", "Interested", "Eager to know"],
        "ants": ["Indifferent", "Uninterested", "Apathetic"],
        "ex": "The curious young student asked insightful questions after the science lecture."
    },
    "perjury": {
        "word": "Perjury",
        "bangla": "আদালতে মিথ্যা সাক্ষ্যদান / শপথভঙ্গ",
        "pos": "noun",
        "def": "The offense of deliberately telling an untruth in a court of law after taking an oath.",
        "syns": ["False testimony", "Lying under oath", "Mendacity"],
        "ants": ["Truthfulness", "Honesty"],
        "ex": "The witness was charged with perjury after surveillance footage disproved his testimony."
    },
    "gloss": {
        "word": "Gloss",
        "bangla": "উজ্জ্বলতা / চাকচিক্য / মসৃণতা / টীকা",
        "pos": "noun",
        "def": "A superficial luster or shiny finish, or an explanatory note or translation inserted in a text.",
        "syns": ["Shine", "Luster", "Sheen", "Annotation"],
        "ants": ["Dullness"],
        "ex": "The freshly polished teak table had a warm golden gloss that shone in the morning light."
    },
    "stimulus": {
        "word": "Stimulus",
        "bangla": "উদ্দীপনা / উদ্দীপক / প্রণোদনা / প্রেরণা",
        "pos": "noun",
        "def": "Something that excites, provokes, or encourages activity, energy, or growth.",
        "syns": ["Incentive", "Spur", "Catalyst", "Impetus"],
        "ants": ["Deterrent", "Obstacle", "Disincentive"],
        "ex": "Lower interest rates provided a powerful stimulus for local home construction and business growth."
    },
    "revolution": {
        "word": "Revolution",
        "bangla": "বিপ্লব",
        "pos": "noun",
        "def": "A forcible overthrow of a government or social order, or a dramatic fundamental change.",
        "syns": ["Uprising", "Rebellion", "Transformation", "Overturn"],
        "ants": ["Stagnation", "Counterrevolution"],
        "ex": "The introduction of the printing press caused a profound revolution in world education."
    }
}

# Comprehensive dictionary of exact Bengali substring corrections
# Covering all Bijoy/SutonnyMJ glyph decoding errors across all 1,262 entries
REPLACEMENTS = [
    # Priority 1 words
    ('দায়িধভার গ্রহণকরা', 'দায়িত্ব গ্রহণ করা'),
    ('দায়িধভার', 'দায়িত্বভার'),
    ('দায়িধ', 'দায়িত্ব'),
    ('ভধ্ন', 'ভণ্ড'),
    ('বিমুঞ্ছ', 'মুগ্ধকর'),
    ('মুঞ্ছ', 'মুগ্ধ'),
    ('অদ্বুত', 'অদ্ভুত'),
    ('বিগত যৌবনা (ঘৃণা অথের্)', 'বিগত যৌবনা (ঘৃণা অর্থে)'),
    ('শপথভাণ্ট', 'আদালতে মিথ্যা সাক্ষ্যদান / শপথভঙ্গ'),
    ('উণ্ডল তল', 'উজ্জ্বলতা / চাকচিক্য / মসৃণতা / টীকা'),
    ('উণ্ডল', 'উজ্জ্বল'),
    ('বিল্গব', 'বিপ্লব'),

    # High frequency / general Bijoy glyph errors
    ('আকঙি্গক', 'আকস্মিক'),
    ('সংযোজনের মাধ্যমেবৃদি্ধ', 'সংযোজনের মাধ্যমে বৃদ্ধি'),
    ('বৃদি্ধ', 'বৃদ্ধি'),
    ('একতি্রত', 'একত্রিত'),
    ('পে্রমপূণর্', 'প্রেমপূর্ণ'),
    ('পে্রমমুঞ্ছ', 'প্রেমমুগ্ধ'),
    ('বিশ্বপে্রমিক', 'বিশ্বপ্রেমিক'),
    ('পে্রম', 'প্রেম'),
    ('বিজে্ঞদ / বিজি্ঞন্নতা', 'বিচ্ছেদ / বিচ্ছিন্নতা'),
    ('বিজে্ঞদ', 'বিচ্ছেদ'),
    ('বিজি্ঞন্নতা', 'বিচ্ছিন্নতা'),
    ('যপ্সণা', 'যন্ত্রণা'),
    ('যপ্স', 'যন্ত্র'),
    ('আনুষণি্টক', 'আনুষঙ্গিক'),
    ('বাতাসের বেগ নিণর্ায়ক যপ্স', 'বাতাসের বেগ নির্ণায়ক যন্ত্র'),
    ('নিণর্ায়ক যপ্স', 'নির্ণায়ক যন্ত্র'),
    ('নিণর্ায়ক সভা', 'নির্ণায়ক সভা'),
    ('নিণর্ায়ক', 'নির্ণায়ক'),
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
    ('গ্রব্দ', 'গ্রন্থ'),
    ('দাশি্রক', 'দাম্ভিক'),
    ('বৈহ বৈচ পূণর্', 'কোলাহলপূর্ণ'),
    ('পূঁজিতাপি্সক', 'পুঁজিবাদী'),
    ('সামন্নস্যপূণর্', 'সামঞ্জস্যপূর্ণ'),
    ('অসামন্নস্যপূণর্', 'অসামঞ্জস্যপূর্ণ'),
    ('সুসনি্ত্যত', 'সুসংগত'),
    ('যৌক্তিত', 'যৌক্তিক'),
    ('যৌক্তিক', 'যৌক্তিক'),
    ('যৌগিক', 'যৌগিক'),
    ('যৌবনা', 'যৌবনা'),
    ('আত্মতৃপি্ত', 'আত্মতৃপ্তি'),
    ('তৃপি্তদায়ক', 'তৃপ্তিদায়ক'),
    ('সামুদি্রক', 'সামুদ্রিক'),
    ('কৃতি্রম', 'কৃত্রিম'),
    ('শাসি্ত', 'শাস্তি'),
    ('ধনসশ্মতি্তর', 'ধনসম্পত্তির'),
    ('সুসশ্মর্ক', 'সুসম্পর্ক'),
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
    ('পূর্বপ্রশ্চতি ছাড়া কোন বক্তব্য দেয়া', 'পূর্বপ্রস্তুতি ছাড়া দেওয়া বক্তব্য'),
    ('পূর্বপ্রশ্চতি', 'পূর্বপ্রস্তুতি'),
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
    ('কে্রোধে কি্ষপ্ত হওয়া', 'ক্রোধে ক্ষিপ্ত হওয়া'),
    ('কে্রোধে', 'ক্রোধে'),
    ('কে্রোধযুক্ত', 'ক্রোধযুক্ত'),
    ('কি্ষপ্ত', 'ক্ষিপ্ত'),
    ('বুদি্ধবৃতি্তক সংস্কৃতিবান', 'বুদ্ধিবৃত্তিক / সংস্কৃতিবান'),
    ('বুদি্ধবৃতি্তক', 'বুদ্ধিবৃত্তিক'),
    ('বুদি্ধ', 'বুদ্ধি'),
    ('বৃতি্ত', 'বৃত্তি'),
    ('ভাষাবিন্ত্রান', 'ভাষাবিজ্ঞান'),
    ('জীবাহ্ল বিন্ত্রান', 'জীবাশ্ম বিজ্ঞান'),
    ('মানকবিদে্ধষ', 'মানববিদ্বেষ'),
    ('মানবহিৈতষী', 'মানবহিতৈষী'),
    ('ক্ষীনদৃষ্টি', 'ক্ষীণদৃষ্টি'),
    ('অনে্যর', 'অন্যের'),
    ('ঔস্থলে্য ছাপিয়ে যাওয়া', 'উজ্জ্বলতায় ছাপিয়ে যাওয়া'),
    ('ঔস্থলে্য', 'উজ্জ্বলতায়'),
    ('সবের্াচ্চ চূড়া', 'সর্বোচ্চ চূড়া'),
    ('সবের্াচ্চ', 'সর্বোচ্চ'),
    ('স্তশে্রর পাদভূমি', 'স্তম্ভের পাদভূমি'),
    ('স্তশে্রর', 'স্তম্ভের'),
    ('জ্ঞানিকর / দুঃখ উদে্রককারী', 'মর্মান্তিক / দুঃখ উদ্রেককারী'),
    ('উদে্রককারী', 'উদ্রেককারী'),
    ('আকে্রোশ', 'আক্রোশ'),
    ('ঙ্কদ্ধামিঙি্কত', 'শ্রদ্ধামিশ্রিত'),
    ('ঘৃণাপূণর্', 'ঘৃণাপূর্ণ'),
    ('নিকি্ষ্ময়', 'নিষ্ক্রিয়'),
    ('উন্নাসিক লোক (যে ব্যক্তি নিল্ডতর সামাজিক ঙে্কণীর মানুষকে অবন্ত্রার', 'উন্নাসিক ব্যক্তি (যে নিম্ন সামাজিক শ্রেণির মানুষকে অবজ্ঞা করে)'),
    ('নিল্ডতর', 'নিম্নতর'),
    ('ঙে্কণীর', 'শ্রেণির'),
    ('ঙে্কষ্ঠ', 'শ্রেষ্ঠ'),
    ('গাশ্রীর্যপূণর্', 'গাম্ভীর্যপূর্ণ'),
    ('অস্বসি্তকর', 'অস্বস্তিকর'),
    ('অনিহি্নত / দোদুল্যমান', 'অনিশ্চিত / দোদুল্যমান'),
    ('অনিহি্নত', 'অনিশ্চিত'),
    ('উদে্ধগপূণর্ অনিহি্নত অবস্থা', 'উদ্বেগপূর্ণ অনিশ্চিত অবস্থা'),
    ('উদে্ধগপূণর্', 'উদ্বেগপূর্ণ'),
    ('আসি্তক', 'আস্তিক'),
    ('একপাশ বা প্রানে্ত উঠানো', 'একপাশ বা প্রান্তে উঠানো'),
    ('প্রানে্ত', 'প্রান্তে'),
    ('ধর্ম বা বৈনতিকতা বিষয়ে পুসি্তকা', 'ধর্ম বা নৈতিকতা বিষয়ক পুস্তিকা'),
    ('পুসি্তকা', 'পুস্তিকা'),
    ('দি্ধধা', 'দ্বিধা'),
    ('বিকে্রতো', 'বিক্রেতা'),
    ('বিকি্রে', 'বিক্রি'),
    ('সে্বজ্ঞাচারী', 'স্বেচ্ছাচারী'),
    ('কোটের্র লিখিত অডর্ার', 'কোর্টের লিখিত অর্ডার'),
    ('কোটের্র', 'কোর্টের'),
    ('অডর্ার', 'অর্ডার'),
    ('পুরাতাতি্রক নিদশর্ন', 'প্রত্নতাত্ত্বিক নিদর্শন'),
    ('পুরাতাতি্রক', 'প্রত্নতাত্ত্বিক'),
    ('নিদশর্ন', 'নিদর্শন'),
    ('চিতি্রত করা', 'চিত্রিত করা'),
    ('চিতি্রত', 'চিত্রিত'),
    ('প্রখর ন্ত্রান', 'প্রখর জ্ঞান'),
    ('ন্ত্রানী', 'জ্ঞানী'),
    ('ন্ত্রানবিশিষ্ট', 'জ্ঞানবিশিষ্ট'),
    ('ন্ত্রান', 'জ্ঞান'),
    ('সতে্যর আলাপকারী', 'সত্য গোপনকারী'),

    # Newly identified SutonnyMJ letter swaps
    ('গষ্ণর', 'গহ্বর'),
    ('মণ্টলজনক', 'মঙ্গলজনক'),
    ('ভণ্টুর', 'ভঙ্গুর'),
    ('চিন্তানিমঞ্জ', 'চিন্তানিমগ্ন'),
    ('নতুন নিয়োগপ্রাপ্ত অনভিন্ত্র র্কমশী', 'নতুন নিয়োগপ্রাপ্ত অনভিজ্ঞ কর্মী'),
    ('অনভিন্ত্র', 'অনভিজ্ঞ'),
    ('র্কমশী', 'কর্মী'),
    ('অপটুর্কমশী', 'অপটু কর্মী'),
    ('স্বস্ফতা', 'স্বল্পতা'),
    ('স্বস্ফভাষী', 'স্বল্পভাষী'),
    ('স্বস্ফ', 'স্বল্প'),
    ('প্রতারনা', 'প্রতারণা'),
    ('ষ্কতিকটু', 'শ্রুতিকটু'),
    ('ছত্রভণ্ট', 'ছত্রভঙ্গ'),
    ('অনিহ্নয়তা', 'অনিশ্চয়তা'),
    ('উচ্ছাস প্রবণ', 'উচ্ছ্বাসপ্রবণ'),
    ('উচ্ছাস', 'উচ্ছ্বাস'),
    ('উচ্চারন করা', 'উচ্চারণ করা'),
    ('উচ্চারন', 'উচ্চারণ'),
    ('ন্যায়সণ্টত', 'ন্যায়সঙ্গত'),
    ('উ্সাহিত করা / প্রণোদিত করা / আষ্ণান করা', 'উৎসাহিত করা / আহ্বান করা'),
    ('আষ্ণান', 'আহ্বান'),
    ('অমিতব্যয়ি / সীমালণ্ঠন', 'অমিতব্যয়িতা / অপব্যয়'),
    ('সীমালণ্ঠন', 'সীমালঙ্ঘন'),
    ('সীমালণ্টন', 'সীমালঙ্ঘন'),
    ('কাস্ফনিক পরিকস্ফনা', 'কাল্পনিক পরিকল্পনা'),
    ('কাস্ফনিক', 'কাল্পনিক'),
    ('পরিকস্ফনা', 'পরিকল্পনা'),
    ('আদ্রতা', 'আর্দ্রতা'),
    ('শৃড্ডলাবদ্ধ করা', 'শৃঙ্খলিত করা / কারারুদ্ধ করা'),
    ('শৃড্ডলাবদ্ধ', 'শৃঙ্খলাবদ্ধ'),
    ('পতণ্টভূক', 'পতঙ্গভুক'),
    ('অন্তরণ্ট', 'অন্তরঙ্গ'),
    ('স্বকীয় / জল্কগত', 'স্বকীয় / জন্মগত'),
    ('জল্কগত', 'জন্মগত'),
    ('ল্গাবিত হওয়া', 'প্লাবিত হওয়া'),
    ('ল্গাবিত', 'প্লাবিত'),
    ('চৌর্য উল্কাদ', 'চৌর্য উন্মাদনা'),
    ('চৌর্য', 'চৌর্য'),
    ('উল্কাদ', 'উন্মাদনা'),
    ('দুহ্নরিত্র লোক', 'দুশ্চরিত্র ব্যক্তি'),
    ('দুহ্নরিত্র', 'দুশ্চরিত্র'),
    ('নিহ্নল', 'নিশ্চল'),
    ('বিষ্ণলতা', 'বিশৃঙ্খলা'),
    ('মিতা / অন্যের নামের সাথে মিল', 'একই নামধারী ব্যক্তি / মিতা'),
    ('বিক্ষুল্ট', 'বিক্ষুব্ধ'),
    ('যুক্তিসণ্টত', 'যুক্তিসঙ্গত'),
    ('গস্ফকথক', 'গল্পকথক'),
    ('অলণ্ঠনীয়', 'অলঙ্ঘনীয়'),
    ('অস্ফ গরম বা হৃসুম হৃসুম গরম', 'অল্প গরম বা কুসুম কুসুম গরম'),
    ('হৃসুম হৃসুম', 'কুসুম কুসুম'),
    ('অস্ফ', 'অল্প'),
    ('পুড্ডানুপুড্ড', 'পুঙ্খানুপুঙ্খ'),
    ('গবেষণামূলক আলোচনা গ্রব্দ', 'গবেষণামূলক আলোচনা গ্রন্থ'),
    ('পাপ / সীমালণ্টন', 'অনধিকার প্রবেশ / সীমালঙ্ঘন'),
    ('অকস্ফনীয়', 'অকল্পনীয়'),
    ('কস্ফরাজ্য', 'কল্পরাজ্য'),
    ('শল্পবস্থল / গোলমালকারী', 'সোচ্চার / চিৎকারকারী'),
    ('শল্পবস্থল', 'কোলাহলপূর্ণ'),
    ('অহ্বীলতা', 'অশ্লীলতা'),
    ('রুচি / প্রানবন্ততা', 'রুচি / প্রাণবন্ততা'),
    ('প্রানবন্ততা', 'প্রাণবন্ততা'),

    # Swapped 'হৃ' -> 'কু'
    ('হৃন্মলী', 'কুণ্ডলী'),
    ('সংহৃচিত করা', 'সংকুচিত করা'),
    ('হৃড়ে', 'কুঁড়ে'),
    ('মওহৃফ করা', 'মওকুফ করা'),

    # Unusual characters '_', '’', '°'
    ('আত্মসন্তুষ্ট / অসাবধান / স_ষ্টি', 'আত্মসন্তুষ্ট / আত্মতৃপ্ত'),
    ('স_ষ্টি', 'সন্তুষ্টি'),
    ('অস_ষ্ট / অতৃপ্ত', 'অসন্তুষ্ট / অতৃপ্ত'),
    ('অস_ষ্ট', 'অসন্তুষ্ট'),
    ('চরম বিপর্যয় / ভরাডুবি / ’ংস হওয়া / পতন হয়ে যাওয়া / মহাবিপর্যয়', 'চরম বিপর্যয় / ভরাডুবি / পতন'),
    ('’ংস হওয়া', 'ধ্বংস হওয়া'),
    ('’ংস বা নষ্ট করা', 'ধ্বংস বা নষ্ট করা'),
    ('ক্ষমতা ’ংস করা', 'ক্ষমতা ধ্বংস বা দুর্বল করা'),
    ('’ংসাবশেষ', 'ধ্বংসাবশেষ'),
    ('’ংস', 'ধ্বংস'),
    ('অনু°প', 'অনুরূপ'),

    # Swapped vowel matras
    ('দয়ালু / হিতৈষী / হিৈতষী', 'দয়ালু / হিতৈষী'),
    ('হিৈতষী', 'হিতৈষী'),
    ('চক্রোন্ত করা', 'চক্রান্ত করা'),
    ('চক্রোন্ত', 'চক্রান্ত'),
    ('নিসগর্', 'নিসর্গ'),
    ('টকিানো বা টিকিয়ে রাখা যায় এমন', 'টিকিয়ে রাখা যায় এমন / সমর্থনযোগ্য'),
    ('টকিানো', 'টিকিয়ে রাখা'),
    ('সামরিক দায়িধ থেকে অব্যাহতি দেয়া', 'সামরিক দায়িত্ব থেকে অব্যাহতি দেওয়া'),
    ('অত্যধিক বিমষর্', 'অত্যধিক বিমর্ষ'),
    ('বিমষর্', 'বিমর্ষ'),
    ('খাও / দাও ফুতির্ করা জাতীয় ব্যক্তি', 'খাওয়া-দাওয়া ও ফূর্তি করা'),
    ('ফুতির্', 'ফূর্তি'),
    ('পর্দমযাদায় উন্নতিসাধন', 'পদমর্যাদায় উন্নতিসাধন'),
    ('পর্দমযাদায়', 'পদমর্যাদায়'),
    ('একচেটয়িা অধিকার', 'একচেটিয়া অধিকার'),
    ('একচেটয়িা', 'একচেটিয়া'),
    ('সবের্শ্বরবাদী', 'সর্বেশ্বরবাদী'),
    ('ডাকটকিেট সংগ্রহকারী', 'ডাকটিকিট সংগ্রহকারী'),
    ('ডাকটকিেট', 'ডাকটিকিট'),
    ('খুঁটনিাটি ব্যাপারে অতি সর্তক', 'খুঁটিনাটি ব্যাপারে অতি সতর্ক'),
    ('খুঁটনিাটি', 'খুঁটিনাটি'),
    ('সর্তক', 'সতর্ক'),
    ('আকে্রোশ', 'আক্রোশ'),
    ('বৈনতিক বক্তৃ তা', 'নৈতিক বক্তৃতা'),
    ('বৈনতিকতা', 'নৈতিকতা'),
    ('বৈনতিক', 'নৈতিক'),
    ('বক্তৃ তা', 'বক্তৃতা'),
    ('ক্রেীতদাস সুলভ', 'ক্রীতদাস সুলভ'),
    ('ক্রেীতদাস', 'ক্রীতদাস'),
    ('ভাড়াটয়িা', 'ভাড়াটিয়া'),
    ('তিরস্কারপূণর্ দীর্ঘ বক্তৃ তা', 'তিরস্কারপূর্ণ দীর্ঘ বক্তৃতা'),
    ('তিরস্কারপূণর্', 'তিরস্কারপূর্ণ'),
    ('সম্মান করা / ঙ্কদ্ধা করা', 'সম্মান করা / শ্রদ্ধা করা'),
    ('ঙ্কদ্ধা করা', 'শ্রদ্ধা করা'),
    ('পেছনে টেনে রাখা বা আটকিয়ে রাখা', 'আটকে রাখা / গোপন রাখা'),
    ('আটকিয়ে রাখা', 'আটকে রাখা'),
    ('প্রতিহূল', 'প্রতিকূল'),
    ('প্রতিদ্ধন্দীতা', 'প্রতিদ্বন্দ্বিতা'),
    ('বিধিবহিভূর্ত / বৈস্বরচারী', 'বিধিবহির্ভূত / স্বৈরাচারী'),
    ('বৈস্বরচারী', 'স্বৈরাচারী'),
    ('বিধিবহিভূর্ত', 'বিধিবহির্ভূত'),
    ('কষ্টসাধ্য বা পরিঙ্কমসাধ্য কিছু', 'কষ্টসাধ্য বা পরিশ্রমসাধ্য কিছু'),
    ('পরিঙ্কমসাধ্য', 'পরিশ্রমসাধ্য'),
    ('জটলিতা', 'জটিলতা'),
    ('বৈবপরিত্য', 'বৈপরীত্য'),
    ('প্রধান বৈবশিষ্ট', 'প্রধান বৈশিষ্ট্য'),
    ('বৈবশিষ্ট', 'বৈশিষ্ট্য'),
    ('থটি / সীমাবদ্ধতা', 'ত্রুটি / সীমাবদ্ধতা'),
    ('থটি', 'ত্রুটি'),
    ('ধর্মতত্রবিৎ', 'ধর্মতত্ত্ববিদ'),
    ('শস্থরে', 'শহুরে'),
    ('কিংর্কতব্যবিমূঢ়', 'কিংকর্তব্যবিমূঢ়'),
    ('অহংকৃত / গবির্ত', 'অহংকারী / গর্বিত'),
    ('গবির্ত', 'গর্বিত'),
    ('অন্ধকারাজ্ঞন্ন', 'অন্ধকারাচ্ছন্ন'),
    ('র্সবশক্তিমান (আহ্ণাহ )', 'সর্বশক্তিমান (আল্লাহ)'),
    ('যুক্তি / তর্ক খধ্নন করা', 'যুক্তি বা তর্ক খণ্ডন করা'),
    ('খধ্নন করা', 'খণ্ডন করা'),
    ('বার্কসবস্ব', 'বাক্যসর্বস্ব'),
    ('প্রাকৃতিক ভূ –দৃশ্য', 'প্রাকৃতিক ভূ-দৃশ্য'),

    # Missing spacing around verbs / prepositions
    ('গ্রহণকরা', 'গ্রহণ করা'),
    ('ত্যাগকরা', 'ত্যাগ করা'),
    ('দানকরা', 'দান করা'),
    ('বাসকরা', 'বাস করা'),
    ('শুরুকরা', 'শুরু করা'),
    ('ধ্বংসকরা', 'ধ্বংস করা'),
    ('লাভকরা', 'লাভ করা'),
    ('নষ্টকরা', 'নষ্ট করা'),
    ('পছন্দকরা', 'পছন্দ করা'),
    ('হত্যাবা', 'হত্যা বা'),
    ('বাদ্ধকরা', 'বাধ্য করা'),
    ('বিলুপ্তকরা', 'বিলুপ্ত করা'),
    ('মিশুক/ সামাজিক', 'মিশুক / সামাজিক'),
    ('দ্বারাঘেরা', 'দ্বারা ঘেরা'),
    ('উপাদানদ্বারা', 'উপাদান দ্বারা')
]

def clean_bangla_text(text):
    if not text:
        return ""
    
    # Apply all specific replacements
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)
        
    # Clean multiple spaces and trim
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def main():
    print("Loading vocabulary data...")
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        vocab = json.load(f)
        
    print(f"Loaded {len(vocab)} entries from initialVocabulary.json.")
    
    corrections_count = 0
    updated_entries = []
    lookup_dict = {}
    
    for item in vocab:
        w_lower = item['word'].strip().lower()
        old_bangla = item.get('banglaMeaning', '')
        
        # Check Authoritative Priority 1 Fixes first
        if w_lower in AUTHORITATIVE_FIXES:
            fix = AUTHORITATIVE_FIXES[w_lower]
            item['word'] = fix['word']
            item['banglaMeaning'] = fix['bangla']
            item['pos'] = fix['pos']
            item['simpleDefinition'] = fix['def']
            item['synonyms'] = fix['syns']
            item['antonyms'] = fix['ants']
            item['example'] = fix['ex']
            corrections_count += 1
        else:
            # Clean Bengali meaning
            cleaned_bangla = clean_bangla_text(old_bangla)
            if cleaned_bangla != old_bangla:
                item['banglaMeaning'] = cleaned_bangla
                corrections_count += 1
            else:
                item['banglaMeaning'] = cleaned_bangla
                
        # Strict sense checks
        if w_lower == 'curious':
            item['banglaMeaning'] = 'কৌতূহলী / জানতে আগ্রহী'
            item['synonyms'] = ['Inquisitive', 'Interested', 'Eager to know']
            item['antonyms'] = ['Indifferent', 'Uninterested', 'Apathetic']
            
        updated_entries.append(item)
        
        # Add to offline dictionary lookup
        lookup_dict[item['word'].lower()] = {
            "word": item['word'],
            "pos": item['pos'],
            "simpleDefinition": item['simpleDefinition'],
            "banglaMeaning": item['banglaMeaning'],
            "synonyms": item['synonyms'],
            "antonyms": item['antonyms'],
            "example": item['example']
        }
        
    # Sort initial vocabulary array alphabetically by word (case-insensitive)
    updated_entries.sort(key=lambda x: x['word'].lower())
    
    print(f"Total Bengali corrections made: {corrections_count}")
    print(f"Saving updated {len(updated_entries)} entries to {DATA_FILE}...")
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(updated_entries, f, indent=2, ensure_ascii=False)
        
    print(f"Saving updated {len(lookup_dict)} entries to {LOOKUP_FILE}...")
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
        
    print("Vocabulary & Dictionary Update completed successfully!")

if __name__ == '__main__':
    main()
