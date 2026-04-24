import React from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import {
  getAppById,
  getAppLaunchPath,
  getAppNavSections,
} from "../nav/navConfig";
import { RamsTractProvider } from "../components/workspace/rams/data/RamsTractContext";
import { TRACT_ROWS } from "../components/workspace/rams/data/ramsTractData";
import RamsMetricsView from "../components/workspace/rams/metrics/RamsMetricsView";
import RamsTractDetailsView from "../components/workspace/rams/tract-details/RamsTractDetailsView";
import RamsTractListView from "../components/workspace/rams/tract-list/RamsTractListView";
import WorkspaceDetailView from "../components/workspace/shared/WorkspaceDetailView";
import AppShell from "../ui/AppShell";
import AppOverviewLanding from "../ui/AppOverviewLanding";

export function AppWorkspaceRedirect() {
  const { appId } = useParams();
  return <Navigate to={getAppLaunchPath(appId)} replace />;
}

export default function AppWorkspace() {
  const { appId, tabId } = useParams();
  const [searchParams] = useSearchParams();
  const app = getAppById(appId);

  if (!app) {
    return <Navigate to="/dashboard" replace />;
  }

  const activeTab = app.tabs.find((tab) => tab.id === tabId);
  const workspaceBrandTitle = app.id === "rams" ? "RAMS" : app.label;

  if (!activeTab) {
    return <Navigate to={getAppLaunchPath(app.id)} replace />;
  }

  function renderWithShell(content, breadcrumbTail) {
    const shell = (
      <AppShell
        breadcrumbs={[
          { label: "Launcher", to: "/dashboard" },
          { label: app.label, to: activeTab.id === "overview" ? undefined : getAppLaunchPath(app.id) },
          ...(breadcrumbTail || []),
        ].filter(Boolean)}
        title={activeTab.title}
        navSections={getAppNavSections(app.id)}
        brandTitle={workspaceBrandTitle}
        brandSubtitle={app.tagline}
        layoutMode="workspace"
        sidebarPersistenceKey={app.id}
      >
        {content}
      </AppShell>
    );

    if (app.id === "rams") {
      return <RamsTractProvider>{shell}</RamsTractProvider>;
    }

    return shell;
  }

  if (activeTab.id === "overview") {
    return renderWithShell(<AppOverviewLanding app={app} tab={activeTab} />, [{ label: app.label }]);
  }

  if (app.id === "rams" && activeTab.id === "automation") {
    return renderWithShell(<RamsMetricsView />, [{ label: activeTab.label }]);
  }

  if (app.id === "rams" && activeTab.id === "board") {
    return renderWithShell(<RamsTractListView app={app} activeTab={activeTab} />, [{ label: activeTab.label }]);
  }

  if (app.id === "rams" && activeTab.id === "settings") {
    const selectedTractId = searchParams.get("tract");

    if (!selectedTractId) {
      return <Navigate to={`/apps/rams/settings?tract=${TRACT_ROWS[0].id}`} replace />;
    }

    const tractKey = selectedTractId;

    return renderWithShell(<RamsTractDetailsView key={tractKey} tractId={selectedTractId} />, [{ label: activeTab.label }]);
  }

  return renderWithShell(<WorkspaceDetailView app={app} activeTab={activeTab} />, [{ label: activeTab.label }]);
}
