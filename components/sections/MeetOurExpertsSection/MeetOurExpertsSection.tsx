import styles from "./MeetOurExpertsSection.module.css";

const doctors = [
  "Dr. John Smith",
  "Dr. Sarah Wilson",
  "Dr. Michael Brown",
];

export default function MeetOurExpertsSection() {
  return (
    <section
      id="experts"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>
            Meet Our Experts
          </span>

          <h2 className={styles.title}>
            Experienced Medical Specialists
          </h2>
        </div>

        <div className={styles.grid}>
          {doctors.map((doctor) => (
            <div
              key={doctor}
              className={styles.card}
            >
              <div className={styles.image}>
                Doctor Image
              </div>

              <h3>{doctor}</h3>

              <p>Senior Specialist</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}