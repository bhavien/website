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

          <motion.div variants={itemVariants}>
            <h1 className="heading-xl">
              Designing <br />
              <span className="text-gradient">Premium</span> Mobile <br />
              <span className="outline-text">Experiences.</span>
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

        <div className="hero-visuals">
          <div className="mockup-container">
             <div className="mockup-frame">
                <div className="mockup-inner">
                  <div className="mockup-screen">
                    <div className="status-bar"></div>
                    <div className="header-sim"></div>
                    <div className="card-sim"></div>
                    <div className="card-sim row"></div>
                    <div className="card-sim row"></div>
                    <div className="fab-sim"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
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
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 4rem;
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

        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }

        .hero-subtext {
          max-width: 500px; 
          margin-bottom: 3rem;
          color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .hero-visuals {
          display: flex;
          justify-content: center;
        }

        .mockup-frame {
          width: 280px;
          height: 560px;
          padding: 10px;
          border-radius: 40px;
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
        }

        .mockup-inner {
          width: 100%;
          height: 100%;
          border-radius: 30px;
          overflow: hidden;
          background: #000;
          position: relative;
        }

        .mockup-screen {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .status-bar { height: 10px; width: 50px; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 10px; }
        .header-sim { height: 140px; width: 100%; background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%); border-radius: 16px; opacity: 0.7; }
        .card-sim { height: 35px; width: 100%; background: rgba(255,255,255,0.05); border-radius: 10px; }
        .card-sim.row { height: 50px; display: flex; gap: 8px; }
        .fab-sim { position: absolute; bottom: 20px; right: 20px; width: 40px; height: 40px; background: var(--accent-primary); border-radius: 50%; }

        @media (max-width: 1100px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-visuals { margin-top: 3rem; }
          .mockup-frame { width: 240px; height: 480px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
