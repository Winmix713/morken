import React from 'react';
import Logo from './Logo';
import TeamSelector from './TeamSelector';
import NavigationSection from './NavigationSection';
import UserProfile from './UserProfile';
import { NavSection, Team, UserProfile as UserProfileType } from '../types';
import { Home, BarChart3, Clock, CreditCard, Users, Folder, CheckSquare, BarChart, HelpCircle, FileText, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationSections: NavSection[] = [
    {
      title: 'Overview',
      items: [
        {
          href: '/',
          icon: <Home />,
          label: 'Home',
          isActive: true
        },
        {
          href: '/analytics',
          icon: <BarChart3 />,
          label: 'Analytics',
          badge: { text: 'New', color: 'green-600/20' }
        },
        {
          href: '/tracker',
          icon: <Clock />,
          label: 'Tracker'
        },
        {
          href: '/perks',
          icon: <CreditCard />,
          label: 'Perks'
        }
      ]
    },
    {
      title: 'Organization',
      items: [
        {
          href: '/team',
          icon: <Users />,
          label: 'Team',
          badge: { text: '3', color: 'dark-accent/80' }
        },
        {
          href: '/projects',
          icon: <Folder />,
          label: 'Projects'
        },
        {
          href: '/tasks',
          icon: <CheckSquare />,
          label: 'Tasks'
        },
        {
          href: '/captable',
          icon: <BarChart3 />,
          label: 'Cap Table'
        },
        {
          href: '/expenses',
          icon: <CreditCard />,
          label: 'Expenses'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          href: '/support',
          icon: <HelpCircle />,
          label: 'Help Center'
        },
        {
          href: '/changelog',
          icon: <FileText />,
          label: 'Changelog'
        }
      ]
    }
  ];

  const currentTeam: Team = {
    id: '1',
    name: 'Catalyst',
    shortName: 'C',
    color: 'blue'
  };

  const userProfile: UserProfileType = {
    name: 'Erica Johnson',
    email: 'erica@catalyst.com',
    avatarUrl: 'https://via.placeholder.com/40/3b82f6/f9fafb?text=EJ',
    isOnline: true
  };

  const sidebarClasses = `
    fixed md:static inset-y-0 left-0 z-30 
    transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 
    transition-transform duration-300 ease-in-out 
    w-72 h-full bg-dark-sidebar border-r border-dark-border theme-transition 
    light:bg-light-sidebar light:border-light-border
    flex flex-col
  `;

  return (
    <div className={sidebarClasses} id="sidebar">
      {/* Logo Start */}
      <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-dark-border theme-transition light:border-light-border">
        <Logo />
        <button
          onClick={onClose}
          className="md:hidden rounded-lg p-2 text-dark-textMuted hover:bg-dark-hover hover:text-dark-text theme-transition light:text-light-textMuted light:hover:bg-light-hover light:hover:text-light-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      {/* Logo End */}

      {/* Team Selector Start */}
      <div className="px-3 py-3 border-b border-dark-border theme-transition light:border-light-border">
        <TeamSelector currentTeam={currentTeam} />
      </div>
      {/* Team Selector End */}

      {/* Navigation Start */}
      <div className="flex-1 overflow-y-auto sidebar-scroll">
        <div className="w-full relative flex flex-col gap-1 p-3">
          <nav className="w-full flex flex-col gap-6" aria-label="Main Navigation">
            {navigationSections.map((section, index) => (
              <NavigationSection key={`section-${index}`} section={section} />
            ))}
          </nav>
        </div>
      </div>
      {/* Navigation End */}

      {/* User Profile Start */}
      <UserProfile user={userProfile} />
      {/* User Profile End */}
    </div>
  );
};

export default Sidebar;