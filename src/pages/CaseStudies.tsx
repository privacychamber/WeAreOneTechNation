import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Zap, Clock, Users, Target, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    id: "nexus-ai",
    title: "Engineering a $12M Intelligence Engine for Global Logistics",
    client: "Nexus AI",
    summary: "Nexus needed to automate their supply chain forecasting. We built a custom LLM-integrated dashboard that reduced manual entry by 85%.",
    metrics: [
      { value: "85%", label: "Automation Rate", color: "text-primary" },
      { value: "1.2M", label: "Tasks/Day", color: "text-accent-dark" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbda4e966c52?auto=format&fit=crop&q=80&w=1500",
    problem: "The client was managing massive logistics data through fragmented legacy systems and manual spreadsheets. This led to a 12% error rate in forecasting, costing millions in lost inventory and inefficient routing.",
    problemList: ['Manual data entry bottlenecks', 'Inaccurate predictive modeling', 'Lack of real-time visibility', 'Fragmented communication channels'],
    strategy: "We proposed a centralized digital ecosystem powered by a custom-trained AI model. The strategy focused on \"Single Source of Truth\" architecture and automated data ingestion pipelines.",
    quote: "We didn't just build a dashboard; we rebuilt their decision-making engine from the ground up.",
    execution: [
      { title: "Phase 1: Data Normalization", desc: "Cleaned and structured 10 years of historical logistics data to train the AI model." },
      { title: "Phase 2: AI Engine Development", desc: "Integrated OpenAI API with custom vector embeddings for company-specific logistics context." },
      { title: "Phase 3: High-Performance UI", desc: "Built a React-based real-time dashboard using WebSockets for live data streaming." }
    ],
    timeline: "4 Months",
    industry: "Logistics / Tech",
    technologies: ['React', 'Python', 'AWS', 'OpenAI', 'Redis']
  },
  {
    id: "exp-heritage",
    title: "Enhanced Experience Website for Global Cultural Heritage",
    client: "EXP Heritage",
    summary: "We transformed the existing experience platform to help users discover authentic guides and unique experiences across the globe with a high-performance web architecture.",
    metrics: [
      { value: "3x", label: "Faster Speed", color: "text-primary" },
      { value: "95+", label: "UX Score", color: "text-accent-dark" }
    ],
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1500",
    problem: "The legacy platform suffered from slow load times and a disjointed user experience, making it difficult for users to discover and book authentic cultural experiences globally.",
    problemList: ['Slow page performance', 'Poor mobile responsiveness', 'Complex booking flow', 'Outdated design language'],
    strategy: "We completely rebuilt the frontend using React for a seamless, SPA-like experience while leveraging Laravel for robust backend operations. The focus was on speed, UX, and global accessibility.",
    quote: "A global experiences platform deserves a world-class digital foundation.",
    execution: [
      { title: "Frontend Architecture", desc: "Implemented React for dynamic UI components and instant page transitions." },
      { title: "Backend Integration", desc: "Developed a secure and scalable API with Laravel to handle complex booking logic." },
      { title: "Performance Optimization", desc: "Achieved lightning-fast load times through aggressive caching and asset optimization." }
    ],
    timeline: "3 Months",
    industry: "Travel / Cultural",
    technologies: ['React', 'Laravel', 'PHP', 'HTML5', 'CSS3']
  },
  {
    id: "creator-growth",
    title: "Scaling a Personal Brand to 1.2M Reach Monthly",
    client: "Lifestyle Content Creator",
    summary: "Through strategic content production and algorithmic optimization, we transformed a growing creator into a dominant voice in their niche.",
    metrics: [
      { value: "+245%", label: "Audience Growth", color: "text-primary" },
      { value: "328K", label: "Engagement", color: "text-accent-dark" }
    ],
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1500",
    problem: "Despite creating great content, the creator was struggling to reach new audiences and monetize their brand. Inconsistent posting and lack of strategy led to stagnant growth.",
    problemList: ['Inconsistent content schedule', 'Low algorithmic reach', 'Poor audience retention', 'Lack of monetization strategy'],
    strategy: "We implemented a custom growth package focusing on high-engagement reels, optimized publishing schedules, and targeted meta advertising to amplify reach.",
    quote: "We don't just post content; we engineer viral growth and build loyal communities.",
    execution: [
      { title: "Content Strategy", desc: "Developed a data-driven content calendar focusing on trending formats and audience insights." },
      { title: "Production & Editing", desc: "Provided high-quality reel editing, thumbnail design, and engaging captions." },
      { title: "Community Management", desc: "Fostered active audience participation through strategic community engagement." }
    ],
    timeline: "Ongoing",
    industry: "Personal Brand",
    technologies: ['Instagram', 'Meta Ads', 'Analytics']
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
        
        <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl mb-6">Case Studies</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Explore how we've helped businesses and creators scale through strategic digital engineering and targeted marketing.
            </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="relative">
              {/* Divider if not first */}
              {index > 0 && <hr className="absolute -top-16 left-0 right-0 border-slate-200 dark:border-white/10" />}
              
              {/* Hero for Case Study */}
              <section className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <div className="text-primary font-bold uppercase tracking-[0.2em] mb-4">Case Study: {study.client}</div>
                  <h2 className="text-4xl md:text-5xl mb-8">{study.title}</h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {study.summary}
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    {study.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="p-6 glass rounded-2xl">
                        <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                        <div className="text-sm text-slate-500 uppercase font-bold tracking-widest">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                    <img 
                      src={study.image} 
                      alt={study.title} 
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
                    <h3 className="text-3xl mb-6 flex items-center gap-3">
                      <Target className="text-primary" /> The Problem
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {study.problem}
                    </p>
                    <ul className="space-y-4">
                      {study.problemList.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={18} className="text-red-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Strategy */}
                  <section>
                    <h3 className="text-3xl mb-6 flex items-center gap-3">
                      <Zap className="text-primary" /> Our Strategy
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {study.strategy}
                    </p>
                    <div className="bg-slate-100 dark:bg-white/5 p-8 rounded-3xl border border-primary/20 italic text-slate-700 dark:text-slate-300">
                      "{study.quote}"
                    </div>
                  </section>

                  {/* Execution */}
                  <section>
                    <h3 className="text-3xl mb-6 flex items-center gap-3">
                      <TrendingUp className="text-primary" /> Execution
                    </h3>
                    <div className="space-y-8">
                      {study.execution.map((phase, pIndex) => (
                        <div key={pIndex} className="glass p-8 rounded-3xl">
                          <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                          <p className="text-slate-600 dark:text-slate-400">{phase.desc}</p>
                        </div>
                      ))}
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
                        <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300"><Clock size={16} className="text-primary" /> {study.timeline}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Industry</div>
                        <div className="flex items-center gap-2 font-bold text-slate-700 dark:text-slate-300"><Users size={16} className="text-primary" /> {study.industry}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Technologies</div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.technologies.map(t => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
