if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const o=e=>i(e,r),f={module:{uri:r},exports:t,require:o};s[r]=Promise.all(c.map((e=>f[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-faaa562d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6f553ec2.css",revision:null},{url:"assets/index-a0665d0b.js",revision:null},{url:"fun/fun.js",revision:"65c245b3e9303e964a7cb7201fdcfef4"},{url:"fun/mouse/script.js",revision:"8413f618be3ee33e3595ee0484927b75"},{url:"index.html",revision:"06d8ce6c42edce1fbd5d4f3de48e61af"},{url:"Pio/static/load.js",revision:"ee67938454ade365c6c43a9622a599e5"},{url:"Pio/static/pio_sdk4.js",revision:"686c442839fdc7f1001d70892b1e5359"},{url:"Pio/static/pio.css",revision:"f269430422951b6f54177503e5acd9fe"},{url:"Pio/static/pio.js",revision:"102b8bbcdf18b92aff19c9f7d94aa503"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"e99cfe57ce686391eeb8a90883a3a5c9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
