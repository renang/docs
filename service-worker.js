/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "31272330e9bc3068c8c31d4c24c5c781"
  },
  {
    "url": "assets/css/0.styles.3e4faf6e.css",
    "revision": "2b05a5f02b9af194ad3c8c9ceab42707"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.8148e8f6.js",
    "revision": "00e8bec94d7c56b1238d02891f2fd821"
  },
  {
    "url": "assets/js/11.6e595169.js",
    "revision": "41694e36378b1803053e4006ed5a3198"
  },
  {
    "url": "assets/js/12.140810f9.js",
    "revision": "68bf1eaffd05bee4bb9bec89878b5465"
  },
  {
    "url": "assets/js/13.806ecd86.js",
    "revision": "e78b0cd7b0efbb82380a544a05169206"
  },
  {
    "url": "assets/js/14.5f70f0ab.js",
    "revision": "6a7e48aa3dc89c3b56b38b6ad5d5a402"
  },
  {
    "url": "assets/js/15.f1cfd55c.js",
    "revision": "fe2f130df0dcd1a905e2fd2d7682ee6a"
  },
  {
    "url": "assets/js/16.38b6396c.js",
    "revision": "3a3aa37a7175d68146dcdda3b4eea080"
  },
  {
    "url": "assets/js/17.612a15d6.js",
    "revision": "9bd94bc6e117e491671078cf1bd8fa14"
  },
  {
    "url": "assets/js/18.522e257b.js",
    "revision": "1e305e7f1c9b8d52ed535a9fd56c4650"
  },
  {
    "url": "assets/js/19.1791abdd.js",
    "revision": "016d68eef22b31f83a661deccc7c27e2"
  },
  {
    "url": "assets/js/20.4bd49873.js",
    "revision": "e5041044e215406ca7b13b4934d6a5b6"
  },
  {
    "url": "assets/js/21.93e08742.js",
    "revision": "583672ac94e41fe0b03a902f2dc4030a"
  },
  {
    "url": "assets/js/22.3339f186.js",
    "revision": "ed6c02a58d9a9f9e8c4024f9ec4db51a"
  },
  {
    "url": "assets/js/23.152231b0.js",
    "revision": "d5327327e387304efca0b1b16ac917ea"
  },
  {
    "url": "assets/js/24.bbda9743.js",
    "revision": "636bd6520556f7475a9322fd183196c5"
  },
  {
    "url": "assets/js/25.e4fb709c.js",
    "revision": "8e399b3685a6769533eabe4455fe2c7b"
  },
  {
    "url": "assets/js/26.cede8e7e.js",
    "revision": "4e63173efa4252f18b887ecf242e663b"
  },
  {
    "url": "assets/js/27.53dcbfe6.js",
    "revision": "686bc60cb4bf13ebeb87d5c0bab2d9f9"
  },
  {
    "url": "assets/js/28.f6e83dbf.js",
    "revision": "6e8574469e51294b146d60390e1cd246"
  },
  {
    "url": "assets/js/29.dd8d2e1c.js",
    "revision": "66e538b28d0816cf36d5fbfbcf769646"
  },
  {
    "url": "assets/js/3.dbd16436.js",
    "revision": "dcd37ba86ed96c0f63e1fd006b84f584"
  },
  {
    "url": "assets/js/30.f7e94c1b.js",
    "revision": "72fe3f4a0430a7523542419005795e62"
  },
  {
    "url": "assets/js/31.f20a3443.js",
    "revision": "9b1489437ac4469ede68c3542215b5cb"
  },
  {
    "url": "assets/js/32.a731ad42.js",
    "revision": "03d94cc2e2a0ba0cd3064a1f29df9589"
  },
  {
    "url": "assets/js/33.8488c6b5.js",
    "revision": "7db6d82f5883a93855687050d8ce57c9"
  },
  {
    "url": "assets/js/34.e5a799e2.js",
    "revision": "16f66ec54db05788e091d3de00bb2c3f"
  },
  {
    "url": "assets/js/35.c4071383.js",
    "revision": "3ef93f7a2e3945200e473455976003c8"
  },
  {
    "url": "assets/js/36.6b712343.js",
    "revision": "4e9e3820e792e2cf5c22b617d953de0d"
  },
  {
    "url": "assets/js/37.ea3caafb.js",
    "revision": "371ae41fd1d7b9854d1d004c6062947c"
  },
  {
    "url": "assets/js/38.c72b1fe7.js",
    "revision": "50a63cb4af83d7902680c2dfc38273cd"
  },
  {
    "url": "assets/js/39.b7dbf3a8.js",
    "revision": "a4ae6b90f73e10a05a5cd8d7f59d69ae"
  },
  {
    "url": "assets/js/4.924ec6b4.js",
    "revision": "db78813477cb3a803d75cafe4ea522b0"
  },
  {
    "url": "assets/js/40.4c330205.js",
    "revision": "41b63305965ea0435eaee928bd526681"
  },
  {
    "url": "assets/js/41.51968291.js",
    "revision": "ca4ee90d7972869136b49fc25a81cee2"
  },
  {
    "url": "assets/js/42.ec32140a.js",
    "revision": "51be6f303dc05f83dcaaffbfff455a89"
  },
  {
    "url": "assets/js/43.5aa2600d.js",
    "revision": "60db822bc40779f6af70f9db1ec54f8d"
  },
  {
    "url": "assets/js/44.fb9a56e7.js",
    "revision": "5ff3f33277700e46b53622d5a2589e0b"
  },
  {
    "url": "assets/js/45.6740e65e.js",
    "revision": "4d599c8efb160cf257f96d253340bc6e"
  },
  {
    "url": "assets/js/46.9d7b22e2.js",
    "revision": "7990db1795b57d07a1948c4c18b4fd96"
  },
  {
    "url": "assets/js/47.51267860.js",
    "revision": "62bb40821b1931bc2b90e388a62777f2"
  },
  {
    "url": "assets/js/48.6ebc81b8.js",
    "revision": "2ffc5f5c6c7a4cc2c64d837166d0424e"
  },
  {
    "url": "assets/js/49.520123ef.js",
    "revision": "d95e8a7e578a0d9253b3837c7b12eae9"
  },
  {
    "url": "assets/js/5.1e218071.js",
    "revision": "8de5d5d24a3c25706099181e25fff373"
  },
  {
    "url": "assets/js/50.3b8adb9f.js",
    "revision": "932b951b061a60c3f840545ff0346cf0"
  },
  {
    "url": "assets/js/51.f29ad92e.js",
    "revision": "f862e34b0972ef4b7e4c148b7cf9d58f"
  },
  {
    "url": "assets/js/52.f98e769c.js",
    "revision": "9f3338f2fcbdf796cbd2555a7e607500"
  },
  {
    "url": "assets/js/53.74cec7ee.js",
    "revision": "9b1e73082871a55289c1937c5104681b"
  },
  {
    "url": "assets/js/54.b57cb75c.js",
    "revision": "d9eb69f98342ee87610e52c612ab9fba"
  },
  {
    "url": "assets/js/55.19c5a9a1.js",
    "revision": "8320de46f11d46d30791ac73ad8ce8b6"
  },
  {
    "url": "assets/js/56.1a8ec5b4.js",
    "revision": "2bcd630485702ba50b4a2d4f88142547"
  },
  {
    "url": "assets/js/57.fbe1b10a.js",
    "revision": "898ecc119ad16a4133c7f05fb0c161d3"
  },
  {
    "url": "assets/js/58.4bea1d9b.js",
    "revision": "e6f308920646c86deeaf6327f33cbb73"
  },
  {
    "url": "assets/js/6.42ac205a.js",
    "revision": "b42dfeab65d4775f3ca53667fec04851"
  },
  {
    "url": "assets/js/7.865ed63d.js",
    "revision": "f3f334ef9e52d829bbbeddd8775a8644"
  },
  {
    "url": "assets/js/8.9d2ce230.js",
    "revision": "8c306ec1b5ab8adaf9db2d868ec58ef8"
  },
  {
    "url": "assets/js/9.91a71ef6.js",
    "revision": "c744547485c358f3e961476c450e679f"
  },
  {
    "url": "assets/js/app.4fc3bfcb.js",
    "revision": "00f3973011fa779bbcca97c6077050d7"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "a1cb2f0cc1e329d702f337076ab435e8"
  },
  {
    "url": "connex/index.html",
    "revision": "6ec8f6699c9cbc752245daaab7eb5e9b"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "9844b1cbb01389cdc1cb6e49d0d4600a"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/development-resources.html",
    "revision": "2cbf9684901c7f6ff6c2366b3284b13a"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "aa5df611e4d62255eebafdbe9595c01d"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "1ec77919f014c7d68fa7a1b0f610f96f"
  },
  {
    "url": "sync/faq.html",
    "revision": "0622d98668820b600e9b61c326a8e4fd"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "87ce7151d674a35fbb51cf39ce3c25c9"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "104a550639a8b353c967e2acd3e16744"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "19eaeff6386bbec250d18f3df5b7f3eb"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "ff7ef4aaddf8a27285a41d442c5ff097"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "85b18893fa7e90df3025f2992208e81f"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "2fe685fd5045b37407c13c72def87cd3"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "154f996c6d57e6839bb14524ff9e9606"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "8864adeb6656a0836e10094a263bfea2"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "c36706221b3108ade4b42c7ffb01a5cd"
  },
  {
    "url": "sync2/faq.html",
    "revision": "6e6b20f775b5244fbfbdd4f8185d0a32"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "66c89184b0c02ac17c6f731dbba15fde"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "a9b285a4f8aa5e010fb30a2782b89388"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "c6abe1565b61b7d9a1d7536d0dc80e63"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "4dc2a42f1d8c8937c6254e7ca7232a85"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "78b3640ca85cdc5c24874b3260060825"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "1eb2768fe2662deb48d821770542869b"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "a4828b42dc9a9c1ae1f929e8c9efadc3"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "43e61246cf62f3a9ba6b83f473fa51a8"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "ffff43d813500b45251614a5cbec6093"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "ff8185dce923329438c4fbf5d3ee4f59"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "44871c81bd98963edac0613fca84525e"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "bc4e2cc2f4e954eb74ee37cc1b9b7c64"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "e3e05e6a00c7aa21df2a3ec7da9a3434"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "9b56fd486f2381eeccfbdb4136ec0140"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "b0f1a6d2bea61b94a12beaebe9e2191c"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "47fe1cf5ca42984732b03e250032136a"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "92400c15b2e3252fb1f51036f0b64e37"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "27f38a3eac23adfb2fa4f655e47200cd"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "ec7a1b77616c37a22bac094047cc5467"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2.html",
    "revision": "62bee76dee5f71a8c2482a2f9ae398e3"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "837c581ef2e619349c29ad131fd3300e"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "3ae6968d86759e8401ce9cd769aba767"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "32375d81a21fdd446a888d99dd8dee9a"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "48c741936308b7ab89ee294585da2eae"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "598fff1d6fc6221286d750be0cd55e41"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "44e0d69ff1857bb347d534d644817611"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "56bb1c74b263274a0c738a7fdb17835b"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "23d20d803f1c0e9c0cc638c03013c9f4"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "e17b9eb7c1a4dedbf2ba8130b061670c"
  },
  {
    "url": "tutorials/index.html",
    "revision": "093cf162e13786e6bcdc68059d6b7f3d"
  },
  {
    "url": "tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "e08c78f2e17f4d523ad138d02d6e78e4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
