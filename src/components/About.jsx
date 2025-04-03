import React from 'react';
import { motion } from 'framer-motion';
import codeImg from "../assets/code.png";

function About() {
  return (
    <section className="w-full px-6 lg:px-0 py-24 bg-gray-50 dark:bg-gray-900" id="About">
      <motion.div 
        className="max-w-5xl mx-auto text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl text-center font-bold mb-12 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <motion.div 
            className="flex-1 space-y-6 px-6 md:px-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-center md:text-left text-2xl font-semibold">Hello! I'm Md Shamse</h3>
            <p className="text-lg text-center md:text-left leading-relaxed">
              I am a Full-Stack Developer with a passion for building efficient and user-friendly web applications. I specialize in 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> React, Node.js, MongoDB, and Tailwind CSS</span>, and I enjoy working on projects that 
              combine frontend aesthetics with powerful backend logic. I'm also deeply interested in 
              <span className="font-semibold text-blue-600 dark:text-blue-400">Data Science</span> and love exploring AI-driven solutions.
            </p>
          </motion.div>
          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            <img 
              src={codeImg}
              alt="Md Shamse" 
              className="w-60 h-60 object-cover rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:cursor-zoom-in"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
