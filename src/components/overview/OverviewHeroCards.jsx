import React from "react";
import PropTypes from "prop-types";
import GlassCard from "../../ui/GlassCard";

function OverviewHeroCards({ app, tab }) {
  const queueCount = Number.parseInt(app.queueCount, 10);

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <GlassCard title={`Welcome back, ${app.owner.split(" ")[0]}.`} subtitle={app.tagline}>
        <div className="rounded-2xl bg-gradient-to-r from-[#5e73e5]/25 via-cyan-500/10 to-fuchsia-500/10 p-5 ring-1 ring-slate-900/10 dark:ring-white/10">
          <div className="text-sm leading-6 text-slate-700 dark:text-white/75">
            {tab.description}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-extrabold uppercase tracking-[0.16em]">
            <span className="rounded-full bg-white/70 px-3 py-1 text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white/80 dark:ring-white/10">
              {app.region}
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-white/80 dark:ring-white/10">
              {app.boardLabel}
            </span>
          </div>
        </div>
      </GlassCard>

      <GlassCard title="Satisfaction Rate" subtitle="Based on recent workspace activity">
        <div className="grid place-items-center">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-slate-900/5 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
            <div className="text-2xl font-extrabold">{app.health}</div>
            <div className="text-xs text-slate-600 dark:text-white/70">Team confidence</div>
          </div>
        </div>
      </GlassCard>

      <GlassCard title={`${app.boardLabel} Tracking`} subtitle={`${app.boardLabel} / ${app.automationLabel}`}>
        <div className="grid gap-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-white/70">Priority items</span>
            <span className="font-extrabold">{app.queueCount}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-white/70">Ready now</span>
            <span className="font-extrabold">{Math.max(3, queueCount - 4)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-white/70">Live workflows</span>
            <span className="font-extrabold">{app.automations}</span>
          </div>
        </div>
      </GlassCard>
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
