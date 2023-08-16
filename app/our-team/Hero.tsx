import Image from "next/image";
import styles from "../../styles/our-team/Hero.module.css";
import fullTeam from "../../public/images/team/teamhandsign.jpg";
import girlsTeam from "../../public/images/team/teamgirls.jpg";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <Image
          className={styles.heroImg + " " + styles.top}
          src={fullTeam}
          alt="Full Team Photos"
        />
        <Image
          className={styles.heroImg + " " + styles.bottom}
          src={girlsTeam}
          alt="Girls Team Photos"
        />
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Our Team</h1>
        </div>
      </div>
    </div>
  );
}
