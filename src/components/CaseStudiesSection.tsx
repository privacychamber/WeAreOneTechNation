import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#F5F5F5] dark:bg-[#111827] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden transition-colors duration-300">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Badge Row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] leading-[12px] font-semibold flex items-center justify-center transition-colors duration-300">
            2
          </div>
          <div className="text-[12px] leading-[13px] font-medium border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 transition-colors duration-300">
            Featured client work
          </div>
        </div>

        {/* Heading h2 */}
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 dark:text-white font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] mb-10 sm:mb-14 lg:mb-16 transition-colors duration-300">
            Our projects
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          
          {/* Card 1 (Narrativ) */}
          <div className="flex flex-col">
            <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] group cursor-pointer">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white h-9 w-9 rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[148px]">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <svg className="w-[14px] h-[14px] text-gray-900 transition-transform duration-300 -rotate-45 group-hover:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <span className="text-[13px] font-medium text-gray-900 whitespace-nowrap opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 pr-4">
                  Learn more
                </span>
              </div>
            </div>
            <p className="text-[13px] leading-[14px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed transition-colors duration-300">
              Winner of Site of the Month 2025 - an interactive 3D showcase driving record engagement
            </p>
            <h3 className="text-[14px] leading-[15px] font-semibold text-gray-900 dark:text-white mt-1 transition-colors duration-300">
              Narrativ
            </h3>
          </div>

          {/* Card 2 (Luminar) */}
          <div className="flex flex-col">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] group cursor-pointer">
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-gray-900 h-9 w-9 rounded-full flex items-center overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[168px]">
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <ArrowRight size={14} className="text-white transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
                </div>
                <span className="text-[13px] font-medium text-white whitespace-nowrap opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100 pr-4">
                  View case study
                </span>
              </div>
            </div>
            <p className="text-[13px] leading-[14px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed transition-colors duration-300">
              Transforming a dated platform into a conversion-focused brand experience
            </p>
            <h3 className="text-[14px] leading-[15px] font-semibold text-gray-900 dark:text-white mt-1 transition-colors duration-300">
              Luminar
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
};
