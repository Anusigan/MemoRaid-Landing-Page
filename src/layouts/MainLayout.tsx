import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <AnimatedBackground />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
