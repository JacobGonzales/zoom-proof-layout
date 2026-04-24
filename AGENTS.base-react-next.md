# AGENTS.base-react-next.md

This file is the shared base guidance for lightweight React frontend repos.

Note:
- The filename is legacy.
- This repo is not a Next.js app.
- Apply these rules as generic React frontend guidance.

## Purpose

- Guide refactors and feature work in small-to-medium React UI repositories.
- Optimize for these priorities in order:

1. Simplicity
2. Readability
3. Clean organization
4. Stable behavior
5. Maintainability

## Working Style

- Read the current structure before editing.
- Match existing repo patterns before introducing a new one.
- Prefer small focused components over giant mixed files.
- Avoid abstraction for abstraction’s sake.
- Do not rewrite unrelated areas while fixing a local issue.

## File Splitting Rules

- Split a file when it contains clearly separate visual sections or responsibilities.
- Extract helpers when lookup, mapping, formatting, or transformation logic distracts from the component flow.
- Do not create tiny wrappers with no clarity benefit.
- Prefer extracting meaningful sections over inventing broad utility layers too early.

## Component Rules

- Keep components focused on rendering, interaction, and simple orchestration.
- Move reusable non-UI logic into separate modules.
- In `.jsx` component files, prefer exporting components only when possible.
- If a shared constant or function is needed, move it to a sibling helper file so Fast Refresh stays reliable.

## Styling Rules

- Follow the repo’s established styling system before adding a new one.
- Prefer utility-first styling when the repo already uses it.
- Preserve responsive behavior while editing shared layout components.
- Preserve accessibility by default with semantic markup, labels, and keyboard-safe controls.

## Refactor Safety Rules

- Do not rename public routes, props, config keys, or navigation ids casually.
- Keep behavior stable while improving structure.
- Avoid mixing structural refactors with unrelated visual redesigns unless the task requires both.

## Validation Minimum

- For structural or UI changes, run the most relevant automated check available.
- For build-sensitive frontend changes, a production build is the preferred minimum.
- If visual behavior changes and browser verification was not done, say so clearly.

## Always Do

- Check for an existing component or helper before creating a new one.
- Keep shared logic in shared files, not repeated across pages.
- Keep route-level files light and composed from smaller pieces.
- Report files changed and validation run.

## Never Do

- Never introduce complexity just to look architectural.
- Never put shared helpers back into component files if it breaks Fast Refresh expectations.
- Never add a second styling system casually.
- Never leave behavioral changes unverified when a build or lint check is available.
