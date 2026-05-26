import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.contactSection}
    >
      <div className={styles.container}>
        {/* SECTION HEADER */}
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
            diagnostics, consultations, vaccinations,
            and healthcare support.
          </p>
        </div>

        {/* CONTACT BODY */}
        <div className={styles.contactWrapper}>
          {/* LEFT INFO */}
          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3>Phone Number</h3>

              <p>+91 80503 99886</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Email ID</h3>

              <p>
                info@dravenhospitals.com
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>24×7 Support</h3>

              <p>Monday to Sunday</p>
            </div>

            <div
              className={`${styles.infoCard} ${styles.addressCard}`}
            >
              <h3>Address</h3>

              <p>
                Green Meadows Colony,
                <br />
                Main Road, Praneeth Pranav Homes,
                <br />
                Main Rd, beside Sumadhura Hotel,
                <br />
                Beeramguda, Ameenpur,
                <br />
                Telangana, India - 502032
              </p>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className={styles.mapContainer}>
            <a
              href="https://maps.app.goo.gl/u1nKk4S5CzZzCUiu5"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapWrapper}
            >
              <iframe
                src="https://maps.google.com/maps?q=Draven%20Hospitals%20Beeramguda&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              ></iframe>
            </a>

            {/* SHARE BUTTON */}
            <button
              className={styles.shareButton}
              onClick={() => {
                const message =
                  "Draven Hospitals Location:\nhttps://maps.app.goo.gl/u1nKk4S5CzZzCUiu5";

                window.open(
                  `https://wa.me/?text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                );
              }}
            >
              Share Location
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}