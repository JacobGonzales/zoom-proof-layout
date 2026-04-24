const appBlueprints = [
  {
    id: "digital-intelligence",
    label: "Digital Intelligence",
    tagline: "Forecast and pipeline command",
    description: "Monitor deal movement, rep pacing, and expansion signals from one workspace.",
    iconKey: "aperture",
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
    id: "icbm-insights",
    label: "ICBM Insights",
    tagline: "Accounts, renewals, and health",
    description: "Keep renewal risk, adoption trends, and onboarding milestones visible.",
    iconKey: "radar",
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
    id: "lpd-evaluator",
    label: "LPD Evaluator",
    tagline: "Security operations and policy drift",
    description: "Track flagged activity, open investigations, and policy exceptions in motion.",
    iconKey: "nodes",
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
    id: "simon",
    label: "Simon",
    tagline: "Dispatch, crews, and site readiness",
    description: "Coordinate schedules, equipment, and live job readiness across regions.",
    iconKey: "route",
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
    id: "sentinel-milcon",
    label: "Sentinel Milcon",
    tagline: "Launch planning and content flow",
    description: "See launch timing, creative reviews, and channel readiness in one place.",
    iconKey: "shield",
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
    id: "sentinel-transition",
    label: "Sentinel Transition",
    tagline: "Escalations, queues, and SLAs",
    description: "Balance incoming ticket load with escalation response and service quality.",
    iconKey: "compass",
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
    id: "rams",
    label: "RAMS - Real Estate Acquisitions Management System",
    navLabel: "RAMS",
    tagline: "Approvals, controls, and close work",
    description: "Watch approvals, cash flow checkpoints, and close-week readiness together.",
    iconKey: "layers",
    accent: "#10b981",
    health: "97%",
    members: "13",
    automations: "15",
    queueCount: "6",
    boardLabel: "Tract List - ARCGis",
    automationLabel: "Metrics",
    owner: "Eva Morgan",
    region: "HQ",
  },
  {
    id: "generator-1423",
    label: "1423 Generator",
    tagline: "Hiring, interviews, and onboarding",
    description: "Coordinate hiring plans, active candidates, and onboarding readiness at a glance.",
    iconKey: "rocket",
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
      app.id === "rams" ? "map" : "tables",
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
      "settings",
      app.id === "rams" ? "Tract Details" : "Settings",
      app.id === "rams" ? "file" : "settings",
      app.id === "rams" ? "Tract details" : `${app.label} settings`,
      app.id === "rams"
        ? `Detailed parcel information, acquisition status, and due-diligence notes for the selected tract in ${app.label}.`
        : `Permission groups, workspace preferences, and environment controls for ${app.label}.`,
      app.id === "rams"
        ? [
            { label: "Selected tract", value: "1" },
            { label: "Open action items", value: "5" },
            { label: "Audit freshness", value: "30m ago" },
          ]
        : [
            { label: "Permission groups", value: "4" },
            { label: "Saved views", value: "12" },
            { label: "Audit freshness", value: "2h ago" },
          ],
      app.id === "rams"
        ? [
            `Selected tract record can be opened directly from the tract list`,
            `Milestones and agency ownership stay visible for acquisition review`,
            `Supporting due-diligence notes are grouped with the parcel summary`,
          ]
        : [
            `Default notifications are enabled for leads only`,
            `Brand theming inherits the global platform palette`,
            `Sandbox access is limited to ops admins`,
          ],
      app.id === "rams"
        ? [
            `A tract detail packet was generated for morning review`,
            `Title notes were refreshed from the due-diligence checklist`,
            `Survey dependencies were pushed to the parcel timeline`,
          ]
        : [
            `A role update was applied to three collaborators`,
            `Audit logs were exported for monthly review`,
            `Two dormant API keys were marked for rotation`,
          ],
    ),
    createTab(
      app,
      "automation",
      app.automationLabel,
      app.id === "rams" ? "chart" : "spark",
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
  ];
}

export const appCatalog = appBlueprints.map((app) => ({
  ...app,
  tabs: buildTabs(app),
}));

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
        defaultExpanded: false,
        children: appCatalog.map((app) => ({
          key: `application-${app.id}`,
          label: app.navLabel || app.label,
          to: getAppLaunchPath(app.id),
          iconKey: app.iconKey,
          iconColor: app.accent,
        })),
      },
    ],
  },
  {
    title: "Account Pages",
    items: [
      {
        key: "profile",
        label: "Profile",
        to: "/profile",
        iconKey: "people",
        iconColor: "#2563eb",
      },
      {
        key: "sign-out",
        label: "Sign Out",
        to: "/sign-out",
        iconKey: "file",
        iconColor: "#2563eb",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        key: "documentation",
        label: "View Documentation",
        to: "/documentation",
        iconKey: "folder",
        iconColor: "#0f766e",
      },
      {
        key: "page-help",
        label: "View Page Help",
        to: "/page-help",
        iconKey: "compass",
        iconColor: "#0891b2",
      },
      {
        key: "feedback",
        label: "Provide Feedback",
        to: "/feedback",
        iconKey: "bell",
        iconColor: "#d97706",
      },
    ],
  },
];

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
    ...mainNavSections.map((section) => ({
      ...section,
      items: section.items.map((item) =>
        item.key === "dashboard"
          ? {
              ...item,
              autoExpandOnActive: false,
            }
          : item,
      ),
    })),
  ];
}
