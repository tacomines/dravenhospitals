import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "Sugar",
    description:
      "Diabetes consultation, monitoring, and ongoing healthcare support.",
  },

  {
    title: "Hypertension",
    description:
      "Blood pressure management and preventive healthcare guidance.",
  },

  {
    title: "Thyroid",
    description:
      "Diagnosis, monitoring, and thyroid disorder treatment support.",
  },

  {
    title: "Gynecology",
    description:
      "Women’s healthcare consultations and routine medical support.",
  },

  {
    title: "Ortho",
    description:
      "Orthopedic consultations for joint, muscle, and bone-related care.",
  },

  {
    title: "Neurology",
    description:
      "Neurological consultation and healthcare evaluation support.",
  },

  {
    title: "Pediatric",
    description:
      "Child healthcare services including all types of vaccinations.",
  },

  {
    title: "Home Visits",
    description:
      "Doctor consultation and healthcare support at home when needed.",
  },

  {
    title: "Diagnostics",
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
              <div className={styles.icon}>
                +
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}