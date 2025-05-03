import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-teal mb-4 font-mono"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-slate-light' : 'text-navy'}`}
          >
            Labhesh Mahajan.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate"
          >
         Building apps is just the start...I'm here to craft digital experiences powered by intelligence.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-lg mb-8 max-w-lg"
          >
            I'm a computer engineer specializing in building exceptional digital experiences.
            Currently focused on software engineering at Worcester Polytechnic Institute.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className={`px-6 py-3 border-2 border-teal text-teal rounded-md font-medium
                ${darkMode 
                  ? 'hover:bg-teal/10' 
                  : 'hover:bg-teal/10'
                } transition-colors duration-300`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              className={`px-6 py-3 bg-teal text-navy-dark rounded-md font-medium
                hover:bg-teal/90 transition-colors duration-300`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-teal">
            <img 
              src="/WhatsApp Image 2025-05-01 at 11.44.54 PM.jpeg" 
              alt="Labhesh Mahajan" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex justify-center mt-16"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-teal"
        >
          <ArrowDownCircle size={32} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;