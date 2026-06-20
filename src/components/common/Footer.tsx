import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useContent } from '../../hooks/useContent';

export const Footer: React.FC = () => {
  const { content } = useContent();
  const services = content?.services?.map((s: any) => s.title) || ['AI-Powered Systems', 'High-Converting Websites', 'Scalable Architectures', 'Digital Automation'];

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="We Are One Tech Nation" className="h-14 w-auto object-contain origin-left" />
            </Link>
            <p className="text-gray-500 max-w-xs">
              We build digital systems that think, learn, and convert. A premium technology partner for high-value digital ecosystems.
            </p>
            <div className="flex gap-4">
              {[Globe, Mail, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#2563eb] hover:text-white transition-all duration-300 text-gray-600"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((item: string) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-500 hover:text-[#2563eb] transition-colors flex items-center gap-2 group">
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
                    className="text-gray-500 hover:text-[#2563eb] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Stay Ahead</h4>
            <p className="text-gray-500 mb-4">
              Subscribe to our insights on AI and digital scale.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white border border-gray-200 px-4 py-2 rounded-lg flex-1 outline-none focus:border-[#2563eb] transition-colors text-gray-900"
              />
              <button className="bg-[#2563eb] px-4 py-2 rounded-lg text-white font-semibold hover:bg-[#1d4ed8] transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
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
