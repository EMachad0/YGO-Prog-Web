(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"03ac":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},i=[]},"11a8":function(t,e,a){},"199c":function(t,e){},"23be":function(t,e,a){"use strict";var r=a("199c"),i=a.n(r);e["default"]=i.a},"23c2":function(t,e,a){"use strict";a("11a8")},"385b":function(t,e,a){"use strict";a("9104")},"3dfd":function(t,e,a){"use strict";var r=a("03ac"),i=a("23be"),n=a("2877"),s=Object(n["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=a("3dfd"),n=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Base",{attrs:{guild:t.guild,user:t.user}},[a("h1",{staticClass:"text-center"},[t._v("Collection")]),a("div",{staticClass:"container"},[a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"sort-param"}},[t._v("Sort by")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.field,expression:"filters.field"}],staticClass:"form-control",attrs:{id:"sort-param"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"field",e.target.multiple?a:a[0])},t.update_deck_list]}},[a("option",{attrs:{selected:""}},[t._v("name")]),a("option",[t._v("atk")]),a("option",{attrs:{value:"dff"}},[t._v("def")]),a("option",[t._v("level")]),a("option",[t._v("scale")]),a("option",[t._v("link_val")])])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"sort-order"}},[t._v("Order")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.dir,expression:"filters.dir"}],staticClass:"form-control",attrs:{id:"sort-order"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"dir",e.target.multiple?a:a[0])},t.update_deck_list]}},[a("option",{attrs:{selected:""}},[t._v("asc")]),a("option",[t._v("desc")])])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"filter-name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.name,expression:"filters.name"}],staticClass:"form-control",attrs:{type:"text",id:"filter-name",placeholder:"Blue-Eyes White Dragon"},domProps:{value:t.filters.name},on:{change:t.update_deck_list,input:function(e){e.target.composing||t.$set(t.filters,"name",e.target.value)}}})])]),a("div",{staticClass:"row",attrs:{id:"card-list"}},[a("div",{class:t.loader_class,attrs:{id:"loader"}}),t._l(t.cards,(function(e,r){return a("div",{key:r,staticClass:"col-md-2 m-0 p-0"},[a("a",{attrs:{href:"https://db.ygoprodeck.com/card/?search="+e.card_cod,target:"_blank"}},[a("img",{staticClass:"img-fluid",attrs:{src:t.get_img(e.cod_img),alt:"",loading:"lazy",draggable:"false"}})])])}))],2)])])},o=[],c=(a("99af"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid bg-dark",attrs:{id:"nav"}},[a("header",{staticClass:"container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4"},[a("a",{staticClass:"d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none"},[a("img",{staticClass:"bi me-2",attrs:{src:t.Logo,alt:"",width:"32",height:"32"}})]),a("ul",{staticClass:"nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"},[a("li",[a("router-link",{staticClass:"nav-link px-2 link-light",attrs:{to:"/collection/"+t.guild+"/"+t.user}},[t._v("Collection")])],1),a("li",[a("router-link",{staticClass:"nav-link px-2 link-light",attrs:{to:"/deckbuilder/"+t.guild+"/"+t.user}},[t._v("Deck Builder")])],1)]),a("div",{staticClass:"col-md-3 text-end"})])]),a("main",{staticClass:"container-fluid min-vh-100"},[t._t("default")],2),t._m(0)])}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"container-fluid bg-dark mt-5",attrs:{id:"footer"}},[a("div",{staticClass:"container py-3 text-white"},[a("a",{staticClass:"mb-1",attrs:{href:"https://github.com/EMachad0"}},[t._v(" © Eliton Machado")])])])}],d=a("cf05"),u=a.n(d),f={name:"Base",data:function(){return{Logo:u.a}},props:{guild:String,user:String}},m=f,p=(a("a990"),a("2877")),v=Object(p["a"])(m,c,l,!1,null,null,null),g=v.exports,_=a("bc3a"),h=a.n(_),b={name:"Collection",components:{Base:g},data:function(){return{cards:[],filters:{name:"",field:"name",dir:"asc"},loader_class:""}},methods:{update_deck_list:function(){var t=this,e="http://127.0.0.1:5000/api/?&guild=".concat(this.guild,"&user=").concat(this.user,"&limit=30&name=%").concat(this.filters.name,"%&field=").concat(this.filters.field,"&dir=").concat(this.filters.dir);console.log(e),this.loader_class="",h.a.get(e).then((function(e){t.cards=e.data,t.loader_class="hide"}))},get_img:function(t){return"https://storage.googleapis.com/ygoprodeck.com/pics/".concat(t,".jpg")}},mounted:function(){console.log(this.guild,this.user),this.update_deck_list()},props:{guild:String,user:String}},k=b,C=(a("385b"),Object(p["a"])(k,s,o,!1,null,"10f34854",null)),y=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Base",{attrs:{guild:t.guild,user:t.user}},[a("h1",{staticClass:"text-center"},[t._v("Deck Builder")]),a("div",{staticClass:"container-fluid row p-2 d-flex justify-content-center"},[a("div",{staticClass:"col-3 text-center"},[a("img",{staticClass:"img-fluid w-100",attrs:{src:t.get_img(t.display),alt:"",draggable:"false",id:"display"}})]),a("div",{staticClass:"col-6"},[a("Deck",{ref:"deck",on:{cardOver:function(e){t.display=e}}})],1),a("div",{staticClass:"col-3"},[a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"sort-param"}},[t._v("Sort by")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.field,expression:"filters.field"}],staticClass:"form-control",attrs:{id:"sort-param"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"field",e.target.multiple?a:a[0])},t.update_deck_list]}},[a("option",{attrs:{selected:""}},[t._v("name")]),a("option",[t._v("atk")]),a("option",{attrs:{value:"dff"}},[t._v("def")]),a("option",[t._v("level")]),a("option",[t._v("scale")]),a("option",[t._v("link_val")])])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"sort-order"}},[t._v("Order")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.dir,expression:"filters.dir"}],staticClass:"form-control",attrs:{id:"sort-order"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"dir",e.target.multiple?a:a[0])},t.update_deck_list]}},[a("option",{attrs:{selected:""}},[t._v("asc")]),a("option",[t._v("desc")])])]),a("div",{staticClass:"col"},[a("label",{staticClass:"form-label",attrs:{for:"filter-name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.name,expression:"filters.name"}],staticClass:"form-control",attrs:{type:"text",id:"filter-name",placeholder:"Blue-Eyes White Dragon"},domProps:{value:t.filters.name},on:{change:t.update_deck_list,input:function(e){e.target.composing||t.$set(t.filters,"name",e.target.value)}}})])]),a("div",{staticClass:"row overflow-auto m-1 box",staticStyle:{height:"1000px"},attrs:{id:"card-list"}},t._l(t.cards,(function(e,r){return a("div",{key:r,staticClass:"row p-0 box",staticStyle:{"margin-left":"0"}},[a("div",{staticClass:"col-3 m-0 p-0",on:{mouseover:function(a){t.display=e.cod_img}}},[a("img",{staticClass:"img-fluid draggable",attrs:{src:t.get_img(e.cod_img),alt:"",id:"card-list_"+e.card_cod,draggable:"true"},on:{dragstart:function(a){return t.DragDrop.onDragStart(a,e)},contextmenu:function(a){return t.right_click(a,e)}}})]),a("div",{staticClass:"col-9 text-center align-middle"},[a("a",{attrs:{href:"https://db.ygoprodeck.com/card/?search="+e.card_cod,target:"_blank"}},[a("h6",[t._v(t._s(e.name))])]),a("div",{staticClass:"h-75 m-0"},[a("div",[t._v(" "+t._s(e.type)+" "),e.level?a("span",[t._v(" Lv "+t._s(e.level)+" ")]):t._e(),e.scale?a("span",[t._v(" Sc "+t._s(e.scale)+" ")]):t._e(),e.link_val?a("span",[t._v(" Lk "+t._s(e.link_val)+" ")]):t._e()]),a("div",[t._v(" "+t._s(e.race)+" "),e.attribute?a("span",[t._v(" / "+t._s(e.attribute)+" ")]):t._e()]),a("div",[t._v(" "+t._s(e.quantity)+" in collection ")]),e.limit?a("div",[0===e.limit?a("span",[t._v(" Forbidden ")]):t._e(),1===e.limit?a("span",[t._v(" Limited ")]):t._e(),2===e.limit?a("span",[t._v(" Semi-Limited ")]):t._e(),t._v(" to "+t._s(e.limit)+" ")]):t._e()])])])})),0)])])])},D=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row mt-1"},[t._m(0),a("div",{staticClass:"col text-end"},[a("button",{staticClass:"btn btn-outline-light btn-sm",attrs:{type:"button"},on:{click:function(e){t.TextDownload.download("YGO-Prog-deck.ydk",t.get_deck_text())}}},[t._v("Export ")])])]),a("div",{staticClass:"row deck main-deck",attrs:{id:"main"},on:{dragover:function(e){return t.DragDrop.onDragOver(e)},drop:function(e){return t.onDrop(e)}}},t._l(t.deck["main"],(function(e,r){return a("div",{key:r,staticClass:"col-card m-0 p-1"},[a("img",{staticClass:"img-fluid draggable",attrs:{src:t.get_img(e.card_cod),alt:"",draggable:"true"},on:{dragstart:function(a){t.DragDrop.onDragStart(a,e),t.removing=1},dragend:function(e){return t.remove_card("main",r)},contextmenu:function(e){e.preventDefault(),t.remove_card("main",r)},mouseover:function(a){return t.$emit("cardOver",e.cod_img)}}})])})),0),t._m(1),a("div",{staticClass:"row deck extra-deck",attrs:{id:"extra"},on:{dragover:function(e){return t.DragDrop.onDragOver(e)},drop:function(e){return t.onDrop(e)}}},t._l(t.deck["extra"],(function(e,r){return a("div",{key:r,staticClass:"col-card m-0 p-1"},[a("img",{staticClass:"img-fluid draggable",attrs:{src:t.get_img(e.card_cod),alt:"",draggable:"true"},on:{dragstart:function(a){t.DragDrop.onDragStart(a,e),t.removing=1},dragend:function(e){return t.remove_card("extra",r)},contextmenu:function(e){e.preventDefault(),t.remove_card("extra",r)},mouseover:function(a){return t.$emit("cardOver",e.cod_img)}}})])})),0),t._m(2),a("div",{staticClass:"row deck side-deck",attrs:{id:"side"},on:{dragover:function(e){return t.DragDrop.onDragOver(e)},drop:function(e){return t.onDrop(e)}}},t._l(t.deck["side"],(function(e,r){return a("div",{key:r,staticClass:"col-card m-0 p-1"},[a("img",{staticClass:"img-fluid draggable",attrs:{src:t.get_img(e.card_cod),alt:"",draggable:"true"},on:{dragstart:function(a){t.DragDrop.onDragStart(a,e),t.removing=1},dragend:function(e){return t.remove_card("side",r)},contextmenu:function(e){e.preventDefault(),t.remove_card("side",r)},mouseover:function(a){return t.$emit("cardOver",e.cod_img)}}})])})),0)])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("h5",[t._v(" Main Deck")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-1"},[a("h5",[t._v("Extra Deck")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-1"},[a("h5",[t._v("Side Deck")])])}],S=a("3835"),j=(a("caad"),a("2532"),a("a434"),a("4de4"),a("159b"),a("4fad"),a("4e82"),["main","extra","side","card-list"]);function $(t){t.preventDefault()}function E(t,e){var a=JSON.stringify(e);t.dataTransfer.setData("item",a),t.dataTransfer.setData("id",t.target.id)}function B(t){t.preventDefault(),t.dataTransfer.clearData()}var N={onDragOver:$,onDragStart:E,onDrop:B,drop_zones:j};function P(t,e){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8, "+encodeURIComponent(e)),a.setAttribute("download",t),document.body.appendChild(a),a.click(),document.body.removeChild(a)}var T={download:P},M={name:"Deck",data:function(){return{deck:{main:[],extra:[],side:[]},extra_deck_types:["Fusion Monster"],removing:0,DragDrop:N,TextDownload:T}},methods:{onDrop:function(t){t.preventDefault();var e=t.dataTransfer.getData("item"),a=JSON.parse(e),r=t.target;while(!N.drop_zones.includes(r.id))r=r.parentNode;console.log(r.id);var i=r.id;this.add_card(i,a)},add_card:function(t,e){if(!(this.deck[t].length>=("main"===t?60:15))){if("extra"===t){if(!this.extra_deck_types.includes(e.type))return}else if(("main"===t||"side"===t)&&this.extra_deck_types.includes(e.type))return;var a=this.get_amount_in_deck(t,e.card_cod),r=e.limit?e.limit:3;e.quantity!==a&&a!==r&&(this.deck[t].push(e),this.sort_deck())}},get_deck_id:function(t){return this.extra_deck_types.includes(t)?"extra":"main"},remove_card:function(t,e){this.removing=0,this.deck[t].splice(e,1)},get_amount_in_deck:function(t,e){var a=0;return"extra"===t?a+=this.deck["extra"].filter((function(t){return t.card_cod===e})).length:"side"!==t&&"main"!==t||(a+=this.deck["side"].filter((function(t){return t.card_cod===e})).length,a+=this.deck["main"].filter((function(t){return t.card_cod===e})).length),a-this.removing},get_deck_text:function(){var t="";return Object.entries(this.deck).forEach((function(e){var a=Object(S["a"])(e,2),r=a[0],i=a[1];t+=("side"===r?"!":"#")+r+"\n",i.forEach((function(e){return t+=e.card_cod+"\n"})),t+="\n"})),console.log(t),t},sort_deck:function(){for(var t in this.deck)this.deck[t].sort((function(t,e){var a=t.level,r=e.level;return a===r?t.name<=e.name?-1:1:null==a?1:null==r||a>r?-1:1}))},get_img:function(t){return"https://storage.googleapis.com/ygoprodeck.com/pics/".concat(t,".jpg")}}},A=M,L=(a("ceca"),Object(p["a"])(A,w,O,!1,null,"7b199e54",null)),J=L.exports,z={name:"DeckBuilder",components:{Base:g,Deck:J},data:function(){return{cards:[],filters:{name:"",field:"name",dir:"asc"},loader_class:"",display:7089711,DragDrop:N,Deck:J}},methods:{update_deck_list:function(){var t=this,e="http://127.0.0.1:5000/api/?&guild=".concat(this.guild,"&user=").concat(this.user,"&name=%").concat(this.filters.name,"%&field=").concat(this.filters.field,"&dir=").concat(this.filters.dir);this.loader_class="",h.a.get(e).then((function(e){t.cards=e.data,t.loader_class="hide"}))},get_img:function(t){return"https://storage.googleapis.com/ygoprodeck.com/pics/".concat(t,".jpg")},right_click:function(t,e){t.preventDefault(),this.$refs.deck.add_card(this.$refs.deck.get_deck_id(e.type),e)}},mounted:function(){this.update_deck_list()},props:{guild:String,user:String}},q=z,F=(a("23c2"),Object(p["a"])(q,x,D,!1,null,"2440f05a",null)),W=F.exports;r["default"].use(n["a"]);var G=[{path:"/collection/:guild/:user",name:"Collection",component:y,props:!0},{path:"/deckbuilder/:guild/:user",name:"DeckBuilder",component:W,props:!0}],I=new n["a"]({routes:G}),R=I,U=a("2f62");r["default"].use(U["a"]);var Y=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=a("5f5b"),K=a("b1e0");a("f9e3"),a("2dd8");r["default"].config.productionTip=!1,r["default"].use(H["a"]),r["default"].use(K["a"]),new r["default"]({router:R,store:Y,render:function(t){return t(i["default"])}}).$mount("#app")},9104:function(t,e,a){},a990:function(t,e,a){"use strict";a("b5c9")},b5c9:function(t,e,a){},bd37:function(t,e,a){},ceca:function(t,e,a){"use strict";a("bd37")},cf05:function(t,e,a){t.exports=a.p+"img/logo.996edef6.png"}});
//# sourceMappingURL=app.0bb26728.js.map