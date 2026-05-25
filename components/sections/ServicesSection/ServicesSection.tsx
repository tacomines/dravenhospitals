import Image from "next/image";

import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "Diabetic ",
    image: "/images/services/sugar.jpg",
    description:
      "Diabetes consultation, monitoring, and ongoing healthcare support.",
  },

  {
    title: "Hypertension",
    image: "/images/services/hypertension.jpg",
    description:
      "Blood pressure management and preventive healthcare guidance.",
  },

  {
    title: "Thyroid",
    image: "/images/services/thyroid.jpg",
    description:
      "Diagnosis, monitoring, and thyroid disorder treatment support.",
  },

  {
    title: "Gynecology",
    image: "/images/services/gynecology.jpg",
    description:
      "Women’s healthcare consultations and routine medical support.",
  },

  {
    title: "Orthopedic",
    image: "/images/services/ortho.jpg",
    description:
      "Orthopedic consultations for joint, muscle, and bone-related care.",
  },

  {
    title: "Neurology",
    image: "/images/services/neurology.jpg",
    description:
      "Neurological consultation and healthcare evaluation support.",
  },

  {
    title: "Pediatric",
    image: "/images/services/pediatric.jpg",
    description:
      "Child healthcare services including all types of vaccinations.",
  },

  {
    title: "Home Visits",
    image: "/images/services/home-visits.jpg",
    description:
      "Doctor consultation and healthcare support at home when needed.",
  },

  {
    title: "Diagnostics",
    image: "/images/services/diagnostics.jpg",
    description:
      "Routine medical tests and diagnostic healthcare services.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={styles.servicesSection}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>
            Our Services
          </span>

          <h2 className={styles.title}>
            Healthcare Services
            <br />
            For Everyday Medical Needs
          </h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.title}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}