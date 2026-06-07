import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useScrollPosition, useDarkMode } from '../hooks/useCustomHooks';
import { smoothScroll } from '../utils/helpers';
import { BsSun, BsMoon } from 'react-icons/bs';

/**
 * Navbar Component - Sticky navigation bar with mobile menu
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const [isDark, setIsDark] = useDarkMode();

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    smoothScroll(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? 'glassmorphism shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => smoothScroll('home')}
          >
            Vikas's Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1, color: '#06b6d4' }}
                onClick={() => handleNavClick(item.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg glassmorphism text-slate-300 hover:text-cyan-400"
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg glassmorphism text-slate-300 hover:text-cyan-400"
            >
              {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg glassmorphism text-slate-300 hover:text-cyan-400"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 10 }}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 rounded-lg text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
