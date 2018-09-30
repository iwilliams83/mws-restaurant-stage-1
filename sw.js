console.log("I'm the fat man!");
self.addEventListener('fetch', function(event) {
  console.log("I'm the scat man!");
  console.log('URL ', event.request.url)
});
