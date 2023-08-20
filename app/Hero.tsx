import Image from "next/image";
import styles from "../styles/Hero.module.css";
import gradient from "../public/images/gradients/desk/4.png";
import img from "../public/images/content/consulting2.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.taglineHeader}>
        USC&apos;s first-ever consulting group focusing on pre-professional
        industries and beyond through project-building
      </h1>
      <div className={styles.taglineContent}>
        <div className={styles.tagline}>
          <p className={styles.taglineText}>
            Avenues Consulting Group provides consulting and project-based
            solutions for a wide range of industries such as medical, legal,
            real estate and technology.
          </p>
          {/* TODO: fill out link */}
          <Link href="/apply" className={styles.link}>
            <button className={styles.applyBut}>Apply now</button>
          </Link>
          <Link href="/services" className={styles.link}>
            <button className={styles.applyBut + " " + styles.noBut}>
              Our services
            </button>
          </Link>
        </div>
        <div className={styles.imgSec}>
          <Image
            src={gradient}
            className={styles.gradImg}
            alt="Gradient Decoration Image"
          />
          <Image src={img} className={styles.mainImg} alt="Main Title Image" />
        </div>
      </div>
    </div>
  );
}
