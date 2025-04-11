import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img 
            src="/favicon2.png" // or logo.jpg, logo.svg
            alt="Games 2025 Logo"
            className={styles.logo}
          />
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Games 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}