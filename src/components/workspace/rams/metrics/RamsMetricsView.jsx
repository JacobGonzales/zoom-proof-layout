import React from "react";
import RamsFilteredMapPanel from "../map/RamsFilteredMapPanel";
import MetricPanel from "./MetricPanel";
import MetricChart from "./charts/MetricChart";
import { RAMS_METRIC_PANELS } from "./metricPanels";

export default function RamsMetricsView() {
  return (
    <>
      <RamsFilteredMapPanel />

      <div className="mt-6 grid border-l border-t border-slate-300/90 sm:grid-cols-2 2xl:grid-cols-3 dark:border-white/18">
        {RAMS_METRIC_PANELS.map((panel) => (
          <MetricPanel
            key={panel.title}
            eyebrow={panel.eyebrow}
            title={panel.title}
            subtitle={panel.subtitle}
          >
            <MetricChart chartId={panel.chartId} />
          </MetricPanel>
        ))}
      </div>
    </>
  );
}
