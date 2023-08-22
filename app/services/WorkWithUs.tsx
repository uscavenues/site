import styles from "../../styles/services/WorkWithUs.module.css";

export default function WorkWithUs() {
  return (
    <div className={styles.workSec}>
      <div className={styles.workContent}>
        <h2 className={styles.workTitle}>Want to work with us?</h2>
        <p>
          Our unique services focus on long-term goals and solutions for
          clients. Clients will receive a solution and product that includes
          efforts from engineers, designers, management and consultants to
          ensure a diverse and current viewpoint.
        </p>
        <p className={styles.workText}>
          If you are a company looking for pro-bono consulting services or need
          help with a project, Avenues is here to support any of your needs. Our
          team of engineers, consultants, and designers are available to provide
          assistance and support. Contact us at{" "}
          <a href="mailto:uscavenues@gmail.com">uscavenues@gmail.com</a>
          {/* or fill */}
          {/* out our{" "} */}
          {/* <a href="/member-form-interest-link"> */}
            {/* potential client interest form */}
          {/* </a>{" "} */}
          to learn more about how we can collaborate and work together.
        </p>
        <p>
          Check out our{" "}
          <a href="/clientpacket.pdf">
            client packet
          </a>{" "}
          to learn more about our services and how we can help you achieve your
          goals.
        </p>
      </div>
    </div>
  );
}
