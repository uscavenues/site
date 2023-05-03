import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineSec}>
        <h2 className={styles.timelineTitle}>Timeline</h2>
        <div className={styles.timelineContent}>
          <div className={styles.timelineEvent}>
            <h3 className={styles.eventTitle}>Recruitment</h3>
            <p className={styles.eventTime}></p>
          </div>
          <div className={styles.timelineEvent + " " + styles.cohortEvent}>
            <div>
              <h3 className={styles.eventTitle}>Project Reveal</h3>
            </div>
            <div>
              <h3 className={styles.eventTitle}>Curriculum</h3>
            </div>
          </div>
          <div className={styles.timelineEvent + " " + styles.cohortEvent}>
            <div>
              <h3 className={styles.eventTitle}>Team Assignments</h3>
            </div>
            <div>
              <h3 className={styles.eventTitle}>Curriculum</h3>
            </div>
          </div>
          <div className={styles.timelineEvent + " " + styles.cohortEvent}>
            <div>
              <h3 className={styles.eventTitle}>Pitch Day</h3>
            </div>
            <div>
              <h3 className={styles.eventTitle}>Curriculum</h3>
            </div>
          </div>
          <div className={styles.timelineEvent + " " + styles.cohortEvent}>
            <div>
              <h3 className={styles.eventTitle}>Building Solutions</h3>
            </div>
            <div>
              <h3 className={styles.eventTitle}>Curriculum</h3>
            </div>
          </div>
          <div className={styles.timelineEvent + " " + styles.cohortEvent}>
            <div>
              <h3 className={styles.eventTitle}>Solution Day</h3>
            </div>
            <div>
              <h3 className={styles.eventTitle}>Curriculum</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
