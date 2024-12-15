import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const allTeamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Medical Officer',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&h=300',
    bio: 'Neurologist with 15+ years of experience in memory rehabilitation.'
  },
  {
    name: 'Dr. Michael Roberts',
    role: 'Head of Research',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=300',
    bio: 'Leading researcher in cognitive neuroscience and memory recovery.'
  },
  {
    name: 'Emma Thompson',
    role: 'Lead Technical Officer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300',
    bio: 'Expert in AI-driven rehabilitation technology.'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Clinical Director',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=300',
    bio: 'Specialist in personalized treatment plans and patient care.'
  },
  {
    name: 'Dr. Lisa Park',
    role: 'Neuroscience Researcher',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300',
    bio: 'Pioneer in memory formation research.'
  },
  {
    name: 'Prof. David Miller',
    role: 'Advisory Board Chair',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300',
    bio: 'Distinguished professor of neurology.'
  },
  {
    name: 'Dr. Rachel Adams',
    role: 'Clinical Psychologist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300',
    bio: 'Specialist in trauma and memory recovery.'
  },
  {
    name: 'Dr. Mark Zhang',
    role: 'Research Director',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&h=300',
    bio: 'Leading innovation in memory rehabilitation.'
  }
];

export default function TeamCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleMembers = 4;

  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + visibleMembers >= allTeamMembers.length ? 0 : prev + visibleMembers
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => 
      prev - visibleMembers < 0 ? 
        Math.max(0, allTeamMembers.length - visibleMembers) : 
        prev - visibleMembers
    );
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * 25}%)` }}
        >
          {allTeamMembers.map((member, index) => (
            <div 
              key={index}
              className="w-1/4 flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-primary mb-2">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
    </div>
  );
}