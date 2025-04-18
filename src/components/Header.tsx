import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, Bell } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, title }) => {
  return (
    <header className="flex-shrink-0 h-16 flex items-center justify-between gap-3 border-b border-dark-border theme-transition light:border-light-border px-4 lg:px-6 bg-dark-bg theme-transition light:bg-light-bg sticky top-0 z-10">
      <div className="flex items-center gap-3">
        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={onMenuClick}
          type="button"
          className="md:hidden relative z-0 inline-flex items-center justify-center rounded-lg p-2 text-dark-textMuted hover:bg-dark-hover hover:text-dark-text theme-transition light:text-light-textMuted light:hover:bg-light-hover light:hover:text-light-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover-glow"
          aria-label="Open sidebar"
        >
          <span className="absolute -inset-1 bg-dark-accent/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1] light:bg-light-accent/10"></span>
          <Menu className="h-5 w-5" />
        </button>
        
        {/* Page Title */}
        <h1 className="text-lg font-semibold text-dark-text theme-transition light:text-light-text">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Notification Button */}
        <button
          className="relative z-0 inline-flex items-center justify-center rounded-lg p-2 text-dark-textMuted hover:bg-dark-hover hover:text-dark-text theme-transition light:text-light-textMuted light:hover:bg-light-hover light:hover:text-light-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover-glow"
          aria-label="Notifications"
        >
          <span className="absolute -inset-1 bg-dark-accent/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1] light:bg-light-accent/10"></span>
          <Bell className="h-5 w-5" />
          {/* Notification dot */}
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-dark-bg theme-transition light:ring-light-bg"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;