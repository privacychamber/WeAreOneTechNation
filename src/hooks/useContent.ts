import { useState, useEffect } from 'react';

export const useContent = () => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('./api/get_content.php');
        const result = await response.json();
        if (result.status === 'success') {
          setContent(result.data);
        }
      } catch (error) {
        console.error('Error loading dynamic content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading };
};
