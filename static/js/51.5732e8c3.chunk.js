(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[51],{643:function(e,t,r){},644:function(e,t,r){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,i=void 0;try{for(var o,d=e[Symbol.iterator]();!(n=(o=d.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){c=!0,i=s}finally{try{n||null==d.return||d.return()}finally{if(c)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},936:function(e,t,r){"use strict";r.r(t);var n=r(645),c=r(1),i=r.n(c),o=r(651),d=r.n(o),s=r(646),a=(r(643),r(644)),l=r(29),j={placeholder:"Search here...",label:"Search"},u={label:"Rows"},h=[{key:"Sl No."},{key:"Order no"},{key:"Order Date"},{key:"Delivery Address"},{key:"Rider"},{key:"Rider Email"},{key:"Rider Phone"},{key:"Order Amount"},{key:"Rider amount"}];t.default=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),r=t[0],o=t[1],b=Object(c.useState)(""),O=Object(n.a)(b,2),f=O[0],m=O[1],x=Object(c.useState)(""),y=Object(n.a)(x,2),p=y[0],g=y[1],v=i.a.useCallback((function(){d()({method:"GET",url:a.a+"/DashBoardAmountTobeRiders",headers:{"content-type":"application/json"}}).then((function(e){console.log("response:"+e.data),o(e.data)})).catch((function(e){console.log(e)}))}),[]);return i.a.useEffect((function(){v()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(s.M,{children:[Object(l.jsx)(s.j,{md:"12",children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.i,{children:Object(l.jsxs)(s.M,{children:[Object(l.jsxs)(s.j,{md:"2",children:[Object(l.jsx)(s.D,{htmlFor:"nf-email",children:"From"}),Object(l.jsx)(s.y,{type:"date",onChange:function(e){m(e.target.value)},value:f})]}),Object(l.jsxs)(s.j,{md:"2",children:[Object(l.jsx)(s.D,{htmlFor:"nf-email",children:"To"}),Object(l.jsx)(s.y,{type:"date",onChange:function(e){g(e.target.value)},value:p})]}),Object(l.jsx)(s.j,{md:"2",children:Object(l.jsx)(s.d,{size:"sm",color:"info",style:{"margin-top":"28px",width:"100%"},onClick:function(){d()({method:"GET",url:a.a+"/DashBoardRiderByDates/"+f+"/"+p,headers:{"content-type":"application/json"}}).then((function(e){o(e.data)})).catch((function(e){console.log(e)}))},children:"Filter"})}),Object(l.jsx)(s.j,{md:"2",children:Object(l.jsx)(s.d,{size:"sm",color:"danger",style:{"margin-top":"28px",width:"100%"},onClick:function(){m(""),g(""),v()},children:"Reset"})})]})})})}),Object(l.jsx)(s.j,{md:"3"}),Object(l.jsx)(s.j,{md:"6",children:Object(l.jsx)("h1",{id:"ccmaster",children:"Amount To be Given to Riders"})}),Object(l.jsx)(s.j,{md:"3"})]}),Object(l.jsx)("br",{}),Object(l.jsx)(s.M,{children:Object(l.jsx)(s.j,{md:"12",children:Object(l.jsx)(s.e,{children:Object(l.jsx)(s.f,{children:Object(l.jsx)(s.M,{children:Object(l.jsx)(s.j,{children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(s.i,{children:"List of Riders"}),Object(l.jsx)(s.f,{children:Object(l.jsx)(s.m,{items:r,fields:h,striped:!0,itemsPerPage:10,pagination:!0,sorter:!0,tableFilter:j,itemsPerPageSelect:u,scopedSlots:{"Sl No.":function(e){return Object(l.jsx)("td",{children:e.id})},"Order no":function(e){return Object(l.jsx)("td",{children:e.ordNumber})},"Order Date":function(e){return Object(l.jsx)("td",{children:e.orderDate})},"Delivery Address":function(e){return Object(l.jsx)("td",{children:e.deliveryAddress})},"Order Amount":function(e){return Object(l.jsx)("td",{children:e.orderAmount})},Rider:function(e){return Object(l.jsx)("td",{children:e.riderName})},"Rider Email":function(e){return Object(l.jsx)("td",{children:e.riderEmail})},"Rider Phone":function(e){return Object(l.jsx)("td",{children:e.riderPhone})},"Rider amount":function(e){return Object(l.jsx)("td",{children:e.riderAmount})}}})})]})})})})})})})]})}}}]);
//# sourceMappingURL=51.5732e8c3.chunk.js.map