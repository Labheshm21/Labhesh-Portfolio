import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = activeCategory && activeCategory !== 'All' 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-10"
        >
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Skills</h2>
          <div className={`flex-grow h-px ml-4 ${darkMode ? 'bg-slate-dark' : 'bg-slate'}`}></div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${activeCategory === category || (category === 'All' && !activeCategory)
                  ? 'bg-teal text-navy-dark'
                  : darkMode
                    ? 'bg-navy-light text-slate-light hover:bg-navy-light/80'
                    : 'bg-slate-100 text-slate-dark hover:bg-slate-200'
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              className={`p-4 rounded-lg ${darkMode ? 'bg-navy-light' : 'bg-slate-100'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-teal">{skill.percentage}%</span>
              </div>
              <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-navy' : 'bg-slate-200'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.05 }}
                  className="h-full rounded-full bg-teal"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;