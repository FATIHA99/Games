"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './GiveawaySection.module.css';

const GiveawaySection = () => {
  // Countdown timer (3 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0) return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        
        clearInterval(timer);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.giveawaySection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>WIN A $500 GAMING GIVEAWAY!</h2>
          <p className={styles.subtitle}>Enter for a chance to win premium gaming gear</p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🎮</div>
              <h3>Premium Gaming Bundle</h3>
              <p>High-end gaming mouse, keyboard, and headset</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>5 Winners Chosen</h3>
              <p>We're selecting multiple lucky winners</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>⏱️</div>
              <h3>Ends Soon</h3>
              <p>Don't miss your chance to win</p>
            </div>
          </div>

          <Link 
            href="https://locked3.com/cl/i/8dkdjd" 
            className={styles.enterButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Participate now
            <span className={styles.buttonIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>

          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className={styles.countdownLabel}>Days</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className={styles.countdownLabel}>Hours</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className={styles.countdownLabel}>Minutes</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className={styles.countdownLabel}>Seconds</span>
            </div>
          </div>
        </div>
        
        <div className={styles.prizeImage}>
          {/* Replace with your actual image */}
          <img 
            src="/give.jpg" 
            alt="Gaming Giveaway Prize" 
            className={styles.image}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default GiveawaySection;