import{r as x,n as A,R as _}from"./index-2645332a.js";const m=t=>{let e;const n=new Set,o=(s,d)=>{const c=typeof s=="function"?s(e):s;if(!Object.is(c,e)){const i=e;e=d??(typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(a=>a(e,i))}},r=()=>e,p={setState:o,getState:r,getInitialState:()=>E,subscribe:s=>(n.add(s),()=>n.delete(s)),destroy:()=>{n.clear()}},E=e=t(o,r,p);return p},I=t=>t?m(t):m;var R={exports:{}},g={},b={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=x;function O(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var V=typeof Object.is=="function"?Object.is:O,P=f.useState,j=f.useEffect,q=f.useLayoutEffect,T=f.useDebugValue;function U(t,e){var n=e(),o=P({inst:{value:n,getSnapshot:e}}),r=o[0].inst,u=o[1];return q(function(){r.value=n,r.getSnapshot=e,y(r)&&u({inst:r})},[t,n,e]),j(function(){return y(r)&&u({inst:r}),t(function(){y(r)&&u({inst:r})})},[t]),T(n),n}function y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!V(t,n)}catch{return!0}}function $(t,e){return e()}var F=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?$:U;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:F;b.exports=w;var L=b.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=x,W=L;function B(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var C=typeof Object.is=="function"?Object.is:B,M=W.useSyncExternalStore,z=v.useRef,k=v.useEffect,G=v.useMemo,H=v.useDebugValue;g.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var u=z(null);if(u.current===null){var l={hasValue:!1,value:null};u.current=l}else l=u.current;u=G(function(){function p(i){if(!E){if(E=!0,s=i,i=o(i),r!==void 0&&l.hasValue){var a=l.value;if(r(a,i))return d=a}return d=i}if(a=d,C(s,i))return a;var h=o(i);return r!==void 0&&r(a,h)?a:(s=i,d=h)}var E=!1,s,d,c=n===void 0?null:n;return[function(){return p(e())},c===null?void 0:function(){return p(c())}]},[e,n,o,r]);var S=M(t,u[0],u[1]);return k(function(){l.hasValue=!0,l.value=S},[S]),H(S),S};R.exports=g;var J=R.exports;const K=A(J),{useDebugValue:N}=_,{useSyncExternalStoreWithSelector:Q}=K;const X=t=>t;function Y(t,e=X,n){const o=Q(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return N(o),o}const D=t=>{const e=typeof t=="function"?I(t):t,n=(o,r)=>Y(e,o,r);return Object.assign(n,e),n},Z=t=>t?D(t):D,tt={isAuth:!1,email:"",id:"",isAdmin:!1},et=Z(t=>({...tt,setUser:e=>t(()=>({...e}))})),rt=et;export{rt as u};
