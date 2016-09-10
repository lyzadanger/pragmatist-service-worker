self.addEventListener('install', event => {
  var offlineURL = 'offline.html';
  event.waitUntil(
    fetch(new Request(offlineURL)).then(response => {
      return caches.open('offline').then(cache => {
        return cache.put(new Request(offlineURL), response);
      });
    })
  );
});

self.addEventListener('fetch', event => {
  var request = event.request;
  if (request.mode === 'navigate' ||
     (request.method === 'GET' &&
       request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(request).catch(error => {
        return caches.open('offline').then(cache => {
          return cache.match('offline.html');
        });
      })
    );
  }
});
