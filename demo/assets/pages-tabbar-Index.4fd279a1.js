import{g as e,z as a,h as t,m as l,i as o,G as s,p as i,v as n,o as d,c as r,b as u,y as c,k as m,d as p,e as v,a as h}from"./page-wraper.84820f31.js";import{d as f,v as b,h as _,j as g,o as V,c as x,w as y,a as w,a9 as C,z as I,u as $,p as j,x as z,n as S,b as U,t as k,g as B,i as A,r as G,q,m as D,a5 as H,y as N}from"./index-3f88d4b2.js";import{_ as P}from"./wd-badge.75995930.js";import{u as O}from"./useChildren.2d80d6cf.js";import{_ as E}from"./demo-block.5375f9a7.js";import{_ as F}from"./wd-img.195f4b51.js";const J=Symbol("wd-tabbar"),K={...e,modelValue:a(0),fixed:t(!1),bordered:t(!0),safeAreaInsetBottom:t(!1),shape:l("default"),activeColor:String,inactiveColor:String,placeholder:t(!1),zIndex:o(99)},L=u(f({name:"wd-tabbar-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,title:String,name:s,icon:String,value:{type:[Number,String,null],default:null},isDot:Boolean,max:o(99),badgeProps:Object},setup(e){const a=e,{parent:t,index:l}=i(J),o=b((()=>{const e={};return t&&(s.value&&t.props.activeColor&&(e.color=t.props.activeColor),!s.value&&t.props.inactiveColor&&(e.color=t.props.inactiveColor)),`${n(e)}`})),s=b((()=>{const e=d(a.name)?a.name:l.value;return!!t&&t.props.modelValue===e}));function u(){const e=d(a.name)?a.name:l.value;t&&t.setChange({name:e})}return(e,a)=>{const t=_(g("wd-icon"),r),l=B,i=A,n=_(g("wd-badge"),P);return V(),x(i,{class:S(`wd-tabbar-item ${e.customClass}`),style:z(e.customStyle),onClick:u},{default:y((()=>[w(n,C({modelValue:e.value},e.badgeProps,{"is-dot":e.isDot,max:e.max}),{default:y((()=>[w(i,{class:"wd-tabbar-item__body"},{default:y((()=>[I(e.$slots,"icon",{active:$(s)},void 0,!0),!e.$slots.icon&&e.icon?(V(),x(t,{key:0,name:e.icon,size:"20px","custom-style":$(o),"custom-class":$(s)?"is-active":"is-inactive"},null,8,["name","custom-style","custom-class"])):j("",!0),e.title?(V(),x(l,{key:1,style:z($(o)),class:S("wd-tabbar-item__body-title "+($(s)?"is-active":"is-inactive"))},{default:y((()=>[U(k(e.title),1)])),_:1},8,["style","class"])):j("",!0)])),_:3})])),_:3},16,["modelValue","is-dot","max"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-235f5ab1"]]),M=u(f({name:"wd-tabbar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:K,emits:["change","update:modelValue"],setup(e,{emit:a}){const t=e,l=G(""),{proxy:o}=N(),{linkChildren:s}=O(J);s({props:t,setChange:function(e){let t=e.name;a("update:modelValue",t),a("change",{value:t})}});const i=b((()=>{const e={};return d(t.zIndex)&&(e["z-index"]=t.zIndex),`${n(e)};${t.customStyle}`}));function r(){t.fixed&&t.placeholder&&m(".wd-tabbar",!1,o).then((e=>{l.value=Number(e.height)}))}return q([()=>t.fixed,()=>t.placeholder],(()=>{r()}),{deep:!0,immediate:!1}),D((()=>{t.fixed&&t.placeholder&&H((()=>{r()}))})),(e,a)=>{const t=A;return V(),x(t,{class:S({"wd-tabbar__placeholder":e.fixed&&e.placeholder&&e.safeAreaInsetBottom&&"round"===e.shape}),style:z({height:$(c)(l.value)})},{default:y((()=>[w(t,{class:S(`wd-tabbar wd-tabbar--${e.shape} ${e.customClass} ${e.fixed?"is-fixed":""} ${e.safeAreaInsetBottom?"is-safe":""} ${e.bordered?"is-border":""}`),style:z($(i))},{default:y((()=>[I(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-2ae6eb08"]]),Q=u(f({__name:"Index",setup(e){const{show:a}=p(),t=G(1),l=G("home"),o=G(2),s=G(2),i=G(1),n=G(1),d=G(1),r=G(1);function u(e){console.log(e)}function c({value:e}){a(`选中标签:${e}`)}return(e,a)=>{const m=_(g("wd-toast"),v),p=_(g("wd-tabbar-item"),L),f=_(g("wd-tabbar"),M),b=_(g("demo-block"),E),C=_(g("wd-img"),F),I=_(g("page-wraper"),h);return V(),x(I,{safeAreaInsetBottom:!1},{default:y((()=>[w(m),w(b,{hor:"0",title:"基础用法",transparent:""},{default:y((()=>[w(f,{bordered:"",onChange:u,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},{default:y((()=>[w(p,{title:"首页",icon:"home"}),w(p,{title:"分类",icon:"cart"}),w(p,{title:"我的",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),w(b,{hor:"0",title:"通过名称匹配",transparent:""},{default:y((()=>[w(f,{bordered:"",onChange:u,modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e)},{default:y((()=>[w(p,{name:"home",title:"首页",icon:"home"}),w(p,{name:"cart",title:"分类",icon:"cart"}),w(p,{name:"setting",title:"设置",icon:"setting"}),w(p,{name:"user",title:"我的",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),w(b,{hor:"0",title:"徽标提示",transparent:""},{default:y((()=>[w(f,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e),onChange:u},{default:y((()=>[w(p,{"is-dot":"",value:2,title:"点状",icon:"home"}),w(p,{value:2,icon:"cart",title:"分类"}),w(p,{value:30,title:"我的",icon:"user"}),w(p,{value:200,title:"最大值",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),w(b,{hor:"0",title:"悬浮标签栏",transparent:""},{default:y((()=>[w(f,{shape:"round",modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=e=>s.value=e),onChange:u},{default:y((()=>[w(p,{title:"首页","is-dot":"",value:2,icon:"home"}),w(p,{title:"分类",value:2,icon:"cart"}),w(p,{title:"相册",value:30,icon:"photo"}),w(p,{title:"我的",value:200,icon:"user"})])),_:1},8,["modelValue"])])),_:1}),w(b,{hor:"0",title:"自定义图标",transparent:""},{default:y((()=>[w(f,{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=e=>i.value=e),onChange:u},{default:y((()=>[w(p,{value:2,title:"首页",icon:"home"}),w(p,{value:2,icon:"cart",title:"分类"},{icon:y((()=>[w(C,{round:"",height:"40rpx",width:"40rpx",src:"https://img.yzcdn.cn/vant/cat.jpeg"})])),_:1}),w(p,{value:3,title:"我的",icon:"user"})])),_:1},8,["modelValue"])])),_:1}),w(b,{hor:"0",title:"自定义颜色",transparent:""},{default:y((()=>[w(f,{modelValue:n.value,"onUpdate:modelValue":a[5]||(a[5]=e=>n.value=e),onChange:u,"active-color":"#ee0a24","inactive-color":"#7d7e80"},{default:y((()=>[w(p,{"is-dot":"",value:2,title:"点状",icon:"home"}),w(p,{value:2,icon:"cart",title:"分类"}),w(p,{value:30,title:"我的",icon:"user"}),w(p,{value:200,title:"最大值",icon:"photo"}),w(p,{value:10,title:"客服",icon:"chat"})])),_:1},8,["modelValue"])])),_:1}),w(b,{hor:"0",title:"监听切换事件",transparent:""},{default:y((()=>[w(f,{modelValue:d.value,"onUpdate:modelValue":a[6]||(a[6]=e=>d.value=e),onChange:c,"active-color":"#ee0a24","inactive-color":"#7d7e80"},{default:y((()=>[w(p,{title:"首页",icon:"home"}),w(p,{title:"分类",icon:"cart"}),w(p,{title:"我的",icon:"user"}),w(p,{title:"相册",icon:"photo"}),w(p,{title:"客服",icon:"chat"})])),_:1},8,["modelValue"])])),_:1}),w(b,{hor:"0",title:"固定底部",transparent:""},{default:y((()=>[w(f,{fixed:"",shape:"round",modelValue:r.value,"onUpdate:modelValue":a[7]||(a[7]=e=>r.value=e),onChange:u,bordered:"",safeAreaInsetBottom:"",placeholder:""},{default:y((()=>[w(p,{value:2,"is-dot":"",title:"首页",icon:"home"}),w(p,{title:"分类",icon:"cart"}),w(p,{title:"我的",icon:"user"}),w(p,{value:200,title:"相册",icon:"photo"}),w(p,{value:10,title:"客服",icon:"chat"})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-a0dad86c"]]);export{Q as default};
