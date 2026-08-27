# Personal Portfolio

Nick Wojcik's personal portfolio site. Built with React + Vite, deployed to GitHub Pages.

## Live Site

Deployed automatically from `main` via GitHub Actions. Once a custom domain is configured, it will be available at that domain; until then it's served from GitHub Pages' default `<username>.github.io` URL.

## Getting Started

```bash
npm install
npm run dev      # start local dev server with hot reload
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
npm run lint     # run Oxlint
```

## Project Structure

```
.
├── .github/workflows/deploy.yml   # CI: builds and deploys dist/ to GitHub Pages on push to main
├── public/                        # static assets copied as-is to the build output
├── src/
│   ├── assets/                    # images/etc. imported by components
│   ├── App.jsx                    # root component
│   ├── App.css
│   ├── main.jsx                   # React entry point, mounts <App /> to #root
│   └── index.css                  # global styles
├── index.html                     # HTML entry point Vite injects the bundle into
├── vite.config.js                 # Vite + React plugin config
└── .oxlintrc.json                 # linter config
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the app and publishes `dist/` to GitHub Pages via GitHub's official `actions/deploy-pages` action. No manual build/deploy steps are needed.

### Custom Domain

To serve this site from your own domain:

1. In the repo's **Settings → Pages**, add your domain under "Custom domain" (this creates a `CNAME` file in the repo).
2. At your DNS provider, point the domain at GitHub Pages:
   - Apex domain (`example.com`): four `A` records to GitHub Pages' IPs, or an `ALIAS`/`ANAME` record to `<username>.github.io` if your provider supports it.
   - `www` subdomain: a `CNAME` record to `<username>.github.io`.
3. Once DNS propagates, enable "Enforce HTTPS" in the Pages settings — GitHub provisions a free TLS certificate automatically.
