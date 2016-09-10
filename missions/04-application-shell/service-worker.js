const cachePrefix = 'mission-04';
const scope      = '/missions/04-application-shell';
const cacheFiles = [
  '',
  'default.css',
  'static-assets/cloud-1.jpg',
  'static-assets/cloud-2.jpg',
  'static-assets/cloud-3.jpg',
  'static-assets/cloud-4.jpg',
  'static-assets/cloud-5.jpg',
  'static-assets/cloud-6.jpg',
  'static-assets/cloud-7.jpg',
  'static-assets/cloud-8.jpg',
  'static-assets/cloud-9.jpg',
  'static-assets/cloud-10.jpg'
].map(path => `${scope}/${path}`);

function fetchFromCache (request) {
  return caches.match(request).then(response => {
    if (!response) {
      throw Error(`${request.url} not found in cache`);
    }
    return response;
  });
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(`${cachePrefix}-shell`).then(cache => {
      return cache.addAll(cacheFiles);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  var request = event.request;
  var url     = new URL(request.url);
  if (cacheFiles.indexOf(url.pathname) !== -1) {
    event.respondWith(
      fetchFromCache(request)
        .catch(() => fetch(request))
    );
  }
});
