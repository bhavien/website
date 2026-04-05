import React from 'react';
import { ShieldCheck, Zap, Layers, Cpu, MousePointer2 } from 'lucide-react';
import Magnetic from './Magnetic';

const FeatureSpotlight = () => {
  return (
    <section id="spotlight" className="spotlight-section">
      <div className="container">
        <div className="spotlight-grid">
          
          <div className="spotlight-content">
             <div className="section-badge">
                <Cpu size={16} /> Advanced Core Architecture
             </div>
             
             <h2 className="heading-md">
                Low-Latency <span className="text-gradient">Core Engines</span>
             </h2>
             
             <p className="text-lg">
                  Expertly engineered real-time detection systems with a focus on native performance and extreme battery efficiency.
             </p>

             <div className="feature-list">
                {[
                   { label: "MVI Architecture", desc: "Predictable unidirectional state management for robust UIs.", icon: <Layers size={20} />, color: "var(--accent-primary)" },
                   { label: "Native Performance", desc: "Direct C++/NDK optimization for high-speed processing.", icon: <Zap size={20} />, color: "var(--accent-secondary)" },
                   { label: "Pro-Grade Security", desc: "Military-grade encryption for local-first data storage.", icon: <ShieldCheck size={20} />, color: "#00ff88" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="feature-item"
                  >
                     <div className="feature-icon" style={{ color: item.color }}>{item.icon}</div>
                     <div className="feature-text">
                        <div className="feature-label">{item.label}</div>
                        <div className="feature-desc">{item.desc}</div>
                     </div>
                  </div>
                ))}
             </div>

             <div style={{ marginTop: '2.5rem' }}>
                <Magnetic>
                  <a href="#contact" className="btn-premium primary">
                    Schedule a Consultation <MousePointer2 size={18} />
                  </a>
                </Magnetic>
             </div>
          </div>

          <div className="spotlight-visual">
             <div className="visual-card glass-panel">
                <div className="sim-elements">
                   <div className="sim-header"></div>
                   <div className="sim-body">
                      {[1,2,3,4].map(i => <div key={i} className="sim-line"></div>)}
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        .spotlight-section {
          padding: 100px 0;
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-item {
          display: flex; gap: 1.2rem; align-items: flex-start;
        }

        .feature-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .feature-label {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .feature-desc {
          font-size: 0.9rem;
          color: var(--text-dim);
          line-height: 1.5;
        }

        .visual-card {
           padding: 30px;
           border-radius: 24px;
           background: var(--surface);
        }

        .sim-elements {
           display: flex; flex-direction: column; gap: 15px;
        }

        .sim-header { height: 120px; background: var(--gradient-brand); border-radius: 12px; opacity: 0.1; }
        .sim-line { height: 10px; background: rgba(255,255,255,0.05); border-radius: 5px; width: 80%; }
        .sim-line:nth-child(2) { width: 60%; }
        .sim-line:nth-child(3) { width: 90%; }

        @media (max-width: 1024px) {
          .spotlight-grid { grid-template-columns: 1fr; }
          .spotlight-visual { display: none; }
        }
      `}</style>
    </section>
  );
};

export default FeatureSpotlight;
