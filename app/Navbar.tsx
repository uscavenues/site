import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            height={100}
            width={100}
            alt="Avenues Consulting Logo"
          />
        </Link>
      </div>
      <div className={styles.menuLinks}>
        {/* <div className={styles.linkItem}> */}
        {/* <Link className={styles.link} href="/about">About</Link> */}
        {/* </div> */}
        <div className={styles.linkItem}>
          <Link className={styles.link} href="/our-team">
            Our team
          </Link>
        </div>
        <div className={styles.linkItem}>
          <Link className={styles.link} href="/client-interest-form">
            Client Interest Form
          </Link>
        </div>
      </div>
      <div className={styles.applySection}>
        <Link className={styles.applyLink} href="/apply">
          <button className={styles.applyButton}>Apply</button>
        </Link>
      </div>
    </nav>
  );
}
