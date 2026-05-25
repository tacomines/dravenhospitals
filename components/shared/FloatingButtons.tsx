"use client";

import styles from "./FloatingButtons.module.css";

import {
    FaPhoneAlt,
    FaWhatsapp,
} from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className={styles.wrapper}>
      <a
        href="tel:+918050399886"
        className={`${styles.button} ${styles.call}`}
        aria-label="Call"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/918050399886"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles.whatsapp}`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}