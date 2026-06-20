import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full max-w-[1440px] mx-auto p-2 sm:p-3 mt-4 px-4 sm:px-6 pointer-events-none">
        <nav className="bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-white/40 dark:border-slate-700/50 rounded-full p-[6px] pl-4 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.08)] pointer-events-auto transition-colors duration-300">
          {/* Left: Logo & Desktop Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="We Are One Tech Nation" className="h-9 w-auto object-contain origin-left hover:scale-105 transition-transform duration-300" />
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-4 py-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-slate-800/50 transition-all duration-300">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 pr-1">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/contact" className="hidden md:flex bg-[#2563eb] text-white text-[14px] font-medium rounded-full px-6 py-2.5 hover:bg-[#1d4ed8] shadow-lg hover:shadow-[#2563eb]/25 hover:-translate-y-0.5 transition-all duration-300">
              Book Strategy Call
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              <Menu size={24} className="text-gray-900 dark:text-white" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-white dark:bg-[#0B0F1A] transition-transform duration-500 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="p-4 sm:p-6 flex flex-col h-full">
          <div className="flex justify-end mb-12">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300 mt-4 mr-2"
            >
              <X size={32} className="text-gray-900 dark:text-white" />
            </button>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[28px] leading-[32px] font-medium text-gray-900 dark:text-white hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-[#2563eb] text-white text-base font-medium rounded-full py-4 flex items-center justify-center gap-3 hover:bg-[#1d4ed8] transition-colors duration-300">
            Start a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
};
