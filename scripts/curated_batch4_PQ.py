import os
import json

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

BATCH4_DATA = {
  "pact": {
    "word": "Pact",
    "pos": "noun",
    "simpleDefinition": "A formal agreement or treaty between individuals, groups, or nations.",
    "synonyms": ["Agreement", "Treaty", "Accord", "Compact"],
    "antonyms": ["Disagreement", "Breach"],
    "example": "The two nations signed a non-aggression pact to ensure lasting border peace."
  },
  "painstaking": {
    "word": "Painstaking",
    "pos": "adjective",
    "simpleDefinition": "Done with or employing great care, thoroughness, and meticulous effort.",
    "synonyms": ["Meticulous", "Thorough", "Careful", "Diligent"],
    "antonyms": ["Careless", "Slapdash", "Negligent"],
    "example": "Restoring the ancient oil painting took months of painstaking work."
  },
  "paleontology": {
    "word": "Paleontology",
    "pos": "noun",
    "simpleDefinition": "The scientific study of fossil animals, plants, and ancient life forms.",
    "synonyms": ["Fossil science", "Prehistoric study"],
    "antonyms": ["No common antonym"],
    "example": "Her childhood passion for dinosaur bones led her to study paleontology at university."
  },
  "pampered": {
    "word": "Pampered",
    "pos": "adjective",
    "simpleDefinition": "Treated with excessive care, luxury, indulgence, or comfort.",
    "synonyms": ["Spoiled", "Indulged", "Coddled"],
    "antonyms": ["Neglected", "Deprived"],
    "example": "The pampered house cat slept on velvet cushions and ate fresh salmon."
  },
  "panic": {
    "word": "Panic",
    "pos": "noun",
    "simpleDefinition": "Sudden uncontrollable fear or anxiety, often causing wildly unthinking behavior.",
    "synonyms": ["Terror", "Alarm", "Fright", "Hysteria"],
    "antonyms": ["Calm", "Composure", "Serenity"],
    "example": "When the emergency alarm rang, the staff evacuated the building without panic."
  },
  "pantheist": {
    "word": "Pantheist",
    "pos": "noun",
    "simpleDefinition": "A person who believes that God and the physical universe are one and the same.",
    "synonyms": ["Nature worshiper"],
    "antonyms": ["Atheist", "Monotheist"],
    "example": "As a pantheist, the philosopher saw the divine spirit in forests, mountains, and rivers."
  },
  "parallelism": {
    "word": "Parallelism",
    "pos": "noun",
    "simpleDefinition": "The state of being parallel or showing clear structural or conceptual similarity.",
    "synonyms": ["Similarity", "Correspondence", "Resemblance", "Alignment"],
    "antonyms": ["Divergence", "Disparity", "Difference"],
    "example": "Historians noted a striking parallelism between the political events of both eras."
  },
  "partial": {
    "word": "Partial",
    "pos": "adjective",
    "simpleDefinition": "Favoring one side over another unfairly, or existing only in part.",
    "synonyms": ["Biased", "Prejudiced", "One-sided", "Incomplete"],
    "antonyms": ["Impartial", "Fair", "Complete"],
    "example": "A sports referee must never appear partial toward the home team."
  },
  "partisan": {
    "word": "Partisan",
    "pos": "adjective",
    "simpleDefinition": "Prejudiced in favor of a particular political party, faction, or cause.",
    "synonyms": ["Biased", "One-sided", "Factional", "Sectarian"],
    "antonyms": ["Nonpartisan", "Impartial", "Neutral"],
    "example": "The debate quickly degenerated into angry partisan bickering."
  },
  "pathetic": {
    "word": "Pathetic",
    "pos": "adjective",
    "simpleDefinition": "Arousing pity, sorrow, or sympathy, or miserably inadequate and weak.",
    "synonyms": ["Pitiful", "Heartbreaking", "Inadequate", "Feeble"],
    "antonyms": ["Admirable", "Impressive", "Inspiring"],
    "example": "The shivering stray puppy let out a pathetic whimper in the rain."
  },
  "patronage": {
    "word": "Patronage",
    "pos": "noun",
    "simpleDefinition": "Financial support, backing, or encouragement given by a wealthy patron or customer.",
    "synonyms": ["Sponsorship", "Backing", "Support", "Funding"],
    "antonyms": ["Opposition", "Discouragement"],
    "example": "Renaissance painters flourished thanks to the generous patronage of aristocratic families."
  },
  "paucity": {
    "word": "Paucity",
    "pos": "noun",
    "simpleDefinition": "The presence of something in only tiny or insufficient quantities; scarcity.",
    "synonyms": ["Scarcity", "Shortage", "Dearth", "Lack"],
    "antonyms": ["Abundance", "Plethora", "Surplus"],
    "example": "The investigation stalled due to a paucity of reliable eyewitness evidence."
  },
  "pay off old scores": {
    "word": "Pay off old scores",
    "pos": "idiom",
    "simpleDefinition": "To settle a grudge or retaliate for past injuries or insults.",
    "synonyms": ["Settle a grudge", "Get revenge", "Retaliate"],
    "antonyms": ["Forgive", "Make peace"],
    "example": "He used his newly acquired political power to pay off old scores against his opponents."
  },
  "peak": {
    "word": "Peak",
    "pos": "noun",
    "simpleDefinition": "The pointed top of a mountain, or the highest level or climax of achievement.",
    "synonyms": ["Summit", "Pinnacle", "Crest", "Climax"],
    "antonyms": ["Base", "Bottom", "Nadir"],
    "example": "She reached the peak of her scientific career when she won the Nobel Prize."
  },
  "pedestal": {
    "word": "Pedestal",
    "pos": "noun",
    "simpleDefinition": "A base or support on which a statue stands, or an idealized position of admiration.",
    "synonyms": ["Plinth", "Base", "Podium", "Support"],
    "antonyms": ["Base"],
    "example": "Do not place human leaders on a pedestal, because everyone makes mistakes."
  },
  "pedestrian": {
    "word": "Pedestrian",
    "pos": "adjective",
    "simpleDefinition": "Lacking inspiration, excitement, or originality; dull and commonplace.",
    "synonyms": ["Dull", "Ordinary", "Commonplace", "Uninspired"],
    "antonyms": ["Exciting", "Remarkable", "Extraordinary"],
    "example": "The novel had a pedestrian plot that failed to surprise or thrill readers."
  },
  "pensive": {
    "word": "Pensive",
    "pos": "adjective",
    "simpleDefinition": "Engaged in, involving, or reflecting deep, serious, or wistful thought.",
    "synonyms": ["Thoughtful", "Reflective", "Contemplative", "Wistful"],
    "antonyms": ["Carefree", "Unreflective", "Cheerful"],
    "example": "He stared into the fireplace in a pensive mood, pondering the past year."
  },
  "perjury": {
    "word": "Perjury",
    "pos": "noun",
    "simpleDefinition": "The offense of deliberately telling a lie in court while under solemn oath.",
    "synonyms": ["False testimony", "Lying under oath", "Mendacity"],
    "antonyms": ["Truthfulness", "Honesty"],
    "example": "The witness was convicted of perjury after surveillance video disproved his story."
  },
  "perplex": {
    "word": "Perplex",
    "pos": "verb",
    "simpleDefinition": "To make someone feel completely baffled, confused, or puzzled.",
    "synonyms": ["Baffle", "Puzzle", "Confuse", "Mystify"],
    "antonyms": ["Clarify", "Explain", "Enlighten"],
    "example": "The bizarre chemical reaction continued to perplex the university researchers."
  },
  "persevering": {
    "word": "Persevering",
    "pos": "adjective",
    "simpleDefinition": "Continuing in a course of action despite difficulties, failures, or obstacles.",
    "synonyms": ["Persistent", "Tenacious", "Determined", "Steadfast"],
    "antonyms": ["Irresolute", "Wavering", "Faint-hearted"],
    "example": "Through persevering effort, the young entrepreneur turned her small bakery into a franchise."
  },
  "persistent": {
    "word": "Persistent",
    "pos": "adjective",
    "simpleDefinition": "Continuing firmly or obstinately; lasting for an enduring or long period.",
    "synonyms": ["Tenacious", "Enduring", "Relentless", "Stubborn"],
    "antonyms": ["Yielding", "Intermittent", "Temporary"],
    "example": "Her persistent cough finally convinced her to see a specialist for a checkup."
  },
  "pessimist": {
    "word": "Pessimist",
    "pos": "noun",
    "simpleDefinition": "A person who tends to expect the worst possible outcome in any situation.",
    "synonyms": ["Cynic", "Defeatist", "Gloom-monger"],
    "antonyms": ["Optimist", "Idealist"],
    "example": "A pessimist expects rain on every sunny day and forgets to enjoy the warmth."
  },
  "petrology": {
    "word": "Petrology",
    "pos": "noun",
    "simpleDefinition": "The scientific study of rocks, including their origins, composition, and structure.",
    "synonyms": ["Rock science", "Lithology"],
    "antonyms": ["No common antonym"],
    "example": "Students of petrology spend weeks examining crystalline volcanic rock formations."
  },
  "philanthropist": {
    "word": "Philanthropist",
    "pos": "noun",
    "simpleDefinition": "A person who seeks to promote the welfare of others, especially by donating money.",
    "synonyms": ["Benefactor", "Donor", "Humanitarian", "Patron"],
    "antonyms": ["Miser", "Misanthrope"],
    "example": "The generous philanthropist built libraries and healthcare clinics across the countryside."
  },
  "philatelist": {
    "word": "Philatelist",
    "pos": "noun",
    "simpleDefinition": "A person who collects, studies, and preserves postage stamps.",
    "synonyms": ["Stamp collector"],
    "antonyms": ["No common antonym"],
    "example": "The avid philatelist paid a large sum for a rare nineteenth-century postage stamp."
  },
  "pilferer": {
    "word": "Pilferer",
    "pos": "noun",
    "simpleDefinition": "A thief who repeatedly steals small or relatively worthless items.",
    "synonyms": ["Petty thief", "Shoplifter", "Filcher"],
    "antonyms": ["Honest person"],
    "example": "Security officers identified the pilferer who was taking stationery from the supply room."
  },
  "piquant": {
    "word": "Piquant",
    "pos": "adjective",
    "simpleDefinition": "Having a pleasantly sharp or spicy flavor, or pleasantly stimulating and exciting.",
    "synonyms": ["Spicy", "Tangy", "Flavorful", "Intriguing"],
    "antonyms": ["Bland", "Tasteless", "Dull"],
    "example": "The roasted fish was served with a piquant sauce made of lime and red chilies."
  },
  "pitfall": {
    "word": "Pitfall",
    "pos": "noun",
    "simpleDefinition": "A hidden or unsuspected danger, trap, or difficulty in a plan or action.",
    "synonyms": ["Hazard", "Danger", "Trap", "Snare"],
    "antonyms": ["Advantage", "Safety"],
    "example": "Borrowing large amounts of credit card debt is a common financial pitfall for college graduates."
  },
  "pithy": {
    "word": "Pithy",
    "pos": "adjective",
    "simpleDefinition": "Concise, meaningful, and forcefully expressive in language.",
    "synonyms": ["Concise", "Succinct", "Brief", "Trenchant"],
    "antonyms": ["Verbose", "Wordy", "Rambling"],
    "example": "Her speech was short, pithy, and full of memorable practical wisdom."
  },
  "pittance": {
    "word": "Pittance",
    "pos": "noun",
    "simpleDefinition": "A very small or inadequate amount of money received as payment.",
    "synonyms": ["Trifle", "Small wage", "Modicum", "Tiny sum"],
    "antonyms": ["Fortune", "Windfall", "Wealth"],
    "example": "The migrant laborers worked twelve hours a day in harsh heat for a meager pittance."
  },
  "placatory": {
    "word": "Placatory",
    "pos": "adjective",
    "simpleDefinition": "Intended to calm, appease, or make someone less angry or hostile.",
    "synonyms": ["Conciliatory", "Pacifying", "Appeasing", "Mollifying"],
    "antonyms": ["Provocative", "Inflammatory", "Antagonistic"],
    "example": "He offered a placatory apology to soothe the customer's legitimate frustration."
  },
  "plainness": {
    "word": "Plainness",
    "pos": "noun",
    "simpleDefinition": "The quality of being simple, clear, unadorned, or direct.",
    "synonyms": ["Simplicity", "Clarity", "Directness", "Modesty"],
    "antonyms": ["Complexity", "Extravagance", "Ornamentation"],
    "example": "The plainness of his speech made the difficult legal concept understandable to all."
  },
  "plaintiff": {
    "word": "Plaintiff",
    "pos": "noun",
    "simpleDefinition": "A person who brings a lawsuit or legal accusation against another in court.",
    "synonyms": ["Complainant", "Claimant", "Petitioner", "Accuser"],
    "antonyms": ["Defendant"],
    "example": "The plaintiff presented signed contracts to prove the builder broke his promise."
  },
  "plausibility": {
    "word": "Plausibility",
    "pos": "noun",
    "simpleDefinition": "The quality of seeming reasonable, believable, or probable.",
    "synonyms": ["Credibility", "Believability", "Likelihood", "Probability"],
    "antonyms": ["Implausibility", "Improbability", "Absurdity"],
    "example": "The detective scrutinized the plausibility of the suspect's unusual alibi."
  },
  "plenty": {
    "word": "Plenty",
    "pos": "noun",
    "simpleDefinition": "A large or sufficient amount or quantity; abundance.",
    "synonyms": ["Abundance", "Sufficiency", "Wealth", "Profusion"],
    "antonyms": ["Scarcity", "Lack", "Shortage"],
    "example": "There was plenty of warm food and clean drinking water available at the relief camp."
  },
  "plethora": {
    "word": "Plethora",
    "pos": "noun",
    "simpleDefinition": "A large or excessive amount of something; an overabundance.",
    "synonyms": ["Excess", "Abundance", "Surplus", "Surfeit"],
    "antonyms": ["Scarcity", "Dearth", "Paucity"],
    "example": "The bookstore features a plethora of study guides for standardized exams."
  },
  "plucky": {
    "word": "Plucky",
    "pos": "adjective",
    "simpleDefinition": "Showing brave and spirited courage in the face of difficulties.",
    "synonyms": ["Brave", "Courageous", "Spirited", "Bold"],
    "antonyms": ["Cowardly", "Timid", "Fearful"],
    "example": "The plucky little kitten climbed out of the ditch all on its own."
  },
  "poignant": {
    "word": "Poignant",
    "pos": "adjective",
    "simpleDefinition": "Evoking a keen, sharp sense of sadness, regret, or deep emotional empathy.",
    "synonyms": ["Touching", "Moving", "Heartbreaking", "Affecting"],
    "antonyms": ["Unemotional", "Indifferent", "Cheerful"],
    "example": "The war memorial contains poignant letters written by young soldiers to their mothers."
  },
  "polity": {
    "word": "Polity",
    "pos": "noun",
    "simpleDefinition": "An organized society, state, or nation considered as a political entity.",
    "synonyms": ["Commonwealth", "State", "Civil society", "Government"],
    "antonyms": ["Anarchy"],
    "example": "Democratic participation is essential for the healthy functioning of any modern polity."
  },
  "polyglot": {
    "word": "Polyglot",
    "pos": "noun",
    "simpleDefinition": "A person who knows and is able to speak or write multiple languages fluently.",
    "synonyms": ["Multilingual person", "Linguist"],
    "antonyms": ["Monoglot", "Monolingual person"],
    "example": "The international diplomat was a polyglot fluent in five distinct languages."
  },
  "ponder": {
    "word": "Ponder",
    "pos": "verb",
    "simpleDefinition": "To think about something carefully and deeply, especially before making a decision.",
    "synonyms": ["Contemplate", "Reflect", "Meditate", "Deliberate"],
    "antonyms": ["Ignore", "Overlook", "Dismiss"],
    "example": "She sat quietly by the serene lake to ponder her future career plans."
  },
  "pose": {
    "word": "Pose",
    "pos": "verb",
    "simpleDefinition": "To present or constitute a problem or question, or hold a particular posture.",
    "synonyms": ["Present", "Cause", "Constitute", "Position"],
    "antonyms": ["Resolve", "Alleviate"],
    "example": "Rising carbon emissions pose an imminent danger to global marine ecosystems."
  },
  "possess": {
    "word": "Possess",
    "pos": "verb",
    "simpleDefinition": "To have, hold, or own something as property, a trait, or a skill.",
    "synonyms": ["Own", "Have", "Hold", "Retain"],
    "antonyms": ["Lack", "Lose", "Abandon"],
    "example": "Applicants for the managerial role must possess strong organizational skills."
  },
  "possessed": {
    "word": "Possessed",
    "pos": "adjective",
    "simpleDefinition": "Controlled by an evil spirit, or driven by a fierce, overpowering passion.",
    "synonyms": ["Consumed", "Obsessed", "Enchanted", "Driven"],
    "antonyms": ["Calm", "Composed", "Rational"],
    "example": "The sprinter ran the final hundred meters as if possessed by fierce determination."
  },
  "postscript": {
    "word": "Postscript",
    "pos": "noun",
    "simpleDefinition": "An additional message added at the end of a letter after the signature (P.S.).",
    "synonyms": ["Addendum", "Afterword", "Supplement", "Note"],
    "antonyms": ["Preface", "Foreword"],
    "example": "In a brief postscript, she asked her brother to send her winter coat by post."
  },
  "postulate": {
    "word": "Postulate",
    "pos": "verb",
    "simpleDefinition": "To suggest or assume the truth of something as the foundation for reasoning.",
    "synonyms": ["Hypothesize", "Propose", "Theorize", "Assume"],
    "antonyms": ["Disprove", "Refute", "Deny"],
    "example": "Physicists postulate that dark matter constitutes most of the universe's mass."
  },
  "potty": {
    "word": "Potty",
    "pos": "adjective",
    "simpleDefinition": "Slightly crazy, eccentric, or silly; foolish.",
    "synonyms": ["Eccentric", "Crazy", "Silly", "Mad"],
    "antonyms": ["Sane", "Sensible", "Rational"],
    "example": "You must be potty to go hiking in the woods during a raging blizzard."
  },
  "pout": {
    "word": "Pout",
    "pos": "verb",
    "simpleDefinition": "To push out one's lips in petulant annoyance, irritation, or disappointment.",
    "synonyms": ["Sulk", "Scowl", "Frown", "Glower"],
    "antonyms": ["Smile", "Grin"],
    "example": "The little boy began to pout when his mother turned off the cartoon show."
  },
  "pragmatic": {
    "word": "Pragmatic",
    "pos": "adjective",
    "simpleDefinition": "Dealing with things sensibly and realistically based on practical considerations.",
    "synonyms": ["Practical", "Realistic", "Sensible", "Down-to-earth"],
    "antonyms": ["Idealistic", "Impractical", "Unrealistic"],
    "example": "We need a pragmatic strategy that solves traffic congestion without bankrupting the city."
  },
  "preamble": {
    "word": "Preamble",
    "pos": "noun",
    "simpleDefinition": "A preliminary or introductory statement to an official document or speech.",
    "synonyms": ["Introduction", "Preface", "Prologue", "Foreword"],
    "antonyms": ["Epilogue", "Conclusion", "Afterword"],
    "example": "The preamble of the national constitution declares the fundamental rights of all citizens."
  },
  "precise": {
    "word": "Precise",
    "pos": "adjective",
    "simpleDefinition": "Marked by exactness and accuracy of detail or expression.",
    "synonyms": ["Exact", "Accurate", "Specific", "Detailed"],
    "antonyms": ["Vague", "Imprecise", "Inaccurate"],
    "example": "The laboratory technician gave precise instructions on how to measure the chemical solution."
  },
  "predominance": {
    "word": "Predominance",
    "pos": "noun",
    "simpleDefinition": "The state or condition of being greater in power, influence, or quantity.",
    "synonyms": ["Dominance", "Superiority", "Prevalence", "Ascendancy"],
    "antonyms": ["Inferiority", "Minority", "Subordination"],
    "example": "The predominance of renewable solar energy has significantly reduced factory emissions."
  },
  "preface": {
    "word": "Preface",
    "pos": "noun",
    "simpleDefinition": "An introductory explanation at the beginning of a book or publication.",
    "synonyms": ["Foreword", "Introduction", "Prologue"],
    "antonyms": ["Afterword", "Epilogue"],
    "example": "In the author's preface, she explained what inspired her to write the historical novel."
  },
  "prejudiced": {
    "word": "Prejudiced",
    "pos": "adjective",
    "simpleDefinition": "Having or showing an unfair dislike or bias against a group of people.",
    "synonyms": ["Biased", "Bigoted", "Discriminatory", "Partial"],
    "antonyms": ["Unbiased", "Fair", "Impartial"],
    "example": "A fair court must ensure jurors are not prejudiced against the defendant."
  },
  "preponderance": {
    "word": "Preponderance",
    "pos": "noun",
    "simpleDefinition": "The quality of being greater in weight, quantity, influence, or importance.",
    "synonyms": ["Majority", "Dominance", "Prevalence", "Bulk"],
    "antonyms": ["Minority", "Paucity", "Deficit"],
    "example": "The preponderance of clinical evidence indicates that regular exercise lengthens life."
  },
  "pressing": {
    "word": "Pressing",
    "pos": "adjective",
    "simpleDefinition": "Requiring immediate or prompt action; urgent and critical.",
    "synonyms": ["Urgent", "Crucial", "Acute", "Critical"],
    "antonyms": ["Unimportant", "Trivial", "Unhurried"],
    "example": "Providing clean water to drought-stricken villages is our most pressing duty."
  },
  "pressurizing": {
    "word": "Pressurizing",
    "pos": "verb",
    "simpleDefinition": "Applying intense persuasion or coercion to force someone to act.",
    "synonyms": ["Coercing", "Compelling", "Urging", "Badgering"],
    "antonyms": ["Leaving alone", "Releasing"],
    "example": "Aggressive lenders were pressurizing homeowners into taking high-interest loans."
  },
  "pretend": {
    "word": "Pretend",
    "pos": "verb",
    "simpleDefinition": "To act so as to make it appear that something is true when it is not.",
    "synonyms": ["Feign", "Fake", "Simulate", "Dissemble"],
    "antonyms": ["Be genuine", "Be truthful"],
    "example": "She tried to pretend she was calm despite her racing heart before the interview."
  },
  "pretty penny": {
    "word": "Pretty penny",
    "pos": "idiom",
    "simpleDefinition": "A very large or substantial sum of money.",
    "synonyms": ["A fortune", "Tidy sum", "Substantial sum"],
    "antonyms": ["Pittance", "Small change"],
    "example": "Restoring that vintage sports car must have cost him a pretty penny."
  },
  "prevalent": {
    "word": "Prevalent",
    "pos": "adjective",
    "simpleDefinition": "Widespread in a particular area, community, or period of time.",
    "synonyms": ["Widespread", "Common", "Prevailing", "Frequent"],
    "antonyms": ["Rare", "Uncommon", "Scarce"],
    "example": "Smartphone usage is prevalent among people of all ages today."
  },
  "prevaricator": {
    "word": "Prevaricator",
    "pos": "noun",
    "simpleDefinition": "A person who deliberately speaks falsely or avoids telling the whole truth.",
    "synonyms": ["Liar", "Fibber", "Equivocator", "Deceiver"],
    "antonyms": ["Truth-teller", "Honest person"],
    "example": "The cross-examination revealed the dishonest witness to be an untrustworthy prevaricator."
  },
  "prick": {
    "word": "Prick",
    "pos": "verb",
    "simpleDefinition": "To make a tiny puncture with a sharp object, or feel a sudden sharp pinch.",
    "synonyms": ["Puncture", "Pierce", "Poke", "Stab"],
    "antonyms": ["Soothe", "Heal"],
    "example": "Be mindful when harvesting wild blackberries so the sharp thorns do not prick your skin."
  },
  "prima facie": {
    "word": "Prima facie",
    "pos": "adjective",
    "simpleDefinition": "Accepted as correct or sufficient upon initial inspection until disproved.",
    "synonyms": ["Self-evident", "Apparent", "Presumptive"],
    "antonyms": ["Conclusive", "Proven false"],
    "example": "The recovered fingerprint provided prima facie evidence tying him to the burglary."
  },
  "procession": {
    "word": "Procession",
    "pos": "noun",
    "simpleDefinition": "A number of people or vehicles moving forward in an orderly, formal fashion.",
    "synonyms": ["Parade", "March", "Cavalcade", "Column"],
    "antonyms": ["Dispersal"],
    "example": "A joyful procession of graduates marched proudly across the university lawn."
  },
  "prodigal": {
    "word": "Prodigal",
    "pos": "adjective",
    "simpleDefinition": "Spending money or resources wastefully and extravagantly.",
    "synonyms": ["Extravagant", "Wasteful", "Profligate", "Spendthrift"],
    "antonyms": ["Frugal", "Thrifty", "Economical"],
    "example": "The prodigal prince spent fortunes on lavish parties and ended up in heavy debt."
  },
  "prodigy": {
    "word": "Prodigy",
    "pos": "noun",
    "simpleDefinition": "A young person endowed with exceptional abilities, qualities, or genius.",
    "synonyms": ["Genius", "Wunderkind", "Phenomenon", "Marvel"],
    "antonyms": ["Simpleton", "Amateur"],
    "example": "The nine-year-old piano prodigy amazed the audience with her flawless performance."
  },
  "profane": {
    "word": "Profane",
    "pos": "adjective",
    "simpleDefinition": "Showing disrespect for sacred things, or secular rather than religious.",
    "synonyms": ["Irreverent", "Secular", "Unholy", "Disrespectful"],
    "antonyms": ["Sacred", "Holy", "Reverent"],
    "example": "Visitors are politely asked to refrain from using profane language inside the ancient chapel."
  },
  "profligate": {
    "word": "Profligate",
    "pos": "adjective",
    "simpleDefinition": "Recklessly extravagant or wasteful in the use of resources or money.",
    "synonyms": ["Wasteful", "Extravagant", "Improvident", "Spendthrift"],
    "antonyms": ["Frugal", "Thrifty", "Prudent"],
    "example": "Citizens protested against the municipality's profligate spending on luxury banquets."
  },
  "proliferate": {
    "word": "Proliferate",
    "pos": "verb",
    "simpleDefinition": "To increase rapidly in numbers; multiply and expand quickly.",
    "synonyms": ["Multiply", "Mushroom", "Spread", "Burgeon"],
    "antonyms": ["Decrease", "Dwindle", "Diminish"],
    "example": "Coffee shops and bakeries began to proliferate along the newly paved avenue."
  },
  "prompt": {
    "word": "Prompt",
    "pos": "adjective",
    "simpleDefinition": "Done without delay; immediate, punctual, and timely.",
    "synonyms": ["Immediate", "Quick", "Punctual", "Swift"],
    "antonyms": ["Slow", "Tardy", "Delayed"],
    "example": "Thank you for your prompt response to our emergency customer support ticket."
  },
  "propensity": {
    "word": "Propensity",
    "pos": "noun",
    "simpleDefinition": "An inclination or natural tendency to behave in a particular way.",
    "synonyms": ["Tendency", "Inclination", "Penchant", "Leaning"],
    "antonyms": ["Aversion", "Disinclination"],
    "example": "He has a recognized propensity to speak without thinking when put under pressure."
  },
  "proportionate": {
    "word": "Proportionate",
    "pos": "adjective",
    "simpleDefinition": "Corresponding in size, degree, or intensity; commensurate.",
    "synonyms": ["Proportional", "Commensurate", "Balanced", "Equal"],
    "antonyms": ["Disproportionate", "Unequal"],
    "example": "The bonus payment was proportionate to the number of successful sales achieved."
  },
  "protract": {
    "word": "Protract",
    "pos": "verb",
    "simpleDefinition": "To prolong, extend, or drag out in duration.",
    "synonyms": ["Prolong", "Extend", "Lengthen", "Drag out"],
    "antonyms": ["Shorten", "Curtail", "Abbreviate"],
    "example": "Do not protract the meeting unnecessarily when everyone has already agreed."
  },
  "provincial": {
    "word": "Provincial",
    "pos": "adjective",
    "simpleDefinition": "Belonging to a province, or narrow-minded, insular, and unsophisticated.",
    "synonyms": ["Parochial", "Insular", "Rural", "Narrow-minded"],
    "antonyms": ["Cosmopolitan", "Broad-minded", "Sophisticated"],
    "example": "Living in different world capitals helped her outgrow her narrow provincial perspective."
  },
  "provocation": {
    "word": "Provocation",
    "pos": "noun",
    "simpleDefinition": "Action or speech that makes someone annoyed, angry, or retaliatory.",
    "synonyms": ["Incitement", "Goading", "Affront", "Stirring"],
    "antonyms": ["Pacification", "Conciliation"],
    "example": "He kept his temper calmly despite repeated deliberate provocation from the opposition."
  },
  "proximate": {
    "word": "Proximate",
    "pos": "adjective",
    "simpleDefinition": "Closest in relationship, space, or time; immediately adjacent.",
    "synonyms": ["Nearest", "Closest", "Adjacent", "Immediate"],
    "antonyms": ["Distant", "Remote", "Far"],
    "example": "Faulty electrical wiring was identified as the proximate cause of the warehouse fire."
  },
  "pseudonym": {
    "word": "Pseudonym",
    "pos": "noun",
    "simpleDefinition": "A fictitious name used by an author or artist to conceal true identity.",
    "synonyms": ["Pen name", "Alias", "Assumed name"],
    "antonyms": ["Real name"],
    "example": "The famous Victorian author published several satirical novels under an anonymous pseudonym."
  },
  "publicize": {
    "word": "Publicize",
    "pos": "verb",
    "simpleDefinition": "To make something widely known to the public through media or advertisements.",
    "synonyms": ["Advertise", "Promote", "Announce", "Broadcast"],
    "antonyms": ["Conceal", "Suppress", "Hide"],
    "example": "The community group placed banners across town to publicize the charity marathon."
  },
  "puerile": {
    "word": "Puerile",
    "pos": "adjective",
    "simpleDefinition": "Childishly silly, immature, or trivial.",
    "synonyms": ["Childish", "Immature", "Infantile", "Juvenile"],
    "antonyms": ["Mature", "Sensible", "Adult"],
    "example": "Throwing paper airplanes across the boardroom was an example of puerile behavior."
  },
  "punctilious": {
    "word": "Punctilious",
    "pos": "adjective",
    "simpleDefinition": "Showing great attention to detail, strict etiquette, or correct behavior.",
    "synonyms": ["Meticulous", "Conscientious", "Scrupulous", "Exact"],
    "antonyms": ["Careless", "Sloppy", "Negligent"],
    "example": "The host was punctilious about seating each guest according to royal protocol."
  },
  "push sale": {
    "word": "Push sale",
    "pos": "noun",
    "simpleDefinition": "An aggressive sales technique that pushes goods forcefully onto buyers.",
    "synonyms": ["Hard sell", "Aggressive marketing"],
    "antonyms": ["Soft sell"],
    "example": "The electronics retailer used push sale incentives to clear old models off shelves."
  },
  "pusillanimous": {
    "word": "Pusillanimous",
    "pos": "adjective",
    "simpleDefinition": "Showing a lack of courage, boldness, or determination; timid.",
    "synonyms": ["Cowardly", "Timid", "Fearful", "Spineless"],
    "antonyms": ["Brave", "Courageous", "Bold"],
    "example": "The pusillanimous manager refused to defend his team against baseless accusations."
  },
  "put up with": {
    "word": "Put up with",
    "pos": "idiom",
    "simpleDefinition": "To tolerate, endure, or bear an unpleasant person or situation without complaint.",
    "synonyms": ["Tolerate", "Endure", "Bear", "Stand"],
    "antonyms": ["Reject", "Resist"],
    "example": "I do not know how she can put up with such noisy construction outside her office."
  },
  "puzzling": {
    "word": "Puzzling",
    "pos": "adjective",
    "simpleDefinition": "Causing confusion or difficulty in understanding; perplexing.",
    "synonyms": ["Perplexing", "Baffling", "Mystifying", "Enigmatic"],
    "antonyms": ["Clear", "Obvious", "Simple"],
    "example": "Her sudden change of heart remains a puzzling enigma to all her relatives."
  },
  "quarrelsome": {
    "word": "Quarrelsome",
    "pos": "adjective",
    "simpleDefinition": "Given to or characterized by quarreling; argumentative and contentious.",
    "synonyms": ["Argumentative", "Contentious", "Belligerent", "Pugnacious"],
    "antonyms": ["Peaceful", "Agreeable", "Friendly"],
    "example": "The quarrelsome tenant was constantly complaining and fighting with neighbors."
  },
  "quash": {
    "word": "Quash",
    "pos": "verb",
    "simpleDefinition": "To reject or void by legal procedure, or suppress and put an end to.",
    "synonyms": ["Annul", "Nullify", "Suppress", "Crush"],
    "antonyms": ["Uphold", "Validate", "Enforce"],
    "example": "The higher court moved to quash the wrongful conviction after new DNA evidence surfaced."
  },
  "queer": {
    "word": "Queer",
    "pos": "adjective",
    "simpleDefinition": "Strange, odd, or unusual in behavior or appearance.",
    "synonyms": ["Strange", "Odd", "Peculiar", "Unusual"],
    "antonyms": ["Normal", "Ordinary", "Typical"],
    "example": "The traveler heard a queer tapping noise coming from behind the locked wooden door."
  },
  "queue": {
    "word": "Queue",
    "pos": "noun",
    "simpleDefinition": "A line or sequence of people or vehicles awaiting their turn.",
    "synonyms": ["Line", "Row", "Column", "File"],
    "antonyms": ["Mob", "Crowd"],
    "example": "An orderly queue of commuters formed in front of the ticket booth."
  }
}

if __name__ == '__main__':
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
    
    added = 0
    for k, v in BATCH4_DATA.items():
        cache[k.lower()] = v
        added += 1
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)
    
    print(f"Added {added} curated entries for 'P, Q' to cache. Total cache size: {len(cache)}")
