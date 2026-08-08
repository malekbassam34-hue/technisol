"use client";

import { useEffect, useState } from "react";

type ViewMode = "desktop" | "mobile";

export default function ViewportSwitcher() {
  const [isPhone, setIsPhone] = useState(false);
  const [mode, setMode] = useState<ViewMode>("desktop");

  useEffect(() => {
  const mobileDevice =
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    window.screen.width <= 768;

  setIsPhone(mobileDevice);
}, []);

  const changeView = (newMode: ViewMode) => {
    const viewport = document.querySelector(
      'meta[name="viewport"]'
    ) as HTMLMetaElement | null;

    if (!viewport) return;

    if (newMode === "desktop") {
      viewport.setAttribute(
        "content",
        "width=1280, user-scalable=yes"
      );
    } else {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1, user-scalable=yes"
      );
    }

    setMode(newMode);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  if (!isPhone) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-[99999] flex overflow-hidden rounded-full border border-white/20 bg-slate-950/80 p-1.5 shadow-2xl backdrop-blur-xl 
        ${
 mode === "desktop"
          ? "origin-bottom-right scale-[1.35]"
          : ""
      }`}
    >
      <button
        onClick={() => changeView("desktop")}
        className={`rounded-full px-4 py-2 text-xs font-bold transition ${
          mode === "desktop"
            ? "bg-cyan-400 text-slate-950"
            : "text-white hover:bg-white/10"
        }`}
      >
        Version ordinateur
      </button>

      <button
        onClick={() => changeView("mobile")}
        className={`rounded-full px-4 py-2 text-xs font-bold transition ${
          mode === "mobile"
            ? "bg-cyan-400 text-slate-950"
            : "text-white hover:bg-white/10"
        }`}
      >
        Version mobile
      </button>
    </div>
  );
}