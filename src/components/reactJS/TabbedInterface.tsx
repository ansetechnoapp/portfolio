import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabbedInterfaceProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

const TabbedInterface: React.FC<TabbedInterfaceProps> = ({ 
  tabs, 
  defaultTab, 
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`tabbed-interface ${className}`}>
      {/* Tab Navigation */}
      <div className="tab-nav border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm 
                transition-colors duration-200 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-300'
                }
              `}
            >
              {tab.icon && (
                <span className="w-4 h-4">
                  {tab.icon}
                </span>
              )}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <div 
          className="animate-fade-in"
          key={activeTab}
        >
          {activeTabContent}
        </div>
      </div>
    </div>
  );
};

export default TabbedInterface;
