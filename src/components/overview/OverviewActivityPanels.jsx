import React from "react";
import PropTypes from "prop-types";
import GlassCard from "../../ui/GlassCard";
import InfoList from "../../ui/InfoList";

function OverviewActivityPanels({ appLabel, tabLabel, queue, activity }) {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr,1fr]">
      <GlassCard title="Priority queue" subtitle={`Live notes for the ${tabLabel.toLowerCase()} tab.`}>
        <InfoList items={queue} />
      </GlassCard>

      <GlassCard title="Recent activity" subtitle={`${appLabel} updates generated for the demo.`}>
        <InfoList items={activity} />
      </GlassCard>
    </div>
  );
}

OverviewActivityPanels.propTypes = {
  appLabel: PropTypes.string.isRequired,
  tabLabel: PropTypes.string.isRequired,
  queue: PropTypes.arrayOf(PropTypes.string).isRequired,
  activity: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OverviewActivityPanels;
