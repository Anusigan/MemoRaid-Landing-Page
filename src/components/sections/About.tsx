"use client"

import { useState, useEffect } from "react"
import { Target, Users, Briefcase, Clock } from "lucide-react"
import { motion } from "framer-motion"
import ParticlesBackground from "../../components/AppShowcase/ParticlesBackground"
import AppShowcase from "../../components/AppShowcase/AppShowcase"

const About = () => {
  const [scrolling, setScrolling] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { 
      icon: Target, 
      number: "Coming Soon", 
      text: "Innovative Tools in Development", 
      gradient: "from-[#0d3445]/80 to-[#0d3445]",
      delay: 0 
    },
    { 
      icon: Users, 
      number: "Join Waitlist", 
      text: "Thousands Awaiting Release", 
      gradient: "from-[#0d3445]/70 to-[#0d3445]",
      delay: 0.2 
    },
    { 
      icon: Briefcase, 
      number: "Expert Team", 
      text: "Experienced Specialists Ready", 
      gradient: "from-[#0d3445]/60 to-[#0d3445]",
      delay: 0.4 
    },
    { 
      icon: Clock, 
      number: "24/7 Support", 
      text: "Support on Launch", 
      gradient: "from-[#0d3445]/50 to-[#0d3445]",
      delay: 0.6 
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true)
        setIsVisible(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const floatingAnimation = {
    y: ['-5px', '5px'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <section
        id="about"
        className="py-32 relative overflow-hidden bg-white"
      >
        {/* Add particles background container */}
        <div className="absolute inset-0 overflow-hidden z-0 opacity-60">
          <ParticlesBackground />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* About Text Section */}
            <motion.div 
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl font-bold text-[#0d3445] dark:text-white mb-8 relative"
              >
                About MemoRaid
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-3 left-0 h-1.5 bg-[#0d3445] dark:bg-white"
                ></motion.span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                MemoRaid is an innovative platform currently under development, dedicated to helping individuals recover
                from amnesia with state-of-the-art cognitive rehabilitation techniques and personalized support systems.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Our mission is to empower individuals on their memory recovery journey, equipping them with the
                necessary tools, guidance, and a supportive community to rebuild their lives and memories.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="pt-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-[#0d3445] dark:bg-[#0d3445]/80 text-white rounded-full font-medium transition-all
                            shadow-lg shadow-[#0d3445]/20 hover:shadow-xl hover:shadow-[#0d3445]/30"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <div className="perspective-1000 relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                  className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-[#0d3445]/20 dark:border-white/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </div>

              {/* Properly structured grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transform-gpu">
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ 
                      opacity: 1,
                      y: index % 2 === 0 ? 0 : 20, // Stagger even/odd for visual interest
                      transition: { 
                        type: "spring", 
                        stiffness: 50, 
                        delay: item.delay,
                        duration: 0.8
                      }
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.03, 
                      transition: { duration: 0.3 },
                      zIndex: 20,
                    }}
                    className={`relative transform-gpu ${index % 2 === 0 ? 'md:-mt-0' : 'md:mt-8'}`}
                  >
                    {/* Glowing shadow underneath */}
                    <div className="absolute -bottom-4 inset-x-4 h-12 bg-[#0d3445]/20 blur-xl rounded-full"></div>
                    
                    {/* Card with glass effect */}
                    <div className={`w-full aspect-[4/3] rounded-2xl overflow-hidden relative backdrop-blur-sm
                                  bg-gradient-to-br ${item.gradient}
                                  shadow-lg shadow-[#0d3445]/20 group`}>
                      
                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-xl border border-white/30 overflow-hidden">
                        <motion.div 
                          className="absolute inset-0 opacity-30"
                          animate={{
                            background: [
                              'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)',
                              'linear-gradient(90deg, transparent 100%, white 100%, transparent 100%)'
                            ],
                            left: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 4
                          }}
                        />
                      </div>
                      
                      <div className="absolute inset-0.5 rounded-xl bg-gradient-to-br from-[#0d3445]/90 to-[#0d3445] backdrop-blur-md p-6 flex flex-col items-center justify-center">
                        {/* Animated particles */}
                        <div className="absolute inset-0 overflow-hidden opacity-30">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                              }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                              }}
                              transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                repeatDelay: Math.random()
                              }}
                            />
                          ))}
                        </div>

                        {/* Icon with pulsating effect */}
                        <div className="relative mb-4 transform transition-all duration-300 group-hover:scale-110">
                          <div className="absolute inset-0 bg-[#0d3445] rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                          <div className="relative bg-white p-4 rounded-full shadow-xl">
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                              }}
                            >
                              <item.icon className="w-8 h-8 text-[#0d3445]" />
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="text-center">
                          <motion.h3 
                            className="text-2xl font-bold text-white mb-2"
                            animate={{ opacity: [0.9, 1], y: [0, -2, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {item.number}
                          </motion.h3>
                          <p className="text-sm text-white/80 font-medium">{item.text}</p>
                        </div>

                        {/* Bottom decorative line */}
                        <motion.div 
                          className="absolute bottom-4 left-1/2 h-0.5 bg-white/30"
                          initial={{ width: 0 }}
                          whileInView={{ width: "40%" }}
                          viewport={{ once: true }}
                          transition={{ delay: item.delay + 0.6, duration: 0.8 }}
                          style={{ x: '-50%' }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <AppShowcase />

      {/* Achievements Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Remove particles background for achievements section */}
        
        {/* Remove decorative background elements with blue tints */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0d3445] dark:text-white mb-6 relative inline-block">
              Our Achievements
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-3 left-0 h-1.5 bg-[#0d3445] dark:bg-white"
              ></motion.span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">Milestones that mark our journey of innovation and excellence</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {['Haxmas Finalists 2024', 'Arconic Ventures Finalists 2025'].map((title, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  transition: { duration: 0.3 }
                }}
                className="group relative w-full"
              >
                <div className="absolute inset-0 bg-[#0d3445] dark:bg-white/30 rounded-3xl blur-md opacity-20 group-hover:opacity-30 transition-all duration-300 transform group-hover:scale-[1.02] -z-10"></div>
                
                <motion.div 
                  className="bg-white dark:bg-dark-card p-1 rounded-3xl shadow-xl h-full overflow-hidden 
                          backdrop-blur-sm border border-[#0d3445]/10 dark:border-white/10
                          transform transition duration-700
                          group-hover:border-[#0d3445]/30 dark:group-hover:border-white/30"
                >
                  <div className="overflow-hidden rounded-2xl relative">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8 }}
                      src={index === 0 ? "/icons/teampic.jpeg" : "/icons/traveltech.jpeg"}
                      alt={title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d3445] to-transparent opacity-50"></div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-6"
                    >
                      <span className="bg-white/90 backdrop-blur-sm text-[#0d3445] px-4 py-2 rounded-full text-sm font-bold">
                        {index === 0 ? "Innovation Award" : "Excellence in Tech"}
                      </span>
                    </motion.div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-bold text-[#0d3445] dark:text-white">
                      {title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {index === 0 
                        ? "Team MemoRaid was proud to be one of the finalists in Haxmas 2024, an innovative event organized by Ascentic in collaboration with the Rotaract Club of IIT."
                        : "Team MemoRaid made it to the finals of Travel Tech 3.0 organized by Arconic Ventures, showcasing our commitment to transformative technology solutions."}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-[#0d3445] dark:text-white font-medium"
                    >
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About

