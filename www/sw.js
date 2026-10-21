const CACHE_NAME = 'jm-baiboly-fihirana-v5-0';
const APP_FILES = ['./', './index.html', './manifest.json', './hira-data.js', './logo-jm.jpg', './logo-menu.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './lohahevitra.js', './bible-app.js', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './splash/splash-icon.png'];
const BIBLE_FILES = ['./baiboly.js']; // lehibe (~4.5 Mo): tsy manakana ny fametrahana raha tsy tafiditra

// Rakitra lehibe sy tsy miova: alaina avy hatrany amin'ny cache (tsy asiana tambajotra isaky ny sokafana).
// Raha ovaina ny hira-data.js / baiboly.js dia ovay ny CACHE_NAME eto ambony.
const STATIC_RE = /\/(hira-data|baiboly|lohahevitra)\.js$|\.(png|jpe?g|webp|svg|ico)$/i;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(async cache => {
    await Promise.allSettled([...APP_FILES, ...BIBLE_FILES].map(f => cache.add(f)));
  }));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin || req.headers.has('range')) return;
  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: true });
      // Rakitra lehibe: cache-first (maivana, tsy mamerina misintona 5 Mo isaky ny fanokafana)
      if (cached && STATIC_RE.test(url.pathname)) return cached;
      // Hafa (index.html, JS kely...): afaka miseho avy hatrany, havaozina any ambadika
      const network = fetch(req).then(res => {
        if (res && res.ok) { try { cache.put(req, res.clone()); } catch (e) {} }
        return res;
      }).catch(() => null);
      if (cached) { event.waitUntil(network); return cached; }
      return (await network) || (await cache.match('./index.html')) || Response.error();
    })
  );
});
