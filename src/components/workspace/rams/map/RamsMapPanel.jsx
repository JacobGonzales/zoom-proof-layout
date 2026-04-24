import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { DEFAULT_FILTERS } from "./ramsMapFilterConfig";
import ramsMapImage from "../../../../assets/maps/rams-tract-map.png";

const MAP_MARKERS = [
  { name: "Mesa Ridge", top: "18%", left: "22%", tone: "bg-emerald-500" },
  { name: "Cottonwood", top: "29%", left: "54%", tone: "bg-cyan-500" },
  { name: "Granite West", top: "47%", left: "38%", tone: "bg-violet-500" },
  { name: "Blue Mesa", top: "58%", left: "72%", tone: "bg-amber-500" },
  { name: "Silver Creek", top: "72%", left: "26%", tone: "bg-rose-500" },
];

export default function RamsMapPanel({ filters }) {
  const [panelHeight, setPanelHeight] = useState(384);
  const [isResizing, setIsResizing] = useState(false);
  const resizeStateRef = useRef(null);

  const activeFilters = useMemo(
    () => ({
      ...DEFAULT_FILTERS,
      ...filters,
    }),
    [filters],
  );

  const visibleMarkers = useMemo(() => {
    const values = Object.values(activeFilters);
    const indexSeed = values.reduce((sum, value) => sum + String(value).length, 0);

    return MAP_MARKERS.filter((_, index) => ((index + indexSeed) % 5) < 3);
  }, [activeFilters]);

  useEffect(() => {
    function handlePointerMove(event) {
      if (!resizeStateRef.current) {
        return;
      }

      const nextHeight =
        resizeStateRef.current.startHeight + (event.clientY - resizeStateRef.current.startY);

      setPanelHeight(Math.max(304, Math.min(720, nextHeight)));
    }

    function handlePointerUp() {
      resizeStateRef.current = null;
      setIsResizing(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  function handleResizeStart(event) {
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);

    resizeStateRef.current = {
      startY: event.clientY,
      startHeight: panelHeight,
    };

    setIsResizing(true);
    document.body.style.cursor = "ns-resize";
    document.body.style.userSelect = "none";
  }

  return (
    <div
      className={[
        "min-h-[19rem] overflow-hidden border border-slate-300/90 bg-slate-50/80 transition-shadow dark:border-white/18 dark:bg-[#0B1026]",
        isResizing ? "shadow-[0_0_0_1px_rgba(94,115,229,0.35)]" : "",
      ].join(" ")}
      style={{ height: `${panelHeight}px` }}
    >
      <div className="relative h-[calc(100%-2rem)] min-h-[17rem] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ramsMapImage})`,
          }}
        />
        <div
          className="absolute inset-0 opacity-35 dark:opacity-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04)), linear-gradient(90deg, rgba(100,116,139,0.14) 1px, transparent 1px), linear-gradient(rgba(100,116,139,0.14) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-white/12 dark:bg-[#0B1026]/24" />

        <div className="absolute inset-x-0 top-[33%] border-t border-dashed border-slate-400/70 dark:border-white/20" />
        <div className="absolute inset-x-0 top-[62%] border-t border-dashed border-slate-400/70 dark:border-white/20" />
        <div className="absolute bottom-0 left-[28%] top-0 border-l border-dashed border-slate-400/70 dark:border-white/20" />
        <div className="absolute bottom-0 left-[66%] top-0 border-l border-dashed border-slate-400/70 dark:border-white/20" />

        <div className="absolute left-3 right-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:right-4 sm:top-4">
          {[
            activeFilters.installation,
            activeFilters.county,
            activeFilters.milestone,
            activeFilters.branch,
            activeFilters.agency,
          ].map((token) => (
            <div
              key={token}
              className="max-w-full truncate rounded-full border border-slate-300/90 bg-white/92 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm dark:border-white/18 dark:bg-[#111831] dark:text-white/75 sm:px-3 sm:text-[11px]"
            >
              {token}
            </div>
          ))}
        </div>

        <div className="absolute left-[8%] top-[18%] text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/45 sm:top-[12%] sm:text-[11px]">
          {activeFilters.installation}
        </div>
        <div className="absolute left-[58%] top-[54%] text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/45 sm:text-[11px]">
          {activeFilters.milestone}
        </div>
        <div className="absolute left-[14%] top-[70%] text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/45 sm:text-[11px]">
          {activeFilters.agency}
        </div>

        {visibleMarkers.map((marker) => (
          <div
            key={marker.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: marker.top, left: marker.left }}
          >
            <div className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${marker.tone} ring-4 ring-white/80 dark:ring-[#0B1026] sm:h-3.5 sm:w-3.5`} />
              <div className="max-w-[7rem] truncate rounded-full border border-slate-300/90 bg-white/92 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm dark:border-white/18 dark:bg-[#111831] dark:text-white/75 sm:max-w-none sm:px-2.5 sm:text-[11px]">
                {marker.name}
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-3 right-3 flex items-center gap-2 border border-slate-300/90 bg-white/92 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600 dark:border-white/18 dark:bg-[#111831] dark:text-white/65 sm:bottom-4 sm:right-4 sm:px-3 sm:text-[11px]">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span>{visibleMarkers.length} tracked parcels</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="Resize map height"
        className={[
          "flex h-8 w-full cursor-ns-resize touch-none items-center justify-center border-t border-slate-300/90 bg-white/70 text-slate-400 transition-colors dark:border-white/18 dark:bg-[#111831] dark:text-white/35",
          isResizing
            ? "bg-slate-100 text-slate-700 dark:bg-[#18213f] dark:text-white/75"
            : "hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-[#18213f] dark:hover:text-white/75",
        ].join(" ")}
        onPointerDown={handleResizeStart}
      >
        <span className="h-1.5 w-20 rounded-full bg-current" />
      </button>
    </div>
  );
}

RamsMapPanel.propTypes = {
  filters: PropTypes.shape({
    installation: PropTypes.string,
    county: PropTypes.string,
    milestone: PropTypes.string,
    branch: PropTypes.string,
    agency: PropTypes.string,
  }),
};

RamsMapPanel.defaultProps = {
  filters: DEFAULT_FILTERS,
};
