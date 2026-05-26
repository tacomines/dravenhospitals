import styles from "./Footer.module.css";

import {
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          {/* BRAND */}
          <div className={styles.brand}>
            <h2>Draven Hospitals</h2>

            <p>
              Advanced healthcare solutions with
              compassionate patient care and
              trusted medical support for
              individuals and families.
            </p>
          </div>

          {/* LINKS */}
          <div className={styles.links}>
            <h3>Quick Links</h3>

            <a href="#hero">Home</a>

            <a href="#about">About Us</a>

            <a href="#services">Services</a>

            <a href="#gallery">Gallery</a>

            <a href="#contact">Contact</a>
          </div>

          {/* CONTACT */}
          <div className={styles.contact}>
            <h3>Contact</h3>

            <p>+91 80503 99886</p>

            <p>
              info@dravenhospitals.com
            </p>

            <p>
              Beeramguda,
              Hyderabad, India
            </p>

            {/* SOCIALS */}
            <div className={styles.socials}>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.youtube}
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/918050399886"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp}
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagram}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facebook}
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.twitter}
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <p>
            © 2026 Draven Hospitals. All rights
            reserved.
          </p>

          <a
            href="https://tacovex.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design & Developed by Tacovex
          </a>
        </div>
      </div>
    </footer>
  );
}