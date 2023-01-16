'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "162dc2fcd2b9db7050d3398959eb7afd",
".git/config": "839108b0b78648788ec8796c6d393914",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "e60621742092dcdb72c80030235efa8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6781b2db02728da68afad776f9ecdb39",
".git/logs/refs/heads/main": "6bdd5032baad620860b7a5ec53d0656e",
".git/logs/refs/remotes/origin/main": "ad3313a4ffb70db55a49830258cb05d5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/0aff7c28be7c247cc3304580bf1732aa61a6bb": "bc8e003a746e11b18e0d1dc86f55ccc7",
".git/objects/09/46471e271de48f62819f4928216019a427ff89": "4edddc0d62006e9d579746749dd2194e",
".git/objects/0f/8fade7e43e1fe7488ba4e7d617fcf9e5a275ab": "28785fe2bc0187493f21b92cded34bf0",
".git/objects/13/43447f3771ff3d219f3d564f5a794ed8257a80": "9b24ce4c8012fbbd242ddf4751f48b0c",
".git/objects/14/e24c48de0befc942b9ccc4c5a128b916c05086": "cb7198540104e59535527d3672cb49cb",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/18/b5057f24dc7be8c09442fe9274e9a488c5c3a0": "6823025c1a78bbecd88c9cbe950277c9",
".git/objects/19/a54cc241ccb741672a5886f9e1abd06134879e": "79caa71d1ec9ebdd405e702edafd92f4",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/d190a8a1c9c53178f3ec8d6ecb17f1c9d6fa87": "d61faa93fd92ecbefb0376bd262a5a88",
".git/objects/22/b200b24a0e056c76e59fb41cad1264cf26f151": "a7d0a0398fe4973638062f1f0b20c728",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/e39cd7d2abb77a98424b89b362261d80f819b1": "070fcd69a872d2494f1b479677a7936a",
".git/objects/3c/0eaacf793cb22b835b5f0db3a22c9c44554539": "8caf60e28bfc0451374fdcdf9c771c0b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/d635c8faae802af95babadc9387e47621d1b8e": "8d21cd2cddf8eff0694605c3ad18a3ed",
".git/objects/46/178dc5abb377a827cb25718b19f5aede156267": "488dee159fdae41370547e37425cbb07",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/64f58bd41f779257f115938409781dfd811acf": "87cbffb13b4a8bb2e4ac0a27fcaa3660",
".git/objects/49/d35bf7c1c918495c38424a25793952a58af346": "0863be6e67292db6f3b8a67cc1e5a155",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/c0141a8ffc9fa26cc1efa39474d03ae4c6d251": "0871d462e2c10da031e8dde1d4beef54",
".git/objects/51/9cafc0e21663233844d6893068960a875cf9f0": "dcdcae9583b995ce9066772c5e108630",
".git/objects/53/61354ff4e5aadcd0c66089003698a2e658c758": "f0903d6c8302829fd3609117b05f7902",
".git/objects/57/079a9542e06dd2546d6983b9c86564d1932ffd": "20b7842a411307abe11b1eafcc5807df",
".git/objects/57/7d3d3302afb20f6daa4444267d3ae25534e467": "94165ac0403d2e4b488bafc928af7422",
".git/objects/6c/548f034e7a68147a191bebf2ed4e6e5499beb8": "377ba0d9980e9e46280431a217924c6d",
".git/objects/6c/80bd994b4cf16033229fc9990fc5d8b4f42ad5": "95154febbf7eb3b59ddc55e81acbd9c9",
".git/objects/6e/4d461e3468d466d353d7b6e6b55bc5b474a995": "f4635bb47ddb49542863badf3a4534f8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/8d851b6d250aa6c90d791b1b85f0e7e4308832": "f38c7a5e51e4beee8b705208b475ee09",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0e64149762885a5e3aecfcff0cab2524dfd2e8": "992b2c26a54981b6e0f2c613e2c02279",
".git/objects/93/6698e8ddcc70ef20717268f422282b8d8f8965": "803893faa4dae4c8288b9825bd6d12df",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/03ab55e207109df7e9222e6a91b8993bd279a7": "df790dfddfb6a1f6b17e1dd25978a110",
".git/objects/9b/9c19db952cd25175dca5306401c92e9bf9b0f1": "27c081aeeeeb9d6c023c615396f42f31",
".git/objects/9c/a2491e31f977391414f6c27cc5563c8d413770": "59c56c50e2e477da07e2175c18d2a2bc",
".git/objects/9e/2693004442be644a34d77badad4b643f384899": "d08b02f4d1161f1fcdbff70b861d96bf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/eb5f3de192eb9611ae3184bed37610d6c1e26d": "85f57cb59f2777a1383faecf13ef2512",
".git/objects/a6/900c771aec4fbae2f25a17fd449c62db8a3f41": "892537388759fdc8153202d1e9026614",
".git/objects/aa/8e1031ab1b1613badc6d9cbbf0629c1bd37d28": "e03ab7bf51531ebc5e03db3045e072d0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/752510870cd5f54c827d8735751def1c0ba2c6": "ca57dcc2b57c19ee20e0a70eae87fcfc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/4297b32e3bf13f000d3f9fd7681b20690fbf82": "b8a23a816dec20b29aff3c606060ad44",
".git/objects/c0/43dffa9aa24bbfff90b5176314650a3d5094d7": "f790a62f92ae4e69ace7295872fb96eb",
".git/objects/c3/914c6f5d6d8bf86e933972a86ef0c279694e28": "f8b34334bb0f6df37b97ad82837bae5e",
".git/objects/c6/7a609649a03a8de39025397f1e8b10d8f7061f": "c26acc51634ae169b247126aada62356",
".git/objects/cb/fae2f3ec664ef885cd7dbb621235a772e48c02": "905f853ad75cee41b5cd79b29873e9b1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/9371045ea42d498a0f5b6cb0bce1512ea367f9": "2f7254d21a48b71616768dc071c1a4eb",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/5665fecdd906937eacd0cb69dcf21fd7e662d2": "5a6c1c6e4d895d946b72295c1442cdeb",
".git/objects/cd/f5c5f928b6a8ff519dfc507ca803f0c74e7b1c": "48a0c3623c05071264cc53d22c77a9d5",
".git/objects/d1/0540673f807df067c0ff374bcb4ed1a9720b8a": "e7786bcea6d1004d4f28aa88e5c13e6f",
".git/objects/d5/6e9dbf1fbdd87f7f85290c5efb0fb54521c1d8": "ee83818eedd1a4b217e36e5395a51438",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/6d588e8c34e6052fba815922b65c0c96b2ee95": "438a4297fcd02af5ab26bbb1e3cf011f",
".git/objects/da/e86e3c02ab41806ccef9ac0c0042951ef7ea6e": "e9d45f40953fb6b1b41277c00eff9b3a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/e6578965887677dd28ab0fd42224f0f60bf2a6": "58958c8faf637f5e63f148772794d9d9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c6c426cbc479079d4334bdd1e0bbb5c2e0c3eb": "631027363704e5dea5f1552fd1659349",
".git/objects/f1/6400f9dfe72084a8ac60e4ddf840f7344b3ebf": "3496cb47227b010d5dca6f0615ad180f",
".git/objects/f1/7a64143d7a4718e26bc99a8c156dbd8bd2e5a0": "fb31f7b12b9c8d85d1a5f746a86c3a52",
".git/objects/f2/36898587ed827acda0d6ab6a53d52dbc2667f9": "83225625debb8d08ffc614a09d4ea5b5",
".git/objects/f3/1ec53ccb43ba8b9846368563434a7b99052198": "1fc28ac44bd5188c187618d6ecab74e5",
".git/objects/fa/3aa6618fac6de3f5044de4f4552d2e6182820c": "a873d0df9b2cf9f66de76d8d53704efc",
".git/objects/fd/23682be92b06d6526c80012d7d47834dc89be8": "31c92d50525e5ef2cbbda85154f3fbd7",
".git/refs/heads/main": "29f3ca42ce355ff62bb9d17fd82675d8",
".git/refs/remotes/origin/main": "59368f697279191efe0a45b50a7c07cf",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9e1eb2c0678fdde0e2924973f3fdf183",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "dbfe19d0a45f70bf12efff4fe1d9360e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f41f99857bc57194dc445a346fbb97de",
"/": "f41f99857bc57194dc445a346fbb97de",
"main.dart.js": "4530f0100ee9432caea01703a82b6029",
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
