import Image from "next/image";
import styles from "../../styles/aboutus/Hero.module.css";
import team from "../../public/images/team/fullteamalt.jpg";

export default function Hero() {
  return (
    <div className={styles.heroSec}>
      <h1 className={styles.header}>About Us</h1>
      <Image src={team} className={styles.teamImg} alt="Team Photo" />
    </div>
  );
}
