import{p as N,b as D,m as $,d as E,C as M,e as O,a as q,f as U,g as Y,l as G,h as W,t as F,i as X,j as J,k as K,s as Q,aq as Z,o as p,F as ee,u as te,c as t,v as ae,ad as se,a4 as A,a3 as oe,af as re,a5 as r,a6 as C,a7 as s,ar as le,ab as k,ap as w,as as ne,am as B,V as ce,ah as l,an as ie,X as S,T as ue,al as de,ac as z,ae as me,x as f,A as he,at as T,ag as v,Y as y,aj as b,ai as _e,au as R,av as j,aw as ge,ax as pe}from"./index-c8844608.js";import{g as fe,_ as ve}from"./index-9c587aab.js";import{a as ye,V}from"./VCol-a6f78378.js";import{V as P}from"./VRow-d7318132.js";import{V as Ce,a as ke}from"./VCarouselItem-03a99f3e.js";import{V as H}from"./VDivider-ce062de9.js";import"./VWindowItem-82720008.js";import"./ssrBoot-f5a5cd50.js";const be=N({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...D(),...$(),...E(),...M(),...O(),...q({tag:"footer"}),...U()},"VFooter"),Ve=Y()({name:"VFooter",props:be(),setup(e,d){let{slots:m}=d;const{themeClasses:i}=G(e),{backgroundColorClasses:h,backgroundColorStyles:_}=W(F(e,"color")),{borderClasses:g}=X(e),{elevationClasses:u}=J(e),{roundedClasses:n}=K(e),o=Q(32),{resizeRef:a}=Z(I=>{I.length&&(o.value=I[0].target.clientHeight)}),c=p(()=>e.height==="auto"?o.value:parseInt(e.height,10)),{layoutItemStyles:L}=ee({id:e.name,order:p(()=>parseInt(e.order,10)),position:p(()=>"bottom"),layoutSize:c,elementSize:p(()=>e.height==="auto"?void 0:c.value),active:p(()=>e.app),absolute:F(e,"absolute")});return te(()=>t(e.tag,{ref:a,class:["v-footer",i.value,h.value,g.value,u.value,n.value,e.class],style:[_.value,e.app?L.value:{height:ae(e.height)},e.style]},m)),{}}});const we=["innerHTML"],xe=l("span",null,"Favorites",-1),Pe={__name:"ArticleCard",props:["_id","category","description","image","title","author","sell"],setup(e){const{apiAuth:d}=z(),m=se(),i=A(),h=oe(),_=e,g=async()=>{var u,n;if(!m.isLogin){h.push("/login");return}try{const{data:o}=await d.patch("/users/cart",{product:_._id,quantity:1});m.cart=o.result,i({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(o){const a=((n=(u=o==null?void 0:o.response)==null?void 0:u.data)==null?void 0:n.message)||"發生錯誤，請稍後再試";i({text:a,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(u,n)=>{const o=re("router-link");return r(),C(de,{class:"article-card",hover:""},{default:s(()=>[t(le,null,{default:s(()=>[t(o,{class:"text-primary text-decoration-none",to:"/articles/"+e._id},{default:s(()=>[k(w(e.title),1)]),_:1},8,["to"])]),_:1}),t(ne,null,{default:s(()=>[k(w(e.author),1)]),_:1}),t(B,null,{default:s(()=>[t(ce,{src:e.image[0],cover:"",height:"200"},null,8,["src"])]),_:1}),t(B,{style:{"white-space":"pre"}},{default:s(()=>[l("div",{innerHTML:e.description,class:"text-overflow"},null,8,we)]),_:1}),t(ie,null,{default:s(()=>[t(S,{color:"primary","prepend-icon":"mdi-cards-playing-outline",onClick:g},{default:s(()=>[k(" 我想申辦 ")]),_:1}),t(S,{value:"favorites"},{default:s(()=>[t(ue,null,{default:s(()=>[k("mdi-heart")]),_:1}),xe]),_:1})]),_:1})]),_:1})}}};const x=e=>(ge("data-v-d647bb3c"),e=e(),pe(),e),Se={class:"d-flex fill-height justify-center align-center"},Ie={class:"text-h2"},Fe=x(()=>l("h1",null,"最新認同卡",-1)),Be=x(()=>l("h1",null,"最新文章",-1)),Te={class:"bg-teal d-flex w-100 align-center px-4"},Re=x(()=>l("strong",null,"Get connected with us on social networks!",-1)),je={class:"px-4 py-2 text-center w-100 F15946 font-white"},He=x(()=>l("strong",null,"Copyright © IcemakerDesign. All rights reserved.",-1)),Ae={__name:"HomeView",setup(e){const{api:d}=z(),m=A(),i=f([]),h=f([]),_=f(["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]);he(async()=>{var n,o;try{const{data:a}=await d.get("/products",{params:{itemsPerPage:-1}});i.value.push(...a.result.data),await T();const{data:c}=await d.get("/articles",{params:{itemsPerPage:-1}});h.value.push(...c.result.data),await T(),fe.to(".product-card",{opacity:1,duration:.5}).to(".article-card",{opacity:1,duration:.5})}catch(a){console.log(a);const c=((o=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";m({text:c,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});const g=f([{src:"https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/NPOCreditCard.jpg"},{src:"https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/CTBCNPO2.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]),u=f(["First","Second","Third","Fourth","Fifth"]);return(n,o)=>(r(),v(y,null,[t(ye,{class:"custom-font html-body"},{default:s(()=>[t(P,null,{default:s(()=>[t(Ce,{cycle:"",height:"400","hide-delimiter-background":"","show-arrows":"hover"},{default:s(()=>[(r(!0),v(y,null,b(g.value,(a,c)=>(r(),C(ke,{key:c,src:a.src,cover:""},{default:s(()=>[l("div",Se,[l("div",Ie,w(u.value[c])+" Slide ",1)])]),_:2},1032,["src"]))),128))]),_:1})]),_:1}),t(P,null,{default:s(()=>[t(V,{cols:"12"},{default:s(()=>[Fe]),_:1}),t(H),(r(!0),v(y,null,b(i.value,a=>(r(),C(V,{cols:"12",md:"6",lg:"3",key:a._id},{default:s(()=>[t(ve,R(j(a)),null,16)]),_:2},1024))),128))]),_:1}),t(P,null,{default:s(()=>[t(V,{cols:"12"},{default:s(()=>[Be]),_:1}),t(H),(r(!0),v(y,null,b(h.value,a=>(r(),C(V,{cols:"12",md:"6",lg:"3",key:a._id},{default:s(()=>[t(Pe,R(j(a)),null,16)]),_:2},1024))),128))]),_:1})]),_:1}),t(Ve,{class:"d-flex flex-column ma-0 pa-0"},{default:s(()=>[l("div",Te,[Re,t(_e),(r(!0),v(y,null,b(_.value,a=>(r(),C(S,{key:a,class:"mx-4",icon:a,variant:"plain",size:"small"},null,8,["icon"]))),128))]),l("div",je,[k(w(new Date().getFullYear())+" — ",1),He])]),_:1})],64))}},qe=me(Ae,[["__scopeId","data-v-d647bb3c"]]);export{qe as default};
