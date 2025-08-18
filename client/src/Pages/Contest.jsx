import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contest.css';
import SplineScene from '../Components/SplineScene';
import Footer from '../Components/Footer';
import About from './About';
import Gallery from './Gallery';
import ScrollToTop from '../Components/ScrollToTop';
import ParticipateButton from '../Components/ParticipateButton';

const Contest = () => {
  const themes = [
    {
      title: "Eco-Friendly Diwali",
      description: "Showcase how you celebrate Diwali in an environmentally conscious way. Highlight sustainable practices, upcycled decorations, or innovative eco-friendly solutions.",
      icon: "🌱"
    },
    {
      title: "Traditional with a Twist",
      description: "Reimagine traditional Diwali celebrations with a modern, sustainable approach. Blend cultural heritage with eco-conscious practices.",
      icon: "✨"
    },
    {
      title: "Community Impact",
      description: "Demonstrate how your Diwali celebrations positively impact your community and environment. Showcase group initiatives or neighborhood projects.",
      icon: "👥"
    }
  ];

  const prize = {
    title: "🏆 Grand Prize",
    benefits: [
      "Featured on our official social media",
      "Inclusion in the PGT Handbook",
      "Special Eco-title certificate"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="contest-container">
      {/* Optimized Spline background with intersection observer */}
      <div className="spline-background">
        <SplineScene 
          src="https://my.spline.design/embers-aZH127I9aSelhR9OkfbagBr0/"
          className="spline-iframe"
        />
      </div>

      <div className="contest-content">
        <motion.div
          className="contest-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Eco-Diwali Contest 2024</h1>
          <p className="subtitle">Show us your most creative and sustainable Diwali celebrations!</p>
          
          <div className="deadline-box">
            <h3>⏰ Important Dates</h3>
            <p className="deadline">Last date to participate: November 1, 2024</p>
            <p className="note">Result announcement: November 3, 2024</p>
          </div>
        </motion.div>

        <motion.div 
          className="themes-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>Submission Themes</h2>
          <motion.div 
            className="themes-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {themes.map((theme, index) => (
              <motion.div 
                key={index} 
                className="theme-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(255, 215, 0, 0.2)"
                }}
              >
                <div className="theme-icon">{theme.icon}</div>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="rewards-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <h2>Amazing Prizes</h2>
          <div className="single-prize-container">
            <motion.div 
              className="prize-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              whileInView={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                y: -5
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
            >
              <div className="prize-glow"></div>
              <div className="prize-title">{prize.title}</div>
              <ul className="prize-benefits">
                {prize.benefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        delay: 0.2 + (i * 0.1),
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="benefit-icon">✓</span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="prize-ribbon"
                initial={{ rotate: -5, y: -20, opacity: 0 }}
                whileInView={{ 
                  rotate: -5, 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200
                  }
                }}
              >
                Special Recognition
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="submission-guidelines"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
          <h2>Submission Guidelines</h2>
          <div className="guidelines-grid">
            <motion.div 
              className="guideline-card"
              whileHover={{ scale: 1.03 }}
            >
              <h3>📸 Photo Submissions</h3>
              <ul>
                <li>High resolution (min 2000px on the longest side)</li>
                <li>JPEG or PNG format</li>
                <li>Max file size: 10MB</li>
              </ul>
            </motion.div>
            <motion.div 
              className="guideline-card"
              whileHover={{ scale: 1.03 }}
            >
              <h3>🎥 Video Submissions</h3>
              <ul>
                <li>Max duration: 3 minutes</li>
                <li>MP4 or MOV format</li>
                <li>Max file size: 100MB</li>
              </ul>
            </motion.div>
            <motion.div 
              className="guideline-card"
              whileHover={{ scale: 1.03 }}
            >
              <h3>📝 Written Submissions</h3>
              <ul>
                <li>Max 1000 words</li>
                <li>PDF or DOCX format</li>
                <li>Include relevant images if applicable</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* How to Participate Section */}
        <motion.div 
          className="participation-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
          <h2>How to Participate</h2>
          <div className="participation-steps">
            <motion.div 
              className="step-card"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 215, 0, 0.1)" }}
            >
              <div className="step-number">1</div>
              <h3>Read the Guidelines</h3>
              <p>Review all submission guidelines and requirements above to ensure your entry meets our criteria.</p>
            </motion.div>
            
            <motion.div 
              className="step-card"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 215, 0, 0.1)" }}
            >
              <div className="step-number">2</div>
              <h3>Prepare Your Entry</h3>
              <p>Create your submission following the theme requirements and format specifications.</p>
            </motion.div>
            
            <motion.div 
              className="step-card"
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 215, 0, 0.1)" }}
            >
              <div className="step-number">3</div>
              <h3>Submit via Google Form</h3>
              <p>Click the button below to access our submission form and upload your entry.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6 }}
        >
          <h2>Ready to Participate?</h2>
          <p>Submit your entry before November 5, 2023 for a chance to win amazing prizes and be featured in our campaign!</p>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5cwDIBskA54X9djZemnynOm1CLAnbdm9iVHEjcCHFBAZYtw/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
            className="submit-button"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 215, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Your Entry Now
          </motion.a>
          <p className="form-note">You'll be redirected to our secure Google Form for submission</p>
        </motion.div>
      </div>
      <About/>
      <Gallery/>
      <Footer />
      <ScrollToTop />
      <ParticipateButton isVisible={true} />
    </div>
  );
};

export default Contest;
