import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Sparkles, Star } from 'lucide-react';

const ComingSoonFull = () => {
    return (
        <section className="coming-soon-full">
            <div className="star-background">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="star"
                        initial={{ opacity: 0.2, scale: 0.5 }}
                        animate={{ 
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    ><Star size={10} fill="white" /></motion.div>
                ))}
            </div>

            <div className="container">
                <div className="coming-soon-content">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="cs-header"
                    >
                        <div className="cs-badge">
                            <Sparkles size={16} /> NEXT GENERATION GAMING
                        </div>
                        <h1 className="cs-title">
                            Space Brain <span className="text-gradient">Academy</span>
                        </h1>
                        <p className="cs-subtitle">
                            The universe is your classroom. Sharpen your mind with scientifically backed cognitive games wrapped in an epic space odyssey.
                        </p>
                    </motion.div>

                    <div className="cs-visual-main">
                        <motion.div
                            animate={{ 
                                y: [0, -20, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="floating-rocket-wrapper"
                        >
                            <div className="rocket-glow"></div>
                            <Rocket size={120} className="main-rocket-icon" />
                        </motion.div>
                        
                        <div className="cs-info-cards">
                            <div className="cs-card">
                                <span className="card-label">Status</span>
                                <span className="card-value pulse-text">PRE-LAUNCH</span>
                            </div>
                            <div className="cs-card">
                                <span className="card-label">Target Launch</span>
                                <span className="card-value highlight">MAY 2026</span>
                            </div>
                            <div className="cs-card">
                                <span className="card-label">Mission</span>
                                <span className="card-value">BRAIN MASTERY</span>
                            </div>
                        </div>
                    </div>

                    <div className="cs-footer">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="notify-btn"
                        >
                            STAY UPDATED
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
                .coming-soon-full {
                    min-height: 100vh;
                    width: 100%;
                    background: radial-gradient(circle at center, #1e1b4b 0%, #0a0a0a 100%);
                    display: flex;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    padding: 80px 0;
                }

                .star-background {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    pointer-events: none;
                }

                .star {
                    position: absolute;
                    color: rgba(255, 255, 255, 0.3);
                }

                .coming-soon-content {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3rem;
                    position: relative;
                    z-index: 2;
                }

                .cs-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: rgba(139, 92, 246, 0.1);
                    border: 1px solid rgba(139, 92, 246, 0.3);
                    border-radius: 100px;
                    color: #a78bfa;
                    font-size: 0.8rem;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    margin-bottom: 1.5rem;
                }

                .cs-title {
                    font-size: 5rem;
                    line-height: 1;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .cs-subtitle {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .cs-visual-main {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4rem;
                }

                .floating-rocket-wrapper {
                    position: relative;
                }

                .main-rocket-icon {
                    color: #fff;
                    filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
                }

                .rocket-glow {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 200px; height: 200px;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
                    z-index: -1;
                }

                .cs-info-cards {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    width: 100%;
                    max-width: 800px;
                }

                .cs-card {
                    padding: 24px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    transition: 0.3s;
                }

                .cs-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(139, 92, 246, 0.3);
                    transform: translateY(-5px);
                }

                .card-label {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: var(--text-dim);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .card-value {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #fff;
                    font-family: 'Outfit';
                }

                .card-value.highlight {
                    color: var(--accent-primary);
                }

                .pulse-text {
                    animation: textPulse 2s infinite;
                }

                @keyframes textPulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.6; }
                    100% { opacity: 1; }
                }

                .notify-btn {
                    padding: 18px 48px;
                    background: var(--accent-primary);
                    color: var(--bg-primary);
                    border-radius: 100px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    box-shadow: 0 10px 30px rgba(0, 242, 255, 0.3);
                }

                @media (max-width: 768px) {
                    .cs-title { font-size: 3rem; }
                    .cs-info-cards { grid-template-columns: 1fr; }
                    .coming-soon-full { padding: 100px 20px; }
                }
            `}</style>
        </section>
    );
};

export default ComingSoonFull;
