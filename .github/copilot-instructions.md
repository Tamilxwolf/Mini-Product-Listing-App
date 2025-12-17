## Purpose
Provide concise, actionable guidance for an AI coding agent working on this React + Vite product-listing app.

## How to run (developer flow)
- Start dev server: `npm run dev` (uses Vite). See [package.json](package.json#L1-L40).
- Build for production: `npm run build`.
- Lint: `npm run lint`.

## Big-picture architecture
- Frontend-only React single-page app scaffolded with Vite. Entrypoint: [src/main.jsx](src/main.jsx#L1-L20) which renders `App` inside a `BrowserRouter`.
- Routing is centralized in [src/App.jsx](src/App.jsx#L1-L120) using `react-router-dom` with routes for home, collection, product pages, cart, orders, and auth-related pages.
- Styling: Tailwind CSS (see `tailwind.config.js`) and `src/index.css` importing Tailwind utilities.
- Static UI assets (icons, logo) are provided by `src/assets/assets.js` and consumed throughout components (example: `src/components/Navbar.jsx`).

## Project-specific patterns & conventions
- Routes: add new pages under `src/pages/` and register a `Route` in [src/App.jsx](src/App.jsx#L1-L120).
- Components: place reusable UI in `src/components/`. Prefer default exports as the codebase does (e.g., `export default Navbar`).
- Assets module: import icons via the central `assets` object: `import { assets } from src/assets/assets.js`.
- Small utility state and UI behavior should be implemented locally in components; global state / backend integration is not present in the repo.

## Common pitfalls seen in the codebase
- Missing imports: some components (e.g., `src/components/Navbar.jsx`) use React hooks like `useState` but don't import them. Fix by adding `import React, { useState } from 'react'`.
- File name casing: components and pages use `.jsx` extension — maintain consistency with that pattern.
- When editing routes, ensure path parameters match `Route` usage, e.g., `/product/:id` in [src/App.jsx](src/App.jsx#L1-L120) and use `useParams()` in the page component.

## Integration points & external dependencies
- `react-router-dom` for client-side navigation — check versions in [package.json](package.json#L1-L40).
- Tailwind and PostCSS for styling — see `tailwind.config.js` and `postcss.config.js`.
- No backend code in this repository; network or persistence layers are out of scope unless new services are added.

## Editing & PR guidance
- Keep changes small and focused. Run `npm run dev` to verify HMR and UI changes.
- Run `npm run lint` and fix any ESLint errors before opening a PR.
- When adding a new page, include a route in `src/App.jsx` and add navigation links to `src/components/navbar.jsx`.

## Example quick fixes (copy-paste)
- Add missing `useState` import in `src/components/Navbar.jsx`:

```diff
@@
-import React from "react";
+import React, { useState } from "react";
```

## Where to look for more context
- App router and route list: [src/App.jsx](src/App.jsx#L1-L120)
- App entrypoint and router wrapper: [src/main.jsx](src/main.jsx#L1-L20)
- Navbar and navigation patterns: [src/components/Navbar.jsx](src/components/Navbar.jsx#L1-L200)
- Build and scripts: [package.json](package.json#L1-L40)

---
If anything here looks incomplete or you'd like the instructions to emphasize testing, accessibility, or a specific coding style, tell me which area to expand.
