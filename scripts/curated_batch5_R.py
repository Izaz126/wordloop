import os
import json

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'audited_vocab_cache.json')

BATCH5_DATA = {
  "raconteur": {
    "word": "Raconteur",
    "pos": "noun",
    "simpleDefinition": "A person who tells anecdotes and stories in a skillful and amusing way.",
    "synonyms": ["Storyteller", "Narrator", "Anecdotist"],
    "antonyms": ["Listener"],
    "example": "He was a charming raconteur who held the entire dinner party entertained with his tales."
  },
  "rampage": {
    "word": "Rampage",
    "pos": "noun",
    "simpleDefinition": "A period of violent, wild, or uncontrolled behavior causing destruction.",
    "synonyms": ["Frenzy", "Tear", "Riot", "Spree"],
    "antonyms": ["Calm", "Peace"],
    "example": "An escaped circus elephant went on a wild rampage through the village market."
  },
  "rank and file": {
    "word": "Rank and file",
    "pos": "noun",
    "simpleDefinition": "The ordinary members of an organization as opposed to its leaders.",
    "synonyms": ["Ordinary members", "Workforce", "General membership"],
    "antonyms": ["Leadership", "Executives", "Elite"],
    "example": "The union leaders consulted the rank and file before agreeing to the new contract."
  },
  "rational": {
    "word": "Rational",
    "pos": "adjective",
    "simpleDefinition": "Based on or in accordance with reason or logic.",
    "synonyms": ["Logical", "Reasonable", "Sensible", "Lucid"],
    "antonyms": ["Irrational", "Illogical", "Absurd"],
    "example": "In moments of crisis, it is vital to stay calm and make rational decisions."
  },
  "ravages": {
    "word": "Ravages",
    "pos": "noun",
    "simpleDefinition": "The severely damaging or destructive effects of time, weather, or war.",
    "synonyms": ["Destruction", "Devastation", "Damage", "Ruin"],
    "antonyms": ["Restoration", "Preservation"],
    "example": "The ancient stone castle could not withstand the ravages of time and coastal storms."
  },
  "reasonable": {
    "word": "Reasonable",
    "pos": "adjective",
    "simpleDefinition": "Fair, practical, sensible, and not extreme or excessive.",
    "synonyms": ["Fair", "Sensible", "Moderate", "Equitable"],
    "antonyms": ["Unreasonable", "Exorbitant", "Irrational"],
    "example": "The landlord agreed to a reasonable rent increase after discussions with tenants."
  },
  "reasoning": {
    "word": "Reasoning",
    "pos": "noun",
    "simpleDefinition": "The action of thinking about something in a logical and sensible way.",
    "synonyms": ["Logic", "Deduction", "Rationale", "Thinking"],
    "antonyms": ["Irrationality"],
    "example": "His sound mathematical reasoning convinced the professors of the theory's validity."
  },
  "reassurance": {
    "word": "Reassurance",
    "pos": "noun",
    "simpleDefinition": "The action of saying or doing something to remove someone's doubts or fears.",
    "synonyms": ["Comfort", "Encouragement", "Solace", "Guarantee"],
    "antonyms": ["Discouragement", "Doubt"],
    "example": "The surgeon offered gentle words of reassurance to the nervous patient before the procedure."
  },
  "recapitulate": {
    "word": "Recapitulate",
    "pos": "verb",
    "simpleDefinition": "To summarize and state again the main points of something; recap.",
    "synonyms": ["Summarize", "Recap", "Review", "Restate"],
    "antonyms": ["Elaborate", "Expand"],
    "example": "At the conclusion of the lecture, the professor took five minutes to recapitulate key findings."
  },
  "recapture": {
    "word": "Recapture",
    "pos": "verb",
    "simpleDefinition": "To capture again, or recover a former feeling, state, or memory.",
    "synonyms": ["Recover", "Regain", "Retrieve", "Retake"],
    "antonyms": ["Lose", "Relinquish"],
    "example": "The film attempts to recapture the wonder and excitement of early space exploration."
  },
  "recidivist": {
    "word": "Recidivist",
    "pos": "noun",
    "simpleDefinition": "A convicted criminal who reoffends repeatedly; a habitual offender.",
    "synonyms": ["Repeat offender", "Habitual criminal", "Chronic offender"],
    "antonyms": ["Law-abiding citizen"],
    "example": "The court handed the recidivist a strict sentence after his fourth burglary offense."
  },
  "recluse": {
    "word": "Recluse",
    "pos": "noun",
    "simpleDefinition": "A person who lives a solitary life and tends to avoid other people.",
    "synonyms": ["Hermit", "Loner", "Solitary", "Ascetic"],
    "antonyms": ["Socialite", "Extrovert"],
    "example": "After retiring from public life, the billionaire lived as a recluse in his mountain estate."
  },
  "reclusive": {
    "word": "Reclusive",
    "pos": "adjective",
    "simpleDefinition": "Avoiding the company of other people; living in quiet solitude.",
    "synonyms": ["Solitary", "Secluded", "Withdrawn", "Hermit-like"],
    "antonyms": ["Sociable", "Outgoing", "Gregarious"],
    "example": "The reclusive author rarely gave interviews or made public appearances."
  },
  "reconcile": {
    "word": "Reconcile",
    "pos": "verb",
    "simpleDefinition": "To restore friendly relations between people or make two ideas compatible.",
    "synonyms": ["Harmonize", "Settle", "Resolve", "Reunite"],
    "antonyms": ["Alienate", "Divide", "Estrange"],
    "example": "The mediator worked patiently to reconcile the differing demands of labor and management."
  },
  "recruit": {
    "word": "Recruit",
    "pos": "verb",
    "simpleDefinition": "To enlist someone in the military or enroll new members into a company.",
    "synonyms": ["Enlist", "Hire", "Enroll", "Sign up"],
    "antonyms": ["Dismiss", "Discharge", "Fire"],
    "example": "The tech firm launched a campaign to recruit talented computer science graduates."
  },
  "recuperative": {
    "word": "Recuperative",
    "pos": "adjective",
    "simpleDefinition": "Having the effect of restoring health, vitality, or strength.",
    "synonyms": ["Healing", "Restorative", "Curative", "Therapeutic"],
    "antonyms": ["Harmful", "Exhausting", "Damaging"],
    "example": "She spent two weeks in the countryside to enjoy the recuperative power of fresh air."
  },
  "redirect": {
    "word": "Redirect",
    "pos": "verb",
    "simpleDefinition": "To direct something to a different place, route, or purpose.",
    "synonyms": ["Divert", "Reroute", "Turn", "Steer"],
    "antonyms": ["Maintain", "Keep on track"],
    "example": "Heavy road construction forced traffic police to redirect commuters along side streets."
  },
  "reel": {
    "word": "Reel",
    "pos": "verb",
    "simpleDefinition": "To lose one's balance and stagger, or feel dizzy with shock or bewilderment.",
    "synonyms": ["Stagger", "Lurch", "Sway", "Wobble"],
    "antonyms": ["Steady", "Balance"],
    "example": "The boxer began to reel backward after taking a heavy blow to the jaw."
  },
  "refinery": {
    "word": "Refinery",
    "pos": "noun",
    "simpleDefinition": "An industrial installation where a raw substance like petroleum or sugar is purified.",
    "synonyms": ["Processing plant", "Purifying plant", "Smelter"],
    "antonyms": ["No common antonym"],
    "example": "Crude oil is transported directly into the coastal refinery to produce automotive gasoline."
  },
  "refugees": {
    "word": "Refugees",
    "pos": "noun",
    "simpleDefinition": "People who have been forced to leave their country to escape war, persecution, or disaster.",
    "synonyms": ["Displaced persons", "Asylum seekers", "Exiles", "Evacuees"],
    "antonyms": ["Native citizens"],
    "example": "International humanitarian organizations provided warm tents, food, and medicine to the displaced refugees."
  },
  "regicide": {
    "word": "Regicide",
    "pos": "noun",
    "simpleDefinition": "The action of killing a king, or a person who kills a king.",
    "synonyms": ["King-killing", "Monarch murder"],
    "antonyms": ["Loyalty", "Fealty"],
    "example": "The conspirators were convicted of regicide after plotting against the reigning monarch."
  },
  "regime": {
    "word": "Regime",
    "pos": "noun",
    "simpleDefinition": "A government, especially an authoritarian one, or an organized system of rules.",
    "synonyms": ["Government", "Administration", "Rule", "Authority"],
    "antonyms": ["Anarchy"],
    "example": "Citizens rejoiced in the city streets following the peaceful fall of the oppressive regime."
  },
  "regret": {
    "word": "Regret",
    "pos": "verb",
    "simpleDefinition": "To feel sad, repentant, or disappointed over something done or lost.",
    "synonyms": ["Lament", "Rue", "Mourn", "Repent"],
    "antonyms": ["Celebrate", "Rejoice"],
    "example": "He later came to deeply regret making that impulsive and hurtful remark to his friend."
  },
  "reimburse": {
    "word": "Reimburse",
    "pos": "verb",
    "simpleDefinition": "To repay a person who has spent or lost money on official duties.",
    "synonyms": ["Repay", "Refund", "Compensate", "Remunerate"],
    "antonyms": ["Charge", "Fine", "Penalize"],
    "example": "The company will reimburse employees for travel expenses incurred during the conference."
  },
  "reinstate": {
    "word": "Reinstate",
    "pos": "verb",
    "simpleDefinition": "To restore someone or something to their former position or condition.",
    "synonyms": ["Restore", "Rehire", "Re-establish", "Return"],
    "antonyms": ["Dismiss", "Suspend", "Abolish"],
    "example": "Following the inquiry, the university decided to reinstate the unfairly suspended professor."
  },
  "relevant": {
    "word": "Relevant",
    "pos": "adjective",
    "simpleDefinition": "Closely connected or appropriate to the matter or topic at hand.",
    "synonyms": ["Pertinent", "Applicable", "Germane", "Related"],
    "antonyms": ["Irrelevant", "Extraneous", "Inapplicable"],
    "example": "Please include only relevant work experience on your two-page resume."
  },
  "relics": {
    "word": "Relics",
    "pos": "noun",
    "simpleDefinition": "Objects surviving from an earlier time, especially of historical or sacred interest.",
    "synonyms": ["Artifacts", "Antiquities", "Remains", "Vestiges"],
    "antonyms": ["Novelties", "Modern items"],
    "example": "Archaeologists uncovered ancient pottery relics from the Bronze Age ruins."
  },
  "remnants": {
    "word": "Remnants",
    "pos": "noun",
    "simpleDefinition": "Small remaining parts or quantities of something; leftover scraps.",
    "synonyms": ["Leftovers", "Scraps", "Fragments", "Remains"],
    "antonyms": ["Whole", "Bulk"],
    "example": "The tailor used colorful remnants of fabric to stitch a decorative quilt."
  },
  "renowned": {
    "word": "Renowned",
    "pos": "adjective",
    "simpleDefinition": "Known or talked about by many people; highly celebrated and famous.",
    "synonyms": ["Famous", "Celebrated", "Distinguished", "Acclaimed"],
    "antonyms": ["Unknown", "Obscure", "Anonymous"],
    "example": "The medical center is renowned for its groundbreaking research in heart disease."
  },
  "reparation": {
    "word": "Reparation",
    "pos": "noun",
    "simpleDefinition": "The making of amends for a wrong done, often by paying money or helping.",
    "synonyms": ["Compensation", "Restitution", "Amends", "Redress"],
    "antonyms": ["Injury", "Penalty", "Harm"],
    "example": "The court ordered the company to pay substantial financial reparation for polluting the lake."
  },
  "repast": {
    "word": "Repast",
    "pos": "noun",
    "simpleDefinition": "A meal or the food served for a meal.",
    "synonyms": ["Meal", "Feast", "Banquet", "Dinner"],
    "antonyms": ["Fast", "Starvation"],
    "example": "The tired hikers enjoyed a hearty evening repast of hot stew and freshly baked bread."
  },
  "repeal": {
    "word": "Repeal",
    "pos": "verb",
    "simpleDefinition": "To revoke, annul, or officially withdraw a law or legislative act.",
    "synonyms": ["Revoke", "Annul", "Abolish", "Invalidate"],
    "antonyms": ["Enact", "Pass", "Legislate"],
    "example": "Parliament voted overwhelmingly to repeal the unpopular tax legislation."
  },
  "repent": {
    "word": "Repent",
    "pos": "verb",
    "simpleDefinition": "To feel or express sincere regret or remorse for one's sins or wrongdoings.",
    "synonyms": ["Regret", "Rue", "Feel remorse", "Lament"],
    "antonyms": ["Gloat", "Persist in wrongdoing"],
    "example": "The thief apologized tearfully and promised to repent and reform his ways."
  },
  "repercussion": {
    "word": "Repercussion",
    "pos": "noun",
    "simpleDefinition": "An unintended, often indirect consequence or reaction to an event or action.",
    "synonyms": ["Consequence", "Outcome", "Aftermath", "Ripple effect"],
    "antonyms": ["Cause"],
    "example": "The sudden increase in fuel prices had severe economic repercussions across all industries."
  },
  "represent": {
    "word": "Represent",
    "pos": "verb",
    "simpleDefinition": "To act or speak on behalf of someone, or serve as a symbol or sign of something.",
    "synonyms": ["Stand for", "Symbolize", "Signify", "Act for"],
    "antonyms": ["Misrepresent"],
    "example": "A designated diplomat was appointed to represent the nation at the peace conference."
  },
  "repression": {
    "word": "Repression",
    "pos": "noun",
    "simpleDefinition": "The action of subduing someone or something by force, or holding down desires.",
    "synonyms": ["Suppression", "Oppression", "Subjugation", "Restraint"],
    "antonyms": ["Liberation", "Freedom"],
    "example": "Decades of political repression failed to diminish the citizens' desire for democracy."
  },
  "reprimand": {
    "word": "Reprimand",
    "pos": "verb",
    "simpleDefinition": "To rebuke or express sharp disapproval of someone, especially officially.",
    "synonyms": ["Rebuke", "Admonish", "Scold", "Censure"],
    "antonyms": ["Praise", "Commend", "Applaud"],
    "example": "The supervisor had to reprimand the employee for arriving late three days in a row."
  },
  "reproach": {
    "word": "Reproach",
    "pos": "verb",
    "simpleDefinition": "To express one's disapproval of or disappointment with someone's actions.",
    "synonyms": ["Criticize", "Blame", "Censure", "Scold"],
    "antonyms": ["Praise", "Applaud", "Commend"],
    "example": "Her mother reproached her gently for neglecting her school studies."
  },
  "reproof": {
    "word": "Reproof",
    "pos": "noun",
    "simpleDefinition": "An expression of blame, censure, or mild rebuke.",
    "synonyms": ["Rebuke", "Admonition", "Scolding", "Reproach"],
    "antonyms": ["Approval", "Praise", "Commendation"],
    "example": "The teacher cast a look of quiet reproof at the students whispering in the back."
  },
  "repugnance": {
    "word": "Repugnance",
    "pos": "noun",
    "simpleDefinition": "Intense disgust, aversion, or incompatibility with one's moral values.",
    "synonyms": ["Disgust", "Revulsion", "Abhorrence", "Aversion"],
    "antonyms": ["Attraction", "Liking", "Admiration"],
    "example": "He felt deep moral repugnance toward the corrupt practices uncovered in the audit."
  },
  "repute": {
    "word": "Repute",
    "pos": "noun",
    "simpleDefinition": "The opinion generally held of someone or something; public reputation.",
    "synonyms": ["Reputation", "Renown", "Standing", "Prestige"],
    "antonyms": ["Disrepute", "Notoriety"],
    "example": "The academy has established an enviable repute for academic excellence."
  },
  "rescind": {
    "word": "Rescind",
    "pos": "verb",
    "simpleDefinition": "To revoke, cancel, or repeal a law, agreement, or formal decision.",
    "synonyms": ["Revoke", "Cancel", "Annul", "Retract"],
    "antonyms": ["Enforce", "Ratify", "Uphold"],
    "example": "The school board agreed to rescind the controversial dress code policy after protests."
  },
  "resemble": {
    "word": "Resemble",
    "pos": "verb",
    "simpleDefinition": "To have a similar appearance, qualities, or traits in common with someone or something.",
    "synonyms": ["Look like", "Mirror", "Take after", "Echo"],
    "antonyms": ["Differ from"],
    "example": "The young girl grew up to strongly resemble her grandmother in appearance."
  },
  "resentment": {
    "word": "Resentment",
    "pos": "noun",
    "simpleDefinition": "Bitter indignation or ill will at having been treated unfairly.",
    "synonyms": ["Bitterness", "Indignation", "Grudge", "Rancor"],
    "antonyms": ["Goodwill", "Forgiveness", "Contentment"],
    "example": "Simmering resentment between the two business founders eventually broke their partnership."
  },
  "resist": {
    "word": "Resist",
    "pos": "verb",
    "simpleDefinition": "To withstand the action or effect of, or oppose and fight against something.",
    "synonyms": ["Withstand", "Oppose", "Defy", "Combat"],
    "antonyms": ["Surrender", "Yield", "Submit"],
    "example": "It was difficult to resist the tempting aroma of hot cinnamon rolls."
  },
  "restless": {
    "word": "Restless",
    "pos": "adjective",
    "simpleDefinition": "Unable to rest, relax, or stay still; fidgety, uneasy, or agitated.",
    "synonyms": ["Fidgety", "Uneasy", "Agitated", "Impatient"],
    "antonyms": ["Calm", "Relaxed", "Peaceful"],
    "example": "After sitting inside all rainy afternoon, the restless children dashed into the yard."
  },
  "retail": {
    "word": "Retail",
    "pos": "noun",
    "simpleDefinition": "The sale of goods to the public in small quantities for immediate consumption.",
    "synonyms": ["Merchandising", "Selling", "Commerce"],
    "antonyms": ["Wholesale"],
    "example": "Supermarkets specialize in retail, providing groceries directly to households."
  },
  "retractable": {
    "word": "Retractable",
    "pos": "adjective",
    "simpleDefinition": "Able to be drawn back or in into a housing or casing.",
    "synonyms": ["Collapsible", "Foldaway", "Withdrawable"],
    "antonyms": ["Fixed", "Permanent"],
    "example": "The modern sports arena features a retractable glass roof that closes when it rains."
  },
  "revamp": {
    "word": "Revamp",
    "pos": "verb",
    "simpleDefinition": "To give new and improved form, structure, or appearance to something.",
    "synonyms": ["Renovate", "Overhaul", "Remodel", "Modernize"],
    "antonyms": ["Ruin", "Neglect", "Dismantle"],
    "example": "The company decided to revamp its online portal to make shopping faster and easier."
  },
  "reveal": {
    "word": "Reveal",
    "pos": "verb",
    "simpleDefinition": "To make previously hidden, unknown, or secret information known.",
    "synonyms": ["Disclose", "Uncover", "Divulge", "Expose"],
    "antonyms": ["Conceal", "Hide", "Suppress"],
    "example": "The historical documents reveal fascinating secrets about the founding of the city."
  },
  "revealing": {
    "word": "Revealing",
    "pos": "adjective",
    "simpleDefinition": "Making interesting or significant information known, or disclosing.",
    "synonyms": ["Informative", "Telling", "Disclosing", "Eye-opening"],
    "antonyms": ["Concealing", "Uninformative"],
    "example": "The investigative audit provided a revealing look into the firm's hidden expenses."
  },
  "reverential": {
    "word": "Reverential",
    "pos": "adjective",
    "simpleDefinition": "Feeling or showing deep respect, veneration, and solemn reverence.",
    "synonyms": ["Respectful", "Devout", "Reverent", "Venerating"],
    "antonyms": ["Irreverent", "Disrespectful", "Insolent"],
    "example": "The audience maintained a reverential silence throughout the memorial service."
  },
  "revert": {
    "word": "Revert",
    "pos": "verb",
    "simpleDefinition": "To return to a previous state, condition, practice, or subject.",
    "synonyms": ["Return", "Relapse", "Regress", "Go back"],
    "antonyms": ["Progress", "Advance"],
    "example": "If the software crashes, the system will automatically revert to its default settings."
  },
  "revolution": {
    "word": "Revolution",
    "pos": "noun",
    "simpleDefinition": "A forcible overthrow of a government or social order, or a dramatic fundamental change.",
    "synonyms": ["Uprising", "Rebellion", "Transformation", "Overturn"],
    "antonyms": ["Stagnation", "Counterrevolution"],
    "example": "The invention of the printing press sparked an educational revolution across Europe."
  },
  "revulsion": {
    "word": "Revulsion",
    "pos": "noun",
    "simpleDefinition": "A sense of intense disgust, loathing, and repulsive reaction.",
    "synonyms": ["Disgust", "Repulsion", "Abhorrence", "Loathing"],
    "antonyms": ["Attraction", "Liking", "Delight"],
    "example": "She recoiled in sudden revulsion when she spotted a slimy caterpillar on her sleeve."
  },
  "ridiculous": {
    "word": "Ridiculous",
    "pos": "adjective",
    "simpleDefinition": "Deserving mockery or derision; absurd, unreasonable, and laughable.",
    "synonyms": ["Absurd", "Preposterous", "Ludicrous", "Nonsensical"],
    "antonyms": ["Sensible", "Reasonable", "Serious"],
    "example": "Paying fifty dollars for a plain cup of water is completely ridiculous."
  },
  "rightfully": {
    "word": "Rightfully",
    "pos": "adverb",
    "simpleDefinition": "In accordance with what is right, just, legal, or deserved.",
    "synonyms": ["Lawfully", "Justly", "Legitimately", "Properly"],
    "antonyms": ["Wrongfully", "Illegitimately"],
    "example": "The heirloom jewels were rightfully returned to their original owner."
  },
  "rigid": {
    "word": "Rigid",
    "pos": "adjective",
    "simpleDefinition": "Unable to bend or be forced out of shape; not flexible, or strictly adhered to.",
    "synonyms": ["Stiff", "Inflexible", "Unbending", "Strict"],
    "antonyms": ["Flexible", "Supple", "Pliable"],
    "example": "The builder reinforced the concrete structure with rigid steel beams."
  },
  "rise rapidly": {
    "word": "Rise rapidly",
    "pos": "idiom",
    "simpleDefinition": "To increase, soar, or ascend at great speed.",
    "synonyms": ["Soar", "Surge", "Skyrocket", "Escalate"],
    "antonyms": ["Plummet", "Drop", "Decline"],
    "example": "Prices of fresh vegetables began to rise rapidly following the severe drought."
  },
  "rite": {
    "word": "Rite",
    "pos": "noun",
    "simpleDefinition": "A formal religious or solemn social ceremony or act.",
    "synonyms": ["Ritual", "Ceremony", "Sacrament", "Observance"],
    "antonyms": ["Informal act"],
    "example": "The initiation ceremony is viewed by the community as a sacred rite of passage."
  },
  "robbery": {
    "word": "Robbery",
    "pos": "noun",
    "simpleDefinition": "The crime of taking property unlawfully from a person or place by force or threat.",
    "synonyms": ["Theft", "Burglary", "Heist", "Mugging"],
    "antonyms": ["Donation", "Gift"],
    "example": "Police responded immediately and arrested the suspects during the bank robbery."
  },
  "rookie": {
    "word": "Rookie",
    "pos": "noun",
    "simpleDefinition": "A new recruit, beginner, or novice, especially in sports or the police force.",
    "synonyms": ["Novice", "Beginner", "Newcomer", "Trainee"],
    "antonyms": ["Veteran", "Expert"],
    "example": "The rookie firefighter was paired with an experienced captain during his first emergency call."
  },
  "rotund": {
    "word": "Rotund",
    "pos": "adjective",
    "simpleDefinition": "Round or plump in shape, or spherical in form.",
    "synonyms": ["Round", "Plump", "Chubby", "Portly"],
    "antonyms": ["Slender", "Thin", "Skinny"],
    "example": "A cheerful rotund chef greeted guests warmly at the entrance of the restaurant."
  },
  "ruminative": {
    "word": "Ruminative",
    "pos": "adjective",
    "simpleDefinition": "Deeply contemplative, thoughtful, or meditative.",
    "synonyms": ["Contemplative", "Reflective", "Meditative", "Pensive"],
    "antonyms": ["Thoughtless", "Rash"],
    "example": "He spent a quiet ruminative evening looking over old letters from his school days."
  },
  "rush": {
    "word": "Rush",
    "pos": "verb",
    "simpleDefinition": "To move or act with urgent speed or in a hurried manner.",
    "synonyms": ["Hurry", "Dash", "Speed", "Sprint"],
    "antonyms": ["Dawdle", "Linger", "Delay"],
    "example": "Commuters rush down the station stairs to catch the morning express train."
  }
}

if __name__ == '__main__':
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
    
    added = 0
    for k, v in BATCH5_DATA.items():
        cache[k.lower()] = v
        added += 1
    
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)
    
    print(f"Added {added} curated entries for 'R' to cache. Total cache size: {len(cache)}")
