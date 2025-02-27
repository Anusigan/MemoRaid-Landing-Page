import React, { useEffect, useState, useRef } from 'react';
import '../../styles/cursor.css';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const trailTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Create brain cursor element
    const cursorContainer = document.createElement('div');
    cursorContainer.innerHTML = `
      <div class="cursor-container">
        <img src="/icons/brain.svg" alt="" class="brain-cursor" />
        <div class="cursor-dot"></div>
      </div>
    `;
    
    const cursorElement = cursorContainer.firstElementChild as HTMLElement | null;
    if (cursorElement) {
      document.body.appendChild(cursorElement);
      cursorRef.current = cursorElement;
    }
    
    const cursor = document.querySelector('.cursor-container') as HTMLElement | null;
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;

    // Create trail effect with varying sizes and timing
    const createTrail = (x: number, y: number, moving: boolean) => {
      if (!moving) return;
      
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      
      // Randomize trail size slightly for more organic feel
      const size = Math.random() * 6 + 6;
      trail.style.width = `${size}px`;
      trail.style.height = `${size}px`;
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      
      // Add slight randomization to position
      const offsetX = (Math.random() - 0.5) * 10;
      const offsetY = (Math.random() - 0.5) * 10;
      trail.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      }, 1200);
    };

    const moveCursor = (e: MouseEvent) => {
      // Cancel any pending animation frames to prevent memory leaks
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Determine if cursor is moving significantly
      const distanceMoved = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
      );
      
      isMoving = distanceMoved > 5;
      lastX = e.clientX;
      lastY = e.clientY;
      
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
        
        // Create trail only when cursor is moving
        if (isMoving) {
          createTrail(e.clientX, e.clientY, isMoving);
          
          // Set interval to create additional trails for smoother effect
          if (trailTimerRef.current === null) {
            trailTimerRef.current = setInterval(() => {
              createTrail(lastX, lastY, isMoving);
            }, 60);
          }
        } else if (trailTimerRef.current) {
          clearInterval(trailTimerRef.current);
          trailTimerRef.current = null;
        }
        
        rafRef.current = null;
      });
    };

    // Check if element changes cursor to pointer
    const handleElementHover = () => {
      setIsPointer(true);
      if (cursor) {
        cursor.classList.add('cursor-active');
      }
    };

    const handleElementLeave = () => {
      setIsPointer(false);
      if (cursor) {
        cursor.classList.remove('cursor-active');
      }
    };

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    
    // Safely add event listeners with proper type casting
    interactiveElements.forEach((element) => {
      const el = element as HTMLElement;
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    // Cleanup function
    return () => {
      // Cancel any pending animation frame
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Clear trail interval
      if (trailTimerRef.current !== null) {
        clearInterval(trailTimerRef.current);
      }
      
      window.removeEventListener('mousemove', moveCursor);
      
      // Safely remove event listeners
      interactiveElements.forEach((element) => {
        const el = element as HTMLElement;
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
      
      // Remove all trail elements
      const trails = document.querySelectorAll('.cursor-trail');
      trails.forEach((trail) => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      });
      
      // Remove cursor element
      if (cursor && document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return null;
}