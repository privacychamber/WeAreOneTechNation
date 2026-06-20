import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { content } = useContent();

  const projects = content?.portfolio || [];
  
  // Extract unique categories from projects
  const uniqueCategories = Array.from(new Set(projects.map((p: any) => p.category))) as string[];
  const categories: string[] = ['All', ...uniqueCategories];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter((p: any) => p.category === activeTab);

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20">
      <section className="container-custom mb-10 md:mb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 text-gray-900 dark:text-white transition-colors duration-300">Proven Results.</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 transition-colors duration-300">
            A selection of high-value digital systems we've engineered for global partners.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container-custom mb-8 md:mb-12">
        <div className="flex flex-wrap gap-3 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium ${
                activeTab === cat 
                ? 'bg-[#2563eb] border-[#2563eb] text-white' 
                : 'border-gray-200 dark:border-slate-700 hover:border-[#2563eb]/50 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project: any) => {
            let tagsList = [];
            try { tagsList = JSON.parse(project.tags || '[]'); } catch(e) {}
            return (
            <Link 
              to={`/case-studies`} 
              key={project.id} 
              className="group relative block bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-[#2563eb]/30 transition-colors duration-200 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image_url} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-8">
                  <div className="text-white flex items-center gap-2 font-bold">
                    View Case Study <ExternalLink size={18} />
                  </div>
                </div>
                {/* Metric Badge */}
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm px-4 py-2 rounded-full text-xs font-bold text-gray-900 dark:text-white z-10 transition-colors duration-300">
                  {project.metrics}
                </div>
              </div>
              <div className="p-8">
                <div className="text-[#2563eb] font-bold text-sm uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl mb-4 group-hover:text-[#2563eb] transition-colors text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {tagsList.map((tag: string) => (
                    <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full text-gray-500 dark:text-gray-300 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          )})}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom mt-12 md:mt-20 text-center">
        <div className="bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-8 md:p-12 rounded-3xl md:rounded-[3rem] max-w-4xl mx-auto border border-gray-100 dark:border-slate-700 transition-colors duration-300">
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-gray-900 dark:text-white transition-colors duration-300">Want to see your project here?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 transition-colors duration-300">
            Let's discuss how we can build a high-performance system for your business.
          </p>
          <Link to="/contact" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 font-semibold rounded-full transition-colors duration-300 inline-flex items-center gap-2">
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
