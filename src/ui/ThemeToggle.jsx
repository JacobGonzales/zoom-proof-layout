import React, { useState } from "react";
import PropTypes from "prop-types";
import { getCurrentTheme, toggleTheme } from "../theme/theme";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonStarsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M16.2 5.2l.5 1.2 1.2.5-1.2.5-.5 1.2-.5-1.2-1.2-.5 1.2-.5.5-1.2Z" fill="currentColor" />
      <path d="M19 8.6l.35.85.85.35-.85.35L19 11l-.35-.85-.85-.35.85-.35L19 8.6Z" fill="currentColor" opacity="0.95" />
    </svg>
  );
}

function ThemeToggle({ className }) {
  const [theme, setTheme] = useState(() => getCurrentTheme());
  const isDark = theme === "dark";

  const onToggle = () => {
    const next = toggleTheme();
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        "relative inline-flex h-11 w-24 items-center rounded-full p-1",
        "select-none backdrop-blur shadow-sm transition-colors",
        "bg-slate-900/5 ring-1 ring-slate-900/10 hover:bg-slate-900/10",
        "dark:bg-white/10 dark:ring-white/10 dark:hover:bg-white/15",
        className || "",
      ].join(" ")}
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      <span className="pointer-events-none absolute inset-1 rounded-full bg-gradient-to-r from-[#5e73e5]/15 via-cyan-500/10 to-fuchsia-500/10 dark:from-[#5e73e5]/25" />
      <span
        className={[
          "absolute top-1 grid h-9 w-9 place-items-center rounded-full",
          "bg-white shadow-md ring-1 ring-black/10",
          "transition-transform duration-300 ease-out",
          isDark ? "translate-x-[56px]" : "translate-x-0",
        ].join(" ")}
        style={{ left: 4 }}
      >
        <span className="text-[#5e73e5]">{isDark ? <MoonStarsIcon /> : <SunIcon />}</span>
      </span>
    </button>
  );
}

ThemeToggle.propTypes = { className: PropTypes.string };
ThemeToggle.defaultProps = { className: "" };

export default ThemeToggle;
