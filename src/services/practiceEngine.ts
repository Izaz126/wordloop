import { VocabularyWord, PracticeMode, PracticeQuestion, PracticeStats } from '../types/vocabulary';

export class PracticeEngine {
  /**
   * Generate questions based on mode, count, and vocabulary collection
   */
  static generateQuizQuestions(
    words: VocabularyWord[],
    mode: PracticeMode = 'both',
    count = 10,
    prioritizeDifficult = true
  ): PracticeQuestion[] {
    if (!words || words.length < 4) return [];

    // Filter candidate words
    let candidateWords = [...words];

    if (prioritizeDifficult) {
      // Sort difficult words to front, then shuffle slightly
      candidateWords.sort((a, b) => {
        const scoreA = (a.isDifficult ? 10 : 0) + (a.timesIncorrect - a.timesCorrect);
        const scoreB = (b.isDifficult ? 10 : 0) + (b.timesIncorrect - b.timesCorrect);
        return scoreB - scoreA;
      });
    } else {
      candidateWords.sort(() => Math.random() - 0.5);
    }

    const questions: PracticeQuestion[] = [];
    const usedWordIds = new Set<string>();

    // Pool of potential distractors (all valid synonyms and antonyms in the vocabulary)
    const allDistractorWords = new Set<string>();
    words.forEach((w) => {
      w.synonyms.forEach((s) => {
        if (s && s.length > 2 && !s.includes(' ')) allDistractorWords.add(s);
      });
      w.antonyms.forEach((a) => {
        if (a && a.length > 2 && !a.toLowerCase().includes('no common') && !a.includes(' ')) {
          allDistractorWords.add(a);
        }
      });
      if (w.word && !w.word.includes(' ')) allDistractorWords.add(w.word);
    });

    const distractorList = Array.from(allDistractorWords);

    for (const word of candidateWords) {
      if (questions.length >= count && count > 0) break;
      if (usedWordIds.has(word.id)) continue;

      // Determine question type
      let qType: 'synonym' | 'antonym' = 'synonym';
      const hasValidSynonyms = word.synonyms && word.synonyms.length > 0 && word.synonyms.some((s) => s.length > 1);
      const hasValidAntonyms =
        word.antonyms &&
        word.antonyms.length > 0 &&
        word.antonyms.some((a) => a.length > 1 && !a.toLowerCase().includes('no common') && a !== 'None');

      if (mode === 'synonym') {
        if (!hasValidSynonyms) continue;
        qType = 'synonym';
      } else if (mode === 'antonym') {
        if (!hasValidAntonyms) continue;
        qType = 'antonym';
      } else {
        // Both mode: pick antonym if available 50% of the time, else synonym
        if (hasValidAntonyms && Math.random() > 0.5) {
          qType = 'antonym';
        } else if (hasValidSynonyms) {
          qType = 'synonym';
        } else {
          continue;
        }
      }

      // Pick correct answer
      let correctAnswer = '';
      if (qType === 'synonym') {
        const validSyns = word.synonyms.filter((s) => s.length > 1);
        correctAnswer = validSyns[Math.floor(Math.random() * validSyns.length)];
      } else {
        const validAnts = word.antonyms.filter((a) => a.length > 1 && !a.toLowerCase().includes('no common'));
        correctAnswer = validAnts[Math.floor(Math.random() * validAnts.length)];
      }

      if (!correctAnswer) continue;

      // Generate 3 plausible distractors
      const distractors = this.pickDistractors(correctAnswer, word, distractorList, words, qType);
      if (distractors.length < 3) continue;

      // Shuffle options
      const options = [correctAnswer, ...distractors].sort(() => Math.random() - 0.5);

      const prompt =
        qType === 'synonym'
          ? `Which word has the closest meaning to "${word.word.toUpperCase()}"?`
          : `Which word is the opposite of "${word.word.toUpperCase()}"?`;

      const explanation =
        qType === 'synonym'
          ? `"${correctAnswer}" is a direct synonym of "${word.word}". Meaning: ${word.simpleDefinition}`
          : `"${correctAnswer}" is an antonym (opposite) of "${word.word}". Meaning: ${word.simpleDefinition}`;

      questions.push({
        id: `quiz-q-${questions.length + 1}-${word.id}`,
        wordId: word.id,
        type: qType,
        targetWord: word.word,
        pos: word.pos,
        prompt,
        correctAnswer,
        options,
        explanation,
        banglaMeaning: word.banglaMeaning,
      });

      usedWordIds.add(word.id);
    }

    return questions;
  }

