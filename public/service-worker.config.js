importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

const CACHE_NAME = "my-pwa-cache";
const OFFLINE_FALLBACK_PAGE = "/offline.html";

// List specific asset files instead of directories
const PRE_CACHE_ASSETS = ["/assets/", OFFLINE_FALLBACK_PAGE];

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Use addAll for an array of URLs
      await cache.addAll(PRE_CACHE_ASSETS);
    })()
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// Use Workbox for routing
workbox.routing.registerRoute(
  ({ request }) => request.mode === "navigate",
  new workbox.strategies.NetworkFirst({
    cacheName: CACHE_NAME,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
      }),
    ],
  })
);

// Fallback to offline page
workbox.routing.setCatchHandler(async ({ event }) => {
  if (event.request.mode === "navigate") {
    return caches.match(OFFLINE_FALLBACK_PAGE);
  }
  return Response.error();
});

self.addEventListener("push", event => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || "custom-notification-icon.png",
      data: { url: data.url }, // Store URL to open on click
    })
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  const url = event.notification.data.url || "/";
  const fullPath = new URL(url, self.location.origin).href;

  event.waitUntil(
    clients.matchAll({ type: "window" }).then(windowClients => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === fullPath && "focus" in client) {
          return client.focus();
        }
      }
      // If no window/tab is already open, open a new one
      if (clients.openWindow) {
        return clients.openWindow(fullPath);
      }
    })
  );
});
