import styles from "./Community.module.css";
import Image from "next/image";
import socialImg1 from "../public/images/community/social1.jpg";
import socialImg2 from "../public/images/community/social2.jpg";
import socialImg3 from "../public/images/community/social3.jpg";
import socialImg4 from "../public/images/community/social4.jpg";

export default function Community() {
  return (
    <div className={styles.communitySec}>
      <h1 className={styles.communityTitle}>Community</h1>
      <div className={styles.imgRow}>
        <Image
          className={styles.socialImg + " " + styles.img1}
          src={socialImg1}
          alt="Full Team Photos"
        />
        <Image
          className={styles.socialImg + " " + styles.img2}
          src={socialImg2}
          alt="Girls Team Photos"
        />
        <Image
          className={styles.socialImg + " " + styles.img3}
          src={socialImg3}
          alt="Full Team Photos"
        />
        <Image
          className={styles.socialImg + " " + styles.img4}
          src={socialImg4}
          alt="Girls Team Photos"
        />
      </div>
    </div>
  );
}
