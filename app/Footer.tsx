import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <div className={styles.socialSection}>
          {/* TODO: get social svgs */}
          <div className={styles.socialLink}>
            <Link href="https://instagram.com/uscavenues/">
              <Image
                src="/images/icons/instagram.svg"
                height={50}
                width={50}
                alt="Instagram link"
              />
            </Link>
          </div>
          <div className={styles.socialLink}>
            <Link href="https://www.linkedin.com/company/avenues-consulting-group-usc/">
              <Image
                src="/images/icons/linkedin.svg"
                height={50}
                width={50}
                alt="Linkedin link"
              />
            </Link>
          </div>
        </div>
        <div className={styles.bottomText}>
          <p>Copyright ©2023 Avenues Consulting Group.</p>
        </div>
      </div>
      <div className={styles.rightSection}></div>
    </footer>
  );
}
