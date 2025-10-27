import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useLanguage();
  const isPlaceholder = project.title.includes('Construcción');

  return (
    <article 
      className="group animate-on-scroll opacity-0 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      style={{ transitionDelay: `${index * 150}ms` }}
      role="listitem"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={`Screenshot del proyecto ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900 text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {!isPlaceholder && (
          <div className="flex space-x-4 pt-2">
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={18} className="mr-1" />
                <span>{t('projects.repo')}</span>
              </a>
            )}
            
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={18} className="mr-1" />
                <span>{t('projects.demo')}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;