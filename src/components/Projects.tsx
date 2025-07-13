import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "🚧 Sección en Construcción",
      description: "Nuevos proyectos emocionantes están en desarrollo. ¡Mantente atento para más contenido!",
      technologies: ["Próximamente"],
      repoUrl: "#",
      demoUrl: "#",
      imageUrl: "/images/projects/work-in-progress.webp"
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

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-800/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white animate-on-scroll opacity-0">
          {t('projects.title')}
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0" style={{transitionDelay: '200ms'}}>
          {t('projects.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;