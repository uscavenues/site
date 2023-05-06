import styles from "../styles/Community.module.css";
import Image from "next/image";
import socialImg1 from "../public/images/community/social1.jpg";
import socialImg2 from "../public/images/community/social2.jpg";
import socialImg3 from "../public/images/community/social3.jpg";
import socialImg4 from "../public/images/community/social4.jpg";

export default function Community() {
  return (
    <div className={styles.communitySec}>
      <h2 className={styles.communityTitle}>Community</h2>
      <div className={styles.imgRow}>
        <Image
          className={styles.socialImg + " " + styles.img1}
          src={socialImg1}
          alt="Social Photo 1"
        />
        <Image
          className={styles.socialImg + " " + styles.img2}
          src={socialImg2}
          alt="Social Photo 2"
        />
        <Image
          className={styles.socialImg + " " + styles.img3}
          src={socialImg3}
          alt="Social Photo 3"
        />
        <Image
          className={styles.socialImg + " " + styles.img4}
          src={socialImg4}
          alt="Social Photo 4"
        />
        <div className={styles.textSec}>
          <p className={styles.text1}>
            More than anything, Shift is a group of students who care deeply
            about the intersection of people and technology and value
            friendships with others who feel the same.
          </p>
          <p className={styles.text2}>
            Creating a sense of commraderie and genuine connection is what we
            aim for. By joining our first cohort and becoming a Shiftie, you too
            can join in on the inside jokes and attend John’s monthly Lorenzo
            bangers (BYOP). Trust us, you won’t want to miss them.
          </p>
        </div>
      </div>
    </div>
  );
}
