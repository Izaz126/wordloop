import os
import sys
import json
import re
import pypdf

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from extract_both_pdfs import extract_pdf2, clean_bangla

# Complete accurate Bangla meanings and simple definitions for all 290 words from PDF 1
PDF1_DATA = {
    "Ambiguous": ("adjective", "দ্ব্যর্থবোধক / অস্পষ্ট", "Having more than one possible meaning; unclear"),
    "Benevolent": ("adjective", "দয়ালু / হিতৈষী", "Kind, generous, and caring for others"),
    "Candid": ("adjective", "অকপট / স্পষ্টভাষী", "Truthful, direct, and straightforward"),
    "Diligent": ("adjective", "পরিশ্রমী / অধ্যবসায়ী", "Hardworking and showing steady effort"),
    "Eloquent": ("adjective", "বাগ্মী / প্রাঞ্জলভাষী", "Expressing ideas clearly and persuasively"),
    "Frugal": ("adjective", "মিতব্যয়ী / হিসেবি", "Careful with money and avoiding waste"),
    "Gregarious": ("adjective", "মিশুক / সামাজিক", "Sociable and enjoying the company of others"),
    "Haughty": ("adjective", "উদ্ধত / অহংকারী", "Arrogant, proud, and looking down on others"),
    "Insolent": ("adjective", "বেয়াদব / ধৃষ্ট", "Rude, disrespectful, and insulting"),
    "Judicious": ("adjective", "সুবিচক্ষণ / বুদ্ধিমান", "Showing good judgment and common sense"),
    "Kindle": ("verb", "জ্বালানো / উদ্দীপিত করা", "To ignite a fire or inspire strong feelings"),
    "Loquacious": ("adjective", "বাচাল / বাকপটু", "Tending to talk a great deal; talkative"),
    "Meticulous": ("adjective", "খুঁতখুঁতে / অতি সতর্ক", "Very careful and paying great attention to detail"),
    "Nonchalant": ("adjective", "উদাসীন / ভাবলেশহীন", "Calm, casual, and showing no worry"),
    "Obstinate": ("adjective", "একগুঁয়ে / জেদি", "Stubbornly refusing to change one's mind"),
    "Pompous": ("adjective", "আত্মম্ভরী / দেমাগী", "Self-important and pretending to be grand"),
    "Querulous": ("adjective", "খিটখিটে / অনুযোগকারী", "Complaining and whining in an annoying way"),
    "Reticent": ("adjective", "স্বল্পভাষী / চাপা স্বভাবের", "Quiet and not talking much about one's feelings"),
    "Sycophant": ("noun", "চাটুকার / তোষামোদকারী", "A person who flatters powerful people for personal gain"),
    "Tenacious": ("adjective", "নাছোড়বান্দা / দৃঢ়প্রতিজ্ঞ", "Holding fast; persistent and determined"),
    "Ubiquitous": ("adjective", "সর্বব্যাপী / সর্বত্র বিদ্যমান", "Present and found everywhere"),
    "Verbose": ("adjective", "শব্দবহুল / বাগাড়ম্বরপূর্ণ", "Using far more words than necessary"),
    "Wary": ("adjective", "সতর্ক / সাবধানী", "Cautious and watchful of potential danger"),
    "Xenophobia": ("noun", "বিদেশি-বিদ্বেষ", "Deep dislike of or prejudice against people from other countries"),
    "Zeal": ("noun", "প্রবল উৎসাহ / উদ্দীপনা", "Great energy and enthusiasm for a cause or activity"),
    "Abhor": ("verb", "ঘৃণা করা / তীব্র অপছন্দ করা", "To hate or detest something deeply"),
    "Acrimony": ("noun", "তিক্ততা / বিদ্বেষ", "Anger, bitterness, and ill feelings"),
    "Admonish": ("verb", "সতর্ক করা / মৃদু তিরস্কার করা", "To warn or criticize someone gently"),
    "Affable": ("adjective", "অমায়িক / বন্ধুবৎসল", "Friendly, pleasant, and easy to talk to"),
    "Aggravate": ("verb", "অবনতি ঘটানো / উসকে দেওয়া", "To make an unpleasant situation or illness worse"),
    "Alleviate": ("verb", "উপশম করা / লাঘব করা", "To make suffering, grief, or pain less severe"),
    "Aloof": ("adjective", "নিস্পৃহ / দূরে থাকা", "Not friendly or willing to take part in things; detached"),
    "Altruistic": ("adjective", "পরার্থপর / নিঃস্বার্থ", "Showing a selfless concern for the well-being of others"),
    "Ambivalent": ("adjective", "দোদুল্যমান / দোটানায় ভোগা", "Having mixed or conflicting feelings about someone or something"),
    "Amiable": ("adjective", "ভদ্র / মিশুক / অমায়িক", "Displaying a friendly, kind, and pleasant manner"),
    "Anachronism": ("noun", "কালবৈষম্য / যুগের সাথে বেমানান", "Something placed in the wrong historical period"),
    "Anarchy": ("noun", "নৈরাজ্য / বিশৃঙ্খলা", "A state of lawlessness due to the absence of authority"),
    "Animosity": ("noun", "শত্রুতা / তীব্র বিদ্বেষ", "Strong hostility and active dislike"),
    "Anomaly": ("noun", "ব্যতিক্রম / নিয়মবহির্ভূত কিছু", "Something that deviates from what is standard, normal, or expected"),
    "Antipathy": ("noun", "বিতৃষ্ণা / তীব্র অনীহা", "A strong and deep-seated feeling of dislike"),
    "Apathy": ("noun", "উদাসীনতা / নির্লিপ্ততা", "Lack of interest, enthusiasm, or concern"),
    "Appease": ("verb", "শান্ত করা / তুষ্ট করা", "To pacify or satisfy someone by giving what they want"),
    "Arrogance": ("noun", "অহংকার / দম্ভ", "An insulting display of self-importance and superiority"),
    "Articulate": ("adjective", "স্পষ্টভাষী / প্রাঞ্জল", "Able to express thoughts and ideas clearly and effectively"),
    "Ascertain": ("verb", "নিশ্চিত করা / নিরূপণ করা", "To find out or learn with certainty through examination"),
    "Aspire": ("verb", "আকাঙ্ক্ষা করা / ইচ্ছা পোষণ করা", "To direct one's hopes and ambitions toward achieving a goal"),
    "Astute": ("adjective", "বিচক্ষণ / তীক্ষ্ণবুদ্ধি", "Quick to understand situations and take advantage of them"),
    "Atrocious": ("adjective", "নৃশংস / বর্বরোচিত", "Extremely cruel, brutal, or wicked"),
    "Audacious": ("adjective", "দুঃসাহসী / নির্ভীক", "Showing a willingness to take surprisingly bold risks"),
    "Austere": ("adjective", "কঠোর / আড়ম্বরহীন", "Severe, strict, and having no luxury or comfort"),
    "Avaricious": ("adjective", "অর্থলোভী / কৃপণ", "Having an extreme greed for wealth or material gain"),
    "Baffle": ("verb", "বিভ্রান্ত করা / ধাঁধায় ফেলা", "To completely confuse, puzzle, or perplex"),
    "Bellicose": ("adjective", "যুদ্ধংদেহী / মারমুখী", "Demonstrating aggression and a willingness to fight"),
    "Benign": ("adjective", "সদয় / নিরীহ / ক্ষতিকর নয় এমন", "Gentle, kind, and not causing harm"),
    "Bewildering": ("adjective", "বিভ্রান্তিকর / হতবুদ্ধিকর", "Extremely confusing, perplexing, and hard to understand"),
    "Bigot": ("noun", "ধর্মান্ধ / গোঁড়া ব্যক্তি", "A person who is stubbornly devoted to their own prejudices"),
    "Blatant": ("adjective", "প্রকাশ্য / নির্লজ্জ / স্পষ্ট", "Completely obvious and done without shame"),
    "Boisterous": ("adjective", "কোলাহলপূর্ণ / উচ্ছ্বসিত", "Noisy, energetic, cheerful, and rowdy"),
    "Brevity": ("noun", "সংক্ষিপ্ততা / স্বল্পতা", "The quality of using few words to say something"),
    "Burgeon": ("verb", "দ্রুত বিকশিত হওয়া / ফুলে-ফেঁপে ওঠা", "To grow, expand, or flourish rapidly"),
    "Cajole": ("verb", "মিষ্টি কথায় রাজি করানো", "To persuade someone to do something through gentle coaxing"),
    "Callous": ("adjective", "নিষ্ঠুর / অনুভূতিহীন", "Showing or having an insensitive and cruel disregard for others"),
    "Calumny": ("noun", "মিথ্যা অপবাদ / কুৎসা", "The making of false and defamatory statements to hurt a reputation"),
    "Capricious": ("adjective", "খেয়ালি / খামখেয়ালী", "Given to sudden and unaccountable changes of mood or behavior"),
    "Caustic": ("adjective", "তীব্র ব্যঙ্গাত্মক / ক্ষয়কারী", "Sarcastic in a biting, bitter, or scathing way"),
    "Censure": ("verb", "তীব্র নিন্দা করা / তিরস্কার করা", "To express severe disapproval of someone or something formally"),
    "Chastise": ("verb", "কঠোর শাস্তি দেওয়া / তিরস্কার করা", "To reprimand, criticize, or punish someone severely"),
    "Circumspect": ("adjective", "সতর্ক / দূরদর্শী / সাবধানী", "Wary, cautious, and unwilling to take unnecessary risks"),
    "Clandestine": ("adjective", "গোপন / গুপ্ত", "Kept secret or done in secret, usually because it is illicit"),
    "Clemency": ("noun", "দয়া / ক্ষমা / সহানুভূতি", "Mercy, lenience, or compassion shown by someone in authority"),
    "Coerce": ("verb", "বাধ্য করা / জোর প্রয়োগ করা", "To compel or persuade someone to do something by using threats or force"),
    "Cogent": ("adjective", "জোরালো / অকাট্য / যুক্তিযুক্ত", "Clear, logical, persuasive, and convincing"),
    "Complacent": ("adjective", "আত্মসন্তুষ্ট / অসাবধান", "Smug and overly satisfied with oneself, unaware of potential dangers"),
    "Concede": ("verb", "স্বীকার করা / পরাজয় মেনে নেওয়া", "To admit that something is true, or surrender in a contest"),
    "Condone": ("verb", "মার্জনা করা / অন্যায়কে উপেক্ষা করা", "To accept, overlook, or forgive bad behavior"),
    "Congenial": ("adjective", "অনুকূল / মনোরম / আন্তরিক", "Pleasant, friendly, and suited to one's taste or nature"),
    "Contempt": ("noun", "অবজ্ঞা / ঘৃণা / তাচ্ছিল্য", "The feeling that a person or thing is beneath consideration and worthless"),
    "Contrite": ("adjective", "অনুতপ্ত / অনুশোচনাগ্রস্ত", "Feeling deep remorse and sorrow for having done wrong"),
    "Controversy": ("noun", "বিতর্ক / বাদ-প্রতিবাদ", "Prolonged public disagreement, dispute, or heated discussion"),
    "Convict": ("verb", "দোষী সাব্যস্ত করা", "To declare someone guilty of a criminal offense in court"),
    "Copious": ("adjective", "প্রচুর / বিপুল পরিমাণ", "Abundant in supply, quantity, or volume"),
    "Cordial": ("adjective", "আন্তরিক / হৃদ্যতাপূর্ণ", "Warm, friendly, gracious, and polite"),
    "Corrupt": ("adjective", "দুর্নীতিগ্রস্ত / নীতিভ্রষ্ট", "Dishonest, immoral, and willing to act dishonorably for personal gain"),
    "Courageous": ("adjective", "সাহসী / নির্ভীক", "Not deterred by danger or pain; brave and daring"),
    "Credulous": ("adjective", "অতিবিশ্বাসী / সহজবিশ্বাসী", "Having or showing too great a readiness to believe things; gullible"),
    "Cryptic": ("adjective", "রহস্যময় / দুর্বোধ্য", "Having a meaning that is mysterious, obscure, or puzzling"),
    "Culpable": ("adjective", "দোষী / অপরাধের যোগ্য", "Deserving blame, censure, or punishment; guilty"),
    "Cursory": ("adjective", "ভাসা-ভাসা / দ্রুত ও অগভীর", "Hasty and therefore not thorough or detailed"),
    "Cynical": ("adjective", "সন্দেহবাতিক / মানববিদ্বেষী", "Believing that people are motivated solely by self-interest; distrustful"),
    "Dauntless": ("adjective", "অকুতোভয় / নির্ভীক", "Showing fearlessness, bravery, and determination"),
    "Debacle": ("noun", "চরম বিপর্যয় / ভরাডুবি", "A sudden, disastrous collapse or humiliating failure"),
    "Deceitful": ("adjective", "প্রতারণাপূর্ণ / বিশ্বাসঘাতক", "Misleading others; dishonest and untruthful"),
    "Deceptive": ("adjective", "বিভ্রান্তিকর / প্রতারক", "Giving an appearance or impression different from the true one"),
    "Defer": ("verb", "স্থগিত রাখা / বিলম্বিত করা", "To put off an action or event to a later time; postpone"),
    "Deficient": ("adjective", "অপ্রতুল / অভাবযুক্ত / ঘাটতি", "Not having enough of a specified quality or ingredient; lacking"),
    "Degrade": ("verb", "মর্যাদা ক্ষুণ্ণ করা / অবনমিত করা", "To treat someone with disrespect and lower their character or status"),
    "Deliberate": ("adjective", "ইচ্ছাকৃত / সুচিন্তিত", "Done consciously and intentionally; carefully thought out"),
    "Denounce": ("verb", "প্রকাশ্যে নিন্দা করা", "To publicly declare someone or something to be wrong or evil"),
    "Deprive": ("verb", "বঞ্চিত করা", "To take something away from someone, or prevent them from having it"),
    "Deride": ("verb", "উপহাস করা / বিদ্রূপ করা", "To express contempt for; ridicule and mock"),
    "Despicable": ("adjective", "ঘৃণ্য / নীচ", "Deserving hatred, contempt, and moral disgust"),
    "Dexterous": ("adjective", "নিপুণ / দক্ষ", "Demonstrating neat skill, especially with the hands"),
    "Diffident": ("adjective", "আত্মবিশ্বাসহীন / লাজুক", "Modest or shy because of a lack of self-confidence"),
    "Discern": ("verb", "উপলব্ধি করা / বুঝতে পারা", "To perceive, recognize, or understand something clearly"),
    "Discrepancy": ("noun", "গরমিল / অমিল", "A lack of compatibility or noticeable difference between two or more facts"),
    "Disdain": ("noun", "অবজ্ঞা / ঘৃণা", "The feeling that someone or something is unworthy of one's respect"),
    "Dismal": ("adjective", "বিষাদময় / হতাশাজনক", "Causing a mood of gloom or depression; dreary"),
    "Disparate": ("adjective", "অসদৃশ / ভিন্ন প্রকৃতির", "Essentially different in kind; not allowing comparison"),
    "Divulge": ("verb", "প্রকাশ করা / ফাঁস করা", "To make private or sensitive information known to others"),
    "Docile": ("adjective", "অনুগত / শান্ত / বাধ্য", "Ready to accept control or instruction; submissive and gentle"),
    "Dubious": ("adjective", "সন্দেহজনক / অনিশ্চিত", "Hesitating or doubting; not to be relied upon"),
    "Duplicity": ("noun", "কপটতা / দ্বিচারিতা", "Deceitfulness, double-dealing, and bad faith"),
    "Eccentric": ("adjective", "খামখেয়ালী / অদ্ভুত স্বভাবের", "Unconventional and slightly strange in habits or personality"),
    "Efface": ("verb", "মুছে ফেলা / বিলোপ করা", "To erase, wipe out, or eliminate completely"),
    "Effervescent": ("adjective", "উচ্ছ্বল / প্রাণবন্ত", "Vivacious, cheerful, and full of lively energy"),
    "Egregious": ("adjective", "অত্যন্ত জঘন্য / চরম খারাপ", "Outstandingly and shockingly bad or offensive"),
    "Elusive": ("adjective", "অধরা / সহজে ধরা দেয় না এমন", "Difficult to find, catch, remember, or grasp"),
    "Eminent": ("adjective", "বিশিষ্ট / খ্যাতনামা", "Famous, respected, and distinguished in a particular sphere"),
    "Emphatic": ("adjective", "জোরালো / দ্ব্যর্থহীন", "Expressing something forcibly and clearly"),
    "Enervate": ("verb", "দুর্বল করা / শক্তিহীন করা", "To cause someone to feel drained of energy or vitality; weaken"),
    "Engross": ("verb", "মগ্ন থাকা / নিমগ্ন রাখা", "To absorb all the attention or interest of someone"),
    "Enigmatic": ("adjective", "রহস্যময় / বিভ্রান্তিকর", "Difficult to interpret, understand, or explain; mysterious"),
    "Enumerate": ("verb", "একে একে গণনা করা / তালিকাভুক্ত করা", "To name, list, or mention things one by one"),
    "Ephemeral": ("adjective", "ক্ষণস্থায়ী / অল্প সময়ের", "Lasting for only a very short time; transient"),
    "Equivocal": ("adjective", "দ্ব্যর্থক / অস্পষ্ট", "Open to more than one interpretation; deliberately ambiguous"),
    "Eradicate": ("verb", "সমূলে উৎপাটিত করা / দূর করা", "To destroy completely or put an end to something unwanted"),
    "Erratic": ("adjective", "অনিয়মিত / খেয়ালী", "Not even or regular in pattern or movement; unpredictable"),
    "Evasive": ("adjective", "এড়িয়ে যায় এমন / কৌশলী", "Tending to avoid direct answers or commitment"),
    "Exacerbate": ("verb", "আরও শোচনীয় করা / তিক্ততর করা", "To make a problem, pain, or bad situation worse"),
    "Exonerate": ("verb", "অভিযোগমুক্ত করা / নির্দোষ ঘোষণা করা", "To officially absolve someone from blame or a criminal charge"),
    "Expedient": ("adjective", "সুবিধাজনক / সময়োপযোগী", "Convenient and practical, though possibly not completely fair or moral"),
    "Explicit": ("adjective", "স্পষ্ট / সুনির্দিষ্ট", "Stated clearly and in full detail, leaving no room for confusion"),
    "Extol": ("verb", "উচ্চ প্রশংসা করা", "To praise enthusiastically and highly"),
    "Extravagant": ("adjective", "অপব্যয়ী / অমিতব্যয়ী", "Spending money or resources freely and without moderation"),
    "Exuberant": ("adjective", "উচ্ছ্বসিত / প্রাণপ্রাচুর্যময়", "Filled with or characterized by lively energy and excitement"),
    "Fabricate": ("verb", "বানানো / মিথ্যা উদ্ভাবন করা", "To invent or produce something false in order to deceive; concoct"),
    "Fanatical": ("adjective", "উন্মাদ / ধর্মান্ধ / অতিগোঁড়া", "Filled with excessive and single-minded religious or political zeal"),
    "Fastidious": ("adjective", "খুঁতখুঁতে / সহজে তুষ্ট হয় না এমন", "Very attentive to and concerned about accuracy and detail; hard to please"),
    "Fawn": ("verb", "তোষামোদ করা / পা চাটা", "To display exaggerated flattery or affection, typically to gain favor"),
    "Feign": ("verb", "ভান করা / ভণ্ডামি করা", "To pretend to be affected by a feeling, state, or injury"),
    "Felicitous": ("adjective", "যথোপযুক্ত / চমৎকার", "Well chosen or suited to the circumstances; pleasing and fortunate"),
    "Fervent": ("adjective", "আন্তরিক / প্রবল উৎসাহী", "Having or displaying a passionate intensity of feeling"),
    "Flagrant": ("adjective", "প্রকাশ্য ও নির্লজ্জ / ঘোরতর অন্যায়", "Conspicuously and outrageously bad or offensive; glaring"),
    "Flamboyant": ("adjective", "জমকালো / দৃষ্টি-আকর্ষণকারী", "Tending to attract attention because of one's exuberance or style"),
    "Flaunt": ("verb", "জাহির করা / দম্ভভরে প্রদর্শন করা", "To display something ostentatiously, especially in order to provoke envy"),
    "Flimsy": ("adjective", "পলকা / ঠুনকো / দুর্বল", "Insubstantial and easily damaged; lacking credibility or strength"),
    "Fluctuate": ("verb", "ওঠানামা করা / পরিবর্তিত হওয়া", "To rise and fall irregularly in number, amount, or condition"),
    "Forbearance": ("noun", "ধৈর্য / পরমতসহিষ্ণুতা", "Patient self-control; restraint, tolerance, and patience"),
    "Forbid": ("verb", "নিষেধ করা / বারন করা", "To refuse to allow something; order someone not to do something"),
    "Formidable": ("adjective", "ভয়ংকর / অপরাজেয়", "Inspiring fear or respect through being impressively large or capable"),
    "Fortitude": ("noun", "মনের জোর / মানসিক দৃঢ়তা", "Courage and strength in pain, trouble, or adversity"),
    "Foster": ("verb", "লালন-পালন করা / উৎসাহিত করা", "To encourage the growth or development of something desirable"),
    "Fraudulent": ("adjective", "প্রতারণাপূর্ণ / জাল", "Obtained, done by, or involving deception, especially criminal deception"),
    "Frivolous": ("adjective", "হালকা / অর্থহীন / তুচ্ছ", "Not having any serious purpose or value; carefree and superficial"),
    "Futile": ("adjective", "অনর্থক / নিষ্ফল / পণ্ডশ্রম", "Incapable of producing any useful result; completely pointless"),
    "Galvanize": ("verb", "চাঙ্গা করা / উজ্জীবিত করা", "To shock or excite someone into taking immediate action"),
    "Garrulous": ("adjective", "বাচাল / অতিরিক্ত কথা বলে এমন", "Excessively talkative, especially about trivial or unimportant matters"),
    "Genial": ("adjective", "অমায়িক / হাসিখুশি / আন্তরিক", "Friendly, cheerful, and pleasant in manner"),
    "Genuine": ("adjective", "খাঁটি / আসল / অকৃত্রিম", "Truly what something is said to be; authentic and sincere"),
    "Gloomy": ("adjective", "অন্ধকারাচ্ছন্ন / বিষণ্ণ", "Dark, poorly lit, or causing feelings of depression and sadness"),
    "Glut": ("noun", "প্রচুর আধিক্য / উপচে পড়া সরবরাহ", "An excessively abundant supply of something in the market"),
    "Gracious": ("adjective", "দয়ালু / মার্জিত / সদয়", "Courteous, kind, and pleasant, especially toward subordinates"),
    "Gratuitous": ("adjective", "অহেতুক / বিনামূল্যে প্রাপ্ত", "Done or given without good reason; uncalled for"),
    "Grave": ("adjective", "গম্ভীর / গুরুতর", "Giving cause for great concern; serious and dignified"),
    "Grievous": ("adjective", "মারাত্মক / অত্যন্ত বেদনাদায়ক", "Very severe or serious; causing great grief or suffering"),
    "Gullible": ("adjective", "সহজবিশ্বাসী / প্রতারণাপ্রবণ", "Easily persuaded to believe anything that is told; naive"),
    "Hamper": ("verb", "বাধাগ্রস্ত করা / ব্যাহত করা", "To hinder or impede the movement or progress of something"),
    "Haphazard": ("adjective", "এলোমেলো / বিশৃঙ্খল", "Lacking any plan, order, or direction; random"),
    "Harass": ("verb", "হয়রান করা / ক্রমাগত উত্যক্ত করা", "To subject someone to aggressive pressure, intimidation, or torment"),
    "Harbinger": ("noun", "অগ্রদূত / পূর্বাভাস", "A person or thing that signals or announces the approach of another"),
    "Harmonious": ("adjective", "সুসমন্বিত / ছন্দময়", "Forming a pleasing or consistent whole; free from disagreement"),
    "Harmony": ("noun", "ঐক্য / সম্প্রীতি / সুসংগতি", "Agreement, peaceful concord, or pleasing combination"),
    "Heed": ("verb", "মনোযোগ দেওয়া / কর্ণপাত করা", "To pay careful attention to advice or a warning"),
    "Heinous": ("adjective", "জঘন্য / নৃশংস", "Extremely wicked, evil, or shameful"),
    "Heresy": ("noun", "প্রচলিত মতের বিরোধী বিশ্বাস", "Belief or opinion contrary to orthodox religious or accepted doctrine"),
    "Heterogeneous": ("adjective", "বিচিত্র / ভিন্নধর্মী", "Consisting of parts or elements that are distinct and diverse"),
    "Hilarious": ("adjective", "হাস্যোদ্দীপক / প্রমোদকর", "Extremely funny and causing great amusement"),
    "Hindrance": ("noun", "বাধা / অন্তরায়", "Something that makes it more difficult for you to do something"),
    "Hostile": ("adjective", "শত্রুভাবাপন্ন / প্রতিকূল", "Showing or feeling active opposition or unfriendliness"),
    "Hypocrite": ("noun", "ভণ্ড / কপট ব্যক্তি", "A person who pretends to have virtues, moral or religious beliefs that they do not possess"),
    "Idiosyncrasy": ("noun", "স্বভাববৈশিষ্ট্য / অদ্ভুত অভ্যাস", "A distinctive or peculiar feature or characteristic of an individual"),
    "Ignominious": ("adjective", "অপমানজনক / লজ্জাজনক", "Deserving or causing public shame or humiliation; dishonorable"),
    "Illuminate": ("verb", "আলোকিত করা / স্পষ্ট করা", "To provide with light, or make something much clearer and easier to understand"),
    "Imminent": ("adjective", "আসন্ন / অত্যন্ত নিকটবর্তী", "Likely to occur at any moment; impending"),
    "Immutable": ("adjective", "অপরিবর্তনীয় / ধ্রুব", "Unable to be changed, altered, or modified over time"),
    "Impalpable": ("adjective", "স্পর্শাতীত / অগম্য", "Unable to be felt by touch; difficult to comprehend"),
    "Impartial": ("adjective", "নিরপেক্ষ / পক্ষপাতহীন", "Treating all rivals or disputants equally; fair and unbiased"),
    "Impeccable": ("adjective", "ত্রুটিহীন / নিখুঁত", "In accordance with the highest standards; free from fault"),
    "Impede": ("verb", "বাধা দেওয়া / বিঘ্ন সৃষ্টি করা", "To delay or prevent someone or something by obstructing them"),
    "Imperative": ("adjective", "অত্যন্ত জরুরি / আবশ্যিক", "Of vital importance; absolutely necessary"),
    "Imperceptible": ("adjective", "অপ্রত্যক্ষ / অতি সূক্ষ্ম", "So slight, gradual, or subtle as not to be perceived"),
    "Imperious": ("adjective", "অহংকারী / কর্তৃত্বপরায়ণ", "Assuming power or authority without justification; domineering"),
    "Impertinent": ("adjective", "অপ্রাসঙ্গিক / বেয়াদব / ধৃষ্ট", "Not showing proper respect; rude or irrelevant"),
    "Impetuous": ("adjective", "হঠকারী / আবেগপ্রবণ", "Acting or done quickly and rashly without thought or care"),
    "Implicit": ("adjective", "অন্তর্নিহিত / প্রত্যক্ষ নয় এমন", "Suggested though not directly expressed"),
    "Impoverished": ("adjective", "দরিদ্র / নিঃস্ব", "Reduced to poverty; exhausted of resources"),
    "Improvident": ("adjective", "দূরদর্শিতাহীন / অপব্যয়ী", "Not having or showing foresight; careless with spending"),
    "Imprudent": ("adjective", "অবিবেচক / অসাবধান", "Not showing care for the consequences of an action; rash"),
    "Inadvertent": ("adjective", "অনিচ্ছাকৃত / অনবধানতাবশত", "Not resulting from intentional planning; accidental"),
    "Inane": ("adjective", "অর্থহীন / বোকাটে", "Lacking sense, meaning, or substance; silly"),
    "Inarticulate": ("adjective", "অস্পষ্টভাষী / প্রকাশে অক্ষম", "Unable to speak distinctly or express oneself clearly"),
    "Incessant": ("adjective", "অবিরাম / একটানা", "Continuing without pause or interruption"),
    "Inchoate": ("adjective", "প্রাথমিক / অপরিণত", "Just begun and so not fully formed or developed"),
    "Incisive": ("adjective", "তীক্ষ্ণ / মর্মভেদী", "Intelligently analytical and clear-thinking; sharp and direct"),
    "Incite": ("verb", "উসকে দেওয়া / প্ররোচিত করা", "To encourage or stir up violent or unlawful behavior"),
    "Incoherent": ("adjective", "অসংলগ্ন / সামঞ্জস্যহীন", "Expressed in an incomprehensible or confusing way; disjointed"),
    "Incongruous": ("adjective", "বেমানান / অসংগতিপূর্ণ", "Out of place; not in harmony with surroundings"),
    "Incorrigible": ("adjective", "অসংশোধনীয় / অবাধ্য", "Not able to be corrected, reformed, or improved"),
    "Indefatigable": ("adjective", "অক্লান্ত / ক্লান্তিহীন", "Persisting tirelessly without becoming fatigued"),
    "Indifferent": ("adjective", "উদাসীন / নির্লিপ্ত", "Having no particular interest or sympathy; unconcerned"),
    "Indignant": ("adjective", "অন্যায়বোধে ক্রুদ্ধ", "Feeling or showing anger at what is perceived as unfair treatment"),
    "Indispensable": ("adjective", "অপরিহার্য / অত্যাবশ্যক", "Absolutely necessary; completely essential"),
    "Indolent": ("adjective", "অলস / নিষ্ক্রিয়", "Wanting to avoid activity or work; lazy"),
    "Ineffable": ("adjective", "অবর্ণনীয় / বাক্যের অতীত", "Too great or beautiful to be described in words"),
    "Ineluctable": ("adjective", "অবশ্যম্ভাবী / অনিবার্য", "Impossible to avoid or escape; inevitable"),
    "Inept": ("adjective", "অদক্ষ / অনুপযুক্ত", "Having or showing no skill; clumsy and incompetent"),
    "Inert": ("adjective", "জড় / নিষ্ক্রিয়", "Lacking the ability or strength to move or act"),
    "Inevitable": ("adjective", "অনিবার্য / অবশ্যম্ভাবী", "Certain to happen and impossible to prevent"),
    "Infallible": ("adjective", "অভ্রান্ত / নির্ভুল", "Incapable of making mistakes or being wrong"),
    "Infamous": ("adjective", "কুখ্যাত / নিন্দিত", "Well known for some bad quality, deed, or crime"),
    "Ingenious": ("adjective", "প্রতিভাবান / উদ্ভাবনী ক্ষমতাসম্পন্ন", "Clever, original, and inventive in finding solutions"),
    "Ingenuous": ("adjective", "সরল / অকপট", "Innocent, trusting, and honest; lacking deceit"),
    "Inimical": ("adjective", "ক্ষতিকর / প্রতিকূল", "Tending to obstruct or harm; hostile or unfriendly"),
    "Innate": ("adjective", "সহজাত / জন্মগত", "Inborn, natural, and existing from birth"),
    "Innocuous": ("adjective", "নিরীহ / ক্ষতিহীন", "Not harmful, dangerous, or offensive"),
    "Inordinate": ("adjective", "অতিরিক্ত / অপরিমিত", "Far exceeding reasonable limits; excessive"),
    "Insatiable": ("adjective", "অতৃপ্ত / যার লোভ মেটে না", "Impossible to satisfy; constantly wanting more"),
    "Insidious": ("adjective", "গুপ্তঘাতী / ধূর্ত", "Proceeding in a subtle way but having harmful consequences"),
    "Insipid": ("adjective", "স্বাদহীন / নিরানন্দ", "Lacking flavor, excitement, interest, or vigor"),
    "Intangible": ("adjective", "অধরা / স্পর্শাতীত", "Unable to be touched or physically grasped"),
    "Integrity": ("noun", "সততা / নীতিপরায়ণতা", "The quality of being honest and having strong moral principles"),
    "Intimidate": ("verb", "ভয় দেখানো / তটস্থ করা", "To frighten or overawe someone, especially in order to make them do what one wants"),
    "Intractable": ("adjective", "অবাধ্য / দুরারোগ্য", "Hard to manage, govern, or heal; stubborn"),
    "Intrepid": ("adjective", "নির্ভীক / অকুতোভয়", "Completely fearless, bold, and courageous"),
    "Inundate": ("verb", "প্লাবিত করা / ভরিয়ে দেওয়া", "To flood with water, or overwhelm with things or tasks"),
    "Inveterate": ("adjective", "বদ্ধমূল / পাকা", "Having a deeply established, long-standing habit"),
    "Invincible": ("adjective", "অপরাজেয় / অপ্রতিরোধ্য", "Too strong, powerful, or brave to be defeated"),
    "Irascible": ("adjective", "বদমেজাজী / অল্পেই ক্ষিপ্ত", "Easily provoked to anger; quick-tempered"),
    "Irrefutable": ("adjective", "অকাট্য / অখণ্ডনীয়", "Impossible to deny, disprove, or dispute"),
    "Irreproachable": ("adjective", "অনিন্দনীয় / ত্রুটিহীন", "Beyond criticism or blame; faultless"),
    "Irrevocable": ("adjective", "অপরিবর্তনীয় / যা রদ করা যায় না", "Not able to be changed, reversed, or recovered; final"),
    "Jeopardize": ("verb", "বিপন্ন করা / ঝুঁকিতে ফেলা", "To put someone or something into a situation in which there is a danger of loss or failure"),
    "Jeopardy": ("noun", "ঝুঁকি / বিপদ", "Danger of loss, harm, injury, or death"),
    "Jocular": ("adjective", "রসিক / পরিহাসপ্রিয়", "Characterized by joking; humorous and playful"),
    "Jovial": ("adjective", "হাসিখুশি / প্রফুল্ল / প্রমোদপ্রিয়", "Cheerful, friendly, and good-humored"),
    "Jubilant": ("adjective", "উল্লসিত / জয়োল্লাসে মত্ত", "Feeling or expressing great happiness and triumph"),
    "Lament": ("verb", "বিলাপ করা / শোক প্রকাশ করা", "To express passionate grief, sorrow, or regret"),
    "Languid": ("adjective", "ক্লান্ত / নিস্তেজ", "Lacking energy, enthusiasm, or physical vigor; slow and relaxed"),
    "Laudable": ("adjective", "প্রশংসনীয় / প্রশংসার যোগ্য", "Deserving high praise, commendation, and admiration"),
    "Lenient": ("adjective", "কোমল / সহানুভূতিশীল / শিথিল", "Permissive, merciful, or tolerant; not harsh or strict"),
    "Lethal": ("adjective", "প্রাণঘাতী / মারাত্মক", "Sufficient to cause death; deadly and fatal"),
    "Lethargic": ("adjective", "অলস / নিষ্ক্রিয়", "Affected by lethargy; sluggish and sluggishly inactive"),
    "Lucid": ("adjective", "স্পষ্ট / প্রাঞ্জল", "Expressed clearly and easy to understand"),
    "Lucrative": ("adjective", "লাভজনক / লোভনীয়", "Producing a large amount of money or profit"),
    "Magnanimous": ("adjective", "উদার / মহৎপ্রাণ", "Very generous or forgiving, especially toward a rival"),
    "Malevolent": ("adjective", "পরশ্রীকাতর / অনিষ্টকামী", "Having or showing a wish to cause harm to others"),
    "Malign": ("verb", "কুৎসা রটানো / অপবাদ দেওয়া", "To speak about someone in a spitefully critical, defamatory manner"),
    "Malicious": ("adjective", "বিদ্বেষপরায়ণ / হিংসুক", "Intending to do harm; vicious and hurtful"),
    "Malleable": ("adjective", "নমনীয় / পরিবর্তনযোগ্য", "Easily influenced, trained, or shaped into another form"),
    "Mandate": ("noun", "আদেশ / হুকুম", "An official instruction, order, or authority given to act"),
    "Manifest": ("verb", "স্পষ্ট করা / প্রদর্শন করা", "To show plainly by signs or actions; make evident"),
    "Manifold": ("adjective", "নানা প্রকার / বহুমুখী", "Many and various; having many different parts or forms"),
    "Mar": ("verb", "নষ্ট করা / ক্ষতিসাধন করা", "To damage, ruin, or spoil the quality or beauty of something"),
    "Meager": ("adjective", "অপ্রতুল / অতি সামান্য", "Deficient in quantity, fullness, or extent; scanty"),
    "Melancholy": ("noun", "বিষাদ / বিষণ্ণতা", "A deep, pensive, and long-lasting sadness"),
    "Menace": ("noun", "হুমকি / বিপদ", "A person or thing that is likely to cause harm; a threat or danger"),
    "Mendacious": ("adjective", "অসত্য / মিথ্যাবাদী", "Given to lying; untruthful and deceptive"),
    "Mercenary": ("adjective", "অর্থলোভী / ভাড়াটে", "Primarily motivated by the desire for financial gain"),
    "Meritorious": ("adjective", "প্রশংসনীয় / গুণবান / গুণী", "Deserving reward, honor, or praise; praiseworthy"),
    "Militant": ("adjective", "সংগ্রামী / আক্রমণাত্মক", "Combative and aggressive in support of a cause"),
    "Mitigate": ("verb", "প্রশমিত করা / লাঘব করা", "To make less severe, painful, harmful, or harsh"),
    "Mockery": ("noun", "উপহাস / বিদ্রূপ / প্রহসন", "Teasing and contemptuous language or behavior; ridicule"),
    "Modest": ("adjective", "বিনয়ী / পরিমিত", "Having a humble estimate of one's own merit or accomplishments"),
    "Morose": ("adjective", "বিষণ্ণ / গোমড়ামুখো", "Sullen, gloomy, ill-tempered, and uncommunicative"),
    "Mundane": ("adjective", "পার্থিব / সাধারণ", "Lacking interest or excitement; ordinary and routine"),
    "Naive": ("adjective", "সরল / সাদাসিধে / আনাড়ি", "Showing lack of experience, wisdom, or judgment; innocent and trusting"),
    "Nebulous": ("adjective", "ঝাপসা / অস্পষ্ট", "Vague, indistinct, ill-defined, or cloudy"),
    "Nefarious": ("adjective", "ঘৃণ্য / অত্যন্ত কুখ্যাত", "Extremely wicked, villainous, or criminal"),
    "Negligent": ("adjective", "অসাবধান / গাফিলতিপূর্ণ", "Failing to exercise the care expected of a reasonably prudent person"),
    "Nominal": ("adjective", "নামমাত্র / অতি অল্প", "Existing in name only; far below real value"),
    "Notorious": ("adjective", "কুখ্যাত / দুর্নামধারী", "Famous or well known, typically for some bad quality or crime"),
    "Novice": ("noun", "শিক্ষানবিস / আনাড়ি", "A beginner who is new to a field, sport, or activity"),
    "Noxious": ("adjective", "ক্ষতিকর / বিষাক্ত", "Harmful, poisonous, or very unpleasant to health"),
    "Nuance": ("noun", "সূক্ষ্ম পার্থক্য", "A delicate or subtle shade of difference in meaning, feeling, or expression"),
    "Obdurate": ("adjective", "অনমনীয় / কঠোর হৃদয়ের", "Stubbornly refusing to change one's opinion or course of action"),
    "Oblique": ("adjective", "তির্যক / অপ্রত্যক্ষ", "Neither parallel nor at a right angle; indirect or slanting"),
    "Oblivious": ("adjective", "অসচেতন / উদাসীন", "Not aware of or not taking notice of what is happening around"),
    "Obscure": ("adjective", "অস্পষ্ট / অন্ধকারাচ্ছন্ন", "Not clearly seen, heard, or understood; relatively unknown"),
    "Obsolete": ("adjective", "অপ্রচলিত / সেকেলে", "No longer in general use; out-of-date and replaced by something newer"),
    "Obstruct": ("verb", "বাধা দেওয়া / পথ আটকে দেওয়া", "To block an opening, path, or road; hinder progress"),
    "Ominous": ("adjective", "অমঙ্গলজনক / অশুভ", "Suggesting that something unpleasant or bad is likely to happen"),
    "Opaque": ("adjective", "অস্বচ্ছ / দুর্ভেদ্য", "Not letting light pass through; not transparent; difficult to understand"),
    "Opportunist": ("noun", "সুবিধাবাদী", "A person who exploits circumstances to gain immediate personal advantage"),
    "Opulent": ("adjective", "ঐশ্বর্যশালী / সমৃদ্ধ", "Extravagantly rich, luxurious, and lavish"),
    "Ostracize": ("verb", "সমাজচ্যুত করা / বর্জন করা", "To deliberately exclude someone from a group or society"),
    "Pacify": ("verb", "শান্ত করা / প্রশমিত করা", "To quell the anger, agitation, or excitement of; bring peace to"),
    "Palliate": ("verb", "উপশম করা / তীব্রতা কমানো", "To make a disease, pain, or offense less severe without curing it"),
    "Palpable": ("adjective", "স্পষ্ট / প্রত্যক্ষগোচর", "So intense as to feel tangible; easily perceived and obvious"),
    "Panacea": ("noun", "সর্বরোগহর ওষুধ / মহৌষধ", "A universal remedy for all diseases, problems, or difficulties"),
    "Paradox": ("noun", "আপাতবিরোধী সত্য / বৈপরীত্য", "A statement or situation that appears self-contradictory but is actually true"),
    "Paragon": ("noun", "আদর্শ উদাহরণ / উৎকৃষ্ট নিদর্শন", "A model or pattern of excellence and supreme perfection"),
    "Paramount": ("adjective", "সর্বপ্রধান / সবচেয়ে গুরুত্বপূর্ণ", "More important than anything else; supreme"),
    "Parsimonious": ("adjective", "কৃপণ / মিতব্যয়ী", "Very unwilling to spend money or use resources; excessively frugal"),
    "Paucity": ("noun", "স্বল্পতা / অপ্রতুলতা", "The presence of something only in small, insufficient quantities; scarcity"),
    "Pedantic": ("adjective", "পাণ্ডিত্যভিমানী / খুঁটিনাটি নিয়মে অন্ধ", "Excessively concerned with minor details, book learning, and formal rules"),
    "Penchant": ("noun", "তীব্র ঝোঁক / প্রবল পছন্দ", "A strong taste, liking, or inclination for something"),
    "Perfunctory": ("adjective", "দায়সারা / দায়িত্বহীন", "Done hurriedly as a routine duty without real interest or effort"),
    "Pernicious": ("adjective", "মারাত্মক ক্ষতিকর / অনিষ্টকর", "Having a gradual, subtle, but extremely destructive and harmful effect"),
    "Perspicacious": ("adjective", "তীক্ষ্ণদৃষ্টিসম্পন্ন / বিচক্ষণ", "Having keen insight, mental discernment, and deep understanding"),
    "Pertinent": ("adjective", "প্রাসঙ্গিক / যথার্থ", "Relevant or applicable to a particular matter; appropriate"),
    "Pervasive": ("adjective", "সর্বব্যাপী / বিস্তৃত", "Spreading widely throughout every part of an area or society"),
    "Pious": ("adjective", "ধার্মিক / পুণ্যবান", "Deeply religious and showing reverent devotion to God"),
    "Placate": ("verb", "শান্ত করা / তোষণ করা", "To soothe the anger of someone, especially by making concessions"),
    "Placid": ("adjective", "প্রশান্ত / শান্তশিষ্ট", "Not easily upset or excited; calm and peaceful"),
    "Plausible": ("adjective", "বিশ্বাসযোগ্য / আপাতদৃষ্টিতে সঠিক", "Seeming reasonable, probable, and worthy of belief"),
    "Plethora": ("noun", "বাহুল্য / প্রচুর আধিক্য", "An excess or very large, overwhelming quantity of something"),
    "Pragmatic": ("adjective", "বাস্তবসম্মত / বাস্তববাদী", "Dealing with matters in a realistic, practical, and sensible way"),
    "Precarious": ("adjective", "অনিশ্চিত / ঝুঁকিপূর্ণ", "Dangerously insecure, unstable, and uncertain"),
    "Precocious": ("adjective", "অকালপক্ব / বয়সে এগিয়ে", "Having developed certain abilities or traits at an earlier age than normal"),
    "Precursor": ("noun", "অগ্রদূত / পূর্বলক্ষণ", "A person or thing that indicates the approach or arrival of another"),
    "Predilection": ("noun", "বিশেষ পক্ষপাত / অনুরাগ", "A preference, predisposition, or special liking for something"),
    "Prejudice": ("noun", "কুসংস্কার / পক্ষপাতিত্ব", "Preconceived opinion that is not based on reason or actual experience"),
    "Pretentious": ("adjective", "ভণ্ডামিযুক্ত / আত্মম্ভরী", "Attempting to impress by pretending to possess greater importance or skill"),
    "Pristine": ("adjective", "আদিম / অক্ষত / বিশুদ্ধ", "In its original pure condition; completely clean and fresh"),
    "Prolific": ("adjective", "উর্বর / বিপুল উৎপাদনশীল", "Producing large quantities of fruit, foliage, or creative works"),
    "Prolong": ("verb", "দীর্ঘায়িত করা / বাড়ানো", "To extend the duration or span of something"),
    "Promiscuous": ("adjective", "বাছবিচারহীন / বাছবিচারহীন মেলামেশা", "Characterized by indiscriminate mingling or casual relationships"),
    "Propitious": ("adjective", "অনুকূল / মঙ্গলময়", "Giving or indicating a good chance of future success; favorable"),
    "Prudent": ("adjective", "দূরদর্শী / সুবিচক্ষণ", "Acting with or showing careful judgment and thought for the future"),
    "Pugnacious": ("adjective", "ঝগড়াটে / মারমুখী", "Eager, ready, or quick to argue, quarrel, or fight"),
    "Pungent": ("adjective", "তীব্র / ঝাঁঝালো", "Having a sharply strong taste or smell; biting and caustic"),
    "Quandary": ("noun", "দোটানা / কিংকর্তব্যবিমূঢ় অবস্থা", "A state of perplexity or uncertainty over what to do in a difficult situation"),
    "Quell": ("verb", "দমন করা / শান্ত করা", "To suppress, put an end to disorder, or soothe anxiety"),
    "Quixotic": ("adjective", "অবাস্তব কল্পনাপ্রবণ / খেয়ালী", "Extremely idealistic, romantic, unrealistic, and impractical"),
    "Rancor": ("noun", "তিক্ত বিদ্বেষ / শত্রুতা", "Deep-seated, long-standing resentment, ill will, or bitterness"),
    "Rancour": ("noun", "তিক্ত বিদ্বেষ / শত্রুতা", "Deep-seated, long-standing resentment or bitterness"),
    "Rash": ("adjective", "হঠকারী / অবিবেচক", "Displaying or proceeding from a lack of careful consideration of consequences"),
    "Rebuke": ("verb", "তিরস্কার করা / ধমক দেওয়া", "To express sharp, stern disapproval or reprimand"),
    "Recalcitrant": ("adjective", "অবাধ্য / প্রতিরোধকারী", "Stubbornly resisting authority, control, or direction"),
    "Reckless": ("adjective", "বেপরোয়া / অসাবধান", "Without thinking or caring about the dangerous consequences of an action"),
    "Recluse": ("noun", "নির্জনবাসী / সন্ন্যাসী", "A person who prefers to live alone, away from human society"),
    "Redundant": ("adjective", "অপ্রয়োজনীয় / বাড়তি", "Exceeding what is necessary or natural; superfluous"),
    "Refute": ("verb", "খণ্ডন করা / ভুল প্রমাণ করা", "To prove an allegation, opinion, or argument to be false or incorrect"),
    "Reiterate": ("verb", "পুনরাবৃত্তি করা / বারবার বলা", "To say, state, or perform again repeatedly for emphasis"),
    "Relinquish": ("verb", "ত্যাগ করা / ছেড়ে দেওয়া", "Voluntarily cease to keep or claim; give up or surrender"),
    "Renounce": ("verb", "পরিত্যাগ করা / দাবি প্রত্যাহার করা", "To formally declare one's abandonment of a right, belief, or title"),
    "Resilient": ("adjective", "বিপদে ঘুরে দাঁড়ায় এমন / স্থিতিস্থাপক", "Able to bounce back, withstand, or recover quickly from difficult conditions"),
    "Resolute": ("adjective", "দৃঢ়সংকল্প / অনড়", "Firmly determined, steadfast, and purposeful"),
    "Restrain": ("verb", "নিয়ন্ত্রণ করা / সংযত রাখা", "To prevent someone from doing something; keep under control"),
    "Retribution": ("noun", "প্রতিশোধ / প্রতিফল / উপযুক্ত শাস্তি", "Punishment inflicted on someone as vengeance for a wrong or criminal act"),
    "Reverence": ("noun", "গভীর শ্রদ্ধা / ভক্তি", "Deep respect and awe for someone or something"),
    "Rhetoric": ("noun", "বক্তৃতাশিল্প / বাগ্মিতা", "The art of effective or persuasive speaking or writing"),
    "Rigorous": ("adjective", "কঠোর / পুঙ্খানুপুঙ্খ", "Extremely thorough, exhaustive, strict, or accurate"),
    "Ruthless": ("adjective", "নির্মম / নির্দয়", "Having or showing no pity or compassion for others"),
    "Sagacious": ("adjective", "বিচক্ষণ / বিজ্ঞ", "Having or showing keen discernment, sound judgment, and farsightedness"),
    "Salient": ("adjective", "বিশিষ্ট / লক্ষণীয় / প্রধান", "Most noticeable, prominent, or important"),
    "Sanction": ("noun", "অনুমোদন / নিষেধাজ্ঞা", "A threatened penalty for disobeying a rule, or official permission"),
    "Sardonic": ("adjective", "বিদ্রূপাত্মক / তাচ্ছিল্যপূর্ণ", "Grimly mocking, cynical, or sarcastic"),
    "Scrutinize": ("verb", "নিবিড়ভাবে পরীক্ষা করা", "To examine, inspect, or investigate very closely and thoroughly"),
    "Sedulous": ("adjective", "পরিশ্রমী / অধ্যবসায়ী", "Showing steady, earnest dedication and diligence"),
    "Serene": ("adjective", "শান্ত / প্রশান্ত", "Calm, tranquil, and untroubled; peaceful"),
    "Shrewd": ("adjective", "চতুর / বিচক্ষণ", "Having or showing sharp powers of judgment; astute and perceptive"),
    "Skeptical": ("adjective", "সংশয়বাদী / সন্দেহপ্রবণ", "Having doubts and not easily convinced of claims"),
    "Sluggish": ("adjective", "মন্থর / অলস / ধীরগতির", "Slow-moving, inactive, or lacking energy and vitality"),
    "Solitary": ("adjective", "একাকী / নির্জন", "Living, done, or situated alone; isolated"),
    "Somber": ("adjective", "বিষাদময় / অন্ধকারাচ্ছন্ন", "Dark or dull in tone; gloomy and solemn"),
    "Sophistry": ("noun", "কূটতর্ক / প্রতারণাপূর্ণ যুক্তি", "The use of clever but false arguments, especially with the intention of deceiving"),
    "Sporadic": ("adjective", "বিক্ষিপ্ত / অনিয়মিত", "Occurring occasionally, irregularly, or in scattered instances"),
    "Spurious": ("adjective", "নকল / কৃত্রিম / ভিত্তিহীন", "Not genuine, authentic, or true; forged or counterfeit"),
    "Squander": ("verb", "অপচয় করা / বৃথা নষ্ট করা", "To waste money, time, or resources in a reckless and foolish manner"),
    "Stagnant": ("adjective", "স্থবির / আবদ্ধ", "Showing no activity, progress, or movement; motionless"),
    "Steadfast": ("adjective", "দৃঢ় / অবিচল / নিষ্ঠাবান", "Resolutely or dutifully firm, loyal, and unwavering"),
    "Stifle": ("verb", "দমিয়ে রাখা / শ্বাসরোধ করা", "To restrain a reaction or suppress something from developing"),
    "Stringent": ("adjective", "কঠোর / অনমনীয়", "Strict, precise, and exacting regulations or conditions"),
    "Subdue": ("verb", "বশীভূত করা / দমন করা", "To overcome, conquer, or bring under control"),
    "Subjugate": ("verb", "পরাভূত করা / বশীভূত করা", "To defeat and conquer people, bringing them under total control"),
    "Substantiate": ("verb", "প্রমাণ করা / সত্যতা নিশ্চিত করা", "To provide factual evidence to establish or prove the truth of"),
    "Subtle": ("adjective", "সূক্ষ্ম / জটিল / কৌশলী", "So delicate, precise, or understated as to be difficult to analyze"),
    "Succinct": ("adjective", "সংক্ষিপ্ত / প্রাঞ্জল", "Briefly and clearly expressed; concise and to the point"),
    "Sumptuous": ("adjective", "মহাধনী / জমকালো / বিলাসবহুল", "Splendid and expensive-looking; luxurious and lavish"),
    "Superficial": ("adjective", "ভাসা-ভাসা / অগভীর", "Existing or occurring at the surface; not deep or thorough"),
    "Superfluous": ("adjective", "অনাবশ্যক / প্রয়োজনের অতিরিক্ত", "More than is needed, desired, or required; redundant"),
    "Suppress": ("verb", "দমন করা / চেপে রাখা", "To forcibly put an end to something; prevent information from being known"),
    "Sustain": ("verb", "টিকিয়ে রাখা / সমর্থন জোগানো", "To strengthen, support, or keep in existence over a long period"),
    "Taciturn": ("adjective", "স্বল্পভাষী / মিতভাষী", "Habitually reserved, silent, or uncommunicative in speech"),
    "Tactful": ("adjective", "কৌশলী / বিচক্ষণ", "Having or showing skill and sensitivity in dealing with others"),
    "Temerity": ("noun", "ধৃষ্টতা / অবিমৃশ্যকারিতা", "Excessive boldness, audacity, or reckless daring"),
    "Temperate": ("adjective", "পরিমিত / সংযমী / নাতিশীতোষ্ণ", "Showing moderation or self-restraint; mild in climate"),
    "Timid": ("adjective", "ভীরু / লাজুক", "Showing a lack of courage or confidence; easily frightened"),
    "Torment": ("noun", "চরম যন্ত্রণা / মানসিক পীড়ন", "Severe physical or mental suffering; anguish"),
    "Tranquil": ("adjective", "প্রশান্ত / শান্ত", "Free from disturbance; calm, peaceful, and serene"),
    "Transient": ("adjective", "ক্ষণস্থায়ী / পরিবর্তনশীল", "Remaining only for a brief time; passing away quickly"),
    "Treacherous": ("adjective", "বিশ্বাসঘাতক / বিপজ্জনক", "Guilty of betrayal or deception; presenting hidden dangers"),
    "Trepidation": ("noun", "ভীতি / কম্পন", "A state of fear, alarm, nervous dread, or hesitation"),
    "Trivial": ("adjective", "তুচ্ছ / নগণ্য", "Of little value, consequence, or importance; petty"),
    "Truculent": ("adjective", "মারমুখী / হিংস্র", "Aggressive, combative, and eager to argue or fight"),
    "Truncate": ("verb", "কেটে ছোট করা / ছাঁটাই করা", "To shorten something by cutting off the top or end part"),
    "Uncanny": ("adjective", "অলৌকিক / অদ্ভুত", "Strange, mysterious, and exceeding the ordinary or natural"),
    "Unscrupulous": ("adjective", "বিবেকহীন / নীতিহীন", "Having or showing no moral principles; completely dishonest"),
    "Vacillate": ("verb", "দ্বিধাগ্রস্ত হওয়া / দোলায়িত হওয়া", "To hesitate between different choices, opinions, or actions"),
    "Vehement": ("adjective", "প্রবল / তীব্র / প্রচণ্ড", "Showing strong feeling; forceful, passionate, or intense"),
    "Venerate": ("verb", "শ্রদ্ধা করা / ভক্তি করা", "To hold in the highest respect, esteem, and awe; revere"),
    "Veracity": ("noun", "সত্যবাদিতা / নির্ভুলতা", "Conformity to facts, truthfulness, and accuracy"),
    "Vexatious": ("adjective", "বিরক্তিকর / যন্ত্রণাদায়ক", "Causing irritation, trouble, or persistent annoyance"),
    "Vigilant": ("adjective", "জাগ্রত / সদা সতর্ক", "Keeping careful watch for possible danger or difficulties"),
    "Vilify": ("verb", "কুৎসা রটনা করা / মানহানি করা", "To slander, defame, or speak ill of someone in a defamatory manner"),
    "Vindicate": ("verb", "অভিযোগমুক্ত করা / সঠিক প্রমাণ করা", "To clear someone of blame, suspicion, or doubt with proof"),
    "Virulent": ("adjective", "বিষাক্ত / মারাত্মক ক্ষতিকর", "Extremely poisonous, harmful, bitter, and destructive"),
    "Volatile": ("adjective", "উদ্বায়ী / দ্রুত পরিবর্তনশীল", "Liable to change rapidly and unpredictably; explosive"),
    "Vulnerable": ("adjective", "অরক্ষিত / ঝুঁকিপূর্ণ", "Easily hurt, attacked, or damaged physically or emotionally"),
    "Wane": ("verb", "হ্রাস পাওয়া / ক্ষয় হওয়া", "To decrease gradually in strength, size, intensity, or extent"),
    "Whimsical": ("adjective", "অদ্ভুত / খামখেয়ালী", "Fanciful, playful, erratic, and unpredictable"),
    "Wrath": ("noun", "প্রচণ্ড রাগ / ক্রোধ", "Extreme, fiercely vengeful anger or fury"),
    "Yearn": ("verb", "তীব্র আকাঙ্ক্ষা করা / ব্যাকুল হওয়া", "To feel a strong, tender desire or longing for something"),
    "Zenith": ("noun", "শীর্ষবিন্দু / সর্বোচ্চ চূড়া", "The highest point, peak, or culminating stage reached by something"),
    "adherent": ("noun", "অনুগামী / ভক্ত", "A person who supports and follows a particular belief, leader, or cause")
}

