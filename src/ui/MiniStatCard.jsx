import React from "react";
import PropTypes from "prop-types";

function MiniStatCard({ label, value, delta, positive }) {
  return (
    <div className="min-w-0 rounded-2xl bg-slate-900/5 p-4 ring-1 ring-slate-900/10 backdrop-blur dark:bg-white/5 dark:ring-white/10">
      <div className="text-xs font-semibold text-slate-600 dark:text-white/70">{label}</div>
      <div className="mt-1 text-xl font-extrabold text-slate-900 dark:text-white">{value}</div>
      <div className="mt-1 text-sm">
        <span className={positive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
          {delta}
        </span>
        <span className="text-slate-600 dark:text-white/70"> since last week</span>
      </div>
    </div>
  );
}

MiniStatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  delta: PropTypes.string.isRequired,
  positive: PropTypes.bool.isRequired,
};

export default MiniStatCard;
