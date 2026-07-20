// sw.js - Service Worker Sederhana
self.addEventListener('install', (event) => {
  console.log('Service Worker terinstall.');
});

self.addEventListener('fetch', (event) => {
  // Membiarkan permintaan web berjalan normal
  event.respondWith(fetch(event.request));
});
