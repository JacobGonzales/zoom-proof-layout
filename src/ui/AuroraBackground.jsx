// src/ui/AuroraBackground.jsx
import React from "react";

function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_10%,rgba(94,115,229,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_40%,transparent_35%,rgba(15,23,42,0.06)_100%)]" />
      </div>

      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-[#0B1026]" />
      </div>
    </div>
  );
}

export default AuroraBackground;
