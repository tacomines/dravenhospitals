import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section
      id="cta"
      className={styles.section}
    >
      <div className={styles.container}>
        <h2>
          Ready To Experience Premium Healthcare?
        </h2>

        <p>
          Book your appointment today with Draven
          Hospitals expert specialists.
        </p>

        <button>
          Book Appointment
        </button>
      </div>
    </section>
  );
}