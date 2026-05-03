import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Globe, Cpu, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContent } from '../hooks/useContent';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const { content } = useContent();
  const heroRef = useRef<HTMLDivElement>(null);

  const heroTitle = content?.settings?.hero_title || "We Build Digital <br /><span class='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>Systems That Think,</span> <br />Learn, and Convert.";
  const heroSubtitle = content?.settings?.hero_subtitle || "From AI-powered automation to high-performance web ecosystems. We design, build, and scale your digital future.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5
      });

      // Section Reveals
      gsap.utils.toArray('.reveal').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const dynamicServices = content?.services?.map((s: any) => ({
    title: s.title,
    desc: s.description,
    icon: s.icon === 'cpu' ? <Cpu className="text-primary" size={32} /> : 
          s.icon === 'layers' ? <BarChart3 className="text-accent-dark" size={32} /> :
          <Globe className="text-primary" size={32} />
  })) || [];

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-primary text-sm font-semibold">
              <Zap size={14} fill="currentColor" /> <span>The New Standard in Tech</span>
            </div>
            <h1 
              className="text-5xl md:text-7xl leading-tight"
              dangerouslySetInnerHTML={{ __html: heroTitle }}
            />
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="btn-primary text-center px-10 py-4 text-lg">
                Build My System
              </Link>
              <Link to="/portfolio" className="btn-outline text-center px-10 py-4 text-lg">
                See Portfolio
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" /> Multi-Page Scaling
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary" /> AI Integration
              </div>
            </div>
          </div>

          <div className="hero-image relative lg:block">
            <div className="relative z-10 glass rounded-3xl p-4 overflow-hidden border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Dashboard Preview" 
                className="rounded-2xl w-full h-auto shadow-inner"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 animate-pulse" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 hidden md:block border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Conversion Rate</div>
                  <div className="text-2xl font-bold font-sora">+142%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
        <div className="container-custom">
          <p className="text-center text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] mb-10">
            Trusted by Forward-Thinking Enterprises
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['TechFlow', 'Quantum', 'Nexus', 'Apex', 'Vanguard'].map((name) => (
              <span key={name} className="text-2xl font-bold font-sora text-slate-400">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-3xl mb-20 reveal">
            <h2 className="text-4xl md:text-5xl mb-6">Expertise at the Intersection of AI and Design</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We don't just build websites; we engineer digital ecosystems that serve as the backbone of your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dynamicServices.map((service, i) => (
              <div key={i} className="reveal glass p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                <div className="mb-6 p-4 bg-slate-100 dark:bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="section-padding bg-background-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl mb-8">Built for Performance. <br />Designed for Scale.</h2>
              <div className="space-y-6">
                {[
                  { title: 'Core Web Vitals', desc: 'Every project scores 90+ on Lighthouse metrics.' },
                  { title: 'Conversion-First UX', desc: 'User journeys mapped to drive revenue and leads.' },
                  { title: 'Modern Tech Stack', desc: 'React, Next.js, and Headless CMS for maximum agility.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-[10px] font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="glass rounded-3xl p-8 border-white/5 space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-slate-400 text-sm mb-1 uppercase tracking-widest">Efficiency Increase</div>
                    <div className="text-5xl font-bold font-sora">85%</div>
                  </div>
                  <div className="text-primary font-bold text-lg mb-1">+22% YoY</div>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-lg transition-all duration-1000" 
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-slate-400 italic">
                  "WAOTN transformed our legacy systems into a modern AI-integrated engine. Our output doubled within 3 months."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding container-custom reveal">
        <div className="glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border-primary/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/10 blur-[120px] -z-10" />
          <h2 className="text-4xl md:text-6xl mb-8">Ready to Scale Your Digital Nation?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Join the elite companies leveraging premium technology to dominate their markets. Strategy calls are limited.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn-primary px-12 py-5 text-xl">
              Book Your Strategy Call
            </Link>
            <Link to="/portfolio" className="btn-outline px-12 py-5 text-xl">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
