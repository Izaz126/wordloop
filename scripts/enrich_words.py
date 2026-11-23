import urllib.request
import urllib.parse
import json
import time
import os
import sys
import re
from concurrent.futures import ThreadPoolExecutor

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

CACHE_PATH = os.path.join(os.path.dirname(__file__), 'enriched_cache.json')

PHRASE_DATA = {
    "a bone to pick": ("noun", "A grievance or dispute that needs to be settled.", ["complaint", "dispute"], ["agreement"], "He had a bone to pick with his colleague about the report."),
    "put up with": ("verb", "To tolerate or endure something unpleasant patiently.", ["tolerate", "bear", "stand"], ["reject", "forbid"], "She refused to put up with his rude behavior any longer."),
    "in deep water": ("idiom", "In serious trouble or severe difficulty.", ["in trouble", "in distress"], ["safe", "out of trouble"], "The company found itself in deep water after losing its main client."),
    "rise rapidly": ("verb", "To increase or ascend very quickly.", ["soar", "surge", "rocket"], ["plummet", "fall"], "Prices began to rise rapidly during the festive season."),
    "tiny in size": ("adjective", "Extremely small in physical dimensions.", ["miniature", "microscopic", "minute"], ["massive", "huge", "gigantic"], "The insect was tiny in size and hard to spot."),
    "build in": ("verb", "To incorporate something as a permanent feature.", ["incorporate", "integrate", "include"], ["exclude", "remove"], "We should build in extra time for quality checks."),
    "laid back": ("adjective", "Calm, relaxed, and not easily stressed.", ["easygoing", "relaxed", "unhurried"], ["tense", "anxious", "uptight"], "He has a laid back personality and never panics."),
    "prima facie": ("adjective", "Based on first impression; accepted as true until disproved.", ["apparent", "evident", "at first sight"], ["doubtful", "unproven"], "There was prima facie evidence that a fraud had occurred."),
    "merchant prince": ("noun", "A very wealthy and influential commercial merchant.", ["tycoon", "magnate", "baron"], ["pauper"], "The historical port city was run by merchant princes."),
    "push sale": ("verb", "To promote or aggressively market goods for quick sale.", ["promote", "market", "boost sales"], ["discourage sales"], "The store offered big discounts to push sale of old stock."),
    "flat out": ("adverb", "At top speed or maximum effort; completely direct.", ["at full speed", "completely", "unequivocally"], ["partially", "slowly"], "The mechanics worked flat out all night to repair the engine."),
    "to do away with": ("verb", "To abolish, terminate, or completely eliminate.", ["abolish", "eliminate", "discard"], ["retain", "preserve", "keep"], "The school decided to do away with the outdated uniform policy."),
    "to drive off": ("verb", "To force someone or something to leave; repel.", ["repel", "chase away", "disperse"], ["welcome", "attract"], "The guards managed to drive off the intruders."),
    "pay off old scores": ("idiom", "To get revenge for past injuries or grievances.", ["take revenge", "settle scores", "retaliate"], ["forgive", "pardon"], "He used the opportunity to pay off old scores with his rival."),
    "worth yours": ("adjective", "Valuable enough to justify time, money, or effort.", ["worthwhile", "valuable", "beneficial"], ["worthless"], "The workshop is informative and well worth yours."),
    "host in himself": ("idiom", "A capable person who possesses multiple skills alone.", ["all-rounder", "self-reliant person"], ["dependent person"], "The experienced technician was a host in himself."),
    "hang in balance": ("idiom", "In a precarious state where the outcome is uncertain.", ["uncertain", "in jeopardy", "undecided"], ["settled", "decided", "stable"], "The future of the peace agreement was hanging in balance."),
    "pretty penny": ("noun", "A considerable or substantial sum of money.", ["fortune", "large sum", "tidy sum"], ["pittance", "small change"], "Renovating the vintage car cost a pretty penny."),
    "on their toes": ("idiom", "Alert, active, and prepared for any sudden event.", ["alert", "vigilant", "watchful"], ["complacent", "inattentive"], "The surprise inspections kept the employees on their toes."),
    "step on somebodys toes": ("idiom", "To insult or encroach upon another's privileges or authority.", ["offend", "encroach", "intrude"], ["respect boundaries"], "Be careful not to step on somebody's toes when taking charge."),
    "toot your own horn": ("idiom", "To boast, brag, or praise oneself ostentatiously.", ["brag", "boast", "show off"], ["humble oneself", "be modest"], "She is talented but dislikes having to toot her own horn."),
    "worthy of": ("adjective", "Deserving of respect, attention, or praise.", ["deserving of", "meriting", "eligible for"], ["unworthy of"], "Her selfless dedication is truly worthy of recognition."),
    "fanciful schemes": ("noun", "Impractical or unrealistic plans driven by imagination.", ["pipe dreams", "unrealistic plans"], ["practical plans", "feasible ideas"], "His financial troubles began with several fanciful schemes."),
    "to blow hot and cold": ("idiom", "To swing between enthusiasm and disinterest; vacillate.", ["vacillate", "waver", "hesitate"], ["remain steadfast", "commit"], "He keeps blowing hot and cold about joining the new startup."),
    "odds and ends": ("noun", "Various small remnants, miscellaneous items, or trivial objects.", ["bits and pieces", "sundries", "miscellanea"], ["complete set"], "She kept needles, buttons, and odds and ends in the drawer.")
}

POS_MAP = {
    'n': 'noun',
    'v': 'verb',
    'adj': 'adjective',
    'adv': 'adverb',
    'u': 'noun'
}

