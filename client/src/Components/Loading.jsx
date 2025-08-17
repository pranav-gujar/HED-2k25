import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loading.css';

const Loading = () => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  
  // Check for slow connection after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      // If we're still loading after 3 seconds, assume slow connection
      setIsSlowConnection(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="loading-container">
      <div className="loading-content">
        <motion.div
          className="loading-spinner"
          animate={{
            scale: [1, 1.2, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="diya-icon">🪔</div>
        </motion.div>
        <motion.div className="loading-messages">
          <motion.p 
            className="loading-text"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            Lighting up your experience...
          </motion.p>
          {isSlowConnection && (
            <motion.p 
              className="loading-hint"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Taking longer than usual? Check your connection
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
