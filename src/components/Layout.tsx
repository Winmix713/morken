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
    <div className="flex min-h-screen w-full bg-dark-bg text-dark-text light:bg-light-bg light:text-light-text">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col h-full w-full overflow-hidden md:ml-72 transition-all duration-300 ease-in-out">
        <Header onMenuClick={toggleSidebar} title="Overview" />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
