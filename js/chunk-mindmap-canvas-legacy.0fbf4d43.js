(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-mindmap-canvas"],{"00fd":function(t,e,n){var i=n("9e69"),a=Object.prototype,r=a.hasOwnProperty,o=a.toString,s=i?i.toStringTag:void 0;function c(t){var e=r.call(t,s),n=t[s];try{t[s]=void 0;var i=!0}catch(c){}var a=o.call(t);return i&&(e?t[s]=n:delete t[s]),a}t.exports=c},"03dd":function(t,e,n){var i=n("eac5"),a=n("57a5"),r=Object.prototype,o=r.hasOwnProperty;function s(t){if(!i(t))return a(t);var e=[];for(var n in Object(t))o.call(t,n)&&"constructor"!=n&&e.push(n);return e}t.exports=s},"07c7":function(t,e){function n(){return!1}t.exports=n},"087d":function(t,e){function n(t,e){var n=-1,i=e.length,a=t.length;while(++n<i)t[a+n]=e[n];return t}t.exports=n},"0b07":function(t,e,n){var i=n("34ac"),a=n("3698");function r(t,e){var n=a(t,e);return i(n)?n:void 0}t.exports=r},"0d24":function(t,e,n){(function(t){var i=n("2b3e"),a=n("07c7"),r=e&&!e.nodeType&&e,o=r&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===r,c=s?i.Buffer:void 0,u=c?c.isBuffer:void 0,d=u||a;t.exports=d}).call(this,n("62e4")(t))},1290:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},1310:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},1368:function(t,e,n){var i=n("da03"),a=function(){var t=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function r(t){return!!a&&a in t}t.exports=r},"159b":function(t,e,n){var i=n("da84"),a=n("fdbc"),r=n("17c2"),o=n("9112");for(var s in a){var c=i[s],u=c&&c.prototype;if(u&&u.forEach!==r)try{o(u,"forEach",r)}catch(d){u.forEach=r}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,a=n("a640"),r=n("ae40"),o=a("forEach"),s=r("forEach");t.exports=o&&s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1a8c":function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},"1c3c":function(t,e,n){var i=n("9e69"),a=n("2474"),r=n("9638"),o=n("a2be"),s=n("edfa"),c=n("ac41"),u=1,d=2,f="[object Boolean]",l="[object Date]",h="[object Error]",v="[object Map]",p="[object Number]",g="[object RegExp]",y="[object Set]",b="[object String]",x="[object Symbol]",_="[object ArrayBuffer]",m="[object DataView]",E=i?i.prototype:void 0,w=E?E.valueOf:void 0;function j(t,e,n,i,E,j,S){switch(n){case m:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _:return!(t.byteLength!=e.byteLength||!j(new a(t),new a(e)));case f:case l:case p:return r(+t,+e);case h:return t.name==e.name&&t.message==e.message;case g:case b:return t==e+"";case v:var C=s;case y:var D=i&u;if(C||(C=c),t.size!=e.size&&!D)return!1;var O=S.get(t);if(O)return O==e;i|=d,S.set(t,e);var z=o(C(t),C(e),i,E,j,S);return S["delete"](t),z;case x:if(w)return w.call(t)==w.call(e)}return!1}t.exports=j},"1cec":function(t,e,n){var i=n("0b07"),a=n("2b3e"),r=i(a,"Promise");t.exports=r},"1efc":function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},"1fc8":function(t,e,n){var i=n("4245");function a(t,e){var n=i(this,t),a=n.size;return n.set(t,e),this.size+=n.size==a?0:1,this}t.exports=a},2474:function(t,e,n){var i=n("2b3e"),a=i.Uint8Array;t.exports=a},2478:function(t,e,n){var i=n("4245");function a(t){return i(this,t).get(t)}t.exports=a},2524:function(t,e,n){var i=n("6044"),a="__lodash_hash_undefined__";function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=i&&void 0===e?a:e,this}t.exports=r},2532:function(t,e,n){"use strict";var i=n("23e7"),a=n("5a34"),r=n("1d80"),o=n("ab13");i({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(r(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},"253c":function(t,e,n){var i=n("3729"),a=n("1310"),r="[object Arguments]";function o(t){return a(t)&&i(t)==r}t.exports=o},"28c9":function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},"29f3":function(t,e){var n=Object.prototype,i=n.toString;function a(t){return i.call(t)}t.exports=a},"2b3e":function(t,e,n){var i=n("585a"),a="object"==typeof self&&self&&self.Object===Object&&self,r=i||a||Function("return this")();t.exports=r},"2d7c":function(t,e){function n(t,e){var n=-1,i=null==t?0:t.length,a=0,r=[];while(++n<i){var o=t[n];e(o,n,t)&&(r[a++]=o)}return r}t.exports=n},"2fcc":function(t,e){function n(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}t.exports=n},"30c9":function(t,e,n){var i=n("9520"),a=n("b218");function r(t){return null!=t&&a(t.length)&&!i(t)}t.exports=r},"32f4":function(t,e,n){var i=n("2d7c"),a=n("d327"),r=Object.prototype,o=r.propertyIsEnumerable,s=Object.getOwnPropertySymbols,c=s?function(t){return null==t?[]:(t=Object(t),i(s(t),(function(e){return o.call(t,e)})))}:a;t.exports=c},"34ac":function(t,e,n){var i=n("9520"),a=n("1368"),r=n("1a8c"),o=n("dc57"),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,u=Function.prototype,d=Object.prototype,f=u.toString,l=d.hasOwnProperty,h=RegExp("^"+f.call(l).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function v(t){if(!r(t)||a(t))return!1;var e=i(t)?h:c;return e.test(o(t))}t.exports=v},3698:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},3729:function(t,e,n){var i=n("9e69"),a=n("00fd"),r=n("29f3"),o="[object Null]",s="[object Undefined]",c=i?i.toStringTag:void 0;function u(t){return null==t?void 0===t?s:o:c&&c in Object(t)?a(t):r(t)}t.exports=u},3835:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){a=!0,r=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(a)throw r}}return n}}var r=n("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return i(t)||a(t,e)||Object(r["a"])(t,e)||o()}},"39ff":function(t,e,n){var i=n("0b07"),a=n("2b3e"),r=i(a,"WeakMap");t.exports=r},4160:function(t,e,n){"use strict";var i=n("23e7"),a=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},4245:function(t,e,n){var i=n("1290");function a(t,e){var n=t.__data__;return i(e)?n["string"==typeof e?"string":"hash"]:n.map}t.exports=a},4284:function(t,e){function n(t,e){var n=-1,i=null==t?0:t.length;while(++n<i)if(e(t[n],n,t))return!0;return!1}t.exports=n},"42a2":function(t,e,n){var i=n("b5a7"),a=n("79bc"),r=n("1cec"),o=n("c869"),s=n("39ff"),c=n("3729"),u=n("dc57"),d="[object Map]",f="[object Object]",l="[object Promise]",h="[object Set]",v="[object WeakMap]",p="[object DataView]",g=u(i),y=u(a),b=u(r),x=u(o),_=u(s),m=c;(i&&m(new i(new ArrayBuffer(1)))!=p||a&&m(new a)!=d||r&&m(r.resolve())!=l||o&&m(new o)!=h||s&&m(new s)!=v)&&(m=function(t){var e=c(t),n=e==f?t.constructor:void 0,i=n?u(n):"";if(i)switch(i){case g:return p;case y:return d;case b:return l;case x:return h;case _:return v}return e}),t.exports=m},"45fc":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").some,r=n("a640"),o=n("ae40"),s=r("some"),c=o("some");i({target:"Array",proto:!0,forced:!s||!c},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"49f4":function(t,e,n){var i=n("6044");function a(){this.__data__=i?i(null):{},this.size=0}t.exports=a},"4fad":function(t,e,n){var i=n("23e7"),a=n("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"50d8":function(t,e){function n(t,e){var n=-1,i=Array(t);while(++n<t)i[n]=e(n);return i}t.exports=n},"55a3":function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},"57a5":function(t,e,n){var i=n("91e9"),a=i(Object.keys,Object);t.exports=a},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},"5e2e":function(t,e,n){var i=n("28c9"),a=n("69d5"),r=n("b4c0"),o=n("fba5"),s=n("67ca");function c(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var i=t[e];this.set(i[0],i[1])}}c.prototype.clear=i,c.prototype["delete"]=a,c.prototype.get=r,c.prototype.has=o,c.prototype.set=s,t.exports=c},6044:function(t,e,n){var i=n("0b07"),a=i(Object,"create");t.exports=a},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"63ea":function(t,e,n){var i=n("c05f");function a(t,e){return i(t,e)}t.exports=a},6747:function(t,e){var n=Array.isArray;t.exports=n},"67ca":function(t,e,n){var i=n("cb5a");function a(t,e){var n=this.__data__,a=i(n,t);return a<0?(++this.size,n.push([t,e])):n[a][1]=e,this}t.exports=a},"69d5":function(t,e,n){var i=n("cb5a"),a=Array.prototype,r=a.splice;function o(t){var e=this.__data__,n=i(e,t);if(n<0)return!1;var a=e.length-1;return n==a?e.pop():r.call(e,n,1),--this.size,!0}t.exports=o},"6f53":function(t,e,n){var i=n("83ab"),a=n("df75"),r=n("fc6a"),o=n("d1e7").f,s=function(t){return function(e){var n,s=r(e),c=a(s),u=c.length,d=0,f=[];while(u>d)n=c[d++],i&&!o.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}};t.exports={entries:s(!0),values:s(!1)}},"6fcd":function(t,e,n){var i=n("50d8"),a=n("d370"),r=n("6747"),o=n("0d24"),s=n("c098"),c=n("73ac"),u=Object.prototype,d=u.hasOwnProperty;function f(t,e){var n=r(t),u=!n&&a(t),f=!n&&!u&&o(t),l=!n&&!u&&!f&&c(t),h=n||u||f||l,v=h?i(t.length,String):[],p=v.length;for(var g in t)!e&&!d.call(t,g)||h&&("length"==g||f&&("offset"==g||"parent"==g)||l&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||s(g,p))||v.push(g);return v}t.exports=f},"72e0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"touch",rawName:"v-touch:moving",value:t.getMousePos,expression:"getMousePos",arg:"moving"},{name:"touch",rawName:"v-touch:end.prevent",value:t.deactivateAllEntities,expression:"deactivateAllEntities",arg:"end",modifiers:{prevent:!0}},{name:"touch",rawName:"v-touch:start.self",value:t.startCanvasDragging,expression:"startCanvasDragging",arg:"start",modifiers:{self:!0}},{name:"touch",rawName:"v-touch:end.self",value:t.endCanvasDragging,expression:"endCanvasDragging",arg:"end",modifiers:{self:!0}},{name:"touch",rawName:"v-touch:tap.self",value:t.handleCanvasTap,expression:"handleCanvasTap",arg:"tap",modifiers:{self:!0}}],ref:"canvasContainer",style:t.canvasContainerStyle,attrs:{id:"canvasContainer"},on:{mousemove:t.getMousePos,mouseleave:t.endCanvasDragging}},[t.vueKonvaLoaded?n("div",{staticClass:"canvas-grid",style:{pointerEvents:"none",position:"absolute"}},[n("v-stage",{attrs:{config:{width:t.canvasSize.width,height:t.canvasSize.height}}},[n("v-layer",[n("v-group",{attrs:{config:t.canvasGridStyle}},[t._l(new Array(parseInt(t.canvasSize.width/t.grid.size)),(function(e,i){return n("v-line",{key:i+"vertical",attrs:{config:{points:[i*t.grid.size*2,0,i*t.grid.size*2,t.canvasSize.height+2*t.grid.size*2],stroke:t.canvasGridColors[0],strokeWidth:t.grid.width,lineCap:"round",lineJoin:"round",draggable:!1,closed:!1}}})})),t._l(new Array(parseInt(t.canvasSize.width/t.grid.size)),(function(e,i){return n("v-line",{key:i+"horizontal",attrs:{config:{points:[0,i*t.grid.size*2,t.canvasSize.width+2*t.grid.size*2,i*t.grid.size*2],stroke:t.canvasGridColors[0],strokeWidth:t.grid.width,lineCap:"round",lineJoin:"round",draggable:!1,closed:!1}}})}))],2),n("v-line",{attrs:{config:{points:[t.canvasSize.width/2,0,t.canvasSize.width/2,t.canvasSize.height],stroke:t.canvasGridColors[1],strokeWidth:t.grid.width,x:t.canvasLocation.x,draggable:!1,closed:!1}}}),n("v-line",{attrs:{config:{points:[0,t.canvasSize.height/2,t.canvasSize.width,t.canvasSize.height/2],stroke:t.canvasGridColors[2],strokeWidth:t.grid.width,y:t.canvasLocation.y,draggable:!1,closed:!1}}})],1),n("v-layer",{attrs:{config:{x:t.canvasLocation.x,y:t.canvasLocation.y}}},t._l(t.relationLineConfigs,(function(e,i){return n("v-group",{key:"r-group-"+i},t._l(e,(function(t,e){return n("v-line",{key:"r-line-"+e,attrs:{config:t}})})),1)})),1)],1)],1):t._e(),n("div",{style:t.entitiesStyle,attrs:{id:"entities"}},t._l(t.processedEntitiesBetter,(function(e,i){return n("entityComponent",{key:"entity-"+i,attrs:{colors:t.colors,colorsProcessed:t.colorsProcessed,entityID:i,apiUrl:t.apiUrl,autoSave:!1,apiValidity:t.apiValidity,canvasSize:t.canvasSize,canvasLocation:t.canvasLocation,canvasMousePos:e.canvasMousePos,dragging:e.dragging,pressed:e.pressed,entitySelected:e.entitySelected,entityLocationDef:e.entityLocationDef,grid:t.grid,relationLabels:t.collection.Relations,targetRelSpots:e.targetRelSpots,updateEntityData:e.updateEntityData},on:{setStartingCanvasMousePos:t.setStartingCanvasMousePos,prevActiveEntityID:t.setPrevActiveEntityID,removeEntity:t.removeEntity,entityActivated:t.entityActivated,setSelfRelSpots:function(e){return t.setSelfRelSpots(i,e)},assignTargetRelSpots:function(e){return t.assignTargetRelSpots(i,e)},getRelation:t.emitGetRelation,relationLineConfigs:function(e){return t.setRelationLineConfigs(i,e)}}})})),1)])},a=[],r=(n("99af"),n("4160"),n("caad"),n("45fc"),n("a9e3"),n("4fad"),n("b64b"),n("d3b7"),n("2532"),n("2ca0"),n("159b"),n("3835")),o=n("ade3"),s=n("2b0e"),c=n("bc3a"),u=n.n(c),d=n("b383"),f=n.n(d),l=n("63ea"),h=n.n(l),v={name:"MindMapCanvas",components:{entityComponent:function(){return n.e("chunk-entity-component").then(n.bind(null,"fde5"))}},props:{colors:Object,colorsProcessed:Object,collection:Object,entityLimit:{default:10,type:Number},apiUrl:String,apiValidity:Boolean,grid:{default:function(){return{size:1,opacity:0,width:0,show:!0,snap:!0}},type:Object},popupLock:{default:!0,type:Boolean}},data:function(){return{mindmapCanvas:null,vueKonvaLoaded:!1,dragItemId:null,canvasLocation:{x:0,y:0},canvasMousePos:{x:0,y:0},canvasContainerBoxLoc:{x:0,y:0},prevActiveEntityID:void 0,activeEntity:{entityID:void 0,dragging:{state:!1},pressed:{state:!1},selected:!1},canvas:{taps:{timer:void 0,count:0},dragging:{state:!1,event:void 0,deltas:{x:0,y:0}}},relClaimTargetSpots:{},relClaimSpots:{},relationLineConfigs:{},entitiesToUpdate:[],processedEntitiesBetter:{},canvasSize:{height:0,width:0}}},computed:{windowSize:function(){var t=this.$store.state.window_height,e=this.$store.state.window_width;return{height:t||0,width:e||0}},entitiesStyle:function(){return{transform:"translate(\n          ".concat(this.canvasLocation.x+"px",",\n          ").concat(this.canvasLocation.y+"px","\n        )"),willChange:this.canvas.dragging.state?"transform":"unset"}},canvasContainerStyle:function(){return{height:"100%",width:"100%",position:"absolute",top:"0px",left:"0px",overflow:"hidden",backgroundColor:"inherit",cursor:this.canvas.dragging.state?"grabbing":"move"}},canvasGridColors:function(){return["hsla(".concat(this.colors["theme_light"].h,", ").concat(this.colors["theme_light"].s,"%, ").concat(this.colors["theme_light"].l,"%, ").concat(this.grid.opacity/1.4,")")," hsla(183, 91%, 35%,".concat(2*this.grid.opacity,")"),"hsla(19, 100%, 35%, ".concat(2*this.grid.opacity,")")]},canvasGridStyle:function(){var t=2*this.grid.size,e=this.canvasSize.height+2*t,n=this.canvasSize.width+2*t,i=(e/2+this.canvasLocation.y)%t-1*t,a=(n/2+this.canvasLocation.x)%t-1*t;return{width:this.canvasSize.width+2*this.grid.size*2,height:this.canvasSize.height+2*this.grid.size*2,y:i,x:a}}},methods:{setPrevActiveEntityID:function(t){console.log("I should only be called once"),this.prevActiveEntityID=t,s["default"].set(this.activeEntity,"entityID",t),s["default"].set(this.activeEntity,"selected",!0)},handleTouchEnd:function(t){t.preventDefault(),t.target&&this.setcanvas.dragging(),this.deactivateAllEntities(t)},updateCanvasContainerBoxLoc:function(){this.canvasContainerBoxLoc.x=this.$refs.canvasContainer.getBoundingClientRect().x,this.canvasContainerBoxLoc.y=this.$refs.canvasContainer.getBoundingClientRect().y},entityActivated:function(t,e){var n=this,i=this.activeEntity.entityID!==e;this.activeEntity.entityID=e,this.activeEntity.pressed.state=!0,setTimeout((function(){n.activeEntity.pressed.state?(n.activeEntity.dragging.state=!0,n.activeEntity.selected=!1,n.updateCanvasContainerBoxLoc()):e===n.activeEntity.entityID&&(n.activeEntity.selected=!!i||!n.activeEntity.selected)}),200)},deactivateAllEntities:function(t){([1].includes(t.which)||"touchend"===t.type)&&(!1===this.activeEntity.pressed.state?this.$refs.canvasContainer===t.target&&(this.activeEntity.selected=!1,this.activeEntity.entityID=void 0,this.$store.state.relClaimMode.mode&&this.$store.commit("update_relClaimMode",{mode:!1,targetID:null,claimantID:this.$store.state.relClaimMode.claimantID})):this.$refs.canvasContainer!==t.target&&(this.activeEntity.pressed.state=!1,this.activeEntity.dragging.state&&(this.activeEntity.dragging.state=!1)))},getMousePos:function(t){this.activeEntity.dragging.state,(this.activeEntity.dragging.state||this.canvas.dragging.state)&&("mousemove"===t.type?(s["default"].set(this.canvasMousePos,"x",t.clientX-this.canvasContainerBoxLoc.x),s["default"].set(this.canvasMousePos,"y",t.clientY-this.canvasContainerBoxLoc.y)):"touchmove"===t.type&&(s["default"].set(this.canvasMousePos,"x",t.touches[0].clientX-this.canvasContainerBoxLoc.x),s["default"].set(this.canvasMousePos,"y",t.touches[0].clientY-this.canvasContainerBoxLoc.y)),this.canvas.dragging.state&&(s["default"].set(this.canvasLocation,"x",this.canvasMousePos.x-this.canvasSize.width/2-this.canvas.dragging.deltas.x),s["default"].set(this.canvasLocation,"y",this.canvasMousePos.y-this.canvasSize.height/2-this.canvas.dragging.deltas.y)))},startCanvasDragging:function(t){if((t.type.startsWith("mouse")&&1===t.which||["touchend","touchstart"].includes(t.type))&&(!1!==this.canvas.dragging.state||!["mouseup","touchend"].includes(t.type))){this.updateCanvasContainerBoxLoc();var e={x:0,y:0};"mousedown"===t.type?(this.canvas.dragging.state=!0,this.canvas.dragging.event=t,e.x=t.clientX,e.y=t.clientY):t.type.startsWith("touch")&&(this.canvas.dragging.state=!0,this.canvas.dragging.event=t,e.x=t.changedTouches[0].clientX,e.y=t.changedTouches[0].clientY),this.canvas.dragging.state&&(this.canvas.dragging.deltas.x=e.x-this.canvasSize.width/2-this.canvasLocation.x-this.canvasContainerBoxLoc.x,this.canvas.dragging.deltas.y=e.y-this.canvasSize.height/2-this.canvasLocation.y-this.canvasContainerBoxLoc.y)}},endCanvasDragging:function(t){!(t.type.startsWith("mouse")&&1===t.which||["touchend","touchstart"].includes(t.type))||!1===this.canvas.dragging.state&&["mouseup","touchend"].includes(t.type)||(this.canvas.dragging.state=!1,this.canvas.dragging.deltas={x:0,y:0},this.canvas.dragging.event=void 0,this.canvas.dragging.deltas={x:0,y:0})},handleCanvasTap:function(t){var e=this;t.preventDefault(),this.canvas.taps.count+=1;var n=250;this.canvas.taps.timer=setTimeout((function(){if(e.canvas.taps.count>1){e.canvas.taps.count=0;var n={x:0,y:0};n=t.type.startsWith("mouse")?{x:t.clientX,y:t.clientY}:{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY},n.x=n.x-e.canvasSize.width/2-e.canvasLocation.x,n.y=n.y-e.canvasSize.height/2-e.canvasLocation.y,e.$emit("create-new-entity",n)}else e.canvas.taps.count=0;e.canvas.taps.timer=void 0}),n)},setStartingCanvasMousePos:function(t){this.updateCanvasContainerBoxLoc(),"touchstart"===t.type?(this.canvasMousePos.x=t.changedTouches[0].clientX-this.canvasContainerBoxLoc.x,this.canvasMousePos.y=t.changedTouches[0].clientY-this.canvasContainerBoxLoc.y):(this.canvasMousePos.x=t.clientX-this.canvasContainerBoxLoc.x,this.canvasMousePos.y=t.clientY-this.canvasContainerBoxLoc.y)},assignTargetRelSpots:function(t,e){this.relClaimTargetSpots[t]?s["default"].set(this.relClaimTargetSpots[t],e,this.relClaimSpots[e]):s["default"].set(this.relClaimTargetSpots,t,Object(o["a"])({},e,this.relClaimSpots[e]))},setSelfRelSpots:function(t,e){for(var n in this.relClaimSpots=Object.assign({},this.relClaimSpots,Object(o["a"])({},t,e)),this.relClaimTargetSpots)for(var i in this.relClaimTargetSpots[n])i===t&&(this.relClaimTargetSpots[n]?s["default"].set(this.relClaimTargetSpots[n],i,e):s["default"].set(this.relClaimTargetSpots,n,Object(o["a"])({},i,e)))},removeEntity:function(t){var e=this,n=this.apiUrl;u()({method:"POST",url:n+"/entity/remove",data:f.a.stringify({entityID:t}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(n){e.$emit("dropEntity",t,n.data.claimantIDs),e.entitiesToUpdate=n.data.claimantIDs}))},initiateProcessedEntities:function(){var t=this;Object.keys(this.processedEntitiesBetter).forEach((function(e,n){t.collection.Entities.some((function(t){return t.ID===e}))||(s["default"].delete(t.processedEntitiesBetter,e),s["default"].delete(t.relClaimTargetSpots,e))})),this.collection.Entities.forEach((function(e,n){Object.keys(t.processedEntitiesBetter).includes(e.ID)||s["default"].set(t.processedEntitiesBetter,e.ID,{dragging:{state:e.ID===t.activeEntity.entityID&&t.activeEntity.dragging.state},pressed:{state:e.ID===t.activeEntity.entityID?t.activeEntity.pressed.state:void 0},entitySelected:void 0,canvasMousePos:t.activeEntity.dragging&&t.activeEntity.entityID===e.ID?Object.assign({},t.canvasMousePos):void 0,entityLocationDef:void 0===t.collection.Entities[n]["entityLocationDef"]?{x:0,y:0}:Object.assign({},t.collection.Entities[n]["entityLocationDef"]),targetRelSpots:Object.assign({},t.relClaimTargetSpots[e.ID]),updateEntityData:!1})}))},emitGetRelation:function(t){console.log({relationID:t}),this.$emit("getRelation",t)},setRelationLineConfigs:function(t,e){s["default"].set(this.relationLineConfigs,t,e)}},watch:{windowSize:function(){var t=this,e=this.$refs.canvasContainer;e?setTimeout((function(){e=e.getBoundingClientRect(),t.canvasSize={height:e.height,width:e.width}}),50):this.canvasSize={height:0,width:0}},"collection.Entities":{handler:function(){this.initiateProcessedEntities()},deep:!0},relClaimTargetSpots:{handler:function(){var t=this;Object.entries(this.relClaimTargetSpots).forEach((function(e){var n=Object(r["a"])(e,2),i=n[0],a=n[1];Object.keys(t.processedEntitiesBetter).some((function(t){return t!==i}))&&(h()(a,t.processedEntitiesBetter[i].targetRelSpots)||s["default"].set(t.processedEntitiesBetter[i],"targetRelSpots",a))}))},deep:!0},activeEntity:{handler:function(){this.activeEntity.entityID?(this.prevActiveEntityID!==this.activeEntity.entityID&&(this.prevActiveEntityID&&Object.keys(this.processedEntitiesBetter).includes(this.prevActiveEntityID)&&(s["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"pressed",{state:void 0}),s["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"entitySelected",void 0)),this.prevActiveEntityID=this.activeEntity.entityID),this.activeEntity.pressed.state!==this.processedEntitiesBetter[this.activeEntity.entityID].pressed.state&&s["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"pressed",{state:this.activeEntity.pressed.state}),s["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"entitySelected",this.activeEntity.selected),this.activeEntity.dragging.state!==this.processedEntitiesBetter[this.activeEntity.entityID].dragging.state&&s["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"dragging",{state:this.activeEntity.dragging.state})):Object.keys(this.processedEntitiesBetter).includes(this.prevActiveEntityID)&&(s["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"pressed",{state:void 0}),s["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"entitySelected",void 0))},deep:!0},canvasMousePos:{handler:function(){this.activeEntity.entityID&&(this.activeEntity.dragging.state?s["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"canvasMousePos",{x:this.canvasMousePos.x-this.canvasLocation.x,y:this.canvasMousePos.y-this.canvasLocation.y}):Object.keys(this.processedEntitiesBetter).includes(this.prevActiveEntityID)&&s["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"canvasMousePos",void 0))},deep:!0},entitiesToUpdate:function(){this.entitiesToUpdate.length&&(s["default"].set(this.processedEntitiesBetter[this.entitiesToUpdate[0]],"updateEntityData",!0),s["default"].delete(this.entitiesToUpdate,0))}},created:function(){},mounted:function(){var t=this,e=this.$refs.canvasContainer;e?(e=e.getBoundingClientRect(),this.canvasSize={height:e.height,width:e.width}):this.canvasSize={height:0,width:0},this.initiateProcessedEntities(),n.e("chunk-vue-konva").then(n.t.bind(null,"7591",7)).then((function(e){s["default"].use(e),t.vueKonvaLoaded=!0}))},beforeUpdate:function(){},updated:function(){}},p=v,g=n("2877"),y=Object(g["a"])(p,i,a,!1,null,"53601b64",null);e["default"]=y.exports},"73ac":function(t,e,n){var i=n("743f"),a=n("b047"),r=n("99d3"),o=r&&r.isTypedArray,s=o?a(o):i;t.exports=s},"743f":function(t,e,n){var i=n("3729"),a=n("b218"),r=n("1310"),o="[object Arguments]",s="[object Array]",c="[object Boolean]",u="[object Date]",d="[object Error]",f="[object Function]",l="[object Map]",h="[object Number]",v="[object Object]",p="[object RegExp]",g="[object Set]",y="[object String]",b="[object WeakMap]",x="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",E="[object Float64Array]",w="[object Int8Array]",j="[object Int16Array]",S="[object Int32Array]",C="[object Uint8Array]",D="[object Uint8ClampedArray]",O="[object Uint16Array]",z="[object Uint32Array]",I={};function L(t){return r(t)&&a(t.length)&&!!I[i(t)]}I[m]=I[E]=I[w]=I[j]=I[S]=I[C]=I[D]=I[O]=I[z]=!0,I[o]=I[s]=I[x]=I[c]=I[_]=I[u]=I[d]=I[f]=I[l]=I[h]=I[v]=I[p]=I[g]=I[y]=I[b]=!1,t.exports=L},"79bc":function(t,e,n){var i=n("0b07"),a=n("2b3e"),r=i(a,"Map");t.exports=r},"7a48":function(t,e,n){var i=n("6044"),a=Object.prototype,r=a.hasOwnProperty;function o(t){var e=this.__data__;return i?void 0!==e[t]:r.call(e,t)}t.exports=o},"7b83":function(t,e,n){var i=n("7c64"),a=n("93ed"),r=n("2478"),o=n("a524"),s=n("1fc8");function c(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var i=t[e];this.set(i[0],i[1])}}c.prototype.clear=i,c.prototype["delete"]=a,c.prototype.get=r,c.prototype.has=o,c.prototype.set=s,t.exports=c},"7b97":function(t,e,n){var i=n("7e64"),a=n("a2be"),r=n("1c3c"),o=n("b1e5"),s=n("42a2"),c=n("6747"),u=n("0d24"),d=n("73ac"),f=1,l="[object Arguments]",h="[object Array]",v="[object Object]",p=Object.prototype,g=p.hasOwnProperty;function y(t,e,n,p,y,b){var x=c(t),_=c(e),m=x?h:s(t),E=_?h:s(e);m=m==l?v:m,E=E==l?v:E;var w=m==v,j=E==v,S=m==E;if(S&&u(t)){if(!u(e))return!1;x=!0,w=!1}if(S&&!w)return b||(b=new i),x||d(t)?a(t,e,n,p,y,b):r(t,e,m,n,p,y,b);if(!(n&f)){var C=w&&g.call(t,"__wrapped__"),D=j&&g.call(e,"__wrapped__");if(C||D){var O=C?t.value():t,z=D?e.value():e;return b||(b=new i),y(O,z,n,p,b)}}return!!S&&(b||(b=new i),o(t,e,n,p,y,b))}t.exports=y},"7c64":function(t,e,n){var i=n("e24b"),a=n("5e2e"),r=n("79bc");function o(){this.size=0,this.__data__={hash:new i,map:new(r||a),string:new i}}t.exports=o},"7d1f":function(t,e,n){var i=n("087d"),a=n("6747");function r(t,e,n){var r=e(t);return a(t)?r:i(r,n(t))}t.exports=r},"7e64":function(t,e,n){var i=n("5e2e"),a=n("efb6"),r=n("2fcc"),o=n("802a"),s=n("55a3"),c=n("d02c");function u(t){var e=this.__data__=new i(t);this.size=e.size}u.prototype.clear=a,u.prototype["delete"]=r,u.prototype.get=o,u.prototype.has=s,u.prototype.set=c,t.exports=u},"7ed2":function(t,e){var n="__lodash_hash_undefined__";function i(t){return this.__data__.set(t,n),this}t.exports=i},"802a":function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},"91e9":function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},"93ed":function(t,e,n){var i=n("4245");function a(t){var e=i(this,t)["delete"](t);return this.size-=e?1:0,e}t.exports=a},9520:function(t,e,n){var i=n("3729"),a=n("1a8c"),r="[object AsyncFunction]",o="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";function u(t){if(!a(t))return!1;var e=i(t);return e==o||e==s||e==r||e==c}t.exports=u},9638:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},"99d3":function(t,e,n){(function(t){var i=n("585a"),a=e&&!e.nodeType&&e,r=a&&"object"==typeof t&&t&&!t.nodeType&&t,o=r&&r.exports===a,s=o&&i.process,c=function(){try{var t=r&&r.require&&r.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(e){}}();t.exports=c}).call(this,n("62e4")(t))},"9e69":function(t,e,n){var i=n("2b3e"),a=i.Symbol;t.exports=a},a2be:function(t,e,n){var i=n("d612"),a=n("4284"),r=n("c584"),o=1,s=2;function c(t,e,n,c,u,d){var f=n&o,l=t.length,h=e.length;if(l!=h&&!(f&&h>l))return!1;var v=d.get(t);if(v&&d.get(e))return v==e;var p=-1,g=!0,y=n&s?new i:void 0;d.set(t,e),d.set(e,t);while(++p<l){var b=t[p],x=e[p];if(c)var _=f?c(x,b,p,e,t,d):c(b,x,p,t,e,d);if(void 0!==_){if(_)continue;g=!1;break}if(y){if(!a(e,(function(t,e){if(!r(y,e)&&(b===t||u(b,t,n,c,d)))return y.push(e)}))){g=!1;break}}else if(b!==x&&!u(b,x,n,c,d)){g=!1;break}}return d["delete"](t),d["delete"](e),g}t.exports=c},a524:function(t,e,n){var i=n("4245");function a(t){return i(this,t).has(t)}t.exports=a},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},a994:function(t,e,n){var i=n("7d1f"),a=n("32f4"),r=n("ec69");function o(t){return i(t,r,a)}t.exports=o},ac41:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}t.exports=n},ade3:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},b047:function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},b1e5:function(t,e,n){var i=n("a994"),a=1,r=Object.prototype,o=r.hasOwnProperty;function s(t,e,n,r,s,c){var u=n&a,d=i(t),f=d.length,l=i(e),h=l.length;if(f!=h&&!u)return!1;var v=f;while(v--){var p=d[v];if(!(u?p in e:o.call(e,p)))return!1}var g=c.get(t);if(g&&c.get(e))return g==e;var y=!0;c.set(t,e),c.set(e,t);var b=u;while(++v<f){p=d[v];var x=t[p],_=e[p];if(r)var m=u?r(_,x,p,e,t,c):r(x,_,p,t,e,c);if(!(void 0===m?x===_||s(x,_,n,r,c):m)){y=!1;break}b||(b="constructor"==p)}if(y&&!b){var E=t.constructor,w=e.constructor;E==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof E&&E instanceof E&&"function"==typeof w&&w instanceof w||(y=!1)}return c["delete"](t),c["delete"](e),y}t.exports=s},b218:function(t,e){var n=9007199254740991;function i(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}t.exports=i},b4c0:function(t,e,n){var i=n("cb5a");function a(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]}t.exports=a},b5a7:function(t,e,n){var i=n("0b07"),a=n("2b3e"),r=i(a,"DataView");t.exports=r},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),r=n("df75"),o=n("d039"),s=o((function(){r(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(t){return r(a(t))}})},bbc0:function(t,e,n){var i=n("6044"),a="__lodash_hash_undefined__",r=Object.prototype,o=r.hasOwnProperty;function s(t){var e=this.__data__;if(i){var n=e[t];return n===a?void 0:n}return o.call(e,t)?e[t]:void 0}t.exports=s},c05f:function(t,e,n){var i=n("7b97"),a=n("1310");function r(t,e,n,o,s){return t===e||(null==t||null==e||!a(t)&&!a(e)?t!==t&&e!==e:i(t,e,n,o,r,s))}t.exports=r},c098:function(t,e){var n=9007199254740991,i=/^(?:0|[1-9]\d*)$/;function a(t,e){var a=typeof t;return e=null==e?n:e,!!e&&("number"==a||"symbol"!=a&&i.test(t))&&t>-1&&t%1==0&&t<e}t.exports=a},c584:function(t,e){function n(t,e){return t.has(e)}t.exports=n},c869:function(t,e,n){var i=n("0b07"),a=n("2b3e"),r=i(a,"Set");t.exports=r},cb5a:function(t,e,n){var i=n("9638");function a(t,e){var n=t.length;while(n--)if(i(t[n][0],e))return n;return-1}t.exports=a},d02c:function(t,e,n){var i=n("5e2e"),a=n("79bc"),r=n("7b83"),o=200;function s(t,e){var n=this.__data__;if(n instanceof i){var s=n.__data__;if(!a||s.length<o-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new r(s)}return n.set(t,e),this.size=n.size,this}t.exports=s},d327:function(t,e){function n(){return[]}t.exports=n},d370:function(t,e,n){var i=n("253c"),a=n("1310"),r=Object.prototype,o=r.hasOwnProperty,s=r.propertyIsEnumerable,c=i(function(){return arguments}())?i:function(t){return a(t)&&o.call(t,"callee")&&!s.call(t,"callee")};t.exports=c},d612:function(t,e,n){var i=n("7b83"),a=n("7ed2"),r=n("dc0f");function o(t){var e=-1,n=null==t?0:t.length;this.__data__=new i;while(++e<n)this.add(t[e])}o.prototype.add=o.prototype.push=a,o.prototype.has=r,t.exports=o},da03:function(t,e,n){var i=n("2b3e"),a=i["__core-js_shared__"];t.exports=a},dc0f:function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},dc57:function(t,e){var n=Function.prototype,i=n.toString;function a(t){if(null!=t){try{return i.call(t)}catch(e){}try{return t+""}catch(e){}}return""}t.exports=a},e24b:function(t,e,n){var i=n("49f4"),a=n("1efc"),r=n("bbc0"),o=n("7a48"),s=n("2524");function c(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var i=t[e];this.set(i[0],i[1])}}c.prototype.clear=i,c.prototype["delete"]=a,c.prototype.get=r,c.prototype.has=o,c.prototype.set=s,t.exports=c},eac5:function(t,e){var n=Object.prototype;function i(t){var e=t&&t.constructor,i="function"==typeof e&&e.prototype||n;return t===i}t.exports=i},ec69:function(t,e,n){var i=n("6fcd"),a=n("03dd"),r=n("30c9");function o(t){return r(t)?i(t):a(t)}t.exports=o},edfa:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}t.exports=n},efb6:function(t,e,n){var i=n("5e2e");function a(){this.__data__=new i,this.size=0}t.exports=a},fba5:function(t,e,n){var i=n("cb5a");function a(t){return i(this.__data__,t)>-1}t.exports=a}}]);