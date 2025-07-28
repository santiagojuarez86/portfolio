import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-gray-700 text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center space-x-1"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <Languages size={16} />
      <span className="text-sm font-medium">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageToggle;