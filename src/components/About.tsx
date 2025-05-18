import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-white dark:bg-gray-900">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-200/30 dark:bg-sky-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-200/30 dark:bg-green-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-sky-500">Me</span></h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">My journey, my passion, and what drives me forward.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-500 z-10 relative">
              <img 
                src="Sriharini.jpg" 
                alt="Sriharini Choul" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-lavender-400 dark:bg-lavender-600 rounded-xl transform rotate-2 hover:rotate-0 transition-all duration-500 -z-10"></div>
          </div>
          
          <div>
  <h3 className="text-2xl font-bold mb-6">Hello there! I'm Sriharini Choul</h3>

  <p className="mb-6 text-lg">
    I'm a passionate <span className="text-sky-500 font-medium">Computer Science Engineering undergraduate</span> with a strong foundation in software development, 
    specializing in building intelligent solutions through AI and data-driven technologies.
  </p>

  <p className="mb-6 text-lg">
    My journey in tech began with a deep interest in solving real-world problems, which led me to explore areas like machine learning, 
    competitive programming, and full-stack development. Since then, I’ve been actively engaged in developing impactful projects and honing my skills.
  </p>

 


            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <p className="font-medium text-sky-500 mb-1">Email</p>
                <p className="opacity-80">22211a0568@bvrit.ac.in</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <p className="font-medium text-green-500 mb-1">Location</p>
                <p className="opacity-80">BVRIT , Narsapur</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <p className="font-medium text-lavender-500 mb-1">Freelance</p>
                <p className="opacity-80">Available</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <p className="font-medium text-sky-500 mb-1">Experience</p>
                <p className="opacity-80">Fresher
                  
                </p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;