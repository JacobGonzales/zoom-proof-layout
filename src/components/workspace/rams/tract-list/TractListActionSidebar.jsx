import React from "react";
import PropTypes from "prop-types";

function AddIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M12 16V5M8 9l4-4 4 4M5 19h14" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M4 6h16l-6 7v5l-4 2v-7L4 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ collapsed }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d={collapsed ? "m9 6 6 6-6 6" : "m15 6-6 6 6 6"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ActionButton({ label, active, collapsed, onClick, icon }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={[
        "flex rounded-2xl text-left transition-colors",
        collapsed
          ? "justify-center px-3 py-4"
          : "items-center gap-3 px-3 py-4 sm:px-4",
        active
          ? "bg-[#5e73e5]/12 text-slate-900 ring-1 ring-[#5e73e5]/20 dark:bg-[#5e73e5]/18 dark:text-white dark:ring-[#7c8dff]/25"
          : "text-slate-700 hover:bg-slate-900/5 dark:text-white/80 dark:hover:bg-white/10",
      ].join(" ")}
      onClick={onClick}
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-900/8 dark:bg-white/10">{icon}</span>
      {collapsed ? null : <span className="text-sm font-bold sm:text-base">{label}</span>}
    </button>
  );
}

export default function TractListActionSidebar({
  collapsed,
  filtersVisible,
  onAddTract,
  onToggleCollapse,
  onToggleFilters,
}) {
  return (
    <aside className="border border-slate-300/90 bg-white p-2 sm:p-3 dark:border-white/18 dark:bg-[#111831] lg:sticky lg:top-24">
      <div className={["mb-2 flex", collapsed ? "justify-center" : "justify-end"].join(" ")}>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-300/90 text-slate-700 transition-colors hover:bg-slate-900/5 dark:border-white/18 dark:text-white/80 dark:hover:bg-white/10"
          aria-label={collapsed ? "Expand tract list actions" : "Collapse tract list actions"}
          onClick={onToggleCollapse}
        >
          <ChevronIcon collapsed={collapsed} />
        </button>
      </div>

      <div className="grid gap-2">
        <ActionButton collapsed={collapsed} label="Add Tract" icon={<AddIcon />} onClick={onAddTract} />
        <ActionButton collapsed={collapsed} label="Bulk Upload" icon={<UploadIcon />} onClick={() => {}} />
        <ActionButton
          collapsed={collapsed}
          label="Filter"
          icon={<FilterIcon />}
          active={filtersVisible}
          onClick={onToggleFilters}
        />
      </div>
    </aside>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};

ActionButton.defaultProps = {
  active: false,
  collapsed: false,
};

TractListActionSidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
  onAddTract: PropTypes.func.isRequired,
  onToggleCollapse: PropTypes.func.isRequired,
  onToggleFilters: PropTypes.func.isRequired,
};
