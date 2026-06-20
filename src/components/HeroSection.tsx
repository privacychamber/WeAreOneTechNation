import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Shader, Swirl, ChromaFlow, FilmGrain, FlutedGlass } from 'shaders/react';
import { useContent } from '../hooks/useContent';

export const HeroSection: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="relative w-full h-screen min-h-screen bg-[#EFEFEF] dark:bg-[#0B0F1A] overflow-hidden flex flex-col justify-end pb-14 sm:pb-16 lg:pb-20 transition-colors duration-300">
      {/* Background Shader Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 dark:opacity-5">
        <Shader>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow baseColor="#ffffff" downColor="#3b82f6" leftColor="#3b82f6" rightColor="#3b82f6" upColor="#3b82f6" momentum={13} radius={3.5} />
          <FlutedGlass aberration={0.61} angle={31} frequency={8} highlight={0.12} highlightSoftness={0} lightAngle={-90} refraction={4} shape="rounded" softness={1} speed={0.15} />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-32">
        <p className="text-[13px] leading-[14px] text-gray-900 dark:text-gray-300 tracking-wide mb-5 sm:mb-8 font-medium">
          {content?.settings?.hero_subtitle || 'Axion Studio'}
        </p>
        
        <h1 
          className="text-gray-900 dark:text-white font-medium leading-[1.08] tracking-[-0.03em] text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]"
          dangerouslySetInnerHTML={{ __html: content?.settings?.hero_title || 'We craft digital experiences <br class="hidden sm:block" />for brands ready to dominate <br class="hidden sm:block" />their category online.' }}
        />

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <button className="group bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-[13px] leading-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 flex items-center gap-3 transition-colors duration-300">
            <div className="flex-col overflow-hidden h-[20px] relative w-auto">
              <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                <span className="h-[20px] flex items-center">Start a project</span>
                <span className="h-[20px] flex items-center">Start a project</span>
              </div>
            </div>
            <div className="bg-white text-[#2563eb] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
              <ArrowRight size={16} className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45" />
            </div>
          </button>

          <div className="bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm flex items-center gap-2 rounded-[4px] py-1.5 pl-2 pr-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#3b82f6] fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"/>
            </svg>
            <span className="text-[13px] leading-[14px] font-medium text-gray-900 dark:text-white ml-1.5 mr-2">Certified Partner</span>
            <span className="text-[10px] leading-[11px] bg-gray-900 dark:bg-black text-white px-1.5 sm:px-2 py-0.5 rounded uppercase font-semibold">Featured</span>
          </div>
        </div>
      </div>
    </section>
  );
};
