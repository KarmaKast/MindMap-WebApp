(function(e){function n(n){for(var r,o,d=n[0],c=n[1],u=n[2],l=0,s=[];l<d.length;l++)o=d[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&s.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(n);while(s.length)s.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var d=t[o];0!==i[d]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},i={app:0},a=[];function d(e){return c.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-cebb88fe":"12d6ee9b","chunk-2d0c1612":"b907e216","chunk-2d0cebee":"630ac3f2","chunk-2d0db2d4":"8a5f92ae","chunk-8111c4a0":"98b46e85","chunk-2d0c115c":"5803f5b3","chunk-2d2079a5":"b50e8a60","chunk-323646e3":"807dfa3b"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-cebb88fe":1,"chunk-323646e3":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-cebb88fe":"24d34a9c","chunk-2d0c1612":"31d6cfe0","chunk-2d0cebee":"31d6cfe0","chunk-2d0db2d4":"31d6cfe0","chunk-8111c4a0":"31d6cfe0","chunk-2d0c115c":"31d6cfe0","chunk-2d2079a5":"31d6cfe0","chunk-323646e3":"9f697472"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),d=0;d<a.length;d++){var u=a[d],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return n()}var s=document.getElementsByTagName("style");for(d=0;d<s.length;d++){u=s[d],l=u.getAttribute("data-href");if(l===r||l===i)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),t(a)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=i[e]=[n,t]}));n.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=d(e);var s=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(p);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/MindMap-WebApp/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var p=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=t("7591"),i=t.n(o),a=t("0086"),d=t.n(a),c=t("58ca"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},["development"===e.APP_MODE?t("div",{style:{height:"400px",width:"100%",backgroundColor:"blue"}}):e._e(),e.prerender?e._e():t("div",{style:e.mindMapContainerStyle,attrs:{id:"mindMapContainer"}},[t("mind-map-module",{attrs:{entityLimit:e.entityLimit}})],1)])},l=[],s=(t("d3b7"),function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)}),p=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mind-map-module-loading"},[t("p",[e._v("mind map module is loading")])])}],f={name:"MindMapModuleLoading"},h=f,m=(t("8b0e"),t("2877")),g=Object(m["a"])(h,s,p,!1,null,"0e7c4792",null),w=g.exports,b={name:"app",metaInfo:{title:"MapThyMind Prototype | KarmaKast",meta:[{name:"description",content:"A fresh take on mindmap. Currently in early development."},{property:"og:description",content:"A fresh take on mindmap. Currently in early development."},{property:"og:title",content:"MapThyMind Prototype"},{property:"og:url",content:"https://karmakast.github.io/MindMap-WebApp/"}],link:[{rel:"canonical",href:"https://karmakast.github.io/MindMap-WebApp/"}]},components:{MindMapModule:function(){return{component:t.e("chunk-cebb88fe").then(t.bind(null,"9d3d")),loading:w}}},data:function(){return{MindMapColors:{background:{h:0,s:0,l:100,a:.5},theme:{h:358,s:97,l:67,a:1},theme_light:{h:0,s:100,l:84,a:1}},window_size:{width:0,height:0},entityLimit:20,APP_MODE:"production",prerender:!!window.__PRERENDER_INJECTED&&window.__PRERENDER_INJECTED.prerendered}},computed:{mindMapContainerStyle:function(){return{height:"100%",width:"100%",marginTop:"0px",marginLeft:"0px",boxSizing:"border-box",borderRadius:"15px 15px 10px 10px",padding:"development"===this.APP_MODE?"20px":"2px"}}},methods:{handleResize:function(){this.$store.dispatch("update_window_size")}},created:function(){window.addEventListener("resize",this.handleResize)},mounted:function(){console.log({__PRERENDER_INJECTED:window.__PRERENDER_INJECTED}),window.__PRERENDER_INJECTED&&setTimeout((function(){document.dispatchEvent(new Event("app-rendered"))}),500)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},v=b,_=(t("5c0b"),Object(m["a"])(v,u,l,!1,null,null,null)),y=_.exports,E=t("2f62");r["default"].use(E["a"]);var k=new E["a"].Store({state:{window_height:window.innerHeight,window_width:window.innerWidth,apiUrl:["",!1],theme:[],relClaimMode:{mode:!1,targetID:null,claimantID:null}},mutations:{update_window_height:function(e){e.window_height=window.innerHeight},update_window_width:function(e){e.window_width=window.innerWidth},update_apiUrl:function(e,n){e.apiUrl=[n,e.apiUrl[1]]},update_apiUrlValidity:function(e,n){e.apiUrl=[e.apiUrl[0],n]},update_relClaimMode:function(e,n){e.relClaimMode={mode:n.mode,targetID:n.targetID,claimantID:n.claimantID}}},getters:{},actions:{update_window_size:function(e){e.commit("update_window_width"),e.commit("update_window_height")},update_apiState:function(e,n){e.commit("update_apiUrl",n)}},modules:{}}),M=t("9483"),C=function(){Object(M["a"])("".concat("/MindMap-WebApp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})};"serviceWorker"in navigator&&window.addEventListener("load",C),r["default"].config.productionTip=!1,r["default"].use(c["a"]),r["default"].use(i.a),r["default"].use(d.a,{}),new r["default"]({store:k,render:function(e){return e(y)},mounted:function(){}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),o=t.n(r);o.a},"8b0e":function(e,n,t){"use strict";var r=t("fc15"),o=t.n(r);o.a},"9c0c":function(e,n,t){},fc15:function(e,n,t){}});