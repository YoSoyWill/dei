self.addEventListener('install', function(event) {
// Instalar de inmediato
if (self.skipWaiting) { self.skipWaiting(); }
  event.waitUntil(
    caches.open('cache1.6').then(function(cache) {
      return cache.addAll([
  'https://yosoywill.github.io/dei/index.html',
  'https://yosoywill.github.io/dei/faq.html',
  'https://yosoywill.github.io/dei/experiencias.html'
  'https://yosoywill.github.io/dei/bibliografia.html',
  'https://yosoywill.github.io/dei/plantillasindigenas.html',
  'https://yosoywill.github.io/dei/404.html',
  'https://yosoywill.github.io/dei/css/w3.css',
      ]);
    })
  );
});
// Cache, falling back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
 // Elimina archivos de cache viejos
  var cacheWhitelist = ['cache1.6'];
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    });
	caches.keys().then(function(cacheKeys) {
	// Muestra en la consola la cache instalada 
	console.log('Versión SW: '+cacheKeys);
});  
