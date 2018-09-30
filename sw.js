const staticCacheName = 'restaurant-reviews-v1';
const mapBoxUrl = 'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw'
const mapBoxUrl2 = 'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw'

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll(['data/restaurants.json',
        'js/dbhelper.js', 'js/main.js', 'css/styles.css', 'img/10.jpg','img/9.jpg',
        'img/8.jpg', 'img/7.jpg', 'img/6.jpg', 'img/5.jpg', 'img/4.jpg',
        'img/3.jpg', 'img/2.jpg', 'img/1.jpg',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
         mapBoxUrl, mapBoxUrl2, 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
        'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
        'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?access_token=pk.eyJ1IjoiaXdpbGxpYW1zODMiLCJhIjoiY2ptbTc4bnJ5MGcwOTNwbnkyN2l3MHQxayJ9.mqGwDC5CPmKszZO9xF-aPw'])
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request)
    })
  )
});
