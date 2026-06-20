import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { StickyCTA } from '../ui/StickyCTA';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#EFEFEF] text-slate-900 font-inter">
      <Navbar />
      
      <main className="flex-grow z-10 w-full relative">
        {children}
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};
