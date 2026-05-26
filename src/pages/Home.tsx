import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Globe, Cpu, Database, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContent } from '../hooks/useContent';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const { content } = useContent();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroGlowRef = useRef<HTMLDivElement>(null);
  
  // Refs for stats count-up animations
  const efficiencyCountRef = useRef<HTMLSpanElement>(null);
  const conversionCountRef = useRef<HTMLDivElement>(null);

  const heroSubtitle = content?.settings?.hero_subtitle || "From AI-powered automation to high-performance web ecosystems. We design, build, and scale your digital future.";
  const heroTitle = content?.settings?.hero_title || "We Build Digital <br /><span class='text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent'>Systems That Think,</span> <br />Learn, and Convert.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title clip-path slide reveal
      gsap.fromTo('.hero-title-mask', 
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 30 },
        { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', y: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );

      // 2. Stagger fade-in for subtitle and CTAs
      gsap.from('.hero-sub-anim', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.6
      });

      // 3. Scale and fade-in for the main mockup
      gsap.from('.hero-mockup-anim', {
        scale: 0.95,
        opacity: 0,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.5
      });

      // 4. Background tech elements continuous rotation & float
      gsap.to('.tech-circle-rotate', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.tech-float-1', {
        y: -15,
        x: 10,
        rotation: 6,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      gsap.to('.tech-float-2', {
        y: 18,
        x: -12,
        rotation: -6,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      // 5. Section Scroll Reveals
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          },
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // 6. Stats Count Up (Efficiency Card - 85%)
      const countObj = { efficiency: 0, conversion: 0 };
      
      gsap.to(countObj, {
        efficiency: 85,
        duration: 2.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#stats-container',
          start: 'top 85%',
        },
        onUpdate: () => {
          if (efficiencyCountRef.current) {
            efficiencyCountRef.current.innerText = Math.floor(countObj.efficiency).toString();
          }
        }
      });

      // Stats Count Up (Hero Floating Card - 142%)
      gsap.to(countObj, {
        conversion: 142,
        duration: 2.5,
        ease: 'power3.out',
        delay: 0.8,
        onUpdate: () => {
          if (conversionCountRef.current) {
            conversionCountRef.current.innerText = '+' + Math.floor(countObj.conversion).toString() + '%';
          }
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 7. Interactive mouse spotlight follow-me effect in Hero
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroGlowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(heroGlowRef.current, {
      x: x - 200,
      y: y - 200,
      duration: 0.8,
      ease: 'power3.out'
    });
  };

  // 8. 3D card tilt controls for services
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 12; // tilt angle
    const rotateY = (x - centerX) / 12;
    
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  const logos = ['TechFlow', 'Quantum', 'Nexus', 'Apex', 'Vanguard'];

  const defaultServices = [
    {
      title: "AI-Powered Systems",
      desc: "Intelligent automation and LLMs that automate workflows and drive actions.",
      icon: <Cpu className="text-primary" size={32} />
    },
    {
      title: "High-Converting Websites",
      desc: "Speed-optimized, SEO-first landing pages and products that convert visitors into revenue.",
      icon: <Globe className="text-accent-dark" size={32} />
    },
    {
      title: "Scalable Architectures",
      desc: "Robust backends and edge deployments handling millions of requests with ease.",
      icon: <Database className="text-primary" size={32} />
    },
    {
      title: "Digital Security",
      desc: "Enterprise-grade protection protecting your systems and safeguarding user data.",
      icon: <Shield className="text-accent-dark" size={32} />
    }
  ];

  const dynamicServices = content?.services && content.services.length > 0
    ? content.services.map((s: any) => ({
        title: s.title,
        desc: s.description,
        icon: s.icon === 'cpu' ? <Cpu className="text-primary" size={32} /> : 
              s.icon === 'globe' ? <Globe className="text-accent-dark" size={32} /> :
              s.icon === 'database' ? <Database className="text-primary" size={32} /> :
              s.icon === 'shield' ? <Shield className="text-accent-dark" size={32} /> :
              s.icon === 'layers' ? <BarChart3 className="text-accent-dark" size={32} /> :
              <Globe className="text-primary" size={32} />
      }))
    : defaultServices;

  return (
    <div ref={heroRef} className="bg-background-dark text-white select-none relative overflow-hidden">
      {/* Interactive mouse follow spotlight */}
      <div 
        ref={heroGlowRef}
        className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-0 lg:opacity-100 transition-opacity duration-1000 z-0"
        style={{ left: 0, top: 0 }}
      />

      {/* Hero Section */}
      <section 
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden z-10"
      >
        {/* Futuristic Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] z-0" />

        {/* Ambient Blur Lights */}
        <div className="absolute top-[10%] left-[-5%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Rotating Tech Compass Accents (Background) */}
        <div className="absolute top-[15%] right-[8%] opacity-20 pointer-events-none z-0 hidden xl:block tech-circle-rotate">
          <svg width="240" height="240" viewBox="0 0 100 100" className="text-primary">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4, 4" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.2" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>

        {/* Floating Futuristic Node Accents */}
        <div className="absolute bottom-[15%] left-[5%] opacity-15 pointer-events-none z-0 hidden lg:block tech-float-1">
          <svg width="180" height="180" viewBox="0 0 100 100" className="text-accent">
            <line x1="10" y1="30" x2="50" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <line x1="50" y1="10" x2="90" y2="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="90" y1="40" x2="60" y2="80" stroke="currentColor" strokeWidth="0.5" />
            <line x1="60" y1="80" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="10" cy="30" r="3" fill="currentColor" />
            <circle cx="50" cy="10" r="4" fill="currentColor" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="50" cy="10" r="3" fill="currentColor" />
            <circle cx="90" cy="40" r="2.5" fill="currentColor" />
            <circle cx="60" cy="80" r="3" fill="currentColor" />
          </svg>
        </div>

        <div className="container-custom grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="hero-sub-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-wider uppercase shadow-inner backdrop-blur-sm">
              <Zap size={12} className="text-accent fill-accent animate-pulse" />
              <span>The New Standard in Tech</span>
            </div>
            
            <div className="overflow-hidden">
              <h1 
                className="hero-title-mask text-4xl sm:text-5xl md:text-6xl font-extrabold font-sora leading-[1.1] tracking-tight text-white"
                dangerouslySetInnerHTML={{ __html: heroTitle }}
              />
            </div>
            
            <p className="hero-sub-anim text-base sm:text-lg md:text-xl text-slate-400 max-w-xl font-normal leading-relaxed">
              {heroSubtitle}
            </p>
            
            <div className="hero-sub-anim flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                to="/contact" 
                className="btn-primary text-center px-8 py-4 text-base font-bold shadow-[0_10px_25px_-5px_rgba(79,109,255,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(79,109,255,0.6)] transition-all duration-300"
              >
                Build My System
              </Link>
              <Link 
                to="/portfolio" 
                className="btn-outline text-center px-8 py-4 text-base font-bold border-white/10 text-white bg-white/[0.02] hover:bg-white/5 hover:border-white transition-all duration-300"
              >
                See Portfolio
              </Link>
            </div>
            
            <div className="hero-sub-anim flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <CheckCircle2 size={16} className="text-primary" />
                <span>Multi-Page Scaling</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <CheckCircle2 size={16} className="text-primary" />
                <span>AI Integration</span>
              </div>
            </div>
          </div>

          {/* Right Hero Mockup with Orbiting Floating Cards */}
          <div className="lg:col-span-6 relative hero-mockup-anim mt-10 lg:mt-0 z-10">
            {/* macOS Chrome Wrapper */}
            <div className="relative z-10 glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-slate-950/40 backdrop-blur-md p-2 group/mockup">
              {/* macOS Window Chrome Header */}
              <div className="bg-slate-900/60 px-4 py-2.5 rounded-t-xl border-b border-white/5 flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mx-auto pr-8">
                  waotn.agency // System_Console
                </div>
              </div>
              
              {/* Dashboard image content */}
              <div className="bg-slate-950/50 rounded-b-xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="WAOTN System Dashboard" 
                  className="w-full h-auto opacity-75 group-hover/mockup:opacity-90 transition-opacity duration-700"
                />
              </div>
            </div>

            {/* Orbiting Badge 1: Multi-Page Scaling */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -left-10 top-1/4 glass px-4 py-2.5 rounded-xl border border-white/10 shadow-xl hidden md:flex items-center gap-3 backdrop-blur-md bg-black/40 z-20 tech-float-1"
            >
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                <Globe size={16} />
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Infrastructure</div>
                <div className="text-xs font-bold text-white font-sora">Multi-Page Scaling</div>
              </div>
            </motion.div>

            {/* Orbiting Badge 2: AI Integration */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute right-4 -top-6 glass px-4 py-2.5 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 backdrop-blur-md bg-black/40 z-20 tech-float-2"
            >
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary animate-pulse">
                <Cpu size={16} />
              </div>
              <div>
                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Engineered</div>
                <div className="text-xs font-bold text-white font-sora">AI Integration</div>
              </div>
            </motion.div>

            {/* Orbiting Badge 3: Conversion Rate count-up */}
            <motion.div 
              id="hero-conversion-card"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 backdrop-blur-md bg-black/50 z-20 max-w-[210px]"
            >
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                <BarChart3 size={20} />
              </div>
              <div>
                <div className="text-[9px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">Conversion Rate</div>
                <div 
                  ref={conversionCountRef}
                  className="text-2xl font-black font-sora text-emerald-400"
                >
                  +0%
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Infinite Horizontal Logo Marquee */}
      <section className="relative w-full overflow-hidden py-8 bg-slate-950/50 border-y border-white/5 z-10">
        <div className="container-custom mb-6">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.25em]">
            Trusted by Forward-Thinking Enterprises
          </p>
        </div>
        
        <div className="flex overflow-hidden select-none relative w-full">
          {/* Edge Faders */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none" />

          {/* Running Tape 1 */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-20 shrink-0 min-w-full justify-around items-center pr-20"
          >
            {logos.map((name, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-primary text-sm font-sora group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  {name[0]}
                </div>
                <span className="text-lg font-bold font-sora tracking-wider">{name}</span>
              </div>
            ))}
          </motion.div>

          {/* Running Tape 2 */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-20 shrink-0 min-w-full justify-around items-center pr-20"
          >
            {logos.map((name, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-primary text-sm font-sora group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                  {name[0]}
                </div>
                <span className="text-lg font-bold font-sora tracking-wider">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative overflow-hidden z-10">
        <div className="container-custom relative z-10">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-20 reveal">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold mt-2 mb-6">
              Expertise at the Intersection<br />of AI and Design
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We don't just build websites; we engineer digital ecosystems that serve as the backbone of your business growth.
            </p>
          </div>

          {/* 3D Tilting Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dynamicServices.map((service: any, i: number) => (
              <div
                key={i}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="reveal glass p-8 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-default"
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
              >
                {/* Custom internal glow accent */}
                <div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,109,255,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ transform: 'translateZ(10px)' }}
                />
                
                <div style={{ transform: 'translateZ(25px)' }}>
                  {/* Icon Frame */}
                  <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-2xl inline-block group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-sora text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all duration-300"
                  style={{ transform: 'translateZ(15px)' }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Performance & Metrics Section */}
      <section className="section-padding bg-background-dark text-white relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50 z-0" />

        {/* Ambient Blur Blurs */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 z-0" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Numbered Timeline */}
            <div className="lg:col-span-7 reveal space-y-12">
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-widest">Why Partners Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-sora font-extrabold mt-2 mb-6">
                  Built for Performance.<br />Designed for Scale.
                </h2>
                <p className="text-slate-400 text-base sm:text-lg max-w-xl">
                  We bridge the gap between intelligent systems and high-converting visual design to give your business an unfair advantage.
                </p>
              </div>

              <div className="space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/5">
                {[
                  { 
                    number: '01', 
                    title: 'Core Web Vitals', 
                    desc: 'Every system is engineered to score 90+ on Lighthouse, ensuring instant load times and perfect SEO signals.',
                    badge: '99 score'
                  },
                  { 
                    number: '02', 
                    title: 'Conversion-First UX', 
                    desc: 'We map detailed user journeys and deploy behavioral heatmaps to maximize pipeline and revenue generation.',
                    badge: '142% avg. lift'
                  },
                  { 
                    number: '03', 
                    title: 'Modern Tech Stack', 
                    desc: 'Utilizing React, Next.js, Headless CMS, and edge deployments to provide speed, security, and effortless scaling.',
                    badge: 'Next.js & Edge'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative group">
                    {/* Number Circle Indicator */}
                    <div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 flex-shrink-0 flex items-center justify-center font-sora font-bold text-slate-400 group-hover:text-primary z-10">
                      {item.number}
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg sm:text-xl font-bold font-sora text-white group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-accent group-hover:bg-accent/10 group-hover:text-white transition-all duration-300">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Stats Dashboard & Quote */}
            <div id="stats-container" className="lg:col-span-5 reveal space-y-8 z-10">
              
              {/* Stats Panel with Count Up */}
              <div className="glass rounded-3xl p-8 border border-white/5 bg-white/[0.01] shadow-2xl relative overflow-hidden group hover:border-white/10 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Efficiency Increase</div>
                    <div className="text-5xl font-extrabold font-sora text-white group-hover:text-primary transition-colors duration-300">
                      <span ref={efficiencyCountRef}>0</span>%
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 font-bold text-xs flex items-center gap-1">
                    <span>+22% YoY</span>
                  </div>
                </div>

                {/* Animated Mini Bar Chart */}
                <div className="h-28 flex items-end gap-3 mb-4 px-2">
                  {[45, 60, 40, 80, 55, 75, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end h-full group/bar">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-primary to-accent rounded-t-md relative"
                      >
                        {/* Interactive Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-white/10 px-1.5 py-0.5 rounded text-[10px] text-white opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {h}%
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider px-1">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                  <span>Q5</span>
                  <span>Q6</span>
                  <span>Active</span>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="glass rounded-3xl p-8 border border-white/5 bg-gradient-to-r from-primary/5 to-accent/5 relative overflow-hidden shadow-xl">
                <div className="absolute top-4 left-6 text-7xl font-serif text-primary/10 select-none">“</div>
                <div className="relative z-10">
                  <p className="text-slate-300 italic text-base leading-relaxed mb-6 font-medium">
                    "WAOTN transformed our legacy systems into a modern AI-integrated engine. Our output doubled within 3 months."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-white text-sm">
                      CT
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Chief Technology Officer</div>
                      <div className="text-xs text-slate-500">Enterprise AI Partner</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="section-padding container-custom reveal z-10 relative">
        <div className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent shadow-2xl">
          {/* Radial blur light glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-primary/25 rounded-full blur-[130px] -z-10 pointer-events-none" />
          <div className="absolute -bottom-10 left-1/4 w-[40%] h-[40%] bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-sora font-extrabold text-white mb-6 leading-tight tracking-tight">
            Ready to Scale Your<br />Digital Nation?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join the elite companies leveraging premium technology to dominate their markets. Strategy calls are limited.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-xs mx-auto sm:max-w-none">
            <Link 
              to="/contact" 
              className="btn-primary px-8 py-4 text-base font-bold shadow-[0_15px_30px_-10px_rgba(79,109,255,0.5)] hover:shadow-[0_20px_40px_-5px_rgba(79,109,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center"
            >
              Book Your Strategy Call
            </Link>
            <Link 
              to="/portfolio" 
              className="btn-outline px-8 py-4 text-base font-bold border-white/10 hover:border-white text-white bg-white/[0.02] hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
