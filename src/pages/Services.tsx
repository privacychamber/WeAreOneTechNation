import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Zap, ArrowRight, Layers, Smartphone, Database } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'ai',
      title: 'AI & Automation Systems',
      subtitle: 'Intelligence built into your core.',
      description: 'We integrate advanced LLMs and custom automation pipelines into your existing workflows to reduce manual overhead and increase decision-making speed.',
      features: ['Custom GPT & LLM Integration', 'Automated Content Pipelines', 'Intelligent Customer Support Bots', 'Predictive Analytics Dashboards'],
      icon: <Cpu className="text-primary" size={48} />,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'web',
      title: 'High-Performance Web',
      subtitle: 'Websites that convert at 3x the industry average.',
      description: 'Beyond aesthetics, we build for conversion. Our websites are lightweight, SEO-engineered, and designed with psychological triggers to turn visitors into leads.',
      features: ['React & Next.js Development', 'Headless CMS Architecture', 'Performance Optimization (Lighthouse 95+)', 'SEO & Conversion Engineering'],
      icon: <Globe className="text-accent-dark" size={48} />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 'infra',
      title: 'Scalable Architecture',
      subtitle: 'Foundations that never break.',
      description: 'Build for today, scale for tomorrow. We design cloud-native infrastructures that handle traffic spikes and complex data loads with ease.',
      features: ['Cloud Infrastructure (AWS/GCP/Azure)', 'Microservices Architecture', 'Database Optimization', 'Real-time Data Processing'],
      icon: <Layers className="text-primary" size={48} />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="container-custom mb-20 text-center">
        <h1 className="text-5xl md:text-7xl mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          We provide end-to-end digital engineering for companies that refuse to settle for "good enough".
        </p>
      </section>

      {/* Service Blocks */}
      {serviceCategories.map((service, i) => (
        <section key={service.id} className={`py-20 ${i % 2 === 1 ? 'bg-slate-50 dark:bg-white/[0.02]' : ''}`}>
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6 p-4 glass rounded-2xl inline-block">
                  {service.icon}
                </div>
                <h2 className="text-4xl mb-2">{service.title}</h2>
                <p className="text-primary font-bold text-lg mb-6">{service.subtitle}</p>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Zap size={18} className="text-primary flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Inquire About This Service <ArrowRight size={20} />
                </Link>
              </div>
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-[60px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Grid */}
      <section className="section-padding container-custom">
        <h2 className="text-4xl text-center mb-20">The WAOTN Advantage</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap />, title: 'Speed', desc: 'We ship 2x faster than traditional agencies through our proprietary automation frameworks.' },
            { icon: <Database />, title: 'Scalability', desc: 'Your system is built to handle $10M+ in revenue from day one.' },
            { icon: <Smartphone />, title: 'Modern UX', desc: 'Mobile-first, high-fidelity designs that wow your customers.' }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-3xl text-center space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <div className="glass p-16 rounded-[3rem] border-primary/10">
            <h2 className="text-4xl mb-8">Not sure which system you need?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Our consultants help you map out the technical roadmap for your business.
            </p>
            <Link to="/contact" className="btn-primary px-12 py-4 text-lg">
              Book a Discovery Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
