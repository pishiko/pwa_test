var CACHE_NAME = 'pwa-pishiko-sample-caches';
var urlToCache = [
    //'/pishiko.github.io/pwa_test/'
    '/pwa_test/index.html'
];

self.addEventListener('install',function(event){
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache){
            console.log("INSTALL")
            return cache.addAll(urlToCache)
        })
    );
});

self.addEventListener('fetch',function(event){
    event.respondWith(
        caches
        .match(event.request)
        .then(function(response){
            return response ? response : fetch(event.request)
        })
    );
});