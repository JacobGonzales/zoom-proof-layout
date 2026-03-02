import React from "react";
import PropTypes from "prop-types";

function TopBar({ pageLabel, title, rightSlot, onOpenMenu }) {
  return (
    <div className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <button
          type="button"
          className="lg:hidden rounded-lg bg-slate-900/5 px-3 py-2 text-sm font-extrabold uppercase tracking-wide text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15"
          onClick={onOpenMenu}
        >
          Menu
        </button>

        <div className="min-w-0 flex-1">
          <div className="min-w-0 text-xs font-semibold text-slate-600 dark:text-white/70">
            <span className="break-words">
              Pages /{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {pageLabel}
              </span>
            </span>
          </div>

          <div className="min-w-0 truncate text-lg font-extrabold text-slate-900 dark:text-white">
            {title}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-2 ring-1 ring-slate-900/10 backdrop-blur dark:bg-white/10 dark:ring-white/10">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-slate-600 dark:text-white/70"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-5.2-5.2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <input
              className="w-36 sm:w-44 bg-transparent text-sm text-slate-900 placeholder:text-slate-500 outline-none dark:text-white dark:placeholder:text-white/60"
              placeholder="Type here..."
            />
          </div>

          {rightSlot}
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  pageLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rightSlot: PropTypes.node,
  onOpenMenu: PropTypes.func.isRequired,
};

TopBar.defaultProps = {
  rightSlot: null,
};

export default TopBar;
