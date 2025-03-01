import React, { useEffect } from 'react';
import { Cursor } from './components/ui/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Research from './components/sections/Research';
import Blog from './components/sections/Blog';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import SectionBackground from './components/SectionBackground';
import './styles/globals.css';
import './styles/animations.css';

import { ThemeProvider } from './context/ThemeContext';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle';
import './styles/cursor.css';

function App() {
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    // Apply global animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    
    // Add seamless continuous background to body
    document.body.style.background = 'linear-gradient(-45deg, #0d3445, #154659, #1a5b72, #072530)';
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradientAnimation 15s ease infinite';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.minHeight = '100vh';
    
    // Make all sections transparent
    document.querySelectorAll('section').forEach(section => {
      section.style.background = 'transparent';
    });
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Animated elements for the entire page */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Create global floating elements that aren't tied to sections */}
          <div className="animated-circle" style={{
            width: '300px', 
            height: '300px', 
            top: '10%', 
            left: '5%', 
            backgroundColor: '#ffffff', 
            opacity: '0.05',
            animation: 'float 25s infinite ease-in-out'
          }}></div>
          
          <div className="animated-circle" style={{
            width: '200px', 
            height: '200px', 
            top: '40%', 
            right: '10%', 
            backgroundColor: '#ffffff', 
            opacity: '0.03',
            animation: 'float 20s infinite ease-in-out',
            animationDelay: '2s'
          }}></div>
          
          <div className="animated-circle" style={{
            width: '400px', 
            height: '400px', 
            bottom: '5%', 
            left: '20%', 
            backgroundColor: '#ffffff', 
            opacity: '0.02',
            animation: 'float 30s infinite ease-in-out',
            animationDelay: '1s'
          }}></div>
        </div>
        
        {/* Snow bubbles container that covers the entire viewport */}
        <SectionBackground />
        
        {/* Main content */}
        <div className="relative z-10">
          <Cursor />
          <Navbar />
          <FloatingThemeToggle />
          <Hero />
          <Features />
          <About />
          <Team />
          <Research />
          <Blog />
          <Pricing />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;