import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to #hash targets across route changes, otherwise resets to top.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const timer = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
