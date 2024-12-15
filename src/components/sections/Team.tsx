import React from 'react';

const team = [
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
  }
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-primary mb-2">{member.name}</h3>
                <p className="text-accent mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}