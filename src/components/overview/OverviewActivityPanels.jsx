import React from "react";
import PropTypes from "prop-types";
import InfoList from "../../ui/InfoList";

function OverviewActivityPanels({ appLabel, tabLabel, queue, activity }) {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr,1fr]">
      <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
        <div className="text-sm font-extrabold text-slate-900 dark:text-white">Priority queue</div>
        <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
          Live notes for the {tabLabel.toLowerCase()} tab.
        </div>
        <div className="mt-4">
          <InfoList items={queue} flat />
        </div>
      </section>

      <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
        <div className="text-sm font-extrabold text-slate-900 dark:text-white">Recent activity</div>
        <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
          {appLabel} updates generated for the demo.
        </div>
        <div className="mt-4">
          <InfoList items={activity} flat />
        </div>
      </section>
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
