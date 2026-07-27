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

This project uses [pnpm](https://pnpm.io) (pinned via the `packageManager`
field). If you don't have it: `corepack enable`, or see pnpm's install docs.

```bash
pnpm install
pnpm dev           # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
pnpm build         # type-check + produce a production build in dist/
pnpm preview       # preview the production build locally
pnpm typecheck     # type-check only
pnpm lint          # lint
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

## Config and Content

- **Identity & links:** edit `src/data/site.ts` (name, role, tagline, email, socials).
- **Resume:** edit `src/data/resume.ts` — it's structured data driving the `/resume` page.
- **About:** edit `src/pages/About.tsx`.
- **Blog posts:** add Markdown files to `src/content/posts/`. See the
  [`how-to-add-a-post`](src/content/posts/adding-a-post.md) sample. The file name
  becomes the URL slug.
- **Colors/fonts:** tweak the CSS custom properties at the top of `src/styles/index.css`.
