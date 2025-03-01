import React, { useEffect } from 'react';

const SectionBackground = () => {
  useEffect(() => {
    // Create a single container for all snow bubbles
    const bubblesContainer = document.createElement('div');
    bubblesContainer.classList.add('global-bubbles-container');
    bubblesContainer.style.position = 'fixed';
    bubblesContainer.style.top = '0';
    bubblesContainer.style.left = '0';
    bubblesContainer.style.width = '100%';
    bubblesContainer.style.height = '100%';
    bubblesContainer.style.overflow = 'hidden';
    bubblesContainer.style.pointerEvents = 'none';
    bubblesContainer.style.zIndex = '1';
    
    document.body.appendChild(bubblesContainer);
    
    // Create bubbles for the entire page
    for (let i = 0; i < 100; i++) {
      createSnowBubble(bubblesContainer);
    }
    
    // Apply overlay patterns to each section for visual distinction
    document.querySelectorAll('section').forEach((section, index) => {
      // Apply alternating patterns
      const patternIndex = index % 3;
      const overlayClasses = ['overlay-pattern-dots', 'overlay-pattern-lines', 'overlay-pattern-glow'];
      section.classList.add(overlayClasses[patternIndex]);
      
      // Clear any existing background to ensure transparency
      section.style.background = 'transparent';
    });
    
    // Cleanup function
    return () => {
      if (bubblesContainer && document.body.contains(bubblesContainer)) {
        document.body.removeChild(bubblesContainer);
      }
    };
  }, []);
  
  // Function to create a single snow bubble
  const createSnowBubble = (container: HTMLElement) => {
    const bubble = document.createElement('div');
    bubble.classList.add('snow-bubble');
    
    // Random properties
    const size = 1 + Math.random() * 3;
    const leftPosition = Math.random() * 100;
    const animationDuration = 15 + Math.random() * 20;
    const animationDelay = Math.random() * 10;
    
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${leftPosition}%`;
    bubble.style.animationDuration = `${animationDuration}s`;
    bubble.style.animationDelay = `${animationDelay}s`;
    
    container.appendChild(bubble);
  };
  
  return null; // This component doesn't render anything
};

export default SectionBackground;
