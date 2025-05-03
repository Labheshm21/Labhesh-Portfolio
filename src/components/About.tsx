import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
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
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-light' : 'text-navy'}`}>About Me</h2>
          <div className={`flex-grow h-px ml-4 ${darkMode ? 'bg-slate-dark' : 'bg-slate'}`}></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <p className="mb-4">
              Hello! I'm a Software Engineer with a passion for building innovative digital solutions. 
              Currently pursuing my Master's in Computer Science with a focus on Software Engineering at 
              Worcester Polytechnic Institute, I combine strong technical skills with a dedication to 
              creating impactful applications.
            </p>
            <p className="mb-4">
              My journey in technology began during my undergraduate studies, where I developed a solid 
              foundation in computer engineering principles. Since then, I've expanded my expertise across 
              various programming languages, frameworks, and tools, allowing me to tackle complex problems 
              with creative solutions.
            </p>
            <p>
              I believe in continuous learning and growth, which is why I'm constantly exploring new 
              technologies and methodologies. My goal is to leverage my skills to develop software 
              that makes a positive difference in people's lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className={`relative w-64 h-64 p-2 rounded-md ${darkMode ? 'bg-navy-light' : 'bg-slate-100'}`}>
              <div className="absolute inset-0 border-2 border-teal rounded-md transform translate-x-4 translate-y-4 z-0"></div>
              <img 
                src="/1732674004863.jpg" 
                alt="About" 
                className="relative z-10 w-full h-full object-cover rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x400/0a192f/64ffda?text=About+Me";
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;