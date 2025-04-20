self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cal-res-cache').then(cache => {
      return cache.addAll([
        './cal_res.html',
        './logo.jpg',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});