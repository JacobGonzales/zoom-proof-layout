import React from "react";
import {
  BellIcon,
  ChartIcon,
  CompassIcon,
  DashboardIcon,
  FolderIcon,
  GridIcon,
  PeopleIcon,
  SettingsIcon,
  ShieldIcon,
  SparkIcon,
  TablesIcon,
  WalletIcon,
} from "./NavIcons";

export function getNavIcon(iconKey) {
  switch (iconKey) {
    case "dashboard":
      return <DashboardIcon />;
    case "tables":
      return <TablesIcon />;
    case "chart":
      return <ChartIcon />;
    case "shield":
      return <ShieldIcon />;
    case "spark":
      return <SparkIcon />;
    case "settings":
      return <SettingsIcon />;
    case "people":
      return <PeopleIcon />;
    case "bell":
      return <BellIcon />;
    case "wallet":
      return <WalletIcon />;
    case "compass":
      return <CompassIcon />;
    case "folder":
      return <FolderIcon />;
    case "grid":
      return <GridIcon />;
    default:
      return null;
  }
}
