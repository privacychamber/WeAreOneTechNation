import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  const navigate = useNavigate();
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 1 }
    },
  };

  return (
    <section id="studio" className="bg-white dark:bg-[#0B0F1A] pt-12 sm:pt-20 lg:pt-32 pb-10 sm:pb-16 lg:pb-24 overflow-hidden transition-colors duration-300">
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
            1
          </div>
          <div className="text-[12px] leading-[13px] font-medium border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 transition-colors duration-300 bg-gray-50/50 dark:bg-slate-800/30">
            Introducing WeAreOneTechNation
          </div>
        </motion.div>

        {/* Heading h2 */}
        <motion.div variants={itemVariants} className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 dark:text-white font-medium leading-[1.12] tracking-[-0.02em] text-[clamp(1.5rem,4vw,3.2rem)] mb-10 sm:mb-16 lg:mb-28 transition-colors duration-300">
            Strategy-led creatives, delivering <br className="hidden sm:block" /> results in digital and beyond.
          </h2>
        </motion.div>

        {/* Content Area */}
        <div className="px-5 sm:px-8 lg:px-12">
          
          {/* Mobile/Tablet Layout (< lg) */}
          <div className="lg:hidden flex flex-col gap-8">
            <motion.p variants={itemVariants} className="text-[15px] leading-[1.6] font-medium text-gray-900 dark:text-gray-300 transition-colors duration-300">
              Through research, creative thinking and iteration we help growing brands realize their digital full potential.
            </motion.p>
            
            <motion.button 
              onClick={() => navigate('/about')}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="interactive-glow-button self-start group bg-[#2563eb] hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/20 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center gap-3 transition-all duration-300"
            >
              <div className="flex-col overflow-hidden h-[20px] relative w-auto">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center">About our studio</span>
                  <span className="h-[20px] flex items-center">About our studio</span>
                </div>
              </div>
              <div className="bg-white text-[#2563eb] w-7 h-7 rounded-full flex items-center justify-center">
                <ArrowRight size={14} className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
              </div>
            </motion.button>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
              <motion.div variants={imageVariants} className="relative w-full sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-transparent dark:border-slate-700/50 hover:border-[#2563eb]/30 transition-colors duration-300 group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85" 
                  alt="WeAreOneTechNation Work 1" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div variants={imageVariants} className="relative w-full sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-transparent dark:border-slate-700/50 hover:border-[#2563eb]/30 transition-colors duration-300 group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85" 
                  alt="WeAreOneTechNation Work 2" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout (>= lg) */}
          <div className="hidden lg:grid grid-cols-[28%_1fr_46%] items-center gap-6 xl:gap-10">
            <motion.div variants={imageVariants} className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-2xl border border-transparent dark:border-slate-700/50 hover:border-[#2563eb]/30 transition-colors duration-300 group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85" 
                alt="WeAreOneTechNation Work 1" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-end text-center lg:text-right px-4">
              <p className="text-[17px] leading-[1.65] font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap text-right mb-10 transition-colors duration-300">
                Through research, creative thinking <br/>
                and iteration we help growing brands <br/>
                realize their digital full potential.
              </p>
              <motion.button 
                onClick={() => navigate('/about')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="interactive-glow-button group bg-[#2563eb] hover:bg-[#1d4ed8] shadow-lg shadow-blue-500/25 text-white text-[14px] font-medium rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-all duration-300"
              >
                <div className="flex-col overflow-hidden h-[20px] relative w-auto">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                    <span className="h-[20px] flex items-center">About our studio</span>
                    <span className="h-[20px] flex items-center">About our studio</span>
                  </div>
                </div>
                <div className="bg-white text-[#2563eb] w-8 h-8 rounded-full flex items-center justify-center">
                  <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
                </div>
              </motion.button>
            </motion.div>

            <motion.div variants={imageVariants} className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-2xl border border-transparent dark:border-slate-700/50 hover:border-[#2563eb]/30 transition-colors duration-300 group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85" 
                alt="WeAreOneTechNation Work 2" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
