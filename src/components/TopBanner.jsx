import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

const TopBanner = () => {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="top-banner"
    >
      <div className="banner-content">
        <div className="banner-left">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              y: [0, -2, 2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <Rocket size={18} className="rocket-icon" />
          </motion.div>
          <span className="banner-title">SPACE BRAIN GAMES</span>
        </div>
        
        <div className="banner-center">
            <span className="coming-soon">COMING SOON</span>
            <span className="launch-date">MAY 2026</span>
        </div>

        <div className="banner-right">
          <Sparkles size={16} className="sparkle-icon" />
          <span className="banner-cta">PREPARE FOR LIFT OFF</span>
        </div>
      </div>

      <style>{`
        .top-banner {
          width: 100%;
          background: linear-gradient(90deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          border-bottom: 1px solid rgba(139, 92, 246, 0.3);
          padding: 10px 0;
          position: sticky;
          top: 0;
          z-index: 2000;
          overflow: hidden;
        }

        .top-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(139, 92, 246, 0.1), 
            transparent
          );
          animation: shine 8s infinite linear;
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .banner-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          gap: 20px;
        }

        .banner-left, .banner-right {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .banner-title {
          background: linear-gradient(to right, #fff, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .banner-center {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(139, 92, 246, 0.1);
          padding: 4px 16px;
          border-radius: 100px;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .coming-soon {
          color: #a78bfa;
          font-weight: 800;
          font-size: 0.8rem;
        }

        .launch-date {
          color: #fff;
          font-weight: 700;
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .rocket-icon {
          color: #f87171;
        }

        .sparkle-icon {
          color: #fbbf24;
        }

        .banner-cta {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.7rem;
        }

        @media (max-width: 768px) {
          .banner-right { display: none; }
          .banner-content { justify-content: center; }
        }

        @media (max-width: 480px) {
          .banner-title { display: none; }
          .banner-center { margin: 0 auto; }
        }
      `}</style>
    </motion.div>
  );
};

export default TopBanner;
