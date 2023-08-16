import Image from "next/image";
import styles from "../styles/MeetOurTeam.module.css";
import team from "../public/images/team/teamhandsign.jpg";

export default function MeetOurTeam() {
  return (
    <div className={styles.meetSec}>
      <Image src={team} className={styles.img} alt="Full Avenues Team Image" />
      <div className={styles.meetContent}>
        <h2 className={styles.meetTitle}>Meet Our Team</h2>
        <p className={styles.meetText}>
          TCG is a small group of actively involved and highly-motivated student
          leaders. Our consultants come from a wide range of academic
          disciplines, bringing a variety of perspectives and skills to a
          collaborative atmosphere.
        </p>
        <button>Our Team</button>
      </div>
    </div>
  );
}
