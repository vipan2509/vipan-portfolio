"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow =
      document.querySelector(
        ".glow"
      ) as HTMLElement;

    if (!glow) return;

    const move = (
      e: MouseEvent
    ) => {
      glow.style.transform =
        `translate(
          ${e.clientX - 250}px,
          ${e.clientY - 250}px
        )`;
    };

    window.addEventListener(
      "mousemove",
      move
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );
  }, []);

  return null;
}