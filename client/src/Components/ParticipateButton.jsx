import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ParticipateButton = ({ isVisible = true }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/contest'); // Navigate to Events page
  };

  return (
    <motion.a
      href="/events"
      className="participate-button"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '15px',
        zIndex: 999,
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: '#000',
          color: '#ffd700',
          padding: '10px 20px',
          borderRadius: '30px',
          fontWeight: 'bold',
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          border: '2px solid #ffd700',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          top: '70px',
        }}
      >
        <motion.span
          initial={{ backgroundPosition: '0% 50%' }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background: 'linear-gradient(90deg, #ffd700, #ffa500, #ffd700)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          Participate Now!
        </motion.span>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transform: 'translateX(-100%)',
          }}
          animate={{
            transform: ['translateX(-100%)', 'translateX(100%)'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.a>
  );
};

export default ParticipateButton;
