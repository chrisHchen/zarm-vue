(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{547:function(t,s,a){"use strict";a.r(s);var l={data:()=>({visible1:!1}),methods:{handleChange1(t){["close","ok"].indexOf(t)>-1||(this.v1=((t,s)=>"delete"==s?t.slice(0,-1):`${t}${s}`)(this.v1,t),console.log(this.v1))}}},e=a(6),i=Object(e.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-keyboard",{attrs:{type:"number"}})],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-cell",{attrs:{title:"拾取器触发"}},[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(s){t.visible1=!0}},slot:"description"},[t._v("开启")])],1),t._v(" "),a("za-keyboard-picker",{attrs:{visible:t.visible1,type:"number"},on:{"update:visible":function(s){t.visible1=s},keyClick:t.handleChange1}})],1)])]),t._m(2)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("平铺键盘 Keyboard\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("键盘触发器 KeyboardPicker\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("虚拟键盘 Keyboard & KeyboardPicker")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("平铺键盘 Keyboard")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"number"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("键盘触发器 KeyboardPicker")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"拾取器触发"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible1 = true"')]),t._v(">")]),t._v("开启"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible1"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"number"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("keyClick")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange1"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-keyboard-picker")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" getValue = "),a("span",{staticClass:"hljs-function"},[t._v("("),a("span",{staticClass:"hljs-params"},[t._v("v, key")]),t._v(") =>")]),t._v(" {\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (key == "),a("span",{staticClass:"hljs-string"},[t._v("'delete'")]),t._v(") {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" v.slice("),a("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(", "),a("span",{staticClass:"hljs-number"},[t._v("-1")]),t._v(")\n  }\n  "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("`"),a("span",{staticClass:"hljs-subst"},[t._v("${v}")]),a("span",{staticClass:"hljs-subst"},[t._v("${key}")]),t._v("`")]),t._v("\n}\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("visible1")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleChange1(key) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (["),a("span",{staticClass:"hljs-string"},[t._v("'close'")]),t._v(", "),a("span",{staticClass:"hljs-string"},[t._v("'ok'")]),t._v("].indexOf(key) > "),a("span",{staticClass:"hljs-number"},[t._v("-1")]),t._v(") {\n        "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(";\n      }\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".v1 = getValue("),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".v1, key)\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log("),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".v1);\n    },\n  },\n};\n"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])]),t._v("\n")])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("keyboard Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-keyboard")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'number'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键盘类型，可选"),a("code",[t._v("number")]),t._v(","),a("code",[t._v("price")]),t._v(","),a("code",[t._v("idcard")])])])])]),t._v(" "),a("h4",[t._v("keyboardPicker Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("visible")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示, 支持.sync 修饰符 (v2.3.0+)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'number'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键盘类型，可选"),a("code",[t._v("number")]),t._v(","),a("code",[t._v("price")]),t._v(","),a("code",[t._v("idcard")])])])])]),t._v(" "),a("h4",[t._v("keyboard & keyboardPicker Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("keyClick")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当点击键盘时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最新点击的值")])])])])])}],!1,null,null,null);s.default=i.exports},669:function(t,s,a){"use strict";a.r(s);var l=a(547),e=a(152),i=a(150),v=a(151),n={components:{Container:e.a,PageHeader:i.a,PageFooter:v.a,Demo:l.default}},_=a(6),c=Object(_.a)(n,function(){var t=this.$createElement,s=this._self._c||t;return s("Container",[s("PageHeader",{attrs:{title:"虚拟键盘 Keyboard & KeyboardPicker"}}),this._v(" "),s("Demo"),this._v(" "),s("PageFooter")],1)},[],!1,null,null,null);s.default=c.exports}}]);