import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const journey = [
  {
    year: '2018',
    title: 'HED 1.0 - The Beginning',
    description: 'Launched the first Happy Eco Diwali campaign with a focus on reducing firecracker pollution. Organized awareness drives in 10 cities, reaching over 50,000 people with the message of celebrating a cleaner, greener Diwali.'
  },
  {
    year: '2019',
    title: 'HED 2.0 - Community Engagement',
    description: 'Expanded to 25 cities with community workshops on making eco-friendly diyas and decorations. Partnered with local artisans to promote sustainable products, reducing plastic waste by 40% during the festival season.'
  },
  {
    year: '2020',
    title: 'HED 3.0 - Digital Transformation',
    description: 'Pivoted to virtual celebrations during the pandemic. Launched an online marketplace for eco-friendly products and conducted webinars on sustainable living. Reached over 1 million people through digital campaigns.'
  },
  {
    year: '2021',
    title: 'HED 4.0 - Corporate Partnerships',
    description: 'Forged partnerships with major corporations to promote eco-conscious celebrations. Introduced the "Green Diwali Challenge" that engaged over 500,000 participants in sustainable practices.'
  },
  {
    year: '2022',
    title: 'HED 5.0 - Policy Advocacy',
    description: 'Successfully advocated for stricter regulations on firecracker usage in 5 major cities. Launched the "Million Green Diyas" initiative, distributing solar-powered diyas to promote renewable energy use.'
  },
  {
    year: '2023',
    title: 'HED 6.0 - Global Movement',
    description: 'Expanded internationally to 5 countries. Launched the "Eco-Diwali Pledge" campaign, engaging celebrities and influencers to promote sustainable celebrations. Achieved a 60% reduction in firecracker-related pollution in target cities.'
  }
];

export default function Home() {
  return (
    <section className="Home-section">
      <motion.div 
        className="Home-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="Home-title"
        >
          Our 6-Year Journey: HED 1.0 to 6.0
        </motion.h2>
        
        <motion.p 
          className="Home-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          What began as a small initiative to promote eco-friendly Diwali celebrations has grown into a nationwide movement. Over the past six years, Happy Eco Diwali has transformed the way millions celebrate the festival of lights, combining tradition with sustainability.
        </motion.p>

        <div className="journey-timeline">
          {journey.map((item, index) => (
            <motion.div 
              key={item.year}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="Home-outro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3>Looking Ahead</h3>
          <p>
            As we celebrate our 6th anniversary, we remain committed to our mission of promoting sustainable celebrations. 
            Our goal is to make eco-friendly Diwali the norm, not the exception, and we're excited to have you join us on this journey.
          </p>
        </motion.div>
      </motion.div>
      
    </section>
  );
}
