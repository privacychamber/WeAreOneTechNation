import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="studio" className="bg-white dark:bg-[#0B0F1A] pt-12 sm:pt-20 lg:pt-32 pb-10 sm:pb-16 lg:pb-24 overflow-hidden transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Badge Row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] leading-[12px] font-semibold flex items-center justify-center transition-colors duration-300">
            1
          </div>
          <div className="text-[12px] leading-[13px] font-medium border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 transition-colors duration-300">
            Introducing Axion
          </div>
        </div>

        {/* Heading h2 */}
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 dark:text-white font-medium leading-[1.12] tracking-[-0.02em] text-[clamp(1.5rem,4vw,3.2rem)] mb-10 sm:mb-16 lg:mb-28 transition-colors duration-300">
            Strategy-led creatives, delivering <br className="hidden sm:block" /> results in digital and beyond.
          </h2>
        </div>

        {/* Content Area */}
        <div className="px-5 sm:px-8 lg:px-12">
          
          {/* Mobile/Tablet Layout (< lg) */}
          <div className="lg:hidden flex flex-col gap-6">
            <p className="text-[15px] leading-[1.6] font-medium text-gray-900 dark:text-gray-300 transition-colors duration-300">
              Through research, creative thinking and iteration we help growing brands realize their digital full potential.
            </p>
            
            <button className="self-start group bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 flex items-center gap-3 transition-colors duration-300">
              <div className="flex-col overflow-hidden h-[20px] relative w-auto">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center">About our studio</span>
                  <span className="h-[20px] flex items-center">About our studio</span>
                </div>
              </div>
              <div className="bg-white text-[#2563eb] w-7 h-7 rounded-full flex items-center justify-center">
                <ArrowRight size={14} className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
              </div>
            </button>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4">
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85" 
                alt="Axion Studio Work 1" 
                className="w-full sm:w-[45%] aspect-[438/346] object-cover rounded-xl sm:rounded-2xl"
              />
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85" 
                alt="Axion Studio Work 2" 
                className="w-full sm:w-[55%] aspect-[900/600] object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>

          {/* Desktop Layout (>= lg) */}
          <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
            <img 
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85" 
              alt="Axion Studio Work 1" 
              className="w-full aspect-[438/346] object-cover rounded-2xl self-end"
            />
            
            <div className="self-start flex flex-col items-end pb-8">
              <p className="text-[16px] leading-[1.65] font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap text-right mb-8 transition-colors duration-300">
                Through research, creative thinking <br/>
                and iteration we help growing brands <br/>
                realize their digital full potential.
              </p>
              <button className="group bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] font-medium rounded-full pl-6 pr-2 py-2 flex items-center gap-3 transition-colors duration-300">
                <div className="flex-col overflow-hidden h-[20px] relative w-auto">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                    <span className="h-[20px] flex items-center">About our studio</span>
                    <span className="h-[20px] flex items-center">About our studio</span>
                  </div>
                </div>
                <div className="bg-white text-[#2563eb] w-8 h-8 rounded-full flex items-center justify-center">
                  <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
                </div>
              </button>
            </div>

            <img 
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85" 
              alt="Axion Studio Work 2" 
              className="w-full aspect-[3/2] object-cover rounded-2xl self-end"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