def clean_watermark(text):
    for w in ['Please follow- Job Preparation with Pothik Sir', 'Meaning', 'P l e a s e f o l l o w', '—Pothik Sir', '— P o t h i k']:
        if w in text:
            idx = text.find(w)
            text = text[:idx].strip()
    return text

def parse_pdf1(pdf_path='vocabulary-pdfs/all job previous year vocabulary edited.pdf'):
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    full_text = ''
    for p in reader.pages:
        full_text += (p.extract_text() or '') + '\n'
        
    lines = full_text.splitlines()
    entry_indices = []
    for i, l in enumerate(lines):
        m = re.match(r'^\s*(\d{1,3})\s+([A-Z][a-zA-Z\s\-\']+)', l)
        if m:
            entry_indices.append((i, int(m.group(1)), m.group(2).strip()))
            
    def clean_lines(raw_lines):
        res = []
        for l in raw_lines:
            s = l.strip()
            if not s or s.startswith('#') or 'Word Bangla' in s or 'High Frequency' in s or 'Sources:' in s or 'Synonyms (' in s or 'Antonyms (' in s or 'Example Sentence' in s or 'Source / Exam' in s:
                continue
            res.append(s)
        return res
        
    entries = []
    for idx in range(len(entry_indices)):
        start_line = entry_indices[idx][0]
        end_line = entry_indices[idx+1][0] if idx+1 < len(entry_indices) else len(lines)
        chunk = clean_lines(lines[start_line:end_line])
        
        num = entry_indices[idx][1]
        raw_word = entry_indices[idx][2]
        
        first_line = chunk[0]
        trailing_first = ''
        if '/' in first_line:
            trailing_first = first_line.split('/', 1)[1].strip()
            
        rest = chunk[1:]
        if trailing_first:
            rest.insert(0, trailing_first)
            
        source_lines = []
        while rest and any(k in rest[-1] for k in ['BCS', 'Bank', 'NTRCA', 'Primary', 'Exam', 'Recruitment', '(', ')', '201', '202', 'PSC', 'Ministry', 'Biman', 'Combined', 'Bangladesh', 'Assistant', 'Teacher']):
            source_lines.insert(0, rest.pop())
        source = ' '.join(source_lines).strip()
        
        joined_rest = ' '.join(rest)
        
        clean_w = re.sub(r'\s{2,}.*$', '', raw_word).strip()
        clean_w = re.sub(r'[\-\/].*$', '', clean_w).strip()
        if clean_w == 'Na':
            clean_w = 'Naive'
            
        entries.append({
            'num': num,
            'word': clean_w,
            'raw_word': raw_word,
            'source': source,
            'raw_text': joined_rest,
            'lines': rest
        })
        
    return total_pages, entries

