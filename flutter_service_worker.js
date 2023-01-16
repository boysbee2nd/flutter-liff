'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8876337bbab7c3bb2c0e38a15d07d545",
".git/config": "ed1685846426401dbfdb64ebb93541e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bb0c372bc15fad4e5bc90f8e3b3fe926",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9013a2ddfc77edb9ab2b91772a0ea137",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6768813774e326986f157b19fd05fc21",
".git/logs/refs/heads/main": "6768813774e326986f157b19fd05fc21",
".git/logs/refs/remotes/origin/HEAD": "f9366eba96fe0b3d71a80fb23216a042",
".git/logs/refs/remotes/origin/main": "e7a77cdcb509ce1546958e77c4f6ff63",
".git/objects/11/a6e3cf9b82cc175e5a8f7536cfe1e3ca7719e3": "f38c9a248bd55a3086370e4c309c7f10",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1d/91dc39dddc0e22375c00b14a6a3c06179312b3": "09389003b1704ab2a658356f121af046",
".git/objects/28/84a4151edc827a781411cff7fb13741cb8d63d": "774c4e281a5709c271141eb716f29b87",
".git/objects/38/649b97a7282d9dc7ff6b81951421c095dd5d8c": "52c750fc60139f2fca70da38814c8f12",
".git/objects/4f/150cdc9bef9f8f79d432cfc531996ac1fb2db5": "6cd41c3fc766787b46aa103564e7bfe7",
".git/objects/54/1cf834ee79cdf53d793c04526d5fad87e4b997": "4a3ccb70fb52238b43d860c939ebce36",
".git/objects/55/85d2fe7b04e386258d893696fe783c6879e332": "d44c7b90e6ef34d8c515914f2d422de0",
".git/objects/86/adc2fed4da2af3bc5590c880ce9d70c880b152": "bbaa7092eea11c220fea1767c24af3e4",
".git/objects/8a/2c89f3232eb592d8842496e3254166cdb822d6": "4c3f8912f2e4324f427be968a386360d",
".git/objects/92/cebb0d5e09965edd00c2615d03c1b1d4755b9b": "6fe2da51729a7b9aa4f4a770d71eb529",
".git/objects/94/5e56a62a3aa1881f5f420c8d25823e001de8fe": "f9508c53d8d3325d5f89518edadd743f",
".git/objects/9a/8129985aa58de1cbbeffcb577f1bd25500e81a": "1d376674f7f3efa04aa549e502d50a4f",
".git/objects/9a/dd9884e61d97f0bba4d0212a3ed5b019d6e495": "9298f1b2671c7586d7c840acbb17d9f5",
".git/objects/a8/edf5b9afac3a33cfa74149d0354b1bba06a96b": "4f2a563fbf8fbd72600cd024675533e0",
".git/objects/ac/66c240ec7aec99d75b879b39bd907cb2d62fd6": "f1958ab3bbd813a9d3e5776e2eea2d09",
".git/objects/b9/7c8096fbc50bf9c4cd30cb695f045b25399b12": "2a0d363e3a76292e0281785e59d40968",
".git/objects/bd/956c0e96bc5fd992b35a609010a841a82e9a9c": "b0d0e1981fa82d27f11fbfcbdfb28831",
".git/objects/bf/d2e9f1c3bd4be0a34a6c0da4fdde4d52daf106": "548b209974c37287335c27f3fc1fb207",
".git/objects/d3/fd1149db590ce7ca968c4ebb99f1b9c4ada0a7": "5fde75092ab4cc49c044706fa8c41b7c",
".git/objects/df/3818684fb35676fefd4a2d38e13fe12299399a": "7f136be861511924d57469fe24426f4a",
".git/objects/e3/93cc5feaed7d39ee430bcb0ebeb00e4181fdf0": "79180b5629004ba75fb5cce5a7711d02",
".git/objects/f4/28809ac840a52f7e615fe5182081614f1e1c68": "8065c12d6f5526d9a7458961cf9603d5",
".git/objects/f6/e5f35e3c5f09e652286b1c67b9baa6035bde83": "56557401cff0b16eaf3da23545dc3f56",
".git/objects/fd/2925a33d66a6bbe5fdb81c240688eb3f40e507": "2f6445ff7b749a651ee0864303589e79",
".git/objects/fe/399a9d0118c56c919078ebcbcb6d5dfd5a3e0e": "c0df6ddde98dc5d7178b543a65f0c2e3",
".git/objects/pack/pack-434192ff50d308fd659db58ef7bb84e630595af4.idx": "59469a4fcf6ab1e651670b865a8da469",
".git/objects/pack/pack-434192ff50d308fd659db58ef7bb84e630595af4.pack": "34a887a7142c1b35fc52caad0f265eeb",
".git/packed-refs": "648d21eb209e1edb65c1a2fedff0b3f9",
".git/refs/heads/main": "d0dad8067f55d223c1e45e9a521adc49",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d0dad8067f55d223c1e45e9a521adc49",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9e1eb2c0678fdde0e2924973f3fdf183",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "dbfe19d0a45f70bf12efff4fe1d9360e",
"canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "26d427ae3a39e9dec61244bdcda89733",
"/": "26d427ae3a39e9dec61244bdcda89733",
"main.dart.js": "bded6f5b57865e79769d7d0358017acb",
"manifest.json": "a7329747633785db60b44f1dfa90532f",
"version.json": "f87843dc654e1e82f2467030b06ff974"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
