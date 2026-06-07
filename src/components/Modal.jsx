import { motion, AnimatePresence } from 'framer-motion';

/**
 * Modal Component for project details
 */
const Modal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glassmorphism rounded-xl p-6 max-w-2xl max-h-[80vh] overflow-y-auto"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 text-2xl"
            >
              ✕
            </motion.button>

            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />

            {/* Project Title */}
            <h2 className="text-3xl font-bold gradient-text mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-slate-300 mb-4">
              {project.details}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Technologies:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/50"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg border-2 border-cyan-500 text-cyan-400 font-semibold text-center hover:bg-cyan-500/10"
              >
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
