import React, { useEffect } from 'react';

// This component forces the background styles directly on DOM elements
const BackgroundFix = () => {
  useEffect(() => {
    // Apply background to Hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.style.background = 'linear-gradient(-45deg, #ffffff, #f5f5f5, #e0f2f7, #c5e8f3)';
      heroSection.style.backgroundSize = '400% 400%';
      heroSection.style.animation = 'heroGradientAnimation 15s ease infinite';
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes heroGradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
    }

    // Apply background to About section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.style.background = 'linear-gradient(-45deg, #0d3445, #154659, #1a5b72, #072530)';
      aboutSection.style.backgroundSize = '400% 400%';
      aboutSection.style.animation = 'aboutGradientAnimation 15s ease infinite';
      aboutSection.style.color = '#ffffff';
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes aboutGradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
    }

    // Apply background to Features section
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.style.background = 'linear-gradient(-45deg, #e0f2f7, #d0ecf5, #b0e0ef, #8bbcca)';
      featuresSection.style.backgroundSize = '400% 400%';
      featuresSection.style.animation = 'featuresGradientAnimation 18s ease infinite';
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes featuresGradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default BackgroundFix;
