"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[866],{5866:function(e,s,t){t.r(s);var r=t(5861),a=t(4942),n=t(1413),c=t(885),l=t(7757),i=t.n(l),o=t(2791),d=t(5443),u=t(872),m=t(7194),x=t(403),h=t(6616),f=t(6871),w=t(62),p=t(6030),v=t(9358),j=t(810),g=t(184),y=t(1059);s.default=function(){var e=(0,o.useState)(0),s=(0,c.Z)(e,2),t=s[0],l=s[1],b=new y,Z=(0,p.I0)(),N=(0,j.VY)(),P=(0,f.s0)(),k=((0,p.v9)((function(e){return e.linkStatus})),(0,o.useState)(!1)),S=(0,c.Z)(k,2),C=S[0],T=S[1],z=(0,o.useState)(!1),E=(0,c.Z)(z,2),L=E[0],I=E[1],M=(0,o.useState)({resetToken:"",password:"",confirmPassword:""}),R=(0,c.Z)(M,2),V=R[0],D=R[1],F=function(){var e=(0,r.Z)(i().mark((function e(s){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),l(20),b.is().min(8,"Paswword must be atleast 8 characters").is().max(100,"Paswword cannot exceed 100 characters").has().uppercase(1,"Paswword must contain atleast 1 uppercase characters").has().lowercase(2,"Paswword must contain atleast 2 lowercase characters").has().digits(2,"Paswword must contain atleast 2 digits").is().not().oneOf(["Passw0rd","Password123","abc123","qwerty123","123123","000000","password","12345678","Password"],"Password is too weak"),0===(t=b.validate(V.password,{details:!0})).length){e.next=8;break}return N.error(t[0].message),l(0),e.abrupt("return");case 8:return l(40),e.next=11,Z((0,v.y1)(V,V.resetToken));case 11:return e.next=13,Z((0,v.II)());case 13:l(100),N.success("Password changed successfully."),P("/home");case 16:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d.Z,{color:"#2b7a2b",height:4,progress:t,onLoaderFinished:function(){return l(0)}}),(0,g.jsx)("div",{className:"flex justify-center items-center h-[100vh] w-full",children:(0,g.jsxs)("div",{className:"flex flex-col justify-center items-stretch h-full w-full bg-white",children:[(0,g.jsxs)("div",{className:"flex items-center justify-center flex-col my-12",children:[(0,g.jsx)("div",{className:"text-4xl text-green-600 my-2",children:"Reset Password"}),(0,g.jsx)("div",{className:"sub-heading my-2 text-lg text-gray-400 italic",children:"Please Set Your New Password."})]}),(0,g.jsxs)("form",{className:"flex flex-col justify-center items-center",onChange:function(e){return function(e){D((0,n.Z)((0,n.Z)({},V),{},(0,a.Z)({},e.target.name,e.target.value)))}(e)},onSubmit:function(e){return F(e)},children:[(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)("div",{className:"absolute ml-2",children:(0,g.jsx)(w.Z,{})}),(0,g.jsx)("input",{className:"bg-green-100 pl-12 py-3 my-2 rounded-md w-[18rem] sm:w-[20rem]",type:"password",placeholder:"Enter Token",name:"resetToken",value:V.resetToken}),(0,g.jsx)("div",{style:{pointerEvents:"none"},className:"translate-x-96 cursor-pointer opacity-0 ",children:(0,g.jsx)(m.Z,{})})]}),(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)("div",{className:"absolute ml-2",children:(0,g.jsx)(x.Z,{})}),(0,g.jsx)("input",{className:"bg-green-100 pl-12 py-3 my-2 rounded-md w-[18rem] sm:w-[20rem]",type:C?"text":"password",placeholder:"Password",name:"password",value:V.password}),(0,g.jsx)("div",{className:"translate-x-96 cursor-pointer",onClick:function(){T(!C)},children:C?(0,g.jsx)(m.Z,{}):(0,g.jsx)(h.Z,{})})]}),(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)("div",{className:"absolute ml-2",children:(0,g.jsx)(u.Z,{})}),(0,g.jsx)("input",{className:"bg-green-100 pl-12 py-3 my-2 rounded-md w-[18rem] sm:w-[20rem]",type:L?"text":"password",placeholder:"Confirm Password",name:"confirmPassword",value:V.confirmPassword}),(0,g.jsx)("div",{className:"translate-x-96 cursor-pointer",onClick:function(){I(!L)},children:L?(0,g.jsx)(m.Z,{}):(0,g.jsx)(h.Z,{})})]}),(0,g.jsx)("div",{children:(0,g.jsx)("button",{style:{padding:"10px"},type:"submit",className:"rounded-full bg-green-500 mt-4 shadow-md text-white font-bold hover:bg-green-300",children:"RESET PASSWORD"})})]})]})})]})}},872:function(e,s,t){var r=t(5318);s.Z=void 0;var a=r(t(5649)),n=t(184),c=(0,a.default)((0,n.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");s.Z=c},62:function(e,s,t){var r=t(5318);s.Z=void 0;var a=r(t(5649)),n=t(184),c=(0,a.default)((0,n.jsx)("path",{d:"M19.97 6.43 12 2 4.03 6.43 9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.81zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87v5.57zm2 0v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14V17l-8 4.44z"}),"Token");s.Z=c}}]);
//# sourceMappingURL=866.4720f2b0.chunk.js.map