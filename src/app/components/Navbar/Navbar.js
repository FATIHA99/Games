'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.navContainer}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo on the left */}
        <Link href="/" className={styles.logoLink}>
          <img 
            src="/favicon2.png"
            alt="Games 2025 Logo"
            className={styles.logo}
          />
        </Link>

        {/* Navigation links on the right */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <button 
            onClick={() => scrollToSection('discover')}
            className={`${styles.navLink} ${activeSection === 'discover' ? styles.activeLink : ''}`}
          >
            Discover Games
          </button>
          <button 
            onClick={() => scrollToSection('giveaway')}
            className={`${styles.navLink} ${activeSection === 'giveaway' ? styles.activeLink : ''}`}
          >
            Giveaway
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}>{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>
    </nav>
  );
}