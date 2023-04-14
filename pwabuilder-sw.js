var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        '/pages/inicio.html',

        '/styles/inicio.css',

        'img/android/android-icon-512-512.png',
        'img/android/android-icon-512-512.png',
        'img/android/android-icon-48-48.png',
        'img/android/android-icon-72-72.png',
        'img/android/android-icon-96-96.png',
        'img/android/android-icon-144-144.png',
        'img/android/android-icon-192-192.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});