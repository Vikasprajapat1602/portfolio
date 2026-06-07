import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import { useInView } from '../hooks/useCustomHooks';
import { useRef } from 'react';

/**
 * Skills Section Component - Displays skills by category with animated progress bars
 */
const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

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

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Title */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
                        Skills & Expertise
                    </h2>
                    <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto" />
                </motion.div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {skillsData.skills.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            className="glassmorphism p-6 rounded-xl"
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                                {category.category}
                            </h3>
                            <motion.div
                                key={category.id}
                                variants={itemVariants}
                                className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white text-xl">
                                        {category.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white">
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="px-4 py-2 text-sm rounded-lg border border-slate-600 bg-slate-800 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>


                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsSection;

{/* <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: (categoryIndex * 0.2 + skillIndex * 0.05),
                    }}
                  >
                    {/* Skill Header */}
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-white font-semibold flex items-center gap-2">
//             <span>{skill.icon}</span>
//             {skill.name}
//           </span>
//           <span className="text-cyan-400 text-sm">{skill.level}%</span>
//         </div>

//         {/* Progress Bar */}
//         <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
//           <motion.div
//             className="h-full bg-linear-to-r from-cyan-400 to-blue-500"
//             initial={{ width: 0 }}
//             animate={isInView ? { width: `${skill.level}%` } : {}}
//             transition={{
//               duration: 1,
//               delay: (categoryIndex * 0.2 + skillIndex * 0.05 + 0.2),
//               ease: 'easeOut',
//             }}
//           />
//         </div>
//       </motion.div>
//     ))}
//   </div> */}