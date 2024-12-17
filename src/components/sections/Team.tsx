import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
import { motion } from 'framer-motion'; // For adding animations

const team = [
  {
    name: 'Anusigan Sivananthan',
    role: 'Co-Founder',
    image: 'src/components/icons/Anusigan.jpeg',
    linkedin: 'https://www.linkedin.com/in/anusigan', // LinkedIn link
  },
  {
    name: 'Linushankaran Janarththanan',
    role: 'Co-Founder',
    image: 'src/components/icons/Linu.jpeg',
    linkedin: 'https://www.linkedin.com/in/linu', // LinkedIn link
  },
  {
    name: 'Shahinya Arumugam',
    role: 'Co-Founder',
    image: 'src/components/icons/Shahinya.jpeg',
    linkedin: 'https://www.linkedin.com/in/shahinya', // LinkedIn link
  },
  {
    name: 'Avinesh Harishan',
    role: 'Co-Founder',
    image: 'src/components/icons/Avinesh.jpeg',
    linkedin: 'https://www.linkedin.com/in/avinesh', // LinkedIn link
  },
  {
    name: 'Rishaanth Rajkumar',
    role: 'Co-Founder',
    image: 'src/components/icons/Rishaanth.jpeg',
    linkedin: 'https://www.linkedin.com/in/rishaanth', // LinkedIn link
  },
  {
    name: 'Mithunan Jayamohan',
    role: 'Co-Founder',
    image: 'src/components/icons/Mithunan.jpeg',
    linkedin: 'https://www.linkedin.com/in/mithunan', // LinkedIn link
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
                <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                  <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-xl text-primary mb-2">{member.name}</h3>
                    <p className="text-accent mb-3">{member.role}</p>
                  </div>

                  {/* LinkedIn Handle and Icon (hidden by default) */}
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white text-lg font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                      <FaLinkedin className="text-2xl" /> {/* LinkedIn Icon */}
                      <span>LinkedIn Profile</span>
                    </motion.a>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
