'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f9ac189d9f4e56a38b1d799b4c58429b",
".git/config": "ed1685846426401dbfdb64ebb93541e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d65d11ee5a58537782d7bfc5474d5f6d",
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
".git/index": "dcc83a097056b5e08c43d3b906f6d85b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65132aac57ae5a359efebd0180b45b17",
".git/logs/refs/heads/main": "65132aac57ae5a359efebd0180b45b17",
".git/logs/refs/remotes/origin/HEAD": "d45bf86c94b805a235d00cc917742da0",
".git/logs/refs/remotes/origin/main": "0da6a0be823b97c1549dacb7bc415cb3",
".git/objects/11/a6e3cf9b82cc175e5a8f7536cfe1e3ca7719e3": "f38c9a248bd55a3086370e4c309c7f10",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1d/7011756c53682a4220cf42f70d50aae96fe81f": "b922fcd78ab8c4193634740543a51470",
".git/objects/1d/91dc39dddc0e22375c00b14a6a3c06179312b3": "09389003b1704ab2a658356f121af046",
".git/objects/27/af57d71c2f75540c584f686f60ce45fff6fb3d": "c307df816e933eab37d2a7ce5520c340",
".git/objects/28/84a4151edc827a781411cff7fb13741cb8d63d": "774c4e281a5709c271141eb716f29b87",
".git/objects/33/7895306d652daf23188e39d4c2ebdf4902a671": "e60c7bc41b8e37e9e5e7a97bad0fdd32",
".git/objects/38/649b97a7282d9dc7ff6b81951421c095dd5d8c": "52c750fc60139f2fca70da38814c8f12",
".git/objects/3d/a282510d6f694f417a55f6a5e4cca8d16e1d68": "b2dccbc5e1852616e0f6a1e3758d0c7b",
".git/objects/47/34f1642ff9f5b2e3d36853344ca96aa8446d42": "b6f907423e5597d55b0c42645b852fa8",
".git/objects/4f/150cdc9bef9f8f79d432cfc531996ac1fb2db5": "6cd41c3fc766787b46aa103564e7bfe7",
".git/objects/52/a520bee4bf8cfd06a56e8e325f40779789f89b": "45a0df7964dffc0c793aa531403a73d3",
".git/objects/52/b3276f2d21b6cb1bf12e3d3c1ffe6d07b39b34": "cbc11d431ce48abe65e424b1fc543ef6",
".git/objects/54/1cf834ee79cdf53d793c04526d5fad87e4b997": "4a3ccb70fb52238b43d860c939ebce36",
".git/objects/55/85d2fe7b04e386258d893696fe783c6879e332": "d44c7b90e6ef34d8c515914f2d422de0",
".git/objects/60/2f573f18d68650418b4a7d3a2ad23f2e1a4c6a": "e359ba05412e212ef157c61f9d8a67e1",
".git/objects/6e/09e20f9a5fc689c29d3fc24b14547a51213210": "6504319b599f10f1307f3af8522257a0",
".git/objects/80/91cafde2e50f0aca3564f54697a0f1d327489a": "839005b9cbcf77a82a1d7e0309f6f7ce",
".git/objects/86/adc2fed4da2af3bc5590c880ce9d70c880b152": "bbaa7092eea11c220fea1767c24af3e4",
".git/objects/8a/2c89f3232eb592d8842496e3254166cdb822d6": "4c3f8912f2e4324f427be968a386360d",
".git/objects/8f/3f3cc7a1f2cf9dc219c27b430a913f55a11390": "b32eb314aff3f2478e69f2bc5c38e838",
".git/objects/92/cebb0d5e09965edd00c2615d03c1b1d4755b9b": "6fe2da51729a7b9aa4f4a770d71eb529",
".git/objects/94/5e56a62a3aa1881f5f420c8d25823e001de8fe": "f9508c53d8d3325d5f89518edadd743f",
".git/objects/9a/8129985aa58de1cbbeffcb577f1bd25500e81a": "1d376674f7f3efa04aa549e502d50a4f",
".git/objects/9a/dd9884e61d97f0bba4d0212a3ed5b019d6e495": "9298f1b2671c7586d7c840acbb17d9f5",
".git/objects/a8/edf5b9afac3a33cfa74149d0354b1bba06a96b": "4f2a563fbf8fbd72600cd024675533e0",
".git/objects/ac/18db8a6f144bfa864dceb9514d0498bb29017d": "b5097fc840426d38698a97916db87ba2",
".git/objects/ac/66c240ec7aec99d75b879b39bd907cb2d62fd6": "f1958ab3bbd813a9d3e5776e2eea2d09",
".git/objects/af/dcd3d92d6a993f8317dd3eba941bbcd2a22d5e": "aa77207e996a00032f6bd6c04c989ad8",
".git/objects/b1/686e954108adb6f27edfdd1c9f5c8e81895e1d": "94851750d70611aedd4ba63d286f9d60",
".git/objects/b9/7c8096fbc50bf9c4cd30cb695f045b25399b12": "2a0d363e3a76292e0281785e59d40968",
".git/objects/bd/956c0e96bc5fd992b35a609010a841a82e9a9c": "b0d0e1981fa82d27f11fbfcbdfb28831",
".git/objects/bf/d2e9f1c3bd4be0a34a6c0da4fdde4d52daf106": "548b209974c37287335c27f3fc1fb207",
".git/objects/c2/36129fa9d9e77c2698e69b65eafa45a4a24cfc": "89130d6749ae514a6adaa90d5d34c9cd",
".git/objects/d1/77a91923c13d22173c5c03a21fac6b773dd34e": "5c865816e75652a786fd8b2aba9e164a",
".git/objects/d3/fd1149db590ce7ca968c4ebb99f1b9c4ada0a7": "5fde75092ab4cc49c044706fa8c41b7c",
".git/objects/d5/7f5f4263092dfa44b8515411f1926d52c9ac50": "dafd687d0210ae9df4757e6b42d58ce8",
".git/objects/d9/5f7a941d1216ba9092cc8a721cb91db7d8e97e": "bf4894058b6a91e2ba1babbd7ed90a2e",
".git/objects/da/1a2ecc9c0be6a052f25ac8df0d2d0f807b7fe8": "38a66c62b905cc689c34ef86358cb469",
".git/objects/df/3818684fb35676fefd4a2d38e13fe12299399a": "7f136be861511924d57469fe24426f4a",
".git/objects/e3/93cc5feaed7d39ee430bcb0ebeb00e4181fdf0": "79180b5629004ba75fb5cce5a7711d02",
".git/objects/ef/d8b2eaad9d0ac020a73953a423cc5cc347216e": "99e28d4ea2e82758a78b96fb84d0d985",
".git/objects/f4/28809ac840a52f7e615fe5182081614f1e1c68": "8065c12d6f5526d9a7458961cf9603d5",
".git/objects/f6/e5f35e3c5f09e652286b1c67b9baa6035bde83": "56557401cff0b16eaf3da23545dc3f56",
".git/objects/fd/2925a33d66a6bbe5fdb81c240688eb3f40e507": "2f6445ff7b749a651ee0864303589e79",
".git/objects/fe/399a9d0118c56c919078ebcbcb6d5dfd5a3e0e": "c0df6ddde98dc5d7178b543a65f0c2e3",
".git/objects/pack/pack-434192ff50d308fd659db58ef7bb84e630595af4.idx": "59469a4fcf6ab1e651670b865a8da469",
".git/objects/pack/pack-434192ff50d308fd659db58ef7bb84e630595af4.pack": "34a887a7142c1b35fc52caad0f265eeb",
".git/packed-refs": "648d21eb209e1edb65c1a2fedff0b3f9",
".git/refs/heads/main": "5d40e51227d09adfecec82eac459921b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5d40e51227d09adfecec82eac459921b",
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
"index.html": "0d423a0839939bf6440c793d641d68a6",
"/": "0d423a0839939bf6440c793d641d68a6",
"main.dart.js": "b2e3316e6352277c94ce942531a0ac47",
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
