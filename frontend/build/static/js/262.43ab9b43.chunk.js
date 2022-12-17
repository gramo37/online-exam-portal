"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[262],{7262:function(r,e,t){t.r(e);t(2791);var n=t(8055),o=t(184);e.default=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.Z,{active:"about"})})}},8055:function(r,e,t){t.d(e,{Z:function(){return P}});var n=t(5861),o=t(885),a=t(7757),s=t.n(a),c=t(2791),i=t(3504),l=t(3366),u=t(7462),d=t(8182),f=t(767),m=t(5605),v=t(1388),h=t(9201),p=t(184),g=(0,h.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),x=t(5159);function b(r){return(0,x.Z)("MuiAvatar",r)}(0,t(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var j=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=(0,m.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,e){var t=r.ownerState;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})((function(r){var e=r.theme,t=r.ownerState;return(0,u.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:e.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})})),w=(0,m.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,m.ZP)(g,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,e){return e.fallback}})({width:"75%",height:"75%"});var k=c.forwardRef((function(r,e){var t=(0,v.Z)({props:r,name:"MuiAvatar"}),n=t.alt,a=t.children,s=t.className,i=t.component,m=void 0===i?"div":i,h=t.imgProps,g=t.sizes,x=t.src,k=t.srcSet,N=t.variant,S=void 0===N?"circular":N,A=(0,l.Z)(t,j),C=null,z=function(r){var e=r.crossOrigin,t=r.referrerPolicy,n=r.src,a=r.srcSet,s=c.useState(!1),i=(0,o.Z)(s,2),l=i[0],u=i[1];return c.useEffect((function(){if(n||a){u(!1);var r=!0,o=new Image;return o.onload=function(){r&&u("loaded")},o.onerror=function(){r&&u("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=n,a&&(o.srcset=a),function(){r=!1}}}),[e,t,n,a]),l}((0,u.Z)({},h,{src:x,srcSet:k})),D=x||k,R=D&&"error"!==z,P=(0,u.Z)({},t,{colorDefault:!R,component:m,variant:S}),M=function(r){var e=r.classes,t={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,f.Z)(t,b,e)}(P);return C=R?(0,p.jsx)(w,(0,u.Z)({alt:n,src:x,srcSet:k,sizes:g,ownerState:P,className:M.img},h)):null!=a?a:D&&n?n[0]:(0,p.jsx)(Z,{className:M.fallback}),(0,p.jsx)(y,(0,u.Z)({as:m,ownerState:P,className:(0,d.Z)(M.root,s),ref:e},A,{children:C}))})),N={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},S=t(6759),A=t(2135),C=t(6030),z=t(6723),D=t(6871),R=t(810),P=function(r){var e,t,a,l=(0,c.useState)(!1),u=(0,o.Z)(l,2),d=u[0],f=u[1],m=(0,C.I0)(),v=(0,D.s0)(),h=(0,c.useState)(!1),g=(0,o.Z)(h,2),x=g[0],b=g[1],j=(0,R.VY)(),y=(0,C.v9)((function(r){return r.user}));(0,c.useEffect)((0,n.Z)(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(y),""===y.error||void 0===y.error||!x){r.next=6;break}j.error("Sorry, Something went wrong"),console.log("Error while logging out.",y.error),r.next=10;break;case 6:if(""===y.user||void 0===y.user||!x){r.next=10;break}return j.success(y.user.message),r.next=10,m((0,z.Jo)());case 10:case"end":return r.stop()}}),r)}))),[y]);var w=function(){var r=(0,n.Z)(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return b(!0),r.next=3,m((0,z.TX)());case 3:return r.next=5,m((0,z.Jo)());case 5:v("/");case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("nav",{className:"z-40 sticky top-0 right-0 flex justify-around items-center bg-white shadow-md",children:[(0,p.jsx)(i.rU,{to:"/",children:(0,p.jsx)("div",{className:"w-20 cursor-pointer",children:(0,p.jsx)("img",{src:A,alt:""})})}),(0,p.jsx)("div",{children:(0,p.jsxs)("ul",{className:"flex",children:[(0,p.jsx)("li",{className:"mx-1 cursor-pointer hover:bg-gray-300 sm:px-4 sm:py-2 p-0 rounded-md sm:text-lg text-sm",children:(0,p.jsx)(i.rU,{to:"/",className:"".concat("home"===r.active&&"border-b-2 border-blue-400"),children:"Home"})}),(0,p.jsx)("li",{className:"mx-1 cursor-pointer hover:bg-gray-300 sm:px-4 sm:py-2 p-0 rounded-md sm:text-lg text-sm",children:(0,p.jsx)(i.rU,{to:"/about",className:"".concat("about"===r.active&&"border-b-2 border-blue-400"),children:"About"})}),(0,p.jsx)("li",{className:"mx-1 cursor-pointer hover:bg-gray-300 sm:px-4 sm:py-2 p-0 rounded-md sm:text-lg text-sm",children:(0,p.jsx)(i.rU,{to:"/contact",className:"".concat("contact"===r.active&&"border-b-2 border-blue-400"),children:"Contact Us"})})]})}),(0,p.jsxs)("div",{className:"cursor-pointer flex justify-center items-center",children:[(0,p.jsx)(k,{sx:{bgcolor:N[500]},children:null===(e=y.user)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.name.substring(0,1)}),(0,p.jsx)("div",{className:"",onClick:function(){f(!d)},children:(0,p.jsx)(S.Z,{})}),(0,p.jsx)("div",{className:"".concat(d?"z-10 translate-y-16":"-z-10 -translate-y-[120%]"," transition-all -translate-x-4 absolute top-0 bg-white px-2 py-4 shadow-lg border-2 rounded-md"),children:void 0!=(null===(a=y.user)||void 0===a?void 0:a.user)?(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{onClick:function(){return v("/dashboard")},className:"hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md",children:"Dashboard"}),(0,p.jsx)("li",{className:"hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md",children:"Change Password"}),(0,p.jsx)("li",{onClick:function(){return w()},className:"hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md",children:"Log Out"})]}):(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{onClick:function(){return v("/login")},className:"hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md",children:"Log In"}),(0,p.jsx)("li",{onClick:function(){return v("/signup")},className:"hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md",children:"Sign Up"})]})})]})]})})}},6759:function(r,e,t){var n=t(5318);e.Z=void 0;var o=n(t(5649)),a=t(184),s=(0,o.default)((0,a.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");e.Z=s},2135:function(r,e,t){r.exports=t.p+"static/media/logo.bbf3bcf4216b602dbdd9.png"}}]);
//# sourceMappingURL=262.43ab9b43.chunk.js.map