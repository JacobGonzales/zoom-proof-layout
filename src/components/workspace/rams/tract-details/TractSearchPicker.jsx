import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

export default function TractSearchPicker({ tracts, selectedTractId, onSelect }) {
  const selectedTract = tracts.find((tract) => tract.id === selectedTractId) || tracts[0];
  const [query, setQuery] = useState(selectedTract?.tractName || "");
  const [open, setOpen] = useState(false);

  const matches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return tracts;
    }

    return tracts.filter((tract) => tract.tractName.toLowerCase().includes(normalizedQuery));
  }, [query, tracts]);

  function handleSelect(tract) {
    setQuery(tract.tractName);
    setOpen(false);
    onSelect(tract.id);
  }

  return (
    <div className="relative w-full max-w-sm">
      <label className="block text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
        Search tract name
      </label>
      <input
        type="search"
        value={query}
        placeholder="Find a tract"
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#5e73e5] dark:border-white/18 dark:bg-[#111831] dark:text-white dark:placeholder:text-white/35"
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          window.setTimeout(() => {
            setOpen(false);
            setQuery(selectedTract?.tractName || "");
          }, 120);
        }}
      />

      {open && matches.length > 0 ? (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-lg dark:border-white/18 dark:bg-[#111831]">
          <div className="max-h-64 overflow-y-auto py-2">
            {matches.map((tract) => (
              <button
                key={tract.id}
                type="button"
                className={[
                  "flex w-full items-center justify-between px-3 py-2 text-left transition-colors",
                  tract.id === selectedTractId
                    ? "bg-[#5e73e5]/10 text-slate-900 dark:text-white"
                    : "text-slate-700 hover:bg-slate-900/5 dark:text-white/80 dark:hover:bg-white/10",
                ].join(" ")}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleSelect(tract)}
              >
                <span className="truncate text-sm font-semibold">{tract.tractName}</span>
                <span className="ml-3 shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-white/45">
                  {tract.id}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

TractSearchPicker.propTypes = {
  tracts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tractName: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTractId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
