if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),l={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"../dist/favicon.ico",revision:"b7f52e827c25f773d50f52b9afac0c32"},{url:"index.html",revision:"598a6c8c2bba90dd58bd5887d8174a0d"},{url:"scripts/981.e68e6bd137967e29d1c8.chunk.js",revision:null},{url:"scripts/main.eff8b9b262be33c6dae6.chunk.js",revision:null},{url:"scripts/runtime.d444ad0689c7e1fa0097.chunk.js",revision:null},{url:"styles/main.fdd32aab8fc554520a01.css",revision:null}],{})}));
