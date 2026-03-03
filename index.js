addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event));
});

/**
 * Redirect root to montenegro (1).html and serve static assets via `env.ASSETS`.
 */
async function handleRequest(request, event) {
  const url = new URL(request.url);

  // If the client requested the root path, rewrite to the desired default page
  if (url.pathname === '/' || url.pathname === '') {
    // encode space character for file name
    url.pathname = '/montenegro%20(1).html';
    // Create a new request to pass to the asset fetcher
    request = new Request(url.toString(), request);
  }

  // For all other requests, just let the static assets handler deal with them
  return await fetch(request);
}
