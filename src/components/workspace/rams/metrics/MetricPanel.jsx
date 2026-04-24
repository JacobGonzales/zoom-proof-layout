import React from "react";
import PropTypes from "prop-types";

export default function MetricPanel({ eyebrow, title, subtitle, children }) {
  return (
    <section className="border-b border-r border-slate-300/90 p-5 dark:border-white/18">
      <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
        {eyebrow}
      </div>
      <div className="mt-2 text-base font-extrabold text-slate-900 dark:text-white">{title}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{subtitle}</div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

MetricPanel.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
