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

The site deploys to **GitHub Pages** on the custom domain
**[mia.decuir.info](https://mia.decuir.info)**, via GitHub Actions
(`.github/workflows/deploy.yml`). Every push to `main` builds the site and
publishes `dist/`.

The build output is plain static files. Since this is a single-page app, the
workflow copies `index.html` to `404.html` so client-side routes (deep links
like `/blog/hello-world`) resolve correctly on refresh.

### One-time setup

1. **Repo settings → Pages → Build and deployment → Source:** select
   **GitHub Actions**.
2. **Repo settings → Pages → Custom domain:** enter `mia.decuir.info`.
3. **DNS (at your domain registrar / DNS host):** add a `CNAME` record:

   | Type  | Name  | Value             |
   | ----- | ----- | ----------------- |
   | CNAME | `mia` | `mia-n.github.io` |

4. Once GitHub verifies the domain and issues a certificate (can take a few
   minutes to a few hours), enable **Enforce HTTPS**.

The domain is also committed as [`public/CNAME`](public/CNAME), which Vite copies
into the build output so the custom domain persists across deploys.
