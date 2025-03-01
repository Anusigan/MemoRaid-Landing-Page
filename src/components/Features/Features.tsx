import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section 
      id="features" 
      className={`${styles.features} section-gradient-blue overlay-pattern-dots`}
    >
      <div className={styles.featuresContainer}>
        {/* ...existing content... */}
      </div>
    </section>
  );
};

export default Features;
