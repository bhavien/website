import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="simple-bg-container">
      <div className="bg-noise"></div>
      <div className="subtle-gradient"></div>
      <div className="grid-overlay"></div>

      <style>{`
        .simple-bg-container {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: -5;
          background: #050505;
          overflow: hidden;
        }

        .bg-noise {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: -4;
          opacity: 0.01;
          pointer-events: none;
          background-image: url("/noise.svg");
        }

        .subtle-gradient {
          position: absolute;
          width: 100%; height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(0, 242, 255, 0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        .grid-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 90%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
