import { useState, useEffect } from 'react';

/**
 * Custom hook to detect dark mode preference
 * @returns {[boolean, function]} Current dark mode state and setter function
 */
export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if dark mode preference exists in localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update localStorage and DOM when dark mode changes
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

/**
 * Custom hook to detect scroll position
 * @returns {number} Current scroll Y position
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

/**
 * Custom hook to detect if element is in viewport
 * @param {React.RefObject} ref - Reference to element
 * @param {string} threshold - Intersection threshold
 * @returns {boolean} Whether element is in viewport
 */
export const useInView = (ref, threshold = '0px') => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
};
