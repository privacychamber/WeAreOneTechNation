import React, { createContext, useContext, useState, useEffect } from 'react';

type ContentContextType = {
  content: any;
  loading: boolean;
  refreshContent: () => Promise<void>;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const defaultFallbackContent = {
    settings: {
      contact_email: 'privacy.chamber@gmail.com',
      contact_whatsapp: '+91-9418100803',
      hero_title: 'We craft digital experiences <br class="hidden sm:block" />for brands ready to dominate <br class="hidden sm:block" />their category online.',
      hero_subtitle: 'Axion Studio',
      about_vision: "Founded on the principle of 'One Tech Nation', we believe in a unified digital future where AI and human creativity merge to solve the world's most complex business challenges.",
      about_vision_secondary: "We don't operate like a standard agency. We are your technical co-founders, your innovation lab, and your scale partner all in one."
    },
    services: [
      {
        id: 1,
        title: 'Website Development',
        subtitle: 'High-converting, scalable platforms.',
        description: 'We build end-to-end web applications designed to convert. Our websites are lightweight, SEO-engineered, and designed with psychological triggers to turn visitors into leads.',
        features: JSON.stringify(['React & Next.js Development', 'Headless CMS Architecture', 'Performance Optimization', 'SEO & Conversion Engineering']),
        icon: 'globe',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        id: 2,
        title: 'Designing',
        subtitle: 'Beautiful, user-centric interfaces.',
        description: 'Modern UX/UI that wows your customers. We design premium brand experiences, from initial wireframes to high-fidelity interactive prototypes.',
        features: JSON.stringify(['UI/UX Design', 'Brand Identity', 'Interactive Prototyping', 'Design Systems']),
        icon: 'layers',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000'
      },
      {
        id: 3,
        title: 'Marketing Services',
        subtitle: 'Full end-to-end business development and management.',
        description: 'We don’t just build your product; we help you scale it. From comprehensive go-to-market strategies to full business management and growth marketing campaigns.',
        features: JSON.stringify(['Go-to-Market Strategy', 'Growth Marketing', 'Lead Generation Automation', 'End-to-End Business Management']),
        icon: 'globe',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2000'
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'Nexus AI Platform',
        category: 'Enterprise SaaS',
        metrics: '+312% Efficiency',
        tags: JSON.stringify(['React', 'Node.js', 'OpenAI API']),
        image_url: 'https://images.unsplash.com/photo-1551288049-bbda4e966c52?auto=format&fit=crop&q=80&w=1500',
        link: '/case-studies'
      },
      {
        id: 2,
        title: 'FinTech Secure',
        category: 'Financial Systems',
        metrics: '0.001s Latency',
        tags: JSON.stringify(['Next.js', 'Go', 'AWS']),
        image_url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=1500',
        link: '/case-studies'
      },
      {
        id: 3,
        title: 'Global Logistics',
        category: 'Logistics Platform',
        metrics: '$12M Saved',
        tags: JSON.stringify(['Vue', 'Python', 'PostgreSQL']),
        image_url: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?auto=format&fit=crop&q=80&w=1500',
        link: '/case-studies'
      }
    ]
  };

  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/get_content.php');
      const text = await response.text();
      try {
        const result = JSON.parse(text);
        if (result.status === 'success') {
          setContent(result.data);
        } else {
          setContent(defaultFallbackContent);
        }
      } catch (e) {
        // Not JSON, fallback to default
        setContent(defaultFallbackContent);
      }
    } catch (error) {
      console.error('Error loading dynamic content:', error);
      setContent(defaultFallbackContent);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, refreshContent: fetchContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
