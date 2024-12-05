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
    "revision": "ba2f21c909075425921d547889a7792b"
  },
  {
    "url": "assets/css/0.styles.7c367745.css",
    "revision": "4eaace3b927ffb265529a0bae10d1162"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.051701ff.js",
    "revision": "b96cc2f8680b1f19b697137cb8c337b5"
  },
  {
    "url": "assets/js/10.f6f92eac.js",
    "revision": "b0e162e745becdb898ecf220a216f4aa"
  },
  {
    "url": "assets/js/11.43281066.js",
    "revision": "cfd03810dd26e93281ea09341f5cf9ed"
  },
  {
    "url": "assets/js/15.3928ba14.js",
    "revision": "5d59b3acfdf8a15be9238e4f102675ee"
  },
  {
    "url": "assets/js/16.c77a1d11.js",
    "revision": "93b947561b710d2cee2e3f66a4502b3d"
  },
  {
    "url": "assets/js/17.adec6364.js",
    "revision": "db764578ec57cf44fc37ab71cfd755d4"
  },
  {
    "url": "assets/js/18.83bd15c2.js",
    "revision": "dbcbf50bd8a0bf2e1cb2207ed6613aab"
  },
  {
    "url": "assets/js/19.31deb40f.js",
    "revision": "8ebe7bb628f2056ee96128ad9ec3382d"
  },
  {
    "url": "assets/js/2.34a9fcd8.js",
    "revision": "d0b12c21e743d7b653ec040cba87f4d2"
  },
  {
    "url": "assets/js/20.79aa7107.js",
    "revision": "fb443ecca6237c60363b5412cad9c161"
  },
  {
    "url": "assets/js/21.ced7cdfb.js",
    "revision": "60d13790bcd9dcc87388382ec203119a"
  },
  {
    "url": "assets/js/22.9297a50e.js",
    "revision": "f7d03d7dcc01ce779b68a666606329d4"
  },
  {
    "url": "assets/js/23.8471c5f9.js",
    "revision": "da26eb4d695d472cf5724a09cb584504"
  },
  {
    "url": "assets/js/24.cff4e49f.js",
    "revision": "8eeac34b021ed567e42d02fc9276943f"
  },
  {
    "url": "assets/js/25.adb8472f.js",
    "revision": "2bfd7b84c4a40c861b5ccb38d04fc27a"
  },
  {
    "url": "assets/js/26.82a37779.js",
    "revision": "e04dcf77ec8736d85c9c70bd839b2a1f"
  },
  {
    "url": "assets/js/27.bb6fa6bb.js",
    "revision": "d9cc3d95db2a9d7638fea87ed09b220c"
  },
  {
    "url": "assets/js/28.157a2e56.js",
    "revision": "a90934d5b0e0cd11875f539a349241e7"
  },
  {
    "url": "assets/js/29.c3b9e9d5.js",
    "revision": "e6ce0747092ec4bbef1d9db52c91b0e5"
  },
  {
    "url": "assets/js/3.1d9a1694.js",
    "revision": "3a32107eba7105b44d3b8527466dbad6"
  },
  {
    "url": "assets/js/30.dc586dc6.js",
    "revision": "d919d1eb183dace027f4cdbd0ff81102"
  },
  {
    "url": "assets/js/31.1d17b707.js",
    "revision": "dc2de27fec57631db27dd07c24717265"
  },
  {
    "url": "assets/js/32.6e791bc8.js",
    "revision": "921bddb11c3797bed72bcd515c89990d"
  },
  {
    "url": "assets/js/33.b60e2656.js",
    "revision": "98dd5c0a6697797fd0c6a25a10f866de"
  },
  {
    "url": "assets/js/34.8b21d4d2.js",
    "revision": "e2f9da29f599414baf7461a47896e86f"
  },
  {
    "url": "assets/js/35.82698fc7.js",
    "revision": "0d003cb774b61e4aa029a80fe0d54298"
  },
  {
    "url": "assets/js/36.e669d2fe.js",
    "revision": "484e00751ef65c1c40902ad9ecba32a4"
  },
  {
    "url": "assets/js/37.26a3924a.js",
    "revision": "5a2dcfbea18106a1ca485cab60812620"
  },
  {
    "url": "assets/js/38.99a1a101.js",
    "revision": "1d45b053da8f03d90878539e515f6d46"
  },
  {
    "url": "assets/js/39.ad1952e2.js",
    "revision": "9ca68f16b5418a64fe16f3bb1283b5e3"
  },
  {
    "url": "assets/js/4.dbe092dd.js",
    "revision": "71e55336314c0d8d1d6874481ada16fa"
  },
  {
    "url": "assets/js/40.f2f36e50.js",
    "revision": "a436d46921161bd749d28c4e156413c0"
  },
  {
    "url": "assets/js/41.8c2463d6.js",
    "revision": "01434db2b74655d489bb516ab1c55cee"
  },
  {
    "url": "assets/js/42.5934374a.js",
    "revision": "5bf7da187f39f33c521e2fe910356a0f"
  },
  {
    "url": "assets/js/43.acd47c1f.js",
    "revision": "189ab318e94d4810c19b4ff5bbe4834d"
  },
  {
    "url": "assets/js/5.51f9b962.js",
    "revision": "4f191565e9c3a0b7127d27ef24eb9553"
  },
  {
    "url": "assets/js/6.9882ccd9.js",
    "revision": "45861faedd7090be0cd62a8687d9440e"
  },
  {
    "url": "assets/js/7.c8e79467.js",
    "revision": "7980cf3eb2d869b6081c3b01a31d9947"
  },
  {
    "url": "assets/js/8.b81a6713.js",
    "revision": "1f43cd26f05a751c9adef62dfb31d265"
  },
  {
    "url": "assets/js/9.9c5e1fbe.js",
    "revision": "9ff5308f6b466d90362a42777f2610ee"
  },
  {
    "url": "assets/js/app.5558e63f.js",
    "revision": "737d4f81b2c57f9bef5db2c26b2428cb"
  },
  {
    "url": "assets/js/vendors~docsearch.872f0ac7.js",
    "revision": "2fd94efef5ac14b0d36ad9798ccd993a"
  },
  {
    "url": "assets/js/vendors~flowchart.3a2bb8a0.js",
    "revision": "6a9d4949b678f9f227126809ece583f8"
  },
  {
    "url": "categories/index.html",
    "revision": "0507c9b2387ec54ca2f3d677783ef0e6"
  },
  {
    "url": "categories/Vue2/index.html",
    "revision": "5b50114c1a3bdb73d90aea0e93bd980a"
  },
  {
    "url": "guide/index.html",
    "revision": "aabfd9d028e62f6c449740d3f088be0f"
  },
  {
    "url": "index.html",
    "revision": "3a10220d4f08a55d09c609ba41c51abf"
  },
  {
    "url": "tag/index.html",
    "revision": "d472b267b13697dd2d4fe3e4869e7359"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b7650eb63b6b9cef48e4b19087fbb73"
  },
  {
    "url": "技术文章/Vue2/VueX.html",
    "revision": "03f8a707e1b1a458daf676b45673e925"
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
