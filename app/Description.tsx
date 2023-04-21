import styles from "./Description.module.css";

export default function Description() {
  return (
    <div className={styles.desc}>
      <div className={styles.descSection}>
        <p className={styles.descText}>
          We are USC’s first-ever consulting group focusing on pre-professional
          industries such as <span className={styles.boxedText}>law</span>,{" "}
          <span className={styles.boxedText}>medicine</span>,{" "}
          <span className={styles.boxedText}>real estate</span>, and{" "}
          <span className={styles.boxedText}>technology</span>.
        </p>
      </div>
      <div className={styles.descSection}>
        <p className={styles.descText}>
          Bridges between the business and pre-professional worlds Increased
          visibility for non-business majors looking to break into the
          consulting industry Project-based opportunities focusing on creating
          necessary solutions for big problems
        </p>
      </div>
    </div>
  );
}
