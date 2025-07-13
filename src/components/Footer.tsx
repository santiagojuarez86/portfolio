import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/90 backdrop-blur-sm text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
              Santiago Juarez
            </h2>
            <p className="text-sm text-gray-400 mt-1">{t('footer.professional')}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Santiago Juarez. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;