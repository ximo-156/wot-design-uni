import{g as e,m as a,h as s,A as t,K as l,i as n,c as o,t as c,r as i,l as d,b as u}from"./page-wraper.84820f31.js";import{d as r,r as m,q as p,h as _,j as f,o as h,c as w,w as k,a as y,n as g,x,b,t as C,p as v,e as z,F as I,f as V,z as $,i as A,V as M,l as O}from"./index-3f88d4b2.js";const j=u(r({name:"wd-action-sheet",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,customHeaderClass:a(""),modelValue:{...s(!1),...t(Boolean)},actions:l(),panels:l(),title:String,cancelText:String,closeOnClickAction:s(!0),closeOnClickModal:s(!0),duration:n(200),zIndex:n(10),lazyRender:s(!0),safeAreaInsetBottom:s(!0)},emits:["select","click-modal","cancel","closed","close","open","opened","update:modelValue"],setup(e,{emit:a}){const s=e,t=m([]),l=m(!1);function n(){return s.panels.length&&!d(s.panels[0])}function u(e,t,l){"action"===t?a("select",{item:s.actions[e],index:e}):n()?a("select",{item:s.panels[Number(l)],index:l}):a("select",{item:s.panels[e][Number(l)],rowIndex:e,colIndex:l}),B()}function r(){a("click-modal"),s.closeOnClickModal&&B()}function j(){a("cancel"),B()}function B(){a("update:modelValue",!1),a("close")}function H(){a("open")}function S(){a("opened")}function T(){a("closed")}return p((()=>s.panels),(function(){t.value=n()?[s.panels]:s.panels}),{deep:!0,immediate:!0}),p((()=>s.modelValue),(e=>{l.value=e}),{deep:!0,immediate:!0}),(e,a)=>{const s=_(f("wd-icon"),o),n=A,d=_(f("wd-loading"),c),m=M,p=O,E=_(f("wd-popup"),i);return h(),w(n,null,{default:k((()=>[y(E,{"custom-class":"wd-action-sheet__popup","custom-style":""+(e.actions&&e.actions.length||e.panels&&e.panels.length?"background: transparent;":""),modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),duration:e.duration,position:"bottom","close-on-click-modal":e.closeOnClickModal,"safe-area-inset-bottom":e.safeAreaInsetBottom,"lazy-render":e.lazyRender,onEnter:H,onClose:B,onAfterEnter:S,onAfterLeave:T,onClickModal:r,"z-index":e.zIndex},{default:k((()=>[y(n,{class:g(`wd-action-sheet ${e.customClass}`),style:x(`${e.actions&&e.actions.length||e.panels&&e.panels.length?"margin: 0 10px calc(var(--window-bottom) + 10px) 10px; border-radius: 16px;":"margin-bottom: var(--window-bottom);"} ${e.customStyle}`)},{default:k((()=>[e.title?(h(),w(n,{key:0,class:g(`wd-action-sheet__header ${e.customHeaderClass}`)},{default:k((()=>[b(C(e.title)+" ",1),y(s,{"custom-class":"wd-action-sheet__close",name:"add",onClick:B})])),_:1},8,["class"])):v("",!0),e.actions&&e.actions.length?(h(),w(n,{key:1,class:"wd-action-sheet__actions"},{default:k((()=>[(h(!0),z(I,null,V(e.actions,((e,a)=>(h(),w(m,{key:a,class:g(`wd-action-sheet__action ${e.disabled?"wd-action-sheet__action--disabled":""}  ${e.loading?"wd-action-sheet__action--loading":""}`),style:x(`color: ${e.color}`),onClick:e=>u(a,"action")},{default:k((()=>[e.loading?(h(),w(d,{key:0,size:"20px"})):(h(),w(n,{key:1,class:"wd-action-sheet__name"},{default:k((()=>[b(C(e.name),1)])),_:2},1024)),!e.loading&&e.subname?(h(),w(n,{key:2,class:"wd-action-sheet__subname"},{default:k((()=>[b(C(e.subname),1)])),_:2},1024)):v("",!0)])),_:2},1032,["class","style","onClick"])))),128))])),_:1})):v("",!0),t.value&&t.value.length?(h(),w(n,{key:2},{default:k((()=>[(h(!0),z(I,null,V(t.value,((e,a)=>(h(),w(n,{key:a,class:"wd-action-sheet__panels"},{default:k((()=>[y(n,{class:"wd-action-sheet__panels-content"},{default:k((()=>[(h(!0),z(I,null,V(e,((e,s)=>(h(),w(n,{key:s,class:"wd-action-sheet__panel",onClick:e=>u(a,"panels",s)},{default:k((()=>[y(p,{class:"wd-action-sheet__panel-img",src:e.iconUrl},null,8,["src"]),y(n,{class:"wd-action-sheet__panel-title"},{default:k((()=>[b(C(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})):v("",!0),$(e.$slots,"default",{},void 0,!0),e.cancelText?(h(),w(m,{key:3,class:"wd-action-sheet__cancel",onClick:j},{default:k((()=>[b(C(e.cancelText),1)])),_:1})):v("",!0)])),_:3},8,["class","style"])])),_:3},8,["custom-style","modelValue","duration","close-on-click-modal","safe-area-inset-bottom","lazy-render","z-index"])])),_:3})}}}),[["__scopeId","data-v-a3ed2655"]]);export{j as _};
