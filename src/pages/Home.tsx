import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { FeaturedProjectsSection } from '../components/FeaturedProjectsSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to top on load for a fresh start
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#0B0F1A] text-gray-900 dark:text-white w-full min-h-screen transition-colors duration-300">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
    </div>
  );
};

export default Home;
