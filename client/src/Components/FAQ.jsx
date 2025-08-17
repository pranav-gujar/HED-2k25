import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

// FAQ data
const faqItems = [
  {
    id: 1,
    question: 'Who can participate in the contest?',
    answer: 'The contest is open to all individuals aged 18 and above. Both amateur and professional photographers/videographers are welcome to participate.'
  },
  {
    id: 2,
    question: 'What are the submission guidelines?',
    answer: 'Submissions should be in JPG/PNG format for photos and MP4 for videos, with a maximum file size of 20MB. All entries must be original work and should not contain any watermarks or signatures.'
  },
  {
    id: 3,
    question: 'Is there an entry fee?',
    answer: 'No, participation in the contest is completely free of charge. There are no hidden fees or charges.'
  },
  {
    id: 4,
    question: 'How will the winners be selected?',
    answer: 'Entries will be judged by our panel of experts based on creativity, originality, and adherence to the theme. The decision of the judges will be final and binding.'
  },
  {
    id: 5,
    question: 'When will the results be announced?',
    answer: 'The winners will be announced on our website and social media channels on October 30, 2025. All participants will be notified via email.'
  },
  {
    id: 6,
    question: 'What are the prizes?',
    answer: 'Prizes include cash awards, certificates, and opportunities to showcase your work in our annual exhibition. Please check the Contest page for detailed prize information.'
  },
  {
    id: 7,
    question: 'Can I submit multiple entries?',
    answer: 'Yes, you can submit up to 3 entries per category. However, each entry must be unique and submitted separately.'
  },
  {
    id: 8,
    question: 'How will my personal information be used?',
    answer: 'Your personal information will only be used for the purpose of the contest and will not be shared with third parties without your consent. Please review our Privacy Policy for more details.'
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
          Find answers to common questions about the contest and participation
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
          <p>Still have questions? Contact us at <a href="mailto:@pgt_global_network">@pgt_global_network</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
