import Link from "next/link";
import styles from "./WhatWeDo.module.css";

export default function WhatWeDo() {
  return (
    <div className={styles.whatSection}>
      <h2 className={styles.whatHeader}>What We Do</h2>
      <div className={styles.whatContent}>
        <div className={styles.cohorts}>
          <div className={styles.cohortGroup}>
            <h3 className={styles.cohortTitle}>Fall 2023</h3>
            <div className={styles.cohortSection}>
              <h1 className={styles.cohortPart}>
                <Link className={styles.cohortPartLink} href="#consulting">
                  Consulting
                </Link>
              </h1>
              <p className={styles.cohortNum}>20 Members</p>
            </div>
            <div className={styles.cohortSection}>
              <h1 className={styles.cohortPart}>
                <Link
                  className={styles.cohortPartLink}
                  href="#project-building"
                >
                  Project Building
                </Link>
              </h1>
              <p className={styles.cohortNum}>20 Members</p>
            </div>
          </div>
        </div>
        <div className={styles.groupSection}>
          <p>
            Our <span className={styles.groupName}>Consulting</span> cohort goes
            through a semesterly curriculum to learn all about the world of
            consulting. Throughout the semester, they are mentored by consulting
            firms in a wide variety of industries. They gain hands-on experience
            in helping consult the project builders on their way towards a
            viable product.
          </p>
        </div>
        <div className={styles.groupSection}>
          <p>
            Our <span className={styles.groupName}>Project Building</span>{" "}
            cohort are a group of developers, designers, product managers, and
            product designers working together to build an innovative and
            creative product. They work closely with the consultants and will
            receive critical feedback to improve and iterate on their product.
          </p>
        </div>
      </div>
    </div>
  );
}
