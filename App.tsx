
import React, { useState, useCallback } from 'react';
import { Mode } from './types';
import { runAnalysis } from './services/geminiService';
import ModeSelector from './components/ModeSelector';
import ResultDisplay from './components/ResultDisplay';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [mode, setMode] = useState<Mode>(Mode.Summarize);
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleProcessClick = useCallback(async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);
    setOutput('');

    try {
      const result = await runAnalysis(inputText, mode);
      setOutput(result);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [inputText, mode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto">
        <header className="text-center my-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            StudyBuddy AI
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            Summarize, simplify, or tag your notes instantly.
          </p>
        </header>

        <main>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <ModeSelector selectedMode={mode} onSelectMode={setMode} />
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your notes here..."
              className="w-full h-48 p-4 border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:focus:ring-sky-400 dark:focus:border-sky-400 outline-none transition-shadow"
              disabled={isLoading}
            />
            
            <button
              onClick={handleProcessClick}
              disabled={isLoading || !inputText.trim()}
              className="mt-4 w-full flex items-center justify-center bg-sky-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-700 disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-100"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Analyze Notes'
              )}
            </button>
          </div>

          <ResultDisplay output={output} isLoading={isLoading} error={error} mode={mode} />
        </main>

        <footer className="text-center my-8 text-slate-500 dark:text-slate-400 text-sm">
          <p>Powered by Google Gemini</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
