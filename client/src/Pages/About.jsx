import React from 'react';
import { motion } from 'framer-motion';
import SplineScene from '../Components/SplineScene';
import './About.css';

const About = () => {
  const guidelines = {
    submission: {
      title: "What to Submit",
      items: [
        "High-resolution images (minimum 2000px on the longest side, JPG/PNG)",
        "Original work only (no watermarks or signatures)",
        "Short description (max 150 words) about your submission",
        "Contact information (name, email, phone number)",
        "Social media handles (optional, for credit)"
      ]
    },
    dos: {
      title: "Dos",
      items: [
        "Ensure your submission aligns with the contest theme",
        "Submit before the deadline",
        "Keep a high-resolution copy of your work",
        "Follow all contest rules and guidelines",
        "Respect intellectual property rights"
      ]
    },
    donts: {
      title: "Don'ts",
      items: [
        "Don't submit previously published work",
        "No offensive or inappropriate content",
        "Don't include watermarks or signatures",
        "No AI-generated or AI-assisted work",
        "Don't submit multiple entries"
      ]
    }
  };

  const timeline = [
    {
      date: "October 1, 2025",
      title: "Events Launch",
      description: "Registration period begins"
    },
    {
      date: "November 25, 2022",
      title: "Registration Close",
      description: "Registration period ends"
    },
    {
      date: "November 26, 2025",
      title: "Round 1 Starts",
      description: "Round 1 starts for all events"
    },
    {
      date: "November 30, 2025",
      title: "Round 1 Ends",
      description: "Round 1 ends for all events"
    },
    {
      date: "December 01, 2025",
      title: "Round 2 Starts",
      description: "Round 2 starts for all events for the shortlisted teams/candidates"
    },
    {
      date: "December 05, 2025",
      title: "Round 2 Ends",
      description: "Round 2 ends"
    },
    {
      date: "December 06, 2025",
      title: "Final Judging Period",
      description: "Final Evaluation of Round 2 teams/candidates"
    },
    {
      date: "December 15, 2025",
      title: "Winners Announcement",
      description: "All winners will be announced and notified"
    }
  ];

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
        duration: 0.5
      }
    }
  };

  return (
    <div className="about-container">
      {/* Spline Background */}
      <div className="spline-background">
        <SplineScene 
          src="https://my.spline.design/embers-aZH127I9aSelhR9OkfbagBr0/"
          className="spline-iframe"
        />
      </div>

      <div className="about-content">
        <motion.div 
          className="about-section"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* <motion.h1 variants={itemVariants} className="about-title">
            Contest Guidelines & Timeline
          </motion.h1> */}
          
          {/* Guidelines Section */}
          {/* <motion.section variants={itemVariants} className="guidelines-section">
            <h2> Guidelines</h2>
            
            <div className="guidelines-grid">
              <motion.div 
                className="guideline-card"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3>{guidelines.submission.title}</h3>
                <ul>
                  {guidelines.submission.items.map((item, index) => (
                    <li key={`submission-${index}`}>{item}</li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="guideline-card"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3>{guidelines.dos.title}</h3>
                <ul>
                  {guidelines.dos.items.map((item, index) => (
                    <li key={`dos-${index}`}>{item}</li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="guideline-card"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3>{guidelines.donts.title}</h3>
                <ul>
                  {guidelines.donts.items.map((item, index) => (
                    <li key={`donts-${index}`}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.section> */}

          {/* Timeline Section */}
          <motion.section variants={itemVariants} className="timeline-section">
            <h2> Timeline</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div 
                  key={`timeline-${index}`}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p className="timeline-date">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
