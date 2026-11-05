# Ejike James — Portfolio

A dark, editorial React portfolio built with Vite. The site is designed to grow through a central project catalogue: project cards, category filters, featured work, and case-study routes are all generated from `src/data/projects.js`.

## Requirements

- [Node.js LTS](https://nodejs.org/) (npm is included with Node.js)
- Visual Studio Code

## Run on Windows with VS Code

1. Install the current Node.js LTS release from [nodejs.org](https://nodejs.org/) if Node.js is not already installed. Restart VS Code after installing so its terminal can find `node` and `npm`.
2. Extract the complete `ejike-portfolio` folder if you received it as a ZIP.
3. In VS Code, choose **File → Open Folder…** and select the `ejike-portfolio` folder. Open the project folder itself, not only an individual source file.
4. Open **Terminal → New Terminal**. Check that the prompt is inside `ejike-portfolio`. If it is not, use `cd path\to\ejike-portfolio`.
5. Install the dependencies:

   ```bash
   npm install
   ```

6. Start the Vite development server:

   ```bash
   npm run dev
   ```

7. Open the local address printed in the terminal, usually `http://localhost:5173/`.
8. Stop the server with **Ctrl + C** in the terminal. To restart it, run `npm run dev` again.
9. Create a production build:

   ```bash
   npm run build
   ```

10. Preview that production build locally:

    ```bash
    npm run preview
    ```

This is a Vite-powered React application. During normal development, do **not** open `index.html` directly; use the Vite server so React, routes, and modules work correctly.

## Project structure

```text
ejike-portfolio/
├── public/
│   └── images/
│       └── projects/       # Local project/editorial imagery
├── src/
│   ├── components/         # Navigation, footer, buttons, project cards
│   ├── data/               # Profile, skills, and project catalogue
│   ├── layouts/            # Shared site shell
│   ├── pages/              # Home, About, Projects, case study, Contact, 404
│   ├── styles/             # Global tokens, layout, component styles
│   ├── App.jsx             # React Router route definitions
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── vercel.json             # React Router fallback for Vercel
```

## Add a project

1. Put genuine screenshots or project images in `public/images/projects/`. Use lowercase, descriptive names with hyphens, for example `weather-dashboard-home.png`. Keep images near a consistent landscape ratio (roughly 3:2 or 16:10), and use the project slug in filenames where it helps.
2. Open `src/data/projects.js` and add one object to the `projects` array. Copy the shape of the AUREN entry, then replace its content with information you can verify.
3. Required fields: `slug` (unique URL-safe identifier), `title`, `description`, `category`, `status`, `featured` (true/false), `technologies` (array), and `thumbnail` (`src` plus descriptive `alt`). Use a unique, lowercase slug such as `weather-dashboard`.
4. Add only details you can support. Optional fields include `longDescription`, `overview`, `purpose`, `role`, `features`, `projectDirection`, `designDecisions`, `implementation`, `challenges`, `lessonsLearned`, and `gallery`. Omit an optional field until you have real information for it; the detail page hides sections that are absent.
5. Add a genuine `liveUrl` or `repoUrl` only when it exists. Leave either value as an empty string otherwise; its action will not appear.
6. Save the file. The project appears in the gallery, its category filter is created automatically, and `/projects/<slug>` resolves to its case study. Featured projects also appear in the home feature area.

`thumbnail.src` and each `gallery[].src` should be root-relative public paths, for example `/images/projects/weather-dashboard-home.png`. `alt` should describe what is actually shown, not repeat the project title. Set `featured: true` only for projects you want to promote on the home page.

### AUREN image note

The AUREN visuals currently in `public/images/projects/` are editorial reference photos, not screenshots of the AUREN implementation. The case study labels them accordingly. Replace them with your own real screenshots when you have them.

The two current reference images were downloaded from Unsplash (photo IDs `photo-1511499767150-a48a237f0083` and `photo-1523275335684-37898b6baf30`). Verify current source details and licensing before redistribution or replacing them in a public deployment.

## Update contact information

Edit the `profile` object in `src/data/profile.js`. The name, email, phone, location, navigation label, footer, and contact page read from that object. The email and phone values are used to generate working `mailto:` and `tel:` links.

## Images, demos, and repositories

- Add local screenshots under `public/images/projects/` and update the project's `thumbnail` or `gallery` data.
- Keep descriptive alt text and image dimensions/aspect ratios in mind; the cards and case studies use `object-fit: cover` to avoid stretching.
- Set `liveUrl` and `repoUrl` to actual public URLs when available. The UI conditionally omits missing links; it does not generate placeholder destinations.

## Deployment

This project is deployed on Vercel and prepared for static hosting. `vercel.json` configures Vercel to serve the Vite entry page for client-side React Router URLs, so direct visits and refreshes on `/about`, `/projects`, and `/projects/auren` can reach the app.

For another host, use that provider's documented single-page-app rewrite/fallback instead of copying Vercel configuration blindly. A static build is written to `dist/`.

## Checks

The production build completed successfully. Automated browser checks in the local production preview covered direct visits to the main routes, the AUREN case study, both not-found states, category filtering, browser back/forward, working mail and telephone links, image decoding, and the mobile menu (open, Escape-close, and route-selection close).

Horizontal overflow was checked at desktop, tablet (768px), and mobile (390px) widths. Keyboard skip-link order and reduced-motion scrolling were checked, and no browser console or page errors were reported. The main routes were also visually reviewed at desktop, tablet, and mobile sizes.

Vercel hosting itself and a live deployment were not tested as part of these checks. The production app is static and has no backend or message-delivery service. No AUREN checkout, payment processing, account system, cart, or inventory feature is claimed.
