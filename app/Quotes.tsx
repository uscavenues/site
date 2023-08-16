import styles from "../styles/Quotes.module.css";

export default function Quotes() {
  return (
    <div className={styles.quotesWrapper}>
      <h1 className={styles.title}></h1>
      <div className={styles.quotesSec}>
        <p className={styles.quote}>
          &quot;Lavalab made my semester one of the most rewarding experiences as a
          student so far. Turning a vision into a reality, finding lifelong
          friends and potential cofounders, and learning to hustle make this
          something I&apos;d recommend to everyone.&quot;
        </p>
      </div>
    </div>
  );
}
