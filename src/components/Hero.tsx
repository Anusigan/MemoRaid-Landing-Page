import React from 'react';
import { Icons } from './icons';
import { Button } from './ui/Button';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="animate-float">
              <Icons.Brain className="h-20 w-20 text-[#0d3445]" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0d1500] mb-6 animate-fade-in">
            Recover Your Memories,
            <br/>
            <span className="text-[#0d3250]">Rebuild Your Life</span>

          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-delayed">
            MemoRaid is an innovative platform designed to help individuals with amnesia
            reconnect with their memories through advanced cognitive rehabilitation techniques.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-delayed ">
            <Button variant="primary" icon="ArrowRight">
              Start Your Journey
            </Button>
            <Button variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}