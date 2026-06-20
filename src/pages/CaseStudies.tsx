import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Zap, Clock, Users, Target, CheckCircle2 } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container-custom">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#2563eb] dark:hover:text-[#2563eb] mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
          <div>
            <div className="text-[#2563eb] font-bold uppercase tracking-[0.2em] mb-4">Case Study: Nexus AI</div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-gray-900 dark:text-white transition-colors duration-300">Engineering a $12M Intelligence Engine for Global Logistics</h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed transition-colors duration-300">
              Nexus needed to automate their supply chain forecasting. We built a custom LLM-integrated dashboard that reduced manual entry by 85%.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 rounded-2xl transition-colors duration-300">
                <div className="text-3xl font-bold text-[#2563eb] mb-1">85%</div>
                <div className="text-sm text-gray-400 uppercase font-bold tracking-widest">Automation Rate</div>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 rounded-2xl transition-colors duration-300">
                <div className="text-3xl font-bold text-[#3b82f6] mb-1">1.2M</div>
                <div className="text-sm text-gray-400 uppercase font-bold tracking-widest">Tasks/Day</div>
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
        <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
          <div className="lg:col-span-2 space-y-12 md:space-y-20">
            {/* Problem */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white transition-colors duration-300">
                <Target className="text-[#2563eb]" /> The Problem
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
                The client was managing massive logistics data through fragmented legacy systems and manual spreadsheets. This led to a 12% error rate in forecasting, costing millions in lost inventory and inefficient routing.
              </p>
              <ul className="space-y-4">
                {['Manual data entry bottlenecks', 'Inaccurate predictive modeling', 'Lack of real-time visibility', 'Fragmented communication channels'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <CheckCircle2 size={18} className="text-red-500" /> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Strategy */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white transition-colors duration-300">
                <Zap className="text-[#2563eb]" /> Our Strategy
              </h2>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
                We proposed a centralized digital ecosystem powered by a custom-trained AI model. The strategy focused on "Single Source of Truth" architecture and automated data ingestion pipelines.
              </p>
              <div className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#2563eb]/20 dark:border-slate-700 italic transition-colors duration-300">
                "We didn't just build a dashboard; we rebuilt their decision-making engine from the ground up."
              </div>
            </section>

            {/* Execution */}
            <section>
              <h2 className="text-3xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white transition-colors duration-300">
                <TrendingUp className="text-[#2563eb]" /> Execution
              </h2>
              <div className="space-y-6 md:space-y-8">
                <div className="bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">Phase 1: Data Normalization</h4>
                  <p className="text-gray-500 dark:text-gray-400">Cleaned and structured 10 years of historical logistics data to train the AI model.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">Phase 2: AI Engine Development</h4>
                  <p className="text-gray-500 dark:text-gray-400">Integrated OpenAI API with custom vector embeddings for company-specific logistics context.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                  <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">Phase 3: High-Performance UI</h4>
                  <p className="text-gray-500 dark:text-gray-400">Built a React-based real-time dashboard using WebSockets for live data streaming.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-6 md:space-y-8">
            <div className="bg-white dark:bg-slate-800 shadow-lg dark:shadow-2xl p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 dark:border-slate-700 sticky top-24 md:top-32 transition-colors duration-300">
              <h3 className="text-2xl mb-8 text-gray-900 dark:text-white">At a Glance</h3>
              <div className="space-y-8">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Timeline</div>
                  <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white"><Clock size={16} className="text-[#2563eb]" /> 4 Months</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Industry</div>
                  <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white"><Users size={16} className="text-[#2563eb]" /> Logistics / Tech</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Technologies</div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['React', 'Python', 'AWS', 'OpenAI', 'Redis'].map(t => (
                      <span key={t} className="text-xs bg-[#2563eb]/10 text-[#2563eb] px-3 py-1 rounded-full font-bold">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <hr className="my-8 border-gray-200 dark:border-slate-700" />
              <Link to="/contact" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white w-full text-center py-4 rounded-full font-semibold transition-colors duration-300 block">
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
