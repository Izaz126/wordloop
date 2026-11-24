import os
import json

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

BATCH1_DATA = {
  "harsh": {
    "word": "Harsh",
    "pos": "adjective",
    "simpleDefinition": "Rough, severe, or unpleasantly grating to the senses or feelings.",
    "synonyms": ["Severe", "Rough", "Cruel", "Strict"],
    "antonyms": ["Gentle", "Mild", "Soft"],
    "example": "The harsh winter wind made walking outside unbearable."
  },
  "hastening": {
    "word": "Hastening",
    "pos": "verb",
    "simpleDefinition": "Moving, acting, or causing something to happen with great speed.",
    "synonyms": ["Hurrying", "Speeding up", "Quickening", "Rushing"],
    "antonyms": ["Delaying", "Slowing", "Lingering"],
    "example": "She was hastening along the path to catch the last bus home."
  },
  "hasty": {
    "word": "Hasty",
    "pos": "adjective",
    "simpleDefinition": "Done with excessive speed or without sufficient careful thought.",
    "synonyms": ["Hurried", "Rash", "Impulsive", "Quick"],
    "antonyms": ["Careful", "Deliberate", "Slow"],
    "example": "Making a hasty decision often leads to regret later on."
  },
  "hazardous": {
    "word": "Hazardous",
    "pos": "adjective",
    "simpleDefinition": "Involving serious risk, danger, or peril to safety or health.",
    "synonyms": ["Dangerous", "Risky", "Perilous", "Unsafe"],
    "antonyms": ["Safe", "Secure", "Harmless"],
    "example": "Working with toxic chemicals can be extremely hazardous without protective gear."
  },
  "head and ears": {
    "word": "Head and ears",
    "pos": "idiom",
    "simpleDefinition": "Completely, deeply, or thoroughly involved in something.",
    "synonyms": ["Completely", "Deeply", "Thoroughly", "Entirely"],
    "antonyms": ["Partially", "Barely"],
    "example": "He found himself head and ears in debt after starting the new venture."
  },
  "heckle": {
    "word": "Heckle",
    "pos": "verb",
    "simpleDefinition": "To interrupt a public speaker with loud, rude, or aggressive comments.",
    "synonyms": ["Jeer", "Disrupt", "Taunt", "Harass"],
    "antonyms": ["Cheer", "Applaud", "Encourage"],
    "example": "A few angry protesters tried to heckle the mayor during his speech."
  },
  "hedge": {
    "word": "Hedge",
    "pos": "noun",
    "simpleDefinition": "A boundary of bushes, or an action taken to protect against financial loss.",
    "synonyms": ["Barrier", "Protection", "Safeguard", "Shield"],
    "antonyms": ["Exposure", "Risk"],
    "example": "Investing in gold is often used as a hedge against inflation."
  },
  "hefty": {
    "word": "Hefty",
    "pos": "adjective",
    "simpleDefinition": "Large, heavy, powerfully built, or substantial in amount.",
    "synonyms": ["Heavy", "Massive", "Substantial", "Sizable"],
    "antonyms": ["Light", "Slight", "Small"],
    "example": "He had to pay a hefty fine for speeding through the school zone."
  },
  "hegemony": {
    "word": "Hegemony",
    "pos": "noun",
    "simpleDefinition": "Leadership or dominant influence exerted by one nation or social group over others.",
    "synonyms": ["Dominance", "Supremacy", "Leadership", "Authority"],
    "antonyms": ["Subordination", "Self-government"],
    "example": "The ancient empire maintained its political hegemony over neighboring territories."
  },
  "heinous": {
    "word": "Heinous",
    "pos": "adjective",
    "simpleDefinition": "Utterly wicked, evil, shocking, or deserving of strong condemnation.",
    "synonyms": ["Atrocious", "Monstrous", "Abominable", "Evil"],
    "antonyms": ["Admirable", "Noble", "Virtuous"],
    "example": "The criminal received a life sentence for committing such heinous acts."
  },
  "hexagon": {
    "word": "Hexagon",
    "pos": "noun",
    "simpleDefinition": "A flat geometric shape with six straight sides and six angles.",
    "synonyms": ["Six-sided polygon", "Geometric shape"],
    "antonyms": ["No common antonym"],
    "example": "Bees construct their honeycombs out of tiny, perfect hexagon cells."
  },
  "hidebound": {
    "word": "Hidebound",
    "pos": "adjective",
    "simpleDefinition": "Unwilling to change or consider new ideas due to rigid tradition.",
    "synonyms": ["Narrow-minded", "Rigid", "Inflexible", "Orthodox"],
    "antonyms": ["Open-minded", "Progressive", "Flexible"],
    "example": "The hidebound committee rejected every suggestion for modernizing the policy."
  },
  "highbrow": {
    "word": "Highbrow",
    "pos": "adjective",
    "simpleDefinition": "Intellectual, scholarly, or appealing to refined and sophisticated tastes.",
    "synonyms": ["Intellectual", "Scholarly", "Cultured", "Sophisticated"],
    "antonyms": ["Lowbrow", "Popular", "Uncultured"],
    "example": "He preferred reading highbrow historical essays over commercial magazines."
  },
  "hindrance": {
    "word": "Hindrance",
    "pos": "noun",
    "simpleDefinition": "A thing that provides resistance, delay, or obstruction to something.",
    "synonyms": ["Obstacle", "Barrier", "Impediment", "Obstruction"],
    "antonyms": ["Help", "Assistance", "Aid"],
    "example": "The lack of reliable internet was a major hindrance to her online studies."
  },
  "hit upon": {
    "word": "Hit upon",
    "pos": "verb",
    "simpleDefinition": "To discover, think of, or find something unexpectedly or by chance.",
    "synonyms": ["Discover", "Come upon", "Devise", "Stumble upon"],
    "antonyms": ["Miss", "Overlook", "Ignore"],
    "example": "After hours of brainstorming, the team finally hit upon a brilliant solution."
  },
  "hoard": {
    "word": "Hoard",
    "pos": "verb",
    "simpleDefinition": "To accumulate and store away a large quantity of items secretly.",
    "synonyms": ["Amass", "Store", "Stockpile", "Accumulate"],
    "antonyms": ["Spend", "Distribute", "Squander"],
    "example": "During the crisis, some merchants attempted to hoard essential food supplies."
  },
  "hole and corner": {
    "word": "Hole and corner",
    "pos": "idiom",
    "simpleDefinition": "Done secretly, underhandedly, or in a deceitful manner.",
    "synonyms": ["Secret", "Underhanded", "Clandestine", "Covert"],
    "antonyms": ["Open", "Public", "Above board"],
    "example": "He refused to participate in such hole and corner business transactions."
  },
  "holocaust": {
    "word": "Holocaust",
    "pos": "noun",
    "simpleDefinition": "Destruction or slaughter on a mass scale, especially by fire or warfare.",
    "synonyms": ["Massacre", "Catastrophe", "Devastation", "Destruction"],
    "antonyms": ["Peace", "Preservation"],
    "example": "The devastating conflict resulted in a humanitarian holocaust for civilians."
  },
  "homogeneous": {
    "word": "Homogeneous",
    "pos": "adjective",
    "simpleDefinition": "Consisting of parts or elements that are all of the same kind; uniform.",
    "synonyms": ["Uniform", "Consistent", "Identical", "Similar"],
    "antonyms": ["Heterogeneous", "Diverse", "Varied"],
    "example": "The small island nation has a remarkably homogeneous culture and language."
  },
  "honorary": {
    "word": "Honorary",
    "pos": "adjective",
    "simpleDefinition": "Given as an honor or title without the normal duties or regular payment.",
    "synonyms": ["Unpaid", "Nominal", "Honorific", "Complimentary"],
    "antonyms": ["Salaried", "Paid", "Official"],
    "example": "The university awarded him an honorary degree for his philanthropic work."
  },
  "hook": {
    "word": "Hook",
    "pos": "noun",
    "simpleDefinition": "A curved device used for catching or holding, or an attractive feature.",
    "synonyms": ["Snare", "Catch", "Trap", "Fastener"],
    "antonyms": ["Release"],
    "example": "The catchy opening chorus served as the main hook of the song."
  },
  "horde": {
    "word": "Horde",
    "pos": "noun",
    "simpleDefinition": "A very large, bustling crowd or moving group of people.",
    "synonyms": ["Crowd", "Multitude", "Throng", "Pack"],
    "antonyms": ["Handful", "Few", "Individual"],
    "example": "A horde of eager shoppers rushed through the mall doors on sale day."
  },
  "horn": {
    "word": "Horn",
    "pos": "noun",
    "simpleDefinition": "A hard pointed growth on an animal's head, or a brass wind instrument.",
    "synonyms": ["Antler", "Wind instrument"],
    "antonyms": ["No common antonym"],
    "example": "The loud horn of the arriving ship echoed across the quiet harbor."
  },
  "host in himself": {
    "word": "Host in himself",
    "pos": "idiom",
    "simpleDefinition": "A person with many skills who can manage everything independently.",
    "synonyms": ["All-rounder", "Versatile person", "Self-reliant"],
    "antonyms": ["Dependent person", "Helpless"],
    "example": "The resourceful technician was truly a host in himself on the expedition."
  },
  "humble": {
    "word": "Humble",
    "pos": "adjective",
    "simpleDefinition": "Having or showing a modest estimate of one's own importance; not proud.",
    "synonyms": ["Modest", "Meek", "Unassuming", "Respectful"],
    "antonyms": ["Arrogant", "Proud", "Haughty"],
    "example": "Despite winning the grand prize, she remained remarkably humble."
  },
  "humidity": {
    "word": "Humidity",
    "pos": "noun",
    "simpleDefinition": "The state or degree of moisture and dampness present in the air.",
    "synonyms": ["Moisture", "Dampness", "Wetness", "Mugginess"],
    "antonyms": ["Dryness", "Aridity"],
    "example": "The high humidity made the tropical afternoon feel uncomfortably hot."
  },
  "hyperbolic": {
    "word": "Hyperbolic",
    "pos": "adjective",
    "simpleDefinition": "Deliberately exaggerated, or relating to a geometric hyperbola.",
    "synonyms": ["Exaggerated", "Overstated", "Inflated", "Magnified"],
    "antonyms": ["Understated", "Literal", "Modest"],
    "example": "The review was filled with hyperbolic praise about the new smartphone."
  },
  "hypothetical": {
    "word": "Hypothetical",
    "pos": "adjective",
    "simpleDefinition": "Based on an assumption or imagined situation rather than factual evidence.",
    "synonyms": ["Theoretical", "Supposed", "Assumed", "Imaginary"],
    "antonyms": ["Actual", "Real", "Factual"],
    "example": "The lawyer gave a hypothetical example to explain the complex legal concept."
  },
  "jaunt": {
    "word": "Jaunt",
    "pos": "noun",
    "simpleDefinition": "A short, pleasant excursion or trip taken primarily for pleasure.",
    "synonyms": ["Outing", "Excursion", "Trip", "Stroll"],
    "antonyms": ["Stay", "Station"],
    "example": "We took a leisurely jaunt to the countryside to enjoy the autumn leaves."
  },
  "jubilate": {
    "word": "Jubilate",
    "pos": "verb",
    "simpleDefinition": "To show or express great joy, celebration, and triumph.",
    "synonyms": ["Rejoice", "Celebrate", "Exult", "Triumph"],
    "antonyms": ["Mourn", "Grieve", "Lament"],
    "example": "The crowd began to jubilate as the hometown hero crossed the finish line."
  },
  "judiciary": {
    "word": "Judiciary",
    "pos": "noun",
    "simpleDefinition": "The judicial branch of government, including courts, magistrates, and judges.",
    "synonyms": ["Bench", "Court system", "Judicature", "Magistracy"],
    "antonyms": ["No common antonym"],
    "example": "An honest judiciary ensures that laws are applied equally to everyone."
  },
  "jurisdiction": {
    "word": "Jurisdiction",
    "pos": "noun",
    "simpleDefinition": "The legal power, authority, or territory to administer justice.",
    "synonyms": ["Authority", "Control", "Power", "Sovereignty"],
    "antonyms": ["Powerlessness", "Incompetence"],
    "example": "The federal court has jurisdiction over matters involving interstate commerce."
  },
  "jury": {
    "word": "Jury",
    "pos": "noun",
    "simpleDefinition": "A group of sworn citizens who decide the verdict in a legal trial.",
    "synonyms": ["Panel", "Tribunal", "Judges", "Arbitrators"],
    "antonyms": ["No common antonym"],
    "example": "The jury took two days of deliberation to reach their unanimous verdict."
  },
  "keen": {
    "word": "Keen",
    "pos": "adjective",
    "simpleDefinition": "Having sharp perception, intellect, eagerness, or intense enthusiasm.",
    "synonyms": ["Sharp", "Eager", "Acute", "Enthusiastic"],
    "antonyms": ["Dull", "Reluctant", "Apathetic"],
    "example": "She displayed a keen interest in learning ancient history and languages."
  },
  "kleptomania": {
    "word": "Kleptomania",
    "pos": "noun",
    "simpleDefinition": "A mental health disorder characterized by an uncontrollable urge to steal.",
    "synonyms": ["Compulsive stealing", "Impulse control disorder"],
    "antonyms": ["No common antonym"],
    "example": "He received professional psychotherapy to help treat his kleptomania."
  },
  "knotty": {
    "word": "Knotty",
    "pos": "adjective",
    "simpleDefinition": "Complex, full of difficulties, and very tricky or hard to solve.",
    "synonyms": ["Complex", "Tricky", "Tangled", "Complicated"],
    "antonyms": ["Simple", "Straightforward", "Easy"],
    "example": "The ambassadors spent hours negotiating the knotty border dispute."
  },
  "laborious": {
    "word": "Laborious",
    "pos": "adjective",
    "simpleDefinition": "Requiring hard work, considerable physical or mental effort, and time.",
    "synonyms": ["Arduous", "Strenuous", "Tiresome", "Demanding"],
    "antonyms": ["Easy", "Effortless", "Simple"],
    "example": "Transcribing the old manuscript word by word was a laborious task."
  },
  "laconic": {
    "word": "Laconic",
    "pos": "adjective",
    "simpleDefinition": "Using very few words in speech or writing; brief and concise.",
    "synonyms": ["Brief", "Concise", "Terse", "Succinct"],
    "antonyms": ["Verbose", "Wordy", "Talkative"],
    "example": "His laconic reply of 'No' signaled that the discussion was completely over."
  },
  "laggard": {
    "word": "Laggard",
    "pos": "noun",
    "simpleDefinition": "A person who moves very slowly and continually falls behind others.",
    "synonyms": ["Slowpoke", "Straggler", "Loiterer", "Sluggard"],
    "antonyms": ["Leader", "Pioneer", "Trailblazer"],
    "example": "The company introduced incentives to encourage corporate laggards to modernize."
  },
  "laid back": {
    "word": "Laid back",
    "pos": "adjective",
    "simpleDefinition": "Calm, relaxed, unhurried, and not easily worried or stressed.",
    "synonyms": ["Relaxed", "Easygoing", "Unruffled", "Casual"],
    "antonyms": ["Tense", "Stressed", "Anxious"],
    "example": "His laid back temperament helped keep the entire team calm under pressure."
  },
  "lament": {
    "word": "Lament",
    "pos": "verb",
    "simpleDefinition": "To express deep sorrow, grief, or regret for someone or something.",
    "synonyms": ["Mourn", "Grieve", "Bemoan", "Weep"],
    "antonyms": ["Celebrate", "Rejoice", "Praise"],
    "example": "Poets from across the country wrote touching verses to lament his passing."
  },
  "landscape": {
    "word": "Landscape",
    "pos": "noun",
    "simpleDefinition": "All the visible features of an area of countryside or land.",
    "synonyms": ["Scenery", "Terrain", "Panorama", "View"],
    "antonyms": ["No common antonym"],
    "example": "The artist captured the beautiful mountain landscape in his oil painting."
  },
  "languor": {
    "word": "Languor",
    "pos": "noun",
    "simpleDefinition": "A pleasant feeling of tiredness or inertia, or lack of physical energy.",
    "synonyms": ["Lethargy", "Sluggishness", "Lassitude", "Inertia"],
    "antonyms": ["Vigor", "Energy", "Vitality"],
    "example": "After a day swimming under the sun, a sweet languor came over us all."
  },
  "lassitude": {
    "word": "Lassitude",
    "pos": "noun",
    "simpleDefinition": "A state of physical or mental weariness; complete lack of energy.",
    "synonyms": ["Fatigue", "Weariness", "Lethargy", "Exhaustion"],
    "antonyms": ["Energy", "Vitality", "Vigor"],
    "example": "A strange lassitude overcame the patient following several days of fever."
  },
  "lawn": {
    "word": "Lawn",
    "pos": "noun",
    "simpleDefinition": "An area of manicured green grass near a house, park, or public building.",
    "synonyms": ["Turf", "Grassland", "Meadow", "Green"],
    "antonyms": ["No common antonym"],
    "example": "We sat on the manicured lawn enjoying cold lemonade in the sunshine."
  },
  "leaning": {
    "word": "Leaning",
    "pos": "noun",
    "simpleDefinition": "A tendency, inclination, or personal preference towards something.",
    "synonyms": ["Inclination", "Tendency", "Bias", "Predilection"],
    "antonyms": ["Neutrality", "Indifference", "Impartiality"],
    "example": "He has a noticeable political leaning toward environmental conservation."
  },
  "legible": {
    "word": "Legible",
    "pos": "adjective",
    "simpleDefinition": "Clear, neat, and readable enough to be easily deciphered.",
    "synonyms": ["Readable", "Clear", "Decipherable", "Intelligible"],
    "antonyms": ["Illegible", "Unreadable", "Messy"],
    "example": "Please make sure your handwriting is legible when filling out the form."
  },
  "legitimate": {
    "word": "Legitimate",
    "pos": "adjective",
    "simpleDefinition": "Conforming to recognized laws, established rules, or sound logic.",
    "synonyms": ["Lawful", "Legal", "Valid", "Authentic"],
    "antonyms": ["Illegitimate", "Illegal", "Unlawful"],
    "example": "The customer had a legitimate complaint regarding the broken warranty."
  },
  "lethargic": {
    "word": "Lethargic",
    "pos": "adjective",
    "simpleDefinition": "Sluggish, drowsy, tired, and lacking in normal vitality or enthusiasm.",
    "synonyms": ["Sluggish", "Tired", "Passive", "Inactive"],
    "antonyms": ["Energetic", "Active", "Lively"],
    "example": "A heavy meal during the hot afternoon left everyone feeling lethargic."
  },
  "lexicographer": {
    "word": "Lexicographer",
    "pos": "noun",
    "simpleDefinition": "A person who writes, compiles, or edits dictionaries.",
    "synonyms": ["Dictionary compiler", "Glossarian", "Vocabulist"],
    "antonyms": ["No common antonym"],
    "example": "The lexicographer spent thirty years documenting regional English idioms."
  },
  "licentious": {
    "word": "Licentious",
    "pos": "adjective",
    "simpleDefinition": "Lacking moral or sexual restraint; dissolute and unprincipled.",
    "synonyms": ["Immoral", "Dissolute", "Debauched", "Lustful"],
    "antonyms": ["Moral", "Virtuous", "Chaste"],
    "example": "The corrupt nobleman was widely condemned for his licentious behavior."
  },
  "limpid": {
    "word": "Limpid",
    "pos": "adjective",
    "simpleDefinition": "Completely clear, transparent, serene, and free from cloudiness.",
    "synonyms": ["Clear", "Transparent", "Lucid", "Pure"],
    "antonyms": ["Turbid", "Murky", "Muddy"],
    "example": "You could see every smooth pebble at the bottom of the limpid stream."
  },
  "linguistic": {
    "word": "Linguistic",
    "pos": "adjective",
    "simpleDefinition": "Relating to language, speech, or the scientific study of language.",
    "synonyms": ["Verbal", "Grammatical", "Semantic", "Philological"],
    "antonyms": ["Nonverbal"],
    "example": "Children acquire impressive linguistic skills rapidly during their early years."
  },
  "lively": {
    "word": "Lively",
    "pos": "adjective",
    "simpleDefinition": "Full of life, active energy, enthusiasm, and cheerful spirit.",
    "synonyms": ["Energetic", "Vibrant", "Animated", "Spirited"],
    "antonyms": ["Lifeless", "Dull", "Inert"],
    "example": "The street market was bustling with lively music, aromas, and shoppers."
  },
  "lodge a complaint": {
    "word": "Lodge a complaint",
    "pos": "idiom",
    "simpleDefinition": "To submit an official or formal grievance to an authority.",
    "synonyms": ["File a complaint", "Register a grievance", "Protest officially"],
    "antonyms": ["Withdraw a complaint", "Accept"],
    "example": "The tenants decided to lodge a complaint against the landlord for neglect."
  },
  "lowest point": {
    "word": "Lowest point",
    "pos": "noun",
    "simpleDefinition": "The nadir; the lowest level, stage, or time of greatest adversity.",
    "synonyms": ["Nadir", "Rock bottom", "Trough", "Base"],
    "antonyms": ["Zenith", "Peak", "Pinnacle"],
    "example": "Failing the entrance exam was the lowest point in an otherwise stellar year."
  },
  "lucid": {
    "word": "Lucid",
    "pos": "adjective",
    "simpleDefinition": "Expressed clearly and easy to understand; fully rational and clearheaded.",
    "synonyms": ["Clear", "Articulate", "Intelligible", "Coherent"],
    "antonyms": ["Confused", "Unclear", "Murky"],
    "example": "The professor gave a remarkably lucid explanation of the economic theorem."
  },
  "lucrative": {
    "word": "Lucrative",
    "pos": "adjective",
    "simpleDefinition": "Producing a great deal of profit; financially rewarding.",
    "synonyms": ["Profitable", "Rewarding", "Remunerative", "Gainful"],
    "antonyms": ["Unprofitable", "Loss-making", "Disadvantageous"],
    "example": "Exporting fresh fruit proved to be a highly lucrative venture."
  },
  "lukewarm": {
    "word": "Lukewarm",
    "pos": "adjective",
    "simpleDefinition": "Only slightly warm, or showing very little interest or enthusiasm.",
    "synonyms": ["Tepid", "Unenthusiastic", "Apathetic", "Halfhearted"],
    "antonyms": ["Enthusiastic", "Warm", "Passionate"],
    "example": "The board gave only a lukewarm response to the proposed office relocation."
  },
  "lumber": {
    "word": "Lumber",
    "pos": "verb",
    "simpleDefinition": "To move along slowly, heavily, and clumsily.",
    "synonyms": ["Plod", "Trudge", "Lurch", "Stumble"],
    "antonyms": ["Glide", "Dart", "Sprint"],
    "example": "The giant bear continued to lumber steadily across the rocky trail."
  },
  "luminous": {
    "word": "Luminous",
    "pos": "adjective",
    "simpleDefinition": "Emitting, glowing with, or reflecting bright and steady light.",
    "synonyms": ["Radiant", "Brilliant", "Glowing", "Bright"],
    "antonyms": ["Dark", "Dim", "Dull"],
    "example": "The luminous moon lit up our path as we walked along the quiet beach."
  }
}

def update_cache():
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            cache = json.load(f)
    else:
        cache = {}

    count = 0
    for k, v in BATCH1_DATA.items():
        cache[k.lower()] = v
        count += 1

    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

    print(f"Added {count} curated entries (H, J, K, L) to cache. Total cache size: {len(cache)}")

if __name__ == '__main__':
    update_cache()
