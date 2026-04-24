import React from "react";
import { mainNavSections } from "../nav/navConfig";
import AccountPageSection from "../components/account/AccountPageSection";
import AppShell from "../ui/AppShell";

function PageHelp() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Launcher", to: "/dashboard" },
        { label: "View Page Help" },
      ]}
      title="View Page Help"
      navSections={mainNavSections}
    >
      <AccountPageSection
        title="Page Help"
        subtitle="Support section demo"
        primaryLabel="Get help"
        bullets={[
          {
            title: "Contextual help",
            subtitle: "What this page is for",
            body: "Use this panel to explain what the current page does, who owns it, and what the user should focus on first.",
          },
          {
            title: "Common tasks",
            subtitle: "Frequent actions and shortcuts",
            body: "This slot is a good fit for step-by-step help, quick actions, or notes about where to go next in the workflow.",
          },
          {
            title: "Troubleshooting",
            subtitle: "Common issues and fixes",
            body: "A real implementation can list known issues, support escalation options, and short guidance for resolving blockers.",
          },
        ]}
      />
    </AppShell>
  );
}

export default PageHelp;
