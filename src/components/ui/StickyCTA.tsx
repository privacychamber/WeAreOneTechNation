import React, { useState } from 'react';
import { MessageSquare, Briefcase, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../../hooks/useContent';

export const StickyCTA: React.FC = () => {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);

  const rawWhatsapp = content?.settings?.contact_whatsapp || '+91-9418100803';
  const cleanWhatsapp = rawWhatsapp.replace(/\D/g, '');

  const actions = [
    { icon: <MessageSquare size={20} />, label: 'WhatsApp', href: `https://wa.me/${cleanWhatsapp}`, color: 'bg-[#25D366]' },
    { icon: <Briefcase size={20} />, label: 'View Portfolio', href: '/portfolio', color: 'bg-primary' },
    { icon: <Calendar size={20} />, label: 'Book Call', href: '/contact', color: 'bg-accent-dark' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {actions.map((action, i) => (
              <a
                key={i}
                href={action.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-full text-white font-medium shadow-xl hover:scale-105 transition-transform ${action.color}`}
              >
                <span className="text-sm whitespace-nowrap">{action.label}</span>
                {action.icon}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};
