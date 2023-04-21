import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          height={100}
          width={100}
          alt="Avenues Consulting Logo"
        />
      </div>
      <div className={styles.menuLinks}>
        <div className={styles.linkItem}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.linkItem}>
          <Link href="/about">About</Link>
        </div>
        <div className={styles.linkItem}>
          <Link href="/our-team">Our team</Link>
        </div>
      </div>
      <div className={styles.applySection}>
        <button className={styles.applyButton}>
          <Link className={styles.applyLink} href="/apply">Apply</Link>
        </button>
      </div>
    </nav>
  );
}
