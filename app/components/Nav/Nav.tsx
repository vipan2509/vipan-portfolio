"use client";

import { useState } from "react";
import "./Nav.scss";
import { nav } from "../../lib/data";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile only */}
      <button
        className="menuButton"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        {nav.map((item) => (
          <li className="link" key={item}>
            <a href={`#${item}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          </li>
        ))}

        <a className="resume" href="#">
          Resume
        </a>
      </nav>

      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}