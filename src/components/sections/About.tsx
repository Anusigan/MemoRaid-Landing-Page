import React, { useState, useEffect } from 'react';
import { Target, Users, Briefcase, Clock, Award, Star, CheckCircle } from 'lucide-react'; // Import additional icons
import { motion } from 'framer-motion'; // For adding animations

export default function About() {
  const [scrolling, setScrolling] = useState(false); // State to track scroll position

  const stats = [
    { icon: Target, number: 'Coming Soon', text: 'Innovative Tools in Development' },
    { icon: Users, number: 'Join Our Waitlist', text: 'Thousands Awaiting Release' },
    { icon: Briefcase, number: 'Expert Team', text: 'Experienced Specialists Ready' },
    { icon: Clock, number: '24/7', text: 'Support on Launch' },
  ];

  const achievements = [
    { icon: Award, title: 'Industry Recognition', description: 'Awarded for innovative solutions in cognitive rehabilitation.' },
    { icon: Star, title: 'Community Impact', description: 'Helped hundreds of individuals in cognitive recovery.' },
    { icon: CheckCircle, title: 'Research-Driven', description: 'Built on cutting-edge neuroscience research.' },
  ];

  // Track scroll position to change background visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this threshold as needed
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <>
        <section
            id="about"
            className={`py-20 bg-white ${scrolling ? 'bg-opacity-0' : 'bg-opacity-100'}`} // Background opacity change
            style={{
              backgroundImage: `url('')`, // Background image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Section */}
              <motion.div
                  className="animate-fade-in"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
              >
                <h2 className="text-3xl font-bold text-[#0d3445] mb-6">About MemoRaid</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  MemoRaid is an innovative platform currently under development, dedicated to helping individuals recover from amnesia
                  with state-of-the-art cognitive rehabilitation techniques and personalized support systems.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to empower individuals on their memory recovery journey, equipping them with the necessary tools, guidance,
                  and a supportive community to rebuild their lives and memories.
                </p>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
              >
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center bg-[#0d3445]/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.3, // Delay for each stat to appear sequentially
                          type: 'spring',
                          stiffness: 100, // Bounce effect
                        }}
                    >
                      <item.icon className="w-8 h-8 text-[#0d3445] mb-3" /> {/* Reduced Icon Size */}
                      <div className="text-2xl font-bold text-[#0d3445] mb-2">{item.number}</div> {/* Reduced Number Text Size */}
                      <p className="text-sm text-gray-600 text-center">{item.text}</p> {/* Reduced Text Size */}
                    </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0d3445] mb-8 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                  <motion.div
                      key={index}
                      className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <achievement.icon className="w-10 h-10 text-[#0d3445] mb-4" />
                    <h3 className="text-xl font-semibold text-[#0d3445] mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{achievement.description}</p>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
  );
}
