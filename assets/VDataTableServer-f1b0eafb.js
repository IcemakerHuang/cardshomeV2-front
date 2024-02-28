import{m as ae,c as A,d as te,e as oe,f as se,g as le,h as re,i as ue,j as de,u as ne,p as ce,k as ie,l as me,n as ve,o as be,q as ge,r as pe,s as E,t as H,v as _,w as N}from"./VDataTable-531e4308.js";import{p as q,aX as Pe,U as he,g as L,D as Ve,a_ as fe,bi as ye,o as b,u as $,a$ as xe,b0 as U,c as s,G as m,t as r,aH as Te,q as ke,Y as De}from"./index-4baf4630.js";const Se=q({...Pe(),...he(ae(),["inline"])},"VCheckbox"),Ce=L()({name:"VCheckbox",inheritAttrs:!1,props:Se(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,g){let{attrs:p,slots:a}=g;const o=Ve(e,"modelValue"),{isFocused:l,focus:P,blur:h}=fe(e),u=ye(),c=b(()=>e.id||`checkbox-${u}`);return $(()=>{const[V,v]=xe(p),f=U.filterProps(e),d=A.filterProps(e);return s(U,m({class:["v-checkbox",e.class]},V,f,{modelValue:o.value,"onUpdate:modelValue":n=>o.value=n,id:c.value,focused:l.value,style:e.style}),{...a,default:n=>{let{id:y,messagesId:x,isDisabled:T,isReadonly:k}=n;return s(A,m(d,{id:y.value,"aria-describedby":x.value,disabled:T.value,readonly:k.value},v,{modelValue:o.value,"onUpdate:modelValue":D=>o.value=D,onFocus:P,onBlur:h}),a)}})}),{}}}),we=q({itemsLength:{type:[Number,String],required:!0},...te(),...oe(),...se()},"VDataTableServer"),Fe=L()({name:"VDataTableServer",props:we(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,g){let{attrs:p,slots:a}=g;const{groupBy:o}=le(e),{sortBy:l,multiSort:P,mustSort:h}=re(e),{page:u,itemsPerPage:c}=ue(e),V=b(()=>parseInt(e.itemsLength,10)),{columns:v,headers:f}=de(e,{groupBy:o,showSelect:r(e,"showSelect"),showExpand:r(e,"showExpand")}),{items:d}=ne(e,v),{toggleSort:n}=ce({sortBy:l,multiSort:P,mustSort:h,page:u}),{opened:y,isGroupOpen:x,toggleGroup:T,extractRows:k}=ie({groupBy:o,sortBy:l}),{pageCount:D,setItemsPerPage:O}=me({page:u,itemsPerPage:c,itemsLength:V}),{flatItems:w}=ve(d,o,y),{isSelected:j,select:M,selectAll:W,toggleSelect:X,someSelected:Y,allSelected:z}=be(e,{allItems:d,currentPage:d}),{isExpanded:J,toggleExpand:K}=ge(e),I=b(()=>k(d.value));pe({page:u,itemsPerPage:c,sortBy:l,groupBy:o,search:r(e,"search")}),Te("v-data-table",{toggleSort:n,sortBy:l}),ke({VDataTableRows:{hideNoData:r(e,"hideNoData"),noDataText:r(e,"noDataText"),loading:r(e,"loading"),loadingText:r(e,"loadingText")}});const t=b(()=>({page:u.value,itemsPerPage:c.value,sortBy:l.value,pageCount:D.value,toggleSort:n,setItemsPerPage:O,someSelected:Y.value,allSelected:z.value,isSelected:j,select:M,selectAll:W,toggleSelect:X,isExpanded:J,toggleExpand:K,isGroupOpen:x,toggleGroup:T,items:I.value.map(S=>S.raw),internalItems:I.value,groupedItems:w.value,columns:v.value,headers:f.value}));$(()=>{const S=E.filterProps(e),Q=H.filterProps(e),Z=_.filterProps(e),ee=N.filterProps(e);return s(N,m({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},ee),{top:()=>{var i;return(i=a.top)==null?void 0:i.call(a,t.value)},default:()=>{var i,B,C,F,G,R;return a.default?a.default(t.value):s(De,null,[(i=a.colgroup)==null?void 0:i.call(a,t.value),s("thead",{class:"v-data-table__thead",role:"rowgroup"},[s(H,m(Q,{sticky:e.fixedHeader}),a)]),(B=a.thead)==null?void 0:B.call(a,t.value),s("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(C=a["body.prepend"])==null?void 0:C.call(a,t.value),a.body?a.body(t.value):s(_,m(p,Z,{items:w.value}),a),(F=a["body.append"])==null?void 0:F.call(a,t.value)]),(G=a.tbody)==null?void 0:G.call(a,t.value),(R=a.tfoot)==null?void 0:R.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):s(E,S,{prepend:a["footer.prepend"]})})})}});export{Fe as V,Ce as a};