import Image from "next/image";
import styles from "./Hero.module.css";
import fullTeam from "../../public/images/team/fullteam.jpg";
import girlsTeam from "../../public/images/team/girlsteam.jpg";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>Our Team</h1>
      <div className={styles.heroImages}>
        <Image
          className={styles.heroImg + " " + styles.leftImg}
          src={fullTeam}
          width={300}
          height={450}
          alt="Full Team Photos"
        />
        <Image
          className={styles.heroImg + " " + styles.rightImg}
          src={girlsTeam}
          width={300}
          height={450}
          alt="Girls Team Photos"
        />
      </div>
    </div>
  );
}
