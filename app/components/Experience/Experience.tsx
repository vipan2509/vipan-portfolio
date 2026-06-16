"use client";

import { useState } from "react";
import "./Experience.scss";
import {companies} from "../../lib/data"

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className="experience" id="experience">

      <div className="tabs">
        {companies.map((item, index) => (
          <button
            key={item.company}
            className={`tab ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {item.company}
          </button>
        ))}

        <span
          className="indicator"
          style={{
            transform: `translateY(${active * 56}px)`
          }}
        />
      </div>

      <div key={active} className="content">
        <h3>{companies[active].role}</h3>

        <span className="period">
          {companies[active].period}
        </span>

        <p>{companies[active].desc}</p>
      </div>
    </section>
  );
}