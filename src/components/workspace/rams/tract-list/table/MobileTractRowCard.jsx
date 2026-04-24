import React from "react";
import PropTypes from "prop-types";

export default function MobileTractRowCard({ fields, row, selected, onToggle, onOpenDetails }) {
  return (
    <div className="border-b border-slate-300/90 p-4 last:border-b-0 dark:border-white/18">
      <div className="flex items-start justify-between gap-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" aria-label={`Flag ${row.tractName}`} checked={selected} onChange={onToggle} />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
            Flag
          </span>
        </label>
        <button type="button" className="text-right" onClick={() => onOpenDetails(row.id)}>
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/50">
            Tract
          </div>
          <div className="mt-1 text-sm font-bold text-slate-950 transition-colors hover:text-[#5e73e5] dark:text-white dark:hover:text-[#7c8dff]">
            {row.tractName}
          </div>
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {fields.map((field) => {
          const { key, label } = field;
          return (
            <div key={key} className="border border-slate-300/90 px-3 py-2 dark:border-white/18">
              <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/50">
                {label}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800 dark:text-white/80">{row[key]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

MobileTractRowCard.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tractName: PropTypes.string.isRequired,
    acquisition: PropTypes.string.isRequired,
    appraisal: PropTypes.string.isRequired,
    survey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onOpenDetails: PropTypes.func.isRequired,
};
