!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueToastr=e():t.vueToastr=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),i=o(r);n(41),i.default.install=function(t,e){var n=t.extend({template:'<vue-toastr ref="vueToastr"></vue-toastr>',components:{"vue-toastr":i.default}}),o=(new n).$mount();document.body.appendChild(o.$el),t.prototype.$toastr=o.$refs.vueToastr},"undefined"!=typeof window&&window.Vue&&window.Vue.use(i.default),e.default=i.default,t.exports=e.default},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(29),r=n(7);t.exports=function(t){return o(r(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(3),r=n(2),i=n(25),s="prototype",u=function(t,e,n){var a,f,c,l=t&u.F,d=t&u.G,p=t&u.S,h=t&u.P,v=t&u.B,y=t&u.W,g=d?r:r[e]||(r[e]={}),m=d?o:p?o[e]:(o[e]||{})[s];d&&(n=e);for(a in n)f=!l&&m&&a in m,f&&a in g||(c=f?m[a]:n[a],g[a]=d&&"function"!=typeof m[a]?n[a]:v&&f?i(c,o):y&&m[a]==c?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[s]=t[s],e}(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((g[s]||(g[s]={}))[a]=c))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(3),r="__core-js_shared__",i=o[r]||(o[r]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(12)("wks"),r=n(13),i=n(3).Symbol;t.exports=function(t){return o[t]||(o[t]=i&&i[t]||(i||r)("Symbol."+t))}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={template:'<div class="toast-progress" v-bind:style="style"></div>',props:["data"],data:function(){return{intervalId:!1,hideEta:!1,progressBarValue:this.data.progressBarValue,style:{width:"100%"}}},mounted:function(){null===this.progressBarValue?(this.hideEta=(new Date).getTime()+this.data.timeout,this.setTimer()):this.updateProgress()},destroyed:function(){clearInterval(this.intervalId)},methods:{setTimer:function(){var t=this;this.intervalId=setInterval(function(){t.updateProgress()},10)},setValue:function(t){this.progressBarValue=t,this.updateProgress()},updateProgress:function(){var t;if(null===this.progressBarValue){var e=this.hideEta-(new Date).getTime();t=e/this.data.timeout*100,t=Math.floor(t),this.style.width=t+"%"}else t=Math.floor(this.progressBarValue),this.style.width=t+"%"}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(42),i=o(r),s=n(15),u=o(s);e.default={components:{toastProgress:u.default},template:i.default,props:["data"],data:function(){return{progressbar:!1,intervalId:!1}},mounted:function(){},created:function(){"undefined"!=typeof this.data.timeout&&0!==this.data.timeout?(this.data.progressbar!==!1&&(this.progressbar=!0),this.setTimeout()):null!==this.data.progressBarValue&&this.data.progressbar!==!1&&(this.progressbar=!0)},watch:{data:{handler:function(t,e){this.setProgressBarValue(t.progressBarValue)},deep:!0}},beforeDestroy:function(){this.clearIntervalID()},methods:{clearIntervalID:function(){this.intervalId!==!1&&clearInterval(this.intervalId),this.intervalId=!1},onMouseOver:function(){"undefined"!=typeof this.data.onMouseOver&&this.data.onMouseOver(),this.data.closeOnHover||this.clearIntervalID()},onMouseOut:function(){"undefined"!=typeof this.data.onMouseOut&&this.data.onMouseOut(),this.data.closeOnHover||this.setTimeout()},setTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;this.intervalId=setTimeout(function(){t.close()},this.data.timeout)}),setProgressBarValue:function(t){null!==this.data.progressBarValue&&this.$refs.progressBar.setValue(t)},clicked:function(){"undefined"!=typeof this.data.onClicked&&this.data.onClicked(),this.cclose()},cclose:function(){"undefined"!=typeof this.data.clickClose&&this.data.clickClose===!1||this.close()},close:function(){null!=this.$parent&&this.$parent.Close(this.data)}}},t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(18),i=o(r),s=n(20),u=o(s),a=n(43),f=o(a),c=n(16),l=o(c);e.default={template:f.default,name:"vueToastr",data:function(){for(var t=["toast-top-right","toast-bottom-right","toast-bottom-left","toast-top-left","toast-top-full-width","toast-bottom-full-width","toast-top-center","toast-bottom-center"],e={},n=0;n<=t.length-1;n++)e[t[n]]={};return{positions:t,defaultPosition:"toast-top-right",defaultType:"success",defaultCloseOnHover:!0,defaultTimeout:5e3,defaultProgressBar:!0,defaultProgressBarValue:null,defaultPreventDuplicates:!1,list:e,index:0}},created:function(){},mounted:function(){},components:{toast:l.default},methods:{addToast:function(t){this.index++,t.index=this.index,this.$set(this.list[t.position],this.index,t),"undefined"!=typeof t.onCreated&&this.$nextTick(function(){t.onCreated()})},removeToast:function(t){var e=this.list[t.position][t.index];"undefined"!=typeof e&&(this.$delete(this.list[t.position],t.index),"undefined"!=typeof t.onClosed&&this.$nextTick(function(){t.onClosed()}))},setProgress:function(t,e){var n=this.list[t.position][t.index];"undefined"!=typeof n&&this.$set(n,"progressBarValue",e)},Add:function(t){return this.AddData(this.processObjectData(t))},AddData:function(t){if("object"!==("undefined"==typeof t?"undefined":(0,u.default)(t)))return console.log("AddData accept only Object",t),!1;if(t.preventDuplicates)for(var e=(0,i.default)(this.list[t.position]),n=0;n<e.length;n++)if(this.list[t.position][e[n]].title===t.title&&this.list[t.position][e[n]].msg===t.msg)return console.log("Prevent Duplicates",t),!1;return this.addToast(t),t},processObjectData:function(t){return"object"===("undefined"==typeof t?"undefined":(0,u.default)(t))&&"undefined"!=typeof t.msg?("undefined"==typeof t.position&&(t.position=this.defaultPosition),"undefined"==typeof t.type&&(t.type=this.defaultType),"undefined"==typeof t.timeout&&(t.timeout=this.defaultTimeout),"undefined"==typeof t.progressbar&&(t.progressbar=this.defaultProgressBar),"undefined"==typeof t.progressBarValue&&(t.progressBarValue=this.defaultProgressBarValue),"undefined"==typeof t.closeOnHover&&(t.closeOnHover=this.defaultCloseOnHover),"undefined"==typeof t.preventDuplicates&&(t.preventDuplicates=this.defaultPreventDuplicates),t):{msg:t.toString(),position:this.defaultPosition,type:this.defaultType,timeout:this.defaultTimeout,closeOnHover:this.defaultCloseOnHover,progressbar:this.defaultProgressBar,progressBarValue:this.defaultProgressBarValue,preventDuplicates:this.defaultPreventDuplicates}},e:function(t,e){var n=this.processObjectData(t);return n.type="error","undefined"!=typeof e&&(n.title=e),this.AddData(n)},s:function(t,e){var n=this.processObjectData(t);return n.type="success","undefined"!=typeof e&&(n.title=e),this.AddData(n)},w:function(t,e){var n=this.processObjectData(t);return n.type="warning","undefined"!=typeof e&&(n.title=e),this.AddData(n)},i:function(t,e){var n=this.processObjectData(t);return n.type="info","undefined"!=typeof e&&(n.title=e),this.AddData(n)},Close:function(t){this.removeToast(t)},removeByType:function(t){for(var e=0;e<this.positions.length;e++)for(var n=(0,i.default)(this.list[this.positions[e]]),o=0;o<n.length;o++)this.list[this.positions[e]][n[o]].type===t&&this.Close(this.list[this.positions[e]][n[o]])},clearAll:function(){for(var t=0;t<this.positions.length;t++)for(var e=(0,i.default)(this.list[this.positions[t]]),n=0;n<e.length;n++)this.Close(this.list[this.positions[t]][e[n]])}}},t.exports=e.default},function(t,e,n){t.exports={default:n(21),__esModule:!0}},function(t,e,n){t.exports={default:n(22),__esModule:!0}},function(t,e,n){"use strict";var o=n(19).default;e.default=function(t){return t&&t.constructor===o?"symbol":typeof t},e.__esModule=!0},function(t,e,n){n(38),t.exports=n(2).Object.keys},function(t,e,n){n(40),n(39),t.exports=n(2).Symbol},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(31);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(23);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(1);t.exports=function(t){var e=o.getKeys(t),n=o.getSymbols;if(n)for(var r,i=n(t),s=o.isEnum,u=0;i.length>u;)s.call(t,r=i[u++])&&e.push(r);return e}},function(t,e,n){var o=n(5),r=n(1).getNames,i={}.toString,s="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return r(t)}catch(t){return s.slice()}};t.exports.get=function(t){return s&&"[object Window]"==i.call(t)?u(t):r(o(t))}},function(t,e,n){var o=n(1),r=n(11);t.exports=n(8)?function(t,e,n){return o.setDesc(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(6);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(6);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(1),r=n(5);t.exports=function(t,e){for(var n,i=r(t),s=o.getKeys(i),u=s.length,a=0;u>a;)if(i[n=s[a++]]===e)return n}},function(t,e){t.exports=!0},function(t,e,n){var o=n(9),r=n(2),i=n(4);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],s={};s[t]=e(n),o(o.S+o.F*i(function(){n(1)}),"Object",s)}},function(t,e,n){t.exports=n(28)},function(t,e,n){var o=n(1).setDesc,r=n(10),i=n(14)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(7);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(37);n(34)("keys",function(t){return function(e){return t(o(e))}})},function(t,e){},function(t,e,n){"use strict";var o=n(1),r=n(3),i=n(10),s=n(8),u=n(9),a=n(35),f=n(4),c=n(12),l=n(36),d=n(13),p=n(14),h=n(32),v=n(27),y=n(26),g=n(30),m=n(24),b=n(5),x=n(11),O=o.getDesc,w=o.setDesc,P=o.create,D=v.get,S=r.Symbol,_=r.JSON,j=_&&_.stringify,T=!1,M=p("_hidden"),B=o.isEnum,V=c("symbol-registry"),I=c("symbols"),k="function"==typeof S,C=Object.prototype,E=s&&f(function(){return 7!=P(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=O(C,e);o&&delete C[e],w(t,e,n),o&&t!==C&&w(C,e,o)}:w,A=function(t){var e=I[t]=P(S.prototype);return e._k=t,s&&T&&E(C,t,{configurable:!0,set:function(e){i(this,M)&&i(this[M],t)&&(this[M][t]=!1),E(this,t,x(1,e))}}),e},$=function(t){return"symbol"==typeof t},N=function(t,e,n){return n&&i(I,e)?(n.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),n=P(n,{enumerable:x(0,!1)})):(i(t,M)||w(t,M,x(1,{})),t[M][e]=!0),E(t,e,n)):w(t,e,n)},F=function(t,e){m(t);for(var n,o=y(e=b(e)),r=0,i=o.length;i>r;)N(t,n=o[r++],e[n]);return t},H=function(t,e){return void 0===e?P(t):F(P(t),e)},J=function(t){var e=B.call(this,t);return!(e||!i(this,t)||!i(I,t)||i(this,M)&&this[M][t])||e},W=function(t,e){var n=O(t=b(t),e);return!n||!i(I,e)||i(t,M)&&t[M][e]||(n.enumerable=!0),n},G=function(t){for(var e,n=D(b(t)),o=[],r=0;n.length>r;)i(I,e=n[r++])||e==M||o.push(e);return o},K=function(t){for(var e,n=D(b(t)),o=[],r=0;n.length>r;)i(I,e=n[r++])&&o.push(I[e]);return o},z=function(t){if(void 0!==t&&!$(t)){for(var e,n,o=[t],r=1,i=arguments;i.length>r;)o.push(i[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!$(e))return e}),o[1]=e,j.apply(_,o)}},q=f(function(){var t=S();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))});k||(S=function(){if($(this))throw TypeError("Symbol is not a constructor");return A(d(arguments.length>0?arguments[0]:void 0))},a(S.prototype,"toString",function(){return this._k}),$=function(t){return t instanceof S},o.create=H,o.isEnum=J,o.getDesc=W,o.setDesc=N,o.setDescs=F,o.getNames=v.get=G,o.getSymbols=K,s&&!n(33)&&a(C,"propertyIsEnumerable",J,!0));var L={for:function(t){return i(V,t+="")?V[t]:V[t]=S(t)},keyFor:function(t){return h(V,t)},useSetter:function(){T=!0},useSimple:function(){T=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=p(t);L[t]=k?e:A(e)}),T=!0,u(u.G+u.W,{Symbol:S}),u(u.S,"Symbol",L),u(u.S+u.F*!k,"Object",{create:H,defineProperty:N,defineProperties:F,getOwnPropertyDescriptor:W,getOwnPropertyNames:G,getOwnPropertySymbols:K}),_&&u(u.S+u.F*(!k||q),"JSON",{stringify:z}),l(S,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e){},function(t,e){t.exports='<div v-bind:class="\'toast toast-\' + data.type" style="display: block" @click=clicked() v-on:mouseover=onMouseOver v-on:mouseout=onMouseOut> <toast-progress v-if=progressbar :data=data ref=progressBar></toast-progress> <div class=toast-title v-html=data.title> </div> <div class=toast-message v-html=data.msg> </div> </div>'},function(t,e){t.exports='<div> <div v-bind:class="\'toast-container \' + position" v-for="(toasts, position) in list" :key=position> <toast :data=toast v-for="(toast, index) in toasts" :key=index> </toast> </div> </div>'}])});
//# sourceMappingURL=vue-toastr.js.map