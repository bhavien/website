import React from 'react';
import { User, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="section-header">
           <div className="section-badge">
              <User size={16} /> Identity & Vision
           </div>
           <h2 className="heading-md">The Architect <span className="text-gradient">Behind the Code</span></h2>
        </div>

        <div className="about-grid">
          
          <div className="about-main glass-panel">
             <div className="about-icon-wrapper">
                <Award size={24} />
             </div>
             
             <h3 className="about-title">4+ Years of Professional Mastery</h3>
             
             <div className="about-text">
               <p>
                  I am <span className="highlight-white">Bhavin Solanki</span>, a Senior Android Developer with 4+ years of expertise. I specialize in building high-performance mobile applications that reach thousands of users worldwide. 
               </p>
               <p>
                  My journey is driven by a passion for clean architecture, seamless user experiences, and the latest mobile innovations. From conceptualization to deployment, I ensure every line of code serves a purpose.
               </p>
             </div>

             <div className="about-signature">
                <div className="sig-text">Bhavin Solanki</div>
             </div>
          </div>

          <div className="about-side">
            <div className="stat-row">
              <div className="stat-card glass-panel">
                 <div className="stat-num text-gradient">10+</div>
                 <div className="stat-label">Projects Shipped</div>
              </div>

              <div className="stat-card glass-panel">
                 <div className="stat-num text-gradient">4k+</div>
                 <div className="stat-label">Global Downloads</div>
              </div>
            </div>

            <div className="vision-card glass-panel">
               <Sparkles size={28} className="vision-icon" />
               <div className="vision-content">
                  <h4>What Drives Me</h4>
                  <p>Obessing over frame-rates, battery efficiency, and intuitive interactions to create software that isn't just functional, but delightful.</p>
               </div>
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 30px;
          margin-top: 4rem;
        }

        .about-main {
          padding: 50px;
          border-radius: 24px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-icon-wrapper {
          width: 56px; height: 56px;
          border-radius: 12px;
          background: rgba(0, 242, 255, 0.1);
          border: 1px solid rgba(0, 242, 255, 0.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-primary);
        }

        .about-title {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .about-text {
          display: flex; flex-direction: column; gap: 1rem;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .highlight-white {
          color: #fff; font-weight: 700;
        }

        .about-signature {
          margin-top: 1rem;
        }

        .sig-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-dim);
          letter-spacing: 0.1em;
        }

        .about-side {
          display: flex; flex-direction: column; gap: 20px;
        }

        .stat-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
        }

        .stat-card {
          padding: 30px;
          border-radius: 20px;
          text-align: center;
        }

        .stat-num {
          font-size: 2.2rem;
          font-weight: 800;
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .vision-card {
          padding: 30px;
          border-radius: 20px;
          background: rgba(112, 0, 255, 0.02);
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .vision-icon {
          color: var(--accent-secondary);
          flex-shrink: 0;
        }

        .vision-content h4 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .vision-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .stat-row { grid-template-columns: 1fr; }
          .about-main { padding: 30px; }
        }
      `}</style>
    </section>
  );
};

export default About;
