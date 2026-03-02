// src/nav/NavIcons.jsx
import React from "react";
import PropTypes from "prop-types";

function Icon({ children }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

Icon.propTypes = { children: PropTypes.node.isRequired };

export function DashboardIcon() {
  return (
    <Icon>
      <path
        d="M4 13h7V4H4v9Zm9 7h7V11h-7v9ZM4 20h7v-5H4v5Zm9-11h7V4h-7v5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function TablesIcon() {
  return (
    <Icon>
      <path
        d="M4 6h16v12H4V6Zm0 4h16M10 6v12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function getNavIcon(iconKey) {
  switch (iconKey) {
    case "dashboard":
      return <DashboardIcon />;
    case "tables":
      return <TablesIcon />;
    default:
      return null;
  }
}

getNavIcon.propTypes = {
  iconKey: PropTypes.string,
};
