/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.0.0-beta.3 <https://hydejack.com/>
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,r){"use strict";r.r(t);var n=r(168),a=r(166),o=r(204),i=r(210),l=r(170),c=r(51),s=r(173),u=r(164),d=r(198),p=r(205),b=r(160),y=r(177),h=r(169),m=r(102),v=r(52),f=r(179),O=r.n(f),j=r(185),g=r.n(j),w=r(49),E=r(165),S=r(203),C=r(176);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=e=>{var{background:t,color:r,image:n,overlay:a}=e;return"".concat(r).concat(n||t).concat(""===a?"overlay":"")};var L=new WeakMap;class x{constructor(e){var t=document.getElementById("_main"),r=Array.from(document.styleSheets).find(e=>e.ownerNode&&"_pageStyle"===e.ownerNode.id)||{};this.sidebar=document.getElementById("_sidebar"),this.fadeDuration=e,this.rules=r.cssRules||r.rules,this.prevHash=P(g()(t)),this.themeColorEl=document.querySelector('meta[name="theme-color"]')}fetchImage2(e){var{background:t,image:r}=e;if(t||!r||""===r||"none"===r)return Object(w.a)(null);var n=new URL(r,window.location.origin);return Object(v.e)(n.href,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({method:"GET",headers:{Accept:"image/*"}},function(e){var{protocol:t,host:r}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;return t!==n.protocol||r!==n.host}(n)?{mode:"cors"}:{})).pipe(Object(b.a)(e=>e.blob()),Object(c.a)(e=>URL.createObjectURL(e)),Object(S.a)(()=>Object(w.a)(r)))}fetchImage(e){var t=g()(e),{background:r,color:n,image:a,overlay:o}=t,i=P(t);return i===this.prevHash?Object(E.b)():this.fetchImage2(t).pipe(Object(c.a)(e=>{var l=document.createElement("div");return l.classList.add("sidebar-bg"),"none"!==a&&""===o&&l.classList.add("sidebar-overlay"),r?l.style.background=r:(l.style.backgroundColor=n,e&&(l.style.backgroundImage="url(".concat(e,")"),L.set(l,e))),[l,t,i]}))}updateStyle(){var{color:e="#4fb1ba",themeColor:t="#193747"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.themeColorEl&&window.setTimeout(()=>this.themeColorEl.content=t,250),this.rules)try{var r=O()(e),n=r.darken(.1),a=r.fade(.5);this.rules[0].style.textDecorationColor=a,this.rules[0].style.borderColor=a,this.rules[1].style.textDecorationColor=e,this.rules[1].style.borderColor=e,this.rules[2].style.outlineColor=e,this.rules[3].style.backgroundColor=e,this.rules[3].style.borderColor=e,this.rules[4].style.boxShadow="0 0 0 3px ".concat(r.fade(.5)),this.rules[5].style.backgroundColor=n,this.rules[5].style.borderColor=n,this.rules[6].style.backgroundColor=e,this.rules[6].style.borderColor=e,this.rules[7].style.backgroundColor=n,this.rules[7].style.borderColor=n,this.rules[this.rules.length-1].style.backgroundColor=e}catch(e){0}}fade(e,t){var[r]=e,[n,a,o]=t;return r.parentNode.insertBefore(n,r.nextElementSibling),this.updateStyle(a),this.prevHash=o,Object(v.c)(n,[{opacity:0},{opacity:1}],{duration:this.fadeDuration,easing:"ease"}).pipe(Object(C.a)(()=>{L.has(r)&&URL.revokeObjectURL(L.get(r)),r.parentNode.removeChild(r)}))}}var I=r(163);var _,T=["title"];function B(e,t,r,n){var i=e.pipe(Object(I.a)(e=>{var{flipType:t}=e;return!T.includes(t)}));return Object(a.a)(function(e,t,r,n){var{animationMain:a,settings:i}=n;if(!a)return e;var l=e.pipe(Object(I.a)(e=>{var{flipType:t}=e;return"title"===t}),Object(b.a)(e=>{var{anchor:t}=e;if(!t)return Object(w.a)({});var r=document.createElement("h1");r.classList.add("page-title"),r.textContent=t.textContent,r.style.transformOrigin="left top";var n=a.querySelector(".page");if(!n)return Object(w.a)({});v.d.call(n),n.appendChild(r),a.style.position="fixed",a.style.opacity=1;var o=t.getBoundingClientRect(),l=r.getBoundingClientRect(),c=parseInt(getComputedStyle(t).fontSize,10),s=parseInt(getComputedStyle(r).fontSize,10),d=o.left-l.left,p=o.top-l.top,b=c/s;t.style.opacity=0;var y=[{transform:"translate3d(".concat(d,"px, ").concat(p,"px, 0) scale(").concat(b,")")},{transform:"translate3d(0, 0, 0) scale(1)"}];return Object(v.c)(r,y,i).pipe(Object(u.a)({complete(){a.style.position="absolute"}}))}));return e.pipe(Object(b.a)(e=>{var{flipType:n}=e;return Object(o.a)(t.pipe(Object(I.a)(()=>"title"===n),Object(c.a)(e=>{var{replaceEls:[t]}=e,r=t.querySelector(".page-title, .post-title");return r&&(r.style.opacity=0),r})),r,e=>e).pipe(Object(u.a)(e=>{e&&(e.style.opacity=1),a.style.opacity=0}),Object(C.a)(()=>{a.style.opacity=0}))})).subscribe(),l}(e,t,r,n),i)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}(_=function*(){yield Promise.all([..."fetch"in window?[]:[r.e(1).then(r.bind(null,208))],..."customElements"in window?[]:[r.e(12).then(r.bind(null,186))],..."animate"in Element.prototype?[]:[r.e(11).then(r.t.bind(null,206,7))],..."IntersectionObserver"in window?[]:[r.e(8).then(r.t.bind(null,207,7))]]),yield v.p;var e=/(?:title|file):\s*['"`](.*)['"`]/i,t=[{opacity:1},{opacity:0}],f=[{opacity:0,transform:"translateY(-3rem)"},{opacity:1,transform:"translateY(0)"}],O={duration:350,easing:"ease-out"};function j(e){var t=Object(v.k)("_permalink-template"),r=t.querySelector(".permalink");requestAnimationFrame(()=>(r.href="#".concat(e.id),e.appendChild(t)))}var g=document.querySelector("hy-push-state");if(g){var w,E,S,C=document.querySelector("hy-drawer"),k=document.querySelector("#_navbar > .content > .nav-btn-bar"),q=document.querySelector("link[rel=canonical]"),P=document.querySelector("meta[name=description]"),L=function(e){var t;return null==e||null===(t=e.parentNode)||void 0===t||t.insertBefore(Object(v.k)("_animation-template"),e),null==e?void 0:e.previousElementSibling}(g),I=function(e){return null==e||e.appendChild(Object(v.k)("_loading-template")),null==e?void 0:e.lastElementChild}(k),_=(E=Object(v.k)("_back-template"),S=null==E?void 0:E.children[0],null==E||null===(w=E.querySelector(".nav-btn"))||void 0===w||w.addEventListener("click",()=>window.history.back()),S);if(k&&_){var T=window.matchMedia("(display-mode: standalone)"),D=!!navigator.standalone||T.matches;Object(v.f)(T).pipe(Object(c.a)(e=>e.matches),Object(s.a)(D)).pipe(Object(u.a)(e=>{e?k.prepend(_):_.parentNode===k&&k.removeChild(_)})).subscribe()}var N=(e,t)=>Object(n.a)(g,e).pipe(Object(c.a)(e=>{var{detail:t}=e;return t}),t?Object(c.a)(t):e=>e,Object(d.a)()),R=N("hy-push-state-start",e=>{return Object.assign(e,{flipType:(t=e.anchor,(null==t?void 0:t.classList.contains("flip-title"))?"title":(null==t?void 0:t.classList.contains("flip-project"))?"project":null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"data-flip"))});var t,r}),U=N("hy-push-state-ready"),M=N("hy-push-state-after"),H=N("hy-push-state-progress"),z=N("hy-push-state-networkerror"),F=R.pipe(Object(c.a)(e=>Object.assign(e,{main:document.getElementById("_main")})),Object(u.a)(e=>{var{main:t}=e;t.style.pointerEvents="none"}),window._noDrawer&&(null==C?void 0:C.classList.contains("cover"))?Object(u.a)(()=>{var e;C.classList.remove("cover"),null===(e=C.parentNode)||void 0===e||e.appendChild(C)}):e=>e,Object(p.a)((function(e){var{main:r}=e;return Object(v.c)(r,t,A(A({},O),{},{fill:"forwards"})).pipe(Object(l.a)({main:r}))})),Object(u.a)(e=>{var{main:t}=e;return v.d.call(t)}),Object(d.a)());H.subscribe(()=>{I&&(I.style.display="flex")}),U.pipe(Object(s.a)({replaceEls:[document.getElementById("_main")]})).subscribe(t=>{var{replaceEls:[r]}=t;r.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach(j),I&&(I.style.display="none");var n=r.querySelector("#markdown-toc");n&&n.classList.add("toc-hide"),Array.from(r.querySelectorAll("pre.highlight > code")).map(e=>e.children[0]).filter(t=>e.test(null==t?void 0:t.innerText)).forEach(t=>{var[,r]=e.exec(t.innerText),n=t.parentNode;n.removeChild(t),n.childNodes[0].splitText(1),n.removeChild(n.childNodes[0]),t.innerText=r,t.classList.add("pre-header");var a=n.parentNode.parentNode;a.insertBefore(t,a.firstChild)}),"complete"in HTMLImageElement.prototype&&r.querySelectorAll("img[width][height][loading=lazy]").forEach(e=>{e.complete||(e.style.opacity="0",e.addEventListener("load",()=>{e.style.opacity=""},{once:!0}))})}),M.pipe(Object(s.a)({replaceEls:[document.getElementById("_main")],documentFragment:document})).subscribe(e=>{var{replaceEls:[t],documentFragment:r}=e,n=r.querySelector("link[rel=canonical]");q&&n&&(q.href=n.href);var a=r.querySelector("meta[name=description]");P&&a&&(P.content=a.content),t.querySelectorAll("li[id^='fn:']").forEach(e=>e.tabIndex=0),t.querySelectorAll("a[href^='#fn:']").forEach(e=>e.addEventListener("click",e=>{var t;return null===(t=document.getElementById(e.currentTarget.getAttribute("href").substr(1)))||void 0===t?void 0:t.focus()})),t.querySelectorAll("pre, table:not(.highlight), .katex-display, .break-layout").forEach(e=>e.addEventListener("touchstart",t=>e.scrollLeft>0&&t.stopPropagation(),{passive:!1}))});var J=M.pipe(Object(b.a)((function(e){var{replaceEls:[t],flipType:r}=e;return Object(v.c)(t,f,O).pipe(Object(l.a)({main:t,flipType:r}))})),Object(d.a)()),Y=B(R,U,Object(a.a)(J,z),{animationMain:L,settings:O}).pipe(Object(d.a)());R.pipe(Object(b.a)(e=>{var t=Object(o.a)(Object(i.a)(350),F,Y).toPromise();return e.transitionUntil(t),t})).subscribe(),F.subscribe(),Y.subscribe();var G=document.querySelector(".sidebar-bg");if(G){var W=new x(2e3);M.pipe(Object(b.a)(e=>{var{replaceEls:[t]}=e;return Object(o.a)(W.fetchImage(t),J).pipe(Object(c.a)(e=>{var[t]=e;return t}),Object(y.a)(R))}),Object(s.a)([G]),Object(h.a)(),Object(m.a)(e=>{var[t,r]=e;return W.fade(t,r)})).subscribe()}J.pipe(Object(s.a)({main:document.getElementById("_main")}),Object(u.a)(e=>{var{main:t}=e,r=null==t?void 0:t.querySelector("#markdown-toc");r&&(r.classList.remove("toc-hide"),r.classList.add("toc-show"))})).subscribe(),z.pipe(Object(b.a)(e=>{var{url:t}=e;I&&(I.style.display="none");var r=document.getElementById("_main");return r&&(r.style.pointerEvents=""),v.d.call(null==L?void 0:L.querySelector(".page")),v.d.call(r),function(e,t){var{pathname:r}=t,n=Object(v.k)("_error-template"),a=null==n?void 0:n.querySelector(".this-link");a&&(a.href=r,a.textContent=r),null==e||e.appendChild(n),null==e||e.lastElementChild}(r,t),Object(v.c)(r,f,A(A({},O),{},{fill:"forwards"}))})).subscribe(),Promise.resolve().then(r.bind(null,197)),window._pushState=g}},function(){var e=this,t=arguments;return new Promise((function(r,n){var a=_.apply(e,t);function o(e){R(a,r,n,o,i,"next",e)}function i(e){R(a,r,n,o,i,"throw",e)}o(void 0)}))})()}}]);