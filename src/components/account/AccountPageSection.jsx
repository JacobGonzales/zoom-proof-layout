import React from "react";
import PropTypes from "prop-types";
import GlassCard from "../../ui/GlassCard";

function AccountPageSection({ title, subtitle, primaryLabel, bullets }) {
  return (
    <>
      <GlassCard title={title} subtitle={subtitle}>
        <div className="rounded-2xl bg-gradient-to-r from-[#5e73e5]/16 via-cyan-500/10 to-fuchsia-500/10 p-5 ring-1 ring-slate-900/10 dark:ring-white/10">
          <div className="text-sm leading-6 text-slate-700 dark:text-white/75">
            This is a placeholder account screen inside the launcher shell. It
            uses the same navigation and header behavior as the rest of the demo.
          </div>
          <div className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-slate-900">
            {primaryLabel}
          </div>
        </div>
      </GlassCard>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {bullets.map((item) => (
          <GlassCard key={item.title} title={item.title} subtitle={item.subtitle}>
            <div className="text-sm leading-6 text-slate-700 dark:text-white/75">
              {item.body}
            </div>
          </GlassCard>
        ))}
      </div>
    </>
  );
}

AccountPageSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  primaryLabel: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AccountPageSection;
