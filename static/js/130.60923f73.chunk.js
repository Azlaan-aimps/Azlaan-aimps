(this.webpackJsonptaabedar_admin_dashboard=this.webpackJsonptaabedar_admin_dashboard||[]).push([[130],{645:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){a=!0,c=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},834:function(e,t,n){"use strict";n.r(t);var r=n(645),a=n(1),c=n.n(a),s=n(651),o=n.n(s),l=n(161),i=n(646),d=n(661),j=n(29);t.default=function(){var e=c.a.useState(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(""),b=Object(r.a)(s,2),u=b[0],h=b[1],f=c.a.useState(""),m=Object(r.a)(f,2),O=(m[0],m[1]);return Object(j.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(j.jsx)(i.k,{children:Object(j.jsx)(i.M,{className:"justify-content-center",children:Object(j.jsx)(i.j,{md:"6",children:Object(j.jsx)(i.h,{children:Object(j.jsx)(i.e,{className:"p-4",style:{background:"#aaebf7"},children:Object(j.jsxs)(i.f,{children:[Object(j.jsxs)(i.M,{children:[Object(j.jsx)(i.j,{md:"2",children:Object(j.jsx)("img",{style:{width:"175%",marginLeft:"-32%",marginTop:"-23%"},src:"/avatars/BIRYAANIWALA.png",alt:"Taabedar"})}),Object(j.jsxs)(i.j,{col:"9",children:[Object(j.jsx)("h3",{children:"Admin Login"}),Object(j.jsx)("p",{children:Object(j.jsx)("marque",{children:"Delivery Application CMS 1.0"})})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(i.t,{children:[Object(j.jsxs)(i.A,{className:"mb-3",children:[Object(j.jsx)(i.B,{children:Object(j.jsx)(i.C,{children:Object(j.jsx)(d.a,{name:"cil-user"})})}),Object(j.jsx)(i.y,{type:"email",placeholder:"Email",autoComplete:"off",onChange:function(e){a(e.target.value)}})]}),Object(j.jsxs)(i.A,{className:"mb-4",children:[Object(j.jsx)(i.B,{children:Object(j.jsx)(i.C,{children:Object(j.jsx)(d.a,{name:"cil-lock-locked"})})}),Object(j.jsx)(i.y,{type:"password",placeholder:"Password",autoComplete:"off",onChange:function(e){h(e.target.value)}})]}),Object(j.jsx)(i.M,{children:Object(j.jsx)(i.j,{xs:"6",children:Object(j.jsx)(l.b,{children:Object(j.jsx)(i.d,{style:{background:"azure",fontWeight:" 500",border:" 1px solid #17a2b8"},onClick:function(){console.log(n),console.log(u),""==n||null==n?alert("Please Enter Email Address"):""==u||null==u?alert("Please Enter Password"):o()({method:"GET",url:"http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AdminLogin/"+n+"/"+u,headers:{"content-type":"application/json"}}).then((function(e){O(e.data),1==e.data?window.location.href="/dashboard":(alert("Please Enter valid Credentials"),window.location.href="/")})).catch((function(e){console.log(e)}))},active:!0,tabIndex:-1,children:"Login"})})})})]})]})})})})})})})}}}]);
//# sourceMappingURL=130.60923f73.chunk.js.map