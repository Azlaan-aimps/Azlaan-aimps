(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[83],{643:function(e,t,r){},645:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(d){c=!0,i=d}finally{try{n||null==o.return||o.return()}finally{if(c)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},795:function(e,t,r){"use strict";var n=r(648),c=r(649);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(r(1)),a=(0,n(r(650)).default)(i.createElement("path",{d:"M22 4H2v16h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z"}),"PaymentSharp");t.default=a},964:function(e,t,r){"use strict";r.r(t);var n=r(645),c=r(1),i=r(646),a=(r(643),r(18)),o=r(795),d=r.n(o),s=r(651),u=r.n(s),l=r(29),j=[{key:"SL No"},{key:"Date"},{key:"OrderNo"},{key:"Order Amount"},{key:"Customer"},{key:"Rider"},{key:"Change_Amount"},{key:"Customer_Confirmation"},{key:"Make Payment",_style:{width:"10%"}}],h={placeholder:"Search here...",label:"Search:  "},b={label:"Rows",values:[5,10,25,50,75,100]};t.default=function(){var e=Object(c.useState)(),t=Object(n.a)(e,2),r=t[0],o=t[1],s=Object(a.g)();return Object(c.useEffect)((function(){u.a.get("http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetChangeExchangeRequest").then((function(e){o(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)("div",{children:Object(l.jsx)(i.M,{children:Object(l.jsx)(i.j,{col:"10",children:Object(l.jsx)(i.e,{children:Object(l.jsx)(i.f,{children:Object(l.jsx)(i.M,{children:Object(l.jsx)(i.j,{children:Object(l.jsxs)(i.e,{children:[Object(l.jsx)(i.i,{children:Object(l.jsx)("div",{children:Object(l.jsx)("h1",{id:"ccmaster",children:"Change New Request"})})}),Object(l.jsx)(i.f,{children:Object(l.jsx)(i.m,{items:r,fields:j,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:h,itemsPerPage:4,pagination:!0,size:"sm",itemsPerPageSelect:b,scopedSlots:{"SL No":function(e){return Object(l.jsx)("td",{children:e.id})},"Order Amount":function(e){return Object(l.jsx)("td",{children:e.orderAmount})},Customer:function(e){return Object(l.jsx)("td",{children:e.userName})},Rider:function(e){return Object(l.jsx)("td",{children:e.riderName})},Change_Amount:function(e){return Object(l.jsx)("td",{children:e.Amount})},Customer_Confirmation:function(e){return Object(l.jsx)("td",{children:e.Confirmation})},"Make Payment":function(e){return Object(l.jsx)("td",{children:Object(l.jsx)(i.M,{children:Object(l.jsx)(i.j,{md:"9",children:Object(l.jsx)(i.E,{to:{pathname:"/JazzCashPayment",data:e},children:Object(l.jsx)(d.a,{})})})})})},OrderNo:function(e){return Object(l.jsx)("td",{children:Object(l.jsx)(i.M,{children:Object(l.jsx)(i.j,{md:"9",children:Object(l.jsx)(i.d,{id:"order-list",onClick:function(){s.push("/Change_OrderDetails",{data:e})},children:e.orderNumber})})})})}}})})]})})})})})})})})}}}]);
//# sourceMappingURL=83.96691198.chunk.js.map