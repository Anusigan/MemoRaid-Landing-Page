import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star, Zap, Shield, Award, ArrowRight } from 'lucide-react';
import styles from './Pricing.module.css';

const SubscriptionPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  
  // Handle toggle change with animation
  const handlePricingToggle = () => {
    setIsChanging(true);
    setTimeout(() => {
      setIsAnnual(!isAnnual);
      setIsChanging(false);
    }, 300);
  };
  
  const plans = [
    {
      name: "Basic",
      tagline: "For individual users",
      price: "Free",
      savings: "",
      description: "Essential features for memory improvement",
      icon: <Shield className={styles.planIcon} size={24} />,
      color: "basic",
      popular: false,
      features: [
        "Basic memory exercises",
        "Progress tracking",
        "Memory journal",
        "Community access",
        "Email support",
      ],
      buttonText: "Get Started",
      buttonDisabled: false,
    },
    {
      name: "Premium",
      tagline: "For dedicated users",
      monthlyPrice: "$6.99",
      annualPrice: "$59.99",
      price: isAnnual ? "$59.99" : "$6.99",
      period: isAnnual ? "/year" : "/month",
      savings: isAnnual ? "Save 30%" : "",
      description: "Advanced features for optimal recovery",
      icon: <Star className={styles.planIcon} size={24} />,
      color: "premium",
      popular: true,
      features: [
        "Everything in Basic",
        "AI personalization",
        "Advanced analytics",
        "Family member access",
        "Unlimited exercises",
        "Priority support",
      ],
      buttonText: "Go Premium",
      buttonDisabled: false,
    },
    {
      name: "Enterprise",
      tagline: "For healthcare providers",
      price: "Custom",
      description: "Comprehensive solution for organizations",
      icon: <Award className={styles.planIcon} size={24} />,
      color: "enterprise",
      popular: false,
      features: [
        "Everything in Premium",
        "Patient management",
        "Multiple practitioner accounts",
        "Custom exercise creation",
        "White labeling options",
        "API access",
        "Dedicated account manager",
      ],
      buttonText: "Contact Us",
      buttonDisabled: false,
    },
  ];

  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -20,
      boxShadow: "0 25px 50px -12px rgba(13, 52, 69, 0.4)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section id="plans" className={styles.pricingSection}>
      <motion.div 
        className={styles.floatingCircle}
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <motion.div 
        className={styles.floatingCircle2}
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          delay: 0.5
        }}
      />
      <div className={styles.container}>
        {/* Section Heading */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Choose Your Plan</h2>
          <p>Find the perfect solution to enhance your memory recovery journey</p>
        </motion.div>
          
        {/* Enhanced Pricing Toggle */}
        <div className={styles.pricingToggleContainer}>
          <motion.div 
            className={styles.pricingToggle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className={!isAnnual ? styles.activeType : ''}>Monthly</span>
            <div className={styles.toggleWrapper}>
              <label className={styles.switch}>
                <input 
                  type="checkbox" 
                  checked={isAnnual} 
                  onChange={handlePricingToggle}
                />
                <motion.span 
                  className={styles.slider}
                  animate={isAnnual ? { opacity: 1 } : { opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </label>
            </div>
            <span className={isAnnual ? styles.activeType : ''}>
              Annually
              {isAnnual && (
                <motion.div 
                  className={styles.savingsBadge}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: [0, -5, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 0.7,
                    times: [0, 0.3, 0.5, 0.7, 1] 
                  }}
                >
                  Save 30%
                </motion.div>
              )}
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div 
          className={styles.pricingCards}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`${styles.pricingCard} ${plan.popular ? styles.popularPlan : ''} ${styles[`${plan.color}Card`]}`}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              {plan.popular && (
                <motion.div 
                  className={styles.popularBadge}
                  animate={{ 
                    y: [0, -4, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <Zap size={14} />
                  <span>Most Popular</span>
                </motion.div>
              )}
              
              <div className={styles.planHeader}>
                <motion.div
                  animate={plan.popular ? floatingAnimation : {}}
                >
                  {plan.icon}
                </motion.div>
                <h3>{plan.name}</h3>
                <p className={styles.tagline}>{plan.tagline}</p>
              </div>
              
              <div className={styles.planPrice}>
                {plan.name === "Premium" && (
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={isAnnual ? 'annual' : 'monthly'} 
                      className={styles.priceDisplay}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={styles.currency}>$</span>
                      <motion.span 
                        className={styles.amount}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {isAnnual ? '59.99' : '6.99'}
                      </motion.span>
                      <span className={styles.period}>
                        {isAnnual ? '/year' : '/month'}
                      </span>
                      
                      {isAnnual && (
                        <motion.div 
                          className={styles.savingsTag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            rotate: [0, -3, 3, 0]
                          }}
                          transition={{ 
                            delay: 0.2,
                            duration: 0.6,
                            rotate: {
                              repeat: Infinity,
                              repeatType: "reverse",
                              duration: 2,
                              delay: 1
                            }
                          }}
                        >
                          Save 30%
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
                
                {plan.name !== "Premium" && (
                  <>
                    <span className={styles.currency}>
                      {plan.price !== "Custom" && "$"}
                    </span>
                    <motion.span 
                      className={styles.amount}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className={styles.period}>{plan.period || ""}</span>
                  </>
                )}
              </div>
              
              <p className={styles.planDescription}>{plan.description}</p>

              <ul className={styles.planFeatures}>
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    variants={featureVariants}
                    custom={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircle className={styles.featureIcon} size={16} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className={styles.planButton}
                disabled={plan.buttonDisabled}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(13, 52, 69, 0.5)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{plan.buttonText}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.button>
              
              {plan.popular && (
                <motion.div 
                  className={styles.cardGlow}
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Satisfaction Guarantee */}
        <motion.div 
          className={styles.guarantee}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(13, 52, 69, 0.2)" }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <Shield className={styles.guaranteeIcon} size={28} />
          </motion.div>
          <div>
            <h4>30-Day Money-Back Guarantee</h4>
            <p>Try MemoRaid Premium risk-free. Not satisfied? Get a full refund within 30 days.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
