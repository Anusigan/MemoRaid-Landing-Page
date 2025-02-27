import React from 'react';
import styles from './NavLink.module.css';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const NavLink: React.FC<NavLinkProps> = ({ id, label, icon: Icon, isActive, onClick, index }) => {
  return (
    <a 
      href={`#${id}`}
      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className={styles.linkContent}>
        <div className={styles.iconBox}>
          <Icon size={18} className={styles.icon} />
          {isActive && <div className={styles.iconGlow} />}
        </div>
        <span className={styles.linkText}>{label}</span>
      </div>
      <div className={styles.linkUnderline} />
      {isActive && (
        <div className={styles.activePing}>
          <div className={styles.pingInner} />
        </div>
      )}
    </a>
  );
};

export default NavLink;
