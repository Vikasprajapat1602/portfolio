import { motion } from 'framer-motion';
import aboutData from '../data/about.json';
import { useInView } from '../hooks/useCustomHooks';
import { useRef } from 'react';

/**
 * About Section Component
 */
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const { name, role, bio, education, objectives } = aboutData.about;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image and Introduction */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            
            <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
            <p className="text-cyan-400 text-lg mb-4 font-semibold">{role}</p>
            <p className="text-slate-300 leading-relaxed">{bio}</p>
          </motion.div>

          {/* Education and Experience Timeline */}
          <motion.div variants={itemVariants}>
            {/* Education */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="glassmorphism p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-cyan-300">{edu.institution}</p>
                    <p className="text-slate-400 text-sm">{edu.year} • {edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            {/* <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (index + education.length) * 0.1 }}
                    className="glassmorphism p-4 rounded-lg border-l-4 border-cyan-500"
                  >
                    <h4 className="font-semibold text-white">{exp.position}</h4>
                    <p className="text-cyan-300">{exp.company}</p>
                    <p className="text-slate-400 text-sm">{exp.duration}</p>
                    <p className="text-slate-300 text-sm mt-2">{exp.details}</p>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Objectives */}
        <motion.div
          variants={itemVariants}
          className="mt-12 glassmorphism p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Career Objectives</h3>
          <p className="text-slate-300 leading-relaxed">{objectives}</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
