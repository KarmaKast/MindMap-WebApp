(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e4d1506"],{6185:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.showPage,expression:"showPage"}],style:e.containerStyle,attrs:{id:"aboutPage"}},[r("div",{style:e.aboutSectionStyle,attrs:{id:"aboutSection"}},[r("button",{style:e.closeButtonStyle,attrs:{id:"closePageBttn"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.closePage(t)},mouseover:function(t){e.isHovered=!0},mouseout:function(t){e.isHovered=!1}}},[r("img",{style:{height:"100%",width:"100%",borderRadius:"inherit"},attrs:{src:o("ec4b")}})]),r("p",{style:e.pStyle},[r("span",{style:{fontSize:"20px"}},[r("a",{style:{pointerEvents:"initial"},attrs:{href:"https://github.com/KarmaKast/MindMap-WebApp",target:"_blank"}},[e._v(e._s(e.appName))]),e._v(" - v"+e._s(e.version))]),r("br"),r("br"),e._v(" A Mindmap web app that uses "),r("a",{style:{pointerEvents:"initial"},attrs:{href:"https://github.com/KarmaKast/morph-dbms-core",target:"_blank"}},[e._v("morph-dbms-core")]),e._v(" . Currently everything is in prototyping state. "),r("br"),r("br"),r("br"),e._v(" - setup "),r("a",{style:{pointerEvents:"initial"},attrs:{href:"https://github.com/KarmaKast/morph-dbms-API/",target:"_blank"}},[e._v("morph-dbms-API")]),e._v(" (runs at localhost:3000) ")])])])},s=[],i={name:"aboutPage",props:{colors:Object,colorsProcessed:Object,showPage:Boolean},data:function(){return{isHovered:!1,version:"0.6.12",appName:"MapThyMind"}},computed:{containerStyle:function(){return{position:"absolute",height:"100%",width:"100%",background:CSS.supports("backdrop-filter: blur(3px)")?`hsla(0, 0%, ${this.colors["background"].l}%, 0.19)`:`hsla(0, 0%,  ${this.colors["background"].l}%, 1)`,backdropFilter:"blur(6px)",display:"grid",placeItems:"center",pointerEvents:"all"}},aboutSectionStyle:function(){return{background:""+this.colorsProcessed["background"],borderRadius:"28px",padding:"15px",height:"fit-content",maxWidth:"400px",minWidth:"280px",width:"20%",border:"1px dashed "+this.colorsProcessed["theme"],boxSizing:"border-box",display:"grid",gridTemplateRows:"30px auto",gridTemplateColumns:"30px auto",gridRowGap:"10px"}},closeButtonStyle:function(){return{background:this.isHovered?"rgba(255, 255, 255, 0.8)":"rgba(255, 255, 255, 0.4)",border:"0.5px dashed "+this.colorsProcessed["theme"],boxShadow:"0px 0px 2px 1px hsla(0, 0%, 0%, 0.1882)",boxSizing:"border-box",borderRadius:"100%",gridArea:"1 / 1 / 2 / 2",padding:"0px",display:"grid",placeItems:"center",outline:"none",cursor:"pointer"}},pStyle:function(){return{height:"auto",width:"auto",gridArea:"2 / 1 / 3 / 3",pointerEvents:"none",boxSizing:"border-box",padding:"20px 20px",margin:"0px",textAlign:"left",color:""+this.colorsProcessed["text"]}}},watch:{},methods:{onEscapeKeyUp(e){"Escape"===e.key&&this.closePage()},closePage(){this.$emit("closePage")}},mounted(){window.addEventListener("keyup",this.onEscapeKeyUp)},beforeDestroy(){window.removeEventListener("keyup",this.onEscapeKeyUp)}},n=i,a=o("2877"),p=Object(a["a"])(n,r,s,!1,null,"9e17707c",null);t["default"]=p.exports},ec4b:function(e,t,o){e.exports=o.p+"img/ic_chevron_left_48px.5bbac221.svg"}}]);