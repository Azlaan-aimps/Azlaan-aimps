(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[69],{643:function(e,t,r){},644:function(e,t,r){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){c=!0,o=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},915:function(e,t,r){"use strict";r.r(t);var n=r(645),c=r(1),o=r.n(c),a=r(651),i=r.n(a),s=r(646),d=r(18),l=(r(643),r(644)),u=r(29),j=[{key:"Code"},{key:"Availed Date"},{key:"User Name"},{key:"User Mobile"},{key:"Order No"},{key:"Amount"}],b={placeholder:"Search here...",label:"Search"},h={label:"Rows"};t.default=function(e){var t=Object(c.useState)(""),r=Object(n.a)(t,2),a=(r[0],r[1],Object(c.useState)("")),f=Object(n.a)(a,2),O=f[0],m=f[1],p=o.a.useCallback((function(){i()({method:"GET",url:l.a+"/GetUserCouponAvailed/"+e.location.state.data.pkid,headers:{"content-type":"application/json"},params:{language_code:"en"}}).then((function(e){m(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);o.a.useEffect((function(){p()}),[]);var x=Object(d.g)();return Object(u.jsxs)("div",{children:[Object(u.jsxs)(s.M,{children:[Object(u.jsx)(s.j,{md:"3"}),Object(u.jsx)(s.j,{md:"6",children:Object(u.jsx)("h1",{id:"ccmaster",children:"User Availed Coupons"})}),Object(u.jsx)(s.j,{md:"3"})]}),Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{md:"12",children:Object(u.jsx)(s.e,{children:Object(u.jsxs)(s.f,{children:[Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{md:"1",children:Object(u.jsx)(s.d,{color:"danger",size:"sm",onClick:function(){return x.goBack()},children:"Back"})})}),Object(u.jsx)("br",{}),Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{children:Object(u.jsxs)(s.e,{children:[Object(u.jsx)(s.i,{children:"Availed Coupons"}),Object(u.jsx)(s.f,{children:Object(u.jsx)(s.m,{items:O,fields:j,striped:!0,itemsPerPage:5,pagination:!0,sorter:!0,tableFilter:b,itemsPerPageSelect:h,scopedSlots:{Code:function(e){return Object(u.jsx)("td",{children:e.couponCode})},"Availed Date":function(e){return Object(u.jsx)("td",{children:e.availedDate})},"User Name":function(e){return Object(u.jsx)("td",{children:e.userName})},"User Mobile":function(e){return Object(u.jsx)("td",{children:e.userMobile})},"Order No":function(e){return Object(u.jsx)("td",{children:Object(u.jsx)(s.d,{id:"order-list",onClick:function(){x.push("/UserCouponOrderDetails",{data:e})},children:e.orderNumber})})},Amount:function(e){return Object(u.jsx)("td",{children:e.couponAmount})}}})})]})})})]})})})})]})}}}]);
//# sourceMappingURL=69.839142a8.chunk.js.map