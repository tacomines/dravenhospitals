import styles from "./HappyClientsSection.module.css";

const testimonials = [
  {
    name: "Naragoud Yedurugatla",
    review:
      "Very good service and affordable prices, only they give required medicine, unnecessary blood test will not recommend. Thank you to the team.",
  },

  {
    name: "Pamarthi Ramesh",
    review:
      "Yesterday I went to Draven Hospital, their staff has a very friendly atmosphere. Treatment also very good with low cost.",
  },

  {
    name: "Shiva Shankar",
    review:
      "Diabetologist doctor treatment is very good and very low-cost treatment with very reasonable prices.",
  },
];

export default function HappyClientsSection() {
  return (
    <section
      id="happy-clients"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <span className={styles.subtitle}>
            Happy Clients
          </span>

          <h2 className={styles.title}>
            Trusted By Patients &
            Families
          </h2>

          <p className={styles.description}>
            Genuine patient experiences and
            feedback from individuals and
            families who trusted Draven
            Hospitals for healthcare support.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className={styles.grid}>
          {testimonials.map(
            (testimonial, index) => (
              <div
                key={index}
                className={styles.card}
              >
              {/* USER */}
              <div className={styles.user}>
                <div
                  className={styles.avatar}
                >
                  {testimonial.name
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <h4>
                    {testimonial.name}
                  </h4>

                  <span>
                    Google Review
                  </span>
                </div>
              </div>

              {/* STARS */}
              <div className={styles.stars}>
                ★★★★★
              </div>

              {/* REVIEW */}
              <p className={styles.review}>
                “{testimonial.review}”
              </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}