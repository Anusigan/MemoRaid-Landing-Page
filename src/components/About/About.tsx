import React from 'react';
import styles from './About.module.css';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa'; // Add this import

const About = () => {
  // ...existing code...

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          {/* ...existing about content... */}
          
          {/* Store Badges Section - Added from AppShowcase */}
          <div className={styles.storeBadges}>
            <div className={styles.badges}>
              {/* App Store Button */}
              <button className={styles.storeButton}>
                <FaAppStore className={styles.storeIcon} />
                <div className={styles.storeText}>
                  <div className={styles.storeTextSmall}>Coming soon on</div>
                  <div className={styles.storeTextLarge}>App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button className={styles.storeButton}>
                <FaGooglePlay className={styles.storeIcon} />
                <div className={styles.storeText}>
                  <div className={styles.storeTextSmall}>Coming soon on</div>
                  <div className={styles.storeTextLarge}>Google Play</div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Achievements section */}
          <div className={styles.achievements}>
            {/* ...existing achievements code... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
