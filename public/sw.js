if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>s(e,n),f={module:{uri:n},exports:r,require:t};a[n]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1wusSrGpPoIaI3_bnrQW8/_buildManifest.js",revision:"f0a05d0b4c9274f21087e4c5fa46bb11"},{url:"/_next/static/1wusSrGpPoIaI3_bnrQW8/_middlewareManifest.js",revision:"60ed9523f510025b6e688aada2df4cec"},{url:"/_next/static/1wusSrGpPoIaI3_bnrQW8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/102-e9387d48c61100cc.js",revision:"e9387d48c61100cc"},{url:"/_next/static/chunks/229.6cbf5c907da8f156.js",revision:"6cbf5c907da8f156"},{url:"/_next/static/chunks/243-3f7b556bfed89aab.js",revision:"3f7b556bfed89aab"},{url:"/_next/static/chunks/254-e33879c359ce81a0.js",revision:"e33879c359ce81a0"},{url:"/_next/static/chunks/423-623c7baba9f1b762.js",revision:"623c7baba9f1b762"},{url:"/_next/static/chunks/486-f80333ddc08000af.js",revision:"f80333ddc08000af"},{url:"/_next/static/chunks/584-e8a8c71fd9c6ecea.js",revision:"e8a8c71fd9c6ecea"},{url:"/_next/static/chunks/685-2a89b0cba1e7bf1b.js",revision:"2a89b0cba1e7bf1b"},{url:"/_next/static/chunks/6c44d60f.49319ecb49d30bc2.js",revision:"49319ecb49d30bc2"},{url:"/_next/static/chunks/851-5e18dd2399617809.js",revision:"5e18dd2399617809"},{url:"/_next/static/chunks/88-5f87891d578161e0.js",revision:"5f87891d578161e0"},{url:"/_next/static/chunks/916c7f34-d6a9ecc47fb1356a.js",revision:"d6a9ecc47fb1356a"},{url:"/_next/static/chunks/960-7c2098f18db888cb.js",revision:"7c2098f18db888cb"},{url:"/_next/static/chunks/cb1608f2-efe14e4ec2e9ac9a.js",revision:"efe14e4ec2e9ac9a"},{url:"/_next/static/chunks/framework-f094f8c0f8c50592.js",revision:"f094f8c0f8c50592"},{url:"/_next/static/chunks/main-13f4abfc521baf65.js",revision:"13f4abfc521baf65"},{url:"/_next/static/chunks/pages/401-93300b8eef0f57a0.js",revision:"93300b8eef0f57a0"},{url:"/_next/static/chunks/pages/404-e1d6735275fbd7e0.js",revision:"e1d6735275fbd7e0"},{url:"/_next/static/chunks/pages/500-08f93923bbac9c7d.js",revision:"08f93923bbac9c7d"},{url:"/_next/static/chunks/pages/_app-b7a091e092de4dcf.js",revision:"b7a091e092de4dcf"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/account-settings-3f75cb13da251824.js",revision:"3f75cb13da251824"},{url:"/_next/static/chunks/pages/funding_agency-b1a1c03355c231a0.js",revision:"b1a1c03355c231a0"},{url:"/_next/static/chunks/pages/hei-b6e49a9f5c15ed9d.js",revision:"b6e49a9f5c15ed9d"},{url:"/_next/static/chunks/pages/index-107780f81afd87ae.js",revision:"107780f81afd87ae"},{url:"/_next/static/chunks/pages/individual-e8a360f1f44491f0.js",revision:"e8a360f1f44491f0"},{url:"/_next/static/chunks/pages/individual/applied-f4aefe2313eae12a.js",revision:"f4aefe2313eae12a"},{url:"/_next/static/chunks/pages/individual/fundingSchemes-cfea43b02748d256.js",revision:"cfea43b02748d256"},{url:"/_next/static/chunks/pages/moderator-9690d30bb60eefec.js",revision:"9690d30bb60eefec"},{url:"/_next/static/chunks/pages/pages/error-ea01b9c045497563.js",revision:"ea01b9c045497563"},{url:"/_next/static/chunks/pages/pages/login-b66fb0ec1fed89eb.js",revision:"b66fb0ec1fed89eb"},{url:"/_next/static/chunks/pages/pages/register-f5fa265caa015837.js",revision:"f5fa265caa015837"},{url:"/_next/static/chunks/pages/send-600529d18c6bc038.js",revision:"600529d18c6bc038"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-2a7895f0f4e5984c.js",revision:"2a7895f0f4e5984c"},{url:"/_next/static/css/0a858871da433fe9.css",revision:"0a858871da433fe9"},{url:"/_next/static/css/34189dd8827a095d.css",revision:"34189dd8827a095d"},{url:"/_next/static/css/3555cf9e1098de6e.css",revision:"3555cf9e1098de6e"},{url:"/_next/static/css/811fa27c88b3e312.css",revision:"811fa27c88b3e312"},{url:"/_next/static/css/e8554939285bf447.css",revision:"e8554939285bf447"},{url:"/icon-192x192.png",revision:"9f797eb3ef645c746f71b2f42ea85353"},{url:"/icon-256x256.png",revision:"1e374bb90b112d01b143d386759e1e49"},{url:"/icon-384x384.png",revision:"fd1a39e36069890d1f51a3bf28ae480e"},{url:"/icon-512x512.png",revision:"b1a78fccaca812fe266fc8c7d2a85965"},{url:"/images/apple-touch-icon.png",revision:"a6cb7f533c80104504be8e94d5e336d3"},{url:"/images/avatars/1.png",revision:"e293811547682b1edefac8f233ffa8d0"},{url:"/images/avatars/2.png",revision:"80504cd9c822568b3069462ce78d6200"},{url:"/images/avatars/3.png",revision:"4b40af12db5eaf5ef29d9c414bde7fc0"},{url:"/images/avatars/4.png",revision:"401a6c445d0b7a4cf7783a84037d2cc3"},{url:"/images/avatars/5.png",revision:"449c175cbc336e674ef43e00dac54da8"},{url:"/images/avatars/6.png",revision:"60bb3fc7e00b523d8ddace38d193b814"},{url:"/images/avatars/7.png",revision:"40de779845ab0ad03c7f6892967ef9af"},{url:"/images/avatars/8.png",revision:"527b8f8bba271f6be7e63973fbd02fe7"},{url:"/images/cards/analog-clock.jpg",revision:"8c9bdd3ec62b8d043feac5dd2a6b9801"},{url:"/images/cards/background-user.png",revision:"dea304d8812eb0f6fc7d22a299e894e8"},{url:"/images/cards/glass-house.png",revision:"889b97795184805be01369b5605f03b7"},{url:"/images/cards/iPhone-11-pro.png",revision:"3a7d213b8b04fb0225bed56e4ffc8a4d"},{url:"/images/cards/logo-aviato.png",revision:"c46859ea9843fc5a104d7eaa286c3943"},{url:"/images/cards/logo-bitbank.png",revision:"bf6d7e35ac4d8f21822793496a1d031b"},{url:"/images/cards/logo-zipcar.png",revision:"21e28abeec997a41bb9c8334a415816a"},{url:"/images/cards/paper-boat.png",revision:"989d6b880388d0eb7389b7cefd558ee4"},{url:"/images/cards/paypal.png",revision:"7843aa664efe68b435f8152f7cc5bb03"},{url:"/images/cards/watch-on-hand.jpg",revision:"524ab3d0eacac9b9093477e5f785ca1e"},{url:"/images/favicon.png",revision:"057b56a6c39c7ed81047d029daebc29f"},{url:"/images/logos/american-bank.png",revision:"215f8afc072906c3dbfdd0a76971fee9"},{url:"/images/logos/aws.png",revision:"bbe8baf145c552a3145106ae4e77ad01"},{url:"/images/logos/citi-bank.png",revision:"c76ac1a2262bbfba60ca79e3dc92977f"},{url:"/images/logos/digital-ocean.png",revision:"06a999f038302f186dd420dbc130e2b3"},{url:"/images/logos/github.png",revision:"c39c85a1071e4cd71a24f55d5a2bfe26"},{url:"/images/logos/google.png",revision:"41ff0a905ace8cadde561ec66af3941f"},{url:"/images/logos/gumroad.png",revision:"2dd09959611056b215a4fef108df479e"},{url:"/images/logos/mastercard-label.png",revision:"fcfc0a7189eadccbbcf8340425a70cb2"},{url:"/images/logos/slack.png",revision:"9fbbe9eef53d01add1ef2380f8ff7f8e"},{url:"/images/logos/stripe.png",revision:"30cdd89ccd014ad0e25c961f3949bf40"},{url:"/images/misc/chart.png",revision:"e9a4209579a3a37f43f9bd5ee6d80a7d"},{url:"/images/misc/materio-pro-banner.png",revision:"cf402f3d6be95ae625d87f2538e149fe"},{url:"/images/misc/paypal.png",revision:"535e87ebab93da7c9a89f9052d3ead82"},{url:"/images/misc/triangle-dark.png",revision:"b7cae01e3e1c0b922a339887dc949c7a"},{url:"/images/misc/triangle-light.png",revision:"36a91c21c5a5458f7ab4b974384e021d"},{url:"/images/misc/trophy.png",revision:"1b770c2a9c2e590016318544a3cf121c"},{url:"/images/misc/upgrade-banner-dark.png",revision:"c0bf8376c5f6fc941a64f8213a14dc0f"},{url:"/images/misc/upgrade-banner-light.png",revision:"8884f0aff69d12d0bb758e5bd9e48ea1"},{url:"/images/pages/401.png",revision:"a9f4d9e807c51516446f1b8951338cd5"},{url:"/images/pages/404.png",revision:"a34e6dc7af4a8bd1544bea747557fe17"},{url:"/images/pages/500.png",revision:"d9b604394239ec34491236235efed613"},{url:"/images/pages/auth-v1-mask-dark.png",revision:"b36861fb491e66a410d3aaf454ae240f"},{url:"/images/pages/auth-v1-mask-light.png",revision:"a2b8c84f88b7d9735b1ad214d0efb36e"},{url:"/images/pages/auth-v1-tree-2.png",revision:"3a4977b8b50e579d01db97cfaaf4a1b1"},{url:"/images/pages/auth-v1-tree.png",revision:"b874842ce6114ec5f83893b00e0a189c"},{url:"/images/pages/misc-mask-dark.png",revision:"a671883dacd46f48d52a0ab595020a21"},{url:"/images/pages/misc-mask-light.png",revision:"9b4542c8966961abb7947da8ecd11c01"},{url:"/images/pages/pose-m-1.png",revision:"dac21df98bc34f015ef84b80f863b234"},{url:"/images/pages/tree-2.png",revision:"bc9e42c5e84f5d5b7cf947af2183a8a5"},{url:"/images/pages/tree-3.png",revision:"89b446eaaed5d2cf8010737706d4ae90"},{url:"/images/pages/tree.png",revision:"6349bf72b77236b20f7f2005d7a414cf"},{url:"/manifest.json",revision:"85301501f1fb7ae8646fcfa9da39ebd3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));