import React from 'react';
import { Icons } from '../icons';

const research = [
  {
    title: 'Neural Plasticity Studies',
    description: 'Groundbreaking research on brain adaptability and memory formation.',
    stats: '15 Published Papers'
  },
  {
    title: 'AI-Driven Recovery',
    description: 'Machine learning algorithms for personalized treatment plans.',
    stats: '93% Success Rate'
  },
  {
    title: 'Cognitive Rehabilitation',
    description: 'Novel approaches to memory exercise and mental stimulation.',
    stats: '1000+ Participants'
  }
];

export default function Research() {
  return (
    <section id="research" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Research & Innovation</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Leading the field in memory rehabilitation research and technological innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {research.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-200 mb-6">{item.description}</p>
              <div className="text-accent-light font-semibold">{item.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}