import React from 'react';

const certificates = {
  'HTML': '',
  'CSS': '',
  'JavaScript': '',
  'TypeScript': '',
  'Node.js': '',
  'Bootstrap': '',
  'Tailwind': '',
  'React': '',
  'React Native': '',
  'Angular': '',
  'Python': '',
  'Java': '',
  'C++': '',
  'Ionic': '',
  'API Integration': ''
};

function Skills() {
  return (
    <section className="w-full px-6 md:px-0 py-24 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800" id="Skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 tracking-wide text-gray-800 dark:text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(certificates).map((skill, index) => (
            <a 
              key={index} 
              href={certificates[skill]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{skill}</h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;