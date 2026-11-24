import os
import json

DATA_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'initialVocabulary.json')
OUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'all_entries_dump.txt')

def main():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(OUT_FILE, 'w', encoding='utf-8') as f:
        for i, item in enumerate(data):
            f.write(f"{i+1}\t{item['word']}\t{item.get('banglaMeaning','')}\t{item.get('pos','')}\t{','.join(item.get('synonyms',[]))}\t{','.join(item.get('antonyms',[]))}\n")
            
    print(f"Dumped {len(data)} entries to {OUT_FILE}")

if __name__ == '__main__':
    main()
