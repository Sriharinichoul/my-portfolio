import React, { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category:  'programming Languages' | 'expertise areas'|'frontend'| 'tools' ;
  color: string;
}

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const skills: Skill[] = [
    { name: 'HTML5', level: 95, category: 'frontend', color: 'bg-orange-600' },
    { name: 'CSS3', level: 90, category: 'frontend', color: 'bg-blue-500' },
    {name : 'DataStructures',level : 70,category:'expertise areas',color:'bg-purple-800'},
    {name : 'OOP',level : 90,category:'expertise areas',color:'bg-pink-400'},
    { name: 'Git', level: 70, category: 'tools', color: 'bg-yellow-400' },
    {name:'Java',level :90,category: 'programming Languages',color:'bg-green-600'},
    {name:'C',level :90,category: 'programming Languages',color:'bg-purple-600'},
    {name:'Python',level :70,category: 'programming Languages',color:'bg-orange-600'},
    
  ];
  
  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);
  
  const filters = [
    { id: 'all', name: 'All Skills' },
    {id:'programming Languages',name:'Programming Languages'},
    {id:'expertise areas' ,name: 'Expertise areas'},
    { id: 'frontend', name: 'Frontend' },    
    { id: 'tools', name: 'Tools' }
    
  ];
  
  return (
    <section id="skills" className="py-24 relative bg-gradient-to-br from-lavender-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-lavender-200/40 dark:bg-lavender-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-sky-200/40 dark:bg-sky-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-lavender-500">Skills</span></h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">The tools and technologies I use to bring digital products to life.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-sky-500 to-lavender-500 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
              
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} rounded-full`} 
                  style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;