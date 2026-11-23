export type SRSCategory = 'Learning' | 'Reviewing' | 'Mastered';

export interface VocabularyWord {
  id: string;
  word: string;
  pos: string; // part of speech: noun, verb, adjective, etc.
  ipa?: string; // phonetic pronunciation e.g. [əd'hɪə.rənt]
  banglaPron?: string; // Bangla pronunciation e.g. [অ্যাডহিয়ারেন্ট]
  simpleDefinition: string; // Easy English meaning / definition
  banglaMeaning: string; // Accurate Bangla meaning
  synonyms: string[]; // List of synonyms
  antonyms: string[]; // List of antonyms
  example: string; // Easy example sentence
  exampleBangla?: string; // Optional Bangla translation of example sentence
  source?: string; // BCS, Bank, etc.
  
  // Spaced Repetition System fields
  category: SRSCategory;
  stage: number; // 0: new, 1: 1d, 2: 3d, 3: 7d, 4: 14d, 5: 30d
  consecutiveCorrect: number;
  intervalDays: number;
  nextReviewDate: string; // ISO date string
  lastReviewedDate: string | null; // ISO date string
  timesReviewed: number;
  timesCorrect: number;
  timesIncorrect: number;
  isDifficult: boolean;
  
  createdAt: string;
  updatedAt: string;
}

export interface SRSStats {
  totalWords: number;
  masteredCount: number;
  masteredPercent: number;
  reviewingCount: number;
  reviewingPercent: number;
  learningCount: number;
  learningPercent: number;
  dueTodayCount: number;
  newWordsCount: number;
  learnedTodayCount: number;
  reviewedTodayCount: number;
  overallProgressPercent: number;
}

export type PracticeMode = 'synonym' | 'antonym' | 'both';

export interface PracticeQuestion {
  id: string;
  wordId: string;
  type: 'synonym' | 'antonym';
  targetWord: string;
  pos: string;
  prompt: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
  banglaMeaning: string;
}

export interface PracticeSessionAnswer {
  questionId: string;
  wordId: string;
  word: string;
  type: 'synonym' | 'antonym';
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
  banglaMeaning: string;
}

export interface PracticeStats {
  totalSynonymAnswered: number;
  totalSynonymCorrect: number;
  totalAntonymAnswered: number;
  totalAntonymCorrect: number;
  totalAnswered: number;
  totalCorrect: number;
  totalIncorrect: number;
  synonymAccuracy: number;
  antonymAccuracy: number;
  overallAccuracy: number;
}

export interface DailyLog {
  date: string; // YYYY-MM-DD
  wordsLearned: number;
  wordsReviewed: number;
}

export interface AppSettings {
  aiApiKey?: string;
  aiProvider?: 'gemini' | 'openai' | 'groq';
  autoPronounce: boolean;
  questionsPerSession: number;
  srsIntervals: number[]; // default [1, 3, 7, 14, 30]
}
