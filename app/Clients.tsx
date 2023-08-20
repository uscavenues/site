import Image from "next/image";
import styles from "../styles/Clients.module.css";
import linkedin from "../public/images/clients/linkedin.png";
import doordash from "../public/images/clients/doordash.png";
import wtc from "../public/images/clients/wtc.png";
import noc from "../public/images/clients/NoC.png";
import galla from "../public/images/clients/galla.jpg";
import aanc from "../public/images/clients/aancnb.png";

export default function Clients() {
  return (
    <div className={styles.clientsWrapper}>
      <h1 className={styles.header}>Our clients</h1>
      <p className={styles.caption}>The companies we work with.</p>
      <div className={styles.clientsSec}>
        <Image
          src={linkedin}
          className={styles.clientImg}
          alt="Linkedin Client Logo"
        />
        <Image
          src={doordash}
          className={styles.clientImg}
          alt="Doordash Client Logo"
        />
        <Image src={wtc} className={styles.clientImg} alt="WTC Client Logo" />
        <Image
          src={noc}
          className={styles.clientImg}
          alt="Network of Care Client Logo"
        />
        <Image
          src={galla}
          className={styles.clientImg}
          alt="Galla Beauty Client Logo"
        />
        <Image src={aanc} className={styles.clientImg} alt="AANC Client Logo" />
      </div>
    </div>
  );
}
