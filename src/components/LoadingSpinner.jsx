import { motion } from 'framer-motion';

/**
 * Loading Spinner Component
 */
const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full"
      />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-4 text-cyan-400"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default LoadingSpinner;
