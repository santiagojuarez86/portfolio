import React, { useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';

const Hero: React.FC = () => {
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
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        {/* Critical content - no animation delay for LCP */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
            Santiago Juarez
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
            {t('hero.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;