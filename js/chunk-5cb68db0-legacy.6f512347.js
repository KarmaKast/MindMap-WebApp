(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb68db0"],{"172b":function(t,e,i){"use strict";var n=i("95cd"),o=i.n(n);o.a},"95cd":function(t,e,i){},fde5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=this,i=e.$createElement,n=e._self._c||i;return n("div",{ref:"entityContainer",style:e.entityContainerStyleFinal},[n("div",{staticClass:"relSpotsContainer",style:{position:"absolute"}},[n("div",{staticClass:"selfSpots"},[e.showSpots.left?n("div",{staticClass:"relSpotLeft selfSpot",style:e.relSelfSpotsLeftStyle}):e._e(),e.showSpots.bottom?n("div",{staticClass:"relSpotBottom selfSpot",style:e.relSelfSpotsBottomStyle}):e._e(),e.showSpots.right?n("div",{staticClass:"relSpotRight selfSpot",style:e.relSelfSpotsRightStyle}):e._e(),e.showSpots.top?n("div",{staticClass:"relSpotTop selfSpot",style:e.relSelfSpotsTopStyle}):e._e()]),n("div",{staticClass:"targetSpots"},e._l(e.relTargetSpotsStyles,(function(t,e){return n("div",{key:e,staticClass:"targetSpot",style:t})})),0)]),n("div",{staticClass:"relationWires",style:e.relationWiresStyle},[n("v-stage",{attrs:{config:{width:this.relStageSize.width,height:this.relStageSize.height}}},[n("v-layer",e._l(e.entityData.source.RelationClaims,(function(t,i){return n("v-group",{key:i,attrs:{config:e.relationWiresGroupConfig}},[n("v-line",{attrs:{config:e.relationLineConfigs[t.To]}})],1)})),1)],1)],1),n("div",{staticClass:"relationLabelsContainer",style:{position:"absolute"}},e._l(e.entityData.source.RelationClaims,(function(t,e){return n("div",{key:e,staticClass:"relationLabel"})})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entitySelectedFinal,expression:"entitySelectedFinal"}],staticClass:"entityUI",style:{position:"absolute",display:"grid"}},[n("div",{directives:[{name:"touch",rawName:"v-touch:tap.self",value:e.editentityLabel,expression:"editentityLabel",arg:"tap",modifiers:{self:!0}}],staticClass:"editLabelBttn",style:{position:"absolute",bottom:"5px",height:"25px",width:"25px",backgroundColor:"#ad37de",borderRadius:"50%",pointerEvents:"all"}},[e.editingLabel?n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.entityLabel,expression:"entityLabel",modifiers:{lazy:!0}}],ref:"labelInput",style:e.inputTextStyle,attrs:{type:"text"},domProps:{value:e.entityLabel},on:{input:function(t){e.entityLabel=t.target.value},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.editentityLabel(t)},change:function(t){e.entityLabel=t.target.value}}}):e._e()]),e._e(),n("div",{directives:[{name:"touch",rawName:"v-touch:tap.self",value:function(){t.$emit("removeEntity",t.entityID)},expression:"\n        () => {\n          this.$emit('removeEntity', this.entityID);\n        }\n      ",arg:"tap",modifiers:{self:!0}}],staticClass:"removeEntityBttn",style:{position:"absolute",left:"30px",bottom:"5px",height:"25px",width:"25px",backgroundColor:"#ff1a02",borderRadius:"50%",pointerEvents:"all"}}),n("div",{directives:[{name:"touch",rawName:"v-touch:start.self",value:e.toggleRelClaimMode,expression:"toggleRelClaimMode",arg:"start",modifiers:{self:!0}}],staticClass:"startRelClaimBttn",style:{position:"absolute",top:"14px",left:e.relationSpots.right-e.relationSpots.left+5+"px",height:"25px",width:"25px",backgroundColor:"blue",borderRadius:"50%",pointerEvents:"all"}})],1),n("div",{directives:[{name:"touch",rawName:"v-touch:start.self",value:e.startdrag,expression:"startdrag",arg:"start",modifiers:{self:!0}},{name:"touch",rawName:"v-touch:end",value:e.confirmRelClaimTarget,expression:"confirmRelClaimTarget",arg:"end"}],staticClass:"entity",style:e.entityStyle},[n("p",{style:e.entityTextStyle},[e._v(e._s(e.entityLabel))])])])},o=[],a=(i("99af"),i("4160"),i("caad"),i("45fc"),i("a9e3"),i("4fad"),i("b64b"),i("2532"),i("159b"),i("3835")),s=(i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0"),i("06c5"));function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(s["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,r=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){r=!0,o=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(r)throw o}}}}var l=i("ade3"),h=i("2b0e"),c=i("bc3a"),d=i.n(c),p=i("b383"),y=i.n(p),u=i("63ea"),f=i.n(u),g={name:"entityComponent",components:{},props:{colors:Object,entityID:{type:String,required:!0},apiUrl:String,apiValidity:Boolean,canvasSize:{height:Number,width:Number},canvasLocation:Object,canvasMousePos:Object,autoSave:{default:!1,type:Boolean},grid:Object,defaultColors:Object,dragging:{default:function(){return{state:!1}},type:Object},pressed:{default:function(){return{state:!1}},type:Object},relationSpotsOffset:{default:7,type:Number},entitySelected:{default:void 0,type:Boolean},entityLocationDef:{default:function(){return{x:0,y:0,z:0}},type:Object},targetRelSpots:Object,updateEntityData:{default:!1,type:Boolean}},data:function(){return{minHeight:60,minWidth:120,entityLocation:this.entityLocationDef,entityLocationProcessed:{},entityLabel:"",entitySelectedDef:void 0,entitySelectedFinal:this.entitySelected,entityColor:{h:0,s:0,l:0,a:1},entityData:{source:{Label:"",RelationClaims:[]},viz_props:{location:{x:0,y:0,z:0},color:{h:166,s:89,l:45,a:1}}},entitySize:{height:60,width:160},entityBoundingBoxSize:{height:0,width:0},draggingDeltas:{x:0,y:0},editingLabel:!1,relClaimMode:{mode:!1,targetID:null},entityContainerStylePartStatic:{position:"absolute",boxSizing:"border-box",display:"grid",padding:"4px",outline:"none"},relationLineConfigs:{}}},computed:{entityOutOfCanvas:function(){if(this.entityLocation_){if(Math.abs(this.entityLocation_.x+this.canvasLocation.x)>this.canvasSize.width/2)return!0;if(Math.abs(this.entityLocation_.y+this.canvasLocation.y)>this.canvasSize.height/2)return!0}return!1},relWireColor:function(){return"hsla(".concat(this.colors["backgroundShade1"].h,",").concat(this.colors["backgroundShade1"].s,"%,").concat(this.colors["backgroundShade1"].l,"%, 1)")},entityContainerStylePart1:function(){return{minWidth:"".concat(""===this.entityLabel?this.minWidth:0,"px"),minHeight:"".concat(""===this.entityLabel?this.minHeight:0,"px"),zIndex:this.dragging.state||this.entitySelectedFinal?"5000":"initial",borderRadius:this.entitySize["height"]>this.entitySize["width"]?"".concat(this.entitySize["height"],"px"):"".concat(this.entitySize["width"],"px"),boxShadow:"".concat(this.dragging.state||this.entitySelectedFinal?"hsla(".concat(this.entityColor.h,",0%,").concat(this.colors["backgroundShade1"].l,"%,0.2) 0px 0px 0px 4px, "):""," inset 0px 0px 0 4px hsla(").concat(this.entityColor.h,",\n        ").concat(this.entityColor.s,"%,\n        ").concat(this.colors["backgroundShade1"].l,"%, 0.2)")}},entityContainerStylePart2:function(){return{top:"".concat(this.canvasSize.height/2+this.entityLocation_.y-this.entityBoundingBoxSize.height/2,"px"),left:"".concat(this.canvasSize.width/2+this.entityLocation_.x-this.entityBoundingBoxSize.width/2,"px")}},entityContainerStyleFinal:function(){return Object.assign({},this.entityContainerStylePartStatic,this.entityContainerStylePart1,this.entityContainerStylePart2)},entityStyle:function(){return{position:"relative",borderRadius:"inherit",border:"1px solid hsla(".concat(this.entityColor.h,",").concat(this.entityColor.s,"%, ").concat(this.entityColor.l,"%, 0.8)"),backdropFilter:"blur(2px)",cursor:this.dragging.state?"grabbing":"grab",backgroundColor:CSS.supports("backdrop-filter: blur(3px)")?this.editingLabel&&this.entitySelectedFinal?"white":"hsla(0,0%,".concat(this.colors["background"].l+5,"%,0.2)"):this.editingLabel&&this.entitySelectedFinal?"white":"hsla(0,0%,".concat(this.colors["background"].l+5,"%,1)"),pointerEvents:"all",display:"grid",placeItems:"center",boxSizing:"border-box",padding:"10px 15px 10px 15px"}},entityTextStyle:function(){return{pointerEvents:"none",margin:"0px",maxWidth:"100px",overflowWrap:"break-word",color:"hsla(".concat(this.entityColor.h,",").concat(this.entityColor.s,"%, ").concat(this.entityColor.l,"%, ",1,")"),background:"none",border:"none",userSelect:"none"}},inputTextStyle:function(){return{position:"absolute",bottom:"20px",left:"20px"}},entityLocation_:function(){var t={};return this.canvasMousePos&&this.pressed.state?(t.x=this.canvasMousePos.x-this.canvasSize.width/2,t.y=this.canvasMousePos.y-this.canvasSize.height/2,this.grid.snap&&(t.x=(Math.floor((t.x-this.grid.size/2)/this.grid.size)+1)*this.grid.size,t.y=(Math.floor((t.y-this.grid.size/2)/this.grid.size)+1)*this.grid.size)):t=Object.assign({},this.entityLocation),t},relationWiresStylePart1:function(){return Object(l["a"])({position:"absolute",left:0-this.canvasSize.width/2-this.entityLocation_.x+this.entityBoundingBoxSize.width/2,top:0-this.canvasSize.height/2-this.entityLocation_.y+this.entityBoundingBoxSize.height/2,pointerEvents:"none"},"position","absolute")},relationWiresStyle:function(){return Object.assign({},this.relationWiresStylePart1,{left:this.relationWiresStylePart1.left-this.canvasLocation.x+"px",top:this.relationWiresStylePart1.top-this.canvasLocation.y+"px"})},relationSpots:function(){return{left:this.entityLocation_.x-this.entityBoundingBoxSize.width/2-this.relationSpotsOffset,right:this.entityLocation_.x+this.entityBoundingBoxSize.width/2+this.relationSpotsOffset,top:this.entityLocation_.y-this.entityBoundingBoxSize.height/2-this.relationSpotsOffset,bottom:this.entityLocation_.y+this.entityBoundingBoxSize.height/2+this.relationSpotsOffset}},relationWirePointsPart1:function(){var t,e={},i=r(this.entityData.source.RelationClaims);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=this.targetRelSpots?this.targetRelSpots[n.To]:void 0;if(o&&this.relationSpots){var a=function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},s=(this.relationSpots.top+this.relationSpots.bottom)/2,l=(this.relationSpots.left+this.relationSpots.right)/2,h=(o.top+o.bottom)/2,c=(o.left+o.right)/2;o={left:{x:o.left,y:h},top:{x:c,y:o.top},right:{x:o.right,y:h},bottom:{x:c,y:o.bottom}};var d={left:{x:this.relationSpots.left,y:s},top:{x:l,y:this.relationSpots.top},right:{x:this.relationSpots.right,y:s},bottom:{x:l,y:this.relationSpots.bottom}},p=void 0,y=void 0;for(var u in o)for(var f in d){var g=a(o[u],d[f]);(void 0===p||g<p)&&(p=g,y={target:u,self:f})}e[n.To]={points:[d[y.self].x,d[y.self].y,o[y.target].x,o[y.target].y],selfSpot:y.self}}else e[n.To]={points:[0,0,0,0],selfSpot:"left"}}}catch(S){i.e(S)}finally{i.f()}return e},relTargetSpotsStylePart1:function(){return{position:"absolute",height:2*this.relationSpotsOffset+"px",width:2*this.relationSpotsOffset+"px",border:"1px solid ".concat(this.relWireColor),borderRadius:"50%",boxSizing:"border-box"}},relTargetSpotsStyles:function(){var t=this,e=[];return this.relationWirePointsPart1&&Object.entries(this.relationWirePointsPart1).forEach((function(i){var n=Object(a["a"])(i,2),o=(n[0],n[1]);e.push(Object.assign({},t.relTargetSpotsStylePart1,{top:"".concat(o.points[3]-o.points[1]+(["left","right"].includes(o.selfSpot)?t.entityBoundingBoxSize.height/2-t.relationSpotsOffset:["bottom"].includes(o.selfSpot)?t.entityBoundingBoxSize.height:2*-t.relationSpotsOffset),"px"),left:"".concat(o.points[2]-o.points[0]+(["top","bottom"].includes(o.selfSpot)?t.entityBoundingBoxSize.width/2-t.relationSpotsOffset:["right"].includes(o.selfSpot)?t.entityBoundingBoxSize.width:2*-t.relationSpotsOffset),"px")}))})),e},showSpots:function(){var t={left:!1,bottom:!1,right:!1,top:!1};return Object.entries(this.relationWirePointsPart1).forEach((function(e){var i=Object(a["a"])(e,2),n=(i[0],i[1]);t[n.selfSpot]=!0})),t},relationWirePointsPart2:function(){var t=this,e={};return this.relationWirePointsPart1&&Object.entries(this.relationWirePointsPart1).forEach((function(i){var n=Object(a["a"])(i,2),o=n[0],s=n[1],r=t.relationSpotsOffset,l=s.points,h=Math.sqrt(Math.pow(l[2]-l[0],2)+Math.pow(l[3]-l[1],2)),c=r/h;e[o]=[l[0],l[1],(1-c)*l[2]+c*l[0],(1-c)*l[3]+c*l[1]]})),e},relationWiresGroupConfig:function(){return{x:this.canvasLocation.x,y:this.canvasLocation.y}},relationWirePoints:function(){var t=this,e={};return this.relationWirePointsPart2&&Object.entries(this.relationWirePointsPart2).forEach((function(i){var n=Object(a["a"])(i,2),o=n[0],s=n[1];e[o]=[s[0]+t.canvasSize.width/2,s[1]+t.canvasSize.height/2,s[2]+t.canvasSize.width/2,s[3]+t.canvasSize.height/2]})),e},relStageSize:function(){return this.canvasSize},relSelfSpotsStylePart1:function(){return{height:"4px",width:"4px",backgroundColor:"".concat(this.relWireColor),boxSizing:"border-box"}},relSelfSpotsLeftStyle:function(){return Object.assign({},this.relSelfSpotsStylePart1,{top:(this.relationSpots.bottom-this.relationSpots.top)/2-this.relationSpotsOffset-2+"px",left:-this.relationSpotsOffset-2+"px"})},relSelfSpotsBottomStyle:function(){return Object.assign({},this.relSelfSpotsStylePart1,{bottom:-this.relationSpotsOffset-2-this.entityBoundingBoxSize.height+"px",left:(this.relationSpots.right-this.relationSpots.left)/2-this.relationSpotsOffset-2+"px"})},relSelfSpotsRightStyle:function(){return Object.assign({},this.relSelfSpotsStylePart1,{top:(this.relationSpots.bottom-this.relationSpots.top)/2-this.relationSpotsOffset-2+"px",right:-this.relationSpotsOffset-2-this.entityBoundingBoxSize.width+"px"})},relSelfSpotsTopStyle:function(){return Object.assign({},this.relSelfSpotsStylePart1,{top:-this.relationSpotsOffset-2+"px",left:(this.relationSpots.right-this.relationSpots.left)/2-this.relationSpotsOffset-2+"px"})}},methods:{startdrag:function(t){if(([1].includes(t.which)||"touchstart"===t.type)&&!this.pressed.state){var e=this.$refs.entityContainer.getBoundingClientRect();"mousedown"===t.type?(this.draggingDeltas["x"]=t.clientX-e.x-this.canvasLocation.x,this.draggingDeltas["y"]=t.clientY-e.y-this.canvasLocation.y):"touchstart"==t.type&&(this.draggingDeltas["x"]=t.touches[0].clientX-e.x,this.draggingDeltas["y"]=t.touches[0].clientY-e.y),this.$emit("setStartingCanvasMousePos",t),this.$emit("entityActivated",t,this.entityID)}},getEntityData:function(){var t=this;d()({method:"GET",url:this.apiUrl+"/entity/get",params:{entityID:this.entityID},paramsSerializer:y.a.stringify}).then((function(e){t.entityData.source=e.data[0],t.entityData.viz_props=e.data[1].Data,t.$emit("setSelfRelSpots",t.relationSpots);var i,n=r(t.entityData.source.RelationClaims);try{for(n.s();!(i=n.n()).done;){var o=i.value;t.$emit("assignTargetRelSpots",o.To)}}catch(a){n.e(a)}finally{n.f()}}))},savePropToAPI:function(t,e){var i=this;d()({method:"POST",baseURL:this.apiUrl,url:"/entity/updateProps/",params:{entityID:this.entityID},paramsSerializer:y.a.stringify,data:y.a.stringify({props:JSON.stringify(Object(l["a"])({},t,e))})}).then((function(){i.entityData.viz_props[t]=e instanceof Object?Object.assign({},e):e,i.autoSave&&d.a.post(i.apiUrl+"/collection/save")}))},updateEntityBoundaryBox:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;setTimeout((function(){var e=t.$refs.entityContainer.getBoundingClientRect();t.entityBoundingBoxSize={width:e.width,height:e.height},t.$emit("setSelfRelSpots",t.relationSpots)}),e)},editentityLabel:function(t){var e=this;this.editingLabel=!this.editingLabel,this.editingLabel&&setTimeout((function(){e.$refs.labelInput.focus()}),100)},toggleRelClaimMode:function(){this.relClaimMode.mode=!this.relClaimMode.mode,this.$store.commit("update_relClaimMode",{mode:this.relClaimMode.mode,targetID:this.relClaimMode.targetID,claimantID:this.entityID})},confirmRelClaimTarget:function(t){t.preventDefault(),!this.relClaimMode.mode&&this.$store.state.relClaimMode.mode&&(t.type,this.$store.commit("update_relClaimMode",{mode:!0,targetID:this.entityID,claimantID:this.$store.state.relClaimMode.claimantID}))},addRelClaim:function(){var t=this;d()({method:"POST",baseURL:this.apiUrl,url:"/entity/addRelClaim",data:y.a.stringify({claimantID:this.entityID,targetID:this.relClaimMode.targetID})}).then((function(e){t.relClaimMode.mode=!1,t.relClaimMode.targetID=null,t.$store.commit("update_relClaimMode",t.relClaimMode);var i=t.entityData;i.source.RelationClaims.push(JSON.parse(e.data.relClaim)),t.entityData=Object.assign({},i),t.$emit("assignTargetRelSpots",JSON.parse(e.data.relClaim).To)}))}},watch:{apiValidity:function(){},canvasLocation:{handler:function(){},deep:!0},entitySelected:{handler:function(){this.entitySelectedFinal=!!this.entitySelected},deep:!0},relationSpots:function(){this.$emit("setSelfRelSpots",this.relationSpots)},relationWirePoints:function(){var t=this;Object.entries(this.relationWirePoints).forEach((function(e){var i=Object(a["a"])(e,2),n=i[0],o=i[1];Object.keys(t.relationLineConfigs).some((function(t){return t===n}))?f()(o,t.relationLineConfigs[n].points)||h["default"].set(t.relationLineConfigs,n,Object.assign({},t.relationLineConfigs[n],{points:o})):h["default"].set(t.relationLineConfigs,n,Object.assign({},t.relationLineConfigs[n],{points:o,stroke:t.relWireColor,strokeWidth:t.dragging.state||t.entitySelectedFinal?2:1,lineCap:"round",lineJoin:"round",draggable:!1,closed:!1}))})),Object.keys(this.relationLineConfigs).some((function(e){Object.keys(t.relationWirePoints).includes(e)||h["default"].delete(t.relationLineConfigs,e)}))},relWireColor:function(){var t=this;Object.entries(this.relationLineConfigs).forEach((function(e){var i=Object(a["a"])(e,2),n=i[0];i[1];h["default"].set(t.relationLineConfigs,n,Object.assign({},t.relationLineConfigs[n],{stroke:t.relWireColor}))}))},"dragging.state":function(){var t=this;Object.entries(this.relationLineConfigs).forEach((function(e){var i=Object(a["a"])(e,2),n=i[0];i[1];h["default"].set(t.relationLineConfigs,n,Object.assign({},t.relationLineConfigs[n],{strokeWidth:t.dragging.state||t.entitySelectedFinal?2:1}))}))},entitySelectedFinal:function(){var t=this;this.apiValidity&&(f()(this.entitySelectedFinal,this.entityData.viz_props.selected)||this.savePropToAPI("selected",this.entitySelectedFinal)),Object.entries(this.relationLineConfigs).forEach((function(e){var i=Object(a["a"])(e,2),n=i[0];i[1];h["default"].set(t.relationLineConfigs,n,Object.assign({},t.relationLineConfigs[n],{strokeWidth:t.dragging.state||t.entitySelectedFinal?2:1}))}))},entityLocation_:function(){this.$emit("setSelfRelSpots",this.relationSpots),this.dragging.state?this.entityLocation=Object.assign({},this.entityLocation_):this.apiValidity&&(f()(this.entityLocation_,this.entityData.viz_props.location)||f()(this.entityLocation_,this.entityLocationDef)&&!f()(this.entityLocationDef,this.entityData.viz_props.location)||this.savePropToAPI("location",this.entityLocation_))},"entityData.viz_props":function(){f()(this.entityLocation_,this.entityData.viz_props.location)||(this.entityLocation=Object.assign({},this.entityData.viz_props.location)),this.entityData.viz_props.selected!==this.entitySelectedFinal&&(void 0===this.entitySelectedDef&&(this.entitySelectedDef=this.entityData.viz_props.selected),this.entitySelectedDef&&this.$emit("prevActiveEntityID",this.entityID),this.entitySelectedFinal=this.entityData.viz_props.selected),f()(this.entityColor,this.entityData.viz_props.color)||(this.entityColor=Object.assign({},this.entityData.viz_props.color))},"entityData.source":function(){this.entityData.source.Label&&(this.entityLabel=this.entityData.source.Label)},entityLabel:function(){var t=this;this.updateEntityBoundaryBox(),this.$emit("setSelfRelSpots",this.relationSpots),this.apiValidity&&d()({method:"POST",url:this.apiUrl+"/entity/updateLabel",params:{entityID:this.entityID},paramsSerializer:y.a.stringify,data:y.a.stringify({Label:this.entityLabel})}).then((function(){h["default"].set(t.entityData.source,"Label",t.entityLabel),t.autoSave&&d.a.post(t.apiUrl+"/collection/save")}))},entityColor:{handler:function(){f()(this.entityColor,this.entityData.viz_props.color)||this.savePropToAPI("color",this.entityColor)},deep:!0},updateEntityData:function(){this.updateEntityData&&this.getEntityData()},pressed:{handler:function(){},deep:!0}},created:function(){},mounted:function(){var t=this;void 0!==this.entityID&&console.log("@ mounted ".concat(this.entityID)),this.getEntityData(),this.updateEntityBoundaryBox(0),this.$store.subscribe((function(e,i){t.relClaimMode.mode&&"update_relClaimMode"===e.type&&(t.relClaimMode.targetID=i.relClaimMode.targetID,null!==t.relClaimMode.targetID&&t.apiValidity&&t.addRelClaim(),i.relClaimMode.claimantID===t.entityID&&(t.relClaimMode.mode=i.relClaimMode.mode))}))},beforeUpdate:function(){},updated:function(){}},S=g,b=(i("172b"),i("2877")),v=Object(b["a"])(S,n,o,!1,null,"116e1166",null);e["default"]=v.exports}}]);