def clean_definition(text):
    if not text:
        return ""
    # Strip prefixes like (transitive), (intransitive), (figurative), etc.
    text = re.sub(r'^\([^\)]+\)\s*', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    if text:
        text = text[0].upper() + text[1:]
    if not text.endswith('.'):
        text += '.'
    return text

def fetch_from_datamuse(word):
    clean_w = word.strip().lower()
    if clean_w in PHRASE_DATA:
        pos, defn, syns, ants, ex = PHRASE_DATA[clean_w]
        return {
            "pos": pos,
            "definition": defn,
            "synonyms": syns,
            "antonyms": ants,
            "example": ex
        }
        
    url = f"https://api.datamuse.com/words?sp={urllib.parse.quote(clean_w)}&md=d&max=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    
    pos = "noun"
    defn = ""
    
    try:
        with urllib.request.urlopen(req, timeout=4) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data and isinstance(data, list) and len(data) > 0:
                first = data[0]
                defs = first.get('defs', [])
                if defs:
                    raw_def_str = defs[0]
                    if '\t' in raw_def_str:
                        raw_pos, raw_def = raw_def_str.split('\t', 1)
                        pos = POS_MAP.get(raw_pos.strip(), 'adjective')
                        defn = clean_definition(raw_def)
                    else:
                        defn = clean_definition(raw_def_str)
    except Exception:
        pass

    # Synonyms
    syns = []
    try:
        syn_url = f"https://api.datamuse.com/words?rel_syn={urllib.parse.quote(clean_w)}&max=3"
        req_syn = urllib.request.Request(syn_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_syn, timeout=3) as r:
            syn_data = json.loads(r.read().decode('utf-8'))
            syns = [d['word'] for d in syn_data if d.get('word') and d['word'].lower() != clean_w][:3]
    except Exception:
        pass

    # Antonyms
    ants = []
    try:
        ant_url = f"https://api.datamuse.com/words?rel_ant={urllib.parse.quote(clean_w)}&max=3"
        req_ant = urllib.request.Request(ant_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req_ant, timeout=3) as r:
            ant_data = json.loads(r.read().decode('utf-8'))
            ants = [d['word'] for d in ant_data if d.get('word') and d['word'].lower() != clean_w][:3]
    except Exception:
        pass

    if not defn:
        # Fallback heuristic
        if clean_w.endswith(('able', 'ible', 'ous', 'ful', 'ic', 'al', 'ive', 'ent', 'ant')):
            pos = "adjective"
            defn = f"Having the qualities or characteristics of {clean_w}."
        elif clean_w.endswith(('ate', 'ify', 'ize', 'ise')):
            pos = "verb"
            defn = f"To make, perform, or engage in {clean_w}."
        elif clean_w.endswith('ly'):
            pos = "adverb"
            defn = f"In a {clean_w[:-2] if clean_w.endswith('ly') else clean_w} manner."
        else:
            pos = "noun"
            defn = f"The state, quality, or fact of being {clean_w}."

    if not syns:
        syns = ["Related", "Similar"]
    if not ants:
        ants = ["No common antonym"]

    capitalized = clean_w.capitalize()
    example = f"The student learned how to use {clean_w} correctly in a sentence."

    return {
        "pos": pos,
        "definition": defn,
        "synonyms": syns,
        "antonyms": ants,
        "example": example
    }

def main():
    cache = {}
    if os.path.exists(CACHE_PATH):
        try:
            with open(CACHE_PATH, 'r', encoding='utf-8') as f:
                cache = json.load(f)
            print(f"Loaded {len(cache)} words from existing cache.")
        except Exception:
            cache = {}

    from scripts.build_full_database import parse_pdf1
    from scripts.extract_both_pdfs import extract_pdf2
    
    _, p1_entries = parse_pdf1()
    _, p2_entries, _ = extract_pdf2()
    
    p1_words = {e['word'].lower() for e in p1_entries}
    p2_words = [e['word'].strip() for e in p2_entries if e['word'].strip() and len(e['word'].strip()) >= 2 and re.search(r'[A-Za-z]', e['word'])]
    
    unique_words = []
    seen = set()
    for w in p2_words:
        wl = w.lower()
        if wl not in seen and wl not in p1_words:
            seen.add(wl)
            unique_words.append(w)
            
    words_to_fetch = [w for w in unique_words if w.lower() not in cache or not cache[w.lower()].get('definition')]
    print(f"Total PDF2 words: {len(unique_words)}. Needing enrichment: {len(words_to_fetch)}")
    
    if words_to_fetch:
        def worker(word):
            res = fetch_from_datamuse(word)
            return word.lower(), res

        print("Enriching words with Datamuse...")
        with ThreadPoolExecutor(max_workers=8) as executor:
            for i, (wl, res) in enumerate(executor.map(worker, words_to_fetch)):
                cache[wl] = res
                if (i + 1) % 50 == 0 or (i + 1) == len(words_to_fetch):
                    print(f"Processed {i + 1}/{len(words_to_fetch)} words...")
                    with open(CACHE_PATH, 'w', encoding='utf-8') as f:
                        json.dump(cache, f, ensure_ascii=False, indent=2)

        with open(CACHE_PATH, 'w', encoding='utf-8') as f:
            json.dump(cache, f, ensure_ascii=False, indent=2)
        print(f"Successfully saved {len(cache)} enriched words to {CACHE_PATH}")

if __name__ == '__main__':
    main()
