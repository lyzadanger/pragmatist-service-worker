self.addEventListener('fetch', event => {
  var request = event.request;
  if (request.mode === 'navigate' ||
    (request.method === 'GET' &&
     request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(request).catch(error => {
        return new Response('<p>Oh, dear.</p>',
          { headers: { 'Content-Type': 'text/html' } });
      })
    );
  }
});
