if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const l=e=>s(e,a),n={module:{uri:a},exports:c,require:l};i[a]=Promise.all(r.map((e=>n[e]||l(e)))).then((e=>(d(...e),c)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/01/11/hello-world/index.html",revision:"e0c3b6c0c512eb5aa672a26ad7b2af86"},{url:"2023/01/12/test/index.html",revision:"78611d89feee11078038f4e709e41dc0"},{url:"2023/01/13/Obsidian中的md语法/index.html",revision:"f23a18a999421dda0d6ef0bd55d5088c"},{url:"archives/2023/01/index.html",revision:"44a8a0fe9459fdbf702634b901523cdc"},{url:"archives/2023/index.html",revision:"c9b192a04e6cb4b62fa26f851b7986f3"},{url:"archives/index.html",revision:"c97661f1ec8217576134900d5fe0357f"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"54840e0c5a05bb41d038182cbf1e3dfd"},{url:"comments/index.html",revision:"87c28dbecbf1df6bf163e440717b653d"},{url:"css/custom.css",revision:"83429add18384933f659c459ea03a968"},{url:"css/index.css",revision:"18d1384376797d9a5d1a25158db966fd"},{url:"css/progress_bar.css",revision:"75ee841f50186cf741ee00392ef3d9a5"},{url:"css/universe.css",revision:"29715f301360a24d7cfefd7198e0893b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"abe79297eb2b261bebe51979e1adafbd"},{url:"gallery/ohmygirl/index.html",revision:"5b9780304224dc17e7f11abcc543adb6"},{url:"img/069-startup.svg",revision:"446b8525db03453a86394360f7fa66ff"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"37e2de171672c44d24152b9b3b7a4fb2"},{url:"js/main.js",revision:"b28662bf81abe2838d20faf2980f0034"},{url:"js/runtime/runtime.js",revision:"04a663b43b414326a9a70c4ced6a2847"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"58cb9443474ea5d84a1c4ac806c8b4b7"},{url:"js/universe.js",revision:"acb249db19a7104d692d1da13bf1d9ef"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"3ca7ce822f5d90d187948864788e5bcb"},{url:"movies/index.html",revision:"178ba6d9dba6dda4a8ff2caedde94678"},{url:"music/index.html",revision:"1cb28483966fff4b99f017769906a65c"},{url:"tags/index.html",revision:"4200a0228d8340223a762825d7456f20"},{url:"tags/Obsidian/index.html",revision:"31b4578116f296b99e7b18f17823d8d6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
