import styles from "../styles/Description.module.css";

export default function Description() {
  return (
    <div className={styles.desc}>
      <div className={styles.descSection}>
        <p className={styles.descText}>
          Avenues is a new consulting group at USC that is dedicated to
          promoting inclusivity and reaching different industries. With a team
          of diverse consultants from a variety of backgrounds, Avenues is
          uniquely positioned to offer customized solutions that cater to the
          specific needs of each client.
        </p>
      </div>
      <div className={styles.descSection}>
        <p className={styles.descText}>
          Our innovative approach and commitment to collaboration ensures that
          every project is approached with an open mind and a willingness to
          learn from different perspectives.
        </p>
      </div>
    </div>
  );
}
