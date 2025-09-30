import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';
import HEDLogo from '../assets/HED.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media icons
  const socialMedia = [
    // { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/people/Pranav-Gujar/pfbid0HYUpa7drv9hn2VxZKDuuQDKu9EzMbk1fk1TVi9itnZTygZx6uzr3RNwDqbpUdBzTl/' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/pgt_global_network/' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/pgt-global-network/posts/?feedView=all' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@PGTGlobalNetwork' },
  ];

  // Quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/contest' },
  ];

  // Prizes informations
  const prizes = [
    { icon: 'fas fa-star', text: 'Win Big with Cash Prizes ' },
    { icon: 'fas fa-book', text: 'Virtual Internships @ PGT Global Network' },
    { icon: 'fas fa-award', text: 'Certificates, Kit and more' },
  ];

  // Legal links
  const legalLinks = [
    { name: 'Privacy Policy', url: 'https://www.pgtglobalnetwork.com' },
    { name: 'Terms & Conditions', url: 'https://www.pgtglobalnetwork.com' },
    // { name: 'Cookie Policy', url: 'https://pgtnetworks.com/cookies' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Description */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-logo">
            <img 
              src={HEDLogo}  
              alt="HED Celebration Logo" 
              className="footer-logo-img"
              loading="lazy"
            />
            <span>HED 7.0</span>
          </div>
          <p className="footer-description">
            Celebrating sustainable living and environmental consciousness through art and innovation.
          </p>
          <div className="footer-social">
            {socialMedia.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
                className="social-icon"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="footer-heading">Prizes</h3>
          <ul className="footer-contact">
            {prizes.map((prize, index) => (
              <li key={index} className="contact-item">
                <i className={prize.icon}></i>
                <span>{prize.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        {/* <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="footer-heading">Newsletter</h3>
          <p className="newsletter-text">Subscribe to our newsletter for updates and announcements.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              required 
            />
            <button type="submit" className="newsletter-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </motion.div> */}
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} HED 7.0. All rights reserved.
            </p>
            <div className="legal-links">
              {legalLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="legal-link"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && <span className="divider">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
