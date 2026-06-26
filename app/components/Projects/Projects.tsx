"use client";

import "./Projects.scss";
import {projects} from "../../lib/data"
import Eyebrow from "../Eyebrow/Eyebrow";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="projects" id="work">
       <Eyebrow number="03." name="Some Things I’ve Built" ></Eyebrow>
      <h2 className="heading">
        03. Some Things I've Built
      </h2>

      {projects.map((project, index) => (
        <div
          key={project.title}
          className={`project ${
            index % 2 ? "reverse" : ""
          }`}
        >
          <div className="project__image">
            <Image
              key={project.title}
              src={project.image}
              alt={project.title}
              width={100}
              height={300}
            />
          </div>

          <div className="project__content">
            <span>{project.type}</span>

            <h3>{project.title}</h3>

            <div className="card">
              {project.desc}
            </div>

            <ul className="stack">
              {project.tech.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="actions">
              <button>GitHub</button>
              <button>Live</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}