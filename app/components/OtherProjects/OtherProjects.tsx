"use client";

import { useState } from "react";
import { otherProjects } from "../../lib/data";
import "./OtherProjects.scss";

const INITIAL_VISIBLE = 6;
const STEP = 3;

export default function OtherProjects() {
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const visibleProjects = otherProjects.slice(0, visible);

  const showMore = () => {
    setVisible((prev) => Math.min(prev + STEP, otherProjects.length));
  };

  const showLess = () => {
    setVisible(INITIAL_VISIBLE);
  };

  return (
    <section className="otherProjects" id="projects">
      <h2 className="otherProjects__title">Other Projects</h2>

      <div className="otherProjects__grid">
        {visibleProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard"
          >
            <div className="projectCard__icon">📁</div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <ul>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      <div className="actions">
        {visible < otherProjects.length ? (
          <button className="showButton" onClick={showMore}>
            Load More
          </button>
        ) : (
          <button className="showButton" onClick={showLess}>
            Load Less
          </button>
        )}
      </div>
    </section>
  );
}