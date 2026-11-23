import React from 'react';
import { Award, RotateCcw, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { VocabularyWord } from '../../types/vocabulary';

interface SessionSummaryProps {
  reviewedCount: number;
  knewCount: number;
  unknownCount: number;
  difficultWords: VocabularyWord[];
  onContinue: () => void;
  onReviewDifficult: () => void;
}

export const SessionSummary: React.FC<SessionSummaryProps> = ({
  reviewedCount,
  knewCount,
  unknownCount,
  difficultWords,
  onContinue,
  onReviewDifficult,
}) => {
  React.useEffect(() => {
    // Launch celebratory confetti if user did well!
    if (knewCount > 0) {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#34D399', '#F59E0B', '#3B82F6'],
      });
    }
  }, [knewCount]);

  const accuracy = reviewedCount > 0 ? Math.round((knewCount / reviewedCount) * 100) : 0;

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center mx-auto mb-4">
        <Award className="w-8 h-8" />
      </div>

      <h3 className="text-2xl font-bold text-navy-900 mb-1">Session Complete!</h3>
      <p className="text-stone-500 text-sm mb-6">Great job practicing today. Every repetition reinforces your memory.</p>

      {/* Grid statistics */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-stone-50 border border-stone-100">
          <span className="block text-xs text-stone-400 font-medium">Reviewed</span>
          <span className="text-xl font-bold text-navy-900">{reviewedCount}</span>
        </div>
        <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
          <span className="block text-xs text-emerald-600 font-medium flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> I knew
          </span>
          <span className="text-xl font-bold text-emerald-700">{knewCount}</span>
        </div>
        <div className="p-3 rounded-2xl bg-rose-50 border border-rose-100">
          <span className="block text-xs text-rose-600 font-medium flex items-center justify-center gap-1">
            <AlertCircle className="w-3 h-3" /> Needs work
          </span>
          <span className="text-xl font-bold text-rose-700">{unknownCount}</span>
        </div>
      </div>

      {/* Difficult words list if any */}
      {difficultWords.length > 0 && (
        <div className="mb-6 text-left p-4 rounded-2xl bg-rose-50/50 border border-rose-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2.5 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Words to review again ({difficultWords.length})</span>
          </h4>
          <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto">
            {difficultWords.map((w) => (
              <span
                key={w.id}
                className="px-2.5 py-1 rounded-lg bg-white border border-rose-200 text-rose-900 text-xs font-medium flex items-center gap-1.5 shadow-2xs"
              >
                <span>{w.word}</span>
                <span className="text-stone-400 font-bengali text-[11px] font-normal">{w.banglaMeaning.split('/')[0]}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {difficultWords.length > 0 && (
          <button
            onClick={onReviewDifficult}
            className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Review Difficult Words</span>
          </button>
        )}
        <button
          onClick={onContinue}
          className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <span>Continue Learning</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
