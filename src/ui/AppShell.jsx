import React, { useState } from "react";
import PropTypes from "prop-types";
import AuroraBackground from "./AuroraBackground";
import MobileSidebarDrawer from "./MobileSidebarDrawer";
import StickySidebar from "./StickySidebar";
import StickyNavigationBar from "./StickyNavigationBar";
import ThemeToggle from "./ThemeToggle";
import { mainNavSections } from "../nav/navConfig";
import { APP_SHELL_INNER } from "./layoutClasses";

function AppShell({
  breadcrumbs,
  title,
  children,
  navSections,
  brandTitle,
  brandSubtitle,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative min-h-dvh bg-slate-50 text-slate-900 dark:bg-[#070A1A] dark:text-white">
      <AuroraBackground />

      <div className={`${APP_SHELL_INNER} relative flex min-h-dvh min-w-0 gap-4 overflow-visible lg:items-start`}>
        <StickySidebar
          brandTitle={brandTitle}
          brandSubtitle={brandSubtitle}
          navSections={navSections}
        />

        <MobileSidebarDrawer
          brandTitle={brandTitle}
          brandSubtitle={brandSubtitle}
          navSections={navSections}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 overflow-visible pt-4">
          <StickyNavigationBar
            breadcrumbs={breadcrumbs}
            title={title}
            navSections={navSections}
            onOpenMenu={() => setSidebarOpen(true)}
            rightSlot={<ThemeToggle />}
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
};

AppShell.defaultProps = {
  breadcrumbs: [{ label: "Launcher", to: "/dashboard" }],
  navSections: mainNavSections,
  brandTitle: "SETINEL PRISM",
  brandSubtitle: "Admin Dashboard",
};

export default AppShell;
