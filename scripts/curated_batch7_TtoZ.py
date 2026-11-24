import os
import json

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

BATCH7_DATA = {
  "taciturn": {
    "word": "Taciturn",
    "pos": "adjective",
    "simpleDefinition": "Reserved, uncommunicative, and saying very little by nature.",
    "synonyms": ["Untalkative", "Reserved", "Silent", "Reticent"],
    "antonyms": ["Talkative", "Loquacious", "Voluble"],
    "example": "The taciturn old farmer rarely spoke more than a few words at breakfast."
  },
  "tantamount": {
    "word": "Tantamount",
    "pos": "adjective",
    "simpleDefinition": "Equivalent in seriousness, effect, or value to something.",
    "synonyms": ["Equivalent to", "Equal to", "As good as", "Identical to"],
    "antonyms": ["Different from", "Opposite"],
    "example": "Refusing to testify was considered tantamount to an admission of guilt."
  },
  "taunting": {
    "word": "Taunting",
    "pos": "verb",
    "simpleDefinition": "Provoking or challenging someone with insulting or contemptuous remarks.",
    "synonyms": ["Teasing", "Mocker", "Jeering", "Goading"],
    "antonyms": ["Complimenting", "Praising", "Encouraging"],
    "example": "The bully was caught taunting younger students on the playground."
  },
  "telepathy": {
    "word": "Telepathy",
    "pos": "noun",
    "simpleDefinition": "The supposed communication of thoughts or ideas by means other than the known senses.",
    "synonyms": ["Mind-reading", "Thought transference", "ESP"],
    "antonyms": ["Sensory communication"],
    "example": "Science fiction novels often portray alien species communicating through silent telepathy."
  },
  "teller": {
    "word": "Teller",
    "pos": "noun",
    "simpleDefinition": "A bank employee whose job is to pay out and take in money at the counter.",
    "synonyms": ["Bank clerk", "Cashier", "Bank teller"],
    "antonyms": ["Customer"],
    "example": "The bank teller counted the cash carefully before handing over the receipt."
  },
  "tenacity": {
    "word": "Tenacity",
    "pos": "noun",
    "simpleDefinition": "The quality or fact of being determined, persistent, and holding firmly to a goal.",
    "synonyms": ["Persistence", "Determination", "Perseverance", "Doggedness"],
    "antonyms": ["Hesitation", "Weakness", "Irresolution"],
    "example": "Her tenacity helped her overcome severe illness and graduate with highest honors."
  },
  "tenant": {
    "word": "Tenant",
    "pos": "noun",
    "simpleDefinition": "A person who occupies land or property rented from a landlord.",
    "synonyms": ["Renter", "Occupant", "Resident", "Leaseholder"],
    "antonyms": ["Landlord", "Owner"],
    "example": "The tenant paid his monthly rent on the first day of every month."
  },
  "tender": {
    "word": "Tender",
    "pos": "adjective",
    "simpleDefinition": "Showing gentleness, kindness, and affection, or easy to cut and chew.",
    "synonyms": ["Gentle", "Caring", "Soft", "Affectionate"],
    "antonyms": ["Tough", "Harsh", "Callous"],
    "example": "The nurse dressed the child's wound with tender care and soothing words."
  },
  "tentative": {
    "word": "Tentative",
    "pos": "adjective",
    "simpleDefinition": "Not certain or fixed; provisional, or done with hesitation.",
    "synonyms": ["Provisional", "Unconfirmed", "Hesitant", "Cautious"],
    "antonyms": ["Definite", "Certain", "Confident"],
    "example": "We made a tentative agreement to meet for coffee next Thursday afternoon."
  },
  "tenterhooks": {
    "word": "Tenterhooks",
    "pos": "idiom",
    "simpleDefinition": "In a state of painful suspense, acute tension, or anxiety.",
    "synonyms": ["On pins and needles", "In suspense", "Anxious", "Edgy"],
    "antonyms": ["Calm", "Relaxed", "At ease"],
    "example": "The candidate was on tenterhooks all evening waiting for election results."
  },
  "tenure": {
    "word": "Tenure",
    "pos": "noun",
    "simpleDefinition": "The conditions under which land or buildings are held, or permanent employment status.",
    "synonyms": ["Term", "Occupancy", "Incumbency", "Permanent status"],
    "antonyms": ["Temporary status", "Probation"],
    "example": "After seven years of successful research, the university granted him academic tenure."
  },
  "tepid": {
    "word": "Tepid",
    "pos": "adjective",
    "simpleDefinition": "Only slightly warm; lukewarm, or showing little enthusiasm.",
    "synonyms": ["Lukewarm", "Warmish", "Halfhearted", "Unenthusiastic"],
    "antonyms": ["Hot", "Boiling", "Enthusiastic"],
    "example": "The new comedy film received only tepid applause from the opening night audience."
  },
  "thankless": {
    "word": "Thankless",
    "pos": "adjective",
    "simpleDefinition": "Difficult or unpleasant and unlikely to result in thanks or reward.",
    "synonyms": ["Unappreciated", "Ungrateful", "Unrewarding"],
    "antonyms": ["Rewarding", "Appreciated"],
    "example": "Cleaning up after the messy outdoor festival was a difficult and thankless job."
  },
  "theist": {
    "word": "Theist",
    "pos": "noun",
    "simpleDefinition": "A person who believes in the existence of a God or gods.",
    "synonyms": ["Believer", "Religious person"],
    "antonyms": ["Atheist", "Agnostic"],
    "example": "As a devoted theist, he found meaning and comfort in daily prayer."
  },
  "theologist": {
    "word": "Theologist",
    "pos": "noun",
    "simpleDefinition": "A person who studies religion, religious beliefs, and the divine.",
    "synonyms": ["Theologian", "Religious scholar", "Divine"],
    "antonyms": ["Secularist"],
    "example": "The theologist gave a fascinating lecture comparing ancient scriptures."
  },
  "thorough": {
    "word": "Thorough",
    "pos": "adjective",
    "simpleDefinition": "Complete with regard to every detail; meticulously rigorous.",
    "synonyms": ["Meticulous", "Comprehensive", "Detailed", "Exhaustive"],
    "antonyms": ["Superficial", "Cursory", "Incomplete"],
    "example": "The mechanics performed a thorough inspection of the aircraft before takeoff."
  },
  "thread": {
    "word": "Thread",
    "pos": "noun",
    "simpleDefinition": "A long, thin strand of cotton, nylon, or other fibers used in sewing.",
    "synonyms": ["Yarn", "Fiber", "Strand", "Filament"],
    "antonyms": ["No common antonym"],
    "example": "She carefully guided the black thread through the eye of the sewing needle."
  },
  "thrifty": {
    "word": "Thrifty",
    "pos": "adjective",
    "simpleDefinition": "Using money and other resources carefully and not wastefully; economical.",
    "synonyms": ["Frugal", "Economical", "Prudent", "Sparingly"],
    "antonyms": ["Wasteful", "Extravagant", "Prodigal"],
    "example": "Her thrifty shopping habits enabled the family to save money for a home."
  },
  "tiny in size": {
    "word": "Tiny in size",
    "pos": "idiom",
    "simpleDefinition": "Extremely small in physical dimensions or magnitude.",
    "synonyms": ["Miniature", "Minuscule", "Diminutive", "Microscopic"],
    "antonyms": ["Enormous", "Gigantic", "Huge"],
    "example": "The electronic microchip was tiny in size but packed immense computing power."
  },
  "tipped": {
    "word": "Tipped",
    "pos": "verb",
    "simpleDefinition": "Gave a sum of money to someone for service, or overturned or tilted.",
    "synonyms": ["Rewarded", "Compensated", "Tilted", "Overturned"],
    "antonyms": ["Underpaid", "Straightened"],
    "example": "He tipped the polite restaurant waiter generously for exceptional service."
  },
  "tirade": {
    "word": "Tirade",
    "pos": "noun",
    "simpleDefinition": "A long, angry speech of criticism, reprimand, or accusation.",
    "synonyms": ["Diatribe", "Rant", "Harangue", "Outburst"],
    "antonyms": ["Praise", "Compliment", "Eulogy"],
    "example": "The coach launched into an angry tirade after the team made sloppy defensive errors."
  },
  "titanic": {
    "word": "Titanic",
    "pos": "adjective",
    "simpleDefinition": "Of exceptional strength, size, power, or influence; colossal.",
    "synonyms": ["Colossal", "Gigantic", "Mammoth", "Immense"],
    "antonyms": ["Tiny", "Minuscule", "Insignificant"],
    "example": "The two rival football clubs fought a titanic struggle for the championship cup."
  },
  "to blow hot and cold": {
    "word": "To blow hot and cold",
    "pos": "idiom",
    "simpleDefinition": "To alternate between enthusiasm and indifference; be vacillating.",
    "synonyms": ["Vacillate", "Waver", "Hedge", "Hesitate"],
    "antonyms": ["Be consistent", "Remain steadfast"],
    "example": "The client keeps blowing hot and cold on whether to sign the software contract."
  },
  "to do away with": {
    "word": "To do away with",
    "pos": "idiom",
    "simpleDefinition": "To abolish, discard, eliminate, or stop using something.",
    "synonyms": ["Abolish", "Eliminate", "Discard", "Scrap"],
    "antonyms": ["Establish", "Retain", "Keep"],
    "example": "The city voted to do away with outdated paper parking tickets."
  },
  "to drive off": {
    "word": "To drive off",
    "pos": "idiom",
    "simpleDefinition": "To force someone or something to leave or retreat, or depart in a car.",
    "synonyms": ["Repel", "Repulse", "Chase away", "Fend off"],
    "antonyms": ["Attract", "Welcome"],
    "example": "The brave guard dog barked loudly to drive off the wild coyotes."
  },
  "tomb": {
    "word": "Tomb",
    "pos": "noun",
    "simpleDefinition": "A large vault or chamber, typically underground, for burying the dead.",
    "synonyms": ["Grave", "Vault", "Mausoleum", "Crypt"],
    "antonyms": ["Cradle"],
    "example": "Archaeologists carefully uncovered the ancient pharaoh's gilded tomb in Egypt."
  },
  "toot your own horn": {
    "word": "Toot your own horn",
    "pos": "idiom",
    "simpleDefinition": "To talk boastfully about one's own achievements or skills.",
    "synonyms": ["Boast", "Brag", "Blow your own trumpet"],
    "antonyms": ["Be modest", "Understate"],
    "example": "I hate to toot my own horn, but I was the one who solved that complex problem."
  },
  "toppling": {
    "word": "Toppling",
    "pos": "verb",
    "simpleDefinition": "Overbalancing or causing something to fall over; overthrowing.",
    "synonyms": ["Falling", "Tumbling", "Overturning", "Overthrowing"],
    "antonyms": ["Stabilizing", "Erecting"],
    "example": "Strong coastal winds were responsible for toppling the old oak tree."
  },
  "torpor": {
    "word": "Torpor",
    "pos": "noun",
    "simpleDefinition": "A state of physical or mental inactivity, lethargy, or sluggishness.",
    "synonyms": ["Lethargy", "Sluggishness", "Inertia", "Apathy"],
    "antonyms": ["Vigor", "Energy", "Vitality"],
    "example": "The oppressive tropical heat plunged the entire village into an afternoon torpor."
  },
  "tough": {
    "word": "Tough",
    "pos": "adjective",
    "simpleDefinition": "Strong enough to withstand adverse conditions or rough handling; difficult.",
    "synonyms": ["Durable", "Strong", "Difficult", "Resilient"],
    "antonyms": ["Fragile", "Delicate", "Easy"],
    "example": "Hiking through the dense snowy mountains was a tough physical test."
  },
  "towered high": {
    "word": "Towered high",
    "pos": "idiom",
    "simpleDefinition": "Rose or stood to an impressive, extraordinary height.",
    "synonyms": ["Soared", "Loomed", "Rose majestically"],
    "antonyms": ["Sank low", "Crouched"],
    "example": "The snow-capped peaks of the Himalayas towered high above the clouds."
  },
  "tract": {
    "word": "Tract",
    "pos": "noun",
    "simpleDefinition": "An area of land, or a major passage in the body, or a short written pamphlet.",
    "synonyms": ["Area", "Expanse", "Plot", "Pamphlet"],
    "antonyms": ["No common antonym"],
    "example": "The nature reserve covers a vast tract of pristine pine forest."
  },
  "traduce": {
    "word": "Traduce",
    "pos": "verb",
    "simpleDefinition": "To speak badly of or tell lies about someone so as to damage their reputation.",
    "synonyms": ["Defame", "Slander", "Malign", "Vilify"],
    "antonyms": ["Praise", "Compliment", "Laud"],
    "example": "The rival candidate attempted to traduce her good character through slanderous ads."
  },
  "traitor": {
    "word": "Traitor",
    "pos": "noun",
    "simpleDefinition": "A person who betrays a friend, country, or principle.",
    "synonyms": ["Betrayer", "Turncoat", "Defector", "Judas"],
    "antonyms": ["Loyalist", "Patriot"],
    "example": "The military spy was court-martialed and condemned as a traitor to his nation."
  },
  "transient": {
    "word": "Transient",
    "pos": "adjective",
    "simpleDefinition": "Lasting only for a short time; impermanent and fleeting.",
    "synonyms": ["Fleeting", "Temporary", "Short-lived", "Ephemeral"],
    "antonyms": ["Permanent", "Enduring", "Lasting"],
    "example": "Youth and spring blossoms are beautiful but transient stages of life."
  },
  "transmission": {
    "word": "Transmission",
    "pos": "noun",
    "simpleDefinition": "The action of broadcasting or sending something, or the passing on of disease.",
    "synonyms": ["Broadcasting", "Transfer", "Spread", "Conveyance"],
    "antonyms": ["Reception", "Containment"],
    "example": "Wearing masks helped prevent the airborne transmission of the seasonal flu."
  },
  "transmit": {
    "word": "Transmit",
    "pos": "verb",
    "simpleDefinition": "To cause something to pass on from one place or person to another.",
    "synonyms": ["Convey", "Transfer", "Send", "Broadcast"],
    "antonyms": ["Receive", "Block", "Hold"],
    "example": "Radio antennas transmit communication signals across thousands of miles."
  },
  "trapped": {
    "word": "Trapped",
    "pos": "adjective",
    "simpleDefinition": "Caught in a trap or difficult situation from which escape is hard.",
    "synonyms": ["Ensnared", "Cornered", "Confined", "Imprisoned"],
    "antonyms": ["Free", "Liberated", "Unconfined"],
    "example": "Firefighters used heavy ladders to rescue the families trapped on the third floor."
  },
  "treatise": {
    "word": "Treatise",
    "pos": "noun",
    "simpleDefinition": "A written work dealing formally and systematically with a subject.",
    "synonyms": ["Dissertation", "Essay", "Thesis", "Monograph"],
    "antonyms": ["Casual note"],
    "example": "The philosopher published a celebrated treatise on human ethics and political liberty."
  },
  "trespass": {
    "word": "Trespass",
    "pos": "verb",
    "simpleDefinition": "To enter someone's land or property without permission.",
    "synonyms": ["Encroach", "Intrude", "Infringe", "Invade"],
    "antonyms": ["Stay clear", "Respect property"],
    "example": "Signs were posted along the boundary warning hikers not to trespass on private grounds."
  },
  "trial": {
    "word": "Trial",
    "pos": "noun",
    "simpleDefinition": "A formal examination of evidence in court, or a test of performance or hardship.",
    "synonyms": ["Court case", "Hearing", "Test", "Ordeal"],
    "antonyms": ["Acquittal"],
    "example": "The high-profile murder trial lasted four weeks before the jury reached a verdict."
  },
  "trick": {
    "word": "Trick",
    "pos": "noun",
    "simpleDefinition": "A cunning or skillful act or scheme intended to deceive or entertain.",
    "synonyms": ["Prank", "Illusion", "Ruse", "Deception"],
    "antonyms": ["Honest action"],
    "example": "The clever magician performed an astonishing card trick right in front of our eyes."
  },
  "trickery": {
    "word": "Trickery",
    "pos": "noun",
    "simpleDefinition": "The practice of deception, fraud, or cunning tricks.",
    "synonyms": ["Deception", "Fraud", "Guile", "Subterfuge"],
    "antonyms": ["Honesty", "Candor", "Fairness"],
    "example": "The fraudster used clever trickery to persuade the victim to hand over her savings."
  },
  "triumph": {
    "word": "Triumph",
    "pos": "noun",
    "simpleDefinition": "A great victory, achievement, or success.",
    "synonyms": ["Victory", "Success", "Achievement", "Conquest"],
    "antonyms": ["Defeat", "Failure", "Loss"],
    "example": "Winning the championship tournament was the crowning triumph of her tennis career."
  },
  "troops": {
    "word": "Troops",
    "pos": "noun",
    "simpleDefinition": "Soldiers or armed forces grouped for military service.",
    "synonyms": ["Soldiers", "Armed forces", "Forces", "Army"],
    "antonyms": ["Civilians"],
    "example": "Peacekeeping troops were deployed to maintain calm in the border region."
  },
  "truant": {
    "word": "Truant",
    "pos": "noun",
    "simpleDefinition": "A student who stays away from school without leave or explanation.",
    "synonyms": ["Absentee", "Runaway", "Shirker"],
    "antonyms": ["Regular attendee"],
    "example": "The truant officer returned the wandering boys to school before noon."
  },
  "trustworthy": {
    "word": "Trustworthy",
    "pos": "adjective",
    "simpleDefinition": "Able to be relied on as honest, dependable, or truthful.",
    "synonyms": ["Reliable", "Dependable", "Honest", "Faithful"],
    "antonyms": ["Untrustworthy", "Treacherous", "Dishonest"],
    "example": "He has proven himself to be a completely trustworthy and diligent business partner."
  },
  "turbid": {
    "word": "Turbid",
    "pos": "adjective",
    "simpleDefinition": "Cloudy, opaque, or thick with suspended matter (of a liquid); or confused.",
    "synonyms": ["Muddy", "Cloudy", "Murky", "Opaque"],
    "antonyms": ["Clear", "Lucid", "Transparent"],
    "example": "Heavy torrential rains turned the mountain river turbid and brown."
  },
  "ulterior": {
    "word": "Ulterior",
    "pos": "adjective",
    "simpleDefinition": "Existing beyond what is obvious or admitted; intentionally concealed.",
    "synonyms": ["Hidden", "Concealed", "Undisclosed", "Secret"],
    "antonyms": ["Overt", "Open", "Frank"],
    "example": "She suspected that his unexpected generosity masked an ulterior selfish motive."
  },
  "uncover": {
    "word": "Uncover",
    "pos": "verb",
    "simpleDefinition": "To remove a cover or covering, or discover previously hidden facts.",
    "synonyms": ["Expose", "Reveal", "Discover", "Disclose"],
    "antonyms": ["Cover", "Conceal", "Hide"],
    "example": "Investigative reporters worked for months to uncover the truth behind the financial fraud."
  },
  "understatement": {
    "word": "Understatement",
    "pos": "noun",
    "simpleDefinition": "The presentation of something as being smaller, worse, or less important than it actually is.",
    "synonyms": ["Minimization", "Trivialization", "Softening"],
    "antonyms": ["Exaggeration", "Hyperbole", "Overstatement"],
    "example": "Calling a category-five hurricane 'a bit of windy weather' is a massive understatement."
  },
  "undertake": {
    "word": "Undertake",
    "pos": "verb",
    "simpleDefinition": "To commit oneself to and begin an enterprise or responsibility.",
    "synonyms": ["Embark on", "Begin", "Assume", "Attempt"],
    "antonyms": ["Abandon", "Neglect", "Forgo"],
    "example": "The engineers agreed to undertake the repair of the ancient railway bridge."
  },
  "unearth": {
    "word": "Unearth",
    "pos": "verb",
    "simpleDefinition": "To dig up something from the ground, or discover information after searching.",
    "synonyms": ["Dig up", "Excavate", "Discover", "Uncover"],
    "antonyms": ["Bury", "Conceal", "Hide"],
    "example": "Archaeologists managed to unearth golden artifacts buried for thousands of years."
  },
  "unequivocal": {
    "word": "Unequivocal",
    "pos": "adjective",
    "simpleDefinition": "Leaving no doubt; completely clear, explicit, and unambiguous.",
    "synonyms": ["Unambiguous", "Clear", "Definite", "Unmistakable"],
    "antonyms": ["Equivocal", "Ambiguous", "Vague"],
    "example": "The board gave its unequivocal support to the director's strategic vision."
  },
  "unfathomable": {
    "word": "Unfathomable",
    "pos": "adjective",
    "simpleDefinition": "Incapable of being fully explored, understood, or measured.",
    "synonyms": ["Incomprehensible", "Baffling", "Immeasurable", "Mysterious"],
    "antonyms": ["Fathomable", "Comprehensible", "Clear"],
    "example": "The motives behind the criminal's bizarre actions remained completely unfathomable."
  },
  "unforeseen": {
    "word": "Unforeseen",
    "pos": "adjective",
    "simpleDefinition": "Not anticipated or predicted; unexpected.",
    "synonyms": ["Unexpected", "Unanticipated", "Unpredicted", "Accidental"],
    "antonyms": ["Expected", "Foreseen", "Anticipated"],
    "example": "Due to unforeseen weather delays, the afternoon flight was postponed until morning."
  },
  "uniform": {
    "word": "Uniform",
    "pos": "adjective",
    "simpleDefinition": "Remaining the same in all cases and at all times; consistent and unchanging.",
    "synonyms": ["Consistent", "Even", "Regular", "Unvarying"],
    "antonyms": ["Varied", "Irregular", "Inconsistent"],
    "example": "The factory machines produced metal rods of strictly uniform thickness."
  },
  "unimaginable": {
    "word": "Unimaginable",
    "pos": "adjective",
    "simpleDefinition": "Difficult or impossible to imagine or comprehend; beyond belief.",
    "synonyms": ["Inconceivable", "Unthinkable", "Incredible", "Mind-boggling"],
    "antonyms": ["Imaginable", "Conceivable", "Believable"],
    "example": "The earthquake caused an almost unimaginable amount of structural damage to the city."
  },
  "uninfluenced": {
    "word": "Uninfluenced",
    "pos": "adjective",
    "simpleDefinition": "Not affected, altered, or swayed by external pressure or bias.",
    "synonyms": ["Objective", "Impartial", "Neutral", "Unbiased"],
    "antonyms": ["Influenced", "Biased", "Swayed"],
    "example": "A judge must remain completely uninfluenced by media gossip or political pressure."
  },
  "unintended": {
    "word": "Unintended",
    "pos": "adjective",
    "simpleDefinition": "Not planned or meant to happen; accidental.",
    "synonyms": ["Accidental", "Inadvertent", "Unintentional", "Unplanned"],
    "antonyms": ["Intentional", "Deliberate", "Planned"],
    "example": "The new zoning regulation had the unintended consequence of raising house rents."
  },
  "unruly": {
    "word": "Unruly",
    "pos": "adjective",
    "simpleDefinition": "Disorderly, disruptive, and not amenable to discipline or control.",
    "synonyms": ["Disorderly", "Rowdy", "Wild", "Unmanageable"],
    "antonyms": ["Disciplined", "Orderly", "Obedient"],
    "example": "The teacher struggled to quiet down the noisy and unruly classroom."
  },
  "unstable": {
    "word": "Unstable",
    "pos": "adjective",
    "simpleDefinition": "Prone to change, fail, or sway; not firmly established or balanced.",
    "synonyms": ["Precarious", "Insecure", "Volatile", "Wobbly"],
    "antonyms": ["Stable", "Secure", "Steady"],
    "example": "Do not climb onto that wobbly stool because it is dangerously unstable."
  },
  "untamed": {
    "word": "Untamed",
    "pos": "adjective",
    "simpleDefinition": "Not domesticated, trained, or controlled; wild and natural.",
    "synonyms": ["Wild", "Feral", "Savage", "Undomesticated"],
    "antonyms": ["Tamed", "Domesticated", "Gentle"],
    "example": "The vast national park preserves miles of raw, untamed wilderness."
  },
  "untenable": {
    "word": "Untenable",
    "pos": "adjective",
    "simpleDefinition": "Not able to be maintained or defended against attack or objection.",
    "synonyms": ["Indefensible", "Insupportable", "Unjustifiable", "Flawed"],
    "antonyms": ["Tenable", "Defensible", "Sound"],
    "example": "After new facts emerged, the politician's original argument became completely untenable."
  },
  "unwitting": {
    "word": "Unwitting",
    "pos": "adjective",
    "simpleDefinition": "Not done on purpose; unintentional, or not aware of the full facts.",
    "synonyms": ["Inadvertent", "Unaware", "Unconscious", "Unintentional"],
    "antonyms": ["Conscious", "Deliberate", "Knowing"],
    "example": "He became the unwitting accomplice in a scam when he forwarded a spoofed link."
  },
  "upheld": {
    "word": "Upheld",
    "pos": "verb",
    "simpleDefinition": "Maintained, supported, or confirmed a decision, custom, or principle.",
    "synonyms": ["Supported", "Confirmed", "Sustained", "Endorsed"],
    "antonyms": ["Overturned", "Rejected", "Overruled"],
    "example": "The supreme court upheld the lower court's ruling regarding environmental protection."
  },
  "urban": {
    "word": "Urban",
    "pos": "adjective",
    "simpleDefinition": "In, relating to, or characteristic of a town or city.",
    "synonyms": ["City", "Metropolitan", "Civic", "Town"],
    "antonyms": ["Rural", "Pastoral", "Rustic"],
    "example": "Many young professionals move to major urban centers in search of exciting career options."
  },
  "urgency": {
    "word": "Urgency",
    "pos": "noun",
    "simpleDefinition": "Importance requiring swift, immediate action or attention.",
    "synonyms": ["Promptness", "Importance", "Necessity", "Imperativeness"],
    "antonyms": ["Laxity", "Delay"],
    "example": "The doctor stressed the urgency of taking the medication right away."
  },
  "usurp": {
    "word": "Usurp",
    "pos": "verb",
    "simpleDefinition": "To take a position of power, throne, or authority illegally or by force.",
    "synonyms": ["Seize", "Take over", "Arrogate", "Appropriate"],
    "antonyms": ["Relinquish", "Surrender", "Abdicate"],
    "example": "The ruthless general led a military coup to usurp the presidency from the civilian leader."
  },
  "utopia": {
    "word": "Utopia",
    "pos": "noun",
    "simpleDefinition": "An imagined community or society that possesses highly desirable or nearly perfect qualities.",
    "synonyms": ["Paradise", "Idyll", "Ideal society", "Shangri-La"],
    "antonyms": ["Dystopia"],
    "example": "The novelist depicted a future utopia where poverty, disease, and war had been eradicated."
  },
  "vacillate": {
    "word": "Vacillate",
    "pos": "verb",
    "simpleDefinition": "To alternate or waver between different opinions or actions; be indecisive.",
    "synonyms": ["Waver", "Hesitate", "Fluctuate", "Oscillate"],
    "antonyms": ["Decide", "Resolve", "Remain firm"],
    "example": "He continued to vacillate between studying law or pursuing a career in computer science."
  },
  "vague": {
    "word": "Vague",
    "pos": "adjective",
    "simpleDefinition": "Thinking or communicating in an unfocused, imprecise, or indefinite way.",
    "synonyms": ["Unclear", "Indistinct", "Imprecise", "Ambiguous"],
    "antonyms": ["Clear", "Precise", "Explicit"],
    "example": "His vague directions caused us to take two wrong turns on the way to the cabin."
  },
  "valiant": {
    "word": "Valiant",
    "pos": "adjective",
    "simpleDefinition": "Possessing or showing great courage, bravery, or determination.",
    "synonyms": ["Brave", "Courageous", "Valorous", "Heroic"],
    "antonyms": ["Cowardly", "Timid", "Fearful"],
    "example": "The valiant firefighters rushed into the burning building to rescue the trapped family."
  },
  "valley": {
    "word": "Valley",
    "pos": "noun",
    "simpleDefinition": "A low area of land between hills or mountains, typically with a river flowing through it.",
    "synonyms": ["Vale", "Dale", "Gorge", "Hollow"],
    "antonyms": ["Mountain", "Peak", "Ridge"],
    "example": "The lush green valley was dotted with charming farmhouses and grazing cattle."
  },
  "valorous": {
    "word": "Valorous",
    "pos": "adjective",
    "simpleDefinition": "Showing great courage in the face of danger, especially in battle.",
    "synonyms": ["Brave", "Courageous", "Valiant", "Heroic"],
    "antonyms": ["Cowardly", "Timid", "Pusillanimous"],
    "example": "The knight received a royal medal for his valorous defense of the castle gates."
  },
  "vehemently": {
    "word": "Vehemently",
    "pos": "adverb",
    "simpleDefinition": "In a forceful, passionate, or intense manner; with great feeling.",
    "synonyms": ["Passionately", "Forcefully", "Fervently", "Vigorously"],
    "antonyms": ["Mildly", "Gently", "Apathetically"],
    "example": "The accused suspect vehemently denied having any involvement in the bank burglary."
  },
  "velocity": {
    "word": "Velocity",
    "pos": "noun",
    "simpleDefinition": "The speed of something in a given direction.",
    "synonyms": ["Speed", "Pace", "Swiftness", "Rapidity"],
    "antonyms": ["Slowness", "Inertia"],
    "example": "The space rocket accelerated to orbital velocity within just a few minutes of launch."
  },
  "vendor": {
    "word": "Vendor",
    "pos": "noun",
    "simpleDefinition": "A person or company offering something for sale, especially in the street.",
    "synonyms": ["Seller", "Merchant", "Dealer", "Trader"],
    "antonyms": ["Buyer", "Customer"],
    "example": "A street vendor was roasting sweet corn over charcoal on the busy sidewalk."
  },
  "venerate": {
    "word": "Venerate",
    "pos": "verb",
    "simpleDefinition": "To regard with great respect, admiration, or deep reverence.",
    "synonyms": ["Revere", "Worship", "Honor", "Respect"],
    "antonyms": ["Despise", "Disdain", "Scorn"],
    "example": "Traditional cultures venerate elders for their lifelong wisdom and guidance."
  },
  "venture": {
    "word": "Venture",
    "pos": "noun",
    "simpleDefinition": "A risky or daring journey, or an undertaking involving financial uncertainty.",
    "synonyms": ["Enterprise", "Undertaking", "Project", "Gamble"],
    "antonyms": ["Certainty", "Safe bet"],
    "example": "Investing in the new tech startup was a daring venture that ultimately paid off."
  },
  "venturesome": {
    "word": "Venturesome",
    "pos": "adjective",
    "simpleDefinition": "Willing to take risks or embark on difficult adventures; daring.",
    "synonyms": ["Daring", "Adventurous", "Bold", "Audacious"],
    "antonyms": ["Cautious", "Timid", "Careful"],
    "example": "The venturesome explorer traveled deep into uncharted Amazon rainforests."
  },
  "versatility": {
    "word": "Versatility",
    "pos": "noun",
    "simpleDefinition": "Ability to adapt or be adapted to many different functions or activities.",
    "synonyms": ["Adaptability", "Flexibility", "Resourcefulness", "Multi-skilled"],
    "antonyms": ["Inflexibility", "Rigidity"],
    "example": "Her versatility as an actress allowed her to play comedic and dramatic roles with equal skill."
  },
  "vicious": {
    "word": "Vicious",
    "pos": "adjective",
    "simpleDefinition": "Deliberately cruel, violent, or malicious; savage.",
    "synonyms": ["Cruel", "Malicious", "Savage", "Fierce"],
    "antonyms": ["Gentle", "Kind", "Benevolent"],
    "example": "The hikers backed away slowly when they encountered a vicious guard dog."
  },
  "vigor": {
    "word": "Vigor",
    "pos": "noun",
    "simpleDefinition": "Physical strength, good health, and energetic effort.",
    "synonyms": ["Energy", "Vitality", "Strength", "Dynamism"],
    "antonyms": ["Lethargy", "Weakness", "Fragility"],
    "example": "Despite his advanced age, the gardener worked with remarkable vigor and cheerfulness."
  },
  "vigorous": {
    "word": "Vigorous",
    "pos": "adjective",
    "simpleDefinition": "Strong, healthy, and full of energy, or characterized by force and effort.",
    "synonyms": ["Energetic", "Robust", "Dynamic", "Spirited"],
    "antonyms": ["Frail", "Feeble", "Lethargic"],
    "example": "Doctors recommend thirty minutes of vigorous physical exercise every day."
  },
  "visible": {
    "word": "Visible",
    "pos": "adjective",
    "simpleDefinition": "Able to be seen or noticed; apparent and obvious.",
    "synonyms": ["Perceptible", "Noticeable", "Apparent", "Clear"],
    "antonyms": ["Invisible", "Hidden", "Unseen"],
    "example": "The snowy mountaintops were clearly visible from our hotel balcony."
  },
  "visionary": {
    "word": "Visionary",
    "pos": "noun",
    "simpleDefinition": "A person with original ideas about what the future will or could be like.",
    "synonyms": ["Pioneer", "Idealist", "Dreamer", "Innovator"],
    "antonyms": ["Traditionalist", "Realist"],
    "example": "The computer company was founded by a true visionary who foresaw mobile computing."
  },
  "vital": {
    "word": "Vital",
    "pos": "adjective",
    "simpleDefinition": "Absolutely necessary or essential for life, success, or functioning.",
    "synonyms": ["Essential", "Crucial", "Critical", "Indispensable"],
    "antonyms": ["Unimportant", "Trivial", "Secondary"],
    "example": "Clean drinking water and fresh food are vital for human health."
  },
  "vocation": {
    "word": "Vocation",
    "pos": "noun",
    "simpleDefinition": "A strong feeling of suitability for a particular career, calling, or profession.",
    "synonyms": ["Calling", "Profession", "Career", "Occupation"],
    "antonyms": ["Avocation", "Hobby"],
    "example": "She felt a genuine calling and vocation to become a dedicated teacher."
  },
  "vociferous": {
    "word": "Vociferous",
    "pos": "adjective",
    "simpleDefinition": "Expressing feelings or opinions loudly, passionately, and forcefully.",
    "synonyms": ["Clamorous", "Outspoken", "Vocal", "Vehement"],
    "antonyms": ["Silent", "Quiet", "Subdued"],
    "example": "There were vociferous protests outside city hall against the proposed budget cuts."
  },
  "void": {
    "word": "Void",
    "pos": "noun",
    "simpleDefinition": "A completely empty space, or a feeling of deep emptiness or loss.",
    "synonyms": ["Vacuum", "Emptiness", "Gap", "Chasm"],
    "antonyms": ["Fullness", "Abundance"],
    "example": "Her sudden retirement left an immense void in the research team."
  },
  "voluptuous": {
    "word": "Voluptuous",
    "pos": "adjective",
    "simpleDefinition": "Relating to or characterized by luxury, sensual pleasure, or curvy fullness.",
    "synonyms": ["Curvaceous", "Sensuous", "Luxurious"],
    "antonyms": ["Ascetic", "Austere", "Plain"],
    "example": "The banquet featured voluptuous feasts served on golden platters."
  },
  "vow": {
    "word": "Vow",
    "pos": "noun",
    "simpleDefinition": "A solemn promise, pledge, or commitment to do something.",
    "synonyms": ["Pledge", "Promise", "Oath", "Commitment"],
    "antonyms": ["Betrayal", "Breach"],
    "example": "They exchanged marriage vows in front of family and close friends."
  },
  "voyage": {
    "word": "Voyage",
    "pos": "noun",
    "simpleDefinition": "A long journey involving travel by sea or in space.",
    "synonyms": ["Journey", "Expedition", "Cruise", "Trip"],
    "antonyms": ["Stay", "Station"],
    "example": "The ancient explorers embarked on a perilous voyage across the Atlantic."
  },
  "vulgarity": {
    "word": "Vulgarity",
    "pos": "noun",
    "simpleDefinition": "The quality of lacking taste, refinement, decency, or good manners.",
    "synonyms": ["Coarseness", "Crudeness", "Rudeness", "Tastelessness"],
    "antonyms": ["Refinement", "Elegance", "Good taste"],
    "example": "The play was criticized by conservative reviewers for excessive vulgarity in its jokes."
  },
  "wagon": {
    "word": "Wagon",
    "pos": "noun",
    "simpleDefinition": "A four-wheeled vehicle for carrying heavy loads, typically drawn by horses or a tractor.",
    "synonyms": ["Cart", "Wain", "Carriage", "Trailer"],
    "antonyms": ["No common antonym"],
    "example": "The farmer loaded bushels of freshly picked apples into the wooden wagon."
  },
  "waive": {
    "word": "Waive",
    "pos": "verb",
    "simpleDefinition": "To refrain from insisting on or using a legal right, claim, or fee.",
    "synonyms": ["Relinquish", "Forgo", "Surrender", "Yield"],
    "antonyms": ["Enforce", "Claim", "Demand"],
    "example": "The university agreed to waive the application fee for low-income applicants."
  },
  "wallet": {
    "word": "Wallet",
    "pos": "noun",
    "simpleDefinition": "A pocket-sized flat folding case for holding money and credit cards.",
    "synonyms": ["Billfold", "Purse", "Pouch"],
    "antonyms": ["No common antonym"],
    "example": "He reached into his jacket pocket and pulled out his leather wallet."
  },
  "wander": {
    "word": "Wander",
    "pos": "verb",
    "simpleDefinition": "To walk or move in a leisurely, casual, or aimless way.",
    "synonyms": ["Roam", "Stroll", "Meander", "Rambling"],
    "antonyms": ["Stay put", "Hurry"],
    "example": "They loved to wander through the quiet cobblestone alleys of the historic village."
  },
  "warehouse": {
    "word": "Warehouse",
    "pos": "noun",
    "simpleDefinition": "A large building where raw materials or manufactured goods are stored before sale.",
    "synonyms": ["Storehouse", "Depot", "Repository", "Stockroom"],
    "antonyms": ["Shop", "Storefront"],
    "example": "The distribution company stores pallets of electronics in a temperature-controlled warehouse."
  },
  "warlock": {
    "word": "Warlock",
    "pos": "noun",
    "simpleDefinition": "A man who practices witchcraft or black magic; a sorcerer.",
    "synonyms": ["Sorcerer", "Wizard", "Mage", "Enchanter"],
    "antonyms": ["No common antonym"],
    "example": "In fantasy tales, the dark warlock cast a spell over the sleeping kingdom."
  },
  "wayward": {
    "word": "Wayward",
    "pos": "adjective",
    "simpleDefinition": "Difficult to control or predict because of willful or perverse behavior.",
    "synonyms": ["Willful", "Headstrong", "Stubborn", "Unruly"],
    "antonyms": ["Docile", "Obedient", "Manageable"],
    "example": "The novel recounts the story of a wayward youth who reformed and found purpose."
  },
  "wear out": {
    "word": "Wear out",
    "pos": "idiom",
    "simpleDefinition": "To use something until it is no longer usable, or tire someone completely.",
    "synonyms": ["Exhaust", "Fray", "Deplete", "Tire"],
    "antonyms": ["Renew", "Refresh", "Energize"],
    "example": "Daily running on concrete will quickly wear out the soles of your sneakers."
  },
  "wholesale": {
    "word": "Wholesale",
    "pos": "adjective",
    "simpleDefinition": "The selling of goods in large quantities to retailers for resale, or extensive.",
    "synonyms": ["Bulk", "Mass", "Extensive", "Comprehensive"],
    "antonyms": ["Retail", "Selective"],
    "example": "The supermarket buys fresh dairy at wholesale prices directly from dairy farms."
  },
  "wicked": {
    "word": "Wicked",
    "pos": "adjective",
    "simpleDefinition": "Evil or morally wrong; deliberately intending to do harm.",
    "synonyms": ["Evil", "Sinful", "Vile", "Heinous"],
    "antonyms": ["Good", "Virtuous", "Moral"],
    "example": "In folklore, the wicked queen attempted to trick the innocent princess."
  },
  "windy": {
    "word": "Windy",
    "pos": "adjective",
    "simpleDefinition": "Marked by or exposed to strong winds and gusts of air.",
    "synonyms": ["Breezy", "Gusty", "Blowy", "Stormy"],
    "antonyms": ["Calm", "Still", "Windless"],
    "example": "A windy autumn day sent colorful leaves dancing across the lawn."
  },
  "withhold": {
    "word": "Withhold",
    "pos": "verb",
    "simpleDefinition": "To refuse to give something that is due to or desired by another.",
    "synonyms": ["Keep back", "Retain", "Hold back", "Suppress"],
    "antonyms": ["Give", "Disclose", "Grant"],
    "example": "It is a crime to withhold critical evidence from investigators during a trial."
  },
  "worsen": {
    "word": "Worsen",
    "pos": "verb",
    "simpleDefinition": "To make or become worse in quality, condition, or severity.",
    "synonyms": ["Deteriorate", "Degrade", "Aggravate", "Decline"],
    "antonyms": ["Improve", "Better", "Ameliorate"],
    "example": "Air pollution tends to worsen during humid and windless winter evenings."
  },
  "worship": {
    "word": "Worship",
    "pos": "verb",
    "simpleDefinition": "To show reverence and adoration for a deity, or honor deeply.",
    "synonyms": ["Revere", "Venerate", "Praise", "Adore"],
    "antonyms": ["Despise", "Disdain", "Blaspheme"],
    "example": "Devoted pilgrims travel across the country to worship at the ancient temple."
  },
  "worth yours": {
    "word": "Worth yours",
    "pos": "idiom",
    "simpleDefinition": "Worth your time, effort, attention, or investment.",
    "synonyms": ["Worthwhile", "Valuable", "Rewarding"],
    "antonyms": ["Worthless", "Pointless"],
    "example": "Visiting the historical museum while in the capital is well worth your time."
  },
  "worthy of": {
    "word": "Worthy of",
    "pos": "idiom",
    "simpleDefinition": "Deserving of respect, praise, support, or consideration.",
    "synonyms": ["Deserving of", "Entitled to", "Meriting"],
    "antonyms": ["Unworthy of"],
    "example": "Her heroic volunteer efforts after the flood are truly worthy of public recognition."
  },
  "writ": {
    "word": "Writ",
    "pos": "noun",
    "simpleDefinition": "A formal written legal order issued by a court or judicial authority.",
    "synonyms": ["Court order", "Subpoena", "Decree", "Mandate"],
    "antonyms": ["No common antonym"],
    "example": "The judge issued a writ of habeas corpus directing that the prisoner be brought to court."
  },
  "yield": {
    "word": "Yield",
    "pos": "verb",
    "simpleDefinition": "To produce or provide a crop or profit, or give way to arguments or pressure.",
    "synonyms": ["Produce", "Provide", "Surrender", "Submit"],
    "antonyms": ["Resist", "Withstand"],
    "example": "Careful fertilization helped the farm yield its largest wheat harvest in a decade."
  },
  "zest": {
    "word": "Zest",
    "pos": "noun",
    "simpleDefinition": "Great enthusiasm, energy, and eagerness, or lively exciting flavor.",
    "synonyms": ["Enthusiasm", "Eagerness", "Passion", "Gusto"],
    "antonyms": ["Apathy", "Indifference", "Lethargy"],
    "example": "She brought tremendous zest and creativity to every new educational project."
  }
}

if __name__ == '__main__':
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
    
    added = 0
    for k, v in BATCH7_DATA.items():
        cache[k.lower()] = v
        added += 1
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)
    
    print(f"Added {added} curated entries for 'T through Z' to cache. Total cache size: {len(cache)}")
