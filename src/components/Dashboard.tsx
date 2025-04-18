import React from 'react';

const DashboardCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`h-32 rounded-lg animate-pulse border theme-transition
      bg-dark-hover light:bg-light-hover
      border-dark-border light:border-light-border ${className}`}
  />
);

const Dashboard: React.FC = () => {
  const cardConfigs = [
    '', '', '', 'md:col-span-2', '', '', 'lg:col-span-1', ''
  ];

  return (
    <main className="flex-1 overflow-auto p-4 lg:p-6">
      <div className="animate-fadeIn rounded-lg p-6 shadow-sm border theme-transition
        bg-dark-card light:bg-light-card
        border-dark-border light:border-light-border">
        
        <h2 className="text-2xl font-bold tracking-tight text-dark-text light:text-light-text mb-1">
          Welcome back!
        </h2>
        <p className="text-dark-textMuted light:text-light-textMuted mb-6">
          Here's your latest overview.
        </p>

        <section className="space-y-4">
          <h3 className="text-lg font-medium text-dark-text light:text-light-text">
            Dashboard Content Placeholder
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardConfigs.map((extraClass, index) => (
              <DashboardCard key={index} className={extraClass} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
