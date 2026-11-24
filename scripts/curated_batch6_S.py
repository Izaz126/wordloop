import os
import json

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

BATCH6_DATA = {
  "sacrilegious": {
    "word": "Sacrilegious",
    "pos": "adjective",
    "simpleDefinition": "Showing great disrespect or irreverence toward something sacred or holy.",
    "synonyms": ["Profane", "Blasphemous", "Irreverent", "Impious"],
    "antonyms": ["Sacred", "Reverent", "Pious"],
    "example": "Vandalizing the historic altar was condemned as a sacrilegious crime."
  },
  "sacrosanct": {
    "word": "Sacrosanct",
    "pos": "adjective",
    "simpleDefinition": "Regarded as too important, respected, or valuable to be interfered with.",
    "synonyms": ["Inviolable", "Untouchable", "Sacred", "Hallowed"],
    "antonyms": ["Profane", "Vulnerable"],
    "example": "Freedom of speech is considered a sacrosanct principle in a healthy democracy."
  },
  "sagacity": {
    "word": "Sagacity",
    "pos": "noun",
    "simpleDefinition": "Keen mental discernment, soundness of judgment, and deep wisdom.",
    "synonyms": ["Wisdom", "Insight", "Discernment", "Acumen"],
    "antonyms": ["Foolishness", "Stupidity", "Folly"],
    "example": "The community respected the elderly judge for her remarkable wisdom and sagacity."
  },
  "sage": {
    "word": "Sage",
    "pos": "noun",
    "simpleDefinition": "A profoundly wise person famed for sound judgment and learning.",
    "synonyms": ["Philosopher", "Scholar", "Wise person", "Mentor"],
    "antonyms": ["Fool", "Simpleton"],
    "example": "Seekers traveled from distant lands to seek counsel from the revered mountain sage."
  },
  "salient": {
    "word": "Salient",
    "pos": "adjective",
    "simpleDefinition": "Most noticeable, prominent, or important.",
    "synonyms": ["Prominent", "Noticeable", "Conspicuous", "Striking"],
    "antonyms": ["Minor", "Inconspicuous", "Obscure"],
    "example": "The speaker highlighted the salient points of the economic recovery plan."
  },
  "salubrious": {
    "word": "Salubrious",
    "pos": "adjective",
    "simpleDefinition": "Health-giving, pleasant, and promoting good physical wellbeing.",
    "synonyms": ["Healthy", "Wholesome", "Beneficial", "Invigorating"],
    "antonyms": ["Unhealthy", "Noxious", "Unwholesome"],
    "example": "The crisp alpine air and pure spring water provided a salubrious environment."
  },
  "sanatorium": {
    "word": "Sanatorium",
    "pos": "noun",
    "simpleDefinition": "A medical facility for the treatment of long-term illness or recuperation.",
    "synonyms": ["Retreat", "Infirmary", "Rest home", "Hospital"],
    "antonyms": ["No common antonym"],
    "example": "Patients recovering from respiratory ailments spent months in a quiet mountain sanatorium."
  },
  "sane": {
    "word": "Sane",
    "pos": "adjective",
    "simpleDefinition": "Of sound mind, rational, reasonable, and sensible.",
    "synonyms": ["Rational", "Sound", "Sensible", "Lucid"],
    "antonyms": ["Insane", "Mad", "Irrational"],
    "example": "No sane person would attempt to cross that flooded river in a small rowboat."
  },
  "saw": {
    "word": "Saw",
    "pos": "noun",
    "simpleDefinition": "An old proverb, maxim, or wise traditional saying.",
    "synonyms": ["Proverb", "Maxim", "Adage", "Aphorism"],
    "antonyms": ["Novelty"],
    "example": "My grandfather often quoted the old saw that a stitch in time saves nine."
  },
  "scam": {
    "word": "Scam",
    "pos": "noun",
    "simpleDefinition": "A dishonest or fraudulent scheme designed to cheat people of money.",
    "synonyms": ["Fraud", "Swindle", "Con", "Racket"],
    "antonyms": ["Honest deal", "Legitimate business"],
    "example": "Police issued warnings to help elderly citizens avoid online email phishing scams."
  },
  "scanty": {
    "word": "Scanty",
    "pos": "adjective",
    "simpleDefinition": "Small or insufficient in quantity, size, or amount; meager.",
    "synonyms": ["Meager", "Sparse", "Insufficient", "Scarce"],
    "antonyms": ["Abundant", "Ample", "Plentiful"],
    "example": "The stranded hikers had to survive on scanty rations of water and dried fruit."
  },
  "scarcity": {
    "word": "Scarcity",
    "pos": "noun",
    "simpleDefinition": "The state of being in short supply or scarce; shortage.",
    "synonyms": ["Shortage", "Dearth", "Lack", "Deficiency"],
    "antonyms": ["Abundance", "Plenty", "Surplus"],
    "example": "Severe summer drought led to a critical scarcity of fresh drinking water."
  },
  "scatter": {
    "word": "Scatter",
    "pos": "verb",
    "simpleDefinition": "To throw in random directions or cause to separate and disperse.",
    "synonyms": ["Disperse", "Strew", "Sprinkle", "Spread"],
    "antonyms": ["Gather", "Collect", "Assemble"],
    "example": "A sudden gust of wind began to scatter dried leaves across the garden path."
  },
  "scenic": {
    "word": "Scenic",
    "pos": "adjective",
    "simpleDefinition": "Offering or relating to beautiful, impressive natural views.",
    "synonyms": ["Picturesque", "Beautiful", "Panoramic", "Charming"],
    "antonyms": ["Ugly", "Bleak", "Unattractive"],
    "example": "We took the scenic coastal route to enjoy breathtaking panoramic views of the ocean."
  },
  "scissors": {
    "word": "Scissors",
    "pos": "noun",
    "simpleDefinition": "A cutting tool with two crossed pivoted blades that slide against each other.",
    "synonyms": ["Shears", "Clippers", "Cutters"],
    "antonyms": ["No common antonym"],
    "example": "She used a sharp pair of stainless steel scissors to cut the ribbon."
  },
  "scold": {
    "word": "Scold",
    "pos": "verb",
    "simpleDefinition": "To rebuke, reprimand, or criticize someone angrily.",
    "synonyms": ["Rebuke", "Reprimand", "Chide", "Berate"],
    "antonyms": ["Praise", "Commend", "Applaud"],
    "example": "The mother scolded her son for crossing the busy street without looking."
  },
  "screams": {
    "word": "Screams",
    "pos": "noun",
    "simpleDefinition": "Long, loud, piercing cries of fear, pain, or excitement.",
    "synonyms": ["Shrieks", "Yells", "Howls", "Cries"],
    "antonyms": ["Whispers", "Silence"],
    "example": "Terrified screams rang out when the rollercoaster suddenly made a sharp drop."
  },
  "scurrilous": {
    "word": "Scurrilous",
    "pos": "adjective",
    "simpleDefinition": "Making scandalous, defamatory, or abusive claims to damage someone's reputation.",
    "synonyms": ["Defamatory", "Slanderous", "Abusive", "Insulting"],
    "antonyms": ["Complimentary", "Respectful", "Polite"],
    "example": "The tabloid newspaper faced legal action after printing scurrilous lies about the author."
  },
  "seething": {
    "word": "Seething",
    "pos": "adjective",
    "simpleDefinition": "Filled with or characterized by intense, suppressed anger or rage.",
    "synonyms": ["Fuming", "Boiling", "Raging", "Simmering"],
    "antonyms": ["Calm", "Peaceful", "Tranquil"],
    "example": "He sat in seething silence while his rival falsely claimed credit for the team's work."
  },
  "segregate": {
    "word": "Segregate",
    "pos": "verb",
    "simpleDefinition": "To set apart from the rest; isolate, divide, or separate.",
    "synonyms": ["Isolate", "Separate", "Divide", "Quarantine"],
    "antonyms": ["Integrate", "Combine", "Unite"],
    "example": "Doctors had to segregate contagious patients to prevent the virus from spreading."
  },
  "senility": {
    "word": "Senility",
    "pos": "noun",
    "simpleDefinition": "The condition of being senile; mental deterioration associated with old age.",
    "synonyms": ["Decrepitude", "Dotage", "Infirmity"],
    "antonyms": ["Youth", "Vigor"],
    "example": "Despite advancing years, the retired professor showed no signs of senility."
  },
  "sermon": {
    "word": "Sermon",
    "pos": "noun",
    "simpleDefinition": "A religious or moral talk delivered during a church service.",
    "synonyms": ["Homily", "Address", "Discourse", "Lesson"],
    "antonyms": ["Casual chat"],
    "example": "The preacher delivered a powerful sermon emphasizing charity, forgiveness, and love."
  },
  "servile": {
    "word": "Servile",
    "pos": "adjective",
    "simpleDefinition": "Showing an excessive willingness to serve, grovel, or please others; fawning.",
    "synonyms": ["Submissive", "Sycophantic", "Groveling", "Fawning"],
    "antonyms": ["Assertive", "Independent", "Proud"],
    "example": "His servile attitude toward the company president alienated his coworkers."
  },
  "severe": {
    "word": "Severe",
    "pos": "adjective",
    "simpleDefinition": "Very great, intense, or strict; causing pain, distress, or hardship.",
    "synonyms": ["Harsh", "Strict", "Acute", "Stern"],
    "antonyms": ["Mild", "Lenient", "Gentle"],
    "example": "A severe winter storm caused major power outages across the northern provinces."
  },
  "shaky": {
    "word": "Shaky",
    "pos": "adjective",
    "simpleDefinition": "Trembling or shaking, or unstable, unreliable, and weak.",
    "synonyms": ["Unsteady", "Trembling", "Unstable", "Precarious"],
    "antonyms": ["Steady", "Stable", "Firm"],
    "example": "Her shaky voice revealed how frightened she felt during the emergency."
  },
  "shallow": {
    "word": "Shallow",
    "pos": "adjective",
    "simpleDefinition": "Having little depth from top to bottom, or lacking intellectual or emotional depth.",
    "synonyms": ["Superficial", "Skin-deep", "Frivolous"],
    "antonyms": ["Deep", "Profound", "Thoughtful"],
    "example": "The toddlers safely splashed water in the shallow end of the pool."
  },
  "shore": {
    "word": "Shore",
    "pos": "noun",
    "simpleDefinition": "The land along the edge of a sea, lake, ocean, or river.",
    "synonyms": ["Coast", "Beach", "Seaside", "Bank"],
    "antonyms": ["Open sea", "Inland"],
    "example": "Fishermen pulled their wooden boats onto the sandy shore as dusk arrived."
  },
  "shortcoming": {
    "word": "Shortcoming",
    "pos": "noun",
    "simpleDefinition": "A failure, flaw, or defect to meet a required standard in character or ability.",
    "synonyms": ["Flaw", "Defect", "Weakness", "Fault"],
    "antonyms": ["Strength", "Virtue", "Asset"],
    "example": "Impatience was his chief shortcoming during complicated negotiations."
  },
  "shortcomings": {
    "word": "Shortcomings",
    "pos": "noun",
    "simpleDefinition": "Faults, flaws, or weaknesses in character, system, or performance.",
    "synonyms": ["Flaws", "Defects", "Weaknesses", "Failings"],
    "antonyms": ["Strengths", "Virtues"],
    "example": "The audit report highlighted several financial shortcomings in the current management system."
  },
  "shove": {
    "word": "Shove",
    "pos": "verb",
    "simpleDefinition": "To push someone or something roughly or forcefully.",
    "synonyms": ["Push", "Thrust", "Propel", "Jostle"],
    "antonyms": ["Pull", "Drag"],
    "example": "Rude passengers began to shove their way forward onto the bus."
  },
  "shrink": {
    "word": "Shrink",
    "pos": "verb",
    "simpleDefinition": "To become or make smaller in size, volume, or extent.",
    "synonyms": ["Contract", "Diminish", "Dwindle", "Recede"],
    "antonyms": ["Expand", "Enlarge", "Grow"],
    "example": "Woolen sweaters will quickly shrink if washed with hot water."
  },
  "simplicity": {
    "word": "Simplicity",
    "pos": "noun",
    "simpleDefinition": "The quality or condition of being easy to understand or do; unadorned elegance.",
    "synonyms": ["Clarity", "Plainness", "Ease", "Directness"],
    "antonyms": ["Complexity", "Intricacy", "Extravagance"],
    "example": "The beauty of the mobile application lies in its visual simplicity and speed."
  },
  "sinister": {
    "word": "Sinister",
    "pos": "adjective",
    "simpleDefinition": "Giving the impression that something harmful, evil, or menacing will happen.",
    "synonyms": ["Menacing", "Ominous", "Threatening", "Dark"],
    "antonyms": ["Benign", "Auspicious", "Comforting"],
    "example": "The dilapidated house had a sinister look beneath the dark storm clouds."
  },
  "skepticism": {
    "word": "Skepticism",
    "pos": "noun",
    "simpleDefinition": "A questioning attitude, doubt, or disbelief regarding claims or facts.",
    "synonyms": ["Doubt", "Disbelief", "Distrust", "Cynicism"],
    "antonyms": ["Belief", "Faith", "Conviction"],
    "example": "The scientist greeted the miraculous healing claims with healthy skepticism."
  },
  "skinflint": {
    "word": "Skinflint",
    "pos": "noun",
    "simpleDefinition": "A person who hates to spend money; a stingy miser.",
    "synonyms": ["Miser", "Penny-pincher", "Scrooge", "Cheapskate"],
    "antonyms": ["Spendthrift", "Philanthropist"],
    "example": "The wealthy skinflint refused to pay even five dollars for a warm coat."
  },
  "slackening": {
    "word": "Slackening",
    "pos": "verb",
    "simpleDefinition": "Becoming or making slower, less active, or less tight; easing off.",
    "synonyms": ["Slowing", "Abating", "Easing", "Loosening"],
    "antonyms": ["Tightening", "Accelerating", "Quickening"],
    "example": "With the rain slackening, the workers stepped outside to continue building."
  },
  "slip": {
    "word": "Slip",
    "pos": "verb",
    "simpleDefinition": "To lose one's footing and slide unintentionally.",
    "synonyms": ["Slide", "Skid", "Stumble", "Trip"],
    "antonyms": ["Stand firm", "Grip"],
    "example": "Walk slowly on the icy driveway so you do not slip and hurt yourself."
  },
  "slothful": {
    "word": "Slothful",
    "pos": "adjective",
    "simpleDefinition": "Lazy, sluggish, and disinclined to work or exert effort.",
    "synonyms": ["Lazy", "Sluggish", "Idle", "Lethargic"],
    "antonyms": ["Industrious", "Diligent", "Active"],
    "example": "His slothful lifestyle led him to spend entire weekends sleeping on the sofa."
  },
  "slumber": {
    "word": "Slumber",
    "pos": "noun",
    "simpleDefinition": "A peaceful, deep, or restful sleep.",
    "synonyms": ["Sleep", "Rest", "Doze", "Nap"],
    "antonyms": ["Wakefulness"],
    "example": "The gentle sound of falling rain lulled the child into a peaceful slumber."
  },
  "sneer": {
    "word": "Sneer",
    "pos": "noun",
    "simpleDefinition": "A contemptuous, mocking smile or remark expressing disdain.",
    "synonyms": ["Smirk", "Jeer", "Scoff", "Taunt"],
    "antonyms": ["Smile", "Compliment"],
    "example": "He dismissed his colleague's idea with an arrogant sneer of contempt."
  },
  "snob": {
    "word": "Snob",
    "pos": "noun",
    "simpleDefinition": "A person who looks down on others they consider socially or culturally inferior.",
    "synonyms": ["Elitist", "Condescending person"],
    "antonyms": ["Humble person"],
    "example": "Being an intellectual snob, he refused to read any modern popular fiction."
  },
  "sober": {
    "word": "Sober",
    "pos": "adjective",
    "simpleDefinition": "Not drunk or affected by alcohol; serious, sensible, and solemn.",
    "synonyms": ["Clearheaded", "Temperate", "Solemn", "Sensible"],
    "antonyms": ["Intoxicated", "Drunk", "Frivolous"],
    "example": "The physician delivered the sober medical diagnosis with great sensitivity."
  },
  "solace": {
    "word": "Solace",
    "pos": "noun",
    "simpleDefinition": "Comfort, relief, or consolation in a time of distress or sadness.",
    "synonyms": ["Comfort", "Consolation", "Relief", "Peace"],
    "antonyms": ["Distress", "Anguish", "Misery"],
    "example": "She found solace in quiet evening walks through the countryside."
  },
  "solemn": {
    "word": "Solemn",
    "pos": "adjective",
    "simpleDefinition": "Formal, dignified, and serious; characterized by deep sincerity.",
    "synonyms": ["Serious", "Grave", "Somber", "Formal"],
    "antonyms": ["Cheerful", "Frivolous", "Lighthearted"],
    "example": "The crowd held a solemn minute of silence in memory of fallen heroes."
  },
  "solvent": {
    "word": "Solvent",
    "pos": "adjective",
    "simpleDefinition": "Having sufficient assets to pay all one's debts; financially sound.",
    "synonyms": ["Financially sound", "Creditworthy", "Stable"],
    "antonyms": ["Insolvent", "Bankrupt"],
    "example": "Prudent financial management kept the company solvent during the economic downturn."
  },
  "soothe": {
    "word": "Soothe",
    "pos": "verb",
    "simpleDefinition": "To gently calm someone, or relieve pain, irritation, or anxiety.",
    "synonyms": ["Calm", "Pacify", "Ease", "Alleviate"],
    "antonyms": ["Irritate", "Inflame", "Agitate"],
    "example": "A cup of warm chamomile tea helped soothe her sore throat and calm her nerves."
  },
  "sophisticated": {
    "word": "Sophisticated",
    "pos": "adjective",
    "simpleDefinition": "Having refined taste, worldly experience, or complex advanced design.",
    "synonyms": ["Refined", "Cultured", "Advanced", "Complex"],
    "antonyms": ["Unsophisticated", "Crude", "Naive"],
    "example": "Modern passenger jets are equipped with highly sophisticated autopilots."
  },
  "sparkle": {
    "word": "Sparkle",
    "pos": "verb",
    "simpleDefinition": "To shine brightly with flashes of light; glitter.",
    "synonyms": ["Glitter", "Twinkle", "Shimmer", "Flash"],
    "antonyms": ["Be dull", "Darken"],
    "example": "Clean glass windows sparkle in the early morning sunlight."
  },
  "splendid": {
    "word": "Splendid",
    "pos": "adjective",
    "simpleDefinition": "Magnificent, grand, very impressive, or excellent.",
    "synonyms": ["Magnificent", "Grand", "Superb", "Glorious"],
    "antonyms": ["Dismal", "Terrible", "Poor"],
    "example": "The mountain lodge offered a splendid view of the sun setting over the valley."
  },
  "spool": {
    "word": "Spool",
    "pos": "noun",
    "simpleDefinition": "A cylindrical device on which thread, wire, or film is wound.",
    "synonyms": ["Reel", "Bobbin", "Cylinder"],
    "antonyms": ["No common antonym"],
    "example": "The seamstress selected a spool of dark blue silk thread for the hem."
  },
  "spunky": {
    "word": "Spunky",
    "pos": "adjective",
    "simpleDefinition": "Courageous, lively, spirited, and determined.",
    "synonyms": ["Spirited", "Feisty", "Plucky", "Brave"],
    "antonyms": ["Timid", "Cowardly", "Spiritless"],
    "example": "The spunky young girl refused to let a broken wrist keep her off the playground."
  },
  "spurious": {
    "word": "Spurious",
    "pos": "adjective",
    "simpleDefinition": "False, bogus, or not genuine although claiming to be so.",
    "synonyms": ["Bogus", "Counterfeit", "Fake", "False"],
    "antonyms": ["Genuine", "Authentic", "Real"],
    "example": "The art historian proved the painting was a spurious copy of the original masterpiece."
  },
  "squalor": {
    "word": "Squalor",
    "pos": "noun",
    "simpleDefinition": "The state of being extremely dirty, foul, and unpleasant, usually from poverty.",
    "synonyms": ["Filth", "Dirtiness", "Wretchedness", "Misery"],
    "antonyms": ["Cleanliness", "Luxury", "Splendor"],
    "example": "Volunteers worked hard to clean up the neighborhood squalor and build fresh parks."
  },
  "square meal": {
    "word": "Square meal",
    "pos": "idiom",
    "simpleDefinition": "A substantial, satisfying, and balanced meal providing good nourishment.",
    "synonyms": ["Hearty meal", "Full meal", "Nourishing meal"],
    "antonyms": ["Snack", "Light bite"],
    "example": "After a grueling day of physical labor, the workers sat down to a hot square meal."
  },
  "stale": {
    "word": "Stale",
    "pos": "adjective",
    "simpleDefinition": "No longer fresh, pleasant, or tasty to eat; or dull and repetitive.",
    "synonyms": ["Dry", "Hardened", "Unfresh", "Trite"],
    "antonyms": ["Fresh", "Crisp", "Novel"],
    "example": "Leaving bread uncovered on the counter overnight will make it dry and stale."
  },
  "state of shock": {
    "word": "State of shock",
    "pos": "idiom",
    "simpleDefinition": "A state of severe emotional trauma, disbelief, or physical collapse following an event.",
    "synonyms": ["Traumatized", "Stunned", "Dazed"],
    "antonyms": ["Calm", "Composed"],
    "example": "Survivors of the severe earthquake remained in a state of shock for several days."
  },
  "stated": {
    "word": "Stated",
    "pos": "adjective",
    "simpleDefinition": "Clearly expressed, declared, or officially designated.",
    "synonyms": ["Declared", "Specified", "Expressed", "Explicit"],
    "antonyms": ["Unstated", "Implicit"],
    "example": "The construction was completed on schedule and within its stated budget."
  },
  "statesman": {
    "word": "Statesman",
    "pos": "noun",
    "simpleDefinition": "A skilled, respected, and experienced political leader devoted to the nation.",
    "synonyms": ["Diplomat", "Political leader", "Leader"],
    "antonyms": ["Demagogue"],
    "example": "The retired statesman mediated peace talks between the two neighboring countries."
  },
  "steal a march": {
    "word": "Steal a march",
    "pos": "idiom",
    "simpleDefinition": "To gain an unexpected advantage over a rival by acting before them.",
    "synonyms": ["Gain advantage", "Outmaneuver", "Pre-empt"],
    "antonyms": ["Fall behind"],
    "example": "By launching its mobile app early, the startup managed to steal a march on rivals."
  },
  "step on somebodys toes": {
    "word": "Step on somebodys toes",
    "pos": "idiom",
    "simpleDefinition": "To encroach upon or offend someone by interfering with their area of authority.",
    "synonyms": ["Offend", "Intrude", "Encroach", "Interfere"],
    "antonyms": ["Respect boundaries", "Cooperate"],
    "example": "Be mindful of office boundaries so you do not step on your supervisor's toes."
  },
  "stern": {
    "word": "Stern",
    "pos": "adjective",
    "simpleDefinition": "Serious, strict, and uncompromising in discipline or manner.",
    "synonyms": ["Strict", "Severe", "Harsh", "Austere"],
    "antonyms": ["Lenient", "Gentle", "Forgiving"],
    "example": "The principal gave a stern warning that bullying would lead to immediate suspension."
  },
  "stimulus": {
    "word": "Stimulus",
    "pos": "noun",
    "simpleDefinition": "Something that excites, provokes, or encourages action or growth.",
    "synonyms": ["Incentive", "Spur", "Catalyst", "Impetus"],
    "antonyms": ["Deterrent", "Obstacle"],
    "example": "Government tax cuts provided a much-needed stimulus to local manufacturing."
  },
  "stir": {
    "word": "Stir",
    "pos": "verb",
    "simpleDefinition": "To mix a liquid by moving an implement, or arouse an emotional reaction.",
    "synonyms": ["Mix", "Agitate", "Arouse", "Provoke"],
    "antonyms": ["Leave still", "Soothe"],
    "example": "Gently stir the soup with a wooden ladle until the seasoning dissolves."
  },
  "stout": {
    "word": "Stout",
    "pos": "adjective",
    "simpleDefinition": "Heavily built, strong, and thick, or brave and determined.",
    "synonyms": ["Sturdy", "Solid", "Brave", "Robust"],
    "antonyms": ["Slender", "Thin", "Frail"],
    "example": "He carried a stout oak staff as he hiked along the rugged mountain trails."
  },
  "stream": {
    "word": "Stream",
    "pos": "noun",
    "simpleDefinition": "A small narrow river, or a continuous flow of water or things.",
    "synonyms": ["Brook", "Creek", "Flow", "Current"],
    "antonyms": ["Trickle"],
    "example": "Clear cold water bubbled over the smooth stones of the forest stream."
  },
  "strict": {
    "word": "Strict",
    "pos": "adjective",
    "simpleDefinition": "Demanding that rules concerning discipline or behavior are obeyed exactly.",
    "synonyms": ["Rigorous", "Stringent", "Firm", "Severe"],
    "antonyms": ["Lenient", "Permissive", "Lax"],
    "example": "The university laboratory follows strict safety protocols for handling chemicals."
  },
  "strident": {
    "word": "Strident",
    "pos": "adjective",
    "simpleDefinition": "Loud and harsh; grating, or expressing viewpoints forcefully and aggressively.",
    "synonyms": ["Harsh", "Grating", "Raucous", "Shrill"],
    "antonyms": ["Soft", "Mild", "Pleasant"],
    "example": "The politician's strident voice echoed loudly across the echoing lecture hall."
  },
  "stubborn": {
    "word": "Stubborn",
    "pos": "adjective",
    "simpleDefinition": "Having or showing a determined refusal to change one's mind or position.",
    "synonyms": ["Obstinate", "Unyielding", "Headstrong", "Persistent"],
    "antonyms": ["Compliant", "Yielding", "Flexible"],
    "example": "He was too stubborn to ask for directions even when he knew he was lost."
  },
  "subordination": {
    "word": "Subordination",
    "pos": "noun",
    "simpleDefinition": "The act of ranking below or being under the authority and control of another.",
    "synonyms": ["Subjection", "Submission", "Compliance"],
    "antonyms": ["Autonomy", "Independence", "Dominance"],
    "example": "Military discipline requires the complete subordination of personal preferences to duty."
  },
  "subpoena": {
    "word": "Subpoena",
    "pos": "noun",
    "simpleDefinition": "A formal legal writ ordering a person to appear in court to give testimony.",
    "synonyms": ["Summons", "Court order", "Writ"],
    "antonyms": ["Dismissal"],
    "example": "The key witness received a subpoena ordering her to testify at the trial next Tuesday."
  },
  "subterfuge": {
    "word": "Subterfuge",
    "pos": "noun",
    "simpleDefinition": "Deceit used in order to achieve one's goal; clever trickery.",
    "synonyms": ["Deceit", "Trickery", "Guile", "Deception"],
    "antonyms": ["Honesty", "Openness", "Candor"],
    "example": "The spy obtained the classified documents through elaborate disguises and subterfuge."
  },
  "subtlety": {
    "word": "Subtlety",
    "pos": "noun",
    "simpleDefinition": "The quality of being subtle; delicate meaning, nuance, or refinement.",
    "synonyms": ["Delicacy", "Nuance", "Refinement", "Precision"],
    "antonyms": ["Obviousness", "Crudeness"],
    "example": "Appreciating classic literature requires an understanding of artistic subtlety and metaphor."
  },
  "subtraction": {
    "word": "Subtraction",
    "pos": "noun",
    "simpleDefinition": "The mathematical operation of taking one number or quantity away from another.",
    "synonyms": ["Deduction", "Removal", "Diminution"],
    "antonyms": ["Addition", "Summation"],
    "example": "Young students practice basic addition and subtraction with wooden counting blocks."
  },
  "subvert": {
    "word": "Subvert",
    "pos": "verb",
    "simpleDefinition": "To undermine the power, authority, or stability of an established system.",
    "synonyms": ["Undermine", "Destabilize", "Overthrow", "Sabotage"],
    "antonyms": ["Uphold", "Support", "Strengthen"],
    "example": "Corrupt officials attempted to subvert the election through bribery and vote-rigging."
  },
  "suffrage": {
    "word": "Suffrage",
    "pos": "noun",
    "simpleDefinition": "The legal right to vote in political elections.",
    "synonyms": ["Right to vote", "Franchise", "Voting rights"],
    "antonyms": ["Disenfranchisement"],
    "example": "Activists fought dedicated battles throughout the twentieth century to achieve universal suffrage."
  },
  "sullen": {
    "word": "Sullen",
    "pos": "adjective",
    "simpleDefinition": "Bad-tempered, gloomy, and sulky in silent resentment.",
    "synonyms": ["Sulky", "Gloomy", "Morose", "Resentful"],
    "antonyms": ["Cheerful", "Bright", "Sociable"],
    "example": "The reprimanded teenager sat in sullen silence, refusing to say a word."
  },
  "summons": {
    "word": "Summons",
    "pos": "noun",
    "simpleDefinition": "An official legal order to appear before a judge or magistrate.",
    "synonyms": ["Subpoena", "Citation", "Writ", "Court order"],
    "antonyms": ["Dismissal"],
    "example": "He received a court summons instructing him to appear as a juror next Monday."
  },
  "superannuate": {
    "word": "Superannuate",
    "pos": "verb",
    "simpleDefinition": "To retire someone with a pension, or discard something as too old or obsolete.",
    "synonyms": ["Pension off", "Retire", "Discard", "Phase out"],
    "antonyms": ["Employ", "Retain", "Reactivate"],
    "example": "The company decided to superannuate older machinery and install automated equipment."
  },
  "supercilious": {
    "word": "Supercilious",
    "pos": "adjective",
    "simpleDefinition": "Behaving or looking as though one thinks one is superior to others; arrogant.",
    "synonyms": ["Arrogant", "Haughty", "Condescending", "Disdainful"],
    "antonyms": ["Humble", "Modest", "Unassuming"],
    "example": "The clerk gave a supercilious smirk when the customer asked for a discount."
  },
  "superior": {
    "word": "Superior",
    "pos": "adjective",
    "simpleDefinition": "Higher in rank, status, quality, or excellence than others.",
    "synonyms": ["Better", "Higher", "Exceptional", "Premier"],
    "antonyms": ["Inferior", "Subordinate", "Poor"],
    "example": "Handcrafted leather shoes are clearly superior in durability to synthetic footwear."
  },
  "supplant": {
    "word": "Supplant",
    "pos": "verb",
    "simpleDefinition": "To supersede and replace someone or something, often through innovation or force.",
    "synonyms": ["Replace", "Supersede", "Oust", "Displace"],
    "antonyms": ["Retain", "Keep", "Maintain"],
    "example": "Modern smartphones have largely supplanted portable music players and calculators."
  },
  "surreal": {
    "word": "Surreal",
    "pos": "adjective",
    "simpleDefinition": "Having a bizarre, dreamlike, or unreal quality; strange.",
    "synonyms": ["Bizarre", "Dreamlike", "Otherworldly", "Unreal"],
    "antonyms": ["Realistic", "Conventional", "Normal"],
    "example": "Walking through the completely empty airport at midnight felt quiet and surreal."
  },
  "susceptible": {
    "word": "Susceptible",
    "pos": "adjective",
    "simpleDefinition": "Likely or liable to be influenced, harmed, or affected by a particular thing.",
    "synonyms": ["Vulnerable", "Prone", "Liable", "Sensitive"],
    "antonyms": ["Resistant", "Immune", "Protected"],
    "example": "Young seedlings are especially susceptible to frost damage during chilly spring nights."
  },
  "suspect": {
    "word": "Suspect",
    "pos": "noun",
    "simpleDefinition": "A person thought to be guilty of a crime or offense under investigation.",
    "synonyms": ["Accused", "Defendant", "Person of interest"],
    "antonyms": ["Victim", "Innocent person"],
    "example": "Police questioned the suspect about his whereabouts at the time of the burglary."
  },
  "swindle": {
    "word": "Swindle",
    "pos": "verb",
    "simpleDefinition": "To cheat or defraud someone out of money or possessions using deception.",
    "synonyms": ["Cheat", "Defraud", "Con", "Fleece"],
    "antonyms": ["Treat honestly", "Compensate"],
    "example": "The con artist attempted to swindle unsuspecting tourists with counterfeit jewelry."
  },
  "swollen": {
    "word": "Swollen",
    "pos": "adjective",
    "simpleDefinition": "Enlarged or puffed up, typically from injury, inflammation, or fluid buildup.",
    "synonyms": ["Distended", "Puffy", "Enlarged", "Bloated"],
    "antonyms": ["Shrunken", "Deflated", "Normal"],
    "example": "Her ankle became painfully swollen after she twisted it during the soccer match."
  },
  "sycophancy": {
    "word": "Sycophancy",
    "pos": "noun",
    "simpleDefinition": "Obsequious, flattering behavior toward someone important in order to gain advantage.",
    "synonyms": ["Flattery", "Servility", "Brown-nosing", "Fawning"],
    "antonyms": ["Honesty", "Sincerity", "Frankness"],
    "example": "The vain executive was surrounded by sycophancy that concealed real corporate problems."
  },
  "synopsis": {
    "word": "Synopsis",
    "pos": "noun",
    "simpleDefinition": "A brief summary or general overview of a book, play, or other work.",
    "synonyms": ["Summary", "Outline", "Abstract", "Recap"],
    "antonyms": ["Full text", "Expansion"],
    "example": "The author submitted a two-page synopsis along with the first chapter of her manuscript."
  }
}

if __name__ == '__main__':
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
    
    added = 0
    for k, v in BATCH6_DATA.items():
        cache[k.lower()] = v
        added += 1
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)
    
    print(f"Added {added} curated entries for 'S' to cache. Total cache size: {len(cache)}")
