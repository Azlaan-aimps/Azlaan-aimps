(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[57],{643:function(e,t,n){},644:function(e,t,n){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,n){"use strict";function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,r=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(c=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(l){r=!0,a=l}finally{try{c||null==o.return||o.return()}finally{if(r)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return r}))},844:function(e,t,n){"use strict";n.r(t);var c=n(645),r=n(1),a=n(646),i=(n(643),n(644)),o=n(655),l=n.n(o),u=n(652),s=n.n(u),j=n(651),d=n.n(j),b=(n(734),n(29)),h={placeholder:"Search here...",label:"Search:  "},f={label:"Rows:",values:[5,10,25,50,75,100]},O=[{key:"Action"},{key:"Country"},{key:"Province"},{key:"City"},{key:"Area"},{key:"Price_per_KM"}];t.default=function(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],o=t[1],u=Object(r.useState)(),j=Object(c.a)(u,2),y=j[0],x=j[1],p=Object(r.useState)(),v=Object(c.a)(p,2),m=v[0],g=v[1],C=Object(r.useState)(),S=Object(c.a)(C,2),P=S[0],A=S[1],k=Object(r.useState)(),D=Object(c.a)(k,2),w=D[0],G=D[1],_=Object(r.useState)(),I=Object(c.a)(_,2),M=I[0],B=I[1],E=Object(r.useState)(),z=Object(c.a)(E,2),F=z[0],N=z[1],U=Object(r.useState)(),J=Object(c.a)(U,2),K=J[0],R=J[1],T=Object(r.useState)(),$=Object(c.a)(T,2),q=$[0],H=$[1],L=Object(r.useState)(),Q=Object(c.a)(L,2),V=Q[0],W=Q[1],X=Object(r.useState)(!0),Y=Object(c.a)(X,2),Z=Y[0],ee=Y[1],te=Object(r.useState)(null),ne=Object(c.a)(te,2),ce=ne[0],re=ne[1];Object(r.useEffect)((function(){d.a.get(i.a+"/GetCountry").then((function(e){o(e.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.Country})})))})).catch((function(e){console.log(e)}))}),[]);var ae=Object(r.useCallback)((function(e){d.a.get(i.a+"/GetStateByCountry/"+e).then((function(e){g(e.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.Province})})))})).catch((function(e){console.log(e)}))})),ie=Object(r.useCallback)((function(e){d.a.get(i.a+"/GetCityByStateAndCountry/"+y+"/"+e).then((function(e){G(e.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.City})})))})).catch((function(e){console.log(e)}))})),oe=Object(r.useCallback)((function(e){d.a.get(i.a+"/GetAreaByCityStateAnndCountry/"+y+"/"+P+"/"+e).then((function(e){N(e.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.Area})}))),console.log("Area",e.data)})).catch((function(e){console.log(e)}))})),le={pkid:ce,Country:y,Province:P,City:M,Area:K,Price:q};Object(r.useEffect)((function(){ue()}),[]);var ue=function(){d.a.get(i.a+"/GetDeliveryPrice").then((function(e){W(e.data),console.log("get ser",e.data)})).catch((function(e){console.log(e)}))},se=Object(r.useCallback)((function(){0==y||null==y?alert("Please Select Country"):0==P||null==P?alert("Please Select Province"):0==M||null==M?alert("Please Select City"):0==K||null==K?alert("Please Select Area"):""==q||null==q||void 0==q?alert("Please Enter the Price"):(d.a.post(i.a+"/AddDeliveryPrice",le).then((function(e){ue()})).catch((function(e){console.log(e)})),H(""),x(""),g(""),G(""),N(""),H(""),alert("Added Successfully"))})),je=function(e,t,n,c){d.a.get(i.a+"/GetCountry").then((function(r){o(r.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.Country})}))),x(e),de(e,t,n,c)})).catch((function(e){console.log(e)}))},de=function(e,t,n,c){d.a.get(i.a+"/GetStateByCountry/"+e).then((function(r){g(r.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.Province})}))),A(t),be(e,t,n,c)})).catch((function(e){console.log(e)}))},be=function(e,t,n,c){d.a.get(i.a+"/GetCityByStateAndCountry/"+e+"/"+t).then((function(r){G(r.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.City})}))),B(n),he(e,t,n,c)})).catch((function(e){console.log(e)}))},he=function(e,t,n,c){d.a.get(i.a+"/GetAreaByCityStateAnndCountry/"+e+"/"+t+"/"+n).then((function(e){N(e.data.map((function(e){return Object(b.jsx)("option",{value:e.pkid,children:e.Area})}))),R(c),console.log("Area",e.data)})).catch((function(e){console.log(e)}))},fe=function(){return Object(b.jsx)(a.d,{type:"button",size:"md",id:"Add-btn",onClick:se,children:"Add"})},Oe=function(){return Object(b.jsx)(a.d,{type:"button",size:"md",id:"Add-btn",onClick:ye,children:"Update"})},ye=function(){0==y||null==y?alert("Please Select Country"):null==P||0==P?alert("Please Select Province"):null==M||0==M?alert("Please Select City"):null==K||0==K?alert("Please Select Area"):""==q||null==q||void 0==q?alert("Please Enter the Price"):(d.a.post(i.a+"/UpdateDeliveryPrice",le).then((function(e){console.log(e),ue(),ee(!0)})).catch((function(e){console.log(e)})),H(""),x(""),g(""),G(""),N(""),alert("Updated Successfully"))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)(a.M,{children:[Object(b.jsx)(a.j,{md:"3"}),Object(b.jsxs)(a.j,{md:"6",children:[Object(b.jsx)("h1",{id:"ccmaster",children:"Delivery Price Range"}),Object(b.jsx)("br",{})]}),Object(b.jsx)(a.j,{md:"3"})]}),Object(b.jsxs)(a.M,{children:[Object(b.jsx)(a.j,{md:"4",children:Object(b.jsx)(a.e,{children:Object(b.jsx)(a.f,{children:Object(b.jsx)(a.M,{children:Object(b.jsx)(a.j,{children:Object(b.jsxs)(a.e,{children:[Object(b.jsx)(a.i,{children:"Delivery Price"}),Object(b.jsx)(a.f,{children:Object(b.jsxs)("form",{children:[Object(b.jsxs)(a.u,{children:[Object(b.jsx)(a.D,{htmlFor:"nf-email",children:"Select Country"}),Object(b.jsxs)(a.N,{custom:!0,name:"Country",id:"Country",value:y,onChange:function(e){x(e.target.value),ae(e.target.value)},children:[Object(b.jsx)("option",{value:"0",children:"Country"}),n]})]}),Object(b.jsxs)(a.u,{children:[Object(b.jsx)(a.D,{htmlFor:"nf-email",children:"Select Province"}),Object(b.jsxs)(a.N,{custom:!0,name:"Province",id:"province",value:P,onChange:function(e){A(e.target.value),ie(e.target.value)},children:[Object(b.jsx)("option",{value:"0",children:"Province "}),m]})]}),Object(b.jsxs)(a.u,{children:[Object(b.jsx)(a.D,{htmlFor:"nf-email",children:"Select City"}),Object(b.jsxs)(a.N,{custom:!0,name:"City",id:"city",value:M,onChange:function(e){oe(e.target.value),B(e.target.value)},children:[Object(b.jsx)("option",{value:"0",children:"City"}),w]})]}),Object(b.jsxs)(a.u,{children:[Object(b.jsx)(a.D,{htmlFor:"nf-email",children:"Select Area"}),Object(b.jsxs)(a.N,{custom:!0,name:"Area",id:"Area",value:K,onChange:function(e){R(e.target.value)},children:[Object(b.jsx)("option",{value:"0",children:"Area"}),F]})]}),Object(b.jsxs)(a.u,{children:[Object(b.jsx)(a.D,{children:"Price"}),Object(b.jsx)(a.y,{type:"number",name:"price",placeholder:"Enter Price",value:q,onChange:function(e){H(e.target.value)}})]}),!0===Z?Object(b.jsx)(fe,{}):Object(b.jsx)(Oe,{})]})})]})})})})})}),Object(b.jsx)(a.j,{col:"8",children:Object(b.jsx)(a.e,{children:Object(b.jsx)(a.f,{children:Object(b.jsx)(a.M,{children:Object(b.jsx)(a.j,{children:Object(b.jsxs)(a.e,{children:[Object(b.jsx)(a.i,{children:"Added Delivery Price"}),Object(b.jsx)(a.f,{children:Object(b.jsx)(a.m,{items:V,fields:O,striped:!0,itemsPerPage:5,size:"sm",pagination:!0,sorter:!0,tableFilter:h,itemsPerPageSelect:f,scopedSlots:{Action:function(e){return Object(b.jsxs)("td",{children:[Object(b.jsxs)(a.d,{size:"sm",id:"war-btn",onClick:function(){!function(e,t,n,c,r,a){re(e),je(t,n,c,r),H(a),ee(!1)}(e.pkid,e.countryId,e.stateId,e.cityId,e.areaId,e.maxPrice)},children:[Object(b.jsx)(l.a,{}),e.status]}),Object(b.jsxs)(a.d,{size:"sm",id:"war-btn1",onClick:function(){!function(e){d.a.get(i.a+"/DeleteDeliveryPrice/"+e).then((function(e){ue(),console.log(e.data)})).catch((function(e){console.log(e)})),alert("Deleted Successfully")}(e.pkid)},children:[Object(b.jsx)(s.a,{}),e.status]})]})},Price_per_KM:function(e){return Object(b.jsx)("td",{children:e.maxPrice})}}})})]})})})})})})]})]})}}}]);
//# sourceMappingURL=57.9aac1785.chunk.js.map