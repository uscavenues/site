import styles from "../styles/client-interest-form/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.subHeading}>
        <h3 className={styles.subText}>USC Avenues Consulting Group</h3>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.headingText}>
          USC&apos;s First-Ever Consulting Group Focused on Pre-Professional
          Industries
        </h1>
      </div>
      <div className={styles.desc}>
        <p className={styles.descText}>
          We are USC’s first-ever consulting group focusing on pre-professional
          industries such as <span className={styles.boxedText}>law</span>,{" "}
          <span className={styles.boxedText}>medicine</span>,{" "}
          <span className={styles.boxedText}>real estate</span>, and{" "}
          <span className={styles.boxedText}>technology</span>.
        </p>
      </div>
    </div>
  );
}
