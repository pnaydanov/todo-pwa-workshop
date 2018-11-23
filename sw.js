
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/script.js',
  'https://unpkg.com/react@16/umd/react.development.js',
  'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
  'https://unpkg.com/babel-standalone@latest/babel.min.js',
  'https://fonts.googleapis.com/css?family=Roboto',
  'register-sw.js',
  'styles.css',
  'img/feather-sprite.svg',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});