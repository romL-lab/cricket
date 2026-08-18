// Chemin : /sw.js
// Rôle    : Service Worker — mise en cache pour usage offline (PWA)
// Version : v2 — chemins icônes corrigés (icon/ sans s)

const CACHE_NAME = 'cricket-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon/icon-192.png',
  './icon/icon-512.png',
];

// Installation : mise en cache des assets statiques
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activation : suppression des anciens caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : cache-first (offline ready)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
