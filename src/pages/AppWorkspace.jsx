import React from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  getAppById,
  getAppLaunchPath,
  getAppNavSections,
} from "../nav/navConfig";
import WorkspaceDetailView from "../components/workspace/WorkspaceDetailView";
import AppShell from "../ui/AppShell";
import AppOverviewLanding from "../ui/AppOverviewLanding";

export function AppWorkspaceRedirect() {
  const { appId } = useParams();
  return <Navigate to={getAppLaunchPath(appId)} replace />;
}

export default function AppWorkspace() {
  const { appId, tabId } = useParams();
  const app = getAppById(appId);

  if (!app) {
    return <Navigate to="/dashboard" replace />;
  }

  const activeTab = app.tabs.find((tab) => tab.id === tabId);

  if (!activeTab) {
    return <Navigate to={getAppLaunchPath(app.id)} replace />;
  }

  if (activeTab.id === "overview") {
    return (
      <AppShell
        breadcrumbs={[
          { label: "Launcher", to: "/dashboard" },
          { label: app.label },
        ]}
        title={activeTab.title}
        navSections={getAppNavSections(app.id)}
        brandTitle={app.label}
        brandSubtitle={app.tagline}
      >
        <AppOverviewLanding app={app} tab={activeTab} />
      </AppShell>
    );
  }

  return (
    <AppShell
      breadcrumbs={[
        { label: "Launcher", to: "/dashboard" },
        { label: app.label, to: getAppLaunchPath(app.id) },
        { label: activeTab.label },
      ]}
      title={activeTab.title}
      navSections={getAppNavSections(app.id)}
      brandTitle={app.label}
      brandSubtitle={app.tagline}
    >
      <WorkspaceDetailView app={app} activeTab={activeTab} />
    </AppShell>
  );
}
