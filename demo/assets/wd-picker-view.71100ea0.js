import{g as e,h as a,m as l,i as n,K as t,l as s,Q as o,x as u,t as i,P as r,o as c,F as d,R as m,S as v,b as p}from"./page-wraper.84820f31.js";import{d as h,r as g,q as f,h as y,j as w,o as b,c as k,w as x,a as _,p as C,x as K,e as $,F as S,f as I,n as V,b as P,t as E,a5 as F,i as O,a7 as j,a8 as D,y as H}from"./index-3f88d4b2.js";function T(e,a,l){let n=s(e)?e:[e];const t=new Set(e.map(o));if(1!==t.size&&t.has("object"))throw Error("The columns are correct");s(e[0])||(n=[n]);return n.map((e=>e.map((e=>{if(!u(e))return{[a]:e,[l]:e};if(!e.hasOwnProperty(a)&&!e.hasOwnProperty(l))throw Error("Can't find valueKey and labelKey in columns");return e.hasOwnProperty(l)||(e[l]=e[a]),e.hasOwnProperty(a)||(e[a]=e[l]),e}))))}const A=p(h({name:"wd-picker-view",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,loading:a(!1),loadingColor:l("#4D80F0"),columnsHeight:n(217),valueKey:l("value"),labelKey:l("label"),modelValue:{type:[String,Number,Boolean,Array,Array,Array],default:"",required:!0},columns:t(),columnChange:Function},emits:["change","pickstart","pickend","update:modelValue"],setup(e,{expose:a,emit:l}){const n=e,t=g([]),u=g(35),p=g([]),h=g([]);f((()=>n.modelValue),((e,a)=>{!r(a,e)&&c(e)&&q(e)}),{deep:!0,immediate:!0}),f((()=>n.columns),(e=>{t.value=T(e,n.valueKey,n.labelKey),q(n.modelValue)}),{deep:!0,immediate:!0}),f((()=>p.value),(e=>{r(e,h.value)||r(G(),n.modelValue)||z(0)}),{deep:!0,immediate:!0}),f((()=>n.columnChange),(e=>{e&&!d(e)&&console.error("The type of columnChange must be Function")}),{deep:!0,immediate:!0});const{proxy:A}=H();function q(e){if(0===n.columns.length)return;(""===e||null==e||s(e)&&0===e.length)&&(e=t.value.map((e=>e[0][n.valueKey])));const a=o(e),l=["string","number","boolean","array"];-1===l.indexOf(a)&&console.error(`value must be one of ${l.toString()}`),0===t.value.length&&(t.value=T(n.columns,n.valueKey,n.labelKey)),0===(e=(e=s(e)?e:[e]).slice(0,t.value.length)).length&&(e=t.value.map((()=>0)));let u=m(p.value);e.forEach(((e,a)=>{let l=t.value[a].findIndex((a=>a[n.valueKey].toString()===e.toString()));l=-1===l?0:l,u=N(a,l)})),p.value=u.slice(0,e.length)}function N(e,a){const l=t.value[e];if(!l||!l[a])throw Error(`The value to select with Col:${e} Row:${a} is correct`);const n=m(p.value);if(l[a].disabled){const t=l.slice(0,a).reverse().findIndex((e=>!e.disabled)),s=l.slice(a+1).findIndex((e=>!e.disabled));-1!==t?n[e]=a-1-t:-1!==s?n[e]=a+1+s:void 0===n[e]&&(n[e]=0)}else n[e]=a;return p.value=m(n),p.value}function R({detail:{value:e}}){const a=function(e){e=e.slice(0,t.value.length);const a=m(p.value);let l=m(p.value);e.forEach(((e,n)=>{(e=v(e,0,t.value[n].length-1))!==a[n]&&(l=N(n,e))})),p.value=l,h.value=a;const n=function(e,a){if(!e||!a)return-1;const l=e.findIndex(((e,l)=>e!==a[l]));return l}(l,a);if(-1===n)return;const s=l[n];return 1===l.length?s:n}(e=e.map((e=>Number(e||0))));p.value=m(e),F((()=>{n.columnChange?n.columnChange.length<4?(n.columnChange(A.$.exposed,B(),a||0,(()=>{})),z(a||0)):n.columnChange(A.$.exposed,B(),a||0,(()=>{z(a||0)})):z(a||0)}))}function z(e){const a=G();r(a,n.modelValue)||(l("update:modelValue",a),setTimeout((()=>{l("change",{picker:A.$.exposed,value:a,index:e})}),0))}function B(){const e=p.value.map(((e,a)=>t.value[a][e]));return 1===e.length?e[0]:e}function G(){const{valueKey:e}=n,a=p.value.map(((a,l)=>t.value[l][a][e]));return 1===a.length?a[0]:a}function L(){l("pickstart")}function Q(){l("pickend")}return a({getSelects:B,getValues:G,setColumnData:function(e,a,l=0){p.value=N(e,l),t.value[e]=T(a,n.valueKey,n.labelKey).reduce(((e,a)=>e.concat(a)),[])},getColumnsData:function(){return t.value.slice(0)},getColumnData:function(e){return t.value[e]},getColumnIndex:function(e){return p.value[e]},getLabels:function(){const{labelKey:e}=n;return p.value.map(((a,l)=>t.value[l][a][e]))},getSelectedIndex:function(){return p.value}}),(e,a)=>{const l=y(w("wd-loading"),i),n=O,s=j,o=D;return b(),k(n,{class:V(`wd-picker-view ${e.customClass}`),style:K(e.customStyle)},{default:x((()=>[e.loading?(b(),k(n,{key:0,class:"wd-picker-view__loading"},{default:x((()=>[_(l,{color:e.loadingColor},null,8,["color"])])),_:1})):C("",!0),_(n,{style:K(`height: ${e.columnsHeight-20}px;`)},{default:x((()=>[_(o,{"mask-class":"wd-picker-view__mask","indicator-class":"wd-picker-view__roller","indicator-style":`height: ${u.value}px;`,style:K(`height: ${e.columnsHeight-20}px;`),value:p.value,onChange:R,onPickstart:L,onPickend:Q},{default:x((()=>[(b(!0),$(S,null,I(t.value,((a,l)=>(b(),k(s,{key:l,class:"wd-picker-view-column"},{default:x((()=>[(b(!0),$(S,null,I(a,((a,t)=>(b(),k(n,{key:t,class:V(`wd-picker-view-column__item ${a.disabled?"wd-picker-view-column__item--disabled":""}  ${p.value[l]==t?"wd-picker-view-column__item--active":""}`),style:K(`line-height: ${u.value}px;`)},{default:x((()=>[P(E(a[e.labelKey]),1)])),_:2},1032,["class","style"])))),128))])),_:2},1024)))),128))])),_:1},8,["indicator-style","style","value"])])),_:1},8,["style"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-f9c90953"]]);export{A as _,T as f};
