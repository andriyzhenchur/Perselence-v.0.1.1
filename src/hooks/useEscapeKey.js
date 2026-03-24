import { useEffect } from 'react';

export const useEscapeKey = (callback, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [callback, enabled]);
};