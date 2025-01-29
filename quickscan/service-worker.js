/* Qwik Service Worker */
const appBundles=[["../service-worker.js",[]],["q-B12nlV1T.js",[2]],["q-B1W7zIFp.js",[16],["nboVigBg0ks"]],["q-BB0SRVP1.js",[20],["DSLcdUPcclU"]],["q-BCQkB4Df.js",[2],["wEHZoLh3gL0"]],["q-BKQvYmoT.js",[16],["oMUCIDbC4jw"]],["q-BP4995Fi.js",[2]],["q-BaJzpTQy.js",[2],["VKFlAWJuVm8"]],["q-Bn22rVum.js",[2]],["q-C-Tm1ryd.js",[2],["T5vgmBbO9Is"]],["q-C3xAit3a.js",[9],["Ce8fisehh7c"]],["q-CEktjfAI.js",[15],["rX5cMbfEKc4"]],["q-CVFoL2dN.js",[9],["CzFzqDZksq8"]],["q-C_o6nVgX.js",[16],["dT0sDkUStYI"]],["q-CrGNLxAn.js",[2],["umKqI0HI4jQ"]],["q-CvFc8aCf.js",[2],["67Te6M05Y58"]],["q-CyySC4Bf.js",[],["5l07Tx0rV0o"]],["q-DFf48W3y.js",[2],["iQHCyDgpd94"]],["q-DZT2P-u1.js",[20],["hs55Cc65pvA"]],["q-Db39UBGR.js",[2],["A1vH9jLYSwI"]],["q-DbNJ9qmw.js",[2],["B0lqk5IDDy4"]],["q-DmcEoUT8.js",[23],["njo24CtgHig"]],["q-DoLq0fGY.js",[2],["tntnak2DhJ8"]],["q-DwDcmJ0L.js",[2],["W0Ju7nqQyQQ"]],["q-DxwhJn5L.js",[2]],["q-KSqC5kb-.js",[23],["oq7yK00VobY"]],["q-N4AVAC7M.js",[2],["ErGxcZriAKc"]],["q-PAwURvDf.js",[9],["gcjc0zq0KKc"]],["q-R8Q43ERN.js",[2]],["q-RTGnQR7L.js",[2],["0vphQYqOdZI"]],["q-cY82b6KO.js",[2],["F0a0TFioVHk"]],["q-hoez6dFt.js",[16],["Y6rHSFMzlsA"]],["q-nl9I8Y3Q.js",[],["oiecSopNkUM"]],["q-xurHJ-RC.js",[20],["a00ofFvodf4"]],["q-zL5xzfVh.js",[9],["HZGrw1nSLLM"]]];
const libraryBundleIds=[9];
const linkBundles=[[/^\/quickscan\/$/,[24,7,1,20]],[/^\/quickscan\/about\/?$/,[24,7,28,13]]];
const p=(t,e)=>e.filter(n=>!t.some(c=>n.endsWith(c[0]))),q=(t,e)=>!!e&&!B(e),B=t=>{const e=t.headers.get("Cache-Control")||"";return e.includes("no-cache")||e.includes("max-age=0")},N=(t,e)=>t.some(n=>e.endsWith("/"+n[0])),W=(t,e)=>t.find(n=>n[0]===e),g=(t,e)=>e.map(n=>t[n]?t[n][0]:null),w=(t,e)=>e.map(n=>t.get(n)).filter(n=>n!=null),C=t=>{const e=new Map;for(const n of t){const c=n[2];if(c)for(const o of c)e.set(o,n[0])}return e},k=(t,e,n,c)=>new Promise((o,a)=>{const s=c.url,r=n.get(s);if(r)r.push([o,a]);else{const l=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d]of i)d(f.clone())}else o(f.clone())},u=f=>{const i=n.get(s);if(i){n.delete(s);for(const[d,U]of i)U(f)}else a(f)};n.set(s,[[o,a]]),t.match(s).then(f=>{if(q(c,f))l(f);else return e(c).then(async i=>{i.ok&&await t.put(s,i.clone()),l(i)})}).catch(f=>t.match(s).then(i=>{i?l(i):u(f)}))}}),y="QwikBuild",b=new Set,A=new Map,h=[],m=(t,e,n,c,o,a=!1)=>{Array.isArray(o)&&v(o,t,c,a),L(e,n)};function v(t,e,n,c){for(const o of t)try{const a=W(e,o);if(a){const s=g(e,a[1]),r=new URL(o,n).href,l=h.indexOf(r);l>-1?c&&(h.splice(l,1),h.unshift(r)):(c?h.unshift(r):h.push(r),v(s,e,n,c))}}catch(a){console.error(a)}}function L(t,e){for(;h.length>0&&A.size<6;){const n=h.shift();if(!b.has(n)){const c=new Request(n);b.add(n),k(t,e,A,c).catch(()=>{b.delete(n)}).finally(()=>L(t,e))}}}const E=(t,e,n,c,o,a,s)=>{try{m(t,c,o,a,g(t,e))}catch(r){console.error(r)}for(const r of s)try{for(const l of n){const[u,f]=l;if(u.test(r)){m(t,c,o,a,g(t,f));break}}}catch(l){console.error(l)}},T=(t,e,n,c)=>{try{const{baseUrl:o,requestedBundleName:a}=x(c);m(t,e,n,o,[a],!0)}catch(o){console.error(o)}};function x(t){const e=t.href.split("/"),n=e[e.length-1];return e[e.length-1]="",{baseUrl:new URL(e.join("/")),requestedBundleName:n}}const P=(t,e,n,c)=>{const o=t.fetch.bind(t),a=C(e);t.addEventListener("activate",s=>{(async()=>{try{s.waitUntil(t.caches.keys().then(i=>Promise.all(i.map(d=>{if(d!==y)return caches.delete(d)}))));const r=await t.caches.open(y),u=(await r.keys()).map(i=>i.url),f=p(e,u);await Promise.all(f.map(i=>r.delete(i)))}catch(r){console.error(r)}})()}),t.addEventListener("message",async({data:s})=>{if(s.type==="qprefetch"&&typeof s.base=="string"){const r=await t.caches.open(y),l=new URL(s.base,t.origin);Array.isArray(s.links)&&E(e,n,c,r,o,l,s.links),Array.isArray(s.bundles)&&m(e,r,o,l,s.bundles),Array.isArray(s.symbols)&&m(e,r,o,l,w(a,s.symbols))}}),t.addEventListener("fetch",s=>{const r=s.request;if(r.method==="GET"){const l=new URL(r.url);N(e,l.pathname)&&s.respondWith(t.caches.open(y).then(u=>(T(e,u,o,l),k(u,o,A,r))))}})},Q=()=>{typeof self<"u"&&typeof appBundles<"u"&&P(self,appBundles,libraryBundleIds,linkBundles)};Q();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
