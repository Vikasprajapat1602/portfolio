import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import certificatesData from '../data/certificates.json';
import { useInView } from '../hooks/useCustomHooks';
import { formatDate } from '../utils/helpers';
import { FaDownload, FaEye } from 'react-icons/fa';

/**
 * Certificates Section Component
 */
const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selectedCert, setSelectedCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto" />
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {certificatesData.certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-56 overflow-hidden bg-slate-700">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(cert)}
                    className="p-3 rounded-full bg-cyan-500/80 text-white hover:bg-cyan-400"
                  >
                    <FaEye size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-cyan-300 text-sm mb-2">{cert.organization}</p>
                <p className="text-slate-400 text-sm mb-4">
                  Issued: {formatDate(cert.issueDate)}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded bg-cyan-500/20 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/40 flex items-center justify-center gap-2"
                  >
                    <FaDownload size={14} /> View
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 px-3 py-2 rounded bg-blue-500/20 text-blue-400 text-sm font-semibold hover:bg-blue-500/40 flex items-center justify-center gap-2"
                  >
                    <FaEye size={14} /> Preview
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl max-h-[80vh]"
          >
            <motion.img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-red-500/80 text-white hover:bg-red-600"
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
