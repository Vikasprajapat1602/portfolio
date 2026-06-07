import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { smoothScroll } from '../utils/helpers';
import { useEffect, useState } from 'react';

/**
 * Hero Section Component - Full-screen hero with animated typing effect
 */
const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'AI/ML Enthusiast • Web Developer • CS Professional';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ left: '-10%', top: '-10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ right: '-10%', bottom: '-10%' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-cyan-400 font-semibold text-lg">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-4"
        >
          Vikas Prajapat
        </motion.h1>

        {/* Typing Role */}
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6 h-12">
          <span className="text-cyan-400">{displayedText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-cyan-400"
          >
            |
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-300 text-lg max-w-2xl mx-auto mb-8"
        >
          Transforming ideas into powerful digital solutions through modern web technologies, intuitive user experiences, and scalable architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScroll('projects')}
            className="px-8 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            View Projects <FaArrowRight />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => smoothScroll('contact')}
            className="px-8 py-3 rounded-lg border-2 border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500/10"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
