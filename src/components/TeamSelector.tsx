import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Team } from '../types';

interface TeamSelectorProps {
  currentTeam: Team;
  teams?: Team[];
  onTeamChange?: (team: Team) => void;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ currentTeam }) => {
  return (
    <div className="relative mx-3">
      <button className="flex items-center justify-between w-full p-2 rounded-lg bg-dark-hover theme-transition hover:bg-opacity-80 text-dark-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 light:bg-light-hover light:text-light-text">
        <div className="flex items-center gap-3">
          <div className={`h-6 w-6 rounded-md bg-${currentTeam.color || 'blue'}-600 flex items-center justify-center`}>
            <span className="font-medium text-xs">{currentTeam.shortName}</span>
          </div>
          <span className="font-medium text-sm">{currentTeam.name}</span>
        </div>
        <ChevronDown className="h-4 w-4 text-dark-textMuted theme-transition light:text-light-textMuted" />
      </button>
      {/* Dropdown content would go here if needed */}
    </div>
  );
};

export default TeamSelector;