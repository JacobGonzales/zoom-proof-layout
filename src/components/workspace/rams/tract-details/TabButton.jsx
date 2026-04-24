import React from "react";
import PropTypes from "prop-types";

export default function TabButton({ active, label, onClick }) {
  return (
    <button
      type="button"
      className={[
        "rounded-xl px-4 py-2.5 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors",
        active
          ? "bg-[#5e73e5]/15 text-slate-900 ring-1 ring-[#5e73e5]/25 dark:text-white"
          : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white",
      ].join(" ")}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

TabButton.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
