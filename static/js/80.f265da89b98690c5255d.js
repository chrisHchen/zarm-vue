(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{684:function(t,s,a){"use strict";a.r(s);const l=[{url:"https://static.zhongan.com/website/health/zarm/images/banners/1.png",img:"1"},{url:"https://static.zhongan.com/website/health/zarm/images/banners/2.png",img:"2"},{url:"https://static.zhongan.com/website/health/zarm/images/banners/3.png",img:"3"}];var n={data:()=>({ITEMS:l,i:{}}),methods:{handleChangeStart(t){console.log(t)},handleChangeEnd(t){console.log(t)},onJumpTo(){this.$refs.carousel.onJumpTo(0)},onSlideTo(){this.$refs.carousel.onSlideTo(2)}}},i=a(0),e=Object(i.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{attrs:{direction:"left"},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,(function(t,s){return a("za-carousel-item",{key:s,staticClass:"carousel-item-pic"},[a("img",{attrs:{src:t.url,alt:t.img,draggable:!1}})])})),1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{attrs:{height:"48vw",direction:"bottom"},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,(function(t,s){return a("za-carousel-item",{key:s,staticClass:"carousel-item-pic"},[a("img",{attrs:{src:t.url,alt:t.img,draggable:!1}})])})),1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{ref:"carousel",attrs:{direction:"left",swipeable:!1,loop:""},on:{changeStart:t.handleChangeStart,changeEnd:t.handleChangeEnd}},t._l(t.ITEMS,(function(t,s){return a("za-carousel-item",{key:s,staticClass:"carousel-item-pic"},[a("img",{attrs:{src:t.url,alt:t.img,draggable:!1}})])})),1),t._v(" "),a("div",{staticClass:"controls",staticStyle:{"text-align":"center","padding-bottom":"20px"}},[a("za-button",{attrs:{size:"sm"},on:{click:t.onJumpTo}},[t._v("无动画切换指定页")]),t._v(" "),a("za-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"sm"},on:{click:t.onSlideTo}},[t._v("滑动到指定页")])],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(3),t._v(" "),a("div",{staticClass:"za-panel__body"},[a("za-carousel",{attrs:{direction:"left",swipeable:!1,loop:"","auto-play":""}},t._l(t.ITEMS,(function(t,s){return a("za-carousel-item",{key:s},[a("div",{staticClass:"carousel-item-pic"},[a("img",{attrs:{src:t.url,alt:t.img,draggable:!1}})])])})),1)],1)])]),t._m(4)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("基本\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("纵向\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("循环轮播\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel__header"},[s("div",{staticClass:"za-panel__title"},[this._v("自动轮播\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("走马灯 Carousel")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"left"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeStart")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeStart"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeEnd")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeEnd"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"carousel-item-pic"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("img")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":src")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.url"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":alt")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.img"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":draggable")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("纵向")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("height")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"48vw"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"bottom"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeStart")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeStart"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeEnd")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeEnd"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"carousel-item-pic"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("img")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":src")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.url"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":alt")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.img"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":draggable")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("循环轮播")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("ref")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"carousel"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"left"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":swipeable")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("loop")]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeStart")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeStart"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("changeEnd")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChangeEnd"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"carousel-item-pic"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("img")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":src")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.url"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":alt")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.img"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":draggable")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"controls"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"text-align:center;padding-bottom:20px;"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"onJumpTo"')]),t._v(">")]),t._v("无动画切换指定页"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"margin-left:10px;"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"onSlideTo"')]),t._v(">")]),t._v("滑动到指定页"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("自动轮播")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("direction")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"left"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":swipeable")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("loop")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("auto-play")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":key")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"index"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-for")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"(i, index) in ITEMS"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"carousel-item-pic"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("img")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":src")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.url"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":alt")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"i.img"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":draggable")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel-item")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-carousel")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Vue Script")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("<script name="),a("span",{staticClass:"hljs-string"},[t._v('"vue"')]),t._v(">\n"),a("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" ITEMS = [\n  {\n    "),a("span",{staticClass:"hljs-attr"},[t._v("url")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'https://static.zhongan.com/website/health/zarm/images/banners/1.png'")]),t._v(",\n    "),a("span",{staticClass:"hljs-attr"},[t._v("img")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'1'")]),t._v(",\n  },\n  {\n    "),a("span",{staticClass:"hljs-attr"},[t._v("url")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'https://static.zhongan.com/website/health/zarm/images/banners/2.png'")]),t._v(",\n    "),a("span",{staticClass:"hljs-attr"},[t._v("img")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'2'")]),t._v(",\n  },\n  {\n    "),a("span",{staticClass:"hljs-attr"},[t._v("url")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'https://static.zhongan.com/website/health/zarm/images/banners/3.png'")]),t._v(",\n    "),a("span",{staticClass:"hljs-attr"},[t._v("img")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("'3'")]),t._v(",\n  },\n];\n\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      ITEMS,\n      "),a("span",{staticClass:"hljs-attr"},[t._v("i")]),t._v(": {}\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    handleChangeStart(index){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(index);\n    },\n    handleChangeEnd(index){\n      "),a("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(index);\n    },\n    onJumpTo(){\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$refs.carousel.onJumpTo("),a("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(")\n    },\n    onSlideTo(){\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$refs.carousel.onSlideTo("),a("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(")\n    }\n  },\n};\n<"),a("span",{staticClass:"hljs-regexp"},[t._v("/script>\n")])])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Carousel Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("direction")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'left'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'left', 'right', 'top', 'bottom'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("滑动方向")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number, string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("高度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loop")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否循环")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("active-index")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前页面的索引")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("swipeable")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否可拖拽")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("auto-play")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否自动轮播")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("auto-play-interval-time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自动轮播时间间隔，单位：毫秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("move-distance-ratio")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移动距离比例临界点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("move-time-span")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("移动时间跨度临界点，单位：毫秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("animation-duration")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画执行时间，单位：毫秒")])])])]),t._v(" "),a("h4",[t._v("Carousel Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change-start")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画开始时触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("index, 当前处于激活状态幻灯片的 index 值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change-end")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("动画结束后触发的事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("index, 动画结束时处于激活状态幻灯片的 index 值")])])])])])}],!1,null,null,null);s.default=e.exports},757:function(t,s,a){var l={"./2.0.0/carousel.md":684};function n(t){var s=i(t);return a(s)}function i(t){if(!a.o(l,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return l[t]}n.keys=function(){return Object.keys(l)},n.resolve=i,t.exports=n,n.id=757}}]);