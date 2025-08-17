import React from 'react';
import { Link } from 'react-scroll';
import './LandingPage.css';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import SplineScene from '../Components/SplineScene';
import Sponsors from '../Components/Sponsors';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';


// Array of positions and sizes for diyas
const diyaPositions = [
  // Top left section
  { top: '10%', left: '10%', scale: 0.8, delay: 0 },
  { top: '15%', left: '20%', scale: 0.6, delay: 0.5 },
  { top: '8%', left: '30%', scale: 0.7, delay: 0.2 },
  
  // Top right section
  { top: '12%', right: '15%', scale: 0.9, delay: 0.3 },
  { top: '18%', right: '25%', scale: 0.6, delay: 0.7 },
  
  // Middle left
  { top: '40%', left: '5%', scale: 0.8, delay: 0.4 },
  { top: '50%', left: '15%', scale: 0.5, delay: 0.1 },
  
  // Middle right
  { top: '45%', right: '10%', scale: 0.7, delay: 0.6 },
  { top: '55%', right: '20%', scale: 0.9, delay: 0.2 },
  
  // Bottom left
  { bottom: '15%', left: '10%', scale: 0.6, delay: 0.5 },
  { bottom: '20%', left: '25%', scale: 0.7, delay: 0.3 },
  
  // Bottom right
  { bottom: '10%', right: '15%', scale: 0.8, delay: 0.4 },
  { bottom: '25%', right: '5%', scale: 0.6, delay: 0.1 },
  
  // Center
  { top: '60%', left: '50%', scale: 1, delay: 0 },
  { top: '30%', left: '50%', scale: 0.7, delay: 0.3 },
];

// Floating Diya component
const FloatingDiya = ({ position }) => {
  const { top, left, right, bottom, scale, delay } = position;
  
  return (
    <motion.div
      className="diya"
      style={{
        position: 'fixed',
        top: top ? top : 'auto',
        left: left ? left : 'auto',
        right: right ? right : 'auto',
        bottom: bottom ? bottom : 'auto',
        transform: `scale(${scale})`,
        zIndex: 1,
        pointerEvents: 'none',
      }}
      initial={{ y: 0, rotate: 0, opacity: 0.8 }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 6 + Math.random() * 4, // Random duration between 6-10s
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
            
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cta-button"
            >
              Explore More
            </Link>
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
    </div>
  );
}
