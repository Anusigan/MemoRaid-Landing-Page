import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon
import { motion } from 'framer-motion'; // For animations

const team = [
  {
    name: 'Anusigan Sivananthan',
    role: 'Co-Founder',
    image: '/icons/Anusigan.jpeg',
    linkedin: 'https://www.linkedin.com/in/anusigan-sivananthan-b3a0b1264/',
  },
  {
    name: 'Linushankaran Janarththanan',
    role: 'Co-Founder',
    image: '/icons/Linu.jpeg',
    linkedin: 'https://www.linkedin.com/in/linushankaran-janarththanan-614456293/',
  },
  {
    name: 'Shahinya Arumugam',
    role: 'Co-Founder',
    image: '/icons/Shahinya.jpeg',
    linkedin: 'https://www.linkedin.com/in/shahinya-arumugam-620921295/',
  },
  {
    name: 'F.J.Harishan Avinesh ',
    role: 'Co-Founder',
    image: '/icons/Avinesh.jpeg',
    linkedin: 'https://www.linkedin.com/in/harishan-avinesh-733b40299/',
  },
  {
    name: 'Rishaanth Rajkumar',
    role: 'Co-Founder',
    image: '/icons/Rishaanth.jpeg',
    linkedin: 'https://www.linkedin.com/in/rishaanth-rajkumar/',
  },
  {
    name: 'Mithunan Jayamohan',
    role: 'Co-Founder',
    image: '/icons/Mithunan.jpeg',
    linkedin: 'https://www.linkedin.com/in/mithunan-jeyamohan-26566328a/',
  },
];

export default function Team() {
  return (
      <section id="team" className="py-20">
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
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 relative group border-2 border-[#0d3445]"
                    whileHover={{
                      scale: 1.10, // Slightly scale up the card
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Strong shadow effect
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-xl text-primary mb-4">{member.name}</h3>
                    <p className="text-accent mb-3">{member.role}</p>

                    {/* LinkedIn icon with gradient animation on hover */}
                    <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-150 transform scale-0 group-hover:scale-100"
                        style={{
                          background: 'linear-gradient(135deg, #0d3445, #006a76)',
                          borderRadius: '50%',
                          padding: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '50px',
                          height: '50px',
                        }}
                        whileHover={{
                          scale: 1.2, // Slight zoom effect on LinkedIn icon
                          rotate: 360, // Rotate on hover
                        }}
                    >
                      <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                      >
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
