import Image from "next/image";
import Link from "next/link";
import styles from "../styles/MeetOurTeam.module.css";
import team from "../public/images/team/teamhandsignlandscape.jpg";

export default function MeetOurTeam() {
  return (
    <div className={styles.meetWrap}>
      <div className={styles.meetSec}>
        <Image
          src={team}
          className={styles.img}
          alt="Full Avenues Team Image"
        />
        <div className={styles.meetContent}>
          <h2 className={styles.meetTitle}>Meet Our Team</h2>
          <p className={styles.meetText}>
            Avenues is here to enhance your pre-professional and consulting
            passions. Our team consists of students from a wide variety of
            majors, experiences, and passions. We are here to create a fostering
            community along with providing opportunities to our members.
          </p>
          <Link href="/community">
            <button>Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
