'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/ms-icon-144x144.png": "95b5ae52008686f7e283712b28530723",
"icons/android-icon-48x48.png": "5c1a9aa5ad09b1e12b8539ad0cc5b869",
"icons/favicon-32x32.png": "af7f938ad70275f13a1e632e19fedd17",
"icons/Icon-512.png": "2a9521ddf421997582720d749f47577f",
"icons/Icon-maskable-192.png": "1d5db5ce906df4296b5c0108f04323d9",
"icons/Icon-192.png": "1d5db5ce906df4296b5c0108f04323d9",
"icons/apple-icon-60x60.png": "d0dc60d5d3552fafedaf70df8782eb44",
"icons/apple-icon-72x72.png": "f5b1b0fa9f3e59672680f4ee18437ef6",
"icons/apple-icon-144x144.png": "95b5ae52008686f7e283712b28530723",
"icons/ms-icon-70x70.png": "aa64f229738d5f896e56bd1a731dd37f",
"icons/apple-icon-180x180.png": "8c1573250f08a77fe1fe2475540e7e40",
"icons/ms-icon-310x310.png": "7221633676e7b0ba68f18ca5082622d0",
"icons/favicon-96x96.png": "baeb9ce3daa9f7d5766a9255270e58d8",
"icons/apple-icon-precomposed.png": "6b0b8c62b75163f843bab4a99a4a8af6",
"icons/favicon.ico": "bf7e64b98da51f59186cd7b970446126",
"icons/android-icon-144x144.png": "95b5ae52008686f7e283712b28530723",
"icons/android-icon-192x192.png": "f2ed652aeec910fac331d4246c4cd48a",
"icons/apple-icon-76x76.png": "f219ecacba3b437ba9c867b67dfd73c0",
"icons/Icon-maskable-512.png": "2a9521ddf421997582720d749f47577f",
"icons/apple-icon-114x114.png": "aad3debcaaa1c7f00ef690f62b299982",
"icons/ms-icon-150x150.png": "363c4d88912275fc7714b22a6038ea63",
"icons/favicon-16x16.png": "51c57a827b7e4830c10f0ccca1a150db",
"icons/apple-icon-120x120.png": "c66c5bd9f07a7230baf080d55957830a",
"icons/android-icon-96x96.png": "baeb9ce3daa9f7d5766a9255270e58d8",
"icons/android-icon-72x72.png": "f5b1b0fa9f3e59672680f4ee18437ef6",
"icons/apple-icon-152x152.png": "b641e7d86d61dab363abf91f98e20752",
"icons/apple-icon.png": "6b0b8c62b75163f843bab4a99a4a8af6",
"icons/apple-icon-57x57.png": "f5770607ce0e0b8c399d557cc7faf48c",
"icons/android-icon-36x36.png": "95af5254045681a3f2ccfce8a59da34c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"flutter_bootstrap.js": "e603bb7c2a6b4c065730344dd2919947",
"version.json": "2e55d8d39aeb999f8b3eb65d0f4c06ef",
"favicon.png": "9e613f0d779fd6225ce6f177d97efc9a",
"main.dart.js": "a0d3c2a6aeee5e4492e359f621443ae8",
"assets/NOTICES": "5c6ab887074e2e6395d9c356e21d7c35",
"assets/AssetManifest.bin": "09ade463da0999e4b33f34ddd0ad85a0",
"assets/assets/audio/beep.mp3": "d932c60652acf60924987457c32a3c44",
"assets/assets/img/icon_alt_256.png": "bd6165c4e82732b33679d23b246dc3cd",
"assets/assets/img/icon_512.png": "e6658edaad8bd463adf8050b66f9b8d3",
"assets/assets/img/icon_256.png": "aa6b068d8c234e6e2b2bf224af26514f",
"assets/assets/img/icon_alt.png": "faa9b076488d839068b04d2ed42592b4",
"assets/assets/img/favicon.ico": "bf7e64b98da51f59186cd7b970446126",
"assets/assets/img/icon_alt_512.png": "b9ac79da17a79fb41d380e8b5f67cb07",
"assets/assets/img/icon.png": "2ea88e6173d50e6b5c30151fa267fa3d",
"assets/assets/img/logo.png": "46acca5906c469fac1b7f47a59d56b07",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/AssetManifest.bin.json": "07c3ed6394b9d54d52de34fe7e96506a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0e4b6271a95f5e24888e0512680c2b7a",
"assets/AssetManifest.json": "97db792e869f4211c13baa8b6e5a6078",
"index.html": "acc5e1fb6f40293f6696bf9b8cde5d05",
"/": "acc5e1fb6f40293f6696bf9b8cde5d05",
"splash/img/dark-2x.png": "8bf9e65e2dd002687333dfdfc93db349",
"splash/img/dark-1x.png": "4f5022d3806bbe744b40e899063dcc33",
"splash/img/light-1x.png": "29c67e784fc0517e50ac76baca1dbd4d",
"splash/img/light-3x.png": "f6932d5d512b912045512f4315f9d2cc",
"splash/img/dark-3x.png": "a124910f476e735b99f56b128065d5c0",
"splash/img/dark-4x.png": "9d28054f90871069fe237fc21f4b0df4",
"splash/img/light-4x.png": "3ada9b986d10fb1949004f7fedd0069e",
"splash/img/light-2x.png": "cd0c6daebbdd0162e5392cc5883c8689",
"manifest.json": "b7e42b7dbfcd2b702e8c7014497680cf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
