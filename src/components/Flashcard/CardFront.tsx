import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { VocabularyWord } from '../../types/vocabulary';

interface CardFrontProps {
  word: VocabularyWord;
  onReveal: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const CardFront: React.FC<CardFrontProps> = ({
  word,
  onReveal,
  onNext,
  onPrev,
  hasPrev = true,
  hasNext = true,
}) => {
  // Badge label and color based on word status
  let badgeText = 'NEW WORD';
  let badgeColor = 'bg-amber-100/80 text-amber-800 border-amber-200/50';

  if (word.isDifficult) {
    badgeText = 'DIFFICULT WORD';
    badgeColor = 'bg-red-100/80 text-red-700 border-red-200/50';
  } else if (word.category === 'Reviewing') {
    badgeText = 'REVIEW';
    badgeColor = 'bg-orange-100/80 text-orange-800 border-orange-200/50';
  } else if (word.category === 'Mastered') {
    badgeText = 'MASTERED';
    badgeColor = 'bg-emerald-100/80 text-emerald-800 border-emerald-200/50';
  } else if (word.timesReviewed > 0) {
    badgeText = 'LEARNING';
    badgeColor = 'bg-blue-100/80 text-blue-800 border-blue-200/50';
  }

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Left Navigation Arrow */}
      {hasPrev && (
        <button
          onClick={onPrev}
          title="Previous word"
          className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-500 hover:text-navy-900 hover:bg-stone-50 transition-all hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Main Flashcard Card Front */}
      <div 
        onClick={onReveal}
        className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-stone-200/70 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[340px] cursor-pointer hover:border-stone-300 transition-all group"
      >
        {/* Status Badge matching screenshot */}
        <div className="mb-5">
          <span className={`inline-block text-[11px] uppercase tracking-wider font-bold px-3.5 py-1 rounded-full border ${badgeColor}`}>
            {badgeText}
          </span>
        </div>

        {/* English Vocabulary Word */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-navy-900 tracking-tight lowercase first-letter:capitalize">
            {word.word}
          </h2>
        </div>

        {/* "Tap to see meaning" Button matching screenshot */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReveal();
          }}
          className="w-full max-w-xs py-3 px-6 rounded-2xl border border-stone-200 text-stone-700 font-medium text-sm sm:text-base hover:bg-stone-50 hover:text-navy-900 hover:border-stone-300 transition-all shadow-xs group-hover:border-stone-300"
        >
          Tap to see meaning
        </button>

        <p className="text-[11px] text-stone-400 mt-4">or press <kbd className="px-1.5 py-0.5 rounded bg-stone-100 border text-stone-600 font-mono text-[10px]">Space</kbd></p>
      </div>

      {/* Right Navigation Arrow */}
      {hasNext && (
        <button
          onClick={onNext}
          title="Next word"
          className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-500 hover:text-navy-900 hover:bg-stone-50 transition-all hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
