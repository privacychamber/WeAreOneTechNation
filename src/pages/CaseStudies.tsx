import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Zap, Clock, Users, Target, CheckCircle2 } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="text-primary font-bold uppercase tracking-[0.2em] mb-4">Case Study: Nexus AI</div>
            <h1 className="text-4xl md:text-6xl mb-8">Engineering a $12M Intelligence Engine for Global Logistics</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Nexus needed to automate their supply chain forecasting. We built a custom LLM-integrated dashboard that reduced manual entry by 85%.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 glass rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Automation Rate</div>
              </div>
              <div className="p-6 glass rounded-2xl">
                <div className="text-3xl font-bold text-accent-dark mb-1">1.2M</div>
                <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">Tasks/Day</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbda4e966c52?auto=format&fit=crop&q=80&w=1500" 
                alt="Case Study Detail" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            {/* Problem */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Target className="text-primary" /> The Problem
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                The client was managing massive logistics data through fragmented legacy systems and manual spreadsheets. This led to a 12% error rate in forecasting, costing millions in lost inventory and inefficient routing.
              </p>
              <ul className="space-y-4">
                {['Manual data entry bottlenecks', 'Inaccurate predictive modeling', 'Lack of real-time visibility', 'Fragmented communication channels'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={18} className="text-red-500" /> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Strategy */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <Zap className="text-primary" /> Our Strategy
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We proposed a centralized digital ecosystem powered by a custom-trained AI model. The strategy focused on "Single Source of Truth" architecture and automated data ingestion pipelines.
              </p>
              <div className="bg-slate-100 dark:bg-white/5 p-8 rounded-3xl border border-primary/20 italic">
                "We didn't just build a dashboard; we rebuilt their decision-making engine from the ground up."
              </div>
            </section>

            {/* Execution */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <TrendingUp className="text-primary" /> Execution
              </h2>
              <div className="space-y-8">
                <div className="glass p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-2">Phase 1: Data Normalization</h4>
                  <p className="text-slate-600 dark:text-slate-400">Cleaned and structured 10 years of historical logistics data to train the AI model.</p>
                </div>
                <div className="glass p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-2">Phase 2: AI Engine Development</h4>
                  <p className="text-slate-600 dark:text-slate-400">Integrated OpenAI API with custom vector embeddings for company-specific logistics context.</p>
                </div>
                <div className="glass p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-2">Phase 3: High-Performance UI</h4>
                  <p className="text-slate-600 dark:text-slate-400">Built a React-based real-time dashboard using WebSockets for live data streaming.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-8">
            <div className="glass p-8 rounded-3xl border-primary/10 sticky top-32">
              <h3 className="text-2xl mb-8">At a Glance</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Timeline</div>
                  <div className="flex items-center gap-2 font-bold"><Clock size={16} className="text-primary" /> 4 Months</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Industry</div>
                  <div className="flex items-center gap-2 font-bold"><Users size={16} className="text-primary" /> Logistics / Tech</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Technologies</div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['React', 'Python', 'AWS', 'OpenAI', 'Redis'].map(t => (
                      <span key={t} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <hr className="my-8 border-slate-200 dark:border-white/10" />
              <Link to="/contact" className="btn-primary w-full text-center block">
                Get Similar Results
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
