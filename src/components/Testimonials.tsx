import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fix the Heroicons import to use the v2 syntax
import { CheckIcon, XMarkIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Enhanced pricing plans with both monthly and yearly prices
const plans = [
  {
    id: "basic",
    name: "Basic",
    price: {
      monthly: "Free",
      yearly: "Free"
    },
    billingPeriod: {
      monthly: "Forever",
      yearly: "Forever"
    },
    tagline: "For individuals getting started",
    description: "Get started with essential memory rehabilitation tools for personal use.",
    color: "from-blue-400 to-blue-600",
    features: {
      included: [
        "Core memory exercises",
        "Basic AI chatbot assistance",
        "Progress tracking dashboard",
        "Community support forum",
      ],
      excluded: [
        "Advanced analytics",
        "Personalized memory programs",
        "Priority support",
        "Premium content library"
      ]
    },
    callToAction: "Join Waitlist",
    popular: false,
    comingSoon: true
  },
  {
    id: "premium",
    name: "Premium",
    price: {
      monthly: "$9.99",
      yearly: "$95.88"
    },
    billingPeriod: {
      monthly: "per month",
      yearly: "per year"
    },
    tagline: "Most popular choice for individuals",
    description: "Enhanced features with personalized rehabilitation programs.",
    color: "from-indigo-500 to-purple-600",
    features: {
      included: [
        "Everything in Basic",
        "Personalized memory exercises",
        "Advanced AI conversation model",
        "Detailed progress analytics",
        "Priority email support",
        "Premium content library",
        "Memory journal with AI insights"
      ],
      excluded: [
        "White-glove onboarding",
        "Clinical progress reports",
        "Custom organization branding"
      ]
    },
    callToAction: "Pre-Register Now",
    popular: true,
    comingSoon: true,
    discount: {
      monthly: null,
      yearly: "Save 20% with annual plan"
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom"
    },
    billingPeriod: {
      monthly: "tailored pricing",
      yearly: "annual contract"
    },
    tagline: "For healthcare organizations",
    description: "Full-featured solution with clinical integrations and white-label options.",
    color: "from-green-500 to-emerald-700",
    features: {
      included: [
        "Everything in Premium",
        "Custom organization branding",
        "Clinical progress reports",
        "White-glove onboarding",
        "EHR/EMR integration",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom rehabilitation programs",
        "Staff training and workshops"
      ],
      excluded: []
    },
    callToAction: "Contact Us",
    popular: false,
    comingSoon: false
  }
];

export default function BusinessModel() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  
  // Get current pricing based on billing period selection
  const getCurrentPricing = (plan: any) => {
    const period = isYearly ? 'yearly' : 'monthly';
    return {
      price: plan.price[period],
      billingPeriod: plan.billingPeriod[period],
      discount: plan.discount ? plan.discount[period] : null
    };
  };
  
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white text-gray-900">
      {/* Animated background elements - adjusted for white background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Decorative elements with updated colors */}
        <div className="absolute top-1/4 left-1/3 transform -translate-y-1/2">
          <svg width="40" height="40" viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30 animate-spin-slow">
            <path d="M182 92C182 142.258 141.258 183 91 183C40.7421 183 0 142.258 0 92C0 41.7421 40.7421 1 91 1C141.258 1 182 41.7421 182 92Z" stroke="rgba(13, 52, 69, 0.3)" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-1/3 transform -translate-y-1/2">
          <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20 animate-pulse">
            <rect x="1" y="1" width="118" height="118" rx="24" stroke="rgba(13, 52, 69, 0.3)" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header - updated colors for white background */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <SparklesIcon className="h-6 w-6 text-indigo-500" />
            <span className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Subscription Plans</span>
            <SparklesIcon className="h-6 w-6 text-indigo-500" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold mb-6 text-gray-900 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Choose the Perfect Plan for Your{" "}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d3445] to-indigo-600">
                Recovery Journey
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0d3445] to-indigo-600 rounded-full"></span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Transparent pricing designed to support your memory rehabilitation needs,
            whether you're an individual or an organization.
          </motion.p>

          {/* Billing toggle - adjusted for white background */}
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative inline-flex items-center p-1 bg-gray-100 rounded-full">
              <button 
                className={`${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'} px-4 py-2 text-sm transition`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-12 h-6 rounded-full focus:outline-none"
              >
                <div 
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${isYearly ? 'bg-indigo-500' : 'bg-[#0d3445]'}`}
                ></div>
                <div 
                  className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-all duration-300
                    ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}
                ></div>
              </button>
              
              <button 
                className={`${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'} px-4 py-2 text-sm transition flex items-center gap-1`}
                onClick={() => setIsYearly(true)}
              >
                Yearly <span className="text-green-600 text-xs font-bold">Save 20%</span>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing cards - now using #0d3445 as background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <AnimatePresence>
            {plans.map((plan, index) => {
              const currentPricing = getCurrentPricing(plan);
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1 + 0.6
                  }}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative flex flex-col rounded-3xl overflow-hidden
                    ${hoveredPlan === plan.id ? 'shadow-xl shadow-[#0d3445]/30 ring-2 ring-offset-2 ring-offset-white' : 'shadow-lg'} 
                    ${plan.popular ? 'ring-indigo-500 scale-105 z-10' : 'ring-transparent'} 
                    transition-all duration-300`}
                >
                  {/* Card background - now using #0d3445 */}
                  <div className="absolute inset-0 bg-[#0d3445]"></div>
                  
                  {/* Decorative header */}
                  <div className={`h-2 w-full bg-gradient-to-r ${plan.color}`}></div>
                  
                  {/* Popular tag */}
                  {plan.popular && (
                    <div className="absolute -top-5 -right-5 transform rotate-45">
                      <div className="text-xs text-white font-bold py-1 px-12 bg-indigo-600 shadow-md">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="p-8 sm:p-10 relative flex-grow">
                    {/* Price tag */}
                    <div className="flex items-baseline mb-8">
                      <div className="text-4xl font-extrabold text-white tracking-tight">
                        {currentPricing.price}
                      </div>
                      <div className="ml-1 text-xl font-medium text-blue-200">
                        {currentPricing.billingPeriod}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    
                    <p className="text-sm text-blue-300 font-medium mb-4">
                      {plan.tagline}
                    </p>
                    
                    <p className="text-base text-blue-100 mb-8">
                      {plan.description}
                    </p>

                    {/* Feature list */}
                    <div className="mb-10">
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                        What's included
                      </h4>
                      
                      <ul className="space-y-4">
                        {plan.features.included.map((feature, i) => (
                          <motion.li 
                            key={`${plan.id}-included-${i}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 1 }}
                            className="flex items-start"
                          >
                            <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center bg-gradient-to-r ${plan.color} text-white`}>
                              <CheckIcon className="h-4 w-4" />
                            </div>
                            <span className="ml-3 text-base text-blue-100">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                        
                        {plan.features.excluded.map((feature, i) => (
                          <motion.li 
                            key={`${plan.id}-excluded-${i}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (plan.features.included.length + i) * 0.1 + 1 }}
                            className="flex items-start text-blue-200/60"
                          >
                            <XMarkIcon className="h-6 w-6 flex-shrink-0" />
                            <span className="ml-3 text-base">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Discount label */}
                  {currentPricing.discount && hoveredPlan === plan.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-10 right-8 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full transform rotate-3"
                    >
                      {currentPricing.discount}
                    </motion.div>
                  )}

                  {/* Call to action */}
                  <div className="px-6 pt-0 pb-8">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-8 rounded-xl text-white font-medium flex items-center justify-center space-x-2 
                        ${plan.comingSoon 
                          ? 'bg-gradient-to-r from-gray-500 to-gray-600' 
                          : `bg-gradient-to-r ${plan.color} hover:shadow-lg`
                        }
                        transition-all duration-200`}
                    >
                      <span>{plan.callToAction}</span>
                      <ArrowRightIcon className="h-5 w-5" />
                    </motion.button>
                    
                    {plan.comingSoon && (
                      <motion.p 
                        className="text-center text-sm mt-3 text-blue-200"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2 
                        }}
                      >
                        Coming soon - Join the waitlist
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

       

        

        
      </div>
    </section>
  );
}
