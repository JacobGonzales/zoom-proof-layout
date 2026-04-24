import React from "react";
import ThemeToggle from "./ThemeToggle";

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7 10a5 5 0 1 1 10 0v3.2c0 .7.2 1.4.6 2l.9 1.3H5.5l.9-1.3c.4-.6.6-1.3.6-2V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function TopBarActions() {
  const notificationCount = 17;

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={`Show ${notificationCount} notifications`}
        className={[
          "relative inline-flex h-10 w-10 items-center justify-center rounded-xl",
          "bg-slate-900/5 text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-900/10 hover:text-slate-900",
          "dark:bg-white/10 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/15 dark:hover:text-white",
        ].join(" ")}
      >
        <BellIcon />
        <span className="absolute -right-1 -top-1 inline-flex min-w-[1.2rem] items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-extrabold leading-none text-white shadow-sm">
          {notificationCount}
        </span>
      </button>

      <ThemeToggle compact />
    </div>
  );
}
