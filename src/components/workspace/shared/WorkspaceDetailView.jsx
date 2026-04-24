import React from "react";
import PropTypes from "prop-types";
import InfoList from "../../../ui/InfoList";
import ValueStatCard from "../../../ui/ValueStatCard";

function WorkspaceDetailView({ app, activeTab }) {
  return (
    <>
      <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
        <div className="max-w-3xl">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
            Workspace shell
          </div>
          <div className="mt-2 text-sm text-slate-600 dark:text-white/70">
            This is the app-level dashboard after leaving the launcher page.
          </div>
          <div className="mt-4 text-sm leading-7 text-slate-700 dark:text-white/75">
            {activeTab.description}
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]">
        {activeTab.metrics.map((metric) => (
          <ValueStatCard key={metric.label} label={metric.label} value={metric.value} flat />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr,1fr]">
        <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
          <div className="text-sm font-extrabold text-slate-900 dark:text-white">Priority queue</div>
          <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
            Live notes for the {activeTab.label.toLowerCase()} tab.
          </div>
          <div className="mt-4">
            <InfoList items={activeTab.queue} flat />
          </div>
        </section>

        <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
          <div className="text-sm font-extrabold text-slate-900 dark:text-white">Recent activity</div>
          <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
            {app.label} updates generated for the demo.
          </div>
          <div className="mt-4">
            <InfoList items={activeTab.activity} flat />
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
            Workspace owner
          </div>
          <div className="mt-1 text-sm text-slate-600 dark:text-white/70">Primary contact for this app shell</div>
          <div className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">{app.owner}</div>
          <div className="mt-2 text-sm text-slate-600 dark:text-white/70">
            Region: {app.region}
          </div>
        </section>

        <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
            Current tab
          </div>
          <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
            You can swap tabs from the left sidebar.
          </div>
          <div className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">{activeTab.label}</div>
          <div className="mt-2 text-sm text-slate-600 dark:text-white/70">
            Route: /apps/{app.id}/{activeTab.id}
          </div>
        </section>

        <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
          <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
            Shell behavior
          </div>
          <div className="mt-1 text-sm text-slate-600 dark:text-white/70">What this pattern proves out</div>
          <div className="grid gap-2 text-sm text-slate-700 dark:text-white/75">
            <div>The launcher and app views share one layout component.</div>
            <div>The sidebar changes purely from route-aware config.</div>
            <div>Each app can grow its own tabs without affecting the others.</div>
          </div>
        </section>
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
