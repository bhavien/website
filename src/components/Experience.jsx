import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Senior Android Developer",
      period: "2020 - PRESENT",
      company: "Leading Tech Solutions",
      highlights: [
        "Architected robust systems for 1k+ active users",
        "Optimized app performance by 40% through NDK & Coroutines",
        "Led cross-functional mobile engineering teams of 10+ devs",
        "Maintained 99.9% crash-free sessions across global apps"
      ],
      color: "var(--accent-primary)"
    },
    {
       role: "Mobile App Developer",
       period: "2018 - 2020",
       company: "Innovative Startups Inc",
       highlights: [
         "Integrated Stripe & Google Play Billing solutions",
         "Migrated legacy XML to modern Jetpack Compose",
         "Delivered 15+ successful applications to clients worldwide",
         "Native Kotlin & Java high-performance engineering"
       ],
       color: "var(--accent-secondary)"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        
        <div className="section-header">
           <div className="section-badge">
              <Briefcase size={16} /> Career Narrative
           </div>
           <h2 className="heading-md">Building <span className="text-gradient">Legacy</span> Through Code</h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item"
            >
               <div className="experience-card glass-panel">
                  <div className="exp-info">
                     <div className="exp-date-badge" style={{ color: exp.color, borderColor: exp.color + '33' }}>
                        <Calendar size={12} /> {exp.period}
                     </div>
                     <h3 className="exp-role">{exp.role}</h3>
                     <div className="exp-company">
                       <Building2 size={14} /> {exp.company}
                     </div>
                  </div>

                  <div className="exp-highlights">
                     {exp.highlights.map((h, i) => (
                        <div key={i} className="highlight-item">
                           <div className="highlight-bullet" style={{ backgroundColor: exp.color }}></div>
                           <p>{h}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 100px 0;
        }

        .experience-timeline {
          max-width: 900px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 4rem;
        }

        .experience-card {
          padding: 40px;
          border-radius: 24px;
          background: var(--surface);
          border: 1px solid var(--glass-border);
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          transition: 0.3s;
        }

        .experience-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .exp-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .exp-role {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .exp-company {
          display: flex; align-items: center; gap: 8px;
          color: var(--text-dim);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
        }

        .exp-highlights {
          display: flex; flex-direction: column; gap: 1rem;
        }

        .highlight-item {
          display: flex; gap: 1rem; align-items: flex-start;
        }

        .highlight-bullet {
          width: 6px; height: 6px;
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .highlight-item p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .experience-card { grid-template-columns: 1fr; gap: 2rem; padding: 30px; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
