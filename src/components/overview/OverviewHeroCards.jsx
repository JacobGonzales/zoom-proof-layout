import React from "react";
import PropTypes from "prop-types";

function OverviewHeroCards({ app, tab }) {
  const queueCount = Number.parseInt(app.queueCount, 10);

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <section className="border-b border-slate-300/90 pb-6 dark:border-white/18 lg:col-span-2">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
          Welcome back, {app.owner.split(" ")[0]}.
        </div>
        <div className="mt-2 text-sm text-slate-600 dark:text-white/70">{app.tagline}</div>
        <div className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 dark:text-white/75">
          {tab.description}
        </div>
        <div className="mt-5 flex flex-wrap gap-6 text-sm">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
              Region
            </div>
            <div className="mt-1 font-semibold text-slate-900 dark:text-white">{app.region}</div>
          </div>
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
              Focus
            </div>
            <div className="mt-1 font-semibold text-slate-900 dark:text-white">{app.boardLabel}</div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
          Satisfaction rate
        </div>
        <div className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white">{app.health}</div>
        <div className="mt-2 text-sm text-slate-600 dark:text-white/70">Team confidence</div>
      </section>

      <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
          {app.boardLabel} tracking
        </div>
        <div className="mt-2 text-sm text-slate-600 dark:text-white/70">
          {app.boardLabel} / {app.automationLabel}
        </div>
        <div className="mt-5 grid gap-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-white/70">Priority items</span>
            <span className="font-extrabold text-slate-900 dark:text-white">{app.queueCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-white/70">Ready now</span>
            <span className="font-extrabold text-slate-900 dark:text-white">{Math.max(3, queueCount - 4)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-white/70">Live workflows</span>
            <span className="font-extrabold text-slate-900 dark:text-white">{app.automations}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

OverviewHeroCards.propTypes = {
  app: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    boardLabel: PropTypes.string.isRequired,
    automationLabel: PropTypes.string.isRequired,
    health: PropTypes.string.isRequired,
    queueCount: PropTypes.string.isRequired,
    automations: PropTypes.string.isRequired,
  }).isRequired,
  tab: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default OverviewHeroCards;
