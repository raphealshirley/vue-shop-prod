(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users_rights_roles"],{"057f":function(e,t,r){var a=r("fc6a"),n=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return o.slice()}};e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?s(e):n(a(e))}},"25f0":function(e,t,r){"use strict";var a=r("6eeb"),n=r("825a"),i=r("d039"),o=r("ad6d"),s="toString",l=RegExp.prototype,c=l[s],u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=s;(u||d)&&a(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),r=e.flags,a=String(void 0===r&&e instanceof RegExp&&!("flags"in l)?o.call(e):r);return"/"+t+"/"+a}),{unsafe:!0})},2666:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("Home")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[e._v("User Management")])]),r("el-breadcrumb-item",[e._v("Activities")])],1),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:9}},[r("el-input",{attrs:{placeholder:"Please search here",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{staticClass:"search-button",attrs:{type:"info"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("Add Users")])],1)],1),r("el-table",{attrs:{data:e.userlist,border:"",stripe:"","empty-text":"No Data"}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"Name",prop:"username"}}),r("el-table-column",{attrs:{label:"Email",prop:"email"}}),r("el-table-column",{attrs:{label:"Telephone",prop:"mobile"}}),r("el-table-column",{attrs:{label:"Role",prop:"role_name"}}),r("el-table-column",{attrs:{label:"State"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#fb5020"},on:{change:function(r){return e.userStateChanged(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"Action",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"Assign roles",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.setRole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"Add User",visible:e.addDialogVisible,width:"30%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"Username",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"Password",prop:"password",type:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"Email",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"Mobile",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("Add User")])],1)],1),r("el-dialog",{attrs:{title:"Edit User",visible:e.editDialogVisible,width:"30%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editFrom,rules:e.editFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"Username"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editFrom.username,callback:function(t){e.$set(e.editFrom,"username",t)},expression:"editFrom.username"}})],1),r("el-form-item",{attrs:{label:"Email",prop:"email"}},[r("el-input",{model:{value:e.editFrom.email,callback:function(t){e.$set(e.editFrom,"email",t)},expression:"editFrom.email"}})],1),r("el-form-item",{attrs:{label:"Mobile",prop:"mobile"}},[r("el-input",{model:{value:e.editFrom.mobile,callback:function(t){e.$set(e.editFrom,"mobile",t)},expression:"editFrom.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("Edit User")])],1)],1),r("el-dialog",{attrs:{title:"Assign Roles",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[r("div",{staticClass:"assign-role-dialog"},[r("p",[e._v(" Current Username: "),r("span",[e._v(e._s(e.userInfo.username))])]),r("p",[e._v(" Current Role: "),r("span",[e._v(e._s(e.userInfo.role_name))])]),r("p",[e._v(" Assign New Role: "),r("el-select",{attrs:{placeholder:"Please Select"},model:{value:e.selectedRoleId,callback:function(t){e.selectedRoleId=t},expression:"selectedRoleId"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("Cancel")]),r("el-button",{staticClass:"confirm-button",attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("Confirm")])],1)])],1)},n=[],i=(r("99af"),r("96cf"),r("1da1")),o={data:function(){var e=function(e,t,r){var a=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;if(a.test(t))return r();r(new Error("Please enter valid email address"))},t=function(e,t,r){var a=/^(\+\d{1,3}[- ]?)?\d{10}$/;if(a.test(t))return r();r(new Error("Please enter valid phone number"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userlist:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"Please input your username",trigger:"blur"},{min:3,max:10,message:"Username is 3 to 10 characters"}],password:[{required:!0,message:"Please input your username",trigger:"blur"},{min:6,max:15,message:"Password is 6 to 15 characters"}],email:[{required:!0,message:"Please input your email",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"Please input your mobile",trigger:"blur"},{validator:t,trigger:"blur"}]},editDialogVisible:!1,editFrom:{},editFormRules:{email:[{required:!0,message:"Please input your email",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"Please input your mobile",trigger:"blur"},{validator:t,trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{},rolesList:[],selectedRoleId:""}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(r=t.sent,a=r.data,200==a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("Get user list failed!"));case 6:e.userlist=a.data.users,e.total=a.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChanged:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(a=r.sent,n=a.data,200==n.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("Error Setting Status"));case 7:t.$message.success("Success Setting Status");case 8:case"end":return r.stop()}}),r)})))()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("users",e.addForm);case 4:a=t.sent,n=a.data,201!=n.meta.status&&e.$message.error("Add User Failed"),e.$message.success("Add User Success"),e.addDialogVisible=!1,e.getUserList();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDialog:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(500!==e){r.next=3;break}return t.$message.error("Editing admin is not allowed !"),r.abrupt("return");case 3:return r.next=5,t.$http.get("users/"+e);case 5:if(a=r.sent,n=a.data,200===n.meta.status){r.next=9;break}return r.abrupt("return",t.$message.error("Fetch User info failed"));case 9:t.editFrom=n.data,t.editDialogVisible=!0;case 11:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editUserInfo:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("users/"+e.editFrom.id,{email:e.editFrom.email,mobile:e.editFrom.mobile});case 4:a=t.sent,n=a.data,200!==n.meta.status&&e.$message.error("Failed update user info"),e.editDialogVisible=!1,e.getUserList,e.$message.success("Success update user info");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(500!==e){r.next=3;break}return t.$message.error("Removing admin is not allowed !"),r.abrupt("return");case 3:return r.next=5,t.$confirm("Do you confirm to delete the user?","Confirm",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).catch((function(e){return e}));case 5:if(a=r.sent,"confirm"===a){r.next=8;break}return r.abrupt("return",t.$message.info("Deletion Canceled"));case 8:return r.next=10,t.$http.delete("users/"+e);case 10:if(n=r.sent,i=n.data,200===i.meta.status){r.next=14;break}return r.abrupt("return",t.$message.error("Deletion failed"));case 14:t.$message.success("Deletion succeed"),t.getUserList();case 16:case"end":return r.stop()}}),r)})))()},setRole:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(500!==e.id){r.next=3;break}return t.$message.error("Editing admin is not allowed !"),r.abrupt("return");case 3:return t.userInfo=e,r.next=6,t.$http.get("roles");case 6:if(a=r.sent,n=a.data,200===n.meta.status){r.next=10;break}return r.abrupt("return",t.$message.error("Get roles failed"));case 10:t.rolesList=n.data,t.setRoleDialogVisible=!0;case 12:case"end":return r.stop()}}),r)})))()},saveRoleInfo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedRoleId){t.next=2;break}return t.abrupt("return",e.$message.info("Please select a role"));case 2:return t.next=4,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectedRoleId});case 4:if(r=t.sent,a=r.data,200===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("Failed to assign role"));case 8:e.$message.success("Assigned role succeed"),e.getUserList(),e.setRoleDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},setRoleDialogClosed:function(){this.userInfo={},this.selectedRoleId=""}}},s=o,l=(r("9dad"),r("2877")),c=Object(l["a"])(s,a,n,!1,null,"b732de2c",null);t["default"]=c.exports},3024:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("Home")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[e._v("Roles Management")])]),r("el-breadcrumb-item",[e._v("Roles List")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{staticClass:"addRole-button",attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("Add Role")])],1)],1),r("el-table",{attrs:{data:e.rolelist,border:"",stripe:"","empty-text":"No Data"}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(a,n){return r("el-row",{key:a.id,class:["bdbottom",0==n?"bdtop":"","vcenter"]},[r("el-col",{attrs:{span:5,closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[r("el-tag",[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(a.children,(function(a,n){return r("el-row",{key:a.id,class:[0==n?"":"bdtop","vcenter"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(a.children,(function(a,n){return r("el-tag",{key:a.id,attrs:{type:"warning",closable:""},on:{close:function(r){return e.removeRightById(t.row,a.id)}}},[e._v(e._s(a.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"Role Name",prop:"roleName"}}),r("el-table-column",{attrs:{label:"Role Desc",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"Actions",width:"350px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.showEditDialog(t.row.id)}}},[e._v("Edit")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.removeRoleById(t.row.id)}}},[e._v("Delete")]),r("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:function(r){return e.showSetRightDialog(t.row)}}},[e._v("Assign Roles")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"Assign Rights",visible:e.setRightsDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRightsDialogVisible=t},close:e.setRightsDialogClosed}},[r("el-tree",{ref:"treeRef",attrs:{data:e.rightsList,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRightsDialogVisible=!1}}},[e._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("Confirm")])],1)],1),r("el-dialog",{attrs:{title:"Add User",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"130px"}},[r("el-form-item",{attrs:{label:"Role Name",prop:"roleName"}},[r("el-input",{model:{value:e.addForm.roleName,callback:function(t){e.$set(e.addForm,"roleName",t)},expression:"addForm.roleName"}})],1),r("el-form-item",{attrs:{label:"Role Description",prop:"roleDesc"}},[r("el-input",{model:{value:e.addForm.roleDesc,callback:function(t){e.$set(e.addForm,"roleDesc",t)},expression:"addForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("Add User")])],1)],1),r("el-dialog",{attrs:{title:"Edit Role",visible:e.editDialogVisible,width:"30%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editFrom,rules:e.editFormRules,"label-width":"140px"}},[r("el-form-item",{attrs:{label:"Role Name",prop:"roleName"}},[r("el-input",{model:{value:e.editFrom.roleName,callback:function(t){e.$set(e.editFrom,"roleName",t)},expression:"editFrom.roleName"}})],1),r("el-form-item",{attrs:{label:"Role Description"}},[r("el-input",{model:{value:e.editFrom.roleDesc,callback:function(t){e.$set(e.editFrom,"roleDesc",t)},expression:"editFrom.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRoleInfo}},[e._v("Edit User")])],1)],1)],1)},n=[];r("99af"),r("4160"),r("a15b"),r("159b");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e){if(Array.isArray(e))return i(e)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r("fb6a"),r("b0c0"),r("25f0");function l(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return o(e)||s(e)||l(e)||c()}r("96cf");var d=r("1da1"),f={data:function(){return{rolelist:[],setRightsDialogVisible:!1,rightsList:[],treeProps:{label:"authName",children:"children"},defKeys:[],roleId:"",dialogVisible:!1,addForm:{roleName:"",roleDesc:""},addFormRules:{roleName:[{required:!0,message:"Please input your username",trigger:"blur"},{min:3,max:10,message:"Username is 3 to 10 characters"}],roleDesc:[]},editDialogVisible:!1,editFrom:{},editFormRules:{roleName:[{required:!0,message:"Please input your username",trigger:"blur"}]}}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("Get Roles List Failed"));case 6:e.rolelist=a.data;case 7:case"end":return t.stop()}}),t)})))()},removeRightById:function(e,t){var r=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var n,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,r.$confirm("Confirm to delete?","Confirm",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).catch((function(e){return e}));case 2:if(n=a.sent,"confirm"===n){a.next=5;break}return a.abrupt("return",r.$message.info("Canceled deletion"));case 5:return a.next=7,r.$http.delete("roles/".concat(e.id,"/rights/").concat(t));case 7:if(i=a.sent,o=i.data,200===o.meta.status){a.next=11;break}return a.abrupt("return",r.$message.info("Cancel failed"));case 11:e.children=o.data;case 12:case"end":return a.stop()}}),a)})))()},showSetRightDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,r.next=3,t.$http.get("rights/tree");case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",t.$message.info("Get rights list failed"));case 7:t.rightsList=n.data,t.getLeafKeys(e,t.defKeys),t.setRightsDialogVisible=!0;case 10:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){return r.getLeafKeys(e,t)}))},setRightsDialogClosed:function(){this.defKeys=[]},allotRights:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r,a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(u(e.$refs.treeRef.getCheckedKeys()),u(e.$refs.treeRef.getHalfCheckedKeys())),a=r.join(","),t.next=4,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:a});case 4:if(n=t.sent,i=n.data,200===i.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("Assigned rights failed"));case 8:e.$message.success("Assigned rights succeed"),e.getRolesList(),e.setRightsDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},removeRoleById:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("Do you confirm to delete the role?","Confirm",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).catch((function(e){return e}));case 2:if(a=r.sent,"confirm"===a){r.next=5;break}return r.abrupt("return",t.$message.info("Deletion Canceled"));case 5:return r.next=7,t.$http.delete("roles/"+e);case 7:if(n=r.sent,i=n.data,200===i.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("Deletion failed"));case 11:t.$message.success("Deletion succeed"),t.getRolesList();case 13:case"end":return r.stop()}}),r)})))()},addRole:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("roles",e.addForm);case 4:a=t.sent,n=a.data,201!=n.meta.status&&e.$message.error("Add Role Failed"),e.$message.success("Add Role Success"),e.dialogVisible=!1,e.getRolesList();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},showEditDialog:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles/"+e);case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("Fetch Role info failed"));case 6:t.editFrom=n.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editRoleInfo:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("roles/"+e.editFrom.roleId,{roleName:e.editFrom.roleName,roleDesc:e.editFrom.roleDesc});case 4:if(a=t.sent,n=a.data,200===n.meta.status){t.next=9;break}return e.$message.error("Failed update role info"),t.abrupt("return");case 9:e.editDialogVisible=!1,e.getRolesList(),e.$message.success("Success update role info");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editDialogClosed:function(){this.$refs.editFormRef.resetFields()}}},m=f,p=(r("4b63"),r("2877")),g=Object(p["a"])(m,a,n,!1,null,"02773a74",null);t["default"]=g.exports},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),i=r("7dd0"),o="String Iterator",s=n.set,l=n.getterFor(o);i(String,"String",(function(e){s(this,{type:o,string:String(e),index:0})}),(function(){var e,t=l(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"4b63":function(e,t,r){"use strict";var a=r("d240"),n=r.n(a);n.a},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),i=r("9bdd"),o=r("e95a"),s=r("50c4"),l=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,d,f,m,p=n(e),g="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,v=void 0!==h,y=c(p),w=0;if(v&&(h=a(h,b>2?arguments[2]:void 0,2)),void 0==y||g==Array&&o(y))for(t=s(p.length),r=new g(t);t>w;w++)m=v?h(p[w],w):p[w],l(r,w,m);else for(d=y.call(p),f=d.next,r=new g;!(u=f.call(d)).done;w++)m=v?i(d,h,[u.value,w],!0):u.value,l(r,w,m);return r.length=w,r}},"5b60":function(e,t,r){},"746f":function(e,t,r){var a=r("428f"),n=r("5135"),i=r("e538"),o=r("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});n(t,e)||o(t,e,{value:i.f(e)})}},"9dad":function(e,t,r){"use strict";var a=r("5b60"),n=r.n(a);n.a},a4d3:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("d066"),o=r("c430"),s=r("83ab"),l=r("4930"),c=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),m=r("861d"),p=r("825a"),g=r("7b0b"),b=r("fc6a"),h=r("c04e"),v=r("5c6c"),y=r("7c73"),w=r("df75"),R=r("241c"),x=r("057f"),k=r("7418"),F=r("06cf"),$=r("9bf2"),D=r("d1e7"),_=r("9112"),C=r("6eeb"),S=r("5692"),I=r("f772"),O=r("d012"),A=r("90e3"),L=r("b622"),j=r("e538"),V=r("746f"),U=r("d44e"),N=r("69f3"),E=r("b727").forEach,P=I("hidden"),q="Symbol",z="prototype",B=L("toPrimitive"),T=N.set,K=N.getterFor(q),M=Object[z],G=n.Symbol,H=i("JSON","stringify"),J=F.f,Q=$.f,W=x.f,X=D.f,Y=S("symbols"),Z=S("op-symbols"),ee=S("string-to-symbol-registry"),te=S("symbol-to-string-registry"),re=S("wks"),ae=n.QObject,ne=!ae||!ae[z]||!ae[z].findChild,ie=s&&u((function(){return 7!=y(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=J(M,t);a&&delete M[t],Q(e,t,r),a&&e!==M&&Q(M,t,a)}:Q,oe=function(e,t){var r=Y[e]=y(G[z]);return T(r,{type:q,tag:e,description:t}),s||(r.description=t),r},se=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof G},le=function(e,t,r){e===M&&le(Z,t,r),p(e);var a=h(t,!0);return p(r),d(Y,a)?(r.enumerable?(d(e,P)&&e[P][a]&&(e[P][a]=!1),r=y(r,{enumerable:v(0,!1)})):(d(e,P)||Q(e,P,v(1,{})),e[P][a]=!0),ie(e,a,r)):Q(e,a,r)},ce=function(e,t){p(e);var r=b(t),a=w(r).concat(pe(r));return E(a,(function(t){s&&!de.call(r,t)||le(e,t,r[t])})),e},ue=function(e,t){return void 0===t?y(e):ce(y(e),t)},de=function(e){var t=h(e,!0),r=X.call(this,t);return!(this===M&&d(Y,t)&&!d(Z,t))&&(!(r||!d(this,t)||!d(Y,t)||d(this,P)&&this[P][t])||r)},fe=function(e,t){var r=b(e),a=h(t,!0);if(r!==M||!d(Y,a)||d(Z,a)){var n=J(r,a);return!n||!d(Y,a)||d(r,P)&&r[P][a]||(n.enumerable=!0),n}},me=function(e){var t=W(b(e)),r=[];return E(t,(function(e){d(Y,e)||d(O,e)||r.push(e)})),r},pe=function(e){var t=e===M,r=W(t?Z:b(e)),a=[];return E(r,(function(e){!d(Y,e)||t&&!d(M,e)||a.push(Y[e])})),a};if(l||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=A(e),r=function(e){this===M&&r.call(Z,e),d(this,P)&&d(this[P],t)&&(this[P][t]=!1),ie(this,t,v(1,e))};return s&&ne&&ie(M,t,{configurable:!0,set:r}),oe(t,e)},C(G[z],"toString",(function(){return K(this).tag})),C(G,"withoutSetter",(function(e){return oe(A(e),e)})),D.f=de,$.f=le,F.f=fe,R.f=x.f=me,k.f=pe,j.f=function(e){return oe(L(e),e)},s&&(Q(G[z],"description",{configurable:!0,get:function(){return K(this).description}}),o||C(M,"propertyIsEnumerable",de,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:G}),E(w(re),(function(e){V(e)})),a({target:q,stat:!0,forced:!l},{for:function(e){var t=String(e);if(d(ee,t))return ee[t];var r=G(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(d(te,e))return te[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}}),a({target:"Object",stat:!0,forced:!l,sham:!s},{create:ue,defineProperty:le,defineProperties:ce,getOwnPropertyDescriptor:fe}),a({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:me,getOwnPropertySymbols:pe}),a({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(g(e))}}),H){var ge=!l||u((function(){var e=G();return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}));a({target:"JSON",stat:!0,forced:ge},{stringify:function(e,t,r){var a,n=[e],i=1;while(arguments.length>i)n.push(arguments[i++]);if(a=t,(m(t)||void 0!==e)&&!se(e))return f(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!se(t))return t}),n[1]=t,H.apply(null,n)}})}G[z][B]||_(G[z],B,G[z].valueOf),U(G,q),O[P]=!0},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),i=r("1c7e"),o=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:o},{from:n})},a766:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("Home")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[e._v("Rights Management")])]),r("el-breadcrumb-item",[e._v("Rights List")])],1),r("el-card",[r("el-table",{attrs:{data:e.rightsList,border:"",stripe:"","empty-text":"No Data"}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{label:"Role Name",prop:"authName"}}),r("el-table-column",{attrs:{label:"Path",prop:"path"}}),r("el-table-column",{attrs:{label:"Role Level",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",[e._v("Level 1")]):"1"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("Level 2")]):r("el-tag",{attrs:{type:"warning"}},[e._v("Level 3")])]}}])})],1)],1)],1)},n=[],i=(r("96cf"),r("1da1")),o={data:function(){return{rightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(r=t.sent,a=r.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("Get User List Failed"));case 6:e.rightsList=a.data;case 7:case"end":return t.stop()}}),t)})))()}}},s=o,l=r("2877"),c=Object(l["a"])(s,a,n,!1,null,"3726bafc",null);t["default"]=c.exports},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,i=Function.prototype,o=i.toString,s=/^\s*function ([^ (]*)/,l="name";a&&!(l in i)&&n(i,l,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(e){return""}}})},d240:function(e,t,r){},d28b:function(e,t,r){var a=r("746f");a("iterator")},ddb0:function(e,t,r){var a=r("da84"),n=r("fdbc"),i=r("e260"),o=r("9112"),s=r("b622"),l=s("iterator"),c=s("toStringTag"),u=i.values;for(var d in n){var f=a[d],m=f&&f.prototype;if(m){if(m[l]!==u)try{o(m,l,u)}catch(g){m[l]=u}if(m[c]||o(m,c,d),n[d])for(var p in i)if(m[p]!==i[p])try{o(m,p,i[p])}catch(g){m[p]=i[p]}}}},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),l=r("9bf2").f,c=r("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(f,u);var m=f.prototype=u.prototype;m.constructor=f;var p=m.toString,g="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(o(d,e))return"";var r=g?t.slice(7,-1):t.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,r){var a=r("b622");t.f=a},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),l=r("fc6a"),c=r("8418"),u=r("b622"),d=r("1dde"),f=r("ae40"),m=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),b=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!m||!p},{slice:function(e,t){var r,a,u,d=l(this),f=s(d.length),m=o(e,f),p=o(void 0===t?f:t,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(d,m,p);for(a=new(void 0===r?Array:r)(h(p-m,0)),u=0;m<p;m++,u++)m in d&&c(a,u,d[m]);return a.length=u,a}})}}]);
//# sourceMappingURL=users_rights_roles.5d1ea4dd.js.map