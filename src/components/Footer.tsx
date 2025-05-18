import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gradient-to-r from-sky-100 via-lavender-100 to-green-100 dark:from-sky-900/30 dark:via-purple-900/30 dark:to-green-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="flex-shrink-0 font-bold text-xl">
              <span className="text-sky-500">Sriharini</span>
              <span className="text-green-500">Choul</span>
            </a>
            <p className="mt-2 text-sm opacity-75">Passionate CS undergrad</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Sriharinichoul" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/sriharini-choul-5173a1259" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:22211a0568@bvrit.ac.in" className="text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Sriharini Choul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;