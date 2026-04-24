import React from "react";
import PropTypes from "prop-types";
import TractSearchPicker from "./TractSearchPicker";

export default function TractDetailsHeader({
  title,
  tractId,
  location,
  flagged,
  isEditing,
  onTitleChange,
  onFlagChange,
  tractOptions,
  onSelectTract,
}) {
  return (
    <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
      <div className="w-full max-w-sm">
        <TractSearchPicker tracts={tractOptions} selectedTractId={tractId} onSelect={onSelectTract} />
      </div>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div>
            {isEditing ? (
              <input
                type="text"
                value={title}
                autoFocus
                className="min-w-[16rem] rounded-2xl border border-slate-300/90 bg-white px-4 py-3 text-3xl font-black tracking-tight text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-[#5e73e5] dark:border-white/18 dark:bg-[#111831] dark:text-white dark:placeholder:text-white/35 dark:focus:border-[#7c8dff]"
                placeholder="Enter tract name"
                onChange={(event) => onTitleChange(event.target.value)}
              />
            ) : (
              <div className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">{title}</div>
            )}
          </div>
          <label className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-white/75">
            <input type="checkbox" checked={flagged} disabled={!isEditing} onChange={(event) => onFlagChange(event.target.checked)} />
            <span>Flag</span>
          </label>
          <div className="mt-2 text-sm text-slate-600 dark:text-white/70">{tractId}</div>
        </div>
        <div className="text-sm font-semibold text-slate-700 dark:text-white/75">{location}</div>
      </div>
    </section>
  );
}

TractDetailsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tractId: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  flagged: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onFlagChange: PropTypes.func.isRequired,
  tractOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tractName: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelectTract: PropTypes.func.isRequired,
};
