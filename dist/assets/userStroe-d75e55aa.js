import{r as D,n as A,R as _}from"./index-260d8090.js";const m=t=>{let e;const n=new Set,o=(u,d)=>{const c=typeof u=="function"?u(e):u;if(!Object.is(c,e)){const i=e;e=d??(typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(a=>a(e,i))}},r=()=>e,p={setState:o,getState:r,getInitialState:()=>E,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{n.clear()}},E=e=t(o,r,p);return p},I=t=>t?m(t):m;var g={exports:{}},b={},R={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=D;function O(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var V=typeof Object.is=="function"?Object.is:O,P=f.useState,j=f.useEffect,z=f.useLayoutEffect,q=f.useDebugValue;function T(t,e){var n=e(),o=P({inst:{value:n,getSnapshot:e}}),r=o[0].inst,s=o[1];return z(function(){r.value=n,r.getSnapshot=e,y(r)&&s({inst:r})},[t,n,e]),j(function(){return y(r)&&s({inst:r}),t(function(){y(r)&&s({inst:r})})},[t]),q(n),n}function y(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!V(t,n)}catch{return!0}}function U(t,e){return e()}var $=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?U:T;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:$;R.exports=w;var F=R.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=D,L=F;function W(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var B=typeof Object.is=="function"?Object.is:W,C=L.useSyncExternalStore,M=v.useRef,k=v.useEffect,G=v.useMemo,H=v.useDebugValue;b.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var s=M(null);if(s.current===null){var l={hasValue:!1,value:null};s.current=l}else l=s.current;s=G(function(){function p(i){if(!E){if(E=!0,u=i,i=o(i),r!==void 0&&l.hasValue){var a=l.value;if(r(a,i))return d=a}return d=i}if(a=d,B(u,i))return a;var h=o(i);return r!==void 0&&r(a,h)?a:(u=i,d=h)}var E=!1,u,d,c=n===void 0?null:n;return[function(){return p(e())},c===null?void 0:function(){return p(c())}]},[e,n,o,r]);var S=C(t,s[0],s[1]);return k(function(){l.hasValue=!0,l.value=S},[S]),H(S),S};g.exports=b;var J=g.exports;const K=A(J),{useDebugValue:N}=_,{useSyncExternalStoreWithSelector:Q}=K;const X=t=>t;function Y(t,e=X,n){const o=Q(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return N(o),o}const x=t=>{const e=typeof t=="function"?I(t):t,n=(o,r)=>Y(e,o,r);return Object.assign(n,e),n},Z=t=>t?x(t):x,tt={isAuth:!1,email:"",id:"",isAdmin:!1},et=Z(t=>({...tt,setUser:e=>t(()=>({...e}))})),rt=et;export{rt as u};
