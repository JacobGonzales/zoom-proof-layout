import React from "react";
import PropTypes from "prop-types";
import AppShell from "../ui/AppShell";
import GlassCard from "../ui/GlassCard";

function MiniStat({ label, value, delta, positive }) {
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

MiniStat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  delta: PropTypes.string.isRequired,
  positive: PropTypes.bool.isRequired,
};

export default function Dashboard() {
  return (
    <AppShell pageLabel="Dashboard" title="Dashboard">
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))]">
        <MiniStat label="Today's Money" value="$53,000" delta="+55%" positive />
        <MiniStat label="Today's Users" value="2,300" delta="+3%" positive />
        <MiniStat label="New Clients" value="+3,462" delta="-2%" positive={false} />
        <MiniStat label="Total Sales" value="$103,430" delta="+5%" positive />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard title="Welcome back," subtitle="Ask me anything.">
          <div className="h-36 rounded-2xl bg-gradient-to-r from-[#5e73e5]/25 via-cyan-500/10 to-fuchsia-500/10 ring-1 ring-slate-900/10 dark:ring-white/10" />
        </GlassCard>

        <GlassCard title="Satisfaction Rate" subtitle="From all projects">
          <div className="grid place-items-center">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-slate-900/5 ring-1 ring-slate-900/10 dark:bg-white/5 dark:ring-white/10">
              <div className="text-2xl font-extrabold">95%</div>
              <div className="text-xs text-slate-600 dark:text-white/70">Based on likes</div>
            </div>
          </div>
        </GlassCard>

        <GlassCard title="Referral Tracking" subtitle="Invited / Bonus">
          <div className="grid gap-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-white/70">Invited</span>
              <span className="font-extrabold">145 people</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-white/70">Bonus</span>
              <span className="font-extrabold">1,465</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
