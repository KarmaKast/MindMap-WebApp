(function(t){function e(e){for(var i,n,s=e[0],l=e[1],c=e[2],d=0,h=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],i=!0,n=1;n<o.length;n++){var s=o[n];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=o[0]))}return t}var i={},n={app:0},a={app:0},r=[];function s(t){return l.p+"js/"+({}[t]||t)+"-legacy."+{"chunk-2d0c1612":"82be6957","chunk-2d0db2d4":"34bd4184","chunk-8111c4a0":"bdef53d1","chunk-8e4d1506":"7c689cf6","chunk-0184db2a":"48879cd3"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(t){var e=[],o={"chunk-0184db2a":1};n[t]?e.push(n[t]):0!==n[t]&&o[t]&&e.push(n[t]=new Promise((function(e,o){for(var i="css/"+({}[t]||t)+"."+{"chunk-2d0c1612":"31d6cfe0","chunk-2d0db2d4":"31d6cfe0","chunk-8111c4a0":"31d6cfe0","chunk-8e4d1506":"31d6cfe0","chunk-0184db2a":"2c29a443"}[t]+".css",a=l.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===i||d===a))return e()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){c=h[s],d=c.getAttribute("data-href");if(d===i||d===a)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var i=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[t],u.parentNode.removeChild(u),o(r)},u.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){n[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,o){i=a[t]=[e,o]}));e.push(i[2]=r);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(t);var h=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(u);var o=a[t];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",h.name="ChunkLoadError",h.type=i,h.request=n,o[1](h)}a[t]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(o,i,function(e){return t[e]}.bind(null,i));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/MindMap-WebApp/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var u=d;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},4296:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=o("7591"),a=o.n(n),r=o("0086"),s=o.n(r),l=o("58ca"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},["development"===t.APP_MODE?o("div",{style:{height:"400px",width:"100%",backgroundColor:"blue"}}):t._e(),o("div",{style:t.mindMapContainerStyle,attrs:{id:"mindMapContainer"}},[o("mind-map-module",{attrs:{entityLimit:t.entityLimit}})],1)])},d=[],h=function(){var t,e=this,o=e.$createElement,i=e._self._c||o;return i("div",{staticClass:"MindMapModule",style:this.containerStyle},[e.canvasForceUpdate?e._e():i("mind-map-canvas",{attrs:{colors:this.colorsFinal,colorsProcessed:e.colorsProcessed,apiUrl:this.apiUrl,entities:e.entities,entityLimit:e.entityLimit,apiValidity:e.apiValidity,grid:e.grid},on:{"create-new-entity":e.createNewEntity,dropEntity:e.dropEntity}}),i("div",{style:{position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",pointerEvents:"none",borderRadius:"inherit"},attrs:{id:"UI"}},[i("div",{style:{position:"absolute",marginTop:"8px",marginLeft:"10px",zIndex:"unset"},attrs:{id:"mainMenu"}},[i("button",{style:e.burgerTimeButtonStyle,attrs:{id:"burgerTimeButton","aria-label":"burgerTimeButton"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.toggleMenu(t)}}},[i("icon-base",{attrs:{iconName:"Main Menu",iconColor:e.colorsProcessed["theme"],role:"button",aria:(t={},t["aria-pressed"]=""+this.showMenu,t)}},[i("icon-hamburger1")],1)],1),e.menuLoaded?i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],style:this.menuItemsStyle,attrs:{id:"menuItems"}},[i("button-one",{style:{order:0},attrs:{validity:this.apiValidity,colors:e.colorsFinal,colorsProcessed:e.colorsProcessed}}),e._l(e.menuButtons,(function(t,o){return i("button-two",{key:o+1,style:{order:o},attrs:{colors:e.colorsFinal,colorsProcessed:e.colorsProcessed,buttonText:t["text"]},on:{takeAction:function(e){return t["action"].apply(t,t["args"])}}})}))],2)]):e._e()]),i("status-bar",{attrs:{colors:e.colorsFinal,colorsProcessed:e.colorsProcessed,apiUrl:e.apiUrl,apiValidity:e.apiValidity,showThemeToggle:!e.lockTheming,toggleCurrent:"theme_light"===e.CurrentTheme?"light":"dark"},on:{themeToggle:e.themeToggle}}),e.aboutPageLoaded?i("about-page",{attrs:{colors:e.colorsFinal,colorsProcessed:e.colorsProcessed,showPage:e.showAboutPage},on:{closePage:function(t){return e.aboutPageDisplay(!1)}}}):e._e()],1)],1)},u=[],p=(o("99af"),o("4de4"),o("d81d"),o("a9e3"),o("d3b7"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.statusBarStyle,attrs:{id:"statusBar"}},[o("div",{directives:[{name:"touch",rawName:"v-touch:tap",value:t.toggleShowNext,expression:"toggleShowNext",arg:"tap"}],style:t.lightDarkToggleContainerStyle,attrs:{id:"light-dark-toggle"},on:{mouseenter:t.toggleShowNext,mouseleave:t.toggleShowNext}},[o("div",{style:t.lightDarkToggleCurrentStyle,attrs:{id:"current"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showNextToggle,expression:"showNextToggle"},{name:"touch",rawName:"v-touch:tap",value:t.toggleTheme,expression:"toggleTheme",arg:"tap"}],ref:"next",style:t.lightDarkToggleNextStyle,attrs:{id:"next"}})]),o("div"),o("div",{style:t.apiStatusContainerStyle,attrs:{id:"apiStatusContainer"}},[t.apiValidity?o("div",{style:{position:"relative",height:"100%",minWidth:6*t.height+"px",boxSizing:"border-box",fontSize:"10px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",order:"1",backgroundColor:"rgba(255,255,255,0.5)",color:"black",borderRadius:"5px",boxShadow:"0px 0px 0 1px "+t.colorsProcessed["theme_light"]},attrs:{id:"api-url"}},[o("p",{style:{margin:"0px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontFamily:"monospace"}},[t._v(" "+t._s(t.apiUrl)+" ")])]):t._e(),o("div",{style:t.apiStatusStyle,attrs:{id:"api-status-indicator","aria-label":t.statusIndicatorToolTipText}})])])}),g=[],m=(o("caad"),o("2ca0"),{name:"statusBar",props:{colors:Object,colorsProcessed:Object,apiUrl:String,apiValidity:Boolean,toggleCurrent:String},data:function(){return{height:25,padding:2,showNextToggle:!1}},computed:{statusIndicatorToolTipText:function(){return this.apiValidity?"api valid. Connection State Unknown/ not implemented.":""===this.apiUrl?"no api url provided yet":"api url provided not valid"},statusBarStyle:function(){return{position:"absolute",bottom:"0px",left:"0px",width:"100%",height:"".concat(this.height,"px"),boxSizing:"border-box",boxShadow:"hsla(0, 0%, ".concat(this.colors["background"].l-15,"%, 0.5) 0px -2px 2px 1px"),padding:"".concat(this.padding,"px"),borderBottomLeftRadius:"inherit",borderBottomRightRadius:"inherit",display:"grid",pointerEvents:"all",placeItems:"center",gridTemplateColumns:"min-content auto min-content",columnGap:"5px",backgroundColor:"hsla(".concat(this.colors["background"].h,",").concat(this.colors["background"].s,"%,").concat(this.colors["background"].l+10,"%,").concat(CSS.supports("backdrop-filter: blur(3px)")?.5:.8,")"),backdropFilter:"blur(3px)",backgroundImage:"repeating-linear-gradient(45deg,rgba(255, 255, 255, 0), hsla(".concat(this.colors["theme_light"].h,",").concat(this.colors["theme_light"].s,"%,").concat(this.colors["theme_light"].l,"%,0.5) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), hsla(").concat(this.colors["theme_light"].h,",").concat(this.colors["theme_light"].s,"%,").concat(this.colors["theme_light"].l,"%,0.5) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px)")}},lightDarkToggleContainerStyle:function(){return{height:"90%",minWidth:"".concat(this.height,"px"),boxSizing:"border-box",padding:"1px",display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:"3px",pointerEvents:"all",borderRadius:"".concat(this.height,"px")}},lightDarkToggleCurrentStyle:function(){return{height:"100%",width:"".concat(this.height,"px"),boxSizing:"border-box",borderRadius:"".concat(this.height,"px"),padding:"1px",display:"grid",backgroundColor:"light"===this.toggleCurrent?"hsla(0,0%,98%,1)":"hsla(0,0%,10%,1)",boxShadow:"0px 0px 1px 1px ".concat("light"===this.toggleCurrent?"hsla(0,0%,10%,0.4)":"hsla(0,0%,85%,0.4)"," ")}},lightDarkToggleNextStyle:function(){return{height:"100%",width:"".concat(this.height,"px"),boxSizing:"border-box",borderRadius:"".concat(this.height,"px"),padding:"1px",display:"grid",backgroundColor:"light"===this.toggleCurrent?"hsla(0,0%,10%,1)":"hsla(0,0%,85%,1)",boxShadow:"0px 0px 1px 1px ".concat("light"===this.toggleCurrent?"hsla(0,0%,85%,0.4)":"hsla(0,0%,10%,0.4)"),cursor:"pointer"}},apiStatusContainerStyle:function(){return{height:"90%",minWidth:"".concat(this.height,"px"),boxSizing:"border-box",padding:"1px",display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:this.apiValidity?"5px":"0px"}},apiStatusStyle:function(){return{order:"2",height:"100%",width:"".concat(1*this.height,"px"),backgroundColor:this.apiValidity?"hsla(130, 100%, 40%, 0.95)":"hsla(0, 100%, 60%, 0.95)",borderRadius:"".concat(this.height,"px"),border:"1.2px dotted hsla(".concat(this.colors["background"].h,",").concat(this.colors["background"].s,"%,").concat(this.colors["background"].l-20,"%,1)"),boxShadow:"0px 0px 3px 1px hsla(0, 0%, 0%, 0.32)",boxSizing:"border-box"}}},methods:{toggleTheme:function(){this.$emit("themeToggle")},toggleShowNext:function(t){t.preventDefault(),t.target!==this.$refs.next&&(["mouseenter","mouseleave"].includes(t.type)||t.type.startsWith("touch"))&&(this.showNextToggle?this.showNextToggle=!1:this.showNextToggle=!0)}}}),f=m,b=o("2877"),x=Object(b["a"])(f,p,g,!1,null,"58e5e75d",null),y=x.exports,w=o("bc3a"),v=o.n(w),S=o("b383"),k=o.n(S),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",t._b({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 18 18","aria-labelledby":t.iconName,role:t.role}},"svg",t.aria,!1),[o("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName))]),o("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])},_=[],P={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"},role:{type:String,default:"presentation"},aria:{type:Object}}},T=P,M=(o("ce6d"),Object(b["a"])(T,C,_,!1,null,"58d8767d",null)),U=M.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("path",{attrs:{d:"M9 5.5c.83 0 1.5-.67 1.5-1.5S9.83 2.5 9 2.5 7.5 3.17 7.5 4 8.17 5.5 9 5.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z",fill:"color"}})},E=[],L={},O=Object(b["a"])(L,N,E,!1,null,null,null),I=O.exports,F=function(){return o.e("chunk-8111c4a0").then(o.bind(null,"72e0"))},D=function(){return o.e("chunk-8e4d1506").then(o.bind(null,"6185"))},z=function(){return o.e("chunk-2d0c1612").then(o.bind(null,"4693"))},A=function(){return o.e("chunk-2d0db2d4").then(o.bind(null,"6f6d"))},V={name:"MindMapModule",components:{MindMapCanvas:F,statusBar:y,aboutPage:D,buttonOne:z,buttonTwo:A,iconBase:U,IconHamburger1:I},props:{colors:Object,lockTheming:{default:!1,type:Boolean},themeDefault:{default:"light",type:String},entityLimit:{default:25,type:Number}},data:function(){return{menuLoaded:!1,showMenu:!1,apiUrl:"",apiValidity:!1,collection:null,entities:[],aboutPageLoaded:!1,showAboutPage:!1,grid:{size:25,opacity:.3,width:1,show:!0,snap:!0},MindMapColors:{theme_light:{background:{h:0,s:0,l:95,a:1},backgroundShade1:{h:0,s:0,l:75,a:1},backgroundShade2:{h:0,s:0,l:100,a:1},text:{h:0,s:0,l:30,a:1},theme:{h:358,s:97,l:50,a:1},theme_light:{h:0,s:100,l:75,a:.6}},theme_dark:{background:{h:0,s:0,l:10,a:1},backgroundShade1:{h:0,s:0,l:40,a:1},backgroundShade2:{h:0,s:0,l:5,a:1},text:{h:0,s:0,l:50,a:1},theme:{h:151,s:70,l:50,a:1},theme_light:{h:151,s:85,l:32,a:.6}}},CurrentTheme:localStorage.getItem("theme")?localStorage.getItem("theme"):"theme_light",canvasForceUpdate:!1}},computed:{colorsFinal:function(){return this.colors?this.colors:this.MindMapColors[this.CurrentTheme]},menuButtons:function(){var t=[{text:"Get Collection",action:this.getCollection,args:[],if:this.apiValidity},{text:"New Collection",action:this.createCollection,args:[],if:this.apiValidity},{text:"Clear Collection",action:this.clearCollection,args:[],if:this.apiValidity},{text:"Save Collection",action:this.saveCollection,args:[],if:this.apiValidity},{text:"Load Collection",action:this.loadCollection,args:[],if:this.apiValidity},{text:"Settings",action:this.showSettings,args:[],if:!0},{text:"About",action:this.aboutPageDisplay,args:[!0],if:!0}];function e(t){return t["if"]}var o=t.filter(e);return o},colorsProcessed:function(){var t={};for(var e in this.colorsFinal){var o=this.colorsFinal[e];t[e]="hsla(".concat(o.h,",").concat(o.s,"%,").concat(o.l,"%,").concat(o.a,")")}return t},containerStyle:function(){return{backgroundColor:"".concat(this.colorsProcessed?this.colorsProcessed["background"]:"unset"),boxShadow:"0px 0px 0 2px ".concat(this.colorsProcessed?this.colorsProcessed["theme_light"]:"unset",", inset 0px 0px 5px 3px hsla(0, 0%, 0%, 0.1")}},centerButtonStyle:function(){var t=25;return{position:"absolute",height:"".concat(t,"px"),width:"".concat(t,"px"),top:"5px",right:"5px",backgroundColor:"hsla(".concat(this.colorsProcessed["theme"].h,",").concat(this.colorsProcessed["theme"].s,"%,").concat(1.38*this.colorsProcessed["theme"].l,"%,").concat(.5*this.colorsProcessed["theme"].a,")"),backdropFilter:"blur(4px)",border:"1px solid hsla(".concat(this.colorsProcessed["theme"].h,",").concat(this.colorsProcessed["theme"].s,"%,").concat(1.15*this.colorsProcessed["theme"].l,"%,").concat(.3*this.colorsProcessed["theme"].a,")"),borderRadius:"50%"}},menuItemsStyle:function(){return{display:"grid",gridRowGap:"12px",position:"absolute",top:"0px",left:"60px",padding:"10px",pointerEvents:"all",background:"hsla(".concat(this.colorsFinal["background"].h,", ").concat(this.colorsFinal["background"].s,"%, ").concat(this.colorsFinal["background"].l+20,"%, ").concat(CSS.supports("backdrop-filter: blur(3px)")?.38:1),border:"0.5px dashed ".concat(this.colorsProcessed["theme"]),boxSizing:"border-box",backdropFilter:"blur(4px)",borderRadius:"15px",boxShadow:"hsla(0, 0%, 0%, 0.16) 0px 0px 19px 1px"}},burgerTimeButtonStyle:function(){return{position:"relative",top:"0px",left:"0px",height:"38px",width:"48px",background:"hsla(".concat(this.colorsFinal["background"].h,", ").concat(this.colorsFinal["background"].s,"%, ").concat(this.colorsFinal["background"].l+20,"%, ").concat(CSS.supports("backdrop-filter: blur(3px)")?.38:1),border:"1px solid hsla(".concat(this.colorsFinal["theme"].h,", ").concat(this.colorsFinal["theme"].s,"%, ").concat(this.colorsFinal["theme"].l,"%, 0.4 )"),backdropFilter:"blur(4px)",borderRadius:"12px",padding:"0px",boxShadow:this.showMenu?"hsla(0, 0%, ".concat(this.colorsFinal["background"].l-20,"%, 0.5) 0px 0px 19px 1px"):"unset",boxSizing:"border-box",cursor:"pointer",outline:"none",pointerEvents:"initial"}}},methods:{loadAppSettings:function(){},refreshCanvas:function(){var t=this;this.canvasForceUpdate=!0,this.$nextTick((function(){t.canvasForceUpdate=!1}))},showSettings:function(){alert("Settings section not implimented yet")},loadCollection:function(){var t=this,e=this.apiUrl;this.entities=[],v()({method:"POST",url:e+"/collection/load",data:k.a.stringify({Label:"testCollection"}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(){t.getCollection()})).catch((function(e){t.createCollection()}))},getCollection:function(){var t=this,e=this.apiUrl;this.entities=[],console.log("getting list of entitys\n".concat(e)),v.a.get(e+"/collection/get").then((function(o){t.collection=o["data"],t.entities=o.data.Entities.map((function(t){return{ID:t}})),t.refreshCanvas(),t.$store.commit("update_apiUrlValidity",!0),t.apiValidity=!0,localStorage.getItem("apiUrl")&&localStorage.getItem("apiUrl")===e||localStorage.setItem("apiUrl",e)})).catch((function(e){return t.loadCollection()}))},createCollection:function(){var t=this,e=this.apiUrl;console.log("getting list of entitys\n".concat(e)),v()({method:"POST",url:e+"/collection/create",data:k.a.stringify({Label:"testCollection"}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(){t.saveCollection(),t.getCollection()})).catch((function(e){t.$store.commit("update_apiUrlValidity",!1),t.apiValidity=!1}))},clearCollection:function(){var t=this.apiUrl;v.a.post(t+"/collection/clear"),this.getCollection()},saveCollection:function(){var t=this.apiUrl;v.a.post(t+"/collection/save")},toggleMenu:function(){this.showMenu?this.showMenu=!1:(this.showMenu=!0,this.menuLoaded||(this.menuLoaded=!0))},createNewEntity:function(t){var e=this;this.apiValidity?!this.entities.length>=this.entityLimit?alert("Sorry! Max entitys are limited to : ".concat(this.entityLimit," for now.")):v()({method:"POST",baseURL:this.apiUrl,url:"/entity/create",data:k.a.stringify({vizProps:JSON.stringify({location:{x:t.x,y:t.y,z:t.z}})})}).then((function(o){console.log(o),e.entities.push({ID:o.data.entityID,entityLocationDef:t})})).catch((function(t){return console.log("Error: ",t)})):alert("Connect to API")},dropEntity:function(t,e){for(var o in this.entities)if(this.entities[o].ID===t){this.$delete(this.entities,o);break}},aboutPageDisplay:function(t){this.showAboutPage=t,t&&!this.aboutPageLoaded&&(this.aboutPageLoaded=!0)},themeToggle:function(){"theme_light"===this.CurrentTheme?this.CurrentTheme="theme_dark":this.CurrentTheme="theme_light",localStorage.setItem("theme",this.CurrentTheme)}},watch:{apiUrl:function(){""!==this.apiUrl?this.getCollection():(this.apiValidity=!1,this.$store.commit("update_apiUrlValidity",!1))},apiValidity:function(){this.apiValidity||""!==this.apiUrl||(this.refreshCanvas(),this.entities=[],localStorage.setItem("apiUrl",""))}},created:function(){var t=this;this.$store.subscribe((function(e,o){"update_apiUrl"===e.type&&(t.apiUrl=o.apiUrl[0])}))},mounted:function(){localStorage.getItem("apiUrl")&&(this.apiUrl=localStorage.getItem("apiUrl"),this.$store.commit("update_apiUrl",this.apiUrl))},updated:function(){}},j=V,B=(o("c5bb"),Object(b["a"])(j,h,u,!1,null,"678ce394",null)),R=B.exports,$={name:"app",metaInfo:{title:"MapThyMind Prototype",meta:[{name:"description",content:"A fresh take on mindmap. Currently in early development."},{property:"og:description",content:"A fresh take on mindmap. Currently in early development."},{property:"og:title",content:"MapThyMind Prototype"},{property:"og:url",content:"https://karmakast.github.io/MindMap-WebApp/"}],link:[{rel:"canonical",href:"https://karmakast.github.io/MindMap-WebApp/"}]},components:{MindMapModule:R},data:function(){return{MindMapColors:{background:{h:0,s:0,l:100,a:.5},theme:{h:358,s:97,l:67,a:1},theme_light:{h:0,s:100,l:84,a:1}},window_size:{width:0,height:0},entityLimit:20,APP_MODE:"production"}},computed:{mindMapContainerStyle:function(){return{height:"100%",width:"100%",marginTop:"0px",marginLeft:"0px",boxSizing:"border-box",borderRadius:"development"===this.APP_MODE?"15px 15px 10px 10px":"unset",padding:"development"===this.APP_MODE?"20px":"0px"}}},methods:{handleResize:function(){this.$store.dispatch("update_window_size")}},created:function(){window.addEventListener("resize",this.handleResize)},mounted:function(){setTimeout((function(){document.dispatchEvent(new Event("app-rendered"))}),500)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},W=$,G=(o("5c0b"),Object(b["a"])(W,c,d,!1,null,null,null)),H=G.exports,q=o("2f62");i["default"].use(q["a"]);var J=new q["a"].Store({state:{window_height:window.innerHeight,window_width:window.innerWidth,apiUrl:["",!1],theme:[],relClaimMode:{mode:!1,targetID:null,claimantID:null}},mutations:{update_window_height:function(t){t.window_height=window.innerHeight},update_window_width:function(t){t.window_width=window.innerWidth},update_apiUrl:function(t,e){t.apiUrl=[e,t.apiUrl[1]]},update_apiUrlValidity:function(t,e){t.apiUrl=[t.apiUrl[0],e]},update_relClaimMode:function(t,e){t.relClaimMode={mode:e.mode,targetID:e.targetID,claimantID:e.claimantID}}},getters:{},actions:{update_window_size:function(t){t.commit("update_window_width"),t.commit("update_window_height")},update_apiState:function(t,e){t.commit("update_apiUrl",e)}},modules:{}}),K=o("9483"),Q=function(){Object(K["a"])("".concat("/MindMap-WebApp/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}})};"serviceWorker"in navigator&&window.addEventListener("load",Q),i["default"].config.productionTip=!1,i["default"].use(l["a"]),i["default"].use(a.a),i["default"].use(s.a,{}),new i["default"]({store:J,render:function(t){return t(H)},mounted:function(){}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var i=o("9c0c"),n=o.n(i);n.a},"9c0c":function(t,e,o){},af0b:function(t,e,o){},c5bb:function(t,e,o){"use strict";var i=o("4296"),n=o.n(i);n.a},ce6d:function(t,e,o){"use strict";var i=o("af0b"),n=o.n(i);n.a}});