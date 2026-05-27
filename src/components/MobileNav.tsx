import React from 'react';

interface MobileNavProps {
  activeTab: 'explore' | 'search' | 'lists' | 'profile';
  onTabChange: (tab: 'explore' | 'search' | 'lists' | 'profile') => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'explore', label: 'Explore', icon: '🏠' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'lists', label: 'Lists', icon: '📋' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-3 flex flex-col items-center gap-1 text-xs transition-colors ${
              activeTab === tab.id
                ? 'text-easishop-green border-t-2 border-easishop-green'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
