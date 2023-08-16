import Link from "next/link";
import styles from "../../styles/aboutus/Content.module.css";

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.contentSec}>
        <h2 className={styles.header}>
          At Avenues Consulting Group USC, we strongly believe in the power of
          community.
        </h2>
        <p className={styles.text}>
          We understand that community is not just about working together, but
          also about growing together. That&apos;s why we regularly organize
          team-building activities, social events, and volunteer opportunities.
          We encourage our team members to share their passions and interests,
          and we strive to create an inclusive environment where everyone feels
          valued and respected.
        </p>
        <p className={styles.text}>
          By joining Avenues Consulting Group, not only will you unlock career
          opportunities, but also a network of students who are willing to
          support you in any way. We love having fun (kickbacks at 4 P.M??? 😳),
          eating (can you beat the high score of 13 meat plates an AYCE? 🥩),
          and building everlasting relationships.
        </p>
        <p className={styles.specialText}>
          <span className={styles.bold}>
          Want to join our community?&nbsp;
          </span>
          Fill out our{" "}
          {/* TODO: fill out link */}
          <Link href="/member-interest-form-link">
            potential member interest form
          </Link>{" "}
          or contact us at{" "}
          <a href="mailto:uscavenues@gmail.com">uscavenues@gmail.com</a> to
          learn more. We can&apos;t wait to hear from you!
        </p>
      </div>
    </div>
  );
}
