import Image from "next/image";
import styles from "../styles/Clients.module.css";
import linkedin from "../public/images/clients/linkedin.png";
import doordash from "../public/images/clients/doordash.png";

export default function Clients() {
  return (
    <div className={styles.clientsWrapper}>
      <h1 className={styles.header}>Our clients</h1>
      <p className={styles.caption}>The companies we work with.</p>
      <div className={styles.clientsSec}>
        <Image
          src={linkedin}
          className={styles.clientImg + " " + styles.linkedin}
          alt="Linkedin Client Logo"
        />
        <Image
          src={doordash}
          className={styles.clientImg + " " + styles.doordash}
          alt="Doordash Client Logo"
        />
      </div>
    </div>
  );
}
