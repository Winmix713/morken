import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="grid min-h-screen w-full bg-dark-bg text-dark-text light:bg-light-bg light:text-light-text md:grid-cols-[18rem_1fr]">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="grid grid-rows-[auto_1fr] h-full overflow-hidden transition-all duration-300 ease-in-out">
        <Header onMenuClick={toggleSidebar} title="Overview" />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
