(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[14],{643:function(e,t,a){},644:function(e,t,a){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,c=!1,s=void 0;try{for(var i,r=e[Symbol.iterator]();!(n=(i=r.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){c=!0,s=l}finally{try{n||null==r.return||r.return()}finally{if(c)throw s}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return c}))},652:function(e,t,a){"use strict";var n=a(648),c=a(649);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(1)),i=(0,n(a(650)).default)(s.createElement("path",{d:"M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteSharp");t.default=i},655:function(e,t,a){"use strict";var n=a(648),c=a(649);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(1)),i=(0,n(a(650)).default)(s.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},656:function(e,t,a){"use strict";var n=a(648),c=a(649);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(1)),i=(0,n(a(650)).default)(s.createElement("path",{d:"M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51.74 7 3.08 7 6h2c0-1.13.6-2.24 1.64-2.7C12.85 2.31 15 3.9 15 6v2H4v14h16V8zm-2 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOpenSharp");t.default=i},664:function(e,t,a){"use strict";var n=a(648),c=a(649);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(1)),i=(0,n(a(650)).default)(s.createElement("path",{d:"M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.66L20 17.56V8h-3V6.22c0-2.61-1.91-4.94-4.51-5.19-2.53-.25-4.72 1.41-5.32 3.7L8.9 6.46V6zM4.41 4.81L3 6.22 4.78 8H4v14h14.78l1 1 1.41-1.41z"}),"NoEncryptionSharp");t.default=i},847:function(e,t,a){"use strict";a.r(t);var n=a(645),c=a(1),s=a.n(c),i=a(651),r=a.n(i),l=a(646),d=(a(643),a(644)),o=a(655),u=a.n(o),j=a(652),b=a.n(j),h=a(656),p=a.n(h),f=a(664),O=a.n(f),m=a(29),x={placeholder:"Search here...",label:"Search:  "},v={label:"Rows:",values:[5,10,25,50,75,100]},g=[{key:"Action"},{key:"Message"},{key:"Status"},{key:"Enable / Disable"}];t.default=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(!0),j=Object(n.a)(o,2),h=j[0],f=j[1],y=Object(c.useState)(!1),M=Object(n.a)(y,2),T=M[0],S=M[1],k=Object(c.useState)(!1),A=Object(n.a)(k,2),E=(A[0],A[1]),z=Object(c.useState)(!0),_=Object(n.a)(z,2),D=(_[0],_[1]),C=Object(c.useState)(""),w=Object(n.a)(C,2),P=w[0],R=w[1],V=function(){if(console.log(P),""==P||null==P)alert("Please Enter Tip Message");else{var e={message:P};r.a.post(d.a+"/AddRiderTipMessage ",e).then((function(e){"0"==e.data?alert("Tip Message Already Exist"):"1"==e.data?(alert("Tip Message Added"),J(),R("")):"2"==e.data&&alert("Failed To Add")}))}},F=function(){if(""==P||null==P)alert("Please Enter Tip Message");else{var e={message:P,pkid:a};console.log("uzma update"+e.message+e.pkid),r.a.post(d.a+"/UpdateRiderTipMessage",e).then((function(e){"0"==e.data?alert("Tip Message Already Exist"):"1"==e.data&&(alert("Tip Message Details Updated"),J(),i(""),R(""),f(!0),S(!1))}))}},L=function(){return Object(m.jsx)(l.d,{type:"button",onClick:F,size:"md",id:"Add-btn",children:"Update"})},G=function(){return Object(m.jsx)(l.d,{type:"button",onClick:V,size:"md",id:"Add-btn",children:"Add"})},H=Object(c.useState)(""),I=Object(n.a)(H,2),U=I[0],N=I[1],J=s.a.useCallback((function(){r()({method:"GET",url:d.a+"/GetRiderTipMessage",headers:{"content-type":"application/json"}}).then((function(e){N(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);return s.a.useEffect((function(){J()}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{id:"ccmaster",children:"Rider Tips Master"}),Object(m.jsx)("br",{}),Object(m.jsxs)(l.M,{children:[Object(m.jsx)(l.j,{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",className:"mb-3 mb-xl-0",children:Object(m.jsx)("div",{id:"country-master",children:Object(m.jsx)(l.e,{children:Object(m.jsx)(l.f,{children:Object(m.jsx)(l.M,{children:Object(m.jsx)(l.j,{children:Object(m.jsxs)(l.e,{children:[Object(m.jsx)(l.i,{children:"Add Message"}),Object(m.jsx)(l.f,{children:Object(m.jsxs)(l.t,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",children:[Object(m.jsx)(l.u,{row:!0,children:Object(m.jsxs)(l.j,{xs:"12",md:"12",children:[Object(m.jsx)(l.D,{children:"Tips Message"}),Object(m.jsx)(l.y,{id:"text-input1",name:"text-input",placeholder:"Message",value:P,onChange:function(e){R(e.target.value)},type:""})]})}),Object(m.jsxs)("div",{id:"inline-btn",children:[T?Object(m.jsx)(L,{}):null,h?Object(m.jsx)(G,{}):null]})]})})]})})})})})})}),Object(m.jsx)(l.j,{xs:"12",sm:"12",md:"8",lg:"8",xl:"8",children:Object(m.jsx)(l.e,{children:Object(m.jsx)(l.f,{children:Object(m.jsx)(l.M,{children:Object(m.jsx)(l.j,{children:Object(m.jsxs)(l.e,{children:[Object(m.jsx)(l.i,{children:"Added Message"}),Object(m.jsx)(l.f,{children:Object(m.jsx)(l.m,{items:U,fields:g,striped:!0,itemsPerPage:5,pagination:!0,sorter:!0,size:"sm",tableFilter:x,itemsPerPageSelect:v,scopedSlots:{Action:function(e){return Object(m.jsxs)("td",{children:[Object(m.jsxs)(l.d,{size:"sm",id:"war-btn",onClick:function(){!function(e,t){i(e),R(t),f(!1),S(!0)}(e.pkid,e.Message)},children:[Object(m.jsx)(u.a,{}),e.status]}),Object(m.jsxs)(l.d,{size:"sm",id:"war-btn1",onClick:function(){var t;t=e.pkid,r()({method:"GET",url:d.a+"/DeleteRiderTipMessage/"+t,headers:{"content-type":"application/json"}}).then((function(e){console.log(e.data),console.log(e),1==e.data?(alert("Selected Tip Message Deleted"),J()):alert("Failed To Delete Tip Message")})).catch((function(e){console.log(e)}))},children:[Object(m.jsx)(b.a,{}),e.status]})]})},"Enable / Disable":function(e){return"Enabled"===e.Status?Object(m.jsx)("td",{children:Object(m.jsx)(l.d,{size:"sm",onClick:function(){var t;t=e.pkid,r()({method:"GET",url:d.a+"/DisableRiderTipMessage/"+t,headers:{"content-type":"application/json"}}).then((function(e){1==e.data?(alert("Selected Rider Tip Is Deactivated"),J()):alert("Failed To Deactivated")})).catch((function(e){console.log(e)})),D(!1),E(!0)},id:"deactivate",children:Object(m.jsx)(O.a,{})})}):Object(m.jsx)("td",{children:Object(m.jsx)(l.d,{size:"sm",onClick:function(){var t;t=e.pkid,r()({method:"GET",url:d.a+"/EnableRiderTipMessage/"+t,headers:{"content-type":"application/json"}}).then((function(e){1==e.data?(alert("Selected Rider Tip Is Activated"),J()):alert("Failed To Activated")})).catch((function(e){console.log(e)})),D(!0),E(!1)},id:"activate",children:Object(m.jsx)(p.a,{})})})}}})})]})})})})})})]})]})}}}]);
//# sourceMappingURL=14.580fb9a4.chunk.js.map