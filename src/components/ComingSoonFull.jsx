import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

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
                                y: [0, -15, 0],
                            }}
                            transition={{ 
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mascot-wrapper"
                        >
                            <img src="/spacebrain/mascot.png" alt="Mascot" className="mascot-img" />
                            <div className="mascot-aura"></div>
                        </motion.div>
                        
                        <div className="screenshot-peek">
                            <motion.img 
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                src="/spacebrain/screenshot1.png" 
                                className="ss-img ss-left" 
                            />
                            <motion.img 
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                src="/spacebrain/screenshot2.png" 
                                className="ss-img ss-center" 
                            />
                        </div>
                    </div>

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
                    padding: 100px 0;
                }

                .coming-soon-full::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: url('/spacebrain/feature.png') center/cover no-repeat;
                    opacity: 0.15;
                    mix-blend-mode: overlay;
                    pointer-events: none;
                    z-index: 1;
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
                    gap: 4rem;
                    position: relative;
                    z-index: 2;
                    width: 100%;
                }

                .cs-visual-main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .mascot-wrapper {
                    position: relative;
                    width: 240px;
                    height: 240px;
                    z-index: 5;
                    margin-bottom: 2rem;
                }

                .mascot-img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.4));
                }

                .mascot-aura {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
                    z-index: -1;
                }

                .screenshot-peek {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: -60px;
                    perspective: 1000px;
                }

                .ss-img {
                    width: 220px;
                    border-radius: 18px;
                    border: 4px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                    transition: 0.3s;
                }

                .ss-img:hover {
                    transform: translateZ(20px) scale(1.05);
                    border-color: var(--accent-primary);
                }

                .ss-left { transform: rotateY(15deg) rotateX(5deg); }
                .ss-center { transform: rotateY(-15deg) rotateX(5deg); }

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
                    font-size: 4.5rem;
                    line-height: 1;
                    font-weight: 900;
                    margin-bottom: 1.5rem;
                }

                .cs-subtitle {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    max-width: 650px;
                    margin: 0 auto;
                    line-height: 1.6;
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
                    border: 1px solid var(--glass-border);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    transition: 0.3s;
                }

                .cs-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--accent-primary);
                    transform: translateY(-5px);
                }

                .card-label {
                    font-size: 0.65rem;
                    font-weight: 800;
                    color: var(--text-dim);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .card-value {
                    font-size: 1.25rem;
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
                    padding: 16px 40px;
                    background: var(--accent-primary);
                    color: var(--bg-primary);
                    border-radius: 100px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    box-shadow: 0 10px 30px rgba(0, 242, 255, 0.3);
                }

                @media (max-width: 768px) {
                    .cs-title { font-size: 2.8rem; }
                    .cs-info-cards { grid-template-columns: 1fr; }
                    .coming-soon-full { padding: 80px 20px; }
                    .ss-img { width: 160px; }
                    .screenshot-peek { margin-top: -40px; }
                }
            `}</style>
        </section>
    );
};

export default ComingSoonFull;
