import React from 'react';
import { Link } from 'react-scroll';
import './LandingPage.css';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import SplineScene from '../Components/SplineScene';
import Sponsors from '../Components/Sponsors';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';


// Array of positions and sizes for diyas
const diyaPositions = [
  // Top left section - adjusted for mobile
  { top: '5%', left: '5%', scale: 1.2, delay: 0, mobileScale: 1.5 },
  { top: '12%', left: '20%', scale: 1, delay: 0.5, mobileScale: 1.3 },
  
  // Top right section - adjusted for mobile
  { top: '8%', right: '5%', scale: 1.3, delay: 0.3, mobileScale: 1.6 },
  { top: '15%', right: '20%', scale: 0.9, delay: 0.7, mobileScale: 1.2 },
  
  // Middle left - adjusted for mobile
  { top: '35%', left: '2%', scale: 1.1, delay: 0.4, mobileScale: 1.4 },
  { top: '50%', left: '10%', scale: 0.9, delay: 0.1, mobileScale: 1.2 },
  
  // Middle right - adjusted for mobile
  { top: '45%', right: '5%', scale: 1.2, delay: 0.6, mobileScale: 1.5 },
  
  // Bottom left - adjusted for mobile
  { bottom: '15%', left: '5%', scale: 1, delay: 0.5, mobileScale: 1.3 },
  
  // Bottom right - adjusted for mobile
  { bottom: '10%', right: '5%', scale: 1.1, delay: 0.4, mobileScale: 1.4 },
  
  // Center - adjusted for mobile
  { top: '65%', left: '50%', scale: 1.5, delay: 0, mobileScale: 1.8 },
  { top: '25%', left: '50%', scale: 1.2, delay: 0.3, mobileScale: 1.5 },
];

// Floating Diya component with improved mobile support
const FloatingDiya = ({ position }) => {
  const { top, left, right, bottom, scale, delay, mobileScale } = position;
  
  // Get viewport dimensions safely
  const [dimensions, setDimensions] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  // Update dimensions on resize
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = dimensions.width <= 1024;
  const isSmallScreen = dimensions.width <= 480;
  
  // Calculate scale based on screen size
  let finalScale = scale;
  if (isSmallScreen) {
    finalScale = (mobileScale || scale * 1.5);
  } else if (dimensions.width <= 768) {
    finalScale = (mobileScale || scale * 1.2);
  }
  
  // Adjust positions for different screen sizes
  const getPosition = (value, isPercentage = true) => {
    if (!isPercentage) return value;
    
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    
    // Ensure the value is within bounds
    return `${Math.min(95, Math.max(5, num))}%`;
  };
  
  // Don't render if we don't have dimensions yet
  if (dimensions.width === 0) return null;
  
  return (
    <motion.div
      className="diya"
      style={{
        position: 'fixed',
        top: top ? getPosition(top) : 'auto',
        left: left ? getPosition(left) : 'auto',
        right: right ? getPosition(right) : 'auto',
        bottom: bottom ? getPosition(bottom) : 'auto',
        transform: `scale(${finalScale})`,
        zIndex: 1,
        pointerEvents: 'none',
        fontSize: isSmallScreen ? '3rem' : '2.5rem',
        filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.9))',
        willChange: 'transform, opacity',
        WebkitBackfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
      initial={{ y: 0, rotate: 0, opacity: 0.9 }}
      animate={{
        y: [0, -8, 0],
        rotate: [0, 2, -2, 0],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: isSmallScreen ? 3 + Math.random() * 2 : 5 + Math.random() * 3,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      🪔
    </motion.div>
  );
};

// Floating Rangoli component
const FloatingRangoli = () => {
  return (
    <motion.div
      className="rangoli"
      initial={{ scale: 0.8, rotate: 0 }}
      animate={{
        scale: [0.8, 1, 0.8],
        rotate: [0, 180],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
     
     ✨
    </motion.div>
  );
};



export default function LandingPage() {
  return (
    <div className="landing-container">
      {/* Optimized Spline background with intersection observer */}
      <div className="spline-background">
        <SplineScene 
          src="https://my.spline.design/lostorbinthemountains-8gCRWQca9vfqyLrlPRQmVMjs/"
          className="spline-iframe"
          darkness={0.8}
        />
      </div>

      {/* Welcome Section */}
      <section id="home" className="welcome-section">
        <div className="welcome-content">
          {/* Decorative elements */}
          {diyaPositions.map((pos, index) => (
            <FloatingDiya key={index} position={pos} />
          ))}
          <FloatingRangoli />
          
          <motion.div
            className="hero-text"
            style={{ position: 'relative', zIndex: 2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="welcome-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                textShadow: [
                  '0 0 10px rgba(255, 215, 0, 0.5)',
                  '0 0 20px rgba(255, 165, 0, 0.7)',
                  '0 0 30px rgba(255, 100, 0, 0.9)',
                  '0 0 10px rgba(255, 215, 0, 0.5)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 0.7
              }}
            >
              Welcome to PGT's Campaign
            </motion.h1>
            
            <motion.h2 
              className="welcome-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                delay: 1,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              Happy Eco Diwali
            </motion.h2>
            
          </motion.div>
          
          <motion.div 
            className="scroll-indicator"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <p>Scroll Down</p>
          </motion.div>
        </div>
      </section>

      <Home />
      <Sponsors />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
