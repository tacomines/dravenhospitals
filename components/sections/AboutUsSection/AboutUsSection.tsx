import styles from "./AboutUsSection.module.css";

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className={styles.aboutSection}
    >
      <div className={styles.container}>
        {/* IMAGE SIDE */}
        <div className={styles.imageWrapper}>
          <img
            src="/images/about/draven-hospital-image.jpg"
            alt="Draven Hospitals"
            className={styles.image}
          />
        </div>

        {/* CONTENT SIDE */}
        <div className={styles.content}>
          <span className={styles.subtitle}>
            About Us
          </span>

          <h2 className={styles.title}>
            Trusted Healthcare For Every Patient
          </h2>

          <p className={styles.description}>
            Draven Hospitals provides reliable healthcare
            services with experienced doctors, diagnostics,
            vaccinations, and compassionate medical support
            for individuals and families.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>10+</h3>
              <p>Years Service</p>
            </div>

            <div className={styles.statCard}>
              <h3>9+</h3>
              <p>Core Services</p>
            </div>

            <div className={styles.statCard}>
              <h3>24/7</h3>
              <p>Patient Support</p>
            </div>

            <div className={styles.statCard}>
              <h3>10 Beds</h3>
              <p>Inpatient Facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}