import React from 'react';
import projectsData from '../data/projects.json';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Star, 
  Smartphone, 
  ShieldAlert, 
  MessageSquareDiff, 
  Image as ImageIcon,
  TrendingUp,
  Download,
  Calculator
} from 'lucide-react';
import Magnetic from './Magnetic';

const Projects = () => {
    const getAppIcon = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('call blocker')) return <ShieldAlert size={32} />;
        if (lowerName.includes('auto reply') || lowerName.includes('autoreply')) return <MessageSquareDiff size={32} />;
        if (lowerName.includes('gallery') || lowerName.includes('photo resizer')) return <ImageIcon size={32} />;
        if (lowerName.includes('calculator')) return <Calculator size={32} />;
        return <Smartphone size={32} />;
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <TrendingUp size={16} /> Featured Masterpieces
                    </div>
                    <h2 className="heading-md">Play Store <span className="text-gradient">Portfolio</span></h2>
                    <p className="text-lg section-desc">
                        Over 10+ production-grade applications engineered with precision and deployed to thousands of active users.
                    </p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((app, index) => (
                        <ProjectCard 
                          key={app.id} 
                          app={app} 
                          index={index} 
                          getAppIcon={getAppIcon} 
                        />
                    ))}
                </div>
            </div>

            <style>{`
                .projects-section {
                  padding: 100px 0;
                }

                .section-header {
                  margin-bottom: 4rem;
                }

                .section-badge {
                  display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  color: var(--accent-primary);
                  margin-bottom: 1rem;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  font-size: 0.8rem;
                }

                .projects-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                  gap: 30px;
                }

                .project-card-v2 {
                  position: relative;
                  border-radius: 24px;
                  background: var(--surface);
                  border: 1px solid var(--glass-border);
                  padding: 40px;
                  transition: 0.3s ease;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  height: 100%;
                }

                .project-card-v2:hover {
                  border-color: var(--accent-primary);
                  transform: translateY(-5px);
                }

                .card-header {
                  display: flex;
                  gap: 1.5rem;
                  align-items: center;
                }

                .app-icon-wrapper {
                  width: 70px;
                  height: 70px;
                  border-radius: 18px;
                  background: #000;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 1px solid var(--glass-border);
                  color: var(--accent-primary);
                }

                .app-meta h3 {
                  font-size: 1.4rem;
                  margin-bottom: 4px;
                  font-family: 'Outfit';
                }

                .app-category {
                  font-size: 0.75rem;
                  font-weight: 700;
                  color: var(--accent-secondary);
                  text-transform: uppercase;
                }

                .app-description {
                  font-size: 1rem;
                  line-height: 1.5;
                  color: var(--text-secondary);
                  margin: 2rem 0;
                }

                .card-footer {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }

                .stat-group {
                  display: flex;
                  gap: 1.5rem;
                }

                .stat-item {
                  display: flex;
                  flex-direction: column;
                }

                .stat-tag {
                  font-size: 0.65rem;
                  text-transform: uppercase;
                  color: var(--text-dim);
                  font-weight: 700;
                  margin-bottom: 2px;
                }

                .stat-val {
                  font-size: 1rem;
                  font-weight: 700;
                  font-family: 'Outfit';
                  color: #fff;
                }

                .btn-playstore {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  background: var(--accent-primary);
                  color: var(--bg-primary);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: 0.3s;
                }

                .btn-playstore:hover {
                  transform: scale(1.1);
                }

                @media (max-width: 768px) {
                  .projects-grid {
                    grid-template-columns: 1fr;
                  }
                  .project-card-v2 {
                    padding: 30px;
                  }
                }
            `}</style>
        </section>
    );
};

const ProjectCard = ({ app, index, getAppIcon }) => {
  return (
    <div className="project-card-v2">
      <div className="card-top">
        <div className="card-header">
            <div className="app-icon-wrapper">
                {getAppIcon(app.name)}
            </div>
            <div className="app-meta">
                <h3 className="heading-sm">{app.name}</h3>
                <span className="app-category">{app.category}</span>
            </div>
        </div>
        
        <p className="app-description">
            {app.description}
        </p>
      </div>

      <div className="card-footer">
          <div className="stat-group">
            <div className="stat-item">
              <span className="stat-tag">Rating</span>
              <div className="stat-val" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={14} fill="#ffd700" color="#ffd700" /> 4.8
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-tag">Installs</span>
              <div className="stat-val" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Download size={14} color="var(--accent-primary)" /> 4k+
              </div>
            </div>
          </div>

          <Magnetic>
            <a 
              href={app.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-playstore"
            >
              <ExternalLink size={20} />
            </a>
          </Magnetic>
      </div>
    </div>
  );
};

export default Projects;
