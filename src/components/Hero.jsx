import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.div
            variants={itemVariants}
            className="hero-badge"
          >
            <ShieldCheck size={16} /> 
            <span>SENIOR ANDROID ARCHITECT</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hero-teaser"
          >
            <span className="teaser-dot"></span>
            NEW MISSION: <span className="highlight">SPACE BRAIN GAMES</span> COMING MAY 2026
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="heading-xl">
              Designing <br />
              <span className="text-gradient">Premium</span> Mobile
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg hero-subtext">
            Crafting high-performance Android applications with focus on architecture, scalability, and pixel-perfect UI.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <Magnetic>
              <a 
                href="#projects" 
                className="btn-premium primary"
              >
                View Projects <ArrowRight size={20} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>


      </div>

      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
        }
        
        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          margin-bottom: 2rem;
          color: var(--accent-primary);
          font-size: 0.8rem;
          font-weight: 700;
        }

        .hero-teaser {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--text-dim);
          margin-bottom: 2.5rem;
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
        }

        .teaser-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-primary);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .hero-teaser .highlight {
          color: #fff;
        }

        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }

        .hero-subtext {
          max-width: 650px; 
          margin-bottom: 3rem;
          color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        @media (max-width: 1100px) {
          .hero-section { padding-top: 150px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
