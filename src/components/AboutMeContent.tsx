import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutMeContent: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="animate-on-scroll opacity-0 max-w-4xl mx-auto text-center" style={{transitionDelay: '200ms'}}>
      <h3 className="text-2xl font-semibold mb-6 text-white">
        {t('about.subtitle')}
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
        {t('about.description1')}
      </p>
      <p className="text-gray-300 leading-relaxed text-lg">
        {t('about.description2')}
      </p>
    </div>
  );
};

export default AboutMeContent;