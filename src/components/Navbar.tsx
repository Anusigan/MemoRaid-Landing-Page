import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0d3445] text-white backdrop-blur-sm shadow-sm' : 'bg-transparent text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Updated Logo */}
            <div className="flex items-center space-x-2">
              <img src="/icons/logonobg.png" alt="Logo" className="h-12 w-12 object-contain" />
              <span className="font-bold text-xl">MemoRaid</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors">Subscription Plans</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-[#0d3444] text-white px-6 py-2 rounded-full hover:bg-[#0d3444] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}
