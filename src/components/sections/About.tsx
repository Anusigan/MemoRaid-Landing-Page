import React from 'react';
import { Icons } from '../icons';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">About MemoRaid</h2>
            <p className="text-lg text-gray-600 mb-6">
              MemoRaid is a revolutionary platform dedicated to helping individuals recover from amnesia
              through cutting-edge cognitive rehabilitation techniques and personalized support systems.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to empower individuals on their journey to memory recovery,
              providing them with the tools, support, and community they need to rebuild their lives.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '95%', text: 'Success Rate' },
              { number: '1000+', text: 'Patients Helped' },
              { number: '50+', text: 'Expert Specialists' },
              { number: '24/7', text: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="bg-primary/5 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}