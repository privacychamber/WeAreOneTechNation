import React, { useState } from 'react';
import { MessageSquare, Briefcase, Calendar, X } from 'lucide-react';
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
      {isOpen && (
        <div className="flex flex-col items-end gap-3 mb-2">
          {actions.map((action, i) => (
            <a
              key={i}
              href={action.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-full text-white font-medium shadow-xl transition-colors duration-200 ${action.color}`}
            >
              <span className="text-sm whitespace-nowrap">{action.label}</span>
              {action.icon}
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-2xl transition-colors duration-200"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