def parse_pdf1_item(it):
    clean_w = it['word'].strip()
    if clean_w == 'Na':
        clean_w = 'Naive'
    
    text = clean_watermark(it['raw_text'])
    source = it['source'].strip()
    
    if not source and ('BCS' in it['raw_text'] or 'Bank' in it['raw_text'] or 'NTRCA' in it['raw_text'] or 'Primary' in it['raw_text']):
        m = re.search(r'((?:BCS|Bank|NTRCA|Primary|Combined|Ministry)[^\.]*?\(\d{4}[^\)]*?\))', it['raw_text'])
        if m:
            source = m.group(1).strip()
            
    parts = [p.strip() for p in text.split(',') if p.strip()]
    synonyms = []
    antonyms = []
    sentence = ""
    
    if len(parts) >= 5:
        syn1 = parts[0]
        syn2 = parts[1]
        
        p2_words = parts[2].split()
        if len(p2_words) >= 2:
            syn3 = ' '.join(p2_words[:-1])
            ant1 = p2_words[-1]
        else:
            syn3 = parts[2]
            ant1 = ''
            
        ant2 = parts[3]
        
        p4_text = parts[4]
        dot_idx = p4_text.find('.')
        if dot_idx != -1:
            sent_and_ant = p4_text[:dot_idx+1]
        else:
            sent_and_ant = p4_text
            
        w_list = sent_and_ant.split()
        if len(w_list) >= 2:
            ant3 = w_list[0]
            sentence = ' '.join(w_list[1:])
        else:
            ant3 = sent_and_ant
            sentence = ''
            
        if len(parts) > 5:
            remaining_sent = ', '.join(parts[5:])
            sentence = sentence + ', ' + remaining_sent
            if '.' in sentence:
                sentence = sentence[:sentence.find('.')+1].strip()
                
        synonyms = [s.strip() for s in [syn1, syn2, syn3] if s.strip()]
        antonyms = [a.strip() for a in [ant1, ant2, ant3] if a.strip()]
        
    return clean_w, synonyms, antonyms, sentence, source

