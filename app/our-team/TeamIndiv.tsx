import styles from "./TeamIndiv.module.css";

export default function TeamIndiv() {
  return (
    <div className={styles.teamIndivSection}>
      <h3 className={styles.teamTitle}>E-Board</h3>
      <div className={styles.teamIndivList}></div>
    </div>
  );
}
