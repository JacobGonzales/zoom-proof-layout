import React from "react";
import AppShell from "../ui/AppShell";
import GlassCard from "../ui/GlassCard";

function TableMock() {
  const rows = [
    ["Setinel Prism", "Online", "9,200", "42%"],
    ["Ingest Pipeline", "Working", "11,780", "74%"],
    ["Security Scan", "Online", "6,020", "33%"],
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-900/10 text-left text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:border-white/10 dark:text-white/60">
            <th className="py-3 pr-4">Project</th>
            <th className="py-3 pr-4">Status</th>
            <th className="py-3 pr-4">Budget</th>
            <th className="py-3">Completion</th>
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-white/85">
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-slate-900/5 dark:border-white/5">
              <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-white">{r[0]}</td>
              <td className="py-3 pr-4">{r[1]}</td>
              <td className="py-3 pr-4">{r[2]}</td>
              <td className="py-3">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Tables() {
  return (
    <AppShell pageLabel="Tables" title="Tables">
      <GlassCard title="Projects" subtitle="Reusable table block">
        <TableMock />
      </GlassCard>
    </AppShell>
  );
}
