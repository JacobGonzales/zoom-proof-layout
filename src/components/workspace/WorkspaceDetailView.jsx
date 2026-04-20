import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GlassCard from "../../ui/GlassCard";
import InfoList from "../../ui/InfoList";
import ValueStatCard from "../../ui/ValueStatCard";

function WorkspaceDetailView({ app, activeTab }) {
  return (
    <>
      <GlassCard title="Workspace shell" subtitle="This is the app-level dashboard after leaving the launcher page.">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-2xl text-sm leading-6 text-slate-700 dark:text-white/75">
            {activeTab.description}
          </div>
          <Link
            to="/dashboard"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Back to launcher
          </Link>
        </div>
      </GlassCard>

      <div className="mt-6 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]">
        {activeTab.metrics.map((metric) => (
          <ValueStatCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr,1fr]">
        <GlassCard title="Priority queue" subtitle={`Live notes for the ${activeTab.label.toLowerCase()} tab.`}>
          <InfoList items={activeTab.queue} />
        </GlassCard>

        <GlassCard title="Recent activity" subtitle={`${app.label} updates generated for the demo.`}>
          <InfoList items={activeTab.activity} />
        </GlassCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard title="Workspace owner" subtitle="Primary contact for this app shell">
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{app.owner}</div>
          <div className="mt-2 text-sm text-slate-600 dark:text-white/70">
            Region: {app.region}
          </div>
        </GlassCard>

        <GlassCard title="Current tab" subtitle="You can swap tabs from the left sidebar.">
          <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{activeTab.label}</div>
          <div className="mt-2 text-sm text-slate-600 dark:text-white/70">
            Route: /apps/{app.id}/{activeTab.id}
          </div>
        </GlassCard>

        <GlassCard title="Shell behavior" subtitle="What this pattern proves out">
          <div className="grid gap-2 text-sm text-slate-700 dark:text-white/75">
            <div>The launcher and app views share one layout component.</div>
            <div>The sidebar changes purely from route-aware config.</div>
            <div>Each app can grow its own tabs without affecting the others.</div>
          </div>
        </GlassCard>
      </div>
    </>
  );
}

WorkspaceDetailView.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  }).isRequired,
  activeTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    metrics: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
    queue: PropTypes.arrayOf(PropTypes.string).isRequired,
    activity: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default WorkspaceDetailView;
