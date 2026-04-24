import React, { useState } from "react";
import RamsMapFilters from "./RamsMapFilters";
import RamsMapPanel from "./RamsMapPanel";
import { DEFAULT_FILTERS, FILTER_OPTIONS } from "./ramsMapFilterConfig";

export default function RamsFilteredMapPanel() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  function handleFilterChange(key, value) {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  }

  return (
    <section className="border-b border-slate-300/90 pb-8 dark:border-white/18">
      <RamsMapFilters filters={filters} options={FILTER_OPTIONS} onChange={handleFilterChange} />
      <div className="pt-6">
        <RamsMapPanel filters={filters} />
      </div>
    </section>
  );
}
