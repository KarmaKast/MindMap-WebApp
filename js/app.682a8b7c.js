(function(e){function t(t){for(var r,o,d=t[0],c=t[1],u=t[2],l=0,s=[];l<d.length;l++)o=d[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&s.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(s.length)s.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var d=n[o];0!==i[d]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function d(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-6b66f033":"0e6729e4","chunk-2d0c1612":"a8a9cd1d","chunk-2d0cebee":"019d30bc","chunk-2d0db2d4":"41df57a2","chunk-3fc4564a":"68ebcdfb","chunk-2d0c115c":"f8cc854d","chunk-2d2079a5":"ca196bfa","chunk-323646e3":"1f5502aa"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-6b66f033":1,"chunk-323646e3":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-6b66f033":"24d34a9c","chunk-2d0c1612":"31d6cfe0","chunk-2d0cebee":"31d6cfe0","chunk-2d0db2d4":"31d6cfe0","chunk-3fc4564a":"31d6cfe0","chunk-2d0c115c":"31d6cfe0","chunk-2d2079a5":"31d6cfe0","chunk-323646e3":"9f697472"}[e]+".css",i=c.p+r,a=document.getElementsByTagName("link"),d=0;d<a.length;d++){var u=a[d],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var s=document.getElementsByTagName("style");for(d=0;d<s.length;d++){u=s[d],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=d(e);var s=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/MindMap-WebApp/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("7591"),i=n.n(o),a=n("0086"),d=n.n(a),c=n("58ca"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["development"===e.APP_MODE?n("div",{style:{height:"400px",width:"100%",backgroundColor:"blue"}}):e._e(),n("div",{style:e.mindMapContainerStyle,attrs:{id:"mindMapContainer"}},[n("mind-map-module",{attrs:{entityLimit:e.entityLimit}})],1)])},l=[],s=(n("e6cf"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mind-map-module-loading"},[n("p",[e._v("mind map module is loading")])])}],h={name:"MindMapModuleLoading"},f=h,m=(n("ede8"),n("2877")),g=Object(m["a"])(f,s,p,!1,null,"676d8293",null),w=g.exports,v={name:"app",metaInfo:{title:"MapThyMind Prototype | KarmaKast",meta:[{name:"description",content:"A fresh take on mindmap. Currently in early development."},{property:"og:description",content:"A fresh take on mindmap. Currently in early development."},{property:"og:title",content:"MapThyMind Prototype"},{property:"og:url",content:"https://karmakast.github.io/MindMap-WebApp/"}],link:[{rel:"canonical",href:"https://karmakast.github.io/MindMap-WebApp/"}]},components:{MindMapModule:()=>({component:n.e("chunk-6b66f033").then(n.bind(null,"9d3d")),loading:w})},data:function(){return{MindMapColors:{background:{h:0,s:0,l:100,a:.5},theme:{h:358,s:97,l:67,a:1},theme_light:{h:0,s:100,l:84,a:1}},window_size:{width:0,height:0},entityLimit:20,APP_MODE:"production"}},computed:{mindMapContainerStyle:function(){return{height:"100%",width:"100%",marginTop:"0px",marginLeft:"0px",boxSizing:"border-box",borderRadius:"15px 15px 10px 10px",padding:"development"===this.APP_MODE?"20px":"2px"}}},methods:{handleResize(){this.$store.dispatch("update_window_size")}},created:function(){window.addEventListener("resize",this.handleResize)},mounted(){setTimeout(()=>{document.dispatchEvent(new Event("app-rendered"))},500)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},b=v,y=(n("5c0b"),Object(m["a"])(b,u,l,!1,null,null,null)),_=y.exports,k=n("2f62");r["default"].use(k["a"]);var M=new k["a"].Store({state:{window_height:window.innerHeight,window_width:window.innerWidth,apiUrl:["",!1],theme:[],relClaimMode:{mode:!1,targetID:null,claimantID:null}},mutations:{update_window_height(e){e.window_height=window.innerHeight},update_window_width(e){e.window_width=window.innerWidth},update_apiUrl(e,t){e.apiUrl=[t,e.apiUrl[1]]},update_apiUrlValidity(e,t){e.apiUrl=[e.apiUrl[0],t]},update_relClaimMode(e,t){e.relClaimMode={mode:t.mode,targetID:t.targetID,claimantID:t.claimantID}}},getters:{},actions:{update_window_size(e){e.commit("update_window_width"),e.commit("update_window_height")},update_apiState(e,t){e.commit("update_apiUrl",t)}},modules:{}}),E=n("9483");const x=function(){Object(E["a"])("/MindMap-WebApp/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}})};"serviceWorker"in navigator&&window.addEventListener("load",x),r["default"].config.productionTip=!1,r["default"].use(c["a"]),r["default"].use(i.a),r["default"].use(d.a,{}),new r["default"]({store:M,render:e=>e(_),mounted(){}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},bf9d:function(e,t,n){},ede8:function(e,t,n){"use strict";var r=n("bf9d"),o=n.n(r);o.a}});