import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { awards } from '../data';
import { Award } from 'lucide-react';

interface AwardsProps {
  darkMode: boolean;
}

const Awards: React.FC<AwardsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" className="py-20">
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
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Awards</h2>
          <div className={`flex-grow h-px ml-4 ${darkMode ? 'bg-slate-dark' : 'bg-slate'}`}></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-lg flex items-start ${
                darkMode ? 'bg-navy-light' : 'bg-slate-100'
              }`}
            >
              <div className={`p-3 rounded-full mr-4 ${
                darkMode ? 'bg-navy text-teal' : 'bg-teal/20 text-navy'
              }`}>
                <Award size={24} />
              </div>
              <div>
                <h3 className={`text-xl font-semibold ${
                  darkMode ? 'text-slate-light' : 'text-navy'
                }`}>
                  {award.title}
                </h3>
                <p className="text-teal mt-1">{award.organization}</p>
                <p className="text-sm text-slate mt-1">{award.date}</p>
                {award.description && (
                  <p className="mt-2">{award.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;