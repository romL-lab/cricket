// Chemin : /sw.js
// Rôle    : Service Worker — mise en cache pour usage offline (PWA)
// Version : v10 — bump forcé pour invalider le cache v9

const CACHE_NAME = 'cricket-v10';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon/icon-192.png',
  './icon/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
