importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

const CACHE_NAME = "my-pwa-cache";

/**
 * @description Add whichever assets you want to pre-cache here:
 */
const OFFLINE_FALLBACK_PAGE = "/offline.html";

const PRE_CACHE_ASSETS = ["/assets/", OFFLINE_FALLBACK_PAGE]

/**
 * @description offline support
 */
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

/**
 * @description Listener for the install event - pre-caches our assets list on service worker install.
 */
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.add(PRE_CACHE_ASSETS);
  })());
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

/**
 * @description https://docs.pwabuilder.com/#/home/sw-intro?id=claiming-clients-during-the-activate-event
 */
self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
})

/**
 * @description https://docs.pwabuilder.com/#/home/sw-intro?id=defining-a-fetch-strategy
 */
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith((async () => {
      try {

        const preloadResponse = await event.preloadResponse;

        if (preloadResponse) {

          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);

        return networkResponse;
      } catch (error) {

        const cache = await caches.open(CACHE);

        const cachedResponse = await cache.match(offlineFallbackPage);

        return cachedResponse;
      }
    })());
  }
});


self.addEventListener("push", (event) => {
  event.waitUntil(
    self.registration.showNotification("Notification Title", {
      body: "Notification Body Text",
      icon: "custom-notification-icon.png",
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const fullPath = self.location.origin + event.notification.data.path;

  clients.openWindow(fullPath);
});