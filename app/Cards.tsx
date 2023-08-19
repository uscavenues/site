import Image from "next/image";
import styles from "../styles/Cards.module.css";
import grad1 from "../public/images/gradients/desk/1.png";
import grad2 from "../public/images/gradients/desk/2.png";
import grad3 from "../public/images/gradients/desk/3.png";
import grad5 from "../public/images/gradients/desk/5.png";

export default function Cards() {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cardsSec}>
        <div className={styles.card + " card"}>
          <Image src={grad1} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>Pitch Day</h2>
            <p>
              Innovation, brainstorming, and ideation starts here. Within 24
              hours, teams will curate ideas for projects and share their
              pitches.
            </p>
          </div>
        </div>
        <div className={styles.card + " card"}>
          <Image src={grad2} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>Client Reveal Day</h2>
            <p>
              Members will found out the teams and clients they will be working
              with for the semester, along with the assigned leads.
            </p>
          </div>
        </div>
        <div className={styles.card + " card"}>
          <Image src={grad3} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>Curriculum Nights</h2>
            <p>
              Consultants will go through an extensive curriculum process
              curated by our development team to ensure education, efficiency,
              and awareness of common consulting strategies.
            </p>
          </div>
        </div>
        <div className={styles.card + " card"}>
          <Image src={grad5} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>Showcase</h2>
            <p>
              Teams will present their final projects to clients and the cohort.
              Along with networking and recruitment opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
