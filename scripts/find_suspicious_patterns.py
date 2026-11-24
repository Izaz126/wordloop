import json
import re

init = json.load(open('src/data/initialVocabulary.json', encoding='utf-8'))

chars_to_check = ['হ্ণ', 'হ্ন', 'হ্ল', 'হ্ব', 'ষ্ফ', 'স্ন', 'স্স', 'ম্ম', 'প্প', 'ব্দ', 'প্স', 'ল্ক', 'ল্গ', 'ল্প', 'ল্ট', 'ণ্ঠ', 'ণ্ট', 'ণ্ড', 'ট্ট', 'ড্ড', 'চ্চ', 'চ্ছ', 'জ্জ']

results = {}
for idx, w in enumerate(init):
    b = w.get('banglaMeaning', '')
    for c in chars_to_check:
        if c in b:
            results.setdefault(c, []).append((idx+1, w['word'], b))

for c, items in results.items():
    print(f"=== Char '{c}': {len(items)} matches ===")
    for it in items[:10]:
        print(f"  {it[0]}\t{it[1]}\t{it[2]}")
