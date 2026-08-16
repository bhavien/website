import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import MobileNav from './components/MobileNav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import SectionReveal from './components/SectionReveal';

function App() {
  return (
    <div className="portfolio-app">
      <AnimatedBackground />

      <Navbar />
      <MobileNav />

      <main>
        <Hero />
        <SectionReveal><Stats /></SectionReveal>
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Skills /></SectionReveal>
        <SectionReveal><Experience /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
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
