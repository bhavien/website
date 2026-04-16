import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import MobileNav from './components/MobileNav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import SectionReveal from './components/SectionReveal';
import TopBanner from './components/TopBanner';
import GameShowcase from './components/GameShowcase';

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
      
      <TopBanner />
      <Navbar />
      <MobileNav />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GameShowcase />
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
