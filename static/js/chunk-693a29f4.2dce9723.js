(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-693a29f4"],{1876:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"components-container"},[e._m(0),i("div",{staticClass:"editor-container"},[i("dropzone",{attrs:{id:"myVueDropzone",url:"https://httpbin.org/post"},on:{"dropzone-removedFile":e.dropzoneR,"dropzone-success":e.dropzoneS}})],1)])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",[e._v(" Based on "),i("a",{staticClass:"link-type",attrs:{href:"https://github.com/rowanwins/vue-dropzone"}},[e._v(" dropzone ")]),e._v(". Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone. ")])}],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:e.id,staticClass:"dropzone",attrs:{id:e.id,action:e.url}},[i("input",{attrs:{type:"file",name:"file"}})])},a=[],d=(i("d81d"),i("a9e3"),i("79e3")),l=i.n(d);i("7bc1");l.a.autoDiscover=!1;var r={props:{id:{type:String,required:!0},url:{type:String,required:!0},clickable:{type:Boolean,default:!0},defaultMsg:{type:String,default:"上传图片"},acceptedFiles:{type:String,default:""},thumbnailHeight:{type:Number,default:200},thumbnailWidth:{type:Number,default:200},showRemoveLink:{type:Boolean,default:!0},maxFilesize:{type:Number,default:2},maxFiles:{type:Number,default:3},autoProcessQueue:{type:Boolean,default:!0},useCustomDropzoneOptions:{type:Boolean,default:!1},defaultImg:{default:"",type:[String,Array]},couldPaste:{type:Boolean,default:!1}},data:function(){return{dropzone:"",initOnce:!0}},watch:{defaultImg:function(e){0!==e.length?this.initOnce&&(this.initImages(e),this.initOnce=!1):this.initOnce=!1}},mounted:function(){var e=document.getElementById(this.id),t=this;this.dropzone=new l.a(e,{clickable:this.clickable,thumbnailWidth:this.thumbnailWidth,thumbnailHeight:this.thumbnailHeight,maxFiles:this.maxFiles,maxFilesize:this.maxFilesize,dictRemoveFile:"Remove",addRemoveLinks:this.showRemoveLink,acceptedFiles:this.acceptedFiles,autoProcessQueue:this.autoProcessQueue,dictDefaultMessage:'<i style="margin-top: 3em;display: inline-block" class="material-icons">'+this.defaultMsg+"</i><br>Drop files here to upload",dictMaxFilesExceeded:"只能一个图",previewTemplate:'<div class="dz-preview dz-file-preview">  <div class="dz-image" style="width:'+this.thumbnailWidth+"px;height:"+this.thumbnailHeight+'px" ><img style="width:'+this.thumbnailWidth+"px;height:"+this.thumbnailHeight+'px" data-dz-thumbnail /></div>  <div class="dz-details"><div class="dz-size"><span data-dz-size></span></div> <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>  <div class="dz-error-message"><span data-dz-errormessage></span></div>  <div class="dz-success-mark"> <i class="material-icons">done</i> </div>  <div class="dz-error-mark"><i class="material-icons">error</i></div></div>',init:function(){var e=this,i=t.defaultImg;if(i)if(Array.isArray(i)){if(0===i.length)return;i.map((function(i,s){var n={name:"name"+s,size:12345,url:i};return e.options.addedfile.call(e,n),e.options.thumbnail.call(e,n,i),n.previewElement.classList.add("dz-success"),n.previewElement.classList.add("dz-complete"),t.initOnce=!1,!0}))}else{var s={name:"name",size:12345,url:i};this.options.addedfile.call(this,s),this.options.thumbnail.call(this,s,i),s.previewElement.classList.add("dz-success"),s.previewElement.classList.add("dz-complete"),t.initOnce=!1}},accept:function(e,t){t()},sending:function(e,i,s){t.initOnce=!1}}),this.couldPaste&&document.addEventListener("paste",this.pasteImg),this.dropzone.on("success",(function(e){t.$emit("dropzone-success",e,t.dropzone.element)})),this.dropzone.on("addedfile",(function(e){t.$emit("dropzone-fileAdded",e)})),this.dropzone.on("removedfile",(function(e){t.$emit("dropzone-removedFile",e)})),this.dropzone.on("error",(function(e,i,s){t.$emit("dropzone-error",e,i,s)})),this.dropzone.on("successmultiple",(function(e,i,s){t.$emit("dropzone-successmultiple",e,i,s)}))},destroyed:function(){document.removeEventListener("paste",this.pasteImg),this.dropzone.destroy()},methods:{removeAllFiles:function(){this.dropzone.removeAllFiles(!0)},processQueue:function(){this.dropzone.processQueue()},pasteImg:function(e){var t=(e.clipboardData||e.originalEvent.clipboardData).items;"file"===t[0].kind&&this.dropzone.addFile(t[0].getAsFile())},initImages:function(e){var t=this;if(e)if(Array.isArray(e))e.map((function(e,i){var s={name:"name"+i,size:12345,url:e};return t.dropzone.options.addedfile.call(t.dropzone,s),t.dropzone.options.thumbnail.call(t.dropzone,s,e),s.previewElement.classList.add("dz-success"),s.previewElement.classList.add("dz-complete"),!0}));else{var i={name:"name",size:12345,url:e};this.dropzone.options.addedfile.call(this.dropzone,i),this.dropzone.options.thumbnail.call(this.dropzone,i,e),i.previewElement.classList.add("dz-success"),i.previewElement.classList.add("dz-complete")}}}},c=r,p=(i("9824"),i("2877")),u=Object(p["a"])(c,o,a,!1,null,"2bb8ff5e",null),m=u.exports,h={name:"DropzoneDemo",components:{Dropzone:m},methods:{dropzoneS:function(e){console.log(e),this.$message({message:"Upload success",type:"success"})},dropzoneR:function(e){console.log(e),this.$message({message:"Delete success",type:"success"})}}},f=h,z=Object(p["a"])(f,s,n,!1,null,null,null);t["default"]=z.exports},"24a1":function(e,t,i){},9824:function(e,t,i){"use strict";i("24a1")}}]);