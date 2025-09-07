# Admin Dashboard (React + Vite)

This repository is an admin dashboard built with React and Vite. It uses Material UI (MUI) for components and theming, FullCalendar for calendar features, and MUI DataGrid for tables. The project includes a light/dark theme toggle and several pre-built pages (Dashboard, Team, Contacts, Invoices, Calendar, Charts, Profile form, FAQ, etc.).

## Quick overview

- Framework: React (17/18 compatible)
- Bundler: Vite
- UI library: @mui/material, @mui/icons-material
- Data Grid: @mui/x-data-grid
- Calendar: @fullcalendar/react + plugins
- Routing: react-router-dom

## Features

- Responsive admin layout with sidebar and topbar
- Dark / Light theme switch (persisted to localStorage)
- Pages:
  - Dashboard (charts & KPI cards)
  - Team (user list)
  - Contacts (contacts table)
  - Invoices (invoices table)
  - Calendar (add/edit events)
  - Charts: Bar, Line, Pie, Geography
  - Profile form (create user)
  - FAQ and Not Found
- Lazy-loaded route pages and deferred DataGrid to improve initial load

## Local setup (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Install optional packages used in the project (if missing):

```powershell
# FullCalendar plugins (if not already installed)
npm install --save @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction
```

3. Start dev server

```powershell
npm run dev
```

4. Build for production

```powershell
npm run build
```

5. Preview production build locally

```powershell
npm run serve
```

## Available scripts (package.json)

- npm run dev — start Vite dev server
- npm run build — build a production bundle
- npm run serve — preview built output

## Folder structure (key files)

src/
- App.jsx — main layout and theme provider
- Theme.jsx — theme tokens and global CssBaseline overrides (light/dark palettes)
- main.jsx — router setup (lazy-loaded routes)
- index.css — base CSS and font imports
- components/ — shared components (Header, TopBar, SideBar, etc.)
- page/
  - dashboard/ — dashboard page and cards
  - team/ — team page and data
  - contacts/ — contacts page and sample data
  - invoices/ — `InvoicesBalance.jsx` and `DataInvoices.js` (sample invoices)
  - calendar/ — `Calender.jsx` and `calender.css` (FullCalendar integration)
  - PieChart/ BarChart/ LineChart/ geographyChart — chart pages
  - profile/ — ProfileMangments.jsx (form using react-hook-form)

## Theme & Dark Mode

- Theme tokens live in `src/Theme.jsx`. Light and dark palettes are defined there and applied via MUI's `ThemeProvider` in `App.jsx`.
- The current mode is persisted to `localStorage` under the key `currentMode`.
- Global CSS overrides for MUI components and some calendar CSS are registered via `MuiCssBaseline` styleOverrides so the calendar sidebar and text adapt to the active theme.

If you need different brand colors, edit `getDesignTokens` in `src/Theme.jsx`.

## Performance notes & what I changed

- Lazy-loaded route pages in `src/main.jsx` to reduce initial bundle size.
- Deferred heavy MUI DataGrid import on the invoices page (dynamic import + Suspense) so grid code only loads when the route is opened.
- Added readable palettes for dark and light modes and global CSS overrides to prevent unreadable text in both modes.

Suggested next steps to improve Lighthouse metrics:
- Lazy-load DataGrid on other pages (Contacts, Team).
- Reduce demo dataset sizes used for tables.
- Optimize images in `src/assets/images` (resize, convert to WebP, add dimensions).
- Enable production server compression and long-term caching for static assets.
- Use a bundle analyzer to find large dependencies.

## FullCalendar notes

- Calendar page uses `@fullcalendar/react` with `dayGridPlugin`, `timeGridPlugin`, and `interactionPlugin`. Make sure the packages are installed.
- Styles for the calendar live in `src/page/calendar/calender.css`. The theme's CssBaseline overrides touch calendar colors, but if you have custom colors in the CSS file, prefer using theme classes or variables.

## Troubleshooting

- Import errors like "Failed to resolve import '@fullcalendar/timegrid'" usually mean that package isn't installed. Run the install command above and restart the dev server.
- If Vite reports module parse errors after edits, run `npm install` and then `npm run dev` again.

If the dev server fails with an esbuild or syntax error, check the terminal output and the file mentioned. I can run the dev server and capture the full error output if you want.

## Deployment

- This repo includes a `firebase.json` and was deployed using `firebase deploy` in the workspace. To redeploy:

```powershell
firebase deploy --only hosting
```

Adjust your hosting provider as needed.

## Contributing

- Create a branch for features or fixes: `git checkout -b feat/your-feature`
- Run the dev server and add simple tests/manual checks
- Open a PR with a clear description of changes

-------------------------------------------------------------------------------

- run a Lighthouse report and iterate on the high-impact items listed above
- lazy-load/instrument more heavy components (DataGrid on Contacts/Team)
- optimize images and assets

Say which item to do next and I'll implement it.
