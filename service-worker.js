if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let l={};const d=e=>s(e,a),n={module:{uri:a},exports:l,require:d};i[a]=Promise.all(r.map((e=>n[e]||d(e)))).then((e=>(c(...e),l)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/01/11/hello-world/index.html",revision:"de6b586aadd32553f099a594f8620b88"},{url:"archives/2023/01/index.html",revision:"26147ce9755f80df72a84204625ec82e"},{url:"archives/2023/index.html",revision:"80ab4e6fbbee601962da7a8aafaf22e8"},{url:"archives/index.html",revision:"b789bc4654178869fdc2c7244ba9ca57"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"d7c35c4c16516e06089cd889a9b3fc93"},{url:"css/index.css",revision:"e569ce31b16ab2bf2981a6d5e1077e62"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"781e04752a744fea5f7da93dce6f6c5e"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"3273f21b62ca5269762758d4e4e2c14c"},{url:"js/main.js",revision:"b28662bf81abe2838d20faf2980f0034"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"58cb9443474ea5d84a1c4ac806c8b4b7"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"d3be81bb01a18b9d82988b9e058c2f18"},{url:"tags/index.html",revision:"8e46375c4247997c9931267098e35d91"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
