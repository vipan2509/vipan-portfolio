import Section from "../Section/Section";
import MotionReveal from "../MotionReveal/MotionReveal";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <Section id="contact" title="">
      <MotionReveal>
        <div className={styles.contact}>
          <span className={styles.eyebrow}>04. What’s Next?</span>

          <h2 className={styles.title}>Get In Touch</h2>

          <p className={styles.text}>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you.
          </p>

          <a href="mailto:hello@example.com" className={styles.button}>
            Say Hello
          </a>
          { <br />}
          <div className={styles.footer}>
            Designed & Built by Vipan Kumar
          </div>
        </div>
      </MotionReveal>
    </Section>
  );
}
