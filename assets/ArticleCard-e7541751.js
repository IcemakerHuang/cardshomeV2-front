import{ad as i,a4 as c,a3 as d,af as u,a5 as _,a6 as f,a7 as e,c as a,aA as m,ab as l,ap as r,aB as V,am as s,V as h,ah as x,an as p,X as o,al as C}from"./index-78fd00a0.js";const g=["innerHTML"],B={__name:"ArticleCard",props:["_id","category","description","image","title","author","sell","date"],setup(t){return i(),c(),d(),(v,y)=>{const n=u("router-link");return _(),f(C,{class:"article-card",hover:""},{default:e(()=>[a(m,null,{default:e(()=>[a(n,{class:"text-primary text-decoration-none",to:"/articles/"+t._id},{default:e(()=>[l(r(t.title),1)]),_:1},8,["to"])]),_:1}),a(V,null,{default:e(()=>[l(r(t.author),1)]),_:1}),a(s,null,{default:e(()=>[a(h,{src:t.image[0],cover:"",height:"200"},null,8,["src"])]),_:1}),a(s,{style:{"white-space":"pre"}},{default:e(()=>[x("div",{innerHTML:t.description,class:"text-overflow"},null,8,g)]),_:1}),a(p,null,{default:e(()=>[a(o,{color:"primary","prepend-icon":"mdi-book-open-blank-variant",to:"/articles/"+t._id},{default:e(()=>[l(" 閱讀文章 ")]),_:1},8,["to"]),a(o,{class:"text-caption"},{default:e(()=>[l(r(new Date(t.date).toLocaleString()),1)]),_:1})]),_:1})]),_:1})}}};export{B as _};
