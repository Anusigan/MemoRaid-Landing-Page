import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
