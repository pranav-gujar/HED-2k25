import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PGTLogo from '../assets/PGT.png';
import HEDLogo from '../assets/HED.png';
import '../App.css';

// Throttle function to limit scroll event frequency
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const Navbar = React.memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const scrollTimeout = useRef(null);

  // Memoize scroll handler with useCallback
  const handleScroll = useCallback(throttle(() => {
    const isScrolled = window.scrollY > 50;
    setScrolled(isScrolled);
  }, 100), []);

  // Optimized scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Smooth scroll to top
  const scrollToTop = useCallback((e) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [isHomePage]);

  // Handle section scrolling
  const scrollToSection = useCallback((sectionId, e) => {
    if (!isHomePage) return;
    
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [isHomePage]);

  // Memoized navigation links
  const renderNavLink = useCallback((to, text) => {
    if (isHomePage) {
      return (
        <a 
          href={`#${to}`}
          className="nav-link"
          onClick={(e) => scrollToSection(to, e)}
        >
          {text}
        </a>
      );
    }
    return (
      <RouterLink 
        to={`/#${to}`}
        className="nav-link"
        onClick={scrollToTop}
      >
        {text}
      </RouterLink>
    );
  }, [isHomePage, scrollToSection, scrollToTop]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Left side - PGT Logo */}
      <div className="logo-container">
        <RouterLink to="/" onClick={scrollToTop} aria-label="Go to Home">
          <img 
            src={PGTLogo} 
            alt="PGT Logo" 
            className="logo" 
            width="120"
            height="40"
            loading="lazy" 
            decoding="async"
          />
        </RouterLink>
      </div>

      {/* Center - Navigation Links */}
      <div className="nav-links">
        {renderNavLink('home', 'Home')}
        <RouterLink 
          to="/contest" 
          className={`nav-link ${location.pathname === '/contest' ? 'active' : ''}`}
          aria-current={location.pathname === '/contest' ? 'page' : undefined}
        >
          Events
        </RouterLink>
      </div>

      {/* Right side - HED Logo */}
      <div className="logo-container">
        <a 
          href="https://www.hedindia.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hed-logo-link"
          aria-label="Visit HED India (opens in new tab)"
        >
          <img 
            src={HEDLogo} 
            alt="HED Logo" 
            className="logo" 
            width="120"
            height="40"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
