import styles from "./Clients.module.css";

export default function Clients() {
  return (
    <div className={styles.clientsSection}>
      <h1 className={styles.clientsHeader}>Our Clients</h1>
      <div className={styles.clientsList}></div>
    </div>
  );
}
