import React from "react";
import PropTypes from "prop-types";

function SidebarPanel({ children }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#5e73e5]/25 via-cyan-500/10 to-fuchsia-500/10 p-[1px]">
      <div className="flex h-full flex-col rounded-3xl bg-white/72 shadow-xl ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0B1026]/72 dark:ring-white/10">
        {children}
      </div>
    </div>
  );
}

SidebarPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarPanel;
