(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[37],{643:function(e,t,n){},644:function(e,t,n){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},657:function(e,t,n){"use strict";var r,a,c,o=n(162),i=[(r={SLNO:1,Order_No:"20351",Order_Date:"15/4/2021",Rider:"XYZ person",Amount_Recieved:"2000",Order_Amount:"2000",Merchant:"Big Bazar",Payment_Mode:"Jazz Cash",Ref_No:"IFSC123450",Total_Amount:"5000",Notification:"XYz Rider paid you 5000rs.",Amount_Recieved_Status:"Yes",Amount_Paid_Status:"Paid",Customer:"uzma",Change_Amount:"50rs/-",Delivery_Charge:"200rs/-",Discount:"30%",DeliveryBoy:"RDET",Coupon_Code:"12345",Date:"15/5/2020",Order_Type:"Sinlge",Sub_order:"1"},Object(o.a)(r,"Order_Amount","5820"),Object(o.a)(r,"Final_Amount","5894"),Object(o.a)(r,"Total_Km","65"),Object(o.a)(r,"Status","Delivered"),Object(o.a)(r,"User","Arslan"),Object(o.a)(r,"Final_Amount",3500),Object(o.a)(r,"Total_Orders",15),Object(o.a)(r,"Payment_By","Rider"),Object(o.a)(r,"Amount_Paid",5e3),Object(o.a)(r,"Payment_Date","15/5/2020"),r),(a={SLNO:2,Order_No:"20352",Order_Date:"16/4/2021",Rider:"XYZ person",Amount_Recieved:"1000",Order_Amount:"1000",Merchant:"Loyal World",Payment_Mode:"Card",Ref_No:"IFSC123458",Total_Amount:"5000",Notification:"XYz Rider paid you 1000rs.",Amount_Recieved_Status:"No",Amount_Paid_Status:"Not Paid",Customer:"uzma",Change_Amount:"50rs/-",Delivery_Charge:"200rs/-",Discount:"30%",DeliveryBoy:"RDET",Coupon_Code:"12345",Date:"15/5/2020",Order_Type:"Multiple",Sub_order:"4"},Object(o.a)(a,"Order_Amount","5820"),Object(o.a)(a,"Final_Amount","5894"),Object(o.a)(a,"Total_Km","65"),Object(o.a)(a,"Status","Delivered"),Object(o.a)(a,"User","Shabaz"),Object(o.a)(a,"Final_Amount",500),Object(o.a)(a,"Total_Orders",9),Object(o.a)(a,"Payment_By","User"),Object(o.a)(a,"Amount_Paid",5500),Object(o.a)(a,"Payment_Date","15/5/2020"),a),(c={SLNO:3,Order_No:"20351",Order_Date:"17/4/2021",Rider:"XYZ person",Amount_Recieved:"5000",Order_Amount:"5000",Merchant:"Big Bazar",Payment_Mode:"Jazz Cash",Ref_No:"IFSC123453",Total_Amount:"5000",Notification:"XYz Rider paid you 2000rs.",Amount_Recieved_Status:"Yes",Amount_Paid_Status:"Not Paid",Customer:"uzma",Change_Amount:"50rs/-",Delivery_Charge:"200rs/-",Discount:"30%",DeliveryBoy:"RDET",Coupon_Code:"12345",Date:"15/5/2020",Order_Type:"Multiple",Sub_order:"4"},Object(o.a)(c,"Order_Amount","5820"),Object(o.a)(c,"Final_Amount","5894"),Object(o.a)(c,"Total_Km","65"),Object(o.a)(c,"Status","Delivered"),Object(o.a)(c,"User","Uzma"),Object(o.a)(c,"Final_Amount",3500),Object(o.a)(c,"Total_Orders",10),Object(o.a)(c,"Payment_By","Rider"),Object(o.a)(c,"Amount_Paid",8e3),Object(o.a)(c,"Payment_Date","15/5/2020"),c)];t.a=i},895:function(e,t,n){"use strict";n.r(t);var r=n(645),a=n(1),c=n.n(a),o=n(651),i=n.n(o),s=n(646),d=(n(643),n(657),n(644)),u=n(29),l=[{key:"SLNO"},{key:"Order_No"},{key:"Date"},{key:"Payment_By"},{key:"User"},{key:"Amount_Recieved"},{key:"Payment_Mode"},{key:"Ref_No"}],j={placeholder:"Search here...",label:"Search:  "},b={label:"Rows",values:[5,10,25,50,75,100]};t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],O=Object(a.useState)(""),m=Object(r.a)(O,2),h=m[0],_=m[1],y=Object(a.useState)(""),f=Object(r.a)(y,2),p=f[0],x=f[1],A=Object(a.useState)(""),S=Object(r.a)(A,2),v=S[0],P=S[1],R=Object(a.useState)(""),g=Object(r.a)(R,2),D=g[0],C=g[1],N=Object(a.useState)(""),T=Object(r.a)(N,2),z=T[0],B=T[1],F=Object(a.useState)(""),M=Object(r.a)(F,2),k=M[0],U=M[1],w=c.a.useCallback((function(){i()({method:"GET",url:d.a+"/Recieved_Amounts",headers:{"content-type":"application/json"}}).then((function(e){o(e.data),P(e.data.length)})).catch((function(e){console.log(e)}))}),[]),E=c.a.useCallback((function(){i()({method:"GET",url:d.a+"/Recieved_Amounts_Summary",headers:{"content-type":"application/json"}}).then((function(e){_(e.data[0].PaymentByRider),x(e.data[0].PaymentByUser),C(e.data[0].FinalAmount)})).catch((function(e){console.log(e)}))}),[]);return c.a.useEffect((function(){w(),E()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{id:"ccmaster",children:"Recieved Payment"}),Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{col:"10",children:Object(u.jsx)(s.e,{children:Object(u.jsx)(s.f,{children:Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{children:Object(u.jsxs)(s.e,{children:[Object(u.jsx)(s.i,{children:Object(u.jsxs)(s.M,{children:[Object(u.jsxs)(s.j,{md:"2",children:[Object(u.jsx)(s.D,{htmlFor:"nf-email",children:"From Date"}),Object(u.jsx)(s.y,{type:"date",onChange:function(e){B(e.target.value)},value:z})]}),Object(u.jsxs)(s.j,{md:"2",children:[Object(u.jsx)(s.D,{htmlFor:"nf-email",children:"To Date"}),Object(u.jsx)(s.y,{type:"date",onChange:function(e){U(e.target.value)},value:k})]}),Object(u.jsx)(s.j,{md:"2",children:Object(u.jsx)(s.d,{size:"sm",color:"info",style:{"margin-top":"28px",width:"100%"},onClick:function(){i()({method:"GET",url:d.a+"/Recieved_Amounts_Filter/"+z+"/"+k,headers:{"content-type":"application/json"}}).then((function(e){o(e.data),P(e.data.length)})).catch((function(e){console.log(e)})),i()({method:"GET",url:d.a+"/Recieved_Amounts_Summary_Filter/"+z+"/"+k,headers:{"content-type":"application/json"}}).then((function(e){_(e.data[0].PaymentByRider),x(e.data[0].PaymentByUser),C(e.data[0].FinalAmount)})).catch((function(e){console.log(e)}))},children:"Filter"})}),Object(u.jsx)(s.j,{md:"2",children:Object(u.jsx)(s.d,{size:"sm",color:"danger",style:{"margin-top":"28px",width:"100%"},onClick:function(){B(""),U(""),w(),E()},children:"Reset"})})]})}),Object(u.jsx)(s.f,{children:Object(u.jsx)(s.m,{items:n,fields:l,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:j,itemsPerPage:4,pagination:!0,size:"sm",itemsPerPageSelect:b,scopedSlots:{SLNO:function(e){return Object(u.jsx)("td",{children:e.id})},Order_No:function(e){return Object(u.jsx)("td",{children:e.OrderNumber})},Date:function(e){return Object(u.jsx)("td",{children:e.Pdate})},Payment_By:function(e){return Object(u.jsx)("td",{children:e.Payment_By})},User:function(e){return Object(u.jsx)("td",{children:e.Pname})},Amount_Recieved:function(e){return Object(u.jsx)("td",{children:e.Amount_Recieved})},Payment_Mode:function(e){return Object(u.jsx)("td",{children:e.Payment_Mode})},Ref_No:function(e){return Object(u.jsx)("td",{children:e.Ref_No})}}})})]})})})})})})}),Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{md:"12",children:Object(u.jsx)(s.e,{children:Object(u.jsx)(s.f,{children:Object(u.jsx)(s.M,{children:Object(u.jsx)(s.j,{children:Object(u.jsxs)(s.e,{children:[Object(u.jsx)(s.i,{children:"Summary"}),Object(u.jsxs)(s.f,{children:[Object(u.jsxs)("p",{style:{fontSize:"12px"},children:[Object(u.jsx)("span",{children:"Total Orders: "})," ",v]}),Object(u.jsxs)("p",{style:{fontSize:"12px"},children:[Object(u.jsx)("span",{children:"Payment By Riders: "})," ",h]}),Object(u.jsxs)("p",{style:{fontSize:"12px"},children:[Object(u.jsx)("span",{children:"Payments By Users: "})," ",p]}),Object(u.jsxs)("p",{style:{fontSize:"12px"},children:[Object(u.jsx)("span",{children:"Final Amount Recieved: "}),Object(u.jsxs)("span",{style:{color:"green",fontWeight:"700",fontSize:"15px",background:"#f4f4f4",padding:"5px"},children:[" ",D]})," "]})]})]})})})})})})})]})}}}]);
//# sourceMappingURL=37.9d14d808.chunk.js.map