window.NYTD=window.NYTD||{};window.NYTD.NYTMM=window.NYTD.NYTMM||{};if(jQuery){$j=jQuery.noConflict()}window.NYTD.NYTMM.namespace=function(d){var c=d.split("."),b=NYTD.NYTMM,a;if(c[0]==="NYTD"&&c[1]==="NYTMM"){c=c.slice(2)}for(a=0;a<c.length;a+=1){if(typeof b[c[a]]==="undefined"){b[c[a]]={}}b=b[c[a]]}return b};if(typeof console=="undefined"){window.console={log:function(){},warn:function(){},error:function(){}}}if(typeof console.assert=="undefined"){window.console.assert=function(){}}window.NYTD.NYTMM.debugLevel=1;(function(a){a.extend({log:function(){if(NYTD.NYTMM.debugLevel<1){return}var g;if(arguments.length>0){g=(arguments.length>1)?Array.prototype.join.call(arguments," "):arguments[0];if(NYTD.NYTMM.debugLevel===1){if(window.console){if(console.dirxml&&(typeof HTMLElement!=="undefined"&&g instanceof HTMLElement)){console.dirxml(g)}else{if(console.log){if(window.chrome&&a.type(g)==="string"){var c=(new Error()).stack.split("\n");var j=c.length;var d=/localhost|nytint|bundler/i;var f=2;for(;f<j;f++){if(d.test(c[f])){break}}var b=c[f]||c[2];if(b){var e=b.slice(b.indexOf("at ")+3,b.length);var h=e.replace(/.*\//i,"").replace(/&cachebust=[a-z0-9]*/,"").replace(")","");console.log("%c"+g+"%c "+h+" %c "+e,"background-color: #FED; padding-left: 6px; padding-right: 6px; color: #333; border-right: 5px solid white;","background-color: #EFEFEF; color: #888; padding-left: 6px; padding-right: 6px; border-right: 5px solid white;","display:inline-block; font-size: 2px; margin-left:-154px;line-height:20px;")}}else{console.log(g)}}}}}else{if(NYTD.NYTMM.debugLevel===2){alert(g)}}}return g}})})(jQuery||NYTD.jQuery);(function(){NYTD.NYTMM.iOS=false;NYTD.NYTMM.iOSInfo={userAgent:null,version:null,minor:null,update:null,device:null,phone:false,tablet:false,pixelRatio:1,retina:false};if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)){NYTD.NYTMM.iOS=true;NYTD.NYTMM.iOSInfo.userAgent=navigator.userAgent;if(/CPU like Mac OS X/i.test(navigator.userAgent)){NYTD.NYTMM.iOSInfo.version=1}else{if(/OS [2-6]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)){var c=/OS ([2-6])_(\d)(?:_(\d))? like Mac OS X/i.exec(navigator.userAgent);NYTD.NYTMM.iOSInfo.version=c[1];NYTD.NYTMM.iOSInfo.minor=c[2];NYTD.NYTMM.iOSInfo.update=c[3]}}var b=/(iPhone|iPod|iPad)/i.exec(navigator.userAgent);NYTD.NYTMM.iOSInfo.device=b[0];NYTD.NYTMM.iOSInfo.tablet=(NYTD.NYTMM.iOSInfo.device==="iPad");NYTD.NYTMM.iOSInfo.phone=(NYTD.NYTMM.iOSInfo.tablet)?false:true;NYTD.NYTMM.iOSInfo.pixelRatio=!!window.devicePixelRatio?window.devicePixelRatio:1;NYTD.NYTMM.iOSInfo.retina=NYTD.NYTMM.iOSInfo.pixelRatio>1;var a=(NYTD.NYTMM.iOSInfo.phone)?"phone":"tablet";jQuery("html").addClass("nytmm_iOS");jQuery("html").addClass("nytmm_iOS_"+NYTD.NYTMM.iOSInfo.version);jQuery("html").addClass("nytmm_iOS_"+a)}})();
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
;var Mustache=(typeof module!=="undefined"&&module.exports)||{};(function(w){w.name="mustache.js";w.version="0.5.0-dev";w.tags=["{{","}}"];w.parse=n;w.compile=f;w.render=v;w.clearCache=u;w.to_html=v;var t=Object.prototype.toString;var g=Array.isArray;var c=Array.prototype.forEach;var h=String.prototype.trim;var j;if(g){j=g}else{j=function(x){return t.call(x)==="[object Array]"}}var s;if(c){s=function(y,z,x){return c.call(y,z,x)}}else{s=function(A,B,z){for(var y=0,x=A.length;y<x;++y){B.call(z,A[y],y,A)}}}var k=/^\s*$/;function d(x){return k.test(x)}var q;if(h){q=function(x){return x==null?"":h.call(x)}}else{var o,i;if(d("\xA0")){o=/^\s+/;i=/\s+$/}else{o=/^[\s\xA0]+/;i=/[\s\xA0]+$/}q=function(x){return x==null?"":String(x).replace(o,"").replace(i,"")}}var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function p(x){return String(x).replace(/&(?!\w+;)|[<>"']/g,function(y){return e[y]||y})}function l(D,F,G,z){z=z||"<template>";var H=F.split("\n"),x=Math.max(G-3,0),A=Math.min(H.length,G+3),y=H.slice(x,A);var E;for(var B=0,C=y.length;B<C;++B){E=B+x+1;y[B]=(E===G?" >> ":"    ")+y[B]}D.template=F;D.line=G;D.file=z;D.message=[z+":"+G,y.join("\n"),"",D.message].join("\n");return D}function m(x,E){var D=x.split(".");var B=D.length-1;var C=D[B];var F,y,A=E.length,z,G;while(A){G=E.slice(0);y=E[--A];z=0;while(z<B){y=y[D[z++]];if(y==null){break}G.push(y)}if(y&&C in y){F=y[C];break}}if(typeof F==="function"){F=F.call(G[G.length-1])}return F==null?"":F}function a(B,A,D,x,y){if(y){if(A==null||A===false||(j(A)&&A.length===0)){B(D())}}else{if(j(A)){s(A,function(E){x.push(E);B(D());x.pop()})}else{if(typeof A==="object"){x.push(A);B(D());x.pop()}else{if(typeof A==="function"){var z=x[x.length-1];var C=function(E){return v(E,z)};B(A.call(z,D(),C)||"")}else{if(A){B(D())}}}}}}function n(aa,C){C=C||{};var L=C.tags||w.tags,M=L[0],H=L[L.length-1];var y=["var line = 1;","\ntry {",'\nsend("'];var G=[],Y=false;var W=function(){if(!Y&&!C.space){while(G.length){y.splice(G.pop(),1)}}else{G=[]}Y=false};var A=function(ab){return ab==="."?"stack[stack.length - 1]":'find("'+ab+'")'};var T=[],Q,D,N;var V=function(ab){L=q(ab).split(/\s+/);D=L[0];N=L[L.length-1]};var K=function(ab){y.push('");',Q,'\nvar partial = partials["'+q(ab)+'"];',"\nif (partial) {","\n  send(render(partial, stack[stack.length - 1], partials));","\n}",'\nsend("')};var x=function(ad,ab){var ac=q(ad);if(ac===""){throw l(new Error("Section name may not be empty"),aa,J,C.file)}T.push({name:ac,inverted:ab});y.push('");',Q,"\nvar value = "+A(ac)+";","\nvar callback = (function () {","\n  var buffer, send = function (chunk) { buffer.push(chunk); };","\n  return function () {","\n    buffer = [];",'\nsend("')};var F=function(ab){x(ab,true)};var U=function(ac){var ab=q(ac);var ae=T.length!=0&&T[T.length-1].name;if(!ae||ab!=ae){throw l(new Error('Section named "'+ab+'" was never opened'),aa,J,file)}var ad=T.pop();y.push('");','\n    return buffer.join("");',"\n  };","\n})();");if(ad.inverted){y.push("\nsendSection(send,value,callback,stack,true);")}else{y.push("\nsendSection(send,value,callback,stack);")}y.push('\nsend("')};var X=function(ab){y.push('");',Q,"\nsend("+A(q(ab))+");",'\nsend("')};var z=function(ab){y.push('");',Q,"\nsend(escapeHTML("+A(q(ab))+"));",'\nsend("')};var J=1,Z,E;for(var R=0,S=aa.length;R<S;++R){if(aa.slice(R,R+M.length)===M){R+=M.length;Z=aa.substr(R,1);Q="\nline = "+J+";";D=M;N=H;switch(Z){case"!":R++;E=null;break;case"=":R++;H="="+H;E=V;break;case">":R++;E=K;break;case"#":R++;E=x;break;case"^":R++;E=F;break;case"/":R++;E=U;break;case"{":H="}"+H;case"&":R++;Y=true;E=X;break;default:Y=true;E=z}var B=aa.indexOf(H,R);if(B===-1){throw l(new Error('Tag "'+M+'" was not closed properly'),aa,J,C.file)}var P=aa.substring(R,B);if(E){E(P)}var O=0;while(~(O=P.indexOf("\n",O))){J++;O++}R=B+H.length-1;M=D;H=N}else{Z=aa.substr(R,1);switch(Z){case'"':case"\\":Y=true;y.push("\\"+Z);break;case"\n":G.push(y.length);y.push("\\n");W();J++;break;default:if(d(Z)){G.push(y.length)}else{Y=true}y.push(Z)}}}if(T.length!=0){throw l(new Error('Section "'+T[T.length-1].name+'" was not closed properly'),aa,J,C.file)}W();y.push('");',"\nsend(null);","\n} catch (e) { throw {error: e, line: line}; }");var I=y.join("").replace(/send\(""\);\n/g,"");if(C.debug){if(typeof console!="undefined"&&console.log){console.log(I)}else{if(typeof print==="function"){print(I)}}}return I}function r(B,z){var y="view,partials,send,stack,find,escapeHTML,sendSection,render";var x=n(B,z);var A=new Function(y,x);return function(E,F,J){if(typeof F==="function"){J=F;F={}}F=F||{};var D=[];var H=J||function(K){D.push(K)};var C=[E];var I=function(K){return m(K,C)};try{A(E,F,H,C,I,p,a,v)}catch(G){throw l(G.error,B,G.line,z.file)}return D.join("")}}var b={};function u(){b={}}function f(y,x){x=x||{};if(x.cache!==false){if(!b[y]){b[y]=r(y,x)}return b[y]}return r(y,x)}function v(z,x,y,A){return f(z)(x,y,A)}})(Mustache);
/*!
Underscore.js 1.5.1
http://underscorejs.org
(c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
Underscore may be freely distributed under the MIT license.
*/
;!function(){var ak=this,ae=ak._,ag={},au=Array.prototype,ad=Object.prototype,ap=Function.prototype,ay=au.push,aj=au.slice,aw=au.concat,am=ad.toString,at=ad.hasOwnProperty,af=au.forEach,ai=au.map,ac=au.reduce,aq=au.reduceRight,av=au.filter,ar=au.every,al=au.some,Z=au.indexOf,ax=au.lastIndexOf,aa=Array.isArray,az=Object.keys,ab=ap.bind,ao=function(a){return a instanceof ao?a:this instanceof ao?(this._wrapped=a,void 0):new ao(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=ao),exports._=ao):ak._=ao,ao.VERSION="1.5.1";var X=ao.each=ao.forEach=function(h,f,g){if(null!=h){if(af&&h.forEach===af){h.forEach(f,g)}else{if(h.length===+h.length){for(var c=0,d=h.length;d>c;c++){if(f.call(g,h[c],c,h)===ag){return}}}else{for(var b in h){if(ao.has(h,b)&&f.call(g,h[b],b,h)===ag){return}}}}}};ao.map=ao.collect=function(d,a,b){var c=[];return null==d?c:ai&&d.map===ai?d.map(a,b):(X(d,function(g,e,f){c.push(a.call(b,g,e,f))}),c)};var U="Reduce of empty array with no initial value";ao.reduce=ao.foldl=ao.inject=function(f,b,c,d){var a=arguments.length>2;if(null==f&&(f=[]),ac&&f.reduce===ac){return d&&(b=ao.bind(b,d)),a?f.reduce(b,c):f.reduce(b)}if(X(f,function(h,g,e){a?c=b.call(d,c,h,g,e):(c=h,a=!0)}),!a){throw new TypeError(U)}return c},ao.reduceRight=ao.foldr=function(j,f,g,h){var c=arguments.length>2;if(null==j&&(j=[]),aq&&j.reduceRight===aq){return h&&(f=ao.bind(f,h)),c?j.reduceRight(f,g):j.reduceRight(f)}var d=j.length;if(d!==+d){var b=ao.keys(j);d=b.length}if(X(j,function(e,i,a){i=b?b[--d]:--d,c?g=f.call(h,g,j[i],i,a):(g=j[i],c=!0)}),!c){throw new TypeError(U)}return g},ao.find=ao.detect=function(d,a,b){var c;return J(d,function(g,e,f){return a.call(b,g,e,f)?(c=g,!0):void 0}),c},ao.filter=ao.select=function(d,a,b){var c=[];return null==d?c:av&&d.filter===av?d.filter(a,b):(X(d,function(g,e,f){a.call(b,g,e,f)&&c.push(g)}),c)},ao.reject=function(c,a,b){return ao.filter(c,function(g,f,d){return !a.call(b,g,f,d)},b)},ao.every=ao.all=function(d,b,c){b||(b=ao.identity);var a=!0;return null==d?a:ar&&d.every===ar?d.every(b,c):(X(d,function(g,f,e){return(a=a&&b.call(c,g,f,e))?void 0:ag}),!!a)};var J=ao.some=ao.any=function(d,b,c){b||(b=ao.identity);var a=!1;return null==d?a:al&&d.some===al?d.some(b,c):(X(d,function(g,f,e){return a||(a=b.call(c,g,f,e))?ag:void 0}),!!a)};ao.contains=ao.include=function(b,a){return null==b?!1:Z&&b.indexOf===Z?b.indexOf(a)!=-1:J(b,function(c){return c===a})},ao.invoke=function(d,a){var b=aj.call(arguments,2),c=ao.isFunction(a);return ao.map(d,function(e){return(c?a:e[a]).apply(e,b)})},ao.pluck=function(b,a){return ao.map(b,function(c){return c[a]})},ao.where=function(c,a,b){return ao.isEmpty(a)?b?void 0:[]:ao[b?"find":"filter"](c,function(e){for(var d in a){if(a[d]!==e[d]){return !1}}return !0})},ao.findWhere=function(b,a){return ao.where(b,a,!0)},ao.max=function(d,a,b){if(!a&&ao.isArray(d)&&d[0]===+d[0]&&d.length<65535){return Math.max.apply(Math,d)}if(!a&&ao.isEmpty(d)){return -1/0}var c={computed:-1/0,value:-1/0};return X(d,function(h,f,g){var e=a?a.call(b,h,f,g):h;e>c.computed&&(c={value:h,computed:e})}),c.value},ao.min=function(d,a,b){if(!a&&ao.isArray(d)&&d[0]===+d[0]&&d.length<65535){return Math.min.apply(Math,d)}if(!a&&ao.isEmpty(d)){return 1/0}var c={computed:1/0,value:1/0};return X(d,function(h,f,g){var e=a?a.call(b,h,f,g):h;e<c.computed&&(c={value:h,computed:e})}),c.value},ao.shuffle=function(d){var a,b=0,c=[];return X(d,function(e){a=ao.random(b++),c[b-1]=c[a],c[a]=e}),c};var Q=function(a){return ao.isFunction(a)?a:function(b){return b[a]}};ao.sortBy=function(d,a,b){var c=Q(a);return ao.pluck(ao.map(d,function(g,f,e){return{value:g,index:f,criteria:c.call(b,g,f,e)}}).sort(function(i,f){var g=i.criteria,h=f.criteria;if(g!==h){if(g>h||g===void 0){return 1}if(h>g||h===void 0){return -1}}return i.index<f.index?-1:1}),"value")};var an=function(g,c,d,f){var a={},b=Q(null==c?ao.identity:c);return X(g,function(h,e){var i=b.call(d,h,e,g);f(a,i,h)}),a};ao.groupBy=function(c,a,b){return an(c,a,b,function(f,d,e){(ao.has(f,d)?f[d]:f[d]=[]).push(e)})},ao.countBy=function(c,a,b){return an(c,a,b,function(e,d){ao.has(e,d)||(e[d]=0),e[d]++})},ao.sortedIndex=function(k,f,g,h){g=null==g?ao.identity:Q(g);for(var c=g.call(h,f),d=0,b=k.length;b>d;){var j=d+b>>>1;g.call(h,k[j])<c?d=j+1:b=j}return d},ao.toArray=function(a){return a?ao.isArray(a)?aj.call(a):a.length===+a.length?ao.map(a,ao.identity):ao.values(a):[]},ao.size=function(a){return null==a?0:a.length===+a.length?a.length:ao.keys(a).length},ao.first=ao.head=ao.take=function(c,a,b){return null==c?void 0:null==a||b?c[0]:aj.call(c,0,a)},ao.initial=function(c,a,b){return aj.call(c,0,c.length-(null==a||b?1:a))},ao.last=function(c,a,b){return null==c?void 0:null==a||b?c[c.length-1]:aj.call(c,Math.max(c.length-a,0))},ao.rest=ao.tail=ao.drop=function(c,a,b){return aj.call(c,null==a||b?1:a)},ao.compact=function(a){return ao.filter(a,ao.identity)};var H=function(c,a,b){return a&&ao.every(c,ao.isArray)?aw.apply(b,c):(X(c,function(d){ao.isArray(d)||ao.isArguments(d)?a?ay.apply(b,d):H(d,a,b):b.push(d)}),b)};ao.flatten=function(b,a){return H(b,a,[])},ao.without=function(a){return ao.difference(a,aj.call(arguments,1))},ao.uniq=ao.unique=function(j,f,g,h){ao.isFunction(f)&&(h=g,g=f,f=!1);var c=g?ao.map(j,g,h):j,d=[],b=[];return X(c,function(a,i){(f?i&&b[b.length-1]===a:ao.contains(b,a))||(b.push(a),d.push(j[i]))}),d},ao.union=function(){return ao.uniq(ao.flatten(arguments,!0))},ao.intersection=function(b){var a=aj.call(arguments,1);return ao.filter(ao.uniq(b),function(c){return ao.every(a,function(d){return ao.indexOf(d,c)>=0})})},ao.difference=function(b){var a=aw.apply(au,aj.call(arguments,1));return ao.filter(b,function(c){return !ao.contains(a,c)})},ao.zip=function(){for(var c=ao.max(ao.pluck(arguments,"length").concat(0)),a=new Array(c),b=0;c>b;b++){a[b]=ao.pluck(arguments,""+b)}return a},ao.object=function(f,b){if(null==f){return{}}for(var c={},d=0,a=f.length;a>d;d++){b?c[f[d]]=b[d]:c[f[d][0]]=f[d][1]}return c},ao.indexOf=function(f,b,c){if(null==f){return -1}var d=0,a=f.length;if(c){if("number"!=typeof c){return d=ao.sortedIndex(f,b),f[d]===b?d:-1}d=0>c?Math.max(0,a+c):c}if(Z&&f.indexOf===Z){return f.indexOf(b,c)}for(;a>d;d++){if(f[d]===b){return d}}return -1},ao.lastIndexOf=function(f,b,c){if(null==f){return -1}var d=null!=c;if(ax&&f.lastIndexOf===ax){return d?f.lastIndexOf(b,c):f.lastIndexOf(b)}for(var a=d?c:f.length;a--;){if(f[a]===b){return a}}return -1},ao.range=function(g,c,d){arguments.length<=1&&(c=g||0,g=0),d=arguments[2]||1;for(var f=Math.max(Math.ceil((c-g)/d),0),a=0,b=new Array(f);f>a;){b[a++]=g,g+=d}return b};var L=function(){};ao.bind=function(d,a){var b,c;if(ab&&d.bind===ab){return ab.apply(d,aj.call(arguments,1))}if(!ao.isFunction(d)){throw new TypeError}return b=aj.call(arguments,2),c=function(){if(!(this instanceof c)){return d.apply(a,b.concat(aj.call(arguments)))}L.prototype=d.prototype;var e=new L;L.prototype=null;var f=d.apply(e,b.concat(aj.call(arguments)));return Object(f)===f?f:e}},ao.partial=function(b){var a=aj.call(arguments,1);return function(){return b.apply(this,a.concat(aj.call(arguments)))}},ao.bindAll=function(b){var a=aj.call(arguments,1);if(0===a.length){throw new Error("bindAll must be passed function names")}return X(a,function(c){b[c]=ao.bind(b[c],b)}),b},ao.memoize=function(c,a){var b={};return a||(a=ao.identity),function(){var d=a.apply(this,arguments);return ao.has(b,d)?b[d]:b[d]=c.apply(this,arguments)}},ao.delay=function(c,a){var b=aj.call(arguments,2);return setTimeout(function(){return c.apply(null,b)},a)},ao.defer=function(a){return ao.delay.apply(ao,[a,1].concat(aj.call(arguments,1)))},ao.throttle=function(f,m,b){var h,l,g,k=null,d=0;b||(b={});var j=function(){d=b.leading===!1?0:new Date,k=null,g=f.apply(h,l)};return function(){var a=new Date;d||b.leading!==!1||(d=a);var c=m-(a-d);return h=this,l=arguments,0>=c?(clearTimeout(k),k=null,d=a,g=f.apply(h,l)):k||b.trailing===!1||(k=setTimeout(j,c)),g}},ao.debounce=function(f,b,c){var d,a=null;return function(){var g=this,e=arguments,h=function(){a=null,c||(d=f.apply(g,e))},j=c&&!a;return clearTimeout(a),a=setTimeout(h,b),j&&(d=f.apply(g,e)),d}},ao.once=function(c){var a,b=!1;return function(){return b?a:(b=!0,a=c.apply(this,arguments),c=null,a)}},ao.wrap=function(b,a){return function(){var c=[b];return ay.apply(c,arguments),a.apply(this,c)}},ao.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--){b=[a[c].apply(this,b)]}return b[0]}},ao.after=function(b,a){return function(){return --b<1?a.apply(this,arguments):void 0}},ao.keys=az||function(c){if(c!==Object(c)){throw new TypeError("Invalid object")}var a=[];for(var b in c){ao.has(c,b)&&a.push(b)}return a},ao.values=function(c){var a=[];for(var b in c){ao.has(c,b)&&a.push(c[b])}return a},ao.pairs=function(c){var a=[];for(var b in c){ao.has(c,b)&&a.push([b,c[b]])}return a},ao.invert=function(c){var a={};for(var b in c){ao.has(c,b)&&(a[c[b]]=b)}return a},ao.functions=ao.methods=function(c){var a=[];for(var b in c){ao.isFunction(c[b])&&a.push(b)}return a.sort()},ao.extend=function(a){return X(aj.call(arguments,1),function(b){if(b){for(var c in b){a[c]=b[c]}}}),a},ao.pick=function(c){var a={},b=aw.apply(au,aj.call(arguments,1));return X(b,function(d){d in c&&(a[d]=c[d])}),a},ao.omit=function(d){var b={},c=aw.apply(au,aj.call(arguments,1));for(var a in d){ao.contains(c,a)||(b[a]=d[a])}return b},ao.defaults=function(a){return X(aj.call(arguments,1),function(b){if(b){for(var c in b){a[c]===void 0&&(a[c]=b[c])}}}),a},ao.clone=function(a){return ao.isObject(a)?ao.isArray(a)?a.slice():ao.extend({},a):a},ao.tap=function(b,a){return a(b),b};var G=function(g,q,b,k){if(g===q){return 0!==g||1/g==1/q}if(null==g||null==q){return g===q}g instanceof ao&&(g=g._wrapped),q instanceof ao&&(q=q._wrapped);var p=am.call(g);if(p!=am.call(q)){return !1}switch(p){case"[object String]":return g==String(q);case"[object Number]":return g!=+g?q!=+q:0==g?1/g==1/q:g==+q;case"[object Date]":case"[object Boolean]":return +g==+q;case"[object RegExp]":return g.source==q.source&&g.global==q.global&&g.multiline==q.multiline&&g.ignoreCase==q.ignoreCase}if("object"!=typeof g||"object"!=typeof q){return !1}for(var h=b.length;h--;){if(b[h]==g){return k[h]==q}}var m=g.constructor,d=q.constructor;if(m!==d&&!(ao.isFunction(m)&&m instanceof m&&ao.isFunction(d)&&d instanceof d)){return !1}b.push(g),k.push(q);var l=0,j=!0;if("[object Array]"==p){if(l=g.length,j=l==q.length){for(;l--&&(j=G(g[l],q[l],b,k));){}}}else{for(var v in g){if(ao.has(g,v)&&(l++,!(j=ao.has(q,v)&&G(g[v],q[v],b,k)))){break}}if(j){for(v in q){if(ao.has(q,v)&&!l--){break}}j=!l}}return b.pop(),k.pop(),j};ao.isEqual=function(b,a){return G(b,a,[],[])},ao.isEmpty=function(b){if(null==b){return !0}if(ao.isArray(b)||ao.isString(b)){return 0===b.length}for(var a in b){if(ao.has(b,a)){return !1}}return !0},ao.isElement=function(a){return !(!a||1!==a.nodeType)},ao.isArray=aa||function(a){return"[object Array]"==am.call(a)},ao.isObject=function(a){return a===Object(a)},X(["Arguments","Function","String","Number","Date","RegExp"],function(a){ao["is"+a]=function(b){return am.call(b)=="[object "+a+"]"}}),ao.isArguments(arguments)||(ao.isArguments=function(a){return !(!a||!ao.has(a,"callee"))}),"function"!=typeof/./&&(ao.isFunction=function(a){return"function"==typeof a}),ao.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},ao.isNaN=function(a){return ao.isNumber(a)&&a!=+a},ao.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==am.call(a)},ao.isNull=function(a){return null===a},ao.isUndefined=function(a){return a===void 0},ao.has=function(b,a){return at.call(b,a)},ao.noConflict=function(){return ak._=ae,this},ao.identity=function(a){return a},ao.times=function(f,b,c){for(var d=Array(Math.max(0,f)),a=0;f>a;a++){d[a]=b.call(c,a)}return d},ao.random=function(b,a){return null==a&&(a=b,b=0),b+Math.floor(Math.random()*(a-b+1))};var P={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};P.unescape=ao.invert(P.escape);var C={escape:new RegExp("["+ao.keys(P.escape).join("")+"]","g"),unescape:new RegExp("("+ao.keys(P.unescape).join("|")+")","g")};ao.each(["escape","unescape"],function(a){ao[a]=function(b){return null==b?"":(""+b).replace(C[a],function(c){return P[a][c]})}}),ao.result=function(c,a){if(null==c){return void 0}var b=c[a];return ao.isFunction(b)?b.call(c):b},ao.mixin=function(a){X(ao.functions(a),function(b){var c=ao[b]=a[b];ao.prototype[b]=function(){var d=[this._wrapped];return ay.apply(d,arguments),Y.call(this,c.apply(ao,d))}})};var K=0;ao.uniqueId=function(b){var a=++K+"";return b?b+a:a},ao.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var ah=/(.)^/,W={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},V=/\\|'|\r|\n|\t|\u2028|\u2029/g;ao.template=function(f,m,b){var h;b=ao.defaults({},b,ao.templateSettings);var l=new RegExp([(b.escape||ah).source,(b.interpolate||ah).source,(b.evaluate||ah).source].join("|")+"|$","g"),g=0,k="__p+='";f.replace(l,function(c,i,n,a,p){return k+=f.slice(g,p).replace(V,function(e){return"\\"+W[e]}),i&&(k+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),n&&(k+="'+\n((__t=("+n+"))==null?'':__t)+\n'"),a&&(k+="';\n"+a+"\n__p+='"),g=p+c.length,c}),k+="';\n",b.variable||(k="with(obj||{}){\n"+k+"}\n"),k="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+k+"return __p;\n";try{h=new Function(b.variable||"obj","_",k)}catch(d){throw d.source=k,d}if(m){return h(m,ao)}var j=function(a){return h.call(this,a,ao)};return j.source="function("+(b.variable||"obj")+"){\n"+k+"}",j},ao.chain=function(a){return ao(a).chain()};var Y=function(a){return this._chain?ao(a).chain():a};ao.mixin(ao),X(["pop","push","reverse","shift","sort","splice","unshift"],function(b){var a=au[b];ao.prototype[b]=function(){var c=this._wrapped;return a.apply(c,arguments),"shift"!=b&&"splice"!=b||0!==c.length||delete c[0],Y.call(this,c)}}),X(["concat","join","slice"],function(b){var a=au[b];ao.prototype[b]=function(){return Y.call(this,a.apply(this._wrapped,arguments))}}),ao.extend(ao.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);(function(c,a,b,d,e){if(b!=="undefined"&&typeof b.FlexType==="undefined"){b.FlexType=(function(){var h=this;this.callbacks={};var g=function(j){return j.toLowerCase().replace(/\s/g,"_").replace(/[^\w]/g,"")};var i=function(j,k){h.callbacks[g(j)]=k};var f=function(){var j=c.getFlexData?getFlexData():null;if(j&&d.type(j)==="string"){j=j.replace(/\{"\$t":(".*?")\}/g,"$1");j=j.replace(/"(true|false)"/g,"$1");j=j.replace(/"([\d\.\-]+)"/g,"$1");return jQuery.parseJSON(j)}else{return j}};d(a).ready(function(){if(!NYTD||!NYTD.FlexTypes){return}var j=NYTD.FlexTypes;d.each(j,function(k,m){var o=m.target;var l=g(m.type);var n=m.data;if(h.callbacks[l]){d.log("Creating FlexType",l,"for",o);h.callbacks[l]("#"+o,n)}else{d.log("ERROR FlexType: Template",l,"for",o,"not found")}})});return{getData:f,addCallback:i}})()}})(window,document,NYTD.NYTMM,jQuery);(function(b,a){a.jsonSlideshowCallbackBusy=a.jsonSlideshowCallbackBusy||false;a.SLIDESHOW_CROPS=[{crop:"thumbStandard",width:75,height:75},{crop:"thumbLarge",width:150,height:150},{crop:"thumbWide",width:190,height:126},{crop:"hpSmall",width:163,height:120},{crop:"hpMedium",width:337,height:250},{crop:"sfSpan",width:395,height:250},{crop:"slide",width:600,height:400},{crop:"jumbo",width:1024,height:768}];b.extend({slideshowUrls2MultiArray:function(f,e){var g=f.length;var c=[];var d=function(i){var h={};h.title=i.title;h.introduction=(i.introduction&&i.introduction.text)?i.introduction.text:i.description;h.kicker=i.kicker;h.date=i.lastBuildDate;h.images=b.slideshowJson2Array(i,{crop:"jumbo"});c.push(h);g--;if(g<=0){e(c)}};b.each(f,function(j,h){h=h.replace(/\s/g,"");b.getScoopSlideshowJsonp(h,d)})},getScoopSlideshowJsonp:function(c,e,d){if(NYTD.NYTMM.jsonSlideshowCallbackBusy===false){NYTD.NYTMM.jsonSlideshowCallbackBusy=true;b.ajax({url:c,dataType:"jsonp",jsonpCallback:"jsonSlideshowCallback",cache:true,timeout:10000,success:function(g,f){NYTD.NYTMM.jsonSlideshowCallbackBusy=false;e(g)},error:function(f){NYTD.NYTMM.jsonSlideshowCallbackBusy=false;if(d){d(f)}}})}else{setTimeout(function(){b.getScoopSlideshowJsonp(c,e)},300)}},slideshowJson2Array:function(p,q){var c=b.extend({crop:"jumbo",caption:"full"},q);var h=[];var k=p.items;for(var g=0;g<k.length;g++){var n=k[g];var f=null;var j=0;var e=0;var m="";var d=n.title;var l=n.image.credit;b.each(n.image.crops,function(o,r){if(r.type.toLowerCase()==c.crop.toLowerCase()){f=r.link;j=r.width;e=r.height}});b.each(n.captions,function(r,o){if(o.type.toLowerCase()===c.caption.toLowerCase()){m=b.removeEmptyScoopCaptions(o.caption)}});h.push({title:d,url:f,caption:m,credit:l,width:j,height:e})}return h},calculateBestFit:function(d,k,c,n){var m=d.width;var f=d.height;if(c){m*=1000;f*=1000}if(n&&(c||(m>k.width&&f>k.height))){var i=m/f;var l=k.width/k.height;if(i<l){m=k.width;f=m/i}else{f=k.height;m=f*i}}else{if(m>k.width){var j=k.width/m;m=k.width;f*=j}if(f>k.height){var e=(k.height)/f;f=k.height;m*=e}}var g=((k.height)-f)/2;return{width:m,height:f,marginTop:g}},removeEmptyScoopCaptions:function(c){var e="";var f=c.split("\n");for(var d=0;d<f.length;d++){var g=f[d];if(g!=="<p>&#160;</p>"){e+=g}}return e}})})(jQuery,NYTD.NYTMM);(function(a){a.fn.innerfade=function(b){return this.each(function(){a.innerfade(this,b)})};a.innerfade=function(b,c){var e={animationtype:"fade",speed:"normal",type:"sequence",timeout:2000,containerheight:"",runningclass:"innerfade",children:null,index:0,change:undefined};if(c){a.extend(e,c)}if(e.children===null){var g=a(b).children()}else{var g=a(b).children(e.children)}if(g.length>1){a(b).css("position","relative").css("height",e.containerheight).addClass(e.runningclass);for(var d=0;d<g.length;d++){a(g[d]).css("z-index",String(g.length-d)).css("position","absolute").hide()}if(e.type=="sequence"){if(e.timeout){setTimeout(function(){a.innerfade.next(g,e,1,0)},e.timeout)}a(g[0]).show()}else{if(e.type=="random"){var f=Math.floor(Math.random()*(g.length));e.index=f;if(e.timeout){setTimeout(function(){do{h=Math.floor(Math.random()*(g.length))}while(f==h);a.innerfade.next(g,e,h,f)},e.timeout)}a(g[f]).show()}else{if(e.type=="random_start"){var h=Math.floor(Math.random()*(g.length));e.type="sequence";e.index=h;if(e.timeout){setTimeout(function(){a.innerfade.next(g,e,(h+1)%g.length,h)},e.timeout)}a(g[h]).show()}else{alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")}}}a(b).bind("index",function(j,i){a.innerfade.next(g,e,i,e.index)})}};a.innerfade.next=function(d,b,e,c){b.index=e;if(b.change){b.change(e)}if(b.animationtype=="slide"){a(d[c]).stop(true,true).slideUp(b.speed);a(d[e]).stop(true,true).slideDown(b.speed)}else{if(b.animationtype=="fade"){a(d[c]).stop(true,true).fadeOut(b.speed);a(d[e]).stop(true,true).fadeIn(b.speed,function(){removeFilter(a(this)[0])})}else{alert("Innerfade-animationtype must either be 'slide' or 'fade'")}}if(b.type=="sequence"){if((e+1)<d.length){e=e+1;c=e-1}else{e=0;c=d.length-1}}else{if(b.type=="random"){c=e;while(e==c){e=Math.floor(Math.random()*d.length)}}else{alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")}}if(b.timeout){setTimeout((function(){a.innerfade.next(d,b,e,c)}),b.timeout)}}})(jQuery);function removeFilter(a){if(a.style.removeAttribute){a.style.removeAttribute("filter")}}(function(b,a){if(a!="undefined"&&typeof a.FadingSlideShow==="undefined"){a.FadingSlideShow=function(c,g){var f=this;var i;var j=function(m){var l=Math.max(0,i.photos.length-m.length);for(var k=0;k<l;k++){m.push({})}return _(m).chain().map(function(n,o){var p=i.photos[o]||{};n.credit=(p.credit)?p.credit:n.credit;n.url=(p.url)?p.url:n.url;if(i.options.width<=400&&i.advanced.abbreviatecredits){n.credit=e(n.credit)}return n}).first(i.advanced.limitjsonp||Number.MAX_VALUE).value()};var e=function(k){if(k){return k.replace(/\s+/g," ").replace(/ for The New York Times/i," for The NYT").replace(/\s*\/\s*The New York Times/i,"/The NYT").replace(/\s*\/\s*Associated Press/i,"/AP").replace("/Agence France-Presse "+String.fromCharCode(8212)+" Getty Images","/AFP-Getty").replace("/Getty Images","/Getty").replace("/Agence France-Presse","/AFP")}else{return""}};var h=function(){var l=this;i=b.extend(true,{parent:b(c),template:'<div class="nytmm_FadingSlideShow">{{#options.link}}<a href="{{options.link}}">{{/options.link}}<div class="nytmm_FadingSlideShow_items">{{#photos}}	<div class="nytmm_FadingSlideShow_item" style="width:100%">		<img src="{{url}}" alt="{{caption}}" style="width:100%"/>       {{#credit}}<div class="credit" style="font-size:9px">{{credit}}</div>{{/credit}}   </div>{{/photos}}</div>{{#options.link}}</a>{{/options.link}}</div>',options:{width:190,height:126,jsonp:undefined,link:undefined},photos:[],advanced:{delay:5,limitjsonp:0,abbreviatecredits:true,rendition:undefined,targetoverride:false}},g);if(i.photos.photo){i.photos=i.photos.photo}if(i.advanced.targetoverride){i.parent=b(i.advanced.targetoverride).empty()}if(!i.advanced.rendition){var k=i.options.width;if(k<=75){i.advanced.rendition="thumbStandard"}else{if(k<=150){i.advanced.rendition="thumbLarge"}else{if(k<=163){i.advanced.rendition="hpSmall"}else{if(k<=190){i.advanced.rendition="thumbWide"}else{if(k<=337){i.advanced.rendition="hpMedium"}else{if(k<=395){i.advanced.rendition="sfSpan"}else{if(k<=600){i.advanced.rendition="slide"}else{if(k<=1024){i.advanced.rendition="jumbo"}}}}}}}}}if(i.advanced.abbreviatecredits==="false"){i.advanced.abbreviatecredits=false}if(i.options.jsonp){b.getScoopSlideshowJsonp(i.options.jsonp,function(m){var n=b.slideshowJson2Array(m,{crop:i.advanced.rendition,caption:"Short"});i.photos=j(n);d()})}else{d()}};var d=function(){var k=b(Mustache.to_html(i.template,i)).appendTo(i.parent).find(".nytmm_FadingSlideShow_items").innerfade({speed:700,timeout:1000*i.advanced.delay,runningclass:"nytmm_innerfade",containerheight:i.options.height,children:".nytmm_FadingSlideShow_item"}).css({width:i.options.width+"px",height:i.options.height+"px"}).end()};h()};a.FlexType.addCallback("FadingSlideShow",function(d,c){new a.FadingSlideShow(d,c)})}})(jQuery,NYTD.NYTMM);