var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,u,s,f,l,d,c,p,h,v,b,g,m,y,w,S,P,E={817:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(819),t.e(815),t.e(509)]).then((()=>()=>t(509))),"./extension":()=>Promise.all([t.e(819),t.e(815),t.e(122)]).then((()=>()=>t(122)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},j={};function k(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={exports:{}};return E[e](t,t.exports,k),t.exports}k.m=E,k.c=j,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{122:"f9beb8c2885b36469fdd",287:"1f872f30ec5ffd00c31b",509:"46a6095d7b540face32a",815:"160357d4abe2c87231df",819:"badc5d48ed3502f8d9eb"}[e]+".js?v="+{122:"f9beb8c2885b36469fdd",287:"1f872f30ec5ffd00c31b",509:"46a6095d7b540face32a",815:"160357d4abe2c87231df",819:"badc5d48ed3502f8d9eb"}[e],k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="ipycanvas:",k.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+o){i=l;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var a=k.S[t],i="ipycanvas",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(u("buffer","4.9.2",(()=>k.e(287).then((()=>()=>k(287))))),u("ipycanvas","0.13.3",(()=>Promise.all([k.e(819),k.e(815),k.e(509)]).then((()=>()=>k(509)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;k.g.importScripts&&(e=k.g.location+"");var r=k.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+s()+")":1===u?"("+s()+" || "+s()+")":2===u?i.pop()+" "+i.pop():o(u))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,s=!0;;u++,i++){var f,l,d=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(l=(typeof(f=r[i]))[0]))return!s||("u"==d?u>n&&!o:""==d!=o);if("u"==l){if(!s||"u"!=d)return!1}else if(s)if(d==l)if(u<=n){if(f!=e[u])return!1}else{if(o?f>e[u]:f<e[u])return!1;f!=e[u]&&(s=!1)}else if("s"!=d&&"n"!=d){if(o||u<=n)return!1;s=!1,u--}else{if(u<=n||l<d!=o)return!1;s=!1}else"s"!=d&&"n"!=d&&(s=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>e&&k.o(e,r),u=e=>(e.loaded=1,e.get()),s=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),f=(e,r,t,o)=>{var i=o?s(e[r]):e[r];return(r=Object.keys(i).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&i[r]},l=(e,r,t)=>{var o=t?s(e[r]):e[r];return Object.keys(o).reduce(((e,r)=>!e||!o[e].loaded&&n(e,r)?r:e),0)},d=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",c=(e,r,t,n,a)=>{var i=e[t];return"No satisfying version ("+o(n)+")"+(a?" for eager consumption":"")+" of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(i).map((e=>e+" from "+i[e].from)).join(", ")},p=e=>{throw new Error(e)},h=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},b=(e,r,t)=>t?t():((e,r)=>p("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),g=(v=e=>function(r,t,n,o,a){var i=k.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,k.S[r],t,!1,o,a)):e(r,k.S[r],t,n,o,a)})(((e,r,t,n,o,a)=>{if(!i(r,t))return b(e,t,a);var s=f(r,t,o,n);return s?u(s):a?a():void p(c(r,e,t,o,n))})),m=v(((e,r,t,n,o,s)=>{if(!i(r,t))return b(e,t,s);var f=l(r,t,n);return a(o,f)||h(d(r,t,f,o)),u(r[t][f])})),y={},w={540:()=>g("default","buffer",!1,[1,4,9,2],(()=>k.e(287).then((()=>()=>k(287))))),615:()=>m("default","@jupyter-widgets/base",!1,[,[1,6],[1,5],[1,4],[1,3],[1,2,0,1],1,1,1,1])},S={815:[540,615]},P={},k.f.consumes=(e,r)=>{k.o(S,e)&&S[e].forEach((e=>{if(k.o(y,e))return r.push(y[e]);if(!P[e]){var t=r=>{y[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}};P[e]=!0;var n=r=>{delete y[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var o=w[e]();o.then?r.push(y[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{var e={73:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=k.p+k.u(r),i=new Error;k.l(a,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)k.o(i,n)&&(k.m[n]=i[n]);u&&u(k)}for(r&&r(t);s<a.length;s++)o=a[s],k.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkipycanvas=self.webpackChunkipycanvas||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var T=k(817);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB).ipycanvas=T})();