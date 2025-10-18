
import React from 'react';

export const SummarizeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v5" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M3 15h6" />
    <path d="M3 18h6" />
    <path d="M3 21h6" />
    <path d="M3 12h6" />
  </svg>
);

export const SimplifyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.1 12.1a5 5 0 0 1 4.8-4.8" />
    <path d="M15.1 12.1a5 5 0 0 0-4.8 4.8" />
    <path d="M12.1 15.1a5 5 0 0 1-4.8 4.8" />
    <path d="M12.1 15.1a5 5 0 0 0 4.8-4.8" />
    <path d="m12 6-2-4-2 4" />
    <path d="m18 12-4 2-4-2" />
    <path d="m12 18-2 4 2-4" />
    <path d="m6 12 4-2 4 2" />
  </svg>
);

export const TagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.432 0l6.568-6.568a2.426 2.426 0 0 0 0-3.432L12.586 2.586Z" />
    <circle cx="8.5" cy="8.5" r=".5" fill="currentColor" />
  </svg>
);
