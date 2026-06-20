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
        title: 'AI & Automation Systems',
        subtitle: 'Intelligence built into your core.',
        description: 'We integrate advanced LLMs and custom automation pipelines into your existing workflows to reduce manual overhead and increase decision-making speed.',
        features: JSON.stringify(['Custom GPT & LLM Integration', 'Automated Content Pipelines', 'Intelligent Customer Support Bots', 'Predictive Analytics Dashboards']),
        icon: 'cpu',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000'
      },
      {
        id: 2,
        title: 'High-Performance Web',
        subtitle: 'Websites that convert at 3x the industry average.',
        description: 'Beyond aesthetics, we build for conversion. Our websites are lightweight, SEO-engineered, and designed with psychological triggers to turn visitors into leads.',
        features: JSON.stringify(['React & Next.js Development', 'Headless CMS Architecture', 'Performance Optimization', 'SEO & Conversion Engineering']),
        icon: 'globe',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        id: 3,
        title: 'Scalable Architecture',
        subtitle: 'Foundations that never break.',
        description: 'Build for today, scale for tomorrow. We design cloud-native infrastructures that handle traffic spikes and complex data loads with ease.',
        features: JSON.stringify(['Cloud Infrastructure (AWS/GCP/Azure)', 'Microservices Architecture', 'Database Optimization', 'Real-time Data Processing']),
        icon: 'layers',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000'
      },
      {
        id: 4,
        title: 'Website Development',
        subtitle: 'High-converting, scalable platforms.',
        description: 'We build end-to-end web applications designed to convert. Our websites are lightweight, SEO-engineered, and designed with psychological triggers to turn visitors into leads.',
        features: JSON.stringify(['React & Next.js Development', 'Headless CMS Architecture', 'Performance Optimization', 'SEO & Conversion Engineering']),
        icon: 'globe',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
      },
      {
        id: 5,
        title: 'Designing',
        subtitle: 'Beautiful, user-centric interfaces.',
        description: 'Modern UX/UI that wows your customers. We design premium brand experiences, from initial wireframes to high-fidelity interactive prototypes.',
        features: JSON.stringify(['UI/UX Design', 'Brand Identity', 'Interactive Prototyping', 'Design Systems']),
        icon: 'layers',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000'
      },
      {
        id: 6,
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
        title: 'Sarahswati Agni',
        category: 'Brand Website',
        metrics: 'Custom Design',
        tags: JSON.stringify(['HTML', 'CSS', 'JavaScript']),
        image_url: '/images/portfolio/sarahswati-agni.jpg'
      },
      {
        id: 2,
        title: 'Katoch Organic Farm',
        category: 'E-Commerce',
        metrics: '100% Organic',
        tags: JSON.stringify(['Next.js', 'React', 'Tailwind CSS', 'Framer']),
        image_url: '/images/portfolio/katoch-organic.jpg'
      },
      {
        id: 3,
        title: 'Make Holidays Memorable',
        category: 'Travel Platform',
        metrics: '500+ Destinations',
        tags: JSON.stringify(['TypeScript', 'React', 'Tour Management']),
        image_url: '/images/portfolio/mhm-travels.jpg'
      },
      {
        id: 4,
        title: 'The Glam House',
        category: 'Beauty & Wellness',
        metrics: 'Premium Care',
        tags: JSON.stringify(['UI/UX', 'Booking System', 'Brand Identity']),
        image_url: '/images/portfolio/glam-house.jpg'
      },
      {
        id: 5,
        title: "Sai Holiday's",
        category: 'Travel Platform',
        metrics: '10,000+ Travelers',
        tags: JSON.stringify(['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion']),
        image_url: '/images/portfolio/sai-holiday.jpg'
      },

      {
        id: 7,
        title: 'Yoga Wellness',
        category: 'Health & Fitness',
        metrics: '5k+ Active Members',
        tags: JSON.stringify(['PHP', 'MySQL', 'Web Application']),
        image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1500'
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
          // Force the updated services and portfolio over the database ones to guarantee the user sees the changes
          const updatedData = {
            ...result.data,
            services: defaultFallbackContent.services,
            portfolio: defaultFallbackContent.portfolio
          };
          setContent(updatedData);
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
