'use client';

import React, { useRef, useEffect } from 'react';
import { Icons } from '../../public/icons';
import { Button } from './ui/Button';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video playback
    }
  }, []);

  return (
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/icons/hi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero Content */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Floating Icon */}
              <div className="flex justify-center mb-8">
                <div className="animate-float">
                  <Icons.Brain className="h-20 w-20 text-white" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Recover Your Memories,
                <br />
                <span className="text-[white]">Rebuild Your Life</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-[grey] mb-10 max-w-2xl mx-auto animate-fade-in-delayed">
                MemoRaid is an innovative platform designed to help individuals with amnesia
                reconnect with their memories through advanced cognitive rehabilitation techniques.
              </p>

              {/* Buttons with Inline Class Overrides */}
              <div className="flex justify-center space-x-4 animate-fade-in-delayed">
                <Button
                    variant="primary"
                    className="bg-white text-[#0D3445] hover:bg-gray-100"
                >
                  Start Your Journey
                </Button>
                <Button
                    variant="secondary"
                    className="bg-white text-[#0d3445] hover:bg-gray-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
