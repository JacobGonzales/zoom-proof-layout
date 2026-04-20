// src/nav/navConfig.js
export const mainNavSections = [
  {
    title: "Platform",
    items: [
      {
        key: "dashboard",
        label: "App Launcher",
        to: "/dashboard",
        iconKey: "dashboard",
        iconColor: "#5e73e5",
      },
      {
        key: "tables",
        label: "Tables",
        to: "/tables",
        iconKey: "tables",
        iconColor: "#06b6d4",
      },
    ],
  },
];

const appBlueprints = [
  {
    id: "revenue-ops",
    label: "Revenue Ops",
    tagline: "Forecast and pipeline command",
    description: "Monitor deal movement, rep pacing, and expansion signals from one workspace.",
    iconKey: "chart",
    accent: "#5e73e5",
    health: "96%",
    members: "18",
    automations: "24",
    queueCount: "12",
    boardLabel: "Pipeline",
    automationLabel: "Sequences",
    owner: "Lena Hart",
    region: "North America",
  },
  {
    id: "client-success",
    label: "Client Success",
    tagline: "Accounts, renewals, and health",
    description: "Keep renewal risk, adoption trends, and onboarding milestones visible.",
    iconKey: "people",
    accent: "#06b6d4",
    health: "92%",
    members: "22",
    automations: "16",
    queueCount: "9",
    boardLabel: "Accounts",
    automationLabel: "Journeys",
    owner: "Ari Wells",
    region: "Global",
  },
  {
    id: "risk-monitor",
    label: "Risk Monitor",
    tagline: "Security operations and policy drift",
    description: "Track flagged activity, open investigations, and policy exceptions in motion.",
    iconKey: "shield",
    accent: "#ef4444",
    health: "89%",
    members: "14",
    automations: "31",
    queueCount: "27",
    boardLabel: "Incidents",
    automationLabel: "Policies",
    owner: "Mika Stone",
    region: "Enterprise",
  },
  {
    id: "field-ops",
    label: "Field Ops",
    tagline: "Dispatch, crews, and site readiness",
    description: "Coordinate schedules, equipment, and live job readiness across regions.",
    iconKey: "grid",
    accent: "#f59e0b",
    health: "94%",
    members: "31",
    automations: "19",
    queueCount: "14",
    boardLabel: "Dispatch",
    automationLabel: "Runbooks",
    owner: "Jo Kim",
    region: "Mountain + West",
  },
  {
    id: "campaign-lab",
    label: "Campaign Lab",
    tagline: "Launch planning and content flow",
    description: "See launch timing, creative reviews, and channel readiness in one place.",
    iconKey: "spark",
    accent: "#8b5cf6",
    health: "93%",
    members: "17",
    automations: "21",
    queueCount: "11",
    boardLabel: "Launches",
    automationLabel: "Experiments",
    owner: "Nia Flores",
    region: "Digital",
  },
  {
    id: "support-desk",
    label: "Support Desk",
    tagline: "Escalations, queues, and SLAs",
    description: "Balance incoming ticket load with escalation response and service quality.",
    iconKey: "bell",
    accent: "#0ea5e9",
    health: "91%",
    members: "26",
    automations: "29",
    queueCount: "38",
    boardLabel: "Tickets",
    automationLabel: "Macros",
    owner: "Drew Patel",
    region: "24/7 Coverage",
  },
  {
    id: "finance-hub",
    label: "Finance Hub",
    tagline: "Approvals, controls, and close work",
    description: "Watch approvals, cash flow checkpoints, and close-week readiness together.",
    iconKey: "wallet",
    accent: "#10b981",
    health: "97%",
    members: "13",
    automations: "15",
    queueCount: "6",
    boardLabel: "Approvals",
    automationLabel: "Controls",
    owner: "Eva Morgan",
    region: "HQ",
  },
  {
    id: "talent-studio",
    label: "Talent Studio",
    tagline: "Hiring, interviews, and onboarding",
    description: "Coordinate hiring plans, active candidates, and onboarding readiness at a glance.",
    iconKey: "compass",
    accent: "#f97316",
    health: "90%",
    members: "11",
    automations: "13",
    queueCount: "8",
    boardLabel: "Candidates",
    automationLabel: "Workflows",
    owner: "Sage Brooks",
    region: "People Team",
  },
  {
    id: "inventory-pulse",
    label: "Inventory Pulse",
    tagline: "Stock flow and replenishment",
    description: "Surface low-stock pressure, supplier timing, and inbound recovery signals.",
    iconKey: "folder",
    accent: "#14b8a6",
    health: "95%",
    members: "20",
    automations: "18",
    queueCount: "10",
    boardLabel: "Supply",
    automationLabel: "Restocks",
    owner: "Theo Lane",
    region: "Warehousing",
  },
];

