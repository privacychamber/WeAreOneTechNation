import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light-secondary dark:bg-background-secondary pt-20 pb-10 border-t border-slate-200 dark:border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Logo size={32} />
              <span className="text-xl font-bold font-sora">
                WAO<span className="text-primary">TN</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs">
              We build digital systems that think, learn, and convert. A premium technology partner for high-value digital ecosystems.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['AI-Powered Systems', 'High-Converting Websites', 'Scalable Architectures', 'Digital Automation'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Case Studies', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Stay Ahead</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Subscribe to our insights on AI and digital scale.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-lg flex-1 outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary px-4 py-2 rounded-lg text-white font-semibold hover:bg-primary-dark transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} WE ARE ONE TECH NATION. All rights reserved. <span className="opacity-30">v2.1</span></p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
