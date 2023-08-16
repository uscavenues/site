import Image from "next/image";
import styles from "../../styles/community/Hero.module.css";
import team from "../../public/images/team/fullteam.jpg";

export default function Hero() {
  return (
    <div className={styles.heroSec}>
      <h1 className={styles.header}>Our Community</h1>
      <Image src={team} className={styles.teamImg} alt="Team Photo" />
    </div>
  );
}
