import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="m7 10 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path
        d="M8 8l8 8M16 8l-8 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function StackedFilterPicker({ options, selectedKeys, onToggle }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const selectedOptions = useMemo(
    () => options.filter((option) => selectedKeys.includes(option.key)),
    [options, selectedKeys],
  );

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div ref={rootRef} className="relative inline-block max-w-full">
      <div className="w-fit max-w-full rounded-xl border border-slate-300/90 bg-white px-3 py-2 dark:border-white/18 dark:bg-[#111831]">
        <div className="flex min-h-10 items-center gap-2">
          <div className="flex min-w-0 flex-1 flex-wrap gap-2">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/6 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-900/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15"
                  onClick={() => onToggle(option.key)}
                >
                  <span>{option.label}</span>
                  <CloseIcon />
                </button>
              ))
            ) : (
              <div className="px-2 text-sm font-semibold text-slate-400 dark:text-white/35">
                Add stacked filters
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={open ? "Close stacked filters" : "Open stacked filters"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-slate-900 dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
            onClick={() => setOpen((current) => !current)}
          >
            <ChevronIcon />
          </button>
        </div>
      </div>

      {open ? (
        <div className="absolute left-0 top-full z-20 mt-2 w-[min(36rem,calc(100vw-2rem))] min-w-[18rem] max-w-full overflow-hidden rounded-2xl border border-slate-300/90 bg-white shadow-xl dark:border-white/18 dark:bg-[#111831]">
          <div className="border-b border-slate-300/90 px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:border-white/18 dark:text-white/55">
            Add stacked filters
          </div>
          <div className="grid gap-1 p-2 md:grid-cols-2">
            {options.map((option) => (
              <label
                key={option.key}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-900/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                <input
                  type="checkbox"
                  checked={selectedKeys.includes(option.key)}
                  onChange={() => onToggle(option.key)}
                />
                <span className="min-w-0">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

StackedFilterPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
};
