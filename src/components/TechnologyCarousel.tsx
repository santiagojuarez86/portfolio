import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  PHPIcon,
  MySQLIcon,
  MongoDBIcon,
  NodeIcon,
  DockerIcon
} from '../icons';

interface Technology {
  icon: React.ReactNode;
  name: string;
}

const TechnologyCarousel: React.FC = () => {
  const { t } = useLanguage();

  const technologies: Technology[] = [
    { 
      icon: <ReactIcon />,
      name: 'React'
    },
    { 
      icon: <JavaScriptIcon />,
      name: 'JavaScript'
    },
    { 
      icon: <TypeScriptIcon />,
      name: 'TypeScript'
    },
    { 
      icon: <TailwindIcon />,
      name: 'Tailwind CSS'
    },
    { 
      icon: <PHPIcon />,
      name: 'PHP'
    },
    { 
      icon: <MySQLIcon />,
      name: 'MySQL'
    },
    { 
      icon: <MongoDBIcon />,
      name: 'MongoDB'
    },
    { 
      icon: <NodeIcon />,
      name: 'Node.js'
    },
    { 
      icon: <DockerIcon />,
      name: 'Docker'
    }
  ];

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

  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div className="animate-on-scroll opacity-0 w-full" style={{transitionDelay: '400ms'}}>
      <h3 className="text-2xl font-semibold mb-12 text-white text-center">
        {t('about.technologies')}
      </h3>
      
      <div className="relative overflow-hidden max-w-6xl mx-auto">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900/90 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900/90 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-infinite-scroll" style={{ width: 'fit-content' }}>
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 flex-shrink-0 mx-8"
            >
              <div className="p-6 bg-gray-800 rounded-xl">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyCarousel;