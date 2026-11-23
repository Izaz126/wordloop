import React from 'react';
import { SRSStats } from '../../types/vocabulary';

interface ProgressStatsProps {
  stats: SRSStats;
  onFilterClick?: (category: 'Mastered' | 'Reviewing' | 'Learning' | 'Due') => void;
}

export const ProgressStats: React.FC<ProgressStatsProps> = ({ stats, onFilterClick }) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-stone-200/70 transition-all">
      {/* Grab bar handle matching screenshot */}
      <div className="w-12 h-1 bg-stone-200 rounded-full mx-auto mb-6" />

      {/* Three Main Statistics Rows matching user screenshot */}
      <div className="space-y-5">
        {/* Mastered Row */}
        <div 
          onClick={() => onFilterClick?.('Mastered')}
          className="group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-navy-900">
              <span className="font-bold text-lg sm:text-xl text-navy-900">{stats.masteredCount}</span>
              <span className="font-medium text-sm text-stone-800">Mastered</span>
            </div>
            <span className="text-sm font-medium text-stone-500">{stats.masteredPercent}%</span>
          </div>
          {/* Soft Green Track & Bar */}
          <div className="w-full h-2 bg-emerald-50 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(stats.masteredPercent, stats.masteredCount > 0 ? 3 : 0)}%` }}
            />
          </div>
        </div>

        {/* Reviewing Row */}
        <div 
          onClick={() => onFilterClick?.('Reviewing')}
          className="group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-navy-900">
              <span className="font-bold text-lg sm:text-xl text-navy-900">{stats.reviewingCount}</span>
              <span className="font-medium text-sm text-stone-800">Reviewing</span>
            </div>
            <span className="text-sm font-medium text-stone-500">{stats.reviewingPercent}%</span>
          </div>
          {/* Soft Peach/Orange Track & Bar */}
          <div className="w-full h-2 bg-orange-50/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(stats.reviewingPercent, stats.reviewingCount > 0 ? 3 : 0)}%` }}
            />
          </div>
        </div>

        {/* Learning Row */}
        <div 
          onClick={() => onFilterClick?.('Learning')}
          className="group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-navy-900">
              <span className="font-bold text-lg sm:text-xl text-navy-900">{stats.learningCount}</span>
              <span className="font-medium text-sm text-stone-800">Learning</span>
            </div>
            <span className="text-sm font-medium text-stone-500">{stats.learningPercent}%</span>
          </div>
          {/* Muted Blue Track & Bar */}
          <div className="w-full h-2 bg-blue-50 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(stats.learningPercent, stats.learningCount > 0 ? 3 : 0)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Supplementary details */}
      <div className="mt-6 pt-4 border-t border-stone-100 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2 rounded-xl bg-stone-50/70">
          <span className="block text-stone-400 font-medium">Total Words</span>
          <span className="font-bold text-navy-900 text-sm mt-0.5">{stats.totalWords}</span>
        </div>
        <div className="p-2 rounded-xl bg-stone-50/70">
          <span className="block text-stone-400 font-medium">Due for Review</span>
          <span className="font-bold text-amber-600 text-sm mt-0.5">{stats.dueTodayCount}</span>
        </div>
        <div className="p-2 rounded-xl bg-stone-50/70">
          <span className="block text-stone-400 font-medium">Overall Mastery</span>
          <span className="font-bold text-emerald-600 text-sm mt-0.5">{stats.overallProgressPercent}%</span>
        </div>
      </div>
    </div>
  );
};
