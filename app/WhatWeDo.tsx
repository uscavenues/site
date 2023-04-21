import styles from "./WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <div className={styles.whatSection}>
      <h2 className={styles.whatHeader}>What We Do</h2>
      <div className={styles.whatContent}>
        <div className={styles.topRow}>
          <div className={styles.whatBox}>
            <p className={styles.whatBold}>Fall 2023 Cohort</p>
            <p>40 members</p>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.whatBox}>
            <p className={styles.whatBold}>Consulting Team</p>
            <p>20 members</p>
          </div>
          <div className={styles.whatBox}>
            <p className={styles.whatBold}>Project Building</p>
            <p>20 members</p>
          </div>
        </div>
      </div>
    </div>
  );
}
