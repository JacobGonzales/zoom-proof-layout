import React from "react";
import PropTypes from "prop-types";
import OverviewActivityPanels from "../components/overview/OverviewActivityPanels";
import OverviewHeroCards from "../components/overview/OverviewHeroCards";
import OverviewStatsGrid from "../components/overview/OverviewStatsGrid";

function AppOverviewLanding({ app, tab }) {
  return (
    <>
      <OverviewStatsGrid app={app} />
      <OverviewHeroCards app={app} tab={tab} />
      <OverviewActivityPanels
        appLabel={app.label}
        tabLabel={tab.label}
        queue={tab.queue}
        activity={tab.activity}
      />
    </>
  );
}

AppOverviewLanding.propTypes = {
  app: PropTypes.shape({
    health: PropTypes.string.isRequired,
    members: PropTypes.string.isRequired,
    queueCount: PropTypes.string.isRequired,
    automations: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    boardLabel: PropTypes.string.isRequired,
    automationLabel: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  }).isRequired,
  tab: PropTypes.shape({
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    queue: PropTypes.arrayOf(PropTypes.string).isRequired,
    activity: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AppOverviewLanding;
