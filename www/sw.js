const CACHE_NAME = 'hira-plus-v4-7';
const APP_FILES = ['./', './index.html', './manifest.json', './hira-data.js', './logo-jm.jpg', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png', './lohahevitra.js', './bible-app.js', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './splash/splash-icon.png'];
const BIBLE_FILES = ['./baiboly.js']; // lehibe (~4.5 Mo): tsy manakana ny fametrahana raha tsy tafiditra

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

// Stale-while-revalidate: afficher tout de suite le cache, mettre à jour en arrière-plan
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => null);
      if (cached) { event.waitUntil(network); return cached; }
      return (await network) || (await cache.match('./index.html')) || Response.error();
    })
  );
});
