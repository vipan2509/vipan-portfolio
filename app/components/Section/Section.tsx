import styles from "./Section.module.scss";

export default function Section({ id, title, children }: any) {
  return (
    <section id={id} className={styles.section}>
      <h3 className={styles.heading}> {title} </h3> {children}
    </section>
  );
}
