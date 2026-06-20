import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Zap, ArrowRight, Layers, Smartphone, Database, Shield } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const getIcon = (iconName: string) => {
  switch(iconName) {
    case 'cpu': return <Cpu className="text-[#2563eb]" size={48} />;
    case 'globe': return <Globe className="text-[#3b82f6]" size={48} />;
    case 'layers': return <Layers className="text-[#2563eb]" size={48} />;
    case 'shield': return <Shield className="text-[#3b82f6]" size={48} />;
    default: return <Zap className="text-[#2563eb]" size={48} />;
  }
};

const Services: React.FC = () => {
  const { content } = useContent();
  const serviceCategories = content?.services || [];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="container-custom mb-20 text-center">
        <h1 className="text-5xl md:text-7xl mb-6 text-gray-900 dark:text-white transition-colors duration-300">Our Services</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-300">
          We provide end-to-end digital engineering for companies that refuse to settle for "good enough".
        </p>
      </section>

      {/* Service Blocks */}
      {serviceCategories.map((service: any, i: number) => {
        let featuresList = [];
        try { featuresList = JSON.parse(service.features || '[]'); } catch(e) {}
        
        return (
        <section key={service.id} className={`py-20 transition-colors duration-300 ${i % 2 === 1 ? 'bg-gray-50 dark:bg-[#111827]' : ''}`}>
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 inline-block transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-4xl mb-2 text-gray-900 dark:text-white transition-colors duration-300">{service.title}</h2>
                <p className="text-[#2563eb] font-bold text-lg mb-6">{service.subtitle}</p>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10 text-gray-900 dark:text-gray-300">
                  {featuresList.map((feature: string, j: number) => (
                    <div key={j} className="flex items-center gap-3">
                      <Zap size={18} className="text-[#2563eb] flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 font-semibold rounded-full transition-colors duration-300 inline-flex items-center gap-2">
                  Inquire About This Service <ArrowRight size={20} />
                </Link>
              </div>
              <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#3b82f6]/20 blur-[60px] rounded-full -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2563eb]/20 blur-[60px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>
        );
      })}

      {/* Why Choose Us Grid */}
      <section className="py-20 md:py-32 container-custom">
        <h2 className="text-4xl text-center mb-20 text-gray-900 dark:text-white transition-colors duration-300">The WAOTN Advantage</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap />, title: 'Speed', desc: 'We ship 2x faster than traditional agencies through our proprietary automation frameworks.' },
            { icon: <Database />, title: 'Scalability', desc: 'Your system is built to handle $10M+ in revenue from day one.' },
            { icon: <Smartphone />, title: 'Modern UX', desc: 'Mobile-first, high-fidelity designs that wow your customers.' }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] rounded-3xl p-10 text-center space-y-6 transition-colors duration-300 border border-transparent dark:border-slate-700">
              <div className="w-16 h-16 bg-[#2563eb]/10 dark:bg-[#2563eb]/20 rounded-2xl flex items-center justify-center text-[#2563eb] mx-auto">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="container-custom">
          <div className="bg-white dark:bg-slate-800 shadow-lg dark:shadow-2xl p-16 rounded-[3rem] border border-gray-100 dark:border-slate-700 transition-colors duration-300">
            <h2 className="text-4xl mb-8 text-gray-900 dark:text-white transition-colors duration-300">Not sure which system you need?</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
              Our consultants help you map out the technical roadmap for your business.
            </p>
            <Link to="/contact" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-12 py-4 font-semibold rounded-full transition-colors duration-300 text-lg">
              Book a Discovery Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
