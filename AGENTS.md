# AGENTS.md

This is the effective guide for `zoom-proof-layout`.

Source intent:
- `AGENTS.base-react-next.md`: shared frontend guidance
- `AGENTS.zoom-proof.md`: repo-specific guidance
- `AGENTS.cleanse-website.md`: legacy placeholder only, not applicable here

## Repo Purpose

- This repository is a React + Vite dashboard prototype for testing responsive shell behavior, nested app dashboards, and reusable layout components.

## Effective Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS v4
- JavaScript + JSX

## Core Rules

- Keep route files light.
- Prefer composition over giant mixed files.
- Reuse shared shell components instead of rebuilding layout logic in pages.
- Keep app and nav metadata in `src/nav/navConfig.js`.
- Keep non-component shared helpers in separate modules so Fast Refresh stays reliable.

## Important Repo Areas

- `src/AppRoutes.jsx`: route map
- `src/pages/`: route-level composition
- `src/components/launcher/`: launcher sections
- `src/components/overview/`: app overview sections
- `src/components/workspace/`: app workspace detail sections
- `src/ui/`: shared shell and UI primitives
- `src/nav/`: nav config, icons, and icon lookup
- `src/theme/theme.js`: theme behavior

## Validation

- For UI/layout/structure changes, run `npm run build`
- Run `npm run lint` when import cleanup or lint-sensitive changes are involved
- If no browser check was performed, say so clearly

## Fast Refresh Rule

- In `.jsx` files, do not mix reusable helpers with component exports unless there is a strong reason.
- Move shared constants/functions into separate files when needed.

## Working Defaults

- Preserve current routes and generated app navigation behavior.
- Preserve mobile and desktop behavior together when editing layout.
- Avoid unnecessary abstraction.
- Prefer small focused components and simple shared primitives.
