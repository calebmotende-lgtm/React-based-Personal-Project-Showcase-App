# Personal Project Showcase App

A simple and effective React portfolio application built with Vite to dynamically organize, filter, and display development projects.

## Live Demo
You can check out the live deployment here: [Live Showcase Link](https://calebmotende-lgtm.github.io/React-based-Personal-Project-Showcase-App/)

---

## Technical Project Architecture

In line with standard project instructions, this application is configured to handle build bundling and public sub-folder hosting seamlessly:

* **Base Path Resolution:** To prevent a blank white screen when hosted on GitHub Pages, `vite.config.js` explicitly defines the base sub-folder matching the repository name (`/React-based-Personal-Project-Showcase-App/`).
* **Production Building:** Running the build pipeline bundles the modular React components into standard, compressed static files inside a `/dist` folder.
* **Branch Deployment:** The `gh-pages` package isolates these production-ready static assets and pushes them directly to a dedicated `gh-pages` host branch without cluttering the main development branch.

---

## Key Workspace Commands

### Local Development
To launch the hot-reloading local preview server for testing:
```bash
npm run dev
