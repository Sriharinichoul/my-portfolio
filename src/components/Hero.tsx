import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX / innerWidth - 0.5) * 20;
      const moveY = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-lavender-100 to-green-100 dark:from-sky-900/30 dark:via-purple-900/30 dark:to-green-900/30 transition-all duration-700 ease-in-out"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.05]"></div>
      
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-300/30 dark:bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-lavender-300/30 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-green-300/30 dark:bg-green-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 mb-6">
              Software Developer
            </span>
            
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fadeIn opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            I'm <span className="text-sky-500">Sriharini</span> <span className="text-green-500">Choul</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 opacity-90 animate-fadeIn opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
  Passionate <span className="text-sky-500">CS</span>  <span className="text-green-500">Undergrad</span>
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium hover:from-sky-600 hover:to-sky-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm font-medium border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="opacity-70 hover:opacity-100 transition-opacity duration-300">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;