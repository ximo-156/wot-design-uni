import{d as e,r as a,v as s,q as l,o as t,c as n,w as o,x as i,z as d,p as c,n as u,i as r,y as m,T as v,m as b,a5 as _,h as p,j as f,a as w,u as y,e as h,F as x,f as k,b as $,t as I,a3 as g}from"./index-3f88d4b2.js";import{g as C,z as N,i as T,h as V,m as j,G as S,p as z,o as H,n as G,U as X,b as q,v as M,O as W,c as A,w as D,k as E}from"./page-wraper.84820f31.js";import{_ as F,a as L}from"./wd-sticky-box.ba752d78.js";import{u as O}from"./useTouch.1cda033e.js";import{u as P}from"./useChildren.2d80d6cf.js";import{u as U}from"./useTranslate.23fa9f56.js";const B=Symbol("wd-tabs"),J={...C,modelValue:N(0),slidableNum:T(6),mapNum:T(10),sticky:V(!1),offsetTop:T(0),swipeable:V(!1),lineWidth:T(19),lineHeight:T(3),color:j(""),inactiveColor:j(""),animated:V(!1),duration:T(300)},K=q(e({name:"wd-tab",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...C,name:S,title:String,disabled:V(!1)},setup(e,{expose:v}){const b=e,_=a(!1),p=a(!1),{proxy:f}=m(),{parent:w,index:y}=z(B),h=s((()=>H(w)?w.state.activeIndex:0));function x(e,a){_.value=e,p.value=a}return l((()=>b.name),(e=>{!H(e)||G(e)||X(e)?w&&function(e){const{name:a}=b;if(null==a||""===a)return;w&&w.children.forEach((s=>{s.$.uid!==e.$.uid&&s.name===a&&console.error(`The tab's bound value: ${a} has been used`)}))}(f):console.error("[wot design] error(wd-tab): the type of name should be number or string")}),{deep:!0,immediate:!0}),l((()=>h.value),(e=>{e===y.value?x(!0,!0):x(_.value,!1)}),{deep:!0,immediate:!0}),v({setShow:x,painted:_}),(e,a)=>{const s=r;return t(),n(s,{class:u(`wd-tab ${e.customClass}`),style:i(e.customStyle)},{default:o((()=>[_.value?(t(),n(s,{key:0,class:"wd-tab__body",style:i(p.value?"":"display: none;")},{default:o((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])):c("",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-799df3ee"]]),Q=q(e({name:"wd-tabs",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:J,emits:["change","disabled","click","update:modelValue"],setup(e,{expose:C,emit:N}){const T=e,V=".wd-tabs__nav-item",j=".wd-tabs__nav-container",{translate:S}=U("tabs"),z=v({activeIndex:0}),q=a(""),J=a(!1),K=a(0),Q=a(!1),R=a(!1),{children:Y,linkChildren:Z}=P(B);Z({state:z});const{proxy:ee}=m(),ae=O(),se=s((()=>Y.map(((e,a)=>({disabled:e.disabled,title:e.title,name:H(e.name)?e.name:a}))))),le=s((()=>T.animated?M({left:-100*z.activeIndex+"%","transition-duration":T.duration+"ms","-webkit-transition-duration":T.duration+"ms"}):"")),te=W((function(e=0,a=!1,s=!0){0!==se.value.length&&(e=me(e),se.value[e].disabled||(z.activeIndex=e,s&&(oe(!1===a),ie()),function(){if(!R.value)return;se.value[z.activeIndex].name!==T.modelValue&&(N("change",{index:z.activeIndex,name:se.value[z.activeIndex].name}),N("update:modelValue",se.value[z.activeIndex].name))}()))}),100,{leading:!1});function ne(){J.value?(Q.value=!1,setTimeout((()=>{J.value=!1}),300)):(J.value=!0,setTimeout((()=>{Q.value=!0}),100))}function oe(e=!0){if(!R.value)return;const{lineWidth:a,lineHeight:s}=T;E(V,!0,ee).then((l=>{const t=l[z.activeIndex],n=a;let o=l.slice(0,z.activeIndex).reduce(((e,a)=>e+Number(a.width)),0);o+=(Number(t.width)-n)/2;const i=`\n            height: ${s}px;\n            width: ${n}px;\n            transform: translateX(${o}px);\n            ${e?"transition: width 300ms ease, transform 300ms ease;":""}\n          `;q.value!==i&&(q.value=i)}))}function ie(){R.value&&Promise.all([E(V,!0,ee),E(j,!1,ee)]).then((([e,a])=>{const s=e[z.activeIndex],l=e.slice(0,z.activeIndex).reduce(((e,a)=>e+a.width),0)-(a.width-Number(s.width))/2;l===K.value?K.value=l+Math.random()/1e4:K.value=l}))}function de(e){if(void 0===e)return;const{name:a,disabled:s}=se.value[e];s?N("disabled",{index:e,name:a}):(J.value&&ne(),te(e),N("click",{index:e,name:a}))}function ce(e){T.swipeable&&ae.touchStart(e)}function ue(e){T.swipeable&&ae.touchMove(e)}function re(){if(!T.swipeable)return;const{direction:e,deltaX:a,offsetX:s}=ae;"horizontal"===e.value&&s.value>=50&&(a.value>0&&0!==z.activeIndex?te(z.activeIndex-1):a.value<0&&z.activeIndex!==se.value.length-1&&(te(z.activeIndex+1),te(z.activeIndex+1)))}function me(e){if(G(e)&&e>=se.value.length&&(console.error("[wot design] warning(wd-tabs): the type of tabs' value is Number shouldn't be less than its children"),e=0),X(e)){const a=se.value.findIndex((a=>a.name===e));e=-1===a?0:a}return e}return l((()=>T.modelValue),(e=>{G(e)||X(e)||console.error("[wot design] error(wd-tabs): the type of value should be number or string"),""!==e&&H(e)||console.error("[wot design] error(wd-tabs): tabs's value cannot be '' null or undefined"),"number"==typeof e&&e<0&&console.error("[wot design] error(wd-tabs): tabs's value cannot be less than zero")}),{immediate:!0,deep:!0}),l((()=>T.modelValue),(e=>{const a=me(e);te(e,!1,a!==z.activeIndex)}),{immediate:!1,deep:!0}),l((()=>Y.length),(()=>{R.value&&_((()=>{te(T.modelValue)}))})),l((()=>T.slidableNum),(e=>{D(e,"slidableNum")})),l((()=>T.mapNum),(e=>{D(e,"mapNum")})),b((()=>{R.value=!0,_((()=>{te(T.modelValue,!0)}))})),C({setActive:te,scrollIntoView:ie,updateLineStyle:oe,children:Y}),(e,a)=>{const s=r,l=g,m=p(f("wd-icon"),A),v=p(f("wd-sticky"),F),b=p(f("wd-sticky-box"),L);return e.sticky?(t(),n(b,{key:0},{default:o((()=>[w(s,{class:u(`wd-tabs ${e.customClass} ${e.slidableNum<y(se).length?"is-slide":""} ${e.mapNum<y(se).length&&0!==e.mapNum?"is-map":""}`),style:i(e.customStyle)},{default:o((()=>[w(v,{"offset-top":e.offsetTop},{default:o((()=>[w(s,{class:"wd-tabs__nav wd-tabs__nav--sticky"},{default:o((()=>[w(s,{class:"wd-tabs__nav--wrap"},{default:o((()=>[w(l,{"scroll-x":e.slidableNum<y(se).length,"scroll-with-animation":"","scroll-left":K.value},{default:o((()=>[w(s,{class:"wd-tabs__nav-container"},{default:o((()=>[(t(!0),h(x,null,k(y(se),((a,l)=>(t(),n(s,{onClick:e=>de(l),key:l,class:u(`wd-tabs__nav-item  ${z.activeIndex===l?"is-active":""} ${a.disabled?"is-disabled":""}`),style:i(z.activeIndex===l?e.color?"color:"+e.color:"":e.inactiveColor?"color:"+e.inactiveColor:"")},{default:o((()=>[$(I(a.title),1)])),_:2},1032,["onClick","class","style"])))),128)),w(s,{class:"wd-tabs__line",style:i(q.value)},null,8,["style"])])),_:1})])),_:1},8,["scroll-x","scroll-left"])])),_:1}),e.mapNum<y(se).length&&0!==e.mapNum?(t(),n(s,{key:0,class:"wd-tabs__map"},{default:o((()=>[w(s,{class:u("wd-tabs__map-btn  "+(Q.value?"is-open":"")),onClick:ne},{default:o((()=>[w(s,{class:u("wd-tabs__map-arrow  "+(Q.value?"is-open":""))},{default:o((()=>[w(m,{name:"arrow-down"})])),_:1},8,["class"])])),_:1},8,["class"]),w(s,{class:"wd-tabs__map-header",style:i(`${J.value?"":"display:none;"}  ${Q.value?"opacity:1;":""}`)},{default:o((()=>[$(I(y(S)("all")),1)])),_:1},8,["style"]),w(s,{class:u("wd-tabs__map-body  "+(Q.value?"is-open":"")),style:i(J.value?"":"display:none")},{default:o((()=>[(t(!0),h(x,null,k(y(se),((a,l)=>(t(),n(s,{class:"wd-tabs__map-nav-item",key:l,onClick:e=>de(l)},{default:o((()=>[w(s,{class:u(`wd-tabs__map-nav-btn ${z.activeIndex===l?"is-active":""}  ${a.disabled?"is-disabled":""}`),style:i(z.activeIndex===l?e.color?"color:"+e.color+";border-color:"+e.color:"":e.inactiveColor?"color:"+e.inactiveColor:"")},{default:o((()=>[$(I(a.title),1)])),_:2},1032,["class","style"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class","style"])])),_:1})):c("",!0)])),_:1})])),_:1},8,["offset-top"]),w(s,{class:"wd-tabs__container",onTouchstart:ce,onTouchmove:ue,onTouchend:re,onTouchcancel:re},{default:o((()=>[w(s,{class:u(["wd-tabs__body",e.animated?"is-animated":""]),style:i(y(le))},{default:o((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3}),w(s,{class:"wd-tabs__mask",style:i(`${J.value?"":"display:none;"} ${Q.value?"opacity:1;":""}`),onClick:ne},null,8,["style"])])),_:3},8,["class","style"])])),_:3})):(t(),n(s,{key:1,class:u(`wd-tabs  ${e.customClass} ${e.slidableNum<y(se).length?"is-slide":""} ${e.mapNum<y(se).length&&0!==e.mapNum?"is-map":""}`)},{default:o((()=>[w(s,{class:"wd-tabs__nav"},{default:o((()=>[w(s,{class:"wd-tabs__nav--wrap"},{default:o((()=>[w(l,{"scroll-x":e.slidableNum<y(se).length,"scroll-with-animation":"","scroll-left":K.value},{default:o((()=>[w(s,{class:"wd-tabs__nav-container"},{default:o((()=>[(t(!0),h(x,null,k(y(se),((a,l)=>(t(),n(s,{onClick:e=>de(l),key:l,class:u(`wd-tabs__nav-item ${z.activeIndex===l?"is-active":""} ${a.disabled?"is-disabled":""}`),style:i(z.activeIndex===l?e.color?"color:"+e.color:"":e.inactiveColor?"color:"+e.inactiveColor:"")},{default:o((()=>[$(I(a.title),1)])),_:2},1032,["onClick","class","style"])))),128)),w(s,{class:"wd-tabs__line",style:i(q.value)},null,8,["style"])])),_:1})])),_:1},8,["scroll-x","scroll-left"])])),_:1}),e.mapNum<y(se).length&&0!==e.mapNum?(t(),n(s,{key:0,class:"wd-tabs__map"},{default:o((()=>[w(s,{class:"wd-tabs__map-btn",onClick:ne},{default:o((()=>[w(s,{class:u("wd-tabs__map-arrow "+(Q.value?"is-open":""))},{default:o((()=>[w(m,{name:"arrow-down"})])),_:1},8,["class"])])),_:1}),w(s,{class:"wd-tabs__map-header",style:i(`${J.value?"":"display:none;"}  ${Q.value?"opacity:1;":""}`)},{default:o((()=>[$(I(y(S)("all")),1)])),_:1},8,["style"]),w(s,{class:u("wd-tabs__map-body "+(Q.value?"is-open":"")),style:i(J.value?"":"display:none")},{default:o((()=>[(t(!0),h(x,null,k(y(se),((e,a)=>(t(),n(s,{class:"wd-tabs__map-nav-item",key:a,onClick:e=>de(a)},{default:o((()=>[w(s,{class:u(`wd-tabs__map-nav-btn ${z.activeIndex===a?"is-active":""}  ${e.disabled?"is-disabled":""}`)},{default:o((()=>[$(I(e.title),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class","style"])])),_:1})):c("",!0)])),_:1}),w(s,{class:"wd-tabs__container",onTouchstart:ce,onTouchmove:ue,onTouchend:re,onTouchcancel:re},{default:o((()=>[w(s,{class:u(["wd-tabs__body",e.animated?"is-animated":""]),style:i(y(le))},{default:o((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3}),w(s,{class:"wd-tabs__mask",style:i(`${J.value?"":"display:none;"}  ${Q.value?"opacity:1":""}`),onClick:ne},null,8,["style"])])),_:3},8,["class"]))}}}),[["__scopeId","data-v-9047ff62"]]);export{K as _,Q as a};
