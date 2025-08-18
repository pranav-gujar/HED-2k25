import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the scroll handler with useCallback
  const handleScroll = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  }, []);

  // Smooth scroll to top with better cross-browser support
  const scrollToTop = useCallback((e) => {
    e.preventDefault();
    
    // Get the current scroll position
    const startPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // If already at the top, do nothing
    if (startPosition === 0) return;
    
    // Define the scroll step function
    const scrollStep = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Ease in out function
      const easeInOutCubic = (t) => {
        return t < 0.5 
          ? 4 * t * t * t 
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      
      // Calculate progress (0 to 1)
      const progressRatio = Math.min(progress / 500, 1);
      const easeProgress = easeInOutCubic(progressRatio);
      
      // Apply the scroll
      window.scrollTo(0, startPosition * (1 - easeProgress));
      
      // Continue animation if not complete
      if (progress < 500) {
        window.requestAnimationFrame(scrollStep);
      }
    };
    
    let startTime = null;
    window.requestAnimationFrame(scrollStep);
  }, []);

  // Throttle scroll event for better performance
  useEffect(() => {
    let isMounted = true;
    let timeoutId = null;

    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          if (isMounted) {
            handleScroll();
            timeoutId = null;
          }
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 400, damping: 17 }
          }}
          exit={{ 
            opacity: 0, 
            y: 20,
            transition: { duration: 0.2 }
          }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' 
          }}
          whileTap={{ 
            scale: 0.95 
          }}
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
