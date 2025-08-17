import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './Sponsors.css';

// Sample sponsor data (replace with actual sponsors)
const sponsors = [
  {
    id: 1,
    name: 'Eco Solutions',
    logo: 'https://dummyimage.com/300x160/4a6f28/ffffff&text=Eco+Solutions',
    description: 'Leading provider of sustainable environmental solutions',
    category: 'Platinum Sponsor'
  },
  {
    id: 2,
    name: 'Green Energy Inc',
    logo: 'https://dummyimage.com/300x160/1e8449/ffffff&text=Green+Energy',
    description: 'Renewable energy solutions for a better tomorrow',
    category: 'Gold Sponsor'
  },
  {
    id: 3,
    name: 'Clean Earth',
    logo: 'https://dummyimage.com/300x160/27ae60/ffffff&text=Clean+Earth',
    description: 'Dedicated to environmental conservation',
    category: 'Silver Sponsor'
  },
  {
    id: 4,
    name: 'EcoTech',
    logo: 'https://dummyimage.com/300x160/2ecc71/ffffff&text=EcoTech',
    description: 'Innovative technology for a sustainable future',
    category: 'Technology Partner'
  },
  {
    id: 5,
    name: 'Green Living',
    logo: 'https://dummyimage.com/300x160/16a085/ffffff&text=Green+Living',
    description: 'Promoting sustainable lifestyle choices',
    category: 'Lifestyle Partner'
  },
  {
    id: 6,
    name: 'Solaris',
    logo: 'https://dummyimage.com/300x160/1abc9c/ffffff&text=Solaris',
    description: 'Harnessing solar energy for a brighter future',
    category: 'Energy Partner'
  }
];

// Duplicate sponsors for infinite effect
const duplicatedSponsors = [...sponsors, ...sponsors];

const Sponsors = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="sponsors-section" ref={containerRef}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Our Valued Sponsors
      </motion.h2>
      
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 0.9, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Thank you to our amazing partners who make this event possible
      </motion.p>

      <div className="sponsors-container">
        <motion.div 
          className="sponsors-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear'
            }
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <motion.div 
              key={`${sponsor.id}-${index}`}
              className="sponsor-card"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}
            >
              <div className="sponsor-badge">{sponsor.category}</div>
              <div className="sponsor-logo-container">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="sponsor-logo"
                  loading="lazy"
                />
              </div>
              <h3 className="sponsor-name">{sponsor.name}</h3>
              <p className="sponsor-description">{sponsor.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
