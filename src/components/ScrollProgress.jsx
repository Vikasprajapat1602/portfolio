import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useCustomHooks';

/**
 * Scroll Progress Indicator Component
 */
const ScrollProgress = () => {
  const scrollPosition = useScrollPosition();
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = documentHeight > 0 ? (scrollPosition / documentHeight) * 100 : 0;

  return (
    <motion.div
      className="fixed top-16 left-0 h-1 bg-linear-to-r from-cyan-400 via-cyan-500 to-blue-500 z-50"
      style={{
        width: `${progress}%`,
      }}
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;
