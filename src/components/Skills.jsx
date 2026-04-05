import React from 'react';
import { Smartphone, Zap, Binary, Terminal, Cpu } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, color }) => {
  return (
    <div className="skill-card-v2">
      <div className="skill-icon-outer" style={{ color: color }}>
        <Icon size={24} />
      </div>
      
      <h3 className="skill-card-title">{title}</h3>
      
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Core',
      icon: Smartphone,
      skills: ['Kotlin', 'Java', 'Dart', 'Swift', 'Jetpack Compose', 'MVVM/MVI', 'Dependency Injection'],
      color: "var(--accent-primary)"
    },
    {
      title: 'Android Deep-Dive',
      icon: Cpu,
      skills: ['Coroutines', 'Flow', 'Retrofit', 'Room DB', 'Security SDKs', 'Performance Tuning', 'Firebase'],
      color: "var(--accent-secondary)"
    },
    {
      title: 'Tools & DevOps',
      icon: Terminal,
      skills: ['Git', 'Jenkins', 'Docker', 'Google Play', 'CI/CD', 'Gradle', 'JUnit'],
      color: "#ff007f"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="section-header">
           <div className="section-badge">
              <Binary size={16} /> Technology Stack
           </div>
           <h2 className="heading-md">Deep Technical <span className="text-gradient">Versatility</span></h2>
           <p className="text-lg section-desc">
              A powerful stack built for reliability and massive scale. I leverage the latest industry standards to deliver cutting-edge solutions.
           </p>
        </div>

        <div className="skills-grid-v2">
           {skillCategories.map((cat, index) => (
              <SkillCard key={index} {...cat} />
           ))}
        </div>

        <div className="skills-highlight glass-panel">
           <div className="highlight-content">
              <div className="highlight-icon">
                 <Zap size={28} />
              </div>
              <div className="highlight-text">
                 <h4>Always Innovating</h4>
                 <p>Currently optimizing large-scale Flutter apps & exploring advanced AI integrations for Android.</p>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 100px 0;
        }

        .section-desc {
          max-width: 600px;
          margin-top: 1rem;
        }

        .skills-grid-v2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 4rem;
        }

        .skill-card-v2 {
          background: var(--surface);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
        }

        .skill-icon-outer {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #000;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid var(--glass-border);
        }

        .skill-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .skill-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
        }

        .skill-tag {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .skills-highlight {
          margin-top: 4rem;
          padding: 40px;
          border-radius: 24px;
        }

        .highlight-content {
          display: flex; gap: 2rem; align-items: center;
        }

        .highlight-icon {
          width: 64px; height: 64px;
          background: var(--accent-secondary);
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }

        .highlight-text h4 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .highlight-text p {
          color: var(--text-dim);
          font-size: 1rem;
        }

        @media (max-width: 1024px) {
          .skills-grid-v2 { grid-template-columns: 1fr; }
          .highlight-content { flex-direction: column; text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
