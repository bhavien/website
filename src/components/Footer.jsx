import React from 'react';
import { Heart, Zap, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Zap size={20} />
              </div>
              <span className="footer-logo-text">Bhavin Solanki</span>
            </div>
            <p className="footer-tagline">
              Engineering high-scale Android architectures and modern mobile standards since 2018.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn"><FaGithub size={18} /></a>
              <a href="#" className="footer-social-btn"><FaTwitter size={18} /></a>
              <a href="https://www.linkedin.com/in/bhavin-solanki-20896115b" target="_blank" rel="noopener noreferrer" className="footer-social-btn"><FaLinkedin size={18} /></a>
              <a href="https://www.youtube.com/channel/UC7M4Bx9GiLYsKbcLJ20jeiQ" target="_blank" className="footer-social-btn"><FaYoutube size={18} /></a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="link-column">
               <h4>Navigation</h4>
               <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#projects">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
               </ul>
            </div>

            <div className="link-column">
               <h4>Contact</h4>
               <ul className="contact-info">
                  <li><Mail size={14} /> bhavinsolanki0815@gmail.com</li>
                  <li><MapPin size={14} /> Surat, Gujarat India</li>
               </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Bhavin Solanki. All rights reserved.</p>
          <div className="designed-by">
            Built with <Heart size={12} style={{ color: '#ff007f' }} /> & <Zap size={12} style={{ color: 'var(--accent-primary)' }} />
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 80px 0 40px;
          border-top: 1px solid var(--glass-border);
          background: #050505;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 60px;
        }

        .footer-logo {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 1.5rem;
        }

        .footer-logo-icon {
          background: var(--accent-primary);
          color: var(--bg-primary);
          padding: 6px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }

        .footer-logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          font-family: 'Outfit';
          color: #fff;
        }

        .footer-tagline {
          max-width: 320px;
          line-height: 1.6;
          color: var(--text-dim);
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .footer-socials {
          display: flex; gap: 0.75rem;
        }

        .footer-social-btn {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-dim);
          transition: 0.2s;
        }

        .footer-social-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }

        .footer-links-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;
        }

        .link-column h4 {
          color: #fff; margin-bottom: 1.5rem;
          font-size: 0.8rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.1em;
        }

        .link-column ul {
          display: flex; flex-direction: column; gap: 1rem;
        }

        .link-column a, .contact-info li {
          color: var(--text-dim);
          font-size: 0.9rem;
          transition: 0.2s;
        }

        .link-column a:hover {
          color: var(--accent-primary);
        }

        .contact-info li {
          display: flex; align-items: center; gap: 10px;
        }

        .footer-bottom {
          border-top: 1px solid var(--glass-border);
          padding-top: 30px;
          display: flex; justify-content: space-between; align-items: center;
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .footer-main { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
