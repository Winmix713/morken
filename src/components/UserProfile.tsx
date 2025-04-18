import React from 'react';
import { Settings } from 'lucide-react';
import { UserProfile as UserProfileType } from '../types';

interface UserProfileProps {
  user: UserProfileType;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="border-t border-dark-border theme-transition light:border-light-border p-3 mt-auto">
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-hover theme-transition light:hover:bg-light-hover cursor-pointer">
        <div className="flex-shrink-0 relative">
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-10 h-10 rounded-full object-cover border-2 border-dark-border theme-transition light:border-light-border" 
          />
          {user.isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-dark-sidebar theme-transition light:border-light-sidebar rounded-full"></span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-dark-text theme-transition light:text-light-text truncate">{user.name}</p>
          <p className="text-xs text-dark-textMuted theme-transition light:text-light-textMuted truncate">{user.email}</p>
        </div>
        <button 
          className="p-1 rounded-lg text-dark-textMuted hover:text-dark-text theme-transition light:text-light-textMuted light:hover:text-light-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" 
          aria-label="Profile settings"
        >
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;