import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Globe, Award, Sparkles } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="container-custom mb-12 md:mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 shadow-sm text-[#2563eb] text-sm font-semibold mb-6 transition-colors duration-300">
          <Globe size={14} /> <span>Global Full-Service Tech Partner</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8 text-gray-900 dark:text-white transition-colors duration-300">Engineering the Future of <br />Digital Nations.</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
          We Are One Tech Nation (WAOTN) is a premier digital engineering firm. We specialize in building high-value systems for businesses that demand excellence, performance, and scale.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 md:py-32 bg-gray-50 dark:bg-[#111827] transition-colors duration-300">
        <div className="container-custom grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">Our Vision</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              {content?.settings?.about_vision || "Founded on the principle of 'One Tech Nation,' we believe in a unified digital future where AI and human creativity merge to solve the world's most complex business challenges."}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              {content?.settings?.about_vision_secondary || "We don't operate like a standard agency. We are your technical co-founders, your innovation lab, and your scale partner all in one."}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-[#2563eb] mb-1">50+</div>
                <div className="text-sm text-gray-400 uppercase font-bold tracking-widest">Global Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2563eb] mb-1">$10M+</div>
                <div className="text-sm text-gray-400 uppercase font-bold tracking-widest">Client Revenue Generated</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1500" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 rounded-2xl border border-blue-100 dark:border-slate-700 animate-float transition-colors duration-300">
              <Sparkles className="text-[#2563eb] mb-2" size={32} />
              <div className="font-bold text-gray-900 dark:text-white">Premium Quality</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Guaranteed Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-32 container-custom">
        <h2 className="text-3xl md:text-4xl text-center mb-10 md:mb-20 text-gray-900 dark:text-white transition-colors duration-300">Why Choose WAOTN?</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: <Award />, title: 'Premium Execution', desc: 'We only take on projects where we can deliver 10x value. No mediocrity.' },
            { icon: <Target />, title: 'Result Driven', desc: 'Every line of code is written with your business KPIs in mind.' },
            { icon: <Shield />, title: 'Rock-Solid Trust', desc: 'We are long-term partners. Your security and scalability are our priority.' }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4 md:space-y-6 bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-6 md:p-10 rounded-2xl md:rounded-3xl transition-colors duration-300 border border-transparent dark:border-slate-700">
              <div className="w-20 h-20 bg-[#2563eb]/10 dark:bg-[#2563eb]/20 rounded-full flex items-center justify-center text-[#2563eb] mx-auto">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 md:py-32 container-custom text-center">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
          <h2 className="text-3xl md:text-5xl text-gray-900 dark:text-white transition-colors duration-300">Join the Nation of Innovators.</h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 transition-colors duration-300">
            We are always looking for the top 1% of talent and partners to push the boundaries of what's possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link to="/contact" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full font-semibold px-8 md:px-10 py-4 transition-colors duration-300 inline-flex items-center justify-center">Work With Us</Link>
            <Link to="/portfolio" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white rounded-full font-semibold px-8 md:px-10 py-4 transition-colors duration-300 inline-flex items-center justify-center">See Our Legacy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
