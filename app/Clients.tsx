import Image from "next/image";
import styles from "./Clients.module.css";
import googleImg from "../public/images/clients/google.png";
import aancImg from "../public/images/clients/aanc.png";

export default function Clients() {
  return (
    <div className={styles.clientsSection}>
      {/* <h2 className={styles.clientsHeader}>Our Clients</h2> */}
      <Image
        className={styles.horLine}
        src="/images/shapes/HorLine.svg"
        fill={true}
        alt="Seperation line"
      />
      <div className={styles.clientsList}>
        {/* <div className={styles.clientContainer}> */}
        {/* <Image */}
        {/* className={styles.clientImage} */}
        {/* src={googleImg} */}
        {/* height={144} */}
        {/* alt="The Network of Care Client Image" */}
        {/* /> */}
        {/* </div> */}
        <div className={styles.clientContainer + " " + styles.imgTop}>
          <Image
            className={styles.clientImage + " " + styles.colorPink}
            src={aancImg}
            height={92}
            alt="Asian American National Committee Image"
          />
        </div>
        {/* <div className={styles.clientContainer}> */}
        {/* <Image */}
        {/* className={styles.clientImage} */}
        {/* src="/images/clients/tgnc.png" */}
        {/* height={144} */}
        {/* alt="The Good Network Client Image" */}
        {/* /> */}
        {/* </div> */}
        <div className={styles.clientContainer + " " + styles.imgBottom}>
          <Image
            className={styles.clientImage + " " + styles.colorNavy}
            src={googleImg}
            height={92}
            alt="Google Client Image"
          />
        </div>
      </div>
    </div>
  );
}
