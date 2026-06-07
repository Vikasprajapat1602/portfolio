import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useCustomHooks';
import { smoothScroll } from '../utils/helpers';
import { FaArrowUp } from 'react-icons/fa';

/**
 * Back to Top Button Component
 */
const BackToTop = () => {
  const scrollPosition = useScrollPosition();
  const isVisible = scrollPosition > 300;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      onClick={() => smoothScroll('home')}
      className="fixed bottom-8 right-8 p-3 rounded-full glassmorphism text-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/50 z-40"
      title="Back to top"
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
};

export default BackToTop;
