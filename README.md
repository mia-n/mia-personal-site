# Personal site

A small personal site — resume, blog, and about — built with **Vite + React +
TypeScript**. It compiles to static files, so it can be hosted almost anywhere.

## Stack

- [Vite](https://vite.dev) — build tooling & dev server
- [React](https://react.dev) + [React Router](https://reactrouter.com) — UI & routing
- TypeScript — types throughout
- [marked](https://marked.js.org) — Markdown → HTML for blog posts
- Plain CSS with light/dark mode — no UI framework, no runtime dependencies beyond React

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build      # type-check + produce a production build in dist/
npm run preview    # preview the production build locally
npm run typecheck  # type-check only
npm run lint       # lint
```

## Project structure

```
src/
├── components/        Layout, nav, footer, theme toggle
├── content/posts/     Blog posts as Markdown files (+ frontmatter)
├── data/              site.ts (identity/links) and resume.ts (resume data)
├── lib/posts.ts       Loads & parses Markdown posts at build time
├── pages/             Home, Resume, Blog, BlogPost, About, NotFound
└── styles/index.css   All styling + design tokens
```

## Making it yours

- **Identity & links:** edit `src/data/site.ts` (name, role, tagline, email, socials).
- **Resume:** edit `src/data/resume.ts` — it's structured data driving the `/resume` page.
- **About:** edit `src/pages/About.tsx`.
- **Blog posts:** add Markdown files to `src/content/posts/`. See the
  [`how-to-add-a-post`](src/content/posts/adding-a-post.md) sample. The file name
  becomes the URL slug.
- **Colors/fonts:** tweak the CSS custom properties at the top of `src/styles/index.css`.

## Deploying

The build output (`dist/`) is plain static files. This site is a single-page
app, so every host needs a **fallback that serves `index.html` for unknown
paths** (so deep links like `/blog/hello-world` work on refresh). Config for the
common hosts is already included:

| Host              | What to do                                                                 |
| ----------------- | -------------------------------------------------------------------------- |
| **Vercel**        | Import the repo. `vercel.json` handles the SPA rewrite.                     |
| **Netlify**       | Build command `npm run build`, publish dir `dist`. `public/_redirects` handles routing. |
| **Cloudflare Pages** | Build command `npm run build`, output dir `dist`. Uses `public/_redirects`. |
| **GitHub Pages**  | Enable Pages (Source: GitHub Actions). `.github/workflows/deploy.yml` builds & deploys. |

For any static host, the build command is `npm run build` and the output
directory is `dist`.

### Custom domain

Point your domain at whichever host you choose (each has a "custom domain"
section in its dashboard/docs). Because assets are served from the site root by
default (`base: '/'`), a custom domain works with no extra config. The only case
needing a change is a **GitHub Pages project page** served from a subpath
(`user.github.io/repo`) — set `BASE_PATH=/repo/` for the build (see the deploy
workflow).
