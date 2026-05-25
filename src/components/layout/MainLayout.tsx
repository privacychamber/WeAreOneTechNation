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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Ornaments omitted for brevity in targetContent match, but kept in replacement */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 dark:bg-accent/5 rounded-full blur-[100px]" />
        
        {/* Triangle Accents */}
        <div className="absolute top-[20%] left-[5%] opacity-[0.03] dark:opacity-[0.07] rotate-12">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] right-[10%] opacity-[0.02] dark:opacity-[0.05] -rotate-45">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <Navbar />
      
      <main className="flex-grow z-10">
        {children}
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};
