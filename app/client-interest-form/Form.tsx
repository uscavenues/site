import styles from "./Form.module.css";

export default function Form() {
  return (
    // TODO: add submit action endpoint
    <form className={styles.clientForm} action="">
      <div className={styles.inputSection}>
        <label className={styles.inputLabel} htmlFor="companyName">Company Name: </label>
        <input className={styles.inputBox} type="text" name="companyName" id="companyName" />
      </div>
      <div className={styles.inputSection}>
        <label className={styles.inputLabel} htmlFor="contactName">Contact Name: </label>
        <input className={styles.inputBox} type="text" name="contactName" id="contactName" />
      </div>
      <div className={styles.inputSection}>
        <label className={styles.inputLabel} htmlFor="email">Email: </label>
        <input className={styles.inputBox} type="text" name="email" id="email" />
      </div>
      <div className={styles.inputSection}>
        <label className={styles.inputLabel} htmlFor="subject">Subject: </label>
        <input className={styles.inputBox} type="text" name="subject" id="subject" />
      </div>
      <div className={styles.inputSection}>
        <label className={styles.inputLabel} htmlFor="message">Message: </label>
        <textarea className={styles.inputBox} name="message" id="message" cols={30} rows={10}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
