(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function aS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var hd={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function rS(){if(Wg)return zo;Wg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var qg;function sS(){return qg||(qg=1,hd.exports=rS()),hd.exports}var z=sS(),pd={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function oS(){if(Yg)return rt;Yg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function M(D,Q,be){this.props=D,this.context=Q,this.refs=E,this.updater=be||b}M.prototype.isReactComponent={},M.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function H(){}H.prototype=M.prototype;function B(D,Q,be){this.props=D,this.context=Q,this.refs=E,this.updater=be||b}var C=B.prototype=new H;C.constructor=B,w(C,M.prototype),C.isPureReactComponent=!0;var F=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(D,Q,be){var Ce=be.ref;return{$$typeof:s,type:D,key:Q,ref:Ce!==void 0?Ce:null,props:be}}function j(D,Q){return L(D.type,Q,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function $(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(be){return Q[be]})}var ge=/\/+/g;function pe(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?$(""+D.key):Q.toString(36)}function ee(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function I(D,Q,be,Ce,Ne){var ne=typeof D;(ne==="undefined"||ne==="boolean")&&(D=null);var Me=!1;if(D===null)Me=!0;else switch(ne){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(D.$$typeof){case s:case e:Me=!0;break;case _:return Me=D._init,I(Me(D._payload),Q,be,Ce,Ne)}}if(Me)return Ne=Ne(D),Me=Ce===""?"."+pe(D,0):Ce,F(Ne)?(be="",Me!=null&&(be=Me.replace(ge,"$&/")+"/"),I(Ne,Q,be,"",function(tt){return tt})):Ne!=null&&(V(Ne)&&(Ne=j(Ne,be+(Ne.key==null||D&&D.key===Ne.key?"":(""+Ne.key).replace(ge,"$&/")+"/")+Me)),Q.push(Ne)),1;Me=0;var Ee=Ce===""?".":Ce+":";if(F(D))for(var Be=0;Be<D.length;Be++)Ce=D[Be],ne=Ee+pe(Ce,Be),Me+=I(Ce,Q,be,ne,Ne);else if(Be=y(D),typeof Be=="function")for(D=Be.call(D),Be=0;!(Ce=D.next()).done;)Ce=Ce.value,ne=Ee+pe(Ce,Be++),Me+=I(Ce,Q,be,ne,Ne);else if(ne==="object"){if(typeof D.then=="function")return I(ee(D),Q,be,Ce,Ne);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Me}function G(D,Q,be){if(D==null)return D;var Ce=[],Ne=0;return I(D,Ce,"","",function(ne){return Q.call(be,ne,Ne++)}),Ce}function X(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(be){(D._status===0||D._status===-1)&&(D._status=1,D._result=be)},function(be){(D._status===0||D._status===-1)&&(D._status=2,D._result=be)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var le=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},_e={map:G,forEach:function(D,Q,be){G(D,function(){Q.apply(this,arguments)},be)},count:function(D){var Q=0;return G(D,function(){Q++}),Q},toArray:function(D){return G(D,function(Q){return Q})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return rt.Activity=x,rt.Children=_e,rt.Component=M,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=B,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,rt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return O.H.useMemoCache(D)}},rt.cache=function(D){return function(){return D.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(D,Q,be){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Ce=w({},D.props),Ne=D.key;if(Q!=null)for(ne in Q.key!==void 0&&(Ne=""+Q.key),Q)!T.call(Q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Q.ref===void 0||(Ce[ne]=Q[ne]);var ne=arguments.length-2;if(ne===1)Ce.children=be;else if(1<ne){for(var Me=Array(ne),Ee=0;Ee<ne;Ee++)Me[Ee]=arguments[Ee+2];Ce.children=Me}return L(D.type,Ne,Ce)},rt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},rt.createElement=function(D,Q,be){var Ce,Ne={},ne=null;if(Q!=null)for(Ce in Q.key!==void 0&&(ne=""+Q.key),Q)T.call(Q,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ne[Ce]=Q[Ce]);var Me=arguments.length-2;if(Me===1)Ne.children=be;else if(1<Me){for(var Ee=Array(Me),Be=0;Be<Me;Be++)Ee[Be]=arguments[Be+2];Ne.children=Ee}if(D&&D.defaultProps)for(Ce in Me=D.defaultProps,Me)Ne[Ce]===void 0&&(Ne[Ce]=Me[Ce]);return L(D,ne,Ne)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(D){return{$$typeof:p,render:D}},rt.isValidElement=V,rt.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:X}},rt.memo=function(D,Q){return{$$typeof:h,type:D,compare:Q===void 0?null:Q}},rt.startTransition=function(D){var Q=O.T,be={};O.T=be;try{var Ce=D(),Ne=O.S;Ne!==null&&Ne(be,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(N,le)}catch(ne){le(ne)}finally{Q!==null&&be.types!==null&&(Q.types=be.types),O.T=Q}},rt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},rt.use=function(D){return O.H.use(D)},rt.useActionState=function(D,Q,be){return O.H.useActionState(D,Q,be)},rt.useCallback=function(D,Q){return O.H.useCallback(D,Q)},rt.useContext=function(D){return O.H.useContext(D)},rt.useDebugValue=function(){},rt.useDeferredValue=function(D,Q){return O.H.useDeferredValue(D,Q)},rt.useEffect=function(D,Q){return O.H.useEffect(D,Q)},rt.useEffectEvent=function(D){return O.H.useEffectEvent(D)},rt.useId=function(){return O.H.useId()},rt.useImperativeHandle=function(D,Q,be){return O.H.useImperativeHandle(D,Q,be)},rt.useInsertionEffect=function(D,Q){return O.H.useInsertionEffect(D,Q)},rt.useLayoutEffect=function(D,Q){return O.H.useLayoutEffect(D,Q)},rt.useMemo=function(D,Q){return O.H.useMemo(D,Q)},rt.useOptimistic=function(D,Q){return O.H.useOptimistic(D,Q)},rt.useReducer=function(D,Q,be){return O.H.useReducer(D,Q,be)},rt.useRef=function(D){return O.H.useRef(D)},rt.useState=function(D){return O.H.useState(D)},rt.useSyncExternalStore=function(D,Q,be){return O.H.useSyncExternalStore(D,Q,be)},rt.useTransition=function(){return O.H.useTransition()},rt.version="19.2.0",rt}var Zg;function qh(){return Zg||(Zg=1,pd.exports=oS()),pd.exports}var P=qh();const lS=aS(P);var md={exports:{}},Bo={},gd={exports:{}},_d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function cS(){return jg||(jg=1,(function(s){function e(I,G){var X=I.length;I.push(G);e:for(;0<X;){var le=X-1>>>1,_e=I[le];if(0<l(_e,G))I[le]=G,I[X]=_e,X=le;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var G=I[0],X=I.pop();if(X!==G){I[0]=X;e:for(var le=0,_e=I.length,D=_e>>>1;le<D;){var Q=2*(le+1)-1,be=I[Q],Ce=Q+1,Ne=I[Ce];if(0>l(be,X))Ce<_e&&0>l(Ne,be)?(I[le]=Ne,I[Ce]=X,le=Ce):(I[le]=be,I[Q]=X,le=Q);else if(Ce<_e&&0>l(Ne,X))I[le]=Ne,I[Ce]=X,le=Ce;else break e}}return G}function l(I,G){var X=I.sortIndex-G.sortIndex;return X!==0?X:I.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,x=null,g=3,y=!1,b=!1,w=!1,E=!1,M=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var G=i(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=I)r(h),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(h)}}function F(I){if(w=!1,C(I),!b)if(i(m)!==null)b=!0,N||(N=!0,$());else{var G=i(h);G!==null&&ee(F,G.startTime-I)}}var N=!1,O=-1,T=5,L=-1;function j(){return E?!0:!(s.unstable_now()-L<T)}function V(){if(E=!1,N){var I=s.unstable_now();L=I;var G=!0;try{e:{b=!1,w&&(w=!1,H(O),O=-1),y=!0;var X=g;try{t:{for(C(I),x=i(m);x!==null&&!(x.expirationTime>I&&j());){var le=x.callback;if(typeof le=="function"){x.callback=null,g=x.priorityLevel;var _e=le(x.expirationTime<=I);if(I=s.unstable_now(),typeof _e=="function"){x.callback=_e,C(I),G=!0;break t}x===i(m)&&r(m),C(I)}else r(m);x=i(m)}if(x!==null)G=!0;else{var D=i(h);D!==null&&ee(F,D.startTime-I),G=!1}}break e}finally{x=null,g=X,y=!1}G=void 0}}finally{G?$():N=!1}}}var $;if(typeof B=="function")$=function(){B(V)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,pe=ge.port2;ge.port1.onmessage=V,$=function(){pe.postMessage(null)}}else $=function(){M(V,0)};function ee(I,G){O=M(function(){I(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(I){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var X=g;g=G;try{return I()}finally{g=X}},s.unstable_requestPaint=function(){E=!0},s.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=g;g=I;try{return G()}finally{g=X}},s.unstable_scheduleCallback=function(I,G,X){var le=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?le+X:le):X=le,I){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=X+_e,I={id:_++,callback:G,priorityLevel:I,startTime:X,expirationTime:_e,sortIndex:-1},X>le?(I.sortIndex=X,e(h,I),i(m)===null&&I===i(h)&&(w?(H(O),O=-1):w=!0,ee(F,X-le))):(I.sortIndex=_e,e(m,I),b||y||(b=!0,N||(N=!0,$()))),I},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(I){var G=g;return function(){var X=g;g=G;try{return I.apply(this,arguments)}finally{g=X}}}})(_d)),_d}var Kg;function uS(){return Kg||(Kg=1,gd.exports=cS()),gd.exports}var vd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function fS(){if(Qg)return Nn;Qg=1;var s=qh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:_}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},Nn.flushSync=function(m){var h=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=_,r.d.f()}},Nn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,x=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Nn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,x=p(_,h.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,h){return m(h)},Nn.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.0",Nn}var Jg;function dS(){if(Jg)return vd.exports;Jg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vd.exports=fS(),vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function hS(){if($g)return Bo;$g=1;var s=uS(),e=qh(),i=dS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),B=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ge?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case M:return"Profiler";case E:return"StrictMode";case F:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case B:return t.displayName||"Context";case H:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ee=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},le=[],_e=-1;function D(t){return{current:t}}function Q(t){0>_e||(t.current=le[_e],le[_e]=null,_e--)}function be(t,n){_e++,le[_e]=t.current,t.current=n}var Ce=D(null),Ne=D(null),ne=D(null),Me=D(null);function Ee(t,n){switch(be(ne,n),be(Ne,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=pg(n),t=mg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ce),be(Ce,t)}function Be(){Q(Ce),Q(Ne),Q(ne)}function tt(t){t.memoizedState!==null&&be(Me,t);var n=Ce.current,a=mg(n,t.type);n!==a&&(be(Ne,t),be(Ce,a))}function je(t){Ne.current===t&&(Q(Ce),Q(Ne)),Me.current===t&&(Q(Me),Oo._currentValue=X)}var Gt,ot;function ht(t){if(Gt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Gt=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gt+t+ot}var pt=!1;function ft(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(de){var ue=de}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(de){ue=de}t.call(ye.prototype)}}else{try{throw Error()}catch(de){ue=de}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(de){if(de&&ue&&typeof de.stack=="string")return[de.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var k=v.split(`
`),ae=R.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ae.length)for(o=k.length-1,u=ae.length-1;1<=o&&0<=u&&k[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ae[u]){var ve=`
`+k[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ht(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return ht("Activity");default:return""}}function qt(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Kt=Object.prototype.hasOwnProperty,an=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,rn=s.unstable_shouldYield,Z=s.unstable_requestPaint,Dt=s.unstable_now,vt=s.unstable_getCurrentPriorityLevel,U=s.unstable_ImmediatePriority,S=s.unstable_UserBlockingPriority,q=s.unstable_NormalPriority,te=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Ae=s.log,Ue=s.unstable_setDisableYieldValue,he=null,me=null;function Re(t){if(typeof Ae=="function"&&Ue(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(he,t)}catch{}}var He=Math.clz32?Math.clz32:Qe,Pe=Math.log,Le=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Pe(t)/Le|0)|0}var Je=256,at=262144,Y=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=we(o):(v&=R,v!==0?u=we(v):a||(a=R&~t,a!==0&&(u=we(a))))):(R=o&~f,R!==0?u=we(R):v!==0?u=we(v):a||(a=o&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $t(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,k=t.expirationTimes,ae=t.hiddenUpdates;for(a=v&~a;0<a;){var ve=31-He(a),ye=1<<ve;R[ve]=0,k[ve]=-1;var ue=ae[ve];if(ue!==null)for(ae[ve]=null,ve=0;ve<ue.length;ve++){var de=ue[ve];de!==null&&(de.lane&=-536870913)}a&=~ye}o!==0&&Pt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Pt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-He(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Qn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-He(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:Ys(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ys(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function js(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:zg(t.type))}function Gr(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Fi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Fi,Tn="__reactProps$"+Fi,Vn="__reactContainer$"+Fi,cr="__reactEvents$"+Fi,ol="__reactListeners$"+Fi,ll="__reactHandles$"+Fi,ur="__reactResources$"+Fi,Ra="__reactMarker$"+Fi;function Ca(t){delete t[dn],delete t[Tn],delete t[cr],delete t[ol],delete t[ll]}function Ki(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=yg(t);t!==null;){if(a=t[dn])return a;t=yg(t)}return n}t=a,a=t.parentNode}return null}function Qi(t){if(t=t[dn]||t[Vn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function wa(t){var n=t[ur];return n||(n=t[ur]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Ra]=!0}var cl=new Set,A={};function K(t,n){ce(t,n),ce(t+"Capture",n)}function ce(t,n){for(A[t]=n,t=0;t<n.length;t++)cl.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},Fe={};function Ge(t){return Kt.call(Fe,t)?!0:Kt.call(se,t)?!1:re.test(t)?Fe[t]=!0:(se[t]=!0,!1)}function Oe(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Yt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function It(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,f,v,R){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?mt(t,v,$e(n)):a!=null?mt(t,v,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Un(t,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),At(t)}function mt(t,n,a){n==="number"&&Yt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function $n(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function yi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ee(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&tn(t,f,n[f])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Da=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dr(t){return Da.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ji(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kr=null,Xr=null;function hp(t){var n=Qi(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+It(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(r(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&en(o)}break e;case"textarea":$n(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var fu=!1;function pp(t,n,a){if(fu)return t(n,a);fu=!0;try{var o=t(n);return o}finally{if(fu=!1,(kr!==null||Xr!==null)&&(Kl(),kr&&(n=kr,t=Xr,Xr=kr=null,hp(n),t)))for(n=0;n<t.length;n++)hp(t[n])}}function Ks(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if($i)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){du=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{du=!1}var Ua=null,hu=null,ul=null;function mp(){if(ul)return ul;var t,n=hu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ul=u.slice(t,1<o?1-o:void 0)}function fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function gp(){return!1}function Gn(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:gp,this.isPropagationStopped=gp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Gn(hr),Js=x({},hr,{view:0,detail:0}),nx=Gn(Js),pu,mu,$s,pl=x({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(pu=t.screenX-$s.screenX,mu=t.screenY-$s.screenY):mu=pu=0,$s=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),_p=Gn(pl),ix=x({},pl,{dataTransfer:0}),ax=Gn(ix),rx=x({},Js,{relatedTarget:0}),gu=Gn(rx),sx=x({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Gn(sx),lx=x({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cx=Gn(lx),ux=x({},hr,{data:0}),vp=Gn(ux),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=hx[t])?!!n[t]:!1}function _u(){return px}var mx=x({},Js,{key:function(t){if(t.key){var n=fx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gx=Gn(mx),_x=x({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Gn(_x),vx=x({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),xx=Gn(vx),Sx=x({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=Gn(Sx),yx=x({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ex=Gn(yx),bx=x({},hr,{newState:0,oldState:0}),Tx=Gn(bx),Ax=[9,13,27,32],vu=$i&&"CompositionEvent"in window,eo=null;$i&&"documentMode"in document&&(eo=document.documentMode);var Rx=$i&&"TextEvent"in window&&!eo,Sp=$i&&(!vu||eo&&8<eo&&11>=eo),Mp=" ",yp=!1;function Ep(t,n){switch(t){case"keyup":return Ax.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function Cx(t,n){switch(t){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(yp=!0,Mp);case"textInput":return t=n.data,t===Mp&&yp?null:t;default:return null}}function wx(t,n){if(Wr)return t==="compositionend"||!vu&&Ep(t,n)?(t=mp(),ul=hu=Ua=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sp&&n.locale!=="ko"?null:n.data;default:return null}}var Dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Dx[t.type]:n==="textarea"}function Ap(t,n,a,o){kr?Xr?Xr.push(o):Xr=[o]:kr=o,n=ic(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var to=null,no=null;function Ux(t){lg(t,0)}function ml(t){var n=fr(t);if(en(n))return t}function Rp(t,n){if(t==="change")return n}var Cp=!1;if($i){var xu;if($i){var Su="oninput"in document;if(!Su){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Su=typeof wp.oninput=="function"}xu=Su}else xu=!1;Cp=xu&&(!document.documentMode||9<document.documentMode)}function Dp(){to&&(to.detachEvent("onpropertychange",Up),no=to=null)}function Up(t){if(t.propertyName==="value"&&ml(no)){var n=[];Ap(n,no,t,uu(t)),pp(Ux,n)}}function Nx(t,n,a){t==="focusin"?(Dp(),to=n,no=a,to.attachEvent("onpropertychange",Up)):t==="focusout"&&Dp()}function Lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(no)}function Ox(t,n){if(t==="click")return ml(n)}function Px(t,n){if(t==="input"||t==="change")return ml(n)}function Fx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Fx;function io(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Kt.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function Np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,n){var a=Np(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Np(a)}}function Op(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Op(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Yt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Yt(t.document)}return n}function Mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ix=$i&&"documentMode"in document&&11>=document.documentMode,qr=null,yu=null,ao=null,Eu=!1;function Fp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||qr==null||qr!==Yt(o)||(o=qr,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=ic(yu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=qr)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Yr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},bu={},Ip={};$i&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function mr(t){if(bu[t])return bu[t];if(!Yr[t])return t;var n=Yr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ip)return bu[t]=n[a];return t}var zp=mr("animationend"),Bp=mr("animationiteration"),Hp=mr("animationstart"),zx=mr("transitionrun"),Bx=mr("transitionstart"),Hx=mr("transitioncancel"),Vp=mr("transitionend"),Gp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function bi(t,n){Gp.set(t,n),K(n,[t])}var gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],Zr=0,Au=0;function _l(){for(var t=Zr,n=Au=Zr=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&kp(a,u,f)}}function vl(t,n,a,o){fi[Zr++]=t,fi[Zr++]=n,fi[Zr++]=a,fi[Zr++]=o,Au|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ru(t,n,a,o){return vl(t,n,a,o),xl(t)}function gr(t,n){return vl(t,null,null,n),xl(t)}function kp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-He(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function xl(t){if(50<Ro)throw Ro=0,If=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var jr={};function Vx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,o){return new Vx(t,n,a,o)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Xp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Sl(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")Cu(t)&&(v=1);else if(typeof t=="string")v=q1(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ni(31,a,n,u),t.elementType=L,t.lanes=f,t;case w:return _r(a.children,u,f,n);case E:v=8,u|=24;break;case M:return t=ni(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case F:return t=ni(13,a,n,u),t.elementType=F,t.lanes=f,t;case N:return t=ni(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:v=10;break e;case H:v=9;break e;case C:v=11;break e;case O:v=14;break e;case T:v=16,o=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ni(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function _r(t,n,a,o){return t=ni(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Wp(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function Du(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var qp=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=qp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qt(n)},qp.set(t,n),n)}return{value:t,source:n,stack:qt(n)}}var Kr=[],Qr=0,Ml=null,ro=0,hi=[],pi=0,Na=null,zi=1,Bi="";function ta(t,n){Kr[Qr++]=ro,Kr[Qr++]=Ml,Ml=t,ro=n}function Yp(t,n,a){hi[pi++]=zi,hi[pi++]=Bi,hi[pi++]=Na,Na=t;var o=zi;t=Bi;var u=32-He(o)-1;o&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,zi=1<<32-He(n)+u|a<<u|o,Bi=f+t}else zi=1<<f|a<<u|o,Bi=t}function Uu(t){t.return!==null&&(ta(t,1),Yp(t,1,0))}function Nu(t){for(;t===Ml;)Ml=Kr[--Qr],Kr[Qr]=null,ro=Kr[--Qr],Kr[Qr]=null;for(;t===Na;)Na=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null,zi=hi[--pi],hi[pi]=null}function Zp(t,n){hi[pi++]=zi,hi[pi++]=Bi,hi[pi++]=Na,zi=n.id,Bi=n.overflow,Na=t}var An=null,Qt=null,yt=!1,La=null,mi=!1,Lu=Error(r(519));function Oa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(di(n,t)),Lu}function jp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[Tn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)_t(wo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),yi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||dg(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Oa(t,!0)}function Kp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:An=An.return}}function Jr(t){if(t!==An)return!1;if(!yt)return Kp(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jf(t.type,t.memoizedProps)),a=!a),a&&Qt&&Oa(t),Kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=Mg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=Mg(t)}else n===27?(n=Qt,Za(t.type)?(t=id,id=null,Qt=t):Qt=n):Qt=An?_i(t.stateNode.nextSibling):null;return!0}function vr(){Qt=An=null,yt=!1}function Ou(){var t=La;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),La=null),t}function so(t){La===null?La=[t]:La.push(t)}var Pu=D(null),xr=null,na=null;function Pa(t,n,a){be(Pu,n._currentValue),n._currentValue=a}function ia(t){t._currentValue=Pu.current,Q(Pu)}function Fu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Iu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var k=0;k<n.length;k++)if(R.context===n[k]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Fu(f.return,a,t),o||(v=null);break e}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Fu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function $r(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var R=u.type;ti(u.pendingProps.value,v.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&Iu(n,t,a,o),n.flags|=262144}function yl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){xr=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Qp(xr,t)}function El(t,n){return xr===null&&Sr(t),Qp(t,n)}function Qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(r(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var Gx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},kx=s.unstable_scheduleCallback,Xx=s.unstable_NormalPriority,pn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Gx,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&kx(Xx,function(){t.controller.abort()})}var lo=null,Bu=0,es=0,ts=null;function Wx(t,n){if(lo===null){var a=lo=[];Bu=0,es=kf(),ts={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bu++,n.then(Jp,Jp),n}function Jp(){if(--Bu===0&&lo!==null){ts!==null&&(ts.status="fulfilled");var t=lo;lo=null,es=0,ts=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function qx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var $p=I.S;I.S=function(t,n){F0=Dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Wx(t,n),$p!==null&&$p(t,n)};var Mr=D(null);function Hu(){var t=Mr.current;return t!==null?t:Zt.pooledCache}function bl(t,n){n===null?be(Mr,Mr.current):be(Mr,n.pool)}function em(){var t=Hu();return t===null?null:{parent:pn._currentValue,pool:t}}var ns=Error(r(460)),Vu=Error(r(474)),Tl=Error(r(542)),Al={then:function(){}};function tm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,am(t),t}throw Er=n,ns}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,ns):a}}var Er=null;function im(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function am(t){if(t===ns||t===Tl)throw Error(r(483))}var is=null,co=0;function Rl(t){var n=co;return co+=1,is===null&&(is=[]),nm(is,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Cl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){function n(J,W){if(t){var ie=J.deletions;ie===null?(J.deletions=[W],J.flags|=16):ie.push(W)}}function a(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=ea(J,W),J.index=0,J.sibling=null,J}function f(J,W,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<W?(J.flags|=67108866,W):ie):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function v(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,ie,Se){return W===null||W.tag!==6?(W=wu(ie,J.mode,Se),W.return=J,W):(W=u(W,ie),W.return=J,W)}function k(J,W,ie,Se){var et=ie.type;return et===w?ve(J,W,ie.props.children,Se,ie.key):W!==null&&(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&yr(et)===W.type)?(W=u(W,ie.props),uo(W,ie),W.return=J,W):(W=Sl(ie.type,ie.key,ie.props,null,J.mode,Se),uo(W,ie),W.return=J,W)}function ae(J,W,ie,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Du(ie,J.mode,Se),W.return=J,W):(W=u(W,ie.children||[]),W.return=J,W)}function ve(J,W,ie,Se,et){return W===null||W.tag!==7?(W=_r(ie,J.mode,Se,et),W.return=J,W):(W=u(W,ie),W.return=J,W)}function ye(J,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=wu(""+W,J.mode,ie),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return ie=Sl(W.type,W.key,W.props,null,J.mode,ie),uo(ie,W),ie.return=J,ie;case b:return W=Du(W,J.mode,ie),W.return=J,W;case T:return W=yr(W),ye(J,W,ie)}if(ee(W)||$(W))return W=_r(W,J.mode,ie,null),W.return=J,W;if(typeof W.then=="function")return ye(J,Rl(W),ie);if(W.$$typeof===B)return ye(J,El(J,W),ie);Cl(J,W)}return null}function ue(J,W,ie,Se){var et=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return et!==null?null:R(J,W,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:return ie.key===et?k(J,W,ie,Se):null;case b:return ie.key===et?ae(J,W,ie,Se):null;case T:return ie=yr(ie),ue(J,W,ie,Se)}if(ee(ie)||$(ie))return et!==null?null:ve(J,W,ie,Se,null);if(typeof ie.then=="function")return ue(J,W,Rl(ie),Se);if(ie.$$typeof===B)return ue(J,W,El(J,ie),Se);Cl(J,ie)}return null}function de(J,W,ie,Se,et){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ie)||null,R(W,J,""+Se,et);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case y:return J=J.get(Se.key===null?ie:Se.key)||null,k(W,J,Se,et);case b:return J=J.get(Se.key===null?ie:Se.key)||null,ae(W,J,Se,et);case T:return Se=yr(Se),de(J,W,ie,Se,et)}if(ee(Se)||$(Se))return J=J.get(ie)||null,ve(W,J,Se,et,null);if(typeof Se.then=="function")return de(J,W,ie,Rl(Se),et);if(Se.$$typeof===B)return de(J,W,ie,El(W,Se),et);Cl(W,Se)}return null}function qe(J,W,ie,Se){for(var et=null,Rt=null,Ze=W,ut=W=0,St=null;Ze!==null&&ut<ie.length;ut++){Ze.index>ut?(St=Ze,Ze=null):St=Ze.sibling;var Ct=ue(J,Ze,ie[ut],Se);if(Ct===null){Ze===null&&(Ze=St);break}t&&Ze&&Ct.alternate===null&&n(J,Ze),W=f(Ct,W,ut),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct,Ze=St}if(ut===ie.length)return a(J,Ze),yt&&ta(J,ut),et;if(Ze===null){for(;ut<ie.length;ut++)Ze=ye(J,ie[ut],Se),Ze!==null&&(W=f(Ze,W,ut),Rt===null?et=Ze:Rt.sibling=Ze,Rt=Ze);return yt&&ta(J,ut),et}for(Ze=o(Ze);ut<ie.length;ut++)St=de(Ze,J,ut,ie[ut],Se),St!==null&&(t&&St.alternate!==null&&Ze.delete(St.key===null?ut:St.key),W=f(St,W,ut),Rt===null?et=St:Rt.sibling=St,Rt=St);return t&&Ze.forEach(function($a){return n(J,$a)}),yt&&ta(J,ut),et}function nt(J,W,ie,Se){if(ie==null)throw Error(r(151));for(var et=null,Rt=null,Ze=W,ut=W=0,St=null,Ct=ie.next();Ze!==null&&!Ct.done;ut++,Ct=ie.next()){Ze.index>ut?(St=Ze,Ze=null):St=Ze.sibling;var $a=ue(J,Ze,Ct.value,Se);if($a===null){Ze===null&&(Ze=St);break}t&&Ze&&$a.alternate===null&&n(J,Ze),W=f($a,W,ut),Rt===null?et=$a:Rt.sibling=$a,Rt=$a,Ze=St}if(Ct.done)return a(J,Ze),yt&&ta(J,ut),et;if(Ze===null){for(;!Ct.done;ut++,Ct=ie.next())Ct=ye(J,Ct.value,Se),Ct!==null&&(W=f(Ct,W,ut),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return yt&&ta(J,ut),et}for(Ze=o(Ze);!Ct.done;ut++,Ct=ie.next())Ct=de(Ze,J,ut,Ct.value,Se),Ct!==null&&(t&&Ct.alternate!==null&&Ze.delete(Ct.key===null?ut:Ct.key),W=f(Ct,W,ut),Rt===null?et=Ct:Rt.sibling=Ct,Rt=Ct);return t&&Ze.forEach(function(iS){return n(J,iS)}),yt&&ta(J,ut),et}function Wt(J,W,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===w&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:e:{for(var et=ie.key;W!==null;){if(W.key===et){if(et=ie.type,et===w){if(W.tag===7){a(J,W.sibling),Se=u(W,ie.props.children),Se.return=J,J=Se;break e}}else if(W.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===T&&yr(et)===W.type){a(J,W.sibling),Se=u(W,ie.props),uo(Se,ie),Se.return=J,J=Se;break e}a(J,W);break}else n(J,W);W=W.sibling}ie.type===w?(Se=_r(ie.props.children,J.mode,Se,ie.key),Se.return=J,J=Se):(Se=Sl(ie.type,ie.key,ie.props,null,J.mode,Se),uo(Se,ie),Se.return=J,J=Se)}return v(J);case b:e:{for(et=ie.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(J,W.sibling),Se=u(W,ie.children||[]),Se.return=J,J=Se;break e}else{a(J,W);break}else n(J,W);W=W.sibling}Se=Du(ie,J.mode,Se),Se.return=J,J=Se}return v(J);case T:return ie=yr(ie),Wt(J,W,ie,Se)}if(ee(ie))return qe(J,W,ie,Se);if($(ie)){if(et=$(ie),typeof et!="function")throw Error(r(150));return ie=et.call(ie),nt(J,W,ie,Se)}if(typeof ie.then=="function")return Wt(J,W,Rl(ie),Se);if(ie.$$typeof===B)return Wt(J,W,El(J,ie),Se);Cl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(a(J,W.sibling),Se=u(W,ie),Se.return=J,J=Se):(a(J,W),Se=wu(ie,J.mode,Se),Se.return=J,J=Se),v(J)):a(J,W)}return function(J,W,ie,Se){try{co=0;var et=Wt(J,W,ie,Se);return is=null,et}catch(Ze){if(Ze===ns||Ze===Tl)throw Ze;var Rt=ni(29,Ze,null,J.mode);return Rt.lanes=Se,Rt.return=J,Rt}finally{}}}var br=rm(!0),sm=rm(!1),Fa=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(t),kp(t,null,a),n}return vl(t,o,n,a),xl(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}function Xu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function ho(){if(Wu){var t=ts;if(t!==null)throw t}}function po(t,n,a,o){Wu=!1;var u=t.updateQueue;Fa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var k=R,ae=k.next;k.next=null,v===null?f=ae:v.next=ae,v=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==v&&(R===null?ve.firstBaseUpdate=ae:R.next=ae,ve.lastBaseUpdate=k))}if(f!==null){var ye=u.baseState;v=0,ve=ae=k=null,R=f;do{var ue=R.lane&-536870913,de=ue!==R.lane;if(de?(xt&ue)===ue:(o&ue)===ue){ue!==0&&ue===es&&(Wu=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,nt=R;ue=n;var Wt=a;switch(nt.tag){case 1:if(qe=nt.payload,typeof qe=="function"){ye=qe.call(Wt,ye,ue);break e}ye=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=nt.payload,ue=typeof qe=="function"?qe.call(Wt,ye,ue):qe,ue==null)break e;ye=x({},ye,ue);break e;case 2:Fa=!0}}ue=R.callback,ue!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ue]:de.push(ue))}else de={lane:ue,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(ae=ve=de,k=ye):ve=ve.next=de,v|=ue;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;de=R,R=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);ve===null&&(k=ye),u.baseState=k,u.firstBaseUpdate=ae,u.lastBaseUpdate=ve,f===null&&(u.shared.lanes=0),ka|=v,t.lanes=v,t.memoizedState=ye}}function om(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)om(a[t],n)}var as=D(null),wl=D(0);function cm(t,n){t=da,be(wl,t),be(as,n),da=t|n.baseLanes}function qu(){be(wl,da),be(as,as.current)}function Yu(){da=wl.current,Q(as),Q(wl)}var ii=D(null),gi=null;function Ba(t){var n=t.alternate;be(cn,cn.current&1),be(ii,t),gi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(gi=t)}function Zu(t){be(cn,cn.current),be(ii,t),gi===null&&(gi=t)}function um(t){t.tag===22?(be(cn,cn.current),be(ii,t),gi===null&&(gi=t)):Ha()}function Ha(){be(cn,cn.current),be(ii,ii.current)}function ai(t){Q(ii),gi===t&&(gi=null),Q(cn)}var cn=D(0);function Dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||td(a)||nd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,ct=null,kt=null,mn=null,Ul=!1,rs=!1,Tr=!1,Nl=0,mo=0,ss=null,Yx=0;function sn(){throw Error(r(321))}function ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function Ku(t,n,a,o,u,f){return aa=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Ym:df,Tr=!1,f=a(o,u),Tr=!1,rs&&(f=dm(n,a,o,u)),fm(t),f}function fm(t){I.H=vo;var n=kt!==null&&kt.next!==null;if(aa=0,mn=kt=ct=null,Ul=!1,mo=0,ss=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&yl(t)&&(gn=!0))}function dm(t,n,a,o){ct=t;var u=0;do{if(rs&&(ss=null),mo=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,mn=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Zm,f=n(a,o)}while(rs);return f}function Zx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Qu(){var t=Nl!==0;return Nl=0,t}function Ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(Ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ul=!1}aa=0,mn=kt=ct=null,rs=!1,mo=Nl=0,ss=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ct.memoizedState=mn=t:mn=mn.next=t,mn}function un(){if(kt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=mn===null?ct.memoizedState:mn.next;if(n!==null)mn=n,kt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},mn===null?ct.memoizedState=mn=t:mn=mn.next=t}return mn}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,ss===null&&(ss=[]),t=nm(ss,t,n),n=ct,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Ym:df),t}function Ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===B)return Rn(t)}throw Error(r(438,String(t)))}function ef(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=j;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=un();return tf(n,kt,t)}function tf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=v=null,k=null,ae=n,ve=!1;do{var ye=ae.lane&-536870913;if(ye!==ae.lane?(xt&ye)===ye:(aa&ye)===ye){var ue=ae.revertLane;if(ue===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),ye===es&&(ve=!0);else if((aa&ue)===ue){ae=ae.next,ue===es&&(ve=!0);continue}else ye={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},k===null?(R=k=ye,v=f):k=k.next=ye,ct.lanes|=ue,ka|=ue;ye=ae.action,Tr&&a(f,ye),f=ae.hasEagerState?ae.eagerState:a(f,ye)}else ue={lane:ye,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},k===null?(R=k=ue,v=f):k=k.next=ue,ct.lanes|=ye,ka|=ye;ae=ae.next}while(ae!==null&&ae!==n);if(k===null?v=f:k.next=R,!ti(f,t.memoizedState)&&(gn=!0,ve&&(a=ts,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=k,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function nf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ti(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function hm(t,n,a){var o=ct,u=un(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ti((kt||u).memoizedState,a);if(v&&(u.memoizedState=a,gn=!0),u=u.queue,sf(gm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,os(9,{destroy:void 0},mm.bind(null,o,u,a,n),null),Zt===null)throw Error(r(349));f||(aa&127)!==0||pm(o,n,a)}return a}function pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Ll(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mm(t,n,a,o){n.value=a,n.getSnapshot=o,_m(n)&&vm(t)}function gm(t,n,a){return a(function(){_m(n)&&vm(t)})}function _m(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function vm(t){var n=gr(t,2);n!==null&&Yn(n,t,2)}function af(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),Tr){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function xm(t,n,a,o){return t.baseState=a,tf(t,kt,typeof o=="function"?o:ra)}function jx(t,n,a,o,u){if(zl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=I.T,v={};I.T=v;try{var R=a(u,o),k=I.S;k!==null&&k(v,R),Mm(t,n,R)}catch(ae){rf(t,n,ae)}finally{f!==null&&v.types!==null&&(f.types=v.types),I.T=f}}else try{f=a(u,o),Mm(t,n,f)}catch(ae){rf(t,n,ae)}}function Mm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ym(t,n,o)},function(o){return rf(t,n,o)}):ym(t,n,a)}function ym(t,n,a){n.status="fulfilled",n.value=a,Em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sm(t,a)))}function rf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}t.action=null}function Em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bm(t,n){return n}function Tm(t,n){if(yt){var a=Zt.formState;if(a!==null){e:{var o=ct;if(yt){if(Qt){t:{for(var u=Qt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qt=_i(u.nextSibling),o=u.data==="F!";break e}}Oa(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bm,lastRenderedState:n},a.queue=o,a=Xm.bind(null,ct,o),o.dispatch=a,o=af(!1),f=ff.bind(null,ct,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=jx.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Am(t){var n=un();return Rm(n,kt,t)}function Rm(t,n,a){if(n=tf(t,n,bm)[0],t=Pl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(v){throw v===ns?Tl:v}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,os(9,{destroy:void 0},Kx.bind(null,u,a),null)),[o,f,t]}function Kx(t,n){t.action=n}function Cm(t){var n=un(),a=kt;if(a!==null)return Rm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Ll(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function wm(){return un().memoizedState}function Fl(t,n,a,o){var u=In();ct.flags|=t,u.memoizedState=os(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;kt!==null&&o!==null&&ju(o,kt.memoizedState.deps)?u.memoizedState=os(n,f,a,o):(ct.flags|=t,u.memoizedState=os(1|n,f,a,o))}function Dm(t,n){Fl(8390656,8,t,n)}function sf(t,n){Il(2048,8,t,n)}function Qx(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Ll(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Um(t){var n=un().memoizedState;return Qx({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Nm(t,n){return Il(4,2,t,n)}function Lm(t,n){return Il(4,4,t,n)}function Om(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pm(t,n,a){a=a!=null?a.concat([t]):null,Il(4,4,Om.bind(null,n,t),a)}function of(){}function Fm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Im(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=t(),Tr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function lf(t,n,a){return a===void 0||(aa&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=z0(),ct.lanes|=t,ka|=t,a)}function zm(t,n,a,o){return ti(a,n)?a:as.current!==null?(t=lf(t,a,o),ti(t,n)||(gn=!0),t):(aa&42)===0||(aa&1073741824)!==0&&(xt&261930)===0?(gn=!0,t.memoizedState=a):(t=z0(),ct.lanes|=t,ka|=t,n)}function Bm(t,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=I.T,R={};I.T=R,ff(t,!1,n,a);try{var k=u(),ae=I.S;if(ae!==null&&ae(R,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ve=qx(k,o);_o(t,n,ve,oi(t))}else _o(t,n,o,oi(t))}catch(ye){_o(t,n,{then:function(){},status:"rejected",reason:ye},oi())}finally{G.p=f,v!==null&&R.types!==null&&(v.types=R.types),I.T=v}}function Jx(){}function cf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Hm(t).queue;Bm(t,u,n,X,a===null?Jx:function(){return Vm(t),a(o)})}function Hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vm(t){var n=Hm(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},oi())}function uf(){return Rn(Oo)}function Gm(){return un().memoizedState}function km(){return un().memoizedState}function $x(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Ia(a);var o=za(n,t,a);o!==null&&(Yn(o,n,a),fo(o,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function e1(t,n,a){var o=oi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(t)?Wm(n,a):(a=Ru(t,n,a,o),a!==null&&(Yn(a,t,o),qm(a,n,o)))}function Xm(t,n,a){var o=oi();_o(t,n,a,o)}function _o(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(t))Wm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,ti(R,v))return vl(t,n,u,0),Zt===null&&_l(),!1}catch{}finally{}if(a=Ru(t,n,u,o),a!==null)return Yn(a,t,o),qm(a,n,o),!0}return!1}function ff(t,n,a,o){if(o={lane:2,revertLane:kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(t)){if(n)throw Error(r(479))}else n=Ru(t,a,o,2),n!==null&&Yn(n,t,2)}function zl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Wm(t,n){rs=Ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function qm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}var vo={readContext:Rn,use:Ol,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};vo.useEffectEvent=sn;var Ym={readContext:Rn,use:Ol,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,Om.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(Tr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(Tr){Re(!0);try{a(n)}finally{Re(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=e1.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=Xm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:of,useDeferredValue:function(t,n){var a=In();return lf(a,t,n)},useTransition:function(){var t=af(!1);return t=Bm.bind(null,ct,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=In();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Zt===null)throw Error(r(349));(xt&127)!==0||pm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Dm(gm.bind(null,o,f,t),[t]),o.flags|=2048,os(9,{destroy:void 0},mm.bind(null,o,f,a,n),null),a},useId:function(){var t=In(),n=Zt.identifierPrefix;if(yt){var a=Bi,o=zi;a=(o&~(1<<32-He(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return In().memoizedState=$x.bind(null,ct)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},df={readContext:Rn,use:Ol,useCallback:Fm,useContext:Rn,useEffect:sf,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:Im,useReducer:Pl,useRef:wm,useState:function(){return Pl(ra)},useDebugValue:of,useDeferredValue:function(t,n){var a=un();return zm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Pl(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:uf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=un();return xm(a,kt,t,n)},useMemoCache:ef,useCacheRefresh:km};df.useEffectEvent=Um;var Zm={readContext:Rn,use:Ol,useCallback:Fm,useContext:Rn,useEffect:sf,useImperativeHandle:Pm,useInsertionEffect:Nm,useLayoutEffect:Lm,useMemo:Im,useReducer:nf,useRef:wm,useState:function(){return nf(ra)},useDebugValue:of,useDeferredValue:function(t,n){var a=un();return kt===null?lf(a,t,n):zm(a,kt.memoizedState,t,n)},useTransition:function(){var t=nf(ra)[0],n=un().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:uf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=un();return kt!==null?xm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:km};Zm.useEffectEvent=Um;function hf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=oi(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Yn(n,t,o),fo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=oi(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Yn(n,t,o),fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Yn(n,t,a),fo(n,t,a))}};function jm(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,f):!0}function Km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&pf.enqueueReplaceState(n,n.state,null)}function Ar(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Qm(t){gl(t)}function Jm(t){console.error(t)}function $m(t){gl(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function e0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function t0(t){return t=Ia(t),t.tag=3,t}function n0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){e0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){e0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function t1(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Ql():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Hf(t,o,u)),!1;case 22:return a.flags|=65536,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Hf(t,o,u)),!1}throw Error(r(435,a.tag))}return Hf(t,o,u),Ql(),!1}if(yt)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lu&&(t=Error(r(422),{cause:o}),so(di(t,a)))):(o!==Lu&&(n=Error(r(423),{cause:o}),so(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=mf(t.stateNode,o,u),Xu(t,u),on!==4&&(on=2)),!1;var f=Error(r(520),{cause:o});if(f=di(f,a),Ao===null?Ao=[f]:Ao.push(f),on!==4&&(on=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=mf(a.stateNode,o,t),Xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xa===null||!Xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=t0(u),n0(u,t,a,o),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(r(461)),gn=!1;function Cn(t,n,a,o){n.child=t===null?sm(n,null,a,o):br(n,t.child,a,o)}function i0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Sr(n),o=Ku(t,n,a,v,f,u),R=Qu(),t!==null&&!gn?(Ju(t,n,u),sa(t,n,u)):(yt&&R&&Uu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function a0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,r0(t,n,f,o,u)):(t=Sl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!bf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(v,o)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=ea(f,o),t.ref=n.ref,t.return=n,n.child=t}function r0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(io(f,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=f,bf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return _f(t,n,a,o,u)}function s0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return o0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bl(n,f!==null?f.cachePool:null),f!==null?cm(n,f):qu(),um(n);else return o=n.lanes=536870912,o0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(bl(n,f.cachePool),cm(n,f),Ha(),n.memoizedState=null):(t!==null&&bl(n,null),qu(),Ha());return Cn(t,n,u,a),n.child}function xo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function o0(t,n,a,o,u){var f=Hu();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&bl(n,null),qu(),um(n),t!==null&&$r(t,n,o,!0),n.childLanes=u,null}function Hl(t,n){return n=Gl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function l0(t,n,a){return br(n,t.child,null,a),t=Hl(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function n1(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Hl(n,o),n.lanes=536870912,xo(null,t);if(Zu(n),(t=Qt)?(t=Sg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return Hl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Zu(n),u)if(n.flags&256)n.flags&=-257,n=l0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||$r(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=Zt,o!==null&&(v=Jn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,gr(t,v),Yn(o,t,v),gf;Ql(),n=l0(t,n,a)}else t=f.treeContext,Qt=_i(v.nextSibling),An=n,yt=!0,La=null,mi=!1,t!==null&&Zp(n,t),n=Hl(n,o),n.flags|=4096;return n}return t=ea(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Vl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _f(t,n,a,o,u){return Sr(n),a=Ku(t,n,a,o,void 0,u),o=Qu(),t!==null&&!gn?(Ju(t,n,u),sa(t,n,u)):(yt&&o&&Uu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function c0(t,n,a,o,u,f){return Sr(n),n.updateQueue=null,a=dm(n,o,a,u),fm(t),o=Qu(),t!==null&&!gn?(Ju(t,n,f),sa(t,n,f)):(yt&&o&&Uu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function u0(t,n,a,o,u){if(Sr(n),n.stateNode===null){var f=jr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Gu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):jr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(hf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&pf.enqueueReplaceState(f,f.state,null),po(n,o,f,u),ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,k=Ar(a,R);f.props=k;var ae=f.context,ve=a.contextType;v=jr,typeof ve=="object"&&ve!==null&&(v=Rn(ve));var ye=a.getDerivedStateFromProps;ve=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ae!==v)&&Km(n,f,o,v),Fa=!1;var ue=n.memoizedState;f.state=ue,po(n,o,f,u),ho(),ae=n.memoizedState,R||ue!==ae||Fa?(typeof ye=="function"&&(hf(n,a,ye,o),ae=n.memoizedState),(k=Fa||jm(n,a,k,o,ue,ae,v))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=v,o=k):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ku(t,n),v=n.memoizedProps,ve=Ar(a,v),f.props=ve,ye=n.pendingProps,ue=f.context,ae=a.contextType,k=jr,typeof ae=="object"&&ae!==null&&(k=Rn(ae)),R=a.getDerivedStateFromProps,(ae=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ye||ue!==k)&&Km(n,f,o,k),Fa=!1,ue=n.memoizedState,f.state=ue,po(n,o,f,u),ho();var de=n.memoizedState;v!==ye||ue!==de||Fa||t!==null&&t.dependencies!==null&&yl(t.dependencies)?(typeof R=="function"&&(hf(n,a,R,o),de=n.memoizedState),(ve=Fa||jm(n,a,ve,o,ue,de,k)||t!==null&&t.dependencies!==null&&yl(t.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,de,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,de,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=de),f.props=o,f.state=de,f.context=k,o=ve):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Vl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=sa(t,n,u),t}function f0(t,n,a,o){return vr(),n.flags|=256,Cn(t,n,a,o),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:em()}}function Sf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function d0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(u?Ba(n):Ha(),(t=Qt)?(t=Sg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Wp(t),a.return=n,n.child=a,An=n,Qt=null)):t=null,t===null)throw Oa(n);return nd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ha(),u=n.mode,R=Gl({mode:"hidden",children:R},u),o=_r(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=xf(a),o.childLanes=Sf(t,v,a),n.memoizedState=vf,xo(null,o)):(Ba(n),Mf(n,R))}var k=t.memoizedState;if(k!==null&&(R=k.dehydrated,R!==null)){if(f)n.flags&256?(Ba(n),n.flags&=-257,n=yf(t,n,a)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,n=null):(Ha(),R=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),R=_r(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=xf(a),o.childLanes=Sf(t,v,a),n.memoizedState=vf,n=xo(null,o));else if(Ba(n),nd(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var ae=v.dgst;v=ae,o=Error(r(419)),o.stack="",o.digest=v,so({value:o,source:null,stack:null}),n=yf(t,n,a)}else if(gn||$r(t,n,a,!1),v=(a&t.childLanes)!==0,gn||v){if(v=Zt,v!==null&&(o=Jn(v,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,gr(t,o),Yn(v,t,o),gf;td(R)||Ql(),n=yf(t,n,a)}else td(R)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,Qt=_i(R.nextSibling),An=n,yt=!0,La=null,mi=!1,t!==null&&Zp(n,t),n=Mf(n,o.children),n.flags|=4096);return n}return u?(Ha(),R=o.fallback,u=n.mode,k=t.child,ae=k.sibling,o=ea(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ae!==null?R=ea(ae,R):(R=_r(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,xo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=xf(a):(u=R.cachePool,u!==null?(k=pn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=em(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Sf(t,v,a),n.memoizedState=vf,xo(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Mf(t,n){return n=Gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Gl(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function yf(t,n,a){return br(n,t.child,null,a),t=Mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function h0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Fu(t.return,n,a)}function Ef(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function p0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=cn.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,be(cn,v),Cn(t,n,o,a),o=yt?ro:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,a,n);else if(t.tag===19)h0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Dl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ef(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Dl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ef(n,!0,a,null,f,o);break;case"together":Ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ea(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ea(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&yl(t)))}function i1(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Pa(n,pn,t.memoizedState.cache),vr();break;case 27:case 5:tt(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?d0(t,n,a):(Ba(n),t=sa(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return p0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(cn,cn.current),o)break;return null;case 22:return n.lanes=0,s0(t,n,a,n.pendingProps);case 24:Pa(n,pn,t.memoizedState.cache)}return sa(t,n,a)}function m0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!bf(t,a)&&(n.flags&128)===0)return gn=!1,i1(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,yt&&(n.flags&1048576)!==0&&Yp(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")Cu(t)?(o=Ar(t,o),n.tag=1,n=u0(null,n,t,o,a)):(n.tag=0,n=_f(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=i0(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=a0(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ar(o,n.pendingProps),u0(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ku(t,n),po(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Pa(n,pn,o),o!==f.cache&&Iu(n,[pn],a,!0),ho(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=f0(t,n,o,a);break e}else if(o!==u){u=di(Error(r(424)),n),so(u),n=f0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=_i(t.firstChild),An=n,yt=!0,La=null,mi=!0,a=sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vr(),o===u){n=sa(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Vl(t,n),t===null?(a=Ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=ac(ne.current).createElement(a),o[dn]=n,o[Tn]=t,wn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=Ag(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&yt&&(o=n.stateNode=Eg(n.type,n.pendingProps,ne.current),An=n,mi=!0,u=Qt,Za(n.type)?(id=u,Qt=_i(o.firstChild)):Qt=u),Cn(t,n,n.pendingProps.children,a),Vl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((u=o=Qt)&&(o=L1(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,An=n,Qt=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Oa(n)),tt(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,Jf(u,f)?o=null:v!==null&&Jf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,Zx,null,null,a),Oo._currentValue=u),Vl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Qt)&&(a=O1(a,n.pendingProps,mi),a!==null?(n.stateNode=a,An=n,Qt=null,t=!0):t=!1),t||Oa(n)),null;case 13:return d0(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return i0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Sr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return a0(t,n,n.type,n.pendingProps,a);case 15:return r0(t,n,n.type,n.pendingProps,a);case 19:return p0(t,n,a);case 31:return n1(t,n,a);case 22:return s0(t,n,a,n.pendingProps);case 24:return Sr(n),o=Rn(pn),t===null?(u=Hu(),u===null&&(u=Zt,f=zu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Gu(n),Pa(n,pn,u)):((t.lanes&a)!==0&&(ku(t,n),po(n,null,null,a),ho()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,pn,o)):(o=f.cache,Pa(n,pn,o),o!==u.cache&&Iu(n,[pn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function oa(t){t.flags|=4}function Tf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(G0())t.flags|=8192;else throw Er=Al,Vu}else t.flags&=-16777217}function g0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ug(n))if(G0())t.flags|=8192;else throw Er=Al,Vu}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,fs|=n)}function So(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function a1(t,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(pn),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Jr(n)?oa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),Jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(oa(n),f!==null?(Jt(n),g0(n,f)):(Jt(n),Tf(n,u,null,o,a))):f?f!==t.memoizedState?(oa(n),Jt(n),g0(n,f)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&oa(n),Jt(n),Tf(n,u,t,o,a)),null;case 27:if(je(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}t=Ce.current,Jr(n)?jp(n):(t=Eg(u,o,a),n.stateNode=t,oa(n))}return Jt(n),null;case 5:if(je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(f=Ce.current,Jr(n))jp(n);else{var v=ac(ne.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[dn]=n,f[Tn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&oa(n)}}return Jt(n),Tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,Jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||dg(t.nodeValue,a)),t||Oa(n,!0)}else t=ac(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Jr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[dn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),Jt(n),null);case 4:return Be(),t===null&&Yf(n.stateNode.containerInfo),Jt(n),null;case 10:return ia(n.type),Jt(n),null;case 19:if(Q(cn),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)So(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Dl(t),f!==null){for(n.flags|=128,So(o,!1),t=f.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Xp(a,t),a=a.sibling;return be(cn,cn.current&1|2),yt&&ta(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Dt()>Zl&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=Dl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!yt)return Jt(n),null}else 2*Dt()-o.renderingStartTime>Zl&&a!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Dt(),t.sibling=null,a=cn.current,be(cn,u?a&1|2:a&1),yt&&ta(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return ai(n),Yu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(Mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(pn),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function r1(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ia(pn),Be(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return je(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(cn),null;case 4:return Be(),null;case 10:return ia(n.type),null;case 22:case 23:return ai(n),Yu(),t!==null&&Q(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ia(pn),null;case 25:return null;default:return null}}function _0(t,n){switch(Nu(n),n.tag){case 3:ia(pn),Be();break;case 26:case 27:case 5:je(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Q(cn);break;case 10:ia(n.type);break;case 22:case 23:ai(n),Yu(),t!==null&&Q(Mr);break;case 24:ia(pn)}}function Mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){Ht(n,n.return,R)}}function Va(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var k=a,ae=R;try{ae()}catch(ve){Ht(u,k,ve)}}}o=o.next}while(o!==f)}}catch(ve){Ht(n,n.return,ve)}}function v0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lm(n,a)}catch(o){Ht(t,t.return,o)}}}function x0(t,n,a){a.props=Ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(t,n,o)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ht(t,n,u)}}function Hi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function S0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Af(t,n,a){try{var o=t.stateNode;R1(o,t.type,a,n),o[Tn]=n}catch(u){Ht(t,t.return,u)}}function M0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Rf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Cf(t,n,a),t=t.sibling;t!==null;)Cf(t,n,a),t=t.sibling}function Xl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function y0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[dn]=t,n[Tn]=a}catch(f){Ht(t,t.return,f)}}var la=!1,_n=!1,wf=!1,E0=typeof WeakSet=="function"?WeakSet:Set,En=null;function s1(t,n){if(t=t.containerInfo,Kf=fc,t=Pp(t),Mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,R=-1,k=-1,ae=0,ve=0,ye=t,ue=null;t:for(;;){for(var de;ye!==a||u!==0&&ye.nodeType!==3||(R=v+u),ye!==f||o!==0&&ye.nodeType!==3||(k=v+o),ye.nodeType===3&&(v+=ye.nodeValue.length),(de=ye.firstChild)!==null;)ue=ye,ye=de;for(;;){if(ye===t)break t;if(ue===a&&++ae===u&&(R=v),ue===f&&++ve===o&&(k=v),(de=ye.nextSibling)!==null)break;ye=ue,ue=ye.parentNode}ye=de}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:t,selectionRange:a},fc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qe=Ar(a.type,u);t=o.getSnapshotBeforeUpdate(qe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Ht(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ed(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function b0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(t,a),o&4&&Mo(5,a);break;case 1:if(ua(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ht(a,a.return,v)}else{var u=Ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ht(a,a.return,v)}}o&64&&v0(a),o&512&&yo(a,a.return);break;case 3:if(ua(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lm(t,n)}catch(v){Ht(a,a.return,v)}}break;case 27:n===null&&o&4&&y0(a);case 26:case 5:ua(t,a),n===null&&o&4&&S0(a),o&512&&yo(a,a.return);break;case 12:ua(t,a);break;case 31:ua(t,a),o&4&&R0(t,a);break;case 13:ua(t,a),o&4&&C0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=m1.bind(null,a),P1(t,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||_n,u=la;var f=_n;la=o,(_n=n)&&!f?fa(t,a,(a.subtreeFlags&8772)!==0):ua(t,a),la=u,_n=f}break;case 30:break;default:ua(t,a)}}function T0(t){var n=t.alternate;n!==null&&(t.alternate=null,T0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ca(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,kn=!1;function ca(t,n,a){for(a=a.child;a!==null;)A0(t,n,a),a=a.sibling}function A0(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(he,a)}catch{}switch(a.tag){case 26:_n||Hi(a,n),ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||Hi(a,n);var o=nn,u=kn;Za(a.type)&&(nn=a.stateNode,kn=!1),ca(t,n,a),Uo(a.stateNode),nn=o,kn=u;break;case 5:_n||Hi(a,n);case 6:if(o=nn,u=kn,nn=null,ca(t,n,a),nn=o,kn=u,nn!==null)if(kn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{nn.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:nn!==null&&(kn?(t=nn,vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),xs(t)):vg(nn,a.stateNode));break;case 4:o=nn,u=kn,nn=a.stateNode.containerInfo,kn=!0,ca(t,n,a),nn=o,kn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),_n||Va(4,a,n),ca(t,n,a);break;case 1:_n||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&x0(a,n,o)),ca(t,n,a);break;case 21:ca(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,ca(t,n,a),_n=o;break;default:ca(t,n,a)}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{xs(t)}catch(a){Ht(n,n.return,a)}}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{xs(t)}catch(a){Ht(n,n.return,a)}}function o1(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new E0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new E0),n;default:throw Error(r(435,t.tag))}}function Wl(t,n){var a=o1(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=g1.bind(null,t,o);o.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,R=v;e:for(;R!==null;){switch(R.tag){case 27:if(Za(R.type)){nn=R.stateNode,kn=!1;break e}break;case 5:nn=R.stateNode,kn=!1;break e;case 3:case 4:nn=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if(nn===null)throw Error(r(160));A0(f,v,u),nn=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,t),n=n.sibling}var Ti=null;function w0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Va(3,t,t.return),Mo(3,t),Va(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(_n||a===null||Hi(a,a.return)),o&64&&la&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Xn(n,t),Wn(t),o&512&&(_n||a===null||Hi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ra]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[dn]=t,hn(f),o=f;break e;case"link":var v=wg("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=wg("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[dn]=t,hn(f),o=f}t.stateNode=o}else Dg(u,t.type,t.stateNode);else t.stateNode=Cg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Dg(u,t.type,t.stateNode):Cg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(_n||a===null||Hi(a,a.return)),a!==null&&o&4&&Af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(_n||a===null||Hi(a,a.return)),t.flags&32){u=t.stateNode;try{ei(u,"")}catch(qe){Ht(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Af(t,u,a!==null?a.memoizedProps:u)),o&1024&&(wf=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Ht(t,t.return,qe)}}break;case 3:if(oc=null,u=Ti,Ti=rc(n.containerInfo),Xn(n,t),Ti=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(n.containerInfo)}catch(qe){Ht(t,t.return,qe)}wf&&(wf=!1,D0(t));break;case 4:o=Ti,Ti=rc(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ti=o;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yl=Dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ae=la,ve=_n;if(la=ae||u,_n=ve||k,Xn(n,t),_n=ve,la=ae,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||la||_n||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(f=k.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=k.stateNode;var ye=k.memoizedProps.style,ue=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;R.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(qe){Ht(k,k.return,qe)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(qe){Ht(k,k.return,qe)}}}else if(n.tag===18){if(a===null){k=n;try{var de=k.stateNode;u?xg(de,!0):xg(k.stateNode,!1)}catch(qe){Ht(k,k.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wl(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(M0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Rf(t);Xl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ei(v,""),a.flags&=-33);var R=Rf(t);Xl(t,R,v);break;case 3:case 4:var k=a.stateNode.containerInfo,ae=Rf(t);Cf(t,ae,k);break;default:throw Error(r(161))}}catch(ve){Ht(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ua(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)b0(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Rr(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&x0(n,n.return,a),Rr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Hi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Mo(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){Ht(o,o.return,ae)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)om(k[u],R)}catch(ae){Ht(o,o.return,ae)}}a&&v&64&&v0(f),yo(f,f.return);break;case 27:y0(f);case 26:case 5:fa(u,f,a),a&&o===null&&v&4&&S0(f),yo(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&v&4&&R0(u,f);break;case 13:fa(u,f,a),a&&v&4&&C0(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),yo(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function Uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(t,n,a,o),n=n.sibling}function U0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&Mo(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Ht(n,n.return,k)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):Eo(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,ls(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(v,n);break;case 24:Ai(t,n,a,o),u&2048&&Uf(n.alternate,n);break;default:Ai(t,n,a,o)}}function ls(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,R=a,k=o,ae=v.flags;switch(v.tag){case 0:case 11:case 15:ls(f,v,R,k,u),Mo(8,v);break;case 23:break;case 22:var ve=v.stateNode;v.memoizedState!==null?ve._visibility&2?ls(f,v,R,k,u):Eo(f,v):(ve._visibility|=2,ls(f,v,R,k,u)),u&&ae&2048&&Df(v.alternate,v);break;case 24:ls(f,v,R,k,u),u&&ae&2048&&Uf(v.alternate,v);break;default:ls(f,v,R,k,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Df(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Uf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function cs(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)N0(t,n,a),t=t.sibling}function N0(t,n,a){switch(t.tag){case 26:cs(t,n,a),t.flags&bo&&t.memoizedState!==null&&Y1(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:cs(t,n,a);break;case 3:case 4:var o=Ti;Ti=rc(t.stateNode.containerInfo),cs(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,cs(t,n,a),bo=o):cs(t,n,a));break;default:cs(t,n,a)}}function L0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,P0(o,t)}L0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O0(t),t=t.sibling}function O0(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&Va(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):To(t);break;default:To(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,P0(o,t)}L0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function P0(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var u=o.sibling,f=o.return;if(T0(o),o===a){En=null;break e}if(u!==null){u.return=f,En=u;break e}En=f}}}var l1={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(pn).controller.signal}},c1=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Zt=null,gt=null,xt=0,Bt=0,ri=null,Ga=!1,us=!1,Nf=!1,da=0,on=0,ka=0,Cr=0,Lf=0,si=0,fs=0,Ao=null,qn=null,Of=!1,Yl=0,F0=0,Zl=1/0,jl=null,Xa=null,Sn=0,Wa=null,ds=null,ha=0,Pf=0,Ff=null,I0=null,Ro=0,If=null;function oi(){return(Ut&2)!==0&&xt!==0?xt&-xt:I.T!==null?kf():js()}function z0(){if(si===0)if((xt&536870912)===0||yt){var t=at;at<<=1,(at&3932160)===0&&(at=262144),si=t}else si=536870912;return t=ii.current,t!==null&&(t.flags|=32),si}function Yn(t,n,a){(t===Zt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(hs(t,0),qa(t,xt,si,!1)),ke(t,a),((Ut&2)===0||t!==Zt)&&(t===Zt&&((Ut&2)===0&&(Cr|=a),on===4&&qa(t,xt,si,!1)),Vi(t))}function B0(t,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=o?d1(t,n):Bf(t,n,!0),f=o;do{if(u===0){us&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!u1(a)){u=Bf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=t;u=Ao;var k=R.current.memoizedState.isDehydrated;if(k&&(hs(R,v).flags|=256),v=Bf(R,v,!1),v!==2){if(Nf&&!k){R.errorRecoveryDisabledLanes|=f,Cr|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){hs(t,0),qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,si,!Ga);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Yl+300-Dt(),10<u)){if(qa(o,n,si,!Ga),xe(o,0,!0)!==0)break e;ha=n,o.timeoutHandle=gg(H0.bind(null,o,a,qn,jl,Of,n,si,Cr,fs,Ga,f,"Throttled",-0,0),u);break e}H0(o,a,qn,jl,Of,n,si,Cr,fs,Ga,f,null,-0,0)}}break}while(!0);Vi(t)}function H0(t,n,a,o,u,f,v,R,k,ae,ve,ye,ue,de){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},N0(n,f,ye);var qe=(f&62914560)===f?Yl-Dt():(f&4194048)===f?F0-Dt():0;if(qe=Z1(ye,qe),qe!==null){ha=f,t.cancelPendingCommit=qe(Z0.bind(null,t,n,f,a,o,u,v,R,k,ve,ye,null,ue,de)),qa(t,f,v,!ae);return}}Z0(t,n,f,a,o,u,v,R,k)}function u1(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~Lf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-He(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Pt(t,a,n)}function Kl(){return(Ut&6)===0?(Co(0),!1):!0}function zf(){if(gt!==null){if(Bt===0)var t=gt.return;else t=gt,na=xr=null,$u(t),is=null,co=0,t=gt;for(;t!==null;)_0(t.alternate,t),t=t.return;gt=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,D1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ha=0,zf(),Zt=t,gt=a=ea(t.current,null),xt=n,Bt=0,ri=null,Ga=!1,us=De(t,n),Nf=!1,fs=si=Lf=Cr=ka=on=0,qn=Ao=null,Of=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-He(o),f=1<<u;n|=t[u],o&=~f}return da=n,_l(),a}function V0(t,n){ct=null,I.H=vo,n===ns||n===Tl?(n=im(),Bt=3):n===Vu?(n=im(),Bt=4):Bt=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,gt===null&&(on=1,Bl(t,di(n,t.current)))}function G0(){var t=ii.current;return t===null?!0:(xt&4194048)===xt?gi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===gi:!1}function k0(){var t=I.H;return I.H=vo,t===null?vo:t}function X0(){var t=I.A;return I.A=l1,t}function Ql(){on=4,Ga||(xt&4194048)!==xt&&ii.current!==null||(us=!0),(ka&134217727)===0&&(Cr&134217727)===0||Zt===null||qa(Zt,xt,si,!1)}function Bf(t,n,a){var o=Ut;Ut|=2;var u=k0(),f=X0();(Zt!==t||xt!==n)&&(jl=null,hs(t,n)),n=!1;var v=on;e:do try{if(Bt!==0&&gt!==null){var R=gt,k=ri;switch(Bt){case 8:zf(),v=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var ae=Bt;if(Bt=0,ri=null,ps(t,R,k,ae),a&&us){v=0;break e}break;default:ae=Bt,Bt=0,ri=null,ps(t,R,k,ae)}}f1(),v=on;break}catch(ve){V0(t,ve)}while(!0);return n&&t.shellSuspendCounter++,na=xr=null,Ut=o,I.H=u,I.A=f,gt===null&&(Zt=null,xt=0,_l()),v}function f1(){for(;gt!==null;)W0(gt)}function d1(t,n){var a=Ut;Ut|=2;var o=k0(),u=X0();Zt!==t||xt!==n?(jl=null,Zl=Dt()+500,hs(t,n)):us=De(t,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=ri;t:switch(Bt){case 1:Bt=0,ri=null,ps(t,n,f,1);break;case 2:case 9:if(tm(f)){Bt=0,ri=null,q0(n);break}n=function(){Bt!==2&&Bt!==9||Zt!==t||(Bt=7),Vi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:tm(f)?(Bt=0,ri=null,q0(n)):(Bt=0,ri=null,ps(t,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var R=gt;if(v?Ug(v):R.stateNode.complete){Bt=0,ri=null;var k=R.sibling;if(k!==null)gt=k;else{var ae=R.return;ae!==null?(gt=ae,Jl(ae)):gt=null}break t}}Bt=0,ri=null,ps(t,n,f,5);break;case 6:Bt=0,ri=null,ps(t,n,f,6);break;case 8:zf(),on=6;break e;default:throw Error(r(462))}}h1();break}catch(ve){V0(t,ve)}while(!0);return na=xr=null,I.H=o,I.A=u,Ut=a,gt!==null?0:(Zt=null,xt=0,_l(),on)}function h1(){for(;gt!==null&&!rn();)W0(gt)}function W0(t){var n=m0(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?Jl(t):gt=n}function q0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=c0(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=c0(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:$u(n);default:_0(a,n),n=gt=Xp(n,da),n=m0(a,n,da)}t.memoizedProps=t.pendingProps,n===null?Jl(t):gt=n}function ps(t,n,a,o){na=xr=null,$u(n),is=null,co=0;var u=n.return;try{if(t1(t,u,n,a,xt)){on=1,Bl(t,di(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;on=1,Bl(t,di(a,t.current)),gt=null;return}n.flags&32768?(yt||o===1?t=!0:us||(xt&536870912)!==0?t=!1:(Ga=t=!0,(o===2||o===9||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Y0(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){Y0(n,Ga);return}t=n.return;var a=a1(n.alternate,n,da);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);on===0&&(on=5)}function Y0(t,n){do{var a=r1(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);on=6,gt=null}function Z0(t,n,a,o,u,f,v,R,k){t.cancelPendingCommit=null;do $l();while(Sn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Au,$t(t,a,f,v,R,k),t===Zt&&(gt=Zt=null,xt=0),ds=n,Wa=t,ha=a,Pf=f,Ff=u,I0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_1(q,function(){return $0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=G.p,G.p=2,v=Ut,Ut|=4;try{s1(t,n,a)}finally{Ut=v,G.p=u,I.T=o}}Sn=1,j0(),K0(),Q0()}}function j0(){if(Sn===1){Sn=0;var t=Wa,n=ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Ut;Ut|=4;try{w0(n,t);var f=Qf,v=Pp(t.containerInfo),R=f.focusedElem,k=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Op(R.ownerDocument.documentElement,R)){if(k!==null&&Mu(R)){var ae=k.start,ve=k.end;if(ve===void 0&&(ve=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(ve,R.value.length);else{var ye=R.ownerDocument||document,ue=ye&&ye.defaultView||window;if(ue.getSelection){var de=ue.getSelection(),qe=R.textContent.length,nt=Math.min(k.start,qe),Wt=k.end===void 0?nt:Math.min(k.end,qe);!de.extend&&nt>Wt&&(v=Wt,Wt=nt,nt=v);var J=Lp(R,nt),W=Lp(R,Wt);if(J&&W&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var ie=ye.createRange();ie.setStart(J.node,J.offset),de.removeAllRanges(),nt>Wt?(de.addRange(ie),de.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),de.addRange(ie))}}}}for(ye=[],de=R;de=de.parentNode;)de.nodeType===1&&ye.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ye.length;R++){var Se=ye[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}fc=!!Kf,Qf=Kf=null}finally{Ut=u,G.p=o,I.T=a}}t.current=n,Sn=2}}function K0(){if(Sn===2){Sn=0;var t=Wa,n=ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Ut;Ut|=4;try{b0(t,n.alternate,n)}finally{Ut=u,G.p=o,I.T=a}}Sn=3}}function Q0(){if(Sn===4||Sn===3){Sn=0,Z();var t=Wa,n=ds,a=ha,o=I0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,ds=Wa=null,J0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Zs(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(he,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=G.p,G.p=2,I.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{I.T=n,G.p=u}}(ha&3)!==0&&$l(),Vi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===If?Ro++:(Ro=0,If=t):Ro=0,Co(0)}}function J0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function $l(){return j0(),K0(),Q0(),$0()}function $0(){if(Sn!==5)return!1;var t=Wa,n=Pf;Pf=0;var a=Zs(ha),o=I.T,u=G.p;try{G.p=32>a?32:a,I.T=null,a=Ff,Ff=null;var f=Wa,v=ha;if(Sn=0,ds=Wa=null,ha=0,(Ut&6)!==0)throw Error(r(331));var R=Ut;if(Ut|=4,O0(f.current),U0(f,f.current,v,a),Ut=R,Co(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(he,f)}catch{}return!0}finally{G.p=u,I.T=o,J0(t,n)}}function eg(t,n,a){n=di(a,n),n=mf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(ke(t,2),Vi(t))}function Ht(t,n,a){if(t.tag===3)eg(t,t,a);else for(;n!==null;){if(n.tag===3){eg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=di(a,t),a=t0(2),o=za(n,a,2),o!==null&&(n0(a,o,n,t),ke(o,2),Vi(o));break}}n=n.return}}function Hf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new c1;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=p1.bind(null,t,n,a),n.then(t,t))}function p1(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Zt===t&&(xt&a)===a&&(on===4||on===3&&(xt&62914560)===xt&&300>Dt()-Yl?(Ut&2)===0&&hs(t,0):Lf|=a,fs===xt&&(fs=0)),Vi(t)}function tg(t,n){n===0&&(n=Te()),t=gr(t,n),t!==null&&(ke(t,n),Vi(t))}function m1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),tg(t,a)}function g1(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),tg(t,a)}function _1(t,n){return an(t,n)}var ec=null,ms=null,Vf=!1,tc=!1,Gf=!1,Ya=0;function Vi(t){t!==ms&&t.next===null&&(ms===null?ec=ms=t:ms=ms.next=t),tc=!0,Vf||(Vf=!0,x1())}function Co(t,n){if(!Gf&&tc){Gf=!0;do for(var a=!1,o=ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-He(42|t)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,rg(o,f))}else f=xt,f=xe(o,o===Zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||De(o,f)||(a=!0,rg(o,f));o=o.next}while(a);Gf=!1}}function v1(){ng()}function ng(){tc=Vf=!1;var t=0;Ya!==0&&w1()&&(t=Ya);for(var n=Dt(),a=null,o=ec;o!==null;){var u=o.next,f=ig(o,n);f===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(ms=a)):(a=o,(t!==0||(f&3)!==0)&&(tc=!0)),o=u}Sn!==0&&Sn!==5||Co(t),Ya!==0&&(Ya=0)}function ig(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-He(f),R=1<<v,k=u[v];k===-1?((R&a)===0||(R&o)!==0)&&(u[v]=ze(R,n)):k<=n&&(t.expiredLanes|=R),f&=~R}if(n=Zt,a=xt,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Zs(a)){case 2:case 8:a=S;break;case 32:a=q;break;case 268435456:a=fe;break;default:a=q}return o=ag.bind(null,t),a=an(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function ag(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var o=xt;return o=xe(t,t===Zt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(B0(t,o,n),ig(t,Dt()),t.callbackNode!=null&&t.callbackNode===a?ag.bind(null,t):null)}function rg(t,n){if($l())return null;B0(t,n,!0)}function x1(){U1(function(){(Ut&6)!==0?an(U,v1):ng()})}function kf(){if(Ya===0){var t=es;t===0&&(t=Je,Je<<=1,(Je&261888)===0&&(Je=256)),Ya=t}return Ya}function sg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dr(""+t)}function og(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function S1(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=sg((u[Tn]||null).action),v=o.submitter;v&&(n=(n=v[Tn]||null)?sg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new hl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var k=v?og(u,v):new FormData(u);cf(a,{pending:!0,data:k,method:u.method,action:f},null,k)}}else typeof f=="function"&&(R.preventDefault(),k=v?og(u,v):new FormData(u),cf(a,{pending:!0,data:k,method:u.method,action:f},f,k))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],M1=Wf.toLowerCase(),y1=Wf[0].toUpperCase()+Wf.slice(1);bi(M1,"on"+y1)}bi(zp,"onAnimationEnd"),bi(Bp,"onAnimationIteration"),bi(Hp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(zx,"onTransitionRun"),bi(Bx,"onTransitionStart"),bi(Hx,"onTransitionCancel"),bi(Vp,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],k=R.instance,ae=R.currentTarget;if(R=R.listener,k!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(ve){gl(ve)}u.currentTarget=null,f=k}else for(v=0;v<o.length;v++){if(R=o[v],k=R.instance,ae=R.currentTarget,R=R.listener,k!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ae;try{f(u)}catch(ve){gl(ve)}u.currentTarget=null,f=k}}}}function _t(t,n){var a=n[cr];a===void 0&&(a=n[cr]=new Set);var o=t+"__bubble";a.has(o)||(cg(n,t,2,!1),a.add(o))}function qf(t,n,a){var o=0;n&&(o|=4),cg(a,t,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[nc]){t[nc]=!0,cl.forEach(function(a){a!=="selectionchange"&&(E1.has(a)||qf(a,!1,t),qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,qf("selectionchange",!1,n))}}function cg(t,n,a,o){switch(zg(n)){case 2:var u=Q1;break;case 8:u=J1;break;default:u=ld}a=u.bind(null,n,a,t),u=void 0,!du||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Zf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Ki(R),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){o=f=v;continue e}R=R.parentNode}}o=o.return}pp(function(){var ae=f,ve=uu(a),ye=[];e:{var ue=Gp.get(t);if(ue!==void 0){var de=hl,qe=t;switch(t){case"keypress":if(fl(a)===0)break e;case"keydown":case"keyup":de=gx;break;case"focusin":qe="focus",de=gu;break;case"focusout":qe="blur",de=gu;break;case"beforeblur":case"afterblur":de=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=xx;break;case zp:case Bp:case Hp:de=ox;break;case Vp:de=Mx;break;case"scroll":case"scrollend":de=nx;break;case"wheel":de=Ex;break;case"copy":case"cut":case"paste":de=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=xp;break;case"toggle":case"beforetoggle":de=Tx}var nt=(n&4)!==0,Wt=!nt&&(t==="scroll"||t==="scrollend"),J=nt?ue!==null?ue+"Capture":null:ue;nt=[];for(var W=ae,ie;W!==null;){var Se=W;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||J===null||(Se=Ks(W,J),Se!=null&&nt.push(Do(W,Se,ie))),Wt)break;W=W.return}0<nt.length&&(ue=new de(ue,qe,null,a,ve),ye.push({event:ue,listeners:nt}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ue&&a!==cu&&(qe=a.relatedTarget||a.fromElement)&&(Ki(qe)||qe[Vn]))break e;if((de||ue)&&(ue=ve.window===ve?ve:(ue=ve.ownerDocument)?ue.defaultView||ue.parentWindow:window,de?(qe=a.relatedTarget||a.toElement,de=ae,qe=qe?Ki(qe):null,qe!==null&&(Wt=c(qe),nt=qe.tag,qe!==Wt||nt!==5&&nt!==27&&nt!==6)&&(qe=null)):(de=null,qe=ae),de!==qe)){if(nt=_p,Se="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(nt=xp,Se="onPointerLeave",J="onPointerEnter",W="pointer"),Wt=de==null?ue:fr(de),ie=qe==null?ue:fr(qe),ue=new nt(Se,W+"leave",de,a,ve),ue.target=Wt,ue.relatedTarget=ie,Se=null,Ki(ve)===ae&&(nt=new nt(J,W+"enter",qe,a,ve),nt.target=ie,nt.relatedTarget=Wt,Se=nt),Wt=Se,de&&qe)t:{for(nt=b1,J=de,W=qe,ie=0,Se=J;Se;Se=nt(Se))ie++;Se=0;for(var et=W;et;et=nt(et))Se++;for(;0<ie-Se;)J=nt(J),ie--;for(;0<Se-ie;)W=nt(W),Se--;for(;ie--;){if(J===W||W!==null&&J===W.alternate){nt=J;break t}J=nt(J),W=nt(W)}nt=null}else nt=null;de!==null&&ug(ye,ue,de,nt,!1),qe!==null&&Wt!==null&&ug(ye,Wt,qe,nt,!0)}}e:{if(ue=ae?fr(ae):window,de=ue.nodeName&&ue.nodeName.toLowerCase(),de==="select"||de==="input"&&ue.type==="file")var Rt=Rp;else if(Tp(ue))if(Cp)Rt=Px;else{Rt=Lx;var Ze=Nx}else de=ue.nodeName,!de||de.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?ae&&Lt(ae.elementType)&&(Rt=Rp):Rt=Ox;if(Rt&&(Rt=Rt(t,ae))){Ap(ye,Rt,a,ve);break e}Ze&&Ze(t,ue,ae),t==="focusout"&&ae&&ue.type==="number"&&ae.memoizedProps.value!=null&&mt(ue,"number",ue.value)}switch(Ze=ae?fr(ae):window,t){case"focusin":(Tp(Ze)||Ze.contentEditable==="true")&&(qr=Ze,yu=ae,ao=null);break;case"focusout":ao=yu=qr=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Fp(ye,a,ve);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":Fp(ye,a,ve)}var ut;if(vu)e:{switch(t){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Wr?Ep(t,a)&&(St="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Sp&&a.locale!=="ko"&&(Wr||St!=="onCompositionStart"?St==="onCompositionEnd"&&Wr&&(ut=mp()):(Ua=ve,hu="value"in Ua?Ua.value:Ua.textContent,Wr=!0)),Ze=ic(ae,St),0<Ze.length&&(St=new vp(St,t,null,a,ve),ye.push({event:St,listeners:Ze}),ut?St.data=ut:(ut=bp(a),ut!==null&&(St.data=ut)))),(ut=Rx?Cx(t,a):wx(t,a))&&(St=ic(ae,"onBeforeInput"),0<St.length&&(Ze=new vp("onBeforeInput","beforeinput",null,a,ve),ye.push({event:Ze,listeners:St}),Ze.data=ut)),S1(ye,t,ae,a,ve)}lg(ye,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ks(t,a),u!=null&&o.unshift(Do(t,u,f)),u=Ks(t,n),u!=null&&o.push(Do(t,u,f))),t.tag===3)return o;t=t.return}return[]}function b1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ug(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,k=R.alternate,ae=R.stateNode;if(R=R.tag,k!==null&&k===o)break;R!==5&&R!==26&&R!==27||ae===null||(k=ae,u?(ae=Ks(a,f),ae!=null&&v.unshift(Do(a,ae,k))):u||(ae=Ks(a,f),ae!=null&&v.push(Do(a,ae,k)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var T1=/\r\n?/g,A1=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(T1,`
`).replace(A1,"")}function dg(t,n){return n=fg(n),fg(t)===n}function Xt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(t,""+o);break;case"className":We(t,"class",o);break;case"tabIndex":We(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,o);break;case"style":Ei(t,o,f);break;case"data":if(n!=="object"){We(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=dr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=dr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ii.get(a)||a,Oe(t,a,o))}}function jf(t,n,a,o,u,f){switch(a){case"style":Ei(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ei(t,o):(typeof o=="number"||typeof o=="bigint")&&ei(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Oe(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,f,v,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),o&&Xt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=f=v=u=null,k=null,ae=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":v=ve;break;case"checked":k=ve;break;case"defaultChecked":ae=ve;break;case"value":f=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Xt(t,n,o,ve,a,null)}}Un(t,f,R,k,ae,v,u,!1);return;case"select":_t("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Xt(t,n,u,R,a,null)}n=f,a=v,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":_t("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Xt(t,n,v,R,a,null)}yi(t,o,u,f);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(t,n,k,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<wo.length;o++)_t(wo[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(o=a[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,ae,o,a,null)}return;default:if(Lt(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&jf(t,n,ve,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xt(t,n,R,o,a,null))}function R1(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,k=null,ae=null,ve=null;for(de in a){var ye=a[de];if(a.hasOwnProperty(de)&&ye!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":k=ye;default:o.hasOwnProperty(de)||Xt(t,n,de,null,o,ye)}}for(var ue in o){var de=o[ue];if(ye=a[ue],o.hasOwnProperty(ue)&&(de!=null||ye!=null))switch(ue){case"type":f=de;break;case"name":u=de;break;case"checked":ae=de;break;case"defaultChecked":ve=de;break;case"value":v=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==ye&&Xt(t,n,ue,de,o,ye)}}Ve(t,v,R,k,ae,ve,f,u);return;case"select":de=v=R=ue=null;for(f in a)if(k=a[f],a.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":de=k;default:o.hasOwnProperty(f)||Xt(t,n,f,null,o,k)}for(u in o)if(f=o[u],k=a[u],o.hasOwnProperty(u)&&(f!=null||k!=null))switch(u){case"value":ue=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==k&&Xt(t,n,u,f,o,k)}n=R,a=v,o=de,ue!=null?xn(t,!!a,ue,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":de=ue=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xt(t,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ue=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xt(t,n,v,u,o,f)}$n(t,ue,de);return;case"option":for(var qe in a)if(ue=a[qe],a.hasOwnProperty(qe)&&ue!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Xt(t,n,qe,null,o,ue)}for(k in o)if(ue=o[k],de=a[k],o.hasOwnProperty(k)&&ue!==de&&(ue!=null||de!=null))switch(k){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Xt(t,n,k,ue,o,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ue=a[nt],a.hasOwnProperty(nt)&&ue!=null&&!o.hasOwnProperty(nt)&&Xt(t,n,nt,null,o,ue);for(ae in o)if(ue=o[ae],de=a[ae],o.hasOwnProperty(ae)&&ue!==de&&(ue!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Xt(t,n,ae,ue,o,de)}return;default:if(Lt(n)){for(var Wt in a)ue=a[Wt],a.hasOwnProperty(Wt)&&ue!==void 0&&!o.hasOwnProperty(Wt)&&jf(t,n,Wt,void 0,o,ue);for(ve in o)ue=o[ve],de=a[ve],!o.hasOwnProperty(ve)||ue===de||ue===void 0&&de===void 0||jf(t,n,ve,ue,o,de);return}}for(var J in a)ue=a[J],a.hasOwnProperty(J)&&ue!=null&&!o.hasOwnProperty(J)&&Xt(t,n,J,null,o,ue);for(ye in o)ue=o[ye],de=a[ye],!o.hasOwnProperty(ye)||ue===de||ue==null&&de==null||Xt(t,n,ye,ue,o,de)}function hg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function C1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&hg(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],ae=k.startTime;if(ae>R)break;var ve=k.transferSize,ye=k.initiatorType;ve&&hg(ye)&&(k=k.responseEnd,v+=ve*(k<R?1:(R-ae)/(k-ae)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kf=null,Qf=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function w1(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var gg=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,U1=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(N1)}:gg;function N1(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function vg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[Ra]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);xs(n)}function xg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ed(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ed(a),Ca(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function L1(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function O1(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function Sg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function td(t){return t.data==="$?"||t.data==="$~"}function nd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function P1(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var id=null;function Mg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function yg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Eg(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ca(t)}var vi=new Map,bg=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=G.d;G.d={f:F1,r:I1,D:z1,C:B1,L:H1,m:V1,X:k1,S:G1,M:X1};function F1(){var t=pa.f(),n=Kl();return t||n}function I1(t){var n=Qi(t);n!==null&&n.tag===5&&n.type==="form"?Vm(n):pa.r(t)}var gs=typeof document>"u"?null:document;function Tg(t,n,a){var o=gs;if(o&&typeof n=="string"&&n){var u=It(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),bg.has(u)||(bg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),hn(n),o.head.appendChild(n)))}}function z1(t){pa.D(t),Tg("dns-prefetch",t,null)}function B1(t,n){pa.C(t,n),Tg("preconnect",t,n)}function H1(t,n,a){pa.L(t,n,a);var o=gs;if(o&&t&&n){var u='link[rel="preload"][as="'+It(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+It(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+It(a.imageSizes)+'"]')):u+='[href="'+It(t)+'"]';var f=u;switch(n){case"style":f=_s(t);break;case"script":f=vs(t)}vi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(f))||n==="script"&&o.querySelector(Lo(f))||(n=o.createElement("link"),wn(n,"link",t),hn(n),o.head.appendChild(n)))}}function V1(t,n){pa.m(t,n);var a=gs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+It(o)+'"][href="'+It(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vs(t)}if(!vi.has(f)&&(t=x({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(f)))return}o=a.createElement("link"),wn(o,"link",t),hn(o),a.head.appendChild(o)}}}function G1(t,n,a){pa.S(t,n,a);var o=gs;if(o&&t){var u=wa(o).hoistableStyles,f=_s(t);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(No(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&ad(t,a);var k=v=o.createElement("link");hn(k),wn(k,"link",t),k._p=new Promise(function(ae,ve){k.onload=ae,k.onerror=ve}),k.addEventListener("load",function(){R.loading|=1}),k.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function k1(t,n){pa.X(t,n);var a=gs;if(a&&t){var o=wa(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(t=x({src:t,async:!0},n),(n=vi.get(u))&&rd(t,n),f=a.createElement("script"),hn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function X1(t,n){pa.M(t,n);var a=gs;if(a&&t){var o=wa(a).hoistableScripts,u=vs(t),f=o.get(u);f||(f=a.querySelector(Lo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&rd(t,n),f=a.createElement("script"),hn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ag(t,n,a,o){var u=(u=ne.current)?rc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_s(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_s(a.href);var f=wa(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(No(t)))&&!f._p&&(v.instance=f,v.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||W1(u,t,a,v.state))),n&&o===null)throw Error(r(528,""));return v}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function _s(t){return'href="'+It(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function Rg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function W1(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),hn(n),t.head.appendChild(n))}function vs(t){return'[src="'+It(t)+'"]'}function Lo(t){return"script[async]"+t}function Cg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+It(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),wn(o,"style",u),sc(o,a.precedence,t),n.instance=o;case"stylesheet":u=_s(a.href);var f=t.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=Rg(a),(u=vi.get(u))&&ad(o,u),f=(t.ownerDocument||t).createElement("link"),hn(f);var v=f;return v._p=new Promise(function(R,k){v.onload=R,v.onerror=k}),wn(f,"link",o),n.state.loading|=4,sc(f,a.precedence,t),n.instance=f;case"script":return f=vs(a.src),(u=t.querySelector(Lo(f)))?(n.instance=u,hn(u),u):(o=a,(u=vi.get(f))&&(o=x({},a),rd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,t));return n.instance}function sc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function wg(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ra]||f[dn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function Dg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function q1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ug(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Y1(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_s(o.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=Rg(o),(u=vi.get(u))&&ad(o,u),f=f.createElement("link"),hn(f);var v=f;v._p=new Promise(function(R,k){v.onload=R,v.onerror=k}),wn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=lc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sd=0;function Z1(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&sd===0&&(sd=62500*C1());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>sd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(j1,t),cc=null,lc.call(t))}function j1(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:B,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function K1(t,n,a,o,u,f,v,R,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Ng(t,n,a,o,u,f,v,R,k,ae,ve,ye){return t=new K1(t,n,a,v,k,ae,ve,ye,R),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Gu(f),t}function Lg(t){return t?(t=jr,t):jr}function Og(t,n,a,o,u,f){u=Lg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(t,o,n),a!==null&&(Yn(a,t,n),fo(a,t,n))}function Pg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function od(t,n){Pg(t,n),(t=t.alternate)&&Pg(t,n)}function Fg(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&Yn(n,t,67108864),od(t,67108864)}}function Ig(t){if(t.tag===13||t.tag===31){var n=oi();n=Ys(n);var a=gr(t,n);a!==null&&Yn(a,t,n),od(t,n)}}var fc=!0;function Q1(t,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=2,ld(t,n,a,o)}finally{G.p=f,I.T=u}}function J1(t,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=8,ld(t,n,a,o)}finally{G.p=f,I.T=u}}function ld(t,n,a,o){if(fc){var u=cd(o);if(u===null)Zf(t,n,o,dc,a),Bg(t,o);else if(eS(u,t,n,a,o))o.stopPropagation();else if(Bg(t,o),n&4&&-1<$1.indexOf(t)){for(;u!==null;){var f=Qi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=we(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var k=1<<31-He(v);R.entanglements[1]|=k,v&=~k}Vi(f),(Ut&6)===0&&(Zl=Dt()+500,Co(0))}}break;case 31:case 13:R=gr(f,2),R!==null&&Yn(R,f,2),Kl(),od(f,2)}if(f=cd(o),f===null&&Zf(t,n,o,dc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Zf(t,n,o,null,a)}}function cd(t){return t=uu(t),ud(t)}var dc=null;function ud(t){if(dc=null,t=Ki(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case U:return 2;case S:return 8;case q:case te:return 32;case fe:return 268435456;default:return 32}default:return 32}}var fd=!1,ja=null,Ka=null,Qa=null,Po=new Map,Fo=new Map,Ja=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bg(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Io(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Qi(n),n!==null&&Fg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function eS(t,n,a,o,u){switch(n){case"focusin":return ja=Io(ja,t,n,a,o,u),!0;case"dragenter":return Ka=Io(Ka,t,n,a,o,u),!0;case"mouseover":return Qa=Io(Qa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Po.set(f,Io(Po.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,Io(Fo.get(f)||null,t,n,a,o,u)),!0}return!1}function Hg(t){var n=Ki(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){Ig(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Gr(t.priority,function(){Ig(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=cd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);cu=o,a.target.dispatchEvent(o),cu=null}else return n=Qi(a),n!==null&&Fg(n),t.blockedOn=a,!1;n.shift()}return!0}function Vg(t,n,a){hc(t)&&a.delete(n)}function tS(){fd=!1,ja!==null&&hc(ja)&&(ja=null),Ka!==null&&hc(Ka)&&(Ka=null),Qa!==null&&hc(Qa)&&(Qa=null),Po.forEach(Vg),Fo.forEach(Vg)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,fd||(fd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,tS)))}var mc=null;function Gg(t){mc!==t&&(mc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ud(o||a)===null)continue;break}var f=Qi(a);f!==null&&(t.splice(n,3),n-=3,cf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function xs(t){function n(k){return pc(k,t)}ja!==null&&pc(ja,t),Ka!==null&&pc(Ka,t),Qa!==null&&pc(Qa,t),Po.forEach(n),Fo.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Hg(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[Tn]||null;if(typeof f=="function")v||Gg(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Tn]||null)R=v.formAction;else if(ud(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Gg(a)}}}function kg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function dd(t){this._internalRoot=t}gc.prototype.render=dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=oi();Og(a,o,t,n,null,null)},gc.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Og(t.current,2,null,t,null,null),Kl(),n[Vn]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=js();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&Hg(t)}};var Xg=e.version;if(Xg!=="19.2.0")throw Error(r(527,Xg,"19.2.0"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var nS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{he=_c.inject(nS),me=_c}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Qm,f=Jm,v=$m;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Ng(t,1,!1,null,null,a,o,null,u,f,v,kg),t[Vn]=n.current,Yf(t),new dd(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Qm,v=Jm,R=$m,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Ng(t,1,!0,n,a??null,o,u,k,f,v,R,kg),n.context=Lg(null),a=n.current,o=oi(),o=Ys(o),u=Ia(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,ke(n,a),Vi(n),t[Vn]=n.current,Yf(t),new gc(n)},Bo.version="19.2.0",Bo}var e_;function pS(){if(e_)return md.exports;e_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),md.exports=hS(),md.exports}var mS=pS();const gS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M228,128a100,100,0,0,1-98.66,100H128a99.39,99.39,0,0,1-68.62-27.29,12,12,0,0,1,16.48-17.45,76,76,0,1,0-1.57-109c-.13.13-.25.25-.39.37L54.89,92H72a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V56a12,12,0,0,1,24,0V76.72L57.48,57.06A100,100,0,0,1,228,128Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),P.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M222,128a94,94,0,0,1-92.74,94H128a93.43,93.43,0,0,1-64.5-25.65,6,6,0,1,1,8.24-8.72A82,82,0,1,0,70,70l-.19.19L39.44,98H72a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V56a6,6,0,0,1,12,0V90.34L61.63,61.4A94,94,0,0,1,222,128Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z"}))]]),_S=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),P.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),vS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),P.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),xS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M200,112H56l72-72Z",opacity:"0.2"}),P.createElement("path",{d:"M205.66,106.34l-72-72a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,120h64v96a8,8,0,0,0,16,0V120h64a8,8,0,0,0,5.66-13.66ZM75.31,104,128,51.31,180.69,104Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M207.39,115.06A8,8,0,0,1,200,120H136v96a8,8,0,0,1-16,0V120H56a8,8,0,0,1-5.66-13.66l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,207.39,115.06Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M204.24,116.24a6,6,0,0,1-8.48,0L134,54.49V216a6,6,0,0,1-12,0V54.49L60.24,116.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0l72,72A6,6,0,0,1,204.24,116.24Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M202.83,114.83a4,4,0,0,1-5.66,0L132,49.66V216a4,4,0,0,1-8,0V49.66L58.83,114.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0l72,72A4,4,0,0,1,202.83,114.83Z"}))]]),SS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M192,64V168L88,64Z",opacity:"0.2"}),P.createElement("path",{d:"M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z"}))]]),MS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),P.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),yS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),P.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),ES=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),P.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z"}))]]),bS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",opacity:"0.2"}),P.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"}))]]),TS=new Map([["bold",P.createElement(P.Fragment,null,P.createElement("path",{d:"M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z"}))],["duotone",P.createElement(P.Fragment,null,P.createElement("path",{d:"M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",opacity:"0.2"}),P.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["fill",P.createElement(P.Fragment,null,P.createElement("path",{d:"M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"}))],["light",P.createElement(P.Fragment,null,P.createElement("path",{d:"M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z"}))],["regular",P.createElement(P.Fragment,null,P.createElement("path",{d:"M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"}))],["thin",P.createElement(P.Fragment,null,P.createElement("path",{d:"M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z"}))]]),AS=P.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Pi=P.forwardRef((s,e)=>{const{alt:i,color:r,size:l,weight:c,mirrored:d,children:p,weights:m,...h}=s,{color:_="currentColor",size:x,weight:g="regular",mirrored:y=!1,...b}=P.useContext(AS);return P.createElement("svg",{ref:e,xmlns:"http://www.w3.org/2000/svg",width:l??x,height:l??x,fill:r??_,viewBox:"0 0 256 256",transform:d||y?"scale(-1, 1)":void 0,...b,...h},!!i&&P.createElement("title",null,i),p,m.get(c??g))});Pi.displayName="IconBase";const sv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:gS}));sv.displayName="ArrowCounterClockwiseIcon";const RS=sv,ov=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:_S}));ov.displayName="ArrowLeftIcon";const lv=ov,cv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:vS}));cv.displayName="ArrowRightIcon";const uv=cv,fv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:xS}));fv.displayName="ArrowUpIcon";const CS=fv,dv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:SS}));dv.displayName="ArrowUpRightIcon";const wS=dv,hv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:MS}));hv.displayName="CaretDownIcon";const th=hv,pv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:yS}));pv.displayName="CheckIcon";const DS=pv,mv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:ES}));mv.displayName="DownloadSimpleIcon";const US=mv,gv=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:bS}));gv.displayName="PauseIcon";const NS=gv,_v=P.forwardRef((s,e)=>P.createElement(Pi,{ref:e,...s,weights:TS}));_v.displayName="PlayIcon";const LS=_v;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="185",OS=0,t_=1,PS=2,kc=1,FS=2,Yo=3,lr=0,jn=1,Sa=2,Ea=0,Fs=1,nh=2,n_=3,i_=4,IS=5,Or=100,zS=101,BS=102,HS=103,VS=104,GS=200,kS=201,XS=202,WS=203,ih=204,ah=205,qS=206,YS=207,ZS=208,jS=209,KS=210,QS=211,JS=212,$S=213,eM=214,rh=0,sh=1,oh=2,Bs=3,lh=4,ch=5,uh=6,fh=7,vv=0,tM=1,nM=2,Yi=0,xv=1,Sv=2,Mv=3,Zh=4,yv=5,Ev=6,bv=7,Tv=300,zr=301,Hs=302,xd=303,Sd=304,ru=306,dh=1e3,ya=1001,jc=1002,Dn=1003,iM=1004,vc=1005,Pn=1006,Md=1007,Fr=1008,Si=1009,Av=1010,Rv=1011,$o=1012,jh=1013,ji=1014,Wi=1015,Ta=1016,Kh=1017,Qh=1018,el=1020,Cv=35902,wv=35899,Dv=1021,Uv=1022,Ni=1023,Aa=1026,Ir=1027,Nv=1028,Jh=1029,Br=1030,$h=1031,ep=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,hh=35840,ph=35841,mh=35842,gh=35843,_h=36196,vh=37492,xh=37496,Sh=37488,Mh=37489,Kc=37490,yh=37491,Eh=37808,bh=37809,Th=37810,Ah=37811,Rh=37812,Ch=37813,wh=37814,Dh=37815,Uh=37816,Nh=37817,Lh=37818,Oh=37819,Ph=37820,Fh=37821,Ih=36492,zh=36494,Bh=36495,Hh=36283,Vh=36284,Qc=36285,Gh=36286,aM=3200,a_=0,rM=1,sr="",Zn="srgb",Jc="srgb-linear",$c="linear",Vt="srgb",Ss=7680,r_=519,sM=512,oM=513,lM=514,tp=515,cM=516,uM=517,np=518,fM=519,s_=35044,o_="300 es",qi=2e3,eu=2001;function dM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hM(){const s=tl("canvas");return s.style.display="block",s}const l_={};function c_(...s){const e="THREE."+s.shift();console.log(e,...s)}function Lv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=Lv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Tt(...s){s=Lv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Is(...s){const e=s.join(" ");e in l_||(l_[e]=!0,it(...s))}function pM(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const mM={[rh]:sh,[oh]:uh,[lh]:fh,[Bs]:ch,[sh]:rh,[uh]:oh,[fh]:lh,[ch]:Bs};class Vr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let u_=1234567;const Qo=Math.PI/180,nl=180/Math.PI;function Xs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function ip(s,e){return(s%e+e)%e}function gM(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function _M(s,e,i){return s!==e?(i-s)/(e-s):0}function Jo(s,e,i){return(1-i)*s+i*e}function vM(s,e,i,r){return Jo(s,e,1-Math.exp(-i*r))}function xM(s,e=1){return e-Math.abs(ip(s,e*2)-e)}function SM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function MM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function yM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function EM(s,e){return s+Math.random()*(e-s)}function bM(s){return s*(.5-Math.random())}function TM(s){s!==void 0&&(u_=s);let e=u_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(s){return s*Qo}function RM(s){return s*nl}function CM(s){return(s&s-1)===0&&s!==0}function wM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function DM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function UM(s,e,i,r,l){const c=Math.cos,d=Math.sin,p=c(i/2),m=d(i/2),h=c((e+r)/2),_=d((e+r)/2),x=c((e-r)/2),g=d((e-r)/2),y=c((r-e)/2),b=d((r-e)/2);switch(l){case"XYX":s.set(p*_,m*x,m*g,p*h);break;case"YZY":s.set(m*g,p*_,m*x,p*h);break;case"ZXZ":s.set(m*x,m*g,p*_,p*h);break;case"XZX":s.set(p*_,m*b,m*y,p*h);break;case"YXY":s.set(m*y,p*_,m*b,p*h);break;case"ZYZ":s.set(m*b,m*y,p*_,p*h);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ps(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xc={DEG2RAD:Qo,RAD2DEG:nl,generateUUID:Xs,clamp:Mt,euclideanModulo:ip,mapLinear:gM,inverseLerp:_M,lerp:Jo,damp:vM,pingpong:xM,smoothstep:SM,smootherstep:MM,randInt:yM,randFloat:EM,randFloatSpread:bM,seededRandom:TM,degToRad:AM,radToDeg:RM,isPowerOfTwo:CM,ceilPowerOfTwo:wM,floorPowerOfTwo:DM,setQuaternionFromProperEuler:UM,normalize:zn,denormalize:Ps},lp=class lp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lp.prototype.isVector2=!0;let wt=lp;class Ws{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],_=r[l+2],x=r[l+3],g=c[d+0],y=c[d+1],b=c[d+2],w=c[d+3];if(x!==w||m!==g||h!==y||_!==b){let E=m*g+h*y+_*b+x*w;E<0&&(g=-g,y=-y,b=-b,w=-w,E=-E);let M=1-p;if(E<.9995){const H=Math.acos(E),B=Math.sin(H);M=Math.sin(M*H)/B,p=Math.sin(p*H)/B,m=m*M+g*p,h=h*M+y*p,_=_*M+b*p,x=x*M+w*p}else{m=m*M+g*p,h=h*M+y*p,_=_*M+b*p,x=x*M+w*p;const H=1/Math.sqrt(m*m+h*h+_*_+x*x);m*=H,h*=H,_*=H,x*=H}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],_=r[l+3],x=c[d],g=c[d+1],y=c[d+2],b=c[d+3];return e[i]=p*b+_*x+m*y-h*g,e[i+1]=m*b+_*g+h*x-p*y,e[i+2]=h*b+_*y+p*g-m*x,e[i+3]=_*b-p*x-m*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),_=p(l/2),x=p(c/2),g=m(r/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*_*x+h*y*b,this._y=h*y*x-g*_*b,this._z=h*_*b+g*y*x,this._w=h*_*x-g*y*b;break;case"YXZ":this._x=g*_*x+h*y*b,this._y=h*y*x-g*_*b,this._z=h*_*b-g*y*x,this._w=h*_*x+g*y*b;break;case"ZXY":this._x=g*_*x-h*y*b,this._y=h*y*x+g*_*b,this._z=h*_*b+g*y*x,this._w=h*_*x-g*y*b;break;case"ZYX":this._x=g*_*x-h*y*b,this._y=h*y*x+g*_*b,this._z=h*_*b-g*y*x,this._w=h*_*x+g*y*b;break;case"YZX":this._x=g*_*x+h*y*b,this._y=h*y*x+g*_*b,this._z=h*_*b-g*y*x,this._w=h*_*x-g*y*b;break;case"XZY":this._x=g*_*x-h*y*b,this._y=h*y*x-g*_*b,this._z=h*_*b+g*y*x,this._w=h*_*x+g*y*b;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],x=i[10],g=r+p+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-h)*y,this._z=(d-l)*y}else if(r>p&&r>x){const y=2*Math.sqrt(1+r-p-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+h)/y}else if(p>x){const y=2*Math.sqrt(1+p-r-x);this._w=(c-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-r-p);this._w=(d-l)/y,this._x=(c+h)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=r*_+d*p+l*h-c*m,this._y=l*_+d*m+c*p-r*h,this._z=c*_+d*h+r*m-l*p,this._w=d*_-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cp=class cp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(f_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(f_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),_=2*(p*i-c*l),x=2*(c*r-d*i);return this.x=i+m*h+d*x-p*_,this.y=r+m*_+p*h-c*x,this.z=l+m*x+c*_-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cp.prototype.isVector3=!0;let oe=cp;const yd=new oe,f_=new Ws,up=class up{constructor(e,i,r,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],_=r[4],x=r[7],g=r[2],y=r[5],b=r[8],w=l[0],E=l[3],M=l[6],H=l[1],B=l[4],C=l[7],F=l[2],N=l[5],O=l[8];return c[0]=d*w+p*H+m*F,c[3]=d*E+p*B+m*N,c[6]=d*M+p*C+m*O,c[1]=h*w+_*H+x*F,c[4]=h*E+_*B+x*N,c[7]=h*M+_*C+x*O,c[2]=g*w+y*H+b*F,c[5]=g*E+y*B+b*N,c[8]=g*M+y*C+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*d*_-i*p*h-r*c*_+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],x=_*d-p*h,g=p*m-_*c,y=h*c-d*m,b=i*x+r*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=x*w,e[1]=(l*h-_*r)*w,e[2]=(p*r-l*d)*w,e[3]=g*w,e[4]=(_*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=y*w,e[7]=(r*m-h*i)*w,e[8]=(d*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ed.makeScale(e,i)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ed.makeRotation(-e)),this}translate(e,i){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ed.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};up.prototype.isMatrix3=!0;let st=up;const Ed=new st,d_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),h_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NM(){const s={enabled:!0,workingColorSpace:Jc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===sr?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jc]:{primaries:e,whitePoint:r,transfer:$c,toXYZ:d_,fromXYZ:h_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:d_,fromXYZ:h_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),s}const Et=NM();function ba(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class LM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ms===void 0&&(Ms=tl("canvas")),Ms.width=e.width,Ms.height=e.height;const l=Ms.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ms}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=tl("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ba(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OM=0;class ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(bd(l[d].image)):c.push(bd(l[d]))}else c=bd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function bd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?LM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let PM=0;const Td=new oe;class Fn extends Vr{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=ya,l=ya,c=Pn,d=Fr,p=Ni,m=Si,h=Fn.DEFAULT_ANISOTROPY,_=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Xs(),this.name="",this.source=new ap(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Tv;Fn.DEFAULT_ANISOTROPY=1;const fp=class fp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],_=m[4],x=m[8],g=m[1],y=m[5],b=m[9],w=m[2],E=m[6],M=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(b-E)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(b+E)<.1&&Math.abs(h+y+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(h+1)/2,C=(y+1)/2,F=(M+1)/2,N=(_+g)/4,O=(x+w)/4,T=(b+E)/4;return B>C&&B>F?B<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(B),l=N/r,c=O/r):C>F?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=N/l,c=T/l):F<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),r=O/c,l=T/c),this.set(r,l,c,i),this}let H=Math.sqrt((E-b)*(E-b)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(H)<.001&&(H=1),this.x=(E-b)/H,this.y=(x-w)/H,this.z=(g-_)/H,this.w=Math.acos((h+y+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fp.prototype.isVector4=!0;let ln=fp;class FM extends Vr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Fn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ap(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends FM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ov extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=class au{constructor(e,i,r,l,c,d,p,m,h,_,x,g,y,b,w,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,_,x,g,y,b,w,E)}set(e,i,r,l,c,d,p,m,h,_,x,g,y,b,w,E){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=c,M[5]=d,M[9]=p,M[13]=m,M[2]=h,M[6]=_,M[10]=x,M[14]=g,M[3]=y,M[7]=b,M[11]=w,M[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new au().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),d=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=d*_,y=d*x,b=p*_,w=p*x;i[0]=m*_,i[4]=-m*x,i[8]=h,i[1]=y+b*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=b+y*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*_,y=m*x,b=h*_,w=h*x;i[0]=g+w*p,i[4]=b*p-y,i[8]=d*h,i[1]=d*x,i[5]=d*_,i[9]=-p,i[2]=y*p-b,i[6]=w+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*_,y=m*x,b=h*_,w=h*x;i[0]=g-w*p,i[4]=-d*x,i[8]=b+y*p,i[1]=y+b*p,i[5]=d*_,i[9]=w-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*_,y=d*x,b=p*_,w=p*x;i[0]=m*_,i[4]=b*h-y,i[8]=g*h+w,i[1]=m*x,i[5]=w*h+g,i[9]=y*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,y=d*h,b=p*m,w=p*h;i[0]=m*_,i[4]=w-g*x,i[8]=b*x+y,i[1]=x,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=y*x+b,i[10]=g-w*x}else if(e.order==="XZY"){const g=d*m,y=d*h,b=p*m,w=p*h;i[0]=m*_,i[4]=-x,i[8]=h*_,i[1]=g*x+w,i[5]=d*_,i[9]=y*x-b,i[2]=b*x-y,i[6]=p*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,BM)}lookAt(e,i,r){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),er.crossVectors(r,li),er.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),er.crossVectors(r,li)),er.normalize(),Sc.crossVectors(li,er),l[0]=er.x,l[4]=Sc.x,l[8]=li.x,l[1]=er.y,l[5]=Sc.y,l[9]=li.y,l[2]=er.z,l[6]=Sc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],_=r[1],x=r[5],g=r[9],y=r[13],b=r[2],w=r[6],E=r[10],M=r[14],H=r[3],B=r[7],C=r[11],F=r[15],N=l[0],O=l[4],T=l[8],L=l[12],j=l[1],V=l[5],$=l[9],ge=l[13],pe=l[2],ee=l[6],I=l[10],G=l[14],X=l[3],le=l[7],_e=l[11],D=l[15];return c[0]=d*N+p*j+m*pe+h*X,c[4]=d*O+p*V+m*ee+h*le,c[8]=d*T+p*$+m*I+h*_e,c[12]=d*L+p*ge+m*G+h*D,c[1]=_*N+x*j+g*pe+y*X,c[5]=_*O+x*V+g*ee+y*le,c[9]=_*T+x*$+g*I+y*_e,c[13]=_*L+x*ge+g*G+y*D,c[2]=b*N+w*j+E*pe+M*X,c[6]=b*O+w*V+E*ee+M*le,c[10]=b*T+w*$+E*I+M*_e,c[14]=b*L+w*ge+E*G+M*D,c[3]=H*N+B*j+C*pe+F*X,c[7]=H*O+B*V+C*ee+F*le,c[11]=H*T+B*$+C*I+F*_e,c[15]=H*L+B*ge+C*G+F*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],_=e[2],x=e[6],g=e[10],y=e[14],b=e[3],w=e[7],E=e[11],M=e[15],H=m*y-h*g,B=p*y-h*x,C=p*g-m*x,F=d*y-h*_,N=d*g-m*_,O=d*x-p*_;return i*(w*H-E*B+M*C)-r*(b*H-E*F+M*N)+l*(b*B-w*F+M*O)-c*(b*C-w*N+E*O)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],_=e[10];return i*(d*_-p*h)-r*(c*_-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],x=e[9],g=e[10],y=e[11],b=e[12],w=e[13],E=e[14],M=e[15],H=i*p-r*d,B=i*m-l*d,C=i*h-c*d,F=r*m-l*p,N=r*h-c*p,O=l*h-c*m,T=_*w-x*b,L=_*E-g*b,j=_*M-y*b,V=x*E-g*w,$=x*M-y*w,ge=g*M-y*E,pe=H*ge-B*$+C*V+F*j-N*L+O*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/pe;return e[0]=(p*ge-m*$+h*V)*ee,e[1]=(l*$-r*ge-c*V)*ee,e[2]=(w*O-E*N+M*F)*ee,e[3]=(g*N-x*O-y*F)*ee,e[4]=(m*j-d*ge-h*L)*ee,e[5]=(i*ge-l*j+c*L)*ee,e[6]=(E*C-b*O-M*B)*ee,e[7]=(_*O-g*C+y*B)*ee,e[8]=(d*$-p*j+h*T)*ee,e[9]=(r*j-i*$-c*T)*ee,e[10]=(b*N-w*C+M*H)*ee,e[11]=(x*C-_*N-y*H)*ee,e[12]=(p*L-d*V-m*T)*ee,e[13]=(i*V-r*L+l*T)*ee,e[14]=(w*B-b*F-E*H)*ee,e[15]=(_*F-x*B+g*H)*ee,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,_=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+r,_*m-l*d,0,h*m-l*p,_*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,_=d+d,x=p+p,g=c*h,y=c*_,b=c*x,w=d*_,E=d*x,M=p*x,H=m*h,B=m*_,C=m*x,F=r.x,N=r.y,O=r.z;return l[0]=(1-(w+M))*F,l[1]=(y+C)*F,l[2]=(b-B)*F,l[3]=0,l[4]=(y-C)*N,l[5]=(1-(g+M))*N,l[6]=(E+H)*N,l[7]=0,l[8]=(b+B)*O,l[9]=(E-H)*O,l[10]=(1-(g+w))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let d=ys.set(l[0],l[1],l[2]).length();const p=ys.set(l[4],l[5],l[6]).length(),m=ys.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ri.copy(this);const h=1/d,_=1/p,x=1/m;return Ri.elements[0]*=h,Ri.elements[1]*=h,Ri.elements[2]*=h,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=x,Ri.elements[9]*=x,Ri.elements[10]*=x,i.setFromRotationMatrix(Ri),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=qi,m=!1){const h=this.elements,_=2*c/(i-e),x=2*c/(r-l),g=(i+e)/(i-e),y=(r+l)/(r-l);let b,w;if(m)b=c/(d-c),w=d*c/(d-c);else if(p===qi)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(p===eu)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=qi,m=!1){const h=this.elements,_=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),y=-(r+l)/(r-l);let b,w;if(m)b=1/(d-c),w=d/(d-c);else if(p===qi)b=-2/(d-c),w=-(d+c)/(d-c);else if(p===eu)b=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};au.prototype.isMatrix4=!0;let fn=au;const ys=new oe,Ri=new fn,zM=new oe(0,0,0),BM=new oe(1,1,1),er=new oe,Sc=new oe,li=new oe,p_=new fn,m_=new Ws;class Hr{constructor(e=0,i=0,r=0,l=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return p_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(p_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return m_.setFromEuler(this),this.setFromQuaternion(m_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HM=0;const g_=new oe,Es=new Ws,ma=new fn,Mc=new oe,Ho=new oe,VM=new oe,GM=new Ws,__=new oe(1,0,0),v_=new oe(0,1,0),x_=new oe(0,0,1),S_={type:"added"},kM={type:"removed"},bs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class Kn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new oe,i=new Hr,r=new Ws,l=new oe(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new st}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,i){return Es.setFromAxisAngle(e,i),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(__,e)}rotateY(e){return this.rotateOnAxis(v_,e)}rotateZ(e){return this.rotateOnAxis(x_,e)}translateOnAxis(e,i){return g_.copy(e).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(__,e)}translateY(e){return this.translateOnAxis(v_,e)}translateZ(e){return this.translateOnAxis(x_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mc.copy(e):Mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Ho,Mc,this.up):ma.lookAt(Mc,Ho,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(ma),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),bs.child=e,this.dispatchEvent(bs),bs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kM),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,VM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const x=m[h];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),_=d(e.images),x=d(e.shapes),g=d(e.skeletons),y=d(e.animations),b=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new oe(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zo extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const w of e.hand.values()){const E=i.getJointPose(w,r),M=this._getHandJoint(h,w);E!==null&&(M.matrix.fromArray(E.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=E.radius),M.visible=E!==null}const _=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,b=.005;h.inputState.pinching&&g>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},yc={h:0,s:0,l:0};function Cd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=r,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Et.workingColorSpace){if(e=ip(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Cd(d,c,e+1/3),this.g=Cd(d,c,e),this.b=Cd(d,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=Zn){function r(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Zn){const r=Fv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Et.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=_<=.5?x/(d+p):x/(2-d-p),d){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Zn){Et.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==Zn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(yc);const r=Jo(tr.h,yc.h,i),l=Jo(tr.s,yc.s,i),c=Jo(tr.l,yc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Nt;Nt.NAMES=Fv;class WM extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new oe,ga=new oe,wd=new oe,_a=new oe,Ts=new oe,As=new oe,M_=new oe,Dd=new oe,Ud=new oe,Nd=new oe,Ld=new ln,Od=new ln,Pd=new ln;class Ui{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ci.subVectors(l,i),ga.subVectors(r,i),wd.subVectors(e,i);const d=Ci.dot(Ci),p=Ci.dot(ga),m=Ci.dot(wd),h=ga.dot(ga),_=ga.dot(wd),x=d*h-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(h*m-p*_)*g,b=(d*_-p*m)*g;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(d,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Ld.setScalar(0),Od.setScalar(0),Pd.setScalar(0),Ld.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,r),Pd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ld,c.x),d.addScaledVector(Od,c.y),d.addScaledVector(Pd,c.z),d}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),ga.subVectors(e,i),Ci.cross(ga).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ci.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Ts.subVectors(l,r),As.subVectors(c,r),Dd.subVectors(e,r);const m=Ts.dot(Dd),h=As.dot(Dd);if(m<=0&&h<=0)return i.copy(r);Ud.subVectors(e,l);const _=Ts.dot(Ud),x=As.dot(Ud);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*h;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(Ts,d);Nd.subVectors(e,c);const y=Ts.dot(Nd),b=As.dot(Nd);if(b>=0&&y<=b)return i.copy(c);const w=y*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(As,p);const E=_*b-y*x;if(E<=0&&x-_>=0&&y-b>=0)return M_.subVectors(c,l),p=(x-_)/(x-_+(y-b)),i.copy(l).addScaledVector(M_,p);const M=1/(E+w+g);return d=w*M,p=g*M,i.copy(r).addScaledVector(Ts,d).addScaledVector(As,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ec.copy(r.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),bc.subVectors(this.max,Vo),Rs.subVectors(e.a,Vo),Cs.subVectors(e.b,Vo),ws.subVectors(e.c,Vo),nr.subVectors(Cs,Rs),ir.subVectors(ws,Cs),wr.subVectors(Rs,ws);let i=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-wr.z,wr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,wr.z,0,-wr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-wr.y,wr.x,0];return!Fd(i,Rs,Cs,ws,bc)||(i=[1,0,0,0,1,0,0,0,1],!Fd(i,Rs,Cs,ws,bc))?!1:(Tc.crossVectors(nr,ir),i=[Tc.x,Tc.y,Tc.z],Fd(i,Rs,Cs,ws,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],wi=new oe,Ec=new il,Rs=new oe,Cs=new oe,ws=new oe,nr=new oe,ir=new oe,wr=new oe,Vo=new oe,bc=new oe,Tc=new oe,Dr=new oe;function Fd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Dr.fromArray(s,c);const p=l.x*Math.abs(Dr.x)+l.y*Math.abs(Dr.y)+l.z*Math.abs(Dr.z),m=e.dot(Dr),h=i.dot(Dr),_=r.dot(Dr);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const vn=new oe,Ac=new wt;let qM=0;class Li extends Vr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=s_,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(e),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ps(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ps(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ps(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ps(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ps(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==s_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Iv extends Li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class zv extends Li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Hn extends Li{constructor(e,i,r){super(new Float32Array(e),i,r)}}const YM=new il,Go=new oe,Id=new oe;class su{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):YM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Id)),this.expandByPoint(Go.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ZM=0;const xi=new fn,zd=new Kn,Ds=new oe,ci=new il,ko=new il,bn=new oe;class Mi extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dM(e)?zv:Iv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new st().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];ko.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ci.min,ko.min),ci.expandByPoint(bn),bn.addVectors(ci.max,ko.max),ci.expandByPoint(bn)):(ci.expandByPoint(ko.min),ci.expandByPoint(ko.max))}ci.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)bn.fromBufferAttribute(p,h),m&&(Ds.fromBufferAttribute(e,h),bn.add(Ds)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Li(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new oe,m[T]=new oe;const h=new oe,_=new oe,x=new oe,g=new wt,y=new wt,b=new wt,w=new oe,E=new oe;function M(T,L,j){h.fromBufferAttribute(r,T),_.fromBufferAttribute(r,L),x.fromBufferAttribute(r,j),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,L),b.fromBufferAttribute(c,j),_.sub(h),x.sub(h),y.sub(g),b.sub(g);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(V),E.copy(x).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(V),p[T].add(w),p[L].add(w),p[j].add(w),m[T].add(E),m[L].add(E),m[j].add(E))}let H=this.groups;H.length===0&&(H=[{start:0,count:e.count}]);for(let T=0,L=H.length;T<L;++T){const j=H[T],V=j.start,$=j.count;for(let ge=V,pe=V+$;ge<pe;ge+=3)M(e.getX(ge+0),e.getX(ge+1),e.getX(ge+2))}const B=new oe,C=new oe,F=new oe,N=new oe;function O(T){F.fromBufferAttribute(l,T),N.copy(F);const L=p[T];B.copy(L),B.sub(F.multiplyScalar(F.dot(L))).normalize(),C.crossVectors(N,L);const V=C.dot(m[T])<0?-1:1;d.setXYZW(T,B.x,B.y,B.z,V)}for(let T=0,L=H.length;T<L;++T){const j=H[T],V=j.start,$=j.count;for(let ge=V,pe=V+$;ge<pe;ge+=3)O(e.getX(ge+0)),O(e.getX(ge+1)),O(e.getX(ge+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const l=new oe,c=new oe,d=new oe,p=new oe,m=new oe,h=new oe,_=new oe,x=new oe;if(e)for(let g=0,y=e.count;g<y;g+=3){const b=e.getX(g+0),w=e.getX(g+1),E=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,E),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),h.fromBufferAttribute(r,E),p.add(_),m.add(_),h.add(_),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(E,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,c),x.subVectors(l,c),_.cross(x),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,x=p.normalized,g=new h.constructor(m.length*_);let y=0,b=0;for(let w=0,E=m.length;w<E;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*_;for(let M=0;M<_;M++)g[b++]=h[y++]}return new Li(g,_,x)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Mi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,x=h.length;_<x;_++){const g=h[_],y=e(g,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let x=0,g=h.length;x<g;x++){const y=h[x];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],x=c[h];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,_=d.length;h<_;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jM=0;class al extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Fs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=ah,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ih&&(r.blendSrc=this.blendSrc),this.blendDst!==ah&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new wt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xa=new oe,Bd=new oe,Rc=new oe,ar=new oe,Hd=new oe,Cc=new oe,Vd=new oe;class Bv{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Bd.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),ar.copy(this.origin).sub(Bd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Rc),p=ar.dot(this.direction),m=-ar.dot(Rc),h=ar.lengthSq(),_=Math.abs(1-d*d);let x,g,y,b;if(_>0)if(x=d*m-p,g=d*p-m,b=c*_,x>=0)if(g>=-b)if(g<=b){const w=1/_;x*=w,g*=w,y=x*(x+d*g+2*p)+g*(d*x+g+2*m)+h}else g=c,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;else g=-c,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;else g<=-b?(x=Math.max(0,-(-d*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+h):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+h):(x=Math.max(0,-(d*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+h);else g=d>0?-c:c,x=Math.max(0,-(d*g+p)),y=-x*x+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Bd).addScaledVector(Rc,g),y}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const r=xa.dot(this.direction),l=xa.dot(xa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),_>=0?(c=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,r,l,c){Hd.subVectors(i,e),Cc.subVectors(r,e),Vd.crossVectors(Hd,Cc);let d=this.direction.dot(Vd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ar.subVectors(this.origin,e);const m=p*this.direction.dot(Cc.crossVectors(ar,Cc));if(m<0)return null;const h=p*this.direction.dot(Hd.cross(ar));if(h<0||m+h>d)return null;const _=-p*ar.dot(Vd);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hv extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const y_=new fn,Ur=new Bv,wc=new su,E_=new oe,Dc=new oe,Uc=new oe,Nc=new oe,Gd=new oe,Lc=new oe,b_=new oe,Oc=new oe;class Oi extends Kn{constructor(e=new Mi,i=new Hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Lc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],x=c[m];_!==0&&(Gd.fromBufferAttribute(x,e),d?Lc.addScaledVector(Gd,_):Lc.addScaledVector(Gd.sub(i),_))}i.add(Lc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(c),Ur.copy(e.ray).recast(e.near),!(wc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(wc,E_)===null||Ur.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(y_.copy(c).invert(),Ur.copy(e.ray).applyMatrix4(y_),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ur)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const E=g[b],M=d[E.materialIndex],H=Math.max(E.start,y.start),B=Math.min(p.count,Math.min(E.start+E.count,y.start+y.count));for(let C=H,F=B;C<F;C+=3){const N=p.getX(C),O=p.getX(C+1),T=p.getX(C+2);l=Pc(this,M,e,r,h,_,x,N,O,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let E=b,M=w;E<M;E+=3){const H=p.getX(E),B=p.getX(E+1),C=p.getX(E+2);l=Pc(this,d,e,r,h,_,x,H,B,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const E=g[b],M=d[E.materialIndex],H=Math.max(E.start,y.start),B=Math.min(m.count,Math.min(E.start+E.count,y.start+y.count));for(let C=H,F=B;C<F;C+=3){const N=C,O=C+1,T=C+2;l=Pc(this,M,e,r,h,_,x,N,O,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let E=b,M=w;E<M;E+=3){const H=E,B=E+1,C=E+2;l=Pc(this,d,e,r,h,_,x,H,B,C),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function KM(s,e,i,r,l,c,d,p){let m;if(e.side===jn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===lr,p),m===null)return null;Oc.copy(p),Oc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Oc);return h<i.near||h>i.far?null:{distance:h,point:Oc.clone(),object:s}}function Pc(s,e,i,r,l,c,d,p,m,h){s.getVertexPosition(p,Dc),s.getVertexPosition(m,Uc),s.getVertexPosition(h,Nc);const _=KM(s,e,i,r,Dc,Uc,Nc,b_);if(_){const x=new oe;Ui.getBarycoord(b_,Dc,Uc,Nc,x),l&&(_.uv=Ui.getInterpolatedAttribute(l,p,m,h,x,new wt)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,p,m,h,x,new wt)),d&&(_.normal=Ui.getInterpolatedAttribute(d,p,m,h,x,new oe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new oe,materialIndex:0};Ui.getNormal(Dc,Uc,Nc,g.normal),_.face=g,_.barycoord=x}return _}class QM extends Fn{constructor(e=null,i=1,r=1,l,c,d,p,m,h=Dn,_=Dn,x,g){super(null,d,p,m,h,_,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new oe,JM=new oe,$M=new st;class Lr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=kd.subVectors(r,i).cross(JM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(kd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$M.getNormalMatrix(e),l=this.coplanarPoint(kd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new su,ey=new wt(.5,.5),Fc=new oe;class Vv{constructor(e=new Lr,i=new Lr,r=new Lr,l=new Lr,c=new Lr,d=new Lr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=qi,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],_=c[4],x=c[5],g=c[6],y=c[7],b=c[8],w=c[9],E=c[10],M=c[11],H=c[12],B=c[13],C=c[14],F=c[15];if(l[0].setComponents(h-d,y-_,M-b,F-H).normalize(),l[1].setComponents(h+d,y+_,M+b,F+H).normalize(),l[2].setComponents(h+p,y+x,M+w,F+B).normalize(),l[3].setComponents(h-p,y-x,M-w,F-B).normalize(),r)l[4].setComponents(m,g,E,C).normalize(),l[5].setComponents(h-m,y-g,M-E,F-C).normalize();else if(l[4].setComponents(h-m,y-g,M-E,F-C).normalize(),i===qi)l[5].setComponents(h+m,y+g,M+E,F+C).normalize();else if(i===eu)l[5].setComponents(m,g,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=ey.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Fc.x=l.normal.x>0?e.max.x:e.min.x,Fc.y=l.normal.y>0?e.max.y:e.min.y,Fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ty extends al{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T_=new fn,kh=new Bv,Ic=new su,zc=new oe;class ny extends Kn{constructor(e=new Mi,i=new ty){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,e.ray.intersectsSphere(Ic)===!1)return;T_.copy(l).invert(),kh.copy(e.ray).applyMatrix4(T_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,x=r.attributes.position;if(h!==null){const g=Math.max(0,d.start),y=Math.min(h.count,d.start+d.count);for(let b=g,w=y;b<w;b++){const E=h.getX(b);zc.fromBufferAttribute(x,E),A_(zc,E,m,l,e,i,this)}}else{const g=Math.max(0,d.start),y=Math.min(x.count,d.start+d.count);for(let b=g,w=y;b<w;b++)zc.fromBufferAttribute(x,b),A_(zc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function A_(s,e,i,r,l,c,d){const p=kh.distanceSqToPoint(s);if(p<i){const m=new oe;kh.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Gv extends Fn{constructor(e=[],i=zr,r,l,c,d,p,m,h,_){super(e,i,r,l,c,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vs extends Fn{constructor(e,i,r=ji,l,c,d,p=Dn,m=Dn,h,_=Aa,x=1){if(_!==Aa&&_!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,d,p,m,_,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class iy extends Vs{constructor(e,i=ji,r=zr,l,c,d=Dn,p=Dn,m,h=Aa){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,i,r,l,c,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rl extends Mi{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],_=[],x=[];let g=0,y=0;b("z","y","x",-1,-1,r,i,e,d,c,0),b("z","y","x",1,-1,r,i,-e,d,c,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(x,2));function b(w,E,M,H,B,C,F,N,O,T,L){const j=C/O,V=F/T,$=C/2,ge=F/2,pe=N/2,ee=O+1,I=T+1;let G=0,X=0;const le=new oe;for(let _e=0;_e<I;_e++){const D=_e*V-ge;for(let Q=0;Q<ee;Q++){const be=Q*j-$;le[w]=be*H,le[E]=D*B,le[M]=pe,h.push(le.x,le.y,le.z),le[w]=0,le[E]=0,le[M]=N>0?1:-1,_.push(le.x,le.y,le.z),x.push(Q/O),x.push(1-_e/T),G+=1}}for(let _e=0;_e<T;_e++)for(let D=0;D<O;D++){const Q=g+D+ee*_e,be=g+D+ee*(_e+1),Ce=g+(D+1)+ee*(_e+1),Ne=g+(D+1)+ee*_e;m.push(Q,be,Ne),m.push(be,Ce,Ne),X+=6}p.addGroup(y,X,L),y+=X,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sl extends Mi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,_=m+1,x=e/p,g=i/m,y=[],b=[],w=[],E=[];for(let M=0;M<_;M++){const H=M*g-d;for(let B=0;B<h;B++){const C=B*x-c;b.push(C,-H,0),w.push(0,0,1),E.push(B/p),E.push(1-M/m)}}for(let M=0;M<m;M++)for(let H=0;H<p;H++){const B=H+h*M,C=H+h*(M+1),F=H+1+h*(M+1),N=H+1+h*M;y.push(B,C,N),y.push(C,F,N)}this.setIndex(y),this.setAttribute("position",new Hn(b,3)),this.setAttribute("normal",new Hn(w,3)),this.setAttribute("uv",new Hn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}class rp extends Mi{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+p,Math.PI);let h=0;const _=[],x=new oe,g=new oe,y=[],b=[],w=[],E=[];for(let M=0;M<=r;M++){const H=[],B=M/r,C=d+B*p,F=e*Math.cos(C),N=Math.sqrt(e*e-F*F);let O=0;M===0&&d===0?O=.5/i:M===r&&m===Math.PI&&(O=-.5/i);for(let T=0;T<=i;T++){const L=T/i,j=l+L*c;x.x=-N*Math.cos(j),x.y=F,x.z=N*Math.sin(j),b.push(x.x,x.y,x.z),g.copy(x).normalize(),w.push(g.x,g.y,g.z),E.push(L+O,1-B),H.push(h++)}_.push(H)}for(let M=0;M<r;M++)for(let H=0;H<i;H++){const B=_[M][H+1],C=_[M][H],F=_[M+1][H],N=_[M+1][H+1];(M!==0||d>0)&&y.push(B,C,N),(M!==r-1||m<Math.PI)&&y.push(C,F,N)}this.setIndex(y),this.setAttribute("position",new Hn(b,3)),this.setAttribute("normal",new Hn(w,3)),this.setAttribute("uv",new Hn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Gs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(R_(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(R_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)e[l]=r[l]}return e}function R_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ay(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Xv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ry={clone:Gs,merge:Bn};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(l.value);break;case"v2":this.uniforms[r].value=new wt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new fn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ly extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cy extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uy extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(C_(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!C_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function C_(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class fy{constructor(e,i,r){const l=this;let c=!1,d=0,p=0,m;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){p++,c===!1&&l.onStart!==void 0&&l.onStart(_,d,p),c=!0},this.itemEnd=function(_){d++,l.onProgress!==void 0&&l.onProgress(_,d,p),d===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,x){return h.push(_,x),this},this.removeHandler=function(_){const x=h.indexOf(_);return x!==-1&&h.splice(x,2),this},this.getHandler=function(_){for(let x=0,g=h.length;x<g;x+=2){const y=h[x],b=h[x+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dy=new fy;class sp{constructor(e){this.manager=e!==void 0?e:dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Us=new WeakMap;class hy extends sp{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Xd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(d),c.manager.itemEnd(e)},0);else{let x=Us.get(d);x===void 0&&(x=[],Us.set(d,x)),x.push({onLoad:i,onError:l})}return d}const p=tl("img");function m(){_(),i&&i(this);const x=Us.get(this)||[];for(let g=0;g<x.length;g++){const y=x[g];y.onLoad&&y.onLoad(this)}Us.delete(this),c.manager.itemEnd(e)}function h(x){_(),l&&l(x),Xd.remove(`image:${e}`);const g=Us.get(this)||[];for(let y=0;y<g.length;y++){const b=g[y];b.onError&&b.onError(x)}Us.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){p.removeEventListener("load",m,!1),p.removeEventListener("error",h,!1)}return p.addEventListener("load",m,!1),p.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(p.crossOrigin=this.crossOrigin),Xd.add(`image:${e}`,p),c.manager.itemStart(e),p.src=e,p}}class py extends sp{constructor(e){super(e)}load(e,i,r,l){const c=new Fn,d=new hy(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(p){c.image=p,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}const Bc=new oe,Hc=new Ws,Gi=new oe;class Wv extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bc,Hc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Hc,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Bc,Hc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Hc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new oe,w_=new wt,D_=new wt;class Di extends Wv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,i){return this.getViewBounds(e,w_,D_),i.subVectors(D_,w_)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Qo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class op extends Wv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ns=-90,Ls=1;class my extends Kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Ns,Ls,e,i);l.layers=this.layers,this.add(l);const c=new Di(Ns,Ls,e,i);c.layers=this.layers,this.add(c);const d=new Di(Ns,Ls,e,i);d.layers=this.layers,this.add(d);const p=new Di(Ns,Ls,e,i);p.layers=this.layers,this.add(p);const m=new Di(Ns,Ls,e,i);m.layers=this.layers,this.add(m);const h=new Di(Ns,Ls,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(x,g,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class gy extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dp=class dp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};dp.prototype.isMatrix2=!0;let U_=dp;function N_(s,e,i,r){const l=_y(r);switch(i){case Dv:return s*e;case Nv:return s*e/l.components*l.byteLength;case Jh:return s*e/l.components*l.byteLength;case Br:return s*e*2/l.components*l.byteLength;case $h:return s*e*2/l.components*l.byteLength;case Uv:return s*e*3/l.components*l.byteLength;case Ni:return s*e*4/l.components*l.byteLength;case ep:return s*e*4/l.components*l.byteLength;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(s,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(s,8)*Math.max(e,8)/2;case _h:case vh:case Sh:case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xh:case Kc:case yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ih:case zh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hh:case Vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Qc:case Gh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _y(s){switch(s){case Si:case Av:return{byteLength:1,components:1};case $o:case Rv:case Ta:return{byteLength:2,components:1};case Kh:case Qh:return{byteLength:2,components:4};case ji:case jh:case Wi:return{byteLength:4,components:1};case Cv:case wv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qv(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function vy(s){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,x=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,_),p.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function r(p,m,h){const _=m.array,x=m.updateRanges;if(s.bindBuffer(h,p),x.length===0)s.bufferSubData(h,0,_);else{x.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<x.length;y++){const b=x[g],w=x[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,b=x.length;y<b;y++){const w=x[y];s.bufferSubData(h,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ty=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ry=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ly=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_E=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ab=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:xy,alphahash_pars_fragment:Sy,alphamap_fragment:My,alphamap_pars_fragment:yy,alphatest_fragment:Ey,alphatest_pars_fragment:by,aomap_fragment:Ty,aomap_pars_fragment:Ay,batching_pars_vertex:Ry,batching_vertex:Cy,begin_vertex:wy,beginnormal_vertex:Dy,bsdfs:Uy,iridescence_fragment:Ny,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Oy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Fy,clipping_planes_vertex:Iy,color_fragment:zy,color_pars_fragment:By,color_pars_vertex:Hy,color_vertex:Vy,common:Gy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:Xy,displacementmap_pars_vertex:Wy,displacementmap_vertex:qy,emissivemap_fragment:Yy,emissivemap_pars_fragment:Zy,colorspace_fragment:jy,colorspace_pars_fragment:Ky,envmap_fragment:Qy,envmap_common_pars_fragment:Jy,envmap_pars_fragment:$y,envmap_pars_vertex:eE,envmap_physical_pars_fragment:fE,envmap_vertex:tE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:aE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:oE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:dE,lights_toon_pars_fragment:hE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:_E,lights_fragment_begin:vE,lights_fragment_maps:xE,lights_fragment_end:SE,lightprobes_pars_fragment:ME,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:TE,map_fragment:AE,map_pars_fragment:RE,map_particle_fragment:CE,map_particle_pars_fragment:wE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:UE,morphinstance_vertex:NE,morphcolor_vertex:LE,morphnormal_vertex:OE,morphtarget_pars_vertex:PE,morphtarget_vertex:FE,normal_fragment_begin:IE,normal_fragment_maps:zE,normal_pars_fragment:BE,normal_pars_vertex:HE,normal_vertex:VE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:ZE,premultiplied_alpha_fragment:jE,project_vertex:KE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:ab,skinbase_vertex:rb,skinning_pars_vertex:sb,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:fb,tonemapping_pars_fragment:db,transmission_fragment:hb,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:_b,worldpos_vertex:vb,background_vert:xb,background_frag:Sb,backgroundCube_vert:Mb,backgroundCube_frag:yb,cube_vert:Eb,cube_frag:bb,depth_vert:Tb,depth_frag:Ab,distance_vert:Rb,distance_frag:Cb,equirect_vert:wb,equirect_frag:Db,linedashed_vert:Ub,linedashed_frag:Nb,meshbasic_vert:Lb,meshbasic_frag:Ob,meshlambert_vert:Pb,meshlambert_frag:Fb,meshmatcap_vert:Ib,meshmatcap_frag:zb,meshnormal_vert:Bb,meshnormal_frag:Hb,meshphong_vert:Vb,meshphong_frag:Gb,meshphysical_vert:kb,meshphysical_frag:Xb,meshtoon_vert:Wb,meshtoon_frag:qb,points_vert:Yb,points_frag:Zb,shadow_vert:jb,shadow_frag:Kb,sprite_vert:Qb,sprite_frag:Jb},Ie={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Xi={basic:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Bn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Bn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Bn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Nt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Bn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Bn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Bn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Bn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Bn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Bn([Ie.common,Ie.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Bn([Ie.lights,Ie.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Xi.physical={uniforms:Bn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Vc={r:0,b:0,g:0},$b=new fn,Yv=new st;Yv.set(-1,0,0,0,1,0,0,0,1);function eT(s,e,i,r,l,c){const d=new Nt(0);let p=l===!0?0:1,m,h,_=null,x=0,g=null;function y(H){let B=H.isScene===!0?H.background:null;if(B&&B.isTexture){const C=H.backgroundBlurriness>0;B=e.get(B,C)}return B}function b(H){let B=!1;const C=y(H);C===null?E(d,p):C&&C.isColor&&(E(C,1),B=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(H,B){const C=y(B);C&&(C.isCubeTexture||C.mapping===ru)?(h===void 0&&(h=new Oi(new rl(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Gs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($b.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Yv),h.material.toneMapped=Et.getTransfer(C.colorSpace)!==Vt,(_!==C||x!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=C,x=C.version,g=s.toneMapping),h.layers.enableAll(),H.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Oi(new sl(2,2),new ui({name:"BackgroundMaterial",uniforms:Gs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Et.getTransfer(C.colorSpace)!==Vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||x!==C.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=C,x=C.version,g=s.toneMapping),m.layers.enableAll(),H.unshift(m,m.geometry,m.material,0,0,null))}function E(H,B){H.getRGB(Vc,Xv(s)),i.buffers.color.setClear(Vc.r,Vc.g,Vc.b,B,c)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(H,B=1){d.set(H),p=B,E(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(H){p=H,E(d,p)},render:b,addToRenderList:w,dispose:M}}function tT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(V,$,ge,pe,ee){let I=!1;const G=x(V,pe,ge,$);c!==G&&(c=G,h(c.object)),I=y(V,pe,ge,ee),I&&b(V,pe,ge,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,C(V,$,ge,pe),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function m(){return s.createVertexArray()}function h(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function x(V,$,ge,pe){const ee=pe.wireframe===!0;let I=r[$.id];I===void 0&&(I={},r[$.id]=I);const G=V.isInstancedMesh===!0?V.id:0;let X=I[G];X===void 0&&(X={},I[G]=X);let le=X[ge.id];le===void 0&&(le={},X[ge.id]=le);let _e=le[ee];return _e===void 0&&(_e=g(m()),le[ee]=_e),_e}function g(V){const $=[],ge=[],pe=[];for(let ee=0;ee<i;ee++)$[ee]=0,ge[ee]=0,pe[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ge,attributeDivisors:pe,object:V,attributes:{},index:null}}function y(V,$,ge,pe){const ee=c.attributes,I=$.attributes;let G=0;const X=ge.getAttributes();for(const le in X)if(X[le].location>=0){const D=ee[le];let Q=I[le];if(Q===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),D===void 0||D.attribute!==Q||Q&&D.data!==Q.data)return!0;G++}return c.attributesNum!==G||c.index!==pe}function b(V,$,ge,pe){const ee={},I=$.attributes;let G=0;const X=ge.getAttributes();for(const le in X)if(X[le].location>=0){let D=I[le];D===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(D=V.instanceColor));const Q={};Q.attribute=D,D&&D.data&&(Q.data=D.data),ee[le]=Q,G++}c.attributes=ee,c.attributesNum=G,c.index=pe}function w(){const V=c.newAttributes;for(let $=0,ge=V.length;$<ge;$++)V[$]=0}function E(V){M(V,0)}function M(V,$){const ge=c.newAttributes,pe=c.enabledAttributes,ee=c.attributeDivisors;ge[V]=1,pe[V]===0&&(s.enableVertexAttribArray(V),pe[V]=1),ee[V]!==$&&(s.vertexAttribDivisor(V,$),ee[V]=$)}function H(){const V=c.newAttributes,$=c.enabledAttributes;for(let ge=0,pe=$.length;ge<pe;ge++)$[ge]!==V[ge]&&(s.disableVertexAttribArray(ge),$[ge]=0)}function B(V,$,ge,pe,ee,I,G){G===!0?s.vertexAttribIPointer(V,$,ge,ee,I):s.vertexAttribPointer(V,$,ge,pe,ee,I)}function C(V,$,ge,pe){w();const ee=pe.attributes,I=ge.getAttributes(),G=$.defaultAttributeValues;for(const X in I){const le=I[X];if(le.location>=0){let _e=ee[X];if(_e===void 0&&(X==="instanceMatrix"&&V.instanceMatrix&&(_e=V.instanceMatrix),X==="instanceColor"&&V.instanceColor&&(_e=V.instanceColor)),_e!==void 0){const D=_e.normalized,Q=_e.itemSize,be=e.get(_e);if(be===void 0)continue;const Ce=be.buffer,Ne=be.type,ne=be.bytesPerElement,Me=Ne===s.INT||Ne===s.UNSIGNED_INT||_e.gpuType===jh;if(_e.isInterleavedBufferAttribute){const Ee=_e.data,Be=Ee.stride,tt=_e.offset;if(Ee.isInstancedInterleavedBuffer){for(let je=0;je<le.locationSize;je++)M(le.location+je,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let je=0;je<le.locationSize;je++)E(le.location+je);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let je=0;je<le.locationSize;je++)B(le.location+je,Q/le.locationSize,Ne,D,Be*ne,(tt+Q/le.locationSize*je)*ne,Me)}else{if(_e.isInstancedBufferAttribute){for(let Ee=0;Ee<le.locationSize;Ee++)M(le.location+Ee,_e.meshPerAttribute);V.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ee=0;Ee<le.locationSize;Ee++)E(le.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Ee=0;Ee<le.locationSize;Ee++)B(le.location+Ee,Q/le.locationSize,Ne,D,Q*ne,Q/le.locationSize*Ee*ne,Me)}}else if(G!==void 0){const D=G[X];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(le.location,D);break;case 3:s.vertexAttrib3fv(le.location,D);break;case 4:s.vertexAttrib4fv(le.location,D);break;default:s.vertexAttrib1fv(le.location,D)}}}}H()}function F(){L();for(const V in r){const $=r[V];for(const ge in $){const pe=$[ge];for(const ee in pe){const I=pe[ee];for(const G in I)_(I[G].object),delete I[G];delete pe[ee]}}delete r[V]}}function N(V){if(r[V.id]===void 0)return;const $=r[V.id];for(const ge in $){const pe=$[ge];for(const ee in pe){const I=pe[ee];for(const G in I)_(I[G].object),delete I[G];delete pe[ee]}}delete r[V.id]}function O(V){for(const $ in r){const ge=r[$];for(const pe in ge){const ee=ge[pe];if(ee[V.id]===void 0)continue;const I=ee[V.id];for(const G in I)_(I[G].object),delete I[G];delete ee[V.id]}}}function T(V){for(const $ in r){const ge=r[$],pe=V.isInstancedMesh===!0?V.id:0,ee=ge[pe];if(ee!==void 0){for(const I in ee){const G=ee[I];for(const X in G)_(G[X].object),delete G[X];delete ee[I]}delete ge[pe],Object.keys(ge).length===0&&delete r[$]}}}function L(){j(),d=!0,c!==l&&(c=l,h(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:j,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:E,disableUnusedAttributes:H}}function nT(s,e,i){let r;function l(m){r=m}function c(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,_){_!==0&&(s.drawArraysInstanced(r,m,h,_),i.update(h,r,_))}function p(m,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,_);let g=0;for(let y=0;y<_;y++)g+=h[y];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function iT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Ni&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const T=O===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Wi&&!T)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(it("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),H=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:E,maxAttributes:M,maxVertexUniforms:H,maxVaryings:B,maxFragmentUniforms:C,maxSamples:F,samples:N}}function aT(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Lr,p=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||r!==0||l;return l=g,r=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const b=x.clippingPlanes,w=x.clipIntersection,E=x.clipShadows,M=s.get(x);if(!l||b===null||b.length===0||c&&!E)c?_(null):h();else{const H=c?0:r,B=H*4;let C=M.clippingState||null;m.value=C,C=_(b,g,B,y);for(let F=0;F!==B;++F)C[F]=i[F];M.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=H}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,g,y,b){const w=x!==null?x.length:0;let E=null;if(w!==0){if(E=m.value,b!==!0||E===null){const M=y+w*4,H=g.matrixWorldInverse;p.getNormalMatrix(H),(E===null||E.length<M)&&(E=new Float32Array(M));for(let B=0,C=y;B!==w;++B,C+=4)d.copy(x[B]).applyMatrix4(H,p),d.normal.toArray(E,C),E[C+3]=d.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,E}}const or=4,L_=[.125,.215,.35,.446,.526,.582],Pr=20,rT=256,Xo=new op,O_=new Nt;let Wd=null,qd=0,Yd=0,Zd=!1;const sT=new oe;class P_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=sT}=c;Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,qd,Yd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zr||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),qd=this._renderer.getActiveCubeFace(),Yd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ta,format:Ni,colorSpace:Jc,depthBuffer:!1},l=F_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oT(c)),this._blurMaterial=cT(c,e,i),this._ggxMaterial=lT(c,e,i)}return l}_compileMaterial(e){const i=new Oi(new Mi,e);this._renderer.compile(i,Xo)}_sceneToCubeUV(e,i,r,l,c){const m=new Di(90,1,i,r),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(O_),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oi(new rl,new Hv({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,E=w.material;let M=!1;const H=e.background;H?H.isColor&&(E.color.copy(H),e.background=null,M=!0):(E.color.copy(O_),M=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[B],c.y,c.z)):C===1?(m.up.set(0,0,h[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[B],c.z)):(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[B]));const F=this._cubeSize;Os(l,C*F,B>2?F:0,F,F),x.setRenderTarget(l),M&&x.render(w,m),x.render(e,m)}x.toneMapping=y,x.autoClear=g,e.background=H}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zr||e.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Os(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Xo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-_*_),g=0+h*1.25,y=x*g,{_lodMax:b}=this,w=this._sizeLods[r],E=3*w*(r>b-or?r-b+or:0),M=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=b-i,Os(c,E,M,3*w,2*w),l.setRenderTarget(c),l.render(p,Xo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Os(e,E,M,3*w,2*w),l.setRenderTarget(e),l.render(p,Xo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=h;const g=h.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Pr-1),w=c/b,E=isFinite(c)?1+Math.floor(_*w):Pr;E>Pr&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Pr}`);const M=[];let H=0;for(let O=0;O<Pr;++O){const T=O/w,L=Math.exp(-T*T/2);M.push(L),O===0?H+=L:O<E&&(H+=2*L)}for(let O=0;O<M.length;O++)M[O]=M[O]/H;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=M,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=b,g.mipInt.value=B-r;const C=this._sizeLods[l],F=3*C*(l>B-or?l-B+or:0),N=4*(this._cubeSize-C);Os(i,F,N,3*C,2*C),m.setRenderTarget(i),m.render(x,Xo)}}function oT(s){const e=[],i=[],r=[];let l=s;const c=s-or+1+L_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-or?m=L_[d-s+or-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,x=1+h,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,b=6,w=3,E=2,M=1,H=new Float32Array(w*b*y),B=new Float32Array(E*b*y),C=new Float32Array(M*b*y);for(let N=0;N<y;N++){const O=N%3*2/3-1,T=N>2?0:-1,L=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];H.set(L,w*b*N),B.set(g,E*b*N);const j=[N,N,N,N,N,N];C.set(j,M*b*N)}const F=new Mi;F.setAttribute("position",new Li(H,w)),F.setAttribute("uv",new Li(B,E)),F.setAttribute("faceIndex",new Li(C,M)),r.push(new Oi(F,null)),l>or&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function F_(s,e,i){const r=new Zi(s,e,i);return r.texture.mapping=ru,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Os(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function lT(s,e,i){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function cT(s,e,i){const r=new Float32Array(Pr),l=new oe(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function I_(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function z_(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zv extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Gv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new rl(5,5,5),c=new ui({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ea});c.uniforms.tEquirect.value=i;const d=new Oi(l,c),p=i.minFilter;return i.minFilter===Fr&&(i.minFilter=Pn),new my(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function uT(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,y=!1){return g==null?null:y?d(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===xd||y===Sd)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new Zv(b.height);return w.fromEquirectangularTexture(s,g),e.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,b=y===xd||y===Sd,w=y===zr||y===Hs;if(b||w){let E=i.get(g);const M=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return r===null&&(r=new P_(s)),E=b?r.fromEquirectangular(g,E):r.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const H=g.image;return b&&H&&H.height>0||w&&H&&m(H)?(r===null&&(r=new P_(s)),E=b?r.fromEquirectangular(g):r.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",_),E.texture):null}}}return g}function p(g,y){return y===xd?g.mapping=zr:y===Sd&&(g.mapping=Hs),g}function m(g){let y=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&y++;return y===b}function h(g){const y=g.target;y.removeEventListener("dispose",h);const b=e.get(y);b!==void 0&&(e.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function fT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Is("WebGLRenderer: "+r+" extension not supported."),l}}}function dT(s,e,i,r){const l={},c=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function h(x){const g=[],y=x.index,b=x.attributes.position;let w=0;if(b===void 0)return;if(y!==null){const H=y.array;w=y.version;for(let B=0,C=H.length;B<C;B+=3){const F=H[B+0],N=H[B+1],O=H[B+2];g.push(F,N,N,O,O,F)}}else{const H=b.array;w=b.version;for(let B=0,C=H.length/3-1;B<C;B+=3){const F=B+0,N=B+1,O=B+2;g.push(F,N,N,O,O,F)}}const E=new(b.count>=65535?zv:Iv)(g,1);E.version=w;const M=c.get(x);M&&e.remove(M),c.set(x,E)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:_}}function hT(s,e,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,g){s.drawElements(r,g,c,x*d),i.update(g,r,1)}function h(x,g,y){y!==0&&(s.drawElementsInstanced(r,g,c,x*d,y),i.update(g,r,y))}function _(x,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,y);let w=0;for(let E=0;E<y;E++)w+=g[E];i.update(w,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_}function pT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:Tt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function mT(s,e,i){const r=new WeakMap,l=new ln;function c(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=_!==void 0?_.length:0;let g=r.get(p);if(g===void 0||g.count!==x){let j=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",j)};var y=j;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,E=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],H=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),E===!0&&(C=3);let F=p.attributes.position.count*C,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*N*4*x),T=new Ov(O,F,N,x);T.type=Wi,T.needsUpdate=!0;const L=C*4;for(let V=0;V<x;V++){const $=M[V],ge=H[V],pe=B[V],ee=F*N*4*V;for(let I=0;I<$.count;I++){const G=I*L;b===!0&&(l.fromBufferAttribute($,I),O[ee+G+0]=l.x,O[ee+G+1]=l.y,O[ee+G+2]=l.z,O[ee+G+3]=0),w===!0&&(l.fromBufferAttribute(ge,I),O[ee+G+4]=l.x,O[ee+G+5]=l.y,O[ee+G+6]=l.z,O[ee+G+7]=0),E===!0&&(l.fromBufferAttribute(pe,I),O[ee+G+8]=l.x,O[ee+G+9]=l.y,O[ee+G+10]=l.z,O[ee+G+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new wt(F,N)},r.set(p,g),p.addEventListener("dispose",j)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let E=0;E<h.length;E++)b+=h[E];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function gT(s,e,i,r,l){let c=new WeakMap;function d(h){const _=l.render.frame,x=h.geometry,g=e.get(h,x);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const _T={[xv]:"LINEAR_TONE_MAPPING",[Sv]:"REINHARD_TONE_MAPPING",[Mv]:"CINEON_TONE_MAPPING",[Zh]:"ACES_FILMIC_TONE_MAPPING",[Ev]:"AGX_TONE_MAPPING",[bv]:"NEUTRAL_TONE_MAPPING",[yv]:"CUSTOM_TONE_MAPPING"};function vT(s,e,i,r,l,c){const d=new Zi(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Vs(e,i):void 0}),p=new Zi(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),m=new Mi;m.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const h=new ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Oi(m,h),x=new op(-1,1,1,-1,0,1);let g=null,y=null,b=!1,w,E=null,M=[],H=!1;this.setSize=function(B,C){d.setSize(B,C),p.setSize(B,C);for(let F=0;F<M.length;F++){const N=M[F];N.setSize&&N.setSize(B,C)}},this.setEffects=function(B){M=B,H=M.length>0&&M[0].isRenderPass===!0;const C=d.width,F=d.height;for(let N=0;N<M.length;N++){const O=M[N];O.setSize&&O.setSize(C,F)}},this.begin=function(B,C){if(b||B.toneMapping===Yi&&M.length===0)return!1;if(E=C,C!==null){const F=C.width,N=C.height;(d.width!==F||d.height!==N)&&this.setSize(F,N)}return H===!1&&B.setRenderTarget(d),w=B.toneMapping,B.toneMapping=Yi,!0},this.hasRenderPass=function(){return H},this.end=function(B,C){B.toneMapping=w,b=!0;let F=d,N=p;for(let O=0;O<M.length;O++){const T=M[O];if(T.enabled!==!1&&(T.render(B,N,F,C),T.needsSwap!==!1)){const L=F;F=N,N=L}}if(g!==B.outputColorSpace||y!==B.toneMapping){g=B.outputColorSpace,y=B.toneMapping,h.defines={},Et.getTransfer(g)===Vt&&(h.defines.SRGB_TRANSFER="");const O=_T[y];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=F.texture,B.setRenderTarget(E),B.render(_,x),E=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const jv=new Fn,Xh=new Vs(1,1),Kv=new Ov,Qv=new IM,Jv=new Gv,B_=[],H_=[],V_=new Float32Array(16),G_=new Float32Array(9),k_=new Float32Array(4);function qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=B_[l];if(c===void 0&&(c=new Float32Array(l),B_[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(c,p)}return c}function Mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function lu(s,e){let i=H_[e];i===void 0&&(i=new Int32Array(e),H_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function xT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function ST(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function MT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function yT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function ET(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;k_.set(r),s.uniformMatrix2fv(this.addr,!1,k_),yn(i,r)}}function bT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;G_.set(r),s.uniformMatrix3fv(this.addr,!1,G_),yn(i,r)}}function TT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,r))return;V_.set(r),s.uniformMatrix4fv(this.addr,!1,V_),yn(i,r)}}function AT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function RT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function CT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function wT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function DT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function UT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function NT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function LT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function OT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Xh.compareFunction=i.isReversedDepthBuffer()?np:tp,c=Xh):c=jv,i.setTexture2D(e||c,l)}function PT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Qv,l)}function FT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Jv,l)}function IT(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Kv,l)}function zT(s){switch(s){case 5126:return xT;case 35664:return ST;case 35665:return MT;case 35666:return yT;case 35674:return ET;case 35675:return bT;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return wT;case 5125:return DT;case 36294:return UT;case 36295:return NT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return IT}}function BT(s,e){s.uniform1fv(this.addr,e)}function HT(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function VT(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function GT(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function kT(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function XT(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function WT(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function qT(s,e){s.uniform1iv(this.addr,e)}function YT(s,e){s.uniform2iv(this.addr,e)}function ZT(s,e){s.uniform3iv(this.addr,e)}function jT(s,e){s.uniform4iv(this.addr,e)}function KT(s,e){s.uniform1uiv(this.addr,e)}function QT(s,e){s.uniform2uiv(this.addr,e)}function JT(s,e){s.uniform3uiv(this.addr,e)}function $T(s,e){s.uniform4uiv(this.addr,e)}function e2(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Xh:d=jv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function t2(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Qv,c[d])}function n2(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Jv,c[d])}function i2(s,e,i){const r=this.cache,l=e.length,c=lu(i,l);Mn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Kv,c[d])}function a2(s){switch(s){case 5126:return BT;case 35664:return HT;case 35665:return VT;case 35666:return GT;case 35674:return kT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return ZT;case 35669:case 35673:return jT;case 5125:return KT;case 36294:return QT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}class r2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=zT(i.type)}}class s2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=a2(i.type)}}class o2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function X_(s,e){s.seq.push(e),s.map[e.id]=e}function l2(s,e,i){const r=s.name,l=r.length;for(jd.lastIndex=0;;){const c=jd.exec(r),d=jd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){X_(i,h===void 0?new r2(p,s,e):new s2(p,s,e));break}else{let x=i.map[p];x===void 0&&(x=new o2(p),X_(i,x)),i=x}}}class Zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);l2(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function W_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const c2=37297;let u2=0;function f2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const q_=new st;function d2(s){Et._getMatrix(q_,Et.workingColorSpace,s);const e=`mat3( ${q_.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(s)){case $c:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Y_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+f2(s.getShaderSource(e),p)}else return c}function h2(s,e){const i=d2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const p2={[xv]:"Linear",[Sv]:"Reinhard",[Mv]:"Cineon",[Zh]:"ACESFilmic",[Ev]:"AgX",[bv]:"Neutral",[yv]:"Custom"};function m2(s,e){const i=p2[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new oe;function g2(){Et.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),e=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function v2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function x2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function jo(s){return s!==""}function Z_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function j_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(S2,y2)}const M2=new Map;function y2(s,e){let i=dt[e];if(i===void 0){const r=M2.get(e);if(r!==void 0)i=dt[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wh(i)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(s){return s.replace(E2,b2)}function b2(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const T2={[kc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function A2(s){return T2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R2={[zr]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function C2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":R2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const w2={[Hs]:"ENVMAP_MODE_REFRACTION"};function D2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":w2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const U2={[vv]:"ENVMAP_BLENDING_MULTIPLY",[tM]:"ENVMAP_BLENDING_MIX",[nM]:"ENVMAP_BLENDING_ADD"};function N2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":U2[s.combine]||"ENVMAP_BLENDING_NONE"}function L2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function O2(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=A2(i),h=C2(i),_=D2(i),x=N2(i),g=L2(i),y=_2(i),b=v2(c),w=l.createProgram();let E,M,H=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),E.length>0&&(E+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(jo).join(`
`),M.length>0&&(M+=`
`)):(E=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),M=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?m2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,h2("linearToOutputTexel",i.outputColorSpace),g2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),d=Wh(d),d=Z_(d,i),d=j_(d,i),p=Wh(p),p=Z_(p,i),p=j_(p,i),d=K_(d),p=K_(p),i.isRawShaderMaterial!==!0&&(H=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,M=["#define varying in",i.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const B=H+E+d,C=H+M+p,F=W_(l,l.VERTEX_SHADER,B),N=W_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,F),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function O(V){if(s.debug.checkShaderErrors){const $=l.getProgramInfoLog(w)||"",ge=l.getShaderInfoLog(F)||"",pe=l.getShaderInfoLog(N)||"",ee=$.trim(),I=ge.trim(),G=pe.trim();let X=!0,le=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,F,N);else{const _e=Y_(l,F,"vertex"),D=Y_(l,N,"fragment");Tt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ee+`
`+_e+`
`+D)}else ee!==""?it("WebGLProgram: Program Info Log:",ee):(I===""||G==="")&&(le=!1);le&&(V.diagnostics={runnable:X,programLog:ee,vertexShader:{log:I,prefix:E},fragmentShader:{log:G,prefix:M}})}l.deleteShader(F),l.deleteShader(N),T=new Zc(l,w),L=x2(l,w)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=l.getProgramParameter(w,c2)),j},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=u2++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=N,this}let P2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new I2(e),i.set(e,r)),r}}class I2{constructor(e){this.id=P2++,this.code=e,this.usedTimes=0}}function z2(s){return s===Br||s===Kc||s===Qc}function B2(s,e,i,r,l,c){const d=new Pv,p=new F2,m=new Set,h=[],_=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,j,V,$,ge){const pe=V.fog,ee=$.geometry,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,X=e.get(T.envMap||I,G),le=X&&X.mapping===ru?X.image.height:null,_e=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&it("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const D=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Q=D!==void 0?D.length:0;let be=0;ee.morphAttributes.position!==void 0&&(be=1),ee.morphAttributes.normal!==void 0&&(be=2),ee.morphAttributes.color!==void 0&&(be=3);let Ce,Ne,ne,Me;if(_e){const ke=Xi[_e];Ce=ke.vertexShader,Ne=ke.fragmentShader}else{Ce=T.vertexShader,Ne=T.fragmentShader;const ke=p.getVertexShaderStage(T),$t=p.getFragmentShaderStage(T);p.update(T,ke,$t),ne=ke.id,Me=$t.id}const Ee=s.getRenderTarget(),Be=s.state.buffers.depth.getReversed(),tt=$.isInstancedMesh===!0,je=$.isBatchedMesh===!0,Gt=!!T.map,ot=!!T.matcap,ht=!!X,pt=!!T.aoMap,ft=!!T.lightMap,jt=!!T.bumpMap&&T.wireframe===!1,qt=!!T.normalMap,Kt=!!T.displacementMap,an=!!T.emissiveMap,Ot=!!T.metalnessMap,rn=!!T.roughnessMap,Z=T.anisotropy>0,Dt=T.clearcoat>0,vt=T.dispersion>0,U=T.iridescence>0,S=T.sheen>0,q=T.transmission>0,te=Z&&!!T.anisotropyMap,fe=Dt&&!!T.clearcoatMap,Ae=Dt&&!!T.clearcoatNormalMap,Ue=Dt&&!!T.clearcoatRoughnessMap,he=U&&!!T.iridescenceMap,me=U&&!!T.iridescenceThicknessMap,Re=S&&!!T.sheenColorMap,He=S&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,Le=!!T.specularColorMap,Qe=!!T.specularIntensityMap,Je=q&&!!T.transmissionMap,at=q&&!!T.thicknessMap,Y=!!T.gradientMap,we=!!T.alphaMap,xe=T.alphaTest>0,De=!!T.alphaHash,ze=!!T.extensions;let Te=Yi;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Ye={shaderID:_e,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Ne,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:je,batchingColor:je&&$._colorsTexture!==null,instancing:tt,instancingColor:tt&&$.instanceColor!==null,instancingMorph:tt&&$.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Gt,matcap:ot,envMap:ht,envMapMode:ht&&X.mapping,envMapCubeUVHeight:le,aoMap:pt,lightMap:ft,bumpMap:jt,normalMap:qt,displacementMap:Kt,emissiveMap:an,normalMapObjectSpace:qt&&T.normalMapType===rM,normalMapTangentSpace:qt&&T.normalMapType===a_,packedNormalMap:qt&&T.normalMapType===a_&&z2(T.normalMap.format),metalnessMap:Ot,roughnessMap:rn,anisotropy:Z,anisotropyMap:te,clearcoat:Dt,clearcoatMap:fe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ue,dispersion:vt,iridescence:U,iridescenceMap:he,iridescenceThicknessMap:me,sheen:S,sheenColorMap:Re,sheenRoughnessMap:He,specularMap:Pe,specularColorMap:Le,specularIntensityMap:Qe,transmission:q,transmissionMap:Je,thicknessMap:at,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Fs&&T.alphaToCoverage===!1,alphaMap:we,alphaTest:xe,alphaHash:De,combine:T.combine,mapUv:Gt&&b(T.map.channel),aoMapUv:pt&&b(T.aoMap.channel),lightMapUv:ft&&b(T.lightMap.channel),bumpMapUv:jt&&b(T.bumpMap.channel),normalMapUv:qt&&b(T.normalMap.channel),displacementMapUv:Kt&&b(T.displacementMap.channel),emissiveMapUv:an&&b(T.emissiveMap.channel),metalnessMapUv:Ot&&b(T.metalnessMap.channel),roughnessMapUv:rn&&b(T.roughnessMap.channel),anisotropyMapUv:te&&b(T.anisotropyMap.channel),clearcoatMapUv:fe&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:He&&b(T.sheenRoughnessMap.channel),specularMapUv:Pe&&b(T.specularMap.channel),specularColorMapUv:Le&&b(T.specularColorMap.channel),specularIntensityMapUv:Qe&&b(T.specularIntensityMap.channel),transmissionMapUv:Je&&b(T.transmissionMap.channel),thicknessMapUv:at&&b(T.thicknessMap.channel),alphaMapUv:we&&b(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(qt||Z),vertexNormals:!!ee.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ee.attributes.uv&&(Gt||we),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&qt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Be,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:be,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ge.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Gt&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:an&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function E(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const j in T.defines)L.push(j),L.push(T.defines[j]);return T.isRawShaderMaterial===!1&&(M(L,T),H(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function M(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function H(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function B(T){const L=y[T.type];let j;if(L){const V=Xi[L];j=ry.clone(V.uniforms)}else j=T.uniforms;return j}function C(T,L){let j=_.get(L);return j!==void 0?++j.usedTimes:(j=new O2(s,L,T,l),h.push(j),_.set(L,j)),j}function F(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){p.remove(T)}function O(){p.dispose()}return{getParameters:w,getProgramCacheKey:E,getUniforms:B,acquireProgram:C,releaseProgram:F,releaseShaderCache:N,programs:h,dispose:O}}function H2(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function V2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function J_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,w,E,M){let H=s[e];return H===void 0?(H={id:g.id,object:g,geometry:y,material:b,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:E,group:M},s[e]=H):(H.id=g.id,H.object=g,H.geometry=y,H.material=b,H.materialVariant=d(g),H.groupOrder=w,H.renderOrder=g.renderOrder,H.z=E,H.group=M),e++,H}function m(g,y,b,w,E,M){const H=p(g,y,b,w,E,M);b.transmission>0?r.push(H):b.transparent===!0?l.push(H):i.push(H)}function h(g,y,b,w,E,M){const H=p(g,y,b,w,E,M);b.transmission>0?r.unshift(H):b.transparent===!0?l.unshift(H):i.unshift(H)}function _(g,y,b){i.length>1&&i.sort(g||V2),r.length>1&&r.sort(y||J_),l.length>1&&l.sort(y||J_),b&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,y=s.length;g<y;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:x,sort:_}}function G2(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new $_,s.set(r,[d])):l>=c.length?(d=new $_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function k2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Nt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function X2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let W2=0;function q2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Y2(s){const e=new k2,i=X2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new oe);const l=new oe,c=new fn,d=new fn;function p(h){let _=0,x=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,b=0,w=0,E=0,M=0,H=0,B=0,C=0,F=0,N=0,O=0;h.sort(q2);for(let L=0,j=h.length;L<j;L++){const V=h[L],$=V.color,ge=V.intensity,pe=V.distance;let ee=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Br?ee=V.shadow.map.texture:ee=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=$.r*ge,x+=$.g*ge,g+=$.b*ge;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],ge);O++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,X=i.get(V);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,r.directionalShadow[y]=X,r.directionalShadowMap[y]=ee,r.directionalShadowMatrix[y]=V.shadow.matrix,H++}r.directional[y]=I,y++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy($).multiplyScalar(ge),I.distance=pe,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[w]=I;const G=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,G.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[w]=G.matrix,V.castShadow){const X=i.get(V);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,r.spotShadow[w]=X,r.spotShadowMap[w]=ee,C++}w++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy($).multiplyScalar(ge),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[E]=I,E++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const G=V.shadow,X=i.get(V);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,r.pointShadow[b]=X,r.pointShadowMap[b]=ee,r.pointShadowMatrix[b]=V.shadow.matrix,B++}r.point[b]=I,b++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(ge),I.groundColor.copy(V.groundColor).multiplyScalar(ge),r.hemi[M]=I,M++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==E||T.hemiLength!==M||T.numDirectionalShadows!==H||T.numPointShadows!==B||T.numSpotShadows!==C||T.numSpotMaps!==F||T.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=E,r.point.length=b,r.hemi.length=M,r.directionalShadow.length=H,r.directionalShadowMap.length=H,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=H,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=C+F-N,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,T.directionalLength=y,T.pointLength=b,T.spotLength=w,T.rectAreaLength=E,T.hemiLength=M,T.numDirectionalShadows=H,T.numPointShadows=B,T.numSpotShadows=C,T.numSpotMaps=F,T.numLightProbes=O,r.version=W2++)}function m(h,_){let x=0,g=0,y=0,b=0,w=0;const E=_.matrixWorldInverse;for(let M=0,H=h.length;M<H;M++){const B=h[M];if(B.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),x++}else if(B.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(E),y++}else if(B.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),d.identity(),c.copy(B.matrixWorld),c.premultiply(E),d.extractRotation(c),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),b++}else if(B.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(E),g++}else if(B.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(E),w++}}}return{setup:p,setupView:m,state:r}}function ev(s){const e=new Y2(s),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function _(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:_,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function Z2(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new ev(s),e.set(l,[p])):c>=d.length?(p=new ev(s),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const j2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q2=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],J2=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],tv=new fn,Wo=new oe,Kd=new oe;function $2(s,e,i){let r=new Vv;const l=new wt,c=new wt,d=new ln,p=new cy,m=new uy,h={},_=i.maxTextureSize,x={[lr]:jn,[jn]:lr,[Sa]:Sa},g=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:j2,fragmentShader:K2}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new Mi;b.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Oi(b,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let M=this.type;this.render=function(N,O,T){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||N.length===0)return;this.type===FS&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kc);const L=s.getRenderTarget(),j=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Ea),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ge=M!==this.type;ge&&O.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ee=>ee.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ee=N.length;pe<ee;pe++){const I=N[pe],G=I.shadow;if(G===void 0){it("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const X=G.getFrameExtents();l.multiply(X),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/X.x),l.x=c.x*X.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/X.y),l.y=c.y*X.y,G.mapSize.y=c.y));const le=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=le,G.map===null||ge===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Yo){if(I.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Zi(l.x,l.y,{format:Br,type:Ta,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new Vs(l.x,l.y,Wi),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Aa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else I.isPointLight?(G.map=new Zv(l.x),G.map.depthTexture=new iy(l.x,ji)):(G.map=new Zi(l.x,l.y),G.map.depthTexture=new Vs(l.x,l.y,ji)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Aa,this.type===kc?(G.map.depthTexture.compareFunction=le?np:tp,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn);G.camera.updateProjectionMatrix()}const _e=G.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<_e;D++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,D),s.clear();else{D===0&&(s.setRenderTarget(G.map),s.clear());const Q=G.getViewport(D);d.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),$.viewport(d)}if(I.isPointLight){const Q=G.camera,be=G.matrix,Ce=I.distance||Q.far;Ce!==Q.far&&(Q.far=Ce,Q.updateProjectionMatrix()),Wo.setFromMatrixPosition(I.matrixWorld),Q.position.copy(Wo),Kd.copy(Q.position),Kd.add(Q2[D]),Q.up.copy(J2[D]),Q.lookAt(Kd),Q.updateMatrixWorld(),be.makeTranslation(-Wo.x,-Wo.y,-Wo.z),tv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(tv,Q.coordinateSystem,Q.reversedDepth)}else G.updateMatrices(I);r=G.getFrustum(),C(O,T,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===Yo&&H(G,T),G.needsUpdate=!1}M=this.type,E.needsUpdate=!1,s.setRenderTarget(L,j,V)};function H(N,O){const T=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Zi(l.x,l.y,{format:Br,type:Ta})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(O,null,T,g,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(O,null,T,y,w,null)}function B(N,O,T,L){let j=null;const V=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)j=V;else if(j=T.isPointLight===!0?m:p,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=j.uuid,ge=O.uuid;let pe=h[$];pe===void 0&&(pe={},h[$]=pe);let ee=pe[ge];ee===void 0&&(ee=j.clone(),pe[ge]=ee,O.addEventListener("dispose",F)),j=ee}if(j.visible=O.visible,j.wireframe=O.wireframe,L===Yo?j.side=O.shadowSide!==null?O.shadowSide:O.side:j.side=O.shadowSide!==null?O.shadowSide:x[O.side],j.alphaMap=O.alphaMap,j.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,j.map=O.map,j.clipShadows=O.clipShadows,j.clippingPlanes=O.clippingPlanes,j.clipIntersection=O.clipIntersection,j.displacementMap=O.displacementMap,j.displacementScale=O.displacementScale,j.displacementBias=O.displacementBias,j.wireframeLinewidth=O.wireframeLinewidth,j.linewidth=O.linewidth,T.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const $=s.properties.get(j);$.light=T}return j}function C(N,O,T,L,j){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&j===Yo)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const ge=e.update(N),pe=N.material;if(Array.isArray(pe)){const ee=ge.groups;for(let I=0,G=ee.length;I<G;I++){const X=ee[I],le=pe[X.materialIndex];if(le&&le.visible){const _e=B(N,le,L,j);N.onBeforeShadow(s,N,O,T,ge,_e,X),s.renderBufferDirect(T,null,ge,_e,N,X),N.onAfterShadow(s,N,O,T,ge,_e,X)}}}else if(pe.visible){const ee=B(N,pe,L,j);N.onBeforeShadow(s,N,O,T,ge,ee,null),s.renderBufferDirect(T,null,ge,ee,N,null),N.onAfterShadow(s,N,O,T,ge,ee,null)}}const $=N.children;for(let ge=0,pe=$.length;ge<pe;ge++)C($[ge],O,T,L,j)}function F(N){N.target.removeEventListener("dispose",F);for(const T in h){const L=h[T],j=N.target.uuid;j in L&&(L[j].dispose(),delete L[j])}}}function eA(s,e){function i(){let Y=!1;const we=new ln;let xe=null;const De=new ln(0,0,0,0);return{setMask:function(ze){xe!==ze&&!Y&&(s.colorMask(ze,ze,ze,ze),xe=ze)},setLocked:function(ze){Y=ze},setClear:function(ze,Te,Ye,ke,$t){$t===!0&&(ze*=ke,Te*=ke,Ye*=ke),we.set(ze,Te,Ye,ke),De.equals(we)===!1&&(s.clearColor(ze,Te,Ye,ke),De.copy(we))},reset:function(){Y=!1,xe=null,De.set(-1,0,0,0)}}}function r(){let Y=!1,we=!1,xe=null,De=null,ze=null;return{setReversed:function(Te){if(we!==Te){const Ye=e.get("EXT_clip_control");Te?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),we=Te;const ke=ze;ze=null,this.setClear(ke)}},getReversed:function(){return we},setTest:function(Te){Te?Ee(s.DEPTH_TEST):Be(s.DEPTH_TEST)},setMask:function(Te){xe!==Te&&!Y&&(s.depthMask(Te),xe=Te)},setFunc:function(Te){if(we&&(Te=mM[Te]),De!==Te){switch(Te){case rh:s.depthFunc(s.NEVER);break;case sh:s.depthFunc(s.ALWAYS);break;case oh:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case lh:s.depthFunc(s.EQUAL);break;case ch:s.depthFunc(s.GEQUAL);break;case uh:s.depthFunc(s.GREATER);break;case fh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=Te}},setLocked:function(Te){Y=Te},setClear:function(Te){ze!==Te&&(ze=Te,we&&(Te=1-Te),s.clearDepth(Te))},reset:function(){Y=!1,xe=null,De=null,ze=null,we=!1}}}function l(){let Y=!1,we=null,xe=null,De=null,ze=null,Te=null,Ye=null,ke=null,$t=null;return{setTest:function(Pt){Y||(Pt?Ee(s.STENCIL_TEST):Be(s.STENCIL_TEST))},setMask:function(Pt){we!==Pt&&!Y&&(s.stencilMask(Pt),we=Pt)},setFunc:function(Pt,Qn,Jn){(xe!==Pt||De!==Qn||ze!==Jn)&&(s.stencilFunc(Pt,Qn,Jn),xe=Pt,De=Qn,ze=Jn)},setOp:function(Pt,Qn,Jn){(Te!==Pt||Ye!==Qn||ke!==Jn)&&(s.stencilOp(Pt,Qn,Jn),Te=Pt,Ye=Qn,ke=Jn)},setLocked:function(Pt){Y=Pt},setClear:function(Pt){$t!==Pt&&(s.clearStencil(Pt),$t=Pt)},reset:function(){Y=!1,we=null,xe=null,De=null,ze=null,Te=null,Ye=null,ke=null,$t=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let _={},x={},g={},y=new WeakMap,b=[],w=null,E=!1,M=null,H=null,B=null,C=null,F=null,N=null,O=null,T=new Nt(0,0,0),L=0,j=!1,V=null,$=null,ge=null,pe=null,ee=null;const I=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(le)[1]),G=X>=1):le.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),G=X>=2);let _e=null,D={};const Q=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),Ce=new ln().fromArray(Q),Ne=new ln().fromArray(be);function ne(Y,we,xe,De){const ze=new Uint8Array(4),Te=s.createTexture();s.bindTexture(Y,Te),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<xe;Ye++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(we+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Te}const Me={};Me[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ee(s.DEPTH_TEST),d.setFunc(Bs),jt(!1),qt(t_),Ee(s.CULL_FACE),pt(Ea);function Ee(Y){_[Y]!==!0&&(s.enable(Y),_[Y]=!0)}function Be(Y){_[Y]!==!1&&(s.disable(Y),_[Y]=!1)}function tt(Y,we){return g[Y]!==we?(s.bindFramebuffer(Y,we),g[Y]=we,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=we),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=we),!0):!1}function je(Y,we){let xe=b,De=!1;if(Y){xe=y.get(we),xe===void 0&&(xe=[],y.set(we,xe));const ze=Y.textures;if(xe.length!==ze.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Ye=ze.length;Te<Ye;Te++)xe[Te]=s.COLOR_ATTACHMENT0+Te;xe.length=ze.length,De=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,De=!0);De&&s.drawBuffers(xe)}function Gt(Y){return w!==Y?(s.useProgram(Y),w=Y,!0):!1}const ot={[Or]:s.FUNC_ADD,[zS]:s.FUNC_SUBTRACT,[BS]:s.FUNC_REVERSE_SUBTRACT};ot[HS]=s.MIN,ot[VS]=s.MAX;const ht={[GS]:s.ZERO,[kS]:s.ONE,[XS]:s.SRC_COLOR,[ih]:s.SRC_ALPHA,[KS]:s.SRC_ALPHA_SATURATE,[ZS]:s.DST_COLOR,[qS]:s.DST_ALPHA,[WS]:s.ONE_MINUS_SRC_COLOR,[ah]:s.ONE_MINUS_SRC_ALPHA,[jS]:s.ONE_MINUS_DST_COLOR,[YS]:s.ONE_MINUS_DST_ALPHA,[QS]:s.CONSTANT_COLOR,[JS]:s.ONE_MINUS_CONSTANT_COLOR,[$S]:s.CONSTANT_ALPHA,[eM]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(Y,we,xe,De,ze,Te,Ye,ke,$t,Pt){if(Y===Ea){E===!0&&(Be(s.BLEND),E=!1);return}if(E===!1&&(Ee(s.BLEND),E=!0),Y!==IS){if(Y!==M||Pt!==j){if((H!==Or||F!==Or)&&(s.blendEquation(s.FUNC_ADD),H=Or,F=Or),Pt)switch(Y){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nh:s.blendFunc(s.ONE,s.ONE);break;case n_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case i_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case n_:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i_:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",Y);break}B=null,C=null,N=null,O=null,T.set(0,0,0),L=0,M=Y,j=Pt}return}ze=ze||we,Te=Te||xe,Ye=Ye||De,(we!==H||ze!==F)&&(s.blendEquationSeparate(ot[we],ot[ze]),H=we,F=ze),(xe!==B||De!==C||Te!==N||Ye!==O)&&(s.blendFuncSeparate(ht[xe],ht[De],ht[Te],ht[Ye]),B=xe,C=De,N=Te,O=Ye),(ke.equals(T)===!1||$t!==L)&&(s.blendColor(ke.r,ke.g,ke.b,$t),T.copy(ke),L=$t),M=Y,j=!1}function ft(Y,we){Y.side===Sa?Be(s.CULL_FACE):Ee(s.CULL_FACE);let xe=Y.side===jn;we&&(xe=!xe),jt(xe),Y.blending===Fs&&Y.transparent===!1?pt(Ea):pt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const De=Y.stencilWrite;p.setTest(De),De&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),an(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Be(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Y){V!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),V=Y)}function qt(Y){Y!==OS?(Ee(s.CULL_FACE),Y!==$&&(Y===t_?s.cullFace(s.BACK):Y===PS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Be(s.CULL_FACE),$=Y}function Kt(Y){Y!==ge&&(G&&s.lineWidth(Y),ge=Y)}function an(Y,we,xe){Y?(Ee(s.POLYGON_OFFSET_FILL),(pe!==we||ee!==xe)&&(pe=we,ee=xe,d.getReversed()&&(we=-we),s.polygonOffset(we,xe))):Be(s.POLYGON_OFFSET_FILL)}function Ot(Y){Y?Ee(s.SCISSOR_TEST):Be(s.SCISSOR_TEST)}function rn(Y){Y===void 0&&(Y=s.TEXTURE0+I-1),_e!==Y&&(s.activeTexture(Y),_e=Y)}function Z(Y,we,xe){xe===void 0&&(_e===null?xe=s.TEXTURE0+I-1:xe=_e);let De=D[xe];De===void 0&&(De={type:void 0,texture:void 0},D[xe]=De),(De.type!==Y||De.texture!==we)&&(_e!==xe&&(s.activeTexture(xe),_e=xe),s.bindTexture(Y,we||Me[Y]),De.type=Y,De.texture=we)}function Dt(){const Y=D[_e];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function vt(){try{s.compressedTexImage2D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function S(){try{s.texSubImage2D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function q(){try{s.texSubImage3D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function Ae(){try{s.texStorage2D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function Ue(){try{s.texStorage3D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function he(){try{s.texImage2D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function me(){try{s.texImage3D(...arguments)}catch(Y){Tt("WebGLState:",Y)}}function Re(Y){return x[Y]!==void 0?x[Y]:s.getParameter(Y)}function He(Y,we){x[Y]!==we&&(s.pixelStorei(Y,we),x[Y]=we)}function Pe(Y){Ce.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Le(Y){Ne.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Ne.copy(Y))}function Qe(Y,we){let xe=h.get(we);xe===void 0&&(xe=new WeakMap,h.set(we,xe));let De=xe.get(Y);De===void 0&&(De=s.getUniformBlockIndex(we,Y.name),xe.set(Y,De))}function Je(Y,we){const De=h.get(we).get(Y);m.get(we)!==De&&(s.uniformBlockBinding(we,De,Y.__bindingPointIndex),m.set(we,De))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},x={},_e=null,D={},g={},y=new WeakMap,b=[],w=null,E=!1,M=null,H=null,B=null,C=null,F=null,N=null,O=null,T=new Nt(0,0,0),L=0,j=!1,V=null,$=null,ge=null,pe=null,ee=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ee,disable:Be,bindFramebuffer:tt,drawBuffers:je,useProgram:Gt,setBlending:pt,setMaterial:ft,setFlipSided:jt,setCullFace:qt,setLineWidth:Kt,setPolygonOffset:an,setScissorTest:Ot,activeTexture:rn,bindTexture:Z,unbindTexture:Dt,compressedTexImage2D:vt,compressedTexImage3D:U,texImage2D:he,texImage3D:me,pixelStorei:He,getParameter:Re,updateUBOMapping:Qe,uniformBlockBinding:Je,texStorage2D:Ae,texStorage3D:Ue,texSubImage2D:S,texSubImage3D:q,compressedTexSubImage2D:te,compressedTexSubImage3D:fe,scissor:Pe,viewport:Le,reset:at}}function tA(s,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,_=new WeakMap,x=new Set;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,S){return b?new OffscreenCanvas(U,S):tl("canvas")}function E(U,S,q){let te=1;const fe=vt(U);if((fe.width>q||fe.height>q)&&(te=q/Math.max(fe.width,fe.height)),te<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ae=Math.floor(te*fe.width),Ue=Math.floor(te*fe.height);g===void 0&&(g=w(Ae,Ue));const he=S?w(Ae,Ue):g;return he.width=Ae,he.height=Ue,he.getContext("2d").drawImage(U,0,0,Ae,Ue),it("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ae+"x"+Ue+")."),he}else return"data"in U&&it("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function M(U){return U.generateMipmaps}function H(U){s.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(U,S,q,te,fe,Ae=!1){if(U!==null){if(s[U]!==void 0)return s[U];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ue;te&&(Ue=e.get("EXT_texture_norm16"),Ue||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=S;if(S===s.RED&&(q===s.FLOAT&&(he=s.R32F),q===s.HALF_FLOAT&&(he=s.R16F),q===s.UNSIGNED_BYTE&&(he=s.R8),q===s.UNSIGNED_SHORT&&Ue&&(he=Ue.R16_EXT),q===s.SHORT&&Ue&&(he=Ue.R16_SNORM_EXT)),S===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.R8UI),q===s.UNSIGNED_SHORT&&(he=s.R16UI),q===s.UNSIGNED_INT&&(he=s.R32UI),q===s.BYTE&&(he=s.R8I),q===s.SHORT&&(he=s.R16I),q===s.INT&&(he=s.R32I)),S===s.RG&&(q===s.FLOAT&&(he=s.RG32F),q===s.HALF_FLOAT&&(he=s.RG16F),q===s.UNSIGNED_BYTE&&(he=s.RG8),q===s.UNSIGNED_SHORT&&Ue&&(he=Ue.RG16_EXT),q===s.SHORT&&Ue&&(he=Ue.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.RG8UI),q===s.UNSIGNED_SHORT&&(he=s.RG16UI),q===s.UNSIGNED_INT&&(he=s.RG32UI),q===s.BYTE&&(he=s.RG8I),q===s.SHORT&&(he=s.RG16I),q===s.INT&&(he=s.RG32I)),S===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),q===s.UNSIGNED_INT&&(he=s.RGB32UI),q===s.BYTE&&(he=s.RGB8I),q===s.SHORT&&(he=s.RGB16I),q===s.INT&&(he=s.RGB32I)),S===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),q===s.UNSIGNED_INT&&(he=s.RGBA32UI),q===s.BYTE&&(he=s.RGBA8I),q===s.SHORT&&(he=s.RGBA16I),q===s.INT&&(he=s.RGBA32I)),S===s.RGB&&(q===s.UNSIGNED_SHORT&&Ue&&(he=Ue.RGB16_EXT),q===s.SHORT&&Ue&&(he=Ue.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),S===s.RGBA){const me=Ae?$c:Et.getTransfer(fe);q===s.FLOAT&&(he=s.RGBA32F),q===s.HALF_FLOAT&&(he=s.RGBA16F),q===s.UNSIGNED_BYTE&&(he=me===Vt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Ue&&(he=Ue.RGBA16_EXT),q===s.SHORT&&Ue&&(he=Ue.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function F(U,S){let q;return U?S===null||S===ji||S===el?q=s.DEPTH24_STENCIL8:S===Wi?q=s.DEPTH32F_STENCIL8:S===$o&&(q=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ji||S===el?q=s.DEPTH_COMPONENT24:S===Wi?q=s.DEPTH_COMPONENT32F:S===$o&&(q=s.DEPTH_COMPONENT16),q}function N(U,S){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==Pn?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function O(U){const S=U.target;S.removeEventListener("dispose",O),L(S),S.isVideoTexture&&_.delete(S),S.isHTMLTexture&&x.delete(S)}function T(U){const S=U.target;S.removeEventListener("dispose",T),V(S)}function L(U){const S=r.get(U);if(S.__webglInit===void 0)return;const q=U.source,te=y.get(q);if(te){const fe=te[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&j(U),Object.keys(te).length===0&&y.delete(q)}r.remove(U)}function j(U){const S=r.get(U);s.deleteTexture(S.__webglTexture);const q=U.source,te=y.get(q);delete te[S.__cacheKey],d.memory.textures--}function V(U){const S=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let fe=0;fe<S.__webglFramebuffer[te].length;fe++)s.deleteFramebuffer(S.__webglFramebuffer[te][fe]);else s.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)s.deleteFramebuffer(S.__webglFramebuffer[te]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=U.textures;for(let te=0,fe=q.length;te<fe;te++){const Ae=r.get(q[te]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),d.memory.textures--),r.remove(q[te])}r.remove(U)}let $=0;function ge(){$=0}function pe(){return $}function ee(U){$=U}function I(){const U=$;return U>=l.maxTextures&&it("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),$+=1,U}function G(U){const S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function X(U,S){const q=r.get(U);if(U.isVideoTexture&&Z(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&q.__version!==U.version){const te=U.image;if(te===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(q,U,S);return}}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+S)}function le(U,S){const q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){Be(q,U,S);return}else U.isExternalTexture&&(q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+S)}function _e(U,S){const q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){Be(q,U,S);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+S)}function D(U,S){const q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&q.__version!==U.version){tt(q,U,S);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+S)}const Q={[dh]:s.REPEAT,[ya]:s.CLAMP_TO_EDGE,[jc]:s.MIRRORED_REPEAT},be={[Dn]:s.NEAREST,[iM]:s.NEAREST_MIPMAP_NEAREST,[vc]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[Md]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},Ce={[sM]:s.NEVER,[fM]:s.ALWAYS,[oM]:s.LESS,[tp]:s.LEQUAL,[lM]:s.EQUAL,[np]:s.GEQUAL,[cM]:s.GREATER,[uM]:s.NOTEQUAL};function Ne(U,S){if(S.type===Wi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Pn||S.magFilter===Md||S.magFilter===vc||S.magFilter===Fr||S.minFilter===Pn||S.minFilter===Md||S.minFilter===vc||S.minFilter===Fr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Q[S.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Q[S.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Q[S.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,be[S.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,be[S.minFilter]),S.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dn||S.minFilter!==vc&&S.minFilter!==Fr||S.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function ne(U,S){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",O));const te=S.source;let fe=y.get(te);fe===void 0&&(fe={},y.set(te,fe));const Ae=G(S);if(Ae!==U.__cacheKey){fe[Ae]===void 0&&(fe[Ae]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,q=!0),fe[Ae].usedTimes++;const Ue=fe[U.__cacheKey];Ue!==void 0&&(fe[U.__cacheKey].usedTimes--,Ue.usedTimes===0&&j(S)),U.__cacheKey=Ae,U.__webglTexture=fe[Ae].texture}return q}function Me(U,S,q){return Math.floor(Math.floor(U/q)/S)}function Ee(U,S,q,te){const Ae=U.updateRanges;if(Ae.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,q,te,S.data);else{Ae.sort((He,Pe)=>He.start-Pe.start);let Ue=0;for(let He=1;He<Ae.length;He++){const Pe=Ae[Ue],Le=Ae[He],Qe=Pe.start+Pe.count,Je=Me(Le.start,S.width,4),at=Me(Pe.start,S.width,4);Le.start<=Qe+1&&Je===at&&Me(Le.start+Le.count-1,S.width,4)===Je?Pe.count=Math.max(Pe.count,Le.start+Le.count-Pe.start):(++Ue,Ae[Ue]=Le)}Ae.length=Ue+1;const he=i.getParameter(s.UNPACK_ROW_LENGTH),me=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let He=0,Pe=Ae.length;He<Pe;He++){const Le=Ae[He],Qe=Math.floor(Le.start/4),Je=Math.ceil(Le.count/4),at=Qe%S.width,Y=Math.floor(Qe/S.width),we=Je,xe=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,at),i.pixelStorei(s.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(s.TEXTURE_2D,0,at,Y,we,xe,q,te,S.data)}U.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,he),i.pixelStorei(s.UNPACK_SKIP_PIXELS,me),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Be(U,S,q){let te=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=s.TEXTURE_3D);const fe=ne(U,S),Ae=S.source;i.bindTexture(te,U.__webglTexture,s.TEXTURE0+q);const Ue=r.get(Ae);if(Ae.version!==Ue.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const xe=Et.getPrimaries(Et.workingColorSpace),De=S.colorSpace===sr?null:Et.getPrimaries(S.colorSpace),ze=S.colorSpace===sr||xe===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}i.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let me=E(S.image,!1,l.maxTextureSize);me=Dt(S,me);const Re=c.convert(S.format,S.colorSpace),He=c.convert(S.type);let Pe=C(S.internalFormat,Re,He,S.normalized,S.colorSpace,S.isVideoTexture);Ne(te,S);let Le;const Qe=S.mipmaps,Je=S.isVideoTexture!==!0,at=Ue.__version===void 0||fe===!0,Y=Ae.dataReady,we=N(S,me);if(S.isDepthTexture)Pe=F(S.format===Ir,S.type),at&&(Je?i.texStorage2D(s.TEXTURE_2D,1,Pe,me.width,me.height):i.texImage2D(s.TEXTURE_2D,0,Pe,me.width,me.height,0,Re,He,null));else if(S.isDataTexture)if(Qe.length>0){Je&&at&&i.texStorage2D(s.TEXTURE_2D,we,Pe,Qe[0].width,Qe[0].height);for(let xe=0,De=Qe.length;xe<De;xe++)Le=Qe[xe],Je?Y&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,He,Le.data):i.texImage2D(s.TEXTURE_2D,xe,Pe,Le.width,Le.height,0,Re,He,Le.data);S.generateMipmaps=!1}else Je?(at&&i.texStorage2D(s.TEXTURE_2D,we,Pe,me.width,me.height),Y&&Ee(S,me,Re,He)):i.texImage2D(s.TEXTURE_2D,0,Pe,me.width,me.height,0,Re,He,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Pe,Qe[0].width,Qe[0].height,me.depth);for(let xe=0,De=Qe.length;xe<De;xe++)if(Le=Qe[xe],S.format!==Ni)if(Re!==null)if(Je){if(Y)if(S.layerUpdates.size>0){const ze=N_(Le.width,Le.height,S.format,S.type);for(const Te of S.layerUpdates){const Ye=Le.data.subarray(Te*ze/Le.data.BYTES_PER_ELEMENT,(Te+1)*ze/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Te,Le.width,Le.height,1,Re,Ye)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,me.depth,Re,Le.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Pe,Le.width,Le.height,me.depth,0,Le.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?Y&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Le.width,Le.height,me.depth,Re,He,Le.data):i.texImage3D(s.TEXTURE_2D_ARRAY,xe,Pe,Le.width,Le.height,me.depth,0,Re,He,Le.data)}else{Je&&at&&i.texStorage2D(s.TEXTURE_2D,we,Pe,Qe[0].width,Qe[0].height);for(let xe=0,De=Qe.length;xe<De;xe++)Le=Qe[xe],S.format!==Ni?Re!==null?Je?Y&&i.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(s.TEXTURE_2D,xe,Pe,Le.width,Le.height,0,Le.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?Y&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Le.width,Le.height,Re,He,Le.data):i.texImage2D(s.TEXTURE_2D,xe,Pe,Le.width,Le.height,0,Re,He,Le.data)}else if(S.isDataArrayTexture)if(Je){if(at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,Pe,me.width,me.height,me.depth),Y)if(S.layerUpdates.size>0){const xe=N_(me.width,me.height,S.format,S.type);for(const De of S.layerUpdates){const ze=me.data.subarray(De*xe/me.data.BYTES_PER_ELEMENT,(De+1)*xe/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,me.width,me.height,1,Re,He,ze)}S.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Re,He,me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Re,He,me.data);else if(S.isData3DTexture)Je?(at&&i.texStorage3D(s.TEXTURE_3D,we,Pe,me.width,me.height,me.depth),Y&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Re,He,me.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Re,He,me.data);else if(S.isFramebufferTexture){if(at)if(Je)i.texStorage2D(s.TEXTURE_2D,we,Pe,me.width,me.height);else{let xe=me.width,De=me.height;for(let ze=0;ze<we;ze++)i.texImage2D(s.TEXTURE_2D,ze,Pe,xe,De,0,Re,He,null),xe>>=1,De>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),me.parentNode!==xe){xe.appendChild(me),x.add(S),xe.onpaint=De=>{const ze=De.changedElements;for(const Te of x)ze.includes(Te.image)&&(Te.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,me);else{const ze=s.RGBA,Te=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ze,Te,Ye,me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(Je&&at){const xe=vt(Qe[0]);i.texStorage2D(s.TEXTURE_2D,we,Pe,xe.width,xe.height)}for(let xe=0,De=Qe.length;xe<De;xe++)Le=Qe[xe],Je?Y&&i.texSubImage2D(s.TEXTURE_2D,xe,0,0,Re,He,Le):i.texImage2D(s.TEXTURE_2D,xe,Pe,Re,He,Le);S.generateMipmaps=!1}else if(Je){if(at){const xe=vt(me);i.texStorage2D(s.TEXTURE_2D,we,Pe,xe.width,xe.height)}Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,He,me)}else i.texImage2D(s.TEXTURE_2D,0,Pe,Re,He,me);M(S)&&H(te),Ue.__version=Ae.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function tt(U,S,q){if(S.image.length!==6)return;const te=ne(U,S),fe=S.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+q);const Ae=r.get(fe);if(fe.version!==Ae.__version||te===!0){i.activeTexture(s.TEXTURE0+q);const Ue=Et.getPrimaries(Et.workingColorSpace),he=S.colorSpace===sr?null:Et.getPrimaries(S.colorSpace),me=S.colorSpace===sr||Ue===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let Te=0;Te<6;Te++)!Re&&!He?Pe[Te]=E(S.image[Te],!0,l.maxCubemapSize):Pe[Te]=He?S.image[Te].image:S.image[Te],Pe[Te]=Dt(S,Pe[Te]);const Le=Pe[0],Qe=c.convert(S.format,S.colorSpace),Je=c.convert(S.type),at=C(S.internalFormat,Qe,Je,S.normalized,S.colorSpace),Y=S.isVideoTexture!==!0,we=Ae.__version===void 0||te===!0,xe=fe.dataReady;let De=N(S,Le);Ne(s.TEXTURE_CUBE_MAP,S);let ze;if(Re){Y&&we&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,Le.width,Le.height);for(let Te=0;Te<6;Te++){ze=Pe[Te].mipmaps;for(let Ye=0;Ye<ze.length;Ye++){const ke=ze[Ye];S.format!==Ni?Qe!==null?Y?xe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,0,0,ke.width,ke.height,Qe,ke.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,at,ke.width,ke.height,0,ke.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,0,0,ke.width,ke.height,Qe,Je,ke.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye,at,ke.width,ke.height,0,Qe,Je,ke.data)}}}else{if(ze=S.mipmaps,Y&&we){ze.length>0&&De++;const Te=vt(Pe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(He){Y?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Pe[Te].width,Pe[Te].height,Qe,Je,Pe[Te].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,at,Pe[Te].width,Pe[Te].height,0,Qe,Je,Pe[Te].data);for(let Ye=0;Ye<ze.length;Ye++){const $t=ze[Ye].image[Te].image;Y?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,0,0,$t.width,$t.height,Qe,Je,$t.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,at,$t.width,$t.height,0,Qe,Je,$t.data)}}else{Y?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Qe,Je,Pe[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,at,Qe,Je,Pe[Te]);for(let Ye=0;Ye<ze.length;Ye++){const ke=ze[Ye];Y?xe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,0,0,Qe,Je,ke.image[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye+1,at,Qe,Je,ke.image[Te])}}}M(S)&&H(s.TEXTURE_CUBE_MAP),Ae.__version=fe.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function je(U,S,q,te,fe,Ae){const Ue=c.convert(q.format,q.colorSpace),he=c.convert(q.type),me=C(q.internalFormat,Ue,he,q.normalized,q.colorSpace),Re=r.get(S),He=r.get(q);if(He.__renderTarget=S,!Re.__hasExternalTextures){const Pe=Math.max(1,S.width>>Ae),Le=Math.max(1,S.height>>Ae);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Ae,me,Pe,Le,S.depth,0,Ue,he,null):i.texImage2D(fe,Ae,me,Pe,Le,0,Ue,he,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),rn(S)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,fe,He.__webglTexture,0,Ot(S)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,fe,He.__webglTexture,Ae),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(U,S,q){if(s.bindRenderbuffer(s.RENDERBUFFER,U),S.depthBuffer){const te=S.depthTexture,fe=te&&te.isDepthTexture?te.type:null,Ae=F(S.stencilBuffer,fe),Ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;rn(S)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(S),Ae,S.width,S.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(S),Ae,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,U)}else{const te=S.textures;for(let fe=0;fe<te.length;fe++){const Ae=te[fe],Ue=c.convert(Ae.format,Ae.colorSpace),he=c.convert(Ae.type),me=C(Ae.internalFormat,Ue,he,Ae.normalized,Ae.colorSpace);rn(S)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(S),me,S.width,S.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(S),me,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,me,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(U,S,q){const te=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(S.depthTexture);if(fe.__renderTarget=S,(!fe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,S.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,S.depthTexture);const Re=c.convert(S.depthTexture.format),He=c.convert(S.depthTexture.type);let Pe;S.depthTexture.format===Aa?Pe=s.DEPTH_COMPONENT24:S.depthTexture.format===Ir&&(Pe=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Pe,S.width,S.height,0,Re,He,null)}}else X(S.depthTexture,0);const Ae=fe.__webglTexture,Ue=Ot(S),he=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,me=S.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Aa)rn(S)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,he,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,me,he,Ae,0);else if(S.depthTexture.format===Ir)rn(S)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,he,Ae,0,Ue):s.framebufferTexture2D(s.FRAMEBUFFER,me,he,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(U){const S=r.get(U),q=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){const te=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){const fe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",fe)};te.addEventListener("dispose",fe),S.__depthDisposeCallback=fe}S.__boundDepthTexture=te}if(U.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let te=0;te<6;te++)ot(S.__webglFramebuffer[te],U,te);else{const te=U.texture.mipmaps;te&&te.length>0?ot(S.__webglFramebuffer[0],U,0):ot(S.__webglFramebuffer,U,0)}else if(q){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=s.createRenderbuffer(),Gt(S.__webglDepthbuffer[te],U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ae)}}else{const te=U.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Gt(S.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ae)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(U,S,q){const te=r.get(U);S!==void 0&&je(te.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ht(U)}function ft(U){const S=U.texture,q=r.get(U),te=r.get(S);U.addEventListener("dispose",T);const fe=U.textures,Ae=U.isWebGLCubeRenderTarget===!0,Ue=fe.length>1;if(Ue||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=S.version,d.memory.textures++),Ae){q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[he]=[];for(let me=0;me<S.mipmaps.length;me++)q.__webglFramebuffer[he][me]=s.createFramebuffer()}else q.__webglFramebuffer[he]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)q.__webglFramebuffer[he]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let he=0,me=fe.length;he<me;he++){const Re=r.get(fe[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&rn(U)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let he=0;he<fe.length;he++){const me=fe[he];q.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[he]);const Re=c.convert(me.format,me.colorSpace),He=c.convert(me.type),Pe=C(me.internalFormat,Re,He,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),Le=Ot(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Pe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,q.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Gt(q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)je(q.__webglFramebuffer[he][me],U,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else je(q.__webglFramebuffer[he],U,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);M(S)&&H(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let he=0,me=fe.length;he<me;he++){const Re=fe[he],He=r.get(Re);let Pe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Pe,He.__webglTexture),Ne(Pe,Re),je(q.__webglFramebuffer,U,Re,s.COLOR_ATTACHMENT0+he,Pe,0),M(Re)&&H(Pe)}i.unbindTexture()}else{let he=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(he,te.__webglTexture),Ne(he,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)je(q.__webglFramebuffer[me],U,S,s.COLOR_ATTACHMENT0,he,me);else je(q.__webglFramebuffer,U,S,s.COLOR_ATTACHMENT0,he,0);M(S)&&H(he),i.unbindTexture()}U.depthBuffer&&ht(U)}function jt(U){const S=U.textures;for(let q=0,te=S.length;q<te;q++){const fe=S[q];if(M(fe)){const Ae=B(U),Ue=r.get(fe).__webglTexture;i.bindTexture(Ae,Ue),H(Ae),i.unbindTexture()}}}const qt=[],Kt=[];function an(U){if(U.samples>0){if(rn(U)===!1){const S=U.textures,q=U.width,te=U.height;let fe=s.COLOR_BUFFER_BIT;const Ae=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(U),he=S.length>1;if(he)for(let Re=0;Re<S.length;Re++)i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Re]);const He=r.get(S[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,q,te,0,0,q,te,fe,s.NEAREST),m===!0&&(qt.length=0,Kt.length=0,qt.push(s.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(qt.push(Ae),Kt.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<S.length;Re++){i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Re]);const He=r.get(S[Re]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,He,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const S=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ot(U){return Math.min(l.maxSamples,U.samples)}function rn(U){const S=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Z(U){const S=d.render.frame;_.get(U)!==S&&(_.set(U,S),U.update())}function Dt(U,S){const q=U.colorSpace,te=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Jc&&q!==sr&&(Et.getTransfer(q)===Vt?(te!==Ni||fe!==Si)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",q)),S}function vt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=ge,this.getTextureUnits=pe,this.setTextureUnits=ee,this.setTexture2D=X,this.setTexture2DArray=le,this.setTexture3D=_e,this.setTextureCube=D,this.rebindTextures=pt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=je,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function nA(s,e){function i(r,l=sr){let c;const d=Et.getTransfer(l);if(r===Si)return s.UNSIGNED_BYTE;if(r===Kh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===wv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Av)return s.BYTE;if(r===Rv)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===jh)return s.INT;if(r===ji)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===Ta)return s.HALF_FLOAT;if(r===Dv)return s.ALPHA;if(r===Uv)return s.RGB;if(r===Ni)return s.RGBA;if(r===Aa)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===Nv)return s.RED;if(r===Jh)return s.RED_INTEGER;if(r===Br)return s.RG;if(r===$h)return s.RG_INTEGER;if(r===ep)return s.RGBA_INTEGER;if(r===Xc||r===Wc||r===qc||r===Yc)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===ph||r===mh||r===gh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===hh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ph)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_h||r===vh||r===xh||r===Sh||r===Mh||r===Kc||r===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===_h||r===vh)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Sh)return c.COMPRESSED_R11_EAC;if(r===Mh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Kc)return c.COMPRESSED_RG11_EAC;if(r===yh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Nh||r===Lh||r===Oh||r===Ph||r===Fh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Th)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ch)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ih||r===zh||r===Bh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ih)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hh||r===Vh||r===Qc||r===Gh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Hh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new kv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ui({vertexShader:iA,fragmentShader:aA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new sl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends Vr{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,_=null,x=null,g=null,y=null,b=null;const w=typeof XRWebGLBinding<"u",E=new rA,M={},H=i.getContextAttributes();let B=null,C=null;const F=[],N=[],O=new wt;let T=null;const L=new Di;L.viewport=new ln;const j=new Di;j.viewport=new ln;const V=[L,j],$=new gy;let ge=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Me=F[ne];return Me===void 0&&(Me=new Rd,F[ne]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ne){let Me=F[ne];return Me===void 0&&(Me=new Rd,F[ne]=Me),Me.getGripSpace()},this.getHand=function(ne){let Me=F[ne];return Me===void 0&&(Me=new Rd,F[ne]=Me),Me.getHandSpace()};function ee(ne){const Me=N.indexOf(ne.inputSource);if(Me===-1)return;const Ee=F[Me];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,h||d),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function I(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let ne=0;ne<F.length;ne++){const Me=N[ne];Me!==null&&(N[ne]=null,F[ne].disconnect(Me))}ge=null,pe=null,E.reset();for(const ne in M)delete M[ne];e.setRenderTarget(B),y=null,g=null,x=null,l=null,C=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),H.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Be=null,tt=null;H.depth&&(tt=H.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=H.stencil?Ir:Aa,Be=H.stencil?el:ji);const je={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Zi(g.textureWidth,g.textureHeight,{format:Ni,type:Si,depthTexture:new Vs(g.textureWidth,g.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:H.stencil,colorSpace:e.outputColorSpace,samples:H.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:H.antialias,alpha:!0,depth:H.depth,stencil:H.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Ni,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:H.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Ne.setContext(l),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function G(ne){for(let Me=0;Me<ne.removed.length;Me++){const Ee=ne.removed[Me],Be=N.indexOf(Ee);Be>=0&&(N[Be]=null,F[Be].disconnect(Ee))}for(let Me=0;Me<ne.added.length;Me++){const Ee=ne.added[Me];let Be=N.indexOf(Ee);if(Be===-1){for(let je=0;je<F.length;je++)if(je>=N.length){N.push(Ee),Be=je;break}else if(N[je]===null){N[je]=Ee,Be=je;break}if(Be===-1)break}const tt=F[Be];tt&&tt.connect(Ee)}}const X=new oe,le=new oe;function _e(ne,Me,Ee){X.setFromMatrixPosition(Me.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const Be=X.distanceTo(le),tt=Me.projectionMatrix.elements,je=Ee.projectionMatrix.elements,Gt=tt[14]/(tt[10]-1),ot=tt[14]/(tt[10]+1),ht=(tt[9]+1)/tt[5],pt=(tt[9]-1)/tt[5],ft=(tt[8]-1)/tt[0],jt=(je[8]+1)/je[0],qt=Gt*ft,Kt=Gt*jt,an=Be/(-ft+jt),Ot=an*-ft;if(Me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ot),ne.translateZ(an),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),tt[10]===-1)ne.projectionMatrix.copy(Me.projectionMatrix),ne.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const rn=Gt+an,Z=ot+an,Dt=qt-Ot,vt=Kt+(Be-Ot),U=ht*ot/Z*rn,S=pt*ot/Z*rn;ne.projectionMatrix.makePerspective(Dt,vt,U,S,rn,Z),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function D(ne,Me){Me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let Me=ne.near,Ee=ne.far;E.texture!==null&&(E.depthNear>0&&(Me=E.depthNear),E.depthFar>0&&(Ee=E.depthFar)),$.near=j.near=L.near=Me,$.far=j.far=L.far=Ee,(ge!==$.near||pe!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),ge=$.near,pe=$.far),$.layers.mask=ne.layers.mask|6,L.layers.mask=$.layers.mask&-5,j.layers.mask=$.layers.mask&-3;const Be=ne.parent,tt=$.cameras;D($,Be);for(let je=0;je<tt.length;je++)D(tt[je],Be);tt.length===2?_e($,L,j):$.projectionMatrix.copy(L.projectionMatrix),Q(ne,$,Be)};function Q(ne,Me,Ee){Ee===null?ne.matrix.copy(Me.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Me.projectionMatrix),ne.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=nl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh($)},this.getCameraTexture=function(ne){return M[ne]};let be=null;function Ce(ne,Me){if(_=Me.getViewerPose(h||d),b=Me,_!==null){const Ee=_.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Be=!1;Ee.length!==$.cameras.length&&($.cameras.length=0,Be=!0);for(let ot=0;ot<Ee.length;ot++){const ht=Ee[ot];let pt=null;if(y!==null)pt=y.getViewport(ht);else{const jt=x.getViewSubImage(g,ht);pt=jt.viewport,ot===0&&(e.setRenderTargetTextures(C,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(C))}let ft=V[ot];ft===void 0&&(ft=new Di,ft.layers.enable(ot),ft.viewport=new ln,V[ot]=ft),ft.matrix.fromArray(ht.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ht.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(pt.x,pt.y,pt.width,pt.height),ot===0&&($.matrix.copy(ft.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Be===!0&&$.cameras.push(ft)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=r.getBinding();const ot=x.getDepthInformation(Ee[0]);ot&&ot.isValid&&ot.texture&&E.init(ot,l.renderState)}if(tt&&tt.includes("camera-access")&&w){e.state.unbindTexture(),x=r.getBinding();for(let ot=0;ot<Ee.length;ot++){const ht=Ee[ot].camera;if(ht){let pt=M[ht];pt||(pt=new kv,M[ht]=pt);const ft=x.getCameraImage(ht);pt.sourceTexture=ft}}}}for(let Ee=0;Ee<F.length;Ee++){const Be=N[Ee],tt=F[Ee];Be!==null&&tt!==void 0&&tt.update(Be,Me,h||d)}be&&be(ne,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),b=null}const Ne=new qv;Ne.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){be=ne},this.dispose=function(){}}}const oA=new fn,$v=new st;$v.set(-1,0,0,0,1,0,0,0,1);function lA(s,e){function i(E,M){E.matrixAutoUpdate===!0&&E.updateMatrix(),M.value.copy(E.matrix)}function r(E,M){M.color.getRGB(E.fogColor.value,Xv(s)),M.isFog?(E.fogNear.value=M.near,E.fogFar.value=M.far):M.isFogExp2&&(E.fogDensity.value=M.density)}function l(E,M,H,B,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(E,M):M.isMeshLambertMaterial?(c(E,M),M.envMap&&(E.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(E,M),x(E,M)):M.isMeshPhongMaterial?(c(E,M),_(E,M),M.envMap&&(E.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(E,M),g(E,M),M.isMeshPhysicalMaterial&&y(E,M,C)):M.isMeshMatcapMaterial?(c(E,M),b(E,M)):M.isMeshDepthMaterial?c(E,M):M.isMeshDistanceMaterial?(c(E,M),w(E,M)):M.isMeshNormalMaterial?c(E,M):M.isLineBasicMaterial?(d(E,M),M.isLineDashedMaterial&&p(E,M)):M.isPointsMaterial?m(E,M,H,B):M.isSpriteMaterial?h(E,M):M.isShadowMaterial?(E.color.value.copy(M.color),E.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(E,M){E.opacity.value=M.opacity,M.color&&E.diffuse.value.copy(M.color),M.emissive&&E.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(E.map.value=M.map,i(M.map,E.mapTransform)),M.alphaMap&&(E.alphaMap.value=M.alphaMap,i(M.alphaMap,E.alphaMapTransform)),M.bumpMap&&(E.bumpMap.value=M.bumpMap,i(M.bumpMap,E.bumpMapTransform),E.bumpScale.value=M.bumpScale,M.side===jn&&(E.bumpScale.value*=-1)),M.normalMap&&(E.normalMap.value=M.normalMap,i(M.normalMap,E.normalMapTransform),E.normalScale.value.copy(M.normalScale),M.side===jn&&E.normalScale.value.negate()),M.displacementMap&&(E.displacementMap.value=M.displacementMap,i(M.displacementMap,E.displacementMapTransform),E.displacementScale.value=M.displacementScale,E.displacementBias.value=M.displacementBias),M.emissiveMap&&(E.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,E.emissiveMapTransform)),M.specularMap&&(E.specularMap.value=M.specularMap,i(M.specularMap,E.specularMapTransform)),M.alphaTest>0&&(E.alphaTest.value=M.alphaTest);const H=e.get(M),B=H.envMap,C=H.envMapRotation;B&&(E.envMap.value=B,E.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply($v),E.reflectivity.value=M.reflectivity,E.ior.value=M.ior,E.refractionRatio.value=M.refractionRatio),M.lightMap&&(E.lightMap.value=M.lightMap,E.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,E.lightMapTransform)),M.aoMap&&(E.aoMap.value=M.aoMap,E.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,E.aoMapTransform))}function d(E,M){E.diffuse.value.copy(M.color),E.opacity.value=M.opacity,M.map&&(E.map.value=M.map,i(M.map,E.mapTransform))}function p(E,M){E.dashSize.value=M.dashSize,E.totalSize.value=M.dashSize+M.gapSize,E.scale.value=M.scale}function m(E,M,H,B){E.diffuse.value.copy(M.color),E.opacity.value=M.opacity,E.size.value=M.size*H,E.scale.value=B*.5,M.map&&(E.map.value=M.map,i(M.map,E.uvTransform)),M.alphaMap&&(E.alphaMap.value=M.alphaMap,i(M.alphaMap,E.alphaMapTransform)),M.alphaTest>0&&(E.alphaTest.value=M.alphaTest)}function h(E,M){E.diffuse.value.copy(M.color),E.opacity.value=M.opacity,E.rotation.value=M.rotation,M.map&&(E.map.value=M.map,i(M.map,E.mapTransform)),M.alphaMap&&(E.alphaMap.value=M.alphaMap,i(M.alphaMap,E.alphaMapTransform)),M.alphaTest>0&&(E.alphaTest.value=M.alphaTest)}function _(E,M){E.specular.value.copy(M.specular),E.shininess.value=Math.max(M.shininess,1e-4)}function x(E,M){M.gradientMap&&(E.gradientMap.value=M.gradientMap)}function g(E,M){E.metalness.value=M.metalness,M.metalnessMap&&(E.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,E.metalnessMapTransform)),E.roughness.value=M.roughness,M.roughnessMap&&(E.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,E.roughnessMapTransform)),M.envMap&&(E.envMapIntensity.value=M.envMapIntensity)}function y(E,M,H){E.ior.value=M.ior,M.sheen>0&&(E.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),E.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(E.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,E.sheenColorMapTransform)),M.sheenRoughnessMap&&(E.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,E.sheenRoughnessMapTransform))),M.clearcoat>0&&(E.clearcoat.value=M.clearcoat,E.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(E.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,E.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(E.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===jn&&E.clearcoatNormalScale.value.negate())),M.dispersion>0&&(E.dispersion.value=M.dispersion),M.iridescence>0&&(E.iridescence.value=M.iridescence,E.iridescenceIOR.value=M.iridescenceIOR,E.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(E.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,E.iridescenceMapTransform)),M.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),M.transmission>0&&(E.transmission.value=M.transmission,E.transmissionSamplerMap.value=H.texture,E.transmissionSamplerSize.value.set(H.width,H.height),M.transmissionMap&&(E.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,E.transmissionMapTransform)),E.thickness.value=M.thickness,M.thicknessMap&&(E.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=M.attenuationDistance,E.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(E.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(E.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=M.specularIntensity,E.specularColor.value.copy(M.specularColor),M.specularColorMap&&(E.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,E.specularColorMapTransform)),M.specularIntensityMap&&(E.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,E.specularIntensityMapTransform))}function b(E,M){M.matcap&&(E.matcap.value=M.matcap)}function w(E,M){const H=e.get(M).light;E.referencePosition.value.setFromMatrixPosition(H.matrixWorld),E.nearDistance.value=H.shadow.camera.near,E.farDistance.value=H.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function cA(s,e,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,F){const N=F.program;r.uniformBlockBinding(C,N)}function h(C,F){let N=l[C.id];N===void 0&&(E(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",H));const O=F.program;r.updateUBOMapping(C,O);const T=e.render.frame;c[C.id]!==T&&(g(C),c[C.id]=T)}function _(C){const F=x();C.__bindingPointIndex=F;const N=s.createBuffer(),O=C.__size,T=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,O,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,N),N}function x(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const F=l[C.id],N=C.uniforms,O=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let T=0,L=N.length;T<L;T++){const j=N[T];if(Array.isArray(j))for(let V=0,$=j.length;V<$;V++)y(j[V],T,V,O);else y(j,T,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,F,N,O){if(w(C,F,N,O)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let j=0;for(let V=0;V<L.length;V++){const $=L[V],ge=M($);b($,C.__data,j),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(j+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,C.__data)}}function b(C,F,N){typeof C=="number"||typeof C=="boolean"?F[0]=C:C.isMatrix3?(F[0]=C.elements[0],F[1]=C.elements[1],F[2]=C.elements[2],F[3]=0,F[4]=C.elements[3],F[5]=C.elements[4],F[6]=C.elements[5],F[7]=0,F[8]=C.elements[6],F[9]=C.elements[7],F[10]=C.elements[8],F[11]=0):ArrayBuffer.isView(C)?F.set(new C.constructor(C.buffer,C.byteOffset,F.length)):C.toArray(F,N)}function w(C,F,N,O){const T=C.value,L=F+"_"+N;if(O[L]===void 0)return typeof T=="number"||typeof T=="boolean"?O[L]=T:ArrayBuffer.isView(T)?O[L]=T.slice():O[L]=T.clone(),!0;{const j=O[L];if(typeof T=="number"||typeof T=="boolean"){if(j!==T)return O[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(j.equals(T)===!1)return j.copy(T),!0}}return!1}function E(C){const F=C.uniforms;let N=0;const O=16;for(let L=0,j=F.length;L<j;L++){const V=Array.isArray(F[L])?F[L]:[F[L]];for(let $=0,ge=V.length;$<ge;$++){const pe=V[$],ee=Array.isArray(pe.value)?pe.value:[pe.value];for(let I=0,G=ee.length;I<G;I++){const X=ee[I],le=M(X),_e=N%O,D=_e%le.boundary,Q=_e+D;N+=D,Q!==0&&O-Q<le.storage&&(N+=O-Q),pe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=N,N+=le.storage}}}const T=N%O;return T>0&&(N+=O-T),C.__size=N,C.__cache={},this}function M(C){const F={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(F.boundary=4,F.storage=4):C.isVector2?(F.boundary=8,F.storage=8):C.isVector3||C.isColor?(F.boundary=16,F.storage=12):C.isVector4?(F.boundary=16,F.storage=16):C.isMatrix3?(F.boundary=48,F.storage=48):C.isMatrix4?(F.boundary=64,F.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(F.boundary=16,F.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),F}function H(C){const F=C.target;F.removeEventListener("dispose",H);const N=d.indexOf(F.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function B(){for(const C in l)s.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:B}}const uA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function fA(){return ki===null&&(ki=new QM(uA,16,16,Br,Ta),ki.name="DFG_LUT",ki.minFilter=Pn,ki.magFilter=Pn,ki.wrapS=ya,ki.wrapT=ya,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class dA{constructor(e={}){const{canvas:i=hM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Si}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const w=y,E=new Set([ep,$h,Jh]),M=new Set([Si,ji,$o,el,Kh,Qh]),H=new Uint32Array(4),B=new Int32Array(4),C=new oe;let F=null,N=null;const O=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let V=!1,$=null,ge=null,pe=null,ee=null;this._outputColorSpace=Zn;let I=0,G=0,X=null,le=-1,_e=null;const D=new ln,Q=new ln;let be=null;const Ce=new Nt(0);let Ne=0,ne=i.width,Me=i.height,Ee=1,Be=null,tt=null;const je=new ln(0,0,ne,Me),Gt=new ln(0,0,ne,Me);let ot=!1;const ht=new Vv;let pt=!1,ft=!1;const jt=new fn,qt=new oe,Kt=new ln,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function rn(){return X===null?Ee:1}let Z=r;function Dt(A,K){return i.getContext(A,K)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yh}`),i.addEventListener("webglcontextlost",$t,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),Z===null){const K="webgl2";if(Z=Dt(K,A),Z===null)throw Dt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let vt,U,S,q,te,fe,Ae,Ue,he,me,Re,He,Pe,Le,Qe,Je,at,Y,we,xe,De,ze,Te;function Ye(){vt=new fT(Z),vt.init(),De=new nA(Z,vt),U=new iT(Z,vt,e,De),S=new eA(Z,vt),U.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),ge=Z.createFramebuffer(),pe=Z.createFramebuffer(),ee=Z.createFramebuffer(),q=new pT(Z),te=new H2,fe=new tA(Z,vt,S,te,U,De,q),Ae=new uT(j),Ue=new vy(Z),ze=new tT(Z,Ue),he=new dT(Z,Ue,q,ze),me=new gT(Z,he,Ue,ze,q),Y=new mT(Z,U,fe),Qe=new aT(te),Re=new B2(j,Ae,vt,U,ze,Qe),He=new lA(j,te),Pe=new G2,Le=new Z2(vt),at=new eT(j,Ae,S,me,b,m),Je=new $2(j,me,U),Te=new cA(Z,q,U,S),we=new nT(Z,vt,q),xe=new hT(Z,vt,q),q.programs=Re.programs,j.capabilities=U,j.extensions=vt,j.properties=te,j.renderLists=Pe,j.shadowMap=Je,j.state=S,j.info=q}Ye(),w!==Si&&(L=new vT(w,i.width,i.height,p,l,c));const ke=new sA(j,Z);this.xr=ke,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ne,Me,!1))},this.getSize=function(A){return A.set(ne,Me)},this.setSize=function(A,K,ce=!0){if(ke.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,Me=K,i.width=Math.floor(A*Ee),i.height=Math.floor(K*Ee),ce===!0&&(i.style.width=A+"px",i.style.height=K+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(ne*Ee,Me*Ee).floor()},this.setDrawingBufferSize=function(A,K,ce){ne=A,Me=K,Ee=ce,i.width=Math.floor(A*ce),i.height=Math.floor(K*ce),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(w===Si){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,K,ce,re){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,K,ce,re),S.viewport(D.copy(je).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Gt)},this.setScissor=function(A,K,ce,re){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,K,ce,re),S.scissor(Q.copy(Gt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){S.setScissorTest(ot=A)},this.setOpaqueSort=function(A){Be=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,ce=!0){let re=0;if(A){let se=!1;if(X!==null){const Fe=X.texture.format;se=E.has(Fe)}if(se){const Fe=X.texture.type,Ge=M.has(Fe),Oe=at.getClearColor(),We=at.getClearAlpha(),Xe=Oe.r,$e=Oe.g,lt=Oe.b;Ge?(H[0]=Xe,H[1]=$e,H[2]=lt,H[3]=We,Z.clearBufferuiv(Z.COLOR,0,H)):(B[0]=Xe,B[1]=$e,B[2]=lt,B[3]=We,Z.clearBufferiv(Z.COLOR,0,B))}else re|=Z.COLOR_BUFFER_BIT}K&&(re|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(re|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){i.removeEventListener("webglcontextlost",$t,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),at.dispose(),Pe.dispose(),Le.dispose(),te.dispose(),Ae.dispose(),me.dispose(),ze.dispose(),Te.dispose(),Re.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",dn),ke.removeEventListener("sessionend",Tn),Vn.stop()};function $t(A){A.preventDefault(),c_("WebGLRenderer: Context Lost."),V=!0}function Pt(){c_("WebGLRenderer: Context Restored."),V=!1;const A=q.autoReset,K=Je.enabled,ce=Je.autoUpdate,re=Je.needsUpdate,se=Je.type;Ye(),q.autoReset=A,Je.enabled=K,Je.autoUpdate=ce,Je.needsUpdate=re,Je.type=se}function Qn(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Jn(A){const K=A.target;K.removeEventListener("dispose",Jn),Ys(K)}function Ys(A){Zs(A),te.remove(A)}function Zs(A){const K=te.get(A).programs;K!==void 0&&(K.forEach(function(ce){Re.releaseProgram(ce)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ce,re,se,Fe){K===null&&(K=an);const Ge=se.isMesh&&se.matrixWorld.determinantAffine()<0,Oe=wa(A,K,ce,re,se);S.setMaterial(re,Ge);let We=ce.index,Xe=1;if(re.wireframe===!0){if(We=he.getWireframeAttribute(ce),We===void 0)return;Xe=2}const $e=ce.drawRange,lt=ce.attributes.position;let Ke=$e.start*Xe,At=($e.start+$e.count)*Xe;Fe!==null&&(Ke=Math.max(Ke,Fe.start*Xe),At=Math.min(At,(Fe.start+Fe.count)*Xe)),We!==null?(Ke=Math.max(Ke,0),At=Math.min(At,We.count)):lt!=null&&(Ke=Math.max(Ke,0),At=Math.min(At,lt.count));const en=At-Ke;if(en<0||en===1/0)return;ze.setup(se,re,Oe,ce,We);let Yt,Ft=we;if(We!==null&&(Yt=Ue.get(We),Ft=xe,Ft.setIndex(Yt)),se.isMesh)re.wireframe===!0?(S.setLineWidth(re.wireframeLinewidth*rn()),Ft.setMode(Z.LINES)):Ft.setMode(Z.TRIANGLES);else if(se.isLine){let It=re.linewidth;It===void 0&&(It=1),S.setLineWidth(It*rn()),se.isLineSegments?Ft.setMode(Z.LINES):se.isLineLoop?Ft.setMode(Z.LINE_LOOP):Ft.setMode(Z.LINE_STRIP)}else se.isPoints?Ft.setMode(Z.POINTS):se.isSprite&&Ft.setMode(Z.TRIANGLES);if(se.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const It=se._multiDrawStarts,Ve=se._multiDrawCounts,Un=se._multiDrawCount,mt=We?Ue.get(We).bytesPerElement:1,xn=te.get(re).currentProgram.getUniforms();for(let $n=0;$n<Un;$n++)xn.setValue(Z,"_gl_DrawID",$n),Ft.render(It[$n]/mt,Ve[$n])}else if(se.isInstancedMesh)Ft.renderInstances(Ke,en,se.count);else if(ce.isInstancedBufferGeometry){const It=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ve=Math.min(ce.instanceCount,It);Ft.renderInstances(Ke,en,Ve)}else Ft.render(Ke,en)};function js(A,K,ce){A.transparent===!0&&A.side===Sa&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Ca(A,K,ce),A.side=lr,A.needsUpdate=!0,Ca(A,K,ce),A.side=Sa):Ca(A,K,ce)}this.compile=function(A,K,ce=null){ce===null&&(ce=A),N=Le.get(ce),N.init(K),T.push(N),ce.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),A!==ce&&A.traverseVisible(function(se){se.isLight&&se.layers.test(K.layers)&&(N.pushLight(se),se.castShadow&&N.pushShadow(se))}),N.setupLights();const re=new Set;return A.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Fe=se.material;if(Fe)if(Array.isArray(Fe))for(let Ge=0;Ge<Fe.length;Ge++){const Oe=Fe[Ge];js(Oe,ce,se),re.add(Oe)}else js(Fe,ce,se),re.add(Fe)}),N=T.pop(),re},this.compileAsync=function(A,K,ce=null){const re=this.compile(A,K,ce);return new Promise(se=>{function Fe(){if(re.forEach(function(Ge){te.get(Ge).currentProgram.isReady()&&re.delete(Ge)}),re.size===0){se(A);return}setTimeout(Fe,10)}vt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Gr=null;function Fi(A){Gr&&Gr(A)}function dn(){Vn.stop()}function Tn(){Vn.start()}const Vn=new qv;Vn.setAnimationLoop(Fi),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(A){Gr=A,ke.setAnimationLoop(A),A===null?Vn.stop():Vn.start()},ke.addEventListener("sessionstart",dn),ke.addEventListener("sessionend",Tn),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;$!==null&&$.renderStart(A,K);const ce=ke.enabled===!0&&ke.isPresenting===!0,re=L!==null&&(X===null||ce)&&L.begin(j,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(K),K=ke.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,K,X),N=Le.get(A,T.length),N.init(K),N.state.textureUnits=fe.getTextureUnits(),T.push(N),jt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ht.setFromProjectionMatrix(jt,qi,K.reversedDepth),ft=this.localClippingEnabled,pt=Qe.init(this.clippingPlanes,ft),F=Pe.get(A,O.length),F.init(),O.push(F),ke.enabled===!0&&ke.isPresenting===!0){const Ge=j.xr.getDepthSensingMesh();Ge!==null&&cr(Ge,K,-1/0,j.sortObjects)}cr(A,K,0,j.sortObjects),F.finish(),j.sortObjects===!0&&F.sort(Be,tt,K.reversedDepth),Ot=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ot&&at.addToRenderList(F,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Qe.beginShadows();const se=N.state.shadowsArray;if(Je.render(se,A,K),pt===!0&&Qe.endShadows(),(re&&L.hasRenderPass())===!1){const Ge=F.opaque,Oe=F.transmissive;if(N.setupLights(),K.isArrayCamera){const We=K.cameras;if(Oe.length>0)for(let Xe=0,$e=We.length;Xe<$e;Xe++){const lt=We[Xe];ll(Ge,Oe,A,lt)}Ot&&at.render(A);for(let Xe=0,$e=We.length;Xe<$e;Xe++){const lt=We[Xe];ol(F,A,lt,lt.viewport)}}else Oe.length>0&&ll(Ge,Oe,A,K),Ot&&at.render(A),ol(F,A,K)}X!==null&&G===0&&(fe.updateMultisampleRenderTarget(X),fe.updateRenderTargetMipmap(X)),re&&L.end(j),A.isScene===!0&&A.onAfterRender(j,A,K),ze.resetDefaultState(),le=-1,_e=null,T.pop(),T.length>0?(N=T[T.length-1],fe.setTextureUnits(N.state.textureUnits),pt===!0&&Qe.setGlobalState(j.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?F=O[O.length-1]:F=null,$!==null&&$.renderEnd()};function cr(A,K,ce,re){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ht.intersectsSprite(A)){re&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(jt);const Ge=me.update(A),Oe=A.material;Oe.visible&&F.push(A,Ge,Oe,ce,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ht.intersectsObject(A))){const Ge=me.update(A),Oe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Kt.copy(Ge.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(jt)),Array.isArray(Oe)){const We=Ge.groups;for(let Xe=0,$e=We.length;Xe<$e;Xe++){const lt=We[Xe],Ke=Oe[lt.materialIndex];Ke&&Ke.visible&&F.push(A,Ge,Ke,ce,Kt.z,lt)}}else Oe.visible&&F.push(A,Ge,Oe,ce,Kt.z,null)}}const Fe=A.children;for(let Ge=0,Oe=Fe.length;Ge<Oe;Ge++)cr(Fe[Ge],K,ce,re)}function ol(A,K,ce,re){const{opaque:se,transmissive:Fe,transparent:Ge}=A;N.setupLightsView(ce),pt===!0&&Qe.setGlobalState(j.clippingPlanes,ce),re&&S.viewport(D.copy(re)),se.length>0&&ur(se,K,ce),Fe.length>0&&ur(Fe,K,ce),Ge.length>0&&ur(Ge,K,ce),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ll(A,K,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[re.id]===void 0){const Ke=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[re.id]=new Zi(1,1,{generateMipmaps:!0,type:Ke?Ta:Si,minFilter:Fr,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Fe=N.state.transmissionRenderTarget[re.id],Ge=re.viewport||D;Fe.setSize(Ge.z*j.transmissionResolutionScale,Ge.w*j.transmissionResolutionScale);const Oe=j.getRenderTarget(),We=j.getActiveCubeFace(),Xe=j.getActiveMipmapLevel();j.setRenderTarget(Fe),j.getClearColor(Ce),Ne=j.getClearAlpha(),Ne<1&&j.setClearColor(16777215,.5),j.clear(),Ot&&at.render(ce);const $e=j.toneMapping;j.toneMapping=Yi;const lt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),N.setupLightsView(re),pt===!0&&Qe.setGlobalState(j.clippingPlanes,re),ur(A,ce,re),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let At=0,en=K.length;At<en;At++){const Yt=K[At],{object:Ft,geometry:It,material:Ve,group:Un}=Yt;if(Ve.side===Sa&&Ft.layers.test(re.layers)){const mt=Ve.side;Ve.side=jn,Ve.needsUpdate=!0,Ra(Ft,ce,re,It,Ve,Un),Ve.side=mt,Ve.needsUpdate=!0,Ke=!0}}Ke===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}j.setRenderTarget(Oe,We,Xe),j.setClearColor(Ce,Ne),lt!==void 0&&(re.viewport=lt),j.toneMapping=$e}function ur(A,K,ce){const re=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Fe=A.length;se<Fe;se++){const Ge=A[se],{object:Oe,geometry:We,group:Xe}=Ge;let $e=Ge.material;$e.allowOverride===!0&&re!==null&&($e=re),Oe.layers.test(ce.layers)&&Ra(Oe,K,ce,We,$e,Xe)}}function Ra(A,K,ce,re,se,Fe){A.onBeforeRender(j,K,ce,re,se,Fe),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(j,K,ce,re,A,Fe),se.transparent===!0&&se.side===Sa&&se.forceSinglePass===!1?(se.side=jn,se.needsUpdate=!0,j.renderBufferDirect(ce,K,re,se,A,Fe),se.side=lr,se.needsUpdate=!0,j.renderBufferDirect(ce,K,re,se,A,Fe),se.side=Sa):j.renderBufferDirect(ce,K,re,se,A,Fe),A.onAfterRender(j,K,ce,re,se,Fe)}function Ca(A,K,ce){K.isScene!==!0&&(K=an);const re=te.get(A),se=N.state.lights,Fe=N.state.shadowsArray,Ge=se.state.version,Oe=Re.getParameters(A,se.state,Fe,K,ce,N.state.lightProbeGridArray),We=Re.getProgramCacheKey(Oe);let Xe=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,re.fog=K.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Ae.get(A.envMap||re.environment,$e),re.envMapRotation=re.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",Jn),Xe=new Map,re.programs=Xe);let lt=Xe.get(We);if(lt!==void 0){if(re.currentProgram===lt&&re.lightsStateVersion===Ge)return Qi(A,Oe),lt}else Oe.uniforms=Re.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,ce,Oe),A.onBeforeCompile(Oe,j),lt=Re.acquireProgram(Oe,We),Xe.set(We,lt),re.uniforms=Oe.uniforms;const Ke=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Qe.uniform),Qi(A,Oe),re.needsLights=cl(A),re.lightsStateVersion=Ge,re.needsLights&&(Ke.ambientLightColor.value=se.state.ambient,Ke.lightProbe.value=se.state.probe,Ke.directionalLights.value=se.state.directional,Ke.directionalLightShadows.value=se.state.directionalShadow,Ke.spotLights.value=se.state.spot,Ke.spotLightShadows.value=se.state.spotShadow,Ke.rectAreaLights.value=se.state.rectArea,Ke.ltc_1.value=se.state.rectAreaLTC1,Ke.ltc_2.value=se.state.rectAreaLTC2,Ke.pointLights.value=se.state.point,Ke.pointLightShadows.value=se.state.pointShadow,Ke.hemisphereLights.value=se.state.hemi,Ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ke.spotLightMatrix.value=se.state.spotLightMatrix,Ke.spotLightMap.value=se.state.spotLightMap,Ke.pointShadowMatrix.value=se.state.pointShadowMatrix),re.lightProbeGrid=N.state.lightProbeGridArray.length>0,re.currentProgram=lt,re.uniformsList=null,lt}function Ki(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=Zc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Qi(A,K){const ce=te.get(A);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function fr(A,K){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(K.matrixWorld);for(let ce=0,re=A.length;ce<re;ce++){const se=A[ce];if(se.texture!==null&&se.boundingBox.containsPoint(C))return se}return null}function wa(A,K,ce,re,se){K.isScene!==!0&&(K=an),fe.resetTextureUnits();const Fe=K.fog,Ge=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?K.environment:null,Oe=X===null?j.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Et.workingColorSpace,We=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Xe=Ae.get(re.envMap||Ge,We),$e=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,lt=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!ce.morphAttributes.position,At=!!ce.morphAttributes.normal,en=!!ce.morphAttributes.color;let Yt=Yi;re.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Yt=j.toneMapping);const Ft=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,It=Ft!==void 0?Ft.length:0,Ve=te.get(re),Un=N.state.lights;if(pt===!0&&(ft===!0||A!==_e)){const Lt=A===_e&&re.id===le;Qe.setState(re,A,Lt)}let mt=!1;re.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Un.state.version||Ve.outputColorSpace!==Oe||se.isBatchedMesh&&Ve.batching===!1||!se.isBatchedMesh&&Ve.batching===!0||se.isBatchedMesh&&Ve.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ve.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ve.instancing===!1||!se.isInstancedMesh&&Ve.instancing===!0||se.isSkinnedMesh&&Ve.skinning===!1||!se.isSkinnedMesh&&Ve.skinning===!0||se.isInstancedMesh&&Ve.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ve.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ve.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ve.instancingMorph===!1&&se.morphTexture!==null||Ve.envMap!==Xe||re.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Qe.numPlanes||Ve.numIntersection!==Qe.numIntersection)||Ve.vertexAlphas!==$e||Ve.vertexTangents!==lt||Ve.morphTargets!==Ke||Ve.morphNormals!==At||Ve.morphColors!==en||Ve.toneMapping!==Yt||Ve.morphTargetsCount!==It||!!Ve.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ve.__version=re.version);let xn=Ve.currentProgram;mt===!0&&(xn=Ca(re,K,se),$&&re.isNodeMaterial&&$.onUpdateProgram(re,xn,Ve));let $n=!1,yi=!1,ei=!1;const zt=xn.getUniforms(),tn=Ve.uniforms;if(S.useProgram(xn.program)&&($n=!0,yi=!0,ei=!0),re.id!==le&&(le=re.id,yi=!0),Ve.needsLights){const Lt=fr(N.state.lightProbeGridArray,se);Ve.lightProbeGrid!==Lt&&(Ve.lightProbeGrid=Lt,yi=!0)}if($n||_e!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(Z,"projectionMatrix",A.projectionMatrix),zt.setValue(Z,"viewMatrix",A.matrixWorldInverse);const Ii=zt.map.cameraPosition;Ii!==void 0&&Ii.setValue(Z,qt.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&zt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&zt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),_e!==A&&(_e=A,yi=!0,ei=!0)}if(Ve.needsLights&&(Un.state.directionalShadowMap.length>0&&zt.setValue(Z,"directionalShadowMap",Un.state.directionalShadowMap,fe),Un.state.spotShadowMap.length>0&&zt.setValue(Z,"spotShadowMap",Un.state.spotShadowMap,fe),Un.state.pointShadowMap.length>0&&zt.setValue(Z,"pointShadowMap",Un.state.pointShadowMap,fe)),se.isSkinnedMesh){zt.setOptional(Z,se,"bindMatrix"),zt.setOptional(Z,se,"bindMatrixInverse");const Lt=se.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),zt.setValue(Z,"boneTexture",Lt.boneTexture,fe))}se.isBatchedMesh&&(zt.setOptional(Z,se,"batchingTexture"),zt.setValue(Z,"batchingTexture",se._matricesTexture,fe),zt.setOptional(Z,se,"batchingIdTexture"),zt.setValue(Z,"batchingIdTexture",se._indirectTexture,fe),zt.setOptional(Z,se,"batchingColorTexture"),se._colorsTexture!==null&&zt.setValue(Z,"batchingColorTexture",se._colorsTexture,fe));const Ei=ce.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Y.update(se,ce,xn),(yi||Ve.receiveShadow!==se.receiveShadow)&&(Ve.receiveShadow=se.receiveShadow,zt.setValue(Z,"receiveShadow",se.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&K.environment!==null&&(tn.envMapIntensity.value=K.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=fA()),yi){if(zt.setValue(Z,"toneMappingExposure",j.toneMappingExposure),Ve.needsLights&&hn(tn,ei),Fe&&re.fog===!0&&He.refreshFogUniforms(tn,Fe),He.refreshMaterialUniforms(tn,re,Ee,Me,N.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Lt=Ve.lightProbeGrid;tn.probesSH.value=Lt.texture,tn.probesMin.value.copy(Lt.boundingBox.min),tn.probesMax.value.copy(Lt.boundingBox.max),tn.probesResolution.value.copy(Lt.resolution)}Zc.upload(Z,Ki(Ve),tn,fe)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Zc.upload(Z,Ki(Ve),tn,fe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&zt.setValue(Z,"center",se.center),zt.setValue(Z,"modelViewMatrix",se.modelViewMatrix),zt.setValue(Z,"normalMatrix",se.normalMatrix),zt.setValue(Z,"modelMatrix",se.matrixWorld),re.uniformsGroups!==void 0){const Lt=re.uniformsGroups;for(let Ii=0,Da=Lt.length;Ii<Da;Ii++){const dr=Lt[Ii];Te.update(dr,xn),Te.bind(dr,xn)}}return xn}function hn(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function cl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,K,ce){const re=te.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=K,te.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const ce=te.get(A);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ce=0){X=A,I=K,G=ce;let re=null,se=!1,Fe=!1;if(A){const Oe=te.get(A);if(Oe.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(Z.FRAMEBUFFER,Oe.__webglFramebuffer),D.copy(A.viewport),Q.copy(A.scissor),be=A.scissorTest,S.viewport(D),S.scissor(Q),S.setScissorTest(be),le=-1;return}else if(Oe.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Oe.__hasExternalTextures)fe.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&te.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const Xe=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[K])?re=Xe[K][ce]:re=Xe[K],se=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?re=te.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?re=Xe[ce]:re=Xe,D.copy(A.viewport),Q.copy(A.scissor),be=A.scissorTest}else D.copy(je).multiplyScalar(Ee).floor(),Q.copy(Gt).multiplyScalar(Ee).floor(),be=ot;if(ce!==0&&(re=ge),S.bindFramebuffer(Z.FRAMEBUFFER,re)&&S.drawBuffers(A,re),S.viewport(D),S.scissor(Q),S.setScissorTest(be),se){const Oe=te.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,ce)}else if(Fe){const Oe=K;for(let We=0;We<A.textures.length;We++){const Xe=te.get(A.textures[We]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+We,Xe.__webglTexture,ce,Oe)}}else if(A!==null&&ce!==0){const Oe=te.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Oe.__webglTexture,ce)}le=-1},this.readRenderTargetPixels=function(A,K,ce,re,se,Fe,Ge,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){S.bindFramebuffer(Z.FRAMEBUFFER,We);try{const Xe=A.textures[Oe],$e=Xe.format,lt=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable($e)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-re&&ce>=0&&ce<=A.height-se&&Z.readPixels(K,ce,re,se,De.convert($e),De.convert(lt),Fe)}finally{const Xe=X!==null?te.get(X).__webglFramebuffer:null;S.bindFramebuffer(Z.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,K,ce,re,se,Fe,Ge,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(K>=0&&K<=A.width-re&&ce>=0&&ce<=A.height-se){S.bindFramebuffer(Z.FRAMEBUFFER,We);const Xe=A.textures[Oe],$e=Xe.format,lt=Xe.type;if(A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.bufferData(Z.PIXEL_PACK_BUFFER,Fe.byteLength,Z.STREAM_READ),Z.readPixels(K,ce,re,se,De.convert($e),De.convert(lt),0);const At=X!==null?te.get(X).__webglFramebuffer:null;S.bindFramebuffer(Z.FRAMEBUFFER,At);const en=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await pM(Z,en,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Fe),Z.deleteBuffer(Ke),Z.deleteSync(en),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,ce=0){const re=Math.pow(2,-ce),se=Math.floor(A.image.width*re),Fe=Math.floor(A.image.height*re),Ge=K!==null?K.x:0,Oe=K!==null?K.y:0;fe.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,Ge,Oe,se,Fe),S.unbindTexture()},this.copyTextureToTexture=function(A,K,ce=null,re=null,se=0,Fe=0){let Ge,Oe,We,Xe,$e,lt,Ke,At,en;const Yt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ce!==null)Ge=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,Xe=ce.min.x,$e=ce.min.y,lt=ce.isBox3?ce.min.z:0;else{const tn=Math.pow(2,-se);Ge=Math.floor(Yt.width*tn),Oe=Math.floor(Yt.height*tn),A.isDataArrayTexture?We=Yt.depth:A.isData3DTexture?We=Math.floor(Yt.depth*tn):We=1,Xe=0,$e=0,lt=0}re!==null?(Ke=re.x,At=re.y,en=re.z):(Ke=0,At=0,en=0);const Ft=De.convert(K.format),It=De.convert(K.type);let Ve;K.isData3DTexture?(fe.setTexture3D(K,0),Ve=Z.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(fe.setTexture2DArray(K,0),Ve=Z.TEXTURE_2D_ARRAY):(fe.setTexture2D(K,0),Ve=Z.TEXTURE_2D),S.activeTexture(Z.TEXTURE0),S.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,K.flipY),S.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),S.pixelStorei(Z.UNPACK_ALIGNMENT,K.unpackAlignment);const Un=S.getParameter(Z.UNPACK_ROW_LENGTH),mt=S.getParameter(Z.UNPACK_IMAGE_HEIGHT),xn=S.getParameter(Z.UNPACK_SKIP_PIXELS),$n=S.getParameter(Z.UNPACK_SKIP_ROWS),yi=S.getParameter(Z.UNPACK_SKIP_IMAGES);S.pixelStorei(Z.UNPACK_ROW_LENGTH,Yt.width),S.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Yt.height),S.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xe),S.pixelStorei(Z.UNPACK_SKIP_ROWS,$e),S.pixelStorei(Z.UNPACK_SKIP_IMAGES,lt);const ei=A.isDataArrayTexture||A.isData3DTexture,zt=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const tn=te.get(A),Ei=te.get(K),Lt=te.get(tn.__renderTarget),Ii=te.get(Ei.__renderTarget);S.bindFramebuffer(Z.READ_FRAMEBUFFER,Lt.__webglFramebuffer),S.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Da=0;Da<We;Da++)ei&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,te.get(A).__webglTexture,se,lt+Da),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,te.get(K).__webglTexture,Fe,en+Da)),Z.blitFramebuffer(Xe,$e,Ge,Oe,Ke,At,Ge,Oe,Z.DEPTH_BUFFER_BIT,Z.NEAREST);S.bindFramebuffer(Z.READ_FRAMEBUFFER,null),S.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(se!==0||A.isRenderTargetTexture||te.has(A)){const tn=te.get(A),Ei=te.get(K);S.bindFramebuffer(Z.READ_FRAMEBUFFER,pe),S.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ee);for(let Lt=0;Lt<We;Lt++)ei?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,tn.__webglTexture,se,lt+Lt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,tn.__webglTexture,se),zt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ei.__webglTexture,Fe,en+Lt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ei.__webglTexture,Fe),se!==0?Z.blitFramebuffer(Xe,$e,Ge,Oe,Ke,At,Ge,Oe,Z.COLOR_BUFFER_BIT,Z.NEAREST):zt?Z.copyTexSubImage3D(Ve,Fe,Ke,At,en+Lt,Xe,$e,Ge,Oe):Z.copyTexSubImage2D(Ve,Fe,Ke,At,Xe,$e,Ge,Oe);S.bindFramebuffer(Z.READ_FRAMEBUFFER,null),S.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(Ve,Fe,Ke,At,en,Ge,Oe,We,Ft,It,Yt.data):K.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ve,Fe,Ke,At,en,Ge,Oe,We,Ft,Yt.data):Z.texSubImage3D(Ve,Fe,Ke,At,en,Ge,Oe,We,Ft,It,Yt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Fe,Ke,At,Ge,Oe,Ft,It,Yt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Fe,Ke,At,Yt.width,Yt.height,Ft,Yt.data):Z.texSubImage2D(Z.TEXTURE_2D,Fe,Ke,At,Ge,Oe,Ft,It,Yt);S.pixelStorei(Z.UNPACK_ROW_LENGTH,Un),S.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,mt),S.pixelStorei(Z.UNPACK_SKIP_PIXELS,xn),S.pixelStorei(Z.UNPACK_SKIP_ROWS,$n),S.pixelStorei(Z.UNPACK_SKIP_IMAGES,yi),Fe===0&&K.generateMipmaps&&Z.generateMipmap(Ve),S.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){I=0,G=0,X=null,S.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}function hA({paused:s,result:e,onInteract:i}){const r=P.useRef(null),l=P.useRef(null),c=P.useRef(()=>{}),d=P.useRef({paused:s,result:e,onInteract:i}),[p,m]=P.useState(!1);return P.useEffect(()=>{d.current={paused:s,result:e,onInteract:i},c.current()},[s,e,i]),P.useEffect(()=>{const h=r.current;let _=!1,x=0,g=0,y=0,b=0,w=performance.now(),E=1,M=1,H=1,B=0;const C=.013;let F=C,N=!1,O=null,T=0,L=0,j=0;const V=l.current,$=h.querySelector(".space-fallback");let ge=!1,pe;try{pe=new dA({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return}pe.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),pe.setClearColor(263942,1),pe.outputColorSpace=Zn,pe.toneMapping=Zh,pe.toneMappingExposure=.85,pe.domElement.setAttribute("aria-hidden","true"),h.appendChild(pe.domElement);const ee=new WM,I=new op(-1,1,1,-1,.1,2e4);I.position.z=8e3;const G=new Zo;ee.add(G);const X=new rp(1,192,144),le=new ui({uniforms:{uMap:{value:null},uRadius:{value:1}},vertexShader:`
        varying vec3 vLocal;
        varying vec3 vNormal;
        void main() {
          vLocal = position;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        uniform float uRadius;
        varying vec3 vLocal;
        varying vec3 vNormal;
        void main() {
          vec3 n = normalize(vNormal);
          vec3 local = normalize(vLocal);
          // Continuous triplanar relief stays seamless through a full rotation.
          vec3 weights = pow(abs(local),vec3(6.0));
          weights /= dot(weights,vec3(1.0));
          vec3 tex = texture2D(uMap,local.yz*2.4+vec2(0.23,0.17)).rgb*weights.x
                   + texture2D(uMap,local.xz*2.4+vec2(0.23,0.17)).rgb*weights.y
                   + texture2D(uMap,local.xy*2.4+vec2(0.23,0.17)).rgb*weights.z;
          float rock = dot(tex,vec3(0.333));
          float relief = pow(clamp((rock-0.14)*2.7,0.0,1.0),1.7);
          float depth = max(0.0,uRadius*(1.0-length(n.xy)));
          float lateral = exp(-5.0*n.x*n.x);
          float light = (0.43*exp(-depth/13.0)+0.09*exp(-depth/65.0))*lateral;
          vec3 night = vec3(0.004,0.011,0.007);
          vec3 reflected = vec3(0.96,0.87,0.72)*light*(0.28+relief*1.25);
          vec3 rim = vec3(0.95,0.78,0.51)*exp(-depth/0.95)*(0.6+rock*0.4)*lateral;
          gl_FragColor = vec4(night+reflected+rim,1.0);
        }
      `}),_e=new Oi(X,le);_e.rotation.set(0,0,0),G.add(_e);const D=new ui({transparent:!0,depthWrite:!1,blending:nh,uniforms:{uCenter:{value:new wt},uRadius:{value:1},uWidth:{value:1},uRatio:{value:pe.getPixelRatio()},uTime:{value:0}},vertexShader:"void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform vec2 uCenter;
        uniform float uRadius;
        uniform float uWidth;
        uniform float uRatio;
        uniform float uTime;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
        }
        void main() {
          vec2 p = gl_FragCoord.xy / uRatio;
          float distance = length(p-uCenter)-uRadius;
          float d = max(0.0, distance);
          float x = (p.x-uCenter.x)/uWidth;
          float centreLight = 0.28 + 0.72 * exp(-x*x*8.0);
          float smoke = noise(vec2(p.x*0.017+uTime*0.012,d*0.07-uTime*0.009));
          float fine = noise(vec2(p.x*0.047-uTime*0.015,d*0.13));
          float haze = exp(-d/5.0)*0.62 + exp(-d/24.0)*0.08 + exp(-d/60.0)*0.014;
          haze *= (0.80+0.15*smoke+0.05*fine)*centreLight;
          vec3 colour = mix(vec3(0.65,0.61,0.43),vec3(1.0,0.78,0.47),smoke*0.3+0.6);
          vec3 scatter = colour*haze;
          float wisp = sin(uTime*0.27) * (noise(vec2(p.x*0.012+uTime*0.022,d*0.04))-0.3);
          scatter *= 1.0+wisp*0.16;
          float glintX = uCenter.x+uWidth*0.3*sin(uTime*0.09+0.9);
          float glint = exp(-pow((p.x-glintX)/18.0,2.0))*pow(max(sin(uTime*0.8+0.3),0.0),8.0)*exp(-d/3.0)*0.10;
          scatter += vec3(0.95,0.80,0.56)*glint;
          // A low atmospheric shimmer, a few pixels above the illuminated limb.
          // It drifts laterally; it never develops into a billowing smoke cloud.
          float crest = 11.0+sin(p.x*0.014-uTime*0.16)*2.0+sin(p.x*0.031+uTime*0.11)*1.5;
          float ribbon = exp(-pow((d-crest)/7.0,2.0))*exp(-d/38.0);
          float threads = pow(noise(vec2(p.x*0.018-uTime*0.07,d*0.035+uTime*0.02)),3.0);
          scatter += vec3(0.95,0.70,0.39)*ribbon*threads*0.034*centreLight;
          gl_FragColor = vec4(scatter, smoothstep(-0.5,0.5,distance));
        }
      `}),Q=new sl(1,1),be=new Oi(Q,D);be.position.z=-1500,ee.add(be);let Ce=417;const Ne=()=>(Ce=Ce*16807%2147483647,(Ce-1)/2147483646),ne=Array.from({length:42},()=>({x:Ne(),y:Ne(),phase:Ne()*Math.PI*2,speed:.12+Ne()*.18,size:.65+Ne()*.65})),Me=new Mi,Ee=new Float32Array(ne.length*3);Me.setAttribute("position",new Li(Ee,3)),Me.setAttribute("aPhase",new Hn(ne.map(S=>S.phase),1)),Me.setAttribute("aSpeed",new Hn(ne.map(S=>S.speed),1)),Me.setAttribute("aSize",new Hn(ne.map(S=>S.size),1));const Be=new ui({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uRatio:{value:pe.getPixelRatio()}},vertexShader:`
        attribute float aPhase;
        attribute float aSpeed;
        attribute float aSize;
        uniform float uTime;
        uniform float uRatio;
        varying float vLight;
        void main() {
          float pulse = pow(0.5 + 0.5 * sin(uTime * aSpeed + aPhase), 12.0);
          vLight = 0.33 + pulse * 0.4;
          gl_PointSize = (2.6 + pulse * 2.2) * aSize * uRatio;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying float vLight;
        void main() {
          float r = length(gl_PointCoord - vec2(0.5));
          float core = exp(-r * r * 40.0);
          float halo = exp(-r * r * 14.0) * 0.16;
          gl_FragColor = vec4(0.92, 0.85, 0.71, (core + halo) * vLight);
        }
      `}),tt=new ny(Me,Be);tt.frustumCulled=!1,ee.add(tt);const je=()=>{_||!ge||(pe.render(ee,I),h.dataset.rotation=_e.rotation.y.toFixed(5),h.dataset.skyTime=y.toFixed(2),h.dataset.velocity=F.toFixed(4))},Gt=()=>{const S=window.scrollY,q=B-S,te=M-q;V.style.clipPath=`circle(${H}px at 50% ${q+H}px)`,G.position.y=-M/2-H+te,D.uniforms.uCenter.value.set(E/2,te-H),$&&($.style.transform=`translateX(-50%) translateY(${-S}px)`),h.dataset.horizon=q.toFixed(2),h.dataset.horizonDocument=B.toFixed(2),h.dataset.scrollY=S.toFixed(2),je()},ot=()=>{const S=h.clientWidth,q=h.clientHeight;(S!==E||q!==M)&&(E=S,M=q,pe.setSize(E,M),I.left=-E/2,I.right=E/2,I.top=M/2,I.bottom=-M/2,I.updateProjectionMatrix(),H=Math.max(E*1.32,M*.9),G.scale.setScalar(H),le.uniforms.uRadius.value=H,be.scale.set(E,M,1),D.uniforms.uRadius.value=H,D.uniforms.uWidth.value=E,ne.forEach((me,Re)=>{Ee[Re*3]=(me.x-.5)*E,Ee[Re*3+1]=(.5-me.y*.88)*M,Ee[Re*3+2]=-3e3}),Me.attributes.position.needsUpdate=!0);const te=window.scrollY,fe=document.querySelector(".result-hero"),Ae=fe?fe.querySelector(".calculation-jump")||fe.querySelector(".result-note"):document.querySelector(".calculator-nav, .result-note"),Ue=fe?fe.getBoundingClientRect().top+te:0,he=Ae?Ae.getBoundingClientRect().bottom+te:0;B=Math.max(Ue+M*.833,he?he+56:0),Gt()},ht=()=>{g||(g=requestAnimationFrame(()=>{g=0,_||Gt()}))};window.addEventListener("scroll",ht,{passive:!0});const pt=S=>{if(_)return;if(x=requestAnimationFrame(pt),document.hidden){w=S;return}if(S-b<32)return;const q=Math.min((S-w)/1e3,.08);w=S,b=S,!(d.current.paused&&!N)&&(y+=q,N||(_e.rotation.y+=q*F,F=C+(F-C)*Math.exp(-q*.38),_e.rotation.x*=Math.exp(-q*.22)),Be.uniforms.uTime.value=y,D.uniforms.uTime.value=y,je())},ft=S=>{var q,te;!S.isPrimary||S.pointerType==="mouse"&&S.button!==0||((te=(q=d.current).onInteract)==null||te.call(q),O=S.pointerId,N=!0,T=S.clientX,L=S.clientY,j=performance.now(),V.setPointerCapture(S.pointerId),V.dataset.dragging="true")},jt=S=>{if(!N||S.pointerId!==O)return;const q=performance.now(),te=Math.max(.008,(q-j)/1e3),fe=S.clientX-T,Ae=S.clientY-L;_e.rotation.y+=fe*.006,_e.rotation.x=xc.clamp(_e.rotation.x+Ae*.0015,-.16,.16),F=xc.lerp(F,xc.clamp(fe*.006/te,-1.25,1.25),.6),T=S.clientX,L=S.clientY,j=q,je()},qt=S=>{S.pointerId===O&&(V.hasPointerCapture(S.pointerId)&&V.releasePointerCapture(S.pointerId),N=!1,O=null,V.dataset.dragging="false",S.type==="pointercancel"&&(F=C))},Kt=S=>{var q,te;["ArrowLeft","ArrowRight"].includes(S.key)&&(S.preventDefault(),(te=(q=d.current).onInteract)==null||te.call(q),F=xc.clamp(F+(S.key==="ArrowRight"?.3:-.3),-1.25,1.25))};V.addEventListener("pointerdown",ft),V.addEventListener("pointermove",jt),V.addEventListener("pointerup",qt),V.addEventListener("pointercancel",qt),V.addEventListener("keydown",Kt);const an=new py,Ot=[];((S,q=!1)=>new Promise((te,fe)=>{an.load(S,Ae=>{if(_){Ae.dispose(),te(null);return}q&&(Ae.colorSpace=Zn),Ae.anisotropy=Math.min(4,pe.capabilities.getMaxAnisotropy()),Ot.push(Ae),te(Ae)},void 0,fe)}))("/lineage/images/rock-albedo.jpg").then(S=>{_||(S.wrapS=S.wrapT=jc,le.uniforms.uMap.value=S,ge=!0,ot(),m(!0),x=requestAnimationFrame(pt))}).catch(()=>{_||m(!1)});const Z=new ResizeObserver(ot);Z.observe(h);const Dt=document.querySelector(".experience");Dt&&Z.observe(Dt);let vt=null;c.current=()=>{const S=document.querySelector(".result-hero")||document.querySelector(".question-stage, .result-stage");vt!==S&&(vt&&Z.unobserve(vt),S&&Z.observe(S),vt=S),ot()},c.current();const U=S=>{S.preventDefault(),m(!1),cancelAnimationFrame(x)};return pe.domElement.addEventListener("webglcontextlost",U),()=>{_=!0,c.current=()=>{},cancelAnimationFrame(x),cancelAnimationFrame(g),window.removeEventListener("scroll",ht),Z.disconnect(),V.removeEventListener("pointerdown",ft),V.removeEventListener("pointermove",jt),V.removeEventListener("pointerup",qt),V.removeEventListener("pointercancel",qt),V.removeEventListener("keydown",Kt),pe.domElement.removeEventListener("webglcontextlost",U),Ot.forEach(S=>S.dispose()),X.dispose(),le.dispose(),D.dispose(),Q.dispose(),Me.dispose(),Be.dispose(),pe.dispose(),pe.domElement.remove()}},[]),z.jsxs(z.Fragment,{children:[z.jsx("div",{className:`space-scene ${p?"is-ready":""}`,ref:r,"aria-hidden":"true","data-testid":"space-scene",children:z.jsx("img",{className:"space-fallback",src:"/lineage/images/reference-horizon.png",alt:""})}),z.jsx("button",{className:"planet-control",ref:l,type:"button",disabled:!p,"aria-label":"Rotate planet with the pointer or arrow keys","data-testid":"planet-control"})]})}const nv=[["Interview preparation",[.5,.5,0],.5],["Interview",[.5,.5,0],0],["Process narrative",[.5,0,0],.8],["Flowchart",[1,0,0],.8],["Document requests",[.25,0,0],.7],["Client document collection",[0,0,0],.5],["Walkthrough evidence",[3,0,0],.85],["Missing document requests",[.5,0,0],.7],["Client supplementary documents",[0,0,0],.5],["Complete walkthrough",[.5,0,0],.6],["Senior review",[0,.25,0],.3],["Manager review",[0,0,.25],.3],["File in audit dossier",[.5,0,0],.6]],pA=8.75,mA={entities:30,walkthroughs:3,hours:8},tu={rates:[42.34285714285714,53.48571428571429,72.42857142857143],fee:85,platform:5e3,realization:100},ks={entities:{min:1,max:1e3,step:1},walkthroughs:{min:1,max:10,step:1},hours:{min:1,max:8,step:1}};function Ko(s,e){const i=ks[s];if(e===""||e==null||!Number.isFinite(Number(e)))return"Enter a number to continue.";const r=Number(e);return r<i.min||r>i.max?`Enter a value from ${i.min} to ${i.max.toLocaleString("en-GB")}.`:Number.isInteger(r)?"":"Enter a whole number."}function gA(s,e=tu){for(const B of Object.keys(ks)){const C=Ko(B,s[B]);if(C)throw new RangeError(`${B}: ${C}`)}const{rates:i,fee:r,platform:l,realization:c}=e;if(!Array.isArray(i)||i.length!==3||i.some(B=>!Number.isFinite(B)||B<0||B>1e3)||!Number.isFinite(r)||r<0||r>1e4||!Number.isFinite(l)||l<0||l>1e6||!Number.isFinite(c)||c<0||c>100)throw new RangeError("Invalid calculation assumptions.");const d=Number(s.entities)*Number(s.walkthroughs),p=Number(s.hours)/pA,m=c/100,h=nv.filter(([,B])=>B.some(Boolean)).map(([B,C,F])=>{const N=C.reduce((L,j)=>L+j,0)*p,O=N*F*m,T=C.reduce((L,j,V)=>L+j*i[V],0)*p*F*m;return{name:B,before:N,after:N-O,saved:O,value:T,saving:F*m}}),_=["Associate","Senior","Manager"].map((B,C)=>{const F=nv.reduce((O,[,T,L])=>O+T[C]*p*L*m*d,0),N=i[C];return{name:B,hoursSaved:F,savedValue:F*N,rate:N}}),x=h.reduce((B,C)=>B+C.saved,0),g=h.reduce((B,C)=>B+C.value,0),y=d*x,b=d*g,w=d*r,E=w+l,M=b-E,H=g-r;return{count:d,steps:h,roles:_,hoursBefore:d*Number(s.hours),hoursSaved:y,hoursAfter:d*Number(s.hours)-y,hoursSavedPerWalkthrough:x,hoursAfterPerWalkthrough:Number(s.hours)-x,reduction:x/Number(s.hours),daysSaved:y/8,grossValue:b,usageCost:w,softwareCost:E,netValue:M,returnMultiple:E>0?b/E:null,breakEvenWalkthroughs:H>0?Math.ceil(l/H):null}}const Ma=s=>new Intl.NumberFormat("en-IE",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(s).replace("-","−"),bt=(s,e=0)=>new Intl.NumberFormat("en-GB",{maximumFractionDigits:e}).format(s);function _A(s,e,i){const r=l=>new Intl.NumberFormat("en-IE",{style:"currency",currency:"EUR",minimumFractionDigits:Number.isInteger(l)?0:2,maximumFractionDigits:2}).format(l).replace("-","−");return["LINEAGE — ANNUAL CAPACITY VALUE ESTIMATE",`Created ${new Date().toISOString().slice(0,10)}`,"",`Client entities: ${s.entities}`,`Average walkthroughs per client: ${s.walkthroughs}`,`Team hours per walkthrough: ${s.hours}`,`Annual walkthroughs: ${i.count}`,"",`Hours freed up: ${bt(i.hoursSaved,2)}`,`Resulting time reduction: ${bt(i.reduction*100,2)}%`,`Value of time: ${Ma(i.grossValue)}`,`Lineage usage: ${Ma(i.usageCost)}`,`Annual platform fee: ${r(e.platform)}`,`Net annual capacity value after Lineage fees: ${Ma(i.netValue)}`,"","Annual value of freed time by role:",...i.roles.map(l=>`${l.name}: ${bt(l.hoursSaved,2)} hours × EUR ${l.rate.toFixed(4)}/hour = ${r(l.savedValue)}`),"",`Hourly costs (associate / senior / manager): ${e.rates.map(l=>"EUR "+l.toFixed(4)).join(" / ")}`,`Price per walkthrough: ${r(e.fee)}`,`Share of assumed time reduction: ${e.realization}%`,"","These are model assumptions, not measured or guaranteed results. Pricing is indicative and excludes VAT.","The estimate values freed capacity at internal staff costs. It is a cash saving only if your actual spending falls.","Client invoice reductions and client-side time savings are excluded to avoid double counting.","Implementation, training, discounts, price changes and financing costs are excluded.","Source: Lineage Business Model 2026, Savings worksheet, viewed 7 September 2026."].join(`
`)}const Qd=s=>({...s,rates:[...s.rates]}),iv=s=>new Intl.NumberFormat("en-IE",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:2}).format(s);function av(s){const e=[...s.rates.map((i,r)=>({key:`rate-${r}`,label:["Associate hourly cost","Senior hourly cost","Manager hourly cost"][r],value:i,max:1e3})),{key:"fee",label:"Price per walkthrough",value:s.fee,max:1e4},{key:"platform",label:"Annual platform fee",value:s.platform,max:1e6},{key:"realization",label:"Share of model reduction",value:s.realization,max:100}];return Object.fromEntries(e.flatMap(i=>i.value===""?[[i.key,`Enter a value for ${i.label.toLowerCase()}.`]]:!Number.isFinite(Number(i.value))||Number(i.value)<0||Number(i.value)>i.max?[[i.key,`${i.label} must be between 0 and ${bt(i.max)}.`]]:[]))}function vA({assumptions:s,reduction:e,onApply:i,onValidityChange:r}){const[l,c]=P.useState(()=>Qd(s)),d=P.useRef(s);P.useEffect(()=>{s!==d.current&&(c(Qd(s)),d.current=s,r(!1))},[s,r]);const p=av(l),m=Object.values(p)[0],h=g=>{c(g);const y=Object.keys(av(g)).length>0;if(r(y),y)return;const b={rates:g.rates.map(Number),fee:Number(g.fee),platform:Number(g.platform),realization:Number(g.realization)};d.current=b,i(b)},_=(g,y)=>h({...l,[g]:y}),x=g=>({"aria-invalid":!!p[g],"aria-describedby":p[g]?"assumptions-feedback":void 0});return z.jsxs("aside",{className:"assumptions-panel","aria-labelledby":"assumptions-title",children:[z.jsx("h3",{id:"assumptions-title",children:"Your assumptions."}),z.jsxs("div",{className:"live-estimate-note",children:[z.jsx(DS,{size:14})," Valid changes update your estimate instantly."]}),z.jsxs("form",{onSubmit:g=>g.preventDefault(),noValidate:!0,children:[z.jsxs("fieldset",{children:[z.jsx("legend",{children:"Internal hourly costs"}),z.jsx("p",{className:"field-note",children:"Salary, employer costs and overhead."}),z.jsx("div",{className:"assumption-rates",children:["Associate","Senior","Manager"].map((g,y)=>z.jsxs("label",{children:[z.jsx("span",{children:g}),z.jsxs("div",{className:"currency-field",children:[z.jsx("span",{children:"€"}),z.jsx("input",{"aria-label":`${g} hourly cost`,type:"number",min:"0",max:"1000",step:"any",...x(`rate-${y}`),value:Number.isFinite(l.rates[y])?Number(l.rates[y].toFixed(2)):l.rates[y],onChange:b=>_("rates",l.rates.map((w,E)=>E===y?b.target.value:w))})]})]},g))})]}),z.jsxs("fieldset",{children:[z.jsx("legend",{children:"Lineage fees"}),z.jsx("p",{className:"field-note",children:"Indicative pricing, excluding VAT."}),z.jsxs("label",{className:"assumption-row",children:[z.jsx("span",{children:"Per walkthrough"}),z.jsxs("div",{className:"currency-field",children:[z.jsx("span",{children:"€"}),z.jsx("input",{"aria-label":"Price per walkthrough",type:"number",min:"0",max:"10000",step:"any",value:l.fee,...x("fee"),onChange:g=>_("fee",g.target.value)})]})]}),z.jsxs("label",{className:"assumption-row",children:[z.jsx("span",{children:"Annual platform"}),z.jsxs("div",{className:"currency-field",children:[z.jsx("span",{children:"€"}),z.jsx("input",{"aria-label":"Annual platform fee",type:"number",min:"0",max:"1000000",step:"any",value:l.platform,...x("platform"),onChange:g=>_("platform",g.target.value)})]})]})]}),z.jsxs("fieldset",{children:[z.jsx("legend",{children:"Time assumptions"}),z.jsx("p",{className:"field-note",id:"reduction-help",children:"100% uses the model’s expected reduction in full. 50% uses half of that reduction."}),z.jsxs("label",{className:"assumption-row",children:[z.jsx("span",{children:"Share of model reduction"}),z.jsxs("div",{className:"currency-field",children:[z.jsx("input",{"aria-label":"Share of model reduction","aria-describedby":p.realization?"assumptions-feedback reduction-help":"reduction-help","aria-invalid":!!p.realization,type:"number",min:"0",max:"100",step:"1",value:l.realization,onChange:g=>_("realization",g.target.value)}),z.jsx("span",{children:"%"})]})]}),z.jsxs("p",{className:"assumption-reduction",children:[z.jsx("span",{children:m?"Last valid time reduction":"Resulting time reduction"}),z.jsxs("strong",{children:[e?"≈":"",bt(e*100),"%"]})]})]}),z.jsx("div",{id:"assumptions-feedback",role:"status",children:m&&z.jsxs("p",{className:"assumptions-feedback",children:[m," The estimate uses the last valid values."]})}),z.jsxs("button",{className:"text-button reset-assumptions",type:"button",onClick:()=>h(Qd(tu)),children:[z.jsx(RS,{size:15})," Reset assumptions"]})]})]})}function xA({inputs:s,assumptions:e,result:i,setAssumptions:r,paused:l}){const[c,d]=P.useState(!1);return z.jsx("section",{className:"calculation-section calculation-refined",id:"calculation","aria-labelledby":"calculation-title",children:z.jsxs("div",{className:"calculation-inner",children:[z.jsxs("header",{className:"calculation-heading",children:[z.jsx("span",{className:"eyebrow",children:"THE CALCULATION"}),z.jsx("h2",{id:"calculation-title",tabIndex:-1,children:"How your estimate adds up."}),z.jsx("p",{children:"From the work you do to the capacity you could free up."})]}),z.jsxs("section",{className:"annual-workload","aria-labelledby":"workload-title",children:[z.jsxs("h3",{className:"calculation-chapter",id:"workload-title",children:[z.jsx("span",{children:"01"})," Your annual workload"]}),z.jsxs("div",{className:"workload-equation",children:[z.jsxs("div",{children:[z.jsx("strong",{children:bt(s.entities)}),z.jsx("span",{children:"companies / year"})]}),z.jsx("span",{className:"equation-symbol","aria-label":"multiplied by",children:"×"}),z.jsxs("div",{children:[z.jsx("strong",{children:bt(s.walkthroughs)}),z.jsx("span",{children:"walkthroughs / client"})]}),z.jsx("span",{className:"equation-symbol","aria-label":"equals",children:"="}),z.jsxs("div",{className:"equation-total",children:[z.jsx("strong",{children:bt(i.count)}),z.jsx("span",{children:"walkthroughs / year"})]})]})]}),z.jsxs("div",{className:"calculation-columns",children:[z.jsxs("div",{className:"calculation-explanation",children:[z.jsxs("section",{className:"time-derivation","aria-labelledby":"time-title",children:[z.jsxs("h3",{className:"calculation-chapter",id:"time-title",children:[z.jsx("span",{children:"02"})," The time you get back"]}),z.jsxs("div",{className:"time-equation",children:[z.jsxs("strong",{children:[i.hoursSaved>0&&z.jsx("span",{className:"approximate",children:"≈"}),bt(i.hoursSaved),z.jsx("span",{children:" h"})]}),z.jsx("span",{children:"freed up each year"})]}),z.jsxs("div",{className:"annual-time-summary",children:[z.jsxs("div",{children:[z.jsx("span",{children:bt(i.hoursBefore)}),z.jsx(uv,{size:19,"aria-label":"to"}),z.jsx("span",{children:bt(i.hoursAfter)}),z.jsx("small",{children:"team hours / year"})]}),z.jsxs("span",{className:"reduction-label",children:[i.reduction?"≈":"",bt(i.reduction*100),"% less team time"]})]}),z.jsxs("div",{className:"annual-time-bar",role:"img","aria-label":`${bt(i.hoursAfter,1)} team hours remain, ${bt(i.hoursSaved,1)} hours freed up each year`,children:[z.jsx("span",{className:"time-retained",style:{width:`${(1-i.reduction)*100}%`}}),z.jsx("span",{className:"time-recovered",style:{width:`${i.reduction*100}%`}})]}),z.jsxs("div",{className:"time-legend",children:[z.jsxs("span",{children:[z.jsx("i",{}),bt(i.hoursAfter)," h with Lineage"]}),z.jsxs("span",{children:[z.jsx("i",{}),bt(i.hoursSaved)," h freed up"]})]}),z.jsxs("details",{className:"workflow-detail",children:[z.jsxs("summary",{children:["Where those hours come from ",z.jsx(th,{size:16})]}),z.jsxs("p",{children:[bt(i.count)," walkthroughs × approximately ",bt(i.hoursSavedPerWalkthrough,2)," hours freed per walkthrough."]}),z.jsxs("p",{children:["The 13-step model starts at 8.75 team hours per walkthrough. We scale it to your ",bt(s.hours)," hours, then apply ",bt(e.realization,2),"% of its assumed reductions. Client-side time is excluded."]}),z.jsxs("table",{children:[z.jsx("caption",{children:"Team hours per walkthrough. Figures are rounded for display."}),z.jsx("thead",{children:z.jsxs("tr",{children:[z.jsx("th",{scope:"col",children:"Process step"}),z.jsx("th",{scope:"col",children:"Current"}),z.jsx("th",{scope:"col",children:"Lineage"})]})}),z.jsx("tbody",{children:i.steps.map(p=>z.jsxs("tr",{children:[z.jsx("th",{scope:"row",children:p.name}),z.jsx("td",{children:bt(p.before,2)}),z.jsx("td",{children:bt(p.after,2)})]},p.name))}),z.jsx("tfoot",{children:z.jsxs("tr",{children:[z.jsx("th",{scope:"row",children:"Total"}),z.jsx("td",{children:bt(s.hours,2)}),z.jsx("td",{children:bt(i.hoursAfterPerWalkthrough,2)})]})})]})]})]}),z.jsxs("section",{className:"value-derivation","aria-labelledby":"value-title",children:[z.jsxs("h3",{className:"calculation-chapter",id:"value-title",children:[z.jsx("span",{children:"03"})," The value after fees"]}),z.jsxs("details",{className:"role-detail",open:!0,children:[z.jsxs("summary",{children:["Saved hours × cost per role ",z.jsx(th,{size:16})]}),z.jsx("ul",{className:"role-breakdown",children:i.roles.map(p=>z.jsxs("li",{children:[z.jsx("span",{className:"role-name",children:p.name}),z.jsxs("span",{className:"role-equation",children:[bt(p.hoursSaved,1)," h × ",iv(p.rate)]}),z.jsx("strong",{children:Ma(p.savedValue)})]},p.name))}),z.jsx("p",{className:"role-rounding-note",children:"Annual hours and values, rounded for display. Totals use unrounded figures."})]}),c&&z.jsx("p",{className:"estimate-pending",role:"status",children:"Last valid estimate. Complete the highlighted assumption to update it."}),z.jsxs("dl",{className:"value-ledger",children:[z.jsxs("div",{children:[z.jsxs("dt",{children:["Value of freed staff time",z.jsx("small",{children:"Total of the three roles above"})]}),z.jsx("dd",{children:Ma(i.grossValue)})]}),z.jsxs("div",{children:[z.jsxs("dt",{children:["Walkthrough fees",z.jsxs("small",{children:[bt(i.count)," walkthroughs × ",iv(e.fee)]})]}),z.jsxs("dd",{children:["−",Ma(i.usageCost)]})]}),z.jsxs("div",{children:[z.jsx("dt",{children:"Annual platform fee"}),z.jsxs("dd",{children:["−",Ma(e.platform)]})]}),z.jsxs("div",{className:`ledger-total ${i.netValue<0?"is-negative":""}`,children:[z.jsxs("dt",{children:["Annual capacity value",z.jsx("small",{children:"After Lineage fees"})]}),z.jsx("dd",{children:Ma(i.netValue)})]})]}),z.jsx("p",{className:"break-even-note",children:i.softwareCost===0?"No Lineage fees are included in this estimate.":i.breakEvenWalkthroughs==null?"At these assumptions, the value of freed time per walkthrough does not cover its usage fee.":z.jsxs(z.Fragment,{children:["At these assumptions, freed capacity covers the Lineage fees from ",z.jsxs("strong",{children:[bt(i.breakEvenWalkthroughs)," walkthroughs a year."]})]})})]})]}),z.jsx(vA,{assumptions:e,reduction:i.reduction,onApply:r,onValidityChange:d})]}),z.jsxs("footer",{className:"calculation-footer",children:[z.jsx("p",{children:"This is capacity you can put back to work. It becomes a cash saving only if spending actually falls. Time reductions are model assumptions, not guaranteed results. Implementation, training and client-side savings are excluded."}),z.jsxs("div",{children:[z.jsxs("span",{children:["Lineage Business Model 2026 · Savings worksheet",z.jsx("br",{}),"Calculations use unrounded values."]}),z.jsxs("a",{href:"#result-title",onClick:p=>{var m;p.preventDefault(),(m=document.getElementById("result-title"))==null||m.focus({preventScroll:!0}),window.scrollTo({top:0,behavior:l?"instant":"smooth"})},children:["Back to your estimate ",z.jsx(CS,{size:16})]})]})]})]})})}const nu=1e3,{min:iu,max:ex}=ks.entities,tx=ex-iu;function rv(s){const e=Math.min(1,Math.max(0,s/nu));return Math.round(iu+tx*e*e)}function Jd(s){const e=Math.min(ex,Math.max(iu,s));return Math.sqrt((e-iu)/tx)*nu}const qo=[{key:"entities",label:"Your firm",question:"How many companies do you audit per year?",help:"",unit:""},{key:"walkthroughs",label:"Your work",question:"How many walkthroughs do you average per client?",help:"",unit:""},{key:"hours",label:"Your time",question:"How many team hours does one walkthrough take?",help:"Include preparation, the interview, documentation and review.",unit:"hours"}],$d={out:120,in:240};function SA(){const[s,e]=P.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);return P.useEffect(()=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)"),r=()=>e(i.matches);return i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[]),[s,e]}function MA({field:s,value:e,unit:i,help:r,inputRef:l,onChange:c}){const d=ks[s],p=s==="entities",[m,h]=P.useState(()=>Jd(e));P.useEffect(()=>{p&&rv(m)!==Number(e)&&h(Jd(e))},[p,e,m]);const _=p?m/nu:(e-d.min)/(d.max-d.min),x=y=>{const b=Number(y.target.value);p&&h(b),c(p?rv(b):b)},g=y=>{if(!p)return;const b={ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1,PageUp:100,PageDown:-100};let w;if(y.key==="Home")w=d.min;else if(y.key==="End")w=d.max;else if(y.key in b)w=Number(e)+b[y.key];else return;y.preventDefault(),w=Math.min(d.max,Math.max(d.min,w)),h(Jd(w)),c(w)};return z.jsxs("div",{className:"slider-wrap",children:[z.jsx("div",{className:"slider-track",children:z.jsx("span",{style:{width:`${_*100}%`}})}),z.jsx("input",{ref:l,id:"answer",className:"range-input",type:"range",min:p?0:d.min,max:p?nu:d.max,step:p?"any":d.step,value:p?m:e,"aria-valuemin":d.min,"aria-valuemax":d.max,"aria-valuenow":Number(e),"aria-valuetext":`${bt(Number(e))}${i?" "+i:""}`,"aria-describedby":r?"answer-help":void 0,onChange:x,onKeyDown:g})]})}function eh({value:s,paused:e,format:i=bt}){const[r,l]=P.useState(e?s:0),c=P.useRef(s),d=P.useRef(!e);return P.useEffect(()=>{if((e||s!==c.current)&&(d.current=!1),!d.current){l(s);return}let p;const m=performance.now(),h=_=>{const x=Math.min(1,(_-m)/1500);l(s*(1-Math.pow(1-x,4))),x<1?p=requestAnimationFrame(h):d.current=!1};return p=requestAnimationFrame(h),()=>cancelAnimationFrame(p)},[s,e]),z.jsxs(z.Fragment,{children:[z.jsx("span",{"aria-hidden":"true",children:i(r)}),z.jsx("span",{className:"sr-only",children:i(s)})]})}function yA({inputs:s,assumptions:e,paused:i,ready:r,edit:l,setAssumptions:c}){const d=gA(s,e),p=d.netValue>=0,m=P.useRef(null),[h,_]=P.useState(!1);P.useEffect(()=>{var g;r&&((g=m.current)==null||g.focus({preventScroll:!0}))},[r]);const x=()=>{const g=new Blob([_A(s,e,d)],{type:"text/plain;charset=utf-8"}),y=URL.createObjectURL(g),b=document.createElement("a");b.href=y,b.download=`lineage-estimate-${new Date().toISOString().slice(0,10)}.txt`,b.click(),setTimeout(()=>URL.revokeObjectURL(y),1e3),_(!0)};return z.jsxs("main",{className:`result-stage ${p?"":"negative-result"}`,children:[z.jsxs("section",{className:"result-hero","aria-labelledby":"result-title",children:[z.jsx("p",{className:"result-kicker",children:"Estimated annual capacity value after Lineage fees"}),z.jsxs("h1",{id:"result-title",className:"result-number",ref:m,tabIndex:-1,children:[z.jsx(eh,{value:d.netValue,paused:i,format:Ma}),z.jsx("span",{className:"per-year",children:"/ year"})]}),z.jsx("p",{className:"result-subtitle",children:p?"Staff time valued at internal cost. A cash saving requires lower spending.":"At these assumptions, the value of freed staff time is lower than the Lineage fees."}),z.jsxs("div",{className:"result-metrics",children:[z.jsxs("div",{children:[z.jsx("strong",{children:z.jsx(eh,{value:d.hoursSaved,paused:i})}),z.jsx("span",{children:"team hours freed up / year"})]}),z.jsxs("div",{children:[z.jsx("strong",{children:z.jsx(eh,{value:d.daysSaved,paused:i})}),z.jsx("span",{children:"equivalent eight-hour staff days"})]})]}),z.jsxs("section",{className:"time-comparison","aria-label":"Team hours per walkthrough",children:[z.jsxs("div",{className:"comparison-title",children:[z.jsx("h2",{children:"Time per walkthrough"}),z.jsxs("span",{children:[bt(d.reduction*100),"% less"]})]}),z.jsxs("div",{className:"comparison-row",children:[z.jsxs("div",{children:[z.jsx("span",{children:"Current workflow"}),z.jsxs("span",{children:[bt(Number(s.hours),2)," h"]})]}),z.jsx("div",{className:"bar-track",children:z.jsx("div",{className:"bar before"})})]}),z.jsxs("div",{className:"comparison-row",children:[z.jsxs("div",{children:[z.jsx("span",{children:"With Lineage"}),z.jsxs("span",{children:[bt(d.hoursAfterPerWalkthrough,2)," h"]})]}),z.jsx("div",{className:"bar-track",children:z.jsx("div",{className:"bar after",style:{width:`${(1-d.reduction)*100}%`}})})]})]}),z.jsxs("div",{className:"result-actions",children:[z.jsxs("button",{className:"primary-button",onClick:l,children:[z.jsx(lv,{size:17})," Adjust my numbers"]}),z.jsxs("button",{className:"secondary-button",onClick:x,children:[z.jsx(US,{size:18})," ",h?"Download again":"Save estimate"]})]}),z.jsx("p",{className:"download-status sr-only",role:"status",children:h?"Your estimate download has started.":""}),z.jsxs("a",{className:"calculation-jump",href:"#calculation",onClick:g=>{var y,b;g.preventDefault(),(y=document.getElementById("calculation-title"))==null||y.focus({preventScroll:!0}),(b=document.getElementById("calculation"))==null||b.scrollIntoView({behavior:i?"instant":"smooth",block:"start"})},children:["See the calculation ",z.jsx(th,{size:18,weight:"light"})]}),z.jsxs("p",{className:"result-note",children:[bt(d.count)," walkthroughs a year · Pricing excludes VAT."]})]}),z.jsx(xA,{inputs:s,assumptions:e,result:d,setAssumptions:c,paused:i})]})}function EA(){const[s,e]=P.useState({...mA});P.useEffect(()=>{e(X=>{const le=Object.fromEntries(Object.entries(X).map(([_e,D])=>[_e,Math.min(ks[_e].max,Math.max(ks[_e].min,Math.round(Number(D))))]));return Object.keys(le).some(_e=>le[_e]!==X[_e])?le:X})},[]);const[i,r]=P.useState({...tu,rates:[...tu.rates]}),[l,c]=P.useState(0),[d,p]=P.useState(!1),[m,h]=P.useState(""),[_,x]=SA(),g=P.useRef(null),y=P.useRef(null),[b,w]=P.useState("idle"),[E,M]=P.useState("question"),H=P.useRef("idle"),B=P.useRef(!1),C=P.useRef(null),F=P.useRef(!1),N=X=>{H.current=X,w(X)},O=X=>{c(X.step),p(X.result),h(X.error),X.result!==d&&window.scrollTo({top:0,behavior:"instant"})},T=X=>{if(H.current===X)if(X==="out"){const le=C.current;C.current=null,le&&O(le),N("in")}else B.current=!1,N("idle")},L=(X,le=!1,_e="")=>{if(B.current||X===l&&le===d)return;const D={step:X,result:le,error:_e};if(F.current=!le,_){O(D);return}B.current=!0,C.current=D,M(le!==d?"page":"question"),N("out")},j=X=>{X.target===X.currentTarget&&(X.animationName==="question-fade-out"&&T("out"),X.animationName==="question-fade-in"&&T("in"))};P.useEffect(()=>{if(b==="idle")return;const X=setTimeout(()=>T(b),$d[b]+160);return()=>clearTimeout(X)},[b]),P.useEffect(()=>{!_||H.current==="idle"||(C.current&&O(C.current),C.current=null,B.current=!1,N("idle"))},[_]),P.useEffect(()=>{var X;b==="idle"&&!d&&F.current&&(F.current=!1,(X=y.current)==null||X.focus({preventScroll:!0}))},[b,l,d]);const V=qo[l],$=s[V.key],ge=V.unit==="hours"&&Number($)===1?"hour":V.unit,pe=X=>{B.current||(e(le=>({...le,[V.key]:X})),h(""))},ee=(X,le="")=>L(X,!1,le),I=X=>{var _e;if(B.current)return;const le=X>l?Ko(V.key,$):"";if(le){h(le),(_e=g.current)==null||_e.focus();return}ee(X)};P.useEffect(()=>{var X;m&&((X=g.current)==null||X.focus({preventScroll:!0}))},[m,l]);const G=X=>{if(X.preventDefault(),B.current)return;const le=Ko(V.key,$);if(le){h(le),g.current.focus();return}if(l<2)ee(l+1);else{const _e=qo.findIndex(D=>Ko(D.key,s[D.key]));if(_e>=0){ee(_e,Ko(qo[_e].key,s[qo[_e].key]));return}L(l,!0)}};return z.jsxs("div",{className:`experience ${_?"motion-paused":""} ${d?"showing-result":""}`,children:[z.jsx("a",{className:"skip-link",href:"#calculator",children:"Skip to calculator"}),z.jsx(hA,{paused:_,result:d,onInteract:()=>x(!1)},"warm-continuous-horizon"),z.jsxs("header",{className:"site-header",children:[z.jsxs("a",{className:"brand",href:"/lineage/","aria-label":"Lineage home",children:[z.jsx("img",{className:"brand-mark",src:"/lineage/brand/mark.svg?v=20260908-book",alt:""}),z.jsx("img",{className:"brand-wordmark",src:"/lineage/brand/wordmark.svg",alt:"Lineage"})]}),z.jsxs("nav",{"aria-label":"Page and account",children:[z.jsx("a",{className:"login-link",href:"https://manyvere.com/lineage/login/",children:"Log in"}),z.jsxs("a",{className:"account-link",href:"https://manyvere.com/lineage/login/",children:["Create account ",z.jsx(wS,{size:15})]}),z.jsx("button",{type:"button",className:"motion-toggle","aria-label":_?"Play animations":"Pause animations",title:_?"Play animations":"Pause animations","aria-pressed":_,onClick:()=>x(!_),children:_?z.jsx(LS,{size:16,weight:"fill"}):z.jsx(NS,{size:17,weight:"regular"})})]})]}),z.jsx("div",{id:"calculator","data-motion-phase":b,"data-motion-scope":E,"aria-busy":b!=="idle",onAnimationEnd:j,style:{"--step-out-duration":`${$d.out}ms`,"--step-in-duration":`${$d.in}ms`},children:d?z.jsx("div",{inert:b!=="idle",children:z.jsx(yA,{inputs:s,assumptions:i,paused:_,ready:b==="idle",edit:()=>L(0),setAssumptions:r})}):z.jsxs("main",{className:"question-stage",children:[z.jsxs("h1",{children:[z.jsx("span",{children:"Curious to see how much"}),z.jsxs("span",{children:["your firm could ",z.jsx("em",{children:"save?"})]})]}),z.jsxs("form",{className:"calculator-form",onSubmit:G,noValidate:!0,children:[z.jsxs("div",{className:"question-content",inert:b!=="idle",onAnimationEnd:j,children:[z.jsxs("div",{className:"question-prompt",children:[z.jsx("label",{ref:y,tabIndex:-1,className:"question-label",htmlFor:"answer",children:V.question}),V.help&&z.jsx("p",{className:"question-help",id:"answer-help",children:V.help})]}),z.jsx("div",{className:"number-control",children:z.jsxs("div",{className:"number-input-wrap",children:[z.jsx("output",{htmlFor:"answer",className:"number-display","aria-hidden":"true",children:bt(Number($))}),ge&&z.jsx("span",{className:"input-unit",children:ge})]})}),z.jsx(MA,{field:V.key,value:Number($),unit:ge,help:V.help,inputRef:g,onChange:pe}),m&&z.jsx("p",{className:"field-error",id:"answer-error",role:"alert",children:m})]},l),z.jsxs("nav",{className:"calculator-nav","aria-label":"Calculator questions",children:[l>0&&z.jsxs("button",{className:"previous-control",type:"button","aria-disabled":b!=="idle",onClick:()=>I(l-1),children:[z.jsx(lv,{size:18,weight:"light"})," Previous"]}),z.jsx("div",{className:"step-buttons",children:qo.map((X,le)=>z.jsx("button",{type:"button",className:l===le?"current-step":"","aria-disabled":b!=="idle","aria-label":`Question ${le+1}: ${X.question}`,"aria-current":l===le?"step":void 0,onClick:()=>I(le),children:z.jsx("span",{})},X.key))}),z.jsxs("button",{className:"next-control",type:"submit","aria-disabled":b!=="idle",children:[l===2?"See savings":"Next",z.jsx(uv,{size:18,weight:"light"})]})]})]})]})})]})}mS.createRoot(document.getElementById("root")).render(z.jsx(lS.StrictMode,{children:z.jsx(EA,{})}));
