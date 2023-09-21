import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NewHero.module.css";
import logo from "../public/images/logo.svg";
import logoWhite from "../public/images/logoWhite.svg";

export default function NewHero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.logoImgs}>
          <Image
            src={logoWhite}
            className={styles.logo + " " + styles.logoWhite}
            alt="Avenues Logo White"
          />
          <Image
            src={logo}
            className={styles.logo + " " + styles.logoBlack}
            alt="Avenues Logo"
          />
        </div>
        <h1 className={styles.mainTitle}>Avenues Consulting Group</h1>
        <p className={styles.desc}>
          USC&apos;s first-ever consulting group focusing on pre-professional
          industries and beyond through project-building
        </p>
        <div className={styles.buttons}>
          <Link
            href="https://forms.gle/APuFisBnkJhGTkTcA"
            className={styles.link}
          >
            <button className={styles.applyBut}>Apply now</button>
          </Link>
          <Link href="/services" className={styles.link}>
            <button className={styles.applyBut + " " + styles.noBut}>
              Our services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
