
import React from 'react';
import { Mode } from '../types';
import { SummarizeIcon, SimplifyIcon, TagIcon } from './icons';

interface ModeSelectorProps {
  selectedMode: Mode;
  onSelectMode: (mode: Mode) => void;
}

const modes = [
  { id: Mode.Summarize, name: 'Summarize', icon: SummarizeIcon },
  { id: Mode.Simplify, name: 'Simplify', icon: SimplifyIcon },
  { id: Mode.Tag, name: 'Tag', icon: TagIcon },
];

const ModeSelector: React.FC<ModeSelectorProps> = ({ selectedMode, onSelectMode }) => {
  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 p-2 bg-slate-200/60 dark:bg-slate-800/60 rounded-full mb-6">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onSelectMode(mode.id)}
          className={`flex items-center justify-center space-x-2 w-full sm:w-auto px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 ${
            selectedMode === mode.id
              ? 'bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 shadow-md'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-700/50'
          }`}
        >
          <mode.icon className="w-5 h-5" />
          <span>{mode.name}</span>
        </button>
      ))}
    </div>
  );
};

export default ModeSelector;