function createTab(app, id, label, iconKey, title, description, metrics, queue, activity) {
  return {
    id,
    label,
    iconKey,
    title,
    description,
    metrics,
    queue,
    activity,
  };
}

function buildTabs(app) {
  return [
    createTab(
      app,
      "overview",
      "Overview",
      "dashboard",
      `${app.label} overview`,
      `${app.description} This is the landing space for the ${app.label.toLowerCase()} team.`,
      [
        { label: "Workspace health", value: app.health },
        { label: "Team members", value: app.members },
        { label: "Active automations", value: app.automations },
      ],
      [
        `${app.queueCount} items need triage before noon standup`,
        `${app.owner} is the current workspace owner`,
        `${app.region} coverage is set as the active operating region`,
      ],
      [
        `Morning sync is locked for ${app.label}`,
        `Latest summary packet shipped to leadership`,
        `Three new actions were auto-prioritized overnight`,
      ],
    ),
    createTab(
      app,
      "board",
      app.boardLabel,
      "tables",
      `${app.boardLabel} board`,
      `A focused board view for the ${app.boardLabel.toLowerCase()} work currently moving through ${app.label}.`,
      [
        { label: "In review", value: app.queueCount },
        { label: "Ready now", value: `${Math.max(3, Number.parseInt(app.queueCount, 10) - 4)}` },
        { label: "Blocked", value: `${Math.max(1, Number.parseInt(app.members, 10) % 5)}` },
      ],
      [
        `${app.boardLabel} queue is sorted by urgency and handoff age`,
        `Cross-team dependencies are grouped into a single swimlane`,
        `Weekly cleanup rule archives stale items automatically`,
      ],
      [
        `New ${app.boardLabel.toLowerCase()} board view shared with managers`,
        `A high-priority handoff moved into the ready column`,
        `One blocked item was escalated to ${app.owner}`,
      ],
    ),
    createTab(
      app,
      "automation",
      app.automationLabel,
      "spark",
      `${app.automationLabel} center`,
      `Automation controls for ${app.label}, including orchestration rules, reminders, and approval triggers.`,
      [
        { label: "Live rules", value: app.automations },
        { label: "Saved hours", value: `${Number.parseInt(app.members, 10) * 6}/wk` },
        { label: "Success rate", value: app.health },
      ],
      [
        `Primary ${app.automationLabel.toLowerCase()} pack runs every 15 minutes`,
        `Escalation ladder notifies channel leads after two missed touches`,
        `One draft rule is waiting on stakeholder approval`,
      ],
      [
        `Yesterday's automation batch closed 14 low-touch tasks`,
        `A new routing rule was promoted from sandbox to live`,
        `Fallback notifications were tested with no failures`,
      ],
    ),
    createTab(
      app,
      "settings",
      "Settings",
      "settings",
      `${app.label} settings`,
      `Permission groups, workspace preferences, and environment controls for ${app.label}.`,
      [
        { label: "Permission groups", value: "4" },
        { label: "Saved views", value: "12" },
        { label: "Audit freshness", value: "2h ago" },
      ],
      [
        `Default notifications are enabled for leads only`,
        `Brand theming inherits the global platform palette`,
        `Sandbox access is limited to ops admins`,
      ],
      [
        `A role update was applied to three collaborators`,
        `Audit logs were exported for monthly review`,
        `Two dormant API keys were marked for rotation`,
      ],
    ),
  ];
}

export const appCatalog = appBlueprints.map((app) => ({
  ...app,
  tabs: buildTabs(app),
}));

export function getAppById(appId) {
  return appCatalog.find((app) => app.id === appId);
}

export function getAppTabPath(appId, tabId) {
  return `/apps/${appId}/${tabId}`;
}

export function getAppLaunchPath(appId) {
  const app = getAppById(appId);
  return app ? getAppTabPath(app.id, app.tabs[0].id) : "/dashboard";
}

export function getAppNavSections(appId) {
  const app = getAppById(appId);

  if (!app) {
    return mainNavSections;
  }

  return [
    {
      title: "Workspace",
      items: app.tabs.map((tab) => ({
        key: `${app.id}-${tab.id}`,
        label: tab.label,
        to: getAppTabPath(app.id, tab.id),
        iconKey: tab.iconKey,
        iconColor: app.accent,
      })),
    },
    {
      title: "Platform",
      items: [
        {
          key: `${app.id}-launcher`,
          label: "Back to launcher",
          to: "/dashboard",
          iconKey: "grid",
          iconColor: "#94a3b8",
        },
      ],
    },
  ];
}
