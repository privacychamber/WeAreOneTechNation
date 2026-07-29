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
              <div className="interactive-glow p-4 rounded-xl border border-transparent hover:border-[#2563eb]/20">
                <div className="text-4xl font-bold text-[#2563eb] mb-1">50+</div>
                <div className="text-sm text-gray-400 uppercase font-bold tracking-widest">Global Projects</div>
              </div>
              <div className="interactive-glow p-4 rounded-xl border border-transparent hover:border-[#2563eb]/20">
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
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20 transition-all duration-1000"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-600/20 transition-all duration-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">WAOTN?</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">We do not just write code. We architect scalable ecosystems designed to dominate the market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                icon: <Award />, 
                title: 'Premium Execution', 
                desc: 'We only take on projects where we can deliver 10x value. No mediocrity. Every pixel and logic block is vetted.',
                colSpan: 'md:col-span-12 lg:col-span-7',
                bgClass: 'bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900/80',
                accent: 'bg-blue-500'
              },
              {
                icon: <Target />, 
                title: 'Result Driven', 
                desc: 'Every line of code is written with your business KPIs in mind.',
                colSpan: 'md:col-span-6 lg:col-span-5',
                bgClass: 'bg-white dark:bg-slate-800',
                accent: 'bg-indigo-500'
              },
              {
                icon: <Shield />, 
                title: 'Rock-Solid Trust', 
                desc: 'We are long-term partners. Your security and scalability are our priority. We treat your infrastructure as if it were our own.',
                colSpan: 'md:col-span-6 lg:col-span-12 lg:flex lg:items-center lg:gap-12',
                bgClass: 'bg-[#0B0F1A] dark:bg-black',
                textClass: 'text-white',
                accent: 'bg-white',
                flexStyle: true
              }
            ].map((item, i) => (
              <div key={i} className={`group relative overflow-hidden p-8 md:p-12 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-200/50 dark:border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.02)] ${item.colSpan} ${item.bgClass}`}>
                
                {/* Decorative background circle on hover */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl ${item.accent}`}></div>
                
                <div className={`relative z-10 h-full ${item.flexStyle ? 'lg:flex lg:items-center lg:justify-between lg:w-full' : 'flex flex-col justify-between gap-8'}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${item.textClass === 'text-white' ? 'bg-white/10 text-white' : 'bg-blue-50 dark:bg-slate-700 text-[#2563eb]'} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.flexStyle ? 'mb-6 lg:mb-0' : ''}`}>
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  
                  <div className={item.flexStyle ? 'lg:flex-1 lg:ml-12' : ''}>
                    <h3 className={`text-2xl font-bold mb-4 ${item.textClass || 'text-gray-900 dark:text-white'}`}>{item.title}</h3>
                    <p className={`leading-relaxed text-lg ${item.textClass === 'text-white' ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>{item.desc}</p>
                  </div>
                  
                  {item.flexStyle && (
                    <div className="hidden lg:block shrink-0">
                       <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all duration-300 group-hover:translate-x-2">
                         <Sparkles size={20} />
                       </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
            <Link to="/contact" className="interactive-glow-button bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full font-semibold px-8 md:px-10 py-4 transition-colors duration-300 inline-flex items-center justify-center">Work With Us</Link>
            <Link to="/portfolio" className="interactive-glow-button border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white rounded-full font-semibold px-8 md:px-10 py-4 transition-colors duration-300 inline-flex items-center justify-center">See Our Legacy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
