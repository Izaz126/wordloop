// Comprehensive Offline Dictionary for Vocabulary Enrichment (1262 entries)
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
    "pos": "noun",
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
    "banglaMeaning": "ঘষর্ণের মাধ্যমে তুলে ফেলা",
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
    "banglaMeaning": "গষ্ণর",
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
    "banglaMeaning": "আকঙি্গক",
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
    "banglaMeaning": "সংযোজনের মাধ্যমেবৃদি্ধ",
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
    "banglaMeaning": "বৃদি্ধ",
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
    "banglaMeaning": "একতি্রত করা বা জমানো",
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
    "banglaMeaning": "সতর্ক করা / মৃদু তিরস্কার করা / সর্তক করা",
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
    "banglaMeaning": "পে্রমপূণর্",
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
    "banglaMeaning": "প্রতিহূল",
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
    "banglaMeaning": "অন্ত্রানবাদী",
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
    "banglaMeaning": "বিজে্ঞদ / বিজি্ঞন্নতা",
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
    "banglaMeaning": "প্রশমিত করা (কষ্ট / যপ্সণা )",
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
    "banglaMeaning": "নিস্পৃহ / দূরে থাকা / একাকী / নিলির্প্ত",
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
    "banglaMeaning": "পরার্থপর / নিঃস্বার্থ / পরের জন্য মণ্টলজনক",
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
    "banglaMeaning": "পুন্নীভূত করা",
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
    "banglaMeaning": "প্রশমিত করা (কষ্ট / যপ্সণা )",
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
    "banglaMeaning": "ধ্বন্ধুভাবাপন্ন",
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
    "banglaMeaning": "ভাবসল্মসারণ করা",
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
    "banglaMeaning": "আনুষণি্টক",
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
    "banglaMeaning": "বাতাসের বেগ নিণর্ায়ক যপ্স",
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
    "banglaMeaning": "প্রতিদ্ধন্দীতা",
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
    "banglaMeaning": "সংকি্ষপ্ত ন্ত্রানগর্ব",
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
    "banglaMeaning": "আতটি্টত করা / মর্মাহত করা",
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
    "banglaMeaning": "বিধিবহিভূর্ত / বৈস্বরচারী",
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
    "banglaMeaning": "কষ্টসাধ্য বা পরিঙ্কমসাধ্য কিছু",
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
    "banglaMeaning": "বৈশসি্ফক",
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
    "banglaMeaning": "বিচক্ষণ / তীক্ষ্ণবুদ্ধি / ন্ত্রানী / বিচক্ষণ",
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
    "banglaMeaning": "আঙ্কয় / নিরপত্তা",
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
    "pos": "noun",
    "simpleDefinition": "Used to say what is the true or fundamental nature of something or someone, despite appearances.",
    "banglaMeaning": "প্রকৃতপকে্ষ",
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
    "banglaMeaning": "অনিহা / প্রতিক্রিয়া",
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
    "pos": "noun",
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
    "banglaMeaning": "সি্বঞ্ছ",
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
    "banglaMeaning": "দয়ালু / হিতৈষী / হিৈতষী",
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
    "banglaMeaning": "গ্রব্দপুনি্ন",
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
    "banglaMeaning": "আলোকজ্ঞটা",
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
  "bona fide": {
    "word": "Bona fide",
    "pos": "adjective",
    "simpleDefinition": "Genuine, real, and made or done in good faith without deceit.",
    "banglaMeaning": "খাঁটি / প্রকৃত",
    "synonyms": [
      "Genuine",
      "Authentic",
      "Real",
      "Legitimate"
    ],
    "antonyms": [
      "Bogus",
      "Counterfeit",
      "Fake"
    ],
    "example": "He is a bona fide expert with decades of research experience."
  },
  "bondage": {
    "word": "Bondage",
    "pos": "noun",
    "simpleDefinition": "The state of being a slave or being held captive; lack of freedom.",
    "banglaMeaning": "বন্দদশা",
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
    "banglaMeaning": "দাশি্রক",
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
    "banglaMeaning": "ভণ্টুর",
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
    "banglaMeaning": "সংক্ষিপ্ততা / স্বল্পতা / সংকি্ষপ্ত ভাবে",
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
    "banglaMeaning": "ভণ্টুর",
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
    "banglaMeaning": "চিন্তানিমঞ্জ",
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
    "banglaMeaning": "বৈহ বৈচ পূণর্",
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
    "banglaMeaning": "পূঁজিতাপি্সক",
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
    "banglaMeaning": "সতীধ",
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
    "banglaMeaning": "নিয়মিত ঘটা",
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
    "banglaMeaning": "চিন্তানিমঞ্জ",
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
    "banglaMeaning": "সামন্নস্যপূণর্ / সুসনি্ত্যত / যৌক্তিত",
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
    "pos": "noun",
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
    "banglaMeaning": "আত্মতৃপি্ত",
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
    "banglaMeaning": "আত্মসন্তুষ্ট / অসাবধান / স_ষ্টি",
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
    "banglaMeaning": "জটলিতা",
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
    "banglaMeaning": "যৌগিক",
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
    "banglaMeaning": "বৈধর্য্য",
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
    "banglaMeaning": "উপস্থী",
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
    "banglaMeaning": "পয়ঃপ্রণালী",
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
    "banglaMeaning": "সামুদি্রক বানমাছ",
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
    "banglaMeaning": "নতুন নিয়োগপ্রাপ্ত অনভিন্ত্র র্কমশী",
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
    "banglaMeaning": "চক্রোন্ত করা",
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
    "banglaMeaning": "চিন্তানিমঞ্জ",
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
    "banglaMeaning": "বৈবপরিত্য",
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
    "banglaMeaning": "হৃন্মলী",
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
    "banglaMeaning": "নিসগর্",
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
    "banglaMeaning": "ভেজাল / কৃতি্রম",
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
    "banglaMeaning": "বাঁকা",
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
    "simpleDefinition": "An old woman who is thin and ugly, often used in a derogatory or dismissive way.",
    "banglaMeaning": "বিগত যৌবনা (ঘৃণা অথের্)",
    "synonyms": [
      "hag",
      "witch",
      "old woman"
    ],
    "antonyms": [
      "maiden",
      "young woman",
      "beauty"
    ],
    "example": "The children were scared of the old crone who lived alone in the spooky house."
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
    "pos": "verb",
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
    "banglaMeaning": "দোষী / অপরাধের যোগ্য / শাসি্ত পাবার যোগ্য",
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
    "banglaMeaning": "দক্ষ",
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
    "banglaMeaning": "ধনসশ্মতি্তর জন্য লোভাতুর",
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
    "simpleDefinition": "Eager to know or learn something; also, strange or unusual.",
    "banglaMeaning": "অদ্বুত",
    "synonyms": [
      "inquisitive",
      "prying",
      "unusual",
      "peculiar"
    ],
    "antonyms": [
      "uninterested",
      "indifferent",
      "common",
      "ordinary"
    ],
    "example": "The curious child asked many questions about how the machine worked."
  },
  "currency": {
    "word": "Currency",
    "pos": "noun",
    "simpleDefinition": "A system of money in general use in a particular country; also, the state of being generally accepted or in use.",
    "banglaMeaning": "প্রচলিত",
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
    "banglaMeaning": "বক্রেরেখা",
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
    "pos": "noun",
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
    "banglaMeaning": "সন্দেহবাতিক / মানববিদ্বেষী / বৈনরাশ্যবাদী",
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
    "pos": "noun",
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
    "banglaMeaning": "অভাব / স্বস্ফতা",
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
    "banglaMeaning": "চরম বিপর্যয় / ভরাডুবি / ’ংস হওয়া / পতন হয়ে যাওয়া / মহাবিপর্যয়",
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
    "banglaMeaning": "’ংসাবশেষ",
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
    "banglaMeaning": "প্রতারনা",
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
    "banglaMeaning": "টকিানো বা টিকিয়ে রাখা যায় এমন",
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
    "pos": "verb",
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
    "banglaMeaning": "ভ্রানি্ত",
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
    "banglaMeaning": "মৃতু্য",
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
    "banglaMeaning": "সামরিক দায়িধ থেকে অব্যাহতি দেয়া",
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
    "banglaMeaning": "চূণর্ করা",
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
    "banglaMeaning": "প্রমাণদায়ক",
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
    "banglaMeaning": "আপতি্ত / আশংকা প্রকাশ করা",
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
    "banglaMeaning": "ভার উত্তোলন যপ্স",
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
    "banglaMeaning": "’ংস",
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
    "banglaMeaning": "রোগ নিণর্য়",
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
    "banglaMeaning": "অপটুর্কমশী",
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
    "banglaMeaning": "অস_ষ্ট / অতৃপ্ত",
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
    "banglaMeaning": "ষ্কতিকটু",
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
    "banglaMeaning": "আবিগ্ধার করা",
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
    "banglaMeaning": "নিলির্প্ত",
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
    "banglaMeaning": "আতটি্টত করা / মর্মাহত করা",
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
    "banglaMeaning": "বৈবসাদৃশ্য",
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
    "banglaMeaning": "কারো উদে্দেশে কোন কিছু পাঠানো",
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
    "banglaMeaning": "ছত্রভণ্ট",
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
    "banglaMeaning": "অত্যধিক বিমষর্",
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
    "banglaMeaning": "কেন্দচু্যতি",
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
    "banglaMeaning": "স্বগর্শীয়",
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
    "banglaMeaning": "অনিহ্নয়তা",
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
    "banglaMeaning": "নিবের্াধ লোক",
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
    "pos": "noun",
    "simpleDefinition": "To enjoy oneself fully, especially without worrying about the future.",
    "banglaMeaning": "খাও / দাও ফুতির্ করা জাতীয় ব্যক্তি",
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
    "pos": "noun",
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
    "banglaMeaning": "উচ্ছাস প্রবণ",
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
    "banglaMeaning": "উতে্তজিত করা",
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
    "banglaMeaning": "শোকগাঁথা / বিষাদসংগীত",
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
    "banglaMeaning": "বাচনভণি্ট",
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
    "banglaMeaning": "পে্রমমুঞ্ছ",
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
    "banglaMeaning": "বৃদি্ধ করা",
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
    "banglaMeaning": "রহস্যময় / বিভ্রান্তিকর / বিভ্রানি্তকর",
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
    "banglaMeaning": "দীঘর্ায়িত করা",
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
    "simpleDefinition": "holding one's attention completely; fascinating and captivating.",
    "banglaMeaning": "বিমুঞ্ছ",
    "synonyms": [
      "captivating",
      "fascinating",
      "mesmerizing",
      "gripping"
    ],
    "antonyms": [
      "boring",
      "dull",
      "tedious"
    ],
    "example": "The documentary about ancient civilizations was absolutely enthralling."
  },
  "entrepreneur": {
    "word": "Entrepreneur",
    "pos": "noun",
    "simpleDefinition": "a person who starts a business, taking on financial risks in the hope of profit.",
    "banglaMeaning": "উদে্যাক্তা",
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
    "banglaMeaning": "উচ্চারন করা",
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
    "banglaMeaning": "সংকি্ষপ্ত",
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
    "banglaMeaning": "প্রশানি্ত",
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
    "banglaMeaning": "প্রশ্চত করা / সনি্ত্যত করা",
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
    "banglaMeaning": "ন্যায়সণ্টত",
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
    "banglaMeaning": "ভ্রমণরত",
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
    "banglaMeaning": "অনিয়মিত / খেয়ালী / থটপিূণর্ / উস্নাপাস্না",
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
    "banglaMeaning": "পর্দমযাদায় উন্নতিসাধন",
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
    "banglaMeaning": "উ্সাহিত করা / প্রণোদিত করা / আষ্ণান করা",
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
    "banglaMeaning": "আয়তনে বৃদি্ধ করা / বিস্তৃত করা",
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
    "banglaMeaning": "বহিগ্ধার করা",
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
    "banglaMeaning": "পূর্বপ্রশ্চতি ছাড়া কোন বক্তব্য দেয়া",
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
    "banglaMeaning": "অমিতব্যয়ি / সীমালণ্ঠন",
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
    "banglaMeaning": "বিবণর্ হওয়া",
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
    "pos": "noun",
    "simpleDefinition": "Plans or ideas that are imaginative and unrealistic, often impractical.",
    "banglaMeaning": "কাস্ফনিক পরিকস্ফনা",
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
    "banglaMeaning": "অস্বাভাবিক / সন্দেহজনক",
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
    "banglaMeaning": "গভীরতা নিণর্য় করা",
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
    "banglaMeaning": "তুজ্ঞ",
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
    "pos": "noun",
    "simpleDefinition": "A phrase referring to the torments of hell, often used to describe a very angry or passionate speech about punishment.",
    "banglaMeaning": "জাহান্নামের অনুমিত শাসি্ত",
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
    "pos": "verb",
    "simpleDefinition": "At maximum speed or effort; also, directly and without hesitation.",
    "banglaMeaning": "সোজা",
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
    "banglaMeaning": "নিয়প্সণহীন",
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
    "banglaMeaning": "চন্ধল",
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
    "banglaMeaning": "হালকা / অর্থহীন / তুচ্ছ / ছেলেমানুষীপূণর্ / নগণ্য",
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
    "banglaMeaning": "অতিসর্তক",
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
    "banglaMeaning": "শুরু",
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
    "pos": "noun",
    "simpleDefinition": "To have a friendly relationship with someone; to manage or cope in a situation.",
    "banglaMeaning": "দুজনের মাঝে চমৎকার বন্ধুধপূণর্ সশ্মর্ক",
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
    "banglaMeaning": "অন্ধকারাচ্ছন্ন / বিষণ্ণ / অন্ধকারাজ্ঞন্ন",
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
    "simpleDefinition": "A shiny, smooth appearance on a surface.",
    "banglaMeaning": "উণ্ডল তল",
    "synonyms": [
      "sheen",
      "luster",
      "shine",
      "polish"
    ],
    "antonyms": [
      "dullness",
      "matte",
      "flatness"
    ],
    "example": "The new car had a beautiful, high-gloss finish that reflected the light."
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
    "banglaMeaning": "দয়ালু / মার্জিত / সদয় / সদয়",
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
    "pos": "noun",
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
    "banglaMeaning": "কৃতন্ত্র",
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
    "banglaMeaning": "তৃপি্তদায়ক",
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
    "banglaMeaning": "কৃতন্ত্রবোধ",
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
    "banglaMeaning": "কষ্টসাধ্য বা পরিঙ্কমসাধ্য কিছু",
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
    "banglaMeaning": "শান্ত / শানি্তপূণর্",
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
    "pos": "noun",
    "simpleDefinition": "To be in an uncertain or critical state, with the outcome not yet decided.",
    "banglaMeaning": "সাফলে্যর জন্য কোন কিছুর উপর নিভর্র করা",
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
    "simpleDefinition": "Unpleasantly rough to the touch or other senses.",
    "banglaMeaning": "কর্কশ",
    "synonyms": [
      "abrasive",
      "heavy",
      "hard"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use harsh correctly in a sentence."
  },
  "hastening": {
    "word": "Hastening",
    "pos": "noun",
    "simpleDefinition": "The act of speeding up; a growing faster.",
    "banglaMeaning": "দ্রুত চলা",
    "synonyms": [
      "fast",
      "speed",
      "speeding"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hastening correctly in a sentence."
  },
  "hasty": {
    "word": "Hasty",
    "pos": "adjective",
    "simpleDefinition": "Acting or done in haste; hurried or too quick; speedy due to having little time.",
    "banglaMeaning": "দ্রুতগতি",
    "synonyms": [
      "headlong",
      "precipitate",
      "hurried"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hasty correctly in a sentence."
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
    "simpleDefinition": "Risky; dangerous; with the nature of a hazard.",
    "banglaMeaning": "বিপন্ত্যনক",
    "synonyms": [
      "dangerous",
      "venturous",
      "venturesome"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hazardous correctly in a sentence."
  },
  "head and ears": {
    "word": "Head and ears",
    "pos": "adverb",
    "simpleDefinition": "With the whole person; deeply; completely.",
    "banglaMeaning": "পুরোপুরি",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use head and ears correctly in a sentence."
  },
  "heckle": {
    "word": "Heckle",
    "pos": "verb",
    "simpleDefinition": "To insult, tease, make fun of or badger, especially during a comedy performance.",
    "banglaMeaning": "প্রহ্মবানে জজর্রিত করা",
    "synonyms": [
      "harass",
      "hackle",
      "hatchel"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use heckle correctly in a sentence."
  },
  "hedge": {
    "word": "Hedge",
    "pos": "noun",
    "simpleDefinition": "Contract or arrangement reducing one's exposure to risk (for example the risk of price movements or interest rate movements).",
    "banglaMeaning": "প্রতিবন্ধক",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hedge correctly in a sentence."
  },
  "hefty": {
    "word": "Hefty",
    "pos": "adjective",
    "simpleDefinition": "Heavy, weighing a lot.",
    "banglaMeaning": "প্রবল / তাগড়া",
    "synonyms": [
      "heavy",
      "brawny",
      "powerful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hefty correctly in a sentence."
  },
  "hegemony": {
    "word": "Hegemony",
    "pos": "noun",
    "simpleDefinition": "Domination, influence, or authority over another, especially by one political group over a society or by one nation over others.",
    "banglaMeaning": "আধিপত্য",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hegemony correctly in a sentence."
  },
  "heinous": {
    "word": "Heinous",
    "pos": "adjective",
    "simpleDefinition": "Bad, evil or villainous.",
    "banglaMeaning": "জগন্য",
    "synonyms": [
      "grievous",
      "atrocious",
      "evil"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use heinous correctly in a sentence."
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
    "simpleDefinition": "A polygon with six sides and six angles.",
    "banglaMeaning": "ষড়ভূজ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hexagon correctly in a sentence."
  },
  "hidebound": {
    "word": "Hidebound",
    "pos": "adjective",
    "simpleDefinition": "Stubborn; narrow-minded; inflexible.",
    "banglaMeaning": "সংকীণর্মনা",
    "synonyms": [
      "traditionalist",
      "conservative"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hidebound correctly in a sentence."
  },
  "highbrow": {
    "word": "Highbrow",
    "pos": "adjective",
    "simpleDefinition": "Intellectually stimulating, highly cultured, sophisticated.",
    "banglaMeaning": "বড়াইকারী",
    "synonyms": [
      "intellectual",
      "highbrowed"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use highbrow correctly in a sentence."
  },
  "hindrance": {
    "word": "Hindrance",
    "pos": "noun",
    "simpleDefinition": "Something which hinders: something that holds back or causes problems with something else.",
    "banglaMeaning": "বাঁধা",
    "synonyms": [
      "impediment",
      "hitch",
      "encumbrance"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hindrance correctly in a sentence."
  },
  "hit upon": {
    "word": "Hit upon",
    "pos": "verb",
    "simpleDefinition": "To think of; to discover or invent.",
    "banglaMeaning": "খুঁজে পাওয়া",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hit upon correctly in a sentence."
  },
  "hoard": {
    "word": "Hoard",
    "pos": "verb",
    "simpleDefinition": "To amass, usually for one's own private collection.",
    "banglaMeaning": "মজুতদারি",
    "synonyms": [
      "cache",
      "collect",
      "amass"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hoard correctly in a sentence."
  },
  "hole and corner": {
    "word": "Hole and corner",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being hole and corner.",
    "banglaMeaning": "গোপনীয়",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hole and corner correctly in a sentence."
  },
  "holocaust": {
    "word": "Holocaust",
    "pos": "noun",
    "simpleDefinition": "(figuratively) Extensive destruction of a group of animals or (especially) people; a large-scale massacre or slaughter.",
    "banglaMeaning": "ব্যাপক হত্যাকান্ম",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use holocaust correctly in a sentence."
  },
  "homogeneous": {
    "word": "Homogeneous",
    "pos": "adjective",
    "simpleDefinition": "Of the same kind; alike, similar.",
    "banglaMeaning": "সমজাতীয়",
    "synonyms": [
      "solid",
      "uniform",
      "consistent"
    ],
    "antonyms": [
      "heterogeneous"
    ],
    "example": "The student learned how to use homogeneous correctly in a sentence."
  },
  "honorary": {
    "word": "Honorary",
    "pos": "adjective",
    "simpleDefinition": "Given as an honor/honour, with no duties attached, and without payment.",
    "banglaMeaning": "বিনাবেতনে",
    "synonyms": [
      "unearned"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use honorary correctly in a sentence."
  },
  "hook": {
    "word": "Hook",
    "pos": "noun",
    "simpleDefinition": "A rod bent into a curved shape, typically with one end free and the other end secured to a rope or other attachment.",
    "banglaMeaning": "ফাঁদ",
    "synonyms": [
      "abstract",
      "plume",
      "draw"
    ],
    "antonyms": [
      "unhook",
      "undercharge"
    ],
    "example": "The student learned how to use hook correctly in a sentence."
  },
  "horde": {
    "word": "Horde",
    "pos": "noun",
    "simpleDefinition": "A large number of people or things.",
    "banglaMeaning": "যাযাবর দল",
    "synonyms": [
      "host",
      "swarm",
      "drove"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use horde correctly in a sentence."
  },
  "horn": {
    "word": "Horn",
    "pos": "noun",
    "simpleDefinition": "A hard growth of keratin that protrudes from the top of the head of certain animals, usually paired.",
    "banglaMeaning": "শিঙা",
    "synonyms": [
      "tusk",
      "trumpet",
      "cornet"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use horn correctly in a sentence."
  },
  "host in himself": {
    "word": "Host in himself",
    "pos": "idiom",
    "simpleDefinition": "A capable person who possesses multiple skills alone",
    "banglaMeaning": "আয়োজক",
    "synonyms": [
      "all-rounder",
      "self-reliant person"
    ],
    "antonyms": [
      "dependent person"
    ],
    "example": "The experienced technician was a host in himself."
  },
  "hostile": {
    "word": "Hostile",
    "pos": "adjective",
    "simpleDefinition": "Showing or feeling active opposition or unfriendliness",
    "banglaMeaning": "শত্রুভাবাপন্ন / প্রতিকূল / প্রতিহূল / বিরোধী",
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
    "simpleDefinition": "Having a low opinion of oneself; not proud, arrogant, or assuming; modest.",
    "banglaMeaning": "বিনীত",
    "synonyms": [
      "base",
      "chagrin",
      "modest"
    ],
    "antonyms": [
      "proud"
    ],
    "example": "The student learned how to use humble correctly in a sentence."
  },
  "humidity": {
    "word": "Humidity",
    "pos": "noun",
    "simpleDefinition": "The amount of water vapour in the air.",
    "banglaMeaning": "আদ্রতা",
    "synonyms": [
      "humidness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use humidity correctly in a sentence."
  },
  "hyperbolic": {
    "word": "Hyperbolic",
    "pos": "adjective",
    "simpleDefinition": "Using hyperbole: exaggerated.",
    "banglaMeaning": "অতিরনি্নত করে বলা",
    "synonyms": [
      "exaggerated",
      "inflated",
      "increased"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hyperbolic correctly in a sentence."
  },
  "hypocrite": {
    "word": "Hypocrite",
    "pos": "noun",
    "simpleDefinition": "A person who pretends to have virtues, moral or religious beliefs that they do not possess",
    "banglaMeaning": "ভণ্ড / কপট ব্যক্তি / ভধ্ন",
    "synonyms": [
      "Deceiver",
      "Pretender",
      "Fake"
    ],
    "antonyms": [
      "Sincere",
      "Honest",
      "Genuine"
    ],
    "example": "A hypocrite preaches goodness but behaves badly."
  },
  "hypothetical": {
    "word": "Hypothetical",
    "pos": "adjective",
    "simpleDefinition": "Based upon a hypothesis; conjectural.",
    "banglaMeaning": "অনুমান কৃত / প্রকসি্ফত",
    "synonyms": [
      "theoretical",
      "theoretic",
      "hypothetic"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use hypothetical correctly in a sentence."
  },
  "idealistic": {
    "word": "Idealistic",
    "pos": "adjective",
    "simpleDefinition": "Of or pertaining to an idealist or to idealism.",
    "banglaMeaning": "আদশর্বাদী",
    "synonyms": [
      "noble",
      "lofty",
      "exalted"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use idealistic correctly in a sentence."
  },
  "identical": {
    "word": "Identical",
    "pos": "adjective",
    "simpleDefinition": "Bearing full likeness by having precisely the same set of characteristics; indistinguishable.",
    "banglaMeaning": "সমজাতীয়",
    "synonyms": [
      "congruent",
      "same",
      "indistinguishable"
    ],
    "antonyms": [
      "fraternal",
      "biovular"
    ],
    "example": "The student learned how to use identical correctly in a sentence."
  },
  "idolatrous": {
    "word": "Idolatrous",
    "pos": "adjective",
    "simpleDefinition": "Partaking in idolatry; worshipping idols or false gods.",
    "banglaMeaning": "পরম ভক্তিশীল",
    "synonyms": [
      "loving"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use idolatrous correctly in a sentence."
  },
  "idyllic": {
    "word": "Idyllic",
    "pos": "adjective",
    "simpleDefinition": "Extremely happy, peaceful, or picturesque.",
    "banglaMeaning": "শান্ত",
    "synonyms": [
      "pleasant",
      "pastoral",
      "perfect"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use idyllic correctly in a sentence."
  },
  "illusive": {
    "word": "Illusive",
    "pos": "adjective",
    "simpleDefinition": "Subject to or pertaining to an illusion, often used in the sense of an unrealistic expectation or an unreachable goal or outcome.",
    "banglaMeaning": "মায়াময়",
    "synonyms": [
      "unreal",
      "illusory"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use illusive correctly in a sentence."
  },
  "imbecile": {
    "word": "Imbecile",
    "pos": "noun",
    "simpleDefinition": "A fool, an idiot.",
    "banglaMeaning": "বোকা জাতীয়",
    "synonyms": [
      "cretin",
      "stupid",
      "idiot"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use imbecile correctly in a sentence."
  },
  "imbecility": {
    "word": "Imbecility",
    "pos": "noun",
    "simpleDefinition": "The quality of being imbecile; weakness; feebleness, especially of mind.",
    "banglaMeaning": "মূখর্তা",
    "synonyms": [
      "folly",
      "foolishness",
      "betise"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use imbecility correctly in a sentence."
  },
  "immigrant": {
    "word": "Immigrant",
    "pos": "noun",
    "simpleDefinition": "A non-native person who comes to a country from another country to permanently settle there.",
    "banglaMeaning": "অভিবাসী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use immigrant correctly in a sentence."
  },
  "impair": {
    "word": "Impair",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being impair.",
    "banglaMeaning": "দুর্বল করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impair correctly in a sentence."
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
    "simpleDefinition": "To drive forward; to propel an object, to provide an impetus for motion or action.",
    "banglaMeaning": "অনুপ্রাণিত করা",
    "synonyms": [
      "propel",
      "force"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impel correctly in a sentence."
  },
  "impertinence": {
    "word": "Impertinence",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being impertinence.",
    "banglaMeaning": "অপ্রাসণি্টকতা",
    "synonyms": [
      "gall",
      "insolence",
      "cheek"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impertinence correctly in a sentence."
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
    "simpleDefinition": "Anything that impels; a stimulating factor.",
    "banglaMeaning": "আবেগ / প্রেরণা",
    "synonyms": [
      "impulse",
      "drift",
      "impulsion"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impetus correctly in a sentence."
  },
  "impinge": {
    "word": "Impinge",
    "pos": "verb",
    "simpleDefinition": "To interfere with.",
    "banglaMeaning": "আঘাত হানা",
    "synonyms": [
      "encroach",
      "infringe",
      "trench"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impinge correctly in a sentence."
  },
  "implacable": {
    "word": "Implacable",
    "pos": "adjective",
    "simpleDefinition": "Not able to be placated or appeased.",
    "banglaMeaning": "নির্দয় / ক্ষমাশীল",
    "synonyms": [
      "inexorable",
      "grim",
      "stern"
    ],
    "antonyms": [
      "placable"
    ],
    "example": "The student learned how to use implacable correctly in a sentence."
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
    "simpleDefinition": "Someone who attempts to deceive by using an assumed name or identity.",
    "banglaMeaning": "ভধ্ন",
    "synonyms": [
      "sham",
      "pretender",
      "fraud"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impostor correctly in a sentence."
  },
  "imprison": {
    "word": "Imprison",
    "pos": "verb",
    "simpleDefinition": "To put in or as if in prison; confine somebody against their will.",
    "banglaMeaning": "শৃড্ডলাবদ্ধ করা",
    "synonyms": [
      "gaol",
      "jug",
      "incarcerate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use imprison correctly in a sentence."
  },
  "imprudent": {
    "word": "Imprudent",
    "pos": "adjective",
    "simpleDefinition": "Not prudent; lacking prudence or discretion; indiscreet; injudicious; not paying attention to the consequences of one's actions.",
    "banglaMeaning": "অবিবেচক",
    "synonyms": [
      "rash",
      "blind",
      "improvident"
    ],
    "antonyms": [
      "prudent"
    ],
    "example": "The student learned how to use imprudent correctly in a sentence."
  },
  "impulsive": {
    "word": "Impulsive",
    "pos": "adjective",
    "simpleDefinition": "Actuated by impulse or by transient feelings; inclined to make rapid decisions without due consideration.",
    "banglaMeaning": "আবেগপ্রবণ",
    "synonyms": [
      "capricious",
      "dynamic",
      "arbitrary"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impulsive correctly in a sentence."
  },
  "impute": {
    "word": "Impute",
    "pos": "verb",
    "simpleDefinition": "To attribute or ascribe (responsibility or fault) to a cause or source.",
    "banglaMeaning": "আরোপ করা",
    "synonyms": [
      "attribute",
      "ascribe",
      "assign"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use impute correctly in a sentence."
  },
  "in deep water": {
    "word": "In deep water",
    "pos": "idiom",
    "simpleDefinition": "In serious trouble or severe difficulty",
    "banglaMeaning": "বিপদে থাকা",
    "synonyms": [
      "in trouble",
      "in distress"
    ],
    "antonyms": [
      "safe",
      "out of trouble"
    ],
    "example": "The company found itself in deep water after losing its main client."
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
    "simpleDefinition": "A female lover or woman with whom one is in love; a mistress.",
    "banglaMeaning": "প্রণয়ী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use inamorata correctly in a sentence."
  },
  "inaudible": {
    "word": "Inaudible",
    "pos": "adjective",
    "simpleDefinition": "Unable to be heard or not loud enough to be heard.",
    "banglaMeaning": "যা শোনা যায় না",
    "synonyms": [
      "silent",
      "voiceless",
      "unheard"
    ],
    "antonyms": [
      "audible",
      "hearable"
    ],
    "example": "The student learned how to use inaudible correctly in a sentence."
  },
  "inauspicious": {
    "word": "Inauspicious",
    "pos": "adjective",
    "simpleDefinition": "Not auspicious; ill-omened.",
    "banglaMeaning": "অশুভ / অকল্যাণসূচক",
    "synonyms": [
      "ominous",
      "harmful",
      "unfortunate"
    ],
    "antonyms": [
      "auspicious"
    ],
    "example": "The student learned how to use inauspicious correctly in a sentence."
  },
  "incapacitate": {
    "word": "Incapacitate",
    "pos": "verb",
    "simpleDefinition": "To make someone or something incapable of doing something; to disable.",
    "banglaMeaning": "অযোগ্য করা",
    "synonyms": [
      "invalid",
      "disable",
      "handicap"
    ],
    "antonyms": [
      "enable"
    ],
    "example": "The student learned how to use incapacitate correctly in a sentence."
  },
  "incautious": {
    "word": "Incautious",
    "pos": "adjective",
    "simpleDefinition": "Careless, reckless, not exercising proper caution.",
    "banglaMeaning": "অবিবেচক",
    "synonyms": [
      "impetuous",
      "impulsive",
      "careless"
    ],
    "antonyms": [
      "cautious"
    ],
    "example": "The student learned how to use incautious correctly in a sentence."
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
    "simpleDefinition": "Including (almost) everything within its scope.",
    "banglaMeaning": "অন্তভুর্ক্তিমূলক",
    "synonyms": [
      "comprehensive"
    ],
    "antonyms": [
      "exclusive"
    ],
    "example": "The student learned how to use inclusive correctly in a sentence."
  },
  "incongruous": {
    "word": "Incongruous",
    "pos": "adjective",
    "simpleDefinition": "Not similar or congruent; not matching or fitting in.",
    "banglaMeaning": "বেমানান",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use incongruous correctly in a sentence."
  },
  "inconsiderate": {
    "word": "Inconsiderate",
    "pos": "adjective",
    "simpleDefinition": "Not considerate of others.",
    "banglaMeaning": "অবিবেচক",
    "synonyms": [
      "thoughtless",
      "careless",
      "uncaring"
    ],
    "antonyms": [
      "considerate"
    ],
    "example": "The student learned how to use inconsiderate correctly in a sentence."
  },
  "inculcate": {
    "word": "Inculcate",
    "pos": "verb",
    "simpleDefinition": "To teach by repeated instruction.",
    "banglaMeaning": "চিত্তনিষ্ঠ",
    "synonyms": [
      "infuse",
      "instill"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use inculcate correctly in a sentence."
  },
  "indebted": {
    "word": "Indebted",
    "pos": "adjective",
    "simpleDefinition": "Obligated, especially financially.",
    "banglaMeaning": "কৃতন্ত্র",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use indebted correctly in a sentence."
  },
  "indelible": {
    "word": "Indelible",
    "pos": "adjective",
    "simpleDefinition": "Incapable of being canceled, lost, or forgotten.",
    "banglaMeaning": "অমোচনীয়",
    "synonyms": [
      "unerasable",
      "ineradicable"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use indelible correctly in a sentence."
  },
  "indict": {
    "word": "Indict",
    "pos": "verb",
    "simpleDefinition": "To accuse of wrongdoing; charge.",
    "banglaMeaning": "অভিযুক্ত করা",
    "synonyms": [
      "Related to indict",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "a book that indicts modern values"
  },
  "indictment": {
    "word": "Indictment",
    "pos": "noun",
    "simpleDefinition": "An official formal accusation for a criminal offence, or the process by which it is brought to a jury.",
    "banglaMeaning": "অভিযোগ",
    "synonyms": [
      "bill of indictment"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use indictment correctly in a sentence."
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
    "simpleDefinition": "Poor; destitute; in need.",
    "banglaMeaning": "অত্যন্ত গরীব",
    "synonyms": [
      "destitute",
      "impoverished",
      "needy"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use indigent correctly in a sentence."
  },
  "indispensable": {
    "word": "Indispensable",
    "pos": "adjective",
    "simpleDefinition": "Absolutely necessary or requisite; that one cannot do without.",
    "banglaMeaning": "অপরিহার্য",
    "synonyms": [
      "critical",
      "essential",
      "necessary"
    ],
    "antonyms": [
      "dispensable"
    ],
    "example": "The student learned how to use indispensable correctly in a sentence."
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
    "simpleDefinition": "Disposed or prone to indulge, humor, gratify, or yield to one's own or another's desires, etc., or to be compliant, lenient, or forbearing;.",
    "banglaMeaning": "প্রঙ্কয় / ক্ষমাশীল",
    "synonyms": [
      "soft",
      "voluptuous",
      "gay"
    ],
    "antonyms": [
      "nonindulgent"
    ],
    "example": "The student learned how to use indulgent correctly in a sentence."
  },
  "inebriated": {
    "word": "Inebriated",
    "pos": "adjective",
    "simpleDefinition": "Behaving as though affected by alcohol including exhilaration, and a dumbed or stupefied manner.",
    "banglaMeaning": "মদ্যপ",
    "synonyms": [
      "mellow",
      "besotted",
      "stiff"
    ],
    "antonyms": [
      "sober"
    ],
    "example": "The student learned how to use inebriated correctly in a sentence."
  },
  "inertia": {
    "word": "Inertia",
    "pos": "noun",
    "simpleDefinition": "The property of a body that resists any change to its uniform motion; equivalent to its mass.",
    "banglaMeaning": "জড়তা",
    "synonyms": [
      "inactivity",
      "inactiveness"
    ],
    "antonyms": [
      "activity",
      "activeness"
    ],
    "example": "The student learned how to use inertia correctly in a sentence."
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
    "simpleDefinition": "Impossible to explain; not easily accounted for.",
    "banglaMeaning": "বণর্নাতীত",
    "synonyms": [
      "inscrutable",
      "cryptic",
      "incomprehensible"
    ],
    "antonyms": [
      "explicable"
    ],
    "example": "The student learned how to use inexplicable correctly in a sentence."
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
    "simpleDefinition": "Filled with air or fluid.",
    "banglaMeaning": "অত্যধিক",
    "synonyms": [
      "pretentious",
      "hyperbolic",
      "exaggerated"
    ],
    "antonyms": [
      "deflated"
    ],
    "example": "The student learned how to use inflated correctly in a sentence."
  },
  "influence": {
    "word": "Influence",
    "pos": "noun",
    "simpleDefinition": "The power to affect, control or manipulate something or someone; the ability to change the development of fluctuating things such as conduct, thoughts or decisions.",
    "banglaMeaning": "প্রভাব",
    "synonyms": [
      "charm",
      "shape",
      "determine"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use influence correctly in a sentence."
  },
  "infrared": {
    "word": "Infrared",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being infrared.",
    "banglaMeaning": "অবলোহিত",
    "synonyms": [
      "invisible",
      "unseeable",
      "infrared radiation"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use infrared correctly in a sentence."
  },
  "infuriate": {
    "word": "Infuriate",
    "pos": "verb",
    "simpleDefinition": "To make furious or mad with anger; to fill with fury.",
    "banglaMeaning": "কে্রোধে কি্ষপ্ত হওয়া",
    "synonyms": [
      "outrage",
      "incense",
      "exasperate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use infuriate correctly in a sentence."
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
    "simpleDefinition": "Straightforward, candid, open, frank.",
    "banglaMeaning": "অকপট",
    "synonyms": [
      "candid",
      "naive",
      "naif"
    ],
    "antonyms": [
      "artful",
      "disingenuous"
    ],
    "example": "The student learned how to use ingenuous correctly in a sentence."
  },
  "ingest": {
    "word": "Ingest",
    "pos": "verb",
    "simpleDefinition": "To take (a substance, e.g., food) into the body of an organism, especially through the mouth and into the gastrointestinal tract.",
    "banglaMeaning": "গলাধঃকরণ করা",
    "synonyms": [
      "assimilate",
      "have",
      "take"
    ],
    "antonyms": [
      "refrain",
      "abstain",
      "desist"
    ],
    "example": "The student learned how to use ingest correctly in a sentence."
  },
  "inherent": {
    "word": "Inherent",
    "pos": "adjective",
    "simpleDefinition": "Naturally as part or consequence of something.",
    "banglaMeaning": "স্বাভাবিক",
    "synonyms": [
      "intrinsic",
      "implicit",
      "intrinsical"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use inherent correctly in a sentence."
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
    "simpleDefinition": "To begin; to start.",
    "banglaMeaning": "সূচনা করা",
    "synonyms": [
      "enlightened",
      "novice",
      "tyro"
    ],
    "antonyms": [
      "uninitiate"
    ],
    "example": "The student learned how to use initiate correctly in a sentence."
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
    "simpleDefinition": "To introduce something new to a particular environment; to do something new.",
    "banglaMeaning": "আবিগ্ধার করা",
    "synonyms": [
      "introduce"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use innovate correctly in a sentence."
  },
  "inquisitive": {
    "word": "Inquisitive",
    "pos": "adjective",
    "simpleDefinition": "Eager to acquire knowledge; acquisitive.",
    "banglaMeaning": "সন্ধানী",
    "synonyms": [
      "curious",
      "inquiring",
      "questioning"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use inquisitive correctly in a sentence."
  },
  "inscribe": {
    "word": "Inscribe",
    "pos": "verb",
    "simpleDefinition": "To write or cut (words) onto (something, especially a hard surface, or a book to be given to another person); to engrave.",
    "banglaMeaning": "অন্তলির্খিত",
    "synonyms": [
      "cipher",
      "enroll",
      "cypher"
    ],
    "antonyms": [
      "decode"
    ],
    "example": "The student learned how to use inscribe correctly in a sentence."
  },
  "insectivorous": {
    "word": "Insectivorous",
    "pos": "adjective",
    "simpleDefinition": "Feeding on insects.",
    "banglaMeaning": "পতণ্টভূক",
    "synonyms": [
      "apivorous",
      "myrmecophagous"
    ],
    "antonyms": [
      "carnivorous",
      "omnivorous",
      "herbivorous"
    ],
    "example": "The student learned how to use insectivorous correctly in a sentence."
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
    "simpleDefinition": "Carelessness, heedlessness, indifference, or casual unconcern.",
    "banglaMeaning": "ঔদাসীন্য",
    "synonyms": [
      "lightheartedness",
      "carefreeness",
      "lightsomeness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use insouciance correctly in a sentence."
  },
  "instability": {
    "word": "Instability",
    "pos": "noun",
    "simpleDefinition": "The quality of being unstable.",
    "banglaMeaning": "অস্থায়ীধ",
    "synonyms": [
      "imbalance",
      "unbalance",
      "unstableness"
    ],
    "antonyms": [
      "balance",
      "stability",
      "stableness"
    ],
    "example": "The student learned how to use instability correctly in a sentence."
  },
  "instigation": {
    "word": "Instigation",
    "pos": "noun",
    "simpleDefinition": "The act of instigating, or the state of being instigated; incitement; especially to evil or wickedness.",
    "banglaMeaning": "উতে্তজনা",
    "synonyms": [
      "abetment",
      "mounting",
      "fomentation"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use instigation correctly in a sentence."
  },
  "intake": {
    "word": "Intake",
    "pos": "noun",
    "simpleDefinition": "The quantity taken in.",
    "banglaMeaning": "পানাহার",
    "synonyms": [
      "consumption",
      "uptake",
      "ingestion"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use intake correctly in a sentence."
  },
  "integral": {
    "word": "Integral",
    "pos": "adjective",
    "simpleDefinition": "Constituting a whole together with other parts or factors; not omittable or removable.",
    "banglaMeaning": "অপরিহার্য অংশ",
    "synonyms": [
      "intrinsic",
      "inherent",
      "intact"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use integral correctly in a sentence."
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
    "simpleDefinition": "Endowed with intellect; having a keen sense of understanding; having the capacity for higher forms of knowledge or thought; characterized by intelligence or cleverness.",
    "banglaMeaning": "বুদি্ধবৃতি্তক সংস্কৃতিবান",
    "synonyms": [
      "good",
      "rational",
      "serious"
    ],
    "antonyms": [
      "emotional",
      "nonintellectual"
    ],
    "example": "The student learned how to use intellectual correctly in a sentence."
  },
  "intense": {
    "word": "Intense",
    "pos": "adjective",
    "simpleDefinition": "Of a characteristic: extreme or very high or strong in degree; severe; also, excessive, towering.",
    "banglaMeaning": "তীজ্ঞ",
    "synonyms": [
      "profound",
      "vehement",
      "keen"
    ],
    "antonyms": [
      "mild"
    ],
    "example": "The student learned how to use intense correctly in a sentence."
  },
  "intentional": {
    "word": "Intentional",
    "pos": "adjective",
    "simpleDefinition": "Intended or planned; done deliberately or voluntarily.",
    "banglaMeaning": "ইজ্ঞাকৃতভাবে",
    "synonyms": [
      "deliberate",
      "wilful",
      "knowing"
    ],
    "antonyms": [
      "unintentional",
      "undesigned"
    ],
    "example": "The student learned how to use intentional correctly in a sentence."
  },
  "interminable": {
    "word": "Interminable",
    "pos": "adjective",
    "simpleDefinition": "Existing or occurring without interruption or end; ceaseless, unending.",
    "banglaMeaning": "থামেনা এমন / অন্তহীন",
    "synonyms": [
      "eternal",
      "long",
      "endless"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use interminable correctly in a sentence."
  },
  "intermittent": {
    "word": "Intermittent",
    "pos": "adjective",
    "simpleDefinition": "Stopping and starting, occurring, or presenting at intervals; coming after a particular time span.",
    "banglaMeaning": "অনিয়মিতভাবে",
    "synonyms": [
      "sporadic",
      "periodic",
      "periodical"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use intermittent correctly in a sentence."
  },
  "interpret": {
    "word": "Interpret",
    "pos": "verb",
    "simpleDefinition": "To explain or tell the meaning of; to translate orally into intelligible or familiar language or terms. applied especially to language, but also to dreams, signs, conduct, mysteries, etc.",
    "banglaMeaning": "ব্যাখ্যা করা",
    "synonyms": [
      "render",
      "understand",
      "construe"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use interpret correctly in a sentence."
  },
  "interrupt": {
    "word": "Interrupt",
    "pos": "verb",
    "simpleDefinition": "To disturb or halt (an ongoing process or action, or the person performing it) by interfering suddenly, especially by speaking.",
    "banglaMeaning": "ছিন্ন করা / ব্যাঘাত করা",
    "synonyms": [
      "break",
      "disrupt",
      "disturb"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use interrupt correctly in a sentence."
  },
  "intimacy": {
    "word": "Intimacy",
    "pos": "noun",
    "simpleDefinition": "Feeling or atmosphere of closeness and openness towards someone else, often but not necessarily involving sexuality.",
    "banglaMeaning": "গভীর সুসশ্মর্ক",
    "synonyms": [
      "liaison",
      "affair",
      "familiarity"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use intimacy correctly in a sentence."
  },
  "intimate": {
    "word": "Intimate",
    "pos": "noun",
    "simpleDefinition": "A very close friend.",
    "banglaMeaning": "অন্তরণ্ট",
    "synonyms": [
      "bosom buddy",
      "bosom friend",
      "cater-cousin"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "Only a couple of intimates had ever read his writing."
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
    "simpleDefinition": "Unable or indisposed to tolerate, endure or bear.",
    "banglaMeaning": "অসহনীয়",
    "synonyms": [
      "rigid",
      "strict",
      "narrow"
    ],
    "antonyms": [
      "tolerant"
    ],
    "example": "The student learned how to use intolerant correctly in a sentence."
  },
  "intoxicated": {
    "word": "Intoxicated",
    "pos": "adjective",
    "simpleDefinition": "Stupefied by alcohol, drunk.",
    "banglaMeaning": "মদ্যপ",
    "synonyms": [
      "mellow",
      "besotted",
      "stiff"
    ],
    "antonyms": [
      "sober"
    ],
    "example": "The student learned how to use intoxicated correctly in a sentence."
  },
  "intractable": {
    "word": "Intractable",
    "pos": "adjective",
    "simpleDefinition": "Difficult to deal with, solve, or manage. (of a problem).",
    "banglaMeaning": "অবাধ্য",
    "synonyms": [
      "stubborn",
      "recalcitrant",
      "refractory"
    ],
    "antonyms": [
      "tractable"
    ],
    "example": "The student learned how to use intractable correctly in a sentence."
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
    "simpleDefinition": "Innate, inherent, inseparable from the thing itself, essential.",
    "banglaMeaning": "স্বকীয় / জল্কগত",
    "synonyms": [
      "intimate",
      "inherent",
      "intrinsical"
    ],
    "antonyms": [
      "extrinsic"
    ],
    "example": "The student learned how to use intrinsic correctly in a sentence."
  },
  "introverted": {
    "word": "Introverted",
    "pos": "adjective",
    "simpleDefinition": "Of or characteristic of the personality of an introvert: thoughtful, reflective.",
    "banglaMeaning": "অন্তমুর্খী ব্যক্তি (আত্মকেন্দ্রিক চিন্তা চেতনা )",
    "synonyms": [
      "introspective",
      "introvert",
      "introversive"
    ],
    "antonyms": [
      "extroverted",
      "extrospective"
    ],
    "example": "The student learned how to use introverted correctly in a sentence."
  },
  "inundate": {
    "word": "Inundate",
    "pos": "verb",
    "simpleDefinition": "To overwhelm.",
    "banglaMeaning": "ল্গাবিত হওয়া",
    "synonyms": [
      "flood",
      "swamp",
      "submerge"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use inundate correctly in a sentence."
  },
  "inveigle": {
    "word": "Inveigle",
    "pos": "verb",
    "simpleDefinition": "To convert, convince, or win over with flattery or wiles.",
    "banglaMeaning": "চাটুকারিতায় মুঞ্ছ করা",
    "synonyms": [
      "cajole",
      "palaver",
      "coax"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use inveigle correctly in a sentence."
  },
  "invisible": {
    "word": "Invisible",
    "pos": "adjective",
    "simpleDefinition": "Unable to be seen; out of sight; not visible.",
    "banglaMeaning": "অদৃশ্য",
    "synonyms": [
      "obscure",
      "inconspicuous",
      "concealed"
    ],
    "antonyms": [
      "conspicuous",
      "obvious",
      "visible"
    ],
    "example": "The student learned how to use invisible correctly in a sentence."
  },
  "irk": {
    "word": "Irk",
    "pos": "verb",
    "simpleDefinition": "To irritate; annoy; bother.",
    "banglaMeaning": "বিরক্তি",
    "synonyms": [
      "gall"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use irk correctly in a sentence."
  },
  "irresistible": {
    "word": "Irresistible",
    "pos": "adjective",
    "simpleDefinition": "Impossible to resist.",
    "banglaMeaning": "অপ্রতিরোধ্য",
    "synonyms": [
      "attractive",
      "overwhelming",
      "overpowering"
    ],
    "antonyms": [
      "resistible"
    ],
    "example": "The student learned how to use irresistible correctly in a sentence."
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
    "simpleDefinition": "To provoke impatience, anger, or displeasure in.",
    "banglaMeaning": "বিরক্ত করা",
    "synonyms": [
      "nettle",
      "vex",
      "nark"
    ],
    "antonyms": [
      "soothe"
    ],
    "example": "The student learned how to use irritate correctly in a sentence."
  },
  "isolation": {
    "word": "Isolation",
    "pos": "noun",
    "simpleDefinition": "The state of being isolated, detached, or separated; the state of being away from other people.",
    "banglaMeaning": "বিজি্ঞন্নতা",
    "synonyms": [
      "reclusiveness",
      "closing off"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use isolation correctly in a sentence."
  },
  "jaunt": {
    "word": "Jaunt",
    "pos": "noun",
    "simpleDefinition": "A short excursion for pleasure or refreshment; a ramble; a short journey.",
    "banglaMeaning": "লঘু প্রমোদ ভ্রমণ",
    "synonyms": [
      "excursion",
      "expedition",
      "trip"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use jaunt correctly in a sentence."
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
    "simpleDefinition": "To show elation or triumph; to rejoice.",
    "banglaMeaning": "আনন্দ করা",
    "synonyms": [
      "rejoice",
      "exult",
      "triumph"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use jubilate correctly in a sentence."
  },
  "judiciary": {
    "word": "Judiciary",
    "pos": "noun",
    "simpleDefinition": "The collective body of judges, justices, etc.",
    "banglaMeaning": "আইন বিভাগ",
    "synonyms": [
      "judicature",
      "bench",
      "judicatory"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use judiciary correctly in a sentence."
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
    "simpleDefinition": "The power, right, or authority to interpret and apply the law.",
    "banglaMeaning": "আইনগত অধিকার",
    "synonyms": [
      "legal power"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use jurisdiction correctly in a sentence."
  },
  "jury": {
    "word": "Jury",
    "pos": "noun",
    "simpleDefinition": "A group of individuals chosen from the general population to hear and decide a case in a court of law.",
    "banglaMeaning": "নিণর্ায়ক সভা",
    "synonyms": [
      "Related to jury",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of jury."
  },
  "keen": {
    "word": "Keen",
    "pos": "adjective",
    "simpleDefinition": "Often with a prepositional phrase, or with to and an infinitive: showing a quick and ardent responsiveness or willingness; eager, enthusiastic, interested.",
    "banglaMeaning": "তীজ্ঞ",
    "synonyms": [
      "lament",
      "exquisite",
      "sharp"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use keen correctly in a sentence."
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
    "simpleDefinition": "A psychological disorder that causes an uncontrollable obsession with stealing without economic or material need.",
    "banglaMeaning": "চৌর্য উল্কাদ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use kleptomania correctly in a sentence."
  },
  "knotty": {
    "word": "Knotty",
    "pos": "adjective",
    "simpleDefinition": "Complicated or tricky; complex, difficult.",
    "banglaMeaning": "ঝামেলাযুক্ত",
    "synonyms": [
      "byzantine",
      "intricate",
      "convoluted"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use knotty correctly in a sentence."
  },
  "laborious": {
    "word": "Laborious",
    "pos": "adjective",
    "simpleDefinition": "Requiring much physical effort; toilsome.",
    "banglaMeaning": "কষ্টসাধ্য বা পরিঙ্কমসাধ্য কিছু",
    "synonyms": [
      "arduous",
      "heavy",
      "hard"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use laborious correctly in a sentence."
  },
  "laconic": {
    "word": "Laconic",
    "pos": "adjective",
    "simpleDefinition": "Using as few words as possible; pithy and concise.",
    "banglaMeaning": "স্বস্ফভাষী",
    "synonyms": [
      "concise",
      "pithy",
      "terse"
    ],
    "antonyms": [
      "bombastic",
      "long-winded",
      "loquacious"
    ],
    "example": "The teacher gave an insightful explanation of laconic."
  },
  "laggard": {
    "word": "Laggard",
    "pos": "noun",
    "simpleDefinition": "One who lags behind; one who takes more time than is necessary or than the others in a group.",
    "banglaMeaning": "পিছিয়ে পড়া ব্যক্তি",
    "synonyms": [
      "Related to laggard",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of laggard."
  },
  "laid back": {
    "word": "Laid back",
    "pos": "adjective",
    "simpleDefinition": "Calm, relaxed, and not easily stressed",
    "banglaMeaning": "অলস",
    "synonyms": [
      "easygoing",
      "relaxed",
      "unhurried"
    ],
    "antonyms": [
      "tense",
      "anxious",
      "uptight"
    ],
    "example": "He has a laid back personality and never panics."
  },
  "lament": {
    "word": "Lament",
    "pos": "verb",
    "simpleDefinition": "To express passionate grief, sorrow, or regret",
    "banglaMeaning": "বিলাপ করা / শোক প্রকাশ করা",
    "synonyms": [
      "Mourn",
      "Grieve",
      "Regret"
    ],
    "antonyms": [
      "Celebrate",
      "Rejoice",
      "Exult"
    ],
    "example": "She lamented the loss of her childhood home."
  },
  "landscape": {
    "word": "Landscape",
    "pos": "noun",
    "simpleDefinition": "A portion of land or territory as defined by its landform, its geographical (and architectural) features.",
    "banglaMeaning": "প্রাকৃতিক ভূ –দৃশ্য",
    "synonyms": [
      "landscape painting"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use landscape correctly in a sentence."
  },
  "languor": {
    "word": "Languor",
    "pos": "noun",
    "simpleDefinition": "A state of the body or mind caused by exhaustion or disease and characterized by a languid or weary feeling; lassitude; (countable) an instance of this.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "lethargy",
      "lassitude",
      "listlessness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use languor correctly in a sentence."
  },
  "lassitude": {
    "word": "Lassitude",
    "pos": "noun",
    "simpleDefinition": "Lethargy or lack of energy; fatigue, languor, listlessness.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "languor",
      "lethargy",
      "inanition"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lassitude correctly in a sentence."
  },
  "lawn": {
    "word": "Lawn",
    "pos": "noun",
    "simpleDefinition": "Ground (generally in front of or around a house) covered with grass kept closely mown.",
    "banglaMeaning": "বনভূমি",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lawn correctly in a sentence."
  },
  "leaning": {
    "word": "Leaning",
    "pos": "noun",
    "simpleDefinition": "A tendency or propensity.",
    "banglaMeaning": "ঝোঁক",
    "synonyms": [
      "inclination",
      "proclivity",
      "propensity"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use leaning correctly in a sentence."
  },
  "legible": {
    "word": "Legible",
    "pos": "adjective",
    "simpleDefinition": "Clear enough to be read; readable, particularly of handwriting.",
    "banglaMeaning": "সহজপাঠ্য",
    "synonyms": [
      "clear",
      "fair",
      "clean"
    ],
    "antonyms": [
      "illegible"
    ],
    "example": "The student learned how to use legible correctly in a sentence."
  },
  "legitimate": {
    "word": "Legitimate",
    "pos": "adjective",
    "simpleDefinition": "In accordance with the law or established legal forms and requirements.",
    "banglaMeaning": "আইনসম্মত",
    "synonyms": [
      "established",
      "valid",
      "logical"
    ],
    "antonyms": [
      "illegitimate",
      "outlaw",
      "criminalize"
    ],
    "example": "The student learned how to use legitimate correctly in a sentence."
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
    "simpleDefinition": "Sluggish, slow.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "lazy",
      "torpid",
      "unmoving"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of lethargic."
  },
  "lexicographer": {
    "word": "Lexicographer",
    "pos": "noun",
    "simpleDefinition": "One who writes or compiles a dictionary.",
    "banglaMeaning": "অভিধান রচয়িতা",
    "synonyms": [
      "lexicologist"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lexicographer correctly in a sentence."
  },
  "licentious": {
    "word": "Licentious",
    "pos": "adjective",
    "simpleDefinition": "Lacking restraint, or ignoring societal standards, particularly in sexual conduct; sexually unprincipled.",
    "banglaMeaning": "দুহ্নরিত্র লোক",
    "synonyms": [
      "unchaste"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use licentious correctly in a sentence."
  },
  "limpid": {
    "word": "Limpid",
    "pos": "adjective",
    "simpleDefinition": "Clear, transparent or bright.",
    "banglaMeaning": "স্পষ্ট",
    "synonyms": [
      "pellucid",
      "clear",
      "luculent"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use limpid correctly in a sentence."
  },
  "linguistic": {
    "word": "Linguistic",
    "pos": "adjective",
    "simpleDefinition": "Of or relating to language.",
    "banglaMeaning": "ভাষাবিন্ত্রান",
    "synonyms": [
      "linguistical"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of linguistic."
  },
  "lively": {
    "word": "Lively",
    "pos": "adjective",
    "simpleDefinition": "Full of life; energetic, vivacious.",
    "banglaMeaning": "প্রশান্ত / সজীব",
    "synonyms": [
      "effusive",
      "brisk",
      "effervescent"
    ],
    "antonyms": [
      "dull"
    ],
    "example": "The student learned how to use lively correctly in a sentence."
  },
  "lodge a complaint": {
    "word": "Lodge a complaint",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being lodge a complaint.",
    "banglaMeaning": "অফিসিয়ালি অভিযোগ করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lodge a complaint correctly in a sentence."
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
    "simpleDefinition": "The state, quality, or fact of being lowest point.",
    "banglaMeaning": "র্সবনিল্ড বিন্দু",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lowest point correctly in a sentence."
  },
  "lucid": {
    "word": "Lucid",
    "pos": "adjective",
    "simpleDefinition": "Expressed clearly and easy to understand",
    "banglaMeaning": "স্পষ্ট / প্রাঞ্জল",
    "synonyms": [
      "Clear",
      "Transparent",
      "Comprehensible"
    ],
    "antonyms": [
      "Vague",
      "Confusing",
      "Obscure"
    ],
    "example": "The teacher gave a lucid explanation of the concept."
  },
  "lucrative": {
    "word": "Lucrative",
    "pos": "adjective",
    "simpleDefinition": "Producing a surplus; profitable.",
    "banglaMeaning": "লাভজনক",
    "synonyms": [
      "remunerative",
      "profitable",
      "moneymaking"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lucrative correctly in a sentence."
  },
  "lukewarm": {
    "word": "Lukewarm",
    "pos": "adjective",
    "simpleDefinition": "Unenthusiastic (about a proposal or an idea).",
    "banglaMeaning": "উদাসীন",
    "synonyms": [
      "tepid",
      "warm",
      "unenthusiastic"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lukewarm correctly in a sentence."
  },
  "lumber": {
    "word": "Lumber",
    "pos": "noun",
    "simpleDefinition": "Wood sawn into planks or otherwise prepared for sale or use, especially as a building material.",
    "banglaMeaning": "খুব কষ্ট করে হাঁটা",
    "synonyms": [
      "timber",
      "pound",
      "bat"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use lumber correctly in a sentence."
  },
  "luminous": {
    "word": "Luminous",
    "pos": "adjective",
    "simpleDefinition": "Emitting light; glowing brightly; shining.",
    "banglaMeaning": "উণ্ডল",
    "synonyms": [
      "lucent",
      "bright",
      "lambent"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use luminous correctly in a sentence."
  },
  "magnanimous": {
    "word": "Magnanimous",
    "pos": "adjective",
    "simpleDefinition": "Noble and generous in spirit.",
    "banglaMeaning": "দয়ালু",
    "synonyms": [
      "noble",
      "large",
      "big"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use magnanimous correctly in a sentence."
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
    "simpleDefinition": "A person who malingers.",
    "banglaMeaning": "যে ব্যক্তি র্কতব্য এড়ানোর জন্য অসুস্থতার ভান করে",
    "synonyms": [
      "skulker"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use malingerer correctly in a sentence."
  },
  "mammoth": {
    "word": "Mammoth",
    "pos": "noun",
    "simpleDefinition": "Any species of the extinct genus Mammuthus, of large, usually hairy, elephant-like mammals with long curved tusks and an inclined back, which became extinct with the last retreat of ice age glaciers during the late Pleistocene period, and are known from fossils, frozen carcasses, and Paleolithic cave paintings found in North America and Eurasia.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "large",
      "big",
      "gigantic"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use mammoth correctly in a sentence."
  },
  "manifest": {
    "word": "Manifest",
    "pos": "adjective",
    "simpleDefinition": "Evident to the senses, especially to the sight; apparent; distinctly perceived.",
    "banglaMeaning": "স্পষ্ট",
    "synonyms": [
      "demonstrate",
      "plain",
      "evident"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use manifest correctly in a sentence."
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
    "simpleDefinition": "The quality of being manly; the set of qualities, traits and abilities considered appropriate to men (as opposed to women or children); similarity to a man.",
    "banglaMeaning": "সাহসিকতা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use manliness correctly in a sentence."
  },
  "martinet": {
    "word": "Martinet",
    "pos": "noun",
    "simpleDefinition": "A strict disciplinarian.",
    "banglaMeaning": "নিয়মনিষ্ঠ",
    "synonyms": [
      "disciplinarian",
      "moralist"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use martinet correctly in a sentence."
  },
  "massive": {
    "word": "Massive",
    "pos": "adjective",
    "simpleDefinition": "Very large in size or extent.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "heavy",
      "large",
      "big"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use massive correctly in a sentence."
  },
  "masterful": {
    "word": "Masterful",
    "pos": "adjective",
    "simpleDefinition": "Having the qualities or characteristics of masterful.",
    "banglaMeaning": "দক্ষ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use masterful correctly in a sentence."
  },
  "materialistic": {
    "word": "Materialistic",
    "pos": "adjective",
    "simpleDefinition": "Having the qualities or characteristics of materialistic.",
    "banglaMeaning": "প্রকৃতিবাদী",
    "synonyms": [
      "mercenary",
      "worldly",
      "middle-class"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use materialistic correctly in a sentence."
  },
  "materialize": {
    "word": "Materialize",
    "pos": "verb",
    "simpleDefinition": "To take physical form, to appear seemingly from nowhere.",
    "banglaMeaning": "দৃষ্টি গোচর হওয়া / বাস্তবে পরিণত হওয়া",
    "synonyms": [
      "happen"
    ],
    "antonyms": [
      "dematerialize"
    ],
    "example": "The student learned how to use materialize correctly in a sentence."
  },
  "matrimony": {
    "word": "Matrimony",
    "pos": "noun",
    "simpleDefinition": "Marriage; the state of being married.",
    "banglaMeaning": "বিবাহিত",
    "synonyms": [
      "wedlock",
      "marriage",
      "union"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use matrimony correctly in a sentence."
  },
  "meager": {
    "word": "Meager",
    "pos": "adjective",
    "simpleDefinition": "Deficient in quantity, fullness, or extent; scanty",
    "banglaMeaning": "অপ্রতুল / অতি সামান্য / স্বস্ফ",
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
    "pos": "verb",
    "simpleDefinition": "To intend.",
    "banglaMeaning": "নীচ",
    "synonyms": [
      "base",
      "spiteful",
      "skilled"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use mean correctly in a sentence."
  },
  "meddle": {
    "word": "Meddle",
    "pos": "verb",
    "simpleDefinition": "To interfere in or with; to concern oneself with unduly.",
    "banglaMeaning": "হস্তক্ষেপ করা",
    "synonyms": [
      "tamper"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use meddle correctly in a sentence."
  },
  "meditative": {
    "word": "Meditative",
    "pos": "adjective",
    "simpleDefinition": "Of or pertaining to meditation.",
    "banglaMeaning": "চিন্তাশীল",
    "synonyms": [
      "pensive",
      "musing",
      "thoughtful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use meditative correctly in a sentence."
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
    "simpleDefinition": "A keepsake; an object kept as a reminder of a place or event.",
    "banglaMeaning": "ষ্মারকচিস্র / অভিন্ত্র",
    "synonyms": [
      "souvenir"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use memento correctly in a sentence."
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
    "pos": "noun",
    "simpleDefinition": "A person employed to fight in an armed conflict who is not a member of the state or military group for which they are fighting and whose primary motivation is private gain.",
    "banglaMeaning": "ভাড়াটে বৈসনিক",
    "synonyms": [
      "commercial",
      "mercantile",
      "worldly"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use mercenary correctly in a sentence."
  },
  "merchandise": {
    "word": "Merchandise",
    "pos": "noun",
    "simpleDefinition": "Goods which are or were offered or intended for sale.",
    "banglaMeaning": "মালপত্র",
    "synonyms": [
      "product",
      "trade",
      "wares"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use merchandise correctly in a sentence."
  },
  "merchant prince": {
    "word": "Merchant prince",
    "pos": "noun",
    "simpleDefinition": "A very wealthy and influential commercial merchant",
    "banglaMeaning": "মহা ধনবান বণিক",
    "synonyms": [
      "tycoon",
      "magnate",
      "baron"
    ],
    "antonyms": [
      "pauper"
    ],
    "example": "The historical port city was run by merchant princes."
  },
  "mercury": {
    "word": "Mercury",
    "pos": "noun",
    "simpleDefinition": "A silvery-colored, toxic, metallic chemical element, liquid at room temperature, with atomic number 80 and symbol Hg.",
    "banglaMeaning": "পারদ / বুধগ্রহ / দেবরাজের দেবতা",
    "synonyms": [
      "quicksilver",
      "atomic number 80",
      "hg"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use mercury correctly in a sentence."
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
    "simpleDefinition": "In an organized manner; proceeding with regard to method; systematic.",
    "banglaMeaning": "সুশৃঙ্খল",
    "synonyms": [
      "organized"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use methodical correctly in a sentence."
  },
  "meticulous": {
    "word": "Meticulous",
    "pos": "adjective",
    "simpleDefinition": "Very careful and paying great attention to detail",
    "banglaMeaning": "খুঁতখুঁতে / অতি সতর্ক / অতিসর্তক",
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
    "simpleDefinition": "Not sharp or bitter; not strong in flavor.",
    "banglaMeaning": "শান্ত / হালকা / কোমল",
    "synonyms": [
      "modest",
      "balmy",
      "moderate"
    ],
    "antonyms": [
      "intense"
    ],
    "example": "The student learned how to use mild correctly in a sentence."
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
    "simpleDefinition": "An excavation from which ore or solid minerals are taken, especially one consisting of underground tunnels.",
    "banglaMeaning": "খনি",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use mine correctly in a sentence."
  },
  "misanthrope": {
    "word": "Misanthrope",
    "pos": "noun",
    "simpleDefinition": "Someone who distrusts or avoids other people.",
    "banglaMeaning": "মানববিদে্ধষ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use misanthrope correctly in a sentence."
  },
  "misconstrue": {
    "word": "Misconstrue",
    "pos": "verb",
    "simpleDefinition": "To interpret erroneously, to understand incorrectly; to misunderstand.",
    "banglaMeaning": "ভূল বোঝা",
    "synonyms": [
      "misunderstand",
      "misinterpret",
      "misconceive"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use misconstrue correctly in a sentence."
  },
  "miserable": {
    "word": "Miserable",
    "pos": "adjective",
    "simpleDefinition": "In a state of misery: very sad, ill, or poor.",
    "banglaMeaning": "শোচনীয়",
    "synonyms": [
      "hapless",
      "wretched",
      "abject"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use miserable correctly in a sentence."
  },
  "misogyny": {
    "word": "Misogyny",
    "pos": "noun",
    "simpleDefinition": "Hatred of, contempt for, or prejudice against women.",
    "banglaMeaning": "নারীদের ঘৃণা করে যে",
    "synonyms": [
      "misogynism"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use misogyny correctly in a sentence."
  },
  "mitigate": {
    "word": "Mitigate",
    "pos": "verb",
    "simpleDefinition": "To make less severe, painful, harmful, or harsh",
    "banglaMeaning": "প্রশমিত করা / লাঘব করা / প্রশমিত করা (কষ্ট / যপ্সণা )",
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
    "simpleDefinition": "Not bragging or boasting about oneself or one's achievements; unpretentious, humble.",
    "banglaMeaning": "বিনয়ী",
    "synonyms": [
      "coy",
      "demure",
      "plain"
    ],
    "antonyms": [
      "immodest"
    ],
    "example": "The student learned how to use modest correctly in a sentence."
  },
  "monopoly": {
    "word": "Monopoly",
    "pos": "noun",
    "simpleDefinition": "A situation, by legal privilege or other agreement, in which solely one party (company, cartel etc.) exclusively provides a particular product or service, dominating that market and generally exerting powerful control over it.",
    "banglaMeaning": "একচেটয়িা অধিকার",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use monopoly correctly in a sentence."
  },
  "monotheist": {
    "word": "Monotheist",
    "pos": "noun",
    "simpleDefinition": "A believer of monotheism, the doctrine that there is a single divine being in the universe.",
    "banglaMeaning": "একেশ্বরবাদী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use monotheist correctly in a sentence."
  },
  "monotonous": {
    "word": "Monotonous",
    "pos": "adjective",
    "simpleDefinition": "Tedious, repetitious, or lacking in variety.",
    "banglaMeaning": "একঘেয়ে",
    "synonyms": [
      "dull",
      "humdrum",
      "monotone"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use monotonous correctly in a sentence."
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
    "simpleDefinition": "At rest, stationary, immobile, not moving.",
    "banglaMeaning": "নিহ্নল",
    "synonyms": [
      "static",
      "unmoving",
      "inactive"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use motionless correctly in a sentence."
  },
  "mountebank": {
    "word": "Mountebank",
    "pos": "noun",
    "simpleDefinition": "One who sells by deception; a con artist.",
    "banglaMeaning": "যে ব্যক্তি চটকদার কথা বলে মানুষকে ঠকানোর চেষ্টা করে",
    "synonyms": [
      "charlatan"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use mountebank correctly in a sentence."
  },
  "muddle": {
    "word": "Muddle",
    "pos": "verb",
    "simpleDefinition": "To mix together, to mix up; to confuse.",
    "banglaMeaning": "বিষ্ণলতা",
    "synonyms": [
      "hole",
      "welter",
      "addle"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use muddle correctly in a sentence."
  },
  "multiple": {
    "word": "Multiple",
    "pos": "adjective",
    "simpleDefinition": "Having more than one element, part, component, or function, having more than one instance, occurring more than once, usually contrary to expectations (can be followed by a singular).",
    "banglaMeaning": "বস্থবিধ",
    "synonyms": [
      "aggregate",
      "treble",
      "multiplex"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use multiple correctly in a sentence."
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
    "simpleDefinition": "Hard to see through, as a fog or mist.",
    "banglaMeaning": "আবছা / অস্পষ্ট",
    "synonyms": [
      "turbid",
      "opaque",
      "cloudy"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use murky correctly in a sentence."
  },
  "muster": {
    "word": "Muster",
    "pos": "noun",
    "simpleDefinition": "Gathering.",
    "banglaMeaning": "সমবেশ",
    "synonyms": [
      "rally"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of muster."
  },
  "mutation": {
    "word": "Mutation",
    "pos": "noun",
    "simpleDefinition": "Any alteration or change.",
    "banglaMeaning": "পরিবর্তন",
    "synonyms": [
      "sport",
      "mutant"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use mutation correctly in a sentence."
  },
  "myopic": {
    "word": "Myopic",
    "pos": "adjective",
    "simpleDefinition": "Shortsighted; improvident.",
    "banglaMeaning": "ক্ষীনদৃষ্টি / সংকীণর্মনা",
    "synonyms": [
      "impaired",
      "shortsighted",
      "nearsighted"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use myopic correctly in a sentence."
  },
  "myriad": {
    "word": "Myriad",
    "pos": "noun",
    "simpleDefinition": "A countless number or multitude (of specified things).",
    "banglaMeaning": "অসংখ্য",
    "synonyms": [
      "innumerable",
      "multitudinous",
      "infinite"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use myriad correctly in a sentence."
  },
  "nadir": {
    "word": "Nadir",
    "pos": "noun",
    "simpleDefinition": "The lowest point; time of greatest depression.",
    "banglaMeaning": "র্সবনিল্ড বিন্দু",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use nadir correctly in a sentence."
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
    "simpleDefinition": "A person with the same name as another.",
    "banglaMeaning": "মিতা / অনে্যর নামের সাথে মিল",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use namesake correctly in a sentence."
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
    "simpleDefinition": "Able to be neglected, ignored or excluded from consideration; too small or unimportant to be of concern.",
    "banglaMeaning": "অবহেলার যোগ্য",
    "synonyms": [
      "paltry",
      "trifling",
      "minimal"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use negligible correctly in a sentence."
  },
  "negotiation": {
    "word": "Negotiation",
    "pos": "noun",
    "simpleDefinition": "The process of achieving agreement through discussion.",
    "banglaMeaning": "আলাপালোচনা",
    "synonyms": [
      "talks"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use negotiation correctly in a sentence."
  },
  "newborn": {
    "word": "Newborn",
    "pos": "noun",
    "simpleDefinition": "A recently born baby.",
    "banglaMeaning": "নবজাত",
    "synonyms": [
      "immature",
      "new",
      "neonate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use newborn correctly in a sentence."
  },
  "niggardly": {
    "word": "Niggardly",
    "pos": "adjective",
    "simpleDefinition": "Withholding for the sake of meanness; stingy, miserly.",
    "banglaMeaning": "মিতব্যয়ী / কিপটে",
    "synonyms": [
      "grudging",
      "stingy",
      "ungenerous"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use niggardly correctly in a sentence."
  },
  "ninny": {
    "word": "Ninny",
    "pos": "noun",
    "simpleDefinition": "A silly or foolish person.",
    "banglaMeaning": "বোকা জাতীয়",
    "synonyms": [
      "poop",
      "nincompoop"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use ninny correctly in a sentence."
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
    "simpleDefinition": "Mental apprehension of whatever may be known, thought, or imagined; idea, concept.",
    "banglaMeaning": "ধারণা",
    "synonyms": [
      "feeling",
      "belief",
      "impression"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use notion correctly in a sentence."
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
    "pos": "adverb",
    "simpleDefinition": "Nevertheless, all the same.",
    "banglaMeaning": "তথাপি / যদিও",
    "synonyms": [
      "nonetheless",
      "nevertheless",
      "withal"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use notwithstanding correctly in a sentence."
  },
  "nourishing": {
    "word": "Nourishing",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being nourishing.",
    "banglaMeaning": "পুষ্টিকর",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use nourishing correctly in a sentence."
  },
  "novice": {
    "word": "Novice",
    "pos": "noun",
    "simpleDefinition": "A beginner who is new to a field, sport, or activity",
    "banglaMeaning": "শিক্ষানবিস / আনাড়ি / নতুন নিয়োগপ্রাপ্ত অনভিন্ত্র র্কমশী",
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
    "simpleDefinition": "Trivial, trifling or of little importance.",
    "banglaMeaning": "বাদ দেয়া",
    "synonyms": [
      "void",
      "null",
      "invalid"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use nugatory correctly in a sentence."
  },
  "oath": {
    "word": "Oath",
    "pos": "noun",
    "simpleDefinition": "A solemn pledge or promise that invokes a deity, a ruler, or another entity (not necessarily present) to attest the truth of a statement or sincerity of one's desire to fulfill a contract or promise.",
    "banglaMeaning": "শপথ করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use oath correctly in a sentence."
  },
  "obdurate": {
    "word": "Obdurate",
    "pos": "adjective",
    "simpleDefinition": "Stubbornly persistent, generally in wrongdoing; refusing to reform or repent.",
    "banglaMeaning": "অনমনীয়",
    "synonyms": [
      "obstinate",
      "heartless",
      "stony"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use obdurate correctly in a sentence."
  },
  "obese": {
    "word": "Obese",
    "pos": "adjective",
    "simpleDefinition": "Extremely overweight, especially: weighing more than 20% (for men) or 25% (for women) over their conventionally ideal weight determined by height and build; or, having a body mass index over 30 kg/m².",
    "banglaMeaning": "মোটা / স্থূলকায়",
    "synonyms": [
      "corpulent",
      "weighty",
      "rotund"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use obese correctly in a sentence."
  },
  "obliged": {
    "word": "Obliged",
    "pos": "verb",
    "simpleDefinition": "To constrain someone by force or by social, moral or legal means.",
    "banglaMeaning": "বাধিত বা ঋণী হয়েছে এমন",
    "synonyms": [
      "obligated"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "I am obliged to report to the police station every week."
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
    "simpleDefinition": "The quality of being oblique in direction, deviating from the horizontal or vertical; or the angle created by such a deviation.",
    "banglaMeaning": "বক্রতো",
    "synonyms": [
      "deceptiveness",
      "asynclitism"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use obliquity correctly in a sentence."
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
    "simpleDefinition": "Alert and paying close attention; watchful.",
    "banglaMeaning": "দৃষ্টিশীল / মনোযোগী",
    "synonyms": [
      "perceptive",
      "attentive",
      "observing"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use observant correctly in a sentence."
  },
  "obsolescence": {
    "word": "Obsolescence",
    "pos": "noun",
    "simpleDefinition": "The state of being obsolete—no longer in use; gone into disuse; disused or neglected.",
    "banglaMeaning": "অপ্রচলিত",
    "synonyms": [
      "obsoleteness",
      "superannuation"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use obsolescence correctly in a sentence."
  },
  "obsolete": {
    "word": "Obsolete",
    "pos": "adjective",
    "simpleDefinition": "No longer in use; gone into disuse; disused or neglected (often in favour of something newer).",
    "banglaMeaning": "পুরাতন / অপ্রচলিত",
    "synonyms": [
      "outdated",
      "superannuated",
      "disused"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use obsolete correctly in a sentence."
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
    "simpleDefinition": "To possess or use the time or capacity of; to engage the service of.",
    "banglaMeaning": "দখলে রাখা",
    "synonyms": [
      "concern",
      "engage",
      "worry"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use occupy correctly in a sentence."
  },
  "odds and ends": {
    "word": "Odds and ends",
    "pos": "noun",
    "simpleDefinition": "Various small remnants, miscellaneous items, or trivial objects",
    "banglaMeaning": "ছোটখাট জিনিস",
    "synonyms": [
      "bits and pieces",
      "sundries",
      "miscellanea"
    ],
    "antonyms": [
      "complete set"
    ],
    "example": "She kept needles, buttons, and odds and ends in the drawer."
  },
  "offended": {
    "word": "Offended",
    "pos": "adjective",
    "simpleDefinition": "Hurt or upset.",
    "banglaMeaning": "বিক্ষুল্ট",
    "synonyms": [
      "displeased",
      "pained"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use offended correctly in a sentence."
  },
  "offshore": {
    "word": "Offshore",
    "pos": "adjective",
    "simpleDefinition": "Located in another country, especially one having beneficial tax laws or labor costs.",
    "banglaMeaning": "সাগরমুখী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "onshore",
      "inshore",
      "seaward"
    ],
    "example": "The student learned how to use offshore correctly in a sentence."
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
    "simpleDefinition": "The act of omitting.",
    "banglaMeaning": "ভ্রানি্ত",
    "synonyms": [
      "deletion",
      "skip"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use omission correctly in a sentence."
  },
  "omnipotent": {
    "word": "Omnipotent",
    "pos": "adjective",
    "simpleDefinition": "Having unlimited power, force or authority.",
    "banglaMeaning": "র্সবশক্তিমান (আহ্ণাহ )",
    "synonyms": [
      "powerful",
      "almighty",
      "all-powerful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use omnipotent correctly in a sentence."
  },
  "on their toes": {
    "word": "On their toes",
    "pos": "idiom",
    "simpleDefinition": "Alert, active, and prepared for any sudden event",
    "banglaMeaning": "সজাগ সর্তক হওয়া",
    "synonyms": [
      "alert",
      "vigilant",
      "watchful"
    ],
    "antonyms": [
      "complacent",
      "inattentive"
    ],
    "example": "The surprise inspections kept the employees on their toes."
  },
  "onerous": {
    "word": "Onerous",
    "pos": "adjective",
    "simpleDefinition": "Imposing or constituting a physical, mental, or figurative load which can be borne only with effort; burdensome.",
    "banglaMeaning": "কষ্টসাধ্য বা পরিঙ্কমসাধ্য কিছু",
    "synonyms": [
      "heavy",
      "burdensome",
      "taxing"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use onerous correctly in a sentence."
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
    "simpleDefinition": "A person who expects a favourable outcome.",
    "banglaMeaning": "আশাবাদী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "pessimist"
    ],
    "example": "The student learned how to use optimist correctly in a sentence."
  },
  "oracular": {
    "word": "Oracular",
    "pos": "adjective",
    "simpleDefinition": "Prophetic, foretelling the future.",
    "banglaMeaning": "ন্ত্রানবিশিষ্ট",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use oracular correctly in a sentence."
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
    "simpleDefinition": "Neat and tidy; possessing order.",
    "banglaMeaning": "গোছালো",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "disorderly"
    ],
    "example": "The student learned how to use orderly correctly in a sentence."
  },
  "ore": {
    "word": "Ore",
    "pos": "noun",
    "simpleDefinition": "Rock or other material that contains valuable or utilitarian materials; primarily a rock containing metals or gems for which it is typically mined and processed.",
    "banglaMeaning": "আকরিক",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use ore correctly in a sentence."
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
    "simpleDefinition": "To exceed something or someone else, especially in an obvious or flamboyant manner.",
    "banglaMeaning": "ঔস্থলে্য ছাপিয়ে যাওয়া",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use outshine correctly in a sentence."
  },
  "override": {
    "word": "Override",
    "pos": "verb",
    "simpleDefinition": "To counteract the normal operation of something; to countermand with orders of higher priority.",
    "banglaMeaning": "অগ্রাহ্য করা",
    "synonyms": [
      "reverse",
      "overturn",
      "overrule"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use override correctly in a sentence."
  },
  "overt": {
    "word": "Overt",
    "pos": "adjective",
    "simpleDefinition": "Open and not concealed or secret.",
    "banglaMeaning": "প্রকাশ্য",
    "synonyms": [
      "obvious",
      "open",
      "raw"
    ],
    "antonyms": [
      "covert"
    ],
    "example": "The student learned how to use overt correctly in a sentence."
  },
  "owe": {
    "word": "Owe",
    "pos": "verb",
    "simpleDefinition": "To be under an obligation to give something back to someone or to perform some action for someone.",
    "banglaMeaning": "ঋণী থাকা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use owe correctly in a sentence."
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
    "simpleDefinition": "An agreement; a compact; a covenant.",
    "banglaMeaning": "চুক্তি",
    "synonyms": [
      "accord",
      "treaty"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pact correctly in a sentence."
  },
  "painstaking": {
    "word": "Painstaking",
    "pos": "adjective",
    "simpleDefinition": "Carefully attentive to details; studious; diligent in performing a process or procedure.",
    "banglaMeaning": "পরিঙ্কমী",
    "synonyms": [
      "conscientious",
      "scrupulous",
      "careful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use painstaking correctly in a sentence."
  },
  "paleontology": {
    "word": "Paleontology",
    "pos": "noun",
    "simpleDefinition": "Study of the forms of life existing in prehistoric or geologic times, especially as represented by fossils.",
    "banglaMeaning": "জীবাহ্ল বিন্ত্রান",
    "synonyms": [
      "Related to paleontology",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of paleontology."
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
    "simpleDefinition": "Treated with excessive attention and care; spoiled or overindulged.",
    "banglaMeaning": "অত্যাধিক প্রঙ্কয়",
    "synonyms": [
      "soft",
      "coddled",
      "spoiled"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pampered correctly in a sentence."
  },
  "panic": {
    "word": "Panic",
    "pos": "noun",
    "simpleDefinition": "Overwhelming fear or fright, often affecting groups of people or animals; (countable) an instance of this; a fright, a scare.",
    "banglaMeaning": "ভয় পাওয়া",
    "synonyms": [
      "scare",
      "terror"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use panic correctly in a sentence."
  },
  "pantheist": {
    "word": "Pantheist",
    "pos": "noun",
    "simpleDefinition": "A person who believes in pantheism.",
    "banglaMeaning": "সবের্শ্বরবাদী",
    "synonyms": [
      "pantheistic"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pantheist correctly in a sentence."
  },
  "parallelism": {
    "word": "Parallelism",
    "pos": "noun",
    "simpleDefinition": "The state or condition of being parallel; agreement in direction, tendency, or character.",
    "banglaMeaning": "সমান্তরাল",
    "synonyms": [
      "correspondence"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use parallelism correctly in a sentence."
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
    "banglaMeaning": "কৃপণ / মিতব্যয়ী / মিতব্যয়ী / মিতব্যয়ী / কিপটে",
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
    "simpleDefinition": "Existing as a part or portion; incomplete.",
    "banglaMeaning": "পক্ষপাতী",
    "synonyms": [
      "fond",
      "slanted",
      "biased"
    ],
    "antonyms": [
      "fair",
      "impartial"
    ],
    "example": "The student learned how to use partial correctly in a sentence."
  },
  "partisan": {
    "word": "Partisan",
    "pos": "noun",
    "simpleDefinition": "A fervent, sometimes militant, supporter or proponent of a party, cause, faction, person, or idea.",
    "banglaMeaning": "পক্ষপাতী",
    "synonyms": [
      "irregular",
      "aligned",
      "sectarian"
    ],
    "antonyms": [
      "nonpartisan",
      "nonpartizan"
    ],
    "example": "The student learned how to use partisan correctly in a sentence."
  },
  "pathetic": {
    "word": "Pathetic",
    "pos": "adjective",
    "simpleDefinition": "Arousing pity, sympathy, or compassion; exciting pathos.",
    "banglaMeaning": "করুন / মর্মস্পশর্শী",
    "synonyms": [
      "hapless",
      "wretched",
      "pitiful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pathetic correctly in a sentence."
  },
  "patronage": {
    "word": "Patronage",
    "pos": "noun",
    "simpleDefinition": "The act of providing approval and support; backing; championship.",
    "banglaMeaning": "সহযোগিতা",
    "synonyms": [
      "disdain",
      "support",
      "condescension"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use patronage correctly in a sentence."
  },
  "paucity": {
    "word": "Paucity",
    "pos": "noun",
    "simpleDefinition": "A smallness in size or amount that is insufficient; meagerness, dearth.",
    "banglaMeaning": "অভাব",
    "synonyms": [
      "dearth"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use paucity correctly in a sentence."
  },
  "pay off old scores": {
    "word": "Pay off old scores",
    "pos": "idiom",
    "simpleDefinition": "To get revenge for past injuries or grievances",
    "banglaMeaning": "প্রতিশোধ নেয়া",
    "synonyms": [
      "take revenge",
      "settle scores",
      "retaliate"
    ],
    "antonyms": [
      "forgive",
      "pardon"
    ],
    "example": "He used the opportunity to pay off old scores with his rival."
  },
  "peak": {
    "word": "Peak",
    "pos": "noun",
    "simpleDefinition": "The highest value reached by some quantity in a time period.",
    "banglaMeaning": "সবের্াচ্চ চূড়া",
    "synonyms": [
      "flush",
      "crest",
      "point"
    ],
    "antonyms": [
      "off-peak"
    ],
    "example": "The student learned how to use peak correctly in a sentence."
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
    "simpleDefinition": "The base or foot of a column, statue, vase, lamp.",
    "banglaMeaning": "স্তশে্রর পাদভূমি",
    "synonyms": [
      "Related to pedestal",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of pedestal."
  },
  "pedestrian": {
    "word": "Pedestrian",
    "pos": "noun",
    "simpleDefinition": "A walker; one who walks or goes on foot, especially as opposed to one who uses a vehicle.",
    "banglaMeaning": "পথচারী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pedestrian correctly in a sentence."
  },
  "pensive": {
    "word": "Pensive",
    "pos": "adjective",
    "simpleDefinition": "Engaged in, involving, or reflecting deep or serious thought.",
    "banglaMeaning": "চিন্তানিমঞ্জ",
    "synonyms": [
      "wistful",
      "musing",
      "sad"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pensive correctly in a sentence."
  },
  "perjury": {
    "word": "Perjury",
    "pos": "noun",
    "simpleDefinition": "The deliberate giving of false or misleading testimony under oath.",
    "banglaMeaning": "শপথভাণ্ট",
    "synonyms": [
      "false",
      "testimony",
      "oathbreach"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "We declare under penalty of perjury that the foregoing is true and correct."
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
    "simpleDefinition": "To cause to feel baffled; to puzzle.",
    "banglaMeaning": "জটলি করা",
    "synonyms": [
      "trounce",
      "beat",
      "get"
    ],
    "antonyms": [
      "simplify"
    ],
    "example": "The student learned how to use perplex correctly in a sentence."
  },
  "persevering": {
    "word": "Persevering",
    "pos": "adjective",
    "simpleDefinition": "Tending to persevere.",
    "banglaMeaning": "পরিঙ্কমী",
    "synonyms": [
      "diligent",
      "patient"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use persevering correctly in a sentence."
  },
  "persistent": {
    "word": "Persistent",
    "pos": "adjective",
    "simpleDefinition": "Obstinately refusing to give up or let go.",
    "banglaMeaning": "নাছোড়বান্দা",
    "synonyms": [
      "relentless",
      "continual",
      "unrelenting"
    ],
    "antonyms": [
      "shed",
      "caducous"
    ],
    "example": "The student learned how to use persistent correctly in a sentence."
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
    "simpleDefinition": "Someone who habitually expects the worst outcome; one who looks on the dark side of things.",
    "banglaMeaning": "হতাশাবাদী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "optimist"
    ],
    "example": "The student learned how to use pessimist correctly in a sentence."
  },
  "petrology": {
    "word": "Petrology",
    "pos": "noun",
    "simpleDefinition": "The study of the origin, composition and structure of rock.",
    "banglaMeaning": "শিলাতধ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use petrology correctly in a sentence."
  },
  "philanthropist": {
    "word": "Philanthropist",
    "pos": "noun",
    "simpleDefinition": "A person or institution who seeks to improve the world, especially by monetary gifts.",
    "banglaMeaning": "মানবহিৈতষী ব্যক্তি (বিশ্বপে্রমিক)",
    "synonyms": [
      "altruist"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use philanthropist correctly in a sentence."
  },
  "philatelist": {
    "word": "Philatelist",
    "pos": "noun",
    "simpleDefinition": "A person who collects and studies postage stamps.",
    "banglaMeaning": "ডাকটকিেট সংগ্রহকারী",
    "synonyms": [
      "stamp collector"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use philatelist correctly in a sentence."
  },
  "pilferer": {
    "word": "Pilferer",
    "pos": "noun",
    "simpleDefinition": "One who pilfers.",
    "banglaMeaning": "ছিঁচকে চোর",
    "synonyms": [
      "sneak thief"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pilferer correctly in a sentence."
  },
  "piquant": {
    "word": "Piquant",
    "pos": "adjective",
    "simpleDefinition": "Having the qualities or characteristics of piquant.",
    "banglaMeaning": "তীজ্ঞ / কটু",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use piquant correctly in a sentence."
  },
  "pitfall": {
    "word": "Pitfall",
    "pos": "noun",
    "simpleDefinition": "A potential, unsuspected, hidden problem, hazard, or danger that is easily encountered but not immediately obvious.",
    "banglaMeaning": "ফাঁদ",
    "synonyms": [
      "pit"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pitfall correctly in a sentence."
  },
  "pithy": {
    "word": "Pithy",
    "pos": "adjective",
    "simpleDefinition": "Concise and meaningful.",
    "banglaMeaning": "সংকি্ষপ্ত",
    "synonyms": [
      "concise",
      "sententious",
      "sententiously"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pithy correctly in a sentence."
  },
  "pittance": {
    "word": "Pittance",
    "pos": "noun",
    "simpleDefinition": "A meagre allowance of money or wages.",
    "banglaMeaning": "সামান্য বেতন",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pittance correctly in a sentence."
  },
  "placatory": {
    "word": "Placatory",
    "pos": "adjective",
    "simpleDefinition": "That placates; pacifying.",
    "banglaMeaning": "আপোস",
    "synonyms": [
      "appeasing",
      "conciliatory",
      "placating"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use placatory correctly in a sentence."
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
    "simpleDefinition": "The condition of being plain (in all senses).",
    "banglaMeaning": "সরলতা",
    "synonyms": [
      "perspicuity",
      "homeliness",
      "perspicuousness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use plainness correctly in a sentence."
  },
  "plaintiff": {
    "word": "Plaintiff",
    "pos": "noun",
    "simpleDefinition": "A party bringing a suit in civil law against a defendant; accuser.",
    "banglaMeaning": "বাদী",
    "synonyms": [
      "complainant"
    ],
    "antonyms": [
      "accused",
      "defendant",
      "suspect"
    ],
    "example": "The student learned how to use plaintiff correctly in a sentence."
  },
  "plausibility": {
    "word": "Plausibility",
    "pos": "noun",
    "simpleDefinition": "The fact of being believable; believability, credibility.",
    "banglaMeaning": "বিশ্বাসযোগ্যতা",
    "synonyms": [
      "plausibleness"
    ],
    "antonyms": [
      "implausibility",
      "implausibleness"
    ],
    "example": "The student learned how to use plausibility correctly in a sentence."
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
    "simpleDefinition": "A more-than-adequate amount; plenitude.",
    "banglaMeaning": "প্রচুর",
    "synonyms": [
      "slew",
      "spate",
      "mass"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use plenty correctly in a sentence."
  },
  "plethora": {
    "word": "Plethora",
    "pos": "noun",
    "simpleDefinition": "An excessive amount or number; an abundance.",
    "banglaMeaning": "আধিক্য বা প্রচুর পরিমাণ",
    "synonyms": [
      "nimiety",
      "superfluity",
      "embarrassment"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use plethora correctly in a sentence."
  },
  "plucky": {
    "word": "Plucky",
    "pos": "adjective",
    "simpleDefinition": "Having or showing pluck, courage or spirit in trying circumstances.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "spirited",
      "spunky",
      "feisty"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use plucky correctly in a sentence."
  },
  "poignant": {
    "word": "Poignant",
    "pos": "adjective",
    "simpleDefinition": "Having the qualities or characteristics of poignant.",
    "banglaMeaning": "জ্ঞানিকর / দুঃখ উদে্রককারী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use poignant correctly in a sentence."
  },
  "polity": {
    "word": "Polity",
    "pos": "noun",
    "simpleDefinition": "An organizational structure of the government of a state, church, etc.",
    "banglaMeaning": "রাজ্ঞ ব্যবস্থা",
    "synonyms": [
      "Related to polity",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of polity."
  },
  "polyglot": {
    "word": "Polyglot",
    "pos": "noun",
    "simpleDefinition": "One who has mastered, notably speaks, several languages.",
    "banglaMeaning": "বস্থভাষী",
    "synonyms": [
      "Related to polyglot",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of polyglot."
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
    "simpleDefinition": "To consider (something) carefully and thoroughly.",
    "banglaMeaning": "গভীরভাবে চিন্তা করা",
    "synonyms": [
      "ruminate",
      "contemplate",
      "speculate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use ponder correctly in a sentence."
  },
  "pose": {
    "word": "Pose",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being pose.",
    "banglaMeaning": "জাহির করা",
    "synonyms": [
      "present",
      "set",
      "model"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pose correctly in a sentence."
  },
  "possess": {
    "word": "Possess",
    "pos": "verb",
    "simpleDefinition": "To have (something) as, or as if as, an owner; to have, to own.",
    "banglaMeaning": "করায়ধ করা",
    "synonyms": [
      "have",
      "own"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use possess correctly in a sentence."
  },
  "possessed": {
    "word": "Possessed",
    "pos": "adjective",
    "simpleDefinition": "Having; owning. [with of].",
    "banglaMeaning": "অধিকারী",
    "synonyms": [
      "berserk",
      "amok",
      "amuck"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use possessed correctly in a sentence."
  },
  "postscript": {
    "word": "Postscript",
    "pos": "noun",
    "simpleDefinition": "An addendum to a letter, added after the author's signature.",
    "banglaMeaning": "অতিরিক্ত বা র্সবশেষ তথ্য",
    "synonyms": [
      "supplement",
      "addendum",
      "ps"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use postscript correctly in a sentence."
  },
  "postulate": {
    "word": "Postulate",
    "pos": "noun",
    "simpleDefinition": "Something assumed without proof as being self-evident or generally accepted, especially when used as a basis for an argument. Sometimes distinguished from axioms as being relevant to a particular science or context, rather than universally true, and following from other axioms rather than being an absolute assumption.",
    "banglaMeaning": "স্বীকার্য",
    "synonyms": [
      "contend",
      "posit"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use postulate correctly in a sentence."
  },
  "potty": {
    "word": "Potty",
    "pos": "noun",
    "simpleDefinition": "A small, usually plastic, chamber pot used to toilet-train small children.",
    "banglaMeaning": "তুজ্ঞ",
    "synonyms": [
      "besotted",
      "stiff",
      "wet"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use potty correctly in a sentence."
  },
  "pout": {
    "word": "Pout",
    "pos": "verb",
    "simpleDefinition": "To be or pretend to be ill-tempered; to sulk.",
    "banglaMeaning": "বিরক্তিভাব / ঠোঁট ফুলিয়ে রাগ দেখানো",
    "synonyms": [
      "brood",
      "moue",
      "sulk"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pout correctly in a sentence."
  },
  "pragmatic": {
    "word": "Pragmatic",
    "pos": "adjective",
    "simpleDefinition": "Practical, concerned with making decisions and actions that are useful in practice, not just theory.",
    "banglaMeaning": "বাস্তবধর্মশী প্রয়োগবাদী",
    "synonyms": [
      "practical",
      "realistic",
      "hard-nosed"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pragmatic correctly in a sentence."
  },
  "preamble": {
    "word": "Preamble",
    "pos": "noun",
    "simpleDefinition": "A short preliminary statement or remark, especially an explanatory introduction to a formal document or statute.",
    "banglaMeaning": "প্রস্তাবনা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use preamble correctly in a sentence."
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
    "simpleDefinition": "Both exact and accurate.",
    "banglaMeaning": "সংকি্ষপ্ত করা / অতিসর্তক",
    "synonyms": [
      "meticulous",
      "dead",
      "fine"
    ],
    "antonyms": [
      "imprecise"
    ],
    "example": "The student learned how to use precise correctly in a sentence."
  },
  "predominance": {
    "word": "Predominance",
    "pos": "noun",
    "simpleDefinition": "The condition or state of being predominant; ascendancy, domination, preeminence, preponderance.",
    "banglaMeaning": "আধিপত্য",
    "synonyms": [
      "predomination"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use predominance correctly in a sentence."
  },
  "preface": {
    "word": "Preface",
    "pos": "noun",
    "simpleDefinition": "A beginning or introductory portion that comes before the main text of a document or book, typically serving to contextualize or explain the writing of the book and sometimes to acknowledge others' contributions; especially, such a discussion written by the work's own author.",
    "banglaMeaning": "প্রস্তাবনা",
    "synonyms": [
      "premise",
      "introduce",
      "foreword"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use preface correctly in a sentence."
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
    "simpleDefinition": "Having prejudices.",
    "banglaMeaning": "পক্ষপাতী",
    "synonyms": [
      "subjective",
      "loaded",
      "jaundiced"
    ],
    "antonyms": [
      "impartial",
      "unprejudiced"
    ],
    "example": "The student learned how to use prejudiced correctly in a sentence."
  },
  "preponderance": {
    "word": "Preponderance",
    "pos": "noun",
    "simpleDefinition": "Superiority in amount or number; the bulk or majority; also, a large amount or number; an abundance, a profusion.",
    "banglaMeaning": "ভারাধিক্য",
    "synonyms": [
      "prevalence"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use preponderance correctly in a sentence."
  },
  "pressing": {
    "word": "Pressing",
    "pos": "adjective",
    "simpleDefinition": "Needing urgent attention.",
    "banglaMeaning": "জরুরী",
    "synonyms": [
      "imperative",
      "press",
      "pressure"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pressing correctly in a sentence."
  },
  "pressurizing": {
    "word": "Pressurizing",
    "pos": "noun",
    "simpleDefinition": "The act or process of increasing pressure within a volume of space.",
    "banglaMeaning": "চাপ প্রয়োগ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pressurizing correctly in a sentence."
  },
  "pretend": {
    "word": "Pretend",
    "pos": "verb",
    "simpleDefinition": "To speak or behave so as to give a false or simulated appearance.",
    "banglaMeaning": "সাজা / মিথ্যা বণর্না করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pretend correctly in a sentence."
  },
  "pretentious": {
    "word": "Pretentious",
    "pos": "adjective",
    "simpleDefinition": "Attempting to impress by pretending to possess greater importance or skill",
    "banglaMeaning": "ভণ্ডামিযুক্ত / আত্মম্ভরী / দাশি্রক",
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
    "pos": "noun",
    "simpleDefinition": "A considerable or substantial sum of money",
    "banglaMeaning": "অত্যন্ত ব্যয় বস্থল",
    "synonyms": [
      "fortune",
      "large sum",
      "tidy sum"
    ],
    "antonyms": [
      "pittance",
      "small change"
    ],
    "example": "Renovating the vintage car cost a pretty penny."
  },
  "prevalent": {
    "word": "Prevalent",
    "pos": "adjective",
    "simpleDefinition": "Widespread or preferred.",
    "banglaMeaning": "প্রচলিত",
    "synonyms": [
      "rife",
      "prevailing",
      "current"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use prevalent correctly in a sentence."
  },
  "prevaricator": {
    "word": "Prevaricator",
    "pos": "noun",
    "simpleDefinition": "One who prevaricates.",
    "banglaMeaning": "সতে্যর আলাপকারী",
    "synonyms": [
      "liar"
    ],
    "antonyms": [
      "straight arrow",
      "square shooter"
    ],
    "example": "The student learned how to use prevaricator correctly in a sentence."
  },
  "prick": {
    "word": "Prick",
    "pos": "noun",
    "simpleDefinition": "A small hole or perforation, caused by piercing.",
    "banglaMeaning": "ছিদ্র করা",
    "synonyms": [
      "Related to prick",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of prick."
  },
  "prima facie": {
    "word": "Prima facie",
    "pos": "adjective",
    "simpleDefinition": "Based on first impression; accepted as true until disproved",
    "banglaMeaning": "প্রথম দশর্নে",
    "synonyms": [
      "apparent",
      "evident",
      "at first sight"
    ],
    "antonyms": [
      "doubtful",
      "unproven"
    ],
    "example": "There was prima facie evidence that a fraud had occurred."
  },
  "procession": {
    "word": "Procession",
    "pos": "noun",
    "simpleDefinition": "A group of people or things moving along in an orderly, stately, or solemn manner; a train of persons advancing in order; a retinue.",
    "banglaMeaning": "মিছিল বা শোভাযাত্র",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use procession correctly in a sentence."
  },
  "prodigal": {
    "word": "Prodigal",
    "pos": "adjective",
    "simpleDefinition": "Wastefully extravagant.",
    "banglaMeaning": "বেহিসাবী ভাবে ব্যয় করা",
    "synonyms": [
      "profligate",
      "lavish",
      "extravagant"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use prodigal correctly in a sentence."
  },
  "prodigy": {
    "word": "Prodigy",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being prodigy.",
    "banglaMeaning": "বৈদত্য",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use prodigy correctly in a sentence."
  },
  "profane": {
    "word": "Profane",
    "pos": "adjective",
    "simpleDefinition": "Treating sacred things with contempt, disrespect, irreverence, or scorn; blasphemous, impious.",
    "banglaMeaning": "অপবিত্র করা",
    "synonyms": [
      "vitiate",
      "blue",
      "outrage"
    ],
    "antonyms": [
      "sacred"
    ],
    "example": "The student learned how to use profane correctly in a sentence."
  },
  "profligate": {
    "word": "Profligate",
    "pos": "adjective",
    "simpleDefinition": "Inclined to waste resources or behave extravagantly.",
    "banglaMeaning": "লশ্মট",
    "synonyms": [
      "libertine",
      "extravagant",
      "degenerate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use profligate correctly in a sentence."
  },
  "proliferate": {
    "word": "Proliferate",
    "pos": "verb",
    "simpleDefinition": "To increase in number or spread rapidly; to multiply.",
    "banglaMeaning": "সংখ্যায় বৃদি্ধ পাওয়া",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use proliferate correctly in a sentence."
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
    "simpleDefinition": "Quick; acting without delay.",
    "banglaMeaning": "দ্রুত",
    "synonyms": [
      "incite",
      "propel",
      "instigate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use prompt correctly in a sentence."
  },
  "propensity": {
    "word": "Propensity",
    "pos": "noun",
    "simpleDefinition": "An inclination, disposition, tendency, preference, or attraction.",
    "banglaMeaning": "প্রবণতা",
    "synonyms": [
      "proclivity",
      "tendency",
      "leaning"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use propensity correctly in a sentence."
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
    "simpleDefinition": "In proportion; proportional; commensurable.",
    "banglaMeaning": "আনুপাতিক",
    "synonyms": [
      "harmonious",
      "corresponding",
      "relative"
    ],
    "antonyms": [
      "disproportionate",
      "disproportional"
    ],
    "example": "The student learned how to use proportionate correctly in a sentence."
  },
  "protract": {
    "word": "Protract",
    "pos": "verb",
    "simpleDefinition": "To draw out; to extend, especially in duration.",
    "banglaMeaning": "দীঘর্ায়িত করা",
    "synonyms": [
      "extend",
      "prolong",
      "draw out"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use protract correctly in a sentence."
  },
  "provincial": {
    "word": "Provincial",
    "pos": "adjective",
    "simpleDefinition": "Exhibiting the ways or manners of a province; characteristic of the inhabitants of a province.",
    "banglaMeaning": "সীমাবদ্ধ",
    "synonyms": [
      "bucolic",
      "rustic",
      "parochial"
    ],
    "antonyms": [
      "cosmopolitan"
    ],
    "example": "The student learned how to use provincial correctly in a sentence."
  },
  "provocation": {
    "word": "Provocation",
    "pos": "noun",
    "simpleDefinition": "The act of provoking, inciting or annoying someone into doing something.",
    "banglaMeaning": "প্ররোচনা",
    "synonyms": [
      "aggravation",
      "irritation",
      "incitement"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use provocation correctly in a sentence."
  },
  "proximate": {
    "word": "Proximate",
    "pos": "adjective",
    "simpleDefinition": "Close or closest; adjacent.",
    "banglaMeaning": "নিকটতম",
    "synonyms": [
      "close",
      "immediate"
    ],
    "antonyms": [
      "ultimate"
    ],
    "example": "The student learned how to use proximate correctly in a sentence."
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
    "simpleDefinition": "A fictitious name (more literally, a false name), as those used by writers and movie stars.",
    "banglaMeaning": "ছদ্মনাম",
    "synonyms": [
      "anonym",
      "nom de guerre"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pseudonym correctly in a sentence."
  },
  "publicize": {
    "word": "Publicize",
    "pos": "verb",
    "simpleDefinition": "Alternative spelling of publicise. [To make widely known to the public.].",
    "banglaMeaning": "প্রচার করা",
    "synonyms": [
      "bare",
      "air",
      "advertize"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use publicize correctly in a sentence."
  },
  "puerile": {
    "word": "Puerile",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being puerile.",
    "banglaMeaning": "তুজ্ঞ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use puerile correctly in a sentence."
  },
  "punctilious": {
    "word": "Punctilious",
    "pos": "adjective",
    "simpleDefinition": "Strictly attentive to detail; meticulous or fastidious, particularly to codes or conventions.",
    "banglaMeaning": "খুঁটনিাটি ব্যাপারে অতি সর্তক",
    "synonyms": [
      "meticulous",
      "precise"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use punctilious correctly in a sentence."
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
    "pos": "verb",
    "simpleDefinition": "To promote or aggressively market goods for quick sale",
    "banglaMeaning": "জোর করে বিকি্রে করা",
    "synonyms": [
      "promote",
      "market",
      "boost sales"
    ],
    "antonyms": [
      "discourage sales"
    ],
    "example": "The store offered big discounts to push sale of old stock."
  },
  "pusillanimous": {
    "word": "Pusillanimous",
    "pos": "adjective",
    "simpleDefinition": "Showing ignoble cowardice, or contemptible timidity.",
    "banglaMeaning": "ভীতু",
    "synonyms": [
      "fearful",
      "cowardly",
      "unmanly"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use pusillanimous correctly in a sentence."
  },
  "put up with": {
    "word": "Put up with",
    "pos": "verb",
    "simpleDefinition": "To tolerate or endure something unpleasant patiently",
    "banglaMeaning": "সহ্য করা",
    "synonyms": [
      "tolerate",
      "bear",
      "stand"
    ],
    "antonyms": [
      "reject",
      "forbid"
    ],
    "example": "She refused to put up with his rude behavior any longer."
  },
  "puzzling": {
    "word": "Puzzling",
    "pos": "adjective",
    "simpleDefinition": "Difficult to understand or explain; enigmatic or confusing; perplexing.",
    "banglaMeaning": "বিভ্রানি্তকর",
    "synonyms": [
      "enigmatic",
      "incomprehensible",
      "perplexing"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use puzzling correctly in a sentence."
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
    "simpleDefinition": "Argumentative; fond of or prone to quarreling.",
    "banglaMeaning": "ঝগড়াটে",
    "synonyms": [
      "argumentative",
      "arguing"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use quarrelsome correctly in a sentence."
  },
  "quash": {
    "word": "Quash",
    "pos": "verb",
    "simpleDefinition": "To defeat decisively, to suppress.",
    "banglaMeaning": "বাতিল করা",
    "synonyms": [
      "void",
      "subjugate",
      "subdue"
    ],
    "antonyms": [
      "validate",
      "formalize"
    ],
    "example": "The student learned how to use quash correctly in a sentence."
  },
  "queer": {
    "word": "Queer",
    "pos": "adjective",
    "simpleDefinition": "Non-heterosexual or non-cisgender: homosexual, bisexual, asexual, transgender, etc.",
    "banglaMeaning": "অদ্বুত",
    "synonyms": [
      "peculiar",
      "thwart",
      "strange"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use queer correctly in a sentence."
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
    "simpleDefinition": "A line of people, vehicles or other objects, usually one to be dealt with in sequence (i.e., the one at the front end is dealt with first, the one behind is dealt with next, and so on), and which newcomers join at the opposite end (the back).",
    "banglaMeaning": "লাইন",
    "synonyms": [
      "line up",
      "waiting line",
      "queue up"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use queue correctly in a sentence."
  },
  "raconteur": {
    "word": "Raconteur",
    "pos": "noun",
    "simpleDefinition": "A storyteller, especially a person noted for telling stories with skill and wit.",
    "banglaMeaning": "গস্ফকথক",
    "synonyms": [
      "anecdotist"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use raconteur correctly in a sentence."
  },
  "rampage": {
    "word": "Rampage",
    "pos": "noun",
    "simpleDefinition": "A course of violent, frenzied action.",
    "banglaMeaning": "উতে্তজিত অবস্থা",
    "synonyms": [
      "Related to rampage",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of rampage."
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
    "simpleDefinition": "The members of an organization, community, etc. who are not in leadership positions.",
    "banglaMeaning": "সাধারণ জনগণ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use rank and file correctly in a sentence."
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
    "simpleDefinition": "Capable of reasoning.",
    "banglaMeaning": "যুক্তিসণ্টত / বিবেকী / যুক্তিসম্মত",
    "synonyms": [
      "intelligent",
      "mental",
      "reasonable"
    ],
    "antonyms": [
      "irrational"
    ],
    "example": "The student learned how to use rational correctly in a sentence."
  },
  "ravages": {
    "word": "Ravages",
    "pos": "noun",
    "simpleDefinition": "Harsh damage.",
    "banglaMeaning": "’ংস বা নষ্ট করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use ravages correctly in a sentence."
  },
  "reasonable": {
    "word": "Reasonable",
    "pos": "adjective",
    "simpleDefinition": "Not excessive or immoderate; within due limits; proper.",
    "banglaMeaning": "যৌক্তিক",
    "synonyms": [
      "sensible",
      "rational",
      "intelligent"
    ],
    "antonyms": [
      "unreasonable"
    ],
    "example": "The student learned how to use reasonable correctly in a sentence."
  },
  "reasoning": {
    "word": "Reasoning",
    "pos": "noun",
    "simpleDefinition": "The deduction of inferences or interpretations from premises, abstract thought, ratiocination; (countable) any instance of this, especially as a process leading to an action, motive.",
    "banglaMeaning": "যুক্তিতর্ক",
    "synonyms": [
      "intelligent",
      "thinking",
      "abstract thought"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reasoning correctly in a sentence."
  },
  "reassurance": {
    "word": "Reassurance",
    "pos": "noun",
    "simpleDefinition": "The feeling of being reassured, of having confidence restored, of having apprehensions dispelled.",
    "banglaMeaning": "পুনরায় নিহি্নত করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reassurance correctly in a sentence."
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
    "simpleDefinition": "To summarize or repeat in concise form.",
    "banglaMeaning": "আলোচনা করা",
    "synonyms": [
      "reprise",
      "repeat",
      "recap"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use recapitulate correctly in a sentence."
  },
  "recapture": {
    "word": "Recapture",
    "pos": "noun",
    "simpleDefinition": "The act of capturing again.",
    "banglaMeaning": "পুনরুদ্ধার করা",
    "synonyms": [
      "retake",
      "retaking"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use recapture correctly in a sentence."
  },
  "recidivist": {
    "word": "Recidivist",
    "pos": "noun",
    "simpleDefinition": "One who falls back into prior habits, especially criminal habits.",
    "banglaMeaning": "অপরাধপ্রবণ",
    "synonyms": [
      "reversionist",
      "repeater",
      "backslider"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use recidivist correctly in a sentence."
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
    "simpleDefinition": "A person who lives in self-imposed isolation or seclusion from the world, especially for religious purposes; a hermit.",
    "banglaMeaning": "সন্নাসী",
    "synonyms": [
      "withdrawn",
      "reclusive",
      "troglodyte"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use recluse correctly in a sentence."
  },
  "reclusive": {
    "word": "Reclusive",
    "pos": "adjective",
    "simpleDefinition": "Of, characterized by, or preferring privacy and isolation; secluded.",
    "banglaMeaning": "সন্ন্যাসী",
    "synonyms": [
      "sequestered",
      "recluse",
      "secluded"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reclusive correctly in a sentence."
  },
  "reconcile": {
    "word": "Reconcile",
    "pos": "verb",
    "simpleDefinition": "To restore a friendly relationship; to bring back or return to harmony.",
    "banglaMeaning": "মিলনসাধন করা",
    "synonyms": [
      "conciliate",
      "accommodate",
      "settle"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reconcile correctly in a sentence."
  },
  "recruit": {
    "word": "Recruit",
    "pos": "verb",
    "simpleDefinition": "To enroll or enlist new members or potential employees on behalf of an employer, organization, sports team, the military, etc.",
    "banglaMeaning": "নতুন নিয়োগপ্রাপ্ত অনভিন্ত্র র্কমশী",
    "synonyms": [
      "raise",
      "enroll",
      "inscribe"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use recruit correctly in a sentence."
  },
  "recuperative": {
    "word": "Recuperative",
    "pos": "adjective",
    "simpleDefinition": "In the way of recuperation.",
    "banglaMeaning": "আরোগ্য হয় এমন / পুনরুদ্ধার হয় এমন",
    "synonyms": [
      "restorative",
      "healthful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use recuperative correctly in a sentence."
  },
  "redirect": {
    "word": "Redirect",
    "pos": "verb",
    "simpleDefinition": "To give new direction to, change the direction of.",
    "banglaMeaning": "পুননিদের্শ",
    "synonyms": [
      "airt"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use redirect correctly in a sentence."
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
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being reel.",
    "banglaMeaning": "নাটাই",
    "synonyms": [
      "lurch",
      "stagger",
      "careen"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reel correctly in a sentence."
  },
  "refinery": {
    "word": "Refinery",
    "pos": "noun",
    "simpleDefinition": "A building, or a mass of machinery, used to produce refined products such as sugar, oil, or metals.",
    "banglaMeaning": "পরিশোধনাগার",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use refinery correctly in a sentence."
  },
  "refugees": {
    "word": "Refugees",
    "pos": "adjective",
    "simpleDefinition": "\"Refugees\" is the debut single by the Tears, released on 25 April 2005 on Independiente Records.",
    "banglaMeaning": "শরণার্থী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use refugees correctly in a sentence."
  },
  "refute": {
    "word": "Refute",
    "pos": "verb",
    "simpleDefinition": "To prove an allegation, opinion, or argument to be false or incorrect",
    "banglaMeaning": "খণ্ডন করা / ভুল প্রমাণ করা / যুক্তি / তর্ক খধ্নন করা / অস্বীকার করা",
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
    "simpleDefinition": "The killing of a king.",
    "banglaMeaning": "রাজহত্যা",
    "synonyms": [
      "kingslayer"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of regicide."
  },
  "regime": {
    "word": "Regime",
    "pos": "noun",
    "simpleDefinition": "A form of government, or the government in power, particularly an authoritarian or totalitarian one.",
    "banglaMeaning": "শাসন",
    "synonyms": [
      "regimen",
      "government",
      "authorities"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use regime correctly in a sentence."
  },
  "regret": {
    "word": "Regret",
    "pos": "verb",
    "simpleDefinition": "To feel sorry about (a thing that has or has not happened), afterthink: to wish that a thing had not happened, that something else had happened instead.",
    "banglaMeaning": "অনুশোচনা করা",
    "synonyms": [
      "lament",
      "bemoan",
      "repent"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use regret correctly in a sentence."
  },
  "reimburse": {
    "word": "Reimburse",
    "pos": "verb",
    "simpleDefinition": "To compensate with payment; especially, to repay money spent on one's behalf.",
    "banglaMeaning": "পরিশোধ করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reimburse correctly in a sentence."
  },
  "reinstate": {
    "word": "Reinstate",
    "pos": "verb",
    "simpleDefinition": "To restore to a former position or rank.",
    "banglaMeaning": "পুনর্বহাল করা",
    "synonyms": [
      "Related to reinstate",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of reinstate."
  },
  "relevant": {
    "word": "Relevant",
    "pos": "adjective",
    "simpleDefinition": "Related, connected, or pertinent to a topic.",
    "banglaMeaning": "প্রাসণি্টক",
    "synonyms": [
      "crucial",
      "pertinent",
      "related"
    ],
    "antonyms": [
      "irrelevant"
    ],
    "example": "The student learned how to use relevant correctly in a sentence."
  },
  "relics": {
    "word": "Relics",
    "pos": "noun",
    "simpleDefinition": "That which remains; that which is left after loss or decay; a remaining portion.",
    "banglaMeaning": "পুরাতাতি্রক নিদশর্ন",
    "synonyms": [
      "halidom",
      "lave",
      "remainder"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of relics."
  },
  "remnants": {
    "word": "Remnants",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being remnants.",
    "banglaMeaning": "’ংসাবশেষ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use remnants correctly in a sentence."
  },
  "renowned": {
    "word": "Renowned",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being renowned.",
    "banglaMeaning": "বিখ্যাত",
    "synonyms": [
      "illustrious",
      "notable",
      "noted"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use renowned correctly in a sentence."
  },
  "reparation": {
    "word": "Reparation",
    "pos": "noun",
    "simpleDefinition": "A payment of time, effort or money to compensate for past transgression(s).",
    "banglaMeaning": "ক্ষতিপূরণ",
    "synonyms": [
      "repair",
      "fix",
      "amends"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reparation correctly in a sentence."
  },
  "repast": {
    "word": "Repast",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being repast.",
    "banglaMeaning": "আহার",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use repast correctly in a sentence."
  },
  "repeal": {
    "word": "Repeal",
    "pos": "verb",
    "simpleDefinition": "To cancel, invalidate, annul.",
    "banglaMeaning": "বাতিল করা",
    "synonyms": [
      "annul",
      "lift",
      "rescind"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use repeal correctly in a sentence."
  },
  "repent": {
    "word": "Repent",
    "pos": "verb",
    "simpleDefinition": "To feel pain, sorrow, or regret for what one has done or omitted to do; the cause for repenting may be indicated with \"of\".",
    "banglaMeaning": "অনুশোচনা করা",
    "synonyms": [
      "regret",
      "atone",
      "rue"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use repent correctly in a sentence."
  },
  "repercussion": {
    "word": "Repercussion",
    "pos": "noun",
    "simpleDefinition": "A consequence or ensuing result of some action.",
    "banglaMeaning": "প্রতিক্রিয়া",
    "synonyms": [
      "recoil",
      "rebound",
      "backlash"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use repercussion correctly in a sentence."
  },
  "represent": {
    "word": "Represent",
    "pos": "verb",
    "simpleDefinition": "To stand or act in the place of; to perform the duties, exercise the rights, or otherwise act on behalf of.",
    "banglaMeaning": "চিতি্রত করা",
    "synonyms": [
      "constitute",
      "exemplify",
      "comprise"
    ],
    "antonyms": [
      "prosecute"
    ],
    "example": "The student learned how to use represent correctly in a sentence."
  },
  "repression": {
    "word": "Repression",
    "pos": "noun",
    "simpleDefinition": "The act of repressing; state of being repressed.",
    "banglaMeaning": "দমন / নিপীড়ন",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use repression correctly in a sentence."
  },
  "reprimand": {
    "word": "Reprimand",
    "pos": "verb",
    "simpleDefinition": "To reprove in a formal or official way.",
    "banglaMeaning": "তিরস্কার",
    "synonyms": [
      "rebuke",
      "chide",
      "berate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reprimand correctly in a sentence."
  },
  "reproach": {
    "word": "Reproach",
    "pos": "verb",
    "simpleDefinition": "To criticize or rebuke (someone).",
    "banglaMeaning": "তিরস্কার করা",
    "synonyms": [
      "upbraid"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reproach correctly in a sentence."
  },
  "reproof": {
    "word": "Reproof",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being reproof.",
    "banglaMeaning": "অর্সমথন",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reproof correctly in a sentence."
  },
  "repugnance": {
    "word": "Repugnance",
    "pos": "noun",
    "simpleDefinition": "Extreme aversion, repulsion.",
    "banglaMeaning": "প্রতিক্রিয়া",
    "synonyms": [
      "revulsion",
      "repulsion",
      "horror"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use repugnance correctly in a sentence."
  },
  "repute": {
    "word": "Repute",
    "pos": "noun",
    "simpleDefinition": "Reputation, especially a good reputation.",
    "banglaMeaning": "সুখ্যাতি",
    "synonyms": [
      "Related to repute",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of repute."
  },
  "rescind": {
    "word": "Rescind",
    "pos": "verb",
    "simpleDefinition": "To repeal, annul, or declare void; to take (something such as a rule or contract) out of effect.",
    "banglaMeaning": "বাতিল করা",
    "synonyms": [
      "annul",
      "lift",
      "revoke"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use rescind correctly in a sentence."
  },
  "resemble": {
    "word": "Resemble",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being resemble.",
    "banglaMeaning": "অনু°প",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use resemble correctly in a sentence."
  },
  "resentment": {
    "word": "Resentment",
    "pos": "adjective",
    "simpleDefinition": "Having the qualities or characteristics of resentment.",
    "banglaMeaning": "আকে্রোশ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use resentment correctly in a sentence."
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
    "simpleDefinition": "To oppose; to refuse to accept.",
    "banglaMeaning": "প্রতিরোধ করা",
    "synonyms": [
      "dissent",
      "refuse",
      "defy"
    ],
    "antonyms": [
      "apply",
      "surrender",
      "give up"
    ],
    "example": "The student learned how to use resist correctly in a sentence."
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
    "simpleDefinition": "Without rest; unable to be still or quiet; uneasy; continually moving.",
    "banglaMeaning": "অস্থির",
    "synonyms": [
      "uneasy",
      "fretful",
      "moving"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use restless correctly in a sentence."
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
    "simpleDefinition": "The sale of goods directly to the consumer, encompassing the storefronts, mail-order, websites, etc., and the corporate mechanisms, branding, advertising, etc. that support them.",
    "banglaMeaning": "খুচরা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "explain",
      "wholesale"
    ],
    "example": "The student learned how to use retail correctly in a sentence."
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
    "simpleDefinition": "Capable of being retracted; retractile.",
    "banglaMeaning": "সংকোচনীয়",
    "synonyms": [
      "retractile"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use retractable correctly in a sentence."
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
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being revamp.",
    "banglaMeaning": "পুনগর্ঠন",
    "synonyms": [
      "vamp"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use revamp correctly in a sentence."
  },
  "reveal": {
    "word": "Reveal",
    "pos": "verb",
    "simpleDefinition": "To uncover; to show and display that which was hidden.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "impart",
      "display",
      "break"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reveal correctly in a sentence."
  },
  "revealing": {
    "word": "Revealing",
    "pos": "adjective",
    "simpleDefinition": "Informative.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "disclosure",
      "informative",
      "telltale"
    ],
    "antonyms": [
      "concealing"
    ],
    "example": "The student learned how to use revealing correctly in a sentence."
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
    "simpleDefinition": "Showing or characterized by reverence; respectful.",
    "banglaMeaning": "ঙ্কদ্ধামিঙি্কত",
    "synonyms": [
      "reverent",
      "venerating",
      "respectful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use reverential correctly in a sentence."
  },
  "revert": {
    "word": "Revert",
    "pos": "noun",
    "simpleDefinition": "One who, or that which, reverts.",
    "banglaMeaning": "ফিরে আসা",
    "synonyms": [
      "regress",
      "return",
      "turn back"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use revert correctly in a sentence."
  },
  "revolution": {
    "word": "Revolution",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being revolution.",
    "banglaMeaning": "বিল্গব",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use revolution correctly in a sentence."
  },
  "revulsion": {
    "word": "Revulsion",
    "pos": "noun",
    "simpleDefinition": "Abhorrence, a sense of loathing, intense aversion, repugnance, repulsion, horror.",
    "banglaMeaning": "প্রতিক্রিয়া",
    "synonyms": [
      "repulsion",
      "repugnance",
      "horror"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use revulsion correctly in a sentence."
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
    "simpleDefinition": "Deserving of ridicule; foolish, absurd.",
    "banglaMeaning": "হাস্যকর",
    "synonyms": [
      "ludicrous",
      "derisory",
      "silly"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use ridiculous correctly in a sentence."
  },
  "rightfully": {
    "word": "Rightfully",
    "pos": "adverb",
    "simpleDefinition": "Rightly, correctly.",
    "banglaMeaning": "বৈবধ ভাবে",
    "synonyms": [
      "truly"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use rightfully correctly in a sentence."
  },
  "rigid": {
    "word": "Rigid",
    "pos": "adjective",
    "simpleDefinition": "Stiff, rather than flexible.",
    "banglaMeaning": "শক্ত",
    "synonyms": [
      "set",
      "stiff",
      "strict"
    ],
    "antonyms": [
      "nonrigid"
    ],
    "example": "The student learned how to use rigid correctly in a sentence."
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
    "pos": "verb",
    "simpleDefinition": "To increase or ascend very quickly",
    "banglaMeaning": "দ্রুততার সাথে বৃদি্ধ",
    "synonyms": [
      "soar",
      "surge",
      "rocket"
    ],
    "antonyms": [
      "plummet",
      "fall"
    ],
    "example": "Prices began to rise rapidly during the festive season."
  },
  "rite": {
    "word": "Rite",
    "pos": "noun",
    "simpleDefinition": "A religious custom.",
    "banglaMeaning": "রীতিনীতি / প্রথা",
    "synonyms": [
      "ritual",
      "religious rite"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use rite correctly in a sentence."
  },
  "robbery": {
    "word": "Robbery",
    "pos": "noun",
    "simpleDefinition": "The offense of taking or attempting to take the property of another by force or threat of force.",
    "banglaMeaning": "ডাকাতি",
    "synonyms": [
      "looting"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use robbery correctly in a sentence."
  },
  "rookie": {
    "word": "Rookie",
    "pos": "noun",
    "simpleDefinition": "An athlete either new to the sport or to a team or in his/her first year of professional competition, especially said of baseball, basketball, hockey and American football players.",
    "banglaMeaning": "নতুন নিয়োগপ্রাপ্ত অনভিন্ত্র র্কমশী",
    "synonyms": [
      "cub",
      "greenhorn"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use rookie correctly in a sentence."
  },
  "rotund": {
    "word": "Rotund",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being rotund.",
    "banglaMeaning": "গোলাকার",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use rotund correctly in a sentence."
  },
  "ruminative": {
    "word": "Ruminative",
    "pos": "adjective",
    "simpleDefinition": "Causing rumination or prone to it; thoughtful.",
    "banglaMeaning": "চিন্তানিমঞ্জ",
    "synonyms": [
      "pensive",
      "musing",
      "thoughtful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use ruminative correctly in a sentence."
  },
  "rush": {
    "word": "Rush",
    "pos": "noun",
    "simpleDefinition": "A sudden forward motion.",
    "banglaMeaning": "দ্রুত ধাবন",
    "synonyms": [
      "induce",
      "surge",
      "flush"
    ],
    "antonyms": [
      "dawdle",
      "detain",
      "hold up"
    ],
    "example": "The student learned how to use rush correctly in a sentence."
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
    "simpleDefinition": "Committing sacrilege; acting or speaking very disrespectfully toward what is held to be sacred.",
    "banglaMeaning": "পবিত্র ব্যক্তির অসম্মানকারী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sacrilegious correctly in a sentence."
  },
  "sacrosanct": {
    "word": "Sacrosanct",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being sacrosanct.",
    "banglaMeaning": "অলণ্ঠনীয়",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sacrosanct correctly in a sentence."
  },
  "sagacity": {
    "word": "Sagacity",
    "pos": "noun",
    "simpleDefinition": "The quality of being sage, wise, or able to make good decisions; the quality of being perceptive, astute or insightful.",
    "banglaMeaning": "প্রখর ন্ত্রান",
    "synonyms": [
      "discernment",
      "judgment",
      "judgement"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sagacity correctly in a sentence."
  },
  "sage": {
    "word": "Sage",
    "pos": "noun",
    "simpleDefinition": "The plant Salvia officinalis and savory spice produced from it; also planted for ornamental purposes.",
    "banglaMeaning": "ন্ত্রানী",
    "synonyms": [
      "chromatic",
      "wise",
      "guru"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sage correctly in a sentence."
  },
  "salient": {
    "word": "Salient",
    "pos": "adjective",
    "simpleDefinition": "Prominent; conspicuous.",
    "banglaMeaning": "প্রধান বৈবশিষ্ট",
    "synonyms": [
      "conspicuous",
      "prominent",
      "obvious"
    ],
    "antonyms": [
      "reentrant",
      "re-entrant"
    ],
    "example": "The student learned how to use salient correctly in a sentence."
  },
  "salubrious": {
    "word": "Salubrious",
    "pos": "adjective",
    "simpleDefinition": "Promoting health or well-being; wholesome, especially relating to food or air.",
    "banglaMeaning": "স্বাস্থ্যকর",
    "synonyms": [
      "healthy",
      "wholesome",
      "good for you"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use salubrious correctly in a sentence."
  },
  "sanatorium": {
    "word": "Sanatorium",
    "pos": "noun",
    "simpleDefinition": "An institution that treats chronic diseases, and provides supervised recuperation and convalescence.",
    "banglaMeaning": "স্বাস্থ্যনিবাস",
    "synonyms": [
      "madhouse",
      "loony bin",
      "nuthouse"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sanatorium correctly in a sentence."
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
    "simpleDefinition": "Mentally sound; possessing a rational mind; having the mental faculties in such condition as to be able to anticipate and judge the effect of one's actions in an ordinary manner.",
    "banglaMeaning": "বিবেকী / যুক্তিসম্মত",
    "synonyms": [
      "rational",
      "reasonable",
      "lucid"
    ],
    "antonyms": [
      "insane"
    ],
    "example": "The student learned how to use sane correctly in a sentence."
  },
  "sardonic": {
    "word": "Sardonic",
    "pos": "adjective",
    "simpleDefinition": "Grimly mocking, cynical, or sarcastic",
    "banglaMeaning": "বিদ্রূপাত্মক / তাচ্ছিল্যপূর্ণ / ঘৃণাপূণর্",
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
    "simpleDefinition": "A tool with a toothed blade used for cutting hard substances, in particular wood or metal.",
    "banglaMeaning": "করাত",
    "synonyms": [
      "adage",
      "proverb",
      "byword"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use saw correctly in a sentence."
  },
  "scam": {
    "word": "Scam",
    "pos": "noun",
    "simpleDefinition": "A fraudulent deal.",
    "banglaMeaning": "জালিয়াতি করা",
    "synonyms": [
      "con game",
      "confidence trick",
      "swindle"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "That marketing scheme looks like a scam to me."
  },
  "scanty": {
    "word": "Scanty",
    "pos": "adjective",
    "simpleDefinition": "Somewhat less than is needed in amplitude or extent.",
    "banglaMeaning": "স্বস্ফ",
    "synonyms": [
      "bare",
      "meager",
      "meagre"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use scanty correctly in a sentence."
  },
  "scarcity": {
    "word": "Scarcity",
    "pos": "noun",
    "simpleDefinition": "The condition of something being scarce or deficient.",
    "banglaMeaning": "স্বস্ফ",
    "synonyms": [
      "scarceness"
    ],
    "antonyms": [
      "abundance",
      "copiousness"
    ],
    "example": "The student learned how to use scarcity correctly in a sentence."
  },
  "scatter": {
    "word": "Scatter",
    "pos": "verb",
    "simpleDefinition": "To (cause to) separate and go in different directions; to disperse.",
    "banglaMeaning": "ছড়িয়ে যাওয়া",
    "synonyms": [
      "disperse",
      "dissipate",
      "sprinkle"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use scatter correctly in a sentence."
  },
  "scenic": {
    "word": "Scenic",
    "pos": "adjective",
    "simpleDefinition": "Having beautiful scenery; picturesque.",
    "banglaMeaning": "দৃশ্যময়",
    "synonyms": [
      "beautiful"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use scenic correctly in a sentence."
  },
  "scissors": {
    "word": "Scissors",
    "pos": "noun",
    "simpleDefinition": "A tool used for cutting thin material, consisting of two crossing blades attached at a pivot point in such a way that the blades slide across each other when the handles are closed.",
    "banglaMeaning": "কাঁচি",
    "synonyms": [
      "pair of scissors"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use scissors correctly in a sentence."
  },
  "scold": {
    "word": "Scold",
    "pos": "verb",
    "simpleDefinition": "To rebuke angrily.",
    "banglaMeaning": "তিরস্কার করা",
    "synonyms": [
      "grumble",
      "rebuke",
      "reprimand"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use scold correctly in a sentence."
  },
  "screams": {
    "word": "Screams",
    "pos": "noun",
    "simpleDefinition": "A loud, emphatic, exclamation of extreme emotion, especially horror, fear, excitement, or anger; it may comprise a word or a sustained, high-pitched vowel sound.",
    "banglaMeaning": "আর্তনাদ করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use screams correctly in a sentence."
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
    "simpleDefinition": "Coarse, vulgar, or abusive.",
    "banglaMeaning": "অমাজির্ত / অপমান করা",
    "synonyms": [
      "scornful",
      "opprobrious",
      "offensive"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use scurrilous correctly in a sentence."
  },
  "seething": {
    "word": "Seething",
    "pos": "verb",
    "simpleDefinition": "To boil.",
    "banglaMeaning": "ফুটে উপচে পড়া এমন",
    "synonyms": [
      "Related to seething",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of seething."
  },
  "segregate": {
    "word": "Segregate",
    "pos": "verb",
    "simpleDefinition": "To separate.",
    "banglaMeaning": "পৃথক করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "integrate",
      "mix",
      "desegregate"
    ],
    "example": "The student learned how to use segregate correctly in a sentence."
  },
  "senility": {
    "word": "Senility",
    "pos": "noun",
    "simpleDefinition": "The bodily and mental deterioration associated with old age: Synonym of senescence.",
    "banglaMeaning": "বাধর্ক্য",
    "synonyms": [
      "second childhood",
      "dotage"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use senility correctly in a sentence."
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
    "simpleDefinition": "Religious discourse; a written or spoken address on a religious or moral matter.",
    "banglaMeaning": "বৈনতিক বক্তৃ তা",
    "synonyms": [
      "discourse",
      "preaching"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sermon correctly in a sentence."
  },
  "servile": {
    "word": "Servile",
    "pos": "adjective",
    "simpleDefinition": "Excessively eager to please; obsequious.",
    "banglaMeaning": "ক্রেীতদাস সুলভ",
    "synonyms": [
      "obsequious",
      "subservient",
      "submissive"
    ],
    "antonyms": [
      "unsubmissive",
      "unservile"
    ],
    "example": "The student learned how to use servile correctly in a sentence."
  },
  "severe": {
    "word": "Severe",
    "pos": "adjective",
    "simpleDefinition": "Very bad or intense.",
    "banglaMeaning": "প্রকট / মারাত্মক",
    "synonyms": [
      "austere",
      "grievous",
      "critical"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use severe correctly in a sentence."
  },
  "shaky": {
    "word": "Shaky",
    "pos": "adjective",
    "simpleDefinition": "Shaking or trembling.",
    "banglaMeaning": "দুর্বল",
    "synonyms": [
      "precarious",
      "unsteady",
      "unstable"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use shaky correctly in a sentence."
  },
  "shallow": {
    "word": "Shallow",
    "pos": "adjective",
    "simpleDefinition": "Having little depth; significantly less deep than wide.",
    "banglaMeaning": "ভাসাভাসা",
    "synonyms": [
      "light",
      "superficial",
      "shoal"
    ],
    "antonyms": [
      "deep"
    ],
    "example": "The student learned how to use shallow correctly in a sentence."
  },
  "shore": {
    "word": "Shore",
    "pos": "noun",
    "simpleDefinition": "Land adjoining a non-flowing body of water, such as an ocean, lake or pond.",
    "banglaMeaning": "তীরভূমি / হূল",
    "synonyms": [
      "land",
      "seashore",
      "set ashore"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use shore correctly in a sentence."
  },
  "shortcoming": {
    "word": "Shortcoming",
    "pos": "noun",
    "simpleDefinition": "A deficiency or falling short; failure to attain a goal or ideal.",
    "banglaMeaning": "থটি / সীমাবদ্ধতা",
    "synonyms": [
      "defect"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use shortcoming correctly in a sentence."
  },
  "shortcomings": {
    "word": "Shortcomings",
    "pos": "noun",
    "simpleDefinition": "A deficiency or falling short; failure to attain a goal or ideal.",
    "banglaMeaning": "থটি",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use shortcomings correctly in a sentence."
  },
  "shove": {
    "word": "Shove",
    "pos": "verb",
    "simpleDefinition": "To push, especially roughly or with force.",
    "banglaMeaning": "ধাঞ্চা মারা",
    "synonyms": [
      "thrust",
      "jostle",
      "squeeze"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use shove correctly in a sentence."
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
    "simpleDefinition": "To become smaller; to contract.",
    "banglaMeaning": "সংহৃচিত করা",
    "synonyms": [
      "recoil",
      "cringe",
      "reduce"
    ],
    "antonyms": [
      "stretch"
    ],
    "example": "The student learned how to use shrink correctly in a sentence."
  },
  "simplicity": {
    "word": "Simplicity",
    "pos": "noun",
    "simpleDefinition": "The state or quality of being simple.",
    "banglaMeaning": "সরল",
    "synonyms": [
      "ease",
      "restraint",
      "chasteness"
    ],
    "antonyms": [
      "complexity",
      "difficulty",
      "complexness"
    ],
    "example": "The student learned how to use simplicity correctly in a sentence."
  },
  "sinister": {
    "word": "Sinister",
    "pos": "adjective",
    "simpleDefinition": "Evil or seemingly evil; indicating lurking danger or harm.",
    "banglaMeaning": "অপকারী / অশুভ",
    "synonyms": [
      "baleful",
      "evil",
      "wicked"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sinister correctly in a sentence."
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
    "simpleDefinition": "A studied attitude of questioning and doubt.",
    "banglaMeaning": "সংশয়বাদ",
    "synonyms": [
      "incredulity",
      "disbelief",
      "scepticism"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use skepticism correctly in a sentence."
  },
  "skinflint": {
    "word": "Skinflint",
    "pos": "noun",
    "simpleDefinition": "One who is excessively stingy or cautious with money; a tightwad; a miser.",
    "banglaMeaning": "মিতব্যয়ী / কিপটে",
    "synonyms": [
      "churl",
      "niggard",
      "grabber"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use skinflint correctly in a sentence."
  },
  "slackening": {
    "word": "Slackening",
    "pos": "noun",
    "simpleDefinition": "The act by which something slackens; loss of speed, tautness, etc.",
    "banglaMeaning": "ঝিমুনি",
    "synonyms": [
      "relaxation",
      "loosening"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use slackening correctly in a sentence."
  },
  "slip": {
    "word": "Slip",
    "pos": "verb",
    "simpleDefinition": "To lose one’s traction on a slippery surface; to slide due to a lack of friction.",
    "banglaMeaning": "পলায়ন / এড়িয়ে যাওয়া",
    "synonyms": [
      "shift",
      "case",
      "slew"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use slip correctly in a sentence."
  },
  "slothful": {
    "word": "Slothful",
    "pos": "adjective",
    "simpleDefinition": "Lazy; idle; tending to sloth.",
    "banglaMeaning": "নিকি্ষ্ময়",
    "synonyms": [
      "otiose",
      "indolent",
      "faineant"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use slothful correctly in a sentence."
  },
  "sluggish": {
    "word": "Sluggish",
    "pos": "adjective",
    "simpleDefinition": "Slow-moving, inactive, or lacking energy and vitality",
    "banglaMeaning": "মন্থর / অলস / ধীরগতির / আলস্যপরায়ণ / হৃড়ে",
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
    "pos": "verb",
    "simpleDefinition": "To be in a very light state of sleep, almost awake.",
    "banglaMeaning": "তন্দা",
    "synonyms": [
      "kip",
      "sleep"
    ],
    "antonyms": [
      "wake"
    ],
    "example": "The student learned how to use slumber correctly in a sentence."
  },
  "sneer": {
    "word": "Sneer",
    "pos": "noun",
    "simpleDefinition": "A facial expression where one slightly raises one corner of the upper lip, generally indicating scorn.",
    "banglaMeaning": "বিদ্রুপ করা",
    "synonyms": [
      "Related to sneer",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of sneer."
  },
  "snob": {
    "word": "Snob",
    "pos": "noun",
    "simpleDefinition": "A person who wishes to be seen as a member of the upper classes and who looks down on those perceived to have inferior or unrefined tastes.",
    "banglaMeaning": "উন্নাসিক লোক (যে ব্যক্তি নিল্ডতর সামাজিক ঙে্কণীর মানুষকে অবন্ত্রার",
    "synonyms": [
      "prig",
      "snot"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use snob correctly in a sentence."
  },
  "sober": {
    "word": "Sober",
    "pos": "adjective",
    "simpleDefinition": "Not drunk; not intoxicated.",
    "banglaMeaning": "গাশ্রীর্যপূণর্",
    "synonyms": [
      "solemn",
      "sombre",
      "somber"
    ],
    "antonyms": [
      "playful",
      "inebriated",
      "intoxicated"
    ],
    "example": "The student learned how to use sober correctly in a sentence."
  },
  "solace": {
    "word": "Solace",
    "pos": "noun",
    "simpleDefinition": "Comfort or consolation in a time of loneliness or distress.",
    "banglaMeaning": "সাপ্তনা",
    "synonyms": [
      "consolation",
      "comfort",
      "console"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use solace correctly in a sentence."
  },
  "solemn": {
    "word": "Solemn",
    "pos": "adjective",
    "simpleDefinition": "Deeply serious and sombre; grave.",
    "banglaMeaning": "আনুষ্ঠানিক",
    "synonyms": [
      "earnest",
      "sedate",
      "serious"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use solemn correctly in a sentence."
  },
  "solvent": {
    "word": "Solvent",
    "pos": "noun",
    "simpleDefinition": "A fluid that dissolves a solid, liquid, or gaseous solute, resulting in a solution.",
    "banglaMeaning": "দেনা পরিশোধে সক্ষম",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use solvent correctly in a sentence."
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
    "simpleDefinition": "To restore to ease, comfort, or tranquility; relieve; calm; quiet; refresh.",
    "banglaMeaning": "প্রশমিত করা / কমানো",
    "synonyms": [
      "solace",
      "comfort",
      "console"
    ],
    "antonyms": [
      "irritate"
    ],
    "example": "The student learned how to use soothe correctly in a sentence."
  },
  "sophisticated": {
    "word": "Sophisticated",
    "pos": "adjective",
    "simpleDefinition": "Of a person: having obtained worldly experience, and lacking naiveté; cosmopolitan, worldly-wise.",
    "banglaMeaning": "কৃতি্রম",
    "synonyms": [
      "refined",
      "svelte",
      "blase"
    ],
    "antonyms": [
      "naive",
      "naif"
    ],
    "example": "The student learned how to use sophisticated correctly in a sentence."
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
    "pos": "noun",
    "simpleDefinition": "Brilliance; luster.",
    "banglaMeaning": "স্থলস্থল করা",
    "synonyms": [
      "light",
      "spark",
      "scintillation"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sparkle correctly in a sentence."
  },
  "splendid": {
    "word": "Splendid",
    "pos": "adjective",
    "simpleDefinition": "Gorgeous; magnificent; sumptuous; of remarkable beauty.",
    "banglaMeaning": "জমকালো",
    "synonyms": [
      "beautiful",
      "glorious",
      "resplendent"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use splendid correctly in a sentence."
  },
  "spool": {
    "word": "Spool",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being spool.",
    "banglaMeaning": "নাটাই",
    "synonyms": [
      "bobbin",
      "reel"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use spool correctly in a sentence."
  },
  "spunky": {
    "word": "Spunky",
    "pos": "adjective",
    "simpleDefinition": "Spirited or plucky.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "spirited",
      "brave",
      "feisty"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use spunky correctly in a sentence."
  },
  "spurious": {
    "word": "Spurious",
    "pos": "adjective",
    "simpleDefinition": "False, not authentic, not genuine.",
    "banglaMeaning": "ভেজাল",
    "synonyms": [
      "specious",
      "natural",
      "counterfeit"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use spurious correctly in a sentence."
  },
  "squalor": {
    "word": "Squalor",
    "pos": "noun",
    "simpleDefinition": "Filthiness and degradation, as from neglect or poverty.",
    "banglaMeaning": "নোংরা / অস্বসি্তকর অবস্থা",
    "synonyms": [
      "sordidness",
      "squalidness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use squalor correctly in a sentence."
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
    "pos": "noun",
    "simpleDefinition": "A (nutritionally) complete and satisfying meal, especially one suitable for a person performing physical labour.",
    "banglaMeaning": "সুষম খাদ্য",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use square meal correctly in a sentence."
  },
  "stale": {
    "word": "Stale",
    "pos": "adjective",
    "simpleDefinition": "No longer fresh, in reference to food, urine, straw, wounds, etc.",
    "banglaMeaning": "টাটকা নয় (বাসি )",
    "synonyms": [
      "cold",
      "hard",
      "bad"
    ],
    "antonyms": [
      "fresh"
    ],
    "example": "The student learned how to use stale correctly in a sentence."
  },
  "state of shock": {
    "word": "State of shock",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being state of shock.",
    "banglaMeaning": "কিংর্কতব্যবিমূঢ়",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use state of shock correctly in a sentence."
  },
  "stated": {
    "word": "Stated",
    "pos": "verb",
    "simpleDefinition": "To declare to be a fact.",
    "banglaMeaning": "প্রকাশিত হওয়া",
    "synonyms": [
      "Related to stated",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "He stated that he was willing to help."
  },
  "statesman": {
    "word": "Statesman",
    "pos": "noun",
    "simpleDefinition": "A man who is a leader in national or international affairs.",
    "banglaMeaning": "হূটনীতিন্ত্র ব্যক্তি",
    "synonyms": [
      "national leader",
      "solon"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use statesman correctly in a sentence."
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
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being steal a march.",
    "banglaMeaning": "ঔস্থলে্য ছাপিয়ে যাওয়া",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use steal a march correctly in a sentence."
  },
  "step on somebodys toes": {
    "word": "Step on somebodys toes",
    "pos": "idiom",
    "simpleDefinition": "To insult or encroach upon another's privileges or authority",
    "banglaMeaning": "অনুভূতি বা সংস্কারে আঘাত হানা",
    "synonyms": [
      "offend",
      "encroach",
      "intrude"
    ],
    "antonyms": [
      "respect boundaries"
    ],
    "example": "Be careful not to step on somebody's toes when taking charge."
  },
  "stern": {
    "word": "Stern",
    "pos": "adjective",
    "simpleDefinition": "Having a hardness and severity of nature or manner.",
    "banglaMeaning": "কঠোর",
    "synonyms": [
      "austere",
      "inexorable",
      "grim"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use stern correctly in a sentence."
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
    "simpleDefinition": "An external phenomenon that has an influence on a system, by triggering or modifying an internal phenomenon; for example, a spur or incentive that drives a person to take action or change behaviour.",
    "banglaMeaning": "আবেগ / প্রেরণা",
    "synonyms": [
      "stimulant",
      "stimulation",
      "input"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use stimulus correctly in a sentence."
  },
  "stir": {
    "word": "Stir",
    "pos": "verb",
    "simpleDefinition": "To disturb the relative position of the particles (of a liquid or similar) by passing an object through it.",
    "banglaMeaning": "আলোড়িত করা",
    "synonyms": [
      "turmoil",
      "shift",
      "touch"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use stir correctly in a sentence."
  },
  "stout": {
    "word": "Stout",
    "pos": "adjective",
    "simpleDefinition": "Large; bulky.",
    "banglaMeaning": "শক্তিশালী / নিভর্শীক",
    "synonyms": [
      "robust",
      "fat",
      "portly"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use stout correctly in a sentence."
  },
  "stream": {
    "word": "Stream",
    "pos": "noun",
    "simpleDefinition": "Any steady flow or succession of material, such as water, air, radio signal or words.",
    "banglaMeaning": "জলপ্রবাহ",
    "synonyms": [
      "flow",
      "pelt",
      "swarm"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use stream correctly in a sentence."
  },
  "strict": {
    "word": "Strict",
    "pos": "adjective",
    "simpleDefinition": "Governed or governing by exact rules; observing exact rules; severe; rigorous.",
    "banglaMeaning": "কঠোর",
    "synonyms": [
      "stern",
      "severe",
      "rigid"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use strict correctly in a sentence."
  },
  "strident": {
    "word": "Strident",
    "pos": "noun",
    "simpleDefinition": "One of a class of s-like fricatives produced by an airstream directed at the upper teeth.",
    "banglaMeaning": "কর্কশ",
    "synonyms": [
      "Related to strident",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of strident."
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
    "simpleDefinition": "Refusing to move or to change one's opinion; obstinate; firmly resisting; persistent in doing something.",
    "banglaMeaning": "একগুঁয়ে",
    "synonyms": [
      "dour",
      "tenacious",
      "obstinate"
    ],
    "antonyms": [
      "docile"
    ],
    "example": "The student learned how to use stubborn correctly in a sentence."
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
    "simpleDefinition": "The property of being subordinate; inferiority of rank or position.",
    "banglaMeaning": "অধীনস্থ",
    "synonyms": [
      "mastery",
      "hyponymy"
    ],
    "antonyms": [
      "insubordination"
    ],
    "example": "The student learned how to use subordination correctly in a sentence."
  },
  "subpoena": {
    "word": "Subpoena",
    "pos": "noun",
    "simpleDefinition": "A writ (“written order”) requiring someone to appear in court, or at a deposition or some other legal proceeding, as a witness to give testimony (a subpoena ad testificandum) or to produce evidence (subpoena duces tecum), in default of which the person may be punished.",
    "banglaMeaning": "আদালতে ডাকা",
    "synonyms": [
      "subpoena ad testificandum"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use subpoena correctly in a sentence."
  },
  "subterfuge": {
    "word": "Subterfuge",
    "pos": "noun",
    "simpleDefinition": "Deception; misrepresentation of the true nature of an activity.",
    "banglaMeaning": "প্রতারনা",
    "synonyms": [
      "blind"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use subterfuge correctly in a sentence."
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
    "simpleDefinition": "The quality of being subtle.",
    "banglaMeaning": "অস্পষ্ট",
    "synonyms": [
      "nuance",
      "refinement",
      "niceness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use subtlety correctly in a sentence."
  },
  "subtraction": {
    "word": "Subtraction",
    "pos": "noun",
    "simpleDefinition": "The process of subtracting a number from another.",
    "banglaMeaning": "বিয়োগ",
    "synonyms": [
      "deduction",
      "minus"
    ],
    "antonyms": [
      "addition"
    ],
    "example": "The student learned how to use subtraction correctly in a sentence."
  },
  "subvert": {
    "word": "Subvert",
    "pos": "verb",
    "simpleDefinition": "To overturn from the foundation; to overthrow; to ruin utterly.",
    "banglaMeaning": "ক্ষমতা ’ংস করা",
    "synonyms": [
      "undermine",
      "counteract",
      "sabotage"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use subvert correctly in a sentence."
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
    "simpleDefinition": "The right or chance to vote, express an opinion, or participate in a decision, especially in a democratic election.",
    "banglaMeaning": "ভোটাধিকার",
    "synonyms": [
      "right to vote",
      "vote"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use suffrage correctly in a sentence."
  },
  "sullen": {
    "word": "Sullen",
    "pos": "adjective",
    "simpleDefinition": "Having a brooding ill temper; sulky.",
    "banglaMeaning": "চাপা কে্রোধযুক্ত",
    "synonyms": [
      "dour",
      "morose",
      "heavy"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sullen correctly in a sentence."
  },
  "summons": {
    "word": "Summons",
    "pos": "noun",
    "simpleDefinition": "A call to do something, especially to come.",
    "banglaMeaning": "ডেকে পাঠানো",
    "synonyms": [
      "process",
      "summon",
      "call for"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use summons correctly in a sentence."
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
    "simpleDefinition": "To retire due to age.",
    "banglaMeaning": "কাজ বা ব্যবহারের জন্য অতি প্রাচীন / বয়স উত্তীর্ন",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use superannuate correctly in a sentence."
  },
  "supercilious": {
    "word": "Supercilious",
    "pos": "adjective",
    "simpleDefinition": "Having the qualities or characteristics of supercilious.",
    "banglaMeaning": "অহংকৃত / গবির্ত",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use supercilious correctly in a sentence."
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
    "simpleDefinition": "Higher in rank, status, or quality.",
    "banglaMeaning": "ঙে্কষ্ঠ",
    "synonyms": [
      "eminent",
      "good",
      "patronizing"
    ],
    "antonyms": [
      "inferior",
      "adscript",
      "subscript"
    ],
    "example": "The student learned how to use superior correctly in a sentence."
  },
  "supplant": {
    "word": "Supplant",
    "pos": "verb",
    "simpleDefinition": "To take the place of; to replace, to supersede.",
    "banglaMeaning": "স্থানচু্যত",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use supplant correctly in a sentence."
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
    "simpleDefinition": "Resembling a dream: fantastic and incongruous.",
    "banglaMeaning": "পরাবাস্তব",
    "synonyms": [
      "unreal",
      "phantasmagoric",
      "dreamlike"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use surreal correctly in a sentence."
  },
  "susceptible": {
    "word": "Susceptible",
    "pos": "noun",
    "simpleDefinition": "A person who is vulnerable to being infected by a certain disease.",
    "banglaMeaning": "স্পশর্কাতর",
    "synonyms": [
      "Related to susceptible",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of susceptible."
  },
  "suspect": {
    "word": "Suspect",
    "pos": "verb",
    "simpleDefinition": "To distrust or have doubts about (something or someone).",
    "banglaMeaning": "সনে্দহভাজন",
    "synonyms": [
      "surmise",
      "queer",
      "doubt"
    ],
    "antonyms": [
      "trust",
      "bank",
      "complainant"
    ],
    "example": "The student learned how to use suspect correctly in a sentence."
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
    "simpleDefinition": "To obtain (money or property) by fraudulent or deceitful methods.",
    "banglaMeaning": "প্রতারণা করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use swindle correctly in a sentence."
  },
  "swollen": {
    "word": "Swollen",
    "pos": "verb",
    "simpleDefinition": "To become bigger, especially due to being engorged.",
    "banglaMeaning": "ফোলা বা ফুলে যাওয়া",
    "synonyms": [
      "Related to swollen",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of swollen."
  },
  "sycophancy": {
    "word": "Sycophancy",
    "pos": "noun",
    "simpleDefinition": "The fawning behavior of a sycophant; servile flattery; fawningness.",
    "banglaMeaning": "তোষামুদি",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use sycophancy correctly in a sentence."
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
    "simpleDefinition": "A brief summary of the major points of a written work, either as prose or as a table; an abridgment or condensation of a work.",
    "banglaMeaning": "সারাংশ",
    "synonyms": [
      "abstract",
      "outline",
      "precis"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use synopsis correctly in a sentence."
  },
  "taciturn": {
    "word": "Taciturn",
    "pos": "adjective",
    "simpleDefinition": "Silent; temperamentally untalkative; disinclined to speak.",
    "banglaMeaning": "স্বস্ফভাষী",
    "synonyms": [
      "reticent",
      "buttoned-up",
      "untalkative"
    ],
    "antonyms": [
      "voluble"
    ],
    "example": "The student learned how to use taciturn correctly in a sentence."
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
    "simpleDefinition": "Equivalent in meaning or effect; amounting to the same thing in practical terms, even if being technically distinct.",
    "banglaMeaning": "সমপরিমাণ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tantamount correctly in a sentence."
  },
  "taunting": {
    "word": "Taunting",
    "pos": "verb",
    "simpleDefinition": "To make fun of (someone); to goad (a person) into responding, often in an aggressive manner.",
    "banglaMeaning": "বিদ্রুপ",
    "synonyms": [
      "Related to taunting",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of taunting."
  },
  "telepathy": {
    "word": "Telepathy",
    "pos": "noun",
    "simpleDefinition": "The capability to communicate directly by psychic means; the sympathetic affection of one mind by the thoughts, feelings, or emotions of another at a distance, without communication through the ordinary channels of sensation.",
    "banglaMeaning": "অনে্যর চিন্তার অনুভূতি দ্রুত বুঝে নেয়ার ক্ষমতা",
    "synonyms": [
      "thought transference"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use telepathy correctly in a sentence."
  },
  "teller": {
    "word": "Teller",
    "pos": "noun",
    "simpleDefinition": "A bank clerk who receives and pays out money.",
    "banglaMeaning": "ব্যাংকের ক্যাশিয়ার",
    "synonyms": [
      "cashier",
      "bank clerk",
      "vote counter"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use teller correctly in a sentence."
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
    "simpleDefinition": "The quality or state of being tenacious, or persistence of purpose; tenaciousness.",
    "banglaMeaning": "কোন কিছুর প্রতি আগ্রহ / জিদ",
    "synonyms": [
      "doggedness",
      "tenaciousness",
      "perseverence"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tenacity correctly in a sentence."
  },
  "tenant": {
    "word": "Tenant",
    "pos": "noun",
    "simpleDefinition": "One who holds a lease (a tenancy).",
    "banglaMeaning": "ভাড়াটয়িা",
    "synonyms": [
      "renter"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tenant correctly in a sentence."
  },
  "tender": {
    "word": "Tender",
    "pos": "adjective",
    "simpleDefinition": "Sensitive or painful to the touch.",
    "banglaMeaning": "কোমল / পেশা / প্রস্তাব",
    "synonyms": [
      "delicate",
      "soft",
      "crisp"
    ],
    "antonyms": [
      "tough",
      "toughened"
    ],
    "example": "The student learned how to use tender correctly in a sentence."
  },
  "tentative": {
    "word": "Tentative",
    "pos": "adjective",
    "simpleDefinition": "Uncertain; subject to future change.",
    "banglaMeaning": "অনিহি্নত / দোদুল্যমান",
    "synonyms": [
      "unsettled",
      "doubtful",
      "provisionary"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tentative correctly in a sentence."
  },
  "tenterhooks": {
    "word": "Tenterhooks",
    "pos": "noun",
    "simpleDefinition": "One of a series of hooks used to stretch cloth on a tenter.",
    "banglaMeaning": "উদে্ধগপূণর্ অনিহি্নত অবস্থা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tenterhooks correctly in a sentence."
  },
  "tenure": {
    "word": "Tenure",
    "pos": "noun",
    "simpleDefinition": "A status of having a permanent post with enhanced job security within an academic institution.",
    "banglaMeaning": "কার্যকাল",
    "synonyms": [
      "incumbency",
      "land tenure",
      "term of office"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tenure correctly in a sentence."
  },
  "tepid": {
    "word": "Tepid",
    "pos": "adjective",
    "simpleDefinition": "Lukewarm; neither warm nor cool.",
    "banglaMeaning": "অস্ফ গরম বা হৃসুম হৃসুম গরম",
    "synonyms": [
      "lukewarm",
      "uninterested"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "I'm drinking a cup of tepid water."
  },
  "thankless": {
    "word": "Thankless",
    "pos": "adjective",
    "simpleDefinition": "Ungrateful or unappreciative.",
    "banglaMeaning": "অকৃতন্ত্র",
    "synonyms": [
      "ungrateful",
      "unappreciated",
      "unrewarding"
    ],
    "antonyms": [
      "grateful",
      "thankful"
    ],
    "example": "The student learned how to use thankless correctly in a sentence."
  },
  "theist": {
    "word": "Theist",
    "pos": "noun",
    "simpleDefinition": "One who believes in the existence of a god or gods.",
    "banglaMeaning": "আসি্তক",
    "synonyms": [
      "Related to theist",
      "Similar"
    ],
    "antonyms": [
      "atheist"
    ],
    "example": "The teacher gave an insightful explanation of theist."
  },
  "theologist": {
    "word": "Theologist",
    "pos": "noun",
    "simpleDefinition": "One who is skilled in, professes or practices that which relates or pertains to God.",
    "banglaMeaning": "ধর্মতত্রবিৎ",
    "synonyms": [
      "theologian",
      "theologizer"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use theologist correctly in a sentence."
  },
  "thorough": {
    "word": "Thorough",
    "pos": "adjective",
    "simpleDefinition": "Painstaking and careful not to miss or omit any detail.",
    "banglaMeaning": "পুড্ডানুপুড্ড",
    "synonyms": [
      "complete",
      "careful",
      "exhaustive"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use thorough correctly in a sentence."
  },
  "thread": {
    "word": "Thread",
    "pos": "noun",
    "simpleDefinition": "A cord formed by spinning or twisting together textile fibers or filaments into one or more continuous strands, typically used in needlework.",
    "banglaMeaning": "সুতা",
    "synonyms": [
      "yarn",
      "weave",
      "string"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use thread correctly in a sentence."
  },
  "thrifty": {
    "word": "Thrifty",
    "pos": "adjective",
    "simpleDefinition": "Showing thrift; economical; frugal.",
    "banglaMeaning": "মিতব্যয়ী / কিপটে",
    "synonyms": [
      "provident",
      "careful",
      "economical"
    ],
    "antonyms": [
      "wasteful"
    ],
    "example": "The student learned how to use thrifty correctly in a sentence."
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
    "pos": "adjective",
    "simpleDefinition": "Extremely small in physical dimensions",
    "banglaMeaning": "খুব ছোট",
    "synonyms": [
      "miniature",
      "microscopic",
      "minute"
    ],
    "antonyms": [
      "massive",
      "huge",
      "gigantic"
    ],
    "example": "The insect was tiny in size and hard to spot."
  },
  "tipped": {
    "word": "Tipped",
    "pos": "adjective",
    "simpleDefinition": "Having a tip; or having a tip as specified (used in combination).",
    "banglaMeaning": "একপাশ বা প্রানে্ত উঠানো",
    "synonyms": [
      "inclined",
      "canted",
      "atilt"
    ],
    "antonyms": [
      "untipped"
    ],
    "example": "The student learned how to use tipped correctly in a sentence."
  },
  "tirade": {
    "word": "Tirade",
    "pos": "noun",
    "simpleDefinition": "A long, angry or violent speech.",
    "banglaMeaning": "তিরস্কারপূণর্ দীঘর্ বক্তৃ তা",
    "synonyms": [
      "broadside",
      "philippic"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tirade correctly in a sentence."
  },
  "titanic": {
    "word": "Titanic",
    "pos": "adjective",
    "simpleDefinition": "(comparable) Having great size, or great force, power, or strength.",
    "banglaMeaning": "বিশাল",
    "synonyms": [
      "large",
      "big"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use titanic correctly in a sentence."
  },
  "to blow hot and cold": {
    "word": "To blow hot and cold",
    "pos": "idiom",
    "simpleDefinition": "To swing between enthusiasm and disinterest; vacillate",
    "banglaMeaning": "অসামন্নস্যপূণর্ হওয়া",
    "synonyms": [
      "vacillate",
      "waver",
      "hesitate"
    ],
    "antonyms": [
      "remain steadfast",
      "commit"
    ],
    "example": "He keeps blowing hot and cold about joining the new startup."
  },
  "to do away with": {
    "word": "To do away with",
    "pos": "verb",
    "simpleDefinition": "To abolish, terminate, or completely eliminate",
    "banglaMeaning": "পরিহার করা",
    "synonyms": [
      "abolish",
      "eliminate",
      "discard"
    ],
    "antonyms": [
      "retain",
      "preserve",
      "keep"
    ],
    "example": "The school decided to do away with the outdated uniform policy."
  },
  "to drive off": {
    "word": "To drive off",
    "pos": "verb",
    "simpleDefinition": "To force someone or something to leave; repel",
    "banglaMeaning": "পরিহার করা",
    "synonyms": [
      "repel",
      "chase away",
      "disperse"
    ],
    "antonyms": [
      "welcome",
      "attract"
    ],
    "example": "The guards managed to drive off the intruders."
  },
  "tomb": {
    "word": "Tomb",
    "pos": "noun",
    "simpleDefinition": "A small building, or a room within one, for the remains of the dead, with walls, a roof, and (if it is to be used for more than one corpse) a door. It may be partly or wholly in the ground (except for its entrance) in a cemetery, or it may be inside a church proper or in its crypt. Single tombs may be permanently sealed; those for families (or other groups) have doors for access whenever needed.",
    "banglaMeaning": "কবর",
    "synonyms": [
      "grave"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tomb correctly in a sentence."
  },
  "toot your own horn": {
    "word": "Toot your own horn",
    "pos": "idiom",
    "simpleDefinition": "To boast, brag, or praise oneself ostentatiously",
    "banglaMeaning": "গর্ব করা",
    "synonyms": [
      "brag",
      "boast",
      "show off"
    ],
    "antonyms": [
      "humble oneself",
      "be modest"
    ],
    "example": "She is talented but dislikes having to toot her own horn."
  },
  "toppling": {
    "word": "Toppling",
    "pos": "noun",
    "simpleDefinition": "The act by which something is toppled.",
    "banglaMeaning": "ডিগবাজি খাইয়ে পড়া",
    "synonyms": [
      "falling"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use toppling correctly in a sentence."
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
    "simpleDefinition": "A state of being inactive or stuporous.",
    "banglaMeaning": "অলস",
    "synonyms": [
      "listlessness",
      "torpidity",
      "torpidness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use torpor correctly in a sentence."
  },
  "tough": {
    "word": "Tough",
    "pos": "adjective",
    "simpleDefinition": "Strong and resilient; sturdy.",
    "banglaMeaning": "শক্ত",
    "synonyms": [
      "hard",
      "difficult",
      "rugged"
    ],
    "antonyms": [
      "tender",
      "untoughened"
    ],
    "example": "The student learned how to use tough correctly in a sentence."
  },
  "towered high": {
    "word": "Towered high",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being towered high.",
    "banglaMeaning": "মাথা উঁচু করে দাড়ানো",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use towered high correctly in a sentence."
  },
  "tract": {
    "word": "Tract",
    "pos": "noun",
    "simpleDefinition": "An area or expanse.",
    "banglaMeaning": "ধর্ম বা বৈনতিকতা বিষয়ে পুসি্তকা",
    "synonyms": [
      "parcel",
      "pathway",
      "pamphlet"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use tract correctly in a sentence."
  },
  "traduce": {
    "word": "Traduce",
    "pos": "verb",
    "simpleDefinition": "To malign a person or entity by making malicious and false or defamatory statements.",
    "banglaMeaning": "নিন্দা করা / অপবাদ দেয়া",
    "synonyms": [
      "malign",
      "badmouth",
      "drag through the mud"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use traduce correctly in a sentence."
  },
  "traitor": {
    "word": "Traitor",
    "pos": "noun",
    "simpleDefinition": "Someone who violates an allegiance and betrays their country; someone guilty of treason; one who, in breach of trust, delivers their country to an enemy, or yields up any fort or place entrusted to their defense, or surrenders an army or body of troops to the enemy, unless when vanquished.",
    "banglaMeaning": "বিশ্বাসঘাতক",
    "synonyms": [
      "treasonist",
      "double-dealer",
      "double-crosser"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use traitor correctly in a sentence."
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
    "simpleDefinition": "Remaining for only a brief time.",
    "banglaMeaning": "অস্থায়ী",
    "synonyms": [
      "ephemeral",
      "transitory",
      "fugacious"
    ],
    "antonyms": [
      "immanent",
      "subjective"
    ],
    "example": "The student learned how to use transient correctly in a sentence."
  },
  "transmission": {
    "word": "Transmission",
    "pos": "noun",
    "simpleDefinition": "The act of transmitting, e.g. data (signals) or electric power.",
    "banglaMeaning": "ছড়ানো / প্রচার",
    "synonyms": [
      "contagion",
      "infection",
      "transmitting"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use transmission correctly in a sentence."
  },
  "transmit": {
    "word": "Transmit",
    "pos": "verb",
    "simpleDefinition": "To communicate (news or information, especially electronically).",
    "banglaMeaning": "প্রেরণ বা হস্তান্তর করা",
    "synonyms": [
      "convey",
      "conduct",
      "beam"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use transmit correctly in a sentence."
  },
  "trapped": {
    "word": "Trapped",
    "pos": "adjective",
    "simpleDefinition": "Caught in a trap.",
    "banglaMeaning": "আটকা পরা",
    "synonyms": [
      "treed",
      "unfree",
      "cornered"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use trapped correctly in a sentence."
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
    "simpleDefinition": "A formal, usually lengthy, systematic discourse on some subject.",
    "banglaMeaning": "গবেষণামূলক আলোচনা গ্রব্দ",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use treatise correctly in a sentence."
  },
  "trespass": {
    "word": "Trespass",
    "pos": "verb",
    "simpleDefinition": "To enter someone else's property illegally.",
    "banglaMeaning": "পাপ / সীমালণ্টন",
    "synonyms": [
      "encroachment",
      "transgress",
      "intrusion"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use trespass correctly in a sentence."
  },
  "trial": {
    "word": "Trial",
    "pos": "noun",
    "simpleDefinition": "An occasion on which a person or thing is tested to find out how well they perform or how suitable they are.",
    "banglaMeaning": "চেষ্টা",
    "synonyms": [
      "model",
      "run",
      "test"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use trial correctly in a sentence."
  },
  "trick": {
    "word": "Trick",
    "pos": "noun",
    "simpleDefinition": "Something designed to fool, dupe, outsmart, mislead or swindle.",
    "banglaMeaning": "প্রতারনা",
    "synonyms": [
      "legerdemain",
      "deception",
      "antic"
    ],
    "antonyms": [
      "maladroit"
    ],
    "example": "The student learned how to use trick correctly in a sentence."
  },
  "trickery": {
    "word": "Trickery",
    "pos": "noun",
    "simpleDefinition": "Deception, deceit or underhanded behavior.",
    "banglaMeaning": "প্রতারনা",
    "synonyms": [
      "chicanery",
      "skulduggery",
      "jiggery-pokery"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use trickery correctly in a sentence."
  },
  "triumph": {
    "word": "Triumph",
    "pos": "noun",
    "simpleDefinition": "A conclusive success following an effort, conflict, or confrontation of obstacles; victory; conquest.",
    "banglaMeaning": "বিজয়",
    "synonyms": [
      "prevail",
      "wallow",
      "rejoice"
    ],
    "antonyms": [
      "defeat",
      "licking"
    ],
    "example": "The student learned how to use triumph correctly in a sentence."
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
    "simpleDefinition": "A collection of people; a number; a multitude (in general).",
    "banglaMeaning": "দল বা পাল",
    "synonyms": [
      "Related to troops",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of troops."
  },
  "truant": {
    "word": "Truant",
    "pos": "adjective",
    "simpleDefinition": "Of a student: absent from school without permission.",
    "banglaMeaning": "যে ব্যক্তি তার র্কমস্থল হতে পালায়",
    "synonyms": [
      "absent",
      "awol",
      "no-show"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use truant correctly in a sentence."
  },
  "trustworthy": {
    "word": "Trustworthy",
    "pos": "adjective",
    "simpleDefinition": "Deserving of trust, reliable.",
    "banglaMeaning": "বিশ্বস্ত",
    "synonyms": [
      "reliable",
      "authentic",
      "sure"
    ],
    "antonyms": [
      "untrustworthy",
      "untrusty"
    ],
    "example": "The student learned how to use trustworthy correctly in a sentence."
  },
  "turbid": {
    "word": "Turbid",
    "pos": "adjective",
    "simpleDefinition": "Having the lees or sediment disturbed; not clear.",
    "banglaMeaning": "ঘোলাটে",
    "synonyms": [
      "ambiguous",
      "equivocal",
      "cloudy"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "turbid water"
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
    "simpleDefinition": "Situated beyond, or on the farther side.",
    "banglaMeaning": "গোপন বা অপ্রকাশিত",
    "synonyms": [
      "Related to ulterior",
      "Similar"
    ],
    "antonyms": [
      "prior",
      "ostensible",
      "citerior"
    ],
    "example": "The teacher gave an insightful explanation of ulterior."
  },
  "uncover": {
    "word": "Uncover",
    "pos": "verb",
    "simpleDefinition": "To show openly; to disclose; to reveal.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "reveal",
      "unveil",
      "expose"
    ],
    "antonyms": [
      "cover"
    ],
    "example": "The student learned how to use uncover correctly in a sentence."
  },
  "understatement": {
    "word": "Understatement",
    "pos": "noun",
    "simpleDefinition": "A figure of speech whereby something is made to seem smaller or less important than it actually is, either through phrasing or lack of emphasis, often for ironic effect.",
    "banglaMeaning": "কমিয়ে বলা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "exaggeration",
      "overstatement",
      "magnification"
    ],
    "example": "The student learned how to use understatement correctly in a sentence."
  },
  "undertake": {
    "word": "Undertake",
    "pos": "verb",
    "simpleDefinition": "To take upon oneself; to start, to embark on (a specific task etc.).",
    "banglaMeaning": "দায়িধভার গ্রহণকরা",
    "synonyms": [
      "contract",
      "attempt",
      "guarantee"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use undertake correctly in a sentence."
  },
  "unearth": {
    "word": "Unearth",
    "pos": "verb",
    "simpleDefinition": "To uncover or find; to bring out from concealment.",
    "banglaMeaning": "প্রকাশ করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use unearth correctly in a sentence."
  },
  "unequivocal": {
    "word": "Unequivocal",
    "pos": "adjective",
    "simpleDefinition": "Unambiguous; without equivocation or ambiguity; singularly clear, unmistakable, or unquestionable.",
    "banglaMeaning": "সুস্পষ্ট",
    "synonyms": [
      "definitive",
      "univocal",
      "conclusive"
    ],
    "antonyms": [
      "ambiguous",
      "equivocal"
    ],
    "example": "The student learned how to use unequivocal correctly in a sentence."
  },
  "unfathomable": {
    "word": "Unfathomable",
    "pos": "adjective",
    "simpleDefinition": "Impossible to fathom.",
    "banglaMeaning": "অতল / গভীর",
    "synonyms": [
      "fathomless",
      "bottomless",
      "unsoundable"
    ],
    "antonyms": [
      "comprehensible",
      "fathomable"
    ],
    "example": "The student learned how to use unfathomable correctly in a sentence."
  },
  "unforeseen": {
    "word": "Unforeseen",
    "pos": "adjective",
    "simpleDefinition": "Not expected.",
    "banglaMeaning": "অপ্রত্যাশিত",
    "synonyms": [
      "unexpected",
      "sudden",
      "unanticipated"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use unforeseen correctly in a sentence."
  },
  "uniform": {
    "word": "Uniform",
    "pos": "noun",
    "simpleDefinition": "A distinctive outfit that serves to identify members of a group, company, prison inmates, etc.",
    "banglaMeaning": "সমজাতীয়",
    "synonyms": [
      "regular",
      "homogeneous",
      "consistent"
    ],
    "antonyms": [
      "multiform",
      "differentiated"
    ],
    "example": "The student learned how to use uniform correctly in a sentence."
  },
  "unimaginable": {
    "word": "Unimaginable",
    "pos": "adjective",
    "simpleDefinition": "Unable to be imagined; inconceivable or mind-boggling; beyond belief.",
    "banglaMeaning": "অকস্ফনীয়",
    "synonyms": [
      "impossible",
      "inconceivable",
      "unthinkable"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use unimaginable correctly in a sentence."
  },
  "uninfluenced": {
    "word": "Uninfluenced",
    "pos": "adjective",
    "simpleDefinition": "Not influenced.",
    "banglaMeaning": "প্রভাবমুক্ত",
    "synonyms": [
      "unaffected",
      "untouched",
      "unswayed"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use uninfluenced correctly in a sentence."
  },
  "unintended": {
    "word": "Unintended",
    "pos": "adjective",
    "simpleDefinition": "Not intended; unplanned.",
    "banglaMeaning": "অনিজ্ঞাকৃত",
    "synonyms": [
      "inadvertent",
      "fortuitous",
      "unwitting"
    ],
    "antonyms": [
      "intended"
    ],
    "example": "The student learned how to use unintended correctly in a sentence."
  },
  "unruly": {
    "word": "Unruly",
    "pos": "adjective",
    "simpleDefinition": "Wild; uncontrolled.",
    "banglaMeaning": "অবাধ্য",
    "synonyms": [
      "boisterous",
      "disorderly",
      "insubordinate"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use unruly correctly in a sentence."
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
    "simpleDefinition": "Not stable.",
    "banglaMeaning": "অস্থির",
    "synonyms": [
      "tender",
      "precarious",
      "volatile"
    ],
    "antonyms": [
      "stable"
    ],
    "example": "The student learned how to use unstable correctly in a sentence."
  },
  "untamed": {
    "word": "Untamed",
    "pos": "adjective",
    "simpleDefinition": "Wild, uncontrolled, especially of animals not domesticated or trained to human contact.",
    "banglaMeaning": "অশান্ত / বন্য",
    "synonyms": [
      "wild",
      "feral",
      "unbroken"
    ],
    "antonyms": [
      "tamed",
      "tame"
    ],
    "example": "The student learned how to use untamed correctly in a sentence."
  },
  "untenable": {
    "word": "Untenable",
    "pos": "adjective",
    "simpleDefinition": "Not able to be held or sustained, such as of an opinion or position.",
    "banglaMeaning": "টিকিয়ে রাখা যায়না এমন",
    "synonyms": [
      "unreasonable",
      "indefensible"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use untenable correctly in a sentence."
  },
  "unwitting": {
    "word": "Unwitting",
    "pos": "adjective",
    "simpleDefinition": "Unaware or uninformed; oblivious.",
    "banglaMeaning": "অনিজ্ঞাকৃত",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use unwitting correctly in a sentence."
  },
  "upheld": {
    "word": "Upheld",
    "pos": "verb",
    "simpleDefinition": "To keep erect; to support; to sustain; to keep from falling.",
    "banglaMeaning": "উপরের দিকে নেওয়া",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use upheld correctly in a sentence."
  },
  "urban": {
    "word": "Urban",
    "pos": "adjective",
    "simpleDefinition": "Of, pertaining to, characteristic of, or happening or located in, a city or town; of, pertaining to, or characteristic of life in such a place, especially when contrasted with the countryside.",
    "banglaMeaning": "শস্থরে",
    "synonyms": [
      "citified",
      "urbanized",
      "cityfied"
    ],
    "antonyms": [
      "rural"
    ],
    "example": "The student learned how to use urban correctly in a sentence."
  },
  "urgency": {
    "word": "Urgency",
    "pos": "noun",
    "simpleDefinition": "The quality or condition of being urgent.",
    "banglaMeaning": "জরুরী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use urgency correctly in a sentence."
  },
  "usurp": {
    "word": "Usurp",
    "pos": "verb",
    "simpleDefinition": "To seize power from another, usually by illegitimate means.",
    "banglaMeaning": "জবরদখল",
    "synonyms": [
      "arrogate",
      "assume",
      "take over"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use usurp correctly in a sentence."
  },
  "utopia": {
    "word": "Utopia",
    "pos": "noun",
    "simpleDefinition": "A world in which everything and everyone works in perfect harmony.",
    "banglaMeaning": "কস্ফরাজ্য",
    "synonyms": [
      "zion",
      "new latin utopia"
    ],
    "antonyms": [
      "dystopia"
    ],
    "example": "The student learned how to use utopia correctly in a sentence."
  },
  "vacillate": {
    "word": "Vacillate",
    "pos": "verb",
    "simpleDefinition": "To swing indecisively from one course of action or opinion to another.",
    "banglaMeaning": "দি্ধধা করা",
    "synonyms": [
      "hover",
      "fluctuate",
      "waver"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vacillate correctly in a sentence."
  },
  "vague": {
    "word": "Vague",
    "pos": "adjective",
    "simpleDefinition": "Not clearly expressed; stated in indefinite terms.",
    "banglaMeaning": "অস্পষ্ট",
    "synonyms": [
      "obscure",
      "indistinct",
      "dim"
    ],
    "antonyms": [
      "defined"
    ],
    "example": "The student learned how to use vague correctly in a sentence."
  },
  "valiant": {
    "word": "Valiant",
    "pos": "noun",
    "simpleDefinition": "A person who acts with valor, showing hero-like characteristics in the midst of danger.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "orped",
      "valorous"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of valiant."
  },
  "valley": {
    "word": "Valley",
    "pos": "noun",
    "simpleDefinition": "An elongated depression cast between hills or mountains, often with a river flowing through it.",
    "banglaMeaning": "উপত্যকা",
    "synonyms": [
      "vale"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use valley correctly in a sentence."
  },
  "valorous": {
    "word": "Valorous",
    "pos": "adjective",
    "simpleDefinition": "Having or displaying valour.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "valiant",
      "brave",
      "courageous"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use valorous correctly in a sentence."
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
    "simpleDefinition": "In a vehement manner; expressing with a strong or forceful attitude.",
    "banglaMeaning": "তীজ্ঞভাবে",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vehemently correctly in a sentence."
  },
  "velocity": {
    "word": "Velocity",
    "pos": "noun",
    "simpleDefinition": "A vector quantity that denotes the rate of change of position with respect to time, combining speed with a directional component.",
    "banglaMeaning": "বেগ",
    "synonyms": [
      "speed"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use velocity correctly in a sentence."
  },
  "vendor": {
    "word": "Vendor",
    "pos": "noun",
    "simpleDefinition": "A person or a company that vends or sells.",
    "banglaMeaning": "বিকে্রতো",
    "synonyms": [
      "trafficker",
      "vender",
      "seller"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vendor correctly in a sentence."
  },
  "venerate": {
    "word": "Venerate",
    "pos": "verb",
    "simpleDefinition": "To treat with great respect and deference.",
    "banglaMeaning": "সম্মান করা / ঙ্কদ্ধা করা",
    "synonyms": [
      "reverence",
      "fear",
      "revere"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use venerate correctly in a sentence."
  },
  "venture": {
    "word": "Venture",
    "pos": "noun",
    "simpleDefinition": "A risky or daring undertaking or journey.",
    "banglaMeaning": "উদে্যাগ",
    "synonyms": [
      "brave",
      "jeopardize",
      "adventure"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use venture correctly in a sentence."
  },
  "venturesome": {
    "word": "Venturesome",
    "pos": "adjective",
    "simpleDefinition": "Bold; willing to take risks; adventurous.",
    "banglaMeaning": "সাহসী",
    "synonyms": [
      "audacious",
      "bold",
      "dangerous"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use venturesome correctly in a sentence."
  },
  "verbose": {
    "word": "Verbose",
    "pos": "adjective",
    "simpleDefinition": "Using far more words than necessary",
    "banglaMeaning": "শব্দবহুল / বাগাড়ম্বরপূর্ণ / বার্কসবস্ব",
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
    "simpleDefinition": "The property of being versatile or having many different abilities.",
    "banglaMeaning": "বস্থমুখী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use versatility correctly in a sentence."
  },
  "vicious": {
    "word": "Vicious",
    "pos": "adjective",
    "simpleDefinition": "Violent, destructive and cruel.",
    "banglaMeaning": "ঘৃণ্য",
    "synonyms": [
      "malevolent",
      "evil",
      "wicked"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vicious correctly in a sentence."
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
    "simpleDefinition": "Alternative form of vigour. [Active strength or force of body or mind; a capacity for exertion, physically, intellectually, or morally; energy.].",
    "banglaMeaning": "শারীরিক বা মানসিক শক্তি",
    "synonyms": [
      "vigour",
      "energy",
      "vim"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vigor correctly in a sentence."
  },
  "vigorous": {
    "word": "Vigorous",
    "pos": "adjective",
    "simpleDefinition": "Physically strong and active.",
    "banglaMeaning": "সবল",
    "synonyms": [
      "robust",
      "energetic"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vigorous correctly in a sentence."
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
    "simpleDefinition": "Able to be seen.",
    "banglaMeaning": "দৃশ্যমান",
    "synonyms": [
      "conspicuous",
      "overt",
      "apparent"
    ],
    "antonyms": [
      "invisible",
      "unseeable"
    ],
    "example": "The student learned how to use visible correctly in a sentence."
  },
  "visionary": {
    "word": "Visionary",
    "pos": "adjective",
    "simpleDefinition": "Having vision or foresight.",
    "banglaMeaning": "কাস্ফনিক",
    "synonyms": [
      "airy",
      "seer",
      "impractical"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use visionary correctly in a sentence."
  },
  "vital": {
    "word": "Vital",
    "pos": "adjective",
    "simpleDefinition": "Necessary to the continuation of life; being the seat of life; being that on which life depends.",
    "banglaMeaning": "অত্যাবশ্যক / সজীব",
    "synonyms": [
      "critical",
      "essential",
      "indispensable"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vital correctly in a sentence."
  },
  "vocation": {
    "word": "Vocation",
    "pos": "noun",
    "simpleDefinition": "An occupation for which a person is suited, trained or qualified.",
    "banglaMeaning": "বৃতি্ত / ব্যবসায়",
    "synonyms": [
      "calling",
      "career",
      "occupation"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vocation correctly in a sentence."
  },
  "vociferous": {
    "word": "Vociferous",
    "pos": "adjective",
    "simpleDefinition": "Making or characterized by a noisy outcry; clamorous.",
    "banglaMeaning": "শল্পবস্থল / গোলমালকারী",
    "synonyms": [
      "blatant",
      "clamorous",
      "strident"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vociferous correctly in a sentence."
  },
  "void": {
    "word": "Void",
    "pos": "adjective",
    "simpleDefinition": "Containing nothing; empty; not occupied or filled.",
    "banglaMeaning": "বাতিল",
    "synonyms": [
      "vitiate",
      "nugatory",
      "nullify"
    ],
    "antonyms": [
      "validate",
      "formalize"
    ],
    "example": "The student learned how to use void correctly in a sentence."
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
    "simpleDefinition": "Having the qualities or characteristics of voluptuous.",
    "banglaMeaning": "আনন্দবাদী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use voluptuous correctly in a sentence."
  },
  "vow": {
    "word": "Vow",
    "pos": "noun",
    "simpleDefinition": "A solemn promise to perform some act, or behave in a specified manner, especially a promise to live and act in accordance with the rules of a religious order.",
    "banglaMeaning": "শপথ করা",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vow correctly in a sentence."
  },
  "voyage": {
    "word": "Voyage",
    "pos": "noun",
    "simpleDefinition": "A long journey, especially by ship.",
    "banglaMeaning": "সমুদ্র যাত্রা",
    "synonyms": [
      "navigate",
      "sail",
      "ocean trip"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use voyage correctly in a sentence."
  },
  "vulgarity": {
    "word": "Vulgarity",
    "pos": "noun",
    "simpleDefinition": "An offensive or obscene act or expression.",
    "banglaMeaning": "অহ্বীলতা",
    "synonyms": [
      "vulgarism",
      "coarseness",
      "commonness"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use vulgarity correctly in a sentence."
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
    "simpleDefinition": "A heavier four-wheeled (normally horse-drawn) vehicle designed to carry goods (or sometimes people).",
    "banglaMeaning": "মালবাহী গাড়ি",
    "synonyms": [
      "waggon",
      "beach wagon",
      "police van"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use wagon correctly in a sentence."
  },
  "waive": {
    "word": "Waive",
    "pos": "verb",
    "simpleDefinition": "To relinquish (a right etc.); to give up claim to; to forgo.",
    "banglaMeaning": "মওহৃফ করা",
    "synonyms": [
      "render",
      "relinquish",
      "forgo"
    ],
    "antonyms": [
      "arrogate",
      "claim",
      "lay claim"
    ],
    "example": "The student learned how to use waive correctly in a sentence."
  },
  "wallet": {
    "word": "Wallet",
    "pos": "noun",
    "simpleDefinition": "A small case, often flat and often made of leather, for keeping money (especially paper money), credit cards, etc.",
    "banglaMeaning": "মানি ব্যাগ",
    "synonyms": [
      "billfold",
      "notecase"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use wallet correctly in a sentence."
  },
  "wander": {
    "word": "Wander",
    "pos": "verb",
    "simpleDefinition": "To move without purpose or specified destination; often in search of livelihood.",
    "banglaMeaning": "উদ্দেশ্যহীনভাবে ভ্রমণ করা",
    "synonyms": [
      "cast",
      "drift",
      "ramble"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use wander correctly in a sentence."
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
    "simpleDefinition": "A place for storing large amounts of products. In logistics, a place where products go to from the manufacturer before going to the retailer.",
    "banglaMeaning": "মালপত্র রাখার স্থান",
    "synonyms": [
      "storage warehouse"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use warehouse correctly in a sentence."
  },
  "warlock": {
    "word": "Warlock",
    "pos": "noun",
    "simpleDefinition": "The state, quality, or fact of being warlock.",
    "banglaMeaning": "মায়াবী",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use warlock correctly in a sentence."
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
    "simpleDefinition": "Given to wilful, perverse deviation from the expected norm; tending to stray.",
    "banglaMeaning": "সে্বজ্ঞাচারী",
    "synonyms": [
      "obstinate",
      "contrary",
      "perverse"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use wayward correctly in a sentence."
  },
  "wear out": {
    "word": "Wear out",
    "pos": "verb",
    "simpleDefinition": "To cause (something) to become damaged, useless, or ineffective through continued use, especially hard, heavy, or careless use.",
    "banglaMeaning": "ব্যবহারের ধারা ক্ষয় হওয়া",
    "synonyms": [
      "Related",
      "Similar"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use wear out correctly in a sentence."
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
    "pos": "noun",
    "simpleDefinition": "The sale of products, often in large quantities, to retailers or other merchants.",
    "banglaMeaning": "পাইকারী",
    "synonyms": [
      "sweeping",
      "indiscriminate",
      "in large quantities"
    ],
    "antonyms": [
      "retail"
    ],
    "example": "The student learned how to use wholesale correctly in a sentence."
  },
  "wicked": {
    "word": "Wicked",
    "pos": "noun",
    "simpleDefinition": "People who are wicked.",
    "banglaMeaning": "দুহ্নরিত্র",
    "synonyms": [
      "awesome",
      "bad",
      "cool"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The teacher gave an insightful explanation of wicked."
  },
  "windy": {
    "word": "Windy",
    "pos": "noun",
    "simpleDefinition": "Fart.",
    "banglaMeaning": "ঝড়ো",
    "synonyms": [
      "blowy",
      "blustery",
      "breezy"
    ],
    "antonyms": [
      "calm",
      "windless"
    ],
    "example": "The teacher gave an insightful explanation of windy."
  },
  "withhold": {
    "word": "Withhold",
    "pos": "verb",
    "simpleDefinition": "To keep (information, assent etc) to oneself rather than revealing it.",
    "banglaMeaning": "পেছনে টেনে রাখা বা আটকিয়ে রাখা",
    "synonyms": [
      "deduct",
      "recoup",
      "keep back"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use withhold correctly in a sentence."
  },
  "worsen": {
    "word": "Worsen",
    "pos": "verb",
    "simpleDefinition": "To become worse; to get worse.",
    "banglaMeaning": "শোচনীয় হওয়া",
    "synonyms": [
      "decline",
      "exacerbate",
      "aggravate"
    ],
    "antonyms": [
      "ameliorate",
      "improve",
      "meliorate"
    ],
    "example": "The student learned how to use worsen correctly in a sentence."
  },
  "worship": {
    "word": "Worship",
    "pos": "noun",
    "simpleDefinition": "The devotion accorded to a deity or to a sacred object.",
    "banglaMeaning": "পূজা",
    "synonyms": [
      "adoration",
      "idolize",
      "hero-worship"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use worship correctly in a sentence."
  },
  "worth yours": {
    "word": "Worth yours",
    "pos": "adjective",
    "simpleDefinition": "Valuable enough to justify time, money, or effort",
    "banglaMeaning": "দক্ষ",
    "synonyms": [
      "worthwhile",
      "valuable",
      "beneficial"
    ],
    "antonyms": [
      "worthless"
    ],
    "example": "The workshop is informative and well worth yours."
  },
  "worthy of": {
    "word": "Worthy of",
    "pos": "adjective",
    "simpleDefinition": "Deserving of respect, attention, or praise",
    "banglaMeaning": "যোগ্য",
    "synonyms": [
      "deserving of",
      "meriting",
      "eligible for"
    ],
    "antonyms": [
      "unworthy of"
    ],
    "example": "Her selfless dedication is truly worthy of recognition."
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
    "simpleDefinition": "A written order, issued by a court, ordering someone to do (or stop doing) something.",
    "banglaMeaning": "কোন বিষয় সশ্মকের্ কোটের্র লিখিত অডর্ার",
    "synonyms": [
      "judicial writ"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The student learned how to use writ correctly in a sentence."
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
    "simpleDefinition": "To give as a result or outcome; to produce or render.",
    "banglaMeaning": "বশ্যতা স্বীকার করা",
    "synonyms": [
      "render",
      "concede",
      "issue"
    ],
    "antonyms": [
      "stand",
      "survive",
      "make it"
    ],
    "example": "The student learned how to use yield correctly in a sentence."
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
    "simpleDefinition": "The outer skin of a citrus fruit, used as a flavouring or garnish.",
    "banglaMeaning": "রুচি / প্রানবন্ততা",
    "synonyms": [
      "gusto",
      "relish",
      "punch"
    ],
    "antonyms": [
      "No common antonym"
    ],
    "example": "The orange zest gives the strong flavor in this dish."
  }
};
