import Image from "next/image";
import styles from "../styles/Hero.module.css";
import gradient from "../public/images/gradients/desk/4.png";
import img from "../public/images/content/consulting2.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.tagline}>
        <h1 className={styles.taglineHeader}>
          USC&apos;s first-ever consulting group to focus on the
          pre-professional industries
        </h1>
        <p className={styles.taglineText}>
          Avenues is where students from a diverse set of majors such as
          pre-law, pre-health, real estate, and technology come together to work
          on projects with each other and with companies.
        </p>
        {/* TODO: fill out link */}
        <Link href="/apply" className={styles.link}>
          <button className={styles.applyBut}>Apply now</button>
        </Link>
        <Link href="/aboutus" className={styles.link}>
          <button className={styles.applyBut + " " + styles.noBut}>
            Learn more
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
  );
}
