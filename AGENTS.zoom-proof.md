# AGENTS.zoom-proof.md

This file contains repo-specific guidance for `zoom-proof-layout`.

## Repo Purpose

- This repo is a React + Vite dashboard prototype focused on layout behavior, nested dashboards, and responsive navigation.
- The product shape today is:
  - launcher page at `/dashboard`
  - shared example page at `/tables`
  - app dashboards at `/apps/:appId/:tabId`

## Stack Snapshot

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS v4
- JavaScript + JSX
- `prop-types`

## Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

## Current Structure

## App Entry

- `src/main.jsx` mounts the app and applies theme state
- `src/App.jsx` mounts the router shell
- `src/AppRoutes.jsx` owns route definitions

## Route Files

- `src/pages/Dashboard.jsx`
- `src/pages/Tables.jsx`
- `src/pages/AppWorkspace.jsx`

## Navigation And Config

- `src/nav/navConfig.js` is the source of truth for:
  - platform nav sections
  - app catalog metadata
  - generated app tabs
  - app lookup helpers
- `src/nav/NavIcons.jsx` exports icon components only
- `src/nav/getNavIcon.jsx` exports the shared lookup helper

## Shared Shell

- `src/ui/AppShell.jsx` is the shared layout shell
- `src/ui/StickyNavigationBar.jsx` owns the top nav rail
- `src/ui/StickySidebar.jsx` owns the desktop sidebar
- `src/ui/MobileSidebarDrawer.jsx` owns the mobile drawer
- `src/ui/TopBar.jsx` owns the visible top toolbar
- `src/ui/layoutClasses.js` is the shell sizing source of truth

## Component Organization

- `src/components/launcher/` contains launcher-only sections
- `src/components/overview/` contains app overview dashboard sections
- `src/components/workspace/` contains app workspace detail sections
- `src/ui/` contains shared UI primitives and shell pieces

## Repo Rules

- Keep route files light and compositional.
- Reuse existing folders before creating new top-level component areas.
- Keep shared shell behavior centralized in `src/ui/`.
- Keep app metadata centralized in `src/nav/navConfig.js`.
- Do not duplicate app labels, tab ids, or paths in page components when config already provides them.

## Fast Refresh Rule

- Component files should export components only when practical.
- Shared non-component helpers belong in separate modules.
- Current example:
  - `NavIcons.jsx` contains components
  - `getNavIcon.jsx` contains the lookup helper

## Layout Rules

- Treat `src/ui/layoutClasses.js` as the width/padding source of truth.
- If top bar behavior changes, also verify mobile spacing and content offset.
- If sidebar behavior changes, verify both drawer and desktop modes.
- If sticky/fixed positioning changes, verify content does not hide underneath the header.

## Theme Rules

- Theme behavior lives in `src/theme/theme.js`
- `src/main.jsx` applies the initial resolved theme
- `src/ui/ThemeToggle.jsx` is the UI control
- Do not duplicate theme state elsewhere without a real need

## Validation Expectations

- For layout, routing, or component-structure changes:
  - run `npm run build`
- For import cleanup or lint-sensitive edits:
  - run `npm run lint` when relevant
- If browser-level visual QA was not done, say so clearly

## Do

- Reuse `GlassCard`, `MiniStatCard`, `ValueStatCard`, and `InfoList` before creating duplicates
- Keep launcher/app workspace behavior aligned with generated config
- Preserve mobile and desktop behavior together when editing shared layout
- Keep shared helper logic outside component files when it improves Fast Refresh and reuse

## Do Not

- Do not reintroduce huge mixed route files after splitting components out
- Do not hardcode duplicate app metadata in page components
- Do not casually change route structure without updating redirects and nav generation
- Do not add a second UI or styling system without a concrete reason