  /**
   * Pick 3 distinct, plausible distractor words
   */
  private static pickDistractors(
    correctAnswer: string,
    targetWord: VocabularyWord,
    distractorList: string[],
    allWords: VocabularyWord[],
    qType: 'synonym' | 'antonym'
  ): string[] {
    const forbidden = new Set<string>();
    forbidden.add(correctAnswer.toLowerCase());
    forbidden.add(targetWord.word.toLowerCase());

    // Never use any of the word's synonyms as distractors in synonym questions
    targetWord.synonyms.forEach((s) => forbidden.add(s.toLowerCase()));
    // Never use any of the word's antonyms as distractors in antonym questions
    targetWord.antonyms.forEach((a) => forbidden.add(a.toLowerCase()));

    // Try to pick distractors with matching part of speech from other words first
    const samePosWords = allWords.filter(
      (w) => w.id !== targetWord.id && w.pos.toLowerCase() === targetWord.pos.toLowerCase()
    );

    const candidates: string[] = [];

    // First collect from same POS
    for (const w of samePosWords) {
      const pool = qType === 'synonym' ? w.synonyms : w.antonyms;
      for (const item of pool) {
        const itemClean = item.trim();
        if (
          itemClean.length > 2 &&
          !itemClean.includes(' ') &&
          !itemClean.toLowerCase().includes('no common') &&
          !forbidden.has(itemClean.toLowerCase()) &&
          !candidates.includes(itemClean)
        ) {
          candidates.push(itemClean);
          if (candidates.length >= 8) break;
        }
      }
      if (candidates.length >= 8) break;
    }

    // If still need more, pick from global distractor list
    const shuffledPool = [...distractorList].sort(() => Math.random() - 0.5);
    for (const item of shuffledPool) {
      if (candidates.length >= 10) break;
      const itemClean = item.trim();
      if (
        itemClean.length > 2 &&
        !itemClean.includes(' ') &&
        !itemClean.toLowerCase().includes('no common') &&
        !forbidden.has(itemClean.toLowerCase()) &&
        !candidates.includes(itemClean)
      ) {
        candidates.push(itemClean);
      }
    }

    // Shuffle and pick 3
    const shuffled = candidates.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }

  /**
   * Update practice statistics after answering a question
   */
  static updateStats(
    prev: PracticeStats,
    type: 'synonym' | 'antonym',
    isCorrect: boolean
  ): PracticeStats {
    const isSyn = type === 'synonym';
    const totalSyn = prev.totalSynonymAnswered + (isSyn ? 1 : 0);
    const synCorrect = prev.totalSynonymCorrect + (isSyn && isCorrect ? 1 : 0);

    const totalAnt = prev.totalAntonymAnswered + (!isSyn ? 1 : 0);
    const antCorrect = prev.totalAntonymCorrect + (!isSyn && isCorrect ? 1 : 0);

    const totalAns = prev.totalAnswered + 1;
    const totalCorr = prev.totalCorrect + (isCorrect ? 1 : 0);
    const totalIncorr = prev.totalIncorrect + (isCorrect ? 0 : 1);

    const synAcc = totalSyn > 0 ? Math.round((synCorrect / totalSyn) * 100) : 0;
    const antAcc = totalAnt > 0 ? Math.round((antCorrect / totalAnt) * 100) : 0;
    const overallAcc = totalAns > 0 ? Math.round((totalCorr / totalAns) * 100) : 0;

    return {
      totalSynonymAnswered: totalSyn,
      totalSynonymCorrect: synCorrect,
      totalAntonymAnswered: totalAnt,
      totalAntonymCorrect: antCorrect,
      totalAnswered: totalAns,
      totalCorrect: totalCorr,
      totalIncorrect: totalIncorr,
      synonymAccuracy: synAcc,
      antonymAccuracy: antAcc,
      overallAccuracy: overallAcc,
    };
  }
}
