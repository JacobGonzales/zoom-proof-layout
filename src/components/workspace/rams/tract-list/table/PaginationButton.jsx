import React from "react";
import PropTypes from "prop-types";

export default function PaginationButton({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45 dark:border-white/18 dark:text-white/80 dark:hover:bg-white/10"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

PaginationButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
