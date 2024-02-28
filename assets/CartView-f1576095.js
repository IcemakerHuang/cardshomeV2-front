import{ae as P,a4 as A,ad as D,a3 as N,x,o as C,A as $,a5 as k,a6 as T,a7 as n,ac as E,c,ag as g,ap as d,X as p,ab as b,ah as w,av as L,aw as M}from"./index-1178b09f.js";import{a as R,V as f}from"./VCol-50434d4e.js";import{V as U}from"./VDivider-22ed7a8b.js";import{V as X}from"./VDataTable-c8a1a73b.js";import"./VList-828bc693.js";import"./ssrBoot-f2388028.js";import"./VSlideGroup-18406851.js";const j=u=>(L("data-v-29edda2e"),u=u(),M(),u),z=j(()=>w("h1",null,"認同卡選取清單",-1)),F={key:0},G={key:1,class:"text-red text-decoration-line-through"},H={__name:"CartView",setup(u){const{apiAuth:m}=E(),r=A(),_=D(),y=N(),o=x([]),V=[{title:"商品名稱",key:"product.name"},{title:"單價",key:"product.price"},{title:"數量",key:"quantity"},{title:"總價",key:"total",value:e=>e.product.price*e.quantity},{title:"操作",key:"action"}],B=C(()=>o.value.reduce((e,a)=>e+a.quantity*a.product.price,0)),q=C(()=>o.value.length>0&&!o.value.some(e=>!e.product.sell)),h=async(e,a)=>{var t,s;if(!_.isLogin){y.push("/login");return}try{const{data:l}=await m.patch("/users/cart",{product:e,quantity:a});_.cart=l.result,r({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}});const i=o.value.findIndex(I=>I.product._id===e);o.value[i].quantity+=a,o.value[i].quantity<=0&&o.value.splice(i,1)}catch(l){const i=((s=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";r({text:i,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},v=x(!1),S=async()=>{var e,a;v.value=!0;try{await m.post("/orders"),_.cart=0,y.push("/orders"),r({text:"結帳成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(t){const s=((a=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}v.value=!1};return $(async()=>{var e,a;try{const{data:t}=await m.get("/users/cart");o.value.push(...t.result)}catch(t){const s=((a=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(e,a)=>(k(),T(R,{class:"custom-font"},{default:n(()=>[c(f,{cols:"12"},{default:n(()=>[z]),_:1}),c(U),c(f,{cols:"12"},{default:n(()=>[c(X,{items:o.value,headers:V},{"item.product.name":n(({item:t})=>[t.product.sell?(k(),g("span",F,d(t.product.name),1)):(k(),g("span",G,d(t.product.name)+" (已下架)",1))]),"item.quantity":n(({item:t})=>[c(p,{variant:"text",icon:"mdi-minus",color:"red",onClick:s=>h(t.product._id,-1)},null,8,["onClick"]),b(d(t.quantity),1),c(p,{variant:"text",icon:"mdi-plus",color:"green",onClick:s=>h(t.product._id,1)},null,8,["onClick"])]),"item.action":n(({item:t})=>[c(p,{variant:"text",icon:"mdi-delete",color:"red",onClick:s=>h(t.product._id,t.quantity*-1)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),c(f,{class:"text-center",cols:"12"},{default:n(()=>[w("p",null,"所有卡面合計費用: "+d(B.value),1),c(p,{color:"pink-lighten-2",disabled:!q.value,loading:v.value,onClick:S},{default:n(()=>[b("儲存")]),_:1},8,["disabled","loading"])]),_:1})]),_:1}))}},tt=P(H,[["__scopeId","data-v-29edda2e"]]);export{tt as default};
