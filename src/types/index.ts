// Navigation item type definition
export interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: {
    text: string;
    color: string;
  };
  isActive?: boolean;
}

// Navigation section type
export interface NavSection {
  title: string;
  items: NavItem[];
}

// User profile type
export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  isOnline: boolean;
}

// Team type
export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
}