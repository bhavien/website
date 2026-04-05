import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('.interactive')) {
        setIsHovering(true);
        const text = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        animate={{
          width: isHovering ? 80 : 32,
          height: isHovering ? 80 : 32,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
          mixBlendMode: isHovering ? 'normal' : 'difference',
        }}
      >
        {isHovering && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cursor-text"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
      
      <motion.div
        className="cursor-dot"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />

      <style>{`
        .custom-cursor {
          position: fixed;
          top: -16px;
          left: -16px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          pointer-events: none;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .cursor-dot {
          position: fixed;
          top: -2px;
          left: -2px;
          width: 4px;
          height: 4px;
          background-color: var(--accent-primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
        }

        .cursor-text {
          color: white;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: center;
        }

        @media (max-width: 768px) {
          .custom-cursor, .cursor-dot {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
