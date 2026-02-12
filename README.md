# ERDI Data Portal – Prototype

A proposal prototype for the ERDI Data Portal: a unified platform for economists to access, analyze, and collaborate on macroeconomic and socioeconomic data for Asia and the Pacific. The design follows the Asian Development Bank (ADB) theme and demonstrates the product vision for stakeholders.

## Features (as per PRD & screen flow)

- **Landing page**: Intro to key economic indicators, one entry point “Login to Workspace”, and “Data Explorer” button linking to Statsuite. A later section links to the [ADB indicators catalog](https://adb-demo.webflow.io/indicators).
- **Site navigation**: Top nav with Home, Publications, About Us (and Workspace when logged in).
- **Publications**: Mock CMS-style content with three economy-related articles (GDP, employability, policies).
- **About Us**: Brief description of the portal and ERDI.
- **Login**: Mock sign-in; any email signs you in and redirects to the workspace.
- **Personal workspace**: After login, user lands in the personal workspace with:
  - **Spaces**: Multiple spaces; create new ones; switch between them.
  - **AI Assistant**: Dedicated right-hand panel for chat. Use it to “generate” datasets (mock responses). The panel can be toggled open/closed.
  - **Datasets**: Save new datasets (mock), list saved datasets, share with other users.
  - **Collaboration**: “Invite to collaborate” turns a space into a collaborative space (mock invite by email).

## Tech stack

- React 19 + Vite 7
- React Router for routing
- Context for mock auth and workspace state

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # optional: preview production build
```

## External links (as specified)

- **Data Explorer**: [https://de.statsuite.dev.adb-aibd.tech/](https://de.statsuite.dev.adb-aibd.tech/)
- **Indicators catalog**: [https://adb-demo.webflow.io/indicators](https://adb-demo.webflow.io/indicators)
- **Design reference**: [ADB KIDB](https://kidb.adb.org/)

## Screen flow alignment

- **Light yellow (CMS)**: Landing intro text, key indicators section, Publications, About Us.
- **Dark yellow (bespoke)**: Login, workspace, spaces, AI chat, datasets, save/share, invite.
- **Blue (Statsuite)**: Accessed via “Data Explorer” and the indicators catalog link; no embedded Statsuite UI in this prototype.
