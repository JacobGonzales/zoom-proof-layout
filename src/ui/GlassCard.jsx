import React from "react";
import PropTypes from "prop-types";

function GlassCard({ title, subtitle, actions, children }) {
  return (
    <section className="min-w-0 rounded-2xl bg-slate-900/5 p-4 shadow-sm ring-1 ring-slate-900/10 backdrop-blur dark:bg-white/5 dark:ring-white/10">
      {(title || subtitle || actions) && (
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0">
            {title && (
              <div className="truncate text-sm font-extrabold text-slate-900 dark:text-white">
                {title}
              </div>
            )}
            {subtitle && (
              <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
                {subtitle}
              </div>
            )}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      )}

      <div className={title || subtitle || actions ? "mt-4 min-w-0" : "min-w-0"}>
        {children}
      </div>
    </section>
  );
}

GlassCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
};

GlassCard.defaultProps = {
  title: undefined,
  subtitle: undefined,
  actions: null,
};

export default GlassCard;
