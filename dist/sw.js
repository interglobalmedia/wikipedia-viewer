if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>i(e,c),l={module:{uri:c},exports:t,require:o};s[c]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"../dist/favicon.ico",revision:"b7f52e827c25f773d50f52b9afac0c32"},{url:"index.html",revision:"436098f4df9c3239d28166ac33d39e4e"},{url:"scripts/981.e68e6bd137967e29d1c8.chunk.js",revision:null},{url:"scripts/main.73ec74cff4d42afe8a5e.chunk.js",revision:null},{url:"scripts/runtime.d444ad0689c7e1fa0097.chunk.js",revision:null},{url:"styles/main.a406c5dec6ea9b9a9e08.css",revision:null}],{})}));
