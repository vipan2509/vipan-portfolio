import styles from "./Contact.scss";
import Section from "../Section/Section";
import MotionReveal from "../MotionReveal/MotionReveal";
export default function Contact() {
  return (
    <Section id="contact" title="CONTACT">
      
      <MotionReveal>
        
        <div className="contact">
          
          <h2 className="title"> Say Hello </h2>
          <p className="text">
            
            I enjoy building thoughtful digital experiences and collaborating
            with ambitious teams.
          </p>
          <a href="#" className="button">
            
            Get In Touch
          </a>
        </div>
      </MotionReveal>
    </Section>
  );
}
