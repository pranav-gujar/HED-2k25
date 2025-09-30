import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

// Example gallery images (replace with your own)
const galleryItems = [
  { id: 1, src: 'https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202210/diya-decoration-ideas-at-home-for-diwali/simple-diya-decoration-ideas.jpg', alt: 'Celebration 1', title: 'Diya Decoration' },
  { id: 2, src: 'https://www.ankurlighting.com/cdn/shop/articles/diwali-lighting-ideas-for-2020-ankur-lighting.jpg?v=1695131144&width=2048', alt: 'Celebration 2', title: 'Diwali lighting ideas' },
  { id: 3, src: 'https://thefederal.com/file/2019/10/Greencrackers.jpg', alt: 'Celebration 3', title: 'Eco-friendly crackers' },
  { id: 4, src: 'https://thumbs.dreamstime.com/b/colorful-platter-traditional-indian-sweets-diwali-celebration-adorned-marigold-petals-lit-diyas-festive-336909275.jpg', alt: 'Celebration 4', title: 'Sweets Recipes' },
  { id: 5, src: 'https://images.bhaskarassets.com/web2images/521/2024/10/29/04-2_1730197307.jpg', alt: 'Celebration 5', title: 'Diwali Puja' },
  { id: 6, src: 'https://img.freepik.com/premium-photo/diwali-party-banner-with-lively-pictures-dance-00408-00_883586-103916.jpg', alt: 'Celebration 6', title: 'Diwali Dance' },
];

const Gallery = () => {
  const [items, setItems] = useState([...galleryItems, ...galleryItems]); // duplicate for infinite scroll
  const scrollRef = useRef(null);

  // Infinite horizontal scroll loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="gallery-container">
      <motion.h1 
        className="gallery-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h1>
      
      <motion.p 
        className="gallery-subtitle"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Relive the magic of HED
      </motion.p>

      <div className="gallery-scroll" ref={scrollRef}>
        {items.map((item, index) => (
          <motion.div 
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={item.src} alt={item.alt} className="gallery-thumbnail" />
            <div className="gallery-item-overlay">
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
