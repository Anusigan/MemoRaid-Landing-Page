import React, { useEffect } from 'react';
import { Cursor } from './components/ui/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Research from './components/sections/Research';
import Blog from './components/sections/Blog';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

import { ThemeProvider } from './context/ThemeContext';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle';
import './styles/cursor.css';

function App() {
  // Ensure body has cursor: none style
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-dark-primary transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;