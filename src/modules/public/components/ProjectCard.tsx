import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  projectUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50">
      <a 
        href={project.projectUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="aspect-w-16 aspect-h-9 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
          <img 
            src={project.thumbnailUrl} 
            alt={project.title}
            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full">
              <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </a>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-600 line-clamp-5 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mt-6 flex items-center justify-between">
          <a 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-all duration-300 group/link"
          >
            <span className="relative">
              View Project
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover/link:w-full transition-all duration-300"></span>
            </span>
            <svg 
              className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
          <div className="flex space-x-2">
            <span className="inline-block w-2 h-2 bg-primary-400 rounded-full"></span>
            <span className="inline-block w-2 h-2 bg-accent-purple/40 rounded-full"></span>
            <span className="inline-block w-2 h-2 bg-accent-teal/40 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};