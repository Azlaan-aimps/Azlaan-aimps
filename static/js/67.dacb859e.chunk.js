(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[67],{643:function(e,t,r){},644:function(e,t,r){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(d){c=!0,a=d}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},957:function(e,t,r){"use strict";r.r(t);var n=r(645),c=r(1),a=r.n(c),o=r(646),i=r(651),d=r.n(i),s=(r(643),r(644)),u=r(18),l=r(29),j={placeholder:"Search here...",label:"Search:  "},b={label:"Rows:",values:[5,10,25,50,75,100]},h=[{key:"SI No."},{key:"Product Name"},{key:"Product Price"},{key:"Product Quantity"}];t.default=function(e){var t=e.location.state.data.item.OrderId,r=e.location.state.data.item.subOrderPkid,i=Object(c.useState)(),f=Object(n.a)(i,2),m=f[0],O=f[1],p=Object(u.g)();return a.a.useEffect((function(){d()({method:"GET",url:s.a+"/GetProductItemBySuborderIdAndOrderId/"+t+"/"+r,headers:{"content-type":"application/json"},params:{language_code:"en"}}).then((function(e){O(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)("div",{children:Object(l.jsxs)(o.M,{children:[Object(l.jsx)(o.j,{md:"2"}),Object(l.jsx)(o.j,{md:"12",children:Object(l.jsx)(o.e,{children:Object(l.jsxs)(o.f,{children:[Object(l.jsx)(o.M,{children:Object(l.jsx)(o.j,{md:"1",children:Object(l.jsx)(o.d,{color:"danger",size:"sm",onClick:function(){return p.goBack()},children:"Back"})})}),Object(l.jsx)("br",{}),Object(l.jsx)(o.M,{children:Object(l.jsx)(o.j,{children:Object(l.jsxs)(o.e,{children:[Object(l.jsx)(o.i,{children:"Sub Orders Details"}),Object(l.jsx)(o.f,{children:Object(l.jsx)(o.m,{items:m,fields:h,striped:!0,itemsPerPage:5,pagination:!0,sorter:!0,size:"sm",tableFilter:j,itemsPerPageSelect:b,scopedSlots:{"SI No.":function(e){return Object(l.jsx)("td",{children:e.id})},"Product Name":function(e){return Object(l.jsx)("td",{children:e.productName})},"Product Price":function(e){return Object(l.jsx)("td",{children:e.productPrice})},"Product Quantity":function(e){return Object(l.jsx)("td",{children:e.productQuantity})}}})})]})})})]})})}),Object(l.jsx)(o.j,{md:"2"})]})})}}}]);
//# sourceMappingURL=67.dacb859e.chunk.js.map