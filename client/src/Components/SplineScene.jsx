import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SplineScene = ({ src, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer to load iframe when it's about to be visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '200px', // Start loading when within 200px of viewport
        threshold: 0.01
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Unload iframe when not visible to save resources
  useEffect(() => {
    if (!isVisible && iframeRef.current) {
      const iframe = iframeRef.current.querySelector('iframe');
      if (iframe) {
        iframe.src = '';
      }
    }
  }, [isVisible]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={iframeRef}
      className={`spline-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {isVisible && (
        <>
          <iframe
            key={src}
            src={src}
            title="3D Spline Scene"
            frameBorder="0"
            loading="lazy"
            importance="low"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
            onLoad={handleLoad}
          />
        </>
      )}
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '14px',
        }}>
          Loading 3D scene...
        </div>
      )}
    </div>
  );
};

export default React.memo(SplineScene);
