import os
import json

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

BATCH3_DATA = {
  "magnanimous": {
    "word": "Magnanimous",
    "pos": "adjective",
    "simpleDefinition": "Very generous or forgiving, especially toward a rival or less powerful person.",
    "synonyms": ["Generous", "Forgiving", "Noble", "Charitable"],
    "antonyms": ["Petty", "Vengeful", "Spiteful"],
    "example": "She was magnanimous in victory and praised her opponent's determination."
  },
  "malingerer": {
    "word": "Malingerer",
    "pos": "noun",
    "simpleDefinition": "A person who pretends to be ill in order to avoid work or duty.",
    "synonyms": ["Shirker", "Slacker", "Dodger", "Loafer"],
    "antonyms": ["Hard worker"],
    "example": "The manager suspected he was a malingerer when he called in sick every Friday."
  },
  "mammoth": {
    "word": "Mammoth",
    "pos": "adjective",
    "simpleDefinition": "Huge, gigantic, or colossal in size or scale.",
    "synonyms": ["Gigantic", "Colossal", "Huge", "Immense"],
    "antonyms": ["Tiny", "Miniature", "Small"],
    "example": "Building the suspension bridge was a mammoth engineering challenge."
  },
  "manifest": {
    "word": "Manifest",
    "pos": "adjective",
    "simpleDefinition": "Clear, plain, and obvious to the eye or mind.",
    "synonyms": ["Obvious", "Clear", "Apparent", "Evident"],
    "antonyms": ["Hidden", "Obscure", "Unclear"],
    "example": "His nervous stutter made his anxiety manifest to everyone in the room."
  },
  "manliness": {
    "word": "Manliness",
    "pos": "noun",
    "simpleDefinition": "Qualities traditionally associated with courage, strength, and noble character.",
    "synonyms": ["Masculinity", "Bravery", "Fortitude", "Courage"],
    "antonyms": ["Cowardice", "Weakness"],
    "example": "He believed true manliness meant standing up gently for those in need."
  },
  "martinet": {
    "word": "Martinet",
    "pos": "noun",
    "simpleDefinition": "A strict disciplinarian who demands total obedience to rules.",
    "synonyms": ["Disciplinarian", "Taskmaster", "Stickler"],
    "antonyms": ["Lenient person"],
    "example": "The coach was a martinet who made athletes run laps for being one minute late."
  },
  "massive": {
    "word": "Massive",
    "pos": "adjective",
    "simpleDefinition": "Exceptionally large, heavy, and solid in construction.",
    "synonyms": ["Enormous", "Huge", "Colossal", "Bulky"],
    "antonyms": ["Tiny", "Lightweight", "Slender"],
    "example": "The castle entrance was guarded by a massive iron door."
  },
  "masterful": {
    "word": "Masterful",
    "pos": "adjective",
    "simpleDefinition": "Showing great skill, competence, or commanding authority.",
    "synonyms": ["Skillful", "Expert", "Commanding", "Authoritative"],
    "antonyms": ["Inept", "Clumsy", "Weak"],
    "example": "The conductor gave a masterful performance of the symphony."
  },
  "materialistic": {
    "word": "Materialistic",
    "pos": "adjective",
    "simpleDefinition": "Excessively focused on money and material possessions rather than spiritual values.",
    "synonyms": ["Consumerist", "Acquisitive", "Money-oriented", "Worldly"],
    "antonyms": ["Spiritual", "Altruistic", "Idealistic"],
    "example": "Society often critiques materialistic lifestyles that prioritize luxury over kindness."
  },
  "materialize": {
    "word": "Materialize",
    "pos": "verb",
    "simpleDefinition": "To become actual fact or happen, or appear suddenly.",
    "synonyms": ["Appear", "Emerge", "Happen", "Occur"],
    "antonyms": ["Vanish", "Disappear"],
    "example": "The predicted economic crisis did not materialize after the reforms."
  },
  "matrimony": {
    "word": "Matrimony",
    "pos": "noun",
    "simpleDefinition": "The state or ceremony of being married; wedlock.",
    "synonyms": ["Marriage", "Wedlock", "Nuptials", "Union"],
    "antonyms": ["Divorce", "Celibacy"],
    "example": "The couple celebrated twenty-five years of happy matrimony."
  },
  "mean": {
    "word": "Mean",
    "pos": "adjective",
    "simpleDefinition": "Unkind, spiteful, or unwilling to share or spend money.",
    "synonyms": ["Unkind", "Nasty", "Spiteful", "Stingy"],
    "antonyms": ["Kind", "Generous", "Pleasant"],
    "example": "Making mean comments behind someone's back hurts people deeply."
  },
  "meddle": {
    "word": "Meddle",
    "pos": "verb",
    "simpleDefinition": "To interfere in or pry into something that is not one's concern.",
    "synonyms": ["Interfere", "Intrude", "Pry", "Tamper"],
    "antonyms": ["Leave alone", "Ignore"],
    "example": "Parents should encourage independence rather than meddle in their adult children's choices."
  },
  "meditative": {
    "word": "Meditative",
    "pos": "adjective",
    "simpleDefinition": "Deeply thoughtful, reflective, or absorbed in serious thought.",
    "synonyms": ["Reflective", "Contemplative", "Pensive", "Thoughtful"],
    "antonyms": ["Frivolous", "Thoughtless"],
    "example": "He spent a quiet meditative morning walking along the peaceful seashore."
  },
  "memento": {
    "word": "Memento",
    "pos": "noun",
    "simpleDefinition": "An object kept as a reminder or souvenir of a person, place, or event.",
    "synonyms": ["Souvenir", "Keepsake", "Reminder", "Token"],
    "antonyms": ["Discard"],
    "example": "She bought a miniature porcelain figurine as a memento of her trip to Paris."
  },
  "mercenary": {
    "word": "Mercenary",
    "pos": "adjective",
    "simpleDefinition": "Primarily motivated by the desire for financial gain rather than ethics or duty.",
    "synonyms": ["Money-driven", "Greedy", "Acquisitive", "Selfish"],
    "antonyms": ["Altruistic", "Generous", "Charitable"],
    "example": "His mercenary attitude made him abandon the charity project when funds dropped."
  },
  "merchandise": {
    "word": "Merchandise",
    "pos": "noun",
    "simpleDefinition": "Goods or commodities that are bought and sold in business.",
    "synonyms": ["Goods", "Products", "Commodities", "Stock"],
    "antonyms": ["Services"],
    "example": "The department store displays its newest merchandise in bright front windows."
  },
  "merchant prince": {
    "word": "Merchant prince",
    "pos": "noun",
    "simpleDefinition": "A wealthy, influential merchant or commercial business tycoon.",
    "synonyms": ["Tycoon", "Magnate", "Baron", "Capitalist"],
    "antonyms": ["Laborer", "Peasant"],
    "example": "The coastal trading city was governed by a merchant prince who owned dozens of ships."
  },
  "mercury": {
    "word": "Mercury",
    "pos": "noun",
    "simpleDefinition": "A heavy silvery-white toxic liquid metallic element, also called quicksilver.",
    "synonyms": ["Quicksilver", "Liquid metal"],
    "antonyms": ["Solid metal"],
    "example": "Traditional medical thermometers used liquid mercury to measure body temperature."
  },
  "methodical": {
    "word": "Methodical",
    "pos": "adjective",
    "simpleDefinition": "Done according to a careful, systematic, and orderly procedure.",
    "synonyms": ["Systematic", "Orderly", "Structured", "Organized"],
    "antonyms": ["Chaotic", "Haphazard", "Disorderly"],
    "example": "She solved the mystery through a careful and methodical examination of clues."
  },
  "mild": {
    "word": "Mild",
    "pos": "adjective",
    "simpleDefinition": "Not severe, harsh, or extreme; gentle and moderate.",
    "synonyms": ["Gentle", "Moderate", "Temperate", "Calm"],
    "antonyms": ["Harsh", "Severe", "Extreme"],
    "example": "The patient experienced only mild symptoms and was discharged the next day."
  },
  "mine": {
    "word": "Mine",
    "pos": "noun",
    "simpleDefinition": "An underground excavation from which coal, minerals, or precious metals are extracted.",
    "synonyms": ["Quarry", "Pit", "Excavation", "Colliery"],
    "antonyms": ["Surface"],
    "example": "Miners descend hundreds of feet below ground to work in the coal mine."
  },
  "misanthrope": {
    "word": "Misanthrope",
    "pos": "noun",
    "simpleDefinition": "A person who dislikes human society and avoids interaction with people.",
    "synonyms": ["Cynic", "Recluse", "Loner", "Skeptic"],
    "antonyms": ["Philanthropist", "Humanitarian"],
    "example": "After repeated disappointments, the old hermit turned into a misanthrope."
  },
  "misconstrue": {
    "word": "Misconstrue",
    "pos": "verb",
    "simpleDefinition": "To interpret a person's words or actions wrongly.",
    "synonyms": ["Misinterpret", "Misunderstand", "Misjudge"],
    "antonyms": ["Understand", "Comprehend", "Grasp"],
    "example": "Please do not misconstrue my honest question as a personal criticism."
  },
  "miserable": {
    "word": "Miserable",
    "pos": "adjective",
    "simpleDefinition": "Wretchedly unhappy, uncomfortable, or distressing.",
    "synonyms": ["Wretched", "Unhappy", "Depressed", "Dejected"],
    "antonyms": ["Joyful", "Happy", "Cheerful"],
    "example": "Standing in the freezing downpour for hours made the passengers miserable."
  },
  "misogyny": {
    "word": "Misogyny",
    "pos": "noun",
    "simpleDefinition": "Dislike of, contempt for, or ingrained prejudice against women.",
    "synonyms": ["Sexism", "Anti-female bias", "Chauvinism"],
    "antonyms": ["Gender equality", "Feminism"],
    "example": "The investigative report uncovered systemic misogyny within the organization."
  },
  "modest": {
    "word": "Modest",
    "pos": "adjective",
    "simpleDefinition": "Unassuming or moderate in estimating one's abilities, or not showy.",
    "synonyms": ["Humble", "Unassuming", "Unpretentious", "Simple"],
    "antonyms": ["Arrogant", "Boastful", "Pretentious"],
    "example": "Despite winning the prestigious prize, the researcher remained remarkably modest."
  },
  "monopoly": {
    "word": "Monopoly",
    "pos": "noun",
    "simpleDefinition": "Exclusive control or possession of the supply of or trade in a commodity or service.",
    "synonyms": ["Dominance", "Sole control", "Corner", "Cartel"],
    "antonyms": ["Competition", "Free market"],
    "example": "Antitrust regulations prevent any one company from maintaining a monopoly on energy."
  },
  "monotheist": {
    "word": "Monotheist",
    "pos": "noun",
    "simpleDefinition": "A person who believes that there is only one supreme God.",
    "synonyms": ["Believer in one God", "Unitarian"],
    "antonyms": ["Polytheist", "Atheist"],
    "example": "A monotheist rejects the concept of multiple deities."
  },
  "monotonous": {
    "word": "Monotonous",
    "pos": "adjective",
    "simpleDefinition": "Dull, tedious, and repetitious; lacking in variety or interest.",
    "synonyms": ["Repetitive", "Tedious", "Boring", "Dull"],
    "antonyms": ["Varied", "Exciting", "Lively"],
    "example": "Stamping envelopes all afternoon is a monotonous task that quickly bores workers."
  },
  "motionless": {
    "word": "Motionless",
    "pos": "adjective",
    "simpleDefinition": "Not moving at all; completely still.",
    "synonyms": ["Still", "Stationary", "Immobile", "Static"],
    "antonyms": ["Moving", "Active", "Dynamic"],
    "example": "The owl sat motionless on the tree branch, waiting for prey."
  },
  "mountebank": {
    "word": "Mountebank",
    "pos": "noun",
    "simpleDefinition": "A person who deceives others, especially by tricking them out of money with false promises.",
    "synonyms": ["Charlatan", "Quack", "Fraud", "Swindler"],
    "antonyms": ["Honest person"],
    "example": "The traveling mountebank sold bottled colored water as a miracle health cure."
  },
  "muddle": {
    "word": "Muddle",
    "pos": "noun",
    "simpleDefinition": "An untidy, disorganized state, or confusion.",
    "synonyms": ["Mess", "Confusion", "Disarray", "Jumble"],
    "antonyms": ["Order", "Clarity", "System"],
    "example": "The sudden cancellation of flights caused a hopeless muddle at the terminal."
  },
  "multiple": {
    "word": "Multiple",
    "pos": "adjective",
    "simpleDefinition": "Having or involving several parts, individuals, or elements.",
    "synonyms": ["Several", "Numerous", "Manifold", "Various"],
    "antonyms": ["Single", "Sole", "Solitary"],
    "example": "The job candidate possesses multiple strengths, including fluency in French and German."
  },
  "murky": {
    "word": "Murky",
    "pos": "adjective",
    "simpleDefinition": "Dark and gloomy, or unclear and difficult to see through.",
    "synonyms": ["Gloomy", "Muddy", "Cloudy", "Dim"],
    "antonyms": ["Clear", "Bright", "Transparent"],
    "example": "The search team could see nothing through the murky water of the pond."
  },
  "muster": {
    "word": "Muster",
    "pos": "verb",
    "simpleDefinition": "To summon up, gather, or assemble resources or courage.",
    "synonyms": ["Gather", "Summon", "Rally", "Mobilize"],
    "antonyms": ["Disperse", "Disband", "Scatter"],
    "example": "She managed to muster the courage to deliver the keynote address."
  },
  "mutation": {
    "word": "Mutation",
    "pos": "noun",
    "simpleDefinition": "A change or alteration in form or genetic structure.",
    "synonyms": ["Alteration", "Change", "Variation", "Modification"],
    "antonyms": ["Constancy", "Uniformity"],
    "example": "A genetic mutation enabled the desert plants to survive on very little rainfall."
  },
  "myopic": {
    "word": "Myopic",
    "pos": "adjective",
    "simpleDefinition": "Near-sighted, or lacking long-term foresight and realistic planning.",
    "synonyms": ["Short-sighted", "Narrow-minded", "Unimaginative"],
    "antonyms": ["Farsighted", "Visionary"],
    "example": "Cutting school funding is a myopic decision that harms economic progress."
  },
  "myriad": {
    "word": "Myriad",
    "pos": "noun",
    "simpleDefinition": "A countless or extremely large number of people or things.",
    "synonyms": ["Multitude", "Abundance", "Host", "Plethora"],
    "antonyms": ["Few", "Scarcity", "Handful"],
    "example": "On clear desert nights, a myriad of stars lights up the sky."
  },
  "nadir": {
    "word": "Nadir",
    "pos": "noun",
    "simpleDefinition": "The lowest point in the fortunes or success of a person or group.",
    "synonyms": ["Lowest point", "Bottom", "Rock-bottom", "Depths"],
    "antonyms": ["Zenith", "Peak", "Pinnacle"],
    "example": "Losing his business was the nadir of his career, but he rebuilt it gradually."
  },
  "namesake": {
    "word": "Namesake",
    "pos": "noun",
    "simpleDefinition": "A person or thing named after another person.",
    "synonyms": ["Named after someone", "Cognomen"],
    "antonyms": ["No common antonym"],
    "example": "The university library was dedicated to its generous benefactor, its namesake."
  },
  "negligible": {
    "word": "Negligible",
    "pos": "adjective",
    "simpleDefinition": "So small or unimportant as to be not worth considering.",
    "synonyms": ["Insignificant", "Trivial", "Minor", "Trifling"],
    "antonyms": ["Significant", "Substantial", "Major"],
    "example": "The difference in price between the two brands was completely negligible."
  },
  "negotiation": {
    "word": "Negotiation",
    "pos": "noun",
    "simpleDefinition": "Discussion aimed at reaching a mutual agreement or settlement.",
    "synonyms": ["Bargaining", "Discussion", "Mediation", "Talks"],
    "antonyms": ["Deadlock", "Conflict"],
    "example": "After intense days of negotiation, the labor union signed the contract."
  },
  "newborn": {
    "word": "Newborn",
    "pos": "noun",
    "simpleDefinition": "A recently born child or young animal.",
    "synonyms": ["Infant", "Baby", "Neonate"],
    "antonyms": ["Adult", "Elder"],
    "example": "The mother gently rocked the sleeping newborn in her arms."
  },
  "niggardly": {
    "word": "Niggardly",
    "pos": "adjective",
    "simpleDefinition": "Ungenerous, stingy, or reluctant to spend money.",
    "synonyms": ["Stingy", "Miserly", "Parsimonious", "Tightfisted"],
    "antonyms": ["Generous", "Lavish", "Munificent"],
    "example": "The miserly landlord gave a niggardly response to requests for repairs."
  },
  "ninny": {
    "word": "Ninny",
    "pos": "noun",
    "simpleDefinition": "A silly, foolish, or gullible person.",
    "synonyms": ["Fool", "Simpleton", "Dunce", "Blockhead"],
    "antonyms": ["Genius", "Sage"],
    "example": "Do not be such a ninny and believe every wild rumor you read online."
  },
  "notion": {
    "word": "Notion",
    "pos": "noun",
    "simpleDefinition": "A conception of or belief about something; an idea or impulse.",
    "synonyms": ["Idea", "Belief", "Concept", "Impression"],
    "antonyms": ["Certainty", "Fact"],
    "example": "He dismissed the popular notion that money is the sole source of happiness."
  },
  "notwithstanding": {
    "word": "Notwithstanding",
    "pos": "preposition",
    "simpleDefinition": "In spite of; despite.",
    "synonyms": ["Despite", "Regardless of", "In spite of"],
    "antonyms": ["Because of"],
    "example": "Notwithstanding the torrential rain, thousands of fans attended the stadium concert."
  },
  "nourishing": {
    "word": "Nourishing",
    "pos": "adjective",
    "simpleDefinition": "Containing substances necessary for health, growth, and vitality.",
    "synonyms": ["Nutritious", "Wholesome", "Healthy", "Sustaining"],
    "antonyms": ["Unwholesome", "Deficient", "Harmful"],
    "example": "A hot bowl of vegetable soup is comforting and highly nourishing."
  },
  "nugatory": {
    "word": "Nugatory",
    "pos": "adjective",
    "simpleDefinition": "Of no value or importance; useless or invalid.",
    "synonyms": ["Worthless", "Useless", "Trifling", "Futile"],
    "antonyms": ["Valuable", "Important", "Effective"],
    "example": "The legal clause became nugatory once the treaty was annulled."
  },
  "oath": {
    "word": "Oath",
    "pos": "noun",
    "simpleDefinition": "A solemn promise, often calling upon a divine witness, to act truthfully.",
    "synonyms": ["Vow", "Pledge", "Promise"],
    "antonyms": ["Breach", "Betrayal"],
    "example": "The newly elected governor took an oath to uphold the constitution."
  },
  "obdurate": {
    "word": "Obdurate",
    "pos": "adjective",
    "simpleDefinition": "Stubbornly refusing to change one's mind or soften one's attitude.",
    "synonyms": ["Stubborn", "Obstinate", "Unyielding", "Inflexible"],
    "antonyms": ["Pliable", "Yielding", "Submissive"],
    "example": "Despite pleas from his closest advisors, the leader remained obdurate."
  },
  "obese": {
    "word": "Obese",
    "pos": "adjective",
    "simpleDefinition": "Grossly fat or overweight to an extent that risks health.",
    "synonyms": ["Overweight", "Corpulent", "Stout", "Portly"],
    "antonyms": ["Thin", "Slender", "Skinny"],
    "example": "A balanced diet and daily exercise help obese patients shed excess weight."
  },
  "obliged": {
    "word": "Obliged",
    "pos": "adjective",
    "simpleDefinition": "Legally or morally bound to take action, or appreciative of help.",
    "synonyms": ["Compelled", "Obligated", "Bound", "Grateful"],
    "antonyms": ["Free", "Unobligated"],
    "example": "She felt obliged to return the wallet she found in the park to the police."
  },
  "obliquity": {
    "word": "Obliquity",
    "pos": "noun",
    "simpleDefinition": "Deviation from moral rectitude, sound judgment, or straightforwardness.",
    "synonyms": ["Deviousness", "Crookedness", "Divergence"],
    "antonyms": ["Rectitude", "Uprightness", "Honesty"],
    "example": "The financial audit exposed years of moral obliquity inside the firm."
  },
  "observant": {
    "word": "Observant",
    "pos": "adjective",
    "simpleDefinition": "Quick to notice things; watchful, alert, and perceptive.",
    "synonyms": ["Watchful", "Alert", "Perceptive", "Attentive"],
    "antonyms": ["Inattentive", "Unobservant", "Careless"],
    "example": "An observant security guard spotted the open back window right away."
  },
  "obsolescence": {
    "word": "Obsolescence",
    "pos": "noun",
    "simpleDefinition": "The process of becoming outdated, obsolete, or no longer useful.",
    "synonyms": ["Disuse", "Outdatedness", "Decline"],
    "antonyms": ["Modernity", "Currency"],
    "example": "Rapid advancements in digital audio led to the obsolescence of cassette tapes."
  },
  "obsolete": {
    "word": "Obsolete",
    "pos": "adjective",
    "simpleDefinition": "No longer produced or used; out of date.",
    "synonyms": ["Outdated", "Archaic", "Outmoded", "Antique"],
    "antonyms": ["Modern", "Current", "Up to date"],
    "example": "Typewriters are now largely obsolete in modern business offices."
  },
  "occupy": {
    "word": "Occupy",
    "pos": "verb",
    "simpleDefinition": "To live in, fill, or take up space, time, or a position.",
    "synonyms": ["Inhabit", "Dwell in", "Fill", "Hold"],
    "antonyms": ["Vacate", "Abandon", "Leave"],
    "example": "The law firm will occupy the top two floors of the office building."
  },
  "odds and ends": {
    "word": "Odds and ends",
    "pos": "noun",
    "simpleDefinition": "Miscellaneous small items or tasks of low importance or value.",
    "synonyms": ["Bits and pieces", "Remnants", "Sundries"],
    "antonyms": ["The whole", "Bulk"],
    "example": "She cleaned her desk drawer and threw out useless odds and ends."
  },
  "offended": {
    "word": "Offended",
    "pos": "adjective",
    "simpleDefinition": "Feeling upset, annoyed, or resentful as a result of an insult or slight.",
    "synonyms": ["Insulted", "Hurt", "Resentful", "Affronted"],
    "antonyms": ["Pleased", "Delighted", "Flattered"],
    "example": "He felt offended when his helpful suggestions were ignored during the meeting."
  },
  "offshore": {
    "word": "Offshore",
    "pos": "adjective",
    "simpleDefinition": "Located at sea at a distance from the coast, or registered in a foreign country.",
    "synonyms": ["Seaborne", "Overseas", "Maritime"],
    "antonyms": ["Onshore", "Inland", "Domestic"],
    "example": "The energy company built giant offshore wind turbines in the sea."
  },
  "omission": {
    "word": "Omission",
    "pos": "noun",
    "simpleDefinition": "Someone or something that has been left out or excluded, either intentionally or accidentally.",
    "synonyms": ["Exclusion", "Oversight", "Deletion", "Neglect"],
    "antonyms": ["Inclusion", "Addition", "Insertion"],
    "example": "Leaving his name off the project team was an accidental omission."
  },
  "omnipotent": {
    "word": "Omnipotent",
    "pos": "adjective",
    "simpleDefinition": "Having unlimited power; able to do anything.",
    "synonyms": ["All-powerful", "Almighty", "Supreme", "Invincible"],
    "antonyms": ["Powerless", "Weak", "Impotent"],
    "example": "In ancient mythology, Jupiter was worshipped as an omnipotent ruler."
  },
  "on their toes": {
    "word": "On their toes",
    "pos": "idiom",
    "simpleDefinition": "Alert, energetic, and ready to respond quickly to changes.",
    "synonyms": ["Alert", "Vigilant", "Prepared", "Watchful"],
    "antonyms": ["Complacent", "Careless", "Unprepared"],
    "example": "The demanding coach kept the players on their toes with sudden drills."
  },
  "onerous": {
    "word": "Onerous",
    "pos": "adjective",
    "simpleDefinition": "Involving great effort, burden, or difficulty; oppressive.",
    "synonyms": ["Burdensome", "Arduous", "Oppressive", "Grueling"],
    "antonyms": ["Easy", "Effortless", "Light"],
    "example": "Auditing thousands of financial transactions proved to be an onerous task."
  },
  "optimist": {
    "word": "Optimist",
    "pos": "noun",
    "simpleDefinition": "A person who tends to be hopeful and confident about future outcomes.",
    "synonyms": ["Positive thinker", "Idealist", "Dreamer"],
    "antonyms": ["Pessimist", "Cynic"],
    "example": "As an incurable optimist, she always finds something positive in tough times."
  },
  "oracular": {
    "word": "Oracular",
    "pos": "adjective",
    "simpleDefinition": "Delivering wise, enigmatic, or authoritative prophecies or advice.",
    "synonyms": ["Prophetic", "Wise", "Enigmatic", "Authoritative"],
    "antonyms": ["Straightforward", "Foolish"],
    "example": "The elder spoke in oracular statements that listeners took hours to decipher."
  },
  "orderly": {
    "word": "Orderly",
    "pos": "adjective",
    "simpleDefinition": "Neatly and methodically arranged; well-behaved and disciplined.",
    "synonyms": ["Neat", "Tidy", "Methodical", "Disciplined"],
    "antonyms": ["Chaotic", "Disorderly", "Messy"],
    "example": "The students formed an orderly queue before entering the museum."
  },
  "ore": {
    "word": "Ore",
    "pos": "noun",
    "simpleDefinition": "A naturally occurring rock or mineral from which a valuable metal can be extracted.",
    "synonyms": ["Mineral deposit", "Raw metal", "Deposit"],
    "antonyms": ["Refined metal"],
    "example": "Smelters process iron ore at extreme temperatures to produce pure metal."
  },
  "outshine": {
    "word": "Outshine",
    "pos": "verb",
    "simpleDefinition": "To be much more impressive or successful than someone or something else.",
    "synonyms": ["Eclipse", "Surpass", "Outdo", "Excel"],
    "antonyms": ["Be eclipsed", "Fall behind"],
    "example": "Her outstanding violin solo managed to outshine every other performance that night."
  },
  "override": {
    "word": "Override",
    "pos": "verb",
    "simpleDefinition": "To use one's authority to reject, overrule, or cancel a decision.",
    "synonyms": ["Overrule", "Cancel", "Overturn", "Supersede"],
    "antonyms": ["Enforce", "Uphold", "Confirm"],
    "example": "Congress can vote to override a presidential veto with a two-thirds majority."
  },
  "overt": {
    "word": "Overt",
    "pos": "adjective",
    "simpleDefinition": "Done or shown openly; plainly apparent and not secret.",
    "synonyms": ["Open", "Obvious", "Blatant", "Conspicuous"],
    "antonyms": ["Covert", "Secret", "Hidden"],
    "example": "The company showed overt hostility towards worker unionization attempts."
  },
  "owe": {
    "word": "Owe",
    "pos": "verb",
    "simpleDefinition": "To be required to pay or repay money or gratitude to someone.",
    "synonyms": ["Be indebted", "Be obligated", "Have a debt"],
    "antonyms": ["Repay", "Settle"],
    "example": "I still owe twenty dollars to the bookstore for the reference manual."
  }
}

if __name__ == '__main__':
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
    
    added = 0
    for k, v in BATCH3_DATA.items():
        cache[k.lower()] = v
        added += 1
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)
    
    print(f"Added {added} curated entries for 'M, N, O' to cache. Total cache size: {len(cache)}")
