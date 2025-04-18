import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative z-0 inline-flex items-center justify-center rounded-lg p-2 text-dark-textMuted hover:bg-dark-hover hover:text-dark-text theme-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover-glow light:text-light-textMuted light:hover:bg-light-hover light:hover:text-light-text"
      aria-label="Toggle theme"
    >
      <span className="absolute -inset-1 bg-dark-accent/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1] light:bg-light-accent/10"></span>
      
      {/* Sun icon (light mode) - shown in dark mode */}
      {theme === 'dark' && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path><path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path><path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      )}
      
      {/* Moon icon (dark mode) - shown in light mode */}
      {theme === 'light' && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-5 w-5"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;