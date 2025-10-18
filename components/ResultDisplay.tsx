
import React from 'react';
import { Mode } from '../types';

interface ResultDisplayProps {
  output: string;
  isLoading: boolean;
  error: string | null;
  mode: Mode;
}

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center space-y-2">
    <div className="w-8 h-8 border-4 border-slate-300 border-t-sky-500 rounded-full animate-spin"></div>
    <p className="text-slate-500 dark:text-slate-400">StudyBuddy is thinking...</p>
  </div>
);

const renderOutput = (text: string, mode: Mode) => {
  if (mode === Mode.Tag) {
    const tags = text.split(',').map(tag => tag.trim()).filter(Boolean);
    if (tags.length === 0 && text.length > 0) {
      // Handle cases where tags are not comma-separated
      return (
        <div className="flex flex-wrap gap-2">
          <span className="bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-sm font-medium px-3 py-1.5 rounded-full">
            {text}
          </span>
        </div>
      )
    }
    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-sm font-medium px-3 py-1.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    );
  }

  return text.split('\n').map((line, index) => {
    if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      return (
        <div key={index} className="flex items-start pl-4 my-1">
          <span className="mr-3 mt-1 text-sky-500 dark:text-sky-400">•</span>
          <p className="flex-1">{line.substring(2)}</p>
        </div>
      );
    }
    return <p key={index} className="my-2">{line}</p>;
  });
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ output, isLoading, error, mode }) => {
  return (
    <div className="w-full mt-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 min-h-[200px] flex flex-col justify-center transition-all">
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && (
        <div className="text-center text-red-500 dark:text-red-400">
          <h3 className="font-bold text-lg">Oops!</h3>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && !output && (
        <div className="text-center text-slate-400 dark:text-slate-500">
          <p>Your results will appear here.</p>
        </div>
      )}
      {!isLoading && !error && output && (
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          {renderOutput(output, mode)}
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
