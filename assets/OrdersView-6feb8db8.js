import{ae as h,a4 as y,x as V,A as k,a5 as l,a6 as w,a7 as t,ac as v,c,ab as x,ap as n,ah as p,ag as d,aj as g,Y as b,av as A,aw as S}from"./index-1178b09f.js";import{a as B,V as u}from"./VCol-50434d4e.js";import{V as C}from"./VDataTable-c8a1a73b.js";import{V as I}from"./VRow-8bc54f05.js";import"./VList-828bc693.js";import"./ssrBoot-f2388028.js";import"./VDivider-22ed7a8b.js";import"./VSlideGroup-18406851.js";const D=r=>(A("data-v-8c5fc643"),r=r(),S(),r),N=D(()=>p("h1",null,"申辦認同卡列表",-1)),O={__name:"OrdersView",setup(r){const{apiAuth:_}=v(),m=y(),i=V([]),f=[{title:"編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt"},{title:"認同卡",key:"cart",sortable:!1},{title:"費用",key:"price",value:a=>a.cart.reduce((s,e)=>s+e.quantity*e.product.price,0)}];return k(async()=>{var a,s;try{const{data:e}=await _.get("/orders/all");i.value.push(...e.result)}catch(e){const o=((s=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";m({text:o,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,s)=>(l(),w(B,{class:"custom-font"},{default:t(()=>[c(I,null,{default:t(()=>[c(u,{cols:"12"},{default:t(()=>[N]),_:1}),c(u,{cols:"12"},{default:t(()=>[c(C,{items:i.value,headers:f},{"item.createdAt":t(({item:e})=>[x(n(new Date(e.createdAt).toLocaleString()),1)]),"item.cart":t(({item:e})=>[p("ul",null,[(l(!0),d(b,null,g(e.cart,o=>(l(),d("li",{key:o._id},n(o.product.name)+" * "+n(o.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}},R=h(O,[["__scopeId","data-v-8c5fc643"]]);export{R as default};
