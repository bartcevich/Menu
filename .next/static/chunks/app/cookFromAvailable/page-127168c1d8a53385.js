(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{3512:function(e,l,a){Promise.resolve().then(a.bind(a,350))},350:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return i}});var r=a(9268),n=a(6006),t=a(2173),o=a(4946),u=a.n(o),s=a(4943);let c=[{value:"Выберите ингридиент",label:"Выберите ингридиент"},{value:"Помидоры гр",label:"Помидоры"},{value:"Консервированный горошек гр",label:"Консервированный горошек"},{value:"Крабовые палочки гр",label:"Крабовые палочки"},{value:"Рыба гр",label:"Рыба"},{value:"Селедка соленая гр",label:"Селедка соленая"},{value:"Сосиски гр",label:"Сосиски"},{value:"Ветчина гр",label:"Ветчина"},{value:"Грудинка гр",label:"Грудинка"},{value:"Курица гр",label:"Курица"},{value:"Куриные крылья гр",label:"Куриные крылья"},{value:"Куриное филе гр",label:"Куриное филе"},{value:"Пельмени гр",label:"Пельмени"},{value:"Свинина гр",label:"Свинина"},{value:"Свиной фарш гр",label:"Свиной фарш"},{value:"Свиные ребра гр",label:"Свиные ребра"},{value:"Сало гр",label:"Сало"},{value:"Говядина гр",label:"Говядина"}];function i(){let{userChoice:e,setUserChoice:l}=(0,n.useContext)(t.IngredientsContext),a=(0,s.GQ)(),o=(0,s.aR)(),i=(0,s.C2)(),f=(0,s.R7)(),v=(0,s.Gk)(),[p,b]=(0,n.useState)(""),[_,d]=(0,n.useState)("");return(0,n.useEffect)(()=>{let e=a.filter(e=>e.value.hasOwnProperty(_)),l=o.filter(e=>e.value.hasOwnProperty(_)),r=i.filter(e=>e.value.hasOwnProperty(_)),n=f.filter(e=>e.value.hasOwnProperty(_)),t=v.filter(e=>e.value.hasOwnProperty(_)),u=e.map(e=>e.label),s=l.map(e=>e.label),c=r.map(e=>e.label),p=n.map(e=>e.label),d=t.map(e=>e.label);b('Из "'.concat(_,'" можно приготовить: \n        ').concat(u.join(", "),"\n        ").concat(s.join(", "),"\n        ").concat(c.join(", "),"\n        ").concat(p.join(", "),"\n        ").concat(d.join(", ")))},[a,_]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:u().wrapper,children:[(0,r.jsx)("h2",{children:"Выберите главный ингридиент для приготовления"}),(0,r.jsx)("select",{className:"formControl ".concat(_?"formError":""),onChange:e=>{let l=e.target.value;d(l)},value:_,id:"contactAnswer",name:"answer",children:c.map(e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value))}),p]})})}},4946:function(e){e.exports={fontHelveticaNeueCyr:"HelveticaNeueCyr,sans-serif",fontBarlow:"Barlow,sans-serif",colorRedLight:"#ef233c",colorRedDark:"#d90429",wrapper:"styles_wrapper__AFFql"}},3177:function(e,l,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=a(6006),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,l,a){var r,t={},c=null,i=null;for(r in void 0!==a&&(c=""+a),void 0!==l.key&&(c=""+l.key),void 0!==l.ref&&(i=l.ref),l)o.call(l,r)&&!s.hasOwnProperty(r)&&(t[r]=l[r]);if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===t[r]&&(t[r]=l[r]);return{$$typeof:n,type:e,key:c,ref:i,props:t,_owner:u.current}}l.Fragment=t,l.jsx=c,l.jsxs=c},9268:function(e,l,a){"use strict";e.exports=a(3177)}},function(e){e.O(0,[683,253,769,744],function(){return e(e.s=3512)}),_N_E=e.O()}]);