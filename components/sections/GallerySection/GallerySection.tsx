import styles from "./GallerySection.module.css";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>
            Gallery
          </span>

          <h2 className={styles.title}>
            Inside Draven Hospitals
          </h2>
        </div>

        <div className={styles.grid}>
          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className={styles.card}
            >
              Image {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}