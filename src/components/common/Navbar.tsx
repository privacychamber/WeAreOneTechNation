import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Logo } from '../ui/Logo';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo size={36} />
          <span className={cn(
            "text-xl font-bold font-sora hidden sm:block",
            isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
          )}>
            WE ARE ONE <span className="text-primary">TECH NATION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-slate-600 dark:text-slate-300'
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/contact" className="btn-primary flex items-center gap-2">
            Book Strategy Call <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[60px] z-40 bg-white dark:bg-background-dark md:hidden transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-2xl font-bold font-sora',
                location.pathname === link.href ? 'text-primary' : 'text-slate-900 dark:text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center mt-4"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </nav>
  );
};
