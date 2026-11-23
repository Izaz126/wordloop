import React from 'react';
import { ArrowLeft, BookOpen, Quote } from 'lucide-react';
import { VocabularyWord } from '../../types/vocabulary';

interface CardBackProps {
  word: VocabularyWord;
  onFlipBack: () => void;
}

export const CardBack: React.FC<CardBackProps> = ({ word, onFlipBack }) => {
  // Helper to highlight the target word inside the example sentence
  const renderHighlightedSentence = (sentence: string, target: string) => {
    if (!sentence) return null;
    const cleanTarget = target.trim();
    // Regex matching the word case-insensitively (including prefixes/suffixes like adherents, adhered, etc.)
    const regex = new RegExp(`(\\b${cleanTarget}[a-z]*\\b)`, 'gi');
    const parts = sentence.split(regex);

    return (
      <span>
        “
        {parts.map((part, index) => {
          if (part.toLowerCase().startsWith(cleanTarget.toLowerCase())) {
            return (
              <span
                key={index}
                className="bg-emerald-100/90 text-emerald-900 font-semibold px-2 py-0.5 rounded-md inline-block mx-0.5 border border-emerald-200"
              >
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
        ”
      </span>
    );
  };

  // Check if exampleBangla is a valid custom translation (and not the unwanted placeholder)
  const hasValidBanglaTranslation =
    word.exampleBangla &&
    !word.exampleBangla.includes('এই শব্দটির ব্যবহার বাক্যে লক্ষ্য করুন') &&
    !word.exampleBangla.includes('গুরুত্বপূর্ণ বিসিএস ও চাকরির শব্দ') &&
    word.exampleBangla.trim().length > 0;

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/70 transition-all">
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight lowercase first-letter:capitalize">
              {word.word}
            </h2>
            {word.pos && (
              <span className="text-stone-400 italic text-sm font-medium ml-1">
                {word.pos}
              </span>
            )}
          </div>
        </div>

        {/* Back / Collapse Button */}
        <button
          onClick={onFlipBack}
          className="w-9 h-9 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-500 hover:text-navy-900 flex items-center justify-center transition-colors border border-stone-200/60"
          title="Back to front"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3.5">
        {/* 1. English Definition */}
        <div className="rounded-2xl p-4 bg-emerald-50/50 border-l-4 border-emerald-500 transition-all">
          <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DEFINITION</span>
          </div>
          <p className="text-navy-900 font-medium text-base sm:text-lg leading-relaxed">
            {word.simpleDefinition}
          </p>
        </div>

        {/* 2. Bangla Meaning Box */}
        <div className="rounded-2xl p-3.5 bg-stone-50/80 border border-stone-200/60 flex items-center gap-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-700 shrink-0 font-bengali">
            বাংলা অর্থ
          </span>
          <span className="text-navy-900 font-bold text-lg sm:text-xl font-bengali tracking-wide">
            {word.banglaMeaning}
          </span>
        </div>

        {/* 3. Example in Context */}
        <div className="rounded-2xl p-4 bg-rose-50/40 border-l-4 border-rose-400 transition-all">
          <div className="flex items-center gap-1.5 text-rose-600 text-xs font-bold uppercase tracking-wider mb-1.5">
            <Quote className="w-3.5 h-3.5" />
            <span>Example in Context</span>
          </div>
          <p className="text-stone-800 text-base sm:text-lg italic leading-relaxed">
            {renderHighlightedSentence(word.example, word.word)}
          </p>
          {hasValidBanglaTranslation && (
            <div className="mt-2 pt-2 border-t border-rose-100/80 text-stone-600 font-bengali text-sm sm:text-base not-italic">
              <span className="font-medium text-stone-700">অনুবাদ: </span>
              {word.exampleBangla}
            </div>
          )}
        </div>

        {/* 4. Synonyms Section */}
        <div className="rounded-2xl p-4 bg-emerald-50/30 border border-emerald-100/60">
          <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Synonyms</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {word.synonyms && word.synonyms.length > 0 ? (
              word.synonyms.map((syn, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full bg-white border border-emerald-200 text-emerald-900 text-sm font-medium shadow-2xs hover:bg-emerald-50 transition-colors"
                >
                  {syn}
                </span>
              ))
            ) : (
              <span className="text-stone-400 text-sm italic">No synonyms available</span>
            )}
          </div>
        </div>

        {/* 5. Antonyms Section */}
        <div className="rounded-2xl p-4 bg-orange-50/30 border border-orange-100/60">
          <div className="flex items-center gap-1.5 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
            <span>Antonyms</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {word.antonyms && word.antonyms.length > 0 && word.antonyms[0] !== 'No common antonym' ? (
              word.antonyms.map((ant, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full bg-white border border-orange-200 text-orange-900 text-sm font-medium shadow-2xs hover:bg-orange-50 transition-colors"
                >
                  {ant}
                </span>
              ))
            ) : (
              <span className="text-stone-400 text-sm italic">No common antonym</span>
            )}
          </div>
        </div>

        {/* Source Badge if present */}
        {word.source && (
          <div className="pt-2 text-right">
            <span className="text-[11px] text-stone-400 font-medium">
              Source: {word.source}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
