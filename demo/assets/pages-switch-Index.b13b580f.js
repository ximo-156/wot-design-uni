import{u as e,_ as l}from"./wd-message-box.fb99e38f.js";import{d as a,r as o,o as u,c as t,w as n,a as d,b as s,t as i,h as m,j as c,i as v}from"./index-3f88d4b2.js";import{f as r,a as f,b as p}from"./page-wraper.84820f31.js";import{_ as V}from"./demo-block.5375f9a7.js";import"./wd-input.bd600d9f.js";import"./useTranslate.23fa9f56.js";import"./wd-button.18931a7d.js";const g=p(a({__name:"Index",setup(a){const p=o(!0),g=o("沃特"),_=o(!0),b=o(!0),h=o(!0),w=o(!1),j=o(!1),U=e(),x=({value:e,resolve:l})=>{U.confirm("是否切换开关").then((()=>{l(!0)})).catch((()=>{l(!1)}))};function C({value:e}){console.log(e)}function k({value:e}){console.log(e)}function y({value:e}){console.log(e)}function z({value:e}){console.log(e)}function I({value:e}){console.log(e)}return(e,a)=>{const o=m(c("wd-message-box"),l),U=m(c("wd-switch"),r),T=m(c("demo-block"),V),q=v,A=m(c("page-wraper"),f);return u(),t(A,null,{default:n((()=>[d(o),d(q,null,{default:n((()=>[d(T,{title:"基本用法"},{default:n((()=>[d(U,{modelValue:p.value,"onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),onChange:C},null,8,["modelValue"])])),_:1}),d(T,{title:"修改值 active-value 、 inactive-value"},{default:n((()=>[d(q,{style:{"margin-bottom":"10px"}},{default:n((()=>[s(i(g.value),1)])),_:1}),d(U,{modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),"active-value":"沃特","inactive-value":"商家后台",onChange:k},null,8,["modelValue"])])),_:1}),d(T,{title:"自定义颜色 active-color 、 inactive-color"},{default:n((()=>[d(U,{modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),"active-color":"#13ce66","inactive-color":"#f00",onChange:y},null,8,["modelValue"])])),_:1}),d(T,{title:"自定义大小"},{default:n((()=>[d(U,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),size:24,onChange:z},null,8,["modelValue"])])),_:1}),d(T,{title:"选中禁用"},{default:n((()=>[d(U,{modelValue:h.value,"onUpdate:modelValue":a[4]||(a[4]=e=>h.value=e),disabled:""},null,8,["modelValue"])])),_:1}),d(T,{title:"非选中禁用"},{default:n((()=>[d(U,{modelValue:w.value,"onUpdate:modelValue":a[5]||(a[5]=e=>w.value=e),disabled:""},null,8,["modelValue"])])),_:1}),d(T,{title:"before-change 修改前钩子函数"},{default:n((()=>[d(U,{modelValue:j.value,"onUpdate:modelValue":a[6]||(a[6]=e=>j.value=e),"before-change":x,onChange:I},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-e43e34c8"]]);export{g as default};
