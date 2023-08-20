import Image from "next/image";
import styles from "../styles/Info.module.css";
import team from "../public/images/team/teamhandsignlandscape.jpg";

export default function Info() {
  return (
    <div className={styles.infoSec}>
      <div className={styles.infoContent}>
        <h2 className={styles.infoTitle}>Meet Our Team</h2>
        <p className={styles.infoText}>
          Avenues Consulting provides tailored consulting and project-building
          opportunities for students of ALL majors and pre-professional goals.
          You’ll gain consulting experience while simultaneously immersing
          yourself in another field you’re passionate about (medical, tech, law,
          entertainment, etc.) All while being surrounded by a supportive,
          driven, and uplifting community!
        </p>
      </div>
      <Image src={team} className={styles.img} alt="Full Avenues Team Image" />
    </div>
  );
}
