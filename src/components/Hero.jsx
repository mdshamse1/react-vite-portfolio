import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="w-full px-4 lg:px-0 py-24" id='hero'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-40 md:gap-4 items-stretch justify-between">
        <motion.div 
          className="flex-1 tracking-wide space-y-4 md:ml-24"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl text-center md:text-left md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I am a full stack web developer
          </motion.h1>
          <motion.p 
            className="text-base text-center md:text-left text-gray-900 dark:text-gray-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            with expertise in building scalable web applications using modern technologies like React, Node.js, MongoDB, and Tailwind CSS. Passionate about clean code, performance optimization, and delivering seamless user experiences. Always eager to learn and stay updated with the latest industry trends.
          </motion.p>
          <motion.div 
            className="flex items-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <Link 
              to="Contact" 
              className="px-10 py-2.5 mt-4 text-white dark:text-black dark:hover:text-white text-sm md:text-base font-medium bg-black hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-700 rounded-lg cursor-pointer transition-transform transform hover:scale-105"
              smooth={true} 
              offset={0} 
              duration={100}
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQHxBtvpeVOTQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705134579301?e=1748476800&v=beta&t=VMPckBFcLHCFFIXGc3a4SwZBbwmW-lEn2IrYd7x32AA" 
            alt="Profile" 
            className="w-50 h-50 md:w-80 md:h-80 object-cover rounded-full transform transition-all hover:shadow-2xl shadow duration-500 hover:-rotate-3 "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;