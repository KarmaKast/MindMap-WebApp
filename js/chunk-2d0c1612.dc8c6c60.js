(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1612"],{4693:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",style:t.containerStyle},[o("div",{staticClass:"background",style:t.backgroundStyle}),o("p",{style:t.buttonTextStyle},[t._v(" "+t._s(t.buttonText)+" ")]),o("button",{staticClass:"primary-button",style:t.buttonStyle,on:{mousedown:function(e){t.clickStarted=!0},mouseup:function(e){t.clickStarted=!1},click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.setActive(e)},mouseover:function(e){return t.setButtonHovered("main")},mouseout:function(e){t.clickStarted=!1,t.unsetButtonHovered("main")}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.urlInField,expression:"urlInField"}],ref:"inputField",staticClass:"input-field",style:t.inputFieldStyle,attrs:{placeholder:"Connect to API"},domProps:{value:t.urlInField},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.testAPI(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.setNotActive(e)}],input:function(e){e.target.composing||(t.urlInField=e.target.value)}}}),o("button",{staticClass:"secondary-button",style:t.testButtonStyle,on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.testAPI(e)},mouseover:function(e){return t.setButtonHovered("test")},mouseout:function(e){return t.unsetButtonHovered("test")}}})])},i=[],r=(o("2f62"),{name:"buttonOne",props:{colors:Object,colorsProcessed:Object,validity:Boolean,index:{default:1,type:Number}},data:function(){return{buttonText:"Connect to API",active:!1,mainButtonIsHovered:!1,testButtonIsHovered:!1,size:[32,174],urlInField:"",clickStarted:!1}},computed:{urlInStore:function(){return this.$store.state.apiUrl[0]},containerStyle:function(){var t=`auto ${this.size[0]}px`;return{position:"relative",height:this.size[0]+"px",width:this.size[1]+"px",display:"grid",gridDirection:"row",gridTemplateColumns:this.active?t:"unset",placeItems:"center",borderRadius:"inherit",padding:"0px"}},backgroundStyle:function(){return{background:this.mainButtonIsHovered?`hsla(${this.colors["theme"].h},${this.colors["theme"].s}%,${this.colors["theme"].l+20}%,0.3)`:`hsla(${this.colors["background"].h},${this.colors["background"].s}%,${this.colors["background"].l+30}%,0.5)`,position:"absolute",top:"0px",height:"100%",width:"100%",border:this.mainButtonIsHovered?`1px dashed hsla(${this.colors["theme"].h}, ${this.colors["theme"].s}%, ${this.colors["theme"].l}%, 0.4)`:"none",boxSizing:"border-box",boxShadow:this.mainButtonIsHovered?this.clickStarted?"rgba(0, 0, 0, 0.24) 0px 0px 3px 0px":"rgba(0, 0, 0, 0.24) 0px 0px 6px 0px":"rgba(0, 0, 0, 0.24) 0px 0px 3px 0px",backdropFilter:"blur(4px)",borderRadius:"8px",textAlign:"center"}},buttonTextStyle:function(){return{display:this.active?"none":"block",position:"relative",margin:"0px",fontFamily:"Raleway",fontStyle:"normal",fontWeight:"500",fontSize:"15px",lineHeight:"7px",color:""+this.colorsProcessed["theme"]}},buttonStyle:function(){return{display:this.active?"none":"block",position:"absolute",left:"0px",top:"0px",margin:"auto",padding:"0px",height:this.size[0]+"px",width:this.size[1]+"px",pointerEvents:"initial",cursor:"pointer",outline:"none",background:"none",border:"none",borderRadius:"inherit"}},inputFieldStyle:function(){return{display:this.active?"block":"none",position:"relative",order:"1",background:"none",height:"80%",width:"90%",border:"none",outline:"none",borderBottom:"1px solid "+this.colorsProcessed["theme"],boxSizing:"border-box",borderRadius:"1px",fontSize:"10px",pointerEvents:"initial",cursor:"text"}},testButtonStyle:function(){return{display:this.active?"table-cell":"none",order:"2",margin:"0 auto",padding:"0px",height:"80%",width:"80%",borderRadius:"10px",background:this.testButtonIsHovered?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.3)",border:"0.5px dashed "+this.colorsProcessed["theme"],backdropFilter:"blur(4px)",outline:"none",pointerEvents:"initial",cursor:"pointer"}}},methods:{setActive(){this.active=!0,setTimeout(()=>{this.$refs.inputField.focus()})},setNotActive(){this.active=!1},testAPI(){var t=!1;t=!0,t&&(this.$store.commit("update_apiUrl",this.urlInField),this.active=!1)},setButtonHovered(t){"main"===t&&(this.mainButtonIsHovered=!0),"test"==t&&(this.testButtonIsHovered=!0)},unsetButtonHovered(t){"main"===t&&(this.mainButtonIsHovered=!1),"test"==t&&(this.testButtonIsHovered=!1)}},watch:{urlInStore:{handler(){this.urlInStore!==this.urlInField&&(this.urlInField=this.urlInStore)}}},mounted(){this.urlInStore!==this.urlInField&&(this.urlInField=this.urlInStore)}}),s=r,u=o("2877"),l=Object(u["a"])(s,n,i,!1,null,"d34475ca",null);e["default"]=l.exports}}]);