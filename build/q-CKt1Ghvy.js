import{j as de,c as _e,C as ve,d as pe,D as me,R as fe,e as ye,f as he,h as Se,i as Ce,k as be,_ as q,m as s,n as A,o as K,l as ne,q as w,r as ge,t as re,Q as se,v as ie,w as we,x as Z,y as $,z as I,A as qe,B as Ee,E as Le,F as Pe}from"./q-BtSOQMO8.js";import{t as Re,a as ke,p as M,v as Ie,r as B,s as y,x as De,l as Te,q as Q,S as $e,_hW as Y,g as ae,y as Ae,z as le,n as Oe,A as je}from"./q-CyySC4Bf.js";const xe=i=>{Re(Q(()=>q(()=>Promise.resolve().then(()=>Ve),void 0),"s_HZGrw1nSLLM"));const n=de();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const h=ke("url");if(!h)throw new Error("Missing Qwik URL Env Data");const v=new URL(h),a=M({url:v,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),E={},d=Ie(M(n.response.loaders,{deep:!1})),m=B({type:"initial",dest:v,forceReload:!1,replaceState:!1,scroll:!0}),S=M(_e),L=M({headings:void 0,menu:void 0}),l=B(),t=n.response.action,_=t?n.response.loaders[t]:void 0,c=B(_?{id:t,data:n.response.formData,output:{result:_,status:n.response.status}}:void 0),P=Q(()=>q(()=>Promise.resolve().then(()=>He),void 0),"s_gcjc0zq0KKc"),O=Q(()=>q(()=>Promise.resolve().then(()=>Be),void 0),"s_Ce8fisehh7c",[c,E,m,a]);return y(ve,L),y(pe,l),y(me,S),y(fe,a),y(ye,O),y(he,d),y(Se,c),y(Ce,m),y(be,P),De(Q(()=>q(()=>Promise.resolve().then(()=>Me),void 0),"s_CzFzqDZksq8",[c,L,l,S,n,O,d,E,i,m,a])),Te($e,null,3,"7n_3")},Fe=Object.freeze(Object.defineProperty({__proto__:null,s_T5vgmBbO9Is:xe},Symbol.toStringTag,{value:"Module"})),ze=i=>(s.$handler$||(s.$handler$=n=>{if(A.navCount++,!s.$cbs$)return;[...s.$cbs$.values()].map(v=>v.resolved?v.resolved():v()).some(Boolean)&&(n.preventDefault(),n.returnValue=!0)}),(s.$cbs$||(s.$cbs$=new Set)).add(i),i.resolve(),window.addEventListener("beforeunload",s.$handler$),()=>{s.$cbs$&&(s.$cbs$.delete(i),s.$cbs$.size||(s.$cbs$=void 0,window.removeEventListener("beforeunload",s.$handler$)))}),He=Object.freeze(Object.defineProperty({__proto__:null,_hW:Y,s_gcjc0zq0KKc:ze},Symbol.toStringTag,{value:"Module"}));const oe=()=>q(()=>import("./q-CVg9NJOS.js"),[]),F=[["/",[oe,()=>q(()=>import("./q-eszyy-3X.js"),[])]],["about/",[oe,()=>q(()=>import("./q-Bbvv90dy.js"),[])]]],W=[];const G=!0;const Ue=({track:i})=>{const[n,h,v,a,E,d,m,S,L,l,t]=ae();async function _(){var J;const[c,P]=i(()=>[l.value,n.value]),O=Ae(""),R=t.url,f=P?"form":c.type,ce=c.replaceState;let r,D,V=null,j;{r=new URL(c.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let x=K(F,W,G,r.pathname);j=le();const z=D=await ne(r,j,{action:P,clearCache:!0});if(!z){l.untrackedValue={type:f,dest:r};return}const H=z.href,U=new URL(H,r);w(U,r)||(r=U,x=K(F,W,G,r.pathname));try{V=await x}catch{window.location.href=H;return}}if(V){const[x,z,H,U]=V,T=H,ue=T[T.length-1],X=f==="form"&&!w(r,R);c.dest.search&&!X&&(r.search=c.dest.search),w(r,R)||(t.prevUrl=R),t.url=r,t.params={...z},l.untrackedValue={type:f,dest:r};const k=ge(D,t,T,O);h.headings=ue.headings,h.menu=U,v.value=Oe(T),a.links=k.links,a.meta=k.meta,a.styles=k.styles,a.scripts=k.scripts,a.title=k.title,a.frontmatter=k.frontmatter;{L.viewTransition!==!1&&(document.__q_view_transition__=!0);let ee;f==="popstate"&&(ee=re());const b=document.getElementById(se)??document.documentElement;(c.scroll&&(!c.forceReload||!w(r,R))&&(f==="link"||f==="popstate")||X)&&(document.__q_scroll_restore__=()=>ie(f,r,R,b,ee));const te=D==null?void 0:D.loaders,e=window;if(te&&Object.assign(m,te),we.clear(),!e._qCitySPA){if(e._qCitySPA=!0,history.scrollRestoration="manual",e.addEventListener("popstate",()=>{e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),d(location.href,{type:"popstate"})}),e.removeEventListener("popstate",e._qCityInitPopstate),e._qCityInitPopstate=void 0,!e._qCityHistoryPatch){e._qCityHistoryPatch=!0;const u=history.pushState,C=history.replaceState,g=o=>(o===null||typeof o>"u"?o={}:(o==null?void 0:o.constructor)!==Object&&(o={_data:o}),o._qCityScroll=o._qCityScroll||I(b),o);history.pushState=(o,p,N)=>(o=g(o),u.call(history,o,p,N)),history.replaceState=(o,p,N)=>(o=g(o),C.call(history,o,p,N))}document.body.addEventListener("click",u=>{if(u.defaultPrevented)return;const C=u.target.closest("a[href]");if(C&&!C.hasAttribute("preventdefault:click")){const g=C.getAttribute("href"),o=new URL(location.href),p=new URL(g,o);if(Z(p,o)&&w(p,o)){if(u.preventDefault(),!p.hash&&!p.href.endsWith("#")){p.href!==o.href&&history.pushState(null,"",p),e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce),$({...I(b),x:0,y:0}),location.reload();return}d(C.getAttribute("href"))}}}),document.body.removeEventListener("click",e._qCityInitAnchors),e._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(e._qCityScrollEnabled&&document.visibilityState==="hidden"){const u=I(b);$(u)}},{passive:!0}),document.removeEventListener("visibilitychange",e._qCityInitVisibility),e._qCityInitVisibility=void 0),e.addEventListener("scroll",()=>{e._qCityScrollEnabled&&(clearTimeout(e._qCityScrollDebounce),e._qCityScrollDebounce=setTimeout(()=>{const u=I(b);$(u),e._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",e._qCityInitScroll),e._qCityInitScroll=void 0,(J=e._qCityBootstrap)==null||J.remove(),e._qCityBootstrap=void 0,qe.resolve()}if(f!=="popstate"){e._qCityScrollEnabled=!1,clearTimeout(e._qCityScrollDebounce);const u=I(b);$(u)}Ee(window,f,R,r,ce),je(j).then(()=>{var g;Le(j).setAttribute("q:route",x);const C=I(b);$(C),e._qCityScrollEnabled=!0,t.isNavigating=!1,(g=S.r)==null||g.call(S)})}}}_()},Me=Object.freeze(Object.defineProperty({__proto__:null,_hW:Y,s_CzFzqDZksq8:Ue},Symbol.toStringTag,{value:"Module"})),Qe=":root{view-transition-name:none}",Ve=Object.freeze(Object.defineProperty({__proto__:null,s_HZGrw1nSLLM:Qe},Symbol.toStringTag,{value:"Module"})),Ne=async(i,n)=>{const[h,v,a,E]=ae(),{type:d="link",forceReload:m=i===void 0,replaceState:S=!1,scroll:L=!0}=typeof n=="object"?n:{forceReload:n};A.navCount++;const l=a.value.dest,t=i===void 0?l:typeof i=="number"?i:Pe(i,E.url);if(s.$cbs$&&(m||typeof t=="number"||!w(t,l)||!Z(t,l))){const _=A.navCount,c=await Promise.all([...s.$cbs$.values()].map(P=>P(t)));if(_!==A.navCount||c.some(Boolean)){_===A.navCount&&d==="popstate"&&history.pushState(null,"",l);return}}if(typeof t=="number"){history.go(t);return}if(!Z(t,l)){location.href=t.href;return}if(!m&&w(t,l)){{d==="link"&&t.href!==location.href&&history.pushState(null,"",t);const _=document.getElementById(se)??document.documentElement;ie(d,t,new URL(location.href),_,re()),d==="popstate"&&(window._qCityScrollEnabled=!0)}return}return a.value={type:d,dest:t,forceReload:m,replaceState:S,scroll:L},ne(t,le()),K(F,W,G,t.pathname),h.value=void 0,E.isNavigating=!0,new Promise(_=>{v.r=_})},Be=Object.freeze(Object.defineProperty({__proto__:null,_hW:Y,s_Ce8fisehh7c:Ne},Symbol.toStringTag,{value:"Module"}));export{Ue as a,Qe as b,Ne as c,Fe as i,ze as s,xe as s_T5vgmBbO9Is};
