(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Ua(i,t){const n=Object.create(null),s=i.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const it={},es=[],nn=()=>{},bf=()=>!1,Af=/^on[^a-z]/,eo=i=>Af.test(i),Na=i=>i.startsWith("onUpdate:"),vt=Object.assign,Fa=(i,t)=>{const n=i.indexOf(t);n>-1&&i.splice(n,1)},wf=Object.prototype.hasOwnProperty,Ke=(i,t)=>wf.call(i,t),Oe=Array.isArray,Gs=i=>to(i)==="[object Map]",Rf=i=>to(i)==="[object Set]",We=i=>typeof i=="function",Mt=i=>typeof i=="string",Oa=i=>typeof i=="symbol",ft=i=>i!==null&&typeof i=="object",Xu=i=>ft(i)&&We(i.then)&&We(i.catch),Cf=Object.prototype.toString,to=i=>Cf.call(i),Lf=i=>to(i).slice(8,-1),Pf=i=>to(i)==="[object Object]",Ba=i=>Mt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Or=Ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=i=>{const t=Object.create(null);return n=>t[n]||(t[n]=i(n))},If=/-(\w)/g,as=no(i=>i.replace(If,(t,n)=>n?n.toUpperCase():"")),Df=/\B([A-Z])/g,Ms=no(i=>i.replace(Df,"-$1").toLowerCase()),qu=no(i=>i.charAt(0).toUpperCase()+i.slice(1)),_o=no(i=>i?`on${qu(i)}`:""),Xr=(i,t)=>!Object.is(i,t),xo=(i,t)=>{for(let n=0;n<i.length;n++)i[n](t)},qr=(i,t,n)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:n})},Uf=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Al;const oa=()=>Al||(Al=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ha(i){if(Oe(i)){const t={};for(let n=0;n<i.length;n++){const s=i[n],r=Mt(s)?Bf(s):Ha(s);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Mt(i))return i;if(ft(i))return i}}const Nf=/;(?![^(]*\))/g,Ff=/:([^]+)/,Of=/\/\*[^]*?\*\//g;function Bf(i){const t={};return i.replace(Of,"").split(Nf).forEach(n=>{if(n){const s=n.split(Ff);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function za(i){let t="";if(Mt(i))t=i;else if(Oe(i))for(let n=0;n<i.length;n++){const s=za(i[n]);s&&(t+=s+" ")}else if(ft(i))for(const n in i)i[n]&&(t+=n+" ");return t.trim()}const Hf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zf=Ua(Hf);function ju(i){return!!i||i===""}let Jt;class Gf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!t&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Jt;try{return Jt=this,t()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function kf(i,t=Jt){t&&t.active&&t.effects.push(i)}function Vf(){return Jt}const Ga=i=>{const t=new Set(i);return t.w=0,t.n=0,t},Yu=i=>(i.w&ei)>0,Ku=i=>(i.n&ei)>0,Wf=({deps:i})=>{if(i.length)for(let t=0;t<i.length;t++)i[t].w|=ei},Xf=i=>{const{deps:t}=i;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Yu(r)&&!Ku(r)?r.delete(i):t[n++]=r,r.w&=~ei,r.n&=~ei}t.length=n}},aa=new WeakMap;let Bs=0,ei=1;const la=30;let en;const xi=Symbol(""),ca=Symbol("");class ka{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kf(this,s)}run(){if(!this.active)return this.fn();let t=en,n=Kn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=en,en=this,Kn=!0,ei=1<<++Bs,Bs<=la?Wf(this):wl(this),this.fn()}finally{Bs<=la&&Xf(this),ei=1<<--Bs,en=this.parent,Kn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(wl(this),this.onStop&&this.onStop(),this.active=!1)}}function wl(i){const{deps:t}=i;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(i);t.length=0}}let Kn=!0;const $u=[];function ys(){$u.push(Kn),Kn=!1}function Ss(){const i=$u.pop();Kn=i===void 0?!0:i}function Ot(i,t,n){if(Kn&&en){let s=aa.get(i);s||aa.set(i,s=new Map);let r=s.get(n);r||s.set(n,r=Ga()),Zu(r)}}function Zu(i,t){let n=!1;Bs<=la?Ku(i)||(i.n|=ei,n=!Yu(i)):n=!i.has(en),n&&(i.add(en),en.deps.push(i))}function Un(i,t,n,s,r,o){const a=aa.get(i);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&Oe(i)){const c=Number(s);a.forEach((u,h)=>{(h==="length"||h>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(a.get(n)),t){case"add":Oe(i)?Ba(n)&&l.push(a.get("length")):(l.push(a.get(xi)),Gs(i)&&l.push(a.get(ca)));break;case"delete":Oe(i)||(l.push(a.get(xi)),Gs(i)&&l.push(a.get(ca)));break;case"set":Gs(i)&&l.push(a.get(xi));break}if(l.length===1)l[0]&&ua(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);ua(Ga(c))}}function ua(i,t){const n=Oe(i)?i:[...i];for(const s of n)s.computed&&Rl(s);for(const s of n)s.computed||Rl(s)}function Rl(i,t){(i!==en||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const qf=Ua("__proto__,__v_isRef,__isVue"),Ju=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Oa)),jf=Va(),Yf=Va(!1,!0),Kf=Va(!0),Cl=$f();function $f(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...n){const s=Je(this);for(let o=0,a=this.length;o<a;o++)Ot(s,"get",o+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(Je)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...n){ys();const s=Je(this)[t].apply(this,n);return Ss(),s}}),i}function Zf(i){const t=Je(this);return Ot(t,"has",i),t.hasOwnProperty(i)}function Va(i=!1,t=!1){return function(s,r,o){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(i?t?dd:ih:t?nh:th).get(s))return s;const a=Oe(s);if(!i){if(a&&Ke(Cl,r))return Reflect.get(Cl,r,o);if(r==="hasOwnProperty")return Zf}const l=Reflect.get(s,r,o);return(Oa(r)?Ju.has(r):qf(r))||(i||Ot(s,"get",r),t)?l:Dt(l)?a&&Ba(r)?l:l.value:ft(l)?i?sh(l):qa(l):l}}const Jf=Qu(),Qf=Qu(!0);function Qu(i=!1){return function(n,s,r,o){let a=n[s];if(js(a)&&Dt(a)&&!Dt(r))return!1;if(!i&&(!ha(r)&&!js(r)&&(a=Je(a),r=Je(r)),!Oe(n)&&Dt(a)&&!Dt(r)))return a.value=r,!0;const l=Oe(n)&&Ba(s)?Number(s)<n.length:Ke(n,s),c=Reflect.set(n,s,r,o);return n===Je(o)&&(l?Xr(r,a)&&Un(n,"set",s,r):Un(n,"add",s,r)),c}}function ed(i,t){const n=Ke(i,t);i[t];const s=Reflect.deleteProperty(i,t);return s&&n&&Un(i,"delete",t,void 0),s}function td(i,t){const n=Reflect.has(i,t);return(!Oa(t)||!Ju.has(t))&&Ot(i,"has",t),n}function nd(i){return Ot(i,"iterate",Oe(i)?"length":xi),Reflect.ownKeys(i)}const eh={get:jf,set:Jf,deleteProperty:ed,has:td,ownKeys:nd},id={get:Kf,set(i,t){return!0},deleteProperty(i,t){return!0}},sd=vt({},eh,{get:Yf,set:Qf}),Wa=i=>i,io=i=>Reflect.getPrototypeOf(i);function or(i,t,n=!1,s=!1){i=i.__v_raw;const r=Je(i),o=Je(t);n||(t!==o&&Ot(r,"get",t),Ot(r,"get",o));const{has:a}=io(r),l=s?Wa:n?Ka:Ya;if(a.call(r,t))return l(i.get(t));if(a.call(r,o))return l(i.get(o));i!==r&&i.get(t)}function ar(i,t=!1){const n=this.__v_raw,s=Je(n),r=Je(i);return t||(i!==r&&Ot(s,"has",i),Ot(s,"has",r)),i===r?n.has(i):n.has(i)||n.has(r)}function lr(i,t=!1){return i=i.__v_raw,!t&&Ot(Je(i),"iterate",xi),Reflect.get(i,"size",i)}function Ll(i){i=Je(i);const t=Je(this);return io(t).has.call(t,i)||(t.add(i),Un(t,"add",i,i)),this}function Pl(i,t){t=Je(t);const n=Je(this),{has:s,get:r}=io(n);let o=s.call(n,i);o||(i=Je(i),o=s.call(n,i));const a=r.call(n,i);return n.set(i,t),o?Xr(t,a)&&Un(n,"set",i,t):Un(n,"add",i,t),this}function Il(i){const t=Je(this),{has:n,get:s}=io(t);let r=n.call(t,i);r||(i=Je(i),r=n.call(t,i)),s&&s.call(t,i);const o=t.delete(i);return r&&Un(t,"delete",i,void 0),o}function Dl(){const i=Je(this),t=i.size!==0,n=i.clear();return t&&Un(i,"clear",void 0,void 0),n}function cr(i,t){return function(s,r){const o=this,a=o.__v_raw,l=Je(a),c=t?Wa:i?Ka:Ya;return!i&&Ot(l,"iterate",xi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}}function ur(i,t,n){return function(...s){const r=this.__v_raw,o=Je(r),a=Gs(o),l=i==="entries"||i===Symbol.iterator&&a,c=i==="keys"&&a,u=r[i](...s),h=n?Wa:t?Ka:Ya;return!t&&Ot(o,"iterate",c?ca:xi),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:l?[h(f[0]),h(f[1])]:h(f),done:d}},[Symbol.iterator](){return this}}}}function Bn(i){return function(...t){return i==="delete"?!1:this}}function rd(){const i={get(o){return or(this,o)},get size(){return lr(this)},has:ar,add:Ll,set:Pl,delete:Il,clear:Dl,forEach:cr(!1,!1)},t={get(o){return or(this,o,!1,!0)},get size(){return lr(this)},has:ar,add:Ll,set:Pl,delete:Il,clear:Dl,forEach:cr(!1,!0)},n={get(o){return or(this,o,!0)},get size(){return lr(this,!0)},has(o){return ar.call(this,o,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:cr(!0,!1)},s={get(o){return or(this,o,!0,!0)},get size(){return lr(this,!0)},has(o){return ar.call(this,o,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{i[o]=ur(o,!1,!1),n[o]=ur(o,!0,!1),t[o]=ur(o,!1,!0),s[o]=ur(o,!0,!0)}),[i,n,t,s]}const[od,ad,ld,cd]=rd();function Xa(i,t){const n=t?i?cd:ld:i?ad:od;return(s,r,o)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?s:Reflect.get(Ke(n,r)&&r in s?n:s,r,o)}const ud={get:Xa(!1,!1)},hd={get:Xa(!1,!0)},fd={get:Xa(!0,!1)},th=new WeakMap,nh=new WeakMap,ih=new WeakMap,dd=new WeakMap;function pd(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function md(i){return i.__v_skip||!Object.isExtensible(i)?0:pd(Lf(i))}function qa(i){return js(i)?i:ja(i,!1,eh,ud,th)}function gd(i){return ja(i,!1,sd,hd,nh)}function sh(i){return ja(i,!0,id,fd,ih)}function ja(i,t,n,s,r){if(!ft(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const o=r.get(i);if(o)return o;const a=md(i);if(a===0)return i;const l=new Proxy(i,a===2?s:n);return r.set(i,l),l}function ts(i){return js(i)?ts(i.__v_raw):!!(i&&i.__v_isReactive)}function js(i){return!!(i&&i.__v_isReadonly)}function ha(i){return!!(i&&i.__v_isShallow)}function rh(i){return ts(i)||js(i)}function Je(i){const t=i&&i.__v_raw;return t?Je(t):i}function oh(i){return qr(i,"__v_skip",!0),i}const Ya=i=>ft(i)?qa(i):i,Ka=i=>ft(i)?sh(i):i;function _d(i){Kn&&en&&(i=Je(i),Zu(i.dep||(i.dep=Ga())))}function xd(i,t){i=Je(i);const n=i.dep;n&&ua(n)}function Dt(i){return!!(i&&i.__v_isRef===!0)}function vd(i){return Dt(i)?i.value:i}const Md={get:(i,t,n)=>vd(Reflect.get(i,t,n)),set:(i,t,n,s)=>{const r=i[t];return Dt(r)&&!Dt(n)?(r.value=n,!0):Reflect.set(i,t,n,s)}};function ah(i){return ts(i)?i:new Proxy(i,Md)}class yd{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ka(t,()=>{this._dirty||(this._dirty=!0,xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=Je(this);return _d(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Sd(i,t,n=!1){let s,r;const o=We(i);return o?(s=i,r=nn):(s=i.get,r=i.set),new yd(s,r,o||!r,n)}function $n(i,t,n,s){let r;try{r=s?i(...s):i()}catch(o){so(o,t,n)}return r}function sn(i,t,n,s){if(We(i)){const o=$n(i,t,n,s);return o&&Xu(o)&&o.catch(a=>{so(a,t,n)}),o}const r=[];for(let o=0;o<i.length;o++)r.push(sn(i[o],t,n,s));return r}function so(i,t,n,s=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,l=n;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,a,l)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){$n(c,null,10,[i,a,l]);return}}Ed(i,n,r,s)}function Ed(i,t,n,s=!0){console.error(i)}let Ys=!1,fa=!1;const Tt=[];let fn=0;const ns=[];let Pn=null,pi=0;const lh=Promise.resolve();let $a=null;function Td(i){const t=$a||lh;return i?t.then(this?i.bind(this):i):t}function bd(i){let t=fn+1,n=Tt.length;for(;t<n;){const s=t+n>>>1;Ks(Tt[s])<i?t=s+1:n=s}return t}function Za(i){(!Tt.length||!Tt.includes(i,Ys&&i.allowRecurse?fn+1:fn))&&(i.id==null?Tt.push(i):Tt.splice(bd(i.id),0,i),ch())}function ch(){!Ys&&!fa&&(fa=!0,$a=lh.then(hh))}function Ad(i){const t=Tt.indexOf(i);t>fn&&Tt.splice(t,1)}function wd(i){Oe(i)?ns.push(...i):(!Pn||!Pn.includes(i,i.allowRecurse?pi+1:pi))&&ns.push(i),ch()}function Ul(i,t=Ys?fn+1:0){for(;t<Tt.length;t++){const n=Tt[t];n&&n.pre&&(Tt.splice(t,1),t--,n())}}function uh(i){if(ns.length){const t=[...new Set(ns)];if(ns.length=0,Pn){Pn.push(...t);return}for(Pn=t,Pn.sort((n,s)=>Ks(n)-Ks(s)),pi=0;pi<Pn.length;pi++)Pn[pi]();Pn=null,pi=0}}const Ks=i=>i.id==null?1/0:i.id,Rd=(i,t)=>{const n=Ks(i)-Ks(t);if(n===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return n};function hh(i){fa=!1,Ys=!0,Tt.sort(Rd);const t=nn;try{for(fn=0;fn<Tt.length;fn++){const n=Tt[fn];n&&n.active!==!1&&$n(n,null,14)}}finally{fn=0,Tt.length=0,uh(),Ys=!1,$a=null,(Tt.length||ns.length)&&hh()}}function Cd(i,t,...n){if(i.isUnmounted)return;const s=i.vnode.props||it;let r=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in s){const h=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=s[h]||it;d&&(r=n.map(m=>Mt(m)?m.trim():m)),f&&(r=n.map(Uf))}let l,c=s[l=_o(t)]||s[l=_o(as(t))];!c&&o&&(c=s[l=_o(Ms(t))]),c&&sn(c,i,6,r);const u=s[l+"Once"];if(u){if(!i.emitted)i.emitted={};else if(i.emitted[l])return;i.emitted[l]=!0,sn(u,i,6,r)}}function fh(i,t,n=!1){const s=t.emitsCache,r=s.get(i);if(r!==void 0)return r;const o=i.emits;let a={},l=!1;if(!We(i)){const c=u=>{const h=fh(u,t,!0);h&&(l=!0,vt(a,h))};!n&&t.mixins.length&&t.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}return!o&&!l?(ft(i)&&s.set(i,null),null):(Oe(o)?o.forEach(c=>a[c]=null):vt(a,o),ft(i)&&s.set(i,a),a)}function ro(i,t){return!i||!eo(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ke(i,t[0].toLowerCase()+t.slice(1))||Ke(i,Ms(t))||Ke(i,t))}let mn=null,dh=null;function jr(i){const t=mn;return mn=i,dh=i&&i.type.__scopeId||null,t}function Ld(i,t=mn,n){if(!t||i._n)return i;const s=(...r)=>{s._d&&Wl(-1);const o=jr(t);let a;try{a=i(...r)}finally{jr(o),s._d&&Wl(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function vo(i){const{type:t,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[a],slots:l,attrs:c,emit:u,render:h,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:x}=i;let g,p;const A=jr(i);try{if(n.shapeFlag&4){const E=r||s;g=un(h.call(E,E,f,o,m,d,_)),p=c}else{const E=t;g=un(E.length>1?E(o,{attrs:c,slots:l,emit:u}):E(o,null)),p=t.props?c:Pd(c)}}catch(E){Vs.length=0,so(E,i,1),g=jt(Ti)}let S=g;if(p&&x!==!1){const E=Object.keys(p),{shapeFlag:R}=S;E.length&&R&7&&(a&&E.some(Na)&&(p=Id(p,a)),S=ls(S,p))}return n.dirs&&(S=ls(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),g=S,jr(A),g}const Pd=i=>{let t;for(const n in i)(n==="class"||n==="style"||eo(n))&&((t||(t={}))[n]=i[n]);return t},Id=(i,t)=>{const n={};for(const s in i)(!Na(s)||!(s.slice(9)in t))&&(n[s]=i[s]);return n};function Dd(i,t,n){const{props:s,children:r,component:o}=i,{props:a,children:l,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nl(s,a,u):!!a;if(c&8){const h=t.dynamicProps;for(let f=0;f<h.length;f++){const d=h[f];if(a[d]!==s[d]&&!ro(u,d))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?Nl(s,a,u):!0:!!a;return!1}function Nl(i,t,n){const s=Object.keys(t);if(s.length!==Object.keys(i).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==i[o]&&!ro(n,o))return!0}return!1}function Ud({vnode:i,parent:t},n){for(;t&&t.subTree===i;)(i=t.vnode).el=n,t=t.parent}const Nd=i=>i.__isSuspense;function Fd(i,t){t&&t.pendingBranch?Oe(i)?t.effects.push(...i):t.effects.push(i):wd(i)}const hr={};function Mo(i,t,n){return ph(i,t,n)}function ph(i,t,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:a}=it){var l;const c=Vf()===((l=bt)==null?void 0:l.scope)?bt:null;let u,h=!1,f=!1;if(Dt(i)?(u=()=>i.value,h=ha(i)):ts(i)?(u=()=>i,s=!0):Oe(i)?(f=!0,h=i.some(E=>ts(E)||ha(E)),u=()=>i.map(E=>{if(Dt(E))return E.value;if(ts(E))return Ji(E);if(We(E))return $n(E,c,2)})):We(i)?t?u=()=>$n(i,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),sn(i,c,3,[m])}:u=nn,t&&s){const E=u;u=()=>Ji(E())}let d,m=E=>{d=A.onStop=()=>{$n(E,c,4)}},_;if(Zs)if(m=nn,t?n&&sn(t,c,3,[u(),f?[]:void 0,m]):u(),r==="sync"){const E=Up();_=E.__watcherHandles||(E.__watcherHandles=[])}else return nn;let x=f?new Array(i.length).fill(hr):hr;const g=()=>{if(A.active)if(t){const E=A.run();(s||h||(f?E.some((R,L)=>Xr(R,x[L])):Xr(E,x)))&&(d&&d(),sn(t,c,3,[E,x===hr?void 0:f&&x[0]===hr?[]:x,m]),x=E)}else A.run()};g.allowRecurse=!!t;let p;r==="sync"?p=g:r==="post"?p=()=>Ut(g,c&&c.suspense):(g.pre=!0,c&&(g.id=c.uid),p=()=>Za(g));const A=new ka(u,p);t?n?g():x=A.run():r==="post"?Ut(A.run.bind(A),c&&c.suspense):A.run();const S=()=>{A.stop(),c&&c.scope&&Fa(c.scope.effects,A)};return _&&_.push(S),S}function Od(i,t,n){const s=this.proxy,r=Mt(i)?i.includes(".")?mh(s,i):()=>s[i]:i.bind(s,s);let o;We(t)?o=t:(o=t.handler,n=t);const a=bt;cs(this);const l=ph(r,o.bind(s),n);return a?cs(a):vi(),l}function mh(i,t){const n=t.split(".");return()=>{let s=i;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ji(i,t){if(!ft(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),Dt(i))Ji(i.value,t);else if(Oe(i))for(let n=0;n<i.length;n++)Ji(i[n],t);else if(Rf(i)||Gs(i))i.forEach(n=>{Ji(n,t)});else if(Pf(i))for(const n in i)Ji(i[n],t);return i}function ri(i,t,n,s){const r=i.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){const l=r[a];o&&(l.oldValue=o[a].value);let c=l.dir[s];c&&(ys(),sn(c,n,8,[i.el,l,i,t]),Ss())}}const Br=i=>!!i.type.__asyncLoader,gh=i=>i.type.__isKeepAlive;function Bd(i,t){_h(i,"a",t)}function Hd(i,t){_h(i,"da",t)}function _h(i,t,n=bt){const s=i.__wdc||(i.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(oo(t,s,n),n){let r=n.parent;for(;r&&r.parent;)gh(r.parent.vnode)&&zd(s,t,n,r),r=r.parent}}function zd(i,t,n,s){const r=oo(t,i,s,!0);xh(()=>{Fa(s[t],r)},n)}function oo(i,t,n=bt,s=!1){if(n){const r=n[i]||(n[i]=[]),o=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;ys(),cs(n);const l=sn(t,n,i,a);return vi(),Ss(),l});return s?r.unshift(o):r.push(o),o}}const Fn=i=>(t,n=bt)=>(!Zs||i==="sp")&&oo(i,(...s)=>t(...s),n),Gd=Fn("bm"),kd=Fn("m"),Vd=Fn("bu"),Wd=Fn("u"),Xd=Fn("bum"),xh=Fn("um"),qd=Fn("sp"),jd=Fn("rtg"),Yd=Fn("rtc");function Kd(i,t=bt){oo("ec",i,t)}const $d=Symbol.for("v-ndc"),da=i=>i?Ch(i)?nl(i)||i.proxy:da(i.parent):null,ks=vt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>da(i.parent),$root:i=>da(i.root),$emit:i=>i.emit,$options:i=>Ja(i),$forceUpdate:i=>i.f||(i.f=()=>Za(i.update)),$nextTick:i=>i.n||(i.n=Td.bind(i.proxy)),$watch:i=>Od.bind(i)}),yo=(i,t)=>i!==it&&!i.__isScriptSetup&&Ke(i,t),Zd={get({_:i},t){const{ctx:n,setupState:s,data:r,props:o,accessCache:a,type:l,appContext:c}=i;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(yo(s,t))return a[t]=1,s[t];if(r!==it&&Ke(r,t))return a[t]=2,r[t];if((u=i.propsOptions[0])&&Ke(u,t))return a[t]=3,o[t];if(n!==it&&Ke(n,t))return a[t]=4,n[t];pa&&(a[t]=0)}}const h=ks[t];let f,d;if(h)return t==="$attrs"&&Ot(i,"get",t),h(i);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==it&&Ke(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,Ke(d,t))return d[t]},set({_:i},t,n){const{data:s,setupState:r,ctx:o}=i;return yo(r,t)?(r[t]=n,!0):s!==it&&Ke(s,t)?(s[t]=n,!0):Ke(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(o[t]=n,!0)},has({_:{data:i,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},a){let l;return!!n[a]||i!==it&&Ke(i,a)||yo(t,a)||(l=o[0])&&Ke(l,a)||Ke(s,a)||Ke(ks,a)||Ke(r.config.globalProperties,a)},defineProperty(i,t,n){return n.get!=null?i._.accessCache[t]=0:Ke(n,"value")&&this.set(i,t,n.value,null),Reflect.defineProperty(i,t,n)}};function Fl(i){return Oe(i)?i.reduce((t,n)=>(t[n]=null,t),{}):i}let pa=!0;function Jd(i){const t=Ja(i),n=i.proxy,s=i.ctx;pa=!1,t.beforeCreate&&Ol(t.beforeCreate,i,"bc");const{data:r,computed:o,methods:a,watch:l,provide:c,inject:u,created:h,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:x,deactivated:g,beforeDestroy:p,beforeUnmount:A,destroyed:S,unmounted:E,render:R,renderTracked:L,renderTriggered:C,errorCaptured:j,serverPrefetch:T,expose:w,inheritAttrs:ce,components:ue,directives:k,filters:Y}=t;if(u&&Qd(u,s,null),a)for(const U in a){const O=a[U];We(O)&&(s[U]=O.bind(n))}if(r){const U=r.call(n,n);ft(U)&&(i.data=qa(U))}if(pa=!0,o)for(const U in o){const O=o[U],se=We(O)?O.bind(n,n):We(O.get)?O.get.bind(n,n):nn,te=!We(O)&&We(O.set)?O.set.bind(n):nn,G=Ip({get:se,set:te});Object.defineProperty(s,U,{enumerable:!0,configurable:!0,get:()=>G.value,set:X=>G.value=X})}if(l)for(const U in l)vh(l[U],s,n,U);if(c){const U=We(c)?c.call(n):c;Reflect.ownKeys(U).forEach(O=>{rp(O,U[O])})}h&&Ol(h,i,"c");function re(U,O){Oe(O)?O.forEach(se=>U(se.bind(n))):O&&U(O.bind(n))}if(re(Gd,f),re(kd,d),re(Vd,m),re(Wd,_),re(Bd,x),re(Hd,g),re(Kd,j),re(Yd,L),re(jd,C),re(Xd,A),re(xh,E),re(qd,T),Oe(w))if(w.length){const U=i.exposed||(i.exposed={});w.forEach(O=>{Object.defineProperty(U,O,{get:()=>n[O],set:se=>n[O]=se})})}else i.exposed||(i.exposed={});R&&i.render===nn&&(i.render=R),ce!=null&&(i.inheritAttrs=ce),ue&&(i.components=ue),k&&(i.directives=k)}function Qd(i,t,n=nn){Oe(i)&&(i=ma(i));for(const s in i){const r=i[s];let o;ft(r)?"default"in r?o=Hr(r.from||s,r.default,!0):o=Hr(r.from||s):o=Hr(r),Dt(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[s]=o}}function Ol(i,t,n){sn(Oe(i)?i.map(s=>s.bind(t.proxy)):i.bind(t.proxy),t,n)}function vh(i,t,n,s){const r=s.includes(".")?mh(n,s):()=>n[s];if(Mt(i)){const o=t[i];We(o)&&Mo(r,o)}else if(We(i))Mo(r,i.bind(n));else if(ft(i))if(Oe(i))i.forEach(o=>vh(o,t,n,s));else{const o=We(i.handler)?i.handler.bind(n):t[i.handler];We(o)&&Mo(r,o,i)}}function Ja(i){const t=i.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=i.appContext,l=o.get(t);let c;return l?c=l:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>Yr(c,u,a,!0)),Yr(c,t,a)),ft(t)&&o.set(t,c),c}function Yr(i,t,n,s=!1){const{mixins:r,extends:o}=t;o&&Yr(i,o,n,!0),r&&r.forEach(a=>Yr(i,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const l=ep[a]||n&&n[a];i[a]=l?l(i[a],t[a]):t[a]}return i}const ep={data:Bl,props:Hl,emits:Hl,methods:Hs,computed:Hs,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Hs,directives:Hs,watch:np,provide:Bl,inject:tp};function Bl(i,t){return t?i?function(){return vt(We(i)?i.call(this,this):i,We(t)?t.call(this,this):t)}:t:i}function tp(i,t){return Hs(ma(i),ma(t))}function ma(i){if(Oe(i)){const t={};for(let n=0;n<i.length;n++)t[i[n]]=i[n];return t}return i}function Lt(i,t){return i?[...new Set([].concat(i,t))]:t}function Hs(i,t){return i?vt(Object.create(null),i,t):t}function Hl(i,t){return i?Oe(i)&&Oe(t)?[...new Set([...i,...t])]:vt(Object.create(null),Fl(i),Fl(t??{})):t}function np(i,t){if(!i)return t;if(!t)return i;const n=vt(Object.create(null),i);for(const s in t)n[s]=Lt(i[s],t[s]);return n}function Mh(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ip=0;function sp(i,t){return function(s,r=null){We(s)||(s=vt({},s)),r!=null&&!ft(r)&&(r=null);const o=Mh(),a=new Set;let l=!1;const c=o.app={_uid:ip++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Np,get config(){return o.config},set config(u){},use(u,...h){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...h)):We(u)&&(a.add(u),u(c,...h))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,h){return h?(o.components[u]=h,c):o.components[u]},directive(u,h){return h?(o.directives[u]=h,c):o.directives[u]},mount(u,h,f){if(!l){const d=jt(s,r);return d.appContext=o,h&&t?t(d,u):i(d,u,f),l=!0,c._container=u,u.__vue_app__=c,nl(d.component)||d.component.proxy}},unmount(){l&&(i(null,c._container),delete c._container.__vue_app__)},provide(u,h){return o.provides[u]=h,c},runWithContext(u){Kr=c;try{return u()}finally{Kr=null}}};return c}}let Kr=null;function rp(i,t){if(bt){let n=bt.provides;const s=bt.parent&&bt.parent.provides;s===n&&(n=bt.provides=Object.create(s)),n[i]=t}}function Hr(i,t,n=!1){const s=bt||mn;if(s||Kr){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Kr._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return n&&We(t)?t.call(s&&s.proxy):t}}function op(i,t,n,s=!1){const r={},o={};qr(o,lo,1),i.propsDefaults=Object.create(null),yh(i,t,r,o);for(const a in i.propsOptions[0])a in r||(r[a]=void 0);n?i.props=s?r:gd(r):i.type.props?i.props=r:i.props=o,i.attrs=o}function ap(i,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:a}}=i,l=Je(r),[c]=i.propsOptions;let u=!1;if((s||a>0)&&!(a&16)){if(a&8){const h=i.vnode.dynamicProps;for(let f=0;f<h.length;f++){let d=h[f];if(ro(i.emitsOptions,d))continue;const m=t[d];if(c)if(Ke(o,d))m!==o[d]&&(o[d]=m,u=!0);else{const _=as(d);r[_]=ga(c,l,_,m,i,!1)}else m!==o[d]&&(o[d]=m,u=!0)}}}else{yh(i,t,r,o)&&(u=!0);let h;for(const f in l)(!t||!Ke(t,f)&&((h=Ms(f))===f||!Ke(t,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(r[f]=ga(c,l,f,void 0,i,!0)):delete r[f]);if(o!==l)for(const f in o)(!t||!Ke(t,f))&&(delete o[f],u=!0)}u&&Un(i,"set","$attrs")}function yh(i,t,n,s){const[r,o]=i.propsOptions;let a=!1,l;if(t)for(let c in t){if(Or(c))continue;const u=t[c];let h;r&&Ke(r,h=as(c))?!o||!o.includes(h)?n[h]=u:(l||(l={}))[h]=u:ro(i.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,a=!0)}if(o){const c=Je(n),u=l||it;for(let h=0;h<o.length;h++){const f=o[h];n[f]=ga(r,c,f,u[f],i,!Ke(u,f))}}return a}function ga(i,t,n,s,r,o){const a=i[n];if(a!=null){const l=Ke(a,"default");if(l&&s===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&We(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(cs(r),s=u[n]=c.call(null,t),vi())}else s=c}a[0]&&(o&&!l?s=!1:a[1]&&(s===""||s===Ms(n))&&(s=!0))}return s}function Sh(i,t,n=!1){const s=t.propsCache,r=s.get(i);if(r)return r;const o=i.props,a={},l=[];let c=!1;if(!We(i)){const h=f=>{c=!0;const[d,m]=Sh(f,t,!0);vt(a,d),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!o&&!c)return ft(i)&&s.set(i,es),es;if(Oe(o))for(let h=0;h<o.length;h++){const f=as(o[h]);zl(f)&&(a[f]=it)}else if(o)for(const h in o){const f=as(h);if(zl(f)){const d=o[h],m=a[f]=Oe(d)||We(d)?{type:d}:vt({},d);if(m){const _=Vl(Boolean,m.type),x=Vl(String,m.type);m[0]=_>-1,m[1]=x<0||_<x,(_>-1||Ke(m,"default"))&&l.push(f)}}}const u=[a,l];return ft(i)&&s.set(i,u),u}function zl(i){return i[0]!=="$"}function Gl(i){const t=i&&i.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:i===null?"null":""}function kl(i,t){return Gl(i)===Gl(t)}function Vl(i,t){return Oe(t)?t.findIndex(n=>kl(n,i)):We(t)&&kl(t,i)?0:-1}const Eh=i=>i[0]==="_"||i==="$stable",Qa=i=>Oe(i)?i.map(un):[un(i)],lp=(i,t,n)=>{if(t._n)return t;const s=Ld((...r)=>Qa(t(...r)),n);return s._c=!1,s},Th=(i,t,n)=>{const s=i._ctx;for(const r in i){if(Eh(r))continue;const o=i[r];if(We(o))t[r]=lp(r,o,s);else if(o!=null){const a=Qa(o);t[r]=()=>a}}},bh=(i,t)=>{const n=Qa(t);i.slots.default=()=>n},cp=(i,t)=>{if(i.vnode.shapeFlag&32){const n=t._;n?(i.slots=Je(t),qr(t,"_",n)):Th(t,i.slots={})}else i.slots={},t&&bh(i,t);qr(i.slots,lo,1)},up=(i,t,n)=>{const{vnode:s,slots:r}=i;let o=!0,a=it;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:(vt(r,t),!n&&l===1&&delete r._):(o=!t.$stable,Th(t,r)),a=t}else t&&(bh(i,t),a={default:1});if(o)for(const l in r)!Eh(l)&&!(l in a)&&delete r[l]};function _a(i,t,n,s,r=!1){if(Oe(i)){i.forEach((d,m)=>_a(d,t&&(Oe(t)?t[m]:t),n,s,r));return}if(Br(s)&&!r)return;const o=s.shapeFlag&4?nl(s.component)||s.component.proxy:s.el,a=r?null:o,{i:l,r:c}=i,u=t&&t.r,h=l.refs===it?l.refs={}:l.refs,f=l.setupState;if(u!=null&&u!==c&&(Mt(u)?(h[u]=null,Ke(f,u)&&(f[u]=null)):Dt(u)&&(u.value=null)),We(c))$n(c,l,12,[a,h]);else{const d=Mt(c),m=Dt(c);if(d||m){const _=()=>{if(i.f){const x=d?Ke(f,c)?f[c]:h[c]:c.value;r?Oe(x)&&Fa(x,o):Oe(x)?x.includes(o)||x.push(o):d?(h[c]=[o],Ke(f,c)&&(f[c]=h[c])):(c.value=[o],i.k&&(h[i.k]=c.value))}else d?(h[c]=a,Ke(f,c)&&(f[c]=a)):m&&(c.value=a,i.k&&(h[i.k]=a))};a?(_.id=-1,Ut(_,n)):_()}}}const Ut=Fd;function hp(i){return fp(i)}function fp(i,t){const n=oa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:a,createText:l,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:d,setScopeId:m=nn,insertStaticContent:_}=i,x=(v,P,F,V=null,z=null,oe=null,ae=!1,J=null,le=!!P.dynamicChildren)=>{if(v===P)return;v&&!Cs(v,P)&&(V=Le(v),X(v,z,oe,!0),v=null),P.patchFlag===-2&&(le=!1,P.dynamicChildren=null);const{type:ie,ref:ye,shapeFlag:y}=P;switch(ie){case ao:g(v,P,F,V);break;case Ti:p(v,P,F,V);break;case zr:v==null&&A(P,F,V,ae);break;case cn:ue(v,P,F,V,z,oe,ae,J,le);break;default:y&1?R(v,P,F,V,z,oe,ae,J,le):y&6?k(v,P,F,V,z,oe,ae,J,le):(y&64||y&128)&&ie.process(v,P,F,V,z,oe,ae,J,le,Xe)}ye!=null&&z&&_a(ye,v&&v.ref,oe,P||v,!P)},g=(v,P,F,V)=>{if(v==null)s(P.el=l(P.children),F,V);else{const z=P.el=v.el;P.children!==v.children&&u(z,P.children)}},p=(v,P,F,V)=>{v==null?s(P.el=c(P.children||""),F,V):P.el=v.el},A=(v,P,F,V)=>{[v.el,v.anchor]=_(v.children,P,F,V,v.el,v.anchor)},S=({el:v,anchor:P},F,V)=>{let z;for(;v&&v!==P;)z=d(v),s(v,F,V),v=z;s(P,F,V)},E=({el:v,anchor:P})=>{let F;for(;v&&v!==P;)F=d(v),r(v),v=F;r(P)},R=(v,P,F,V,z,oe,ae,J,le)=>{ae=ae||P.type==="svg",v==null?L(P,F,V,z,oe,ae,J,le):T(v,P,z,oe,ae,J,le)},L=(v,P,F,V,z,oe,ae,J)=>{let le,ie;const{type:ye,props:y,shapeFlag:M,transition:D,dirs:Q}=v;if(le=v.el=a(v.type,oe,y&&y.is,y),M&8?h(le,v.children):M&16&&j(v.children,le,null,V,z,oe&&ye!=="foreignObject",ae,J),Q&&ri(v,null,V,"created"),C(le,v,v.scopeId,ae,V),y){for(const ne in y)ne!=="value"&&!Or(ne)&&o(le,ne,null,y[ne],oe,v.children,V,z,Te);"value"in y&&o(le,"value",null,y.value),(ie=y.onVnodeBeforeMount)&&ln(ie,V,v)}Q&&ri(v,null,V,"beforeMount");const ee=(!z||z&&!z.pendingBranch)&&D&&!D.persisted;ee&&D.beforeEnter(le),s(le,P,F),((ie=y&&y.onVnodeMounted)||ee||Q)&&Ut(()=>{ie&&ln(ie,V,v),ee&&D.enter(le),Q&&ri(v,null,V,"mounted")},z)},C=(v,P,F,V,z)=>{if(F&&m(v,F),V)for(let oe=0;oe<V.length;oe++)m(v,V[oe]);if(z){let oe=z.subTree;if(P===oe){const ae=z.vnode;C(v,ae,ae.scopeId,ae.slotScopeIds,z.parent)}}},j=(v,P,F,V,z,oe,ae,J,le=0)=>{for(let ie=le;ie<v.length;ie++){const ye=v[ie]=J?Xn(v[ie]):un(v[ie]);x(null,ye,P,F,V,z,oe,ae,J)}},T=(v,P,F,V,z,oe,ae)=>{const J=P.el=v.el;let{patchFlag:le,dynamicChildren:ie,dirs:ye}=P;le|=v.patchFlag&16;const y=v.props||it,M=P.props||it;let D;F&&oi(F,!1),(D=M.onVnodeBeforeUpdate)&&ln(D,F,P,v),ye&&ri(P,v,F,"beforeUpdate"),F&&oi(F,!0);const Q=z&&P.type!=="foreignObject";if(ie?w(v.dynamicChildren,ie,J,F,V,Q,oe):ae||O(v,P,J,null,F,V,Q,oe,!1),le>0){if(le&16)ce(J,P,y,M,F,V,z);else if(le&2&&y.class!==M.class&&o(J,"class",null,M.class,z),le&4&&o(J,"style",y.style,M.style,z),le&8){const ee=P.dynamicProps;for(let ne=0;ne<ee.length;ne++){const pe=ee[ne],he=y[pe],W=M[pe];(W!==he||pe==="value")&&o(J,pe,he,W,z,v.children,F,V,Te)}}le&1&&v.children!==P.children&&h(J,P.children)}else!ae&&ie==null&&ce(J,P,y,M,F,V,z);((D=M.onVnodeUpdated)||ye)&&Ut(()=>{D&&ln(D,F,P,v),ye&&ri(P,v,F,"updated")},V)},w=(v,P,F,V,z,oe,ae)=>{for(let J=0;J<P.length;J++){const le=v[J],ie=P[J],ye=le.el&&(le.type===cn||!Cs(le,ie)||le.shapeFlag&70)?f(le.el):F;x(le,ie,ye,null,V,z,oe,ae,!0)}},ce=(v,P,F,V,z,oe,ae)=>{if(F!==V){if(F!==it)for(const J in F)!Or(J)&&!(J in V)&&o(v,J,F[J],null,ae,P.children,z,oe,Te);for(const J in V){if(Or(J))continue;const le=V[J],ie=F[J];le!==ie&&J!=="value"&&o(v,J,ie,le,ae,P.children,z,oe,Te)}"value"in V&&o(v,"value",F.value,V.value)}},ue=(v,P,F,V,z,oe,ae,J,le)=>{const ie=P.el=v?v.el:l(""),ye=P.anchor=v?v.anchor:l("");let{patchFlag:y,dynamicChildren:M,slotScopeIds:D}=P;D&&(J=J?J.concat(D):D),v==null?(s(ie,F,V),s(ye,F,V),j(P.children,F,ye,z,oe,ae,J,le)):y>0&&y&64&&M&&v.dynamicChildren?(w(v.dynamicChildren,M,F,z,oe,ae,J),(P.key!=null||z&&P===z.subTree)&&Ah(v,P,!0)):O(v,P,F,ye,z,oe,ae,J,le)},k=(v,P,F,V,z,oe,ae,J,le)=>{P.slotScopeIds=J,v==null?P.shapeFlag&512?z.ctx.activate(P,F,V,ae,le):Y(P,F,V,z,oe,ae,le):Z(v,P,le)},Y=(v,P,F,V,z,oe,ae)=>{const J=v.component=Ap(v,V,z);if(gh(v)&&(J.ctx.renderer=Xe),wp(J),J.asyncDep){if(z&&z.registerDep(J,re),!v.el){const le=J.subTree=jt(Ti);p(null,le,P,F)}return}re(J,v,P,F,z,oe,ae)},Z=(v,P,F)=>{const V=P.component=v.component;if(Dd(v,P,F))if(V.asyncDep&&!V.asyncResolved){U(V,P,F);return}else V.next=P,Ad(V.update),V.update();else P.el=v.el,V.vnode=P},re=(v,P,F,V,z,oe,ae)=>{const J=()=>{if(v.isMounted){let{next:ye,bu:y,u:M,parent:D,vnode:Q}=v,ee=ye,ne;oi(v,!1),ye?(ye.el=Q.el,U(v,ye,ae)):ye=Q,y&&xo(y),(ne=ye.props&&ye.props.onVnodeBeforeUpdate)&&ln(ne,D,ye,Q),oi(v,!0);const pe=vo(v),he=v.subTree;v.subTree=pe,x(he,pe,f(he.el),Le(he),v,z,oe),ye.el=pe.el,ee===null&&Ud(v,pe.el),M&&Ut(M,z),(ne=ye.props&&ye.props.onVnodeUpdated)&&Ut(()=>ln(ne,D,ye,Q),z)}else{let ye;const{el:y,props:M}=P,{bm:D,m:Q,parent:ee}=v,ne=Br(P);if(oi(v,!1),D&&xo(D),!ne&&(ye=M&&M.onVnodeBeforeMount)&&ln(ye,ee,P),oi(v,!0),y&&Ne){const pe=()=>{v.subTree=vo(v),Ne(y,v.subTree,v,z,null)};ne?P.type.__asyncLoader().then(()=>!v.isUnmounted&&pe()):pe()}else{const pe=v.subTree=vo(v);x(null,pe,F,V,v,z,oe),P.el=pe.el}if(Q&&Ut(Q,z),!ne&&(ye=M&&M.onVnodeMounted)){const pe=P;Ut(()=>ln(ye,ee,pe),z)}(P.shapeFlag&256||ee&&Br(ee.vnode)&&ee.vnode.shapeFlag&256)&&v.a&&Ut(v.a,z),v.isMounted=!0,P=F=V=null}},le=v.effect=new ka(J,()=>Za(ie),v.scope),ie=v.update=()=>le.run();ie.id=v.uid,oi(v,!0),ie()},U=(v,P,F)=>{P.component=v;const V=v.vnode.props;v.vnode=P,v.next=null,ap(v,P.props,V,F),up(v,P.children,F),ys(),Ul(),Ss()},O=(v,P,F,V,z,oe,ae,J,le=!1)=>{const ie=v&&v.children,ye=v?v.shapeFlag:0,y=P.children,{patchFlag:M,shapeFlag:D}=P;if(M>0){if(M&128){te(ie,y,F,V,z,oe,ae,J,le);return}else if(M&256){se(ie,y,F,V,z,oe,ae,J,le);return}}D&8?(ye&16&&Te(ie,z,oe),y!==ie&&h(F,y)):ye&16?D&16?te(ie,y,F,V,z,oe,ae,J,le):Te(ie,z,oe,!0):(ye&8&&h(F,""),D&16&&j(y,F,V,z,oe,ae,J,le))},se=(v,P,F,V,z,oe,ae,J,le)=>{v=v||es,P=P||es;const ie=v.length,ye=P.length,y=Math.min(ie,ye);let M;for(M=0;M<y;M++){const D=P[M]=le?Xn(P[M]):un(P[M]);x(v[M],D,F,null,z,oe,ae,J,le)}ie>ye?Te(v,z,oe,!0,!1,y):j(P,F,V,z,oe,ae,J,le,y)},te=(v,P,F,V,z,oe,ae,J,le)=>{let ie=0;const ye=P.length;let y=v.length-1,M=ye-1;for(;ie<=y&&ie<=M;){const D=v[ie],Q=P[ie]=le?Xn(P[ie]):un(P[ie]);if(Cs(D,Q))x(D,Q,F,null,z,oe,ae,J,le);else break;ie++}for(;ie<=y&&ie<=M;){const D=v[y],Q=P[M]=le?Xn(P[M]):un(P[M]);if(Cs(D,Q))x(D,Q,F,null,z,oe,ae,J,le);else break;y--,M--}if(ie>y){if(ie<=M){const D=M+1,Q=D<ye?P[D].el:V;for(;ie<=M;)x(null,P[ie]=le?Xn(P[ie]):un(P[ie]),F,Q,z,oe,ae,J,le),ie++}}else if(ie>M)for(;ie<=y;)X(v[ie],z,oe,!0),ie++;else{const D=ie,Q=ie,ee=new Map;for(ie=Q;ie<=M;ie++){const me=P[ie]=le?Xn(P[ie]):un(P[ie]);me.key!=null&&ee.set(me.key,ie)}let ne,pe=0;const he=M-Q+1;let W=!1,we=0;const be=new Array(he);for(ie=0;ie<he;ie++)be[ie]=0;for(ie=D;ie<=y;ie++){const me=v[ie];if(pe>=he){X(me,z,oe,!0);continue}let ve;if(me.key!=null)ve=ee.get(me.key);else for(ne=Q;ne<=M;ne++)if(be[ne-Q]===0&&Cs(me,P[ne])){ve=ne;break}ve===void 0?X(me,z,oe,!0):(be[ve-Q]=ie+1,ve>=we?we=ve:W=!0,x(me,P[ve],F,null,z,oe,ae,J,le),pe++)}const Ae=W?dp(be):es;for(ne=Ae.length-1,ie=he-1;ie>=0;ie--){const me=Q+ie,ve=P[me],Be=me+1<ye?P[me+1].el:V;be[ie]===0?x(null,ve,F,Be,z,oe,ae,J,le):W&&(ne<0||ie!==Ae[ne]?G(ve,F,Be,2):ne--)}}},G=(v,P,F,V,z=null)=>{const{el:oe,type:ae,transition:J,children:le,shapeFlag:ie}=v;if(ie&6){G(v.component.subTree,P,F,V);return}if(ie&128){v.suspense.move(P,F,V);return}if(ie&64){ae.move(v,P,F,Xe);return}if(ae===cn){s(oe,P,F);for(let y=0;y<le.length;y++)G(le[y],P,F,V);s(v.anchor,P,F);return}if(ae===zr){S(v,P,F);return}if(V!==2&&ie&1&&J)if(V===0)J.beforeEnter(oe),s(oe,P,F),Ut(()=>J.enter(oe),z);else{const{leave:y,delayLeave:M,afterLeave:D}=J,Q=()=>s(oe,P,F),ee=()=>{y(oe,()=>{Q(),D&&D()})};M?M(oe,Q,ee):ee()}else s(oe,P,F)},X=(v,P,F,V=!1,z=!1)=>{const{type:oe,props:ae,ref:J,children:le,dynamicChildren:ie,shapeFlag:ye,patchFlag:y,dirs:M}=v;if(J!=null&&_a(J,null,F,v,!0),ye&256){P.ctx.deactivate(v);return}const D=ye&1&&M,Q=!Br(v);let ee;if(Q&&(ee=ae&&ae.onVnodeBeforeUnmount)&&ln(ee,P,v),ye&6)Se(v.component,F,V);else{if(ye&128){v.suspense.unmount(F,V);return}D&&ri(v,null,P,"beforeUnmount"),ye&64?v.type.remove(v,P,F,z,Xe,V):ie&&(oe!==cn||y>0&&y&64)?Te(ie,P,F,!1,!0):(oe===cn&&y&384||!z&&ye&16)&&Te(le,P,F),V&&ge(v)}(Q&&(ee=ae&&ae.onVnodeUnmounted)||D)&&Ut(()=>{ee&&ln(ee,P,v),D&&ri(v,null,P,"unmounted")},F)},ge=v=>{const{type:P,el:F,anchor:V,transition:z}=v;if(P===cn){xe(F,V);return}if(P===zr){E(v);return}const oe=()=>{r(F),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(v.shapeFlag&1&&z&&!z.persisted){const{leave:ae,delayLeave:J}=z,le=()=>ae(F,oe);J?J(v.el,oe,le):le()}else oe()},xe=(v,P)=>{let F;for(;v!==P;)F=d(v),r(v),v=F;r(P)},Se=(v,P,F)=>{const{bum:V,scope:z,update:oe,subTree:ae,um:J}=v;V&&xo(V),z.stop(),oe&&(oe.active=!1,X(ae,v,P,F)),J&&Ut(J,P),Ut(()=>{v.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Te=(v,P,F,V=!1,z=!1,oe=0)=>{for(let ae=oe;ae<v.length;ae++)X(v[ae],P,F,V,z)},Le=v=>v.shapeFlag&6?Le(v.component.subTree):v.shapeFlag&128?v.suspense.next():d(v.anchor||v.el),Re=(v,P,F)=>{v==null?P._vnode&&X(P._vnode,null,null,!0):x(P._vnode||null,v,P,null,null,null,F),Ul(),uh(),P._vnode=v},Xe={p:x,um:X,m:G,r:ge,mt:Y,mc:j,pc:O,pbc:w,n:Le,o:i};let mt,Ne;return t&&([mt,Ne]=t(Xe)),{render:Re,hydrate:mt,createApp:sp(Re,mt)}}function oi({effect:i,update:t},n){i.allowRecurse=t.allowRecurse=n}function Ah(i,t,n=!1){const s=i.children,r=t.children;if(Oe(s)&&Oe(r))for(let o=0;o<s.length;o++){const a=s[o];let l=r[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[o]=Xn(r[o]),l.el=a.el),n||Ah(a,l)),l.type===ao&&(l.el=a.el)}}function dp(i){const t=i.slice(),n=[0];let s,r,o,a,l;const c=i.length;for(s=0;s<c;s++){const u=i[s];if(u!==0){if(r=n[n.length-1],i[r]<u){t[s]=r,n.push(s);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,i[n[l]]<u?o=l+1:a=l;u<i[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}const pp=i=>i.__isTeleport,cn=Symbol.for("v-fgt"),ao=Symbol.for("v-txt"),Ti=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),Vs=[];let tn=null;function $r(i=!1){Vs.push(tn=i?null:[])}function mp(){Vs.pop(),tn=Vs[Vs.length-1]||null}let $s=1;function Wl(i){$s+=i}function wh(i){return i.dynamicChildren=$s>0?tn||es:null,mp(),$s>0&&tn&&tn.push(i),i}function xa(i,t,n,s,r,o){return wh(is(i,t,n,s,r,o,!0))}function gp(i,t,n,s,r){return wh(jt(i,t,n,s,r,!0))}function _p(i){return i?i.__v_isVNode===!0:!1}function Cs(i,t){return i.type===t.type&&i.key===t.key}const lo="__vInternal",Rh=({key:i})=>i??null,Gr=({ref:i,ref_key:t,ref_for:n})=>(typeof i=="number"&&(i=""+i),i!=null?Mt(i)||Dt(i)||We(i)?{i:mn,r:i,k:t,f:!!n}:i:null);function is(i,t=null,n=null,s=0,r=null,o=i===cn?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&Rh(t),ref:t&&Gr(t),scopeId:dh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mn};return l?(el(c,n),o&128&&i.normalize(c)):n&&(c.shapeFlag|=Mt(n)?8:16),$s>0&&!a&&tn&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&tn.push(c),c}const jt=xp;function xp(i,t=null,n=null,s=0,r=null,o=!1){if((!i||i===$d)&&(i=Ti),_p(i)){const l=ls(i,t,!0);return n&&el(l,n),$s>0&&!o&&tn&&(l.shapeFlag&6?tn[tn.indexOf(i)]=l:tn.push(l)),l.patchFlag|=-2,l}if(Pp(i)&&(i=i.__vccOpts),t){t=vp(t);let{class:l,style:c}=t;l&&!Mt(l)&&(t.class=za(l)),ft(c)&&(rh(c)&&!Oe(c)&&(c=vt({},c)),t.style=Ha(c))}const a=Mt(i)?1:Nd(i)?128:pp(i)?64:ft(i)?4:We(i)?2:0;return is(i,t,n,s,r,a,o,!0)}function vp(i){return i?rh(i)||lo in i?vt({},i):i:null}function ls(i,t,n=!1){const{props:s,ref:r,patchFlag:o,children:a}=i,l=t?Ep(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:l,key:l&&Rh(l),ref:t&&t.ref?n&&r?Oe(r)?r.concat(Gr(t)):[r,Gr(t)]:Gr(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==cn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ls(i.ssContent),ssFallback:i.ssFallback&&ls(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Mp(i=" ",t=0){return jt(ao,null,i,t)}function yp(i,t){const n=jt(zr,null,i);return n.staticCount=t,n}function Sp(i="",t=!1){return t?($r(),gp(Ti,null,i)):jt(Ti,null,i)}function un(i){return i==null||typeof i=="boolean"?jt(Ti):Oe(i)?jt(cn,null,i.slice()):typeof i=="object"?Xn(i):jt(ao,null,String(i))}function Xn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ls(i)}function el(i,t){let n=0;const{shapeFlag:s}=i;if(t==null)t=null;else if(Oe(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),el(i,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(lo in t)?t._ctx=mn:r===3&&mn&&(mn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else We(t)?(t={default:t,_ctx:mn},n=32):(t=String(t),s&64?(n=16,t=[Mp(t)]):n=8);i.children=t,i.shapeFlag|=n}function Ep(...i){const t={};for(let n=0;n<i.length;n++){const s=i[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=za([t.class,s.class]));else if(r==="style")t.style=Ha([t.style,s.style]);else if(eo(r)){const o=t[r],a=s[r];a&&o!==a&&!(Oe(o)&&o.includes(a))&&(t[r]=o?[].concat(o,a):a)}else r!==""&&(t[r]=s[r])}return t}function ln(i,t,n,s=null){sn(i,t,7,[n,s])}const Tp=Mh();let bp=0;function Ap(i,t,n){const s=i.type,r=(t?t.appContext:i.appContext)||Tp,o={uid:bp++,vnode:i,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sh(s,r),emitsOptions:fh(s,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:s.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Cd.bind(null,o),i.ce&&i.ce(o),o}let bt=null,tl,Li,Xl="__VUE_INSTANCE_SETTERS__";(Li=oa()[Xl])||(Li=oa()[Xl]=[]),Li.push(i=>bt=i),tl=i=>{Li.length>1?Li.forEach(t=>t(i)):Li[0](i)};const cs=i=>{tl(i),i.scope.on()},vi=()=>{bt&&bt.scope.off(),tl(null)};function Ch(i){return i.vnode.shapeFlag&4}let Zs=!1;function wp(i,t=!1){Zs=t;const{props:n,children:s}=i.vnode,r=Ch(i);op(i,n,r,t),cp(i,s);const o=r?Rp(i,t):void 0;return Zs=!1,o}function Rp(i,t){const n=i.type;i.accessCache=Object.create(null),i.proxy=oh(new Proxy(i.ctx,Zd));const{setup:s}=n;if(s){const r=i.setupContext=s.length>1?Lp(i):null;cs(i),ys();const o=$n(s,i,0,[i.props,r]);if(Ss(),vi(),Xu(o)){if(o.then(vi,vi),t)return o.then(a=>{ql(i,a,t)}).catch(a=>{so(a,i,0)});i.asyncDep=o}else ql(i,o,t)}else Lh(i,t)}function ql(i,t,n){We(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:ft(t)&&(i.setupState=ah(t)),Lh(i,n)}let jl;function Lh(i,t,n){const s=i.type;if(!i.render){if(!t&&jl&&!s.render){const r=s.template||Ja(i).template;if(r){const{isCustomElement:o,compilerOptions:a}=i.appContext.config,{delimiters:l,compilerOptions:c}=s,u=vt(vt({isCustomElement:o,delimiters:l},a),c);s.render=jl(r,u)}}i.render=s.render||nn}cs(i),ys(),Jd(i),Ss(),vi()}function Cp(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,n){return Ot(i,"get","$attrs"),t[n]}}))}function Lp(i){const t=n=>{i.exposed=n||{}};return{get attrs(){return Cp(i)},slots:i.slots,emit:i.emit,expose:t}}function nl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(ah(oh(i.exposed)),{get(t,n){if(n in t)return t[n];if(n in ks)return ks[n](i)},has(t,n){return n in t||n in ks}}))}function Pp(i){return We(i)&&"__vccOpts"in i}const Ip=(i,t)=>Sd(i,t,Zs),Dp=Symbol.for("v-scx"),Up=()=>Hr(Dp),Np="3.3.4",Fp="http://www.w3.org/2000/svg",mi=typeof document<"u"?document:null,Yl=mi&&mi.createElement("template"),Op={insert:(i,t,n)=>{t.insertBefore(i,n||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,n,s)=>{const r=t?mi.createElementNS(Fp,i):mi.createElement(i,n?{is:n}:void 0);return i==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:i=>mi.createTextNode(i),createComment:i=>mi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>mi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,n,s,r,o){const a=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Yl.innerHTML=s?`<svg>${i}</svg>`:i;const l=Yl.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Bp(i,t,n){const s=i._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?i.removeAttribute("class"):n?i.setAttribute("class",t):i.className=t}function Hp(i,t,n){const s=i.style,r=Mt(n);if(n&&!r){if(t&&!Mt(t))for(const o in t)n[o]==null&&va(s,o,"");for(const o in n)va(s,o,n[o])}else{const o=s.display;r?t!==n&&(s.cssText=n):t&&i.removeAttribute("style"),"_vod"in i&&(s.display=o)}}const Kl=/\s*!important$/;function va(i,t,n){if(Oe(n))n.forEach(s=>va(i,t,s));else if(n==null&&(n=""),t.startsWith("--"))i.setProperty(t,n);else{const s=zp(i,t);Kl.test(n)?i.setProperty(Ms(s),n.replace(Kl,""),"important"):i[s]=n}}const $l=["Webkit","Moz","ms"],So={};function zp(i,t){const n=So[t];if(n)return n;let s=as(t);if(s!=="filter"&&s in i)return So[t]=s;s=qu(s);for(let r=0;r<$l.length;r++){const o=$l[r]+s;if(o in i)return So[t]=o}return t}const Zl="http://www.w3.org/1999/xlink";function Gp(i,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?i.removeAttributeNS(Zl,t.slice(6,t.length)):i.setAttributeNS(Zl,t,n);else{const o=zf(t);n==null||o&&!ju(n)?i.removeAttribute(t):i.setAttribute(t,o?"":n)}}function kp(i,t,n,s,r,o,a){if(t==="innerHTML"||t==="textContent"){s&&a(s,r,o),i[t]=n??"";return}const l=i.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){i._value=n;const u=l==="OPTION"?i.getAttribute("value"):i.value,h=n??"";u!==h&&(i.value=h),n==null&&i.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof i[t];u==="boolean"?n=ju(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{i[t]=n}catch{}c&&i.removeAttribute(t)}function Vp(i,t,n,s){i.addEventListener(t,n,s)}function Wp(i,t,n,s){i.removeEventListener(t,n,s)}function Xp(i,t,n,s,r=null){const o=i._vei||(i._vei={}),a=o[t];if(s&&a)a.value=s;else{const[l,c]=qp(t);if(s){const u=o[t]=Kp(s,r);Vp(i,l,u,c)}else a&&(Wp(i,l,a,c),o[t]=void 0)}}const Jl=/(?:Once|Passive|Capture)$/;function qp(i){let t;if(Jl.test(i)){t={};let s;for(;s=i.match(Jl);)i=i.slice(0,i.length-s[0].length),t[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ms(i.slice(2)),t]}let Eo=0;const jp=Promise.resolve(),Yp=()=>Eo||(jp.then(()=>Eo=0),Eo=Date.now());function Kp(i,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;sn($p(s,n.value),t,5,[s])};return n.value=i,n.attached=Yp(),n}function $p(i,t){if(Oe(t)){const n=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{n.call(i),i._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Ql=/^on[a-z]/,Zp=(i,t,n,s,r=!1,o,a,l,c)=>{t==="class"?Bp(i,s,r):t==="style"?Hp(i,n,s):eo(t)?Na(t)||Xp(i,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jp(i,t,s,r))?kp(i,t,s,o,a,l,c):(t==="true-value"?i._trueValue=s:t==="false-value"&&(i._falseValue=s),Gp(i,t,s,r))};function Jp(i,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in i&&Ql.test(t)&&We(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA"||Ql.test(t)&&Mt(n)?!1:t in i}const Qp=vt({patchProp:Zp},Op);let ec;function em(){return ec||(ec=hp(Qp))}const tm=(...i)=>{const t=em().createApp(...i),{mount:n}=t;return t.mount=s=>{const r=nm(s);if(!r)return;const o=t._component;!We(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function nm(i){return Mt(i)?document.querySelector(i):i}const il=(i,t)=>{const n=i.__vccOpts||i;for(const[s,r]of t)n[s]=r;return n};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="155",im=0,tc=1,sm=2,Ph=1,rm=2,Ln=3,Nn=0,Ft=1,dn=2,Zn=0,ss=1,nc=2,ic=3,sc=4,om=5,Zi=100,am=101,lm=102,rc=103,oc=104,cm=200,um=201,hm=202,fm=203,Ih=204,Dh=205,dm=206,pm=207,mm=208,gm=209,_m=210,xm=0,vm=1,Mm=2,Ma=3,ym=4,Sm=5,Em=6,Tm=7,Uh=0,bm=1,Am=2,Jn=0,wm=1,Rm=2,Cm=3,Lm=4,Pm=5,Nh=300,us=301,hs=302,ya=303,Sa=304,co=306,fs=1e3,Xt=1001,Zr=1002,_t=1003,Ea=1004,kr=1005,Nt=1006,Fh=1007,bi=1008,Qn=1009,Im=1010,Dm=1011,rl=1012,Oh=1013,jn=1014,In=1015,Js=1016,Bh=1017,Hh=1018,Mi=1020,Um=1021,qt=1023,Nm=1024,Fm=1025,yi=1026,ds=1027,Om=1028,zh=1029,Bm=1030,Gh=1031,kh=1033,To=33776,bo=33777,Ao=33778,wo=33779,ac=35840,lc=35841,cc=35842,uc=35843,Hm=36196,hc=37492,fc=37496,dc=37808,pc=37809,mc=37810,gc=37811,_c=37812,xc=37813,vc=37814,Mc=37815,yc=37816,Sc=37817,Ec=37818,Tc=37819,bc=37820,Ac=37821,Ro=36492,zm=36283,wc=36284,Rc=36285,Cc=36286,Qs=2300,ps=2301,Co=2302,Lc=2400,Pc=2401,Ic=2402,Gm=2500,km=0,Vh=1,Ta=2,Wh=3e3,Si=3001,Vm=3200,Wm=3201,Xh=0,Xm=1,Ei="",Ue="srgb",xn="srgb-linear",qh="display-p3",Lo=7680,qm=519,jm=512,Ym=513,Km=514,$m=515,Zm=516,Jm=517,Qm=518,eg=519,ba=35044,Dc="300 es",Aa=1035,Dn=2e3,Jr=2001;class Ci{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const r=s.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,t);t.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uc=1234567;const Ws=Math.PI/180,ms=180/Math.PI;function rn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]+"-"+yt[t&255]+yt[t>>8&255]+"-"+yt[t>>16&15|64]+yt[t>>24&255]+"-"+yt[n&63|128]+yt[n>>8&255]+"-"+yt[n>>16&255]+yt[n>>24&255]+yt[s&255]+yt[s>>8&255]+yt[s>>16&255]+yt[s>>24&255]).toLowerCase()}function Et(i,t,n){return Math.max(t,Math.min(n,i))}function ol(i,t){return(i%t+t)%t}function tg(i,t,n,s,r){return s+(i-t)*(r-s)/(n-t)}function ng(i,t,n){return i!==t?(n-i)/(t-i):0}function Xs(i,t,n){return(1-n)*i+n*t}function ig(i,t,n,s){return Xs(i,t,1-Math.exp(-n*s))}function sg(i,t=1){return t-Math.abs(ol(i,t*2)-t)}function rg(i,t,n){return i<=t?0:i>=n?1:(i=(i-t)/(n-t),i*i*(3-2*i))}function og(i,t,n){return i<=t?0:i>=n?1:(i=(i-t)/(n-t),i*i*i*(i*(i*6-15)+10))}function ag(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lg(i,t){return i+Math.random()*(t-i)}function cg(i){return i*(.5-Math.random())}function ug(i){i!==void 0&&(Uc=i);let t=Uc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hg(i){return i*Ws}function fg(i){return i*ms}function wa(i){return(i&i-1)===0&&i!==0}function jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dg(i,t,n,s,r){const o=Math.cos,a=Math.sin,l=o(n/2),c=a(n/2),u=o((t+s)/2),h=a((t+s)/2),f=o((t-s)/2),d=a((t-s)/2),m=o((s-t)/2),_=a((s-t)/2);switch(r){case"XYX":i.set(l*h,c*f,c*d,l*u);break;case"YZY":i.set(c*d,l*h,c*f,l*u);break;case"ZXZ":i.set(c*f,c*d,l*h,l*u);break;case"XZX":i.set(l*h,c*_,c*m,l*u);break;case"YXY":i.set(c*m,l*h,c*_,l*u);break;case"ZYZ":i.set(c*_,c*m,l*h,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vr={DEG2RAD:Ws,RAD2DEG:ms,generateUUID:rn,clamp:Et,euclideanModulo:ol,mapLinear:tg,inverseLerp:ng,lerp:Xs,damp:ig,pingpong:sg,smoothstep:rg,smootherstep:og,randInt:ag,randFloat:lg,randFloatSpread:cg,seededRandom:ug,degToRad:hg,radToDeg:fg,isPowerOfTwo:wa,ceilPowerOfTwo:jh,floorPowerOfTwo:Qr,setQuaternionFromProperEuler:dg,normalize:Qe,denormalize:pn};class Ye{constructor(t=0,n=0){Ye.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,r=t.elements;return this.x=r[0]*n+r[3]*s+r[6],this.y=r[1]*n+r[4]*s+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),r=Math.sin(n),o=this.x-t.x,a=this.y-t.y;return this.x=o*s-a*r+t.x,this.y=o*r+a*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(t,n,s,r,o,a,l,c,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,r,o,a,l,c,u)}set(t,n,s,r,o,a,l,c,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=l,h[3]=n,h[4]=o,h[5]=c,h[6]=s,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,r=n.elements,o=this.elements,a=s[0],l=s[3],c=s[6],u=s[1],h=s[4],f=s[7],d=s[2],m=s[5],_=s[8],x=r[0],g=r[3],p=r[6],A=r[1],S=r[4],E=r[7],R=r[2],L=r[5],C=r[8];return o[0]=a*x+l*A+c*R,o[3]=a*g+l*S+c*L,o[6]=a*p+l*E+c*C,o[1]=u*x+h*A+f*R,o[4]=u*g+h*S+f*L,o[7]=u*p+h*E+f*C,o[2]=d*x+m*A+_*R,o[5]=d*g+m*S+_*L,o[8]=d*p+m*E+_*C,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8];return n*a*h-n*l*u-s*o*h+s*l*c+r*o*u-r*a*c}invert(){const t=this.elements,n=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=h*a-l*u,d=l*c-h*o,m=u*o-a*c,_=n*f+s*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*u-h*s)*x,t[2]=(l*s-r*a)*x,t[3]=d*x,t[4]=(h*n-r*c)*x,t[5]=(r*o-l*n)*x,t[6]=m*x,t[7]=(s*c-u*n)*x,t[8]=(a*n-s*o)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,r,o,a,l){const c=Math.cos(o),u=Math.sin(o);return this.set(s*c,s*u,-s*(c*a+u*l)+a+t,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(t,n){return this.premultiply(Po.makeScale(t,n)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,n){return this.premultiply(Po.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let r=0;r<9;r++)if(n[r]!==s[r])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new Ge;function Yh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Nc={};function qs(i){i in Nc||(Nc[i]=!0,console.warn(i))}function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const pg=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mg=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function gg(i){return i.convertSRGBToLinear().applyMatrix3(mg)}function _g(i){return i.applyMatrix3(pg).convertLinearToSRGB()}const xg={[xn]:i=>i,[Ue]:i=>i.convertSRGBToLinear(),[qh]:gg},vg={[xn]:i=>i,[Ue]:i=>i.convertLinearToSRGB(),[qh]:_g},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return xn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,n){if(this.enabled===!1||t===n||!t||!n)return i;const s=xg[t],r=vg[n];if(s===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${n}".`);return r(s(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let Pi;class Kh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Pi===void 0&&(Pi=er("canvas")),Pi.width=t.width,Pi.height=t.height;const s=Pi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Pi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=er("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const r=s.getImageData(0,0,t.width,t.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=rs(o[a]/255)*255;return s.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(rs(n[s]/255)*255):n[s]=rs(n[s]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mg=0;class $h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?o.push(Do(r[a].image)):o.push(Do(r[a]))}else o=Do(r);s.url=o}return n||(t.images[this.uuid]=s),s}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yg=0;class xt extends Ci{constructor(t=xt.DEFAULT_IMAGE,n=xt.DEFAULT_MAPPING,s=Xt,r=Xt,o=Nt,a=bi,l=qt,c=Qn,u=xt.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=rn(),this.name="",this.source=new $h(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Si?Ue:Ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case Xt:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case Xt:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?Si:Wh}set encoding(t){qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Si?Ue:Ei}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Nh;xt.DEFAULT_ANISOTROPY=1;class et{constructor(t=0,n=0,s=0,r=1){et.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,r){return this.x=t,this.y=n,this.z=s,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,r=this.z,o=this.w,a=t.elements;return this.x=a[0]*n+a[4]*s+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*s+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*s+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*s+a[11]*r+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,r,o;const c=t.elements,u=c[0],h=c[4],f=c[8],d=c[1],m=c[5],_=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(u+1)/2,E=(m+1)/2,R=(p+1)/2,L=(h+d)/4,C=(f+x)/4,j=(_+g)/4;return S>E&&S>R?S<.01?(s=0,r=.707106781,o=.707106781):(s=Math.sqrt(S),r=L/s,o=C/s):E>R?E<.01?(s=.707106781,r=0,o=.707106781):(r=Math.sqrt(E),s=L/r,o=j/r):R<.01?(s=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),s=C/o,r=j/o),this.set(s,r,o,n),this}let A=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(g-_)/A,this.y=(f-x)/A,this.z=(d-h)/A,this.w=Math.acos((u+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sg extends Ci{constructor(t=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new et(0,0,t,n),this.scissorTest=!1,this.viewport=new et(0,0,t,n);const r={width:t,height:n,depth:1};s.encoding!==void 0&&(qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===Si?Ue:Ei),this.texture=new xt(r,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:Nt,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(t,n,s=1){(this.width!==t||this.height!==n||this.depth!==s)&&(this.width=t,this.height=n,this.depth=s,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new $h(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Sg{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class Zh extends xt{constructor(t=null,n=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eg extends xt{constructor(t=null,n=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,n=0,s=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=r}static slerpFlat(t,n,s,r,o,a,l){let c=s[r+0],u=s[r+1],h=s[r+2],f=s[r+3];const d=o[a+0],m=o[a+1],_=o[a+2],x=o[a+3];if(l===0){t[n+0]=c,t[n+1]=u,t[n+2]=h,t[n+3]=f;return}if(l===1){t[n+0]=d,t[n+1]=m,t[n+2]=_,t[n+3]=x;return}if(f!==x||c!==d||u!==m||h!==_){let g=1-l;const p=c*d+u*m+h*_+f*x,A=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),L=Math.atan2(R,p*A);g=Math.sin(g*L)/R,l=Math.sin(l*L)/R}const E=l*A;if(c=c*g+d*E,u=u*g+m*E,h=h*g+_*E,f=f*g+x*E,g===1-l){const R=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=R,u*=R,h*=R,f*=R}}t[n]=c,t[n+1]=u,t[n+2]=h,t[n+3]=f}static multiplyQuaternionsFlat(t,n,s,r,o,a){const l=s[r],c=s[r+1],u=s[r+2],h=s[r+3],f=o[a],d=o[a+1],m=o[a+2],_=o[a+3];return t[n]=l*_+h*f+c*m-u*d,t[n+1]=c*_+h*d+u*f-l*m,t[n+2]=u*_+h*m+l*d-c*f,t[n+3]=h*_-l*f-c*d-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,r){return this._x=t,this._y=n,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){const s=t._x,r=t._y,o=t._z,a=t._order,l=Math.cos,c=Math.sin,u=l(s/2),h=l(r/2),f=l(o/2),d=c(s/2),m=c(r/2),_=c(o/2);switch(a){case"XYZ":this._x=d*h*f+u*m*_,this._y=u*m*f-d*h*_,this._z=u*h*_+d*m*f,this._w=u*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+u*m*_,this._y=u*m*f-d*h*_,this._z=u*h*_-d*m*f,this._w=u*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-u*m*_,this._y=u*m*f+d*h*_,this._z=u*h*_+d*m*f,this._w=u*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-u*m*_,this._y=u*m*f+d*h*_,this._z=u*h*_-d*m*f,this._w=u*h*f+d*m*_;break;case"YZX":this._x=d*h*f+u*m*_,this._y=u*m*f+d*h*_,this._z=u*h*_-d*m*f,this._w=u*h*f-d*m*_;break;case"XZY":this._x=d*h*f-u*m*_,this._y=u*m*f-d*h*_,this._z=u*h*_+d*m*f,this._w=u*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,r=Math.sin(s);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],r=n[4],o=n[8],a=n[1],l=n[5],c=n[9],u=n[2],h=n[6],f=n[10],d=s+l+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(o-u)*m,this._z=(a-r)*m}else if(s>l&&s>f){const m=2*Math.sqrt(1+s-l-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+u)/m}else if(l>f){const m=2*Math.sqrt(1+l-s-f);this._w=(o-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-s-l);this._w=(a-r)/m,this._x=(o+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const r=Math.min(1,n/s);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,r=t._y,o=t._z,a=t._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=s*h+a*l+r*u-o*c,this._y=r*h+a*c+o*l-s*u,this._z=o*h+a*u+s*c-r*l,this._w=a*h-s*l-r*c-o*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const s=this._x,r=this._y,o=this._z,a=this._w;let l=a*t._w+s*t._x+r*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=s,this._y=r,this._z=o,this;const c=1-l*l;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*s+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,l),f=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=a*f+this._w*d,this._x=s*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=Math.random(),n=Math.sqrt(1-t),s=Math.sqrt(t),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),s*Math.sin(o),s*Math.cos(o),n*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,n=0,s=0){N.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Fc.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Fc.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6]*r,this.y=o[1]*n+o[4]*s+o[7]*r,this.z=o[2]*n+o[5]*s+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,r=this.z,o=t.elements,a=1/(o[3]*n+o[7]*s+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*s+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*s+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*s+o[10]*r+o[14])*a,this}applyQuaternion(t){const n=this.x,s=this.y,r=this.z,o=t.x,a=t.y,l=t.z,c=t.w,u=c*n+a*r-l*s,h=c*s+l*n-o*r,f=c*r+o*s-a*n,d=-o*n-a*s-l*r;return this.x=u*c+d*-o+h*-l-f*-a,this.y=h*c+d*-a+f*-o-u*-l,this.z=f*c+d*-l+u*-a-h*-o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*s+o[8]*r,this.y=o[1]*n+o[5]*s+o[9]*r,this.z=o[2]*n+o[6]*s+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,r=t.y,o=t.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-o*l,this.y=o*a-s*c,this.z=s*l-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,r=this.z-t.z;return n*n+s*s+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const r=Math.sin(n)*t;return this.x=r*Math.sin(s),this.y=Math.cos(n)*t,this.z=r*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,s=Math.sqrt(1-t**2);return this.x=s*Math.cos(n),this.y=s*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new N,Fc=new ti;class vn{constructor(t=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(Tn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(Tn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=Tn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ii.copy(t.boundingBox),Ii.applyMatrix4(t.matrixWorld),this.union(Ii);else{const r=t.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let a=0,l=o.count;a<l;a++)Tn.fromBufferAttribute(o,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Tn)}else r.boundingBox===null&&r.computeBoundingBox(),Ii.copy(r.boundingBox),Ii.applyMatrix4(t.matrixWorld),this.union(Ii)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),fr.subVectors(this.max,Ls),Di.subVectors(t.a,Ls),Ui.subVectors(t.b,Ls),Ni.subVectors(t.c,Ls),Hn.subVectors(Ui,Di),zn.subVectors(Ni,Ui),ai.subVectors(Di,Ni);let n=[0,-Hn.z,Hn.y,0,-zn.z,zn.y,0,-ai.z,ai.y,Hn.z,0,-Hn.x,zn.z,0,-zn.x,ai.z,0,-ai.x,-Hn.y,Hn.x,0,-zn.y,zn.x,0,-ai.y,ai.x,0];return!No(n,Di,Ui,Ni,fr)||(n=[1,0,0,0,1,0,0,0,1],!No(n,Di,Ui,Ni,fr))?!1:(dr.crossVectors(Hn,zn),n=[dr.x,dr.y,dr.z],No(n,Di,Ui,Ni,fr))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,Ii=new vn,Di=new N,Ui=new N,Ni=new N,Hn=new N,zn=new N,ai=new N,Ls=new N,fr=new N,dr=new N,li=new N;function No(i,t,n,s,r){for(let o=0,a=i.length-3;o<=a;o+=3){li.fromArray(i,o);const l=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),c=t.dot(li),u=n.dot(li),h=s.dot(li);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Tg=new vn,Ps=new N,Fo=new N;class Mn{constructor(t=new N,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):Tg.setFromPoints(t).getCenter(s);let r=0;for(let o=0,a=t.length;o<a;o++)r=Math.max(r,s.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),r=(s-this.radius)*.5;this.center.addScaledVector(Ps,r/s),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Fo)),this.expandByPoint(Ps.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new N,Oo=new N,pr=new N,Gn=new N,Bo=new N,mr=new N,Ho=new N;class tr{constructor(t=new N,n=new N(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=bn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,n),bn.distanceToSquared(t))}distanceSqToSegment(t,n,s,r){Oo.copy(t).add(n).multiplyScalar(.5),pr.copy(n).sub(t).normalize(),Gn.copy(this.origin).sub(Oo);const o=t.distanceTo(n)*.5,a=-this.direction.dot(pr),l=Gn.dot(this.direction),c=-Gn.dot(pr),u=Gn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,_;if(h>0)if(f=a*c-l,d=a*l-c,_=o*h,f>=0)if(d>=-_)if(d<=_){const x=1/h;f*=x,d*=x,m=f*(f+a*d+2*l)+d*(a*f+d+2*c)+u}else d=o,f=Math.max(0,-(a*d+l)),m=-f*f+d*(d+2*c)+u;else d=-o,f=Math.max(0,-(a*d+l)),m=-f*f+d*(d+2*c)+u;else d<=-_?(f=Math.max(0,-(-a*o+l)),d=f>0?-o:Math.min(Math.max(-o,-c),o),m=-f*f+d*(d+2*c)+u):d<=_?(f=0,d=Math.min(Math.max(-o,-c),o),m=d*(d+2*c)+u):(f=Math.max(0,-(a*o+l)),d=f>0?o:Math.min(Math.max(-o,-c),o),m=-f*f+d*(d+2*c)+u);else d=a>0?-o:o,f=Math.max(0,-(a*d+l)),m=-f*f+d*(d+2*c)+u;return s&&s.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oo).addScaledVector(pr,d),m}intersectSphere(t,n){bn.subVectors(t.center,this.origin);const s=bn.dot(this.direction),r=bn.dot(bn)-s*s,o=t.radius*t.radius;if(r>o)return null;const a=Math.sqrt(o-r),l=s-a,c=s+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,r,o,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(s=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(s=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),h>=0?(o=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),s>a||o>r||((o>s||isNaN(s))&&(s=o),(a<r||isNaN(r))&&(r=a),f>=0?(l=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(l=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),s>c||l>r)||((l>s||s!==s)&&(s=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(s>=0?s:r,n)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,n,s,r,o){Bo.subVectors(n,t),mr.subVectors(s,t),Ho.crossVectors(Bo,mr);let a=this.direction.dot(Ho),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const c=l*this.direction.dot(mr.crossVectors(Gn,mr));if(c<0)return null;const u=l*this.direction.dot(Bo.cross(Gn));if(u<0||c+u>a)return null;const h=-l*Gn.dot(Ho);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,n,s,r,o,a,l,c,u,h,f,d,m,_,x,g){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,r,o,a,l,c,u,h,f,d,m,_,x,g)}set(t,n,s,r,o,a,l,c,u,h,f,d,m,_,x,g){const p=this.elements;return p[0]=t,p[4]=n,p[8]=s,p[12]=r,p[1]=o,p[5]=a,p[9]=l,p[13]=c,p[2]=u,p[6]=h,p[10]=f,p[14]=d,p[3]=m,p[7]=_,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,s=t.elements,r=1/Fi.setFromMatrixColumn(t,0).length(),o=1/Fi.setFromMatrixColumn(t,1).length(),a=1/Fi.setFromMatrixColumn(t,2).length();return n[0]=s[0]*r,n[1]=s[1]*r,n[2]=s[2]*r,n[3]=0,n[4]=s[4]*o,n[5]=s[5]*o,n[6]=s[6]*o,n[7]=0,n[8]=s[8]*a,n[9]=s[9]*a,n[10]=s[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,r=t.y,o=t.z,a=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const d=a*h,m=a*f,_=l*h,x=l*f;n[0]=c*h,n[4]=-c*f,n[8]=u,n[1]=m+_*u,n[5]=d-x*u,n[9]=-l*c,n[2]=x-d*u,n[6]=_+m*u,n[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*f,_=u*h,x=u*f;n[0]=d+x*l,n[4]=_*l-m,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-l,n[2]=m*l-_,n[6]=x+d*l,n[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*f,_=u*h,x=u*f;n[0]=d-x*l,n[4]=-a*f,n[8]=_+m*l,n[1]=m+_*l,n[5]=a*h,n[9]=x-d*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*f,_=l*h,x=l*f;n[0]=c*h,n[4]=_*u-m,n[8]=d*u+x,n[1]=c*f,n[5]=x*u+d,n[9]=m*u-_,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*u,_=l*c,x=l*u;n[0]=c*h,n[4]=x-d*f,n[8]=_*f+m,n[1]=f,n[5]=a*h,n[9]=-l*h,n[2]=-u*h,n[6]=m*f+_,n[10]=d-x*f}else if(t.order==="XZY"){const d=a*c,m=a*u,_=l*c,x=l*u;n[0]=c*h,n[4]=-f,n[8]=u*h,n[1]=d*f+x,n[5]=a*h,n[9]=m*f-_,n[2]=_*f-m,n[6]=l*h,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bg,t,Ag)}lookAt(t,n,s){const r=this.elements;return Ht.subVectors(t,n),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),kn.crossVectors(s,Ht),kn.lengthSq()===0&&(Math.abs(s.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),kn.crossVectors(s,Ht)),kn.normalize(),gr.crossVectors(Ht,kn),r[0]=kn.x,r[4]=gr.x,r[8]=Ht.x,r[1]=kn.y,r[5]=gr.y,r[9]=Ht.y,r[2]=kn.z,r[6]=gr.z,r[10]=Ht.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,r=n.elements,o=this.elements,a=s[0],l=s[4],c=s[8],u=s[12],h=s[1],f=s[5],d=s[9],m=s[13],_=s[2],x=s[6],g=s[10],p=s[14],A=s[3],S=s[7],E=s[11],R=s[15],L=r[0],C=r[4],j=r[8],T=r[12],w=r[1],ce=r[5],ue=r[9],k=r[13],Y=r[2],Z=r[6],re=r[10],U=r[14],O=r[3],se=r[7],te=r[11],G=r[15];return o[0]=a*L+l*w+c*Y+u*O,o[4]=a*C+l*ce+c*Z+u*se,o[8]=a*j+l*ue+c*re+u*te,o[12]=a*T+l*k+c*U+u*G,o[1]=h*L+f*w+d*Y+m*O,o[5]=h*C+f*ce+d*Z+m*se,o[9]=h*j+f*ue+d*re+m*te,o[13]=h*T+f*k+d*U+m*G,o[2]=_*L+x*w+g*Y+p*O,o[6]=_*C+x*ce+g*Z+p*se,o[10]=_*j+x*ue+g*re+p*te,o[14]=_*T+x*k+g*U+p*G,o[3]=A*L+S*w+E*Y+R*O,o[7]=A*C+S*ce+E*Z+R*se,o[11]=A*j+S*ue+E*re+R*te,o[15]=A*T+S*k+E*U+R*G,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],r=t[8],o=t[12],a=t[1],l=t[5],c=t[9],u=t[13],h=t[2],f=t[6],d=t[10],m=t[14],_=t[3],x=t[7],g=t[11],p=t[15];return _*(+o*c*f-r*u*f-o*l*d+s*u*d+r*l*m-s*c*m)+x*(+n*c*m-n*u*d+o*a*d-r*a*m+r*u*h-o*c*h)+g*(+n*u*f-n*l*m-o*a*f+s*a*m+o*l*h-s*u*h)+p*(-r*l*h-n*c*f+n*l*d+r*a*f-s*a*d+s*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],r=t[2],o=t[3],a=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=t[9],d=t[10],m=t[11],_=t[12],x=t[13],g=t[14],p=t[15],A=f*g*u-x*d*u+x*c*m-l*g*m-f*c*p+l*d*p,S=_*d*u-h*g*u-_*c*m+a*g*m+h*c*p-a*d*p,E=h*x*u-_*f*u+_*l*m-a*x*m-h*l*p+a*f*p,R=_*f*c-h*x*c-_*l*d+a*x*d+h*l*g-a*f*g,L=n*A+s*S+r*E+o*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return t[0]=A*C,t[1]=(x*d*o-f*g*o-x*r*m+s*g*m+f*r*p-s*d*p)*C,t[2]=(l*g*o-x*c*o+x*r*u-s*g*u-l*r*p+s*c*p)*C,t[3]=(f*c*o-l*d*o-f*r*u+s*d*u+l*r*m-s*c*m)*C,t[4]=S*C,t[5]=(h*g*o-_*d*o+_*r*m-n*g*m-h*r*p+n*d*p)*C,t[6]=(_*c*o-a*g*o-_*r*u+n*g*u+a*r*p-n*c*p)*C,t[7]=(a*d*o-h*c*o+h*r*u-n*d*u-a*r*m+n*c*m)*C,t[8]=E*C,t[9]=(_*f*o-h*x*o-_*s*m+n*x*m+h*s*p-n*f*p)*C,t[10]=(a*x*o-_*l*o+_*s*u-n*x*u-a*s*p+n*l*p)*C,t[11]=(h*l*o-a*f*o-h*s*u+n*f*u+a*s*m-n*l*m)*C,t[12]=R*C,t[13]=(h*x*r-_*f*r+_*s*d-n*x*d-h*s*g+n*f*g)*C,t[14]=(_*l*r-a*x*r-_*s*c+n*x*c+a*s*g-n*l*g)*C,t[15]=(a*f*r-h*l*r+h*s*c-n*f*c-a*s*d+n*l*d)*C,this}scale(t){const n=this.elements,s=t.x,r=t.y,o=t.z;return n[0]*=s,n[4]*=r,n[8]*=o,n[1]*=s,n[5]*=r,n[9]*=o,n[2]*=s,n[6]*=r,n[10]*=o,n[3]*=s,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,r))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),r=Math.sin(n),o=1-s,a=t.x,l=t.y,c=t.z,u=o*a,h=o*l;return this.set(u*a+s,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+s,h*c-r*a,0,u*c-r*l,h*c+r*a,o*c*c+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,r,o,a){return this.set(1,s,o,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,s){const r=this.elements,o=n._x,a=n._y,l=n._z,c=n._w,u=o+o,h=a+a,f=l+l,d=o*u,m=o*h,_=o*f,x=a*h,g=a*f,p=l*f,A=c*u,S=c*h,E=c*f,R=s.x,L=s.y,C=s.z;return r[0]=(1-(x+p))*R,r[1]=(m+E)*R,r[2]=(_-S)*R,r[3]=0,r[4]=(m-E)*L,r[5]=(1-(d+p))*L,r[6]=(g+A)*L,r[7]=0,r[8]=(_+S)*C,r[9]=(g-A)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,s){const r=this.elements;let o=Fi.set(r[0],r[1],r[2]).length();const a=Fi.set(r[4],r[5],r[6]).length(),l=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],Kt.copy(this);const u=1/o,h=1/a,f=1/l;return Kt.elements[0]*=u,Kt.elements[1]*=u,Kt.elements[2]*=u,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,n.setFromRotationMatrix(Kt),s.x=o,s.y=a,s.z=l,this}makePerspective(t,n,s,r,o,a,l=Dn){const c=this.elements,u=2*o/(n-t),h=2*o/(s-r),f=(n+t)/(n-t),d=(s+r)/(s-r);let m,_;if(l===Dn)m=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(l===Jr)m=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,s,r,o,a,l=Dn){const c=this.elements,u=1/(n-t),h=1/(s-r),f=1/(a-o),d=(n+t)*u,m=(s+r)*h;let _,x;if(l===Dn)_=(a+o)*f,x=-2*f;else if(l===Jr)_=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let r=0;r<16;r++)if(n[r]!==s[r])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const Fi=new N,Kt=new ke,bg=new N(0,0,0),Ag=new N(1,1,1),kn=new N,gr=new N,Ht=new N,Oc=new ke,Bc=new ti;class nr{constructor(t=0,n=0,s=0,r=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,r=this._order){return this._x=t,this._y=n,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const r=t.elements,o=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wg=0;const Hc=new N,Oi=new ti,An=new ke,_r=new N,Is=new N,Rg=new N,Cg=new ti,zc=new N(1,0,0),Gc=new N(0,1,0),kc=new N(0,0,1),Lg={type:"added"},Vc={type:"removed"};class rt extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const t=new N,n=new nr,s=new ti,r=new N(1,1,1);function o(){s.setFromEuler(n,!1)}function a(){n.setFromQuaternion(s,void 0,!1)}n._onChange(o),s._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ge}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Oi.setFromAxisAngle(t,n),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,n){return Oi.setFromAxisAngle(t,n),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(zc,t)}rotateY(t){return this.rotateOnAxis(Gc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,n){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(zc,t)}translateY(t){return this.translateOnAxis(Gc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?_r.copy(t):_r.set(t,n,s);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Is,_r,this.up):An.lookAt(_r,Is,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(An),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Vc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const n=this.children[t];n.parent=null,n.dispatchEvent(Vc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n){let s=[];this[t]===n&&s.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(t,n);a.length>0&&(s=s.concat(a))}return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Rg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Cg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,r=n.length;s<r;s++){const o=n[s];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));r.material=l}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(o(t.animations,c))}}if(n){const l=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);l.length>0&&(s.geometries=l),c.length>0&&(s.materials=c),u.length>0&&(s.textures=u),h.length>0&&(s.images=h),f.length>0&&(s.shapes=f),d.length>0&&(s.skeletons=d),m.length>0&&(s.animations=m),_.length>0&&(s.nodes=_)}return s.object=r,s;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const r=t.children[s];this.add(r.clone())}return this}}rt.DEFAULT_UP=new N(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new N,wn=new N,zo=new N,Rn=new N,Bi=new N,Hi=new N,Wc=new N,Go=new N,ko=new N,Vo=new N;let xr=!1;class Qt{constructor(t=new N,n=new N,s=new N){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,r){r.subVectors(s,n),$t.subVectors(t,n),r.cross($t);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,s,r,o){$t.subVectors(r,n),wn.subVectors(s,n),zo.subVectors(t,n);const a=$t.dot($t),l=$t.dot(wn),c=$t.dot(zo),u=wn.dot(wn),h=wn.dot(zo),f=a*u-l*l;if(f===0)return o.set(-2,-1,-1);const d=1/f,m=(u*c-l*h)*d,_=(a*h-l*c)*d;return o.set(1-m-_,_,m)}static containsPoint(t,n,s,r){return this.getBarycoord(t,n,s,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(t,n,s,r,o,a,l,c){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),this.getInterpolation(t,n,s,r,o,a,l,c)}static getInterpolation(t,n,s,r,o,a,l,c){return this.getBarycoord(t,n,s,r,Rn),c.setScalar(0),c.addScaledVector(o,Rn.x),c.addScaledVector(a,Rn.y),c.addScaledVector(l,Rn.z),c}static isFrontFacing(t,n,s,r){return $t.subVectors(s,n),wn.subVectors(t,n),$t.cross(wn).dot(r)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,r){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,s,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $t.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),$t.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Qt.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,s,r,o){return xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xr=!0),Qt.getInterpolation(t,this.a,this.b,this.c,n,s,r,o)}getInterpolation(t,n,s,r,o){return Qt.getInterpolation(t,this.a,this.b,this.c,n,s,r,o)}containsPoint(t){return Qt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,r=this.b,o=this.c;let a,l;Bi.subVectors(r,s),Hi.subVectors(o,s),Go.subVectors(t,s);const c=Bi.dot(Go),u=Hi.dot(Go);if(c<=0&&u<=0)return n.copy(s);ko.subVectors(t,r);const h=Bi.dot(ko),f=Hi.dot(ko);if(h>=0&&f<=h)return n.copy(r);const d=c*f-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(s).addScaledVector(Bi,a);Vo.subVectors(t,o);const m=Bi.dot(Vo),_=Hi.dot(Vo);if(_>=0&&m<=_)return n.copy(o);const x=m*u-c*_;if(x<=0&&u>=0&&_<=0)return l=u/(u-_),n.copy(s).addScaledVector(Hi,l);const g=h*_-m*f;if(g<=0&&f-h>=0&&m-_>=0)return Wc.subVectors(o,r),l=(f-h)/(f-h+(m-_)),n.copy(r).addScaledVector(Wc,l);const p=1/(g+x+d);return a=x*p,l=d*p,n.copy(s).addScaledVector(Bi,a).addScaledVector(Hi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Pg=0;class gn extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=ss,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Dh,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(s.blending=this.blending),this.side!==Nn&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(s.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(n){const o=r(t.textures),a=r(t.images);o.length>0&&(s.textures=o),a.length>0&&(s.images=a)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const r=n.length;s=new Array(r);for(let o=0;o!==r;++o)s[o]=n[o].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zt={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Wo(i,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?i+(t-i)*6*n:n<1/2?t:n<2/3?i+(t-i)*6*(2/3-n):i}class Fe{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,n),this}setRGB(t,n,s,r=Yt.workingColorSpace){return this.r=t,this.g=n,this.b=s,Yt.toWorkingColorSpace(this,r),this}setHSL(t,n,s,r=Yt.workingColorSpace){if(t=ol(t,1),n=Et(n,0,1),s=Et(s,0,1),n===0)this.r=this.g=this.b=s;else{const o=s<=.5?s*(1+n):s+n-s*n,a=2*s-o;this.r=Wo(a,o,t+1/3),this.g=Wo(a,o,t),this.b=Wo(a,o,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,n=Ue){function s(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ue){const s=Jh[t.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Yt.fromWorkingColorSpace(St.copy(this),t),Math.round(Et(St.r*255,0,255))*65536+Math.round(Et(St.g*255,0,255))*256+Math.round(Et(St.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Yt.workingColorSpace){Yt.fromWorkingColorSpace(St.copy(this),n);const s=St.r,r=St.g,o=St.b,a=Math.max(s,r,o),l=Math.min(s,r,o);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const f=a-l;switch(u=h<=.5?f/(a+l):f/(2-a-l),a){case s:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-s)/f+2;break;case o:c=(s-r)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,n=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(St.copy(this),n),t.r=St.r,t.g=St.g,t.b=St.b,t}getStyle(t=Ue){Yt.fromWorkingColorSpace(St.copy(this),t);const n=St.r,s=St.g,r=St.b;return t!==Ue?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(t,n,s){return this.getHSL(Zt),Zt.h+=t,Zt.s+=n,Zt.l+=s,this.setHSL(Zt.h,Zt.s,Zt.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(Zt),t.getHSL(vr);const s=Xs(Zt.h,vr.h,n),r=Xs(Zt.s,vr.s,n),o=Xs(Zt.l,vr.l,n);return this.setHSL(s,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*s+o[6]*r,this.g=o[1]*n+o[4]*s+o[7]*r,this.b=o[2]*n+o[5]*s+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Fe;Fe.NAMES=Jh;class Yn extends gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ht=new N,Mr=new Ye;class At{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=ba,this.updateRange={offset:0,count:-1},this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[s+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Mr.fromBufferAttribute(this,n),Mr.applyMatrix3(t),this.setXY(n,Mr.x,Mr.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(t),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(t),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(t),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(t),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=pn(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=Qe(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=pn(n,this.array)),n}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=pn(n,this.array)),n}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=pn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=pn(n,this.array)),n}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),s=Qe(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,r){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=r,this}setXYZW(t,n,s,r,o){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array),o=Qe(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Qh extends At{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class ef extends At{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class _n extends At{constructor(t,n,s){super(new Float32Array(t),n,s)}}let Ig=0;const Vt=new ke,Xo=new rt,zi=new N,zt=new vn,Ds=new vn,gt=new N;class on extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yh(t)?ef:Qh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const o=new Ge().getNormalMatrix(t);s.applyNormalMatrix(o),s.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vt.makeRotationFromQuaternion(t),this.applyMatrix4(Vt),this}rotateX(t){return Vt.makeRotationX(t),this.applyMatrix4(Vt),this}rotateY(t){return Vt.makeRotationY(t),this.applyMatrix4(Vt),this}rotateZ(t){return Vt.makeRotationZ(t),this.applyMatrix4(Vt),this}translate(t,n,s){return Vt.makeTranslation(t,n,s),this.applyMatrix4(Vt),this}scale(t,n,s){return Vt.makeScale(t,n,s),this.applyMatrix4(Vt),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new _n(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];zt.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const s=this.boundingSphere.center;if(zt.setFromBufferAttribute(t),n)for(let o=0,a=n.length;o<a;o++){const l=n[o];Ds.setFromBufferAttribute(l),this.morphTargetsRelative?(gt.addVectors(zt.min,Ds.min),zt.expandByPoint(gt),gt.addVectors(zt.max,Ds.max),zt.expandByPoint(gt)):(zt.expandByPoint(Ds.min),zt.expandByPoint(Ds.max))}zt.getCenter(s);let r=0;for(let o=0,a=t.count;o<a;o++)gt.fromBufferAttribute(t,o),r=Math.max(r,s.distanceToSquared(gt));if(n)for(let o=0,a=n.length;o<a;o++){const l=n[o],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)gt.fromBufferAttribute(l,u),c&&(zi.fromBufferAttribute(t,u),gt.add(zi)),r=Math.max(r,s.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.array,r=n.position.array,o=n.normal.array,a=n.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let w=0;w<l;w++)u[w]=new N,h[w]=new N;const f=new N,d=new N,m=new N,_=new Ye,x=new Ye,g=new Ye,p=new N,A=new N;function S(w,ce,ue){f.fromArray(r,w*3),d.fromArray(r,ce*3),m.fromArray(r,ue*3),_.fromArray(a,w*2),x.fromArray(a,ce*2),g.fromArray(a,ue*2),d.sub(f),m.sub(f),x.sub(_),g.sub(_);const k=1/(x.x*g.y-g.x*x.y);isFinite(k)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(m,-x.y).multiplyScalar(k),A.copy(m).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(k),u[w].add(p),u[ce].add(p),u[ue].add(p),h[w].add(A),h[ce].add(A),h[ue].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:s.length}]);for(let w=0,ce=E.length;w<ce;++w){const ue=E[w],k=ue.start,Y=ue.count;for(let Z=k,re=k+Y;Z<re;Z+=3)S(s[Z+0],s[Z+1],s[Z+2])}const R=new N,L=new N,C=new N,j=new N;function T(w){C.fromArray(o,w*3),j.copy(C);const ce=u[w];R.copy(ce),R.sub(C.multiplyScalar(C.dot(ce))).normalize(),L.crossVectors(j,ce);const k=L.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=k}for(let w=0,ce=E.length;w<ce;++w){const ue=E[w],k=ue.start,Y=ue.count;for(let Z=k,re=k+Y;Z<re;Z+=3)T(s[Z+0]),T(s[Z+1]),T(s[Z+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new At(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let d=0,m=s.count;d<m;d++)s.setXYZ(d,0,0,0);const r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N,f=new N;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),l.fromBufferAttribute(s,_),c.fromBufferAttribute(s,x),u.fromBufferAttribute(s,g),l.add(h),c.add(h),u.add(h),s.setXYZ(_,l.x,l.y,l.z),s.setXYZ(x,c.x,c.y,c.z),s.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),s.setXYZ(d+0,h.x,h.y,h.z),s.setXYZ(d+1,h.x,h.y,h.z),s.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)gt.fromBufferAttribute(t,n),gt.normalize(),t.setXYZ(n,gt.x,gt.y,gt.z)}toNonIndexed(){function t(l,c){const u=l.array,h=l.itemSize,f=l.normalized,d=new u.constructor(c.length*h);let m=0,_=0;for(let x=0,g=c.length;x<g;x++){l.isInterleavedBufferAttribute?m=c[x]*l.data.stride+l.offset:m=c[x]*h;for(let p=0;p<h;p++)d[_++]=u[m++]}return new At(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new on,s=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=t(c,s);n.setAttribute(l,u)}const o=this.morphAttributes;for(const l in o){const c=[],u=o[l];for(let h=0,f=u.length;h<f;h++){const d=u[h],m=t(d,s);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const c in s){const u=s[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let o=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(n));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const o=t.morphAttributes;for(const u in o){const h=[],f=o[u];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new ke,ci=new tr,yr=new Mn,qc=new N,Gi=new N,ki=new N,Vi=new N,qo=new N,Sr=new N,Er=new Ye,Tr=new Ye,br=new Ye,jc=new N,Yc=new N,Kc=new N,Ar=new N,wr=new N;class Gt extends rt{constructor(t=new on,n=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const r=n[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,n){const s=this.geometry,r=s.attributes.position,o=s.morphAttributes.position,a=s.morphTargetsRelative;n.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(o&&l){Sr.set(0,0,0);for(let c=0,u=o.length;c<u;c++){const h=l[c],f=o[c];h!==0&&(qo.fromBufferAttribute(f,t),a?Sr.addScaledVector(qo,h):Sr.addScaledVector(qo.sub(n),h))}n.add(Sr)}return n}raycast(t,n){const s=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yr.copy(s.boundingSphere),yr.applyMatrix4(o),ci.copy(t.ray).recast(t.near),!(yr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(yr,qc)===null||ci.origin.distanceToSquared(qc)>(t.far-t.near)**2))&&(Xc.copy(o).invert(),ci.copy(t.ray).applyMatrix4(Xc),!(s.boundingBox!==null&&ci.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,ci)))}_computeIntersections(t,n,s){let r;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,u=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,m=o.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=A,R=S;E<R;E+=3){const L=l.getX(E),C=l.getX(E+1),j=l.getX(E+2);r=Rr(this,p,t,s,u,h,f,L,C,j),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const A=l.getX(g),S=l.getX(g+1),E=l.getX(g+2);r=Rr(this,a,t,s,u,h,f,A,S,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],p=a[g.materialIndex],A=Math.max(g.start,m.start),S=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let E=A,R=S;E<R;E+=3){const L=E,C=E+1,j=E+2;r=Rr(this,p,t,s,u,h,f,L,C,j),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=_,p=x;g<p;g+=3){const A=g,S=g+1,E=g+2;r=Rr(this,a,t,s,u,h,f,A,S,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Dg(i,t,n,s,r,o,a,l){let c;if(t.side===Ft?c=s.intersectTriangle(a,o,r,!0,l):c=s.intersectTriangle(r,o,a,t.side===Nn,l),c===null)return null;wr.copy(l),wr.applyMatrix4(i.matrixWorld);const u=n.ray.origin.distanceTo(wr);return u<n.near||u>n.far?null:{distance:u,point:wr.clone(),object:i}}function Rr(i,t,n,s,r,o,a,l,c,u){i.getVertexPosition(l,Gi),i.getVertexPosition(c,ki),i.getVertexPosition(u,Vi);const h=Dg(i,t,n,s,Gi,ki,Vi,Ar);if(h){r&&(Er.fromBufferAttribute(r,l),Tr.fromBufferAttribute(r,c),br.fromBufferAttribute(r,u),h.uv=Qt.getInterpolation(Ar,Gi,ki,Vi,Er,Tr,br,new Ye)),o&&(Er.fromBufferAttribute(o,l),Tr.fromBufferAttribute(o,c),br.fromBufferAttribute(o,u),h.uv1=Qt.getInterpolation(Ar,Gi,ki,Vi,Er,Tr,br,new Ye),h.uv2=h.uv1),a&&(jc.fromBufferAttribute(a,l),Yc.fromBufferAttribute(a,c),Kc.fromBufferAttribute(a,u),h.normal=Qt.getInterpolation(Ar,Gi,ki,Vi,jc,Yc,Kc,new N),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new N,materialIndex:0};Qt.getNormal(Gi,ki,Vi,f.normal),h.face=f}return h}class Es extends on{constructor(t=1,n=1,s=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:r,heightSegments:o,depthSegments:a};const l=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const c=[],u=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,s,n,t,a,o,0),_("z","y","x",1,-1,s,n,-t,a,o,1),_("x","z","y",1,1,t,s,n,r,a,2),_("x","z","y",1,-1,t,s,-n,r,a,3),_("x","y","z",1,-1,t,n,s,r,o,4),_("x","y","z",-1,-1,t,n,-s,r,o,5),this.setIndex(c),this.setAttribute("position",new _n(u,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(f,2));function _(x,g,p,A,S,E,R,L,C,j,T){const w=E/C,ce=R/j,ue=E/2,k=R/2,Y=L/2,Z=C+1,re=j+1;let U=0,O=0;const se=new N;for(let te=0;te<re;te++){const G=te*ce-k;for(let X=0;X<Z;X++){const ge=X*w-ue;se[x]=ge*A,se[g]=G*S,se[p]=Y,u.push(se.x,se.y,se.z),se[x]=0,se[g]=0,se[p]=L>0?1:-1,h.push(se.x,se.y,se.z),f.push(X/C),f.push(1-te/j),U+=1}}for(let te=0;te<j;te++)for(let G=0;G<C;G++){const X=d+G+Z*te,ge=d+G+Z*(te+1),xe=d+(G+1)+Z*(te+1),Se=d+(G+1)+Z*te;c.push(X,ge,Se),c.push(ge,xe,Se),O+=6}l.addGroup(m,O,T),m+=O,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(i){const t={};for(const n in i){t[n]={};for(const s in i[n]){const r=i[n][s];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=r.clone():Array.isArray(r)?t[n][s]=r.slice():t[n][s]=r}}return t}function Pt(i){const t={};for(let n=0;n<i.length;n++){const s=gs(i[n]);for(const r in s)t[r]=s[r]}return t}function Ug(i){const t=[];for(let n=0;n<i.length;n++)t.push(i[n].clone());return t}function tf(i){return i.getRenderTarget()===null?i.outputColorSpace:xn}const Ng={clone:gs,merge:Pt};var Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Ug(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class nf extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Dn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends nf{constructor(t=50,n=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,s,r,o,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ws*.5*this.fov)/this.zoom,s=2*n,r=this.aspect*s,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/c,n-=a.offsetY*s/u,r*=a.width/c,s*=a.height/u}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wi=-90,Xi=1;class Bg extends rt{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null;const r=new It(Wi,Xi,t,n);r.layers=this.layers,this.add(r);const o=new It(Wi,Xi,t,n);o.layers=this.layers,this.add(o);const a=new It(Wi,Xi,t,n);a.layers=this.layers,this.add(a);const l=new It(Wi,Xi,t,n);l.layers=this.layers,this.add(l);const c=new It(Wi,Xi,t,n);c.layers=this.layers,this.add(c);const u=new It(Wi,Xi,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,r,o,a,l,c]=n;for(const u of n)this.remove(u);if(t===Dn)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jr)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.xr.enabled;t.xr.enabled=!1;const d=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0),t.render(n,r),t.setRenderTarget(s,1),t.render(n,o),t.setRenderTarget(s,2),t.render(n,a),t.setRenderTarget(s,3),t.render(n,l),t.setRenderTarget(s,4),t.render(n,c),s.texture.generateMipmaps=d,t.setRenderTarget(s,5),t.render(n,u),t.setRenderTarget(h),t.xr.enabled=f,s.texture.needsPMREMUpdate=!0}}class sf extends xt{constructor(t,n,s,r,o,a,l,c,u,h){t=t!==void 0?t:[],n=n!==void 0?n:us,super(t,n,s,r,o,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hg extends Ai{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},r=[s,s,s,s,s,s];n.encoding!==void 0&&(qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Si?Ue:Ei),this.texture=new sf(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nt}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Es(5,5,5),o=new wi({name:"CubemapFromEquirect",uniforms:gs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Ft,blending:Zn});o.uniforms.tEquirect.value=n;const a=new Gt(r,o),l=n.minFilter;return n.minFilter===bi&&(n.minFilter=Nt),new Bg(1,10,this).update(t,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,s,r){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,s,r);t.setRenderTarget(o)}}const jo=new N,zg=new N,Gg=new Ge;class fi{constructor(t=new N(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,r){return this.normal.set(t,n,s),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const r=jo.subVectors(s,n).cross(zg.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||Gg.getNormalMatrix(t),r=this.coplanarPoint(jo).applyMatrix4(t),o=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Mn,Cr=new N;class ll{constructor(t=new fi,n=new fi,s=new fi,r=new fi,o=new fi,a=new fi){this.planes=[t,n,s,r,o,a]}set(t,n,s,r,o,a){const l=this.planes;return l[0].copy(t),l[1].copy(n),l[2].copy(s),l[3].copy(r),l[4].copy(o),l[5].copy(a),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Dn){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],x=r[10],g=r[11],p=r[12],A=r[13],S=r[14],E=r[15];if(s[0].setComponents(c-o,d-u,g-m,E-p).normalize(),s[1].setComponents(c+o,d+u,g+m,E+p).normalize(),s[2].setComponents(c+a,d+h,g+_,E+A).normalize(),s[3].setComponents(c-a,d-h,g-_,E-A).normalize(),s[4].setComponents(c-l,d-f,g-x,E-S).normalize(),n===Dn)s[5].setComponents(c+l,d+f,g+x,E+S).normalize();else if(n===Jr)s[5].setComponents(l,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const n=this.planes,s=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(s)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const r=n[s];if(Cr.x=r.normal.x>0?t.max.x:t.min.x,Cr.y=r.normal.y>0?t.max.y:t.min.y,Cr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rf(){let i=null,t=!1,n=null,s=null;function r(o,a){n(o,a),s=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(s=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){i=o}}}function kg(i,t){const n=t.isWebGL2,s=new WeakMap;function r(u,h){const f=u.array,d=u.usage,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function o(u,h,f){const d=h.array,m=h.updateRange;i.bindBuffer(f,u),m.count===-1?i.bufferSubData(f,0,d):(n?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),s.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=s.get(u);h&&(i.deleteBuffer(h.buffer),s.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=s.get(u);(!d||d.version<u.version)&&s.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=s.get(u);f===void 0?s.set(u,r(u,h)):f.version<u.version&&(o(f.buffer,u,h),f.version=u.version)}return{get:a,remove:l,update:c}}class cl extends on{constructor(t=1,n=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:r};const o=t/2,a=n/2,l=Math.floor(s),c=Math.floor(r),u=l+1,h=c+1,f=t/l,d=n/c,m=[],_=[],x=[],g=[];for(let p=0;p<h;p++){const A=p*d-a;for(let S=0;S<u;S++){const E=S*f-o;_.push(E,-A,0),x.push(0,0,1),g.push(S/l),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<l;A++){const S=A+u*p,E=A+u*(p+1),R=A+1+u*(p+1),L=A+1+u*p;m.push(S,E,L),m.push(E,R,L)}this.setIndex(m),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
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
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e_=`#ifdef USE_IRIDESCENCE
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
#endif`,t_=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,f_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,L_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,U_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,j_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,bx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,jx=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,tv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,rv=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,hv=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pv=`uniform float size;
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
}`,mv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,_v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,vv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ze={alphahash_fragment:Vg,alphahash_pars_fragment:Wg,alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:Kg,aomap_pars_fragment:$g,begin_vertex:Zg,beginnormal_vertex:Jg,bsdfs:Qg,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:r_,color_fragment:o_,color_pars_fragment:a_,color_pars_vertex:l_,color_vertex:c_,common:u_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:f_,displacementmap_pars_vertex:d_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:x_,envmap_fragment:v_,envmap_common_pars_fragment:M_,envmap_pars_fragment:y_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:U_,envmap_vertex:E_,fog_vertex:T_,fog_pars_vertex:b_,fog_fragment:A_,fog_pars_fragment:w_,gradientmap_pars_fragment:R_,lightmap_fragment:C_,lightmap_pars_fragment:L_,lights_lambert_fragment:P_,lights_lambert_pars_fragment:I_,lights_pars_begin:D_,lights_toon_fragment:N_,lights_toon_pars_fragment:F_,lights_phong_fragment:O_,lights_phong_pars_fragment:B_,lights_physical_fragment:H_,lights_physical_pars_fragment:z_,lights_fragment_begin:G_,lights_fragment_maps:k_,lights_fragment_end:V_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:j_,map_fragment:Y_,map_pars_fragment:K_,map_particle_fragment:$_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ox,normal_pars_vertex:ax,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:dx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:_x,dithering_fragment:xx,dithering_pars_fragment:vx,roughnessmap_fragment:Mx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Ex,shadowmap_vertex:Tx,shadowmask_pars_fragment:bx,skinbase_vertex:Ax,skinning_pars_vertex:wx,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Lx,specularmap_pars_fragment:Px,tonemapping_fragment:Ix,tonemapping_pars_fragment:Dx,transmission_fragment:Ux,transmission_pars_fragment:Nx,uv_pars_fragment:Fx,uv_pars_vertex:Ox,uv_vertex:Bx,worldpos_vertex:Hx,background_vert:zx,background_frag:Gx,backgroundCube_vert:kx,backgroundCube_frag:Vx,cube_vert:Wx,cube_frag:Xx,depth_vert:qx,depth_frag:jx,distanceRGBA_vert:Yx,distanceRGBA_frag:Kx,equirect_vert:$x,equirect_frag:Zx,linedashed_vert:Jx,linedashed_frag:Qx,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:uv,meshphysical_frag:hv,meshtoon_vert:fv,meshtoon_frag:dv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:_v,sprite_vert:xv,sprite_frag:vv},de={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},hn={basic:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Pt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Pt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Pt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Pt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Pt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Pt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Pt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Pt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Pt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Pt([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Pt([de.lights,de.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};hn.physical={uniforms:Pt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Lr={r:0,b:0,g:0};function Mv(i,t,n,s,r,o,a){const l=new Fe(0);let c=o===!0?0:1,u,h,f=null,d=0,m=null;function _(g,p){let A=!1,S=p.isScene===!0?p.background:null;switch(S&&S.isTexture&&(S=(p.backgroundBlurriness>0?n:t).get(S)),S===null?x(l,c):S&&S.isColor&&(x(S,1),A=!0),i.xr.getEnvironmentBlendMode()){case"opaque":A=!0;break;case"additive":s.buffers.color.setClear(0,0,0,1,a),A=!0;break;case"alpha-blend":s.buffers.color.setClear(0,0,0,0,a),A=!0;break}(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===co)?(h===void 0&&(h=new Gt(new Es(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:gs(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,C,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=S.colorSpace!==Ue,(f!==S||d!==S.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Gt(new cl(2,2),new wi({name:"BackgroundMaterial",uniforms:gs(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=S.colorSpace!==Ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function x(g,p){g.getRGB(Lr,tf(i)),s.buffers.color.setClear(Lr.r,Lr.g,Lr.b,p,a)}return{getClearColor:function(){return l},setClearColor:function(g,p=1){l.set(g),c=p,x(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(l,c)},render:_}}function yv(i,t,n,s){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=s.isWebGL2?null:t.get("OES_vertex_array_object"),a=s.isWebGL2||o!==null,l={},c=g(null);let u=c,h=!1;function f(Y,Z,re,U,O){let se=!1;if(a){const te=x(U,re,Z);u!==te&&(u=te,m(u.object)),se=p(Y,U,re,O),se&&A(Y,U,re,O)}else{const te=Z.wireframe===!0;(u.geometry!==U.id||u.program!==re.id||u.wireframe!==te)&&(u.geometry=U.id,u.program=re.id,u.wireframe=te,se=!0)}O!==null&&n.update(O,i.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,j(Y,Z,re,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,n.get(O).buffer))}function d(){return s.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function m(Y){return s.isWebGL2?i.bindVertexArray(Y):o.bindVertexArrayOES(Y)}function _(Y){return s.isWebGL2?i.deleteVertexArray(Y):o.deleteVertexArrayOES(Y)}function x(Y,Z,re){const U=re.wireframe===!0;let O=l[Y.id];O===void 0&&(O={},l[Y.id]=O);let se=O[Z.id];se===void 0&&(se={},O[Z.id]=se);let te=se[U];return te===void 0&&(te=g(d()),se[U]=te),te}function g(Y){const Z=[],re=[],U=[];for(let O=0;O<r;O++)Z[O]=0,re[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:re,attributeDivisors:U,object:Y,attributes:{},index:null}}function p(Y,Z,re,U){const O=u.attributes,se=Z.attributes;let te=0;const G=re.getAttributes();for(const X in G)if(G[X].location>=0){const xe=O[X];let Se=se[X];if(Se===void 0&&(X==="instanceMatrix"&&Y.instanceMatrix&&(Se=Y.instanceMatrix),X==="instanceColor"&&Y.instanceColor&&(Se=Y.instanceColor)),xe===void 0||xe.attribute!==Se||Se&&xe.data!==Se.data)return!0;te++}return u.attributesNum!==te||u.index!==U}function A(Y,Z,re,U){const O={},se=Z.attributes;let te=0;const G=re.getAttributes();for(const X in G)if(G[X].location>=0){let xe=se[X];xe===void 0&&(X==="instanceMatrix"&&Y.instanceMatrix&&(xe=Y.instanceMatrix),X==="instanceColor"&&Y.instanceColor&&(xe=Y.instanceColor));const Se={};Se.attribute=xe,xe&&xe.data&&(Se.data=xe.data),O[X]=Se,te++}u.attributes=O,u.attributesNum=te,u.index=U}function S(){const Y=u.newAttributes;for(let Z=0,re=Y.length;Z<re;Z++)Y[Z]=0}function E(Y){R(Y,0)}function R(Y,Z){const re=u.newAttributes,U=u.enabledAttributes,O=u.attributeDivisors;re[Y]=1,U[Y]===0&&(i.enableVertexAttribArray(Y),U[Y]=1),O[Y]!==Z&&((s.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,Z),O[Y]=Z)}function L(){const Y=u.newAttributes,Z=u.enabledAttributes;for(let re=0,U=Z.length;re<U;re++)Z[re]!==Y[re]&&(i.disableVertexAttribArray(re),Z[re]=0)}function C(Y,Z,re,U,O,se,te){te===!0?i.vertexAttribIPointer(Y,Z,re,O,se):i.vertexAttribPointer(Y,Z,re,U,O,se)}function j(Y,Z,re,U){if(s.isWebGL2===!1&&(Y.isInstancedMesh||U.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const O=U.attributes,se=re.getAttributes(),te=Z.defaultAttributeValues;for(const G in se){const X=se[G];if(X.location>=0){let ge=O[G];if(ge===void 0&&(G==="instanceMatrix"&&Y.instanceMatrix&&(ge=Y.instanceMatrix),G==="instanceColor"&&Y.instanceColor&&(ge=Y.instanceColor)),ge!==void 0){const xe=ge.normalized,Se=ge.itemSize,Te=n.get(ge);if(Te===void 0)continue;const Le=Te.buffer,Re=Te.type,Xe=Te.bytesPerElement,mt=s.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||ge.gpuType===Oh);if(ge.isInterleavedBufferAttribute){const Ne=ge.data,v=Ne.stride,P=ge.offset;if(Ne.isInstancedInterleavedBuffer){for(let F=0;F<X.locationSize;F++)R(X.location+F,Ne.meshPerAttribute);Y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let F=0;F<X.locationSize;F++)E(X.location+F);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let F=0;F<X.locationSize;F++)C(X.location+F,Se/X.locationSize,Re,xe,v*Xe,(P+Se/X.locationSize*F)*Xe,mt)}else{if(ge.isInstancedBufferAttribute){for(let Ne=0;Ne<X.locationSize;Ne++)R(X.location+Ne,ge.meshPerAttribute);Y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)E(X.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Ne=0;Ne<X.locationSize;Ne++)C(X.location+Ne,Se/X.locationSize,Re,xe,Se*Xe,Se/X.locationSize*Ne*Xe,mt)}}else if(te!==void 0){const xe=te[G];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(X.location,xe);break;case 3:i.vertexAttrib3fv(X.location,xe);break;case 4:i.vertexAttrib4fv(X.location,xe);break;default:i.vertexAttrib1fv(X.location,xe)}}}}L()}function T(){ue();for(const Y in l){const Z=l[Y];for(const re in Z){const U=Z[re];for(const O in U)_(U[O].object),delete U[O];delete Z[re]}delete l[Y]}}function w(Y){if(l[Y.id]===void 0)return;const Z=l[Y.id];for(const re in Z){const U=Z[re];for(const O in U)_(U[O].object),delete U[O];delete Z[re]}delete l[Y.id]}function ce(Y){for(const Z in l){const re=l[Z];if(re[Y.id]===void 0)continue;const U=re[Y.id];for(const O in U)_(U[O].object),delete U[O];delete re[Y.id]}}function ue(){k(),h=!0,u!==c&&(u=c,m(u.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:ue,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:ce,initAttributes:S,enableAttribute:E,disableUnusedAttributes:L}}function Sv(i,t,n,s){const r=s.isWebGL2;let o;function a(u){o=u}function l(u,h){i.drawArrays(o,u,h),n.update(h,o,1)}function c(u,h,f){if(f===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](o,u,h,f),n.update(h,o,f)}this.setMode=a,this.render=l,this.renderInstances=c}function Ev(i,t,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=n.precision!==void 0?n.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=a||t.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,E=a||t.has("OES_texture_float"),R=S&&E,L=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:S,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:L}}function Tv(i){const t=this;let n=null,s=0,r=!1,o=!1;const a=new fi,l=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||s!==0||r;return r=d,s=f.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||_===null||_.length===0||o&&!g)o?h(null):u();else{const A=o?0:s,S=A*4;let E=p.clippingState||null;c.value=E,E=h(_,d,S,m);for(let R=0;R!==S;++R)E[R]=n[R];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function h(f,d,m,_){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=c.value,_!==!0||g===null){const p=m+x*4,A=d.matrixWorldInverse;l.getNormalMatrix(A),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,E=m;S!==x;++S,E+=4)a.copy(f[S]).applyMatrix4(A,l),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function bv(i){let t=new WeakMap;function n(a,l){return l===ya?a.mapping=us:l===Sa&&(a.mapping=hs),a}function s(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping;if(l===ya||l===Sa)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Hg(c.height/2);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap}return{get:s,dispose:o}}class ul extends nf{constructor(t=-1,n=1,s=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=s-t,a=s+t,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qi=4,$c=[.125,.215,.35,.446,.526,.582],gi=20,Yo=new ul,Zc=new Fe;let Ko=null;const di=(1+Math.sqrt(5))/2,qi=1/di,Jc=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,di,qi),new N(0,di,-qi),new N(qi,0,di),new N(-qi,0,di),new N(di,qi,0),new N(-di,qi,0)];class Qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,s=.1,r=100){Ko=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,s,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko),t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===us||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget();const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Js,format:qt,colorSpace:xn,depthBuffer:!1},r=eu(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,n,s);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(o)),this._blurMaterial=wv(o,t,n)}return r}_compileMaterial(t){const n=new Gt(this._lodPlanes[0],t);this._renderer.compile(n,Yo)}_sceneToCubeUV(t,n,s,r){const l=new It(90,1,n,s),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Zc),h.toneMapping=Jn,h.autoClear=!1;const m=new Yn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),_=new Gt(new Es,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(Zc),x=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(l.up.set(0,c[p],0),l.lookAt(u[p],0,0)):A===1?(l.up.set(0,0,c[p]),l.lookAt(0,u[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,u[p]));const S=this._cubeSize;Pr(r,A*S,p>2?S:0,S,S),h.setRenderTarget(r),x&&h.render(_,l),h.render(t,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=g}_textureToCubeUV(t,n){const s=this._renderer,r=t.mapping===us||t.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const c=this._cubeSize;Pr(n,0,0,3*c,2*c),s.setRenderTarget(n),s.render(a,Yo)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jc[(r-1)%Jc.length];this._blur(t,r-1,r,o,a)}n.autoClear=s}_blur(t,n,s,r,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,s,r,"latitudinal",o),this._halfBlur(a,t,s,s,r,"longitudinal",o)}_halfBlur(t,n,s,r,o,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Gt(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[s]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*gi-1),x=o/_,g=isFinite(o)?1+Math.floor(h*x):gi;g>gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gi}`);const p=[];let A=0;for(let C=0;C<gi;++C){const j=C/x,T=Math.exp(-j*j/2);p.push(T),C===0?A+=T:C<g&&(A+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-s;const E=this._sizeLods[r],R=3*E*(r>S-Qi?r-S+Qi:0),L=4*(this._cubeSize-E);Pr(n,R,L,3*E,2*E),c.setRenderTarget(n),c.render(f,Yo)}}function Av(i){const t=[],n=[],s=[];let r=i;const o=i-Qi+1+$c.length;for(let a=0;a<o;a++){const l=Math.pow(2,r);n.push(l);let c=1/l;a>i-Qi?c=$c[a-i+Qi-1]:a===0&&(c=0),s.push(c);const u=1/(l-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,x=3,g=2,p=1,A=new Float32Array(x*_*m),S=new Float32Array(g*_*m),E=new Float32Array(p*_*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,j=L>2?0:-1,T=[C,j,0,C+2/3,j,0,C+2/3,j+1,0,C,j,0,C+2/3,j+1,0,C,j+1,0];A.set(T,x*_*L),S.set(d,g*_*L);const w=[L,L,L,L,L,L];E.set(w,p*_*L)}const R=new on;R.setAttribute("position",new At(A,x)),R.setAttribute("uv",new At(S,g)),R.setAttribute("faceIndex",new At(E,p)),t.push(R),r>Qi&&r--}return{lodPlanes:t,sizeLods:n,sigmas:s}}function eu(i,t,n){const s=new Ai(i,t,n);return s.texture.mapping=co,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(i,t,n,s,r){i.viewport.set(t,n,s,r),i.scissor.set(t,n,s,r)}function wv(i,t,n){const s=new Float32Array(gi),r=new N(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function tu(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function nu(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Rv(i){let t=new WeakMap,n=null;function s(l){if(l&&l.isTexture){const c=l.mapping,u=c===ya||c===Sa,h=c===us||c===hs;if(u||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let f=t.get(l);return n===null&&(n=new Qc(i)),f=u?n.fromEquirectangular(l,f):n.fromCubemap(l,f),t.set(l,f),f.texture}else{if(t.has(l))return t.get(l).texture;{const f=l.image;if(u&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new Qc(i));const d=u?n.fromEquirectangular(l):n.fromCubemap(l);return t.set(l,d),l.addEventListener("dispose",o),d.texture}else return null}}}return l}function r(l){let c=0;const u=6;for(let h=0;h<u;h++)l[h]!==void 0&&c++;return c===u}function o(l){const c=l.target;c.removeEventListener("dispose",o);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:a}}function Cv(i){const t={};function n(s){if(t[s]!==void 0)return t[s];let r;switch(s){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(s)}return t[s]=r,r}return{has:function(s){return n(s)!==null},init:function(s){s.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(s){const r=n(s);return r===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),r}}}function Lv(i,t,n,s){const r={},o=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete r[d.id];const m=o.get(d);m&&(t.remove(m),o.delete(d)),s.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function l(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function u(f){const d=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let S=0,E=A.length;S<E;S+=3){const R=A[S+0],L=A[S+1],C=A[S+2];d.push(R,L,L,C,C,R)}}else if(_!==void 0){const A=_.array;x=_.version;for(let S=0,E=A.length/3-1;S<E;S+=3){const R=S+0,L=S+1,C=S+2;d.push(R,L,L,C,C,R)}}else return;const g=new(Yh(d)?ef:Qh)(d,1);g.version=x;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function h(f){const d=o.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return o.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function Pv(i,t,n,s){const r=s.isWebGL2;let o;function a(d){o=d}let l,c;function u(d){l=d.type,c=d.bytesPerElement}function h(d,m){i.drawElements(o,m,l,d*c),n.update(m,o,1)}function f(d,m,_){if(_===0)return;let x,g;if(r)x=i,g="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](o,m,l,d*c,_),n.update(m,o,_)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=f}function Iv(i){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(o,a,l){switch(n.calls++,a){case i.TRIANGLES:n.triangles+=l*(o/3);break;case i.LINES:n.lines+=l*(o/2);break;case i.LINE_STRIP:n.lines+=l*(o-1);break;case i.LINE_LOOP:n.lines+=l*o;break;case i.POINTS:n.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:s}}function Dv(i,t){return i[0]-t[0]}function Uv(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Nv(i,t,n){const s={},r=new Float32Array(8),o=new WeakMap,a=new et,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,h,f){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let g=o.get(h);if(g===void 0||g.count!==x){let Z=function(){k.dispose(),o.delete(h),h.removeEventListener("dispose",Z)};var m=Z;g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],j=h.morphAttributes.color||[];let T=0;S===!0&&(T=1),E===!0&&(T=2),R===!0&&(T=3);let w=h.attributes.position.count*T,ce=1;w>t.maxTextureSize&&(ce=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const ue=new Float32Array(w*ce*4*x),k=new Zh(ue,w,ce,x);k.type=In,k.needsUpdate=!0;const Y=T*4;for(let re=0;re<x;re++){const U=L[re],O=C[re],se=j[re],te=w*ce*4*re;for(let G=0;G<U.count;G++){const X=G*Y;S===!0&&(a.fromBufferAttribute(U,G),ue[te+X+0]=a.x,ue[te+X+1]=a.y,ue[te+X+2]=a.z,ue[te+X+3]=0),E===!0&&(a.fromBufferAttribute(O,G),ue[te+X+4]=a.x,ue[te+X+5]=a.y,ue[te+X+6]=a.z,ue[te+X+7]=0),R===!0&&(a.fromBufferAttribute(se,G),ue[te+X+8]=a.x,ue[te+X+9]=a.y,ue[te+X+10]=a.z,ue[te+X+11]=se.itemSize===4?a.w:1)}}g={count:x,texture:k,size:new Ye(w,ce)},o.set(h,g),h.addEventListener("dispose",Z)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];const A=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const _=d===void 0?0:d.length;let x=s[h.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];s[h.id]=x}for(let E=0;E<_;E++){const R=x[E];R[0]=E,R[1]=d[E]}x.sort(Uv);for(let E=0;E<8;E++)E<_&&x[E][1]?(l[E][0]=x[E][0],l[E][1]=x[E][1]):(l[E][0]=Number.MAX_SAFE_INTEGER,l[E][1]=0);l.sort(Dv);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let A=0;for(let E=0;E<8;E++){const R=l[E],L=R[0],C=R[1];L!==Number.MAX_SAFE_INTEGER&&C?(g&&h.getAttribute("morphTarget"+E)!==g[L]&&h.setAttribute("morphTarget"+E,g[L]),p&&h.getAttribute("morphNormal"+E)!==p[L]&&h.setAttribute("morphNormal"+E,p[L]),r[E]=C,A+=C):(g&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),p&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const S=h.morphTargetsRelative?1:1-A;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Fv(i,t,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const of=new xt,af=new Zh,lf=new Eg,cf=new sf,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function Ts(i,t,n){const s=i[0];if(s<=0||s>0)return i;const r=t*n;let o=iu[r];if(o===void 0&&(o=new Float32Array(r),iu[r]=o),t!==0){s.toArray(o,0);for(let a=1,l=0;a!==t;++a)l+=n,i[a].toArray(o,l)}return o}function dt(i,t){if(i.length!==t.length)return!1;for(let n=0,s=i.length;n<s;n++)if(i[n]!==t[n])return!1;return!0}function pt(i,t){for(let n=0,s=t.length;n<s;n++)i[n]=t[n]}function uo(i,t){let n=su[t];n===void 0&&(n=new Int32Array(t),su[t]=n);for(let s=0;s!==t;++s)n[s]=i.allocateTextureUnit();return n}function Ov(i,t){const n=this.cache;n[0]!==t&&(i.uniform1f(this.addr,t),n[0]=t)}function Bv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dt(n,t))return;i.uniform2fv(this.addr,t),pt(n,t)}}function Hv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(dt(n,t))return;i.uniform3fv(this.addr,t),pt(n,t)}}function zv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dt(n,t))return;i.uniform4fv(this.addr,t),pt(n,t)}}function Gv(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(dt(n,t))return;i.uniformMatrix2fv(this.addr,!1,t),pt(n,t)}else{if(dt(n,s))return;au.set(s),i.uniformMatrix2fv(this.addr,!1,au),pt(n,s)}}function kv(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(dt(n,t))return;i.uniformMatrix3fv(this.addr,!1,t),pt(n,t)}else{if(dt(n,s))return;ou.set(s),i.uniformMatrix3fv(this.addr,!1,ou),pt(n,s)}}function Vv(i,t){const n=this.cache,s=t.elements;if(s===void 0){if(dt(n,t))return;i.uniformMatrix4fv(this.addr,!1,t),pt(n,t)}else{if(dt(n,s))return;ru.set(s),i.uniformMatrix4fv(this.addr,!1,ru),pt(n,s)}}function Wv(i,t){const n=this.cache;n[0]!==t&&(i.uniform1i(this.addr,t),n[0]=t)}function Xv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dt(n,t))return;i.uniform2iv(this.addr,t),pt(n,t)}}function qv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dt(n,t))return;i.uniform3iv(this.addr,t),pt(n,t)}}function jv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dt(n,t))return;i.uniform4iv(this.addr,t),pt(n,t)}}function Yv(i,t){const n=this.cache;n[0]!==t&&(i.uniform1ui(this.addr,t),n[0]=t)}function Kv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(dt(n,t))return;i.uniform2uiv(this.addr,t),pt(n,t)}}function $v(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(dt(n,t))return;i.uniform3uiv(this.addr,t),pt(n,t)}}function Zv(i,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(dt(n,t))return;i.uniform4uiv(this.addr,t),pt(n,t)}}function Jv(i,t,n){const s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r),n.setTexture2D(t||of,r)}function Qv(i,t,n){const s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r),n.setTexture3D(t||lf,r)}function e0(i,t,n){const s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r),n.setTextureCube(t||cf,r)}function t0(i,t,n){const s=this.cache,r=n.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r),n.setTexture2DArray(t||af,r)}function n0(i){switch(i){case 5126:return Ov;case 35664:return Bv;case 35665:return Hv;case 35666:return zv;case 35674:return Gv;case 35675:return kv;case 35676:return Vv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return jv;case 5125:return Yv;case 36294:return Kv;case 36295:return $v;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}function i0(i,t){i.uniform1fv(this.addr,t)}function s0(i,t){const n=Ts(t,this.size,2);i.uniform2fv(this.addr,n)}function r0(i,t){const n=Ts(t,this.size,3);i.uniform3fv(this.addr,n)}function o0(i,t){const n=Ts(t,this.size,4);i.uniform4fv(this.addr,n)}function a0(i,t){const n=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,n)}function l0(i,t){const n=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,n)}function c0(i,t){const n=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,n)}function u0(i,t){i.uniform1iv(this.addr,t)}function h0(i,t){i.uniform2iv(this.addr,t)}function f0(i,t){i.uniform3iv(this.addr,t)}function d0(i,t){i.uniform4iv(this.addr,t)}function p0(i,t){i.uniform1uiv(this.addr,t)}function m0(i,t){i.uniform2uiv(this.addr,t)}function g0(i,t){i.uniform3uiv(this.addr,t)}function _0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,n){const s=this.cache,r=t.length,o=uo(n,r);dt(s,o)||(i.uniform1iv(this.addr,o),pt(s,o));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||of,o[a])}function v0(i,t,n){const s=this.cache,r=t.length,o=uo(n,r);dt(s,o)||(i.uniform1iv(this.addr,o),pt(s,o));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||lf,o[a])}function M0(i,t,n){const s=this.cache,r=t.length,o=uo(n,r);dt(s,o)||(i.uniform1iv(this.addr,o),pt(s,o));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||cf,o[a])}function y0(i,t,n){const s=this.cache,r=t.length,o=uo(n,r);dt(s,o)||(i.uniform1iv(this.addr,o),pt(s,o));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||af,o[a])}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return u0;case 35667:case 35671:return h0;case 35668:case 35672:return f0;case 35669:case 35673:return d0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return y0}}class E0{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.setValue=n0(n.type)}}class T0{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.size=n.size,this.setValue=S0(n.type)}}class b0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const l=r[o];l.setValue(t,n[l.id],s)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function lu(i,t){i.seq.push(t),i.map[t.id]=t}function A0(i,t,n){const s=i.name,r=s.length;for($o.lastIndex=0;;){const o=$o.exec(s),a=$o.lastIndex;let l=o[1];const c=o[2]==="]",u=o[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){lu(n,u===void 0?new E0(l,i,t):new T0(l,i,t));break}else{let f=n.map[l];f===void 0&&(f=new b0(l),lu(n,f)),n=f}}}class Wr{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const o=t.getActiveUniform(n,r),a=t.getUniformLocation(n,o.name);A0(o,a,this)}}setValue(t,n,s,r){const o=this.map[n];o!==void 0&&o.setValue(t,s,r)}setOptional(t,n,s){const r=n[s];r!==void 0&&this.setValue(t,s,r)}static upload(t,n,s,r){for(let o=0,a=n.length;o!==a;++o){const l=n[o],c=s[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,r)}}static seqWithValue(t,n){const s=[];for(let r=0,o=t.length;r!==o;++r){const a=t[r];a.id in n&&s.push(a)}return s}}function cu(i,t,n){const s=i.createShader(t);return i.shaderSource(s,n),i.compileShader(s),s}let w0=0;function R0(i,t){const n=i.split(`
`),s=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let a=r;a<o;a++){const l=a+1;s.push(`${l===t?">":" "} ${l}: ${n[a]}`)}return s.join(`
`)}function C0(i){switch(i){case xn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function uu(i,t,n){const s=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(s&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+R0(i.getShaderSource(t),a)}else return r}function L0(i,t){const n=C0(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function P0(i,t){let n;switch(t){case wm:n="Linear";break;case Rm:n="Reinhard";break;case Cm:n="OptimizedCineon";break;case Lm:n="ACESFilmic";break;case Pm:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+i+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function I0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function D0(i){const t=[];for(const n in i){const s=i[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function U0(i,t){const n={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const o=i.getActiveAttrib(t,r),a=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),n[a]={type:o.type,location:i.getAttribLocation(t,a),locationSize:l}}return n}function zs(i){return i!==""}function hu(i,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(N0,O0)}const F0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function O0(i,t){let n=ze[t];if(n===void 0){const s=F0.get(t);if(s!==void 0)n=ze[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ra(n)}const B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(B0,H0)}function H0(i,t,n,s){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function pu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ph?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function G0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case hs:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function V0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uh:t="ENVMAP_BLENDING_MULTIPLY";break;case bm:t="ENVMAP_BLENDING_MIX";break;case Am:t="ENVMAP_BLENDING_ADD";break}return t}function W0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function X0(i,t,n,s){const r=i.getContext(),o=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=z0(n),u=G0(n),h=k0(n),f=V0(n),d=W0(n),m=n.isWebGL2?"":I0(n),_=D0(o),x=r.createProgram();let g,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(zs).join(`
`),g.length>0&&(g+=`
`),p=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(g=[pu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[m,pu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Jn?"#define TONE_MAPPING":"",n.toneMapping!==Jn?ze.tonemapping_pars_fragment:"",n.toneMapping!==Jn?P0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,L0("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zs).join(`
`)),a=Ra(a),a=hu(a,n),a=fu(a,n),l=Ra(l),l=hu(l,n),l=fu(l,n),a=du(a),l=du(l),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=A+g+a,E=A+p+l,R=cu(r,r.VERTEX_SHADER,S),L=cu(r,r.FRAGMENT_SHADER,E);if(r.attachShader(x,R),r.attachShader(x,L),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(x).trim(),w=r.getShaderInfoLog(R).trim(),ce=r.getShaderInfoLog(L).trim();let ue=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,L);else{const Y=uu(r,R,"vertex"),Z=uu(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+T+`
`+Y+`
`+Z)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(w===""||ce==="")&&(k=!1);k&&(this.diagnostics={runnable:ue,programLog:T,vertexShader:{log:w,prefix:g},fragmentShader:{log:ce,prefix:p}})}r.deleteShader(R),r.deleteShader(L);let C;this.getUniforms=function(){return C===void 0&&(C=new Wr(r,x)),C};let j;return this.getAttributes=function(){return j===void 0&&(j=U0(r,x)),j},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=L,this}let q0=0;class j0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(s),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new Y0(t),n.set(t,s)),s}}class Y0{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}}function K0(i,t,n,s,r,o,a){const l=new al,c=new j0,u=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function g(T,w,ce,ue,k){const Y=ue.fog,Z=k.geometry,re=T.isMeshStandardMaterial?ue.environment:null,U=(T.isMeshStandardMaterial?n:t).get(T.envMap||re),O=U&&U.mapping===co?U.image.height:null,se=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const te=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,G=te!==void 0?te.length:0;let X=0;Z.morphAttributes.position!==void 0&&(X=1),Z.morphAttributes.normal!==void 0&&(X=2),Z.morphAttributes.color!==void 0&&(X=3);let ge,xe,Se,Te;if(se){const nt=hn[se];ge=nt.vertexShader,xe=nt.fragmentShader}else ge=T.vertexShader,xe=T.fragmentShader,c.update(T),Se=c.getVertexShaderID(T),Te=c.getFragmentShaderID(T);const Le=i.getRenderTarget(),Re=k.isInstancedMesh===!0,Xe=!!T.map,mt=!!T.matcap,Ne=!!U,v=!!T.aoMap,P=!!T.lightMap,F=!!T.bumpMap,V=!!T.normalMap,z=!!T.displacementMap,oe=!!T.emissiveMap,ae=!!T.metalnessMap,J=!!T.roughnessMap,le=T.anisotropy>0,ie=T.clearcoat>0,ye=T.iridescence>0,y=T.sheen>0,M=T.transmission>0,D=le&&!!T.anisotropyMap,Q=ie&&!!T.clearcoatMap,ee=ie&&!!T.clearcoatNormalMap,ne=ie&&!!T.clearcoatRoughnessMap,pe=ye&&!!T.iridescenceMap,he=ye&&!!T.iridescenceThicknessMap,W=y&&!!T.sheenColorMap,we=y&&!!T.sheenRoughnessMap,be=!!T.specularMap,Ae=!!T.specularColorMap,me=!!T.specularIntensityMap,ve=M&&!!T.transmissionMap,Be=M&&!!T.thicknessMap,tt=!!T.gradientMap,I=!!T.alphaMap,_e=T.alphaTest>0,q=!!T.alphaHash,fe=!!T.extensions,Me=!!Z.attributes.uv1,$e=!!Z.attributes.uv2,st=!!Z.attributes.uv3;let lt=Jn;return T.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(lt=i.toneMapping),{isWebGL2:h,shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:ge,fragmentShader:xe,defines:T.defines,customVertexShaderID:Se,customFragmentShaderID:Te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,instancing:Re,instancingColor:Re&&k.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:xn,map:Xe,matcap:mt,envMap:Ne,envMapMode:Ne&&U.mapping,envMapCubeUVHeight:O,aoMap:v,lightMap:P,bumpMap:F,normalMap:V,displacementMap:d&&z,emissiveMap:oe,normalMapObjectSpace:V&&T.normalMapType===Xm,normalMapTangentSpace:V&&T.normalMapType===Xh,metalnessMap:ae,roughnessMap:J,anisotropy:le,anisotropyMap:D,clearcoat:ie,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:ye,iridescenceMap:pe,iridescenceThicknessMap:he,sheen:y,sheenColorMap:W,sheenRoughnessMap:we,specularMap:be,specularColorMap:Ae,specularIntensityMap:me,transmission:M,transmissionMap:ve,thicknessMap:Be,gradientMap:tt,opaque:T.transparent===!1&&T.blending===ss,alphaMap:I,alphaTest:_e,alphaHash:q,combine:T.combine,mapUv:Xe&&x(T.map.channel),aoMapUv:v&&x(T.aoMap.channel),lightMapUv:P&&x(T.lightMap.channel),bumpMapUv:F&&x(T.bumpMap.channel),normalMapUv:V&&x(T.normalMap.channel),displacementMapUv:z&&x(T.displacementMap.channel),emissiveMapUv:oe&&x(T.emissiveMap.channel),metalnessMapUv:ae&&x(T.metalnessMap.channel),roughnessMapUv:J&&x(T.roughnessMap.channel),anisotropyMapUv:D&&x(T.anisotropyMap.channel),clearcoatMapUv:Q&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:W&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(T.sheenRoughnessMap.channel),specularMapUv:be&&x(T.specularMap.channel),specularColorMapUv:Ae&&x(T.specularColorMap.channel),specularIntensityMapUv:me&&x(T.specularIntensityMap.channel),transmissionMapUv:ve&&x(T.transmissionMap.channel),thicknessMapUv:Be&&x(T.thicknessMap.channel),alphaMapUv:I&&x(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(V||le),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:$e,vertexUv3s:st,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Xe||I),fog:!!Y,useFog:T.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:X,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&ce.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,useLegacyLights:i._useLegacyLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===dn,flipSided:T.side===Ft,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:fe&&T.extensions.derivatives===!0,extensionFragDepth:fe&&T.extensions.fragDepth===!0,extensionDrawBuffers:fe&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||s.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function p(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ce in T.defines)w.push(ce),w.push(T.defines[ce]);return T.isRawShaderMaterial===!1&&(A(w,T),S(w,T),w.push(i.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function A(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function S(T,w){l.disableAll(),w.isWebGL2&&l.enable(0),w.supportsVertexTextures&&l.enable(1),w.instancing&&l.enable(2),w.instancingColor&&l.enable(3),w.matcap&&l.enable(4),w.envMap&&l.enable(5),w.normalMapObjectSpace&&l.enable(6),w.normalMapTangentSpace&&l.enable(7),w.clearcoat&&l.enable(8),w.iridescence&&l.enable(9),w.alphaTest&&l.enable(10),w.vertexColors&&l.enable(11),w.vertexAlphas&&l.enable(12),w.vertexUv1s&&l.enable(13),w.vertexUv2s&&l.enable(14),w.vertexUv3s&&l.enable(15),w.vertexTangents&&l.enable(16),w.anisotropy&&l.enable(17),T.push(l.mask),l.disableAll(),w.fog&&l.enable(0),w.useFog&&l.enable(1),w.flatShading&&l.enable(2),w.logarithmicDepthBuffer&&l.enable(3),w.skinning&&l.enable(4),w.morphTargets&&l.enable(5),w.morphNormals&&l.enable(6),w.morphColors&&l.enable(7),w.premultipliedAlpha&&l.enable(8),w.shadowMapEnabled&&l.enable(9),w.useLegacyLights&&l.enable(10),w.doubleSided&&l.enable(11),w.flipSided&&l.enable(12),w.useDepthPacking&&l.enable(13),w.dithering&&l.enable(14),w.transmission&&l.enable(15),w.sheen&&l.enable(16),w.opaque&&l.enable(17),w.pointsUvs&&l.enable(18),T.push(l.mask)}function E(T){const w=_[T.type];let ce;if(w){const ue=hn[w];ce=Ng.clone(ue.uniforms)}else ce=T.uniforms;return ce}function R(T,w){let ce;for(let ue=0,k=u.length;ue<k;ue++){const Y=u[ue];if(Y.cacheKey===w){ce=Y,++ce.usedTimes;break}}return ce===void 0&&(ce=new X0(i,w,T,o),u.push(ce)),ce}function L(T){if(--T.usedTimes===0){const w=u.indexOf(T);u[w]=u[u.length-1],u.pop(),T.destroy()}}function C(T){c.remove(T)}function j(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:R,releaseProgram:L,releaseShaderCache:C,programs:u,dispose:j}}function $0(){let i=new WeakMap;function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{get:t,remove:n,update:s,dispose:r}}function Z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gu(){const i=[];let t=0;const n=[],s=[],r=[];function o(){t=0,n.length=0,s.length=0,r.length=0}function a(f,d,m,_,x,g){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=g),t++,p}function l(f,d,m,_,x,g){const p=a(f,d,m,_,x,g);m.transmission>0?s.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(f,d,m,_,x,g){const p=a(f,d,m,_,x,g);m.transmission>0?s.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,d){n.length>1&&n.sort(f||Z0),s.length>1&&s.sort(d||mu),r.length>1&&r.sort(d||mu)}function h(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:s,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function J0(){let i=new WeakMap;function t(s,r){const o=i.get(s);let a;return o===void 0?(a=new gu,i.set(s,[a])):r>=o.length?(a=new gu,o.push(a)):a=o[r],a}function n(){i=new WeakMap}return{get:t,dispose:n}}function Q0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new N,color:new Fe};break;case"SpotLight":n={position:new N,direction:new N,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=n,n}}}function eM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=n,n}}}let tM=0;function nM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function iM(i,t){const n=new Q0,s=eM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new N);const o=new N,a=new ke,l=new ke;function c(h,f){let d=0,m=0,_=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let x=0,g=0,p=0,A=0,S=0,E=0,R=0,L=0,C=0,j=0;h.sort(nM);const T=f===!0?Math.PI:1;for(let ce=0,ue=h.length;ce<ue;ce++){const k=h[ce],Y=k.color,Z=k.intensity,re=k.distance,U=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=Y.r*Z*T,m+=Y.g*Z*T,_+=Y.b*Z*T;else if(k.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(k.sh.coefficients[O],Z);else if(k.isDirectionalLight){const O=n.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const se=k.shadow,te=s.get(k);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,r.directionalShadow[x]=te,r.directionalShadowMap[x]=U,r.directionalShadowMatrix[x]=k.shadow.matrix,E++}r.directional[x]=O,x++}else if(k.isSpotLight){const O=n.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(Y).multiplyScalar(Z*T),O.distance=re,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,r.spot[p]=O;const se=k.shadow;if(k.map&&(r.spotLightMap[C]=k.map,C++,se.updateMatrices(k),k.castShadow&&j++),r.spotLightMatrix[p]=se.matrix,k.castShadow){const te=s.get(k);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,r.spotShadow[p]=te,r.spotShadowMap[p]=U,L++}p++}else if(k.isRectAreaLight){const O=n.get(k);O.color.copy(Y).multiplyScalar(Z),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),r.rectArea[A]=O,A++}else if(k.isPointLight){const O=n.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity*T),O.distance=k.distance,O.decay=k.decay,k.castShadow){const se=k.shadow,te=s.get(k);te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,te.shadowCameraNear=se.camera.near,te.shadowCameraFar=se.camera.far,r.pointShadow[g]=te,r.pointShadowMap[g]=U,r.pointShadowMatrix[g]=k.shadow.matrix,R++}r.point[g]=O,g++}else if(k.isHemisphereLight){const O=n.get(k);O.skyColor.copy(k.color).multiplyScalar(Z*T),O.groundColor.copy(k.groundColor).multiplyScalar(Z*T),r.hemi[S]=O,S++}}A>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==x||w.pointLength!==g||w.spotLength!==p||w.rectAreaLength!==A||w.hemiLength!==S||w.numDirectionalShadows!==E||w.numPointShadows!==R||w.numSpotShadows!==L||w.numSpotMaps!==C)&&(r.directional.length=x,r.spot.length=p,r.rectArea.length=A,r.point.length=g,r.hemi.length=S,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=L+C-j,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=j,w.directionalLength=x,w.pointLength=g,w.spotLength=p,w.rectAreaLength=A,w.hemiLength=S,w.numDirectionalShadows=E,w.numPointShadows=R,w.numSpotShadows=L,w.numSpotMaps=C,r.version=tM++)}function u(h,f){let d=0,m=0,_=0,x=0,g=0;const p=f.matrixWorldInverse;for(let A=0,S=h.length;A<S;A++){const E=h[A];if(E.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(p),d++}else if(E.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(E.matrixWorld),o.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(p),_++}else if(E.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),l.identity(),a.copy(E.matrixWorld),a.premultiply(p),l.extractRotation(a),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(l),R.halfHeight.applyMatrix4(l),x++}else if(E.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(p),m++}else if(E.isHemisphereLight){const R=r.hemi[g];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(p),g++}}}return{setup:c,setupView:u,state:r}}function _u(i,t){const n=new iM(i,t),s=[],r=[];function o(){s.length=0,r.length=0}function a(f){s.push(f)}function l(f){r.push(f)}function c(f){n.setup(s,f)}function u(f){n.setupView(s,f)}return{init:o,state:{lightsArray:s,shadowsArray:r,lights:n},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l}}function sM(i,t){let n=new WeakMap;function s(o,a=0){const l=n.get(o);let c;return l===void 0?(c=new _u(i,t),n.set(o,[c])):a>=l.length?(c=new _u(i,t),l.push(c)):c=l[a],c}function r(){n=new WeakMap}return{get:s,dispose:r}}class rM extends gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oM extends gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cM(i,t,n){let s=new ll;const r=new Ye,o=new Ye,a=new et,l=new rM({depthPacking:Wm}),c=new oM,u={},h=n.maxTextureSize,f={[Nn]:Ft,[Ft]:Nn,[dn]:dn},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:aM,fragmentShader:lM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let p=this.type;this.render=function(R,L,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const j=i.getRenderTarget(),T=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Zn),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ue=p!==Ln&&this.type===Ln,k=p===Ln&&this.type!==Ln;for(let Y=0,Z=R.length;Y<Z;Y++){const re=R[Y],U=re.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();if(r.multiply(O),o.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/O.x),r.x=o.x*O.x,U.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/O.y),r.y=o.y*O.y,U.mapSize.y=o.y)),U.map===null||ue===!0||k===!0){const te=this.type!==Ln?{minFilter:_t,magFilter:_t}:{};U.map!==null&&U.map.dispose(),U.map=new Ai(r.x,r.y,te),U.map.texture.name=re.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const se=U.getViewportCount();for(let te=0;te<se;te++){const G=U.getViewport(te);a.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),ce.viewport(a),U.updateMatrices(re,te),s=U.getFrustum(),E(L,C,U.camera,re,this.type)}U.isPointLightShadow!==!0&&this.type===Ln&&A(U,C),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(j,T,w)};function A(R,L){const C=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ai(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,C,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,C,m,x,null)}function S(R,L,C,j){let T=null;const w=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)T=w;else if(T=C.isPointLight===!0?c:l,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ce=T.uuid,ue=L.uuid;let k=u[ce];k===void 0&&(k={},u[ce]=k);let Y=k[ue];Y===void 0&&(Y=T.clone(),k[ue]=Y),T=Y}if(T.visible=L.visible,T.wireframe=L.wireframe,j===Ln?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:f[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ce=i.properties.get(T);ce.light=C}return T}function E(R,L,C,j,T){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Ln)&&(!R.frustumCulled||s.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const ue=t.update(R),k=R.material;if(Array.isArray(k)){const Y=ue.groups;for(let Z=0,re=Y.length;Z<re;Z++){const U=Y[Z],O=k[U.materialIndex];if(O&&O.visible){const se=S(R,O,j,T);i.renderBufferDirect(C,null,ue,se,R,U)}}}else if(k.visible){const Y=S(R,k,j,T);i.renderBufferDirect(C,null,ue,Y,R,null)}}const ce=R.children;for(let ue=0,k=ce.length;ue<k;ue++)E(ce[ue],L,C,j,T)}}function uM(i,t,n){const s=n.isWebGL2;function r(){let I=!1;const _e=new et;let q=null;const fe=new et(0,0,0,0);return{setMask:function(Me){q!==Me&&!I&&(i.colorMask(Me,Me,Me,Me),q=Me)},setLocked:function(Me){I=Me},setClear:function(Me,$e,st,lt,On){On===!0&&(Me*=lt,$e*=lt,st*=lt),_e.set(Me,$e,st,lt),fe.equals(_e)===!1&&(i.clearColor(Me,$e,st,lt),fe.copy(_e))},reset:function(){I=!1,q=null,fe.set(-1,0,0,0)}}}function o(){let I=!1,_e=null,q=null,fe=null;return{setTest:function(Me){Me?Le(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Me){_e!==Me&&!I&&(i.depthMask(Me),_e=Me)},setFunc:function(Me){if(q!==Me){switch(Me){case xm:i.depthFunc(i.NEVER);break;case vm:i.depthFunc(i.ALWAYS);break;case Mm:i.depthFunc(i.LESS);break;case Ma:i.depthFunc(i.LEQUAL);break;case ym:i.depthFunc(i.EQUAL);break;case Sm:i.depthFunc(i.GEQUAL);break;case Em:i.depthFunc(i.GREATER);break;case Tm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}q=Me}},setLocked:function(Me){I=Me},setClear:function(Me){fe!==Me&&(i.clearDepth(Me),fe=Me)},reset:function(){I=!1,_e=null,q=null,fe=null}}}function a(){let I=!1,_e=null,q=null,fe=null,Me=null,$e=null,st=null,lt=null,On=null;return{setTest:function(nt){I||(nt?Le(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(nt){_e!==nt&&!I&&(i.stencilMask(nt),_e=nt)},setFunc:function(nt,an,wt){(q!==nt||fe!==an||Me!==wt)&&(i.stencilFunc(nt,an,wt),q=nt,fe=an,Me=wt)},setOp:function(nt,an,wt){($e!==nt||st!==an||lt!==wt)&&(i.stencilOp(nt,an,wt),$e=nt,st=an,lt=wt)},setLocked:function(nt){I=nt},setClear:function(nt){On!==nt&&(i.clearStencil(nt),On=nt)},reset:function(){I=!1,_e=null,q=null,fe=null,Me=null,$e=null,st=null,lt=null,On=null}}}const l=new r,c=new o,u=new a,h=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,x=[],g=null,p=!1,A=null,S=null,E=null,R=null,L=null,C=null,j=null,T=!1,w=null,ce=null,ue=null,k=null,Y=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,U=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(O)[1]),re=U>=1):O.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),re=U>=2);let se=null,te={};const G=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),ge=new et().fromArray(G),xe=new et().fromArray(X);function Se(I,_e,q,fe){const Me=new Uint8Array(4),$e=i.createTexture();i.bindTexture(I,$e),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<q;st++)s&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(_e,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(_e+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return $e}const Te={};Te[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Te[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Le(i.DEPTH_TEST),c.setFunc(Ma),z(!1),oe(tc),Le(i.CULL_FACE),F(Zn);function Le(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Re(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Xe(I,_e){return m[I]!==_e?(i.bindFramebuffer(I,_e),m[I]=_e,s&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=_e),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=_e)),!0):!1}function mt(I,_e){let q=x,fe=!1;if(I)if(q=_.get(_e),q===void 0&&(q=[],_.set(_e,q)),I.isWebGLMultipleRenderTargets){const Me=I.texture;if(q.length!==Me.length||q[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,st=Me.length;$e<st;$e++)q[$e]=i.COLOR_ATTACHMENT0+$e;q.length=Me.length,fe=!0}}else q[0]!==i.COLOR_ATTACHMENT0&&(q[0]=i.COLOR_ATTACHMENT0,fe=!0);else q[0]!==i.BACK&&(q[0]=i.BACK,fe=!0);fe&&(n.isWebGL2?i.drawBuffers(q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function Ne(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const v={[Zi]:i.FUNC_ADD,[am]:i.FUNC_SUBTRACT,[lm]:i.FUNC_REVERSE_SUBTRACT};if(s)v[rc]=i.MIN,v[oc]=i.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(v[rc]=I.MIN_EXT,v[oc]=I.MAX_EXT)}const P={[cm]:i.ZERO,[um]:i.ONE,[hm]:i.SRC_COLOR,[Ih]:i.SRC_ALPHA,[_m]:i.SRC_ALPHA_SATURATE,[mm]:i.DST_COLOR,[dm]:i.DST_ALPHA,[fm]:i.ONE_MINUS_SRC_COLOR,[Dh]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[pm]:i.ONE_MINUS_DST_ALPHA};function F(I,_e,q,fe,Me,$e,st,lt){if(I===Zn){p===!0&&(Re(i.BLEND),p=!1);return}if(p===!1&&(Le(i.BLEND),p=!0),I!==om){if(I!==A||lt!==T){if((S!==Zi||L!==Zi)&&(i.blendEquation(i.FUNC_ADD),S=Zi,L=Zi),lt)switch(I){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,R=null,C=null,j=null,A=I,T=lt}return}Me=Me||_e,$e=$e||q,st=st||fe,(_e!==S||Me!==L)&&(i.blendEquationSeparate(v[_e],v[Me]),S=_e,L=Me),(q!==E||fe!==R||$e!==C||st!==j)&&(i.blendFuncSeparate(P[q],P[fe],P[$e],P[st]),E=q,R=fe,C=$e,j=st),A=I,T=!1}function V(I,_e){I.side===dn?Re(i.CULL_FACE):Le(i.CULL_FACE);let q=I.side===Ft;_e&&(q=!q),z(q),I.blending===ss&&I.transparent===!1?F(Zn):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),l.setMask(I.colorWrite);const fe=I.stencilWrite;u.setTest(fe),fe&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),J(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function z(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function oe(I){I!==im?(Le(i.CULL_FACE),I!==ce&&(I===tc?i.cullFace(i.BACK):I===sm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),ce=I}function ae(I){I!==ue&&(re&&i.lineWidth(I),ue=I)}function J(I,_e,q){I?(Le(i.POLYGON_OFFSET_FILL),(k!==_e||Y!==q)&&(i.polygonOffset(_e,q),k=_e,Y=q)):Re(i.POLYGON_OFFSET_FILL)}function le(I){I?Le(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function ie(I){I===void 0&&(I=i.TEXTURE0+Z-1),se!==I&&(i.activeTexture(I),se=I)}function ye(I,_e,q){q===void 0&&(se===null?q=i.TEXTURE0+Z-1:q=se);let fe=te[q];fe===void 0&&(fe={type:void 0,texture:void 0},te[q]=fe),(fe.type!==I||fe.texture!==_e)&&(se!==q&&(i.activeTexture(q),se=q),i.bindTexture(I,_e||Te[I]),fe.type=I,fe.texture=_e)}function y(){const I=te[se];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){ge.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ge.copy(I))}function me(I){xe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function ve(I,_e){let q=f.get(_e);q===void 0&&(q=new WeakMap,f.set(_e,q));let fe=q.get(I);fe===void 0&&(fe=i.getUniformBlockIndex(_e,I.name),q.set(I,fe))}function Be(I,_e){const fe=f.get(_e).get(I);h.get(_e)!==fe&&(i.uniformBlockBinding(_e,fe,I.__bindingPointIndex),h.set(_e,fe))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),s===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},se=null,te={},m={},_=new WeakMap,x=[],g=null,p=!1,A=null,S=null,E=null,R=null,L=null,C=null,j=null,T=!1,w=null,ce=null,ue=null,k=null,Y=null,ge.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:Le,disable:Re,bindFramebuffer:Xe,drawBuffers:mt,useProgram:Ne,setBlending:F,setMaterial:V,setFlipSided:z,setCullFace:oe,setLineWidth:ae,setPolygonOffset:J,setScissorTest:le,activeTexture:ie,bindTexture:ye,unbindTexture:y,compressedTexImage2D:M,compressedTexImage3D:D,texImage2D:we,texImage3D:be,updateUBOMapping:ve,uniformBlockBinding:Be,texStorage2D:he,texStorage3D:W,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:ne,compressedTexSubImage3D:pe,scissor:Ae,viewport:me,reset:tt}}function hM(i,t,n,s,r,o,a){const l=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(y,M){return p?new OffscreenCanvas(y,M):er("canvas")}function S(y,M,D,Q){let ee=1;if((y.width>Q||y.height>Q)&&(ee=Q/Math.max(y.width,y.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ne=M?Qr:Math.floor,pe=ne(ee*y.width),he=ne(ee*y.height);x===void 0&&(x=A(pe,he));const W=D?A(pe,he):x;return W.width=pe,W.height=he,W.getContext("2d").drawImage(y,0,0,pe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+pe+"x"+he+")."),W}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function E(y){return wa(y.width)&&wa(y.height)}function R(y){return l?!1:y.wrapS!==Xt||y.wrapT!==Xt||y.minFilter!==_t&&y.minFilter!==Nt}function L(y,M){return y.generateMipmaps&&M&&y.minFilter!==_t&&y.minFilter!==Nt}function C(y){i.generateMipmap(y)}function j(y,M,D,Q,ee=!1){if(l===!1)return M;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ne=M;return M===i.RED&&(D===i.FLOAT&&(ne=i.R32F),D===i.HALF_FLOAT&&(ne=i.R16F),D===i.UNSIGNED_BYTE&&(ne=i.R8)),M===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(ne=i.R8UI),D===i.UNSIGNED_SHORT&&(ne=i.R16UI),D===i.UNSIGNED_INT&&(ne=i.R32UI),D===i.BYTE&&(ne=i.R8I),D===i.SHORT&&(ne=i.R16I),D===i.INT&&(ne=i.R32I)),M===i.RG&&(D===i.FLOAT&&(ne=i.RG32F),D===i.HALF_FLOAT&&(ne=i.RG16F),D===i.UNSIGNED_BYTE&&(ne=i.RG8)),M===i.RGBA&&(D===i.FLOAT&&(ne=i.RGBA32F),D===i.HALF_FLOAT&&(ne=i.RGBA16F),D===i.UNSIGNED_BYTE&&(ne=Q===Ue&&ee===!1?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)),(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ne}function T(y,M,D){return L(y,D)===!0||y.isFramebufferTexture&&y.minFilter!==_t&&y.minFilter!==Nt?Math.log2(Math.max(M.width,M.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?M.mipmaps.length:1}function w(y){return y===_t||y===Ea||y===kr?i.NEAREST:i.LINEAR}function ce(y){const M=y.target;M.removeEventListener("dispose",ce),k(M),M.isVideoTexture&&_.delete(M)}function ue(y){const M=y.target;M.removeEventListener("dispose",ue),Z(M)}function k(y){const M=s.get(y);if(M.__webglInit===void 0)return;const D=y.source,Q=g.get(D);if(Q){const ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&Y(y),Object.keys(Q).length===0&&g.delete(D)}s.remove(y)}function Y(y){const M=s.get(y);i.deleteTexture(M.__webglTexture);const D=y.source,Q=g.get(D);delete Q[M.__cacheKey],a.memory.textures--}function Z(y){const M=y.texture,D=s.get(y),Q=s.get(M);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(D.__webglFramebuffer[ee]))for(let ne=0;ne<D.__webglFramebuffer[ee].length;ne++)i.deleteFramebuffer(D.__webglFramebuffer[ee][ne]);else i.deleteFramebuffer(D.__webglFramebuffer[ee]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[ee])}else{if(Array.isArray(D.__webglFramebuffer))for(let ee=0;ee<D.__webglFramebuffer.length;ee++)i.deleteFramebuffer(D.__webglFramebuffer[ee]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ee=0;ee<D.__webglColorRenderbuffer.length;ee++)D.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[ee]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ee=0,ne=M.length;ee<ne;ee++){const pe=s.get(M[ee]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),s.remove(M[ee])}s.remove(M),s.remove(y)}let re=0;function U(){re=0}function O(){const y=re;return y>=c&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+c),re+=1,y}function se(y){const M=[];return M.push(y.wrapS),M.push(y.wrapT),M.push(y.wrapR||0),M.push(y.magFilter),M.push(y.minFilter),M.push(y.anisotropy),M.push(y.internalFormat),M.push(y.format),M.push(y.type),M.push(y.generateMipmaps),M.push(y.premultiplyAlpha),M.push(y.flipY),M.push(y.unpackAlignment),M.push(y.colorSpace),M.join()}function te(y,M){const D=s.get(y);if(y.isVideoTexture&&ie(y),y.isRenderTargetTexture===!1&&y.version>0&&D.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(D,y,M);return}}n.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+M)}function G(y,M){const D=s.get(y);if(y.version>0&&D.__version!==y.version){Xe(D,y,M);return}n.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+M)}function X(y,M){const D=s.get(y);if(y.version>0&&D.__version!==y.version){Xe(D,y,M);return}n.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+M)}function ge(y,M){const D=s.get(y);if(y.version>0&&D.__version!==y.version){mt(D,y,M);return}n.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+M)}const xe={[fs]:i.REPEAT,[Xt]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},Se={[_t]:i.NEAREST,[Ea]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Fh]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Te={[jm]:i.NEVER,[eg]:i.ALWAYS,[Ym]:i.LESS,[$m]:i.LEQUAL,[Km]:i.EQUAL,[Qm]:i.GEQUAL,[Zm]:i.GREATER,[Jm]:i.NOTEQUAL};function Le(y,M,D){if(D?(i.texParameteri(y,i.TEXTURE_WRAP_S,xe[M.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,xe[M.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,xe[M.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Se[M.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Se[M.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Xt||M.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,w(M.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==_t&&M.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Te[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===_t||M.minFilter!==kr&&M.minFilter!==bi||M.type===In&&t.has("OES_texture_float_linear")===!1||l===!1&&M.type===Js&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||s.get(M).__currentAnisotropy)&&(i.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy)}}function Re(y,M){let D=!1;y.__webglInit===void 0&&(y.__webglInit=!0,M.addEventListener("dispose",ce));const Q=M.source;let ee=g.get(Q);ee===void 0&&(ee={},g.set(Q,ee));const ne=se(M);if(ne!==y.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),ee[ne].usedTimes++;const pe=ee[y.__cacheKey];pe!==void 0&&(ee[y.__cacheKey].usedTimes--,pe.usedTimes===0&&Y(M)),y.__cacheKey=ne,y.__webglTexture=ee[ne].texture}return D}function Xe(y,M,D){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const ee=Re(y,M),ne=M.source;n.bindTexture(Q,y.__webglTexture,i.TEXTURE0+D);const pe=s.get(ne);if(ne.version!==pe.__version||ee===!0){n.activeTexture(i.TEXTURE0+D),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const he=R(M)&&E(M.image)===!1;let W=S(M.image,he,!1,h);W=ye(M,W);const we=E(W)||l,be=o.convert(M.format,M.colorSpace);let Ae=o.convert(M.type),me=j(M.internalFormat,be,Ae,M.colorSpace);Le(Q,M,we);let ve;const Be=M.mipmaps,tt=l&&M.isVideoTexture!==!0,I=pe.__version===void 0||ee===!0,_e=T(M,W,we);if(M.isDepthTexture)me=i.DEPTH_COMPONENT,l?M.type===In?me=i.DEPTH_COMPONENT32F:M.type===jn?me=i.DEPTH_COMPONENT24:M.type===Mi?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:M.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===yi&&me===i.DEPTH_COMPONENT&&M.type!==rl&&M.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=jn,Ae=o.convert(M.type)),M.format===ds&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,M.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Mi,Ae=o.convert(M.type))),I&&(tt?n.texStorage2D(i.TEXTURE_2D,1,me,W.width,W.height):n.texImage2D(i.TEXTURE_2D,0,me,W.width,W.height,0,be,Ae,null));else if(M.isDataTexture)if(Be.length>0&&we){tt&&I&&n.texStorage2D(i.TEXTURE_2D,_e,me,Be[0].width,Be[0].height);for(let q=0,fe=Be.length;q<fe;q++)ve=Be[q],tt?n.texSubImage2D(i.TEXTURE_2D,q,0,0,ve.width,ve.height,be,Ae,ve.data):n.texImage2D(i.TEXTURE_2D,q,me,ve.width,ve.height,0,be,Ae,ve.data);M.generateMipmaps=!1}else tt?(I&&n.texStorage2D(i.TEXTURE_2D,_e,me,W.width,W.height),n.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,be,Ae,W.data)):n.texImage2D(i.TEXTURE_2D,0,me,W.width,W.height,0,be,Ae,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&I&&n.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,Be[0].width,Be[0].height,W.depth);for(let q=0,fe=Be.length;q<fe;q++)ve=Be[q],M.format!==qt?be!==null?tt?n.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,W.depth,be,ve.data,0,0):n.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,me,ve.width,ve.height,W.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,W.depth,be,Ae,ve.data):n.texImage3D(i.TEXTURE_2D_ARRAY,q,me,ve.width,ve.height,W.depth,0,be,Ae,ve.data)}else{tt&&I&&n.texStorage2D(i.TEXTURE_2D,_e,me,Be[0].width,Be[0].height);for(let q=0,fe=Be.length;q<fe;q++)ve=Be[q],M.format!==qt?be!==null?tt?n.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,ve.width,ve.height,be,ve.data):n.compressedTexImage2D(i.TEXTURE_2D,q,me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage2D(i.TEXTURE_2D,q,0,0,ve.width,ve.height,be,Ae,ve.data):n.texImage2D(i.TEXTURE_2D,q,me,ve.width,ve.height,0,be,Ae,ve.data)}else if(M.isDataArrayTexture)tt?(I&&n.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,W.width,W.height,W.depth),n.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,be,Ae,W.data)):n.texImage3D(i.TEXTURE_2D_ARRAY,0,me,W.width,W.height,W.depth,0,be,Ae,W.data);else if(M.isData3DTexture)tt?(I&&n.texStorage3D(i.TEXTURE_3D,_e,me,W.width,W.height,W.depth),n.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,be,Ae,W.data)):n.texImage3D(i.TEXTURE_3D,0,me,W.width,W.height,W.depth,0,be,Ae,W.data);else if(M.isFramebufferTexture){if(I)if(tt)n.texStorage2D(i.TEXTURE_2D,_e,me,W.width,W.height);else{let q=W.width,fe=W.height;for(let Me=0;Me<_e;Me++)n.texImage2D(i.TEXTURE_2D,Me,me,q,fe,0,be,Ae,null),q>>=1,fe>>=1}}else if(Be.length>0&&we){tt&&I&&n.texStorage2D(i.TEXTURE_2D,_e,me,Be[0].width,Be[0].height);for(let q=0,fe=Be.length;q<fe;q++)ve=Be[q],tt?n.texSubImage2D(i.TEXTURE_2D,q,0,0,be,Ae,ve):n.texImage2D(i.TEXTURE_2D,q,me,be,Ae,ve);M.generateMipmaps=!1}else tt?(I&&n.texStorage2D(i.TEXTURE_2D,_e,me,W.width,W.height),n.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Ae,W)):n.texImage2D(i.TEXTURE_2D,0,me,be,Ae,W);L(M,we)&&C(Q),pe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}y.__version=M.version}function mt(y,M,D){if(M.image.length!==6)return;const Q=Re(y,M),ee=M.source;n.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+D);const ne=s.get(ee);if(ee.version!==ne.__version||Q===!0){n.activeTexture(i.TEXTURE0+D),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,W=[];for(let q=0;q<6;q++)!pe&&!he?W[q]=S(M.image[q],!1,!0,u):W[q]=he?M.image[q].image:M.image[q],W[q]=ye(M,W[q]);const we=W[0],be=E(we)||l,Ae=o.convert(M.format,M.colorSpace),me=o.convert(M.type),ve=j(M.internalFormat,Ae,me,M.colorSpace),Be=l&&M.isVideoTexture!==!0,tt=ne.__version===void 0||Q===!0;let I=T(M,we,be);Le(i.TEXTURE_CUBE_MAP,M,be);let _e;if(pe){Be&&tt&&n.texStorage2D(i.TEXTURE_CUBE_MAP,I,ve,we.width,we.height);for(let q=0;q<6;q++){_e=W[q].mipmaps;for(let fe=0;fe<_e.length;fe++){const Me=_e[fe];M.format!==qt?Ae!==null?Be?n.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,0,0,Me.width,Me.height,Ae,Me.data):n.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,ve,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,0,0,Me.width,Me.height,Ae,me,Me.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,ve,Me.width,Me.height,0,Ae,me,Me.data)}}}else{_e=M.mipmaps,Be&&tt&&(_e.length>0&&I++,n.texStorage2D(i.TEXTURE_CUBE_MAP,I,ve,W[0].width,W[0].height));for(let q=0;q<6;q++)if(he){Be?n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,W[q].width,W[q].height,Ae,me,W[q].data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ve,W[q].width,W[q].height,0,Ae,me,W[q].data);for(let fe=0;fe<_e.length;fe++){const $e=_e[fe].image[q].image;Be?n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,0,0,$e.width,$e.height,Ae,me,$e.data):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,ve,$e.width,$e.height,0,Ae,me,$e.data)}}else{Be?n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ae,me,W[q]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ve,Ae,me,W[q]);for(let fe=0;fe<_e.length;fe++){const Me=_e[fe];Be?n.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,0,0,Ae,me,Me.image[q]):n.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,ve,Ae,me,Me.image[q])}}}L(M,be)&&C(i.TEXTURE_CUBE_MAP),ne.__version=ee.version,M.onUpdate&&M.onUpdate(M)}y.__version=M.version}function Ne(y,M,D,Q,ee,ne){const pe=o.convert(D.format,D.colorSpace),he=o.convert(D.type),W=j(D.internalFormat,pe,he,D.colorSpace);if(!s.get(M).__hasExternalTextures){const be=Math.max(1,M.width>>ne),Ae=Math.max(1,M.height>>ne);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?n.texImage3D(ee,ne,W,be,Ae,M.depth,0,pe,he,null):n.texImage2D(ee,ne,W,be,Ae,0,pe,he,null)}n.bindFramebuffer(i.FRAMEBUFFER,y),le(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ee,s.get(D).__webglTexture,0,J(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ee,s.get(D).__webglTexture,ne),n.bindFramebuffer(i.FRAMEBUFFER,null)}function v(y,M,D){if(i.bindRenderbuffer(i.RENDERBUFFER,y),M.depthBuffer&&!M.stencilBuffer){let Q=i.DEPTH_COMPONENT16;if(D||le(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===In?Q=i.DEPTH_COMPONENT32F:ee.type===jn&&(Q=i.DEPTH_COMPONENT24));const ne=J(M);le(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Q,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Q,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(M.depthBuffer&&M.stencilBuffer){const Q=J(M);D&&le(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,M.width,M.height):le(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<Q.length;ee++){const ne=Q[ee],pe=o.convert(ne.format,ne.colorSpace),he=o.convert(ne.type),W=j(ne.internalFormat,pe,he,ne.colorSpace),we=J(M);D&&le(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,W,M.width,M.height):le(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,W,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,W,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function P(y,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(i.FRAMEBUFFER,y),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te(M.depthTexture,0);const Q=s.get(M.depthTexture).__webglTexture,ee=J(M);if(M.depthTexture.format===yi)le(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===ds)le(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function F(y){const M=s.get(y),D=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!M.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");P(M.__webglFramebuffer,y)}else if(D){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=i.createRenderbuffer(),v(M.__webglDepthbuffer[Q],y,!1)}else n.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),v(M.__webglDepthbuffer,y,!1);n.bindFramebuffer(i.FRAMEBUFFER,null)}function V(y,M,D){const Q=s.get(y);M!==void 0&&Ne(Q.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&F(y)}function z(y){const M=y.texture,D=s.get(y),Q=s.get(M);y.addEventListener("dispose",ue),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,a.memory.textures++);const ee=y.isWebGLCubeRenderTarget===!0,ne=y.isWebGLMultipleRenderTargets===!0,pe=E(y)||l;if(ee){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(l&&M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let W=0;W<M.mipmaps.length;W++)D.__webglFramebuffer[he][W]=i.createFramebuffer()}else D.__webglFramebuffer[he]=i.createFramebuffer()}else{if(l&&M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)D.__webglFramebuffer[he]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(ne)if(r.drawBuffers){const he=y.texture;for(let W=0,we=he.length;W<we;W++){const be=s.get(he[W]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&y.samples>0&&le(y)===!1){const he=ne?M:[M];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let W=0;W<he.length;W++){const we=he[W];D.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[W]);const be=o.convert(we.format,we.colorSpace),Ae=o.convert(we.type),me=j(we.internalFormat,be,Ae,we.colorSpace,y.isXRRenderTarget===!0),ve=J(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,me,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,D.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),v(D.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){n.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(i.TEXTURE_CUBE_MAP,M,pe);for(let he=0;he<6;he++)if(l&&M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)Ne(D.__webglFramebuffer[he][W],y,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,W);else Ne(D.__webglFramebuffer[he],y,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);L(M,pe)&&C(i.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const he=y.texture;for(let W=0,we=he.length;W<we;W++){const be=he[W],Ae=s.get(be);n.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),Le(i.TEXTURE_2D,be,pe),Ne(D.__webglFramebuffer,y,be,i.COLOR_ATTACHMENT0+W,i.TEXTURE_2D,0),L(be,pe)&&C(i.TEXTURE_2D)}n.unbindTexture()}else{let he=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(l?he=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,Q.__webglTexture),Le(he,M,pe),l&&M.mipmaps&&M.mipmaps.length>0)for(let W=0;W<M.mipmaps.length;W++)Ne(D.__webglFramebuffer[W],y,M,i.COLOR_ATTACHMENT0,he,W);else Ne(D.__webglFramebuffer,y,M,i.COLOR_ATTACHMENT0,he,0);L(M,pe)&&C(he),n.unbindTexture()}y.depthBuffer&&F(y)}function oe(y){const M=E(y)||l,D=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,ee=D.length;Q<ee;Q++){const ne=D[Q];if(L(ne,M)){const pe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=s.get(ne).__webglTexture;n.bindTexture(pe,he),C(pe),n.unbindTexture()}}}function ae(y){if(l&&y.samples>0&&le(y)===!1){const M=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],D=y.width,Q=y.height;let ee=i.COLOR_BUFFER_BIT;const ne=[],pe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=s.get(y),W=y.isWebGLMultipleRenderTargets===!0;if(W)for(let we=0;we<M.length;we++)n.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),n.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);n.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let we=0;we<M.length;we++){ne.push(i.COLOR_ATTACHMENT0+we),y.depthBuffer&&ne.push(pe);const be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(be===!1&&(y.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),W&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[we]),be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),W){const Ae=s.get(M[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,D,Q,0,0,D,Q,ee,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(i.READ_FRAMEBUFFER,null),n.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let we=0;we<M.length;we++){n.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,he.__webglColorRenderbuffer[we]);const be=s.get(M[we]).__webglTexture;n.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,be,0)}n.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function J(y){return Math.min(f,y.samples)}function le(y){const M=s.get(y);return l&&y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(y){const M=a.render.frame;_.get(y)!==M&&(_.set(y,M),y.update())}function ye(y,M){const D=y.colorSpace,Q=y.format,ee=y.type;return y.isCompressedTexture===!0||y.format===Aa||D!==xn&&D!==Ei&&(D===Ue?l===!1?t.has("EXT_sRGB")===!0&&Q===qt?(y.format=Aa,y.minFilter=Nt,y.generateMipmaps=!1):M=Kh.sRGBToLinear(M):(Q!==qt||ee!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),M}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=te,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=ge,this.rebindTextures=V,this.setupRenderTarget=z,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=le}function fM(i,t,n){const s=n.isWebGL2;function r(o,a=Ei){let l;if(o===Qn)return i.UNSIGNED_BYTE;if(o===Bh)return i.UNSIGNED_SHORT_4_4_4_4;if(o===Hh)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Im)return i.BYTE;if(o===Dm)return i.SHORT;if(o===rl)return i.UNSIGNED_SHORT;if(o===Oh)return i.INT;if(o===jn)return i.UNSIGNED_INT;if(o===In)return i.FLOAT;if(o===Js)return s?i.HALF_FLOAT:(l=t.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===Um)return i.ALPHA;if(o===qt)return i.RGBA;if(o===Nm)return i.LUMINANCE;if(o===Fm)return i.LUMINANCE_ALPHA;if(o===yi)return i.DEPTH_COMPONENT;if(o===ds)return i.DEPTH_STENCIL;if(o===Aa)return l=t.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===Om)return i.RED;if(o===zh)return i.RED_INTEGER;if(o===Bm)return i.RG;if(o===Gh)return i.RG_INTEGER;if(o===kh)return i.RGBA_INTEGER;if(o===To||o===bo||o===Ao||o===wo)if(a===Ue)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===To)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===bo)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ao)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===wo)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===To)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===bo)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ao)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===wo)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ac||o===lc||o===cc||o===uc)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===ac)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===lc)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===cc)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===uc)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Hm)return l=t.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===hc||o===fc)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(o===hc)return a===Ue?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===fc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===dc||o===pc||o===mc||o===gc||o===_c||o===xc||o===vc||o===Mc||o===yc||o===Sc||o===Ec||o===Tc||o===bc||o===Ac)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(o===dc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===_c)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===xc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Mc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===yc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Ec)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Tc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===bc)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ac)return a===Ue?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ro)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(o===Ro)return a===Ue?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===zm||o===wc||o===Rc||o===Cc)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(o===Ro)return l.COMPRESSED_RED_RGTC1_EXT;if(o===wc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Rc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Cc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Mi?s?i.UNSIGNED_INT_24_8:(l=t.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class dM extends It{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _i extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let r=null,o=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const g=n.getJointPose(x,s),p=this._getHandJoint(u,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;u.inputState.pinching&&d>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,s),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(r=n.getPose(t.targetRaySpace,s),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new _i;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class mM extends xt{constructor(t,n,s,r,o,a,l,c,u,h){if(h=h!==void 0?h:yi,h!==yi&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&h===yi&&(s=jn),s===void 0&&h===ds&&(s=Mi),super(null,r,o,a,l,c,h,s,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=l!==void 0?l:_t,this.minFilter=c!==void 0?c:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gM extends Ci{constructor(t,n){super();const s=this;let r=null,o=1,a=null,l="local-floor",c=1,u=null,h=null,f=null,d=null,m=null,_=null;const x=n.getContextAttributes();let g=null,p=null;const A=[],S=[],E=new It;E.layers.enable(1),E.viewport=new et;const R=new It;R.layers.enable(2),R.viewport=new et;const L=[E,R],C=new dM;C.layers.enable(1),C.layers.enable(2);let j=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=A[G];return X===void 0&&(X=new Zo,A[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=A[G];return X===void 0&&(X=new Zo,A[G]=X),X.getGripSpace()},this.getHand=function(G){let X=A[G];return X===void 0&&(X=new Zo,A[G]=X),X.getHandSpace()};function w(G){const X=S.indexOf(G.inputSource);if(X===-1)return;const ge=A[X];ge!==void 0&&(ge.update(G.inputSource,G.frame,u||a),ge.dispatchEvent({type:G.type,data:G.inputSource}))}function ce(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",ue);for(let G=0;G<A.length;G++){const X=S[G];X!==null&&(S[G]=null,A[G].disconnect(X))}j=null,T=null,t.setRenderTarget(g),m=null,d=null,f=null,r=null,p=null,te.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",ue),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:m}),p=new Ai(m.framebufferWidth,m.framebufferHeight,{format:qt,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,ge=null,xe=null;x.depth&&(xe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=x.stencil?ds:yi,ge=x.stencil?Mi:jn);const Se={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:o};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Se),r.updateRenderState({layers:[d]}),p=new Ai(d.textureWidth,d.textureHeight,{format:qt,type:Qn,depthTexture:new mM(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const Te=t.properties.get(p);Te.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),te.setContext(r),te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ue(G){for(let X=0;X<G.removed.length;X++){const ge=G.removed[X],xe=S.indexOf(ge);xe>=0&&(S[xe]=null,A[xe].disconnect(ge))}for(let X=0;X<G.added.length;X++){const ge=G.added[X];let xe=S.indexOf(ge);if(xe===-1){for(let Te=0;Te<A.length;Te++)if(Te>=S.length){S.push(ge),xe=Te;break}else if(S[Te]===null){S[Te]=ge,xe=Te;break}if(xe===-1)break}const Se=A[xe];Se&&Se.connect(ge)}}const k=new N,Y=new N;function Z(G,X,ge){k.setFromMatrixPosition(X.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);const xe=k.distanceTo(Y),Se=X.projectionMatrix.elements,Te=ge.projectionMatrix.elements,Le=Se[14]/(Se[10]-1),Re=Se[14]/(Se[10]+1),Xe=(Se[9]+1)/Se[5],mt=(Se[9]-1)/Se[5],Ne=(Se[8]-1)/Se[0],v=(Te[8]+1)/Te[0],P=Le*Ne,F=Le*v,V=xe/(-Ne+v),z=V*-Ne;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(z),G.translateZ(V),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const oe=Le+V,ae=Re+V,J=P-z,le=F+(xe-z),ie=Xe*Re/ae*oe,ye=mt*Re/ae*oe;G.projectionMatrix.makePerspective(J,le,ie,ye,oe,ae),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function re(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;C.near=R.near=E.near=G.near,C.far=R.far=E.far=G.far,(j!==C.near||T!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),j=C.near,T=C.far);const X=G.parent,ge=C.cameras;re(C,X);for(let xe=0;xe<ge.length;xe++)re(ge[xe],X);ge.length===2?Z(C,E,R):C.projectionMatrix.copy(E.projectionMatrix),U(G,C,X)};function U(G,X,ge){ge===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(ge.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const xe=G.children;for(let Se=0,Te=xe.length;Se<Te;Se++)xe[Se].updateMatrixWorld(!0);G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ms*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let O=null;function se(G,X){if(h=X.getViewerPose(u||a),_=X,h!==null){const ge=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let xe=!1;ge.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Se=0;Se<ge.length;Se++){const Te=ge[Se];let Le=null;if(m!==null)Le=m.getViewport(Te);else{const Xe=f.getViewSubImage(d,Te);Le=Xe.viewport,Se===0&&(t.setRenderTargetTextures(p,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),t.setRenderTarget(p))}let Re=L[Se];Re===void 0&&(Re=new It,Re.layers.enable(Se),Re.viewport=new et,L[Se]=Re),Re.matrix.fromArray(Te.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Te.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Le.x,Le.y,Le.width,Le.height),Se===0&&(C.matrix.copy(Re.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(Re)}}for(let ge=0;ge<A.length;ge++){const xe=S[ge],Se=A[ge];xe!==null&&Se!==void 0&&Se.update(xe,X,u||a)}O&&O(G,X),X.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:X}),_=null}const te=new rf;te.setAnimationLoop(se),this.setAnimationLoop=function(G){O=G},this.dispose=function(){}}}function _M(i,t){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function s(g,p){p.color.getRGB(g.fogColor.value,tf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,A,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,E)):p.isMeshMatcapMaterial?(o(g,p),_(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),x(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?c(g,p,A,S):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ft&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ft&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const A=t.get(p).envMap;if(A&&(g.envMap.value=A,g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*S,n(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,A,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*A,g.scale.value=S*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,A){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const A=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function xM(i,t,n,s){let r={},o={},a=[];const l=n.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(A,S){const E=S.program;s.uniformBlockBinding(A,E)}function u(A,S){let E=r[A.id];E===void 0&&(_(A),E=h(A),r[A.id]=E,A.addEventListener("dispose",g));const R=S.program;s.updateUBOMapping(A,R);const L=t.render.frame;o[A.id]!==L&&(d(A),o[A.id]=L)}function h(A){const S=f();A.__bindingPointIndex=S;const E=i.createBuffer(),R=A.__size,L=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function f(){for(let A=0;A<l;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const S=r[A.id],E=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let L=0,C=E.length;L<C;L++){const j=E[L];if(m(j,L,R)===!0){const T=j.__offset,w=Array.isArray(j.value)?j.value:[j.value];let ce=0;for(let ue=0;ue<w.length;ue++){const k=w[ue],Y=x(k);typeof k=="number"?(j.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,T+ce,j.__data)):k.isMatrix3?(j.__data[0]=k.elements[0],j.__data[1]=k.elements[1],j.__data[2]=k.elements[2],j.__data[3]=k.elements[0],j.__data[4]=k.elements[3],j.__data[5]=k.elements[4],j.__data[6]=k.elements[5],j.__data[7]=k.elements[0],j.__data[8]=k.elements[6],j.__data[9]=k.elements[7],j.__data[10]=k.elements[8],j.__data[11]=k.elements[0]):(k.toArray(j.__data,ce),ce+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,j.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,S,E){const R=A.value;if(E[S]===void 0){if(typeof R=="number")E[S]=R;else{const L=Array.isArray(R)?R:[R],C=[];for(let j=0;j<L.length;j++)C.push(L[j].clone());E[S]=C}return!0}else if(typeof R=="number"){if(E[S]!==R)return E[S]=R,!0}else{const L=Array.isArray(E[S])?E[S]:[E[S]],C=Array.isArray(R)?R:[R];for(let j=0;j<L.length;j++){const T=L[j];if(T.equals(C[j])===!1)return T.copy(C[j]),!0}}return!1}function _(A){const S=A.uniforms;let E=0;const R=16;let L=0;for(let C=0,j=S.length;C<j;C++){const T=S[C],w={boundary:0,storage:0},ce=Array.isArray(T.value)?T.value:[T.value];for(let ue=0,k=ce.length;ue<k;ue++){const Y=ce[ue],Z=x(Y);w.boundary+=Z.boundary,w.storage+=Z.storage}if(T.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=E,C>0){L=E%R;const ue=R-L;L!==0&&ue-w.boundary<0&&(E+=R-L,T.__offset=E)}E+=w.storage}return L=E%R,L>0&&(E+=R-L),A.__size=E,A.__cache={},this}function x(A){const S={boundary:0,storage:0};return typeof A=="number"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function g(A){const S=A.target;S.removeEventListener("dispose",g);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},o={}}return{bind:c,update:u,dispose:p}}function vM(){const i=er("canvas");return i.style.display="block",i}class uf{constructor(t={}){const{canvas:n=vM(),context:s=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;s!==null?d=s.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const p=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;const S=this;let E=!1,R=0,L=0,C=null,j=-1,T=null;const w=new et,ce=new et;let ue=null;const k=new Fe(0);let Y=0,Z=n.width,re=n.height,U=1,O=null,se=null;const te=new et(0,0,Z,re),G=new et(0,0,Z,re);let X=!1;const ge=new ll;let xe=!1,Se=!1,Te=null;const Le=new ke,Re=new Ye,Xe=new N,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return C===null?U:1}let v=s;function P(b,H){for(let $=0;$<b.length;$++){const B=b[$],K=n.getContext(B,H);if(K!==null)return K}return null}try{const b={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sl}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",fe,!1),v===null){const H=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&H.shift(),v=P(H,b),v===null)throw P(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let F,V,z,oe,ae,J,le,ie,ye,y,M,D,Q,ee,ne,pe,he,W,we,be,Ae,me,ve,Be;function tt(){F=new Cv(v),V=new Ev(v,F,t),F.init(V),me=new fM(v,F,V),z=new uM(v,F,V),oe=new Iv(v),ae=new $0,J=new hM(v,F,z,ae,V,me,oe),le=new bv(S),ie=new Rv(S),ye=new kg(v,V),ve=new yv(v,F,ye,V),y=new Lv(v,ye,oe,ve),M=new Fv(v,y,ye,oe),we=new Nv(v,V,J),pe=new Tv(ae),D=new K0(S,le,ie,F,V,ve,pe),Q=new _M(S,ae),ee=new J0,ne=new sM(F,V),W=new Mv(S,le,ie,z,M,d,c),he=new cM(S,M,V),Be=new xM(v,oe,V,z),be=new Sv(v,F,oe,V),Ae=new Pv(v,F,oe,V),oe.programs=D.programs,S.capabilities=V,S.extensions=F,S.properties=ae,S.renderLists=ee,S.shadowMap=he,S.state=z,S.info=oe}tt();const I=new gM(S,v);this.xr=I,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const b=F.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=F.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(Z,re,!1))},this.getSize=function(b){return b.set(Z,re)},this.setSize=function(b,H,$=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,re=H,n.width=Math.floor(b*U),n.height=Math.floor(H*U),$===!0&&(n.style.width=b+"px",n.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(Z*U,re*U).floor()},this.setDrawingBufferSize=function(b,H,$){Z=b,re=H,U=$,n.width=Math.floor(b*$),n.height=Math.floor(H*$),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,H,$,B){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,H,$,B),z.viewport(w.copy(te).multiplyScalar(U).floor())},this.getScissor=function(b){return b.copy(G)},this.setScissor=function(b,H,$,B){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,H,$,B),z.scissor(ce.copy(G).multiplyScalar(U).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(b){z.setScissorTest(X=b)},this.setOpaqueSort=function(b){O=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(b=!0,H=!0,$=!0){let B=0;if(b){let K=!1;if(C!==null){const Ee=C.texture.format;K=Ee===kh||Ee===Gh||Ee===zh}if(K){const Ee=C.texture.type,Ce=Ee===Qn||Ee===jn||Ee===rl||Ee===Mi||Ee===Bh||Ee===Hh,Ie=W.getClearColor(),De=W.getClearAlpha(),Ve=Ie.r,Pe=Ie.g,He=Ie.b;Ce?(m[0]=Ve,m[1]=Pe,m[2]=He,m[3]=De,v.clearBufferuiv(v.COLOR,0,m)):(_[0]=Ve,_[1]=Pe,_[2]=He,_[3]=De,v.clearBufferiv(v.COLOR,0,_))}else B|=v.COLOR_BUFFER_BIT}H&&(B|=v.DEPTH_BUFFER_BIT),$&&(B|=v.STENCIL_BUFFER_BIT),v.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ee.dispose(),ne.dispose(),ae.dispose(),le.dispose(),ie.dispose(),M.dispose(),ve.dispose(),Be.dispose(),D.dispose(),I.dispose(),I.removeEventListener("sessionstart",nt),I.removeEventListener("sessionend",an),Te&&(Te.dispose(),Te=null),wt.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=oe.autoReset,H=he.enabled,$=he.autoUpdate,B=he.needsUpdate,K=he.type;tt(),oe.autoReset=b,he.enabled=H,he.autoUpdate=$,he.needsUpdate=B,he.type=K}function fe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Me(b){const H=b.target;H.removeEventListener("dispose",Me),$e(H)}function $e(b){st(b),ae.remove(b)}function st(b){const H=ae.get(b).programs;H!==void 0&&(H.forEach(function($){D.releaseProgram($)}),b.isShaderMaterial&&D.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,$,B,K,Ee){H===null&&(H=mt);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Ie=yf(b,H,$,B,K);z.setMaterial(B,Ce);let De=$.index,Ve=1;if(B.wireframe===!0){if(De=y.getWireframeAttribute($),De===void 0)return;Ve=2}const Pe=$.drawRange,He=$.attributes.position;let ot=Pe.start*Ve,at=(Pe.start+Pe.count)*Ve;Ee!==null&&(ot=Math.max(ot,Ee.start*Ve),at=Math.min(at,(Ee.start+Ee.count)*Ve)),De!==null?(ot=Math.max(ot,0),at=Math.min(at,De.count)):He!=null&&(ot=Math.max(ot,0),at=Math.min(at,He.count));const kt=at-ot;if(kt<0||kt===1/0)return;ve.setup(K,B,Ie,$,De);let Sn,ct=be;if(De!==null&&(Sn=ye.get(De),ct=Ae,ct.setIndex(Sn)),K.isMesh)B.wireframe===!0?(z.setLineWidth(B.wireframeLinewidth*Ne()),ct.setMode(v.LINES)):ct.setMode(v.TRIANGLES);else if(K.isLine){let qe=B.linewidth;qe===void 0&&(qe=1),z.setLineWidth(qe*Ne()),K.isLineSegments?ct.setMode(v.LINES):K.isLineLoop?ct.setMode(v.LINE_LOOP):ct.setMode(v.LINE_STRIP)}else K.isPoints?ct.setMode(v.POINTS):K.isSprite&&ct.setMode(v.TRIANGLES);if(K.isInstancedMesh)ct.renderInstances(ot,kt,K.count);else if($.isInstancedBufferGeometry){const qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,fo=Math.min($.instanceCount,qe);ct.renderInstances(ot,kt,fo)}else ct.render(ot,kt)},this.compile=function(b,H){function $(B,K,Ee){B.transparent===!0&&B.side===dn&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,rr(B,K,Ee),B.side=Nn,B.needsUpdate=!0,rr(B,K,Ee),B.side=dn):rr(B,K,Ee)}g=ne.get(b),g.init(),A.push(g),b.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(S._useLegacyLights),b.traverse(function(B){const K=B.material;if(K)if(Array.isArray(K))for(let Ee=0;Ee<K.length;Ee++){const Ce=K[Ee];$(Ce,b,B)}else $(K,b,B)}),A.pop(),g=null};let lt=null;function On(b){lt&&lt(b)}function nt(){wt.stop()}function an(){wt.start()}const wt=new rf;wt.setAnimationLoop(On),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(b){lt=b,I.setAnimationLoop(b),b===null?wt.stop():wt.start()},I.addEventListener("sessionstart",nt),I.addEventListener("sessionend",an),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(H),H=I.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,H,C),g=ne.get(b,A.length),g.init(),A.push(g),Le.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ge.setFromProjectionMatrix(Le),Se=this.localClippingEnabled,xe=pe.init(this.clippingPlanes,Se),x=ee.get(b,p.length),x.init(),p.push(x),Ml(b,H,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(O,se),this.info.render.frame++,xe===!0&&pe.beginShadows();const $=g.state.shadowsArray;if(he.render($,b,H),xe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(x,b),g.setupLights(S._useLegacyLights),H.isArrayCamera){const B=H.cameras;for(let K=0,Ee=B.length;K<Ee;K++){const Ce=B[K];yl(x,b,Ce,Ce.viewport)}}else yl(x,b,H);C!==null&&(J.updateMultisampleRenderTarget(C),J.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(S,b,H),ve.resetDefaultState(),j=-1,T=null,A.pop(),A.length>0?g=A[A.length-1]:g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ml(b,H,$,B){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ge.intersectsSprite(b)){B&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Le);const Ce=M.update(b),Ie=b.material;Ie.visible&&x.push(b,Ce,Ie,$,Xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ge.intersectsObject(b))){const Ce=M.update(b),Ie=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Xe.copy(Ce.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(Le)),Array.isArray(Ie)){const De=Ce.groups;for(let Ve=0,Pe=De.length;Ve<Pe;Ve++){const He=De[Ve],ot=Ie[He.materialIndex];ot&&ot.visible&&x.push(b,Ce,ot,$,Xe.z,He)}}else Ie.visible&&x.push(b,Ce,Ie,$,Xe.z,null)}}const Ee=b.children;for(let Ce=0,Ie=Ee.length;Ce<Ie;Ce++)Ml(Ee[Ce],H,$,B)}function yl(b,H,$,B){const K=b.opaque,Ee=b.transmissive,Ce=b.transparent;g.setupLightsView($),xe===!0&&pe.setGlobalState(S.clippingPlanes,$),Ee.length>0&&Mf(K,Ee,H,$),B&&z.viewport(w.copy(B)),K.length>0&&sr(K,H,$),Ee.length>0&&sr(Ee,H,$),Ce.length>0&&sr(Ce,H,$),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Mf(b,H,$,B){const K=V.isWebGL2;Te===null&&(Te=new Ai(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?Js:Qn,minFilter:bi,samples:K?4:0})),S.getDrawingBufferSize(Re),K?Te.setSize(Re.x,Re.y):Te.setSize(Qr(Re.x),Qr(Re.y));const Ee=S.getRenderTarget();S.setRenderTarget(Te),S.getClearColor(k),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear();const Ce=S.toneMapping;S.toneMapping=Jn,sr(b,$,B),J.updateMultisampleRenderTarget(Te),J.updateRenderTargetMipmap(Te);let Ie=!1;for(let De=0,Ve=H.length;De<Ve;De++){const Pe=H[De],He=Pe.object,ot=Pe.geometry,at=Pe.material,kt=Pe.group;if(at.side===dn&&He.layers.test(B.layers)){const Sn=at.side;at.side=Ft,at.needsUpdate=!0,Sl(He,$,B,ot,at,kt),at.side=Sn,at.needsUpdate=!0,Ie=!0}}Ie===!0&&(J.updateMultisampleRenderTarget(Te),J.updateRenderTargetMipmap(Te)),S.setRenderTarget(Ee),S.setClearColor(k,Y),S.toneMapping=Ce}function sr(b,H,$){const B=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Ee=b.length;K<Ee;K++){const Ce=b[K],Ie=Ce.object,De=Ce.geometry,Ve=B===null?Ce.material:B,Pe=Ce.group;Ie.layers.test($.layers)&&Sl(Ie,H,$,De,Ve,Pe)}}function Sl(b,H,$,B,K,Ee){b.onBeforeRender(S,H,$,B,K,Ee),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(S,H,$,B,b,Ee),K.transparent===!0&&K.side===dn&&K.forceSinglePass===!1?(K.side=Ft,K.needsUpdate=!0,S.renderBufferDirect($,H,B,K,b,Ee),K.side=Nn,K.needsUpdate=!0,S.renderBufferDirect($,H,B,K,b,Ee),K.side=dn):S.renderBufferDirect($,H,B,K,b,Ee),b.onAfterRender(S,H,$,B,K,Ee)}function rr(b,H,$){H.isScene!==!0&&(H=mt);const B=ae.get(b),K=g.state.lights,Ee=g.state.shadowsArray,Ce=K.state.version,Ie=D.getParameters(b,K.state,Ee,H,$),De=D.getProgramCacheKey(Ie);let Ve=B.programs;B.environment=b.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(b.isMeshStandardMaterial?ie:le).get(b.envMap||B.environment),Ve===void 0&&(b.addEventListener("dispose",Me),Ve=new Map,B.programs=Ve);let Pe=Ve.get(De);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===Ce)return El(b,Ie),Pe}else Ie.uniforms=D.getUniforms(b),b.onBuild($,Ie,S),b.onBeforeCompile(Ie,S),Pe=D.acquireProgram(Ie,De),Ve.set(De,Pe),B.uniforms=Ie.uniforms;const He=B.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=pe.uniform),El(b,Ie),B.needsLights=Ef(b),B.lightsStateVersion=Ce,B.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMap.value=K.state.directionalShadowMap,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotShadowMap.value=K.state.spotShadowMap,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMap.value=K.state.pointShadowMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix);const ot=Pe.getUniforms(),at=Wr.seqWithValue(ot.seq,He);return B.currentProgram=Pe,B.uniformsList=at,Pe}function El(b,H){const $=ae.get(b);$.outputColorSpace=H.outputColorSpace,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function yf(b,H,$,B,K){H.isScene!==!0&&(H=mt),J.resetTextureUnits();const Ee=H.fog,Ce=B.isMeshStandardMaterial?H.environment:null,Ie=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xn,De=(B.isMeshStandardMaterial?ie:le).get(B.envMap||Ce),Ve=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Pe=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),He=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,at=!!$.morphAttributes.color;let kt=Jn;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(kt=S.toneMapping);const Sn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=Sn!==void 0?Sn.length:0,qe=ae.get(B),fo=g.state.lights;if(xe===!0&&(Se===!0||b!==T)){const Bt=b===T&&B.id===j;pe.setState(B,b,Bt)}let ut=!1;B.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==fo.state.version||qe.outputColorSpace!==Ie||K.isInstancedMesh&&qe.instancing===!1||!K.isInstancedMesh&&qe.instancing===!0||K.isSkinnedMesh&&qe.skinning===!1||!K.isSkinnedMesh&&qe.skinning===!0||K.isInstancedMesh&&qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&qe.instancingColor===!1&&K.instanceColor!==null||qe.envMap!==De||B.fog===!0&&qe.fog!==Ee||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==pe.numPlanes||qe.numIntersection!==pe.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==Pe||qe.morphTargets!==He||qe.morphNormals!==ot||qe.morphColors!==at||qe.toneMapping!==kt||V.isWebGL2===!0&&qe.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,qe.__version=B.version);let ii=qe.currentProgram;ut===!0&&(ii=rr(B,H,K));let Tl=!1,Rs=!1,po=!1;const Rt=ii.getUniforms(),si=qe.uniforms;if(z.useProgram(ii.program)&&(Tl=!0,Rs=!0,po=!0),B.id!==j&&(j=B.id,Rs=!0),Tl||T!==b){if(Rt.setValue(v,"projectionMatrix",b.projectionMatrix),V.logarithmicDepthBuffer&&Rt.setValue(v,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),T!==b&&(T=b,Rs=!0,po=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Bt=Rt.map.cameraPosition;Bt!==void 0&&Bt.setValue(v,Xe.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Rt.setValue(v,"isOrthographic",b.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||K.isSkinnedMesh)&&Rt.setValue(v,"viewMatrix",b.matrixWorldInverse)}if(K.isSkinnedMesh){Rt.setOptional(v,K,"bindMatrix"),Rt.setOptional(v,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(V.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Rt.setValue(v,"boneTexture",Bt.boneTexture,J),Rt.setValue(v,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mo=$.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0&&V.isWebGL2===!0)&&we.update(K,$,ii),(Rs||qe.receiveShadow!==K.receiveShadow)&&(qe.receiveShadow=K.receiveShadow,Rt.setValue(v,"receiveShadow",K.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(si.envMap.value=De,si.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Rs&&(Rt.setValue(v,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&Sf(si,po),Ee&&B.fog===!0&&Q.refreshFogUniforms(si,Ee),Q.refreshMaterialUniforms(si,B,U,re,Te),Wr.upload(v,qe.uniformsList,si,J)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Wr.upload(v,qe.uniformsList,si,J),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Rt.setValue(v,"center",K.center),Rt.setValue(v,"modelViewMatrix",K.modelViewMatrix),Rt.setValue(v,"normalMatrix",K.normalMatrix),Rt.setValue(v,"modelMatrix",K.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bt=B.uniformsGroups;for(let go=0,Tf=Bt.length;go<Tf;go++)if(V.isWebGL2){const bl=Bt[go];Be.update(bl,ii),Be.bind(bl,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function Sf(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Ef(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,H,$){ae.get(b.texture).__webglTexture=H,ae.get(b.depthTexture).__webglTexture=$;const B=ae.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=$===void 0,B.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,H){const $=ae.get(b);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,$=0){C=b,R=H,L=$;let B=!0,K=null,Ee=!1,Ce=!1;if(b){const De=ae.get(b);De.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(v.FRAMEBUFFER,null),B=!1):De.__webglFramebuffer===void 0?J.setupRenderTarget(b):De.__hasExternalTextures&&J.rebindTextures(b,ae.get(b.texture).__webglTexture,ae.get(b.depthTexture).__webglTexture);const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Pe=ae.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[H])?K=Pe[H][$]:K=Pe[H],Ee=!0):V.isWebGL2&&b.samples>0&&J.useMultisampledRTT(b)===!1?K=ae.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?K=Pe[$]:K=Pe,w.copy(b.viewport),ce.copy(b.scissor),ue=b.scissorTest}else w.copy(te).multiplyScalar(U).floor(),ce.copy(G).multiplyScalar(U).floor(),ue=X;if(z.bindFramebuffer(v.FRAMEBUFFER,K)&&V.drawBuffers&&B&&z.drawBuffers(b,K),z.viewport(w),z.scissor(ce),z.setScissorTest(ue),Ee){const De=ae.get(b.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,$)}else if(Ce){const De=ae.get(b.texture),Ve=H||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,De.__webglTexture,$||0,Ve)}j=-1},this.readRenderTargetPixels=function(b,H,$,B,K,Ee,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ae.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){z.bindFramebuffer(v.FRAMEBUFFER,Ie);try{const De=b.texture,Ve=De.format,Pe=De.type;if(Ve!==qt&&me.convert(Ve)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Pe===Js&&(F.has("EXT_color_buffer_half_float")||V.isWebGL2&&F.has("EXT_color_buffer_float"));if(Pe!==Qn&&me.convert(Pe)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===In&&(V.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-B&&$>=0&&$<=b.height-K&&v.readPixels(H,$,B,K,me.convert(Ve),me.convert(Pe),Ee)}finally{const De=C!==null?ae.get(C).__webglFramebuffer:null;z.bindFramebuffer(v.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(b,H,$=0){const B=Math.pow(2,-$),K=Math.floor(H.image.width*B),Ee=Math.floor(H.image.height*B);J.setTexture2D(H,0),v.copyTexSubImage2D(v.TEXTURE_2D,$,0,0,b.x,b.y,K,Ee),z.unbindTexture()},this.copyTextureToTexture=function(b,H,$,B=0){const K=H.image.width,Ee=H.image.height,Ce=me.convert($.format),Ie=me.convert($.type);J.setTexture2D($,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,$.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,$.unpackAlignment),H.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,B,b.x,b.y,K,Ee,Ce,Ie,H.image.data):H.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,B,b.x,b.y,H.mipmaps[0].width,H.mipmaps[0].height,Ce,H.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,B,b.x,b.y,Ce,Ie,H.image),B===0&&$.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(b,H,$,B,K=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=b.max.x-b.min.x+1,Ce=b.max.y-b.min.y+1,Ie=b.max.z-b.min.z+1,De=me.convert(B.format),Ve=me.convert(B.type);let Pe;if(B.isData3DTexture)J.setTexture3D(B,0),Pe=v.TEXTURE_3D;else if(B.isDataArrayTexture)J.setTexture2DArray(B,0),Pe=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,B.unpackAlignment);const He=v.getParameter(v.UNPACK_ROW_LENGTH),ot=v.getParameter(v.UNPACK_IMAGE_HEIGHT),at=v.getParameter(v.UNPACK_SKIP_PIXELS),kt=v.getParameter(v.UNPACK_SKIP_ROWS),Sn=v.getParameter(v.UNPACK_SKIP_IMAGES),ct=$.isCompressedTexture?$.mipmaps[0]:$.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,ct.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ct.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,b.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,b.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?v.texSubImage3D(Pe,K,H.x,H.y,H.z,Ee,Ce,Ie,De,Ve,ct.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),v.compressedTexSubImage3D(Pe,K,H.x,H.y,H.z,Ee,Ce,Ie,De,ct.data)):v.texSubImage3D(Pe,K,H.x,H.y,H.z,Ee,Ce,Ie,De,Ve,ct),v.pixelStorei(v.UNPACK_ROW_LENGTH,He),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ot),v.pixelStorei(v.UNPACK_SKIP_PIXELS,at),v.pixelStorei(v.UNPACK_SKIP_ROWS,kt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Sn),K===0&&B.generateMipmaps&&v.generateMipmap(Pe),z.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?J.setTextureCube(b,0):b.isData3DTexture?J.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?J.setTexture2DArray(b,0):J.setTexture2D(b,0),z.unbindTexture()},this.resetState=function(){R=0,L=0,C=null,z.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?Si:Wh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Si?Ue:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class MM extends uf{}MM.prototype.isWebGL1Renderer=!0;class yM extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class SM{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=ba,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,s){t*=this.stride,s*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=n.array[s+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new N;class fl{constructor(t,n,s,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=s,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,s=this.data.count;n<s;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(t),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(t),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(t),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=pn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=pn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=pn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=pn(n,this.array)),n}setXY(t,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this}setXYZ(t,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this.data.array[t+2]=r,this}setXYZW(t,n,s,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array),o=Qe(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=s,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new At(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let s=0;s<this.count;s++){const r=s*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xu=new N,vu=new et,Mu=new et,EM=new N,yu=new ke,ji=new N,Jo=new Mn,Su=new ke,Qo=new tr;class TM extends Gt{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const n=t.getAttribute("position");for(let s=0;s<n.count;s++)ji.fromBufferAttribute(n,s),this.applyBoneTransform(s,ji),this.boundingBox.expandByPoint(ji)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const n=t.getAttribute("position");for(let s=0;s<n.count;s++)ji.fromBufferAttribute(n,s),this.applyBoneTransform(s,ji),this.boundingSphere.expandByPoint(ji)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){const s=this.material,r=this.matrixWorld;s!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(r),t.ray.intersectsSphere(Jo)!==!1&&(Su.copy(r).invert(),Qo.copy(t.ray).applyMatrix4(Su),!(this.boundingBox!==null&&Qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,Qo)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new et,n=this.geometry.attributes.skinWeight;for(let s=0,r=n.count;s<r;s++){t.fromBufferAttribute(n,s);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),n.setXYZW(s,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){const s=this.skeleton,r=this.geometry;vu.fromBufferAttribute(r.attributes.skinIndex,t),Mu.fromBufferAttribute(r.attributes.skinWeight,t),xu.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let o=0;o<4;o++){const a=Mu.getComponent(o);if(a!==0){const l=vu.getComponent(o);yu.multiplyMatrices(s.bones[l].matrixWorld,s.boneInverses[l]),n.addScaledVector(EM.copy(xu).applyMatrix4(yu),a)}}return n.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,n){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,n)}}class hf extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bM extends xt{constructor(t=null,n=1,s=1,r,o,a,l,c,u=_t,h=_t,f,d){super(null,a,l,c,u,h,r,o,f,d),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=new ke,AM=new ke;class dl{constructor(t=[],n=[]){this.uuid=rn(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,r=this.bones.length;s<r;s++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const s=new ke;this.bones[t]&&s.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];s&&s.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){const t=this.bones,n=this.boneInverses,s=this.boneMatrices,r=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const l=t[o]?t[o].matrixWorld:AM;Eu.multiplyMatrices(l,n[o]),Eu.toArray(s,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=jh(t),t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const s=new bM(n,t,t,qt,In);return s.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=s,this.boneTextureSize=t,this}getBoneByName(t){for(let n=0,s=this.bones.length;n<s;n++){const r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let s=0,r=t.bones.length;s<r;s++){const o=t.bones[s];let a=n[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new hf),this.bones.push(a),this.boneInverses.push(new ke().fromArray(t.boneInverses[s]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,s=this.boneInverses;for(let r=0,o=n.length;r<o;r++){const a=n[r];t.bones.push(a.uuid);const l=s[r];t.boneInverses.push(l.toArray())}return t}}class Tu extends At{constructor(t,n,s,r=1){super(t,n,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new ke,bu=new ke,Ir=[],Au=new vn,wM=new ke,Us=new Gt,Ns=new Mn;class RM extends Gt{constructor(t,n,s){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Tu(new Float32Array(s*16),16),this.instanceColor=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<s;r++)this.setMatrixAt(r,wM)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<n;s++)this.getMatrixAt(s,Yi),Au.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Au)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<n;s++)this.getMatrixAt(s,Yi),Ns.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Ns)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}raycast(t,n){const s=this.matrixWorld,r=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(s),t.ray.intersectsSphere(Ns)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Yi),bu.multiplyMatrices(s,Yi),Us.matrixWorld=bu,Us.raycast(t,Ir);for(let a=0,l=Ir.length;a<l;a++){const c=Ir[a];c.instanceId=o,c.object=this,n.push(c)}Ir.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Tu(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pl extends gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wu=new N,Ru=new N,Cu=new ke,ea=new tr,Dr=new Mn;class ml extends rt{constructor(t=new on,n=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[0];for(let r=1,o=n.count;r<o;r++)wu.fromBufferAttribute(n,r-1),Ru.fromBufferAttribute(n,r),s[r]=s[r-1],s[r]+=wu.distanceTo(Ru);t.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const s=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dr.copy(s.boundingSphere),Dr.applyMatrix4(r),Dr.radius+=o,t.ray.intersectsSphere(Dr)===!1)return;Cu.copy(r).invert(),ea.copy(t.ray).applyMatrix4(Cu);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new N,h=new N,f=new N,d=new N,m=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const p=Math.max(0,a.start),A=Math.min(_.count,a.start+a.count);for(let S=p,E=A-1;S<E;S+=m){const R=_.getX(S),L=_.getX(S+1);if(u.fromBufferAttribute(g,R),h.fromBufferAttribute(g,L),ea.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const j=t.ray.origin.distanceTo(d);j<t.near||j>t.far||n.push({distance:j,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),A=Math.min(g.count,a.start+a.count);for(let S=p,E=A-1;S<E;S+=m){if(u.fromBufferAttribute(g,S),h.fromBufferAttribute(g,S+1),ea.distanceSqToSegment(u,h,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(d);L<t.near||L>t.far||n.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const r=n[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}const Lu=new N,Pu=new N;class ff extends ml{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,s=[];for(let r=0,o=n.count;r<o;r+=2)Lu.fromBufferAttribute(n,r),Pu.fromBufferAttribute(n,r+1),s[r]=r===0?0:s[r-1],s[r+1]=s[r]+Lu.distanceTo(Pu);t.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CM extends ml{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class df extends gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Iu=new ke,Ca=new tr,Ur=new Mn,Nr=new N;class LM extends rt{constructor(t=new on,n=new df){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,a=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ur.copy(s.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=o,t.ray.intersectsSphere(Ur)===!1)return;Iu.copy(r).invert(),Ca.copy(t.ray).applyMatrix4(Iu);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=s.index,f=s.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,x=m;_<x;_++){const g=u.getX(_);Nr.fromBufferAttribute(f,g),Du(Nr,g,c,r,t,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=d,x=m;_<x;_++)Nr.fromBufferAttribute(f,_),Du(Nr,_,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const r=n[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Du(i,t,n,s,r,o,a){const l=Ca.distanceSqToPoint(i);if(l<n){const c=new N;Ca.closestPointToPoint(i,c),c.applyMatrix4(s);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,object:a})}}class gl extends gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ni extends gl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Vn(i,t,n){return pf(i)?new i.constructor(i.subarray(t,n!==void 0?n:i.length)):i.slice(t,n)}function Fr(i,t,n){return!i||!n&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function PM(i){function t(r,o){return i[r]-i[o]}const n=i.length,s=new Array(n);for(let r=0;r!==n;++r)s[r]=r;return s.sort(t),s}function Uu(i,t,n){const s=i.length,r=new i.constructor(s);for(let o=0,a=0;a!==s;++o){const l=n[o]*t;for(let c=0;c!==t;++c)r[a++]=i[l+c]}return r}function mf(i,t,n,s){let r=1,o=i[0];for(;o!==void 0&&o[s]===void 0;)o=i[r++];if(o===void 0)return;let a=o[s];if(a!==void 0)if(Array.isArray(a))do a=o[s],a!==void 0&&(t.push(o.time),n.push.apply(n,a)),o=i[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[s],a!==void 0&&(t.push(o.time),a.toArray(n,n.length)),o=i[r++];while(o!==void 0);else do a=o[s],a!==void 0&&(t.push(o.time),n.push(a)),o=i[r++];while(o!==void 0)}class ir{constructor(t,n,s,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(s),this.sampleValues=n,this.valueSize=s,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let s=this._cachedIndex,r=n[s],o=n[s-1];n:{e:{let a;t:{i:if(!(t<r)){for(let l=s+2;;){if(r===void 0){if(t<o)break i;return s=n.length,this._cachedIndex=s,this.copySampleValue_(s-1)}if(s===l)break;if(o=r,r=n[++s],t<r)break e}a=n.length;break t}if(!(t>=o)){const l=n[1];t<l&&(s=2,o=l);for(let c=s-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===c)break;if(r=o,o=n[--s-1],t>=o)break e}a=s,s=0;break t}break n}for(;s<a;){const l=s+a>>>1;t<n[l]?a=l:s=l+1}if(r=n[s],o=n[s-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return s=n.length,this._cachedIndex=s,this.copySampleValue_(s-1)}this._cachedIndex=s,this.intervalChanged_(s,o,r)}return this.interpolate_(s,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=t*r;for(let a=0;a!==r;++a)n[a]=s[o+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class IM extends ir{constructor(t,n,s,r){super(t,n,s,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(t,n,s){const r=this.parameterPositions;let o=t-2,a=t+1,l=r[o],c=r[a];if(l===void 0)switch(this.getSettings_().endingStart){case Pc:o=t,l=2*n-s;break;case Ic:o=r.length-2,l=n+r[o]-r[o+1];break;default:o=t,l=s}if(c===void 0)switch(this.getSettings_().endingEnd){case Pc:a=t,c=2*s-n;break;case Ic:a=1,c=s+r[1]-r[0];break;default:a=t-1,c=n}const u=(s-n)*.5,h=this.valueSize;this._weightPrev=u/(n-l),this._weightNext=u/(c-s),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(t,n,s,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,u=c-l,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(s-n)/(r-n),x=_*_,g=x*_,p=-d*g+2*d*x-d*_,A=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,S=(-1-m)*g+(1.5+m)*x+.5*_,E=m*g-m*x;for(let R=0;R!==l;++R)o[R]=p*a[h+R]+A*a[u+R]+S*a[c+R]+E*a[f+R];return o}}class DM extends ir{constructor(t,n,s,r){super(t,n,s,r)}interpolate_(t,n,s,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,u=c-l,h=(s-n)/(r-n),f=1-h;for(let d=0;d!==l;++d)o[d]=a[u+d]*f+a[c+d]*h;return o}}class UM extends ir{constructor(t,n,s,r){super(t,n,s,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class yn{constructor(t,n,s,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(n,this.TimeBufferType),this.values=Fr(s,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let s;if(n.toJSON!==this.toJSON)s=n.toJSON(t);else{s={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(s.interpolation=r)}return s.type=t.ValueTypeName,s}InterpolantFactoryMethodDiscrete(t){return new UM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new DM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new IM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Qs:n=this.InterpolantFactoryMethodDiscrete;break;case ps:n=this.InterpolantFactoryMethodLinear;break;case Co:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const s="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(s);return console.warn("THREE.KeyframeTrack:",s),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let s=0,r=n.length;s!==r;++s)n[s]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let s=0,r=n.length;s!==r;++s)n[s]*=t}return this}trim(t,n){const s=this.times,r=s.length;let o=0,a=r-1;for(;o!==r&&s[o]<t;)++o;for(;a!==-1&&s[a]>n;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);const l=this.getValueSize();this.times=Vn(s,o,a),this.values=Vn(this.values,o*l,a*l)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const s=this.times,r=this.values,o=s.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==o;l++){const c=s[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(r!==void 0&&pf(r))for(let l=0,c=r.length;l!==c;++l){const u=r[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){const t=Vn(this.times),n=Vn(this.values),s=this.getValueSize(),r=this.getInterpolation()===Co,o=t.length-1;let a=1;for(let l=1;l<o;++l){let c=!1;const u=t[l],h=t[l+1];if(u!==h&&(l!==1||u!==t[0]))if(r)c=!0;else{const f=l*s,d=f-s,m=f+s;for(let _=0;_!==s;++_){const x=n[f+_];if(x!==n[d+_]||x!==n[m+_]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];const f=l*s,d=a*s;for(let m=0;m!==s;++m)n[d+m]=n[f+m]}++a}}if(o>0){t[a]=t[o];for(let l=o*s,c=a*s,u=0;u!==s;++u)n[c+u]=n[l+u];++a}return a!==t.length?(this.times=Vn(t,0,a),this.values=Vn(n,0,a*s)):(this.times=t,this.values=n),this}clone(){const t=Vn(this.times,0),n=Vn(this.values,0),s=this.constructor,r=new s(this.name,t,n);return r.createInterpolant=this.createInterpolant,r}}yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ps;class bs extends yn{}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Qs;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class gf extends yn{}gf.prototype.ValueTypeName="color";class _s extends yn{}_s.prototype.ValueTypeName="number";class NM extends ir{constructor(t,n,s,r){super(t,n,s,r)}interpolate_(t,n,s,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(s-n)/(r-n);let u=t*l;for(let h=u+l;u!==h;u+=4)ti.slerpFlat(o,0,a,u-l,a,u,c);return o}}class Ri extends yn{InterpolantFactoryMethodLinear(t){return new NM(this.times,this.values,this.getValueSize(),t)}}Ri.prototype.ValueTypeName="quaternion";Ri.prototype.DefaultInterpolation=ps;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends yn{}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Qs;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends yn{}xs.prototype.ValueTypeName="vector";class FM{constructor(t,n=-1,s,r=Gm){this.name=t,this.tracks=s,this.duration=n,this.blendMode=r,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(t){const n=[],s=t.tracks,r=1/(t.fps||1);for(let a=0,l=s.length;a!==l;++a)n.push(BM(s[a]).scale(r));const o=new this(t.name,t.duration,n,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const n=[],s=t.tracks,r={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,a=s.length;o!==a;++o)n.push(yn.toJSON(s[o]));return r}static CreateFromMorphTargetSequence(t,n,s,r){const o=n.length,a=[];for(let l=0;l<o;l++){let c=[],u=[];c.push((l+o-1)%o,l,(l+1)%o),u.push(0,1,0);const h=PM(c);c=Uu(c,1,h),u=Uu(u,1,h),!r&&c[0]===0&&(c.push(o),u.push(u[0])),a.push(new _s(".morphTargetInfluences["+n[l].name+"]",c,u).scale(1/s))}return new this(t,-1,a)}static findByName(t,n){let s=t;if(!Array.isArray(t)){const r=t;s=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<s.length;r++)if(s[r].name===n)return s[r];return null}static CreateClipsFromMorphTargetSequences(t,n,s){const r={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,c=t.length;l<c;l++){const u=t[l],h=u.name.match(o);if(h&&h.length>1){const f=h[1];let d=r[f];d||(r[f]=d=[]),d.push(u)}}const a=[];for(const l in r)a.push(this.CreateFromMorphTargetSequence(l,r[l],n,s));return a}static parseAnimation(t,n){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const s=function(f,d,m,_,x){if(m.length!==0){const g=[],p=[];mf(m,g,p,_),g.length!==0&&x.push(new f(d,g,p))}},r=[],o=t.name||"default",a=t.fps||30,l=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)m[d[_].morphTargets[x]]=-1;for(const x in m){const g=[],p=[];for(let A=0;A!==d[_].morphTargets.length;++A){const S=d[_];g.push(S.time),p.push(S.morphTarget===x?1:0)}r.push(new _s(".morphTargetInfluence["+x+"]",g,p))}c=m.length*a}else{const m=".bones["+n[f].name+"]";s(xs,m+".position",d,"pos",r),s(Ri,m+".quaternion",d,"rot",r),s(xs,m+".scale",d,"scl",r)}}return r.length===0?null:new this(o,c,r,l)}resetDuration(){const t=this.tracks;let n=0;for(let s=0,r=t.length;s!==r;++s){const o=this.tracks[s];n=Math.max(n,o.times[o.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function OM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return gf;case"quaternion":return Ri;case"bool":case"boolean":return bs;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function BM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=OM(i.type);if(i.times===void 0){const n=[],s=[];mf(i.keys,n,s,"value"),i.times=n,i.values=s}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const vs={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class HM{constructor(t,n,s){const r=this;let o=!1,a=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=s,this.itemStart=function(h){l++,o===!1&&r.onStart!==void 0&&r.onStart(h,a,l),o=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){const m=u[f],_=u[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const zM=new HM;class ws{constructor(t){this.manager=t!==void 0?t:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const s=this;return new Promise(function(r,o){s.load(t,r,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class GM extends Error{constructor(t,n){super(t),this.response=n}}class _f extends ws{constructor(t){super(t)}load(t,n,s,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=vs.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(o),this.manager.itemEnd(t)},0),o;if(Cn[t]!==void 0){Cn[t].push({onLoad:n,onProgress:s,onError:r});return}Cn[t]=[],Cn[t].push({onLoad:n,onProgress:s,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Cn[t],f=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0;let x=0;const g=new ReadableStream({start(p){A();function A(){f.read().then(({done:S,value:E})=>{if(S)p.close();else{x+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:m});for(let L=0,C=h.length;L<C;L++){const j=h[L];j.onProgress&&j.onProgress(R)}p.enqueue(E),A()}})}}});return new Response(g)}else throw new GM(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return u.json();default:if(l===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return u.arrayBuffer().then(_=>m.decode(_))}}}).then(u=>{vs.add(t,u);const h=Cn[t];delete Cn[t];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onLoad&&m.onLoad(u)}}).catch(u=>{const h=Cn[t];if(h===void 0)throw this.manager.itemError(t),u;delete Cn[t];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onError&&m.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class kM extends ws{constructor(t){super(t)}load(t,n,s,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=vs.get(t);if(a!==void 0)return o.manager.itemStart(t),setTimeout(function(){n&&n(a),o.manager.itemEnd(t)},0),a;const l=er("img");function c(){h(),vs.add(t,this),n&&n(this),o.manager.itemEnd(t)}function u(f){h(),r&&r(f),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(t),l.src=t,l}}class VM extends ws{constructor(t){super(t)}load(t,n,s,r){const o=new xt,a=new kM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(l){o.image=l,o.needsUpdate=!0,n!==void 0&&n(o)},s,r),o}}class ho extends rt{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ta=new ke,Nu=new N,Fu=new N;class _l{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;Nu.setFromMatrixPosition(t.matrixWorld),n.position.copy(Nu),Fu.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Fu),n.updateMatrixWorld(),ta.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class WM extends _l{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const n=this.camera,s=ms*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=t.distance||n.far;(s!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=s,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class XM extends ho{constructor(t,n,s=0,r=Math.PI/3,o=0,a=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=s,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new WM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ou=new ke,Fs=new N,na=new N;class qM extends _l{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,n=0){const s=this.camera,r=this.matrix,o=t.distance||s.far;o!==s.far&&(s.far=o,s.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),s.position.copy(Fs),na.copy(s.position),na.add(this._cubeDirections[n]),s.up.copy(this._cubeUps[n]),s.lookAt(na),s.updateMatrixWorld(),r.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Ou.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}}class jM extends ho{constructor(t,n,s=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=r,this.shadow=new qM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class YM extends _l{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KM extends ho{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new YM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $M extends ho{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class La{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let n="";for(let s=0,r=t.length;s<r;s++)n+=String.fromCharCode(t[s]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}class ZM extends ws{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,n,s,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=vs.get(t);if(a!==void 0)return o.manager.itemStart(t),setTimeout(function(){n&&n(a),o.manager.itemEnd(t)},0),a;const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(t,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(c){vs.add(t,c),n&&n(c),o.manager.itemEnd(t)}).catch(function(c){r&&r(c),o.manager.itemError(t),o.manager.itemEnd(t)}),o.manager.itemStart(t)}}const xl="\\[\\]\\.:\\/",JM=new RegExp("["+xl+"]","g"),vl="[^"+xl+"]",QM="[^"+xl.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",vl),ty=/(WCOD+)?/.source.replace("WCOD",QM),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),sy=new RegExp("^"+ey+ty+ny+iy+"$"),ry=["material","materials","bones","map"];class oy{constructor(t,n,s){const r=s||Ze.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,r)}getValue(t,n){this.bind();const s=this._targetGroup.nCachedObjects_,r=this._bindings[s];r!==void 0&&r.getValue(t,n)}setValue(t,n){const s=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=s.length;r!==o;++r)s[r].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=t.length;n!==s;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=t.length;n!==s;++n)t[n].unbind()}}class Ze{constructor(t,n,s){this.path=n,this.parsedPath=s||Ze.parseTrackName(n),this.node=Ze.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,s){return t&&t.isAnimationObjectGroup?new Ze.Composite(t,n,s):new Ze(t,n,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(JM,"")}static parseTrackName(t){const n=sy.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const s={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=s.nodeName&&s.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=s.nodeName.substring(r+1);ry.indexOf(o)!==-1&&(s.nodeName=s.nodeName.substring(0,r),s.objectName=o)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const s=t.skeleton.getBoneByName(n);if(s!==void 0)return s}if(t.children){const s=function(o){for(let a=0;a<o.length;a++){const l=o[a];if(l.name===n||l.uuid===n)return l;const c=s(l.children);if(c)return c}return null},r=s(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)t[n++]=s[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const s=this.resolvedProperty;for(let r=0,o=s.length;r!==o;++r)s[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,s=n.objectName,r=n.propertyName;let o=n.propertyIndex;if(t||(t=Ze.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let u=n.objectIndex;switch(s){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const a=t[r];if(a===void 0){const u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=oy;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ay{constructor(t,n,s=0,r=1/0){this.ray=new tr(t,n),this.near=s,this.far=r,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(t,n=!0,s=[]){return Pa(t,this,s,n),s.sort(Bu),s}intersectObjects(t,n=!0,s=[]){for(let r=0,o=t.length;r<o;r++)Pa(t[r],this,s,n);return s.sort(Bu),s}}function Bu(i,t){return i.distance-t.distance}function Pa(i,t,n,s){if(i.layers.test(t.layers)&&i.raycast(t,n),s===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Pa(r[o],t,n,!0)}}class ly extends ff{constructor(t,n=16776960){const s=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],o=new on;o.setIndex(new At(s,1)),o.setAttribute("position",new _n(r,3)),super(o,new pl({color:n,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const n=this.box;n.isEmpty()||(n.getCenter(this.position),n.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);function Hu(i,t){if(t===km)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Ta||t===Vh){let n=i.getIndex();if(n===null){const a=[],l=i.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);i.setIndex(a),n=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const s=n.count-2,r=[];if(t===Ta)for(let a=1;a<=s;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<s;a++)a%2===0?(r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2))):(r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a)));r.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=i.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class cy extends ws{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new py(n)}),this.register(function(n){return new Sy(n)}),this.register(function(n){return new Ey(n)}),this.register(function(n){return new Ty(n)}),this.register(function(n){return new gy(n)}),this.register(function(n){return new _y(n)}),this.register(function(n){return new xy(n)}),this.register(function(n){return new vy(n)}),this.register(function(n){return new dy(n)}),this.register(function(n){return new My(n)}),this.register(function(n){return new my(n)}),this.register(function(n){return new yy(n)}),this.register(function(n){return new hy(n)}),this.register(function(n){return new by(n)}),this.register(function(n){return new Ay(n)})}load(t,n,s,r){const o=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=La.extractUrlBase(t),this.manager.itemStart(t);const l=function(u){r?r(u):console.error(u),o.manager.itemError(t),o.manager.itemEnd(t)},c=new _f(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{o.parse(u,a,function(h){n(h),o.manager.itemEnd(t)},l)}catch(h){l(h)}},s,l)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,s,r){let o;const a={},l={},c=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===xf){try{a[je.KHR_BINARY_GLTF]=new wy(t)}catch(f){r&&r(f);return}o=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new zy(o,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](u);l[f.name]=f,a[f.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){const f=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(f){case je.KHR_MATERIALS_UNLIT:a[f]=new fy;break;case je.KHR_DRACO_MESH_COMPRESSION:a[f]=new Ry(o,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[f]=new Cy;break;case je.KHR_MESH_QUANTIZATION:a[f]=new Ly;break;default:d.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(l),u.parse(s,r)}parseAsync(t,n){const s=this;return new Promise(function(r,o){s.parse(t,n,r,o)})}}function uy(){let i={};return{get:function(t){return i[t]},add:function(t,n){i[t]=n},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hy{constructor(t){this.parser=t,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let s=0,r=n.length;s<r;s++){const o=n[s];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const n=this.parser,s="light:"+t;let r=n.cache.get(s);if(r)return r;const o=n.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let u;const h=new Fe(16777215);c.color!==void 0&&h.fromArray(c.color);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new KM(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new jM(h),u.distance=f;break;case"spot":u=new XM(h),u.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,qn(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=n.createUniqueName(c.name||"light_"+t),r=Promise.resolve(u),n.cache.add(s,r),r}getDependency(t,n){if(t==="light")return this._loadLight(n)}createNodeAttachment(t){const n=this,s=this.parser,o=s.json.nodes[t],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return s._getNodeRef(n.cache,l,c)})}}class fy{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(t,n,s){const r=[];t.color=new Fe(1,1,1),t.opacity=1;const o=n.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;t.color.fromArray(a),t.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(s.assignTexture(t,"map",o.baseColorTexture,Ue))}return Promise.all(r)}}class dy{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(n.emissiveIntensity=o),Promise.resolve()}}class py{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(s.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(s.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(s.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ye(l,l)}return Promise.all(o)}}class my{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(s.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(s.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class gy{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];n.sheenColor=new Fe(0,0,0),n.sheenRoughness=0,n.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&n.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(s.assignTexture(n,"sheenColorMap",a.sheenColorTexture,Ue)),a.sheenRoughnessTexture!==void 0&&o.push(s.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class _y{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(s.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class xy{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(s.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return n.attenuationColor=new Fe(l[0],l[1],l[2]),Promise.all(o)}}class vy{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_IOR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return n.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class My{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(s.assignTexture(n,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return n.specularColor=new Fe(l[0],l[1],l[2]),a.specularColorTexture!==void 0&&o.push(s.assignTexture(n,"specularColorMap",a.specularColorTexture,Ue)),Promise.all(o)}}class yy{constructor(t){this.parser=t,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const s=this.parser.json.materials[t];return!s.extensions||!s.extensions[this.name]?null:ni}extendMaterialParams(t,n){const s=this.parser,r=s.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(s.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class Sy{constructor(t){this.parser=t,this.name=je.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,o.source,a)}}class Ey{constructor(t){this.parser=t,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const n=this.name,s=this.parser,r=s.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],l=r.images[a.source];let c=s.textureLoader;if(l.uri){const u=s.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return s.loadTextureImage(t,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class Ty{constructor(t){this.parser=t,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const n=this.name,s=this.parser,r=s.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],l=r.images[a.source];let c=s.textureLoader;if(l.uri){const u=s.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return s.loadTextureImage(t,a.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return s.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class by{constructor(t){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const n=this.parser.json,s=n.bufferViews[t];if(s.extensions&&s.extensions[this.name]){const r=s.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){const c=r.byteOffset||0,u=r.byteLength||0,h=r.count,f=r.byteStride,d=new Uint8Array(l,c,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(m),h,f,d,r.mode,r.filter),m})})}else return null}}class Ay{constructor(t){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const n=this.parser.json,s=n.nodes[t];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const r=n.meshes[s.mesh];for(const u of r.primitives)if(u.mode!==Wt.TRIANGLES&&u.mode!==Wt.TRIANGLE_STRIP&&u.mode!==Wt.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=s.extensions[this.name].attributes,l=[],c={};for(const u in a)l.push(this.parser.getDependency("accessor",a[u]).then(h=>(c[u]=h,c[u])));return l.length<1?null:(l.push(this.parser.createNodeMesh(t)),Promise.all(l).then(u=>{const h=u.pop(),f=h.isGroup?h.children:[h],d=u[0].count,m=[];for(const _ of f){const x=new ke,g=new N,p=new ti,A=new N(1,1,1),S=new RM(_.geometry,_.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&A.fromBufferAttribute(c.SCALE,E),S.setMatrixAt(E,x.compose(g,p,A));for(const E in c)E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,c[E]);rt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const xf="glTF",Os=12,zu={JSON:1313821514,BIN:5130562};class wy{constructor(t){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,Os),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Os,o=new DataView(t,Os);let a=0;for(;a<r;){const l=o.getUint32(a,!0);a+=4;const c=o.getUint32(a,!0);if(a+=4,c===zu.JSON){const u=new Uint8Array(t,Os+a,l);this.content=s.decode(u)}else if(c===zu.BIN){const u=Os+a;this.body=t.slice(u,u+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ry{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const s=this.json,r=this.dracoLoader,o=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,l={},c={},u={};for(const h in a){const f=Ia[h]||h.toLowerCase();l[f]=a[h]}for(const h in t.attributes){const f=Ia[h]||h.toLowerCase();if(a[h]!==void 0){const d=s.accessors[t.attributes[h]],m=os[d.componentType];u[f]=m.name,c[f]=d.normalized===!0}}return n.getDependency("bufferView",o).then(function(h){return new Promise(function(f){r.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],x=c[m];x!==void 0&&(_.normalized=x)}f(d)},l,u)})})}}class Cy{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return(n.texCoord===void 0||n.texCoord===t.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.texCoord!==void 0&&(t.channel=n.texCoord),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class Ly{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class vf extends ir{constructor(t,n,s,r){super(t,n,s,r)}copySampleValue_(t){const n=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=t*r*3+r;for(let a=0;a!==r;a++)n[a]=s[o+a];return n}interpolate_(t,n,s,r){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,u=l*3,h=r-n,f=(s-n)/h,d=f*f,m=d*f,_=t*u,x=_-u,g=-2*m+3*d,p=m-d,A=1-g,S=p-d+f;for(let E=0;E!==l;E++){const R=a[x+E+l],L=a[x+E+c]*h,C=a[_+E+l],j=a[_+E]*h;o[E]=A*R+S*L+g*C+p*j}return o}}const Py=new ti;class Iy extends vf{interpolate_(t,n,s,r){const o=super.interpolate_(t,n,s,r);return Py.fromArray(o).normalize().toArray(o),o}}const Wt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gu={9728:_t,9729:Nt,9984:Ea,9985:Fh,9986:kr,9987:bi},ku={33071:Xt,33648:Zr,10497:fs},ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ia={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dy={CUBICSPLINE:void 0,LINEAR:ps,STEP:Qs},sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new gl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function hi(i,t,n){for(const s in n.extensions)i[s]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=n.extensions[s])}function qn(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ny(i,t,n){let s=!1,r=!1,o=!1;for(let u=0,h=t.length;u<h;u++){const f=t[u];if(f.POSITION!==void 0&&(s=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(o=!0),s&&r&&o)break}if(!s&&!r&&!o)return Promise.resolve(i);const a=[],l=[],c=[];for(let u=0,h=t.length;u<h;u++){const f=t[u];if(s){const d=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):i.attributes.position;a.push(d)}if(r){const d=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):i.attributes.normal;l.push(d)}if(o){const d=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2];return s&&(i.morphAttributes.position=h),r&&(i.morphAttributes.normal=f),o&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Fy(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let n=0,s=t.weights.length;n<s;n++)i.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(i.morphTargetInfluences.length===n.length){i.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++)i.morphTargetDictionary[n[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Oy(i){let t;const n=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+ra(n.attributes):t=i.indices+":"+ra(i.attributes)+":"+i.mode,i.targets!==void 0)for(let s=0,r=i.targets.length;s<r;s++)t+=":"+ra(i.targets[s]);return t}function ra(i){let t="";const n=Object.keys(i).sort();for(let s=0,r=n.length;s<r;s++)t+=n[s]+":"+i[n[s]]+";";return t}function Da(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function By(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hy=new ke;class zy{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new uy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,r=!1,o=-1;typeof navigator<"u"&&(s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,o=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||s||r&&o<98?this.textureLoader=new VM(this.options.manager):this.textureLoader=new ZM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _f(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const s=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(a){const l={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:s,userData:{}};hi(o,l,r),qn(l,r),Promise.all(s._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){t(l)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],s=this.json.meshes||[];for(let r=0,o=n.length;r<o;r++){const a=n[r].joints;for(let l=0,c=a.length;l<c;l++)t[a[l]].isBone=!0}for(let r=0,o=t.length;r<o;r++){const a=t[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(s[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,s){if(t.refs[n]<=1)return s;const r=s.clone(),o=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[u,h]of a.children.entries())o(h,l.children[u])};return o(s,r),r.name+="_instance_"+t.uses[n]++,r}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let s=0;s<n.length;s++){const r=t(n[s]);if(r)return r}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const s=[];for(let r=0;r<n.length;r++){const o=t(n[r]);o&&s.push(o)}return s}getDependency(t,n){const s=t+":"+n;let r=this.cache.get(s);if(!r){switch(t){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(n)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,n)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(s,r)}return r}getDependencies(t){let n=this.cache.get(t);if(!n){const s=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(o,a){return s.getDependency(t,a)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],s=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,a){s.load(La.resolveURL(n.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(s){const r=n.byteLength||0,o=n.byteOffset||0;return s.slice(o,o+r)})}loadAccessor(t){const n=this,s=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const a=ia[r.type],l=os[r.componentType],c=r.normalized===!0,u=new l(r.count*a);return Promise.resolve(new At(u,a,c))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){const l=a[0],c=ia[r.type],u=os[r.componentType],h=u.BYTES_PER_ELEMENT,f=h*c,d=r.byteOffset||0,m=r.bufferView!==void 0?s.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let x,g;if(m&&m!==f){const p=Math.floor(d/m),A="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let S=n.cache.get(A);S||(x=new u(l,p*m,r.count*m/h),S=new SM(x,m/h),n.cache.add(A,S)),g=new fl(S,c,d%m/h,_)}else l===null?x=new u(r.count*c):x=new u(l,d,r.count*c),g=new At(x,c,_);if(r.sparse!==void 0){const p=ia.SCALAR,A=os[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,R=new A(a[1],S,r.sparse.count*p),L=new u(a[2],E,r.sparse.count*c);l!==null&&(g=new At(g.array.slice(),g.itemSize,g.normalized));for(let C=0,j=R.length;C<j;C++){const T=R[C];if(g.setX(T,L[C*c]),c>=2&&g.setY(T,L[C*c+1]),c>=3&&g.setZ(T,L[C*c+2]),c>=4&&g.setW(T,L[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){const n=this.json,s=this.options,o=n.textures[t].source,a=n.images[o];let l=this.textureLoader;if(a.uri){const c=s.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(t,o,l)}loadTextureImage(t,n,s){const r=this,o=this.json,a=o.textures[t],l=o.images[n],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(n,s).then(function(h){h.flipY=!1,h.name=a.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const d=(o.samplers||{})[a.sampler]||{};return h.magFilter=Gu[d.magFilter]||Nt,h.minFilter=Gu[d.minFilter]||bi,h.wrapS=ku[d.wrapS]||fs,h.wrapT=ku[d.wrapT]||fs,r.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,n){const s=this,r=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const a=r.images[t],l=self.URL||self.webkitURL;let c=a.uri||"",u=!1;if(a.bufferView!==void 0)c=s.getDependency("bufferView",a.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:a.mimeType});return c=l.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(d,m){let _=d;n.isImageBitmapLoader===!0&&(_=function(x){const g=new xt(x);g.needsUpdate=!0,d(g)}),n.load(La.resolveURL(f,o.path),_,void 0,m)})}).then(function(f){return u===!0&&l.revokeObjectURL(c),f.userData.mimeType=a.mimeType||By(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[t]=h,h}assignTexture(t,n,s,r){const o=this;return this.getDependency("texture",s.index).then(function(a){if(!a)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(a=a.clone(),a.channel=s.texCoord),o.extensions[je.KHR_TEXTURE_TRANSFORM]){const l=s.extensions!==void 0?s.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=o.associations.get(a);a=o.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),t[n]=a,a})}assignFinalMaterial(t){const n=t.geometry;let s=t.material;const r=n.attributes.tangent===void 0,o=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(t.isPoints){const l="PointsMaterial:"+s.uuid;let c=this.cache.get(l);c||(c=new df,gn.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,c.sizeAttenuation=!1,this.cache.add(l,c)),s=c}else if(t.isLine){const l="LineBasicMaterial:"+s.uuid;let c=this.cache.get(l);c||(c=new pl,gn.prototype.copy.call(c,s),c.color.copy(s.color),c.map=s.map,this.cache.add(l,c)),s=c}if(r||o||a){let l="ClonedMaterial:"+s.uuid+":";r&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=s.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(s))),s=c}t.material=s}getMaterialType(){return gl}loadMaterial(t){const n=this,s=this.json,r=this.extensions,o=s.materials[t];let a;const l={},c=o.extensions||{},u=[];if(c[je.KHR_MATERIALS_UNLIT]){const f=r[je.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(l,o,n))}else{const f=o.pbrMetallicRoughness||{};if(l.color=new Fe(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;l.color.fromArray(d),l.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(n.assignTexture(l,"map",f.baseColorTexture,Ue)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(n.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),u.push(n.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,l)})))}o.doubleSided===!0&&(l.side=dn);const h=o.alphaMode||sa.OPAQUE;if(h===sa.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===sa.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==Yn&&(u.push(n.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new Ye(1,1),o.normalTexture.scale!==void 0)){const f=o.normalTexture.scale;l.normalScale.set(f,f)}return o.occlusionTexture!==void 0&&a!==Yn&&(u.push(n.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==Yn&&(l.emissive=new Fe().fromArray(o.emissiveFactor)),o.emissiveTexture!==void 0&&a!==Yn&&u.push(n.assignTexture(l,"emissiveMap",o.emissiveTexture,Ue)),Promise.all(u).then(function(){const f=new a(l);return o.name&&(f.name=o.name),qn(f,o),n.associations.set(f,{materials:t}),o.extensions&&hi(r,f,o),f})}createUniqueName(t){const n=Ze.sanitizeNodeName(t||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(t){const n=this,s=this.extensions,r=this.primitiveCache;function o(l){return s[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,n).then(function(c){return Vu(c,l,n)})}const a=[];for(let l=0,c=t.length;l<c;l++){const u=t[l],h=Oy(u),f=r[h];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=o(u):d=Vu(new on,u,n),r[h]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const n=this,s=this.json,r=this.extensions,o=s.meshes[t],a=o.primitives,l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c].material===void 0?Uy(this.cache):this.getDependency("material",a[c].material);l.push(h)}return l.push(n.loadGeometries(a)),Promise.all(l).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let m=0,_=h.length;m<_;m++){const x=h[m],g=a[m];let p;const A=u[m];if(g.mode===Wt.TRIANGLES||g.mode===Wt.TRIANGLE_STRIP||g.mode===Wt.TRIANGLE_FAN||g.mode===void 0)p=o.isSkinnedMesh===!0?new TM(x,A):new Gt(x,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Wt.TRIANGLE_STRIP?p.geometry=Hu(p.geometry,Vh):g.mode===Wt.TRIANGLE_FAN&&(p.geometry=Hu(p.geometry,Ta));else if(g.mode===Wt.LINES)p=new ff(x,A);else if(g.mode===Wt.LINE_STRIP)p=new ml(x,A);else if(g.mode===Wt.LINE_LOOP)p=new CM(x,A);else if(g.mode===Wt.POINTS)p=new LM(x,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fy(p,o),p.name=n.createUniqueName(o.name||"mesh_"+t),qn(p,o),g.extensions&&hi(r,p,g),n.assignFinalMaterial(p),f.push(p)}for(let m=0,_=f.length;m<_;m++)n.associations.set(f[m],{meshes:t,primitives:m});if(f.length===1)return o.extensions&&hi(r,f[0],o),f[0];const d=new _i;o.extensions&&hi(r,d,o),n.associations.set(d,{meshes:t});for(let m=0,_=f.length;m<_;m++)d.add(f[m]);return d})}loadCamera(t){let n;const s=this.json.cameras[t],r=s[s.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?n=new It(Vr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):s.type==="orthographic"&&(n=new ul(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),s.name&&(n.name=this.createUniqueName(s.name)),qn(n,s),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],s=[];for(let r=0,o=n.joints.length;r<o;r++)s.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",n.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(r){const o=r.pop(),a=r,l=[],c=[];for(let u=0,h=a.length;u<h;u++){const f=a[u];if(f){l.push(f);const d=new ke;o!==null&&d.fromArray(o.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[u])}return new dl(l,c)})}loadAnimation(t){const n=this.json,s=this,r=n.animations[t],o=r.name?r.name:"animation_"+t,a=[],l=[],c=[],u=[],h=[];for(let f=0,d=r.channels.length;f<d;f++){const m=r.channels[f],_=r.samplers[m.sampler],x=m.target,g=x.node,p=r.parameters!==void 0?r.parameters[_.input]:_.input,A=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),l.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",A)),u.push(_),h.push(x))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(f){const d=f[0],m=f[1],_=f[2],x=f[3],g=f[4],p=[];for(let A=0,S=d.length;A<S;A++){const E=d[A],R=m[A],L=_[A],C=x[A],j=g[A];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const T=s._createAnimationTracks(E,R,L,C,j);if(T)for(let w=0;w<T.length;w++)p.push(T[w])}return new FM(o,void 0,p)})}createNodeMesh(t){const n=this.json,s=this,r=n.nodes[t];return r.mesh===void 0?null:s.getDependency("mesh",r.mesh).then(function(o){const a=s._getNodeRef(s.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,u=r.weights.length;c<u;c++)l.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(t){const n=this.json,s=this,r=n.nodes[t],o=s._loadNodeShallow(t),a=[],l=r.children||[];for(let u=0,h=l.length;u<h;u++)a.push(s.getDependency("node",l[u]));const c=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),c]).then(function(u){const h=u[0],f=u[1],d=u[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,Hy)});for(let m=0,_=f.length;m<_;m++)h.add(f[m]);return h})}_loadNodeShallow(t){const n=this.json,s=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=n.nodes[t],a=o.name?r.createUniqueName(o.name):"",l=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&l.push(c),o.camera!==void 0&&l.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){l.push(u)}),this.nodeCache[t]=Promise.all(l).then(function(u){let h;if(o.isBone===!0?h=new hf:u.length>1?h=new _i:u.length===1?h=u[0]:h=new rt,h!==u[0])for(let f=0,d=u.length;f<d;f++)h.add(u[f]);if(o.name&&(h.userData.name=o.name,h.name=a),qn(h,o),o.extensions&&hi(s,h,o),o.matrix!==void 0){const f=new ke;f.fromArray(o.matrix),h.applyMatrix4(f)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const n=this.extensions,s=this.json.scenes[t],r=this,o=new _i;s.name&&(o.name=r.createUniqueName(s.name)),qn(o,s),s.extensions&&hi(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(r.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let h=0,f=c.length;h<f;h++)o.add(c[h]);const u=h=>{const f=new Map;for(const[d,m]of r.associations)(d instanceof gn||d instanceof xt)&&f.set(d,m);return h.traverse(d=>{const m=r.associations.get(d);m!=null&&f.set(d,m)}),f};return r.associations=u(o),o})}_createAnimationTracks(t,n,s,r,o){const a=[],l=t.name?t.name:t.uuid,c=[];Wn[o.path]===Wn.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(l);let u;switch(Wn[o.path]){case Wn.weights:u=_s;break;case Wn.rotation:u=Ri;break;case Wn.position:case Wn.scale:u=xs;break;default:switch(s.itemSize){case 1:u=_s;break;case 2:case 3:default:u=xs;break}break}const h=r.interpolation!==void 0?Dy[r.interpolation]:ps,f=this._getArrayFromAccessor(s);for(let d=0,m=c.length;d<m;d++){const _=new u(c[d]+"."+Wn[o.path],n.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(t){let n=t.array;if(t.normalized){const s=Da(n.constructor),r=new Float32Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=n[o]*s;n=r}return n}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(s){const r=this instanceof Ri?Iy:vf;return new r(this.times,this.values,this.getValueSize()/3,s)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gy(i,t,n){const s=t.attributes,r=new vn;if(s.POSITION!==void 0){const l=n.json.accessors[s.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(r.set(new N(c[0],c[1],c[2]),new N(u[0],u[1],u[2])),l.normalized){const h=Da(os[l.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const l=new N,c=new N;for(let u=0,h=o.length;u<h;u++){const f=o[u];if(f.POSITION!==void 0){const d=n.json.accessors[f.POSITION],m=d.min,_=d.max;if(m!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),d.normalized){const x=Da(os[d.componentType]);c.multiplyScalar(x)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(l)}i.boundingBox=r;const a=new Mn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Vu(i,t,n){const s=t.attributes,r=[];function o(a,l){return n.getDependency("accessor",a).then(function(c){i.setAttribute(l,c)})}for(const a in s){const l=Ia[a]||a.toLowerCase();l in i.attributes||r.push(o(s[a],l))}if(t.indices!==void 0&&!i.index){const a=n.getDependency("accessor",t.indices).then(function(l){i.setIndex(l)});r.push(a)}return qn(i,t),Gy(i,t,n),Promise.all(r).then(function(){return t.targets!==void 0?Ny(i,t.targets,n):i})}const Ki=new nr(0,0,0,"YXZ"),$i=new N,ky={type:"change"},Vy={type:"lock"},Wy={type:"unlock"},Wu=Math.PI/2;class Xy extends Ci{constructor(t,n){super(),this.camera=t,this.domElement=n,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=qy.bind(this),this._onPointerlockChange=jy.bind(this),this._onPointerlockError=Yy.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){const n=this.camera;$i.setFromMatrixColumn(n.matrix,0),$i.crossVectors(n.up,$i),n.position.addScaledVector($i,t)}moveRight(t){const n=this.camera;$i.setFromMatrixColumn(n.matrix,0),n.position.addScaledVector($i,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function qy(i){if(this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,n=i.movementY||i.mozMovementY||i.webkitMovementY||0,s=this.camera;Ki.setFromQuaternion(s.quaternion),Ki.y-=t*.002*this.pointerSpeed,Ki.x-=n*.002*this.pointerSpeed,Ki.x=Math.max(Wu-this.maxPolarAngle,Math.min(Wu-this.minPolarAngle,Ki.x)),s.quaternion.setFromEuler(Ki),this.dispatchEvent(ky)}function jy(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Vy),this.isLocked=!0):(this.dispatchEvent(Wy),this.isLocked=!1)}function Yy(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Ky="/3D/assets/map_pointer-2d7216c4.glb",$y={mounted(){var i=new yM;i.background=new Fe(11259375);var t=new It(75,window.innerWidth/window.innerHeight,.1,100),n=new uf;n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);var s=new cy;S(Ky);var r=new $M(16777215);i.add(r),E();var o=new Xy(t,n.domElement);i.add(o.getObject());var a={forward:!1,backward:!1,left:!1,right:!1,rotateLeft:!1,rotateRight:!1},l={minX:-100,minY:-100,minZ:-100,maxX:100,maxY:100,maxZ:100};const c=new ay,u=new Ye;u.x=window.innerWidth/2,u.y=window.innerHeight/2,document.addEventListener("keydown",function(U){R(U.code)}),document.addEventListener("keyup",function(U){L(U.code)}),window.addEventListener("resize",C);var h=0,f=0,d=0;window.addEventListener("deviceorientation",j,!1);var m=10;window.addEventListener("devicemotion",T,!1);var _=new N;document.querySelectorAll("canvas")[0].addEventListener("click",U=>Y(U)),Z();const x=1.5;let g=null,p=0;re();function A(U){const{x:O,y:se,z:te}=U;return Math.sqrt(O*O+se*se+te*te)}function S(U){s.load(U,function(O){O.scene.scale.set(1,1,1),O.scene.position.set(44,10,0),i.add(O.scene),console.log(O.scene);const se=new vn().setFromObject(O.scene),te=new ly(se,16711680);i.add(te)},void 0,function(O){console.error(O)})}function E(){t.position.x=0,t.position.y=m,t.position.z=0}function R(U){switch(U){case"KeyW":a.forward=!0;break;case"KeyS":a.backward=!0;break;case"KeyA":a.left=!0;break;case"KeyD":a.right=!0;break;case"KeyQ":a.rotateLeft=!0;break;case"KeyE":a.rotateRight=!0;break}}function L(U){switch(U){case"KeyW":a.forward=!1;break;case"KeyS":a.backward=!1;break;case"KeyA":a.left=!1;break;case"KeyD":a.right=!1;break;case"KeyQ":a.rotateLeft=!1;break;case"KeyE":a.rotateRight=!1;break}}function C(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}function j(U){h===0&&f===0&&d===0&&(h=U.alpha||0,f=U.beta||0,d=U.gamma||0);var O=(U.alpha||0)-h,se=(U.beta||0)-f,te=(U.gamma||0)-d;O=Vr.degToRad(O),se=Vr.degToRad(se),te=Vr.degToRad(te),t.rotation.set(se,O,-te)}function T(U){Math.abs(U.acceleration.x)>1&&(document.getElementById("AX").innerHTML="AX:"+U.acceleration.x),Math.abs(U.acceleration.y)>2&&(document.getElementById("AY").innerHTML="AY:"+U.acceleration.y),Math.abs(U.acceleration.z)>3&&(document.getElementById("AZ").innerHTML="AZ:"+U.acceleration.z,t.getWorldDirection(_),o.getObject().position.add(_.multiplyScalar(-U.acceleration.z*.3))),o.getObject().position.y=m,document.getElementById("camera").innerHTML="X:"+t.position.x+`
Y:`+t.position.y+`
Z:`+t.position.z;const O=e.accelerationIncludingGravity;if(!O)return;const se=A(O);if(g){const te=Math.abs(se-g);document.getElementById("accDiff").innerHTML="accDiff:"+te,te>x&&(p++,document.getElementById("Step").innerHTML="Step"+p)}g=se}function w(){t.position.x=Math.max(l.minX,Math.min(l.maxX,t.position.x)),t.position.y=Math.max(l.minY,Math.min(l.maxY,t.position.y)),t.position.z=Math.max(l.minZ,Math.min(l.maxZ,t.position.z))}function ce(){c.setFromCamera(u,t)}function ue(){ce();const U=c.intersectObjects(i.children,!0);var O=100;U.length>0&&U[0].distance<O&&U.forEach(se=>{console.log(se),console.log(k(se.object))})}function k(U){let O=U;for(;O.parent.parent!==null;)O=O.parent;return O}function Y(U){u.x=U.clientX/window.innerWidth*2-1,u.y=-(U.clientY/window.innerHeight)*2+1,ue()}function Z(){const U=new Es(1,1,1),O=new Yn({color:65280}),se=new Gt(U,O);se.position.set(10,10,10),i.add(se)}function re(){requestAnimationFrame(re);var U=.1,O=.01;a.forward&&(t.getWorldDirection(_),o.getObject().position.add(_.multiplyScalar(U))),a.backward&&(t.getWorldDirection(_),o.getObject().position.add(_.multiplyScalar(-U))),a.left&&(t.getWorldDirection(_),o.getObject().position.add(_.cross(new N(0,1,0)).normalize().multiplyScalar(-U))),a.right&&(t.getWorldDirection(_),o.getObject().position.add(_.cross(new N(0,1,0)).normalize().multiplyScalar(U))),a.rotateLeft&&(o.getObject().rotation.y+=O),a.rotateRight&&(o.getObject().rotation.y-=O),w(),n.render(i,t)}}},Zy=yp('<p id="AX">AX:</p><p id="AY">AY:</p><p id="AZ">AZ:</p><p id="camera">X: Y: Z:</p><p id="accDiff">accDiff:</p><p id="Step">Step:</p>',6);function Jy(i,t,n,s,r,o){return Zy}const Qy=il($y,[["render",Jy]]);const eS={data(){return{isModalOpen:!0,alpha:0,beta:0,gamma:0,AccelerationX:0,AccelerationY:0,AccelerationZ:0}},methods:{showModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},requestDeviceMotion(){typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(i=>{i==="granted"&&(window.addEventListener("devicemotion",t=>{this.alpha=t.alpha,this.beta=t.beta,this.gamma=t.gamma}),window.addEventListener("deviceorientation",t=>{this.AccelerationX=t.accelerationIncludingGravity.x,this.AccelerationY=t.accelerationIncludingGravity.y,this.AccelerationZ=t.accelerationIncludingGravity.z}))}).catch(console.error):console.log("Motion")},requestDeviceOrientation(){typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(i=>{i==="granted"&&window.addEventListener("deviceorientation",()=>{})}).catch(console.error):console.log("Or")}}},tS={key:0,class:"modal"},nS={class:"modal-content"},iS=is("h2",null,"Request Permission",-1);function sS(i,t,n,s,r,o){return $r(),xa("div",null,[r.isModalOpen?($r(),xa("div",tS,[is("div",nS,[is("span",{class:"close",onClick:t[0]||(t[0]=(...a)=>o.closeModal&&o.closeModal(...a))},"×"),iS,is("button",{onClick:t[1]||(t[1]=(...a)=>o.requestDeviceMotion&&o.requestDeviceMotion(...a))},"DeviceMotion")])])):Sp("",!0)])}const rS=il(eS,[["render",sS]]);const oS={__name:"App",setup(i){return(t,n)=>($r(),xa(cn,null,[jt(rS),jt(Qy)],64))}},aS=il(oS,[["__scopeId","data-v-626589db"]]);tm(aS).mount("#app");
