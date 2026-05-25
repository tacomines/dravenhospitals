"use client";

import { useMemo, useState } from "react";

import styles from "./CTASection.module.css";

export default function CTASection() {
  const [fullName, setFullName] = useState("");

  const [mobile, setMobile] = useState("");

  const [email, setEmail] = useState("");

  const [description, setDescription] =
    useState("");

  /* ========================= */
  /* VALIDATIONS */
  /* ========================= */

  const isMobileValid =
    /^[6-9]\d{9}$/.test(mobile);

  const isFormValid = useMemo(() => {
    return (
      fullName.trim().length >= 3 &&
      isMobileValid &&
      description.trim().length >= 10
    );
  }, [
    fullName,
    isMobileValid,
    description,
  ]);

  /* ========================= */
  /* SUBMIT */
  /* ========================= */

  const handleSubmit = () => {
    if (!isFormValid) return;

    const message = `
Hello Draven Hospitals,

New Appointment Request

Full Name: ${fullName}

Mobile Number: ${mobile}

Email ID: ${email || "Not Provided"}

Health Concern:
${description}

Please contact the patient regarding appointment availability.
`;

    const encodedMessage =
      encodeURIComponent(message);

    window.open(
      `https://wa.me/918050399886?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="cta"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.subtitle}>
            Book Appointment
          </span>

          <h2>
            Healthcare Support
            <br />
            When You Need It
          </h2>

          <p>
            Connect with Draven Hospitals for
            consultations, diagnostics,
            vaccinations, home visits, and
            compassionate healthcare assistance.
          </p>

          <div className={styles.points}>
            <div className={styles.point}>
              Experienced Healthcare Support
            </div>

            <div className={styles.point}>
              Diagnostics & Consultations
            </div>

            <div className={styles.point}>
              Vaccination & Home Visits
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <h3>Appointment Request</h3>

          {/* FULL NAME */}
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Enter your full name *"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value)
              }
            />
          </div>

          {/* MOBILE */}
          <div className={styles.formGroup}>
            <input
              type="tel"
              placeholder="Enter mobile number *"
              maxLength={10}
              value={mobile}
              onChange={(e) =>
                setMobile(
                  e.target.value.replace(/\D/g, "")
                )
              }
            />

            {mobile.length > 0 &&
              !isMobileValid && (
                <span className={styles.error}>
                  Enter valid 10 digit mobile
                  number
                </span>
              )}
          </div>

          {/* EMAIL */}
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Enter email address (optional)"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          {/* DESCRIPTION */}
          <div className={styles.formGroup}>
            <textarea
              rows={5}
              placeholder="Describe healthcare assistance required *"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={
              !isFormValid
                ? styles.disabledButton
                : ""
            }
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}