import React from 'react';
import { Download, Users, Smartphone, ShieldCheck, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: "Total Downloads", value: "4k+", icon: <Download size={24} />, color: "var(--accent-primary)" },
    { label: "Active Users", value: "1k+", icon: <Users size={24} />, color: "var(--accent-secondary)" },
    { label: "Production Apps", value: "10+", icon: <Smartphone size={24} />, color: "#ff007f" },
    { label: "Stability Rate", value: "99.9%", icon: <ShieldCheck size={24} />, color: "#00ff88" }
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div className="stats-header">
           <div className="section-badge">
              <TrendingUp size={16} /> Impact at Scale
           </div>
           <h2 className="heading-md">Global Reach and <span className="text-gradient">Performance</span></h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card glass-panel"
            >
              <div className="stat-icon-wrapper" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              
              <div className="stat-info">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .stats-section {
          padding: 100px 0;
        }

        .stats-header {
          margin-bottom: 3.5rem;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .stat-card {
          padding: 40px;
          border-radius: 24px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          transition: 0.3s;
        }

        .stat-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .stat-icon-wrapper {
          width: 56px; height: 56px;
          border-radius: 16px;
          background: #000;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--glass-border);
        }

        .stat-value {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 4px;
          font-family: 'Outfit';
        }

        .stat-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        @media (max-width: 1200px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
