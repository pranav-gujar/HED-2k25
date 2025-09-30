import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

// FAQ data
const faqItems = [
  {
    id: 1,
    question: 'Who can participate in HED 7.0 events?',
    answer: 'All college students across India are eligible to participate. Both technical and non-technical backgrounds are welcome depending on the event category.'
  },
  {
    id: 2,
    question: 'Are the events online or offline?',
    answer: 'All four events of HED 7.0 will be conducted completely online. Participants can join from anywhere.'
  },
  {
    id: 3,
    question: 'Is there a registration fee?',
    answer: 'Yes, each event has a nominal registration fee per entry or per team (symbolizing the 7th edition of HED).'
  },
  {
    id: 4,
    question: 'Can I participate in more than one event?',
    answer: 'Yes, participants are free to register for multiple events. Each event requires a separate registration and fee.'
  },
  {
    id: 5,
    question: 'Can team participation be done?',
    answer: 'Yes, depending on the event. EcoNova and Greenathon HackFest allow team entries (up to 4 members). EcoSphere and GreenQuest are solo events.'
  },
  {
    id: 6,
    question: 'What are the prizes?',
    answer: 'Winners will receive exciting cash prizes, certificates, kits, and direct virtual internship opportunities with PGT Global Network.'
  },
  {
    id: 7,
    question: 'How will the evaluation be done?',
    answer: 'Submissions will be judged by an expert panel based on creativity, innovation, feasibility, and alignment with sustainability. Round-wise shortlisting details are given on the event pages.'
  },
  {
    id: 8,
    question: 'When will the results be announced?',
    answer: 'Results will be announced after the completion of all rounds for each event, and updates will be shared via email, WhatsApp groups, and PGT Global Network’s official social media handles.'
  },
  {
    id: 9,
    question: 'Will participants get certificates?',
    answer: 'Yes, all participants will receive e-certificates, and winners will receive special recognition certificates.'
  },
  {
    id: 10,
    question: 'Who should I contact for queries?',
    answer: 'For any queries, participants can reach out to the event coordinators mentioned in the contact section of the posters and Event Registration pages.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find answers to common questions about the events and participation
        </motion.p>

        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`faq-item ${openId === item.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleItem(item.id)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <motion.div 
                  className="faq-icon"
                  animate={{ rotate: openId === item.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ 
                      height: 'auto',
                      opacity: 1,
                      marginTop: '1rem',
                    }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="faq-divider"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="faq-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Still have questions? Contact us at <a href="mailto:office@pgtglobalnetwork.com">office@pgtglobalnetwork.com</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
