// Runs after `vite build`.
// GitHub Pages only knows about real files. Without these copies, /about, /services and /contact
// are sent with a "404 not found" code (the page still shows, but Google may skip it).
// GitHub Pages serves about.html when someone visits /about, so each page gets its own copy.
import { copyFileSync } from 'node:fs'

const pages = ['about', 'services', 'contact']

for (const page of pages) {
  copyFileSync('dist/index.html', `dist/${page}.html`)
}

// Fallback for any other address (typos, old links): still loads the site.
copyFileSync('dist/index.html', 'dist/404.html')

console.log(`postbuild: created ${pages.map(p => p + '.html').join(', ')} and 404.html`)
