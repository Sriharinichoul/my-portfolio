import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  
  codeUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Gemini Powered AI Learning Companion',
      description: 'A comprehensive dashboard for online learning platform with engaging content and AI cahtbot for doubt resolution and realtime progress tracking.',
      image: 'https://images.pexels.com/photos/4144223/pexels-photo-4144223.jpeg',
      tags: ['React', 'TypeScript', 'Gemini', 'API'],
      //demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      category: 'web'
    },
    {
      id: 2,
      title: 'Resumify Website',
      description: 'An immersive website for resizing the resume fetched from api link and change the background color and font color .',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['React Native', 'Node.js'],
      //demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      category: 'web'
    },
    {
      id: 3,
      title: 'Student Portfolio',
      description: 'A student portfolio website for representing their skills to the recruiters.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['HTML', 'CSS', 'JavaScript'],
      //demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      category: 'web'
    },
    {
      id: 4,
      title: 'AI-driven Healthcare Chatbot',
      description: 'AI-drivenmultimodal healthcare chatbot to enhance patient engagement and accessibility, integrating NLP and deep learning for personalized assistance.',
      image: 'https://images.pexels.com/photos/5234508/pexels-photo-5234508.jpeg',
      tags: ['React', 'Express', 'MongoDB'],
      //demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      category: 'web'
    },
    {
      id: 5,
      title: 'Resumify App',
      description: 'A comprehensive application for resizing the resume fetched from api link and change the background color and font color .',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      tags: ['Kotlin', 'Android Studio'],
      codeUrl: 'https://github.com/Sriharinichoul/Resumify-app',
      category: 'mobile'
    },
    
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];
  
  return (
    <section id="projects" className="py-24 relative bg-white dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 dark:bg-green-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 dark:bg-sky-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-green-500">Projects</span></h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">A showcase of my best work and the problems I've solved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-green-500 to-sky-500 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors duration-300">{project.title}</h3>
                <p className="text-sm mb-4 opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;