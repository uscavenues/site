import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import logo from "../public/images/logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.logoSec}>
          <Link href="/">
            <Image
              src={logo}
              className={styles.logoImg}
              alt="Avenues Consulting Group Logo Image"
            />
          </Link>
        </div>
        {/*
        <div className={styles.navLinksSec + " " + styles.navLinks}>
          <span className={styles.line + " " + styles.navLinks}></span>
          <span className={styles.line + " " + styles.navLinks}></span>
          <span className={styles.line + " " + styles.navLinks}></span>
        </div>
        */}
        <div className={styles.navLinksSec}>
          <Link className={styles.navLink} href="/aboutus">About Us</Link>
          <Link className={styles.navLink} href="/community">Community</Link>
          <Link className={styles.navLink} href="/our-team">Our Team</Link>
          <Link className={styles.navLink} href="/interest-form-link"><button>Client Interest Form</button></Link>
          <Link className={styles.navLink} href="/apply-link"><button>Apply</button></Link>
        </div>
      </div>
    </nav>
  );
}
