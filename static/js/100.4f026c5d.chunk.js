(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[100],{643:function(e,t,a){},644:function(e,t,a){"use strict";t.a="http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice"},947:function(e,t,a){"use strict";a.r(t);var c=a(61),i=a(645),n=a(1),l=a.n(n),o=a(18),r=a(673),s=a(651),d=a.n(s),j=a(646),u=(a(643),a(644)),m=a(29),b="https://ik.imagekit.io/h3rqsqucfge/";t.default=function(e){var t=Object(n.useState)({Name:"",Code:"",Title:"",SubTitle:"",FromDate:"",ToDate:"",UserLimit:"",Discount:"",Category:"",Description:"",City:"",Area:"",Image:"",ExImage:""}),a=Object(i.a)(t,2),s=a[0],p=a[1],h=Object(n.useState)(),O=Object(i.a)(h,2),x=O[0],g=O[1],C=Object(n.useState)([]),y=Object(i.a)(C,2),f=y[0],D=y[1],v=Object(n.useState)(),N=Object(i.a)(v,2),I=N[0],T=N[1],E=Object(n.useState)(),F=Object(i.a)(E,2),S=F[0],A=F[1],U=Object(o.g)(),k=function(e){d()({method:"GET",url:u.a+"/GetAreaByCityId/"+e,headers:{"content-type":"application/json"}}).then((function(e){var t=e.data.map((function(e){return Object(m.jsx)("option",{Value:e.pkid,children:e.Area})}));T(t)})).catch((function(e){console.log(e)}))};l.a.useEffect((function(){p({Name:e.location.state.data.Name,Code:e.location.state.data.Code,Title:e.location.state.data.Title,Subtitle:e.location.state.data.SubTitle,FromDate:e.location.state.data.FromDate,ToDate:e.location.state.data.ToDate,UserLimit:e.location.state.data.UserLimit,Discount:e.location.state.data.Discount,Category:e.location.state.data.CategoryId,Description:e.location.state.data.Description,City:e.location.state.data.CityId,Area:e.location.state.data.AreaId,Image:e.location.state.data.Image,ExImage:e.location.state.data.Image,pkid:e.location.state.data.pkid}),d()({method:"GET",url:u.a+"/GetCity",headers:{"content-type":"application/json"},params:{language_code:"en"}}).then((function(t){var a=t.data.map((function(e){return Object(m.jsx)("option",{value:e.pkid,children:e.City})}));D(a),k(e.location.state.data.CityId)})).catch((function(e){console.log(e)})),d()({method:"GET",url:u.a+"/GetVendorCategory",headers:{"content-type":"application/json"},params:{language_code:"en"}}).then((function(e){var t=e.data.map((function(e){return Object(m.jsx)("option",{value:e.pkid,children:e.Category})}));A(t)})).catch((function(e){console.log(e)}))}),[]);return console.log("Hai There"),Object(m.jsxs)("div",{children:[Object(m.jsxs)(j.M,{children:[Object(m.jsx)(j.j,{md:"3"}),Object(m.jsx)(j.j,{md:"6",children:Object(m.jsx)("h1",{id:"ccmaster",children:"Coupons"})}),Object(m.jsx)(j.j,{md:"3"})]}),Object(m.jsx)(j.M,{children:Object(m.jsx)(j.j,{md:"1",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(j.E,{to:"/ViewCoupons",children:Object(m.jsx)(j.d,{color:"danger",size:"sm",id:"AddEmp",children:"Back"})}),Object(m.jsx)("br",{})]})})}),Object(m.jsx)(j.M,{children:Object(m.jsx)(j.j,{md:"12",children:Object(m.jsx)(j.e,{children:Object(m.jsx)(j.f,{children:Object(m.jsx)(j.M,{children:Object(m.jsx)(j.j,{children:Object(m.jsxs)(j.e,{children:[Object(m.jsx)(j.i,{children:"Add Coupons"}),Object(m.jsx)(j.f,{children:Object(m.jsx)(j.t,{action:"",method:"post",encType:"multipart/form-data",className:"form-horizontal",children:Object(m.jsxs)(j.u,{className:"pr-1",children:[Object(m.jsxs)(j.M,{id:"firstrow",children:[Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputName2",className:"pr-1",children:"Name"}),Object(m.jsx)(j.y,{type:"text",id:"exampleInputName2",placeholder:"Coupons Name",required:!0,value:s.Name,onChange:function(e){var t=e.target.value;t=t.replace(/[^A-Z a-z]/gi,""),p(Object(c.a)(Object(c.a)({},s),{},{Name:t}))}})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputEmail2",className:"pr-1",children:"Code"}),Object(m.jsx)(j.y,{type:"text",id:"exampleInputEmail2",placeholder:"Coupons Code",required:!0,value:s.Code,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{Code:e.target.value}))}})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputEmail2",className:"pr-1",children:"Title"}),Object(m.jsx)(j.y,{type:"text",id:"exampleInputEmail2",placeholder:"Title",required:!0,value:s.Title,onChange:function(e){var t=e.target.value;t=t.replace(/[^A-Z a-z]/gi,""),p(Object(c.a)(Object(c.a)({},s),{},{Title:t}))}})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputName2",className:"pr-1",children:"Subtitle"}),Object(m.jsx)(j.y,{id:"exampleInputName2",placeholder:"Subtitle",value:s.Subtitle,onChange:function(e){var t=e.target.value;t=t.replace(/[^A-Z a-z]/gi,""),p(Object(c.a)(Object(c.a)({},s),{},{Subtitle:t}))},required:!0})]})]}),Object(m.jsxs)(j.M,{id:"secondrow",children:[Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputName2",className:"pr-1",children:"Valid Form"}),Object(m.jsx)(j.y,{id:"exampleInputName2",value:s.FromDate,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{FromDate:e.target.value}))},required:!0,type:"date"})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputName2",className:"pr-1",children:"Valid To"}),Object(m.jsx)(j.y,{id:"exampleInputName2",type:"date",value:s.ToDate,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{ToDate:e.target.value}))},required:!0})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputName2",className:"pr-1",children:"User limit"}),Object(m.jsx)(j.y,{type:"number",pattern:"^-?[0-9]\\d*\\.?\\d*$",id:"exampleInputName2",placeholder:"User limit",value:s.UserLimit,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{UserLimit:e.target.value}))},required:!0})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputName2",className:"pr-1",children:"Discount"}),Object(m.jsx)(j.y,{type:"number",id:"exampleInputName2",pattern:"^-?[0-9]\\d*\\.?\\d*$",placeholder:"Discount",value:s.Discount,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{Discount:e.target.value}))},required:!0})]})]}),Object(m.jsxs)(j.M,{id:"secondrow",children:[Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"nf-email",children:"Category"}),Object(m.jsxs)(j.N,{custom:!0,name:"city",value:s.Category,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{Category:e.target.value}))},id:"city",children:[Object(m.jsx)("option",{value:"0",children:"Select Category"}),S]})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"nf-email",children:"City"}),Object(m.jsxs)(j.N,{custom:!0,name:"city",value:s.City,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{City:e.target.value}))},id:"city",children:[Object(m.jsx)("option",{value:"-1",children:"Select City"}),f]})]}),Object(m.jsxs)(j.j,{md:"3",children:[Object(m.jsx)(j.D,{htmlFor:"nf-email",children:"Area"}),Object(m.jsxs)(j.N,{custom:!0,name:"Province",value:s.Area,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{Area:e.target.value}))},id:"Province",children:[Object(m.jsx)("option",{value:"-1",children:"Select Area"}),I]})]})]}),Object(m.jsx)(j.M,{children:Object(m.jsxs)(j.j,{md:"12",children:[Object(m.jsx)(j.D,{htmlFor:"exampleInputName2",className:"pr-1",children:"Description"}),Object(m.jsx)(j.W,{placeholder:"Description",value:s.Description,onChange:function(e){p(Object(c.a)(Object(c.a)({},s),{},{Description:e.target.value}))}})]})}),Object(m.jsx)("br",{}),Object(m.jsxs)(j.M,{children:[Object(m.jsx)(j.j,{md:"6",children:Object(m.jsx)(r.IKContext,{publicKey:"public_Q88FTm6/mKTXhbicC8rJNyROsbU=",urlEndpoint:b,authenticationEndpoint:"http://localhost:3001/auth",children:Object(m.jsx)(r.IKUpload,{name:"image",type:"file",onError:function(e){console.log(e)},onSuccess:function(e){console.log(e.name),g(e.name)}})})}),Object(m.jsx)(j.j,{md:"6",children:Object(m.jsx)("div",{class:"iconImage",children:Object(m.jsx)(r.IKImage,{urlEndpoint:b,path:s.Image,width:"100px",height:"100px",margin:"0px"})})})]}),Object(m.jsx)(j.M,{children:Object(m.jsx)(j.j,{md:"4",children:Object(m.jsx)("div",{id:"inline-btn",children:Object(m.jsx)(j.d,{type:"button",size:"md",id:"Add-btn",onClick:function(){if(console.log(s.ExImage),""==s.Name||null==s.Name)alert("Please Enter Coupon Name");else if(""==s.Code||null==s.Code)alert("Please Enter Coupon Code");else if(""==s.Title||null==s.Title)alert("Please Enter Title");else if(""==s.Subtitle||null==s.Subtitle)alert("Please Enter Sub Title");else if(""==s.FromDate||null==s.FromDate)alert("Please Select From Date");else if(""==s.ToDate||null==s.ToDate)alert("Please Select To Date");else if(""==s.UserLimit||null==s.UserLimit)alert("Please Enter User Limit");else if(""==s.Discount||null==s.Discount)alert("Please Enter Discount");else if("-1"==s.Category||""==s.Category||null==s.Category)alert("Please Enter Category");else if("-1"==s.City||""==s.City||null==s.City)alert("Please Select City");else if("-1"==s.Area||""==s.Area||null==s.Area)alert("Please Select Area");else if(""==s.Description||null==s.Description)alert("Please Enter Description");else{s.Image=""==x||null==x||void 0==x?s.ExImage:x;var e={Name:s.Name,Code:s.Code,Title:s.Title,SubTitle:s.Subtitle,ValidFrom:s.FromDate,ValidTo:s.ToDate,UserLimit:s.UserLimit,Discount:s.Discount,Category:s.Category,City:s.City,Area:s.Area,Image:s.Image,Description:s.Description,pkid:s.pkid};console.log("uzma update"),console.log(e),d.a.post(u.a+"/UpdateCoupon ",e).then((function(e){"0"==e.data?alert("Coupon Already Exist"):"1"==e.data?(alert("Coupon Updated"),U.push("/ViewCoupons")):"2"==e.data&&alert("Failed To Add")}))}U.goBack()},children:"Update"})})})})]})})})]})})})})})})})]})}}}]);
//# sourceMappingURL=100.4f026c5d.chunk.js.map