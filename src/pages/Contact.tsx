import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const Contact: React.FC = () => {
  const { content } = useContent();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    budget: '$5,000 - $10,000',
    message: ''
  });

  const email = content?.settings?.contact_email || 'privacy.chamber@gmail.com';
  const whatsapp = content?.settings?.contact_whatsapp || '+91-9418100803';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({
          name: '',
          email: '',
          projectType: 'Web Development',
          budget: '$5,000 - $10,000',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="pt-32 pb-20">
      <section className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl mb-8 text-gray-900 dark:text-white transition-colors duration-300">Let's Build <br />Something Great.</h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-md transition-colors duration-300">
                Ready to transform your business with a premium digital system? We're here to help you scale.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-[#2563eb] transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Email Us</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-[#2563eb] transition-colors duration-300">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">WhatsApp</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{whatsapp}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-[#2563eb] transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Global HQ</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Digital Nomad / Remote</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] rounded-3xl border border-blue-100 dark:border-slate-700 transition-colors duration-300">
              <h3 className="text-2xl mb-4 font-bold text-gray-900 dark:text-white transition-colors duration-300">What happens next?</h3>
              <ul className="space-y-4">
                {[
                  'Reply within 24 business hours',
                  'Schedule a 30-min discovery call',
                  'Receive a custom strategy proposal',
                  'Start building your digital nation'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <div className="w-6 h-6 bg-[#2563eb]/20 dark:bg-[#2563eb]/30 rounded-full flex items-center justify-center text-[#2563eb] text-xs font-bold">{i + 1}</div>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="bg-white dark:bg-slate-800 p-10 md:p-12 rounded-[3rem] border border-gray-100 dark:border-slate-700 shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] relative z-10 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 px-6 py-4 rounded-2xl outline-none focus:border-[#2563eb] dark:focus:border-[#2563eb] transition-colors text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 px-6 py-4 rounded-2xl outline-none focus:border-[#2563eb] dark:focus:border-[#2563eb] transition-colors text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 px-6 py-4 rounded-2xl outline-none focus:border-[#2563eb] transition-colors appearance-none text-gray-900 dark:text-white"
                    >
                      <option>Web Development</option>
                      <option>AI Integration</option>
                      <option>Digital Automation</option>
                      <option>SaaS Development</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 px-6 py-4 rounded-2xl outline-none focus:border-[#2563eb] transition-colors appearance-none text-gray-900 dark:text-white"
                    >
                      <option>$2,000 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $20,000</option>
                      <option>$20,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Tell us about your project</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 px-6 py-4 rounded-2xl outline-none focus:border-[#2563eb] transition-colors resize-none text-gray-900 dark:text-white"
                    placeholder="Briefly describe your goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full font-semibold transition-colors duration-300 w-full py-5 text-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#2563eb]/10 blur-[100px] -z-10" />
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="container-custom mt-32 text-center">
        <h2 className="text-4xl mb-12 text-gray-900 dark:text-white transition-colors duration-300">Frequently Asked</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { q: "How long does a project take?", a: "Most projects take between 4-12 weeks depending on complexity." },
            { q: "Do you offer maintenance?", a: "Yes, we provide ongoing scaling and maintenance packages." }
          ].map((faq, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] rounded-3xl border border-gray-100 dark:border-slate-700 text-left transition-colors duration-300">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{faq.q}</h4>
              <p className="text-gray-500 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
