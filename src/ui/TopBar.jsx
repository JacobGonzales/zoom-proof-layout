import React from "react";
import PropTypes from "prop-types";
import BreadcrumbTrail from "./BreadcrumbTrail";

function TopBar({ breadcrumbs, titleAction, rightSlot, onOpenMenu }) {
  return (
    <div className="rounded-[1.75rem] bg-white/78 px-4 py-3 shadow-lg ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0B1026]/78 dark:ring-white/10 sm:px-5 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open sidebar navigation"
          className="xl:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900/5 text-slate-900 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15"
          onClick={onOpenMenu}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="min-w-0 flex-1">
          <BreadcrumbTrail items={breadcrumbs} />
          {titleAction ? <div className="mt-3">{titleAction}</div> : null}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {rightSlot}
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
  titleAction: PropTypes.node,
  rightSlot: PropTypes.node,
  onOpenMenu: PropTypes.func.isRequired,
};

TopBar.defaultProps = {
  titleAction: null,
  rightSlot: null,
};

export default TopBar;
