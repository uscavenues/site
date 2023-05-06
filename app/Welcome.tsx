import Image from "next/image";
import styles from "../styles/Welcome.module.css";
import preHealth from "../public/images/content/pre-health.jpg";
import preLaw from "../public/images/content/pre-law.jpg";
import tech from "../public/images/content/tech.jpg";

export default function Welcome() {
  return (
    <div className={styles.welcomeMessage}>
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeTextPiece}>
          <span>Pre-Health</span>
        </div>
        <div className={styles.welcomeImgPiece}>
          <Image src={preHealth} height={124} alt="Pre-Health Image" />
        </div>
      </div>
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeTextPiece}>
          <span>Pre-Law</span>
        </div>
        <div className={styles.welcomeImgPiece}>
          <Image src={preLaw} height={124} alt="Pre-Law Image" />
        </div>
      </div>
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeTextPiece}>
          <span>Tech</span>
        </div>
        <div className={styles.welcomeImgPiece}>
          <Image src={tech} height={124} alt="Tech Image" />
        </div>
      </div>
    </div>
  );
}
