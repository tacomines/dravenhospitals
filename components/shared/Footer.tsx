import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>Draven Hospitals</h2>

            <p>
              Advanced healthcare solutions with
              compassionate patient care and
              world-class medical infrastructure.
            </p>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>

            <a href="#hero">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.contact}>
            <h3>Contact</h3>

            <p>+91 80503 99886</p>

            <p>info@dravenhospitals.com</p>

            <p>Hyderabad, India</p>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2026 Draven Hospitals. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}