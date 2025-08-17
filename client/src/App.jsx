import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Loading from './Components/Loading';
import './App.css';

// Lazy load page components
const LandingPage = lazy(() => import('./Pages/LandingPage'));
const Contest = lazy(() => import('./Pages/Contest'));
const About = lazy(() => import('./Pages/About'));
const Gallery = lazy(() => import('./Pages/Gallery'));

// Loading component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Handle loading state
  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Show loading screen while content is loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
    </div>
  );
}
