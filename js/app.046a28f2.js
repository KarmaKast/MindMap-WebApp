(function(t){function e(e){for(var o,r,s=e[0],l=e[1],d=e[2],h=0,c=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&c.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(c.length)c.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],o=!0,r=1;r<i.length;r++){var s=i[r];0!==n[s]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=i[0]))}return t}var o={},r={app:0},n={app:0},a=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c1612":"dc8c6c60","chunk-2d0db2d4":"c9ff870c","chunk-3fc4564a":"ec6acf01","chunk-8e4d1506":"8542c80d","chunk-33ea96b3":"2407b861"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={"chunk-33ea96b3":1};r[t]?e.push(r[t]):0!==r[t]&&i[t]&&e.push(r[t]=new Promise((function(e,i){for(var o="css/"+({}[t]||t)+"."+{"chunk-2d0c1612":"31d6cfe0","chunk-2d0db2d4":"31d6cfe0","chunk-3fc4564a":"31d6cfe0","chunk-8e4d1506":"31d6cfe0","chunk-33ea96b3":"2e85fede"}[t]+".css",n=l.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var d=a[s],h=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(h===o||h===n))return e()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){d=c[s],h=d.getAttribute("data-href");if(h===o||h===n)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var o=e&&e.target&&e.target.src||n,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],u.parentNode.removeChild(u),i(a)},u.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){r[t]=0})));var o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,i){o=n[t]=[e,i]}));e.push(o[2]=a);var d,h=document.createElement("script");h.charset="utf-8",h.timeout=120,l.nc&&h.setAttribute("nonce",l.nc),h.src=s(t);var c=new Error;d=function(e){h.onerror=h.onload=null,clearTimeout(u);var i=n[t];if(0!==i){if(i){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,i[1](c)}n[t]=void 0}};var u=setTimeout((function(){d({type:"timeout",target:h})}),12e4);h.onerror=h.onload=d,document.head.appendChild(h)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(i,o,function(e){return t[e]}.bind(null,o));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/MindMap-WebApp/",l.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],h=d.push.bind(d);d.push=e,d=d.slice();for(var c=0;c<d.length;c++)e(d[c]);var u=h;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"4a07":function(t,e,i){"use strict";var o=i("d5fe"),r=i.n(o);r.a},"56d7":function(t,e,i){"use strict";i.r(e);var o=i("2b0e"),r=i("bc3a"),n=i.n(r),a=i("7591"),s=i.n(a),l=i("0086"),d=i.n(l),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},["development"===t.APP_MODE?i("div",{style:{height:"400px",width:"100%",backgroundColor:"blue"}}):t._e(),i("div",{style:t.mindMapContainerStyle,attrs:{id:"mindMapContainer"}},[i("mind-map-module",{attrs:{entityLimit:t.entityLimit}})],1)])},c=[],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"MindMapModule",style:this.containerStyle},[t.canvasForceUpdate?t._e():i("mind-map-canvas",{attrs:{colors:this.colorsFinal,colorsProcessed:t.colorsProcessed,apiUrl:this.apiUrl,entities:t.entities,entityLimit:t.entityLimit,apiValidity:t.apiValidity,grid:t.grid},on:{"create-new-entity":t.createNewEntity,dropEntity:t.dropEntity}}),i("div",{staticClass:"debug",staticStyle:{display:"block",position:"relative",bottom:"0px",margin:"0px auto"},domProps:{innerHTML:t._s(this.debugMsg)}}),i("div",{style:{position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",pointerEvents:"none",borderRadius:"inherit"},attrs:{id:"UI"}},[i("div",{style:{position:"absolute",marginTop:"8px",marginLeft:"10px",zIndex:"unset"},attrs:{id:"mainMenu"}},[i("button",{style:t.burgerTimeButtonStyle,attrs:{id:"burgerTimeButton","aria-label":"burgerTimeButton"},on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.toggleMenu(e)}}},[i("icon-base",{attrs:{iconName:"Main Menu",iconColor:t.colorsProcessed["theme"]}},[i("icon-hamburger1")],1)],1),t.menuLoaded?i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],style:this.menuItemsStyle,attrs:{id:"menuItems"}},[i("button-one",{style:{order:0},attrs:{validity:this.apiValidity,colors:t.colorsFinal,colorsProcessed:t.colorsProcessed}}),t._l(t.menuButtons,(function(e,o){return i("button-two",{key:o+1,style:{order:o},attrs:{colors:t.colorsFinal,colorsProcessed:t.colorsProcessed,buttonText:e["text"]},on:{takeAction:function(t){return e["action"].apply(e,e["args"])}}})}))],2)]):t._e()]),i("status-bar",{attrs:{colors:t.colorsFinal,colorsProcessed:t.colorsProcessed,apiUrl:t.apiUrl,apiValidity:t.apiValidity,showThemeToggle:!t.lockTheming,toggleCurrent:"theme_light"===t.CurrentTheme?"light":"dark"},on:{themeToggle:t.themeToggle}}),t.aboutPageLoaded?i("about-page",{attrs:{colors:t.colorsFinal,colorsProcessed:t.colorsProcessed,showPage:t.showAboutPage},on:{closePage:function(e){return t.aboutPageDisplay(!1)}}}):t._e()],1)],1)},p=[],g=(i("e6cf"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.statusBarStyle,attrs:{id:"statusBar"}},[i("div",{directives:[{name:"touch",rawName:"v-touch:tap",value:t.toggleShowNext,expression:"toggleShowNext",arg:"tap"}],style:t.lightDarkToggleContainerStyle,attrs:{id:"light-dark-toggle"},on:{mouseenter:t.toggleShowNext,mouseleave:t.toggleShowNext}},[i("div",{style:t.lightDarkToggleCurrentStyle,attrs:{id:"current"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showNextToggle,expression:"showNextToggle"},{name:"touch",rawName:"v-touch:tap",value:t.toggleTheme,expression:"toggleTheme",arg:"tap"}],ref:"next",style:t.lightDarkToggleNextStyle,attrs:{id:"next"}})]),i("div"),i("div",{style:t.apiStatusContainerStyle,attrs:{id:"apiStatusContainer"}},[t.apiValidity?i("div",{style:{position:"relative",height:"100%",minWidth:6*t.height+"px",boxSizing:"border-box",fontSize:"10px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",order:"1",backgroundColor:"rgba(255,255,255,0.5)",color:"black",borderRadius:"5px",boxShadow:"0px 0px 0 1px "+t.colorsProcessed["theme_light"]},attrs:{id:"api-url"}},[i("p",{style:{margin:"0px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontFamily:"monospace"}},[t._v(" "+t._s(t.apiUrl)+" ")])]):t._e(),i("div",{style:t.apiStatusStyle,attrs:{id:"api-status-indicator","aria-label":t.statusIndicatorToolTipText}})])])}),m=[],b=(i("2ca0"),{name:"statusBar",props:{colors:Object,colorsProcessed:Object,apiUrl:String,apiValidity:Boolean,toggleCurrent:String},data:function(){return{height:25,padding:2,showNextToggle:!1}},computed:{statusIndicatorToolTipText:function(){return this.apiValidity?"api valid. Connection State Unknown/ not implemented.":""===this.apiUrl?"no api url provided yet":"api url provided not valid"},statusBarStyle:function(){return{position:"absolute",bottom:"0px",left:"0px",width:"100%",height:this.height+"px",boxSizing:"border-box",boxShadow:`hsla(0, 0%, ${this.colors["background"].l-15}%, 0.5) 0px -2px 2px 1px`,padding:this.padding+"px",borderBottomLeftRadius:"inherit",borderBottomRightRadius:"inherit",display:"grid",pointerEvents:"all",placeItems:"center",gridTemplateColumns:"min-content auto min-content",columnGap:"5px",backgroundColor:`hsla(${this.colors["background"].h},${this.colors["background"].s}%,${this.colors["background"].l+10}%,${CSS.supports("backdrop-filter: blur(3px)")?.5:.8})`,backdropFilter:"blur(3px)",backgroundImage:`repeating-linear-gradient(45deg,rgba(255, 255, 255, 0), hsla(${this.colors["theme_light"].h},${this.colors["theme_light"].s}%,${this.colors["theme_light"].l}%,0.4) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), hsla(${this.colors["theme_light"].h},${this.colors["theme_light"].s}%,${this.colors["theme_light"].l}%,0.4) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px)`}},lightDarkToggleContainerStyle:function(){return{height:"90%",minWidth:this.height+"px",boxSizing:"border-box",padding:"1px",display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:"3px",pointerEvents:"all",borderRadius:this.height+"px"}},lightDarkToggleCurrentStyle:function(){return{height:"100%",width:this.height+"px",boxSizing:"border-box",borderRadius:this.height+"px",padding:"1px",display:"grid",backgroundColor:"light"===this.toggleCurrent?"hsla(0,0%,98%,1)":"hsla(0,0%,10%,1)",boxShadow:`0px 0px 1px 1px ${"light"===this.toggleCurrent?"hsla(0,0%,10%,0.4)":"hsla(0,0%,85%,0.4)"} `}},lightDarkToggleNextStyle:function(){return{height:"100%",width:this.height+"px",boxSizing:"border-box",borderRadius:this.height+"px",padding:"1px",display:"grid",backgroundColor:"light"===this.toggleCurrent?"hsla(0,0%,10%,1)":"hsla(0,0%,85%,1)",boxShadow:"0px 0px 1px 1px "+("light"===this.toggleCurrent?"hsla(0,0%,85%,0.4)":"hsla(0,0%,10%,0.4)"),cursor:"pointer"}},apiStatusContainerStyle:function(){return{height:"90%",minWidth:this.height+"px",boxSizing:"border-box",padding:"1px",display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:this.apiValidity?"5px":"0px"}},apiStatusStyle:function(){return{order:"2",height:"100%",width:1*this.height+"px",backgroundColor:this.apiValidity?"hsla(130, 100%, 40%, 0.95)":"hsla(0, 100%, 60%, 0.95)",borderRadius:this.height+"px",border:`1.2px dotted hsla(${this.colors["background"].h},${this.colors["background"].s}%,${this.colors["background"].l-20}%,1)`,boxShadow:"0px 0px 3px 1px hsla(0, 0%, 0%, 0.32)",boxSizing:"border-box"}}},methods:{toggleTheme:function(){this.$emit("themeToggle")},toggleShowNext:function(t){t.preventDefault(),t.target!==this.$refs.next&&(["mouseenter","mouseleave"].includes(t.type)||t.type.startsWith("touch"))&&(this.showNextToggle?this.showNextToggle=!1:this.showNextToggle=!0)}}}),f=b,x=i("2877"),y=Object(x["a"])(f,g,m,!1,null,"62012ec2",null),w=y.exports,v=i("b383"),S=i.n(v),C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 18 18","aria-labelledby":t.iconName,role:"presentation"}},[i("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName))]),i("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},k=[],_={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}},P=_,T=(i("4a07"),Object(x["a"])(P,C,k,!1,null,"4c90cf32",null)),$=T.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("path",{attrs:{d:"M9 5.5c.83 0 1.5-.67 1.5-1.5S9.83 2.5 9 2.5 7.5 3.17 7.5 4 8.17 5.5 9 5.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z",fill:"color"}})},U=[],N={},L=Object(x["a"])(N,M,U,!1,null,null,null),E=L.exports;const O=()=>i.e("chunk-3fc4564a").then(i.bind(null,"72e0")),I=()=>i.e("chunk-8e4d1506").then(i.bind(null,"6185")),F=()=>i.e("chunk-2d0c1612").then(i.bind(null,"4693")),D=()=>i.e("chunk-2d0db2d4").then(i.bind(null,"6f6d"));var z={name:"MindMapModule",components:{MindMapCanvas:O,statusBar:w,aboutPage:I,buttonOne:F,buttonTwo:D,iconBase:$,IconHamburger1:E},props:{colors:Object,lockTheming:{default:!1,type:Boolean},themeDefault:{default:"light",type:String},entityLimit:{default:25,type:Number}},data:function(){return{debugMsg:"",menuLoaded:!1,showMenu:!1,apiUrl:"",apiValidity:!1,collection:null,entities:[],aboutPageLoaded:!1,showAboutPage:!1,grid:{size:25,opacity:.3,width:2,show:!0,snap:!0},MindMapColors:{theme_light:{background:{h:0,s:0,l:95,a:1},backgroundShade1:{h:0,s:0,l:75,a:1},backgroundShade2:{h:0,s:0,l:100,a:1},theme:{h:358,s:97,l:50,a:1},theme_light:{h:0,s:100,l:75,a:.6}},theme_dark:{background:{h:0,s:0,l:15,a:1},backgroundShade1:{h:0,s:0,l:40,a:1},backgroundShade2:{h:0,s:0,l:5,a:1},theme:{h:151,s:70,l:50,a:1},theme_light:{h:151,s:85,l:32,a:.6}}},CurrentTheme:localStorage.getItem("theme")?localStorage.getItem("theme"):"theme_light",canvasForceUpdate:!1}},computed:{colorsFinal:function(){return this.colors?this.colors:this.MindMapColors[this.CurrentTheme]},menuButtons:function(){let t=[{text:"Get Collection",action:this.getCollection,args:[],if:this.apiValidity},{text:"New Collection",action:this.createCollection,args:[],if:this.apiValidity},{text:"Clear Collection",action:this.clearCollection,args:[],if:this.apiValidity},{text:"Save Collection",action:this.saveCollection,args:[],if:this.apiValidity},{text:"Load Collection",action:this.loadCollection,args:[],if:this.apiValidity},{text:"Settings",action:this.showSettings,args:[],if:!0},{text:"About",action:this.aboutPageDisplay,args:[!0],if:!0}];function e(t){return t["if"]}let i=t.filter(e);return i},colorsProcessed:function(){let t={};for(let e in this.colorsFinal){let i=this.colorsFinal[e];t[e]=`hsla(${i.h},${i.s}%,${i.l}%,${i.a})`}return t},containerStyle:function(){return{backgroundColor:""+(this.colorsProcessed?this.colorsProcessed["background"]:"unset"),boxShadow:`0px 0px 0 2px ${this.colorsProcessed?this.colorsProcessed["theme_light"]:"unset"}, inset 0px 0px 5px 3px hsla(0, 0%, 0%, 0.1`}},centerButtonStyle:function(){let t=25;return{position:"absolute",height:t+"px",width:t+"px",top:"5px",right:"5px",backgroundColor:`hsla(${this.colorsProcessed["theme"].h},${this.colorsProcessed["theme"].s}%,${1.38*this.colorsProcessed["theme"].l}%,${.5*this.colorsProcessed["theme"].a})`,backdropFilter:"blur(4px)",border:`1px solid hsla(${this.colorsProcessed["theme"].h},${this.colorsProcessed["theme"].s}%,${1.15*this.colorsProcessed["theme"].l}%,${.3*this.colorsProcessed["theme"].a})`,borderRadius:"50%"}},menuItemsStyle:function(){return{display:"grid",gridRowGap:"12px",position:"absolute",top:"0px",left:"60px",padding:"10px",pointerEvents:"all",background:`hsla(${this.colorsFinal["background"].h}, ${this.colorsFinal["background"].s}%, ${this.colorsFinal["background"].l+20}%, ${CSS.supports("backdrop-filter: blur(3px)")?.38:1}`,border:"0.5px dashed "+this.colorsProcessed["theme"],boxSizing:"border-box",backdropFilter:"blur(4px)",borderRadius:"15px",boxShadow:"hsla(0, 0%, 0%, 0.16) 0px 0px 19px 1px"}},burgerTimeButtonStyle:function(){return{position:"relative",top:"0px",left:"0px",height:"38px",width:"48px",background:`hsla(${this.colorsFinal["background"].h}, ${this.colorsFinal["background"].s}%, ${this.colorsFinal["background"].l+20}%, ${CSS.supports("backdrop-filter: blur(3px)")?.38:1}`,border:`1px solid hsla(${this.colorsFinal["theme"].h}, ${this.colorsFinal["theme"].s}%, ${this.colorsFinal["theme"].l}%, 0.4 )`,backdropFilter:"blur(4px)",borderRadius:"12px",padding:"0px",boxShadow:this.showMenu?`hsla(0, 0%, ${this.colorsFinal["background"].l-20}%, 0.5) 0px 0px 19px 1px`:"unset",boxSizing:"border-box",cursor:"pointer",outline:"none",pointerEvents:"initial"}}},methods:{loadAppSettings(){},refreshCanvas(){this.canvasForceUpdate=!0,this.$nextTick(()=>{this.canvasForceUpdate=!1})},showSettings(){alert("Settings section not implimented yet")},loadCollection(){let t=this.apiUrl;this.entities=[],n()({method:"POST",url:t+"/collection/load",data:S.a.stringify({Label:"testCollection"}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(()=>{this.getCollection()}).catch(t=>{this.createCollection()})},getCollection(){let t=this.apiUrl;this.entities=[],console.log("getting list of nodes\n"+t),n.a.get(t+"/collection/get").then(e=>{this.collection=e["data"],this.entities=e.data.Entities.map(t=>({ID:t})),this.refreshCanvas(),this.$store.commit("update_apiUrlValidity",!0),this.apiValidity=!0,localStorage.getItem("apiUrl")&&localStorage.getItem("apiUrl")===t||localStorage.setItem("apiUrl",t)}).catch(t=>this.loadCollection())},createCollection(){let t=this.apiUrl;console.log("getting list of nodes\n"+t),n()({method:"POST",url:t+"/collection/create",data:S.a.stringify({Label:"testCollection"}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(()=>{this.saveCollection(),this.getCollection()}).catch(t=>{this.$store.commit("update_apiUrlValidity",!1),this.apiValidity=!1})},clearCollection(){let t=this.apiUrl;this.$axios.post(t+"/collection/clear"),this.getCollection()},saveCollection(){let t=this.apiUrl;this.$axios.post(t+"/collection/save")},toggleMenu(){this.showMenu?this.showMenu=!1:(this.showMenu=!0,this.menuLoaded||(this.menuLoaded=!0))},createNewEntity(t){this.apiValidity?!this.entities.length>=this.entityLimit?alert(`Sorry! Max nodes are limited to : ${this.entityLimit} for now.`):n()({method:"POST",baseURL:this.apiUrl,url:"/entity/create",data:S.a.stringify({vizProps:JSON.stringify({location:{x:t.x,y:t.y,z:t.z}})})}).then(e=>{console.log(e),this.entities.push({ID:e.data.entityID,entityLocationDef:t})}).catch(t=>console.log("Error: ",t)):alert("Connect to API")},dropEntity(t,e){for(const i in this.entities)if(this.entities[i].ID===t){this.$delete(this.entities,i);break}},aboutPageDisplay(t){this.showAboutPage=t,t&&!this.aboutPageLoaded&&(this.aboutPageLoaded=!0)},themeToggle(){"theme_light"===this.CurrentTheme?this.CurrentTheme="theme_dark":this.CurrentTheme="theme_light",localStorage.setItem("theme",this.CurrentTheme)}},watch:{apiUrl(){""!==this.apiUrl?this.getCollection():(this.apiValidity=!1,this.$store.commit("update_apiUrlValidity",!1))},apiValidity(){this.apiValidity||""!==this.apiUrl||(this.refreshCanvas(),this.entities=[],localStorage.setItem("apiUrl",""))}},created:function(){this.$store.subscribe((t,e)=>{"update_apiUrl"===t.type&&(this.apiUrl=e.apiUrl[0])})},mounted:function(){localStorage.getItem("apiUrl")&&(this.apiUrl=localStorage.getItem("apiUrl"),this.$store.commit("update_apiUrl",this.apiUrl))},updated:function(){}},V=z,A=(i("8d36"),Object(x["a"])(V,u,p,!1,null,"19054a3b",null)),B=A.exports,j={name:"app",components:{MindMapModule:B},data:function(){return{MindMapColors:{background:{h:0,s:0,l:100,a:.5},theme:{h:358,s:97,l:67,a:1},theme_light:{h:0,s:100,l:84,a:1}},window_size:{width:0,height:0},entityLimit:20,APP_MODE:"production"}},computed:{mindMapContainerStyle:function(){return{height:"100%",width:"100%",marginTop:"0px",marginLeft:"0px",boxSizing:"border-box",borderRadius:"development"===this.APP_MODE?"15px 15px 10px 10px":"unset",padding:"development"===this.APP_MODE?"20px":"0px"}}},methods:{handleResize(){this.$store.dispatch("update_window_size")}},created:function(){window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},R=j,W=(i("5c0b"),Object(x["a"])(R,h,c,!1,null,null,null)),G=W.exports,H=i("2f62");o["default"].use(H["a"]);var q=new H["a"].Store({state:{window_height:window.innerHeight,window_width:window.innerWidth,apiUrl:["",!1],theme:[],relClaimMode:{mode:!1,targetID:null,claimantID:null}},mutations:{update_window_height(t){t.window_height=window.innerHeight},update_window_width(t){t.window_width=window.innerWidth},update_apiUrl(t,e){t.apiUrl=[e,t.apiUrl[1]]},update_apiUrlValidity(t,e){t.apiUrl=[t.apiUrl[0],e]},update_relClaimMode(t,e){t.relClaimMode={mode:e.mode,targetID:e.targetID,claimantID:e.claimantID}}},getters:{},actions:{update_window_size(t){t.commit("update_window_width"),t.commit("update_window_height")},update_apiState(t,e){t.commit("update_apiUrl",e)}},modules:{}}),J=i("9483");Object(J["a"])("/MindMap-WebApp/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),o["default"].config.productionTip=!1,o["default"].prototype.$axios=n.a,o["default"].use(s.a),o["default"].use(d.a,{}),new o["default"]({store:q,render:t=>t(G)}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var o=i("9c0c"),r=i.n(o);r.a},"8d36":function(t,e,i){"use strict";var o=i("9bdf"),r=i.n(o);r.a},"9bdf":function(t,e,i){},"9c0c":function(t,e,i){},d5fe:function(t,e,i){}});