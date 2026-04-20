import React from "react";
import PropTypes from "prop-types";
import MiniStatCard from "../../ui/MiniStatCard";

function OverviewStatsGrid({ app }) {
  const automationCount = Number.parseInt(app.automations, 10);

  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))]">
      <MiniStatCard label="Workspace Health" value={app.health} delta="+4%" positive />
      <MiniStatCard label="Team Members" value={app.members} delta="+2 seats" positive />
      <MiniStatCard label="Queued Actions" value={app.queueCount} delta="-3%" positive />
      <MiniStatCard
        label="Automation Runs"
        value={app.automations}
        delta={automationCount > 20 ? "+9%" : "+4%"}
        positive
      />
    </div>
  );
}

OverviewStatsGrid.propTypes = {
  app: PropTypes.shape({
    health: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired,
    queueCount: PropTypes.string.isRequired,
    automations: PropTypes.string.isRequired,
  }).isRequired,
};

export default OverviewStatsGrid;
