if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),d={module:{uri:t},exports:c,require:o};s[t]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-e24dcd3f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/index.css",revision:"c39266c92f99e943dc388c4af91908a5"},{url:"index.html",revision:"3e6f15431b90a8ec6d609e39c88d7af7"},{url:"js/script.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"manifest.json",revision:"dfd85835e58916283f04dc053954c49e"},{url:"uwuntu.png",revision:"72137c2f30a52faac97addbfbed867b9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
