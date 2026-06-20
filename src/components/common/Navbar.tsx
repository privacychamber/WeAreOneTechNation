import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <nav className="bg-white rounded-full p-[5px] flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] pointer-events-auto">
          {/* Left: Logo & Desktop Links */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center pl-2">
              <img src="/logo.png" alt="We Are One Tech Nation" className="h-10 w-auto object-contain scale-[1.5] origin-left" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex bg-[#2563eb] text-white text-[14px] font-medium rounded-full px-5 py-2 hover:bg-[#1d4ed8] transition-colors duration-300">
              Book Strategy Call
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              <Menu size={24} className="text-gray-900" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="p-4 sm:p-6 flex flex-col h-full">
          <div className="flex justify-end mb-12">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 mt-4 mr-2"
            >
              <X size={32} className="text-gray-900" />
            </button>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[28px] leading-[32px] font-medium text-gray-900">
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-[#2563eb] text-white text-base font-medium rounded-full py-4 flex items-center justify-center gap-3">
            Start a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
};
