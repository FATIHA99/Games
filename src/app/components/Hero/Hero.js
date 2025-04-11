"use client"
import styles from './Hero.module.css';


export default function Hero() {

  return (
    <div className={styles.container}>
      <h1 className={`Kid Games ${styles.title} ${styles.animateTitle}`}>WELCOME TO <span className={` ${styles.Herospan} `}> GAMES 2025 </span></h1>
      <p className={`game ${styles.description} ${styles.animateDescription}`}>Explore the best games and have fun!</p>
      <a href="https://locked3.com/cl/i/8dkdjd" className={`${styles.customBtn}`}>Click here</a>
    </div>
  );
}