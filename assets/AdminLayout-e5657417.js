import{s as C,o as y,v as ue,A as J,z as R,B as ee,aK as ie,p as re,b as se,m as ce,aL as ve,d as de,C as me,e as fe,a as he,f as ge,g as we,n as ye,l as be,i as pe,h as X,t as z,j as Se,aM as ke,k as Ee,D as xe,aN as Me,x as Te,aO as Ce,E as L,aP as Ve,F as Be,q as _e,u as Re,aQ as Pe,c as f,G as q,aR as De,Y as H,au as Le,ad as He,ae as Ye,a5 as U,af as Z,a7 as D,a8 as Ie,ah as Ne}from"./index-8230ba90.js";import{u as We}from"./ssrBoot-55d8ca2a.js";import{V as Oe}from"./VMain-4cf48a9f.js";import{V as j,a as G}from"./VList-dd04644e.js";import{V as Fe}from"./VDivider-ccc7c20e.js";function $e(e){let{rootEl:r,isSticky:s,layoutItemStyles:l}=e;const a=C(!1),t=C(0),m=y(()=>{const w=typeof a.value=="boolean"?"top":a.value;return[s.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[w]:ue(t.value)}:{top:l.value.top}]});J(()=>{R(s,w=>{w?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),ee(()=>{window.removeEventListener("scroll",S)});let h=0;function S(){const w=h>window.scrollY?"up":"down",u=r.value.getBoundingClientRect(),v=parseFloat(l.value.top??0),c=window.scrollY-Math.max(0,t.value-v),g=u.height+Math.max(t.value,v)-window.scrollY-window.innerHeight,k=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;u.height<window.innerHeight-v?(a.value="top",t.value=v):w==="up"&&a.value==="bottom"||w==="down"&&a.value==="top"?(t.value=window.scrollY+u.top-k,a.value=!0):w==="down"&&g<=0?(t.value=0,a.value="bottom"):w==="up"&&c<=0&&(k?a.value!=="top"&&(t.value=-c+k+v,a.value="top"):(t.value=u.top+c,a.value="top")),h=window.scrollY}return{isStuck:a,stickyStyles:m}}const Ae=100,Xe=20;function K(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function Q(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let s=e.length-1;s>0;s--){if(e[s].t===e[s-1].t)continue;const l=K(r),a=(e[s].d-e[s-1].d)/(e[s].t-e[s-1].t);r+=(a-l)*Math.abs(a),s===e.length-1&&(r*=.5)}return K(r)*1e3}function ze(){const e={};function r(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new ie(Xe))).push([a.timeStamp,t])})}function s(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function l(a){var w;const t=(w=e[a])==null?void 0:w.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const m=t[0],h=[],S=[];for(const u of t){if(m[0]-u[0]>Ae)break;h.push({t:u[0],d:u[1].clientX}),S.push({t:u[0],d:u[1].clientY})}return{x:Q(h),y:Q(S),get direction(){const{x:u,y:v}=this,[c,g]=[Math.abs(u),Math.abs(v)];return c>g&&u>=0?"right":c>g&&u<=0?"left":g>c&&v>=0?"down":g>c&&v<=0?"up":qe()}}}return{addMovement:r,endTouch:s,getVelocity:l}}function qe(){throw new Error}function Ue(e){let{isActive:r,isTemporary:s,width:l,touchless:a,position:t}=e;J(()=>{window.addEventListener("touchstart",V,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",x,{passive:!0})}),ee(()=>{window.removeEventListener("touchstart",V),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",x)});const m=y(()=>["left","right"].includes(t.value)),{addMovement:h,endTouch:S,getVelocity:w}=ze();let u=!1;const v=C(!1),c=C(0),g=C(0);let k;function b(o,n){return(t.value==="left"?o:t.value==="right"?document.documentElement.clientWidth-o:t.value==="top"?o:t.value==="bottom"?document.documentElement.clientHeight-o:T())-(n?l.value:0)}function P(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const i=t.value==="left"?(o-g.value)/l.value:t.value==="right"?(document.documentElement.clientWidth-o-g.value)/l.value:t.value==="top"?(o-g.value)/l.value:t.value==="bottom"?(document.documentElement.clientHeight-o-g.value)/l.value:T();return n?Math.max(0,Math.min(1,i)):i}function V(o){if(a.value)return;const n=o.changedTouches[0].clientX,i=o.changedTouches[0].clientY,d=25,E=t.value==="left"?n<d:t.value==="right"?n>document.documentElement.clientWidth-d:t.value==="top"?i<d:t.value==="bottom"?i>document.documentElement.clientHeight-d:T(),M=r.value&&(t.value==="left"?n<l.value:t.value==="right"?n>document.documentElement.clientWidth-l.value:t.value==="top"?i<l.value:t.value==="bottom"?i>document.documentElement.clientHeight-l.value:T());(E||M||r.value&&s.value)&&(u=!0,k=[n,i],g.value=b(m.value?n:i,r.value),c.value=P(m.value?n:i),S(o),h(o))}function B(o){const n=o.changedTouches[0].clientX,i=o.changedTouches[0].clientY;if(u){if(!o.cancelable){u=!1;return}const E=Math.abs(n-k[0]),M=Math.abs(i-k[1]);(m.value?E>M&&E>3:M>E&&M>3)?(v.value=!0,u=!1):(m.value?M:E)>3&&(u=!1)}if(!v.value)return;o.preventDefault(),h(o);const d=P(m.value?n:i,!1);c.value=Math.max(0,Math.min(1,d)),d>1?g.value=b(m.value?n:i,!0):d<0&&(g.value=b(m.value?n:i,!1))}function x(o){if(u=!1,!v.value)return;h(o),v.value=!1;const n=w(o.changedTouches[0].identifier),i=Math.abs(n.x),d=Math.abs(n.y);(m.value?i>d&&i>400:d>i&&d>3)?r.value=n.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||T()):r.value=c.value>.5}const _=y(()=>v.value?{transform:t.value==="left"?`translateX(calc(-100% + ${c.value*l.value}px))`:t.value==="right"?`translateX(calc(100% - ${c.value*l.value}px))`:t.value==="top"?`translateY(calc(-100% + ${c.value*l.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${c.value*l.value}px))`:T(),transition:"none"}:void 0);return{isDragging:v,dragProgress:c,dragStyles:_}}function T(){throw new Error}const Ze=["start","end","left","right","top","bottom"],je=re({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ze.includes(e)},sticky:Boolean,...se(),...ce(),...ve(),...de(),...me(),...fe(),...he({tag:"nav"}),...ge()},"VNavigationDrawer"),Ge=we()({name:"VNavigationDrawer",props:je(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:s,emit:l,slots:a}=r;const{isRtl:t}=ye(),{themeClasses:m}=be(e),{borderClasses:h}=pe(e),{backgroundColorClasses:S,backgroundColorStyles:w}=X(z(e,"color")),{elevationClasses:u}=Se(e),{displayClasses:v,mobile:c}=ke(e),{roundedClasses:g}=Ee(e),k=Pe(),b=xe(e,"modelValue",null,p=>!!p),{ssrBootStyles:P}=We(),{scopeId:V}=Me(),B=Te(),x=C(!1),_=y(()=>e.rail&&e.expandOnHover&&x.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=y(()=>Ce(e.location,t.value)),n=y(()=>!e.permanent&&(c.value||e.temporary)),i=y(()=>e.sticky&&!n.value&&o.value!=="bottom");L(()=>e.expandOnHover&&e.rail!=null,()=>{R(x,p=>l("update:rail",!p))}),L(()=>!e.disableResizeWatcher,()=>{R(n,p=>!e.permanent&&Le(()=>b.value=!p))}),L(()=>!e.disableRouteWatcher&&!!k,()=>{R(k.currentRoute,()=>n.value&&(b.value=!1))}),R(()=>e.permanent,p=>{p&&(b.value=!0)}),Ve(()=>{e.modelValue!=null||n.value||(b.value=e.permanent||!c.value)});const{isDragging:d,dragProgress:E,dragStyles:M}=Ue({isActive:b,isTemporary:n,width:_,touchless:z(e,"touchless"),position:o}),Y=y(()=>{const p=n.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):_.value;return d.value?p*E.value:p}),{layoutItemStyles:I,layoutItemScrimStyles:te}=Be({id:e.name,order:y(()=>parseInt(e.order,10)),position:o,layoutSize:Y,elementSize:_,active:y(()=>b.value||d.value),disableTransitions:y(()=>d.value),absolute:y(()=>e.absolute||i.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:ae}=$e({rootEl:B,isSticky:i,layoutItemStyles:I}),W=X(y(()=>typeof e.scrim=="string"?e.scrim:null)),ne=y(()=>({...d.value?{opacity:E.value*.2,transition:"none"}:void 0,...te.value}));_e({VList:{bgColor:"transparent"}});function oe(){x.value=!0}function le(){x.value=!1}return Re(()=>{const p=a.image||e.image;return f(H,null,[f(e.tag,q({ref:B,onMouseenter:oe,onMouseleave:le,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":x.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":n.value,"v-navigation-drawer--active":b.value,"v-navigation-drawer--sticky":i.value},m.value,S.value,h.value,v.value,u.value,g.value,e.class],style:[w.value,I.value,M.value,P.value,ae.value,e.style]},V,s),{default:()=>{var O,F,$,A;return[p&&f("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(O=a.image)==null?void 0:O.call(a,{image:e.image}):f("img",{src:e.image,alt:""},null)]),a.prepend&&f("div",{class:"v-navigation-drawer__prepend"},[(F=a.prepend)==null?void 0:F.call(a)]),f("div",{class:"v-navigation-drawer__content"},[($=a.default)==null?void 0:$.call(a)]),a.append&&f("div",{class:"v-navigation-drawer__append"},[(A=a.append)==null?void 0:A.call(a)])]}}),f(De,{name:"fade-transition"},{default:()=>[n.value&&(d.value||b.value)&&!!e.scrim&&f("div",q({class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[ne.value,W.backgroundColorStyles.value],onClick:()=>b.value=!1},V),null)]})])}),{isStuck:N}}}),at={__name:"AdminLayout",setup(e){const r=He(),s=[{to:"/admin/article",text:"文章管理",icon:"mdi-shopping"},{to:"/admin/products",text:"認同卡管理",icon:"mdi-shopping"},{to:"/admin/orders",text:"申請管理",icon:"mdi-list-box"},{to:"/",text:"回首頁",icon:"mdi-home"}],l=y(()=>`https://source.boringavatars.com/beam/120/${r.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`);return(a,t)=>{const m=Ye("RouterView");return U(),Z(H,null,[f(Ge,{permanent:""},{default:D(()=>[f(j,null,{default:D(()=>[f(G,{"prepend-avatar":l.value,title:Ie(r).account},null,8,["prepend-avatar","title"])]),_:1}),f(Fe),f(j,null,{default:D(()=>[(U(),Z(H,null,Ne(s,h=>f(G,{key:h.to,to:h.to,title:h.text,"prepend-icon":h.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),f(Oe,null,{default:D(()=>[f(m)]),_:1})],64)}}};export{at as default};