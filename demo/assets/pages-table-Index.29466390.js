import{d as e,N as a,v as l,m as o,o as t,c as r,w as s,e as d,F as i,f as n,u as c,n as p,x as h,z as u,b,t as g,g as f,i as m,T as w,r as _,S as x,q as y,h as v,j as $,a as j,p as k,a3 as C}from"./index-3f88d4b2.js";import{A as H,z as S,h as L,m as I,o as R,y as M,v as D,a4 as E,b as T,g as V,i as z,j as A,x as F,O as G,R as O,a as U}from"./page-wraper.84820f31.js";import{_ as q}from"./wd-sort-button.d1070c9a.js";import{u as B}from"./useTranslate.23fa9f56.js";import{_ as N}from"./demo-block.5375f9a7.js";const J=T(e({name:"wd-table-col",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{prop:H(String),label:H(String),width:S(100),sortable:L(!1),fixed:L(!1),align:I("left")},setup(e){const w=e,_=a("wdTable",{data:[]}),x=l((()=>_.stripe||!1)),y=l((()=>_.border||!1)),v=l((()=>_.ellipsis||!1)),$=l((()=>{let e=!1;if(w.fixed&&R(_.columns)){const a=_.columns.filter((e=>e.fixed));a.length&&a[a.length-1].prop===w.prop&&(e=!0)}return e})),j=l((()=>{const e={};if(R(w.width)&&(e.width=M(w.width)),w.fixed){const a=_.columns.findIndex((e=>e.prop===w.prop));if(a>0){let l="";_.columns.forEach(((e,o)=>{o<a&&(l=l?`${l} + ${M(e.width)}`:M(e.width))})),e.left=`calc(${l})`}else e.left=0}return D(e)})),k=l((()=>{const e=_.rowHeight||"80rpx",a={};if(R(e)&&(a.height=M(e)),w.fixed){const e=_.columns.findIndex((e=>e.prop===w.prop));if(e>0){let l="";_.columns.forEach(((a,o)=>{o<e&&(l=l?`${l} + ${M(a.width)}`:M(a.width))})),a.left=`calc(${l})`}else a.left=0}return D(a)})),C=l((()=>e=>_.data[e]||{})),H=l((()=>_.data.map((e=>e[w.prop]))));return o((()=>{_.setColumns&&_.setColumns({prop:w.prop,label:w.label,width:w.width,sortable:w.sortable,fixed:w.fixed,align:w.align,sortDirection:0})})),(e,a)=>{const l=f,o=m;return t(),r(o,{class:p(`wd-table-col ${e.fixed?"wd-table-col--fixed":""} ${c($)&&c(R)(c(_).scrollLeft)&&c(_).scrollLeft?"is-shadow":""}`),style:h(c(j))},{default:s((()=>[(t(!0),d(i,null,n(c(H),((a,d)=>(t(),r(o,{class:p(`wd-table__cell ${c(x)&&c(E)(d)?"is-stripe":""} ${c(y)?"is-border":""} is-${e.align}`),key:d,style:h(c(k)),onClick:e=>function(e){_.setRowClick&&_.setRowClick(e)}(d)},{default:s((()=>[e.$slots.value?u(e.$slots,"value",{key:0,row:c(C)(d),index:d},void 0,!0):(t(),r(l,{key:1,class:p("wd-table__value "+(c(v)?"is-ellipsis":""))},{default:s((()=>[b(g(a),1)])),_:2},1032,["class"]))])),_:2},1032,["class","style","onClick"])))),128))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-06890505"]]),K=T(e({name:"wd-table",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...V,data:H(Array),border:L(!0),stripe:L(!0),height:I("80vh"),rowHeight:z(50),showHeader:L(!0),ellipsis:L(!0),index:{type:[Object,Boolean],default:!1}},emits:["sort-method","row-click"],setup(e,{emit:a}){const o=e,{translate:H}=B("tableCol"),S=w({data:o.data,stripe:o.stripe,border:o.border,height:o.height,rowHeight:o.rowHeight,showHeader:o.showHeader,ellipsis:o.ellipsis,scrollLeft:0,columns:[],setRowClick:function(e){a("row-click",{rowIndex:e})},setColumns:function(e){e.prop===L?S.columns=O([e,...S.columns]):S.columns=O([...S.columns,e])}}),L=A(),I=_({prop:L,label:H("indexLabel"),width:"100rpx",sortable:!1,fixed:!1,align:"left",...F(o.index)?o.index:{}}),E=G((function(e){if(!o.showHeader)return;S.scrollLeft=e.detail.scrollLeft}),100,{leading:!1});x("wdTable",S),y((()=>o.data),(e=>{S.data=e}),{deep:!0}),y((()=>o.stripe),(e=>{S.stripe=e}),{deep:!0}),y((()=>o.border),(e=>{S.border=e}),{deep:!0}),y((()=>o.height),(e=>{S.height=e}),{deep:!0}),y((()=>o.rowHeight),(e=>{S.rowHeight=e}),{deep:!0}),y((()=>o.showHeader),(e=>{S.showHeader=e}),{deep:!0}),y((()=>o.ellipsis),(e=>{S.ellipsis=e}),{deep:!0});const T=l((()=>{const e={};return R(o.height)&&(e["max-height"]=M(o.height)),`${D(e)};${o.customStyle}`})),V=l((()=>{const e={display:"flex"};let a="";return S.columns.forEach((e=>{a=a?`${a} + ${M(e.width)}`:M(e.width)})),e.width=`calc(${a})`,D(e)})),z=l((()=>{const e={};return R(o.height)&&(e.height=R(o.rowHeight)?`calc(${o.data.length} * ${M(o.rowHeight)})`:`calc(${o.data.length} * 50px)`),`${D(e)};`}));function U(e){let a=!1;if(e.fixed&&R(S.columns)){const l=S.columns.filter((e=>e.fixed));l.length&&l[l.length-1].prop===e.prop&&(a=!0)}return a}function N(e){const a={};if(R(S.columns[e].width)&&(a.width=M(S.columns[e].width)),S.columns[e].fixed)if(e>0){let l="";S.columns.forEach(((a,o)=>{o<e&&(l=l?`${l} + ${M(a.width)}`:M(a.width))})),a.left=`calc(${l})`}else a.left=0;return D(a)}return(e,l)=>{const o=v($("wd-sort-button"),q),w=f,_=m,x=C;return t(),r(_,{class:p(`wd-table ${e.border?"is-border":""} ${e.customClass}`),style:h(c(T))},{default:s((()=>[e.showHeader?(t(),r(x,{key:0,"enable-flex":!0,throttle:!1,scrollLeft:S.scrollLeft,"scroll-x":!0,class:"wd-table__header",onScroll:c(E)},{default:s((()=>[j(_,{id:"table-header",class:"wd-table__content",style:h([c(V),{position:"sticky",top:"0","z-index":"2"}])},{default:s((()=>[(t(!0),d(i,null,n(S.columns,((l,d)=>(t(),r(_,{class:p(`wd-table__cell ${e.border?"is-border":""} ${l.fixed?"is-fixed":""} ${e.stripe?"is-stripe":""} is-${l.align} ${U(l)&&S.scrollLeft?"is-shadow":""}`),style:h(N(d)),key:d},{default:s((()=>[l.sortable?(t(),r(o,{key:0,modelValue:l.sortDirection,"onUpdate:modelValue":e=>l.sortDirection=e,"allow-reset":"",line:!1,title:l.label,onChange:({value:e})=>function(e,l){S.columns[l].sortDirection=e,S.columns.forEach(((e,a)=>{l!=a&&(e.sortDirection=0)})),a("sort-method",S.columns[l])}(e,d)},null,8,["modelValue","onUpdate:modelValue","title","onChange"])):(t(),r(w,{key:1,class:p("wd-table__value "+(e.ellipsis?"is-ellipsis":""))},{default:s((()=>[b(g(l.label),1)])),_:2},1032,["class"]))])),_:2},1032,["class","style"])))),128))])),_:1},8,["style"])])),_:1},8,["scrollLeft","onScroll"])):k("",!0),j(x,{class:"wd-table__body",style:h(c(z)),"enable-flex":!0,throttle:!1,"scroll-x":!0,onScroll:c(E),scrollLeft:S.scrollLeft},{default:s((()=>[j(_,{id:"table-body",class:"wd-table__content",style:h(c(V))},{default:s((()=>[!1!==e.index?(t(),r(J,{key:0,prop:I.value.prop,label:I.value.label,width:I.value.width,sortable:I.value.sortable,fixed:I.value.fixed,align:I.value.align},{value:s((({index:e})=>[j(w,null,{default:s((()=>[b(g(e+1),1)])),_:2},1024)])),_:1},8,["prop","label","width","sortable","fixed","align"])):k("",!0),u(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["style","onScroll","scrollLeft"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-9567cbf4"]]),P=T(e({__name:"Index",setup(e){const a=_([{name:"关羽",school:"武汉市阳逻绿豆学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:66,compare:"48%",hobby:"颜良文丑，以吾观之，如土鸡瓦犬耳。"},{name:"刘备",school:"武汉市阳逻编织学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:68,compare:"21%",hobby:"我得空明，如鱼得水也"},{name:"赵云",school:"武汉市阳逻妇幼保健学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:91,compare:"12%",hobby:"子龙，子龙，世无双"},{name:"赵云",school:"武汉市阳逻妇幼保健学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:91,compare:"12%",hobby:"子龙，子龙，世无双"},{name:"孔明",school:"武汉市阳逻卧龙学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:99,compare:"18%",hobby:"兴汉讨贼，克复中原"},{name:"赵云",school:"武汉市阳逻妇幼保健学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:36,compare:"48%",hobby:"子龙，子龙，世无双"},{name:"关羽",school:"武汉市阳逻绿豆学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:66,compare:"48%",hobby:"颜良文丑，以吾观之，如土鸡瓦犬耳。"},{name:"刘备",school:"武汉市阳逻编织学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:68,compare:"21%",hobby:"我得空明，如鱼得水也"},{name:"赵云",school:"武汉市阳逻妇幼保健学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:91,compare:"12%",hobby:"子龙，子龙，世无双"},{name:"孔明",school:"武汉市阳逻卧龙学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:99,compare:"18%",hobby:"兴汉讨贼，克复中原"},{name:"赵云",school:"武汉市阳逻妇幼保健学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:36,compare:"48%",hobby:"子龙，子龙，世无双"},{name:"关羽",school:"武汉市阳逻绿豆学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:66,compare:"48%",hobby:"颜良文丑，以吾观之，如土鸡瓦犬耳。"},{name:"刘备",school:"武汉市阳逻编织学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:68,compare:"21%",hobby:"我得空明，如鱼得水也"},{name:"赵云",school:"武汉市阳逻妇幼保健学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:91,compare:"12%",hobby:"子龙，子龙，世无双"},{name:"孔明",school:"武汉市阳逻卧龙学院",major:"计算机科学与技术专业",gender:"男",graduation:"2022年1月12日",grade:99,compare:"18%",hobby:"兴汉讨贼，克复中原"}]);function l(){a.value=a.value.reverse()}function o({rowIndex:e}){console.log(e)}return(e,d)=>{const i=v($("wd-table-col"),J),n=v($("wd-table"),K),c=v($("demo-block"),N),p=f,h=m,u=v($("page-wraper"),U);return t(),r(u,null,{default:s((()=>[j(c,{title:"基本用法"},{default:s((()=>[j(n,{data:a.value,onSortMethod:l,height:"328px",onRowClick:o},{default:s((()=>[j(i,{prop:"name",label:"姓名",align:"center",width:"50%"}),j(i,{prop:"grade",label:"分数",align:"center",width:"50%"})])),_:1},8,["data"])])),_:1}),j(c,{title:"无边框"},{default:s((()=>[j(n,{data:a.value,onSortMethod:l,height:"328px",border:!1,onRowClick:o},{default:s((()=>[j(i,{prop:"name",label:"姓名",align:"center",width:"50%"}),j(i,{prop:"grade",label:"分数",align:"center",width:"50%"})])),_:1},8,["data"])])),_:1}),j(c,{title:"无斑马纹"},{default:s((()=>[j(n,{data:a.value,onSortMethod:l,height:"328px",stripe:!1,onRowClick:o},{default:s((()=>[j(i,{prop:"name",label:"姓名",align:"center",width:"50%"}),j(i,{prop:"grade",label:"分数",align:"center",width:"50%"})])),_:1},8,["data"])])),_:1}),j(c,{title:"不展示表头"},{default:s((()=>[j(n,{data:a.value,onSortMethod:l,height:"328px","show-header":!1,onRowClick:o},{default:s((()=>[j(i,{prop:"name",label:"姓名",align:"center",width:"50%"}),j(i,{prop:"grade",label:"分数",align:"center",width:"50%"})])),_:1},8,["data"])])),_:1}),j(c,{title:"固定列"},{default:s((()=>[j(n,{data:a.value,onSortMethod:l,onRowClick:o,height:"328px"},{default:s((()=>[j(i,{prop:"name",label:"姓名",fixed:"",sortable:!0,align:"center"}),j(i,{prop:"grade",label:"分数",fixed:"",sortable:!0,align:"center"}),j(i,{prop:"hobby",label:"一言以蔽之",sortable:!0,width:160}),j(i,{prop:"school",label:"求学之所",width:180}),j(i,{prop:"major",label:"专业"}),j(i,{prop:"gender",label:"性别"})])),_:1},8,["data"])])),_:1}),j(c,{title:"显示索引"},{default:s((()=>[j(n,{data:a.value,height:"328px",index:{align:"center"}},{default:s((()=>[j(i,{prop:"name",label:"姓名",sortable:!0,align:"center"}),j(i,{prop:"grade",label:"分数",sortable:!0,align:"center"}),j(i,{prop:"hobby",label:"一言以蔽之",sortable:!0,width:160}),j(i,{prop:"school",label:"求学之所",width:180}),j(i,{prop:"major",label:"专业"}),j(i,{prop:"gender",label:"性别"})])),_:1},8,["data"])])),_:1}),j(c,{title:"自定义列模板"},{default:s((()=>[j(n,{data:a.value,onSortMethod:l,onRowClick:o,height:"328px"},{default:s((()=>[j(i,{prop:"name",label:"姓名",fixed:"",sortable:!0,align:"center"}),j(i,{prop:"grade",label:"分数",fixed:"",sortable:!0,align:"center"},{value:s((({row:e})=>[j(h,{class:"custom-class"},{default:s((()=>[j(p,null,{default:s((()=>[b(g(e.grade),1)])),_:2},1024),j(p,null,{default:s((()=>[b("同比"+g(e.compare),1)])),_:2},1024)])),_:2},1024)])),_:1}),j(i,{prop:"hobby",label:"一言以蔽之",sortable:!0,width:160}),j(i,{prop:"school",label:"求学之所",width:180}),j(i,{prop:"major",label:"专业"}),j(i,{prop:"gender",label:"性别"}),j(i,{prop:"graduation",label:"学成时间"})])),_:1},8,["data"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-252a9af2"]]);export{P as default};
