(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cebee"],{6185:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.showPage,expression:"showPage"}],style:e.containerStyle,attrs:{id:"aboutPage"}},[o("div",{style:e.aboutSectionStyle,attrs:{id:"aboutSection"}},[o("button",{style:e.closeButtonStyle,attrs:{id:"closePageBttn"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.closePage(t)},mouseover:function(t){e.isHovered=!0},mouseout:function(t){e.isHovered=!1}}},[o("icon-base",{attrs:{iconName:"Back",iconColor:e.colorsProcessed["theme"],height:"100%",width:"100%",role:"button",viewBox:"0 0 48 48"}},[o("icon-direction-left")],1)],1),o("p",{style:e.pStyle},[o("span",{style:{fontSize:"20px"}},[o("a",{style:{pointerEvents:"initial",color:e.colorsProcessed["theme_light"]},attrs:{href:"https://github.com/KarmaKast/MindMap-WebApp",target:"_blank"}},[o("icon-base",{style:{display:"inline"},attrs:{iconName:"open in new Tab",viewBox:"0 0 24 24"}},[o("icon-open-in-new")],1),e._v(" "+e._s(e.appName))],1),e._v(" - v"+e._s(e.version))]),o("br"),o("br"),e._v(" A Mindmap web app that uses "),o("a",{style:{pointerEvents:"initial",color:e.colorsProcessed["theme_light"]},attrs:{href:"https://github.com/KarmaKast/morph-dbms-core",target:"_blank"}},[o("icon-base",{style:{display:"inline"},attrs:{iconName:"open in new Tab",viewBox:"0 0 24 24"}},[o("icon-open-in-new")],1),e._v(" morph-dbms-core")],1),e._v(" . Currently everything is in prototyping state. "),o("br"),o("br"),o("br"),e._v(" - setup "),o("a",{style:{pointerEvents:"initial",color:e.colorsProcessed["theme_light"]},attrs:{href:"https://github.com/KarmaKast/morph-dbms-API/",target:"_blank"}},[o("icon-base",{style:{display:"inline"},attrs:{iconName:"open in new Tab",viewBox:"0 0 24 24"}},[o("icon-open-in-new")],1),e._v(" morph-dbms-API")],1),e._v(" (runs at localhost:3000) ")])])])},i=[],s=(o("e6cf"),{name:"aboutPage",components:{iconBase:()=>Promise.resolve().then(o.bind(null,"44b7")),iconOpenInNew:()=>o.e("chunk-2d0c115c").then(o.bind(null,"4516")),iconDirectionLeft:()=>o.e("chunk-2d2079a5").then(o.bind(null,"a0dd"))},props:{colors:Object,colorsProcessed:Object,showPage:Boolean},data:function(){return{isHovered:!1,version:"0.7.0",appName:"MapThyMind"}},computed:{containerStyle:function(){return{position:"absolute",height:"100%",width:"100%",background:CSS.supports("backdrop-filter: blur(3px)")?`hsla(0, 0%, ${this.colors["background"].l}%, 0.19)`:`hsla(0, 0%,  ${this.colors["background"].l}%, 1)`,backdropFilter:"blur(6px)",display:"grid",placeItems:"center",pointerEvents:"all"}},aboutSectionStyle:function(){return{background:""+this.colorsProcessed["background"],borderRadius:"28px",padding:"15px",height:"fit-content",maxWidth:"400px",minWidth:"300px",width:"20%",border:"1px dashed "+this.colorsProcessed["theme"],boxSizing:"border-box",display:"grid",gridTemplateRows:"30px auto",gridTemplateColumns:"30px auto",gridRowGap:"10px"}},closeButtonStyle:function(){return{background:this.isHovered?""+this.colorsProcessed["backgroundShade2"]:""+this.colorsProcessed["background"],border:"0.5px dashed "+this.colorsProcessed["theme"],boxSizing:"border-box",borderRadius:"100%",gridArea:"1 / 1 / 2 / 2",padding:"0px",display:"grid",placeItems:"center",outline:"none",cursor:"pointer"}},pStyle:function(){return{height:"auto",width:"auto",gridArea:"2 / 1 / 3 / 3",pointerEvents:"none",boxSizing:"border-box",padding:"20px 20px",margin:"0px",textAlign:"left",color:""+this.colorsProcessed["text"]}}},watch:{},methods:{onEscapeKeyUp(e){"Escape"===e.key&&this.closePage()},closePage(){this.$emit("closePage")}},mounted(){window.addEventListener("keyup",this.onEscapeKeyUp)},beforeDestroy(){window.removeEventListener("keyup",this.onEscapeKeyUp)}}),r=s,a=o("2877"),c=Object(a["a"])(r,n,i,!1,null,"64415030",null);t["default"]=c.exports}}]);