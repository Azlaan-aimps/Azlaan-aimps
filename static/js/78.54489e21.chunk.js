(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[78],{643:function(e,t,r){},644:function(e,t,r){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){c=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},921:function(e,t,r){"use strict";r.r(t);var n=r(645),c=r(1),a=r.n(c),o=r(651),i=r.n(o),s=r(646),d=r(644),u=(r(643),r(18)),l=r(29),j={placeholder:"Search here...",label:"Search"},b={label:"Rows"},h=[{key:"OrderNo"},{key:"Merchant"},{key:"User"},{key:"OrderAmount"},{key:"Discount"},{key:"Items"}];t.default=function(e){var t=Object(c.useState)(),r=Object(n.a)(t,2),o=r[0],f=r[1],O=Object(c.useState)(),m=Object(n.a)(O,2),p=(m[0],m[1]),y=Object(c.useState)(),x=Object(n.a)(y,2),S=(x[0],x[1]);a.a.useEffect((function(){v()}),[]);var v=function(){i()({method:"GET",url:d.a+"/GetVendorOrders/"+e.location.state.data.pkid,headers:{"content-type":"application/json"}}).then((function(e){console.log(e.data),f(e.data),p(e.data[0].pkid),S(e.data[0].OrderPkid)})).catch((function(e){console.log(e)}))},g=Object(u.g)();return Object(l.jsx)("div",{children:Object(l.jsx)(s.M,{children:Object(l.jsx)(s.j,{md:"12",children:Object(l.jsx)(s.e,{children:Object(l.jsxs)(s.f,{children:[Object(l.jsx)("h1",{id:"ccmaster",children:"Vendor's Total Orders"}),Object(l.jsx)(s.M,{children:Object(l.jsx)(s.j,{children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(s.i,{children:"Total Orders"}),Object(l.jsx)(s.f,{children:Object(l.jsx)(s.m,{items:o,fields:h,striped:!0,itemsPerPage:5,pagination:!0,sorter:!0,tableFilter:j,itemsPerPageSelect:b,scopedSlots:{OrderNo:function(e){return Object(l.jsx)("td",{children:e.orderNumber})},Merchant:function(e){return Object(l.jsx)("td",{children:e.Shop})},OrderAmount:function(e){return Object(l.jsx)("td",{children:e.totalAmount})},Items:function(e){return Object(l.jsx)("td",{children:Object(l.jsx)(s.d,{id:"order-list",onClick:function(){g.push("/VendorSubOrderItems",{data:e})},children:e.Items})})}}})})]})})})]})})})})})}}}]);
//# sourceMappingURL=78.54489e21.chunk.js.map