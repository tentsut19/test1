/*! For license information please see 7-es2015.41bd205099430f15f3b2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3/ER":function(t,e,r){"use strict";(function(t){var n=r("Ju5/"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.a.Buffer:void 0,s=a?a.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}}).call(this,r("3UD+")(t))},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"Ju5/":function(t,e,r){"use strict";var n=r("XqMk"),o="object"==typeof self&&self&&self.Object===Object&&self,i=n.a||o||Function("return this")();e.a=i},L3Qv:function(t,e,r){"use strict";e.a=function(){return!1}},PjcS:function(t,e,r){"use strict";function n(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function s(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))}var o=r("8Y7J"),i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},a=r("Ju5/"),s=function(){return a.a.Date.now()},c=/\s/,u=/^\s+/,h=a.a.Symbol,l=Object.prototype,f=l.hasOwnProperty,d=l.toString,p=h?h.toStringTag:void 0,b=Object.prototype.toString,y=h?h.toStringTag:void 0,_=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?function(t){var e=f.call(t,p),r=t[p];try{t[p]=void 0;var n=!0}catch(i){}var o=d.call(t);return n&&(e?t[p]=r:delete t[p]),o}(t):function(t){return b.call(t)}(t)},v=function(t){return null!=t&&"object"==typeof t},g=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,m=/^0o[0-7]+$/i,w=parseInt,O=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||v(t)&&"[object Symbol]"==_(t)}(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;var r;t=(r=t)?r.slice(0,function(t){for(var e=t.length;e--&&c.test(t.charAt(e)););return e}(r)+1).replace(u,""):r;var n=j.test(t);return n||m.test(t)?w(t.slice(2),n?2:8):g.test(t)?NaN:+t},E=Math.max,A=Math.min,x=function(t,e){return t===e||t!=t&&e!=e},D=function(t,e){for(var r=t.length;r--;)if(x(t[r][0],e))return r;return-1},S=Array.prototype.splice;function P(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}P.prototype.clear=function(){this.__data__=[],this.size=0},P.prototype.delete=function(t){var e=this.__data__,r=D(e,t);return!(r<0||(r==e.length-1?e.pop():S.call(e,r,1),--this.size,0))},P.prototype.get=function(t){var e=this.__data__,r=D(e,t);return r<0?void 0:e[r][1]},P.prototype.has=function(t){return D(this.__data__,t)>-1},P.prototype.set=function(t,e){var r=this.__data__,n=D(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var T,I=P,z=function(t){if(!i(t))return!1;var e=_(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},C=a.a["__core-js_shared__"],M=(T=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",W=Function.prototype.toString,N=function(t){if(null!=t){try{return W.call(t)}catch(e){}try{return t+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,R=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!i(t)||(e=t,M&&M in e))&&(z(t)?R:U).test(N(t));var e}(r)?r:void 0},k=F(a.a,"Map"),L=F(Object,"create"),V=Object.prototype.hasOwnProperty,H=Object.prototype.hasOwnProperty;function $(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}$.prototype.clear=function(){this.__data__=L?L(null):{},this.size=0},$.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},$.prototype.get=function(t){var e=this.__data__;if(L){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return V.call(e,t)?e[t]:void 0},$.prototype.has=function(t){var e=this.__data__;return L?void 0!==e[t]:H.call(e,t)},$.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=L&&void 0===e?"__lodash_hash_undefined__":e,this};var B=$,q=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};function J(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}J.prototype.clear=function(){this.size=0,this.__data__={hash:new B,map:new(k||I),string:new B}},J.prototype.delete=function(t){var e=q(this,t).delete(t);return this.size-=e?1:0,e},J.prototype.get=function(t){return q(this,t).get(t)},J.prototype.has=function(t){return q(this,t).has(t)},J.prototype.set=function(t,e){var r=q(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var Z=J;function X(t){var e=this.__data__=new I(t);this.size=e.size}X.prototype.clear=function(){this.__data__=new I,this.size=0},X.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},X.prototype.get=function(t){return this.__data__.get(t)},X.prototype.has=function(t){return this.__data__.has(t)},X.prototype.set=function(t,e){var r=this.__data__;if(r instanceof I){var n=r.__data__;if(!k||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Z(n)}return r.set(t,e),this.size=r.size,this};var G=X,Q=function(){try{var t=F(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),K=function(t,e,r){"__proto__"==e&&Q?Q(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},Y=Object.prototype.hasOwnProperty,tt=function(t,e,r){var n=t[e];Y.call(t,e)&&x(n,r)&&(void 0!==r||e in t)||K(t,e,r)},et=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var s=e[i],c=n?n(r[s],t[s],s,r,t):void 0;void 0===c&&(c=t[s]),o?K(r,s,c):tt(r,s,c)}return r},rt=function(t){return v(t)&&"[object Arguments]"==_(t)},nt=Object.prototype,ot=nt.hasOwnProperty,it=nt.propertyIsEnumerable,at=rt(function(){return arguments}())?rt:function(t){return v(t)&&ot.call(t,"callee")&&!it.call(t,"callee")},st=Array.isArray,ct=r("WOAq"),ut=/^(?:0|[1-9]\d*)$/,ht=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&ut.test(t))&&t>-1&&t%1==0&&t<e},lt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},ft={};ft["[object Float32Array]"]=ft["[object Float64Array]"]=ft["[object Int8Array]"]=ft["[object Int16Array]"]=ft["[object Int32Array]"]=ft["[object Uint8Array]"]=ft["[object Uint8ClampedArray]"]=ft["[object Uint16Array]"]=ft["[object Uint32Array]"]=!0,ft["[object Arguments]"]=ft["[object Array]"]=ft["[object ArrayBuffer]"]=ft["[object Boolean]"]=ft["[object DataView]"]=ft["[object Date]"]=ft["[object Error]"]=ft["[object Function]"]=ft["[object Map]"]=ft["[object Number]"]=ft["[object Object]"]=ft["[object RegExp]"]=ft["[object Set]"]=ft["[object String]"]=ft["[object WeakMap]"]=!1;var dt=function(t){return function(e){return t(e)}},pt=r("xutz"),bt=pt.a&&pt.a.isTypedArray,yt=bt?dt(bt):function(t){return v(t)&&lt(t.length)&&!!ft[_(t)]},_t=Object.prototype.hasOwnProperty,vt=function(t,e){var r=st(t),n=!r&&at(t),o=!r&&!n&&Object(ct.a)(t),i=!r&&!n&&!o&&yt(t),a=r||n||o||i,s=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=s.length;for(var u in t)!e&&!_t.call(t,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ht(u,c))||s.push(u);return s},gt=Object.prototype,jt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||gt)},mt=function(t,e){return function(r){return t(e(r))}},wt=mt(Object.keys,Object),Ot=Object.prototype.hasOwnProperty,Et=function(t){return null!=t&&lt(t.length)&&!z(t)},At=function(t){return Et(t)?vt(t):function(t){if(!jt(t))return wt(t);var e=[];for(var r in Object(t))Ot.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)},xt=Object.prototype.hasOwnProperty,Dt=function(t){return Et(t)?vt(t,!0):function(t){if(!i(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=jt(t),r=[];for(var n in t)("constructor"!=n||!e&&xt.call(t,n))&&r.push(n);return r}(t)},St=r("3/ER"),Pt=function(){return[]},Tt=Object.prototype.propertyIsEnumerable,It=Object.getOwnPropertySymbols,zt=It?function(t){return null==t?[]:(t=Object(t),function(e,r){for(var n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;){var s=e[n];Tt.call(t,s)&&(a[i++]=s)}return a}(It(t)))}:Pt,Ct=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},Mt=mt(Object.getPrototypeOf,Object),Wt=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Ct(e,zt(t)),t=Mt(t);return e}:Pt,Nt=function(t,e,r){var n=e(t);return st(t)?n:Ct(n,r(t))},Ut=function(t){return Nt(t,At,zt)},Rt=function(t){return Nt(t,Dt,Wt)},Ft=F(a.a,"DataView"),kt=F(a.a,"Promise"),Lt=F(a.a,"Set"),Vt=F(a.a,"WeakMap"),Ht=N(Ft),$t=N(k),Bt=N(kt),qt=N(Lt),Jt=N(Vt),Zt=_;(Ft&&"[object DataView]"!=Zt(new Ft(new ArrayBuffer(1)))||k&&"[object Map]"!=Zt(new k)||kt&&"[object Promise]"!=Zt(kt.resolve())||Lt&&"[object Set]"!=Zt(new Lt)||Vt&&"[object WeakMap]"!=Zt(new Vt))&&(Zt=function(t){var e=_(t),r="[object Object]"==e?t.constructor:void 0,n=r?N(r):"";if(n)switch(n){case Ht:return"[object DataView]";case $t:return"[object Map]";case Bt:return"[object Promise]";case qt:return"[object Set]";case Jt:return"[object WeakMap]"}return e});var Xt=Zt,Gt=Object.prototype.hasOwnProperty,Qt=a.a.Uint8Array,Kt=function(t){var e=new t.constructor(t.byteLength);return new Qt(e).set(new Qt(t)),e},Yt=/\w*$/,te=h?h.prototype:void 0,ee=te?te.valueOf:void 0,re=Object.create,ne=function(){function t(){}return function(e){if(!i(e))return{};if(re)return re(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),oe=pt.a&&pt.a.isMap,ie=oe?dt(oe):function(t){return v(t)&&"[object Map]"==Xt(t)},ae=pt.a&&pt.a.isSet,se=ae?dt(ae):function(t){return v(t)&&"[object Set]"==Xt(t)},ce={};ce["[object Arguments]"]=ce["[object Array]"]=ce["[object ArrayBuffer]"]=ce["[object DataView]"]=ce["[object Boolean]"]=ce["[object Date]"]=ce["[object Float32Array]"]=ce["[object Float64Array]"]=ce["[object Int8Array]"]=ce["[object Int16Array]"]=ce["[object Int32Array]"]=ce["[object Map]"]=ce["[object Number]"]=ce["[object Object]"]=ce["[object RegExp]"]=ce["[object Set]"]=ce["[object String]"]=ce["[object Symbol]"]=ce["[object Uint8Array]"]=ce["[object Uint8ClampedArray]"]=ce["[object Uint16Array]"]=ce["[object Uint32Array]"]=!0,ce["[object Error]"]=ce["[object Function]"]=ce["[object WeakMap]"]=!1;var ue=function t(e,r,n,o,a,s){var c,u=1&r,h=2&r,l=4&r;if(n&&(c=a?n(e,o,a,s):n(e)),void 0!==c)return c;if(!i(e))return e;var f=st(e);if(f){if(c=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Gt.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(e),!u)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(e,c)}else{var d=Xt(e),p="[object Function]"==d||"[object GeneratorFunction]"==d;if(Object(ct.a)(e))return Object(St.a)(e,u);if("[object Object]"==d||"[object Arguments]"==d||p&&!a){if(c=h||p?{}:function(t){return"function"!=typeof t.constructor||jt(t)?{}:ne(Mt(t))}(e),!u)return h?function(t,e){return et(t,Wt(t),e)}(e,function(t,e){return t&&et(e,Dt(e),t)}(c,e)):function(t,e){return et(t,zt(t),e)}(e,function(t,e){return t&&et(e,At(e),t)}(c,e))}else{if(!ce[d])return a?e:{};c=function(t,e,r){var n,o,i=t.constructor;switch(e){case"[object ArrayBuffer]":return Kt(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var r=e?Kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?Kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return(o=new(n=t).constructor(n.source,Yt.exec(n))).lastIndex=n.lastIndex,o;case"[object Set]":return new i;case"[object Symbol]":return ee?Object(ee.call(t)):{}}}(e,d,u)}}s||(s=new G);var b=s.get(e);if(b)return b;s.set(e,c),se(e)?e.forEach((function(o){c.add(t(o,r,n,o,e,s))})):ie(e)&&e.forEach((function(o,i){c.set(i,t(o,r,n,i,e,s))}));var y=f?void 0:(l?h?Rt:Ut:h?Dt:At)(e);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r););}(y||e,(function(o,i){y&&(o=e[i=o]),tt(c,i,t(o,r,n,i,e,s))})),c},he=Function.prototype.toString,le=Object.prototype.hasOwnProperty,fe=he.call(Object);function de(t,e=new Set){const r=[t],n=new Set;for(;r.length>0;){const t=r.shift();if(!(n.has(t)||pe(t)||e.has(t)))if(n.add(t),t[Symbol.iterator])try{for(const e of t)r.push(e)}catch(o){}else for(const e in t)"defaultValue"!==e&&r.push(t[e])}return n}function pe(t){const e=Object.prototype.toString.call(t),r=typeof t;return"number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t instanceof EventTarget||t instanceof Event}class be extends class{constructor(t){if(this.crashes=[],this.state="initializing",this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e=t.error||t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(t=>t!==e)}_fire(t,...e){const r=this._listeners[t]||[];for(const n of r)n.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e.filename,lineno:e.lineno,colno:e.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&null!=t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit||(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}{constructor(t,e={}){super(e),this._editor=null,this._throttledSave=function(t,e,r){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),function(t,e,r){var n,o,a,c,u,h,l=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var r=n,i=o;return n=o=void 0,l=e,c=t.apply(i,r)}function y(t){return l=t,u=setTimeout(v,e),f?b(t):c}function _(t){var r=t-h;return void 0===h||r>=e||r<0||d&&t-l>=a}function v(){var t=s();if(_(t))return g(t);u=setTimeout(v,function(t){var r=e-(t-h);return d?A(r,a-(t-l)):r}(t))}function g(t){return u=void 0,p&&n?b(t):(n=o=void 0,c)}function j(){var t=s(),r=_(t);if(n=arguments,o=this,h=t,r){if(void 0===u)return y(h);if(d)return clearTimeout(u),u=setTimeout(v,e),b(h)}return void 0===u&&(u=setTimeout(v,e)),c}return e=O(e)||0,i(r)&&(f=!!r.leading,a=(d="maxWait"in r)?E(O(r.maxWait)||0,e):a,p="trailing"in r?!!r.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=h=o=u=void 0},j.flush=function(){return void 0===u?c:g(s())},j}(t,e,{leading:n,maxWait:e,trailing:o})}(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),this._creator=(e,r)=>t.create(e,r),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{if("string"==typeof this._elementOrData)return this.create(this._data,this._config,this._config.context);{const t=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,t,t.context)}}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=t,this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config))).then(t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const t=this._editor;return this._editor=null,this._destructor(t)})}_save(){const t=this._editor.model.document.version;if(t!==this._lastDocumentVersion)try{this._data=this._getData(),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t={};for(const e of this._editor.model.document.getRootNames())t[e]=this._editor.data.get({rootName:e});return t}_isErrorComingFromThisItem(t){return function(t,e,r=new Set){if(t===e&&"object"==typeof(n=t)&&null!==n)return!0;var n;const o=de(t,r),i=de(e,r);for(const a of o)if(i.has(a))return!0;return!1}(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return function(t,e){return ue(t,5,e="function"==typeof e?e:void 0)}(t,(t,e)=>function(t){return v(t)&&1===t.nodeType&&!function(t){if(!v(t)||"[object Object]"!=_(t))return!1;var e=Mt(t);if(null===e)return!0;var r=le.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&he.call(r)==fe}(t)}(t)||"context"===e?t:void 0)}}r.d(e,"a",(function(){return ve})),r.d(e,"b",(function(){return ge}));const ye=(t,e)=>("0"+e.toString(16)).slice(-2),_e=new Array(256).fill(0).map(ye);class ve{constructor(t,e){this.config={},this.data="",this.tagName="div",this.ready=new o.EventEmitter,this.change=new o.EventEmitter,this.blur=new o.EventEmitter,this.focus=new o.EventEmitter,this.error=new o.EventEmitter,this.initiallyDisabled=!1,this.isEditorSettingData=!1,this.id=function(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+_e[t>>0&255]+_e[t>>8&255]+_e[t>>16&255]+_e[t>>24&255]+_e[e>>0&255]+_e[e>>8&255]+_e[e>>16&255]+_e[e>>24&255]+_e[r>>0&255]+_e[r>>8&255]+_e[r>>16&255]+_e[r>>24&255]+_e[n>>0&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]}(),this.ngZone=e,this.elementRef=t}set disabled(t){this.setDisabledState(t)}get disabled(){return this.editorInstance?this.editorInstance.isReadOnly:this.initiallyDisabled}get editorInstance(){let t=this.editorWatchdog;return this.watchdog&&(t=this.watchdog._watchdogs.get(this.id)),t?t.editor:null}ngAfterViewInit(){this.attachToWatchdog()}ngOnDestroy(){return n(this,void 0,void 0,(function*(){this.watchdog?yield this.watchdog.remove(this.id):this.editorWatchdog&&this.editorWatchdog.editor&&(yield this.editorWatchdog.destroy(),this.editorWatchdog=void 0)}))}writeValue(t){null===t&&(t=""),this.editorInstance?(this.isEditorSettingData=!0,this.editorInstance.setData(t),this.isEditorSettingData=!1):(this.data=t,this.editorElement&&(this.editorElement.innerHTML=this.data))}registerOnChange(t){this.cvaOnChange=t}registerOnTouched(t){this.cvaOnTouched=t}setDisabledState(t){this.editorInstance&&(this.editorInstance.isReadOnly=t),this.initiallyDisabled=t}attachToWatchdog(){const t=(t,e)=>n(this,void 0,void 0,(function*(){return this.ngZone.runOutsideAngular(()=>n(this,void 0,void 0,(function*(){this.elementRef.nativeElement.appendChild(t);const r=yield this.editor.create(t,e);return this.initiallyDisabled&&(r.isReadOnly=this.initiallyDisabled),this.ngZone.run(()=>{this.ready.emit(r)}),this.setUpEditorEvents(r),r})))})),e=t=>n(this,void 0,void 0,(function*(){yield t.destroy(),this.elementRef.nativeElement.removeChild(this.editorElement)})),r=()=>{this.ngZone.run(()=>{this.error.emit()})},o=document.createElement(this.tagName),i=this.getConfig();if(this.editorElement=o,this.watchdog)this.watchdog.add({id:this.id,type:"editor",creator:t,destructor:e,sourceElementOrData:o,config:i}),this.watchdog.on("itemError",(t,{itemId:e})=>{e===this.id&&r()});else{const n=new be(this.editor);n.setCreator(t),n.setDestructor(e),n.on("error",r),this.editorWatchdog=n,this.editorWatchdog.create(o,i)}}getConfig(){if(this.data&&this.config.initialData)throw new Error("Editor data should be provided either using `config.initialData` or `data` properties.");return Object.assign(Object.assign({},this.config),{initialData:this.config.initialData||this.data||""})}setUpEditorEvents(t){const e=t.editing.view.document;t.model.document.on("change:data",e=>{this.ngZone.run(()=>{if(this.cvaOnChange&&!this.isEditorSettingData){const e=t.getData();this.cvaOnChange(e)}this.change.emit({event:e,editor:t})})}),e.on("focus",e=>{this.ngZone.run(()=>{this.focus.emit({event:e,editor:t})})}),e.on("blur",e=>{this.ngZone.run(()=>{this.cvaOnTouched&&this.cvaOnTouched(),this.blur.emit({event:e,editor:t})})})}}class ge{}},WOAq:function(t,e,r){"use strict";(function(t){var n=r("Ju5/"),o=r("L3Qv"),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i?n.a.Buffer:void 0;e.a=(s?s.isBuffer:void 0)||o.a}).call(this,r("3UD+")(t))},XqMk:function(t,e,r){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;e.a=n},xutz:function(t,e,r){"use strict";(function(t){var n=r("XqMk"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.a.process,s=function(){try{return i&&i.require&&i.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}();e.a=s}).call(this,r("3UD+")(t))}}]);