import React from "react";
import { mainNavSections } from "../nav/navConfig";
import AccountPageSection from "../components/account/AccountPageSection";
import AppShell from "../ui/AppShell";

function Feedback() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Launcher", to: "/dashboard" },
        { label: "Provide Feedback" },
      ]}
      title="Provide Feedback"
      navSections={mainNavSections}
    >
      <AccountPageSection
        title="Provide Feedback"
        subtitle="Support section demo"
        primaryLabel="Share feedback"
        bullets={[
          {
            title: "Product feedback",
            subtitle: "Ideas, gaps, and requests",
            body: "Use this area to collect enhancement requests, UX friction, and feature ideas from the people using the workspace.",
          },
          {
            title: "Issue reports",
            subtitle: "Bugs and unexpected behavior",
            body: "A working version can capture screenshots, reproduction steps, severity, and which page the user was on when the issue happened.",
          },
          {
            title: "Follow-up",
            subtitle: "Status and response loop",
            body: "This section can explain how feedback is triaged, who reviews it, and when contributors should expect updates back.",
          },
        ]}
      />
    </AppShell>
  );
}

export default Feedback;
