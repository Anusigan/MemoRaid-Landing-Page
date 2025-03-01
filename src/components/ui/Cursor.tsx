import React, { useEffect, useRef } from 'react';
import '../../styles/cursor.css';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastPositionRef = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const bubbleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const createBubble = (x: number, y: number) => {
      const bubble = document.createElement('div');
      bubble.className = 'cursor-bubble';
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      document.body.appendChild(bubble);

      // Remove the bubble after animation completes
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, 1800); // Match animation duration
    };

    // Main cursor position update function with bubble creation
    const updateCursorPosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Calculate distance moved
      const distance = Math.hypot(
        clientX - lastPositionRef.current.x,
        clientY - lastPositionRef.current.y
      );

      // Create bubble trail when moving enough distance (lowered threshold)
      if (distance > 15) { // Reduced from 20 to create bubbles more frequently
        // Clear the existing timer
        if (bubbleTimerRef.current) {
          clearTimeout(bubbleTimerRef.current);
        }

        createBubble(clientX, clientY);
        
        // Set timer for next bubble with a slightly shorter delay
        bubbleTimerRef.current = setTimeout(() => {
          lastPositionRef.current = { x: clientX, y: clientY };
        }, 80); // Reduced from 100ms for more frequent bubbles
      }
    };

    // Check if any element should scale the cursor
    const handleCursorScale = () => {
      const hoverable = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      
      hoverable.forEach(item => {
        item.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-scale');
        });
        
        item.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-scale');
        });
      });
    };

    // Initialize
    document.addEventListener('mousemove', updateCursorPosition);
    handleCursorScale();

    // Remove the default cursor from the body
    document.body.style.cursor = 'none';
    
    // Fix for framer-motion - reattach cursor to active elements
    const reattachCursor = () => {
      document.querySelectorAll('.framer-cursor-target').forEach(el => {
        el.addEventListener('mousemove', updateCursorPosition);
      });
    };
    
    // Run initially and periodically to catch dynamically created elements
    reattachCursor();
    const interval = setInterval(reattachCursor, 1000);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.body.style.cursor = 'auto';
      clearInterval(interval);
      if (bubbleTimerRef.current) {
        clearTimeout(bubbleTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="cursor-wrapper" ref={cursorRef}></div>
  );
};