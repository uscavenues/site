import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.subHeading}>
        <h3 className={styles.subText}>USC Avenues Consulting Group</h3>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.headingText}>
          USC&apos;s first-ever Consulting Group focused on Pre-Professional
          industries
        </h1>
      </div>
    </div>
  );
}
