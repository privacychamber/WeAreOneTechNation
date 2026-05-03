import { useState, useEffect } from 'react';

export const useTheme = () => {
  const theme = 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Disabled
  };

  return { theme, toggleTheme };
};
