import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32 pb-20">
      <section className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl mb-8">Let's Build <br />Something Great.</h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-md">
                Ready to transform your business with a premium digital system? We're here to help you scale.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Email Us</div>
                  <div className="text-xl font-bold">hello@waotn.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">WhatsApp</div>
                  <div className="text-xl font-bold">+1 (555) 000-0000</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Global HQ</div>
                  <div className="text-xl font-bold">Digital Nomad / Remote</div>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border-primary/20">
              <h3 className="text-2xl mb-4 font-bold">What happens next?</h3>
              <ul className="space-y-4">
                {[
                  'Reply within 24 business hours',
                  'Schedule a 30-min discovery call',
                  'Receive a custom strategy proposal',
                  'Start building your digital nation'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs font-bold">{i + 1}</div>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="glass p-10 md:p-12 rounded-[3rem] border-white/20 shadow-2xl relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Project Type</label>
                    <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors appearance-none">
                      <option>Web Development</option>
                      <option>AI Integration</option>
                      <option>Digital Automation</option>
                      <option>SaaS Development</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Estimated Budget</label>
                    <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors appearance-none">
                      <option>$2,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $20,000</option>
                      <option>$20,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Tell us about your project</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Briefly describe your goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitted}
                  className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>Message Sent! <CheckCircle2 /></>
                  ) : (
                    <>Start Your Project <Send size={20} /></>
                  )}
                </button>
              </form>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10" />
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="container-custom mt-32 text-center">
        <h2 className="text-4xl mb-12">Frequently Asked</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { q: "How long does a project take?", a: "Most projects take between 4-12 weeks depending on complexity." },
            { q: "Do you offer maintenance?", a: "Yes, we provide ongoing scaling and maintenance packages." }
          ].map((faq, i) => (
            <div key={i} className="p-8 glass rounded-3xl text-left">
              <h4 className="text-xl font-bold mb-4">{faq.q}</h4>
              <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
