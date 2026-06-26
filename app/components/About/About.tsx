import Section from "../Section/Section";
import MotionReveal from "../MotionReveal/MotionReveal";
import { aboutData } from "../../lib/data";
import styles from "./About.module.scss";
import Eyebrow from "../Eyebrow/Eyebrow";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
        <Eyebrow number="01." name="About Me" ></Eyebrow>
        <div className={styles.layout}>
          <div className={styles.left}>
            <div>
              {aboutData.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <ul className="skillslist">
                {aboutData.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.right}>&nbsp;</div>
        </div>

    </section>
  );
}
