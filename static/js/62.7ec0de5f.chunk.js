(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[62],{643:function(e,t,n){},644:function(e,t,n){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},645:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},934:function(e,t,n){"use strict";n.r(t);var r=n(645),a=n(1),c=n.n(a),i=n(651),o=n.n(i),s=n(646),d=(n(643),n(644)),l=n(18),j=n(29),h=[{key:"SL No"},{key:"Order Date"},{key:"Sub-Orders"},{key:"Order Number"},{key:"Order Type"},{key:"Order Amount"},{key:"User Name"},{key:"User Mobile"},{key:"Delivery Address"},{key:"Delivery Charge"},{key:"Service Charge"},{key:"Card Charges"},{key:"Admin Earnings"},{key:"Rider Tips"},{key:"Amount Exchange"},{key:"Rider Bid"},{key:"Tax Amount"},{key:"Payment Status"},{key:"Payment Type"},{key:"Payment Reference"},{key:"Rider Name"},{key:"Total Distance"}],u={placeholder:"Search here...",label:"Search:  "},b={label:"Rows",values:[5,10,25,50,75,100]};t.default=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),i=n[0],O=n[1],p=Object(a.useState)(""),x=Object(r.a)(p,2),m=x[0],y=x[1],f=Object(a.useState)(""),g=Object(r.a)(f,2),S=g[0],v=g[1],T=Object(a.useState)(""),A=Object(r.a)(T,2),R=A[0],C=A[1],k=Object(a.useState)(""),D=Object(r.a)(k,2),z=D[0],E=D[1],P=Object(a.useState)(""),G=Object(r.a)(P,2),M=G[0],W=G[1],N=Object(a.useState)(""),w=Object(r.a)(N,2),B=w[0],U=w[1],F=Object(a.useState)(""),J=Object(r.a)(F,2),_=J[0],L=J[1],I=Object(a.useState)(""),V=Object(r.a)(I,2),$=V[0],q=V[1],H=Object(a.useState)(""),K=Object(r.a)(H,2),Q=K[0],X=K[1],Y=Object(a.useState)(""),Z=Object(r.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(a.useState)(""),re=Object(r.a)(ne,2),ae=re[0],ce=re[1],ie=Object(a.useState)(""),oe=Object(r.a)(ie,2),se=oe[0],de=oe[1],le=Object(a.useState)(""),je=Object(r.a)(le,2),he=je[0],ue=je[1],be=Object(a.useState)(""),Oe=Object(r.a)(be,2),pe=Oe[0],xe=Oe[1],me=Object(a.useState)(""),ye=Object(r.a)(me,2),fe=ye[0],ge=ye[1],Se=Object(a.useState)(""),ve=Object(r.a)(Se,2),Te=(ve[0],ve[1]),Ae=Object(a.useState)(""),Re=Object(r.a)(Ae,2),Ce=Re[0],ke=Re[1],De=Object(a.useState)(""),ze=Object(r.a)(De,2),Ee=ze[0],Pe=ze[1],Ge=Object(a.useState)(""),Me=Object(r.a)(Ge,2),We=Me[0],Ne=Me[1],we=c.a.useCallback((function(){o()({method:"GET",url:d.a+"/SalesReports",headers:{"content-type":"application/json"}}).then((function(e){O(e.data)})).catch((function(e){console.log(e)}))}),[]),Be=c.a.useCallback((function(){o()({method:"GET",url:d.a+"/SalesReportOrderSummary",headers:{"content-type":"application/json"}}).then((function(e){console.log("response:"+e.data),C(e.data[0].orderCount),E(e.data[0].OnlinePayments),W(e.data[0].OfflinePayments),U(e.data[0].TaxAmount),L(e.data[0].TotalTips),q(e.data[0].ExchangeAmount),X(e.data[0].CardChanrges),te(e.data[0].GrandTotal),ce(e.data[0].AmountWithRider),de(e.data[0].AdminEarning),ue(e.data[0].RiderEarning),xe(e.data[0].MerchantPayment),ge(e.data[0].AmountToRider),Te(e.data[0].WallentRefund),ke(e.data[0].TotalRestorents),Pe(e.data[0].regvendor),Ne(e.data[0].nonregvendor)})).catch((function(e){console.log(e)}))}),[]),Ue=Object(l.g)();return c.a.useEffect((function(){we(),Be()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{id:"ccmaster",children:"Sales Performance"}),Object(j.jsx)("br",{}),Object(j.jsx)(s.M,{children:Object(j.jsx)(s.j,{col:"10",children:Object(j.jsxs)(s.e,{children:[Object(j.jsx)(s.M,{children:Object(j.jsx)(s.j,{col:"2",children:Object(j.jsx)(s.d,{size:"sm",color:"primary",style:{width:"12%",float:"right",marginTop:"1%",marginRight:"2%"},onClick:function(){var e=0,t=new Array;t.push('"Sl No","Order Date","Order Number","Order Type","Order Amount","User Name","User Mobile","Delivery Address","Delivery Charge","Service Charge","Chard Charges","Admin Earning","Rider Tips","Amount Exchange","Rider Bit","Tax Amount","Payment Status","Payment Type","Payment Reference","Rider Name","Total Distance"');i.map((function(n){return e++,e++,t.push('"'+e+'","'+n.orderDate+'","'+n.orderNumber+'","'+n.orderType+'","'+n.OrderGrand+'","'+n.userName+'","'+n.usermobile+'","'+n.deliveryAddress+'","'+n.deliveryCharge+'","'+n.serviceCharge+'","'+n.CardChanrges+'","'+n.adminEarnings+'","'+n.riderTips+'","'+n.amtExchange+'","'+n.riderBid+'","'+n.taxAmount+'","'+n.paymentStatus+'","'+n.payementType+'","'+n.paymentReference+'","'+n.riderName+'","'+n.orderDistance+'"')}));var n="SalesReport.csv",r=t.join("\n"),a=new Blob([r],{type:"text/csv;charset=utf8;"}),c=document.createElement("a");void 0!==c.download?(c.setAttribute("href",window.URL.createObjectURL(a)),c.setAttribute("download",n),c.style="visibility:hidden",document.body.appendChild(c),c.click(),document.body.removeChild(c)):navigator.msSaveBlob&&navigator.msSaveBlob(a,n)},children:"Export To Excel"})})}),Object(j.jsx)(s.f,{children:Object(j.jsx)(s.M,{children:Object(j.jsx)(s.j,{children:Object(j.jsxs)(s.e,{children:[Object(j.jsx)(s.i,{children:Object(j.jsxs)(s.M,{children:[Object(j.jsxs)(s.j,{md:"2",children:[Object(j.jsx)(s.D,{htmlFor:"nf-email",children:"Select Month"}),Object(j.jsxs)(s.N,{custom:!0,name:"Marchant",id:"Marchant",onChange:function(e){"0"==e.target.value?we():(o()({method:"GET",url:d.a+"/SalesReportsByMonth/"+e.target.value,headers:{"content-type":"application/json"}}).then((function(e){O(e.data)})).catch((function(e){console.log(e)})),o()({method:"GET",url:d.a+"/SalesReportOrderSummaryByMonth/"+e.target.value,headers:{"content-type":"application/json"}}).then((function(e){console.log("response:"+e.data),C(e.data[0].orderCount),E(e.data[0].OnlinePayments),W(e.data[0].OfflinePayments),U(e.data[0].TaxAmount),L(e.data[0].TotalTips),q(e.data[0].ExchangeAmount),X(e.data[0].CardChanrges),te(e.data[0].GrandTotal),ce(e.data[0].AmountWithRider),de(e.data[0].AdminEarning),ue(e.data[0].RiderEarning),xe(e.data[0].MerchantPayment),ge(e.data[0].AmountToRider),Te(e.data[0].WallentRefund),ke(e.data[0].TotalRestorents),Pe(e.data[0].regvendor),Ne(e.data[0].nonregvendor)})).catch((function(e){console.log(e)})))},children:[Object(j.jsx)("option",{value:"0",children:"All"}),Object(j.jsx)("option",{value:"1",children:"Jan"}),Object(j.jsx)("option",{value:"2",children:"Feb"}),Object(j.jsx)("option",{value:"3",children:"March"}),Object(j.jsx)("option",{value:"4",children:"April"}),Object(j.jsx)("option",{value:"5",children:"May"}),Object(j.jsx)("option",{value:"6",children:"Jun"}),Object(j.jsx)("option",{value:"7",children:"Jul"}),Object(j.jsx)("option",{value:"8",children:"Aug"}),Object(j.jsx)("option",{value:"9",children:"Sept"}),Object(j.jsx)("option",{value:"10",children:"Oct"}),Object(j.jsx)("option",{value:"11",children:"Nov"}),Object(j.jsx)("option",{value:"12",children:"Dec"})]})]}),Object(j.jsxs)(s.j,{md:"2",children:[Object(j.jsx)(s.D,{htmlFor:"nf-email",children:"Payment Type"}),Object(j.jsxs)(s.N,{custom:!0,name:"Marchant",id:"Marchant",onChange:function(e){"0"==e.target.value?(we(),Be()):(o()({method:"GET",url:d.a+"/SalesReportsByPaymentType/"+e.target.value,headers:{"content-type":"application/json"}}).then((function(e){O(e.data)})).catch((function(e){console.log(e)})),o()({method:"GET",url:d.a+"/SalesReportOrderSummaryByPaymentType/"+e.target.value,headers:{"content-type":"application/json"}}).then((function(e){C(e.data[0].orderCount),E(e.data[0].OnlinePayments),W(e.data[0].OfflinePayments),U(e.data[0].TaxAmount),L(e.data[0].TotalTips),q(e.data[0].ExchangeAmount),X(e.data[0].CardChanrges),te(e.data[0].GrandTotal),ce(e.data[0].AmountWithRider),de(e.data[0].AdminEarning),ue(e.data[0].RiderEarning),xe(e.data[0].MerchantPayment),ge(e.data[0].AmountToRider),Te(e.data[0].WallentRefund),ke(e.data[0].TotalRestorents),Pe(e.data[0].regvendor),Ne(e.data[0].nonregvendor)})).catch((function(e){console.log(e)})))},children:[Object(j.jsx)("option",{value:"0",children:"All"}),Object(j.jsx)("option",{value:"Card",children:"Card"}),Object(j.jsx)("option",{value:"COD",children:"Cash On Delivery"}),Object(j.jsx)("option",{value:"Jazz",children:"Jazz Cash"})]})]}),Object(j.jsxs)(s.j,{md:"2",children:[Object(j.jsx)(s.D,{children:"From:"}),Object(j.jsx)(s.y,{type:"date",onChange:function(e){y(e.target.value)},value:m})]}),Object(j.jsxs)(s.j,{md:"2",children:[Object(j.jsx)(s.D,{children:"To:"}),Object(j.jsx)(s.y,{type:"date",onChange:function(e){v(e.target.value)},value:S})]}),Object(j.jsx)(s.j,{md:"2",children:Object(j.jsx)(s.d,{size:"sm",color:"info",style:{"margin-top":"28px",width:"100%"},onClick:function(){o()({method:"GET",url:d.a+"/SalesReportsByDates/"+m+"/"+S,headers:{"content-type":"application/json"}}).then((function(e){O(e.data)})).catch((function(e){console.log(e)})),o()({method:"GET",url:d.a+"/SalesReportOrderSummaryByDate/"+m+"/"+S,headers:{"content-type":"application/json"}}).then((function(e){C(e.data[0].orderCount),E(e.data[0].OnlinePayments),W(e.data[0].OfflinePayments),U(e.data[0].TaxAmount),L(e.data[0].TotalTips),q(e.data[0].ExchangeAmount),X(e.data[0].CardChanrges),te(e.data[0].GrandTotal),ce(e.data[0].AmountWithRider),de(e.data[0].AdminEarning),ue(e.data[0].RiderEarning),xe(e.data[0].MerchantPayment),ge(e.data[0].AmountToRider),Te(e.data[0].WallentRefund),ke(e.data[0].TotalRestorents),Pe(e.data[0].regvendor),Ne(e.data[0].nonregvendor)})).catch((function(e){console.log(e)}))},children:"Filter"})}),Object(j.jsx)(s.j,{md:"2",children:Object(j.jsx)(s.d,{size:"sm",color:"danger",style:{"margin-top":"28px",width:"100%"},onClick:function(){y(""),v(""),we(),Be()},children:"Reset"})})]})}),Object(j.jsx)(s.f,{children:Object(j.jsx)(s.m,{items:i,fields:h,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:u,itemsPerPage:10,pagination:!0,size:"sm",itemsPerPageSelect:b,scopedSlots:{"SL No":function(e){return Object(j.jsx)("td",{children:e.id})},"Order Date":function(e){return Object(j.jsx)("td",{children:e.orderDate})},"Order Number":function(e){return Object(j.jsx)("td",{children:e.orderNumber})},"Order Type":function(e){return Object(j.jsx)("td",{children:e.orderType})},"Order Amount":function(e){return Object(j.jsx)("td",{children:e.OrderGrand})},"User Name":function(e){return Object(j.jsx)("td",{children:e.userName})},"User Mobile":function(e){return Object(j.jsx)("td",{children:e.usermobile})},"Delivery Address":function(e){return Object(j.jsx)("td",{children:e.deliveryAddress})},"Card Charges":function(e){return Object(j.jsx)("td",{children:e.CardChanrges})},"Delivery Charge":function(e){return Object(j.jsx)("td",{children:e.deliveryCharge})},"Service Charge":function(e){return Object(j.jsx)("td",{children:e.serviceCharge})},"Admin Earnings":function(e){return Object(j.jsx)("td",{children:e.adminEarnings})},"Payment Status":function(e){return Object(j.jsx)("td",{children:e.paymentStatus})},"Payment Type":function(e){return Object(j.jsx)("td",{children:e.payementType})},"Payment Reference":function(e){return Object(j.jsx)("td",{children:e.paymentReference})},"Rider Name":function(e){return Object(j.jsx)("td",{children:e.riderName})},"Rider Tips":function(e){return Object(j.jsx)("td",{children:e.riderTips})},"Amount Exchange":function(e){return Object(j.jsx)("td",{children:e.amtExchange})},"Rider Bid":function(e){return Object(j.jsx)("td",{children:e.riderBid})},"Total Distance":function(e){return Object(j.jsx)("td",{children:e.orderDistance})},"Sub-Orders":function(e){return Object(j.jsx)("td",{children:Object(j.jsx)(s.d,{id:"order-list",onClick:function(){Ue.push("/ReportSubOrderDetails",{data:e})},children:e.subOrder})})},"Tax Amount":function(e){return Object(j.jsx)("td",{children:e.taxAmount})}}})})]})})})})]})})}),Object(j.jsx)(s.M,{children:Object(j.jsx)(s.j,{md:"12",children:Object(j.jsx)(s.e,{children:Object(j.jsx)(s.f,{children:Object(j.jsx)(s.M,{children:Object(j.jsx)(s.j,{children:Object(j.jsxs)(s.e,{children:[Object(j.jsx)(s.i,{children:"Summary of the Month"}),Object(j.jsx)(s.f,{children:Object(j.jsxs)(s.M,{children:[Object(j.jsx)("hr",{}),Object(j.jsxs)(s.j,{md:"6",children:[Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Total Vendors : "}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:Ce})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Registered Vendors : "}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:Ee})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Non-Registered Vendors : "}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:We})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Total Orders : "})," ",Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:R})," "]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Grand Total"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:ee})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Total Online Payments : "}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:z})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Total Offline Payments:"})," ",Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:M})," "]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Total Tax amount"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:B})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Total online tips : "}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:_})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Total change Exchange Amount : "})," ",Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:$})," "]})]}),Object(j.jsxs)(s.j,{md:"6",children:[Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Card Charges"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:Q})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Amount with riders"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:ae})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Admin Earnings"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:se})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Rider Earnigns"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:he})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Payments to Merchants"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:pe})]}),Object(j.jsxs)("p",{style:{fontSize:"12px"},children:[Object(j.jsx)("span",{children:"- Amount to Riders"}),Object(j.jsx)("span",{style:{fontSize:"14px",fontWeight:"700",color:"DarkGreen"},children:fe})]}),Object(j.jsxs)("p",{style:{fontSize:"14px",fontWeight:"600",color:"green"},children:[Object(j.jsx)("span",{children:"Final Summary : "}),Object(j.jsx)("span",{style:{fontSize:"16px",fontWeight:"700",color:"green"},children:se})]})]})]})})]})})})})})})})]})}}}]);
//# sourceMappingURL=62.7ec0de5f.chunk.js.map