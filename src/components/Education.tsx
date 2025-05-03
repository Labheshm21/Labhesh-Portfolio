import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-10 max-w-4xl mx-auto"
        >
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Education</h2>
          <div className={`flex-grow h-px ml-4 ${darkMode ? 'bg-slate-dark' : 'bg-slate'}`}></div>
        </motion.div>

        <VerticalTimeline lineColor={darkMode ? '#495670' : '#8892b0'}>
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              date={edu.date}
              dateClassName={darkMode ? 'text-slate-light' : 'text-slate-dark'}
              iconStyle={{ background: '#64ffda', color: '#0a192f' }}
              icon={<GraduationCap />}
              contentStyle={{ 
                background: darkMode ? '#112240' : '#f1f5f9', 
                color: darkMode ? '#ccd6f6' : '#0a192f',
                boxShadow: darkMode 
                  ? '0 3px 0 #64ffda'
                  : '0 3px 0 #64ffda'
              }}
              contentArrowStyle={{ 
                borderRight: darkMode 
                  ? '7px solid #112240' 
                  : '7px solid #f1f5f9' 
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">
                {edu.degree}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-1">
                {edu.school}
              </h4>
              {edu.description && (
                <p className="mt-4 text-sm">{edu.description}</p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Education;