import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { StickyCTA } from '../ui/StickyCTA';

interface MainLayoutProps {
  children: React.ReactNode;
}

const stars = [
  { top: '5%', left: '10%', size: '1px', opacity: 0.3 },
  { top: '8%', left: '40%', size: '2px', opacity: 0.6 },
  { top: '12%', left: '75%', size: '1.5px', opacity: 0.4 },
  { top: '18%', left: '25%', size: '1px', opacity: 0.5 },
  { top: '22%', left: '90%', size: '2px', opacity: 0.7 },
  { top: '28%', left: '55%', size: '1px', opacity: 0.3 },
  { top: '32%', left: '15%', size: '1.5px', opacity: 0.5 },
  { top: '38%', left: '80%', size: '2px', opacity: 0.6 },
  { top: '42%', left: '45%', size: '1px', opacity: 0.4 },
  { top: '48%', left: '70%', size: '2px', opacity: 0.7 },
  { top: '52%', left: '5%', size: '1px', opacity: 0.3 },
  { top: '56%', left: '35%', size: '1.5px', opacity: 0.5 },
  { top: '62%', left: '85%', size: '2.5px', opacity: 0.8 },
  { top: '68%', left: '20%', size: '1px', opacity: 0.4 },
  { top: '72%', left: '60%', size: '2px', opacity: 0.6 },
  { top: '78%', left: '95%', size: '1.5px', opacity: 0.5 },
  { top: '82%', left: '40%', size: '1px', opacity: 0.3 },
  { top: '88%', left: '15%', size: '2px', opacity: 0.7 },
  { top: '92%', left: '75%', size: '1px', opacity: 0.4 },
  { top: '96%', left: '50%', size: '2px', opacity: 0.5 },
  { top: '3%', left: '65%', size: '1px', opacity: 0.2 },
  { top: '15%', left: '85%', size: '1.5px', opacity: 0.5 },
  { top: '25%', left: '5%', size: '2px', opacity: 0.4 },
  { top: '30%', left: '30%', size: '1px', opacity: 0.3 },
  { top: '35%', left: '95%', size: '1.5px', opacity: 0.6 },
  { top: '45%', left: '12%', size: '2px', opacity: 0.5 },
  { top: '50%', left: '85%', size: '1px', opacity: 0.4 },
  { top: '60%', left: '28%', size: '2px', opacity: 0.7 },
  { top: '65%', left: '78%', size: '1px', opacity: 0.3 },
  { top: '70%', left: '8%', size: '1.5px', opacity: 0.5 },
  { top: '75%', left: '48%', size: '2px', opacity: 0.4 },
  { top: '80%', left: '88%', size: '1px', opacity: 0.3 },
  { top: '85%', left: '63%', size: '1.5px', opacity: 0.6 },
  { top: '90%', left: '32%', size: '2px', opacity: 0.5 },
  { top: '95%', left: '92%', size: '1px', opacity: 0.2 }
];

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background-dark text-white">
      {/* Fixed background starry & floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Stars */}
        {stars.map((star, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              boxShadow: parseFloat(star.size) >= 2 ? '0 0 6px rgba(255,255,255,0.4)' : 'none'
            }}
          />
        ))}

        {/* Ambient Blur Lights */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 dark:bg-accent/5 rounded-full blur-[100px]" />

        {/* Floating Wireframe Sphere */}
        <div className="absolute top-[15%] right-[12%] hidden lg:block animate-float pointer-events-none" style={{ animationDuration: '9s' }}>
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-primary/10">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="40" ry="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="50" cy="50" rx="12" ry="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Floating Star Rings */}
        <div className="absolute bottom-[20%] left-[8%] hidden lg:block animate-float pointer-events-none" style={{ animationDuration: '11s', animationDelay: '1.5s' }}>
          <svg width="90" height="90" viewBox="0 0 100 100" className="text-accent/10">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3, 3" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Floating Constellation Nodes */}
        <div className="absolute top-[55%] right-[8%] hidden md:block animate-float pointer-events-none" style={{ animationDuration: '8s', animationDelay: '0.5s' }}>
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-white/5">
            <line x1="20" y1="20" x2="80" y2="35" stroke="currentColor" strokeWidth="0.5" />
            <line x1="80" y1="35" x2="45" y2="75" stroke="currentColor" strokeWidth="0.5" />
            <line x1="45" y1="75" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="3.5" fill="currentColor" />
            <circle cx="80" cy="35" r="2.5" fill="currentColor" />
            <circle cx="45" cy="75" r="4.5" fill="currentColor" />
          </svg>
        </div>

        {/* Triangle Accents */}
        <div className="absolute top-[20%] left-[5%] opacity-[0.02] dark:opacity-[0.04] rotate-12 animate-float" style={{ animationDuration: '12s' }}>
          <svg width="150" height="150" viewBox="0 0 100 100">
            <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] right-[10%] opacity-[0.01] dark:opacity-[0.03] -rotate-45 animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}>
          <svg width="200" height="200" viewBox="0 0 100 100">
            <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="1.5" />
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
