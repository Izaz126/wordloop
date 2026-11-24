import json

with open("src/data/initialVocabulary.json", "r", encoding="utf-8") as f:
    words = json.load(f)

check_words = ["Amass", "Bona-fide", "Far-fetched", "Abrasive", "Slumber", "Vehemently", "Conduit"]
for w in words:
    if w["word"] in check_words:
        print(f"{w['word']} -> {w['banglaMeaning']}")
        if w["word"] == "Bona-fide":
            print("  synonyms:", w["synonyms"])
            print("  antonyms:", w["antonyms"])
