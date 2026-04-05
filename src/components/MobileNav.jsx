import React, { useState, useEffect } from 'react';
import { Home, Smartphone, Cpu, MessageSquare, Layers } from 'lucide-react';

const MobileNav = () => {
  const [activeTab, setActiveTab ] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  const tabs = [
    { id: 'home', icon: <Home size={18} />, label: 'Home', href: '#home' },
    { id: 'about', icon: <Layers size={18} />, label: 'About', href: '#about' },
    { id: 'projects', icon: <Smartphone size={18} />, label: 'Apps', href: '#projects' },
    { id: 'skills', icon: <Cpu size={18} />, label: 'Stack', href: '#skills' },
    { id: 'contact', icon: <MessageSquare size={18} />, label: 'Talk', href: '#contact' }
  ];

  return (
    <div className="mobile-bottom-nav">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={tab.href}
          onClick={() => setActiveTab(tab.id)}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </a>
      ))}

      <style>{`
        .mobile-bottom-nav {
          position: fixed;
          bottom: 20px;
          left: 16px;
          right: 16px;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          padding: 8px;
          display: flex;
          justify-content: space-around;
          z-index: 2000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: var(--text-dim);
          text-decoration: none;
          padding: 8px;
          flex: 1;
          transition: 0.2s;
        }

        .nav-tab.active {
          color: var(--accent-primary);
        }

        .nav-tab span {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default MobileNav;
