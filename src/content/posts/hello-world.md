---
title: Hello, world
date: 2026-07-20
description: A first post — how this site is built and what to expect here.
tags: [meta, web]
---

Welcome to the first post on my new site. This space is part resume, part
notebook — a place to write things down and share what I'm working on.

## How this site is built

It's a small [Vite](https://vite.dev) + React + TypeScript app. Posts like this
one are just Markdown files with a bit of frontmatter at the top:

```md
---
title: Hello, world
date: 2026-07-20
description: A first post.
tags: [meta, web]
---
```

At build time, Vite bundles every Markdown file in `src/content/posts/` into
the app, so there's no server or CMS to run. The whole thing compiles to static
files that can be hosted almost anywhere.

## What to expect

- Notes on projects I'm building
- Things I learn along the way
- The occasional longer write-up

Thanks for reading.
