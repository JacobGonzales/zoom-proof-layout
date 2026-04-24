import React from "react";
import { mainNavSections } from "../nav/navConfig";
import AccountPageSection from "../components/account/AccountPageSection";
import AppShell from "../ui/AppShell";

function Profile() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Launcher", to: "/dashboard" },
        { label: "Profile" },
      ]}
      title="Profile"
      navSections={mainNavSections}
    >
      <AccountPageSection
        title="Profile"
        subtitle="Account pages demo"
        primaryLabel="Edit account"
        bullets={[
          {
            title: "Identity",
            subtitle: "Name, role, and contact details",
            body: "Use this area to show personal info, team role, and profile preferences.",
          },
          {
            title: "Security",
            subtitle: "Access and authentication",
            body: "This slot can hold password updates, recovery methods, and session controls.",
          },
          {
            title: "Preferences",
            subtitle: "Display and notification settings",
            body: "Keep theme, dashboard defaults, and notification preferences together here.",
          },
        ]}
      />
    </AppShell>
  );
}

export default Profile;
