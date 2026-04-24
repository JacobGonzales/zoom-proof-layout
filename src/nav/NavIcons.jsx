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

export function MapPlotIcon() {
  return (
    <Icon>
      <path
        d="M4.5 7.5 9.5 5l5 2.5 5-2.5v11.5l-5 2.5-5-2.5-5 2.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 5v11.5M14.5 7.5V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 9.2a1.6 1.6 0 1 1 0 3.2a1.6 1.6 0 0 1 0-3.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </Icon>
  );
}

export function ChartIcon() {
  return (
    <Icon>
      <path
        d="M5 18V9m7 9V5m7 13v-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3 20h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function ApertureIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 4.5 15 9M19.5 12 15 15M12 19.5 9 15M4.5 12 9 9M9 9l6 0M15 15H9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function RadarIcon() {
  return (
    <Icon>
      <path
        d="M12 5a7 7 0 1 1-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 8.5a3.5 3.5 0 1 1-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 12 18 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </Icon>
  );
}

export function NodesIcon() {
  return (
    <Icon>
      <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.8 9.1 10.7 14M15.2 8.6 13.3 14M9 8h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function ShieldIcon() {
  return (
    <Icon>
      <path
        d="M12 3 5 6v5c0 4.2 2.4 8 7 10 4.6-2 7-5.8 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function SparkIcon() {
  return (
    <Icon>
      <path
        d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function RouteIcon() {
  return (
    <Icon>
      <circle cx="6.5" cy="16.5" r="1.8" fill="currentColor" />
      <circle cx="17.5" cy="7.5" r="1.8" fill="currentColor" />
      <path
        d="M8.5 16.5h3.2a3 3 0 0 0 3-3v-3a3 3 0 0 1 3-3H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function SettingsIcon() {
  return (
    <Icon>
      <path
        d="M12 9.5A2.5 2.5 0 1 1 12 14.5A2.5 2.5 0 0 1 12 9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19 12a7.6 7.6 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a8.2 8.2 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a8.2 8.2 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.6 7.6 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a8.2 8.2 0 0 0 1.7 1l.3 2.5h4l.3-2.5a8.2 8.2 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function LayersIcon() {
  return (
    <Icon>
      <path
        d="m12 4 7 4-7 4-7-4 7-4ZM5 12l7 4 7-4M5 16l7 4 7-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function PeopleIcon() {
  return (
    <Icon>
      <path
        d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19a4.5 4.5 0 0 1 9 0M13 19a3.5 3.5 0 0 1 7 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function BellIcon() {
  return (
    <Icon>
      <path
        d="M6 16h12l-1.2-1.6A5.8 5.8 0 0 1 15.7 11V9.8a3.7 3.7 0 1 0-7.4 0V11c0 1.2-.4 2.4-1.1 3.4L6 16Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 19a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function WalletIcon() {
  return (
    <Icon>
      <path
        d="M4 8.5A2.5 2.5 0 0 1 6.5 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5v-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 12h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function CompassIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m10 14 2-5 4-1-1 4-5 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5v1.5M17.5 12h-1.5M12 17.5V16M6.5 12H8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Icon>
  );
}

export function FolderIcon() {
  return (
    <Icon>
      <path
        d="M4 8a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function GridIcon() {
  return (
    <Icon>
      <path
        d="M5 5h6v6H5V5Zm8 0h6v6h-6V5ZM5 13h6v6H5v-6Zm8 0h6v6h-6v-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function FileIcon() {
  return (
    <Icon>
      <path
        d="M8 4h6l4 4v12H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 4v4h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export function RocketIcon() {
  return (
    <Icon>
      <path
        d="M14.5 5.2c2.2.2 4.1 2.1 4.3 4.3l-4.7 4.7-3.8-.5-.5-3.8 4.7-4.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 13.5 7 17M8.4 19.2l.5-2.3-1.8-1.8-2.3.5 1.8 1.8 1.8 1.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 10.7 9.8 14.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.4 14.6 7.6 16.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="15.3" cy="8.7" r="1.1" fill="currentColor" />
    </Icon>
  );
}
