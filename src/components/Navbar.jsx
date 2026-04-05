import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Zap size={18} />
          </div>
          <span className="logo-text">Bhavin<span className="text-gradient"> Solanki</span></span>
        </a>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#skills">Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <Magnetic>
            <a 
              href="#contact" 
              className="btn-premium primary" 
              style={{ padding: '8px 20px', fontSize: '0.8rem', borderRadius: '10px' }}
            >
              Let's Talk
            </a>
          </Magnetic>
        </div>
      </div>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: 0.3s ease;
          background: transparent;
        }

        .navbar-wrapper.scrolled {
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          height: 70px;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          background: var(--accent-primary);
          color: var(--bg-primary);
          padding: 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-size: 1.1rem;
          font-weight: 800;
          font-family: 'Outfit';
          color: #fff;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: var(--accent-primary);
        }

        @media (max-width: 1024px) {
           .nav-links { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
