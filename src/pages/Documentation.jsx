import React from "react";
import { mainNavSections } from "../nav/navConfig";
import AccountPageSection from "../components/account/AccountPageSection";
import AppShell from "../ui/AppShell";

function Documentation() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Launcher", to: "/dashboard" },
        { label: "View Documentation" },
      ]}
      title="View Documentation"
      navSections={mainNavSections}
    >
      <AccountPageSection
        title="Documentation"
        subtitle="Support section demo"
        primaryLabel="Open docs"
        bullets={[
          {
            title: "Guides",
            subtitle: "Process and feature walkthroughs",
            body: "This section can hold product guides, operating procedures, and quick-start documentation for each workspace.",
          },
          {
            title: "Reference",
            subtitle: "Specifications and requirements",
            body: "Use this area for structured references like release notes, field definitions, and environment requirements.",
          },
          {
            title: "Updates",
            subtitle: "What changed recently",
            body: "A practical version of this page could highlight new documentation, revised policies, and recently updated workflows.",
          },
        ]}
      />
    </AppShell>
  );
}

export default Documentation;
