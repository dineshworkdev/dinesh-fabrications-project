// GitHub Pages serves 404.html for any URL that doesn't match a real file.
// Since this is a client-side-routed SPA, a direct visit to e.g. /about
// (or a page refresh on it) isn't a real file on the server. Copying the
// built index.html to 404.html means GitHub Pages serves the app itself
// in that case, and React Router then reads the URL and renders the
// correct page client-side.
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

const distDir = resolve(process.cwd(), 'dist')

copyFileSync(resolve(distDir, 'index.html'), resolve(distDir, '404.html'))

console.log('[postbuild] Copied dist/index.html -> dist/404.html for GitHub Pages SPA routing.')
