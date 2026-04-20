import React from "react";
import PropTypes from "prop-types";
import MiniStatCard from "../../ui/MiniStatCard";

function LauncherStatsGrid({ workspaceCount }) {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))]">
      <MiniStatCard label="Live workspaces" value={`${workspaceCount}`} delta="+2 this quarter" positive />
      <MiniStatCard label="Platform adoption" value="84%" delta="+6%" positive />
      <MiniStatCard label="Automation runs" value="14.2k" delta="+11%" positive />
      <MiniStatCard label="Escalations" value="37" delta="-8%" positive={false} />
    </div>
  );
}

LauncherStatsGrid.propTypes = {
  workspaceCount: PropTypes.number.isRequired,
};

export default LauncherStatsGrid;
