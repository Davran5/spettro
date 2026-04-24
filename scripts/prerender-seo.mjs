import fs from 'node:fs/promises';
import path from 'node:path';
import { ROUTE_LIST, SEO_ROUTES, SITE_URL, organizationSchema } from './seo-config.mjs';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const baseIndexPath = path.join(distDir, 'index.html');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function absoluteUrl(pathname) {
  return `${SITE_URL}${pathname}`;
}

function buildHead(route) {
  const canonical = absoluteUrl(route.path);
  const ogImage = absoluteUrl(route.ogImage);
  const schema = {
    ...organizationSchema,
    '@id': `${SITE_URL}/#organization`,
    inLanguage: route.lang,
    url: canonical,
    name: 'Spettro Uzbekistan',
    description: route.description
  };

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(route.keywords.join(', '))}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="alternate" hreflang="uz" href="${absoluteUrl(SEO_ROUTES.uz.path)}" />`,
    `<link rel="alternate" hreflang="ru" href="${absoluteUrl(SEO_ROUTES.ru.path)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${absoluteUrl(SEO_ROUTES.uz.path)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Spettro Uzbekistan" />`,
    `<meta property="og:locale" content="${route.locale}" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
  ].join('\n    ');
}

function buildStaticContent(route) {
  return `
      <article class="seo-static-content" aria-label="${escapeHtml(route.staticContent.heading)}">
        <h1>${escapeHtml(route.staticContent.heading)}</h1>
        <p>${escapeHtml(route.staticContent.lead)}</p>
        <ul>
          ${route.staticContent.sections.map((item) => `<li>${escapeHtml(item)}</li>`).join('\n          ')}
        </ul>
      </article>`;
}

function renderRouteHtml(baseHtml, route) {
  let html = baseHtml
    .replace(/<html[^>]*>/, `<html lang="${route.lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta[\s\S]*?name="description"[\s\S]*?\/>\s*/g, '')
    .replace(/<meta[\s\S]*?name="robots"[\s\S]*?\/>\s*/g, '')
    .replace(/<link rel="canonical"[\s\S]*?>/g, '')
    .replace(/<link rel="alternate"[\s\S]*?>/g, '')
    .replace('</head>', `    ${buildHead(route)}\n</head>`);

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${buildStaticContent(route)}\n    </div>`
  );

  return html;
}

async function listWebpImages() {
  const files = [];

  async function walk(dir) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.name.toLowerCase().endsWith('.webp')) {
        files.push(`/${path.relative(distDir, fullPath).replaceAll(path.sep, '/')}`);
      }
    }
  }

  await walk(distDir);
  return files.sort();
}

async function writeSitemaps() {
  const urls = ROUTE_LIST.map((route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <xhtml:link rel="alternate" hreflang="uz" href="${absoluteUrl(SEO_ROUTES.uz.path)}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${absoluteUrl(SEO_ROUTES.ru.path)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(SEO_ROUTES.uz.path)}" />
    <changefreq>weekly</changefreq>
    <priority>${route.code === 'uz' ? '1.0' : '0.9'}</priority>
  </url>`).join('\n');

  await fs.writeFile(
    path.join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    'utf8'
  );

  const images = await listWebpImages();
  const imageEntries = ROUTE_LIST.map((route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
${images.map((image) => `    <image:image><image:loc>${absoluteUrl(image)}</image:loc></image:image>`).join('\n')}
  </url>`).join('\n');

  await fs.writeFile(
    path.join(distDir, 'sitemap-images.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries}
</urlset>
`,
    'utf8'
  );
}

async function writeRobots() {
  await fs.writeFile(
    path.join(distDir, 'robots.txt'),
    `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-images.xml
`,
    'utf8'
  );
}

async function writeRootRedirect() {
  await fs.writeFile(
    path.join(distDir, 'index.html'),
    `<!doctype html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(SEO_ROUTES.uz.title)}</title>
    <meta name="description" content="${escapeHtml(SEO_ROUTES.uz.description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${absoluteUrl(SEO_ROUTES.uz.path)}" />
    <link rel="alternate" hreflang="uz" href="${absoluteUrl(SEO_ROUTES.uz.path)}" />
    <link rel="alternate" hreflang="ru" href="${absoluteUrl(SEO_ROUTES.ru.path)}" />
    <link rel="alternate" hreflang="x-default" href="${absoluteUrl(SEO_ROUTES.uz.path)}" />
    <meta http-equiv="refresh" content="0; url=/uz/" />
  </head>
  <body>
    <main>
      <h1>${escapeHtml(SEO_ROUTES.uz.staticContent.heading)}</h1>
      <p>${escapeHtml(SEO_ROUTES.uz.staticContent.lead)}</p>
      <p><a href="/uz/">Uzbek</a> | <a href="/ru/">Русский</a></p>
    </main>
    <script>window.location.replace('/uz/');</script>
  </body>
</html>
`,
    'utf8'
  );
}

const baseHtml = await fs.readFile(baseIndexPath, 'utf8');

for (const route of ROUTE_LIST) {
  const routeDir = path.join(distDir, route.code);
  await fs.mkdir(routeDir, { recursive: true });
  await fs.writeFile(path.join(routeDir, 'index.html'), renderRouteHtml(baseHtml, route), 'utf8');
}

await writeSitemaps();
await writeRobots();
await writeRootRedirect();

console.log('SEO prerender complete.');
