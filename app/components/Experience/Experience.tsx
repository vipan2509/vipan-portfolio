"use client";

import { useState } from "react";
import { companies } from "../../lib/data";
import Eyebrow from "../Eyebrow/Eyebrow";
import styles from "./Experience.module.scss";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.experiencelayout} id="experience">
      <Eyebrow number="02." name="Title" />

      <div className={styles.experience}>
        <div className={styles.tabs}>
          {companies.map((item, index) => (
            <button
              key={item.company}
              className={`${styles.tab} ${
                active === index ? styles.active : ""
              }`}
              onClick={() => setActive(index)}
            >
              {item.company}
            </button>
          ))}

          <span
            className={styles.indicator}
            style={{
              transform: `translateY(${active * 56}px)`,
            }}
          />
        </div>

        <div key={active} className={styles.content}>
          <h3>{companies[active].role}</h3>

          <span className={styles.period}>{companies[active].period}</span>

          <div className={styles.desc}>{companies[active].desc.map((item, index) => (
              <p key={index}>{item}</p>
            ))}</div>

          <ul className="skillslist">
            {companies[active].listing.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
