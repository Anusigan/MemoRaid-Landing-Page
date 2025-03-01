import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Shield, Award, ArrowRight } from 'lucide-react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "Basic",
      tagline: "For individual users",
      price: isAnnual ? "Free" : "Free",
      savings: "",
      description: "Essential features for memory improvement",
      icon: <Shield className={styles.planIcon} size={24} />,
      color: "blue",
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
      price: isAnnual ? "$59.99" : "$6.99",
      period: isAnnual ? "/year" : "/month",
      savings: isAnnual ? "Save 30%" : "",
      description: "Advanced features for optimal recovery",
      icon: <Star className={styles.planIcon} size={24} />,
      color: "purple",
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
      color: "gold",
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

  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
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
      y: -15,
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

  // Add cursor compatibility to motion elements
  useEffect(() => {
    // Add framer-cursor-target class to all interactive motion elements
    document.querySelectorAll('.framer-motion-element').forEach(el => {
      el.classList.add('framer-cursor-target');
    });
    
    return () => {
      document.querySelectorAll('.framer-cursor-target').forEach(el => {
        el.classList.remove('framer-cursor-target');
      });
    };
  }, []);

  return (
    <section id="plans" className={styles.pricingSection}>
      <div className={styles.container}>
        {/* Ensure this div doesn't interfere with cursor */}
        <div className={styles.cursorCompatLayer}></div>
        
        {/* Section Heading */}
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Choose Your Plan</h2>
          <p>Find the perfect solution to enhance your memory recovery journey</p>
          
          {/* Pricing Toggle */}
          <div className={styles.pricingToggle}>
            <span className={!isAnnual ? styles.activeType : ''}>Monthly</span>
            <label className={styles.switch}>
              <input 
                type="checkbox" 
                checked={isAnnual} 
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <span className={styles.slider}></span>
            </label>
            <span className={isAnnual ? styles.activeType : ''}>
              Annually
              <motion.div 
                className={styles.savingsBadge}
                animate={{ scale: isAnnual ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5 }}
              >
                Save 30%
              </motion.div>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className={`${styles.pricingCards} framer-motion-element`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`${styles.pricingCard} ${plan.popular ? styles.popularPlan : ''} ${styles[`${plan.color}Card`]} framer-motion-element`}
              variants={cardVariants}
              whileHover="hover"
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  <Zap size={14} />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className={styles.planHeader}>
                {plan.icon}
                <h3>{plan.name}</h3>
                <p className={styles.tagline}>{plan.tagline}</p>
              </div>
              
              <div className={styles.planPrice}>
                <span className={styles.currency}>
                  {plan.price !== "Custom" && "$"}
                </span>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.period}>{plan.period || ""}</span>
                
                {plan.savings && (
                  <motion.div 
                    className={styles.savingsTag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {plan.savings}
                  </motion.div>
                )}
              </div>
              
              <p className={styles.planDescription}>{plan.description}</p>

              <ul className={styles.planFeatures}>
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    variants={featureVariants}
                    custom={i}
                  >
                    <CheckCircle className={styles.featureIcon} size={16} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className={`${styles.planButton} framer-motion-element`}
                disabled={plan.buttonDisabled}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight size={16} />
              </motion.button>
              
              {plan.name === "Premium" && (
                <motion.div 
                  className={styles.cardGlow}
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 5,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Shield className={styles.guaranteeIcon} size={28} />
          <div>
            <h4>30-Day Money-Back Guarantee</h4>
            <p>Try MemoRaid Premium risk-free. Not satisfied? Get a full refund within 30 days.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
