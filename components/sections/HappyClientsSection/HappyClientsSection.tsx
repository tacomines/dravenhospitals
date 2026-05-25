import styles from "./HappyClientsSection.module.css";

export default function HappyClientsSection() {
  return (
    <section
      id="happy-clients"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>
            Happy Clients
          </span>

          <h2 className={styles.title}>
            Trusted By Thousands Of Patients
          </h2>
        </div>

        <div className={styles.grid}>
          {[1,2,3].map((item) => (
            <div
              key={item}
              className={styles.card}
            >
              <p>
                Excellent medical care and compassionate
                treatment experience.
              </p>

              <h4>Patient {item}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}