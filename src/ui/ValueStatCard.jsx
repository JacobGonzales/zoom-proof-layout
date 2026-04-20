import React from "react";
import PropTypes from "prop-types";

function ValueStatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-900/5 p-4 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
      <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
        {label}
      </div>
      <div className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{value}</div>
    </div>
  );
}

ValueStatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValueStatCard;
