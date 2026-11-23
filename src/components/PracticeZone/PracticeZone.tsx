import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Zap, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VocabularyWord, PracticeMode, PracticeQuestion, PracticeStats } from '../../types/vocabulary';
import { PracticeEngine } from '../../services/practiceEngine';
import { StorageService } from '../../services/storage';

interface PracticeZoneProps {
  words: VocabularyWord[];
  practiceStats: PracticeStats;
  onStatsUpdated: (stats: PracticeStats) => void;
  onWordUpdated: (word: VocabularyWord) => void;
}

export const PracticeZone: React.FC<PracticeZoneProps> = ({
  words,
  practiceStats,
  onStatsUpdated,
  onWordUpdated,
}) => {
  // Practice configuration
  const [mode, setMode] = useState<PracticeMode>('both');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [prioritizeDifficult, setPrioritizeDifficult] = useState<boolean>(true);

  // Active quiz state
  const [quizActive, setQuizActive] = useState<boolean>(false);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // Session score
  const [sessionCorrect, setSessionCorrect] = useState<number>(0);
  const [sessionIncorrect, setSessionIncorrect] = useState<number>(0);
  const [missedQuestions, setMissedQuestions] = useState<PracticeQuestion[]>([]);

  // Start Quiz
  const startQuiz = () => {
    const generated = PracticeEngine.generateQuizQuestions(
      words,
      mode,
      questionCount,
      prioritizeDifficult
    );

    if (generated.length === 0) {
      alert('Not enough vocabulary words to generate questions. Please ensure words have synonyms and antonyms.');
      return;
    }

    setQuestions(generated);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setQuizCompleted(false);
    setSessionCorrect(0);
    setSessionIncorrect(0);
    setMissedQuestions([]);
    setQuizActive(true);
  };

  const currentQ = questions[currentIndex] || null;

  // Handle Option Click
  const handleSelectOption = async (option: string) => {
    if (isAnswerSubmitted || !currentQ) return;

    setSelectedAnswer(option);
    setIsAnswerSubmitted(true);

    const isCorrect = option === currentQ.correctAnswer;

    if (isCorrect) {
      setSessionCorrect((prev) => prev + 1);
    } else {
      setSessionIncorrect((prev) => prev + 1);
      setMissedQuestions((prev) => [...prev, currentQ]);

      // Mark the original word as difficult in storage as required
      const targetWordObj = words.find((w) => w.id === currentQ.wordId);
      if (targetWordObj && !targetWordObj.isDifficult) {
        const updatedWord: VocabularyWord = {
          ...targetWordObj,
          isDifficult: true,
          timesIncorrect: targetWordObj.timesIncorrect + 1,
          updatedAt: new Date().toISOString(),
        };
        await StorageService.saveWord(updatedWord);
        onWordUpdated(updatedWord);
      }
    }

    // Update practice stats
    const updatedStats = PracticeEngine.updateStats(practiceStats, currentQ.type, isCorrect);
    await StorageService.savePracticeStats(updatedStats);
    onStatsUpdated(updatedStats);
  };

  // Next Question
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizCompleted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      
      {/* Practice Zone Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200/70">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">Practice Zone</h2>
              <p className="text-xs sm:text-sm text-stone-500 font-medium">Interactive Synonym & Antonym Mastery Quizzes</p>
            </div>
          </div>

          {quizActive && !quizCompleted && (
            <button
              onClick={() => setQuizActive(false)}
              className="text-xs font-semibold text-stone-500 hover:text-navy-900 px-3 py-1.5 rounded-xl border border-stone-200 hover:bg-stone-50 transition-all"
            >
              Exit Quiz
            </button>
          )}
        </div>

        {/* Practice Statistics Dashboard */}
        <div className="mt-6 pt-5 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-2xl bg-stone-50/80">
            <span className="block text-[11px] text-stone-400 font-medium">Total Answered</span>
            <span className="text-lg font-bold text-navy-900 mt-0.5">{practiceStats.totalAnswered}</span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-50/70">
            <span className="block text-[11px] text-emerald-600 font-medium">Synonym Accuracy</span>
            <span className="text-lg font-bold text-emerald-700 mt-0.5">{practiceStats.synonymAccuracy}%</span>
          </div>
          <div className="p-3 rounded-2xl bg-amber-50/70">
            <span className="block text-[11px] text-amber-600 font-medium">Antonym Accuracy</span>
            <span className="text-lg font-bold text-amber-700 mt-0.5">{practiceStats.antonymAccuracy}%</span>
          </div>
          <div className="p-3 rounded-2xl bg-blue-50/70">
            <span className="block text-[11px] text-blue-600 font-medium">Overall Score</span>
            <span className="text-lg font-bold text-blue-700 mt-0.5">{practiceStats.overallAccuracy}%</span>
          </div>
        </div>
      </div>

      {/* Quiz Screen or Configuration Screen */}
      {!quizActive ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 space-y-6">
          <h3 className="font-bold text-lg text-navy-900">Choose Practice Mode</h3>

          {/* Mode Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setMode('synonym')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                mode === 'synonym'
                  ? 'border-emerald-500 bg-emerald-50/50 shadow-2xs'
                  : 'border-stone-200 hover:border-stone-300 bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-bold text-sm text-navy-900">Synonyms Only</span>
              </div>
              <p className="text-xs text-stone-500">Practice closest meanings and definitions in English.</p>
            </button>

            <button
              onClick={() => setMode('antonym')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                mode === 'antonym'
                  ? 'border-rose-500 bg-rose-50/50 shadow-2xs'
                  : 'border-stone-200 hover:border-stone-300 bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="font-bold text-sm text-navy-900">Antonyms Only</span>
              </div>
              <p className="text-xs text-stone-500">Remember vocabulary through opposite words.</p>
            </button>

            <button
              onClick={() => setMode('both')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                mode === 'both'
                  ? 'border-amber-500 bg-amber-50/50 shadow-2xs'
                  : 'border-stone-200 hover:border-stone-300 bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-bold text-sm text-navy-900">Mixed (Both)</span>
              </div>
              <p className="text-xs text-stone-500">Challenging mix of synonyms and antonyms.</p>
            </button>
          </div>

          {/* Question Count Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
              Number of Questions
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[10, 20, 30, 50].map((num) => (
                <button
                  key={num}
                  onClick={() => setQuestionCount(num)}
                  className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    questionCount === num
                      ? 'bg-navy-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {num} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Focus Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
            <div>
              <span className="font-semibold text-sm text-navy-900 block">Prioritize Difficult Words</span>
              <span className="text-xs text-stone-500">Focus on vocabulary you previously answered incorrectly</span>
            </div>
            <input
              type="checkbox"
              checked={prioritizeDifficult}
              onChange={(e) => setPrioritizeDifficult(e.target.checked)}
              className="w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            />
          </div>

          {/* Start Practice Button */}
          <button
            onClick={startQuiz}
            className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start Practice Quiz</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : quizCompleted ? (
        /* Quiz Completed Screen */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-1">Quiz Completed!</h3>
            <p className="text-stone-500 text-sm">
              You answered <span className="font-bold text-emerald-600">{sessionCorrect}</span> correctly out of{' '}
              <span className="font-bold text-navy-900">{questions.length}</span> questions.
            </p>
          </div>

          {/* Missed words review */}
          {missedQuestions.length > 0 && (
            <div className="text-left p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" />
                <span>Words Missed in this Quiz ({missedQuestions.length})</span>
              </h4>
              <p className="text-xs text-stone-500 mb-3">These have been flagged as difficult words in your learning queue.</p>
              <div className="space-y-2">
                {missedQuestions.map((q, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white border border-rose-200 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-bold text-navy-900">{q.targetWord}</span>
                      <span className="text-stone-500 ml-2">({q.type === 'synonym' ? 'Synonym' : 'Antonym'})</span>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-700 font-semibold">{q.correctAnswer}</span>
                      <span className="text-stone-400 font-bengali ml-2">{q.banglaMeaning}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setQuizActive(false)}
              className="w-full sm:flex-1 py-3 px-5 rounded-2xl border border-stone-200 text-stone-700 font-semibold text-sm hover:bg-stone-50 transition-colors"
            >
              Back to Options
            </button>
            <button
              onClick={startQuiz}
              className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice Again</span>
            </button>
          </div>
        </div>
      ) : currentQ ? (
        /* Active Quiz Question Card */
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 space-y-6">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs font-semibold text-stone-400">
            <span className="uppercase tracking-wider">
              {currentQ.type === 'synonym' ? '● Synonym Practice' : '● Antonym Practice'}
            </span>
            <span>Question {currentIndex + 1} of {questions.length}</span>
          </div>

          {/* Question Prompt */}
          <div className="text-center py-2">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400 block mb-1">
              Target Vocabulary
            </span>
            <div className="flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                {currentQ.targetWord}
              </h2>
            </div>
            <p className="text-sm font-medium text-stone-600 mt-3">{currentQ.prompt}</p>
          </div>

          {/* 4 Multiple-Choice Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === opt;
              const isCorrectAnswer = opt === currentQ.correctAnswer;

              let btnStyle = 'border-stone-200 hover:border-stone-300 hover:bg-stone-50 bg-white text-stone-800';

              if (isAnswerSubmitted) {
                if (isCorrectAnswer) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                } else if (isSelected) {
                  btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                } else {
                  btnStyle = 'border-stone-200 bg-stone-50/60 text-stone-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  disabled={isAnswerSubmitted}
                  className={`p-4 rounded-2xl border text-left font-medium text-base sm:text-lg transition-all flex items-center justify-between cursor-pointer disabled:cursor-default ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-100 text-stone-500 text-xs font-semibold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswerSubmitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Feedback & Explanatory Box */}
          {isAnswerSubmitted && (
            <div className={`p-4 rounded-2xl border animate-fade-in ${
              selectedAnswer === currentQ.correctAnswer
                ? 'bg-emerald-50/70 border-emerald-200'
                : 'bg-rose-50/70 border-rose-200'
            }`}>
              <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
                {selectedAnswer === currentQ.correctAnswer ? (
                  <span className="text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                  </span>
                ) : (
                  <span className="text-rose-700 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Incorrect. Correct Answer: {currentQ.correctAnswer}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-2">
                {currentQ.explanation}
              </p>

              {/* Bangla Meaning Reinforcement */}
              <div className="text-xs sm:text-sm font-bengali text-navy-900 pt-2 border-t border-stone-200/60">
                <span className="font-semibold text-stone-700">বাংলা অর্থ: </span>
                <span className="font-bold">{currentQ.banglaMeaning}</span>
              </div>
            </div>
          )}

          {/* Continue to Next Question Button */}
          {isAnswerSubmitted && (
            <button
              onClick={handleNext}
              className="w-full py-3.5 rounded-full bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

        </div>
      ) : null}

    </div>
  );
};
