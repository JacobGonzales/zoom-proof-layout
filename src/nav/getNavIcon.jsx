import React from "react";
import {
  ApertureIcon,
  BellIcon,
  ChartIcon,
  CompassIcon,
  DashboardIcon,
  FileIcon,
  FolderIcon,
  GridIcon,
  LayersIcon,
  MapPlotIcon,
  NodesIcon,
  PeopleIcon,
  RadarIcon,
  RocketIcon,
  RouteIcon,
  SettingsIcon,
  ShieldIcon,
  SparkIcon,
  TablesIcon,
  WalletIcon,
} from "./NavIcons";

export function getNavIcon(iconKey) {
  switch (iconKey) {
    case "aperture":
      return <ApertureIcon />;
    case "dashboard":
      return <DashboardIcon />;
    case "tables":
      return <TablesIcon />;
    case "chart":
      return <ChartIcon />;
    case "map":
      return <MapPlotIcon />;
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
    case "layers":
      return <LayersIcon />;
    case "nodes":
      return <NodesIcon />;
    case "file":
      return <FileIcon />;
    case "radar":
      return <RadarIcon />;
    case "rocket":
      return <RocketIcon />;
    case "route":
      return <RouteIcon />;
    default:
      return null;
  }
}
