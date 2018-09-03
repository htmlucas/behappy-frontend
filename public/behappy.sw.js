function installSW() {
  console.log('ServiceWorker instalado com sucesso!');
}

self.addEventListener("install", installSW);

var prefix = 'behappy.sw';
var	version = 1;
var	currentId = prefix + '-' + version;
var	previousId = prefix + '-' + (version - 1);

var	urls = [				
  '/',
  'bundle.js',
  'style.css',
  'img/avatars.png',
  'img/botoes.png',
  'img/favicon.ico',
  'img/logo.png',
];

function activateSW() {
  caches.open(currentId).then(cache	=>	{
    console.log(`Cache Storage ${currentId} foi ativado com sucesso!`);
    cache.addAll(urls)
      .then(() => {
        caches.delete(previousId);
        console.log(`Cache Storage ${previousId} foi excluído!`);
      });
  });
}

self.addEventListener("activate", activateSW);

function searchFiles(event) {
  event.respondWith(
    caches.match(event.request).then((cacheFile) => {
      return cacheFile ? cacheFile : fetch(event.request);
    })
  );
}

self.addEventListener("fetch",	searchFiles);
