import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to top on load for a fresh start
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
    </div>
  );
};

export default Home;
