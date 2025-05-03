import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 py-4 ${
        scrolled
          ? 'bg-white/90 dark:bg-navy-dark/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      } transition-all duration-300`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div className="text-2xl font-bold text-teal" variants={itemVariants}>
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav className="hidden md:flex items-center space-x-8" variants={itemVariants}>
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="text-sm font-medium hover:text-teal transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-navy-light py-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                className="block py-3 text-center text-sm font-medium hover:text-teal transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
