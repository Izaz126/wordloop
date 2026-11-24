import React from 'react';
import { Check, X } from 'lucide-react';

interface ActionButtonsProps {
  onKnew: () => void;
  onDidntKnow: () => void;
  disabled?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onKnew,
  onDidntKnow,
  disabled = false,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto flex items-center gap-4 sm:gap-6 pt-3 pb-6">
      {/* Green Button: "✓ I knew" */}
      <button
        onClick={onKnew}
        disabled={disabled}
        className="flex-1 py-3.5 sm:py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold text-base sm:text-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Check className="w-5 h-5 stroke-[2.5] group-hover:scale-110 transition-transform" />
        <span>I knew</span>
      </button>

      {/* Red Button: "✕ I didn't know" */}
      <button
        onClick={onDidntKnow}
        disabled={disabled}
        className="flex-1 py-3.5 sm:py-4 px-6 rounded-full bg-rose-600 hover:bg-rose-700 active:scale-98 text-white font-semibold text-base sm:text-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <X className="w-5 h-5 stroke-[2.5] group-hover:scale-110 transition-transform" />
        <span>I didn't know</span>
      </button>
    </div>
  );
};
