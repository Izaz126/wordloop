import React from 'react';
import { BookOpen, Target, Library, UploadCloud, Settings, Flame } from 'lucide-react';
import { SRSStats } from '../types/vocabulary';

export type ActiveTab = 'learn' | 'practice' | 'library' | 'import' | 'settings';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  stats: SRSStats;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, stats }) => {
  return (
    <header className="sticky top-0 z-30 bg-background-light/95 backdrop-blur border-b border-stone-200/60 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Slogan */}
        <div 
          onClick={() => setActiveTab('learn')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-softGreen-500 to-emerald-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg sm:text-xl text-navy-900 tracking-tight">WordLoop</span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-softGreen-100 text-softGreen-700">Personal</span>
            </div>
            <p className="text-[11px] text-stone-500 hidden sm:block -mt-0.5 font-medium">Learn, Repeat, Remember</p>
          </div>
        </div>

        {/* Center Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('learn')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'learn'
                ? 'bg-white text-navy-900 shadow-sm border border-stone-200/80 font-semibold'
                : 'text-stone-600 hover:text-navy-900 hover:bg-stone-100/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Learn</span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'practice'
                ? 'bg-white text-navy-900 shadow-sm border border-stone-200/80 font-semibold'
                : 'text-stone-600 hover:text-navy-900 hover:bg-stone-100/60'
            }`}
          >
            <Target className="w-4 h-4 text-softPeach-500" />
            <span>Practice Zone</span>
          </button>

          <button
            onClick={() => setActiveTab('library')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'library'
                ? 'bg-white text-navy-900 shadow-sm border border-stone-200/80 font-semibold'
                : 'text-stone-600 hover:text-navy-900 hover:bg-stone-100/60'
            }`}
          >
            <Library className="w-4 h-4 text-mutedBlue-500" />
            <span className="hidden md:inline">Library</span>
          </button>

          <button
            onClick={() => setActiveTab('import')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'import'
                ? 'bg-white text-navy-900 shadow-sm border border-stone-200/80 font-semibold'
                : 'text-stone-600 hover:text-navy-900 hover:bg-stone-100/60'
            }`}
          >
            <UploadCloud className="w-4 h-4 text-stone-500" />
            <span className="hidden md:inline">Import PDF</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`p-2 rounded-xl text-sm transition-all ${
              activeTab === 'settings'
                ? 'bg-white text-navy-900 shadow-sm border border-stone-200/80'
                : 'text-stone-500 hover:text-navy-900 hover:bg-stone-100/60'
            }`}
            title="Settings & Backup"
          >
            <Settings className="w-4 h-4" />
          </button>
        </nav>

        {/* Right Status Badge */}
        <div className="hidden sm:flex items-center gap-2">
          {stats.dueTodayCount > 0 ? (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-softPeach-100 text-softPeach-600 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 fill-softPeach-500" />
              <span>{stats.dueTodayCount} Due</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-softGreen-100 text-softGreen-700 text-xs font-semibold">
              <span>All caught up!</span>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
