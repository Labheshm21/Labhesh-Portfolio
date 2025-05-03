import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../data';
import { Briefcase as BriefcaseBusiness, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string | undefined) => {
    switch (iconName) {
      case 'BriefcaseBusiness':
        return <BriefcaseBusiness />;
      case 'GraduationCap':
        return <GraduationCap />;
      default:
        return <BriefcaseBusiness />;
    }
  };

  return (
    <section id="experience" className="py-20">
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
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Experience</h2>
          <div className={`flex-grow h-px ml-4 ${darkMode ? 'bg-slate-dark' : 'bg-slate'}`}></div>
        </motion.div>

        <VerticalTimeline lineColor={darkMode ? '#495670' : '#8892b0'}>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              dateClassName={darkMode ? 'text-slate-light' : 'text-slate-dark'}
              iconStyle={{ background: '#64ffda', color: '#0a192f' }}
              icon={getIcon(experience.icon)}
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
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-1">
                {experience.company} | {experience.location}
              </h4>
              <div className="mt-4">
                {experience.description.map((item, idx) => (
                  <p key={idx} className="mb-2 text-sm">
                    • {item}
                  </p>
                ))}
              </div>
              {experience.skills && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode 
                          ? 'bg-navy text-teal' 
                          : 'bg-teal/20 text-navy'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;