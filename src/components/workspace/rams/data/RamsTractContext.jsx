import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { TRACT_ROWS } from "./ramsTractData";
import { RamsTractContext } from "./useRamsTracts";

export function RamsTractProvider({ children }) {
  const [tracts, setTracts] = useState(TRACT_ROWS);

  const value = useMemo(
    () => ({
      tracts,
      getTractById(tractId) {
        return tracts.find((tract) => tract.id === tractId) || tracts[0];
      },
      addTract(tract) {
        setTracts((current) => [tract, ...current]);
      },
      updateTract(tractId, updates) {
        setTracts((current) =>
          current.map((tract) => (tract.id === tractId ? { ...tract, ...updates } : tract)),
        );
      },
    }),
    [tracts],
  );

  return <RamsTractContext.Provider value={value}>{children}</RamsTractContext.Provider>;
}

RamsTractProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
