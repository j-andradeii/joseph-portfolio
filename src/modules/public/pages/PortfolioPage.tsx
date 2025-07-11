import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import cebuanoScreenshot from '@assets/img/cebuanolanguage.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Australian Coal Preparation Society',
    description: `This is an Angular 15.2 frontend application that serves as the client-side interface for the Australian Coal Preparation Society's membership and event management platform, connecting to a Symfony     
   5.4 PHP backend API. The frontend stack includes TypeScript, PrimeNG UI components, JWT authentication, and integrates with payment gateways (eWay/Stripe) and WordPress CMS, organized into three       
  portals (public, member, and admin) for comprehensive society management.`,
    thumbnailUrl: 'https://wp.acps.com.au/wp-content/uploads/2024/03/Coal-mining-at-an-open-pit-1-1.jpg',
    projectUrl: 'https://www.acps.com.au'
  },
  {
    id: 2,
    title: 'ACPS CONFERENCE 2026',
    description: `This is a conference and membership management system for the Australian Coal Preparation
  Society (ACPS) with a Symfony 5.4 PHP backend featuring payment processing, email
  integrations, and AWS S3 storage. The frontend is built with React 19, TypeScript, and
  PrimeReact components, creating a modern full-stack application containerized with Docker.`,
    thumbnailUrl: 'https://wp.acps2026conference.com/wp-content/uploads/2025/04/ACPS-conference-Brand-v2-banner-2048x1041.jpg',
    projectUrl: 'https://acps2026conference.com/'
  },
  {
    id: 3,
    title: 'Cebuano Language',
    description: `Cebuano Language Café is an e-commerce platform for Cebuano language learning materials, built with React, TypeScript, and
  Firebase. It features a complete learning management system with role-based access control, a marketplace for language
  resources, secure content delivery, and comprehensive user account management with progress tracking.`,
    thumbnailUrl: cebuanoScreenshot,
    projectUrl: 'https://cebuanolanguagecafe.com/'
  },
];
export const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-purple/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-purple rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-primary-800 to-primary-600 bg-clip-text text-transparent">
              Creative Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Crafting exceptional digital experiences through innovative web development and thoughtful design
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#portfolio" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section> */}

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Recent Projects
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore my latest work showcasing modern web development techniques and creative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};