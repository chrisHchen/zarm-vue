(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{687:function(s,t,a){"use strict";a.r(t);var e={data:()=>({percent:10,theme:"primary",shape:"round",weight:"normal",dataSource:[{value:"primary",label:"primary"},{value:"success",label:"success"},{value:"warning",label:"warning"},{value:"error",label:"error"}],shapeSource:[{value:"rect",label:"rect"},{value:"round",label:"round"}],weightSource:[{value:"normal",label:"normal"},{value:"thin",label:"thin"}]}),methods:{handleStepChange(s){},handleOk(s){this.theme=s.value},handleShape(s){this.shape=s.value},handleWeight(s){this.weight=s.value}}},l=a(0),n=Object(l.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel__body"},[a("div",{staticClass:"progress",staticStyle:{padding:"20px 0"}},[a("za-progress",{attrs:{percent:s.percent,theme:s.theme,shape:s.shape,weight:s.weight}},[s._v("\n    "+s._s(s.percent+"%")+"\n  ")])],1),s._v(" "),a("div",{staticClass:"progress"},[a("za-progress",{attrs:{type:"circle",percent:s.percent,theme:s.theme,shape:s.shape,weight:s.weight}},[a("div",{staticClass:"progress-content"},[a("span",{staticClass:"progress-text"},[s._v(s._s(s.percent))]),a("span",{staticClass:"progress-percent"},[s._v("%")])])])],1),s._v(" "),a("div",{staticClass:"progress"},[a("za-progress",{attrs:{type:"semi-circle",percent:s.percent,theme:s.theme,shape:s.shape,weight:s.weight}},[a("div",{staticClass:"progress-content"},[a("span",{staticClass:"progress-text"},[s._v(s._s(s.percent))]),a("span",{staticClass:"progress-percent"},[s._v("%")])])])],1),s._v(" "),a("za-cell",{attrs:{title:"进度"}},[a("za-stepper",{attrs:{shape:"radius",step:10,min:0,max:100},on:{"step-change":s.handleStepChange},model:{value:s.percent,callback:function(t){s.percent=t},expression:"percent"}})],1),s._v(" "),a("za-cell",{attrs:{title:"主题"}},[a("za-select",{attrs:{defaultValue:s.theme,"data-source":s.dataSource},on:{ok:s.handleOk}})],1),s._v(" "),a("za-cell",{attrs:{title:"线条形状"}},[a("za-select",{attrs:{defaultValue:s.shape,"data-source":s.shapeSource},on:{ok:s.handleShape}})],1),s._v(" "),a("za-cell",{attrs:{title:"线条粗细"}},[a("za-select",{attrs:{defaultValue:s.weight,"data-source":s.weightSource},on:{ok:s.handleWeight}})],1)],1)])]),a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("进度条 Progress")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("基本")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._m(1),s._v("\n  "),s._m(2),s._v("\n    "+s._s(s.percent+"%")+"\n  "),s._m(3),s._v("\n"),s._m(4),s._v("\n"),s._m(5),s._v("\n  "),s._m(6),s._v("\n    "),s._m(7),s._v("\n      "),s._m(8),s._v(s._s(s.percent)),s._m(9),s._m(10),s._v("%"),s._m(11),s._v("\n    "),s._m(12),s._v("\n  "),s._m(13),s._v("\n"),s._m(14),s._v("\n"),s._m(15),s._v("\n  "),s._m(16),s._v("\n    "),s._m(17),s._v("\n      "),s._m(18),s._v(s._s(s.percent)),s._m(19),s._m(20),s._v("%"),s._m(21),s._v("\n    "),s._m(22),s._v("\n  "),s._m(23),s._v("\n"),s._m(24),s._v("\n\n"),s._m(25),s._v("\n  "),s._m(26),s._v("\n"),s._m(27),s._m(28),s._v("\n"),s._m(29),s._v("\n  "),s._m(30),s._v("\n"),s._m(31),s._m(32),s._v("\n"),s._m(33),s._v("\n  "),s._m(34),s._v("\n"),s._m(35),s._m(36),s._v("\n"),s._m(37),s._v("\n  "),s._m(38),s._v("\n"),s._m(39),s._m(40),s._v("\n")])])]),s._v(" "),a("h3",[s._v("Vue Script")]),s._v(" "),s._m(41),s._v(" "),a("h3",[s._v("API")]),s._v(" "),s._m(42)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel__header"},[t("div",{staticClass:"za-panel__title"},[this._v("基本\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"progress"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"padding:20px 0;"')]),s._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-progress")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":percent")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"percent"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"theme"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"shape"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":weight")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"weight"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-progress")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress"')]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-progress")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":percent")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"percent"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"theme"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"shape"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":weight")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"weight"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress-content"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress-text"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress-percent"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-progress")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress"')]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-progress")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"semi-circle"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":percent")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"percent"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":theme")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"theme"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"shape"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":weight")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"weight"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress-content"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress-text"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("class")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"progress-percent"')]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("span")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-progress")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("div")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("title")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"进度"')]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-stepper")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"radius"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":step")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":min")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"0"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":max")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"100"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"percent"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("step-change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleStepChange"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-stepper")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("title")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"主题"')]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":defaultValue")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"theme"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":data-source")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"dataSource"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("ok")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleOk"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-select")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("title")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"线条形状"')]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":defaultValue")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"shape"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":data-source")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"shapeSource"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("ok")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleShape"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-select")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("<"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(" "),t("span",{staticClass:"hljs-attr"},[this._v("title")]),this._v("="),t("span",{staticClass:"hljs-string"},[this._v('"线条粗细"')]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":defaultValue")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"weight"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":data-source")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"weightSource"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("ok")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleWeight"')]),s._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-select")]),this._v(">")])},function(){var s=this.$createElement,t=this._self._c||s;return t("span",{staticClass:"hljs-tag"},[this._v("</"),t("span",{staticClass:"hljs-name"},[this._v("za-cell")]),this._v(">")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"hljs"},[a("code",[s._v("<script name="),a("span",{staticClass:"hljs-string"},[s._v('"vue"')]),s._v(">\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("percent")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("theme")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'primary'")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("shape")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'round'")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("weight")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'normal'")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("dataSource")]),s._v(":[\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'primary'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'primary'")]),s._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'success'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'success'")]),s._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'warning'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'warning'")]),s._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'error'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'error'")]),s._v(" },\n      ],\n      "),a("span",{staticClass:"hljs-attr"},[s._v("shapeSource")]),s._v(":[\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'rect'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'rect'")]),s._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'round'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'round'")]),s._v(" },\n      ],\n      "),a("span",{staticClass:"hljs-attr"},[s._v("weightSource")]),s._v(":[\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'normal'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'normal'")]),s._v(" },\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("value")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'thin'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("label")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'thin'")]),s._v(" },\n      ],\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleStepChange(e) {\n\n    },\n    handleOk(v) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".theme = v.value;\n    },\n    handleShape(v) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".shape = v.value;\n    },\n    handleWeight(v) {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".weight = v.value;\n    },\n\n  },\n};\n<"),a("span",{staticClass:"hljs-regexp"},[s._v("/script>\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("theme")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'primary'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'primary', 'success', 'warning', 'error'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("主题")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("percent")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("0")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("进度百分比（范围：0 ～ 100）")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("shape")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'rect'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'rect', 'round'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("线条形状")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("weight")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string , number")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'normal'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'normal', 'thin'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("线条粗细")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'line'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("'line', 'circle' , 'semi-circle'")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("类型")])])])])}],!1,null,null,null);t.default=n.exports},725:function(s,t,a){},815:function(s,t,a){"use strict";a.r(t);var e=a(687),l=a(321),n=a(322),i=a(323),_=(a(725),{components:{Container:l.a,PageHeader:n.a,PageFooter:i.a,Demo:e.default}}),v=a(0),h=Object(v.a)(_,(function(){var s=this.$createElement,t=this._self._c||s;return t("Container",{staticClass:"progress-page"},[t("PageHeader",{attrs:{title:"进度条 Progress"}}),this._v(" "),t("Demo"),this._v(" "),t("PageFooter")],1)}),[],!1,null,null,null);t.default=h.exports}}]);