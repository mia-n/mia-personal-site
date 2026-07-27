---
title: How to add a new post
date: 2026-07-22
description: The three-step workflow for publishing to this blog.
tags: [meta]
---

Adding a post takes three steps.

## 1. Create a Markdown file

Drop a new `.md` file into `src/content/posts/`. The file name becomes the URL
slug — `my-great-idea.md` is served at `/blog/my-great-idea`.

## 2. Add frontmatter

Start the file with a frontmatter block:

```md
---
title: My great idea
date: 2026-08-01
description: A one-line summary shown in the post list.
tags: [ideas, engineering]
---
```

Supported fields:

| Field         | Purpose                                   |
| ------------- | ----------------------------------------- |
| `title`       | Post heading and list title               |
| `date`        | ISO date; posts sort newest-first         |
| `description` | Short summary in the post list            |
| `tags`        | Inline array of labels                    |

## 3. Write

Everything below the frontmatter is standard Markdown — headings, lists, code
blocks, links, and tables all work. Save the file and the post appears
automatically.
