import React from 'react';
import NavigationItem from './NavigationItem';
import { NavSection } from '../types';

interface NavigationSectionProps {
  section: NavSection;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({ section }) => {
  return (
    <div className="relative mb-2 w-full">
      <span className="pl-3 text-xs font-medium text-dark-textMuted theme-transition light:text-light-textMuted uppercase tracking-wider mb-2 block">
        {section.title}
      </span>
      <ul className="space-y-1" role="group">
        {section.items.map((item, index) => (
          <NavigationItem key={`${section.title}-${index}`} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default NavigationSection;