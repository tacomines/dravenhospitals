import Image from "next/image";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className={styles.heroSection}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            Family Healthcare • Diagnostics • Home Visits
          </span>

          <h1 className={styles.title}>
            Draven
            <br />
            Hospitals
          </h1>

          <p className={styles.description}>
            From diabetes and hypertension management
            to gynecology, pediatrics, diagnostics,
            vaccinations, and home visits — Draven
            Hospitals provides reliable healthcare for
            individuals and families with compassionate
            medical support.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/hero/hero-image.webp"
            alt="Draven Hospitals"
            width={700}
            height={700}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}