import{p as z,b as N,m as $,d as E,C as K,e as M,a as q,f as U,g as Y,l as O,h as W,t as H,i as X,j as G,k as J,s as Q,aq as Z,o as g,F as ee,u as te,c as a,v as ae,ad as se,a4 as j,a3 as oe,af as re,a5 as o,a6 as k,a7 as s,ar as le,ab as C,ap as w,as as ne,am as R,V as ce,ah as r,an as ue,X as P,al as ie,ac as L,ae as de,x as p,A as me,at as T,ag as f,Y as v,aj as b,au as F,av as A,aw as he,ax as _e}from"./index-c47d6e72.js";import{g as ge,_ as pe}from"./index-1f1d1b91.js";import{V as x}from"./VRow-2ff1e331.js";import{a as fe,V}from"./VCol-2a3c0531.js";import{V as ve,a as ke}from"./VCarouselItem-3ad7ea0e.js";import{V as S}from"./VDivider-a22baf46.js";import"./VWindowItem-b8fe870a.js";import"./ssrBoot-4b4cbc15.js";const Ce=z({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...N(),...$(),...E(),...K(),...M(),...q({tag:"footer"}),...U()},"VFooter"),ye=Y()({name:"VFooter",props:Ce(),setup(e,i){let{slots:d}=i;const{themeClasses:u}=O(e),{backgroundColorClasses:m,backgroundColorStyles:h}=W(H(e,"color")),{borderClasses:_}=X(e),{elevationClasses:l}=G(e),{roundedClasses:n}=J(e),t=Q(32),{resizeRef:c}=Z(B=>{B.length&&(t.value=B[0].target.clientHeight)}),I=g(()=>e.height==="auto"?t.value:parseInt(e.height,10)),{layoutItemStyles:D}=ee({id:e.name,order:g(()=>parseInt(e.order,10)),position:g(()=>"bottom"),layoutSize:I,elementSize:g(()=>e.height==="auto"?void 0:I.value),active:g(()=>e.app),absolute:H(e,"absolute")});return te(()=>a(e.tag,{ref:c,class:["v-footer",u.value,m.value,_.value,l.value,n.value,e.class],style:[h.value,e.app?D.value:{height:ae(e.height)},e.style]},d)),{}}});const be=["innerHTML"],Ve={__name:"ArticleCard",props:["_id","category","description","image","title","author","sell","date"],setup(e){const{apiAuth:i}=L(),d=se(),u=j(),m=oe(),h=e,_=async()=>{var l,n;if(!d.isLogin){m.push("/login");return}try{const{data:t}=await i.patch("/users/cart",{product:h._id,quantity:1});d.cart=t.result,u({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(t){const c=((n=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:n.message)||"發生錯誤，請稍後再試";u({text:c,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(l,n)=>{const t=re("router-link");return o(),k(ie,{class:"article-card",hover:""},{default:s(()=>[a(le,null,{default:s(()=>[a(t,{class:"text-primary text-decoration-none",to:"/articles/"+e._id},{default:s(()=>[C(w(e.title),1)]),_:1},8,["to"])]),_:1}),a(ne,null,{default:s(()=>[C(w(e.author),1)]),_:1}),a(R,null,{default:s(()=>[a(ce,{src:e.image[0],cover:"",height:"200"},null,8,["src"])]),_:1}),a(R,{style:{"white-space":"pre"}},{default:s(()=>[r("div",{innerHTML:e.description,class:"text-overflow"},null,8,be)]),_:1}),a(ue,null,{default:s(()=>[a(P,{color:"primary","prepend-icon":"mdi-book-open-blank-variant",onClick:_},{default:s(()=>[C(" 閱讀文章 ")]),_:1}),a(P,{class:"text-caption"},{default:s(()=>[C(w(new Date(e.date).toLocaleString()),1)]),_:1})]),_:1})]),_:1})}}};const y=e=>(he("data-v-c4a29e5b"),e=e(),_e(),e),we=y(()=>r("div",{class:"d-flex fill-height justify-center align-center"},[r("div",{class:"text-h2"})],-1)),xe=y(()=>r("h1",null,"最新認同卡",-1)),Se=y(()=>r("h1",null,"最新文章",-1)),Pe=y(()=>r("div",{class:"pt-0"},null,-1)),Ie=y(()=>r("strong",null,"Copyright © IcemakerDesign. All rights reserved.",-1)),Be={__name:"HomeView",setup(e){const{api:i}=L(),d=j(),u=p([]),m=p([]),h=p(["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]);me(async()=>{var l,n;try{const{data:t}=await i.get("/products",{params:{itemsPerPage:-1}});u.value.push(...t.result.data),await T();const{data:c}=await i.get("/articles",{params:{itemsPerPage:-1}});m.value.push(...c.result.data),await T(),ge.to(".product-card",{opacity:1,duration:.5}).to(".article-card",{opacity:1,duration:.5})}catch(t){console.log(t);const c=((n=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:n.message)||"發生錯誤，請稍後再試";d({text:c,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});const _=p([{src:"https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/School%20Affinity%20Card_KV.jpg"},{src:"https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/2019041204_03.jpg"},{src:"https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/KV_1366x430.jpg"},{src:"https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/lowcarboncard-KV.jpg"}]);return p(["","","","",""]),(l,n)=>(o(),f(v,null,[r("div",null,[a(x,null,{default:s(()=>[a(ve,{cycle:"",height:"100%","hide-delimiter-background":"","show-arrows":"hover"},{default:s(()=>[(o(!0),f(v,null,b(_.value,(t,c)=>(o(),k(ke,{key:c,src:t.src,cover:""},{default:s(()=>[we]),_:2},1032,["src"]))),128))]),_:1})]),_:1})]),a(fe,{class:"custom-font html-body"},{default:s(()=>[a(x,null,{default:s(()=>[a(V,{cols:"12"},{default:s(()=>[xe]),_:1}),a(S),(o(!0),f(v,null,b(u.value,t=>(o(),k(V,{cols:"12",md:"6",lg:"3",key:t._id},{default:s(()=>[a(pe,F(A(t)),null,16)]),_:2},1024))),128))]),_:1}),a(x,null,{default:s(()=>[a(V,{cols:"12"},{default:s(()=>[Se]),_:1}),a(S),(o(!0),f(v,null,b(m.value,t=>(o(),k(V,{cols:"12",md:"6",lg:"3",key:t._id},{default:s(()=>[a(Ve,F(A(t)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}),a(ye,{class:"footer-bg text-center d-flex flex-column mt-6"},{default:s(()=>[r("div",null,[(o(!0),f(v,null,b(h.value,t=>(o(),k(P,{key:t,class:"mx-4",icon:t,variant:"text"},null,8,["icon"]))),128))]),Pe,a(S),r("div",null,[C(w(new Date().getFullYear())+" — ",1),Ie])]),_:1})],64))}},ze=de(Be,[["__scopeId","data-v-c4a29e5b"]]);export{ze as default};
