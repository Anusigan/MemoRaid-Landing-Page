import React, { ReactNode } from 'react';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      {/* Global animated background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
