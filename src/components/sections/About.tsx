"use client"

import { useState, useEffect } from "react"
import { Target, Users, Briefcase, Clock } from "lucide-react"
import AppShowcase from "./AppShowcase"

const About = () => {
  const [scrolling, setScrolling] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const stats = [
    { icon: Target, number: "Coming Soon", text: "Innovative Tools in Development" },
    { icon: Users, number: "Join Waitlist", text: "Thousands Awaiting Release" },
    { icon: Briefcase, number: "Expert Team", text: "Experienced Specialists Ready" },
    { icon: Clock, number: "24/7 Support", text: "Support on Launch" },
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

  return (
    <>
      <section
        id="about"
        className={`py-20 bg-white transition-all duration-700 ${scrolling ? "bg-opacity-0" : "bg-opacity-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Text Section */}
            <div className="transition-all duration-700 transform translate-y-0 opacity-100">
              <h2 className="text-3xl font-bold text-[#0d3445] mb-6">About MemoRaid</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MemoRaid is an innovative platform currently under development, dedicated to helping individuals recover
                from amnesia with state-of-the-art cognitive rehabilitation techniques and personalized support systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower individuals on their memory recovery journey, equipping them with the
                necessary tools, guidance, and a supportive community to rebuild their lives and memories.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, index) => (
                <div key={index} className="group transform transition-all duration-500 hover:scale-105">
                  <div className="flex flex-col items-center bg-[#0d3445]/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                    {item.icon && <item.icon className="w-8 h-8 text-[#0d3445] mb-3 animate-bounce" />}
                    <div className="text-2xl font-bold text-[#0d3445] mb-2 text-center">{item.number}</div>
                    <p className="text-sm text-gray-600 text-center">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AppShowcase></AppShowcase>

      {/* Achievements Section with Enhanced Animation */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0d3445] mb-12 text-center">Our Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Achievement */}
            <div className="group relative w-full transform transition-all duration-700 hover:scale-105">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-[#0d3445] transition-all duration-500 hover:shadow-2xl h-full">
                <div className="overflow-hidden rounded-xl mb-6 relative">
                  <img
                    src="/icons/teampic.jpeg"
                    alt="Team"
                    className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-4 transform transition-all duration-500">
                  <h3 className="text-2xl font-bold text-[#0d3445] text-center group-hover:scale-105 transition-transform duration-500">
                    Haxmas Finalists 2024
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed transition-all duration-500 group-hover:text-[#0d3445]">
                    Team MemoRaid was proud to be one of the finalists in Haxmas 2024, an innovative event organized by
                    Ascentic in collaboration with the Rotaract Club of IIT.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#0d3445] rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#0d3445] rounded-full animate-bounce delay-150" />
              </div>
            </div>

            {/* Second Achievement */}
            <div className="group relative w-full transform transition-all duration-700 hover:scale-105">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-4 border-[#0d3445] transition-all duration-500 hover:shadow-2xl h-full">
                <div className="overflow-hidden rounded-xl mb-6 relative">
                  <img
                    src="/icons/traveltech.jpeg"
                    alt="Arconic Ventures Finalists 2025"
                    className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-4 transform transition-all duration-500">
                  <h3 className="text-2xl font-bold text-[#0d3445] text-center group-hover:scale-105 transition-transform duration-500">
                    Arconic Ventures Finalists 2025
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed transition-all duration-500 group-hover:text-[#0d3445]">
                    Team MemoRaid made in to the finals of Travel Tech 3.0 organized by Arconic Ventures
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#0d3445] rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#0d3445] rounded-full animate-bounce delay-150" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Showcase Section - Using the new component */}
      
    </>
  )
}

export default About

