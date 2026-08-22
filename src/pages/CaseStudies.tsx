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
      { value: "85%", label: "Automation Rate", color: "text-[#2563eb]" },
      { value: "1.2M", label: "Tasks/Day", color: "text-[#3b82f6]" }
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
      { value: "3x", label: "Faster Speed", color: "text-[#2563eb]" },
      { value: "95+", label: "UX Score", color: "text-[#3b82f6]" }
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
      { value: "+245%", label: "Audience Growth", color: "text-[#2563eb]" },
      { value: "328K", label: "Engagement", color: "text-[#3b82f6]" }
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
  },
  {
    id: "scalable-infra-fintech",
    title: "Cloud Infrastructure Scaling for a High-Volume FinTech Startup",
    client: "PayStream Financial",
    summary: "PayStream was experiencing database deadlocks and slow load times during peak trading hours. We migrated their monolithic architecture to scalable microservices.",
    metrics: [
      { value: "99.99%", label: "Uptime", color: "text-[#2563eb]" },
      { value: "4x", label: "Traffic Capacity", color: "text-[#3b82f6]" }
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1500",
    problem: "The client's monolithic Node.js application was unable to handle concurrent transaction spikes, leading to 15-second API latency and dropped connections during market open hours.",
    problemList: ['Database connection pooling limits', 'No horizontal scaling strategy', 'Single points of failure', 'High infrastructure costs'],
    strategy: "We redesigned their backend using AWS ECS for containerized microservices and implemented read-replicas for their PostgreSQL database to separate read/write workloads.",
    quote: "They didn't just fix our server crashes; they built a foundation that can handle our next 3 years of growth.",
    execution: [
      { title: "Architecture Audit", desc: "Identified bottlenecks in the database queries and monolithic structure." },
      { title: "Containerization", desc: "Migrated the application into Docker containers orchestrated by ECS." },
      { title: "Load Balancing", desc: "Implemented advanced Application Load Balancers and auto-scaling groups." }
    ],
    timeline: "2 Months",
    industry: "FinTech",
    technologies: ['AWS', 'Docker', 'PostgreSQL', 'Node.js']
  },
  {
    id: "ui-ux-rebrand",
    title: "Complete Brand & UX Redesign for a Premium SaaS Platform",
    client: "FlowState CRM",
    summary: "FlowState's powerful features were hidden behind an outdated, clunky interface. We redesigned the entire user journey and visual identity.",
    metrics: [
      { value: "+120%", label: "User Retention", color: "text-[#2563eb]" },
      { value: "-45%", label: "Bounce Rate", color: "text-[#3b82f6]" }
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1500",
    problem: "Users were churning within the first 14 days because the onboarding process was confusing and the dashboard was overwhelming with data.",
    problemList: ['Complex onboarding flow', 'Inconsistent visual hierarchy', 'Poor mobile experience', 'Lack of modern brand identity'],
    strategy: "We adopted a 'progressive disclosure' design philosophy, hiding advanced features until the user needed them, and established a sleek, modern design system.",
    quote: "Our product finally looks as good as it works. The new design has completely changed how users perceive our brand.",
    execution: [
      { title: "UX Research", desc: "Conducted user interviews and heat-map analysis to understand friction points." },
      { title: "Design System", desc: "Created a comprehensive UI kit in Figma with reusable components and tokens." },
      { title: "Prototyping", desc: "Built high-fidelity interactive prototypes for user testing before development." }
    ],
    timeline: "6 Weeks",
    industry: "SaaS / B2B",
    technologies: ['Figma', 'Framer', 'Tailwind', 'React']
  },
  {
    id: "marketing-lead-gen",
    title: "Automated Lead Generation Engine for B2B Healthcare",
    client: "MedTech Solutions",
    summary: "MedTech relied entirely on cold-calling. We built an inbound marketing engine that generated a predictable pipeline of high-ticket leads.",
    metrics: [
      { value: "350+", label: "Qualified Leads/Mo", color: "text-[#2563eb]" },
      { value: "62%", label: "Lower CAC", color: "text-[#3b82f6]" }
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1500",
    problem: "Traditional outbound methods were becoming too expensive and yielding low conversion rates. They had no digital footprint to attract decision-makers.",
    problemList: ['High customer acquisition cost (CAC)', 'No inbound marketing strategy', 'Poor email deliverability', 'Lack of CRM integration'],
    strategy: "We launched a multi-channel digital marketing campaign combining LinkedIn Ads, high-value lead magnets, and automated email nurturing sequences.",
    quote: "For the first time, our sales team is waking up to a calendar full of booked meetings with qualified prospects.",
    execution: [
      { title: "Go-to-Market Strategy", desc: "Defined target buyer personas and crafted compelling value propositions." },
      { title: "Campaign Launch", desc: "Executed targeted LinkedIn and Search ads driving traffic to optimized landing pages." },
      { title: "Automation", desc: "Set up Zapier and HubSpot integrations to nurture leads via email automatically." }
    ],
    timeline: "Ongoing",
    industry: "Healthcare / B2B",
    technologies: ['HubSpot', 'LinkedIn Ads', 'Zapier', 'Webflow']
  },
  {
    id: "salon-growth",
    title: "Driving 150+ Monthly Bookings for a Premium Salon",
    client: "Luxe Hair & Beauty Studio",
    summary: "Luxe Studio was struggling to fill their chairs on weekdays. We implemented a hyper-local social media strategy that transformed their booking rate.",
    metrics: [
      { value: "150+", label: "New Bookings", color: "text-[#2563eb]" },
      { value: "4.5x", label: "ROAS", color: "text-[#3b82f6]" }
    ],
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1500",
    problem: "Despite being in a prime location, the salon had low foot traffic and was heavily reliant on walk-ins rather than scheduled appointments.",
    problemList: ['Empty chairs during weekdays', 'No online booking system', 'Ineffective local awareness', 'Low social media engagement'],
    strategy: "We launched targeted Meta ads offering weekday specials, combined with highly aesthetic before-and-after Reels to showcase their expertise locally.",
    quote: "Our stylists are fully booked two weeks in advance. The digital transformation was exactly what we needed.",
    execution: [
      { title: "Local SEO & Booking", desc: "Optimized their Google My Business profile and integrated a seamless booking widget." },
      { title: "Meta Advertising", desc: "Ran geo-targeted Facebook and Instagram ads with compelling offer creatives." },
      { title: "Content Creation", desc: "Produced high-quality video content highlighting client transformations and salon ambiance." }
    ],
    timeline: "Ongoing",
    industry: "Beauty & Wellness",
    technologies: ['Meta Ads', 'Instagram Reels', 'Fresha', 'Google Local']
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="container-custom">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2563eb] mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
        
        <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-4 md:mb-6 text-gray-900 dark:text-white transition-colors duration-300">Case Studies</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
              Explore how we've helped businesses and creators scale through strategic digital engineering and targeted marketing.
            </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="relative">
              {/* Divider if not first */}
              {index > 0 && <hr className="absolute -top-16 left-0 right-0 border-gray-200 dark:border-slate-800" />}
              
              {/* Hero for Case Study */}
              <section className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <div className="text-[#2563eb] font-bold uppercase tracking-[0.2em] mb-4">Case Study: {study.client}</div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 dark:text-white transition-colors duration-300">{study.title}</h2>
                  <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">
                    {study.summary}
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    {study.metrics.map((metric, mIndex) => (
                      <div key={mIndex} className="p-6 bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] rounded-2xl border border-transparent dark:border-slate-700 transition-colors duration-300">
                        <div className={`text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                        <div className="text-sm text-gray-500 uppercase font-bold tracking-widest">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-700 aspect-[4/3] transition-colors duration-300">
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
                    <h3 className="text-3xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white transition-colors duration-300">
                      <Target className="text-[#2563eb]" /> The Problem
                    </h3>
                    <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
                      {study.problem}
                    </p>
                    <ul className="space-y-4">
                      {study.problemList.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                          <CheckCircle2 size={18} className="text-red-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Strategy */}
                  <section>
                    <h3 className="text-3xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white transition-colors duration-300">
                      <Zap className="text-[#2563eb]" /> Our Strategy
                    </h3>
                    <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
                      {study.strategy}
                    </p>
                    <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-[#2563eb]/20 italic text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      "{study.quote}"
                    </div>
                  </section>

                  {/* Execution */}
                  <section>
                    <h3 className="text-3xl mb-6 flex items-center gap-3 text-gray-900 dark:text-white transition-colors duration-300">
                      <TrendingUp className="text-[#2563eb]" /> Execution
                    </h3>
                    <div className="space-y-8">
                      {study.execution.map((phase, pIndex) => (
                        <div key={pIndex} className="bg-white dark:bg-slate-800 shadow-sm p-8 rounded-3xl border border-gray-100 dark:border-slate-700 transition-colors duration-300">
                          <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">{phase.title}</h4>
                          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{phase.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Sidebar Info */}
                <aside className="space-y-8">
                  <div className="bg-white dark:bg-slate-800 shadow-sm p-8 rounded-3xl border border-[#2563eb]/10 sticky top-32 transition-colors duration-300">
                    <h3 className="text-2xl mb-8 text-gray-900 dark:text-white transition-colors duration-300">At a Glance</h3>
                    <div className="space-y-8">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Timeline</div>
                        <div className="flex items-center gap-2 font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300"><Clock size={16} className="text-[#2563eb]" /> {study.timeline}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Industry</div>
                        <div className="flex items-center gap-2 font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300"><Users size={16} className="text-[#2563eb]" /> {study.industry}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Technologies</div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {study.technologies.map(t => (
                            <span key={t} className="text-xs bg-[#2563eb]/10 text-[#2563eb] px-3 py-1 rounded-full font-bold">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <hr className="my-8 border-gray-200 dark:border-slate-700" />
                    <Link to="/contact" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white w-full py-3 rounded-full text-center block font-semibold transition-colors duration-300">
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
