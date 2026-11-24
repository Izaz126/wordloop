// Comprehensive Offline Dictionary for Vocabulary Enrichment (1264 entries)
export interface WordEnrichmentData {
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
}

export const DICTIONARY_LOOKUP: Record<string, WordEnrichmentData> = {
  "a bone to pick": {
    "word": "A bone to pick",
    "pos": "idiom",
    "simpleDefinition": "A complaint or dispute that you want to discuss and settle with someone.",
    "banglaMeaning": "রাগান্বিত হওয়া / কথা বলার মতো অভিযোগ থাকা",
    "synonyms": [
      "Grievance",
      "Complaint",
      "Dispute"
    ],
    "antonyms": [
      "Harmony",
      "Agreement"
    ],
    "example": "I have a bone to pick with you regarding yesterday's canceled meeting."
  },
  "abandon": {
    "word": "Abandon",
    "pos": "verb",
    "simpleDefinition": "To leave a place, person, or thing permanently, especially when you should stay.",
    "banglaMeaning": "ছেড়ে যাওয়া",
    "synonyms": [
      "desert",
      "forsake",
      "relinquish",
      "give up"
    ],
    "antonyms": [
      "keep",
      "retain",
      "support"
    ],
    "example": "The crew had to abandon the sinking ship."
  },
  "abate": {
    "word": "Abate",
    "pos": "verb",
    "simpleDefinition": "To become less intense or widespread, or to make something less intense.",
    "banglaMeaning": "প্রশমিত করা / কমানো",
    "synonyms": [
      "subside",
      "diminish",
      "lessen",
      "decrease"
    ],
    "antonyms": [
      "intensify",
      "increase",
      "strengthen"
    ],
    "example": "The storm finally began to abate after hours of heavy rain."
  },
  "abatement": {
    "word": "Abatement",
    "pos": "noun",
    "simpleDefinition": "The process of reducing or making something less intense or severe.",
    "banglaMeaning": "কমানো",
    "synonyms": [
      "reduction",
      "decrease",
      "lessening",
      "mitigation"
    ],
    "antonyms": [
      "increase",
      "intensification",
      "rise"
    ],
    "example": "The city council approved a tax abatement for new businesses."
  },
  "abeyance": {
    "word": "Abeyance",
    "pos": "noun",
    "simpleDefinition": "A state of temporary disuse or suspension.",
    "banglaMeaning": "স্থগিতাবস্থা",
    "synonyms": [
      "suspension",
      "dormancy",
      "postponement",
      "limbo"
    ],
    "antonyms": [
      "continuation",
      "operation",
      "revival"
    ],
    "example": "The project was held in abeyance until funding could be secured."
  },
  "abhor": {
    "word": "Abhor",
    "pos": "verb",
    "simpleDefinition": "To hate or detest something deeply",
    "banglaMeaning": "ঘৃণা করা / তীব্র অপছন্দ করা",
    "synonyms": [
      "Detest",
      "Loathe",
      "Despise"
    ],
    "antonyms": [
      "Love",
      "Adore",
      "Cherish"
    ],
    "example": "She abhors dishonesty in all its forms."
  },
  "abhorrence": {
    "word": "Abhorrence",
    "pos": "noun",
    "simpleDefinition": "A feeling of intense disgust and hatred.",
    "banglaMeaning": "প্রতিক্রিয়া",
    "synonyms": [
      "loathing",
      "detestation",
      "revulsion",
      "antipathy"
    ],
    "antonyms": [
      "admiration",
      "fondness",
      "affection"
    ],
    "example": "She felt an intense abhorrence for violence of any kind."
  },
  "abolish": {
    "word": "Abolish",
    "pos": "verb",
    "simpleDefinition": "To formally put an end to a system, practice, or institution.",
    "banglaMeaning": "বিলুপ্ত করা",
    "synonyms": [
      "eliminate",
      "eradicate",
      "annul",
      "revoke"
    ],
    "antonyms": [
      "establish",
      "institute",
      "create"
    ],
    "example": "Many countries have worked to abolish the death penalty."
  },
  "above board": {
    "word": "Above board",
    "pos": "idiom",
    "simpleDefinition": "Open, honest, and legitimate, without any secrecy or deception.",
    "banglaMeaning": "অকপট / খোলাখুলি",
    "synonyms": [
      "transparent",
      "honest",
      "legitimate",
      "straightforward"
    ],
    "antonyms": [
      "secretive",
      "dishonest",
      "deceptive"
    ],
    "example": "All their business dealings were completely above board."
  },
  "abrasive": {
    "word": "Abrasive",
    "pos": "adjective",
    "simpleDefinition": "Causing irritation or annoyance; also, capable of polishing or cleaning a hard surface by rubbing or grinding.",
    "banglaMeaning": "ঘর্ষণকারী, ঘষে পরিষ্কার বা মসৃণ করার উপযোগী",
    "synonyms": [
      "harsh",
      "caustic",
      "rough",
      "grating"
    ],
    "antonyms": [
      "smooth",
      "gentle",
      "pleasant"
    ],
    "example": "His abrasive comments often offended people, even when he didn't mean to."
  },
  "abscond": {
    "word": "Abscond",
    "pos": "verb",
    "simpleDefinition": "To leave secretly and suddenly, often to avoid arrest or punishment.",
    "banglaMeaning": "আত্মগোপন করা",
    "synonyms": [
      "flee",
      "escape",
      "decamp",
      "bolt"
    ],
    "antonyms": [
      "appear",
      "stay",
      "surrender"
    ],
    "example": "The suspect absconded with the stolen money before the police arrived."
  },
  "abstinent": {
    "word": "Abstinent",
    "pos": "adjective",
    "simpleDefinition": "Choosing not to do something, especially not to drink alcohol or engage in certain pleasures.",
    "banglaMeaning": "সংযমী",
    "synonyms": [
      "temperate",
      "sober",
      "self-restrained",
      "ascetic"
    ],
    "antonyms": [
      "indulgent",
      "intemperate",
      "gluttonous"
    ],
    "example": "She remained abstinent from sugar for a month as part of her diet."
  },
  "abundance": {
    "word": "Abundance",
    "pos": "noun",
    "simpleDefinition": "A very large quantity of something; plentifulness.",
    "banglaMeaning": "আধিক্য",
    "synonyms": [
      "plenty",
      "profusion",
      "wealth",
      "surplus"
    ],
    "antonyms": [
      "scarcity",
      "shortage",
      "lack"
    ],
    "example": "The region enjoys an abundance of natural resources."
  },
  "abuse": {
    "word": "Abuse",
    "pos": "noun",
    "simpleDefinition": "The improper, harmful, or cruel treatment of a person, animal, or thing.",
    "banglaMeaning": "অপব্যবহার",
    "synonyms": [
      "mistreatment",
      "misuse",
      "exploitation",
      "cruelty"
    ],
    "antonyms": [
      "care",
      "respect",
      "protection"
    ],
    "example": "The charity works to prevent child abuse and neglect."
  },
  "abyss": {
    "word": "Abyss",
    "pos": "noun",
    "simpleDefinition": "A deep or seemingly bottomless chasm or pit.",
    "banglaMeaning": "গহ্বর",
    "synonyms": [
      "chasm",
      "gorge",
      "pit",
      "void"
    ],
    "antonyms": [
      "surface",
      "peak",
      "summit"
    ],
    "example": "The climbers looked down into the dark abyss below them."
  },
  "accidental": {
    "word": "Accidental",
    "pos": "adjective",
    "simpleDefinition": "Happening by chance or unexpectedly, without being planned or intended.",
    "banglaMeaning": "আকস্মিক",
    "synonyms": [
      "unintentional",
      "unplanned",
      "fortuitous",
      "chance"
    ],
    "antonyms": [
      "intentional",
      "deliberate",
      "planned"
    ],
    "example": "The spilled coffee was a purely accidental mishap."
  },
  "accretion": {
    "word": "Accretion",
    "pos": "noun",
    "simpleDefinition": "The process of growth or increase by gradual accumulation of additional layers or matter.",
    "banglaMeaning": "সংযোজনের মাধ্যমে বৃদ্ধি",
    "synonyms": [
      "accumulation",
      "buildup",
      "growth",
      "addition"
    ],
    "antonyms": [
      "erosion",
      "decrease",
      "reduction"
    ],
    "example": "The island grew larger over time due to the accretion of sand and sediment."
  },
  "accrue": {
    "word": "Accrue",
    "pos": "verb",
    "simpleDefinition": "To accumulate or receive something, especially payments or benefits, over time.",
    "banglaMeaning": "বৃদ্ধি",
    "synonyms": [
      "accumulate",
      "gather",
      "collect",
      "increase"
    ],
    "antonyms": [
      "diminish",
      "dissipate",
      "forfeit"
    ],
    "example": "Interest will accrue on the savings account over the next year."
  },
  "accumulate": {
    "word": "Accumulate",
    "pos": "verb",
    "simpleDefinition": "To gather or acquire an increasing number or quantity of something over a period of time.",
    "banglaMeaning": "একত্রিত করা বা জমানো",
    "synonyms": [
      "gather",
      "collect",
      "amass",
      "hoard"
    ],
    "antonyms": [
      "disperse",
      "dissipate",
      "spend"
    ],
    "example": "Dust began to accumulate on the old furniture in the empty house."
  },
  "accuse": {
    "word": "Accuse",
    "pos": "verb",
    "simpleDefinition": "To charge someone with an offense or crime.",
    "banglaMeaning": "অভিযুক্ত",
    "synonyms": [
      "blame",
      "indict",
      "impeach",
      "incriminate"
    ],
    "antonyms": [
      "exonerate",
      "absolve",
      "clear"
    ],
    "example": "The police accused him of theft after finding the stolen goods in his car."
  },
  "acquit": {
    "word": "Acquit",
    "pos": "verb",
    "simpleDefinition": "To free someone from a criminal charge by a verdict of not guilty.",
    "banglaMeaning": "অভিযোগ হতে মুক্তি দেয়া",
    "synonyms": [
      "exonerate",
      "absolve",
      "clear",
      "vindicate"
    ],
    "antonyms": [
      "convict",
      "condemn",
      "incriminate"
    ],
    "example": "The jury decided to acquit the defendant due to lack of evidence."
  },
  "acrimonious": {
    "word": "Acrimonious",
    "pos": "adjective",
    "simpleDefinition": "(Typically of a speech or debate) angry and bitter.",
    "banglaMeaning": "তিক্ত",
    "synonyms": [
      "bitter",
      "hostile",
      "resentful",
      "rancorous"
    ],
    "antonyms": [
      "harmonious",
      "friendly",
      "cordial"
    ],
    "example": "Their divorce was marked by a series of acrimonious arguments over property."
  },
  "acrimony": {
    "word": "Acrimony",
    "pos": "noun",
    "simpleDefinition": "Anger, bitterness, and ill feelings",
    "banglaMeaning": "তিক্ততা / বিদ্বেষ",
    "synonyms": [
      "Bitterness",
      "Hostility",
      "Resentment"
    ],
    "antonyms": [
      "Goodwill",
      "Kindness",
      "Harmony"
    ],
    "example": "The divorce proceedings were filled with acrimony."
  },
  "adamant": {
    "word": "Adamant",
    "pos": "adjective",
    "simpleDefinition": "Refusing to be persuaded or to change one's mind.",
    "banglaMeaning": "একগুঁয়ে",
    "synonyms": [
      "unyielding",
      "resolute",
      "stubborn",
      "inflexible"
    ],
    "antonyms": [
      "flexible",
      "yielding",
      "compliant"
    ],
    "example": "She was adamant that she would not change her decision."
  },
  "adapt": {
    "word": "Adapt",
    "pos": "verb",
    "simpleDefinition": "To adjust to new conditions or to make something suitable for a new use or purpose.",
    "banglaMeaning": "খাপ খাওয়ানো",
    "synonyms": [
      "adjust",
      "conform",
      "modify",
      "acclimate"
    ],
    "antonyms": [
      "resist",
      "reject",
      "maintain"
    ],
    "example": "It took some time for the new employees to adapt to the company culture."
  },
  "adequacy": {
    "word": "Adequacy",
    "pos": "noun",
    "simpleDefinition": "The state or quality of being enough or suitable for a particular purpose.",
    "banglaMeaning": "সাদৃশ্য",
    "synonyms": [
      "sufficiency",
      "suitability",
      "competence",
      "fitness"
    ],
    "antonyms": [
      "inadequacy",
      "insufficiency",
      "deficiency"
    ],
    "example": "They questioned the adequacy of the safety measures in place."
  },
  "adequate": {
    "word": "Adequate",
    "pos": "adjective",
    "simpleDefinition": "Enough or satisfactory for a particular purpose.",
    "banglaMeaning": "পর্যাপ্ত",
    "synonyms": [
      "sufficient",
      "suitable",
      "ample",
      "satisfactory"
    ],
    "antonyms": [
      "inadequate",
      "insufficient",
      "deficient"
    ],
    "example": "The small budget was barely adequate for the project's needs."
  },
  "admits": {
    "word": "Admits",
    "pos": "verb",
    "simpleDefinition": "To confess to be true or to allow someone to enter a place.",
    "banglaMeaning": "স্বীকার করা",
    "synonyms": [
      "confesses",
      "acknowledges",
      "permits",
      "allows"
    ],
    "antonyms": [
      "denies",
      "rejects",
      "excludes"
    ],
    "example": "The suspect finally admits his involvement in the crime."
  },
  "admonish": {
    "word": "Admonish",
    "pos": "verb",
    "simpleDefinition": "To warn or criticize someone gently",
    "banglaMeaning": "সতর্ক করা / মৃদু তিরস্কার করা / সতর্ক করা",
    "synonyms": [
      "Warn",
      "Reprimand",
      "Rebuke"
    ],
    "antonyms": [
      "Praise",
      "Commend",
      "Approve"
    ],
    "example": "The teacher admonished the student for cheating."
  },
  "adopt": {
    "word": "Adopt",
    "pos": "verb",
    "simpleDefinition": "To legally take another person's child into your family and raise them as your own, or to choose to take up or follow an idea, plan, or method.",
    "banglaMeaning": "গ্রহণ করা",
    "synonyms": [
      "embrace",
      "take on",
      "choose",
      "accept"
    ],
    "antonyms": [
      "reject",
      "abandon",
      "discard"
    ],
    "example": "The city council decided to adopt a new policy to improve public transportation."
  },
  "adopted": {
    "word": "Adopted",
    "pos": "adjective",
    "simpleDefinition": "Having been legally taken into another family to be raised as their child, or having been chosen and taken up as a new idea or method.",
    "banglaMeaning": "গ্রহণ করা",
    "synonyms": [
      "chosen",
      "taken in",
      "embraced",
      "assumed"
    ],
    "antonyms": [
      "biological",
      "natural",
      "rejected"
    ],
    "example": "The adopted child quickly felt at home with her new parents."
  },
  "adoring": {
    "word": "Adoring",
    "pos": "adjective",
    "simpleDefinition": "Showing deep love, admiration, or worship for someone or something.",
    "banglaMeaning": "প্রেমপূর্ণ",
    "synonyms": [
      "loving",
      "devoted",
      "admiring",
      "fond"
    ],
    "antonyms": [
      "hateful",
      "scornful",
      "indifferent"
    ],
    "example": "The adoring fans cheered loudly when their favorite band appeared on stage."
  },
  "adornment": {
    "word": "Adornment",
    "pos": "noun",
    "simpleDefinition": "Something that is used to decorate or make something more attractive.",
    "banglaMeaning": "অলংকরণ",
    "synonyms": [
      "decoration",
      "embellishment",
      "ornament",
      "accessory"
    ],
    "antonyms": [
      "plainness",
      "bareness",
      "simplicity"
    ],
    "example": "The ancient queen wore elaborate gold adornments on her hair and clothing."
  },
  "adverse": {
    "word": "Adverse",
    "pos": "adjective",
    "simpleDefinition": "Causing problems or difficulties; unfavorable or harmful.",
    "banglaMeaning": "প্রতিকূল",
    "synonyms": [
      "unfavorable",
      "detrimental",
      "harmful",
      "negative"
    ],
    "antonyms": [
      "favorable",
      "beneficial",
      "positive"
    ],
    "example": "The team faced adverse weather conditions during their mountain climb."
  },
  "affable": {
    "word": "Affable",
    "pos": "adjective",
    "simpleDefinition": "Friendly, pleasant, and easy to talk to",
    "banglaMeaning": "অমায়িক / বন্ধুবৎসল",
    "synonyms": [
      "Friendly",
      "Amiable",
      "Genial"
    ],
    "antonyms": [
      "Unfriendly",
      "Rude",
      "Hostile"
    ],
    "example": "The affable manager was loved by all the employees."
  },
  "affirm": {
    "word": "Affirm",
    "pos": "verb",
    "simpleDefinition": "To state something as true or to show a strong belief in something.",
    "banglaMeaning": "দৃঢ়ভাবে কোন কিছু বলা",
    "synonyms": [
      "assert",
      "declare",
      "confirm",
      "state"
    ],
    "antonyms": [
      "deny",
      "contradict",
      "refute"
    ],
    "example": "She affirmed her commitment to the project by working extra hours."
  },
  "aftermath": {
    "word": "Aftermath",
    "pos": "noun",
    "simpleDefinition": "The consequences or results of an unpleasant event, especially a disaster or accident.",
    "banglaMeaning": "পরিণাম / ফলাফল",
    "synonyms": [
      "consequences",
      "repercussions",
      "outcome",
      "fallout"
    ],
    "antonyms": [
      "cause",
      "origin",
      "beginning"
    ],
    "example": "The city struggled to rebuild in the aftermath of the devastating earthquake."
  },
  "aggravate": {
    "word": "Aggravate",
    "pos": "verb",
    "simpleDefinition": "To make an unpleasant situation or illness worse",
    "banglaMeaning": "অবনতি ঘটানো / উসকে দেওয়া / অধিক গুরুতর / শোচনীয় করে তোলা",
    "synonyms": [
      "ও Worsen",
      "Intensify",
      "Exacerbate"
    ],
    "antonyms": [
      "Improve",
      "Alleviate",
      "Soothe"
    ],
    "example": "Scratching will only aggravate the skin irritation."
  },
  "agile": {
    "word": "Agile",
    "pos": "adjective",
    "simpleDefinition": "Able to move quickly and easily, or able to think and understand quickly.",
    "banglaMeaning": "তৎপর",
    "synonyms": [
      "nimble",
      "spry",
      "quick",
      "flexible"
    ],
    "antonyms": [
      "clumsy",
      "stiff",
      "slow",
      "awkward"
    ],
    "example": "The agile gymnast performed a series of impressive flips and twists."
  },
  "agitation": {
    "word": "Agitation",
    "pos": "noun",
    "simpleDefinition": "A state of anxiety or nervous excitement, or the act of stirring or shaking something.",
    "banglaMeaning": "অশান্ত",
    "synonyms": [
      "unrest",
      "turmoil",
      "distress",
      "commotion"
    ],
    "antonyms": [
      "calm",
      "peace",
      "tranquility"
    ],
    "example": "There was considerable public agitation over the proposed new tax."
  },
  "agnostic": {
    "word": "Agnostic",
    "pos": "noun",
    "simpleDefinition": "A person who believes that it is impossible to know whether God exists or not.",
    "banglaMeaning": "অজ্ঞেয়বাদী",
    "synonyms": [
      "skeptic",
      "doubter",
      "non-believer"
    ],
    "antonyms": [
      "believer",
      "theist",
      "devotee"
    ],
    "example": "As an agnostic, he was open to different spiritual ideas but didn't claim to know the ultimate truth."
  },
  "ailment": {
    "word": "Ailment",
    "pos": "noun",
    "simpleDefinition": "A minor illness or sickness, often one that is not very serious.",
    "banglaMeaning": "ছোট খাটো অসুস্থতা",
    "synonyms": [
      "illness",
      "sickness",
      "malady",
      "complaint"
    ],
    "antonyms": [
      "health",
      "wellness",
      "vigor"
    ],
    "example": "She visited the doctor for a common ailment, a persistent cough."
  },
  "alabaster": {
    "word": "Alabaster",
    "pos": "noun",
    "simpleDefinition": "A soft, white, translucent stone, often used for carving ornaments or statues.",
    "banglaMeaning": "সাদা পাথর",
    "synonyms": [
      "marble",
      "gypsum"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The sculptor carved a delicate figure from a block of alabaster."
  },
  "alienation": {
    "word": "Alienation",
    "pos": "noun",
    "simpleDefinition": "The feeling of being isolated or separated from a group, society, or one's own feelings.",
    "banglaMeaning": "বিচ্ছেদ / বিচ্ছিন্নতা",
    "synonyms": [
      "estrangement",
      "isolation",
      "detachment",
      "separation"
    ],
    "antonyms": [
      "connection",
      "belonging",
      "integration"
    ],
    "example": "The new employee felt a sense of alienation from her colleagues because of their different interests."
  },
  "allay": {
    "word": "Allay",
    "pos": "verb",
    "simpleDefinition": "To make a strong feeling, such as fear, concern, or suspicion, less intense or severe.",
    "banglaMeaning": "প্রশমিত করা (কষ্ট / যন্ত্রণা )",
    "synonyms": [
      "relieve",
      "soothe",
      "calm",
      "alleviate"
    ],
    "antonyms": [
      "intensify",
      "heighten",
      "worsen"
    ],
    "example": "The doctor tried to allay the patient's fears about the upcoming surgery."
  },
  "alleviate": {
    "word": "Alleviate",
    "pos": "verb",
    "simpleDefinition": "To make suffering, grief, or pain less severe",
    "banglaMeaning": "উপশম করা / লাঘব করা",
    "synonyms": [
      "Ease",
      "Reduce",
      "Relieve"
    ],
    "antonyms": [
      "Aggravate",
      "Intensify",
      "Worsen"
    ],
    "example": "The medicine helped to alleviate the pain."
  },
  "alluring": {
    "word": "Alluring",
    "pos": "adjective",
    "simpleDefinition": "Powerfully attractive or fascinating; tempting.",
    "banglaMeaning": "লোভনীয়",
    "synonyms": [
      "tempting",
      "enticing",
      "captivating",
      "charming"
    ],
    "antonyms": [
      "repulsive",
      "unappealing",
      "unattractive"
    ],
    "example": "The alluring scent of freshly baked bread drew customers into the bakery."
  },
  "aloof": {
    "word": "Aloof",
    "pos": "adjective",
    "simpleDefinition": "Not friendly or willing to take part in things; detached",
    "banglaMeaning": "দূরত্ব বজায় রাখা, নির্লিপ্ত, উদাসীন বা বিচ্ছিন্ন",
    "synonyms": [
      "Distant",
      "Detached",
      "Reserved"
    ],
    "antonyms": [
      "Friendly",
      "Warm",
      "Sociable"
    ],
    "example": "He remained aloof during the office party."
  },
  "altruistic": {
    "word": "Altruistic",
    "pos": "adjective",
    "simpleDefinition": "Showing a selfless concern for the well-being of others",
    "banglaMeaning": "পরার্থপর / নিঃস্বার্থ / পরের জন্য মঙ্গলজনক",
    "synonyms": [
      "Selfless",
      "Generous",
      "Philanthropic"
    ],
    "antonyms": [
      "Selfish",
      "Greedy",
      "Self-centered"
    ],
    "example": "Her altruistic nature led her to donate all her savings."
  },
  "amalgamate": {
    "word": "Amalgamate",
    "pos": "verb",
    "simpleDefinition": "To combine or unite to form one larger organization or structure.",
    "banglaMeaning": "একসাথে করা",
    "synonyms": [
      "merge",
      "combine",
      "unite",
      "blend"
    ],
    "antonyms": [
      "separate",
      "divide",
      "split"
    ],
    "example": "The two small companies decided to amalgamate to create a stronger business."
  },
  "amass": {
    "word": "Amass",
    "pos": "verb",
    "simpleDefinition": "To gather or collect a large amount of something, especially money or information, over a period of time.",
    "banglaMeaning": "জমা করা, সঞ্চয় করা, পুঞ্জীভূত করা বা প্রচুর পরিমাণে সংগ্রহ করা",
    "synonyms": [
      "accumulate",
      "gather",
      "collect",
      "hoard"
    ],
    "antonyms": [
      "disperse",
      "scatter",
      "distribute"
    ],
    "example": "She managed to amass a considerable fortune through shrewd investments."
  },
  "amateur": {
    "word": "Amateur",
    "pos": "noun",
    "simpleDefinition": "A person who engages in an activity for pleasure rather than for financial gain or professional reasons.",
    "banglaMeaning": "অপেশাদার",
    "synonyms": [
      "non-professional",
      "hobbyist",
      "novice",
      "beginner"
    ],
    "antonyms": [
      "professional",
      "expert",
      "specialist"
    ],
    "example": "He was an amateur photographer, but his pictures were often stunning."
  },
  "ambidextrous": {
    "word": "Ambidextrous",
    "pos": "adjective",
    "simpleDefinition": "Able to use both the right and left hands equally well.",
    "banglaMeaning": "সব্যসাচী",
    "synonyms": [
      "two-handed",
      "versatile"
    ],
    "antonyms": [
      "right-handed",
      "left-handed"
    ],
    "example": "The ambidextrous artist could draw intricate details with either hand."
  },
  "ambiguous": {
    "word": "Ambiguous",
    "pos": "adjective",
    "simpleDefinition": "Having more than one possible meaning; unclear",
    "banglaMeaning": "দ্ব্যর্থবোধক / অস্পষ্ট",
    "synonyms": [
      "Vague",
      "Unclear",
      "Equivocal"
    ],
    "antonyms": [
      "Clear",
      "Definite",
      "Explicit"
    ],
    "example": "The politician gave an ambiguous answer that satisfied no one."
  },
  "ambivalent": {
    "word": "Ambivalent",
    "pos": "adjective",
    "simpleDefinition": "Having mixed or conflicting feelings about someone or something",
    "banglaMeaning": "দোদুল্যমান / দোটানায় ভোগা / বিপরীত",
    "synonyms": [
      "Undecided",
      "Uncertain",
      "Certain"
    ],
    "antonyms": [
      "Decisive",
      "She"
    ],
    "example": "felt ambivalent about accepting the BCS Preliminary (41st BCS, 2021)"
  },
  "ameliorate": {
    "word": "Ameliorate",
    "pos": "verb",
    "simpleDefinition": "To make something bad or unsatisfactory better or more tolerable.",
    "banglaMeaning": "প্রশমিত করা (কষ্ট / যন্ত্রণা )",
    "synonyms": [
      "improve",
      "better",
      "enhance",
      "relieve"
    ],
    "antonyms": [
      "worsen",
      "aggravate",
      "exacerbate"
    ],
    "example": "Efforts were made to ameliorate the harsh living conditions in the refugee camp."
  },
  "amenable": {
    "word": "Amenable",
    "pos": "adjective",
    "simpleDefinition": "Willing to accept or be influenced by a suggestion, or easily controlled.",
    "banglaMeaning": "সহজে রাজি বা সম্মত হয় এমন, নমনীয়",
    "synonyms": [
      "cooperative",
      "compliant",
      "responsive",
      "agreeable"
    ],
    "antonyms": [
      "uncooperative",
      "resistant",
      "stubborn"
    ],
    "example": "The team leader was amenable to suggestions for improving the project workflow."
  },
  "amiable": {
    "word": "Amiable",
    "pos": "adjective",
    "simpleDefinition": "Displaying a friendly, kind, and pleasant manner",
    "banglaMeaning": "ভদ্র / মিশুক / অমায়িক",
    "synonyms": [
      "Friendly",
      "Pleasant",
      "Agreeable"
    ],
    "antonyms": [
      "Disagreeable",
      "Hostile",
      "Unfriendly"
    ],
    "example": "The amiable receptionist greeted every visitor warmly."
  },
  "amicable person": {
    "word": "Amicable person",
    "pos": "adjective",
    "simpleDefinition": "Characterized by friendliness and good will, especially between people or groups.",
    "banglaMeaning": "বন্ধুভাবাপন্ন",
    "synonyms": [
      "friendly",
      "good-natured",
      "cordial",
      "agreeable"
    ],
    "antonyms": [
      "hostile",
      "unfriendly",
      "antagonistic"
    ],
    "example": "Despite their disagreements, they managed to reach an amicable settlement."
  },
  "amity": {
    "word": "Amity",
    "pos": "noun",
    "simpleDefinition": "A friendly relationship, especially between countries or groups.",
    "banglaMeaning": "মিত্রতা",
    "synonyms": [
      "friendship",
      "goodwill",
      "harmony",
      "peace"
    ],
    "antonyms": [
      "hostility",
      "animosity",
      "conflict"
    ],
    "example": "The two nations worked to foster amity after years of tension."
  },
  "amplification": {
    "word": "Amplification",
    "pos": "noun",
    "simpleDefinition": "The process of making something larger, stronger, or more intense, especially sound, or providing more details about something.",
    "banglaMeaning": "সম্প্রসারণ বা কোনো কিছু বৃদ্ধি করা",
    "synonyms": [
      "enlargement",
      "expansion",
      "intensification",
      "elaboration"
    ],
    "antonyms": [
      "reduction",
      "diminution",
      "simplification"
    ],
    "example": "The concert hall required sound amplification so that everyone could hear the music clearly."
  },
  "anachronism": {
    "word": "Anachronism",
    "pos": "noun",
    "simpleDefinition": "Something placed in the wrong historical period",
    "banglaMeaning": "কালবৈষম্য / যুগের সাথে বেমানান",
    "synonyms": [
      "- Incongruity",
      "Misplacement",
      "Archaism"
    ],
    "antonyms": [
      "Modernity",
      "Currency",
      "Timeliness"
    ],
    "example": "Using a typewriter in 2024 is a clear anachronism."
  },
  "anarchy": {
    "word": "Anarchy",
    "pos": "noun",
    "simpleDefinition": "A state of lawlessness due to the absence of authority",
    "banglaMeaning": "নৈরাজ্য / বিশৃঙ্খলা",
    "synonyms": [
      "Chaos",
      "Disorder",
      "Lawlessness"
    ],
    "antonyms": [
      "Order",
      "Governance",
      "Control"
    ],
    "example": "The country fell into anarchy after the coup."
  },
  "ancillary": {
    "word": "Ancillary",
    "pos": "adjective",
    "simpleDefinition": "Providing necessary support to the primary activities or operation of an organization, system, or process.",
    "banglaMeaning": "আনুষঙ্গিক",
    "synonyms": [
      "supplementary",
      "auxiliary",
      "subordinate",
      "supporting"
    ],
    "antonyms": [
      "primary",
      "main",
      "essential"
    ],
    "example": "The company provides ancillary services like cleaning and security for its main clients."
  },
  "anemometer": {
    "word": "Anemometer",
    "pos": "noun",
    "simpleDefinition": "A device used to measure the speed of the wind.",
    "banglaMeaning": "বাতাসের বেগ নির্ণায়ক যন্ত্র",
    "synonyms": [
      "wind gauge",
      "wind speed indicator",
      "air speed meter"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The weather station installed a new anemometer to get more accurate wind readings."
  },
  "animate": {
    "word": "Animate",
    "pos": "adjective",
    "simpleDefinition": "Having life; alive or lively.",
    "banglaMeaning": "প্রশান্ত / সজীব",
    "synonyms": [
      "living",
      "alive",
      "vital",
      "sentient"
    ],
    "antonyms": [
      "inanimate",
      "lifeless",
      "dead"
    ],
    "example": "Children often imagine their toys are animate and talk to them."
  },
  "animosity": {
    "word": "Animosity",
    "pos": "noun",
    "simpleDefinition": "Strong hostility and active dislike",
    "banglaMeaning": "শত্রুতা / তীব্র বিদ্বেষ",
    "synonyms": [
      "Hostility",
      "Enmity",
      "Hatred"
    ],
    "antonyms": [
      "Friendship",
      "Love",
      "Goodwill"
    ],
    "example": "There was old animosity between the two rival families."
  },
  "annul": {
    "word": "Annul",
    "pos": "verb",
    "simpleDefinition": "To declare something, like a law or marriage, no longer valid or legally binding.",
    "banglaMeaning": "বাতিল করা",
    "synonyms": [
      "invalidate",
      "revoke",
      "cancel",
      "abolish"
    ],
    "antonyms": [
      "validate",
      "confirm",
      "establish"
    ],
    "example": "The court decided to annul the contract due to a technical error."
  },
  "anomalous": {
    "word": "Anomalous",
    "pos": "adjective",
    "simpleDefinition": "Different from what is normal, expected, or standard; unusual.",
    "banglaMeaning": "ব্যতিক্রমে",
    "synonyms": [
      "abnormal",
      "irregular",
      "atypical",
      "unusual"
    ],
    "antonyms": [
      "normal",
      "typical",
      "standard"
    ],
    "example": "The scientist observed an anomalous reading on the instrument, which required further investigation."
  },
  "anomaly": {
    "word": "Anomaly",
    "pos": "noun",
    "simpleDefinition": "Something that deviates from what is standard, normal, or expected",
    "banglaMeaning": "ব্যতিক্রম / নিয়মবহির্ভূত কিছু",
    "synonyms": [
      "Irregularity",
      "Exception",
      "Deviation"
    ],
    "antonyms": [
      "Normality",
      "Regularity",
      "Conformity"
    ],
    "example": "The results showed an anomaly that puzzled the scientists."
  },
  "anonymous": {
    "word": "Anonymous",
    "pos": "adjective",
    "simpleDefinition": "Not identified by name; unknown or unnamed.",
    "banglaMeaning": "নামহীন / বেনামী",
    "synonyms": [
      "unnamed",
      "unknown",
      "nameless",
      "unidentified"
    ],
    "antonyms": [
      "named",
      "known",
      "identified"
    ],
    "example": "An anonymous donor contributed a large sum of money to the charity."
  },
  "antagonism": {
    "word": "Antagonism",
    "pos": "noun",
    "simpleDefinition": "Active hostility or opposition between two people or groups.",
    "banglaMeaning": "প্রতিদ্বন্দ্বিতা",
    "synonyms": [
      "hostility",
      "animosity",
      "conflict",
      "opposition"
    ],
    "antonyms": [
      "harmony",
      "agreement",
      "friendship"
    ],
    "example": "There was a strong antagonism between the rival teams before the championship game."
  },
  "anticipated": {
    "word": "Anticipated",
    "pos": "verb",
    "simpleDefinition": "Expected or predicted something to happen; looked forward to.",
    "banglaMeaning": "অনুমান বা বুঝতে পারা",
    "synonyms": [
      "expected",
      "foreseen",
      "predicted",
      "awaited"
    ],
    "antonyms": [
      "unexpected",
      "unforeseen",
      "surprised"
    ],
    "example": "Everyone anticipated the arrival of the new product with great excitement."
  },
  "antipathy": {
    "word": "Antipathy",
    "pos": "noun",
    "simpleDefinition": "A strong and deep-seated feeling of dislike",
    "banglaMeaning": "বিতৃষ্ণা / তীব্র অনীহা",
    "synonyms": [
      "Dislike",
      "Aversion",
      "Hostility"
    ],
    "antonyms": [
      "Sympathy",
      "Affection",
      "Fondness"
    ],
    "example": "She had a deep antipathy towards dishonest people."
  },
  "apathetic": {
    "word": "Apathetic",
    "pos": "adjective",
    "simpleDefinition": "Showing or feeling no interest, enthusiasm, or concern.",
    "banglaMeaning": "উদাসীন",
    "synonyms": [
      "indifferent",
      "unconcerned",
      "emotionless",
      "uninterested"
    ],
    "antonyms": [
      "enthusiastic",
      "concerned",
      "passionate"
    ],
    "example": "The students became apathetic about the lesson because the teacher made it very boring."
  },
  "apathy": {
    "word": "Apathy",
    "pos": "noun",
    "simpleDefinition": "Lack of interest, enthusiasm, or concern",
    "banglaMeaning": "উদাসীনতা / নির্লিপ্ততা",
    "synonyms": [
      "Indifference",
      "Lethargy",
      "Disinterest"
    ],
    "antonyms": [
      "Enthusiasm",
      "Concern",
      "Passion"
    ],
    "example": "Voter apathy was the biggest challenge in the election."
  },
  "aphorism": {
    "word": "Aphorism",
    "pos": "noun",
    "simpleDefinition": "A short, clever saying that expresses a general truth or principle.",
    "banglaMeaning": "সংক্ষিপ্ত জ্ঞানগর্ভ উক্তি",
    "synonyms": [
      "proverb",
      "maxim",
      "adage",
      "saying"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "\"Actions speak louder than words\" is a well-known aphorism."
  },
  "appall": {
    "word": "Appall",
    "pos": "verb",
    "simpleDefinition": "To greatly shock or horrify someone.",
    "banglaMeaning": "আতঙ্কিত করা / মর্মাহত করা",
    "synonyms": [
      "horrify",
      "shock",
      "dismay",
      "outrage"
    ],
    "antonyms": [
      "reassure",
      "comfort",
      "please"
    ],
    "example": "The news of the natural disaster appalled people around the world."
  },
  "apparent": {
    "word": "Apparent",
    "pos": "adjective",
    "simpleDefinition": "Clearly visible or understood; obvious.",
    "banglaMeaning": "দৃশ্যমান",
    "synonyms": [
      "obvious",
      "clear",
      "evident",
      "visible"
    ],
    "antonyms": [
      "hidden",
      "unclear",
      "obscure"
    ],
    "example": "It was apparent from her expression that she was unhappy with the decision."
  },
  "appeal": {
    "word": "Appeal",
    "pos": "noun",
    "simpleDefinition": "A serious or urgent request for something, often help or support.",
    "banglaMeaning": "আবেদন",
    "synonyms": [
      "plea",
      "request",
      "petition",
      "entreaty"
    ],
    "antonyms": [
      "rejection",
      "refusal",
      "denial"
    ],
    "example": "The charity launched an appeal for donations to help the flood victims."
  },
  "appease": {
    "word": "Appease",
    "pos": "verb",
    "simpleDefinition": "To pacify or satisfy someone by giving what they want",
    "banglaMeaning": "শান্ত করা / তুষ্ট করা",
    "synonyms": [
      "Pacify",
      "Placate",
      "Satisfy"
    ],
    "antonyms": [
      "Provoke",
      "Aggravate",
      "Irritate"
    ],
    "example": "The government tried to appease the protesters with promises."
  },
  "applaud": {
    "word": "Applaud",
    "pos": "verb",
    "simpleDefinition": "To show approval or praise by clapping hands or shouting.",
    "banglaMeaning": "প্রশংসা",
    "synonyms": [
      "praise",
      "commend",
      "cheer",
      "acclaim"
    ],
    "antonyms": [
      "criticize",
      "condemn",
      "boo"
    ],
    "example": "The audience began to applaud loudly after the amazing performance."
  },
  "applause": {
    "word": "Applause",
    "pos": "noun",
    "simpleDefinition": "The sound of people clapping their hands to show approval or praise.",
    "banglaMeaning": "সাধুবাদ",
    "synonyms": [
      "clapping",
      "ovation",
      "acclaim",
      "cheers"
    ],
    "antonyms": [
      "booing",
      "criticism",
      "disapproval"
    ],
    "example": "The actor received a standing ovation and thunderous applause at the end of the play."
  },
  "appraisal": {
    "word": "Appraisal",
    "pos": "noun",
    "simpleDefinition": "An act of assessing the value, quality, or performance of something or someone.",
    "banglaMeaning": "কোন কিছুর মূল্য পরিমাপ করা.",
    "synonyms": [
      "evaluation",
      "assessment",
      "estimation",
      "judgment"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The annual appraisal helps employees understand their strengths and areas for improvement."
  },
  "arbitrary": {
    "word": "Arbitrary",
    "pos": "adjective",
    "simpleDefinition": "Based on random choice or personal whim, rather than any reason or system.",
    "banglaMeaning": "বিধিবহির্ভূত / স্বৈরাচারী",
    "synonyms": [
      "random",
      "capricious",
      "whimsical",
      "discretionary"
    ],
    "antonyms": [
      "rational",
      "logical",
      "systematic"
    ],
    "example": "The judge's decision seemed arbitrary, as it wasn't based on any clear legal precedent."
  },
  "archives": {
    "word": "Archives",
    "pos": "noun",
    "simpleDefinition": "A collection of historical documents or records providing information about a place, institution, or group of people.",
    "banglaMeaning": "নথিপত্র",
    "synonyms": [
      "records",
      "chronicles",
      "documents",
      "repository"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Researchers spent hours in the city archives looking for old maps and historical letters."
  },
  "arduous": {
    "word": "Arduous",
    "pos": "adjective",
    "simpleDefinition": "Involving or requiring strenuous effort; difficult and tiring.",
    "banglaMeaning": "কষ্টসাধ্য বা পরিশ্রমসাধ্য কিছু",
    "synonyms": [
      "difficult",
      "strenuous",
      "laborious",
      "demanding"
    ],
    "antonyms": [
      "easy",
      "simple",
      "effortless"
    ],
    "example": "Climbing to the summit of the mountain was an arduous task."
  },
  "argument": {
    "word": "Argument",
    "pos": "noun",
    "simpleDefinition": "A reason or set of reasons given with the aim of persuading others that an action or idea is right or wrong. Also, a disagreement.",
    "banglaMeaning": "বিতর্ক",
    "synonyms": [
      "debate",
      "dispute",
      "discussion",
      "contention"
    ],
    "antonyms": [
      "agreement",
      "harmony",
      "peace"
    ],
    "example": "The lawyers presented their arguments to the jury."
  },
  "argumentative": {
    "word": "Argumentative",
    "pos": "adjective",
    "simpleDefinition": "Tending to argue or disagree; fond of arguing.",
    "banglaMeaning": "তর্ক বিতর্ক",
    "synonyms": [
      "quarrelsome",
      "contentious",
      "disputatious",
      "combative"
    ],
    "antonyms": [
      "agreeable",
      "cooperative",
      "peaceful"
    ],
    "example": "He was known for his argumentative nature, always ready to challenge someone's opinion."
  },
  "aristocrat": {
    "word": "Aristocrat",
    "pos": "noun",
    "simpleDefinition": "A person belonging to the highest class in certain societies, often with special social or political status.",
    "banglaMeaning": "অভিজাত",
    "synonyms": [
      "noble",
      "patrician",
      "blue blood",
      "dignitary"
    ],
    "antonyms": [
      "commoner",
      "plebeian"
    ],
    "example": "The old aristocrat lived in a grand mansion with many servants."
  },
  "arouse": {
    "word": "Arouse",
    "pos": "verb",
    "simpleDefinition": "To awaken a feeling, emotion, or response; to stir up.",
    "banglaMeaning": "জাগানো / জাগ্রত করা",
    "synonyms": [
      "awaken",
      "stimulate",
      "provoke",
      "excite"
    ],
    "antonyms": [
      "calm",
      "soothe",
      "suppress"
    ],
    "example": "The speaker's powerful words aroused strong emotions in the audience."
  },
  "arrogance": {
    "word": "Arrogance",
    "pos": "noun",
    "simpleDefinition": "An insulting display of self-importance and superiority",
    "banglaMeaning": "অহংকার / দম্ভ",
    "synonyms": [
      "Pride",
      "Conceit",
      "Haughtiness"
    ],
    "antonyms": [
      "Humility",
      "Modesty",
      "Meekness"
    ],
    "example": "His arrogance prevented him from accepting help."
  },
  "arrogant": {
    "word": "Arrogant",
    "pos": "adjective",
    "simpleDefinition": "Having or revealing an exaggerated sense of one's own importance or abilities.",
    "banglaMeaning": "অহংকারী",
    "synonyms": [
      "haughty",
      "conceited",
      "proud",
      "supercilious"
    ],
    "antonyms": [
      "humble",
      "modest",
      "meek"
    ],
    "example": "His arrogant attitude made it difficult for him to work well with others."
  },
  "articulate": {
    "word": "Articulate",
    "pos": "adjective",
    "simpleDefinition": "Able to express thoughts and ideas clearly and effectively",
    "banglaMeaning": "স্পষ্টভাষী / প্রাঞ্জল",
    "synonyms": [
      "Eloquent",
      "Fluent",
      "Expressive"
    ],
    "antonyms": [
      "Inarticulate",
      "Mumbling",
      "Vague"
    ],
    "example": "She was articulate enough to explain complex ideas simply."
  },
  "artillery": {
    "word": "Artillery",
    "pos": "noun",
    "simpleDefinition": "Large-caliber guns used in warfare, such as cannons, or the branch of an army that uses them.",
    "banglaMeaning": "কামান",
    "synonyms": [
      "ordnance",
      "cannons",
      "weaponry",
      "heavy guns"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The army used heavy artillery to defend their position against the enemy attack."
  },
  "artistic": {
    "word": "Artistic",
    "pos": "adjective",
    "simpleDefinition": "Relating to art or artists; having or showing creative skill.",
    "banglaMeaning": "বৈশিষ্ট্যসূচক",
    "synonyms": [
      "creative",
      "imaginative",
      "aesthetic",
      "expressive"
    ],
    "antonyms": [
      "uncreative",
      "inartistic",
      "plain"
    ],
    "example": "She has a very artistic eye and can turn everyday objects into beautiful decorations."
  },
  "ascend": {
    "word": "Ascend",
    "pos": "verb",
    "simpleDefinition": "To move upwards or climb to a higher position.",
    "banglaMeaning": "আরোহণ করা",
    "synonyms": [
      "climb",
      "rise",
      "mount",
      "go up"
    ],
    "antonyms": [
      "descend",
      "fall",
      "drop"
    ],
    "example": "The hikers began to ascend the steep mountain path at dawn."
  },
  "ascertain": {
    "word": "Ascertain",
    "pos": "verb",
    "simpleDefinition": "To find out or learn with certainty through examination",
    "banglaMeaning": "নিশ্চিত করা / নিরূপণ করা",
    "synonyms": [
      "Determine",
      "Verify",
      "Establish"
    ],
    "antonyms": [
      "Ignore",
      "Overlook",
      "Neglect"
    ],
    "example": "The detective worked hard to ascertain the truth."
  },
  "aspire": {
    "word": "Aspire",
    "pos": "verb",
    "simpleDefinition": "To direct one's hopes, dreams, or ambitions towards achieving something grand.",
    "banglaMeaning": "আকাঙ্ক্ষা করা / ইচ্ছা পোষণ করা",
    "synonyms": [
      "Desire",
      "Aim",
      "Strive",
      "Yearn"
    ],
    "antonyms": [
      "Despise",
      "Disdain",
      "Decline"
    ],
    "example": "She aspired to become a dedicated doctor helping rural communities."
  },
  "assert": {
    "word": "Assert",
    "pos": "verb",
    "simpleDefinition": "To state something confidently and forcefully, or to behave in a way that shows you have power.",
    "banglaMeaning": "দৃঢ়ভাবে কোন কিছু বলা",
    "synonyms": [
      "declare",
      "state",
      "affirm",
      "insist"
    ],
    "antonyms": [
      "deny",
      "retract",
      "concede"
    ],
    "example": "She needed to assert her authority in the meeting to get her point across."
  },
  "assiduous": {
    "word": "Assiduous",
    "pos": "adjective",
    "simpleDefinition": "Showing great care, attention, and effort in one's work or duties.",
    "banglaMeaning": "অধ্যবসায়ী",
    "synonyms": [
      "diligent",
      "industrious",
      "painstaking",
      "meticulous"
    ],
    "antonyms": [
      "lazy",
      "careless",
      "negligent"
    ],
    "example": "The assiduous student spent hours in the library preparing for the exam."
  },
  "astute": {
    "word": "Astute",
    "pos": "adjective",
    "simpleDefinition": "Quick to understand situations and take advantage of them",
    "banglaMeaning": "বিচক্ষণ / তীক্ষ্ণবুদ্ধি / জ্ঞানী / বিচক্ষণ",
    "synonyms": [
      "Clever",
      "Shrewd",
      "Sharp"
    ],
    "antonyms": [
      "Dull",
      "Foolish",
      "Naive"
    ],
    "example": "The astute businessman never made a losing deal."
  },
  "asylum": {
    "word": "Asylum",
    "pos": "noun",
    "simpleDefinition": "Protection or safety given by a government to someone who has left their own country because they are in danger. It can also mean a place of refuge.",
    "banglaMeaning": "আশ্রয়, নিরাপত্তা",
    "synonyms": [
      "refuge",
      "sanctuary",
      "shelter",
      "haven"
    ],
    "antonyms": [
      "danger",
      "exposure",
      "peril"
    ],
    "example": "Many people seek political asylum in other countries to escape persecution."
  },
  "at bottom": {
    "word": "At bottom",
    "pos": "idiom",
    "simpleDefinition": "Used to say what is the true or fundamental nature of something or someone, despite appearances.",
    "banglaMeaning": "প্রকৃতপক্ষে",
    "synonyms": [
      "essentially",
      "fundamentally",
      "truly",
      "in essence"
    ],
    "antonyms": [
      "superficially",
      "outwardly"
    ],
    "example": "He seems gruff, but at bottom, he's a very kind and compassionate person."
  },
  "atrocious": {
    "word": "Atrocious",
    "pos": "adjective",
    "simpleDefinition": "Extremely cruel, brutal, or wicked",
    "banglaMeaning": "নৃশংস / বর্বরোচিত",
    "synonyms": [
      "Brutal",
      "Horrible",
      "Wicked"
    ],
    "antonyms": [
      "Kind",
      "Gentle",
      "Wonderful"
    ],
    "example": "The soldiers committed atrocious crimes during the war."
  },
  "attempts": {
    "word": "Attempts",
    "pos": "noun",
    "simpleDefinition": "Efforts made to achieve or do something.",
    "banglaMeaning": "চেষ্টা করা",
    "synonyms": [
      "efforts",
      "tries",
      "endeavors",
      "ventures"
    ],
    "antonyms": [
      "successes",
      "achievements"
    ],
    "example": "Despite several attempts, they couldn't solve the complex puzzle."
  },
  "attribute": {
    "word": "Attribute",
    "pos": "verb",
    "simpleDefinition": "To regard something as being caused by or belonging to someone or something.",
    "banglaMeaning": "আরোপ করা",
    "synonyms": [
      "ascribe",
      "impute",
      "credit",
      "assign"
    ],
    "antonyms": [
      "dissociate",
      "detach",
      "disconnect"
    ],
    "example": "She attributed her success to hard work and dedication."
  },
  "audacious": {
    "word": "Audacious",
    "pos": "adjective",
    "simpleDefinition": "Showing a willingness to take surprisingly bold risks",
    "banglaMeaning": "দুঃসাহসী / নির্ভীক",
    "synonyms": [
      "Bold",
      "Daring",
      "Fearless"
    ],
    "antonyms": [
      "Cowardly",
      "Timid",
      "Fearful"
    ],
    "example": "The audacious mountaineer climbed without any equipment."
  },
  "audacity": {
    "word": "Audacity",
    "pos": "noun",
    "simpleDefinition": "The willingness to take bold risks, or rude or disrespectful behavior.",
    "banglaMeaning": "দুঃসাহস",
    "synonyms": [
      "boldness",
      "daring",
      "impudence",
      "nerve"
    ],
    "antonyms": [
      "timidity",
      "humility",
      "caution"
    ],
    "example": "He had the audacity to ask for a raise after being late every day for a month."
  },
  "austere": {
    "word": "Austere",
    "pos": "adjective",
    "simpleDefinition": "Severe, strict, and having no luxury or comfort",
    "banglaMeaning": "কঠোর / আড়ম্বরহীন / উগ্র / কঠোর",
    "synonyms": [
      "Strict",
      "Stern",
      "Rigid"
    ],
    "antonyms": [
      "Lenient",
      "Soft",
      "Indulgent"
    ],
    "example": "The monk led an austere lifestyle with no luxuries."
  },
  "autocrat": {
    "word": "Autocrat",
    "pos": "noun",
    "simpleDefinition": "A ruler who has absolute power and makes decisions without consulting anyone else.",
    "banglaMeaning": "একনায়ক / বৈস্বরশাসক",
    "synonyms": [
      "dictator",
      "tyrant",
      "despot",
      "absolute ruler"
    ],
    "antonyms": [
      "democrat",
      "subject",
      "follower"
    ],
    "example": "The country was governed by an autocrat who tolerated no dissent."
  },
  "avaricious": {
    "word": "Avaricious",
    "pos": "adjective",
    "simpleDefinition": "Having an extreme greed for wealth or material gain",
    "banglaMeaning": "অর্থলোভী / কৃপণ",
    "synonyms": [
      "Greedy",
      "Covetous",
      "Grasping"
    ],
    "antonyms": [
      "Generous",
      "Charitable",
      "Unselfish"
    ],
    "example": "The avaricious landlord raised rent every year."
  },
  "aversion": {
    "word": "Aversion",
    "pos": "noun",
    "simpleDefinition": "A strong feeling of dislike or opposition towards something.",
    "banglaMeaning": "অনীহা / প্রতিক্রিয়া",
    "synonyms": [
      "dislike",
      "antipathy",
      "distaste",
      "loathing"
    ],
    "antonyms": [
      "fondness",
      "liking",
      "affection"
    ],
    "example": "She had a strong aversion to public speaking, always feeling nervous before presentations."
  },
  "awkward": {
    "word": "Awkward",
    "pos": "adjective",
    "simpleDefinition": "Difficult to use or handle; causing embarrassment or discomfort.",
    "banglaMeaning": "বেমানান",
    "synonyms": [
      "clumsy",
      "ungainly",
      "uncomfortable",
      "embarrassing"
    ],
    "antonyms": [
      "graceful",
      "smooth",
      "comfortable"
    ],
    "example": "There was an awkward silence after he made the inappropriate comment."
  },
  "axle": {
    "word": "Axle",
    "pos": "noun",
    "simpleDefinition": "A rod or spindle (either fixed or rotating) passing through the center of a wheel or group of wheels.",
    "banglaMeaning": "অক্ষ",
    "synonyms": [
      "shaft",
      "spindle",
      "rod",
      "pivot"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The car's axle broke, leaving it stranded on the side of the road."
  },
  "backtrack": {
    "word": "Backtrack",
    "pos": "verb",
    "simpleDefinition": "To go back along the same path one has just taken, or to withdraw from a position or statement previously made.",
    "banglaMeaning": "প্রত্যাখ্যান করা",
    "synonyms": [
      "retreat",
      "withdraw",
      "recant",
      "reverse"
    ],
    "antonyms": [
      "advance",
      "proceed",
      "persist"
    ],
    "example": "After realizing his mistake, he had to backtrack on his earlier statement."
  },
  "baffle": {
    "word": "Baffle",
    "pos": "verb",
    "simpleDefinition": "To completely confuse, puzzle, or perplex",
    "banglaMeaning": "বিভ্রান্ত করা / ধাঁধায় ফেলা",
    "synonyms": [
      "Confuse",
      "Puzzle",
      "Perplex"
    ],
    "antonyms": [
      "Enlighten",
      "Clarify",
      "Explain"
    ],
    "example": "The complex math problem baffled the students."
  },
  "bait": {
    "word": "Bait",
    "pos": "noun",
    "simpleDefinition": "Food or other enticement used to attract fish or other animals, or something used to tempt someone to do something.",
    "banglaMeaning": "টোপ",
    "synonyms": [
      "lure",
      "decoy",
      "enticement",
      "trap"
    ],
    "antonyms": [
      "deterrent",
      "discouragement"
    ],
    "example": "The detective used a fake diamond as bait to catch the thief."
  },
  "ball to the wall": {
    "word": "Ball to the wall",
    "pos": "idiom",
    "simpleDefinition": "To do something with maximum effort, speed, or intensity.",
    "banglaMeaning": "পুরোদমে",
    "synonyms": [
      "full throttle",
      "all out",
      "at full speed",
      "intensely"
    ],
    "antonyms": [
      "slowly",
      "cautiously",
      "half-heartedly"
    ],
    "example": "With only an hour left, they went ball to the wall to finish the project on time."
  },
  "balmy": {
    "word": "Balmy",
    "pos": "adjective",
    "simpleDefinition": "(Of weather) pleasantly warm and mild; also, slightly crazy or foolish.",
    "banglaMeaning": "স্নিগ্ধ",
    "synonyms": [
      "mild",
      "pleasant",
      "gentle",
      "temperate"
    ],
    "antonyms": [
      "harsh",
      "severe",
      "cold"
    ],
    "example": "We enjoyed a balmy evening stroll along the beach."
  },
  "bankrupt": {
    "word": "Bankrupt",
    "pos": "adjective",
    "simpleDefinition": "Unable to pay one's debts; legally declared to be financially ruined.",
    "banglaMeaning": "দেওলিয়া",
    "synonyms": [
      "insolvent",
      "broke",
      "ruined",
      "penniless"
    ],
    "antonyms": [
      "solvent",
      "wealthy",
      "prosperous"
    ],
    "example": "The company went bankrupt after several years of financial losses."
  },
  "barren": {
    "word": "Barren",
    "pos": "adjective",
    "simpleDefinition": "(Of land) too poor to produce vegetation; (of a female animal or woman) unable to have children; unproductive or empty.",
    "banglaMeaning": "অনুর্বর",
    "synonyms": [
      "infertile",
      "unproductive",
      "desolate",
      "sterile"
    ],
    "antonyms": [
      "fertile",
      "fruitful",
      "productive"
    ],
    "example": "The barren landscape stretched for miles, devoid of any trees or plants."
  },
  "barrier": {
    "word": "Barrier",
    "pos": "noun",
    "simpleDefinition": "A fence or other obstacle that prevents movement or access; anything that prevents progress or communication.",
    "banglaMeaning": "প্রতিবন্ধক / বাঁধা",
    "synonyms": [
      "obstacle",
      "obstruction",
      "hindrance",
      "impediment"
    ],
    "antonyms": [
      "opening",
      "bridge",
      "aid"
    ],
    "example": "Language can often be a barrier to effective communication between cultures."
  },
  "barter": {
    "word": "Barter",
    "pos": "verb",
    "simpleDefinition": "To exchange goods or services for other goods or services without using money.",
    "banglaMeaning": "বিনিময় করা",
    "synonyms": [
      "trade",
      "exchange",
      "swap",
      "haggle"
    ],
    "antonyms": [
      "buy",
      "sell",
      "purchase"
    ],
    "example": "In ancient times, people would barter goods like salt for spices."
  },
  "befuddled": {
    "word": "Befuddled",
    "pos": "adjective",
    "simpleDefinition": "Confused or perplexed, often by alcohol or a complex situation.",
    "banglaMeaning": "বিভ্রান্ত",
    "synonyms": [
      "confused",
      "bewildered",
      "perplexed",
      "muddled"
    ],
    "antonyms": [
      "clear-headed",
      "lucid",
      "enlightened"
    ],
    "example": "The old man seemed befuddled by the sudden changes in technology."
  },
  "belittle": {
    "word": "Belittle",
    "pos": "verb",
    "simpleDefinition": "To make someone or something seem unimportant or of less value.",
    "banglaMeaning": "ছোট করা",
    "synonyms": [
      "disparage",
      "demean",
      "deprecate",
      "diminish"
    ],
    "antonyms": [
      "praise",
      "extol",
      "laud",
      "magnify"
    ],
    "example": "It's never right to belittle someone's efforts, even if they fail."
  },
  "belittlement": {
    "word": "Belittlement",
    "pos": "noun",
    "simpleDefinition": "The act of making someone or something seem unimportant or of less value.",
    "banglaMeaning": "হীনতা / খর্বতা",
    "synonyms": [
      "disparagement",
      "denigration",
      "deprecation",
      "humiliation"
    ],
    "antonyms": [
      "praise",
      "commendation",
      "exaltation"
    ],
    "example": "Constant belittlement from his boss eroded his self-confidence."
  },
  "bellicose": {
    "word": "Bellicose",
    "pos": "adjective",
    "simpleDefinition": "Demonstrating aggression and a willingness to fight",
    "banglaMeaning": "যুদ্ধংদেহী / মারমুখী",
    "synonyms": [
      "Warlike",
      "Aggressive",
      "Hostile"
    ],
    "antonyms": [
      "Peaceful",
      "Gentle",
      "Docile"
    ],
    "example": "The bellicose nation threatened its neighbours constantly."
  },
  "bend": {
    "word": "Bend",
    "pos": "verb",
    "simpleDefinition": "To force something straight into a curve or angle; to move your body downwards and forwards.",
    "banglaMeaning": "বাঁকানো",
    "synonyms": [
      "curve",
      "flex",
      "stoop",
      "incline"
    ],
    "antonyms": [
      "straighten",
      "unbend",
      "stiffen"
    ],
    "example": "You need to bend your knees slightly when lifting heavy objects."
  },
  "benevolent": {
    "word": "Benevolent",
    "pos": "adjective",
    "simpleDefinition": "Kind, generous, and caring for others",
    "banglaMeaning": "দয়ালু / হিতৈষী",
    "synonyms": [
      "Kind",
      "Charitable",
      "Generous"
    ],
    "antonyms": [
      "Malevolent",
      "Cruel",
      "Selfish"
    ],
    "example": "The benevolent donor funded a new hospital for the poor."
  },
  "benign": {
    "word": "Benign",
    "pos": "adjective",
    "simpleDefinition": "Gentle, kind, and not causing harm",
    "banglaMeaning": "সদয় / নিরীহ / ক্ষতিকর নয় এমন",
    "synonyms": [
      "Gentle",
      "Kind",
      "Harmless"
    ],
    "antonyms": [
      "Malign",
      "Hostile",
      "Dangerous"
    ],
    "example": "The doctor confirmed the tumour was benign."
  },
  "bewildering": {
    "word": "Bewildering",
    "pos": "adjective",
    "simpleDefinition": "Extremely confusing, perplexing, and hard to understand",
    "banglaMeaning": "বিভ্রান্তিকর / হতবুদ্ধিকর",
    "synonyms": [
      "ও Confusing",
      "Puzzling",
      "Perplexing"
    ],
    "antonyms": [
      "Clear",
      "Simple",
      "Understandable"
    ],
    "example": "The city's traffic system was bewildering to a newcomer."
  },
  "biased": {
    "word": "Biased",
    "pos": "adjective",
    "simpleDefinition": "Showing an unfair preference for or against something or someone.",
    "banglaMeaning": "পক্ষপাতী / পক্ষপাতদুষ্ট",
    "synonyms": [
      "prejudiced",
      "partial",
      "unfair",
      "one-sided"
    ],
    "antonyms": [
      "impartial",
      "objective",
      "fair",
      "neutral"
    ],
    "example": "The news report was criticized for being biased towards one political party."
  },
  "bibliography": {
    "word": "Bibliography",
    "pos": "noun",
    "simpleDefinition": "A list of books, articles, and other sources used when writing a research paper or book.",
    "banglaMeaning": "গ্রন্থপঞ্জি",
    "synonyms": [
      "References",
      "Sources",
      "Citations",
      "Works cited"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student included a comprehensive bibliography at the end of her thesis."
  },
  "bigot": {
    "word": "Bigot",
    "pos": "noun",
    "simpleDefinition": "A person who is stubbornly devoted to their own prejudices",
    "banglaMeaning": "ধর্মান্ধ / গোঁড়া ব্যক্তি / অন্ধ বিশ্বাসী",
    "synonyms": [
      "Fanatic",
      "Intolerant",
      "Prejudiced person"
    ],
    "antonyms": [
      "Tolerant",
      "Liberal",
      "Broad-"
    ],
    "example": "minded The bigot refused to accept people of other religions."
  },
  "blatant": {
    "word": "Blatant",
    "pos": "adjective",
    "simpleDefinition": "Completely obvious and done without shame",
    "banglaMeaning": "প্রকাশ্য / নির্লজ্জ / স্পষ্ট",
    "synonyms": [
      "(       ) Obvious",
      "Flagrant",
      "Glaring"
    ],
    "antonyms": [
      "Subtle",
      "Hidden",
      "Inconspicuous"
    ],
    "example": "The minister's corruption was a blatant misuse of power."
  },
  "blaze": {
    "word": "Blaze",
    "pos": "noun",
    "simpleDefinition": "A very large or fiercely burning fire.",
    "banglaMeaning": "প্রজ্জ্বলিত আগুন, অগ্নিশিখা, বা উজ্জ্বল আলো/দীপ্তি",
    "synonyms": [
      "Fire",
      "Inferno",
      "Conflagration",
      "Flame"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Firefighters quickly responded to the blaze that engulfed the old warehouse."
  },
  "bleak": {
    "word": "Bleak",
    "pos": "adjective",
    "simpleDefinition": "Lacking warmth, cheer, or hope; cold and miserable.",
    "banglaMeaning": "নিরানন্দ / মলিন",
    "synonyms": [
      "Gloomy",
      "Dismal",
      "Dreary",
      "Hopeless"
    ],
    "antonyms": [
      "Cheerful",
      "Bright",
      "Hopeful"
    ],
    "example": "The future looked bleak for the company after the major financial loss."
  },
  "blight": {
    "word": "Blight",
    "pos": "verb",
    "simpleDefinition": "To spoil, harm, or destroy something, especially plants or a positive situation.",
    "banglaMeaning": "ক্ষয় করা",
    "synonyms": [
      "Ruin",
      "Spoil",
      "Damage",
      "Wither"
    ],
    "antonyms": [
      "Improve",
      "Enhance",
      "Flourish"
    ],
    "example": "A severe frost can blight an entire crop of fruit in one night."
  },
  "boaster": {
    "word": "Boaster",
    "pos": "noun",
    "simpleDefinition": "A person who talks with excessive pride and self-satisfaction about their achievements or possessions.",
    "banglaMeaning": "অহংকারী ব্যক্তি",
    "synonyms": [
      "Braggart",
      "Show-off",
      "Egotist",
      "Swanker"
    ],
    "antonyms": [
      "Humble person",
      "Modest person"
    ],
    "example": "Nobody likes to listen to a boaster who constantly talks about how great they are."
  },
  "bohemian": {
    "word": "Bohemian",
    "pos": "adjective",
    "simpleDefinition": "Living an unconventional lifestyle, often associated with artists, writers, or musicians, with few permanent ties.",
    "banglaMeaning": "ভবঘুরে ধরনের লোক",
    "synonyms": [
      "Unconventional",
      "Nonconformist",
      "Free-spirited",
      "Artistic"
    ],
    "antonyms": [
      "Conventional",
      "Traditional",
      "Conformist"
    ],
    "example": "She lived a bohemian life, traveling the world and creating art wherever she went."
  },
  "boisterous": {
    "word": "Boisterous",
    "pos": "adjective",
    "simpleDefinition": "Noisy, energetic, cheerful, and rowdy",
    "banglaMeaning": "কোলাহলপূর্ণ / উচ্ছ্বসিত",
    "synonyms": [
      "Rowdy",
      "Noisy",
      "Unruly"
    ],
    "antonyms": [
      "Quiet",
      "Calm",
      "Peaceful"
    ],
    "example": "The boisterous crowd cheered for the home team."
  },
  "bona-fide": {
    "word": "Bona-fide",
    "pos": "adjective",
    "simpleDefinition": "Genuine, real, and made or done in good faith without deceit.",
    "banglaMeaning": "আসল,খাঁটি",
    "synonyms": [
      "genuine",
      "authentic"
    ],
    "antonyms": [
      "fraudulent",
      "deceitful",
      "fake",
      "counterfeit"
    ],
    "example": "He is a bona fide expert with decades of research experience."
  },
  "bondage": {
    "word": "Bondage",
    "pos": "noun",
    "simpleDefinition": "The state of being a slave or being held captive; lack of freedom.",
    "banglaMeaning": "দাসত্ব, বন্দিত্ব, নিয়ন্ত্রণ, সীমাবদ্ধতা",
    "synonyms": [
      "Slavery",
      "Captivity",
      "Servitude",
      "Subjection"
    ],
    "antonyms": [
      "Freedom",
      "Liberty",
      "Independence"
    ],
    "example": "Many people fought for centuries to escape from the bondage of oppression."
  },
  "boorishness": {
    "word": "Boorishness",
    "pos": "noun",
    "simpleDefinition": "Rude, crude, or insensitive behavior; a lack of refinement or good manners.",
    "banglaMeaning": "রুক্ষতা",
    "synonyms": [
      "Rudeness",
      "Crudeness",
      "Coarseness",
      "Vulgarity"
    ],
    "antonyms": [
      "Politeness",
      "Refinement",
      "Courtesy"
    ],
    "example": "His boorishness at the dinner table offended all the guests."
  },
  "braggart": {
    "word": "Braggart",
    "pos": "noun",
    "simpleDefinition": "A person who boasts about their achievements or possessions in an arrogant way.",
    "banglaMeaning": "দাম্ভিক",
    "synonyms": [
      "Boaster",
      "Show-off",
      "Egotist",
      "Swanker"
    ],
    "antonyms": [
      "Humble person",
      "Modest person"
    ],
    "example": "The braggart couldn't stop telling everyone about his expensive new car."
  },
  "braking": {
    "word": "Braking",
    "pos": "noun",
    "simpleDefinition": "The act of slowing down or stopping a vehicle or machine using a brake.",
    "banglaMeaning": "গতিরোধ",
    "synonyms": [
      "Deceleration",
      "Halting",
      "Stopping",
      "Slowing"
    ],
    "antonyms": [
      "Accelerating",
      "Speeding up"
    ],
    "example": "Smooth braking is essential for safe driving, especially in heavy traffic."
  },
  "breakable": {
    "word": "Breakable",
    "pos": "adjective",
    "simpleDefinition": "Easily broken or shattered.",
    "banglaMeaning": "ভঙ্গুর",
    "synonyms": [
      "Fragile",
      "Delicate",
      "Brittle",
      "Frail"
    ],
    "antonyms": [
      "Durable",
      "Sturdy",
      "Unbreakable"
    ],
    "example": "Please handle the package with care; it contains breakable items."
  },
  "brevity": {
    "word": "Brevity",
    "pos": "noun",
    "simpleDefinition": "The quality of using few words to say something",
    "banglaMeaning": "সংক্ষিপ্ততা / স্বল্পতা / সংক্ষিপ্তভাবে",
    "synonyms": [
      "Conciseness",
      "Terseness",
      "Shortness"
    ],
    "antonyms": [
      "Verbosity",
      "Length",
      "Prolixity"
    ],
    "example": "The speech was appreciated for its brevity and clarity."
  },
  "brittle": {
    "word": "Brittle",
    "pos": "adjective",
    "simpleDefinition": "Hard but liable to break or shatter easily.",
    "banglaMeaning": "ভঙ্গুর",
    "synonyms": [
      "Fragile",
      "Breakable",
      "Delicate",
      "Crisp"
    ],
    "antonyms": [
      "Flexible",
      "Pliable",
      "Tough",
      "Durable"
    ],
    "example": "The old plastic had become brittle and cracked easily when touched."
  },
  "broker": {
    "word": "Broker",
    "pos": "noun",
    "simpleDefinition": "A person who buys and sells goods or assets for others, often for a commission.",
    "banglaMeaning": "দালাল",
    "synonyms": [
      "Agent",
      "Dealer",
      "Intermediary",
      "Middleman"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "She hired a real estate broker to help her find a new apartment."
  },
  "brooding": {
    "word": "Brooding",
    "pos": "adjective",
    "simpleDefinition": "Deeply thoughtful and serious, often in a way that suggests sadness or worry.",
    "banglaMeaning": "চিন্তানিমগ্ন",
    "synonyms": [
      "Pensive",
      "Meditative",
      "Contemplative",
      "Gloomy"
    ],
    "antonyms": [
      "Cheerful",
      "Lighthearted",
      "Joyful"
    ],
    "example": "He sat in the corner, a brooding expression on his face, lost in thought."
  },
  "bucolic": {
    "word": "Bucolic",
    "pos": "adjective",
    "simpleDefinition": "Relating to the pleasant aspects of the countryside and country life.",
    "banglaMeaning": "গ্রাম্য",
    "synonyms": [
      "Rural",
      "Pastoral",
      "Rustic",
      "Agrarian"
    ],
    "antonyms": [
      "Urban",
      "City",
      "Metropolitan"
    ],
    "example": "The painting depicted a peaceful bucolic scene with sheep grazing in a meadow."
  },
  "build in": {
    "word": "Build in",
    "pos": "verb",
    "simpleDefinition": "To include something as a permanent or integral part of a larger structure or system.",
    "banglaMeaning": "অন্তগর্ত",
    "synonyms": [
      "Incorporate",
      "Integrate",
      "Embed",
      "Include"
    ],
    "antonyms": [
      "Exclude",
      "Remove",
      "Separate"
    ],
    "example": "The new software has a security feature built in to protect user data."
  },
  "bureaucrat": {
    "word": "Bureaucrat",
    "pos": "noun",
    "simpleDefinition": "An official in a government department or public institution, often seen as being concerned with official rules and procedures.",
    "banglaMeaning": "সরকারী র্কমর্কতা",
    "synonyms": [
      "Official",
      "Administrator",
      "Civil servant",
      "Functionary"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Dealing with the city's bureaucrats can sometimes be a slow and frustrating process."
  },
  "burgeon": {
    "word": "Burgeon",
    "pos": "verb",
    "simpleDefinition": "To grow, expand, or flourish rapidly",
    "banglaMeaning": "দ্রুত বিকশিত হওয়া / ফুলে-ফেঁপে ওঠা",
    "synonyms": [
      "ও Flourish",
      "Expand",
      "Boom"
    ],
    "antonyms": [
      "Decline",
      "Shrink",
      "Wither"
    ],
    "example": "Small businesses began to burgeon after the new policy."
  },
  "buried": {
    "word": "Buried",
    "pos": "adjective",
    "simpleDefinition": "Placed or hidden underground, or covered completely.",
    "banglaMeaning": "সমাহিত বা কবর দেয়া হয়েছে এমন",
    "synonyms": [
      "Interred",
      "Concealed",
      "Hidden",
      "Covered"
    ],
    "antonyms": [
      "Uncovered",
      "Exposed",
      "Exhumed"
    ],
    "example": "The ancient treasure was buried deep beneath the old oak tree."
  },
  "bustling": {
    "word": "Bustling",
    "pos": "adjective",
    "simpleDefinition": "Full of activity, movement, and noise.",
    "banglaMeaning": "কোলাহলপূর্ণ",
    "synonyms": [
      "Lively",
      "Hectic",
      "Busy",
      "Vibrant"
    ],
    "antonyms": [
      "Quiet",
      "Calm",
      "Peaceful",
      "Deserted"
    ],
    "example": "The market was bustling with shoppers preparing for the holiday season."
  },
  "butter": {
    "word": "Butter",
    "pos": "noun",
    "simpleDefinition": "A pale yellow edible fatty substance made by churning cream and used as a spread or in cooking.",
    "banglaMeaning": "মাখন",
    "synonyms": [
      "Spread",
      "Margarine",
      "Ghee"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "She spread butter generously on her toast every morning."
  },
  "bygone": {
    "word": "Bygone",
    "pos": "adjective",
    "simpleDefinition": "Belonging to an earlier time; past.",
    "banglaMeaning": "বিগত",
    "synonyms": [
      "Past",
      "Former",
      "Previous",
      "Olden"
    ],
    "antonyms": [
      "Present",
      "Future",
      "Current"
    ],
    "example": "They often reminisced about the bygone days of their youth."
  },
  "cajole": {
    "word": "Cajole",
    "pos": "verb",
    "simpleDefinition": "To persuade someone to do something through gentle coaxing",
    "banglaMeaning": "মিষ্টি কথায় রাজি করানো",
    "synonyms": [
      "Coax",
      "Persuade",
      "Flatter"
    ],
    "antonyms": [
      "Force",
      "Compel",
      "Intimidate"
    ],
    "example": "She cajoled her father into buying her a new phone."
  },
  "callous": {
    "word": "Callous",
    "pos": "adjective",
    "simpleDefinition": "Showing or having an insensitive and cruel disregard for others",
    "banglaMeaning": "নিষ্ঠুর / অনুভূতিহীন",
    "synonyms": [
      "Heartless",
      "Cruel",
      "Insensitive"
    ],
    "antonyms": [
      "Compassionate",
      "Kind",
      "Sensitive"
    ],
    "example": "The callous factory owner ignored the workers' suffering."
  },
  "calumny": {
    "word": "Calumny",
    "pos": "noun",
    "simpleDefinition": "The making of false and defamatory statements to hurt a reputation",
    "banglaMeaning": "মিথ্যা অপবাদ / কুৎসা",
    "synonyms": [
      "Slander",
      "Defamation",
      "Libel"
    ],
    "antonyms": [
      "Praise",
      "Commendation",
      "Tribute"
    ],
    "example": "The politician suffered greatly from calumny by opponents."
  },
  "candid": {
    "word": "Candid",
    "pos": "adjective",
    "simpleDefinition": "Truthful, direct, and straightforward",
    "banglaMeaning": "অকপট / স্পষ্টভাষী",
    "synonyms": [
      "Frank",
      "Honest",
      "Outspoken"
    ],
    "antonyms": [
      "Dishonest",
      "Evasive",
      "Secretive"
    ],
    "example": "She gave a candid opinion about the project's flaws."
  },
  "candour": {
    "word": "Candour",
    "pos": "noun",
    "simpleDefinition": "The quality of being open, honest, and straightforward in speech or behavior.",
    "banglaMeaning": "সাধাসিধা / বিশ্বাসপ্রবণ",
    "synonyms": [
      "Honesty",
      "Frankness",
      "Openness",
      "Sincerity"
    ],
    "antonyms": [
      "Deceit",
      "Dishonesty",
      "Evasiveness"
    ],
    "example": "Her candour was refreshing; she always spoke her mind without hesitation."
  },
  "cannibal": {
    "word": "Cannibal",
    "pos": "noun",
    "simpleDefinition": "A person who eats the flesh of other human beings, or an animal that eats others of its own kind.",
    "banglaMeaning": "নরখাদক",
    "synonyms": [
      "Man-eater",
      "Anthropophagite"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "In some animal species, a female may become a cannibal and eat her own young."
  },
  "capacious": {
    "word": "Capacious",
    "pos": "adjective",
    "simpleDefinition": "Having a lot of space inside; roomy.",
    "banglaMeaning": "সুপ্রশস্ত",
    "synonyms": [
      "Roomy",
      "Spacious",
      "Ample",
      "Voluminous"
    ],
    "antonyms": [
      "Cramped",
      "Small",
      "Confined"
    ],
    "example": "The capacious backpack could hold all her camping gear for the week."
  },
  "capitalist": {
    "word": "Capitalist",
    "pos": "noun",
    "simpleDefinition": "A person who supports or practices capitalism, especially one who owns a lot of capital and uses it to generate wealth.",
    "banglaMeaning": "পুঁজিবাদী",
    "synonyms": [
      "Entrepreneur",
      "Investor",
      "Financier",
      "Industrialist"
    ],
    "antonyms": [
      "Socialist",
      "Communist"
    ],
    "example": "As a successful capitalist, he invested his profits back into new businesses."
  },
  "capricious": {
    "word": "Capricious",
    "pos": "adjective",
    "simpleDefinition": "Given to sudden and unaccountable changes of mood or behavior",
    "banglaMeaning": "খেয়ালি / খামখেয়ালী",
    "synonyms": [
      "Fickle",
      "Impulsive",
      "Unpredictable"
    ],
    "antonyms": [
      "Stable",
      "Reliable",
      "Consistent"
    ],
    "example": "Her capricious nature made it hard to trust her decisions."
  },
  "castigate": {
    "word": "Castigate",
    "pos": "verb",
    "simpleDefinition": "To criticize someone severely or punish them for something they have done wrong.",
    "banglaMeaning": "নিন্দা করা / তিরস্কার করা",
    "synonyms": [
      "reprimand",
      "scold",
      "rebuke",
      "admonish"
    ],
    "antonyms": [
      "praise",
      "commend",
      "laud"
    ],
    "example": "The coach had to castigate the team for their poor performance in the first half."
  },
  "casual": {
    "word": "Casual",
    "pos": "adjective",
    "simpleDefinition": "Happening by chance, without planning, or not serious or formal.",
    "banglaMeaning": "আকস্মিক",
    "synonyms": [
      "informal",
      "accidental",
      "spontaneous",
      "relaxed"
    ],
    "antonyms": [
      "formal",
      "deliberate",
      "serious"
    ],
    "example": "She made a casual remark about moving, but I think she was serious."
  },
  "categorical": {
    "word": "Categorical",
    "pos": "adjective",
    "simpleDefinition": "Absolutely and completely clear, without any doubt or conditions.",
    "banglaMeaning": "নিরপেক্ষ",
    "synonyms": [
      "absolute",
      "unequivocal",
      "definite",
      "explicit"
    ],
    "antonyms": [
      "conditional",
      "ambiguous",
      "vague"
    ],
    "example": "The manager gave a categorical denial of any wrongdoing."
  },
  "caustic": {
    "word": "Caustic",
    "pos": "adjective",
    "simpleDefinition": "Sarcastic in a biting, bitter, or scathing way",
    "banglaMeaning": "তীব্র ব্যঙ্গাত্মক / ক্ষয়কারী",
    "synonyms": [
      "Corrosive",
      "Biting",
      "Harsh"
    ],
    "antonyms": [
      "Mild",
      "Pleasant",
      "Gentle"
    ],
    "example": "His caustic remarks hurt everyone in the room."
  },
  "celibacy": {
    "word": "Celibacy",
    "pos": "noun",
    "simpleDefinition": "The state of abstaining from marriage and sexual relations, often for religious reasons.",
    "banglaMeaning": "সতীধ",
    "synonyms": [
      "abstinence",
      "chastity",
      "virginity"
    ],
    "antonyms": [
      "promiscuity",
      "marriage"
    ],
    "example": "Many religious orders require their members to practice celibacy."
  },
  "censure": {
    "word": "Censure",
    "pos": "verb",
    "simpleDefinition": "To express severe disapproval of someone or something formally",
    "banglaMeaning": "তীব্র নিন্দা করা / তিরস্কার করা",
    "synonyms": [
      "Criticize",
      "Condemn",
      "Blame"
    ],
    "antonyms": [
      "Praise",
      "Approve",
      "Commend"
    ],
    "example": "The MP was formally censured for his inappropriate conduct."
  },
  "cereal": {
    "word": "Cereal",
    "pos": "noun",
    "simpleDefinition": "A grain used for food, such as wheat, oats, or rice, or a breakfast food made from these grains.",
    "banglaMeaning": "খাদ্যশস্য",
    "synonyms": [
      "grain",
      "corn",
      "oats",
      "wheat"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "For breakfast, I usually have a bowl of cereal with milk."
  },
  "chagrin": {
    "word": "Chagrin",
    "pos": "noun",
    "simpleDefinition": "A feeling of strong annoyance, embarrassment, or disappointment, often caused by a failure or mistake.",
    "banglaMeaning": "বিরক্তি",
    "synonyms": [
      "annoyance",
      "embarrassment",
      "mortification",
      "vexation"
    ],
    "antonyms": [
      "delight",
      "pleasure",
      "satisfaction"
    ],
    "example": "To her chagrin, she realized she had forgotten her wallet at home."
  },
  "chastise": {
    "word": "Chastise",
    "pos": "verb",
    "simpleDefinition": "To reprimand, criticize, or punish someone severely",
    "banglaMeaning": "কঠোর শাস্তি দেওয়া / তিরস্কার করা",
    "synonyms": [
      "Punish",
      "Scold",
      "Reprimand"
    ],
    "antonyms": [
      "Praise",
      "Reward",
      "Commend"
    ],
    "example": "The headmaster chastised the students for breaking rules."
  },
  "chastity": {
    "word": "Chastity",
    "pos": "noun",
    "simpleDefinition": "The state of being pure and virtuous, especially by refraining from sexual activity.",
    "banglaMeaning": "সতীত্ব বা চারিত্রিক বিশুদ্ধতা",
    "synonyms": [
      "purity",
      "innocence",
      "celibacy",
      "virginity"
    ],
    "antonyms": [
      "promiscuity",
      "immorality"
    ],
    "example": "The knight swore an oath of chastity and loyalty."
  },
  "chide": {
    "word": "Chide",
    "pos": "verb",
    "simpleDefinition": "To speak to someone in a way that expresses mild disapproval or gentle criticism.",
    "banglaMeaning": "তিরস্কার করা",
    "synonyms": [
      "scold",
      "rebuke",
      "admonish",
      "reprimand"
    ],
    "antonyms": [
      "praise",
      "commend",
      "approve"
    ],
    "example": "She chided her son for leaving his toys all over the floor."
  },
  "chronic": {
    "word": "Chronic",
    "pos": "adjective",
    "simpleDefinition": "Lasting for a long time or constantly recurring, especially a disease or problem.",
    "banglaMeaning": "দীর্ঘকাল ধরে চলে আসছে এমন কোনো অবস্থা, রোগ বা অভ্যাসকে বোঝাতে এই শব্দটি ব্যবহৃত হয়",
    "synonyms": [
      "persistent",
      "constant",
      "long-standing",
      "habitual"
    ],
    "antonyms": [
      "acute",
      "temporary",
      "brief"
    ],
    "example": "He suffers from chronic back pain that never seems to go away."
  },
  "circulation": {
    "word": "Circulation",
    "pos": "noun",
    "simpleDefinition": "The movement of something, such as blood in the body, air, or money, or the number of copies of a newspaper or magazine distributed.",
    "banglaMeaning": "প্রচার / প্রচলন / মুদ্রণ",
    "synonyms": [
      "distribution",
      "flow",
      "movement",
      "dissemination"
    ],
    "antonyms": [
      "stagnation",
      "blockage"
    ],
    "example": "The newspaper has a daily circulation of over 100,000 copies."
  },
  "circumspect": {
    "word": "Circumspect",
    "pos": "adjective",
    "simpleDefinition": "Wary, cautious, and unwilling to take unnecessary risks",
    "banglaMeaning": "সতর্ক / দূরদর্শী / সাবধানী",
    "synonyms": [
      "Cautious",
      "Careful",
      "Prudent"
    ],
    "antonyms": [
      "Reckless",
      "Careless",
      "A"
    ],
    "example": "circumspect leader makes decisions after NTRCA Teacher Recruitment (2020)"
  },
  "clandestine": {
    "word": "Clandestine",
    "pos": "adjective",
    "simpleDefinition": "Kept secret or done in secret, usually because it is illicit",
    "banglaMeaning": "গোপন / গুপ্ত",
    "synonyms": [
      "Secret",
      "Covert",
      "Hidden"
    ],
    "antonyms": [
      "Open",
      "Public",
      "Transparent"
    ],
    "example": "The agents held a clandestine meeting at midnight."
  },
  "clemency": {
    "word": "Clemency",
    "pos": "noun",
    "simpleDefinition": "Mercy, lenience, or compassion shown by someone in authority",
    "banglaMeaning": "দয়া / ক্ষমা / সহানুভূতি",
    "synonyms": [
      "Mercy",
      "Leniency",
      "Forgiveness"
    ],
    "antonyms": [
      "Harshness",
      "Cruelty",
      "Strictness"
    ],
    "example": "The judge showed clemency to the young first-time offender."
  },
  "coerce": {
    "word": "Coerce",
    "pos": "verb",
    "simpleDefinition": "To compel or persuade someone to do something by using threats or force",
    "banglaMeaning": "বাধ্য করা / জোর প্রয়োগ করা",
    "synonyms": [
      "Force",
      "Compel",
      "Intimidate"
    ],
    "antonyms": [
      "Persuade",
      "Allow",
      "Free"
    ],
    "example": "No one should be coerced into signing a contract."
  },
  "cogent": {
    "word": "Cogent",
    "pos": "adjective",
    "simpleDefinition": "Clear, logical, persuasive, and convincing",
    "banglaMeaning": "জোরালো / অকাট্য / যুক্তিযুক্ত / প্রবল / অকাট্য",
    "synonyms": [
      "Convincing",
      "Compelling",
      "Persuasive"
    ],
    "antonyms": [
      "Weak",
      "Unconvincing",
      "Feeble"
    ],
    "example": "She made a cogent argument for the new policy."
  },
  "cogitate": {
    "word": "Cogitate",
    "pos": "verb",
    "simpleDefinition": "To think deeply and carefully about something; to ponder.",
    "banglaMeaning": "বুঝতে পারা",
    "synonyms": [
      "ponder",
      "contemplate",
      "deliberate",
      "muse"
    ],
    "antonyms": [
      "ignore",
      "disregard",
      "forget"
    ],
    "example": "He needed a quiet place to cogitate on the complex problem."
  },
  "cogitating": {
    "word": "Cogitating",
    "pos": "adjective",
    "simpleDefinition": "Deep in thought; thinking carefully and deeply about something.",
    "banglaMeaning": "চিন্তানিমগ্ন",
    "synonyms": [
      "thoughtful",
      "pensive",
      "contemplative",
      "reflective"
    ],
    "antonyms": [
      "thoughtless",
      "unthinking"
    ],
    "example": "She sat in her chair, a cogitating expression on her face."
  },
  "coherent": {
    "word": "Coherent",
    "pos": "adjective",
    "simpleDefinition": "Logical and consistent, making sense, or able to speak clearly and understandably.",
    "banglaMeaning": "সামঞ্জস্যপূর্ণ / সুসংগত / যৌক্তিক",
    "synonyms": [
      "logical",
      "consistent",
      "clear",
      "articulate"
    ],
    "antonyms": [
      "incoherent",
      "illogical",
      "confused"
    ],
    "example": "The speaker presented a coherent argument that was easy to follow."
  },
  "colossal": {
    "word": "Colossal",
    "pos": "adjective",
    "simpleDefinition": "Extremely large or great in size, extent, or degree.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "enormous",
      "gigantic",
      "massive",
      "immense"
    ],
    "antonyms": [
      "tiny",
      "miniature",
      "minute"
    ],
    "example": "The company made a colossal profit last quarter."
  },
  "come round": {
    "word": "Come round",
    "pos": "idiom",
    "simpleDefinition": "To regain consciousness after fainting, or to change one's opinion to agree with someone else's.",
    "banglaMeaning": "আরোগ্য লাভ করা",
    "synonyms": [
      "recover",
      "revive",
      "agree",
      "concede"
    ],
    "antonyms": [
      "faint",
      "disagree",
      "resist"
    ],
    "example": "After a few minutes, she started to come round and open her eyes."
  },
  "commence": {
    "word": "Commence",
    "pos": "verb",
    "simpleDefinition": "To begin or start something.",
    "banglaMeaning": "শুরু করা",
    "synonyms": [
      "begin",
      "start",
      "initiate",
      "launch"
    ],
    "antonyms": [
      "end",
      "finish",
      "conclude"
    ],
    "example": "The ceremony will commence at exactly 10 o'clock."
  },
  "commencement": {
    "word": "Commencement",
    "pos": "noun",
    "simpleDefinition": "The beginning or start of something, or a ceremony where degrees are awarded.",
    "banglaMeaning": "শুরু",
    "synonyms": [
      "beginning",
      "start",
      "inception",
      "inauguration"
    ],
    "antonyms": [
      "end",
      "conclusion",
      "finish"
    ],
    "example": "The commencement of the new project is scheduled for next month."
  },
  "commend": {
    "word": "Commend",
    "pos": "verb",
    "simpleDefinition": "To praise someone or something officially or publicly.",
    "banglaMeaning": "প্রশংসা করা",
    "synonyms": [
      "praise",
      "applaud",
      "laud",
      "extol"
    ],
    "antonyms": [
      "criticize",
      "condemn",
      "censure"
    ],
    "example": "The police officer was commended for his bravery."
  },
  "communism": {
    "word": "Communism",
    "pos": "noun",
    "simpleDefinition": "A political and economic system where all property is publicly owned, and each person works and is paid according to their abilities and needs.",
    "banglaMeaning": "সাম্যবাদ",
    "synonyms": [
      "socialism",
      "collectivism"
    ],
    "antonyms": [
      "capitalism",
      "individualism"
    ],
    "example": "The theory of communism advocates for a classless society."
  },
  "compassionate": {
    "word": "Compassionate",
    "pos": "adjective",
    "simpleDefinition": "Feeling or showing sympathy and concern for the suffering or misfortunes of others.",
    "banglaMeaning": "করুণাময়",
    "synonyms": [
      "sympathetic",
      "empathetic",
      "caring",
      "kind"
    ],
    "antonyms": [
      "indifferent",
      "cruel",
      "heartless"
    ],
    "example": "The compassionate nurse comforted the worried patient."
  },
  "compensate": {
    "word": "Compensate",
    "pos": "verb",
    "simpleDefinition": "To give someone something, typically money, in recognition of loss, suffering, or injury incurred; to make up for something.",
    "banglaMeaning": "ক্ষতিপূরন দেয়া",
    "synonyms": [
      "reimburse",
      "recompense",
      "atone",
      "offset"
    ],
    "antonyms": [
      "penalize",
      "forfeit",
      "lose"
    ],
    "example": "The company had to compensate customers for the faulty product."
  },
  "compile": {
    "word": "Compile",
    "pos": "verb",
    "simpleDefinition": "To produce something, especially a list, book, or report, by assembling information collected from different sources.",
    "banglaMeaning": "একত্র করা",
    "synonyms": [
      "assemble",
      "collect",
      "gather",
      "organize"
    ],
    "antonyms": [
      "disperse",
      "separate",
      "dismantle"
    ],
    "example": "She spent hours compiling a list of potential clients."
  },
  "complacency": {
    "word": "Complacency",
    "pos": "noun",
    "simpleDefinition": "A feeling of smug or uncritical satisfaction with oneself or one's achievements.",
    "banglaMeaning": "আত্মতৃপ্তি",
    "synonyms": [
      "self-satisfaction",
      "smugness",
      "contentment"
    ],
    "antonyms": [
      "dissatisfaction",
      "concern",
      "anxiety"
    ],
    "example": "Their complacency led them to underestimate the competition."
  },
  "complacent": {
    "word": "Complacent",
    "pos": "adjective",
    "simpleDefinition": "Smug and overly satisfied with oneself, unaware of potential dangers",
    "banglaMeaning": "আত্মসন্তুষ্ট / আত্মতৃপ্ত",
    "synonyms": [
      "Self-satisfied",
      "Smug",
      "Unconcerned"
    ],
    "antonyms": [
      "Concerned",
      "Anxious",
      "Worried"
    ],
    "example": "Don't become complacent after one success."
  },
  "complexity": {
    "word": "Complexity",
    "pos": "noun",
    "simpleDefinition": "The state of being complicated or intricate; the quality of having many interconnected parts.",
    "banglaMeaning": "জটিলতা",
    "synonyms": [
      "intricacy",
      "complication",
      "elaborateness"
    ],
    "antonyms": [
      "simplicity",
      "straightforwardness",
      "ease"
    ],
    "example": "The complexity of the legal case required many expert witnesses."
  },
  "compliance": {
    "word": "Compliance",
    "pos": "noun",
    "simpleDefinition": "The act of obeying a rule, request, or law, or acting in accordance with an agreement.",
    "banglaMeaning": "সম্মতি / প্রতিপালন",
    "synonyms": [
      "obedience",
      "adherence",
      "conformity",
      "agreement"
    ],
    "antonyms": [
      "defiance",
      "resistance",
      "noncompliance"
    ],
    "example": "The company must ensure full compliance with environmental regulations."
  },
  "composite": {
    "word": "Composite",
    "pos": "adjective",
    "simpleDefinition": "Made up of several different parts or elements combined together.",
    "banglaMeaning": "যৌগিক",
    "synonyms": [
      "blended",
      "mixed",
      "combined",
      "compound"
    ],
    "antonyms": [
      "simple",
      "single",
      "unmixed"
    ],
    "example": "The new material is a composite of plastic and metal, making it both light and strong."
  },
  "composure": {
    "word": "Composure",
    "pos": "noun",
    "simpleDefinition": "The state of being calm and in control of your feelings, especially in a difficult situation.",
    "banglaMeaning": "মানসিক স্থিরতা, আত্মসংযম, ধীরস্থির ভাব",
    "synonyms": [
      "calmness",
      "serenity",
      "self-possession",
      "tranquility"
    ],
    "antonyms": [
      "agitation",
      "anxiety",
      "discomposure"
    ],
    "example": "Despite the sudden emergency, she maintained her composure and quickly called for help."
  },
  "conceal": {
    "word": "Conceal",
    "pos": "verb",
    "simpleDefinition": "To hide something or someone from view or from being known.",
    "banglaMeaning": "গোপন করা",
    "synonyms": [
      "hide",
      "disguise",
      "cover",
      "mask"
    ],
    "antonyms": [
      "reveal",
      "expose",
      "disclose"
    ],
    "example": "He tried to conceal his excitement, but a small smile gave him away."
  },
  "concede": {
    "word": "Concede",
    "pos": "verb",
    "simpleDefinition": "To admit that something is true, or surrender in a contest",
    "banglaMeaning": "স্বীকার করা / পরাজয় মেনে নেওয়া",
    "synonyms": [
      "ও Admit",
      "Acknowledge",
      "Yield"
    ],
    "antonyms": [
      "Deny",
      "Resist",
      "Refuse"
    ],
    "example": "He conceded defeat after counting the votes."
  },
  "conceited": {
    "word": "Conceited",
    "pos": "adjective",
    "simpleDefinition": "Having an excessively high opinion of oneself or one's abilities.",
    "banglaMeaning": "আত্মভিমানী",
    "synonyms": [
      "arrogant",
      "vain",
      "proud",
      "self-important"
    ],
    "antonyms": [
      "humble",
      "modest",
      "unassuming"
    ],
    "example": "Her conceited attitude made it difficult for others to work with her on the team."
  },
  "conciliate": {
    "word": "Conciliate",
    "pos": "verb",
    "simpleDefinition": "To stop someone from being angry or discontented; to pacify or make peace.",
    "banglaMeaning": "শান্ত করা",
    "synonyms": [
      "pacify",
      "appease",
      "mollify",
      "placate"
    ],
    "antonyms": [
      "provoke",
      "irritate",
      "antagonize"
    ],
    "example": "The mediator tried to conciliate the two opposing parties to reach an agreement."
  },
  "conclude": {
    "word": "Conclude",
    "pos": "verb",
    "simpleDefinition": "To bring something to an end; to finish. It can also mean to arrive at a judgment or opinion by reasoning.",
    "banglaMeaning": "শেষ করা",
    "synonyms": [
      "finish",
      "complete",
      "end",
      "terminate"
    ],
    "antonyms": [
      "begin",
      "start",
      "commence"
    ],
    "example": "After a long discussion, the committee decided to conclude the meeting and vote on the proposal next week."
  },
  "concubine": {
    "word": "Concubine",
    "pos": "noun",
    "simpleDefinition": "A woman who lives with a man but has lower status than his wife or wives.",
    "banglaMeaning": "উপপত্নী; একজন পুরুষের সাথে বৈবাহিক সম্পর্কের বাইরে থাকা নারী",
    "synonyms": [
      "mistress",
      "paramour"
    ],
    "antonyms": [
      "wife",
      "spouse"
    ],
    "example": "In ancient societies, it was not uncommon for powerful men to have concubines in addition to their legal wives."
  },
  "condemn": {
    "word": "Condemn",
    "pos": "verb",
    "simpleDefinition": "To express strong disapproval of something; to officially declare something to be wrong or evil.",
    "banglaMeaning": "তিরস্কার",
    "synonyms": [
      "denounce",
      "censure",
      "criticize",
      "reprimand"
    ],
    "antonyms": [
      "praise",
      "approve",
      "commend"
    ],
    "example": "Many international organizations condemned the violence against innocent civilians."
  },
  "condiment": {
    "word": "Condiment",
    "pos": "noun",
    "simpleDefinition": "A substance such as salt, mustard, or spice that is added to food to improve its flavor.",
    "banglaMeaning": "আচার / মশলা",
    "synonyms": [
      "seasoning",
      "spice",
      "relish",
      "sauce"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Ketchup and mustard are popular condiments served with hot dogs and hamburgers."
  },
  "condone": {
    "word": "Condone",
    "pos": "verb",
    "simpleDefinition": "To accept, overlook, or forgive bad behavior",
    "banglaMeaning": "মার্জনা করা / অন্যায়কে উপেক্ষা করা / উপেক্ষা করা (অপরাধ )",
    "synonyms": [
      "Forgive",
      "Excuse",
      "Overlook"
    ],
    "antonyms": [
      "Condemn",
      "Punish",
      "Blame"
    ],
    "example": "We should never condone corruption in government."
  },
  "conducive": {
    "word": "Conducive",
    "pos": "adjective",
    "simpleDefinition": "Making a certain situation or outcome likely or possible; helpful.",
    "banglaMeaning": "সহায়ক",
    "synonyms": [
      "favorable",
      "helpful",
      "beneficial",
      "instrumental"
    ],
    "antonyms": [
      "unfavorable",
      "detrimental",
      "hindering"
    ],
    "example": "A quiet environment is conducive to studying and concentration."
  },
  "conduit": {
    "word": "Conduit",
    "pos": "noun",
    "simpleDefinition": "A channel or pipe for conveying water or other fluids. It can also refer to a person or organization that acts as a channel for transmitting something.",
    "banglaMeaning": "নালী বা মাধ্যম যার মধ্য দিয়ে জল, গ্যাস, বিদ্যুৎবাহী তার বা কোনো তথ্য ও সম্পদ এক স্থান থেকে অন্য স্থানে প্রবাহিত হয়",
    "synonyms": [
      "channel",
      "pipe",
      "duct",
      "passage"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The city installed a new underground conduit to improve the drainage system."
  },
  "conflict": {
    "word": "Conflict",
    "pos": "noun",
    "simpleDefinition": "A serious disagreement or argument, often prolonged. It can also refer to a struggle or battle.",
    "banglaMeaning": "সংগ্রাম করা",
    "synonyms": [
      "dispute",
      "disagreement",
      "struggle",
      "clash"
    ],
    "antonyms": [
      "harmony",
      "agreement",
      "peace"
    ],
    "example": "There was a clear conflict of interest when the judge ruled on a case involving his own company."
  },
  "confound": {
    "word": "Confound",
    "pos": "verb",
    "simpleDefinition": "To cause surprise or confusion in someone, especially by acting against their expectations.",
    "banglaMeaning": "বিভ্রান্ত করা",
    "synonyms": [
      "confuse",
      "perplex",
      "bewilder",
      "baffle"
    ],
    "antonyms": [
      "clarify",
      "enlighten",
      "explain"
    ],
    "example": "The sudden change in plans confounded everyone, leaving them unsure of what to do next."
  },
  "congenial": {
    "word": "Congenial",
    "pos": "adjective",
    "simpleDefinition": "Pleasant, friendly, and suited to one's taste or nature",
    "banglaMeaning": "অনুকূল / মনোরম / আন্তরিক / বন্ধুভাবাপন্ন",
    "synonyms": [
      "Pleasant",
      "Compatible",
      "Agreeable"
    ],
    "antonyms": [
      "Unpleasant",
      "Incompatible",
      "Hostile"
    ],
    "example": "The new office had a congenial atmosphere for creativity."
  },
  "conger": {
    "word": "Conger",
    "pos": "noun",
    "simpleDefinition": "A large, predatory marine eel, often found in rocky areas of the Atlantic and Mediterranean.",
    "banglaMeaning": "সামুদ্রিক বানমাছ",
    "synonyms": [
      "eel",
      "sea eel"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Divers spotted a large conger eel hiding among the rocks on the seabed."
  },
  "conscript": {
    "word": "Conscript",
    "pos": "verb",
    "simpleDefinition": "To enroll someone compulsorily into military service.",
    "banglaMeaning": "নতুন নিয়োগপ্রাপ্ত অনভিজ্ঞ কর্মী",
    "synonyms": [
      "draft",
      "enlist (compulsorily)",
      "mobilize"
    ],
    "antonyms": [
      "volunteer",
      "discharge"
    ],
    "example": "During wartime, many young men were conscripted into the army."
  },
  "consolidation": {
    "word": "Consolidation",
    "pos": "noun",
    "simpleDefinition": "The process of combining several things into a single, more effective, or coherent whole.",
    "banglaMeaning": "ঐক্যবদ্ধ / একসাথে",
    "synonyms": [
      "unification",
      "merger",
      "integration",
      "strengthening"
    ],
    "antonyms": [
      "division",
      "separation",
      "fragmentation"
    ],
    "example": "The consolidation of the two small companies resulted in a much larger and more competitive business."
  },
  "conspire": {
    "word": "Conspire",
    "pos": "verb",
    "simpleDefinition": "To make secret plans jointly to commit an unlawful or harmful act.",
    "banglaMeaning": "চক্রান্ত করা",
    "synonyms": [
      "plot",
      "scheme",
      "collude",
      "intrigue"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The two rivals conspired to overthrow the current leader of the organization."
  },
  "constraint": {
    "word": "Constraint",
    "pos": "noun",
    "simpleDefinition": "A limitation or restriction.",
    "banglaMeaning": "বাঁধা",
    "synonyms": [
      "restriction",
      "limitation",
      "hindrance",
      "impediment"
    ],
    "antonyms": [
      "freedom",
      "liberty",
      "allowance"
    ],
    "example": "Budgetary constraints prevented the team from hiring additional staff."
  },
  "contemplative": {
    "word": "Contemplative",
    "pos": "adjective",
    "simpleDefinition": "Expressing or involving prolonged thought; thoughtful and reflective.",
    "banglaMeaning": "চিন্তানিমগ্ন",
    "synonyms": [
      "thoughtful",
      "reflective",
      "meditative",
      "pensive"
    ],
    "antonyms": [
      "thoughtless",
      "unreflective",
      "impulsive"
    ],
    "example": "She spent a contemplative afternoon sitting by the lake, lost in her thoughts."
  },
  "contempt": {
    "word": "Contempt",
    "pos": "noun",
    "simpleDefinition": "The feeling that a person or thing is beneath consideration and worthless",
    "banglaMeaning": "অবজ্ঞা / ঘৃণা / তাচ্ছিল্য",
    "synonyms": [
      "Scorn",
      "Disdain",
      "Disrespect"
    ],
    "antonyms": [
      "Respect",
      "Admiration",
      "Reverence"
    ],
    "example": "He looked at the thief with complete contempt."
  },
  "continuation": {
    "word": "Continuation",
    "pos": "noun",
    "simpleDefinition": "The action of carrying something on over time or the state of being carried on.",
    "banglaMeaning": "ধারাবাহিকতা",
    "synonyms": [
      "progression",
      "persistence",
      "extension",
      "perpetuation"
    ],
    "antonyms": [
      "cessation",
      "halt",
      "interruption"
    ],
    "example": "The author promised a continuation of the story in a new book next year."
  },
  "contradict": {
    "word": "Contradict",
    "pos": "verb",
    "simpleDefinition": "To deny the truth of a statement, especially by asserting the opposite.",
    "banglaMeaning": "অস্বীকার করা",
    "synonyms": [
      "deny",
      "refute",
      "gainsay",
      "challenge"
    ],
    "antonyms": [
      "confirm",
      "affirm",
      "agree"
    ],
    "example": "His actions often contradict his words, making it hard to trust him."
  },
  "contrary": {
    "word": "Contrary",
    "pos": "adjective",
    "simpleDefinition": "Opposite in nature, direction, or meaning.",
    "banglaMeaning": "বিপরীত",
    "synonyms": [
      "opposite",
      "conflicting",
      "opposing",
      "adverse"
    ],
    "antonyms": [
      "similar",
      "consistent",
      "agreeable"
    ],
    "example": "Despite the forecast, the weather turned out to be quite contrary to what was predicted."
  },
  "contrast": {
    "word": "Contrast",
    "pos": "noun",
    "simpleDefinition": "The state of being strikingly different from something else in close conjunction.",
    "banglaMeaning": "বৈপরীত্য",
    "synonyms": [
      "difference",
      "dissimilarity",
      "distinction",
      "divergence"
    ],
    "antonyms": [
      "similarity",
      "resemblance",
      "likeness"
    ],
    "example": "The stark contrast between the old and new buildings was quite noticeable."
  },
  "contravene": {
    "word": "Contravene",
    "pos": "verb",
    "simpleDefinition": "To violate or go against a law, rule, or custom.",
    "banglaMeaning": "আইন বা রীতি লংঘন করা",
    "synonyms": [
      "violate",
      "infringe",
      "breach",
      "transgress"
    ],
    "antonyms": [
      "comply",
      "obey",
      "uphold"
    ],
    "example": "Building without a permit would contravene local planning regulations."
  },
  "contrite": {
    "word": "Contrite",
    "pos": "adjective",
    "simpleDefinition": "Feeling deep remorse and sorrow for having done wrong",
    "banglaMeaning": "অনুতপ্ত / অনুশোচনাগ্রস্ত",
    "synonyms": [
      "Remorseful",
      "Penitent",
      "Sorry"
    ],
    "antonyms": [
      "Unrepentant",
      "Indifferent",
      "Arrogant"
    ],
    "example": "The thief appeared contrite in front of the judge."
  },
  "controversy": {
    "word": "Controversy",
    "pos": "noun",
    "simpleDefinition": "Prolonged public disagreement, dispute, or heated discussion",
    "banglaMeaning": "বিতর্ক / বাদ-প্রতিবাদ",
    "synonyms": [
      "Dispute",
      "Debate",
      "Disagreement"
    ],
    "antonyms": [
      "Agreement",
      "Harmony",
      "Consensus"
    ],
    "example": "The new law sparked great controversy across the country."
  },
  "conventional": {
    "word": "Conventional",
    "pos": "adjective",
    "simpleDefinition": "Based on or in accordance with what is generally done or believed; traditional.",
    "banglaMeaning": "প্রচলিত / গতানুগতিক",
    "synonyms": [
      "traditional",
      "customary",
      "standard",
      "orthodox"
    ],
    "antonyms": [
      "unconventional",
      "unusual",
      "radical",
      "innovative"
    ],
    "example": "She preferred a conventional approach to problem-solving rather than trying new, untested methods."
  },
  "convict": {
    "word": "Convict",
    "pos": "verb",
    "simpleDefinition": "To officially declare someone guilty of a criminal offense in a court of law.",
    "banglaMeaning": "দোষী সাব্যস্ত করা",
    "synonyms": [
      "Condemn",
      "Sentence",
      "Find guilty"
    ],
    "antonyms": [
      "Acquit",
      "Exonerate",
      "Absolve"
    ],
    "example": "The jury had sufficient evidence to convict the corrupt official."
  },
  "convicted": {
    "word": "Convicted",
    "pos": "adjective",
    "simpleDefinition": "Found guilty of a crime by a court of law.",
    "banglaMeaning": "দোষী / অপরাধী",
    "synonyms": [
      "guilty",
      "condemned",
      "sentenced",
      "culpable"
    ],
    "antonyms": [
      "acquitted",
      "innocent",
      "exonerated"
    ],
    "example": "The jury found the suspect convicted of theft after reviewing all the evidence."
  },
  "conviction": {
    "word": "Conviction",
    "pos": "noun",
    "simpleDefinition": "A strong belief or opinion; also, the act of proving someone guilty of a crime.",
    "banglaMeaning": "দৃঢ় বিশ্বাস",
    "synonyms": [
      "belief",
      "certainty",
      "assurance",
      "confidence"
    ],
    "antonyms": [
      "doubt",
      "uncertainty",
      "skepticism"
    ],
    "example": "She spoke with great conviction about the importance of environmental protection."
  },
  "convolution": {
    "word": "Convolution",
    "pos": "noun",
    "simpleDefinition": "A coil or twist, especially one of many; something complex and difficult to follow.",
    "banglaMeaning": "কুণ্ডলী",
    "synonyms": [
      "twist",
      "coil",
      "fold",
      "intricacy"
    ],
    "antonyms": [
      "simplicity",
      "straightness",
      "clarity"
    ],
    "example": "The plot of the novel was full of unexpected convolutions, making it hard to predict the ending."
  },
  "copious": {
    "word": "Copious",
    "pos": "adjective",
    "simpleDefinition": "Abundant in supply, quantity, or volume",
    "banglaMeaning": "প্রচুর / বিপুল পরিমাণ",
    "synonyms": [
      "Abundant",
      "Plentiful",
      "Ample"
    ],
    "antonyms": [
      "Scarce",
      "Insufficient",
      "Meagre"
    ],
    "example": "She took copious notes during the lecture."
  },
  "cordial": {
    "word": "Cordial",
    "pos": "adjective",
    "simpleDefinition": "Warm, friendly, gracious, and polite",
    "banglaMeaning": "আন্তরিক / হৃদ্যতাপূর্ণ",
    "synonyms": [
      "Warm",
      "Friendly",
      "Sincere"
    ],
    "antonyms": [
      "Cold",
      "Hostile",
      "Unfriendly"
    ],
    "example": "The two leaders exchanged cordial greetings at the summit."
  },
  "correspond": {
    "word": "Correspond",
    "pos": "verb",
    "simpleDefinition": "To be in agreement or harmony; to communicate by exchanging letters or emails.",
    "banglaMeaning": "মিল",
    "synonyms": [
      "match",
      "agree",
      "align",
      "communicate"
    ],
    "antonyms": [
      "differ",
      "disagree",
      "clash"
    ],
    "example": "The numbers in the report do not correspond with the figures from the previous quarter."
  },
  "corroborate": {
    "word": "Corroborate",
    "pos": "verb",
    "simpleDefinition": "To confirm or give support to a statement, theory, or finding.",
    "banglaMeaning": "দৃঢ় করা",
    "synonyms": [
      "confirm",
      "verify",
      "validate",
      "authenticate"
    ],
    "antonyms": [
      "contradict",
      "disprove",
      "refute"
    ],
    "example": "The witness's testimony helped to corroborate the victim's account of the incident."
  },
  "corrupt": {
    "word": "Corrupt",
    "pos": "adjective",
    "simpleDefinition": "Dishonest, immoral, and willing to act dishonorably for personal gain",
    "banglaMeaning": "দুর্নীতিগ্রস্ত / নীতিভ্রষ্ট",
    "synonyms": [
      "Dishonest",
      "Immoral",
      "Depraved"
    ],
    "antonyms": [
      "Honest",
      "Upright",
      "Moral"
    ],
    "example": "Corrupt officials take bribes from the public."
  },
  "cosmopolitan": {
    "word": "Cosmopolitan",
    "pos": "adjective",
    "simpleDefinition": "Familiar with and at ease in many different countries and cultures; having a worldwide scope.",
    "banglaMeaning": "সার্বজনীন",
    "synonyms": [
      "global",
      "international",
      "worldly",
      "sophisticated"
    ],
    "antonyms": [
      "provincial",
      "narrow-minded",
      "insular"
    ],
    "example": "The city's diverse population gives it a truly cosmopolitan atmosphere."
  },
  "cosmos": {
    "word": "Cosmos",
    "pos": "noun",
    "simpleDefinition": "The universe seen as a well-ordered whole.",
    "banglaMeaning": "মহাবিশ্ব, মহাজাগতিক",
    "synonyms": [
      "universe",
      "galaxy",
      "creation",
      "macrocosm"
    ],
    "antonyms": [
      "microcosm",
      "nothingness"
    ],
    "example": "Scientists continue to explore the vastness and mysteries of the cosmos."
  },
  "counterfeit": {
    "word": "Counterfeit",
    "pos": "adjective",
    "simpleDefinition": "Made in exact imitation of something valuable or important with the intention to deceive or defraud.",
    "banglaMeaning": "ভেজাল / কৃত্রিম",
    "synonyms": [
      "fake",
      "bogus",
      "forged",
      "spurious"
    ],
    "antonyms": [
      "genuine",
      "authentic",
      "real"
    ],
    "example": "The police seized a large shipment of counterfeit designer handbags."
  },
  "courageous": {
    "word": "Courageous",
    "pos": "adjective",
    "simpleDefinition": "Not deterred by danger or pain; brave and daring",
    "banglaMeaning": "সাহসী / নির্ভীক",
    "synonyms": [
      "Brave",
      "Bold",
      "Daring"
    ],
    "antonyms": [
      "Cowardly",
      "Timid",
      "Fearful"
    ],
    "example": "The courageous firefighter saved three lives."
  },
  "covenant": {
    "word": "Covenant",
    "pos": "noun",
    "simpleDefinition": "A formal, solemn, and binding agreement or promise.",
    "banglaMeaning": "আইনসম্মত চুক্তিপত্র",
    "synonyms": [
      "agreement",
      "contract",
      "pact",
      "promise"
    ],
    "antonyms": [
      "disagreement",
      "breach",
      "refusal"
    ],
    "example": "The two nations signed a covenant to maintain peace and mutual cooperation."
  },
  "craft": {
    "word": "Craft",
    "pos": "noun",
    "simpleDefinition": "An activity involving skill in making things by hand; skill or expertise, especially in a particular profession or trade.",
    "banglaMeaning": "দক্ষতা",
    "synonyms": [
      "skill",
      "artistry",
      "expertise",
      "trade"
    ],
    "antonyms": [
      "clumsiness",
      "ineptitude",
      "amateurism"
    ],
    "example": "Her beautiful pottery demonstrated her exceptional craft and attention to detail."
  },
  "crank": {
    "word": "Crank",
    "pos": "noun",
    "simpleDefinition": "An eccentric person, especially one who holds strange beliefs or behaves oddly.",
    "banglaMeaning": "অদ্ভুত স্বভাবের মানুষ, বা কোনো যন্ত্রকে সচল করার জন্য ব্যবহৃত হাতল বা দণ্ড",
    "synonyms": [
      "eccentric",
      "oddball",
      "peculiar",
      "weirdo"
    ],
    "antonyms": [
      "conformist",
      "normal",
      "conventional"
    ],
    "example": "He's a bit of a crank when it comes to his theories about alien life."
  },
  "craven": {
    "word": "Craven",
    "pos": "adjective",
    "simpleDefinition": "Lacking courage; cowardly.",
    "banglaMeaning": "কাপুরুষ",
    "synonyms": [
      "cowardly",
      "timid",
      "fearful",
      "faint-hearted"
    ],
    "antonyms": [
      "brave",
      "courageous",
      "valiant"
    ],
    "example": "The craven soldier deserted his post during the battle."
  },
  "credulous": {
    "word": "Credulous",
    "pos": "adjective",
    "simpleDefinition": "Having or showing too great a readiness to believe things; gullible",
    "banglaMeaning": "অতিবিশ্বাসী / সহজবিশ্বাসী",
    "synonyms": [
      "Gullible",
      "Naive",
      "Trusting"
    ],
    "antonyms": [
      "Skeptical",
      "Suspicious",
      "Critical"
    ],
    "example": "The credulous man was easily tricked by the fraudster."
  },
  "cretin": {
    "word": "Cretin",
    "pos": "noun",
    "simpleDefinition": "A foolish or unintelligent person.",
    "banglaMeaning": "বোকা জাতীয়",
    "synonyms": [
      "idiot",
      "fool",
      "imbecile",
      "dolt"
    ],
    "antonyms": [
      "genius",
      "intellectual",
      "sage"
    ],
    "example": "Only a cretin would believe such an obvious lie."
  },
  "critique": {
    "word": "Critique",
    "pos": "noun",
    "simpleDefinition": "A detailed analysis and assessment of something, especially a literary, artistic, or philosophical work.",
    "banglaMeaning": "সমালোচনামূলক নিবন্ধ",
    "synonyms": [
      "analysis",
      "evaluation",
      "assessment",
      "review"
    ],
    "antonyms": [
      "praise",
      "commendation",
      "approval"
    ],
    "example": "The art critic published a detailed critique of the new exhibition."
  },
  "crone": {
    "word": "Crone",
    "pos": "noun",
    "simpleDefinition": "An old woman who is thin, ugly, or disagreeable (used derogatorily).",
    "banglaMeaning": "বৃদ্ধা; কুৎসিত বৃদ্ধা নারী, ডাইনি",
    "synonyms": [
      "Hag",
      "Witch",
      "Old woman"
    ],
    "antonyms": [
      "Maiden",
      "Youth"
    ],
    "example": "The folklore tale warned travelers of a wicked crone living alone deep in the forest."
  },
  "crook": {
    "word": "Crook",
    "pos": "noun",
    "simpleDefinition": "A dishonest person or a criminal; also, a bend or curve in something.",
    "banglaMeaning": "বাঁকা",
    "synonyms": [
      "criminal",
      "swindler",
      "rogue",
      "cheat"
    ],
    "antonyms": [
      "honest person",
      "upright citizen",
      "law-abiding"
    ],
    "example": "The police arrested the crook who had been stealing from local shops."
  },
  "cryptic": {
    "word": "Cryptic",
    "pos": "adjective",
    "simpleDefinition": "Having a meaning that is mysterious, obscure, or puzzling",
    "banglaMeaning": "রহস্যময় / দুর্বোধ্য",
    "synonyms": [
      "Mysterious",
      "Obscure",
      "Puzzling"
    ],
    "antonyms": [
      "Clear",
      "Obvious",
      "Straightforward"
    ],
    "example": "The detective left a cryptic note at the crime scene."
  },
  "cud chew": {
    "word": "Cud chew",
    "pos": "verb phrase",
    "simpleDefinition": "To repeatedly chew food that has been regurgitated from the stomach, as done by ruminant animals; figuratively, to ponder or think deeply about something.",
    "banglaMeaning": "জাবর কাটা স্তন্যপায়ী প্রাণী",
    "synonyms": [
      "ruminate",
      "ponder",
      "deliberate",
      "contemplate"
    ],
    "antonyms": [
      "ignore",
      "dismiss",
      "forget"
    ],
    "example": "After dinner, the cows would often cud chew peacefully in the field."
  },
  "culpable": {
    "word": "Culpable",
    "pos": "adjective",
    "simpleDefinition": "Deserving blame, censure, or punishment; guilty",
    "banglaMeaning": "দোষী / অপরাধের যোগ্য / শাস্তি পাবার যোগ্য",
    "synonyms": [
      "Guilty",
      "Blameworthy",
      "Responsible"
    ],
    "antonyms": [
      "Innocent",
      "Blameless",
      "Guiltless"
    ],
    "example": "The driver was found culpable for the accident."
  },
  "cunning": {
    "word": "Cunning",
    "pos": "adjective",
    "simpleDefinition": "Having or showing skill in achieving one's ends by deceit or evasion; also, skillful or clever.",
    "banglaMeaning": "ধূর্ত, চতুর, চালাক",
    "synonyms": [
      "sly",
      "crafty",
      "shrewd",
      "artful"
    ],
    "antonyms": [
      "naive",
      "innocent",
      "guileless"
    ],
    "example": "The cunning fox managed to steal the chickens without being seen."
  },
  "cupid": {
    "word": "Cupid",
    "pos": "noun",
    "simpleDefinition": "The Roman god of love, often depicted as a winged boy with a bow and arrow.",
    "banglaMeaning": "প্রেমের প্রতীক; প্রেমের অনুভূতি",
    "synonyms": [
      "Eros",
      "love god",
      "cherub"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "According to myth, Cupid's arrows could make anyone fall deeply in love."
  },
  "curious": {
    "word": "Curious",
    "pos": "adjective",
    "simpleDefinition": "Eager to know or learn something; inquisitive.",
    "banglaMeaning": "কৌতূহলী / জানতে আগ্রহী",
    "synonyms": [
      "Inquisitive",
      "Interested",
      "Eager to know"
    ],
    "antonyms": [
      "Indifferent",
      "Uninterested",
      "Apathetic"
    ],
    "example": "The curious young student asked insightful questions after the science lecture."
  },
  "currency": {
    "word": "Currency",
    "pos": "noun",
    "simpleDefinition": "A system of money in general use in a particular country; also, the state of being generally accepted or in use.",
    "banglaMeaning": "মুদ্রা, গ্রহণযোগ্যতা,প্রচলন",
    "synonyms": [
      "money",
      "cash",
      "prevalence",
      "acceptance"
    ],
    "antonyms": [
      "obsolescence",
      "disuse",
      "rarity"
    ],
    "example": "The euro is the official currency in many European countries."
  },
  "cursive": {
    "word": "Cursive",
    "pos": "adjective",
    "simpleDefinition": "Written with the letters joined together in a flowing style.",
    "banglaMeaning": "টানা টানা হাতের লেখা (জড়ানো )",
    "synonyms": [
      "flowing",
      "joined",
      "script",
      "handwritten"
    ],
    "antonyms": [
      "print",
      "block letters",
      "disconnected"
    ],
    "example": "She wrote a beautiful letter in elegant cursive handwriting."
  },
  "cursory": {
    "word": "Cursory",
    "pos": "adjective",
    "simpleDefinition": "Hasty and therefore not thorough or detailed",
    "banglaMeaning": "ভাসা-ভাসা / দ্রুত ও অগভীর / দ্রুত নিঙ্কন্ন",
    "synonyms": [
      "Superficial",
      "Brief",
      "Hasty"
    ],
    "antonyms": [
      "Thorough",
      "Detailed",
      "Careful"
    ],
    "example": "He gave the document only a cursory glance."
  },
  "curved": {
    "word": "Curved",
    "pos": "adjective",
    "simpleDefinition": "Having a rounded or bent shape rather than a straight line.",
    "banglaMeaning": "বাঁকা, বক্র, ধনুকাকৃতি",
    "synonyms": [
      "bent",
      "arched",
      "rounded",
      "winding"
    ],
    "antonyms": [
      "straight",
      "linear",
      "flat"
    ],
    "example": "The road curved gently around the side of the mountain."
  },
  "cut and dried": {
    "word": "Cut and dried",
    "pos": "idiom",
    "simpleDefinition": "Already decided and therefore not open to discussion; simple and straightforward.",
    "banglaMeaning": "রুক্ষ",
    "synonyms": [
      "predetermined",
      "settled",
      "straightforward",
      "simple"
    ],
    "antonyms": [
      "complex",
      "debatable",
      "open-ended"
    ],
    "example": "The solution to the problem was not as cut and dried as they initially thought."
  },
  "cynic": {
    "word": "Cynic",
    "pos": "noun",
    "simpleDefinition": "A person who believes that people are motivated purely by self-interest rather than acting for honorable or unselfish reasons.",
    "banglaMeaning": "যে র্সবদা অপরের ভূল ধরে",
    "synonyms": [
      "skeptic",
      "pessimist",
      "misanthrope",
      "doubter"
    ],
    "antonyms": [
      "idealist",
      "optimist",
      "believer"
    ],
    "example": "The cynic always found fault with every new proposal, believing it was driven by hidden agendas."
  },
  "cynical": {
    "word": "Cynical",
    "pos": "adjective",
    "simpleDefinition": "Believing that people are motivated solely by self-interest; distrustful",
    "banglaMeaning": "অবিশ্বাসী, সন্দেহপ্রবণ, নৈরাশ্যবাদী",
    "synonyms": [
      "Skeptical",
      "Pessimistic",
      "Sarcastic"
    ],
    "antonyms": [
      "Optimistic",
      "Trusting",
      "Positive"
    ],
    "example": "After years of broken promises, she became cynical about politics."
  },
  "darken": {
    "word": "Darken",
    "pos": "verb",
    "simpleDefinition": "To make or become dark or darker.",
    "banglaMeaning": "অন্ধকার করা",
    "synonyms": [
      "dim",
      "shade",
      "obscure",
      "cloud"
    ],
    "antonyms": [
      "brighten",
      "lighten"
    ],
    "example": "The heavy clouds began to darken the sky before the storm."
  },
  "dauntless": {
    "word": "Dauntless",
    "pos": "adjective",
    "simpleDefinition": "Showing fearlessness, bravery, and determination",
    "banglaMeaning": "অকুতোভয় / নির্ভীক",
    "synonyms": [
      "Fearless",
      "Brave",
      "Intrepid"
    ],
    "antonyms": [
      "Fearful",
      "Timid",
      "Cowardly"
    ],
    "example": "The dauntless soldier crossed enemy lines alone."
  },
  "dead and buried": {
    "word": "Dead and buried",
    "pos": "idiom",
    "simpleDefinition": "Completely finished, forgotten, or no longer relevant.",
    "banglaMeaning": "পুরোপুরি থেমে যাওয়া",
    "synonyms": [
      "obsolete",
      "defunct",
      "bygone",
      "ended"
    ],
    "antonyms": [
      "current",
      "active",
      "alive"
    ],
    "example": "The old proposal for the new bridge is now dead and buried; they've chosen a different plan."
  },
  "dealings": {
    "word": "Dealings",
    "pos": "noun",
    "simpleDefinition": "The way a person or organization behaves towards others in business or personal relationships.",
    "banglaMeaning": "আচরণ",
    "synonyms": [
      "interactions",
      "transactions",
      "relations",
      "conduct"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "His honest dealings with clients earned him a good reputation in the community."
  },
  "dearth": {
    "word": "Dearth",
    "pos": "noun",
    "simpleDefinition": "A scarcity or lack of something.",
    "banglaMeaning": "অভাব / স্বল্পতা",
    "synonyms": [
      "scarcity",
      "shortage",
      "deficiency",
      "insufficiency"
    ],
    "antonyms": [
      "abundance",
      "plenty",
      "surplus"
    ],
    "example": "There was a dearth of fresh water in the village after the long drought."
  },
  "debacle": {
    "word": "Debacle",
    "pos": "noun",
    "simpleDefinition": "A sudden, disastrous collapse or humiliating failure",
    "banglaMeaning": "চরম বিপর্যয় / ভরাডুবি / পতন",
    "synonyms": [
      "Disaster",
      "Fiasco",
      "Catastrophe"
    ],
    "antonyms": [
      "Success",
      "Triumph",
      "Victory"
    ],
    "example": "The team's performance was a complete debacle."
  },
  "debonair": {
    "word": "Debonair",
    "pos": "adjective",
    "simpleDefinition": "Confident, stylish, and charming.",
    "banglaMeaning": "সদা হাসি খুশি",
    "synonyms": [
      "suave",
      "sophisticated",
      "elegant",
      "charming"
    ],
    "antonyms": [
      "awkward",
      "clumsy",
      "unrefined"
    ],
    "example": "The actor played a debonair secret agent who always looked impeccable."
  },
  "debris": {
    "word": "Debris",
    "pos": "noun",
    "simpleDefinition": "Scattered pieces of waste or remains, especially after something has been destroyed.",
    "banglaMeaning": "ধ্বংসাবশেষ",
    "synonyms": [
      "rubble",
      "wreckage",
      "fragments",
      "refuse"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "After the earthquake, the streets were covered in debris from collapsed buildings."
  },
  "decay": {
    "word": "Decay",
    "pos": "verb",
    "simpleDefinition": "To rot or decompose through the action of bacteria and fungi.",
    "banglaMeaning": "ক্ষয় হওয়া",
    "synonyms": [
      "decompose",
      "rot",
      "spoil",
      "deteriorate"
    ],
    "antonyms": [
      "flourish",
      "grow",
      "improve"
    ],
    "example": "Without proper preservation, organic materials will quickly decay."
  },
  "deceit": {
    "word": "Deceit",
    "pos": "noun",
    "simpleDefinition": "The action or practice of deceiving someone by concealing or misrepresenting the truth.",
    "banglaMeaning": "প্রতারণা",
    "synonyms": [
      "deception",
      "trickery",
      "fraud",
      "dishonesty"
    ],
    "antonyms": [
      "honesty",
      "truthfulness",
      "sincerity"
    ],
    "example": "The company was accused of deceit in its advertising claims."
  },
  "deceitful": {
    "word": "Deceitful",
    "pos": "adjective",
    "simpleDefinition": "Misleading others; dishonest and untruthful",
    "banglaMeaning": "প্রতারণাপূর্ণ / বিশ্বাসঘাতক",
    "synonyms": [
      "Dishonest",
      "Fraudulent",
      "Deceptive"
    ],
    "antonyms": [
      "Honest",
      "Truthful",
      "Sincere"
    ],
    "example": "The deceitful salesman sold fake products to customers."
  },
  "deceived": {
    "word": "Deceived",
    "pos": "verb",
    "simpleDefinition": "To make someone believe something that is not true, often to gain an advantage.",
    "banglaMeaning": "প্রতারিত হওয়া বা করা",
    "synonyms": [
      "tricked",
      "misled",
      "duped",
      "fooled"
    ],
    "antonyms": [
      "enlightened",
      "undeceived",
      "informed"
    ],
    "example": "She felt completely deceived when she found out he had been lying to her for months."
  },
  "deceptive": {
    "word": "Deceptive",
    "pos": "adjective",
    "simpleDefinition": "Giving an appearance or impression different from the true one",
    "banglaMeaning": "বিভ্রান্তিকর / প্রতারক / প্রতারণামূলক",
    "synonyms": [
      "Misleading",
      "Fraudulent",
      "Dishonest"
    ],
    "antonyms": [
      "Honest",
      "Transparent",
      "Genuine"
    ],
    "example": "The advertisement was deceptive about the product's benefits."
  },
  "defame": {
    "word": "Defame",
    "pos": "verb",
    "simpleDefinition": "To damage the good reputation of someone by saying or writing bad things about them.",
    "banglaMeaning": "মানহানি",
    "synonyms": [
      "slander",
      "libel",
      "malign",
      "disparage"
    ],
    "antonyms": [
      "praise",
      "commend",
      "glorify"
    ],
    "example": "He threatened to sue the newspaper for trying to defame his character."
  },
  "defensible": {
    "word": "Defensible",
    "pos": "adjective",
    "simpleDefinition": "Able to be protected against attack or criticism; justifiable.",
    "banglaMeaning": "টিকিয়ে রাখা যায় এমন / সমর্থনযোগ্য",
    "synonyms": [
      "justifiable",
      "supportable",
      "valid",
      "sound"
    ],
    "antonyms": [
      "indefensible",
      "unjustifiable",
      "untenable"
    ],
    "example": "Her argument was well-researched and logically defensible."
  },
  "defer": {
    "word": "Defer",
    "pos": "verb",
    "simpleDefinition": "To put off an action or event to a later time; postpone",
    "banglaMeaning": "স্থগিত রাখা / বিলম্বিত করা",
    "synonyms": [
      "ও Postpone",
      "Delay",
      "Suspend"
    ],
    "antonyms": [
      "Advance",
      "Expedite",
      "Hasten"
    ],
    "example": "The meeting was deferred to next week due to bad weather."
  },
  "deficient": {
    "word": "Deficient",
    "pos": "adjective",
    "simpleDefinition": "Not having enough of a specified quality or ingredient; lacking",
    "banglaMeaning": "অপ্রতুল / অভাবযুক্ত / ঘাটতি",
    "synonyms": [
      "Lacking",
      "Inadequate",
      "Insufficient"
    ],
    "antonyms": [
      "Sufficient",
      "Adequate",
      "Complete"
    ],
    "example": "The region is deficient in clean drinking water."
  },
  "deflect": {
    "word": "Deflect",
    "pos": "verb",
    "simpleDefinition": "To cause something to change direction, especially after hitting something.",
    "banglaMeaning": "ঘুরে যাওয়া",
    "synonyms": [
      "divert",
      "redirect",
      "parry",
      "turn aside"
    ],
    "antonyms": [
      "attract",
      "absorb",
      "draw"
    ],
    "example": "The goalkeeper managed to deflect the ball away from the goal."
  },
  "defy": {
    "word": "Defy",
    "pos": "verb",
    "simpleDefinition": "To openly resist or refuse to obey.",
    "banglaMeaning": "বাধা দেয়া",
    "synonyms": [
      "resist",
      "challenge",
      "disobey",
      "flout"
    ],
    "antonyms": [
      "obey",
      "comply",
      "submit"
    ],
    "example": "The small nation continued to defy the demands of the larger power."
  },
  "degrade": {
    "word": "Degrade",
    "pos": "verb",
    "simpleDefinition": "To treat someone with disrespect and lower their character or status",
    "banglaMeaning": "মর্যাদা ক্ষুণ্ণ করা / অবনমিত করা",
    "synonyms": [
      "Demote",
      "Humiliate",
      "Dishonour"
    ],
    "antonyms": [
      "Promote",
      "Elevate",
      "Honor"
    ],
    "example": "The film was accused of degrading women."
  },
  "deleterious": {
    "word": "Deleterious",
    "pos": "adjective",
    "simpleDefinition": "Causing harm or damage.",
    "banglaMeaning": "ক্ষতিকর / অনিষ্টকর",
    "synonyms": [
      "harmful",
      "detrimental",
      "damaging",
      "adverse"
    ],
    "antonyms": [
      "beneficial",
      "advantageous",
      "helpful"
    ],
    "example": "Smoking has many deleterious effects on health."
  },
  "deliberate": {
    "word": "Deliberate",
    "pos": "adjective",
    "simpleDefinition": "Done consciously and intentionally; carefully thought out",
    "banglaMeaning": "ইচ্ছাকৃত / সুচিন্তিত",
    "synonyms": [
      "Intentional",
      "Calculated",
      "Considered"
    ],
    "antonyms": [
      "Accidental",
      "Hasty",
      "Unplanned"
    ],
    "example": "His rude comment was a deliberate attempt to provoke."
  },
  "deliberately": {
    "word": "Deliberately",
    "pos": "adverb",
    "simpleDefinition": "Done on purpose, intentionally.",
    "banglaMeaning": "ইজ্ঞাকৃতভাবে",
    "synonyms": [
      "intentionally",
      "purposefully",
      "consciously",
      "knowingly"
    ],
    "antonyms": [
      "accidentally",
      "unintentionally",
      "inadvertently"
    ],
    "example": "He deliberately ignored her calls because he was angry."
  },
  "delicate": {
    "word": "Delicate",
    "pos": "adjective",
    "simpleDefinition": "Easily broken or damaged; fragile.",
    "banglaMeaning": "কোমল / উপাদেয়",
    "synonyms": [
      "fragile",
      "dainty",
      "subtle",
      "fine"
    ],
    "antonyms": [
      "robust",
      "sturdy",
      "coarse"
    ],
    "example": "The antique vase was so delicate that she handled it with extreme care."
  },
  "delirious": {
    "word": "Delirious",
    "pos": "adjective",
    "simpleDefinition": "In an extremely excited state, often due to illness or fever, causing confusion and incoherent speech.",
    "banglaMeaning": "বিকারগ্রস্থ",
    "synonyms": [
      "feverish",
      "incoherent",
      "raving",
      "ecstatic"
    ],
    "antonyms": [
      "lucid",
      "rational",
      "calm"
    ],
    "example": "After hours of high fever, the patient became delirious and started talking nonsense."
  },
  "delusive": {
    "word": "Delusive",
    "pos": "adjective",
    "simpleDefinition": "Giving a false or misleading impression.",
    "banglaMeaning": "ভ্রান্তি",
    "synonyms": [
      "misleading",
      "deceptive",
      "illusory",
      "false"
    ],
    "antonyms": [
      "realistic",
      "truthful",
      "accurate"
    ],
    "example": "He held a delusive belief that he could win the lottery without buying a ticket."
  },
  "demagogue": {
    "word": "Demagogue",
    "pos": "noun",
    "simpleDefinition": "A political leader who seeks support by appealing to popular desires and prejudices rather than by using rational argument.",
    "banglaMeaning": "জননেতা",
    "synonyms": [
      "agitator",
      "rabble-rouser",
      "instigator",
      "firebrand"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The demagogue stirred up the crowd with promises of easy solutions to complex problems."
  },
  "demise": {
    "word": "Demise",
    "pos": "noun",
    "simpleDefinition": "The death of a person.",
    "banglaMeaning": "মৃত্যু, অবসান",
    "synonyms": [
      "death",
      "passing",
      "end",
      "expiration"
    ],
    "antonyms": [
      "birth",
      "beginning",
      "origin"
    ],
    "example": "We were saddened to hear of the sudden demise of the beloved author."
  },
  "demobilize": {
    "word": "Demobilize",
    "pos": "verb",
    "simpleDefinition": "To release soldiers from military service and send them home.",
    "banglaMeaning": "সামরিক দায়িত্ব থেকে অব্যাহতি দেয়া",
    "synonyms": [
      "disband",
      "disarm",
      "discharge",
      "deactivate"
    ],
    "antonyms": [
      "mobilize",
      "enlist",
      "recruit"
    ],
    "example": "After the war ended, the government began to demobilize thousands of troops."
  },
  "demolish": {
    "word": "Demolish",
    "pos": "verb",
    "simpleDefinition": "To completely destroy a building or other structure.",
    "banglaMeaning": "চূর্ণ করা",
    "synonyms": [
      "destroy",
      "raze",
      "dismantle",
      "flatten"
    ],
    "antonyms": [
      "build",
      "construct",
      "erect"
    ],
    "example": "The old factory was demolished to make way for a new shopping center."
  },
  "demonstrative": {
    "word": "Demonstrative",
    "pos": "adjective",
    "simpleDefinition": "Openly emotional or expressive, especially of affection.",
    "banglaMeaning": "নির্দেশনামূলক, অনুভূতিপ্রবণ",
    "synonyms": [
      "expressive",
      "emotional",
      "open",
      "effusive"
    ],
    "antonyms": [
      "reserved",
      "unexpressive",
      "restrained"
    ],
    "example": "She was a very demonstrative person, always hugging her friends and family."
  },
  "demur": {
    "word": "Demur",
    "pos": "verb",
    "simpleDefinition": "To raise doubts or objections, or show reluctance.",
    "banglaMeaning": "আপত্তি / আশংকা প্রকাশ করা",
    "synonyms": [
      "object",
      "protest",
      "hesitate",
      "balk"
    ],
    "antonyms": [
      "agree",
      "accept",
      "assent"
    ],
    "example": "She demurred at the suggestion that she should work extra hours without pay."
  },
  "denigrate": {
    "word": "Denigrate",
    "pos": "verb",
    "simpleDefinition": "To criticize unfairly; to disparage.",
    "banglaMeaning": "নিন্দা করা / অপবাদ দেয়া",
    "synonyms": [
      "disparage",
      "belittle",
      "malign",
      "defame"
    ],
    "antonyms": [
      "praise",
      "commend",
      "laud"
    ],
    "example": "It's unfair to denigrate someone's efforts without understanding their challenges."
  },
  "denigration": {
    "word": "Denigration",
    "pos": "noun",
    "simpleDefinition": "The act of saying negative and unfair things about someone or something to damage their reputation.",
    "banglaMeaning": "দুর্নাম",
    "synonyms": [
      "defamation",
      "disparagement",
      "slander",
      "vilification"
    ],
    "antonyms": [
      "praise",
      "commendation",
      "eulogy"
    ],
    "example": "The politician faced denigration from his opponents during the election campaign."
  },
  "denounce": {
    "word": "Denounce",
    "pos": "verb",
    "simpleDefinition": "To publicly declare someone or something to be wrong or evil",
    "banglaMeaning": "প্রকাশ্যে নিন্দা করা",
    "synonyms": [
      "Condemn",
      "Criticize",
      "Censure"
    ],
    "antonyms": [
      "Praise",
      "Commend",
      "Approve"
    ],
    "example": "World leaders denounced the act of terrorism."
  },
  "deny": {
    "word": "Deny",
    "pos": "verb",
    "simpleDefinition": "To state that something is not true, or to refuse to admit or accept something.",
    "banglaMeaning": "দৃঢ়ভাবে কোন কিছু অস্বীকার করা",
    "synonyms": [
      "refute",
      "contradict",
      "disclaim",
      "reject"
    ],
    "antonyms": [
      "admit",
      "affirm",
      "confirm"
    ],
    "example": "She chose to deny the accusations, claiming she was innocent."
  },
  "depart": {
    "word": "Depart",
    "pos": "verb",
    "simpleDefinition": "To leave a place, especially to start a journey.",
    "banglaMeaning": "স্থান ত্যাগ করা / গমন করা",
    "synonyms": [
      "leave",
      "exit",
      "set off",
      "go"
    ],
    "antonyms": [
      "arrive",
      "stay",
      "remain"
    ],
    "example": "The train is scheduled to depart from platform 5 at 10:00 AM."
  },
  "deprecate": {
    "word": "Deprecate",
    "pos": "verb",
    "simpleDefinition": "To express disapproval of something, or to make something seem unimportant.",
    "banglaMeaning": "নিন্দা করা",
    "synonyms": [
      "disapprove",
      "belittle",
      "disparage",
      "condemn"
    ],
    "antonyms": [
      "praise",
      "approve",
      "commend"
    ],
    "example": "He tended to deprecate his own achievements, even when they were significant."
  },
  "deprive": {
    "word": "Deprive",
    "pos": "verb",
    "simpleDefinition": "To take something away from someone, or prevent them from having it",
    "banglaMeaning": "বঞ্চিত করা",
    "synonyms": [
      "ও Deny",
      "Rob",
      "Strip"
    ],
    "antonyms": [
      "Provide",
      "Grant",
      "Give"
    ],
    "example": "Millions are deprived of basic education globally."
  },
  "deride": {
    "word": "Deride",
    "pos": "verb",
    "simpleDefinition": "To express contempt for; ridicule and mock",
    "banglaMeaning": "উপহাস করা / বিদ্রূপ করা",
    "synonyms": [
      "Mock",
      "Ridicule",
      "Scoff"
    ],
    "antonyms": [
      "Praise",
      "Admire",
      "Respect"
    ],
    "example": "The students derided the new teacher unfairly."
  },
  "derrick": {
    "word": "Derrick",
    "pos": "noun",
    "simpleDefinition": "A type of crane used for lifting and moving heavy objects, often found on ships or oil rigs.",
    "banglaMeaning": "ভার উত্তোলন যন্ত্র",
    "synonyms": [
      "crane",
      "hoist",
      "lift",
      "boom"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Workers used a large derrick to lift the heavy machinery onto the ship."
  },
  "desert": {
    "word": "Desert",
    "pos": "verb",
    "simpleDefinition": "To leave someone or something without help or support, especially when they need it.",
    "banglaMeaning": "ছেড়ে যাওয়া",
    "synonyms": [
      "abandon",
      "forsake",
      "leave",
      "ditch"
    ],
    "antonyms": [
      "support",
      "assist",
      "stay with"
    ],
    "example": "The soldiers were ordered not to desert their posts during the battle."
  },
  "desolation": {
    "word": "Desolation",
    "pos": "noun",
    "simpleDefinition": "A state of complete emptiness or destruction, or a feeling of great sadness and loneliness.",
    "banglaMeaning": "নিজর্ন",
    "synonyms": [
      "bleakness",
      "barrenness",
      "devastation",
      "loneliness"
    ],
    "antonyms": [
      "vibrancy",
      "cheerfulness",
      "joy"
    ],
    "example": "After the fire, the forest was a scene of utter desolation."
  },
  "despair": {
    "word": "Despair",
    "pos": "noun",
    "simpleDefinition": "The complete loss or absence of hope.",
    "banglaMeaning": "হতাশ",
    "synonyms": [
      "hopelessness",
      "desperation",
      "gloom",
      "dejection"
    ],
    "antonyms": [
      "hope",
      "optimism",
      "joy"
    ],
    "example": "Faced with so many challenges, she felt a deep sense of despair."
  },
  "despicable": {
    "word": "Despicable",
    "pos": "adjective",
    "simpleDefinition": "Deserving hatred, contempt, and moral disgust",
    "banglaMeaning": "ঘৃণ্য / নীচ",
    "synonyms": [
      "Contemptible",
      "Vile",
      "Wretched"
    ],
    "antonyms": [
      "Admirable",
      "Noble",
      "Respectable"
    ],
    "example": "His despicable behaviour shocked the entire community."
  },
  "destitute": {
    "word": "Destitute",
    "pos": "adjective",
    "simpleDefinition": "Without money, food, a home, or possessions; extremely poor.",
    "banglaMeaning": "দরিদ্র",
    "synonyms": [
      "impoverished",
      "penniless",
      "indigent",
      "needy"
    ],
    "antonyms": [
      "wealthy",
      "affluent",
      "rich"
    ],
    "example": "The war left thousands of people destitute and without shelter."
  },
  "destruction": {
    "word": "Destruction",
    "pos": "noun",
    "simpleDefinition": "The act of causing so much damage to something that it no longer exists or cannot be repaired.",
    "banglaMeaning": "ধ্বংস",
    "synonyms": [
      "demolition",
      "ruin",
      "devastation",
      "annihilation"
    ],
    "antonyms": [
      "creation",
      "construction",
      "preservation"
    ],
    "example": "The earthquake caused widespread destruction across the city."
  },
  "desultory": {
    "word": "Desultory",
    "pos": "adjective",
    "simpleDefinition": "Lacking a plan, purpose, or enthusiasm; jumping from one thing to another without a clear focus.",
    "banglaMeaning": "নিয়মশৃংখলাহীন",
    "synonyms": [
      "aimless",
      "haphazard",
      "random",
      "erratic"
    ],
    "antonyms": [
      "methodical",
      "systematic",
      "focused"
    ],
    "example": "He made a few desultory attempts to clean the room before giving up."
  },
  "deter": {
    "word": "Deter",
    "pos": "verb",
    "simpleDefinition": "To discourage someone from doing something, often by making them afraid or doubtful.",
    "banglaMeaning": "নিরুৎসাহিত করা",
    "synonyms": [
      "discourage",
      "hinder",
      "prevent",
      "dissuade"
    ],
    "antonyms": [
      "encourage",
      "incite",
      "persuade"
    ],
    "example": "The high fences were meant to deter intruders from entering the property."
  },
  "devious": {
    "word": "Devious",
    "pos": "adjective",
    "simpleDefinition": "Using dishonest or indirect methods to achieve a goal, or not straightforward.",
    "banglaMeaning": "আঁকাবাঁকা",
    "synonyms": [
      "cunning",
      "tricky",
      "deceitful",
      "circuitous"
    ],
    "antonyms": [
      "straightforward",
      "honest",
      "direct"
    ],
    "example": "He used devious tactics to get what he wanted, often misleading others."
  },
  "devoid": {
    "word": "Devoid",
    "pos": "adjective",
    "simpleDefinition": "Completely lacking in something important or essential.",
    "banglaMeaning": "বজির্ত",
    "synonyms": [
      "lacking",
      "empty",
      "wanting",
      "bare"
    ],
    "antonyms": [
      "full",
      "replete",
      "abundant"
    ],
    "example": "The speech was devoid of any real substance or new ideas."
  },
  "dexterous": {
    "word": "Dexterous",
    "pos": "adjective",
    "simpleDefinition": "Demonstrating neat skill, especially with the hands",
    "banglaMeaning": "নিপুণ / দক্ষ",
    "synonyms": [
      "Skilled",
      "Adroit",
      "Nimble"
    ],
    "antonyms": [
      "Clumsy",
      "Awkward",
      "Inept"
    ],
    "example": "The dexterous surgeon performed a complex operation."
  },
  "diagnosis": {
    "word": "Diagnosis",
    "pos": "noun",
    "simpleDefinition": "The process of identifying the nature of an illness or other problem by examining the symptoms.",
    "banglaMeaning": "রোগ নির্ণয়",
    "synonyms": [
      "identification",
      "analysis",
      "assessment",
      "determination"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The doctor's diagnosis confirmed that she had a common cold."
  },
  "dictator": {
    "word": "Dictator",
    "pos": "noun",
    "simpleDefinition": "A ruler who has complete power over a country, typically one who has obtained control by force and allows no opposition.",
    "banglaMeaning": "একনায়ক",
    "synonyms": [
      "tyrant",
      "autocrat",
      "absolute ruler",
      "despot"
    ],
    "antonyms": [
      "democrat"
    ],
    "example": "The country suffered under the harsh rule of a military dictator for decades."
  },
  "diffident": {
    "word": "Diffident",
    "pos": "adjective",
    "simpleDefinition": "Modest or shy because of a lack of self-confidence",
    "banglaMeaning": "আত্মবিশ্বাসহীন / লাজুক",
    "synonyms": [
      "Shy",
      "Timid",
      "Reserved"
    ],
    "antonyms": [
      "Confident",
      "Bold",
      "Assertive"
    ],
    "example": "The diffident child rarely spoke in class."
  },
  "dilemma": {
    "word": "Dilemma",
    "pos": "noun",
    "simpleDefinition": "A situation in which a difficult choice has to be made between two or more alternatives, especially equally undesirable ones.",
    "banglaMeaning": "উভয়সংকট",
    "synonyms": [
      "predicament",
      "quandary",
      "difficult choice",
      "bind"
    ],
    "antonyms": [
      "solution",
      "certainty",
      "advantage"
    ],
    "example": "She faced a dilemma: either miss her friend's wedding or lose her job."
  },
  "dilettante": {
    "word": "Dilettante",
    "pos": "noun",
    "simpleDefinition": "A person who cultivates an area of interest, such as art or music, without real commitment or knowledge.",
    "banglaMeaning": "অপটুকর্মী",
    "synonyms": [
      "amateur",
      "dabbler",
      "novice",
      "nonprofessional"
    ],
    "antonyms": [
      "expert",
      "professional",
      "specialist"
    ],
    "example": "He was a dilettante in painting, enjoying it as a hobby but never mastering it."
  },
  "diligent": {
    "word": "Diligent",
    "pos": "adjective",
    "simpleDefinition": "Hardworking and showing steady effort",
    "banglaMeaning": "পরিশ্রমী / অধ্যবসায়ী",
    "synonyms": [
      "Hardworking",
      "Industrious",
      "Assiduous"
    ],
    "antonyms": [
      "Lazy",
      "Idle",
      "Negligent"
    ],
    "example": "The diligent student passed the exam with flying colors."
  },
  "discarded": {
    "word": "Discarded",
    "pos": "adjective",
    "simpleDefinition": "Thrown away or gotten rid of because it is no longer wanted or useful.",
    "banglaMeaning": "বাদ দেয়া",
    "synonyms": [
      "rejected",
      "abandoned",
      "thrown out",
      "disposed of"
    ],
    "antonyms": [
      "kept",
      "retained",
      "cherished"
    ],
    "example": "The children played with the discarded toys they found in the attic."
  },
  "discern": {
    "word": "Discern",
    "pos": "verb",
    "simpleDefinition": "To perceive, recognize, or understand something clearly",
    "banglaMeaning": "উপলব্ধি করা / বুঝতে পারা / দৃশ্যমান হওয়া",
    "synonyms": [
      "Perceive",
      "Distinguish",
      "Detect"
    ],
    "antonyms": [
      "Ignore",
      "Confuse",
      "Overlook"
    ],
    "example": "It is important to discern truth from propaganda."
  },
  "discontented": {
    "word": "Discontented",
    "pos": "adjective",
    "simpleDefinition": "Not satisfied or happy with your situation or with things as they are.",
    "banglaMeaning": "অসন্তুষ্ট / অতৃপ্ত",
    "synonyms": [
      "dissatisfied",
      "unhappy",
      "displeased",
      "restless"
    ],
    "antonyms": [
      "contented",
      "satisfied",
      "happy"
    ],
    "example": "The workers became increasingly discontented with their low wages and long hours."
  },
  "discordant": {
    "word": "Discordant",
    "pos": "adjective",
    "simpleDefinition": "Not in agreement or harmony; producing a harsh or unpleasant sound.",
    "banglaMeaning": "শ্রুতিকটু",
    "synonyms": [
      "clashing",
      "jarring",
      "dissonant",
      "conflicting"
    ],
    "antonyms": [
      "harmonious",
      "agreeable",
      "consonant"
    ],
    "example": "The discordant notes from the orchestra made the audience wince."
  },
  "discover": {
    "word": "Discover",
    "pos": "verb",
    "simpleDefinition": "To find something unexpectedly or in the course of a search, or to learn about something for the first time.",
    "banglaMeaning": "আবিষ্কার করা",
    "synonyms": [
      "find",
      "uncover",
      "detect",
      "reveal"
    ],
    "antonyms": [
      "conceal",
      "hide",
      "overlook"
    ],
    "example": "Scientists hope to discover new planets capable of supporting life."
  },
  "discrepancy": {
    "word": "Discrepancy",
    "pos": "noun",
    "simpleDefinition": "A lack of compatibility or noticeable difference between two or more facts",
    "banglaMeaning": "গরমিল / অমিল",
    "synonyms": [
      "Difference",
      "Inconsistency",
      "Mismatch"
    ],
    "antonyms": [
      "Consistency",
      "Agreement",
      "Harmony"
    ],
    "example": "There was a discrepancy in the accounts report."
  },
  "disdain": {
    "word": "Disdain",
    "pos": "noun",
    "simpleDefinition": "The feeling that someone or something is unworthy of one's respect",
    "banglaMeaning": "অবজ্ঞা / ঘৃণা",
    "synonyms": [
      "Contempt",
      "Scorn",
      "Derision"
    ],
    "antonyms": [
      "Respect",
      "Admiration",
      "Reverence"
    ],
    "example": "She looked at his poor work with disdain."
  },
  "disgraceful": {
    "word": "Disgraceful",
    "pos": "adjective",
    "simpleDefinition": "Very bad or unacceptable, causing shame or a loss of respect.",
    "banglaMeaning": "বাজে / অসুন্দর",
    "synonyms": [
      "shameful",
      "scandalous",
      "dishonorable",
      "appalling"
    ],
    "antonyms": [
      "honorable",
      "commendable",
      "admirable"
    ],
    "example": "His behavior at the party was absolutely disgraceful."
  },
  "disinterested": {
    "word": "Disinterested",
    "pos": "adjective",
    "simpleDefinition": "Not influenced by personal feelings, opinions, or advantages; impartial.",
    "banglaMeaning": "নিরপেক্ষ, পক্ষপাতহীন, নিঃস্বার্থ",
    "synonyms": [
      "impartial",
      "unbiased",
      "objective",
      "neutral"
    ],
    "antonyms": [
      "biased",
      "prejudiced",
      "partial"
    ],
    "example": "A judge must remain disinterested to ensure a fair trial."
  },
  "dismal": {
    "word": "Dismal",
    "pos": "adjective",
    "simpleDefinition": "Causing a mood of gloom or depression; dreary",
    "banglaMeaning": "বিষাদময় / হতাশাজনক",
    "synonyms": [
      "Gloomy",
      "Dreary",
      "Depressing"
    ],
    "antonyms": [
      "Cheerful",
      "Bright",
      "Optimistic"
    ],
    "example": "The country's economic situation was truly dismal."
  },
  "dismay": {
    "word": "Dismay",
    "pos": "noun",
    "simpleDefinition": "A feeling of shock and unhappiness, often caused by something unexpected.",
    "banglaMeaning": "আতঙ্কিত করা / মর্মাহত করা",
    "synonyms": [
      "alarm",
      "shock",
      "consternation",
      "distress"
    ],
    "antonyms": [
      "calm",
      "relief",
      "happiness"
    ],
    "example": "To her dismay, the package she was expecting never arrived."
  },
  "disparage": {
    "word": "Disparage",
    "pos": "verb",
    "simpleDefinition": "To speak about someone or something in a way that shows you do not respect them or that makes them seem less important.",
    "banglaMeaning": "কাউকে ছোট / তুজ্ঞ করা / নিন্দা করা / অপবাদ দেয়া",
    "synonyms": [
      "belittle",
      "demean",
      "deprecate",
      "decry"
    ],
    "antonyms": [
      "praise",
      "commend",
      "laud"
    ],
    "example": "It's unfair to disparage someone's efforts without understanding the challenges they faced."
  },
  "disparate": {
    "word": "Disparate",
    "pos": "adjective",
    "simpleDefinition": "Essentially different in kind; not allowing comparison",
    "banglaMeaning": "অসদৃশ / ভিন্ন প্রকৃতির",
    "synonyms": [
      "Different",
      "Diverse",
      "Dissimilar"
    ],
    "antonyms": [
      "Similar",
      "Alike",
      "Comparable"
    ],
    "example": "The team had disparate views on the new policy."
  },
  "disparity": {
    "word": "Disparity",
    "pos": "noun",
    "simpleDefinition": "A great difference between two or more things, especially an unfair difference.",
    "banglaMeaning": "অসাম্য, বৈষম্য, পার্থক্য",
    "synonyms": [
      "inequality",
      "imbalance",
      "discrepancy",
      "divergence"
    ],
    "antonyms": [
      "equality",
      "similarity",
      "parity"
    ],
    "example": "The disparity in wealth between the rich and the poor continues to grow."
  },
  "dispatch": {
    "word": "Dispatch",
    "pos": "verb",
    "simpleDefinition": "To send someone or something quickly to a particular place for a specific purpose.",
    "banglaMeaning": "কারো উদ্দেশ্যে কোন কিছু পাঠানো",
    "synonyms": [
      "send",
      "transmit",
      "forward",
      "expedite"
    ],
    "antonyms": [
      "receive",
      "retain",
      "withhold"
    ],
    "example": "The emergency services were dispatched to the scene of the accident immediately."
  },
  "disperse": {
    "word": "Disperse",
    "pos": "verb",
    "simpleDefinition": "To spread out over a wide area, or to cause something to spread out.",
    "banglaMeaning": "ছত্রভঙ্গ",
    "synonyms": [
      "scatter",
      "spread",
      "diffuse",
      "dissipate"
    ],
    "antonyms": [
      "gather",
      "assemble",
      "collect"
    ],
    "example": "The police used tear gas to disperse the crowd of protesters."
  },
  "disputation": {
    "word": "Disputation",
    "pos": "noun",
    "simpleDefinition": "A formal argument or debate, especially one that is public or academic.",
    "banglaMeaning": "বিতর্ক",
    "synonyms": [
      "debate",
      "argument",
      "contention",
      "controversy"
    ],
    "antonyms": [
      "agreement",
      "harmony",
      "consensus"
    ],
    "example": "The scientific community engaged in a lengthy disputation over the new theory."
  },
  "dissipate": {
    "word": "Dissipate",
    "pos": "verb",
    "simpleDefinition": "To gradually disappear or cause something to disappear, or to waste money, time, or energy.",
    "banglaMeaning": "দূর করা / অপচয় করা",
    "synonyms": [
      "vanish",
      "scatter",
      "squander",
      "waste"
    ],
    "antonyms": [
      "accumulate",
      "gather",
      "conserve"
    ],
    "example": "The morning fog began to dissipate as the sun rose higher."
  },
  "distasteful": {
    "word": "Distasteful",
    "pos": "adjective",
    "simpleDefinition": "Unpleasant or offensive, causing a feeling of dislike or disapproval.",
    "banglaMeaning": "অপছন্দনীয়",
    "synonyms": [
      "unpleasant",
      "offensive",
      "objectionable",
      "disagreeable"
    ],
    "antonyms": [
      "pleasant",
      "agreeable",
      "delightful"
    ],
    "example": "Many found his comments about the situation to be quite distasteful."
  },
  "distract": {
    "word": "Distract",
    "pos": "verb",
    "simpleDefinition": "To take someone's attention away from what they are doing or should be doing.",
    "banglaMeaning": "বিভ্রান্ত করা",
    "synonyms": [
      "divert",
      "sidetrack",
      "preoccupy",
      "disturb"
    ],
    "antonyms": [
      "focus",
      "concentrate",
      "engage"
    ],
    "example": "Loud music can easily distract me when I'm trying to study."
  },
  "distraught": {
    "word": "Distraught",
    "pos": "adjective",
    "simpleDefinition": "So upset and worried that you cannot think clearly or behave normally.",
    "banglaMeaning": "অত্যধিক বিমর্ষ",
    "synonyms": [
      "agitated",
      "distressed",
      "frantic",
      "overwhelmed"
    ],
    "antonyms": [
      "calm",
      "composed",
      "serene"
    ],
    "example": "She was distraught after losing her pet and couldn't stop crying."
  },
  "divergence": {
    "word": "Divergence",
    "pos": "noun",
    "simpleDefinition": "The process or fact of separating and going in different directions, or of becoming different.",
    "banglaMeaning": "অপসরণ, বিচ্যুতি, কেন্দ্র থেকে দূরে সরে যাওয়া, মতপার্থক্য",
    "synonyms": [
      "separation",
      "deviation",
      "difference",
      "split"
    ],
    "antonyms": [
      "convergence",
      "agreement",
      "similarity"
    ],
    "example": "There was a clear divergence of opinion among the committee members on the new policy."
  },
  "diversion": {
    "word": "Diversion",
    "pos": "noun",
    "simpleDefinition": "The act of changing the direction or use of something, or something that takes your attention away from serious matters.",
    "banglaMeaning": "গতিপরিবর্তন / অপসারণ",
    "synonyms": [
      "detour",
      "distraction",
      "entertainment",
      "recreation"
    ],
    "antonyms": [
      "focus",
      "directness",
      "concentration"
    ],
    "example": "The road closure caused a diversion, making our journey longer."
  },
  "divine": {
    "word": "Divine",
    "pos": "adjective",
    "simpleDefinition": "Relating to or coming from God or a god, or extremely good or pleasing.",
    "banglaMeaning": "ঈশ্বরীয়",
    "synonyms": [
      "heavenly",
      "sacred",
      "holy",
      "sublime"
    ],
    "antonyms": [
      "earthly",
      "human",
      "profane"
    ],
    "example": "Many ancient cultures believed in the divine power of nature."
  },
  "divulge": {
    "word": "Divulge",
    "pos": "verb",
    "simpleDefinition": "To make private or sensitive information known to others",
    "banglaMeaning": "প্রকাশ করা / ফাঁস করা",
    "synonyms": [
      "Reveal",
      "Disclose",
      "Expose"
    ],
    "antonyms": [
      "Conceal",
      "Hide",
      "Suppress"
    ],
    "example": "The journalist refused to divulge his source."
  },
  "docile": {
    "word": "Docile",
    "pos": "adjective",
    "simpleDefinition": "Ready to accept control or instruction; submissive and gentle",
    "banglaMeaning": "অনুগত / শান্ত / বাধ্য / ভদ্র",
    "synonyms": [
      "Obedient",
      "Submissive",
      "Compliant"
    ],
    "antonyms": [
      "Rebellious",
      "Stubborn",
      "Disobedient"
    ],
    "example": "The docile puppy followed every command."
  },
  "doctrine": {
    "word": "Doctrine",
    "pos": "noun",
    "simpleDefinition": "A belief or set of beliefs held and taught by a church, political party, or other group.",
    "banglaMeaning": "মতবাদ",
    "synonyms": [
      "creed",
      "dogma",
      "principle",
      "tenet"
    ],
    "antonyms": [
      "heresy",
      "disbelief",
      "doubt"
    ],
    "example": "The political party's doctrine emphasized individual liberty and free markets."
  },
  "dotage": {
    "word": "Dotage",
    "pos": "noun",
    "simpleDefinition": "The period of life when a person is old and has become weak and confused.",
    "banglaMeaning": "ভীমরতি",
    "synonyms": [
      "old age",
      "senility",
      "decline",
      "feebleness"
    ],
    "antonyms": [
      "youth",
      "prime",
      "vigor"
    ],
    "example": "In his dotage, he often forgot where he had put his keys."
  },
  "drowsiness": {
    "word": "Drowsiness",
    "pos": "noun",
    "simpleDefinition": "A state of feeling sleepy and not fully awake.",
    "banglaMeaning": "আলস্য",
    "synonyms": [
      "sleepiness",
      "lethargy",
      "sluggishness",
      "somnolence"
    ],
    "antonyms": [
      "alertness",
      "wakefulness",
      "vigor"
    ],
    "example": "The medication caused a feeling of drowsiness, so she avoided driving."
  },
  "dubious": {
    "word": "Dubious",
    "pos": "adjective",
    "simpleDefinition": "Hesitating or doubting; not to be relied upon",
    "banglaMeaning": "সন্দেহজনক / অনিশ্চিত",
    "synonyms": [
      "Doubtful",
      "Uncertain",
      "Suspicious"
    ],
    "antonyms": [
      "Certain",
      "Clear",
      "Reliable"
    ],
    "example": "The witness gave a dubious account of the incident."
  },
  "dubiousness": {
    "word": "Dubiousness",
    "pos": "noun",
    "simpleDefinition": "The state of being doubtful or questionable, or not entirely trustworthy.",
    "banglaMeaning": "অনিশ্চয়তা",
    "synonyms": [
      "doubt",
      "uncertainty",
      "skepticism",
      "unreliability"
    ],
    "antonyms": [
      "certainty",
      "reliability",
      "trustworthiness"
    ],
    "example": "The dubiousness of his claims made the jury question his testimony."
  },
  "duffer": {
    "word": "Duffer",
    "pos": "noun",
    "simpleDefinition": "A person who is clumsy, incompetent, or stupid, especially at a particular activity.",
    "banglaMeaning": "নির্বোধ লোক",
    "synonyms": [
      "bungler",
      "amateur",
      "incompetent",
      "simpleton"
    ],
    "antonyms": [
      "expert",
      "master",
      "prodigy"
    ],
    "example": "He called himself a duffer at golf, always hitting the ball into the rough."
  },
  "dullard": {
    "word": "Dullard",
    "pos": "noun",
    "simpleDefinition": "A slow or stupid person.",
    "banglaMeaning": "বোকা জাতীয়",
    "synonyms": [
      "simpleton",
      "blockhead",
      "dolt",
      "dunce"
    ],
    "antonyms": [
      "genius",
      "intellectual",
      "prodigy"
    ],
    "example": "The teacher patiently explained the concept again for the dullard in the back row."
  },
  "duplicity": {
    "word": "Duplicity",
    "pos": "noun",
    "simpleDefinition": "Deceitfulness, double-dealing, and bad faith",
    "banglaMeaning": "কপটতা / দ্বিচারিতা",
    "synonyms": [
      "Deception",
      "Dishonesty",
      "Treachery"
    ],
    "antonyms": [
      "Honesty",
      "Sincerity",
      "Transparency"
    ],
    "example": "His duplicity was exposed when both parties compared notes."
  },
  "easygoing": {
    "word": "Easygoing",
    "pos": "adjective",
    "simpleDefinition": "Relaxed, tolerant, and not easily worried, annoyed, or upset.",
    "banglaMeaning": "বাধ্য / সহজে মেনে নেয়া",
    "synonyms": [
      "relaxed",
      "laid-back",
      "calm",
      "agreeable"
    ],
    "antonyms": [
      "uptight",
      "tense",
      "demanding"
    ],
    "example": "Her easygoing nature made her a popular friend and colleague."
  },
  "eat drink and be merry": {
    "word": "Eat drink and be merry",
    "pos": "idiom",
    "simpleDefinition": "To enjoy oneself fully, especially without worrying about the future.",
    "banglaMeaning": "খাওয়া-দাওয়া ও ফূর্তি করা",
    "synonyms": [
      "live it up",
      "celebrate",
      "revel",
      "indulge"
    ],
    "antonyms": [
      "worry",
      "abstain",
      "economize"
    ],
    "example": "After finishing the difficult project, they decided to eat, drink, and be merry for the evening."
  },
  "eat into vitals": {
    "word": "Eat into vitals",
    "pos": "idiom",
    "simpleDefinition": "To gradually destroy or weaken something essential, or to cause deep and lasting damage.",
    "banglaMeaning": "ছিন্ন করা / ব্যাঘাত করা",
    "synonyms": [
      "erode",
      "undermine",
      "corrode",
      "debilitate"
    ],
    "antonyms": [
      "strengthen",
      "fortify",
      "build up"
    ],
    "example": "The constant stress began to eat into his vitals, affecting his health."
  },
  "eccentric": {
    "word": "Eccentric",
    "pos": "adjective",
    "simpleDefinition": "Unconventional and slightly strange in habits or personality",
    "banglaMeaning": "খামখেয়ালী / অদ্ভুত স্বভাবের",
    "synonyms": [
      "Odd",
      "Peculiar",
      "Unconventional"
    ],
    "antonyms": [
      "Conventional",
      "Normal",
      "Ordinary"
    ],
    "example": "The eccentric professor came to class in a clown costume."
  },
  "efface": {
    "word": "Efface",
    "pos": "verb",
    "simpleDefinition": "To erase, wipe out, or eliminate completely",
    "banglaMeaning": "মুছে ফেলা / বিলোপ করা",
    "synonyms": [
      "Erase",
      "Obliterate",
      "Delete"
    ],
    "antonyms": [
      "Create",
      "Preserve",
      "Retain"
    ],
    "example": "Years of rain had effaced the inscription on the stone."
  },
  "effeminacy": {
    "word": "Effeminacy",
    "pos": "noun",
    "simpleDefinition": "The quality in a man of having characteristics that are traditionally considered feminine.",
    "banglaMeaning": "মেয়েলী স্বভাব",
    "synonyms": [
      "delicacy",
      "softness",
      "daintiness",
      "unmanliness"
    ],
    "antonyms": [
      "masculinity",
      "manliness",
      "virility"
    ],
    "example": "Some critics unfairly associated his artistic style with effeminacy."
  },
  "effervescent": {
    "word": "Effervescent",
    "pos": "adjective",
    "simpleDefinition": "Vivacious, cheerful, and full of lively energy",
    "banglaMeaning": "উচ্ছ্বল / প্রাণবন্ত",
    "synonyms": [
      "Lively",
      "Vivacious",
      "Dull"
    ],
    "antonyms": [
      "Flat",
      "Lifeless"
    ],
    "example": "Her effervescent personality brightened Bank Recruitment Exam (Janata"
  },
  "effusive": {
    "word": "Effusive",
    "pos": "adjective",
    "simpleDefinition": "Expressing feelings of gratitude, pleasure, or approval in an unrestrained or heartfelt manner.",
    "banglaMeaning": "উচ্ছ্বাসপ্রবণ",
    "synonyms": [
      "gushing",
      "enthusiastic",
      "exuberant",
      "demonstrative"
    ],
    "antonyms": [
      "reserved",
      "restrained",
      "subdued"
    ],
    "example": "She gave an effusive thank-you speech after receiving the award."
  },
  "egoistic": {
    "word": "Egoistic",
    "pos": "adjective",
    "simpleDefinition": "Excessively conceited or self-centered; concerned only with one's own interests.",
    "banglaMeaning": "স্বার্থপর",
    "synonyms": [
      "selfish",
      "self-centered",
      "conceited",
      "narcissistic"
    ],
    "antonyms": [
      "altruistic",
      "selfless",
      "humble"
    ],
    "example": "His egoistic attitude made it difficult for him to work well in a team."
  },
  "egregious": {
    "word": "Egregious",
    "pos": "adjective",
    "simpleDefinition": "Outstandingly and shockingly bad or offensive",
    "banglaMeaning": "অত্যন্ত জঘন্য / চরম খারাপ",
    "synonyms": [
      "Outrageous",
      "Flagrant",
      "Glaring"
    ],
    "antonyms": [
      "Minor",
      "Trivial",
      "Slight"
    ],
    "example": "The corruption was an egregious abuse of power."
  },
  "elated": {
    "word": "Elated",
    "pos": "adjective",
    "simpleDefinition": "Extremely happy and excited, often because of a success or achievement.",
    "banglaMeaning": "অত্যন্ত আনন্দত",
    "synonyms": [
      "overjoyed",
      "thrilled",
      "ecstatic",
      "jubilant"
    ],
    "antonyms": [
      "depressed",
      "dejected",
      "miserable"
    ],
    "example": "She was absolutely elated when she heard the news of her promotion."
  },
  "elective": {
    "word": "Elective",
    "pos": "adjective",
    "simpleDefinition": "chosen by election or by choice; not required.",
    "banglaMeaning": "নির্বাচক",
    "synonyms": [
      "optional",
      "discretionary",
      "voluntary",
      "non-compulsory"
    ],
    "antonyms": [
      "compulsory",
      "mandatory",
      "required"
    ],
    "example": "Students can choose two elective courses in their final year."
  },
  "electorate": {
    "word": "Electorate",
    "pos": "noun",
    "simpleDefinition": "all the people in a country or area who are allowed to vote in an election.",
    "banglaMeaning": "নির্বাচকমধ্নলী",
    "synonyms": [
      "voters",
      "constituents",
      "body of voters"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The electorate will decide the next leader in the upcoming election."
  },
  "electrify": {
    "word": "Electrify",
    "pos": "verb",
    "simpleDefinition": "to make someone feel very excited or shocked; to supply with electricity.",
    "banglaMeaning": "উত্তেজিত করা",
    "synonyms": [
      "excite",
      "thrill",
      "invigorate",
      "charge"
    ],
    "antonyms": [
      "bore",
      "dull",
      "calm"
    ],
    "example": "The band's energetic performance truly electrified the crowd."
  },
  "elegy": {
    "word": "Elegy",
    "pos": "noun",
    "simpleDefinition": "a sad poem or song, often written to express sorrow for someone who has died.",
    "banglaMeaning": "শোকগাথা / বিষাদসংগীত",
    "synonyms": [
      "lament",
      "dirge",
      "threnody",
      "requiem"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The poet wrote a beautiful elegy for his departed friend."
  },
  "elevate": {
    "word": "Elevate",
    "pos": "verb",
    "simpleDefinition": "to raise something or someone to a higher position or level; to improve the quality or status of something.",
    "banglaMeaning": "উত্তোলন করা / উন্নীত করা",
    "synonyms": [
      "raise",
      "lift",
      "hoist",
      "promote"
    ],
    "antonyms": [
      "lower",
      "depress",
      "demote"
    ],
    "example": "The company decided to elevate her to a managerial position."
  },
  "elocution": {
    "word": "Elocution",
    "pos": "noun",
    "simpleDefinition": "the skill of clear and expressive speech, especially in public speaking.",
    "banglaMeaning": "বাচনভঙ্গি",
    "synonyms": [
      "articulation",
      "diction",
      "rhetoric",
      "oratory"
    ],
    "antonyms": [
      "stammering",
      "mumbling",
      "inarticulateness"
    ],
    "example": "Her elocution was so perfect that every word she spoke was clear and impactful."
  },
  "eloquent": {
    "word": "Eloquent",
    "pos": "adjective",
    "simpleDefinition": "Expressing ideas clearly and persuasively",
    "banglaMeaning": "বাগ্মী / প্রাঞ্জলভাষী",
    "synonyms": [
      "Articulate",
      "Fluent",
      "Expressive"
    ],
    "antonyms": [
      "Inarticulate",
      "Tongue-tied",
      "Mumbling"
    ],
    "example": "The eloquent speaker moved the audience to tears."
  },
  "elusive": {
    "word": "Elusive",
    "pos": "adjective",
    "simpleDefinition": "Difficult to find, catch, remember, or grasp",
    "banglaMeaning": "অধরা / সহজে ধরা দেয় না এমন / এড়িয়ে যায় এমন বা ধরা যায়না এমন",
    "synonyms": [
      "Evasive",
      "Slippery",
      "Fleeting"
    ],
    "antonyms": [
      "Clear",
      "Obvious",
      "Accessible"
    ],
    "example": "The criminal remained elusive for years before capture."
  },
  "elusiveness": {
    "word": "Elusiveness",
    "pos": "noun",
    "simpleDefinition": "the quality of being difficult to find, catch, or achieve; the state of being hard to understand or remember.",
    "banglaMeaning": "বুঝতে বা ষ্মরণ করতে কষ্টকর এমন",
    "synonyms": [
      "evasiveness",
      "slipperiness",
      "intangibility",
      "mystery"
    ],
    "antonyms": [
      "clarity",
      "tangibility",
      "accessibility"
    ],
    "example": "The elusiveness of the suspect made the police investigation very challenging."
  },
  "embezzlement": {
    "word": "Embezzlement",
    "pos": "noun",
    "simpleDefinition": "the act of secretly taking money that belongs to an organization or company where you work.",
    "banglaMeaning": "অর্থ আত্মসাৎ",
    "synonyms": [
      "fraud",
      "defalcation",
      "misappropriation",
      "theft"
    ],
    "antonyms": [
      "restitution",
      "repayment",
      "honesty"
    ],
    "example": "He was arrested for embezzlement after stealing funds from the charity."
  },
  "emigrant": {
    "word": "Emigrant",
    "pos": "noun",
    "simpleDefinition": "a person who leaves their own country to live permanently in another.",
    "banglaMeaning": "দেশান্তরী",
    "synonyms": [
      "expatriate",
      "migrant",
      "defector",
      "settler"
    ],
    "antonyms": [
      "immigrant",
      "native"
    ],
    "example": "Many emigrants sent money back to their families in their home country."
  },
  "eminent": {
    "word": "Eminent",
    "pos": "adjective",
    "simpleDefinition": "Famous, respected, and distinguished in a particular sphere",
    "banglaMeaning": "বিশিষ্ট / খ্যাতনামা",
    "synonyms": [
      "Distinguished",
      "Famous",
      "Notable"
    ],
    "antonyms": [
      "Unknown",
      "Obscure",
      "Ordinary"
    ],
    "example": "An eminent scientist spoke at the seminar."
  },
  "emphatic": {
    "word": "Emphatic",
    "pos": "adjective",
    "simpleDefinition": "Expressing something forcibly and clearly",
    "banglaMeaning": "জোরালো / দ্ব্যর্থহীন",
    "synonyms": [
      "Forceful",
      "Definite",
      "Insistent"
    ],
    "antonyms": [
      "Weak",
      "Uncertain",
      "Vague"
    ],
    "example": "She gave an emphatic denial of the allegations."
  },
  "empirical": {
    "word": "Empirical",
    "pos": "adjective",
    "simpleDefinition": "based on, concerned with, or verifiable by observation or experience rather than theory or pure logic.",
    "banglaMeaning": "গবেষণামূলক",
    "synonyms": [
      "experimental",
      "observational",
      "practical",
      "factual"
    ],
    "antonyms": [
      "theoretical",
      "hypothetical",
      "unproven"
    ],
    "example": "The scientist relied on empirical data to support her conclusions."
  },
  "emulation": {
    "word": "Emulation",
    "pos": "noun",
    "simpleDefinition": "the act of trying to be like someone or something else, often because you admire them.",
    "banglaMeaning": "অনুকরণীয়",
    "synonyms": [
      "imitation",
      "copying",
      "rivalry",
      "mirroring"
    ],
    "antonyms": [
      "originality",
      "uniqueness",
      "divergence"
    ],
    "example": "Younger athletes often strive for emulation of their sports heroes."
  },
  "enamoured": {
    "word": "Enamoured",
    "pos": "adjective",
    "simpleDefinition": "filled with a feeling of love for someone or a strong liking for something.",
    "banglaMeaning": "প্রেমমুগ্ধ",
    "synonyms": [
      "captivated",
      "charmed",
      "smitten",
      "infatuated"
    ],
    "antonyms": [
      "repulsed",
      "disgusted",
      "indifferent"
    ],
    "example": "He became completely enamoured with the beautiful scenery of the mountains."
  },
  "encomium": {
    "word": "Encomium",
    "pos": "noun",
    "simpleDefinition": "a speech or piece of writing that praises someone or something highly.",
    "banglaMeaning": "উচ্চ প্রশংসা",
    "synonyms": [
      "praise",
      "tribute",
      "eulogy",
      "commendation"
    ],
    "antonyms": [
      "criticism",
      "denunciation",
      "condemnation"
    ],
    "example": "The mayor delivered an encomium for the retiring police chief."
  },
  "encumber": {
    "word": "Encumber",
    "pos": "verb",
    "simpleDefinition": "to make it difficult for someone to move or do something; to burden or hinder.",
    "banglaMeaning": "পথরোধ করা",
    "synonyms": [
      "burden",
      "hinder",
      "impede",
      "obstruct"
    ],
    "antonyms": [
      "assist",
      "facilitate",
      "lighten"
    ],
    "example": "The heavy backpack encumbered her movements as she climbed the steep hill."
  },
  "encyclopedia": {
    "word": "Encyclopedia",
    "pos": "noun",
    "simpleDefinition": "a book or set of books giving information on many subjects or on many aspects of one subject, typically arranged alphabetically.",
    "banglaMeaning": "বিশ্বকোষ",
    "synonyms": [
      "compendium",
      "lexicon",
      "thesaurus",
      "reference work"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "She looked up the definition of the word in the encyclopedia."
  },
  "endurable": {
    "word": "Endurable",
    "pos": "adjective",
    "simpleDefinition": "able to be tolerated or borne; capable of being sustained.",
    "banglaMeaning": "সহনীয় / টেকসই",
    "synonyms": [
      "tolerable",
      "bearable",
      "sufferable",
      "sustainable"
    ],
    "antonyms": [
      "unbearable",
      "intolerable",
      "insufferable"
    ],
    "example": "The pain was endurable, but she still wished it would go away."
  },
  "enduring": {
    "word": "Enduring",
    "pos": "adjective",
    "simpleDefinition": "lasting over a long period of time; continuing to exist.",
    "banglaMeaning": "স্থায়ী",
    "synonyms": [
      "lasting",
      "permanent",
      "persistent",
      "durable"
    ],
    "antonyms": [
      "fleeting",
      "temporary",
      "transient"
    ],
    "example": "The novel's enduring popularity proves its timeless appeal."
  },
  "enervate": {
    "word": "Enervate",
    "pos": "verb",
    "simpleDefinition": "To cause someone to feel drained of energy or vitality; weaken",
    "banglaMeaning": "দুর্বল করা / শক্তিহীন করা",
    "synonyms": [
      "Weaken",
      "Exhaust",
      "Debilitate"
    ],
    "antonyms": [
      "Strengthen",
      "Energize",
      "Invigorate"
    ],
    "example": "The long illness enervated the old man completely."
  },
  "engross": {
    "word": "Engross",
    "pos": "verb",
    "simpleDefinition": "To absorb all the attention or interest of someone",
    "banglaMeaning": "মগ্ন থাকা / নিমগ্ন রাখা / সবসময় কাজে লেগে থাকা",
    "synonyms": [
      "ও   / ও Absorb",
      "Captivate",
      "Engage"
    ],
    "antonyms": [
      "Bore",
      "Distract",
      "Repel"
    ],
    "example": "The novel completely engrossed her for two days."
  },
  "enhance": {
    "word": "Enhance",
    "pos": "verb",
    "simpleDefinition": "to improve the quality, value, or extent of something.",
    "banglaMeaning": "বৃদ্ধি করা",
    "synonyms": [
      "improve",
      "boost",
      "augment",
      "elevate"
    ],
    "antonyms": [
      "diminish",
      "reduce",
      "worsen"
    ],
    "example": "Good lighting can greatly enhance the atmosphere of a room."
  },
  "enigmatic": {
    "word": "Enigmatic",
    "pos": "adjective",
    "simpleDefinition": "Difficult to interpret, understand, or explain; mysterious",
    "banglaMeaning": "রহস্যময় / বিভ্রান্তিকর / বিভ্রান্তিকর",
    "synonyms": [
      "Mysterious",
      "Puzzling",
      "Cryptic"
    ],
    "antonyms": [
      "Clear",
      "Obvious",
      "Straightforward"
    ],
    "example": "The Mona Lisa's smile is enigmatic and fascinating."
  },
  "enlarge": {
    "word": "Enlarge",
    "pos": "verb",
    "simpleDefinition": "to make something bigger or more extensive.",
    "banglaMeaning": "দীর্ঘায়িত করা",
    "synonyms": [
      "expand",
      "extend",
      "magnify",
      "broaden"
    ],
    "antonyms": [
      "shrink",
      "reduce",
      "contract"
    ],
    "example": "They decided to enlarge their house by adding another room."
  },
  "enormous": {
    "word": "Enormous",
    "pos": "adjective",
    "simpleDefinition": "very large in size, quantity, or extent.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "huge",
      "massive",
      "colossal",
      "gigantic"
    ],
    "antonyms": [
      "tiny",
      "small",
      "miniature"
    ],
    "example": "The company made an enormous profit last quarter."
  },
  "entertain": {
    "word": "Entertain",
    "pos": "verb",
    "simpleDefinition": "to provide amusement or enjoyment for someone; to host guests.",
    "banglaMeaning": "আপ্যায়ন",
    "synonyms": [
      "amuse",
      "delight",
      "host",
      "divert"
    ],
    "antonyms": [
      "bore",
      "displease",
      "neglect"
    ],
    "example": "They often entertain friends at their home on weekends."
  },
  "enthralling": {
    "word": "Enthralling",
    "pos": "adjective",
    "simpleDefinition": "Capturing and holding one's full attention; utterly fascinating and charming.",
    "banglaMeaning": "মুগ্ধকর",
    "synonyms": [
      "Fascinating",
      "Charming",
      "Captivating",
      "Mesmerizing"
    ],
    "antonyms": [
      "Boring",
      "Dull",
      "Tedious"
    ],
    "example": "The novelist gave an enthralling reading that kept the audience spellbound."
  },
  "entrepreneur": {
    "word": "Entrepreneur",
    "pos": "noun",
    "simpleDefinition": "a person who starts a business, taking on financial risks in the hope of profit.",
    "banglaMeaning": "উদ্যোক্তা",
    "synonyms": [
      "businessperson",
      "founder",
      "innovator",
      "capitalist"
    ],
    "antonyms": [
      "employee",
      "worker"
    ],
    "example": "She is a successful entrepreneur who launched several tech startups."
  },
  "enumerate": {
    "word": "Enumerate",
    "pos": "verb",
    "simpleDefinition": "To name, list, or mention things one by one",
    "banglaMeaning": "একে একে গণনা করা / তালিকাভুক্ত করা",
    "synonyms": [
      "List",
      "Count",
      "Specify"
    ],
    "antonyms": [
      "Ignore",
      "Omit",
      "Overlook"
    ],
    "example": "Please enumerate the reasons for your absence."
  },
  "enunciate": {
    "word": "Enunciate",
    "pos": "verb",
    "simpleDefinition": "to pronounce words clearly and distinctly; to express a theory or idea clearly.",
    "banglaMeaning": "উচ্চারণ করা",
    "synonyms": [
      "articulate",
      "pronounce",
      "vocalize",
      "express"
    ],
    "antonyms": [
      "mumble",
      "stammer",
      "slur"
    ],
    "example": "Please enunciate your words clearly so everyone can understand you."
  },
  "ephemeral": {
    "word": "Ephemeral",
    "pos": "adjective",
    "simpleDefinition": "Lasting for only a very short time; transient",
    "banglaMeaning": "ক্ষণস্থায়ী / অল্প সময়ের",
    "synonyms": [
      "Fleeting",
      "Short- lived",
      "Transitory"
    ],
    "antonyms": [
      "Permanent",
      "Eternal",
      "Lasting"
    ],
    "example": "Fame can be ephemeral in the world of social media."
  },
  "epicurean": {
    "word": "Epicurean",
    "pos": "adjective",
    "simpleDefinition": "devoted to the pursuit of sensual pleasure, especially in fine food and drink.",
    "banglaMeaning": "ইন্দয় সুখে বিশ্বাসী",
    "synonyms": [
      "hedonistic",
      "gourmet",
      "pleasure-seeking",
      "sybaritic"
    ],
    "antonyms": [
      "ascetic",
      "abstemious",
      "austere"
    ],
    "example": "He lived an epicurean lifestyle, always seeking out the finest culinary experiences."
  },
  "episodic": {
    "word": "Episodic",
    "pos": "adjective",
    "simpleDefinition": "Happening or appearing at irregular intervals; not continuous.",
    "banglaMeaning": "অনিয়মিত",
    "synonyms": [
      "intermittent",
      "sporadic",
      "occasional",
      "irregular"
    ],
    "antonyms": [
      "continuous",
      "constant",
      "regular"
    ],
    "example": "Her memory loss was episodic, meaning she would forget things sometimes but not always."
  },
  "epitaph": {
    "word": "Epitaph",
    "pos": "noun",
    "simpleDefinition": "A short text written on a tombstone or monument in memory of a deceased person.",
    "banglaMeaning": "সমাধিস্তশ্র লিপি",
    "synonyms": [
      "inscription",
      "memorial",
      "elegy",
      "commemoration"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The epitaph on the old soldier's grave read, 'A life well-lived, a duty well-done.'"
  },
  "epithet": {
    "word": "Epithet",
    "pos": "noun",
    "simpleDefinition": "A descriptive word or phrase expressing a quality or characteristic of the person or thing mentioned. It can be used positively or negatively.",
    "banglaMeaning": "ডাকনাম / উপাধি",
    "synonyms": [
      "appellation",
      "designation",
      "label",
      "nickname"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "'The Great' was an epithet often used to describe powerful rulers in history."
  },
  "epitome": {
    "word": "Epitome",
    "pos": "noun",
    "simpleDefinition": "A perfect example of a particular quality or type; a summary of a larger work.",
    "banglaMeaning": "সংক্ষিপ্ত",
    "synonyms": [
      "embodiment",
      "archetype",
      "essence",
      "model"
    ],
    "antonyms": [
      "expansion",
      "antithesis"
    ],
    "example": "With her kindness and intelligence, she was the epitome of a perfect leader."
  },
  "equanimity": {
    "word": "Equanimity",
    "pos": "noun",
    "simpleDefinition": "Calmness and composure, especially in a difficult situation.",
    "banglaMeaning": "মানসিক স্থিরতা, প্রশান্তি, ধীরস্থির ভাব",
    "synonyms": [
      "composure",
      "serenity",
      "tranquility",
      "poise"
    ],
    "antonyms": [
      "agitation",
      "anxiety",
      "panic"
    ],
    "example": "Despite the chaos around her, she maintained her equanimity and calmly solved the problem."
  },
  "equilibrate": {
    "word": "Equilibrate",
    "pos": "verb",
    "simpleDefinition": "To bring into or be in a state of balance.",
    "banglaMeaning": "ভারসাম্য",
    "synonyms": [
      "balance",
      "stabilize",
      "equalize",
      "poise"
    ],
    "antonyms": [
      "unbalance",
      "destabilize"
    ],
    "example": "The engineer worked to equilibrate the forces acting on the bridge to ensure its stability."
  },
  "equip": {
    "word": "Equip",
    "pos": "verb",
    "simpleDefinition": "To provide someone or something with the necessary items for a particular purpose.",
    "banglaMeaning": "প্রস্তুত করা / সজ্জিত করা",
    "synonyms": [
      "furnish",
      "supply",
      "outfit",
      "provide"
    ],
    "antonyms": [
      "strip",
      "disarm",
      "divest"
    ],
    "example": "Before the expedition, they needed to equip themselves with warm clothing and camping gear."
  },
  "equitable": {
    "word": "Equitable",
    "pos": "adjective",
    "simpleDefinition": "Fair and impartial; treating everyone equally.",
    "banglaMeaning": "ন্যায়সঙ্গত",
    "synonyms": [
      "fair",
      "just",
      "impartial",
      "unbiased"
    ],
    "antonyms": [
      "unfair",
      "biased",
      "unjust"
    ],
    "example": "The judge made an equitable decision, ensuring both parties felt heard and respected."
  },
  "equivocal": {
    "word": "Equivocal",
    "pos": "adjective",
    "simpleDefinition": "Open to more than one interpretation; deliberately ambiguous",
    "banglaMeaning": "দ্ব্যর্থক / অস্পষ্ট",
    "synonyms": [
      "Ambiguous",
      "Vague",
      "Unclear"
    ],
    "antonyms": [
      "Clear",
      "Definite",
      "Unambiguous"
    ],
    "example": "His equivocal statement left everyone confused."
  },
  "eradicate": {
    "word": "Eradicate",
    "pos": "verb",
    "simpleDefinition": "To destroy completely or put an end to something unwanted",
    "banglaMeaning": "সমূলে উৎপাটিত করা / দূর করা",
    "synonyms": [
      "Eliminate",
      "Abolish",
      "Exterminate"
    ],
    "antonyms": [
      "Create",
      "Establish",
      "Preserve"
    ],
    "example": "The government aims to eradicate poverty by 2030."
  },
  "errant": {
    "word": "Errant",
    "pos": "adjective",
    "simpleDefinition": "Straying from the proper course or standards; behaving wrongly.",
    "banglaMeaning": "ভুল পথে চালিত, বিপথগামী, নৈতিকতা বর্জিত",
    "synonyms": [
      "wandering",
      "straying",
      "wayward",
      "misbehaving"
    ],
    "antonyms": [
      "correct",
      "proper",
      "dutiful"
    ],
    "example": "The teacher disciplined the errant student for disrupting the class."
  },
  "erratic": {
    "word": "Erratic",
    "pos": "adjective",
    "simpleDefinition": "Not even or regular in pattern or movement; unpredictable",
    "banglaMeaning": "অনিয়মিত / খেয়ালী / খামখেয়ালী",
    "synonyms": [
      "Irregular",
      "Unpredictable",
      "Regular"
    ],
    "antonyms": [
      "Consistent",
      "The"
    ],
    "example": "patient had erratic behaviour due NTRCA Teacher Recruitment"
  },
  "escape": {
    "word": "Escape",
    "pos": "verb",
    "simpleDefinition": "To get away from a place or a dangerous or undesirable situation.",
    "banglaMeaning": "পালিয়ে যাওয়া",
    "synonyms": [
      "flee",
      "evade",
      "abscond",
      "break free"
    ],
    "antonyms": [
      "capture",
      "confront",
      "remain"
    ],
    "example": "The deer managed to escape the hunter by running deep into the forest."
  },
  "espy": {
    "word": "Espy",
    "pos": "verb",
    "simpleDefinition": "To catch sight of something, often something distant or hidden.",
    "banglaMeaning": "পর্যবেক্ষণ করা",
    "synonyms": [
      "discern",
      "spot",
      "glimpse",
      "perceive"
    ],
    "antonyms": [
      "overlook",
      "miss",
      "ignore"
    ],
    "example": "From the top of the hill, we could espy the distant city lights twinkling in the darkness."
  },
  "esteem": {
    "word": "Esteem",
    "pos": "verb",
    "simpleDefinition": "To regard someone with respect and admiration.",
    "banglaMeaning": "সম্মান করা",
    "synonyms": [
      "respect",
      "admire",
      "revere",
      "value"
    ],
    "antonyms": [
      "disdain",
      "scorn",
      "despise"
    ],
    "example": "We esteem our elders for their wisdom and experience."
  },
  "estimate": {
    "word": "Estimate",
    "pos": "verb",
    "simpleDefinition": "To roughly calculate or judge the value, number, quantity, or extent of something.",
    "banglaMeaning": "হিসাব",
    "synonyms": [
      "calculate",
      "approximate",
      "gauge",
      "assess"
    ],
    "antonyms": [
      "pinpoint",
      "determine"
    ],
    "example": "It's difficult to estimate the exact cost of the project without more detailed plans."
  },
  "eternal": {
    "word": "Eternal",
    "pos": "adjective",
    "simpleDefinition": "Lasting or existing forever; without end or beginning.",
    "banglaMeaning": "চিরন্তন",
    "synonyms": [
      "everlasting",
      "perpetual",
      "timeless",
      "unending"
    ],
    "antonyms": [
      "temporary",
      "fleeting",
      "transient"
    ],
    "example": "Many cultures believe in the concept of an eternal soul that lives on after death."
  },
  "eulogistic": {
    "word": "Eulogistic",
    "pos": "adjective",
    "simpleDefinition": "Expressing high praise or commendation, often in a formal speech or writing.",
    "banglaMeaning": "উচ্চ প্রশংসাযোগ্য",
    "synonyms": [
      "laudatory",
      "complimentary",
      "praising",
      "adulatory"
    ],
    "antonyms": [
      "critical",
      "condemnatory",
      "disparaging"
    ],
    "example": "The eulogistic speech at the retirement party highlighted all of her achievements and contributions."
  },
  "euphonious": {
    "word": "Euphonious",
    "pos": "adjective",
    "simpleDefinition": "Pleasing or sweet to the ear; having a pleasant sound.",
    "banglaMeaning": "সুমধুর",
    "synonyms": [
      "melodious",
      "harmonious",
      "dulcet",
      "musical"
    ],
    "antonyms": [
      "cacophonous",
      "harsh",
      "discordant"
    ],
    "example": "The poet chose euphonious words to create a beautiful and flowing verse."
  },
  "evaluate": {
    "word": "Evaluate",
    "pos": "verb",
    "simpleDefinition": "To assess the value, quality, importance, or condition of something.",
    "banglaMeaning": "মূল্যায়ন করা",
    "synonyms": [
      "assess",
      "appraise",
      "judge",
      "gauge"
    ],
    "antonyms": [
      "ignore",
      "neglect",
      "disregard"
    ],
    "example": "The committee will evaluate all the proposals before making a final decision."
  },
  "evanescent": {
    "word": "Evanescent",
    "pos": "adjective",
    "simpleDefinition": "Soon passing out of sight, memory, or existence; quickly fading or disappearing.",
    "banglaMeaning": "ক্ষনস্থায়ী",
    "synonyms": [
      "fleeting",
      "transient",
      "ephemeral",
      "momentary"
    ],
    "antonyms": [
      "permanent",
      "lasting",
      "enduring"
    ],
    "example": "The beauty of the sunset was evanescent, fading quickly as night approached."
  },
  "evasion": {
    "word": "Evasion",
    "pos": "noun",
    "simpleDefinition": "The act of avoiding something, especially something unpleasant or difficult.",
    "banglaMeaning": "এড়িয়ে যাওয়া",
    "synonyms": [
      "avoidance",
      "dodging",
      "circumvention",
      "elusion"
    ],
    "antonyms": [
      "confrontation",
      "directness",
      "honesty"
    ],
    "example": "His constant evasion of the question made it clear he was hiding something."
  },
  "evasive": {
    "word": "Evasive",
    "pos": "adjective",
    "simpleDefinition": "Tending to avoid direct answers or commitment",
    "banglaMeaning": "এড়িয়ে যায় এমন / কৌশলী / এড়িয়ে যায় এমন বা ধরা যায়না এমন",
    "synonyms": [
      "ও Elusive",
      "Shifty",
      "Deceptive"
    ],
    "antonyms": [
      "Direct",
      "Honest",
      "Straightforward"
    ],
    "example": "The suspect gave evasive answers to every question."
  },
  "evenhanded": {
    "word": "Evenhanded",
    "pos": "adjective",
    "simpleDefinition": "Treating all rivals or disputants equally; fair and impartial.",
    "banglaMeaning": "নিরপেক্ষ",
    "synonyms": [
      "impartial",
      "fair",
      "unbiased",
      "objective"
    ],
    "antonyms": [
      "biased",
      "prejudiced",
      "unfair"
    ],
    "example": "The referee was praised for his evenhanded approach to the game, making calls fairly for both teams."
  },
  "evident": {
    "word": "Evident",
    "pos": "adjective",
    "simpleDefinition": "Clearly seen or understood; obvious.",
    "banglaMeaning": "স্পষ্ট",
    "synonyms": [
      "obvious",
      "apparent",
      "clear",
      "manifest"
    ],
    "antonyms": [
      "hidden",
      "obscure",
      "unclear"
    ],
    "example": "It was evident from her smile that she was happy with the news."
  },
  "exacerbate": {
    "word": "Exacerbate",
    "pos": "verb",
    "simpleDefinition": "To make a problem, pain, or bad situation worse",
    "banglaMeaning": "আরও শোচনীয় করা / তিক্ততর করা / শোচনীয় হওয়া",
    "synonyms": [
      "/ Worsen",
      "Aggravate",
      "Intensify"
    ],
    "antonyms": [
      "Improve",
      "Alleviate",
      "Soothe"
    ],
    "example": "Poor infrastructure exacerbates the flooding problem."
  },
  "exaggeration": {
    "word": "Exaggeration",
    "pos": "noun",
    "simpleDefinition": "A statement that represents something as better or worse than it really is; overstating the truth.",
    "banglaMeaning": "বাড়িয়ে বলা",
    "synonyms": [
      "overstatement",
      "hyperbole",
      "embellishment",
      "magnification"
    ],
    "antonyms": [
      "understatement",
      "minimization",
      "truth"
    ],
    "example": "His story about catching a fish 'as big as a car' was a clear exaggeration."
  },
  "exaltation": {
    "word": "Exaltation",
    "pos": "noun",
    "simpleDefinition": "The action of elevating someone or something in rank, power, or character; a feeling of extreme happiness or joy.",
    "banglaMeaning": "পদমর্যাদায় উন্নতিসাধন",
    "synonyms": [
      "elevation",
      "glorification",
      "praise",
      "elation"
    ],
    "antonyms": [
      "demotion",
      "degradation",
      "humiliation"
    ],
    "example": "The team felt a sense of exaltation after winning the championship."
  },
  "excessive": {
    "word": "Excessive",
    "pos": "adjective",
    "simpleDefinition": "More than is necessary, normal, or desirable; too much.",
    "banglaMeaning": "অতিরিক্ত",
    "synonyms": [
      "immoderate",
      "undue",
      "extreme",
      "superfluous"
    ],
    "antonyms": [
      "insufficient",
      "moderate",
      "minimal"
    ],
    "example": "The doctor warned him that excessive sugar consumption could lead to health problems."
  },
  "exclusion": {
    "word": "Exclusion",
    "pos": "noun",
    "simpleDefinition": "The act of preventing someone or something from being included or participating.",
    "banglaMeaning": "বজর্ন",
    "synonyms": [
      "omission",
      "rejection",
      "barring",
      "prohibition"
    ],
    "antonyms": [
      "inclusion",
      "admission",
      "acceptance"
    ],
    "example": "The club's policy led to the exclusion of several potential members."
  },
  "exculpate": {
    "word": "Exculpate",
    "pos": "verb",
    "simpleDefinition": "To declare someone not guilty of wrongdoing; to clear from blame.",
    "banglaMeaning": "অভিযোগ হতে মুক্তি দেয়া",
    "synonyms": [
      "absolve",
      "acquit",
      "exonerate",
      "vindicate"
    ],
    "antonyms": [
      "incriminate",
      "accuse",
      "blame"
    ],
    "example": "The new evidence helped to exculpate the suspect from all charges."
  },
  "exempt": {
    "word": "Exempt",
    "pos": "verb",
    "simpleDefinition": "To free someone from an obligation or duty that others have.",
    "banglaMeaning": "রেহাই / অব্যাহতি দেয়া",
    "synonyms": [
      "excuse",
      "release",
      "absolve",
      "relieve"
    ],
    "antonyms": [
      "liable",
      "responsible",
      "subject"
    ],
    "example": "Students with perfect attendance were exempt from the final exam."
  },
  "exhausted": {
    "word": "Exhausted",
    "pos": "adjective",
    "simpleDefinition": "Extremely tired or completely used up.",
    "banglaMeaning": "নিঃশেষ হওয়া",
    "synonyms": [
      "weary",
      "fatigued",
      "drained",
      "spent"
    ],
    "antonyms": [
      "energetic",
      "refreshed",
      "invigorated"
    ],
    "example": "After running the marathon, the athlete felt completely exhausted."
  },
  "exhort": {
    "word": "Exhort",
    "pos": "verb",
    "simpleDefinition": "To strongly encourage or urge someone to do something.",
    "banglaMeaning": "উৎসাহিত করা / আহ্বান করা",
    "synonyms": [
      "urge",
      "advise",
      "encourage",
      "persuade"
    ],
    "antonyms": [
      "deter",
      "discourage",
      "dissuade"
    ],
    "example": "The coach exhorted his team to give their best effort in the second half."
  },
  "exigency": {
    "word": "Exigency",
    "pos": "noun",
    "simpleDefinition": "An urgent need or demand; a situation requiring immediate attention.",
    "banglaMeaning": "জরুরী প্রয়োজন",
    "synonyms": [
      "urgency",
      "crisis",
      "necessity",
      "demand"
    ],
    "antonyms": [
      "leisure",
      "comfort",
      "luxury"
    ],
    "example": "The exigency of the situation required immediate action from the emergency services."
  },
  "exonerate": {
    "word": "Exonerate",
    "pos": "verb",
    "simpleDefinition": "To officially absolve someone from blame or a criminal charge",
    "banglaMeaning": "অভিযোগমুক্ত করা / নির্দোষ ঘোষণা করা / অভিযোগ হতে মুক্তি দেয়া",
    "synonyms": [
      "Acquit",
      "Clear",
      "Absolve"
    ],
    "antonyms": [
      "Convict",
      "Blame",
      "Condemn"
    ],
    "example": "New evidence exonerated the wrongly convicted man."
  },
  "exorbitant": {
    "word": "Exorbitant",
    "pos": "adjective",
    "simpleDefinition": "(Of a price or amount) unreasonably high or excessive.",
    "banglaMeaning": "অতিরিক্ত",
    "synonyms": [
      "excessive",
      "extravagant",
      "steep",
      "unreasonable"
    ],
    "antonyms": [
      "reasonable",
      "cheap",
      "moderate"
    ],
    "example": "The hotel charged an exorbitant price for a single night's stay."
  },
  "expand": {
    "word": "Expand",
    "pos": "verb",
    "simpleDefinition": "To become or make larger or more extensive.",
    "banglaMeaning": "আয়তনে বৃদ্ধি করা / বিস্তৃত করা",
    "synonyms": [
      "enlarge",
      "broaden",
      "extend",
      "grow"
    ],
    "antonyms": [
      "contract",
      "shrink",
      "reduce"
    ],
    "example": "The company plans to expand its operations into new markets next year."
  },
  "expedient": {
    "word": "Expedient",
    "pos": "adjective",
    "simpleDefinition": "Convenient and practical, though possibly not completely fair or moral",
    "banglaMeaning": "সুবিধাজনক / সময়োপযোগী",
    "synonyms": [
      "Convenient",
      "Practical",
      "Advantageous"
    ],
    "antonyms": [
      "Impractical",
      "Inconvenient",
      "Useless"
    ],
    "example": "It was expedient to take the shorter route."
  },
  "expedite": {
    "word": "Expedite",
    "pos": "verb",
    "simpleDefinition": "To make an action or process happen much faster.",
    "banglaMeaning": "অগ্রগতি ত্বরান্বিত করা",
    "synonyms": [
      "Speed up",
      "Accelerate",
      "Hasten",
      "Quicken"
    ],
    "antonyms": [
      "Delay",
      "Hinder",
      "Impede"
    ],
    "example": "Paying an extra delivery fee will expedite the shipping of your package."
  },
  "expel": {
    "word": "Expel",
    "pos": "verb",
    "simpleDefinition": "To force someone to leave a place, especially a country or organization.",
    "banglaMeaning": "বহিষ্কার করা",
    "synonyms": [
      "eject",
      "banish",
      "oust",
      "remove"
    ],
    "antonyms": [
      "admit",
      "welcome",
      "include"
    ],
    "example": "The student was expelled from school for repeated violations of the rules."
  },
  "explicit": {
    "word": "Explicit",
    "pos": "adjective",
    "simpleDefinition": "Stated clearly and in full detail, leaving no room for confusion",
    "banglaMeaning": "স্পষ্ট / সুনির্দিষ্ট",
    "synonyms": [
      "Clear",
      "Direct",
      "Specific"
    ],
    "antonyms": [
      "Implicit",
      "Vague",
      "Indirect"
    ],
    "example": "The instructions must be explicit to avoid errors."
  },
  "exploration": {
    "word": "Exploration",
    "pos": "noun",
    "simpleDefinition": "The act of traveling in or through an unfamiliar area in order to learn about it.",
    "banglaMeaning": "অনুসন্ধান",
    "synonyms": [
      "discovery",
      "investigation",
      "survey",
      "reconnaissance"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The deep-sea exploration revealed many new species of marine life."
  },
  "expose": {
    "word": "Expose",
    "pos": "verb",
    "simpleDefinition": "To make something visible or known, especially something hidden or secret.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "reveal",
      "uncover",
      "disclose",
      "unveil"
    ],
    "antonyms": [
      "conceal",
      "hide",
      "cover"
    ],
    "example": "The journalist worked to expose the corruption within the local government."
  },
  "expound": {
    "word": "Expound",
    "pos": "verb",
    "simpleDefinition": "To explain something in detail, often a theory or idea.",
    "banglaMeaning": "ব্যাখ্যা করা",
    "synonyms": [
      "explain",
      "elaborate",
      "clarify",
      "interpret"
    ],
    "antonyms": [
      "condense",
      "simplify",
      "obscure"
    ],
    "example": "The professor took time to expound on the complex philosophical concepts."
  },
  "extempore": {
    "word": "Extempore",
    "pos": "adjective",
    "simpleDefinition": "Spoken or done without preparation; impromptu.",
    "banglaMeaning": "পূর্বপ্রস্তুতি ছাড়া দেওয়া বক্তব্য",
    "synonyms": [
      "impromptu",
      "spontaneous",
      "unrehearsed",
      "improvised"
    ],
    "antonyms": [
      "prepared",
      "rehearsed",
      "planned"
    ],
    "example": "She delivered an impressive extempore speech at the conference."
  },
  "extol": {
    "word": "Extol",
    "pos": "verb",
    "simpleDefinition": "To praise enthusiastically and highly",
    "banglaMeaning": "উচ্চ প্রশংসা করা",
    "synonyms": [
      "Praise",
      "Glorify",
      "Commend"
    ],
    "antonyms": [
      "Criticize",
      "Condemn",
      "Belittle"
    ],
    "example": "The principal extolled the students for their achievement."
  },
  "extradition": {
    "word": "Extradition",
    "pos": "noun",
    "simpleDefinition": "The official process by which a country sends a person accused or convicted of a crime to another country where the crime was committed.",
    "banglaMeaning": "আসামী হস্তান্তর",
    "synonyms": [
      "deportation",
      "rendition",
      "transfer"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The two nations signed a treaty to facilitate the extradition of criminals."
  },
  "extravagance": {
    "word": "Extravagance",
    "pos": "noun",
    "simpleDefinition": "The act of spending too much money or using too much of something; lack of restraint in spending.",
    "banglaMeaning": "অমিতব্যয়িতা / অপব্যয়",
    "synonyms": [
      "lavishness",
      "profligacy",
      "wastefulness",
      "excess"
    ],
    "antonyms": [
      "frugality",
      "economy",
      "moderation"
    ],
    "example": "Her extravagance led her to buy designer clothes she didn't need."
  },
  "extravagant": {
    "word": "Extravagant",
    "pos": "adjective",
    "simpleDefinition": "Spending money or resources freely and without moderation",
    "banglaMeaning": "অপব্যয়ী / অমিতব্যয়ী",
    "synonyms": [
      "Wasteful",
      "Lavish",
      "Excessive"
    ],
    "antonyms": [
      "Frugal",
      "Economical",
      "Modest"
    ],
    "example": "The extravagant wedding cost millions of taka."
  },
  "extreme": {
    "word": "Extreme",
    "pos": "adjective",
    "simpleDefinition": "Reaching the highest or greatest degree; very great.",
    "banglaMeaning": "চরম",
    "synonyms": [
      "intense",
      "severe",
      "radical",
      "utmost"
    ],
    "antonyms": [
      "moderate",
      "mild",
      "slight"
    ],
    "example": "The climbers faced extreme weather conditions on the mountain."
  },
  "exuberant": {
    "word": "Exuberant",
    "pos": "adjective",
    "simpleDefinition": "Filled with or characterized by lively energy and excitement",
    "banglaMeaning": "উচ্ছ্বসিত / প্রাণপ্রাচুর্যময়",
    "synonyms": [
      "Enthusiastic",
      "Lively",
      "Vibrant"
    ],
    "antonyms": [
      "Dull",
      "Depressed",
      "Gloomy"
    ],
    "example": "The exuberant crowd celebrated the team's victory."
  },
  "exult": {
    "word": "Exult",
    "pos": "verb",
    "simpleDefinition": "To show great pleasure and excitement, especially after a victory or success.",
    "banglaMeaning": "অত্যন্ত আনন্দত",
    "synonyms": [
      "rejoice",
      "triumph",
      "celebrate",
      "gloat"
    ],
    "antonyms": [
      "mourn",
      "lament",
      "grieve"
    ],
    "example": "The fans exulted as their team scored the winning goal in the final minute."
  },
  "fabricate": {
    "word": "Fabricate",
    "pos": "verb",
    "simpleDefinition": "To invent or produce something false in order to deceive; concoct",
    "banglaMeaning": "বানানো / মিথ্যা উদ্ভাবন করা",
    "synonyms": [
      "Invent",
      "Forge",
      "Concoct"
    ],
    "antonyms": [
      "Reveal",
      "Expose",
      "Disclose"
    ],
    "example": "He fabricated an alibi to escape punishment."
  },
  "facile": {
    "word": "Facile",
    "pos": "adjective",
    "simpleDefinition": "Appearing neat and comprehensive only by ignoring the true complexities of an issue; easily achieved but often superficial.",
    "banglaMeaning": "সাবলীল",
    "synonyms": [
      "simplistic",
      "superficial",
      "effortless",
      "glib"
    ],
    "antonyms": [
      "profound",
      "complex",
      "difficult"
    ],
    "example": "The politician offered a facile solution to a very complicated economic problem."
  },
  "facilitate": {
    "word": "Facilitate",
    "pos": "verb",
    "simpleDefinition": "To make an action or process easier or less difficult.",
    "banglaMeaning": "সহজতর",
    "synonyms": [
      "ease",
      "simplify",
      "assist",
      "enable"
    ],
    "antonyms": [
      "hinder",
      "impede",
      "obstruct"
    ],
    "example": "The new software will facilitate communication among team members."
  },
  "faculty": {
    "word": "Faculty",
    "pos": "noun",
    "simpleDefinition": "An inherent mental or physical power; also, a department or group of teachers in a university.",
    "banglaMeaning": "অনুষদ / র্কমদক্ষতা",
    "synonyms": [
      "ability",
      "capacity",
      "power",
      "department"
    ],
    "antonyms": [
      "inability",
      "incapacity"
    ],
    "example": "She has a remarkable faculty for learning new languages quickly."
  },
  "fade": {
    "word": "Fade",
    "pos": "verb",
    "simpleDefinition": "To gradually grow faint, disappear, or lose color or brightness.",
    "banglaMeaning": "বিবর্ণ হওয়া",
    "synonyms": [
      "diminish",
      "vanish",
      "wane",
      "bleach"
    ],
    "antonyms": [
      "brighten",
      "intensify",
      "appear"
    ],
    "example": "The old photographs had started to fade over time."
  },
  "famish": {
    "word": "Famish",
    "pos": "verb",
    "simpleDefinition": "To suffer severely from hunger; to starve.",
    "banglaMeaning": "প্রচধ্ন ক্ষুধায় মৃতপ্রায় হওয়া",
    "synonyms": [
      "starve",
      "hunger",
      "crave"
    ],
    "antonyms": [
      "satiate",
      "satisfy",
      "gorge"
    ],
    "example": "After a long hike, they were famished and eager for a meal."
  },
  "fanatical": {
    "word": "Fanatical",
    "pos": "adjective",
    "simpleDefinition": "Filled with excessive and single-minded religious or political zeal",
    "banglaMeaning": "উন্মাদ / ধর্মান্ধ / অতিগোঁড়া",
    "synonyms": [
      "Extreme",
      "Zealous",
      "Radical"
    ],
    "antonyms": [
      "Moderate",
      "Tolerant",
      "Balanced"
    ],
    "example": "Fanatical behaviour often leads to violence."
  },
  "fanciful schemes": {
    "word": "Fanciful schemes",
    "pos": "idiom",
    "simpleDefinition": "Plans or ideas that are imaginative and unrealistic, often impractical.",
    "banglaMeaning": "কাল্পনিক পরিকল্পনা",
    "synonyms": [
      "impractical plans",
      "utopian ideas",
      "wild dreams",
      "pipe dreams"
    ],
    "antonyms": [
      "realistic plans",
      "practical proposals"
    ],
    "example": "His business proposal was full of fanciful schemes that lacked any real financial backing."
  },
  "far-fetched": {
    "word": "Far-fetched",
    "pos": "adjective",
    "simpleDefinition": "Very unlikely to be true or difficult to believe; improbable.",
    "banglaMeaning": "অস্বাভাবিক, যা সহজে বিশ্বাসযোগ্য নয়",
    "synonyms": [
      "Unlikely",
      "Improbable",
      "Incredible",
      "Doubtful"
    ],
    "antonyms": [
      "Plausible",
      "Believable",
      "Convincing"
    ],
    "example": "His explanation for why he was late seemed completely far-fetched."
  },
  "fastidious": {
    "word": "Fastidious",
    "pos": "adjective",
    "simpleDefinition": "Very attentive to and concerned about accuracy and detail; hard to please",
    "banglaMeaning": "খুঁতখুঁতে / সহজে তুষ্ট হয় না এমন",
    "synonyms": [
      "Fussy",
      "Particular",
      "Meticulous"
    ],
    "antonyms": [
      "Careless",
      "Easygoing",
      "Tolerant"
    ],
    "example": "She was fastidious about keeping her house clean."
  },
  "fatalist": {
    "word": "Fatalist",
    "pos": "noun",
    "simpleDefinition": "A person who believes that all events are predetermined and therefore inevitable, and that human beings are powerless to change them.",
    "banglaMeaning": "অদৃষ্টবাদী",
    "synonyms": [
      "determinist",
      "predestinarian"
    ],
    "antonyms": [
      "free-will advocate",
      "voluntarist"
    ],
    "example": "As a fatalist, he accepted his misfortunes with a sense of resignation."
  },
  "fathom": {
    "word": "Fathom",
    "pos": "verb",
    "simpleDefinition": "To understand a difficult problem or a mysterious person after much thought.",
    "banglaMeaning": "গভীরতা নির্ণয় করা",
    "synonyms": [
      "comprehend",
      "grasp",
      "understand",
      "decipher"
    ],
    "antonyms": [
      "misunderstand",
      "confuse",
      "perplex"
    ],
    "example": "It was hard to fathom the true depth of her sadness."
  },
  "fawn": {
    "word": "Fawn",
    "pos": "verb",
    "simpleDefinition": "To give excessive flattery, attention, or affection to gain an advantage.",
    "banglaMeaning": "তোষামোদ করা / তৈলমর্দন করা",
    "synonyms": [
      "Flatter",
      "Grovel",
      "Cower",
      "Court"
    ],
    "antonyms": [
      "Scorn",
      "Disdain",
      "Defy"
    ],
    "example": "Some employees fawn over the manager hoping for a quick promotion."
  },
  "feeble": {
    "word": "Feeble",
    "pos": "adjective",
    "simpleDefinition": "Lacking physical strength, especially as a result of age or illness; weak.",
    "banglaMeaning": "দুর্বল",
    "synonyms": [
      "weak",
      "frail",
      "delicate",
      "infirm"
    ],
    "antonyms": [
      "strong",
      "robust",
      "vigorous"
    ],
    "example": "The old man's voice was feeble, but his words were clear."
  },
  "feign": {
    "word": "Feign",
    "pos": "verb",
    "simpleDefinition": "To pretend to be affected by a feeling, state, or injury",
    "banglaMeaning": "ভান করা / ভণ্ডামি করা",
    "synonyms": [
      "Pretend",
      "Simulate",
      "Fake"
    ],
    "antonyms": [
      "Reveal",
      "Show",
      "Expose"
    ],
    "example": "She feigned illness to avoid going to school."
  },
  "fervent": {
    "word": "Fervent",
    "pos": "adjective",
    "simpleDefinition": "Having or displaying a passionate intensity of feeling",
    "banglaMeaning": "আন্তরিক / প্রবল উৎসাহী",
    "synonyms": [
      "Passionate",
      "Intense",
      "Eager"
    ],
    "antonyms": [
      "Indifferent",
      "Cold",
      "Apathetic"
    ],
    "example": "He was a fervent supporter of educational reform."
  },
  "fiasco": {
    "word": "Fiasco",
    "pos": "noun",
    "simpleDefinition": "A complete and embarrassing failure, especially of something planned.",
    "banglaMeaning": "বড় ধরনের ব্যর্থতা",
    "synonyms": [
      "failure",
      "disaster",
      "catastrophe",
      "debacle"
    ],
    "antonyms": [
      "success",
      "triumph",
      "achievement"
    ],
    "example": "The elaborate plan to launch the new product turned into a complete fiasco when the main server crashed."
  },
  "fiddling": {
    "word": "Fiddling",
    "pos": "adjective",
    "simpleDefinition": "Dealing with something in a trivial or unimportant way; also, making small, unnecessary adjustments.",
    "banglaMeaning": "তুচ্ছ; নগণ্য",
    "synonyms": [
      "trivial",
      "minor",
      "petty",
      "insignificant"
    ],
    "antonyms": [
      "important",
      "significant",
      "major"
    ],
    "example": "He spent hours fiddling with the settings on his phone instead of focusing on his urgent work."
  },
  "finagle": {
    "word": "Finagle",
    "pos": "verb",
    "simpleDefinition": "To get something by using clever or dishonest methods.",
    "banglaMeaning": "প্রতারণা করা",
    "synonyms": [
      "wangle",
      "manipulate",
      "trick",
      "scheme"
    ],
    "antonyms": [
      "earn",
      "obtain honestly"
    ],
    "example": "She managed to finagle a free ticket to the concert by telling the organizer she was a journalist."
  },
  "fire and brimstone": {
    "word": "Fire and brimstone",
    "pos": "idiom",
    "simpleDefinition": "A phrase referring to the torments of hell, often used to describe a very angry or passionate speech about punishment.",
    "banglaMeaning": "জাহান্নামের অনুমিত শাস্তি",
    "synonyms": [
      "hellfire",
      "damnation",
      "wrathful sermon"
    ],
    "antonyms": [
      "mercy",
      "forgiveness",
      "salvation"
    ],
    "example": "The preacher delivered a fire and brimstone sermon, warning the congregation about the consequences of sin."
  },
  "flagitious": {
    "word": "Flagitious",
    "pos": "adjective",
    "simpleDefinition": "Extremely wicked or criminal; villainous.",
    "banglaMeaning": "নিষ্ঠুর",
    "synonyms": [
      "villainous",
      "heinous",
      "atrocious",
      "wicked"
    ],
    "antonyms": [
      "virtuous",
      "righteous",
      "honorable"
    ],
    "example": "The flagitious act of poisoning the community's water supply shocked everyone."
  },
  "flagrant": {
    "word": "Flagrant",
    "pos": "adjective",
    "simpleDefinition": "Conspicuously and outrageously bad or offensive; glaring",
    "banglaMeaning": "প্রকাশ্য ও নির্লজ্জ / ঘোরতর অন্যায়",
    "synonyms": [
      "(     ) Blatant",
      "Obvious",
      "Glaring"
    ],
    "antonyms": [
      "Hidden",
      "Subtle",
      "Inconspicuous"
    ],
    "example": "Corruption is a flagrant violation of public trust."
  },
  "flashy": {
    "word": "Flashy",
    "pos": "adjective",
    "simpleDefinition": "Attracting attention because of being bright, expensive, or showy, often in a way that lacks good taste.",
    "banglaMeaning": "লোক দেখানো",
    "synonyms": [
      "showy",
      "gaudy",
      "ostentatious",
      "flamboyant"
    ],
    "antonyms": [
      "subtle",
      "understated",
      "modest"
    ],
    "example": "He drove a flashy sports car that always turned heads wherever he went."
  },
  "flat out": {
    "word": "Flat out",
    "pos": "adverb",
    "simpleDefinition": "At maximum speed or effort; also, directly and without hesitation.",
    "banglaMeaning": "সম্পূর্ণভাবে; সর্বোচ্চ প্রচেষ্টায়",
    "synonyms": [
      "fully",
      "completely",
      "directly",
      "unequivocally"
    ],
    "antonyms": [
      "slowly",
      "partially",
      "indirectly"
    ],
    "example": "The athlete ran flat out for the entire race, determined to win."
  },
  "flatten": {
    "word": "Flatten",
    "pos": "verb",
    "simpleDefinition": "To make something flat or flatter; to knock something down or defeat it completely.",
    "banglaMeaning": "সমতল হয়ে যাওয়া",
    "synonyms": [
      "level",
      "smooth",
      "crush",
      "demolish"
    ],
    "antonyms": [
      "raise",
      "inflate",
      "build"
    ],
    "example": "The strong winds threatened to flatten the old wooden fence."
  },
  "flaunt": {
    "word": "Flaunt",
    "pos": "verb",
    "simpleDefinition": "To display something ostentatiously, especially in order to provoke envy",
    "banglaMeaning": "জাহির করা / দম্ভভরে প্রদর্শন করা",
    "synonyms": [
      "/ Show off",
      "Display",
      "Exhibit"
    ],
    "antonyms": [
      "Conceal",
      "Hide",
      "Suppress"
    ],
    "example": "He flaunted his new car in front of his neighbours."
  },
  "fleeting": {
    "word": "Fleeting",
    "pos": "adjective",
    "simpleDefinition": "Lasting for a very short time.",
    "banglaMeaning": "ক্ষনস্থায়ী",
    "synonyms": [
      "brief",
      "transient",
      "momentary",
      "ephemeral"
    ],
    "antonyms": [
      "lasting",
      "enduring",
      "permanent"
    ],
    "example": "They shared a fleeting moment of eye contact before looking away."
  },
  "flexible": {
    "word": "Flexible",
    "pos": "adjective",
    "simpleDefinition": "Able to bend or be bent easily without breaking; also, able to change or be changed easily according to the situation.",
    "banglaMeaning": "নমনীয়",
    "synonyms": [
      "pliable",
      "adaptable",
      "versatile",
      "adjustable"
    ],
    "antonyms": [
      "rigid",
      "stiff",
      "inflexible"
    ],
    "example": "The company offers flexible working hours, allowing employees to choose their own schedule."
  },
  "flimsy": {
    "word": "Flimsy",
    "pos": "adjective",
    "simpleDefinition": "Insubstantial and easily damaged; lacking credibility or strength",
    "banglaMeaning": "পলকা / ঠুনকো / দুর্বল",
    "synonyms": [
      "Weak",
      "Fragile",
      "Insubstantial"
    ],
    "antonyms": [
      "Strong",
      "Solid",
      "Durable"
    ],
    "example": "The court dismissed the flimsy excuse of the accused."
  },
  "fluctuate": {
    "word": "Fluctuate",
    "pos": "verb",
    "simpleDefinition": "To rise and fall irregularly in number, amount, or condition",
    "banglaMeaning": "ওঠানামা করা / পরিবর্তিত হওয়া",
    "synonyms": [
      "ও Vary",
      "Oscillate",
      "Swing"
    ],
    "antonyms": [
      "Stabilize",
      "Remain constant",
      "Steady"
    ],
    "example": "Prices fluctuate with changes in supply and demand."
  },
  "forbid": {
    "word": "Forbid",
    "pos": "verb",
    "simpleDefinition": "To refuse to allow something; order someone not to do something",
    "banglaMeaning": "নিষেধ করা / বারন করা",
    "synonyms": [
      "Prohibit",
      "Ban",
      "Disallow"
    ],
    "antonyms": [
      "Allow",
      "Permit",
      "Authorize"
    ],
    "example": "Smoking is strictly forbidden in public spaces."
  },
  "forecast": {
    "word": "Forecast",
    "pos": "noun",
    "simpleDefinition": "A statement about what is likely to happen in the future, especially concerning the weather or a financial trend.",
    "banglaMeaning": "পূর্বাভাস",
    "synonyms": [
      "prediction",
      "projection",
      "prognosis",
      "outlook"
    ],
    "antonyms": [
      "hindsight",
      "retrospect"
    ],
    "example": "The weather forecast predicts heavy rain for tomorrow afternoon."
  },
  "formless": {
    "word": "Formless",
    "pos": "adjective",
    "simpleDefinition": "Without a definite or regular shape or structure.",
    "banglaMeaning": "আকৃতিহীন",
    "synonyms": [
      "amorphous",
      "shapeless",
      "unformed",
      "unstructured"
    ],
    "antonyms": [
      "structured",
      "defined",
      "distinct"
    ],
    "example": "In the deep fog, the distant trees appeared as formless shadows."
  },
  "forsaken": {
    "word": "Forsaken",
    "pos": "adjective",
    "simpleDefinition": "Abandoned or deserted; left alone and neglected.",
    "banglaMeaning": "পরিত্যক্ত করা",
    "synonyms": [
      "abandoned",
      "deserted",
      "neglected",
      "desolate"
    ],
    "antonyms": [
      "cherished",
      "supported",
      "embraced"
    ],
    "example": "The old, crumbling house stood forsaken at the edge of the village."
  },
  "fortitude": {
    "word": "Fortitude",
    "pos": "noun",
    "simpleDefinition": "Courage and strength in pain, trouble, or adversity",
    "banglaMeaning": "মনের জোর / মানসিক দৃঢ়তা",
    "synonyms": [
      "Courage",
      "Bravery",
      "Endurance"
    ],
    "antonyms": [
      "Cowardice",
      "Weakness",
      "Timidity"
    ],
    "example": "She faced her illness with remarkable fortitude."
  },
  "fortuitous": {
    "word": "Fortuitous",
    "pos": "adjective",
    "simpleDefinition": "Happening by chance, especially a lucky chance that brings a good result.",
    "banglaMeaning": "আকস্মিক",
    "synonyms": [
      "accidental",
      "coincidental",
      "serendipitous",
      "lucky"
    ],
    "antonyms": [
      "planned",
      "intentional",
      "deliberate"
    ],
    "example": "It was a fortuitous meeting that led to their successful business partnership."
  },
  "foster": {
    "word": "Foster",
    "pos": "verb",
    "simpleDefinition": "To encourage the growth or development of something desirable",
    "banglaMeaning": "লালন-পালন করা / উৎসাহিত করা",
    "synonyms": [
      "/ Encourage",
      "Nurture",
      "Support"
    ],
    "antonyms": [
      "Neglect",
      "Discourage",
      "Hinder"
    ],
    "example": "Good teachers foster a love of learning in students."
  },
  "fragile": {
    "word": "Fragile",
    "pos": "adjective",
    "simpleDefinition": "Easily broken or damaged; delicate.",
    "banglaMeaning": "দুর্বল",
    "synonyms": [
      "delicate",
      "brittle",
      "breakable",
      "weak"
    ],
    "antonyms": [
      "sturdy",
      "robust",
      "strong"
    ],
    "example": "The antique vase was so fragile that she handled it with extreme care."
  },
  "fragrance": {
    "word": "Fragrance",
    "pos": "noun",
    "simpleDefinition": "A pleasant, sweet smell.",
    "banglaMeaning": "সুগন্ধী",
    "synonyms": [
      "scent",
      "aroma",
      "perfume",
      "odor"
    ],
    "antonyms": [
      "stench",
      "reek",
      "malodor"
    ],
    "example": "The fragrance of fresh roses filled the entire room."
  },
  "frank": {
    "word": "Frank",
    "pos": "adjective",
    "simpleDefinition": "Open, honest, and direct in speech, sometimes in a way that might seem blunt.",
    "banglaMeaning": "অকপট / খোলাখুলি",
    "synonyms": [
      "candid",
      "honest",
      "direct",
      "straightforward"
    ],
    "antonyms": [
      "secretive",
      "evasive",
      "reserved"
    ],
    "example": "To be frank, I don't think that idea will work."
  },
  "frantic": {
    "word": "Frantic",
    "pos": "adjective",
    "simpleDefinition": "Wildly excited or anxious, especially because of worry or fear.",
    "banglaMeaning": "নিয়ন্ত্রণহীন",
    "synonyms": [
      "desperate",
      "frenzied",
      "agitated",
      "distraught"
    ],
    "antonyms": [
      "calm",
      "composed",
      "relaxed"
    ],
    "example": "She made a frantic call to the police after realizing her child was missing."
  },
  "fraudulent": {
    "word": "Fraudulent",
    "pos": "adjective",
    "simpleDefinition": "Obtained, done by, or involving deception, especially criminal deception",
    "banglaMeaning": "প্রতারণাপূর্ণ / জাল",
    "synonyms": [
      "Dishonest",
      "Deceptive",
      "Corrupt"
    ],
    "antonyms": [
      "Honest",
      "Genuine",
      "Legal"
    ],
    "example": "The employee was fired for fraudulent accounting."
  },
  "freak": {
    "word": "Freak",
    "pos": "noun",
    "simpleDefinition": "An unusual or unexpected event or thing; also, a person who is obsessed with a particular activity or interest.",
    "banglaMeaning": "খামখেয়াল",
    "synonyms": [
      "anomaly",
      "oddity",
      "quirk",
      "enthusiast"
    ],
    "antonyms": [
      "norm",
      "regularity",
      "commonality"
    ],
    "example": "The sudden snowstorm in May was a complete freak of nature."
  },
  "friction": {
    "word": "Friction",
    "pos": "noun",
    "simpleDefinition": "Disagreement or conflict between people or groups; also, the resistance that one surface or object encounters when moving over another.",
    "banglaMeaning": "বিরোধ",
    "synonyms": [
      "conflict",
      "tension",
      "discord",
      "antagonism"
    ],
    "antonyms": [
      "harmony",
      "agreement",
      "accord"
    ],
    "example": "There has been a lot of friction between the two departments recently."
  },
  "frisky": {
    "word": "Frisky",
    "pos": "adjective",
    "simpleDefinition": "Playful and full of energy.",
    "banglaMeaning": "চঞ্চল; প্রাণবন্ত",
    "synonyms": [
      "playful",
      "lively",
      "spirited",
      "energetic"
    ],
    "antonyms": [
      "lethargic",
      "sluggish",
      "subdued"
    ],
    "example": "The frisky puppy chased its tail around the living room."
  },
  "frivolous": {
    "word": "Frivolous",
    "pos": "adjective",
    "simpleDefinition": "Not having any serious purpose or value; carefree and superficial",
    "banglaMeaning": "হালকা / অর্থহীন / তুচ্ছ / ছেলেমানুষিপূর্ণ / নগণ্য",
    "synonyms": [
      "Trivial",
      "Silly",
      "Petty"
    ],
    "antonyms": [
      "Serious",
      "Important",
      "Significant"
    ],
    "example": "Don't waste time on frivolous activities before exams."
  },
  "frown": {
    "word": "Frown",
    "pos": "verb",
    "simpleDefinition": "To wrinkle your forehead, usually because you are angry, worried, or thinking hard; also, to disapprove of something.",
    "banglaMeaning": "তিরস্কার করা",
    "synonyms": [
      "scowl",
      "glare",
      "disapprove",
      "grimace"
    ],
    "antonyms": [
      "smile",
      "approve",
      "grin"
    ],
    "example": "The teacher frowned at the students who were talking during the lecture."
  },
  "frugal": {
    "word": "Frugal",
    "pos": "adjective",
    "simpleDefinition": "Careful with money and avoiding waste",
    "banglaMeaning": "মিতব্যয়ী / হিসেবি / মিতব্যয়ী",
    "synonyms": [
      "Thrifty",
      "Economical",
      "Sparing"
    ],
    "antonyms": [
      "Wasteful",
      "Extravagant",
      "Lavish"
    ],
    "example": "Being frugal, she saved enough money to buy a house."
  },
  "fruitful": {
    "word": "Fruitful",
    "pos": "adjective",
    "simpleDefinition": "Producing good or useful results; productive.",
    "banglaMeaning": "ফলপ্রসূ",
    "synonyms": [
      "productive",
      "successful",
      "beneficial",
      "rewarding"
    ],
    "antonyms": [
      "barren",
      "unproductive",
      "futile"
    ],
    "example": "Their collaboration proved to be very fruitful, leading to several new discoveries."
  },
  "furtive": {
    "word": "Furtive",
    "pos": "adjective",
    "simpleDefinition": "Done in a quiet and secretive way to avoid being noticed, often suggesting guilt or nervousness.",
    "banglaMeaning": "চুপিচুপি",
    "synonyms": [
      "secretive",
      "stealthy",
      "surreptitious",
      "clandestine"
    ],
    "antonyms": [
      "open",
      "overt",
      "public"
    ],
    "example": "He cast a furtive glance at his watch, hoping no one would notice he was bored."
  },
  "fussy": {
    "word": "Fussy",
    "pos": "adjective",
    "simpleDefinition": "Easily worried or upset; also, paying too much attention to small, unimportant details.",
    "banglaMeaning": "অতিসতর্ক",
    "synonyms": [
      "particular",
      "picky",
      "fastidious",
      "finicky"
    ],
    "antonyms": [
      "easygoing",
      "unconcerned",
      "undemanding"
    ],
    "example": "She's very fussy about her food and won't eat anything she doesn't like."
  },
  "futile": {
    "word": "Futile",
    "pos": "adjective",
    "simpleDefinition": "Incapable of producing any useful result; completely pointless and wasted.",
    "banglaMeaning": "নিরর্থক / পণ্ডশ্রম",
    "synonyms": [
      "Useless",
      "Pointless",
      "Fruitless",
      "Vain"
    ],
    "antonyms": [
      "Fruitful",
      "Useful",
      "Productive"
    ],
    "example": "Their futile attempts to revive the flooded engine proved exhausting."
  },
  "gargantuan": {
    "word": "Gargantuan",
    "pos": "adjective",
    "simpleDefinition": "Extremely large in size or amount.",
    "banglaMeaning": "খুব বড়",
    "synonyms": [
      "enormous",
      "colossal",
      "immense",
      "gigantic"
    ],
    "antonyms": [
      "tiny",
      "miniature",
      "minuscule"
    ],
    "example": "The company built a gargantuan new factory that covered several acres."
  },
  "garrulous": {
    "word": "Garrulous",
    "pos": "adjective",
    "simpleDefinition": "Excessively talkative, especially about trivial or unimportant matters",
    "banglaMeaning": "বাচাল / অতিরিক্ত কথা বলে এমন",
    "synonyms": [
      "Talkative",
      "Chatty",
      "Verbose"
    ],
    "antonyms": [
      "Quiet",
      "Concise",
      "Taciturn"
    ],
    "example": "The garrulous neighbour talked for three hours."
  },
  "generate": {
    "word": "Generate",
    "pos": "verb",
    "simpleDefinition": "To produce or create something, especially energy or ideas.",
    "banglaMeaning": "উৎপাদন করা",
    "synonyms": [
      "create",
      "produce",
      "make",
      "form"
    ],
    "antonyms": [
      "destroy",
      "eliminate",
      "stop"
    ],
    "example": "Wind turbines generate electricity from the power of the wind."
  },
  "generous": {
    "word": "Generous",
    "pos": "adjective",
    "simpleDefinition": "Willing to give money, help, or time freely; larger than usual or necessary.",
    "banglaMeaning": "উদার",
    "synonyms": [
      "benevolent",
      "charitable",
      "liberal",
      "unselfish"
    ],
    "antonyms": [
      "stingy",
      "selfish",
      "greedy"
    ],
    "example": "She was very generous and donated a large sum to the local charity."
  },
  "genesis": {
    "word": "Genesis",
    "pos": "noun",
    "simpleDefinition": "The origin or beginning of something.",
    "banglaMeaning": "উৎপত্তি; উদ্ভব; সূচনা",
    "synonyms": [
      "origin",
      "beginning",
      "start",
      "inception"
    ],
    "antonyms": [
      "end",
      "conclusion",
      "culmination"
    ],
    "example": "The genesis of the idea came from a casual conversation between colleagues."
  },
  "genial": {
    "word": "Genial",
    "pos": "adjective",
    "simpleDefinition": "Friendly, cheerful, and pleasant in manner",
    "banglaMeaning": "অমায়িক / হাসিখুশি / আন্তরিক",
    "synonyms": [
      "Friendly",
      "Warm",
      "Pleasant"
    ],
    "antonyms": [
      "Unfriendly",
      "Cold",
      "Hostile"
    ],
    "example": "The genial professor was loved by all his students."
  },
  "genuine": {
    "word": "Genuine",
    "pos": "adjective",
    "simpleDefinition": "Truly what something is said to be; authentic and sincere",
    "banglaMeaning": "খাঁটি / আসল / অকৃত্রিম",
    "synonyms": [
      "Authentic",
      "Real",
      "Sincere"
    ],
    "antonyms": [
      "Fake",
      "False",
      "Artificial"
    ],
    "example": "His concern for the poor was genuine."
  },
  "get along": {
    "word": "Get along",
    "pos": "idiom",
    "simpleDefinition": "To have a friendly relationship with someone; to manage or cope in a situation.",
    "banglaMeaning": "কারও সঙ্গে মিলেমিশে থাকা বা ভালো সম্পর্ক বজায় রাখা",
    "synonyms": [
      "coexist",
      "agree",
      "harmonize",
      "cooperate"
    ],
    "antonyms": [
      "quarrel",
      "clash",
      "disagree"
    ],
    "example": "Despite their different personalities, the two brothers always get along well."
  },
  "gifted": {
    "word": "Gifted",
    "pos": "adjective",
    "simpleDefinition": "Having exceptional natural ability or talent.",
    "banglaMeaning": "প্রতিভাধর",
    "synonyms": [
      "talented",
      "brilliant",
      "accomplished",
      "skilled"
    ],
    "antonyms": [
      "untalented",
      "unskilled",
      "ordinary"
    ],
    "example": "The gifted musician began playing complex pieces at a very young age."
  },
  "gloomy": {
    "word": "Gloomy",
    "pos": "adjective",
    "simpleDefinition": "Dark, poorly lit, or causing feelings of depression and sadness",
    "banglaMeaning": "অন্ধকারাচ্ছন্ন / বিষণ্ণ / অন্ধকারাচ্ছন্ন",
    "synonyms": [
      "Dark",
      "Depressing",
      "Sad"
    ],
    "antonyms": [
      "Bright",
      "Cheerful",
      "Happy"
    ],
    "example": "The cloudy sky made everyone feel gloomy."
  },
  "glorious": {
    "word": "Glorious",
    "pos": "adjective",
    "simpleDefinition": "Having great beauty or splendor; deserving great praise.",
    "banglaMeaning": "জমকালো",
    "synonyms": [
      "magnificent",
      "splendid",
      "superb",
      "brilliant"
    ],
    "antonyms": [
      "terrible",
      "awful",
      "inglorious"
    ],
    "example": "The sunset over the ocean was a truly glorious sight."
  },
  "gloss": {
    "word": "Gloss",
    "pos": "noun",
    "simpleDefinition": "A superficial luster or shiny finish, or an explanatory note or translation inserted in a text.",
    "banglaMeaning": "উজ্জ্বলতা / চাকচিক্য / মসৃণতা / টীকা",
    "synonyms": [
      "Shine",
      "Luster",
      "Sheen",
      "Annotation"
    ],
    "antonyms": [
      "Dullness"
    ],
    "example": "The freshly polished teak table had a warm golden gloss that shone in the morning light."
  },
  "glow": {
    "word": "Glow",
    "pos": "verb",
    "simpleDefinition": "To emit a soft, steady light; to show deep pleasure or health.",
    "banglaMeaning": "খুশিতে ঝলমল করা",
    "synonyms": [
      "shine",
      "radiate",
      "beam",
      "gleam"
    ],
    "antonyms": [
      "dim",
      "fade",
      "darken"
    ],
    "example": "Her face began to glow with happiness when she heard the good news."
  },
  "glut": {
    "word": "Glut",
    "pos": "noun",
    "simpleDefinition": "An excessively abundant supply of something in the market",
    "banglaMeaning": "প্রচুর আধিক্য / উপচে পড়া সরবরাহ",
    "synonyms": [
      "/ Surplus",
      "Oversupply",
      "Excess"
    ],
    "antonyms": [
      "Shortage",
      "Scarcity",
      "Dearth"
    ],
    "example": "There was a glut of vegetables in the market."
  },
  "goad": {
    "word": "Goad",
    "pos": "verb",
    "simpleDefinition": "To provoke or annoy someone to stimulate an action or reaction.",
    "banglaMeaning": "অনুপ্রাণিত করা",
    "synonyms": [
      "provoke",
      "incite",
      "prod",
      "urge"
    ],
    "antonyms": [
      "deter",
      "discourage",
      "restrain"
    ],
    "example": "He tried to goad his sister into arguing with him, but she refused."
  },
  "gourmand": {
    "word": "Gourmand",
    "pos": "noun",
    "simpleDefinition": "A person who enjoys eating and often eats too much.",
    "banglaMeaning": "পেটুক",
    "synonyms": [
      "glutton",
      "overeater",
      "foodie",
      "epicure"
    ],
    "antonyms": [
      "ascetic",
      "dieter",
      "abstainer"
    ],
    "example": "The gourmand always ordered the largest portion on the menu and often asked for seconds."
  },
  "gourmet": {
    "word": "Gourmet",
    "pos": "noun",
    "simpleDefinition": "A person who has a refined taste in food and drink and enjoys high-quality cuisine.",
    "banglaMeaning": "পান ও ভোজন রসিক ব্যক্তি",
    "synonyms": [
      "connoisseur",
      "epicure",
      "foodie",
      "gastronome"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The gourmet traveled extensively to sample the finest dishes from around the world."
  },
  "gracious": {
    "word": "Gracious",
    "pos": "adjective",
    "simpleDefinition": "Courteous, kind, and pleasant, especially toward subordinates",
    "banglaMeaning": "দয়ালু; সদয়",
    "synonyms": [
      "Kind",
      "Generous",
      "Polite"
    ],
    "antonyms": [
      "Rude",
      "Harsh",
      "Ungrateful"
    ],
    "example": "The gracious host made all visitors feel comfortable."
  },
  "grain": {
    "word": "Grain",
    "pos": "noun",
    "simpleDefinition": "The small, hard seed of a cereal plant, such as wheat or rice; a very small amount of something.",
    "banglaMeaning": "শস্য / খাদ্যশস্য",
    "synonyms": [
      "kernel",
      "seed",
      "particle",
      "speck"
    ],
    "antonyms": [
      "mass",
      "whole",
      "bulk"
    ],
    "example": "Farmers harvest grain like corn and wheat to make bread and other foods."
  },
  "grandiose": {
    "word": "Grandiose",
    "pos": "adjective",
    "simpleDefinition": "Impressive and magnificent in appearance or style, especially excessively so; intended to seem important or splendid.",
    "banglaMeaning": "জমকালো / সুবিশাল",
    "synonyms": [
      "magnificent",
      "imposing",
      "elaborate",
      "ostentatious"
    ],
    "antonyms": [
      "humble",
      "modest",
      "simple"
    ],
    "example": "The architect presented a grandiose plan for a new city hall with towering spires and marble columns."
  },
  "grant": {
    "word": "Grant",
    "pos": "noun",
    "simpleDefinition": "A sum of money given by an organization, especially a government, for a particular purpose.",
    "banglaMeaning": "অনুদান",
    "synonyms": [
      "subsidy",
      "allowance",
      "donation",
      "endowment"
    ],
    "antonyms": [
      "loan",
      "debt",
      "withdrawal"
    ],
    "example": "The university received a research grant to study renewable energy sources."
  },
  "grasp accurately": {
    "word": "Grasp accurately",
    "pos": "idiom",
    "simpleDefinition": "To understand something completely and correctly.",
    "banglaMeaning": "বুঝতে পারা",
    "synonyms": [
      "comprehend",
      "understand",
      "perceive",
      "apprehend"
    ],
    "antonyms": [
      "misunderstand",
      "misinterpret",
      "confuse"
    ],
    "example": "It took him a while to grasp accurately the complex instructions for assembling the furniture."
  },
  "grateful": {
    "word": "Grateful",
    "pos": "adjective",
    "simpleDefinition": "Feeling or showing appreciation for something done or received.",
    "banglaMeaning": "কৃতজ্ঞ",
    "synonyms": [
      "thankful",
      "appreciative",
      "obliged",
      "indebted"
    ],
    "antonyms": [
      "ungrateful",
      "unappreciative",
      "thankless"
    ],
    "example": "She was truly grateful for all the help her friends offered during her difficult time."
  },
  "gratifying": {
    "word": "Gratifying",
    "pos": "adjective",
    "simpleDefinition": "Giving pleasure or satisfaction.",
    "banglaMeaning": "তৃপ্তিদায়ক",
    "synonyms": [
      "satisfying",
      "pleasing",
      "rewarding",
      "fulfilling"
    ],
    "antonyms": [
      "disappointing",
      "frustrating",
      "displeasing"
    ],
    "example": "It was gratifying to see all her hard work finally pay off with such excellent results."
  },
  "gratitude": {
    "word": "Gratitude",
    "pos": "noun",
    "simpleDefinition": "The quality of being thankful; readiness to show appreciation for and to return kindness.",
    "banglaMeaning": "কৃতজ্ঞতা, কৃতজ্ঞতা স্বীকার",
    "synonyms": [
      "thankfulness",
      "appreciation",
      "gratefulness",
      "indebtedness"
    ],
    "antonyms": [
      "ingratitude",
      "ungratefulness"
    ],
    "example": "He expressed his deep gratitude to everyone who supported him during the challenging project."
  },
  "gratuitous": {
    "word": "Gratuitous",
    "pos": "adjective",
    "simpleDefinition": "Done or given without good reason; uncalled for",
    "banglaMeaning": "অহেতুক / বিনামূল্যে প্রাপ্ত",
    "synonyms": [
      "ও Unnecessary",
      "Unwarranted",
      "Free"
    ],
    "antonyms": [
      "Justified",
      "Warranted",
      "Necessary"
    ],
    "example": "The film was criticized for its gratuitous violence."
  },
  "green eye": {
    "word": "Green eye",
    "pos": "idiom",
    "simpleDefinition": "A feeling of deep jealousy or envy towards another person.",
    "banglaMeaning": "ঈর্ষান্বিত",
    "synonyms": [
      "Jealousy",
      "Envy",
      "Resentment"
    ],
    "antonyms": [
      "Contentment",
      "Goodwill"
    ],
    "example": "His promotion stirred the green eye of his less diligent colleagues."
  },
  "greeting": {
    "word": "Greeting",
    "pos": "noun",
    "simpleDefinition": "An act of welcome or acknowledgment upon meeting someone.",
    "banglaMeaning": "অভিবাদন",
    "synonyms": [
      "salutation",
      "welcome",
      "hello",
      "acknowledgment"
    ],
    "antonyms": [
      "farewell",
      "goodbye",
      "departure"
    ],
    "example": "She offered a warm greeting to all the guests as they arrived at the party."
  },
  "gregarious": {
    "word": "Gregarious",
    "pos": "adjective",
    "simpleDefinition": "Sociable and enjoying the company of others",
    "banglaMeaning": "মিশুক / সামাজিক",
    "synonyms": [
      "Sociable",
      "Outgoing",
      "Friendly"
    ],
    "antonyms": [
      "Introverted",
      "Reserved",
      "Antisocial"
    ],
    "example": "The gregarious host made every guest feel welcome."
  },
  "grievous": {
    "word": "Grievous",
    "pos": "adjective",
    "simpleDefinition": "Very severe or serious; causing great grief or suffering",
    "banglaMeaning": "মারাত্মক / অত্যন্ত বেদনাদায়ক",
    "synonyms": [
      "Severe",
      "Serious",
      "Painful"
    ],
    "antonyms": [
      "Minor",
      "Trivial",
      "Mild"
    ],
    "example": "The accident caused grievous injuries to the passenger."
  },
  "grueling": {
    "word": "Grueling",
    "pos": "adjective",
    "simpleDefinition": "Extremely tiring and demanding.",
    "banglaMeaning": "কষ্টসাধ্য বা পরিশ্রমসাধ্য কিছু",
    "synonyms": [
      "exhausting",
      "arduous",
      "strenuous",
      "punishing"
    ],
    "antonyms": [
      "easy",
      "effortless",
      "light"
    ],
    "example": "The marathon was a grueling race that tested the endurance of every runner."
  },
  "haggler": {
    "word": "Haggler",
    "pos": "noun",
    "simpleDefinition": "A person who argues about the price of something in an attempt to get it at a lower cost.",
    "banglaMeaning": "যে ব্যক্তি দরকষাকষি করে",
    "synonyms": [
      "bargainer",
      "negotiator",
      "quibbler",
      "chaffer"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The haggler spent an hour trying to get a better price for the antique vase at the market."
  },
  "halcyon": {
    "word": "Halcyon",
    "pos": "adjective",
    "simpleDefinition": "Denoting a period of time in the past that was idyllically happy and peaceful.",
    "banglaMeaning": "শান্ত / শান্তিপূর্ণ",
    "synonyms": [
      "peaceful",
      "tranquil",
      "serene",
      "calm"
    ],
    "antonyms": [
      "turbulent",
      "chaotic",
      "troubled"
    ],
    "example": "She often looked back fondly on the halcyon days of her childhood, free from worries."
  },
  "hamper": {
    "word": "Hamper",
    "pos": "verb",
    "simpleDefinition": "To hinder or impede the movement or progress of something",
    "banglaMeaning": "বাধাগ্রস্ত করা / ব্যাহত করা",
    "synonyms": [
      "Obstruct",
      "Hinder",
      "Impede"
    ],
    "antonyms": [
      "Assist",
      "Help",
      "Facilitate"
    ],
    "example": "Heavy rain hampered the rescue operation."
  },
  "hang in balance": {
    "word": "Hang in balance",
    "pos": "idiom",
    "simpleDefinition": "To be in an uncertain or critical state, with the outcome not yet decided.",
    "banglaMeaning": "সাফল্যের জন্য কোন কিছুর উপর নির্ভর করা",
    "synonyms": [
      "uncertain",
      "precarious",
      "undecided",
      "critical"
    ],
    "antonyms": [
      "certain",
      "decided",
      "resolved"
    ],
    "example": "The future of the company hung in the balance after the unexpected financial losses."
  },
  "harass": {
    "word": "Harass",
    "pos": "verb",
    "simpleDefinition": "To subject someone to aggressive pressure, intimidation, or torment",
    "banglaMeaning": "হয়রান করা / ক্রমাগত উত্যক্ত করা",
    "synonyms": [
      "Torment",
      "Annoy",
      "Bother"
    ],
    "antonyms": [
      "Help",
      "Comfort",
      "Support"
    ],
    "example": "No employee should be harassed in the workplace."
  },
  "harbinger": {
    "word": "Harbinger",
    "pos": "noun",
    "simpleDefinition": "A person or thing that signals or announces the approach of another",
    "banglaMeaning": "অগ্রদূত / পূর্বাভাস",
    "synonyms": [
      "Omen",
      "Precursor",
      "Forerunner"
    ],
    "antonyms": [
      "Follower",
      "Result",
      "Consequence"
    ],
    "example": "Dark clouds are harbingers of a coming storm."
  },
  "harmonious": {
    "word": "Harmonious",
    "pos": "adjective",
    "simpleDefinition": "Forming a pleasing or consistent whole; free from disagreement or dissent.",
    "banglaMeaning": "সুরেলা",
    "synonyms": [
      "melodious",
      "tuneful",
      "agreeable",
      "compatible"
    ],
    "antonyms": [
      "discordant",
      "clashing",
      "conflicting"
    ],
    "example": "The choir sang in such a harmonious way that their voices blended perfectly."
  },
  "harmony": {
    "word": "Harmony",
    "pos": "noun",
    "simpleDefinition": "Agreement, peaceful concord, or pleasing combination",
    "banglaMeaning": "ঐক্য / সম্প্রীতি / সুসংগতি / সাদৃশ্য",
    "synonyms": [
      "Agreement",
      "Unity",
      "Accord"
    ],
    "antonyms": [
      "Discord",
      "Conflict",
      "Disharmony"
    ],
    "example": "The two communities lived in harmony for decades."
  },
  "harsh": {
    "word": "Harsh",
    "pos": "adjective",
    "simpleDefinition": "Rough, severe, or unpleasantly grating to the senses or feelings.",
    "banglaMeaning": "কর্কশ",
    "synonyms": [
      "Severe",
      "Rough",
      "Cruel",
      "Strict"
    ],
    "antonyms": [
      "Gentle",
      "Mild",
      "Soft"
    ],
    "example": "The harsh winter wind made walking outside unbearable."
  },
  "hastening": {
    "word": "Hastening",
    "pos": "verb",
    "simpleDefinition": "Moving, acting, or causing something to happen with great speed.",
    "banglaMeaning": "দ্রুত চলা",
    "synonyms": [
      "Hurrying",
      "Speeding up",
      "Quickening",
      "Rushing"
    ],
    "antonyms": [
      "Delaying",
      "Slowing",
      "Lingering"
    ],
    "example": "She was hastening along the path to catch the last bus home."
  },
  "hasty": {
    "word": "Hasty",
    "pos": "adjective",
    "simpleDefinition": "Done with excessive speed or without sufficient careful thought.",
    "banglaMeaning": "দ্রুতগতি",
    "synonyms": [
      "Hurried",
      "Rash",
      "Impulsive",
      "Quick"
    ],
    "antonyms": [
      "Careful",
      "Deliberate",
      "Slow"
    ],
    "example": "Making a hasty decision often leads to regret later on."
  },
  "haughty": {
    "word": "Haughty",
    "pos": "adjective",
    "simpleDefinition": "Arrogant, proud, and looking down on others",
    "banglaMeaning": "উদ্ধত / অহংকারী",
    "synonyms": [
      "Arrogant",
      "Proud",
      "Conceited"
    ],
    "antonyms": [
      "Humble",
      "Modest",
      "Meek"
    ],
    "example": "Her haughty attitude made her unpopular among colleagues."
  },
  "hazardous": {
    "word": "Hazardous",
    "pos": "adjective",
    "simpleDefinition": "Involving serious risk, danger, or peril to safety or health.",
    "banglaMeaning": "বিপজ্জনক; ঝুঁকিপূর্ণ",
    "synonyms": [
      "Dangerous",
      "Risky",
      "Perilous",
      "Unsafe"
    ],
    "antonyms": [
      "Safe",
      "Secure",
      "Harmless"
    ],
    "example": "Working with toxic chemicals can be extremely hazardous without protective gear."
  },
  "head and ears": {
    "word": "Head and ears",
    "pos": "idiom",
    "simpleDefinition": "Completely, deeply, or thoroughly involved in something.",
    "banglaMeaning": "পুরোপুরি",
    "synonyms": [
      "Completely",
      "Deeply",
      "Thoroughly",
      "Entirely"
    ],
    "antonyms": [
      "Partially",
      "Barely"
    ],
    "example": "He found himself head and ears in debt after starting the new venture."
  },
  "heckle": {
    "word": "Heckle",
    "pos": "verb",
    "simpleDefinition": "To interrupt a public speaker with loud, rude, or aggressive comments.",
    "banglaMeaning": "বক্তৃতার সময় বিরক্ত করা; প্রশ্ন তোলা",
    "synonyms": [
      "Jeer",
      "Disrupt",
      "Taunt",
      "Harass"
    ],
    "antonyms": [
      "Cheer",
      "Applaud",
      "Encourage"
    ],
    "example": "A few angry protesters tried to heckle the mayor during his speech."
  },
  "hedge": {
    "word": "Hedge",
    "pos": "noun",
    "simpleDefinition": "A boundary of bushes, or an action taken to protect against financial loss.",
    "banglaMeaning": "প্রতিবন্ধক",
    "synonyms": [
      "Barrier",
      "Protection",
      "Safeguard",
      "Shield"
    ],
    "antonyms": [
      "Exposure",
      "Risk"
    ],
    "example": "Investing in gold is often used as a hedge against inflation."
  },
  "hefty": {
    "word": "Hefty",
    "pos": "adjective",
    "simpleDefinition": "Large, heavy, powerfully built, or substantial in amount.",
    "banglaMeaning": "প্রবল / তাগড়া",
    "synonyms": [
      "Heavy",
      "Massive",
      "Substantial",
      "Sizable"
    ],
    "antonyms": [
      "Light",
      "Slight",
      "Small"
    ],
    "example": "He had to pay a hefty fine for speeding through the school zone."
  },
  "hegemony": {
    "word": "Hegemony",
    "pos": "noun",
    "simpleDefinition": "Leadership or dominant influence exerted by one nation or social group over others.",
    "banglaMeaning": "আধিপত্য",
    "synonyms": [
      "Dominance",
      "Supremacy",
      "Leadership",
      "Authority"
    ],
    "antonyms": [
      "Subordination",
      "Self-government"
    ],
    "example": "The ancient empire maintained its political hegemony over neighboring territories."
  },
  "heinous": {
    "word": "Heinous",
    "pos": "adjective",
    "simpleDefinition": "Utterly wicked, evil, shocking, or deserving of strong condemnation.",
    "banglaMeaning": "জগন্য",
    "synonyms": [
      "Atrocious",
      "Monstrous",
      "Abominable",
      "Evil"
    ],
    "antonyms": [
      "Admirable",
      "Noble",
      "Virtuous"
    ],
    "example": "The criminal received a life sentence for committing such heinous acts."
  },
  "heresy": {
    "word": "Heresy",
    "pos": "noun",
    "simpleDefinition": "Belief or opinion contrary to orthodox religious or accepted doctrine",
    "banglaMeaning": "প্রচলিত মতের বিরোধী বিশ্বাস",
    "synonyms": [
      "/ Blasphemy",
      "Apostasy",
      "Dissent"
    ],
    "antonyms": [
      "Orthodoxy",
      "Conformity",
      "Belief"
    ],
    "example": "In the medieval period, heresy was punishable by death."
  },
  "hexagon": {
    "word": "Hexagon",
    "pos": "noun",
    "simpleDefinition": "A flat geometric shape with six straight sides and six angles.",
    "banglaMeaning": "ষড়ভূজ",
    "synonyms": [
      "Six-sided polygon",
      "Geometric shape"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Bees construct their honeycombs out of tiny, perfect hexagon cells."
  },
  "hidebound": {
    "word": "Hidebound",
    "pos": "adjective",
    "simpleDefinition": "Unwilling to change or consider new ideas due to rigid tradition.",
    "banglaMeaning": "সংকীর্ণমনা",
    "synonyms": [
      "Narrow-minded",
      "Rigid",
      "Inflexible",
      "Orthodox"
    ],
    "antonyms": [
      "Open-minded",
      "Progressive",
      "Flexible"
    ],
    "example": "The hidebound committee rejected every suggestion for modernizing the policy."
  },
  "highbrow": {
    "word": "Highbrow",
    "pos": "adjective",
    "simpleDefinition": "Intellectual, scholarly, or appealing to refined and sophisticated tastes.",
    "banglaMeaning": "বড়াইকারী",
    "synonyms": [
      "Intellectual",
      "Scholarly",
      "Cultured",
      "Sophisticated"
    ],
    "antonyms": [
      "Lowbrow",
      "Popular",
      "Uncultured"
    ],
    "example": "He preferred reading highbrow historical essays over commercial magazines."
  },
  "hindrance": {
    "word": "Hindrance",
    "pos": "noun",
    "simpleDefinition": "A thing that provides resistance, delay, or obstruction to something.",
    "banglaMeaning": "বাঁধা",
    "synonyms": [
      "Obstacle",
      "Barrier",
      "Impediment",
      "Obstruction"
    ],
    "antonyms": [
      "Help",
      "Assistance",
      "Aid"
    ],
    "example": "The lack of reliable internet was a major hindrance to her online studies."
  },
  "hit upon": {
    "word": "Hit upon",
    "pos": "verb",
    "simpleDefinition": "To discover, think of, or find something unexpectedly or by chance.",
    "banglaMeaning": "খুঁজে পাওয়া",
    "synonyms": [
      "Discover",
      "Come upon",
      "Devise",
      "Stumble upon"
    ],
    "antonyms": [
      "Miss",
      "Overlook",
      "Ignore"
    ],
    "example": "After hours of brainstorming, the team finally hit upon a brilliant solution."
  },
  "hoard": {
    "word": "Hoard",
    "pos": "verb",
    "simpleDefinition": "To accumulate and store away a large quantity of items secretly.",
    "banglaMeaning": "মজুতদারি",
    "synonyms": [
      "Amass",
      "Store",
      "Stockpile",
      "Accumulate"
    ],
    "antonyms": [
      "Spend",
      "Distribute",
      "Squander"
    ],
    "example": "During the crisis, some merchants attempted to hoard essential food supplies."
  },
  "hole and corner": {
    "word": "Hole and corner",
    "pos": "idiom",
    "simpleDefinition": "Done secretly, underhandedly, or in a deceitful manner.",
    "banglaMeaning": "গোপনীয়",
    "synonyms": [
      "Secret",
      "Underhanded",
      "Clandestine",
      "Covert"
    ],
    "antonyms": [
      "Open",
      "Public",
      "Above board"
    ],
    "example": "He refused to participate in such hole and corner business transactions."
  },
  "holocaust": {
    "word": "Holocaust",
    "pos": "noun",
    "simpleDefinition": "Destruction or slaughter on a mass scale, especially by fire or warfare.",
    "banglaMeaning": "গণহত্যা; ব্যাপক ধ্বংসযজ্ঞ",
    "synonyms": [
      "Massacre",
      "Catastrophe",
      "Devastation",
      "Destruction"
    ],
    "antonyms": [
      "Peace",
      "Preservation"
    ],
    "example": "The devastating conflict resulted in a humanitarian holocaust for civilians."
  },
  "homogeneous": {
    "word": "Homogeneous",
    "pos": "adjective",
    "simpleDefinition": "Consisting of parts or elements that are all of the same kind; uniform.",
    "banglaMeaning": "সমজাতীয়",
    "synonyms": [
      "Uniform",
      "Consistent",
      "Identical",
      "Alike"
    ],
    "antonyms": [
      "Heterogeneous",
      "Diverse",
      "Varied"
    ],
    "example": "The small island nation has a remarkably homogeneous culture and language."
  },
  "honorary": {
    "word": "Honorary",
    "pos": "adjective",
    "simpleDefinition": "Given as an honor or title without the normal duties or regular payment.",
    "banglaMeaning": "বিনাবেতনে",
    "synonyms": [
      "Unpaid",
      "Nominal",
      "Honorific",
      "Complimentary"
    ],
    "antonyms": [
      "Salaried",
      "Paid",
      "Official"
    ],
    "example": "The university awarded him an honorary degree for his philanthropic work."
  },
  "hook": {
    "word": "Hook",
    "pos": "noun",
    "simpleDefinition": "A curved device used for catching or holding, or an attractive feature.",
    "banglaMeaning": "ফাঁদ",
    "synonyms": [
      "Snare",
      "Catch",
      "Trap",
      "Fastener"
    ],
    "antonyms": [
      "Release"
    ],
    "example": "The catchy opening chorus served as the main hook of the song."
  },
  "horde": {
    "word": "Horde",
    "pos": "noun",
    "simpleDefinition": "A very large, bustling crowd or moving group of people.",
    "banglaMeaning": "যাযাবর দল",
    "synonyms": [
      "Crowd",
      "Multitude",
      "Throng",
      "Pack"
    ],
    "antonyms": [
      "Handful",
      "Few",
      "Individual"
    ],
    "example": "A horde of eager shoppers rushed through the mall doors on sale day."
  },
  "horn": {
    "word": "Horn",
    "pos": "noun",
    "simpleDefinition": "A hard pointed growth on an animal's head, or a brass wind instrument.",
    "banglaMeaning": "শিঙা",
    "synonyms": [
      "Antler",
      "Wind instrument"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The loud horn of the arriving ship echoed across the quiet harbor."
  },
  "host in himself": {
    "word": "Host in himself",
    "pos": "idiom",
    "simpleDefinition": "A person with many skills who can manage everything independently.",
    "banglaMeaning": "একাই একশ; নিজেই সবকিছু",
    "synonyms": [
      "All-rounder",
      "Versatile person",
      "Self-reliant"
    ],
    "antonyms": [
      "Dependent person",
      "Helpless"
    ],
    "example": "The resourceful technician was truly a host in himself on the expedition."
  },
  "hostile": {
    "word": "Hostile",
    "pos": "adjective",
    "simpleDefinition": "Showing or feeling active opposition or unfriendliness",
    "banglaMeaning": "শত্রুভাবাপন্ন / প্রতিকূল / প্রতিকূল / বিরোধী",
    "synonyms": [
      "Unfriendly",
      "Aggressive",
      "Antagonistic"
    ],
    "antonyms": [
      "Friendly",
      "Amicable",
      "Welcoming"
    ],
    "example": "The hostile environment made negotiation impossible."
  },
  "humble": {
    "word": "Humble",
    "pos": "adjective",
    "simpleDefinition": "Having or showing a modest estimate of one's own importance; not proud.",
    "banglaMeaning": "বিনীত",
    "synonyms": [
      "Modest",
      "Meek",
      "Unassuming",
      "Respectful"
    ],
    "antonyms": [
      "Arrogant",
      "Proud",
      "Haughty"
    ],
    "example": "Despite winning the grand prize, she remained remarkably humble."
  },
  "humidity": {
    "word": "Humidity",
    "pos": "noun",
    "simpleDefinition": "The state or degree of moisture and dampness present in the air.",
    "banglaMeaning": "আর্দ্রতা",
    "synonyms": [
      "Moisture",
      "Dampness",
      "Wetness",
      "Mugginess"
    ],
    "antonyms": [
      "Dryness",
      "Aridity"
    ],
    "example": "The high humidity made the tropical afternoon feel uncomfortably hot."
  },
  "hyperbolic": {
    "word": "Hyperbolic",
    "pos": "adjective",
    "simpleDefinition": "Deliberately exaggerated, or relating to a geometric hyperbola.",
    "banglaMeaning": "অতিরঞ্জিত করে বলা",
    "synonyms": [
      "Exaggerated",
      "Overstated",
      "Inflated",
      "Magnified"
    ],
    "antonyms": [
      "Understated",
      "Literal",
      "Modest"
    ],
    "example": "The review was filled with hyperbolic praise about the new smartphone."
  },
  "hypocrite": {
    "word": "Hypocrite",
    "pos": "noun",
    "simpleDefinition": "A person who claims to have moral standards or beliefs to which their behavior does not conform.",
    "banglaMeaning": "ভণ্ড / কপট ব্যক্তি",
    "synonyms": [
      "Deceiver",
      "Pretender",
      "Fraud",
      "Fake"
    ],
    "antonyms": [
      "Honest person",
      "Sincere person"
    ],
    "example": "He is a hypocrite who preaches healthy eating while secretly gorging on junk food."
  },
  "hypothetical": {
    "word": "Hypothetical",
    "pos": "adjective",
    "simpleDefinition": "Based on an assumption or imagined situation rather than factual evidence.",
    "banglaMeaning": "অনুমান কৃত / প্রকল্পিত",
    "synonyms": [
      "Theoretical",
      "Supposed",
      "Assumed",
      "Imaginary"
    ],
    "antonyms": [
      "Actual",
      "Real",
      "Factual"
    ],
    "example": "The lawyer gave a hypothetical example to explain the complex legal concept."
  },
  "idealistic": {
    "word": "Idealistic",
    "pos": "adjective",
    "simpleDefinition": "Believing in high moral principles or ideals, sometimes unrealistically.",
    "banglaMeaning": "আদর্শবাদী",
    "synonyms": [
      "Visionary",
      "Utopian",
      "Noble",
      "Optimistic"
    ],
    "antonyms": [
      "Pragmatic",
      "Realistic",
      "Cynical"
    ],
    "example": "Her idealistic vision inspired the team to work toward cleaner cities."
  },
  "identical": {
    "word": "Identical",
    "pos": "adjective",
    "simpleDefinition": "Exactly the same in appearance, character, or quality.",
    "banglaMeaning": "সমজাতীয়",
    "synonyms": [
      "Same",
      "Duplicate",
      "Matching",
      "Equal"
    ],
    "antonyms": [
      "Different",
      "Distinct",
      "Dissimilar"
    ],
    "example": "The twins wore identical blue dresses to the school party."
  },
  "idolatrous": {
    "word": "Idolatrous",
    "pos": "adjective",
    "simpleDefinition": "Worshiping idols or showing excessive admiration and devotion to something.",
    "banglaMeaning": "পরম ভক্তিশীল",
    "synonyms": [
      "Worshipful",
      "Adoring",
      "Reverential",
      "Devoted"
    ],
    "antonyms": [
      "Iconoclastic",
      "Critical",
      "Disrespectful"
    ],
    "example": "Their idolatrous obsession with celebrity culture distorted their values."
  },
  "idyllic": {
    "word": "Idyllic",
    "pos": "adjective",
    "simpleDefinition": "Extremely pleasant, peaceful, and picturesque, especially in a rural setting.",
    "banglaMeaning": "শান্ত",
    "synonyms": [
      "Peaceful",
      "Serene",
      "Picturesque",
      "Pastoral"
    ],
    "antonyms": [
      "Chaotic",
      "Stressful",
      "Troubled"
    ],
    "example": "They spent their summer holiday in an idyllic mountain cottage."
  },
  "illusive": {
    "word": "Illusive",
    "pos": "adjective",
    "simpleDefinition": "Deceptive, misleading, or giving an illusion of reality that does not exist.",
    "banglaMeaning": "মায়াময়",
    "synonyms": [
      "Illusory",
      "Deceptive",
      "Misleading",
      "Fleeting"
    ],
    "antonyms": [
      "Real",
      "Genuine",
      "Tangible"
    ],
    "example": "Lasting peace in the region proved to be an illusive dream."
  },
  "imbecile": {
    "word": "Imbecile",
    "pos": "noun",
    "simpleDefinition": "A foolish, stupid, or silly person.",
    "banglaMeaning": "বোকা জাতীয়",
    "synonyms": [
      "Fool",
      "Idiot",
      "Dolt",
      "Dunce"
    ],
    "antonyms": [
      "Genius",
      "Intellectual"
    ],
    "example": "He felt like an imbecile when he realized he forgot his passport."
  },
  "imbecility": {
    "word": "Imbecility",
    "pos": "noun",
    "simpleDefinition": "Extreme foolishness, stupidity, or senseless behavior.",
    "banglaMeaning": "মূখর্তা",
    "synonyms": [
      "Stupidity",
      "Folly",
      "Foolishness",
      "Absurdity"
    ],
    "antonyms": [
      "Wisdom",
      "Intelligence",
      "Prudence"
    ],
    "example": "The imbecility of driving at high speed in dense fog shocked everyone."
  },
  "immigrant": {
    "word": "Immigrant",
    "pos": "noun",
    "simpleDefinition": "A person who comes to live permanently in a foreign country.",
    "banglaMeaning": "অভিবাসী",
    "synonyms": [
      "Settler",
      "Newcomer",
      "Migrant"
    ],
    "antonyms": [
      "Native",
      "Emigrant"
    ],
    "example": "Her grandparents were immigrants who built a new life in the country."
  },
  "impair": {
    "word": "Impair",
    "pos": "verb",
    "simpleDefinition": "To weaken, damage, or diminish the strength or quality of something.",
    "banglaMeaning": "দুর্বল করা",
    "synonyms": [
      "Damage",
      "Weaken",
      "Harm",
      "Diminish"
    ],
    "antonyms": [
      "Improve",
      "Enhance",
      "Strengthen"
    ],
    "example": "Listening to music at excessive volume can permanently impair your hearing."
  },
  "impeccable": {
    "word": "Impeccable",
    "pos": "adjective",
    "simpleDefinition": "In accordance with the highest standards; free from fault",
    "banglaMeaning": "ত্রুটিহীন / নিখুঁত",
    "synonyms": [
      "Perfect",
      "Flawless",
      "Blameless"
    ],
    "antonyms": [
      "Imperfect",
      "Flawed",
      "Faulty"
    ],
    "example": "Her presentation was absolutely impeccable."
  },
  "impede": {
    "word": "Impede",
    "pos": "verb",
    "simpleDefinition": "To delay or prevent someone or something by obstructing them",
    "banglaMeaning": "বাধা দেওয়া / বিঘ্ন সৃষ্টি করা / ব্যাহত করা",
    "synonyms": [
      "Hinder",
      "Obstruct",
      "Block"
    ],
    "antonyms": [
      "Aid",
      "Assist",
      "Facilitate"
    ],
    "example": "Lack of funds impeded the development project."
  },
  "impel": {
    "word": "Impel",
    "pos": "verb",
    "simpleDefinition": "To drive, force, or strongly urge someone to take a specific action.",
    "banglaMeaning": "অনুপ্রাণিত করা",
    "synonyms": [
      "Drive",
      "Urge",
      "Motivate",
      "Prompt"
    ],
    "antonyms": [
      "Deter",
      "Discourage",
      "Hinder"
    ],
    "example": "A strong sense of duty impelled the officer to rescue the trapped family."
  },
  "impertinence": {
    "word": "Impertinence",
    "pos": "noun",
    "simpleDefinition": "Lack of respect or rude insolence towards someone who deserves deference.",
    "banglaMeaning": "অপ্রাসঙ্গিকতা",
    "synonyms": [
      "Insolence",
      "Rudeness",
      "Impudence",
      "Disrespect"
    ],
    "antonyms": [
      "Politeness",
      "Respect",
      "Courtesy"
    ],
    "example": "The strict headmaster would not tolerate any impertinence from students."
  },
  "impertinent": {
    "word": "Impertinent",
    "pos": "adjective",
    "simpleDefinition": "Not showing proper respect; rude or irrelevant",
    "banglaMeaning": "অপ্রাসঙ্গিক / বেয়াদব / ধৃষ্ট",
    "synonyms": [
      "Rude",
      "Insolent",
      "Impudent"
    ],
    "antonyms": [
      "Polite",
      "Respectful",
      "Relevant"
    ],
    "example": "The impertinent student interrupted the teacher rudely."
  },
  "impetuous": {
    "word": "Impetuous",
    "pos": "adjective",
    "simpleDefinition": "Acting or done quickly and rashly without thought or care",
    "banglaMeaning": "হঠকারী / আবেগপ্রবণ",
    "synonyms": [
      "Impulsive",
      "Rash",
      "Hasty"
    ],
    "antonyms": [
      "Calm",
      "Deliberate",
      "Cautious"
    ],
    "example": "His impetuous decision cost the company millions."
  },
  "impetus": {
    "word": "Impetus",
    "pos": "noun",
    "simpleDefinition": "The force or energy with which a body moves, or something that makes a process happen faster.",
    "banglaMeaning": "চালিকাশক্তি; গতিবেগ; প্রেরণা",
    "synonyms": [
      "Momentum",
      "Driving force",
      "Impulse",
      "Stimulus"
    ],
    "antonyms": [
      "Hindrance",
      "Deterrent",
      "Obstacle"
    ],
    "example": "The government research grant provided the impetus for new discoveries."
  },
  "impinge": {
    "word": "Impinge",
    "pos": "verb",
    "simpleDefinition": "To have an effect or impact, especially a negative one, or encroach upon.",
    "banglaMeaning": "আঘাত হানা",
    "synonyms": [
      "Encroach",
      "Intrude",
      "Impact",
      "Infringe"
    ],
    "antonyms": [
      "Respect",
      "Avoid",
      "Leave alone"
    ],
    "example": "Unfair regulations began to impinge on the freedom of local business owners."
  },
  "implacable": {
    "word": "Implacable",
    "pos": "adjective",
    "simpleDefinition": "Unable to be calmed, appeased, or stopped; relentlessly unyielding.",
    "banglaMeaning": "নির্দয় / ক্ষমাশীল",
    "synonyms": [
      "Relentless",
      "Unyielding",
      "Unforgiving",
      "Grim"
    ],
    "antonyms": [
      "Forgiving",
      "Merciful",
      "Pliable"
    ],
    "example": "The implacable rival refused all offers to resolve the dispute peacefully."
  },
  "implicit": {
    "word": "Implicit",
    "pos": "adjective",
    "simpleDefinition": "Suggested though not directly expressed",
    "banglaMeaning": "অন্তর্নিহিত / প্রত্যক্ষ নয় এমন",
    "synonyms": [
      "Implied",
      "Unstated",
      "Indirect"
    ],
    "antonyms": [
      "Explicit",
      "Direct",
      "Clear"
    ],
    "example": "There was implicit agreement among the team members."
  },
  "impostor": {
    "word": "Impostor",
    "pos": "noun",
    "simpleDefinition": "A person who pretends to be someone else in order to deceive others.",
    "banglaMeaning": "ভণ্ড / প্রতারক",
    "synonyms": [
      "Fraud",
      "Pretender",
      "Deceiver",
      "Fake"
    ],
    "antonyms": [
      "Authentic person"
    ],
    "example": "The man was arrested when the hospital discovered he was an impostor."
  },
  "imprison": {
    "word": "Imprison",
    "pos": "verb",
    "simpleDefinition": "To put someone in prison or confine them against their will.",
    "banglaMeaning": "শৃঙ্খলিত করা / কারারুদ্ধ করা",
    "synonyms": [
      "Incarcerate",
      "Jail",
      "Confine",
      "Detain"
    ],
    "antonyms": [
      "Release",
      "Free",
      "Liberate"
    ],
    "example": "The court decided to imprison the criminal for five years."
  },
  "imprudent": {
    "word": "Imprudent",
    "pos": "adjective",
    "simpleDefinition": "Not showing care for the consequences of an action; rash and unwise.",
    "banglaMeaning": "অবিবেচক",
    "synonyms": [
      "Unwise",
      "Rash",
      "Careless",
      "Reckless"
    ],
    "antonyms": [
      "Prudent",
      "Wise",
      "Cautious"
    ],
    "example": "It is imprudent to invest all your savings in a single unproven venture."
  },
  "impulsive": {
    "word": "Impulsive",
    "pos": "adjective",
    "simpleDefinition": "Acting or done suddenly without thinking about the consequences.",
    "banglaMeaning": "আবেগপ্রবণ",
    "synonyms": [
      "Spontaneous",
      "Hasty",
      "Rash",
      "Impulsive"
    ],
    "antonyms": [
      "Cautious",
      "Deliberate",
      "Premeditated"
    ],
    "example": "His impulsive decision to quit his job surprised all his coworkers."
  },
  "impute": {
    "word": "Impute",
    "pos": "verb",
    "simpleDefinition": "To attribute or ascribe something (usually an error or fault) to someone.",
    "banglaMeaning": "আরোপ করা",
    "synonyms": [
      "Attribute",
      "Ascribe",
      "Assign",
      "Credit"
    ],
    "antonyms": [
      "Absolve",
      "Exonerate"
    ],
    "example": "They attempted to impute the project failure entirely to bad leadership."
  },
  "in deep water": {
    "word": "In deep water",
    "pos": "idiom",
    "simpleDefinition": "In a very difficult, stressful, or dangerous situation with serious trouble.",
    "banglaMeaning": "বিপদে থাকা",
    "synonyms": [
      "In trouble",
      "In distress",
      "In hot water"
    ],
    "antonyms": [
      "Safe",
      "Out of danger"
    ],
    "example": "The company will be in deep water if it fails to pay back the bank loan."
  },
  "inadvertent": {
    "word": "Inadvertent",
    "pos": "adjective",
    "simpleDefinition": "Not resulting from intentional planning; accidental",
    "banglaMeaning": "অনিচ্ছাকৃত / অনবধানতাবশত / অনিজ্ঞাকৃত",
    "synonyms": [
      "Accidental",
      "Unintentional",
      "Careless"
    ],
    "antonyms": [
      "Deliberate",
      "Intentional",
      "Planned"
    ],
    "example": "An inadvertent mistake in the report caused confusion."
  },
  "inamorata": {
    "word": "Inamorata",
    "pos": "noun",
    "simpleDefinition": "A woman with whom someone is deeply in love; a female sweetheart.",
    "banglaMeaning": "প্রেমিকা",
    "synonyms": [
      "Sweetheart",
      "Beloved",
      "Lover",
      "Darling"
    ],
    "antonyms": [
      "Enemy"
    ],
    "example": "The poet dedicated his most heartfelt sonnets to his secret inamorata."
  },
  "inaudible": {
    "word": "Inaudible",
    "pos": "adjective",
    "simpleDefinition": "Unable to be heard because the sound is too soft or quiet.",
    "banglaMeaning": "যা শোনা যায় না",
    "synonyms": [
      "Silent",
      "Faint",
      "Unheard",
      "Muffled"
    ],
    "antonyms": [
      "Audible",
      "Loud",
      "Clear"
    ],
    "example": "Her voice was almost inaudible above the roar of the waterfall."
  },
  "inauspicious": {
    "word": "Inauspicious",
    "pos": "adjective",
    "simpleDefinition": "Not conducive to success; suggesting that bad luck will follow.",
    "banglaMeaning": "অশুভ / অকল্যাণসূচক",
    "synonyms": [
      "Unfavorable",
      "Unpromising",
      "Ominous",
      "Unlucky"
    ],
    "antonyms": [
      "Auspicious",
      "Promising",
      "Favorable"
    ],
    "example": "A sudden thunderstorm proved to be an inauspicious start to their hike."
  },
  "incapacitate": {
    "word": "Incapacitate",
    "pos": "verb",
    "simpleDefinition": "To deprive someone of strength, ability, or power; make unable to function.",
    "banglaMeaning": "অযোগ্য করা",
    "synonyms": [
      "Disable",
      "Paralyze",
      "Weaken",
      "Cripple"
    ],
    "antonyms": [
      "Enable",
      "Empower",
      "Strengthen"
    ],
    "example": "A serious back injury incapacitated the worker for three weeks."
  },
  "incautious": {
    "word": "Incautious",
    "pos": "adjective",
    "simpleDefinition": "Heedless of danger or risk; not cautious and careless.",
    "banglaMeaning": "অবিবেচক",
    "synonyms": [
      "Careless",
      "Rash",
      "Unwary",
      "Reckless"
    ],
    "antonyms": [
      "Cautious",
      "Careful",
      "Vigilant"
    ],
    "example": "An incautious word during the negotiation offended the foreign delegates."
  },
  "incite": {
    "word": "Incite",
    "pos": "verb",
    "simpleDefinition": "To encourage or stir up violent or unlawful behavior",
    "banglaMeaning": "উসকে দেওয়া / প্ররোচিত করা / উৎসাহিত করা",
    "synonyms": [
      "Provoke",
      "Stir up",
      "Instigate"
    ],
    "antonyms": [
      "Calm",
      "Pacify",
      "Discourage"
    ],
    "example": "The hate speech was designed to incite violence."
  },
  "inclusive": {
    "word": "Inclusive",
    "pos": "adjective",
    "simpleDefinition": "Including all the expected services, items, or types of people.",
    "banglaMeaning": "অন্তভুর্ক্তিমূলক",
    "synonyms": [
      "Comprehensive",
      "All-embracing",
      "Broad",
      "Complete"
    ],
    "antonyms": [
      "Exclusive",
      "Selective",
      "Narrow"
    ],
    "example": "The resort offers an inclusive package covering room, meals, and sports."
  },
  "incongruous": {
    "word": "Incongruous",
    "pos": "adjective",
    "simpleDefinition": "Not in harmony or keeping with the surroundings or other aspects of something.",
    "banglaMeaning": "বেমানান",
    "synonyms": [
      "Out of place",
      "Mismatched",
      "Inappropriate",
      "Jarring"
    ],
    "antonyms": [
      "Harmonious",
      "Fitting",
      "Compatible"
    ],
    "example": "A concrete high-rise looks incongruous among historic stone cottages."
  },
  "inconsiderate": {
    "word": "Inconsiderate",
    "pos": "adjective",
    "simpleDefinition": "Thoughtlessly causing harm or inconvenience to others.",
    "banglaMeaning": "অবিবেচক",
    "synonyms": [
      "Thoughtless",
      "Selfish",
      "Unkind",
      "Tactless"
    ],
    "antonyms": [
      "Considerate",
      "Thoughtful",
      "Polite"
    ],
    "example": "Playing loud video games while others are sleeping is very inconsiderate."
  },
  "inculcate": {
    "word": "Inculcate",
    "pos": "verb",
    "simpleDefinition": "To instill an attitude, idea, or habit by persistent instruction or repetition.",
    "banglaMeaning": "চিত্তনিষ্ঠ",
    "synonyms": [
      "Instill",
      "Teach",
      "Impart",
      "Infuse"
    ],
    "antonyms": [
      "Erase",
      "Neglect",
      "Remove"
    ],
    "example": "Good teachers try to inculcate respect and curiosity in their pupils."
  },
  "indebted": {
    "word": "Indebted",
    "pos": "adjective",
    "simpleDefinition": "Owing gratitude or money to someone who has helped you.",
    "banglaMeaning": "ঋণী,বাধিত; কৃতজ্ঞ",
    "synonyms": [
      "Grateful",
      "Obligated",
      "Beholden",
      "Thankful"
    ],
    "antonyms": [
      "Unindebted",
      "Ungrateful"
    ],
    "example": "I am deeply indebted to my doctor for her dedication during my recovery."
  },
  "indelible": {
    "word": "Indelible",
    "pos": "adjective",
    "simpleDefinition": "Making marks that cannot be removed, or leaving a permanent impression.",
    "banglaMeaning": "অমোচনীয়",
    "synonyms": [
      "Permanent",
      "Unforgettable",
      "Enduring",
      "Lasting"
    ],
    "antonyms": [
      "Erasable",
      "Temporary",
      "Fleeting"
    ],
    "example": "Her heroic act left an indelible impression on the whole community."
  },
  "indict": {
    "word": "Indict",
    "pos": "verb",
    "simpleDefinition": "To formally charge or accuse someone with a serious crime in a court of law.",
    "banglaMeaning": "অভিযুক্ত করা",
    "synonyms": [
      "Charge",
      "Accuse",
      "Prosecute",
      "Arraign"
    ],
    "antonyms": [
      "Acquit",
      "Exonerate",
      "Absolve"
    ],
    "example": "The grand jury decided to indict the corporate executive for bribery."
  },
  "indictment": {
    "word": "Indictment",
    "pos": "noun",
    "simpleDefinition": "A formal charge or accusation of a serious crime, or a sign of severe problems.",
    "banglaMeaning": "অভিযোগ",
    "synonyms": [
      "Accusation",
      "Charge",
      "Prosecution",
      "Summons"
    ],
    "antonyms": [
      "Acquittal",
      "Exoneration"
    ],
    "example": "The harsh investigative report was an indictment of the prison system."
  },
  "indifferent": {
    "word": "Indifferent",
    "pos": "adjective",
    "simpleDefinition": "Having no particular interest or sympathy; unconcerned",
    "banglaMeaning": "উদাসীন / নির্লিপ্ত",
    "synonyms": [
      "Apathetic",
      "Uninterested",
      "Unconcerned"
    ],
    "antonyms": [
      "Interested",
      "Enthusiastic",
      "Passionate"
    ],
    "example": "She was indifferent to the outcome of the election."
  },
  "indigent": {
    "word": "Indigent",
    "pos": "adjective",
    "simpleDefinition": "Extremely poor, needy, and lacking the basic necessities of life.",
    "banglaMeaning": "অত্যন্ত গরীব",
    "synonyms": [
      "Impoverished",
      "Destitute",
      "Needy",
      "Penniless"
    ],
    "antonyms": [
      "Wealthy",
      "Affluent",
      "Rich"
    ],
    "example": "The free legal clinic assists indigent defendants who cannot afford a lawyer."
  },
  "indispensable": {
    "word": "Indispensable",
    "pos": "adjective",
    "simpleDefinition": "Absolutely necessary and impossible to be without.",
    "banglaMeaning": "অপরিহার্য",
    "synonyms": [
      "Essential",
      "Crucial",
      "Vital",
      "Necessary"
    ],
    "antonyms": [
      "Dispensable",
      "Optional",
      "Superfluous"
    ],
    "example": "A reliable internet connection has become indispensable for remote workers."
  },
  "indolent": {
    "word": "Indolent",
    "pos": "adjective",
    "simpleDefinition": "Wanting to avoid activity or work; lazy",
    "banglaMeaning": "অলস / নিষ্ক্রিয়",
    "synonyms": [
      "Lazy",
      "Idle",
      "Slothful"
    ],
    "antonyms": [
      "Industrious",
      "Hardworking",
      "The"
    ],
    "example": "indolent worker was always the last to Primary Teacher Recruitment (2020)"
  },
  "indulgent": {
    "word": "Indulgent",
    "pos": "adjective",
    "simpleDefinition": "Having or showing a readiness to be lenient and overly generous.",
    "banglaMeaning": "প্রশ্রয়পূর্ণ; নমনীয়; অতিরিক্ত ছাড় দেওয়া",
    "synonyms": [
      "Lenient",
      "Permissive",
      "Tolerant",
      "Forgiving"
    ],
    "antonyms": [
      "Strict",
      "Stern",
      "Severe"
    ],
    "example": "Her indulgent father bought her whatever new gadget she asked for."
  },
  "inebriated": {
    "word": "Inebriated",
    "pos": "adjective",
    "simpleDefinition": "Drunk or intoxicated after consuming alcoholic beverages.",
    "banglaMeaning": "মদ্যপ",
    "synonyms": [
      "Drunk",
      "Intoxicated",
      "Tipsy"
    ],
    "antonyms": [
      "Sober"
    ],
    "example": "The police prevented an inebriated driver from operating his car."
  },
  "inertia": {
    "word": "Inertia",
    "pos": "noun",
    "simpleDefinition": "A tendency to do nothing or remain unchanged, or the resistance of an object to change motion.",
    "banglaMeaning": "জড়তা",
    "synonyms": [
      "Inactivity",
      "Sluggishness",
      "Lethargy",
      "Apathy"
    ],
    "antonyms": [
      "Activity",
      "Action",
      "Dynamism"
    ],
    "example": "Bureaucratic inertia prevented the urgent relief funds from reaching families quickly."
  },
  "inevitable": {
    "word": "Inevitable",
    "pos": "adjective",
    "simpleDefinition": "Certain to happen and impossible to prevent",
    "banglaMeaning": "অনিবার্য / অবশ্যম্ভাবী",
    "synonyms": [
      "Unavoidable",
      "Certain",
      "Inescapable"
    ],
    "antonyms": [
      "Avoidable",
      "Preventable",
      "Uncertain"
    ],
    "example": "Change is inevitable in any growing organization."
  },
  "inexplicable": {
    "word": "Inexplicable",
    "pos": "adjective",
    "simpleDefinition": "Unable to be explained or accounted for; baffling.",
    "banglaMeaning": "বর্ণনাতীত",
    "synonyms": [
      "Baffling",
      "Mysterious",
      "Unaccountable",
      "Puzzling"
    ],
    "antonyms": [
      "Explicable",
      "Understandable",
      "Clear"
    ],
    "example": "His sudden change of mind remained completely inexplicable to his friends."
  },
  "infallible": {
    "word": "Infallible",
    "pos": "adjective",
    "simpleDefinition": "Incapable of making mistakes or being wrong",
    "banglaMeaning": "অভ্রান্ত / নির্ভুল",
    "synonyms": [
      "Perfect",
      "Flawless",
      "Unerring"
    ],
    "antonyms": [
      "Fallible",
      "Imperfect",
      "Unreliable"
    ],
    "example": "No human being is infallible in every decision."
  },
  "inflated": {
    "word": "Inflated",
    "pos": "adjective",
    "simpleDefinition": "Distended with air or gas, or exaggerated and excessively high.",
    "banglaMeaning": "অত্যধিক",
    "synonyms": [
      "Exaggerated",
      "Bloated",
      "Excessive",
      "Puffed"
    ],
    "antonyms": [
      "Deflated",
      "Modest",
      "Reasonable"
    ],
    "example": "Tourists were shocked by the inflated prices charged at the souvenir shop."
  },
  "influence": {
    "word": "Influence",
    "pos": "noun",
    "simpleDefinition": "The capacity to have an effect on the character, development, or behavior of someone or something.",
    "banglaMeaning": "প্রভাব",
    "synonyms": [
      "Impact",
      "Sway",
      "Power",
      "Control"
    ],
    "antonyms": [
      "Helplessness",
      "Weakness"
    ],
    "example": "A teacher's guidance can exert a lasting positive influence on young students."
  },
  "infrared": {
    "word": "Infrared",
    "pos": "adjective",
    "simpleDefinition": "Relating to electromagnetic radiation with wavelengths longer than visible red light but shorter than microwaves.",
    "banglaMeaning": "অবলোহিত",
    "synonyms": [
      "Thermal",
      "Radiant",
      "Invisible wave"
    ],
    "antonyms": [
      "Ultraviolet"
    ],
    "example": "Firefighters used infrared cameras to locate survivors trapped in the smoke."
  },
  "infuriate": {
    "word": "Infuriate",
    "pos": "verb",
    "simpleDefinition": "To make someone extremely angry and outraged.",
    "banglaMeaning": "ক্রোধে ক্ষিপ্ত হওয়া",
    "synonyms": [
      "Enrage",
      "Incense",
      "Anger",
      "Provoke"
    ],
    "antonyms": [
      "Pacify",
      "Soothe",
      "Calm"
    ],
    "example": "Repeated train cancellations infuriate passengers on their daily commute."
  },
  "ingenious": {
    "word": "Ingenious",
    "pos": "adjective",
    "simpleDefinition": "Clever, original, and inventive in finding solutions",
    "banglaMeaning": "প্রতিভাবান / উদ্ভাবনী ক্ষমতাসম্পন্ন",
    "synonyms": [
      "Clever",
      "Creative",
      "Inventive"
    ],
    "antonyms": [
      "Dull",
      "Unimaginative",
      "Stupid"
    ],
    "example": "The engineer found an ingenious solution to the problem."
  },
  "ingenuous": {
    "word": "Ingenuous",
    "pos": "adjective",
    "simpleDefinition": "Innocent, unsuspecting, and openly honest without deceit.",
    "banglaMeaning": "অকপট",
    "synonyms": [
      "Naive",
      "Innocent",
      "Candid",
      "Frank"
    ],
    "antonyms": [
      "Disingenuous",
      "Cunning",
      "Deceitful"
    ],
    "example": "Her ingenuous smile showed that she bore no ill feelings toward anyone."
  },
  "ingest": {
    "word": "Ingest",
    "pos": "verb",
    "simpleDefinition": "To take food, liquid, or other substances into the body by swallowing or absorbing.",
    "banglaMeaning": "গলাধঃকরণ করা",
    "synonyms": [
      "Swallow",
      "Consume",
      "Eat",
      "Absorb"
    ],
    "antonyms": [
      "Regurgitate",
      "Expel"
    ],
    "example": "Small children must be closely watched so they do not ingest tiny objects."
  },
  "inherent": {
    "word": "Inherent",
    "pos": "adjective",
    "simpleDefinition": "Existing in something as a permanent, essential, or characteristic attribute.",
    "banglaMeaning": "স্বাভাবিক",
    "synonyms": [
      "Intrinsic",
      "Innate",
      "Essential",
      "Natural"
    ],
    "antonyms": [
      "Extrinsic",
      "Acquired",
      "External"
    ],
    "example": "Every challenging adventure carries an inherent degree of physical risk."
  },
  "inimical": {
    "word": "Inimical",
    "pos": "adjective",
    "simpleDefinition": "Tending to obstruct or harm; hostile or unfriendly",
    "banglaMeaning": "ক্ষতিকর / প্রতিকূল / শথভাবাপন্ন",
    "synonyms": [
      "Hostile",
      "Harmful",
      "Unfriendly"
    ],
    "antonyms": [
      "Friendly",
      "Beneficial",
      "Helpful"
    ],
    "example": "Pollution is inimical to public health."
  },
  "initiate": {
    "word": "Initiate",
    "pos": "verb",
    "simpleDefinition": "To cause a process or action to begin.",
    "banglaMeaning": "সূচনা করা",
    "synonyms": [
      "Start",
      "Begin",
      "Launch",
      "Commence"
    ],
    "antonyms": [
      "End",
      "Terminate",
      "Halt"
    ],
    "example": "The government will initiate a new vaccination campaign next Monday."
  },
  "innate": {
    "word": "Innate",
    "pos": "adjective",
    "simpleDefinition": "Inborn, natural, and existing from birth",
    "banglaMeaning": "সহজাত / জন্মগত",
    "synonyms": [
      "Inborn",
      "Natural",
      "Inherent"
    ],
    "antonyms": [
      "Acquired",
      "Learned",
      "Developed"
    ],
    "example": "She had an innate talent for mathematics."
  },
  "innovate": {
    "word": "Innovate",
    "pos": "verb",
    "simpleDefinition": "To introduce new ideas, methods, or original products.",
    "banglaMeaning": "নতুন কিছু প্রবর্তন করা; উদ্ভাবন করা",
    "synonyms": [
      "Pioneer",
      "Create",
      "Modernize",
      "Invent"
    ],
    "antonyms": [
      "Stagnate",
      "Copy"
    ],
    "example": "Companies must continuously innovate to survive in the competitive tech market."
  },
  "inquisitive": {
    "word": "Inquisitive",
    "pos": "adjective",
    "simpleDefinition": "Curious and eager to investigate or inquire about things.",
    "banglaMeaning": "সন্ধানী",
    "synonyms": [
      "Curious",
      "Inquiring",
      "Probing",
      "Interested"
    ],
    "antonyms": [
      "Indifferent",
      "Uninterested",
      "Incurious"
    ],
    "example": "The inquisitive young girl examined every insect she found in the garden."
  },
  "inscribe": {
    "word": "Inscribe",
    "pos": "verb",
    "simpleDefinition": "To write or carve words or symbols on a surface or in a book.",
    "banglaMeaning": "অন্তলির্খিত",
    "synonyms": [
      "Engrave",
      "Carve",
      "Etch",
      "Write"
    ],
    "antonyms": [
      "Erase",
      "Efface"
    ],
    "example": "The author kindly offered to inscribe a short note inside my book."
  },
  "insectivorous": {
    "word": "Insectivorous",
    "pos": "adjective",
    "simpleDefinition": "Feeding mainly or entirely on insects.",
    "banglaMeaning": "পতঙ্গভুক",
    "synonyms": [
      "Insect-eating",
      "Carnivorous"
    ],
    "antonyms": [
      "Herbivorous"
    ],
    "example": "Bats and swifts are insectivorous creatures that keep mosquito populations down."
  },
  "insidious": {
    "word": "Insidious",
    "pos": "adjective",
    "simpleDefinition": "Proceeding in a subtle way but having harmful consequences",
    "banglaMeaning": "গুপ্তঘাতী / ধূর্ত",
    "synonyms": [
      "Deceptive",
      "Treacherous",
      "Cunning"
    ],
    "antonyms": [
      "Straightforward",
      "Harmless",
      "Honest"
    ],
    "example": "Drug addiction is an insidious threat to young people."
  },
  "insolent": {
    "word": "Insolent",
    "pos": "adjective",
    "simpleDefinition": "Rude, disrespectful, and insulting",
    "banglaMeaning": "বেয়াদব / ধৃষ্ট / অপমানজনক",
    "synonyms": [
      "Rude",
      "Impertinent",
      "Impudent"
    ],
    "antonyms": [
      "Polite",
      "Respectful",
      "Courteous"
    ],
    "example": "The insolent student was suspended from school."
  },
  "insouciance": {
    "word": "Insouciance",
    "pos": "noun",
    "simpleDefinition": "A relaxed, casual lack of concern or carefree nonchalance.",
    "banglaMeaning": "ঔদাসীন্য",
    "synonyms": [
      "Nonchalance",
      "Carefreeness",
      "Indifference",
      "Lightheartedness"
    ],
    "antonyms": [
      "Anxiety",
      "Worry",
      "Concern"
    ],
    "example": "He faced his final college examinations with surprising ease and insouciance."
  },
  "instability": {
    "word": "Instability",
    "pos": "noun",
    "simpleDefinition": "The state of being unstable, unpredictable, or liable to fail.",
    "banglaMeaning": "অস্থায়ীধ",
    "synonyms": [
      "Unsteadiness",
      "Volatility",
      "Insecurity",
      "Fragility"
    ],
    "antonyms": [
      "Stability",
      "Steadiness",
      "Security"
    ],
    "example": "Economic instability made it challenging for small businesses to obtain loans."
  },
  "instigation": {
    "word": "Instigation",
    "pos": "noun",
    "simpleDefinition": "The act of inciting or provoking someone to do something, often something bad.",
    "banglaMeaning": "উত্তেজনা",
    "synonyms": [
      "Incitement",
      "Provocation",
      "Prompting",
      "Urging"
    ],
    "antonyms": [
      "Dissuasion",
      "Prevention"
    ],
    "example": "The unruly protest erupted at the instigation of an extremist faction."
  },
  "intake": {
    "word": "Intake",
    "pos": "noun",
    "simpleDefinition": "An amount of food, air, liquid, or other substance taken into the body or a system.",
    "banglaMeaning": "পানাহার",
    "synonyms": [
      "Consumption",
      "Ingestion",
      "Absorption",
      "Input"
    ],
    "antonyms": [
      "Output",
      "Discharge"
    ],
    "example": "Doctors recommend reducing daily sugar intake to maintain heart health."
  },
  "integral": {
    "word": "Integral",
    "pos": "adjective",
    "simpleDefinition": "Necessary to make a whole complete; essential.",
    "banglaMeaning": "অপরিহার্য অংশ",
    "synonyms": [
      "Essential",
      "Fundamental",
      "Vital",
      "Inherent"
    ],
    "antonyms": [
      "Nonessential",
      "Peripheral",
      "Secondary"
    ],
    "example": "Hands-on laboratory work is an integral component of any chemistry degree."
  },
  "integrity": {
    "word": "Integrity",
    "pos": "noun",
    "simpleDefinition": "The quality of being honest and having strong moral principles",
    "banglaMeaning": "সততা / নীতিপরায়ণতা",
    "synonyms": [
      "Honesty",
      "Uprightness",
      "Virtue"
    ],
    "antonyms": [
      "Dishonesty",
      "Corruption",
      "Immorality"
    ],
    "example": "A civil servant must perform duties with integrity."
  },
  "intellectual": {
    "word": "Intellectual",
    "pos": "adjective",
    "simpleDefinition": "Relating to the intellect, mental reasoning, and objective thinking.",
    "banglaMeaning": "বুদ্ধিবৃত্তিক সংস্কৃতিবান",
    "synonyms": [
      "Mental",
      "Cerebral",
      "Scholarly",
      "Academic"
    ],
    "antonyms": [
      "Physical",
      "Emotional",
      "Thoughtless"
    ],
    "example": "Chess is an intellectual challenge that demands careful forward planning."
  },
  "intense": {
    "word": "Intense",
    "pos": "adjective",
    "simpleDefinition": "Of extreme force, degree, emotion, or strength.",
    "banglaMeaning": "তীব্র; প্রচন্ড",
    "synonyms": [
      "Extreme",
      "Severe",
      "Fierce",
      "Acute"
    ],
    "antonyms": [
      "Mild",
      "Moderate",
      "Weak"
    ],
    "example": "The athletes endured intense heat during the afternoon training session."
  },
  "intentional": {
    "word": "Intentional",
    "pos": "adjective",
    "simpleDefinition": "Done on purpose; deliberate and planned.",
    "banglaMeaning": "ইজ্ঞাকৃতভাবে",
    "synonyms": [
      "Deliberate",
      "Purposeful",
      "Calculated",
      "Willful"
    ],
    "antonyms": [
      "Accidental",
      "Unintentional",
      "Inadvertent"
    ],
    "example": "Her rude remark was clearly intentional and aimed at embarrassing him."
  },
  "interminable": {
    "word": "Interminable",
    "pos": "adjective",
    "simpleDefinition": "Endless or seemingly endless, often in a boring or tiring way.",
    "banglaMeaning": "থামেনা এমন / অন্তহীন",
    "synonyms": [
      "Endless",
      "Ceaseless",
      "Never-ending",
      "Perpetual"
    ],
    "antonyms": [
      "Brief",
      "Short",
      "Finite"
    ],
    "example": "We waited through an interminable flight delay at the crowded airport."
  },
  "intermittent": {
    "word": "Intermittent",
    "pos": "adjective",
    "simpleDefinition": "Occurring at irregular intervals; not continuous or steady.",
    "banglaMeaning": "অনিয়মিতভাবে",
    "synonyms": [
      "Sporadic",
      "Periodic",
      "Irregular",
      "Fitful"
    ],
    "antonyms": [
      "Continuous",
      "Constant",
      "Steady"
    ],
    "example": "Intermittent rain showers disrupted the outdoor tennis championship."
  },
  "interpret": {
    "word": "Interpret",
    "pos": "verb",
    "simpleDefinition": "To explain the meaning of words, actions, or data, or translate between languages.",
    "banglaMeaning": "ব্যাখ্যা করা",
    "synonyms": [
      "Explain",
      "Clarify",
      "Translate",
      "Decipher"
    ],
    "antonyms": [
      "Misinterpret",
      "Confuse",
      "Obscure"
    ],
    "example": "The statistician helped us interpret the complex survey results."
  },
  "interrupt": {
    "word": "Interrupt",
    "pos": "verb",
    "simpleDefinition": "To stop the continuous progress of an activity or break into someone's speech.",
    "banglaMeaning": "ছিন্ন করা / ব্যাঘাত করা",
    "synonyms": [
      "Disrupt",
      "Break in",
      "Disturb",
      "Halt"
    ],
    "antonyms": [
      "Continue",
      "Proceed",
      "Resume"
    ],
    "example": "Please do not interrupt the lecturer while she is presenting the data."
  },
  "intimacy": {
    "word": "Intimacy",
    "pos": "noun",
    "simpleDefinition": "Close familiarity, deep personal connection, or warm friendship.",
    "banglaMeaning": "গভীর সুসম্পর্ক",
    "synonyms": [
      "Closeness",
      "Familiarity",
      "Affection",
      "Warmth"
    ],
    "antonyms": [
      "Distance",
      "Alienation",
      "Coldness"
    ],
    "example": "Years of shared struggles created a deep intimacy between the teammates."
  },
  "intimate": {
    "word": "Intimate",
    "pos": "adjective",
    "simpleDefinition": "Closely acquainted, familiar, or private and personal.",
    "banglaMeaning": "অন্তরঙ্গ",
    "synonyms": [
      "Close",
      "Dear",
      "Personal",
      "Confidential"
    ],
    "antonyms": [
      "Distant",
      "Public",
      "Formal"
    ],
    "example": "Only a few intimate friends gathered for dinner at their modest home."
  },
  "intimidate": {
    "word": "Intimidate",
    "pos": "verb",
    "simpleDefinition": "To frighten or overawe someone, especially in order to make them do what one wants",
    "banglaMeaning": "ভয় দেখানো / তটস্থ করা",
    "synonyms": [
      "Threaten",
      "Frighten",
      "Bully"
    ],
    "antonyms": [
      "Encourage",
      "Comfort",
      "Reassure"
    ],
    "example": "The gang tried to intimidate witnesses before the trial."
  },
  "intolerant": {
    "word": "Intolerant",
    "pos": "adjective",
    "simpleDefinition": "Not willing to accept ways of thinking or behaving that are different from one's own.",
    "banglaMeaning": "অসহনীয়",
    "synonyms": [
      "Bigoted",
      "Narrow-minded",
      "Prejudiced",
      "Inflexible"
    ],
    "antonyms": [
      "Tolerant",
      "Open-minded",
      "Accepting"
    ],
    "example": "A democratic society cannot thrive if people are intolerant of opposing ideas."
  },
  "intoxicated": {
    "word": "Intoxicated",
    "pos": "adjective",
    "simpleDefinition": "Losing control of one's faculties due to alcohol or drugs; drunk.",
    "banglaMeaning": "মদ্যপ",
    "synonyms": [
      "Drunk",
      "Inebriated",
      "Impaired"
    ],
    "antonyms": [
      "Sober"
    ],
    "example": "Driving while intoxicated poses grave danger to pedestrians and motorists."
  },
  "intractable": {
    "word": "Intractable",
    "pos": "adjective",
    "simpleDefinition": "Hard to manage, control, or solve; obstinately stubborn.",
    "banglaMeaning": "অবাধ্য",
    "synonyms": [
      "Stubborn",
      "Unmanageable",
      "Obstinate",
      "Unyielding"
    ],
    "antonyms": [
      "Manageable",
      "Compliant",
      "Docile"
    ],
    "example": "Poverty in the remote mountainous region remained an intractable issue."
  },
  "intrepid": {
    "word": "Intrepid",
    "pos": "adjective",
    "simpleDefinition": "Completely fearless, bold, and courageous",
    "banglaMeaning": "নির্ভীক / অকুতোভয়",
    "synonyms": [
      "Fearless",
      "Dauntless",
      "Bold"
    ],
    "antonyms": [
      "Fearful",
      "Cowardly",
      "Timid"
    ],
    "example": "The intrepid reporter went to cover the war zone."
  },
  "intrinsic": {
    "word": "Intrinsic",
    "pos": "adjective",
    "simpleDefinition": "Belonging naturally to something; essential and inherent.",
    "banglaMeaning": "স্বকীয় / জন্মগত",
    "synonyms": [
      "Inherent",
      "Innate",
      "Essential",
      "Fundamental"
    ],
    "antonyms": [
      "Extrinsic",
      "External",
      "Acquired"
    ],
    "example": "Curiosity is an intrinsic characteristic of every young child."
  },
  "introverted": {
    "word": "Introverted",
    "pos": "adjective",
    "simpleDefinition": "Quiet, reserved, and enjoying solitary activities more than large social gatherings.",
    "banglaMeaning": "অন্তমুর্খী ব্যক্তি (আত্মকেন্দ্রিক চিন্তা চেতনা )",
    "synonyms": [
      "Reserved",
      "Shy",
      "Quiet",
      "Introspective"
    ],
    "antonyms": [
      "Extroverted",
      "Outgoing",
      "Sociable"
    ],
    "example": "An introverted artist often finds creative inspiration during hours of solitude."
  },
  "inundate": {
    "word": "Inundate",
    "pos": "verb",
    "simpleDefinition": "To flood with water, or overwhelm someone with a huge volume of things.",
    "banglaMeaning": "প্লাবিত হওয়া",
    "synonyms": [
      "Overwhelm",
      "Flood",
      "Swamp",
      "Submerge"
    ],
    "antonyms": [
      "Drain",
      "Deplete"
    ],
    "example": "Customers began to inundate customer support with inquiries during the sale."
  },
  "inveigle": {
    "word": "Inveigle",
    "pos": "verb",
    "simpleDefinition": "To persuade someone to do something through deception, cunning, or flattery.",
    "banglaMeaning": "চাটুকারিতায় মুগ্ধ করা",
    "synonyms": [
      "Entice",
      "Cajole",
      "Coax",
      "Wheedle"
    ],
    "antonyms": [
      "Dissuade",
      "Force"
    ],
    "example": "He tried to inveigle his brother into lending him the sports car."
  },
  "invisible": {
    "word": "Invisible",
    "pos": "adjective",
    "simpleDefinition": "Unable to be seen by the human eye; hidden from vision.",
    "banglaMeaning": "অদৃশ্য",
    "synonyms": [
      "Unseen",
      "Hidden",
      "Imperceptible",
      "Concealed"
    ],
    "antonyms": [
      "Visible",
      "Apparent",
      "Noticeable"
    ],
    "example": "Microscopic bacteria are completely invisible without a magnifying lens."
  },
  "irk": {
    "word": "Irk",
    "pos": "verb",
    "simpleDefinition": "To irritate, bother, or annoy someone.",
    "banglaMeaning": "বিরক্তি",
    "synonyms": [
      "Annoy",
      "Irritate",
      "Bother",
      "Vex"
    ],
    "antonyms": [
      "Please",
      "Delight",
      "Soothe"
    ],
    "example": "The endless paperwork began to irk the hard-working hospital staff."
  },
  "irresistible": {
    "word": "Irresistible",
    "pos": "adjective",
    "simpleDefinition": "Too attractive, tempting, or powerful to be resisted.",
    "banglaMeaning": "অপ্রতিরোধ্য",
    "synonyms": [
      "Tempting",
      "Compelling",
      "Overpowering",
      "Captivating"
    ],
    "antonyms": [
      "Resistible",
      "Unattractive",
      "Repulsive"
    ],
    "example": "The smell of freshly baked sourdough bread was completely irresistible."
  },
  "irrevocable": {
    "word": "Irrevocable",
    "pos": "adjective",
    "simpleDefinition": "Not able to be changed, reversed, or recovered; final",
    "banglaMeaning": "অপরিবর্তনীয় / যা রদ করা যায় না",
    "synonyms": [
      "Permanent",
      "Final",
      "Irreversible"
    ],
    "antonyms": [
      "Reversible",
      "Changeable",
      "Temporary"
    ],
    "example": "Signing the contract is an irrevocable decision."
  },
  "irritate": {
    "word": "Irritate",
    "pos": "verb",
    "simpleDefinition": "To make someone feel annoyed or angry, or cause physical inflammation.",
    "banglaMeaning": "বিরক্ত করা",
    "synonyms": [
      "Annoy",
      "Exasperate",
      "Bother",
      "Inflame"
    ],
    "antonyms": [
      "Soothe",
      "Calm",
      "Pacify"
    ],
    "example": "Harsh chemicals in the cleaning spray can irritate sensitive skin."
  },
  "isolation": {
    "word": "Isolation",
    "pos": "noun",
    "simpleDefinition": "The state of being separated from other people or things; solitude.",
    "banglaMeaning": "বিচ্ছিন্নতা",
    "synonyms": [
      "Solitude",
      "Seclusion",
      "Separation",
      "Detachment"
    ],
    "antonyms": [
      "Companionship",
      "Inclusion",
      "Socializing"
    ],
    "example": "Living in isolation on a remote island gave him peace to finish his novel."
  },
  "jaunt": {
    "word": "Jaunt",
    "pos": "noun",
    "simpleDefinition": "A short, pleasant excursion or trip taken primarily for pleasure.",
    "banglaMeaning": "লঘু প্রমোদ ভ্রমণ",
    "synonyms": [
      "Outing",
      "Excursion",
      "Trip",
      "Stroll"
    ],
    "antonyms": [
      "Stay",
      "Station"
    ],
    "example": "We took a leisurely jaunt to the countryside to enjoy the autumn leaves."
  },
  "jeopardize": {
    "word": "Jeopardize",
    "pos": "verb",
    "simpleDefinition": "To put someone or something into a situation in which there is a danger of loss or failure",
    "banglaMeaning": "বিপন্ন করা / ঝুঁকিতে ফেলা",
    "synonyms": [
      "Endanger",
      "Risk",
      "Threaten"
    ],
    "antonyms": [
      "Protect",
      "Safeguard",
      "Secure"
    ],
    "example": "Reckless driving jeopardizes the lives of pedestrians."
  },
  "jovial": {
    "word": "Jovial",
    "pos": "adjective",
    "simpleDefinition": "Cheerful, friendly, and good-humored",
    "banglaMeaning": "হাসিখুশি / প্রফুল্ল / প্রমোদপ্রিয়",
    "synonyms": [
      "Cheerful",
      "Merry",
      "Jolly"
    ],
    "antonyms": [
      "Sad",
      "Gloomy",
      "Sullen"
    ],
    "example": "The jovial teacher always started class NTRCA Teacher Recruitment"
  },
  "jubilant": {
    "word": "Jubilant",
    "pos": "adjective",
    "simpleDefinition": "Feeling or expressing great happiness and triumph",
    "banglaMeaning": "উল্লসিত / জয়োল্লাসে মত্ত",
    "synonyms": [
      "Joyful",
      "Elated",
      "Triumphant"
    ],
    "antonyms": [
      "Sad",
      "Disappointed",
      "Sorrowful"
    ],
    "example": "The jubilant crowd celebrated the team's victory."
  },
  "jubilate": {
    "word": "Jubilate",
    "pos": "verb",
    "simpleDefinition": "To show or express great joy, celebration, and triumph.",
    "banglaMeaning": "আনন্দ করা",
    "synonyms": [
      "Rejoice",
      "Celebrate",
      "Exult",
      "Triumph"
    ],
    "antonyms": [
      "Mourn",
      "Grieve",
      "Lament"
    ],
    "example": "The crowd began to jubilate as the hometown hero crossed the finish line."
  },
  "judiciary": {
    "word": "Judiciary",
    "pos": "noun",
    "simpleDefinition": "The judicial branch of government, including courts, magistrates, and judges.",
    "banglaMeaning": "আইন বিভাগ",
    "synonyms": [
      "Bench",
      "Court system",
      "Judicature",
      "Magistracy"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "An honest judiciary ensures that laws are applied equally to everyone."
  },
  "judicious": {
    "word": "Judicious",
    "pos": "adjective",
    "simpleDefinition": "Showing good judgment and common sense",
    "banglaMeaning": "সুবিচক্ষণ / বুদ্ধিমান",
    "synonyms": [
      "Wise",
      "Prudent",
      "Sensible"
    ],
    "antonyms": [
      "Foolish",
      "Imprudent",
      "Reckless"
    ],
    "example": "A judicious decision was made to postpone the project."
  },
  "jurisdiction": {
    "word": "Jurisdiction",
    "pos": "noun",
    "simpleDefinition": "The legal power, authority, or territory to administer justice.",
    "banglaMeaning": "আইনগত অধিকার",
    "synonyms": [
      "Authority",
      "Control",
      "Power",
      "Sovereignty"
    ],
    "antonyms": [
      "Powerlessness",
      "Incompetence"
    ],
    "example": "The federal court has jurisdiction over matters involving interstate commerce."
  },
  "jury": {
    "word": "Jury",
    "pos": "noun",
    "simpleDefinition": "A group of sworn citizens who decide the verdict in a legal trial.",
    "banglaMeaning": "নির্ণায়ক সভা",
    "synonyms": [
      "Panel",
      "Tribunal",
      "Judges",
      "Arbitrators"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The jury took two days of deliberation to reach their unanimous verdict."
  },
  "keen": {
    "word": "Keen",
    "pos": "adjective",
    "simpleDefinition": "Having sharp perception, intellect, eagerness, or intense enthusiasm.",
    "banglaMeaning": "ধারাল; তীক্ষ্ণ",
    "synonyms": [
      "Sharp",
      "Eager",
      "Acute",
      "Enthusiastic"
    ],
    "antonyms": [
      "Dull",
      "Reluctant",
      "Apathetic"
    ],
    "example": "She displayed a keen interest in learning ancient history and languages."
  },
  "kindle": {
    "word": "Kindle",
    "pos": "verb",
    "simpleDefinition": "To ignite a fire or inspire strong feelings",
    "banglaMeaning": "জ্বালানো / উদ্দীপিত করা",
    "synonyms": [
      "Ignite",
      "Arouse",
      "Stimulate"
    ],
    "antonyms": [
      "Extinguish",
      "Quench",
      "Dampen"
    ],
    "example": "His speech kindled a desire for freedom in the crowd."
  },
  "kleptomania": {
    "word": "Kleptomania",
    "pos": "noun",
    "simpleDefinition": "A mental health disorder characterized by an uncontrollable urge to steal.",
    "banglaMeaning": "চুরির রোগ; একটি মানসিক ব্যাধি যা ব্যক্তিকে চুরি করতে বাধ্য করে",
    "synonyms": [
      "Compulsive stealing",
      "Impulse control disorder"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "He received professional psychotherapy to help treat his kleptomania."
  },
  "knotty": {
    "word": "Knotty",
    "pos": "adjective",
    "simpleDefinition": "Complex, full of difficulties, and very tricky or hard to solve.",
    "banglaMeaning": "ঝামেলাযুক্ত",
    "synonyms": [
      "Complex",
      "Tricky",
      "Tangled",
      "Complicated"
    ],
    "antonyms": [
      "Simple",
      "Straightforward",
      "Easy"
    ],
    "example": "The ambassadors spent hours negotiating the knotty border dispute."
  },
  "laborious": {
    "word": "Laborious",
    "pos": "adjective",
    "simpleDefinition": "Requiring hard work, considerable physical or mental effort, and time.",
    "banglaMeaning": "কষ্টসাধ্য বা পরিশ্রমসাধ্য কিছু",
    "synonyms": [
      "Arduous",
      "Strenuous",
      "Tiresome",
      "Demanding"
    ],
    "antonyms": [
      "Easy",
      "Effortless",
      "Simple"
    ],
    "example": "Transcribing the old manuscript word by word was a laborious task."
  },
  "laconic": {
    "word": "Laconic",
    "pos": "adjective",
    "simpleDefinition": "Using very few words in speech or writing; brief and concise.",
    "banglaMeaning": "স্বল্পভাষী",
    "synonyms": [
      "Brief",
      "Concise",
      "Terse",
      "Succinct"
    ],
    "antonyms": [
      "Verbose",
      "Wordy",
      "Talkative"
    ],
    "example": "His laconic reply of 'No' signaled that the discussion was completely over."
  },
  "laggard": {
    "word": "Laggard",
    "pos": "noun",
    "simpleDefinition": "A person who moves very slowly and continually falls behind others.",
    "banglaMeaning": "পিছিয়ে পড়া ব্যক্তি",
    "synonyms": [
      "Slowpoke",
      "Straggler",
      "Loiterer",
      "Sluggard"
    ],
    "antonyms": [
      "Leader",
      "Pioneer",
      "Trailblazer"
    ],
    "example": "The company introduced incentives to encourage corporate laggards to modernize."
  },
  "laid back": {
    "word": "Laid back",
    "pos": "adjective",
    "simpleDefinition": "Calm, relaxed, unhurried, and not easily worried or stressed.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "Relaxed",
      "Easygoing",
      "Unruffled",
      "Casual"
    ],
    "antonyms": [
      "Tense",
      "Stressed",
      "Anxious"
    ],
    "example": "His laid back temperament helped keep the entire team calm under pressure."
  },
  "lament": {
    "word": "Lament",
    "pos": "verb",
    "simpleDefinition": "To express deep sorrow, grief, or regret for someone or something.",
    "banglaMeaning": "বিলাপ করা / শোক প্রকাশ করা",
    "synonyms": [
      "Mourn",
      "Grieve",
      "Bemoan",
      "Weep"
    ],
    "antonyms": [
      "Celebrate",
      "Rejoice",
      "Praise"
    ],
    "example": "Poets from across the country wrote touching verses to lament his passing."
  },
  "landscape": {
    "word": "Landscape",
    "pos": "noun",
    "simpleDefinition": "All the visible features of an area of countryside or land.",
    "banglaMeaning": "প্রাকৃতিক ভূ-দৃশ্য",
    "synonyms": [
      "Scenery",
      "Terrain",
      "Panorama",
      "View"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The artist captured the beautiful mountain landscape in his oil painting."
  },
  "languor": {
    "word": "Languor",
    "pos": "noun",
    "simpleDefinition": "A pleasant feeling of tiredness or inertia, or lack of physical energy.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "Lethargy",
      "Sluggishness",
      "Lassitude",
      "Inertia"
    ],
    "antonyms": [
      "Vigor",
      "Energy",
      "Vitality"
    ],
    "example": "After a day swimming under the sun, a sweet languor came over us all."
  },
  "lassitude": {
    "word": "Lassitude",
    "pos": "noun",
    "simpleDefinition": "A state of physical or mental weariness; complete lack of energy.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "Fatigue",
      "Weariness",
      "Lethargy",
      "Exhaustion"
    ],
    "antonyms": [
      "Energy",
      "Vitality",
      "Vigor"
    ],
    "example": "A strange lassitude overcame the patient following several days of fever."
  },
  "lawn": {
    "word": "Lawn",
    "pos": "noun",
    "simpleDefinition": "An area of manicured green grass near a house, park, or public building.",
    "banglaMeaning": "তৃণভূমি; ঘাসের জমি",
    "synonyms": [
      "Turf",
      "Grassland",
      "Meadow",
      "Green"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "We sat on the manicured lawn enjoying cold lemonade in the sunshine."
  },
  "leaning": {
    "word": "Leaning",
    "pos": "noun",
    "simpleDefinition": "A tendency, inclination, or personal preference towards something.",
    "banglaMeaning": "ঝোঁক",
    "synonyms": [
      "Inclination",
      "Tendency",
      "Bias",
      "Predilection"
    ],
    "antonyms": [
      "Neutrality",
      "Indifference",
      "Impartiality"
    ],
    "example": "He has a noticeable political leaning toward environmental conservation."
  },
  "legible": {
    "word": "Legible",
    "pos": "adjective",
    "simpleDefinition": "Clear, neat, and readable enough to be easily deciphered.",
    "banglaMeaning": "সহজপাঠ্য",
    "synonyms": [
      "Readable",
      "Clear",
      "Decipherable",
      "Intelligible"
    ],
    "antonyms": [
      "Illegible",
      "Unreadable",
      "Messy"
    ],
    "example": "Please make sure your handwriting is legible when filling out the form."
  },
  "legitimate": {
    "word": "Legitimate",
    "pos": "adjective",
    "simpleDefinition": "Conforming to recognized laws, established rules, or sound logic.",
    "banglaMeaning": "আইনসম্মত",
    "synonyms": [
      "Lawful",
      "Legal",
      "Valid",
      "Authentic"
    ],
    "antonyms": [
      "Illegitimate",
      "Illegal",
      "Unlawful"
    ],
    "example": "The customer had a legitimate complaint regarding the broken warranty."
  },
  "lenient": {
    "word": "Lenient",
    "pos": "adjective",
    "simpleDefinition": "Permissive, merciful, or tolerant; not harsh or strict",
    "banglaMeaning": "কোমল / সহানুভূতিশীল / শিথিল / দয়ামায়া প্রবণ",
    "synonyms": [
      "Merciful",
      "Gentle",
      "Indulgent"
    ],
    "antonyms": [
      "Strict",
      "Harsh",
      "Severe"
    ],
    "example": "The lenient judge gave a minor penalty for the first offence."
  },
  "lethal": {
    "word": "Lethal",
    "pos": "adjective",
    "simpleDefinition": "Sufficient to cause death; deadly and fatal",
    "banglaMeaning": "প্রাণঘাতী / মারাত্মক",
    "synonyms": [
      "Fatal",
      "Deadly",
      "Mortal"
    ],
    "antonyms": [
      "Harmless",
      "Safe",
      "Benign"
    ],
    "example": "A lethal dose of the drug caused immediate death."
  },
  "lethargic": {
    "word": "Lethargic",
    "pos": "adjective",
    "simpleDefinition": "Sluggish, drowsy, tired, and lacking in normal vitality or enthusiasm.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "Sluggish",
      "Tired",
      "Passive",
      "Inactive"
    ],
    "antonyms": [
      "Energetic",
      "Active",
      "Lively"
    ],
    "example": "A heavy meal during the hot afternoon left everyone feeling lethargic."
  },
  "lexicographer": {
    "word": "Lexicographer",
    "pos": "noun",
    "simpleDefinition": "A person who writes, compiles, or edits dictionaries.",
    "banglaMeaning": "অভিধান রচয়িতা",
    "synonyms": [
      "Dictionary compiler",
      "Glossarian",
      "Vocabulist"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The lexicographer spent thirty years documenting regional English idioms."
  },
  "licentious": {
    "word": "Licentious",
    "pos": "adjective",
    "simpleDefinition": "Lacking moral or sexual restraint; dissolute and unprincipled.",
    "banglaMeaning": "দুশ্চরিত্র ব্যক্তি",
    "synonyms": [
      "Immoral",
      "Dissolute",
      "Debauched",
      "Lustful"
    ],
    "antonyms": [
      "Moral",
      "Virtuous",
      "Chaste"
    ],
    "example": "The corrupt nobleman was widely condemned for his licentious behavior."
  },
  "limpid": {
    "word": "Limpid",
    "pos": "adjective",
    "simpleDefinition": "Completely clear, transparent, serene, and free from cloudiness.",
    "banglaMeaning": "স্পষ্ট",
    "synonyms": [
      "Clear",
      "Transparent",
      "Lucid",
      "Pure"
    ],
    "antonyms": [
      "Turbid",
      "Murky",
      "Muddy"
    ],
    "example": "You could see every smooth pebble at the bottom of the limpid stream."
  },
  "linguistic": {
    "word": "Linguistic",
    "pos": "adjective",
    "simpleDefinition": "Relating to language, speech, or the scientific study of language.",
    "banglaMeaning": "ভাষাবিজ্ঞান",
    "synonyms": [
      "Verbal",
      "Grammatical",
      "Semantic",
      "Philological"
    ],
    "antonyms": [
      "Nonverbal"
    ],
    "example": "Children acquire impressive linguistic skills rapidly during their early years."
  },
  "lively": {
    "word": "Lively",
    "pos": "adjective",
    "simpleDefinition": "Full of life, active energy, enthusiasm, and cheerful spirit.",
    "banglaMeaning": "প্রশান্ত / সজীব",
    "synonyms": [
      "Energetic",
      "Vibrant",
      "Animated",
      "Spirited"
    ],
    "antonyms": [
      "Lifeless",
      "Dull",
      "Inert"
    ],
    "example": "The street market was bustling with lively music, aromas, and shoppers."
  },
  "lodge a complaint": {
    "word": "Lodge a complaint",
    "pos": "idiom",
    "simpleDefinition": "To submit an official or formal grievance to an authority.",
    "banglaMeaning": "অফিসিয়ালি অভিযোগ করা",
    "synonyms": [
      "File a complaint",
      "Register a grievance",
      "Protest officially"
    ],
    "antonyms": [
      "Withdraw a complaint",
      "Accept"
    ],
    "example": "The tenants decided to lodge a complaint against the landlord for neglect."
  },
  "loquacious": {
    "word": "Loquacious",
    "pos": "adjective",
    "simpleDefinition": "Tending to talk a great deal; talkative",
    "banglaMeaning": "বাচাল / বাকপটু",
    "synonyms": [
      "Talkative",
      "Garrulous",
      "Verbose"
    ],
    "antonyms": [
      "Quiet",
      "Taciturn",
      "Reserved"
    ],
    "example": "The loquacious politician spoke for three hours straight."
  },
  "lowest point": {
    "word": "Lowest point",
    "pos": "noun",
    "simpleDefinition": "The nadir; the lowest level, stage, or time of greatest adversity.",
    "banglaMeaning": "র্সবনিল্ড বিন্দু",
    "synonyms": [
      "Nadir",
      "Rock bottom",
      "Trough",
      "Base"
    ],
    "antonyms": [
      "Zenith",
      "Peak",
      "Pinnacle"
    ],
    "example": "Failing the entrance exam was the lowest point in an otherwise stellar year."
  },
  "lucid": {
    "word": "Lucid",
    "pos": "adjective",
    "simpleDefinition": "Expressed clearly and easy to understand; fully rational and clearheaded.",
    "banglaMeaning": "স্পষ্ট / প্রাঞ্জল",
    "synonyms": [
      "Clear",
      "Articulate",
      "Intelligible",
      "Coherent"
    ],
    "antonyms": [
      "Confused",
      "Unclear",
      "Murky"
    ],
    "example": "The professor gave a remarkably lucid explanation of the economic theorem."
  },
  "lucrative": {
    "word": "Lucrative",
    "pos": "adjective",
    "simpleDefinition": "Producing a great deal of profit; financially rewarding.",
    "banglaMeaning": "লাভজনক",
    "synonyms": [
      "Profitable",
      "Rewarding",
      "Remunerative",
      "Gainful"
    ],
    "antonyms": [
      "Unprofitable",
      "Loss-making",
      "Disadvantageous"
    ],
    "example": "Exporting fresh fruit proved to be a highly lucrative venture."
  },
  "lukewarm": {
    "word": "Lukewarm",
    "pos": "adjective",
    "simpleDefinition": "Only slightly warm, or showing very little interest or enthusiasm.",
    "banglaMeaning": "উদাসীন",
    "synonyms": [
      "Tepid",
      "Unenthusiastic",
      "Apathetic",
      "Halfhearted"
    ],
    "antonyms": [
      "Enthusiastic",
      "Warm",
      "Passionate"
    ],
    "example": "The board gave only a lukewarm response to the proposed office relocation."
  },
  "lumber": {
    "word": "Lumber",
    "pos": "verb",
    "simpleDefinition": "To move along slowly, heavily, and clumsily.",
    "banglaMeaning": "খুব কষ্ট করে হাঁটা",
    "synonyms": [
      "Plod",
      "Trudge",
      "Lurch",
      "Stumble"
    ],
    "antonyms": [
      "Glide",
      "Dart",
      "Sprint"
    ],
    "example": "The giant bear continued to lumber steadily across the rocky trail."
  },
  "luminous": {
    "word": "Luminous",
    "pos": "adjective",
    "simpleDefinition": "Emitting, glowing with, or reflecting bright and steady light.",
    "banglaMeaning": "উজ্জ্বল",
    "synonyms": [
      "Radiant",
      "Brilliant",
      "Glowing",
      "Bright"
    ],
    "antonyms": [
      "Dark",
      "Dim",
      "Dull"
    ],
    "example": "The luminous moon lit up our path as we walked along the quiet beach."
  },
  "magnanimous": {
    "word": "Magnanimous",
    "pos": "adjective",
    "simpleDefinition": "Very generous or forgiving, especially toward a rival or less powerful person.",
    "banglaMeaning": "দয়ালু",
    "synonyms": [
      "Generous",
      "Forgiving",
      "Noble",
      "Charitable"
    ],
    "antonyms": [
      "Petty",
      "Vengeful",
      "Spiteful"
    ],
    "example": "She was magnanimous in victory and praised her opponent's determination."
  },
  "malicious": {
    "word": "Malicious",
    "pos": "adjective",
    "simpleDefinition": "Intending to do harm; vicious and hurtful",
    "banglaMeaning": "বিদ্বেষপরায়ণ / হিংসুক",
    "synonyms": [
      "Spiteful",
      "Hostile",
      "Vicious"
    ],
    "antonyms": [
      "Kind",
      "Benevolent",
      "Friendly"
    ],
    "example": "The malicious rumour destroyed his reputation."
  },
  "malign": {
    "word": "Malign",
    "pos": "verb",
    "simpleDefinition": "To speak about someone in a spitefully critical, defamatory manner",
    "banglaMeaning": "কুৎসা রটানো / অপবাদ দেওয়া / ক্ষতিকর",
    "synonyms": [
      "Defame",
      "Slander",
      "Vilify"
    ],
    "antonyms": [
      "Praise",
      "Extol",
      "Commend"
    ],
    "example": "He maligned his colleague to get a promotion."
  },
  "malingerer": {
    "word": "Malingerer",
    "pos": "noun",
    "simpleDefinition": "A person who pretends to be ill in order to avoid work or duty.",
    "banglaMeaning": "যে ব্যক্তি র্কতব্য এড়ানোর জন্য অসুস্থতার ভান করে",
    "synonyms": [
      "Shirker",
      "Slacker",
      "Dodger",
      "Loafer"
    ],
    "antonyms": [
      "Hard worker"
    ],
    "example": "The manager suspected he was a malingerer when he called in sick every Friday."
  },
  "mammoth": {
    "word": "Mammoth",
    "pos": "adjective",
    "simpleDefinition": "Huge, gigantic, or colossal in size or scale.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "Gigantic",
      "Colossal",
      "Huge",
      "Immense"
    ],
    "antonyms": [
      "Tiny",
      "Miniature",
      "Small"
    ],
    "example": "Building the suspension bridge was a mammoth engineering challenge."
  },
  "manifest": {
    "word": "Manifest",
    "pos": "adjective",
    "simpleDefinition": "Clear, plain, and obvious to the eye or mind.",
    "banglaMeaning": "স্পষ্ট",
    "synonyms": [
      "Obvious",
      "Clear",
      "Apparent",
      "Evident"
    ],
    "antonyms": [
      "Hidden",
      "Obscure",
      "Unclear"
    ],
    "example": "His nervous stutter made his anxiety manifest to everyone in the room."
  },
  "manifold": {
    "word": "Manifold",
    "pos": "adjective",
    "simpleDefinition": "Many and various; having many different parts or forms",
    "banglaMeaning": "নানা প্রকার / বহুমুখী",
    "synonyms": [
      "Multiple",
      "Diverse",
      "Various"
    ],
    "antonyms": [
      "Single",
      "Simple",
      "Uniform"
    ],
    "example": "The project faced manifold challenges from the start."
  },
  "manliness": {
    "word": "Manliness",
    "pos": "noun",
    "simpleDefinition": "Qualities traditionally associated with courage, strength, and noble character.",
    "banglaMeaning": "সাহসিকতা",
    "synonyms": [
      "Masculinity",
      "Bravery",
      "Fortitude",
      "Courage"
    ],
    "antonyms": [
      "Cowardice",
      "Weakness"
    ],
    "example": "He believed true manliness meant standing up gently for those in need."
  },
  "martinet": {
    "word": "Martinet",
    "pos": "noun",
    "simpleDefinition": "A strict disciplinarian who demands total obedience to rules.",
    "banglaMeaning": "নিয়মনিষ্ঠ",
    "synonyms": [
      "Disciplinarian",
      "Taskmaster",
      "Stickler"
    ],
    "antonyms": [
      "Lenient person"
    ],
    "example": "The coach was a martinet who made athletes run laps for being one minute late."
  },
  "massive": {
    "word": "Massive",
    "pos": "adjective",
    "simpleDefinition": "Exceptionally large, heavy, and solid in construction.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "Enormous",
      "Huge",
      "Colossal",
      "Bulky"
    ],
    "antonyms": [
      "Tiny",
      "Lightweight",
      "Slender"
    ],
    "example": "The castle entrance was guarded by a massive iron door."
  },
  "masterful": {
    "word": "Masterful",
    "pos": "adjective",
    "simpleDefinition": "Showing great skill, competence, or commanding authority.",
    "banglaMeaning": "দক্ষ",
    "synonyms": [
      "Skillful",
      "Expert",
      "Commanding",
      "Authoritative"
    ],
    "antonyms": [
      "Inept",
      "Clumsy",
      "Weak"
    ],
    "example": "The conductor gave a masterful performance of the symphony."
  },
  "materialistic": {
    "word": "Materialistic",
    "pos": "adjective",
    "simpleDefinition": "Excessively focused on money and material possessions rather than spiritual values.",
    "banglaMeaning": "প্রকৃতিবাদী",
    "synonyms": [
      "Consumerist",
      "Acquisitive",
      "Money-oriented",
      "Worldly"
    ],
    "antonyms": [
      "Spiritual",
      "Altruistic",
      "Idealistic"
    ],
    "example": "Society often critiques materialistic lifestyles that prioritize luxury over kindness."
  },
  "materialize": {
    "word": "Materialize",
    "pos": "verb",
    "simpleDefinition": "To become actual fact or happen, or appear suddenly.",
    "banglaMeaning": "দৃষ্টি গোচর হওয়া / বাস্তবে পরিণত হওয়া",
    "synonyms": [
      "Appear",
      "Emerge",
      "Happen",
      "Occur"
    ],
    "antonyms": [
      "Vanish",
      "Disappear"
    ],
    "example": "The predicted economic crisis did not materialize after the reforms."
  },
  "matrimony": {
    "word": "Matrimony",
    "pos": "noun",
    "simpleDefinition": "The state or ceremony of being married; wedlock.",
    "banglaMeaning": "বিবাহিত",
    "synonyms": [
      "Marriage",
      "Wedlock",
      "Nuptials",
      "Union"
    ],
    "antonyms": [
      "Divorce",
      "Celibacy"
    ],
    "example": "The couple celebrated twenty-five years of happy matrimony."
  },
  "meager": {
    "word": "Meager",
    "pos": "adjective",
    "simpleDefinition": "Deficient in quantity, fullness, or extent; scanty",
    "banglaMeaning": "অপ্রতুল / অতি সামান্য / স্বল্প",
    "synonyms": [
      "Scanty",
      "Insufficient",
      "Sparse"
    ],
    "antonyms": [
      "Abundant",
      "Plentiful",
      "Adequate"
    ],
    "example": "The workers received meager wages despite hard labour."
  },
  "mean": {
    "word": "Mean",
    "pos": "adjective",
    "simpleDefinition": "Unkind, spiteful, or unwilling to share or spend money.",
    "banglaMeaning": "নীচ",
    "synonyms": [
      "Unkind",
      "Nasty",
      "Spiteful",
      "Stingy"
    ],
    "antonyms": [
      "Kind",
      "Generous",
      "Pleasant"
    ],
    "example": "Making mean comments behind someone's back hurts people deeply."
  },
  "meddle": {
    "word": "Meddle",
    "pos": "verb",
    "simpleDefinition": "To interfere in or pry into something that is not one's concern.",
    "banglaMeaning": "হস্তক্ষেপ করা",
    "synonyms": [
      "Interfere",
      "Intrude",
      "Pry",
      "Tamper"
    ],
    "antonyms": [
      "Leave alone",
      "Ignore"
    ],
    "example": "Parents should encourage independence rather than meddle in their adult children's choices."
  },
  "meditative": {
    "word": "Meditative",
    "pos": "adjective",
    "simpleDefinition": "Deeply thoughtful, reflective, or absorbed in serious thought.",
    "banglaMeaning": "চিন্তাশীল",
    "synonyms": [
      "Reflective",
      "Contemplative",
      "Pensive",
      "Thoughtful"
    ],
    "antonyms": [
      "Frivolous",
      "Thoughtless"
    ],
    "example": "He spent a quiet meditative morning walking along the peaceful seashore."
  },
  "melancholy": {
    "word": "Melancholy",
    "pos": "noun",
    "simpleDefinition": "A deep, pensive, and long-lasting sadness",
    "banglaMeaning": "বিষাদ / বিষণ্ণতা / দুঃখ",
    "synonyms": [
      "Sadness",
      "Gloom",
      "Sorrow"
    ],
    "antonyms": [
      "Joy",
      "Happiness",
      "Cheerfulness"
    ],
    "example": "He felt deep melancholy after losing his best friend."
  },
  "memento": {
    "word": "Memento",
    "pos": "noun",
    "simpleDefinition": "An object kept as a reminder or souvenir of a person, place, or event.",
    "banglaMeaning": "স্মারকচিহ্ন; স্মৃতিচিহ্ন",
    "synonyms": [
      "Souvenir",
      "Keepsake",
      "Reminder",
      "Token"
    ],
    "antonyms": [
      "Discard"
    ],
    "example": "She bought a miniature porcelain figurine as a memento of her trip to Paris."
  },
  "menace": {
    "word": "Menace",
    "pos": "noun",
    "simpleDefinition": "A person or thing that is likely to cause harm; a threat or danger",
    "banglaMeaning": "হুমকি / বিপদ",
    "synonyms": [
      "Threat",
      "Danger",
      "Hazard"
    ],
    "antonyms": [
      "Protection",
      "Safety",
      "Security"
    ],
    "example": "Drug trafficking is a menace to society."
  },
  "mercenary": {
    "word": "Mercenary",
    "pos": "adjective",
    "simpleDefinition": "Primarily motivated by the desire for financial gain rather than ethics or duty.",
    "banglaMeaning": "ভাড়াটে বৈসনিক",
    "synonyms": [
      "Money-driven",
      "Greedy",
      "Acquisitive",
      "Selfish"
    ],
    "antonyms": [
      "Altruistic",
      "Generous",
      "Charitable"
    ],
    "example": "His mercenary attitude made him abandon the charity project when funds dropped."
  },
  "merchandise": {
    "word": "Merchandise",
    "pos": "noun",
    "simpleDefinition": "Goods or commodities that are bought and sold in business.",
    "banglaMeaning": "মালপত্র",
    "synonyms": [
      "Goods",
      "Products",
      "Commodities",
      "Stock"
    ],
    "antonyms": [
      "Services"
    ],
    "example": "The department store displays its newest merchandise in bright front windows."
  },
  "merchant prince": {
    "word": "Merchant prince",
    "pos": "noun",
    "simpleDefinition": "A wealthy, influential merchant or commercial business tycoon.",
    "banglaMeaning": "মহা ধনবান বণিক",
    "synonyms": [
      "Tycoon",
      "Magnate",
      "Baron",
      "Capitalist"
    ],
    "antonyms": [
      "Laborer",
      "Peasant"
    ],
    "example": "The coastal trading city was governed by a merchant prince who owned dozens of ships."
  },
  "mercury": {
    "word": "Mercury",
    "pos": "noun",
    "simpleDefinition": "A heavy silvery-white toxic liquid metallic element, also called quicksilver.",
    "banglaMeaning": "পারদ / বুধগ্রহ / দেবরাজের দেবতা",
    "synonyms": [
      "Quicksilver",
      "Liquid metal"
    ],
    "antonyms": [
      "Solid metal"
    ],
    "example": "Traditional medical thermometers used liquid mercury to measure body temperature."
  },
  "meritorious": {
    "word": "Meritorious",
    "pos": "adjective",
    "simpleDefinition": "Deserving reward, honor, or praise; praiseworthy",
    "banglaMeaning": "প্রশংসনীয় / গুণবান / গুণী",
    "synonyms": [
      "Worthy",
      "Deserving",
      "Admirable"
    ],
    "antonyms": [
      "Unworthy",
      "Mediocre",
      "Inferior"
    ],
    "example": "Meritorious students received government scholarships."
  },
  "methodical": {
    "word": "Methodical",
    "pos": "adjective",
    "simpleDefinition": "Done according to a careful, systematic, and orderly procedure.",
    "banglaMeaning": "সুশৃঙ্খল",
    "synonyms": [
      "Systematic",
      "Orderly",
      "Structured",
      "Organized"
    ],
    "antonyms": [
      "Chaotic",
      "Haphazard",
      "Disorderly"
    ],
    "example": "She solved the mystery through a careful and methodical examination of clues."
  },
  "meticulous": {
    "word": "Meticulous",
    "pos": "adjective",
    "simpleDefinition": "Very careful and paying great attention to detail",
    "banglaMeaning": "খুঁতখুঁতে / অতি সতর্ক / অতিসতর্ক",
    "synonyms": [
      "Careful",
      "Precise",
      "Thorough"
    ],
    "antonyms": [
      "Careless",
      "Sloppy",
      "Negligent"
    ],
    "example": "The meticulous engineer checked every detail twice."
  },
  "mild": {
    "word": "Mild",
    "pos": "adjective",
    "simpleDefinition": "Not severe, harsh, or extreme; gentle and moderate.",
    "banglaMeaning": "শান্ত / হালকা / কোমল",
    "synonyms": [
      "Gentle",
      "Moderate",
      "Temperate",
      "Calm"
    ],
    "antonyms": [
      "Harsh",
      "Severe",
      "Extreme"
    ],
    "example": "The patient experienced only mild symptoms and was discharged the next day."
  },
  "militant": {
    "word": "Militant",
    "pos": "adjective",
    "simpleDefinition": "Combative and aggressive in support of a cause",
    "banglaMeaning": "সংগ্রামী / আক্রমণাত্মক",
    "synonyms": [
      "Aggressive",
      "Radical",
      "Combative"
    ],
    "antonyms": [
      "Peaceful",
      "Passive",
      "Moderate"
    ],
    "example": "Militant groups threaten peace in the region."
  },
  "mine": {
    "word": "Mine",
    "pos": "noun",
    "simpleDefinition": "An underground excavation from which coal, minerals, or precious metals are extracted.",
    "banglaMeaning": "খনি",
    "synonyms": [
      "Quarry",
      "Pit",
      "Excavation",
      "Colliery"
    ],
    "antonyms": [
      "Surface"
    ],
    "example": "Miners descend hundreds of feet below ground to work in the coal mine."
  },
  "misanthrope": {
    "word": "Misanthrope",
    "pos": "noun",
    "simpleDefinition": "A person who dislikes human society and avoids interaction with people.",
    "banglaMeaning": "মানবজাতিকে ঘৃণা বা অবিশ্বাস করে এমন ব্যক্তি",
    "synonyms": [
      "Cynic",
      "Recluse",
      "Loner",
      "Skeptic"
    ],
    "antonyms": [
      "Philanthropist",
      "Humanitarian"
    ],
    "example": "After repeated disappointments, the old hermit turned into a misanthrope."
  },
  "misconstrue": {
    "word": "Misconstrue",
    "pos": "verb",
    "simpleDefinition": "To interpret a person's words or actions wrongly.",
    "banglaMeaning": "ভূল বোঝা",
    "synonyms": [
      "Misinterpret",
      "Misunderstand",
      "Misjudge"
    ],
    "antonyms": [
      "Understand",
      "Comprehend",
      "Grasp"
    ],
    "example": "Please do not misconstrue my honest question as a personal criticism."
  },
  "miserable": {
    "word": "Miserable",
    "pos": "adjective",
    "simpleDefinition": "Wretchedly unhappy, uncomfortable, or distressing.",
    "banglaMeaning": "শোচনীয়",
    "synonyms": [
      "Wretched",
      "Unhappy",
      "Depressed",
      "Dejected"
    ],
    "antonyms": [
      "Joyful",
      "Happy",
      "Cheerful"
    ],
    "example": "Standing in the freezing downpour for hours made the passengers miserable."
  },
  "misogyny": {
    "word": "Misogyny",
    "pos": "noun",
    "simpleDefinition": "Dislike of, contempt for, or ingrained prejudice against women.",
    "banglaMeaning": "নারীদের ঘৃণা করে যে",
    "synonyms": [
      "Sexism",
      "Anti-female bias",
      "Chauvinism"
    ],
    "antonyms": [
      "Gender equality",
      "Feminism"
    ],
    "example": "The investigative report uncovered systemic misogyny within the organization."
  },
  "mitigate": {
    "word": "Mitigate",
    "pos": "verb",
    "simpleDefinition": "To make less severe, painful, harmful, or harsh",
    "banglaMeaning": "প্রশমিত করা / লাঘব করা / প্রশমিত করা (কষ্ট / যন্ত্রণা )",
    "synonyms": [
      "Reduce",
      "Lessen",
      "Alleviate"
    ],
    "antonyms": [
      "Aggravate",
      "Intensify",
      "Worsen"
    ],
    "example": "Planting trees can help mitigate the effects of climate change."
  },
  "mockery": {
    "word": "Mockery",
    "pos": "noun",
    "simpleDefinition": "Teasing and contemptuous language or behavior; ridicule",
    "banglaMeaning": "উপহাস / বিদ্রূপ / প্রহসন",
    "synonyms": [
      "Ridicule",
      "Derision",
      "Scorn"
    ],
    "antonyms": [
      "Respect",
      "Praise",
      "Admiration"
    ],
    "example": "His failure was made into a mockery by rivals."
  },
  "modest": {
    "word": "Modest",
    "pos": "adjective",
    "simpleDefinition": "Unassuming or moderate in estimating one's abilities, or not showy.",
    "banglaMeaning": "বিনয়ী",
    "synonyms": [
      "Humble",
      "Unassuming",
      "Unpretentious",
      "Simple"
    ],
    "antonyms": [
      "Arrogant",
      "Boastful",
      "Pretentious"
    ],
    "example": "Despite winning the prestigious prize, the researcher remained remarkably modest."
  },
  "monopoly": {
    "word": "Monopoly",
    "pos": "noun",
    "simpleDefinition": "Exclusive control or possession of the supply of or trade in a commodity or service.",
    "banglaMeaning": "একচেটিয়া অধিকার",
    "synonyms": [
      "Dominance",
      "Sole control",
      "Corner",
      "Cartel"
    ],
    "antonyms": [
      "Competition",
      "Free market"
    ],
    "example": "Antitrust regulations prevent any one company from maintaining a monopoly on energy."
  },
  "monotheist": {
    "word": "Monotheist",
    "pos": "noun",
    "simpleDefinition": "A person who believes that there is only one supreme God.",
    "banglaMeaning": "একেশ্বরবাদী",
    "synonyms": [
      "Believer in one God",
      "Unitarian"
    ],
    "antonyms": [
      "Polytheist",
      "Atheist"
    ],
    "example": "A monotheist rejects the concept of multiple deities."
  },
  "monotonous": {
    "word": "Monotonous",
    "pos": "adjective",
    "simpleDefinition": "Dull, tedious, and repetitious; lacking in variety or interest.",
    "banglaMeaning": "একঘেয়ে",
    "synonyms": [
      "Repetitive",
      "Tedious",
      "Boring",
      "Dull"
    ],
    "antonyms": [
      "Varied",
      "Exciting",
      "Lively"
    ],
    "example": "Stamping envelopes all afternoon is a monotonous task that quickly bores workers."
  },
  "morose": {
    "word": "Morose",
    "pos": "adjective",
    "simpleDefinition": "Sullen, gloomy, ill-tempered, and uncommunicative",
    "banglaMeaning": "বিষণ্ণ / গোমড়ামুখো",
    "synonyms": [
      "Gloomy",
      "Sullen",
      "Sulky"
    ],
    "antonyms": [
      "Cheerful",
      "Happy",
      "Bright"
    ],
    "example": "He became morose after losing his job."
  },
  "motionless": {
    "word": "Motionless",
    "pos": "adjective",
    "simpleDefinition": "Not moving at all; completely still.",
    "banglaMeaning": "নিশ্চল",
    "synonyms": [
      "Still",
      "Stationary",
      "Immobile",
      "Static"
    ],
    "antonyms": [
      "Moving",
      "Active",
      "Dynamic"
    ],
    "example": "The owl sat motionless on the tree branch, waiting for prey."
  },
  "mountebank": {
    "word": "Mountebank",
    "pos": "noun",
    "simpleDefinition": "A person who deceives others, especially by tricking them out of money with false promises.",
    "banglaMeaning": "যে ব্যক্তি চটকদার কথা বলে মানুষকে ঠকানোর চেষ্টা করে",
    "synonyms": [
      "Charlatan",
      "Quack",
      "Fraud",
      "Swindler"
    ],
    "antonyms": [
      "Honest person"
    ],
    "example": "The traveling mountebank sold bottled colored water as a miracle health cure."
  },
  "muddle": {
    "word": "Muddle",
    "pos": "noun",
    "simpleDefinition": "An untidy, disorganized state, or confusion.",
    "banglaMeaning": "বিশৃঙ্খলা",
    "synonyms": [
      "Mess",
      "Confusion",
      "Disarray",
      "Jumble"
    ],
    "antonyms": [
      "Order",
      "Clarity",
      "System"
    ],
    "example": "The sudden cancellation of flights caused a hopeless muddle at the terminal."
  },
  "multiple": {
    "word": "Multiple",
    "pos": "adjective",
    "simpleDefinition": "Having or involving several parts, individuals, or elements.",
    "banglaMeaning": "বস্থবিধ",
    "synonyms": [
      "Several",
      "Numerous",
      "Manifold",
      "Various"
    ],
    "antonyms": [
      "Single",
      "Sole",
      "Solitary"
    ],
    "example": "The job candidate possesses multiple strengths, including fluency in French and German."
  },
  "mundane": {
    "word": "Mundane",
    "pos": "adjective",
    "simpleDefinition": "Lacking interest or excitement; ordinary and routine",
    "banglaMeaning": "পার্থিব / সাধারণ",
    "synonyms": [
      "Ordinary",
      "Routine",
      "Commonplace"
    ],
    "antonyms": [
      "Extraordinary",
      "Unusual",
      "Exciting"
    ],
    "example": "She was bored by the mundane tasks of her office job."
  },
  "murky": {
    "word": "Murky",
    "pos": "adjective",
    "simpleDefinition": "Dark and gloomy, or unclear and difficult to see through.",
    "banglaMeaning": "আবছা / অস্পষ্ট",
    "synonyms": [
      "Gloomy",
      "Muddy",
      "Cloudy",
      "Dim"
    ],
    "antonyms": [
      "Clear",
      "Bright",
      "Transparent"
    ],
    "example": "The search team could see nothing through the murky water of the pond."
  },
  "muster": {
    "word": "Muster",
    "pos": "verb",
    "simpleDefinition": "To summon up, gather, or assemble resources or courage.",
    "banglaMeaning": "সমবেশ",
    "synonyms": [
      "Gather",
      "Summon",
      "Rally",
      "Mobilize"
    ],
    "antonyms": [
      "Disperse",
      "Disband",
      "Scatter"
    ],
    "example": "She managed to muster the courage to deliver the keynote address."
  },
  "mutation": {
    "word": "Mutation",
    "pos": "noun",
    "simpleDefinition": "A change or alteration in form or genetic structure.",
    "banglaMeaning": "পরিবর্তন",
    "synonyms": [
      "Alteration",
      "Change",
      "Variation",
      "Modification"
    ],
    "antonyms": [
      "Constancy",
      "Uniformity"
    ],
    "example": "A genetic mutation enabled the desert plants to survive on very little rainfall."
  },
  "myopic": {
    "word": "Myopic",
    "pos": "adjective",
    "simpleDefinition": "Near-sighted, or lacking long-term foresight and realistic planning.",
    "banglaMeaning": "ক্ষীণদৃষ্টি / সংকীর্ণমনা",
    "synonyms": [
      "Short-sighted",
      "Narrow-minded",
      "Unimaginative"
    ],
    "antonyms": [
      "Farsighted",
      "Visionary"
    ],
    "example": "Cutting school funding is a myopic decision that harms economic progress."
  },
  "myriad": {
    "word": "Myriad",
    "pos": "noun",
    "simpleDefinition": "A countless or extremely large number of people or things.",
    "banglaMeaning": "অসংখ্য",
    "synonyms": [
      "Multitude",
      "Abundance",
      "Host",
      "Plethora"
    ],
    "antonyms": [
      "Few",
      "Scarcity",
      "Handful"
    ],
    "example": "On clear desert nights, a myriad of stars lights up the sky."
  },
  "nadir": {
    "word": "Nadir",
    "pos": "noun",
    "simpleDefinition": "The lowest point in the fortunes or success of a person or group.",
    "banglaMeaning": "সর্বনিম্ন, চরম অবনতি",
    "synonyms": [
      "Lowest point",
      "Bottom",
      "Rock-bottom",
      "Depths"
    ],
    "antonyms": [
      "Zenith",
      "Peak",
      "Pinnacle"
    ],
    "example": "Losing his business was the nadir of his career, but he rebuilt it gradually."
  },
  "naive": {
    "word": "Naive",
    "pos": "adjective",
    "simpleDefinition": "Showing lack of experience, wisdom, or judgment; innocent and trusting",
    "banglaMeaning": "সরল / সাদাসিধে / আনাড়ি / সাধাসিধা / বিশ্বাসপ্রবণ",
    "synonyms": [
      "Innocent",
      "Simple",
      "Unsophisticated"
    ],
    "antonyms": [
      "Experienced",
      "Worldly",
      "Shrewd"
    ],
    "example": "The naïve boy trusted everyone he met."
  },
  "namesake": {
    "word": "Namesake",
    "pos": "noun",
    "simpleDefinition": "A person or thing named after another person.",
    "banglaMeaning": "একই নামধারী ব্যক্তি / মিতা",
    "synonyms": [
      "Named after someone",
      "Cognomen"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The university library was dedicated to its generous benefactor, its namesake."
  },
  "nefarious": {
    "word": "Nefarious",
    "pos": "adjective",
    "simpleDefinition": "Extremely wicked, villainous, or criminal",
    "banglaMeaning": "ঘৃণ্য / অত্যন্ত কুখ্যাত",
    "synonyms": [
      "Wicked",
      "Villainous",
      "Criminal"
    ],
    "antonyms": [
      "Virtuous",
      "Honest",
      "Righteous"
    ],
    "example": "The nefarious criminal was finally caught by police."
  },
  "negligent": {
    "word": "Negligent",
    "pos": "adjective",
    "simpleDefinition": "Failing to exercise the care expected of a reasonably prudent person",
    "banglaMeaning": "অসাবধান / গাফিলতিপূর্ণ",
    "synonyms": [
      "Careless",
      "Remiss",
      "Inattentive"
    ],
    "antonyms": [
      "Careful",
      "Attentive",
      "Responsible"
    ],
    "example": "The negligent driver caused a serious accident."
  },
  "negligible": {
    "word": "Negligible",
    "pos": "adjective",
    "simpleDefinition": "So small or unimportant as to be not worth considering.",
    "banglaMeaning": "অবহেলার যোগ্য",
    "synonyms": [
      "Insignificant",
      "Trivial",
      "Minor",
      "Trifling"
    ],
    "antonyms": [
      "Significant",
      "Substantial",
      "Major"
    ],
    "example": "The difference in price between the two brands was completely negligible."
  },
  "negotiation": {
    "word": "Negotiation",
    "pos": "noun",
    "simpleDefinition": "Discussion aimed at reaching a mutual agreement or settlement.",
    "banglaMeaning": "আলাপালোচনা",
    "synonyms": [
      "Bargaining",
      "Discussion",
      "Mediation",
      "Talks"
    ],
    "antonyms": [
      "Deadlock",
      "Conflict"
    ],
    "example": "After intense days of negotiation, the labor union signed the contract."
  },
  "newborn": {
    "word": "Newborn",
    "pos": "noun",
    "simpleDefinition": "A recently born child or young animal.",
    "banglaMeaning": "নবজাত",
    "synonyms": [
      "Infant",
      "Baby",
      "Neonate"
    ],
    "antonyms": [
      "Adult",
      "Elder"
    ],
    "example": "The mother gently rocked the sleeping newborn in her arms."
  },
  "niggardly": {
    "word": "Niggardly",
    "pos": "adjective",
    "simpleDefinition": "Ungenerous, stingy, or reluctant to spend money.",
    "banglaMeaning": "মিতব্যয়ী / কিপটে",
    "synonyms": [
      "Stingy",
      "Miserly",
      "Parsimonious",
      "Tightfisted"
    ],
    "antonyms": [
      "Generous",
      "Lavish",
      "Munificent"
    ],
    "example": "The miserly landlord gave a niggardly response to requests for repairs."
  },
  "ninny": {
    "word": "Ninny",
    "pos": "noun",
    "simpleDefinition": "A silly, foolish, or gullible person.",
    "banglaMeaning": "বোকা জাতীয়",
    "synonyms": [
      "Fool",
      "Simpleton",
      "Dunce",
      "Blockhead"
    ],
    "antonyms": [
      "Genius",
      "Sage"
    ],
    "example": "Do not be such a ninny and believe every wild rumor you read online."
  },
  "nonchalant": {
    "word": "Nonchalant",
    "pos": "adjective",
    "simpleDefinition": "Calm, casual, and showing no worry",
    "banglaMeaning": "উদাসীন / ভাবলেশহীন",
    "synonyms": [
      "Indifferent",
      "Casual",
      "Unconcerned"
    ],
    "antonyms": [
      "Anxious",
      "Concerned",
      "Attentive"
    ],
    "example": "She seemed nonchalant about losing the competition."
  },
  "notion": {
    "word": "Notion",
    "pos": "noun",
    "simpleDefinition": "A conception of or belief about something; an idea or impulse.",
    "banglaMeaning": "ধারণা",
    "synonyms": [
      "Idea",
      "Belief",
      "Concept",
      "Impression"
    ],
    "antonyms": [
      "Certainty",
      "Fact"
    ],
    "example": "He dismissed the popular notion that money is the sole source of happiness."
  },
  "notorious": {
    "word": "Notorious",
    "pos": "adjective",
    "simpleDefinition": "Famous or well known, typically for some bad quality or crime",
    "banglaMeaning": "কুখ্যাত / দুর্নামধারী / ভয়ংকর",
    "synonyms": [
      "Infamous",
      "Disreputable",
      "Scandalous"
    ],
    "antonyms": [
      "Reputable",
      "Honourable",
      "Famous"
    ],
    "example": "(positively) The area is notorious for corruption and crime."
  },
  "notwithstanding": {
    "word": "Notwithstanding",
    "pos": "preposition",
    "simpleDefinition": "In spite of; despite.",
    "banglaMeaning": "তথাপি / যদিও",
    "synonyms": [
      "Despite",
      "Regardless of",
      "In spite of"
    ],
    "antonyms": [
      "Because of"
    ],
    "example": "Notwithstanding the torrential rain, thousands of fans attended the stadium concert."
  },
  "nourishing": {
    "word": "Nourishing",
    "pos": "adjective",
    "simpleDefinition": "Containing substances necessary for health, growth, and vitality.",
    "banglaMeaning": "পুষ্টিকর",
    "synonyms": [
      "Nutritious",
      "Wholesome",
      "Healthy",
      "Sustaining"
    ],
    "antonyms": [
      "Unwholesome",
      "Deficient",
      "Harmful"
    ],
    "example": "A hot bowl of vegetable soup is comforting and highly nourishing."
  },
  "novice": {
    "word": "Novice",
    "pos": "noun",
    "simpleDefinition": "A beginner who is new to a field, sport, or activity",
    "banglaMeaning": "শিক্ষানবিস / আনাড়ি / নতুন নিয়োগপ্রাপ্ত অনভিজ্ঞ কর্মী",
    "synonyms": [
      "Beginner",
      "Learner",
      "Amateur"
    ],
    "antonyms": [
      "Expert",
      "Professional",
      "Veteran"
    ],
    "example": "As a novice programmer, he made many basic errors."
  },
  "nugatory": {
    "word": "Nugatory",
    "pos": "adjective",
    "simpleDefinition": "Of no value or importance; useless or invalid.",
    "banglaMeaning": "বাদ দেয়া",
    "synonyms": [
      "Worthless",
      "Useless",
      "Trifling",
      "Futile"
    ],
    "antonyms": [
      "Valuable",
      "Important",
      "Effective"
    ],
    "example": "The legal clause became nugatory once the treaty was annulled."
  },
  "oath": {
    "word": "Oath",
    "pos": "noun",
    "simpleDefinition": "A solemn promise, often calling upon a divine witness, to act truthfully.",
    "banglaMeaning": "শপথ করা",
    "synonyms": [
      "Vow",
      "Pledge",
      "Promise"
    ],
    "antonyms": [
      "Breach",
      "Betrayal"
    ],
    "example": "The newly elected governor took an oath to uphold the constitution."
  },
  "obdurate": {
    "word": "Obdurate",
    "pos": "adjective",
    "simpleDefinition": "Stubbornly refusing to change one's mind or soften one's attitude.",
    "banglaMeaning": "অনমনীয়",
    "synonyms": [
      "Stubborn",
      "Obstinate",
      "Unyielding",
      "Inflexible"
    ],
    "antonyms": [
      "Pliable",
      "Yielding",
      "Submissive"
    ],
    "example": "Despite pleas from his closest advisors, the leader remained obdurate."
  },
  "obese": {
    "word": "Obese",
    "pos": "adjective",
    "simpleDefinition": "Grossly fat or overweight to an extent that risks health.",
    "banglaMeaning": "মোটা / স্থূলকায়",
    "synonyms": [
      "Overweight",
      "Corpulent",
      "Stout",
      "Portly"
    ],
    "antonyms": [
      "Thin",
      "Slender",
      "Skinny"
    ],
    "example": "A balanced diet and daily exercise help obese patients shed excess weight."
  },
  "obliged": {
    "word": "Obliged",
    "pos": "adjective",
    "simpleDefinition": "Legally or morally bound to take action, or appreciative of help.",
    "banglaMeaning": "বাধিত বা ঋণী হয়েছে এমন",
    "synonyms": [
      "Compelled",
      "Obligated",
      "Bound",
      "Grateful"
    ],
    "antonyms": [
      "Free",
      "Unobligated"
    ],
    "example": "She felt obliged to return the wallet she found in the park to the police."
  },
  "oblique": {
    "word": "Oblique",
    "pos": "adjective",
    "simpleDefinition": "Neither parallel nor at a right angle; indirect or slanting",
    "banglaMeaning": "তির্যক / অপ্রত্যক্ষ",
    "synonyms": [
      "Indirect",
      "Slanting",
      "Devious"
    ],
    "antonyms": [
      "Direct",
      "Straight",
      "Honest"
    ],
    "example": "He made an oblique reference to the scandal."
  },
  "obliquity": {
    "word": "Obliquity",
    "pos": "noun",
    "simpleDefinition": "Deviation from moral rectitude, sound judgment, or straightforwardness.",
    "banglaMeaning": "বক্রতা; নীতিভ্রংশ",
    "synonyms": [
      "Deviousness",
      "Crookedness",
      "Divergence"
    ],
    "antonyms": [
      "Rectitude",
      "Uprightness",
      "Honesty"
    ],
    "example": "The financial audit exposed years of moral obliquity inside the firm."
  },
  "oblivious": {
    "word": "Oblivious",
    "pos": "adjective",
    "simpleDefinition": "Not aware of or not taking notice of what is happening around",
    "banglaMeaning": "অসচেতন / উদাসীন",
    "synonyms": [
      "Unaware",
      "Ignorant",
      "Aware"
    ],
    "antonyms": [
      "Conscious",
      "He"
    ],
    "example": "was oblivious to the danger around Bank Recruitment Exam (Agrani"
  },
  "obscure": {
    "word": "Obscure",
    "pos": "adjective",
    "simpleDefinition": "Not clearly seen, heard, or understood; relatively unknown",
    "banglaMeaning": "অস্পষ্ট / অন্ধকারাচ্ছন্ন",
    "synonyms": [
      "Unknown",
      "Vague",
      "Dark"
    ],
    "antonyms": [
      "Famous",
      "Clear",
      "Obvious"
    ],
    "example": "The author remained obscure for most of his life."
  },
  "observant": {
    "word": "Observant",
    "pos": "adjective",
    "simpleDefinition": "Quick to notice things; watchful, alert, and perceptive.",
    "banglaMeaning": "দৃষ্টিশীল / মনোযোগী",
    "synonyms": [
      "Watchful",
      "Alert",
      "Perceptive",
      "Attentive"
    ],
    "antonyms": [
      "Inattentive",
      "Unobservant",
      "Careless"
    ],
    "example": "An observant security guard spotted the open back window right away."
  },
  "obsolescence": {
    "word": "Obsolescence",
    "pos": "noun",
    "simpleDefinition": "The process of becoming outdated, obsolete, or no longer useful.",
    "banglaMeaning": "অপ্রচলিত",
    "synonyms": [
      "Disuse",
      "Outdatedness",
      "Decline"
    ],
    "antonyms": [
      "Modernity",
      "Currency"
    ],
    "example": "Rapid advancements in digital audio led to the obsolescence of cassette tapes."
  },
  "obsolete": {
    "word": "Obsolete",
    "pos": "adjective",
    "simpleDefinition": "No longer produced or used; out of date.",
    "banglaMeaning": "পুরাতন / অপ্রচলিত",
    "synonyms": [
      "Outdated",
      "Archaic",
      "Outmoded",
      "Antique"
    ],
    "antonyms": [
      "Modern",
      "Current",
      "Up to date"
    ],
    "example": "Typewriters are now largely obsolete in modern business offices."
  },
  "obstinate": {
    "word": "Obstinate",
    "pos": "adjective",
    "simpleDefinition": "Stubbornly refusing to change one's mind",
    "banglaMeaning": "একগুঁয়ে / জেদি / একগুঁয়ে",
    "synonyms": [
      "Stubborn",
      "Headstrong",
      "Persistent"
    ],
    "antonyms": [
      "Flexible",
      "Compliant",
      "Yielding"
    ],
    "example": "The obstinate child refused to eat vegetables."
  },
  "obstruct": {
    "word": "Obstruct",
    "pos": "verb",
    "simpleDefinition": "To block an opening, path, or road; hinder progress",
    "banglaMeaning": "বাধা দেওয়া / পথ আটকে দেওয়া",
    "synonyms": [
      "Block",
      "Hinder",
      "Impede"
    ],
    "antonyms": [
      "Assist",
      "Facilitate",
      "Allow"
    ],
    "example": "Illegal parking obstructs the flow of traffic."
  },
  "occupy": {
    "word": "Occupy",
    "pos": "verb",
    "simpleDefinition": "To live in, fill, or take up space, time, or a position.",
    "banglaMeaning": "দখলে রাখা",
    "synonyms": [
      "Inhabit",
      "Dwell in",
      "Fill",
      "Hold"
    ],
    "antonyms": [
      "Vacate",
      "Abandon",
      "Leave"
    ],
    "example": "The law firm will occupy the top two floors of the office building."
  },
  "odds and ends": {
    "word": "Odds and ends",
    "pos": "noun",
    "simpleDefinition": "Miscellaneous small items or tasks of low importance or value.",
    "banglaMeaning": "ছোটখাট জিনিস",
    "synonyms": [
      "Bits and pieces",
      "Remnants",
      "Sundries"
    ],
    "antonyms": [
      "The whole",
      "Bulk"
    ],
    "example": "She cleaned her desk drawer and threw out useless odds and ends."
  },
  "offended": {
    "word": "Offended",
    "pos": "adjective",
    "simpleDefinition": "Feeling upset, annoyed, or resentful as a result of an insult or slight.",
    "banglaMeaning": "বিক্ষুব্ধ",
    "synonyms": [
      "Insulted",
      "Hurt",
      "Resentful",
      "Affronted"
    ],
    "antonyms": [
      "Pleased",
      "Delighted",
      "Flattered"
    ],
    "example": "He felt offended when his helpful suggestions were ignored during the meeting."
  },
  "offshore": {
    "word": "Offshore",
    "pos": "adjective",
    "simpleDefinition": "Located at sea at a distance from the coast, or registered in a foreign country.",
    "banglaMeaning": "সাগরমুখী",
    "synonyms": [
      "Seaborne",
      "Overseas",
      "Maritime"
    ],
    "antonyms": [
      "Onshore",
      "Inland",
      "Domestic"
    ],
    "example": "The energy company built giant offshore wind turbines in the sea."
  },
  "ominous": {
    "word": "Ominous",
    "pos": "adjective",
    "simpleDefinition": "Suggesting that something unpleasant or bad is likely to happen",
    "banglaMeaning": "অমঙ্গলজনক / অশুভ / ভয়ংকর",
    "synonyms": [
      "Threatening",
      "Sinister",
      "Menacing"
    ],
    "antonyms": [
      "Promising",
      "Favourable",
      "Positive"
    ],
    "example": "The ominous clouds signalled an approaching storm."
  },
  "omission": {
    "word": "Omission",
    "pos": "noun",
    "simpleDefinition": "Someone or something that has been left out or excluded, either intentionally or accidentally.",
    "banglaMeaning": "ভ্রান্তি",
    "synonyms": [
      "Exclusion",
      "Oversight",
      "Deletion",
      "Neglect"
    ],
    "antonyms": [
      "Inclusion",
      "Addition",
      "Insertion"
    ],
    "example": "Leaving his name off the project team was an accidental omission."
  },
  "omnipotent": {
    "word": "Omnipotent",
    "pos": "adjective",
    "simpleDefinition": "Having unlimited power; able to do anything.",
    "banglaMeaning": "সর্বশক্তিমান (আল্লাহ)",
    "synonyms": [
      "All-powerful",
      "Almighty",
      "Supreme",
      "Invincible"
    ],
    "antonyms": [
      "Powerless",
      "Weak",
      "Impotent"
    ],
    "example": "In ancient mythology, Jupiter was worshipped as an omnipotent ruler."
  },
  "on their toes": {
    "word": "On their toes",
    "pos": "idiom",
    "simpleDefinition": "Alert, energetic, and ready to respond quickly to changes.",
    "banglaMeaning": "সজাগ সতর্ক হওয়া",
    "synonyms": [
      "Alert",
      "Vigilant",
      "Prepared",
      "Watchful"
    ],
    "antonyms": [
      "Complacent",
      "Careless",
      "Unprepared"
    ],
    "example": "The demanding coach kept the players on their toes with sudden drills."
  },
  "onerous": {
    "word": "Onerous",
    "pos": "adjective",
    "simpleDefinition": "Involving great effort, burden, or difficulty; oppressive.",
    "banglaMeaning": "কষ্টসাধ্য বা পরিশ্রমসাধ্য কিছু",
    "synonyms": [
      "Burdensome",
      "Arduous",
      "Oppressive",
      "Grueling"
    ],
    "antonyms": [
      "Easy",
      "Effortless",
      "Light"
    ],
    "example": "Auditing thousands of financial transactions proved to be an onerous task."
  },
  "opaque": {
    "word": "Opaque",
    "pos": "adjective",
    "simpleDefinition": "Not letting light pass through; not transparent; difficult to understand",
    "banglaMeaning": "অস্বচ্ছ / দুর্ভেদ্য / অস্বজ্ঞ",
    "synonyms": [
      "Dark",
      "Unclear",
      "Murky"
    ],
    "antonyms": [
      "Transparent",
      "Clear",
      "Lucid"
    ],
    "example": "His report was so opaque that no one could understand it."
  },
  "opportunist": {
    "word": "Opportunist",
    "pos": "noun",
    "simpleDefinition": "A person who exploits circumstances to gain immediate personal advantage",
    "banglaMeaning": "সুবিধাবাদী",
    "synonyms": [
      "Self-seeker",
      "Schemer",
      "Exploiter"
    ],
    "antonyms": [
      "Principled",
      "Honourable",
      "Idealist"
    ],
    "example": "He was an opportunist who changed his loyalty for gain."
  },
  "optimist": {
    "word": "Optimist",
    "pos": "noun",
    "simpleDefinition": "A person who tends to be hopeful and confident about future outcomes.",
    "banglaMeaning": "আশাবাদী",
    "synonyms": [
      "Positive thinker",
      "Idealist",
      "Dreamer"
    ],
    "antonyms": [
      "Pessimist",
      "Cynic"
    ],
    "example": "As an incurable optimist, she always finds something positive in tough times."
  },
  "oracular": {
    "word": "Oracular",
    "pos": "adjective",
    "simpleDefinition": "Delivering wise, enigmatic, or authoritative prophecies or advice.",
    "banglaMeaning": "জ্ঞানবিশিষ্ট",
    "synonyms": [
      "Prophetic",
      "Wise",
      "Enigmatic",
      "Authoritative"
    ],
    "antonyms": [
      "Straightforward",
      "Foolish"
    ],
    "example": "The elder spoke in oracular statements that listeners took hours to decipher."
  },
  "orchestrate": {
    "word": "Orchestrate",
    "pos": "verb",
    "simpleDefinition": "To plan and organize something carefully, often behind the scenes.",
    "banglaMeaning": "সমন্বিত করা / কৌশলে পরিকল্পনা করা",
    "synonyms": [
      "Organize",
      "Coordinate",
      "Plan",
      "Arrange"
    ],
    "antonyms": [
      "Disorganize",
      "Derange",
      "Botch"
    ],
    "example": "The general orchestrated a successful retreat without losing a single soldier."
  },
  "orderly": {
    "word": "Orderly",
    "pos": "adjective",
    "simpleDefinition": "Neatly and methodically arranged; well-behaved and disciplined.",
    "banglaMeaning": "গোছালো",
    "synonyms": [
      "Neat",
      "Tidy",
      "Methodical",
      "Disciplined"
    ],
    "antonyms": [
      "Chaotic",
      "Disorderly",
      "Messy"
    ],
    "example": "The students formed an orderly queue before entering the museum."
  },
  "ore": {
    "word": "Ore",
    "pos": "noun",
    "simpleDefinition": "A naturally occurring rock or mineral from which a valuable metal can be extracted.",
    "banglaMeaning": "আকরিক",
    "synonyms": [
      "Mineral deposit",
      "Raw metal",
      "Deposit"
    ],
    "antonyms": [
      "Refined metal"
    ],
    "example": "Smelters process iron ore at extreme temperatures to produce pure metal."
  },
  "ostracize": {
    "word": "Ostracize",
    "pos": "verb",
    "simpleDefinition": "To deliberately exclude someone from a group or society",
    "banglaMeaning": "সমাজচ্যুত করা / বর্জন করা",
    "synonyms": [
      "/ Exclude",
      "Banish",
      "Reject"
    ],
    "antonyms": [
      "Include",
      "Accept",
      "Welcome"
    ],
    "example": "He was ostracized by his peers for speaking the truth."
  },
  "outshine": {
    "word": "Outshine",
    "pos": "verb",
    "simpleDefinition": "To be much more impressive or successful than someone or something else.",
    "banglaMeaning": "উজ্জ্বলতায় ছাপিয়ে যাওয়া",
    "synonyms": [
      "Eclipse",
      "Surpass",
      "Outdo",
      "Excel"
    ],
    "antonyms": [
      "Be eclipsed",
      "Fall behind"
    ],
    "example": "Her outstanding violin solo managed to outshine every other performance that night."
  },
  "override": {
    "word": "Override",
    "pos": "verb",
    "simpleDefinition": "To use one's authority to reject, overrule, or cancel a decision.",
    "banglaMeaning": "অগ্রাহ্য করা",
    "synonyms": [
      "Overrule",
      "Cancel",
      "Overturn",
      "Supersede"
    ],
    "antonyms": [
      "Enforce",
      "Uphold",
      "Confirm"
    ],
    "example": "Congress can vote to override a presidential veto with a two-thirds majority."
  },
  "overt": {
    "word": "Overt",
    "pos": "adjective",
    "simpleDefinition": "Done or shown openly; plainly apparent and not secret.",
    "banglaMeaning": "প্রকাশ্য",
    "synonyms": [
      "Open",
      "Obvious",
      "Blatant",
      "Conspicuous"
    ],
    "antonyms": [
      "Covert",
      "Secret",
      "Hidden"
    ],
    "example": "The company showed overt hostility towards worker unionization attempts."
  },
  "owe": {
    "word": "Owe",
    "pos": "verb",
    "simpleDefinition": "To be required to pay or repay money or gratitude to someone.",
    "banglaMeaning": "ঋণী থাকা",
    "synonyms": [
      "Be indebted",
      "Be obligated",
      "Have a debt"
    ],
    "antonyms": [
      "Repay",
      "Settle"
    ],
    "example": "I still owe twenty dollars to the bookstore for the reference manual."
  },
  "pacify": {
    "word": "Pacify",
    "pos": "verb",
    "simpleDefinition": "To quell the anger, agitation, or excitement of; bring peace to",
    "banglaMeaning": "শান্ত করা / প্রশমিত করা",
    "synonyms": [
      "Calm",
      "Appease",
      "Soothe"
    ],
    "antonyms": [
      "Provoke",
      "Agitate",
      "Disturb"
    ],
    "example": "The mother tried to pacify the crying child."
  },
  "pact": {
    "word": "Pact",
    "pos": "noun",
    "simpleDefinition": "A formal agreement or treaty between individuals, groups, or nations.",
    "banglaMeaning": "চুক্তি",
    "synonyms": [
      "Agreement",
      "Treaty",
      "Accord",
      "Compact"
    ],
    "antonyms": [
      "Disagreement",
      "Breach"
    ],
    "example": "The two nations signed a non-aggression pact to ensure lasting border peace."
  },
  "painstaking": {
    "word": "Painstaking",
    "pos": "adjective",
    "simpleDefinition": "Done with or employing great care, thoroughness, and meticulous effort.",
    "banglaMeaning": "পরিশ্রমসাধ্য, অত্যন্ত যত্নশীল; খুঁটিনাটি বিষয়ে সতর্ক",
    "synonyms": [
      "Meticulous",
      "Thorough",
      "Careful",
      "Diligent"
    ],
    "antonyms": [
      "Careless",
      "Slapdash",
      "Negligent"
    ],
    "example": "Restoring the ancient oil painting took months of painstaking work."
  },
  "paleontology": {
    "word": "Paleontology",
    "pos": "noun",
    "simpleDefinition": "The scientific study of fossil animals, plants, and ancient life forms.",
    "banglaMeaning": "জীবাশ্ম বিজ্ঞান",
    "synonyms": [
      "Fossil science",
      "Prehistoric study"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Her childhood passion for dinosaur bones led her to study paleontology at university."
  },
  "palliate": {
    "word": "Palliate",
    "pos": "verb",
    "simpleDefinition": "To make a disease, pain, or offense less severe without curing it",
    "banglaMeaning": "উপশম করা / তীব্রতা কমানো",
    "synonyms": [
      "Ease",
      "Reduce",
      "Alleviate"
    ],
    "antonyms": [
      "Worsen",
      "Aggravate",
      "Increase"
    ],
    "example": "The medicine palliated the symptoms but did not cure."
  },
  "pampered": {
    "word": "Pampered",
    "pos": "adjective",
    "simpleDefinition": "Treated with excessive care, luxury, indulgence, or comfort.",
    "banglaMeaning": "অত্যাধিক প্রঙ্কয়",
    "synonyms": [
      "Spoiled",
      "Indulged",
      "Coddled"
    ],
    "antonyms": [
      "Neglected",
      "Deprived"
    ],
    "example": "The pampered house cat slept on velvet cushions and ate fresh salmon."
  },
  "panic": {
    "word": "Panic",
    "pos": "noun",
    "simpleDefinition": "Sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior.",
    "banglaMeaning": "ভয় পাওয়া",
    "synonyms": [
      "Terror",
      "Alarm",
      "Fright",
      "Hysteria"
    ],
    "antonyms": [
      "Calm",
      "Composure",
      "Serenity"
    ],
    "example": "When the emergency alarm rang, the staff evacuated the building without panic."
  },
  "pantheist": {
    "word": "Pantheist",
    "pos": "noun",
    "simpleDefinition": "A person who believes that God and the physical universe are one and the same.",
    "banglaMeaning": "সর্বেশ্বরবাদী",
    "synonyms": [
      "Nature worshiper"
    ],
    "antonyms": [
      "Atheist",
      "Monotheist"
    ],
    "example": "As a pantheist, the philosopher saw the divine spirit in forests, mountains, and rivers."
  },
  "parallelism": {
    "word": "Parallelism",
    "pos": "noun",
    "simpleDefinition": "The state of being parallel or showing clear structural or conceptual similarity.",
    "banglaMeaning": "সমান্তরাল",
    "synonyms": [
      "Similarity",
      "Correspondence",
      "Resemblance",
      "Alignment"
    ],
    "antonyms": [
      "Divergence",
      "Disparity",
      "Difference"
    ],
    "example": "Historians noted a striking parallelism between the political events of both eras."
  },
  "paramount": {
    "word": "Paramount",
    "pos": "adjective",
    "simpleDefinition": "More important than anything else; supreme",
    "banglaMeaning": "সর্বপ্রধান / সবচেয়ে গুরুত্বপূর্ণ",
    "synonyms": [
      "Supreme",
      "Foremost",
      "Chief"
    ],
    "antonyms": [
      "Minor",
      "Trivial",
      "Secondary"
    ],
    "example": "Education is of paramount importance in national development."
  },
  "parsimonious": {
    "word": "Parsimonious",
    "pos": "adjective",
    "simpleDefinition": "Very unwilling to spend money or use resources; excessively frugal",
    "banglaMeaning": "অতিশয় মিতব্যয়ী; কৃপণ",
    "synonyms": [
      "Stingy",
      "Miserly",
      "Cheap"
    ],
    "antonyms": [
      "Generous",
      "Lavish",
      "Liberal"
    ],
    "example": "The parsimonious boss rarely gave employees raises."
  },
  "partial": {
    "word": "Partial",
    "pos": "adjective",
    "simpleDefinition": "Favoring one side over another unfairly, or existing only in part.",
    "banglaMeaning": "পক্ষপাতী",
    "synonyms": [
      "Biased",
      "Prejudiced",
      "One-sided",
      "Incomplete"
    ],
    "antonyms": [
      "Impartial",
      "Fair",
      "Complete"
    ],
    "example": "A sports referee must never appear partial toward the home team."
  },
  "partisan": {
    "word": "Partisan",
    "pos": "adjective",
    "simpleDefinition": "Prejudiced in favor of a particular political party, faction, or cause.",
    "banglaMeaning": "পক্ষপাতী",
    "synonyms": [
      "Biased",
      "One-sided",
      "Factional",
      "Sectarian"
    ],
    "antonyms": [
      "Nonpartisan",
      "Impartial",
      "Neutral"
    ],
    "example": "The debate quickly degenerated into angry partisan bickering."
  },
  "pathetic": {
    "word": "Pathetic",
    "pos": "adjective",
    "simpleDefinition": "Arousing pity, sorrow, or sympathy, or miserably inadequate and weak.",
    "banglaMeaning": "করুন / মর্মস্পশর্শী",
    "synonyms": [
      "Pitiful",
      "Heartbreaking",
      "Inadequate",
      "Feeble"
    ],
    "antonyms": [
      "Admirable",
      "Impressive",
      "Inspiring"
    ],
    "example": "The shivering stray puppy let out a pathetic whimper in the rain."
  },
  "patronage": {
    "word": "Patronage",
    "pos": "noun",
    "simpleDefinition": "Financial support, backing, or encouragement given by a wealthy patron or customer.",
    "banglaMeaning": "সহযোগিতা",
    "synonyms": [
      "Sponsorship",
      "Backing",
      "Support",
      "Funding"
    ],
    "antonyms": [
      "Opposition",
      "Discouragement"
    ],
    "example": "Renaissance painters flourished thanks to the generous patronage of aristocratic families."
  },
  "paucity": {
    "word": "Paucity",
    "pos": "noun",
    "simpleDefinition": "The presence of something in only tiny or insufficient quantities; scarcity.",
    "banglaMeaning": "অভাব",
    "synonyms": [
      "Scarcity",
      "Shortage",
      "Dearth",
      "Lack"
    ],
    "antonyms": [
      "Abundance",
      "Plethora",
      "Surplus"
    ],
    "example": "The investigation stalled due to a paucity of reliable eyewitness evidence."
  },
  "pay off old scores": {
    "word": "Pay off old scores",
    "pos": "idiom",
    "simpleDefinition": "To settle a grudge or retaliate for past injuries or insults.",
    "banglaMeaning": "প্রতিশোধ নেয়া",
    "synonyms": [
      "Settle a grudge",
      "Get revenge",
      "Retaliate"
    ],
    "antonyms": [
      "Forgive",
      "Make peace"
    ],
    "example": "He used his newly acquired political power to pay off old scores against his opponents."
  },
  "peak": {
    "word": "Peak",
    "pos": "noun",
    "simpleDefinition": "The pointed top of a mountain, or the highest level or climax of achievement.",
    "banglaMeaning": "সর্বোচ্চ চূড়া",
    "synonyms": [
      "Summit",
      "Pinnacle",
      "Crest",
      "Climax"
    ],
    "antonyms": [
      "Base",
      "Bottom",
      "Nadir"
    ],
    "example": "She reached the peak of her scientific career when she won the Nobel Prize."
  },
  "pedantic": {
    "word": "Pedantic",
    "pos": "adjective",
    "simpleDefinition": "Excessively concerned with minor details, book learning, and formal rules",
    "banglaMeaning": "পাণ্ডিত্যভিমানী / খুঁটিনাটি নিয়মে অন্ধ",
    "synonyms": [
      "/ Fussy",
      "Overscrupulous",
      "Flexible"
    ],
    "antonyms": [
      "Practical",
      "Broad-"
    ],
    "example": "His pedantic style of writing bored every NTRCA Teacher Recruitment (2018)"
  },
  "pedestal": {
    "word": "Pedestal",
    "pos": "noun",
    "simpleDefinition": "A base or support on which a statue stands, or an idealized position of admiration.",
    "banglaMeaning": "স্তম্ভের পাদভূমি",
    "synonyms": [
      "Plinth",
      "Base",
      "Podium",
      "Support"
    ],
    "antonyms": [
      "Base"
    ],
    "example": "Do not place human leaders on a pedestal, because everyone makes mistakes."
  },
  "pedestrian": {
    "word": "Pedestrian",
    "pos": "adjective",
    "simpleDefinition": "Lacking inspiration, excitement, or originality; dull and commonplace.",
    "banglaMeaning": "পথচারী",
    "synonyms": [
      "Dull",
      "Ordinary",
      "Commonplace",
      "Uninspired"
    ],
    "antonyms": [
      "Exciting",
      "Remarkable",
      "Extraordinary"
    ],
    "example": "The novel had a pedestrian plot that failed to surprise or thrill readers."
  },
  "pensive": {
    "word": "Pensive",
    "pos": "adjective",
    "simpleDefinition": "Engaged in, involving, or reflecting deep, serious, or wistful thought.",
    "banglaMeaning": "চিন্তানিমগ্ন",
    "synonyms": [
      "Thoughtful",
      "Reflective",
      "Contemplative",
      "Wistful"
    ],
    "antonyms": [
      "Carefree",
      "Unreflective",
      "Cheerful"
    ],
    "example": "He stared into the fireplace in a pensive mood, pondering the past year."
  },
  "perjury": {
    "word": "Perjury",
    "pos": "noun",
    "simpleDefinition": "The offense of deliberately telling an untruth in a court of law after taking an oath.",
    "banglaMeaning": "আদালতে মিথ্যা সাক্ষ্যদান / শপথভঙ্গ",
    "synonyms": [
      "False testimony",
      "Lying under oath",
      "Mendacity"
    ],
    "antonyms": [
      "Truthfulness",
      "Honesty"
    ],
    "example": "The witness was charged with perjury after surveillance footage disproved his testimony."
  },
  "pernicious": {
    "word": "Pernicious",
    "pos": "adjective",
    "simpleDefinition": "Having a gradual, subtle, but extremely destructive and harmful effect",
    "banglaMeaning": "মারাত্মক ক্ষতিকর / অনিষ্টকর",
    "synonyms": [
      "Harmful",
      "Deadly",
      "Destructive"
    ],
    "antonyms": [
      "Beneficial",
      "Harmless",
      "Safe"
    ],
    "example": "Drugs have a pernicious effect on young minds."
  },
  "perplex": {
    "word": "Perplex",
    "pos": "verb",
    "simpleDefinition": "To make someone feel completely baffled, confused, or puzzled.",
    "banglaMeaning": "জটলি করা",
    "synonyms": [
      "Baffle",
      "Puzzle",
      "Confuse",
      "Mystify"
    ],
    "antonyms": [
      "Clarify",
      "Explain",
      "Enlighten"
    ],
    "example": "The bizarre chemical reaction continued to perplex the university researchers."
  },
  "persevering": {
    "word": "Persevering",
    "pos": "adjective",
    "simpleDefinition": "Continuing in a course of action despite difficulties, failures, or obstacles.",
    "banglaMeaning": "অধ্যবসায়ী",
    "synonyms": [
      "Persistent",
      "Tenacious",
      "Determined",
      "Steadfast"
    ],
    "antonyms": [
      "Irresolute",
      "Wavering",
      "Faint-hearted"
    ],
    "example": "Through persevering effort, the young entrepreneur turned her small bakery into a franchise."
  },
  "persistent": {
    "word": "Persistent",
    "pos": "adjective",
    "simpleDefinition": "Continuing firmly or obstinately; lasting for an enduring or long period.",
    "banglaMeaning": "নাছোড়বান্দা",
    "synonyms": [
      "Tenacious",
      "Enduring",
      "Relentless",
      "Stubborn"
    ],
    "antonyms": [
      "Yielding",
      "Intermittent",
      "Temporary"
    ],
    "example": "Her persistent cough finally convinced her to see a specialist for a checkup."
  },
  "pertinent": {
    "word": "Pertinent",
    "pos": "adjective",
    "simpleDefinition": "Relevant or applicable to a particular matter; appropriate",
    "banglaMeaning": "প্রাসঙ্গিক / যথার্থ",
    "synonyms": [
      "Relevant",
      "Applicable",
      "Fitting"
    ],
    "antonyms": [
      "Irrelevant",
      "Unrelated",
      "Inappropriate"
    ],
    "example": "She raised pertinent questions during the discussion."
  },
  "pessimist": {
    "word": "Pessimist",
    "pos": "noun",
    "simpleDefinition": "A person who tends to expect the worst possible outcome in any situation.",
    "banglaMeaning": "হতাশাবাদী",
    "synonyms": [
      "Cynic",
      "Defeatist",
      "Gloom-monger"
    ],
    "antonyms": [
      "Optimist",
      "Idealist"
    ],
    "example": "A pessimist expects rain on every sunny day and forgets to enjoy the warmth."
  },
  "petrology": {
    "word": "Petrology",
    "pos": "noun",
    "simpleDefinition": "The scientific study of rocks, including their origins, composition, and structure.",
    "banglaMeaning": "ভূতত্ত্ববিদ্যার একটি শাখা যেখানে শিলার উৎপত্তি, গঠন, বিন্যাস এবং এর পরিবর্তনের প্রক্রিয়া নিয়ে বৈজ্ঞানিক আলোচনা করা হয়",
    "synonyms": [
      "Rock science",
      "Lithology"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Students of petrology spend weeks examining crystalline volcanic rock formations."
  },
  "philanthropist": {
    "word": "Philanthropist",
    "pos": "noun",
    "simpleDefinition": "A person who seeks to promote the welfare of others, especially by donating money.",
    "banglaMeaning": "মানবহিতৈষী ব্যক্তি (বিশ্বপ্রেমিক)",
    "synonyms": [
      "Benefactor",
      "Donor",
      "Humanitarian",
      "Patron"
    ],
    "antonyms": [
      "Miser",
      "Misanthrope"
    ],
    "example": "The generous philanthropist built libraries and healthcare clinics across the countryside."
  },
  "philatelist": {
    "word": "Philatelist",
    "pos": "noun",
    "simpleDefinition": "A person who collects, studies, and preserves postage stamps.",
    "banglaMeaning": "ডাকটিকিট সংগ্রহকারী",
    "synonyms": [
      "Stamp collector"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The avid philatelist paid a large sum for a rare nineteenth-century postage stamp."
  },
  "pilferer": {
    "word": "Pilferer",
    "pos": "noun",
    "simpleDefinition": "A thief who repeatedly steals small or relatively worthless items.",
    "banglaMeaning": "ছিঁচকে চোর",
    "synonyms": [
      "Petty thief",
      "Shoplifter",
      "Filcher"
    ],
    "antonyms": [
      "Honest person"
    ],
    "example": "Security officers identified the pilferer who was taking stationery from the supply room."
  },
  "piquant": {
    "word": "Piquant",
    "pos": "adjective",
    "simpleDefinition": "Having a pleasantly sharp or spicy flavor, or pleasantly stimulating and exciting.",
    "banglaMeaning": "ঝাল; মুখরোচক; তীব্র স্বাদযুক্ত",
    "synonyms": [
      "Spicy",
      "Tangy",
      "Flavorful",
      "Intriguing"
    ],
    "antonyms": [
      "Bland",
      "Tasteless",
      "Dull"
    ],
    "example": "The roasted fish was served with a piquant sauce made of lime and red chilies."
  },
  "pitfall": {
    "word": "Pitfall",
    "pos": "noun",
    "simpleDefinition": "A hidden or unsuspected danger, trap, or difficulty in a plan or action.",
    "banglaMeaning": "ফাঁদ",
    "synonyms": [
      "Hazard",
      "Danger",
      "Trap",
      "Snare"
    ],
    "antonyms": [
      "Advantage",
      "Safety"
    ],
    "example": "Borrowing large amounts of credit card debt is a common financial pitfall for college graduates."
  },
  "pithy": {
    "word": "Pithy",
    "pos": "adjective",
    "simpleDefinition": "Concise, meaningful, and forcefully expressive in language.",
    "banglaMeaning": "সংক্ষিপ্ত",
    "synonyms": [
      "Concise",
      "Succinct",
      "Brief",
      "Trenchant"
    ],
    "antonyms": [
      "Verbose",
      "Wordy",
      "Rambling"
    ],
    "example": "Her speech was short, pithy, and full of memorable practical wisdom."
  },
  "pittance": {
    "word": "Pittance",
    "pos": "noun",
    "simpleDefinition": "A very small or inadequate amount of money received as payment.",
    "banglaMeaning": "সামান্য বেতন",
    "synonyms": [
      "Trifle",
      "Small wage",
      "Modicum",
      "Tiny sum"
    ],
    "antonyms": [
      "Fortune",
      "Windfall",
      "Wealth"
    ],
    "example": "The migrant laborers worked twelve hours a day in harsh heat for a meager pittance."
  },
  "placatory": {
    "word": "Placatory",
    "pos": "adjective",
    "simpleDefinition": "Intended to calm, appease, or make someone less angry or hostile.",
    "banglaMeaning": "আপোস",
    "synonyms": [
      "Conciliatory",
      "Pacifying",
      "Appeasing",
      "Mollifying"
    ],
    "antonyms": [
      "Provocative",
      "Inflammatory",
      "Antagonistic"
    ],
    "example": "He offered a placatory apology to soothe the customer's legitimate frustration."
  },
  "placid": {
    "word": "Placid",
    "pos": "adjective",
    "simpleDefinition": "Not easily upset or excited; calm and peaceful",
    "banglaMeaning": "প্রশান্ত / শান্তশিষ্ট",
    "synonyms": [
      "Calm",
      "Peaceful",
      "Serene"
    ],
    "antonyms": [
      "Agitated",
      "Angry",
      "Turbulent"
    ],
    "example": "The lake looked placid in the early morning light."
  },
  "plainness": {
    "word": "Plainness",
    "pos": "noun",
    "simpleDefinition": "The quality of being simple, clear, unadorned, or direct.",
    "banglaMeaning": "সরলতা",
    "synonyms": [
      "Simplicity",
      "Clarity",
      "Directness",
      "Modesty"
    ],
    "antonyms": [
      "Complexity",
      "Extravagance",
      "Ornamentation"
    ],
    "example": "The plainness of his speech made the difficult legal concept understandable to all."
  },
  "plaintiff": {
    "word": "Plaintiff",
    "pos": "noun",
    "simpleDefinition": "A person who brings a lawsuit or legal accusation against another in court.",
    "banglaMeaning": "বাদী",
    "synonyms": [
      "Complainant",
      "Claimant",
      "Petitioner",
      "Accuser"
    ],
    "antonyms": [
      "Defendant"
    ],
    "example": "The plaintiff presented signed contracts to prove the builder broke his promise."
  },
  "plausibility": {
    "word": "Plausibility",
    "pos": "noun",
    "simpleDefinition": "The quality of seeming reasonable, believable, or probable.",
    "banglaMeaning": "বিশ্বাসযোগ্যতা",
    "synonyms": [
      "Credibility",
      "Believability",
      "Likelihood",
      "Probability"
    ],
    "antonyms": [
      "Implausibility",
      "Improbability",
      "Absurdity"
    ],
    "example": "The detective scrutinized the plausibility of the suspect's unusual alibi."
  },
  "plausible": {
    "word": "Plausible",
    "pos": "adjective",
    "simpleDefinition": "Seeming reasonable, probable, and worthy of belief",
    "banglaMeaning": "বিশ্বাসযোগ্য / আপাতদৃষ্টিতে সঠিক",
    "synonyms": [
      "Believable",
      "Reasonable",
      "Credible"
    ],
    "antonyms": [
      "Implausible",
      "Unlikely",
      "Incredible"
    ],
    "example": "The student gave a plausible reason for his absence."
  },
  "plenty": {
    "word": "Plenty",
    "pos": "noun",
    "simpleDefinition": "A large or sufficient amount or quantity; abundance.",
    "banglaMeaning": "প্রচুর",
    "synonyms": [
      "Abundance",
      "Sufficiency",
      "Wealth",
      "Profusion"
    ],
    "antonyms": [
      "Scarcity",
      "Lack",
      "Shortage"
    ],
    "example": "There was plenty of warm food and clean drinking water available at the relief camp."
  },
  "plethora": {
    "word": "Plethora",
    "pos": "noun",
    "simpleDefinition": "A large or excessive amount of something; an overabundance.",
    "banglaMeaning": "আধিক্য বা প্রচুর পরিমাণ",
    "synonyms": [
      "Excess",
      "Abundance",
      "Surplus",
      "Surfeit"
    ],
    "antonyms": [
      "Scarcity",
      "Dearth",
      "Paucity"
    ],
    "example": "The bookstore features a plethora of study guides for standardized exams."
  },
  "plucky": {
    "word": "Plucky",
    "pos": "adjective",
    "simpleDefinition": "Showing brave and spirited courage in the face of difficulties.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "Brave",
      "Courageous",
      "Spirited",
      "Bold"
    ],
    "antonyms": [
      "Cowardly",
      "Timid",
      "Fearful"
    ],
    "example": "The plucky little kitten climbed out of the ditch all on its own."
  },
  "poignant": {
    "word": "Poignant",
    "pos": "adjective",
    "simpleDefinition": "Evoking a keen, sharp sense of sadness, regret, or deep emotional empathy.",
    "banglaMeaning": "জ্ঞানিকর / দুঃখ উদ্রেককারী",
    "synonyms": [
      "Touching",
      "Moving",
      "Heartbreaking",
      "Affecting"
    ],
    "antonyms": [
      "Unemotional",
      "Indifferent",
      "Cheerful"
    ],
    "example": "The war memorial contains poignant letters written by young soldiers to their mothers."
  },
  "polity": {
    "word": "Polity",
    "pos": "noun",
    "simpleDefinition": "An organized society, state, or nation considered as a political entity.",
    "banglaMeaning": "রাজ্ঞ ব্যবস্থা",
    "synonyms": [
      "Commonwealth",
      "State",
      "Civil society",
      "Government"
    ],
    "antonyms": [
      "Anarchy"
    ],
    "example": "Democratic participation is essential for the healthy functioning of any modern polity."
  },
  "polyglot": {
    "word": "Polyglot",
    "pos": "noun",
    "simpleDefinition": "A person who knows and is able to speak or write multiple languages fluently.",
    "banglaMeaning": "বস্থভাষী",
    "synonyms": [
      "Multilingual person",
      "Linguist"
    ],
    "antonyms": [
      "Monoglot",
      "Monolingual person"
    ],
    "example": "The international diplomat was a polyglot fluent in five distinct languages."
  },
  "pompous": {
    "word": "Pompous",
    "pos": "adjective",
    "simpleDefinition": "Self-important and pretending to be grand",
    "banglaMeaning": "আত্মম্ভরী / দেমাগী",
    "synonyms": [
      "Arrogant",
      "Boastful",
      "Pretentious"
    ],
    "antonyms": [
      "Humble",
      "Modest",
      "Simple"
    ],
    "example": "The pompous official refused to listen to complaints."
  },
  "ponder": {
    "word": "Ponder",
    "pos": "verb",
    "simpleDefinition": "To think about something carefully and deeply, especially before making a decision.",
    "banglaMeaning": "গভীরভাবে চিন্তা করা",
    "synonyms": [
      "Contemplate",
      "Reflect",
      "Meditate",
      "Deliberate"
    ],
    "antonyms": [
      "Ignore",
      "Overlook",
      "Dismiss"
    ],
    "example": "She sat quietly by the serene lake to ponder her future career plans."
  },
  "pose": {
    "word": "Pose",
    "pos": "verb",
    "simpleDefinition": "To present or constitute a problem or question, or hold a particular posture.",
    "banglaMeaning": "জাহির করা",
    "synonyms": [
      "Present",
      "Cause",
      "Constitute",
      "Position"
    ],
    "antonyms": [
      "Resolve",
      "Alleviate"
    ],
    "example": "Rising carbon emissions pose an imminent danger to global marine ecosystems."
  },
  "possess": {
    "word": "Possess",
    "pos": "verb",
    "simpleDefinition": "To have, hold, or own something as property, a trait, or a skill.",
    "banglaMeaning": "করায়ধ করা",
    "synonyms": [
      "Own",
      "Have",
      "Hold",
      "Retain"
    ],
    "antonyms": [
      "Lack",
      "Lose",
      "Abandon"
    ],
    "example": "Applicants for the managerial role must possess strong organizational skills."
  },
  "possessed": {
    "word": "Possessed",
    "pos": "adjective",
    "simpleDefinition": "Controlled by an evil spirit, or driven by a fierce, overpowering passion.",
    "banglaMeaning": "অধিকারী",
    "synonyms": [
      "Consumed",
      "Obsessed",
      "Enchanted",
      "Driven"
    ],
    "antonyms": [
      "Calm",
      "Composed",
      "Rational"
    ],
    "example": "The sprinter ran the final hundred meters as if possessed by fierce determination."
  },
  "postscript": {
    "word": "Postscript",
    "pos": "noun",
    "simpleDefinition": "An additional message added at the end of a letter after the signature (P.S.).",
    "banglaMeaning": "অতিরিক্ত বা র্সবশেষ তথ্য",
    "synonyms": [
      "Addendum",
      "Afterword",
      "Supplement",
      "Note"
    ],
    "antonyms": [
      "Preface",
      "Foreword"
    ],
    "example": "In a brief postscript, she asked her brother to send her winter coat by post."
  },
  "postulate": {
    "word": "Postulate",
    "pos": "verb",
    "simpleDefinition": "To suggest or assume the truth of something as the foundation for reasoning.",
    "banglaMeaning": "স্বীকার্য",
    "synonyms": [
      "Hypothesize",
      "Propose",
      "Theorize",
      "Assume"
    ],
    "antonyms": [
      "Disprove",
      "Refute",
      "Deny"
    ],
    "example": "Physicists postulate that dark matter constitutes most of the universe's mass."
  },
  "potty": {
    "word": "Potty",
    "pos": "adjective",
    "simpleDefinition": "Slightly crazy, eccentric, or silly; foolish.",
    "banglaMeaning": "তুচ্ছ; গুরুত্বহীন; নগণ্য",
    "synonyms": [
      "Eccentric",
      "Crazy",
      "Silly",
      "Mad"
    ],
    "antonyms": [
      "Sane",
      "Sensible",
      "Rational"
    ],
    "example": "You must be potty to go hiking in the woods during a raging blizzard."
  },
  "pout": {
    "word": "Pout",
    "pos": "verb",
    "simpleDefinition": "To push out one's lips in petulant annoyance, irritation, or disappointment.",
    "banglaMeaning": "বিরক্তিভাব / ঠোঁট ফুলিয়ে রাগ দেখানো",
    "synonyms": [
      "Sulk",
      "Scowl",
      "Frown",
      "Glower"
    ],
    "antonyms": [
      "Smile",
      "Grin"
    ],
    "example": "The little boy began to pout when his mother turned off the cartoon show."
  },
  "pragmatic": {
    "word": "Pragmatic",
    "pos": "adjective",
    "simpleDefinition": "Dealing with things sensibly and realistically based on practical considerations.",
    "banglaMeaning": "বাস্তবধর্মশী প্রয়োগবাদী",
    "synonyms": [
      "Practical",
      "Realistic",
      "Sensible",
      "Down-to-earth"
    ],
    "antonyms": [
      "Idealistic",
      "Impractical",
      "Unrealistic"
    ],
    "example": "We need a pragmatic strategy that solves traffic congestion without bankrupting the city."
  },
  "preamble": {
    "word": "Preamble",
    "pos": "noun",
    "simpleDefinition": "A preliminary or introductory statement to an official document or speech.",
    "banglaMeaning": "প্রস্তাবনা",
    "synonyms": [
      "Introduction",
      "Preface",
      "Prologue",
      "Foreword"
    ],
    "antonyms": [
      "Epilogue",
      "Conclusion",
      "Afterword"
    ],
    "example": "The preamble of the national constitution declares the fundamental rights of all citizens."
  },
  "precarious": {
    "word": "Precarious",
    "pos": "adjective",
    "simpleDefinition": "Dangerously insecure, unstable, and uncertain",
    "banglaMeaning": "অনিশ্চিত / ঝুঁকিপূর্ণ",
    "synonyms": [
      "Unstable",
      "Risky",
      "Dangerous"
    ],
    "antonyms": [
      "Stable",
      "Safe",
      "Secure"
    ],
    "example": "The workers lived in precarious conditions."
  },
  "precise": {
    "word": "Precise",
    "pos": "adjective",
    "simpleDefinition": "Marked by exactness and accuracy of detail or expression.",
    "banglaMeaning": "সংক্ষিপ্ত করা / অতিসতর্ক",
    "synonyms": [
      "Exact",
      "Accurate",
      "Specific",
      "Detailed"
    ],
    "antonyms": [
      "Vague",
      "Imprecise",
      "Inaccurate"
    ],
    "example": "The laboratory technician gave precise instructions on how to measure the chemical solution."
  },
  "predominance": {
    "word": "Predominance",
    "pos": "noun",
    "simpleDefinition": "The state or condition of being greater in power, influence, or quantity.",
    "banglaMeaning": "আধিপত্য",
    "synonyms": [
      "Dominance",
      "Superiority",
      "Prevalence",
      "Ascendancy"
    ],
    "antonyms": [
      "Inferiority",
      "Minority",
      "Subordination"
    ],
    "example": "The predominance of renewable solar energy has significantly reduced factory emissions."
  },
  "preface": {
    "word": "Preface",
    "pos": "noun",
    "simpleDefinition": "An introductory explanation at the beginning of a book or publication.",
    "banglaMeaning": "প্রস্তাবনা",
    "synonyms": [
      "Foreword",
      "Introduction",
      "Prologue"
    ],
    "antonyms": [
      "Afterword",
      "Epilogue"
    ],
    "example": "In the author's preface, she explained what inspired her to write the historical novel."
  },
  "prejudice": {
    "word": "Prejudice",
    "pos": "noun",
    "simpleDefinition": "Preconceived opinion that is not based on reason or actual experience",
    "banglaMeaning": "কুসংস্কার / পক্ষপাতিত্ব",
    "synonyms": [
      "Bias",
      "Discrimination",
      "Partiality"
    ],
    "antonyms": [
      "Fairness",
      "Impartiality",
      "Justice"
    ],
    "example": "Racial prejudice still exists in many societies."
  },
  "prejudiced": {
    "word": "Prejudiced",
    "pos": "adjective",
    "simpleDefinition": "Having or showing an unfair dislike or bias against a group of people.",
    "banglaMeaning": "পক্ষপাতী",
    "synonyms": [
      "Biased",
      "Bigoted",
      "Discriminatory",
      "Partial"
    ],
    "antonyms": [
      "Unbiased",
      "Fair",
      "Impartial"
    ],
    "example": "A fair court must ensure jurors are not prejudiced against the defendant."
  },
  "preponderance": {
    "word": "Preponderance",
    "pos": "noun",
    "simpleDefinition": "The quality of being greater in weight, quantity, influence, or importance.",
    "banglaMeaning": "ভারাধিক্য",
    "synonyms": [
      "Majority",
      "Dominance",
      "Prevalence",
      "Bulk"
    ],
    "antonyms": [
      "Minority",
      "Paucity",
      "Deficit"
    ],
    "example": "The preponderance of clinical evidence indicates that regular exercise lengthens life."
  },
  "pressing": {
    "word": "Pressing",
    "pos": "adjective",
    "simpleDefinition": "Requiring immediate or prompt action; urgent and critical.",
    "banglaMeaning": "জরুরী",
    "synonyms": [
      "Urgent",
      "Crucial",
      "Acute",
      "Critical"
    ],
    "antonyms": [
      "Unimportant",
      "Trivial",
      "Unhurried"
    ],
    "example": "Providing clean water to drought-stricken villages is our most pressing duty."
  },
  "pressurizing": {
    "word": "Pressurizing",
    "pos": "verb",
    "simpleDefinition": "Applying intense persuasion or coercion to force someone to act.",
    "banglaMeaning": "চাপ প্রয়োগ",
    "synonyms": [
      "Coercing",
      "Compelling",
      "Urging",
      "Badgering"
    ],
    "antonyms": [
      "Leaving alone",
      "Releasing"
    ],
    "example": "Aggressive lenders were pressurizing homeowners into taking high-interest loans."
  },
  "pretend": {
    "word": "Pretend",
    "pos": "verb",
    "simpleDefinition": "To act so as to make it appear that something is true when it is not.",
    "banglaMeaning": "সাজা / মিথ্যা বর্ণনা করা",
    "synonyms": [
      "Feign",
      "Fake",
      "Simulate",
      "Dissemble"
    ],
    "antonyms": [
      "Be genuine",
      "Be truthful"
    ],
    "example": "She tried to pretend she was calm despite her racing heart before the interview."
  },
  "pretentious": {
    "word": "Pretentious",
    "pos": "adjective",
    "simpleDefinition": "Attempting to impress by pretending to possess greater importance or skill",
    "banglaMeaning": "ভণ্ডামিযুক্ত / আত্মম্ভরী / দাম্ভিক",
    "synonyms": [
      "Pompous",
      "Showy",
      "Affected"
    ],
    "antonyms": [
      "Humble",
      "Simple",
      "Genuine"
    ],
    "example": "His pretentious behaviour made him unpopular."
  },
  "pretty penny": {
    "word": "Pretty penny",
    "pos": "idiom",
    "simpleDefinition": "A very large or substantial sum of money.",
    "banglaMeaning": "অত্যন্ত ব্যয় বস্থল",
    "synonyms": [
      "A fortune",
      "Tidy sum",
      "Substantial sum"
    ],
    "antonyms": [
      "Pittance",
      "Small change"
    ],
    "example": "Restoring that vintage sports car must have cost him a pretty penny."
  },
  "prevalent": {
    "word": "Prevalent",
    "pos": "adjective",
    "simpleDefinition": "Widespread in a particular area, community, or period of time.",
    "banglaMeaning": "প্রচলিত",
    "synonyms": [
      "Widespread",
      "Common",
      "Prevailing",
      "Frequent"
    ],
    "antonyms": [
      "Rare",
      "Uncommon",
      "Scarce"
    ],
    "example": "Smartphone usage is prevalent among people of all ages today."
  },
  "prevaricator": {
    "word": "Prevaricator",
    "pos": "noun",
    "simpleDefinition": "A person who deliberately speaks falsely or avoids telling the whole truth.",
    "banglaMeaning": "সত্য গোপনকারী",
    "synonyms": [
      "Liar",
      "Fibber",
      "Equivocator",
      "Deceiver"
    ],
    "antonyms": [
      "Truth-teller",
      "Honest person"
    ],
    "example": "The cross-examination revealed the dishonest witness to be an untrustworthy prevaricator."
  },
  "prick": {
    "word": "Prick",
    "pos": "verb",
    "simpleDefinition": "To make a tiny puncture with a sharp object, or feel a sudden sharp pinch.",
    "banglaMeaning": "ছিদ্র করা",
    "synonyms": [
      "Puncture",
      "Pierce",
      "Poke",
      "Stab"
    ],
    "antonyms": [
      "Soothe",
      "Heal"
    ],
    "example": "Be mindful when harvesting wild blackberries so the sharp thorns do not prick your skin."
  },
  "prima facie": {
    "word": "Prima facie",
    "pos": "adjective",
    "simpleDefinition": "Accepted as correct or sufficient upon initial inspection until disproved.",
    "banglaMeaning": "প্রথম দশর্নে",
    "synonyms": [
      "Self-evident",
      "Apparent",
      "Presumptive"
    ],
    "antonyms": [
      "Conclusive",
      "Proven false"
    ],
    "example": "The recovered fingerprint provided prima facie evidence tying him to the burglary."
  },
  "procession": {
    "word": "Procession",
    "pos": "noun",
    "simpleDefinition": "A number of people or vehicles moving forward in an orderly, formal fashion.",
    "banglaMeaning": "মিছিল বা শোভাযাত্র",
    "synonyms": [
      "Parade",
      "March",
      "Cavalcade",
      "Column"
    ],
    "antonyms": [
      "Dispersal"
    ],
    "example": "A joyful procession of graduates marched proudly across the university lawn."
  },
  "prodigal": {
    "word": "Prodigal",
    "pos": "adjective",
    "simpleDefinition": "Spending money or resources wastefully and extravagantly.",
    "banglaMeaning": "বেহিসাবী ভাবে ব্যয় করা",
    "synonyms": [
      "Extravagant",
      "Wasteful",
      "Profligate",
      "Spendthrift"
    ],
    "antonyms": [
      "Frugal",
      "Thrifty",
      "Economical"
    ],
    "example": "The prodigal prince spent fortunes on lavish parties and ended up in heavy debt."
  },
  "prodigy": {
    "word": "Prodigy",
    "pos": "noun",
    "simpleDefinition": "A young person endowed with exceptional abilities, qualities, or genius.",
    "banglaMeaning": "অসাধারণ প্রতিভাবান বালক",
    "synonyms": [
      "Genius",
      "Wunderkind",
      "Phenomenon",
      "Marvel"
    ],
    "antonyms": [
      "Simpleton",
      "Amateur"
    ],
    "example": "The nine-year-old piano prodigy amazed the audience with her flawless performance."
  },
  "profane": {
    "word": "Profane",
    "pos": "adjective",
    "simpleDefinition": "Showing disrespect for sacred things, or secular rather than religious.",
    "banglaMeaning": "অপবিত্র করা",
    "synonyms": [
      "Irreverent",
      "Secular",
      "Unholy",
      "Disrespectful"
    ],
    "antonyms": [
      "Sacred",
      "Holy",
      "Reverent"
    ],
    "example": "Visitors are politely asked to refrain from using profane language inside the ancient chapel."
  },
  "profligate": {
    "word": "Profligate",
    "pos": "adjective",
    "simpleDefinition": "Recklessly extravagant or wasteful in the use of resources or money.",
    "banglaMeaning": "লম্পট ব্যক্তি; দুশ্চরিত্র মানুষ",
    "synonyms": [
      "Wasteful",
      "Extravagant",
      "Improvident",
      "Spendthrift"
    ],
    "antonyms": [
      "Frugal",
      "Thrifty",
      "Prudent"
    ],
    "example": "Citizens protested against the municipality's profligate spending on luxury banquets."
  },
  "proliferate": {
    "word": "Proliferate",
    "pos": "verb",
    "simpleDefinition": "To increase rapidly in numbers; multiply and expand quickly.",
    "banglaMeaning": "সংখ্যায় বৃদ্ধি পাওয়া",
    "synonyms": [
      "Multiply",
      "Mushroom",
      "Spread",
      "Burgeon"
    ],
    "antonyms": [
      "Decrease",
      "Dwindle",
      "Diminish"
    ],
    "example": "Coffee shops and bakeries began to proliferate along the newly paved avenue."
  },
  "prolific": {
    "word": "Prolific",
    "pos": "adjective",
    "simpleDefinition": "Producing large quantities of fruit, foliage, or creative works",
    "banglaMeaning": "উর্বর / বিপুল উৎপাদনশীল",
    "synonyms": [
      "/ Productive",
      "Fertile",
      "Creative"
    ],
    "antonyms": [
      "Unproductive",
      "Barren",
      "Infertile"
    ],
    "example": "The prolific writer published thirty novels in his lifetime."
  },
  "prolong": {
    "word": "Prolong",
    "pos": "verb",
    "simpleDefinition": "To extend the duration or span of something",
    "banglaMeaning": "দীর্ঘায়িত করা / বাড়ানো",
    "synonyms": [
      "Extend",
      "Lengthen",
      "Stretch"
    ],
    "antonyms": [
      "Shorten",
      "Curtail",
      "Reduce"
    ],
    "example": "Unnecessary debates only prolong the meeting."
  },
  "promiscuous": {
    "word": "Promiscuous",
    "pos": "adjective",
    "simpleDefinition": "Characterized by indiscriminate mingling or casual relationships",
    "banglaMeaning": "বাছবিচারহীন / বাছবিচারহীন মেলামেশা",
    "synonyms": [
      "/ Indiscriminate",
      "Loose",
      "Immoral"
    ],
    "antonyms": [
      "Selective",
      "Moral",
      "Chaste"
    ],
    "example": "The novel explored the promiscuous lifestyle of the era."
  },
  "prompt": {
    "word": "Prompt",
    "pos": "adjective",
    "simpleDefinition": "Done without delay; immediate, punctual, and timely.",
    "banglaMeaning": "দ্রুত",
    "synonyms": [
      "Immediate",
      "Quick",
      "Punctual",
      "Swift"
    ],
    "antonyms": [
      "Slow",
      "Tardy",
      "Delayed"
    ],
    "example": "Thank you for your prompt response to our emergency customer support ticket."
  },
  "propensity": {
    "word": "Propensity",
    "pos": "noun",
    "simpleDefinition": "An inclination or natural tendency to behave in a particular way.",
    "banglaMeaning": "প্রবণতা",
    "synonyms": [
      "Tendency",
      "Inclination",
      "Penchant",
      "Leaning"
    ],
    "antonyms": [
      "Aversion",
      "Disinclination"
    ],
    "example": "He has a recognized propensity to speak without thinking when put under pressure."
  },
  "propitious": {
    "word": "Propitious",
    "pos": "adjective",
    "simpleDefinition": "Giving or indicating a good chance of future success; favorable",
    "banglaMeaning": "অনুকূল / মঙ্গলময়",
    "synonyms": [
      "Favourable",
      "Auspicious",
      "Promising"
    ],
    "antonyms": [
      "Unfavourable",
      "Inauspicious",
      "Ominous"
    ],
    "example": "The weather was propitious for the outdoor ceremony."
  },
  "proportionate": {
    "word": "Proportionate",
    "pos": "adjective",
    "simpleDefinition": "Corresponding in size, degree, or intensity; commensurate.",
    "banglaMeaning": "আনুপাতিক",
    "synonyms": [
      "Proportional",
      "Commensurate",
      "Balanced",
      "Equal"
    ],
    "antonyms": [
      "Disproportionate",
      "Unequal"
    ],
    "example": "The bonus payment was proportionate to the number of successful sales achieved."
  },
  "protract": {
    "word": "Protract",
    "pos": "verb",
    "simpleDefinition": "To prolong, extend, or drag out in duration.",
    "banglaMeaning": "দীর্ঘায়িত করা",
    "synonyms": [
      "Prolong",
      "Extend",
      "Lengthen",
      "Drag out"
    ],
    "antonyms": [
      "Shorten",
      "Curtail",
      "Abbreviate"
    ],
    "example": "Do not protract the meeting unnecessarily when everyone has already agreed."
  },
  "provincial": {
    "word": "Provincial",
    "pos": "adjective",
    "simpleDefinition": "Belonging to a province, or narrow-minded, insular, and unsophisticated.",
    "banglaMeaning": "সীমাবদ্ধ",
    "synonyms": [
      "Parochial",
      "Insular",
      "Rural",
      "Narrow-minded"
    ],
    "antonyms": [
      "Cosmopolitan",
      "Broad-minded",
      "Sophisticated"
    ],
    "example": "Living in different world capitals helped her outgrow her narrow provincial perspective."
  },
  "provocation": {
    "word": "Provocation",
    "pos": "noun",
    "simpleDefinition": "Action or speech that makes someone annoyed, angry, or retaliatory.",
    "banglaMeaning": "প্ররোচনা",
    "synonyms": [
      "Incitement",
      "Goading",
      "Affront",
      "Stirring"
    ],
    "antonyms": [
      "Pacification",
      "Conciliation"
    ],
    "example": "He kept his temper calmly despite repeated deliberate provocation from the opposition."
  },
  "proximate": {
    "word": "Proximate",
    "pos": "adjective",
    "simpleDefinition": "Closest in relationship, space, or time; immediately adjacent.",
    "banglaMeaning": "নিকটতম",
    "synonyms": [
      "Nearest",
      "Closest",
      "Adjacent",
      "Immediate"
    ],
    "antonyms": [
      "Distant",
      "Remote",
      "Far"
    ],
    "example": "Faulty electrical wiring was identified as the proximate cause of the warehouse fire."
  },
  "prudent": {
    "word": "Prudent",
    "pos": "adjective",
    "simpleDefinition": "Acting with or showing careful judgment and thought for the future",
    "banglaMeaning": "দূরদর্শী / সুবিচক্ষণ",
    "synonyms": [
      "Wise",
      "Careful",
      "Sensible"
    ],
    "antonyms": [
      "Reckless",
      "Foolish",
      "A"
    ],
    "example": "prudent investor diversifies his Bank Recruitment Exam (Sonali Bank, 2022)"
  },
  "pseudonym": {
    "word": "Pseudonym",
    "pos": "noun",
    "simpleDefinition": "A fictitious name used by an author or artist to conceal true identity.",
    "banglaMeaning": "ছদ্মনাম",
    "synonyms": [
      "Pen name",
      "Alias",
      "Assumed name"
    ],
    "antonyms": [
      "Real name"
    ],
    "example": "The famous Victorian author published several satirical novels under an anonymous pseudonym."
  },
  "publicize": {
    "word": "Publicize",
    "pos": "verb",
    "simpleDefinition": "To make something widely known to the public through media or advertisements.",
    "banglaMeaning": "প্রচার করা",
    "synonyms": [
      "Advertise",
      "Promote",
      "Announce",
      "Broadcast"
    ],
    "antonyms": [
      "Conceal",
      "Suppress",
      "Hide"
    ],
    "example": "The community group placed banners across town to publicize the charity marathon."
  },
  "puerile": {
    "word": "Puerile",
    "pos": "adjective",
    "simpleDefinition": "Childishly silly, immature, or trivial.",
    "banglaMeaning": "তুজ্ঞ",
    "synonyms": [
      "Childish",
      "Immature",
      "Infantile",
      "Juvenile"
    ],
    "antonyms": [
      "Mature",
      "Sensible",
      "Adult"
    ],
    "example": "Throwing paper airplanes across the boardroom was an example of puerile behavior."
  },
  "punctilious": {
    "word": "Punctilious",
    "pos": "adjective",
    "simpleDefinition": "Showing great attention to detail, strict etiquette, or correct behavior.",
    "banglaMeaning": "খুঁটিনাটি ব্যাপারে অতি সতর্ক",
    "synonyms": [
      "Meticulous",
      "Conscientious",
      "Scrupulous",
      "Exact"
    ],
    "antonyms": [
      "Careless",
      "Sloppy",
      "Negligent"
    ],
    "example": "The host was punctilious about seating each guest according to royal protocol."
  },
  "pungent": {
    "word": "Pungent",
    "pos": "adjective",
    "simpleDefinition": "Having a sharply strong taste or smell; biting and caustic",
    "banglaMeaning": "তীব্র / ঝাঁঝালো",
    "synonyms": [
      "(  ) Sharp",
      "Strong",
      "Acrid"
    ],
    "antonyms": [
      "Mild",
      "Bland",
      "Tasteless"
    ],
    "example": "The pungent smell of chemicals filled the laboratory."
  },
  "push sale": {
    "word": "Push sale",
    "pos": "noun",
    "simpleDefinition": "An aggressive sales technique that pushes goods forcefully onto buyers.",
    "banglaMeaning": "জোর করে বিক্রি করা",
    "synonyms": [
      "Hard sell",
      "Aggressive marketing"
    ],
    "antonyms": [
      "Soft sell"
    ],
    "example": "The electronics retailer used push sale incentives to clear old models off shelves."
  },
  "pusillanimous": {
    "word": "Pusillanimous",
    "pos": "adjective",
    "simpleDefinition": "Showing a lack of courage, boldness, or determination; timid.",
    "banglaMeaning": "ভীতু",
    "synonyms": [
      "Cowardly",
      "Timid",
      "Fearful",
      "Spineless"
    ],
    "antonyms": [
      "Brave",
      "Courageous",
      "Bold"
    ],
    "example": "The pusillanimous manager refused to defend his team against baseless accusations."
  },
  "put up with": {
    "word": "Put up with",
    "pos": "idiom",
    "simpleDefinition": "To tolerate, endure, or bear an unpleasant person or situation without complaint.",
    "banglaMeaning": "সহ্য করা",
    "synonyms": [
      "Tolerate",
      "Endure",
      "Bear",
      "Stand"
    ],
    "antonyms": [
      "Reject",
      "Resist"
    ],
    "example": "I do not know how she can put up with such noisy construction outside her office."
  },
  "puzzling": {
    "word": "Puzzling",
    "pos": "adjective",
    "simpleDefinition": "Causing confusion or difficulty in understanding; perplexing.",
    "banglaMeaning": "বিভ্রান্তিকর",
    "synonyms": [
      "Perplexing",
      "Baffling",
      "Mystifying",
      "Enigmatic"
    ],
    "antonyms": [
      "Clear",
      "Obvious",
      "Simple"
    ],
    "example": "Her sudden change of heart remains a puzzling enigma to all her relatives."
  },
  "quandary": {
    "word": "Quandary",
    "pos": "noun",
    "simpleDefinition": "A state of perplexity or uncertainty over what to do in a difficult situation",
    "banglaMeaning": "দোটানা / কিংকর্তব্যবিমূঢ় অবস্থা",
    "synonyms": [
      "Dilemma",
      "Predicament",
      "Difficulty"
    ],
    "antonyms": [
      "Certainty",
      "Solution",
      "Clarity"
    ],
    "example": "She was in a quandary about which job offer to accept."
  },
  "quarrelsome": {
    "word": "Quarrelsome",
    "pos": "adjective",
    "simpleDefinition": "Given to or characterized by quarreling; argumentative and contentious.",
    "banglaMeaning": "ঝগড়াটে",
    "synonyms": [
      "Argumentative",
      "Contentious",
      "Belligerent",
      "Pugnacious"
    ],
    "antonyms": [
      "Peaceful",
      "Agreeable",
      "Friendly"
    ],
    "example": "The quarrelsome tenant was constantly complaining and fighting with neighbors."
  },
  "quash": {
    "word": "Quash",
    "pos": "verb",
    "simpleDefinition": "To reject or void by legal procedure, or suppress and put an end to.",
    "banglaMeaning": "বাতিল করা",
    "synonyms": [
      "Annul",
      "Nullify",
      "Suppress",
      "Crush"
    ],
    "antonyms": [
      "Uphold",
      "Validate",
      "Enforce"
    ],
    "example": "The higher court moved to quash the wrongful conviction after new DNA evidence surfaced."
  },
  "queer": {
    "word": "Queer",
    "pos": "adjective",
    "simpleDefinition": "Strange, odd, or unusual in character or appearance.",
    "banglaMeaning": "অদ্ভুত",
    "synonyms": [
      "Strange",
      "Odd",
      "Peculiar",
      "Unusual"
    ],
    "antonyms": [
      "Normal",
      "Ordinary",
      "Typical"
    ],
    "example": "The traveler heard a queer tapping noise coming from behind the locked wooden door."
  },
  "querulous": {
    "word": "Querulous",
    "pos": "adjective",
    "simpleDefinition": "Complaining and whining in an annoying way",
    "banglaMeaning": "খিটখিটে / অনুযোগকারী",
    "synonyms": [
      "Complaining",
      "Whining",
      "Grumbling"
    ],
    "antonyms": [
      "Content",
      "Satisfied",
      "Cheerful"
    ],
    "example": "The querulous customer complained about everything."
  },
  "queue": {
    "word": "Queue",
    "pos": "noun",
    "simpleDefinition": "A line or sequence of people or vehicles awaiting their turn.",
    "banglaMeaning": "লাইন",
    "synonyms": [
      "Line",
      "Row",
      "Column",
      "File"
    ],
    "antonyms": [
      "Mob",
      "Crowd"
    ],
    "example": "An orderly queue of commuters formed in front of the ticket booth."
  },
  "raconteur": {
    "word": "Raconteur",
    "pos": "noun",
    "simpleDefinition": "A person who tells anecdotes and stories in a skillful and amusing way.",
    "banglaMeaning": "গল্পকথক",
    "synonyms": [
      "Storyteller",
      "Narrator",
      "Anecdotist"
    ],
    "antonyms": [
      "Listener"
    ],
    "example": "He was a charming raconteur who held the entire dinner party entertained with his tales."
  },
  "rampage": {
    "word": "Rampage",
    "pos": "noun",
    "simpleDefinition": "A period of violent, wild, or uncontrolled behavior causing destruction.",
    "banglaMeaning": "উত্তেজিত অবস্থা",
    "synonyms": [
      "Frenzy",
      "Tear",
      "Riot",
      "Spree"
    ],
    "antonyms": [
      "Calm",
      "Peace"
    ],
    "example": "An escaped circus elephant went on a wild rampage through the village market."
  },
  "rancour": {
    "word": "Rancour",
    "pos": "noun",
    "simpleDefinition": "Deep-seated, long-standing resentment or bitterness",
    "banglaMeaning": "তিক্ত বিদ্বেষ / শত্রুতা",
    "synonyms": [
      "Bitterness",
      "Resentment",
      "Malice"
    ],
    "antonyms": [
      "Goodwill",
      "Kindness",
      "Forgiveness"
    ],
    "example": "Years of rancour between the families finally ended."
  },
  "rank and file": {
    "word": "Rank and file",
    "pos": "noun",
    "simpleDefinition": "The ordinary members of an organization as opposed to its leaders.",
    "banglaMeaning": "সাধারণ জনগণ",
    "synonyms": [
      "Ordinary members",
      "Workforce",
      "General membership"
    ],
    "antonyms": [
      "Leadership",
      "Executives",
      "Elite"
    ],
    "example": "The union leaders consulted the rank and file before agreeing to the new contract."
  },
  "rash": {
    "word": "Rash",
    "pos": "adjective",
    "simpleDefinition": "Displaying or proceeding from a lack of careful consideration of consequences",
    "banglaMeaning": "হঠকারী / অবিবেচক",
    "synonyms": [
      "Impulsive",
      "Reckless",
      "Hasty"
    ],
    "antonyms": [
      "Cautious",
      "Careful",
      "Thoughtful"
    ],
    "example": "A rash decision can lead to regret later."
  },
  "rational": {
    "word": "Rational",
    "pos": "adjective",
    "simpleDefinition": "Based on or in accordance with reason or logic.",
    "banglaMeaning": "যুক্তিসঙ্গত / বিবেকী / যুক্তিসম্মত",
    "synonyms": [
      "Logical",
      "Reasonable",
      "Sensible",
      "Lucid"
    ],
    "antonyms": [
      "Irrational",
      "Illogical",
      "Absurd"
    ],
    "example": "In moments of crisis, it is vital to stay calm and make rational decisions."
  },
  "ravages": {
    "word": "Ravages",
    "pos": "noun",
    "simpleDefinition": "The severely damaging or destructive effects of time, weather, or war.",
    "banglaMeaning": "ধ্বংস বা নষ্ট করা",
    "synonyms": [
      "Destruction",
      "Devastation",
      "Damage",
      "Ruin"
    ],
    "antonyms": [
      "Restoration",
      "Preservation"
    ],
    "example": "The ancient stone castle could not withstand the ravages of time and coastal storms."
  },
  "reasonable": {
    "word": "Reasonable",
    "pos": "adjective",
    "simpleDefinition": "Fair, practical, sensible, and not extreme or excessive.",
    "banglaMeaning": "যৌক্তিক",
    "synonyms": [
      "Fair",
      "Sensible",
      "Moderate",
      "Equitable"
    ],
    "antonyms": [
      "Unreasonable",
      "Exorbitant",
      "Irrational"
    ],
    "example": "The landlord agreed to a reasonable rent increase after discussions with tenants."
  },
  "reasoning": {
    "word": "Reasoning",
    "pos": "noun",
    "simpleDefinition": "The action of thinking about something in a logical and sensible way.",
    "banglaMeaning": "যুক্তিতর্ক",
    "synonyms": [
      "Logic",
      "Deduction",
      "Rationale",
      "Thinking"
    ],
    "antonyms": [
      "Irrationality"
    ],
    "example": "His sound mathematical reasoning convinced the professors of the theory's validity."
  },
  "reassurance": {
    "word": "Reassurance",
    "pos": "noun",
    "simpleDefinition": "The action of saying or doing something to remove someone's doubts or fears.",
    "banglaMeaning": "পুনরায় নিহি্নত করা",
    "synonyms": [
      "Comfort",
      "Encouragement",
      "Solace",
      "Guarantee"
    ],
    "antonyms": [
      "Discouragement",
      "Doubt"
    ],
    "example": "The surgeon offered gentle words of reassurance to the nervous patient before the procedure."
  },
  "rebuke": {
    "word": "Rebuke",
    "pos": "verb",
    "simpleDefinition": "To express sharp, stern disapproval or reprimand",
    "banglaMeaning": "তিরস্কার করা / ধমক দেওয়া",
    "synonyms": [
      "ও Reprimand",
      "Scold",
      "Criticize"
    ],
    "antonyms": [
      "Praise",
      "Commend",
      "Approve"
    ],
    "example": "The officer rebuked the employee for negligence."
  },
  "recapitulate": {
    "word": "Recapitulate",
    "pos": "verb",
    "simpleDefinition": "To summarize and state again the main points of something; recap.",
    "banglaMeaning": "আলোচনা করা",
    "synonyms": [
      "Summarize",
      "Recap",
      "Review",
      "Restate"
    ],
    "antonyms": [
      "Elaborate",
      "Expand"
    ],
    "example": "At the conclusion of the lecture, the professor took five minutes to recapitulate key findings."
  },
  "recapture": {
    "word": "Recapture",
    "pos": "verb",
    "simpleDefinition": "To capture again, or recover a former feeling, state, or memory.",
    "banglaMeaning": "পুনরুদ্ধার করা",
    "synonyms": [
      "Recover",
      "Regain",
      "Retrieve",
      "Retake"
    ],
    "antonyms": [
      "Lose",
      "Relinquish"
    ],
    "example": "The film attempts to recapture the wonder and excitement of early space exploration."
  },
  "recidivist": {
    "word": "Recidivist",
    "pos": "noun",
    "simpleDefinition": "A convicted criminal who reoffends repeatedly; a habitual offender.",
    "banglaMeaning": "অপরাধপ্রবণ",
    "synonyms": [
      "Repeat offender",
      "Habitual criminal",
      "Chronic offender"
    ],
    "antonyms": [
      "Law-abiding citizen"
    ],
    "example": "The court handed the recidivist a strict sentence after his fourth burglary offense."
  },
  "reckless": {
    "word": "Reckless",
    "pos": "adjective",
    "simpleDefinition": "Without thinking or caring about the dangerous consequences of an action",
    "banglaMeaning": "বেপরোয়া / অসাবধান",
    "synonyms": [
      "Careless",
      "Irresponsible",
      "Impetuous"
    ],
    "antonyms": [
      "Careful",
      "Responsible",
      "Cautious"
    ],
    "example": "Reckless driving caused the fatal accident."
  },
  "recluse": {
    "word": "Recluse",
    "pos": "noun",
    "simpleDefinition": "A person who lives a solitary life and tends to avoid other people.",
    "banglaMeaning": "সন্নাসী",
    "synonyms": [
      "Hermit",
      "Loner",
      "Solitary",
      "Ascetic"
    ],
    "antonyms": [
      "Socialite",
      "Extrovert"
    ],
    "example": "After retiring from public life, the billionaire lived as a recluse in his mountain estate."
  },
  "reclusive": {
    "word": "Reclusive",
    "pos": "adjective",
    "simpleDefinition": "Avoiding the company of other people; living in quiet solitude.",
    "banglaMeaning": "সন্ন্যাসী",
    "synonyms": [
      "Solitary",
      "Secluded",
      "Withdrawn",
      "Hermit-like"
    ],
    "antonyms": [
      "Sociable",
      "Outgoing",
      "Gregarious"
    ],
    "example": "The reclusive author rarely gave interviews or made public appearances."
  },
  "reconcile": {
    "word": "Reconcile",
    "pos": "verb",
    "simpleDefinition": "To restore friendly relations between people or make two ideas compatible.",
    "banglaMeaning": "মিলনসাধন করা",
    "synonyms": [
      "Harmonize",
      "Settle",
      "Resolve",
      "Reunite"
    ],
    "antonyms": [
      "Alienate",
      "Divide",
      "Estrange"
    ],
    "example": "The mediator worked patiently to reconcile the differing demands of labor and management."
  },
  "recruit": {
    "word": "Recruit",
    "pos": "verb",
    "simpleDefinition": "To enlist someone in the military or enroll new members into a company.",
    "banglaMeaning": "নতুন নিয়োগপ্রাপ্ত অনভিজ্ঞ কর্মী",
    "synonyms": [
      "Enlist",
      "Hire",
      "Enroll",
      "Sign up"
    ],
    "antonyms": [
      "Dismiss",
      "Discharge",
      "Fire"
    ],
    "example": "The tech firm launched a campaign to recruit talented computer science graduates."
  },
  "recuperative": {
    "word": "Recuperative",
    "pos": "adjective",
    "simpleDefinition": "Having the effect of restoring health, vitality, or strength.",
    "banglaMeaning": "আরোগ্য হয় এমন / পুনরুদ্ধার হয় এমন",
    "synonyms": [
      "Healing",
      "Restorative",
      "Curative",
      "Therapeutic"
    ],
    "antonyms": [
      "Harmful",
      "Exhausting",
      "Damaging"
    ],
    "example": "She spent two weeks in the countryside to enjoy the recuperative power of fresh air."
  },
  "redirect": {
    "word": "Redirect",
    "pos": "verb",
    "simpleDefinition": "To direct something to a different place, route, or purpose.",
    "banglaMeaning": "পুননিদের্শ",
    "synonyms": [
      "Divert",
      "Reroute",
      "Turn",
      "Steer"
    ],
    "antonyms": [
      "Maintain",
      "Keep on track"
    ],
    "example": "Heavy road construction forced traffic police to redirect commuters along side streets."
  },
  "redundant": {
    "word": "Redundant",
    "pos": "adjective",
    "simpleDefinition": "Exceeding what is necessary or natural; superfluous",
    "banglaMeaning": "অপ্রয়োজনীয় / বাড়তি / বাড়তি / অনাবশ্যক",
    "synonyms": [
      "Unnecessary",
      "Superfluous",
      "Excess"
    ],
    "antonyms": [
      "Necessary",
      "Essential",
      "Required"
    ],
    "example": "His speech was full of redundant phrases."
  },
  "reel": {
    "word": "Reel",
    "pos": "verb",
    "simpleDefinition": "To lose one's balance and stagger, or feel dizzy with shock or bewilderment.",
    "banglaMeaning": "নাটাই",
    "synonyms": [
      "Stagger",
      "Lurch",
      "Sway",
      "Wobble"
    ],
    "antonyms": [
      "Steady",
      "Balance"
    ],
    "example": "The boxer began to reel backward after taking a heavy blow to the jaw."
  },
  "refinery": {
    "word": "Refinery",
    "pos": "noun",
    "simpleDefinition": "An industrial installation where a raw substance like petroleum or sugar is purified.",
    "banglaMeaning": "পরিশোধনাগার",
    "synonyms": [
      "Processing plant",
      "Purifying plant",
      "Smelter"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Crude oil is transported directly into the coastal refinery to produce automotive gasoline."
  },
  "refugees": {
    "word": "Refugees",
    "pos": "noun",
    "simpleDefinition": "People who have been forced to leave their country to escape war, persecution, or disaster.",
    "banglaMeaning": "শরণার্থী",
    "synonyms": [
      "Displaced persons",
      "Asylum seekers",
      "Exiles",
      "Evacuees"
    ],
    "antonyms": [
      "Native citizens"
    ],
    "example": "International humanitarian organizations provided warm tents, food, and medicine to the displaced refugees."
  },
  "refute": {
    "word": "Refute",
    "pos": "verb",
    "simpleDefinition": "To prove an allegation, opinion, or argument to be false or incorrect",
    "banglaMeaning": "খণ্ডন করা / ভুল প্রমাণ করা / যুক্তি বা তর্ক খণ্ডন করা / অস্বীকার করা",
    "synonyms": [
      "Disprove",
      "Deny",
      "Rebut"
    ],
    "antonyms": [
      "Confirm",
      "Prove",
      "Verify"
    ],
    "example": "The lawyer refuted all the allegations against his client."
  },
  "regicide": {
    "word": "Regicide",
    "pos": "noun",
    "simpleDefinition": "The action of killing a king, or a person who kills a king.",
    "banglaMeaning": "রাজহত্যা",
    "synonyms": [
      "King-killing",
      "Monarch murder"
    ],
    "antonyms": [
      "Loyalty",
      "Fealty"
    ],
    "example": "The conspirators were convicted of regicide after plotting against the reigning monarch."
  },
  "regime": {
    "word": "Regime",
    "pos": "noun",
    "simpleDefinition": "A government, especially an authoritarian one, or an organized system of rules.",
    "banglaMeaning": "শাসন",
    "synonyms": [
      "Government",
      "Administration",
      "Rule",
      "Authority"
    ],
    "antonyms": [
      "Anarchy"
    ],
    "example": "Citizens rejoiced in the city streets following the peaceful fall of the oppressive regime."
  },
  "regret": {
    "word": "Regret",
    "pos": "verb",
    "simpleDefinition": "To feel sad, repentant, or disappointed over something done or lost.",
    "banglaMeaning": "অনুশোচনা করা",
    "synonyms": [
      "Lament",
      "Rue",
      "Mourn",
      "Repent"
    ],
    "antonyms": [
      "Celebrate",
      "Rejoice"
    ],
    "example": "He later came to deeply regret making that impulsive and hurtful remark to his friend."
  },
  "reimburse": {
    "word": "Reimburse",
    "pos": "verb",
    "simpleDefinition": "To repay a person who has spent or lost money on official duties.",
    "banglaMeaning": "পরিশোধ করা",
    "synonyms": [
      "Repay",
      "Refund",
      "Compensate",
      "Remunerate"
    ],
    "antonyms": [
      "Charge",
      "Fine",
      "Penalize"
    ],
    "example": "The company will reimburse employees for travel expenses incurred during the conference."
  },
  "reinstate": {
    "word": "Reinstate",
    "pos": "verb",
    "simpleDefinition": "To restore someone or something to their former position or condition.",
    "banglaMeaning": "পুনর্বহাল করা",
    "synonyms": [
      "Restore",
      "Rehire",
      "Re-establish",
      "Return"
    ],
    "antonyms": [
      "Dismiss",
      "Suspend",
      "Abolish"
    ],
    "example": "Following the inquiry, the university decided to reinstate the unfairly suspended professor."
  },
  "relevant": {
    "word": "Relevant",
    "pos": "adjective",
    "simpleDefinition": "Closely connected or appropriate to the matter or topic at hand.",
    "banglaMeaning": "প্রাসঙ্গিক",
    "synonyms": [
      "Pertinent",
      "Applicable",
      "Germane",
      "Appropriate"
    ],
    "antonyms": [
      "Irrelevant",
      "Extraneous",
      "Inapplicable"
    ],
    "example": "Please include only relevant work experience on your two-page resume."
  },
  "relics": {
    "word": "Relics",
    "pos": "noun",
    "simpleDefinition": "Objects surviving from an earlier time, especially of historical or sacred interest.",
    "banglaMeaning": "প্রত্নতাত্ত্বিক নিদর্শন",
    "synonyms": [
      "Artifacts",
      "Antiquities",
      "Remains",
      "Vestiges"
    ],
    "antonyms": [
      "Novelties",
      "Modern items"
    ],
    "example": "Archaeologists uncovered ancient pottery relics from the Bronze Age ruins."
  },
  "remnants": {
    "word": "Remnants",
    "pos": "noun",
    "simpleDefinition": "Small remaining parts or quantities of something; leftover scraps.",
    "banglaMeaning": "ধ্বংসাবশেষ",
    "synonyms": [
      "Leftovers",
      "Scraps",
      "Fragments",
      "Remains"
    ],
    "antonyms": [
      "Whole",
      "Bulk"
    ],
    "example": "The tailor used colorful remnants of fabric to stitch a decorative quilt."
  },
  "renowned": {
    "word": "Renowned",
    "pos": "adjective",
    "simpleDefinition": "Known or talked about by many people; highly celebrated and famous.",
    "banglaMeaning": "বিখ্যাত",
    "synonyms": [
      "Famous",
      "Celebrated",
      "Distinguished",
      "Acclaimed"
    ],
    "antonyms": [
      "Unknown",
      "Obscure",
      "Anonymous"
    ],
    "example": "The medical center is renowned for its groundbreaking research in heart disease."
  },
  "reparation": {
    "word": "Reparation",
    "pos": "noun",
    "simpleDefinition": "The making of amends for a wrong done, often by paying money or helping.",
    "banglaMeaning": "ক্ষতিপূরণ",
    "synonyms": [
      "Compensation",
      "Restitution",
      "Amends",
      "Redress"
    ],
    "antonyms": [
      "Injury",
      "Penalty",
      "Harm"
    ],
    "example": "The court ordered the company to pay substantial financial reparation for polluting the lake."
  },
  "repast": {
    "word": "Repast",
    "pos": "noun",
    "simpleDefinition": "A meal or the food served for a meal.",
    "banglaMeaning": "আহার",
    "synonyms": [
      "Meal",
      "Feast",
      "Banquet",
      "Dinner"
    ],
    "antonyms": [
      "Fast",
      "Starvation"
    ],
    "example": "The tired hikers enjoyed a hearty evening repast of hot stew and freshly baked bread."
  },
  "repeal": {
    "word": "Repeal",
    "pos": "verb",
    "simpleDefinition": "To revoke, annul, or officially withdraw a law or legislative act.",
    "banglaMeaning": "বাতিল করা",
    "synonyms": [
      "Revoke",
      "Annul",
      "Abolish",
      "Invalidate"
    ],
    "antonyms": [
      "Enact",
      "Pass",
      "Legislate"
    ],
    "example": "Parliament voted overwhelmingly to repeal the unpopular tax legislation."
  },
  "repent": {
    "word": "Repent",
    "pos": "verb",
    "simpleDefinition": "To feel or express sincere regret or remorse for one's sins or wrongdoings.",
    "banglaMeaning": "অনুশোচনা করা",
    "synonyms": [
      "Regret",
      "Rue",
      "Feel remorse",
      "Lament"
    ],
    "antonyms": [
      "Gloat",
      "Persist in wrongdoing"
    ],
    "example": "The thief apologized tearfully and promised to repent and reform his ways."
  },
  "repercussion": {
    "word": "Repercussion",
    "pos": "noun",
    "simpleDefinition": "An unintended, often indirect consequence or reaction to an event or action.",
    "banglaMeaning": "প্রতিক্রিয়া",
    "synonyms": [
      "Consequence",
      "Outcome",
      "Aftermath",
      "Ripple effect"
    ],
    "antonyms": [
      "Cause"
    ],
    "example": "The sudden increase in fuel prices had severe economic repercussions across all industries."
  },
  "represent": {
    "word": "Represent",
    "pos": "verb",
    "simpleDefinition": "To act or speak on behalf of someone, or serve as a symbol or sign of something.",
    "banglaMeaning": "চিত্রিত করা",
    "synonyms": [
      "Stand for",
      "Symbolize",
      "Signify",
      "Act for"
    ],
    "antonyms": [
      "Misrepresent"
    ],
    "example": "A designated diplomat was appointed to represent the nation at the peace conference."
  },
  "repression": {
    "word": "Repression",
    "pos": "noun",
    "simpleDefinition": "The action of subduing someone or something by force, or holding down desires.",
    "banglaMeaning": "দমন / নিপীড়ন",
    "synonyms": [
      "Suppression",
      "Oppression",
      "Subjugation",
      "Restraint"
    ],
    "antonyms": [
      "Liberation",
      "Freedom"
    ],
    "example": "Decades of political repression failed to diminish the citizens' desire for democracy."
  },
  "reprimand": {
    "word": "Reprimand",
    "pos": "verb",
    "simpleDefinition": "To rebuke or express sharp disapproval of someone, especially officially.",
    "banglaMeaning": "তিরস্কার",
    "synonyms": [
      "Rebuke",
      "Admonish",
      "Scold",
      "Censure"
    ],
    "antonyms": [
      "Praise",
      "Commend",
      "Applaud"
    ],
    "example": "The supervisor had to reprimand the employee for arriving late three days in a row."
  },
  "reproach": {
    "word": "Reproach",
    "pos": "verb",
    "simpleDefinition": "To express one's disapproval of or disappointment with someone's actions.",
    "banglaMeaning": "তিরস্কার করা",
    "synonyms": [
      "Criticize",
      "Blame",
      "Censure",
      "Scold"
    ],
    "antonyms": [
      "Praise",
      "Applaud",
      "Commend"
    ],
    "example": "Her mother reproached her gently for neglecting her school studies."
  },
  "reproof": {
    "word": "Reproof",
    "pos": "noun",
    "simpleDefinition": "An expression of blame, censure, or mild rebuke.",
    "banglaMeaning": "অর্সমথন",
    "synonyms": [
      "Rebuke",
      "Admonition",
      "Scolding",
      "Reproach"
    ],
    "antonyms": [
      "Approval",
      "Praise",
      "Commendation"
    ],
    "example": "The teacher cast a look of quiet reproof at the students whispering in the back."
  },
  "repugnance": {
    "word": "Repugnance",
    "pos": "noun",
    "simpleDefinition": "Intense disgust, aversion, or incompatibility with one's moral values.",
    "banglaMeaning": "প্রতিক্রিয়া",
    "synonyms": [
      "Disgust",
      "Revulsion",
      "Abhorrence",
      "Aversion"
    ],
    "antonyms": [
      "Attraction",
      "Liking",
      "Admiration"
    ],
    "example": "He felt deep moral repugnance toward the corrupt practices uncovered in the audit."
  },
  "repute": {
    "word": "Repute",
    "pos": "noun",
    "simpleDefinition": "The opinion generally held of someone or something; public reputation.",
    "banglaMeaning": "সুখ্যাতি",
    "synonyms": [
      "Reputation",
      "Renown",
      "Standing",
      "Prestige"
    ],
    "antonyms": [
      "Disrepute",
      "Notoriety"
    ],
    "example": "The academy has established an enviable repute for academic excellence."
  },
  "rescind": {
    "word": "Rescind",
    "pos": "verb",
    "simpleDefinition": "To revoke, cancel, or repeal a law, agreement, or formal decision.",
    "banglaMeaning": "বাতিল করা",
    "synonyms": [
      "Revoke",
      "Cancel",
      "Annul",
      "Retract"
    ],
    "antonyms": [
      "Enforce",
      "Ratify",
      "Uphold"
    ],
    "example": "The school board agreed to rescind the controversial dress code policy after protests."
  },
  "resemble": {
    "word": "Resemble",
    "pos": "verb",
    "simpleDefinition": "To have a similar appearance, qualities, or traits in common with someone or something.",
    "banglaMeaning": "অনুরূপ",
    "synonyms": [
      "Look like",
      "Mirror",
      "Take after",
      "Echo"
    ],
    "antonyms": [
      "Differ from"
    ],
    "example": "The young girl grew up to strongly resemble her grandmother in appearance."
  },
  "resentment": {
    "word": "Resentment",
    "pos": "noun",
    "simpleDefinition": "Bitter indignation or ill will at having been treated unfairly.",
    "banglaMeaning": "আক্রোশ",
    "synonyms": [
      "Bitterness",
      "Indignation",
      "Grudge",
      "Rancor"
    ],
    "antonyms": [
      "Goodwill",
      "Forgiveness",
      "Contentment"
    ],
    "example": "Simmering resentment between the two business founders eventually broke their partnership."
  },
  "resilient": {
    "word": "Resilient",
    "pos": "adjective",
    "simpleDefinition": "Able to bounce back, withstand, or recover quickly from difficult conditions",
    "banglaMeaning": "বিপদে ঘুরে দাঁড়ায় এমন / স্থিতিস্থাপক",
    "synonyms": [
      "Tough",
      "Strong",
      "Adaptable"
    ],
    "antonyms": [
      "Fragile",
      "Weak",
      "Vulnerable"
    ],
    "example": "The resilient nation recovered quickly from the flood."
  },
  "resist": {
    "word": "Resist",
    "pos": "verb",
    "simpleDefinition": "To withstand the action or effect of, or oppose and fight against something.",
    "banglaMeaning": "প্রতিরোধ করা",
    "synonyms": [
      "Withstand",
      "Oppose",
      "Defy",
      "Combat"
    ],
    "antonyms": [
      "Surrender",
      "Yield",
      "Submit"
    ],
    "example": "It was difficult to resist the tempting aroma of hot cinnamon rolls."
  },
  "resolute": {
    "word": "Resolute",
    "pos": "adjective",
    "simpleDefinition": "Firmly determined, steadfast, and purposeful",
    "banglaMeaning": "দৃঢ়সংকল্প / অনড়",
    "synonyms": [
      "Determined",
      "Firm",
      "Steadfast"
    ],
    "antonyms": [
      "Irresolute",
      "Hesitant",
      "Weak"
    ],
    "example": "She remained resolute in her decision to fight corruption."
  },
  "restless": {
    "word": "Restless",
    "pos": "adjective",
    "simpleDefinition": "Unable to rest, relax, or stay still; fidgety, uneasy, or agitated.",
    "banglaMeaning": "অস্থির",
    "synonyms": [
      "Fidgety",
      "Uneasy",
      "Agitated",
      "Impatient"
    ],
    "antonyms": [
      "Calm",
      "Relaxed",
      "Peaceful"
    ],
    "example": "After sitting inside all rainy afternoon, the restless children dashed into the yard."
  },
  "restrain": {
    "word": "Restrain",
    "pos": "verb",
    "simpleDefinition": "To prevent someone from doing something; keep under control",
    "banglaMeaning": "নিয়ন্ত্রণ করা / সংযত রাখা",
    "synonyms": [
      "Control",
      "Limit",
      "Suppress"
    ],
    "antonyms": [
      "Release",
      "Free",
      "Allow"
    ],
    "example": "Police had to restrain the angry protestors."
  },
  "retail": {
    "word": "Retail",
    "pos": "noun",
    "simpleDefinition": "The sale of goods to the public in small quantities for immediate consumption.",
    "banglaMeaning": "খুচরা",
    "synonyms": [
      "Merchandising",
      "Selling",
      "Commerce"
    ],
    "antonyms": [
      "Wholesale"
    ],
    "example": "Supermarkets specialize in retail, providing groceries directly to households."
  },
  "reticent": {
    "word": "Reticent",
    "pos": "adjective",
    "simpleDefinition": "Quiet and not talking much about one's feelings",
    "banglaMeaning": "স্বল্পভাষী / চাপা স্বভাবের",
    "synonyms": [
      "Quiet",
      "Reserved",
      "Taciturn"
    ],
    "antonyms": [
      "Talkative",
      "Communicative",
      "Outgoing"
    ],
    "example": "He was reticent about his personal life at work."
  },
  "retractable": {
    "word": "Retractable",
    "pos": "adjective",
    "simpleDefinition": "Able to be drawn back or in into a housing or casing.",
    "banglaMeaning": "সংকোচনীয়",
    "synonyms": [
      "Collapsible",
      "Foldaway",
      "Withdrawable"
    ],
    "antonyms": [
      "Fixed",
      "Permanent"
    ],
    "example": "The modern sports arena features a retractable glass roof that closes when it rains."
  },
  "retribution": {
    "word": "Retribution",
    "pos": "noun",
    "simpleDefinition": "Punishment inflicted on someone as vengeance for a wrong or criminal act",
    "banglaMeaning": "প্রতিশোধ / প্রতিফল / উপযুক্ত শাস্তি",
    "synonyms": [
      "Punishment",
      "Revenge",
      "Penalty"
    ],
    "antonyms": [
      "Forgiveness",
      "Pardon",
      "Mercy"
    ],
    "example": "He feared divine retribution for his wrongdoings."
  },
  "revamp": {
    "word": "Revamp",
    "pos": "verb",
    "simpleDefinition": "To give new and improved form, structure, or appearance to something.",
    "banglaMeaning": "পুনগর্ঠন",
    "synonyms": [
      "Renovate",
      "Overhaul",
      "Remodel",
      "Modernize"
    ],
    "antonyms": [
      "Ruin",
      "Neglect",
      "Dismantle"
    ],
    "example": "The company decided to revamp its online portal to make shopping faster and easier."
  },
  "reveal": {
    "word": "Reveal",
    "pos": "verb",
    "simpleDefinition": "To make previously hidden, unknown, or secret information known.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "Disclose",
      "Uncover",
      "Divulge",
      "Expose"
    ],
    "antonyms": [
      "Conceal",
      "Hide",
      "Suppress"
    ],
    "example": "The historical documents reveal fascinating secrets about the founding of the city."
  },
  "revealing": {
    "word": "Revealing",
    "pos": "adjective",
    "simpleDefinition": "Making interesting or significant information known, or disclosing.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "Informative",
      "Telling",
      "Disclosing",
      "Eye-opening"
    ],
    "antonyms": [
      "Concealing",
      "Uninformative"
    ],
    "example": "The investigative audit provided a revealing look into the firm's hidden expenses."
  },
  "reverence": {
    "word": "Reverence",
    "pos": "noun",
    "simpleDefinition": "Deep respect and awe for someone or something",
    "banglaMeaning": "গভীর শ্রদ্ধা / ভক্তি",
    "synonyms": [
      "Respect",
      "Esteem",
      "Veneration"
    ],
    "antonyms": [
      "Disrespect",
      "Contempt",
      "Mockery"
    ],
    "example": "Students showed reverence to their teacher."
  },
  "reverential": {
    "word": "Reverential",
    "pos": "adjective",
    "simpleDefinition": "Feeling or showing deep respect, veneration, and solemn reverence.",
    "banglaMeaning": "শ্রদ্ধামিশ্রিত",
    "synonyms": [
      "Respectful",
      "Devout",
      "Reverent",
      "Venerating"
    ],
    "antonyms": [
      "Irreverent",
      "Disrespectful",
      "Insolent"
    ],
    "example": "The audience maintained a reverential silence throughout the memorial service."
  },
  "revert": {
    "word": "Revert",
    "pos": "verb",
    "simpleDefinition": "To return to a previous state, condition, practice, or subject.",
    "banglaMeaning": "ফিরে আসা",
    "synonyms": [
      "Return",
      "Relapse",
      "Regress",
      "Go back"
    ],
    "antonyms": [
      "Progress",
      "Advance"
    ],
    "example": "If the software crashes, the system will automatically revert to its default settings."
  },
  "revolution": {
    "word": "Revolution",
    "pos": "noun",
    "simpleDefinition": "A forcible overthrow of a government or social order, or a dramatic fundamental change.",
    "banglaMeaning": "বিপ্লব",
    "synonyms": [
      "Uprising",
      "Rebellion",
      "Transformation",
      "Overturn"
    ],
    "antonyms": [
      "Stagnation",
      "Counterrevolution"
    ],
    "example": "The introduction of the printing press caused a profound revolution in world education."
  },
  "revulsion": {
    "word": "Revulsion",
    "pos": "noun",
    "simpleDefinition": "A sense of intense disgust, loathing, and repulsive reaction.",
    "banglaMeaning": "প্রতিক্রিয়া",
    "synonyms": [
      "Disgust",
      "Repulsion",
      "Abhorrence",
      "Loathing"
    ],
    "antonyms": [
      "Attraction",
      "Liking",
      "Delight"
    ],
    "example": "She recoiled in sudden revulsion when she spotted a slimy caterpillar on her sleeve."
  },
  "rhetoric": {
    "word": "Rhetoric",
    "pos": "noun",
    "simpleDefinition": "The art of effective or persuasive speaking or writing",
    "banglaMeaning": "বক্তৃতাশিল্প / বাগ্মিতা",
    "synonyms": [
      "Oratory",
      "Eloquence",
      "Bombast"
    ],
    "antonyms": [
      "Simplicity",
      "Silence",
      "Plainness"
    ],
    "example": "His political speech was pure rhetoric with no substance."
  },
  "ridiculous": {
    "word": "Ridiculous",
    "pos": "adjective",
    "simpleDefinition": "Deserving mockery or derision; absurd, unreasonable, and laughable.",
    "banglaMeaning": "হাস্যকর",
    "synonyms": [
      "Absurd",
      "Preposterous",
      "Ludicrous",
      "Nonsensical"
    ],
    "antonyms": [
      "Sensible",
      "Reasonable",
      "Serious"
    ],
    "example": "Paying fifty dollars for a plain cup of water is completely ridiculous."
  },
  "rightfully": {
    "word": "Rightfully",
    "pos": "adverb",
    "simpleDefinition": "In accordance with what is right, just, legal, or deserved.",
    "banglaMeaning": "বৈবধ ভাবে",
    "synonyms": [
      "Lawfully",
      "Justly",
      "Legitimately",
      "Properly"
    ],
    "antonyms": [
      "Wrongfully",
      "Illegitimately"
    ],
    "example": "The heirloom jewels were rightfully returned to their original owner."
  },
  "rigid": {
    "word": "Rigid",
    "pos": "adjective",
    "simpleDefinition": "Unable to bend or be forced out of shape; not flexible, or strictly adhered to.",
    "banglaMeaning": "শক্ত",
    "synonyms": [
      "Stiff",
      "Inflexible",
      "Unbending",
      "Strict"
    ],
    "antonyms": [
      "Flexible",
      "Supple",
      "Pliable"
    ],
    "example": "The builder reinforced the concrete structure with rigid steel beams."
  },
  "rigorous": {
    "word": "Rigorous",
    "pos": "adjective",
    "simpleDefinition": "Extremely thorough, exhaustive, strict, or accurate",
    "banglaMeaning": "কঠোর / পুঙ্খানুপুঙ্খ",
    "synonyms": [
      "Strict",
      "Thorough",
      "Demanding"
    ],
    "antonyms": [
      "Lenient",
      "Easy",
      "Lax"
    ],
    "example": "A rigorous training programme prepared the soldiers."
  },
  "rise rapidly": {
    "word": "Rise rapidly",
    "pos": "idiom",
    "simpleDefinition": "To increase, soar, or ascend at great speed.",
    "banglaMeaning": "দ্রুততার সাথে বৃদ্ধি",
    "synonyms": [
      "Soar",
      "Surge",
      "Skyrocket",
      "Escalate"
    ],
    "antonyms": [
      "Plummet",
      "Drop",
      "Decline"
    ],
    "example": "Prices of fresh vegetables began to rise rapidly following the severe drought."
  },
  "rite": {
    "word": "Rite",
    "pos": "noun",
    "simpleDefinition": "A formal religious or solemn social ceremony or act.",
    "banglaMeaning": "রীতিনীতি / প্রথা",
    "synonyms": [
      "Ritual",
      "Ceremony",
      "Sacrament",
      "Observance"
    ],
    "antonyms": [
      "Informal act"
    ],
    "example": "The initiation ceremony is viewed by the community as a sacred rite of passage."
  },
  "robbery": {
    "word": "Robbery",
    "pos": "noun",
    "simpleDefinition": "The crime of taking property unlawfully from a person or place by force or threat.",
    "banglaMeaning": "ডাকাতি",
    "synonyms": [
      "Theft",
      "Burglary",
      "Heist",
      "Mugging"
    ],
    "antonyms": [
      "Donation",
      "Gift"
    ],
    "example": "Police responded immediately and arrested the suspects during the bank robbery."
  },
  "rookie": {
    "word": "Rookie",
    "pos": "noun",
    "simpleDefinition": "A new recruit, beginner, or novice, especially in sports or the police force.",
    "banglaMeaning": "নতুন নিয়োগপ্রাপ্ত অনভিজ্ঞ কর্মী",
    "synonyms": [
      "Novice",
      "Beginner",
      "Newcomer",
      "Trainee"
    ],
    "antonyms": [
      "Veteran",
      "Expert"
    ],
    "example": "The rookie firefighter was paired with an experienced captain during his first emergency call."
  },
  "rotund": {
    "word": "Rotund",
    "pos": "adjective",
    "simpleDefinition": "Round or plump in shape, or spherical in form.",
    "banglaMeaning": "গোলাকার",
    "synonyms": [
      "Round",
      "Plump",
      "Chubby",
      "Portly"
    ],
    "antonyms": [
      "Slender",
      "Thin",
      "Skinny"
    ],
    "example": "A cheerful rotund chef greeted guests warmly at the entrance of the restaurant."
  },
  "ruminative": {
    "word": "Ruminative",
    "pos": "adjective",
    "simpleDefinition": "Deeply contemplative, thoughtful, or meditative.",
    "banglaMeaning": "চিন্তানিমগ্ন",
    "synonyms": [
      "Contemplative",
      "Reflective",
      "Meditative",
      "Pensive"
    ],
    "antonyms": [
      "Thoughtless",
      "Rash"
    ],
    "example": "He spent a quiet ruminative evening looking over old letters from his school days."
  },
  "rush": {
    "word": "Rush",
    "pos": "verb",
    "simpleDefinition": "To move or act with urgent speed or in a hurried manner.",
    "banglaMeaning": "দ্রুত ধাবন",
    "synonyms": [
      "Hurry",
      "Dash",
      "Speed",
      "Sprint"
    ],
    "antonyms": [
      "Dawdle",
      "Linger",
      "Delay"
    ],
    "example": "Commuters rush down the station stairs to catch the morning express train."
  },
  "ruthless": {
    "word": "Ruthless",
    "pos": "adjective",
    "simpleDefinition": "Having or showing no pity or compassion for others",
    "banglaMeaning": "নির্মম / নির্দয়",
    "synonyms": [
      "Cruel",
      "Merciless",
      "Heartless"
    ],
    "antonyms": [
      "Merciful",
      "Kind",
      "Compassionate"
    ],
    "example": "The ruthless dictator showed no mercy to his enemies."
  },
  "sacrilegious": {
    "word": "Sacrilegious",
    "pos": "adjective",
    "simpleDefinition": "Showing great disrespect or irreverence toward something sacred or holy.",
    "banglaMeaning": "পবিত্র ব্যক্তির অসম্মানকারী",
    "synonyms": [
      "Profane",
      "Blasphemous",
      "Irreverent",
      "Impious"
    ],
    "antonyms": [
      "Sacred",
      "Reverent",
      "Pious"
    ],
    "example": "Vandalizing the historic altar was condemned as a sacrilegious crime."
  },
  "sacrosanct": {
    "word": "Sacrosanct",
    "pos": "adjective",
    "simpleDefinition": "Regarded as too important, respected, or valuable to be interfered with.",
    "banglaMeaning": "অলঙ্ঘনীয়",
    "synonyms": [
      "Inviolable",
      "Untouchable",
      "Sacred",
      "Hallowed"
    ],
    "antonyms": [
      "Profane",
      "Vulnerable"
    ],
    "example": "Freedom of speech is considered a sacrosanct principle in a healthy democracy."
  },
  "sagacity": {
    "word": "Sagacity",
    "pos": "noun",
    "simpleDefinition": "Keen mental discernment, soundness of judgment, and deep wisdom.",
    "banglaMeaning": "প্রখর জ্ঞান",
    "synonyms": [
      "Wisdom",
      "Insight",
      "Discernment",
      "Acumen"
    ],
    "antonyms": [
      "Foolishness",
      "Stupidity",
      "Folly"
    ],
    "example": "The community respected the elderly judge for her remarkable wisdom and sagacity."
  },
  "sage": {
    "word": "Sage",
    "pos": "noun",
    "simpleDefinition": "A profoundly wise person famed for sound judgment and learning.",
    "banglaMeaning": "জ্ঞানী",
    "synonyms": [
      "Philosopher",
      "Scholar",
      "Wise person",
      "Mentor"
    ],
    "antonyms": [
      "Fool",
      "Simpleton"
    ],
    "example": "Seekers traveled from distant lands to seek counsel from the revered mountain sage."
  },
  "salient": {
    "word": "Salient",
    "pos": "adjective",
    "simpleDefinition": "Most noticeable, prominent, or important.",
    "banglaMeaning": "প্রধান বৈশিষ্ট্য",
    "synonyms": [
      "Prominent",
      "Noticeable",
      "Conspicuous",
      "Striking"
    ],
    "antonyms": [
      "Minor",
      "Inconspicuous",
      "Obscure"
    ],
    "example": "The speaker highlighted the salient points of the economic recovery plan."
  },
  "salubrious": {
    "word": "Salubrious",
    "pos": "adjective",
    "simpleDefinition": "Health-giving, pleasant, and promoting good physical wellbeing.",
    "banglaMeaning": "স্বাস্থ্যকর",
    "synonyms": [
      "Healthy",
      "Wholesome",
      "Beneficial",
      "Invigorating"
    ],
    "antonyms": [
      "Unhealthy",
      "Noxious",
      "Unwholesome"
    ],
    "example": "The crisp alpine air and pure spring water provided a salubrious environment."
  },
  "sanatorium": {
    "word": "Sanatorium",
    "pos": "noun",
    "simpleDefinition": "A medical facility for the treatment of long-term illness or recuperation.",
    "banglaMeaning": "স্বাস্থ্যনিবাস",
    "synonyms": [
      "Retreat",
      "Infirmary",
      "Rest home",
      "Hospital"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Patients recovering from respiratory ailments spent months in a quiet mountain sanatorium."
  },
  "sanction": {
    "word": "Sanction",
    "pos": "noun",
    "simpleDefinition": "A threatened penalty for disobeying a rule, or official permission",
    "banglaMeaning": "অনুমোদন / নিষেধাজ্ঞা",
    "synonyms": [
      "Approve",
      "Authorize",
      "Penalize"
    ],
    "antonyms": [
      "Disapprove",
      "Ban",
      "Prohibit"
    ],
    "example": "The UN imposed sanctions on the rogue nation."
  },
  "sane": {
    "word": "Sane",
    "pos": "adjective",
    "simpleDefinition": "Of sound mind, rational, reasonable, and sensible.",
    "banglaMeaning": "বিবেকী / যুক্তিসম্মত",
    "synonyms": [
      "Rational",
      "Sound",
      "Sensible",
      "Lucid"
    ],
    "antonyms": [
      "Insane",
      "Mad",
      "Irrational"
    ],
    "example": "No sane person would attempt to cross that flooded river in a small rowboat."
  },
  "sardonic": {
    "word": "Sardonic",
    "pos": "adjective",
    "simpleDefinition": "Grimly mocking, cynical, or sarcastic",
    "banglaMeaning": "বিদ্রূপাত্মক / তাচ্ছিল্যপূর্ণ / ঘৃণাপূর্ণ",
    "synonyms": [
      "Sarcastic",
      "Mocking",
      "Cynical"
    ],
    "antonyms": [
      "Sincere",
      "Kind",
      "Warm"
    ],
    "example": "He gave a sardonic smile at the proposal."
  },
  "saw": {
    "word": "Saw",
    "pos": "noun",
    "simpleDefinition": "An old proverb, maxim, or wise traditional saying.",
    "banglaMeaning": "করাত",
    "synonyms": [
      "Proverb",
      "Maxim",
      "Adage",
      "Aphorism"
    ],
    "antonyms": [
      "Novelty"
    ],
    "example": "My grandfather often quoted the old saw that a stitch in time saves nine."
  },
  "scam": {
    "word": "Scam",
    "pos": "noun",
    "simpleDefinition": "A dishonest or fraudulent scheme designed to cheat people of money.",
    "banglaMeaning": "জালিয়াতি করা",
    "synonyms": [
      "Fraud",
      "Swindle",
      "Con",
      "Racket"
    ],
    "antonyms": [
      "Honest deal",
      "Legitimate business"
    ],
    "example": "Police issued warnings to help elderly citizens avoid online email phishing scams."
  },
  "scanty": {
    "word": "Scanty",
    "pos": "adjective",
    "simpleDefinition": "Small or insufficient in quantity, size, or amount; meager.",
    "banglaMeaning": "স্বল্প",
    "synonyms": [
      "Meager",
      "Sparse",
      "Insufficient",
      "Scarce"
    ],
    "antonyms": [
      "Abundant",
      "Ample",
      "Plentiful"
    ],
    "example": "The stranded hikers had to survive on scanty rations of water and dried fruit."
  },
  "scarcity": {
    "word": "Scarcity",
    "pos": "noun",
    "simpleDefinition": "The state of being in short supply or scarce; shortage.",
    "banglaMeaning": "স্বল্প",
    "synonyms": [
      "Shortage",
      "Dearth",
      "Lack",
      "Deficiency"
    ],
    "antonyms": [
      "Abundance",
      "Plenty",
      "Surplus"
    ],
    "example": "Severe summer drought led to a critical scarcity of fresh drinking water."
  },
  "scatter": {
    "word": "Scatter",
    "pos": "verb",
    "simpleDefinition": "To throw in random directions or cause to separate and disperse.",
    "banglaMeaning": "ছড়িয়ে যাওয়া",
    "synonyms": [
      "Disperse",
      "Strew",
      "Sprinkle",
      "Spread"
    ],
    "antonyms": [
      "Gather",
      "Collect",
      "Assemble"
    ],
    "example": "A sudden gust of wind began to scatter dried leaves across the garden path."
  },
  "scenic": {
    "word": "Scenic",
    "pos": "adjective",
    "simpleDefinition": "Offering or relating to beautiful, impressive natural views.",
    "banglaMeaning": "দৃশ্যময়",
    "synonyms": [
      "Picturesque",
      "Beautiful",
      "Panoramic",
      "Charming"
    ],
    "antonyms": [
      "Ugly",
      "Bleak",
      "Unattractive"
    ],
    "example": "We took the scenic coastal route to enjoy breathtaking panoramic views of the ocean."
  },
  "scissors": {
    "word": "Scissors",
    "pos": "noun",
    "simpleDefinition": "A cutting tool with two crossed pivoted blades that slide against each other.",
    "banglaMeaning": "কাঁচি",
    "synonyms": [
      "Shears",
      "Clippers",
      "Cutters"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "She used a sharp pair of stainless steel scissors to cut the ribbon."
  },
  "scold": {
    "word": "Scold",
    "pos": "verb",
    "simpleDefinition": "To rebuke, reprimand, or criticize someone angrily.",
    "banglaMeaning": "তিরস্কার করা",
    "synonyms": [
      "Rebuke",
      "Reprimand",
      "Chide",
      "Berate"
    ],
    "antonyms": [
      "Praise",
      "Commend",
      "Applaud"
    ],
    "example": "The mother scolded her son for crossing the busy street without looking."
  },
  "screams": {
    "word": "Screams",
    "pos": "noun",
    "simpleDefinition": "Long, loud, piercing cries of fear, pain, or excitement.",
    "banglaMeaning": "আর্তনাদ করা",
    "synonyms": [
      "Shrieks",
      "Yells",
      "Howls",
      "Cries"
    ],
    "antonyms": [
      "Whispers",
      "Silence"
    ],
    "example": "Terrified screams rang out when the rollercoaster suddenly made a sharp drop."
  },
  "scrutinize": {
    "word": "Scrutinize",
    "pos": "verb",
    "simpleDefinition": "To examine, inspect, or investigate very closely and thoroughly",
    "banglaMeaning": "নিবিড়ভাবে পরীক্ষা করা",
    "synonyms": [
      "Examine",
      "Inspect",
      "Analyze"
    ],
    "antonyms": [
      "Ignore",
      "Overlook",
      "Neglect"
    ],
    "example": "The auditor scrutinized every line of the accounts."
  },
  "scurrilous": {
    "word": "Scurrilous",
    "pos": "adjective",
    "simpleDefinition": "Making scandalous, defamatory, or abusive claims to damage someone's reputation.",
    "banglaMeaning": "অমাজির্ত / অপমান করা",
    "synonyms": [
      "Defamatory",
      "Slanderous",
      "Abusive",
      "Insulting"
    ],
    "antonyms": [
      "Complimentary",
      "Respectful",
      "Polite"
    ],
    "example": "The tabloid newspaper faced legal action after printing scurrilous lies about the author."
  },
  "seething": {
    "word": "Seething",
    "pos": "adjective",
    "simpleDefinition": "Filled with or characterized by intense, suppressed anger or rage.",
    "banglaMeaning": "ফুটে উপচে পড়া এমন",
    "synonyms": [
      "Fuming",
      "Boiling",
      "Raging",
      "Simmering"
    ],
    "antonyms": [
      "Calm",
      "Peaceful",
      "Tranquil"
    ],
    "example": "He sat in seething silence while his rival falsely claimed credit for the team's work."
  },
  "segregate": {
    "word": "Segregate",
    "pos": "verb",
    "simpleDefinition": "To set apart from the rest; isolate, divide, or separate.",
    "banglaMeaning": "পৃথক করা",
    "synonyms": [
      "Isolate",
      "Separate",
      "Divide",
      "Quarantine"
    ],
    "antonyms": [
      "Integrate",
      "Combine",
      "Unite"
    ],
    "example": "Doctors had to segregate contagious patients to prevent the virus from spreading."
  },
  "senility": {
    "word": "Senility",
    "pos": "noun",
    "simpleDefinition": "The condition of being senile; mental deterioration associated with old age.",
    "banglaMeaning": "বাধর্ক্য",
    "synonyms": [
      "Decrepitude",
      "Dotage",
      "Infirmity"
    ],
    "antonyms": [
      "Youth",
      "Vigor"
    ],
    "example": "Despite advancing years, the retired professor showed no signs of senility."
  },
  "serene": {
    "word": "Serene",
    "pos": "adjective",
    "simpleDefinition": "Calm, tranquil, and untroubled; peaceful",
    "banglaMeaning": "শান্ত / প্রশান্ত",
    "synonyms": [
      "Calm",
      "Peaceful",
      "Tranquil"
    ],
    "antonyms": [
      "Agitated",
      "Turbulent",
      "Disturbed"
    ],
    "example": "The serene lake reflected the mountain perfectly."
  },
  "sermon": {
    "word": "Sermon",
    "pos": "noun",
    "simpleDefinition": "A religious or moral talk delivered during a church service.",
    "banglaMeaning": "নৈতিক বক্তৃতা",
    "synonyms": [
      "Homily",
      "Address",
      "Discourse",
      "Lesson"
    ],
    "antonyms": [
      "Casual chat"
    ],
    "example": "The preacher delivered a powerful sermon emphasizing charity, forgiveness, and love."
  },
  "servile": {
    "word": "Servile",
    "pos": "adjective",
    "simpleDefinition": "Showing an excessive willingness to serve, grovel, or please others; fawning.",
    "banglaMeaning": "ক্রীতদাস সুলভ",
    "synonyms": [
      "Submissive",
      "Sycophantic",
      "Groveling",
      "Fawning"
    ],
    "antonyms": [
      "Assertive",
      "Independent",
      "Proud"
    ],
    "example": "His servile attitude toward the company president alienated his coworkers."
  },
  "severe": {
    "word": "Severe",
    "pos": "adjective",
    "simpleDefinition": "Very great, intense, or strict; causing pain, distress, or hardship.",
    "banglaMeaning": "প্রকট / মারাত্মক",
    "synonyms": [
      "Harsh",
      "Strict",
      "Acute",
      "Stern"
    ],
    "antonyms": [
      "Mild",
      "Lenient",
      "Gentle"
    ],
    "example": "A severe winter storm caused major power outages across the northern provinces."
  },
  "shaky": {
    "word": "Shaky",
    "pos": "adjective",
    "simpleDefinition": "Trembling or shaking, or unstable, unreliable, and weak.",
    "banglaMeaning": "দুর্বল",
    "synonyms": [
      "Unsteady",
      "Trembling",
      "Unstable",
      "Precarious"
    ],
    "antonyms": [
      "Steady",
      "Stable",
      "Firm"
    ],
    "example": "Her shaky voice revealed how frightened she felt during the emergency."
  },
  "shallow": {
    "word": "Shallow",
    "pos": "adjective",
    "simpleDefinition": "Having little depth from top to bottom, or lacking intellectual or emotional depth.",
    "banglaMeaning": "ভাসাভাসা",
    "synonyms": [
      "Superficial",
      "Skin-deep",
      "Frivolous"
    ],
    "antonyms": [
      "Deep",
      "Profound",
      "Thoughtful"
    ],
    "example": "The toddlers safely splashed water in the shallow end of the pool."
  },
  "shore": {
    "word": "Shore",
    "pos": "noun",
    "simpleDefinition": "The land along the edge of a sea, lake, ocean, or river.",
    "banglaMeaning": "তীরভূমি / হূল",
    "synonyms": [
      "Coast",
      "Beach",
      "Seaside",
      "Bank"
    ],
    "antonyms": [
      "Open sea",
      "Inland"
    ],
    "example": "Fishermen pulled their wooden boats onto the sandy shore as dusk arrived."
  },
  "shortcoming": {
    "word": "Shortcoming",
    "pos": "noun",
    "simpleDefinition": "A failure, flaw, or defect to meet a required standard in character or ability.",
    "banglaMeaning": "ত্রুটি / সীমাবদ্ধতা",
    "synonyms": [
      "Flaw",
      "Defect",
      "Weakness",
      "Fault"
    ],
    "antonyms": [
      "Strength",
      "Virtue",
      "Asset"
    ],
    "example": "Impatience was his chief shortcoming during complicated negotiations."
  },
  "shortcomings": {
    "word": "Shortcomings",
    "pos": "noun",
    "simpleDefinition": "Faults, flaws, or weaknesses in character, system, or performance.",
    "banglaMeaning": "ত্রুটি",
    "synonyms": [
      "Flaws",
      "Defects",
      "Weaknesses",
      "Failings"
    ],
    "antonyms": [
      "Strengths",
      "Virtues"
    ],
    "example": "The audit report highlighted several financial shortcomings in the current management system."
  },
  "shove": {
    "word": "Shove",
    "pos": "verb",
    "simpleDefinition": "To push someone or something roughly or forcefully.",
    "banglaMeaning": "ধাঞ্চা মারা",
    "synonyms": [
      "Push",
      "Thrust",
      "Propel",
      "Jostle"
    ],
    "antonyms": [
      "Pull",
      "Drag"
    ],
    "example": "Rude passengers began to shove their way forward onto the bus."
  },
  "shrewd": {
    "word": "Shrewd",
    "pos": "adjective",
    "simpleDefinition": "Having or showing sharp powers of judgment; astute and perceptive",
    "banglaMeaning": "চতুর / বিচক্ষণ",
    "synonyms": [
      "Clever",
      "Astute",
      "Cunning"
    ],
    "antonyms": [
      "Naive",
      "Foolish",
      "Simple"
    ],
    "example": "The shrewd businesswoman made a huge profit."
  },
  "shrink": {
    "word": "Shrink",
    "pos": "verb",
    "simpleDefinition": "To become or make smaller in size, volume, or extent.",
    "banglaMeaning": "সংকুচিত করা",
    "synonyms": [
      "Contract",
      "Diminish",
      "Dwindle",
      "Recede"
    ],
    "antonyms": [
      "Expand",
      "Enlarge",
      "Grow"
    ],
    "example": "Woolen sweaters will quickly shrink if washed with hot water."
  },
  "simplicity": {
    "word": "Simplicity",
    "pos": "noun",
    "simpleDefinition": "The quality or condition of being easy to understand or do; unadorned elegance.",
    "banglaMeaning": "সরল",
    "synonyms": [
      "Clarity",
      "Plainness",
      "Ease",
      "Directness"
    ],
    "antonyms": [
      "Complexity",
      "Intricacy",
      "Extravagance"
    ],
    "example": "The beauty of the mobile application lies in its visual simplicity and speed."
  },
  "sinister": {
    "word": "Sinister",
    "pos": "adjective",
    "simpleDefinition": "Giving the impression that something harmful, evil, or menacing will happen.",
    "banglaMeaning": "অপকারী / অশুভ",
    "synonyms": [
      "Menacing",
      "Ominous",
      "Threatening",
      "Dark"
    ],
    "antonyms": [
      "Benign",
      "Auspicious",
      "Comforting"
    ],
    "example": "The dilapidated house had a sinister look beneath the dark storm clouds."
  },
  "skeptical": {
    "word": "Skeptical",
    "pos": "adjective",
    "simpleDefinition": "Having doubts and not easily convinced of claims",
    "banglaMeaning": "সংশয়বাদী / সন্দেহপ্রবণ",
    "synonyms": [
      "Doubtful",
      "Cynical",
      "Questioning"
    ],
    "antonyms": [
      "Trusting",
      "Credulous",
      "Believing"
    ],
    "example": "Scientists are always skeptical of unproven claims."
  },
  "skepticism": {
    "word": "Skepticism",
    "pos": "noun",
    "simpleDefinition": "A questioning attitude, doubt, or disbelief regarding claims or facts.",
    "banglaMeaning": "সংশয়বাদ",
    "synonyms": [
      "Doubt",
      "Disbelief",
      "Distrust",
      "Cynicism"
    ],
    "antonyms": [
      "Belief",
      "Faith",
      "Conviction"
    ],
    "example": "The scientist greeted the miraculous healing claims with healthy skepticism."
  },
  "skinflint": {
    "word": "Skinflint",
    "pos": "noun",
    "simpleDefinition": "A person who hates to spend money; a stingy miser.",
    "banglaMeaning": "মিতব্যয়ী / কিপটে",
    "synonyms": [
      "Miser",
      "Penny-pincher",
      "Scrooge",
      "Cheapskate"
    ],
    "antonyms": [
      "Spendthrift",
      "Philanthropist"
    ],
    "example": "The wealthy skinflint refused to pay even five dollars for a warm coat."
  },
  "slackening": {
    "word": "Slackening",
    "pos": "verb",
    "simpleDefinition": "Becoming or making slower, less active, or less tight; easing off.",
    "banglaMeaning": "ঝিমুনি",
    "synonyms": [
      "Slowing",
      "Abating",
      "Easing",
      "Loosening"
    ],
    "antonyms": [
      "Tightening",
      "Accelerating",
      "Quickening"
    ],
    "example": "With the rain slackening, the workers stepped outside to continue building."
  },
  "slip": {
    "word": "Slip",
    "pos": "verb",
    "simpleDefinition": "To lose one's footing and slide unintentionally.",
    "banglaMeaning": "পলায়ন / এড়িয়ে যাওয়া",
    "synonyms": [
      "Slide",
      "Skid",
      "Stumble",
      "Trip"
    ],
    "antonyms": [
      "Stand firm",
      "Grip"
    ],
    "example": "Walk slowly on the icy driveway so you do not slip and hurt yourself."
  },
  "slothful": {
    "word": "Slothful",
    "pos": "adjective",
    "simpleDefinition": "Lazy, sluggish, and disinclined to work or exert effort.",
    "banglaMeaning": "নিষ্ক্রিয়",
    "synonyms": [
      "Lazy",
      "Sluggish",
      "Idle",
      "Lethargic"
    ],
    "antonyms": [
      "Industrious",
      "Diligent",
      "Active"
    ],
    "example": "His slothful lifestyle led him to spend entire weekends sleeping on the sofa."
  },
  "sluggish": {
    "word": "Sluggish",
    "pos": "adjective",
    "simpleDefinition": "Slow-moving, inactive, or lacking energy and vitality",
    "banglaMeaning": "মন্থর / অলস / ধীরগতির / আলস্যপরায়ণ / কুঁড়ে",
    "synonyms": [
      "Slow",
      "Lazy",
      "Lethargic"
    ],
    "antonyms": [
      "Active",
      "Energetic",
      "Brisk"
    ],
    "example": "Economic growth has been sluggish for several years."
  },
  "slumber": {
    "word": "Slumber",
    "pos": "noun",
    "simpleDefinition": "A peaceful, deep, or restful sleep.",
    "banglaMeaning": "গভীর ঘুম; নিদ্রা",
    "synonyms": [
      "Sleep",
      "Rest",
      "Doze",
      "Nap"
    ],
    "antonyms": [
      "Wakefulness"
    ],
    "example": "The gentle sound of falling rain lulled the child into a peaceful slumber."
  },
  "sneer": {
    "word": "Sneer",
    "pos": "noun",
    "simpleDefinition": "A contemptuous, mocking smile or remark expressing disdain.",
    "banglaMeaning": "বিদ্রুপ করা",
    "synonyms": [
      "Smirk",
      "Jeer",
      "Scoff",
      "Taunt"
    ],
    "antonyms": [
      "Smile",
      "Compliment"
    ],
    "example": "He dismissed his colleague's idea with an arrogant sneer of contempt."
  },
  "snob": {
    "word": "Snob",
    "pos": "noun",
    "simpleDefinition": "A person who looks down on others they consider socially or culturally inferior.",
    "banglaMeaning": "উন্নাসিক লোক (যে ব্যক্তি নিম্ন শ্রেণির মানুষকে অবজ্ঞা করে",
    "synonyms": [
      "Elitist",
      "Condescending person"
    ],
    "antonyms": [
      "Humble person"
    ],
    "example": "Being an intellectual snob, he refused to read any modern popular fiction."
  },
  "sober": {
    "word": "Sober",
    "pos": "adjective",
    "simpleDefinition": "Not drunk or affected by alcohol; serious, sensible, and solemn.",
    "banglaMeaning": "গাম্ভীর্যপূর্ণ",
    "synonyms": [
      "Clearheaded",
      "Temperate",
      "Solemn",
      "Sensible"
    ],
    "antonyms": [
      "Intoxicated",
      "Drunk",
      "Frivolous"
    ],
    "example": "The physician delivered the sober medical diagnosis with great sensitivity."
  },
  "solace": {
    "word": "Solace",
    "pos": "noun",
    "simpleDefinition": "Comfort, relief, or consolation in a time of distress or sadness.",
    "banglaMeaning": "সান্ত্বনা",
    "synonyms": [
      "Comfort",
      "Consolation",
      "Relief",
      "Peace"
    ],
    "antonyms": [
      "Distress",
      "Anguish",
      "Misery"
    ],
    "example": "She found solace in quiet evening walks through the countryside."
  },
  "solemn": {
    "word": "Solemn",
    "pos": "adjective",
    "simpleDefinition": "Formal, dignified, and serious; characterized by deep sincerity.",
    "banglaMeaning": "আনুষ্ঠানিক",
    "synonyms": [
      "Serious",
      "Grave",
      "Somber",
      "Formal"
    ],
    "antonyms": [
      "Cheerful",
      "Frivolous",
      "Lighthearted"
    ],
    "example": "The crowd held a solemn minute of silence in memory of fallen heroes."
  },
  "solvent": {
    "word": "Solvent",
    "pos": "adjective",
    "simpleDefinition": "Having sufficient assets to pay all one's debts; financially sound.",
    "banglaMeaning": "দেনা পরিশোধে সক্ষম",
    "synonyms": [
      "Financially sound",
      "Creditworthy",
      "Stable"
    ],
    "antonyms": [
      "Insolvent",
      "Bankrupt"
    ],
    "example": "Prudent financial management kept the company solvent during the economic downturn."
  },
  "somber": {
    "word": "Somber",
    "pos": "adjective",
    "simpleDefinition": "Dark or dull in tone; gloomy and solemn",
    "banglaMeaning": "বিষাদময় / অন্ধকারাচ্ছন্ন",
    "synonyms": [
      "Dark",
      "Gloomy",
      "Depressing"
    ],
    "antonyms": [
      "Bright",
      "Cheerful",
      "Lively"
    ],
    "example": "The funeral was a somber occasion for everyone."
  },
  "soothe": {
    "word": "Soothe",
    "pos": "verb",
    "simpleDefinition": "To gently calm someone, or relieve pain, irritation, or anxiety.",
    "banglaMeaning": "প্রশমিত করা / কমানো",
    "synonyms": [
      "Calm",
      "Pacify",
      "Ease",
      "Alleviate"
    ],
    "antonyms": [
      "Irritate",
      "Inflame",
      "Agitate"
    ],
    "example": "A cup of warm chamomile tea helped soothe her sore throat and calm her nerves."
  },
  "sophisticated": {
    "word": "Sophisticated",
    "pos": "adjective",
    "simpleDefinition": "Having refined taste, worldly experience, or complex advanced design.",
    "banglaMeaning": "কৃত্রিম",
    "synonyms": [
      "Refined",
      "Cultured",
      "Advanced",
      "Complex"
    ],
    "antonyms": [
      "Unsophisticated",
      "Crude",
      "Naive"
    ],
    "example": "Modern passenger jets are equipped with highly sophisticated autopilots."
  },
  "sophistry": {
    "word": "Sophistry",
    "pos": "noun",
    "simpleDefinition": "The use of clever but false arguments, especially with the intention of deceiving",
    "banglaMeaning": "কূটতর্ক / প্রতারণাপূর্ণ যুক্তি",
    "synonyms": [
      "Fallacy",
      "Deception",
      "Trickery"
    ],
    "antonyms": [
      "Logic",
      "Truth",
      "Honesty"
    ],
    "example": "His defense was built on sophistry rather than facts."
  },
  "sparkle": {
    "word": "Sparkle",
    "pos": "verb",
    "simpleDefinition": "To shine brightly with flashes of light; glitter.",
    "banglaMeaning": "ঝলমল করা; উজ্জ্বলভাবে চকমক করা",
    "synonyms": [
      "Glitter",
      "Twinkle",
      "Shimmer",
      "Flash"
    ],
    "antonyms": [
      "Be dull",
      "Darken"
    ],
    "example": "Clean glass windows sparkle in the early morning sunlight."
  },
  "splendid": {
    "word": "Splendid",
    "pos": "adjective",
    "simpleDefinition": "Magnificent, grand, very impressive, or excellent.",
    "banglaMeaning": "জমকালো",
    "synonyms": [
      "Magnificent",
      "Grand",
      "Superb",
      "Glorious"
    ],
    "antonyms": [
      "Dismal",
      "Terrible",
      "Poor"
    ],
    "example": "The mountain lodge offered a splendid view of the sun setting over the valley."
  },
  "spool": {
    "word": "Spool",
    "pos": "noun",
    "simpleDefinition": "A cylindrical device on which thread, wire, or film is wound.",
    "banglaMeaning": "নাটাই",
    "synonyms": [
      "Reel",
      "Bobbin",
      "Cylinder"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The seamstress selected a spool of dark blue silk thread for the hem."
  },
  "spunky": {
    "word": "Spunky",
    "pos": "adjective",
    "simpleDefinition": "Courageous, lively, spirited, and determined.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "Spirited",
      "Feisty",
      "Plucky",
      "Brave"
    ],
    "antonyms": [
      "Timid",
      "Cowardly",
      "Spiritless"
    ],
    "example": "The spunky young girl refused to let a broken wrist keep her off the playground."
  },
  "spurious": {
    "word": "Spurious",
    "pos": "adjective",
    "simpleDefinition": "False, bogus, or not genuine although claiming to be so.",
    "banglaMeaning": "ভেজাল",
    "synonyms": [
      "Bogus",
      "Counterfeit",
      "Fake",
      "False"
    ],
    "antonyms": [
      "Genuine",
      "Authentic",
      "Real"
    ],
    "example": "The art historian proved the painting was a spurious copy of the original masterpiece."
  },
  "squalor": {
    "word": "Squalor",
    "pos": "noun",
    "simpleDefinition": "The state of being extremely dirty, foul, and unpleasant, usually from poverty.",
    "banglaMeaning": "নোংরা / অস্বস্তিকর অবস্থা",
    "synonyms": [
      "Filth",
      "Dirtiness",
      "Wretchedness",
      "Misery"
    ],
    "antonyms": [
      "Cleanliness",
      "Luxury",
      "Splendor"
    ],
    "example": "Volunteers worked hard to clean up the neighborhood squalor and build fresh parks."
  },
  "squander": {
    "word": "Squander",
    "pos": "verb",
    "simpleDefinition": "To waste money, time, or resources in a reckless and foolish manner",
    "banglaMeaning": "অপচয় করা / বৃথা নষ্ট করা",
    "synonyms": [
      "Waste",
      "Misuse",
      "Fritter away"
    ],
    "antonyms": [
      "Save",
      "Conserve",
      "Preserve"
    ],
    "example": "He squandered his inheritance on gambling."
  },
  "square meal": {
    "word": "Square meal",
    "pos": "idiom",
    "simpleDefinition": "A substantial, satisfying, and balanced meal providing good nourishment.",
    "banglaMeaning": "সুষম খাদ্য",
    "synonyms": [
      "Hearty meal",
      "Full meal",
      "Nourishing meal"
    ],
    "antonyms": [
      "Snack",
      "Light bite"
    ],
    "example": "After a grueling day of physical labor, the workers sat down to a hot square meal."
  },
  "stale": {
    "word": "Stale",
    "pos": "adjective",
    "simpleDefinition": "No longer fresh, pleasant, or tasty to eat; or dull and repetitive.",
    "banglaMeaning": "টাটকা নয় (বাসি )",
    "synonyms": [
      "Dry",
      "Hardened",
      "Unfresh",
      "Trite"
    ],
    "antonyms": [
      "Fresh",
      "Crisp",
      "Novel"
    ],
    "example": "Leaving bread uncovered on the counter overnight will make it dry and stale."
  },
  "state of shock": {
    "word": "State of shock",
    "pos": "idiom",
    "simpleDefinition": "A state of severe emotional trauma, disbelief, or physical collapse following an event.",
    "banglaMeaning": "কিংকর্তব্যবিমূঢ়",
    "synonyms": [
      "Traumatized",
      "Stunned",
      "Dazed"
    ],
    "antonyms": [
      "Calm",
      "Composed"
    ],
    "example": "Survivors of the severe earthquake remained in a state of shock for several days."
  },
  "stated": {
    "word": "Stated",
    "pos": "adjective",
    "simpleDefinition": "Clearly expressed, declared, or officially designated.",
    "banglaMeaning": "প্রকাশিত হওয়া",
    "synonyms": [
      "Declared",
      "Specified",
      "Expressed",
      "Explicit"
    ],
    "antonyms": [
      "Unstated",
      "Implicit"
    ],
    "example": "The construction was completed on schedule and within its stated budget."
  },
  "statesman": {
    "word": "Statesman",
    "pos": "noun",
    "simpleDefinition": "A skilled, respected, and experienced political leader devoted to the nation.",
    "banglaMeaning": "হূটনীতিন্ত্র ব্যক্তি",
    "synonyms": [
      "Diplomat",
      "Political leader",
      "Leader"
    ],
    "antonyms": [
      "Demagogue"
    ],
    "example": "The retired statesman mediated peace talks between the two neighboring countries."
  },
  "steadfast": {
    "word": "Steadfast",
    "pos": "adjective",
    "simpleDefinition": "Resolutely or dutifully firm, loyal, and unwavering",
    "banglaMeaning": "দৃঢ় / অবিচল / নিষ্ঠাবান / অবিচলিত",
    "synonyms": [
      "Loyal",
      "Firm",
      "Unwavering"
    ],
    "antonyms": [
      "Unsteady",
      "Disloyal",
      "Wavering"
    ],
    "example": "She was steadfast in her support for justice."
  },
  "steal a march": {
    "word": "Steal a march",
    "pos": "idiom",
    "simpleDefinition": "To gain an unexpected advantage over a rival by acting before them.",
    "banglaMeaning": "উজ্জ্বলতায় ছাপিয়ে যাওয়া",
    "synonyms": [
      "Gain advantage",
      "Outmaneuver",
      "Pre-empt"
    ],
    "antonyms": [
      "Fall behind"
    ],
    "example": "By launching its mobile app early, the startup managed to steal a march on rivals."
  },
  "step on somebodys toes": {
    "word": "Step on somebodys toes",
    "pos": "idiom",
    "simpleDefinition": "To encroach upon or offend someone by interfering with their area of authority.",
    "banglaMeaning": "অনুভূতি বা সংস্কারে আঘাত হানা",
    "synonyms": [
      "Offend",
      "Intrude",
      "Encroach",
      "Interfere"
    ],
    "antonyms": [
      "Respect boundaries",
      "Cooperate"
    ],
    "example": "Be mindful of office boundaries so you do not step on your supervisor's toes."
  },
  "stern": {
    "word": "Stern",
    "pos": "adjective",
    "simpleDefinition": "Serious, strict, and uncompromising in discipline or manner.",
    "banglaMeaning": "কঠোর",
    "synonyms": [
      "Strict",
      "Severe",
      "Harsh",
      "Austere"
    ],
    "antonyms": [
      "Lenient",
      "Gentle",
      "Forgiving"
    ],
    "example": "The principal gave a stern warning that bullying would lead to immediate suspension."
  },
  "stifle": {
    "word": "Stifle",
    "pos": "verb",
    "simpleDefinition": "To restrain a reaction or suppress something from developing",
    "banglaMeaning": "দমিয়ে রাখা / শ্বাসরোধ করা",
    "synonyms": [
      "Suppress",
      "Smother",
      "Extinguish"
    ],
    "antonyms": [
      "Encourage",
      "Promote",
      "Release"
    ],
    "example": "The government tried to stifle freedom of the press."
  },
  "stimulus": {
    "word": "Stimulus",
    "pos": "noun",
    "simpleDefinition": "Something that excites, provokes, or encourages activity, energy, or growth.",
    "banglaMeaning": "উদ্দীপনা / উদ্দীপক / প্রণোদনা / প্রেরণা",
    "synonyms": [
      "Incentive",
      "Spur",
      "Catalyst",
      "Impetus"
    ],
    "antonyms": [
      "Deterrent",
      "Obstacle",
      "Disincentive"
    ],
    "example": "Lower interest rates provided a powerful stimulus for local home construction and business growth."
  },
  "stir": {
    "word": "Stir",
    "pos": "verb",
    "simpleDefinition": "To mix a liquid by moving an implement, or arouse an emotional reaction.",
    "banglaMeaning": "আলোড়িত করা",
    "synonyms": [
      "Mix",
      "Agitate",
      "Arouse",
      "Provoke"
    ],
    "antonyms": [
      "Leave still",
      "Soothe"
    ],
    "example": "Gently stir the soup with a wooden ladle until the seasoning dissolves."
  },
  "stout": {
    "word": "Stout",
    "pos": "adjective",
    "simpleDefinition": "Heavily built, strong, and thick, or brave and determined.",
    "banglaMeaning": "শক্তিশালী / নিভর্শীক",
    "synonyms": [
      "Sturdy",
      "Solid",
      "Brave",
      "Robust"
    ],
    "antonyms": [
      "Slender",
      "Thin",
      "Frail"
    ],
    "example": "He carried a stout oak staff as he hiked along the rugged mountain trails."
  },
  "stream": {
    "word": "Stream",
    "pos": "noun",
    "simpleDefinition": "A small narrow river, or a continuous flow of water or things.",
    "banglaMeaning": "জলপ্রবাহ",
    "synonyms": [
      "Brook",
      "Creek",
      "Flow",
      "Current"
    ],
    "antonyms": [
      "Trickle"
    ],
    "example": "Clear cold water bubbled over the smooth stones of the forest stream."
  },
  "strict": {
    "word": "Strict",
    "pos": "adjective",
    "simpleDefinition": "Demanding that rules concerning discipline or behavior are obeyed exactly.",
    "banglaMeaning": "কঠোর",
    "synonyms": [
      "Rigorous",
      "Stringent",
      "Firm",
      "Severe"
    ],
    "antonyms": [
      "Lenient",
      "Permissive",
      "Lax"
    ],
    "example": "The university laboratory follows strict safety protocols for handling chemicals."
  },
  "strident": {
    "word": "Strident",
    "pos": "adjective",
    "simpleDefinition": "Loud and harsh; grating, or expressing viewpoints forcefully and aggressively.",
    "banglaMeaning": "কর্কশ",
    "synonyms": [
      "Harsh",
      "Grating",
      "Raucous",
      "Shrill"
    ],
    "antonyms": [
      "Soft",
      "Mild",
      "Pleasant"
    ],
    "example": "The politician's strident voice echoed loudly across the echoing lecture hall."
  },
  "stringent": {
    "word": "Stringent",
    "pos": "adjective",
    "simpleDefinition": "Strict, precise, and exacting regulations or conditions",
    "banglaMeaning": "কঠোর / অনমনীয়",
    "synonyms": [
      "Strict",
      "Severe",
      "Rigorous"
    ],
    "antonyms": [
      "Lenient",
      "Loose",
      "Easy"
    ],
    "example": "Stringent measures were taken to control pollution."
  },
  "stubborn": {
    "word": "Stubborn",
    "pos": "adjective",
    "simpleDefinition": "Having or showing a determined refusal to change one's mind or position.",
    "banglaMeaning": "একগুঁয়ে",
    "synonyms": [
      "Obstinate",
      "Unyielding",
      "Headstrong",
      "Persistent"
    ],
    "antonyms": [
      "Compliant",
      "Yielding",
      "Flexible"
    ],
    "example": "He was too stubborn to ask for directions even when he knew he was lost."
  },
  "subdue": {
    "word": "Subdue",
    "pos": "verb",
    "simpleDefinition": "To overcome, conquer, or bring under control",
    "banglaMeaning": "বশীভূত করা / দমন করা",
    "synonyms": [
      "Overcome",
      "Suppress",
      "Control"
    ],
    "antonyms": [
      "Liberate",
      "Release",
      "Encourage"
    ],
    "example": "The army subdued the rebels after a long battle."
  },
  "subordination": {
    "word": "Subordination",
    "pos": "noun",
    "simpleDefinition": "The act of ranking below or being under the authority and control of another.",
    "banglaMeaning": "অধীনস্থ",
    "synonyms": [
      "Subjection",
      "Submission",
      "Compliance"
    ],
    "antonyms": [
      "Autonomy",
      "Independence",
      "Dominance"
    ],
    "example": "Military discipline requires the complete subordination of personal preferences to duty."
  },
  "subpoena": {
    "word": "Subpoena",
    "pos": "noun",
    "simpleDefinition": "A formal legal writ ordering a person to appear in court to give testimony.",
    "banglaMeaning": "আদালতে ডাকা",
    "synonyms": [
      "Summons",
      "Court order",
      "Writ"
    ],
    "antonyms": [
      "Dismissal"
    ],
    "example": "The key witness received a subpoena ordering her to testify at the trial next Tuesday."
  },
  "subterfuge": {
    "word": "Subterfuge",
    "pos": "noun",
    "simpleDefinition": "Deceit used in order to achieve one's goal; clever trickery.",
    "banglaMeaning": "প্রতারণা",
    "synonyms": [
      "Deceit",
      "Trickery",
      "Guile",
      "Deception"
    ],
    "antonyms": [
      "Honesty",
      "Openness",
      "Candor"
    ],
    "example": "The spy obtained the classified documents through elaborate disguises and subterfuge."
  },
  "subtle": {
    "word": "Subtle",
    "pos": "adjective",
    "simpleDefinition": "So delicate, precise, or understated as to be difficult to analyze",
    "banglaMeaning": "সূক্ষ্ম / জটিল / কৌশলী",
    "synonyms": [
      "Delicate",
      "Refined",
      "Indirect"
    ],
    "antonyms": [
      "Obvious",
      "Blunt",
      "Blatant"
    ],
    "example": "There was a subtle difference in the two proposals."
  },
  "subtlety": {
    "word": "Subtlety",
    "pos": "noun",
    "simpleDefinition": "The quality of being subtle; delicate meaning, nuance, or refinement.",
    "banglaMeaning": "অস্পষ্ট",
    "synonyms": [
      "Delicacy",
      "Nuance",
      "Refinement",
      "Precision"
    ],
    "antonyms": [
      "Obviousness",
      "Crudeness"
    ],
    "example": "Appreciating classic literature requires an understanding of artistic subtlety and metaphor."
  },
  "subtraction": {
    "word": "Subtraction",
    "pos": "noun",
    "simpleDefinition": "The mathematical operation of taking one number or quantity away from another.",
    "banglaMeaning": "বিয়োগ",
    "synonyms": [
      "Deduction",
      "Removal",
      "Diminution"
    ],
    "antonyms": [
      "Addition",
      "Summation"
    ],
    "example": "Young students practice basic addition and subtraction with wooden counting blocks."
  },
  "subvert": {
    "word": "Subvert",
    "pos": "verb",
    "simpleDefinition": "To undermine the power, authority, or stability of an established system.",
    "banglaMeaning": "ক্ষমতা ধ্বংস বা দুর্বল করা",
    "synonyms": [
      "Undermine",
      "Destabilize",
      "Overthrow",
      "Sabotage"
    ],
    "antonyms": [
      "Uphold",
      "Support",
      "Strengthen"
    ],
    "example": "Corrupt officials attempted to subvert the election through bribery and vote-rigging."
  },
  "succinct": {
    "word": "Succinct",
    "pos": "adjective",
    "simpleDefinition": "Briefly and clearly expressed; concise and directly to the point.",
    "banglaMeaning": "সংক্ষিপ্ত / প্রাঞ্জল",
    "synonyms": [
      "Concise",
      "Brief",
      "Compact",
      "Terse"
    ],
    "antonyms": [
      "Verbose",
      "Wordy",
      "Lengthy"
    ],
    "example": "He gave a succinct summary of the complex financial report."
  },
  "suffrage": {
    "word": "Suffrage",
    "pos": "noun",
    "simpleDefinition": "The legal right to vote in political elections.",
    "banglaMeaning": "ভোটাধিকার",
    "synonyms": [
      "Right to vote",
      "Franchise",
      "Voting rights"
    ],
    "antonyms": [
      "Disenfranchisement"
    ],
    "example": "Activists fought dedicated battles throughout the twentieth century to achieve universal suffrage."
  },
  "sullen": {
    "word": "Sullen",
    "pos": "adjective",
    "simpleDefinition": "Bad-tempered, gloomy, and sulky in silent resentment.",
    "banglaMeaning": "চাপা ক্রোধযুক্ত",
    "synonyms": [
      "Sulky",
      "Gloomy",
      "Morose",
      "Resentful"
    ],
    "antonyms": [
      "Cheerful",
      "Bright",
      "Sociable"
    ],
    "example": "The reprimanded teenager sat in sullen silence, refusing to say a word."
  },
  "summons": {
    "word": "Summons",
    "pos": "noun",
    "simpleDefinition": "An official legal order to appear before a judge or magistrate.",
    "banglaMeaning": "ডেকে পাঠানো",
    "synonyms": [
      "Subpoena",
      "Citation",
      "Writ",
      "Court order"
    ],
    "antonyms": [
      "Dismissal"
    ],
    "example": "He received a court summons instructing him to appear as a juror next Monday."
  },
  "sumptuous": {
    "word": "Sumptuous",
    "pos": "adjective",
    "simpleDefinition": "Splendid and expensive-looking; luxurious and lavish",
    "banglaMeaning": "মহাধনী / জমকালো / বিলাসবহুল",
    "synonyms": [
      "Lavish",
      "Luxurious",
      "Grand"
    ],
    "antonyms": [
      "Plain",
      "Simple",
      "Modest"
    ],
    "example": "The wedding feast was absolutely sumptuous."
  },
  "superannuate": {
    "word": "Superannuate",
    "pos": "verb",
    "simpleDefinition": "To retire someone with a pension, or discard something as too old or obsolete.",
    "banglaMeaning": "কাজ বা ব্যবহারের জন্য অতি প্রাচীন / বয়স উত্তীর্ন",
    "synonyms": [
      "Pension off",
      "Retire",
      "Discard",
      "Phase out"
    ],
    "antonyms": [
      "Employ",
      "Retain",
      "Reactivate"
    ],
    "example": "The company decided to superannuate older machinery and install automated equipment."
  },
  "supercilious": {
    "word": "Supercilious",
    "pos": "adjective",
    "simpleDefinition": "Behaving or looking as though one thinks one is superior to others; arrogant.",
    "banglaMeaning": "অহংকারী / গর্বিত",
    "synonyms": [
      "Arrogant",
      "Haughty",
      "Condescending",
      "Disdainful"
    ],
    "antonyms": [
      "Humble",
      "Modest",
      "Unassuming"
    ],
    "example": "The clerk gave a supercilious smirk when the customer asked for a discount."
  },
  "superficial": {
    "word": "Superficial",
    "pos": "adjective",
    "simpleDefinition": "Existing or occurring at the surface; not deep or thorough",
    "banglaMeaning": "ভাসা-ভাসা / অগভীর",
    "synonyms": [
      "Shallow",
      "Surface-level",
      "Cursory"
    ],
    "antonyms": [
      "Deep",
      "Thorough",
      "Profound"
    ],
    "example": "His understanding of the subject was superficial."
  },
  "superior": {
    "word": "Superior",
    "pos": "adjective",
    "simpleDefinition": "Higher in rank, status, quality, or excellence than others.",
    "banglaMeaning": "শ্রেষ্ঠ",
    "synonyms": [
      "Better",
      "Higher",
      "Exceptional",
      "Premier"
    ],
    "antonyms": [
      "Inferior",
      "Subordinate",
      "Poor"
    ],
    "example": "Handcrafted leather shoes are clearly superior in durability to synthetic footwear."
  },
  "supplant": {
    "word": "Supplant",
    "pos": "verb",
    "simpleDefinition": "To supersede and replace someone or something, often through innovation or force.",
    "banglaMeaning": "অন্যের স্থান দখল করা; প্রতিস্থাপন করা",
    "synonyms": [
      "Replace",
      "Supersede",
      "Oust",
      "Displace"
    ],
    "antonyms": [
      "Retain",
      "Keep",
      "Maintain"
    ],
    "example": "Modern smartphones have largely supplanted portable music players and calculators."
  },
  "suppress": {
    "word": "Suppress",
    "pos": "verb",
    "simpleDefinition": "To forcibly put an end to something; prevent information from being known",
    "banglaMeaning": "দমন করা / চেপে রাখা",
    "synonyms": [
      "Restrain",
      "Quell",
      "Subdue"
    ],
    "antonyms": [
      "Release",
      "Allow",
      "Encourage"
    ],
    "example": "The regime tried to suppress all protests."
  },
  "surreal": {
    "word": "Surreal",
    "pos": "adjective",
    "simpleDefinition": "Having a bizarre, dreamlike, or unreal quality; strange.",
    "banglaMeaning": "অবাস্তব মনে হওয়া",
    "synonyms": [
      "Bizarre",
      "Dreamlike",
      "Otherworldly",
      "Unreal"
    ],
    "antonyms": [
      "Realistic",
      "Conventional",
      "Normal"
    ],
    "example": "Walking through the completely empty airport at midnight felt quiet and surreal."
  },
  "susceptible": {
    "word": "Susceptible",
    "pos": "adjective",
    "simpleDefinition": "Likely or liable to be influenced, harmed, or affected by a particular thing.",
    "banglaMeaning": "স্পশর্কাতর",
    "synonyms": [
      "Vulnerable",
      "Prone",
      "Liable",
      "Sensitive"
    ],
    "antonyms": [
      "Resistant",
      "Immune",
      "Protected"
    ],
    "example": "Young seedlings are especially susceptible to frost damage during chilly spring nights."
  },
  "suspect": {
    "word": "Suspect",
    "pos": "noun",
    "simpleDefinition": "A person thought to be guilty of a crime or offense under investigation.",
    "banglaMeaning": "সন্দেহভাজন",
    "synonyms": [
      "Accused",
      "Defendant",
      "Person of interest"
    ],
    "antonyms": [
      "Victim",
      "Innocent person"
    ],
    "example": "Police questioned the suspect about his whereabouts at the time of the burglary."
  },
  "sustain": {
    "word": "Sustain",
    "pos": "verb",
    "simpleDefinition": "To strengthen, support, or keep in existence over a long period",
    "banglaMeaning": "টিকিয়ে রাখা / সমর্থন জোগানো",
    "synonyms": [
      "Maintain",
      "Support",
      "Uphold"
    ],
    "antonyms": [
      "Neglect",
      "Abandon",
      "Destroy"
    ],
    "example": "We must sustain our natural environment for future generations."
  },
  "swindle": {
    "word": "Swindle",
    "pos": "verb",
    "simpleDefinition": "To cheat or defraud someone out of money or possessions using deception.",
    "banglaMeaning": "প্রতারণা করা",
    "synonyms": [
      "Cheat",
      "Defraud",
      "Con",
      "Fleece"
    ],
    "antonyms": [
      "Treat honestly",
      "Compensate"
    ],
    "example": "The con artist attempted to swindle unsuspecting tourists with counterfeit jewelry."
  },
  "swollen": {
    "word": "Swollen",
    "pos": "adjective",
    "simpleDefinition": "Enlarged or puffed up, typically from injury, inflammation, or fluid buildup.",
    "banglaMeaning": "ফোলা বা ফুলে যাওয়া",
    "synonyms": [
      "Distended",
      "Puffy",
      "Enlarged",
      "Bloated"
    ],
    "antonyms": [
      "Shrunken",
      "Deflated",
      "Normal"
    ],
    "example": "Her ankle became painfully swollen after she twisted it during the soccer match."
  },
  "sycophancy": {
    "word": "Sycophancy",
    "pos": "noun",
    "simpleDefinition": "Obsequious, flattering behavior toward someone important in order to gain advantage.",
    "banglaMeaning": "তোষামুদি",
    "synonyms": [
      "Flattery",
      "Servility",
      "Brown-nosing",
      "Fawning"
    ],
    "antonyms": [
      "Honesty",
      "Sincerity",
      "Frankness"
    ],
    "example": "The vain executive was surrounded by sycophancy that concealed real corporate problems."
  },
  "sycophant": {
    "word": "Sycophant",
    "pos": "noun",
    "simpleDefinition": "A person who flatters powerful people for personal gain",
    "banglaMeaning": "চাটুকার / তোষামোদকারী",
    "synonyms": [
      "Flatterer",
      "Yes- man",
      "Fawner"
    ],
    "antonyms": [
      "Critic",
      "Opponent",
      "Detractor"
    ],
    "example": "The sycophant always agreed with his boss, no matter what."
  },
  "synopsis": {
    "word": "Synopsis",
    "pos": "noun",
    "simpleDefinition": "A brief summary or general overview of a book, play, or other work.",
    "banglaMeaning": "সারাংশ",
    "synonyms": [
      "Summary",
      "Outline",
      "Abstract",
      "Recap"
    ],
    "antonyms": [
      "Full text",
      "Expansion"
    ],
    "example": "The author submitted a two-page synopsis along with the first chapter of her manuscript."
  },
  "taciturn": {
    "word": "Taciturn",
    "pos": "adjective",
    "simpleDefinition": "Reserved, uncommunicative, and saying very little by nature.",
    "banglaMeaning": "স্বল্পভাষী",
    "synonyms": [
      "Untalkative",
      "Reserved",
      "Silent",
      "Reticent"
    ],
    "antonyms": [
      "Talkative",
      "Loquacious",
      "Voluble"
    ],
    "example": "The taciturn old farmer rarely spoke more than a few words at breakfast."
  },
  "tactful": {
    "word": "Tactful",
    "pos": "adjective",
    "simpleDefinition": "Having or showing skill and sensitivity in dealing with others",
    "banglaMeaning": "কৌশলী / বিচক্ষণ",
    "synonyms": [
      "Diplomatic",
      "Prudent",
      "Discreet"
    ],
    "antonyms": [
      "Tactless",
      "Blunt",
      "Insensitive"
    ],
    "example": "A tactful leader knows how to handle criticism."
  },
  "tantamount": {
    "word": "Tantamount",
    "pos": "adjective",
    "simpleDefinition": "Equivalent in seriousness, effect, or value to something.",
    "banglaMeaning": "সমপরিমাণ",
    "synonyms": [
      "Equivalent to",
      "Equal to",
      "As good as",
      "Identical to"
    ],
    "antonyms": [
      "Different from",
      "Opposite"
    ],
    "example": "Refusing to testify was considered tantamount to an admission of guilt."
  },
  "taunting": {
    "word": "Taunting",
    "pos": "verb",
    "simpleDefinition": "Provoking or challenging someone with insulting or contemptuous remarks.",
    "banglaMeaning": "বিদ্রুপ",
    "synonyms": [
      "Teasing",
      "Mocker",
      "Jeering",
      "Goading"
    ],
    "antonyms": [
      "Complimenting",
      "Praising",
      "Encouraging"
    ],
    "example": "The bully was caught taunting younger students on the playground."
  },
  "telepathy": {
    "word": "Telepathy",
    "pos": "noun",
    "simpleDefinition": "The supposed communication of thoughts or ideas by means other than the known senses.",
    "banglaMeaning": "অন্যের চিন্তার অনুভূতি দ্রুত বুঝে নেয়ার ক্ষমতা",
    "synonyms": [
      "Mind-reading",
      "Thought transference",
      "ESP"
    ],
    "antonyms": [
      "Sensory communication"
    ],
    "example": "Science fiction novels often portray alien species communicating through silent telepathy."
  },
  "teller": {
    "word": "Teller",
    "pos": "noun",
    "simpleDefinition": "A bank employee whose job is to pay out and take in money at the counter.",
    "banglaMeaning": "ব্যাংকের ক্যাশিয়ার",
    "synonyms": [
      "Bank clerk",
      "Cashier",
      "Bank teller"
    ],
    "antonyms": [
      "Customer"
    ],
    "example": "The bank teller counted the cash carefully before handing over the receipt."
  },
  "temperate": {
    "word": "Temperate",
    "pos": "adjective",
    "simpleDefinition": "Showing moderation or self-restraint; mild in climate",
    "banglaMeaning": "পরিমিত / সংযমী / নাতিশীতোষ্ণ",
    "synonyms": [
      "Moderate",
      "Restrained",
      "Mild"
    ],
    "antonyms": [
      "Extreme",
      "Excessive",
      "Immoderate"
    ],
    "example": "He led a temperate life free from excess."
  },
  "tenacious": {
    "word": "Tenacious",
    "pos": "adjective",
    "simpleDefinition": "Holding fast; persistent and determined",
    "banglaMeaning": "নাছোড়বান্দা / দৃঢ়প্রতিজ্ঞ",
    "synonyms": [
      "Persistent",
      "Determined",
      "Resolute"
    ],
    "antonyms": [
      "Weak",
      "Irresolute",
      "Yielding"
    ],
    "example": "The tenacious athlete trained for years to win the gold medal."
  },
  "tenacity": {
    "word": "Tenacity",
    "pos": "noun",
    "simpleDefinition": "The quality or fact of being determined, persistent, and holding firmly to a goal.",
    "banglaMeaning": "কোন কিছুর প্রতি আগ্রহ / জিদ",
    "synonyms": [
      "Persistence",
      "Determination",
      "Perseverance",
      "Doggedness"
    ],
    "antonyms": [
      "Hesitation",
      "Weakness",
      "Irresolution"
    ],
    "example": "Her tenacity helped her overcome severe illness and graduate with highest honors."
  },
  "tenant": {
    "word": "Tenant",
    "pos": "noun",
    "simpleDefinition": "A person who occupies land or property rented from a landlord.",
    "banglaMeaning": "ভাড়াটিয়া",
    "synonyms": [
      "Renter",
      "Occupant",
      "Resident",
      "Leaseholder"
    ],
    "antonyms": [
      "Landlord",
      "Owner"
    ],
    "example": "The tenant paid his monthly rent on the first day of every month."
  },
  "tender": {
    "word": "Tender",
    "pos": "adjective",
    "simpleDefinition": "Showing gentleness, kindness, and affection, or easy to cut and chew.",
    "banglaMeaning": "কোমল / পেশা / প্রস্তাব",
    "synonyms": [
      "Gentle",
      "Caring",
      "Soft",
      "Affectionate"
    ],
    "antonyms": [
      "Tough",
      "Harsh",
      "Callous"
    ],
    "example": "The nurse dressed the child's wound with tender care and soothing words."
  },
  "tentative": {
    "word": "Tentative",
    "pos": "adjective",
    "simpleDefinition": "Not certain or fixed; provisional, or done with hesitation.",
    "banglaMeaning": "অনিশ্চিত / দোদুল্যমান",
    "synonyms": [
      "Provisional",
      "Unconfirmed",
      "Hesitant",
      "Cautious"
    ],
    "antonyms": [
      "Definite",
      "Certain",
      "Confident"
    ],
    "example": "We made a tentative agreement to meet for coffee next Thursday afternoon."
  },
  "tenterhooks": {
    "word": "Tenterhooks",
    "pos": "idiom",
    "simpleDefinition": "In a state of painful suspense, acute tension, or anxiety.",
    "banglaMeaning": "উদ্বেগপূর্ণ অনিশ্চিত অবস্থা",
    "synonyms": [
      "On pins and needles",
      "In suspense",
      "Anxious",
      "Edgy"
    ],
    "antonyms": [
      "Calm",
      "Relaxed",
      "At ease"
    ],
    "example": "The candidate was on tenterhooks all evening waiting for election results."
  },
  "tenure": {
    "word": "Tenure",
    "pos": "noun",
    "simpleDefinition": "The conditions under which land or buildings are held, or permanent employment status.",
    "banglaMeaning": "কার্যকাল",
    "synonyms": [
      "Term",
      "Occupancy",
      "Incumbency",
      "Permanent status"
    ],
    "antonyms": [
      "Temporary status",
      "Probation"
    ],
    "example": "After seven years of successful research, the university granted him academic tenure."
  },
  "tepid": {
    "word": "Tepid",
    "pos": "adjective",
    "simpleDefinition": "Only slightly warm; lukewarm, or showing little enthusiasm.",
    "banglaMeaning": "অল্প গরম বা কুসুম কুসুম গরম",
    "synonyms": [
      "Lukewarm",
      "Warmish",
      "Halfhearted",
      "Unenthusiastic"
    ],
    "antonyms": [
      "Hot",
      "Boiling",
      "Enthusiastic"
    ],
    "example": "The new comedy film received only tepid applause from the opening night audience."
  },
  "thankless": {
    "word": "Thankless",
    "pos": "adjective",
    "simpleDefinition": "Difficult or unpleasant and unlikely to result in thanks or reward.",
    "banglaMeaning": "অকৃতন্ত্র",
    "synonyms": [
      "Unappreciated",
      "Ungrateful",
      "Unrewarding"
    ],
    "antonyms": [
      "Rewarding",
      "Appreciated"
    ],
    "example": "Cleaning up after the messy outdoor festival was a difficult and thankless job."
  },
  "theist": {
    "word": "Theist",
    "pos": "noun",
    "simpleDefinition": "A person who believes in the existence of a God or gods.",
    "banglaMeaning": "আস্তিক",
    "synonyms": [
      "Believer",
      "Religious person"
    ],
    "antonyms": [
      "Atheist",
      "Agnostic"
    ],
    "example": "As a devoted theist, he found meaning and comfort in daily prayer."
  },
  "theologist": {
    "word": "Theologist",
    "pos": "noun",
    "simpleDefinition": "A person who studies religion, religious beliefs, and the divine.",
    "banglaMeaning": "ধর্মতত্ত্ববিদ",
    "synonyms": [
      "Theologian",
      "Religious scholar",
      "Divine"
    ],
    "antonyms": [
      "Secularist"
    ],
    "example": "The theologist gave a fascinating lecture comparing ancient scriptures."
  },
  "thorough": {
    "word": "Thorough",
    "pos": "adjective",
    "simpleDefinition": "Complete with regard to every detail; meticulously rigorous.",
    "banglaMeaning": "পুঙ্খানুপুঙ্খ",
    "synonyms": [
      "Meticulous",
      "Comprehensive",
      "Detailed",
      "Exhaustive"
    ],
    "antonyms": [
      "Superficial",
      "Cursory",
      "Incomplete"
    ],
    "example": "The mechanics performed a thorough inspection of the aircraft before takeoff."
  },
  "thread": {
    "word": "Thread",
    "pos": "noun",
    "simpleDefinition": "A long, thin strand of cotton, nylon, or other fibers used in sewing.",
    "banglaMeaning": "সুতা",
    "synonyms": [
      "Yarn",
      "Fiber",
      "Strand",
      "Filament"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "She carefully guided the black thread through the eye of the sewing needle."
  },
  "thrifty": {
    "word": "Thrifty",
    "pos": "adjective",
    "simpleDefinition": "Using money and other resources carefully and not wastefully; economical.",
    "banglaMeaning": "মিতব্যয়ী / কিপটে",
    "synonyms": [
      "Frugal",
      "Economical",
      "Prudent",
      "Sparingly"
    ],
    "antonyms": [
      "Wasteful",
      "Extravagant",
      "Prodigal"
    ],
    "example": "Her thrifty shopping habits enabled the family to save money for a home."
  },
  "timid": {
    "word": "Timid",
    "pos": "adjective",
    "simpleDefinition": "Showing a lack of courage or confidence; easily frightened",
    "banglaMeaning": "ভীরু / লাজুক",
    "synonyms": [
      "Shy",
      "Fearful",
      "Cowardly"
    ],
    "antonyms": [
      "Brave",
      "Bold",
      "Courageous"
    ],
    "example": "The timid child was afraid to speak in public."
  },
  "tiny in size": {
    "word": "Tiny in size",
    "pos": "idiom",
    "simpleDefinition": "Extremely small in physical dimensions or magnitude.",
    "banglaMeaning": "খুব ছোট",
    "synonyms": [
      "Miniature",
      "Minuscule",
      "Diminutive",
      "Microscopic"
    ],
    "antonyms": [
      "Enormous",
      "Gigantic",
      "Huge"
    ],
    "example": "The electronic microchip was tiny in size but packed immense computing power."
  },
  "tipped": {
    "word": "Tipped",
    "pos": "verb",
    "simpleDefinition": "Gave a sum of money to someone for service, or overturned or tilted.",
    "banglaMeaning": "একপাশ বা প্রান্তে উঠানো",
    "synonyms": [
      "Rewarded",
      "Compensated",
      "Tilted",
      "Overturned"
    ],
    "antonyms": [
      "Underpaid",
      "Straightened"
    ],
    "example": "He tipped the polite restaurant waiter generously for exceptional service."
  },
  "tirade": {
    "word": "Tirade",
    "pos": "noun",
    "simpleDefinition": "A long, angry speech of criticism, reprimand, or accusation.",
    "banglaMeaning": "তিরস্কারপূর্ণ দীর্ঘ বক্তৃতা",
    "synonyms": [
      "Diatribe",
      "Rant",
      "Harangue",
      "Outburst"
    ],
    "antonyms": [
      "Praise",
      "Compliment",
      "Eulogy"
    ],
    "example": "The coach launched into an angry tirade after the team made sloppy defensive errors."
  },
  "titanic": {
    "word": "Titanic",
    "pos": "adjective",
    "simpleDefinition": "Of exceptional strength, size, power, or influence; colossal.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "Colossal",
      "Gigantic",
      "Mammoth",
      "Immense"
    ],
    "antonyms": [
      "Tiny",
      "Minuscule",
      "Insignificant"
    ],
    "example": "The two rival football clubs fought a titanic struggle for the championship cup."
  },
  "to blow hot and cold": {
    "word": "To blow hot and cold",
    "pos": "idiom",
    "simpleDefinition": "To alternate between enthusiasm and indifference; be vacillating.",
    "banglaMeaning": "অসামঞ্জস্যপূর্ণ হওয়া",
    "synonyms": [
      "Vacillate",
      "Waver",
      "Hedge",
      "Hesitate"
    ],
    "antonyms": [
      "Be consistent",
      "Remain steadfast"
    ],
    "example": "The client keeps blowing hot and cold on whether to sign the software contract."
  },
  "to do away with": {
    "word": "To do away with",
    "pos": "idiom",
    "simpleDefinition": "To abolish, discard, eliminate, or stop using something.",
    "banglaMeaning": "পরিহার করা",
    "synonyms": [
      "Abolish",
      "Eliminate",
      "Discard",
      "Scrap"
    ],
    "antonyms": [
      "Establish",
      "Retain",
      "Keep"
    ],
    "example": "The city voted to do away with outdated paper parking tickets."
  },
  "to drive off": {
    "word": "To drive off",
    "pos": "idiom",
    "simpleDefinition": "To force someone or something to leave or retreat, or depart in a car.",
    "banglaMeaning": "পরিহার করা",
    "synonyms": [
      "Repel",
      "Repulse",
      "Chase away",
      "Fend off"
    ],
    "antonyms": [
      "Attract",
      "Welcome"
    ],
    "example": "The brave guard dog barked loudly to drive off the wild coyotes."
  },
  "tomb": {
    "word": "Tomb",
    "pos": "noun",
    "simpleDefinition": "A large vault or chamber, typically underground, for burying the dead.",
    "banglaMeaning": "কবর",
    "synonyms": [
      "Grave",
      "Vault",
      "Mausoleum",
      "Crypt"
    ],
    "antonyms": [
      "Cradle"
    ],
    "example": "Archaeologists carefully uncovered the ancient pharaoh's gilded tomb in Egypt."
  },
  "toot your own horn": {
    "word": "Toot your own horn",
    "pos": "idiom",
    "simpleDefinition": "To talk boastfully about one's own achievements or skills.",
    "banglaMeaning": "নিজের ঢাক নিজে পেটানো বা নিজের সাফল্য নিয়ে গর্ব বা বড়াই করা",
    "synonyms": [
      "Boast",
      "Brag",
      "Blow your own trumpet"
    ],
    "antonyms": [
      "Be modest",
      "Understate"
    ],
    "example": "I hate to toot my own horn, but I was the one who solved that complex problem."
  },
  "toppling": {
    "word": "Toppling",
    "pos": "verb",
    "simpleDefinition": "Overbalancing or causing something to fall over; overthrowing.",
    "banglaMeaning": "ডিগবাজি খাইয়ে পড়া",
    "synonyms": [
      "Falling",
      "Tumbling",
      "Overturning",
      "Overthrowing"
    ],
    "antonyms": [
      "Stabilizing",
      "Erecting"
    ],
    "example": "Strong coastal winds were responsible for toppling the old oak tree."
  },
  "torment": {
    "word": "Torment",
    "pos": "noun",
    "simpleDefinition": "Severe physical or mental suffering; anguish",
    "banglaMeaning": "চরম যন্ত্রণা / মানসিক পীড়ন",
    "synonyms": [
      "ও Torture",
      "Agonize",
      "Afflict"
    ],
    "antonyms": [
      "Comfort",
      "Soothe",
      "Relieve"
    ],
    "example": "She was tormented by guilt over her decision."
  },
  "torpor": {
    "word": "Torpor",
    "pos": "noun",
    "simpleDefinition": "A state of physical or mental inactivity, lethargy, or sluggishness.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "Lethargy",
      "Sluggishness",
      "Inertia",
      "Apathy"
    ],
    "antonyms": [
      "Vigor",
      "Energy",
      "Vitality"
    ],
    "example": "The oppressive tropical heat plunged the entire village into an afternoon torpor."
  },
  "tough": {
    "word": "Tough",
    "pos": "adjective",
    "simpleDefinition": "Strong enough to withstand adverse conditions or rough handling; difficult.",
    "banglaMeaning": "শক্ত",
    "synonyms": [
      "Durable",
      "Strong",
      "Difficult",
      "Resilient"
    ],
    "antonyms": [
      "Fragile",
      "Delicate",
      "Easy"
    ],
    "example": "Hiking through the dense snowy mountains was a tough physical test."
  },
  "towered high": {
    "word": "Towered high",
    "pos": "idiom",
    "simpleDefinition": "Rose or stood to an impressive, extraordinary height.",
    "banglaMeaning": "মাথা উঁচু করে দাড়ানো",
    "synonyms": [
      "Soared",
      "Loomed",
      "Rose majestically"
    ],
    "antonyms": [
      "Sank low",
      "Crouched"
    ],
    "example": "The snow-capped peaks of the Himalayas towered high above the clouds."
  },
  "tract": {
    "word": "Tract",
    "pos": "noun",
    "simpleDefinition": "An area of land, or a major passage in the body, or a short written pamphlet.",
    "banglaMeaning": "ধর্ম বা নৈতিকতা বিষয়ে পুস্তিকা",
    "synonyms": [
      "Area",
      "Expanse",
      "Plot",
      "Pamphlet"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The nature reserve covers a vast tract of pristine pine forest."
  },
  "traduce": {
    "word": "Traduce",
    "pos": "verb",
    "simpleDefinition": "To speak badly of or tell lies about someone so as to damage their reputation.",
    "banglaMeaning": "নিন্দা করা / অপবাদ দেয়া",
    "synonyms": [
      "Defame",
      "Slander",
      "Malign",
      "Vilify"
    ],
    "antonyms": [
      "Praise",
      "Compliment",
      "Laud"
    ],
    "example": "The rival candidate attempted to traduce her good character through slanderous ads."
  },
  "traitor": {
    "word": "Traitor",
    "pos": "noun",
    "simpleDefinition": "A person who betrays a friend, country, or principle.",
    "banglaMeaning": "বিশ্বাসঘাতক",
    "synonyms": [
      "Betrayer",
      "Turncoat",
      "Defector",
      "Judas"
    ],
    "antonyms": [
      "Loyalist",
      "Patriot"
    ],
    "example": "The military spy was court-martialed and condemned as a traitor to his nation."
  },
  "tranquil": {
    "word": "Tranquil",
    "pos": "adjective",
    "simpleDefinition": "Free from disturbance; calm, peaceful, and serene",
    "banglaMeaning": "প্রশান্ত / শান্ত",
    "synonyms": [
      "Peaceful",
      "Calm",
      "Serene"
    ],
    "antonyms": [
      "Agitated",
      "Noisy",
      "Troubled"
    ],
    "example": "The village was a tranquil place away from city noise."
  },
  "transient": {
    "word": "Transient",
    "pos": "adjective",
    "simpleDefinition": "Lasting only for a short time; impermanent and fleeting.",
    "banglaMeaning": "অস্থায়ী",
    "synonyms": [
      "Fleeting",
      "Temporary",
      "Short-lived",
      "Ephemeral"
    ],
    "antonyms": [
      "Permanent",
      "Enduring",
      "Lasting"
    ],
    "example": "Youth and spring blossoms are beautiful but transient stages of life."
  },
  "transmission": {
    "word": "Transmission",
    "pos": "noun",
    "simpleDefinition": "The action of broadcasting or sending something, or the passing on of disease.",
    "banglaMeaning": "ছড়ানো / প্রচার",
    "synonyms": [
      "Broadcasting",
      "Transfer",
      "Spread",
      "Conveyance"
    ],
    "antonyms": [
      "Reception",
      "Containment"
    ],
    "example": "Wearing masks helped prevent the airborne transmission of the seasonal flu."
  },
  "transmit": {
    "word": "Transmit",
    "pos": "verb",
    "simpleDefinition": "To cause something to pass on from one place or person to another.",
    "banglaMeaning": "প্রেরণ বা হস্তান্তর করা",
    "synonyms": [
      "Convey",
      "Transfer",
      "Send",
      "Broadcast"
    ],
    "antonyms": [
      "Receive",
      "Block",
      "Hold"
    ],
    "example": "Radio antennas transmit communication signals across thousands of miles."
  },
  "trapped": {
    "word": "Trapped",
    "pos": "adjective",
    "simpleDefinition": "Caught in a trap or difficult situation from which escape is hard.",
    "banglaMeaning": "আটকা পরা",
    "synonyms": [
      "Ensnared",
      "Cornered",
      "Confined",
      "Imprisoned"
    ],
    "antonyms": [
      "Free",
      "Liberated",
      "Unconfined"
    ],
    "example": "Firefighters used heavy ladders to rescue the families trapped on the third floor."
  },
  "treacherous": {
    "word": "Treacherous",
    "pos": "adjective",
    "simpleDefinition": "Guilty of betrayal or deception; presenting hidden dangers",
    "banglaMeaning": "বিশ্বাসঘাতক / বিপজ্জনক",
    "synonyms": [
      "Disloyal",
      "Deceptive",
      "Dangerous"
    ],
    "antonyms": [
      "Loyal",
      "Trustworthy",
      "Reliable"
    ],
    "example": "He was betrayed by a treacherous friend."
  },
  "treatise": {
    "word": "Treatise",
    "pos": "noun",
    "simpleDefinition": "A written work dealing formally and systematically with a subject.",
    "banglaMeaning": "গবেষণামূলক আলোচনা গ্রন্থ",
    "synonyms": [
      "Dissertation",
      "Essay",
      "Thesis",
      "Monograph"
    ],
    "antonyms": [
      "Casual note"
    ],
    "example": "The philosopher published a celebrated treatise on human ethics and political liberty."
  },
  "trespass": {
    "word": "Trespass",
    "pos": "verb",
    "simpleDefinition": "To enter someone's land or property without permission.",
    "banglaMeaning": "পাপ / সীমালঙ্ঘন",
    "synonyms": [
      "Encroach",
      "Intrude",
      "Infringe",
      "Invade"
    ],
    "antonyms": [
      "Stay clear",
      "Respect property"
    ],
    "example": "Signs were posted along the boundary warning hikers not to trespass on private grounds."
  },
  "trial": {
    "word": "Trial",
    "pos": "noun",
    "simpleDefinition": "A formal examination of evidence in court, or a test of performance or hardship.",
    "banglaMeaning": "চেষ্টা",
    "synonyms": [
      "Court case",
      "Hearing",
      "Test",
      "Ordeal"
    ],
    "antonyms": [
      "Acquittal"
    ],
    "example": "The high-profile murder trial lasted four weeks before the jury reached a verdict."
  },
  "trick": {
    "word": "Trick",
    "pos": "noun",
    "simpleDefinition": "A cunning or skillful act or scheme intended to deceive or entertain.",
    "banglaMeaning": "প্রতারণা",
    "synonyms": [
      "Prank",
      "Illusion",
      "Ruse",
      "Deception"
    ],
    "antonyms": [
      "Honest action"
    ],
    "example": "The clever magician performed an astonishing card trick right in front of our eyes."
  },
  "trickery": {
    "word": "Trickery",
    "pos": "noun",
    "simpleDefinition": "The practice of deception, fraud, or cunning tricks.",
    "banglaMeaning": "প্রতারণা",
    "synonyms": [
      "Deception",
      "Fraud",
      "Guile",
      "Subterfuge"
    ],
    "antonyms": [
      "Honesty",
      "Candor",
      "Fairness"
    ],
    "example": "The fraudster used clever trickery to persuade the victim to hand over her savings."
  },
  "triumph": {
    "word": "Triumph",
    "pos": "noun",
    "simpleDefinition": "A great victory, achievement, or success.",
    "banglaMeaning": "বিজয়",
    "synonyms": [
      "Victory",
      "Success",
      "Achievement",
      "Conquest"
    ],
    "antonyms": [
      "Defeat",
      "Failure",
      "Loss"
    ],
    "example": "Winning the championship tournament was the crowning triumph of her tennis career."
  },
  "trivial": {
    "word": "Trivial",
    "pos": "adjective",
    "simpleDefinition": "Of little value, consequence, or importance; petty",
    "banglaMeaning": "তুচ্ছ / নগণ্য / নগণ্য / তুজ্ঞ",
    "synonyms": [
      "Unimportant",
      "Minor",
      "Petty"
    ],
    "antonyms": [
      "Important",
      "Significant",
      "Major"
    ],
    "example": "Don't waste time arguing over trivial matters."
  },
  "troops": {
    "word": "Troops",
    "pos": "noun",
    "simpleDefinition": "Soldiers or armed forces grouped for military service.",
    "banglaMeaning": "দল বা পাল",
    "synonyms": [
      "Soldiers",
      "Armed forces",
      "Forces",
      "Army"
    ],
    "antonyms": [
      "Civilians"
    ],
    "example": "Peacekeeping troops were deployed to maintain calm in the border region."
  },
  "truant": {
    "word": "Truant",
    "pos": "noun",
    "simpleDefinition": "A student who stays away from school without leave or explanation.",
    "banglaMeaning": "যে ব্যক্তি তার র্কমস্থল হতে পালায়",
    "synonyms": [
      "Absentee",
      "Runaway",
      "Shirker"
    ],
    "antonyms": [
      "Regular attendee"
    ],
    "example": "The truant officer returned the wandering boys to school before noon."
  },
  "trustworthy": {
    "word": "Trustworthy",
    "pos": "adjective",
    "simpleDefinition": "Able to be relied on as honest, dependable, or truthful.",
    "banglaMeaning": "বিশ্বস্ত",
    "synonyms": [
      "Reliable",
      "Dependable",
      "Honest",
      "Faithful"
    ],
    "antonyms": [
      "Untrustworthy",
      "Treacherous",
      "Dishonest"
    ],
    "example": "He has proven himself to be a completely trustworthy and diligent business partner."
  },
  "turbid": {
    "word": "Turbid",
    "pos": "adjective",
    "simpleDefinition": "Cloudy, opaque, or thick with suspended matter (of a liquid); or confused.",
    "banglaMeaning": "ঘোলাটে",
    "synonyms": [
      "Muddy",
      "Cloudy",
      "Murky",
      "Opaque"
    ],
    "antonyms": [
      "Clear",
      "Lucid",
      "Transparent"
    ],
    "example": "Heavy torrential rains turned the mountain river turbid and brown."
  },
  "ubiquitous": {
    "word": "Ubiquitous",
    "pos": "adjective",
    "simpleDefinition": "Present, appearing, or found everywhere at the same time.",
    "banglaMeaning": "সর্বব্যাপী / সর্বত্র বিদ্যমান",
    "synonyms": [
      "Omnipresent",
      "Pervasive",
      "Widespread",
      "Universal"
    ],
    "antonyms": [
      "Rare",
      "Scarce",
      "Seldom"
    ],
    "example": "Smartphones have become ubiquitous in modern daily life."
  },
  "ulterior": {
    "word": "Ulterior",
    "pos": "adjective",
    "simpleDefinition": "Existing beyond what is obvious or admitted; intentionally concealed.",
    "banglaMeaning": "গোপন বা অপ্রকাশিত",
    "synonyms": [
      "Hidden",
      "Concealed",
      "Undisclosed",
      "Secret"
    ],
    "antonyms": [
      "Overt",
      "Open",
      "Frank"
    ],
    "example": "She suspected that his unexpected generosity masked an ulterior selfish motive."
  },
  "uncover": {
    "word": "Uncover",
    "pos": "verb",
    "simpleDefinition": "To remove a cover or covering, or discover previously hidden facts.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "Expose",
      "Reveal",
      "Discover",
      "Disclose"
    ],
    "antonyms": [
      "Cover",
      "Conceal",
      "Hide"
    ],
    "example": "Investigative reporters worked for months to uncover the truth behind the financial fraud."
  },
  "understatement": {
    "word": "Understatement",
    "pos": "noun",
    "simpleDefinition": "The presentation of something as being smaller, worse, or less important than it actually is.",
    "banglaMeaning": "কমিয়ে বলা",
    "synonyms": [
      "Minimization",
      "Trivialization",
      "Softening"
    ],
    "antonyms": [
      "Exaggeration",
      "Hyperbole",
      "Overstatement"
    ],
    "example": "Calling a category-five hurricane 'a bit of windy weather' is a massive understatement."
  },
  "undertake": {
    "word": "Undertake",
    "pos": "verb",
    "simpleDefinition": "To commit oneself to and begin an enterprise or responsibility.",
    "banglaMeaning": "দায়িত্ব গ্রহণ করা",
    "synonyms": [
      "Take over",
      "Assume responsibility",
      "Embark on",
      "Begin"
    ],
    "antonyms": [
      "Abandon",
      "Relinquish",
      "Forgo"
    ],
    "example": "She agreed to undertake full responsibility for leading the new research project."
  },
  "unearth": {
    "word": "Unearth",
    "pos": "verb",
    "simpleDefinition": "To dig up something from the ground, or discover information after searching.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "Dig up",
      "Excavate",
      "Discover",
      "Uncover"
    ],
    "antonyms": [
      "Bury",
      "Conceal",
      "Hide"
    ],
    "example": "Archaeologists managed to unearth golden artifacts buried for thousands of years."
  },
  "unequivocal": {
    "word": "Unequivocal",
    "pos": "adjective",
    "simpleDefinition": "Leaving no doubt; completely clear, explicit, and unambiguous.",
    "banglaMeaning": "সুস্পষ্ট",
    "synonyms": [
      "Unambiguous",
      "Clear",
      "Definite",
      "Unmistakable"
    ],
    "antonyms": [
      "Equivocal",
      "Ambiguous",
      "Vague"
    ],
    "example": "The board gave its unequivocal support to the director's strategic vision."
  },
  "unfathomable": {
    "word": "Unfathomable",
    "pos": "adjective",
    "simpleDefinition": "Incapable of being fully explored, understood, or measured.",
    "banglaMeaning": "অতল / গভীর",
    "synonyms": [
      "Incomprehensible",
      "Baffling",
      "Immeasurable",
      "Mysterious"
    ],
    "antonyms": [
      "Fathomable",
      "Comprehensible",
      "Clear"
    ],
    "example": "The motives behind the criminal's bizarre actions remained completely unfathomable."
  },
  "unforeseen": {
    "word": "Unforeseen",
    "pos": "adjective",
    "simpleDefinition": "Not anticipated or predicted; unexpected.",
    "banglaMeaning": "অপ্রত্যাশিত",
    "synonyms": [
      "Unexpected",
      "Unanticipated",
      "Unpredicted",
      "Accidental"
    ],
    "antonyms": [
      "Expected",
      "Foreseen",
      "Anticipated"
    ],
    "example": "Due to unforeseen weather delays, the afternoon flight was postponed until morning."
  },
  "uniform": {
    "word": "Uniform",
    "pos": "adjective",
    "simpleDefinition": "Remaining the same in all cases and at all times; consistent and unchanging.",
    "banglaMeaning": "সমজাতীয়",
    "synonyms": [
      "Consistent",
      "Even",
      "Regular",
      "Unvarying"
    ],
    "antonyms": [
      "Varied",
      "Irregular",
      "Inconsistent"
    ],
    "example": "The factory machines produced metal rods of strictly uniform thickness."
  },
  "unimaginable": {
    "word": "Unimaginable",
    "pos": "adjective",
    "simpleDefinition": "Difficult or impossible to imagine or comprehend; beyond belief.",
    "banglaMeaning": "অকল্পনীয়",
    "synonyms": [
      "Inconceivable",
      "Unthinkable",
      "Incredible",
      "Mind-boggling"
    ],
    "antonyms": [
      "Imaginable",
      "Conceivable",
      "Believable"
    ],
    "example": "The earthquake caused an almost unimaginable amount of structural damage to the city."
  },
  "uninfluenced": {
    "word": "Uninfluenced",
    "pos": "adjective",
    "simpleDefinition": "Not affected, altered, or swayed by external pressure or bias.",
    "banglaMeaning": "প্রভাবমুক্ত",
    "synonyms": [
      "Objective",
      "Impartial",
      "Neutral",
      "Unbiased"
    ],
    "antonyms": [
      "Influenced",
      "Biased",
      "Swayed"
    ],
    "example": "A judge must remain completely uninfluenced by media gossip or political pressure."
  },
  "unintended": {
    "word": "Unintended",
    "pos": "adjective",
    "simpleDefinition": "Not planned or meant to happen; accidental.",
    "banglaMeaning": "অনিজ্ঞাকৃত",
    "synonyms": [
      "Accidental",
      "Inadvertent",
      "Unintentional",
      "Unplanned"
    ],
    "antonyms": [
      "Intentional",
      "Deliberate",
      "Planned"
    ],
    "example": "The new zoning regulation had the unintended consequence of raising house rents."
  },
  "unruly": {
    "word": "Unruly",
    "pos": "adjective",
    "simpleDefinition": "Disorderly, disruptive, and not amenable to discipline or control.",
    "banglaMeaning": "অবাধ্য",
    "synonyms": [
      "Disorderly",
      "Rowdy",
      "Wild",
      "Unmanageable"
    ],
    "antonyms": [
      "Disciplined",
      "Orderly",
      "Obedient"
    ],
    "example": "The teacher struggled to quiet down the noisy and unruly classroom."
  },
  "unscrupulous": {
    "word": "Unscrupulous",
    "pos": "adjective",
    "simpleDefinition": "Having or showing no moral principles; completely dishonest",
    "banglaMeaning": "বিবেকহীন / নীতিহীন",
    "synonyms": [
      "Dishonest",
      "Immoral",
      "Unprincipled"
    ],
    "antonyms": [
      "Honest",
      "Moral",
      "Principled"
    ],
    "example": "Unscrupulous businessmen cheat their customers."
  },
  "unstable": {
    "word": "Unstable",
    "pos": "adjective",
    "simpleDefinition": "Prone to change, fail, or sway; not firmly established or balanced.",
    "banglaMeaning": "অস্থির",
    "synonyms": [
      "Precarious",
      "Insecure",
      "Volatile",
      "Wobbly"
    ],
    "antonyms": [
      "Stable",
      "Secure",
      "Steady"
    ],
    "example": "Do not climb onto that wobbly stool because it is dangerously unstable."
  },
  "untamed": {
    "word": "Untamed",
    "pos": "adjective",
    "simpleDefinition": "Not domesticated, trained, or controlled; wild and natural.",
    "banglaMeaning": "অশান্ত / বন্য",
    "synonyms": [
      "Wild",
      "Feral",
      "Savage",
      "Undomesticated"
    ],
    "antonyms": [
      "Tamed",
      "Domesticated",
      "Gentle"
    ],
    "example": "The vast national park preserves miles of raw, untamed wilderness."
  },
  "untenable": {
    "word": "Untenable",
    "pos": "adjective",
    "simpleDefinition": "Not able to be maintained or defended against attack or objection.",
    "banglaMeaning": "টিকিয়ে রাখা যায়না এমন",
    "synonyms": [
      "Indefensible",
      "Insupportable",
      "Unjustifiable",
      "Flawed"
    ],
    "antonyms": [
      "Tenable",
      "Defensible",
      "Sound"
    ],
    "example": "After new facts emerged, the politician's original argument became completely untenable."
  },
  "unwitting": {
    "word": "Unwitting",
    "pos": "adjective",
    "simpleDefinition": "Not done on purpose; unintentional, or not aware of the full facts.",
    "banglaMeaning": "অনিজ্ঞাকৃত",
    "synonyms": [
      "Inadvertent",
      "Unaware",
      "Unconscious",
      "Unintentional"
    ],
    "antonyms": [
      "Conscious",
      "Deliberate",
      "Knowing"
    ],
    "example": "He became the unwitting accomplice in a scam when he forwarded a spoofed link."
  },
  "upheld": {
    "word": "Upheld",
    "pos": "verb",
    "simpleDefinition": "Maintained, supported, or confirmed a decision, custom, or principle.",
    "banglaMeaning": "উপরের দিকে নেওয়া",
    "synonyms": [
      "Supported",
      "Confirmed",
      "Sustained",
      "Endorsed"
    ],
    "antonyms": [
      "Overturned",
      "Rejected",
      "Overruled"
    ],
    "example": "The supreme court upheld the lower court's ruling regarding environmental protection."
  },
  "urban": {
    "word": "Urban",
    "pos": "adjective",
    "simpleDefinition": "In, relating to, or characteristic of a town or city.",
    "banglaMeaning": "শহুরে",
    "synonyms": [
      "City",
      "Metropolitan",
      "Civic",
      "Town"
    ],
    "antonyms": [
      "Rural",
      "Pastoral",
      "Rustic"
    ],
    "example": "Many young professionals move to major urban centers in search of exciting career options."
  },
  "urgency": {
    "word": "Urgency",
    "pos": "noun",
    "simpleDefinition": "Importance requiring swift, immediate action or attention.",
    "banglaMeaning": "জরুরী",
    "synonyms": [
      "Promptness",
      "Importance",
      "Necessity",
      "Imperativeness"
    ],
    "antonyms": [
      "Laxity",
      "Delay"
    ],
    "example": "The doctor stressed the urgency of taking the medication right away."
  },
  "usurp": {
    "word": "Usurp",
    "pos": "verb",
    "simpleDefinition": "To take a position of power, throne, or authority illegally or by force.",
    "banglaMeaning": "জবরদখল",
    "synonyms": [
      "Seize",
      "Take over",
      "Arrogate",
      "Appropriate"
    ],
    "antonyms": [
      "Relinquish",
      "Surrender",
      "Abdicate"
    ],
    "example": "The ruthless general led a military coup to usurp the presidency from the civilian leader."
  },
  "utopia": {
    "word": "Utopia",
    "pos": "noun",
    "simpleDefinition": "An imagined community or society that possesses highly desirable or nearly perfect qualities.",
    "banglaMeaning": "কল্পরাজ্য",
    "synonyms": [
      "Paradise",
      "Idyll",
      "Ideal society",
      "Shangri-La"
    ],
    "antonyms": [
      "Dystopia"
    ],
    "example": "The novelist depicted a future utopia where poverty, disease, and war had been eradicated."
  },
  "vacillate": {
    "word": "Vacillate",
    "pos": "verb",
    "simpleDefinition": "To alternate or waver between different opinions or actions; be indecisive.",
    "banglaMeaning": "দ্বিধা করা",
    "synonyms": [
      "Waver",
      "Hesitate",
      "Fluctuate",
      "Oscillate"
    ],
    "antonyms": [
      "Decide",
      "Resolve",
      "Remain firm"
    ],
    "example": "He continued to vacillate between studying law or pursuing a career in computer science."
  },
  "vague": {
    "word": "Vague",
    "pos": "adjective",
    "simpleDefinition": "Thinking or communicating in an unfocused, imprecise, or indefinite way.",
    "banglaMeaning": "অস্পষ্ট",
    "synonyms": [
      "Unclear",
      "Indistinct",
      "Imprecise",
      "Ambiguous"
    ],
    "antonyms": [
      "Clear",
      "Precise",
      "Explicit"
    ],
    "example": "His vague directions caused us to take two wrong turns on the way to the cabin."
  },
  "valiant": {
    "word": "Valiant",
    "pos": "adjective",
    "simpleDefinition": "Possessing or showing great courage, bravery, or determination.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "Brave",
      "Courageous",
      "Valorous",
      "Heroic"
    ],
    "antonyms": [
      "Cowardly",
      "Timid",
      "Fearful"
    ],
    "example": "The valiant firefighters rushed into the burning building to rescue the trapped family."
  },
  "valley": {
    "word": "Valley",
    "pos": "noun",
    "simpleDefinition": "A low area of land between hills or mountains, typically with a river flowing through it.",
    "banglaMeaning": "উপত্যকা",
    "synonyms": [
      "Vale",
      "Dale",
      "Gorge",
      "Hollow"
    ],
    "antonyms": [
      "Mountain",
      "Peak",
      "Ridge"
    ],
    "example": "The lush green valley was dotted with charming farmhouses and grazing cattle."
  },
  "valorous": {
    "word": "Valorous",
    "pos": "adjective",
    "simpleDefinition": "Showing great courage in the face of danger, especially in battle.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "Brave",
      "Courageous",
      "Valiant",
      "Heroic"
    ],
    "antonyms": [
      "Cowardly",
      "Timid",
      "Pusillanimous"
    ],
    "example": "The knight received a royal medal for his valorous defense of the castle gates."
  },
  "vehement": {
    "word": "Vehement",
    "pos": "adjective",
    "simpleDefinition": "Showing strong feeling; forceful, passionate, or intense",
    "banglaMeaning": "প্রবল / তীব্র / প্রচণ্ড",
    "synonyms": [
      "Intense",
      "Forceful",
      "Passionate"
    ],
    "antonyms": [
      "Mild",
      "Gentle",
      "Calm"
    ],
    "example": "He gave a vehement speech against corruption."
  },
  "vehemently": {
    "word": "Vehemently",
    "pos": "adverb",
    "simpleDefinition": "In a forceful, passionate, or intense manner; with great feeling.",
    "banglaMeaning": "তীব্রভাবে; প্রচণ্ড আবেগের সাথে",
    "synonyms": [
      "Passionately",
      "Forcefully",
      "Fervently",
      "Vigorously"
    ],
    "antonyms": [
      "Mildly",
      "Gently",
      "Apathetically"
    ],
    "example": "The accused suspect vehemently denied having any involvement in the bank burglary."
  },
  "velocity": {
    "word": "Velocity",
    "pos": "noun",
    "simpleDefinition": "The speed of something in a given direction.",
    "banglaMeaning": "বেগ",
    "synonyms": [
      "Speed",
      "Pace",
      "Swiftness",
      "Rapidity"
    ],
    "antonyms": [
      "Slowness",
      "Inertia"
    ],
    "example": "The space rocket accelerated to orbital velocity within just a few minutes of launch."
  },
  "vendor": {
    "word": "Vendor",
    "pos": "noun",
    "simpleDefinition": "A person or company offering something for sale, especially in the street.",
    "banglaMeaning": "বিক্রেতা",
    "synonyms": [
      "Seller",
      "Merchant",
      "Dealer",
      "Trader"
    ],
    "antonyms": [
      "Buyer",
      "Customer"
    ],
    "example": "A street vendor was roasting sweet corn over charcoal on the busy sidewalk."
  },
  "venerate": {
    "word": "Venerate",
    "pos": "verb",
    "simpleDefinition": "To regard with great respect, admiration, or deep reverence.",
    "banglaMeaning": "সম্মান করা / শ্রদ্ধা করা",
    "synonyms": [
      "Revere",
      "Worship",
      "Honor",
      "Respect"
    ],
    "antonyms": [
      "Despise",
      "Disdain",
      "Scorn"
    ],
    "example": "Traditional cultures venerate elders for their lifelong wisdom and guidance."
  },
  "venture": {
    "word": "Venture",
    "pos": "noun",
    "simpleDefinition": "A risky or daring journey, or an undertaking involving financial uncertainty.",
    "banglaMeaning": "উদ্যোগ",
    "synonyms": [
      "Enterprise",
      "Undertaking",
      "Project",
      "Gamble"
    ],
    "antonyms": [
      "Certainty",
      "Safe bet"
    ],
    "example": "Investing in the new tech startup was a daring venture that ultimately paid off."
  },
  "venturesome": {
    "word": "Venturesome",
    "pos": "adjective",
    "simpleDefinition": "Willing to take risks or embark on difficult adventures; daring.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "Daring",
      "Adventurous",
      "Bold",
      "Audacious"
    ],
    "antonyms": [
      "Cautious",
      "Timid",
      "Careful"
    ],
    "example": "The venturesome explorer traveled deep into uncharted Amazon rainforests."
  },
  "verbose": {
    "word": "Verbose",
    "pos": "adjective",
    "simpleDefinition": "Using far more words than necessary",
    "banglaMeaning": "শব্দবহুল / বাগাড়ম্বরপূর্ণ / বাক্যসর্বস্ব",
    "synonyms": [
      "/ Wordy",
      "Long- winded",
      "Concise"
    ],
    "antonyms": [
      "Terse",
      "Brief"
    ],
    "example": "His verbose email could have been BCS Preliminary (43rd BCS, 2022)"
  },
  "versatility": {
    "word": "Versatility",
    "pos": "noun",
    "simpleDefinition": "Ability to adapt or be adapted to many different functions or activities.",
    "banglaMeaning": "বস্থমুখী",
    "synonyms": [
      "Adaptability",
      "Flexibility",
      "Resourcefulness",
      "Multi-skilled"
    ],
    "antonyms": [
      "Inflexibility",
      "Rigidity"
    ],
    "example": "Her versatility as an actress allowed her to play comedic and dramatic roles with equal skill."
  },
  "vicious": {
    "word": "Vicious",
    "pos": "adjective",
    "simpleDefinition": "Deliberately cruel, violent, or malicious; savage.",
    "banglaMeaning": "ঘৃণ্য",
    "synonyms": [
      "Cruel",
      "Malicious",
      "Savage",
      "Fierce"
    ],
    "antonyms": [
      "Gentle",
      "Kind",
      "Benevolent"
    ],
    "example": "The hikers backed away slowly when they encountered a vicious guard dog."
  },
  "vicissitudes": {
    "word": "Vicissitudes",
    "pos": "noun",
    "simpleDefinition": "The unexpected changes, difficulties, and ups and downs that happen in life.",
    "banglaMeaning": "উত্থান-পতন / জীবনের পরিবর্তন ও চড়াই-উতরাই",
    "synonyms": [
      "Ups and downs",
      "Fluctuations",
      "Changes",
      "Variations"
    ],
    "antonyms": [
      "Stability",
      "Constancy",
      "Uniformity"
    ],
    "example": "Despite the vicissitudes of life, she remained hopeful and resilient."
  },
  "vigilant": {
    "word": "Vigilant",
    "pos": "adjective",
    "simpleDefinition": "Keeping careful watch for possible danger or difficulties",
    "banglaMeaning": "জাগ্রত / সদা সতর্ক / সজাগ",
    "synonyms": [
      "Watchful",
      "Alert",
      "Careful"
    ],
    "antonyms": [
      "Careless",
      "Inattentive",
      "Negligent"
    ],
    "example": "Citizens must be vigilant against corruption."
  },
  "vigor": {
    "word": "Vigor",
    "pos": "noun",
    "simpleDefinition": "Physical strength, good health, and energetic effort.",
    "banglaMeaning": "শারীরিক বা মানসিক শক্তি",
    "synonyms": [
      "Energy",
      "Vitality",
      "Strength",
      "Dynamism"
    ],
    "antonyms": [
      "Lethargy",
      "Weakness",
      "Fragility"
    ],
    "example": "Despite his advanced age, the gardener worked with remarkable vigor and cheerfulness."
  },
  "vigorous": {
    "word": "Vigorous",
    "pos": "adjective",
    "simpleDefinition": "Strong, healthy, and full of energy, or characterized by force and effort.",
    "banglaMeaning": "সবল",
    "synonyms": [
      "Energetic",
      "Robust",
      "Dynamic",
      "Spirited"
    ],
    "antonyms": [
      "Frail",
      "Feeble",
      "Lethargic"
    ],
    "example": "Doctors recommend thirty minutes of vigorous physical exercise every day."
  },
  "vilify": {
    "word": "Vilify",
    "pos": "verb",
    "simpleDefinition": "To slander, defame, or speak ill of someone in a defamatory manner",
    "banglaMeaning": "কুৎসা রটনা করা / মানহানি করা / নিন্দা করা / অপবাদ দেয়া",
    "synonyms": [
      "ও   / Defame",
      "Slander",
      "Malign"
    ],
    "antonyms": [
      "Praise",
      "Commend",
      "Glorify"
    ],
    "example": "Political rivals often vilify each other in campaigns."
  },
  "vindicate": {
    "word": "Vindicate",
    "pos": "verb",
    "simpleDefinition": "To clear someone of blame, suspicion, or doubt with proof",
    "banglaMeaning": "অভিযোগমুক্ত করা / সঠিক প্রমাণ করা",
    "synonyms": [
      "/ Justify",
      "Exonerate",
      "Clear"
    ],
    "antonyms": [
      "Blame",
      "Convict",
      "Condemn"
    ],
    "example": "The new evidence vindicated the accused man fully."
  },
  "virulent": {
    "word": "Virulent",
    "pos": "adjective",
    "simpleDefinition": "Extremely poisonous, harmful, bitter, and destructive",
    "banglaMeaning": "বিষাক্ত / মারাত্মক ক্ষতিকর",
    "synonyms": [
      "Deadly",
      "Toxic",
      "Malignant"
    ],
    "antonyms": [
      "Harmless",
      "Mild",
      "Benign"
    ],
    "example": "The virulent virus spread rapidly across the country."
  },
  "visible": {
    "word": "Visible",
    "pos": "adjective",
    "simpleDefinition": "Able to be seen or noticed; apparent and obvious.",
    "banglaMeaning": "দৃশ্যমান",
    "synonyms": [
      "Perceptible",
      "Noticeable",
      "Apparent",
      "Clear"
    ],
    "antonyms": [
      "Invisible",
      "Hidden",
      "Unseen"
    ],
    "example": "The snowy mountaintops were clearly visible from our hotel balcony."
  },
  "visionary": {
    "word": "Visionary",
    "pos": "noun",
    "simpleDefinition": "A person with original ideas about what the future will or could be like.",
    "banglaMeaning": "কাল্পনিক",
    "synonyms": [
      "Pioneer",
      "Idealist",
      "Dreamer",
      "Innovator"
    ],
    "antonyms": [
      "Traditionalist",
      "Realist"
    ],
    "example": "The computer company was founded by a true visionary who foresaw mobile computing."
  },
  "vital": {
    "word": "Vital",
    "pos": "adjective",
    "simpleDefinition": "Absolutely necessary or essential for life, success, or functioning.",
    "banglaMeaning": "অত্যাবশ্যক / সজীব",
    "synonyms": [
      "Essential",
      "Crucial",
      "Critical",
      "Indispensable"
    ],
    "antonyms": [
      "Unimportant",
      "Trivial",
      "Secondary"
    ],
    "example": "Clean drinking water and fresh food are vital for human health."
  },
  "vocation": {
    "word": "Vocation",
    "pos": "noun",
    "simpleDefinition": "A strong feeling of suitability for a particular career, calling, or profession.",
    "banglaMeaning": "বৃত্তি / ব্যবসায়",
    "synonyms": [
      "Calling",
      "Profession",
      "Career",
      "Occupation"
    ],
    "antonyms": [
      "Avocation",
      "Hobby"
    ],
    "example": "She felt a genuine calling and vocation to become a dedicated teacher."
  },
  "vociferous": {
    "word": "Vociferous",
    "pos": "adjective",
    "simpleDefinition": "Expressing feelings or opinions loudly, passionately, and forcefully.",
    "banglaMeaning": "সোচ্চার / চিৎকারকারী",
    "synonyms": [
      "Clamorous",
      "Outspoken",
      "Vocal",
      "Vehement"
    ],
    "antonyms": [
      "Silent",
      "Quiet",
      "Subdued"
    ],
    "example": "There were vociferous protests outside city hall against the proposed budget cuts."
  },
  "void": {
    "word": "Void",
    "pos": "noun",
    "simpleDefinition": "A completely empty space, or a feeling of deep emptiness or loss.",
    "banglaMeaning": "বাতিল",
    "synonyms": [
      "Vacuum",
      "Emptiness",
      "Gap",
      "Chasm"
    ],
    "antonyms": [
      "Fullness",
      "Abundance"
    ],
    "example": "Her sudden retirement left an immense void in the research team."
  },
  "volatile": {
    "word": "Volatile",
    "pos": "adjective",
    "simpleDefinition": "Liable to change rapidly and unpredictably; explosive",
    "banglaMeaning": "উদ্বায়ী / দ্রুত পরিবর্তনশীল",
    "synonyms": [
      "Unstable",
      "Unpredictable",
      "Explosive"
    ],
    "antonyms": [
      "Stable",
      "Calm",
      "Predictable"
    ],
    "example": "The political situation in the region is very volatile."
  },
  "voluptuous": {
    "word": "Voluptuous",
    "pos": "adjective",
    "simpleDefinition": "Relating to or characterized by luxury, sensual pleasure, or curvy fullness.",
    "banglaMeaning": "আনন্দবাদী",
    "synonyms": [
      "Curvaceous",
      "Sensuous",
      "Luxurious"
    ],
    "antonyms": [
      "Ascetic",
      "Austere",
      "Plain"
    ],
    "example": "The banquet featured voluptuous feasts served on golden platters."
  },
  "vow": {
    "word": "Vow",
    "pos": "noun",
    "simpleDefinition": "A solemn promise, pledge, or commitment to do something.",
    "banglaMeaning": "শপথ করা",
    "synonyms": [
      "Pledge",
      "Promise",
      "Oath",
      "Commitment"
    ],
    "antonyms": [
      "Betrayal",
      "Breach"
    ],
    "example": "They exchanged marriage vows in front of family and close friends."
  },
  "voyage": {
    "word": "Voyage",
    "pos": "noun",
    "simpleDefinition": "A long journey involving travel by sea or in space.",
    "banglaMeaning": "সমুদ্র যাত্রা",
    "synonyms": [
      "Journey",
      "Expedition",
      "Cruise",
      "Trip"
    ],
    "antonyms": [
      "Stay",
      "Station"
    ],
    "example": "The ancient explorers embarked on a perilous voyage across the Atlantic."
  },
  "vulgarity": {
    "word": "Vulgarity",
    "pos": "noun",
    "simpleDefinition": "The quality of lacking taste, refinement, decency, or good manners.",
    "banglaMeaning": "অশ্লীলতা",
    "synonyms": [
      "Coarseness",
      "Crudeness",
      "Rudeness",
      "Tastelessness"
    ],
    "antonyms": [
      "Refinement",
      "Elegance",
      "Good taste"
    ],
    "example": "The play was criticized by conservative reviewers for excessive vulgarity in its jokes."
  },
  "vulnerable": {
    "word": "Vulnerable",
    "pos": "adjective",
    "simpleDefinition": "Easily hurt, attacked, or damaged physically or emotionally",
    "banglaMeaning": "অরক্ষিত / ঝুঁকিপূর্ণ",
    "synonyms": [
      "Exposed",
      "Susceptible",
      "Defenceless"
    ],
    "antonyms": [
      "Protected",
      "Secure",
      "Strong"
    ],
    "example": "Children are most vulnerable to the effects of poverty."
  },
  "wagon": {
    "word": "Wagon",
    "pos": "noun",
    "simpleDefinition": "A four-wheeled vehicle for carrying heavy loads, typically drawn by horses or a tractor.",
    "banglaMeaning": "মালবাহী গাড়ি",
    "synonyms": [
      "Cart",
      "Wain",
      "Carriage",
      "Trailer"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The farmer loaded bushels of freshly picked apples into the wooden wagon."
  },
  "waive": {
    "word": "Waive",
    "pos": "verb",
    "simpleDefinition": "To refrain from insisting on or using a legal right, claim, or fee.",
    "banglaMeaning": "মওকুফ করা",
    "synonyms": [
      "Relinquish",
      "Forgo",
      "Surrender",
      "Yield"
    ],
    "antonyms": [
      "Enforce",
      "Claim",
      "Demand"
    ],
    "example": "The university agreed to waive the application fee for low-income applicants."
  },
  "wallet": {
    "word": "Wallet",
    "pos": "noun",
    "simpleDefinition": "A pocket-sized flat folding case for holding money and credit cards.",
    "banglaMeaning": "মানি ব্যাগ",
    "synonyms": [
      "Billfold",
      "Purse",
      "Pouch"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "He reached into his jacket pocket and pulled out his leather wallet."
  },
  "wander": {
    "word": "Wander",
    "pos": "verb",
    "simpleDefinition": "To walk or move in a leisurely, casual, or aimless way.",
    "banglaMeaning": "উদ্দেশ্যহীনভাবে ভ্রমণ করা",
    "synonyms": [
      "Roam",
      "Stroll",
      "Meander",
      "Rambling"
    ],
    "antonyms": [
      "Stay put",
      "Hurry"
    ],
    "example": "They loved to wander through the quiet cobblestone alleys of the historic village."
  },
  "wane": {
    "word": "Wane",
    "pos": "verb",
    "simpleDefinition": "To decrease gradually in strength, size, intensity, or extent",
    "banglaMeaning": "হ্রাস পাওয়া / ক্ষয় হওয়া",
    "synonyms": [
      "Decline",
      "Diminish",
      "Fade"
    ],
    "antonyms": [
      "Increase",
      "Grow",
      "Strengthen"
    ],
    "example": "Public support for the government began to wane."
  },
  "warehouse": {
    "word": "Warehouse",
    "pos": "noun",
    "simpleDefinition": "A large building where raw materials or manufactured goods are stored before sale.",
    "banglaMeaning": "মালপত্র রাখার স্থান",
    "synonyms": [
      "Storehouse",
      "Depot",
      "Repository",
      "Stockroom"
    ],
    "antonyms": [
      "Shop",
      "Storefront"
    ],
    "example": "The distribution company stores pallets of electronics in a temperature-controlled warehouse."
  },
  "warlock": {
    "word": "Warlock",
    "pos": "noun",
    "simpleDefinition": "A man who practices witchcraft or black magic; a sorcerer.",
    "banglaMeaning": "মায়াবী",
    "synonyms": [
      "Sorcerer",
      "Wizard",
      "Mage",
      "Enchanter"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "In fantasy tales, the dark warlock cast a spell over the sleeping kingdom."
  },
  "wary": {
    "word": "Wary",
    "pos": "adjective",
    "simpleDefinition": "Cautious and watchful of potential danger",
    "banglaMeaning": "সতর্ক / সাবধানী",
    "synonyms": [
      "Cautious",
      "Vigilant",
      "Alert"
    ],
    "antonyms": [
      "Careless",
      "Reckless",
      "Inattentive"
    ],
    "example": "Be wary of strangers who offer free gifts."
  },
  "wayward": {
    "word": "Wayward",
    "pos": "adjective",
    "simpleDefinition": "Difficult to control or predict because of willful or perverse behavior.",
    "banglaMeaning": "স্বেচ্ছাচারী",
    "synonyms": [
      "Willful",
      "Headstrong",
      "Stubborn",
      "Unruly"
    ],
    "antonyms": [
      "Docile",
      "Obedient",
      "Manageable"
    ],
    "example": "The novel recounts the story of a wayward youth who reformed and found purpose."
  },
  "wear out": {
    "word": "Wear out",
    "pos": "idiom",
    "simpleDefinition": "To use something until it is no longer usable, or tire someone completely.",
    "banglaMeaning": "ব্যবহারের ধারা ক্ষয় হওয়া",
    "synonyms": [
      "Exhaust",
      "Fray",
      "Deplete",
      "Tire"
    ],
    "antonyms": [
      "Renew",
      "Refresh",
      "Energize"
    ],
    "example": "Daily running on concrete will quickly wear out the soles of your sneakers."
  },
  "whimsical": {
    "word": "Whimsical",
    "pos": "adjective",
    "simpleDefinition": "Fanciful, playful, erratic, and unpredictable",
    "banglaMeaning": "অদ্ভুত / খামখেয়ালী",
    "synonyms": [
      "Fanciful",
      "Capricious",
      "Playful"
    ],
    "antonyms": [
      "Serious",
      "Practical",
      "Logical"
    ],
    "example": "Her whimsical ideas always surprised her colleagues."
  },
  "wholesale": {
    "word": "Wholesale",
    "pos": "adjective",
    "simpleDefinition": "The selling of goods in large quantities to retailers for resale, or extensive.",
    "banglaMeaning": "পাইকারী",
    "synonyms": [
      "Bulk",
      "Mass",
      "Extensive",
      "Comprehensive"
    ],
    "antonyms": [
      "Retail",
      "Selective"
    ],
    "example": "The supermarket buys fresh dairy at wholesale prices directly from dairy farms."
  },
  "wicked": {
    "word": "Wicked",
    "pos": "adjective",
    "simpleDefinition": "Evil or morally wrong; deliberately intending to do harm.",
    "banglaMeaning": "দুশ্চরিত্র",
    "synonyms": [
      "Evil",
      "Sinful",
      "Vile",
      "Heinous"
    ],
    "antonyms": [
      "Good",
      "Virtuous",
      "Moral"
    ],
    "example": "In folklore, the wicked queen attempted to trick the innocent princess."
  },
  "windy": {
    "word": "Windy",
    "pos": "adjective",
    "simpleDefinition": "Marked by or exposed to strong winds and gusts of air.",
    "banglaMeaning": "ঝড়ো",
    "synonyms": [
      "Breezy",
      "Gusty",
      "Blowy",
      "Stormy"
    ],
    "antonyms": [
      "Calm",
      "Still",
      "Windless"
    ],
    "example": "A windy autumn day sent colorful leaves dancing across the lawn."
  },
  "withhold": {
    "word": "Withhold",
    "pos": "verb",
    "simpleDefinition": "To refuse to give something that is due to or desired by another.",
    "banglaMeaning": "আটকে রাখা / গোপন রাখা",
    "synonyms": [
      "Keep back",
      "Retain",
      "Hold back",
      "Suppress"
    ],
    "antonyms": [
      "Give",
      "Disclose",
      "Grant"
    ],
    "example": "It is a crime to withhold critical evidence from investigators during a trial."
  },
  "worsen": {
    "word": "Worsen",
    "pos": "verb",
    "simpleDefinition": "To make or become worse in quality, condition, or severity.",
    "banglaMeaning": "শোচনীয় হওয়া",
    "synonyms": [
      "Deteriorate",
      "Degrade",
      "Aggravate",
      "Decline"
    ],
    "antonyms": [
      "Improve",
      "Better",
      "Ameliorate"
    ],
    "example": "Air pollution tends to worsen during humid and windless winter evenings."
  },
  "worship": {
    "word": "Worship",
    "pos": "verb",
    "simpleDefinition": "To show reverence and adoration for a deity, or honor deeply.",
    "banglaMeaning": "পূজা",
    "synonyms": [
      "Revere",
      "Venerate",
      "Praise",
      "Adore"
    ],
    "antonyms": [
      "Despise",
      "Disdain",
      "Blaspheme"
    ],
    "example": "Devoted pilgrims travel across the country to worship at the ancient temple."
  },
  "worth yours": {
    "word": "Worth yours",
    "pos": "idiom",
    "simpleDefinition": "Worth your time, effort, attention, or investment.",
    "banglaMeaning": "দক্ষ",
    "synonyms": [
      "Worthwhile",
      "Valuable",
      "Rewarding"
    ],
    "antonyms": [
      "Worthless",
      "Pointless"
    ],
    "example": "Visiting the historical museum while in the capital is well worth your time."
  },
  "worthy of": {
    "word": "Worthy of",
    "pos": "idiom",
    "simpleDefinition": "Deserving of respect, praise, support, or consideration.",
    "banglaMeaning": "যোগ্য",
    "synonyms": [
      "Deserving of",
      "Entitled to",
      "Meriting"
    ],
    "antonyms": [
      "Unworthy of"
    ],
    "example": "Her heroic volunteer efforts after the flood are truly worthy of public recognition."
  },
  "wrath": {
    "word": "Wrath",
    "pos": "noun",
    "simpleDefinition": "Extreme, fiercely vengeful anger or fury",
    "banglaMeaning": "প্রচণ্ড রাগ / ক্রোধ",
    "synonyms": [
      "Anger",
      "Fury",
      "Rage"
    ],
    "antonyms": [
      "Calm",
      "Peace",
      "Pleasure"
    ],
    "example": "The king's wrath fell upon those who disobeyed him."
  },
  "writ": {
    "word": "Writ",
    "pos": "noun",
    "simpleDefinition": "A formal written legal order issued by a court or judicial authority.",
    "banglaMeaning": "কোন বিষয় সম্পর্কে কোর্টের লিখিত অর্ডার",
    "synonyms": [
      "Court order",
      "Subpoena",
      "Decree",
      "Mandate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The judge issued a writ of habeas corpus directing that the prisoner be brought to court."
  },
  "xenophobia": {
    "word": "Xenophobia",
    "pos": "noun",
    "simpleDefinition": "Deep dislike, distrust, or prejudice against people from other countries.",
    "banglaMeaning": "বিদেশি-বিদ্বেষ",
    "synonyms": [
      "Intolerance",
      "Chauvinism",
      "Prejudice",
      "Bias"
    ],
    "antonyms": [
      "Tolerance",
      "Hospitality",
      "Acceptance"
    ],
    "example": "The educational program was created to eradicate prejudice and xenophobia."
  },
  "yearn": {
    "word": "Yearn",
    "pos": "verb",
    "simpleDefinition": "To feel a strong, tender desire or longing for something",
    "banglaMeaning": "তীব্র আকাঙ্ক্ষা করা / ব্যাকুল হওয়া",
    "synonyms": [
      "Long",
      "Desire",
      "Crave"
    ],
    "antonyms": [
      "Detest",
      "Hate",
      "Dislike"
    ],
    "example": "She yearned for peace after years of war."
  },
  "yield": {
    "word": "Yield",
    "pos": "verb",
    "simpleDefinition": "To produce or provide a crop or profit, or give way to arguments or pressure.",
    "banglaMeaning": "বশ্যতা স্বীকার করা",
    "synonyms": [
      "Produce",
      "Provide",
      "Surrender",
      "Submit"
    ],
    "antonyms": [
      "Resist",
      "Withstand"
    ],
    "example": "Careful fertilization helped the farm yield its largest wheat harvest in a decade."
  },
  "zeal": {
    "word": "Zeal",
    "pos": "noun",
    "simpleDefinition": "Great energy and enthusiasm for a cause or activity",
    "banglaMeaning": "প্রবল উৎসাহ / উদ্দীপনা",
    "synonyms": [
      "Enthusiasm",
      "Passion",
      "Fervor"
    ],
    "antonyms": [
      "Apathy",
      "Indifference",
      "Laziness"
    ],
    "example": "She worked with great zeal to improve the community."
  },
  "zenith": {
    "word": "Zenith",
    "pos": "noun",
    "simpleDefinition": "The highest point, peak, or culminating stage reached by something",
    "banglaMeaning": "শীর্ষবিন্দু / সর্বোচ্চ চূড়া / চূড়া",
    "synonyms": [
      "Peak",
      "Summit",
      "Pinnacle"
    ],
    "antonyms": [
      "Nadir",
      "Bottom",
      "Lowest"
    ],
    "example": "point He reached the zenith of his career at forty."
  },
  "zest": {
    "word": "Zest",
    "pos": "noun",
    "simpleDefinition": "Great enthusiasm, energy, and eagerness, or lively exciting flavor.",
    "banglaMeaning": "রুচি / প্রাণবন্ততা",
    "synonyms": [
      "Enthusiasm",
      "Eagerness",
      "Passion",
      "Gusto"
    ],
    "antonyms": [
      "Apathy",
      "Indifference",
      "Lethargy"
    ],
    "example": "She brought tremendous zest and creativity to every new educational project."
  },
  "bona fide": {
    "word": "Bona-fide",
    "pos": "adjective",
    "simpleDefinition": "Genuine, real, and made or done in good faith without deceit.",
    "banglaMeaning": "আসল,খাঁটি",
    "synonyms": [
      "genuine",
      "authentic"
    ],
    "antonyms": [
      "fraudulent",
      "deceitful",
      "fake",
      "counterfeit"
    ],
    "example": "He is a bona fide expert with decades of research experience."
  },
  "far fetched": {
    "word": "Far-fetched",
    "pos": "adjective",
    "simpleDefinition": "Very unlikely to be true or difficult to believe; improbable.",
    "banglaMeaning": "অস্বাভাবিক, যা সহজে বিশ্বাসযোগ্য নয়",
    "synonyms": [
      "Unlikely",
      "Improbable",
      "Incredible",
      "Doubtful"
    ],
    "antonyms": [
      "Plausible",
      "Believable",
      "Convincing"
    ],
    "example": "His explanation for why he was late seemed completely far-fetched."
  }
};
