import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import { motion } from 'framer-motion';

export const FeaturedProjectsSection: React.FC = () => {
  const { content } = useContent();
  const featuredProjects = content?.portfolio?.slice(0, 4) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section id="projects" className="bg-[#F5F5F5] dark:bg-[#111827] pt-12 sm:pt-20 lg:pt-28 pb-12 sm:pb-20 lg:pb-28 overflow-hidden transition-colors duration-300">
      <motion.div 
        className="w-full max-w-[1440px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        
        {/* Badge Row */}
        <motion.div variants={itemVariants} className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] leading-[12px] font-semibold flex items-center justify-center transition-colors duration-300 shadow-sm">
            2
          </div>
          <div className="text-[12px] leading-[13px] font-medium border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 transition-colors duration-300 bg-white/50 dark:bg-slate-800/50">
            Featured client work
          </div>
        </motion.div>

        {/* Heading h2 */}
        <motion.div variants={itemVariants} className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 dark:text-white font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-8 sm:mb-14 lg:mb-16 transition-colors duration-300">
            Our projects
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-5 sm:px-8 lg:px-12">
          {featuredProjects.map((project: any) => {
            let tagsList = [];
            try { tagsList = JSON.parse(project.tags || '[]'); } catch(e) {}
            return (
              <motion.div 
                variants={itemVariants}
                key={project.id} 
                className="group relative block bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-2xl dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-[#2563eb]/30 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Metric Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 dark:bg-black/90 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm px-4 py-2 rounded-full text-[13px] font-bold text-gray-900 dark:text-white z-10 transition-colors duration-300">
                    {project.metrics}
                  </div>
                </div>
                <div className="p-8 relative overflow-hidden bg-white dark:bg-slate-800 transition-colors duration-300 z-10">
                  <motion.div 
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="text-[#2563eb] font-bold text-[13px] uppercase tracking-[0.1em] mb-2">{project.category}</div>
                    <h3 className="text-2xl sm:text-3xl mb-5 group-hover:text-[#2563eb] transition-colors duration-300 text-gray-900 dark:text-white font-medium">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {tagsList.map((tag: string) => (
                        <span key={tag} className="text-xs bg-gray-50 dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600 px-3 py-1.5 rounded-full text-gray-600 dark:text-gray-300 font-medium transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div variants={itemVariants} className="px-5 sm:px-8 lg:px-12 mt-16 lg:mt-20 flex justify-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/portfolio" className="interactive-glow-button group bg-[#2563eb] hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/20 text-white text-[15px] font-medium rounded-full pl-8 pr-3 py-3 flex items-center gap-4 transition-all duration-300">
              <div className="flex-col overflow-hidden h-[24px] relative w-auto">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[24px] flex items-center">View Full Portfolio</span>
                  <span className="h-[24px] flex items-center">View Full Portfolio</span>
                </div>
              </div>
              <div className="bg-white text-[#2563eb] w-10 h-10 rounded-full flex items-center justify-center">
                <ArrowRight size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};
