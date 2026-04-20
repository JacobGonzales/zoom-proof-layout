import React from "react";
import { mainNavSections } from "../nav/navConfig";
import AppShell from "../ui/AppShell";
import GlassCard from "../ui/GlassCard";
import ProjectsTable from "../ui/ProjectsTable";

export default function Tables() {
  return (
    <AppShell
      breadcrumbs={[
        { label: "Launcher", to: "/dashboard" },
        { label: "Tables" },
      ]}
      title="Tables"
      navSections={mainNavSections}
    >
      <GlassCard title="Projects" subtitle="Reusable table block">
        <ProjectsTable />
      </GlassCard>
    </AppShell>
  );
}
