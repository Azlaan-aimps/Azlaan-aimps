(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[129],{644:function(e,t,r){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},671:function(e,t,r){"use strict";var c=r(648),d=r(649);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(1)),s=(0,c(r(650)).default)(n.createElement("path",{d:"M22 2H2v20l4-4h16V2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"}),"RateReviewSharp");t.default=s},961:function(e,t,r){"use strict";r.r(t);var c=r(645),d=r(1),n=r(843),s=r(646),i=r(671),a=r.n(i),j=(r(643),r(651)),l=r.n(j),o=r(644),b=r(18),u=r(29),h={placeholder:"Search here...",label:"Search"},O={label:"Rows"},x=[{key:"SL No"},{key:"Order No"},{key:"Order Amount"},{key:"Order Date"},{key:"Delivery Charge"},{key:"Total Kms"},{key:"Sub-Orders"}];t.default=function(e){var t=Object(d.useState)(),r=Object(c.a)(t,2),i=r[0],j=r[1];Object(d.useEffect)((function(){l.a.get(o.a+"/GetUserOrderByFeedBack/"+e.location.state.data.pkid).then((function(e){console.log(e),j(e.data)})).catch((function(e){console.log(e)}))}),[]);var f=Object(b.g)();return Object(u.jsxs)("div",{children:[Object(u.jsxs)(s.M,{children:[Object(u.jsx)(s.j,{md:"3"}),Object(u.jsx)(s.j,{md:"6",children:Object(u.jsx)("h1",{id:"ccmaster",children:"Order Details"})}),Object(u.jsx)(s.j,{md:"3"})]}),Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{col:"10",children:Object(u.jsx)(s.e,{id:"city-table",children:Object(u.jsxs)(s.f,{children:[Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{md:"1",children:Object(u.jsx)(s.d,{color:"danger",size:"sm",onClick:function(){return f.goBack()},children:"Back"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{children:Object(u.jsxs)(s.e,{children:[Object(u.jsx)(s.i,{children:"Feedback"}),Object(u.jsx)(s.f,{children:Object(u.jsx)(s.m,{items:i,fields:x,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:h,itemsPerPageSelect:O,columnFilterSlot:!0,size:"sm",itemsPerPage:4,pagination:!0,scopedSlots:{"SL No":function(e){return Object(u.jsx)("td",{children:e.id})},"Order No":function(e){return Object(u.jsx)("td",{children:e.ordernumber})},"Order Date":function(e){return Object(u.jsx)("td",{children:e.odate})},"Order Amount":function(e){return Object(u.jsx)("td",{children:e.amount})},"Delivery Charge":function(e){return Object(u.jsx)("td",{children:e.delcharge})},"Total Kms":function(e){return Object(u.jsx)("td",{children:e.distance})},"Sub-Orders":function(e){return Object(u.jsx)("td",{children:Object(u.jsx)(s.d,{id:"order-list",onClick:function(){f.push("/feedback_subOrders",{data:e})},children:Object(u.jsx)(n.a,{badgeContent:e.suborder,color:"primary",children:Object(u.jsx)(a.a,{fontSize:"medium"})})})})}}})})]})})})]})})})})]})}}}]);
//# sourceMappingURL=129.e2371a57.chunk.js.map