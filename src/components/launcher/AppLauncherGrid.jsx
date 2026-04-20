import React from "react";
import PropTypes from "prop-types";
import GlassCard from "../../ui/GlassCard";
import AppLauncherTile from "./AppLauncherTile";

function AppLauncherGrid({ apps }) {
  return (
    <div className="mt-6">
      <GlassCard title="Applications" subtitle="Nine demo workspaces with unique sidebars and routes.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {apps.map((app) => (
            <AppLauncherTile key={app.id} app={app} />
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

AppLauncherGrid.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default AppLauncherGrid;
