import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import FeatureSpotlight from './components/FeatureSpotlight';
import Stats from './components/Stats';
import MobileNav from './components/MobileNav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import SectionReveal from './components/SectionReveal';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial load sequence
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-app">
      <AnimatedBackground />
      
      <Navbar />
      <MobileNav />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FeatureSpotlight />
        <Stats />
        <Contact />
      </main>

      <Footer />

      <style>{`
        * {
           scroll-behavior: smooth;
        }

        main > div {
           overflow: visible;
        }
        
        .portfolio-app {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default App;
