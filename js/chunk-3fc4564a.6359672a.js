(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fc4564a"],{"00fd":function(t,e,n){var i=n("9e69"),r=Object.prototype,a=r.hasOwnProperty,s=r.toString,o=i?i.toStringTag:void 0;function c(t){var e=a.call(t,o),n=t[o];try{t[o]=void 0;var i=!0}catch(c){}var r=s.call(t);return i&&(e?t[o]=n:delete t[o]),r}t.exports=c},"03dd":function(t,e,n){var i=n("eac5"),r=n("57a5"),a=Object.prototype,s=a.hasOwnProperty;function o(t){if(!i(t))return r(t);var e=[];for(var n in Object(t))s.call(t,n)&&"constructor"!=n&&e.push(n);return e}t.exports=o},"07c7":function(t,e){function n(){return!1}t.exports=n},"087d":function(t,e){function n(t,e){var n=-1,i=e.length,r=t.length;while(++n<i)t[r+n]=e[n];return t}t.exports=n},"0b07":function(t,e,n){var i=n("34ac"),r=n("3698");function a(t,e){var n=r(t,e);return i(n)?n:void 0}t.exports=a},"0d24":function(t,e,n){(function(t){var i=n("2b3e"),r=n("07c7"),a=e&&!e.nodeType&&e,s=a&&"object"==typeof t&&t&&!t.nodeType&&t,o=s&&s.exports===a,c=o?i.Buffer:void 0,u=c?c.isBuffer:void 0,h=u||r;t.exports=h}).call(this,n("62e4")(t))},1290:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},1310:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},1368:function(t,e,n){var i=n("da03"),r=function(){var t=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function a(t){return!!r&&r in t}t.exports=a},"1a8c":function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},"1c3c":function(t,e,n){var i=n("9e69"),r=n("2474"),a=n("9638"),s=n("a2be"),o=n("edfa"),c=n("ac41"),u=1,h=2,d="[object Boolean]",l="[object Date]",f="[object Error]",p="[object Map]",v="[object Number]",y="[object RegExp]",g="[object Set]",b="[object String]",x="[object Symbol]",_="[object ArrayBuffer]",m="[object DataView]",w=i?i.prototype:void 0,S=w?w.valueOf:void 0;function j(t,e,n,i,w,j,E){switch(n){case m:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case _:return!(t.byteLength!=e.byteLength||!j(new r(t),new r(e)));case d:case l:case v:return a(+t,+e);case f:return t.name==e.name&&t.message==e.message;case y:case b:return t==e+"";case p:var C=o;case g:var O=i&u;if(C||(C=c),t.size!=e.size&&!O)return!1;var D=E.get(t);if(D)return D==e;i|=h,E.set(t,e);var I=s(C(t),C(e),i,w,j,E);return E["delete"](t),I;case x:if(S)return S.call(t)==S.call(e)}return!1}t.exports=j},"1cec":function(t,e,n){var i=n("0b07"),r=n("2b3e"),a=i(r,"Promise");t.exports=a},"1efc":function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},"1fc8":function(t,e,n){var i=n("4245");function r(t,e){var n=i(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}t.exports=r},2474:function(t,e,n){var i=n("2b3e"),r=i.Uint8Array;t.exports=r},2478:function(t,e,n){var i=n("4245");function r(t){return i(this,t).get(t)}t.exports=r},2524:function(t,e,n){var i=n("6044"),r="__lodash_hash_undefined__";function a(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=i&&void 0===e?r:e,this}t.exports=a},2532:function(t,e,n){"use strict";var i=n("23e7"),r=n("5a34"),a=n("1d80"),s=n("ab13");i({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(a(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"253c":function(t,e,n){var i=n("3729"),r=n("1310"),a="[object Arguments]";function s(t){return r(t)&&i(t)==a}t.exports=s},"28c9":function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},"29f3":function(t,e){var n=Object.prototype,i=n.toString;function r(t){return i.call(t)}t.exports=r},"2b3e":function(t,e,n){var i=n("585a"),r="object"==typeof self&&self&&self.Object===Object&&self,a=i||r||Function("return this")();t.exports=a},"2d7c":function(t,e){function n(t,e){var n=-1,i=null==t?0:t.length,r=0,a=[];while(++n<i){var s=t[n];e(s,n,t)&&(a[r++]=s)}return a}t.exports=n},"2fcc":function(t,e){function n(t){var e=this.__data__,n=e["delete"](t);return this.size=e.size,n}t.exports=n},"30c9":function(t,e,n){var i=n("9520"),r=n("b218");function a(t){return null!=t&&r(t.length)&&!i(t)}t.exports=a},"32f4":function(t,e,n){var i=n("2d7c"),r=n("d327"),a=Object.prototype,s=a.propertyIsEnumerable,o=Object.getOwnPropertySymbols,c=o?function(t){return null==t?[]:(t=Object(t),i(o(t),(function(e){return s.call(t,e)})))}:r;t.exports=c},"34ac":function(t,e,n){var i=n("9520"),r=n("1368"),a=n("1a8c"),s=n("dc57"),o=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,u=Function.prototype,h=Object.prototype,d=u.toString,l=h.hasOwnProperty,f=RegExp("^"+d.call(l).replace(o,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(t){if(!a(t)||r(t))return!1;var e=i(t)?f:c;return e.test(s(t))}t.exports=p},3698:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},3729:function(t,e,n){var i=n("9e69"),r=n("00fd"),a=n("29f3"),s="[object Null]",o="[object Undefined]",c=i?i.toStringTag:void 0;function u(t){return null==t?void 0===t?o:s:c&&c in Object(t)?r(t):a(t)}t.exports=u},"37e8":function(t,e,n){var i=n("83ab"),r=n("9bf2"),a=n("825a"),s=n("df75");t.exports=i?Object.defineProperties:function(t,e){a(t);var n,i=s(e),o=i.length,c=0;while(o>c)r.f(t,n=i[c++],e[n]);return t}},"39ff":function(t,e,n){var i=n("0b07"),r=n("2b3e"),a=i(r,"WeakMap");t.exports=a},"3bbe":function(t,e,n){var i=n("861d");t.exports=function(t){if(!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},4245:function(t,e,n){var i=n("1290");function r(t,e){var n=t.__data__;return i(e)?n["string"==typeof e?"string":"hash"]:n.map}t.exports=r},4284:function(t,e){function n(t,e){var n=-1,i=null==t?0:t.length;while(++n<i)if(e(t[n],n,t))return!0;return!1}t.exports=n},"42a2":function(t,e,n){var i=n("b5a7"),r=n("79bc"),a=n("1cec"),s=n("c869"),o=n("39ff"),c=n("3729"),u=n("dc57"),h="[object Map]",d="[object Object]",l="[object Promise]",f="[object Set]",p="[object WeakMap]",v="[object DataView]",y=u(i),g=u(r),b=u(a),x=u(s),_=u(o),m=c;(i&&m(new i(new ArrayBuffer(1)))!=v||r&&m(new r)!=h||a&&m(a.resolve())!=l||s&&m(new s)!=f||o&&m(new o)!=p)&&(m=function(t){var e=c(t),n=e==d?t.constructor:void 0,i=n?u(n):"";if(i)switch(i){case y:return v;case g:return h;case b:return l;case x:return f;case _:return p}return e}),t.exports=m},"44d2":function(t,e,n){var i=n("b622"),r=n("7c73"),a=n("9bf2"),s=i("unscopables"),o=Array.prototype;void 0==o[s]&&a.f(o,s,{configurable:!0,value:r(null)}),t.exports=function(t){o[s][t]=!0}},"49f4":function(t,e,n){var i=n("6044");function r(){this.__data__=i?i(null):{},this.size=0}t.exports=r},"50d8":function(t,e){function n(t,e){var n=-1,i=Array(t);while(++n<t)i[n]=e(n);return i}t.exports=n},"55a3":function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},"57a5":function(t,e,n){var i=n("91e9"),r=i(Object.keys,Object);t.exports=r},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},"5e2e":function(t,e,n){var i=n("28c9"),r=n("69d5"),a=n("b4c0"),s=n("fba5"),o=n("67ca");function c(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var i=t[e];this.set(i[0],i[1])}}c.prototype.clear=i,c.prototype["delete"]=r,c.prototype.get=a,c.prototype.has=s,c.prototype.set=o,t.exports=c},6044:function(t,e,n){var i=n("0b07"),r=i(Object,"create");t.exports=r},"60da":function(t,e,n){"use strict";var i=n("83ab"),r=n("d039"),a=n("df75"),s=n("7418"),o=n("d1e7"),c=n("7b0b"),u=n("44ad"),h=Object.assign,d=Object.defineProperty;t.exports=!h||r((function(){if(i&&1!==h({b:1},h(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=h({},t)[n]||a(h({},e)).join("")!=r}))?function(t,e){var n=c(t),r=arguments.length,h=1,d=s.f,l=o.f;while(r>h){var f,p=u(arguments[h++]),v=d?a(p).concat(d(p)):a(p),y=v.length,g=0;while(y>g)f=v[g++],i&&!l.call(p,f)||(n[f]=p[f])}return n}:h},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"63ea":function(t,e,n){var i=n("c05f");function r(t,e){return i(t,e)}t.exports=r},6747:function(t,e){var n=Array.isArray;t.exports=n},"67ca":function(t,e,n){var i=n("cb5a");function r(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}t.exports=r},"69d5":function(t,e,n){var i=n("cb5a"),r=Array.prototype,a=r.splice;function s(t){var e=this.__data__,n=i(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():a.call(e,n,1),--this.size,!0}t.exports=s},"6fcd":function(t,e,n){var i=n("50d8"),r=n("d370"),a=n("6747"),s=n("0d24"),o=n("c098"),c=n("73ac"),u=Object.prototype,h=u.hasOwnProperty;function d(t,e){var n=a(t),u=!n&&r(t),d=!n&&!u&&s(t),l=!n&&!u&&!d&&c(t),f=n||u||d||l,p=f?i(t.length,String):[],v=p.length;for(var y in t)!e&&!h.call(t,y)||f&&("length"==y||d&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||o(y,v))||p.push(y);return p}t.exports=d},"72e0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"touch",rawName:"v-touch:moving",value:t.getMousePos,expression:"getMousePos",arg:"moving"},{name:"touch",rawName:"v-touch:end.prevent",value:t.deactivateAllEntities,expression:"deactivateAllEntities",arg:"end",modifiers:{prevent:!0}},{name:"touch",rawName:"v-touch:start.self",value:t.startCanvasDragging,expression:"startCanvasDragging",arg:"start",modifiers:{self:!0}},{name:"touch",rawName:"v-touch:end.self",value:t.endCanvasDragging,expression:"endCanvasDragging",arg:"end",modifiers:{self:!0}},{name:"touch",rawName:"v-touch:tap.self",value:t.handleCanvasTap,expression:"handleCanvasTap",arg:"tap",modifiers:{self:!0}}],ref:"canvasContainer",style:t.canvasContainerStyle,attrs:{id:"canvasContainer"},on:{mousemove:t.getMousePos,mouseleave:t.endCanvasDragging}},[n("div",{staticClass:"canvas-grid",style:{pointerEvents:"none",position:"absolute"}},[n("v-stage",{attrs:{config:{width:t.canvasSize.width,height:t.canvasSize.height}}},[n("v-layer",[n("v-group",{attrs:{config:t.canvasGridStyle}},[t._l(new Array(parseInt(t.canvasSize.width/t.grid.size)),(function(e,i){return n("v-line",{key:i+"vertical",attrs:{config:{points:[i*t.grid.size*2,0,i*t.grid.size*2,t.canvasSize.height+2*t.grid.size*2],stroke:t.canvasGridColors[0],strokeWidth:t.grid.width,lineCap:"round",lineJoin:"round",draggable:!1,closed:!1}}})})),t._l(new Array(parseInt(t.canvasSize.width/t.grid.size)),(function(e,i){return n("v-line",{key:i+"horizontal",attrs:{config:{points:[0,i*t.grid.size*2,t.canvasSize.width+2*t.grid.size*2,i*t.grid.size*2],stroke:t.canvasGridColors[0],strokeWidth:t.grid.width,lineCap:"round",lineJoin:"round",draggable:!1,closed:!1}}})}))],2),n("v-line",{attrs:{config:{points:[t.canvasSize.width/2,0,t.canvasSize.width/2,t.canvasSize.height],stroke:t.canvasGridColors[1],x:this.canvasLocation.x}}}),n("v-line",{attrs:{config:{points:[0,t.canvasSize.height/2,t.canvasSize.width,t.canvasSize.height/2],stroke:t.canvasGridColors[2],y:this.canvasLocation.y}}})],1)],1)],1),n("div",{attrs:{id:"entities"}},t._l(t.processedEntitiesBetter,(function(e,i){return n("entityComponent",{key:i,attrs:{colors:t.colors,entityID:i,apiUrl:t.apiUrl,autoSave:!1,apiValidity:t.apiValidity,canvasSize:t.canvasSize,canvasLocation:t.canvasLocation,canvasMousePos:e.canvasMousePos,dragging:e.dragging,pressed:e.pressed,entitySelected:e.entitySelected,entityLocationDef:e.entityLocationDef,grid:t.grid,targetRelSpots:e.targetRelSpots,updateEntityData:e.updateEntityData},on:{setStartingCanvasMousePos:t.setStartingCanvasMousePos,prevActiveEntityID:t.setPrevActiveEntityID,removeEntity:t.removeEntity,entityActivated:t.entityActivated,setSelfRelSpots:function(e){return t.setSelfRelSpots(i,e)},assignTargetRelSpots:function(e){return t.assignTargetRelSpots(i,e)}}})})),1)])},r=[],a=(n("e260"),n("cca6"),n("e6cf"),n("2532"),n("2ca0"),n("ddb0"),n("2b0e")),s=n("bc3a"),o=n.n(s),c=n("b383"),u=n.n(c),h=n("63ea"),d=n.n(h);const l=()=>n.e("chunk-0184db2a").then(n.bind(null,"fde5"));var f={name:"MindMapCanvas",components:{entityComponent:l},props:{colors:Object,colorsProcessed:Object,entities:Array,entityLimit:{default:10,type:Number},apiUrl:String,apiValidity:Boolean,grid:{default(){return{size:1,opacity:0,width:0,show:!0,snap:!0}},type:Object},popupLock:{default:!0,type:Boolean}},data:function(){return{mindmapCanvas:null,dragItemId:null,canvasLocation:{x:0,y:0},canvasMousePos:{x:0,y:0},canvasContainerBoxLoc:{x:0,y:0},prevActiveEntityID:void 0,activeEntity:{entityID:void 0,dragging:{state:!1},pressed:{state:!1},selected:!1},canvas:{taps:{timer:void 0,count:0},dragging:{state:!1,event:void 0,deltas:{x:0,y:0}}},relClaimTargetSpots:{},relClaimSpots:{},entitiesToUpdate:[],processedEntitiesBetter:{},canvasSize:{height:0,width:0}}},computed:{windowSize:function(){let t=this.$store.state.window_height,e=this.$store.state.window_width;return{height:t||0,width:e||0}},canvasContainerStyle:function(){return{height:"100%",width:"100%",position:"absolute",top:"0px",left:"0px",overflow:"hidden",backgroundColor:"inherit",cursor:this.canvas.dragging.state?"grabbing":"move"}},canvasGridColors:function(){return[`hsla(${this.colors["theme_light"].h}, ${this.colors["theme_light"].s}%, ${this.colors["theme_light"].l}%, ${this.grid.opacity/1.4})`,` hsla(183, 91%, 35%,${2*this.grid.opacity})`,`hsla(19, 100%, 35%, ${2*this.grid.opacity})`]},canvasGridStyle:function(){let t=2*this.grid.size,e=this.canvasSize.height+2*t,n=this.canvasSize.width+2*t;const i=(e/2+this.canvasLocation.y)%t-1*t,r=(n/2+this.canvasLocation.x)%t-1*t;return{width:this.canvasSize.width+2*this.grid.size*2,height:this.canvasSize.height+2*this.grid.size*2,y:i,x:r}}},methods:{setPrevActiveEntityID(t){console.log("I should only be called once"),this.prevActiveEntityID=t,a["default"].set(this.activeEntity,"entityID",t),a["default"].set(this.activeEntity,"selected",!0)},handleTouchEnd(t){t.preventDefault(),t.target&&this.setcanvas.dragging(),this.deactivateAllEntities(t)},updateCanvasContainerBoxLoc(){this.canvasContainerBoxLoc.x=this.$refs.canvasContainer.getBoundingClientRect().x,this.canvasContainerBoxLoc.y=this.$refs.canvasContainer.getBoundingClientRect().y},entityActivated(t,e){let n=this.activeEntity.entityID!==e;this.activeEntity.entityID=e,this.activeEntity.pressed.state=!0,setTimeout(()=>{this.activeEntity.pressed.state?(this.activeEntity.dragging.state=!0,this.activeEntity.selected=!1,this.updateCanvasContainerBoxLoc()):e===this.activeEntity.entityID&&(this.activeEntity.selected=!!n||!this.activeEntity.selected)},200)},deactivateAllEntities(t){([1].includes(t.which)||"touchend"===t.type)&&(!1===this.activeEntity.pressed.state?this.$refs.canvasContainer===t.target&&(this.activeEntity.selected=!1,this.activeEntity.entityID=void 0,this.$store.state.relClaimMode.mode&&this.$store.commit("update_relClaimMode",{mode:!1,targetID:null,claimantID:this.$store.state.relClaimMode.claimantID})):this.$refs.canvasContainer!==t.target&&(this.activeEntity.pressed.state=!1,this.activeEntity.dragging.state&&(this.activeEntity.dragging.state=!1)))},getMousePos(t){this.activeEntity.dragging.state,(this.activeEntity.dragging.state||this.canvas.dragging.state)&&("mousemove"===t.type?(a["default"].set(this.canvasMousePos,"x",t.clientX-this.canvasContainerBoxLoc.x),a["default"].set(this.canvasMousePos,"y",t.clientY-this.canvasContainerBoxLoc.y)):"touchmove"===t.type&&(a["default"].set(this.canvasMousePos,"x",t.touches[0].clientX-this.canvasContainerBoxLoc.x),a["default"].set(this.canvasMousePos,"y",t.touches[0].clientY-this.canvasContainerBoxLoc.y)),this.canvas.dragging.state&&(a["default"].set(this.canvasLocation,"x",this.canvasMousePos.x-this.canvasSize.width/2-this.canvas.dragging.deltas.x),a["default"].set(this.canvasLocation,"y",this.canvasMousePos.y-this.canvasSize.height/2-this.canvas.dragging.deltas.y)))},startCanvasDragging(t){if((t.type.startsWith("mouse")&&1===t.which||["touchend","touchstart"].includes(t.type))&&(!1!==this.canvas.dragging.state||!["mouseup","touchend"].includes(t.type))){this.updateCanvasContainerBoxLoc();let e={x:0,y:0};"mousedown"===t.type?(this.canvas.dragging.state=!0,this.canvas.dragging.event=t,e.x=t.clientX,e.y=t.clientY):t.type.startsWith("touch")&&(this.canvas.dragging.state=!0,this.canvas.dragging.event=t,e.x=t.changedTouches[0].clientX,e.y=t.changedTouches[0].clientY),this.canvas.dragging.state&&(this.canvas.dragging.deltas.x=e.x-this.canvasSize.width/2-this.canvasLocation.x-this.canvasContainerBoxLoc.x,this.canvas.dragging.deltas.y=e.y-this.canvasSize.height/2-this.canvasLocation.y-this.canvasContainerBoxLoc.y)}},endCanvasDragging(t){!(t.type.startsWith("mouse")&&1===t.which||["touchend","touchstart"].includes(t.type))||!1===this.canvas.dragging.state&&["mouseup","touchend"].includes(t.type)||(this.canvas.dragging.state=!1,this.canvas.dragging.deltas={x:0,y:0},this.canvas.dragging.event=void 0,this.canvas.dragging.deltas={x:0,y:0})},handleCanvasTap(t){t.preventDefault(),this.canvas.taps.count+=1;let e=250;this.canvas.taps.timer=setTimeout(()=>{if(this.canvas.taps.count>1){this.canvas.taps.count=0;let e={x:0,y:0};e=t.type.startsWith("mouse")?{x:t.clientX,y:t.clientY}:{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY},e.x=e.x-this.canvasSize.width/2-this.canvasLocation.x,e.y=e.y-this.canvasSize.height/2-this.canvasLocation.y,this.$emit("create-new-entity",e)}else this.canvas.taps.count=0;this.canvas.taps.timer=void 0},e)},setStartingCanvasMousePos(t){this.updateCanvasContainerBoxLoc(),"touchstart"===t.type?(this.canvasMousePos.x=t.changedTouches[0].clientX-this.canvasContainerBoxLoc.x,this.canvasMousePos.y=t.changedTouches[0].clientY-this.canvasContainerBoxLoc.y):(this.canvasMousePos.x=t.clientX-this.canvasContainerBoxLoc.x,this.canvasMousePos.y=t.clientY-this.canvasContainerBoxLoc.y)},assignTargetRelSpots(t,e){this.relClaimTargetSpots[t]?a["default"].set(this.relClaimTargetSpots[t],e,this.relClaimSpots[e]):a["default"].set(this.relClaimTargetSpots,t,{[e]:this.relClaimSpots[e]})},setSelfRelSpots(t,e){this.relClaimSpots=Object.assign({},this.relClaimSpots,{[t]:e});for(const n in this.relClaimTargetSpots)for(const i in this.relClaimTargetSpots[n])i===t&&(this.relClaimTargetSpots[n]?a["default"].set(this.relClaimTargetSpots[n],i,e):a["default"].set(this.relClaimTargetSpots,n,{[i]:e}))},removeEntity(t){let e=this.apiUrl;o()({method:"POST",url:e+"/entity/remove",data:u.a.stringify({entityID:t}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{this.$emit("dropEntity",t,e.data.claimantIDs),this.entitiesToUpdate=e.data.claimantIDs})},initiateProcessedEntities(){Object.keys(this.processedEntitiesBetter).forEach((t,e)=>{this.entities.some(e=>e.ID===t)||(a["default"].delete(this.processedEntitiesBetter,t),a["default"].delete(this.relClaimTargetSpots,t))}),this.entities.forEach((t,e)=>{Object.keys(this.processedEntitiesBetter).includes(t.ID)||a["default"].set(this.processedEntitiesBetter,t.ID,{dragging:{state:t.ID===this.activeEntity.entityID&&this.activeEntity.dragging.state},pressed:{state:t.ID===this.activeEntity.entityID?this.activeEntity.pressed.state:void 0},entitySelected:void 0,canvasMousePos:this.activeEntity.dragging&&this.activeEntity.entityID===t.ID?Object.assign({},this.canvasMousePos):void 0,entityLocationDef:void 0===this.entities[e]["entityLocationDef"]?{x:0,y:0}:Object.assign({},this.entities[e]["entityLocationDef"]),targetRelSpots:Object.assign({},this.relClaimTargetSpots[t.ID]),updateEntityData:!1})})}},watch:{windowSize(){let t=this.$refs.canvasContainer;t?setTimeout(()=>{t=t.getBoundingClientRect(),this.canvasSize={height:t.height,width:t.width}},50):this.canvasSize={height:0,width:0}},entities:{handler(){this.initiateProcessedEntities()},deep:!0},relClaimTargetSpots:{handler(){Object.entries(this.relClaimTargetSpots).forEach(([t,e])=>{Object.keys(this.processedEntitiesBetter).some(e=>e!==t)&&(d()(e,this.processedEntitiesBetter[t].targetRelSpots)||a["default"].set(this.processedEntitiesBetter[t],"targetRelSpots",e))})},deep:!0},activeEntity:{handler(){this.activeEntity.entityID?(this.prevActiveEntityID!==this.activeEntity.entityID&&(this.prevActiveEntityID&&Object.keys(this.processedEntitiesBetter).includes(this.prevActiveEntityID)&&(a["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"pressed",{state:void 0}),a["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"entitySelected",void 0)),this.prevActiveEntityID=this.activeEntity.entityID),this.activeEntity.pressed.state!==this.processedEntitiesBetter[this.activeEntity.entityID].pressed.state&&a["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"pressed",{state:this.activeEntity.pressed.state}),a["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"entitySelected",this.activeEntity.selected),this.activeEntity.dragging.state!==this.processedEntitiesBetter[this.activeEntity.entityID].dragging.state&&a["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"dragging",{state:this.activeEntity.dragging.state})):Object.keys(this.processedEntitiesBetter).includes(this.prevActiveEntityID)&&(a["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"pressed",{state:void 0}),a["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"entitySelected",void 0))},deep:!0},canvasMousePos:{handler(){this.activeEntity.entityID&&(this.activeEntity.dragging.state?a["default"].set(this.processedEntitiesBetter[this.activeEntity.entityID],"canvasMousePos",{x:this.canvasMousePos.x-this.canvasLocation.x,y:this.canvasMousePos.y-this.canvasLocation.y}):a["default"].set(this.processedEntitiesBetter[this.prevActiveEntityID],"canvasMousePos",void 0))},deep:!0},entitiesToUpdate(){this.entitiesToUpdate.length&&(a["default"].set(this.processedEntitiesBetter[this.entitiesToUpdate[0]],"updateEntityData",!0),a["default"].delete(this.entitiesToUpdate,0))}},created:function(){},mounted:function(){let t=this.$refs.canvasContainer;t?(t=t.getBoundingClientRect(),this.canvasSize={height:t.height,width:t.width}):this.canvasSize={height:0,width:0},this.initiateProcessedEntities()},beforeUpdate:function(){},updated:function(){}},p=f,v=n("2877"),y=Object(v["a"])(p,i,r,!1,null,"1dd835a3",null);e["default"]=y.exports},"73ac":function(t,e,n){var i=n("743f"),r=n("b047"),a=n("99d3"),s=a&&a.isTypedArray,o=s?r(s):i;t.exports=o},"743f":function(t,e,n){var i=n("3729"),r=n("b218"),a=n("1310"),s="[object Arguments]",o="[object Array]",c="[object Boolean]",u="[object Date]",h="[object Error]",d="[object Function]",l="[object Map]",f="[object Number]",p="[object Object]",v="[object RegExp]",y="[object Set]",g="[object String]",b="[object WeakMap]",x="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",w="[object Float64Array]",S="[object Int8Array]",j="[object Int16Array]",E="[object Int32Array]",C="[object Uint8Array]",O="[object Uint8ClampedArray]",D="[object Uint16Array]",I="[object Uint32Array]",L={};function A(t){return a(t)&&r(t.length)&&!!L[i(t)]}L[m]=L[w]=L[S]=L[j]=L[E]=L[C]=L[O]=L[D]=L[I]=!0,L[s]=L[o]=L[x]=L[c]=L[_]=L[u]=L[h]=L[d]=L[l]=L[f]=L[p]=L[v]=L[y]=L[g]=L[b]=!1,t.exports=A},"79bc":function(t,e,n){var i=n("0b07"),r=n("2b3e"),a=i(r,"Map");t.exports=a},"7a48":function(t,e,n){var i=n("6044"),r=Object.prototype,a=r.hasOwnProperty;function s(t){var e=this.__data__;return i?void 0!==e[t]:a.call(e,t)}t.exports=s},"7b0b":function(t,e,n){var i=n("1d80");t.exports=function(t){return Object(i(t))}},"7b83":function(t,e,n){var i=n("7c64"),r=n("93ed"),a=n("2478"),s=n("a524"),o=n("1fc8");function c(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var i=t[e];this.set(i[0],i[1])}}c.prototype.clear=i,c.prototype["delete"]=r,c.prototype.get=a,c.prototype.has=s,c.prototype.set=o,t.exports=c},"7b97":function(t,e,n){var i=n("7e64"),r=n("a2be"),a=n("1c3c"),s=n("b1e5"),o=n("42a2"),c=n("6747"),u=n("0d24"),h=n("73ac"),d=1,l="[object Arguments]",f="[object Array]",p="[object Object]",v=Object.prototype,y=v.hasOwnProperty;function g(t,e,n,v,g,b){var x=c(t),_=c(e),m=x?f:o(t),w=_?f:o(e);m=m==l?p:m,w=w==l?p:w;var S=m==p,j=w==p,E=m==w;if(E&&u(t)){if(!u(e))return!1;x=!0,S=!1}if(E&&!S)return b||(b=new i),x||h(t)?r(t,e,n,v,g,b):a(t,e,m,n,v,g,b);if(!(n&d)){var C=S&&y.call(t,"__wrapped__"),O=j&&y.call(e,"__wrapped__");if(C||O){var D=C?t.value():t,I=O?e.value():e;return b||(b=new i),g(D,I,n,v,b)}}return!!E&&(b||(b=new i),s(t,e,n,v,g,b))}t.exports=g},"7c64":function(t,e,n){var i=n("e24b"),r=n("5e2e"),a=n("79bc");function s(){this.size=0,this.__data__={hash:new i,map:new(a||r),string:new i}}t.exports=s},"7c73":function(t,e,n){var i,r=n("825a"),a=n("37e8"),s=n("7839"),o=n("d012"),c=n("1be4"),u=n("cc12"),h=n("f772"),d=">",l="<",f="prototype",p="script",v=h("IE_PROTO"),y=function(){},g=function(t){return l+p+d+t+l+"/"+p+d},b=function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e},x=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(g("document.F=Object")),t.close(),t.F},_=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(e){}_=i?b(i):x();var t=s.length;while(t--)delete _[f][s[t]];return _()};o[v]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(y[f]=r(t),n=new y,y[f]=null,n[v]=t):n=_(),void 0===e?n:a(n,e)}},"7d1f":function(t,e,n){var i=n("087d"),r=n("6747");function a(t,e,n){var a=e(t);return r(t)?a:i(a,n(t))}t.exports=a},"7dd0":function(t,e,n){"use strict";var i=n("23e7"),r=n("9ed3"),a=n("e163"),s=n("d2bb"),o=n("d44e"),c=n("9112"),u=n("6eeb"),h=n("b622"),d=n("c430"),l=n("3f8c"),f=n("ae93"),p=f.IteratorPrototype,v=f.BUGGY_SAFARI_ITERATORS,y=h("iterator"),g="keys",b="values",x="entries",_=function(){return this};t.exports=function(t,e,n,h,f,m,w){r(n,e,h);var S,j,E,C=function(t){if(t===f&&A)return A;if(!v&&t in I)return I[t];switch(t){case g:return function(){return new n(this,t)};case b:return function(){return new n(this,t)};case x:return function(){return new n(this,t)}}return function(){return new n(this)}},O=e+" Iterator",D=!1,I=t.prototype,L=I[y]||I["@@iterator"]||f&&I[f],A=!v&&L||C(f),P="Array"==e&&I.entries||L;if(P&&(S=a(P.call(new t)),p!==Object.prototype&&S.next&&(d||a(S)===p||(s?s(S,p):"function"!=typeof S[y]&&c(S,y,_)),o(S,O,!0,!0),d&&(l[O]=_))),f==b&&L&&L.name!==b&&(D=!0,A=function(){return L.call(this)}),d&&!w||I[y]===A||c(I,y,A),l[e]=A,f)if(j={values:C(b),keys:m?A:C(g),entries:C(x)},w)for(E in j)(v||D||!(E in I))&&u(I,E,j[E]);else i({target:e,proto:!0,forced:v||D},j);return j}},"7e64":function(t,e,n){var i=n("5e2e"),r=n("efb6"),a=n("2fcc"),s=n("802a"),o=n("55a3"),c=n("d02c");function u(t){var e=this.__data__=new i(t);this.size=e.size}u.prototype.clear=r,u.prototype["delete"]=a,u.prototype.get=s,u.prototype.has=o,u.prototype.set=c,t.exports=u},"7ed2":function(t,e){var n="__lodash_hash_undefined__";function i(t){return this.__data__.set(t,n),this}t.exports=i},"802a":function(t,e){function n(t){return this.__data__.get(t)}t.exports=n},"91e9":function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},"93ed":function(t,e,n){var i=n("4245");function r(t){var e=i(this,t)["delete"](t);return this.size-=e?1:0,e}t.exports=r},9520:function(t,e,n){var i=n("3729"),r=n("1a8c"),a="[object AsyncFunction]",s="[object Function]",o="[object GeneratorFunction]",c="[object Proxy]";function u(t){if(!r(t))return!1;var e=i(t);return e==s||e==o||e==a||e==c}t.exports=u},9638:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},"99d3":function(t,e,n){(function(t){var i=n("585a"),r=e&&!e.nodeType&&e,a=r&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===r,o=s&&i.process,c=function(){try{var t=a&&a.require&&a.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(e){}}();t.exports=c}).call(this,n("62e4")(t))},"9e69":function(t,e,n){var i=n("2b3e"),r=i.Symbol;t.exports=r},"9ed3":function(t,e,n){"use strict";var i=n("ae93").IteratorPrototype,r=n("7c73"),a=n("5c6c"),s=n("d44e"),o=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=r(i,{next:a(1,n)}),s(t,u,!1,!0),o[u]=c,t}},a2be:function(t,e,n){var i=n("d612"),r=n("4284"),a=n("c584"),s=1,o=2;function c(t,e,n,c,u,h){var d=n&s,l=t.length,f=e.length;if(l!=f&&!(d&&f>l))return!1;var p=h.get(t);if(p&&h.get(e))return p==e;var v=-1,y=!0,g=n&o?new i:void 0;h.set(t,e),h.set(e,t);while(++v<l){var b=t[v],x=e[v];if(c)var _=d?c(x,b,v,e,t,h):c(b,x,v,t,e,h);if(void 0!==_){if(_)continue;y=!1;break}if(g){if(!r(e,(function(t,e){if(!a(g,e)&&(b===t||u(b,t,n,c,h)))return g.push(e)}))){y=!1;break}}else if(b!==x&&!u(b,x,n,c,h)){y=!1;break}}return h["delete"](t),h["delete"](e),y}t.exports=c},a524:function(t,e,n){var i=n("4245");function r(t){return i(this,t).has(t)}t.exports=r},a994:function(t,e,n){var i=n("7d1f"),r=n("32f4"),a=n("ec69");function s(t){return i(t,a,r)}t.exports=s},ac41:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}t.exports=n},ae93:function(t,e,n){"use strict";var i,r,a,s=n("e163"),o=n("9112"),c=n("5135"),u=n("b622"),h=n("c430"),d=u("iterator"),l=!1,f=function(){return this};[].keys&&(a=[].keys(),"next"in a?(r=s(s(a)),r!==Object.prototype&&(i=r)):l=!0),void 0==i&&(i={}),h||c(i,d)||o(i,d,f),t.exports={IteratorPrototype:i,BUGGY_SAFARI_ITERATORS:l}},b047:function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},b1e5:function(t,e,n){var i=n("a994"),r=1,a=Object.prototype,s=a.hasOwnProperty;function o(t,e,n,a,o,c){var u=n&r,h=i(t),d=h.length,l=i(e),f=l.length;if(d!=f&&!u)return!1;var p=d;while(p--){var v=h[p];if(!(u?v in e:s.call(e,v)))return!1}var y=c.get(t);if(y&&c.get(e))return y==e;var g=!0;c.set(t,e),c.set(e,t);var b=u;while(++p<d){v=h[p];var x=t[v],_=e[v];if(a)var m=u?a(_,x,v,e,t,c):a(x,_,v,t,e,c);if(!(void 0===m?x===_||o(x,_,n,a,c):m)){g=!1;break}b||(b="constructor"==v)}if(g&&!b){var w=t.constructor,S=e.constructor;w==S||!("constructor"in t)||!("constructor"in e)||"function"==typeof w&&w instanceof w&&"function"==typeof S&&S instanceof S||(g=!1)}return c["delete"](t),c["delete"](e),g}t.exports=o},b218:function(t,e){var n=9007199254740991;function i(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}t.exports=i},b4c0:function(t,e,n){var i=n("cb5a");function r(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1]}t.exports=r},b5a7:function(t,e,n){var i=n("0b07"),r=n("2b3e"),a=i(r,"DataView");t.exports=a},bbc0:function(t,e,n){var i=n("6044"),r="__lodash_hash_undefined__",a=Object.prototype,s=a.hasOwnProperty;function o(t){var e=this.__data__;if(i){var n=e[t];return n===r?void 0:n}return s.call(e,t)?e[t]:void 0}t.exports=o},c05f:function(t,e,n){var i=n("7b97"),r=n("1310");function a(t,e,n,s,o){return t===e||(null==t||null==e||!r(t)&&!r(e)?t!==t&&e!==e:i(t,e,n,s,a,o))}t.exports=a},c098:function(t,e){var n=9007199254740991,i=/^(?:0|[1-9]\d*)$/;function r(t,e){var r=typeof t;return e=null==e?n:e,!!e&&("number"==r||"symbol"!=r&&i.test(t))&&t>-1&&t%1==0&&t<e}t.exports=r},c584:function(t,e){function n(t,e){return t.has(e)}t.exports=n},c869:function(t,e,n){var i=n("0b07"),r=n("2b3e"),a=i(r,"Set");t.exports=a},cb5a:function(t,e,n){var i=n("9638");function r(t,e){var n=t.length;while(n--)if(i(t[n][0],e))return n;return-1}t.exports=r},cca6:function(t,e,n){var i=n("23e7"),r=n("60da");i({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},d02c:function(t,e,n){var i=n("5e2e"),r=n("79bc"),a=n("7b83"),s=200;function o(t,e){var n=this.__data__;if(n instanceof i){var o=n.__data__;if(!r||o.length<s-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(o)}return n.set(t,e),this.size=n.size,this}t.exports=o},d2bb:function(t,e,n){var i=n("825a"),r=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(a){}return function(n,a){return i(n),r(a),e?t.call(n,a):n.__proto__=a,n}}():void 0)},d327:function(t,e){function n(){return[]}t.exports=n},d370:function(t,e,n){var i=n("253c"),r=n("1310"),a=Object.prototype,s=a.hasOwnProperty,o=a.propertyIsEnumerable,c=i(function(){return arguments}())?i:function(t){return r(t)&&s.call(t,"callee")&&!o.call(t,"callee")};t.exports=c},d612:function(t,e,n){var i=n("7b83"),r=n("7ed2"),a=n("dc0f");function s(t){var e=-1,n=null==t?0:t.length;this.__data__=new i;while(++e<n)this.add(t[e])}s.prototype.add=s.prototype.push=r,s.prototype.has=a,t.exports=s},da03:function(t,e,n){var i=n("2b3e"),r=i["__core-js_shared__"];t.exports=r},dc0f:function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},dc57:function(t,e){var n=Function.prototype,i=n.toString;function r(t){if(null!=t){try{return i.call(t)}catch(e){}try{return t+""}catch(e){}}return""}t.exports=r},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),a=n("e260"),s=n("9112"),o=n("b622"),c=o("iterator"),u=o("toStringTag"),h=a.values;for(var d in r){var l=i[d],f=l&&l.prototype;if(f){if(f[c]!==h)try{s(f,c,h)}catch(v){f[c]=h}if(f[u]||s(f,u,d),r[d])for(var p in a)if(f[p]!==a[p])try{s(f,p,a[p])}catch(v){f[p]=a[p]}}}},df75:function(t,e,n){var i=n("ca84"),r=n("7839");t.exports=Object.keys||function(t){return i(t,r)}},e163:function(t,e,n){var i=n("5135"),r=n("7b0b"),a=n("f772"),s=n("e177"),o=a("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},e177:function(t,e,n){var i=n("d039");t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e24b:function(t,e,n){var i=n("49f4"),r=n("1efc"),a=n("bbc0"),s=n("7a48"),o=n("2524");function c(t){var e=-1,n=null==t?0:t.length;this.clear();while(++e<n){var i=t[e];this.set(i[0],i[1])}}c.prototype.clear=i,c.prototype["delete"]=r,c.prototype.get=a,c.prototype.has=s,c.prototype.set=o,t.exports=c},e260:function(t,e,n){"use strict";var i=n("fc6a"),r=n("44d2"),a=n("3f8c"),s=n("69f3"),o=n("7dd0"),c="Array Iterator",u=s.set,h=s.getterFor(c);t.exports=o(Array,"Array",(function(t,e){u(this,{type:c,target:i(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,n=t.kind,i=t.index++;return!e||i>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:e[i],done:!1}:{value:[i,e[i]],done:!1}}),"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},eac5:function(t,e){var n=Object.prototype;function i(t){var e=t&&t.constructor,i="function"==typeof e&&e.prototype||n;return t===i}t.exports=i},ec69:function(t,e,n){var i=n("6fcd"),r=n("03dd"),a=n("30c9");function s(t){return a(t)?i(t):r(t)}t.exports=s},edfa:function(t,e){function n(t){var e=-1,n=Array(t.size);return t.forEach((function(t,i){n[++e]=[i,t]})),n}t.exports=n},efb6:function(t,e,n){var i=n("5e2e");function r(){this.__data__=new i,this.size=0}t.exports=r},fba5:function(t,e,n){var i=n("cb5a");function r(t){return i(this.__data__,t)>-1}t.exports=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);