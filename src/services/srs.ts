import { VocabularyWord, SRSStats, SRSCategory } from '../types/vocabulary';

// SRS Review intervals in days:
// 1st success: 1 day (moves to Reviewing)
// 2nd success: 3 days
// 3rd success: 7 days
// 4th success: 14 days
// 5th+ success: 30 days (moves to Mastered)
export const SRS_INTERVALS = [1, 3, 7, 14, 30];

export class SRSService {
  /**
   * Process word when user clicks "✓ I knew"
   */
  static processKnown(word: VocabularyWord): VocabularyWord {
    const now = new Date();
    const newStreak = word.consecutiveCorrect + 1;
    let newStage = word.stage + 1;
    let intervalDays = SRS_INTERVALS[Math.min(newStage - 1, SRS_INTERVALS.length - 1)];

    let newCategory: SRSCategory = 'Reviewing';
    // If completed 5 or more consecutive successful reviews, word is Mastered!
    if (newStage >= 5) {
      newCategory = 'Mastered';
      intervalDays = 30;
    } else {
      newCategory = 'Reviewing';
    }

    const nextDate = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);

    return {
      ...word,
      category: newCategory,
      stage: newStage,
      consecutiveCorrect: newStreak,
      intervalDays,
      nextReviewDate: nextDate.toISOString(),
      lastReviewedDate: now.toISOString(),
      timesReviewed: word.timesReviewed + 1,
      timesCorrect: word.timesCorrect + 1,
      isDifficult: false, // successfully cleared difficult status
      updatedAt: now.toISOString(),
    };
  }

  /**
   * Process word when user clicks "✕ I didn't know"
   * Resets streak, returns to Learning category, and schedules for sooner review
   */
  static processUnknown(word: VocabularyWord): VocabularyWord {
    const now = new Date();
    
    return {
      ...word,
      category: 'Learning',
      stage: 0,
      consecutiveCorrect: 0,
      intervalDays: 0, // due immediately or within current session
      nextReviewDate: now.toISOString(),
      lastReviewedDate: now.toISOString(),
      timesReviewed: word.timesReviewed + 1,
      timesIncorrect: word.timesIncorrect + 1,
      isDifficult: true, // mark as difficult
      updatedAt: now.toISOString(),
    };
  }

  /**
   * Checks if a word is due for review today.
   * A word is due for review if:
   * - It is marked as difficult (needs sooner repeat), OR
   * - It has been reviewed at least once (timesReviewed > 0) and its nextReviewDate has arrived or passed.
   * Fresh unreviewed words (timesReviewed === 0) are new words in Learning, not overdue reviews.
   */
  static isDue(word: VocabularyWord): boolean {
    if (word.isDifficult) return true;
    if (word.timesReviewed === 0) return false;
    if (!word.nextReviewDate) return false;
    const dueDate = new Date(word.nextReviewDate);
    const now = new Date();
    return dueDate <= now;
  }

  /**
   * Calculate dashboard statistics matching the dynamic formula:
   * Overall Mastery (%) = (Number of Mastered Words / Total Unique Words) * 100
   */
  static calculateStats(words: VocabularyWord[], learnedToday = 0, reviewedToday = 0): SRSStats {
    const totalWords = words.length;
    if (totalWords === 0) {
      return {
        totalWords: 0,
        masteredCount: 0,
        masteredPercent: 0,
        reviewingCount: 0,
        reviewingPercent: 0,
        learningCount: 0,
        learningPercent: 0,
        dueTodayCount: 0,
        newWordsCount: 0,
        learnedTodayCount: learnedToday,
        reviewedTodayCount: reviewedToday,
        overallProgressPercent: 0,
      };
    }

    let mastered = 0;
    let reviewing = 0;
    let learning = 0;
    let dueCount = 0;
    let newWords = 0;

    for (const w of words) {
      if (w.category === 'Mastered') mastered++;
      else if (w.category === 'Reviewing') reviewing++;
      else learning++;

      if (this.isDue(w)) dueCount++;
      if (w.timesReviewed === 0) newWords++;
    }

    const masteredPercent = Math.round((mastered / totalWords) * 100);
    const reviewingPercent = Math.round((reviewing / totalWords) * 100);
    const learningPercent = Math.round((learning / totalWords) * 100);

    // Overall Mastery (%) = (Number of Mastered Words / Total Unique Words) * 100
    // Calculated dynamically; never hardcoded to 5% or stuck.
    const overallMasteryPercent = totalWords > 0 ? Math.round((mastered / totalWords) * 100) : 0;

    return {
      totalWords,
      masteredCount: mastered,
      masteredPercent,
      reviewingCount: reviewing,
      reviewingPercent,
      learningCount: learning,
      learningPercent,
      dueTodayCount: dueCount,
      newWordsCount: newWords,
      learnedTodayCount: learnedToday,
      reviewedTodayCount: reviewedToday,
      overallProgressPercent: overallMasteryPercent,
    };
  }

  /**
   * Build learning session queue
   * Prioritizes overdue review words before new words
   */
  static buildSessionQueue(
    words: VocabularyWord[],
    mode: 'due' | 'new' | 'all' | 'difficult' = 'due',
    limit = 30
  ): VocabularyWord[] {
    const now = new Date();

    if (mode === 'difficult') {
      return words
        .filter((w) => w.isDifficult || w.timesIncorrect > w.timesCorrect)
        .slice(0, limit);
    }

    if (mode === 'new') {
      return words
        .filter((w) => w.timesReviewed === 0)
        .slice(0, limit);
    }

    if (mode === 'all') {
      return [...words].sort(() => Math.random() - 0.5).slice(0, limit);
    }

    // Default 'due': Overdue review words first, then unreviewed words, then general learning
    const overdueReviews = words
      .filter((w) => w.category === 'Reviewing' && new Date(w.nextReviewDate) <= now)
      .sort((a, b) => new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime());

    const difficultLearning = words
      .filter((w) => w.category === 'Learning' && w.isDifficult)
      .sort(() => Math.random() - 0.5);

    const newWords = words
      .filter((w) => w.timesReviewed === 0)
      .sort(() => Math.random() - 0.5);

    const remainingLearning = words
      .filter((w) => w.category === 'Learning' && !w.isDifficult && w.timesReviewed > 0);

    // Combine queue
    const combined = [...overdueReviews, ...difficultLearning, ...newWords, ...remainingLearning];
    
    // If not enough due words, fill up with other available words
    if (combined.length < limit) {
      const remaining = words.filter((w) => !combined.some((c) => c.id === w.id));
      combined.push(...remaining.slice(0, limit - combined.length));
    }

    return combined.slice(0, limit);
  }

  /**
   * Re-insert a difficult word into active session queue
   * Rule: Do not show immediately on next card. Place it 3 to 5 words later!
   */
  static reinsertDifficultWord(
    queue: VocabularyWord[],
    currentIndex: number,
    word: VocabularyWord
  ): VocabularyWord[] {
    const newQueue = [...queue];
    const offset = Math.min(4, Math.max(2, Math.floor((newQueue.length - currentIndex) / 2)));
    const targetIndex = Math.min(newQueue.length, currentIndex + offset + 1);
    
    // Insert word at targetIndex
    newQueue.splice(targetIndex, 0, { ...word });
    return newQueue;
  }
}
