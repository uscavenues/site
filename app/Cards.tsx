import Image from "next/image";
import styles from "../styles/Cards.module.css";
import grad1 from "../public/images/gradients/desk/1.png";
import grad2 from "../public/images/gradients/desk/2.png";
import grad3 from "../public/images/gradients/desk/3.png";
import grad5 from "../public/images/gradients/desk/5.png";

export default function Cards() {
  return (
    <div className={styles.cardsWrapper}>
      {/* <h1 className={styles.header}>Calling all...</h1> */}
      <div className={styles.cardsSec}>
        <div className={styles.card + " card"}>
          <Image src={grad1} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>Demo Night</h2>
            <p>
              Come celebrate the beginning of USC&apos;s newest startups! April
              25th 5pm-8pm, Tommy&apos;s Place
            </p>
            <button>Blah blah</button>
          </div>
        </div>
        <div className={styles.card + " card"}>
          <Image src={grad2} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>LavaLearn</h2>
            <p>
              LavaLearn is our signature open-access curriculum, providing
              entrepreneurial and tech resources, workshops, and fireside chats
              to USC and the greater public.
            </p>
          </div>
        </div>
        <div className={styles.card + " card"}>
          <Image src={grad3} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>Developer</h2>
            <p>
              You have a knack for building and are able to hack through
              anything (literally and metaphorically). You are fearless in
              creating and are ready to teach yourself unknown tech concepts.
              Your grit and perseverance keep you going through coding
              challenges.
            </p>
          </div>
        </div>
        <div className={styles.card + " card"}>
          <Image src={grad5} alt="Gradient Image" />
          <div className={"cardContent"}>
            <h2>Idea Grind</h2>
            <p>
              Jump right in and see what LavaLab is about with our spin on an
              Info Session. Through discussion and brainstorming, hearing from
              E-board, and asking questions, you&apos;ll get a taste of what
              LavaLab is about.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
