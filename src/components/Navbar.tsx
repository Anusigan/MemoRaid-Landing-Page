"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = ["Features", "About", "Team", "Research", "Blog"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 py-4 ${
        scrolling
          ? "bg-white/80 dark:bg-dark/90 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img src="/icons/logonobg.png" alt="MemoRaid" className="h-9" />
          <span className="text-xl font-bold text-[#0d3445] dark:text-white">MemoRaid</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative font-medium text-[#0d3445]/80 dark:text-white/80 hover:text-[#0d3445] dark:hover:text-white transition-colors group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0d3445] dark:bg-white transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="bg-[#0d3445] text-white dark:bg-white dark:text-[#0d3445] py-2 px-5 rounded-full hover:bg-[#0d3445]/90 dark:hover:bg-white/90 transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#0d3445] dark:text-white"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-gray-200 dark:border-dark-border bg-white/95 dark:bg-dark/95 backdrop-blur"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[#0d3445] dark:text-white/90 font-medium"
              >
                {link}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="#contact"
                className="block bg-[#0d3445] dark:bg-white text-white dark:text-[#0d3445] py-3 rounded-xl text-center font-medium"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
