self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pittsburgh-itinerary-v1').then(cache => {
      return cache.addAll([
        './pittsburgh-itinerary.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
