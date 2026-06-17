import Section from "../Section/Section";
import MotionReveal from "../MotionReveal/MotionReveal";
import { aboutData } from "../../lib/data";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div id="about" title="01. About">
     
        <div className={styles.layout}>
          <div className={styles.left}>
            <div>
              {aboutData.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <ul className={styles.skillslist}>
                {aboutData.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.right}>&nbsp;</div>
        </div>

    </div>
  );
}
