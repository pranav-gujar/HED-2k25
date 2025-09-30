import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const journey = [
  {
    year: '2019',
    title: 'HED 1.0 - The Spark',
    description: 'Started the Happy Eco Diwali initiative as a small awareness campaign in school. Focused mainly on spreading the idea of celebrating Diwali with less crackers and more care for the environment.'
  },
  {
    year: '2020',
    title: 'HED 2.0 - Growing Voices',
    description: 'The campaign slowly grew, reaching nearby towns and schools through digital posters and word of mouth. Introduced simple activities like eco-friendly rangoli and diya making awareness.'
  },
  {
    year: '2021',
    title: 'HED 3.0 - Digital Awareness',
    description: 'Shifted focus to online campaigns due to the pandemic. Created posts and small videos on social media to spread the message of an eco-friendly Diwali. Engagement started increasing among students and youth.'
  },
  {
    year: '2022',
    title: 'HED 4.0 - Building Identity',
    description: 'The campaign became more structured under PGT Global Network. Created a dedicated drive during Diwali week with online content, contests, and small collaborations, making HED a recognized initiative in student circles.'
  },
  {
    year: '2023',
    title: 'HED 5.0 - Steady Progress',
    description: 'Continued spreading eco-friendly Diwali awareness mainly online. While participants were few, the campaign kept consistency and built a strong foundation for future impact.'
  },
  {
    year: '2024',
    title: 'HED 6.0 - Innovation Contest',
    description: 'Organized the first-ever online Innovation Ideas Contest under HED. Students submitted creative ideas for celebrating Diwali in sustainable ways. This marked a turning point, bringing a more engaging and interactive format to HED.'
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
          <h3>Looking Ahead – HED 7.0 and Beyond</h3>
          <p>
            HED 7.0 is a new chapter — an international, fully-online edition that turns ideas into action. This year we present four flagship competitions: EcoNova (sustainable startup pitches), Greenathon HackFest (tech-driven prototypes and green hacks), EcoSphere (reels, photography, posters and digital art to spark awareness), and GreenQuest (a Green Olympiad followed by future-focused solution briefs). Winners will receive cash awards, e-certificates, and direct virtual internship opportunities, while top entries will be featured across PGT platforms and compiled in the PGT Handbook. Concluding with tree-plantations and community outreach, HED 7.0 aims to convert youth creativity and knowledge into measurable environmental impact.
          </p>
        </motion.div>
      </motion.div>
      
    </section>
  );
}
