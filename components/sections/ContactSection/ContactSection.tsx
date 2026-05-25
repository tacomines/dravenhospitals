import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.contactSection}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            CONTACT US
          </span>

          <h2 className={styles.title}>
            Get In Touch With
            <br />
            Draven Hospitals
          </h2>

          <p className={styles.description}>
            Contact our medical team for appointments,
            emergency assistance, consultations,
            and healthcare support.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Phone</h3>

              <p>+91 80503 99886</p>
            </div>

            <div className={styles.card}>
              <h3>Email</h3>

              <p>info@dravenhospitals.com</p>
            </div>

            <div className={styles.card}>
              <h3>Location</h3>

              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}