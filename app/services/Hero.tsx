import styles from "../../styles/services/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSec}>
      <h1 className={styles.heroTitle}>Our Services</h1>
      <p className={styles.caption}>
        Avenues is dedicated to finding solutions that cater to your
        organizations needs. Our goal is to provide you with a project that
        includes impactful and sizable results depending on your unique brand
        identity and edge.
      </p>
    </div>
  );
}
