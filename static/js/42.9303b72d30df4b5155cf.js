(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{661:function(t,e,n){},662:function(t,e,n){},663:function(t,e,n){"use strict";var a=n(661);n.n(a).a},664:function(t,e,n){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(n(663),n(0)),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])}),[],!1,null,"4d605d3f",null);e.a=r.exports},665:function(t,e,n){"use strict";var a=n(662);n.n(a).a},666:function(t,e,n){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(n(665),n(0)),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simulator"},[e("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])}),[],!1,null,"1196af06",null);e.a=r.exports},850:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n(666),r={components:{Container:n(664).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",(function(e,a){n.e(91).then(function(){var a=[n(777)(`./${t}/searchBar.md`)];e.apply(null,a)}.bind(this)).catch(n.oe)}))}},s=n(0),o=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Demo"),this._v(" "),e("Simulator",{attrs:{url:this.path}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);