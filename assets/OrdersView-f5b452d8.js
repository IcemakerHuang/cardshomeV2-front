import{a4 as f,x as h,A as V,a5 as c,a6 as k,a7 as t,ac as y,c as o,ab as b,ao as l,an as d,af as i,ah as w,Y as x}from"./index-8230ba90.js";import{a as A,V as u}from"./VCol-b62a3033.js";import{V as g}from"./VDataTable-b6d68c52.js";import{V as B}from"./VRow-9d4bbb38.js";import"./VList-dd04644e.js";import"./ssrBoot-55d8ca2a.js";import"./VDivider-ccc7c20e.js";import"./VSlideGroup-99b8cb2e.js";const C=d("h1",null,"訂單",-1),M={__name:"OrdersView",setup(v){const{apiAuth:m}=y(),p=f(),n=h([]),_=[{title:"訂單編號",key:"_id"},{title:"日期",key:"createdAt"},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((r,e)=>r+e.quantity*e.product.price,0)}];return V(async()=>{var a,r;try{const{data:e}=await m.get("/orders");n.value.push(...e.result)}catch(e){const s=((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";p({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,r)=>(c(),k(A,null,{default:t(()=>[o(B,null,{default:t(()=>[o(u,{cols:"12"},{default:t(()=>[C]),_:1}),o(u,{cols:"12"},{default:t(()=>[o(g,{items:n.value,headers:_},{"item.createdAt":t(({item:e})=>[b(l(new Date(e.createdAt).toLocaleString()),1)]),"item.cart":t(({item:e})=>[d("ul",null,[(c(!0),i(x,null,w(e.cart,s=>(c(),i("li",{key:s._id},l(s.product.name)+" * "+l(s.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{M as default};
