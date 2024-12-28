import React from 'react';
import { ArrowRight, Microscope, Brain, Users } from 'lucide-react';

const researchAreas = [
  {
    icon: <Microscope className="w-6 h-6" />,
    title: 'Upcoming Research',
    description: 'Preparing groundbreaking studies in cognitive enhancement on memory recovery.',
    status: 'Launching 2025'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Technology Development',
    description: 'Advanced solutions for personalized cognitive care.',
    status: 'In Development'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Clinical Studies',
    description: 'Evidence-based approaches to memory improvement.',
    status: 'Planning Phase'
  }
];

export default function Research() {
  return (
      <section className="bg-white py-16"> {/* Outer section with white background */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 opacity-15 animate-[fadeIn_0.8s_ease-out_forwards]">
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Research & Development
            </h2>
            <p className="text-lg text-gray-600">
              Shaping the future of cognitive healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchAreas.map((item, index) => (
                <div
                    key={index}
                    className="bg-[#0d3445] rounded-lg p-6 opacity-0 hover:bg-[#0d3445]/80 transition-all duration-300" // Column background color
                    style={{
                      animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`
                    }}
                >
                  <div className="text-cyan-400 mb-4">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-4 text-sm">
                    {item.description}
                  </p>

                  <div className="flex items-center text-sm text-cyan-400">
                    <span>{item.status}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </section>
  );
}
