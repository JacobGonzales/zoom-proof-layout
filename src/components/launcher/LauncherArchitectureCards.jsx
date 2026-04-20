import React from "react";
import GlassCard from "../../ui/GlassCard";

function LauncherArchitectureCards() {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr,1fr]">
      <GlassCard title="Routing pattern" subtitle="This is the structure now running in the demo.">
        <div className="overflow-x-auto rounded-2xl bg-slate-950 px-4 py-4 text-sm text-slate-100 ring-1 ring-white/10">
          <pre className="min-w-[320px] whitespace-pre-wrap font-mono">
{`/dashboard
/tables
/apps/revenue-ops/overview
/apps/revenue-ops/board
/apps/client-success/overview
/apps/risk-monitor/settings`}
          </pre>
        </div>
      </GlassCard>

      <GlassCard title="Why this scales" subtitle="Adding a new app is mostly config.">
        <div className="grid gap-3 text-sm text-slate-700 dark:text-white/75">
          <div>Define the app id, label, accent, and sidebar tabs once.</div>
          <div>The launcher card and app routes are generated from that same source.</div>
          <div>You keep a consistent shell without hardcoding nine different layouts.</div>
        </div>
      </GlassCard>
    </div>
  );
}

export default LauncherArchitectureCards;
