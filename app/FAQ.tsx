import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <div className={styles.faqSec}>
      <h2>FAQ</h2>
      <div className={styles.faqContent}>
        <div className={styles.faqQ}>
          <p className={styles.qes}></p>
          <p className={styles.ans}></p>
        </div>
        <div className={styles.faqQ}>
          <p className={styles.qes}></p>
          <p className={styles.ans}></p>
        </div>
        <div className={styles.faqQ}>
          <p className={styles.qes}></p>
          <p className={styles.ans}></p>
        </div>
        <div className={styles.faqQ}>
          <p className={styles.qes}></p>
          <p className={styles.ans}></p>
        </div>
        <div className={styles.faqQ}>
          <p className={styles.qes}></p>
          <p className={styles.ans}></p>
        </div>
      </div>
    </div>
  );
}
