import React from "react";
import PropTypes from "prop-types";
import BreadcrumbTrail from "./BreadcrumbTrail";
import TopBarSearch from "./TopBarSearch";

function TopBar({ breadcrumbs, title, rightSlot, onOpenMenu }) {
  return (
    <div className="rounded-[1.75rem] bg-white/78 px-4 py-4 shadow-lg ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0B1026]/78 dark:ring-white/10 sm:px-5 lg:px-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <button
          type="button"
          className="xl:hidden rounded-lg bg-slate-900/5 px-3 py-2 text-sm font-extrabold uppercase tracking-wide text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15"
          onClick={onOpenMenu}
        >
          Menu
        </button>

        <div className="min-w-0 flex-1">
          <BreadcrumbTrail items={breadcrumbs} />

          <div className="min-w-0 truncate text-lg font-extrabold text-slate-900 dark:text-white">
            {title}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <TopBarSearch />

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
  title: PropTypes.string.isRequired,
  rightSlot: PropTypes.node,
  onOpenMenu: PropTypes.func.isRequired,
};

TopBar.defaultProps = {
  rightSlot: null,
};

export default TopBar;
