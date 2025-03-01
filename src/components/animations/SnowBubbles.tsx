import React from 'react';
import { motion } from 'framer-motion';
import styles from './SnowBubbles.module.css';

interface SnowBubblesProps {
  count?: number;
  color?: string;
  size?: { min: number; max: number };
  speed?: { min: number; max: number };
}

const SnowBubbles: React.FC<SnowBubblesProps> = ({
  count = 30,
  color = 'white',
  size = { min: 1, max: 4 },
  speed = { min: 10, max: 30 }
}) => {
  // Generate random bubbles
  const bubbles = Array.from({ length: count }).map((_, i) => {
    const bubbleSize = size.min + Math.random() * (size.max - size.min);
    const animationDuration = speed.min + Math.random() * (speed.max - speed.min);
    const delay = Math.random() * 5; // Random delay for more natural movement
    const initialX = `${Math.random() * 100}%`;
    
    return (
      <motion.div
        key={i}
        className={styles.bubble}
        style={{
          width: `${bubbleSize}px`,
          height: `${bubbleSize}px`,
          backgroundColor: color,
          left: initialX,
          top: `-${bubbleSize}px`,
          opacity: 0.1 + Math.random() * 0.4
        }}
        initial={{ y: -20 }}
        animate={{ 
          y: '100vh',
          x: [
            0,
            Math.random() > 0.5 ? 10 : -10,
            Math.random() > 0.5 ? -15 : 15,
            0
          ]
        }}
        transition={{
          duration: animationDuration,
          delay: delay,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          times: [0, 0.33, 0.66, 1]
        }}
      />
    );
  });

  return <div className={styles.container}>{bubbles}</div>;
};

export default SnowBubbles;
