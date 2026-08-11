# Dinesh Fabrications

Website for Dinesh Fabrications — a fabrication and welding workshop. Built with React, Vite, and React Router.

## Local development

```bash
npm install
npm run dev
```

## Editable content

- **Business info** (phone, WhatsApp, email, address, hours): `src/data/business.js`
- **Services**: `src/data/services.js`
- **Projects/gallery**: `src/data/projects.js`
- **Photos**: drop image files into `public/images/...` matching the paths already referenced in the data files above — they'll appear automatically. Until then, a styled placeholder shows in their place.

## Deploying to GitHub Pages

This project is configured to deploy to:

```
https://dineshworkdev.github.io/dinesh-fabrications-project/
```

### One-time setup

1. Push this project to a GitHub repo named `dinesh-fabrications-project` under the `dineshworkdev` account (or update the paths below if using a different name).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to the `main` branch — the included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the site. You can also trigger it manually from the **Actions** tab.

### If you rename the repo or GitHub username

Update the subpath in these three places to match:

- `vite.config.js` — the `base` value
- `src/main.jsx` — the `basename` prop on `BrowserRouter`
- `package.json` — the `homepage` field (informational only)

### Notes

- `scripts/copy-404.js` runs automatically after every build (`postbuild`). It copies `index.html` to `404.html` so that direct links to pages like `/about` work correctly on GitHub Pages, which has no server-side routing.
- `public/.nojekyll` prevents GitHub Pages from running its default Jekyll processing on the build output.

## Quality checks

```bash
npm run lint
npm run build
```
