(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3417:function(e,t,n){Promise.resolve().then(n.bind(n,1634)),Promise.resolve().then(n.bind(n,443))},443:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var s=n(9268),a=n(6006),l=n(2173),r=n(8302),i=n.n(r),c=n(982),o=n.n(c),u=n(9133),d=n.n(u),_=n(1768),m=n.n(_),x=n(3380),y=n(9),h=e=>{let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),[r,i]=(0,a.useState)({}),[c,o]=(0,a.useState)({menuText:""}),u=()=>{o(t["".concat(e.day,"_nameMenu")]||{menuText:""});let n=t["".concat(e.day,"_feature")]||{},s=Object.values(n).map(e=>e.ingredients).flat();i(s.reduce((e,t)=>{let[n,s]=t;return e.hasOwnProperty(n)?e[n]+=s:e[n]=s,e},{}))};(0,a.useEffect)(()=>{"object"==typeof t&&null!==t&&Object.keys(t).length>0&&u()},[t]);let[d,_]=(0,a.useState)(!1),h=(0,a.useRef)(null),[j,p]=(0,a.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:m().container,children:[(0,s.jsxs)("h3",{children:["Cписок ",Object.values(c)]}),(0,s.jsx)("button",{className:m().handleIngredients,onClick:()=>{p(e=>!e)},children:(0,s.jsx)(x.G,{icon:y.yYj})}),j&&(0,s.jsx)("button",{className:m().handleCopy,onClick:()=>{if(h.current){let e=Object.entries(r).map(e=>{let[t,n]=e;return"".concat(t,": ").concat(n)}).join(",\n");h.current.value=e,h.current.select(),document.execCommand("copy"),_(!0),setTimeout(()=>{_(!1)},5e3)}},children:(0,s.jsx)(x.G,{icon:y.kZ_})}),d&&(0,s.jsx)("div",{className:m().tooltip,children:"Cписок скопирован!"})]}),j&&(0,s.jsxs)("div",{className:m().buyForDay,children:[Object.entries(r).map(e=>{let[t,n]=e;return(0,s.jsxs)("div",{children:[t,": ",n]},t)}),(0,s.jsx)("textarea",{ref:h,style:{position:"absolute",left:"-9999px"},readOnly:!0})]})]})},j=n(7120),p=n.n(j),g=n(4943),b=e=>{let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),r=(0,g.C2)(),[i,c]=(0,a.useState)(""),[o,u]=(0,a.useState)([]),[d,_]=(0,a.useState)(""),[m,x]=(0,a.useState)(1),[y,h]=(0,a.useState)(0),[j,b]=(0,a.useState)(""),f={},v=()=>{f=t["".concat(e.day,"_feature")]||{}},A=()=>{if("object"==typeof f&&null!==f&&Object.keys(f).length>0){let e=Object.values(f),t=e[0],n=t.label;e.length>5&&n&&delete f[n]}},C={},N=()=>{let e={[i]:{label:i,numberServings:m,ingredients:o.map(e=>{let[t,n]=e;return[t,n*m]}),image:d}};C={...f,...e}},S=()=>{n(t=>({...t,["".concat(e.day,"_feature")]:{...C}}))};return(0,a.useEffect)(()=>{""!==i&&(j!==i||y!==m)&&(b(i),h(m),v(),A(),N(),S())},[i,m,j,y]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:p().container_top,children:[(0,s.jsx)("div",{className:p().image,children:!!d&&(0,s.jsx)("img",{src:d,alt:"Image"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:p().container,children:(0,s.jsxs)("select",{onChange:e=>{let t=e.target.value,n=r.find(e=>e.label===t);n&&(c(t),_(n.Image),u(Object.entries(n.value)))},className:p().container_select,children:[(0,s.jsx)("option",{value:"",children:"Супы"}),r.map((e,t)=>(0,s.jsx)("option",{value:e.label,children:e.label},t))]})}),(0,s.jsxs)("div",{className:p().container_button,children:[(0,s.jsx)("div",{className:p().container_text,children:"количество порций"}),(0,s.jsx)("div",{className:p().button,onClick:()=>x(m<2?1:m-1),children:"-"}),(0,s.jsx)("div",{className:p().button2,children:m}),(0,s.jsx)("div",{className:p().button,onClick:()=>x(m>99?100:m+1),children:"+"})]})]})]}),(0,s.jsx)("div",{className:p().container_ingredients,children:o.map((e,t)=>{let[n,a]=e;return(0,s.jsx)("div",{children:"".concat(n,": ").concat(a*m)},t)})})]})},f=n(2273),v=n.n(f),A=e=>{let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),r=(0,g.R7)(),[i,c]=(0,a.useState)(""),[o,u]=(0,a.useState)([]),[d,_]=(0,a.useState)(""),[m,x]=(0,a.useState)(1),[y,h]=(0,a.useState)(0),[j,p]=(0,a.useState)(""),b={},f=()=>{b=t["".concat(e.day,"_feature")]||{}},A=()=>{if("object"==typeof b&&null!==b&&Object.keys(b).length>0){let e=Object.values(b),t=e[0],n=t.label;e.length>5&&n&&delete b[n]}},C={},N=()=>{let e={[i]:{label:i,numberServings:m,ingredients:o.map(e=>{let[t,n]=e;return[t,n*m]}),image:d}};C={...b,...e}},S=()=>{n(t=>({...t,["".concat(e.day,"_feature")]:{...C}}))};return(0,a.useEffect)(()=>{""!==i&&(j!==i||y!==m)&&(p(i),h(m),f(),A(),N(),S())},[i,m,j,y]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:v().container_top,children:[(0,s.jsx)("div",{className:v().image,children:!!d&&(0,s.jsx)("img",{src:d,alt:"Image"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:v().container,children:(0,s.jsxs)("select",{onChange:e=>{let t=e.target.value,n=r.find(e=>e.label===t);n&&(c(t),_(n.Image),u(Object.entries(n.value)))},className:v().container_select,children:[(0,s.jsx)("option",{value:"",children:"Салаты"}),r.map((e,t)=>(0,s.jsx)("option",{value:e.label,children:e.label},t))]})}),(0,s.jsxs)("div",{className:v().container_button,children:[(0,s.jsx)("div",{className:v().container_text,children:"количество порций"}),(0,s.jsx)("div",{className:v().button,onClick:()=>x(m<2?1:m-1),children:"-"}),(0,s.jsx)("div",{className:v().button2,children:m}),(0,s.jsx)("div",{className:v().button,onClick:()=>x(m>99?100:m+1),children:"+"})]})]})]}),(0,s.jsx)("div",{className:v().container_ingredients,children:o.map((e,t)=>{let[n,a]=e;return(0,s.jsx)("div",{children:"".concat(n,": ").concat(a*m)},t)})})]})},C=n(7072),N=n.n(C),S=e=>{let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),r=(0,g.Gk)(),[i,c]=(0,a.useState)(""),[o,u]=(0,a.useState)([]),[d,_]=(0,a.useState)(""),[m,x]=(0,a.useState)(1),[y,h]=(0,a.useState)(0),[j,p]=(0,a.useState)(""),b={},f=()=>{b=t["".concat(e.day,"_feature")]||{}},v=()=>{if("object"==typeof b&&null!==b&&Object.keys(b).length>0){let e=Object.values(b),t=e[0],n=t.label;e.length>5&&n&&delete b[n]}},A={},C=()=>{let e={[i]:{label:i,numberServings:m,ingredients:o.map(e=>{let[t,n]=e;return[t,n*m]}),image:d}};A={...b,...e}},S=()=>{n(t=>({...t,["".concat(e.day,"_feature")]:{...A}}))};return(0,a.useEffect)(()=>{""!==i&&(j!==i||y!==m)&&(p(i),h(m),f(),v(),C(),S())},[i,m,j,y]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:N().container_top,children:[(0,s.jsx)("div",{className:N().image,children:!!d&&(0,s.jsx)("img",{src:d,alt:"Image"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:N().container,children:(0,s.jsxs)("select",{onChange:e=>{let t=e.target.value,n=r.find(e=>e.label===t);n&&(c(t),_(n.Image),u(Object.entries(n.value)))},className:N().container_select,children:[(0,s.jsx)("option",{value:"",children:"Выпечка и десерты"}),r.map((e,t)=>(0,s.jsx)("option",{value:e.label,children:e.label},t))]})}),(0,s.jsxs)("div",{className:N().container_button,children:[(0,s.jsx)("div",{className:N().container_text,children:"количество порций"}),(0,s.jsx)("div",{className:N().button,onClick:()=>x(m<2?1:m-1),children:"-"}),(0,s.jsx)("div",{className:N().button2,children:m}),(0,s.jsx)("div",{className:N().button,onClick:()=>x(m>99?100:m+1),children:"+"})]})]})]}),(0,s.jsx)("div",{className:N().container_ingredients,children:o.map((e,t)=>{let[n,a]=e;return(0,s.jsx)("div",{children:"".concat(n,": ").concat(a*m)},t)})})]})},I=n(26),k=n.n(I),w=e=>{let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),r=(0,g.GQ)(),[i,c]=(0,a.useState)(""),[o,u]=(0,a.useState)([]),[d,_]=(0,a.useState)(""),[m,x]=(0,a.useState)(1),[y,h]=(0,a.useState)(0),[j,p]=(0,a.useState)(""),b={},f=()=>{b=t["".concat(e.day,"_feature")]||{}},v=()=>{if("object"==typeof b&&null!==b&&Object.keys(b).length>0){let e=Object.values(b),t=e[0],n=t.label;e.length>5&&n&&delete b[n]}},A={},C=()=>{let e={[i]:{label:i,numberServings:m,ingredients:o.map(e=>{let[t,n]=e;return[t,n*m]}),image:d}};A={...b,...e}},N=()=>{n(t=>({...t,["".concat(e.day,"_feature")]:{...A}}))};return(0,a.useEffect)(()=>{""!==i&&(j!==i||y!==m)&&(p(i),h(m),f(),v(),C(),N())},[i,m,j,y]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:k().container_top,children:[(0,s.jsx)("div",{className:k().image,children:!!d&&(0,s.jsx)("img",{src:d,alt:"Image"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:k().container,children:(0,s.jsxs)("select",{onChange:e=>{let t=e.target.value,n=r.find(e=>e.label===t);n&&(c(t),_(n.Image),u(Object.entries(n.value)))},className:k().container_select,children:[(0,s.jsx)("option",{value:"",children:"Вторые блюда"}),r.map((e,t)=>(0,s.jsx)("option",{value:e.label,children:e.label},t))]})}),(0,s.jsxs)("div",{className:k().container_button,children:[(0,s.jsx)("div",{className:k().container_text,children:"количество порций"}),(0,s.jsx)("div",{className:k().button,onClick:()=>x(m<2?1:m-1),children:"-"}),(0,s.jsx)("div",{className:k().button2,children:m}),(0,s.jsx)("div",{className:k().button,onClick:()=>x(m>99?100:m+1),children:"+"})]})]})]}),(0,s.jsx)("div",{className:k().container_ingredients,children:o.map((e,t)=>{let[n,a]=e;return(0,s.jsx)("div",{children:"".concat(n,": ").concat(a*m)},t)})})]})},E=n(3348),R=n.n(E),B=e=>{let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),r=(0,g.aR)(),[i,c]=(0,a.useState)(""),[o,u]=(0,a.useState)([]),[d,_]=(0,a.useState)(""),[m,x]=(0,a.useState)(1),[y,h]=(0,a.useState)(0),[j,p]=(0,a.useState)(""),b={},f=()=>{b=t["".concat(e.day,"_feature")]||{}},v=()=>{if("object"==typeof b&&null!==b&&Object.keys(b).length>0){let e=Object.values(b),t=e[0],n=t.label;e.length>5&&n&&delete b[n]}},A={},C=()=>{let e={[i]:{label:i,numberServings:m,ingredients:o.map(e=>{let[t,n]=e;return[t,n*m]}),image:d}};A={...b,...e}},N=()=>{n(t=>({...t,["".concat(e.day,"_feature")]:{...A}}))};return(0,a.useEffect)(()=>{""!==i&&(j!==i||y!==m)&&(p(i),h(m),f(),v(),C(),N())},[i,m,j,y]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:R().container_top,children:[(0,s.jsx)("div",{className:R().image,children:!!d&&(0,s.jsx)("img",{src:d,alt:"Image"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:R().container,children:(0,s.jsxs)("select",{onChange:e=>{let t=e.target.value,n=r.find(e=>e.label===t);n&&(c(t),_(n.Image),u(Object.entries(n.value)))},className:R().container_select,children:[(0,s.jsx)("option",{value:"",children:"Гарниры"}),r.map((e,t)=>(0,s.jsx)("option",{value:e.label,children:e.label},t))]})}),(0,s.jsxs)("div",{className:R().container_button,children:[(0,s.jsx)("div",{className:R().container_text,children:"количество порций"}),(0,s.jsx)("div",{className:R().button,onClick:()=>x(m<2?1:m-1),children:"-"}),(0,s.jsx)("div",{className:R().button2,children:m}),(0,s.jsx)("div",{className:R().button,onClick:()=>x(m>99?100:m+1),children:"+"})]})]})]}),(0,s.jsx)("div",{className:R().container_ingredients,children:o.map((e,t)=>{let[n,a]=e;return(0,s.jsx)("div",{children:"".concat(n,": ").concat(a*m)},t)})})]})},O=n(7348),D=n.n(O),H=e=>{let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),[r,i]=(0,a.useState)([]),c={},o=()=>{c=t["".concat(e.day,"_feature")]||{};let n=Object.values(c),s=n.slice(-5);i(s)};(0,a.useEffect)(()=>{"object"==typeof t&&null!==t&&Object.keys(t).length>0&&o()},[t,e.day]);let u=e=>{let t=r.map((t,n)=>n===e?{...t,showIngredients:!t.showIngredients}:t);i(t)},d=()=>{n(t=>({...t,["".concat(e.day,"_feature")]:{...c}}))},_=e=>{o(),delete c[e],d()},[m,x]=(0,a.useState)(null),y=e=>{x(m===e?null:e)},h=(e,t,n)=>{let s={[e.label]:{label:e.label,numberServings:n,ingredients:t,image:e.image}};o(),c={...c,...s},d()},j=e=>{let t=e.numberServings,n=e.ingredients,s=n.map(e=>{let[n,s]=e;return[n,s/t]}),a=s.map(e=>{let[n,s]=e;return[n,s*(t-1)]});h(e,a,t<2?1:t-1)},p=e=>{let t=e.numberServings,n=e.ingredients,s=n.map(e=>{let[n,s]=e;return[n,s/t]}),a=s.map(e=>{let[n,s]=e;return[n,s*(t+1)]});h(e,a,t>99?100:t+1)};return(0,s.jsx)(s.Fragment,{children:r.map((e,t)=>(0,s.jsx)("div",{className:D().menuItem,children:(0,s.jsxs)("div",{className:D().container,children:[(0,s.jsx)("div",{className:D().image,children:(0,s.jsx)("img",{src:e.image,alt:"Image"})}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:D().label,children:[(0,s.jsx)("span",{children:e.label}),(0,s.jsx)("span",{children:" Для "}),(0,s.jsxs)("span",{className:D().numberServings,children:[(0,s.jsx)("button",{onClick:()=>j(e),children:"-"}),(0,s.jsx)("span",{children:" "}),e.numberServings,(0,s.jsx)("span",{children:" "}),(0,s.jsx)("button",{onClick:()=>p(e),children:"+"})]}),1===e.numberServings?"человека.":"человек.",(0,s.jsxs)("div",{className:D().container_button,children:[m===t&&(0,s.jsxs)("div",{className:D().button,children:[(0,s.jsx)("button",{onClick:()=>u(t),children:e.showIngredients?"Cвернуть.  ":"Смотреть состав.  "}),(0,s.jsx)("button",{onClick:()=>_(e.label),children:"Удалить."})]}),(0,s.jsx)("div",{className:D().dropdownIcon,onClick:()=>y(t),children:"⋮"})]}),m===t&&e.showIngredients&&(0,s.jsx)("div",{className:D().ingredientCourse,children:(0,s.jsx)("ul",{children:e.ingredients.map((e,t)=>(0,s.jsx)("li",{children:e},t))})})]})})]})},t))})},F=n(8318),T=n.n(F);function G(e){let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),[r,i]=(0,a.useState)({menuText:""}),[c,o]=(0,a.useState)(!1),u=(0,a.useRef)(),d=()=>{i(t["".concat(e.day,"_nameMenu")]||{menuText:""})};(0,a.useEffect)(()=>{!1===c&&"object"==typeof t&&null!==t&&Object.keys(t).length>0&&(o(t),d())},[c,t]);let _=()=>{""!==r.menuText&&(u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{n(t=>({...t,["".concat(e.day,"_nameMenu")]:{...r}}))},1e3))};return(0,a.useEffect)(()=>(_(),()=>{u.current&&clearTimeout(u.current)}),[r]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:T().container_top,children:(0,s.jsx)("input",{className:T().container_input,type:"text",name:"menuText",value:r.menuText||"",maxLength:27,onChange:e=>{let t={...r,[e.target.name]:e.target.value};i(t),console.log(t)},placeholder:"Меню для..."})})})}var Q=n(4421),z=n.n(Q);function L(e){let{userChoice:t,setUserChoice:n}=(0,a.useContext)(l.IngredientsContext),[r,i]=(0,a.useState)({menuText:""}),[c,o]=(0,a.useState)(!1),u=(0,a.useRef)(),d=()=>{i(t["".concat(e.day,"_comment")]||{menuText:""})};(0,a.useEffect)(()=>{!1===c&&"object"==typeof t&&null!==t&&Object.keys(t).length>0&&(o(t),d())},[c,t]);let _=()=>{""!==r.menuText&&(u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{n(t=>({...t,["".concat(e.day,"_comment")]:{...r}}))},1e3))};return(0,a.useEffect)(()=>(_(),()=>{u.current&&clearTimeout(u.current)}),[r]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:z().container_top,children:(0,s.jsx)("textarea",{className:z().container_input1,name:"menuText",value:r.menuText||"",onChange:e=>{let t={...r,[e.target.name]:e.target.value};i(t)},placeholder:"Kомментарий"})})})}function M(e){let[t,n]=(0,a.useState)(!0),l=e.day;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:d().container_top,children:[(0,s.jsx)(G,{day:l}),(0,s.jsx)("div",{className:d().container_button,children:(0,s.jsx)("button",{type:"button",className:d().menuGroup,onClick:()=>{n(e=>!e)},children:t?"Возврат к меню":"Тип блюда"})}),t&&(0,s.jsxs)("div",{className:d().container_popup,children:[(0,s.jsx)(w,{day:l}),(0,s.jsx)(B,{day:l}),(0,s.jsx)(b,{day:l}),(0,s.jsx)(A,{day:l}),(0,s.jsx)(S,{day:l})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(H,{day:l})}),(0,s.jsx)(L,{day:l}),(0,s.jsx)("div",{children:(0,s.jsx)(h,{day:l})})]})}var U=n(6116),J=n.n(U);function P(e){let[t,n]=(0,a.useState)(!1),l=e.day;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:J().container_top,children:[(0,s.jsx)(G,{day:l}),(0,s.jsx)("button",{type:"button",className:J().menuGroup,onClick:()=>{n(e=>!e)},children:t?"Возврат к меню":"Тип блюда"}),t&&(0,s.jsxs)("div",{className:J().container_popup,children:[(0,s.jsx)(w,{day:l}),(0,s.jsx)(B,{day:l}),(0,s.jsx)(b,{day:l}),(0,s.jsx)(A,{day:l}),(0,s.jsx)(S,{day:l})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)(H,{day:l})}),(0,s.jsx)(L,{day:l}),(0,s.jsx)(h,{day:l})]})}var Z=n(930),K=n.n(Z);function Y(){let{userChoice:e,setUserChoice:t}=(0,a.useContext)(l.IngredientsContext),[n,r]=(0,a.useState)({}),i=()=>{let t={...e.day1_feature||{},...e.day2_feature||{},...e.day3_feature||{},...e.day4_feature||{},...e.day5_feature||{},...e.day6_feature||{},...e.day7_feature||{}},n=Object.values(t).map(e=>e.ingredients).flat();r(n.reduce((e,t)=>{let[n,s]=t;return e.hasOwnProperty(n)?e[n]+=s:e[n]=s,e},{}))};(0,a.useEffect)(()=>{"object"==typeof e&&null!==e&&Object.keys(e).length>0&&i()},[e]);let[c,o]=(0,a.useState)(!1),u=(0,a.useRef)(null),[d,_]=(0,a.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:K().container,children:[(0,s.jsx)("h2",{children:"Oбщий список:"}),(0,s.jsx)("button",{className:K().handleIngredients,onClick:()=>{_(e=>!e)},children:(0,s.jsx)(x.G,{icon:y.yYj})}),d&&(0,s.jsx)("button",{className:K().handleCopy,onClick:()=>{if(u.current){let e=Object.entries(n).map(e=>{let[t,n]=e;return"".concat(t,": ").concat(n)}).join(",\n");u.current.value=e,u.current.select(),document.execCommand("copy"),o(!0),setTimeout(()=>{o(!1)},5e3)}},children:(0,s.jsx)(x.G,{icon:y.kZ_})}),c&&(0,s.jsx)("div",{className:K().tooltip,children:"Cписок скопирован!"})]}),d&&(0,s.jsxs)("div",{className:K().buyForDay,children:[Object.entries(n).map(e=>{let[t,n]=e;return(0,s.jsxs)("div",{children:[t,": ",n]},t)}),(0,s.jsx)("textarea",{ref:u,style:{position:"absolute",left:"-9999px"},readOnly:!0})]})]})}function V(){let{userChoice:e,setUserChoice:t}=(0,a.useContext)(l.IngredientsContext),[n,r]=(0,a.useState)(0),i=(0,a.useCallback)(()=>{let s=e.letterInMail||{},a=e.formData||{};if("true"!==s.mail&&1===n){let e=JSON.stringify(a);fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:e}).then(e=>e.json()).then(e=>{console.log("promise=",e),!0===e.success?(r(2),t(e=>({...e,letterInMail:{mail:"true"}}))):r(1)}).catch(e=>{console.log(e)})}},[e,n,t]);return(0,a.useEffect)(()=>{"object"==typeof e&&null!==e&&Object.keys(e).length>0&&(r(1),i())},[n]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)("div",{className:o().column1,children:[(0,s.jsx)("div",{className:o().menuGroups1,children:(0,s.jsx)(M,{day:"day1"})}),(0,s.jsx)("div",{className:o().menuGroups2,children:(0,s.jsx)(P,{day:"day2"})}),(0,s.jsx)("div",{className:o().menuGroups3,children:(0,s.jsx)(P,{day:"day3"})}),(0,s.jsx)("div",{className:o().menuGroups4,children:(0,s.jsx)(P,{day:"day4"})}),(0,s.jsx)("div",{className:o().menuGroups5,children:(0,s.jsx)(P,{day:"day5"})}),(0,s.jsx)("div",{className:o().menuGroups6,children:(0,s.jsx)(P,{day:"day6"})}),(0,s.jsx)("div",{className:o().menuGroups7,children:(0,s.jsx)(P,{day:"day7"})})]}),(0,s.jsx)("div",{className:o().column2,children:(0,s.jsx)("div",{className:o().menuGroups8,children:(0,s.jsx)(Y,{})})})]})})}var W=n(6394),X=n.n(W),q={src:"/_next/static/media/test.55747cbe.jpg",height:158,width:309,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKuCv//EABwQAAICAgMAAAAAAAAAAAAAAAEDAhEAEiJxof/aAAgBAQABPwCCTuwlzTzEqvzrP//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAWEQADAAAAAAAAAAAAAAAAAAAAAjL/2gAIAQMBAT8Aaj//2Q==",blurWidth:8,blurHeight:4};let $=[{value:"Enter your answer",label:"Enter your answer"},{value:"голубь",label:"голубь"},{value:"сорока",label:"сорока"},{value:"ворона",label:"ворона"}];var ee=()=>{let{userChoice:e,setUserChoice:t}=(0,a.useContext)(l.IngredientsContext),[n,r]=(0,a.useState)(new Date().toDateString()),[c,o]=(0,a.useState)(""),[u,d]=(0,a.useState)(""),[_,m]=(0,a.useState)(!1),[x,y]=(0,a.useState)(!1),[h,j]=(0,a.useState)(!1),[p,g]=(0,a.useState)("");(0,a.useEffect)(()=>{if("object"==typeof e&&null!==e&&Object.keys(e).length>0){let t=e.formData||{};j(t.today===n)}},[e]);let b=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),f=e=>/^[^\s]{0,20}$/.test(e),v=()=>{t(e=>({...e,formData:{email:c,key:u,answer:p,access_key:"60829245-4068-4083-bc62-2704f53261e7",today:n},letterInMail:{mail:"false"}}))};return(0,s.jsx)(s.Fragment,{children:h?(0,s.jsx)(V,{}):(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),_&&x&&"сорока"===p?(v(),j(!0)):console.log("Invalid answer, email or password")},className:"".concat(i().containerForm," ").concat(h?"animate-slide":""),children:[(0,s.jsx)("h3",{children:"Регистрация."}),(0,s.jsxs)("label",{children:[(0,s.jsx)("h3",{children:"Введите адрес вашей электронной почты"}),(0,s.jsx)("input",{type:"email",value:c,onInput:e=>{let t=e.target.value;o(t),m(b(t))},required:!0,id:"email",placeholder:"Enter a valid email address",autoComplete:"email"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("label",{children:[(0,s.jsx)("h3",{children:"Введите ваш пароль"}),(0,s.jsx)("input",{type:"password",value:u,onInput:e=>{let t=e.target.value;d(t),y(f(t))},required:!0,id:"password",placeholder:"".concat(""===u?"Enter your password":"password"),autoComplete:"current-password"})]}),(0,s.jsx)("br",{}),(0,s.jsx)("h3",{children:"Выберите правильный ответ"}),(0,s.jsx)("div",{className:i().imageTest,children:(0,s.jsx)(X(),{src:q,alt:"image"})}),(0,s.jsx)("select",{className:"formControl ".concat(p?"formError":""),onChange:e=>{let t=e.target.value;g(t)},value:p,id:"contactAnswer",name:"answer",placeholder:""===p?"Enter your answer":"",children:$.map(e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value))}),(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)("div",{className:i().button,children:_?x?"сорока"!==p?"Выберите ответ":"Войти":"Создайте пароль":"Введите вашу почту"})})]})})}},2173:function(e,t,n){"use strict";n.r(t),n.d(t,{IngredientsContext:function(){return l},MenuProvider:function(){return r}});var s=n(9268),a=n(6006);let l=(0,a.createContext)({userChoice:{},setUserChoice:()=>{}}),r=e=>{let{children:t}=e,[n,r]=(0,a.useState)({}),i=(0,a.useMemo)(()=>({userChoice:n,setUserChoice:r}),[n,r]);return(0,a.useEffect)(()=>{let e=localStorage.getItem("ingredientHistory5");if(e){let t=JSON.parse(e);r(t)}},[]),(0,a.useEffect)(()=>{"object"==typeof n&&null!==n&&Object.keys(n).length>0&&localStorage.setItem("ingredientHistory5",JSON.stringify(n))},[n]),console.log("userChoice=",n),(0,s.jsx)(l.Provider,{value:i,children:t})}},1768:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container:"styles_container__nrnA9",buyForDay:"styles_buyForDay__htWIS",handleIngredients:"styles_handleIngredients__W2Wsw",handleCopy:"styles_handleCopy__4aG_E",tooltip:"styles_tooltip__JH_Xb"}},930:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container:"styles_container__EoMZo",buyForDay:"styles_buyForDay__UyjW8",handleIngredients:"styles_handleIngredients__a1jCx",handleCopy:"styles_handleCopy__tyudG",tooltip:"styles_tooltip__Ji8II"}},7072:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__Fupg_",container:"styles_container__qXbul",container_select:"styles_container_select__jqwuE",container_button:"styles_container_button__Y2M_s",button:"styles_button__08hd5",button2:"styles_button2__9UvyH",container_text:"styles_container_text__AUfA_",container_ingredients:"styles_container_ingredients__RstTp",container_popup:"styles_container_popup__hX5bV",container_Summarized:"styles_container_Summarized__7JT5I"}},8302:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429","animate-slide":"styles_animate-slide__4XcFj",slideIn:"styles_slideIn__8_QdL",containerForm:"styles_containerForm__3HubK",imageTest:"styles_imageTest__Ae7cL",button:"styles_button__ox83s"}},9133:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__obLDS",container_popup:"styles_container_popup__yS0Da",container_popup2:"styles_container_popup2__HdBzi",buyForDay:"styles_buyForDay__ZfzTB",handleIngredients:"styles_handleIngredients__VXhXi",handleCopy:"styles_handleCopy__E4QiS",tooltip:"styles_tooltip__z2IP3",menuGroup:"styles_menuGroup__LJkb9"}},6116:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__NYIZS",container_popup:"styles_container_popup__jLfpf",container_popup2:"styles_container_popup2__StMe3",buyForDay:"styles_buyForDay__utxQx",handleIngredients:"styles_handleIngredients__8kZ4n",handleCopy:"styles_handleCopy__Qio6C",tooltip:"styles_tooltip__QA83h",menuGroup:"styles_menuGroup__LS7t7"}},4421:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__mHrQH"}},8318:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__g3hgh",container_input:"styles_container_input__YYa9e"}},2273:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top____arV",container:"styles_container__ASVGI",container_select:"styles_container_select__RD8DG",container_button:"styles_container_button__nbL5h",button:"styles_button__8mbzK",button2:"styles_button2__XHv4s",container_text:"styles_container_text__wnJx0",container_ingredients:"styles_container_ingredients__gHke_",container_popup:"styles_container_popup__EN_l2",container_Summarized:"styles_container_Summarized__ZKSpM"}},7348:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container:"styles_container__1d0lp",image:"styles_image__bZbdI",label:"styles_label__8NWoG",numberServings:"styles_numberServings___XMUg",container_button:"styles_container_button__iUElW",button:"styles_button__SRv5P",dropdownIcon:"styles_dropdownIcon__VUEcF",ingredientCourse:"styles_ingredientCourse__zIXMi",container_text:"styles_container_text__W6BY3",container_popup:"styles_container_popup__ITUKG",container_Summarized:"styles_container_Summarized__ZoZ2v",handleIngredients:"styles_handleIngredients__zE_dE"}},982:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container:"styles_container__2CT7I",column2:"styles_column2__Rg7EV",column1:"styles_column1__kjk3k",column3:"styles_column3__GOo7d"}},3348:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__9rQpk",container:"styles_container__VJOdl",container_select:"styles_container_select__Nzyrb",container_button:"styles_container_button__dITGn",button:"styles_button__eFyiv",button2:"styles_button2__qhhM4",container_text:"styles_container_text__3ebQc",container_ingredients:"styles_container_ingredients__z1Rv5",container_popup:"styles_container_popup__KtLYA",container_Summarized:"styles_container_Summarized__xysh8"}},7120:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__7OFyz",container:"styles_container__gBl_n",container_select:"styles_container_select__4tZjM",container_button:"styles_container_button__9Jkqm",button:"styles_button__IMy0I",button2:"styles_button2__ax9mk",container_text:"styles_container_text__UCMOZ",container_ingredients:"styles_container_ingredients__JxrpR",container_popup:"styles_container_popup__woY6G",container_Summarized:"styles_container_Summarized__nNm3V"}},26:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",container_top:"styles_container_top__9VNu_",container:"styles_container__fosxZ",container_select:"styles_container_select__RMtbO",container_button:"styles_container_button__UqaQK",button:"styles_button__nZrRs",button2:"styles_button2__zV16J",container_text:"styles_container_text__6gZ9R",container_ingredients:"styles_container_ingredients__2hsWU",container_popup:"styles_container_popup__Wgthz",container_Summarized:"styles_container_Summarized__1c4xw"}},1634:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/background.21449a94.png",height:1028,width:1028,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnUlEQVR42h1P2wrFIAyLzt0d6P7/C89eBhNFRT3GQKG0SZoKY0zdtk3s+w6tNc7zxH3fyDkjhNBUB5ZlQSfhOA5Ya2GMhXMO0zRBzfOMdV0Hib2UEtelUUqBEICstY4hQQKLM56jOzeDTbTWhpP3oZPoIKCoJpNKqpjj+74RMsYIRRVBUkqJyxHueX7w3kN1+8aGb77vy+JHdGCW9gcnlU0o+RpQQwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[957,855,943,253,769,744],function(){return e(e.s=3417)}),_N_E=e.O()}]);