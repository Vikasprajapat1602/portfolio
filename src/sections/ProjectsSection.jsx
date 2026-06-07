import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import projectsData from '../data/projects.json';
import { useInView } from '../hooks/useCustomHooks';
import Modal from '../components/Modal';
import { filterProjectsByTech, searchProjects } from '../utils/helpers';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Projects Section Component - Display projects with filtering and search
 */
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selectedTech] = useState('All');
  const [searchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get unique technologies
  // -------------------------------------
  

  // Filter and search projects
// -------------------------------------


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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto" />
        </motion.div>

        {/* Search Bar */}
        {/* <motion.div variants={itemVariants} className="mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg glassmorphism border border-cyan-500/30 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20"
          />
        </motion.div> */}

        {/* Technology Filter */}
        {/* <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-2">
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedTech === tech
                  ? 'bg-linear-to-r from-cyan-500 to-blue-500 text-white'
                  : 'glassmorphism text-slate-300 hover:text-cyan-400'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {(searchProjects(
                      filterProjectsByTech(projectsData.projects, selectedTech),
                      searchTerm
                  )).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded text-xs text-slate-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 px-3 py-2 rounded bg-cyan-500/20 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/40 flex items-center justify-center gap-2"
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 px-3 py-2 rounded bg-blue-500/20 text-blue-400 text-sm font-semibold hover:bg-blue-500/40 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {(searchProjects(
                  filterProjectsByTech(projectsData.projects, selectedTech),
                  searchTerm
              )).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </section>
  );
};

export default ProjectsSection;
