import React from 'react';
import { NavItem } from '../types';

interface NavigationItemProps {
  item: NavItem;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
  return (
    <li>
      <a 
        href={item.href}
        className={`relative group flex gap-3 items-center justify-between py-2 w-full px-3 rounded-lg h-[44px] cursor-pointer transition-all duration-200 ${
          item.isActive 
            ? 'bg-dark-hover theme-transition text-dark-text light:bg-light-hover light:text-light-text' 
            : 'text-dark-textMuted theme-transition hover:bg-dark-hover hover:text-dark-text light:text-light-textMuted light:hover:bg-light-hover light:hover:text-light-text'
        } focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
        aria-current={item.isActive ? 'page' : undefined}
      >
        <span className="absolute -inset-1 bg-dark-accent/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1] light:bg-light-accent/10"></span>
        <div className="flex items-center gap-3">
          <span className={`w-5 h-5 ${item.isActive ? 'text-blue-500' : ''} group-hover:translate-x-1 transition-transform duration-200`}>
            {item.icon}
          </span>
          <span className="flex-1 truncate text-sm font-medium">{item.label}</span>
        </div>
        
        {item.badge && (
          <span className={`px-2 py-0.5 text-xs font-medium bg-${item.badge.color} rounded-full ${
            item.badge.color === 'green-600/20' ? 'text-green-400 animate-pulse' : 'text-blue-100'
          }`}>
            {item.badge.text}
          </span>
        )}
        
        {item.isActive && (
          <span className="nav-active-indicator bg-blue-500"></span>
        )}
      </a>
    </li>
  );
};

export default NavigationItem;