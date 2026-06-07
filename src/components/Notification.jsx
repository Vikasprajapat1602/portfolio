import { motion } from 'framer-motion';

/**
 * Notification Component for form messages
 */
const Notification = ({ message, type = 'success', isVisible, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50';
  const textColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed bottom-8 right-8 px-6 py-3 rounded-lg border ${bgColor} ${textColor} font-semibold z-40`}
    >
      {message}
    </motion.div>
  );
};

export default Notification;
