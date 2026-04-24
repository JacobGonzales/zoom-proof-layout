import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AuroraBackground from "./AuroraBackground";
import MobileSidebarDrawer from "./MobileSidebarDrawer";
import StickySidebar from "./StickySidebar";
import StickyNavigationBar from "./StickyNavigationBar";
import TopBarActions from "./TopBarActions";
import { mainNavSections } from "../nav/navConfig";
import { APP_SHELL_INNER } from "./layoutClasses";

function AppShell({
  breadcrumbs,
  title,
  children,
  navSections,
  brandTitle,
  brandSubtitle,
  layoutMode,
  sidebarPersistenceKey,
}) {
  const isWorkspaceLayout = layoutMode === "workspace";
  const storageKey =
    isWorkspaceLayout && sidebarPersistenceKey
      ? `app-shell-sidebar:${sidebarPersistenceKey}`
      : null;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (!storageKey || typeof window === "undefined") {
      return false;
    }

    try {
      return window.localStorage.getItem(storageKey) === "true";
    } catch {
      return false;
    }
  });
  const shellInnerClass = isWorkspaceLayout
    ? "mx-auto w-full max-w-none px-2 sm:px-3 lg:px-4 xl:px-4 2xl:px-5"
    : APP_SHELL_INNER;

  useEffect(() => {
    if (!storageKey || typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(storageKey, String(sidebarCollapsed));
    } catch {
      // Ignore localStorage write issues so the shell still works normally.
    }
  }, [sidebarCollapsed, storageKey]);

  return (
    <div className="relative min-h-dvh bg-slate-50 text-slate-900 dark:bg-[#0B1026] dark:text-white">
      <AuroraBackground />

      <div
        className={`${shellInnerClass} relative flex min-h-dvh min-w-0 gap-3 overflow-visible lg:items-start xl:gap-4`}
      >
        <StickySidebar
          brandTitle={brandTitle}
          brandSubtitle={brandSubtitle}
          navSections={navSections}
          workspaceMode={isWorkspaceLayout}
          collapsed={sidebarCollapsed}
          onToggleCollapse={isWorkspaceLayout ? () => setSidebarCollapsed((current) => !current) : null}
        />

        <MobileSidebarDrawer
          brandTitle={brandTitle}
          brandSubtitle={brandSubtitle}
          navSections={navSections}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 overflow-visible pb-1 pt-3 sm:pt-4 lg:pt-5 xl:pt-1">
          <StickyNavigationBar
            breadcrumbs={breadcrumbs}
            title={title}
            onOpenMenu={() => setSidebarOpen(true)}
            rightSlot={<TopBarActions />}
          />
          <div className="w-full pb-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

AppShell.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ),
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  navSections: PropTypes.array,
  brandTitle: PropTypes.string,
  brandSubtitle: PropTypes.string,
  layoutMode: PropTypes.oneOf(["portal", "workspace"]),
  sidebarPersistenceKey: PropTypes.string,
};

AppShell.defaultProps = {
  breadcrumbs: [{ label: "Launcher", to: "/dashboard" }],
  navSections: mainNavSections,
  brandTitle: "SETINEL PRISM",
  brandSubtitle: "Admin Dashboard",
  layoutMode: "portal",
  sidebarPersistenceKey: undefined,
};

export default AppShell;
