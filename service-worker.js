const CACHE_NAME = 'habitos-cache-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/styles.css',
  './src/app.js',
  './src/habit-card.js',
  './icons/imagen1.png',
  './icons/imagen2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});