import React from 'react';

const team = [
  {
    name: 'Anusigan Sivananthan',
    role: 'Co-Founder',
    image: 'src/components/icons/Anusigan.jpeg',

  },
  {
    name: 'Linushankaran Janarththanan',
    role: 'Co-Founder',
    image: 'src/components/icons/Linu.jpeg',

  },
  {
    name: 'Shahinya Arumugam',
    role: 'Co-Founder',
    image:'src/components/icons/Shahinya.jpeg' ,

  },
  {
    name: 'Avinesh   Harishann',
    role: 'Co-Founder',
    image: 'src/components/icons/Avinesh.jpeg',

  },
  {
    name: 'Rishaanth Rajkumar',
    role: 'Co-Founder',
    image: 'src/components/icons/Rishaanth.jpeg',

  },
  {
    name: 'Mithunan Jayamohan',
    role: 'Co-Founder',
    image: 'src/components/icons/Mithunan.jpeg',

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
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                  <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                  />
                  <div className="p-3">
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
