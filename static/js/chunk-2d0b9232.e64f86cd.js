(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9232"],{3252:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("switch-roles",{on:{change:e.handleRolesChange}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("div",{staticStyle:{"margin-bottom":"100px","margin-left":"80px","font-size":"30px"}},[e._v(" 您现在的身份是: "+e._s(e.roles)+" ")]),n("div",{staticStyle:{"margin-bottom":"150px","margin-left":"80px","font-size":"20px"}},[e._v("您可以切换身份: "),n("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[n("el-radio-button",{attrs:{label:"editor"}}),n("el-radio-button",{attrs:{label:"admin"}})],1)],1)])},l=[],r={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var t=this;this.$store.dispatch("user/changeRoles",e).then((function(){t.$emit("change")}))}}}},a=r,c=n("2877"),u=Object(c["a"])(a,i,l,!1,null,null,null),h=u.exports,p={name:"PagePermission",components:{SwitchRoles:h},methods:{handleRolesChange:function(){this.$router.push({path:"/permission/index?"+ +new Date})}}},d=p,m=Object(c["a"])(d,s,o,!1,null,null,null);t["default"]=m.exports}}]);