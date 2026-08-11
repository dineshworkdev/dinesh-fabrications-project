import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages project sites are served from a subpath
// (https://<user>.github.io/<repo>/), so the production build needs that
// subpath as its base. Local dev keeps serving from '/' for convenience.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/dinesh-fabrications-project/' : '/',
  plugins: [react()],
}))