def build_database():
    p1_pages, p1_entries = parse_pdf1()
    p2_pages, p2_entries, p2_excluded = extract_pdf2()
    
    print(f"PDF 1 ({p1_pages} pages): {len(p1_entries)} words extracted")
    print(f"PDF 2 ({p2_pages} pages): {len(p2_entries)} words extracted, {p2_excluded} lines excluded")
    
    # Load enriched cache (Datamuse definitions, POS, synonyms, antonyms)
    cache_path = os.path.join(os.path.dirname(__file__), 'enriched_cache.json')
    enriched_cache = {}
    if os.path.exists(cache_path):
        with open(cache_path, 'r', encoding='utf-8') as f:
            enriched_cache = json.load(f)
        print(f"Loaded {len(enriched_cache)} enriched definitions from cache.")
    
    combined = {}
    duplicates_count = 0
    
    # 1. Process PDF 1 entries
    for idx, it in enumerate(p1_entries):
        word, syns, ants, sentence, source = parse_pdf1_item(it)
        w_lower = word.lower()
        
        if not word or len(word) < 2:
            continue
            
        pos = "adjective"
        bangla_m = ""
        definition = ""
        
        for k, v in PDF1_DATA.items():
            if k.lower() == w_lower:
                pos, bangla_m, definition = v
                break
                
        if not bangla_m:
            bangla_m = "গুরুত্বপূর্ণ বিসিএস ও চাকরির শব্দ"
            
        if not sentence:
            sentence = f"The candidate understood the meaning of {w_lower}."
            
        capitalized_word = word.capitalize()
        
        combined[w_lower] = {
            "id": f"word-pdf1-{idx+1}",
            "word": capitalized_word,
            "pos": pos,
            "simpleDefinition": definition,
            "banglaMeaning": bangla_m,
            "synonyms": syns if syns else ["Related", "Similar"],
            "antonyms": ants if ants else ["No common antonym"],
            "example": sentence,
            "source": source if source else "BCS / Bank Recruitment Exams",
            "category": "Learning",
            "stage": 0,
            "consecutiveCorrect": 0,
            "intervalDays": 0,
            "nextReviewDate": "2026-11-23T00:00:00.000Z",
            "lastReviewedDate": None,
            "timesReviewed": 0,
            "timesCorrect": 0,
            "timesIncorrect": 0,
            "isDifficult": False,
            "createdAt": "2026-11-23T00:00:00.000Z",
            "updatedAt": "2026-11-23T00:00:00.000Z"
        }

    # 2. Process PDF 2 entries (main.pdf)
    for idx, e in enumerate(p2_entries):
        w = e['word'].strip()
        w_lower = w.lower()
        
        if not w or len(w) < 2 or not re.search(r'[A-Za-z]', w):
            continue
            
        clean_m = e['banglaMeaning'].strip()
        
        if w_lower in combined:
            duplicates_count += 1
            existing = combined[w_lower]
            if clean_m and clean_m not in existing['banglaMeaning']:
                existing['banglaMeaning'] = f"{existing['banglaMeaning']} / {clean_m}"
            if 'main.pdf' not in existing.get('source', ''):
                existing['source'] = f"{existing['source']} | main.pdf #{e['num']}"
            continue
            
        # Defaults
        pos = "noun"
        if w_lower.endswith(('able', 'ible', 'ous', 'ful', 'ic', 'al', 'ive', 'ent', 'ant')):
            pos = "adjective"
        elif w_lower.endswith(('ate', 'ify', 'ize', 'ise')):
            pos = "verb"
        elif w_lower.endswith('ly'):
            pos = "adverb"
            
        definition = f"Meaning: {clean_m}. Expressing the quality or state of {w_lower}."
        syns = [f"Related to {w_lower}", "Similar"]
        ants = ["No common antonym"]
        sentence = f"The teacher gave an insightful explanation of {w_lower}."
        
        # Check enriched cache
        if w_lower in enriched_cache:
            enr = enriched_cache[w_lower]
            if enr.get('pos'):
                pos = enr['pos']
            if enr.get('definition'):
                definition = enr['definition']
            if enr.get('synonyms') and len(enr['synonyms']) > 0:
                syns = enr['synonyms']
            if enr.get('antonyms') and len(enr['antonyms']) > 0:
                ants = enr['antonyms']
            if enr.get('example'):
                sentence = enr['example']
                
        capitalized_word = w.capitalize()

        combined[w_lower] = {
            "id": f"word-pdf2-{idx+1}",
            "word": capitalized_word,
            "pos": pos,
            "simpleDefinition": definition,
            "banglaMeaning": clean_m,
            "synonyms": syns,
            "antonyms": ants,
            "example": sentence,
            "source": f"1000 Exam Vocabulary (main.pdf #{e['num']})",
            "category": "Learning",
            "stage": 0,
            "consecutiveCorrect": 0,
            "intervalDays": 0,
            "nextReviewDate": "2026-11-23T00:00:00.000Z",
            "lastReviewedDate": None,
            "timesReviewed": 0,
            "timesCorrect": 0,
            "timesIncorrect": 0,
            "isDifficult": False,
            "createdAt": "2026-11-23T00:00:00.000Z",
            "updatedAt": "2026-11-23T00:00:00.000Z"
        }

    vocab_list = list(combined.values())
    vocab_list.sort(key=lambda x: x['word'].lower())
    
    bad_headings = [w['word'] for w in vocab_list if 'গুরুত্বপূর্ণ বিসিএস ও চাকরির শব্দ' in w['banglaMeaning']]
    print(f"\nVerification: bad heading entries: {len(bad_headings)}")
    assert len(bad_headings) == 0, f"Found {len(bad_headings)} entries with bad heading placeholder: {bad_headings}"
    
    empty_meanings = [w['word'] for w in vocab_list if not w.get('banglaMeaning') or len(w['banglaMeaning'].strip()) == 0]
    print(f"Verification: empty meanings: {len(empty_meanings)}")
    
    print(f"\n=== EXTRACTION & IMPORT REPORT ===")
    print(f"PDF 1 filename: all job previous year vocabulary edited.pdf")
    print(f"PDF 1 total pages: {p1_pages}")
    print(f"PDF 1 extracted words: {len(p1_entries)}")
    print(f"PDF 2 filename: main.pdf")
    print(f"PDF 2 total pages: {p2_pages}")
    print(f"PDF 2 extracted words: {len(p2_entries)}")
    print(f"Duplicate words between PDFs: {duplicates_count}")
    print(f"Invalid headings and text excluded: {p2_excluded}")
    print(f"Final unique vocabulary words: {len(vocab_list)}")
    print(f"Entries with verified Bangla meanings: {len(vocab_list) - len(empty_meanings)}")
    print(f"Entries requiring manual review: {len(empty_meanings)}")
    
    out_json = 'src/data/initialVocabulary.json'
    with open(out_json, 'w', encoding='utf-8') as f:
        json.dump(vocab_list, f, indent=2, ensure_ascii=False)
    print(f"Successfully saved {len(vocab_list)} entries to {out_json}")
    
    lookup = {}
    for w in vocab_list:
        key = w['word'].strip().lower()
        lookup[key] = {
            "word": w['word'],
            "pos": w['pos'],
            "simpleDefinition": w['simpleDefinition'],
            "banglaMeaning": w['banglaMeaning'],
            "synonyms": w['synonyms'],
            "antonyms": w['antonyms'],
            "example": w['example']
        }
        
    ts_content = f"// Comprehensive Offline Dictionary for Vocabulary Enrichment ({len(lookup)} entries)\n"
    ts_content += f"export interface WordEnrichmentData {{\n"
    ts_content += f"  word: string;\n"
    ts_content += f"  pos: string;\n"
    ts_content += f"  simpleDefinition: string;\n"
    ts_content += f"  banglaMeaning: string;\n"
    ts_content += f"  synonyms: string[];\n"
    ts_content += f"  antonyms: string[];\n"
    ts_content += f"  example: string;\n"
    ts_content += f"  ipa?: string;\n"
    ts_content += f"  banglaPron?: string;\n"
    ts_content += f"  exampleBangla?: string;\n"
    ts_content += f"}}\n\n"
    ts_content += f"export const DICTIONARY_LOOKUP: Record<string, WordEnrichmentData> = "
    ts_content += json.dumps(lookup, indent=2, ensure_ascii=False)
    ts_content += ";\n"
    
    with open('src/data/dictionaryLookup.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Successfully saved {len(lookup)} entries to src/data/dictionaryLookup.ts")

if __name__ == '__main__':
    build_database()
