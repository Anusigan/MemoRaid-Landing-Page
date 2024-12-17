import React from 'react';
import { Icons } from './icons';

const features = [
  {
    icon: 'Memory',
    title: 'Personalized Recovery',
    description: 'Tailored memory exercises and rehabilitation programs designed specifically for your needs.'
  },
  {
    icon: 'Users',
    title: 'Support Network',
    description: 'Connect with specialists and others on similar recovery journeys.'
  },
  {
    icon: 'Activity',
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and milestone tracking.'
  },
  {
    icon: 'Shield',
    title: 'Safe & Secure',
    description: 'Your personal information and progress are protected with enterprise-grade security.'
  }
] as const;

export default function Features() {
  return (
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Memory Recovery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with proven rehabilitation techniques
              to support your memory recovery journey.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = Icons[feature.icon];
              return (
                  <div
                      key={index}
                      className="p-6 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Icon Container */}
                    <div
                        className="w-12 h-12 bg-[#0d3445] rounded-full flex items-center justify-center mb-4"
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Feature Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    {/* Feature Description */}
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}
