(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{677:function(s,t,a){"use strict";a.r(t);var l={data:()=>({stepper1:0,stepper2:2,stepper3:0,stepper4:0,stepper5:0,stepper6:0,stepper7:0,stepper8:0,stepper9:0,stepper10:0}),methods:{handleChange(s){console.log(s)},handleInputChange(s){console.log(s)}}},e=a(0),v=Object(e.a)(l,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",{attrs:{title:"默认"}},[a("za-stepper",{attrs:{slot:"description"},slot:"description",model:{value:s.stepper6,callback:function(t){s.stepper6=t},expression:"stepper6"}})],1),s._v(" "),a("za-cell",{attrs:{title:"小号"}},[a("za-stepper",{attrs:{slot:"description",size:"sm"},slot:"description",model:{value:s.stepper1,callback:function(t){s.stepper1=t},expression:"stepper1"}})],1),s._v(" "),a("za-cell",{attrs:{title:"设置默认值"}},[a("za-stepper",{attrs:{slot:"description",size:"sm"},slot:"description",model:{value:s.stepper2,callback:function(t){s.stepper2=t},expression:"stepper2"}})],1),s._v(" "),a("za-cell",{attrs:{title:"设置上下限"}},[a("za-stepper",{attrs:{slot:"description",min:-3,max:3,size:"sm"},slot:"description",model:{value:s.stepper3,callback:function(t){s.stepper3=t},expression:"stepper3"}})],1),s._v(" "),a("za-cell",{attrs:{title:"设置步长"}},[a("za-stepper",{attrs:{slot:"description",step:.5,size:"sm"},slot:"description",model:{value:s.stepper4,callback:function(t){s.stepper4=t},expression:"stepper4"}})],1),s._v(" "),a("za-cell",{attrs:{title:"禁用状态"}},[a("za-stepper",{attrs:{slot:"description",disabled:"",size:"sm"},slot:"description",model:{value:s.stepper5,callback:function(t){s.stepper5=t},expression:"stepper5"}})],1)],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",{attrs:{title:"圆角"}},[a("za-stepper",{attrs:{slot:"description",shape:"radius",size:"sm"},slot:"description",model:{value:s.stepper7,callback:function(t){s.stepper7=t},expression:"stepper7"}})],1),s._v(" "),a("za-cell",{attrs:{title:"圆型"}},[a("za-stepper",{attrs:{slot:"description",shape:"circle",size:"sm"},slot:"description",model:{value:s.stepper8,callback:function(t){s.stepper8=t},expression:"stepper8"}})],1)],1)])]),s._m(2)])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("基本\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("多形状\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("步进器 Stepper")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("基本")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"默认"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper6"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"小号"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"设置默认值"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"设置上下限"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"-3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"设置步长"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":step")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"0.5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"禁用状态"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("多形状")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"圆角"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper7"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"radius"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"圆型"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"description"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stepper8"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"sm"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper1")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper2")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper3")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper4")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper5")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper6")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper7")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper8")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper9")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("stepper10")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleChange(event) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(event);\n    },\n    handleInputChange(v) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(v);\n    }\n  },\n};\n<"),a("span",{staticClass:"hljs-regexp"},[s._v("/script>\n")])])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Stepper Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("size")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'md'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'md', 'sm'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("主题")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("shape")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'radius', 'circle'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("形状")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("v-model")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("绑定值")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("disabled")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("boolean")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否禁用")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("min")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("最小值")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("max")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("最大值")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("step")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("1")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("步长")])])])]),s._v(" "),a("h4",[s._v("Stepper Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("change")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("点击加减后触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("event 事件对象")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("input-change")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("点击加减后返回变化的值")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")])])])])])}],!1,null,null,null);t.default=v.exports},780:function(s,t,a){var l={"./2.0.0/stepper.md":677};function e(s){var t=v(s);return a(t)}function v(s){if(!a.o(l,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return l[s]}e.keys=function(){return Object.keys(l)},e.resolve=v,s.exports=e,e.id=780}}]);