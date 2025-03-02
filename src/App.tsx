import React from 'react';
import { Cursor } from './components/ui/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/sections/About';
import Team from './components/sections/Team';
import Research from './components/sections/Research';
import Blog from './components/sections/Blog';
import MobileApp from './components/sections/MobileApp';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <Features />
      
      <About />
      <Team />
      <Blog />
      <Testimonials />
      
      <Footer />
    </div>
  );
}

export default App;