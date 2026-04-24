import React from "react";
import PropTypes from "prop-types";

function SortArrow({ active, direction }) {
  if (!active) {
    return <span className="text-slate-400 dark:text-white/30">{"\u2195"}</span>;
  }

  return <span className="text-[#5e73e5] dark:text-[#7c8dff]">{direction === "asc" ? "\u2191" : "\u2193"}</span>;
}

export default function SortButton({ label, columnKey, sortConfig, onSort }) {
  const isActive = sortConfig.column === columnKey;

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 text-left text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-slate-900 dark:text-white/55 dark:hover:text-white"
      onClick={() => onSort(columnKey)}
    >
      <span>{label}</span>
      <SortArrow active={isActive} direction={sortConfig.direction} />
    </button>
  );
}

SortArrow.propTypes = {
  active: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(["asc", "desc"]).isRequired,
};

SortButton.propTypes = {
  label: PropTypes.string.isRequired,
  columnKey: PropTypes.string.isRequired,
  sortConfig: PropTypes.shape({
    column: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(["asc", "desc"]).isRequired,
  }).isRequired,
  onSort: PropTypes.func.isRequired,
};
