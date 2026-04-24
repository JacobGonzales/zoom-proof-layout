import React from "react";
import PropTypes from "prop-types";
import AppLauncherTile from "./AppLauncherTile";

function AppLauncherGrid({ apps }) {
  return (
    <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-4 2xl:grid-cols-[repeat(auto-fit,minmax(19.5rem,1fr))]">
      {apps.map((app) => (
        <AppLauncherTile key={app.id} app={app} />
      ))}
    </div>
  );
}

AppLauncherGrid.propTypes = {
  apps: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default AppLauncherGrid;
