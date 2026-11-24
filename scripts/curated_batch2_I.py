import os
import json

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

BATCH2_DATA = {
  "idealistic": {
    "word": "Idealistic",
    "pos": "adjective",
    "simpleDefinition": "Believing in high moral principles or ideals, sometimes unrealistically.",
    "synonyms": ["Visionary", "Utopian", "Noble", "Optimistic"],
    "antonyms": ["Pragmatic", "Realistic", "Cynical"],
    "example": "Her idealistic vision inspired the team to work toward cleaner cities."
  },
  "identical": {
    "word": "Identical",
    "pos": "adjective",
    "simpleDefinition": "Exactly the same in appearance, character, or quality.",
    "synonyms": ["Same", "Duplicate", "Matching", "Equal"],
    "antonyms": ["Different", "Distinct", "Dissimilar"],
    "example": "The twins wore identical blue dresses to the school party."
  },
  "idolatrous": {
    "word": "Idolatrous",
    "pos": "adjective",
    "simpleDefinition": "Worshiping idols or showing excessive admiration and devotion to something.",
    "synonyms": ["Worshipful", "Adoring", "Reverential", "Devoted"],
    "antonyms": ["Iconoclastic", "Critical", "Disrespectful"],
    "example": "Their idolatrous obsession with celebrity culture distorted their values."
  },
  "idyllic": {
    "word": "Idyllic",
    "pos": "adjective",
    "simpleDefinition": "Extremely pleasant, peaceful, and picturesque, especially in a rural setting.",
    "synonyms": ["Peaceful", "Serene", "Picturesque", "Pastoral"],
    "antonyms": ["Chaotic", "Stressful", "Troubled"],
    "example": "They spent their summer holiday in an idyllic mountain cottage."
  },
  "illusive": {
    "word": "Illusive",
    "pos": "adjective",
    "simpleDefinition": "Deceptive, misleading, or giving an illusion of reality that does not exist.",
    "synonyms": ["Illusory", "Deceptive", "Misleading", "Fleeting"],
    "antonyms": ["Real", "Genuine", "Tangible"],
    "example": "Lasting peace in the region proved to be an illusive dream."
  },
  "imbecile": {
    "word": "Imbecile",
    "pos": "noun",
    "simpleDefinition": "A foolish, stupid, or silly person.",
    "synonyms": ["Fool", "Idiot", "Dolt", "Dunce"],
    "antonyms": ["Genius", "Intellectual"],
    "example": "He felt like an imbecile when he realized he forgot his passport."
  },
  "imbecility": {
    "word": "Imbecility",
    "pos": "noun",
    "simpleDefinition": "Extreme foolishness, stupidity, or senseless behavior.",
    "synonyms": ["Stupidity", "Folly", "Foolishness", "Absurdity"],
    "antonyms": ["Wisdom", "Intelligence", "Prudence"],
    "example": "The imbecility of driving at high speed in dense fog shocked everyone."
  },
  "immigrant": {
    "word": "Immigrant",
    "pos": "noun",
    "simpleDefinition": "A person who comes to live permanently in a foreign country.",
    "synonyms": ["Settler", "Newcomer", "Migrant"],
    "antonyms": ["Native", "Emigrant"],
    "example": "Her grandparents were immigrants who built a new life in the country."
  },
  "impair": {
    "word": "Impair",
    "pos": "verb",
    "simpleDefinition": "To weaken, damage, or diminish the strength or quality of something.",
    "synonyms": ["Damage", "Weaken", "Harm", "Diminish"],
    "antonyms": ["Improve", "Enhance", "Strengthen"],
    "example": "Listening to music at excessive volume can permanently impair your hearing."
  },
  "impel": {
    "word": "Impel",
    "pos": "verb",
    "simpleDefinition": "To drive, force, or strongly urge someone to take a specific action.",
    "synonyms": ["Drive", "Urge", "Motivate", "Prompt"],
    "antonyms": ["Deter", "Discourage", "Hinder"],
    "example": "A strong sense of duty impelled the officer to rescue the trapped family."
  },
  "impertinence": {
    "word": "Impertinence",
    "pos": "noun",
    "simpleDefinition": "Lack of respect or rude insolence towards someone who deserves deference.",
    "synonyms": ["Insolence", "Rudeness", "Impudence", "Disrespect"],
    "antonyms": ["Politeness", "Respect", "Courtesy"],
    "example": "The strict headmaster would not tolerate any impertinence from students."
  },
  "impetus": {
    "word": "Impetus",
    "pos": "noun",
    "simpleDefinition": "The force or energy with which a body moves, or something that makes a process happen faster.",
    "synonyms": ["Momentum", "Driving force", "Impulse", "Stimulus"],
    "antonyms": ["Hindrance", "Deterrent", "Obstacle"],
    "example": "The government research grant provided the impetus for new discoveries."
  },
  "impinge": {
    "word": "Impinge",
    "pos": "verb",
    "simpleDefinition": "To have an effect or impact, especially a negative one, or encroach upon.",
    "synonyms": ["Encroach", "Intrude", "Impact", "Infringe"],
    "antonyms": ["Respect", "Avoid", "Leave alone"],
    "example": "Unfair regulations began to impinge on the freedom of local business owners."
  },
  "implacable": {
    "word": "Implacable",
    "pos": "adjective",
    "simpleDefinition": "Unable to be calmed, appeased, or stopped; relentlessly unyielding.",
    "synonyms": ["Relentless", "Unyielding", "Unforgiving", "Grim"],
    "antonyms": ["Forgiving", "Merciful", "Pliable"],
    "example": "The implacable rival refused all offers to resolve the dispute peacefully."
  },
  "impostor": {
    "word": "Impostor",
    "pos": "noun",
    "simpleDefinition": "A person who pretends to be someone else in order to deceive others.",
    "synonyms": ["Fraud", "Pretender", "Deceiver", "Fake"],
    "antonyms": ["Authentic person"],
    "example": "The man was arrested when the hospital discovered he was an impostor."
  },
  "imprison": {
    "word": "Imprison",
    "pos": "verb",
    "simpleDefinition": "To put someone in prison or confine them against their will.",
    "synonyms": ["Incarcerate", "Jail", "Confine", "Detain"],
    "antonyms": ["Release", "Free", "Liberate"],
    "example": "The court decided to imprison the criminal for five years."
  },
  "imprudent": {
    "word": "Imprudent",
    "pos": "adjective",
    "simpleDefinition": "Not showing care for the consequences of an action; rash and unwise.",
    "synonyms": ["Unwise", "Rash", "Careless", "Reckless"],
    "antonyms": ["Prudent", "Wise", "Cautious"],
    "example": "It is imprudent to invest all your savings in a single unproven venture."
  },
  "impulsive": {
    "word": "Impulsive",
    "pos": "adjective",
    "simpleDefinition": "Acting or done suddenly without thinking about the consequences.",
    "synonyms": ["Spontaneous", "Hasty", "Rash", "Impulsive"],
    "antonyms": ["Cautious", "Deliberate", "Premeditated"],
    "example": "His impulsive decision to quit his job surprised all his coworkers."
  },
  "impute": {
    "word": "Impute",
    "pos": "verb",
    "simpleDefinition": "To attribute or ascribe something (usually an error or fault) to someone.",
    "synonyms": ["Attribute", "Ascribe", "Assign", "Credit"],
    "antonyms": ["Absolve", "Exonerate"],
    "example": "They attempted to impute the project failure entirely to bad leadership."
  },
  "in deep water": {
    "word": "In deep water",
    "pos": "idiom",
    "simpleDefinition": "In a very difficult, stressful, or dangerous situation with serious trouble.",
    "synonyms": ["In trouble", "In distress", "In hot water"],
    "antonyms": ["Safe", "Out of danger"],
    "example": "The company will be in deep water if it fails to pay back the bank loan."
  },
  "inamorata": {
    "word": "Inamorata",
    "pos": "noun",
    "simpleDefinition": "A woman with whom someone is deeply in love; a female sweetheart.",
    "synonyms": ["Sweetheart", "Beloved", "Lover", "Darling"],
    "antonyms": ["Enemy"],
    "example": "The poet dedicated his most heartfelt sonnets to his secret inamorata."
  },
  "inaudible": {
    "word": "Inaudible",
    "pos": "adjective",
    "simpleDefinition": "Unable to be heard because the sound is too soft or quiet.",
    "synonyms": ["Silent", "Faint", "Unheard", "Muffled"],
    "antonyms": ["Audible", "Loud", "Clear"],
    "example": "Her voice was almost inaudible above the roar of the waterfall."
  },
  "inauspicious": {
    "word": "Inauspicious",
    "pos": "adjective",
    "simpleDefinition": "Not conducive to success; suggesting that bad luck will follow.",
    "synonyms": ["Unfavorable", "Unpromising", "Ominous", "Unlucky"],
    "antonyms": ["Auspicious", "Promising", "Favorable"],
    "example": "A sudden thunderstorm proved to be an inauspicious start to their hike."
  },
  "incapacitate": {
    "word": "Incapacitate",
    "pos": "verb",
    "simpleDefinition": "To deprive someone of strength, ability, or power; make unable to function.",
    "synonyms": ["Disable", "Paralyze", "Weaken", "Cripple"],
    "antonyms": ["Enable", "Empower", "Strengthen"],
    "example": "A serious back injury incapacitated the worker for three weeks."
  },
  "incautious": {
    "word": "Incautious",
    "pos": "adjective",
    "simpleDefinition": "Heedless of danger or risk; not cautious and careless.",
    "synonyms": ["Careless", "Rash", "Unwary", "Reckless"],
    "antonyms": ["Cautious", "Careful", "Vigilant"],
    "example": "An incautious word during the negotiation offended the foreign delegates."
  },
  "inclusive": {
    "word": "Inclusive",
    "pos": "adjective",
    "simpleDefinition": "Including all the expected services, items, or types of people.",
    "synonyms": ["Comprehensive", "All-embracing", "Broad", "Complete"],
    "antonyms": ["Exclusive", "Selective", "Narrow"],
    "example": "The resort offers an inclusive package covering room, meals, and sports."
  },
  "incongruous": {
    "word": "Incongruous",
    "pos": "adjective",
    "simpleDefinition": "Not in harmony or keeping with the surroundings or other aspects of something.",
    "synonyms": ["Out of place", "Mismatched", "Inappropriate", "Jarring"],
    "antonyms": ["Harmonious", "Fitting", "Compatible"],
    "example": "A concrete high-rise looks incongruous among historic stone cottages."
  },
  "inconsiderate": {
    "word": "Inconsiderate",
    "pos": "adjective",
    "simpleDefinition": "Thoughtlessly causing harm or inconvenience to others.",
    "synonyms": ["Thoughtless", "Selfish", "Unkind", "Tactless"],
    "antonyms": ["Considerate", "Thoughtful", "Polite"],
    "example": "Playing loud video games while others are sleeping is very inconsiderate."
  },
  "inculcate": {
    "word": "Inculcate",
    "pos": "verb",
    "simpleDefinition": "To instill an attitude, idea, or habit by persistent instruction or repetition.",
    "synonyms": ["Instill", "Teach", "Impart", "Infuse"],
    "antonyms": ["Erase", "Neglect", "Remove"],
    "example": "Good teachers try to inculcate respect and curiosity in their pupils."
  },
  "indebted": {
    "word": "Indebted",
    "pos": "adjective",
    "simpleDefinition": "Owing gratitude or money to someone who has helped you.",
    "synonyms": ["Grateful", "Obligated", "Beholden", "Thankful"],
    "antonyms": ["Unindebted", "Ungrateful"],
    "example": "I am deeply indebted to my doctor for her dedication during my recovery."
  },
  "indelible": {
    "word": "Indelible",
    "pos": "adjective",
    "simpleDefinition": "Making marks that cannot be removed, or leaving a permanent impression.",
    "synonyms": ["Permanent", "Unforgettable", "Enduring", "Lasting"],
    "antonyms": ["Erasable", "Temporary", "Fleeting"],
    "example": "Her heroic act left an indelible impression on the whole community."
  },
  "indict": {
    "word": "Indict",
    "pos": "verb",
    "simpleDefinition": "To formally charge or accuse someone with a serious crime in a court of law.",
    "synonyms": ["Charge", "Accuse", "Prosecute", "Arraign"],
    "antonyms": ["Acquit", "Exonerate", "Absolve"],
    "example": "The grand jury decided to indict the corporate executive for bribery."
  },
  "indictment": {
    "word": "Indictment",
    "pos": "noun",
    "simpleDefinition": "A formal charge or accusation of a serious crime, or a sign of severe problems.",
    "synonyms": ["Accusation", "Charge", "Prosecution", "Summons"],
    "antonyms": ["Acquittal", "Exoneration"],
    "example": "The harsh investigative report was an indictment of the prison system."
  },
  "indigent": {
    "word": "Indigent",
    "pos": "adjective",
    "simpleDefinition": "Extremely poor, needy, and lacking the basic necessities of life.",
    "synonyms": ["Impoverished", "Destitute", "Needy", "Penniless"],
    "antonyms": ["Wealthy", "Affluent", "Rich"],
    "example": "The free legal clinic assists indigent defendants who cannot afford a lawyer."
  },
  "indispensable": {
    "word": "Indispensable",
    "pos": "adjective",
    "simpleDefinition": "Absolutely necessary and impossible to be without.",
    "synonyms": ["Essential", "Crucial", "Vital", "Necessary"],
    "antonyms": ["Dispensable", "Optional", "Superfluous"],
    "example": "A reliable internet connection has become indispensable for remote workers."
  },
  "indulgent": {
    "word": "Indulgent",
    "pos": "adjective",
    "simpleDefinition": "Having or showing a readiness to be lenient and overly generous.",
    "synonyms": ["Lenient", "Permissive", "Tolerant", "Forgiving"],
    "antonyms": ["Strict", "Stern", "Severe"],
    "example": "Her indulgent father bought her whatever new gadget she asked for."
  },
  "inebriated": {
    "word": "Inebriated",
    "pos": "adjective",
    "simpleDefinition": "Drunk or intoxicated after consuming alcoholic beverages.",
    "synonyms": ["Drunk", "Intoxicated", "Tipsy"],
    "antonyms": ["Sober"],
    "example": "The police prevented an inebriated driver from operating his car."
  },
  "inertia": {
    "word": "Inertia",
    "pos": "noun",
    "simpleDefinition": "A tendency to do nothing or remain unchanged, or the resistance of an object to change motion.",
    "synonyms": ["Inactivity", "Sluggishness", "Lethargy", "Apathy"],
    "antonyms": ["Activity", "Action", "Dynamism"],
    "example": "Bureaucratic inertia prevented the urgent relief funds from reaching families quickly."
  },
  "inexplicable": {
    "word": "Inexplicable",
    "pos": "adjective",
    "simpleDefinition": "Unable to be explained or accounted for; baffling.",
    "synonyms": ["Baffling", "Mysterious", "Unaccountable", "Puzzling"],
    "antonyms": ["Explicable", "Understandable", "Clear"],
    "example": "His sudden change of mind remained completely inexplicable to his friends."
  },
  "inflated": {
    "word": "Inflated",
    "pos": "adjective",
    "simpleDefinition": "Distended with air or gas, or exaggerated and excessively high.",
    "synonyms": ["Exaggerated", "Bloated", "Excessive", "Puffed"],
    "antonyms": ["Deflated", "Modest", "Reasonable"],
    "example": "Tourists were shocked by the inflated prices charged at the souvenir shop."
  },
  "influence": {
    "word": "Influence",
    "pos": "noun",
    "simpleDefinition": "The capacity to have an effect on the character, development, or behavior of someone or something.",
    "synonyms": ["Impact", "Sway", "Power", "Control"],
    "antonyms": ["Helplessness", "Weakness"],
    "example": "A teacher's guidance can exert a lasting positive influence on young students."
  },
  "infrared": {
    "word": "Infrared",
    "pos": "adjective",
    "simpleDefinition": "Relating to electromagnetic radiation with wavelengths longer than visible red light but shorter than microwaves.",
    "synonyms": ["Thermal", "Radiant", "Invisible wave"],
    "antonyms": ["Ultraviolet"],
    "example": "Firefighters used infrared cameras to locate survivors trapped in the smoke."
  },
  "infuriate": {
    "word": "Infuriate",
    "pos": "verb",
    "simpleDefinition": "To make someone extremely angry and outraged.",
    "synonyms": ["Enrage", "Incense", "Anger", "Provoke"],
    "antonyms": ["Pacify", "Soothe", "Calm"],
    "example": "Repeated train cancellations infuriate passengers on their daily commute."
  },
  "ingenuous": {
    "word": "Ingenuous",
    "pos": "adjective",
    "simpleDefinition": "Innocent, unsuspecting, and openly honest without deceit.",
    "synonyms": ["Naive", "Innocent", "Candid", "Frank"],
    "antonyms": ["Disingenuous", "Cunning", "Deceitful"],
    "example": "Her ingenuous smile showed that she bore no ill feelings toward anyone."
  },
  "ingest": {
    "word": "Ingest",
    "pos": "verb",
    "simpleDefinition": "To take food, liquid, or other substances into the body by swallowing or absorbing.",
    "synonyms": ["Swallow", "Consume", "Eat", "Absorb"],
    "antonyms": ["Regurgitate", "Expel"],
    "example": "Small children must be closely watched so they do not ingest tiny objects."
  },
  "inherent": {
    "word": "Inherent",
    "pos": "adjective",
    "simpleDefinition": "Existing in something as a permanent, essential, or characteristic attribute.",
    "synonyms": ["Intrinsic", "Innate", "Essential", "Natural"],
    "antonyms": ["Extrinsic", "Acquired", "External"],
    "example": "Every challenging adventure carries an inherent degree of physical risk."
  },
  "initiate": {
    "word": "Initiate",
    "pos": "verb",
    "simpleDefinition": "To cause a process or action to begin.",
    "synonyms": ["Start", "Begin", "Launch", "Commence"],
    "antonyms": ["End", "Terminate", "Halt"],
    "example": "The government will initiate a new vaccination campaign next Monday."
  },
  "innovate": {
    "word": "Innovate",
    "pos": "verb",
    "simpleDefinition": "To introduce new ideas, methods, or original products.",
    "synonyms": ["Pioneer", "Create", "Modernize", "Invent"],
    "antonyms": ["Stagnate", "Copy"],
    "example": "Companies must continuously innovate to survive in the competitive tech market."
  },
  "inquisitive": {
    "word": "Inquisitive",
    "pos": "adjective",
    "simpleDefinition": "Curious and eager to investigate or inquire about things.",
    "synonyms": ["Curious", "Inquiring", "Probing", "Interested"],
    "antonyms": ["Indifferent", "Uninterested", "Incurious"],
    "example": "The inquisitive young girl examined every insect she found in the garden."
  },
  "inscribe": {
    "word": "Inscribe",
    "pos": "verb",
    "simpleDefinition": "To write or carve words or symbols on a surface or in a book.",
    "synonyms": ["Engrave", "Carve", "Etch", "Write"],
    "antonyms": ["Erase", "Efface"],
    "example": "The author kindly offered to inscribe a short note inside my book."
  },
  "insectivorous": {
    "word": "Insectivorous",
    "pos": "adjective",
    "simpleDefinition": "Feeding mainly or entirely on insects.",
    "synonyms": ["Insect-eating", "Carnivorous"],
    "antonyms": ["Herbivorous"],
    "example": "Bats and swifts are insectivorous creatures that keep mosquito populations down."
  },
  "insouciance": {
    "word": "Insouciance",
    "pos": "noun",
    "simpleDefinition": "A relaxed, casual lack of concern or carefree nonchalance.",
    "synonyms": ["Nonchalance", "Carefreeness", "Indifference", "Lightheartedness"],
    "antonyms": ["Anxiety", "Worry", "Concern"],
    "example": "He faced his final college examinations with surprising ease and insouciance."
  },
  "instability": {
    "word": "Instability",
    "pos": "noun",
    "simpleDefinition": "The state of being unstable, unpredictable, or liable to fail.",
    "synonyms": ["Unsteadiness", "Volatility", "Insecurity", "Fragility"],
    "antonyms": ["Stability", "Steadiness", "Security"],
    "example": "Economic instability made it challenging for small businesses to obtain loans."
  },
  "instigation": {
    "word": "Instigation",
    "pos": "noun",
    "simpleDefinition": "The act of inciting or provoking someone to do something, often something bad.",
    "synonyms": ["Incitement", "Provocation", "Prompting", "Urging"],
    "antonyms": ["Dissuasion", "Prevention"],
    "example": "The unruly protest erupted at the instigation of an extremist faction."
  },
  "intake": {
    "word": "Intake",
    "pos": "noun",
    "simpleDefinition": "An amount of food, air, liquid, or other substance taken into the body or a system.",
    "synonyms": ["Consumption", "Ingestion", "Absorption", "Input"],
    "antonyms": ["Output", "Discharge"],
    "example": "Doctors recommend reducing daily sugar intake to maintain heart health."
  },
  "integral": {
    "word": "Integral",
    "pos": "adjective",
    "simpleDefinition": "Necessary to make a whole complete; essential.",
    "synonyms": ["Essential", "Fundamental", "Vital", "Inherent"],
    "antonyms": ["Nonessential", "Peripheral", "Secondary"],
    "example": "Hands-on laboratory work is an integral component of any chemistry degree."
  },
  "intellectual": {
    "word": "Intellectual",
    "pos": "adjective",
    "simpleDefinition": "Relating to the intellect, mental reasoning, and objective thinking.",
    "synonyms": ["Mental", "Cerebral", "Scholarly", "Academic"],
    "antonyms": ["Physical", "Emotional", "Thoughtless"],
    "example": "Chess is an intellectual challenge that demands careful forward planning."
  },
  "intense": {
    "word": "Intense",
    "pos": "adjective",
    "simpleDefinition": "Of extreme force, degree, emotion, or strength.",
    "synonyms": ["Extreme", "Severe", "Fierce", "Acute"],
    "antonyms": ["Mild", "Moderate", "Weak"],
    "example": "The athletes endured intense heat during the afternoon training session."
  },
  "intentional": {
    "word": "Intentional",
    "pos": "adjective",
    "simpleDefinition": "Done on purpose; deliberate and planned.",
    "synonyms": ["Deliberate", "Purposeful", "Calculated", "Willful"],
    "antonyms": ["Accidental", "Unintentional", "Inadvertent"],
    "example": "Her rude remark was clearly intentional and aimed at embarrassing him."
  },
  "interminable": {
    "word": "Interminable",
    "pos": "adjective",
    "simpleDefinition": "Endless or seemingly endless, often in a boring or tiring way.",
    "synonyms": ["Endless", "Ceaseless", "Never-ending", "Perpetual"],
    "antonyms": ["Brief", "Short", "Finite"],
    "example": "We waited through an interminable flight delay at the crowded airport."
  },
  "intermittent": {
    "word": "Intermittent",
    "pos": "adjective",
    "simpleDefinition": "Occurring at irregular intervals; not continuous or steady.",
    "synonyms": ["Sporadic", "Periodic", "Irregular", "Fitful"],
    "antonyms": ["Continuous", "Constant", "Steady"],
    "example": "Intermittent rain showers disrupted the outdoor tennis championship."
  },
  "interpret": {
    "word": "Interpret",
    "pos": "verb",
    "simpleDefinition": "To explain the meaning of words, actions, or data, or translate between languages.",
    "synonyms": ["Explain", "Clarify", "Translate", "Decipher"],
    "antonyms": ["Misinterpret", "Confuse", "Obscure"],
    "example": "The statistician helped us interpret the complex survey results."
  },
  "interrupt": {
    "word": "Interrupt",
    "pos": "verb",
    "simpleDefinition": "To stop the continuous progress of an activity or break into someone's speech.",
    "synonyms": ["Disrupt", "Break in", "Disturb", "Halt"],
    "antonyms": ["Continue", "Proceed", "Resume"],
    "example": "Please do not interrupt the lecturer while she is presenting the data."
  },
  "intimacy": {
    "word": "Intimacy",
    "pos": "noun",
    "simpleDefinition": "Close familiarity, deep personal connection, or warm friendship.",
    "synonyms": ["Closeness", "Familiarity", "Affection", "Warmth"],
    "antonyms": ["Distance", "Alienation", "Coldness"],
    "example": "Years of shared struggles created a deep intimacy between the teammates."
  },
  "intimate": {
    "word": "Intimate",
    "pos": "adjective",
    "simpleDefinition": "Closely acquainted, familiar, or private and personal.",
    "synonyms": ["Close", "Dear", "Personal", "Confidential"],
    "antonyms": ["Distant", "Public", "Formal"],
    "example": "Only a few intimate friends gathered for dinner at their modest home."
  },
  "intolerant": {
    "word": "Intolerant",
    "pos": "adjective",
    "simpleDefinition": "Not willing to accept ways of thinking or behaving that are different from one's own.",
    "synonyms": ["Bigoted", "Narrow-minded", "Prejudiced", "Inflexible"],
    "antonyms": ["Tolerant", "Open-minded", "Accepting"],
    "example": "A democratic society cannot thrive if people are intolerant of opposing ideas."
  },
  "intoxicated": {
    "word": "Intoxicated",
    "pos": "adjective",
    "simpleDefinition": "Losing control of one's faculties due to alcohol or drugs; drunk.",
    "synonyms": ["Drunk", "Inebriated", "Impaired"],
    "antonyms": ["Sober"],
    "example": "Driving while intoxicated poses grave danger to pedestrians and motorists."
  },
  "intractable": {
    "word": "Intractable",
    "pos": "adjective",
    "simpleDefinition": "Hard to manage, control, or solve; obstinately stubborn.",
    "synonyms": ["Stubborn", "Unmanageable", "Obstinate", "Unyielding"],
    "antonyms": ["Manageable", "Compliant", "Docile"],
    "example": "Poverty in the remote mountainous region remained an intractable issue."
  },
  "intrinsic": {
    "word": "Intrinsic",
    "pos": "adjective",
    "simpleDefinition": "Belonging naturally to something; essential and inherent.",
    "synonyms": ["Inherent", "Innate", "Essential", "Fundamental"],
    "antonyms": ["Extrinsic", "External", "Acquired"],
    "example": "Curiosity is an intrinsic characteristic of every young child."
  },
  "introverted": {
    "word": "Introverted",
    "pos": "adjective",
    "simpleDefinition": "Quiet, reserved, and enjoying solitary activities more than large social gatherings.",
    "synonyms": ["Reserved", "Shy", "Quiet", "Introspective"],
    "antonyms": ["Extroverted", "Outgoing", "Sociable"],
    "example": "An introverted artist often finds creative inspiration during hours of solitude."
  },
  "inundate": {
    "word": "Inundate",
    "pos": "verb",
    "simpleDefinition": "To flood with water, or overwhelm someone with a huge volume of things.",
    "synonyms": ["Overwhelm", "Flood", "Swamp", "Submerge"],
    "antonyms": ["Drain", "Deplete"],
    "example": "Customers began to inundate customer support with inquiries during the sale."
  },
  "inveigle": {
    "word": "Inveigle",
    "pos": "verb",
    "simpleDefinition": "To persuade someone to do something through deception, cunning, or flattery.",
    "synonyms": ["Entice", "Cajole", "Coax", "Wheedle"],
    "antonyms": ["Dissuade", "Force"],
    "example": "He tried to inveigle his brother into lending him the sports car."
  },
  "invisible": {
    "word": "Invisible",
    "pos": "adjective",
    "simpleDefinition": "Unable to be seen by the human eye; hidden from vision.",
    "synonyms": ["Unseen", "Hidden", "Imperceptible", "Concealed"],
    "antonyms": ["Visible", "Apparent", "Noticeable"],
    "example": "Microscopic bacteria are completely invisible without a magnifying lens."
  },
  "irk": {
    "word": "Irk",
    "pos": "verb",
    "simpleDefinition": "To irritate, bother, or annoy someone.",
    "synonyms": ["Annoy", "Irritate", "Bother", "Vex"],
    "antonyms": ["Please", "Delight", "Soothe"],
    "example": "The endless paperwork began to irk the hard-working hospital staff."
  },
  "irresistible": {
    "word": "Irresistible",
    "pos": "adjective",
    "simpleDefinition": "Too attractive, tempting, or powerful to be resisted.",
    "synonyms": ["Tempting", "Compelling", "Overpowering", "Captivating"],
    "antonyms": ["Resistible", "Unattractive", "Repulsive"],
    "example": "The smell of freshly baked sourdough bread was completely irresistible."
  },
  "irritate": {
    "word": "Irritate",
    "pos": "verb",
    "simpleDefinition": "To make someone feel annoyed or angry, or cause physical inflammation.",
    "synonyms": ["Annoy", "Exasperate", "Bother", "Inflame"],
    "antonyms": ["Soothe", "Calm", "Pacify"],
    "example": "Harsh chemicals in the cleaning spray can irritate sensitive skin."
  },
  "isolation": {
    "word": "Isolation",
    "pos": "noun",
    "simpleDefinition": "The state of being separated from other people or things; solitude.",
    "synonyms": ["Solitude", "Seclusion", "Separation", "Detachment"],
    "antonyms": ["Companionship", "Inclusion", "Socializing"],
    "example": "Living in isolation on a remote island gave him peace to finish his novel."
  }
}

if __name__ == '__main__':
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
    
    added = 0
    for k, v in BATCH2_DATA.items():
        cache[k.lower()] = v
        added += 1
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)
    
    print(f"Added {added} curated entries for 'I' to cache. Total cache size: {len(cache)}")
