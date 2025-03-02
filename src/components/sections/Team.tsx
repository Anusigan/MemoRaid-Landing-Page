import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';

const teamData = [
  {
    name: 'Anusigan Sivananthan',
    role: 'Co-Founder & CEO',
    image: '/icons/Anusigan.jpeg',
    bio: 'Leading the vision and strategy for MemoRaid with expertise in neuroscience and AI.',
    linkedin: 'https://www.linkedin.com/in/anusigan-sivananthan-b3a0b1264/',
    github: 'https://github.com/anusigan',
    email: 'mailto:anusigan@memoraid.ai',
    specialty: 'Full-Stack Development',
    color: '#0D9488'
  },
  {
    name: 'Linushankaran Janarththanan',
    role: 'Co-Founder & CTO',
    image: '/icons/Linu.jpeg',
    bio: 'Architecting the technical foundation of our platform with cutting-edge machine learning models.',
    linkedin: 'https://www.linkedin.com/in/linushankaran-janarththanan-614456293/',
    github: 'https://github.com/linushankaran',
    email: 'mailto:linu@memoraid.ai',
    specialty: 'Full-Stack Development',
    color: '#0D9488'
  },
  {
    name: 'Shahinya Arumugam',
    role: 'Co-Founder & COO',
    image: '/icons/Shahinya.jpeg',
    bio: 'Overseeing operations and ensuring our technology transforms into impactful user experiences.',
    linkedin: 'https://www.linkedin.com/in/shahinya-arumugam-620921295/',
    github: 'https://github.com/shahinya',
    email: 'mailto:shahinya@memoraid.ai',
    specialty: 'Full-Stack Development',
    color: '#0D9488'
  },
  {
    name: 'F.J.Harishan Avinesh',
    role: 'Co-Founder & CSO',
    image: '/icons/Avinesh.jpeg',
    bio: 'Leading our scientific research initiatives and clinical validation studies.',
    linkedin: 'https://www.linkedin.com/in/harishan-avinesh-733b40299/',
    github: 'https://github.com/harishan',
    email: 'mailto:harishan@memoraid.ai',
    specialty: 'ML Development',
    color: '#0D9488'
  },
  {
    name: 'Rishaanth Rajkumar',
    role: 'Co-Founder & CDO',
    image: '/icons/Rishaanth.jpeg',
    bio: 'Creating the intuitive and accessible design language that powers our user interfaces.',
    linkedin: 'https://www.linkedin.com/in/rishaanth-rajkumar/',
    github: 'https://github.com/rishaanth',
    email: 'mailto:rishaanth@memoraid.ai',
    specialty: 'Full-Stack Development',
    color: '#0D9488'
  },
  {
    name: 'Mithunan Jayamohan',
    role: 'Co-Founder & CMO',
    image: '/icons/Mithunan.jpeg',
    bio: 'Developing our market strategy and building partnerships in the healthcare ecosystem.',
    linkedin: 'https://www.linkedin.com/in/mithunan-jeyamohan-26566328a/',
    github: 'https://github.com/mithunan',
    email: 'mailto:mithunan@memoraid.ai',
    specialty: 'ML Development',
    color: '#0D9488'
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const teamRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(teamRef, { once: false, amount: 0.2 });

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateY: -15,
      scale: 0.9
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const renderMemberCard = (member: typeof teamData[0], index: number) => {
    const isSelected = selectedMember === index;

    return (
      <motion.div 
        className="relative z-10"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5,
          z: 50,
          transition: { duration: 0.3 }
        }}
        layoutId={`card-${index}`}
      >
        <motion.div
          className="absolute -inset-px rounded-xl"
          style={{ 
            background: `linear-gradient(-45deg, ${member.color}, #FFFFFF)`,
            opacity: 0.6,
            zIndex: -1
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            backgroundPosition: { repeat: Infinity, repeatType: 'reverse', duration: 5 },
            opacity: { repeat: Infinity, repeatType: 'reverse', duration: 3 }
          }}
        />
        
        <div 
          className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl relative group cursor-pointer"
          onClick={() => setSelectedMember(index)}
        >
          {/* Animated overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center z-10"
            style={{ 
              background: `linear-gradient(135deg, ${member.color}40, #0d344540)` 
            }}
            whileHover={{ opacity: 0.15 }}
          >
            <motion.div 
              className="text-white text-xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              View Profile
            </motion.div>
          </motion.div>

          {/* Team member image with parallax effect */}
          <div className="relative h-64 overflow-hidden">
            <motion.div 
              className="absolute -inset-4 opacity-25 z-0"
              style={{ 
                background: `radial-gradient(circle, ${member.color}40 0%, transparent 70%)`,
                filter: 'blur(15px)'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 4,
                ease: 'easeInOut'
              }}
            />
            
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              style={{ 
                filter: 'contrast(1.05) brightness(1.05)'
              }}
            />

            {/* Specialty tag */}
            <motion.div
              className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium z-20"
              style={{ 
                background: `linear-gradient(135deg, ${member.color}, ${member.color}dd)`,
                color: '#fff',
                boxShadow: `0 4px 10px ${member.color}50`
              }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {member.specialty}
            </motion.div>
          </div>

          <div className="p-5 relative">
            <motion.h3 
              className="font-bold text-xl mb-1"
              style={{ color: member.color }}
            >
              {member.name}
            </motion.h3>
            
            <p className="text-gray-600 dark:text-gray-300 font-medium">{member.role}</p>
            
            {/* Animated underline */}
            <motion.div 
              className="h-1 rounded-full mt-3 mb-4"
              style={{ background: `linear-gradient(to right, ${member.color}, transparent)` }}
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />

            {/* Social media icons with hover animations */}
            <motion.div 
              className="absolute bottom-4 right-4 flex space-x-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full flex items-center justify-center"
                style={{ background: '#0A66C2' }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-white text-lg" />
              </motion.a>
              
              <motion.a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full flex items-center justify-center"
                style={{ background: '#24292e' }}
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-white text-lg" />
              </motion.a>
              
              <motion.a
                href={member.email}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full flex items-center justify-center"
                style={{ background: '#EA4335' }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="text-white text-lg" />
              </motion.a>
            </motion.div>
          </div>

          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div 
              className="absolute transform rotate-45 translate-x-8 -translate-y-5 w-16 h-16"
              style={{ background: member.color }}
            ></div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="team" className="relative py-24 overflow-hidden" ref={teamRef}>
      {/* Replace the animated background with a simple, non-animated gradient */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(135deg, #0d3445, #006a76)' 
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            World-class experts dedicated to advancing memory rehabilitation science through
            breakthrough technology and compassionate care.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {teamData.map((member, index) => renderMemberCard(member, index))}
        </motion.div>
      </div>

      {/* Expanded profile modal */}
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              layoutId={`card-${selectedMember}`}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <motion.div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(45deg, ${teamData[selectedMember].color}dd, ${teamData[selectedMember].color}66)`,
                      opacity: 0.3
                    }}
                  />
                  <motion.img 
                    src={teamData[selectedMember].image}
                    alt={teamData[selectedMember].name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'contrast(1.1)' }}
                    layoutId={`image-${selectedMember}`}
                  />
                </div>
                
                <div className="p-8 md:w-3/5">
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: teamData[selectedMember].color }}
                    layoutId={`title-${selectedMember}`}
                  >
                    {teamData[selectedMember].name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-500 dark:text-gray-400 mb-4 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {teamData[selectedMember].role}
                  </motion.p>
                  
                  <motion.div 
                    className="h-1 rounded-full mb-6"
                    style={{ background: `linear-gradient(to right, ${teamData[selectedMember].color}, transparent)` }}
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                  
                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {teamData[selectedMember].bio}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div 
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ 
                        background: `linear-gradient(135deg, ${teamData[selectedMember].color}22, ${teamData[selectedMember].color}44)`,
                        color: teamData[selectedMember].color
                      }}
                    >
                      {teamData[selectedMember].specialty}
                    </div>
                    
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <a 
                        href={teamData[selectedMember].linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium"
                        style={{ background: '#0A66C2' }}
                      >
                        <FaLinkedin /> LinkedIn
                      </a>
                      
                      <a 
                        href={teamData[selectedMember].github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium"
                        style={{ background: '#24292e' }}
                      >
                        <FaGithub /> GitHub
                      </a>
                      
                      <a 
                        href={teamData[selectedMember].email}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium"
                        style={{ background: '#EA4335' }}
                      >
                        <FaEnvelope /> Email
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                    onClick={() => setSelectedMember(null)}
                    whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Team;
