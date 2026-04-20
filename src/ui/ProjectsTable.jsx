import React from "react";

const PROJECT_ROWS = [
  ["Setinel Prism", "Online", "9,200", "42%"],
  ["Ingest Pipeline", "Working", "11,780", "74%"],
  ["Security Scan", "Online", "6,020", "33%"],
];

function ProjectsTable() {
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
          {PROJECT_ROWS.map((row) => (
            <tr key={row[0]} className="border-b border-slate-900/5 dark:border-white/5">
              <td className="py-3 pr-4 font-semibold text-slate-900 dark:text-white">{row[0]}</td>
              <td className="py-3 pr-4">{row[1]}</td>
              <td className="py-3 pr-4">{row[2]}</td>
              <td className="py-3">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
