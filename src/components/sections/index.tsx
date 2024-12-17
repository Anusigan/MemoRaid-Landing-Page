import React from 'react';
import TeamCarousel from './TeamCarousel';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            World-class experts dedicated to advancing memory rehabilitation science
          </p>
        </div>
        
        <TeamCarousel />
      </div>
    </section>
  );
}