/*
 AngularJS v1.2.4
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Y,N,r){'use strict';function G(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.4/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function pb(b){if(null==b||za(b))return!1;var a=
b.length;return 1===b.nodeType&&a?!0:D(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(A(b))for(d in b)"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(pb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Mc(b,a,c){for(var d=Ob(b),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function Ya(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function x(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Qb(b,a);return b}function S(b){return parseInt(b,
10)}function Rb(b,a){return x(new (x(function(){},{prototype:b})),a)}function v(){}function Aa(b){return b}function ca(b){return function(){return b}}function H(b){return"undefined"==typeof b}function z(b){return"undefined"!=typeof b}function V(b){return null!=b&&"object"==typeof b}function D(b){return"string"==typeof b}function qb(b){return"number"==typeof b}function Ka(b){return"[object Date]"==Za.apply(b)}function L(b){return"[object Array]"==Za.apply(b)}function A(b){return"function"==typeof b}
function $a(b){return"[object RegExp]"==Za.apply(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Nc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Oc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function ab(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function La(b,a){var c=ab(b,a);0<=c&&b.splice(c,1);return a}function ga(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw Ma("cpws");if(a){if(b===
a)throw Ma("cpi");if(L(b))for(var c=a.length=0;c<b.length;c++)a.push(ga(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ga(b[d]);Qb(a,c)}}else(a=b)&&(L(b)?a=ga(b,[]):Ka(b)?a=new Date(b.getTime()):$a(b)?a=RegExp(b.source):V(b)&&(a=ga(b,{})));return a}function Pc(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c]);return a}function Ba(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ba(b[d],a[d]))return!1;return!0}}else{if(Ka(b))return Ka(a)&&b.getTime()==a.getTime();if($a(b)&&$a(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!A(b[d])){if(!Ba(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!A(a[d]))return!1;return!0}return!1}function Sb(){return N.securityPolicy&&
N.securityPolicy.isActive||N.querySelector&&!(!N.querySelector("[ng-csp]")&&!N.querySelector("[data-ng-csp]"))}function rb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];return!A(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Qc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=r:za(a)?c="$WINDOW":a&&N===a?c="$DOCUMENT":a&&(a.$evalAsync&&
a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,Qc,a?"  ":null)}function Tb(b){return D(b)?JSON.parse(b):b}function Na(b){b&&0!==b.length?(b=t(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=w(b).clone();try{b.html("")}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?t(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+t(b)})}catch(d){return t(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}
function Vb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),z(d)&&(b=z(c[1])?Ub(c[1]):!0,a[d]?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function sb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Rc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(N.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=
(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Xb(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===N?"document":ha(b);throw Ma("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;
if(Y&&!d.test(Y.name))return c();Y.name=Y.name.replace(d,"");bb.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Sc,function(b,d){return(d?a:"")+b.toLowerCase()})}function tb(b,a,c){if(!b)throw Ma("areq",a||"?",c||"required");return b}function Oa(b,a,c){c&&L(b)&&(b=b[b.length-1]);tb(A(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function va(b,a){if("hasOwnProperty"===b)throw Ma("badname",
a);}function ub(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&A(b)?rb(e,b):b}function vb(b){var a=b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Tc(b){var a=G("$injector"),c=G("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||G;return b.module||(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&
b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),
controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Pa(b){return b.replace(Uc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Vc,"Moz$1")}function wb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,s,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=w(k[m]),l?p.triggerHandler("$destroy"):l=!l,s=0,p=(C=p.children()).length;s<
p;s++)e.push(Ca(C[s]));return g.apply(this,arguments)}var g=Ca.fn[b],g=g.$original||g;e.$original=g;Ca.fn[b]=e}function I(b){if(b instanceof I)return b;if(!(this instanceof I)){if(D(b)&&"<"!=b.charAt(0))throw xb("nosel");return new I(b)}if(D(b)){var a=N.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);yb(this,a.childNodes);w(N.createDocumentFragment()).append(this)}else yb(this,b)}function zb(b){return b.cloneNode(!0)}function Qa(b){Zb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Qa(b[a])}function $b(b,a,c,d){if(z(d))throw xb("offargs");var e=ka(b,"events");ka(b,"handle")&&(H(a)?q(e,function(a,c){Ab(b,c,a);delete e[c]}):q(a.split(" "),function(a){H(c)?(Ab(b,a,e[a]),delete e[a]):La(e[a]||[],c)}))}function Zb(b,a){var c=b[db],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),$b(b)),delete Ra[c],b[db]=r))}function ka(b,a,c){var d=b[db],d=Ra[d||-1];if(z(c))d||(b[db]=d=++Wc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function ac(b,
a,c){var d=ka(b,"data"),e=z(c),g=!e&&z(a),f=g&&!V(a);d||f||ka(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];x(d,a)}else return d}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ba(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function yb(b,a){if(a){a=a.nodeName||!z(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function bc(b,a){return eb(b,"$"+(a||"ngController")+"Controller")}function eb(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=L(a)?a:[a];b.length;){for(var d=0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==r)return c;b=b.parent()}}
function cc(b,a){var c=fb[a.toLowerCase()];return c&&dc[b.nodeName]&&c}function Xc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||N);if(H(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};q(a[e||c.type],
function(a){a.call(b,c)});8>=E?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Da(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===r&&(c=b.$$hashKey=Ya()):c=b;return a+":"+c}function Sa(b){q(b,this.put,this)}function ec(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Yc,""),c=c.match(Zc),
q(c[1].split($c),function(b){b.replace(ad,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Oa(b[c],"fn"),a=b.slice(0,c)):Oa(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(V(b))q(b,Pb(a));else return a(b,c)}}function c(a,b){va(a,"service");if(A(b)||L(b))b=n.instantiate(b);if(!b.$get)throw Ta("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,h,g;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),
d=c._invokeQueue,h=0,g=d.length;h<g;h++){var f=d[h],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else A(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Oa(a,"module")}catch(m){throw L(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Ta("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ta("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),a[d]=f,a[d]=b(d)}finally{l.shift()}}
function d(a,b,e){var h=[],g=ec(a),f,k,l;k=0;for(f=g.length;k<f;k++){l=g[k];if("string"!==typeof l)throw Ta("itkn",l);h.push(e&&e.hasOwnProperty(l)?e[l]:c(l))}a.$inject||(a=a[f]);switch(b?-1:h.length){case 0:return a();case 1:return a(h[0]);case 2:return a(h[0],h[1]);case 3:return a(h[0],h[1],h[2]);case 4:return a(h[0],h[1],h[2],h[3]);case 5:return a(h[0],h[1],h[2],h[3],h[4]);case 6:return a(h[0],h[1],h[2],h[3],h[4],h[5]);case 7:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6]);case 8:return a(h[0],h[1],
h[2],h[3],h[4],h[5],h[6],h[7]);case 9:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]);case 10:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9]);default:return a.apply(b,h)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return V(e)||A(e)?e:c},get:c,annotate:ec,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",l=[],k=new Sa,m={$provide:{provider:a(c),factory:a(d),
service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ca(b))}),constant:a(function(a,b){va(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Ta("unpr",l.join(" <- "));}),p={},s=p.$injector=g(p,function(a){a=n.get(a+h);return s.invoke(a.$get,a)});q(e(b),function(a){s.invoke(a||v)});return s}
function bd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==t(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function cd(b,a,c,d){function e(a){try{a.apply(null,
ta.call(arguments,1))}finally{if(C--,0===C)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function g(a,b){(function la(){q(K,function(a){a()});u=b(la,a)})()}function f(){y=null;P!=h.url()&&(P=h.url(),q(W,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,n=b.setTimeout,p=b.clearTimeout,s={};h.isMock=!1;var C=0,B=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};h.notifyWhenNoOutstandingRequests=function(a){q(K,function(a){a()});0===C?a():B.push(a)};
var K=[],u;h.addPollFn=function(a){H(u)&&g(100,n);K.push(a);return a};var P=k.href,Q=a.find("base"),y=null;h.url=function(a,c){k!==b.location&&(k=b.location);if(a){if(P!=a)return P=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",a),Q.attr("href",Q.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var W=[],R=!1;h.onUrlChange=function(a){if(!R){if(d.history)w(b).on("popstate",f);if(d.hashchange)w(b).on("hashchange",f);else h.addPollFn(f);R=!0}W.push(a);
return a};h.baseHref=function(){var a=Q.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var $={},Z="",aa=h.baseHref();h.cookies=function(a,b){var d,e,h,g;if(a)b===r?l.cookie=escape(a)+"=;path="+aa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+aa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==Z)for(Z=l.cookie,d=Z.split("; "),$={},h=0;h<d.length;h++)e=
d[h],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),$[a]===r&&($[a]=unescape(e.substring(g+1))));return $}};h.defer=function(a,b){var c;C++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};h.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(v),!0):!1}}function dd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new cd(b,d,a,c)}]}function ed(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}
function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var f=0,h=x({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!H(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=m[a];if(b)return e(b),l[a]},remove:function(a){var b=m[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete m[a],delete l[a],f--)},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=
h=l=null;delete a[b]},info:function(){return x({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function fd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){va(a,"directive");D(a)?(tb(e,"directiveFactory"),c.hasOwnProperty(a)||
(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);A(f)?f={compile:ca(f)}:!f.compile&&f.link&&(f.compile=ca(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Pb(l));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};
this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,s,C,B,K,u,P,Q){function y(a,b,c,d,e){a instanceof w||(a=w(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var g=R(a,b,a,c,d,
e);return function(b,c,d){tb(b,"scope");var e=c?Ea.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var k=e[d];1!=k.nodeType&&9!=k.nodeType||e.eq(d).data("$scope",b)}W(e,"ng-scope");c&&c(e,b);g&&g(b,e,e);return e}}function W(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e,g){function f(a,c,d,e){var g,l,m,p,n,s,C,da=[];n=0;for(s=c.length;n<s;n++)da.push(c[n]);C=n=0;for(s=k.length;n<s;C++)l=da[C],c=k[n++],g=k[n++],m=w(l),c?(c.scope?(p=a.$new(),
m.data("$scope",p),W(m,"ng-scope")):p=a,(m=c.transclude)||!e&&b?c(g,p,l,d,$(a,m||b)):c(g,p,l,d,e)):g&&g(a,l.childNodes,r,e)}for(var k=[],l,m,p,n=0;n<a.length;n++)m=new Eb,l=Z(a[n],[],m,0===n?d:r,e),l=(g=l.length?M(l,a[n],m,b,c,null,[],[],g):null)&&g.terminal||!a[n].childNodes||!a[n].childNodes.length?null:R(a[n].childNodes,g?g.transclude:b),k.push(g),k.push(l),p=p||g||l,g=null;return p?f:null}function $(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",
rb(c,c.$destroy));return d}}function Z(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:la(b,ma(Fa(a).toLowerCase()),"E",d,f);var m,p,n;l=a.attributes;for(var s=0,C=l&&l.length;s<C;s++){var B=!1,y=!1;m=l[s];if(!E||8<=E||m.specified){p=m.name;n=ma(p);wa.test(n)&&(p=cb(n.substr(6),"-"));var P=n.replace(/(Start|End)$/,"");n===P+"Start"&&(B=p,y=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));n=ma(p.toLowerCase());k[n]=p;c[n]=m=ba(E&&"href"==p?decodeURIComponent(a.getAttribute(p,2)):m.value);
cc(a,n)&&(c[n]=!0);I(a,b,m,n);la(b,n,"A",d,f,B,y)}}a=a.className;if(D(a)&&""!==a)for(;l=g.exec(a);)n=ma(l[2]),la(b,n,"C",d,f)&&(c[n]=ba(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))n=ma(l[1]),la(b,n,"M",d,f)&&(c[n]=ba(l[2]))}catch(K){}}b.sort(v);return b}function aa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=
a.nextSibling}while(0<e)}else d.push(a);return w(d)}function O(a,b,c){return function(d,e,g,f,k){e=aa(e[0],b,c);return a(d,e,g,f,k)}}function M(a,c,d,e,g,f,l,p,n){function B(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=F.require;if(R===F||F.$$isolateScope)a=U(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=F.require;if(R===F||F.$$isolateScope)b=U(b,{isolateScope:!0});p.push(b)}}function P(a,b,c){var d,e="data",g=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),
g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ia("ctreq",a,ea);}else L(a)&&(d=[],q(a,function(a){d.push(P(a,b,c))}));return d}function K(a,e,g,f,n){function B(a,b){var c;2>arguments.length&&(b=a,a=r);Ga&&(c=O);return n(a,b,c)}var y,da,$,u,aa,J,O={},Z;y=c===g?d:Pc(d,new Eb(w(g),d.$attr));da=y.$$element;if(R){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=w(g);J=e.$new(!0);M&&M===R.$$originalDirective?f.data("$isolateScope",J):f.data("$isolateScopeNoTemplate",J);W(f,
"ng-isolate-scope");q(R.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,p;J.$$isolateBindings[c]=d+g;switch(d){case "@":y.$observe(g,function(a){J[c]=a});y.$$observers[g].$$scope=e;y[g]&&(J[c]=b(y[g])(e));break;case "=":if(f&&!y[g])break;m=s(y[g]);p=m.assign||function(){l=J[c]=m(e);throw ia("nonassign",y[g],R.name);};l=J[c]=m(e);J.$watch(function(){var a=m(e);a!==J[c]&&(a!==l?J[c]=a:p(e,a=J[c]));return l=a});break;case "&":m=s(y[g]);J[c]=function(a){return m(e,a)};break;
default:throw ia("iscp",R.name,c,a);}})}Z=n&&B;Q&&q(Q,function(a){var b={$scope:a===R||a.$$isolateScope?J:e,$element:da,$attrs:y,$transclude:Z},c;aa=a.controller;"@"==aa&&(aa=y[a.name]);c=C(aa,b);O[a.name]=c;Ga||da.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for($=l.length;f<$;f++)try{u=l[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,da,O),Z)}catch(t){m(t,ha(da))}f=e;R&&(R.template||null===R.templateUrl)&&(f=J);a&&a(f,g.childNodes,r,n);for(f=p.length-1;0<=
f;f--)try{u=p[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,da,O),Z)}catch(v){m(v,ha(da))}}n=n||{};var $=-Number.MAX_VALUE,u,Q=n.controllerDirectives,R=n.newIsolateScopeDirective,M=n.templateDirective;n=n.nonTlbTranscludeDirective;for(var la=!1,Ga=!1,v=d.$$element=w(c),F,ea,t,x=e,G,I=0,E=a.length;I<E;I++){F=a[I];var wa=F.$$start,gb=F.$$end;wa&&(v=aa(c,wa,gb));t=r;if($>F.priority)break;if(t=F.scope)u=u||F,F.templateUrl||(H("new/isolated scope",R,F,v),V(t)&&(R=F));ea=F.name;!F.templateUrl&&F.controller&&
(t=F.controller,Q=Q||{},H("'"+ea+"' controller",Q[ea],F,v),Q[ea]=F);if(t=F.transclude)la=!0,F.$$tlb||(H("transclusion",n,F,v),n=F),"element"==t?(Ga=!0,$=F.priority,t=aa(c,wa,gb),v=d.$$element=w(N.createComment(" "+ea+": "+d[ea]+" ")),c=v[0],S(g,w(ta.call(t,0)),c),x=y(t,e,$,f&&f.name,{nonTlbTranscludeDirective:n})):(t=w(zb(c)).contents(),v.html(""),x=y(t,e));if(F.template)if(H("template",M,F,v),M=F,t=A(F.template)?F.template(v,d):F.template,t=hc(t),F.replace){f=F;t=w("<div>"+ba(t)+"</div>").contents();
c=t[0];if(1!=t.length||1!==c.nodeType)throw ia("tplrt",ea,"");S(g,v,c);E={$attr:{}};t=Z(c,[],E);var X=a.splice(I+1,a.length-(I+1));R&&T(t);a=a.concat(t).concat(X);fc(d,E);E=a.length}else v.html(t);if(F.templateUrl)H("template",M,F,v),M=F,F.replace&&(f=F),K=z(a.splice(I,a.length-I),v,d,g,x,l,p,{controllerDirectives:Q,newIsolateScopeDirective:R,templateDirective:M,nonTlbTranscludeDirective:n}),E=a.length;else if(F.compile)try{G=F.compile(v,d,x),A(G)?B(null,G,wa,gb):G&&B(G.pre,G.post,wa,gb)}catch(Y){m(Y,
ha(v))}F.terminal&&(K.terminal=!0,$=Math.max($,F.priority))}K.scope=u&&!0===u.scope;K.transclude=la&&x;return K}function T(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function la(b,e,g,f,k,p,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var s;e=a.get(e+d);for(var C=0,B=e.length;C<B;C++)try{s=e[C],(f===r||f>s.priority)&&-1!=s.restrict.indexOf(g)&&(p&&(s=Rb(s,{$$start:p,$$end:n})),b.push(s),k=s)}catch(y){m(y)}}return k}function fc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;
q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(W(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function z(a,b,c,d,e,g,f,l){var k=[],m,s,C=b[0],B=a.shift(),y=x({},B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),P=A(B.templateUrl)?B.templateUrl(b,
c):B.templateUrl;b.html("");n.get(u.getTrustedResourceUrl(P),{cache:p}).success(function(p){var n,K;p=hc(p);if(B.replace){p=w("<div>"+ba(p)+"</div>").contents();n=p[0];if(1!=p.length||1!==n.nodeType)throw ia("tplrt",B.name,P);p={$attr:{}};S(d,b,n);var W=Z(n,[],p);V(B.scope)&&T(W);a=W.concat(a);fc(c,p)}else n=C,b.html(p);a.unshift(y);m=M(a,n,c,e,b,B,g,f,l);q(d,function(a,c){a==n&&(d[c]=b[0])});for(s=R(b[0].childNodes,e);k.length;){p=k.shift();K=k.shift();var u=k.shift(),Q=k.shift(),W=b[0];K!==C&&(W=
zb(n),S(u,w(K),W));K=m.transclude?$(p,m.transclude):Q;m(s,p,W,d,K)}k=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(s,b,c,d,e)}}function v(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function H(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:ca(function(a,b){var c=b.parent(),e=c.data("$binding")||
[];e.push(d);W(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function G(a,b){if("srcdoc"==b)return u.HTML;var c=Fa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function I(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Fa(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ia("nodomevents");if(g=b(l[e],
!0,G(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function S(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=N.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)g=b[d],
w(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function U(a,b){return x(function(){return a.apply(null,arguments)},a,b)}var Eb=function(a,b){this.$$element=a;this.$attr=b||{}};Eb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&P.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(ic(b,a));this.$addClass(ic(a,b))},$set:function(a,b,c,d){var e=cc(this.$$element[0],a);e&&(this.$$element.prop(a,
b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));e=Fa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=Q(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ea=b.startSymbol(),Ga=
b.endSymbol(),hc="{{"==ea||"}}"==Ga?Aa:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,Ga)},wa=/^ngAttr[A-Z]/;return y}]}function ma(b){return Pa(b.replace(gd,""))}function ic(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function hd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){va(a,"controller");V(a)?x(b,a):b[a]=d};this.$get=["$injector","$window",function(c,
d){return function(e,g){var f,h,l;D(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:ub(g.$scope,h,!0)||ub(d,h,!0),Oa(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw G("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function id(){this.$get=["$window",function(b){return w(b.document)}]}function jd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function jc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=
b.indexOf(":");c=t(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function kc(b){var a=V(b)?b:r;return function(c){a||(a=jc(b));return c?a[t(c)]||null:a}}function lc(b,a,c){if(A(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function kd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],
transformRequest:[function(a){return V(a)&&"[object File]"!==Za.apply(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function s(a){function c(a){var b=x({},a,{data:lc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){A(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=x({},a.headers),g,h,c=x({},c.common,c[t(a.method)]);b(c);b(d);a:for(g in c){a=t(g);for(h in d)if(t(h)===a)continue a;d[g]=c[g]}return d}(a);x(d,a);d.headers=g;d.method=Ha(d.method);(a=Fb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=
[function(a){g=a.headers;var b=lc(a.data,kc(g),a.transformRequest);H(a.data)&&q(g,function(a,b){"content-type"===t(b)&&delete g[b]});H(a.withCredentials)&&!H(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,g).then(c,c)},r],f=n.when(d);for(q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),f=f.then(a,k)}f.success=function(a){f.then(function(b){a(b.data,
b.status,b.headers,d)});return f};f.error=function(a){f.then(null,function(b){a(b.data,b.status,b.headers,d)});return f};return f}function C(b,c,g){function f(a,b,c){q&&(200<=a&&300>a?q.put(r,[a,b,jc(c)]):q.remove(r));l(b,a,c);d.$$phase||d.$apply()}function l(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:kc(d),config:b})}function k(){var a=ab(s.pendingRequests,b);-1!==a&&s.pendingRequests.splice(a,1)}var p=n.defer(),C=p.promise,q,u,r=B(b.url,b.params);s.pendingRequests.push(b);
C.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(q=V(b.cache)?b.cache:V(e.cache)?e.cache:K);if(q)if(u=q.get(r),z(u)){if(u.then)return u.then(k,k),u;L(u)?l(u[1],u[0],ga(u[2])):l(u,200,{})}else q.put(r,C);H(u)&&a(b.method,r,c,f,g,b.timeout,b.withCredentials,b.responseType);return C}function B(a,b){if(!b)return a;var c=[];Mc(b,function(a,b){null===a||H(a)||(L(a)||(a=[a]),q(a,function(a){V(a)&&(a=oa(a));c.push(ua(b)+"="+ua(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var K=
c("$http"),u=[];q(g,function(a){u.unshift(D(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=D(a)?p.get(a):p.invoke(a);u.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});s.pendingRequests=[];(function(a){q(arguments,function(a){s[a]=function(b,c){return s(x(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){s[a]=function(b,c,d){return s(x(d||{},{method:a,url:b,data:c}))}})})("post","put");s.defaults=
e;return s}]}function ld(){this.$get=["$browser","$window","$document",function(b,a,c){return md(b,nd,b.defer,a.angular.callbacks,c[0])}]}function md(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;E&&8>=E?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,
l,k,m,n,p,s,C){function B(){u=f;r&&r();y&&y.abort()}function K(a,d,e,g){var f=xa(l).protocol;W&&c.cancel(W);r=y=null;d="file"==f&&0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(v)}var u;b.$$incOutstandingRequestCount();l=l||b.url();if("jsonp"==t(e)){var P="_"+(d.counter++).toString(36);d[P]=function(a){d[P].data=a};var r=g(l.replace("JSON_CALLBACK","angular.callbacks."+P),function(){d[P].data?K(m,200,d[P].data):K(m,u||-2);delete d[P]})}else{var y=new a;y.open(e,l,!0);q(n,function(a,
b){z(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(4==y.readyState){var a=null,b=null;u!==f&&(a=y.getAllResponseHeaders(),b=y.responseType?y.response:y.responseText);K(m,u||y.status,b,a)}};s&&(y.withCredentials=!0);C&&(y.responseType=C);y.send(k||null)}if(0<p)var W=c(B,p);else p&&p.then&&p.then(B)}}function od(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,
d,e){function g(g,k,m){for(var n,p,s=0,C=[],B=g.length,K=!1,u=[];s<B;)-1!=(n=g.indexOf(b,s))&&-1!=(p=g.indexOf(a,n+f))?(s!=n&&C.push(g.substring(s,n)),C.push(s=c(K=g.substring(n+f,p))),s.exp=K,s=p+h,K=!0):(s!=B&&C.push(g.substring(s)),s=B);(B=C.length)||(C.push(""),B=1);if(m&&1<C.length)throw mc("noconcat",g);if(!k||K)return u.length=B,s=function(a){try{for(var b=0,c=B,f;b<c;b++)"function"==typeof(f=C[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||H(f)?f="":"string"!=typeof f&&(f=oa(f))),
u[b]=f;return u.join("")}catch(h){a=mc("interr",g,h.toString()),d(a)}},s.exp=g,s.parts=C,s}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function pd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,s=0,C=z(l)&&!l;h=z(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(s++);0<h&&s>=h&&(n.resolve(s),m(p.$$intervalId),delete e[p.$$intervalId]);
C||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function qd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",
gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",
mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function nc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function oc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=S(b.port)||rd[b.protocol]||null}function pc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Vb(b.search);a.$$hash=decodeURIComponent(b.hash);
a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Va(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.substr(0,Va(b).lastIndexOf("/")+1)}function qc(b,a){this.$$html5=!0;a=a||"";var c=Gb(b);oc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!D(e))throw Hb("ipthprfx",a,c);pc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?
"#"+sb(this.$$hash):"";this.$$url=nc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==r)return d=e,(e=na(a,e))!==r?c+(na("/",e)||e):b+d;if((e=na(c,d))!==r)return c+e;if(c==d+"/")return c}}function Ib(b,a){var c=Gb(b);oc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!D(e))throw Hb("ihshprfx",d,a);pc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,
""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=nc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Va(b)==Va(a))return a}}function rc(b,a){this.$$html5=!0;Ib.apply(this,arguments);var c=Gb(b);this.$$rewrite=function(d){var e;if(b==Va(d))return d;if(e=na(c,d))return b+a+e;if(c===d+"/")return c}}function hb(b){return function(){return this[b]}}
function sc(b,a){return function(c){if(H(c))return this[b];this[b]=a(c);this.$$compose();return this}}function sd(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?qc:rc):(l=Va(k),
e=Ib);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=w(a.target);"a"!==t(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href"),f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),Y.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$broadcast("$locationChangeStart",
a,h.absUrl()).defaultPrevented?d.url(h.absUrl()):(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);f(b)}),c.$$phase||c.$digest()))});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function td(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;return e.apply?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function pa(b,
a){if("constructor"===b)throw ya("isecfld",a);return b}function Wa(b,a){if(b){if(b.constructor===b)throw ya("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw ya("isecdom",a);}return b}function ib(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=pa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v=
{}),b=b.$$v)}g=pa(a.shift(),d);return b[g]=c}function tc(b,a,c,d,e,g,f){pa(b,g);pa(a,g);pa(c,g);pa(d,g);pa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null===k||k===r)return k;(k=k[b])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a||null===k||k===r)return k;(k=k[a])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c||null===k||k===r)return k;(k=k[c])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,
m.then(function(a){m.$$v=a})),k=k.$$v);if(!d||null===k||k===r)return k;(k=k[d])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e||null===k||k===r)return k;(k=k[e])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null===k||k===r)return k;k=k[b];if(!a||null===k||k===r)return k;k=k[a];if(!c||null===k||k===r)return k;k=k[c];if(!d||null===k||k===r)return k;k=k[d];return e&&null!==
k&&k!==r?k=k[e]:k}}function uc(b,a,c){if(Jb.hasOwnProperty(b))return Jb[b];var d=b.split("."),e=d.length,g;if(a.csp)g=6>e?tc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=tc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=r,b=h;while(f<e);return h};else{var f="var l, fn, p;\n";q(d,function(b,d){pa(b,c);f+="if(s === null || s === undefined) return s;\nl=s;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,
"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=function(){return f};g=function(a,b){return h(a,b,qa)}}"hasOwnProperty"!==b&&(Jb[b]=g);return g}function ud(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return z(b)?(a.logPromiseWarnings=
b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!vc.hasOwnProperty(b)&&(vc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Kb(a);e=(new Xa(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return v}}}]}
function vd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return wd(function(a){b.$evalAsync(a)},a)}]}function wd(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var h=[],l,k;return k={resolve:function(a){if(h){var c=h;h=r;l=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],l.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(f(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},
promise:{then:function(b,f,g){var k=e(),C=function(d){try{k.resolve((A(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},B=function(b){try{k.resolve((A(f)?f:d)(b))}catch(c){k.reject(c),a(c)}},K=function(b){try{k.notify((A(g)?g:c)(b))}catch(d){a(d)}};h?h.push([C,B,K]):l.then(C,B,K);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&
A(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&A(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(c){return{then:function(f,g){var m=e();b(function(){try{m.resolve((A(g)?g:d)(c))}catch(b){m.reject(b),a(b)}});return m.promise}}};return{defer:e,reject:f,when:function(h,l,k,m){var n=e(),p,s=function(b){try{return(A(l)?
l:c)(b)}catch(d){return a(d),f(d)}},C=function(b){try{return(A(k)?k:d)(b)}catch(c){return a(c),f(c)}},B=function(b){try{return(A(m)?m:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){p||(p=!0,n.resolve(g(a).then(s,C,B)))},function(a){p||(p=!0,n.resolve(C(a)))},function(a){p||n.notify(B(a))})});return n.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});
0===c&&b.resolve(d);return b.promise}}}function xd(){var b=10,a=G("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=Ya();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings=
{}}function l(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function k(a,b){var c=g(a);Oa(c,b);return c}function m(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Ya());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=
this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:m,get:e,exp:a,eq:!!d};c=null;if(!A(b)){var h=k(b||v,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);La(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){La(f,g)}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),k=[],l={},m=0;return this.$watch(function(){e=
h(c);var a,b;if(V(e))if(pb(e))for(d!==k&&(d=k,m=d.length=0,f++),a=e.length,m!==a&&(f++,d.length=m=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==l&&(d=l={},m=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(m++,d[b]=e[b],f++));if(m>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(m--,delete d[b])}else d!==e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,q=this.$$postDigestQueue,r,t,y=
b,v,w=[],z,Z,aa;l("$digest");c=null;do{t=!1;for(v=this;k.length;){try{aa=k.shift(),aa.scope.$eval(aa.expression)}catch(O){n.$$phase=null,e(O)}c=null}a:do{if(h=v.$$watchers)for(r=h.length;r--;)try{if(d=h[r])if((f=d.get(v))!==(g=d.last)&&!(d.eq?Ba(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))t=!0,c=d,d.last=d.eq?ga(f):f,d.fn(f,g===m?f:g,v),5>y&&(z=4-y,w[z]||(w[z]=[]),Z=A(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,Z+="; newVal: "+oa(f)+"; oldVal: "+oa(g),w[z].push(Z));else if(d===
c){t=!1;break a}}catch(M){n.$$phase=null,e(M)}if(!(h=v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(h=v.$$nextSibling);)v=v.$parent}while(v=h);if(t&&!y--)throw n.$$phase=null,a("infdig",b,oa(w));}while(t||k.length);for(n.$$phase=null;q.length;)try{q.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),
this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||f.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[ab(c,b)]=null}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ta.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=
f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ta.call(arguments,1)),h,k;do{c=d;f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==
this&&!(d=c.$$nextSibling);)c=c.$parent}while(c=d);return f}};var n=new h;return n}]}function yd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!E||8<=E)if(g=xa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function zd(b){if("self"===b)return b;if(D(b)){if(-1<
b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if($a(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function wc(b){var a=[];z(b)&&q(b,function(b){a.push(zd(b))});return a}function Ad(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=wc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=wc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[fa.HTML]=d(g);f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);
return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=xa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Fb(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<
n;m++)if("self"===a[m]?Fb(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ra("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Bd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=
d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=t(b);e[Pa("parse_as_"+c)]=function(b){return g(a,b)};e[Pa("get_trusted_"+c)]=function(b){return f(a,b)};e[Pa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Cd(){this.$get=["$window","$document",function(b,
a){var c={},d=S((/android (\d+)/.exec(t((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=D(g.body.style.webkitTransition),n=D(g.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==E)return!1;if(H(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:h,transitions:m,animations:n,msie:E,msieDocumentMode:f}}]}function Dd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=z(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||
b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;E&&(U.setAttribute("href",c),c=U.href);U.setAttribute("href",c);return{href:U.href,protocol:U.protocol?U.protocol.replace(/:$/,""):"",host:U.host,search:U.search?U.search.replace(/^\?/,""):"",hash:U.hash?U.hash.replace(/^#/,""):"",hostname:U.hostname,port:U.port,
pathname:"/"===U.pathname.charAt(0)?U.pathname:"/"+U.pathname}}function Fb(b){b=D(b)?xa(b):b;return b.protocol===xc.protocol&&b.host===xc.host}function Ed(){this.$get=ca(Y)}function yc(b){function a(d,e){if(V(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",zc);a("date",Ac);a("filter",Fd);a("json",Gd);a("limitTo",Hd);a("lowercase",Id);a("number",Bc);a("orderBy",
Cc);a("uppercase",Jd)}function Fd(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return bb.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)"$"==f?function(){if(a[f]){var b=f;e.push(function(c){return g(c,a[b])})}}():function(){if("undefined"!=typeof a[f]){var b=f;e.push(function(c){return g(ub(c,b),a[b])})}}();break;case "function":e.push(a);break;default:return b}for(var d=[],h=
0;h<b.length;h++){var l=b[h];e.check(l)&&d.push(l)}return d}}function zc(b){var a=b.NUMBER_FORMATS;return function(b,d){H(d)&&(d=a.CURRENCY_SYM);return Dc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Bc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Dc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Dc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);
m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Ec)[1]||"").length;H(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Ec);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:
a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Lb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Lb(e,a,d)}}function jb(b,a){return function(c,d){var e=c["get"+b](),g=Ha(a?"SHORT"+b:b);return d[g][e]}}function Ac(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=S(b[9]+b[10]),f=S(b[9]+b[11]));h.call(a,S(b[1]),S(b[2])-1,S(b[3]));g=S(b[4]||0)-g;f=S(b[5]||0)-f;h=S(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=Kd.test(c)?S(c):a(c));qb(c)&&(c=new Date(c));if(!Ka(c))return c;for(;e;)(l=Ld.exec(e))?
(f=f.concat(ta.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Md[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Gd(){return function(b){return oa(b,!0)}}function Hd(){return function(b,a){if(!L(b)&&!D(b))return b;a=S(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Cc(b){return function(a,
c,d){function e(a,b){return Na(b)?function(b,c){return a(c,b)}:a}if(!L(a)||!c)return a;c=L(c)?c:[c];c=Oc(c,function(a){var c=!1,d=a||Aa;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var g=[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=
c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){A(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function Fc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}var d=this,e=b.parent().controller("form")||mb,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ia);c(!0);d.$addControl=function(a){va(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=
function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});La(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(La(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(n){if(-1!=ab(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ia).addClass(nb);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(nb).addClass(Ia);
d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function ob(b,a,c,d,e,g){var f=!1;a.on("compositionstart",function(){f=!0});a.on("compositionend",function(){f=!1});var h=function(){if(!f){var e=a.val();Na(c.ngTrim||"T")&&(e=ba(e));d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",h);else{var l,k=function(){l||(l=g.defer(function(){h();l=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",
k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var m=c.ngPattern,n=function(a,b){if(d.$isEmpty(b)||a.test(b))return d.$setValidity("pattern",!0),b;d.$setValidity("pattern",!1);return r};m&&((e=m.match(/^\/(.*)\/([gim]*)$/))?(m=RegExp(e[1],e[2]),e=function(a){return n(m,a)}):e=function(c){var d=b.$eval(m);if(!d||!d.test)throw G("ngPattern")("noregexp",m,d,ha(a));return n(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=S(c.ngMinlength);
e=function(a){if(!d.$isEmpty(a)&&a.length<p)return d.$setValidity("minlength",!1),r;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var s=S(c.ngMaxlength);e=function(a){if(!d.$isEmpty(a)&&a.length>s)return d.$setValidity("maxlength",!1),r;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}}function Mb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===a||c.$index%2===
a){var d=f(b||"");h?Ba(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=ga(b)}function f(a){if(L(a))return a.join(" ");if(V(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var t=function(b){return D(b)?b.toLowerCase():b},Ha=function(b){return D(b)?b.toUpperCase():b},
E,w,Ca,ta=[].slice,Nd=[].push,Za=Object.prototype.toString,Ma=G("ng"),bb=Y.angular||(Y.angular={}),Ua,Fa,ja=["0","0","0"];E=S((/msie (\d+)/.exec(t(navigator.userAgent))||[])[1]);isNaN(E)&&(E=S((/trident\/.*; rv:(\d+)/.exec(t(navigator.userAgent))||[])[1]));v.$inject=[];Aa.$inject=[];var ba=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Fa=9>E?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=
b.scopeName?Ha(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Sc=/[A-Z]/g,Od={full:"1.2.4",major:1,minor:2,dot:4,codeName:"wormhole-baster"},Ra=I.cache={},db=I.expando="ng-"+(new Date).getTime(),Wc=1,Gc=Y.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ab=Y.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Uc=/([\:\-\_]+(.))/g,
Vc=/^moz([A-Z])/,xb=G("jqLite"),Ea=I.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===N.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),I(Y).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Nd,sort:[].sort,splice:[].splice},fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){fb[t(b)]=b});var dc=
{};q("input select option textarea button form details".split(" "),function(b){dc[Ha(b)]=!0});q({data:ac,inheritedData:eb,scope:function(b){return w(b).data("$scope")||eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:bc,injector:function(b){return eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=Pa(a);if(z(c))b.style[a]=c;else{var d;8>=E&&(d=
b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=E&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=t(a);if(fb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:r;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(H(d))return e?
b[e]:"";b[e]=d}var a=[];9>E?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(H(a)){if("SELECT"===Fa(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(H(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Qa(d[c]);b.innerHTML=a}},function(b,a){I.prototype[a]=function(a,d){var e,g;if((2==b.length&&b!==Bb&&b!==bc?a:d)===r){if(V(a)){for(e=
0;e<this.length;e++)if(b===ac)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===r?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:Zb,dealoc:Qa,on:function a(c,d,e,g){if(z(g))throw xb("onargs");var f=ka(c,"events"),h=ka(c,"handle");f||ka(c,"events",f={});h||ka(c,"handle",h=Xc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==
d){var m=N.body.contains||N.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Gc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:$b,
replaceWith:function(a,c){var d,e=a.parentNode;Qa(a);q(new I(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new I(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new I(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=
w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Qa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new I(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){H(d)&&(d=!Bb(a,c));(d?Db:Cb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=
a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:zb,triggerHandler:function(a,c,d){c=(ka(a,"events")||{})[c];d=d||[];var e=[{preventDefault:v,stopPropagation:v}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){I.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)H(f)?(f=a(this[h],c,e,g),z(f)&&(f=w(f))):yb(f,a(this[h],c,e,g));return z(f)?f:this};I.prototype.bind=I.prototype.on;I.prototype.unbind=I.prototype.off});Sa.prototype=
{put:function(a,c){this[Da(a)]=c},get:function(a){return this[Da(a)]},remove:function(a){var c=this[a=Da(a)];delete this[a];return c}};var Zc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,$c=/,/,ad=/^\s*(_?)(\S+?)\1\s*$/,Yc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=G("$injector"),Pd=G("$animate"),Qd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Pd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.$get=["$timeout",function(a){return{enter:function(d,
e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Db(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});g&&a(g,0,!1)},enabled:v}}]}],ia=G("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];var gd=/^(x[\:\-_]|data[\:\-_])/i,nd=Y.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw G("$httpBackend")("noxhr");
},mc=G("$interpolate"),Rd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,rd={http:80,https:443,ftp:21},Hb=G("$location");rc.prototype=Ib.prototype=qc.prototype={$$html5:!1,$$replace:!1,absUrl:hb("$$absUrl"),url:function(a,c){if(H(a))return this.$$url;var d=Rd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:hb("$$protocol"),host:hb("$$host"),port:hb("$$port"),path:sc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=Vb(a);else if(V(a))this.$$search=a;else throw Hb("isrcharg");break;default:H(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:sc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=G("$parse"),vc={},qa,Ja={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?
z(e)?d+e:d:z(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},
">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Sd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Kb=function(a){this.options=a};Kb.prototype={constructor:Kb,lex:function(a){this.text=a;
this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&
this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ja[this.ch],f=Ja[d],h=Ja[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",
this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ya("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=t(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,
e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ja.hasOwnProperty(c))d.fn=Ja[c],d.json=Ja[c];else{var l=uc(c,this.options,this.text);d.fn=x(function(a,c){return l(a,c)},{assign:function(d,e){return ib(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),
e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Sd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Xa=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Xa.ZERO=function(){return 0};
Xa.prototype={constructor:Xa,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),
this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,
this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return x(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return x(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return x(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=
0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Xa.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=uc(d,this.options,this.text);return x(function(c,d,h){return e(h||
a(c,d),d)},{assign:function(e,f,h){return ib(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return x(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return r;(f=Wa(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=r,l.then(function(a){l.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Wa(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||v;Wa(l,e.text);Wa(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Wa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return x(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},
{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return x(function(c,d){for(var e={},l=0;l<a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Jb={},ra=G("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},U=N.createElement("a"),
xc=xa(Y.location.href,!0);yc.$inject=["$provide"];zc.$inject=["$locale"];Bc.$inject=["$locale"];var Ec=".",Md={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:jb("Month"),MMM:jb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:jb("Day"),EEE:jb("Day",!0),a:function(a,c){return 12>a.getHours()?
c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))}},Ld=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Kd=/^\-?\d+$/;Ac.$inject=["$locale"];var Id=ca(t),Jd=ca(Ha);Cc.$inject=["$parse"];var Td=ca({restrict:"E",compile:function(a,c){8>=E&&(c.href||c.name||c.$set("href",""),a.append(N.createComment("IE fix")));return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()})}}}),
Nb={};q(fb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Nb[d]=function(){return{priority:100,compile:function(){return function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Nb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),E&&e.prop(a,g[a]))})}}}});var mb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Fc.$inject=["$element","$attrs","$scope"];var Hc=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:Fc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Gc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ab(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ib(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ib(a,k,r,k);x(f,mb)})}}}}}]},Ud=Hc(),Vd=Hc(!0),Wd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Xd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Yd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Ic={text:ob,number:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Yd.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);if(!e.$isEmpty(a)&&a<c)return e.$setValidity("min",!1),r;e.$setValidity("min",
!0);return a},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);if(!e.$isEmpty(a)&&a>c)return e.$setValidity("max",!1),r;e.$setValidity("max",!0);return a},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){if(e.$isEmpty(a)||qb(a))return e.$setValidity("number",!0),a;e.$setValidity("number",!1);return r})},url:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Wd.test(a))return e.$setValidity("url",!0),a;e.$setValidity("url",
!1);return r};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Xd.test(a))return e.$setValidity("email",!0),a;e.$setValidity("email",!1);return r};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){H(d.name)&&c.attr("name",Ya());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,
c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;D(g)||(g=!0);D(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:v,button:v,submit:v,reset:v},Jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Ic[t(g.type)]||Ic.text)(d,e,g,f,c,a)}}}],
lb="ng-valid",kb="ng-invalid",Ia="ng-pristine",nb="ng-dirty",Zd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),l=h.assign;if(!l)throw G("ngModel")("nonassign",d.ngModel,ha(e));
this.$render=v;this.$isEmpty=function(a){return H(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||mb,m=0,n=this.$error={};e.addClass(Ia);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&m--,m||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),this.$invalid=!0,this.$valid=!1,m++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(nb).addClass(Ia)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&
(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ia).addClass(nb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,l(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],$d=function(){return{require:["ngModel","^?form"],controller:Zd,link:function(a,
c,d,e){var g=e[0],f=e[1]||mb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},ae=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},
be=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!H(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},ce=/^(true|false|\d+)$/,de=function(){return{priority:100,compile:function(a,c){return ce.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,
c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},ee=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),fe=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ge=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);
d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],he=Mb("",!0),ie=Mb("Odd",0),je=Mb("Even",1),ke=sa({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),le=[function(){return{scope:!0,controller:"@",priority:500}}],Lc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);Lc[c]=["$parse",function(d){return{compile:function(e,
g){var f=d(g[c]);return function(c,d,e){d.on(t(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var me=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,l;c.$watch(e.ngIf,function(g){Na(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=N.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(l&&(l.$destroy(),l=null),h&&(a.leave(vb(h.clone)),h=null))})}}}],ne=["$http","$templateCache",
"$anchorScroll","$compile","$animate","$sce",function(a,c,d,e,g,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",compile:function(h,l){var k=l.ngInclude||l.src,m=l.onload||"",n=l.autoscroll;return function(h,l,q,r,t){var u=0,w,Q,y=function(){w&&(w.$destroy(),w=null);Q&&(g.leave(Q),Q=null)};h.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!z(n)||n&&!h.$eval(n)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=h.$new(),d=t(c,v);y();w=c;Q=d;Q.html(a);
g.enter(Q,null,l,k);e(Q.contents())(w);w.$emit("$includeContentLoaded");h.$eval(m)}}).error(function(){q===u&&y()}),h.$emit("$includeContentRequested")):y()})}}}}],oe=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),pe=sa({terminal:!0,priority:1E3}),qe=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,m=e.$eval(l)||{},n={},p=c.startSymbol(),s=c.endSymbol(),
r=/^when(Minus)?(.+)$/;q(f,function(a,c){r.test(c)&&(m[t(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+s))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],re=["$parse","$animate",function(a,c){var d=G("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
n,p,s,r,v,t,u={$id:Da};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[4])?(n=a(m),p=function(a,c,d){t&&(u[t]=a);u[v]=c;u.$index=d;return n(e,u)}):(s=function(a,c){return Da(c)},r=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);v=m[3]||m[1];t=m[2];var z={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,u={},H,O,M,T,D,x,G=[];if(pb(a))D=a,n=p||s;else{n=p||r;D=[];for(M in a)a.hasOwnProperty(M)&&"$"!=M.charAt(0)&&D.push(M);D.sort()}H=D.length;
h=G.length=D.length;for(f=0;f<h;f++)if(M=a===D?f:D[f],T=a[M],T=n(M,T,f),va(T,"`track by` id"),z.hasOwnProperty(T))x=z[T],delete z[T],u[T]=x,G[f]=x;else{if(u.hasOwnProperty(T))throw q(G,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,T);G[f]={id:T};u[T]=!1}for(M in z)z.hasOwnProperty(M)&&(x=z[M],f=vb(x.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());f=0;for(h=D.length;f<h;f++){M=a===D?f:D[f];T=a[M];x=G[f];G[f-1]&&(m=G[f-1].clone[G[f-1].clone.length-1]);if(x.scope){O=x.scope;
n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);x.clone[0]!=n&&c.move(vb(x.clone),null,w(m));m=x.clone[x.clone.length-1]}else O=e.$new();O[v]=T;t&&(O[t]=M);O.$index=f;O.$first=0===f;O.$last=f===H-1;O.$middle=!(O.$first||O.$last);O.$odd=!(O.$even=0===(f&1));x.scope||l(O,function(a){a[a.length++]=N.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,w(m));m=a;x.scope=O;x.clone=a;u[x.id]=x})}z=u})}}}],se=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Na(c)?"removeClass":
"addClass"](d,"ng-hide")})}}],te=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Na(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ue=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ve=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,l=[];c.$watch(e.ngSwitch||e.on,function(d){for(var m=0,n=l.length;m<n;m++)l[m].$destroy(),
a.leave(h[m]);h=[];l=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();l.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],we=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c){return function(a,e,g,f,h){f.cases["!"+c.ngSwitchWhen]=f.cases["!"+c.ngSwitchWhen]||[];f.cases["!"+c.ngSwitchWhen].push({transclude:h,element:e})}}}),xe=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,
c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),ye=sa({controller:["$element","$transclude",function(a,c){if(!c)throw G("ngTransclude")("orphan",ha(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.html("");c.append(a)})}}),ze=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ae=G("ngOptions"),Be=ca({terminal:!0}),Ce=["$compile","$parse",function(a,
c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){va(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=
function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Da(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=v})}],link:function(e,f,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&u.prop("selected",!0)):H(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);q(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){Ba(e,d.$viewValue)||(e=ga(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
r,t,w;t=g.$modelValue;w=s(e)||[];var B=n?Ob(w):w,H,A,J;A={};r=!1;var E,I;if(v)if(u&&L(t))for(r=new Sa([]),J=0;J<t.length;J++)A[m]=t[J],r.put(u(e,A),t[J]);else r=new Sa(t);for(J=0;H=B.length,J<H;J++){k=J;if(n){k=B[J];if("$"===k.charAt(0))continue;A[n]=k}A[m]=w[k];d=p(e,A)||"";(k=a[d])||(k=a[d]=[],c.push(d));v?d=z(r.remove(u?u(e,A):q(e,A))):(u?(d={},d[m]=t,d=u(e,d)===u(e,A)):d=t===q(e,A),r=r||d);E=l(e,A);E=z(E)?E:"";k.push({id:u?u(e,A):n?B[J]:J,label:E,selected:d})}v||(x||null===t?a[""].unshift({id:"",
label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));A=0;for(B=c.length;A<B;A++){d=c[A];k=a[d];y.length<=A?(t={element:G.clone().attr("label",d),label:k.label},w=[t],y.push(w),f.append(t.element)):(w=y[A],t=w[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;J=0;for(H=k.length;J<H;J++)r=k[J],(d=w[J+1])?(E=d.element,d.label!==r.label&&E.text(d.label=r.label),d.id!==r.id&&E.val(d.id=r.id),E[0].selected!==r.selected&&E.prop("selected",d.selected=r.selected)):(""===r.id&&x?I=
x:(I=D.clone()).val(r.id).attr("selected",r.selected).text(r.label),w.push({element:I,label:r.label,id:r.id,selected:r.selected}),E?E.after(I):t.element.append(I),E=I);for(J++;w.length>J;)w.pop().element.remove()}for(;y.length>A;)y.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Ae("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),s=c(k[7]),u=k[8]?c(k[8]):null,y=[[{element:f,label:""}]];x&&(a(x)(e),x.removeClass("ng-scope"),x.remove());f.html("");f.on("change",
function(){e.$apply(function(){var a,c=s(e)||[],d={},h,k,l,p,t,w,x;if(v)for(k=[],p=0,w=y.length;p<w;p++)for(a=y[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(u)for(x=0;x<c.length&&(d[m]=c[x],u(e,d)!=h);x++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=r;else if(""===h)k=null;else if(u)for(x=0;x<c.length;x++){if(d[m]=c[x],u(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0],
s=l[1],v=h.multiple,t=h.ngOptions,x=!1,u,D=w(N.createElement("option")),G=w(N.createElement("optgroup")),y=D.clone();l=0;for(var A=f.children(),I=A.length;l<I;l++)if(""===A[l].value){u=x=A.eq(l);break}p.init(s,x,y);if(v&&(h.required||h.ngRequired)){var E=function(a){s.$setValidity("required",!h.required||a&&a.length);return a};s.$parsers.push(E);s.$formatters.unshift(E);h.$observe("required",function(){E(s.$viewValue)})}t?n(e,f,s):v?m(e,f,s):k(e,f,s,p)}}}}],De=["$interpolate",function(a){var c={addOption:v,
removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(H(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Ee=ca({restrict:"E",terminal:!0});(Ca=Y.jQuery)?(w=
Ca,x(Ca.fn,{scope:Ea.scope,isolateScope:Ea.isolateScope,controller:Ea.controller,injector:Ea.injector,inheritedData:Ea.inheritedData}),wb("remove",!0,!0,!1),wb("empty",!1,!1,!1),wb("html",!1,!1,!0)):w=I;bb.element=w;(function(a){x(a,{bootstrap:Xb,copy:ga,extend:x,equals:Ba,element:w,forEach:q,injector:Yb,noop:v,bind:rb,toJson:oa,fromJson:Tb,identity:Aa,isUndefined:H,isDefined:z,isString:D,isFunction:A,isObject:V,isNumber:qb,isElement:Nc,isArray:L,version:Od,isDate:Ka,lowercase:t,uppercase:Ha,callbacks:{counter:0},
$$minErr:G,$$csp:Sb});Ua=Tc(Y);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",qd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:yd});a.provider("$compile",gc).directive({a:Td,input:Jc,textarea:Jc,form:Ud,script:ze,select:Ce,style:Ee,option:De,ngBind:ee,ngBindHtml:ge,ngBindTemplate:fe,ngClass:he,ngClassEven:je,ngClassOdd:ie,ngCloak:ke,ngController:le,ngForm:Vd,ngHide:te,ngIf:me,ngInclude:ne,ngInit:oe,ngNonBindable:pe,ngPluralize:qe,ngRepeat:re,ngShow:se,ngStyle:ue,
ngSwitch:ve,ngSwitchWhen:we,ngSwitchDefault:xe,ngOptions:Be,ngTransclude:ye,ngModel:$d,ngList:be,ngChange:ae,required:Kc,ngRequired:Kc,ngValue:de}).directive(Nb).directive(Lc);a.provider({$anchorScroll:bd,$animate:Qd,$browser:dd,$cacheFactory:ed,$controller:hd,$document:id,$exceptionHandler:jd,$filter:yc,$interpolate:od,$interval:pd,$http:kd,$httpBackend:ld,$location:sd,$log:td,$parse:ud,$rootScope:xd,$q:vd,$sce:Bd,$sceDelegate:Ad,$sniffer:Cd,$templateCache:fd,$timeout:Dd,$window:Ed})}])})(bb);w(N).ready(function(){Rc(N,
Xb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{border-spacing:1px 1px;-ms-zoom:1.0001;}.ng-animate-active{border-spacing:0px 0px;-ms-zoom:1;}</style>');
//# sourceMappingURL=angular.min.js.map
;
define("angular", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.angular;
    };
}(this)));

(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define('spin',e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.js.map;
define("underscore", (function (global) {
    return function () {
        var ret, fn;
        return ret || global._;
    };
}(this)));

/**
 * AngularStrap - Twitter Bootstrap directives for AngularJS
 * @version v0.7.5 - 2013-07-21
 * @link http://mgcrea.github.com/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module("$strap.config",[]).value("$strapConfig",{}),angular.module("$strap.filters",["$strap.config"]),angular.module("$strap.directives",["$strap.config"]),angular.module("$strap",["$strap.filters","$strap.directives","$strap.config"]),angular.module("$strap.directives").directive("bsAlert",["$parse","$timeout","$compile",function(t,e,n){return{restrict:"A",link:function(a,i,o){var r=t(o.bsAlert),s=(r.assign,r(a)),l=function(t){e(function(){i.alert("close")},1*t)};o.bsAlert?a.$watch(o.bsAlert,function(t,e){s=t,i.html((t.title?"<strong>"+t.title+"</strong>&nbsp;":"")+t.content||""),t.closed&&i.hide(),n(i.contents())(a),(t.type||e.type)&&(e.type&&i.removeClass("alert-"+e.type),t.type&&i.addClass("alert-"+t.type)),angular.isDefined(t.closeAfter)?l(t.closeAfter):o.closeAfter&&l(o.closeAfter),(angular.isUndefined(o.closeButton)||"0"!==o.closeButton&&"false"!==o.closeButton)&&i.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>')},!0):((angular.isUndefined(o.closeButton)||"0"!==o.closeButton&&"false"!==o.closeButton)&&i.prepend('<button type="button" class="close" data-dismiss="alert">&times;</button>'),o.closeAfter&&l(o.closeAfter)),i.addClass("alert").alert(),i.hasClass("fade")&&(i.removeClass("in"),setTimeout(function(){i.addClass("in")}));var u=o.ngRepeat&&o.ngRepeat.split(" in ").pop();i.on("close",function(t){var e;u?(t.preventDefault(),i.removeClass("in"),e=function(){i.trigger("closed"),a.$parent&&a.$parent.$apply(function(){for(var t=u.split("."),e=a.$parent,n=0;t.length>n;++n)e&&(e=e[t[n]]);e&&e.splice(a.$index,1)})},$.support.transition&&i.hasClass("fade")?i.on($.support.transition.end,e):e()):s&&(t.preventDefault(),i.removeClass("in"),e=function(){i.trigger("closed"),a.$apply(function(){s.closed=!0})},$.support.transition&&i.hasClass("fade")?i.on($.support.transition.end,e):e())})}}}]),angular.module("$strap.directives").directive("bsButton",["$parse","$timeout",function(t){return{restrict:"A",require:"?ngModel",link:function(e,n,a,i){if(i){n.parent('[data-toggle="buttons-checkbox"], [data-toggle="buttons-radio"]').length||n.attr("data-toggle","button");var o=!!e.$eval(a.ngModel);o&&n.addClass("active"),e.$watch(a.ngModel,function(t,e){var a=!!t,i=!!e;a!==i?$.fn.button.Constructor.prototype.toggle.call(r):a&&!o&&n.addClass("active")})}n.hasClass("btn")||n.on("click.button.data-api",function(){n.button("toggle")}),n.button();var r=n.data("button");r.toggle=function(){if(!i)return $.fn.button.Constructor.prototype.toggle.call(this);var a=n.parent('[data-toggle="buttons-radio"]');a.length?(n.siblings("[ng-model]").each(function(n,a){t($(a).attr("ng-model")).assign(e,!1)}),e.$digest(),i.$modelValue||(i.$setViewValue(!i.$modelValue),e.$digest())):e.$apply(function(){i.$setViewValue(!i.$modelValue)})}}}}]).directive("bsButtonsCheckbox",["$parse",function(){return{restrict:"A",require:"?ngModel",compile:function(t){t.attr("data-toggle","buttons-checkbox").find("a, button").each(function(t,e){$(e).attr("bs-button","")})}}}]).directive("bsButtonsRadio",["$timeout",function(t){return{restrict:"A",require:"?ngModel",compile:function(e,n){return e.attr("data-toggle","buttons-radio"),n.ngModel||e.find("a, button").each(function(t,e){$(e).attr("bs-button","")}),function(e,n,a,i){i&&(t(function(){n.find("[value]").button().filter('[value="'+i.$viewValue+'"]').addClass("active")}),n.on("click.button.data-api",function(t){e.$apply(function(){i.$setViewValue($(t.target).closest("button").attr("value"))})}),e.$watch(a.ngModel,function(t,i){if(t!==i){var o=n.find('[value="'+e.$eval(a.ngModel)+'"]');o.length&&o.button("toggle")}}))}}}}]),angular.module("$strap.directives").directive("bsButtonSelect",["$parse","$timeout",function(t){return{restrict:"A",require:"?ngModel",link:function(e,n,a,i){var o=t(a.bsButtonSelect);o.assign,i&&(n.text(e.$eval(a.ngModel)),e.$watch(a.ngModel,function(t){n.text(t)}));var r,s,l,u;n.bind("click",function(){r=o(e),s=i?e.$eval(a.ngModel):n.text(),l=r.indexOf(s),u=l>r.length-2?r[0]:r[l+1],e.$apply(function(){n.text(u),i&&i.$setViewValue(u)})})}}}]),angular.module("$strap.directives").directive("bsDatepicker",["$timeout","$strapConfig",function(t,e){var n=/(iP(a|o)d|iPhone)/g.test(navigator.userAgent),a=function a(t){return t=t||"en",{"/":"[\\/]","-":"[-]",".":"[.]"," ":"[\\s]",dd:"(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))",d:"(?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1}))",mm:"(?:[0]?[1-9]|[1][012])",m:"(?:[0]?[1-9]|[1][012])",DD:"(?:"+$.fn.datepicker.dates[t].days.join("|")+")",D:"(?:"+$.fn.datepicker.dates[t].daysShort.join("|")+")",MM:"(?:"+$.fn.datepicker.dates[t].months.join("|")+")",M:"(?:"+$.fn.datepicker.dates[t].monthsShort.join("|")+")",yyyy:"(?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]])",yy:"(?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]])"}},i=function i(t,e){var n,i=t,o=a(e);return n=0,angular.forEach(o,function(t,e){i=i.split(e).join("${"+n+"}"),n++}),n=0,angular.forEach(o,function(t){i=i.split("${"+n+"}").join(t),n++}),RegExp("^"+i+"$",["i"])};return{restrict:"A",require:"?ngModel",link:function(t,a,o,r){var s=angular.extend({autoclose:!0},e.datepicker||{}),l=o.dateType||s.type||"date";angular.forEach(["format","weekStart","calendarWeeks","startDate","endDate","daysOfWeekDisabled","autoclose","startView","minViewMode","todayBtn","todayHighlight","keyboardNavigation","language","forceParse"],function(t){angular.isDefined(o[t])&&(s[t]=o[t])});var u=s.language||"en",c=o.dateFormat||s.format||$.fn.datepicker.dates[u]&&$.fn.datepicker.dates[u].format||"mm/dd/yyyy",d=n?"yyyy-mm-dd":c,p=i(d,u);r&&(r.$formatters.unshift(function(t){return"date"===l&&angular.isString(t)&&t?$.fn.datepicker.DPGlobal.parseDate(t,$.fn.datepicker.DPGlobal.parseFormat(c),u):t}),r.$parsers.unshift(function(t){return t?"date"===l&&angular.isDate(t)?(r.$setValidity("date",!0),t):angular.isString(t)&&p.test(t)?(r.$setValidity("date",!0),n?new Date(t):"string"===l?t:$.fn.datepicker.DPGlobal.parseDate(t,$.fn.datepicker.DPGlobal.parseFormat(d),u)):(r.$setValidity("date",!1),void 0):(r.$setValidity("date",!0),null)}),r.$render=function(){if(n){var t=r.$viewValue?$.fn.datepicker.DPGlobal.formatDate(r.$viewValue,$.fn.datepicker.DPGlobal.parseFormat(d),u):"";return a.val(t),t}return r.$viewValue||a.val(""),a.datepicker("update",r.$viewValue)}),n?a.prop("type","date").css("-webkit-appearance","textfield"):(r&&a.on("changeDate",function(e){t.$apply(function(){r.$setViewValue("string"===l?a.val():e.date)})}),a.datepicker(angular.extend(s,{format:d,language:u})),t.$on("$destroy",function(){var t=a.data("datepicker");t&&(t.picker.remove(),a.data("datepicker",null))}),o.$observe("startDate",function(t){a.datepicker("setStartDate",t)}),o.$observe("endDate",function(t){a.datepicker("setEndDate",t)}));var f=a.siblings('[data-toggle="datepicker"]');f.length&&f.on("click",function(){a.prop("disabled")||a.trigger("focus")})}}}]),angular.module("$strap.directives").directive("bsDropdown",["$parse","$compile","$timeout",function(t,e,n){var a=function(t,e){return e||(e=['<ul class="dropdown-menu" role="menu" aria-labelledby="drop1">',"</ul>"]),angular.forEach(t,function(t,n){if(t.divider)return e.splice(n+1,0,'<li class="divider"></li>');var i="<li"+(t.submenu&&t.submenu.length?' class="dropdown-submenu"':"")+">"+'<a tabindex="-1" ng-href="'+(t.href||"")+'"'+(t.click?'" ng-click="'+t.click+'"':"")+(t.target?'" target="'+t.target+'"':"")+(t.method?'" data-method="'+t.method+'"':"")+">"+(t.text||"")+"</a>";t.submenu&&t.submenu.length&&(i+=a(t.submenu).join("\n")),i+="</li>",e.splice(n+1,0,i)}),e};return{restrict:"EA",scope:!0,link:function(i,o,r){var s=t(r.bsDropdown),l=s(i);n(function(){!angular.isArray(l);var t=angular.element(a(l).join(""));t.insertAfter(o),e(o.next("ul.dropdown-menu"))(i)}),o.addClass("dropdown-toggle").attr("data-toggle","dropdown")}}}]),angular.module("$strap.directives").factory("$modal2",["$rootScope","$compile","$http","$timeout","$q","$templateCache","$strapConfig",function(t,e,n,a,i,o,r){var s=function s(s){function l(s){var l=angular.extend({show:!0},r.modal,s),u=l.scope?l.scope:t.$new(),c=l.template;return i.when(o.get(c)||n.get(c,{cache:!0}).then(function(t){return t.data})).then(function(t){var n=c.replace(".html","").replace(/[\/|\.|:]/g,"-")+"-"+u.$id,i=$('<div class="modal hide" tabindex="-1"></div>').attr("id",n).addClass("fade").html(t);return l.modalClass&&i.addClass(l.modalClass),$("body").append(i),a(function(){e(i)(u)}),u.$modal2=function(t){i.modal(t)},angular.forEach(["show","hide"],function(t){u[t]=function(){i.modal(t)}}),u.dismiss=u.hide,angular.forEach(["show","shown","hide","hidden"],function(t){i.on(t,function(e){u.$emit("modal-"+t,e)})}),i.on("shown",function(){$("input[autofocus], textarea[autofocus]",i).first().trigger("focus")}),i.on("hidden",function(){l.persist||u.$destroy()}),u.$on("$destroy",function(){i.remove()}),i.modal(l),i})}return new l(s)};return s}]).directive("bsModal",["$q","$modal2",function(t,e){return{restrict:"A",scope:!0,link:function(n,a,i){var o={template:n.$eval(i.bsModal),persist:!0,show:!1,scope:n};angular.forEach(["modalClass","backdrop","keyboard"],function(t){angular.isDefined(i[t])&&(o[t]=i[t])}),t.when(e(o)).then(function(t){a.attr("data-target","#"+t.attr("id")).attr("data-toggle","modal")})}}}]),angular.module("$strap.directives").directive("bsNavbar",["$location",function(t){return{restrict:"A",link:function(e,n){e.$watch(function(){return t.path()},function(t){$("li[data-match-route]",n).each(function(e,n){var a=angular.element(n),i=a.attr("data-match-route"),o=RegExp("^"+i+"$",["i"]);o.test(t)?a.addClass("active").find(".collapse.in").collapse("hide"):a.removeClass("active")})})}}}]),angular.module("$strap.directives").directive("bsPopover",["$parse","$compile","$http","$timeout","$q","$templateCache",function(t,e,n,a,i,o){return $("body").on("keyup",function(t){27===t.keyCode&&$(".popover.in").each(function(){$(this).popover("hide")})}),{restrict:"A",scope:!0,link:function(r,s,l){var u=t(l.bsPopover),c=(u.assign,u(r)),d={};angular.isObject(c)&&(d=c),i.when(d.content||o.get(c)||n.get(c,{cache:!0})).then(function(t){angular.isObject(t)&&(t=t.data),l.unique&&s.on("show",function(){$(".popover.in").each(function(){var t=$(this),e=t.data("popover");e&&!e.$element.is(s)&&t.popover("hide")})}),l.hide&&r.$watch(l.hide,function(t,e){t?n.hide():t!==e&&n.show()}),l.show&&r.$watch(l.show,function(t,e){t?a(function(){n.show()}):t!==e&&n.hide()}),s.popover(angular.extend({},d,{content:t,html:!0}));var n=s.data("popover");n.hasContent=function(){return this.getTitle()||t},n.getPosition=function(){var t=$.fn.popover.Constructor.prototype.getPosition.apply(this,arguments);return e(this.$tip)(r),r.$digest(),this.$tip.data("popover",this),t},r.$popover=function(t){n(t)},angular.forEach(["show","hide"],function(t){r[t]=function(){n[t]()}}),r.dismiss=r.hide,angular.forEach(["show","shown","hide","hidden"],function(t){s.on(t,function(e){r.$emit("popover-"+t,e)})})})}}}]),angular.module("$strap.directives").directive("bsSelect",["$timeout",function(t){return{restrict:"A",require:"?ngModel",link:function(e,n,a,i){var o=e.$eval(a.bsSelect)||{};t(function(){n.selectpicker(o),n.next().removeClass("ng-scope")}),i&&e.$watch(a.ngModel,function(t,e){angular.equals(t,e)||n.selectpicker("refresh")})}}}]),angular.module("$strap.directives").directive("bsTabs",["$parse","$compile","$timeout",function(t,e,n){var a='<div class="tabs"><ul class="nav nav-tabs"><li ng-repeat="pane in panes" ng-class="{active:pane.active}"><a data-target="#{{pane.id}}" data-index="{{$index}}" data-toggle="tab">{{pane.title}}</a></li></ul><div class="tab-content" ng-transclude></div>';return{restrict:"A",require:"?ngModel",priority:0,scope:!0,template:a,replace:!0,transclude:!0,compile:function(){return function(e,a,i,o){var r=t(i.bsTabs);r.assign,r(e),e.panes=[];var s,l,u,c=a.find("ul.nav-tabs"),d=a.find("div.tab-content"),p=0;n(function(){d.find("[data-title], [data-tab]").each(function(t){var n=angular.element(this);s="tab-"+e.$id+"-"+t,l=n.data("title")||n.data("tab"),u=!u&&n.hasClass("active"),n.attr("id",s).addClass("tab-pane"),i.fade&&n.addClass("fade"),e.panes.push({id:s,title:l,content:this.innerHTML,active:u})}),e.panes.length&&!u&&(d.find(".tab-pane:first-child").addClass("active"+(i.fade?" in":"")),e.panes[0].active=!0)}),o&&(a.on("show",function(t){var n=$(t.target);e.$apply(function(){o.$setViewValue(n.data("index"))})}),e.$watch(i.ngModel,function(t){angular.isUndefined(t)||(p=t,setTimeout(function(){var e=$(c[0].querySelectorAll("li")[1*t]);e.hasClass("active")||e.children("a").tab("show")}))}))}}}}]),angular.module("$strap.directives").directive("bsTimepicker",["$timeout","$strapConfig",function(t,e){var n="((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)";return{restrict:"A",require:"?ngModel",link:function(a,i,o,r){if(r){i.on("changeTime.timepicker",function(){t(function(){r.$setViewValue(i.val())})});var s=RegExp("^"+n+"$",["i"]);r.$parsers.unshift(function(t){return!t||s.test(t)?(r.$setValidity("time",!0),t):(r.$setValidity("time",!1),void 0)})}i.attr("data-toggle","timepicker"),i.parent().addClass("bootstrap-timepicker"),i.timepicker(e.timepicker||{});var l=i.data("timepicker"),u=i.siblings('[data-toggle="timepicker"]');u.length&&u.on("click",$.proxy(l.showWidget,l))}}}]),angular.module("$strap.directives").directive("bsTooltip",["$parse","$compile",function(t){return{restrict:"A",scope:!0,link:function(e,n,a){var i=t(a.bsTooltip),o=(i.assign,i(e));e.$watch(a.bsTooltip,function(t,e){t!==e&&(o=t)}),a.unique&&n.on("show",function(){$(".tooltip.in").each(function(){var t=$(this),e=t.data("tooltip");e&&!e.$element.is(n)&&t.tooltip("hide")})}),n.tooltip({title:function(){return angular.isFunction(o)?o.apply(null,arguments):o},html:!0});var r=n.data("tooltip");r.show=function(){var t=$.fn.tooltip.Constructor.prototype.show.apply(this,arguments);return this.tip().data("tooltip",this),t},e._tooltip=function(t){n.tooltip(t)},e.hide=function(){n.tooltip("hide")},e.show=function(){n.tooltip("show")},e.dismiss=e.hide}}}]),angular.module("$strap.directives").directive("bsTypeahead",["$parse",function(t){return{restrict:"A",require:"?ngModel",link:function(e,n,a,i){var o=t(a.bsTypeahead),r=(o.assign,o(e));e.$watch(a.bsTypeahead,function(t,e){t!==e&&(r=t)}),n.attr("data-provide","typeahead"),n.typeahead({source:function(){return angular.isFunction(r)?r.apply(null,arguments):r},minLength:a.minLength||1,items:a.items,updater:function(t){return i&&e.$apply(function(){i.$setViewValue(t)}),e.$emit("typeahead-updated",t),t}});var s=n.data("typeahead");s.lookup=function(){var t;return this.query=this.$element.val()||"",this.query.length<this.options.minLength?this.shown?this.hide():this:(t=$.isFunction(this.source)?this.source(this.query,$.proxy(this.process,this)):this.source,t?this.process(t):this)},a.matchAll&&(s.matcher=function(){return!0}),"0"===a.minLength&&setTimeout(function(){n.on("focus",function(){0===n.val().length&&setTimeout(n.typeahead.bind(n,"lookup"),200)})})}}}]);
define("angular-strap", ["angular"], function(){});

/*
 AngularJS v1.2.1
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(v,c,B){'use strict';function y(t,q,l,b,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(k,A,n,C,x){function w(){g&&(g.$destroy(),g=null);p&&(f.leave(p),p=null)}function d(){var a=t.current&&t.current.locals,e=a&&a.$template;if(e){var z=k.$new();x(z,function(u){u.html(e);f.enter(u,null,p||A,function(){!c.isDefined(r)||r&&!k.$eval(r)||q()});w();var h=l(u.contents()),m=t.current;g=m.scope=z;p=u;if(m.controller){a.$scope=g;var d=b(m.controller,a);m.controllerAs&&
(g[m.controllerAs]=d);u.data("$ngControllerController",d);u.children().data("$ngControllerController",d)}h(g);g.$emit("$viewContentLoaded");g.$eval(s)})}else w()}var g,p,r=n.autoscroll,s=n.onload||"";k.$on("$routeChangeSuccess",d);d()}}}v=c.module("ngRoute",["ng"]).provider("$route",function(){function t(b,f){return c.extend(new (c.extend(function(){},{prototype:b})),f)}function q(b,c){var k=c.caseInsensitiveMatch,l={originalPath:b,regexp:b},n=l.keys=[];b=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,
function(b,c,f,d){b="?"===d?d:null;d="*"===d?d:null;n.push({name:f,optional:!!b});c=c||"";return""+(b?"":c)+"(?:"+(b?c:"")+(d&&"(.+?)"||"([^/]+)")+(b||"")+")"+(b||"")}).replace(/([\/$\*])/g,"\\$1");l.regexp=RegExp("^"+b+"$",k?"i":"");return l}var l={};this.when=function(b,f){l[b]=c.extend({reloadOnSearch:!0},f,b&&q(b,f));if(b){var k="/"==b[b.length-1]?b.substr(0,b.length-1):b+"/";l[k]=c.extend({redirectTo:b},q(k,f))}return this};this.otherwise=function(b){this.when(null,b);return this};this.$get=
["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(b,f,k,q,n,v,x,w){function d(){var a=g(),e=s.current;if(a&&e&&a.$$route===e.$$route&&c.equals(a.pathParams,e.pathParams)&&!a.reloadOnSearch&&!r)e.params=a.params,c.copy(e.params,k),b.$broadcast("$routeUpdate",e);else if(a||e)r=!1,b.$broadcast("$routeChangeStart",a,e),(s.current=a)&&a.redirectTo&&(c.isString(a.redirectTo)?f.path(p(a.redirectTo,a.params)).search(a.params).replace():f.url(a.redirectTo(a.pathParams,
f.path(),f.search())).replace()),q.when(a).then(function(){if(a){var b=c.extend({},a.resolve),e,h;c.forEach(b,function(a,e){b[e]=c.isString(a)?n.get(a):n.invoke(a)});c.isDefined(e=a.template)?c.isFunction(e)&&(e=e(a.params)):c.isDefined(h=a.templateUrl)&&(c.isFunction(h)&&(h=h(a.params)),h=w.getTrustedResourceUrl(h),c.isDefined(h)&&(a.loadedTemplateUrl=h,e=v.get(h,{cache:x}).then(function(a){return a.data})));c.isDefined(e)&&(b.$template=e);return q.all(b)}}).then(function(f){a==s.current&&(a&&(a.locals=
f,c.copy(a.params,k)),b.$broadcast("$routeChangeSuccess",a,e))},function(c){a==s.current&&b.$broadcast("$routeChangeError",a,e,c)})}function g(){var a,b;c.forEach(l,function(d,l){var h;if(h=!b){var m=f.path();h=d.keys;var k={};if(d.regexp)if(m=d.regexp.exec(m)){for(var g=1,q=m.length;g<q;++g){var n=h[g-1],p="string"==typeof m[g]?decodeURIComponent(m[g]):m[g];n&&p&&(k[n.name]=p)}h=k}else h=null;else h=null;h=a=h}h&&(b=t(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||l[null]&&
t(l[null],{params:{},pathParams:{}})}function p(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(.*)/),g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var r=!1,s={routes:l,reload:function(){r=!0;b.$evalAsync(d)}};b.$on("$locationChangeSuccess",d);return s}]});v.provider("$routeParams",function(){this.$get=function(){return{}}});v.directive("ngView",y);y.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]})(window,
window.angular);
//# sourceMappingURL=angular-route.min.js.map;
define("angular-route", ["angular"], function(){});

(function() {
/* Start angularLocalStorage */

var angularLocalStorage = angular.module('LocalStorageModule', []);

angularLocalStorage.provider('localStorageService', function(){
  // You should set a prefix to avoid overwriting any local storage variables from the rest of your app
  // e.g. angularLocalStorage.constant('prefix', 'youAppName');
  this.prefix = 'ls';
  // Cookie options (usually in case of fallback)
  // expiry = Number of days before cookies expire // 0 = Does not expire
  // path = The web path the cookie represents
  this.cookie = {
    expiry: 30,
    path: '/'
  };
  this.notify = {
    setItem: true,
    removeItem: false
  };
  this.setPrefix = function(prefix){
    this.prefix = prefix;
  };
  this.setStorageCookie = function(exp, path){
    this.cookie = {
      expiry: exp,
      path: path
    };
  };
  this.setNotify = function(itemSet, itemRemove){
    this.notify = {
      setItem: itemSet,
      removeItem: itemRemove
    };
  };

  this.$get = ['$rootScope', function($rootScope){

    var prefix = this.prefix;
    // If there is a prefix set in the config lets use that with an appended period for readability
    if (prefix.substr(-1) !== '.') {
      prefix = !!prefix ? prefix + '.' : '';
    }

    // Checks the browser to see if local storage is supported
    var browserSupportsLocalStorage = function () {
      try {
        var supported = ('localStorage' in window && window['localStorage'] !== null);

        // When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage
        // is available, but trying to call .setItem throws an exception.
        //
        // "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add something to storage
        // that exceeded the quota."
        var key = prefix + '__' + Math.round(Math.random() * 1e7);
        if (supported) {
          localStorage.setItem(key, '');
          localStorage.removeItem(key);
        }

        return true;
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return false;
      }
    };

    // Directly adds a value to local storage
    // If local storage is not available in the browser use cookies
    // Example use: localStorageService.add('library','angular');
    var addToLocalStorage = function (key, value) {

      // If this browser does not support local storage use cookies
      if (!browserSupportsLocalStorage()) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: 'cookie'});
        }
        return addToCookies(key, value);
      }

      // Let's convert undefined values to null to get the value consistent
      if (typeof value === "undefined") {
        value = null;
      }

      try {
        if (angular.isObject(value) || angular.isArray(value)) {
          value = angular.toJson(value);
        }
        localStorage.setItem(prefix + key, value);
        if (notify.setItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.setitem', {key: key, newvalue: value, storageType: 'localStorage'});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return addToCookies(key, value);
      }
      return true;
    };

    // Directly get a value from local storage
    // Example use: localStorageService.get('library'); // returns 'angular'
    var getFromLocalStorage = function (key) {

      if (!browserSupportsLocalStorage()) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning','LOCAL_STORAGE_NOT_SUPPORTED');
        return getFromCookies(key);
      }

      var item = localStorage.getItem(prefix + key);
      // angular.toJson will convert null to 'null', so a proper conversion is needed
      // FIXME not a perfect solution, since a valid 'null' string can't be stored
      if (!item || item === 'null') {
        return null;
      }

      if (item.charAt(0) === "{" || item.charAt(0) === "[") {
        return angular.fromJson(item);
      }

      return item;
    };

    // Remove an item from local storage
    // Example use: localStorageService.remove('library'); // removes the key/value pair of library='angular'
    var removeFromLocalStorage = function (key) {
      if (!browserSupportsLocalStorage()) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        if (notify.removeItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {key: key, storageType: 'cookie'});
        }
        return removeFromCookies(key);
      }

      try {
        localStorage.removeItem(prefix+key);
        if (notify.removeItem) {
          $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {key: key, storageType: 'localStorage'});
        }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
        return removeFromCookies(key);
      }
      return true;
    };

    // Return array of keys for local storage
    // Example use: var keys = localStorageService.keys()
    var getKeysForLocalStorage = function () {

      if (!browserSupportsLocalStorage()) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        return false;
      }

      var prefixLength = prefix.length;
      var keys = [];
      for (var key in localStorage) {
        // Only return keys that are for this app
        if (key.substr(0,prefixLength) === prefix) {
          try {
            keys.push(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.Description);
            return [];
          }
        }
      }
      return keys;
    };

    // Remove all data for this app from local storage
    // Example use: localStorageService.clearAll();
    // Should be used mostly for development purposes
    var clearAllFromLocalStorage = function () {

      if (!browserSupportsLocalStorage()) {
        $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
        return clearAllFromCookies();
      }

      var prefixLength = prefix.length;

      for (var key in localStorage) {
        // Only remove items that are for this app
        if (key.substr(0,prefixLength) === prefix) {
          try {
            removeFromLocalStorage(key.substr(prefixLength));
          } catch (e) {
            $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
            return clearAllFromCookies();
          }
        }
      }
      return true;
    };

    // Checks the browser to see if cookies are supported
    var browserSupportsCookies = function() {
      try {
        return navigator.cookieEnabled ||
          ("cookie" in document && (document.cookie.length > 0 ||
          (document.cookie = "test").indexOf.call(document.cookie, "test") > -1));
      } catch (e) {
          $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
          return false;
      }
    };

    // Directly adds a value to cookies
    // Typically used as a fallback is local storage is not available in the browser
    // Example use: localStorageService.cookie.add('library','angular');
    var addToCookies = function (key, value) {

      if (typeof value === "undefined") {
        return false;
      }

      if (!browserSupportsCookies()) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      try {
        var expiry = '',
            expiryDate = new Date();

        if (value === null) {
          // Mark that the cookie has expired one day ago
          expiryDate.setTime(expiryDate.getTime() + (-1 * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
          value = '';
        } else if (cookie.expiry !== 0) {
          expiryDate.setTime(expiryDate.getTime() + (cookie.expiry * 24 * 60 * 60 * 1000));
          expiry = "; expires=" + expiryDate.toGMTString();
        }
        if (!!key) {
          document.cookie = prefix + key + "=" + encodeURIComponent(value) + expiry + "; path="+cookie.path;
          }
      } catch (e) {
        $rootScope.$broadcast('LocalStorageModule.notification.error',e.message);
        return false;
      }
      return true;
    };

    // Directly get a value from a cookie
    // Example use: localStorageService.cookie.get('library'); // returns 'angular'
    var getFromCookies = function (key) {
      if (!browserSupportsCookies()) {
        $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
        return false;
      }

      var cookies = document.cookie.split(';');
      for(var i=0;i < cookies.length;i++) {
        var thisCookie = cookies[i];
        while (thisCookie.charAt(0)===' ') {
          thisCookie = thisCookie.substring(1,thisCookie.length);
        }
        if (thisCookie.indexOf(prefix + key + '=') === 0) {
          return decodeURIComponent(thisCookie.substring(prefix.length + key.length + 1, thisCookie.length));
        }
      }
      return null;
    };

    var removeFromCookies = function (key) {
      addToCookies(key,null);
    };

    var clearAllFromCookies = function () {
      var thisCookie = null, thisKey = null;
      var prefixLength = prefix.length;
      var cookies = document.cookie.split(';');
      for(var i = 0; i < cookies.length; i++) {
        thisCookie = cookies[i];

        while (thisCookie.charAt(0) === ' ') {
          thisCookie = thisCookie.substring(1, thisCookie.length);
        }

        var key = thisCookie.substring(prefixLength, thisCookie.indexOf('='));
        removeFromCookies(key);
      }
    };

    return {
      isSupported: browserSupportsLocalStorage,
      set: addToLocalStorage,
      add: addToLocalStorage, //DEPRECATED
      get: getFromLocalStorage,
      keys: getKeysForLocalStorage,
      remove: removeFromLocalStorage,
      clearAll: clearAllFromLocalStorage,
      cookie: {
        set: addToCookies,
        add: addToCookies, //DEPRECATED
        get: getFromCookies,
        remove: removeFromCookies,
        clearAll: clearAllFromCookies
      }
    };
  }]
});
}).call(this);
define("angular-ls", ["angular"], function(){});

angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/popup.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset-titles.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(e,t,n){function a(e){for(var t in e)if(void 0!==r.style[t])return e[t]}var i=function(a,r,o){o=o||{};var l=e.defer(),s=i[o.animation?"animationEndEventName":"transitionEndEventName"],c=function(){n.$apply(function(){a.unbind(s,c),l.resolve(a)})};return s&&a.bind(s,c),t(function(){angular.isString(r)?a.addClass(r):angular.isFunction(r)?r(a):angular.isObject(r)&&a.css(r),s||l.resolve(a)}),l.promise.cancel=function(){s&&a.unbind(s,c),l.reject("Transition cancelled")},l.promise},r=document.createElement("trans"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},l={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return i.transitionEndEventName=a(o),i.animationEndEventName=a(l),i}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(e){var t=function(e,t,n){t.removeClass("collapse"),t.css({height:n}),t[0].offsetWidth,t.addClass("collapse")};return{link:function(n,a,i){var r,o=!0;n.$watch(function(){return a[0].scrollHeight},function(){0!==a[0].scrollHeight&&(r||(o?t(n,a,a[0].scrollHeight+"px"):t(n,a,"auto")))}),n.$watch(i.collapse,function(e){e?u():c()});var l,s=function(t){return l&&l.cancel(),l=e(a,t),l.then(function(){l=void 0},function(){l=void 0}),l},c=function(){o?(o=!1,r||t(n,a,"auto")):s({height:a[0].scrollHeight+"px"}).then(function(){r||t(n,a,"auto")}),r=!1},u=function(){r=!0,o?(o=!1,t(n,a,0)):(t(n,a,a[0].scrollHeight+"px"),s({height:"0"}))}}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(e,t,n){this.groups=[],this.closeOthers=function(a){var i=angular.isDefined(t.closeOthers)?e.$eval(t.closeOthers):n.closeOthers;i&&angular.forEach(this.groups,function(e){e!==a&&(e.isOpen=!1)})},this.addGroup=function(e){var t=this;this.groups.push(e),e.$on("$destroy",function(){t.removeGroup(e)})},this.removeGroup=function(e){var t=this.groups.indexOf(e);-1!==t&&this.groups.splice(this.groups.indexOf(e),1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",["$parse","$transition","$timeout",function(e){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@"},controller:["$scope",function(){this.setHeading=function(e){this.heading=e}}],link:function(t,n,a,i){var r,o;i.addGroup(t),t.isOpen=!1,a.isOpen&&(r=e(a.isOpen),o=r.assign,t.$watch(function(){return r(t.$parent)},function(e){t.isOpen=e}),t.isOpen=r?r(t.$parent):!1),t.$watch("isOpen",function(e){e&&i.closeOthers(t),o&&o(t.$parent,e)})}}}]).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",compile:function(e,t,n){return function(e,t,a,i){i.setHeading(n(e,function(){}))}}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(e,t,n,a){e.$watch(function(){return a[n.accordionTransclude]},function(e){e&&(t.html(""),t.append(e))})}}}),angular.module("ui.bootstrap.alert",[]).directive("alert",function(){return{restrict:"EA",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"=",close:"&"},link:function(e,t,n){e.closeable="close"in n}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(e,t,n){t.addClass("ng-binding").data("$binding",n.bindHtmlUnsafe),e.$watch(n.bindHtmlUnsafe,function(e){t.html(e||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).directive("btnRadio",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,r){r.$render=function(){a.toggleClass(t,angular.equals(r.$modelValue,e.$eval(i.btnRadio)))},a.bind(n,function(){a.hasClass(t)||e.$apply(function(){r.$setViewValue(e.$eval(i.btnRadio)),r.$render()})})}}}]).directive("btnCheckbox",["buttonConfig",function(e){var t=e.activeClass||"active",n=e.toggleEvent||"click";return{require:"ngModel",link:function(e,a,i,r){function o(){var t=e.$eval(i.btnCheckboxTrue);return angular.isDefined(t)?t:!0}function l(){var t=e.$eval(i.btnCheckboxFalse);return angular.isDefined(t)?t:!1}r.$render=function(){a.toggleClass(t,angular.equals(r.$modelValue,o()))},a.bind(n,function(){e.$apply(function(){r.$setViewValue(a.hasClass(t)?l():o()),r.$render()})})}}}]),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition","$q",function(e,t,n){function a(){function n(){r?(e.next(),a()):e.pause()}i&&t.cancel(i);var o=+e.interval;!isNaN(o)&&o>=0&&(i=t(n,o))}var i,r,o=this,l=o.slides=[],s=-1;o.currentSlide=null,o.select=function(i,r){function c(){o.currentSlide&&angular.isString(r)&&!e.noTransition&&i.$element?(i.$element.addClass(r),i.$element[0].offsetWidth,angular.forEach(l,function(e){angular.extend(e,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(i,{direction:r,active:!0,entering:!0}),angular.extend(o.currentSlide||{},{direction:r,leaving:!0}),e.$currentTransition=n(i.$element,{}),function(t,n){e.$currentTransition.then(function(){u(t,n)},function(){u(t,n)})}(i,o.currentSlide)):u(i,o.currentSlide),o.currentSlide=i,s=p,a()}function u(t,n){angular.extend(t,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(n||{},{direction:"",active:!1,leaving:!1,entering:!1}),e.$currentTransition=null}var p=l.indexOf(i);void 0===r&&(r=p>s?"next":"prev"),i&&i!==o.currentSlide&&(e.$currentTransition?(e.$currentTransition.cancel(),t(c)):c())},o.indexOfSlide=function(e){return l.indexOf(e)},e.next=function(){var t=(s+1)%l.length;return e.$currentTransition?void 0:o.select(l[t],"next")},e.prev=function(){var t=0>s-1?l.length-1:s-1;return e.$currentTransition?void 0:o.select(l[t],"prev")},e.select=function(e){o.select(e)},e.isActive=function(e){return o.currentSlide===e},e.slides=function(){return l},e.$watch("interval",a),e.play=function(){r||(r=!0,a())},e.pause=function(){e.noPause||(r=!1,i&&t.cancel(i))},o.addSlide=function(t,n){t.$element=n,l.push(t),1===l.length||t.active?(o.select(l[l.length-1]),1==l.length&&e.play()):t.active=!1},o.removeSlide=function(e){var t=l.indexOf(e);l.splice(t,1),l.length>0&&e.active?t>=l.length?o.select(l[t-1]):o.select(l[t]):s>t&&s--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",["$parse",function(e){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{},link:function(t,n,a,i){if(a.active){var r=e(a.active),o=r.assign,l=t.active=r(t.$parent);t.$watch(function(){var e=r(t.$parent);return e!==t.active&&(e!==l?l=t.active=e:o(t.$parent,e=l=t.active)),e})}i.addSlide(t,n),t.$on("$destroy",function(){i.removeSlide(t)}),t.$watch("active",function(e){e&&i.select(t)})}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function a(e){return"static"===(n(e,"position")||"static")}var i=function(t){for(var n=e[0],i=t.offsetParent||n;i&&i!==n&&a(i);)i=i.offsetParent;return i||n};return{position:function(t){var n=this.offset(t),a={top:0,left:0},r=i(t[0]);return r!=e[0]&&(a=this.offset(angular.element(r)),a.top+=r.clientTop-r.scrollTop,a.left+=r.clientLeft-r.scrollLeft),{width:t.prop("offsetWidth"),height:t.prop("offsetHeight"),top:n.top-a.top,left:n.left-a.left}},offset:function(n){var a=n[0].getBoundingClientRect();return{width:n.prop("offsetWidth"),height:n.prop("offsetHeight"),top:a.top+(t.pageYOffset||e[0].body.scrollTop||e[0].documentElement.scrollTop),left:a.left+(t.pageXOffset||e[0].body.scrollLeft||e[0].documentElement.scrollLeft)}}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.position"]).constant("datepickerConfig",{dayFormat:"dd",monthFormat:"MMMM",yearFormat:"yyyy",dayHeaderFormat:"EEE",dayTitleFormat:"MMMM yyyy",monthTitleFormat:"yyyy"
,showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","dateFilter","datepickerConfig",function(e,t,n,a){function i(t,n){return angular.isDefined(t)?e.$parent.$eval(t):n}function r(e,t){return new Date(e,t,0).getDate()}function o(e,t){for(var n=Array(t),a=e,i=0;t>i;)n[i++]=new Date(a),a.setDate(a.getDate()+1);return n}function l(e,t,a,i){return{date:e,label:n(e,t),selected:!!a,secondary:!!i}}var s={day:i(t.dayFormat,a.dayFormat),month:i(t.monthFormat,a.monthFormat),year:i(t.yearFormat,a.yearFormat),dayHeader:i(t.dayHeaderFormat,a.dayHeaderFormat),dayTitle:i(t.dayTitleFormat,a.dayTitleFormat),monthTitle:i(t.monthTitleFormat,a.monthTitleFormat)},c=i(t.startingDay,a.startingDay),u=i(t.yearRange,a.yearRange);this.minDate=a.minDate?new Date(a.minDate):null,this.maxDate=a.maxDate?new Date(a.maxDate):null,this.modes=[{name:"day",getVisibleDates:function(e,t){var a=e.getFullYear(),i=e.getMonth(),u=new Date(a,i,1),p=c-u.getDay(),d=p>0?7-p:-p,f=new Date(u),m=0;d>0&&(f.setDate(-d+1),m+=d),m+=r(a,i+1),m+=(7-m%7)%7;for(var g=o(f,m),h=Array(7),v=0;m>v;v++){var b=new Date(g[v]);g[v]=l(b,s.day,t&&t.getDate()===b.getDate()&&t.getMonth()===b.getMonth()&&t.getFullYear()===b.getFullYear(),b.getMonth()!==i)}for(var $=0;7>$;$++)h[$]=n(g[$].date,s.dayHeader);return{objects:g,title:n(e,s.dayTitle),labels:h}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate())-new Date(t.getFullYear(),t.getMonth(),t.getDate())},split:7,step:{months:1}},{name:"month",getVisibleDates:function(e,t){for(var a=Array(12),i=e.getFullYear(),r=0;12>r;r++){var o=new Date(i,r,1);a[r]=l(o,s.month,t&&t.getMonth()===r&&t.getFullYear()===i)}return{objects:a,title:n(e,s.monthTitle)}},compare:function(e,t){return new Date(e.getFullYear(),e.getMonth())-new Date(t.getFullYear(),t.getMonth())},split:3,step:{years:1}},{name:"year",getVisibleDates:function(e,t){for(var n=Array(u),a=e.getFullYear(),i=parseInt((a-1)/u,10)*u+1,r=0;u>r;r++){var o=new Date(i+r,0,1);n[r]=l(o,s.year,t&&t.getFullYear()===o.getFullYear())}return{objects:n,title:[n[0].label,n[u-1].label].join(" - ")}},compare:function(e,t){return e.getFullYear()-t.getFullYear()},split:5,step:{years:u}}],this.isDisabled=function(t,n){var a=this.modes[n||0];return this.minDate&&0>a.compare(t,this.minDate)||this.maxDate&&a.compare(t,this.maxDate)>0||e.dateDisabled&&e.dateDisabled({date:t,mode:a.name})}}]).directive("datepicker",["dateFilter","$parse","datepickerConfig","$log",function(e,t,n,a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(e,i,r,o){function l(){e.showWeekNumbers=0===m&&h}function s(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function c(t){var n=null,i=!0;f.$modelValue&&(n=new Date(f.$modelValue),isNaN(n)?(i=!1,a.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):t&&(g=n)),f.$setValidity("date",i);var r=d.modes[m],o=r.getVisibleDates(g,n);angular.forEach(o.objects,function(e){e.disabled=d.isDisabled(e.date,m)}),f.$setValidity("date-disabled",!n||!d.isDisabled(n)),e.rows=s(o.objects,r.split),e.labels=o.labels||[],e.title=o.title}function u(e){m=e,l(),c()}function p(e){var t=new Date(e);t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1}var d=o[0],f=o[1];if(f){var m=0,g=new Date,h=n.showWeeks;r.showWeeks?e.$parent.$watch(t(r.showWeeks),function(e){h=!!e,l()}):l(),r.min&&e.$parent.$watch(t(r.min),function(e){d.minDate=e?new Date(e):null,c()}),r.max&&e.$parent.$watch(t(r.max),function(e){d.maxDate=e?new Date(e):null,c()}),f.$render=function(){c(!0)},e.select=function(e){if(0===m){var t=new Date(f.$modelValue);t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),f.$setViewValue(t),c(!0)}else g=e,u(m-1)},e.move=function(e){var t=d.modes[m].step;g.setMonth(g.getMonth()+e*(t.months||0)),g.setFullYear(g.getFullYear()+e*(t.years||0)),c()},e.toggleMode=function(){u((m+1)%d.modes.length)},e.getWeekNumber=function(t){return 0===m&&e.showWeekNumbers&&7===t.length?p(t[0].date):null}}}}}]).constant("datepickerPopupConfig",{dateFormat:"yyyy-MM-dd",closeOnDateSelection:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","datepickerPopupConfig",function(e,t,n,a,i,r){return{restrict:"EA",require:"ngModel",link:function(o,l,s,c){function u(e){$?$(o,!!e):v.isOpen=!!e}function p(e){if(e){if(angular.isDate(e))return c.$setValidity("date",!0),e;if(angular.isString(e)){var t=new Date(e);return isNaN(t)?(c.$setValidity("date",!1),void 0):(c.$setValidity("date",!0),t)}return c.$setValidity("date",!1),void 0}return c.$setValidity("date",!0),null}function d(){v.date=c.$modelValue,m()}function f(e,n,a){e&&(o.$watch(t(e),function(e){v[n]=e}),D.attr(a||n,n))}function m(){v.position=a.position(l),v.position.top=v.position.top+l.prop("offsetHeight")}var g=angular.isDefined(s.closeOnDateSelection)?v.$eval(s.closeOnDateSelection):r.closeOnDateSelection,h=s.datepickerPopup||r.dateFormat,v=o.$new();o.$on("$destroy",function(){v.$destroy()});var b,$;s.isOpen&&(b=t(s.isOpen),$=b.assign,o.$watch(b,function(e){v.isOpen=!!e})),v.isOpen=b?b(o):!1;var y=function(e){v.isOpen&&e.target!==l[0]&&v.$apply(function(){u(!1)})},w=function(){v.$apply(function(){u(!0)})},k=angular.element("<datepicker-popup-wrap><datepicker></datepicker></datepicker-popup-wrap>");k.attr({"ng-model":"date","ng-change":"dateSelection()"});var D=k.find("datepicker");s.datepickerOptions&&D.attr(angular.extend({},o.$eval(s.datepickerOptions))),c.$parsers.unshift(p),v.dateSelection=function(){c.$setViewValue(v.date),c.$render(),g&&u(!1)},l.bind("input change keyup",function(){v.$apply(function(){d()})}),c.$render=function(){var e=c.$viewValue?i(c.$viewValue,h):"";l.val(e),d()},f(s.min,"min"),f(s.max,"max"),s.showWeeks?f(s.showWeeks,"showWeeks","show-weeks"):(v.showWeeks=!0,D.attr("show-weeks","showWeeks")),s.dateDisabled&&D.attr("date-disabled",s.dateDisabled);var x=!1,T=!1;v.$watch("isOpen",function(e){e?(m(),n.bind("click",y),T&&l.unbind("focus",w),l[0].focus(),x=!0):(x&&n.unbind("click",y),l.bind("focus",w),T=!0),$&&$(o,e)});var C=t(s.ngModel).assign;v.today=function(){C(o,new Date)},v.clear=function(){C(o,null)},l.after(e(k)(v))}}}]).directive("datepickerPopupWrap",[function(){return{restrict:"E",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(e,t){t.bind("click",function(e){e.preventDefault(),e.stopPropagation()})}}}]),angular.module("ui.bootstrap.dropdownToggle",[]).directive("dropdownToggle",["$document","$location",function(e){var t=null,n=angular.noop;return{restrict:"CA",link:function(a,i){a.$watch("$location.path",function(){n()}),i.parent().bind("click",function(){n()}),i.bind("click",function(a){var r=i===t;a.preventDefault(),a.stopPropagation(),t&&n(),r||(i.parent().addClass("open"),t=i,n=function(a){a&&(a.preventDefault(),a.stopPropagation()),e.unbind("click",n),i.parent().removeClass("open"),n=angular.noop,t=null},e.bind("click",n))})}}}]),angular.module("ui.bootstrap.modal",[]).factory("$$stackedMap",function(){return{createNew:function(){var e=[];return{add:function(t,n){e.push({key:t,value:n})},get:function(t){for(var n=0;e.length>n;n++)if(t==e[n].key)return e[n]},keys:function(){for(var t=[],n=0;e.length>n;n++)t.push(e[n].key);return t},top:function(){return e[e.length-1]},remove:function(t){for(var n=-1,a=0;e.length>a;a++)if(t==e[a].key){n=a;break}return e.splice(n,1)[0]},removeTop:function(){return e.splice(e.length-1,1)[0]},length:function(){return e.length}}}}}).directive("modalBackdrop",["$modalStack","$timeout",function(e,t){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(n){t(function(){n.animate=!0}),n.close=function(t){var n=e.getTop();n&&n.value.backdrop&&"static"!=n.value.backdrop&&(t.preventDefault(),t.stopPropagation(),e.dismiss(n.key,"backdrop click"))}}}}]).directive("modalWindow",["$timeout",function(e){return{restrict:"EA",scope:{index:"@"},replace:!0,transclude:!0,templateUrl:"template/modal/window.html",link:function(t,n,a){t.windowClass=a.windowClass||"",e(function(){t.animate=!0})}}}]).factory("$modalStack",["$document","$compile","$rootScope","$$stackedMap",function(e,t,n,a){function i(){for(var e=-1,t=u.keys(),n=0;t.length>n;n++)u.get(t[n]).value.backdrop&&(e=n);return e}function r(e){var t=u.get(e).value;u.remove(e),t.modalDomEl.remove(),-1==i()&&(l.remove(),l=void 0),t.modalScope.$destroy()}var o,l,s=n.$new(!0),c=e.find("body").eq(0),u=a.createNew(),p={};return n.$watch(i,function(e){s.index=e}),e.bind("keydown",function(e){var t;27===e.which&&(t=u.top(),t&&t.value.keyboard&&n.$apply(function(){p.dismiss(t.key)}))}),p.open=function(e,n){u.add(e,{deferred:n.deferred,modalScope:n.scope,backdrop:n.backdrop,keyboard:n.keyboard});var a=angular.element("<div modal-window></div>");a.attr("window-class",n.windowClass),a.attr("index",u.length()-1),a.html(n.content);var r=t(a)(n.scope);u.top().value.modalDomEl=r,c.append(r),i()>=0&&!l&&(o=angular.element("<div modal-backdrop></div>"),l=t(o)(s),c.append(l))},p.close=function(e,t){var n=u.get(e);n&&(n.value.deferred.resolve(t),r(e))},p.dismiss=function(e,t){var n=u.get(e).value;n&&(n.deferred.reject(t),r(e))},p.getTop=function(){return u.top()},p}]).provider("$modal",function(){var e={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(t,n,a,i,r,o,l){function s(e){return e.template?a.when(e.template):i.get(e.templateUrl,{cache:r}).then(function(e){return e.data})}function c(e){var n=[];return angular.forEach(e,function(e){(angular.isFunction(e)||angular.isArray(e))&&n.push(a.when(t.invoke(e)))}),n}var u={};return u.open=function(t){var i=a.defer(),r=a.defer(),u={result:i.promise,opened:r.promise,close:function(e){l.close(u,e)},dismiss:function(e){l.dismiss(u,e)}};if(t=angular.extend({},e.options,t),t.resolve=t.resolve||{},!t.template&&!t.templateUrl)throw Error("One of template or templateUrl options is required.");var p=a.all([s(t)].concat(c(t.resolve)));return p.then(function(e){var a=(t.scope||n).$new();a.$close=u.close,a.$dismiss=u.dismiss;var r,s={},c=1;t.controller&&(s.$scope=a,s.$modalInstance=u,angular.forEach(t.resolve,function(t,n){s[n]=e[c++]}),r=o(t.controller,s)),l.open(u,{scope:a,deferred:i,content:e[0],backdrop:t.backdrop,keyboard:t.keyboard,windowClass:t.windowClass})},function(e){i.reject(e)}),p.then(function(){r.resolve(!0)},function(){r.reject(!1)}),u},u}]};return e}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse","$interpolate",function(e,t,n,a){var i=this;this.init=function(a){t.itemsPerPage?e.$parent.$watch(n(t.itemsPerPage),function(t){i.itemsPerPage=parseInt(t,10),e.totalPages=i.calculateTotalPages()}):this.itemsPerPage=a},this.noPrevious=function(){return 1===this.page},this.noNext=function(){return this.page===e.totalPages},this.isActive=function(e){return this.page===e},this.calculateTotalPages=function(){return 1>this.itemsPerPage?1:Math.ceil(e.totalItems/this.itemsPerPage)},this.getAttributeValue=function(t,n,i){return angular.isDefined(t)?i?a(t)(e.$parent):e.$parent.$eval(t):n},this.render=function(){this.page=parseInt(e.page,10)||1,e.pages=this.getPages(this.page,e.totalPages)},e.selectPage=function(t){!i.isActive(t)&&t>0&&e.totalPages>=t&&(e.page=t,e.onSelectPage({page:t}))},e.$watch("totalItems",function(){e.totalPages=i.calculateTotalPages()}),e.$watch("totalPages",function(n){t.numPages&&(e.numPages=n),i.page>n?e.selectPage(n):i.render()}),e.$watch("page",function(){i.render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(e,t){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &",numPages:"="},controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(n,a,i,r){function o(e,t,n,a){return{number:e,text:t,active:n,disabled:a}}var l,s=r.getAttributeValue(i.boundaryLinks,t.boundaryLinks),c=r.getAttributeValue(i.directionLinks,t.directionLinks),u=r.getAttributeValue(i.firstText,t.firstText,!0),p=r.getAttributeValue(i.previousText,t.previousText,!0),d=r.getAttributeValue(i.nextText,t.nextText,!0),f=r.getAttributeValue(i.lastText,t.lastText,!0),m=r.getAttributeValue(i.rotate,t.rotate);r.init(t.itemsPerPage),i.maxSize&&n.$parent.$watch(e(i.maxSize),function(e){l=parseInt(e,10),r.render()}),r.getPages=function(e,t){var n=[],a=1,i=t,g=angular.isDefined(l)&&t>l;g&&(m?(a=Math.max(e-Math.floor(l/2),1),i=a+l-1,i>t&&(i=t,a=i-l+1)):(a=(Math.ceil(e/l)-1)*l+1,i=Math.min(a+l-1,t)));for(var h=a;i>=h;h++){var v=o(h,h,r.isActive(h),!1);n.push(v)}if(g&&!m){if(a>1){var b=o(a-1,"...",!1,!1);n.unshift(b)}if(t>i){var $=o(i+1,"...",!1,!1);n.push($)}}if(c){var y=o(e-1,p,!1,r.noPrevious());n.unshift(y);var w=o(e+1,d,!1,r.noNext());n.push(w)}if(s){var k=o(1,u,!1,r.noPrevious());n.unshift(k);var D=o(t,f,!1,r.noNext());n.push(D)}return n}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(e){return{restrict:"EA",scope:{page:"=",totalItems:"=",onSelectPage:" &",numPages:"="},controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(t,n,a,i){function r(e,t,n,a,i){return{number:e,text:t,disabled:n,previous:s&&a,next:s&&i}}var o=i.getAttributeValue(a.previousText,e.previousText,!0),l=i.getAttributeValue(a.nextText,e.nextText,!0),s=i.getAttributeValue(a.align,e.align);i.init(e.itemsPerPage),i.getPages=function(e){return[r(e-1,o,i.noPrevious(),!0,!1),r(e+1,l,i.noNext(),!1,!0)]}}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function e(e){var t=/[A-Z]/g,n="-";return e.replace(t,function(e,t){return(t?n:"")+e.toLowerCase()})}var t={placement:"top",animation:!0,popupDelay:0},n={mouseenter:"mouseleave",click:"click",focus:"blur"},a={};this.options=function(e){angular.extend(a,e)},this.setTriggers=function(e){angular.extend(n,e)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(i,r,o,l,s,c,u){return function(i,p,d){function f(e){var t=e||m.trigger||d,a=n[t]||t;return{show:t,hide:a}}var m=angular.extend({},t,a),g=e(i),h=u.startSymbol(),v=u.endSymbol(),b="<"+g+"-popup "+'title="'+h+"tt_title"+v+'" '+'content="'+h+"tt_content"+v+'" '+'placement="'+h+"tt_placement"+v+'" '+'animation="tt_animation()" '+'is-open="tt_isOpen"'+">"+"</"+g+"-popup>";return{restrict:"EA",scope:!0,link:function(e,t,n){function a(){e.tt_isOpen?d():u()}function u(){e.tt_popupDelay?$=o(g,e.tt_popupDelay):e.$apply(g)}function d(){e.$apply(function(){h()})}function g(){var n,a,i,r;if(e.tt_content){switch(v&&o.cancel(v),w.css({top:0,left:0,display:"block"}),k?(y=y||s.find("body"),y.append(w)):t.after(w),n=k?c.offset(t):c.position(t),a=w.prop("offsetWidth"),i=w.prop("offsetHeight"),e.tt_placement){case"right":r={top:n.top+n.height/2-i/2,left:n.left+n.width};break;case"bottom":r={top:n.top+n.height,left:n.left+n.width/2-a/2};break;case"left":r={top:n.top+n.height/2-i/2,left:n.left-a};break;default:r={top:n.top-i,left:n.left+n.width/2-a/2}}r.top+="px",r.left+="px",w.css(r),e.tt_isOpen=!0}}function h(){e.tt_isOpen=!1,o.cancel($),angular.isDefined(e.tt_animation)&&e.tt_animation()?v=o(function(){w.remove()},500):w.remove()}var v,$,y,w=r(b)(e),k=angular.isDefined(m.appendToBody)?m.appendToBody:!1,D=f(void 0),x=!1;e.tt_isOpen=!1,n.$observe(i,function(t){e.tt_content=t}),n.$observe(p+"Title",function(t){e.tt_title=t}),n.$observe(p+"Placement",function(t){e.tt_placement=angular.isDefined(t)?t:m.placement}),n.$observe(p+"Animation",function(t){e.tt_animation=angular.isDefined(t)?l(t):function(){return m.animation}}),n.$observe(p+"PopupDelay",function(t){var n=parseInt(t,10);e.tt_popupDelay=isNaN(n)?m.popupDelay:n}),n.$observe(p+"Trigger",function(e){x&&(t.unbind(D.show,u),t.unbind(D.hide,d)),D=f(e),D.show===D.hide?t.bind(D.show,a):(t.bind(D.show,u),t.bind(D.hide,d)),x=!0}),n.$observe(p+"AppendToBody",function(t){k=angular.isDefined(t)?l(t)(e):k}),k&&e.$on("$locationChangeSuccess",function(){e.tt_isOpen&&h()}),e.$on("$destroy",function(){e.tt_isOpen?h():w.remove()})}}}}]}).directive("tooltipPopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(e){return e("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"E",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(e){return e("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$compile","$timeout","$parse","$window","$tooltip",function(e,t,n,a,i){return i("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",["ui.bootstrap.transition"]).constant("progressConfig",{animate:!0,autoType:!1,stackedTypes:["success","info","warning","danger"]}).controller("ProgressBarController",["$scope","$attrs","progressConfig",function(e,t,n){function a(e){return o[e]}var i=angular.isDefined(t.animate)?e.$eval(t.animate):n.animate,r=angular.isDefined(t.autoType)?e.$eval(t.autoType):n.autoType,o=angular.isDefined(t.stackedTypes)?e.$eval("["+t.stackedTypes+"]"):n.stackedTypes;this.makeBar=function(e,t,n){var o=angular.isObject(e)?e.value:e||0,l=angular.isObject(t)?t.value:t||0,s=angular.isObject(e)&&angular.isDefined(e.type)?e.type:r?a(n||0):null;return{from:l,to:o,type:s,animate:i}},this.addBar=function(t){e.bars.push(t),e.totalPercent+=t.to},this.clearBars=function(){e.bars=[],e.totalPercent=0},this.clearBars()}]).directive("progress",function(){return{restrict:"EA",replace:!0,controller:"ProgressBarController",scope:{value:"=percent",onFull:"&",onEmpty:"&"},templateUrl:"template/progressbar/progress.html",link:function(e,t,n,a){e.$watch("value",function(e,t){if(a.clearBars(),angular.isArray(e))for(var n=0,i=e.length;i>n;n++)a.addBar(a.makeBar(e[n],t[n],n));else a.addBar(a.makeBar(e,t))},!0),e.$watch("totalPercent",function(t){t>=100?e.onFull():0>=t&&e.onEmpty()},!0)}}}).directive("progressbar",["$transition",function(e){return{restrict:"EA",replace:!0,scope:{width:"=",old:"=",type:"=",animate:"="},templateUrl:"template/progressbar/bar.html",link:function(t,n){t.$watch("width",function(a){t.animate?(n.css("width",t.old+"%"),e(n,{width:a+"%"})):n.css("width",a+"%")})}}}]),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","$parse","ratingConfig",function(e,t,n,a){this.maxRange=angular.isDefined(t.max)?e.$parent.$eval(t.max):a.max,this.stateOn=angular.isDefined(t.stateOn)?e.$parent.$eval(t.stateOn):a.stateOn,this.stateOff=angular.isDefined(t.stateOff)?e.$parent.$eval(t.stateOff):a.stateOff,this.createDefaultRange=function(e){for(var t={stateOn:this.stateOn,stateOff:this.stateOff},n=Array(e),a=0;e>a;a++)n[a]=t;return n},this.normalizeRange=function(e){for(var t=0,n=e.length;n>t;t++)e[t].stateOn=e[t].stateOn||this.stateOn,e[t].stateOff=e[t].stateOff||this.stateOff;return e},e.range=angular.isDefined(t.ratingStates)?this.normalizeRange(angular.copy(e.$parent.$eval(t.ratingStates))):this.createDefaultRange(this.maxRange),e.rate=function(t){e.readonly||e.value===t||(e.value=t)},e.enter=function(t){e.readonly||(e.val=t),e.onHover({value:t})},e.reset=function(){e.val=angular.copy(e.value),e.onLeave()},e.$watch("value",function(t){e.val=t}),e.readonly=!1,t.readonly&&e.$parent.$watch(n(t.readonly),function(t){e.readonly=!!t})}]).directive("rating",function(){return{restrict:"EA",scope:{value:"=",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0}}),angular.module("ui.bootstrap.tabs",[]).directive("tabs",function(){return function(){throw Error("The `tabs` directive is deprecated, please migrate to `tabset`. Instructions can be found at http://github.com/angular-ui/bootstrap/tree/master/CHANGELOG.md")}}).controller("TabsetController",["$scope","$element",function(e){var t=this,n=t.tabs=e.tabs=[];t.select=function(e){angular.forEach(n,function(e){e.active=!1}),e.active=!0},t.addTab=function(e){n.push(e),(1===n.length||e.active)&&t.select(e)},t.removeTab=function(e){var a=n.indexOf(e);if(e.active&&n.length>1){var i=a==n.length-1?a-1:a+1;t.select(n[i])}n.splice(a,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,require:"^tabset",scope:{},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",compile:function(e,t,n){return function(e,t,a,i){e.vertical=angular.isDefined(a.vertical)?e.$parent.$eval(a.vertical):!1,e.type=angular.isDefined(a.type)?e.$parent.$eval(a.type):"tabs",e.direction=angular.isDefined(a.direction)?e.$parent.$eval(a.direction):"top",e.tabsAbove="below"!=e.direction,i.$scope=e,i.$transcludeFn=n}}}}).directive("tab",["$parse","$http","$templateCache","$compile",function(e){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(t,n,a){return function(t,n,i,r){var o,l;
    i.active?(o=e(i.active),l=o.assign,t.$parent.$watch(o,function(e){t.active=!!e}),t.active=o(t.$parent)):l=o=angular.noop,t.$watch("active",function(e){l(t.$parent,e),e?(r.select(t),t.onSelect()):t.onDeselect()}),t.disabled=!1,i.disabled&&t.$parent.$watch(e(i.disabled),function(e){t.disabled=!!e}),t.select=function(){t.disabled||(t.active=!0)},r.addTab(t),t.$on("$destroy",function(){r.removeTab(t)}),t.active&&l(t.$parent,!0),t.$transcludeFn=a}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(e,t){e.$watch("headingElement",function(e){e&&(t.html(""),t.append(e))})}}}]).directive("tabContentTransclude",["$compile","$parse",function(){function e(e){return e.tagName&&(e.hasAttribute("tab-heading")||e.hasAttribute("data-tab-heading")||"tab-heading"===e.tagName.toLowerCase()||"data-tab-heading"===e.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(t,n,a){var i=t.$eval(a.tabContentTransclude);i.$transcludeFn(i.$parent,function(t){angular.forEach(t,function(t){e(t)?i.headingElement=t:n.append(t)})})}}}]).directive("tabsetTitles",["$http",function(){return{restrict:"A",require:"^tabset",templateUrl:"template/tabs/tabset-titles.html",replace:!0,link:function(e,t,n,a){e.$eval(n.tabsetTitles)?a.$transcludeFn(a.$scope.$parent,function(e){t.append(e)}):t.remove()}}}]),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:["AM","PM"],readonlyInput:!1,mousewheel:!0}).directive("timepicker",["$parse","$log","timepickerConfig",function(e,t,n){return{restrict:"EA",require:"?^ngModel",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,i,r,o){function l(){var e=parseInt(a.hours,10),t=a.showMeridian?e>0&&13>e:e>=0&&24>e;return t?(a.showMeridian&&(12===e&&(e=0),a.meridian===g[1]&&(e+=12)),e):void 0}function s(){var e=parseInt(a.minutes,10);return e>=0&&60>e?e:void 0}function c(e){return angular.isDefined(e)&&2>(""+e).length?"0"+e:e}function u(e){p(),o.$setViewValue(new Date(m)),d(e)}function p(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function d(e){var t=m.getHours(),n=m.getMinutes();a.showMeridian&&(t=0===t||12===t?12:t%12),a.hours="h"===e?t:c(t),a.minutes="m"===e?n:c(n),a.meridian=12>m.getHours()?g[0]:g[1]}function f(e){var t=new Date(m.getTime()+6e4*e);m.setHours(t.getHours(),t.getMinutes()),u()}if(o){var m=new Date,g=n.meridians,h=n.hourStep;r.hourStep&&a.$parent.$watch(e(r.hourStep),function(e){h=parseInt(e,10)});var v=n.minuteStep;r.minuteStep&&a.$parent.$watch(e(r.minuteStep),function(e){v=parseInt(e,10)}),a.showMeridian=n.showMeridian,r.showMeridian&&a.$parent.$watch(e(r.showMeridian),function(e){if(a.showMeridian=!!e,o.$error.time){var t=l(),n=s();angular.isDefined(t)&&angular.isDefined(n)&&(m.setHours(t),u())}else d()});var b=i.find("input"),$=b.eq(0),y=b.eq(1),w=angular.isDefined(r.mousewheel)?a.$eval(r.mousewheel):n.mousewheel;if(w){var k=function(e){e.originalEvent&&(e=e.originalEvent);var t=e.wheelDelta?e.wheelDelta:-e.deltaY;return e.detail||t>0};$.bind("mousewheel wheel",function(e){a.$apply(k(e)?a.incrementHours():a.decrementHours()),e.preventDefault()}),y.bind("mousewheel wheel",function(e){a.$apply(k(e)?a.incrementMinutes():a.decrementMinutes()),e.preventDefault()})}if(a.readonlyInput=angular.isDefined(r.readonlyInput)?a.$eval(r.readonlyInput):n.readonlyInput,a.readonlyInput)a.updateHours=angular.noop,a.updateMinutes=angular.noop;else{var D=function(e,t){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(e)&&(a.invalidHours=e),angular.isDefined(t)&&(a.invalidMinutes=t)};a.updateHours=function(){var e=l();angular.isDefined(e)?(m.setHours(e),u("h")):D(!0)},$.bind("blur",function(){!a.validHours&&10>a.hours&&a.$apply(function(){a.hours=c(a.hours)})}),a.updateMinutes=function(){var e=s();angular.isDefined(e)?(m.setMinutes(e),u("m")):D(void 0,!0)},y.bind("blur",function(){!a.invalidMinutes&&10>a.minutes&&a.$apply(function(){a.minutes=c(a.minutes)})})}o.$render=function(){var e=o.$modelValue?new Date(o.$modelValue):null;isNaN(e)?(o.$setValidity("time",!1),t.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(e&&(m=e),p(),d())},a.incrementHours=function(){f(60*h)},a.decrementHours=function(){f(60*-h)},a.incrementMinutes=function(){f(v)},a.decrementMinutes=function(){f(-v)},a.toggleMeridian=function(){f(720*(12>m.getHours()?1:-1))}}}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(e){var t=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(n){var a=n.match(t);if(!a)throw Error("Expected typeahead specification in form of '_modelValue_ (as _label_)? for _item_ in _collection_' but got '"+n+"'.");return{itemName:a[3],source:e(a[4]),viewMapper:e(a[2]||a[1]),modelMapper:e(a[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(e,t,n,a,i,r,o){var l=[9,13,27,38,40];return{require:"ngModel",link:function(s,c,u,p){var d=s.$eval(u.typeaheadMinLength)||1,f=s.$eval(u.typeaheadWaitMs)||0,m=s.$eval(u.typeaheadEditable)!==!1,g=t(u.typeaheadLoading).assign||angular.noop,h=t(u.typeaheadOnSelect),v=u.typeaheadInputFormatter?t(u.typeaheadInputFormatter):void 0,b=t(u.ngModel).assign,$=o.parse(u.typeahead),y=angular.element("<typeahead-popup></typeahead-popup>");y.attr({matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(u.typeaheadTemplateUrl)&&y.attr("template-url",u.typeaheadTemplateUrl);var w=s.$new();s.$on("$destroy",function(){w.$destroy()});var k=function(){w.matches=[],w.activeIdx=-1},D=function(e){var t={$viewValue:e};g(s,!0),n.when($.source(w,t)).then(function(n){if(e===p.$viewValue){if(n.length>0){w.activeIdx=0,w.matches.length=0;for(var a=0;n.length>a;a++)t[$.itemName]=n[a],w.matches.push({label:$.viewMapper(w,t),model:n[a]});w.query=e,w.position=r.position(c),w.position.top=w.position.top+c.prop("offsetHeight")}else k();g(s,!1)}},function(){k(),g(s,!1)})};k(),w.query=void 0;var x;p.$parsers.unshift(function(e){return k(),e&&e.length>=d&&(f>0?(x&&a.cancel(x),x=a(function(){D(e)},f)):D(e)),m?e:(p.$setValidity("editable",!1),void 0)}),p.$formatters.push(function(e){var t,n,a={};return v?(a.$model=e,v(s,a)):(a[$.itemName]=e,t=$.viewMapper(s,a),a[$.itemName]=void 0,n=$.viewMapper(s,a),t!==n?t:e)}),w.select=function(e){var t,n,a={};a[$.itemName]=n=w.matches[e].model,t=$.modelMapper(s,a),b(s,t),p.$setValidity("editable",!0),h(s,{$item:n,$model:t,$label:$.viewMapper(s,a)}),k(),c[0].focus()},c.bind("keydown",function(e){0!==w.matches.length&&-1!==l.indexOf(e.which)&&(e.preventDefault(),40===e.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===e.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===e.which||9===e.which?w.$apply(function(){w.select(w.activeIdx)}):27===e.which&&(e.stopPropagation(),k(),w.$digest()))});var T=function(e){c[0]!==e.target&&(k(),w.$digest())};i.bind("click",T),s.$on("$destroy",function(){i.unbind("click",T)}),c.after(e(y)(w))}}}]).directive("typeaheadPopup",function(){return{restrict:"E",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(e,t,n){e.templateUrl=n.templateUrl,e.isOpen=function(){return e.matches.length>0},e.isActive=function(t){return e.active==t},e.selectActive=function(t){e.active=t},e.selectMatch=function(t){e.select({activeIdx:t})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(e,t,n,a){return{restrict:"E",scope:{index:"=",match:"=",query:"="},link:function(i,r,o){var l=a(o.templateUrl)(i.$parent)||"template/typeahead/typeahead-match.html";e.get(l,{cache:t}).success(function(e){r.replaceWith(n(e.trim())(i))})}}}]).filter("typeaheadHighlight",function(){function e(e){return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(t,n){return n?t.replace(RegExp(e(n),"gi"),"<strong>$&</strong>"):t}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(e){e.put("template/accordion/accordion-group.html",'<div class="accordion-group">\n  <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-body" collapse="!isOpen">\n    <div class="accordion-inner" ng-transclude></div>  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(e){e.put("template/accordion/accordion.html",'<div class="accordion" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(e){e.put("template/alert/alert.html","<div class='alert' ng-class='type && \"alert-\" + type'>\n    <button ng-show='closeable' type='button' class='close' ng-click='close()'>&times;</button>\n    <div ng-transclude></div>\n</div>\n")}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(e){e.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(e){e.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/datepicker.html",'<table>\n  <thead>\n    <tr class="text-center">\n      <th><button type="button" class="btn pull-left" ng-click="move(-1)"><i class="icon-chevron-left"></i></button></th>\n      <th colspan="{{rows[0].length - 2 + showWeekNumbers}}"><button type="button" class="btn btn-block" ng-click="toggleMode()"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn pull-right" ng-click="move(1)"><i class="icon-chevron-right"></i></button></th>\n    </tr>\n    <tr class="text-center" ng-show="labels.length > 0">\n      <th ng-show="showWeekNumbers">#</th>\n      <th ng-repeat="label in labels">{{label}}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows">\n      <td ng-show="showWeekNumbers" class="text-center"><em>{{ getWeekNumber(row) }}</em></td>\n      <td ng-repeat="dt in row" class="text-center">\n        <button type="button" style="width:100%;" class="btn" ng-class="{\'btn-info\': dt.selected}" ng-click="select(dt.date)" ng-disabled="dt.disabled"><span ng-class="{muted: dt.secondary}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(e){e.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" class="dropdown-menu">\n	<li ng-transclude></li>\n	<li class="divider"></li>\n	<li style="padding: 9px;">\n		<span class="btn-group">\n			<button class="btn btn-small btn-inverse" ng-click="today()">Today</button>\n			<button class="btn btn-small btn-info" ng-click="showWeeks = ! showWeeks" ng-class="{active: showWeeks}">Weeks</button>\n			<button class="btn btn-small btn-danger" ng-click="clear()">Clear</button>\n		</span>\n		<button class="btn btn-small btn-success pull-right" ng-click="isOpen = false">Close</button>\n	</li>\n</ul>')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(e){e.put("template/modal/backdrop.html",'<div class="modal-backdrop fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1040 + index*10}" ng-click="close($event)"></div>')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(e){e.put("template/modal/window.html",'<div class="modal fade {{ windowClass }}" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10}" ng-transclude></div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(e){e.put("template/pagination/pager.html",'<div class="pager">\n  <ul>\n    <li ng-repeat="page in pages" ng-class="{disabled: page.disabled, previous: page.previous, next: page.next}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(e){e.put("template/pagination/pagination.html",'<div class="pagination"><ul>\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(e){e.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(e){e.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(e){e.put("template/progressbar/bar.html",'<div class="bar" ng-class=\'type && "bar-" + type\'></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(e){e.put("template/progressbar/progress.html",'<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(e){e.put("template/rating/rating.html",'<span ng-mouseleave="reset()">\n	<i ng-repeat="r in range" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" ng-class="$index < val && (r.stateOn || \'icon-star\') || (r.stateOff || \'icon-star-empty\')"></i>\n</span>')}]),angular.module("template/tabs/pane.html",[]).run(["$templateCache",function(e){e.put("template/tabs/pane.html",'<div class="tab-pane" ng-class="{active: selected}" ng-show="selected" ng-transclude></div>\n')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabs.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tabs.html",'<div class="tabbable">\n  <ul class="nav nav-tabs">\n    <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">\n      <a ng-click="select(pane)">{{pane.heading}}</a>\n    </li>\n  </ul>\n  <div class="tab-content" ng-transclude></div>\n</div>\n')}]),angular.module("template/tabs/tabset-titles.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tabset-titles.html","<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(e){e.put("template/tabs/tabset.html",'\n<div class="tabbable" ng-class="{\'tabs-right\': direction == \'right\', \'tabs-left\': direction == \'left\', \'tabs-below\': direction == \'below\'}">\n  <div tabset-titles="tabsAbove"></div>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n  <div tabset-titles="!tabsAbove"></div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(e){e.put("template/timepicker/timepicker.html",'<table class="form-inline">\n	<tr class="text-center">\n		<td><a ng-click="incrementHours()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="incrementMinutes()" class="btn btn-link"><i class="icon-chevron-up"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n	<tr>\n		<td class="control-group" ng-class="{\'error\': invalidHours}"><input type="text" ng-model="hours" ng-change="updateHours()" class="span1 text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2" /></td>\n		<td>:</td>\n		<td class="control-group" ng-class="{\'error\': invalidMinutes}"><input type="text" ng-model="minutes" ng-change="updateMinutes()" class="span1 text-center" ng-readonly="readonlyInput" maxlength="2"></td>\n		<td ng-show="showMeridian"><button type="button" ng-click="toggleMeridian()" class="btn text-center">{{meridian}}</button></td>\n	</tr>\n	<tr class="text-center">\n		<td><a ng-click="decrementHours()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td>&nbsp;</td>\n		<td><a ng-click="decrementMinutes()" class="btn btn-link"><i class="icon-chevron-down"></i></a></td>\n		<td ng-show="showMeridian"></td>\n	</tr>\n</table>')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(e){e.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(e){e.put("template/typeahead/typeahead-popup.html",'<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)">\n        <typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></typeahead-match>\n    </li>\n</ul>')}]),angular.module("template/typeahead/typeahead.html",[]).run(["$templateCache",function(e){e.put("template/typeahead/typeahead.html",'<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)">\n        <a tabindex="-1" ng-click="selectMatch($index)" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>\n    </li>\n</ul>')}]);
define("angular-bootstrap", ["angular"], function(){});

/*
Copyright 2012 Igor Vaynberg

Version: 3.4.2 Timestamp: Mon Aug 12 15:04:12 PDT 2013

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
*/
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(a){var b,c,d,e;if(!a||a.length<1)return a;for(b="",c=0,d=a.length;d>c;c++)e=a.charAt(c),b+=m[e]||e;return b}function o(a,b){for(var c=0,d=b.length;d>c;c+=1)if(q(a,b[c]))return c;return-1}function p(){var b=a(l);b.appendTo("body");var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function q(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function r(b,c){var d,e,f;if(null===b||b.length<1)return[];for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d}function s(a){return a.outerWidth(!1)-a.width()}function t(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function u(c){c.on("mousemove",function(c){var d=i;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function v(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function w(a){var c,b=!1;return function(){return b===!1&&(c=a(),b=!0),c}}function x(a,b){var c=v(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){o(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus(),a.is(":visible")&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!h){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);h=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),h.attr("class","select2-sizer"),a("body").append(h)}return h.text(b.val()),h.width()}function D(b,c,d){var e,g,f=[];e=b.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=c.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(this))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=n(a.toUpperCase()).indexOf(n(b.toUpperCase())),f=b.length;return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page);i.callback(b)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?(b.callback(c()),void 0):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),b.callback(e),void 0)}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]};a(d?c():c).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g)}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;throw new Error(c+" must be a function or a falsy value")}function K(b){return a.isFunction(b)?b():b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(q(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,h,j,k,i={x:0,y:0},c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case c.SHIFT:case c.CTRL:case c.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z"};j=a(document),g=function(){var a=1;return function(){return a++}}(),j.on("mousemove",function(a){i.x=a.pageX,i.y=a.pageY}),d=N(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,h,i,f=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+g()),this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.body=w(function(){return c.element.closest("body")}),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss)),this.container.addClass(K(c.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),this.dropdown.addClass(K(c.dropdownCssClass)),this.dropdown.data("select2",this),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.results=d=this.container.find(f),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),u(this.results),this.dropdown.on("mousemove-filtered touchstart touchmove touchend",f,this.bind(this.highlightUnderEvent)),x(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),t(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",f,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown",function(a){a.stopPropagation()}),a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),k=k||p(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.nextSearchTerm=b},destroy:function(){var a=this.opts.element,c=a.data("select2");this.close(),this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),c!==b&&(c.container.remove(),c.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show())},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:q(a.attr("locked"),"locked")||q(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,f,g,h=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{populateResults:function(d,e,f){var g,l=this.opts.id;g=function(d,e,i){var j,k,m,n,o,p,q,r,s,t;for(d=c.sortResults(d,e,f),j=0,k=d.length;k>j;j+=1)m=d[j],o=m.disabled===!0,n=!o&&l(m)!==b,p=m.children&&m.children.length>0,q=a("<li></li>"),q.addClass("select2-results-dept-"+i),q.addClass("select2-result"),q.addClass(n?"select2-result-selectable":"select2-result-unselectable"),o&&q.addClass("select2-disabled"),p&&q.addClass("select2-result-with-children"),q.addClass(h.opts.formatResultCssClass(m)),r=a(document.createElement("div")),r.addClass("select2-result-label"),t=c.formatResult(m,r,f,h.opts.escapeMarkup),t!==b&&r.html(t),q.append(r),p&&(s=a("<ul></ul>"),s.addClass("select2-result-sub"),g(m.children,s,i+1),q.append(s)),q.data("select2-data",m),e.append(q)},g(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,i,c={results:[],more:!1},e=a.term;i=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(h.optionToData(b)):b.is("optgroup")&&(d=h.optionToData(b),b.children().each2(function(a,b){i(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){i(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id},c.formatResultCssClass=function(a){return a.css}):"query"in c||("ajax"in c?(g=c.element.data("ajax-url"),g&&g.length>0&&(c.ajax.url=g),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(r(b.val(),c.separator)).each(function(){var b=this,d=this,f=c.tags;a.isFunction(f)&&(f=f()),a(f).each(function(){return q(this.id,b)?(d=this.text,!1):void 0}),e.push({id:b,text:d})}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");return c},monitorSource:function(){var c,a=this.opts.element;a.on("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),c=this.bind(function(){var d,f=a.prop("disabled");f===b&&(f=!1),this.enable(!f);var d=a.prop("readonly");d===b&&(d=!1),this.readonly(d),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass)),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass))}),a.on("propertychange.select2 DOMAttrModified.select2",c),this.mutationCallback===b&&(this.mutationCallback=function(a){a.forEach(c)}),"undefined"!=typeof WebKitMutationObserver&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new WebKitMutationObserver(this.mutationCallback),this.propertyObserver.observe(a.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){return a===b&&(a=!1),this._readonly===a?!1:(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface(),!0)},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var q,r,s,t,b=this.dropdown,c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),g=a(window).scrollLeft()+a(window).width(),h=a(window).scrollTop()+a(window).height(),i=c.top+d,j=c.left,l=h>=i+f,m=c.top-f>=this.body().scrollTop(),n=b.outerWidth(!1),o=g>=j+n,p=b.hasClass("select2-drop-above");this.opts.dropdownAutoWidth?(t=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),n=b.outerWidth(!1)+(t.scrollHeight===t.clientHeight?0:k.width),n>e?e=n:n=e,o=g>=j+n):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body().css("position")&&(q=this.body().offset(),i-=q.top,j-=q.left),p?(r=!0,!m&&l&&(r=!1)):(r=!1,!l&&m&&(r=!0)),o||(j=c.left+e-n),r?(i=c.top-f,this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),s=a.extend({top:i,left:j,width:e},K(this.opts.dropdownCss)),b.css(s)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),!0):!1},opening:function(){var f,b=this.containerId,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body()),f=a("#select2-drop-mask"),0==f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body()),f.on("mousedown touchstart click",function(b){var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close({focus:!1}),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var h=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(){h.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerId,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open"),this.results.empty(),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),f=e.offset().top+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!0),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=e.offset().top-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?o(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.ensureHighlightVisible(),e=d.data("select2-data"),e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e}),void 0)},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),e=this.resultsPage+1,f=this,g=this.search.val(),h=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:g,page:e,context:h,matcher:this.opts.matcher,callback:this.bind(function(c){f.opened()&&(f.opts.populateResults.call(this,a,c.results,{term:g,page:e,context:h}),f.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).text(f.opts.formatLoadMore(e+1)),window.setTimeout(function(){f.loadMoreIfNeeded()},10)):b.remove(),f.positionDropdown(),f.resultsPage=e,f.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown()}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!q(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+f.formatSelectionTooBig(o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+f.formatInputTooShort(d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+f.formatInputTooLong(d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;
f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+f.formatSearching()+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return q(h.id(this),h.id(i))}).length&&g.results.unshift(i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+f.formatNoMatches(d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+h.opts.escapeMarkup(f.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var a=this.select.children().first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&a||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.text()&&""===a.val())return a}},initContainerWidth:function(){function c(){var c,d,e,f,g;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(e=d[f].replace(/\s/g,"").match(/[^-]width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),e=N(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e)),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(a){this.opened()&&(this.parent.close.apply(this,arguments),a=a||{focus:!0},this.focusser.removeAttr("disabled"),a.focus&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.removeAttr("disabled"),this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.removeAttr("disabled"),this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)},initContainer:function(){var b,d=this.container,e=this.dropdown;this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=d.find(".select2-choice"),this.focusser=d.find(".select2-focusser"),this.focusser.attr("id","s2id_autogen"+g()),a("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id")),this.focusser.attr("tabindex",this.elementTabIndex),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){if(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)return A(a),void 0;switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),void 0;case c.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(function(){document.activeElement===this.body().get(0)&&window.setTimeout(this.bind(function(){this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.ESC){if(this.opts.openOnEnter===!1&&a.which===c.ENTER)return A(a),void 0;if(a.which==c.DOWN||a.which==c.UP||a.which==c.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),A(a),void 0}return a.which==c.DELETE||a.which==c.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0}})),t(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection.focus())})),b.on("mousedown",this.bind(function(b){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(b)})),e.on("mousedown",this.bind(function(){this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:function(a){var b=this.selection.data("select2-data");if(b){var c=this.getPlaceholderOption();this.opts.element.val(c?c.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),a!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(b),choice:b}),this.triggerChange({removed:b}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder())})}},isPlaceholderOptionSelected:function(){var a;return this.opts.placeholder?(a=this.getPlaceholderOption())!==b&&a.is(":selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val():!1},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find(":selected");b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=q(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return q(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||this.selection.focus(),q(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find(":selected").each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return this.clear(c),void 0;if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),f=N(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find(":selected").each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=r(c.val(),b.separator),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return q(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(q(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)},initContainer:function(){var d,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=d=this.container.find(b);var e=this;this.selection.on("click",".select2-search-choice",function(){e.search[0].focus(),e.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+g()),a("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=d.find(".select2-search-choice-focus"),e=b.prev(".select2-search-choice:not(.select2-locked)"),f=b.next(".select2-search-choice:not(.select2-locked)"),g=z(this.search);if(b.length&&(a.which==c.LEFT||a.which==c.RIGHT||a.which==c.BACKSPACE||a.which==c.DELETE||a.which==c.ENTER)){var h=b;return a.which==c.LEFT&&e.length?h=e:a.which==c.RIGHT?h=f.length?f:null:a.which===c.BACKSPACE?(this.unselect(b.first()),this.search.width(10),h=e.length?e:f):a.which==c.DELETE?(this.unselect(b.first()),this.search.width(10),h=f.length?f:null):a.which==c.ENTER&&(h=null),this.selectChoice(h),A(a),h&&h.length||this.open(),void 0}if((a.which===c.BACKSPACE&&1==this.keydowns||a.which==c.LEFT)&&0==g.offset&&!g.length)return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;if(this.selectChoice(null),this.opened())switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),void 0;case c.ESC:return this.cancel(a),A(a),void 0}if(a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.BACKSPACE&&a.which!==c.ESC){if(a.which===c.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)&&A(a),a.which===c.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.updateResults(!0),this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c=[],d=[],e=this;a(b).each(function(){o(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){e.addSelectedChoice(this)}),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,b){this.triggerSelect(a)&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()&&this.updateResults(!0),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),b&&b.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(c){var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith("<div>"+j+"</div>"),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),this.close(),this.focusSearch()})).dequeue(),A(b))})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)},unselect:function(a){var c,d,b=this.getVal();if(a=a.closest(".select2-search-choice"),0===a.length)throw"Invalid argument: "+a+". Must be .select2-search-choice";c=a.data("select2-data"),c&&(d=o(this.id(c),b),d>=0&&(b.splice(d,1),this.setVal(b),this.select&&this.postprocessResults()),a.remove(),this.opts.element.trigger({type:"removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));o(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+g.opts.formatNoMatches(g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-s(this.search)},resizeSearch:function(){var a,b,c,d,e,f=s(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(e)},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),r(a,this.opts.separator))},setVal:function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){o(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)q(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({added:this.data(),removed:e}),void 0;if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,this.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.find(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,g,h,i,j,c=Array.prototype.slice.call(arguments,0),k=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],l=["opened","isFocused","container","dropdown"],m=["val","data"],n={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?j=d.element.prop("multiple"):(j=d.multiple||!1,"tags"in d&&(d.multiple=j=!0)),g=j?new f:new e,g.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(o(c[0],k)<0)throw"Unknown method: "+c[0];if(i=b,g=a(this).data("select2"),g===b)return;if(h=c[0],"container"===h?i=g.container:"dropdown"===h?i=g.dropdown:(n[h]&&(h=n[h]),i=g[h].apply(g,c.slice(1))),o(c[0],l)>=0||o(c[0],m)&&1==c.length)return!1}}),i===b?this:i},a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(a.text,c.term,e,d),e.join("")},formatSelection:function(a,c,d){return a?d(a.text):b},sortResults:function(a){return a},formatResultCssClass:function(){return b},formatSelectionCssClass:function(){return b},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a.id},matcher:function(a,b){return n(""+b).toUpperCase().indexOf(n(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b}},a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:v,markMatch:E,escapeMarkup:F,stripDiacritics:n},"class":{"abstract":d,single:e,multi:f}}}}(jQuery);
define("select2", function(){});

/**
 * Enhanced Select2 Dropmenus
 *
 * @AJAX Mode - When in this mode, your value will be an object (or array of objects) of the data used by Select2
 *     This change is so that you do not have to do an additional query yourself on top of Select2's own query
 * @params [options] {object} The configuration options passed to $.fn.select2(). Refer to the documentation
 */
angular.module('ui.select2', []).value('uiSelect2Config', {}).directive('uiSelect2', ['uiSelect2Config', '$timeout', function (uiSelect2Config, $timeout) {
  var options = {};
  if (uiSelect2Config) {
    angular.extend(options, uiSelect2Config);
  }
  return {
    require: 'ngModel',
    priority: 1,
    compile: function (tElm, tAttrs) {
      var watch,
        repeatOption,
        repeatAttr,
        isSelect = tElm.is('select'),
        isMultiple = angular.isDefined(tAttrs.multiple);

      // Enable watching of the options dataset if in use
      if (tElm.is('select')) {
        repeatOption = tElm.find('option[ng-repeat], option[data-ng-repeat]');

        if (repeatOption.length) {
          repeatAttr = repeatOption.attr('ng-repeat') || repeatOption.attr('data-ng-repeat');
          watch = jQuery.trim(repeatAttr.split('|')[0]).split(' ').pop();
        }
      }

      return function (scope, elm, attrs, controller) {
        // instance-specific options
        var opts = angular.extend({}, options, scope.$eval(attrs.uiSelect2));

        /*
        Convert from Select2 view-model to Angular view-model.
        */
        var convertToAngularModel = function(select2_data) {
          var model;
          if (opts.simple_tags) {
            model = [];
            angular.forEach(select2_data, function(value, index) {
              model.push(value.id);
            });
          } else {
            model = select2_data;
          }
          return model;
        };

        /*
        Convert from Angular view-model to Select2 view-model.
        */
        var convertToSelect2Model = function(angular_data) {
          var model = [];
          if (!angular_data) {
            return model;
          }

          if (opts.simple_tags) {
            model = [];
            angular.forEach(
              angular_data,
              function(value, index) {
                model.push({'id': value, 'text': value});
              });
          } else {
            model = angular_data;
          }
          return model;
        };

        if (isSelect) {
          // Use <select multiple> instead
          delete opts.multiple;
          delete opts.initSelection;
        } else if (isMultiple) {
          opts.multiple = true;
        }

        if (controller) {
          // Watch the model for programmatic changes
           scope.$watch(tAttrs.ngModel, function(current, old) {
            if (!current) {
              return;
            }
            if (current === old) {
              return;
            }
            controller.$render();
          }, true);
          controller.$render = function () {
            if (isSelect) {
              elm.select2('val', controller.$viewValue);
            } else {
              if (opts.multiple) {
                elm.select2(
                  'data', convertToSelect2Model(controller.$viewValue));
              } else {
                if (angular.isObject(controller.$viewValue)) {
                  elm.select2('data', controller.$viewValue);
                } else if (!controller.$viewValue) {
                  elm.select2('data', null);
                } else {
                  elm.select2('val', controller.$viewValue);
                }
              }
            }
          };

          // Watch the options dataset for changes
          if (watch) {
            scope.$watch(watch, function (newVal, oldVal, scope) {
              if (angular.equals(newVal, oldVal)) {
                return;
              }
              // Delayed so that the options have time to be rendered
              $timeout(function () {
                elm.select2('val', controller.$viewValue);
                // Refresh angular to remove the superfluous option
                elm.trigger('change');
                if(newVal && !oldVal && controller.$setPristine) {
                  controller.$setPristine(true);
                }
              });
            });
          }

          // Update valid and dirty statuses
          controller.$parsers.push(function (value) {
            var div = elm.prev();
            div
              .toggleClass('ng-invalid', !controller.$valid)
              .toggleClass('ng-valid', controller.$valid)
              .toggleClass('ng-invalid-required', !controller.$valid)
              .toggleClass('ng-valid-required', controller.$valid)
              .toggleClass('ng-dirty', controller.$dirty)
              .toggleClass('ng-pristine', controller.$pristine);
            return value;
          });

          if (!isSelect) {
            // Set the view and model value and update the angular template manually for the ajax/multiple select2.
            elm.bind("change", function () {
              if (scope.$$phase || scope.$root.$$phase) {
                return;
              }
              scope.$apply(function () {
                controller.$setViewValue(
                  convertToAngularModel(elm.select2('data')));
              });
            });

            if (opts.initSelection) {
              var initSelection = opts.initSelection;
              opts.initSelection = function (element, callback) {
                initSelection(element, function (value) {
                  controller.$setViewValue(convertToAngularModel(value));
                  callback(value);
                });
              };
            }
          }
        }

        elm.bind("$destroy", function() {
          elm.select2("destroy");
        });

        attrs.$observe('disabled', function (value) {
          elm.select2('enable', !value);
        });

        attrs.$observe('readonly', function (value) {
          elm.select2('readonly', !!value);
        });

        if (attrs.ngMultiple) {
          scope.$watch(attrs.ngMultiple, function(newVal) {
            elm.select2(opts);
          });
        }

        // Initialize the plugin late so that the injected DOM does not disrupt the template compiler
        $timeout(function () {
          elm.select2(opts);

          // Set initial value - I'm not sure about this but it seems to need to be there
          elm.val(controller.$viewValue);
          // important!
          controller.$render();

          // Not sure if I should just check for !isSelect OR if I should check for 'tags' key
          if (!opts.initSelection && !isSelect) {
            controller.$setViewValue(
              convertToAngularModel(elm.select2('data'))
            );
          }
        });
      };
    }
  };
}]);
define("angular-select2", ["angular","select2"], function(){});

/*! ngTable v0.3.2 by Vitalii Savchuk(esvit666@gmail.com) - https://github.com/esvit/ng-table - New BSD License */
!function(a,b){"use strict";return"function"==typeof define&&define.amd?(define('angular-table',["angular"],function(a){return b(a)}),void 0):b(a)}(angular||null,function(a){"use strict";var b=a.module("ngTable",[]);b.factory("ngTableParams",["$q","$log",function(b,c){var d=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},e=function(e,f){var g=this,h=function(){j.debugMode&&c.debug&&c.debug.apply(this,arguments)};this.data=[],this.parameters=function(b,c){if(c=c||!1,a.isDefined(b)){for(var e in b){var f=b[e];if(c&&e.indexOf("[")>=0){for(var g=e.split(/\[(.*)\]/).reverse(),j="",k=0,l=g.length;l>k;k++){var m=g[k];if(""!==m){var n=f;f={},f[j=m]=d(n)?parseFloat(n):n}}"sorting"===j&&(i[j]={}),i[j]=a.extend(i[j]||{},f[j])}else i[e]=d(b[e])?parseFloat(b[e]):b[e]}return h("ngTable: set parameters",i),this}return i},this.settings=function(b){return a.isDefined(b)?(a.isArray(b.data)&&(b.total=b.data.length),j=a.extend(j,b),h("ngTable: set settings",j),this):j},this.page=function(b){return a.isDefined(b)?this.parameters({page:b}):i.page},this.total=function(b){return a.isDefined(b)?this.settings({total:b}):j.total},this.count=function(b){return a.isDefined(b)?this.parameters({count:b,page:1}):i.count},this.filter=function(b){return a.isDefined(b)?this.parameters({filter:b}):i.filter},this.sorting=function(b){if(2==arguments.length){var c={};return c[b]=arguments[1],this.parameters({sorting:c}),this}return a.isDefined(b)?this.parameters({sorting:b}):i.sorting},this.isSortBy=function(b,c){return a.isDefined(i.sorting[b])&&i.sorting[b]==c},this.orderBy=function(){var a=[];for(var b in i.sorting)a.push(("asc"===i.sorting[b]?"+":"-")+b);return a},this.getData=function(b,c){a.isArray(this.data)&&a.isObject(c)?b.resolve(this.data.slice((c.page()-1)*c.count(),c.page()*c.count())):b.resolve([])},this.getGroups=function(c,d){var e=b.defer();e.promise.then(function(b){var e={};a.forEach(b,function(b){var c=a.isFunction(d)?d(b):b[d];e[c]=e[c]||{data:[]},e[c].value=c,e[c].data.push(b)});var f=[];for(var g in e)f.push(e[g]);h("ngTable: refresh groups",f),c.resolve(f)}),this.getData(e,g)},this.generatePagesArray=function(a,b,c){var d,e,f,g,h,i;if(d=11,i=[],h=Math.ceil(b/c),h>1){i.push({type:"prev",number:Math.max(1,a-1),active:a>1}),i.push({type:"first",number:1,active:a>1}),f=Math.round((d-5)/2),g=Math.max(2,a-f),e=Math.min(h-1,a+2*f-(a-g)),g=Math.max(2,g-(2*f-(e-g)));for(var j=g;e>=j;)j===g&&2!==j||j===e&&j!==h-1?i.push({type:"more",active:!1}):i.push({type:"page",number:j,active:a!==j}),j++;i.push({type:"last",number:h,active:a!==h}),i.push({type:"next",number:Math.min(h,a+1),active:h>a})}return i},this.url=function(b){b=b||!1;var c=b?[]:{};for(var d in i)if(i.hasOwnProperty(d)){var e=i[d],f=encodeURIComponent(d);if("object"==typeof e){for(var g in e)if(!a.isUndefined(e[g])&&""!==e[g]){var h=f+"["+encodeURIComponent(g)+"]";b?c.push(h+"="+e[g]):c[h]=e[g]}}else a.isFunction(e)||a.isUndefined(e)||""===e||(b?c.push(f+"="+encodeURIComponent(e)):c[f]=encodeURIComponent(e))}return c},this.reload=function(){var a=b.defer(),c=this;j.$loading=!0,j.groupBy?j.getGroups(a,j.groupBy,this):j.getData(a,this),h("ngTable: reload data"),a.promise.then(function(a){j.$loading=!1,h("ngTable: current scope",j.$scope),c.data=j.groupBy?j.$scope.$groups=a:j.$scope.$data=a,j.$scope.pages=c.generatePagesArray(c.page(),c.total(),c.count()),j.$scope.$emit("ngTableAfterReloadData")})},this.reloadPages=function(){var a=this;j.$scope.pages=a.generatePagesArray(a.page(),a.total(),a.count())};var i=this.$params={page:1,count:1,filter:{},sorting:{},group:{},groupBy:null},j={$scope:null,$loading:!1,data:null,total:0,defaultSort:"desc",filterDelay:750,counts:[10,25,50,100],getGroups:this.getGroups,getData:this.getData};return this.settings(f),this.parameters(e,!0),this};return e}]);var c=["$scope","ngTableParams","$timeout",function(b,c,d){b.$loading=!1,b.params||(b.params=new c),b.params.settings().$scope=b;var e=function(){var a=0;return function(b,c){d.cancel(a),a=d(b,c)}}();b.$watch("params.$params",function(c,d){b.params.settings().$scope=b,a.equals(c.filter,d.filter)?b.params.reload():e(function(){b.params.$params.page=1,b.params.reload()},b.params.settings().filterDelay)},!0),b.sortBy=function(a,c){var d=b.parse(a.sortable);if(d){var e=b.params.settings().defaultSort,f="asc"===e?"desc":"asc",g=b.params.sorting()&&b.params.sorting()[d]&&b.params.sorting()[d]===e,h=c.ctrlKey||c.metaKey?b.params.sorting():{};h[d]=g?f:e,b.params.parameters({sorting:h})}}}];return b.directive("ngTable",["$compile","$q","$parse",function(b,d,e){return{restrict:"A",priority:1001,scope:!0,controller:c,compile:function(c){var d=[],f=0,g=null,h=c.find("thead");return a.forEach(a.element(c.find("tr")),function(b){b=a.element(b),b.hasClass("ng-table-group")||g||(g=b)}),g?(a.forEach(g.find("td"),function(b){var c=a.element(b);if(!c.attr("ignore-cell")||"true"!==c.attr("ignore-cell")){var g=function(a,b){return function(f){return e(c.attr("x-data-"+a)||c.attr("data-"+a)||c.attr(a))(f,{$columns:d})||b}},h=g("title"," "),i=g("header",!1),j=g("filter",!1)(),k=!1,l=!1;j&&j.$$name&&(l=j.$$name,delete j.$$name),j&&j.templateURL&&(k=j.templateURL,delete j.templateURL),c.attr("data-title-text",h()),d.push({id:f++,title:h,sortable:g("sortable",!1),"class":c.attr("x-data-header-class")||c.attr("data-header-class")||c.attr("header-class"),filter:j,filterTemplateURL:k,filterName:l,headerTemplateURL:i,filterData:c.attr("filter-data")?c.attr("filter-data"):null,show:c.attr("ng-show")?function(a){return e(c.attr("ng-show"))(a)}:function(){return!0}})}}),function(c,f,g){if(c.$loading=!1,c.$columns=d,c.$watch(g.ngTable,function(b){a.isUndefined(b)||(c.paramsModel=e(g.ngTable),c.params=b)},!0),c.parse=function(b){return a.isDefined(b)?b(c):""},g.showFilter&&c.$parent.$watch(g.showFilter,function(a){c.show_filter=a}),a.forEach(d,function(b){var d;if(b.filterData){if(d=e(b.filterData)(c,{$column:b}),!a.isObject(d)||!a.isObject(d.promise))throw new Error("Function "+b.filterData+" must be instance of $q.defer()");return delete b.filterData,d.promise.then(function(c){a.isArray(c)||(c=[]),c.unshift({title:"-",id:""}),b.data=c})}}),!f.hasClass("ng-table")){c.templates={header:g.templateHeader?g.templateHeader:"ng-table/header.html",pagination:g.templatePagination?g.templatePagination:"ng-table/pager.html"};var i=h.length>0?h:a.element(document.createElement("thead")).attr("ng-include","templates.header"),j=a.element(document.createElement("div")).attr({"ng-table-pagination":"params","template-url":"templates.pagination"});f.find("thead").remove(),f.addClass("ng-table").prepend(i).after(j),b(i)(c),b(j)(c)}}):void 0}}}]),b.directive("ngTablePagination",["$compile",function(b){return{restrict:"A",scope:{params:"=ngTablePagination",templateUrl:"="},replace:!1,link:function(c,d){c.params.settings().$scope.$on("ngTableAfterReloadData",function(){c.pages=c.params.generatePagesArray(c.params.page(),c.params.total(),c.params.count())},!0),c.$watch("templateUrl",function(e){if(!a.isUndefined(e)){var f=a.element(document.createElement("div"));f.attr({"ng-include":"templateUrl"}),d.append(f),b(f)(c)}})}}}]),a.module("ngTable").run(["$templateCache",function(a){a.put("ng-table/filters/select-multiple.html",'<select ng-options="data.id as data.title for data in column.data" multiple ng-multiple="true" ng-model="params.filter()[name]" ng-show="filter==\'select-multiple\'" class="filter filter-select-multiple form-control" name="{{column.filterName}}"> </select>'),a.put("ng-table/filters/select.html",'<select ng-options="data.id as data.title for data in column.data" ng-model="params.filter()[name]" ng-show="filter==\'select\'" class="filter filter-select form-control" name="{{column.filterName}}"> </select>'),a.put("ng-table/filters/text.html",'<input type="text" name="{{column.filterName}}" ng-model="params.filter()[name]" ng-if="filter==\'text\'" class="input-filter form-control"/>'),a.put("ng-table/header.html",'<tr> <th ng-repeat="column in $columns" ng-class="{ \'sortable\': parse(column.sortable), \'sort-asc\': params.sorting()[parse(column.sortable)]==\'asc\', \'sort-desc\': params.sorting()[parse(column.sortable)]==\'desc\' }" ng-click="sortBy(column, $event)" ng-show="column.show(this)" ng-init="template=column.headerTemplateURL(this)" class="header {{column.class}}"> <div ng-if="!template" ng-show="!template" ng-bind="parse(column.title)"></div> <div ng-if="template" ng-show="template"><div ng-include="template"></div></div> </th> </tr> <tr ng-show="show_filter" class="ng-table-filters"> <th ng-repeat="column in $columns" ng-show="column.show(this)" class="filter"> <div ng-repeat="(name, filter) in column.filter"> <div ng-if="column.filterTemplateURL" ng-show="column.filterTemplateURL"> <div ng-include="column.filterTemplateURL"></div> </div> <div ng-if="!column.filterTemplateURL" ng-show="!column.filterTemplateURL"> <div ng-include="\'ng-table/filters/\' + filter + \'.html\'"></div> </div> </div> </th> </tr>'),a.put("ng-table/pager.html",'<div class="ng-cloak ng-table-pager"> <div ng-if="params.settings().counts.length" class="ng-table-counts btn-group pull-right"> <button ng-repeat="count in params.settings().counts" type="button" ng-class="{\'active\':params.count()==count}" ng-click="params.count(count)" class="btn btn-default"> <span ng-bind="count"></span> </button> </div> <ul class="pagination ng-table-pagination"> <li ng-class="{\'disabled\': !page.active}" ng-repeat="page in pages" ng-switch="page.type"> <a ng-switch-when="prev" ng-click="params.page(page.number)" href="">&laquo;</a> <a ng-switch-when="first" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="page" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="more" ng-click="params.page(page.number)" href="">&#8230;</a> <a ng-switch-when="last" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="next" ng-click="params.page(page.number)" href="">&raquo;</a> </li> </ul> </div> ')}]),b});
/*
 jQuery Simple Slider

 Copyright (c) 2012 James Smith (http://loopj.com)

 Licensed under the MIT license (http://mit-license.org/)
*/

var __slice = [].slice,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

(function($, window) {
  var SimpleSlider;
  SimpleSlider = (function() {

    function SimpleSlider(input, options) {
      var ratio,
        _this = this;
      this.input = input;
      this.defaultOptions = {
        animate: true,
        snapMid: false,
        classPrefix: null,
        classSuffix: null,
        theme: null,
        highlight: false
      };
      this.settings = $.extend({}, this.defaultOptions, options);
      if (this.settings.theme) {
        this.settings.classSuffix = "-" + this.settings.theme;
      }
      this.input.hide();
      this.slider = $("<div>").addClass("slider" + (this.settings.classSuffix || "")).css({
        position: "relative",
        userSelect: "none",
        boxSizing: "border-box"
      }).insertBefore(this.input);
      if (this.input.attr("id")) {
        this.slider.attr("id", this.input.attr("id") + "-slider");
      }
      this.track = this.createDivElement("track").css({
        width: "100%"
      });
      if (this.settings.highlight) {
        this.highlightTrack = this.createDivElement("highlight-track").css({
          width: "0"
        });
      }
      this.dragger = this.createDivElement("dragger");
      this.slider.css({
        minHeight: this.dragger.outerHeight(),
        marginLeft: this.dragger.outerWidth() / 2,
        marginRight: this.dragger.outerWidth() / 2
      });
      this.track.css({
        marginTop: this.track.outerHeight() / -2
      });
      if (this.settings.highlight) {
        this.highlightTrack.css({
          marginTop: this.track.outerHeight() / -2
        });
      }
      this.dragger.css({
        marginTop: this.dragger.outerWidth() / -2,
        marginLeft: this.dragger.outerWidth() / -2
      });
      this.track.mousedown(function(e) {
        return _this.trackEvent(e);
      });
      if (this.settings.highlight) {
        this.highlightTrack.mousedown(function(e) {
          return _this.trackEvent(e);
        });
      }
      this.dragger.mousedown(function(e) {
        if (e.which !== 1) {
          return;
        }
        _this.dragging = true;
        _this.dragger.addClass("dragging");
        _this.domDrag(e.pageX, e.pageY);
        return false;
      });
      $("body").mousemove(function(e) {
        if (_this.dragging) {
          _this.domDrag(e.pageX, e.pageY);
          return $("body").css({
            cursor: "pointer"
          });
        }
      }).mouseup(function(e) {
        if (_this.dragging) {
          _this.dragging = false;
          _this.dragger.removeClass("dragging");
          return $("body").css({
            cursor: "auto"
          });
        }
      });
      this.pagePos = 0;
      if (this.input.val() === "") {
        this.value = this.getRange().min;
        this.input.val(this.value);
      } else {
        this.value = this.nearestValidValue(this.input.val());
      }
      this.setSliderPositionFromValue(this.value);
      ratio = this.valueToRatio(this.value);
      this.input.trigger("slider:ready", {
        value: this.value,
        ratio: ratio,
        position: ratio * this.slider.outerWidth(),
        el: this.slider
      });
    }

    SimpleSlider.prototype.createDivElement = function(classname) {
      var item;
      item = $("<div>").addClass(classname).css({
        position: "absolute",
        top: "50%",
        userSelect: "none",
        cursor: "pointer"
      }).appendTo(this.slider);
      return item;
    };

    SimpleSlider.prototype.setRatio = function(ratio) {
      var value;
      ratio = Math.min(1, ratio);
      ratio = Math.max(0, ratio);
      value = this.ratioToValue(ratio);
      this.setSliderPositionFromValue(value);
      return this.valueChanged(value, ratio, "setRatio");
    };

    SimpleSlider.prototype.setValue = function(value, noTrigger) {
      var ratio;
      value = this.nearestValidValue(value);
      ratio = this.valueToRatio(value);
      this.setSliderPositionFromValue(value);
      return this.valueChanged(value, ratio, "setValue", noTrigger);
    };

    SimpleSlider.prototype.trackEvent = function(e) {
      if (e.which !== 1) {
        return;
      }
      this.domDrag(e.pageX, e.pageY, true);
      this.dragging = true;
      return false;
    };

    SimpleSlider.prototype.domDrag = function(pageX, pageY, animate) {
      var pagePos, ratio, value;
      if (animate == null) {
        animate = false;
      }
      pagePos = pageX - this.slider.offset().left;
      pagePos = Math.min(this.slider.outerWidth(), pagePos);
      pagePos = Math.max(0, pagePos);
      if (this.pagePos !== pagePos) {
        this.pagePos = pagePos;
        ratio = pagePos / this.slider.outerWidth();
        value = this.ratioToValue(ratio);
        this.valueChanged(value, ratio, "domDrag");
        if (this.settings.snap) {
          return this.setSliderPositionFromValue(value, animate);
        } else {
          return this.setSliderPosition(pagePos, animate);
        }
      }
    };

    SimpleSlider.prototype.setSliderPosition = function(position, animate) {
      if (animate == null) {
        animate = false;
      }
      if (animate && this.settings.animate) {
        this.dragger.animate({
          left: position
        }, 200);
        if (this.settings.highlight) {
          return this.highlightTrack.animate({
            width: position
          }, 200);
        }
      } else {
        this.dragger.css({
          left: position
        });
        if (this.settings.highlight) {
          return this.highlightTrack.css({
            width: position
          });
        }
      }
    };

    SimpleSlider.prototype.setSliderPositionFromValue = function(value, animate) {
      var ratio;
      if (animate == null) {
        animate = false;
      }
      ratio = this.valueToRatio(value);
      return this.setSliderPosition(ratio * this.slider.outerWidth(), animate);
    };

    SimpleSlider.prototype.getRange = function() {
      if (this.settings.allowedValues) {
        return {
          min: Math.min.apply(Math, this.settings.allowedValues),
          max: Math.max.apply(Math, this.settings.allowedValues)
        };
      } else if (this.settings.range) {
        return {
          min: parseFloat(this.settings.range[0]),
          max: parseFloat(this.settings.range[1])
        };
      } else {
        return {
          min: 0,
          max: 1
        };
      }
    };

    SimpleSlider.prototype.nearestValidValue = function(rawValue) {
      var closest, maxSteps, range, steps;
      range = this.getRange();
      rawValue = Math.min(range.max, rawValue);
      rawValue = Math.max(range.min, rawValue);
      if (this.settings.allowedValues) {
        closest = null;
        $.each(this.settings.allowedValues, function() {
          if (closest === null || Math.abs(this - rawValue) < Math.abs(closest - rawValue)) {
            return closest = this;
          }
        });
        return closest;
      } else if (this.settings.step) {
        maxSteps = (range.max - range.min) / this.settings.step;
        steps = Math.floor((rawValue - range.min) / this.settings.step);
        if ((rawValue - range.min) % this.settings.step > this.settings.step / 2 && steps < maxSteps) {
          steps += 1;
        }
        return steps * this.settings.step + range.min;
      } else {
        return rawValue;
      }
    };

    SimpleSlider.prototype.valueToRatio = function(value) {
      var allowedVal, closest, closestIdx, idx, range, _i, _len, _ref;
      if (this.settings.equalSteps) {
        _ref = this.settings.allowedValues;
        for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
          allowedVal = _ref[idx];
          if (!(typeof closest !== "undefined" && closest !== null) || Math.abs(allowedVal - value) < Math.abs(closest - value)) {
            closest = allowedVal;
            closestIdx = idx;
          }
        }
        if (this.settings.snapMid) {
          return (closestIdx + 0.5) / this.settings.allowedValues.length;
        } else {
          return closestIdx / (this.settings.allowedValues.length - 1);
        }
      } else {
        range = this.getRange();
        return (value - range.min) / (range.max - range.min);
      }
    };

    SimpleSlider.prototype.ratioToValue = function(ratio) {
      var idx, range, rawValue, step, steps;
      if (this.settings.equalSteps) {
        steps = this.settings.allowedValues.length;
        step = Math.round(ratio * steps - 0.5);
        idx = Math.min(step, this.settings.allowedValues.length - 1);
        return this.settings.allowedValues[idx];
      } else {
        range = this.getRange();
        rawValue = ratio * (range.max - range.min) + range.min;
        return this.nearestValidValue(rawValue);
      }
    };

    SimpleSlider.prototype.valueChanged = function(value, ratio, trigger, noTrigger) {
      var eventData;
      if (value.toString() === this.value.toString()) {
        return;
      }
      this.value = value;
      eventData = {
        value: value,
        ratio: ratio,
        position: ratio * this.slider.outerWidth(),
        trigger: trigger,
        el: this.slider
      };
      if (noTrigger) {
          return this.input.val(value).trigger("slider:changed", eventData);
      }
      return this.input.val(value).trigger($.Event("change", eventData)).trigger("slider:changed", eventData);
    };

    return SimpleSlider;

  })();
  $.extend($.fn, {
    simpleSlider: function() {
      var params, publicMethods, settingsOrMethod;
      settingsOrMethod = arguments[0], params = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      publicMethods = ["setRatio", "setValue"];
      return $(this).each(function() {
          var $el = $(this);
        var obj, settings;
        if (settingsOrMethod && __indexOf.call(publicMethods, settingsOrMethod) >= 0) {
          obj = $(this).data("slider-object");
          return obj[settingsOrMethod].apply(obj, params);
        } else {
            settings = {};
            var allowedValues = settingsOrMethod.values;
            if (allowedValues) {
                settings.allowedValues = (function() {
                    var _i, _len, _ref, _results;
                    _ref = allowedValues.split(",");
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        x = _ref[_i];
                        _results.push(parseFloat(x));
                    }
                    return _results;
                })();
            }
            if (settingsOrMethod.range) {
                settings.range = settingsOrMethod.range.split(",");
            }
            if (settingsOrMethod.step) {
                settings.step = settingsOrMethod.step;
            }
            settings.snap = true;
//            if ($el.data("slider-step")) {
//                settings.step = $el.data("slider-step");
//            }
//            settings.snap = $el.data("slider-snap");
//            settings.equalSteps = $el.data("slider-equal-steps");
//            if ($el.data("slider-theme")) {
//                settings.theme = $el.data("slider-theme");
//            }
//            if ($el.attr("data-slider-highlight")) {
//                settings.highlight = $el.data("slider-highlight");
//            }
//            if ($el.data("slider-animate") != null) {
//                settings.animate = $el.data("slider-animate");
//            }
            return $(this).data("slider-object", new SimpleSlider($(this), settings));
        }
      });
    }
  });
  return $(function() {

  });
})(this.jQuery || this.Zepto, this);

define("simple-slider", function(){});

define('controllers/module',['angular'], function(ng){
    'use strict';

    return ng.module('controllers', ['journal'], function(){ });
});
!function(e,t){"use strict";var n=t.prototype.trim,r=t.prototype.trimRight,i=t.prototype.trimLeft,s=function(e){return e*1||0},o=function(e,t){if(t<1)return"";var n="";while(t>0)t&1&&(n+=e),t>>=1,e+=e;return n},u=[].slice,a=function(e){return e==null?"\\s":e.source?e.source:"["+p.escapeRegExp(e)+"]"},f={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},l={};for(var c in f)l[f[c]]=c;var h=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var n=o,r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};return r.format=function(r,i){var s=1,o=r.length,u="",a,f=[],l,c,p,d,v,m;for(l=0;l<o;l++){u=e(r[l]);if(u==="string")f.push(r[l]);else if(u==="array"){p=r[l];if(p[2]){a=i[s];for(c=0;c<p[2].length;c++){if(!a.hasOwnProperty(p[2][c]))throw new Error(h('[_.sprintf] property "%s" does not exist',p[2][c]));a=a[p[2][c]]}}else p[1]?a=i[p[1]]:a=i[s++];if(/[^s]/.test(p[8])&&e(a)!="number")throw new Error(h("[_.sprintf] expecting number but found %s",e(a)));switch(p[8]){case"b":a=a.toString(2);break;case"c":a=t.fromCharCode(a);break;case"d":a=parseInt(a,10);break;case"e":a=p[7]?a.toExponential(p[7]):a.toExponential();break;case"f":a=p[7]?parseFloat(a).toFixed(p[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=t(a))&&p[7]?a.substring(0,p[7]):a;break;case"u":a=Math.abs(a);break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(p[8])&&p[3]&&a>=0?"+"+a:a,v=p[4]?p[4]=="0"?"0":p[4].charAt(1):" ",m=p[6]-t(a).length,d=p[6]?n(v,m):"",f.push(p[5]?a+d:d+a)}}return f.join("")},r.cache={},r.parse=function(e){var t=e,n=[],r=[],i=0;while(t){if((n=/^[^\x25]+/.exec(t))!==null)r.push(n[0]);else if((n=/^\x25{2}/.exec(t))!==null)r.push("%");else{if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))===null)throw new Error("[_.sprintf] huh?");if(n[2]){i|=1;var s=[],o=n[2],u=[];if((u=/^([a-z_][a-z_\d]*)/i.exec(o))===null)throw new Error("[_.sprintf] huh?");s.push(u[1]);while((o=o.substring(u[0].length))!=="")if((u=/^\.([a-z_][a-z_\d]*)/i.exec(o))!==null)s.push(u[1]);else{if((u=/^\[(\d+)\]/.exec(o))===null)throw new Error("[_.sprintf] huh?");s.push(u[1])}n[2]=s}else i|=2;if(i===3)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");r.push(n)}t=t.substring(n[0].length)}return r},r}(),p={VERSION:"2.3.0",isBlank:function(e){return e==null&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return e==null?"":t(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=e==null?"":t(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,n){return e==null?[]:(e=t(e),n=~~n,n>0?e.match(new RegExp(".{1,"+n+"}","g")):[e])},clean:function(e){return p.strip(e).replace(/\s+/g," ")},count:function(e,n){return e==null||n==null?0:t(e).split(n).length-1},chars:function(e){return e==null?[]:t(e).split("")},swapCase:function(e){return e==null?"":t(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return e==null?"":t(e).replace(/[&<>"']/g,function(e){return"&"+l[e]+";"})},unescapeHTML:function(e){return e==null?"":t(e).replace(/\&([^;]+);/g,function(e,n){var r;return n in f?f[n]:(r=n.match(/^#x([\da-fA-F]+)$/))?t.fromCharCode(parseInt(r[1],16)):(r=n.match(/^#(\d+)$/))?t.fromCharCode(~~r[1]):e})},escapeRegExp:function(e){return e==null?"":t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,t,n,r){var i=p.chars(e);return i.splice(~~t,~~n,r),i.join("")},insert:function(e,t,n){return p.splice(e,t,0,n)},include:function(e,n){return n===""?!0:e==null?!1:t(e).indexOf(n)!==-1},join:function(){var e=u.call(arguments),t=e.shift();return t==null&&(t=""),e.join(t)},lines:function(e){return e==null?[]:t(e).split("\n")},reverse:function(e){return p.chars(e).reverse().join("")},startsWith:function(e,n){return n===""?!0:e==null||n==null?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(0,n.length)===n)},endsWith:function(e,n){return n===""?!0:e==null||n==null?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(e.length-n.length)===n)},succ:function(e){return e==null?"":(e=t(e),e.slice(0,-1)+t.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return e==null?"":t(e).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return p.trim(e).replace(/[-_\s]+(.)?/g,function(e,t){return t.toUpperCase()})},underscored:function(e){return p.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return p.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return p.titleize(t(e).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(e){return p.capitalize(p.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,r){return e==null?"":!r&&n?n.call(e):(r=a(r),t(e).replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))},ltrim:function(e,n){return e==null?"":!n&&i?i.call(e):(n=a(n),t(e).replace(new RegExp("^"+n+"+"),""))},rtrim:function(e,n){return e==null?"":!n&&r?r.call(e):(n=a(n),t(e).replace(new RegExp(n+"+$"),""))},truncate:function(e,n,r){return e==null?"":(e=t(e),r=r||"...",n=~~n,e.length>n?e.slice(0,n)+r:e)},prune:function(e,n,r){if(e==null)return"";e=t(e),n=~~n,r=r!=null?t(r):"...";if(e.length<=n)return e;var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=e.slice(0,n+1).replace(/.(?=\W*\w*$)/g,i);return s.slice(s.length-2).match(/\w\w/)?s=s.replace(/\s*\S+$/,""):s=p.rtrim(s.slice(0,s.length-1)),(s+r).length>e.length?e:e.slice(0,s.length)+r},words:function(e,t){return p.isBlank(e)?[]:p.trim(e,t).split(t||/\s+/)},pad:function(e,n,r,i){e=e==null?"":t(e),n=~~n;var s=0;r?r.length>1&&(r=r.charAt(0)):r=" ";switch(i){case"right":return s=n-e.length,e+o(r,s);case"both":return s=n-e.length,o(r,Math.ceil(s/2))+e+o(r,Math.floor(s/2));default:return s=n-e.length,o(r,s)+e}},lpad:function(e,t,n){return p.pad(e,t,n)},rpad:function(e,t,n){return p.pad(e,t,n,"right")},lrpad:function(e,t,n){return p.pad(e,t,n,"both")},sprintf:h,vsprintf:function(e,t){return t.unshift(e),h.apply(null,t)},toNumber:function(e,n){if(e==null||e=="")return 0;e=t(e);var r=s(s(e).toFixed(~~n));return r===0&&!e.match(/^0+$/)?Number.NaN:r},numberFormat:function(e,t,n,r){if(isNaN(e)||e==null)return"";e=e.toFixed(~~t),r=r||",";var i=e.split("."),s=i[0],o=i[1]?(n||".")+i[1]:"";return s.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+r)+o},strRight:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strRightBack:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.lastIndexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strLeft:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(0,r):e},strLeftBack:function(e,t){if(e==null)return"";e+="",t=t!=null?""+t:t;var n=e.lastIndexOf(t);return~n?e.slice(0,n):e},toSentence:function(e,t,n,r){t=t||", ",n=n||" and ";var i=e.slice(),s=i.pop();return e.length>2&&r&&(n=p.rtrim(t)+n),i.length?i.join(t)+n+s:s},toSentenceSerial:function(){var e=u.call(arguments);return e[3]=!0,p.toSentence.apply(p,e)},slugify:function(e){if(e==null)return"";var n="Ä…Ã Ã¡Ã¤Ã¢Ã£Ã¥Ã¦Ä‡Ä™Ã¨Ã©Ã«ÃªÃ¬Ã­Ã¯Ã®Å‚Å„Ã²Ã³Ã¶Ã´ÃµÃ¸Ã¹ÃºÃ¼Ã»Ã±Ã§Å¼Åº",r="aaaaaaaaceeeeeiiiilnoooooouuuunczz",i=new RegExp(a(n),"g");return e=t(e).toLowerCase().replace(i,function(e){var t=n.indexOf(e);return r.charAt(t)||"-"}),p.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,t){return[t,e,t].join("")},quote:function(e){return p.surround(e,'"')},exports:function(){var e={};for(var t in this){if(!this.hasOwnProperty(t)||t.match(/^(?:include|contains|reverse)$/))continue;e[t]=this[t]}return e},repeat:function(e,n,r){if(e==null)return"";n=~~n;if(r==null)return o(t(e),n);for(var i=[];n>0;i[--n]=e);return i.join(r)},levenshtein:function(e,n){if(e==null&&n==null)return 0;if(e==null)return t(n).length;if(n==null)return t(e).length;e=t(e),n=t(n);var r=[],i,s;for(var o=0;o<=n.length;o++)for(var u=0;u<=e.length;u++)o&&u?e.charAt(u-1)===n.charAt(o-1)?s=i:s=Math.min(r[u],r[u-1],i)+1:s=o+u,i=r[u],r[u]=s;return r.pop()}};p.strip=p.trim,p.lstrip=p.ltrim,p.rstrip=p.rtrim,p.center=p.lrpad,p.rjust=p.lpad,p.ljust=p.rpad,p.contains=p.include,p.q=p.quote,typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(module.exports=p),exports._s=p):typeof define=="function"&&define.amd?define("underscore.string",[],function(){return p}):(e._=e._||{},e._.string=e._.str=p)}(this,String);
define('controllers/home',['./module', 'underscore', 'underscore.string'], function (module, _, _S) {

    module.filter('linkName', function () {
        var NAMES = {
            'Productlist'   : 'Product List',
            'All'           : 'Layout',
            'Form'          : 'Edit',
            'Category'      : 'Category Page',
            'Productlabels'   : 'Product Labels',
            'Productgrid'   : 'Product Grid',
            'Quickview'   : 'QuickView',
            'Headermenus'   : 'Header / Menus',
            'Moduleslider'   : 'Slider',
            'Modulecarousel'   : 'Carousel',
            'Modulecustomsections'   : 'Custom Sections',
            'Modulesuperfilter'   : 'Super Filter',
            'Modulecmsblocks'   : 'CMS Blocks',
            'Moduleheadlinerotator'   : 'Headline Rotator',
            'Moduleflyout'   : 'Flyout Menu',
            'Modulephotogallery'   : 'Photo Gallery',
            'Journalcheckout'   : 'Quick Checkout',
            'Productpage'   : 'Product Page',
            'Side column_menu'   : 'Flyout Menu',
            'Sidecolumn'   : 'Side Column',
            'Custom code'   : 'Custom Code',
            'Super filter'   : 'Super Filter',
            'Header notice'   : 'Header Notice',
            'Static banners'   : 'Banners',
            'Custom sections'   : 'Custom Sections',
            'Custom code'   : 'Custom Code',
            'Cms blocks'   : 'CMS Blocks',
            'Side category'   : 'Side Category',
            'Text rotator'   : 'Text Rotator',
            'Headline rotator'   : 'Headline Rotator',
            'Photo gallery'   : 'Photo Gallery',
            'Fullscreen slider'   : 'Fulscreen Slider',
            'Side blocks'   : 'Side Blocks',
            'Product tabs'   : 'Product Tabs',
            'Side products'   : 'Side Products',
            'Moduletextrotator'   : 'Text Rotator',
            'Slider'   : 'Revolution Slider',
            'Simple slider'   : 'Journal Slider',
            'Advanced grid'   : 'Advanced Grid'


        };

        return function (name) {
            var names = name.split('/');
            names.splice(0, 1);
            names = _.filter(names, function (name) {
                return !$.isNumeric(name) && name !== 'module';
            });
            names = _.map(names, function (name) {
                var temp = name.capitalize().replace('_', ' ');
                return NAMES[temp] || temp;
            });
            return names.join(' / ');
        };
    });

    module.controller('HomeController', function ($scope, Spinner, History, Rest) {

        $scope.history = History.get();

        Spinner.hide();

        $scope.upgrade = false;
        $scope.new_version = null;

        Rest.checkVersion().then(function (response) {
            if (response && response.upgrade) {
                $scope.upgrade = true;
                $scope.new_version = response.latest;
            }
        });

    });

});

define('controllers/settings',['./module', 'underscore'], function(module, _){

    module.controller('SettingsController', ['$scope', '$routeParams', 'Rest', '$timeout', function($scope, $routeParams, Rest, $timeout){
        var category = $routeParams.category;
        var store_id = 0;

        $scope.settings = [];
        $scope.hasSubcategs = false;

        $timeout(function () {
            Rest.loadSettings(category, store_id).then(function(settings){
                var subcateg = {};

                _.each(settings, function(setting){
                    if (setting.subcategory) {
                        subcateg[setting.subcategory] = subcateg[setting.subcategory] || [];
                        subcateg[setting.subcategory].push(setting);
                    }
                });

                $scope.hasSubcategs = Object.keys(subcateg).length > 0;
                $scope.settings = $scope.hasSubcategs ? subcateg : settings;
                $('.journal-loading').hide();
            }, function(error){
                console.error(error);
            });
        }, 1);



        $scope.save = function() {
            var settings = [];
            if ($scope.hasSubcategs) {
                _.each($scope.settings, function(subcateg) {
                    _.each(subcateg, function(setting) {
                        if (setting.setting.value !== undefined) {
                            settings.push({
                                key: setting.setting.name,
                                value: setting.setting.value
                            });
                        }
                    });
                });
            } else {
                _.each($scope.settings, function(setting) {
                    if (setting.setting.value !== undefined) {
                        settings.push({
                            key: setting.setting.name,
                            value: setting.setting.value
                        });
                    }
                });
            }

            Rest.saveSettings(settings, store_id).then(function(response){
                console.log(response);
            }, function(error){
                console.error(error);
            });
        }

    }]);

});

define('controllers/settings/general',['./../module', 'underscore'], function (module, _) {

    module.controller('GeneralSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'general';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/productlabels',['./../module', 'underscore'], function (module, _) {

    module.controller('ProductLabelsSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'productlabels';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/notification',['./../module', 'underscore'], function (module, _) {

    module.controller('NotificationSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'notification';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/quickview',['./../module', 'underscore'], function (module, _) {

    module.controller('QuickviewSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'quickview';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/sidecolumn',['./../module', 'underscore'], function (module, _) {

    module.controller('SideColumnSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'sidecolumn';
        $scope.settings = { };

        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/footer',['./../module', 'underscore'], function (module, _) {

    module.controller('FooterSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'footer';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/pages',['./../module', 'underscore'], function (module, _) {

    module.controller('PagesSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'pages';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/journalcheckout',['./../module', 'underscore'], function (module, _) {

    module.controller('JournalCheckoutSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager, $modal, $timeout) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'journalcheckout';
        $scope.settings = { };

        var showPopup = true;

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                if (settings['one_page_status'] === 'one-page') {
                    showPopup = false;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        //$scope.$watch('settings.one_page_status', function (newValue, oldValue) {
        //    if (newValue === 'one-page' && showPopup) {
        //        $modal.open({
        //            templateUrl: 'view/journal2/tpl/checkout-warning.html?ver=' + Journal2Config.version,
        //            backdrop: 'static',
        //            resolve: {
        //                parentScope: function () { return $scope; }
        //            },
        //            controller: function ($scope, $modalInstance, parentScope) {
        //                $scope.agree = function () {
        //                    parentScope.settings['one_page_status'] = 'one-page';
        //                    $timeout(function () {
        //                        parentScope.$apply();
        //                    }, 1);
        //                    $modalInstance.close();
        //                };
        //
        //                $scope.disagree = function () {
        //                    parentScope.settings['one_page_status'] = 'default';
        //                    $timeout(function () {
        //                        parentScope.$apply();
        //                    }, 1);
        //                    $modalInstance.close();
        //                };
        //            }
        //        });
        //    }
        //    showPopup = true;
        //});

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/blog',['./../module', 'underscore'], function (module, _) {

    module.controller('BlogSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager, ngTableParams) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'blog';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/blogmodules',['./../module', 'underscore'], function (module, _) {

    module.controller('BlogModulesSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager, ngTableParams) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'blogmodules';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/bloglanguage',['./../module', 'underscore'], function (module, _) {

    module.controller('BlogLanguageSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager, ngTableParams) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'bloglanguage';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/productpage',['./../module', 'underscore'], function (module, _) {

    module.controller('ProductPageSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'productpage';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.addButton = function () {
            $scope.settings.share_buttons = $scope.settings.share_buttons || [];
            $scope.settings.share_buttons.push({
                id: 'st_li_sharethis'
            });
        };

        $scope.removeButton = function ($index) {
            $scope.settings.share_buttons.splice($index, 1);
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

        $scope.shareThisSelect = {
            formatResult: function format(data) {
                return '<img src="' + $(data.element).attr('data-img') + '" />' + data.text;
            }
        };

        $scope.shareThisButtons = {
            "st_li_email": {
                "id": "st_li_email",
                "name": "Email",
                "img": "https://ws.sharethis.com/images/email_32.png"
            },
            "st_li_pinterest": {
                "id": "st_li_pinterest",
                "name": "Pinterest",
                "img": "https://ws.sharethis.com/images/pinterest_32.png"
            },
            "st_li_linkedin": {
                "id": "st_li_linkedin",
                "name": "LinkedIn",
                "img": "https://ws.sharethis.com/images/linkedin_32.png"
            },
            "st_li_twitter": {
                "id": "st_li_twitter",
                "name": "Twitter",
                "img": "https://ws.sharethis.com/images/twitter_32.png"
            },
            "st_li_facebook": {
                "id": "st_li_facebook",
                "name": "Facebook",
                "img": "https://ws.sharethis.com/images/facebook_32.png"
            },
            "st_li_sharethis": {
                "id": "st_li_sharethis",
                "name": "ShareThis",
                "img": "https://ws.sharethis.com/images/sharethis_32.png"
            },
            "st_li_googleplus": {
                "id": "st_li_googleplus",
                "name": "Google +",
                "img": "https://ws.sharethis.com/images/googleplus_32.png"
            },
            "st_li_adfty": {
                "id": "st_li_adfty",
                "name": "Adfty",
                "img": "https://ws.sharethis.com/images/adfty_32.png"
            },
            "st_li_allvoices": {
                "id": "st_li_allvoices",
                "name": "Allvoices",
                "img": "https://ws.sharethis.com/images/allvoices_32.png"
            },
            "st_li_amazon_wishlist": {
                "id": "st_li_amazon_wishlist",
                "name": "Amazon Wishlist",
                "img": "https://ws.sharethis.com/images/amazon_wishlist_32.png"
            },
            "st_li_arto": {
                "id": "st_li_arto",
                "name": "Arto",
                "img": "https://ws.sharethis.com/images/arto_32.png"
            },
            "st_li_att": {
                "id": "st_li_att",
                "name": "AT&amp;T",
                "img": "https://ws.sharethis.com/images/att_32.png"
            },
            "st_li_baidu": {
                "id": "st_li_baidu",
                "name": "Baidu",
                "img": "https://ws.sharethis.com/images/baidu_32.png"
            },
            "st_li_blinklist": {
                "id": "st_li_blinklist",
                "name": "Blinklist",
                "img": "https://ws.sharethis.com/images/blinklist_32.png"
            },
            "st_li_blip": {
                "id": "st_li_blip",
                "name": "Blip",
                "img": "https://ws.sharethis.com/images/blip_32.png"
            },
            "st_li_blogmarks": {
                "id": "st_li_blogmarks",
                "name": "Blogmarks",
                "img": "https://ws.sharethis.com/images/blogmarks_32.png"
            },
            "st_li_blogger": {
                "id": "st_li_blogger",
                "name": "Blogger",
                "img": "https://ws.sharethis.com/images/blogger_32.png"
            },
            "st_li_buddymarks": {
                "id": "st_li_buddymarks",
                "name": "BuddyMarks",
                "img": "https://ws.sharethis.com/images/buddymarks_32.png"
            },
            "st_li_buffer": {
                "id": "st_li_buffer",
                "name": "Buffer",
                "img": "https://ws.sharethis.com/images/buffer_32.png"
            },
            "st_li_care2": {
                "id": "st_li_care2",
                "name": "Care2",
                "img": "https://ws.sharethis.com/images/care2_32.png"
            },
            "st_li_chiq": {
                "id": "st_li_chiq",
                "name": "chiq",
                "img": "https://ws.sharethis.com/images/chiq_32.png"
            },
            "st_li_citeulike": {
                "id": "st_li_citeulike",
                "name": "CiteULike",
                "img": "https://ws.sharethis.com/images/citeulike_32.png"
            },
            "st_li_corkboard": {
                "id": "st_li_corkboard",
                "name": "Corkboard",
                "img": "https://ws.sharethis.com/images/corkboard_32.png"
            },
            "st_li_dealsplus": {
                "id": "st_li_dealsplus",
                "name": "Dealspl.us",
                "img": "https://ws.sharethis.com/images/dealsplus_32.png"
            },
            "st_li_delicious": {
                "id": "st_li_delicious",
                "name": "Delicious",
                "img": "https://ws.sharethis.com/images/delicious_32.png"
            },
            "st_li_digg": {
                "id": "st_li_digg",
                "name": "Digg",
                "img": "https://ws.sharethis.com/images/digg_32.png"
            },
            "st_li_diigo": {
                "id": "st_li_diigo",
                "name": "Diigo",
                "img": "https://ws.sharethis.com/images/diigo_32.png"
            },
            "st_li_dzone": {
                "id": "st_li_dzone",
                "name": "DZone",
                "img": "https://ws.sharethis.com/images/dzone_32.png"
            },
            "st_li_edmodo": {
                "id": "st_li_edmodo",
                "name": "Edmodo",
                "img": "https://ws.sharethis.com/images/edmodo_32.png"
            },
            "st_li_embed_ly": {
                "id": "st_li_embed_ly",
                "name": "Embed.ly",
                "img": "https://ws.sharethis.com/images/embed_ly_32.png"
            },
            "st_li_evernote": {
                "id": "st_li_evernote",
                "name": "Evernote",
                "img": "https://ws.sharethis.com/images/evernote_32.png"
            },
            "st_li_fark": {
                "id": "st_li_fark",
                "name": "Fark",
                "img": "https://ws.sharethis.com/images/fark_32.png"
            },
            "st_li_fashiolista": {
                "id": "st_li_fashiolista",
                "name": "Fashiolista",
                "img": "https://ws.sharethis.com/images/fashiolista_32.png"
            },
            "st_li_flipboard": {
                "id": "st_li_flipboard",
                "name": "Flipboard",
                "img": "https://ws.sharethis.com/images/flipboard_32.png"
            },
            "st_li_folkd": {
                "id": "st_li_folkd",
                "name": "folkd.com",
                "img": "https://ws.sharethis.com/images/folkd_32.png"
            },
            "st_li_foodlve": {
                "id": "st_li_foodlve",
                "name": "FoodLve",
                "img": "https://ws.sharethis.com/images/foodlve_32.png"
            },
            "st_li_fresqui": {
                "id": "st_li_fresqui",
                "name": "Fresqui",
                "img": "https://ws.sharethis.com/images/fresqui_32.png"
            },
            "st_li_friendfeed": {
                "id": "st_li_friendfeed",
                "name": "FriendFeed",
                "img": "https://ws.sharethis.com/images/friendfeed_32.png"
            },
            "st_li_funp": {
                "id": "st_li_funp",
                "name": "Funp",
                "img": "https://ws.sharethis.com/images/funp_32.png"
            },
            "st_li_fwisp": {
                "id": "st_li_fwisp",
                "name": "fwisp",
                "img": "https://ws.sharethis.com/images/fwisp_32.png"
            },
            "st_li_google": {
                "id": "st_li_google",
                "name": "Google",
                "img": "https://ws.sharethis.com/images/google_32.png"
            },
            "st_li_google_bmarks": {
                "id": "st_li_google_bmarks",
                "name": "Bookmarks",
                "img": "https://ws.sharethis.com/images/google_bmarks_32.png"
            },
            "st_li_google_reader": {
                "id": "st_li_google_reader",
                "name": "Google Reader",
                "img": "https://ws.sharethis.com/images/google_reader_32.png"
            },
            "st_li_google_translate": {
                "id": "st_li_google_translate",
                "name": "Google Translate",
                "img": "https://ws.sharethis.com/images/google_translate_32.png"
            },
            "st_li_hatena": {
                "id": "st_li_hatena",
                "name": "Hatena",
                "img": "https://ws.sharethis.com/images/hatena_32.png"
            },
            "st_li_instapaper": {
                "id": "st_li_instapaper",
                "name": "Instapaper",
                "img": "https://ws.sharethis.com/images/instapaper_32.png"
            },
            "st_li_jumptags": {
                "id": "st_li_jumptags",
                "name": "Jumptags",
                "img": "https://ws.sharethis.com/images/jumptags_32.png"
            },
            "st_li_kaboodle": {
                "id": "st_li_kaboodle",
                "name": "Kaboodle",
                "img": "https://ws.sharethis.com/images/kaboodle_32.png"
            },
            "st_li_linkagogo": {
                "id": "st_li_linkagogo",
                "name": "linkaGoGo",
                "img": "https://ws.sharethis.com/images/linkagogo_32.png"
            },
            "st_li_livejournal": {
                "id": "st_li_livejournal",
                "name": "LiveJournal",
                "img": "https://ws.sharethis.com/images/livejournal_32.png"
            },
            "st_li_mail_ru": {
                "id": "st_li_mail_ru",
                "name": "mail.ru",
                "img": "https://ws.sharethis.com/images/mail_ru_32.png"
            },
            "st_li_meneame": {
                "id": "st_li_meneame",
                "name": "Meneame",
                "img": "https://ws.sharethis.com/images/meneame_32.png"
            },
            "st_li_messenger": {
                "id": "st_li_messenger",
                "name": "Messenger",
                "img": "https://ws.sharethis.com/images/messenger_32.png"
            },
            "st_li_mister_wong": {
                "id": "st_li_mister_wong",
                "name": "Mr Wong",
                "img": "https://ws.sharethis.com/images/mister_wong_32.png"
            },
            "st_li_moshare": {
                "id": "st_li_moshare",
                "name": "moShare",
                "img": "https://ws.sharethis.com/images/moshare_32.png"
            },
            "st_li_myspace": {
                "id": "st_li_myspace",
                "name": "MySpace",
                "img": "https://ws.sharethis.com/images/myspace_32.png"
            },
            "st_li_n4g": {
                "id": "st_li_n4g",
                "name": "N4G",
                "img": "https://ws.sharethis.com/images/n4g_32.png"
            },
            "st_li_netlog": {
                "id": "st_li_netlog",
                "name": "Netlog",
                "img": "https://ws.sharethis.com/images/netlog_32.png"
            },
            "st_li_netvouz": {
                "id": "st_li_netvouz",
                "name": "Netvouz",
                "img": "https://ws.sharethis.com/images/netvouz_32.png"
            },
            "st_li_newsvine": {
                "id": "st_li_newsvine",
                "name": "Newsvine",
                "img": "https://ws.sharethis.com/images/newsvine_32.png"
            },
            "st_li_nujij": {
                "id": "st_li_nujij",
                "name": "NUjij",
                "img": "https://ws.sharethis.com/images/nujij_32.png"
            },
            "st_li_odnoklassniki": {
                "id": "st_li_odnoklassniki",
                "name": "Odnoklassniki",
                "img": "https://ws.sharethis.com/images/odnoklassniki_32.png"
            },
            "st_li_oknotizie": {
                "id": "st_li_oknotizie",
                "name": "Oknotizie",
                "img": "https://ws.sharethis.com/images/oknotizie_32.png"
            },
            "st_li_pocket": {
                "id": "st_li_pocket",
                "name": "Pocket",
                "img": "https://ws.sharethis.com/images/pocket_32.png"
            },
            "st_li_print": {
                "id": "st_li_print",
                "name": "Print",
                "img": "https://ws.sharethis.com/images/print_32.png"
            },
            "st_li_raise_your_voice": {
                "id": "st_li_raise_your_voice",
                "name": "Raise Your Voice",
                "img": "https://ws.sharethis.com/images/raise_your_voice_32.png"
            },
            "st_li_reddit": {
                "id": "st_li_reddit",
                "name": "Reddit",
                "img": "https://ws.sharethis.com/images/reddit_32.png"
            },
            "st_li_segnalo": {
                "id": "st_li_segnalo",
                "name": "Segnalo",
                "img": "https://ws.sharethis.com/images/segnalo_32.png"
            },
            "st_li_sina": {
                "id": "st_li_sina",
                "name": "Sina",
                "img": "https://ws.sharethis.com/images/sina_32.png"
            },
            "st_li_sonico": {
                "id": "st_li_sonico",
                "name": "Sonico",
                "img": "https://ws.sharethis.com/images/sonico_32.png"
            },
            "st_li_startaid": {
                "id": "st_li_startaid",
                "name": "Startaid",
                "img": "https://ws.sharethis.com/images/startaid_32.png"
            },
            "st_li_startlap": {
                "id": "st_li_startlap",
                "name": "Startlap",
                "img": "https://ws.sharethis.com/images/startlap_32.png"
            },
            "st_li_stumbleupon": {
                "id": "st_li_stumbleupon",
                "name": "StumbleUpon",
                "img": "https://ws.sharethis.com/images/stumbleupon_32.png"
            },
            "st_li_stumpedia": {
                "id": "st_li_stumpedia",
                "name": "Stumpedia",
                "img": "https://ws.sharethis.com/images/stumpedia_32.png"
            },
            "st_li_typepad": {
                "id": "st_li_typepad",
                "name": "TypePad",
                "img": "https://ws.sharethis.com/images/typepad_32.png"
            },
            "st_li_tumblr": {
                "id": "st_li_tumblr",
                "name": "Tumblr",
                "img": "https://ws.sharethis.com/images/tumblr_32.png"
            },
            "st_li_viadeo": {
                "id": "st_li_viadeo",
                "name": "Viadeo",
                "img": "https://ws.sharethis.com/images/viadeo_32.png"
            },
            "st_li_virb": {
                "id": "st_li_virb",
                "name": "Virb",
                "img": "https://ws.sharethis.com/images/virb_32.png"
            },
            "st_li_vkontakte": {
                "id": "st_li_vkontakte",
                "name": "Vkontakte",
                "img": "https://ws.sharethis.com/images/vkontakte_32.png"
            },
            "st_li_voxopolis": {
                "id": "st_li_voxopolis",
                "name": "VOXopolis",
                "img": "https://ws.sharethis.com/images/voxopolis_32.png"
            },
            "st_li_whatsapp": {
                "id": "st_li_whatsapp",
                "name": "WhatsApp",
                "img": "https://ws.sharethis.com/images/whatsapp_32.png"
            },
            "st_li_weheartit": {
                "id": "st_li_weheartit",
                "name": "We Heart It",
                "img": "https://ws.sharethis.com/images/weheartit_32.png"
            },
            "st_li_wordpress": {
                "id": "st_li_wordpress",
                "name": "WordPress",
                "img": "https://ws.sharethis.com/images/wordpress_32.png"
            },
            "st_li_xerpi": {
                "id": "st_li_xerpi",
                "name": "Xerpi",
                "img": "https://ws.sharethis.com/images/xerpi_32.png"
            },
            "st_li_xing": {
                "id": "st_li_xing",
                "name": "Xing",
                "img": "https://ws.sharethis.com/images/xing_32.png"
            },
            "st_li_yammer": {
                "id": "st_li_yammer",
                "name": "Yammer",
                "img": "https://ws.sharethis.com/images/yammer_32.png"
            },
            "st_li_foursquarefollow": {
                "id": "st_li_foursquarefollow",
                "name": "Foursquare Follow",
                "img": "http://w.sharethis.com/images/foursquarefollow_32.png"
            },
            "st_li_foursquaresave": {
                "id": "st_li_foursquaresave",
                "name": "Foursquare Save",
                "img": "http://w.sharethis.com/images/foursquaresave_32.png"
            },
            "st_li_fbsub": {
                "id": "st_li_fbsub",
                "name": "Facebook Subscribe",
                "img": "http://w.sharethis.com/images/fbsub_32.png"
            },
            "st_li_fbsend": {
                "id": "st_li_fbsend",
                "name": "Facebook Send",
                "img": "http://w.sharethis.com/images/fbsend_32.png"
            },
            "st_li_fbrec": {
                "id": "st_li_fbrec",
                "name": "Facebook Recommend",
                "img": "http://w.sharethis.com/images/fbrec_32.png"
            },
            "st_li_fblike": {
                "id": "st_li_fblike",
                "name": "Facebook Like",
                "img": "http://w.sharethis.com/images/fblike_32.png"
            },
            "st_li_instagram": {
                "id": "st_li_instagram",
                "name": "Instagram Badge",
                "img": "http://w.sharethis.com/images/instagram_32.png"
            },
            "st_li_plusone": {
                "id": "st_li_plusone",
                "name": "Google +1",
                "img": "http://w.sharethis.com/images/plusone_32.png"
            },
            "st_li_pinterestfollow": {
                "id": "st_li_pinterestfollow",
                "name": "Pinterest Follow",
                "img": "http://w.sharethis.com/images/pinterestfollow_32.png"
            },
            "st_li_twitterfollow": {
                "id": "st_li_twitterfollow",
                "name": "Twitter Follow",
                "img": "http://w.sharethis.com/images/twitterfollow_32.png"
            },
            "st_li_youtube": {
                "id": "st_li_youtube",
                "name": "Youtube Subscribe",
                "img": "http://w.sharethis.com/images/youtube_32.png"
            }
        };

    });

});

define('controllers/settings/blogpostpage',['./../module', 'underscore'], function (module, _) {

    module.controller('BlogPostPageSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager, ngTableParams) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'blogpostpage';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/catalog',['./../module', 'underscore'], function (module, _) {

    module.controller('CatalogSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'catalog';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/header',['./../module', 'underscore'], function (module, _) {

    module.controller('HeaderSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'header';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/welcome',['./../module', 'underscore'], function (module, _) {

    module.controller('WelcomeSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'welcome';
        $scope.settings = { };

        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/countdown',['./../module', 'underscore'], function (module, _) {

    module.controller('CountdownSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'countdown';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/headermenus',['./../module', 'underscore'], function (module, _) {

    module.controller('HeaderMenusSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'headermenus';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/modulecarousel',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleCarouselSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'modulecarousel';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/modulecmsblocks',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleCMSBlocksSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'modulecmsblocks';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/modulecustomsections',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleCustomSectionsSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'modulecustomsections';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/moduleheadlinerotator',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleHeadlineRotatorSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'moduleheadlinerotator';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/moduletextrotator',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleTextRotatorSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'moduletextrotator';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/modulenewsletter',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleNewsletterSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager, ngTableParams) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'modulenewsletter';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 10
        }, {
            total: 0,
            getData: function($defer, params) {
                Rest.getSubscribers(params.url()).then(function (response) {
                    params.total(response.total);
                    $defer.resolve(response.subscribers);
                }, function (error) {
                    alert(error);
                });
            }
        });

        $scope.exportCSV = function ($event) {
            $event.stopPropagation();
            window.location = $('#export-link').attr('href');
        };

        $scope.unsubscribe = function (email) {
            if (!confirm('Unsubscribe ' + email + '?')) return;
            Rest.unsubscribe({email: email}).then(function (response) {
                $scope.tableParams.reload();
            }, function (error) {
                alert(error);
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/modulephotogallery',['./../module', 'underscore'], function (module, _) {

    module.controller('ModulePhotoGallerySettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'modulephotogallery';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/modulepopup',['./../module', 'underscore'], function (module, _) {

    module.controller('ModulePopupSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'modulepopup';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/moduleflyout',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleFlyoutSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'moduleflyout';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/moduleslider',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleSliderSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'moduleslider';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/modulesuperfilter',['./../module', 'underscore'], function (module, _) {

    module.controller('ModuleSuperFilterSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'modulesuperfilter';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/productlist',['./../module', 'underscore'], function (module, _) {

    module.controller('ProductListSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'productlist';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/productgrid',['./../module', 'underscore'], function (module, _) {

    module.controller('ProductGridSettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'productgrid';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/category',['./../module', 'underscore'], function (module, _) {

    module.controller('CategorySettingsController', function ($scope, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {
        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'category';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/custom_code',['./../module', 'underscore'], function (module, _) {

    module.controller('CustomCodeSettingsController', function ($scope, $timeout, $routeParams, $location, localStorageService, Rest, Spinner, SkinManager) {

        $scope.skin_id = $routeParams.skin_id;
        $scope.category = 'custom_code';
        $scope.settings = { };

        if (!$scope.skin_id) {
            $location.path('settings/' + $scope.category + '/' + SkinManager.getActiveSkin());
        } else {
            Rest.loadSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        }

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            var promises = {
                settings: Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id)
            };

//            if (Journal2Config.stores.length <= 1) {
//                promises.config = Rest.setSetting('active_skin', 0, $scope.skin_id);
//            }
            Rest.all(promises, function (response) {
                Spinner.hide($src);
                localStorageService.set('setting_' + $scope.category + '_accordion', $scope.accordion);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.saveAs = function ($event) {
            var skinName = prompt('Enter skin\'s name:');
            if (skinName !== null) {
                var $src = $($event.target || $event.srcElement);
                Spinner.show($src);
                Rest.saveSettingsAs(skinName, $scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                    Spinner.hide($src);
                    $location.path('settings/' + $scope.category + '/' + response);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.saveDefault = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.saveSettings($scope.settings, $scope.category, $scope.skin_id).then(function (response) {
                Rest.export().then(function (response) {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });

        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.loadDefaultSettings($scope.category, $scope.skin_id).then(function (settings) {
                if (!_.isArray(settings)) {
                    $scope.settings = settings;
                } else {
                    $scope.settings = { };
                }
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.delete = function ($event) {
            if (!confirm('Are you sure?')) {
                return;
            }
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.deleteSkin($scope.skin_id).then(function (settings) {
                Journal2Config.active_skin = 1;
                $location.path('settings/' + $scope.category + '/1');
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('setting_' + $scope.category + '_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/settings/system',['./../module', 'underscore', 'underscore.string'], function (module, _, _S) {

    module.controller('SystemSettingsController', function ($scope, $routeParams, $location, $timeout, localStorageService, Rest, Spinner) {

        $scope.settings = {
            developer_mode: 1,
            minify_html: 0,
            minify_css: 0,
            minify_js: 0,
            optimise_images: 0,
            simple_slider_cache: 0,
            slider_cache: 0,
            static_banners_cache: 0,
            carousel_cache: 0,
            custom_sections_cache: 0,
            cms_blocks_cache: 0,
            side_category_cache: 0,
            side_column_menu_cache: 0,
            text_rotator_cache: 0,
            headline_rotator_cache: 0,
            photo_gallery_cache: 0,
            side_blocks_cache: 0,
            fullscreen_slider_cache: 0,
            advanced_grid_cache: 0,
            carousel_grid_cache: 0,
            side_products_cache: 0
        };

        $scope.table_columns = null;

        $scope.imageOptimisationInProgress = false;
        $scope.cachingStatus = {
            optimised: 0,
            total: 0,
            percent: 0
        };
        var cachingSource = null;

        $timeout(function () {
            Rest.all({
                settings: Rest.getSetting('system_settings', -1),
                caching_status: Rest.getImageOptimisationStatus()
            }, function (response) {
                $scope.cachingStatus = response.caching_status;
                $scope.settings =  _.extend($scope.settings, response.settings);
                $timeout(function () {
                    Spinner.hide();
                }, 1);
            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        }, 500);

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.setSetting('system_settings', -1, $scope.settings).then(function (response) {
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.clearCache = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.clearCache().then(function (response) {
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.startImageOptimisation = function (all) {
            if ($scope.imageOptimisationInProgress) {
                return;
            }
            $scope.imageOptimisationInProgress = true;

            if (all) {
                $timeout(function () {
                    $scope.cachingStatus.percent = 0;
                    $scope.cachingStatus.optimised = 0;
                }, 1);
            }

            cachingSource = new EventSource('index.php?route=module/journal2/rest/image_optimisation/process' + (all ? '&all=true' : '') + '&token=' + Journal2Config.token);

            cachingSource.addEventListener('message', function (e) {
                var response = $.parseJSON(e.data);

                console.log(response);

                if (response.percent) {
                    $timeout(function () {
                        $scope.cachingStatus.percent = response.percent;
                        $scope.cachingStatus.optimised = response.optimised;
                        $scope.cachingStatus.total = response.total;
                    }, 1);
                }

                if (response.status === 'terminated') {
                    $scope.stopImageOptimisation();
                }

                if (response.error) {
                    $scope.stopImageOptimisation();
                    alert(response.error);
                }
            }, false);

            cachingSource.addEventListener('error', function (e) {
                console.log(e);
                $scope.stopImageOptimisation();
            }, false);
        };

        $scope.getDatabaseIndexStatus = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.getTableIndexesStatus().then(function (response) {
                $scope.table_columns = response;
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addDatabaseIndexes = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.addTableIndexes().then(function (response) {
                $scope.table_columns = response;
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.stopImageOptimisation = function () {
            if (!$scope.imageOptimisationInProgress) {
                return;
            }

            cachingSource.close();

            $timeout(function () {
                $scope.imageOptimisationInProgress = false;
            }, 1);
        };

        $scope.toggle_modules = function ($event, modules_cache) {
            $event.stopPropagation();
            _.each($scope.settings, function (v, k) {
                if (_S.endsWith(k, '_cache')) {
                    $scope.settings[k] = modules_cache;
                }
            });
        };

    });

});

define('controllers/settings/import_export',['./../module', 'underscore'], function (module, _) {

    module.controller('ImportExportSettingsController', function ($scope, $routeParams, $location, $timeout, localStorageService, Rest, Spinner) {

        $scope.settings = {
            opencart_version: Journal2Config.oc2 ? 2 : 1,
            include_store_data: 0,
            add_dummy_images: 0,
            include_blog_data: 0,
            purchased_code: localStorageService.get('j2_purchased_code'),
            tf_user: localStorageService.get('j2_tf_user')
        };

        $scope.saveCookie = function (key) {
            localStorageService.set('j2_' + key, $scope.settings[key]);
        };

        Spinner.hide();

        var getExportLink = function () {
            return _.map($scope.settings, function (value, key) {
                return key + '=' + value;
            }).join('&');
        };

        $scope.confirmation = function ($event, verify) {
            $event.preventDefault();
            var $src = $($event.target || $event.srcElement);
            if ($scope.settings.include_store_data == 1 && !confirm('WARNING! This will include store data from this installation. Importing this file into your store will reset your data to the one in this file. ')) {
                return false;
            }
            if (verify) {
                Spinner.show($src);
                Rest.verifyCode($scope.settings).then(function () {
                    window.location = $src.attr('href') + '&' + getExportLink();
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                window.location = $src.attr('href') + '&' + getExportLink();
            }
            return false;
        };

    });

});

define('controllers/menus/primary',['./../module', 'underscore', 'underscore.string'], function (module, _, _S) {

    module.factory('PrimaryMenuFactory', [function () {
        return {
            item: function () {
                return {
                    icon: {
                    },
                    mobile_view: 'icon',
                    menu: {
                        menu_type: 'opencart',
                        menu_item: {
                            page: 'common/home'
                        }
                    },
                    name_overwrite: '0',
                    target: '0',
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            },
            default_data: function () {
                return [
                    {
                        icon: {},
                        menu: {
                            menu_type: 'opencart',
                            menu_item: {
                                page: 'common/home'
                            }
                        },
                        name_overwrite: '0',
                        target: '0'
                    },
                    {
                        icon: {},
                        menu: {
                            menu_type: 'opencart',
                            menu_item: {
                                page: 'account/wishlist'
                            }
                        },
                        name_overwrite: '0',
                        target: '0'
                    },
                    {
                        icon: {},
                        menu: {
                            menu_type: 'opencart',
                            menu_item: {
                                page: 'account/account'
                            }
                        },
                        name_overwrite: '0',
                        target: '0'
                    },
                    {
                        icon: {},
                        menu: {
                            menu_type: 'opencart',
                            menu_item: {
                                page: 'checkout/cart'
                            }
                        },
                        name_overwrite: '0',
                        target: '0'
                    },
                    {
                        icon: {},
                        menu: {
                            menu_type: 'opencart',
                            menu_item: {
                                page: 'checkout/checkout'
                            }
                        },
                        name_overwrite: '0',
                        target: '0'
                    }
                ];
            }
        };
    }]);

    module.controller('PrimaryMenuController', function ($scope, $routeParams, $timeout, Spinner, Rest, PrimaryMenuFactory, MenuItemName) {

        $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;
        $scope.items = [];
        $scope.close_others = false;

        $scope.isLoading = true;
        $timeout(function () {
            Rest.getSetting('primary_menu', $scope.store_id).then(function (response) {
                if (response) {
                    $scope.items = response.items || [];
                    $scope.close_others = response.close_others;
                }
                $scope.items = _.map($scope.items, function (item) {
                    return _.extend(new PrimaryMenuFactory.item(), item);
                });
                $timeout(function () {
                    $scope.isLoading = false;
                    Spinner.hide();
                }, 1);

            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        }, 500);

        $scope.addItem = function () {
            $scope.items.push(new PrimaryMenuFactory.item());
        };

        $scope.removeItem = function ($index) {
            $scope.items.splice($index, 1);
        };

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.setSetting('primary_menu', $scope.store_id, { items: $scope.items, close_others: $scope.close_others }).then(function (response) {
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.reset = function () {
            $scope.items = PrimaryMenuFactory.default_data();
            $scope.items = _.map($scope.items, function (item) {
                return _.extend(new PrimaryMenuFactory.item(), item);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

        $scope.getItemName = MenuItemName;

    });

});
define('controllers/menus/secondary',['./../module', 'underscore'], function (module, _) {

    module.factory('SecondaryMenuFactory', [function () {
        return {
            item: function () {
                return {
                    icon: {
                    },
                    mobile_view: 'icon',
                    menu: {
                        menu_type: 'opencart',
                        menu_item: {
                            page: 'common/home'
                        }
                    },
                    name_overwrite: '0',
                    target: '0',
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            },
            default_data: function () {
                return [
                    {
                        icon: {},
                        menu: {
                            menu_type: 'opencart',
                            menu_item: {
                                page: 'login'
                            }
                        },
                        name_overwrite: '0',
                        target: '0'
                    },
                    {
                        icon: {},
                        menu: {
                            menu_type: 'opencart',
                            menu_item: {
                                page: 'register'
                            }
                        },
                        name_overwrite: '0',
                        target: '0'
                    }
                ];
            }
        };
    }]);

    module.controller('SecondaryMenuController', function ($scope, $routeParams, $timeout, Spinner, Rest, SecondaryMenuFactory, MenuItemName) {

        $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;
        $scope.items = [];
        $scope.close_others = false;

        $scope.isLoading = true;
        $timeout(function () {
            Rest.getSetting('secondary_menu', $scope.store_id).then(function (response) {
                if (response) {
                    $scope.items = response.items || [];
                    $scope.close_others = response.close_others;
                }
                $scope.items = _.map($scope.items, function (item) {
                    return _.extend(new SecondaryMenuFactory.item(), item);
                });
                $timeout(function () {
                    $scope.isLoading = false;
                    Spinner.hide();
                }, 1);

            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        }, 500);

        $scope.addItem = function () {
            $scope.items.push(new SecondaryMenuFactory.item());
        };

        $scope.removeItem = function ($index) {
            $scope.items.splice($index, 1);
        };

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.setSetting('secondary_menu', $scope.store_id, { items: $scope.items, close_others: $scope.close_others }).then(function (response) {
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.reset = function () {
            $scope.items = SecondaryMenuFactory.default_data();
            $scope.items = _.map($scope.items, function (item) {
                return _.extend(new SecondaryMenuFactory.item(), item);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

        $scope.getItemName = MenuItemName;

    });

});
define('controllers/menus/main',['./../module', 'underscore'], function (module, _) {

    module.factory('MainMenuFactory', [function () {
        return {
            Menu: function () {
                return {
                    type: 'categories',
                    categories: {
                        type: 'existing',
                        show: 'both',
                        image_position: 'right',
                        links_type: 'categories',
                        items: [],
                        render_as: 'megamenu'
                    },
                    products: {
                        source: 'category',
                        module_type: 'featured',
                        items: []
                    },
                    manufacturers: {
                        type: 'all',
                        show: 'image',
                        items: []
                    },
                    custom: {
                        top: {
                            menu_type: 'custom',
                            menu_item: null
                        },
                        target: 0,
                        items: []
                    },
                    mixed_columns: [],
                    icon: { },
                    hide_text: '0',
                    is_open: 1,
                    status: 1,
                    items_per_row: {
                        "range": "1,10",
                        "step": "1",
                        "hide_columns": true,
                        "value": {
                            "mobile": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "mobile1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet1": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet2": {
                                "value": "1",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop": {
                                "value": "6",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop": {
                                "value": "6",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            }
                        }
                    },
                    items_limit: 5,
                    html_blocks: [],
                    html_menu_link: {
                        menu_type: 'custom',
                        menu_item: null
                    },
                    title: {},
                    float: 'left',
                    image_width: '',
                    image_height: '',
                    image_type: 'fit',
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            },
            HtmlMenuItem: function () {
                return {
                    title: {},
                    status: 1,
                    sort_order: '',
                    text: {},
                    is_open: 1
                };
            },
            MenuColumn: function () {
               return {
                   is_open:1,
                   type: 'categories',
                   categories: {
                       type: 'existing',
                       show: 'both',
                       image_position: 'right',
                       links_type: 'categories',
                       items: []
                   },
                   products: {
                       source: 'category',
                       module_type: 'featured',
                       items: []
                   },
                   manufacturers: {
                       type: 'all',
                       show: 'image',
                       items: []
                   },
                   custom: {
                       top: {
                           menu_type: 'custom',
                           menu_item: null
                       },
                       items: []
                   },
                   link: {
                       menu_type: 'custom',
                       menu_item: null
                   },
                   html_text: {},
                   cms_blocks: [],
                   width: '',
                   image_width: '',
                   image_height: '',
                   image_type: 'fit',
                   items_per_row: {
                       "range": "1,10",
                       "step": "1",
                       "hide_columns": true,
                       "value": {
                           "mobile": {
                               "value": "2",
                               "range": "1,10",
                               "step": "1"
                           },
                           "mobile1": {
                               "value": "3",
                               "range": "1,10",
                               "step": "1"
                           },
                           "tablet": {
                               "value": "4",
                               "range": "1,10",
                               "step": "1"
                           },
                           "tablet1": {
                               "value": "2",
                               "range": "1,10",
                               "step": "1"
                           },
                           "tablet2": {
                               "value": "1",
                               "range": "1,10",
                               "step": "1"
                           },
                           "desktop": {
                               "value": "6",
                               "range": "1,10",
                               "step": "1"
                           },
                           "desktop1": {
                               "value": "3",
                               "range": "1,10",
                               "step": "1"
                           },
                           "desktop2": {
                               "value": "2",
                               "range": "1,10",
                               "step": "1"
                           },
                           "large_desktop": {
                               "value": "6",
                               "range": "1,10",
                               "step": "1"
                           },
                           "large_desktop1": {
                               "value": "3",
                               "range": "1,10",
                               "step": "1"
                           },
                           "large_desktop2": {
                               "value": "2",
                               "range": "1,10",
                               "step": "1"
                           }
                       }
                   },
                   items_limit: 5,
                   status: '1',
                   sort_order: '',
                   enable_on_phone: '1',
                   enable_on_tablet: '1',
                   enable_on_desktop: '1'
               }
            },
            MenuItem: function () {
                return {
                    menu: {
                        menu_type: 'custom',
                        menu_item: null
                    },
                    target: 0,
                    is_open: 1
                };
            },
            MenuCMSBlock: function () {
                return {
                    is_open: 1,
                    content: { },
                    position: 'top',
                    status: 1,
                    sort_order: ''
                };
            },
            Options: function () {
                return {
                    display: 'table',
                    table_layout: 'fixed',
                    is_open: 1
                };
            }
        };
    }]);

    module.controller('MainMenuController', function ($scope, $routeParams, $timeout, Spinner, Rest, MainMenuFactory) {

        $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;
        $scope.items = [];
        $scope.close_others = false;
        $scope.options = new MainMenuFactory.Options();
        $scope.featured_modules = [];

        Rest.all({
            settings: Rest.getSetting('mega_menu', $scope.store_id),
            featured_modules: Rest.getFeaturedModules()
        }, function (response) {
            if (response.settings) {
                $scope.items = response.settings.items || [];
                $scope.close_others = response.settings.close_others;
                $scope.options = _.extend($scope.options, response.settings.options);
            }
            $scope.items = _.map($scope.items, function (item) {
                item = _.extend(new MainMenuFactory.Menu(), item);
                if (item.type === 'html') {
                    item.html_blocks = _.map(item.html_blocks, function (block) {
                        return _.extend(new MainMenuFactory.HtmlMenuItem(), block);
                    });
                }
                return item;
            });
            $scope.featured_modules = response.featured_modules;
            Spinner.hide();
        }, function (error) {
            Spinner.hide();
            alert(error);
        });

        $scope.addMenu = function () {
            $scope.items.push(new MainMenuFactory.Menu());
        };

        $scope.removeMenu = function ($index) {
            $scope.items.splice($index, 1);
        };

        $scope.addColumn = function (menu) {
            menu.mixed_columns.push(new MainMenuFactory.MenuColumn());
        };

        $scope.removeColumn = function (menu, $index) {
            menu.mixed_columns.splice($index, 1);
        };

        $scope.addSubMenu = function (menu) {
            menu.items.push(new MainMenuFactory.MenuItem());
        };

        $scope.removeSubMenu = function (menu, $index) {
            menu.items.splice($index, 1);
        };

        $scope.addItem = function (menu) {
            menu.items.push({
                menu_type: 'opencart',
                menu_item: {}
            });
        };

        $scope.removeItem = function (menu, $index) {
            menu.items.splice($index, 1);
        };

        $scope.addHtmlBlock = function (menu) {
            menu.html_blocks.push(new MainMenuFactory.HtmlMenuItem());
        };

        $scope.removeHtmlBlock = function (menu, $index) {
            menu.html_blocks.splice($index, 1);
        };

        $scope.addCMSBlock = function (column) {
            column.cms_blocks = column.cms_blocks || {};
            column.cms_blocks.push(new MainMenuFactory.MenuCMSBlock());
        };

        $scope.removeCMSBlock = function (column, $index) {
            column.cms_blocks.splice($index, 1);
        };

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.setSetting('mega_menu', $scope.store_id, { items: $scope.items, close_others: $scope.close_others, options: $scope.options }).then(function (response) {
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.reset = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.getTopCategories().then(function (response) {
                Spinner.hide($src);
                $scope.items = [];
                _.each(response, function (category) {
                    var item = _.extend(new MainMenuFactory.Menu(), {
                        type: "categories",
                        categories: {
                            type: "existing",
                            show: "both",
                            items: [ ],
                            render_as: "dropdown",
                            top: {
                                id: category.category_id,
                                name: category.name
                            },
                            subcategories: []
                        }
                    });
                    $scope.items.push(item);
                });
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, model, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            if (value) {
                if (model === null) {
                    $scope.close_others = false;
                } else {
                    model.close_others = false;
                }
            }
        };
    });

});
define('controllers/footer/menu',['./../module', 'underscore'], function (module, _) {

    module.controller('FooterMenuController', function ($scope, $routeParams, $timeout, Spinner, Rest) {
        $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;

        /* module */
        $scope.rows = [];
        $scope.close_others = false;
        $scope.newsletter_modules = [];

        $scope.default_language = Journal2Config.languages.default;
        $scope.featured_modules = [];

        var Row = function () {
            return {
                type: 'columns',
                text: {},
                columns: [],
                contacts: [],
                social_icons: [],
                status: 1,
                sort_order: '',
                bottom_spacing: '',
                padding_top: '',
                padding_right: '',
                padding_bottom: '',
                padding_left: '',
                items_per_row: {
                    "hide_columns": true,
                    "range": "1,10",
                    "step": "1",
                    "value": {
                        "mobile": {
                            "value": "1",
                            "range": "1,10",
                            "step": "1"
                        },
                        "mobile1": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        },
                        "tablet": {
                            "value": "3",
                            "range": "1,10",
                            "step": "1"
                        },
                        "tablet1": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        },
                        "tablet2": {
                            "value": "1",
                            "range": "1,10",
                            "step": "1"
                        },
                        "desktop": {
                            "value": "4",
                            "range": "1,10",
                            "step": "1"
                        },
                        "desktop1": {
                            "value": "3",
                            "range": "1,10",
                            "step": "1"
                        },
                        "desktop2": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        },
                        "large_desktop": {
                            "value": "4",
                            "range": "1,10",
                            "step": "1"
                        },
                        "large_desktop1": {
                            "value": "3",
                            "range": "1,10",
                            "step": "1"
                        },
                        "large_desktop2": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        }
                    }
                },
                is_open: true,
                background: {},
                enable_on_phone: '1',
                enable_on_tablet: '1',
                enable_on_desktop: '1'
            };
        };

        var Column = function () {
            return {
                type: 'menu',
                items: [],
                text: {},
                title: {},
                icon_status: '0',
                icon: {},
                icon_position: 'top',
                icon_border: {},
                icon_bg_color: '',
                icon_width: '',
                icon_height: '',
                is_open: true,
                newsletter_id: '',
                section_type: 'module',
                products: [],
                category: '',
                items_limit: 4,
                module_type: 'featured',
                posts_type: 'newest',
                posts: [],
                status: '1',
                enable_on_phone: '1',
                enable_on_tablet: '1',
                enable_on_desktop: '1'
            };
        };

        var Item = function () {
            return {
                icon: {
                },
                menu: {
                    menu_type: 'opencart',
                    menu_item: {}
                },
                name_overwrite: 0,
                target: 0,
                is_open: true
            };
        };

        var Contact = function () {
            return {
                position: 'left',
                link: {
                    menu_type: 'custom'
                },
                target: 0,
                icon: {},
                name: {},
                tooltip: 0,
                sort_order: '',
                is_open: true
            };
        };

        function extendRows (rows) {
            return _.map(rows, function (row) {
                row = _.extend(new Row(), row);
                if (row.type === 'columns') {
                    row.columns = _.map(row.columns, function (column) {
                        return _.extend(new Column(), column);
                    });
                }
                return row;
            });
        }

        Rest.all({
            footer_menu: Rest.getSetting('footer_menu', $scope.store_id),
            featured_modules: Rest.getFeaturedModules(),
            newsletter_modules: Rest.getModules('newsletter')
        }, function (response) {
            if (response.footer_menu) {
                $scope.rows = response.footer_menu.rows || [];
                $scope.rows = extendRows($scope.rows);
                $scope.close_others = response.footer_menu.close_others;
            }
            $scope.featured_modules = response.featured_modules;
            $scope.newsletter_modules = response.newsletter_modules;
            Spinner.hide();
        }, function (error) {
            Spinner.hide();
            alert(error);
        });

        $scope.addRow = function () {
            $scope.rows.push(new Row());
        };

        $scope.removeRow = function ($index) {
            $scope.rows.splice($index, 1);
        };

        $scope.addColumn = function (row) {
            row.columns.push(new Column());
        };

        $scope.removeColumn = function (row, $index) {
            row.columns.splice($index, 1);
        };

        $scope.addContact = function (row) {
            row.contacts.push(new Contact());
        };

        $scope.removeContact = function (row, $index) {
            row.contacts.splice($index, 1);
        };

        $scope.addItem = function (column) {
            column.items.push(new Item());
        };

        $scope.removeItem = function (column, $index) {
            column.items.splice($index, 1);
        };

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.setSetting('footer_menu', $scope.store_id, { rows: $scope.rows, close_others: $scope.close_others }).then(function (response) {
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.reset = function () {
            var rows = [{
                type: 'columns',
                columns: [{
                    "type": "menu",
                    "items": [{
                        "icon": [],
                        "menu": {
                            "menu_type": "information",
                            "menu_item": {
                                "id": "4",
                                "name": "About Us"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "information",
                            "menu_item": {
                                "id": "6",
                                "name": "Delivery Information"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "information",
                            "menu_item": {
                                "id": "3",
                                "name": "Privacy Policy"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "information",
                            "menu_item": {
                                "id": "5",
                                "name": "Terms &amp; Conditions"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }],
                    "text": [],
                    "title": {
                        "value": {
                            "1": "Information",
                            "2": "Information"
                        }
                    }
                }, {
                    "type": "menu",
                    "items": [{
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "information\/contact"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "account\/return\/insert"
                            }
                        },
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "information\/sitemap"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }],
                    "text": [],
                    "title": {
                        "value": {
                            "1": "Customer Service",
                            "2": "Customer Service"
                        }
                    }
                }, {
                    "type": "menu",
                    "items": [{
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "product\/manufacturer"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "account\/voucher"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "affiliate\/account"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "product\/special"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }],
                    "text": [],
                    "title": {
                        "value": {
                            "1": "Extras",
                            "2": "Extras"
                        }
                    }
                }, {
                    "type": "menu",
                    "items": [{
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "account\/account"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "account\/order"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "account\/wishlist"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }, {
                        "icon": [],
                        "menu": {
                            "menu_type": "opencart",
                            "menu_item": {
                                "page": "account\/newsletter"
                            }
                        },
                        name_overwrite: 0,
                        "target": 0
                    }],
                    "text": [],
                    "title": {
                        "value": {
                            "1": "My Account",
                            "2": "My Account"
                        }
                    }
                }],
                contacts: [],
                items_per_row: {
                    "hide_columns": true,
                    "range": "1,10",
                    "step": "1",
                    "value": {
                        "mobile": {
                            "value": "1",
                            "range": "1,10",
                            "step": "1"
                        },
                        "mobile1": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        },
                        "tablet": {
                            "value": "3",
                            "range": "1,10",
                            "step": "1"
                        },
                        "tablet1": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        },
                        "tablet2": {
                            "value": "1",
                            "range": "1,10",
                            "step": "1"
                        },
                        "desktop": {
                            "value": "4",
                            "range": "1,10",
                            "step": "1"
                        },
                        "desktop1": {
                            "value": "3",
                            "range": "1,10",
                            "step": "1"
                        },
                        "desktop2": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        },
                        "large_desktop": {
                            "value": "4",
                            "range": "1,10",
                            "step": "1"
                        },
                        "large_desktop1": {
                            "value": "3",
                            "range": "1,10",
                            "step": "1"
                        },
                        "large_desktop2": {
                            "value": "2",
                            "range": "1,10",
                            "step": "1"
                        }
                    }
                },
                background: {},
                sort_order: ''
            }];
            $scope.rows = extendRows(rows);
        };

        $scope.toggleAccordion = function (items, type, item, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            if (value) {
                if (type === 'scope') {
                    $scope.close_others = false;
                } else {
                    item.close_others = false;
                }
            }
        };

        /* add product */
        $scope.addProduct = function (section) {
            section.products.push({ });
        };

        /* remove product */
        $scope.removeProduct = function (section, $index) {
            section.products.splice($index, 1);
        };

        /* add post */
        $scope.addPost = function (column) {
            column.posts.push({ });
        };

        /* remove product */
        $scope.removeProduct = function (column, $index) {
            column.posts.splice($index, 1);
        };
    });

});
define('controllers/footer/copyright',['./../module', 'underscore'], function (module, _) {

    module.controller('FooterCopyrightController', function ($scope, $routeParams, $timeout, Spinner, Rest) {

        $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;

        $scope.copyright = {};

        Rest.getSetting('copyright', $scope.store_id).then(function (response) {
            if (response) {
                $scope.copyright = response;
            }
            $timeout(function () {
                Spinner.hide();
            }, 1);
        }, function (error) {
            console.error(error);
        });

        $scope.save = function () {
            Rest.setSetting('copyright', $scope.store_id, $scope.copyright).then(function (response) {
                console.log(response);
            }, function (error) {
                console.error(error);
            });
        };

    });

});

define('controllers/footer/payments',['./../module', 'underscore'], function (module, _) {

    module.controller('FooterPaymentsController', function ($scope, $routeParams, $timeout, Spinner, Rest) {

        $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;
        $scope.default_language = Journal2Config.languages.default;

        $scope.payments = [];
        $scope.close_others = false;

        var Item = function () {
            return {
                image: '',
                name: {},
                link: '',
                new_window: '0',
                sort_order: ''
            };
        };

        Rest.getSetting('payments', $scope.store_id).then(function (response) {
            if (response) {
                $scope.payments = response.payments || [];
                $scope.close_others = response.close_others;
            }
            $timeout(function () {
                Spinner.hide();
            }, 1);
        }, function (error) {
            console.error(error);
        });

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.setSetting('payments', $scope.store_id, { payments: $scope.payments, close_others: $scope.close_others }).then(function (response) {
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addItem = function () {
            $scope.payments.push(new Item());
        };

        $scope.removeItem = function ($index) {
            $scope.payments.splice($index, 1);
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});

define('controllers/blog/settings',['./../module', 'underscore'], function (module, _) {

    module.controller('GeneralBlogSettingsController', function ($scope, $routeParams, $timeout, localStorageService, Spinner, Rest) {

        $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;

        $scope.blog_settings = {
            status: '1',
            feed: '1',
            posts_per_row: {
                "range": "1,10",
                "step": "1",
                "value": {
                    "mobile": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "mobile1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet2": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop1": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop2": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop": {
                        "value": "5",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop1": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop2": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    }
                }
            },
            related_products: '1',
            related_products_per_row: {
                "range": "1,10",
                "step": "1",
                "value": {
                    "mobile": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "mobile1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet2": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop1": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop2": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop": {
                        "value": "5",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop1": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop2": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    }
                }
            },
            posts_display: 'grid',
            posts_sort: 'newest',
            author_name: 'username',
            posts_limit: 15
        };

        $scope.isLoading = true;
        $timeout(function () {
            Rest.all({
                blog_settings: Rest.getSetting('blog_settings', $scope.store_id)
            }, function (response) {
                $scope.blog_settings = _.extend($scope.blog_settings, response.blog_settings || {});

                $timeout(function () {
                    $scope.isLoading = false;
                    Spinner.hide();
                }, 1);
            }, function (error) {
                alert(error);
            });
        }, 500);

        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            Rest.setSetting('blog_settings', $scope.store_id, $scope.blog_settings).then(function (response) {
                Spinner.hide($src);
                localStorageService.set('blog_settings_accordion', $scope.accordion);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* expand / collapse */
        $scope.accordion = {
            accordions: { },
            close_others: false
        };

        $scope.accordion = localStorageService.get('blog_settings_accordion') || $scope.accordion;

        $scope.toggleAccordion = function (value) {
            var $accordions = $('#main-accordion > div > .accordion-group');
            for (var i=0; i<$accordions.length; i++) {
                $scope.accordion.accordions[i] = value;
            }
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/blog/categories/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogCategoriesAllController', function ($scope, $routeParams, $timeout, Spinner, Rest) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;
        $scope.paginationItemsPerPage = Journal2Config.items_per_page;

        $scope.categories = [];

        var filter = function () {
            Spinner.show();
            Rest.getBlog('categories&start=' + $scope.paginationCurrentPage + '&limit=' + $scope.paginationItemsPerPage).then(function (response) {
                $scope.categories = response.categories;
                $scope.paginationTotalItems = response.total;
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        filter();

        $scope.$watch('paginationCurrentPage', function (n, o) {
            if (n !== o) {
                filter();
            }
        });

    });

});

define('controllers/blog/categories/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogCategoriesFormController', function ($scope, $routeParams, $location, $timeout, localStorageService, Spinner, Rest) {

        $scope.category_id = $routeParams.category_id || null;
        $scope.layouts = Journal2Config.layouts || [];
        $scope.stores = Journal2Config.stores || [];

        $scope.category_data = {
            layouts: { },
            stores: { }
        };

        if ($scope.category_id) {
            Rest.getBlog('category&category_id=' + $scope.category_id).then(function (response) {
                $scope.category_data = _.extend($scope.category_data, response);
                if (angular.isArray($scope.category_data.layouts)) {
                    $scope.category_data.layouts = { };
                }
                _.each(Journal2Config.stores, function (store) {
                    $scope.category_data.stores['s_' + store.store_id] = '0';
                });
                _.each(response.store_ids, function (store) {
                    $scope.category_data.stores['s_' + store] = '1';
                });
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        } else {
            _.each(Journal2Config.stores, function (store) {
                $scope.category_data.stores['s_' + store.store_id] = '1';
            });
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.category_id) {
                Rest.postBlog('edit_category&category_id=' + $scope.category_id, $scope.category_data).then(function (response) {
                    localStorageService.set('blog_categories_accordion', $scope.accordion);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.postBlog('create_category', $scope.category_data).then(function (response) {
                    localStorageService.set('blog_categories_accordion', $scope.accordion);
                    $location.path('/blog/categories/form/' + response);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        /* delete */
        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete category?')) {
                Spinner.hide($src);
                return;
            }
            Rest.postBlog('delete_category&category_id=' + $scope.category_id).then(function (response) {
                $location.path('/blog/categories');
                Spinner.hide($src);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.accordion = {
            general_is_open: true,
            layouts_is_open: true,
            stores_is_open: true,
            close_others: false
        };

        $scope.accordion = _.extend($scope.accordion, localStorageService.get('blog_categories_accordion') || $scope.accordion);

        $scope.toggleAccordion = function (value) {
            $scope.accordion.general_is_open = value;
            $scope.accordion.layouts_is_open = value;
            $scope.accordion.stores_is_open = value;
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/blog/posts/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogPostsAllController', function ($scope, $routeParams, $timeout, Spinner, Rest) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;
        $scope.paginationItemsPerPage = Journal2Config.items_per_page;

        $scope.posts = [];

        var filter = function () {
            Spinner.show();
            Rest.getBlog('posts&start=' + $scope.paginationCurrentPage + '&limit=' + $scope.paginationItemsPerPage).then(function (response) {
                $scope.posts = response.posts;
                $scope.paginationTotalItems = response.total;
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        filter();

        $scope.$watch('paginationCurrentPage', function (n, o) {
            if (n !== o) {
                filter();
            }
        });

    });

});

define('controllers/blog/posts/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogPostsFormController', function ($scope, $routeParams, $location, $timeout, localStorageService, Spinner, Rest) {

        $scope.post_id = $routeParams.post_id || null;
        $scope.layouts = Journal2Config.layouts || [];
        $scope.stores = Journal2Config.stores || [];

        $scope.post_data = {
            status: "1",
            layouts: { },
            stores: { },
            author_id: Journal2Config.user_id,
            comments: 2
        };

        $scope.categories = [];
        $scope.authors = [];

        Rest.getBlog('categories').then(function (response) {
            $scope.categories = response.categories;
        }, function (error) {
            alert(error);
        });

        Rest.getBlog('authors').then(function (response) {
            $scope.authors = response;
        }, function (error) {
            alert(error);
        });

        if ($scope.post_id) {
            Rest.getBlog('post&post_id=' + $scope.post_id).then(function (response) {
                $scope.post_data = _.extend($scope.post_data, response);
                if (angular.isArray($scope.post_data.layouts)) {
                    $scope.post_data.layouts = { };
                }
                _.each(Journal2Config.stores, function (store) {
                    $scope.post_data.stores['s_' + store.store_id] = '0';
                });
                _.each(response.store_ids, function (store) {
                    $scope.post_data.stores['s_' + store] = '1';
                });
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        } else {
            _.each(Journal2Config.stores, function (store) {
                $scope.post_data.stores['s_' + store.store_id] = '1';
            });
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.post_id) {
                Rest.postBlog('edit_post&post_id=' + $scope.post_id, $scope.post_data).then(function (response) {
                    localStorageService.set('blog_posts_accordion', $scope.accordion);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.postBlog('create_post', $scope.post_data).then(function (response) {
                    localStorageService.set('blog_posts_accordion', $scope.accordion);
                    $location.path('/blog/posts/form/' + response);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        /* delete */
        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete post?')) {
                Spinner.hide($src);
                return;
            }
            Rest.postBlog('delete_post&post_id=' + $scope.post_id).then(function (response) {
                console.log(response);
                $location.path('/blog/posts');
                Spinner.hide($src);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.accordion = {
            general_is_open: true,
            details_is_open: true,
            data_is_open: true,
            links_is_open: true,
            layouts_is_open: true,
            stores_is_open: true,
            close_others: false
        };

        $scope.accordion = _.extend($scope.accordion, localStorageService.get('blog_posts_accordion') || $scope.accordion);

        $scope.toggleAccordion = function (value) {
            $scope.accordion.general_is_open = value;
            $scope.accordion.details_is_open = value;
            $scope.accordion.data_is_open = value;
            $scope.accordion.links_is_open = value;
            $scope.accordion.layouts_is_open = value;
            $scope.accordion.stores_is_open = value;
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

        /* add category */
        $scope.addCategory = function () {
            $scope.post_data.categories = $scope.post_data.categories || [];
            $scope.post_data.categories.push({});
        };

        /* remove category */
        $scope.removeCategory = function ($index) {
            $scope.post_data.categories.splice($index, 1);
        };

        /* add product */
        $scope.addProduct = function () {
            $scope.post_data.products = $scope.post_data.products || [];
            $scope.post_data.products.push({});
        };

        /* remove product */
        $scope.removeProduct = function ($index) {
            $scope.post_data.products.splice($index, 1);
        };


    });

});

define('controllers/blog/comments/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogCommentsAllController', function ($scope, $routeParams, $timeout, $location, Spinner, Rest) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;
        $scope.paginationItemsPerPage = Journal2Config.items_per_page;

        $scope.comments = [];
        $scope.posts = [];
        $scope.filter_post_id = -1;
        $scope.filter_status = -1;
        $scope.filter_type = -1;

        Rest.getBlog('posts').then(function (response) {
            $scope.posts = response.posts;
            $scope.filter = function () {
                $scope.paginationCurrentPage = 1;
                filter();
            };
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        var filter = function () {
            Spinner.show();
            Rest.getBlog('comments&post_id=' + $scope.filter_post_id + '&status=' + $scope.filter_status + '&type=' + $scope.filter_type + '&start=' + $scope.paginationCurrentPage + '&limit=' + $scope.paginationItemsPerPage).then(function (response) {
                $scope.comments = response.comments;
                $scope.paginationTotalItems = response.total;
                Spinner.hide();
            }, function (error) {
                alert(error);
                Spinner.hide();
            });
        };

        $scope.$watch('paginationCurrentPage', function (n, o) {
            if (n !== o) {
                filter();
            }
        });

    });

});

define('controllers/blog/comments/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogCommentsFormController', function ($scope, $routeParams, $location, $timeout, localStorageService, Spinner, Rest) {

        $scope.comment_id = $routeParams.comment_id || null;

        $scope.comment_data = { };

        if ($scope.comment_id) {
            Rest.getBlog('comment&comment_id=' + $scope.comment_id).then(function (response) {
                $scope.comment_data = _.extend($scope.comment_data, response);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.comment_id) {
                Rest.postBlog('edit_comment&comment_id=' + $scope.comment_id, $scope.comment_data).then(function (response) {
                    localStorageService.set('blog_comments_accordion', $scope.accordion);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        /* delete */
        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete comment?')) {
                Spinner.hide($src);
                return;
            }
            Rest.postBlog('delete_comment&comment_id=' + $scope.comment_id).then(function (response) {
                console.log(response);
                $location.path('/blog/comments');
                Spinner.hide($src);
            }, function (error) {
                alert(error);
                Spinner.hide($src);
            });
        };

        $scope.accordion = {
            general_is_open: true,
            close_others: false
        };

        $scope.accordion = _.extend($scope.accordion, localStorageService.get('blog_comments_accordion') || $scope.accordion);

        $scope.toggleAccordion = function (value) {
            $scope.accordion.general_is_open = value;
            if (value) {
                $scope.accordion.close_others = false;
            }
        };

    });

});

define('controllers/blog_modules/categories/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleCategoriesAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'blog_categories';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/blog_modules/categories/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleCategoriesFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'blog_categories';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            general_is_open: true,
            close_others: false,
            module_name: 'New Module'
        };

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/blog_modules/comments/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleCommentsAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'blog_comments';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/blog_modules/comments/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleCommentsFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'blog_comments';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            general_is_open: true,
            close_others: false,
            module_name: 'New Module',
            limit: 5
        };

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                $scope.module_data.general_is_open = true;
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/blog_modules/search/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleSearchAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'blog_search';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/blog_modules/search/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleSearchFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'blog_search';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            general_is_open: true,
            close_others: false,
            module_name: 'New Module',
            title: { },
            placeholder: { }
        };

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                $scope.module_data.general_is_open = true;
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/blog_modules/side_posts/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleSidePostsAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'blog_side_posts';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/blog_modules/side_posts/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleSidePostsFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'blog_side_posts';
        $scope.default_language = Journal2Config.languages.default;
        $scope.posts = [];

        $scope.module_data = {
            general_is_open: true,
            close_others: false,
            module_name: 'New Module',
            module_type: 'newest',
            posts: [],
            limit: 5
        };

        Rest.getBlog('posts').then(function (response) {
            $scope.posts = response.posts;
        }, function (error) {
            alert(error);
        });

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                $scope.module_data.general_is_open = true;
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

        $scope.addPost = function () {
            $scope.module_data.posts.push({});
        };

        $scope.removePost = function ($index) {
            $scope.module_data.posts.splice($index, 1);
        };

    }]);

});
define('controllers/blog_modules/posts/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModulePostsAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'blog_posts';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/blog_modules/posts/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModulePostsFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'blog_posts';
        $scope.default_language = Journal2Config.languages.default;
        $scope.posts = [];

        $scope.module_data = {
            general_is_open: true,
            top_bottom_is_open: true,
            close_others: false,
            module_name: 'New Module',
            top_bottom_placement: 0,
            module_padding:'0',
            background: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            module_type: 'newest',
            posts: [],
            display: 'grid',
            items_per_row: {
                "range": "1,10",
                "step": "1",
                "value": {
                    "mobile": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "mobile1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet2": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop1": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop2": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop": {
                        "value": "5",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop1": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop2": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    }
                }
            },
            description: 1,
            description_limit: 150,
            limit: 5,
            content_align:'center',
            image_width: 250,
            image_height: 250,
            image_type: 'fit',
            carousel: 0,
            carousel_arrows: 'none',
            carousel_buttons: 1,
            autoplay: '0',
            pause_on_hover: '1',
            transition_speed: '400',
            transition_delay: '3000',
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        Rest.getBlog('posts').then(function (response) {
            $scope.posts = response.posts;
        }, function (error) {
            alert(error);
        });

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                $scope.module_data.general_is_open = true;
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

        $scope.addPost = function () {
            $scope.module_data.posts.push({});
        };

        $scope.removePost = function ($index) {
            $scope.module_data.posts.splice($index, 1);
        };

    }]);

});
define('controllers/blog_modules/tags/all',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleTagsAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'blog_tags';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/blog_modules/tags/form',['./../../module', 'underscore'], function (module, _) {

    module.controller('BlogModuleTagsFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'blog_tags';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            general_is_open: true,
            close_others: false,
            module_name: 'New Module',
            limit: 15
        };

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                $scope.module_data.general_is_open = true;
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/slider/all',['./../module', 'underscore'], function (module, _) {

    module.controller('SliderAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'slider';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/slider/form',['./../module', 'underscore'], function (module, _) {

    module.factory('SliderFactory', function () {
        return {
            Slider: function () {
                return {
                    module_name: 'New Slider',
                    width: '',
                    height: '',
                    hidecaptionsonmobile: '0',
                    timer: 'bottom',
                    js_options: {
                        delay: 4000,
                        onHoverStop: 'off',
                        thumbWidth: 100,
                        thumbHeight: 75,
                        thumbAmount: 4,
                        hideThumbs: 1,
                        navigationType: 'bullet',
                        navigationArrows: 'solo',
                        navigationStyle: 'round',
                        navigationHAlign: 'center',
                        navigationVAlign: 'bottom',
                        navigationHOffset: '',
                        navigationVOffset: '20'
                    },
                    preload_images: '1',
                    background: {},
                    fullwidth: '0',
                    margin_top: '',
                    margin_bottom: '',
                    slides: [],
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            },
            Slide: function () {
                return {
                    is_open: true,
                    slide_name: '',
                    image: '',
                    thumb: '',
                    transition: 'fade',
                    slotamount: '',
                    masterspeed: 800,
                    delay: '',
                    captions: [],
                    status: 1,
                    sort_order: '',
                    link: {
                        menu_type: 'custom'
                    },
                    link_new_window: '0',
                    easing: 'easeInOutQuart'
                };
            },
            Caption: function () {
                return {
                    is_open: true,
                    caption_name: '',
                    type: 'image',
                    video_type: 'youtube',
                    video_yt_id: '',
                    video_vm_id: '',
                    video_path: '',
                    video_fullwidth: 0,
                    video_width: '',
                    video_height: '',
                    video_autoplay: 0,
                    video_autoplayonlyfirsttime: 0,
                    video_nextslideatend: 1,
                    video_volume: 1,
                    text_font: {},
                    text_color: '',
                    text_bgcolor: '',
                    text_hover_color: '',
                    text_hover_bg_color: '',
                    text_border: {},
                    text_hover_border_color: '',
                    text_padding_top: '',
                    text_padding_right: '',
                    text_padding_bottom: '',
                    text_padding_left: '',
                    text_line_height: '',
                    text_align: 'center',
                    multilanguage_position: '0',
                    x: '',
                    y: '',
                    x_ml: {},
                    y_ml: {},
                    animation_in: 'fade',
                    animation_out: 'fadeout',
                    custom_in_transition_x: '',
                    custom_in_transition_y: '',
                    custom_in_scale_x: '',
                    custom_in_scale_y: '',
                    custom_in_rotation_x: '',
                    custom_in_rotation_y: '',
                    custom_in_rotation_z: '',
                    transformOriginXin: 'center',
                    transformOriginYin: 'center',
                    custom_in_transform_perspective: '500',
                    custom_in_opacity: '1',
                    custom_out_transition_x: '',
                    custom_out_transition_y: '',
                    custom_out_scale_x: '',
                    custom_out_scale_y: '',
                    custom_out_rotation_x: '',
                    custom_out_rotation_y: '',
                    custom_out_rotation_z: '',
                    transformOriginXout: 'center',
                    transformOriginYout: 'center',
                    custom_out_transform_perspective: '500',
                    custom_out_opacity: '1',
                    speed: '',
                    start: '',
                    endspeed: '',
                    end: '',
                    status: 1,
                    sort_order: '',
                    link: {
                        menu_type: 'custom'
                    },
                    link_new_window: '0',
                    easing: 'easeInOutQuart',
                    endeasing: 'easeInOutQuart'
                };
            },
            Transitions: function () {
                return [
                    {
                        type: 'Flat Transitions',
                        transitions: [
                            { name: 'Slide To Top', id: 'slideup' },
                            { name: 'Slide To Bottom', id: 'slidedown' },
                            { name: 'Slide To Right', id: 'slideright' },
                            { name: 'Slide To Left', id: 'slideleft' },
                            { name: 'Slide Horizontal (depending on Next/Previous)', id: 'slidehorizontal' },
                            { name: 'Slide Vertical (depending on Next/Previous)', id: 'slidevertical' },
                            { name: 'Slide Boxes', id: 'boxslide' },
                            { name: 'Slide Slots Horizontal', id: 'slotslide-horizontal' },
                            { name: 'Slide Slots Vertical', id: 'slotslide-vertical' },
                            { name: 'Fade Boxes', id: 'boxfade' },
                            { name: 'Fade Slots Horizontal', id: 'slotfade-horizontal' },
                            { name: 'Fade Slots Vertical', id: 'slotfade-vertical' },
                            { name: 'Fade and Slide from Right', id: 'fadefromright' },
                            { name: 'Fade and Slide from Left', id: 'fadefromleft' },
                            { name: 'Fade and Slide from Top', id: 'fadefromtop' },
                            { name: 'Fade and Slide from Bottom', id: 'fadefrombottom' },
                            { name: 'Fade To Left and Fade From Right', id: 'fadetoleftfadefromright' },
                            { name: 'Fade To Right and Fade From Left', id: 'fadetorightfadefromleft' },
                            { name: 'Fade To Top and Fade From Bottom', id: 'fadetotopfadefrombottom' },
                            { name: 'Fade To Bottom and Fade From Top', id: 'fadetobottomfadefromtop' },
                            { name: 'Parallax to Right', id: 'parallaxtoright' },
                            { name: 'Parallax to Left', id: 'parallaxtoleft' },
                            { name: 'Parallax to Top', id: 'parallaxtotop' },
                            { name: 'Parallax to Bottom', id: 'parallaxtobottom' },
                            { name: 'Zoom Out and Fade From Right', id: 'scaledownfromright' },
                            { name: 'Zoom Out and Fade From Left', id: 'scaledownfromleft' },
                            { name: 'Zoom Out and Fade From Top', id: 'scaledownfromtop' },
                            { name: 'Zoom Out and Fade From Bottom', id: 'scaledownfrombottom' },
                            { name: 'ZoomOut', id: 'zoomout' },
                            { name: 'ZoomIn', id: 'zoomin' },
                            { name: 'Zoom Slots Horizontal', id: 'slotzoom-horizontal' },
                            { name: 'Zoom Slots Vertical', id: 'slotzoom-vertical' },
                            { name: 'Fade', id: 'fade' },
                            { name: 'Random Flat', id: 'random-static' },
                            { name: 'Random Flat and Premium', id: 'random' }
                        ]
                    },
                    {
                        type: 'Premium Transitions',
                        transitions: [
                            { name: 'Curtain from Left', id: 'curtain-1' },
                            { name: 'Curtain from Right', id: 'curtain-2' },
                            { name: 'Curtain from Middle', id: 'curtain-3' },
                            { name: '3D Curtain Horizontal', id: '3dcurtain-horizontal' },
                            { name: '3D Curtain Vertical', id: '3dcurtain-vertical' },
                            { name: 'Cube Vertical', id: 'cube' },
                            { name: 'Cube Horizontal', id: 'cube-horizontal' },
                            { name: 'In Cube Vertical', id: 'incube' },
                            { name: 'In Cube Horizontal', id: 'incube-horizontal' },
                            { name: 'TurnOff Horizontal', id: 'turnoff' },
                            { name: 'TurnOff Vertical', id: 'turnoff-vertical' },
                            { name: 'Paper Cut', id: 'papercut' },
                            { name: 'Fly In', id: 'flyin' },
                            { name: 'Random Premium', id: 'random-premium' },
                            { name: 'Random Flat and Premium', id: 'random' }
                        ]
                    }
                ];
            },
            Easings: function () {
                return [
                    'Linear.easeNone', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce'
                ];
            },
            IncomingCaptionAnimations: function () {
                return [
                    { id: 'sft', name: 'Short from Top' },
                    { id: 'sfb', name: 'Short from Bottom' },
                    { id: 'sfr', name: 'Short from Right' },
                    { id: 'sfl', name: 'Short from Left' },
                    { id: 'lft', name: 'Long from Top' },
                    { id: 'lfb', name: 'Long from Bottom' },
                    { id: 'lfr', name: 'Long from Right' },
                    { id: 'lfl', name: 'Long from Left' },
                    { id: 'skewfromleft', name: 'Skew from Left' },
                    { id: 'skewfromright', name: 'Skew from Right' },
                    { id: 'skewfromleftshort', name: 'Skew Short from Left' },
                    { id: 'skewfromrightshort', name: 'Skew Short from Right' },
                    { id: 'fade', name: 'Fading' },
                    { id: 'randomrotate', name: 'Fade in, Rotate from a Random position and Degree' },
                    { id: 'customin', name: 'Custom' }
                ];
            },
            OutgoingCaptionAnimations: function () {
                return [
                    { id: 'stt', name: 'Short to Top' },
                    { id: 'stb', name: 'Short to Bottom' },
                    { id: 'str', name: 'Short to Right' },
                    { id: 'stl', name: 'Short to Left' },
                    { id: 'ltt', name: 'Long to Top' },
                    { id: 'ltb', name: 'Long to Bottom' },
                    { id: 'ltr', name: 'Long to Right' },
                    { id: 'ltl', name: 'Long to Left' },
                    { id: 'skewtoleft', name: 'Skew to Left' },
                    { id: 'skewtoright', name: 'Skew to Right' },
                    { id: 'skewtoleftshort', name: 'Skew Short to Left' },
                    { id: 'skewtorightshort', name: 'Skew Short to Right' },
                    { id: 'fadeout', name: 'Fading' },
                    { id: 'randomrotateout', name: 'Fade in, Rotate from a Random position and Degree' },
                    { id: 'customout', name: 'Custom' }
                ];
            }
        };
    });

    module.controller('SliderFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', 'SliderFactory', '$timeout', function ($scope, $routeParams, $location, Rest, Spinner, SliderFactory, $timeout) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'slider';
        $scope.default_language = Journal2Config.languages.default;
        $scope.transitions = new SliderFactory.Transitions();
        $scope.easings = new SliderFactory.Easings();
        $scope.incoming_caption_animations = new SliderFactory.IncomingCaptionAnimations();
        $scope.outgoing_caption_animations = new SliderFactory.OutgoingCaptionAnimations();

        $scope.module_data = new SliderFactory.Slider();

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                $scope.module_data.slides = _.map($scope.module_data.slides, function (slide) {
                    var s = _.extend(new SliderFactory.Slide(), slide);
                    s.captions = _.map(s.captions, function (caption) {
                        return _.extend(new SliderFactory.Caption(), caption);
                    });
                    return s;
                });
                $timeout(function () {
                    Spinner.hide();
                }, 1);
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.navigation_is_open = true;
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addSlide = function () {
            $scope.module_data.slides.push(new SliderFactory.Slide());
        };

        $scope.removeSlide = function ($index) {
            $scope.module_data.slides.splice($index, 1);
        };

        $scope.addCaption = function (slide) {
            slide.captions.push(new SliderFactory.Caption());
        };

        $scope.removeCaption = function (slide, $index) {
            slide.captions.splice($index, 1);
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.navigation_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

        $scope.toggleAccordion2 = function (slide, value) {
            _.each(slide.captions, function (item) {
                item.is_open = value;
            });
            if (value) {
                $scope.close_others = value;
            }
        };

    }]);

});
define('controllers/simple_slider/all',['./../module', 'underscore'], function (module, _) {

    module.controller('SimpleSliderAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'simple_slider';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/simple_slider/form',['./../module', 'underscore'], function (module, _) {

    module.factory('SimpleSliderFactory', function () {
        return {
            Slider: function () {
                return {
                    module_name: 'New Slider',
                    height: '',
                    transition: 'fade',
                    transition_speed: 1000,
                    autoplay: '1',
                    pause_on_hover: '1',
                    transition_delay: 3000,
                    touch_drag: '0',
                    preload_images: '1',
                    arrows: '0',
                    bullets: '1',
                    show_on_hover: '1',
                    background: {},
                    margin_top: '',
                    margin_bottom: '',
                    touch_drag: '0',
                    slides: [],
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            },
            Slide: function () {
                return {
                    is_open: true,
                    slide_name: '',
                    image: '',
                    link: {
                        menu_type: 'custom'
                    },
                    link_new_window: '0',
                    status: 1,
                    sort_order: ''
                };
            }
        };
    });

    module.controller('SimpleSliderFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', 'SimpleSliderFactory', '$timeout', function ($scope, $routeParams, $location, Rest, Spinner, SimpleSliderFactory, $timeout) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'simple_slider';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = new SimpleSliderFactory.Slider();

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                $scope.module_data.slides = _.map($scope.module_data.slides, function (slide) {
                    return _.extend(new SimpleSliderFactory.Slide(), slide);
                });
                $timeout(function () {
                    Spinner.hide();
                }, 1);
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.navigation_is_open = true;
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addSlide = function () {
            $scope.module_data.slides.push(new SimpleSliderFactory.Slide());
        };

        $scope.removeSlide = function ($index) {
            $scope.module_data.slides.splice($index, 1);
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.navigation_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/cms_blocks/all',['./../module', 'underscore'], function (module, _) {

    module.controller('CMSBlocksAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'cms_blocks';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/cms_blocks/form',['./../module', 'underscore'], function (module, _) {

    module.controller('CMSBlocksFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'cms_blocks';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            module_title: {},
            items_per_row: {
                "range": "1,10",
                "step": "1",
                "value": {
                    "mobile": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "mobile1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet1": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet2": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop1": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop2": {
                        "value": "2",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop1": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop2": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    }
                }
            },
            module_background:{},
            module_padding:'0',
            background: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            sections: [],
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        var Section = function () {
            return {
                bg_color: '',
                is_open: true,
                section_title: {},
                text: {},
                text_align: 'left',
                icon_status: '0',
                icon_position: 'top',
                icon: {},
                icon_border: {},
                icon_bg_color: '',
                icon_width: '',
                icon_height: '',
                status: '1',
                sort_order: ''
            };
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                $scope.module_data.sections = _.map($scope.module_data.sections, function (section) {
                    return _.extend(new Section(), section);
                });
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            Spinner.hide();
        }

        $scope.addSection = function () {
            $scope.module_data.sections.push(new Section());
        };

        $scope.removeSection = function ($index) {
            $scope.module_data.sections.splice($index, 1);
        };

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/side_blocks/all',['./../module', 'underscore'], function (module, _) {

    module.controller('SideBlocksAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'side_blocks';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);
        $scope.layouts.unshift({
            layout_id: -1,
            name: 'All Pages'
        });

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: 'footer',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/side_blocks/form',['./../module', 'underscore'], function (module, _) {

    module.controller('SideBlocksFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'side_blocks';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            module_type: 'block',
            icon: {},
            icon_bg_color: 'FFF',
            icon_border: { },
            icon_bg_hover_color: '',
            content_bg_color: '999999',
            alignment: 'left',
            position: 'fixed',
            icon_width: '',
            icon_height: '',
            offset_top: '',
            offset_side: '',
            content_width: '',
            content_padding: '',
            content: { },
            link: {
                menu_type: 'custom',
                url: ''
            },
            new_window: '0'
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

    }]);

});
define('controllers/advanced_grid/all',['./../module', 'underscore'], function (module, _) {

    module.controller('AdvancedGridAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'advanced_grid';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/advanced_grid/form',['./../module', 'underscore'], function (module, _) {

    module.factory('AdvancedGridFactory', [function () {
        return {
            Column: function () {
                return {
                    is_open: true,
                    width: '',
                    status: 1,
                    sort_order: '',
                    modules: []
                };
            },
            Module: function () {
                return {
                    is_open: true,
                    height: '',
                    module_id: '',
                    status: 1,
                    sort_order: '',
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            }
        };
    }]);

    module.controller('AdvancedGridFormController', function ($scope, $routeParams, $location, Rest, Spinner, AdvancedGridFactory) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'advanced_grid';
        $scope.default_language = Journal2Config.languages.default;
        $scope.modules = [];

        $scope.module_data = {
            module_name: 'New Module',
            height: '',
            module_background:{},
            module_padding:'0',
            background: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            grid_dimensions: '1',
            module_spacing: '',
            columns: [],
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        var promises = {
            modules: Rest.getMultiModules()
        };


        if ($scope.module_id) {
            promises.module = Rest.getModule($scope.module_id);
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
        }

        Rest.all(promises, function (response) {
            if ($scope.module_id) {
                $scope.module_data = _.extend($scope.module_data, response.module.module_data);
                $scope.module_data.columns = _.map($scope.module_data.columns, function (column) {
                    var columns = _.extend(new AdvancedGridFactory.Column(), column);
                    columns.modules = _.map(columns.modules, function (module) {
                        return _.extend(new AdvancedGridFactory.Module(), module);
                    });
                    return columns;
                });
            }
            $scope.modules = response.modules;
            Spinner.hide();
        }, function (error) {
            Spinner.hide();
        });

        $scope.addColumn = function () {
            $scope.module_data.columns.push(new AdvancedGridFactory.Column());
        };

        $scope.removeColumn = function ($index) {
            $scope.module_data.columns.splice($index, 1);
        };

        $scope.addModule = function (column) {
            column.modules.push(new AdvancedGridFactory.Module());
        };

        $scope.removeModule = function (column, $index) {
            column.modules.splice($index, 1);
        };

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

        $scope.toggleAccordion2 = function (column, value) {
            _.each(column.modules, function (item) {
                item.is_open = value;
            });
            if (value) {
                column.close_others = false;
            }
        };

    });

});
define('controllers/carousel_grid/all',['./../module', 'underscore'], function (module, _) {

    module.controller('CarouselGridAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'carousel_grid';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/carousel_grid/form',['./../module', 'underscore'], function (module, _) {

    module.factory('CarouselGridFactory', [function () {
        return {
            Column: function () {
                return {
                    is_open: true,
                    width: '',
                    module_id: '',
                    disable_mobile: '0',
                    disable_desktop: '0',
                    status: 1,
                    sort_order: ''
                };
            }
        };
    }]);

    module.controller('CarouselGridFormController', function ($scope, $routeParams, $location, Rest, Spinner, CarouselGridFactory) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'carousel_grid';
        $scope.default_language = Journal2Config.languages.default;
        $scope.modules = [];

        $scope.module_data = {
            module_name: 'New Module',
            background: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            disable_mobile: '0',
            disable_desktop: '0',
            module_spacing: '',
            columns: []
        };

        var promises = {
            modules: Rest.getModules('carousel')
        };


        if ($scope.module_id) {
            promises.module = Rest.getModule($scope.module_id);
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
        }

        Rest.all(promises, function (response) {
            if ($scope.module_id) {
                $scope.module_data = _.extend($scope.module_data, response.module.module_data);
                $scope.module_data.columns = _.map($scope.module_data.columns, function (column) {
                    var columns = _.extend(new CarouselGridFactory.Column(), column);
                    columns.modules = _.map(columns.modules, function (module) {
                        return _.extend(new CarouselGridFactory.Module(), module);
                    });
                    return columns;
                });
            }
            $scope.modules = response.modules;
            Spinner.hide();
        }, function (error) {
            Spinner.hide();
        });

        $scope.addColumn = function () {
            $scope.module_data.columns.push(new CarouselGridFactory.Column());
        };

        $scope.removeColumn = function ($index) {
            $scope.module_data.columns.splice($index, 1);
        };

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

        $scope.toggleAccordion2 = function (column, value) {
            _.each(column.modules, function (item) {
                item.is_open = value;
            });
            if (value) {
                column.close_others = false;
            }
        };

    });

});
define('controllers/fullscreen_slider/all',['./../module', 'underscore'], function (module, _) {

    module.controller('FullScreenSliderAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'fullscreen_slider';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);
        $scope.layouts.unshift({
            layout_id: -1,
            name: 'All Pages'
        });

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: 'footer',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/fullscreen_slider/form',['./../module', 'underscore'], function (module, _) {

    module.factory('FullScreenSliderFactory', function () {
        return {
            Transitions: function () {
                return [
                    { id: 'none',           name: 'No transition effect' },
                    { id: 'fade',           name: 'Fade' },
                    { id: 'slideTop',       name: 'Slide in from top' },
                    { id: 'slideRight',     name: 'Slide in from right' },
                    { id: 'slideBottom',    name: 'Slide in from bottom' },
                    { id: 'slideLeft',      name: 'Slide in from left' },
                    { id: 'carouselRight',  name: 'Carousel from right to left' },
                    { id: 'carouselLeft',   name: 'Carousel from left to right' }
                ];
            }
        };
    });

    module.controller('FullScreenSliderFormController', function ($scope, $routeParams, $location, Rest, Spinner, FullScreenSliderFactory) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'fullscreen_slider';
        $scope.default_language = Journal2Config.languages.default;
        $scope.transitions = new FullScreenSliderFactory.Transitions();

        $scope.module_data = {
            module_name: 'New Module',
            transition: 'fade',
            transition_speed: 700,
            transition_delay: 3000,
            transparent_overlay: '',
            images: [],
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addImage = function () {
            $scope.module_data.images.push({
                is_open: true,
                image: '',
                status: 1,
                sort_order: ''
            });
        };

        $scope.removeImage = function ($index) {
            $scope.module_data.images.splice($index, 1);
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    });

});

define('controllers/photo_gallery/all',['./../module', 'underscore'], function (module, _) {

    module.controller('PhotoGalleryAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'photo_gallery';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/photo_gallery/form',['./../module', 'underscore'], function (module, _) {

    module.controller('PhotoGalleryFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'photo_gallery';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            gallery_name: {},
            thumbs_limit: '',
            thumbs_width: '',
            thumbs_height: '',
            thumbs_type: 'crop',
            items_per_row: {
                "range": "1,10",
                "step": "1",
                "value": {
                    "mobile": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "mobile1": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet": {
                        "value": "5",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet1": {
                        "value": "4",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet2": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop": {
                        "value": "7",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop1": {
                        "value": "6",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop2": {
                        "value": "5",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop": {
                        "value": "8",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop1": {
                        "value": "7",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop2": {
                        "value": "6",
                        "range": "1,10",
                        "step": "1"
                    }
                }
            },
            carousel: 0,
            carousel_arrows: 'none',
            carousel_buttons: 1,
            top_bottom_placement: 0,
            background: {},
            autoplay: '0',
            pause_on_hover: '1',
            transition_speed: '400',
            transition_delay: '3000',
            touch_drag: '0',
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            image_border: {},
            images: [],
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addImage = function () {
            $scope.module_data.images.push({
                is_open: true
            });
        };

        $scope.removeImage = function ($index) {
            $scope.module_data.images.splice($index, 1);
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/text_rotator/all',['./../module', 'underscore'], function (module, _) {

    module.controller('TextRotatorAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'text_rotator';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/text_rotator/form',['./../module', 'underscore'], function (module, _) {

    module.controller('TextRotatorFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'text_rotator';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            module_title: {},
            transition_delay: '4000',
            pause_on_hover: '1',
            text_align: 'center',
            image_align: 'center',
            author_align: 'center',
            text_font: {},
            author_font: {},
            text_background: {},
            image_border: {},
            bullets: '1',
            bullets_position: 'center',
            top_bottom_placement: 0,
            background: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            sections: [],
            random_sections: '0',
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        var Section = function () {
            return {
                is_open: true,
                name: '',
                text: {},
                author: '',
                icon: {},
                image: '',
                status: '1',
                sort_order: ''
            };
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                $scope.module_data.sections = _.map($scope.module_data.sections, function (section) {
                    return _.extend(new Section(), section);
                });
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            Spinner.hide();
        }

        $scope.addSection = function () {
            $scope.module_data.sections.push(new Section());
        };

        $scope.removeSection = function ($index) {
            $scope.module_data.sections.splice($index, 1);
        };

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/headline_rotator/all',['./../module', 'underscore'], function (module, _) {

    module.controller('HeadlineRotatorAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'headline_rotator';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/headline_rotator/form',['./../module', 'underscore'], function (module, _) {

    module.controller('HeadlineRotatorFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'headline_rotator';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            transition_delay: '4000',
            pause_on_hover: '1',
            text_font: {},
            text_background: {},
            text_align: 'center',
            bullets: '0',
            bullets_position: 'center',
            top_bottom_placement: 0,
            background: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            sections: [],
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        var Section = function () {
            return {
                is_open: true,
                name: '',
                text: {},
                icon: {},
                cta: '0',
                cta_link: {
                    menu_type: 'custom'
                },
                cta_icon: {},
                cta_icon_position: 'right',
                cta_new_window: '0',
                cta_text: {},
                cta_position: 'center',
                cta_offset_top: '',
                cta_offset_left: '',
                status: '1',
                sort_order: ''
            };
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                $scope.module_data.sections = _.map($scope.module_data.sections, function (section) {
                    return _.extend(new Section(), section);
                });
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            Spinner.hide();
        }

        $scope.addSection = function () {
            $scope.module_data.sections.push(new Section());
        };

        $scope.removeSection = function ($index) {
            $scope.module_data.sections.splice($index, 1);
        };

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/header_notice/all',['./../module', 'underscore'], function (module, _) {

    module.controller('HeaderNoticeAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'header_notice';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);
        $scope.layouts.unshift({
            layout_id: -1,
            name: 'All Pages'
        });

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: 'header',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/header_notice/form',['./../module', 'underscore'], function (module, _) {

    module.controller('HeaderNoticeFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'header_notice';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            height: '',
            padding_t: '',
            padding_l: '',
            padding_b: '',
            padding_r: '',
            text: {},
            text_align: 'center',
            text_font: {},
            text_link_color: {},
            text_link_hover_color: {},
            button_color: {},
            button_hover_color: {},
            button_bg_color: {},
            button_hover_bg_color: {},
            icon: {},
            float_icon: '1',
            fullwidth: '1',
            icon_position: 'left',
            close_button_type: 'icon',
            close_button_text: {},
            do_not_show_again: '1',
            do_not_show_again_cookie: '',
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        $scope.resetCookie = function () {
            $scope.module_data.do_not_show_again_cookie = Math.random().toString(36).substring(7);
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.content_is_open = true;
            $scope.resetCookie();
            Spinner.hide();
        }


        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.content_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/product_tabs/all',['./../module', 'underscore'], function (module, _) {

    module.controller('ProductTabsAllController', ['$scope', '$location', '$routeParams', 'Rest', 'Spinner', function($scope, $location, $routeParams, Rest, Spinner){

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = [];

        /* scope vars */
        $scope.module_type = 'product_tabs';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            $scope.modules = response.modules;
            Spinner.hide();
        }, function (error) {
            Spinner.hide();
            /* @todo handle error */
            console.log(error);
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

    }]);

});
define('controllers/product_tabs/form',['./../module', 'underscore'], function (module, _) {

    module.controller('ProductTabsFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'product_tabs';
        $scope.default_language = Journal2Config.languages.default;
        $scope.stores = Journal2Config.stores;
        $scope.popup_modules = [];

        $scope.module_data = {
            module_name: 'New Module',
            name: {},
            icon_status: '0',
            icon: {},
            icon_border: {},
            icon_bg_color: '',
            icon_width: '',
            icon_height: '',
            content_type: 'custom',
            out_of_stock_only: '0',
            content: {},
            popup: '',
            global: 1,
            products: [],
            categories: [],
            manufacturers: [],
            store_id: -1,
            status: 1,
            sort_order: '',
            position: 'tab',
            option_position: 'top'
        };

        Rest.getModules('popup').then(function (response) {
            $scope.popup_modules = response;
        }, function (error) {
            alert(error);
        });

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            Spinner.hide();
        }

        $scope.addItem = function (items) {
            items.push({ });
        };

        $scope.removeItem = function (items, $index) {
            items.splice($index, 1);
        };

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

    }]);

});
define('controllers/side_column_menu/all',['./../module', 'underscore'], function (module, _) {

    module.controller('SideColumnMenuAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'side_column_menu';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);
        $scope.layouts.unshift({
            layout_id: -1,
            name: 'All Pages'
        });

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/side_column_menu/form',['./../module', 'underscore'], function (module, _) {

    module.factory('SideColumnMenuFactory', [function () {
        return {
            Menu: function () {
                return {
                    type: 'mixed',
                    container_width: '',
                    categories: {
                        type: 'existing',
                        show: 'both',
                        image_position: 'right',
                        links_type: 'categories',
                        items: [],
                        render_as: 'dropdown'
                    },
                    custom: {
                        top: {
                            menu_type: 'custom',
                            menu_item: null
                        },
                        target: 0,
                        items: []
                    },
                    mixed_columns: [],
                    icon: { },
                    background: { },
                    hide_text: '0',
                    is_open: 1,
                    status: 1,
                    hide_on_mobile: 0,
                    hide_on_desktop: '0',
                    items_per_row: {
                        "range": "1,10",
                        "step": "1",
                        "hide_columns": true,
                        "hide_phone": true,
                        "value": {
                            "mobile": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "mobile1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet1": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet2": {
                                "value": "1",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop": {
                                "value": "6",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop": {
                                "value": "6",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            }
                        }
                    },
                    items_limit: 5,
                    html_blocks: [],
                    html_menu_link: {
                        menu_type: 'custom',
                        menu_item: null
                    },
                    title: {},
                    float: 'left',
                    image_width: '',
                    image_height: '',
                    image_type: 'fit'
                };
            },
            HtmlMenuItem: function () {
                return {
                    title: {},
                    status: 1,
                    sort_order: '',
                    text: {},
                    is_open: 1
                };
            },
            MenuColumn: function () {
                return {
                    is_open:1,
                    hide_on_mobile: 0,
                    hide_on_desktop: '0',
                    type: 'categories',
                    categories: {
                        type: 'existing',
                        show: 'both',
                        image_position: 'right',
                        links_type: 'categories',
                        items: []
                    },
                    products: {
                        source: 'category',
                        module_type: 'featured',
                        items: []
                    },
                    manufacturers: {
                        type: 'all',
                        show: 'image',
                        items: []
                    },
                    custom: {
                        top: {
                            menu_type: 'custom',
                            menu_item: null
                        },
                        items: []
                    },
                    link: {
                        menu_type: 'custom',
                        menu_item: null
                    },
                    html_text: {},
                    cms_blocks: [],
                    width: '',
                    image_width: '',
                    image_height: '',
                    image_type: 'fit',
                    items_per_row: {
                        "range": "1,10",
                        "step": "1",
                        "hide_columns": true,
                        "hide_phone": true,
                        "value": {
                            "mobile": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "mobile1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet1": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet2": {
                                "value": "1",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop": {
                                "value": "6",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop": {
                                "value": "6",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            }
                        }
                    },
                    items_limit: 5,
                    status: '1',
                    sort_order: ''
                }
            },
            MenuItem: function () {
                return {
                    menu: {
                        menu_type: 'custom',
                        menu_item: null
                    },
                    target: 0,
                    is_open: 1
                };
            },
            MenuCMSBlock: function () {
                return {
                    is_open: 1,
                    content: { },
                    position: 'top',
                    status: 1,
                    sort_order: ''
                };
            },
            Options: function () {
                return {
                    display: 'table',
                    table_layout: 'fixed',
                    is_open: 1
                };
            }
        };
    }]);

    module.controller('SideColumnMenuFormController', function ($scope, $routeParams, $location, Rest, Spinner, SideColumnMenuFactory) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'side_column_menu';
        $scope.default_language = Journal2Config.languages.default;
        $scope.featured_modules = [];

        $scope.module_data = {
            module_name: 'New Flyout Menu',
            title: {},
            items: [],
        };

        Rest.getFeaturedModules().then(function (response) {
            $scope.featured_modules = response;
        });

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addMenu = function () {
            $scope.module_data.items.push(new SideColumnMenuFactory.Menu());
        };

        $scope.removeMenu = function ($index) {
            $scope.module_data.items.splice($index, 1);
        };

        $scope.addColumn = function (menu) {
            menu.mixed_columns.push(new SideColumnMenuFactory.MenuColumn());
        };

        $scope.removeColumn = function (menu, $index) {
            menu.mixed_columns.splice($index, 1);
        };

        $scope.addSubMenu = function (menu) {
            menu.items.push(new SideColumnMenuFactory.MenuItem());
        };

        $scope.removeSubMenu = function (menu, $index) {
            menu.items.splice($index, 1);
        };

        $scope.addItem = function (menu) {
            menu.items.push({
                menu_type: 'opencart',
                menu_item: {}
            });
        };

        $scope.removeItem = function (menu, $index) {
            menu.items.splice($index, 1);
        };

        $scope.addHtmlBlock = function (menu) {
            menu.html_blocks.push(new SideColumnMenuFactory.HtmlMenuItem());
        };

        $scope.removeHtmlBlock = function (menu, $index) {
            menu.html_blocks.splice($index, 1);
        };

        $scope.addCMSBlock = function (column) {
            column.cms_blocks = column.cms_blocks || {};
            column.cms_blocks.push(new SideColumnMenuFactory.MenuCMSBlock());
        };

        $scope.removeCMSBlock = function (column, $index) {
            column.cms_blocks.splice($index, 1);
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

        $scope.toggleAccordion2 = function (menu, value) {
            _.each(menu.mixed_columns, function (item) {
                item.is_open = value;
            });
            if (value) {
                $scope.close_others = value;
            }
        };

    });

});

define('controllers/side_category/all',['./../module', 'underscore'], function (module, _) {

    module.controller('SideCategoryAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'side_category';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/side_category/form',['./../module', 'underscore'], function (module, _) {

    module.factory('SideCategoryFactory', function () {
        return {
            Item: function () {
                return {
                    is_open: true,
                    link: {
                        menu_type: 'opencart',
                        menu_item: {
                            page: 'common/home'
                        }
                    },
                    name: { },
                    new_window: 0,
                    position: 'top',
                    sort_order: ''
                };
            }
        };
    });

    module.controller('SideCategoryFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', 'SideCategoryFactory', function ($scope, $routeParams, $location, Rest, Spinner, SideCategoryFactory) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'side_category';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Side Category',
            type: 'accordion',
            title: {},
            show_categories: 1,
            sections: []
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                $scope.module_data.sections = _.map($scope.module_data.sections, function (section) {
                    return _.extend(new SideCategoryFactory.Item(), section);
                });
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.addSection = function () {
            $scope.module_data.sections.push(new SideCategoryFactory.Item());
        };

        $scope.removeSection = function ($index) {
            $scope.module_data.sections.splice($index, 1);
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/custom_sections/all',['./../module', 'underscore'], function (module, _) {

    module.controller('CustomSectionsAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'custom_sections';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    //{ id: 'column_left', name: 'Column Left' },
                    //{ id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/custom_sections/form',['./../module', 'underscore'], function (module, _) {

    module.factory('CustomSectionsFactory', function () {
        return {
            SuperSection: function () {
                return {
                    module_name: 'New Module',
                    module_type: 'product',
                    items_per_row: {
                        "range": "1,10",
                        "step": "1",
                        "value": {
                            "mobile": {
                                "value": "1",
                                "range": "1,10",
                                "step": "1"
                            },
                            "mobile1": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet1": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet2": {
                                "value": "1",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop": {
                                "value": "5",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop1": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop2": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            }
                        }
                    },
                    top_bottom_placement: 0,
                    module_background:{},
                    module_padding:'0',
                    background: {},
                    fullwidth: '0',
                    margin_top: '',
                    margin_bottom: '',
                    show_title: '1',
                    brand_name: '1',
                    image_border: {},
                    image_bgcolor: '',
                    image_width: '',
                    image_height: '',
                    image_type: 'fit',
                    product_sections: [],
                    category_sections: [],
                    manufacturer_sections: [],
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            },
            ProductSection : function () {
                return {
                    is_open: true,
                    section_title: {},
                    section_type: 'module',
                    status: '1',
                    default_section: '0',
                    sort_order: '',
                    products: [],
                    category: '',
                    items_limit: 5,
                    module_type: 'featured',
                    todays_specials_only: '0',
                    countdown_visibility: '0',
                    filter_category: '0',
                    link: {
                        menu_type: 'custom',
                        url: ''
                    },
                    new_window: '0'
                };
            },
            CategorySection : function () {
                return {
                    is_open: true,
                    section_title: {},
                    section_type: 'top',
                    status: '1',
                    default_section: '0',
                    sort_order: '',
                    category_sub: '',
                    categories: [],
                    items_limit: 5,
                    link: {
                        menu_type: 'custom',
                        url: ''
                    },
                    new_window: '0'
                };
            },
            ManufacturerSection : function () {
                return {
                    is_open: true,
                    section_title: {},
                    section_type: 'all',
                    status: '1',
                    default_section: '0',
                    sort_order: '',
                    manufacturers: [],
                    items_limit: 5,
                    link: {
                        menu_type: 'custom',
                        url: ''
                    },
                    new_window: '0'
                };
            }
        };
    });

    module.controller('CustomSectionsFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', 'CustomSectionsFactory', function ($scope, $routeParams, $location, Rest, Spinner, CustomSectionsFactory) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'custom_sections';
        $scope.default_language = Journal2Config.languages.default;
        $scope.featured_modules = [];

        $scope.module_data = new CustomSectionsFactory.SuperSection();

        /* get data */
        var data = {
            featured_modules: Rest.getFeaturedModules()
        };

        if ($scope.module_id) {
            data.modules = Rest.getModule($scope.module_id);
        }

        Rest.all(data, function (response) {
            $scope.featured_modules = response.featured_modules;
            if (response.modules) {
                $scope.module_data = _.extend($scope.module_data, response.modules.module_data);
            }
            Spinner.hide();
        }, function (error) {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            Spinner.hide();
            alert(error);
        });

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* add section */
        $scope.addSection = function (type) {
            switch (type) {
            case 'product':
                $scope.module_data.product_sections.push(new CustomSectionsFactory.ProductSection());
                break;
            case 'category':
                $scope.module_data.category_sections.push(new CustomSectionsFactory.CategorySection());
                break;
            case 'manufacturer':
                $scope.module_data.manufacturer_sections.push(new CustomSectionsFactory.ManufacturerSection());
                break;
            }
        };

        /* remove section */
        $scope.removeSection = function (sections, $index) {
            sections.splice($index, 1);
        };

        /* add product */
        $scope.addProduct = function (section) {
            section.products.push({ });
        };

        /* remove product */
        $scope.removeProduct = function (section, $index) {
            section.products.splice($index, 1);
        };

        /* add category */
        $scope.addCategory = function (section) {
            section.categories.push({ });
        };

        /* remove category */
        $scope.removeCategory = function (section, $index) {
            section.categories.splice($index, 1);
        };

        /* add manufacturer */
        $scope.addManufacturer = function (section) {
            section.manufacturers.push({ });
        };

        /* remove manufacturer */
        $scope.removeManufacturer = function (section, $index) {
            section.manufacturers.splice($index, 1);
        };

        /* reset default section */
        $scope.setDefault = function (sections, index) {
            var i;
            for (i = 0; i < sections.length; i = i + 1) {
                if (index !== i) {
                    sections[i].default_section = '0';
                }
            }
        };

        $scope.toggleAccordion = function (value) {
            _.each($scope.module_data.product_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.category_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.manufacturer_sections, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/carousel/all',['./../module', 'underscore'], function (module, _) {

    module.controller('CarouselAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'carousel';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/carousel/form',['./../module', 'underscore'], function (module, _) {

    module.factory('CarouselFactory', function () {
        return {
            SuperSection: function () {
                return {
                    module_name: 'New Module',
                    module_type: 'product',
                    items_per_row: {
                        "range": "1,10",
                        "step": "1",
                        "value": {
                            "mobile": {
                                "value": "1",
                                "range": "1,10",
                                "step": "1"
                            },
                            "mobile1": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet1": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "tablet2": {
                                "value": "1",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop1": {
                                "value": "3",
                                "range": "1,10",
                                "step": "1"
                            },
                            "desktop2": {
                                "value": "2",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop": {
                                "value": "5",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop1": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            },
                            "large_desktop2": {
                                "value": "4",
                                "range": "1,10",
                                "step": "1"
                            }
                        }
                    },
                    module_background:{},
                    module_padding:'0',
                    arrows: 'top',
                    bullets: 1,
                    top_bottom_placement: 0,
                    background: {},
                    fullwidth: '0',
                    margin_top: '',
                    margin_bottom: '',
                    show_title: '1',
                    brand_name: '1',
                    autoplay: '0',
                    pause_on_hover: '1',
                    transition_speed: '400',
                    transition_delay: '3000',
                    touch_drag: '0',
                    image_border: {},
                    image_bgcolor: '',
                    image_width: '',
                    image_height: '',
                    image_type: 'fit',
                    product_sections: [],
                    category_sections: [],
                    manufacturer_sections: [],
                    enable_on_phone: '1',
                    enable_on_tablet: '1',
                    enable_on_desktop: '1'
                };
            },
            ProductSection : function () {
                return {
                    is_open: true,
                    section_title: {},
                    section_type: 'module',
                    status: '1',
                    default_section: '0',
                    sort_order: '',
                    products: [],
                    category: '',
                    items_limit: 5,
                    module_type: 'featured',
                    todays_specials_only: '0',
                    countdown_visibility: '0',
                    filter_category: '0',
                    link: {
                        menu_type: 'custom',
                        url: ''
                    },
                    new_window: '0'
                };
            },
            CategorySection : function () {
                return {
                    is_open: true,
                    section_title: {},
                    section_type: 'top',
                    status: '1',
                    default_section: '0',
                    sort_order: '',
                    category_sub: '',
                    categories: [],
                    items_limit: 5,
                    link: {
                        menu_type: 'custom',
                        url: ''
                    },
                    new_window: '0'
                };
            },
            ManufacturerSection : function () {
                return {
                    is_open: true,
                    section_title: {},
                    section_type: 'all',
                    status: '1',
                    default_section: '0',
                    sort_order: '',
                    manufacturers: [],
                    items_limit: 5,
                    link: {
                        menu_type: 'custom',
                        url: ''
                    },
                    new_window: '0'
                };
            }
        };
    });

    module.controller('CarouselFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', 'CarouselFactory', function ($scope, $routeParams, $location, Rest, Spinner, CarouselFactory) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'carousel';
        $scope.default_language = Journal2Config.languages.default;
        $scope.featured_modules = [];

        $scope.module_data = new CarouselFactory.SuperSection();

        /* get data */
        var data = {
            featured_modules: Rest.getFeaturedModules()
        };

        if ($scope.module_id) {
            data.modules = Rest.getModule($scope.module_id);
        }

        Rest.all(data, function (response) {
            $scope.featured_modules = response.featured_modules;
            if (response.modules) {
                $scope.module_data = _.extend($scope.module_data, response.modules.module_data);
            }
            Spinner.hide();
        }, function (error) {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            Spinner.hide();
            alert(error);
        });

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* add section */
        $scope.addSection = function (type) {
            switch (type) {
            case 'product':
                $scope.module_data.product_sections.push(new CarouselFactory.ProductSection());
                break;
            case 'category':
                $scope.module_data.category_sections.push(new CarouselFactory.CategorySection());
                break;
            case 'manufacturer':
                $scope.module_data.manufacturer_sections.push(new CarouselFactory.ManufacturerSection());
                break;
            }
        };

        /* remove section */
        $scope.removeSection = function (sections, $index) {
            sections.splice($index, 1);
        };

        /* add product */
        $scope.addProduct = function (section) {
            section.products.push({ });
        };

        /* remove product */
        $scope.removeProduct = function (section, $index) {
            section.products.splice($index, 1);
        };

        /* add category */
        $scope.addCategory = function (section) {
            section.categories.push({ });
        };

        /* remove category */
        $scope.removeCategory = function (section, $index) {
            section.categories.splice($index, 1);
        };

        /* add manufacturer */
        $scope.addManufacturer = function (section) {
            section.manufacturers.push({ });
        };

        /* remove manufacturer */
        $scope.removeManufacturer = function (section, $index) {
            section.manufacturers.splice($index, 1);
        };

        /* reset default section */
        $scope.setDefault = function (sections, index) {
            var i;
            for (i = 0; i < sections.length; i = i + 1) {
                if (index !== i) {
                    sections[i].default_section = '0';
                }
            }
        };

        $scope.toggleAccordion = function (value) {
            _.each($scope.module_data.product_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.category_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.manufacturer_sections, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/static_banners/all',['./../module', 'underscore'], function (module, _) {

    module.controller('StaticBannersAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'static_banners';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/static_banners/form',['./../module', 'underscore'], function (module, _) {

    module.controller('StaticBannersFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'static_banners';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            module_title: {},
            items_per_row: {
                "range": "1,10",
                "step": "1",
                "value": {
                    "mobile": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "mobile1": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet1": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "tablet2": {
                        "value": "1",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop1": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "desktop2": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop1": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    },
                    "large_desktop2": {
                        "value": "3",
                        "range": "1,10",
                        "step": "1"
                    }
                }
            },
            module_background:{},
            module_padding:'0',
            background: {},
            bgcolor: '',
            icon: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            image_border: {},
            carousel: '0',
            arrows: '1',
            bullets: '1',
            autoplay: '0',
            pause_on_hover: '1',
            transition_speed: '400',
            transition_delay: '3000',
            touch_drag: '0',
            sections: [],
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        var Section = function () {
            return {
                is_open: true,
                image: '',
                image_title: {},
                link: {
                    menu_type: 'custom'
                },
                link_new_window: '0',
                status: '1',
                sort_order: ''
            };
        };

        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                $scope.module_data.sections = _.map($scope.module_data.sections, function (section) {
                    return _.extend(new Section(), section);
                });
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                console.error(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            Spinner.hide();
        }

        $scope.addSection = function () {
            $scope.module_data.sections.push(new Section());
        };

        $scope.removeSection = function ($index) {
            $scope.module_data.sections.splice($index, 1);
        };

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/super_filter/all',['./../module', 'underscore'], function (module, _) {

    module.controller('SuperFilterAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'super_filter';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/super_filter/form',['./../module', 'underscore'], function (module, _) {

    module.controller('SuperFilterFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'super_filter';
        $scope.default_language = Journal2Config.languages.default;
        $scope.attributes = [];
        $scope.options = [];
        $scope.tax_classes = [];

        $scope.module_data = {
            module_name: 'New Module',
            reset: 1,
            product_count: 1,
            price: 1,
            price_slider: 1,
            tags : 1,
            availability: 1,
            tax_class_id: -1,
            manufacturer: 'list',
            manufacturer_type: 'multi',
            category: 'list',
            category_type: 'multi',
            options: {},
            options_type: {},
            attributes: {},
            attributes_type: {},
            sort_orders: {}
        };

        var promises = {
            filters: Rest.getFilters()
        };

        if ($scope.module_id) {
            promises.module = Rest.getModule($scope.module_id);
        }

        Rest.all(promises, function (response) {
            if ($scope.module_id) {
                $scope.module_data = _.extend($scope.module_data, response.module.module_data);
            }
            $scope.module_data.is_open = $scope.module_data.is_open || {};
            $scope.attributes = response.filters.attributes;
            $scope.options = response.filters.options;
            $scope.tax_classes = response.filters.tax_classes;
            _.each($scope.attributes, function (attribute_group) {
                $scope.module_data.is_open[attribute_group.group_id] = $scope.module_data.is_open[attribute_group.group_id] || {};
            });
            if (Object.prototype.toString.call($scope.module_data.sort_orders) === '[object Array]') {
                $scope.module_data.sort_orders = {};
            }
            Spinner.hide();
        }, function (error) {
            $scope.module_data.is_open = {};
            $scope.module_data.general_is_open = true;
            $scope.module_data.options_is_open = true;
            Spinner.hide();
            alert(error);
        });

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (items, value) {
            _.each(items, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.options_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/side_products/all',['./../module', 'underscore'], function (module, _) {

    module.controller('SideProductsAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'side_products';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/side_products/form',['./../module', 'underscore'], function (module, _) {

    module.controller('SideProductsFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'side_products';
        $scope.default_language = Journal2Config.languages.default;
        $scope.featured_modules = [];

        $scope.module_data = {
            module_name: 'New Module',
            section_title: {},
            section_type: 'module',
            products: [],
            category: '',
            items_limit: 5,
            module_type: 'featured',
            filter_category: '0'
        };

        /* get data */
        var data = {
            featured_modules: Rest.getFeaturedModules()
        };

        if ($scope.module_id) {
            data.modules = Rest.getModule($scope.module_id);
        }

        Rest.all(data, function (response) {
            $scope.featured_modules = response.featured_modules;
            if (response.modules) {
                $scope.module_data = _.extend($scope.module_data, response.modules.module_data);
            }
            Spinner.hide();
        }, function (error) {
            $scope.module_data.general_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            Spinner.hide();
            alert(error);
        });

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            _.each($scope.module_data.product_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.category_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.manufacturer_sections, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

        /* add product */
        $scope.addProduct = function () {
            $scope.module_data.products.push({ });
        };

        /* remove product */
        $scope.removeProduct = function ($index) {
            $scope.module_data.products.splice($index, 1);
        };

    }]);

});
define('controllers/newsletter/all',['./../module', 'underscore'], function (module, _) {

    module.controller('NewsletterAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'newsletter';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                /* positions */
                module.module_positions = [
                    { id: 'top', name: 'Top' },
                    { id: 'content_top', name: 'Content Top' },
                    { id: 'content_bottom', name: 'Content Bottom' },
                    { id: 'column_left', name: 'Column Left' },
                    { id: 'column_right', name: 'Column Right' },
                    { id: 'bottom', name: 'Bottom' }
                ];
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: '',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/newsletter/form',['./../module', 'underscore'], function (module, _) {

    module.controller('NewsletterFormController', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'newsletter';
        $scope.default_language = Journal2Config.languages.default;

        $scope.module_data = {
            module_name: 'New Module',
            module_title: {},
            module_text: {},
            module_text_font: '',
            module_background: {},
            module_border: {},
            module_padding: '',
            text_position: 'left',
            input_height: '',
            input_placeholder: {},
            input_bg_color: {},
            input_font: '',
            input_border: {},
            button_text: {},
            button_font: '',
            button_background: {},
            button_icon: {},
            button_border: {},
            button_offset_top: '',
            button_offset_left: '',
            background: {},
            fullwidth: '0',
            margin_top: '',
            margin_bottom: '',
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                $scope.module_data.general_is_open = true;
                $scope.module_data.top_bottom_is_open = true;
                Spinner.hide();
                alert(error);
            });
        } else {
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            _.each($scope.module_data.product_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.category_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.manufacturer_sections, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    });

});
define('controllers/popup/all',['./../module', 'underscore'], function (module, _) {

    module.controller('PopupAllController', function ($scope, $timeout, $location, $routeParams, Rest, Spinner, localStorageService) {

        $scope.paginationTotalItems = 0;
        $scope.paginationCurrentPage = 1;

        $scope.filterModules = function (modules, page) {
            return modules.slice((page - 1) * 10, page * 10);
        };

        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;
        $scope.opened_modules = {};
        $timeout(function () {
            $scope.close_others = localStorageService.get($scope.module_type + '_close_others') === 'true';
        }, 1);

        /* scope vars */
        $scope.module_type = 'popup';
        $scope.modules = [];
        $scope.layouts = _.clone(Journal2Config.layouts);
        $scope.layouts.unshift({
            layout_id: -1,
            name: 'All Pages'
        });

        /* get data */
        Rest.all({
            modules         : Rest.getModules($scope.module_type),
            activeModules   : Rest.getModulePlacement($scope.module_type)
        }, function (response) {
            $scope.paginationTotalItems = response.modules.length;
            var activeModules = [];
            _.each(response.activeModules, function (module) {
                activeModules[module.module_id] = activeModules[module.module_id] || [];
                activeModules[module.module_id].push(module);
            });
            /* modules */
            $scope.modules = _.map(response.modules, function (module) {
                module.module_placements = activeModules[module.module_id] || [];
                if ($scope.module_id === module.module_id && module.module_placements.length === 0) {
                    $scope.addModule(module);
                }
                return module;
            });
            $scope.opened_modules = localStorageService.get($scope.module_type + '_opened_modules') || {};
            if ($scope.module_id) {
                $scope.opened_modules[$scope.module_id] = true;
            }
            Spinner.hide();
        }, function (error) {
            alert(error);
            Spinner.hide();
        });

        /* add module */
        $scope.addModule = function (module, $event) {
            module.module_placements.push({
                module_id: module.module_id,
                layout_id: '',
                position: 'header',
                status: 1,
                sort_order: ''
            });
            $scope.opened_modules[module.module_id] = true;
        };

        /* remove module */
        $scope.removeModule = function ($index, module) {
            module.module_placements.splice($index, 1);
        };

        /* save */
        $scope.saveModules = function ($event) {
            var $src = $($event.target || $event.srcElement);
            if ($('form').hasClass('ng-invalid')) {
                alert('Please choose a layout and/or position');
                return;
            }
            Spinner.show($src);
            var activeModules = [];
            _.each($scope.modules, function (module) {
                activeModules = _.union(activeModules, module.module_placements);
            });
            Rest.saveModulePlacement($scope.module_type, activeModules).then(function (response) {
                localStorageService.set($scope.module_type + '_opened_modules', $scope.opened_modules);
                localStorageService.set($scope.module_type + '_close_others', $scope.close_others);
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        /* toggle accordion */
        $scope.toggleAccordion = function (value) {
            _.each($scope.modules, function (module) {
                $scope.opened_modules[module.module_id] = value;
            });
            if (value) {
                $scope.close_others = false;
            }
        };

    });

});
define('controllers/popup/form',['./../module', 'underscore'], function (module, _) {

    module.controller('PopupFormController', ['$scope', '$routeParams', '$location', 'Rest', 'Spinner', function ($scope, $routeParams, $location, Rest, Spinner) {
        /* opened modules */
        $scope.module_id = $routeParams.module_id || null;

        /* scope vars */
        $scope.module_type = 'popup';
        $scope.default_language = Journal2Config.languages.default;
        $scope.newsletter_modules = [];

        $scope.module_data = {
            module_name: 'New module',
            close_button: '1',
            padding: '',
            title: {},
            title_align: 'center',
            title_font: {},
            title_bg_color: '',
            title_height: 40,
            newsletter: '0',
            newsletter_bg_color: '',
            newsletter_height: 80,
            newsletter_id: '',
            footer_height: 60,
            footer_bg_color: '',
            type: 'text',
            text: {},
            text_font: {},
            text_height: '',
            image: 'no_image.jpg',
            content_overflow: '1',
            status: '1',
            width: 600,
            height: 300,
            background: {},
            button_1: '0',
            button_1_link: {
                menu_type: 'custom'
            },
            button_1_icon: {},
            button_1_new_window: '0',
            button_1_text: {},
            button_1_font: {},
            button_1_bgcolor: '',
            button_1_hover_bgcolor: '',
            button_2: '0',
            button_2_link: {
                menu_type: 'custom'
            },
            button_2_icon: {},
            button_2_new_window: '0',
            button_2_text: {},
            button_2_font: {},
            button_2_bgcolor: '',
            button_2_hover_bgcolor: '',
            button_submit_icon: {},
            button_submit_text: {},
            button_submit_font: {},
            button_submit_bgcolor: '',
            button_submit_hover_bgcolor: '',
            button_submit_position: 'center',
            do_not_show_again: '1',
            do_not_show_again_text: {},
            do_not_show_again_font: {},
            do_not_show_again_cookie: '',
            sort_order: '',
            enable_on_phone: '1',
            enable_on_tablet: '1',
            enable_on_desktop: '1'
        };

        $scope.resetCookie = function () {
            $scope.module_data.do_not_show_again_cookie = Math.random().toString(36).substring(7);
        };

        /* newsletter */
        Rest.getModules('newsletter').then(function (response) {
            $scope.newsletter_modules = response;
            Spinner.hide();
        }, function (error) {
            Spinner.hide();
        });

        /* get data */
        if ($scope.module_id) {
            Rest.getModule($scope.module_id).then(function (response) {
                $scope.module_data = _.extend($scope.module_data, response.module_data);
                Spinner.hide();
            }, function (error) {
                Spinner.hide();
                alert(error);
            });
        } else {
            $scope.module_data.general_is_open = true;
            $scope.module_data.header_is_open = true;
            $scope.module_data.newsletter_is_open = true;
            $scope.module_data.content_is_open = true;
            $scope.module_data.footer_is_open = true;
            $scope.module_data.top_bottom_is_open = true;
            $scope.resetCookie();
            Spinner.hide();
        }

        /* save data */
        $scope.save = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if ($scope.module_id) {
                Rest.editModule($scope.module_id, $scope.module_data).then(function () {
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            } else {
                Rest.addModule($scope.module_type, $scope.module_data).then(function (response) {
                    $location.path('/module/' + $scope.module_type + '/form/' + response.module_id);
                    Spinner.hide($src);
                }, function (error) {
                    alert(error);
                    Spinner.hide($src);
                });
            }
        };

        $scope.delete = function ($event) {
            var $src = $($event.target || $event.srcElement);
            Spinner.show($src);
            if (!confirm('Delete module "' + $scope.module_data.module_name + '"?')) {
                Spinner.hide($src);
                return;
            }
            Rest.deleteModule($scope.module_id).then(function () {
                $location.path('/module/' + $scope.module_type + '/all');
                Spinner.hide($src);
            }, function (error) {
                Spinner.hide($src);
                alert(error);
            });
        };

        $scope.toggleAccordion = function (value) {
            _.each($scope.module_data.product_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.category_sections, function (item) {
                item.is_open = value;
            });
            _.each($scope.module_data.manufacturer_sections, function (item) {
                item.is_open = value;
            });
            $scope.module_data.general_is_open = value;
            $scope.module_data.header_is_open = value;
            $scope.module_data.newsletter_is_open = value;
            $scope.module_data.content_is_open = value;
            $scope.module_data.footer_is_open = value;
            $scope.module_data.top_bottom_is_open = value;
            if (value) {
                $scope.module_data.close_others = false;
            }
        };

    }]);

});
define('controllers/index',[
    './home',
    './settings',
    './settings/general',
    './settings/productlabels',
    './settings/notification',
    './settings/quickview',
    './settings/sidecolumn',
    './settings/footer',
    './settings/pages',
    './settings/journalcheckout',
    './settings/blog',
    './settings/blogmodules',
    './settings/bloglanguage',
    './settings/productpage',
    './settings/blogpostpage',
    './settings/catalog',
    './settings/header',
    './settings/welcome',
    './settings/countdown',
    './settings/headermenus',
    './settings/modulecarousel',
    './settings/modulecmsblocks',
    './settings/modulecustomsections',
    './settings/moduleheadlinerotator',
    './settings/moduletextrotator',
    './settings/modulenewsletter',
    './settings/modulephotogallery',
    './settings/modulepopup',
    './settings/moduleflyout',
    './settings/moduleslider',
    './settings/modulesuperfilter',
    './settings/productlist',
    './settings/productgrid',
    './settings/category',
    './settings/custom_code',
    './settings/system',
    './settings/import_export',
    './menus/primary',
    './menus/secondary',
    './menus/main',
    './footer/menu',
    './footer/copyright',
    './footer/payments',
    './blog/settings',
    './blog/categories/all',
    './blog/categories/form',
    './blog/posts/all',
    './blog/posts/form',
    './blog/comments/all',
    './blog/comments/form',
    './blog_modules/categories/all',
    './blog_modules/categories/form',
    './blog_modules/comments/all',
    './blog_modules/comments/form',
    './blog_modules/search/all',
    './blog_modules/search/form',
    './blog_modules/side_posts/all',
    './blog_modules/side_posts/form',
    './blog_modules/posts/all',
    './blog_modules/posts/form',
    './blog_modules/tags/all',
    './blog_modules/tags/form',
    './slider/all',
    './slider/form',
    './simple_slider/all',
    './simple_slider/form',
    './cms_blocks/all',
    './cms_blocks/form',
    './side_blocks/all',
    './side_blocks/form',
    './advanced_grid/all',
    './advanced_grid/form',
    './carousel_grid/all',
    './carousel_grid/form',
    './fullscreen_slider/all',
    './fullscreen_slider/form',
    './photo_gallery/all',
    './photo_gallery/form',
    './text_rotator/all',
    './text_rotator/form',
    './headline_rotator/all',
    './headline_rotator/form',
    './header_notice/all',
    './header_notice/form',
    './product_tabs/all',
    './product_tabs/form',
    './side_column_menu/all',
    './side_column_menu/form',
    './side_category/all',
    './side_category/form',
    './custom_sections/all',
    './custom_sections/form',
    './carousel/all',
    './carousel/form',
    './static_banners/all',
    './static_banners/form',
    './super_filter/all',
    './super_filter/form',
    './side_products/all',
    './side_products/form',
    './newsletter/all',
    './newsletter/form',
    './popup/all',
    './popup/form'
], function () { });
define('directives/module',['angular'], function(ng){
    'use strict';

    return ng.module('directives', [], function(){ });
});
define('directives/j-options',['./module'], function(module){

    module.directive('jOptions', [function() {
        return {
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-options.html?ver=' + Journal2Config.version,
            controller: function($scope) {
            }
        };
    }]);

});


define('directives/j-opt-select',['./module'], function(module){

    module.directive('jOptSelect', ['$compile', function($compile) {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-select.html?ver=' + Journal2Config.version,
            controller: function($scope, $element) {
                $scope.ngModel.value = $scope.ngModel.value || {option: null};
                var name = _.uniqueId('switch-');
                var $options = $element.find('div.switch-toggle');

                $options.addClass('switch-' + $scope.ngModel.options.length);

                _.each($scope.ngModel.options, function(opt){
                    var id = _.uniqueId('switch-option-');
                    var checked = $scope.ngModel.value.option == opt ? ' checked="checked"' : '';
                    $options.append('<input id="' + id + '" type="radio" name="' + name + '"' + checked + '/>');
                    $options.append($compile('<label for="' + id + '" onclick="" data-ng-click="setValue(\'' + opt + '\')">' + opt + '</label>')($scope));
                });

                $options.append($('<a/>'));

                $scope.setValue = function(value) {
                    $scope.ngModel.value.option = value;
                };
            }
        };
    }])

});

define('directives/j-opt-color',['./module'], function(module){

    module.directive('jOptColor', [function() {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-color.html?ver=' + Journal2Config.version,
            controller: function($scope) {
                $scope.$watch('ngModel', function (val) {
                    if (Object.prototype.toString.call(val) === '[object Array]') {
                        val = {};
                    }
                    $scope.ngModel = val;
                });
            }
        };
    }])

});

define('directives/j-opt-color-gradient',['./module'], function(module){

    module.directive('jOptColorGradient', [function() {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-color-gradient.html?ver=' + Journal2Config.version,
            controller: function($scope) {
            }
        };
    }]);

});

define('directives/j-opt-text',['./module'], function(module){

    module.directive('jOptText', [function() {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-text.html?ver=' + Journal2Config.version,
            controller: function($scope) {
                $scope.ngModel = $scope.ngModel || {};
                $scope.ngModel.value = $scope.ngModel.value || '';
                $scope.reset = function() {
                    $scope.ngModel.value = $scope.ngModel.default;
                };
            }
        };
    }]);

});

define('directives/j-opt-textarea',['./module'], function(module){

    module.directive('jOptTextarea', [function() {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-textarea.html?ver=' + Journal2Config.version,
            link: function ($scope) {
                $scope.$watch('ngModel', function (val) {
                    if (typeof val === 'string') {
                        $scope.ngModel = {};
                        $scope.ngModel.value = {};
                        $scope.ngModel.value.text = val;
                    } else {
                        $scope.ngModel = val;
                    }
                });
            }
        };
    }]);

});

define('directives/j-opt-text-lang',['./module'], function(module){

    module.directive('jOptTextLang', [function() {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-text-lang.html?ver=' + Journal2Config.version,
            link: function($scope) {
                $scope.languages = Journal2Config.languages;
                $scope.ngModel = $scope.ngModel || {};
                $scope.ngModel.value = $scope.ngModel.value || {};
                _.each($scope.languages.languages, function(language) {
                    $scope.ngModel.value[language.language_id] = $scope.ngModel.value[language.language_id] || '';
                });
                $scope.reset = function() {
                    _.each($scope.languages.languages, function(language) {
                        $scope.ngModel.value[language.language_id] = $scope.ngModel.default;
                    });
                };
                $scope.$watch('ngModel', function () {
                    $scope.ngModel = $scope.ngModel || {};
                    $scope.ngModel.value = $scope.ngModel.value || {};
                });
            }
        };
    }]);

});
define('directives/j-opt-image',['./module'], function(module){

    module.directive('jOptImage', [function() {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-image.html?ver=' + Journal2Config.version,
            controller: function($scope) {
            }
        };
    }]);

});

define('directives/j-opt-icon',['./module'], function(module){

    module.directive('jOptIcon', [function() {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-icon.html?ver=' + Journal2Config.version,
            controller: function($scope) {
            }
        };
    }]);

});

define('directives/j-opt-font',['./module', 'underscore'], function(module, _){

    module
        .factory('FontDefaults', function () {
            return {
                fonts: null,
                font_subsets: null,
                system: function () {
                    return {
                        font_type: 'none',
                        font_size: '13px',
                        font_family: 'Helvetica, Arial, sans-serif',
                        font_name: 'ABeeZee',
                        font_weight: 'normal',
                        font_style: 'normal',
                        font_subset: ['latin'],
                        letter_spacing: '',
                        text_transform: 'none'
                    };
                },
                google: function () {
                    return {
                        font_type: 'google',
                        font_size: '13px',
                        font_family: 'Helvetica, Arial, sans-serif',
                        font_name: 'ABeeZee',
                        font_weight: '100',
                        font_style: 'normal',
                        font_subset: ['latin'],
                        letter_spacing: '',
                        text_transform: 'none'
                    };
                }
            };
        })
        .filter('filterFonts', function() {
            return function (font, subsets) {
                if (!subsets || !subsets.length) return font;
                return _.filter(font, function(f){
                    return _.intersection(f.subsets, subsets).length > 0;
                });
            };
        })
        .directive('jOptFont', ['Rest', 'FontDefaults', 'Spinner', function(Rest, FontDefaults, Spinner) {
            return {
                replace: true,
                require: '?ngModel',
                scope: {
                    ngModel: '='
                },
                restrict: 'E',
                templateUrl: 'view/journal2/tpl/directives/j-opt-font.html?ver=' + Journal2Config.version,
                controller: ['$timeout', '$scope', '$modal', function($timeout, $scope, $modal) {
                    $scope.ngModel = $scope.ngModel || {};
                    if ($.isArray($scope.ngModel)) {
                        $scope.ngModel = {};
                    }
                    $scope.ngModel.value = $scope.ngModel.value || new FontDefaults.system();

                    $scope.edit = function() {
                        $modal.open({
                            templateUrl: 'view/journal2/tpl/directives/j-opt-font-editor.html?ver=' + Journal2Config.version,
                            resolve: {
                                ngModel: function() { return $scope.ngModel; },
                                fonts: function() { return $scope.fonts; },
                                font_subsets: function() { return $scope.font_subsets; }
                            },
                            controller: function($scope, ngModel, $modalInstance) {
                                ngModel = ngModel || {};
                                $scope.font = ngModel.value || new FontDefaults.system();
                                $scope.fonts = [];
                                $scope.font_subsets = [];
                                if (FontDefaults.fonts !== null) {
                                    $scope.fonts = FontDefaults.fonts;
                                    $scope.font_subsets = FontDefaults.font_subsets;
                                } else {
                                    Rest.getFonts().then(function(fonts) {
                                        $scope.fonts = fonts;
                                        $scope.font_subsets = _
                                            .chain(fonts.google_fonts)
                                            .map(function (font) {
                                                return font.subsets;
                                            })
                                            .reduce(function (a, b) {
                                                return a.concat(b);
                                            })
                                            .uniq()
                                            .value();
                                        FontDefaults.fonts = $scope.fonts;
                                        FontDefaults.font_subsets = $scope.font_subsets;
                                        $scope.fontChanged($scope.font);
                                    });
                                }
                                // preview text
                                $scope.dummyText = 'The quick brown Fox jumps over the lazy Dog.';
                                $scope.isEditable = false;
                                $scope.editText = function() {
                                    $scope.isEditable = !$scope.isEditable;
                                };
                                $scope.getEditBtnText = function() {
                                    return $scope.isEditable ? "Save" : "Edit";
                                };

                                // generate collections
                                $scope.font_types = ['system', 'google'];

                                $scope.font_sizes = _.map(_.range(5, 200), function(e) { return e + 'px'; });

                                // select2 matcher
                                $scope.matcher = function(term, text) {
                                    return text.toUpperCase().indexOf(term.toUpperCase()) === 0;
                                };

                                // modal actions
                                $scope.save = function() {
                                    $modalInstance.close($scope.font);
                                };

                                $scope.cancel = function() {
                                    $modalInstance.dismiss('cancel');
                                };

                                $scope.getStyle = function (font) {
                                    return font.font_style;
                                };

                                $scope.getWeight = function (font) {
                                    return font.font_type === 'google' ? font.font_weight.replace(/[\D]/g, '') : font.font_weight;
                                };

                                $scope.$watch('font.font_type', function () {
                                    $scope.fontChanged($scope.font);
                                });

                                $scope.fontChanged = function(font) {
                                    $scope.loading = false;
                                    Spinner.hide($('.font-preview'));
                                    if (font.font_type === 'google') {
                                        Spinner.show($('.font-preview'));
                                        if (!font.font_name) {
                                            font.font_name = 'ABeeZee';
                                        }
                                        if (!font.font_subset || font.font_subset.length === 0) {
                                            font.font_subset = ['latin'];
                                        }
                                        $scope.loading = true;
                                        $timeout(function () {
                                            $scope.loadFont(font);
                                        }, 350);
                                    }
                                    $scope.getFontWeights(font);
                                    if ($scope.font_weights && $scope.font_weights.length && _.indexOf($scope.font_weights, font.font_weight) === -1) {
                                        font.font_weight = $scope.font_weights[0];
                                    }
                                };

                                $scope.loadFont = function(font) {
                                    if (font.font_type !== 'google' || !font.font_name) return;
                                    WebFont.load({
                                        google: {
                                            families: [font.font_name]
                                        },
                                        active: function () {
                                            $scope.loading = false;
                                            Spinner.hide($('.font-preview'));
                                            $scope.$apply();
                                        }
                                    });
                                };

                                $scope.getFontWeights = function(font) {
                                    if (font.font_type === 'system') {
                                        $scope.font_weights = ['normal', 'bold'];
                                    } else if (font.font_type === 'google') {
                                        _.each($scope.fonts.google_fonts, function(f){
                                            if (font.font_name === f.family) {
                                                $scope.font_weights = f.variants;
                                            }
                                        });
                                    } else {
                                        $scope.font_weights = [];
                                    }
                                };

                                $scope.loadFont($scope.font);
                                $scope.getFontWeights($scope.font);

                            }
                        }).result.then(function(font){
                            $scope.ngModel = $scope.ngModel || {};
                            $scope.ngModel.value = font;
                        });
                    };
                }]
            };
        }]);
});
define('directives/switch',['./module'], function(module){

    module.directive('switch', function() {
        return {
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'view/journal2/tpl/directives/switch.html?ver=' + Journal2Config.version,
            link: function($scope, element, attrs, ctrl) {
                var $element = $(element);
                var $input = $element.find('input');
                var name = _.uniqueId('switch-group-');

                $input.attr('name', name);
                $element.addClass('switch-' + $input.length);
                $element.attr('data-name', name);

                $scope.$on('change-' + name, function(e, value) {
                    $scope.ngModel = value;
                });

                $scope.$watch('ngModel', function (value) {
                    $element.find('input').each(function() {
                        this.checked = false;
                    });
                    try {
                        $element.find('input[data-key="' + value + '"]')[0].checked = true;
                    } catch (e) { }
                });
            }
        };
    })
        .directive('switchOption', function($compile) {
            return {
                restrict: 'E',
                link: function (scope, element) {
                    var $element = $(element);
                    var $parent = $element.parent();
                    var key = $element.attr('key');
                    var value = $element.html();
                    var id = _.uniqueId('switch-option-');
                    scope.parent = $parent;

                    var $newElement = $compile('<input id="' + id + '" type="radio" data-key="' + key + '" /><label for="' + id + '" data-ng-click="setValue(\'' + key + '\', this)" onclick="">' + value + '</label>')(scope);

                    $element.remove();

                    $parent.append($newElement);

                    $parent.find('a').remove();
                    $parent.append($('<a/>'));

                    scope.setValue = function(value, s) {
                        var name = s.parent.attr('data-name');
                        scope.$parent.$broadcast('change-' + name, value);
                        $parent.addClass('t-candy');
                    };
                }
            };
        });

});
define('directives/menu-item',['./module', 'underscore.string'], function (module, _S) {

    module.factory('MenuItemName', function () {
        var TYPES = {
            category    : 'Category',
            product     : 'Product',
            manufacturer: 'Brand',
            information : 'Information',
            opencart    : 'OpenCart Page',
            custom      : 'Custom'
        };

        var PAGES = {
            'common/home': 'Home',
            'account/wishlist': 'Wishlist',
            'product/compare': 'Compare',
            'account/account': 'My Account',
            'checkout/cart': 'Shopping cart',
            'checkout/checkout': 'Checkout',
            'information/contact': 'Contact',
            'account/return/insert': 'Returns',
            'information/sitemap': 'Sitemap',
            'product/manufacturer': 'Brands',
            'account/voucher': 'Gift Vouchers',
            'affiliate/account': 'Affiliates',
            'product/special': 'Specials',
            'product/search': 'Search',
            'account/order': 'Order History',
            'account/newsletter': 'Newsletter',
            'login': 'Login (Account)',
            'register': 'Register (Logout)'
        };

        return function (item) {
            var type = item.menu.menu_type;
            var name = item.menu.menu_item ? item.menu.menu_item.name : 'Menu Item';
            if (type === 'custom') {
                name = item.name.value[Journal2Config.languages.default] || 'Menu Item';
            }
            if (type === 'opencart') {
                name = PAGES[item.menu.menu_item.page];
            }
            if (item.name_overwrite == 1 && item.name && item.name.value) {
                name = item.name.value[Journal2Config.languages.default];
            }
            name = name || '';
            var pieces = name.split(' &gt; ');
            return _S.unescapeHTML(pieces.length > 0 ? pieces[pieces.length - 1] : '');
        };
    });

    module.directive('menuItem', function (Rest) {
        return {
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/menu-item.html?ver=' + Journal2Config.version,
            controller: function ($scope) {
                $scope.languages = Journal2Config.languages.languages;
            },
            link: function ($scope, $element) {
                $scope.popup_modules = [];
                $($element).find('select').change(function () {
                    if ($scope.ngModel.menu_type === 'opencart') {
                        $scope.ngModel.menu_item.page = 'common/home';
                    }
                });
                $scope.$watch('ngModel', function (val) {
                    val = val || {};
                    val.menu_item = val.menu_item || {};
                    if (Object.prototype.toString.call(val.menu_item) === '[object Array]') {
                        val.menu_item = {};
                    }
                    if (val.menu_type === 'opencart' && (!val.menu_item || !val.menu_item.page)) {
                        val.menu_item = val.menu_item || {};
                        val.menu_item.page = 'common/home';
                    }
                    if (val.menu_type === 'popup') {
                        Rest.getModules('popup').then(function (response) {
                            $scope.popup_modules = response;
                        }, function (error) {
                            alert(error);
                        });
                    }
                    $scope.ngModel = val;
                });
                $scope.resetItem = function () {
                    if ($scope.ngModel.menu_type === 'opencart') {
                        $scope.ngModel.menu_item = {};
                        $scope.ngModel.menu_item.page = 'common/home';
                    } else {
                        $scope.ngModel.menu_item = null;
                    }
                    if ($scope.ngModel.menu_type === 'popup') {
                        Rest.getModules('popup').then(function (response) {
                            $scope.popup_modules = response;
                        }, function (error) {
                            alert(error);
                        });
                    }
                };
            }
        };
    });

});
define('directives/image-select',['./module'], function(module){

    module.directive('imageSelect', function(){
        return {
            replace: true,
            restrict: 'E',
            scope: {
                image: '=image'
            },
            templateUrl: 'view/journal2/tpl/directives/image-select.html?ver=' + Journal2Config.version,
            controller: function($scope) {
                $scope.selectImage = function() {
                    if (Journal2Config['oc2']) {
                        $('#modal-image').remove();

                        $.ajax({
                            url: 'index.php?route=common/filemanager&token=' + Journal2Config.token + '&target=' + $scope.fieldId + '&thumb=' + 'thumb-' + $scope.fieldId,
                            dataType: 'html',
                            beforeSend: function() {
                                $('#button-image i').replaceWith('<i class="fa fa-circle-o-notch fa-spin"></i>');
                                $('#button-image').prop('disabled', true);
                            },
                            complete: function() {
                                $('#button-image i').replaceWith('<i class="fa fa-upload"></i>');
                                $('#button-image').prop('disabled', false);
                            },
                            success: function(html) {
                                $('body').append('<div id="modal-image" class="modal">' + html + '</div>');

                                $('#modal-image').modal('show');
                            }
                        });

                        $(document).delegate('a.thumbnail', 'click', function () {
                            $scope.image = $('#' + $scope.fieldId).val();
                            $scope.$apply();
                        });
                    } else {
                        $('#dialog').remove();

                        $('#content').prepend('<div id="dialog" style="padding: 3px 0px 0px 0px;"><iframe src="index.php?route=common/filemanager&token=' + Journal2Config.token + '&field=' + $scope.fieldId + '" style="padding:0; margin: 0; display: block; width: 100%; height: 100%;" frameborder="no" scrolling="auto"></iframe></div>');

                        $('#dialog').dialog({
                            title: 'image manager',
                            bgiframe: false,
                            width: typeof Journal2ImageManagerWidth === 'undefined' ? 700 : Journal2ImageManagerWidth,
                            height: typeof Journal2ImageManagerHeight === 'undefined' ? 400 : Journal2ImageManagerHeight,
                            resizable: false,
                            modal: false,
                            close: function() {
                                var val = $('#' + $scope.fieldId).val();
                                if(val) {
                                    $scope.image = val;
                                    $scope.$apply();
                                }
                            }
                        });
                    }
                };

                $scope.getImgUrl = function() {
                    return Journal2Config.img_folder + ($scope.image ? $scope.image : 'data/journal2/no_image.jpg');
                };

                $scope.clearImage = function() {
                    $scope.image = '';
                };
            },
            link: function(scope, elem) {
                scope.fieldId = _.uniqueId('img-upload-');
                elem.find('input[type="hidden"]').attr('id', scope.fieldId);
                elem.find('a').first().attr('id', 'thumb-' + scope.fieldId);
            }
        };
    });

});


define('directives/image-select-lang',['./module'], function(module){

    module.directive('imageSelectLang', function(){
        return {
            replace: true,
            restrict: 'E',
            scope: {
                ngModel: '=image'
            },
            templateUrl: 'view/journal2/tpl/directives/image-select-lang.html?ver=' + Journal2Config.version,
            controller: function($scope) {
                $scope.languages = Journal2Config.languages;
            },
            link: function($scope) {
                $scope.$watch('ngModel', function (val) {
                    if (Object.prototype.toString.call(val) !== '[object Object]') {
                        $scope.ngModel = {};
                        _.each (Journal2Config.languages.languages, function (language) {
                            $scope.ngModel[language.language_id] = val;
                        });
                    } else {
                        $scope.ngModel = val;
                    }
                });
            }
        };
    });

});



define('directives/color-picker',['./module'], function (module) {

    module.directive('colorPicker', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, $element, $attrs, $ngModel) {
                $($element).spectrum({
                    preferredFormat: "rgb",
                    allowEmpty: true,
                    showAlpha: true,
                    showInput: true,
                    showButtons: false,
                    showPalette: true,
                    palette: [
                        typeof Journal2Colors === 'undefined' ? [] : Journal2Colors
                    ]
                });
                $scope.$watch(function () {
                    return $ngModel.$modelValue;
                }, function (val) {
                    $($element).spectrum('set', val);
                });
            }
        };
    });

});

define('directives/icon-select',['./module', 'underscore'], function(module, _){

    module.directive('iconSelect', [function() {
        return {
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/icon-select.html?ver=' + Journal2Config.version,
            controller: ['$scope', 'Rest', '$modal', function($scope, Rest, $modal) {
                $scope.getImageSrc = function(image){
                    return Journal2Config.img_folder + (image ? image : 'data/journal2/no_image.jpg');
                };

                $scope.open = function() {
                    $modal.open({
                        templateUrl: 'view/journal2/tpl/directives/icon-select-popup.html?ver=' + Journal2Config.version,
                        resolve: {
                            ngModel: function() { return $scope.ngModel || {}; }
                        },
                        controller: function($scope, ngModel, $modalInstance) {
                            $scope.ngModel = ngModel || {};
                            Rest.getIcons().then(function(response){
                                $scope.icons = response;
                            }, function(error){
                                console.error(error);
                            });
                            $scope.isSelected = function(icon) {
                                return $scope.ngModel && $scope.ngModel.icon && $scope.ngModel.icon.icon && $scope.ngModel.icon.icon === icon.icon ? 'selected' : '';
                            };
                            $scope.chooseIcon = function(icon, $event) {
                                $('span.selected').removeClass('selected');
                                $($event.target).addClass('selected');
                                $scope.ngModel.icon = icon;
                            };
                            $scope.font_sizes = _.map(_.range(5, 200), function(e) { return e + 'px'; });
                            $scope.close = function(){

                                $modalInstance.close();
                            };
                        }
                    });
                };

                $scope.$watch('ngModel', function (val) {
                    val = val || {};
                    if (Object.prototype.toString.call(val) === '[object Array]') {
                        val = {};
                    }
                    val.options = val.options || {};
                    val.options.font_size = val.options.font_size || '16px';
                    $scope.ngModel = val;
                });
            }]
        };
    }]);

});
/*! idTabs v3.0 ~ Sean Catchpole - Copyright 2010 MIT/GPL */
;(function(e){var t,n,r=function(t){return e(t).attr("href")},i=function(e){return e===null&&"Null"||e===n&&"Undefined"||{}.toString.call(e).slice(8,-1)};e.fn.idTabs=function(){var e=t.args.apply(this,arguments),n=e.update&&"update"||e.remove&&"remove"||"bind";e.area=this;t[n](e);return this};t=e.idTabs=function(s,o,u){var a,f,l,c=e(),h=e.metadata?e(s).metadata():{},p={tab:t.tab,item:t.item};p=e.extend(p,t.settings,h,o||{});p.tabarea=e(s);p.data=u||"idTabs"+ +(new Date);e.each({selected:".",event:"!",start:"#"},function(e,t){if(i(p[e])=="String"&&p[e].indexOf(t)==0)p[e]=p[e].substr(1)});if(p.start===null)p.start=-1;l=[];p.tabs=f=e("a[href^=#]",s);f.each(function(){c=p.item(r(this));if(c.length)l=l.concat(c.get())});p.items=e(l).hide();a="idTabs."+p.event;u=p.tabarea.data("idTabs")||{};u[a]=p;p.tabarea.data("idTabs",u);f.trigger(a).data(p.data,p).bind(a,{s:p},function(){return t.unbind.apply(this,arguments)}).bind(p.event,{s:p},t.find);i(p.start)=="Number"&&(p.start<0||(c=f.eq(p.start)).length)||i(p.start)=="String"&&(c=f.filter("a[href=#"+p.start+"]")).length||(c=f.filter("."+p.selected).removeClass(p.selected)).length||p.start===n&&(c=f.eq(0)).length;if(c.length)c.trigger(p.event);return p};t.args=function(){var t,n=0,r={},s=arguments,o=function(e,t){if(t.indexOf(".")==0)r.selected=t;else if(t.indexOf("!")==0)if(/^!(true|false)$/i.test(t))r.toggle=/^!true$/i.test(t);else r.event=t;else if(t.indexOf(":")==0){t=t.substr(1).toLowerCase();if(t.indexOf("!")==0)r[t.substr(1)]=false;else r[t]=true}else if(t)r.start=t};while(n<s.length){t=s[n++];switch(i(t)){case"Object":e.extend(r,t);break;case"Boolean":r.change=t;break;case"Number":r.start=t;break;case"Function":r.click=t;break;case"Null":r.start=t;break;case"String":e.each(t.split(/\s+/g),o);default:break}}return r};t.bind=function(t){if(!t)return;var n="idTabs"+ +(new Date);if(t.grouped)e.idTabs(t.area,t,n);else t.area.each(function(){e.idTabs(this,t,n)})};t.update=function(n){if(!n)return;n.update=false;var r,i,s,o=n.event;o=(o+"").indexOf("!")==0&&o.substr(1)||o;o=o?"idTabs."+o:"";return n.area.each(function(){r=e(this);i=r.data("idTabs");if(!i)return;if(o){s=e.extend({},i[o],n);t.remove(i[o]);t(s.tabarea,s,s.data)}else for(o in i){if(!Object.hasOwnProperty.call(i,o))continue;s=e.extend({},i[o],n);t.remove(i[o]);t(s.tabarea,s,s.data)}})};t.remove=function(t){if(!t)return;var n,r,i=t.event;i=(i+"").indexOf("!")==0&&i.substr(1)||i;i="idTabs"+(i?"."+i:"");return t.area.each(function(){n=e(this).data("idTabs");delete n["idTabs."+t.event];e(this).data("idTabs",n);r=t.tabs||e("a[href^=#]",this);if(!r.length&&e(this).is("a[href^=#]"))r=e(this);r.trigger(i)})};t.find=function(n){var i=this,s=false,o=n.data.s;e("a[href="+r(this)+"]:first",o.area).each(function(){var r=e(this).data(o.data);if(r)s=t.showtab.call(r.tabarea==o.tabarea?i:this,r,n)||s});return s};t.showtab=function(n,i){if(!n||!n.toggle&&e(this).is("."+n.selected))return n&&n.change;var s=r(this);if(n.click&&n.click.call(this,s,n,i)==false)return n.change;if(n.toggle&&e(this).is("."+n.selected))s=null;return t.show.call(this,s,n,i)};t.show=function(e,t){t.tabs.removeClass(t.selected);t.tab(e).addClass(t.selected);t.items.hide();t.item(e).show();return t.change};t.unbind=function(t){var n=t.data.s;e(this).removeData(n.data).unbind("idTabs."+n.event);return false};t.extend=function(){var e=arguments;return function(){[].push.apply(e,arguments);this.idTabs.apply(this,e)}};t.tab=function(t){if(!t)return e([]);return e("a[href="+t+"]",this.tabarea)};t.item=function(t){if(!t)return e([]);var n=e(t);return n.length?n:e("."+t.substr(1))};t.settings={start:n,change:false,click:null,selected:".selected",event:"!click",toggle:false,grouped:false};t.version="3.0"})(jQuery);
define("idTabs", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.jQuery.fn.idTabs;
    };
}(this)));

define('directives/tabs',['./module', 'idTabs'], function(module, idTabs){

    module.directive('jTabs', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                if (scope.$last === true) {
                    $timeout(function(){
                        $(attrs.jTabs).idTabs();
                    });
                }
            }
        };
    }])

});
define('directives/ckeditor',['./module'], function (module) {
    module
        .directive('ckEditor', [function () {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    ngModel: '=ngModel'
                },
                templateUrl: 'view/journal2/tpl/directives/ckeditor.html?ver=' + Journal2Config.version,
                link: function ($scope) {
                    $scope.languages = Journal2Config.languages;
                    $scope.$watch('ngModel', function (val) {
                        $scope.ngModel = val || {};
                    });
                }
            };
        }])
        .directive('ckEditorText', function ($timeout) {
            return {
                require: '?ngModel',
                link: function ($scope, $element, $attrs, $model) {
                    var ck = CKEDITOR.replace($element[0], {
                        filebrowserBrowseUrl: 'index.php?route=common/filemanager&token=' + Journal2Config.token,
                        filebrowserImageBrowseUrl: 'index.php?route=common/filemanager&token=' + Journal2Config.token,
                        filebrowserFlashBrowseUrl: 'index.php?route=common/filemanager&token=' + Journal2Config.token,
                        filebrowserUploadUrl: 'index.php?route=common/filemanager&token=' + Journal2Config.token,
                        filebrowserImageUploadUrl: 'index.php?route=common/filemanager&token=' + Journal2Config.token,
                        filebrowserFlashUploadUrl: 'index.php?route=common/filemanager&token=' + Journal2Config.token
                    });
                    function updateModel() {
                        $scope.$apply(function () {
                            $model.$setViewValue(ck.getData());
                        });
                    }

                    ck.on('imageDone', updateModel);
                    ck.on('change', updateModel);
                    ck.on('key', updateModel);
                    ck.on('pasteState', updateModel);

                    $scope.$watch('ngModel', function (val) {
                        $timeout(function () {
                            if ($model.$viewValue !== undefined) {
                                ck.setData($model.$viewValue);
                            }
                        }, 10);
                    });

                }
            };
        });
});

define('directives/search/category',['./../module'], function (module) {
    module
        .directive('categorySearch', ['Search', function (Search) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    model: '='
                },
                templateUrl: 'view/journal2/tpl/directives/search/search.html?ver=' + Journal2Config.version,
                controller: function ($scope) {
                    $scope.options = Search.generateOptions('index.php?route=module/journal2/rest/catalog/categories', 'category_id', 'Select category...');
                }
            };
        }]);
});

define('directives/search/information',['./../module'], function (module) {
    module
        .directive('informationSearch', ['Search', function (Search) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    model: '='
                },
                templateUrl: 'view/journal2/tpl/directives/search/search.html?ver=' + Journal2Config.version,
                controller: function ($scope) {
                    $scope.options = Search.generateOptions('index.php?route=module/journal2/rest/catalog/information', 'information_id', 'Select information...');
                }
            };
        }]);
});

define('directives/search/manufacturer',['./../module'], function (module) {
    module
        .directive('manufacturerSearch', ['Search', function (Search) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    model: '='
                },
                templateUrl: 'view/journal2/tpl/directives/search/search.html?ver=' + Journal2Config.version,
                controller: function ($scope) {
                    $scope.options = Search.generateOptions('index.php?route=module/journal2/rest/catalog/manufacturers', 'manufacturer_id', 'Select Brand...');
                }
            };
        }]);
});

define('directives/search/product',['./../module'], function (module) {
    module
        .directive('productSearch', ['Search', function (Search) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    model: '='
                },
                templateUrl: 'view/journal2/tpl/directives/search/search.html?ver=' + Journal2Config.version,
                controller: function ($scope) {
                    $scope.options = Search.generateOptions('index.php?route=module/journal2/rest/catalog/products', 'product_id', 'Select products...');
                }
            };
        }]);
});

define('directives/search/blog_category',['./../module'], function (module) {
    module
        .directive('blogCategorySearch', ['Search', function (Search) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    model: '='
                },
                templateUrl: 'view/journal2/tpl/directives/search/search.html?ver=' + Journal2Config.version,
                controller: function ($scope) {
                    $scope.options = Search.generateOptions('index.php?route=module/journal2/rest/blog/categories', 'category_id', 'Select category...', 'categories');
                }
            };
        }]);
});

define('directives/search/blog_post',['./../module'], function (module) {
    module
        .directive('blogPostSearch', ['Search', function (Search) {
            return {
                replace: true,
                restrict: 'E',
                scope: {
                    model: '='
                },
                templateUrl: 'view/journal2/tpl/directives/search/search.html?ver=' + Journal2Config.version,
                controller: function ($scope) {
                    $scope.options = Search.generateOptions('index.php?route=module/journal2/rest/blog/posts', 'post_id', 'Select post...', 'posts');
                }
            };
        }]);
});

define('directives/store-picker',['./module'], function (module) {
    module
        .directive('storePicker', ['$location', '$routeParams', function ($location, $routeParams) {
            return {
                replace: true,
                restrict: 'E',
                templateUrl: 'view/journal2/tpl/directives/store-picker.html?ver=' + Journal2Config.version,
                link: function ($scope, $element) {
                    $scope.stores = Journal2Config.stores;

                    $scope.store_id = $routeParams.store_id || Journal2Config.stores[0].store_id;

                    $scope.storeChange = function () {
                        $location.path($element.attr('data-url') + '/' + $scope.store_id);
                    };
                }
            };
        }]);
});

define('directives/skin-manager',['./module'], function (module) {
    module
        .directive('skinManager', function ($location, $routeParams, $timeout, SkinManager, Rest, Spinner) {
            return {
                replace: true,
                restrict: 'E',
                templateUrl: 'view/journal2/tpl/directives/skin-manager.html?ver=' + Journal2Config.version,
                controller: ['$scope', '$modal', function ($scope, $modal) {
                    $scope.openManager = function () {
                        $modal.open({
                            templateUrl: 'view/journal2/tpl/directives/skin-manager-popup.html?ver=' + Journal2Config.version,
                            controller: function ($scope, $modalInstance) {
                                $scope.stores = _.clone(Journal2Config.stores);

                                var promises = {
                                    skins: SkinManager.getSkins()
                                };

                                _.each($scope.stores, function (store) {
                                    promises[store.store_id] = Rest.getSetting('active_skin', store.store_id);
                                });

                                Rest.all(promises, function (response) {
                                    $scope.skins = response.skins;
                                    _.each($scope.stores, function (store) {
                                        store.skin_id = response[store.store_id];
                                    });
                                }, function (error) {
                                    alert(error);
                                });

                                $scope.save = function ($event) {
                                    var $src = $($event.target || $event.srcElement);
                                    Spinner.show($src);
                                    var promises = {};
                                    _.each($scope.stores, function (store) {
                                        promises[store.store_id] = Rest.setSetting('active_skin', store.store_id, store.skin_id);
                                    });
                                    Rest.all(promises, function (response) {
                                        $timeout(function () {
                                            $modalInstance.dismiss('cancel');
                                        }, 200);
                                        Spinner.hide($src);
                                    }, function (error) {
                                        $modalInstance.dismiss('cancel');
                                        Spinner.hide($src);
                                        alert(error);
                                    });
                                };

                                $scope.cancel = function () {
                                    $modalInstance.dismiss('cancel');
                                };
                            }
                        });
                    };
                }],
                link: function ($scope, $element) {
                    $scope.skins = [];

                    SkinManager.getSkins().then(function (skins) {
                        $scope.skins = skins;
                    }, function (error) {
                        alert(error);
                    });

                    $scope.stores = _.clone(Journal2Config.stores);

                    $scope.skin_id = $routeParams.skin_id;
                    $scope.skinChange = function () {
                        SkinManager.setActiveSkin($scope.skin_id);
                        $location.path($element.attr('data-url') + '/' + $scope.skin_id);
                    };
                }
            };
        });
});

define('directives/j-opt-textarea-lang',['./module'], function (module) {

    module.directive('jOptTextareaLang', [function () {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-textarea-lang.html?ver=' + Journal2Config.version,
            link: function ($scope, element) {
                var $element = $(element);
                $scope.rows = $element.attr('data-rows') || 5;
                $scope.cols = $element.attr('data-cols') || 10;
                $scope.languages = Journal2Config.languages;

                $scope.reset = function () {
                    _.each($scope.languages.languages, function (language) {
                        $scope.ngModel.value[language.language_id] = $scope.ngModel.default;
                    });
                };

                $scope.$watch('ngModel', function (val) {
                    val = val || {};
                    val.value = val.value || {};
                    if (Object.prototype.toString.call(val.value) === '[object Array]') {
                        val.value = {};
                    }
                    $scope.ngModel = val;
                });
            }
        };
    }]);

});
define('directives/j-opt-slider',['./module', 'underscore'], function (module, _) {

    module.directive('jOptSlider', ['$timeout', function ($timeout) {
        return {
            replace: true,
            require: '?ngModel',
            scope: {
                ngModel: '='
            },
            restrict: 'E',
            templateUrl: 'view/journal2/tpl/directives/j-opt-slider.html?ver=' + Journal2Config.version,
            controller: function ($scope) {
                $scope.ngModel = $scope.ngModel || {};
                $scope.ngModel.value = $scope.ngModel.value || 0;
            },
            link: function ($scope, $element, $attrs, $ngModel) {
                var NewValue = function ($scope, value) {
                    var newValue = value;
                    /* check if current value is valid */
                    if ($scope.ngModel.values) {
                        var values = $scope.ngModel.values.split(',');
                        var min = _.min(values);
                        var max = _.max(values);
                        if (value < min) {
                            newValue = parseInt(min, 10);
                        }
                        if (value > max) {
                            newValue = parseInt(max, 10);
                        }
                    }
                    if ($scope.ngModel.range) {
                        var range = $scope.ngModel.range.split(',');
                        var min = parseInt(range[0], 10);
                        var max = parseInt(range[1], 10);
                        if (value < min) {
                            newValue = parseInt(min, 10);
                        }
                        if (value > max) {
                            newValue = parseInt(max, 10);
                        }
                    }
                    return newValue;
                };

                $timeout(function () {
                    $scope.ngModel = $scope.ngModel || {};
                    /* init plugin */
                    if ($element.attr('data-values')) {
                        $scope.ngModel.values = $element.attr('data-values');
                    }
                    if ($element.attr('data-range')) {
                        $scope.ngModel.range = $element.attr('data-range');
                    }
                    if ($element.attr('data-step')) {
                        $scope.ngModel.step = $element.attr('data-step');
                    }
                    var $slider = $($element.find('input')).simpleSlider({
                        values: $scope.ngModel.values,
                        range: $scope.ngModel.range,
                        step: $scope.ngModel.step
                    });
                    /* set value */
                    $scope.$watch('ngModel.value', function (value) {
                        $scope.ngModel = $scope.ngModel || {};
                        var newValue = NewValue($scope, value);
                        $scope.ngModel.value = newValue;
                        $slider.simpleSlider('setValue', newValue, true);
                    });
                }, 1);
            }
        };
    }]);

});

define('directives/j-opt-items-per-row',['./module', 'underscore'], function (module, _) {

    module
        .directive('jOptItemsPerRow', ['Rest', '$timeout', function (Rest, $timeout) {
            return {
                replace: true,
                require: '?ngModel',
                scope: {
                    ngModel: '='
                },
                restrict: 'E',
                templateUrl: 'view/journal2/tpl/directives/j-opt-items-per-row.html?ver=' + Journal2Config.version,
                controller: ['$scope', '$modal', '$element', '$attrs', function ($scope, $modal, $element, $attrs) {
                    $scope.edit = function () {
                        $scope.ngModel = $scope.ngModel || {};
                        $scope.ngModel.value = $scope.ngModel.value || {};
                        if ($attrs.values) {
                            $scope.ngModel.values = $attrs.values;
                        }
                        if ($attrs.step) {
                            $scope.ngModel.step = $attrs.step;
                        }
                        if ($attrs.range) {
                            $scope.ngModel.range = $attrs.range;
                        }
                        _.each([
                            'mobile', 'mobile1',
                            'tablet', 'tablet1', 'tablet2',
                            'desktop', 'desktop1', 'desktop2',
                            'large_desktop', 'large_desktop1', 'large_desktop2'
                        ], function (type) {
                            $scope.ngModel.value[type] = $scope.ngModel.value[type] || {};
                            var opts = {
                                value: $scope.ngModel.value[type].value
                            };
                            if ($scope.ngModel.values) {
                                opts.values = $scope.ngModel.values;
                            }
                            if ($scope.ngModel.range) {
                                opts.range = $scope.ngModel.range;
                            }
                            if ($scope.ngModel.step) {
                                opts.step = $scope.ngModel.step;
                            }
                            $scope.ngModel.value[type] = opts;
                        });
                        $modal.open({
                            templateUrl: 'view/journal2/tpl/directives/j-opt-items-per-row-editor.html?ver=' + Journal2Config.version,
                            resolve: {
                                ngModel: function () { return $scope.ngModel; }
                            },
                            controller: function ($scope, $rootScope, $modalInstance, ngModel) {
                                ngModel = ngModel || {};
                                $scope.ngModel = ngModel.value || {};
                                $scope.hide_columns = ngModel.hide_columns;
                                $scope.hide_phone = ngModel.hide_phone;

                                $scope.save = function () {
                                    $modalInstance.close();
                                };
                            }
                        });
                    };
                }]
            };
        }]);

});
define('directives/j-opt-background',['./module', 'underscore'], function (module, _) {

    module
        .directive('jOptBackground', ['Rest', function () {
            return {
                replace: true,
                require: '?ngModel',
                scope: {
                    ngModel: '='
                },
                restrict: 'E',
                templateUrl: 'view/journal2/tpl/directives/j-opt-background.html?ver=' + Journal2Config.version,
                controller: ['$scope', '$attrs', '$modal', function ($scope, $attrs, $modal) {
                    $scope.ngModel = $scope.ngModel || {};
                    $scope.ngModel.value = $scope.ngModel.value || {};
                    $scope.edit = function () {
                        $modal.open({
                            templateUrl: 'view/journal2/tpl/directives/j-opt-background-editor.html?ver=' + Journal2Config.version,
                            resolve: {
                                ngModel: function () { return $scope.ngModel; },
                                bgcolor: function () { return $attrs.bgcolor; }
                            },
                            controller: function ($scope, $rootScope, $modalInstance, ngModel, bgcolor) {
                                $scope.ngModel = ngModel.value || {};
                                $scope.bgcolor = bgcolor;
                                $scope.save = function () {
                                    $modalInstance.close();
                                };
                            }
                        });
                    };
                    $scope.$watch('ngModel', function (val) {
                        val = val || {};
                        val.value = val.value || {};
                        if (Object.prototype.toString.call(val.value) === '[object Array]') {
                            val.value = {};
                        }
                        if (!val.value.bgimage_attach) {
                            val.value.bgimage_attach = 'scroll';
                        }
                        $scope.ngModel = val;
                    });
                }]
            };
        }]);

});
define('directives/j-opt-border',['./module', 'underscore'], function (module, _) {

    module
        .directive('jOptBorder', ['Rest', function () {
            return {
                replace: true,
                require: '?ngModel',
                scope: {
                    ngModel: '='
                },
                restrict: 'E',
                templateUrl: 'view/journal2/tpl/directives/j-opt-border.html?ver=' + Journal2Config.version,
                controller: ['$scope', '$attrs', '$modal', function ($scope, $attrs, $modal) {
                    $scope.ngModel = $scope.ngModel || {};
                    $scope.ngModel.value = $scope.ngModel.value || {};
                    $scope.edit = function () {
                        $modal.open({
                            templateUrl: 'view/journal2/tpl/directives/j-opt-border-editor.html?ver=' + Journal2Config.version,
                            resolve: {
                                ngModel: function () { return $scope.ngModel; },
                                editor: function () { return $attrs.editor; }
                            },
                            controller: function ($scope, $rootScope, $modalInstance, ngModel, editor) {
                                $scope.ngModel = ngModel.value;
                                $scope.editor = ngModel.editor || editor;

                                $scope.title = 'Border Settings';

                                if ($scope.editor === 'hide-style') {
                                    $scope.title = 'Border Radius';
                                }

                                if ($scope.editor === 'hide-radius') {
                                    $scope.title = 'Border Settings';
                                }

                                $scope.save = function () {
                                    $modalInstance.close();
                                };
                            }
                        });
                    };
                    $scope.$watch('ngModel', function (val) {
                        val = val || {};
                        val.value = val.value || {};
                        if (Object.prototype.toString.call(val.value) === '[object Array]') {
                            val.value = {};
                        }
                        if (val.value.border_rounded === undefined) {
                            val.value.border_rounded = 'px';
                        }
                        $scope.ngModel = val;
                    });
                }]

            };
        }]);

});
define('directives/index',[
    './j-options',
    './j-opt-select',
    './j-opt-color',
    './j-opt-color-gradient',
    './j-opt-text',
    './j-opt-textarea',
    './j-opt-text-lang',
    './j-opt-image',
    './j-opt-icon',
    './j-opt-font',
    './switch',
    './menu-item',
    './image-select',
    './image-select-lang',
    './color-picker',
    './icon-select',
    './tabs',
    './ckeditor',
    './search/category',
    './search/information',
    './search/manufacturer',
    './search/product',
    './search/blog_category',
    './search/blog_post',
    './store-picker',
    './skin-manager',
    './j-opt-textarea-lang',
    './j-opt-slider',
    './j-opt-items-per-row',
    './j-opt-background',
    './j-opt-border'
], function () { });
define('services/module',['angular'], function(ng){
    'use strict';

    return ng.module('services', [], function(){ });
});
define('services/ajax',['underscore', 'underscore.string', './module'], function(_, _S, module){

    module
        .factory('Url', [function(){
            return {
                generateLink: function(url) {
                    var args = Array.prototype.slice.call(arguments).slice(1);
                    return args.length ? url + '&' + args.join('&') : url;
                }
            };
        }])
        .factory('Ajax', ['$http', '$q', function($http, $q){
            return {
                get: function(url, data) {
                    var deferred = $q.defer();
                    $http
                        .get(url, data)
                        .success(function(response){
                            if (_S.endsWith(url, '.json')) {
                                deferred.resolve(response);
                            }
                            if (typeof(response) !== 'object') {
                                deferred.reject('Cannot access ' + url);
                            }
                            if(response.status === 'success') {
                                deferred.resolve(response.response);
                            } else {
                                deferred.reject(response.error);
                            }
                        }).error(function(response){
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                post: function(url, data) {
                    var deferred = $q.defer();
                    $http
                        .post(url, angular.copy(data))
                        .success(function(response){
                            if (typeof(response) !== 'object') {
                                deferred.reject('Cannot access ' + url);
                            }
                            if(response.status === 'success') {
                                deferred.resolve(response.response);
                            } else {
                                deferred.reject(response.error);
                            }
                        }).error(function(response){
                            deferred.reject(response);
                        });
                    return deferred.promise;
                }
            };
        }]);

});



define('services/rest',['./module'], function(module){
    module.factory('Rest', ['Ajax', 'Url', '$q', function(Ajax, Url, $q){
        return {
            getLayouts: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/layouts', 'token=' + Journal2Config.token));
            },
            getLanguages: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/languages', 'token=' + Journal2Config.token));
            },
            getTopCategories: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/catalog/top_categories', 'token=' + Journal2Config.token));
            },
            getFeaturedModules: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/catalog/get_featured', 'token=' + Journal2Config.token));
            },
            getAllModules: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/all', 'token=' + Journal2Config.token));
            },
            getMultiModules: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/multi_modules', 'token=' + Journal2Config.token));
            },
            getModules: function(module_type) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/all', 'module_type=' + module_type, 'token=' + Journal2Config.token));
            },
            getModule: function(module_id) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/get', 'module_id=' + module_id, 'token=' + Journal2Config.token));
            },
            addModule: function(module_type, module_data) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/modules/add', 'module_type=' + module_type, 'token=' + Journal2Config.token), {'module_data' : module_data});
            },
            editModule: function(module_id, module_data) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/modules/edit', 'module_id=' + module_id, 'token=' + Journal2Config.token), {'module_data' : module_data});
            },
            deleteModule: function(module_id) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/remove', 'module_id=' + module_id, 'token=' + Journal2Config.token));
            },
            getModulePlacement: function(module_type) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/modules/load', 'module_type=' + module_type, 'token=' + Journal2Config.token));
            },
            saveModulePlacement: function(module_type, module_data) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/modules/save', 'module_type=' + module_type, 'token=' + Journal2Config.token), {'module_data' : module_data});
            },
            findProducts: function(filter_name) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/catalog/products', 'filter_name=' + filter_name, 'token=' + Journal2Config.token));
            },
            findCategories: function(filter_name) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/catalog/categories', 'filter_name=' + filter_name, 'token=' + Journal2Config.token));
            },
            findManufacturers: function(filter_name) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/catalog/manufacturers', 'filter_name=' + filter_name, 'token=' + Journal2Config.token));
            },
            findInformation: function(filter_name) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/catalog/information', 'filter_name=' + filter_name, 'token=' + Journal2Config.token));
            },
            getTransitions: function() {
                return Ajax.get(Url.generateLink('view/journal2/tpl/slider2/transitions.json'));
            },
            getFonts: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/fonts/get', 'token=' + Journal2Config.token));
            },
            getIcons: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/fonts/icons', 'token=' + Journal2Config.token));
            },
            loadSettings: function(category, theme_id) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/settings/load', 'token=' + Journal2Config.token, 'category=' + category, 'theme_id=' + theme_id));
            },
            loadDefaultSettings: function(category, theme_id) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/settings/load_default', 'token=' + Journal2Config.token, 'category=' + category, 'theme_id=' + theme_id));
            },
            getSiteWidth: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/settings/get_Site_width', 'token=' + Journal2Config.token));
            },
            saveSettings: function(settings, category, theme_id) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/settings/save', 'token=' + Journal2Config.token, 'category=' + category, 'theme_id=' + theme_id), {settings: settings});
            },
            saveSettingsAs: function(name, settings, category, theme_id) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/settings/save_as', 'token=' + Journal2Config.token, 'category=' + category, 'theme_id=' + theme_id), {settings: settings, name: name});
            },
            getSkins: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/settings/get_skins', 'token=' + Journal2Config.token));
            },
            deleteSkin: function(theme_id) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/settings/delete_skin', 'token=' + Journal2Config.token, 'theme_id=' + theme_id));
            },
            export: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/settings/export', 'token=' + Journal2Config.token));
            },
            getSetting: function(key, store_id) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/settings/get', 'key=' + key, 'store_id=' + store_id, 'token=' + Journal2Config.token));
            },
            setSetting: function(key, store_id, value) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/settings/set', 'key=' + key, 'store_id=' + store_id, 'token=' + Journal2Config.token), {value : value});
            },
            getFilters: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/catalog/filters', 'token=' + Journal2Config.token));
            },
            clearCache: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/cache/clear_all', 'token=' + Journal2Config.token));
            },
            checkVersion: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/check_version', 'token=' + Journal2Config.token));
            },
            getImageOptimisationStatus: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/image_optimisation/status', 'token=' + Journal2Config.token));
            },
            getTableIndexesStatus: function() {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/optimisations/indexes', 'token=' + Journal2Config.token));
            },
            addTableIndexes: function() {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/optimisations/add_indexes', 'token=' + Journal2Config.token));
            },
            getSubscribers: function (data) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/newsletter/subscribers', 'token=' + Journal2Config.token), data)
            },
            unsubscribe: function (data) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/newsletter/unsubscribe', 'token=' + Journal2Config.token), data)
            },
            verifyCode: function(data) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/data/verify_code', 'token=' + Journal2Config.token), data);
            },
            getBlog: function (url, data) {
                return Ajax.get(Url.generateLink('index.php?route=module/journal2/rest/blog/' + url, 'token=' + Journal2Config.token), data);
            },
            postBlog: function (url, data) {
                return Ajax.post(Url.generateLink('index.php?route=module/journal2/rest/blog/' + url, 'token=' + Journal2Config.token), data);
            },
            all: function(obj, success, error) {
                var promises = [];
                var response = {};

                angular.forEach(obj, function(o, i) {
                    promises.push(o.then(function(r){
                        response[i] = r;
                    }, function(e){
                        error(e);
                    }));
                });

                $q.all(promises).then(function(){
                    success(response);
                }, function(e){
                    error(e);
                });
            }
        };
    }]);

});

define('services/search',['./module'], function (module) {

    module
        .factory('Search', [function () {
            return {
                generateOptions: function (url, id, placeholder, key) {
                    return {
                        initSelection: function (element) { },
                        minimumInputLength: 1,
                        ajax: {
                            cache: true,
                            url: url,
                            dataType: 'json',
                            data: function (term, page) {
                                return {
                                    token: Journal2Config.token,
                                    filter_name: term
                                };
                            },
                            results: function (data, page) {
                                data = data.response[key] ? data.response[key] : data.response;
                                return {
                                    results: _.map(data, function (item) {
                                        return {
                                            id: item[id],
                                            name: item.name
                                        };
                                    })
                                };
                            }
                        },
                        formatResult: function (item) {
                            return item.name;
                        },
                        formatSelection: function (item) {
                            return item.name;
                        },
                        placeholder: placeholder
                    };
                }
            };
        }]);

});



define('services/spinner',['./module', 'spin'], function (module, Spinner) {

    module.factory('Spinner', [function () {
        var opts = {
            lines: 11, // The number of lines to draw
            length: 5, // The length of each line
            width: 2, // The line thickness
            radius: 5, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#000', // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 39, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
        };
        var spinner = null;
        return {
            show: function ($element) {
                spinner = spinner || new Spinner(opts);
                if ($element) {
                    $element.addClass('loading');
                    spinner.spin($element[0]);
                } else {
                    var $loader = $('.journal-loading');
                    $loader.show();
                    spinner.spin($loader[0]);
                }
            },
            hide: function ($element) {
                if ($element) {
                    $element.removeClass('loading');
                } else {
                    $('.journal-loading').hide();
                }
                spinner.stop();
            }
        };
    }]);

});

define('services/index',[
    './ajax',
    './rest',
    './search',
    './spinner'
], function () { });
define('app',[
    'spin',
    'angular',
    'underscore',
    'angular-strap',
    'angular-route',
    'angular-ls',
    'angular-bootstrap',
    'angular-select2',
    'angular-table',
    'simple-slider',
    'controllers/index',
    'directives/index',
    'services/index'
], function (Spinner, ng, _) {
    'use strict';

    var app = ng.module('journal', [
        'ngRoute',
        'ngTable',
        '$strap.directives',
        'ui.bootstrap',
        'ui.select2',
        'LocalStorageModule',
        'controllers',
        'directives',
        'services'
    ]);

    app.controller('MainController', function ($scope, SkinManager) {
        $scope.getActiveSkin = SkinManager.getActiveSkin;
    });

    app.factory('SkinManager', function (Rest, $q) {
        var skins_data = null;
        var active_skin = null;

        return {
            getActiveSkin: function () {
                return active_skin || Journal2Config.active_skin;
            },
            setActiveSkin: function (skin) {
                active_skin = skin;
            },
            getSkins: function () {
                var deferred = $q.defer();

                if (!skins_data) {
                    Rest.getSkins().then(function (response) {
                        deferred.resolve(response);
                    }, function (error) {
                        deferred.reject(error);
                    });
                } else {
                    deferred.resolve(skins_data.skins);
                }

                return deferred.promise;
            },
            addSkin: function (name) {
                skins_data.skins.push({
                    name: name,
                    id: ++skins_data.last_id
                });
                Rest.setSetting('skins_data', -1, skins_data).then(function (response) {
                }, function (error) {
                    alert(error);
                });
            },
            deleteSkin: function ($index) {
                skins_data.skins.splice($index, 1);
                Rest.setSetting('skins_data', -1, skins_data).then(function (response) {
                }, function (error) {
                    alert(error);
                });
            }
        };
    });

    app.factory('History', function (localStorageService) {
        var history = localStorageService.get('j2history') || [];
        return {
            add: function (url) {
                if (url === '/home' || url === '/' || url === '') {
                    return;
                }
                history = _.filter(history, function (item) {
                    return item !== url;
                });
                history.unshift(url);
                history = _.first(history, 25);
                localStorageService.set('j2history', history);
            },
            get: function () {
                return history;
            }
        };
    });

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .when('/home', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=home&token=' + Journal2Config.token,
                controller: 'HomeController'
            })
            /* settings */
            .when('/settings/general/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/general&token=' + Journal2Config.token,
                controller: 'GeneralSettingsController'
            })
            .when('/settings/productlabels/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/productlabels&token=' + Journal2Config.token,
                controller: 'ProductLabelsSettingsController'
            })
            .when('/settings/notification/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/notification&token=' + Journal2Config.token,
                controller: 'NotificationSettingsController'
            })
            .when('/settings/countdown/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/countdown&token=' + Journal2Config.token,
                controller: 'CountdownSettingsController'
            })
            .when('/settings/quickview/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/quickview&token=' + Journal2Config.token,
                controller: 'QuickviewSettingsController'
            })
            .when('/settings/blog/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/blog&token=' + Journal2Config.token,
                controller: 'BlogSettingsController'
            })
            .when('/settings/blogmodules/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/blogmodules&token=' + Journal2Config.token,
                controller: 'BlogModulesSettingsController'
            })
            .when('/settings/blogpostpage/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/blogpostpage&token=' + Journal2Config.token,
                controller: 'BlogPostPageSettingsController'
            })
            .when('/settings/bloglanguage/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/bloglanguage&token=' + Journal2Config.token,
                controller: 'BlogLanguageSettingsController'
            })
            .when('/settings/header/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/header&token=' + Journal2Config.token,
                controller: 'HeaderSettingsController'
            })
            .when('/settings/headermenus/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/headermenus&token=' + Journal2Config.token,
                controller: 'HeaderMenusSettingsController'
            })
            .when('/settings/modulecarousel/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modulecarousel&token=' + Journal2Config.token,
                controller: 'ModuleCarouselSettingsController'
            })
            .when('/settings/modulecmsblocks/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modulecmsblocks&token=' + Journal2Config.token,
                controller: 'ModuleCMSBlocksSettingsController'
            })
            .when('/settings/modulecustomsections/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modulecustomsections&token=' + Journal2Config.token,
                controller: 'ModuleCustomSectionsSettingsController'
            })
            .when('/settings/moduleheadlinerotator/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/moduleheadlinerotator&token=' + Journal2Config.token,
                controller: 'ModuleHeadlineRotatorSettingsController'
            })
            .when('/settings/modulenewsletter/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modulenewsletter&token=' + Journal2Config.token,
                controller: 'ModuleNewsletterSettingsController'
            })
            .when('/settings/moduletextrotator/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/moduletextrotator&token=' + Journal2Config.token,
                controller: 'ModuleTextRotatorSettingsController'
            })
            .when('/settings/modulephotogallery/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modulephotogallery&token=' + Journal2Config.token,
                controller: 'ModulePhotoGallerySettingsController'
            })
            .when('/settings/modulepopup/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modulepopup&token=' + Journal2Config.token,
                controller: 'ModulePopupSettingsController'
            })
            .when('/settings/moduleflyout/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/moduleflyout&token=' + Journal2Config.token,
                controller: 'ModuleFlyoutSettingsController'
            })
            .when('/settings/moduleslider/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/moduleslider&token=' + Journal2Config.token,
                controller: 'ModuleSliderSettingsController'
            })
            .when('/settings/modulesuperfilter/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modulesuperfilter&token=' + Journal2Config.token,
                controller: 'ModuleSuperFilterSettingsController'
            })
            .when('/settings/welcome/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/welcome&token=' + Journal2Config.token,
                controller: 'WelcomeSettingsController'
            })
            .when('/settings/modules/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modules&token=' + Journal2Config.token,
                controller: 'ModulesSettingsController'
            })
            .when('/settings/modules/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/modules&token=' + Journal2Config.token,
                controller: 'ModulesSettingsController'
            })


            .when('/settings/pages/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/pages&token=' + Journal2Config.token,
                controller: 'PagesSettingsController'
            })
            .when('/settings/journalcheckout/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/journalcheckout&token=' + Journal2Config.token,
                controller: 'JournalCheckoutSettingsController'
            })
            .when('/settings/productpage/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/productpage&token=' + Journal2Config.token,
                controller: 'ProductPageSettingsController'
            })

            .when('/settings/category/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/category&token=' + Journal2Config.token,
                controller: 'CategorySettingsController'
            })
            .when('/settings/productlist/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/productlist&token=' + Journal2Config.token,
                controller: 'ProductListSettingsController'
            })
            .when('/settings/productgrid/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/productgrid&token=' + Journal2Config.token,
                controller: 'ProductGridSettingsController'
            })
            .when('/settings/footer/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/footer&token=' + Journal2Config.token,
                controller: 'FooterSettingsController'
            })
            .when('/settings/catalog/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/catalog&token=' + Journal2Config.token,
                controller: 'CatalogSettingsController'
            })
            .when('/settings/custom_code/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/custom_code&token=' + Journal2Config.token,
                controller: 'CustomCodeSettingsController'
            })

            .when('/settings/sidecolumn/:skin_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/sidecolumn&token=' + Journal2Config.token,
                controller: 'SideColumnSettingsController'
            })
            .when('/settings2/:category', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings&token=' + Journal2Config.token,
                controller: 'SettingsController'
            })
            /* system */
            .when('/settings/system', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/system&token=' + Journal2Config.token,
                controller: 'SystemSettingsController'
            })
            /* import_export */
            .when('/settings/import_export', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=settings/import_export&token=' + Journal2Config.token,
                controller: 'ImportExportSettingsController'
            })
            /* menus */
            .when('/menus/primary/:store_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=menus/primary&token=' + Journal2Config.token,
                controller: 'PrimaryMenuController'
            })
            .when('/menus/secondary/:store_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=menus/secondary&token=' + Journal2Config.token,
                controller: 'SecondaryMenuController'
            })
            .when('/menus/main/:store_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=menus/main&token=' + Journal2Config.token,
                controller: 'MainMenuController'
            })
            /* footer */
            .when('/footer/menu/:store_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=footer/menu&token=' + Journal2Config.token,
                controller: 'FooterMenuController'
            })
            .when('/footer/copyright/:store_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=footer/copyright&token=' + Journal2Config.token,
                controller: 'FooterCopyrightController'
            })
            .when('/footer/payments/:store_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=footer/payments&token=' + Journal2Config.token,
                controller: 'FooterPaymentsController'
            })
            /* blog */
            .when('/blog/settings/:store_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog/settings&token=' + Journal2Config.token,
                controller: 'GeneralBlogSettingsController'
            })
            .when('/blog/categories', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog/categories/all&token=' + Journal2Config.token,
                controller: 'BlogCategoriesAllController'
            })
            .when('/blog/categories/form/:category_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog/categories/form&token=' + Journal2Config.token,
                controller: 'BlogCategoriesFormController'
            })
            .when('/blog/posts', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog/posts/all&token=' + Journal2Config.token,
                controller: 'BlogPostsAllController'
            })
            .when('/blog/posts/form/:post_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog/posts/form&token=' + Journal2Config.token,
                controller: 'BlogPostsFormController'
            })
            .when('/blog/comments', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog/comments/all&token=' + Journal2Config.token,
                controller: 'BlogCommentsAllController'
            })
            .when('/blog/comments/form/:comment_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog/comments/form&token=' + Journal2Config.token,
                controller: 'BlogCommentsFormController'
            })
            /* blog modules */
            .when('/module/blog_categories/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/categories/all&token=' + Journal2Config.token,
                controller: 'BlogModuleCategoriesAllController'
            })
            .when('/module/blog_categories/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/categories/form&token=' + Journal2Config.token,
                controller: 'BlogModuleCategoriesFormController'
            })
            .when('/module/blog_comments/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/comments/all&token=' + Journal2Config.token,
                controller: 'BlogModuleCommentsAllController'
            })
            .when('/module/blog_comments/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/comments/form&token=' + Journal2Config.token,
                controller: 'BlogModuleCommentsFormController'
            })
            .when('/module/blog_search/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/search/all&token=' + Journal2Config.token,
                controller: 'BlogModuleSearchAllController'
            })
            .when('/module/blog_search/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/search/form&token=' + Journal2Config.token,
                controller: 'BlogModuleSearchFormController'
            })
            .when('/module/blog_side_posts/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/side_posts/all&token=' + Journal2Config.token,
                controller: 'BlogModuleSidePostsAllController'
            })
            .when('/module/blog_side_posts/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/side_posts/form&token=' + Journal2Config.token,
                controller: 'BlogModuleSidePostsFormController'
            })
            .when('/module/blog_posts/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/posts/all&token=' + Journal2Config.token,
                controller: 'BlogModulePostsAllController'
            })
            .when('/module/blog_posts/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/posts/form&token=' + Journal2Config.token,
                controller: 'BlogModulePostsFormController'
            })
            .when('/module/blog_tags/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/tags/all&token=' + Journal2Config.token,
                controller: 'BlogModuleTagsAllController'
            })
            .when('/module/blog_tags/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=blog_modules/tags/form&token=' + Journal2Config.token,
                controller: 'BlogModuleTagsFormController'
            })
            /* custom blocks */
            .when('/module/cms_blocks/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=cms_blocks/all&token=' + Journal2Config.token,
                controller: 'CMSBlocksAllController'
            })
            .when('/module/cms_blocks/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=cms_blocks/form&token=' + Journal2Config.token,
                controller: 'CMSBlocksFormController'
            })
            /* side blocks */
            .when('/module/side_blocks/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_blocks/all&token=' + Journal2Config.token,
                controller: 'SideBlocksAllController'
            })
            .when('/module/side_blocks/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_blocks/form&token=' + Journal2Config.token,
                controller: 'SideBlocksFormController'
            })
            /* slider */
            .when('/module/slider/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=slider/all&token=' + Journal2Config.token,
                controller: 'SliderAllController'
            })
            .when('/module/slider/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=slider/form&token=' + Journal2Config.token,
                controller: 'SliderFormController'
            })
            /* simple slider */
            .when('/module/simple_slider/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=simple_slider/all&token=' + Journal2Config.token,
                controller: 'SimpleSliderAllController'
            })
            .when('/module/simple_slider/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=simple_slider/form&token=' + Journal2Config.token,
                controller: 'SimpleSliderFormController'
            })
            /* fullscreen slider */
            .when('/module/fullscreen_slider/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=fullscreen_slider/all&token=' + Journal2Config.token,
                controller: 'FullScreenSliderAllController'
            })
            .when('/module/fullscreen_slider/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=fullscreen_slider/form&token=' + Journal2Config.token,
                controller: 'FullScreenSliderFormController'
            })
            /* photo gallery */
            .when('/module/photo_gallery/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=photo_gallery/all&token=' + Journal2Config.token,
                controller: 'PhotoGalleryAllController'
            })
            .when('/module/photo_gallery/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=photo_gallery/form&token=' + Journal2Config.token,
                controller: 'PhotoGalleryFormController'
            })
            /* text rotator */
            .when('/module/text_rotator/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=text_rotator/all&token=' + Journal2Config.token,
                controller: 'TextRotatorAllController'
            })
            .when('/module/text_rotator/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=text_rotator/form&token=' + Journal2Config.token,
                controller: 'TextRotatorFormController'
            })
            /* headline rotator */
            .when('/module/headline_rotator/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=headline_rotator/all&token=' + Journal2Config.token,
                controller: 'HeadlineRotatorAllController'
            })
            .when('/module/headline_rotator/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=headline_rotator/form&token=' + Journal2Config.token,
                controller: 'HeadlineRotatorFormController'
            })
            /* header_notice */
            .when('/module/header_notice/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=header_notice/all&token=' + Journal2Config.token,
                controller: 'HeaderNoticeAllController'
            })
            .when('/module/header_notice/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=header_notice/form&token=' + Journal2Config.token,
                controller: 'HeaderNoticeFormController'
            })
            /* product tabs */
            .when('/module/product_tabs/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=product_tabs/all&token=' + Journal2Config.token,
                controller: 'ProductTabsAllController'
            })
            .when('/module/product_tabs/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=product_tabs/form&token=' + Journal2Config.token,
                controller: 'ProductTabsFormController'
            })
            /* multi module */
            .when('/module/advanced_grid/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=advanced_grid/all&token=' + Journal2Config.token,
                controller: 'AdvancedGridAllController'
            })
            .when('/module/advanced_grid/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=advanced_grid/form&token=' + Journal2Config.token,
                controller: 'AdvancedGridFormController'
            })
            /* carousel grid */
            .when('/module/carousel_grid/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=carousel_grid/all&token=' + Journal2Config.token,
                controller: 'CarouselGridAllController'
            })
            .when('/module/carousel_grid/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=carousel_grid/form&token=' + Journal2Config.token,
                controller: 'CarouselGridFormController'
            })
            /* side column menu */
            .when('/module/side_column_menu/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_column_menu/all&token=' + Journal2Config.token,
                controller: 'SideColumnMenuAllController'
            })
            .when('/module/side_column_menu/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_column_menu/form&token=' + Journal2Config.token,
                controller: 'SideColumnMenuFormController'
            })
            /* side category */
            .when('/module/side_category/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_category/all&token=' + Journal2Config.token,
                controller: 'SideCategoryAllController'
            })
            .when('/module/side_category/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_category/form&token=' + Journal2Config.token,
                controller: 'SideCategoryFormController'
            })
            /* custom sections */
            .when('/module/custom_sections/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=custom_sections/all&token=' + Journal2Config.token,
                controller: 'CustomSectionsAllController'
            })
            .when('/module/custom_sections/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=custom_sections/form&token=' + Journal2Config.token,
                controller: 'CustomSectionsFormController'
            })
            /* carousel */
            .when('/module/carousel/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=carousel/all&token=' + Journal2Config.token,
                controller: 'CarouselAllController'
            })
            .when('/module/carousel/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=carousel/form&token=' + Journal2Config.token,
                controller: 'CarouselFormController'
            })
            /* static banners */
            .when('/module/static_banners/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=static_banners/all&token=' + Journal2Config.token,
                controller: 'StaticBannersAllController'
            })
            .when('/module/static_banners/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=static_banners/form&token=' + Journal2Config.token,
                controller: 'StaticBannersFormController'
            })
            /* slider */
            .when('/module/layer_slider/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=layer_slider/all&token=' + Journal2Config.token,
                controller: 'LayerSliderAllController'
            })
            .when('/module/layer_slider/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=layer_slider/form&token=' + Journal2Config.token,
                controller: 'LayerSliderFormController'
            })
            /* super filter */
            .when('/module/super_filter/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=super_filter/all&token=' + Journal2Config.token,
                controller: 'SuperFilterAllController'
            })
            .when('/module/super_filter/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=super_filter/form&token=' + Journal2Config.token,
                controller: 'SuperFilterFormController'
            })
            /* side products */
            .when('/module/side_products/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_products/all&token=' + Journal2Config.token,
                controller: 'SideProductsAllController'
            })
            .when('/module/side_products/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=side_products/form&token=' + Journal2Config.token,
                controller: 'SideProductsFormController'
            })
            /* newsletter */
            .when('/module/newsletter/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=newsletter/all&token=' + Journal2Config.token,
                controller: 'NewsletterAllController'
            })
            .when('/module/newsletter/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=newsletter/form&token=' + Journal2Config.token,
                controller: 'NewsletterFormController'
            })
            /* popup */
            .when('/module/popup/all/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=popup/all&token=' + Journal2Config.token,
                controller: 'PopupAllController'
            })
            .when('/module/popup/form/:module_id?', {
                templateUrl: 'index.php?route=module/journal2/tpl&tpl=popup/form&token=' + Journal2Config.token,
                controller: 'PopupFormController'
            });
    }]);

    app.run(['$rootScope', '$location', 'Spinner', 'History', function($rootScope, $location, Spinner, History){
        $(function () {
            $('#nav > li, #nav > li > ul > li').hover(function () {
                $('>ul', $(this)).removeClass('hide-menu').stop(true, true).fadeIn(0);
            }, function () {
                $('>ul', $(this)).removeClass('hide-menu').stop(true, true).fadeOut(0);
            });

            $('#nav li > ul').on('click', function () {
                $(this).addClass('hide-menu');
            });

        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 90) {
                $('.module-header').addClass('fixed');
            } else {
                $('.module-header').removeClass('fixed');
            }
        });

        /* tips */
        $('a.journal-tip').on('click', function () {
            var model = $(this).closest('li').find('[data-ng-model]').attr('data-ng-model').replace('settings.', '');
            window.open('http://docs.digital-atelier.com/opencart/journal/tips/' + model + '.jpg', '_blank');
            return false;
        });

        $rootScope.$on("$routeChangeStart", function() {
            History.add($location.path());
            Spinner.show();
            /* parse path */
            var path = $location.path().split('/');
            var s1 = path[1] || null;
            var s2 = path[2] || null;
            var s = '/' + s1 + '/' + s2;

            /* locate dom elements */
            var $a = $('a[href*="' + s + '"]');
            var $parent = $a.closest('#nav > li');
            var $ul = $('>ul', $parent);

            /* remove old state */
            $("#nav li a").not($a).removeClass("open");

            /* add new state */
            $a.addClass('open');
        });

    }]);

    return app;
});

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

require.config({
    paths: {
        'angular'           : '../lib/angular/angular.min',
        'angular-route'     : '../lib/angular/angular-route.min',
        'angular-ls'        : '../lib/angular/angular-local-storage',
        'angular-table'     : '../lib/angular-table/ng-table.min',
        'underscore'        : '../lib/underscore/underscore.min',
        'underscore.string' : '../lib/underscore/underscore-string.min',
        'idTabs'            : '../lib/idTabs/jquery.idTabs',
        'angular-strap'     : '../lib/angular-strap/angular-strap.min',
        'select2'           : '../lib/select2/select2.min',
        'angular-select2'   : '../lib/select2/select2-directive',
        'angular-bootstrap' : '../lib/ui.bootstrap/ui-bootstrap-tpls-0.6.0.min',
        'spin'              : '../lib/spin.js/spin.min',
        'simple-slider'     : '../lib/simple-slider/js/simple-slider'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-ls': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular']
        },
        'angular-table': {
            deps: ['angular']
        },
        'underscore': {
            exports: '_'
        },
        'underscore.string': {
            deps: ['underscore']
        },
        'idTabs': {
            exports: 'jQuery.fn.idTabs'
        },
        'angular-select2': {
            deps: ['angular', 'select2']
        },
        'angular-bootstrap': {
            deps: ['angular']
        }
    },
    urlArgs: "ver=" + Journal2Config.version
});

require(['angular', 'app'], function (ng, app) {
    ng.element(document).ready(function () {

        ng.bootstrap(document, ['journal']);
    });
});
define("main", function(){});

