import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Trophy, Globe } from 'lucide-react';

const GameShowcase = () => {
    const features = [
        {
            icon: <Brain className="text-purple-400" />,
            title: "Cognitive Development",
            description: "Scientifically designed games that enhance memory, focus, and problem-solving skills."
        },
        {
            icon: <Rocket className="text-red-400" />,
            title: "Space Missions",
            description: "Embark on interstellar quests where every level completed is a step closer to the stars."
        },
        {
            icon: <Trophy className="text-yellow-400" />,
            title: "Global Leaderboards",
            description: "Compete with other space explorers from around the world and earn exclusive badges."
        },
        {
            icon: <Globe className="text-blue-400" />,
            title: "No Ads, Pure Learning",
            description: "A safe, distraction-free environment focused entirely on the joy of exploration and learning."
        }
    ];

    return (
        <section id="games" className="game-showcase-section">
            <div className="container">
                <div className="showcase-content">
                    <div className="showcase-left">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="game-preview-card"
                        >
                            <div className="preview-header">
                                <div className="brain-glow">
                                    <Brain size={48} />
                                </div>
                                <h3 className="preview-title">Space Brain <span className="text-gradient">Academy</span></h3>
                            </div>
                            <div className="preview-body">
                                <div className="stat-line">
                                    <span>Intelligence Level:</span>
                                    <div className="progress-bar"><motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} transition={{ duration: 1.5 }} className="progress-fill" /></div>
                                </div>
                                <div className="stat-line">
                                    <span>Galactic Rank:</span>
                                    <span className="rank-text">Star Cadet</span>
                                </div>
                            </div>
                            <div className="preview-footer">
                                <div className="upcoming-tag">MAY 2026</div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="showcase-right">
                        <div className="section-badge">Next BIG Venture</div>
                        <h2 className="heading-md">Why <span className="text-gradient">Space Brain Games?</span></h2>
                        <p className="subtitle">We're redefining educational gaming with a focus on immersive storytelling and advanced cognitive training mechanics.</p>
                        
                        <div className="features-list">
                            {features.map((f, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ x: 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="feature-item"
                                >
                                    <div className="feature-icon">{f.icon}</div>
                                    <div className="feature-text">
                                        <h4>{f.title}</h4>
                                        <p>{f.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .game-showcase-section {
                    padding: 120px 0;
                    background: radial-gradient(circle at 10% 20%, rgba(30, 27, 75, 0.4) 0%, transparent 40%);
                }

                .showcase-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                .game-preview-card {
                    background: #000;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 32px;
                    padding: 40px;
                    position: relative;
                    box-shadow: 0 40px 80px rgba(0,0,0,0.5), 
                                0 0 40px rgba(139, 92, 246, 0.15);
                    overflow: hidden;
                }

                .game-preview-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
                    animation: rotate 20s infinite linear;
                }

                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .brain-glow {
                    width: 80px; height: 80px;
                    border-radius: 20px;
                    background: rgba(139, 92, 246, 0.1);
                    display: flex; align-items: center; justify-content: center;
                    color: #a78bfa;
                    margin-bottom: 24px;
                    box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
                }

                .preview-title {
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 32px;
                    font-family: 'Outfit';
                }

                .stat-line {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .progress-bar {
                    height: 8px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: var(--accent-primary);
                    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
                }

                .rank-text {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: #fff;
                }

                .upcoming-tag {
                    display: inline-block;
                    margin-top: 32px;
                    padding: 8px 20px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 100px;
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: var(--accent-primary);
                    border: 1px solid var(--accent-primary);
                }

                .showcase-right h2 { margin-bottom: 1.5rem; }
                .subtitle { color: var(--text-secondary); margin-bottom: 3rem; font-size: 1.1rem; line-height: 1.6; }

                .features-list {
                    display: grid;
                    gap: 24px;
                }

                .feature-item {
                    display: flex;
                    gap: 20px;
                    padding: 20px;
                    border-radius: 16px;
                    transition: 0.3s;
                }

                .feature-item:hover {
                    background: rgba(255, 255, 255, 0.03);
                }

                .feature-icon {
                    width: 48px; height: 48px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }

                .feature-text h4 { font-size: 1.1rem; margin-bottom: 4px; color: #fff; }
                .feature-text p { font-size: 0.9rem; color: var(--text-dim); line-height: 1.5; }

                @media (max-width: 992px) {
                    .showcase-content { grid-template-columns: 1fr; }
                    .showcase-left { order: 2; }
                    .showcase-right { order: 1; text-align: center; }
                    .feature-item { text-align: left; }
                }
            `}</style>
        </section>
    );
};

export default GameShowcase;
