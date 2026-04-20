import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getNavIcon } from "../../nav/getNavIcon";
import { getAppLaunchPath } from "../../nav/navConfig";

function AppLauncherTile({ app }) {
  return (
    <Link
      to={getAppLaunchPath(app.id)}
      className="group min-w-0 rounded-2xl bg-white/65 p-5 shadow-sm ring-1 ring-slate-900/10 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:bg-white/80 dark:bg-white/5 dark:ring-white/10 dark:hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1"
          style={{
            color: app.accent,
            backgroundColor: `${app.accent}18`,
            borderColor: `${app.accent}40`,
          }}
        >
          {getNavIcon(app.iconKey)}
        </div>
        <div className="rounded-full bg-slate-900/5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-600 dark:bg-white/10 dark:text-white/65">
          {app.health}
        </div>
      </div>

      <div className="mt-4 text-base font-extrabold text-slate-900 dark:text-white">
        {app.label}
      </div>
      <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{app.tagline}</div>
      <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-white/72">
        {app.description}
      </div>

      <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
        <span>{app.members} seats</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          Open workspace
        </span>
      </div>
    </Link>
  );
}

AppLauncherTile.propTypes = {
  app: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconKey: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    health: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppLauncherTile;
