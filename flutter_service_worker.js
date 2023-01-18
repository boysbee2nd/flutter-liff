'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4ea9a7f6d262643592d2e684a145aa23",
".git/config": "ed1685846426401dbfdb64ebb93541e8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f1eba784ffe7d88f05cb014d35a12c9",
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
".git/index": "01a2039d3d17960a6382fbc6272a4178",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a66ca19d7b789dad9c7b2e266acad736",
".git/logs/refs/heads/main": "a66ca19d7b789dad9c7b2e266acad736",
".git/logs/refs/remotes/origin/HEAD": "9c3c42e2aab1852a3664012c3bf0fc9f",
".git/logs/refs/remotes/origin/main": "51cf85c549f33ceb2165e476f9335e6e",
".git/objects/01/a4be24590aa02991b551d10e73392fd036980d": "aac96f698b8a27865cead06e0b71d4c0",
".git/objects/02/40c0aa0f4aede900ab78434f20dcf7ce84b10a": "c61916d49f1757c400252c945b1fb91b",
".git/objects/09/987381c6e30f8d9f144d4a4b46585b7d849397": "9d6dc646ca459e20785cf8a9212d1563",
".git/objects/0b/cc09cf16e0b29be02acd0e5c5aa1b53b7355fc": "12c22029f79f6c1fb95311b5941a0cce",
".git/objects/0c/0fb897722deccd9aab0e73fb3b971227cce7fc": "7c6b2a8f0c255896b9ca16537d39e1a2",
".git/objects/0c/147fc7f64e3e11a006284dbb4c614e11e37881": "f96c7291c40361c20c56ba67522f420c",
".git/objects/0c/84e8ced016ee8b3d1a288270ca5b6445b1188a": "4a21f13b367aa46f501e8d443a832fe9",
".git/objects/0c/addfca7bbb90106654e1eab603fddc60a6e1bb": "bd19a1fe8a17ea062bf20c04b8173af1",
".git/objects/0e/556ae12a9c9b0bb6af86d239ca33756df3bfe0": "b42ac4c99345d9d9d2a55644c959fd4f",
".git/objects/0e/8a7cc648121be41bcdcc4da71116d56616557a": "a8927df312a44ed3e051c7c6f66b4a5d",
".git/objects/10/ed6b0eef9e81ac40a375978492be45a3100e2c": "f9ba5b85fcc60b5c339a435ad41a31b8",
".git/objects/11/0db1be3893c4d79a5b3523037b9c91f09f2fae": "9a0fe5b9ea729ebbb27549a0357d85f1",
".git/objects/11/a6e3cf9b82cc175e5a8f7536cfe1e3ca7719e3": "f38c9a248bd55a3086370e4c309c7f10",
".git/objects/15/f9650b83c75b885c1998ee4fb8c1b7280d4145": "f1f807445b42aa34762001c066dec51c",
".git/objects/17/9565549c0550650ce0851b3e4d7739a9f9bd2a": "b4a2b0aab2065455801dd6f2665217a1",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/19/de25aca29a4aadeb7e051f09678bcdd73f946b": "cbc3271b8516f184f95bc2626ff40a05",
".git/objects/19/f03ecbcaf1a9df8c53c1a8af112a0874e52dd5": "ba074e6ce33ef12d762a823b9e903163",
".git/objects/1d/3cefeca73dbee7019835939243a2d0a53e3b00": "294bc64994e9b7cfcc48906498110148",
".git/objects/1d/7011756c53682a4220cf42f70d50aae96fe81f": "b922fcd78ab8c4193634740543a51470",
".git/objects/1d/91dc39dddc0e22375c00b14a6a3c06179312b3": "09389003b1704ab2a658356f121af046",
".git/objects/20/a81648b3ddb753cc311a35a8f6a19a58abf386": "efd1e3248ad3ef3e1bdc29b59222f0af",
".git/objects/21/e3661304d4c25107f8e39d2e74845ff380c753": "07b6ea0cc9039c3949f8f6df8b53069a",
".git/objects/22/9e6ed941fdd1ba18e063650c6eee546bd03a5e": "9fe1145ab1c062b14ce4c950f2408f2f",
".git/objects/25/5d3b4bd06f94da9d0a5958c86402131ca8980a": "96d0b8a39f9f2e4ca4fe88bc7936e6f2",
".git/objects/27/186d027a439bdaf89fa68b4d6cf4f97be51087": "744453f745877e953829c9b238859324",
".git/objects/27/af57d71c2f75540c584f686f60ce45fff6fb3d": "c307df816e933eab37d2a7ce5520c340",
".git/objects/28/84a4151edc827a781411cff7fb13741cb8d63d": "774c4e281a5709c271141eb716f29b87",
".git/objects/28/d584bbb24b45a1781e9fa16e02e5e5905f34be": "ecdfd5ce6cf2b92f1321f3b535f0b1fa",
".git/objects/2d/f7c1b01723f41935528f81365801440a8b5eb2": "c3d7955010f95c9e6f72c262a6e3f33b",
".git/objects/2f/08f96bbdee08bdcd848c93d557471fd110b30e": "08a60468d9c43db457ab8b965cb78c77",
".git/objects/2f/a724cc7166848db1b20a2b76bd3e30a33c7eef": "0289fac607a87dc8115a5529b26c3f6d",
".git/objects/31/2f1ffbb5434a49c831bf8a9c5aa769e52f6595": "46302e1491d26e21c69be5d3c157c5e0",
".git/objects/32/247f253a66cb23157916c34a57e8cd3865c995": "f4d2ad26514a961c5c71beb62ae8d15f",
".git/objects/33/7895306d652daf23188e39d4c2ebdf4902a671": "e60c7bc41b8e37e9e5e7a97bad0fdd32",
".git/objects/35/19d9a1c877811e2339976adc49190f88ec9769": "76e5fc02c3b3e25bd0958d0616060d75",
".git/objects/37/aec94938b2ade3661ae31a464b8c524c81a1d5": "64c026be68bd067c75881d92b22961c1",
".git/objects/38/649b97a7282d9dc7ff6b81951421c095dd5d8c": "52c750fc60139f2fca70da38814c8f12",
".git/objects/39/0194c223773a0fb9c8a75954a003683a081717": "468686bc4c75299dbb92a792017314fb",
".git/objects/3b/b9cb477e0076963da6bd64f1188c5728f66d94": "4147f7bb2c956788eb9ac6af45b68742",
".git/objects/3d/3f0550590c6f88530123e373cf8c43ccbfdb05": "aac02afab4e5ac92a78d89dc6dd80974",
".git/objects/3d/a282510d6f694f417a55f6a5e4cca8d16e1d68": "b2dccbc5e1852616e0f6a1e3758d0c7b",
".git/objects/3e/4f2db64fe05c569d6bbfd18cd35e2bf6eaac6c": "554823367ad3a11c81aa47f35e0715c8",
".git/objects/3e/61372e212614b98e3c4726d48d1489e382dbc9": "d32b1bc0782dcf1031bb6660b45ec88e",
".git/objects/3e/ee5a6f0db403a0583f65dbcebc47f9119f5ca4": "5d8e181f1c76a6e2db9472160ab56c99",
".git/objects/3f/ef6d09b33c19f8323214bf8b66fe4701686ee8": "0c2237d8b3d610eee43bd4fca1c493b3",
".git/objects/40/59bf26f744cdebb39759d51ed5d2bfdb771873": "eac7ab86fea36dc07aac35cc32e9cda3",
".git/objects/40/a79debf1a5332613fe01f8e4c3ba31d3989bc5": "9678740e9f9b48c2d161df88e94d55e6",
".git/objects/45/e41c3e298bafcf2c4481973b171353317b4310": "2ded9d0e52aecfb952b19da80b59008e",
".git/objects/47/34f1642ff9f5b2e3d36853344ca96aa8446d42": "b6f907423e5597d55b0c42645b852fa8",
".git/objects/48/835ad97a72048796a15ee78b3e35549c9473c1": "ee3d3da5c200cb2cfcf33f5db8784b1d",
".git/objects/49/0c3d5a8e37084d02570dd67b0dd474ed767911": "5845c8e60b31f609a2f4a73b8f585852",
".git/objects/49/f6a9f208edea1dbb8ab2efa529457c48f69e5f": "3461d444431888ee1fbcadba665d1249",
".git/objects/4a/41e63afb76c2e97ecbd2595f59fa9f3285c17e": "d04f9d06a6f92b360444b48757c81371",
".git/objects/4d/455cc7aafca8c4ce852aaac107beb13ffaff01": "2d73c683e97cf5e9a6e6c1906881c47c",
".git/objects/4f/150cdc9bef9f8f79d432cfc531996ac1fb2db5": "6cd41c3fc766787b46aa103564e7bfe7",
".git/objects/52/a520bee4bf8cfd06a56e8e325f40779789f89b": "45a0df7964dffc0c793aa531403a73d3",
".git/objects/52/b3276f2d21b6cb1bf12e3d3c1ffe6d07b39b34": "cbc11d431ce48abe65e424b1fc543ef6",
".git/objects/53/d015d1b849f5736c868f472dd5c34e6b5ed22f": "8496e9100e8efb58fc59cf79cd431962",
".git/objects/54/1cf834ee79cdf53d793c04526d5fad87e4b997": "4a3ccb70fb52238b43d860c939ebce36",
".git/objects/55/85d2fe7b04e386258d893696fe783c6879e332": "d44c7b90e6ef34d8c515914f2d422de0",
".git/objects/58/a3c93e5fa202503f74c93df447ceb4aff4e386": "0bcd28f0cb947ce0956338c359182b3d",
".git/objects/5a/7ec08a484014dd7131649fa36c88bef159ba09": "4f8df70c69354dc5098ccad1d68657f1",
".git/objects/5f/3d3520a50ca292bf01c2fdc69d1f4f7aa9c57e": "3162ae6d0e20ebbeeea28a6e35b2c195",
".git/objects/60/2f573f18d68650418b4a7d3a2ad23f2e1a4c6a": "e359ba05412e212ef157c61f9d8a67e1",
".git/objects/62/2cddbcfe6857f9060995ae736d4333617640e3": "e822692dab75c911d901c1a311ae5ef4",
".git/objects/62/ef99e6cd30285aa8f7e8bc52709d2ed34ab615": "7a7d7ca943bdc51cc45d0f384b7c285d",
".git/objects/63/dee4d65828f09bdd26d466d5a69a3947449352": "199f7155531a9bec730cc75e5729f9a8",
".git/objects/64/fcb8aa93aa3e60b1a3bb9fbbb8f1eb43878b70": "7110af377aebd713ff046b895ba4dc7c",
".git/objects/66/80ad3101aea23186fbd4a194aea310c2b7c967": "fcd5c2f783edfe25ad1e926cd002bc5b",
".git/objects/67/ad35eae8253cfa89965b7c5cc16efb35ace1cb": "32e065f44aa4ba1221c05380164c1fc3",
".git/objects/68/fef6a1df03d62a35c266d775a8065e1da0bb6f": "4a87745ca69d9dc9d9c1c21eb1a8a97b",
".git/objects/6b/4c74aca2430041d036d2bca24c3ddc769fc1e0": "7111b590b5d9a6826821e71a97524c6f",
".git/objects/6e/09e20f9a5fc689c29d3fc24b14547a51213210": "6504319b599f10f1307f3af8522257a0",
".git/objects/73/075d0f6c3430cb3daf00308dc79bc17b400739": "ba72ef5d472865fe0a8f8b75fff59884",
".git/objects/73/adde8965cd9238d85299bacb8ee012f74683e1": "5a03decd8f2875d78d931c404ab5b754",
".git/objects/74/c7d4d2a9ccd51870e49be3b42af9ba7343ca33": "77beee17e5b4d92343001b334f5d4427",
".git/objects/74/d696ad7f23aed7ccdcb59b03cd8e1b9665ddc5": "328dabaa1b43449588ca6064eceb1c01",
".git/objects/75/4d3804f000734088f9e7bf329a37660b362772": "430234d55426a3ba68587c1ee3fc592a",
".git/objects/76/07f494471208d64cfea9a58f8ea87efbb7cda3": "7bd92cc8d56083a570cfe6dcbd72e791",
".git/objects/76/7855d1f2a02c4ff27bd7f8d3a7187cda0b8a76": "98c9b7c16841d3b26574365e9a3e2e25",
".git/objects/7c/857c2679a8479999b34c78b55bb07f2a07c113": "b30b821c59844ee1de6bd0c942447a26",
".git/objects/7e/58c8e9c7af34124afff931123ab72a560a85b6": "b809bd309029f9abecd9bc7cd47ba70f",
".git/objects/7f/8c198ca41ea621676b15d88638a5657f985923": "1f165668740305200c6f3a632a7b348e",
".git/objects/7f/da7c801a244564296916d1451dc98a4b1f30af": "c5ea788d5801504d11d73dff2ea6791c",
".git/objects/80/096a344dd49dd64de1f3b03cd0d4d83792d873": "81547c936dd5c6db4b93a7cfe9163b15",
".git/objects/80/40111902552e000267bb69f047c701b6ecab09": "f286d15e38a7cec66efccc576d8ae449",
".git/objects/80/91cafde2e50f0aca3564f54697a0f1d327489a": "839005b9cbcf77a82a1d7e0309f6f7ce",
".git/objects/81/2b053d1d719ef8191ffce69e673627dcf46ce3": "ec310eef745f105fb9695e98153712c9",
".git/objects/84/123e43f76679774e49b8536158ff75280f33b3": "ab3caee5469dff5c3a3b93a5ac44ebd5",
".git/objects/85/2fe0024dea58a339558fe5aa358e2300d63348": "dcd9627f39a2c76a4cd392ab78c3a533",
".git/objects/86/adc2fed4da2af3bc5590c880ce9d70c880b152": "bbaa7092eea11c220fea1767c24af3e4",
".git/objects/89/ff4b40c1603ffbbd86aaa5d725a3951f3e4060": "cdf34540c7af75bd06bea4591df85abc",
".git/objects/8a/2c89f3232eb592d8842496e3254166cdb822d6": "4c3f8912f2e4324f427be968a386360d",
".git/objects/8a/c7801ff82cc617f22a044c4cc1809c13262ecc": "e7bc7b23b406f4c04c381fe2d4a89ac5",
".git/objects/8a/d7645209a65b50824c7c8d057a8891714ba563": "0e4b19ad30f77c997b5066c12ae81bdb",
".git/objects/8b/1920477f0d2878793c6e1cbd2c3463b23c1951": "c70b9b6bd741ca63b0bf13a0c43635e7",
".git/objects/8f/3f3cc7a1f2cf9dc219c27b430a913f55a11390": "b32eb314aff3f2478e69f2bc5c38e838",
".git/objects/90/080701ece51d31bb9eef9e21522cb70a4542bc": "05f8803c735007f6376bc74a6a608cfb",
".git/objects/92/cebb0d5e09965edd00c2615d03c1b1d4755b9b": "6fe2da51729a7b9aa4f4a770d71eb529",
".git/objects/93/80c4596c123bf278e108505dba23c70f3d2ead": "d68446e65efde23fd74bbced0d0d4aba",
".git/objects/94/5e56a62a3aa1881f5f420c8d25823e001de8fe": "f9508c53d8d3325d5f89518edadd743f",
".git/objects/98/29b8fa7a2206e147490c7d2d35ac30ee15d817": "dbefb74cf94d7477abd59f75022aed7d",
".git/objects/98/5d4ebf93feba60b43cb8e16f73275d2944087b": "cad98fc14a89fbd2b0fd60d29c5d6c74",
".git/objects/99/053d66c578097d277dd913d8d0bf757eddfb01": "1e99805ef323d7cb9f3e4c336fbcf070",
".git/objects/9a/8129985aa58de1cbbeffcb577f1bd25500e81a": "1d376674f7f3efa04aa549e502d50a4f",
".git/objects/9a/9b5236cdd2cadc152c882b505677ea77b218fb": "af789db66ab830bd500520641b76f7f9",
".git/objects/9a/dd9884e61d97f0bba4d0212a3ed5b019d6e495": "9298f1b2671c7586d7c840acbb17d9f5",
".git/objects/9b/4b1e2163cf5df114d5f71a6e57540d22d01dd7": "d959e0a4d5a026a7c2d1c861a515fb16",
".git/objects/9b/5503223c1a1ca6137f7d6d4e68bac54458f926": "2ee47581ccd73be2bb87ffef57b7b7c4",
".git/objects/9c/0ef6d3716266a3d8b48d60d2800f92155cbd18": "45323c07ef070d3778532eecfcd6bc16",
".git/objects/9c/139ea7179830d67044cd10749f8d045e6788a8": "9ac6bd0d75302c8314446086a7a3f8a7",
".git/objects/9e/6bf4a3fd65fcc9266c4a14956e0f4012d45774": "12c73cbbb49e9549cc5a6a72789a7e30",
".git/objects/a0/b77e608cb36adc1eb9ddf50040a5af51840844": "c6f3cdd0c9733a014adc69c7e7d5efca",
".git/objects/a2/51eb5326490d71c8b8a2c84a24a094dcb04518": "9ab1b43a9c467dc08087c49390f81266",
".git/objects/a2/54275fb39e30d914bcc4a267079b9a798e0844": "b83c4232a8c4ad48f4c87b220f79e534",
".git/objects/a3/b77f4ad0ed69ce16cc677e9e542108b27c9bd1": "8f47a7a51108e2e1aec4e532d4d08491",
".git/objects/a5/34f1c771c51f4fee5a23a27e0f5d34e4ed350d": "0392c3a96702e4376813f2f9f0c88898",
".git/objects/a5/3a55f95810e48014332e8cc291b22b7881cff6": "af0e0f9e4f4b11c78958f9215d63cbf6",
".git/objects/a8/edf5b9afac3a33cfa74149d0354b1bba06a96b": "4f2a563fbf8fbd72600cd024675533e0",
".git/objects/a9/45987d74ba39bb2ce276d066a71186f59b6755": "b2872d3d8f06576561e069d175cc26b8",
".git/objects/aa/eee0c3fb4a05ef3c8d87c04d1dfb66c5ceab69": "25a7334afc99913b897cc675ed305ef9",
".git/objects/ac/0830aa574e5be8ff9b0548435000ab62d64622": "57b61a0c7d9e9681f7771a93253ef693",
".git/objects/ac/18db8a6f144bfa864dceb9514d0498bb29017d": "b5097fc840426d38698a97916db87ba2",
".git/objects/ac/66c240ec7aec99d75b879b39bd907cb2d62fd6": "f1958ab3bbd813a9d3e5776e2eea2d09",
".git/objects/ac/a7c16bd7bfc061e7972c262e7bda0ed6fe6db5": "8b2208437911dddc65b5cb295dccec81",
".git/objects/ad/401a274583f39dafb18f4a68f4910f4c753625": "1f274d217b144ac8419a9459beba1205",
".git/objects/ae/76d672a027779f6bc46e0e3c2e4b3006cd35b3": "f84c1d72950bb04a6c2d935bbe30d107",
".git/objects/af/dcd3d92d6a993f8317dd3eba941bbcd2a22d5e": "aa77207e996a00032f6bd6c04c989ad8",
".git/objects/b1/686e954108adb6f27edfdd1c9f5c8e81895e1d": "94851750d70611aedd4ba63d286f9d60",
".git/objects/b4/ba34171295cca41dbf3741dc8135f3db9fea4d": "7fc1b8ce681cbf8e46b92b175a3fc45e",
".git/objects/b5/53eaf1ec6c2f0cc361e5e6180d1e051b11cb3b": "63dea12517135753b3660d9e3011b9d6",
".git/objects/b5/a5e1aee2edc44463843e5a339b1732dacfe270": "0aded1c5573e5354424c2eec9ec98dfb",
".git/objects/b7/feca9e85fed995a2ecb888ff884d9d55219e75": "519bbb156c980c677db7b99aa344d825",
".git/objects/b8/97736817aa2eeb2b6a8bb46b2eec61b21099ef": "a75b398b6062f4d521ccfbbb592bbbd0",
".git/objects/b8/d5f120bdda4c93df845de20461d735d2443acd": "0b9beb38a0d34bb603dde22a82688f8b",
".git/objects/b9/1507fd6f2cc1b0b23f8bef17c756626b81341b": "f1f2e0ba8f4f60ff688c0800c9dee46f",
".git/objects/b9/51756c6a71b8297d656f87e1df5a408e42ab3f": "e76ec520ca15041277a3c62e81b9824b",
".git/objects/b9/7c8096fbc50bf9c4cd30cb695f045b25399b12": "2a0d363e3a76292e0281785e59d40968",
".git/objects/b9/fed7110481e2f52bbbc0e0efabcf98711c0331": "809c7bc536f20beab5b097320b99fc7c",
".git/objects/ba/d65879a4b70cf4e285d8f657de976bb3da4792": "d008f28b9dd654b430a6465f81ae40b2",
".git/objects/bb/b2e7cf7c10bd60bdccfcc2827da7f2df90a8ed": "7faa821a1370cac86e40f5cdd4cd0623",
".git/objects/bd/956c0e96bc5fd992b35a609010a841a82e9a9c": "b0d0e1981fa82d27f11fbfcbdfb28831",
".git/objects/be/6a761d81253a046cb8988a80a2d7babc9b9eda": "597aee4587453a094b0ee663423bbad0",
".git/objects/bf/4b2025c752730ceed1c8e0ddaf5f47c27bfc5b": "621deef401eab933aa3f61257c894e8e",
".git/objects/bf/d2e9f1c3bd4be0a34a6c0da4fdde4d52daf106": "548b209974c37287335c27f3fc1fb207",
".git/objects/c0/853fefb193416befa1d1bf3e88ccc013f1bc6e": "edda293781f49bd715c7bf24974899e0",
".git/objects/c0/9b33d7b5c310f2af14060885642674c5ed3e29": "a9657584df5306b11cbcb24bd0843982",
".git/objects/c1/5d968e89003be922e16d5f107855991e63944e": "25c494d0832e29b0bb8a8b7cd287f9f4",
".git/objects/c1/f1bf94cb0ba57e3de350b3f3a6298b4357ede6": "6caee0b9a2ca0633d79c5287389b1f79",
".git/objects/c2/310bfdf2b4a5708fe943cabec95def8ca24b4b": "94975e2ffbcd3d34f34e14d31ea4f4aa",
".git/objects/c2/36129fa9d9e77c2698e69b65eafa45a4a24cfc": "89130d6749ae514a6adaa90d5d34c9cd",
".git/objects/c4/123aba91b0f233d6c7c10beffebecdc5c37324": "3abe70ab422cd067ba938d6ea1d31aeb",
".git/objects/c4/e3a782063d5616bf0e0a2c268f6c7aa7c9eb29": "7d325b42ff5c6a3a00309e441a59238c",
".git/objects/c7/5d90855a424885b71bb4a29cc05f0c3e003fcf": "f3ac7c3692f0d29a4c9f82d12e748061",
".git/objects/cc/9807a230df924f73351f5c812b442566623a92": "d52e59792e689ca15826915a1a15bd8a",
".git/objects/cd/2f27503842e4a87f46ae42923718ef8d76b4cc": "e9952b1c29db332e3bb456c4b28549b9",
".git/objects/ce/794170312eb15e60ccfb09e7e3adcc1e5bee90": "71139fa07eb361b376b5789d6445f3d0",
".git/objects/cf/7a0f134b5121113bcf04797c255cd7e21ed3d7": "61d11215f7f074ef58b5bebd45885f1c",
".git/objects/d0/0dbc7995b9adf81733a12d1a595d9721a0fcec": "6463b451abfe174da9418cc436641399",
".git/objects/d1/6e64287796e7bb27b61960a4b4552c28e96431": "d97063dd1efe540570e6124c1ff5b009",
".git/objects/d1/77a91923c13d22173c5c03a21fac6b773dd34e": "5c865816e75652a786fd8b2aba9e164a",
".git/objects/d2/3060f4a29ced1e811cc0e0a61a7e939de5d4fb": "2d778a121181daba035e4934a5f36def",
".git/objects/d2/e3b1d9647422dff72bde59fabe4e60074643f9": "4cc23c49a0dc55aa68d70edc93171b31",
".git/objects/d2/e6de4e314f17b9084e2ebe68a33854a927d1e2": "e1bbcf7c18be0db84b9e3e92d2459ce4",
".git/objects/d3/fd1149db590ce7ca968c4ebb99f1b9c4ada0a7": "5fde75092ab4cc49c044706fa8c41b7c",
".git/objects/d4/fa9dd3212ebcb9dba5c9c0d3041684159e6c6f": "d9c440371d05ff15b99bbb46ed62452e",
".git/objects/d5/7f5f4263092dfa44b8515411f1926d52c9ac50": "dafd687d0210ae9df4757e6b42d58ce8",
".git/objects/d6/7336db53070c5ab3d41df7f73247906a71ed52": "d354230d12d297456df311cc042a0bec",
".git/objects/d6/8024623dcb66a89ac670548842759933dffde1": "c95ea2dfece2551e088509596505633d",
".git/objects/d7/2b425e509f1442323cbdb97ec6d87a6768226c": "f1f325253e553d57efe26a07db0106e6",
".git/objects/d7/49234bb32d9c9ae345d7b31e721bec8e78fefb": "995e7942175c27cba70231cc55a02e46",
".git/objects/d9/5f7a941d1216ba9092cc8a721cb91db7d8e97e": "bf4894058b6a91e2ba1babbd7ed90a2e",
".git/objects/da/1a2ecc9c0be6a052f25ac8df0d2d0f807b7fe8": "38a66c62b905cc689c34ef86358cb469",
".git/objects/dc/f19dc833a49b591710c5f7356fa3aff39a16e0": "169bbde658df9d40f15fc17d369a7a47",
".git/objects/dd/475190f7fd5d219b7d4bde8b3972cd026d868e": "de827f925bb83b54ea3fff66bce1c079",
".git/objects/dd/b0caea212e1cd0e907300b269cc5a860da95ee": "33f364b334daf7afbcb467e3dce34b9a",
".git/objects/de/87cd41ed71cb823113e53f20a936ab5d5c0e51": "f7e257ada1084fdfa4e1d32f2a7549bb",
".git/objects/de/e8aaedad8e90351264eede40617a5277fa13bc": "fa0056d792a855000368be6d1b28fa8b",
".git/objects/df/3818684fb35676fefd4a2d38e13fe12299399a": "7f136be861511924d57469fe24426f4a",
".git/objects/e3/93cc5feaed7d39ee430bcb0ebeb00e4181fdf0": "79180b5629004ba75fb5cce5a7711d02",
".git/objects/e5/044e50c59f7d96bbc28046cb9ab5288762c6a9": "b5455b9e6568a568b075f5ab867263ea",
".git/objects/e5/28dba2305489ccdb68dfbe4a8ecd60e71c6b57": "9a12020f78f547939ec6a673418fdbb7",
".git/objects/e5/9aed7097c617055c43184885221116f6245fed": "11d054780975b764a75d99196c37dcd9",
".git/objects/e6/eec1f8552c502e354e36413679b5c0c33ff4f2": "2c9fdb4fa555aad5893f8fcb361cfc78",
".git/objects/e7/947c168eb98403965cb37dbbbc2f3d0f6fa062": "43f5c72a73dfb72ec231691878a54ed3",
".git/objects/e8/060693d5a7e01de0603e57b25668c5a021c650": "83fde9b0842ecbb23f5e3fc78e11c140",
".git/objects/e8/a5d9ed24802c4d41091bc39b50de6fcc2941a6": "9254444035ae49d61b177cc25747db07",
".git/objects/eb/19508bf02f417c99195e767fc17f07a23ba6fd": "a2544e4c181ca9920daf71fa5a21680c",
".git/objects/ec/349680085d64afb8de0b00e1d051b1b65de4dd": "00d4d0e7b73422648a4d66e8b831a6ef",
".git/objects/ed/4b7c5c11c287e6ccee89c12a0cb57e02edd8f8": "ce10357e0c7b1374775dc3235057d166",
".git/objects/ed/86a9ad10bcc6677d726bf424006f3cefcaac08": "0d7a613853d7ea7e995c447f724402e5",
".git/objects/ef/d8b2eaad9d0ac020a73953a423cc5cc347216e": "99e28d4ea2e82758a78b96fb84d0d985",
".git/objects/f0/9ac4153eecbf33087c7f0f759c8cbc85e5b95e": "3a371f444882ca4fdb884045c742dbec",
".git/objects/f1/20bd5ec073e3612a6be4af80f396ef3ac51d1a": "c8425cacea4bb55c795c61d646683301",
".git/objects/f3/511eb5a9afd1a13ab00dc3ad4892f09d1d0e1c": "dd810759c5d9c83bde170c3f32ce3c6e",
".git/objects/f4/28809ac840a52f7e615fe5182081614f1e1c68": "8065c12d6f5526d9a7458961cf9603d5",
".git/objects/f6/aa3492ab04fcb8101808ab067e0a72aeb9d313": "6098e47572b35634f40be2507bd238dd",
".git/objects/f6/e5f35e3c5f09e652286b1c67b9baa6035bde83": "56557401cff0b16eaf3da23545dc3f56",
".git/objects/f8/0d7d1f1d8ab3f7174499db0e4a2e488f683fdb": "381d95751394142fb9aa163d88551de1",
".git/objects/f8/c45bea8778fca2c0483e04cad41fe8fb27f8ed": "3bfb9bd0a45ca6504fba14d47ff20e03",
".git/objects/f9/61002a36e51f7c5d6f318ea20f4e00a92d808e": "226a346b9e894f787ee304fd28e77b0e",
".git/objects/fa/02d1c0242e7cae8b46034ba446f8538a57266b": "cd04fa9b961c9b9b5ad46ccbd9da3831",
".git/objects/fb/fd41165a36d1e409082ec7ea6cef1083dad3f9": "349599f392bb6c52256d67fdf2fdf99a",
".git/objects/fc/30fbbb803d8f39ba99073c222555ef3d72741f": "c6550e9437dc48af55a478d465785da7",
".git/objects/fc/c1bed725a43f35c21857f730caefb0605b1d1f": "a9c27f8ecea052b155811afb6953461e",
".git/objects/fc/e38731fe56da5c06ca9b4e00c1da2ee3be7f44": "ba44a89d7483005ffbce3197d1fd4733",
".git/objects/fd/2925a33d66a6bbe5fdb81c240688eb3f40e507": "2f6445ff7b749a651ee0864303589e79",
".git/objects/fd/d3e7ee69447956e9d3ae19e171689feb39abb2": "a2114ee2182cc4e4dd1bf55a046a0c79",
".git/objects/fd/ff273a63322803d0e8b893110670ae8887d05d": "2d60fadf6164af316d879e6fdf617f01",
".git/objects/fe/399a9d0118c56c919078ebcbcb6d5dfd5a3e0e": "c0df6ddde98dc5d7178b543a65f0c2e3",
".git/objects/ff/9b3e01285dbc38fb0238b7c9f00dc77a1c46fa": "5ee2e6fb91dd73ce43bb02205b6b020b",
".git/objects/pack/pack-434192ff50d308fd659db58ef7bb84e630595af4.idx": "59469a4fcf6ab1e651670b865a8da469",
".git/objects/pack/pack-434192ff50d308fd659db58ef7bb84e630595af4.pack": "34a887a7142c1b35fc52caad0f265eeb",
".git/packed-refs": "648d21eb209e1edb65c1a2fedff0b3f9",
".git/refs/heads/main": "a973949f88adcc78c972f47bfeb99bd3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a973949f88adcc78c972f47bfeb99bd3",
"app.js": "9636914d4699d97675aefe553dfedce4",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3a16d05dfdfd6ccc7adab9f24a2dab5f",
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
"index.html": "b914950cb11a2a0732f224094eb6d02b",
"/": "b914950cb11a2a0732f224094eb6d02b",
"main.dart.js": "ffa2b0bd123ae20f07bf3fb267ce2c81",
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
