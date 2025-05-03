import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';


interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Labheshm21' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/labhesh-mahajan/' },
    { icon: <SiLeetcode size={20} />, url: 'https://leetcode.com/u/specialist621/' },
  ];

  return (
    <footer className={`py-8 ${darkMode ? 'bg-navy-dark' : 'bg-slate-100'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  darkMode 
                    ? 'text-slate hover:text-teal hover:bg-navy-light' 
                    : 'text-slate-dark hover:text-teal hover:bg-slate-200'
                } transition-colors duration-300`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-sm text-center text-slate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Designed & Built by <span className="text-teal">Labhesh Mahajan</span>
          </motion.p>
          
          <motion.p
            className="text-xs text-center text-slate mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            © {new Date().getFullYear()} All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;