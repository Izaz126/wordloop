import json

init = json.load(open('src/data/initialVocabulary.json', encoding='utf-8'))
for idx, w in enumerate(init):
    b = w.get('banglaMeaning', '')
    if 'হৃ' in b:
        print(f"{idx+1}\t{w['word']}\t{b}")
