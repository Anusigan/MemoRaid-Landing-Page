import React, { useEffect } from 'react';

export function Cursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Add memory trail effect
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
        document.body.appendChild(trail);
        
        setTimeout(() => {
          trail.remove();
        }, 1200);
      });
    };

    // Add hover effect for interactive elements
    const handleElementHover = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    };

    const handleElementLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleElementHover);
      element.addEventListener('mouseleave', handleElementLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleElementHover);
        element.removeEventListener('mouseleave', handleElementLeave);
      });
      cursor.remove();
    };
  }, []);

  return null;
}