(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{707:function(s,t,a){"use strict";a.r(t);var l={data:()=>({visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,visible6:!1,visible7:!1}),methods:{handleClose(s,t){console.log(s,t)},handleOk(){alert("ok")},showAlert(){this.$zaAlert("警告12",{callback:s=>{console.log(s)}})},handleCancel(){this.visible7=!1}}},n=a(0),v=Object(n.a)(l,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible1=!0}},slot:"description"},[s._v("开启")]),s._v("\n  span普通\n")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible2=!0}},slot:"description"},[s._v("开启")]),s._v("\n  圆角\n")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible3=!0}},slot:"description"},[s._v("开启")]),s._v("\n  遮罩层可关闭\n")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible4=!0}},slot:"description"},[s._v("开启")]),s._v("\n  无头部\n")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(t){s.visible5=!0}},slot:"description"},[s._v("开启")]),s._v("\n  动画效果\n")],1),s._v(" "),a("za-modal",{attrs:{visible:s.visible1,title:"标题",showClose:!0},on:{"update:visible":function(t){s.visible1=t},close:s.handleClose}},[s._v("\n  模态框内容\n")]),s._v(" "),a("za-modal",{attrs:{visible:s.visible2,radius:"",showClose:!0},on:{"update:visible":function(t){s.visible2=t},close:s.handleClose}},[a("div",{staticStyle:{textAlign:"left"},attrs:{slot:"title"},slot:"title"},[s._v("标题")]),s._v("\n  模态框内容\n")]),s._v(" "),a("za-modal",{attrs:{visible:s.visible3,title:"标题",showClose:!0},on:{"update:visible":function(t){s.visible3=t},close:s.handleClose,maskClick:function(t){s.visible3=!1}}},[s._v("\n  遮罩层可关闭\n")]),s._v(" "),a("za-modal",{attrs:{visible:s.visible4},on:{"update:visible":function(t){s.visible4=t},close:s.handleClose,maskClick:function(t){s.visible4=!1}}},[s._v("\n  无头部\n")]),s._v(" "),a("za-modal",{attrs:{visible:s.visible5,animationType:"rotate",title:"标题",showClose:!0},on:{"update:visible":function(t){s.visible5=t},close:s.handleClose,maskClick:function(t){s.visible5=!1}}},[a("div",{staticStyle:{height:"100px"}},[s._v("\n  当前使用的是rotate旋转效果。"),a("br"),a("br"),s._v("\n  支持多种动画效果："),a("br"),s._v("\n  zoom：缩放效果（默认）"),a("br"),s._v("\n  rotate：旋转效果"),a("br"),s._v("\n  fade：淡出淡入效果"),a("br"),s._v("\n  door：开关门效果"),a("br"),s._v("\n  flip：翻转效果"),a("br"),s._v("\n  moveUp、moveDown、moveLeft、moveRight：移出移入效果"),a("br"),s._v("\n  slideUp、slideDown、slideLeft、slideRight：滑出滑入效果"),a("br")])])],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs",theme:"warning"},on:{click:function(t){s.visible6=!0}},slot:"description"},[s._v("开启")]),s._v("\n  警告框 Alert\n")],1),s._v(" "),a("za-cell",[a("za-button",{attrs:{slot:"description",size:"xs",theme:"warning"},on:{click:function(t){s.visible7=!0}},slot:"description"},[s._v("开启")]),s._v("\n  确认框 Confirm\n")],1),s._v(" "),a("za-alert",{attrs:{visible:s.visible6,radius:"",title:"警告",message:"这里是警告信息"},on:{"update:visible":function(t){s.visible6=t},close:s.handleClose}}),s._v(" "),a("za-confirm",{attrs:{visible:s.visible7,title:"确认信息",message:"你确定要这样做吗？",ok:s.handleOk,cancel:s.handleCancel}})],1)])]),s._m(2)])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("基本\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("特定场景\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("模态框 Modal")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("基本")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible1 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  span普通\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  圆角\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  遮罩层可关闭\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  无头部\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible5 = true"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  动画效果\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible1"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":showClose")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(">")]),s._v("\n  模态框内容\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible2"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("radius")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":showClose")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"title"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"textAlign:left"')]),s._v(">")]),s._v("标题"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  模态框内容\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("maskClick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible3 = false"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":showClose")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(">")]),s._v("\n  遮罩层可关闭\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("maskClick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible4 = false"')]),s._v(">")]),s._v("\n  无头部\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible5"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("animationType")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"rotate"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("maskClick")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible5 = false"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":showClose")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"height:100px"')]),s._v(">")]),s._v("\n  当前使用的是rotate旋转效果。"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  支持多种动画效果："),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  zoom：缩放效果（默认）"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  rotate：旋转效果"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  fade：淡出淡入效果"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  door：开关门效果"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  flip：翻转效果"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  moveUp、moveDown、moveLeft、moveRight：移出移入效果"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  slideUp、slideDown、slideLeft、slideRight：滑出滑入效果"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-modal")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("特定场景")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible6 = true"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  警告框 Alert\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"xs"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible7 = true"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("开启"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-button")]),s._v(">")]),s._v("\n  确认框 Confirm\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-alert")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible6"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("radius")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"警告"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"这里是警告信息"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-alert")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-confirm")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible7"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"确认信息"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"你确定要这样做吗？"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":ok")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleOk"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":cancel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleCancel"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-confirm")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h4",[s._v("警告框 使用全局方法 $zaAlert")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      handleClick() {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaAlert("),a("span",{staticClass:"hljs-string"},[s._v("'警告'")]),s._v(", {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("callback")]),s._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(" =>")]),s._v(" {\n            "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(event)\n          }\n        })\n      }\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v("{\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(":{\n    handleClick(){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" h = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$createElement;\n      "),a("span",{staticClass:"hljs-comment"},[s._v("// 这里的message可以是VNode")]),s._v("\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" message = h("),a("span",{staticClass:"hljs-string"},[s._v("'p'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(", [\n        h("),a("span",{staticClass:"hljs-string"},[s._v("'span'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'内容可以是 '")]),s._v("),\n        h("),a("span",{staticClass:"hljs-string"},[s._v("'i'")]),s._v(", { "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'color: teal'")]),s._v(" }, "),a("span",{staticClass:"hljs-string"},[s._v("'VNode'")]),s._v(")\n      ]);\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaAlert(message, {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("callback")]),s._v(": "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") =>")]),s._v(" {\n          "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(event)\n        }\n      })\n    }\n  }\n}\n")])])]),s._v(" "),a("h4",[s._v("或者使用 za-alert Component")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-alert")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":visible.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("radius")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"警告"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"这里是警告信息"')]),s._v("\n  @"),a("span",{staticClass:"hljs-attr"},[s._v("close")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClose"')]),s._v("\n>")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-alert")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h4",[s._v("确认框 使用全局方法 $zaConfirm")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleClick"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      handleClick() {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" h = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$createElement\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// message 可以是VNode 或者 String")]),s._v("\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" message = h("),a("span",{staticClass:"hljs-string"},[s._v("'p'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(", [\n          h("),a("span",{staticClass:"hljs-string"},[s._v("'span'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'内容可以是 '")]),s._v("),\n          h("),a("span",{staticClass:"hljs-string"},[s._v("'i'")]),s._v(", { "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'color: teal'")]),s._v(" }, "),a("span",{staticClass:"hljs-string"},[s._v("'VNode'")]),s._v(")\n        ])\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// $zaConfirm 参数为 <?message: String, options: Object>")]),s._v("\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaConfirm({\n          message,\n          "),a("span",{staticClass:"hljs-attr"},[s._v("ok")]),s._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(" =>")]),s._v(" {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaToast("),a("span",{staticClass:"hljs-string"},[s._v("'ok'")]),s._v(")\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(" "),a("span",{staticClass:"hljs-comment"},[s._v("// 此处返回true, 会关闭confirm")]),s._v("\n          },\n          "),a("span",{staticClass:"hljs-attr"},[s._v("cancel")]),s._v(": "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(" =>")]),s._v(" {\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaToast("),a("span",{staticClass:"hljs-string"},[s._v("'closed'")]),s._v(")\n          }\n        })\n      }\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("注意：这里的 "),a("code",[s._v("ok")]),s._v(" 和 "),a("code",[s._v("cancel")]),s._v(" 需要使用 Arrow Function, 这样内部的 this 才会指向当前的 vue 实例, 另外，ok 函数只有在返回 true 的时候会关闭 Confirm, 而 cancel 会自动关闭 Confirm")]),s._v(" "),a("p",[s._v("或者使用模板")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-confirm")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":visible")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"visible"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"确认信息"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("message")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"你确定吗？"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":ok")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleOk"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":cancel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleCancel"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-confirm")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible1")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible2")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible3")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible4")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible5")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible6")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("visible7")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n    };\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleClose(reason, event){\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(reason, event);\n    },\n    handleOk(){\n      alert("),a("span",{staticClass:"hljs-string"},[s._v("'ok'")]),s._v(")\n    },\n    showAlert() {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$zaAlert("),a("span",{staticClass:"hljs-string"},[s._v("'警告12'")]),s._v(", {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("callback")]),s._v(": "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") =>")]),s._v(" {\n          "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(event)\n        }\n      })\n    },\n    handleCancel(){\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".visible7 = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  },\n};\n<"),a("span",{staticClass:"hljs-regexp"},[s._v("/script>\n")])])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Modal Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("shape")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("无")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'radius'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("形状")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("visible")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否显示, 支持.sync 修饰符")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("ok-text")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'确定'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("确认按钮文案")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("cancel-text")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'关闭'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("取消按钮文案")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("animation-type")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'fade'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'fade', 'door', 'flip', 'rotate', 'zoom','moveUp', 'moveDown', 'moveLeft', 'moveRight','slideUp', 'slideDown', 'slideLeft', 'slideRight'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("动画效果")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("animationDuration")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("200")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("动画执行时间")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("width")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string, number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'70%'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("宽度")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("get-container")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Func")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("指定挂载的父容器 DOM 节点")])])])]),s._v(" "),a("h4",[s._v("Modal Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("close")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("modal 关闭时触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("reason, event 事件对象")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("mask-click")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("点击遮罩后触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("event 事件对象")])])])]),s._v(" "),a("h4",[s._v("Alert Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("close")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("alert 关闭时触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("event 事件对象")])])])]),s._v(" "),a("h4",[s._v("Confirm Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("ok")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("confirm 确定时触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("event 事件对象")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("cancel")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("confirm 取消时触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("event 事件对象")])])])])])}],!1,null,null,null);t.default=v.exports}}]);