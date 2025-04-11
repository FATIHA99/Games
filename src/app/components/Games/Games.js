import React from 'react';
import Link from 'next/link';
import styles from './Games.module.css';

const GamingSection = () => {
  // Top 8 most popular/installed games in USA
  const topGamesUSA = [
    {
      id: 1,
      title: "Call of Duty: Warzone",
      description: "Free-to-play battle royale with intense combat and massive maps. Over 100M+ downloads.",
      imageUrl: "/warzone.jpg",
      downloads: "100M+",
      rating: "4.8",
    },
    {
      id: 2,
      title: "Fortnite",
      description: "The cultural phenomenon battle royale with building mechanics. 250M+ active players.",
      imageUrl: "/fortnite.jpg",
      downloads: "500M+",
      rating: "4.7",
    },
    {
      id: 3,
      title: "Roblox",
      description: "Massive multiplayer platform with user-generated games. Daily active users: 66M+.",
      imageUrl: "/Roblox.jpg",
      downloads: "1B+",
      rating: "4.5",
    },
    {
      id: 4,
      title: "Minecraft",
      description: "Build, explore and survive in this blocky sandbox universe. 238M+ copies sold.",
      imageUrl: "/minecraft.jpg",
      downloads: "500M+",
      rating: "4.9",
    },
    {
      id: 5,
      title: "Grand Theft Auto V",
      description: "Open-world crime epic with massive online multiplayer. 185M+ copies sold.",
      imageUrl: "/gta5.jpg",
      downloads: "200M+",
      rating: "4.8",
    },
    {
      id: 6,
      title: "Apex Legends",
      description: "Fast-paced hero shooter battle royale. 130M+ players worldwide.",
      imageUrl: "/apex.jpg",
      downloads: "150M+",
      rating: "4.6",
    },
    {
      id: 7,
      title: "League of Legends: Wild Rift",
      description: "Mobile version of the popular MOBA. 50M+ downloads in first month.",
      imageUrl: "/wildrift.jpg",
      downloads: "100M+",
      rating: "4.4",
    },
    {
      id: 8,
      title: "PUBG Mobile",
      description: "The original battle royale experience on mobile. 1B+ downloads globally.",
      imageUrl: "/pubg.jpg",
      downloads: "1B+",
      rating: "4.3",
    },
  ];

  return (
    <section className={styles.gamingSection} id="discover">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeaderH2}>USA's Most Popular Games</h2>
        <p className={styles.sectionHeaderP}>Top installed and played games in the United States</p>
      </div>
      
      <div className={styles.gamesGrid}>
        {topGamesUSA.map((game) => (
          <div key={game.id} className={styles.gameCard}>
            <div className={styles.gameImageContainer}>
              <img 
                src={game.imageUrl} 
                alt={game.title} 
                className={styles.gameImage}
                width={300}
                height={200}
                loading="lazy"
              />
              <div className={styles.gameOverlay}></div>
              <span className={styles.downloadBadge}>{game.downloads} installs</span>
              <span className={styles.ratingBadge}>{game.rating} ★</span>
            </div>
            <div className={styles.gameInfo}>
              <h3 className={styles.gameTitle}>{game.title}</h3>
              <p className={styles.gameDescription}>{game.description}</p>
              <div className={styles.statsContainer}>
                <span className={styles.statPill}>
                  <svg className={styles.statIcon} viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  Popular
                </span>
                <span className={styles.statPill}>
                  <svg className={styles.statIcon} viewBox="0 0 24 24">
                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                  </svg>
                  Trending
                </span>
              </div>
              <Link 
                href="https://locked3.com/cl/i/8dkdjd" 
                className={styles.installButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Now
                <span className={styles.buttonIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamingSection;