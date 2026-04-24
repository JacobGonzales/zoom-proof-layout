import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getNavIcon } from "../../nav/getNavIcon";
import { getAppLaunchPath } from "../../nav/navConfig";

function AppLauncherTile({ app }) {
  return (
    <Link
      to={getAppLaunchPath(app.id)}
      className="group min-w-0 rounded-2xl bg-white/60 p-5 ring-1 ring-slate-900/10 transition-colors duration-200 hover:bg-white/72 dark:bg-[#0B1026] dark:ring-white/10 dark:hover:bg-[#111831]"
    >
      <div className="flex flex-col items-center text-center">
        <div
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl ring-1"
          style={{
            color: app.accent,
            backgroundColor: `${app.accent}18`,
            borderColor: `${app.accent}40`,
          }}
        >
          {getNavIcon(app.iconKey)}
        </div>

        <div className="mt-4 text-base font-extrabold text-slate-900 dark:text-white">
          {app.label}
        </div>
        <div className="mt-1 text-sm text-slate-600 dark:text-white/70">{app.tagline}</div>
        <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-white/72">
          {app.description}
        </div>
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
  }).isRequired,
};

export default AppLauncherTile;
