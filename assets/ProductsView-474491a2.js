import{p as ue,aU as ie,aV as ce,g as de,aW as ve,D as me,aX as fe,o as $,x as d,s as ge,H as pe,A as Ve,z as U,B as xe,u as ye,aY as be,aZ as ae,a_ as we,c as t,a$ as he,G as K,Y as q,R as te,aF as ke,b0 as Ce,b1 as Pe,Z as Fe,at as X,b2 as Se,v as _e,y as Ie,ae as Be,a4 as Me,af as Re,a5 as le,ag as Ae,a7 as c,ak as Ue,ac as Te,X as E,ab as G,aa as Y,b3 as De,V as Ne,a6 as ze,ao as He,a8 as u,a9 as $e,al as Ee,ar as Ge,ap as qe,am as Oe,an as Le,ai as je,T as Ke,aw as Xe,ax as Ye,ah as Ze}from"./index-77116c06.js";import{c as We,a as Z,e as Je,f as Qe,u as ea,d as T}from"./index.esm-92d0372e.js";import{a as aa,V as W}from"./VCol-34e54fe9.js";import{V as ta}from"./VRow-aaaf7dd4.js";import{V as la}from"./VDivider-31ea6720.js";import{V as oa,a as sa}from"./VDataTableServer-d09f3aba.js";import{V as na}from"./VForm-e3ef7a26.js";import{a as ra}from"./VDataTable-54f93cb9.js";import"./VList-6bc0034c.js";import"./ssrBoot-1a6cdbeb.js";import"./VSlideGroup-a8e873c5.js";const ua=ue({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ie(),...ce()},"VTextarea"),ia=de()({name:"VTextarea",directives:{Intersect:ve},inheritAttrs:!1,props:ua(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,B){let{attrs:F,emit:M,slots:m}=B;const i=me(e,"modelValue"),{isFocused:h,focus:D,blur:N}=fe(e),O=$(()=>typeof e.counterValue=="function"?e.counterValue(i.value):(i.value||"").toString().length),L=$(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function R(o,v){var r,f;!e.autofocus||!o||(f=(r=v[0].target)==null?void 0:r.focus)==null||f.call(r)}const z=d(),x=d(),S=ge(""),y=d(),I=$(()=>e.persistentPlaceholder||h.value||e.active);function k(){var o;y.value!==document.activeElement&&((o=y.value)==null||o.focus()),h.value||D()}function C(o){k(),M("click:control",o)}function H(o){M("mousedown:control",o)}function j(o){o.stopPropagation(),k(),X(()=>{i.value="",Se(e["onClick:clear"],o)})}function A(o){var r;const v=o.target;if(i.value=v.value,(r=e.modelModifiers)!=null&&r.trim){const f=[v.selectionStart,v.selectionEnd];X(()=>{v.selectionStart=f[0],v.selectionEnd=f[1]})}}const p=d(),b=d(+e.rows),_=$(()=>["plain","underlined"].includes(e.variant));pe(()=>{e.autoGrow||(b.value=+e.rows)});function P(){e.autoGrow&&X(()=>{if(!p.value||!x.value)return;const o=getComputedStyle(p.value),v=getComputedStyle(x.value.$el),r=parseFloat(o.getPropertyValue("--v-field-padding-top"))+parseFloat(o.getPropertyValue("--v-input-padding-top"))+parseFloat(o.getPropertyValue("--v-field-padding-bottom")),f=p.value.scrollHeight,n=parseFloat(o.lineHeight),l=Math.max(parseFloat(e.rows)*n+r,parseFloat(v.getPropertyValue("--v-input-control-height"))),V=parseFloat(e.maxRows)*n+r||1/0,a=Ie(f??0,l,V);b.value=Math.floor((a-r)/n),S.value=_e(a)})}Ve(P),U(i,P),U(()=>e.rows,P),U(()=>e.maxRows,P),U(()=>e.density,P);let g;return U(p,o=>{o?(g=new ResizeObserver(P),g.observe(p.value)):g==null||g.disconnect()}),xe(()=>{g==null||g.disconnect()}),ye(()=>{const o=!!(m.counter||e.counter||e.counterValue),v=!!(o||m.details),[r,f]=be(F),{modelValue:n,...l}=ae.filterProps(e),V=we(e);return t(ae,K({ref:z,modelValue:i.value,"onUpdate:modelValue":a=>i.value=a,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":_.value},e.class],style:e.style},r,l,{centerAffix:b.value===1&&!_.value,focused:h.value}),{...m,default:a=>{let{id:s,isDisabled:w,isDirty:J,isReadonly:oe,isValid:se}=a;return t(he,K({ref:x,style:{"--v-textarea-control-height":S.value},onClick:C,onMousedown:H,"onClick:clear":j,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},V,{id:s.value,active:I.value||J.value,centerAffix:b.value===1&&!_.value,dirty:J.value||e.dirty,disabled:w.value,focused:h.value,error:se.value===!1}),{...m,default:ne=>{let{props:{class:Q,...ee}}=ne;return t(q,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),te(t("textarea",K({ref:y,class:Q,value:i.value,onInput:A,autofocus:e.autofocus,readonly:oe.value,disabled:w.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:k,onBlur:N},ee,f),null),[[ke("intersect"),{handler:R},null,{once:!0}]]),e.autoGrow&&te(t("textarea",{class:[Q,"v-textarea__sizer"],id:`${ee.id}-sizer`,"onUpdate:modelValue":re=>i.value=re,ref:p,readonly:!0,"aria-hidden":"true"},null),[[Ce,i.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:v?a=>{var s;return t(q,null,[(s=m.details)==null?void 0:s.call(m,a),o&&t(q,null,[t("span",null,null),t(Pe,{active:e.persistentCounter||h.value,value:O.value,max:L.value},m.counter)])])}:void 0})}),Fe({},z,x,y)}});const ca=e=>(Xe("data-v-c6f51590"),e=e(),Ye(),e),da=ca(()=>Ze("h1",{class:"text-center"},"商品管理",-1)),va={__name:"ProductsView",setup(e){const{apiAuth:B}=Te(),F=Me(),M=d(null),m=d(!1),i=d(""),h=n=>{n?(i.value=n._id,x.value.value=n.name,S.value.value=n.price,y.value.value=n.description,I.value.value=n.category,k.value.value=n.sell):i.value="",m.value=!0},D=()=>{m.value=!1,z(),M.value.deleteFileRecord()},N=["地區回饋","愛心公益","學校認同","市民卡","公會組織"],O=We({name:Z().required("缺少商品名稱"),price:Je().typeError("商品價格格式錯誤").required("缺少商品價格").min(0,"商品價格不能小於 0"),description:Z().required("缺少商品說明"),category:Z().required("缺少商品分類").test("isCategory","商品分類錯誤",n=>N.includes(n)),sell:Qe()}),{handleSubmit:L,isSubmitting:R,resetForm:z}=ea({validationSchema:O,initialValues:{name:"",price:0,description:"",category:"",sell:!1}}),x=T("name"),S=T("price"),y=T("description"),I=T("category"),k=T("sell"),C=d([]),H=d([]),j=L(async n=>{var l,V,a;if(!((l=C.value[0])!=null&&l.error)&&!(i.value===""&&C.value.length===0))try{const s=new FormData;for(const w in n)s.append(w,n[w]);C.value.length>0&&s.append("image",C.value[0].file),i.value===""?await B.post("/products",s):await B.patch("/products/"+i.value,s),F({text:i.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),D(),f()}catch(s){console.log(s);const w=((a=(V=s==null?void 0:s.response)==null?void 0:V.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";F({text:w,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),A=d(10),p=d([{key:"createdAt",order:"desc"}]),b=d(1),_=d([]),P=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"申請費用",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],g=d(!0),o=d(0),v=d(""),r=async()=>{var n,l,V,a;g.value=!0;try{const{data:s}=await B.get("/products/all",{params:{page:b.value,itemsPerPage:A.value,sortBy:((n=p.value[0])==null?void 0:n.key)||"createdAt",sortOrder:((l=p.value[0])==null?void 0:l.order)==="asc"?1:-1,search:v.value}});_.value.splice(0,_.value.length,...s.result.data),o.value=s.result.total}catch(s){console.log(s);const w=((a=(V=s==null?void 0:s.response)==null?void 0:V.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";F({text:w,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}g.value=!1};r();const f=()=>{b.value=1,r()};return(n,l)=>{const V=Re("VueFileAgent");return le(),Ae(q,null,[t(aa,{class:"custom-font"},{default:c(()=>[t(ta,null,{default:c(()=>[t(W,{cols:"12"},{default:c(()=>[da]),_:1}),t(la),t(W,{cols:"12"},{default:c(()=>[t(E,{color:"green",onClick:l[0]||(l[0]=a=>h())},{default:c(()=>[G("新增商品")]),_:1})]),_:1}),t(W,{cols:"12"},{default:c(()=>[t(oa,{"items-per-page":A.value,"onUpdate:itemsPerPage":[l[2]||(l[2]=a=>A.value=a),r],"sort-by":p.value,"onUpdate:sortBy":[l[3]||(l[3]=a=>p.value=a),r],page:b.value,"onUpdate:page":[l[4]||(l[4]=a=>b.value=a),r],items:_.value,headers:P,loading:g.value,"items-length":o.value,search:v.value,hover:""},{top:c(()=>[t(Y,{label:"搜尋","append-icon":"mdi-magnify",modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=a=>v.value=a),"onClick:append":f,onKeydown:De(f,["enter"])},null,8,["modelValue"])]),"item.image":c(({item:a})=>[t(Ne,{src:a.image,height:"50px"},null,8,["src"])]),"item.sell":c(({item:a})=>[a.sell?(le(),ze(Ke,{key:0,icon:"mdi-check"})):He("",!0)]),"item.edit":c(({item:a})=>[t(E,{icon:"mdi-pencil",variant:"text",color:"blue",onClick:s=>h(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(Ue,{class:"custom-font",modelValue:m.value,"onUpdate:modelValue":l[12]||(l[12]=a=>m.value=a),persistent:"",width:"500px"},{default:c(()=>[t(na,{disabled:u(R),onSubmit:$e(u(j),["prevent"])},{default:c(()=>[t(Ee,null,{default:c(()=>[t(Ge,null,{default:c(()=>[G(qe(i.value===""?"新增商品":"編輯商品"),1)]),_:1}),t(Oe,null,{default:c(()=>[t(Y,{label:"名稱",modelValue:u(x).value.value,"onUpdate:modelValue":l[5]||(l[5]=a=>u(x).value.value=a),"error-messages":u(x).errorMessage.value},null,8,["modelValue","error-messages"]),t(Y,{label:"價格",type:"number",min:"0",modelValue:u(S).value.value,"onUpdate:modelValue":l[6]||(l[6]=a=>u(S).value.value=a),"error-messages":u(S).errorMessage.value},null,8,["modelValue","error-messages"]),t(ra,{label:"分類",items:N,modelValue:u(I).value.value,"onUpdate:modelValue":l[7]||(l[7]=a=>u(I).value.value=a),"error-messages":u(I).errorMessage.value},null,8,["modelValue","error-messages"]),t(sa,{label:"上架",modelValue:u(k).value.value,"onUpdate:modelValue":l[8]||(l[8]=a=>u(k).value.value=a),"error-messages":u(k).errorMessage.value},null,8,["modelValue","error-messages"]),t(ia,{label:"說明",modelValue:u(y).value.value,"onUpdate:modelValue":l[9]||(l[9]=a=>u(y).value.value=a),"error-messages":u(y).errorMessage.value},null,8,["modelValue","error-messages"]),t(V,{modelValue:C.value,"onUpdate:modelValue":l[10]||(l[10]=a=>C.value=a),rawModelValue:H.value,"onUpdate:rawModelValue":l[11]||(l[11]=a=>H.value=a),accept:"image/jpeg,image/png",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:M},null,8,["modelValue","rawModelValue"])]),_:1}),t(Le,null,{default:c(()=>[t(je),t(E,{color:"red",disabled:u(R),onClick:D},{default:c(()=>[G("取消")]),_:1},8,["disabled"]),t(E,{color:"green",type:"submit",loading:u(R)},{default:c(()=>[G("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}},Ca=Be(va,[["__scopeId","data-v-c6f51590"]]);export{Ca as default};