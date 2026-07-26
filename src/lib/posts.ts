import { marked } from 'marked'

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
}

export interface Post extends PostMeta {
  html: string
}

// Eagerly import every markdown file in content/posts as a raw string.
// Vite resolves this at build time, so posts ship as static assets — no
// server or CMS required.
const modules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/**
 * Parse a minimal YAML-ish frontmatter block delimited by `---`.
 * Supports string values and inline `[a, b]` arrays, which is all the
 * blog needs while avoiding a Node-only dependency like gray-matter.
 */
function parseFrontmatter(raw: string): {
  data: Record<string, string | string[]>
  body: string
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, body: raw }

  const data: Record<string, string | string[]> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    if (!key) continue

    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      data[key] = value.replace(/^["']|["']$/g, '')
    }
  }

  return { data, body: match[2] }
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

function toStr(value: string | string[] | undefined, fallback = ''): string {
  return typeof value === 'string' ? value : fallback
}

const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const slug = toStr(data.slug) || slugFromPath(path)
    return {
      slug,
      title: toStr(data.title, slug),
      date: toStr(data.date),
      description: toStr(data.description),
      tags: Array.isArray(data.tags) ? data.tags : [],
      html: marked.parse(body, { async: false }) as string,
    }
  })
  // Newest first.
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getAllPosts(): PostMeta[] {
  return posts.map(
    ({ slug, title, date, description, tags }): PostMeta => ({
      slug,
      title,
      date,
      description,
      tags,
    }),
  )
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
