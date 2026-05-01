import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Nexus AI Dashboard',
    category: 'AI / SaaS',
    image: 'https://images.unsplash.com/photo-1551288049-bbda4e966c52?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'OpenAI', 'Node.js'],
    metrics: '+45% Efficiency'
  },
  {
    id: 2,
    title: 'Vanguard E-Commerce',
    category: 'Web / E-com',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'Shopify', 'GSAP'],
    metrics: '3.2s -> 0.8s Load'
  },
  {
    id: 3,
    title: 'Quantum Ledger',
    category: 'Web3 / Fintech',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000',
    tags: ['Solidity', 'Tailwind', 'Python'],
    metrics: '$2M TVL'
  },
  {
    id: 4,
    title: 'Apex Logistics System',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    tags: ['Cloud', 'Go', 'Docker'],
    metrics: '99.99% Uptime'
  },
  {
    id: 5,
    title: 'Solaris Marketing Portal',
    category: 'Web / CMS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tags: ['Headless CMS', 'Vite', 'Three.js'],
    metrics: '+200% Leads'
  },
  {
    id: 6,
    title: 'Aura Health App',
    category: 'Mobile / SaaS',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    tags: ['React Native', 'Firebase', 'AI'],
    metrics: '100k+ Users'
  }
];

const categories = ['All', 'AI / SaaS', 'Web / E-com', 'Web3 / Fintech', 'Automation', 'Mobile / SaaS'];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="pt-32 pb-20">
      <section className="container-custom mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-6">Proven Results.</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A selection of high-value digital systems we've engineered for global partners.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container-custom mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 font-medium ${
                activeTab === cat 
                ? 'bg-primary border-primary text-white' 
                : 'border-slate-200 dark:border-white/10 hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              to={`/case-studies`} 
              key={project.id} 
              className="group relative block bg-white dark:bg-background-secondary rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white flex items-center gap-2 font-bold">
                    View Case Study <ExternalLink size={18} />
                  </div>
                </div>
                {/* Metric Badge */}
                <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-xs font-bold text-white z-10">
                  {project.metrics}
                </div>
              </div>
              <div className="p-8">
                <div className="text-primary font-bold text-sm uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom mt-20 text-center">
        <div className="glass p-12 rounded-[3rem] max-w-4xl mx-auto">
          <h2 className="text-3xl mb-6">Want to see your project here?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Let's discuss how we can build a high-performance system for your business.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
