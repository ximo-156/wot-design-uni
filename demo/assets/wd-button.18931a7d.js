import{d as e,r as a,v as s,q as o,h as t,j as n,o as i,c as r,w as l,a as d,x as p,u as c,p as g,z as u,n as m,i as f,V as h}from"./index-3f88d4b2.js";import{g as v,h as y,m as b,c as w,B as k,b as S}from"./page-wraper.84820f31.js";const _=S(e({name:"wd-button",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...v,plain:y(!1),round:y(!0),disabled:y(!1),hairline:y(!1),block:y(!1),type:b("primary"),size:b("medium"),icon:String,loading:y(!1),loadingColor:String,openType:String,formType:String,hoverStopPropagation:Boolean,lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,appParameter:String,showMessageCard:Boolean},emits:["click","getuserinfo","contact","getphonenumber","error","launchapp","opensetting","chooseavatar","agreeprivacyauthorization"],setup(e,{emit:v}){const y=e,b=(e="#4D80F0",a=!0)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><defs><linearGradient x1="100%" y1="0%" x2="0%" y2="0%" id="a"><stop stop-color="${a?e:"#fff"}" offset="0%" stop-opacity="0"/><stop stop-color="${a?e:"#fff"}" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M21 1c11.046 0 20 8.954 20 20s-8.954 20-20 20S1 32.046 1 21 9.954 1 21 1zm0 7C13.82 8 8 13.82 8 21s5.82 13 13 13 13-5.82 13-13S28.18 8 21 8z" fill="${a?"#fff":e}"/><path d="M4.599 21c0 9.044 7.332 16.376 16.376 16.376 9.045 0 16.376-7.332 16.376-16.376" stroke="url(#a)" stroke-width="3.5" stroke-linecap="round"/></g></svg>`,S=a(20),_=a(70),C=a(""),M=s((()=>`background-image: url(${C.value});`));function x(e){y.disabled||y.loading||v("click",e.detail)}function z(e){v("getuserinfo",e.detail)}function P(e){v("contact",e.detail)}function T(e){v("getphonenumber",e.detail)}function $(e){v("error",e.detail)}function G(e){v("launchapp",e.detail)}function B(e){v("opensetting",e.detail)}function F(e){v("chooseavatar",e.detail)}function I(e){v("agreeprivacyauthorization",e.detail)}return o((()=>y.loading),(()=>{!function(){const{loadingColor:e,type:a,plain:s}=y;let o=e;if(!o)switch(a){case"primary":o="#4D80F0";break;case"success":o="#34d19d";break;case"info":case"default":o="#333";break;case"warning":o="#f0883a";break;case"error":o="#fa4350"}const t=b(o,!s);C.value=`"data:image/svg+xml;base64,${k(t)}"`}()}),{deep:!0,immediate:!0}),(e,a)=>{const s=f,o=t(n("wd-icon"),w),v=h;return i(),r(v,{"hover-class":""+(e.disabled||e.loading?"":"wd-button--active"),style:p(e.customStyle),class:m(["wd-button","is-"+e.type,"is-"+e.size,e.plain?"is-plain":"",e.disabled?"is-disabled":"",e.round?"is-round":"",e.hairline?"is-hairline":"",e.block?"is-block":"",e.loading?"is-loading":"",e.customClass]),"hover-start-time":S.value,"hover-stay-time":_.value,"open-type":e.openType,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"app-parameter":e.appParameter,"show-message-card":e.showMessageCard,"session-from":e.sessionFrom,lang:e.lang,"hover-stop-propagation":e.hoverStopPropagation,"form-type":e.formType,onClick:x,onGetuserinfo:z,onContact:P,onGetphonenumber:T,onError:$,onLaunchapp:G,onOpensetting:B,onChooseavatar:F,onAgreeprivacyauthorization:I},{default:l((()=>[e.loading?(i(),r(s,{key:0,class:"wd-button__loading"},{default:l((()=>[d(s,{class:"wd-button__loading-svg",style:p(c(M))},null,8,["style"])])),_:1})):e.icon?(i(),r(o,{key:1,"custom-class":"wd-button__icon",name:e.icon},null,8,["name"])):g("",!0),d(s,{class:"wd-button__text"},{default:l((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["hover-class","style","class","hover-start-time","hover-stay-time","open-type","send-message-title","send-message-path","send-message-img","app-parameter","show-message-card","session-from","lang","hover-stop-propagation","form-type"])}}}),[["__scopeId","data-v-5911ed32"]]);export{_};
