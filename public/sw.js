if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const t=e=>s(e,c),o={module:{uri:c},exports:r,require:t};a[c]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-e82592a2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/app-build-manifest.json",revision:"a55b5f0dd6cc03c96c1beb27e0f11246"},{url:"/_next/static/6TyWnPSPAIB1KUTyb4tfy/_buildManifest.js",revision:"d7af164afef0e5b53876e60fab863dba"},{url:"/_next/static/6TyWnPSPAIB1KUTyb4tfy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/174-978567b240e84413.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/199.64ce1a723b895856.js",revision:"64ce1a723b895856"},{url:"/_next/static/chunks/200.dedb1892f3688ab5.js",revision:"dedb1892f3688ab5"},{url:"/_next/static/chunks/243.f3bd1ed104f4c8da.js",revision:"f3bd1ed104f4c8da"},{url:"/_next/static/chunks/26-d77f0021a1348e1d.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/310.8a6cff516786ceba.js",revision:"8a6cff516786ceba"},{url:"/_next/static/chunks/314.94ba4842d8a4f78a.js",revision:"94ba4842d8a4f78a"},{url:"/_next/static/chunks/317.09de26ea65bea09f.js",revision:"09de26ea65bea09f"},{url:"/_next/static/chunks/347.29da1b91aaf5ffc0.js",revision:"29da1b91aaf5ffc0"},{url:"/_next/static/chunks/415-54b452f2559018d8.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/430.191d80c6ac3f16f8.js",revision:"191d80c6ac3f16f8"},{url:"/_next/static/chunks/460.3803b83250d4d9b9.js",revision:"3803b83250d4d9b9"},{url:"/_next/static/chunks/494-c90060da680238ce.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/5.90c640d66239ad27.js",revision:"90c640d66239ad27"},{url:"/_next/static/chunks/543.f37f7bf914086c61.js",revision:"f37f7bf914086c61"},{url:"/_next/static/chunks/553.544a6c09aee36ccb.js",revision:"544a6c09aee36ccb"},{url:"/_next/static/chunks/579-ea6efb34234082dc.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/605.f7533408bcfa8b1d.js",revision:"f7533408bcfa8b1d"},{url:"/_next/static/chunks/635.f347cceda8e7a16a.js",revision:"f347cceda8e7a16a"},{url:"/_next/static/chunks/654-641506b4225cd479.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/724-23b3336f9bd4ab5b.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/76.0d62189480d0037c.js",revision:"0d62189480d0037c"},{url:"/_next/static/chunks/772.b97036cd277b20a5.js",revision:"b97036cd277b20a5"},{url:"/_next/static/chunks/815.9fe40932207dcd87.js",revision:"9fe40932207dcd87"},{url:"/_next/static/chunks/82-05326bdc5d16dcc5.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/9081a741-7b98b7a7ab1ed298.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/978.3793547a8c59bcb9.js",revision:"3793547a8c59bcb9"},{url:"/_next/static/chunks/app/%5Blng%5D/contact/page-f729615f80437520.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/destinations/%5Bcountry%5D/%5Bsite%5D/page-055c6e46a6e87df8.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/destinations/%5Bcountry%5D/page-8e4303f58f34f95d.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/destinations/page-50ff2e2532350a0c.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/error-f84b57ab01ab2016.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/layout-527362c3179282c9.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/not-found-7bec8f91207ca879.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/page-845c822096d52763.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/%5Blng%5D/shop/page-495bbbff0d8937cb.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/app/_not-found-9e7ebc166dbb188c.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/bf6a786c-11e84cf185f8ba0e.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/main-2f1ffed55ea26ca3.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/main-app-500f015b11f7f653.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/pages/_app-6ca4a4ec31e39f3d.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/pages/_error-9de0d1f4f4d1fcb4.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7feae6488ac3869b.js",revision:"6TyWnPSPAIB1KUTyb4tfy"},{url:"/_next/static/css/3bc96d223a4036c3.css",revision:"3bc96d223a4036c3"},{url:"/_next/static/css/73eb83dbb3499be1.css",revision:"73eb83dbb3499be1"},{url:"/_next/static/css/c2c79e38a1c71616.css",revision:"c2c79e38a1c71616"},{url:"/_next/static/css/cd14754f9f9e9240.css",revision:"cd14754f9f9e9240"},{url:"/_next/static/css/d277aebf5705b3dc.css",revision:"d277aebf5705b3dc"},{url:"/_next/static/css/e220709aaa5bb777.css",revision:"e220709aaa5bb777"},{url:"/_next/static/css/f681a605302b3c7f.css",revision:"f681a605302b3c7f"},{url:"/_next/static/css/fc9b719ef1b1a13a.css",revision:"fc9b719ef1b1a13a"},{url:"/_next/static/media/162938472036e0a8-s.woff2",revision:"f07093b23087bde42e34448bcbad3f78"},{url:"/_next/static/media/4de1fea1a954a5b6-s.p.woff2",revision:"b7d6b48d8d12946dc808ff39aed6c460"},{url:"/_next/static/media/6d664cce900333ee-s.p.woff2",revision:"017598645bcc882a3610effe171c2ca3"},{url:"/_next/static/media/f1df658da56627d0-s.woff2",revision:"372d9cf6e4822b41d014fcc9de0a979a"},{url:"/_next/static/media/logo_sinfronteras-417x150.136f022d.png",revision:"a94f7fa2b9a430dee51145830dc4815a"},{url:"/_next/static/media/victoralaluf.b365ddc5.png",revision:"20d4625f90ed93d7cebd04105d905b36"},{url:"/google0caf3b4e7fa117a8.html",revision:"a8cc7a828f9579d578cec8521e427495"},{url:"/images/background/image4.jpg",revision:"f719848b433845e36c3a1df93dbc238a"},{url:"/images/background/mapa-verde-small.jpg",revision:"28ee16db103e68458eb9d1c005b28e63"},{url:"/images/countries/cambodia/cambodia.jpg",revision:"208c6d0863d3c2cad26e62047adb0706"},{url:"/images/countries/cambodia/flag.png",revision:"635b84e9f5666f4e85d6f4e543dfdae9"},{url:"/images/countries/germany/flag.webp",revision:"ba0d527792ca7f399aff67afdb331e84"},{url:"/images/countries/germany/germany.jpg",revision:"a7856070f1a7d67340a20b4c62777b32"},{url:"/images/countries/israel/flag.png",revision:"575bdcafd6634ccb6db7b0c1a7433663"},{url:"/images/countries/israel/israel.jpg",revision:"03c6875754daae23c3b1f475ce8a9d86"},{url:"/images/countries/malta/flag.png",revision:"22861367d8fa05b7e4e7165700cc332c"},{url:"/images/countries/malta/malta.jpg",revision:"133803665582eecd73681bed3997c880"},{url:"/images/countries/myanmar/flag.png",revision:"83b64e5e6e8104f57cb7d433f690cf4e"},{url:"/images/countries/myanmar/myanmar.jpg",revision:"ace3f39d7c9a315564c26bedebce840e"},{url:"/images/countries/thailand/flag.png",revision:"46ba976a84cca9d84251e46299234140"},{url:"/images/countries/thailand/thailand.jpg",revision:"e97bceb8dfd575139ce7c2b65f41f048"},{url:"/images/icons/android-chrome-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/apple-touch-icon.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/favicon-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/favicon-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/maskable_icon.png",revision:"41075b59ae9f3e09e628c9b954b0c83c"},{url:"/images/icons/maskable_icon_x128.png",revision:"736eafac60a40143b66aa5d6f57552f1"},{url:"/images/icons/maskable_icon_x192.png",revision:"cd37e1f0be4f9fab370809baca9caee5"},{url:"/images/icons/maskable_icon_x48.png",revision:"3bf04a14a8757b1ea1287a0a3961b033"},{url:"/images/icons/maskable_icon_x72.png",revision:"cb11958acb46789b97a2c3d4428951d8"},{url:"/images/icons/maskable_icon_x96.png",revision:"fa41885841f672d2a7e08c5a72bb1a88"},{url:"/images/icons/sinfronteras-128x128.png",revision:"8b63ff89d29e1fc7e6ea2d4142e39d3d"},{url:"/images/icons/sinfronteras-144x144.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/icons/sinfronteras-152x152.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/sinfronteras-16x16.png",revision:"a6d6390796d0429a1746f2c47207d54e"},{url:"/images/icons/sinfronteras-192x192.png",revision:"50de619f69cb9e639e515f11de7e4636"},{url:"/images/icons/sinfronteras-32x32.png",revision:"76b53168e68079cd94e04b5167ebd737"},{url:"/images/icons/sinfronteras-384x384.png",revision:"b5cf3101d27dea7e5813e8dce8915da7"},{url:"/images/icons/sinfronteras-512x512.png",revision:"2e8c22603466135978b18b57ff5068dd"},{url:"/images/icons/sinfronteras-72x72.png",revision:"993f1b34fcceb292a8e64bc88eebf4ae"},{url:"/images/icons/sinfronteras-96x96.png",revision:"d09304ea3b2708b577e79d1b79cd9ae1"},{url:"/images/icons/touch-icon-ipad-retina.png",revision:"39967303da25f7ef6ab808f4f2e6bc60"},{url:"/images/icons/touch-icon-ipad.png",revision:"312b1a4021c9623bdddae0749f4249f0"},{url:"/images/icons/touch-icon-iphone-retina.png",revision:"cfe764982aedbc880bd26a67d50d9b04"},{url:"/images/icons/touch-icon-iphone.png",revision:"490c55ceaeebbf98142fb3d2c8deeedc"},{url:"/images/logo/logo_sinfronteras-417x150.png",revision:"a94f7fa2b9a430dee51145830dc4815a"},{url:"/images/logo/logo_sinfronteras-600x216.png",revision:"60ca0ceb1999fd645fb802d259c2c0e7"},{url:"/images/logo/victoralaluf.png",revision:"20d4625f90ed93d7cebd04105d905b36"},{url:"/images/posters/portada-100-suscriptores.jpg",revision:"dd8bdf7ba7259a6df470c54ec0099596"},{url:"/images/posters/portada-angkor.jpg",revision:"37544ceff4c5912e9ec4d2eb175cd4e3"},{url:"/images/posters/portada-ayutthaya.jpg",revision:"4a6fa4b86d604862418b9cf846be0d87"},{url:"/images/posters/portada-bagan.jpg",revision:"060114cb99109bea48605d678049b3c7"},{url:"/images/posters/portada-bangkok.jpg",revision:"edd964b4771d24d1be61d475fb9b8480"},{url:"/images/posters/portada-chiang-mai.jpg",revision:"4982c34d5fca578124334163bf5ad2e1"},{url:"/images/posters/portada-enp.jpg",revision:"486b58962d646f53aad1dbefc6cb0f64"},{url:"/images/posters/portada-hpa-an.jpg",revision:"cef281c895f93fcbb1ccb6891fba1dae"},{url:"/images/posters/portada-hsipaw.jpg",revision:"acd0e12774627c45f6ce8b52432bd4f3"},{url:"/images/posters/portada-il-north.jpg",revision:"b4b9b8d6e2cc697aca249e0f3764d2d6"},{url:"/images/posters/portada-jerusalen-dia1.jpg",revision:"728a4c3cc493bdceb2ef1db3883d9330"},{url:"/images/posters/portada-jerusalen-dia2.jpg",revision:"56dd64cf451730c66493e80d6a41b4cf"},{url:"/images/posters/portada-jerusalen-dia3.jpg",revision:"1ac228e3bdb2ceced77eb67137b370ea"},{url:"/images/posters/portada-kineret.jpg",revision:"116884cc937c95418ce17c478479cced"},{url:"/images/posters/portada-kyaiktiyo.jpg",revision:"aedc9ecbc7f3ce6b5c88b04b87a8d972"},{url:"/images/posters/portada-la-vida-es-un-viaje.jpg",revision:"4bfb7eafe24e7b3b00b584d3b5fe886b"},{url:"/images/posters/portada-lago-inle.jpg",revision:"603daf29bf14533d070178b8398d1096"},{url:"/images/posters/portada-mandalay.jpg",revision:"1a9dae30b1d7241dacd04e918c98aebf"},{url:"/images/posters/portada-mdina.jpg",revision:"d47c9b775c00ca1f76a8f860e8a119e9"},{url:"/images/posters/portada-myanmar.jpg",revision:"60f4ae54379f5757780d7cbf5e200e08"},{url:"/images/posters/portada-negev.jpg",revision:"3fe973d8c612a98e82bddb641ae47e38"},{url:"/images/posters/portada-oberammergau.jpg",revision:"a52a57d4b150454d5a25927b29aa4cd3"},{url:"/images/posters/portada-sukhothai.jpg",revision:"6c0c9662d493bbcb076b436bc1f72c7d"},{url:"/images/posters/portada-tel-aviv.jpg",revision:"e4c95b850ed503ee408854e74c9fc20c"},{url:"/images/posters/portada-udon-thani.jpg",revision:"8caee9a8b556faaf169bfa82788c44c2"},{url:"/images/posters/portada-valeta-dia1.jpg",revision:"32f5d1e961039afecc8fe051afafa4cd"},{url:"/images/posters/portada-valeta-dia2.jpg",revision:"13a97a3727c0ee9065254bf3da18fa1c"},{url:"/images/posters/portada-valeta-dia3.jpg",revision:"2bfe63f4383c34022ce4d2f69875d9ca"},{url:"/images/posters/portada-yangon-dia1.jpg",revision:"9c3ca28c61c92b0fd94e5a9491e52bfb"},{url:"/images/posters/portada-yangon-dia2.jpg",revision:"223c407101e06ed5b306535c3e279e04"},{url:"/images/posters/portada-yangon-dia3.jpg",revision:"5702ea09a3edd5161fed90fdc531aef0"},{url:"/images/slides/image1.jpg",revision:"5b8c2d657e2286cfc444d9fa04046f2a"},{url:"/images/slides/image2.jpg",revision:"33e1f183eacdf4bcca25ed18d414bbdc"},{url:"/images/slides/image3.jpg",revision:"7cac351889c89c6284b36a0307429d2f"},{url:"/manifest.json",revision:"562bb74de57e4a43ca5525663fa55055"},{url:"/videos/sinfronteras-intro-hd.mp4",revision:"0dc1571d7bee1bb099850b54fedf2abd"},{url:"/videos/sinfronteras-intro-hd.webm",revision:"496a8081b44e368d574bb8f531f66aa5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less|scss)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\/api\/comments\//,new e.NetworkOnly({plugins:[new e.BackgroundSyncPlugin("comments",{maxRetentionTime:31536e3})]}),"POST"),e.registerRoute(/\/api\/newsletter/,new e.NetworkOnly({plugins:[new e.BackgroundSyncPlugin("newsletter",{maxRetentionTime:31536e3})]}),"POST")}));
