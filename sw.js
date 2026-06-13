// Service Worker — Taxímetro Aranda Lic. 12
// Estrategia: Cache First para assets propios, Network First para externos

const CACHE_NAME = 'taxi-aranda-v1';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalar: cachear el shell de la app
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_URLS))
  );
  self.skipWaiting();
});

// Activar: limpiar caches antiguas
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: servir desde caché si está disponible, sino red
self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Dejar pasar siempre: GPS, geocodificación, CDNs externos
  if(url.includes('nominatim') ||
     url.includes('cdnjs') ||
     url.includes('jsdelivr') ||
     url.includes('googleapis') ||
     url.includes('gstatic') ||
     url.includes('fonts.google')) {
    return;
  }

  // Cache First para assets propios
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(response => {
        // Cachear respuestas válidas del mismo origen
        if(response && response.status === 200 && response.type === 'basic'){
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback: devolver index.html para navegación
        if(e.request.mode === 'navigate'){
          return caches.match('/index.html');
        }
        return new Response('', {status: 408});
      });
    })
  );
});

// Mantener SW activo para geolocalización en background
self.addEventListener('message', e => {
  if(e.data === 'keepAlive') {
    // Responder para confirmar que el SW sigue activo
    e.source.postMessage('alive');
  }
});
