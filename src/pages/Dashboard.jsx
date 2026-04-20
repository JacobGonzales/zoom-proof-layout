import React from "react";
import {
  appCatalog,
  mainNavSections,
} from "../nav/navConfig";
import AppLauncherGrid from "../components/launcher/AppLauncherGrid";
import LauncherArchitectureCards from "../components/launcher/LauncherArchitectureCards";
import LauncherHighlights from "../components/launcher/LauncherHighlights";
import LauncherStatsGrid from "../components/launcher/LauncherStatsGrid";
import AppShell from "../ui/AppShell";

export default function Dashboard() {
  return (
    <AppShell
      breadcrumbs={[{ label: "Launcher" }]}
      title="Application launcher"
      navSections={mainNavSections}
    >
      <LauncherStatsGrid workspaceCount={appCatalog.length} />
      <LauncherHighlights suggestedApps={appCatalog.slice(0, 3)} />
      <AppLauncherGrid apps={appCatalog} />
      <LauncherArchitectureCards />
    </AppShell>
  );
}
