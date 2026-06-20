import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useContent } from '../../hooks/useContent';

export const Footer: React.FC = () => {
  const { content } = useContent();
  const services = content?.services?.map((s: any) => s.title) || ['AI-Powered Systems', 'High-Converting Websites', 'Scalable Architectures', 'Digital Automation'];

  return (
    <footer className="bg-white dark:bg-[#0B0F1A] pt-20 pb-10 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="We Are One Tech Nation" className="h-14 w-auto object-contain origin-left" />
            </Link>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs transition-colors duration-300">
              We build digital systems that think, learn, and convert. A premium technology partner for high-value digital ecosystems.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center hover:bg-[#2563eb] dark:hover:bg-[#2563eb] hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Services</h4>
            <ul className="space-y-4">
              {services.map((item: string) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-500 dark:text-gray-400 hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-500 dark:text-gray-400 hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Stay Ahead</h4>
            <p className="text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
              Subscribe to our insights on AI and digital scale.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-4 py-2 rounded-lg flex-1 outline-none focus:border-[#2563eb] dark:focus:border-[#2563eb] transition-colors text-gray-900 dark:text-white"
              />
              <button className="bg-[#2563eb] px-4 py-2 rounded-lg text-white font-semibold hover:bg-[#1d4ed8] transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">
          <p>© {new Date().getFullYear()} WE ARE ONE TECH NATION. All rights reserved. <span className="opacity-30">v2.1</span></p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#2563eb]">Privacy Policy</a>
            <a href="#" className="hover:text-[#2563eb]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
