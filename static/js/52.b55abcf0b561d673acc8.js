(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{661:function(s,t,a){},663:function(s,t,a){"use strict";var e=a(661);a.n(e).a},664:function(s,t,a){"use strict";var e={data:()=>({}),components:{},created(){},mounted(){},methods:{}},l=(a(663),a(0)),n=Object(l.a)(e,(function(){var s=this.$createElement,t=this._self._c||s;return t("main",[t("div",{staticClass:"main-container"},[this._t("default")],2)])}),[],!1,null,"4d605d3f",null);t.a=n.exports},788:function(s,t,a){"use strict";a.r(t);var e=a(664),l=a(0),n=Object(l.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"}),a("div",{staticClass:"zarm-markdown-doc"},[a("blockquote",[a("h2",[s._v("可视化生成自定义主题")])]),s._v(" "),a("p",[s._v("如果仅希望更换 ZarmVue 的品牌色，推荐使用"),a("a",{attrs:{href:"https://chuanshuoye.github.io/zarm-vue-chalk/#/"}},[s._v("在线主题生成工具")]),s._v("。通过替换主题色，能够让 ZarmVue 的视觉更加符合具体项目的定位。")]),s._v(" "),a("p",[s._v("使用上述工具，可以很方便地实时预览主题色改变之后的视觉，同时它还可以基于新的主题色生成完整的样式文件包，供直接下载使用。")]),s._v(" "),a("blockquote",[a("h2",[s._v("动态修改variables.scss常量实现自定义主题")])]),s._v(" "),a("p",[s._v("写入以下内容：")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'zarm-vue/styles/default.scss'")]),s._v("; "),a("span",{staticClass:"hljs-comment"},[s._v("// zarm-vue组件默认函数以及variables")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'zarm-vue/styles/custom-variables.scss'")]),s._v(";  "),a("span",{staticClass:"hljs-comment"},[s._v("// 用户自定义的variables覆盖默认常量配置")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'zarm-vue/styles/components.scss'")]),s._v("; "),a("span",{staticClass:"hljs-comment"},[s._v("// 加载组件样式")]),s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" ZarmVue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'zarm-vue'")]),s._v("\nVue.use(ZarmVue)\n")])]),s._v(" "),a("blockquote",[a("h2",[s._v("命令行自定义主题")])]),s._v(" "),a("p",[s._v("ZarmVue 的样式使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 ZarmVue 的样式变量。")]),s._v(" "),a("p",[s._v("clone本仓库后先安装依赖，然后通过修改 "),a("code",[s._v("styles/variables.scss")]),s._v(" 文件重写sass变量。")]),s._v(" "),a("p",[s._v("写入以下内容：")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("\n// 基础\n$"),a("span",{staticClass:"hljs-selector-tag"},[s._v("base-fontSize")]),s._v(": 14;\n$"),a("span",{staticClass:"hljs-selector-tag"},[s._v("placeholder-color")]),s._v(": "),a("span",{staticClass:"hljs-selector-id"},[s._v("#a9a9a9")]),s._v(";\n\n// 图标字体\n$"),a("span",{staticClass:"hljs-selector-tag"},[s._v("icon-url")]),s._v(": '//"),a("span",{staticClass:"hljs-selector-tag"},[s._v("at")]),a("span",{staticClass:"hljs-selector-class"},[s._v(".alicdn")]),a("span",{staticClass:"hljs-selector-class"},[s._v(".com")]),s._v("/"),a("span",{staticClass:"hljs-selector-tag"},[s._v("t")]),s._v("/"),a("span",{staticClass:"hljs-selector-tag"},[s._v("font_126288_147h8m0m5se5ewmi")]),s._v("';\n\n// 主题\n$"),a("span",{staticClass:"hljs-selector-tag"},[s._v("theme-default")]),s._v(": "),a("span",{staticClass:"hljs-selector-id"},[s._v("#e6e6e6")]),s._v(";\n$"),a("span",{staticClass:"hljs-selector-tag"},[s._v("theme-default-light")]),s._v(": "),a("span",{staticClass:"hljs-selector-tag"},[s._v("rgba")]),s._v("($"),a("span",{staticClass:"hljs-selector-tag"},[s._v("theme-default")]),s._v(", 0"),a("span",{staticClass:"hljs-selector-class"},[s._v(".5")]),s._v(");\n$"),a("span",{staticClass:"hljs-selector-tag"},[s._v("theme-default-dark")]),s._v(": "),a("span",{staticClass:"hljs-selector-tag"},[s._v("darken")]),s._v("($"),a("span",{staticClass:"hljs-selector-tag"},[s._v("theme-default")]),s._v(", 10%);\n\n// ...\n\n")])]),s._v(" "),a("p",[s._v("运行下面命令生成新样式：")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("npm run build:theme\n")])]),s._v(" "),a("p",[s._v("新生成的样式文件： "),a("code",[s._v("lib/zarm-vue.default.css")])]),s._v(" "),a("p",[s._v("之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 ZarmVue 编译好的 CSS 文件）：")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("import Vue from 'vue'\nimport ZarmVue from 'zarm-vue'\nimport './zarm-vue.default.css'\n\nVue.use(ZarmVue)\n")])])])])}],!1,null,null,null).exports,v={components:{Container:e.a,Demo:n}},c=Object(l.a)(v,(function(){var s=this.$createElement,t=this._self._c||s;return t("Container",{staticClass:"document-quick-start"},[t("Demo")],1)}),[],!1,null,"5307436f",null);t.default=c.exports}}]);