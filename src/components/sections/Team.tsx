import React from 'react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&h=300',
    linkedin: 'https://www.linkedin.com/in/dr-sarah-chen'
  },
  {
    name: 'Dr. Michael Roberts',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&h=300',
    linkedin: 'https://www.linkedin.com/in/dr-michael-roberts'
  },
  {
    name: 'Emma Thompson',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300',
    linkedin: 'https://www.linkedin.com/in/emma-thompson'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&h=300',
    linkedin: 'https://www.linkedin.com/in/dr-james-wilson'
  },
  {
    name: 'Dr. Linda Hayes',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1601091920421-9a22e74d35d4?auto=format&fit=crop&w=300&h=300',
    linkedin: 'https://www.linkedin.com/in/dr-linda-hayes'
  },
  {
    name: 'John Doe',
    role: 'Co-Founder',
    image: 'https://images.unsplash.com/photo-1565823547-d7f72a25d509?auto=format&fit=crop&w=300&h=300',
    linkedin: 'https://www.linkedin.com/in/john-doe'
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden relative transform hover:-translate-y-1 transition-all duration-300">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <h3 className="font-semibold text-xl text-primary mb-2">{member.name}</h3>
                    <p className="text-accent mb-3">{member.role}</p>
                  </div>

                  {/* LinkedIn Tooltip */}
                  <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
                  >
                    <span className="text-lg font-semibold">LinkedIn</span>
                  </a>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
