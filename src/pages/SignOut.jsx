import React from "react";
import { mainNavSections } from "../nav/navConfig";
import AccountPageSection from "../components/account/AccountPageSection";
import AppShell from "../ui/AppShell";

function SignOut() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Launcher", to: "/dashboard" },
        { label: "Sign Out" },
      ]}
      title="Sign Out"
      navSections={mainNavSections}
    >
      <AccountPageSection
        title="Sign Out"
        subtitle="Account pages demo"
        primaryLabel="End session"
        bullets={[
          {
            title: "Current session",
            subtitle: "Active access and device state",
            body: "Use this area to show the current session, signed-in device details, and recent authentication activity.",
          },
          {
            title: "Security review",
            subtitle: "Before ending access",
            body: "This card can surface session time, elevated access warnings, or reminders to save unfinished work first.",
          },
          {
            title: "Next step",
            subtitle: "What happens after sign out",
            body: "A production version can confirm where the user lands next and whether a re-authentication step will be required.",
          },
        ]}
      />
    </AppShell>
  );
}

export default SignOut;
