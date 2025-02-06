(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Me={},Hs=[],xn=()=>{},_w=()=>!1,Hl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qh=n=>n.startsWith("onUpdate:"),rt=Object.assign,Wh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},yw=Object.prototype.hasOwnProperty,Pe=(n,e)=>yw.call(n,e),le=Array.isArray,zs=n=>zl(n)==="[object Map]",k_=n=>zl(n)==="[object Set]",de=n=>typeof n=="function",Xe=n=>typeof n=="string",jr=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",N_=n=>(je(n)||de(n))&&de(n.then)&&de(n.catch),O_=Object.prototype.toString,zl=n=>O_.call(n),Ew=n=>zl(n).slice(8,-1),D_=n=>zl(n)==="[object Object]",Hh=n=>Xe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,so=jh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},vw=/-(\w)/g,on=Gl(n=>n.replace(vw,(e,t)=>t?t.toUpperCase():"")),Tw=/\B([A-Z])/g,qr=Gl(n=>n.replace(Tw,"-$1").toLowerCase()),Kl=Gl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Xc=Gl(n=>n?`on${Kl(n)}`:""),br=(n,e)=>!Object.is(n,e),$a=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},x_=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Du=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Iw=n=>{const e=Xe(n)?Number(n):NaN;return isNaN(e)?n:e};let yp;const Ql=()=>yp||(yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zh(n){if(le(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Xe(r)?Cw(r):zh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Xe(n)||je(n))return n}const ww=/;(?![^(]*\))/g,Aw=/:([^]+)/,Rw=/\/\*[^]*?\*\//g;function Cw(n){const e={};return n.replace(Rw,"").split(ww).forEach(t=>{if(t){const r=t.split(Aw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Yl(n){let e="";if(Xe(n))e=n;else if(le(n))for(let t=0;t<n.length;t++){const r=Yl(n[t]);r&&(e+=r+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const bw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sw=jh(bw);function M_(n){return!!n||n===""}const L_=n=>!!(n&&n.__v_isRef===!0),Sr=n=>Xe(n)?n:n==null?"":le(n)||je(n)&&(n.toString===O_||!de(n.toString))?L_(n)?Sr(n.value):JSON.stringify(n,V_,2):String(n),V_=(n,e)=>L_(e)?V_(n,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Jc(r,i)+" =>"]=s,t),{})}:k_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Jc(t))}:jr(e)?Jc(e):je(e)&&!le(e)&&!D_(e)?String(e):e,Jc=(n,e="")=>{var t;return jr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class F_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ot;try{return Ot=this,e()}finally{Ot=t}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Pw(n){return new F_(n)}function U_(){return Ot}function kw(n,e=!1){Ot&&Ot.cleanups.push(n)}let Le;const Zc=new WeakSet;class B_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zc.has(this)&&(Zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||j_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ep(this),q_(this);const e=Le,t=gn;Le=this,gn=!0;try{return this.fn()}finally{W_(this),Le=e,gn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qh(e);this.deps=this.depsTail=void 0,Ep(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xu(this)&&this.run()}get dirty(){return xu(this)}}let $_=0,io,oo;function j_(n,e=!1){if(n.flags|=8,e){n.next=oo,oo=n;return}n.next=io,io=n}function Gh(){$_++}function Kh(){if(--$_>0)return;if(oo){let e=oo;for(oo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;io;){let e=io;for(io=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function q_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function W_(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Qh(r),Nw(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function xu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(H_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function H_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wo))return;n.globalVersion=wo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!xu(n)){n.flags&=-3;return}const t=Le,r=gn;Le=n,gn=!0;try{q_(n);const s=n.fn(n._value);(e.version===0||br(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=t,gn=r,W_(n),n.flags&=-3}}function Qh(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Qh(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Nw(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let gn=!0;const z_=[];function Wr(){z_.push(gn),gn=!1}function Hr(){const n=z_.pop();gn=n===void 0?!0:n}function Ep(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Le;Le=void 0;try{e()}finally{Le=t}}}let wo=0;class Ow{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Le||!gn||Le===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Le)t=this.activeLink=new Ow(Le,this),Le.deps?(t.prevDep=Le.depsTail,Le.depsTail.nextDep=t,Le.depsTail=t):Le.deps=Le.depsTail=t,G_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Le.depsTail,t.nextDep=void 0,Le.depsTail.nextDep=t,Le.depsTail=t,Le.deps===t&&(Le.deps=r)}return t}trigger(e){this.version++,wo++,this.notify(e)}notify(e){Gh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Kh()}}}function G_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)G_(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Mu=new WeakMap,hs=Symbol(""),Lu=Symbol(""),Ao=Symbol("");function wt(n,e,t){if(gn&&Le){let r=Mu.get(n);r||Mu.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Yh),s.map=r,s.key=t),s.track()}}function Qn(n,e,t,r,s,i){const o=Mu.get(n);if(!o){wo++;return}const a=c=>{c&&c.trigger()};if(Gh(),e==="clear")o.forEach(a);else{const c=le(n),u=c&&Hh(t);if(c&&t==="length"){const h=Number(r);o.forEach((f,g)=>{(g==="length"||g===Ao||!jr(g)&&g>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Ao)),e){case"add":c?u&&a(o.get("length")):(a(o.get(hs)),zs(n)&&a(o.get(Lu)));break;case"delete":c||(a(o.get(hs)),zs(n)&&a(o.get(Lu)));break;case"set":zs(n)&&a(o.get(hs));break}}Kh()}function Ds(n){const e=Se(n);return e===n?e:(wt(e,"iterate",Ao),rn(n)?e:e.map(At))}function Xl(n){return wt(n=Se(n),"iterate",Ao),n}const Dw={__proto__:null,[Symbol.iterator](){return eu(this,Symbol.iterator,At)},concat(...n){return Ds(this).concat(...n.map(e=>le(e)?Ds(e):e))},entries(){return eu(this,"entries",n=>(n[1]=At(n[1]),n))},every(n,e){return Hn(this,"every",n,e,void 0,arguments)},filter(n,e){return Hn(this,"filter",n,e,t=>t.map(At),arguments)},find(n,e){return Hn(this,"find",n,e,At,arguments)},findIndex(n,e){return Hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Hn(this,"findLast",n,e,At,arguments)},findLastIndex(n,e){return Hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return tu(this,"includes",n)},indexOf(...n){return tu(this,"indexOf",n)},join(n){return Ds(this).join(n)},lastIndexOf(...n){return tu(this,"lastIndexOf",n)},map(n,e){return Hn(this,"map",n,e,void 0,arguments)},pop(){return Bi(this,"pop")},push(...n){return Bi(this,"push",n)},reduce(n,...e){return vp(this,"reduce",n,e)},reduceRight(n,...e){return vp(this,"reduceRight",n,e)},shift(){return Bi(this,"shift")},some(n,e){return Hn(this,"some",n,e,void 0,arguments)},splice(...n){return Bi(this,"splice",n)},toReversed(){return Ds(this).toReversed()},toSorted(n){return Ds(this).toSorted(n)},toSpliced(...n){return Ds(this).toSpliced(...n)},unshift(...n){return Bi(this,"unshift",n)},values(){return eu(this,"values",At)}};function eu(n,e,t){const r=Xl(n),s=r[e]();return r!==n&&!rn(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const xw=Array.prototype;function Hn(n,e,t,r,s,i){const o=Xl(n),a=o!==n&&!rn(n),c=o[e];if(c!==xw[e]){const f=c.apply(n,i);return a?At(f):f}let u=t;o!==n&&(a?u=function(f,g){return t.call(this,At(f),g,n)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,n)}));const h=c.call(o,u,r);return a&&s?s(h):h}function vp(n,e,t,r){const s=Xl(n);let i=t;return s!==n&&(rn(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,At(a),c,n)}),s[e](i,...r)}function tu(n,e,t){const r=Se(n);wt(r,"iterate",Ao);const s=r[e](...t);return(s===-1||s===!1)&&Zh(t[0])?(t[0]=Se(t[0]),r[e](...t)):s}function Bi(n,e,t=[]){Wr(),Gh();const r=Se(n)[e].apply(n,t);return Kh(),Hr(),r}const Mw=jh("__proto__,__v_isRef,__isVue"),K_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(jr));function Lw(n){jr(n)||(n=String(n));const e=Se(this);return wt(e,"has",n),e.hasOwnProperty(n)}class Q_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?zw:Z_:i?J_:X_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=Dw[t]))return c;if(t==="hasOwnProperty")return Lw}const a=Reflect.get(e,t,at(e)?e:r);return(jr(t)?K_.has(t):Mw(t))||(s||wt(e,"get",t),i)?a:at(a)?o&&Hh(t)?a:a.value:je(a)?s?ty(a):Jl(a):a}}class Y_ extends Q_{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=fs(i);if(!rn(r)&&!fs(r)&&(i=Se(i),r=Se(r)),!le(e)&&at(i)&&!at(r))return c?!1:(i.value=r,!0)}const o=le(e)&&Hh(t)?Number(t)<e.length:Pe(e,t),a=Reflect.set(e,t,r,at(e)?e:s);return e===Se(s)&&(o?br(r,i)&&Qn(e,"set",t,r):Qn(e,"add",t,r)),a}deleteProperty(e,t){const r=Pe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Qn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!jr(t)||!K_.has(t))&&wt(e,"has",t),r}ownKeys(e){return wt(e,"iterate",le(e)?"length":hs),Reflect.ownKeys(e)}}class Vw extends Q_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Fw=new Y_,Uw=new Vw,Bw=new Y_(!0);const Vu=n=>n,Ra=n=>Reflect.getPrototypeOf(n);function $w(n,e,t){return function(...r){const s=this.__v_raw,i=Se(s),o=zs(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),h=t?Vu:e?Fu:At;return!e&&wt(i,"iterate",c?Lu:hs),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function Ca(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jw(n,e){const t={get(s){const i=this.__v_raw,o=Se(i),a=Se(s);n||(br(s,a)&&wt(o,"get",s),wt(o,"get",a));const{has:c}=Ra(o),u=e?Vu:n?Fu:At;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&wt(Se(s),"iterate",hs),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),a=Se(s);return n||(br(s,a)&&wt(o,"has",s),wt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Se(a),u=e?Vu:n?Fu:At;return!n&&wt(c,"iterate",hs),a.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return rt(t,n?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(s){!e&&!rn(s)&&!fs(s)&&(s=Se(s));const i=Se(this);return Ra(i).has.call(i,s)||(i.add(s),Qn(i,"add",s,s)),this},set(s,i){!e&&!rn(i)&&!fs(i)&&(i=Se(i));const o=Se(this),{has:a,get:c}=Ra(o);let u=a.call(o,s);u||(s=Se(s),u=a.call(o,s));const h=c.call(o,s);return o.set(s,i),u?br(i,h)&&Qn(o,"set",s,i):Qn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:a}=Ra(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Qn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=$w(s,n,e)}),t}function Xh(n,e){const t=jw(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Pe(t,s)&&s in r?t:r,s,i)}const qw={get:Xh(!1,!1)},Ww={get:Xh(!1,!0)},Hw={get:Xh(!0,!1)};const X_=new WeakMap,J_=new WeakMap,Z_=new WeakMap,zw=new WeakMap;function Gw(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kw(n){return n.__v_skip||!Object.isExtensible(n)?0:Gw(Ew(n))}function Jl(n){return fs(n)?n:Jh(n,!1,Fw,qw,X_)}function ey(n){return Jh(n,!1,Bw,Ww,J_)}function ty(n){return Jh(n,!0,Uw,Hw,Z_)}function Jh(n,e,t,r,s){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const o=Kw(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return s.set(n,a),a}function Gs(n){return fs(n)?Gs(n.__v_raw):!!(n&&n.__v_isReactive)}function fs(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function Zh(n){return n?!!n.__v_raw:!1}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function Qw(n){return!Pe(n,"__v_skip")&&Object.isExtensible(n)&&x_(n,"__v_skip",!0),n}const At=n=>je(n)?Jl(n):n,Fu=n=>je(n)?ty(n):n;function at(n){return n?n.__v_isRef===!0:!1}function mn(n){return ry(n,!1)}function ny(n){return ry(n,!0)}function ry(n,e){return at(n)?n:new Yw(n,e)}class Yw{constructor(e,t){this.dep=new Yh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Se(e),this._value=t?e:At(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||rn(e)||fs(e);e=r?e:Se(e),br(e,t)&&(this._rawValue=e,this._value=r?e:At(e),this.dep.trigger())}}function Bt(n){return at(n)?n.value:n}function Gn(n){return de(n)?n():Bt(n)}const Xw={get:(n,e,t)=>e==="__v_raw"?n:Bt(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return at(s)&&!at(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function sy(n){return Gs(n)?n:new Proxy(n,Xw)}class Jw{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Yh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return j_(this,!0),!0}get value(){const e=this.dep.track();return H_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zw(n,e,t=!1){let r,s;return de(n)?r=n:(r=n.get,s=n.set),new Jw(r,s,t)}const ba={},sl=new WeakMap;let is;function eA(n,e=!1,t=is){if(t){let r=sl.get(t);r||sl.set(t,r=[]),r.push(n)}}function tA(n,e,t=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=t,u=x=>s?x:rn(x)||s===!1||s===0?Yn(x,1):Yn(x);let h,f,g,m,T=!1,S=!1;if(at(n)?(f=()=>n.value,T=rn(n)):Gs(n)?(f=()=>u(n),T=!0):le(n)?(S=!0,T=n.some(x=>Gs(x)||rn(x)),f=()=>n.map(x=>{if(at(x))return x.value;if(Gs(x))return u(x);if(de(x))return c?c(x,2):x()})):de(n)?e?f=c?()=>c(n,2):n:f=()=>{if(g){Wr();try{g()}finally{Hr()}}const x=is;is=h;try{return c?c(n,3,[m]):n(m)}finally{is=x}}:f=xn,e&&s){const x=f,ee=s===!0?1/0:s;f=()=>Yn(x(),ee)}const P=U_(),M=()=>{h.stop(),P&&P.active&&Wh(P.effects,h)};if(i&&e){const x=e;e=(...ee)=>{x(...ee),M()}}let L=S?new Array(n.length).fill(ba):ba;const D=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(e){const ee=h.run();if(s||T||(S?ee.some((te,C)=>br(te,L[C])):br(ee,L))){g&&g();const te=is;is=h;try{const C=[ee,L===ba?void 0:S&&L[0]===ba?[]:L,m];c?c(e,3,C):e(...C),L=ee}finally{is=te}}}else h.run()};return a&&a(D),h=new B_(f),h.scheduler=o?()=>o(D,!1):D,m=x=>eA(x,!1,h),g=h.onStop=()=>{const x=sl.get(h);if(x){if(c)c(x,4);else for(const ee of x)ee();sl.delete(h)}},e?r?D(!0):L=h.run():o?o(D.bind(null,!0),!0):h.run(),M.pause=h.pause.bind(h),M.resume=h.resume.bind(h),M.stop=M,M}function Yn(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,at(n))Yn(n.value,e,t);else if(le(n))for(let r=0;r<n.length;r++)Yn(n[r],e,t);else if(k_(n)||zs(n))n.forEach(r=>{Yn(r,e,t)});else if(D_(n)){for(const r in n)Yn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Yn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ho(n,e,t,r){try{return r?n(...r):n()}catch(s){Zl(s,e,t)}}function vn(n,e,t,r){if(de(n)){const s=Ho(n,e,t,r);return s&&N_(s)&&s.catch(i=>{Zl(i,e,t)}),s}if(le(n)){const s=[];for(let i=0;i<n.length;i++)s.push(vn(n[i],e,t,r));return s}}function Zl(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}a=a.parent}if(i){Wr(),Ho(i,null,10,[n,c,u]),Hr();return}}nA(n,t,s,r,o)}function nA(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const Dt=[];let Sn=-1;const Ks=[];let Tr=null,Ms=0;const iy=Promise.resolve();let il=null;function oy(n){const e=il||iy;return n?e.then(this?n.bind(this):n):e}function rA(n){let e=Sn+1,t=Dt.length;for(;e<t;){const r=e+t>>>1,s=Dt[r],i=Ro(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function ed(n){if(!(n.flags&1)){const e=Ro(n),t=Dt[Dt.length-1];!t||!(n.flags&2)&&e>=Ro(t)?Dt.push(n):Dt.splice(rA(e),0,n),n.flags|=1,ay()}}function ay(){il||(il=iy.then(cy))}function sA(n){le(n)?Ks.push(...n):Tr&&n.id===-1?Tr.splice(Ms+1,0,n):n.flags&1||(Ks.push(n),n.flags|=1),ay()}function Tp(n,e,t=Sn+1){for(;t<Dt.length;t++){const r=Dt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;Dt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ly(n){if(Ks.length){const e=[...new Set(Ks)].sort((t,r)=>Ro(t)-Ro(r));if(Ks.length=0,Tr){Tr.push(...e);return}for(Tr=e,Ms=0;Ms<Tr.length;Ms++){const t=Tr[Ms];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Tr=null,Ms=0}}const Ro=n=>n.id==null?n.flags&2?-1:1/0:n.id;function cy(n){try{for(Sn=0;Sn<Dt.length;Sn++){const e=Dt[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<Dt.length;Sn++){const e=Dt[Sn];e&&(e.flags&=-2)}Sn=-1,Dt.length=0,ly(),il=null,(Dt.length||Ks.length)&&cy()}}let Ut=null,uy=null;function ol(n){const e=Ut;return Ut=n,uy=n&&n.type.__scopeId||null,e}function ao(n,e=Ut,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Op(-1);const i=ol(e);let o;try{o=n(...s)}finally{ol(i),r._d&&Op(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Uu(n,e){if(Ut===null)return n;const t=rc(Ut),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Me]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Yn(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function ns(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Wr(),vn(c,t,8,[n.el,a,n,e]),Hr())}}const iA=Symbol("_vte"),oA=n=>n.__isTeleport,xs=Symbol("_leaveCb"),Sa=Symbol("_enterCb");function aA(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return my(()=>{n.isMounted=!0}),yy(()=>{n.isUnmounting=!0}),n}const en=[Function,Array],lA={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en};function cA(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function Bu(n,e,t,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:g,onLeave:m,onAfterLeave:T,onLeaveCancelled:S,onBeforeAppear:P,onAppear:M,onAfterAppear:L,onAppearCancelled:D}=e,x=String(n.key),ee=cA(t,n),te=(E,R)=>{E&&vn(E,r,9,R)},C=(E,R)=>{const b=R[1];te(E,R),le(E)?E.every(A=>A.length<=1)&&b():E.length<=1&&b()},y={mode:o,persisted:a,beforeEnter(E){let R=c;if(!t.isMounted)if(i)R=P||c;else return;E[xs]&&E[xs](!0);const b=ee[x];b&&Ls(n,b)&&b.el[xs]&&b.el[xs](),te(R,[E])},enter(E){let R=u,b=h,A=f;if(!t.isMounted)if(i)R=M||u,b=L||h,A=D||f;else return;let v=!1;const Oe=E[Sa]=tt=>{v||(v=!0,tt?te(A,[E]):te(b,[E]),y.delayedLeave&&y.delayedLeave(),E[Sa]=void 0)};R?C(R,[E,Oe]):Oe()},leave(E,R){const b=String(n.key);if(E[Sa]&&E[Sa](!0),t.isUnmounting)return R();te(g,[E]);let A=!1;const v=E[xs]=Oe=>{A||(A=!0,R(),Oe?te(S,[E]):te(T,[E]),E[xs]=void 0,ee[b]===n&&delete ee[b])};ee[b]=n,m?C(m,[E,v]):v()},clone(E){return Bu(E,e,t,r)}};return y}function Co(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Co(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hy(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===Vt?(o.patchFlag&128&&s++,r=r.concat(hy(o.children,e,a))):(e||o.type!==xr)&&r.push(a!=null?ps(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function dy(n,e){return de(n)?rt({name:n.name},e,{setup:n}):n}function fy(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function al(n,e,t,r,s=!1){if(le(n)){n.forEach((T,S)=>al(T,e&&(le(e)?e[S]:e),t,r,s));return}if(lo(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&al(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?rc(r.component):r.el,o=s?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===Me?a.refs={}:a.refs,f=a.setupState,g=Se(f),m=f===Me?()=>!1:T=>Pe(g,T);if(u!=null&&u!==c&&(Xe(u)?(h[u]=null,m(u)&&(f[u]=null)):at(u)&&(u.value=null)),de(c))Ho(c,a,12,[o,h]);else{const T=Xe(c),S=at(c);if(T||S){const P=()=>{if(n.f){const M=T?m(c)?f[c]:h[c]:c.value;s?le(M)&&Wh(M,i):le(M)?M.includes(i)||M.push(i):T?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],n.k&&(h[n.k]=c.value))}else T?(h[c]=o,m(c)&&(f[c]=o)):S&&(c.value=o,n.k&&(h[n.k]=o))};o?(P.id=-1,qt(P,t)):P()}}}Ql().requestIdleCallback;Ql().cancelIdleCallback;const lo=n=>!!n.type.__asyncLoader,py=n=>n.type.__isKeepAlive;function uA(n,e){gy(n,"a",e)}function hA(n,e){gy(n,"da",e)}function gy(n,e,t=ft){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ec(e,r,t),t){let s=t.parent;for(;s&&s.parent;)py(s.parent.vnode)&&dA(r,e,t,s),s=s.parent}}function dA(n,e,t,r){const s=ec(e,n,r,!0);Ey(()=>{Wh(r[e],s)},t)}function ec(n,e,t=ft,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{Wr();const a=zo(t),c=vn(e,t,n,o);return a(),Hr(),c});return r?s.unshift(i):s.push(i),i}}const ur=n=>(e,t=ft)=>{(!So||n==="sp")&&ec(n,(...r)=>e(...r),t)},fA=ur("bm"),my=ur("m"),pA=ur("bu"),_y=ur("u"),yy=ur("bum"),Ey=ur("um"),vy=ur("sp"),gA=ur("rtg"),mA=ur("rtc");function _A(n,e=ft){ec("ec",n,e)}const yA="components";function Ip(n,e){return vA(yA,n,!0,e)||n}const EA=Symbol.for("v-ndc");function vA(n,e,t=!0,r=!1){const s=Ut||ft;if(s){const i=s.type;{const a=cR(i,!1);if(a&&(a===e||a===on(e)||a===Kl(on(e))))return i}const o=wp(s[n]||i[n],e)||wp(s.appContext[n],e);return!o&&r?i:o}}function wp(n,e){return n&&(n[e]||n[on(e)]||n[Kl(on(e))])}function TA(n,e,t,r){let s;const i=t,o=le(n);if(o||Xe(n)){const a=o&&Gs(n);let c=!1;a&&(c=!rn(n),n=Xl(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(c?At(n[u]):n[u],u,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,i)}else if(je(n))if(n[Symbol.iterator])s=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];s[c]=e(n[h],h,c,i)}}else s=[];return s}const $u=n=>n?jy(n)?rc(n):$u(n.parent):null,co=rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$u(n.parent),$root:n=>$u(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Iy(n),$forceUpdate:n=>n.f||(n.f=()=>{ed(n.update)}),$nextTick:n=>n.n||(n.n=oy.bind(n.proxy)),$watch:n=>jA.bind(n)}),nu=(n,e)=>n!==Me&&!n.__isScriptSetup&&Pe(n,e),IA={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(nu(r,e))return o[e]=1,r[e];if(s!==Me&&Pe(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&Pe(u,e))return o[e]=3,i[e];if(t!==Me&&Pe(t,e))return o[e]=4,t[e];ju&&(o[e]=0)}}const h=co[e];let f,g;if(h)return e==="$attrs"&&wt(n.attrs,"get",""),h(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Me&&Pe(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,Pe(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return nu(s,e)?(s[e]=t,!0):r!==Me&&Pe(r,e)?(r[e]=t,!0):Pe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!t[o]||n!==Me&&Pe(n,o)||nu(e,o)||(a=i[0])&&Pe(a,o)||Pe(r,o)||Pe(co,o)||Pe(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Pe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ap(n){return le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ju=!0;function wA(n){const e=Iy(n),t=n.proxy,r=n.ctx;ju=!1,e.beforeCreate&&Rp(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:m,updated:T,activated:S,deactivated:P,beforeDestroy:M,beforeUnmount:L,destroyed:D,unmounted:x,render:ee,renderTracked:te,renderTriggered:C,errorCaptured:y,serverPrefetch:E,expose:R,inheritAttrs:b,components:A,directives:v,filters:Oe}=e;if(u&&AA(u,r,null),o)for(const Te in o){const me=o[Te];de(me)&&(r[Te]=me.bind(t))}if(s){const Te=s.call(t,t);je(Te)&&(n.data=Jl(Te))}if(ju=!0,i)for(const Te in i){const me=i[Te],$t=de(me)?me.bind(t,t):de(me.get)?me.get.bind(t,t):xn,cn=!de(me)&&de(me.set)?me.set.bind(t):xn,Xt=tn({get:$t,set:cn});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:He=>Xt.value=He})}if(a)for(const Te in a)Ty(a[Te],r,t,Te);if(c){const Te=de(c)?c.call(t):c;Reflect.ownKeys(Te).forEach(me=>{ja(me,Te[me])})}h&&Rp(h,n,"c");function We(Te,me){le(me)?me.forEach($t=>Te($t.bind(t))):me&&Te(me.bind(t))}if(We(fA,f),We(my,g),We(pA,m),We(_y,T),We(uA,S),We(hA,P),We(_A,y),We(mA,te),We(gA,C),We(yy,L),We(Ey,x),We(vy,E),le(R))if(R.length){const Te=n.exposed||(n.exposed={});R.forEach(me=>{Object.defineProperty(Te,me,{get:()=>t[me],set:$t=>t[me]=$t})})}else n.exposed||(n.exposed={});ee&&n.render===xn&&(n.render=ee),b!=null&&(n.inheritAttrs=b),A&&(n.components=A),v&&(n.directives=v),E&&fy(n)}function AA(n,e,t=xn){le(n)&&(n=qu(n));for(const r in n){const s=n[r];let i;je(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Rp(n,e,t){vn(le(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ty(n,e,t,r){let s=r.includes(".")?Ly(t,r):()=>t[r];if(Xe(n)){const i=e[n];de(i)&&uo(s,i)}else if(de(n))uo(s,n.bind(t));else if(je(n))if(le(n))n.forEach(i=>Ty(i,e,t,r));else{const i=de(n.handler)?n.handler.bind(t):e[n.handler];de(i)&&uo(s,i,n)}}function Iy(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>ll(c,u,o,!0)),ll(c,e,o)),je(e)&&i.set(e,c),c}function ll(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&ll(n,i,t,!0),s&&s.forEach(o=>ll(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=RA[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const RA={data:Cp,props:bp,emits:bp,methods:Ki,computed:Ki,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Ki,directives:Ki,watch:bA,provide:Cp,inject:CA};function Cp(n,e){return e?n?function(){return rt(de(n)?n.call(this,this):n,de(e)?e.call(this,this):e)}:e:n}function CA(n,e){return Ki(qu(n),qu(e))}function qu(n){if(le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ki(n,e){return n?rt(Object.create(null),n,e):e}function bp(n,e){return n?le(n)&&le(e)?[...new Set([...n,...e])]:rt(Object.create(null),Ap(n),Ap(e??{})):e}function bA(n,e){if(!n)return e;if(!e)return n;const t=rt(Object.create(null),n);for(const r in e)t[r]=Nt(n[r],e[r]);return t}function wy(){return{app:null,config:{isNativeTag:_w,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SA=0;function PA(n,e){return function(r,s=null){de(r)||(r=rt({},r)),s!=null&&!je(s)&&(s=null);const i=wy(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:SA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hR,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...f)):de(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,g){if(!c){const m=u._ceVNode||Ge(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(m,h,g),c=!0,u._container=h,h.__vue_app__=u,rc(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(vn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Qs;Qs=u;try{return h()}finally{Qs=f}}};return u}}let Qs=null;function ja(n,e){if(ft){let t=ft.provides;const r=ft.parent&&ft.parent.provides;r===t&&(t=ft.provides=Object.create(r)),t[n]=e}}function Kt(n,e,t=!1){const r=ft||Ut;if(r||Qs){const s=Qs?Qs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&de(e)?e.call(r&&r.proxy):e}}const Ay={},Ry=()=>Object.create(Ay),Cy=n=>Object.getPrototypeOf(n)===Ay;function kA(n,e,t,r=!1){const s={},i=Ry();n.propsDefaults=Object.create(null),by(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:ey(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function NA(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=Se(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(tc(n.emitsOptions,g))continue;const m=e[g];if(c)if(Pe(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const T=on(g);s[T]=Wu(c,a,T,m,n,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{by(n,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!Pe(e,f)&&((h=qr(f))===f||!Pe(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(s[f]=Wu(c,a,f,void 0,n,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Pe(e,f))&&(delete i[f],u=!0)}u&&Qn(n.attrs,"set","")}function by(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(so(c))continue;const u=e[c];let h;s&&Pe(s,h=on(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:tc(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(t),u=a||Me;for(let h=0;h<i.length;h++){const f=i[h];t[f]=Wu(s,c,f,u[f],n,!Pe(u,f))}}return o}function Wu(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=Pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const h=zo(s);r=u[t]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===qr(t))&&(r=!0))}return r}const OA=new WeakMap;function Sy(n,e,t=!1){const r=t?OA:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let c=!1;if(!de(n)){const h=f=>{c=!0;const[g,m]=Sy(f,e,!0);rt(o,g),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return je(n)&&r.set(n,Hs),Hs;if(le(i))for(let h=0;h<i.length;h++){const f=on(i[h]);Sp(f)&&(o[f]=Me)}else if(i)for(const h in i){const f=on(h);if(Sp(f)){const g=i[h],m=o[f]=le(g)||de(g)?{type:g}:rt({},g),T=m.type;let S=!1,P=!0;if(le(T))for(let M=0;M<T.length;++M){const L=T[M],D=de(L)&&L.name;if(D==="Boolean"){S=!0;break}else D==="String"&&(P=!1)}else S=de(T)&&T.name==="Boolean";m[0]=S,m[1]=P,(S||Pe(m,"default"))&&a.push(f)}}const u=[o,a];return je(n)&&r.set(n,u),u}function Sp(n){return n[0]!=="$"&&!so(n)}const Py=n=>n[0]==="_"||n==="$stable",td=n=>le(n)?n.map(Pn):[Pn(n)],DA=(n,e,t)=>{if(e._n)return e;const r=ao((...s)=>td(e(...s)),t);return r._c=!1,r},ky=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Py(s))continue;const i=n[s];if(de(i))e[s]=DA(s,i,r);else if(i!=null){const o=td(i);e[s]=()=>o}}},Ny=(n,e)=>{const t=td(e);n.slots.default=()=>t},Oy=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},xA=(n,e,t)=>{const r=n.slots=Ry();if(n.vnode.shapeFlag&32){const s=e._;s?(Oy(r,e,t),t&&x_(r,"_",s,!0)):ky(e,r)}else e&&Ny(n,e)},MA=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Me;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Oy(s,e,t):(i=!e.$stable,ky(e,s)),o=e}else e&&(Ny(n,e),o={default:1});if(i)for(const a in s)!Py(a)&&o[a]==null&&delete s[a]},qt=QA;function LA(n){return VA(n)}function VA(n,e){const t=Ql();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:m=xn,insertStaticContent:T}=n,S=(I,w,k,F=null,j=null,U=null,G=void 0,H=null,W=!!w.dynamicChildren)=>{if(I===w)return;I&&!Ls(I,w)&&(F=V(I),He(I,j,U,!0),I=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:q,ref:ie,shapeFlag:Y}=w;switch(q){case nc:P(I,w,k,F);break;case xr:M(I,w,k,F);break;case qa:I==null&&L(w,k,F,G);break;case Vt:A(I,w,k,F,j,U,G,H,W);break;default:Y&1?ee(I,w,k,F,j,U,G,H,W):Y&6?v(I,w,k,F,j,U,G,H,W):(Y&64||Y&128)&&q.process(I,w,k,F,j,U,G,H,W,ne)}ie!=null&&j&&al(ie,I&&I.ref,U,w||I,!w)},P=(I,w,k,F)=>{if(I==null)r(w.el=a(w.children),k,F);else{const j=w.el=I.el;w.children!==I.children&&u(j,w.children)}},M=(I,w,k,F)=>{I==null?r(w.el=c(w.children||""),k,F):w.el=I.el},L=(I,w,k,F)=>{[I.el,I.anchor]=T(I.children,w,k,F,I.el,I.anchor)},D=({el:I,anchor:w},k,F)=>{let j;for(;I&&I!==w;)j=g(I),r(I,k,F),I=j;r(w,k,F)},x=({el:I,anchor:w})=>{let k;for(;I&&I!==w;)k=g(I),s(I),I=k;s(w)},ee=(I,w,k,F,j,U,G,H,W)=>{w.type==="svg"?G="svg":w.type==="math"&&(G="mathml"),I==null?te(w,k,F,j,U,G,H,W):E(I,w,j,U,G,H,W)},te=(I,w,k,F,j,U,G,H)=>{let W,q;const{props:ie,shapeFlag:Y,transition:re,dirs:ae}=I;if(W=I.el=o(I.type,U,ie&&ie.is,ie),Y&8?h(W,I.children):Y&16&&y(I.children,W,null,F,j,ru(I,U),G,H),ae&&ns(I,null,F,"created"),C(W,I,I.scopeId,G,F),ie){for(const pe in ie)pe!=="value"&&!so(pe)&&i(W,pe,null,ie[pe],U,F);"value"in ie&&i(W,"value",null,ie.value,U),(q=ie.onVnodeBeforeMount)&&Cn(q,F,I)}ae&&ns(I,null,F,"beforeMount");const oe=FA(j,re);oe&&re.beforeEnter(W),r(W,w,k),((q=ie&&ie.onVnodeMounted)||oe||ae)&&qt(()=>{q&&Cn(q,F,I),oe&&re.enter(W),ae&&ns(I,null,F,"mounted")},j)},C=(I,w,k,F,j)=>{if(k&&m(I,k),F)for(let U=0;U<F.length;U++)m(I,F[U]);if(j){let U=j.subTree;if(w===U||Fy(U.type)&&(U.ssContent===w||U.ssFallback===w)){const G=j.vnode;C(I,G,G.scopeId,G.slotScopeIds,j.parent)}}},y=(I,w,k,F,j,U,G,H,W=0)=>{for(let q=W;q<I.length;q++){const ie=I[q]=H?Ir(I[q]):Pn(I[q]);S(null,ie,w,k,F,j,U,G,H)}},E=(I,w,k,F,j,U,G)=>{const H=w.el=I.el;let{patchFlag:W,dynamicChildren:q,dirs:ie}=w;W|=I.patchFlag&16;const Y=I.props||Me,re=w.props||Me;let ae;if(k&&rs(k,!1),(ae=re.onVnodeBeforeUpdate)&&Cn(ae,k,w,I),ie&&ns(w,I,k,"beforeUpdate"),k&&rs(k,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&h(H,""),q?R(I.dynamicChildren,q,H,k,F,ru(w,j),U):G||me(I,w,H,null,k,F,ru(w,j),U,!1),W>0){if(W&16)b(H,Y,re,k,j);else if(W&2&&Y.class!==re.class&&i(H,"class",null,re.class,j),W&4&&i(H,"style",Y.style,re.style,j),W&8){const oe=w.dynamicProps;for(let pe=0;pe<oe.length;pe++){const Ie=oe[pe],_t=Y[Ie],ct=re[Ie];(ct!==_t||Ie==="value")&&i(H,Ie,_t,ct,j,k)}}W&1&&I.children!==w.children&&h(H,w.children)}else!G&&q==null&&b(H,Y,re,k,j);((ae=re.onVnodeUpdated)||ie)&&qt(()=>{ae&&Cn(ae,k,w,I),ie&&ns(w,I,k,"updated")},F)},R=(I,w,k,F,j,U,G)=>{for(let H=0;H<w.length;H++){const W=I[H],q=w[H],ie=W.el&&(W.type===Vt||!Ls(W,q)||W.shapeFlag&70)?f(W.el):k;S(W,q,ie,null,F,j,U,G,!0)}},b=(I,w,k,F,j)=>{if(w!==k){if(w!==Me)for(const U in w)!so(U)&&!(U in k)&&i(I,U,w[U],null,j,F);for(const U in k){if(so(U))continue;const G=k[U],H=w[U];G!==H&&U!=="value"&&i(I,U,H,G,j,F)}"value"in k&&i(I,"value",w.value,k.value,j)}},A=(I,w,k,F,j,U,G,H,W)=>{const q=w.el=I?I.el:a(""),ie=w.anchor=I?I.anchor:a("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:ae}=w;ae&&(H=H?H.concat(ae):ae),I==null?(r(q,k,F),r(ie,k,F),y(w.children||[],k,ie,j,U,G,H,W)):Y>0&&Y&64&&re&&I.dynamicChildren?(R(I.dynamicChildren,re,k,j,U,G,H),(w.key!=null||j&&w===j.subTree)&&Dy(I,w,!0)):me(I,w,k,ie,j,U,G,H,W)},v=(I,w,k,F,j,U,G,H,W)=>{w.slotScopeIds=H,I==null?w.shapeFlag&512?j.ctx.activate(w,k,F,G,W):Oe(w,k,F,j,U,G,W):tt(I,w,W)},Oe=(I,w,k,F,j,U,G)=>{const H=I.component=sR(I,F,j);if(py(I)&&(H.ctx.renderer=ne),iR(H,!1,G),H.asyncDep){if(j&&j.registerDep(H,We,G),!I.el){const W=H.subTree=Ge(xr);M(null,W,w,k)}}else We(H,I,w,k,j,U,G)},tt=(I,w,k)=>{const F=w.component=I.component;if(GA(I,w,k))if(F.asyncDep&&!F.asyncResolved){Te(F,w,k);return}else F.next=w,F.update();else w.el=I.el,F.vnode=w},We=(I,w,k,F,j,U,G)=>{const H=()=>{if(I.isMounted){let{next:Y,bu:re,u:ae,parent:oe,vnode:pe}=I;{const yt=xy(I);if(yt){Y&&(Y.el=pe.el,Te(I,Y,G)),yt.asyncDep.then(()=>{I.isUnmounted||H()});return}}let Ie=Y,_t;rs(I,!1),Y?(Y.el=pe.el,Te(I,Y,G)):Y=pe,re&&$a(re),(_t=Y.props&&Y.props.onVnodeBeforeUpdate)&&Cn(_t,oe,Y,pe),rs(I,!0);const ct=kp(I),Jt=I.subTree;I.subTree=ct,S(Jt,ct,f(Jt.el),V(Jt),I,j,U),Y.el=ct.el,Ie===null&&KA(I,ct.el),ae&&qt(ae,j),(_t=Y.props&&Y.props.onVnodeUpdated)&&qt(()=>Cn(_t,oe,Y,pe),j)}else{let Y;const{el:re,props:ae}=w,{bm:oe,m:pe,parent:Ie,root:_t,type:ct}=I,Jt=lo(w);rs(I,!1),oe&&$a(oe),!Jt&&(Y=ae&&ae.onVnodeBeforeMount)&&Cn(Y,Ie,w),rs(I,!0);{_t.ce&&_t.ce._injectChildStyle(ct);const yt=I.subTree=kp(I);S(null,yt,k,F,I,j,U),w.el=yt.el}if(pe&&qt(pe,j),!Jt&&(Y=ae&&ae.onVnodeMounted)){const yt=w;qt(()=>Cn(Y,Ie,yt),j)}(w.shapeFlag&256||Ie&&lo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&I.a&&qt(I.a,j),I.isMounted=!0,w=k=F=null}};I.scope.on();const W=I.effect=new B_(H);I.scope.off();const q=I.update=W.run.bind(W),ie=I.job=W.runIfDirty.bind(W);ie.i=I,ie.id=I.uid,W.scheduler=()=>ed(ie),rs(I,!0),q()},Te=(I,w,k)=>{w.component=I;const F=I.vnode.props;I.vnode=w,I.next=null,NA(I,w.props,F,k),MA(I,w.children,k),Wr(),Tp(I),Hr()},me=(I,w,k,F,j,U,G,H,W=!1)=>{const q=I&&I.children,ie=I?I.shapeFlag:0,Y=w.children,{patchFlag:re,shapeFlag:ae}=w;if(re>0){if(re&128){cn(q,Y,k,F,j,U,G,H,W);return}else if(re&256){$t(q,Y,k,F,j,U,G,H,W);return}}ae&8?(ie&16&&Mt(q,j,U),Y!==q&&h(k,Y)):ie&16?ae&16?cn(q,Y,k,F,j,U,G,H,W):Mt(q,j,U,!0):(ie&8&&h(k,""),ae&16&&y(Y,k,F,j,U,G,H,W))},$t=(I,w,k,F,j,U,G,H,W)=>{I=I||Hs,w=w||Hs;const q=I.length,ie=w.length,Y=Math.min(q,ie);let re;for(re=0;re<Y;re++){const ae=w[re]=W?Ir(w[re]):Pn(w[re]);S(I[re],ae,k,null,j,U,G,H,W)}q>ie?Mt(I,j,U,!0,!1,Y):y(w,k,F,j,U,G,H,W,Y)},cn=(I,w,k,F,j,U,G,H,W)=>{let q=0;const ie=w.length;let Y=I.length-1,re=ie-1;for(;q<=Y&&q<=re;){const ae=I[q],oe=w[q]=W?Ir(w[q]):Pn(w[q]);if(Ls(ae,oe))S(ae,oe,k,null,j,U,G,H,W);else break;q++}for(;q<=Y&&q<=re;){const ae=I[Y],oe=w[re]=W?Ir(w[re]):Pn(w[re]);if(Ls(ae,oe))S(ae,oe,k,null,j,U,G,H,W);else break;Y--,re--}if(q>Y){if(q<=re){const ae=re+1,oe=ae<ie?w[ae].el:F;for(;q<=re;)S(null,w[q]=W?Ir(w[q]):Pn(w[q]),k,oe,j,U,G,H,W),q++}}else if(q>re)for(;q<=Y;)He(I[q],j,U,!0),q++;else{const ae=q,oe=q,pe=new Map;for(q=oe;q<=re;q++){const ut=w[q]=W?Ir(w[q]):Pn(w[q]);ut.key!=null&&pe.set(ut.key,q)}let Ie,_t=0;const ct=re-oe+1;let Jt=!1,yt=0;const fr=new Array(ct);for(q=0;q<ct;q++)fr[q]=0;for(q=ae;q<=Y;q++){const ut=I[q];if(_t>=ct){He(ut,j,U,!0);continue}let Zt;if(ut.key!=null)Zt=pe.get(ut.key);else for(Ie=oe;Ie<=re;Ie++)if(fr[Ie-oe]===0&&Ls(ut,w[Ie])){Zt=Ie;break}Zt===void 0?He(ut,j,U,!0):(fr[Zt-oe]=q+1,Zt>=yt?yt=Zt:Jt=!0,S(ut,w[Zt],k,null,j,U,G,H,W),_t++)}const bi=Jt?UA(fr):Hs;for(Ie=bi.length-1,q=ct-1;q>=0;q--){const ut=oe+q,Zt=w[ut],ca=ut+1<ie?w[ut+1].el:F;fr[q]===0?S(null,Zt,k,ca,j,U,G,H,W):Jt&&(Ie<0||q!==bi[Ie]?Xt(Zt,k,ca,2):Ie--)}}},Xt=(I,w,k,F,j=null)=>{const{el:U,type:G,transition:H,children:W,shapeFlag:q}=I;if(q&6){Xt(I.component.subTree,w,k,F);return}if(q&128){I.suspense.move(w,k,F);return}if(q&64){G.move(I,w,k,ne);return}if(G===Vt){r(U,w,k);for(let Y=0;Y<W.length;Y++)Xt(W[Y],w,k,F);r(I.anchor,w,k);return}if(G===qa){D(I,w,k);return}if(F!==2&&q&1&&H)if(F===0)H.beforeEnter(U),r(U,w,k),qt(()=>H.enter(U),j);else{const{leave:Y,delayLeave:re,afterLeave:ae}=H,oe=()=>r(U,w,k),pe=()=>{Y(U,()=>{oe(),ae&&ae()})};re?re(U,oe,pe):pe()}else r(U,w,k)},He=(I,w,k,F=!1,j=!1)=>{const{type:U,props:G,ref:H,children:W,dynamicChildren:q,shapeFlag:ie,patchFlag:Y,dirs:re,cacheIndex:ae}=I;if(Y===-2&&(j=!1),H!=null&&al(H,null,k,I,!0),ae!=null&&(w.renderCache[ae]=void 0),ie&256){w.ctx.deactivate(I);return}const oe=ie&1&&re,pe=!lo(I);let Ie;if(pe&&(Ie=G&&G.onVnodeBeforeUnmount)&&Cn(Ie,w,I),ie&6)Rn(I.component,k,F);else{if(ie&128){I.suspense.unmount(k,F);return}oe&&ns(I,null,w,"beforeUnmount"),ie&64?I.type.remove(I,w,k,ne,F):q&&!q.hasOnce&&(U!==Vt||Y>0&&Y&64)?Mt(q,w,k,!1,!0):(U===Vt&&Y&384||!j&&ie&16)&&Mt(W,w,k),F&&ze(I)}(pe&&(Ie=G&&G.onVnodeUnmounted)||oe)&&qt(()=>{Ie&&Cn(Ie,w,I),oe&&ns(I,null,w,"unmounted")},k)},ze=I=>{const{type:w,el:k,anchor:F,transition:j}=I;if(w===Vt){dr(k,F);return}if(w===qa){x(I);return}const U=()=>{s(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(I.shapeFlag&1&&j&&!j.persisted){const{leave:G,delayLeave:H}=j,W=()=>G(k,U);H?H(I.el,U,W):W()}else U()},dr=(I,w)=>{let k;for(;I!==w;)k=g(I),s(I),I=k;s(w)},Rn=(I,w,k)=>{const{bum:F,scope:j,job:U,subTree:G,um:H,m:W,a:q}=I;Pp(W),Pp(q),F&&$a(F),j.stop(),U&&(U.flags|=8,He(G,I,w,k)),H&&qt(H,w),qt(()=>{I.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Mt=(I,w,k,F=!1,j=!1,U=0)=>{for(let G=U;G<I.length;G++)He(I[G],w,k,F,j)},V=I=>{if(I.shapeFlag&6)return V(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const w=g(I.anchor||I.el),k=w&&w[iA];return k?g(k):w};let X=!1;const Q=(I,w,k)=>{I==null?w._vnode&&He(w._vnode,null,null,!0):S(w._vnode||null,I,w,null,null,null,k),w._vnode=I,X||(X=!0,Tp(),ly(),X=!1)},ne={p:S,um:He,m:Xt,r:ze,mt:Oe,mc:y,pc:me,pbc:R,n:V,o:n};return{render:Q,hydrate:void 0,createApp:PA(Q)}}function ru({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function rs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function FA(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Dy(n,e,t=!1){const r=n.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ir(s[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Dy(o,a)),a.type===nc&&(a.el=o.el)}}function UA(n){const e=n.slice(),t=[0];let r,s,i,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function xy(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xy(e)}function Pp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const BA=Symbol.for("v-scx"),$A=()=>Kt(BA);function uo(n,e,t){return My(n,e,t)}function My(n,e,t=Me){const{immediate:r,deep:s,flush:i,once:o}=t,a=rt({},t),c=e&&r||!e&&i!=="post";let u;if(So){if(i==="sync"){const m=$A();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=xn,m.resume=xn,m.pause=xn,m}}const h=ft;a.call=(m,T,S)=>vn(m,h,T,S);let f=!1;i==="post"?a.scheduler=m=>{qt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,T)=>{T?m():ed(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=tA(n,e,a);return So&&(u?u.push(g):c&&g()),g}function jA(n,e,t){const r=this.proxy,s=Xe(n)?n.includes(".")?Ly(r,n):()=>r[n]:n.bind(r,r);let i;de(e)?i=e:(i=e.handler,t=e);const o=zo(this),a=My(s,i.bind(r),t);return o(),a}function Ly(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const qA=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${on(e)}Modifiers`]||n[`${qr(e)}Modifiers`];function WA(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Me;let s=t;const i=e.startsWith("update:"),o=i&&qA(r,e.slice(7));o&&(o.trim&&(s=t.map(h=>Xe(h)?h.trim():h)),o.number&&(s=t.map(Du)));let a,c=r[a=Xc(e)]||r[a=Xc(on(e))];!c&&i&&(c=r[a=Xc(qr(e))]),c&&vn(c,n,6,s);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,vn(u,n,6,s)}}function Vy(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!de(n)){const c=u=>{const h=Vy(u,e,!0);h&&(a=!0,rt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(je(n)&&r.set(n,null),null):(le(i)?i.forEach(c=>o[c]=null):rt(o,i),je(n)&&r.set(n,o),o)}function tc(n,e){return!n||!Hl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(n,e[0].toLowerCase()+e.slice(1))||Pe(n,qr(e))||Pe(n,e))}function kp(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:g,setupState:m,ctx:T,inheritAttrs:S}=n,P=ol(n);let M,L;try{if(t.shapeFlag&4){const x=s||r,ee=x;M=Pn(u.call(ee,x,h,f,m,g,T)),L=a}else{const x=e;M=Pn(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),L=e.props?a:HA(a)}}catch(x){ho.length=0,Zl(x,n,1),M=Ge(xr)}let D=M;if(L&&S!==!1){const x=Object.keys(L),{shapeFlag:ee}=D;x.length&&ee&7&&(i&&x.some(qh)&&(L=zA(L,i)),D=ps(D,L,!1,!0))}return t.dirs&&(D=ps(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&Co(D,t.transition),M=D,ol(P),M}const HA=n=>{let e;for(const t in n)(t==="class"||t==="style"||Hl(t))&&((e||(e={}))[t]=n[t]);return e},zA=(n,e)=>{const t={};for(const r in n)(!qh(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function GA(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Np(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==r[g]&&!tc(u,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Np(r,o,u):!0:!!o;return!1}function Np(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!tc(t,i))return!0}return!1}function KA({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Fy=n=>n.__isSuspense;function QA(n,e){e&&e.pendingBranch?le(n)?e.effects.push(...n):e.effects.push(n):sA(n)}const Vt=Symbol.for("v-fgt"),nc=Symbol.for("v-txt"),xr=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),ho=[];let Ht=null;function zt(n=!1){ho.push(Ht=n?null:[])}function YA(){ho.pop(),Ht=ho[ho.length-1]||null}let bo=1;function Op(n,e=!1){bo+=n,n<0&&Ht&&e&&(Ht.hasOnce=!0)}function Uy(n){return n.dynamicChildren=bo>0?Ht||Hs:null,YA(),bo>0&&Ht&&Ht.push(n),n}function hn(n,e,t,r,s,i){return Uy(_e(n,e,t,r,s,i,!0))}function By(n,e,t,r,s){return Uy(Ge(n,e,t,r,s,!0))}function cl(n){return n?n.__v_isVNode===!0:!1}function Ls(n,e){return n.type===e.type&&n.key===e.key}const $y=({key:n})=>n??null,Wa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xe(n)||at(n)||de(n)?{i:Ut,r:n,k:e,f:!!t}:n:null);function _e(n,e=null,t=null,r=0,s=null,i=n===Vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$y(e),ref:e&&Wa(e),scopeId:uy,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return a?(nd(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Xe(t)?8:16),bo>0&&!o&&Ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ht.push(c),c}const Ge=XA;function XA(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===EA)&&(n=xr),cl(n)){const a=ps(n,e,!0);return t&&nd(a,t),bo>0&&!i&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(n)]=a:Ht.push(a)),a.patchFlag=-2,a}if(uR(n)&&(n=n.__vccOpts),e){e=JA(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=Yl(a)),je(c)&&(Zh(c)&&!le(c)&&(c=rt({},c)),e.style=zh(c))}const o=Xe(n)?1:Fy(n)?128:oA(n)?64:je(n)?4:de(n)?2:0;return _e(n,e,t,r,s,o,i,!0)}function JA(n){return n?Zh(n)||Cy(n)?rt({},n):n:null}function ps(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?tR(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&$y(u),ref:e&&e.ref?t&&i?le(i)?i.concat(Wa(e)):[i,Wa(e)]:Wa(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ps(n.ssContent),ssFallback:n.ssFallback&&ps(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Co(h,c.clone(h)),h}function Pr(n=" ",e=0){return Ge(nc,null,n,e)}function ZA(n,e){const t=Ge(qa,null,n);return t.staticCount=e,t}function eR(n="",e=!1){return e?(zt(),By(xr,null,n)):Ge(xr,null,n)}function Pn(n){return n==null||typeof n=="boolean"?Ge(xr):le(n)?Ge(Vt,null,n.slice()):cl(n)?Ir(n):Ge(nc,null,String(n))}function Ir(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ps(n)}function nd(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(le(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nd(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Cy(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Ut},t=32):(e=String(e),r&64?(t=16,e=[Pr(e)]):t=8);n.children=e,n.shapeFlag|=t}function tR(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Yl([e.class,r.class]));else if(s==="style")e.style=zh([e.style,r.style]);else if(Hl(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Cn(n,e,t,r=null){vn(n,e,7,[t,r])}const nR=wy();let rR=0;function sR(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||nR,i={uid:rR++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new F_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sy(r,s),emitsOptions:Vy(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=WA.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const rd=()=>ft||Ut;let ul,Hu;{const n=Ql(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ul=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),Hu=e("__VUE_SSR_SETTERS__",t=>So=t)}const zo=n=>{const e=ft;return ul(n),n.scope.on(),()=>{n.scope.off(),ul(e)}},Dp=()=>{ft&&ft.scope.off(),ul(null)};function jy(n){return n.vnode.shapeFlag&4}let So=!1;function iR(n,e=!1,t=!1){e&&Hu(e);const{props:r,children:s}=n.vnode,i=jy(n);kA(n,r,i,e),xA(n,s,t);const o=i?oR(n,e):void 0;return e&&Hu(!1),o}function oR(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,IA);const{setup:r}=t;if(r){Wr();const s=n.setupContext=r.length>1?lR(n):null,i=zo(n),o=Ho(r,n,0,[n.props,s]),a=N_(o);if(Hr(),i(),(a||n.sp)&&!lo(n)&&fy(n),a){if(o.then(Dp,Dp),e)return o.then(c=>{xp(n,c)}).catch(c=>{Zl(c,n,0)});n.asyncDep=o}else xp(n,o)}else qy(n)}function xp(n,e,t){de(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=sy(e)),qy(n)}function qy(n,e,t){const r=n.type;n.render||(n.render=r.render||xn);{const s=zo(n);Wr();try{wA(n)}finally{Hr(),s()}}}const aR={get(n,e){return wt(n,"get",""),n[e]}};function lR(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,aR),slots:n.slots,emit:n.emit,expose:e}}function rc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(sy(Qw(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in co)return co[t](n)},has(e,t){return t in e||t in co}})):n.proxy}function cR(n,e=!0){return de(n)?n.displayName||n.name:n.name||e&&n.__name}function uR(n){return de(n)&&"__vccOpts"in n}const tn=(n,e)=>Zw(n,e,So);function Wy(n,e,t){const r=arguments.length;return r===2?je(e)&&!le(e)?cl(e)?Ge(n,null,[e]):Ge(n,e):Ge(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&cl(t)&&(t=[t]),Ge(n,e,t))}const hR="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zu;const Mp=typeof window<"u"&&window.trustedTypes;if(Mp)try{zu=Mp.createPolicy("vue",{createHTML:n=>n})}catch{}const Hy=zu?n=>zu.createHTML(n):n=>n,dR="http://www.w3.org/2000/svg",fR="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,Lp=Kn&&Kn.createElement("template"),pR={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Kn.createElementNS(dR,n):e==="mathml"?Kn.createElementNS(fR,n):t?Kn.createElement(n,{is:t}):Kn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Lp.innerHTML=Hy(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Lp.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_r="transition",$i="animation",ni=Symbol("_vtc"),zy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gR=rt({},lA,zy),ss=(n,e=[])=>{le(n)?n.forEach(t=>t(...e)):n&&n(...e)},Vp=n=>n?le(n)?n.some(e=>e.length>1):n.length>1:!1;function mR(n){const e={};for(const A in n)A in zy||(e[A]=n[A]);if(n.css===!1)return e;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,T=_R(s),S=T&&T[0],P=T&&T[1],{onBeforeEnter:M,onEnter:L,onEnterCancelled:D,onLeave:x,onLeaveCancelled:ee,onBeforeAppear:te=M,onAppear:C=L,onAppearCancelled:y=D}=e,E=(A,v,Oe,tt)=>{A._enterCancelled=tt,vr(A,v?h:a),vr(A,v?u:o),Oe&&Oe()},R=(A,v)=>{A._isLeaving=!1,vr(A,f),vr(A,m),vr(A,g),v&&v()},b=A=>(v,Oe)=>{const tt=A?C:L,We=()=>E(v,A,Oe);ss(tt,[v,We]),Fp(()=>{vr(v,A?c:i),bn(v,A?h:a),Vp(tt)||Up(v,r,S,We)})};return rt(e,{onBeforeEnter(A){ss(M,[A]),bn(A,i),bn(A,o)},onBeforeAppear(A){ss(te,[A]),bn(A,c),bn(A,u)},onEnter:b(!1),onAppear:b(!0),onLeave(A,v){A._isLeaving=!0;const Oe=()=>R(A,v);bn(A,f),A._enterCancelled?(bn(A,g),Gu()):(Gu(),bn(A,g)),Fp(()=>{A._isLeaving&&(vr(A,f),bn(A,m),Vp(x)||Up(A,r,P,Oe))}),ss(x,[A,Oe])},onEnterCancelled(A){E(A,!1,void 0,!0),ss(D,[A])},onAppearCancelled(A){E(A,!0,void 0,!0),ss(y,[A])},onLeaveCancelled(A){R(A),ss(ee,[A])}})}function _R(n){if(n==null)return null;if(je(n))return[su(n.enter),su(n.leave)];{const e=su(n);return[e,e]}}function su(n){return Iw(n)}function bn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ni]||(n[ni]=new Set)).add(e)}function vr(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[ni];t&&(t.delete(e),t.size||(n[ni]=void 0))}function Fp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let yR=0;function Up(n,e,t,r){const s=n._endId=++yR,i=()=>{s===n._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:a,propCount:c}=Gy(n,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{n.removeEventListener(u,g),i()},g=m=>{m.target===n&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),n.addEventListener(u,g)}function Gy(n,e){const t=window.getComputedStyle(n),r=T=>(t[T]||"").split(", "),s=r(`${_r}Delay`),i=r(`${_r}Duration`),o=Bp(s,i),a=r(`${$i}Delay`),c=r(`${$i}Duration`),u=Bp(a,c);let h=null,f=0,g=0;e===_r?o>0&&(h=_r,f=o,g=i.length):e===$i?u>0&&(h=$i,f=u,g=c.length):(f=Math.max(o,u),h=f>0?o>u?_r:$i:null,g=h?h===_r?i.length:c.length:0);const m=h===_r&&/\b(transform|all)(,|$)/.test(r(`${_r}Property`).toString());return{type:h,timeout:f,propCount:g,hasTransform:m}}function Bp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>$p(t)+$p(n[r])))}function $p(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Gu(){return document.body.offsetHeight}function ER(n,e,t){const r=n[ni];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const jp=Symbol("_vod"),vR=Symbol("_vsh"),TR=Symbol(""),IR=/(^|;)\s*display\s*:/;function wR(n,e,t){const r=n.style,s=Xe(t);let i=!1;if(t&&!s){if(e)if(Xe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ha(r,a,"")}else for(const o in e)t[o]==null&&Ha(r,o,"");for(const o in t)o==="display"&&(i=!0),Ha(r,o,t[o])}else if(s){if(e!==t){const o=r[TR];o&&(t+=";"+o),r.cssText=t,i=IR.test(t)}}else e&&n.removeAttribute("style");jp in n&&(n[jp]=i?r.display:"",n[vR]&&(r.display="none"))}const qp=/\s*!important$/;function Ha(n,e,t){if(le(t))t.forEach(r=>Ha(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=AR(n,e);qp.test(t)?n.setProperty(qr(r),t.replace(qp,""),"important"):n[r]=t}}const Wp=["Webkit","Moz","ms"],iu={};function AR(n,e){const t=iu[e];if(t)return t;let r=on(e);if(r!=="filter"&&r in n)return iu[e]=r;r=Kl(r);for(let s=0;s<Wp.length;s++){const i=Wp[s]+r;if(i in n)return iu[e]=i}return e}const Hp="http://www.w3.org/1999/xlink";function zp(n,e,t,r,s,i=Sw(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hp,e.slice(6,e.length)):n.setAttributeNS(Hp,e,t):t==null||i&&!M_(t)?n.removeAttribute(e):n.setAttribute(e,i?"":jr(t)?String(t):t)}function Gp(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hy(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=M_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Vs(n,e,t,r){n.addEventListener(e,t,r)}function RR(n,e,t,r){n.removeEventListener(e,t,r)}const Kp=Symbol("_vei");function CR(n,e,t,r,s=null){const i=n[Kp]||(n[Kp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=bR(e);if(r){const u=i[e]=kR(r,s);Vs(n,a,u,c)}else o&&(RR(n,a,o,c),i[e]=void 0)}}const Qp=/(?:Once|Passive|Capture)$/;function bR(n){let e;if(Qp.test(n)){e={};let r;for(;r=n.match(Qp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):qr(n.slice(2)),e]}let ou=0;const SR=Promise.resolve(),PR=()=>ou||(SR.then(()=>ou=0),ou=Date.now());function kR(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;vn(NR(r,t.value),e,5,[r])};return t.value=n,t.attached=PR(),t}function NR(n,e){if(le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,OR=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?ER(n,r,o):e==="style"?wR(n,t,r):Hl(e)?qh(e)||CR(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DR(n,e,r,o))?(Gp(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zp(n,e,r,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Xe(r))?Gp(n,on(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),zp(n,e,r,o))};function DR(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yp(e)&&de(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yp(e)&&Xe(t)?!1:e in n}const Ky=new WeakMap,Qy=new WeakMap,hl=Symbol("_moveCb"),Xp=Symbol("_enterCb"),xR=n=>(delete n.props.mode,n),MR=xR({name:"TransitionGroup",props:rt({},gR,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=rd(),r=aA();let s,i;return _y(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!BR(s[0].el,t.vnode.el,o))return;s.forEach(VR),s.forEach(FR);const a=s.filter(UR);Gu(),a.forEach(c=>{const u=c.el,h=u.style;bn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[hl]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",f),u[hl]=null,vr(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Se(n),a=mR(o);let c=o.tag||Vt;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),Co(h,Bu(h,a,r,t)),Ky.set(h,h.el.getBoundingClientRect()))}i=e.default?hy(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Co(h,Bu(h,a,r,t))}return Ge(c,null,i)}}}),LR=MR;function VR(n){const e=n.el;e[hl]&&e[hl](),e[Xp]&&e[Xp]()}function FR(n){Qy.set(n,n.el.getBoundingClientRect())}function UR(n){const e=Ky.get(n),t=Qy.get(n),r=e.left-t.left,s=e.top-t.top;if(r||s){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",n}}function BR(n,e,t){const r=n.cloneNode(),s=n[ni];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),t.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Gy(r);return i.removeChild(r),o}const Jp=n=>{const e=n.props["onUpdate:modelValue"]||!1;return le(e)?t=>$a(e,t):e};function $R(n){n.target.composing=!0}function Zp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const au=Symbol("_assign"),Ku={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[au]=Jp(s);const i=r||s.props&&s.props.type==="number";Vs(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Du(a)),n[au](a)}),t&&Vs(n,"change",()=>{n.value=n.value.trim()}),e||(Vs(n,"compositionstart",$R),Vs(n,"compositionend",Zp),Vs(n,"change",Zp))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[au]=Jp(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?Du(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},jR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qR=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=qr(s.key);if(e.some(o=>o===i||jR[o]===i))return n(s)})},WR=rt({patchProp:OR},pR);let eg;function HR(){return eg||(eg=LA(WR))}const zR=(...n)=>{const e=HR().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=KR(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,GR(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function GR(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function KR(n){return Xe(n)?document.querySelector(n):n}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fs=typeof document<"u";function Yy(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function QR(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Yy(n.default)}const Fe=Object.assign;function lu(n,e){const t={};for(const r in e){const s=e[r];t[r]=Tn(s)?s.map(n):n(s)}return t}const fo=()=>{},Tn=Array.isArray,Xy=/#/g,YR=/&/g,XR=/\//g,JR=/=/g,ZR=/\?/g,Jy=/\+/g,eC=/%5B/g,tC=/%5D/g,Zy=/%5E/g,nC=/%60/g,eE=/%7B/g,rC=/%7C/g,tE=/%7D/g,sC=/%20/g;function sd(n){return encodeURI(""+n).replace(rC,"|").replace(eC,"[").replace(tC,"]")}function iC(n){return sd(n).replace(eE,"{").replace(tE,"}").replace(Zy,"^")}function Qu(n){return sd(n).replace(Jy,"%2B").replace(sC,"+").replace(Xy,"%23").replace(YR,"%26").replace(nC,"`").replace(eE,"{").replace(tE,"}").replace(Zy,"^")}function oC(n){return Qu(n).replace(JR,"%3D")}function aC(n){return sd(n).replace(Xy,"%23").replace(ZR,"%3F")}function lC(n){return n==null?"":aC(n).replace(XR,"%2F")}function Po(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const cC=/\/$/,uC=n=>n.replace(cC,"");function cu(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=n(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=pC(r??e,t),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Po(o)}}function hC(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function dC(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&ri(e.matched[r],t.matched[s])&&nE(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ri(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function nE(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!fC(n[t],e[t]))return!1;return!0}function fC(n,e){return Tn(n)?tg(n,e):Tn(e)?tg(e,n):n===e}function tg(n,e){return Tn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function pC(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const yr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ko;(function(n){n.pop="pop",n.push="push"})(ko||(ko={}));var dl;(function(n){n.back="back",n.forward="forward",n.unknown=""})(dl||(dl={}));const uu="";function gC(n){if(!n)if(Fs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),uC(n)}const mC=/^[^#]+#/;function _C(n,e){return n.replace(mC,"#")+e}function yC(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const EC=()=>({left:window.scrollX,top:window.scrollY});function vC(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=yC(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ng(n,e){return(history.state?history.state.position-e:-1)+n}const Yu=new Map;function TC(n,e){Yu.set(n,e)}function IC(n){const e=Yu.get(n);return Yu.delete(n),e}function wC(n=""){let e=[],t=[uu],r=0;n=gC(n);function s(a){r++,r!==t.length&&t.splice(r),t.push(a)}function i(a,c,{direction:u,delta:h}){const f={direction:u,delta:h,type:ko.pop};for(const g of e)g(a,c,f)}const o={location:uu,state:{},base:n,createHref:_C.bind(null,n),replace(a){t.splice(r--,1),s(a)},push(a,c){s(a)},listen(a){return e.push(a),()=>{const c=e.indexOf(a);c>-1&&e.splice(c,1)}},destroy(){e=[],t=[uu],r=0},go(a,c=!0){const u=this.location,h=a<0?dl.back:dl.forward;r=Math.max(0,Math.min(r+a,t.length-1)),c&&i(this.location,u,{direction:h,delta:a})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t[r]}),o}function AC(n){return typeof n=="string"||n&&typeof n=="object"}function rE(n){return typeof n=="string"||typeof n=="symbol"}const sE=Symbol("");var rg;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(rg||(rg={}));function si(n,e){return Fe(new Error,{type:n,[sE]:!0},e)}function zn(n,e){return n instanceof Error&&sE in n&&(e==null||!!(n.type&e))}const sg="[^/]+?",RC={sensitive:!1,strict:!1,start:!0,end:!0},CC=/[.+*?^${}()[\]/\\]/g;function bC(n,e){const t=Fe({},RC,e),r=[];let s=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(t.sensitive?.25:0);if(g.type===0)f||(s+="/"),s+=g.value.replace(CC,"\\$&"),m+=40;else if(g.type===1){const{value:T,repeatable:S,optional:P,regexp:M}=g;i.push({name:T,repeatable:S,optional:P});const L=M||sg;if(L!==sg){m+=10;try{new RegExp(`(${L})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${T}" (${L}): `+x.message)}}let D=S?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;f||(D=P&&u.length<2?`(?:/${D})`:"/"+D),P&&(D+="?"),s+=D,m+=20,P&&(m+=-8),S&&(m+=-20),L===".*"&&(m+=-50)}h.push(m)}r.push(h)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",T=i[g-1];f[T.name]=m&&T.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const g of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of g)if(m.type===0)h+=m.value;else if(m.type===1){const{value:T,repeatable:S,optional:P}=m,M=T in u?u[T]:"";if(Tn(M)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const L=Tn(M)?M.join("/"):M;if(!L)if(P)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${T}"`);h+=L}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function SC(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function iE(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=SC(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(ig(r))return 1;if(ig(s))return-1}return s.length-r.length}function ig(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const PC={type:0,value:""},kC=/[a-zA-Z0-9_]/;function NC(n){if(!n)return[[]];if(n==="/")return[[PC]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=0,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):g();break;case 4:g(),t=r;break;case 1:c==="("?t=2:kC.test(c)?g():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function OC(n,e,t){const r=bC(NC(n.path),t),s=Fe(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function DC(n,e){const t=[],r=new Map;e=cg({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,g,m){const T=!m,S=ag(f);S.aliasOf=m&&m.record;const P=cg(e,f),M=[S];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const ee of x)M.push(ag(Fe({},S,{components:m?m.record.components:S.components,path:ee,aliasOf:m?m.record:S})))}let L,D;for(const x of M){const{path:ee}=x;if(g&&ee[0]!=="/"){const te=g.record.path,C=te[te.length-1]==="/"?"":"/";x.path=g.record.path+(ee&&C+ee)}if(L=OC(x,g,P),m?m.alias.push(L):(D=D||L,D!==L&&D.alias.push(L),T&&f.name&&!lg(L)&&o(f.name)),oE(L)&&c(L),S.children){const te=S.children;for(let C=0;C<te.length;C++)i(te[C],L,m&&m.children[C])}m=m||L}return D?()=>{o(D)}:fo}function o(f){if(rE(f)){const g=r.get(f);g&&(r.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const g=LC(f,t);t.splice(g,0,f),f.record.name&&!lg(f)&&r.set(f.record.name,f)}function u(f,g){let m,T={},S,P;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw si(1,{location:f});P=m.record.name,T=Fe(og(g.params,m.keys.filter(D=>!D.optional).concat(m.parent?m.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&og(f.params,m.keys.map(D=>D.name))),S=m.stringify(T)}else if(f.path!=null)S=f.path,m=t.find(D=>D.re.test(S)),m&&(T=m.parse(S),P=m.record.name);else{if(m=g.name?r.get(g.name):t.find(D=>D.re.test(g.path)),!m)throw si(1,{location:f,currentLocation:g});P=m.record.name,T=Fe({},g.params,f.params),S=m.stringify(T)}const M=[];let L=m;for(;L;)M.unshift(L.record),L=L.parent;return{name:P,path:S,params:T,matched:M,meta:MC(M)}}n.forEach(f=>i(f));function h(){t.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function og(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function ag(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:xC(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xC(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function lg(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function MC(n){return n.reduce((e,t)=>Fe(e,t.meta),{})}function cg(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function LC(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;iE(n,e[i])<0?r=i:t=i+1}const s=VC(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function VC(n){let e=n;for(;e=e.parent;)if(oE(e)&&iE(n,e)===0)return e}function oE({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function FC(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jy," "),o=i.indexOf("="),a=Po(o<0?i:i.slice(0,o)),c=o<0?null:Po(i.slice(o+1));if(a in e){let u=e[a];Tn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ug(n){let e="";for(let t in n){const r=n[t];if(t=oC(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Tn(r)?r.map(i=>i&&Qu(i)):[r&&Qu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function UC(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const BC=Symbol(""),hg=Symbol(""),sc=Symbol(""),aE=Symbol(""),Xu=Symbol("");function ji(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function wr(n,e,t,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(si(4,{from:t,to:e})):g instanceof Error?c(g):AC(g)?c(si(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),a())},h=i(()=>n.call(r&&r.instances[s],e,t,u));let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function hu(n,e,t,r,s=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Yy(c)){const h=(c.__vccOpts||c)[e];h&&i.push(wr(h,t,r,o,a,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=QR(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&wr(m,t,r,o,a,s)()}))}}return i}function dg(n){const e=Kt(sc),t=Kt(aE),r=tn(()=>{const c=Bt(n.to);return e.resolve(c)}),s=tn(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=t.matched;if(!h||!f.length)return-1;const g=f.findIndex(ri.bind(null,h));if(g>-1)return g;const m=fg(c[u-2]);return u>1&&fg(h)===m&&f[f.length-1].path!==m?f.findIndex(ri.bind(null,c[u-2])):g}),i=tn(()=>s.value>-1&&HC(t.params,r.value.params)),o=tn(()=>s.value>-1&&s.value===t.matched.length-1&&nE(t.params,r.value.params));function a(c={}){if(WC(c)){const u=e[Bt(n.replace)?"replace":"push"](Bt(n.to)).catch(fo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:tn(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function $C(n){return n.length===1?n[0]:n}const jC=dy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dg,setup(n,{slots:e}){const t=Jl(dg(n)),{options:r}=Kt(sc),s=tn(()=>({[pg(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[pg(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&$C(e.default(t));return n.custom?i:Wy("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),qC=jC;function WC(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function HC(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Tn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fg(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const pg=(n,e,t)=>n??e??t,zC=dy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Kt(Xu),s=tn(()=>n.route||r.value),i=Kt(hg,0),o=tn(()=>{let u=Bt(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=tn(()=>s.value.matched[o.value]);ja(hg,tn(()=>o.value+1)),ja(BC,a),ja(Xu,s);const c=mn();return uo(()=>[c.value,a.value,n.name],([u,h,f],[g,m,T])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!ri(h,m)||!g)&&(h.enterCallbacks[f]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,h=n.name,f=a.value,g=f&&f.components[h];if(!g)return gg(t.default,{Component:g,route:u});const m=f.props[h],T=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=Wy(g,Fe({},T,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return gg(t.default,{Component:P,route:u})||P}}});function gg(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const GC=zC;function KC(n){const e=DC(n.routes,n),t=n.parseQuery||FC,r=n.stringifyQuery||ug,s=n.history,i=ji(),o=ji(),a=ji(),c=ny(yr);let u=yr;Fs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=lu.bind(null,V=>""+V),f=lu.bind(null,lC),g=lu.bind(null,Po);function m(V,X){let Q,ne;return rE(V)?(Q=e.getRecordMatcher(V),ne=X):ne=V,e.addRoute(ne,Q)}function T(V){const X=e.getRecordMatcher(V);X&&e.removeRoute(X)}function S(){return e.getRoutes().map(V=>V.record)}function P(V){return!!e.getRecordMatcher(V)}function M(V,X){if(X=Fe({},X||c.value),typeof V=="string"){const k=cu(t,V,X.path),F=e.resolve({path:k.path},X),j=s.createHref(k.fullPath);return Fe(k,F,{params:g(F.params),hash:Po(k.hash),redirectedFrom:void 0,href:j})}let Q;if(V.path!=null)Q=Fe({},V,{path:cu(t,V.path,X.path).path});else{const k=Fe({},V.params);for(const F in k)k[F]==null&&delete k[F];Q=Fe({},V,{params:f(k)}),X.params=f(X.params)}const ne=e.resolve(Q,X),Ce=V.hash||"";ne.params=h(g(ne.params));const I=hC(r,Fe({},V,{hash:iC(Ce),path:ne.path})),w=s.createHref(I);return Fe({fullPath:I,hash:Ce,query:r===ug?UC(V.query):V.query||{}},ne,{redirectedFrom:void 0,href:w})}function L(V){return typeof V=="string"?cu(t,V,c.value.path):Fe({},V)}function D(V,X){if(u!==V)return si(8,{from:X,to:V})}function x(V){return C(V)}function ee(V){return x(Fe(L(V),{replace:!0}))}function te(V){const X=V.matched[V.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let ne=typeof Q=="function"?Q(V):Q;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=L(ne):{path:ne},ne.params={}),Fe({query:V.query,hash:V.hash,params:ne.path!=null?{}:V.params},ne)}}function C(V,X){const Q=u=M(V),ne=c.value,Ce=V.state,I=V.force,w=V.replace===!0,k=te(Q);if(k)return C(Fe(L(k),{state:typeof k=="object"?Fe({},Ce,k.state):Ce,force:I,replace:w}),X||Q);const F=Q;F.redirectedFrom=X;let j;return!I&&dC(r,ne,Q)&&(j=si(16,{to:F,from:ne}),Xt(ne,ne,!0,!1)),(j?Promise.resolve(j):R(F,ne)).catch(U=>zn(U)?zn(U,2)?U:cn(U):me(U,F,ne)).then(U=>{if(U){if(zn(U,2))return C(Fe({replace:w},L(U.to),{state:typeof U.to=="object"?Fe({},Ce,U.to.state):Ce,force:I}),X||F)}else U=A(F,ne,!0,w,Ce);return b(F,ne,U),U})}function y(V,X){const Q=D(V,X);return Q?Promise.reject(Q):Promise.resolve()}function E(V){const X=dr.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(V):V()}function R(V,X){let Q;const[ne,Ce,I]=QC(V,X);Q=hu(ne.reverse(),"beforeRouteLeave",V,X);for(const k of ne)k.leaveGuards.forEach(F=>{Q.push(wr(F,V,X))});const w=y.bind(null,V,X);return Q.push(w),Mt(Q).then(()=>{Q=[];for(const k of i.list())Q.push(wr(k,V,X));return Q.push(w),Mt(Q)}).then(()=>{Q=hu(Ce,"beforeRouteUpdate",V,X);for(const k of Ce)k.updateGuards.forEach(F=>{Q.push(wr(F,V,X))});return Q.push(w),Mt(Q)}).then(()=>{Q=[];for(const k of I)if(k.beforeEnter)if(Tn(k.beforeEnter))for(const F of k.beforeEnter)Q.push(wr(F,V,X));else Q.push(wr(k.beforeEnter,V,X));return Q.push(w),Mt(Q)}).then(()=>(V.matched.forEach(k=>k.enterCallbacks={}),Q=hu(I,"beforeRouteEnter",V,X,E),Q.push(w),Mt(Q))).then(()=>{Q=[];for(const k of o.list())Q.push(wr(k,V,X));return Q.push(w),Mt(Q)}).catch(k=>zn(k,8)?k:Promise.reject(k))}function b(V,X,Q){a.list().forEach(ne=>E(()=>ne(V,X,Q)))}function A(V,X,Q,ne,Ce){const I=D(V,X);if(I)return I;const w=X===yr,k=Fs?history.state:{};Q&&(ne||w?s.replace(V.fullPath,Fe({scroll:w&&k&&k.scroll},Ce)):s.push(V.fullPath,Ce)),c.value=V,Xt(V,X,Q,w),cn()}let v;function Oe(){v||(v=s.listen((V,X,Q)=>{if(!Rn.listening)return;const ne=M(V),Ce=te(ne);if(Ce){C(Fe(Ce,{replace:!0,force:!0}),ne).catch(fo);return}u=ne;const I=c.value;Fs&&TC(ng(I.fullPath,Q.delta),EC()),R(ne,I).catch(w=>zn(w,12)?w:zn(w,2)?(C(Fe(L(w.to),{force:!0}),ne).then(k=>{zn(k,20)&&!Q.delta&&Q.type===ko.pop&&s.go(-1,!1)}).catch(fo),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),me(w,ne,I))).then(w=>{w=w||A(ne,I,!1),w&&(Q.delta&&!zn(w,8)?s.go(-Q.delta,!1):Q.type===ko.pop&&zn(w,20)&&s.go(-1,!1)),b(ne,I,w)}).catch(fo)}))}let tt=ji(),We=ji(),Te;function me(V,X,Q){cn(V);const ne=We.list();return ne.length?ne.forEach(Ce=>Ce(V,X,Q)):console.error(V),Promise.reject(V)}function $t(){return Te&&c.value!==yr?Promise.resolve():new Promise((V,X)=>{tt.add([V,X])})}function cn(V){return Te||(Te=!V,Oe(),tt.list().forEach(([X,Q])=>V?Q(V):X()),tt.reset()),V}function Xt(V,X,Q,ne){const{scrollBehavior:Ce}=n;if(!Fs||!Ce)return Promise.resolve();const I=!Q&&IC(ng(V.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return oy().then(()=>Ce(V,X,I)).then(w=>w&&vC(w)).catch(w=>me(w,V,X))}const He=V=>s.go(V);let ze;const dr=new Set,Rn={currentRoute:c,listening:!0,addRoute:m,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:M,options:n,push:x,replace:ee,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:We.add,isReady:$t,install(V){const X=this;V.component("RouterLink",qC),V.component("RouterView",GC),V.config.globalProperties.$router=X,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(c)}),Fs&&!ze&&c.value===yr&&(ze=!0,x(s.location).catch(Ce=>{}));const Q={};for(const Ce in yr)Object.defineProperty(Q,Ce,{get:()=>c.value[Ce],enumerable:!0});V.provide(sc,X),V.provide(aE,ey(Q)),V.provide(Xu,c);const ne=V.unmount;dr.add(V),V.unmount=function(){dr.delete(V),dr.size<1&&(u=yr,v&&v(),v=null,c.value=yr,ze=!1,Te=!1),ne()}}};function Mt(V){return V.reduce((X,Q)=>X.then(()=>E(Q)),Promise.resolve())}return Rn}function QC(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>ri(u,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>ri(u,c))||s.push(c))}return[t,r,s]}function lE(){return Kt(sc)}var mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(n,e){if(!n)throw gi(e)},gi=function(n){return new Error("Firebase Database ("+cE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},YC=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),r.push(t[h],t[f],t[g],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):YC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new XC;const g=i<<2|a>>4;if(r.push(g),u!==64){const m=a<<4&240|u>>2;if(r.push(m),f!==64){const T=u<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class XC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hE=function(n){const e=uE(n);return ic.encodeByteArray(e,!0)},fl=function(n){return hE(n).replace(/\./g,"")},pl=function(n){try{return ic.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(n){return dE(void 0,n)}function dE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ZC(t)||(n[t]=dE(n[t],e[t]));return n}function ZC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=()=>eb().__FIREBASE_DEFAULTS__,nb=()=>{if(typeof process>"u"||typeof mg>"u")return;const n=mg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},rb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pl(n[1]);return e&&JSON.parse(e)},oc=()=>{try{return tb()||nb()||rb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sb=n=>{var e,t;return(t=(e=oc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ib=n=>{const e=sb(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fE=()=>{var n;return(n=oc())===null||n===void 0?void 0:n.config},ob=n=>{var e;return(e=oc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fl(JSON.stringify(t)),fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function lb(){var n;const e=(n=oc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ub(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hb(){const n=Pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function db(){return cE.NODE_ADMIN===!0}function fb(){return!lb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gE(){try{return typeof indexedDB=="object"}catch{return!1}}function pb(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="FirebaseError";class $n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gb,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mi.prototype.create)}}class mi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $n(s,a,r)}}function mb(n,e){return n.replace(_b,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _b=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n){return JSON.parse(n)}function pt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=Oo(pl(i[0])||""),t=Oo(pl(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},yb=function(n){const e=mE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Eb=function(n){const e=mE(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ii(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ju(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gl(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function ml(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(_g(i)&&_g(o)){if(!ml(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function _g(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Yi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)r[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const g=(s<<5|s>>>27)+u+c+h+r[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Tb(n,e){const t=new Ib(n,e);return t.subscribe.bind(t)}class Ib{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wb(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=du),s.error===void 0&&(s.error=du),s.complete===void 0&&(s.complete=du);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wb(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function du(){}function Ab(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,K(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ac=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n){return n&&n._delegate?n._delegate:n}class In{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new No;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sb(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bb(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bb(n){return n===os?void 0:n}function Sb(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ge||(ge={}));const kb={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Nb=ge.INFO,Ob={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Db=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ob[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Go{constructor(e){this.name=e,this._logLevel=Nb,this._logHandler=Db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const xb=(n,e)=>e.some(t=>n instanceof t);let yg,Eg;function Mb(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lb(){return Eg||(Eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _E=new WeakMap,Zu=new WeakMap,yE=new WeakMap,fu=new WeakMap,od=new WeakMap;function Vb(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(kr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_E.set(t,n)}).catch(()=>{}),od.set(e,n),e}function Fb(n){if(Zu.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Zu.set(n,e)}let eh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return kr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ub(n){eh=n(eh)}function Bb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(pu(this),e,...t);return yE.set(r,e.sort?e.sort():[e]),kr(r)}:Lb().includes(n)?function(...e){return n.apply(pu(this),e),kr(_E.get(this))}:function(...e){return kr(n.apply(pu(this),e))}}function $b(n){return typeof n=="function"?Bb(n):(n instanceof IDBTransaction&&Fb(n),xb(n,Mb())?new Proxy(n,eh):n)}function kr(n){if(n instanceof IDBRequest)return Vb(n);if(fu.has(n))return fu.get(n);const e=$b(n);return e!==n&&(fu.set(n,e),od.set(e,n)),e}const pu=n=>od.get(n);function jb(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(kr(o.result),c.oldVersion,c.newVersion,kr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qb=["get","getKey","getAll","getAllKeys","count"],Wb=["put","add","delete","clear"],gu=new Map;function vg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gu.get(e))return gu.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Wb.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qb.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return gu.set(e,i),i}Ub(n=>({...n,get:(e,t,r)=>vg(e,t)||n.get(e,t,r),has:(e,t)=>!!vg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zb(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zb(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",Tg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Go("@firebase/app"),Gb="@firebase/app-compat",Kb="@firebase/analytics-compat",Qb="@firebase/analytics",Yb="@firebase/app-check-compat",Xb="@firebase/app-check",Jb="@firebase/auth",Zb="@firebase/auth-compat",eS="@firebase/database",tS="@firebase/data-connect",nS="@firebase/database-compat",rS="@firebase/functions",sS="@firebase/functions-compat",iS="@firebase/installations",oS="@firebase/installations-compat",aS="@firebase/messaging",lS="@firebase/messaging-compat",cS="@firebase/performance",uS="@firebase/performance-compat",hS="@firebase/remote-config",dS="@firebase/remote-config-compat",fS="@firebase/storage",pS="@firebase/storage-compat",gS="@firebase/firestore",mS="@firebase/vertexai",_S="@firebase/firestore-compat",yS="firebase",ES="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="[DEFAULT]",vS={[th]:"fire-core",[Gb]:"fire-core-compat",[Qb]:"fire-analytics",[Kb]:"fire-analytics-compat",[Xb]:"fire-app-check",[Yb]:"fire-app-check-compat",[Jb]:"fire-auth",[Zb]:"fire-auth-compat",[eS]:"fire-rtdb",[tS]:"fire-data-connect",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[sS]:"fire-fn-compat",[iS]:"fire-iid",[oS]:"fire-iid-compat",[aS]:"fire-fcm",[lS]:"fire-fcm-compat",[cS]:"fire-perf",[uS]:"fire-perf-compat",[hS]:"fire-rc",[dS]:"fire-rc-compat",[fS]:"fire-gcs",[pS]:"fire-gcs-compat",[gS]:"fire-fst",[_S]:"fire-fst-compat",[mS]:"fire-vertex","fire-js":"fire-js",[yS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=new Map,TS=new Map,rh=new Map;function Ig(n,e){try{n.container.addComponent(e)}catch(t){or.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Fn(n){const e=n.name;if(rh.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;rh.set(e,n);for(const t of _l.values())Ig(t,n);for(const t of TS.values())Ig(t,n);return!0}function EE(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new mi("app","Firebase",IS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=ES;function vE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(t||(t=fE()),!t)throw Nr.create("no-options");const i=_l.get(s);if(i){if(ml(t,i.options)&&ml(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new Pb(s);for(const c of rh.values())o.addComponent(c);const a=new wS(t,r,o);return _l.set(s,a),a}function TE(n=nh){const e=_l.get(n);if(!e&&n===nh&&fE())return vE();if(!e)throw Nr.create("no-app",{appName:n});return e}function Qt(n,e,t){var r;let s=(r=vS[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Fn(new In(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebase-heartbeat-database",RS=1,Do="firebase-heartbeat-store";let mu=null;function IE(){return mu||(mu=jb(AS,RS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Do)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nr.create("idb-open",{originalErrorMessage:n.message})})),mu}async function CS(n){try{const t=(await IE()).transaction(Do),r=await t.objectStore(Do).get(wE(n));return await t.done,r}catch(e){if(e instanceof $n)or.warn(e.message);else{const t=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(t.message)}}}async function wg(n,e){try{const r=(await IE()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,wE(n)),await r.done}catch(t){if(t instanceof $n)or.warn(t.message);else{const r=Nr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});or.warn(r.message)}}}function wE(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=1024,SS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NS(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ag();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=SS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ag(),{heartbeatsToSend:r,unsentEntries:s}=kS(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return or.warn(t),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function kS(n,e=bS){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rg(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Rg(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gE()?pb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return wg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rg(n){return fl(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n){Fn(new In("platform-logger",e=>new Hb(e),"PRIVATE")),Fn(new In("heartbeat",e=>new PS(e),"PRIVATE")),Qt(th,Tg,n),Qt(th,Tg,"esm2017"),Qt("fire-js","")}OS("");function ad(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function AE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DS=AE,RE=new mi("auth","Firebase",AE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new Go("@firebase/auth");function xS(n,...e){yl.logLevel<=ge.WARN&&yl.warn(`Auth (${zr}): ${n}`,...e)}function za(n,...e){yl.logLevel<=ge.ERROR&&yl.error(`Auth (${zr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(n,...e){throw cd(n,...e)}function _n(n,...e){return cd(n,...e)}function ld(n,e,t){const r=Object.assign(Object.assign({},DS()),{[e]:t});return new mi("auth","Firebase",r).create(e,{appName:n.name})}function rr(n){return ld(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function MS(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&an(n,"argument-error"),ld(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cd(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return RE.create(n,...e)}function ue(n,e,...t){if(!n)throw cd(e,...t)}function Zn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw za(e),new Error(e)}function ar(n,e){n||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function LS(){return Cg()==="http:"||Cg()==="https:"}function Cg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LS()||ub()||"connection"in navigator)?navigator.onLine:!0}function FS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.shortDelay=e,this.longDelay=t,ar(t>e,"Short delay should be less than long delay!"),this.isMobile=id()||pE()}get(){return VS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,e){ar(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=new Ko(3e4,6e4);function Gr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Kr(n,e,t,r,s={}){return bE(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=_i(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return cb()||(u.referrerPolicy="no-referrer"),CE.fetch()(SE(n,n.config.apiHost,t,a),u)})}async function bE(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},US),e);try{const s=new jS(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pa(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pa(n,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ld(n,h,u);an(n,h)}}catch(s){if(s instanceof $n)throw s;an(n,"network-request-failed",{message:String(s)})}}async function Qo(n,e,t,r,s={}){const i=await Kr(n,e,t,r,s);return"mfaPendingCredential"in i&&an(n,"multi-factor-auth-required",{_serverResponse:i}),i}function SE(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ud(n.config,s):`${n.config.apiScheme}://${s}`}function $S(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),BS.get())})}}function Pa(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=_n(n,e,r);return s.customData._tokenResponse=t,s}function bg(n){return n!==void 0&&n.enterprise!==void 0}class qS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $S(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function WS(n,e){return Kr(n,"GET","/v2/recaptchaConfig",Gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(n,e){return Kr(n,"POST","/v1/accounts:delete",e)}async function PE(n,e){return Kr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zS(n,e=!1){const t=lt(n),r=await t.getIdToken(e),s=hd(r);ue(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:po(_u(s.auth_time)),issuedAtTime:po(_u(s.iat)),expirationTime:po(_u(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _u(n){return Number(n)*1e3}function hd(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return za("JWT malformed, contained fewer than 3 sections"),null;try{const s=pl(t);return s?JSON.parse(s):(za("Failed to decode base64 JWT payload"),null)}catch(s){return za("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sg(n){const e=hd(n);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $n&&GS(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function GS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n){var e;const t=n.auth,r=await n.getIdToken(),s=await xo(n,PE(t,{idToken:r}));ue(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kE(i.providerUserInfo):[],a=YS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ih(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function QS(n){const e=lt(n);await El(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kE(n){return n.map(e=>{var{providerId:t}=e,r=ad(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(n,e){const t=await bE(n,{},async()=>{const r=_i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=SE(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",CE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JS(n,e){return Kr(n,"POST","/v2/accounts:revokeToken",Gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const t=Sg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await XS(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Ys;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,e){ue(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ih(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await xo(this,this.stsTokenManager.getToken(this.auth,e));return ue(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zS(this,e)}reload(){return QS(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await El(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await xo(this,HS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,h;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,S=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,M=(u=t.createdAt)!==null&&u!==void 0?u:void 0,L=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:x,isAnonymous:ee,providerData:te,stsTokenManager:C}=t;ue(D&&C,e,"internal-error");const y=Ys.fromJSON(this.name,C);ue(typeof D=="string",e,"internal-error"),Er(f,e.name),Er(g,e.name),ue(typeof x=="boolean",e,"internal-error"),ue(typeof ee=="boolean",e,"internal-error"),Er(m,e.name),Er(T,e.name),Er(S,e.name),Er(P,e.name),Er(M,e.name),Er(L,e.name);const E=new er({uid:D,auth:e,email:g,emailVerified:x,displayName:f,isAnonymous:ee,photoURL:T,phoneNumber:m,tenantId:S,stsTokenManager:y,createdAt:M,lastLoginAt:L});return te&&Array.isArray(te)&&(E.providerData=te.map(R=>Object.assign({},R))),P&&(E._redirectEventId=P),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Ys;s.updateFromServerResponse(t);const i=new er({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await El(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ys;a.updateFromIdToken(r);const c=new er({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ih(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;function tr(n){ar(n instanceof Function,"Expected a class definition");let e=Pg.get(n);return e?(ar(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pg.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}NE.type="NONE";const kg=NE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,e,t){return`firebase:${n}:${e}:${t}`}class Xs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ga("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xs(tr(kg),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tr(kg);const o=Ga(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const f=er._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Xs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Xs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ME(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VE(e))return"Blackberry";if(FE(e))return"Webos";if(DE(e))return"Safari";if((e.includes("chrome/")||xE(e))&&!e.includes("edge/"))return"Chrome";if(LE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OE(n=Pt()){return/firefox\//i.test(n)}function DE(n=Pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xE(n=Pt()){return/crios\//i.test(n)}function ME(n=Pt()){return/iemobile/i.test(n)}function LE(n=Pt()){return/android/i.test(n)}function VE(n=Pt()){return/blackberry/i.test(n)}function FE(n=Pt()){return/webos/i.test(n)}function dd(n=Pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ZS(n=Pt()){var e;return dd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eP(){return hb()&&document.documentMode===10}function UE(n=Pt()){return dd(n)||LE(n)||FE(n)||VE(n)||/windows phone/i.test(n)||ME(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n,e=[]){let t;switch(n){case"Browser":t=Ng(Pt());break;case"Worker":t=`${Ng(Pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(n,e={}){return Kr(n,"GET","/v2/passwordPolicy",Gr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=6;class sP{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:rP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Og(this),this.idTokenSubscription=new Og(this),this.beforeStateQueue=new tP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await PE(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await El(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(rr(this));const t=e?lt(e):null;return t&&ue(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nP(this),t=new sP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await JS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;ue(t,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Is(n){return lt(n)}class Og{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tb(t=>this.observer=t)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oP(n){lc=n}function $E(n){return lc.loadJS(n)}function aP(){return lc.recaptchaEnterpriseScript}function lP(){return lc.gapiScript}function cP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class uP{constructor(){this.enterprise=new hP}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class hP{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const dP="recaptcha-enterprise",jE="NO_RECAPTCHA";class fP{constructor(e){this.type=dP,this.auth=Is(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{WS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qS(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;bg(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(jE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&bg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=aP();c.length!==0&&(c+=a),$E(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Dg(n,e,t,r=!1,s=!1){const i=new fP(n);let o;if(s)o=jE;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function oh(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Dg(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Dg(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(n,e){const t=EE(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ml(i,e??{}))return s;an(s,"already-initialized")}return t.initialize({options:e})}function gP(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,t){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function mP(n,e){return Kr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(n,e){return Qo(n,"POST","/v1/accounts:signInWithPassword",Gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(n,e){return Qo(n,"POST","/v1/accounts:signInWithEmailLink",Gr(n,e))}async function EP(n,e){return Qo(n,"POST","/v1/accounts:signInWithEmailLink",Gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends fd{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Mo(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Mo(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,t,"signInWithPassword",_P);case"emailLink":return yP(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,r,"signUpPassword",mP);case"emailLink":return EP(e,{idToken:t,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(n,e){return Qo(n,"POST","/v1/accounts:signInWithIdp",Gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="http://localhost";class gs extends fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):an("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ad(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Js(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Js(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Js(e,t)}buildRequest(){const e={requestUri:vP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_i(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IP(n){const e=Qi(Yi(n)).link,t=e?Qi(Yi(e)).deep_link_id:null,r=Qi(Yi(n)).deep_link_id;return(r?Qi(Yi(r)).link:null)||r||t||e||n}class pd{constructor(e){var t,r,s,i,o,a;const c=Qi(Yi(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=TP((s=c.mode)!==null&&s!==void 0?s:null);ue(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=IP(e);try{return new pd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,t){return Mo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=pd.parseLink(t);return ue(r,"argument-error"),Mo._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends gd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Yo{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Xn.credential(t,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Yo{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Yo{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rr.credential(t,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(n,e){return Qo(n,"POST","/v1/accounts:signUp",Gr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await er._fromIdTokenResponse(e,r,s),o=xg(r);return new ms({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=xg(r);return new ms({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function xg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends $n{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new vl(e,t,r,s)}}function qE(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(n,i,e,r):i})}async function AP(n,e,t=!1){const r=await xo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ms._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(n,e,t=!1){const{auth:r}=n;if(dn(r.app))return Promise.reject(rr(r));const s="reauthenticate";try{const i=await xo(n,qE(r,s,e,n),t);ue(i.idToken,r,"internal-error");const o=hd(i.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(n.uid===a,r,"user-mismatch"),ms._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(n,e,t=!1){if(dn(n.app))return Promise.reject(rr(n));const r="signIn",s=await qE(n,r,e),i=await ms._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function CP(n,e){return WE(Is(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(n){const e=Is(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bP(n,e,t){if(dn(n.app))return Promise.reject(rr(n));const r=Is(n),o=await oh(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&HE(n),c}),a=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function SP(n,e,t){return dn(n.app)?Promise.reject(rr(n)):CP(lt(n),yi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HE(n),r})}function PP(n,e,t,r){return lt(n).onIdTokenChanged(e,t,r)}function kP(n){return lt(n).signOut()}const Tl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Tl,"1"),this.storage.removeItem(Tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=1e3,OP=10;class GE extends zE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OP):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},NP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}GE.type="LOCAL";const DP=GE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE extends zE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}KE.type="SESSION";const QE=KE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await xP(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=md("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function LP(n){Mn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function VP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function UP(){return YE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="firebaseLocalStorageDb",BP=1,Il="firebaseLocalStorage",JE="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function uc(n,e){return n.transaction([Il],e?"readwrite":"readonly").objectStore(Il)}function $P(){const n=indexedDB.deleteDatabase(XE);return new Xo(n).toPromise()}function ah(){const n=indexedDB.open(XE,BP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Il,{keyPath:JE})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Il)?e(r):(r.close(),await $P(),e(await ah()))})})}async function Mg(n,e,t){const r=uc(n,!0).put({[JE]:e,value:t});return new Xo(r).toPromise()}async function jP(n,e){const t=uc(n,!1).get(e),r=await new Xo(t).toPromise();return r===void 0?null:r.value}function Lg(n,e){const t=uc(n,!0).delete(e);return new Xo(t).toPromise()}const qP=800,WP=3;class ZE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>WP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(UP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await VP(),!this.activeServiceWorker)return;this.sender=new MP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await Mg(e,Tl,"1"),await Lg(e,Tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mg(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>jP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=uc(s,!1).getAll();return new Xo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZE.type="LOCAL";const HP=ZE;new Ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n,e){return e?tr(e):(ue(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Js(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zP(n){return WE(n.auth,new _d(n),n.bypassAuthState)}function GP(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),RP(t,new _d(n),n.bypassAuthState)}async function KP(n){const{auth:e,user:t}=n;return ue(t,e,"internal-error"),AP(t,new _d(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zP;case"linkViaPopup":case"linkViaRedirect":return KP;case"reauthViaPopup":case"reauthViaRedirect":return GP;default:an(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=new Ko(2e3,1e4);async function Vg(n,e,t){if(dn(n.app))return Promise.reject(_n(n,"operation-not-supported-in-this-environment"));const r=Is(n);MS(n,e,gd);const s=ev(r,t);return new ls(r,"signInViaPopup",e,s).executeNotNull()}class ls extends tv{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=md();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QP.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="pendingRedirect",Ka=new Map;class XP extends tv{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ka.get(this.auth._key());if(!e){try{const r=await JP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ka.set(this.auth._key(),e)}return this.bypassAuthState||Ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JP(n,e){const t=tk(e),r=ek(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function ZP(n,e){Ka.set(n._key(),e)}function ek(n){return tr(n._redirectPersistence)}function tk(n){return Ga(YP,n.config.apiKey,n.name)}async function nk(n,e,t=!1){if(dn(n.app))return Promise.reject(rr(n));const r=Is(n),s=ev(r,e),o=await new XP(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=10*60*1e3;class sk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ik(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(_n(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fg(e))}saveEventToCache(e){this.cachedEventUids.add(Fg(e)),this.lastProcessedEventTime=Date.now()}}function Fg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ik(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(n,e={}){return Kr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lk=/^https?/;async function ck(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ok(n);for(const t of e)try{if(uk(t))return}catch{}an(n,"unauthorized-domain")}function uk(n){const e=sh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!lk.test(t))return!1;if(ak.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new Ko(3e4,6e4);function Ug(){const n=Mn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dk(n){return new Promise((e,t)=>{var r,s,i;function o(){Ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ug(),t(_n(n,"network-request-failed"))},timeout:hk.get()})}if(!((s=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Mn().gapi)===null||i===void 0)&&i.load)o();else{const a=cP("iframefcb");return Mn()[a]=()=>{gapi.load?o():t(_n(n,"network-request-failed"))},$E(`${lP()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Qa=null,e})}let Qa=null;function fk(n){return Qa=Qa||dk(n),Qa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=new Ko(5e3,15e3),gk="__/auth/iframe",mk="emulator/auth/iframe",_k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ek(n){const e=n.config;ue(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ud(e,mk):`https://${n.config.authDomain}/${gk}`,r={apiKey:e.apiKey,appName:n.name,v:zr},s=yk.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${_i(r).slice(1)}`}async function vk(n){const e=await fk(n),t=Mn().gapi;return ue(t,n,"internal-error"),e.open({where:document.body,url:Ek(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_k,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(n,"network-request-failed"),a=Mn().setTimeout(()=>{i(o)},pk.get());function c(){Mn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ik=500,wk=600,Ak="_blank",Rk="http://localhost";class Bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ck(n,e,t,r=Ik,s=wk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Tk),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Pt().toLowerCase();t&&(a=xE(u)?Ak:t),OE(u)&&(e=e||Rk,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[m,T])=>`${g}${m}=${T},`,"");if(ZS(u)&&a!=="_self")return bk(e||"",a),new Bg(null);const f=window.open(e||"",a,h);ue(f,n,"popup-blocked");try{f.focus()}catch{}return new Bg(f)}function bk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk="__/auth/handler",Pk="emulator/auth/handler",kk=encodeURIComponent("fac");async function $g(n,e,t,r,s,i){ue(n.config.authDomain,n,"auth-domain-config-required"),ue(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zr,eventId:s};if(e instanceof gd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Yo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${kk}=${encodeURIComponent(c)}`:"";return`${Nk(n)}?${_i(a).slice(1)}${u}`}function Nk({config:n}){return n.emulator?ud(n,Pk):`https://${n.authDomain}/${Sk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="webStorageSupport";class Ok{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QE,this._completeRedirectFn=nk,this._overrideRedirectResult=ZP}async _openPopup(e,t,r,s){var i;ar((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $g(e,t,r,sh(),s);return Ck(e,o,md())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await $g(e,t,r,sh(),s);return LP(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await vk(e),r=new sk(e);return t.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yu,{type:yu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[yu];o!==void 0&&t(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ck(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return UE()||DE()||dd()}}const Dk=Ok;var jg="@firebase/auth",qg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lk(n){Fn(new In("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BE(n)},u=new iP(r,s,i,c);return gP(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new In("auth-internal",e=>{const t=Is(e.getProvider("auth").getImmediate());return(r=>new xk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(jg,qg,Mk(n)),Qt(jg,qg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=5*60;ob("authIdTokenMaxAge");function Fk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oP({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Fk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lk("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=new Map,Bk={activated:!1,tokenObservers:[]};function wn(n){return Uk.get(n)||Object.assign({},Bk)}const Wg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t,r,s,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new No,this.pending.promise.catch(t=>{}),await jk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new No,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function jk(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},wl=new mi("appCheck","AppCheck",qk);function rv(n){if(!wn(n).activated)throw wl.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="firebase-app-check-database",Hk=1,lh="firebase-app-check-store";let ka=null;function zk(){return ka||(ka=new Promise((n,e)=>{try{const t=indexedDB.open(Wk,Hk);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var s;e(wl.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},t.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(lh,{keyPath:"compositeKey"})}}}catch(t){e(wl.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),ka)}function Gk(n,e){return Kk(Qk(n),e)}async function Kk(n,e){const r=(await zk()).transaction(lh,"readwrite"),i=r.objectStore(lh).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;a(wl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function Qk(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=new Go("@firebase/app-check");function Hg(n,e){return gE()?Gk(n,e).catch(t=>{ch.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={error:"UNKNOWN_ERROR"};function Xk(n){return ic.encodeString(JSON.stringify(n),!1)}async function uh(n,e=!1){const t=n.app;rv(t);const r=wn(t);let s=r.token,i;if(s&&!Xi(s)&&(r.token=void 0,s=void 0),!s){const c=await r.cachedTokenPromise;c&&(Xi(c)?s=c:await Hg(t,void 0))}if(!e&&s&&Xi(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await wn(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?ch.warn(c.message):ch.error(c),i=c}let a;return s?i?Xi(s)?a={token:s.token,internalError:i}:a=Gg(i):(a={token:s.token},r.token=s,await Hg(t,s)):a=Gg(i),o&&t0(t,a),a}async function Jk(n){const e=n.app;rv(e);const{provider:t}=wn(e);{const{token:r}=await t.getToken();return{token:r}}}function Zk(n,e,t,r){const{app:s}=n,i=wn(s),o={next:t,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Xi(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),zg(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>zg(n))}function sv(n,e){const t=wn(n),r=t.tokenObservers.filter(s=>s.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function zg(n){const{app:e}=n,t=wn(e);let r=t.tokenRefresher;r||(r=e0(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function e0(n){const{app:e}=n;return new $k(async()=>{const t=wn(e);let r;if(t.token?r=await uh(n,!0):r=await uh(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=wn(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const s=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Wg.RETRIAL_MIN_WAIT,Wg.RETRIAL_MAX_WAIT)}function t0(n,e){const t=wn(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Xi(n){return n.expireTimeMillis-Date.now()>0}function Gg(n){return{token:Xk(Yk),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=wn(this.app);for(const t of e)sv(this.app,t.next);return Promise.resolve()}}function r0(n,e){return new n0(n,e)}function s0(n){return{getToken:e=>uh(n,e),getLimitedUseToken:()=>Jk(n),addTokenListener:e=>Zk(n,"INTERNAL",e),removeTokenListener:e=>sv(n.app,e)}}const i0="@firebase/app-check",o0="0.8.10",a0="app-check",Kg="app-check-internal";function l0(){Fn(new In(a0,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return r0(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Kg).initialize()})),Fn(new In(Kg,n=>{const e=n.getProvider("app-check").getImmediate();return s0(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qt(i0,o0)}l0();var c0="firebase",u0="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(c0,u0,"app");const iv=Symbol("firebaseApp");function Jo(n){return rd()&&Kt(iv,null)||TE(n)}const kn=()=>{},h0=typeof window<"u";function yd(n,e){return e.split(".").reduce((t,r)=>t&&t[r],n)}function d0(n,e,t){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],n);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,t):i[s]=t}function ws(n){return!!n&&typeof n=="object"}const f0=Object.prototype;function p0(n){return ws(n)&&Object.getPrototypeOf(n)===f0}function Ed(n){return ws(n)&&n.type==="document"}function g0(n){return ws(n)&&n.type==="collection"}function m0(n){return Ed(n)||g0(n)}function _0(n){return ws(n)&&n.type==="query"}function y0(n){return ws(n)&&"ref"in n}function E0(n){return ws(n)&&typeof n.bucket=="string"}function v0(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const T0=Symbol.for("v-scx");function I0(){return!!Kt(T0,0)}const Na=new WeakMap;function w0(n,e){if(!Na.has(n)){const t=Pw(!0);Na.set(n,t);const{unmount:r}=e;e.unmount=()=>{r.call(e),t.stop(),Na.delete(n)}}return Na.get(n)}const ov=new WeakMap;function av(n){return ov.get(Jo(n))}const Oa=new WeakMap;function lv(n){const e=Jo(n);if(!Oa.has(e)){let t;const s=[new Promise(i=>{t=i}),i=>{Oa.set(e,i),t(i.value)}];Oa.set(e,s)}return Oa.get(e)}function A0(n){const e=lv(n);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function R0(n,e){PP(e,t=>{const r=lv();n.value=t,Array.isArray(r)&&r[1](n)})}var Qg={};const Yg="@firebase/database",Xg="1.0.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cv="";function C0(n){cv=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Oo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return hr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b0(e)}}catch{}return new S0},cs=uv("localStorage"),P0=uv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Go("@firebase/database"),k0=function(){let n=1;return function(){return n++}}(),hv=function(n){const e=Rb(n),t=new vb;t.update(e);const r=t.digest();return ic.encodeByteArray(r)},Zo=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zo.apply(null,r):typeof r=="object"?e+=pt(r):e+=r,e+=" "}return e};let go=null,Jg=!0;const N0=function(n,e){K(!0,"Can't turn on custom loggers persistently."),Zs.logLevel=ge.VERBOSE,go=Zs.log.bind(Zs)},Rt=function(...n){if(Jg===!0&&(Jg=!1,go===null&&P0.get("logging_enabled")===!0&&N0()),go){const e=Zo.apply(null,n);go(e)}},ea=function(n){return function(...e){Rt(n,...e)}},hh=function(...n){const e="FIREBASE INTERNAL ERROR: "+Zo(...n);Zs.error(e)},_s=function(...n){const e=`FIREBASE FATAL ERROR: ${Zo(...n)}`;throw Zs.error(e),new Error(e)},Yt=function(...n){const e="FIREBASE WARNING: "+Zo(...n);Zs.warn(e)},O0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},D0=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},oi="[MIN_NAME]",ys="[MAX_NAME]",Ei=function(n,e){if(n===e)return 0;if(n===oi||e===ys)return-1;if(e===oi||n===ys)return 1;{const t=Zg(n),r=Zg(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},x0=function(n,e){return n===e?0:n<e?-1:1},qi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+pt(e))},vd=function(n){if(typeof n!="object"||n===null)return pt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=pt(e[r]),t+=":",t+=vd(n[e[r]]);return t+="}",t},fv=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function ln(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const pv=function(n){K(!dv(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,c;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},M0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},L0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},V0=new RegExp("^-?(0*)\\d{1,10}$"),F0=-2147483648,U0=2147483647,Zg=function(n){if(V0.test(n)){const e=Number(n);if(e>=F0&&e<=U0)return e}return null},ta=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Yt("Exception was thrown by user callback.",t),e},Math.floor(0))}},B0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="5",gv="v",mv="s",_v="r",yv="f",Ev=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vv="ls",Tv="p",dh="ac",Iv="websocket",wv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,t,r,s,i=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function W0(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Av(n,e,t){K(typeof e=="string","typeof type must == string"),K(typeof t=="object","typeof params must == object");let r;if(e===Iv)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wv)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W0(n)&&(t.ns=n.namespace);const s=[];return ln(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.counters_={}}incrementCounter(e,t=1){hr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return JC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu={},vu={};function Id(n){const e=n.toString();return Eu[e]||(Eu[e]=new H0),Eu[e]}function z0(n,e){const t=n.toString();return vu[t]||(vu[t]=e()),vu[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ta(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="start",K0="close",Q0="pLPCommand",Y0="pRTLPCB",Rv="id",Cv="pw",bv="ser",X0="cb",J0="seg",Z0="ts",eN="d",tN="dframe",Sv=1870,Pv=30,nN=Sv-Pv,rN=25e3,sN=3e4;class qs{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ea(e),this.stats_=Id(t),this.urlFn=c=>(this.appCheckToken&&(c[dh]=this.appCheckToken),Av(t,wv,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new G0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sN)),D0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wd((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===em)this.id=a,this.password=c;else if(o===K0)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[em]="t",r[bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[X0]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gv]=Td,this.transportSessionId&&(r[mv]=this.transportSessionId),this.lastSessionId&&(r[vv]=this.lastSessionId),this.applicationId&&(r[Tv]=this.applicationId),this.appCheckToken&&(r[dh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(r[_v]=yv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qs.forceAllow_=!0}static forceDisallow(){qs.forceDisallow_=!0}static isAvailable(){return qs.forceAllow_?!0:!qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!M0()&&!L0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=hE(t),s=fv(r,nN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[tN]="t",r[Rv]=e,r[Cv]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=pt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class wd{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=k0(),window[Q0+this.uniqueCallbackIdentifier]=e,window[Y0+this.uniqueCallbackIdentifier]=t,this.myIFrame=wd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Rt("frame writing exception"),a.stack&&Rt(a.stack),Rt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rv]=this.myID,e[Cv]=this.myPW,e[bv]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pv+r.length<=Sv;){const o=this.pendingSegs.shift();r=r+"&"+J0+s+"="+o.seg+"&"+Z0+s+"="+o.ts+"&"+eN+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(rN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=16384,oN=45e3;let Al=null;typeof MozWebSocket<"u"?Al=MozWebSocket:typeof WebSocket<"u"&&(Al=WebSocket);class Nn{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ea(this.connId),this.stats_=Id(t),this.connURL=Nn.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[gv]=Td,typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(o[_v]=yv),t&&(o[mv]=t),r&&(o[vv]=r),s&&(o[dh]=s),i&&(o[Tv]=i),Av(e,Iv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cs.set("previous_websocket_failure",!0);try{let r;db(),this.mySock=new Al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Al!==null&&!Nn.forceDisallow_}static previouslyFailed(){return cs.isInMemoryStorage||cs.get("previous_websocket_failure")===!0}markConnectionHealthy(){cs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Oo(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=fv(t,iN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nn.responsesRequiredToBeHealthy=2;Nn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{static get ALL_TRANSPORTS(){return[qs,Nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Nn.isAvailable();let r=t&&!Nn.previouslyFailed();if(e.webSocketOnly&&(t||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nn];else{const s=this.transports_=[];for(const i of Lo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Lo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Lo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=6e4,lN=5e3,cN=10*1024,uN=100*1024,Tu="t",tm="d",hN="s",nm="r",dN="e",rm="o",sm="a",im="n",om="p",fN="h";class pN{constructor(e,t,r,s,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ea("c:"+this.id+":"),this.transportManager_=new Lo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tu in e){const t=e[Tu];t===sm?this.upgradeIfSecondaryHealthy_():t===nm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===rm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qi("t",e),r=qi("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:om,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:im,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qi("t",e),r=qi("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qi(Tu,e);if(tm in e){const r=e[tm];if(t===fN){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===im){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hN?this.onConnectionShutdown_(r):t===nm?this.onReset_(r):t===dN?hh("Server Error: "+r):t===rm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Td!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:om,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){K(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Nv{static getInstance(){return new Rl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!id()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=32,lm=768;class qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function De(){return new qe("")}function Ae(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Mr(n){return n.pieces_.length-n.pieceNum_}function Be(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new qe(n.pieces_,e)}function Ov(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function gN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Dv(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function xv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new qe(e,0)}function ot(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof qe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new qe(t,0)}function ve(n){return n.pieceNum_>=n.pieces_.length}function nn(n,e){const t=Ae(n),r=Ae(e);if(t===null)return e;if(t===r)return nn(Be(n),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Mv(n,e){if(Mr(n)!==Mr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function fn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Mr(n)>Mr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class mN{constructor(e,t){this.errorPrefix_=t,this.parts_=Dv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ac(this.parts_[r]);Lv(this)}}function _N(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ac(e),Lv(n)}function yN(n){const e=n.parts_.pop();n.byteLength_-=ac(e),n.parts_.length>0&&(n.byteLength_-=1)}function Lv(n){if(n.byteLength_>lm)throw new Error(n.errorPrefix_+"has a key path longer than "+lm+" bytes ("+n.byteLength_+").");if(n.parts_.length>am)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+am+") or object contains a cycle "+as(n))}function as(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Nv{static getInstance(){return new Ad}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=1e3,EN=60*5*1e3,cm=30*1e3,vN=1.3,TN=3e4,IN="server_kill",um=3;class sr extends kv{constructor(e,t,r,s,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=sr.nextPersistentConnectionId_++,this.log_=ea("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=EN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ad.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(pt(i)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new No,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;sr.warnOnListenWarnings_(c,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&hr(e,"w")){const r=ii(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Eb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yb(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):hh("Unrecognized action received from server: "+pt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TN&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+sr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(f){K(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Rt("getToken() completed but was canceled"):(Rt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new pN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,m=>{Yt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(IN)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Yt(f),c())}}}interrupt(e){Rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>vd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new qe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Rt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=um&&(this.reconnectDelay_=cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Rt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=um&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+cv.replace(/\./g,"-")]=1,id()?e["framework.cordova"]=1:pE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rl.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}sr.nextPersistentConnectionId_=0;sr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Re(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Re(oi,e),s=new Re(oi,t);return this.compare(r,s)!==0}minPost(){return Re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da;class Vv extends hc{static get __EMPTY_NODE(){return Da}static set __EMPTY_NODE(e){Da=e}compare(e,t){return Ei(e.name,t.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Re.MIN}maxPost(){return new Re(ys,Da)}makePost(e,t){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,Da)}toString(){return".key"}}const ei=new Vv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa=class{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Wt=class Ji{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ji.RED,this.left=s??On.EMPTY_NODE,this.right=i??On.EMPTY_NODE}copy(e,t,r,s,i){return new Ji(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return On.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return On.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ji.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ji.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Wt.RED=!0;Wt.BLACK=!1;class wN{copy(e,t,r,s,i){return this}insert(e,t,r){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let On=class Ya{constructor(e,t=Ya.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ya(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Ya(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new xa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new xa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new xa(this.root_,null,this.comparator_,!0,e)}};On.EMPTY_NODE=new wN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(n,e){return Ei(n.name,e.name)}function Rd(n,e){return Ei(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh;function RN(n){fh=n}const Fv=function(n){return typeof n=="number"?"number:"+pv(n):"string:"+n},Uv=function(n){if(n.isLeafNode()){const e=n.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hr(e,".sv"),"Priority must be a string or number.")}else K(n===fh||n.isEmpty(),"priority of unexpected type.");K(n===fh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;class st{static set __childrenNodeConstructor(e){hm=e}static get __childrenNodeConstructor(){return hm}constructor(e,t=st.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Uv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new st(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:Ae(e)===".priority"?this.priorityNode_:st.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:st.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ae(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(K(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,st.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=pv(this.value_):e+=this.value_,this.lazyHash_=hv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===st.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof st.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=st.VALUE_TYPE_ORDER.indexOf(t),i=st.VALUE_TYPE_ORDER.indexOf(r);return K(s>=0,"Unknown leaf type: "+t),K(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}st.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bv,$v;function CN(n){Bv=n}function bN(n){$v=n}class SN extends hc{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Ei(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(ys,new st("[PRIORITY-POST]",$v))}makePost(e,t){const r=Bv(e);return new Re(t,new st("[PRIORITY-POST]",r))}toString(){return".priority"}}const St=new SN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=Math.log(2);class kN{constructor(e){const t=i=>parseInt(Math.log(i)/PN,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cl=function(n,e,t,r){n.sort(e);const s=function(c,u){const h=u-c;let f,g;if(h===0)return null;if(h===1)return f=n[c],g=t?t(f):f,new Wt(g,f.node,Wt.BLACK,null,null);{const m=parseInt(h/2,10)+c,T=s(c,m),S=s(m+1,u);return f=n[m],g=t?t(f):f,new Wt(g,f.node,Wt.BLACK,T,S)}},i=function(c){let u=null,h=null,f=n.length;const g=function(T,S){const P=f-T,M=f;f-=T;const L=s(P+1,M),D=n[P],x=t?t(D):D;m(new Wt(x,D.node,S,null,L))},m=function(T){u?(u.left=T,u=T):(h=T,u=T)};for(let T=0;T<c.count;++T){const S=c.nextBitIsOne(),P=Math.pow(2,c.count-(T+1));S?g(P,Wt.BLACK):(g(P,Wt.BLACK),g(P,Wt.RED))}return h},o=new kN(n.length),a=i(o);return new On(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Iu;const Hi={};class nr{static get Default(){return K(St,"ChildrenNode.ts has not been loaded"),Iu=Iu||new nr({".priority":Hi},{".priority":St}),Iu}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ii(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof On?t:null}hasIndex(e){return hr(this.indexSet_,e.toString())}addIndex(e,t){K(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(Re.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Cl(r,e.getCompare()):a=Hi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new nr(h,u)}addToIndexes(e,t){const r=gl(this.indexes_,(s,i)=>{const o=ii(this.indexSet_,i);if(K(o,"Missing index implementation for "+i),s===Hi)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Re.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Cl(a,o.getCompare())}else return Hi;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new Re(e.name,a))),c.insert(e,e.node)}});return new nr(r,this.indexSet_)}removeFromIndexes(e,t){const r=gl(this.indexes_,s=>{if(s===Hi)return s;{const i=t.get(e.name);return i?s.remove(new Re(e.name,i)):s}});return new nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;class ke{static get EMPTY_NODE(){return zi||(zi=new ke(new On(Rd),null,nr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Uv(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zi}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?zi:t}}getChild(e){const t=Ae(e);return t===null?this:this.getImmediateChild(t).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(K(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Re(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?zi:this.priorityNode_;return new ke(s,o,i)}}updateChild(e,t){const r=Ae(e);if(r===null)return t;{K(Ae(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Be(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(St,(o,a)=>{t[o]=a.val(e),r++,i&&ke.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fv(this.getPriority().val())+":"),this.forEachChild(St,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":hv(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Re(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Re(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Re.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===na?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(St),s=t.getIterator(St);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NN extends ke{constructor(){super(new On(Rd),ke.EMPTY_NODE,nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const na=new NN;Object.defineProperties(Re,{MIN:{value:new Re(oi,ke.EMPTY_NODE)},MAX:{value:new Re(ys,na)}});Vv.__EMPTY_NODE=ke.EMPTY_NODE;st.__childrenNodeConstructor=ke;RN(na);bN(na);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=!0;function Ct(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new st(t,Ct(e))}if(!(n instanceof Array)&&ON){const t=[];let r=!1;if(ln(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ct(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),t.push(new Re(o,c)))}}),t.length===0)return ke.EMPTY_NODE;const i=Cl(t,AN,o=>o.name,Rd);if(r){const o=Cl(t,St.getCompare());return new ke(i,Ct(e),new nr({".priority":o},{".priority":St}))}else return new ke(i,Ct(e),nr.Default)}else{let t=ke.EMPTY_NODE;return ln(n,(r,s)=>{if(hr(n,r)&&r.substring(0,1)!=="."){const i=Ct(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(Ct(e))}}CN(Ct);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN extends hc{constructor(e){super(),this.indexPath_=e,K(!ve(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Ei(e.name,t.name):i}makePost(e,t){const r=Ct(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new Re(t,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,na);return new Re(ys,e)}toString(){return Dv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN extends hc{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ei(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,t){const r=Ct(e);return new Re(t,r)}toString(){return".value"}}const MN=new xN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(n){return{type:"value",snapshotNode:n}}function VN(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function FN(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function dm(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function UN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=St}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===St}copy(){const e=new Cd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fm(n){const e={};if(n.isDefault())return e;let t;if(n.index_===St?t="$priority":n.index_===MN?t="$value":n.index_===ei?t="$key":(K(n.index_ instanceof DN,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=pt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=pt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+pt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=pt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+pt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function pm(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==St&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends kv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ea("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=bl.getListenId_(e,r),a={};this.listens_[o]=a;const c=fm(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),ii(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",s(g,null)}})}unlisten(e,t){const r=bl.getListenId_(e,t);delete this.listens_[r]}get(e){const t=fm(e._queryParams),r=e._path.toString(),s=new No;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_i(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Oo(a.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return{value:null,children:new Map}}function jv(n,e,t){if(ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ae(e);n.children.has(r)||n.children.set(r,Sl());const s=n.children.get(r);e=Be(e),jv(s,e,t)}}function ph(n,e,t){n.value!==null?t(e,n.value):$N(n,(r,s)=>{const i=new qe(e.toString()+"/"+r);ph(s,i,t)})}function $N(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ln(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=10*1e3,qN=30*1e3,WN=5*60*1e3;class HN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jN(e);const r=gm+(qN-gm)*Math.random();mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;ln(e,(s,i)=>{i>0&&hr(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*WN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dn||(Dn={}));function qv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Dn.ACK_USER_WRITE,this.source=qv()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new qe(e));return new Pl(De(),t,this.revert)}}else return K(Ae(this.path)===e,"operationForChild called for unrelated child."),new Pl(Be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Dn.OVERWRITE}operationForChild(e){return ve(this.path)?new Es(this.source,De(),this.snap.getImmediateChild(e)):new Es(this.source,Be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Dn.MERGE}operationForChild(e){if(ve(this.path)){const t=this.children.subtree(new qe(e));return t.isEmpty()?null:t.value?new Es(this.source,De(),t.value):new Vo(this.source,De(),t)}else return K(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vo(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function zN(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(UN(o.childName,o.snapshotNode))}),Gi(n,s,"child_removed",e,r,t),Gi(n,s,"child_added",e,r,t),Gi(n,s,"child_moved",i,r,t),Gi(n,s,"child_changed",e,r,t),Gi(n,s,"value",e,r,t),s}function Gi(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,c)=>KN(n,a,c)),o.forEach(a=>{const c=GN(n,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function GN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function KN(n,e,t){if(e.childName==null||t.childName==null)throw gi("Should only compare child_ events.");const r=new Re(e.childName,e.snapshotNode),s=new Re(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n,e){return{eventCache:n,serverCache:e}}function _o(n,e,t,r){return zv(new bd(e,t,r),n.serverCache)}function Gv(n,e,t,r){return zv(n.eventCache,new bd(e,t,r))}function gh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function vs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu;const QN=()=>(wu||(wu=new On(x0)),wu);class Ue{static fromObject(e){let t=new Ue(null);return ln(e,(r,s)=>{t=t.set(new qe(r),s)}),t}constructor(e,t=QN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:De(),value:this.value};if(ve(e))return null;{const r=Ae(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Be(e),t);return i!=null?{path:ot(new qe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const t=Ae(e),r=this.children.get(t);return r!==null?r.subtree(Be(e)):new Ue(null)}}set(e,t){if(ve(e))return new Ue(t,this.children);{const r=Ae(e),i=(this.children.get(r)||new Ue(null)).set(Be(e),t),o=this.children.insert(r,i);return new Ue(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const t=Ae(e),r=this.children.get(t);if(r){const s=r.remove(Be(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new Ue(null):new Ue(this.value,i)}else return this}}get(e){if(ve(e))return this.value;{const t=Ae(e),r=this.children.get(t);return r?r.get(Be(e)):null}}setTree(e,t){if(ve(e))return t;{const r=Ae(e),i=(this.children.get(r)||new Ue(null)).setTree(Be(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ue(this.value,o)}}fold(e){return this.fold_(De(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ot(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,De(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(ve(e))return null;{const i=Ae(e),o=this.children.get(i);return o?o.findOnPath_(Be(e),ot(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,De(),t)}foreachOnPath_(e,t,r){if(ve(e))return this;{this.value&&r(t,this.value);const s=Ae(e),i=this.children.get(s);return i?i.foreachOnPath_(Be(e),ot(t,s),r):new Ue(null)}}foreach(e){this.foreach_(De(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(ot(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.writeTree_=e}static empty(){return new yn(new Ue(null))}}function yo(n,e,t){if(ve(e))return new yn(new Ue(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=nn(s,e);return i=i.updateChild(o,t),new yn(n.writeTree_.set(s,i))}else{const s=new Ue(t),i=n.writeTree_.setTree(e,s);return new yn(i)}}}function mm(n,e,t){let r=n;return ln(t,(s,i)=>{r=yo(r,ot(e,s),i)}),r}function _m(n,e){if(ve(e))return yn.empty();{const t=n.writeTree_.setTree(e,new Ue(null));return new yn(t)}}function mh(n,e){return As(n,e)!=null}function As(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(nn(t.path,e)):null}function ym(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(St,(r,s)=>{e.push(new Re(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Re(r,s.value))}),e}function Or(n,e){if(ve(e))return n;{const t=As(n,e);return t!=null?new yn(new Ue(t)):new yn(n.writeTree_.subtree(e))}}function _h(n){return n.writeTree_.isEmpty()}function ai(n,e){return Kv(De(),n.writeTree_,e)}function Kv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(K(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=Kv(ot(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(ot(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(n,e){return eT(e,n)}function YN(n,e,t,r,s){K(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=yo(n.visibleWrites,e,t)),n.lastWriteId=r}function XN(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function JN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);K(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ZN(a,r.path)?s=!1:fn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return eO(n),!0;if(r.snap)n.visibleWrites=_m(n.visibleWrites,r.path);else{const a=r.children;ln(a,c=>{n.visibleWrites=_m(n.visibleWrites,ot(r.path,c))})}return!0}else return!1}function ZN(n,e){if(n.snap)return fn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&fn(ot(n.path,t),e))return!0;return!1}function eO(n){n.visibleWrites=Yv(n.allWrites,tO,De()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function tO(n){return n.visible}function Yv(n,e,t){let r=yn.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)fn(t,o)?(a=nn(t,o),r=yo(r,a,i.snap)):fn(o,t)&&(a=nn(o,t),r=yo(r,De(),i.snap.getChild(a)));else if(i.children){if(fn(t,o))a=nn(t,o),r=mm(r,a,i.children);else if(fn(o,t))if(a=nn(o,t),ve(a))r=mm(r,De(),i.children);else{const c=ii(i.children,Ae(a));if(c){const u=c.getChild(Be(a));r=yo(r,De(),u)}}}else throw gi("WriteRecord should have .snap or .children")}}return r}function Xv(n,e,t,r,s){if(!r&&!s){const i=As(n.visibleWrites,e);if(i!=null)return i;{const o=Or(n.visibleWrites,e);if(_h(o))return t;if(t==null&&!mh(o,De()))return null;{const a=t||ke.EMPTY_NODE;return ai(o,a)}}}else{const i=Or(n.visibleWrites,e);if(!s&&_h(i))return t;if(!s&&t==null&&!mh(i,De()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(fn(u.path,e)||fn(e,u.path))},a=Yv(n.allWrites,o,e),c=t||ke.EMPTY_NODE;return ai(a,c)}}}function nO(n,e,t){let r=ke.EMPTY_NODE;const s=As(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(St,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Or(n.visibleWrites,e);return t.forEachChild(St,(o,a)=>{const c=ai(Or(i,new qe(o)),a);r=r.updateImmediateChild(o,c)}),ym(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Or(n.visibleWrites,e);return ym(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function rO(n,e,t,r,s){K(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ot(e,t);if(mh(n.visibleWrites,i))return null;{const o=Or(n.visibleWrites,i);return _h(o)?s.getChild(t):ai(o,s.getChild(t))}}function sO(n,e,t,r){const s=ot(e,t),i=As(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Or(n.visibleWrites,s);return ai(o,r.getNode().getImmediateChild(t))}else return null}function iO(n,e){return As(n.visibleWrites,e)}function oO(n,e,t,r,s,i,o){let a;const c=Or(n.visibleWrites,e),u=As(c,De());if(u!=null)a=u;else if(t!=null)a=ai(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),g=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=g.getNext();for(;m&&h.length<s;)f(m,r)!==0&&h.push(m),m=g.getNext();return h}else return[]}function aO(){return{visibleWrites:yn.empty(),allWrites:[],lastWriteId:-1}}function yh(n,e,t,r){return Xv(n.writeTree,n.treePath,e,t,r)}function Jv(n,e){return nO(n.writeTree,n.treePath,e)}function Em(n,e,t,r){return rO(n.writeTree,n.treePath,e,t,r)}function kl(n,e){return iO(n.writeTree,ot(n.treePath,e))}function lO(n,e,t,r,s,i){return oO(n.writeTree,n.treePath,e,t,r,s,i)}function Sd(n,e,t){return sO(n.writeTree,n.treePath,e,t)}function Zv(n,e){return eT(ot(n.treePath,e),n.writeTree)}function eT(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;K(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),K(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,dm(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,FN(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,VN(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,dm(r,e.snapshotNode,s.oldSnap));else throw gi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const tT=new uO;class Pd{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new bd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sd(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vs(this.viewCache_),i=lO(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}function hO(n,e){K(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function dO(n,e,t,r,s){const i=new cO;let o,a;if(t.type===Dn.OVERWRITE){const u=t;u.source.fromUser?o=Eh(n,e,u.path,u.snap,r,s,i):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ve(u.path),o=Nl(n,e,u.path,u.snap,r,s,a,i))}else if(t.type===Dn.MERGE){const u=t;u.source.fromUser?o=pO(n,e,u.path,u.children,r,s,i):(K(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=vh(n,e,u.path,u.children,r,s,a,i))}else if(t.type===Dn.ACK_USER_WRITE){const u=t;u.revert?o=_O(n,e,u.path,r,s,i):o=gO(n,e,u.path,u.affectedTree,r,s,i)}else if(t.type===Dn.LISTEN_COMPLETE)o=mO(n,e,t.path,r,i);else throw gi("Unknown operation type: "+t.type);const c=i.getChanges();return fO(e,o,c),{viewCache:o,changes:c}}function fO(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=gh(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(LN(gh(e)))}}function nT(n,e,t,r,s,i){const o=e.eventCache;if(kl(r,t)!=null)return e;{let a,c;if(ve(t))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=vs(e),h=u instanceof ke?u:ke.EMPTY_NODE,f=Jv(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=yh(r,vs(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ae(t);if(u===".priority"){K(Mr(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=Em(r,t,h,c);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=Be(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=Em(r,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(h,g):f=o.getNode().getImmediateChild(u)}else f=Sd(r,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return _o(e,a,o.isFullyInitialized()||ve(t),n.filter.filtersNodes())}}function Nl(n,e,t,r,s,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(ve(t))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,r);u=h.updateFullNode(c.getNode(),m,null)}else{const m=Ae(t);if(!c.isCompleteForPath(t)&&Mr(t)>1)return e;const T=Be(t),P=c.getNode().getImmediateChild(m).updateChild(T,r);m===".priority"?u=h.updatePriority(c.getNode(),P):u=h.updateChild(c.getNode(),m,P,T,tT,null)}const f=Gv(e,u,c.isFullyInitialized()||ve(t),h.filtersNodes()),g=new Pd(s,f,i);return nT(n,f,t,s,g,a)}function Eh(n,e,t,r,s,i,o){const a=e.eventCache;let c,u;const h=new Pd(s,e,i);if(ve(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),c=_o(e,u,!0,n.filter.filtersNodes());else{const f=Ae(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),c=_o(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Be(t),m=a.getNode().getImmediateChild(f);let T;if(ve(g))T=r;else{const S=h.getCompleteChild(f);S!=null?Ov(g)===".priority"&&S.getChild(xv(g)).isEmpty()?T=S:T=S.updateChild(g,r):T=ke.EMPTY_NODE}if(m.equals(T))c=e;else{const S=n.filter.updateChild(a.getNode(),f,T,g,h,o);c=_o(e,S,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function vm(n,e){return n.eventCache.isCompleteForChild(e)}function pO(n,e,t,r,s,i,o){let a=e;return r.foreach((c,u)=>{const h=ot(t,c);vm(e,Ae(h))&&(a=Eh(n,a,h,u,s,i,o))}),r.foreach((c,u)=>{const h=ot(t,c);vm(e,Ae(h))||(a=Eh(n,a,h,u,s,i,o))}),a}function Tm(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function vh(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ve(t)?u=r:u=new Ue(null).setTree(t,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),T=Tm(n,m,g);c=Nl(n,c,new qe(f),T,s,i,o,a)}}),u.children.inorderTraversal((f,g)=>{const m=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!m){const T=e.serverCache.getNode().getImmediateChild(f),S=Tm(n,T,g);c=Nl(n,c,new qe(f),S,s,i,o,a)}}),c}function gO(n,e,t,r,s,i,o){if(kl(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(ve(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Nl(n,e,t,c.getNode().getChild(t),s,i,a,o);if(ve(t)){let u=new Ue(null);return c.getNode().forEachChild(ei,(h,f)=>{u=u.set(new qe(h),f)}),vh(n,e,t,u,s,i,a,o)}else return e}else{let u=new Ue(null);return r.foreach((h,f)=>{const g=ot(t,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),vh(n,e,t,u,s,i,a,o)}}function mO(n,e,t,r,s){const i=e.serverCache,o=Gv(e,i.getNode(),i.isFullyInitialized()||ve(t),i.isFiltered());return nT(n,o,t,r,tT,s)}function _O(n,e,t,r,s,i){let o;if(kl(r,t)!=null)return e;{const a=new Pd(r,e,s),c=e.eventCache.getNode();let u;if(ve(t)||Ae(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=yh(r,vs(e));else{const f=e.serverCache.getNode();K(f instanceof ke,"serverChildren would be complete if leaf node"),h=Jv(r,f)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=Ae(t);let f=Sd(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=n.filter.updateChild(c,h,f,Be(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,ke.EMPTY_NODE,Be(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=yh(r,vs(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||kl(r,De())!=null,_o(e,u,o,n.filter.filtersNodes())}}function yO(n,e){const t=vs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ve(e)&&!t.getImmediateChild(Ae(e)).isEmpty())?t.getChild(e):null}function Im(n,e,t,r){e.type===Dn.MERGE&&e.source.queryId!==null&&(K(vs(n.viewCache_),"We should always have a full cache before handling merges"),K(gh(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=dO(n.processor_,s,e,t,r);return hO(n.processor_,i.viewCache),K(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,EO(n,i.changes,i.viewCache.eventCache.getNode())}function EO(n,e,t,r){const s=n.eventRegistrations_;return zN(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wm;function vO(n){K(!wm,"__referenceConstructor has already been defined"),wm=n}function kd(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return K(i!=null,"SyncTree gave us an op for an invalid query."),Im(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(Im(o,e,t,r));return i}}function Nd(n,e){let t=null;for(const r of n.views.values())t=t||yO(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Am;function TO(n){K(!Am,"__referenceConstructor has already been defined"),Am=n}class Rm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=aO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function IO(n,e,t,r,s){return YN(n.pendingWriteTree_,e,t,r,s),s?fc(n,new Es(qv(),e,t)):[]}function Ws(n,e,t=!1){const r=XN(n.pendingWriteTree_,e);if(JN(n.pendingWriteTree_,e)){let i=new Ue(null);return r.snap!=null?i=i.set(De(),!0):ln(r.children,o=>{i=i.set(new qe(o),!0)}),fc(n,new Pl(r.path,i,t))}else return[]}function dc(n,e,t){return fc(n,new Es(Wv(),e,t))}function wO(n,e,t){const r=Ue.fromObject(t);return fc(n,new Vo(Wv(),e,r))}function AO(n,e,t,r){const s=oT(n,r);if(s!=null){const i=aT(s),o=i.path,a=i.queryId,c=nn(o,e),u=new Es(Hv(a),c,t);return lT(n,o,u)}else return[]}function RO(n,e,t,r){const s=oT(n,r);if(s){const i=aT(s),o=i.path,a=i.queryId,c=nn(o,e),u=Ue.fromObject(t),h=new Vo(Hv(a),c,u);return lT(n,o,h)}else return[]}function rT(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=nn(o,e),u=Nd(a,c);if(u)return u});return Xv(s,e,i,t,!0)}function fc(n,e){return sT(e,n.syncPointTree_,null,Qv(n.pendingWriteTree_,De()))}function sT(n,e,t,r){if(ve(n.path))return iT(n,e,t,r);{const s=e.get(De());t==null&&s!=null&&(t=Nd(s,De()));let i=[];const o=Ae(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=Zv(r,o);i=i.concat(sT(a,c,u,h))}return s&&(i=i.concat(kd(s,n,r,t))),i}}function iT(n,e,t,r){const s=e.get(De());t==null&&s!=null&&(t=Nd(s,De()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=Zv(r,o),h=n.operationForChild(o);h&&(i=i.concat(iT(h,a,c,u)))}),s&&(i=i.concat(kd(s,n,r,t))),i}function oT(n,e){return n.tagToQueryMap.get(e)}function aT(n){const e=n.indexOf("$");return K(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new qe(n.substr(0,e))}}function lT(n,e,t){const r=n.syncPointTree_.get(e);K(r,"Missing sync point for query tag that we're tracking");const s=Qv(n.pendingWriteTree_,e);return kd(r,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Od(t)}node(){return this.node_}}class Dd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ot(this.path_,e);return new Dd(this.syncTree_,t)}node(){return rT(this.syncTree_,this.path_)}}const CO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Cm=function(n,e,t){if(!n||typeof n!="object")return n;if(K(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return bO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return SO(n[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},bO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:K(!1,"Unexpected server value: "+n)}},SO=function(n,e,t){n.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&K(!1,"Unexpected increment value: "+r);const s=e.node();if(K(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},PO=function(n,e,t,r){return xd(e,new Dd(t,n),r)},kO=function(n,e,t){return xd(n,new Od(e),t)};function xd(n,e,t){const r=n.getPriority().val(),s=Cm(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=Cm(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new st(a,Ct(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new st(s))),o.forEachChild(St,(a,c)=>{const u=xd(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Ld(n,e){let t=e instanceof qe?e:new qe(e),r=n,s=Ae(t);for(;s!==null;){const i=ii(r.node.children,s)||{children:{},childCount:0};r=new Md(s,r,i),t=Be(t),s=Ae(t)}return r}function vi(n){return n.node.value}function cT(n,e){n.node.value=e,Th(n)}function uT(n){return n.node.childCount>0}function NO(n){return vi(n)===void 0&&!uT(n)}function pc(n,e){ln(n.node.children,(t,r)=>{e(new Md(t,n,r))})}function hT(n,e,t,r){t&&e(n),pc(n,s=>{hT(s,e,!0)})}function OO(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ra(n){return new qe(n.parent===null?n.name:ra(n.parent)+"/"+n.name)}function Th(n){n.parent!==null&&DO(n.parent,n.name,n)}function DO(n,e,t){const r=NO(t),s=hr(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Th(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Th(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=/[\[\].#$\/\u0000-\u001F\u007F]/,MO=/[\[\].#$\u0000-\u001F\u007F]/,Au=10*1024*1024,dT=function(n){return typeof n=="string"&&n.length!==0&&!xO.test(n)},LO=function(n){return typeof n=="string"&&n.length!==0&&!MO.test(n)},VO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),LO(n)},fT=function(n,e,t){const r=t instanceof qe?new mN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+as(r));if(typeof e=="function")throw new Error(n+"contains a function "+as(r)+" with contents = "+e.toString());if(dv(e))throw new Error(n+"contains "+e.toString()+" "+as(r));if(typeof e=="string"&&e.length>Au/3&&ac(e)>Au)throw new Error(n+"contains a string greater than "+Au+" utf8 bytes "+as(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ln(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!dT(o)))throw new Error(n+" contains an invalid key ("+o+") "+as(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_N(r,o),fT(n,a,r),yN(r)}),s&&i)throw new Error(n+' contains ".value" child '+as(r)+" in addition to actual children.")}},FO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VO(t))throw new Error(Ab(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function BO(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!Mv(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function Rs(n,e,t){BO(n,t),$O(n,r=>fn(r,e)||fn(e,r))}function $O(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(jO(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function jO(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();go&&Rt("event: "+t.toString()),ta(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO="repo_interrupt",WO=25;class HO{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sl(),this.transactionQueueTree_=new Md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function zO(n,e,t){if(n.stats_=Id(n.repoInfo_),n.forceRestClient_||B0())n.server_=new bl(n.repoInfo_,(r,s,i,o)=>{bm(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Sm(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new sr(n.repoInfo_,e,(r,s,i,o)=>{bm(n,r,s,i,o)},r=>{Sm(n,r)},r=>{KO(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=z0(n.repoInfo_,()=>new HN(n.stats_,n.server_)),n.infoData_=new BN,n.infoSyncTree_=new Rm({startListening:(r,s,i,o)=>{let a=[];const c=n.infoData_.getNode(r._path);return c.isEmpty()||(a=dc(n.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Vd(n,"connected",!1),n.serverSyncTree_=new Rm({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,c)=>{const u=o(a,c);Rs(n.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function GO(n){const t=n.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function pT(n){return CO({timestamp:GO(n)})}function bm(n,e,t,r,s){n.dataUpdateCount++;const i=new qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const c=gl(t,u=>Ct(u));o=RO(n.serverSyncTree_,i,c,s)}else{const c=Ct(t);o=AO(n.serverSyncTree_,i,c,s)}else if(r){const c=gl(t,u=>Ct(u));o=wO(n.serverSyncTree_,i,c)}else{const c=Ct(t);o=dc(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Ud(n,i)),Rs(n.eventQueue_,a,o)}function Sm(n,e){Vd(n,"connected",e),e===!1&&YO(n)}function KO(n,e){ln(e,(t,r)=>{Vd(n,t,r)})}function Vd(n,e,t){const r=new qe("/.info/"+e),s=Ct(t);n.infoData_.updateSnapshot(r,s);const i=dc(n.infoSyncTree_,r,s);Rs(n.eventQueue_,r,i)}function QO(n){return n.nextWriteId_++}function YO(n){gT(n,"onDisconnectEvents");const e=pT(n),t=Sl();ph(n.onDisconnect_,De(),(s,i)=>{const o=PO(s,i,n.serverSyncTree_,e);jv(t,s,o)});let r=[];ph(t,De(),(s,i)=>{r=r.concat(dc(n.serverSyncTree_,s,i));const o=eD(n,s);Ud(n,o)}),n.onDisconnect_=Sl(),Rs(n.eventQueue_,De(),r)}function XO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(qO)}function gT(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Rt(t,...e)}function mT(n,e,t){return rT(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function Fd(n,e=n.transactionQueueTree_){if(e||gc(n,e),vi(e)){const t=yT(n,e);K(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&JO(n,ra(e),t)}else uT(e)&&pc(e,t=>{Fd(n,t)})}function JO(n,e,t){const r=t.map(u=>u.currentWriteId),s=mT(n,e,r);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const h=t[u];K(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=nn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{gT(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,h=h.concat(Ws(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();gc(n,Ld(n.transactionQueueTree_,e)),Fd(n,n.transactionQueueTree_),Rs(n.eventQueue_,e,h);for(let g=0;g<f.length;g++)ta(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Yt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Ud(n,e)}},o)}function Ud(n,e){const t=_T(n,e),r=ra(t),s=yT(n,t);return ZO(n,s,r),r}function ZO(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=nn(t,c.path);let h=!1,f;if(K(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,s=s.concat(Ws(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=WO)h=!0,f="maxretry",s=s.concat(Ws(n.serverSyncTree_,c.currentWriteId,!0));else{const g=mT(n,c.path,o);c.currentInputSnapshot=g;const m=e[a].update(g.val());if(m!==void 0){fT("transaction failed: Data returned ",m,c.path);let T=Ct(m);typeof m=="object"&&m!=null&&hr(m,".priority")||(T=T.updatePriority(g.getPriority()));const P=c.currentWriteId,M=pT(n),L=kO(T,g,M);c.currentOutputSnapshotRaw=T,c.currentOutputSnapshotResolved=L,c.currentWriteId=QO(n),o.splice(o.indexOf(P),1),s=s.concat(IO(n.serverSyncTree_,c.path,L,c.currentWriteId,c.applyLocally)),s=s.concat(Ws(n.serverSyncTree_,P,!0))}else h=!0,f="nodata",s=s.concat(Ws(n.serverSyncTree_,c.currentWriteId,!0))}Rs(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}gc(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ta(r[a]);Fd(n,n.transactionQueueTree_)}function _T(n,e){let t,r=n.transactionQueueTree_;for(t=Ae(e);t!==null&&vi(r)===void 0;)r=Ld(r,t),e=Be(e),t=Ae(e);return r}function yT(n,e){const t=[];return ET(n,e,t),t.sort((r,s)=>r.order-s.order),t}function ET(n,e,t){const r=vi(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);pc(e,s=>{ET(n,s,t)})}function gc(n,e){const t=vi(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,cT(e,t.length>0?t:void 0)}pc(e,r=>{gc(n,r)})}function eD(n,e){const t=ra(_T(n,e)),r=Ld(n.transactionQueueTree_,e);return OO(r,s=>{Ru(n,s)}),Ru(n,r),hT(r,s=>{Ru(n,s)}),t}function Ru(n,e){const t=vi(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(K(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(K(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ws(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?cT(e,void 0):t.length=i+1,Rs(n.eventQueue_,ra(e),s);for(let o=0;o<r.length;o++)ta(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function nD(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Pm=function(n,e){const t=rD(n),r=t.namespace;t.domain==="firebase.com"&&_s(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&_s("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||O0();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new q0(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new qe(t.pathString)}},rD=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(s=tD(n.substring(h,f)));const g=nD(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),t=e.substring(T+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:c,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return ve(this._path)?null:Ov(this._path)}get ref(){return new Ti(this._repo,this._path)}get _queryIdentifier(){const e=pm(this._queryParams),t=vd(e);return t==="{}"?"default":t}get _queryObject(){return pm(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof Bd))return!1;const t=this._repo===e._repo,r=Mv(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+gN(this._path)}}class Ti extends Bd{constructor(e,t){super(e,t,new Cd,!1)}get parent(){const e=xv(this._path);return e===null?null:new Ti(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}vO(Ti);TO(Ti);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="FIREBASE_DATABASE_EMULATOR_HOST",Ih={};let iD=!1;function oD(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||_s("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Rt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Pm(i,s),a=o.repoInfo,c;typeof process<"u"&&Qg&&(c=Qg[sD]),c?(i=`http://${c}?ns=${a.namespace}`,o=Pm(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new j0(n.name,n.options,e);FO("Invalid Firebase Database URL",o),ve(o.path)||_s("Database URL must point to the root of a Firebase Database (not including a child path).");const h=lD(a,n,u,new $0(n.name,t));return new cD(h,n)}function aD(n,e){const t=Ih[e];(!t||t[n.key]!==n)&&_s(`Database ${e}(${n.repoInfo_}) has already been deleted.`),XO(n),delete t[n.key]}function lD(n,e,t,r){let s=Ih[e.name];s||(s={},Ih[e.name]=s);let i=s[n.toURLString()];return i&&_s("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new HO(n,iD,t,r),s[n.toURLString()]=i,i}class cD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(zO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ti(this._repo,De())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_s("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(n){C0(zr),Fn(new In("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return oD(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),Qt(Yg,Xg,n),Qt(Yg,Xg,"esm2017")}sr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};sr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};uD();var km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,vT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function E(){}E.prototype=y.prototype,C.D=y.prototype,C.prototype=new E,C.prototype.constructor=C,C.C=function(R,b,A){for(var v=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)v[Oe-2]=arguments[Oe];return y.prototype[b].apply(R,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,y,E){E||(E=0);var R=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)R[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)R[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=C.g[0],E=C.g[1],b=C.g[2];var A=C.g[3],v=y+(A^E&(b^A))+R[0]+3614090360&4294967295;y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[1]+3905402710&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[2]+606105819&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[3]+3250441966&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(A^E&(b^A))+R[4]+4118548399&4294967295,y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[5]+1200080426&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[6]+2821735955&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[7]+4249261313&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(A^E&(b^A))+R[8]+1770035416&4294967295,y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[9]+2336552879&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[10]+4294925233&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[11]+2304563134&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(A^E&(b^A))+R[12]+1804603682&4294967295,y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[13]+4254626195&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[14]+2792965006&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[15]+1236535329&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(b^A&(E^b))+R[1]+4129170786&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[6]+3225465664&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[11]+643717713&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[0]+3921069994&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^A&(E^b))+R[5]+3593408605&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[10]+38016083&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[15]+3634488961&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[4]+3889429448&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^A&(E^b))+R[9]+568446438&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[14]+3275163606&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[3]+4107603335&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[8]+1163531501&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^A&(E^b))+R[13]+2850285829&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[2]+4243563512&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[7]+1735328473&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[12]+2368359562&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(E^b^A)+R[5]+4294588738&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[8]+2272392833&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[11]+1839030562&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[14]+4259657740&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^A)+R[1]+2763975236&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[4]+1272893353&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[7]+4139469664&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[10]+3200236656&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^A)+R[13]+681279174&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[0]+3936430074&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[3]+3572445317&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[6]+76029189&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^A)+R[9]+3654602809&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[12]+3873151461&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[15]+530742520&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[2]+3299628645&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(b^(E|~A))+R[0]+4096336452&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[7]+1126891415&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[14]+2878612391&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[5]+4237533241&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~A))+R[12]+1700485571&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[3]+2399980690&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[10]+4293915773&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[1]+2240044497&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~A))+R[8]+1873313359&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[15]+4264355552&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[6]+2734768916&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[13]+1309151649&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~A))+R[4]+4149444226&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[11]+3174756917&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[2]+718787259&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,C.g[2]=C.g[2]+b&4294967295,C.g[3]=C.g[3]+A&4294967295}r.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var E=y-this.blockSize,R=this.B,b=this.h,A=0;A<y;){if(b==0)for(;A<=E;)s(this,C,A),A+=this.blockSize;if(typeof C=="string"){for(;A<y;)if(R[b++]=C.charCodeAt(A++),b==this.blockSize){s(this,R),b=0;break}}else for(;A<y;)if(R[b++]=C[A++],b==this.blockSize){s(this,R),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var E=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=E&255,E/=256;for(this.u(C),C=Array(16),y=E=0;4>y;++y)for(var R=0;32>R;R+=8)C[E++]=this.g[y]>>>R&255;return C};function i(C,y){var E=a;return Object.prototype.hasOwnProperty.call(E,C)?E[C]:E[C]=y(C)}function o(C,y){this.h=y;for(var E=[],R=!0,b=C.length-1;0<=b;b--){var A=C[b]|0;R&&A==y||(E[b]=A,R=!1)}this.g=E}var a={};function c(C){return-128<=C&&128>C?i(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return P(u(-C));for(var y=[],E=1,R=0;C>=E;R++)y[R]=C/E|0,E*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return P(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),R=f,b=0;b<C.length;b+=8){var A=Math.min(8,C.length-b),v=parseInt(C.substring(b,b+A),y);8>A?(A=u(Math.pow(y,A)),R=R.j(A).add(u(v))):(R=R.j(E),R=R.add(u(v)))}return R}var f=c(0),g=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(S(this))return-P(this).m();for(var C=0,y=1,E=0;E<this.g.length;E++){var R=this.i(E);C+=(0<=R?R:4294967296+R)*y,y*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(T(this))return"0";if(S(this))return"-"+P(this).toString(C);for(var y=u(Math.pow(C,6)),E=this,R="";;){var b=x(E,y).g;E=M(E,b.j(y));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(C);if(E=b,T(E))return A+R;for(;6>A.length;)A="0"+A;R=A+R}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function T(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function S(C){return C.h==-1}n.l=function(C){return C=M(this,C),S(C)?-1:T(C)?0:1};function P(C){for(var y=C.g.length,E=[],R=0;R<y;R++)E[R]=~C.g[R];return new o(E,~C.h).add(g)}n.abs=function(){return S(this)?P(this):this},n.add=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0,b=0;b<=y;b++){var A=R+(this.i(b)&65535)+(C.i(b)&65535),v=(A>>>16)+(this.i(b)>>>16)+(C.i(b)>>>16);R=v>>>16,A&=65535,v&=65535,E[b]=v<<16|A}return new o(E,E[E.length-1]&-2147483648?-1:0)};function M(C,y){return C.add(P(y))}n.j=function(C){if(T(this)||T(C))return f;if(S(this))return S(C)?P(this).j(P(C)):P(P(this).j(C));if(S(C))return P(this.j(P(C)));if(0>this.l(m)&&0>C.l(m))return u(this.m()*C.m());for(var y=this.g.length+C.g.length,E=[],R=0;R<2*y;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<C.g.length;b++){var A=this.i(R)>>>16,v=this.i(R)&65535,Oe=C.i(b)>>>16,tt=C.i(b)&65535;E[2*R+2*b]+=v*tt,L(E,2*R+2*b),E[2*R+2*b+1]+=A*tt,L(E,2*R+2*b+1),E[2*R+2*b+1]+=v*Oe,L(E,2*R+2*b+1),E[2*R+2*b+2]+=A*Oe,L(E,2*R+2*b+2)}for(R=0;R<y;R++)E[R]=E[2*R+1]<<16|E[2*R];for(R=y;R<2*y;R++)E[R]=0;return new o(E,0)};function L(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function D(C,y){this.g=C,this.h=y}function x(C,y){if(T(y))throw Error("division by zero");if(T(C))return new D(f,f);if(S(C))return y=x(P(C),y),new D(P(y.g),P(y.h));if(S(y))return y=x(C,P(y)),new D(P(y.g),y.h);if(30<C.g.length){if(S(C)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,R=y;0>=R.l(C);)E=ee(E),R=ee(R);var b=te(E,1),A=te(R,1);for(R=te(R,2),E=te(E,2);!T(R);){var v=A.add(R);0>=v.l(C)&&(b=b.add(E),A=v),R=te(R,1),E=te(E,1)}return y=M(C,b.j(y)),new D(b,y)}for(b=f;0<=C.l(y);){for(E=Math.max(1,Math.floor(C.m()/y.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),A=u(E),v=A.j(y);S(v)||0<v.l(C);)E-=R,A=u(E),v=A.j(y);T(A)&&(A=g),b=b.add(A),C=M(C,v)}return new D(b,C)}n.A=function(C){return x(this,C).h},n.and=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0;R<y;R++)E[R]=this.i(R)&C.i(R);return new o(E,this.h&C.h)},n.or=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0;R<y;R++)E[R]=this.i(R)|C.i(R);return new o(E,this.h|C.h)},n.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0;R<y;R++)E[R]=this.i(R)^C.i(R);return new o(E,this.h^C.h)};function ee(C){for(var y=C.g.length+1,E=[],R=0;R<y;R++)E[R]=C.i(R)<<1|C.i(R-1)>>>31;return new o(E,C.h)}function te(C,y){var E=y>>5;y%=32;for(var R=C.g.length-E,b=[],A=0;A<R;A++)b[A]=0<y?C.i(A+E)>>>y|C.i(A+E+1)<<32-y:C.i(A+E);return new o(b,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ds=o}).apply(typeof km<"u"?km:typeof self<"u"?self:typeof window<"u"?window:{});var Ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TT,Zi,IT,Xa,wh,wT,AT,RT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ma=="object"&&Ma];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function m(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function T(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,O){for(var z=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)z[xe-2]=arguments[xe];return d.prototype[N].apply(_,z)}}function S(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function P(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const N=l.length||0,O=_.length||0;l.length=N+O;for(let z=0;z<O;z++)l[N+z]=_[z]}else l.push(_)}}class M{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function L(l){return/^[\s\xa0]*$/.test(l)}function D(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var ee=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function te(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function C(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let O=0;O<E.length;O++)p=E[O],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function b(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function A(l){a.setTimeout(()=>{throw l},0)}function v(){var l=$t;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Oe{constructor(){this.h=this.g=null}add(d,p){const _=tt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var tt=new M(()=>new We,l=>l.reset());class We{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,me=!1,$t=new Oe,cn=()=>{const l=a.Promise.resolve(void 0);Te=()=>{l.then(Xt)}};var Xt=()=>{for(var l;l=v();){try{l.h.call(l.g)}catch(p){A(p)}var d=tt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}me=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var dr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Rn(l,d){if(ze.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(ee){e:{try{x(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Mt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Rn.aa.h.call(this)}}T(Rn,ze);var Mt={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(l,d,p,_,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=N,this.key=++X,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ce(l){this.src=l,this.g={},this.h=0}Ce.prototype.add=function(l,d,p,_,N){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var z=w(l,d,_,N);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new Q(d,this.src,O,!!_,N),d.fa=p,l.push(d)),d};function I(l,d){var p=d.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,d,void 0),O;(O=0<=N)&&Array.prototype.splice.call(_,N,1),O&&(ne(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function w(l,d,p,_){for(var N=0;N<l.length;++N){var O=l[N];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==_)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function j(l,d,p,_,N){if(Array.isArray(d)){for(var O=0;O<d.length;O++)j(l,d[O],p,_,N);return null}return p=ae(p),l&&l[V]?l.K(d,p,u(_)?!!_.capture:!1,N):U(l,d,p,!1,_,N)}function U(l,d,p,_,N,O){if(!d)throw Error("Invalid event type");var z=u(N)?!!N.capture:!!N,xe=Y(l);if(xe||(l[k]=xe=new Ce(l)),p=xe.add(d,p,_,z,O),p.proxy)return p;if(_=G(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)dr||(N=z),N===void 0&&(N=!1),l.addEventListener(d.toString(),_,N);else if(l.attachEvent)l.attachEvent(q(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function G(){function l(p){return d.call(l.src,l.listener,p)}const d=ie;return l}function H(l,d,p,_,N){if(Array.isArray(d))for(var O=0;O<d.length;O++)H(l,d[O],p,_,N);else _=u(_)?!!_.capture:!!_,p=ae(p),l&&l[V]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=w(O,p,_,N),-1<p&&(ne(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=Y(l))&&(d=l.g[d.toString()],l=-1,d&&(l=w(d,p,_,N)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[V])I(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(q(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=Y(d))?(I(p,l),p.h==0&&(p.src=null,d[k]=null)):ne(l)}}}function q(l){return l in F?F[l]:F[l]="on"+l}function ie(l,d){if(l.da)l=!0;else{d=new Rn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&W(l),l=p.call(_,d)}return l}function Y(l){return l=l[k],l instanceof Ce?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(l){return typeof l=="function"?l:(l[re]||(l[re]=function(d){return l.handleEvent(d)}),l[re])}function oe(){He.call(this),this.i=new Ce(this),this.M=this,this.F=null}T(oe,He),oe.prototype[V]=!0,oe.prototype.removeEventListener=function(l,d,p,_){H(this,l,d,p,_)};function pe(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new ze(d,l);else if(d instanceof ze)d.target=d.target||l;else{var N=d;d=new ze(_,l),R(d,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var z=d.g=p[O];N=Ie(z,_,!0,d)&&N}if(z=d.g=l,N=Ie(z,_,!0,d)&&N,N=Ie(z,_,!1,d)&&N,p)for(O=0;O<p.length;O++)z=d.g=p[O],N=Ie(z,_,!1,d)&&N}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)ne(p[_]);delete l.g[d],l.h--}}this.F=null},oe.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},oe.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function Ie(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,O=0;O<d.length;++O){var z=d[O];if(z&&!z.da&&z.capture==p){var xe=z.listener,ht=z.ha||z.src;z.fa&&I(l.i,z),N=xe.call(ht,_)!==!1&&N}}return N&&!_.defaultPrevented}function _t(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ct(l){l.g=_t(()=>{l.g=null,l.i&&(l.i=!1,ct(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Jt extends He{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(l){He.call(this),this.h=l,this.g={}}T(yt,He);var fr=[];function bi(l){te(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}yt.prototype.N=function(){yt.aa.N.call(this),bi(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=a.JSON.stringify,Zt=a.JSON.parse,ca=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Lc(){}Lc.prototype.h=null;function bf(l){return l.h||(l.h=l.i())}function Sf(){}var Si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vc(){ze.call(this,"d")}T(Vc,ze);function Fc(){ze.call(this,"c")}T(Fc,ze);var Jr={},Pf=null;function ua(){return Pf=Pf||new oe}Jr.La="serverreachability";function kf(l){ze.call(this,Jr.La,l)}T(kf,ze);function Pi(l){const d=ua();pe(d,new kf(d))}Jr.STAT_EVENT="statevent";function Nf(l,d){ze.call(this,Jr.STAT_EVENT,l),this.stat=d}T(Nf,ze);function kt(l){const d=ua();pe(d,new Nf(d,l))}Jr.Ma="timingevent";function Of(l,d){ze.call(this,Jr.Ma,l),this.size=d}T(Of,ze);function ki(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function KI(l,d,p,_,N,O){l.info(function(){if(l.g)if(O)for(var z="",xe=O.split("&"),ht=0;ht<xe.length;ht++){var be=xe[ht].split("=");if(1<be.length){var Et=be[0];be=be[1];var vt=Et.split("_");z=2<=vt.length&&vt[1]=="type"?z+(Et+"="+be+"&"):z+(Et+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+p+`
`+z})}function QI(l,d,p,_,N,O,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+p+`
`+O+" "+z})}function Ps(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+XI(l,p)+(_?" "+_:"")})}function YI(l,d){l.info(function(){return"TIMEOUT: "+d})}Ni.prototype.info=function(){};function XI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return ut(p)}catch{return d}}var ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Df={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uc;function da(){}T(da,Lc),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},Uc=new da;function pr(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xf}function xf(){this.i=null,this.g="",this.h=!1}var Mf={},Bc={};function $c(l,d,p){l.L=1,l.v=ma(qn(d)),l.m=p,l.P=!0,Lf(l,null)}function Lf(l,d){l.F=Date.now(),fa(l),l.A=qn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Yf(p.i,"t",_),l.C=0,p=l.j.J,l.h=new xf,l.g=pp(l.j,p?d:null,!l.m),0<l.O&&(l.M=new Jt(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(fr[0]=N.toString()),N=fr);for(var O=0;O<N.length;O++){var z=j(p,N[O],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Pi(),KI(l.i,l.u,l.A,l.l,l.R,l.m)}pr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Wn(l)==3?d.j():this.Y(l)},pr.prototype.Y=function(l){try{if(l==this.g)e:{const vt=Wn(this.g);var d=this.g.Ba();const Os=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||rp(this.g)))){this.J||vt!=4||d==7||(d==8||0>=Os?Pi(3):Pi(2)),jc(this);var p=this.g.Z();this.X=p;t:if(Vf(this)){var _=rp(this.g);l="";var N=_.length,O=Wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zr(this),Oi(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(O&&d==N-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,QI(this.i,this.u,this.A,this.l,this.R,vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,ht=this.g;if((xe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(xe)){var be=xe;break t}}be=null}if(p=be)Ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,p);else{this.o=!1,this.s=3,kt(12),Zr(this),Oi(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<z.length;)if(un=JI(this,z),un==Bc){vt==4&&(this.s=4,kt(14),p=!1),Ps(this.i,this.l,null,"[Incomplete Response]");break}else if(un==Mf){this.s=4,kt(15),Ps(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Ps(this.i,this.l,un,null),qc(this,un);if(Vf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||z.length!=0||this.h.h||(this.s=1,kt(16),p=!1),this.o=this.o&&p,!p)Ps(this.i,this.l,z,"[Invalid Chunked Response]"),Zr(this),Oi(this);else if(0<z.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Qc(Et),Et.M=!0,kt(11))}}else Ps(this.i,this.l,z,null),qc(this,z);vt==4&&Zr(this),this.o&&!this.J&&(vt==4?up(this.j,this):(this.o=!1,fa(this)))}else gw(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Zr(this),Oi(this)}}}catch{}finally{}};function Vf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function JI(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?Bc:(p=Number(d.substring(p,_)),isNaN(p)?Mf:(_+=1,_+p>d.length?Bc:(d=d.slice(_,_+p),l.C=_+p,d)))}pr.prototype.cancel=function(){this.J=!0,Zr(this)};function fa(l){l.S=Date.now()+l.I,Ff(l,l.I)}function Ff(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ki(g(l.ba,l),d)}function jc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}pr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(YI(this.i,this.A),this.L!=2&&(Pi(),kt(17)),Zr(this),this.s=2,Oi(this)):Ff(this,this.S-l)};function Oi(l){l.j.G==0||l.J||up(l.j,l)}function Zr(l){jc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,bi(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function qc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Wc(p.h,l))){if(!l.K&&Wc(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Ia(p),va(p);else break e;Kc(p),kt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=ki(g(p.Za,p),6e3));if(1>=$f(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ts(p,11)}else if((l.K||p.g==l)&&Ia(p),!L(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let be=N[d];if(p.T=be[0],be=be[1],p.G==2)if(be[0]=="c"){p.K=be[1],p.ia=be[2];const Et=be[3];Et!=null&&(p.la=Et,p.j.info("VER="+p.la));const vt=be[4];vt!=null&&(p.Aa=vt,p.j.info("SVER="+p.Aa));const Os=be[5];Os!=null&&typeof Os=="number"&&0<Os&&(_=1.5*Os,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const un=l.g;if(un){const Aa=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Aa){var O=_.h;O.g||Aa.indexOf("spdy")==-1&&Aa.indexOf("quic")==-1&&Aa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Hc(O,O.h),O.h=null))}if(_.D){const Yc=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Yc&&(_.ya=Yc,Ve(_.I,_.D,Yc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=l;if(_.qa=fp(_,_.J?_.ia:null,_.W),z.K){jf(_.h,z);var xe=z,ht=_.L;ht&&(xe.I=ht),xe.B&&(jc(xe),fa(xe)),_.g=z}else lp(_);0<p.i.length&&Ta(p)}else be[0]!="stop"&&be[0]!="close"||ts(p,7);else p.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?ts(p,7):Gc(p):be[0]!="noop"&&p.l&&p.l.ta(be),p.v=0)}}Pi(4)}catch{}}var ZI=class{constructor(l,d){this.g=l,this.map=d}};function Uf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $f(l){return l.h?1:l.g?l.g.size:0}function Wc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Hc(l,d){l.g?l.g.add(d):l.h=d}function jf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Uf.prototype.cancel=function(){if(this.i=qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function qf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return S(l.i)}function ew(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function tw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Wf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=tw(l),_=ew(l),N=_.length,O=0;O<N;O++)d.call(void 0,_[O],p&&p[O],l)}var Hf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nw(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var O=l[p].substring(0,_);N=l[p].substring(_+1)}else O=l[p];d(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function es(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof es){this.h=l.h,pa(this,l.j),this.o=l.o,this.g=l.g,ga(this,l.s),this.l=l.l;var d=l.i,p=new Mi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),zf(this,p),this.m=l.m}else l&&(d=String(l).match(Hf))?(this.h=!1,pa(this,d[1]||"",!0),this.o=Di(d[2]||""),this.g=Di(d[3]||"",!0),ga(this,d[4]),this.l=Di(d[5]||"",!0),zf(this,d[6]||"",!0),this.m=Di(d[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}es.prototype.toString=function(){var l=[],d=this.j;d&&l.push(xi(d,Gf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(xi(d,Gf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(xi(p,p.charAt(0)=="/"?iw:sw,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",xi(p,aw)),l.join("")};function qn(l){return new es(l)}function pa(l,d,p){l.j=p?Di(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ga(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function zf(l,d,p){d instanceof Mi?(l.i=d,lw(l.i,l.h)):(p||(d=xi(d,ow)),l.i=new Mi(d,l.h))}function Ve(l,d,p){l.i.set(d,p)}function ma(l){return Ve(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Di(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xi(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,rw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function rw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Gf=/[#\/\?@]/g,sw=/[#\?:]/g,iw=/[#\?]/g,ow=/[#\?@]/g,aw=/#/g;function Mi(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function gr(l){l.g||(l.g=new Map,l.h=0,l.i&&nw(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Mi.prototype,n.add=function(l,d){gr(this),this.i=null,l=ks(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Kf(l,d){gr(l),d=ks(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Qf(l,d){return gr(l),d=ks(l,d),l.g.has(d)}n.forEach=function(l,d){gr(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(d,N,_,this)},this)},this)},n.na=function(){gr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const N=l[_];for(let O=0;O<N.length;O++)p.push(d[_])}return p},n.V=function(l){gr(this);let d=[];if(typeof l=="string")Qf(this,l)&&(d=d.concat(this.g.get(ks(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return gr(this),this.i=null,l=ks(this,l),Qf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Yf(l,d,p){Kf(l,d),0<p.length&&(l.i=null,l.g.set(ks(l,d),S(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const O=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var N=O;z[_]!==""&&(N+="="+encodeURIComponent(String(z[_]))),l.push(N)}}return this.i=l.join("&")};function ks(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function lw(l,d){d&&!l.j&&(gr(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(Kf(this,_),Yf(this,N,p))},l)),l.j=d}function cw(l,d){const p=new Ni;if(a.Image){const _=new Image;_.onload=m(mr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=m(mr,p,"TestLoadImage: error",!1,d,_),_.onabort=m(mr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(mr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function uw(l,d){const p=new Ni,_=new AbortController,N=setTimeout(()=>{_.abort(),mr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?mr(p,"TestPingServer: ok",!0,d):mr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),mr(p,"TestPingServer: error",!1,d)})}function mr(l,d,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function hw(){this.g=new ca}function dw(l,d,p){const _=p||"";try{Wf(l,function(N,O){let z=N;u(N)&&(z=ut(N)),d.push(_+O+"="+encodeURIComponent(z))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function _a(l){this.l=l.Ub||null,this.j=l.eb||!1}T(_a,Lc),_a.prototype.g=function(){return new ya(this.l,this.j)},_a.prototype.i=function(l){return function(){return l}}({});function ya(l,d){oe.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ya,oe),n=ya.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Vi(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Li(this):Vi(this),this.readyState==3&&Xf(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Li(this))},n.Qa=function(l){this.g&&(this.response=l,Li(this))},n.ga=function(){this.g&&Li(this)};function Li(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Vi(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Vi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Jf(l){let d="";return te(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function zc(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Jf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ve(l,d,p))}function Qe(l){oe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Qe,oe);var fw=/^https?$/i,pw=["POST","PUT"];n=Qe.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uc.g(),this.v=this.o?bf(this.o):bf(Uc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){Zf(this,O);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pw,d,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{np(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){Zf(this,O)}};function Zf(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,ep(l),Ea(l)}function ep(l){l.A||(l.A=!0,pe(l,"complete"),pe(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pe(this,"complete"),pe(this,"abort"),Ea(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tp(this):this.bb())},n.bb=function(){tp(this)};function tp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Wn(l)!=4||l.Z()!=2)){if(l.u&&Wn(l)==4)_t(l.Ea,0,l);else if(pe(l,"readystatechange"),Wn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=z===0){var N=String(l.D).match(Hf)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!fw.test(N?N.toLowerCase():"")}p=_}if(p)pe(l,"complete"),pe(l,"success");else{l.m=6;try{var O=2<Wn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",ep(l)}}finally{Ea(l)}}}}function Ea(l,d){if(l.g){np(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||pe(l,"ready");try{p.onreadystatechange=_}catch{}}}function np(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Wn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Wn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Zt(d)}};function rp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function gw(l){const d={};l=(l.g&&2<=Wn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(L(l[_]))continue;var p=b(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[N]||[];d[N]=O,O.push(p)}C(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fi(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function sp(l){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fi("baseRetryDelayMs",5e3,l),this.cb=Fi("retryDelaySeedMs",1e4,l),this.Wa=Fi("forwardChannelMaxRetries",2,l),this.wa=Fi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Uf(l&&l.concurrentRequestLimit),this.Da=new hw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sp.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,_){kt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=fp(this,null,this.W),Ta(this)};function Gc(l){if(ip(l),l.G==3){var d=l.U++,p=qn(l.I);if(Ve(p,"SID",l.K),Ve(p,"RID",d),Ve(p,"TYPE","terminate"),Ui(l,p),d=new pr(l,l.j,d),d.L=2,d.v=ma(qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=pp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),fa(d)}dp(l)}function va(l){l.g&&(Qc(l),l.g.cancel(),l.g=null)}function ip(l){va(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ia(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ta(l){if(!Bf(l.h)&&!l.s){l.s=!0;var d=l.Ga;Te||cn(),me||(Te(),me=!0),$t.add(d,l),l.B=0}}function mw(l,d){return $f(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ki(g(l.Ga,l,d),hp(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new pr(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),R(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=ap(this,N,d),p=qn(this.I),Ve(p,"RID",l),Ve(p,"CVER",22),this.D&&Ve(p,"X-HTTP-Session-Id",this.D),Ui(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(Jf(O)))+"&"+d:this.m&&zc(p,this.m,O)),Hc(this.h,N),this.Ua&&Ve(p,"TYPE","init"),this.P?(Ve(p,"$req",d),Ve(p,"SID","null"),N.T=!0,$c(N,p,null)):$c(N,p,d),this.G=2}}else this.G==3&&(l?op(this,l):this.i.length==0||Bf(this.h)||op(this))};function op(l,d){var p;d?p=d.l:p=l.U++;const _=qn(l.I);Ve(_,"SID",l.K),Ve(_,"RID",p),Ve(_,"AID",l.T),Ui(l,_),l.m&&l.o&&zc(_,l.m,l.o),p=new pr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=ap(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Hc(l.h,p),$c(p,_,d)}function Ui(l,d){l.H&&te(l.H,function(p,_){Ve(d,_,p)}),l.l&&Wf({},function(p,_){Ve(d,_,p)})}function ap(l,d,p){p=Math.min(l.i.length,p);var _=l.l?g(l.l.Na,l.l,l):null;e:{var N=l.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=N[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let xe=!0;for(let ht=0;ht<p;ht++){let be=N[ht].g;const Et=N[ht].map;if(be-=O,0>be)O=Math.max(0,N[ht].g-100),xe=!1;else try{dw(Et,z,"req"+be+"_")}catch{_&&_(Et)}}if(xe){_=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function lp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Te||cn(),me||(Te(),me=!0),$t.add(d,l),l.v=0}}function Kc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ki(g(l.Fa,l),hp(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,cp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ki(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),va(this),cp(this))};function Qc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function cp(l){l.g=new pr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=qn(l.qa);Ve(d,"RID","rpc"),Ve(d,"SID",l.K),Ve(d,"AID",l.T),Ve(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ve(d,"TO",l.ja),Ve(d,"TYPE","xmlhttp"),Ui(l,d),l.m&&l.o&&zc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=ma(qn(d)),p.m=null,p.P=!0,Lf(p,l)}n.Za=function(){this.C!=null&&(this.C=null,va(this),Kc(this),kt(19))};function Ia(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function up(l,d){var p=null;if(l.g==d){Ia(l),Qc(l),l.g=null;var _=2}else if(Wc(l.h,d))p=d.D,jf(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;_=ua(),pe(_,new Of(_,p)),Ta(l)}else lp(l);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&mw(l,d)||_==2&&Kc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:ts(l,5);break;case 4:ts(l,10);break;case 3:ts(l,6);break;default:ts(l,2)}}}function hp(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ts(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),_=l.Xa;const N=!_;_=new es(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||pa(_,"https"),ma(_),N?cw(_.toString(),p):uw(_.toString(),p)}else kt(2);l.G=0,l.l&&l.l.sa(d),dp(l),ip(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function dp(l){if(l.G=0,l.ka=[],l.l){const d=qf(l.h);(d.length!=0||l.i.length!=0)&&(P(l.ka,d),P(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function fp(l,d,p){var _=p instanceof es?qn(p):new es(p);if(_.g!="")d&&(_.g=d+"."+_.g),ga(_,_.s);else{var N=a.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var O=new es(null);_&&pa(O,_),d&&(O.g=d),N&&ga(O,N),p&&(O.l=p),_=O}return p=l.D,d=l.ya,p&&d&&Ve(_,p,d),Ve(_,"VER",l.la),Ui(l,_),_}function pp(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Qe(new _a({eb:p})):new Qe(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gp(){}n=gp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wa(){}wa.prototype.g=function(l,d){return new jt(l,d)};function jt(l,d){oe.call(this),this.g=new sp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!L(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!L(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ns(this)}T(jt,oe),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Gc(this.g)},jt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ut(l),l=p);d.i.push(new ZI(d.Ya++,l)),d.G==3&&Ta(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,Gc(this.g),delete this.g,jt.aa.N.call(this)};function mp(l){Vc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T(mp,Vc);function _p(){Fc.call(this),this.status=1}T(_p,Fc);function Ns(l){this.g=l}T(Ns,gp),Ns.prototype.ua=function(){pe(this.g,"a")},Ns.prototype.ta=function(l){pe(this.g,new mp(l))},Ns.prototype.sa=function(l){pe(this.g,new _p)},Ns.prototype.ra=function(){pe(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,RT=function(){return new wa},AT=function(){return ua()},wT=Jr,wh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,Xa=ha,Df.COMPLETE="complete",IT=Df,Sf.EventType=Si,Si.OPEN="a",Si.CLOSE="b",Si.ERROR="c",Si.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Zi=Sf,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,TT=Qe}).apply(typeof Ma<"u"?Ma:typeof self<"u"?self:typeof window<"u"?window:{});const Nm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Go("@firebase/firestore");function Us(){return Ts.logLevel}function J(n,...e){if(Ts.logLevel<=ge.DEBUG){const t=e.map($d);Ts.debug(`Firestore (${Ii}): ${n}`,...t)}}function lr(n,...e){if(Ts.logLevel<=ge.ERROR){const t=e.map($d);Ts.error(`Firestore (${Ii}): ${n}`,...t)}}function li(n,...e){if(Ts.logLevel<=ge.WARN){const t=e.map($d);Ts.warn(`Firestore (${Ii}): ${n}`,...t)}}function $d(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+n;throw lr(e),new Error(e)}function Ne(n,e){n||ce()}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends $n{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(It.UNAUTHENTICATED))}shutdown(){}}class dD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fD{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new CT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new It(e)}}class pD{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class gD{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new pD(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _D{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ne(this.o===void 0);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ne(typeof t.token=="string"),this.R=t.token,new mD(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=yD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Ee(n,e){return n<e?-1:n>e?1:0}function ci(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new et(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new et(0,0))}static max(){return new he(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(),r===void 0?r=e.length-t:r>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fo?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $e extends Fo{construct(e,t,r){return new $e(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new $e(t)}static emptyPath(){return new $e([])}}const ED=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Fo{construct(e,t,r){return new gt(e,t,r)}static isValidIdentifier(e){return ED.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(t)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se($e.fromString(e))}static fromName(e){return new se($e.fromString(e).popFirst(5))}static empty(){return new se($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return $e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new $e(e.slice()))}}function vD(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new et(t+1,0):new et(t,r));return new Lr(s,se.empty(),e)}function TD(n){return new Lr(n.readTime,n.key,-1)}class Lr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Lr(he.min(),se.empty(),-1)}static max(){return new Lr(he.max(),se.empty(),-1)}}function ID(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(n.documentKey,e.documentKey),t!==0?t:Ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==wD)throw n;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,r)=>{t(e)})}static reject(e){return new $((t,r)=>{r(e)})}static waitFor(e){return new $((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=$.resolve(!1);for(const r of e)t=t.next(s=>s?$.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new $((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new $((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function RD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ai(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mc.oe=-1;function _c(n){return n==null}function Ol(n){return n===0&&1/n==-1/0}function CD(n){return typeof n=="number"&&Number.isInteger(n)&&!Ol(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Om(e)),e=SD(n.get(t),e);return Om(e)}function SD(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Om(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ST(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.comparator=e,this.root=t||dt.EMPTY}insert(e,t){return new Ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new La(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new La(this.root,e,this.comparator,!1)}getReverseIterator(){return new La(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new La(this.root,e,this.comparator,!0)}}class La{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new dt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,r,s,i){return this}insert(e,t,r){return new dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xm(this.data.getIterator())}getIteratorFrom(e){return new xm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class xm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Gt([])}unionWith(e){let t=new nt(gt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Gt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new PT("Invalid base64 string: "+i):i}}(e);return new mt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const PD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(n){if(Ne(!!n),typeof n=="string"){let e=0;const t=PD.exec(n);if(Ne(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(n.seconds),nanos:Ye(n.nanos)}}function Ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fr(n){return typeof n=="string"?mt.fromBase64String(n):mt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function yc(n){const e=n.mapValue.fields.__previous_value__;return jd(e)?yc(e):e}function Uo(n){const e=Vr(n.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,t,r,s,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Bo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?jd(n)?4:OD(n)?9007199254740991:ND(n)?10:11:ce()}function Un(n,e){if(n===e)return!0;const t=Ur(n);if(t!==Ur(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Uo(n).isEqual(Uo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vr(s.timestampValue),a=Vr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),a=Ye(i.doubleValue);return o===a?Ol(o)===Ol(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return ci(n.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Dm(o)!==Dm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Un(o[c],a[c])))return!1;return!0}(n,e);default:return ce()}}function $o(n,e){return(n.values||[]).find(t=>Un(t,e))!==void 0}function ui(n,e){if(n===e)return 0;const t=Ur(n),r=Ur(e);if(t!==r)return Ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ee(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Mm(n.timestampValue,e.timestampValue);case 4:return Mm(Uo(n),Uo(e));case 5:return Ee(n.stringValue,e.stringValue);case 6:return function(i,o){const a=Fr(i),c=Fr(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Ee(a[u],c[u]);if(h!==0)return h}return Ee(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ee(Ye(i.latitude),Ye(o.latitude));return a!==0?a:Ee(Ye(i.longitude),Ye(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Lm(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},g=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(c=g.value)===null||c===void 0?void 0:c.arrayValue,S=Ee(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:Lm(m,T)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Va.mapValue&&o===Va.mapValue)return 0;if(i===Va.mapValue)return 1;if(o===Va.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=Ee(c[f],h[f]);if(g!==0)return g;const m=ui(a[c[f]],u[h[f]]);if(m!==0)return m}return Ee(c.length,h.length)}(n.mapValue,e.mapValue);default:throw ce()}}function Mm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ee(n,e);const t=Vr(n),r=Vr(e),s=Ee(t.seconds,r.seconds);return s!==0?s:Ee(t.nanos,r.nanos)}function Lm(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ui(t[s],r[s]);if(i)return i}return Ee(t.length,r.length)}function hi(n){return Ah(n)}function Ah(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Vr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return se.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ah(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ah(t.fields[o])}`;return s+"}"}(n.mapValue):ce()}function Ja(n){switch(Ur(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(n);return e?16+Ja(e):16;case 5:return 2*n.stringValue.length;case 6:return Fr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ja(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Qr(r.fields,(i,o)=>{s+=i.length+Ja(o)}),s}(n.mapValue);default:throw ce()}}function Vm(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Rh(n){return!!n&&"integerValue"in n}function qd(n){return!!n&&"arrayValue"in n}function Fm(n){return!!n&&"nullValue"in n}function Um(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Za(n){return!!n&&"mapValue"in n}function ND(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Eo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Qr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Eo(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Eo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function OD(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Za(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(t)}setAll(e){let t=gt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Eo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Za(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Za(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Qr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Eo(this.value))}}function kT(n){const e=[];return Qr(n.fields,(t,r)=>{const s=new gt([t]);if(Za(r)){const i=kT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,he.min(),he.min(),he.min(),Ft.empty(),0)}static newFoundDocument(e,t,r,s){return new bt(e,1,t,he.min(),r,s,0)}static newNoDocument(e,t){return new bt(e,2,t,he.min(),he.min(),Ft.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,he.min(),he.min(),Ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t){this.position=e,this.inclusive=t}}function Bm(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),t.key):r=ui(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $m(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Un(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t="asc"){this.field=e,this.dir=t}}function DD(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{}class Ze extends NT{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new MD(e,t,r):t==="array-contains"?new FD(e,r):t==="in"?new UD(e,r):t==="not-in"?new BD(e,r):t==="array-contains-any"?new $D(e,r):new Ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new LD(e,r):new VD(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ui(t,this.value)):t!==null&&Ur(this.value)===Ur(t)&&this.matchesComparison(ui(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends NT{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new An(e,t)}matches(e){return OT(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function OT(n){return n.op==="and"}function DT(n){return xD(n)&&OT(n)}function xD(n){for(const e of n.filters)if(e instanceof An)return!1;return!0}function Ch(n){if(n instanceof Ze)return n.field.canonicalString()+n.op.toString()+hi(n.value);if(DT(n))return n.filters.map(e=>Ch(e)).join(",");{const e=n.filters.map(t=>Ch(t)).join(",");return`${n.op}(${e})`}}function xT(n,e){return n instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Un(r.value,s.value)}(n,e):n instanceof An?function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&xT(o,s.filters[a]),!0):!1}(n,e):void ce()}function MT(n){return n instanceof Ze?function(t){return`${t.field.canonicalString()} ${t.op} ${hi(t.value)}`}(n):n instanceof An?function(t){return t.op.toString()+" {"+t.getFilters().map(MT).join(" ,")+"}"}(n):"Filter"}class MD extends Ze{constructor(e,t,r){super(e,t,r),this.key=se.fromName(r.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class LD extends Ze{constructor(e,t){super(e,"in",t),this.keys=LT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class VD extends Ze{constructor(e,t){super(e,"not-in",t),this.keys=LT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function LT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>se.fromName(r.referenceValue))}class FD extends Ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qd(t)&&$o(t.arrayValue,this.value)}}class UD extends Ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$o(this.value.arrayValue,t)}}class BD extends Ze{constructor(e,t){super(e,"not-in",t)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$o(this.value.arrayValue,t)}}class $D extends Ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function jm(n,e=null,t=[],r=[],s=null,i=null,o=null){return new jD(n,e,t,r,s,i,o)}function Wd(n){const e=fe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ch(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_c(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hi(r)).join(",")),e.ue=t}return e.ue}function Hd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!DD(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$m(n.startAt,e.startAt)&&$m(n.endAt,e.endAt)}function bh(n){return se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qD(n,e,t,r,s,i,o,a){return new Ri(n,e,t,r,s,i,o,a)}function Ec(n){return new Ri(n)}function qm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function VT(n){return n.collectionGroup!==null}function vo(n){const e=fe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new jo(i,r))}),t.has(gt.keyField().canonicalString())||e.ce.push(new jo(gt.keyField(),r))}return e.ce}function Ln(n){const e=fe(n);return e.le||(e.le=WD(e,vo(n))),e.le}function WD(n,e){if(n.limitType==="F")return jm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new jo(s.field,i)});const t=n.endAt?new Dl(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Dl(n.startAt.position,n.startAt.inclusive):null;return jm(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Sh(n,e){const t=n.filters.concat([e]);return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ph(n,e,t){return new Ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vc(n,e){return Hd(Ln(n),Ln(e))&&n.limitType===e.limitType}function FT(n){return`${Wd(Ln(n))}|lt:${n.limitType}`}function Bs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>MT(s)).join(", ")}]`),_c(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>hi(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>hi(s)).join(",")),`Target(${r})`}(Ln(n))}; limitType=${n.limitType})`}function Tc(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of vo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Bm(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,vo(r),s)||r.endAt&&!function(o,a,c){const u=Bm(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,vo(r),s))}(n,e)}function HD(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function UT(n){return(e,t)=>{let r=!1;for(const s of vo(n)){const i=zD(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zD(n,e,t){const r=n.field.isKeyField()?se.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?ui(c,u):ce()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ST(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=new Ke(se.comparator);function cr(){return GD}const BT=new Ke(se.comparator);function eo(...n){let e=BT;for(const t of n)e=e.insert(t.key,t);return e}function $T(n){let e=BT;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function us(){return To()}function jT(){return To()}function To(){return new Cs(n=>n.toString(),(n,e)=>n.isEqual(e))}const KD=new Ke(se.comparator),QD=new nt(se.comparator);function ye(...n){let e=QD;for(const t of n)e=e.add(t);return e}const YD=new nt(Ee);function XD(){return YD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function qT(n){return{integerValue:""+n}}function JD(n,e){return CD(e)?qT(e):zd(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this._=void 0}}function ZD(n,e,t){return n instanceof xl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&jd(i)&&(i=yc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof qo?HT(n,e):n instanceof Wo?zT(n,e):function(s,i){const o=WT(s,i),a=Wm(o)+Wm(s.Pe);return Rh(o)&&Rh(s.Pe)?qT(a):zd(s.serializer,a)}(n,e)}function ex(n,e,t){return n instanceof qo?HT(n,e):n instanceof Wo?zT(n,e):t}function WT(n,e){return n instanceof Ml?function(r){return Rh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class xl extends Ic{}class qo extends Ic{constructor(e){super(),this.elements=e}}function HT(n,e){const t=GT(e);for(const r of n.elements)t.some(s=>Un(s,r))||t.push(r);return{arrayValue:{values:t}}}class Wo extends Ic{constructor(e){super(),this.elements=e}}function zT(n,e){let t=GT(e);for(const r of n.elements)t=t.filter(s=>!Un(s,r));return{arrayValue:{values:t}}}class Ml extends Ic{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Wm(n){return Ye(n.integerValue||n.doubleValue)}function GT(n){return qd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function tx(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof qo&&s instanceof qo||r instanceof Wo&&s instanceof Wo?ci(r.elements,s.elements,Un):r instanceof Ml&&s instanceof Ml?Un(r.Pe,s.Pe):r instanceof xl&&s instanceof xl}(n.transform,e.transform)}class nx{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function el(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wc{}function KT(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Gd(n.key,En.none()):new sa(n.key,n.data,En.none());{const t=n.data,r=Ft.empty();let s=new nt(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Yr(n.key,r,new Gt(s.toArray()),En.none())}}function rx(n,e,t){n instanceof sa?function(s,i,o){const a=s.value.clone(),c=zm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Yr?function(s,i,o){if(!el(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=zm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(QT(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Io(n,e,t,r){return n instanceof sa?function(i,o,a,c){if(!el(i.precondition,o))return a;const u=i.value.clone(),h=Gm(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof Yr?function(i,o,a,c){if(!el(i.precondition,o))return a;const u=Gm(i.fieldTransforms,c,o),h=o.data;return h.setAll(QT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,o,a){return el(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function sx(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=WT(r.transform,s||null);i!=null&&(t===null&&(t=Ft.empty()),t.set(r.field,i))}return t||null}function Hm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ci(r,s,(i,o)=>tx(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class sa extends wc{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yr extends wc{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function QT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zm(n,e,t){const r=new Map;Ne(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ex(o,a,t[s]))}return r}function Gm(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,ZD(i,o,e))}return r}class Gd extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ix extends wc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rx(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Io(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Io(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=KT(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,(t,r)=>Hm(t,r))&&ci(this.baseMutations,e.baseMutations,(t,r)=>Hm(t,r))}}class Kd{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ne(e.mutations.length===r.length);let s=function(){return KD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Kd(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,we;function cx(n){switch(n){default:return ce();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function YT(n){if(n===void 0)return lr("GRPC error has no .code"),B.UNKNOWN;switch(n){case Je.OK:return B.OK;case Je.CANCELLED:return B.CANCELLED;case Je.UNKNOWN:return B.UNKNOWN;case Je.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Je.INTERNAL:return B.INTERNAL;case Je.UNAVAILABLE:return B.UNAVAILABLE;case Je.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Je.NOT_FOUND:return B.NOT_FOUND;case Je.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Je.ABORTED:return B.ABORTED;case Je.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Je.DATA_LOSS:return B.DATA_LOSS;default:return ce()}}(we=Je||(Je={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=new ds([4294967295,4294967295],0);function Km(n){const e=ux().encode(n),t=new vT;return t.update(e),new Uint8Array(t.digest())}function Qm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ds([t,r],0),new ds([s,i],0)]}class Qd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new to(`Invalid padding: ${t}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new to(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ds.fromNumber(this.Te)}Ee(e,t,r){let s=e.add(t.multiply(ds.fromNumber(r)));return s.compare(hx)===1&&(s=new ds([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Km(e),[r,s]=Qm(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qd(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Km(e),[r,s]=Qm(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ac(he.min(),s,new Ke(Ee),cr(),ye())}}class ia{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ia(r,t,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class XT{constructor(e,t){this.targetId=e,this.me=t}}class JT{constructor(e,t,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ym{constructor(){this.fe=0,this.ge=Xm(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),t=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new ia(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Xm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class dx{constructor(e){this.Le=e,this.Be=new Map,this.ke=cr(),this.qe=Fa(),this.Qe=Fa(),this.Ke=new Ke(Ee)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(bh(i))if(r===0){const o=new se(i.path);this.We(t,o,bt.newNoDocument(o,he.min()))}else Ne(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Fr(r).toUint8Array()}catch(c){if(c instanceof PT)return li("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Qd(o,s,i)}catch(c){return li(c instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&bh(a.target)){const c=new se(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,bt.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=ye();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ac(e,t,this.Ke,this.ke,r);return this.ke=cr(),this.qe=Fa(),this.Qe=Fa(),this.Ke=new Ke(Ee),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Ym,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new nt(Ee),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new nt(Ee),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||J("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ym),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Fa(){return new Ke(se.comparator)}function Xm(){return new Ke(se.comparator)}const fx={asc:"ASCENDING",desc:"DESCENDING"},px={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gx={and:"AND",or:"OR"};class mx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kh(n,e){return n.useProto3Json||_c(e)?e:{value:e}}function Ll(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _x(n,e){return Ll(n,e.toTimestamp())}function Vn(n){return Ne(!!n),he.fromTimestamp(function(t){const r=Vr(t);return new et(r.seconds,r.nanos)}(n))}function Yd(n,e){return Nh(n,e).canonicalString()}function Nh(n,e){const t=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function eI(n){const e=$e.fromString(n);return Ne(iI(e)),e}function Oh(n,e){return Yd(n.databaseId,e.path)}function Cu(n,e){const t=eI(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new se(nI(t))}function tI(n,e){return Yd(n.databaseId,e)}function yx(n){const e=eI(n);return e.length===4?$e.emptyPath():nI(e)}function Dh(n){return new $e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nI(n){return Ne(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jm(n,e,t){return{name:Oh(n,e),fields:t.value.mapValue.fields}}function Ex(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ne(h===void 0||typeof h=="string"),mt.fromBase64String(h||"")):(Ne(h===void 0||h instanceof Buffer||h instanceof Uint8Array),mt.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?B.UNKNOWN:YT(u.code);return new Z(h,u.message||"")}(o);t=new JT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Cu(n,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):he.min(),a=new Ft({mapValue:{fields:r.document.fields}}),c=bt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];t=new tl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Cu(n,r.document),i=r.readTime?Vn(r.readTime):he.min(),o=bt.newNoDocument(s,i),a=r.removedTargetIds||[];t=new tl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Cu(n,r.document),i=r.removedTargetIds||[];t=new tl([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lx(s,i),a=r.targetId;t=new XT(a,o)}}return t}function vx(n,e){let t;if(e instanceof sa)t={update:Jm(n,e.key,e.value)};else if(e instanceof Gd)t={delete:Oh(n,e.key)};else if(e instanceof Yr)t={update:Jm(n,e.key,e.data),updateMask:Px(e.fieldMask)};else{if(!(e instanceof ix))return ce();t={verify:Oh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ce()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_x(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(n,e.precondition)),t}function Tx(n,e){return n&&n.length>0?(Ne(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(he.min())&&(o=Vn(i)),new nx(o,s.transformResults||[])}(t,e))):[]}function Ix(n,e){return{documents:[tI(n,e.path)]}}function wx(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tI(n,s);const i=function(u){if(u.length!==0)return sI(An.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:$s(g.field),direction:Cx(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=kh(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:s}}function Ax(n){let e=yx(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ne(r===1);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const g=rI(f);return g instanceof An&&DT(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(T){return new jo(js(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,_c(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,m=f.values||[];return new Dl(m,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new Dl(m,g)}(t.endAt)),qD(e,s,o,i,a,"F",c,u)}function Rx(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rI(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=js(t.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=js(t.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=js(t.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=js(t.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return Ze.create(js(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return An.create(t.compositeFilter.filters.map(r=>rI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function Cx(n){return fx[n]}function bx(n){return px[n]}function Sx(n){return gx[n]}function $s(n){return{fieldPath:n.canonicalString()}}function js(n){return gt.fromServerFormat(n.fieldPath)}function sI(n){return n instanceof Ze?function(t){if(t.op==="=="){if(Um(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NAN"}};if(Fm(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Um(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NOT_NAN"}};if(Fm(t.value))return{unaryFilter:{field:$s(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(t.field),op:bx(t.op),value:t.value}}}(n):n instanceof An?function(t){const r=t.getFilters().map(s=>sI(s));return r.length===1?r[0]:{compositeFilter:{op:Sx(t.op),filters:r}}}(n):ce()}function Px(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function iI(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,r,s,i=he.min(),o=he.min(),a=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.ht=e}}function Nx(n){const e=Ax({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ph(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.ln=new Dx}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Lr.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class Dx{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new nt($e.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new di(0)}static Qn(){return new di(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_([n,e],[t,r]){const s=Ee(n,t);return s===0?Ee(e,r):s}class xx{constructor(e){this.Gn=e,this.buffer=new nt(e_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();e_(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mx{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){J("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ai(t)?J("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await wi(t)}await this.Yn(3e5)})}}class Lx{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return $.resolve(mc.oe);const r=new xx(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Zm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zm):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Us()<=ge.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function Vx(n,e){return new Lx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.changes=new Cs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Io(r.mutation,s,Gt.empty(),et.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ye()){const s=us();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=eo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=us();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ye()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=cr();const o=To(),a=function(){return To()}();return t.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Yr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Io(h.mutation,u,h.mutation.getFieldMask(),et.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var f;return a.set(u,new Ux(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=To();let s=new Ke((o,a)=>o-a),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=r.get(c)||Gt.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(s.get(a.batchId)||ye()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=jT();h.forEach(g=>{if(!i.has(g)){const m=KT(t.get(g),r.get(g));m!==null&&f.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):VT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):$.resolve(us());let a=-1,c=i;return o.next(u=>$.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(h=>({batchId:a,changes:$T(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(r=>{let s=eo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=eo();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,c=>{const u=function(f,g){return new Ri(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let a=eo();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Io(h.mutation,u,Gt.empty(),et.now()),Tc(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Vn(s.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:Nx(s.bundledQuery),readTime:Vn(s.readTime)}}(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.overlays=new Ke(se.comparator),this.Er=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const r=us();return $.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Tt(e,t,i)}),$.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){const s=us(),i=t.length+1,o=new se(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ke((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=us(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=us(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return $.resolve(a)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ax(t,r));let i=this.Er.get(t);i===void 0&&(i=ye(),this.Er.set(t,i)),this.Er.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.dr=new nt(it.Ar),this.Rr=new nt(it.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new it(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new it(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new se(new $e([])),r=new it(t,e),s=new it(t,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new se(new $e([])),r=new it(t,e),s=new it(t,e+1);let i=ye();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new it(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return se.comparator(e.key,t.key)||Ee(e.br,t.br)}static Vr(e,t){return Ee(e.br,t.br)||se.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new nt(it.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ox(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new it(t,0),s=new it(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Ee);return t.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new it(new se(i),0);let a=new nt(Ee);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.br)),!0)},o),$.resolve(this.Mr(a))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ne(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(t.mutations,s=>{const i=new it(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new it(t,0),s=this.vr.firstAfterOrEqual(r);return $.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.Nr=e,this.docs=function(){return new Ke(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let r=cr();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=cr();const o=t.path,a=new se(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ID(TD(h),r)<=0||(s.has(h.key)||Tc(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ce()}Lr(e,t){return $.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new zx(this)}getSize(e){return $.resolve(this.size)}}class zx extends Fx{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.persistence=e,this.Br=new Cs(t=>Wd(t),Hd),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.kr=0,this.qr=new Xd,this.targetCount=0,this.Qr=di.qn()}forEachTarget(e,t){return this.Br.forEach((r,s)=>t(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new di(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t){this.Kr={},this.overlays={},this.$r=new mc(0),this.Ur=!1,this.Ur=!0,this.Wr=new qx,this.referenceDelegate=e(this),this.Gr=new Gx(this),this.indexManager=new Ox,this.remoteDocumentCache=function(s){return new Hx(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new kx(t),this.jr=new $x(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Wx(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){J("MemoryPersistence","Starting transaction:",e);const s=new Kx(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class Kx extends AD{constructor(e){super(),this.currentSequenceNumber=e}}class Jd{constructor(e){this.persistence=e,this.Zr=new Xd,this.Xr=null}static ei(e){return new Jd(e)}get ti(){if(this.Xr)return this.Xr;throw ce()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const s=se.fromPath(r);return this.ni(e,s).next(i=>{i||t.removeEntry(s,he.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Vl{constructor(e,t){this.persistence=e,this.ri=new Cs(r=>bD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Vx(this,t)}static ei(e,t){return new Vl(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?$.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,t).next(a=>{a||(r++,i.removeEntry(o,he.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ja(e.data.value)),t}ir(e,t,r){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=ye(),s=ye();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zd(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return fb()?8:RD(Pt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Xi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Qx;return this.ts(e,t,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,t,o,a.size)})}).next(()=>i.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Us()<=ge.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Bs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Us()<=ge.DEBUG&&J("QueryEngine","Query:",Bs(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Us()<=ge.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Bs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(t))):$.resolve())}Xi(e,t){if(qm(t))return $.resolve(null);let r=Ln(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ph(t,null,"F"),r=Ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(t,a);return this.ss(t,u,o,c.readTime)?this.Xi(e,Ph(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,r,s){return qm(t)||s.isEqual(he.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(t,i);return this.ss(t,o,r,s)?$.resolve(null):(Us()<=ge.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bs(t)),this.os(e,o,t,vD(s,-1)).next(a=>a))})}rs(e,t){let r=new nt(UT(e));return t.forEach((s,i)=>{Tc(e,i)&&(r=r.add(i))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,r){return Us()<=ge.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Bs(t)),this.Zi.getDocumentsMatchingQuery(e,t,Lr.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Ke(Ee),this.cs=new Cs(i=>Wd(i),Hd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bx(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Jx(n,e,t,r){return new Xx(n,e,t,r)}async function aI(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ye();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Zx(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,g=f.keys();let m=$.resolve();return g.forEach(T=>{m=m.next(()=>h.getEntry(c,T)).next(S=>{const P=u.docVersions.get(T);Ne(P!==null),S.version.compareTo(P)<0&&(f.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function lI(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function eM(n,e){const t=fe(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const a=[];e.targetChanges.forEach((h,f)=>{const g=s.get(f);if(!g)return;a.push(t.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.Gr.addMatchingKeys(i,h.addedDocuments,f)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(mt.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(f,m),function(S,P,M){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(g,m,h)&&a.push(t.Gr.updateTargetData(i,m))});let c=cr(),u=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(tM(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!r.isEqual(he.min())){const h=t.Gr.getLastRemoteSnapshotVersion(i).next(f=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.us=s,i))}function tM(n,e,t){let r=ye(),s=ye();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=cr();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(he.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function nM(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rM(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):t.Gr.allocateTargetId(r).next(o=>(s=new Cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function xh(n,e,t){const r=fe(n),s=r.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function t_(n,e,t){const r=fe(n);let s=he.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=fe(c),g=f.cs.get(h);return g!==void 0?$.resolve(f.us.get(g)):f.Gr.getTargetData(u,h)}(r,o,Ln(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,t?s:he.min(),t?i:ye())).next(a=>(sM(r,HD(e),a),{documents:a,ds:i})))}function sM(n,e,t){let r=n.ls.get(e)||he.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ls.set(e,r)}class n_{constructor(){this.activeTargetIds=XD()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iM{constructor(){this._o=new n_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new n_,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua=null;function bu(){return Ua===null?Ua=function(){return 268435456+Math.round(2147483648*Math.random())}():Ua++,"0x"+Ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class cM extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,r,s,i,o){const a=bu(),c=this.No(t,r.toUriEncodedString());J("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(t,c,u,s).then(h=>(J("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw li("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",s),h})}ko(t,r,s,i,o,a){return this.Oo(t,r,s,i,o)}Lo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}No(t,r){const s=aM[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,s){const i=bu();return new Promise((o,a)=>{const c=new TT;c.setWithCredentials(!0),c.listenOnce(IT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Xa.NO_ERROR:const h=c.getResponseJson();J(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Xa.TIMEOUT:J(Tt,`RPC '${e}' ${i} timed out`),a(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case Xa.HTTP_ERROR:const f=c.getStatus();if(J(Tt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const T=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(M)>=0?M:B.UNKNOWN}(m.status);a(new Z(T,m.message))}else a(new Z(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new Z(B.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{J(Tt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);J(Tt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}qo(e,t,r){const s=bu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RT(),a=AT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=i.join("");J(Tt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,m=!1;const T=new lM({Eo:P=>{m?J(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(J(Tt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),J(Tt,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},Ao:()=>f.close()}),S=(P,M,L)=>{P.listen(M,D=>{try{L(D)}catch(x){setTimeout(()=>{throw x},0)}})};return S(f,Zi.EventType.OPEN,()=>{m||(J(Tt,`RPC '${e}' stream ${s} transport opened.`),T.So())}),S(f,Zi.EventType.CLOSE,()=>{m||(m=!0,J(Tt,`RPC '${e}' stream ${s} transport closed`),T.Do())}),S(f,Zi.EventType.ERROR,P=>{m||(m=!0,li(Tt,`RPC '${e}' stream ${s} transport errored:`,P),T.Do(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),S(f,Zi.EventType.MESSAGE,P=>{var M;if(!m){const L=P.data[0];Ne(!!L);const D=L,x=(D==null?void 0:D.error)||((M=D[0])===null||M===void 0?void 0:M.error);if(x){J(Tt,`RPC '${e}' stream ${s} received error:`,x);const ee=x.status;let te=function(E){const R=Je[E];if(R!==void 0)return YT(R)}(ee),C=x.message;te===void 0&&(te=B.INTERNAL,C="Unknown error status: "+ee+" with message "+x.message),m=!0,T.Do(new Z(te,C)),f.close()}else J(Tt,`RPC '${e}' stream ${s} received:`,L),T.vo(L)}}),S(a,wT.STAT_EVENT,P=>{P.stat===wh.PROXY?J(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===wh.NOPROXY&&J(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.bo()},0),T}}function Su(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n){return new mx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,r,s,i,o,a,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new cI(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(lr(t.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new Z(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uM extends uI{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Ex(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?Vn(o.readTime):he.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Dh(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=bh(c)?{documents:Ix(i,c)}:{query:wx(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ZT(i,o.resumeToken);const u=kh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){a.readTime=Ll(i,o.snapshotVersion.toTimestamp());const u=kh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Rx(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Dh(this.serializer),t.removeTarget=e,this.c_(t)}}class hM extends uI{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Tx(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Dh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>vx(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Nh(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())})}ko(e,t,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Nh(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(B.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class fM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(lr(t),this.C_=!1):J("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{bs(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.k_.add(4),await oa(u),u.K_.set("Unknown"),u.k_.delete(4),await Cc(u)}(this))})}),this.K_=new fM(r,s)}}async function Cc(n){if(bs(n))for(const e of n.q_)await e(!0)}async function oa(n){for(const e of n.q_)await e(!1)}function hI(n,e){const t=fe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),rf(t)?nf(t):Ci(t).s_()&&tf(t,e))}function ef(n,e){const t=fe(n),r=Ci(t);t.B_.delete(e),r.s_()&&dI(t,e),t.B_.size===0&&(r.s_()?r.a_():bs(t)&&t.K_.set("Unknown"))}function tf(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ci(n).V_(e)}function dI(n,e){n.U_.xe(e),Ci(n).m_(e)}function nf(n){n.U_=new dx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ci(n).start(),n.K_.F_()}function rf(n){return bs(n)&&!Ci(n).i_()&&n.B_.size>0}function bs(n){return fe(n).k_.size===0}function fI(n){n.U_=void 0}async function gM(n){n.K_.set("Online")}async function mM(n){n.B_.forEach((e,t)=>{tf(n,e)})}async function _M(n,e){fI(n),rf(n)?(n.K_.O_(e),nf(n)):n.K_.set("Unknown")}async function yM(n,e,t){if(n.K_.set("Online"),e instanceof JT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(n,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(n,r)}else if(e instanceof tl?n.U_.$e(e):e instanceof XT?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(he.min()))try{const r=await lI(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(mt.EMPTY_BYTE_STRING,h.snapshotVersion)),dI(i,c);const f=new Cr(h.target,c,u,h.sequenceNumber);tf(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Fl(n,r)}}async function Fl(n,e,t){if(!Ai(e))throw e;n.k_.add(1),await oa(n),n.K_.set("Offline"),t||(t=()=>lI(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Cc(n)})}function pI(n,e){return e().catch(t=>Fl(n,t,e))}async function bc(n){const e=fe(n),t=Br(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;EM(e);)try{const s=await nM(e.localStore,r);if(s===null){e.L_.length===0&&t.a_();break}r=s.batchId,vM(e,s)}catch(s){await Fl(e,s)}gI(e)&&mI(e)}function EM(n){return bs(n)&&n.L_.length<10}function vM(n,e){n.L_.push(e);const t=Br(n);t.s_()&&t.f_&&t.g_(e.mutations)}function gI(n){return bs(n)&&!Br(n).i_()&&n.L_.length>0}function mI(n){Br(n).start()}async function TM(n){Br(n).w_()}async function IM(n){const e=Br(n);for(const t of n.L_)e.g_(t.mutations)}async function wM(n,e,t){const r=n.L_.shift(),s=Kd.from(r,e,t);await pI(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await bc(n)}async function AM(n,e){e&&Br(n).f_&&await async function(r,s){if(function(o){return cx(o)&&o!==B.ABORTED}(s.code)){const i=r.L_.shift();Br(r).__(),await pI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bc(r)}}(n,e),gI(n)&&mI(n)}async function s_(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=bs(t);t.k_.add(3),await oa(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Cc(t)}async function RM(n,e){const t=fe(n);e?(t.k_.delete(2),await Cc(t)):e||(t.k_.add(2),await oa(t),t.K_.set("Unknown"))}function Ci(n){return n.W_||(n.W_=function(t,r,s){const i=fe(t);return i.b_(),new uM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:gM.bind(null,n),mo:mM.bind(null,n),po:_M.bind(null,n),R_:yM.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),rf(n)?nf(n):n.K_.set("Unknown")):(await n.W_.stop(),fI(n))})),n.W_}function Br(n){return n.G_||(n.G_=function(t,r,s){const i=fe(t);return i.b_(),new hM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:TM.bind(null,n),po:AM.bind(null,n),p_:IM.bind(null,n),y_:wM.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await bc(n)):(await n.G_.stop(),n.L_.length>0&&(J("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new sf(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function of(n,e){if(lr("AsyncQueue",`${e}: ${n}`),Ai(n))return new Z(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{static emptySet(e){return new ti(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||se.comparator(t.key,r.key):(t,r)=>se.comparator(t.key,r.key),this.keyedMap=eo(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ti)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.z_=new Ke(se.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ce():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class fi{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new fi(e,t,ti.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class bM{constructor(){this.queries=o_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=fe(t),i=s.queries;s.queries=o_(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(r)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function o_(){return new Cs(n=>FT(n),vc)}async function af(n,e){const t=fe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new CM,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=of(o,`Initialization of query '${Bs(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&cf(t)}async function lf(n,e){const t=fe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function SM(n,e){const t=fe(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&cf(t)}function PM(n,e,t){const r=fe(n),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(t);r.queries.delete(e)}function cf(n){n.X_.forEach(e=>{e.next()})}var Mh,a_;(a_=Mh||(Mh={})).na="default",a_.Cache="cache";class uf{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Mh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.key=e}}class yI{constructor(e){this.key=e}}class kM{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ye(),this.mutatedKeys=ye(),this.Va=UT(e),this.ma=new ti(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new i_,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const g=s.get(h),m=Tc(this.query,f)?f:null,T=!!g&&this.mutatedKeys.has(g.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;g&&m?g.data.isEqual(m.data)?T!==S&&(r.track({type:3,doc:m}),P=!0):this.ya(g,m)||(r.track({type:2,doc:m}),P=!0,(c&&this.Va(m,c)>0||u&&this.Va(m,u)<0)&&(a=!0)):!g&&m?(r.track({type:0,doc:m}),P=!0):g&&!m&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(a=!0)),P&&(m?(o=o.add(m),i=S?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(m,T){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return S(m)-S(T)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(r),s=s!=null&&s;const a=t&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new fi(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new i_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ye(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new yI(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new _I(r))}),t}va(e){this.da=e.ds,this.Ra=ye();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return fi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class NM{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class OM{constructor(e){this.key=e,this.Fa=!1}}class DM{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Cs(a=>FT(a),vc),this.Oa=new Map,this.Na=new Set,this.La=new Ke(se.comparator),this.Ba=new Map,this.ka=new Xd,this.qa={},this.Qa=new Map,this.Ka=di.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xM(n,e,t=!0){const r=AI(n);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await EI(r,e,t,!0),s}async function MM(n,e){const t=AI(n);await EI(t,e,!0,!1)}async function EI(n,e,t,r){const s=await rM(n.localStore,Ln(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await LM(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&hI(n.remoteStore,s),a}async function LM(n,e,t,r,s){n.Ua=(f,g,m)=>async function(S,P,M,L){let D=P.view.ga(M);D.ss&&(D=await t_(S.localStore,P.query,!1).then(({documents:C})=>P.view.ga(C,D)));const x=L&&L.targetChanges.get(P.targetId),ee=L&&L.targetMismatches.get(P.targetId)!=null,te=P.view.applyChanges(D,S.isPrimaryClient,x,ee);return c_(S,P.targetId,te.ba),te.snapshot}(n,f,g,m);const i=await t_(n.localStore,e,!0),o=new kM(e,i.ds),a=o.ga(i.documents),c=ia.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);c_(n,t,u.ba);const h=new NM(e,t,o);return n.xa.set(e,h),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function VM(n,e,t){const r=fe(n),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!vc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ef(r.remoteStore,s.targetId),Lh(r,s.targetId)}).catch(wi)):(Lh(r,s.targetId),await xh(r.localStore,s.targetId,!0))}async function FM(n,e){const t=fe(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ef(t.remoteStore,r.targetId))}async function UM(n,e,t){const r=zM(n);try{const s=await function(o,a){const c=fe(o),u=et.now(),h=a.reduce((m,T)=>m.add(T.key),ye());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let T=cr(),S=ye();return c.hs.getEntries(m,h).next(P=>{T=P,T.forEach((M,L)=>{L.isValidDocument()||(S=S.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,T)).next(P=>{f=P;const M=[];for(const L of a){const D=sx(L,f.get(L.key).overlayedDocument);D!=null&&M.push(new Yr(L.key,D,kT(D.value.mapValue),En.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,M,a)}).next(P=>{g=P;const M=P.applyToLocalDocumentSet(f,S);return c.documentOverlayCache.saveOverlays(m,P.batchId,M)})}).then(()=>({batchId:g.batchId,changes:$T(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ke(Ee)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,t),await aa(r,s.changes),await bc(r.remoteStore)}catch(s){const i=of(s,"Failed to persist write");t.reject(i)}}async function vI(n,e){const t=fe(n);try{const r=await eM(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ba.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await aa(t,r,e)}catch(r){await wi(r)}}function l_(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=fe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.J_)g.ea(a)&&(u=!0)}),u&&cf(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BM(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ke(se.comparator);o=o.insert(i,bt.newNoDocument(i,he.min()));const a=ye().add(i),c=new Ac(he.min(),new Map,new Ke(Ee),o,a);await vI(r,c),r.La=r.La.remove(i),r.Ba.delete(e),hf(r)}else await xh(r.localStore,e,!1).then(()=>Lh(r,e,t)).catch(wi)}async function $M(n,e){const t=fe(n),r=e.batch.batchId;try{const s=await Zx(t.localStore,e);II(t,r,null),TI(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await aa(t,s)}catch(s){await wi(s)}}async function jM(n,e,t){const r=fe(n);try{const s=await function(o,a){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Ne(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);II(r,e,t),TI(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await aa(r,s)}catch(s){await wi(s)}}function TI(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function II(n,e,t){const r=fe(n);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Lh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||wI(n,r)})}function wI(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(ef(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),hf(n))}function c_(n,e,t){for(const r of t)r instanceof _I?(n.ka.addReference(r.key,e),qM(n,r)):r instanceof yI?(J("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||wI(n,r.key)):ce()}function qM(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(J("SyncEngine","New document in limbo: "+t),n.Na.add(r),hf(n))}function hf(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new se($e.fromString(e)),r=n.Ka.next();n.Ba.set(r,new OM(t)),n.La=n.La.insert(t,r),hI(n.remoteStore,new Cr(Ln(Ec(t.path)),r,"TargetPurposeLimboResolution",mc.oe))}}async function aa(n,e,t){const r=fe(n),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,c)=>{o.push(r.Ua(c,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Zd.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const h=fe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,g=>$.forEach(g.Wi,m=>h.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>$.forEach(g.Gi,m=>h.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!Ai(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=h.us.get(g),T=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(T);h.us=h.us.insert(g,S)}}}(r.localStore,i))}async function WM(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await aI(t.localStore,e);t.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new Z(B.CANCELLED,o))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aa(t,r.Ts)}}function HM(n,e){const t=fe(n),r=t.Ba.get(e);if(r&&r.Fa)return ye().add(r.key);{let s=ye();const i=t.Oa.get(e);if(!i)return s;for(const o of i){const a=t.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function AI(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BM.bind(null,e),e.Ma.R_=SM.bind(null,e.eventManager),e.Ma.Wa=PM.bind(null,e.eventManager),e}function zM(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$M.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jM.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Jx(this.persistence,new Yx,e.initialUser,this.serializer)}ja(e){return new oI(Jd.ei,this.serializer)}za(e){return new iM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class GM extends Ul{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ne(this.persistence.referenceDelegate instanceof Vl);const r=this.persistence.referenceDelegate.garbageCollector;return new Mx(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new oI(r=>Vl.ei(r,t),this.serializer)}}class Vh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>l_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WM.bind(null,this.syncEngine),await RM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bM}()}createDatastore(e){const t=Rc(e.databaseInfo.databaseId),r=function(i){return new cM(i)}(e.databaseInfo);return function(i,o,a,c){return new dM(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new pM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>l_(this.syncEngine,t,0),function(){return r_.p()?new r_:new oM}())}createSyncEngine(e,t){return function(s,i,o,a,c,u,h){const f=new DM(s,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=fe(s);J("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await oa(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vh.provider={build:()=>new Vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=bT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=of(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pu(n,e){n.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await aI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function u_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QM(n);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>s_(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>s_(e.remoteStore,s)),n._onlineComponents=e}async function QM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;li("Error using user provided cache. Falling back to memory cache: "+t),await Pu(n,new Ul)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Pu(n,new GM(void 0));return n._offlineComponents}async function RI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await u_(n,n._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await u_(n,new Vh))),n._onlineComponents}function YM(n){return RI(n).then(e=>e.syncEngine)}async function Bl(n){const e=await RI(n),t=e.eventManager;return t.onListen=xM.bind(null,e.syncEngine),t.onUnlisten=VM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FM.bind(null,e.syncEngine),t}function XM(n,e,t={}){const r=new ir;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new df({next:g=>{h.eu(),o.enqueueAndForget(()=>lf(i,f));const m=g.docs.has(a);!m&&g.fromCache?u.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&c&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new uf(Ec(a.path),h,{includeMetadataChanges:!0,ua:!0});return af(i,f)}(await Bl(n),n.asyncQueue,e,t,r)),r.promise}function JM(n,e,t={}){const r=new ir;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new df({next:g=>{h.eu(),o.enqueueAndForget(()=>lf(i,f)),g.fromCache&&c.source==="server"?u.reject(new Z(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new uf(a,h,{includeMetadataChanges:!0,ua:!0});return af(i,f)}(await Bl(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ZM(n,e,t,r){if(e===!0&&r===!0)throw new Z(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function d_(n){if(!se.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function f_(n){if(se.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sc(n);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new p_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new p_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hD;switch(r.type){case"firstParty":return new gD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=h_.get(t);r&&(J("ComponentProvider","Removing Datastore"),h_.delete(t),r.terminate())}(this),Promise.resolve()}}function eL(n,e,t,r={}){var s;const i=(n=sn(n,Pc))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=It.MOCK_USER;else{a=ab(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(u)}n._authCredentials=new dD(new CT(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class xt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class Dr extends Xr{constructor(e,t,r){super(e,t,Ec(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new se(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function nl(n,e,...t){if(n=lt(n),bI("collection","path",e),n instanceof Pc){const r=$e.fromString(e,...t);return f_(r),new Dr(n,null,r)}{if(!(n instanceof xt||n instanceof Dr))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child($e.fromString(e,...t));return f_(r),new Dr(n.firestore,null,r)}}function no(n,e,...t){if(n=lt(n),arguments.length===1&&(e=bT.newId()),bI("doc","path",e),n instanceof Pc){const r=$e.fromString(e,...t);return d_(r),new xt(n,null,new se(r))}{if(!(n instanceof xt||n instanceof Dr))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child($e.fromString(e,...t));return d_(r),new xt(n.firestore,n instanceof Dr?n.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new cI(this,"async_queue_retry"),this.fu=()=>{const r=Su();r&&J("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Su();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Su();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new ir;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ai(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw lr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=sf.createAndSchedule(this,e,t,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ce()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function m_(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class $r extends Pc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new g_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new g_(e),this._firestoreClient=void 0,await e}}}function SI(n,e){const t=typeof n=="object"?n:TE(),r=typeof n=="string"?n:"(default)",s=EE(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ib("firestore");i&&eL(s,...i)}return s}function kc(n){if(n._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tL(n),n._firestoreClient}function tL(n){var e,t,r;const s=n._freezeSettings(),i=function(a,c,u,h){return new kD(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,CI(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new KM(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(mt.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=/^__.*__$/;class rL{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms):new sa(e,this.data,t,this.fieldTransforms)}}class PI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Yr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function kI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class gf{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return $l(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(kI(this.Mu)&&nL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class sL{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Rc(e)}$u(e,t,r,s=!1){return new gf({Mu:e,methodName:t,Ku:r,path:gt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(n){const e=n._freezeSettings(),t=Rc(n._databaseId);return new sL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iL(n,e,t,r,s,i={}){const o=n.$u(i.merge||i.mergeFields?2:0,e,t,s);_f("Data must be an object, but it was:",o,r);const a=NI(r,o);let c,u;if(i.merge)c=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=Fh(e,f,t);if(!o.contains(g))throw new Z(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);DI(h,g)||h.push(g)}c=new Gt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new rL(new Ft(a),c,u)}class Dc extends ff{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dc}}function oL(n,e,t,r){const s=n.$u(1,e,t);_f("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();Qr(r,(c,u)=>{const h=yf(e,c,t);u=lt(u);const f=s.Bu(h);if(u instanceof Dc)i.push(h);else{const g=la(u,f);g!=null&&(i.push(h),o.set(h,g))}});const a=new Gt(i);return new PI(o,a,s.fieldTransforms)}function aL(n,e,t,r,s,i){const o=n.$u(1,e,t),a=[Fh(e,r,t)],c=[s];if(i.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(Fh(e,i[g])),c.push(i[g+1]);const u=[],h=Ft.empty();for(let g=a.length-1;g>=0;--g)if(!DI(u,a[g])){const m=a[g];let T=c[g];T=lt(T);const S=o.Bu(m);if(T instanceof Dc)u.push(m);else{const P=la(T,S);P!=null&&(u.push(m),h.set(m,P))}}const f=new Gt(u);return new PI(h,f,o.fieldTransforms)}function lL(n,e,t,r=!1){return la(t,n.$u(r?4:3,e))}function la(n,e){if(OI(n=lt(n)))return _f("Unsupported field value:",e,n),NI(n,e);if(n instanceof ff)return function(r,s){if(!kI(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=la(a,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:Ll(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ll(s.serializer,i)}}if(r instanceof Oc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:ZT(s.serializer,r._byteString)};if(r instanceof xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return zd(a.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Sc(r)}`)}(n,e)}function NI(n,e){const t={};return ST(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(n,(r,s)=>{const i=la(s,e.Ou(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function OI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof Oc||n instanceof pi||n instanceof xt||n instanceof ff||n instanceof pf)}function _f(n,e,t){if(!OI(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Sc(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Fh(n,e,t){if((e=lt(e))instanceof Nc)return e._internalPath;if(typeof e=="string")return yf(n,e);throw $l("Field path arguments must be of type string or ",n,!1,void 0,t)}const cL=new RegExp("[~\\*/\\[\\]]");function yf(n,e,t){if(e.search(cL)>=0)throw $l(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Nc(...e.split("."))._internalPath}catch{throw $l(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $l(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Z(B.INVALID_ARGUMENT,a+n+c)}function DI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uL extends xI{data(){return super.data()}}function xc(n,e){return typeof e=="string"?yf(n,e):e instanceof Nc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ef{}class LI extends Ef{}function __(n,e,...t){let r=[];e instanceof Ef&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof vf).length,a=i.filter(c=>c instanceof Mc).length;if(o>1||o>0&&a>0)throw new Z(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Mc extends LI{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Mc(e,t,r)}_apply(e){const t=this._parse(e);return VI(e._query,t),new Xr(e.firestore,e.converter,Sh(e._query,t))}_parse(e){const t=mf(e.firestore);return function(i,o,a,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Z(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){v_(f,h);const m=[];for(const T of f)m.push(E_(c,i,T));g={arrayValue:{values:m}}}else g=E_(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||v_(f,h),g=lL(a,o,f,h==="in"||h==="not-in");return Ze.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function hL(n,e,t){const r=e,s=xc("where",n);return Mc._create(s,r,t)}class vf extends Ef{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new vf(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:An.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)VI(o,c),o=Sh(o,c)}(e._query,t),new Xr(e.firestore,e.converter,Sh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tf extends LI{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tf(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jo(i,o)}(e._query,this._field,this._direction);return new Xr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ri(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function y_(n,e="asc"){const t=e,r=xc("orderBy",n);return Tf._create(r,t)}function E_(n,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new Z(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!VT(e)&&t.indexOf("/")!==-1)throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child($e.fromString(t));if(!se.isDocumentKey(r))throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vm(n,new se(r))}if(t instanceof xt)return Vm(n,t._key);throw new Z(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sc(t)}.`)}function v_(n,e){if(!Array.isArray(n)||n.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VI(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class dL{convertValue(e,t="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new pf(i)}convertGeoPoint(e){return new Oc(Ye(e.latitude),Ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=yc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const t=Vr(e);return new et(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=$e.fromString(e);Ne(iI(r));const s=new Bo(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(t)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class FI extends xI{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class rl extends FI{data(e={}){return super.data(e)}}class UI{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ro(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new rl(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new rl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new rl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:pL(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function pL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(n){n=sn(n,xt);const e=sn(n.firestore,$r);return XM(kc(e),n._key).then(t=>$I(e,n,t))}class If extends dL{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,t)}}function gL(n){n=sn(n,Xr);const e=sn(n.firestore,$r),t=kc(e),r=new If(e);return MI(n._query),JM(t,n._query).then(s=>new UI(e,r,n,s))}function T_(n,e,t,...r){n=sn(n,xt);const s=sn(n.firestore,$r),i=mf(s);let o;return o=typeof(e=lt(e))=="string"||e instanceof Nc?aL(i,"updateDoc",n._key,e,t,r):oL(i,"updateDoc",n._key,e),Af(s,[o.toMutation(n._key,En.exists(!0))])}function I_(n){return Af(sn(n.firestore,$r),[new Gd(n._key,En.none())])}function mL(n,e){const t=sn(n.firestore,$r),r=no(n),s=fL(n.converter,e);return Af(t,[iL(mf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,En.exists(!1))]).then(()=>r)}function wf(n,...e){var t,r,s;n=lt(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||m_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(m_(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let c,u,h;if(n instanceof xt)u=sn(n.firestore,$r),h=Ec(n._key.path),c={next:f=>{e[o]&&e[o]($I(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=sn(n,Xr);u=sn(f.firestore,$r),h=f._query;const g=new If(u);c={next:m=>{e[o]&&e[o](new UI(u,g,f,m))},error:e[o+1],complete:e[o+2]},MI(n._query)}return function(g,m,T,S){const P=new df(S),M=new uf(m,P,T);return g.asyncQueue.enqueueAndForget(async()=>af(await Bl(g),M)),()=>{P.eu(),g.asyncQueue.enqueueAndForget(async()=>lf(await Bl(g),M))}}(kc(u),h,a,c)}function Af(n,e){return function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget(async()=>UM(await YM(r),s,i)),i.promise}(kc(n),e)}function $I(n,e,t){const r=t.docs.get(e._key),s=new If(n);return new FI(n,s,e._key,r,new ro(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Ii=s})(zr),Fn(new In("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new $r(new fD(r.getProvider("auth-internal")),new _D(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Qt(Nm,"4.7.5",e),Qt(Nm,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="firebasestorage.googleapis.com",_L="storageBucket",yL=2*60*1e3,EL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends $n{constructor(e,t,r=0){super(ku(e),`Firebase Storage: ${t} (${ku(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ku(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Bn;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Bn||(Bn={}));function ku(n){return"storage/"+n}function vL(){const n="An unknown error occurred, please check the error payload for server response.";return new jn(Bn.UNKNOWN,n)}function TL(){return new jn(Bn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IL(){return new jn(Bn.CANCELED,"User canceled the upload/download.")}function wL(n){return new jn(Bn.INVALID_URL,"Invalid URL '"+n+"'.")}function AL(n){return new jn(Bn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function w_(n){return new jn(Bn.INVALID_ARGUMENT,n)}function qI(){return new jn(Bn.APP_DELETED,"The Firebase app was deleted.")}function RL(n){return new jn(Bn.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=pn.makeFromUrl(e,t)}catch{return new pn(e,"")}if(r.path==="")return r;throw AL(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${s}/o${g}`,"i"),T={bucket:1,path:3},S=t===jI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",M=new RegExp(`^https?://${S}/${s}/${P}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:m,indices:T,postModify:u},{regex:M,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<D.length;x++){const ee=D[x],te=ee.regex.exec(e);if(te){const C=te[ee.indices.bucket];let y=te[ee.indices.path];y||(y=""),r=new pn(C,y),ee.postModify(r);break}}if(r==null)throw wL(e);return r}}class CL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bL(n,e,t){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function f(P){s=setTimeout(()=>{s=null,n(m,c())},P)}function g(){i&&clearTimeout(i)}function m(P,...M){if(u){g();return}if(P){g(),h.call(null,P,...M);return}if(c()||o){g(),h.call(null,P,...M);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,f(D)}let T=!1;function S(P){T||(T=!0,g(),!u&&(s!==null?(P||(a=2),clearTimeout(s),f(0)):P||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,S(!0)},t),S}function SL(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(n){return n!==void 0}function A_(n,e,t,r){if(r<e)throw w_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw w_(`Invalid value for '${n}'. Expected ${t} or less.`)}function kL(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var jl;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(jl||(jl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,t,r,s,i,o,a,c,u,h,f,g=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,T)=>{this.resolve_=m,this.reject_=T,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ba(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===jl.NO_ERROR,c=i.getStatus();if(!a||NL(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===jl.ABORT;r(!1,new Ba(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ba(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());PL(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=vL();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?qI():IL();o(c)}else{const c=TL();o(c)}};this.canceled_?t(!1,new Ba(!1,null,!0)):this.backoffId_=bL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ba{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function DL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function xL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ML(n,e){e&&(n["X-Firebase-GMPID"]=e)}function LL(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function VL(n,e,t,r,s,i,o=!0){const a=kL(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return ML(u,e),DL(u,t),xL(u,i),LL(u,r),new OL(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function UL(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this._service=e,t instanceof pn?this._location=t:this._location=pn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ql(e,t)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return UL(this._location.path)}get storage(){return this._service}get parent(){const e=FL(this._location.path);if(e===null)return null;const t=new pn(this._location.bucket,e);return new ql(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw RL(e)}}function R_(n,e){const t=e==null?void 0:e[_L];return t==null?null:pn.makeFromBucketSpec(t,n)}class BL{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=jI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yL,this._maxUploadRetryTime=EL,this._requests=new Set,s!=null?this._bucket=pn.makeFromBucketSpec(s,this._host):this._bucket=R_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=R_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){A_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){A_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ql(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new CL(qI());{const o=VL(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const C_="@firebase/storage",b_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L="storage";function jL(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new BL(t,r,s,e,zr)}function qL(){Fn(new In($L,jL,"PUBLIC").setMultipleInstances(!0)),Qt(C_,b_,""),Qt(C_,b_,"esm2017")}qL();const Nu=new WeakMap;function WI(n,e){return Nu.has(e)||Nu.set(e,{f:{},r:{},s:{},u:{}}),Nu.get(e)}function WL(n,e,t,r){if(!n)return t;const[s,i]=HI(n);if(!s)return t;const o=WI(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:t}function HL(n,e,t,r){if(!n)return;const[s,i]=HI(n);if(!s)return;const o=WI(void 0,r)[s],a=e||i;if(a)return t.then(c=>{o[a]=c}).catch(kn),a}function HI(n){return m0(n)||_0(n)?["f",n.path]:y0(n)?["r",n.toString()]:E0(n)?["s",n.toString()]:[]}const Ou=new WeakMap;function zL(n,e,t){const r=Jo();Ou.has(r)||Ou.set(r,new Map);const s=Ou.get(r),i=HL(e,t,n,r);return i&&s.set(i,n),i?()=>s.delete(i):kn}const GL={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function Uh(n,e,t,r){if(!p0(n))return[n,{}];const s=[{},{}],i=Object.keys(t).reduce((a,c)=>{const u=t[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,g]=h;Object.getOwnPropertyNames(a).forEach(m=>{const T=Object.getOwnPropertyDescriptor(a,m);T&&!T.enumerable&&Object.defineProperty(f,m,T)});for(const m in a){const T=a[m];if(T==null||T instanceof Date||T instanceof et||T instanceof Oc)f[m]=T;else if(Ed(T)){const S=u+m;f[m]=S in t?c[m]:T.path,g[S]=T.converter?T:T.withConverter(r.converter)}else if(Array.isArray(T)){f[m]=Array(T.length);for(let S=0;S<T.length;S++){const P=T[S];P&&P.path in i&&(f[m][S]=i[P.path])}o(T,c[m]||f[m],u+m+".",[f[m],g])}else ws(T)?(f[m]={},o(T,c[m],u+m+".",[f[m],g])):f[m]=T}}return o(n,e,"",s),s}const Rf={reset:!1,wait:!0,maxRefDepth:2,converter:GL,snapshotOptions:{serverTimestamps:"estimate"}};function Wl(n){for(const e in n)n[e].unsub()}function Bh(n,e,t,r,s,i,o,a,c){const[u,h]=Uh(r.data(n.snapshotOptions),yd(e,t),s,n);i.set(e,t,u),$h(n,e,t,s,h,i,o,a,c)}function KL({ref:n,target:e,path:t,depth:r,resolve:s,reject:i,ops:o},a){const c=Object.create(null);let u=kn;return a.once?BI(n).then(h=>{h.exists()?Bh(a,e,t,h,c,o,r,s,i):(o.set(e,t,null),s())}).catch(i):u=wf(n,h=>{h.exists()?Bh(a,e,t,h,c,o,r,s,i):(o.set(e,t,null),s())},i),()=>{u(),Wl(c)}}function $h(n,e,t,r,s,i,o,a,c){const u=Object.keys(s);if(Object.keys(r).filter(S=>u.indexOf(S)<0).forEach(S=>{r[S].unsub(),delete r[S]}),!u.length||++o>n.maxRefDepth)return a(t);let f=0;const g=u.length,m=Object.create(null);function T(S){S in m&&++f>=g&&a(t)}u.forEach(S=>{const P=r[S],M=s[S],L=`${t}.${S}`;if(m[L]=!0,P)if(P.path!==M.path)P.unsub();else return;r[S]={data:()=>yd(e,L),unsub:KL({ref:M,target:e,path:L,depth:o,ops:i,resolve:T.bind(null,L),reject:c},n),path:M.path}})}function QL(n,e,t,r,s,i){const o=Object.assign({},Rf,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let g=mn(u?[]:n.value);u||t.set(n,f,[]);const m=r;let T,S=kn;const P=[],M={added:({newIndex:D,doc:x})=>{P.splice(D,0,Object.create(null));const ee=P[D],[te,C]=Uh(x.data(c),void 0,ee,o);t.add(Gn(g),D,te),$h(o,g,`${f}.${D}`,ee,C,t,0,r.bind(null,x),s)},modified:({oldIndex:D,newIndex:x,doc:ee})=>{const te=Gn(g),C=P[D],y=te[D],[E,R]=Uh(ee.data(c),y,C,o);P.splice(x,0,C),t.remove(te,D),t.add(te,x,E),$h(o,g,`${f}.${x}`,C,R,t,0,r,s)},removed:({oldIndex:D})=>{const x=Gn(g);t.remove(x,D),Wl(P.splice(D,1)[0])}};function L(D){const x=D.docChanges(a);if(!T&&x.length){T=!0;let ee=0;const te=x.length,C=Object.create(null);for(let y=0;y<te;y++)C[x[y].doc.id]=!0;r=y=>{y&&y.id in C&&++ee>=te&&(u&&(t.set(n,f,Gn(g)),g=n),m(Gn(g)),r=kn)}}x.forEach(ee=>{M[ee.type](ee)}),x.length||(u&&(t.set(n,f,Gn(g)),g=n),r(Gn(g)))}return h?gL(e).then(L).catch(s):S=wf(e,L,s),D=>{if(S(),D){const x=typeof D=="function"?D():[];t.set(n,f,x)}P.forEach(Wl)}}function YL(n,e,t,r,s,i){const o=Object.assign({},Rf,i),a="value",c=Object.create(null);r=v0(r,()=>yd(n,a));let u=kn;function h(f){f.exists()?Bh(o,n,a,f,c,t,0,r,s):(t.set(n,a,null),r(null))}return o.once?BI(e).then(h).catch(s):u=wf(e,h,s),f=>{if(u(),f){const g=typeof f=="function"?f():null;t.set(n,a,g)}Wl(c)}}const S_=Symbol();function XL(n,e){let t=kn;const r=Object.assign({},Rf,e),s=Gn(n),i=r.target||mn();I0()&&(r.once=!0);const o=WL(s,r.ssrKey,S_,Jo()),a=o!==S_;a&&(i.value=o);let c=!a;const u=mn(!1),h=mn(),f=ny(),g=U_();let m=kn;function T(){let M=Gn(n);const L=new Promise((D,x)=>{if(t(r.reset),!M)return t=kn,D(null);u.value=c,c=!0,M.converter||(M=M.withConverter(r.converter)),t=(Ed(M)?YL:QL)(i,M,JL,D,x,r)}).catch(D=>(f.value===L&&(h.value=D),Promise.reject(D))).finally(()=>{f.value===L&&(u.value=!1)});f.value=L}let S=kn;(at(n)||typeof n=="function")&&(S=uo(n,T)),T(),s&&(m=zL(f.value,s,r.ssrKey)),rd()&&vy(()=>f.value),g&&kw(P);function P(M=r.reset){S(),m(),t(M)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>P}})}const JL={set:(n,e,t)=>d0(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function P_(n,e){return XL(n,{target:mn([]),...e})}function ZL(n){return SI(Jo(n))}function eV(n){return tV({initialUser:n,dependencies:{popupRedirectResolver:Dk,persistence:[HP,DP,QE]}})}const zI=Symbol("VueFireAuth");function tV({dependencies:n,initialUser:e}){return(t,r)=>{const[s,i]=nV(t,r,e,n);R0(s,i)}}function nV(n,e,t,r,s=pP(n,r)){const i=w0(n,e).run(()=>mn(t));return ov.set(n,i),e.provide(zI,s),[i,s]}function rV(n){return h0?Kt(zI):null}function sV(n,{firebaseApp:e,modules:t=[]}){n.provide(iv,e);for(const r of t)r(e,n)}const Ss=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},iV={class:"usuario"},oV={__name:"App",setup(n){return lE().beforeEach(async(t,r)=>t.meta.requiresAuth?!!await A0():!0),(t,r)=>{const s=Ip("RouterLink"),i=Ip("RouterView");return zt(),hn(Vt,null,[_e("nav",null,[_e("ul",null,[_e("li",null,[Ge(s,{to:"/"},{default:ao(()=>r[0]||(r[0]=[Pr("inicio")])),_:1})]),_e("li",null,[Ge(s,{to:"/recordatorio"},{default:ao(()=>r[1]||(r[1]=[Pr("ir a recordatorio")])),_:1})]),_e("li",iV,[Ge(s,{to:"/logeoCompleto"},{default:ao(()=>r[2]||(r[2]=[Pr("Usuario")])),_:1})])])]),Ge(i)],64)}}},aV=Ss(oV,[["__scopeId","data-v-2671164d"]]),GI=vE({apiKey:"AIzaSyAr2eIZZsLPVFNVuUT2drhLtmeXUTirO6A",authDomain:"testfirestore-4af0c.firebaseapp.com",projectId:"testfirestore-4af0c",storageBucket:"testfirestore-4af0c.firebasestorage.app",messagingSenderId:"893800609055",appId:"1:893800609055:web:5f736b91af7646d2366c2a",measurementId:"G-SQ44X83FTE"}),lV=SI(GI);nl(lV,"recordatorios");const cV={class:"container"},uV={__name:"cabecera",emits:["altaRecordatorio"],setup(n,{emit:e}){const t=e;var r=mn("");function s(){t("altaRecordatorio",r.value),r.value=""}return(i,o)=>(zt(),hn("div",cV,[o[1]||(o[1]=_e("h1",null,"Proyecto Vue.js - Javier Ruiz Sachez",-1)),Uu(_e("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>at(r)?r.value=a:r=a),placeholder:"¿Qué quieres recordar?",onKeyup:qR(s,["enter"])},null,544),[[Ku,Bt(r)]])]))}},hV=Ss(uV,[["__scopeId","data-v-da79bdef"]]),dV={class:"detalles"},fV=["value"],pV={class:"acciones"},gV={__name:"tareas",props:["titulo","prioridad","fechaCreacion","acabada"],emits:["borrado","completada","actualizarPrioridad"],setup(n,{emit:e}){const t=e;function r(i){t("actualizarPrioridad",i.target.value)}function s(){t("completada")}return(i,o)=>(zt(),hn("div",{class:Yl(["tarea",{completada:n.acabada}])},[_e("div",dV,[_e("h3",null,Sr(n.titulo),1),_e("p",null,[o[2]||(o[2]=Pr(" Priority: ")),_e("select",{value:n.prioridad,onChange:r},o[1]||(o[1]=[_e("option",{value:"alta"},"High",-1),_e("option",{value:"media"},"Medium",-1),_e("option",{value:"baja"},"Low",-1)]),40,fV)]),_e("small",null,"Added: "+Sr(n.fechaCreacion),1)]),_e("div",pV,[_e("button",{onClick:s},Sr(n.acabada?"Uncheck":"Check"),1),_e("button",{onClick:o[0]||(o[0]=a=>i.$emit("borrado"))},"Delete")])],2))}},mV=Ss(gV,[["__scopeId","data-v-28924573"]]),_V={};function yV(n,e){return null}const EV=Ss(_V,[["render",yV],["__scopeId","data-v-ae073b01"]]),vV={__name:"recordatorios",setup(n){const e=av(),t=ZL();let r;e.value.uid==="Uo17udecrNfxrOsagF1LR809Bos2"?r=P_(__(nl(t,"recordatorio"),y_("prioridadValor","desc"))):r=P_(__(nl(t,"recordatorio"),y_("prioridadValor","desc"),hL("user","==",e.value.uid)));function s(f){const g=Date.now(),m=new Date(f).getTime(),T=g-m,S=Math.floor(T/(1e3*60*60*24)),P=Math.floor(T%(1e3*60*60*24)/(1e3*60*60)),M=Math.floor(T%(1e3*60*60)/(1e3*60)),L=[];return S>0&&L.push(`${S} Day${S>1?"s":""}`),P>0&&L.push(`${P} Hour${P>1?"s":""}`),M>0&&L.push(`${M} Minute${M>1?"s":""}`),L.join(", ")||"0 Minutes"}const i=tn(()=>r.value.map(f=>s(f.fechaCreacion)));function o(f,g){const T={titulo:f,prioridad:g||"media",prioridadValor:{baja:1,media:2,alta:3}[g||"media"],fechaCreacion:new Date,acabada:!1,user:e.value.uid};mL(nl(t,"recordatorio"),T).then(()=>{console.log("Nueva tarea añadida")})}function a(f){I_(no(t,"recordatorio",f)).then(()=>{console.log("Tarea borrada exitosamente")}).catch(g=>{console.error("Error al borrar la tarea:",g)})}function c(f){const g=r.value[f],m=no(t,"recordatorio",g.id);T_(m,{acabada:!g.acabada}).then(()=>{console.log("Tarea editada exitosamente")}).catch(T=>{console.error("Error al completar la tarea:",T)})}function u(){r.value.filter(g=>g.acabada).forEach(g=>{I_(no(t,"recordatorio",g.id)).then(()=>{console.log(`Tarea "${g.titulo}" borrada exitosamente`)}).catch(m=>{console.error("Error al borrar una tarea completada:",m)})})}function h(f,g){const m={baja:1,media:2,alta:3};if(!(g in m)){console.error("Prioridad no válida:",g);return}const T=r.value[f],S=no(t,"recordatorio",T.id);T_(S,{prioridad:g,prioridadValor:m[g]}).then(()=>{console.log(`Prioridad actualizada a "${g}" exitosamente`)}).catch(P=>{console.error("Error al actualizar la prioridad:",P)})}return(f,g)=>(zt(),hn(Vt,null,[Ge(hV,{onAltaRecordatorio:o}),_e("main",null,[_e("p",null,[Pr(Sr(Bt(r).filter(m=>!m.prioridadValor.acabada).length)+" Pending tasks out of a total of "+Sr(Bt(r).length)+" ",1),_e("button",{onClick:u},"Delete completed tasks")]),Ge(LR,{name:"list",tag:"ul"},{default:ao(()=>[(zt(!0),hn(Vt,null,TA(Bt(r),(m,T)=>(zt(),hn("li",{key:m.id,class:"list-item"},[Ge(mV,{titulo:m.titulo,prioridad:m.prioridad,fechaCreacion:i.value[T],acabada:m.acabada,onBorrado:S=>a(m.id),onCompletada:S=>c(T),onActualizarPrioridad:S=>h(T,S)},null,8,["titulo","prioridad","fechaCreacion","acabada","onBorrado","onCompletada","onActualizarPrioridad"])]))),128))]),_:1})]),Ge(EV)],64))}},TV=Ss(vV,[["__scopeId","data-v-625d9ee4"]]),IV={},wV={class:"landing-container"};function AV(n,e){return zt(),hn("div",wV,e[0]||(e[0]=[ZA('<header class="hero" data-v-841d0d64><h1 data-v-841d0d64>YOUR REMINDERS MADE EASY, SAFE, AND EFFECTIVE</h1><p data-v-841d0d64>Organize your tasks, stay on track, and never forget something important.</p><a href="https://github.com/Javierruuiz" class="cta-button" data-v-841d0d64>By Javier Ruiz</a></header><section class="features" data-v-841d0d64><div class="feature" data-v-841d0d64><h2 data-v-841d0d64>Easy to Use</h2><p data-v-841d0d64>A simple and user-friendly interface for everyone.</p></div><div class="feature" data-v-841d0d64><h2 data-v-841d0d64>Guaranteed Security</h2><p data-v-841d0d64>Your data will always be protected.</p></div><div class="feature" data-v-841d0d64><h2 data-v-841d0d64>Perfect Organization</h2><p data-v-841d0d64>Effortlessly categorize and prioritize your tasks.</p></div></section>',2)]))}const RV=Ss(IV,[["render",AV],["__scopeId","data-v-841d0d64"]]),CV={class:"container"},bV={key:0,class:"user-info"},SV={key:1,class:"auth-form"},PV={class:"form-group"},kV={key:0,class:"error-message"},NV={__name:"login",setup(n){const e=rV(),t=av(),r=mn(""),s=mn(""),i=mn(null),o=new Xn,a=new Jn,c=lE();function u(){i.value=null,Vg(e,o).then(()=>{c.push("/recordatorio"),console.log("Sesión iniciada con Google")}).catch(T=>{console.error("Error al iniciar sesión con Google:",T),i.value=T.message})}function h(){i.value=null,Vg(e,a).then(()=>{c.push("/recordatorio"),console.log("Sesión iniciada con GitHub")})}function f(){i.value=null,SP(e,r.value,s.value).then(()=>{c.push("/recordatorio"),console.log("Sesión iniciada con correo y contraseña")}).catch(T=>{i.value=T.message})}function g(){i.value=null,bP(e,r.value,s.value).then(()=>{c.push("/recordatorio"),console.log("Usuario registrado e inició sesión")}).catch(T=>{i.value=T.message})}function m(){kP(e).then(()=>{c.push("/"),console.log("Sesión cerrada")}).catch(T=>{console.error("Error al cerrar sesión:",T)})}return(T,S)=>(zt(),hn("div",CV,[Bt(t)?(zt(),hn("div",bV,[_e("p",null,"Hi, "+Sr(Bt(t).displayName||Bt(t).email),1),_e("button",{onClick:m,class:"btn btn-danger"},"Close Sesión")])):(zt(),hn("div",SV,[_e("div",PV,[S[2]||(S[2]=_e("h3",null,"User",-1)),Uu(_e("input",{"onUpdate:modelValue":S[0]||(S[0]=P=>r.value=P),type:"email",placeholder:"Gmail",class:"form-control"},null,512),[[Ku,r.value]]),Uu(_e("input",{"onUpdate:modelValue":S[1]||(S[1]=P=>s.value=P),type:"password",placeholder:"Password",class:"form-control"},null,512),[[Ku,s.value]]),_e("button",{onClick:f,class:"btn btn-primary"},"Login"),_e("button",{onClick:g,class:"btn btn-secondary"},"Register")]),_e("div",{class:"google-signin"},[_e("button",{onClick:u,class:"btn btn-apps"},S[3]||(S[3]=[_e("i",{class:"fab fa-google"},null,-1),Pr(" Google ")])),_e("button",{onClick:h,class:"btn btn-apps"},S[4]||(S[4]=[_e("i",{class:"fab fa-google"},null,-1),Pr(" GitHub ")]))]),i.value?(zt(),hn("p",kV,Sr(i.value),1)):eR("",!0)]))]))}},OV=Ss(NV,[["__scopeId","data-v-39d558e5"]]),DV={__name:"logeoCompleto",setup(n){return(e,t)=>(zt(),By(OV))}},xV=[{path:"/",component:RV,meta:{requiresAuth:!1}},{path:"/recordatorio",component:TV,meta:{requiresAuth:!0}},{path:"/logeoCompleto",component:DV,meta:{requiresAuth:!1}}],MV=KC({history:wC(),routes:xV}),Cf=zR(aV);Cf.use(sV,{firebaseApp:GI,modules:[eV()]});Cf.use(MV);Cf.mount("#app");
