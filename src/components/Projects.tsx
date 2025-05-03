import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data';
import { ExternalLink, Github, FolderGit2, X } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

interface ProjectModalProps {
  project: typeof projects[0];
  darkMode: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, darkMode, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-${project.title}`}
        className={`w-full max-w-3xl rounded-lg p-6 ${
          darkMode ? 'bg-navy-light' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <motion.div layoutId={`icon-${project.title}`} className="text-teal">
            <FolderGit2 size={40} />
          </motion.div>
          <div className="flex items-center space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-teal transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
            <button
              onClick={onClose}
              className="text-slate hover:text-teal transition-colors duration-300"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <motion.h3
          layoutId={`title-${project.title}`}
          className={`text-2xl font-semibold mb-4 ${
            darkMode ? 'text-slate-light' : 'text-navy'
          }`}
        >
          {project.title}
        </motion.h3>

        <motion.p
          layoutId={`desc-${project.title}`}
          className="text-base mb-6"
        >
          {project.description}
        </motion.p>

        <motion.div
          layoutId={`tags-${project.title}`}
          className="flex flex-wrap gap-2"
        >
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`text-sm px-3 py-1 rounded-full ${
                darkMode 
                  ? 'bg-navy text-teal/80' 
                  : 'bg-teal/20 text-navy'
              }`}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-10 max-w-4xl mx-auto"
        >
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-slate-light' : 'text-navy'}`}>Projects</h2>
          <div className={`flex-grow h-px ml-4 ${darkMode ? 'bg-slate-dark' : 'bg-slate'}`}></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layoutId={`project-${project.title}`}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg p-6 h-full flex flex-col cursor-pointer ${
                darkMode ? 'bg-navy-light hover:bg-navy-light/80' : 'bg-slate-100 hover:bg-slate-200'
              } transition-colors duration-300 group`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <motion.div
                  layoutId={`icon-${project.title}`}
                  className="text-teal"
                >
                  <FolderGit2 size={40} />
                </motion.div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-teal transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <motion.h3
                layoutId={`title-${project.title}`}
                className={`text-xl font-semibold mb-2 group-hover:text-teal transition-colors duration-300 ${
                  darkMode ? 'text-slate-light' : 'text-navy'
                }`}
              >
                {project.title}
              </motion.h3>

              <motion.p
                layoutId={`desc-${project.title}`}
                className="text-sm flex-grow mb-4"
              >
                {project.description}
              </motion.p>

              <motion.div
                layoutId={`tags-${project.title}`}
                className="flex flex-wrap gap-2 mt-auto"
              >
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`text-xs px-2 py-1 rounded-full ${
                      darkMode 
                        ? 'bg-navy text-teal/80' 
                        : 'bg-teal/20 text-navy'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            darkMode={darkMode}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;