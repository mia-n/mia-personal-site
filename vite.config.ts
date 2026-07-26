import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The `base` path controls the URL prefix the built assets are served from.
// - Custom domain / Vercel / Netlify / Cloudflare Pages: leave as '/'.
// - GitHub Pages project site (user.github.io/repo): set BASE_PATH=/repo/.
// It is read from an env var so the same build config works on any host.
const base = process.env.BASE_PATH ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
