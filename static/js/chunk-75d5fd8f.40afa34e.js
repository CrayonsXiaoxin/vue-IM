(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75d5fd8f"],{2423:function(t,e,a){"use strict";a.d(e,"f",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"g",(function(){return d})),a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"a",(function(){return m}));var l=a("b775"),o=a("bc3a"),n=a.n(o);function i(t){var e="https://192.168.3.35:8000/v1/Articles/List";return console.log("请求的URL:",e),Object(l["a"])({url:e,method:"get",params:{page:t.page,limit:t.limit}})}function r(t){var e="https://192.168.3.35:8000/v1/domain/info/List";return console.log("请求的URL:",e),Object(l["a"])({url:e,method:"get",params:{page:t.page,limit:t.limit}})}function s(t){var e="https://192.168.3.35:8000/v1/SpiderInfo/List";return console.log("请求的URL:",e),Object(l["a"])({url:e,method:"get",params:{page:t.page,limit:t.limit}})}function d(t){var e="https://192.168.3.35:8000/v1/SiteInfo/List";return console.log("请求的URL:",e),Object(l["a"])({url:e,method:"get",params:{page:t.page,limit:t.limit}})}function c(t){var e="https://192.168.3.35:8000/v1/domain/infoALL/List";return console.log("请求的URL:",e),Object(l["a"])({url:e,method:"get",params:{page:t.page,limit:t.limit}})}function u(t){var e="https://192.168.3.35:8000/v1/dsite/";return n.a.post(e,t,{headers:{"Content-Type":"application/json"}})}function m(t){var e="https://192.168.3.35:8000/v1/domain/info";return n.a.post(e,t,{headers:{"Content-Type":"application/json"}})}},"2cbf":function(t,e,a){"use strict";a("73e0")},"333d":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,l){return t/=l/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,a){var l=r(),o=t-l,s=20,d=0;e="undefined"===typeof e?500:e;var c=function t(){d+=s;var r=Math.easeInOutQuad(d,l,o,e);i(r),d<e?n(t):a&&"function"===typeof a&&a()};c()}var d={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=d,u=(a("2cbf"),a("2877")),m=Object(u["a"])(c,l,o,!1,null,"6af373ef",null);e["a"]=m.exports},"4b86":function(t,e,a){"use strict";a("f607")},"5fb3":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bar"},[a("input",{staticStyle:{"margin-right":"30px"},attrs:{type:"text",placeholder:"输入搜索内容"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.openAddDialog}},[t._v("添加信息")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,border:"",fit:"","highlight-current-row":"",total:t.total}},[t._l(t.columns,(function(e,l){return a("el-table-column",{key:l,attrs:{prop:e.key,label:e.label,align:"center",width:t.getColumnWidth(e.key)},scopedSlots:t._u([{key:"header",fn:function(l){return[a("div",{staticClass:"sortable-header",on:{click:function(a){return t.sortTable(e.key)}}},[a("span",[t._v(t._s(e.label))]),a("span",{staticClass:"ant-table-column-sorter ant-table-column-sorter-full"},[a("span",{staticClass:"ant-table-column-sorter-inner"},[a("span",{staticClass:"anticon anticon-caret-up ant-table-column-sorter-up",attrs:{role:"button","aria-label":"caret-up"}},[a("svg",{attrs:{focusable:"false","data-icon":"caret-up",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}})]),a("span",{staticClass:"anticon anticon-caret-down ant-table-column-sorter-down",attrs:{role:"button","aria-label":"caret-down"}},[a("svg",{attrs:{focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"0 0 1024 1024"}},[a("path",{attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}})])])])])])])]}},{key:"default",fn:function(l){return[l.row.editing?a("el-input",{attrs:{size:"mini"},on:{blur:function(a){return t.onBlur(l.row,e.key)}},model:{value:l.row[e.key],callback:function(a){t.$set(l.row,e.key,a)},expression:"scope.row[column.key]"}}):a("span",{on:{click:function(a){return t.onClick(l.row,e.key)}}},[t._v(t._s(l.row[e.key]))])]}}],null,!0)})})),a("el-table-column",{attrs:{prop:"domain",label:"域名",width:"200px",fixed:"",align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"160",align:"center",fixed:"right"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.openEditDialog}},[t._v("修改")]),a("el-dialog",{attrs:{visible:t.editDialogVisible},on:{close:t.closeEditDialog}},[a("el-form",{attrs:{model:t.editFormData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"小组"}},[a("el-input",{model:{value:t.editFormData.name,callback:function(e){t.$set(t.editFormData,"name",e)},expression:"editFormData.name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("保存")])],1)],1)],1),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){t.handleDelete=!1}}},[t._v("删除")])],1)],2),a("el-dialog",{attrs:{title:"添加信息",visible:t.addDialogVisible},on:{close:function(e){t.addDialogVisible=!1}}},[a("el-form",{ref:"addForm",attrs:{model:t.addFormData,"label-position":"left"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"域名",prop:"domain"}},[a("el-input",{model:{value:t.addFormData.domain,callback:function(e){t.$set(t.addFormData,"domain",e)},expression:"addFormData.domain"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"小组",prop:"name"}},[a("el-input",{model:{value:t.addFormData.name,callback:function(e){t.$set(t.addFormData,"name",e)},expression:"addFormData.name"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:2}},[a("el-form-item",{attrs:{label:"国家",prop:"country"}},[a("el-input",{model:{value:t.addFormData.country,callback:function(e){t.$set(t.addFormData,"country",e)},expression:"addFormData.country"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:2}},[a("el-form-item",{attrs:{label:"域名状态",prop:"status"}},[a("el-input",{model:{value:t.addFormData.status,callback:function(e){t.$set(t.addFormData,"status",e)},expression:"addFormData.status"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:2}},[a("el-form-item",{attrs:{label:"负责人",prop:"owner"}},[a("el-input",{model:{value:t.addFormData.owner,callback:function(e){t.$set(t.addFormData,"owner",e)},expression:"addFormData.owner"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:3}},[a("el-form-item",{attrs:{label:"后台账号",prop:"admin_account"}},[a("el-input",{model:{value:t.addFormData.admin_account,callback:function(e){t.$set(t.addFormData,"admin_account",e)},expression:"addFormData.admin_account"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"后台密码",prop:"admin_password"}},[a("el-input",{model:{value:t.addFormData.admin_password,callback:function(e){t.$set(t.addFormData,"admin_password",e)},expression:"addFormData.admin_password"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:2}},[a("el-form-item",{attrs:{label:"上站时间",prop:"deploy_at"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择修改时间",format:"yyyy-MM-dd HH:mm:ss"},on:{change:t.handleDateTimeChange},model:{value:t.selectedDateTime,callback:function(e){t.selectedDateTime=e},expression:"selectedDateTime"}})],1)],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"数据库",prop:"db"}},[a("el-input",{model:{value:t.addFormData.db,callback:function(e){t.$set(t.addFormData,"db",e)},expression:"addFormData.db"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"数据库密码",prop:"db_pwd"}},[a("el-input",{model:{value:t.addFormData.db_pwd,callback:function(e){t.$set(t.addFormData,"db_pwd",e)},expression:"addFormData.db_pwd"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:3}},[a("el-form-item",{attrs:{label:"AID",prop:"AID"}},[a("el-input",{model:{value:t.addFormData.AID,callback:function(e){t.$set(t.addFormData,"AID",e)},expression:"addFormData.AID"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"邮箱",prop:"gmail"}},[a("el-input",{model:{value:t.addFormData.gmail,callback:function(e){t.$set(t.addFormData,"gmail",e)},expression:"addFormData.gmail"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"邮箱密码",prop:"gmail_pwd"}},[a("el-input",{model:{value:t.addFormData.gmail_pwd,callback:function(e){t.$set(t.addFormData,"gmail_pwd",e)},expression:"addFormData.gmail_pwd"}})],1)],1),a("el-col",{attrs:{span:1}},[a("el-form-item",{attrs:{label:""}})],1),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"Google Analytics",prop:"Analytics"}},[a("el-input",{model:{value:t.addFormData.Analytics,callback:function(e){t.$set(t.addFormData,"Analytics",e)},expression:"addFormData.Analytics"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.addFormData.title,callback:function(e){t.$set(t.addFormData,"title",e)},expression:"addFormData.title"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:"简介",prop:"desc"}},[a("el-input",{model:{value:t.addFormData.desc,callback:function(e){t.$set(t.addFormData,"desc",e)},expression:"addFormData.desc"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"行业",prop:"website_type"}},[a("el-input",{model:{value:t.addFormData.website_type,callback:function(e){t.$set(t.addFormData,"website_type",e)},expression:"addFormData.website_type"}})],1)],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:t.submitAddForm}},[t._v("确认添加")])],1)],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},o=[],n=a("5530"),i=(a("fb6a"),a("4e82"),a("d3b7"),a("159b"),a("2423")),r=a("333d"),s={components:{Pagination:r["a"]},data:function(){return{selectedDateTime:"",addDialogVisible:!1,addFormData:{domain:"",name:"",country:"",status:"",owner:"",admin_account:"",admin_password:"",deploy_at:"",db:"",db_pwd:"",AID:"",gmail:"",gmail_pwd:"",Analytics:"",title:"",desc:"",website_type:""},editDialogVisible:!1,editFormData:{name:""},list:null,total:0,listLoading:!0,listQuery:{page:1,limit:10},columns:[{key:"name",label:"小组"},{key:"country",label:"国家"},{key:"status",label:"域名状态"},{key:"owner",label:"负责人"},{key:"admin_account",label:"后台账号"},{key:"admin_password",label:"后台密码"},{key:"deploy_at",label:"上站时间"},{key:"db",label:"数据库"},{key:"db_pwd",label:"数据库密码"},{key:"AID",label:"AID"},{key:"gmail",label:"邮箱"},{key:"gmail_pwd",label:"邮箱密码"},{key:"Analytics",label:"Google Analytics"},{key:"title",label:"标题"},{key:"desc",label:"简介"},{key:"website_type",label:"行业"}]}},created:function(){this.getList()},methods:{getList:function(){var t=this;console.log("正在获取数据，当前页码：",this.listQuery.page,"每页数量：",this.listQuery.limit),this.listLoading=!0,Object(i["c"])({page:this.listQuery.page,limit:this.listQuery.limit}).then((function(e){t.total=e.count,t.list=e.data;var a=(t.listQuery.page-1)*t.listQuery.limit,l=Math.min(a+t.listQuery.limit,t.total);t.list=t.list.slice(a,l),console.log("当前页数据:",t.list),t.listLoading=!1})).catch((function(e){console.error("请求错误:",e),t.listLoading=!1}))},sortTable:function(t){console.log("点击了排序，排序键：",t),this.list.sort((function(e,a){return"string"===typeof e[t]?e[t].localeCompare(a[t]):"number"===typeof e[t]?e[t]-a[t]:0})),this.list.forEach((function(e){console.log("数据：",e[t])})),this.listQuery.order="asc"===this.listQuery.order?"desc":"asc"},getColumnWidth:function(t){switch(t){case"domain":return"205px";case"name":return"110px";case"country":return"100px";case"status":return"180px";case"owner":return"110px";case"admin_account":return"210px";case"admin_password":return"210px";case"deploy_at":return"210px";case"db":return"210px";case"db_pwd":return"210px";case"AID":return"150px";case"gmail":return"150px";case"gmail_pwd":return"150px";case"Analytics":return"310px";case"title":return"210px";case"desc":return"610px";case"website_type":return"110px";default:return""}},openAddDialog:function(){this.addDialogVisible=!0},submitAddForm:function(){Object(i["a"])(this.addFormData).then((function(t){console.log("Response from addDomain:",t)})).catch((function(t){console.error("Error from addDomain:",t)}))},openEditDialog:function(){this.editFormData=Object(n["a"])({},this.selectedData),this.editDialogVisible=!0},closeEditDialog:function(){this.editDialogVisible=!1},saveEdit:function(){console.log("保存修改的数据:",this.editFormData),this.closeEditDialog()},handleDateTimeChange:function(t){if(t){var e=moment(t).format("YYYY-MM-DD HH:mm:ss");this.addFormData.site_updated_at=e}}}},d=s,c=(a("4b86"),a("2877")),u=Object(c["a"])(d,l,o,!1,null,"9b6a6722",null);e["default"]=u.exports},"73e0":function(t,e,a){},f607:function(t,e,a){}}]);