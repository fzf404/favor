import{r as e,a as t,o as s,c as a,b as r,d as l,w as o,u as i,N as n,F as d,e as c,f as u,g as p,h as f,i as m,j as h,t as y,k as g,l as x,m as v,n as _,p as b,q as z,s as S,v as j,x as w}from"./vendor.a1ec52b2.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const F={style:{"margin-left":"1rem"}},L={class:"content"},N=f("作品推荐"),k=["id"],M={class:"sub-title"},q={setup(S){const j=e({});return fetch("data.json").then((e=>e.json())).then((e=>{j.value=e})),(e,S)=>{const w=t("n-grid-item");return s(),a(d,null,[r("div",F,[l(i(u),{affix:"",top:100,style:{"z-index":"1"},bound:600,"trigger-top":24},{default:o((()=>[l(i(n),{title:"首页",href:"#"}),(s(!0),a(d,null,c(j.value,((e,t)=>(s(),m(i(n),{title:t,href:"#"+t},null,8,["title","href"])))),256))])),_:1})]),r("div",L,[l(i(p),{class:"title"},{default:o((()=>[N])),_:1}),(s(!0),a(d,null,c(j.value,((e,t)=>(s(),a("div",{style:{"padding-top":"2rem"},id:t},[l(i(g),{class:"box-header",prefix:"bar",type:e.color},{default:o((()=>[l(i(h),{type:e.color},{default:o((()=>[f(y(t),1)])),_:2},1032,["type"]),r("span",M,y(e.description),1)])),_:2},1032,["type"]),l(i(z),{cols:"1 s:2 m:3 l:4 xl:4 2xl:5",responsive:"screen"},{default:o((()=>[(s(!0),a(d,null,c(e.list,(t=>(s(),m(w,{class:"card-normal"},{default:o((()=>[l(i(x),{class:"card-item",hoverable:""},{cover:o((()=>[l(i(v),{class:"card-img",src:t.image,height:"240"},null,8,["src"])])),header:o((()=>[l(i(_),{"line-clamp":"1"},{default:o((()=>[f(y(t.title),1)])),_:2},1024)])),"header-extra":o((()=>[f(y(t.author),1)])),default:o((()=>[l(i(h),{type:"info"},{default:o((()=>[f("介绍："+y(t.intro),1)])),_:2},1024)])),footer:o((()=>[l(i(_),{"line-clamp":"2",style:{"min-height":"50px"}},{default:o((()=>[l(i(h),{type:"success"},{default:o((()=>[f("短评："+y(t.comment),1)])),_:2},1024)])),_:2},1024)])),action:o((()=>[l(i(h),{code:"",style:{"min-width":"100%"}},{default:o((()=>[l(i(_),{"line-clamp":e.max,style:b("min-height:"+20*e.max+"px")},{default:o((()=>[f("“ "+y(t.content)+" ”",1)])),_:2},1032,["line-clamp","style"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:2},1024)],8,k)))),256))])],64)}}};w({setup(e){const t={common:{fontSize:"16px"},Card:{titleFontSizeMedium:"22px",paddingMedium:"6px 20px 8px"},Typography:{headerFontSize1:"46px",headerTextColor:"#555",headerFontSize2:"32px"}};return(e,a)=>(s(),m(i(j),{"theme-overrides":t},{default:o((()=>[l(i(S),{bottom:80,right:60,show:""}),l(q)])),_:1}))}}).mount("#app");
