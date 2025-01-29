import{e as K,_ as U,u as D,n as $,a as G,c as m,q as y,w as T,b as P,d as z,f as Y,g as Z,h as J,i as X,j as ee,k as O,l as te,S as ne,_hW as p}from"./q-CyySC4Bf.js";const re=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),se=function(e){return"/"+e},L={},C=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=se(c),c in L)return;L[c]=!0;const i=c.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":re,i||(l.as="script",l.crossOrigin=""),l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),i)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},oe='((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',Te=m("qc-s"),Oe=m("qc-c"),Le=m("qc-ic"),ae=m("qc-h"),ce=m("qc-l"),ie=m("qc-n"),Ie=m("qc-a"),je=m("qc-ir"),Ne=m("qc-p"),We=K(y(()=>C(()=>import("./q-nl9I8Y3Q.js"),[]),"s_oiecSopNkUM")),Ve=P(y(()=>C(()=>import("./q-B0Hcspf3.js"),[]),"s_umKqI0HI4jQ")),I=new WeakMap,S=new Map,j=new Set,le="qaction",xe="qfunc",Qe="qdata",w=e=>e.pathname+e.search+e.hash,_=(e,t)=>new URL(e,t.href),ue=(e,t)=>e.origin===t.origin,N=e=>e.endsWith("/")?e:e+"/",F=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&N(e)===N(t)},fe=(e,t)=>e.search===t.search,k=(e,t)=>fe(e,t)&&F(e,t),he=(e,t,n)=>{let r=t??"";return n&&(r+=(r?"&":"?")+le+"="+encodeURIComponent(n.id)),e+(e.endsWith("/")?"":"/")+"q-data.json"+r},Me=(e,t)=>{const n=e.href;if(typeof n=="string"&&typeof e.target!="string"&&!e.reload)try{const r=_(n.trim(),t.url),s=_("",t.url);if(ue(r,s))return w(r)}catch(r){console.error(r)}else if(e.reload)return w(_("",t.url));return null},Ue=(e,t)=>{if(e){const n=_(e,t.url),r=_("",t.url);return!k(n,r)}return!1},pe=(e,t)=>{if(e){const n=_(e,t.url),r=_("",t.url);return!F(n,r)}return!1},de=e=>e&&typeof e.then=="function",Fe=(e,t,n,r)=>{const s=me(),a={head:s,withLocale:c=>T(r,c),resolveValue:c=>{const i=c.__id;if(c.__brand==="server_loader"&&!(i in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const u=e.loaders[i];if(de(u))throw new Error("Loaders returning a promise can not be resolved for the head function.");return u},...t};for(let c=n.length-1;c>=0;c--){const i=n[c]&&n[c].head;i&&(typeof i=="function"?W(s,T(r,()=>i(a))):typeof i=="object"&&W(s,i))}return a.head},W=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),E(e.meta,t.meta),E(e.links,t.links),E(e.styles,t.styles),E(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},E=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const r=e.findIndex(s=>s.key===n.key);if(r>-1){e[r]=n;continue}}e.push(n)}},me=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function _e(e,t){const n=Q(e),r=V(e),s=Q(t),o=V(t);return B(e,n,r,t,s,o)}function B(e,t,n,r,s,o){let a=null;for(;t<n;){const c=e.charCodeAt(t++),i=r.charCodeAt(s++);if(c===91){const u=H(e,t),l=t+(u?3:0),f=A(e,l,n,93),h=e.substring(l,f),d=A(e,f+1,n,47),g=e.substring(f+1,d);t=f+1;const v=s-1;if(u){const R=ye(h,g,r,v,o,e,t+g.length+1,n);if(R)return Object.assign(a||(a={}),R)}const b=A(r,v,o,47,g);if(b==-1)return null;const q=r.substring(v,b);if(!u&&!g&&!q)return null;s=b,(a||(a={}))[h]=decodeURIComponent(q)}else if(c!==i&&!(isNaN(i)&&ge(e,t)))return null}return x(e,t)&&x(r,s)?a||{}:null}function ge(e,t){return e.charCodeAt(t)===91&&H(e,t+1)}function V(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function x(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function Q(e){return e.charCodeAt(0)===47?1:0}function H(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function A(e,t,n,r,s=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const o=s.length;for(let a=0;a<o;a++)if(e.charCodeAt(t-o+a)!==s.charCodeAt(a))return-1;return t-o}function ye(e,t,n,r,s,o,a,c){n.charCodeAt(r)===47&&r++;let i=s;const u=t+"/";for(;i>=r;){const l=B(o,a,c,n,i,s);if(l){let h=n.substring(r,Math.min(i,s));return h.endsWith(u)&&(h=h.substring(0,h.length-u.length)),l[e]=decodeURIComponent(h),l}const f=Ce(n,r,u,i,r-1)+u.length;if(i===f)break;i=f}return null}function Ce(e,t,n,r,s){let o=e.lastIndexOf(n,r);return o==r-n.length&&(o=e.lastIndexOf(n,r-n.length-1)),o>t?o:s}const Be=async(e,t,n,r)=>{if(!Array.isArray(e))return null;for(const s of e){const o=s[0],a=_e(o,r);if(!a)continue;const c=s[1],i=s[3],u=new Array(c.length),l=[];c.forEach((d,g)=>{M(d,l,v=>u[g]=v)});const f=ve(t,r);let h;return M(f,l,d=>h=d==null?void 0:d.default),l.length>0&&await Promise.all(l),[o,a,u,h,i]}return null},M=(e,t,n,r)=>{if(typeof e=="function"){const s=I.get(e);if(s)n(s);else{const o=e();typeof o.then=="function"?t.push(o.then(a=>{I.set(e,a),n(a)})):o&&n(o)}}},ve=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},He=(e,t,n,r,s=!1)=>{if(t!=="popstate"){const o=k(n,r),a=n.hash===r.hash;if(!o||!a){const c={_qCityScroll:Se()};s?e.history.replaceState(c,"",w(r)):e.history.pushState(c,"",w(r))}}},Se=()=>({x:0,y:0,w:0,h:0}),Ee=e=>{e=e.endsWith("/")?e:e+"/",j.has(e)||(j.add(e),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[e]}})))},Ke=async(e,t,n)=>{const r=e.pathname,s=e.search,o=he(r,s,n==null?void 0:n.action);let a;n!=null&&n.action||(a=S.get(o)),(n==null?void 0:n.prefetchSymbols)!==!1&&Ee(r);let c;if(!a){const i=we(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),a=fetch(o,i).then(u=>{if(u.redirected){const l=new URL(u.url);if(!l.pathname.endsWith("/q-data.json")||l.origin!==location.origin){location.href=l.href;return}}if((u.headers.get("content-type")||"").includes("json"))return u.text().then(l=>{const f=U(l,t);if(!f){location.href=e.href;return}if(n!=null&&n.clearCache&&S.delete(o),f.redirect)location.href=f.redirect;else if(n!=null&&n.action){const{action:h}=n,d=f.loaders[h.id];c=()=>{h.resolve({status:u.status,result:d})}}return f});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=e.href)}),n!=null&&n.action||S.set(o,a)}return a.then(i=>(i||S.delete(o),c&&c(),i))},we=e=>{const t=e==null?void 0:e.data;return t?t instanceof FormData?{method:"POST",body:t}:{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json, charset=UTF-8"}}:{cache:"no-cache",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}},$e=()=>D(ae),Ge=()=>D(ce),be=()=>D(ie),ze=()=>$(G("qwikcity")),Ye=(e,t,n,r,s)=>{e==="popstate"&&s?r.scrollTo(s.x,s.y):(e==="link"||e==="form")&&(Ae(t,n)||r.scrollTo(0,0))},Ae=(e,t)=>{const n=e.hash.slice(1),r=n&&document.getElementById(n);return r?(r.scrollIntoView(),!0):!!(!r&&e.hash&&k(e,t))},Ze=e=>({x:e.scrollLeft,y:e.scrollTop,w:Math.max(e.scrollWidth,e.clientWidth),h:Math.max(e.scrollHeight,e.clientHeight)}),Je=()=>{const e=history.state;return e==null?void 0:e._qCityScroll},Xe=e=>{const t=history.state||{};t._qCityScroll=e,history.replaceState(t,"")},et="_qCityScroller",tt={},nt={navCount:0},rt=P(y(()=>C(()=>import("./q-CKt1Ghvy.js").then(e=>e.i),[]),"s_T5vgmBbO9Is"));function st(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentElement;return e.closest("[q\\:container]")}const ot=P(y(()=>C(()=>import("./q-BeD8HbOm.js"),[]),"s_njo24CtgHig")),at=e=>z("script",{nonce:Y(e,"nonce")},{dangerouslySetInnerHTML:oe},null,3,"7n_7"),ct=async function*(e,t,n){const r=e.getReader();try{let s="";const o=new TextDecoder;for(;!(n!=null&&n.aborted);){const a=await r.read();if(a.done)break;s+=o.decode(a.value,{stream:!0});const c=s.split(/\n/);s=c.pop();for(const i of c)yield await U(i,t)}}finally{r.releaseLock()}},De=(e,t)=>{t.getAttribute("data-spa-reset")==="true"&&t.reset(),t.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))},Pe=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_nboVigBg0ks:De},Symbol.toStringTag,{value:"Module"})),ke=async(e,t)=>{const[n]=Z(),r=new FormData(t),s=new URLSearchParams;r.forEach((o,a)=>{typeof o=="string"&&s.append(a,o)}),await n("?"+s.toString(),{type:"form",forceReload:!0})},qe=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_ErGxcZriAKc:ke},Symbol.toStringTag,{value:"Module"})),it=e=>{const t=J(e,["action","spaReset","reloadDocument","onSubmit$"]),n=be();return X("form",{action:"get",get"preventdefault:submit"(){return!e.reloadDocument},get"data-spa-reset"(){return e.spaReset?"true":void 0},...t,children:te(ne,null,3,"7n_8"),onSubmit$:[...Array.isArray(e.onSubmit$)?e.onSubmit$:[e.onSubmit$],y(()=>C(()=>Promise.resolve().then(()=>qe),void 0),"s_ErGxcZriAKc",[n]),y(()=>C(()=>Promise.resolve().then(()=>Pe),void 0),"s_nboVigBg0ks")]},{action:ee,"preventdefault:submit":O(r=>!r.reloadDocument,[e]),"data-spa-reset":O(r=>r.spaReset?"true":void 0,[e])},0,"7n_9")};export{We as A,He as B,Oe as C,ae as D,st as E,_ as F,xe as G,ct as H,Qe as I,$e as J,rt as K,ot as L,Ve as M,ke as N,it as O,et as Q,ce as R,at as S,C as _,p as _hW,Ge as a,pe as b,me as c,Le as d,ie as e,Te as f,Me as g,Ie as h,je as i,ze as j,Ne as k,Ke as l,tt as m,nt as n,Be as o,Ee as p,k as q,Fe as r,Ue as s,De as s_nboVigBg0ks,Je as t,be as u,Ye as v,S as w,ue as x,Xe as y,Ze as z};
