// src/ui/AuroraBackground.jsx
import React from "react";

function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* LIGHT MODE: calm */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_10%,rgba(94,115,229,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_40%,transparent_35%,rgba(15,23,42,0.06)_100%)]" />
      </div>

      {/* DARK MODE: bright aurora borealis */}
      <div className="absolute inset-0 hidden dark:block">
        {/* deep night base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#060A1E] to-[#070A1A]" />

        {/* stars (subtle) */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.75) 0.7px, transparent 0.8px),
              radial-gradient(rgba(255,255,255,0.45) 0.5px, transparent 0.6px)
            `,
            backgroundSize: "140px 140px, 220px 220px",
            backgroundPosition: "0 0, 70px 45px",
          }}
        />

        {/* BIG BRIGHT GREEN CURTAIN GLOW (matches your image brightness) */}
        <div className="absolute -inset-[15%] blur-2xl mix-blend-screen bg-[radial-gradient(1000px_520px_at_55%_45%,rgba(80,240,176,0.75),transparent_62%)]" />
        <div className="absolute -inset-[20%] blur-3xl mix-blend-screen bg-[radial-gradient(1100px_620px_at_35%_55%,rgba(96,240,192,0.55),transparent_65%)]" />

        {/* teal sky glow (fills the scene like the photo) */}
        <div className="absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(1200px_700px_at_50%_35%,rgba(0,112,128,0.40),transparent_70%)]" />

        {/* “curtains” rays (static) */}
        <div
          className="absolute inset-0 opacity-55 mix-blend-screen"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                rgba(80,240,176,0.00) 0px,
                rgba(80,240,176,0.00) 16px,
                rgba(80,240,176,0.14) 26px,
                rgba(80,240,176,0.00) 40px
              )
            `,
            maskImage:
              "radial-gradient(950px 520px at 50% 55%, black 0%, rgba(0,0,0,0.55) 58%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(950px 520px at 50% 55%, black 0%, rgba(0,0,0,0.55) 58%, transparent 82%)",
            filter: "blur(0.5px)",
          }}
        />

        {/* vignette for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_40%,transparent_35%,rgba(0,0,0,0.72)_100%)]" />
      </div>
    </div>
  );
}

export default AuroraBackground;