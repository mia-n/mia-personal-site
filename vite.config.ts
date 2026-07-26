import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The `base` path controls the URL prefix the built assets are served from.
// The site is deployed to GitHub Pages on the custom domain mia.decuir.info,
// served from the domain root — so `base` is '/'. It stays overridable via an
// env var in case the site is ever served from a subpath (e.g. a project page
// at user.github.io/repo, which would need BASE_PATH=/repo/).
const base = process.env.BASE_PATH ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
