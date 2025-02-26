import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={` Kid Games ${styles.title} `}>WELCOME TO GAMES 2025</h1>
      <p className={` game ${styles.description}`}>Explore the best games and have fun!</p>
      <button  className={` ${styles.customBtn} `}>Click here </button>

    </div>
  );
}