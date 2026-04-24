import React, { useState } from "react";
import { useRamsTracts } from "../data/useRamsTracts";
import RamsFilteredMapPanel from "../map/RamsFilteredMapPanel";
import RamsTractTable from "./RamsTractTable";
import TractListActionSidebar from "./TractListActionSidebar";
import AddTractModal from "./AddTractModal";

export default function RamsTractListView() {
  const { tracts, addTract } = useRamsTracts();
  const [showStackedFilters, setShowStackedFilters] = useState(true);
  const [showAddTractModal, setShowAddTractModal] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="mt-6">
      <RamsFilteredMapPanel />

      <div
        className={[
          "mt-6 grid items-start gap-4",
          sidebarCollapsed
            ? "grid-cols-[5rem_minmax(0,_1fr)] sm:grid-cols-[5.25rem_minmax(0,_1fr)]"
            : "grid-cols-[9.5rem_minmax(0,_1fr)] sm:grid-cols-[12rem_minmax(0,_1fr)] lg:grid-cols-[15rem_minmax(0,_1fr)]",
        ].join(" ")}
      >
        <TractListActionSidebar
          collapsed={sidebarCollapsed}
          filtersVisible={showStackedFilters}
          onAddTract={() => setShowAddTractModal(true)}
          onToggleCollapse={() => setSidebarCollapsed((current) => !current)}
          onToggleFilters={() => setShowStackedFilters((current) => !current)}
        />

        <div className="min-w-0">
          <RamsTractTable showStackedFilters={showStackedFilters} />
        </div>
      </div>

      <AddTractModal
        open={showAddTractModal}
        existingTracts={tracts}
        onAdd={(nextTract) => {
          addTract(nextTract);
          setShowAddTractModal(false);
        }}
        onClose={() => setShowAddTractModal(false)}
      />
    </div>
  );
}
