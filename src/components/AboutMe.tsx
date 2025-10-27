import React from 'react';
import { useLanguage } from '../context/useLanguage';
import AboutMeContent from './AboutMeContent';
import TechnologyCarousel from './TechnologyCarousel';

const AboutMe: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about" 
      className="pt-24 pb-16 bg-gray-900/90 backdrop-blur-sm"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-on-scroll opacity-0"
        >
          {t('about.title')}
        </h2>
        
        <div className="flex flex-col space-y-16">
          <AboutMeContent />
          <TechnologyCarousel />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;