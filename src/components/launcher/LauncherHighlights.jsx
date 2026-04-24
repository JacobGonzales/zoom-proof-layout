import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getAppLaunchPath } from "../../nav/navConfig";
import GlassCard from "../../ui/GlassCard";

function LauncherHighlights({ suggestedApps }) {
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <GlassCard title="Workspace map" subtitle="Choose an app to enter its own dashboard shell.">
        <div className="rounded-2xl bg-gradient-to-br from-[#5e73e5]/20 via-cyan-500/10 to-emerald-500/10 p-5 ring-1 ring-slate-900/10 dark:ring-white/10">
          <div className="max-w-md text-sm leading-6 text-slate-700 dark:text-white/75">
            The launcher stays lightweight and acts like a portal. Each app opens
            on a new route and swaps the sidebar to that app&apos;s own tabs.
          </div>
        </div>
      </GlassCard>

      <GlassCard title="What changes" subtitle="Inside an app workspace">
        <div className="grid gap-3 text-sm text-slate-700 dark:text-white/75">
          <div className="rounded-2xl bg-slate-900/5 px-4 py-3 ring-1 ring-slate-900/10 dark:bg-[#111831] dark:ring-white/10">
            New URL structure: <span className="font-extrabold text-slate-900 dark:text-white">/apps/:appId/:tabId</span>
          </div>
          <div className="rounded-2xl bg-slate-900/5 px-4 py-3 ring-1 ring-slate-900/10 dark:bg-[#111831] dark:ring-white/10">
            Sidebar switches from platform pages to app-specific workspace tabs
          </div>
          <div className="rounded-2xl bg-slate-900/5 px-4 py-3 ring-1 ring-slate-900/10 dark:bg-[#111831] dark:ring-white/10">
            One shell component still handles layout for both levels
          </div>
        </div>
      </GlassCard>

      <GlassCard title="Suggested first clicks" subtitle="A few demo flows">
        <div className="grid gap-3 text-sm">
          {suggestedApps.map((app) => (
            <Link
              key={app.id}
              to={getAppLaunchPath(app.id)}
              className="flex items-center justify-between rounded-2xl bg-slate-900/5 px-4 py-3 font-semibold text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-900/10 dark:bg-[#111831] dark:text-white/80 dark:ring-white/10 dark:hover:bg-[#182141]"
            >
              <span>{app.label}</span>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
                Open
              </span>
            </Link>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

LauncherHighlights.propTypes = {
  suggestedApps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LauncherHighlights;
