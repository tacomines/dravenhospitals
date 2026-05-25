import styles from "./WhyChooseUsSection.module.css";

const features = [
  "24/7 Emergency Support",
  "Advanced Medical Equipment",
  "Experienced Specialists",
  "Patient-Centered Care",
  "Modern Infrastructure",
  "Affordable Healthcare",
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.subtitle}>
            Why Choose Us
          </span>

          <h2 className={styles.title}>
            Healthcare Built Around Patients
          </h2>

          <p className={styles.description}>
            We combine compassionate treatment,
            expert specialists, and world-class
            medical technology to deliver exceptional
            healthcare experiences.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div
              key={feature}
              className={styles.card}
            >
              <div className={styles.icon}>
                ✓
              </div>

              <h3>{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}