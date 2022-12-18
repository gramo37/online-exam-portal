"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[533],{8533:function(e,t,n){n.r(t);var r=n(5861),o=n(885),a=n(7757),s=n.n(a),i=n(2791),c=n(7197),l=n(6030),u=n(9358),f=n(810),d=n(6871),v=n(5443),h=n(184);t.default=function(){var e=(0,l.I0)(),t=(0,l.v9)((function(e){return e.user})),n=(0,l.v9)((function(e){return e.signInDetails})),a=(0,l.v9)((function(e){return e.otp})),m=(0,f.VY)(),p=(0,d.s0)(),g=(0,i.useState)(0),x=(0,o.Z)(g,2),b=x[0],Z=x[1],y=(0,i.useState)(!1),w=(0,o.Z)(y,2),S=w[0],j=w[1];(0,i.useEffect)((function(){console.log(t),""!==a.otpStatus&&void 0!==a.otpStatus&&a.otpStatus.success&&!t.loading&&S&&(void 0!==t.error&&""!==t.error?m.error(t.error.message):""!==t.user&&void 0!==t.user&&(m.success("User registered Successfully."),p("/home")))}),[t]),(0,i.useEffect)((function(){console.log(a),""!==a.error&&void 0!==a.error&&m.error(a.error.message)}),[a]),(0,i.useEffect)((function(){console.log(n),void 0===n.userCredentials.name&&(m.error("Sorry, Something went wrong."),p("/signup"))}),[]);var E=(0,i.useState)(""),N=(0,o.Z)(E,2),C=N[0],k=N[1],I=function(){var t=(0,r.Z)(s().mark((function t(r){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),Z(30),t.next=4,e((0,u.qD)(n.userCredentials.email,C));case 4:return j(!0),console.log(n),Z(60),t.next=9,e((0,u.w2)({name:n.userCredentials.name,email:n.userCredentials.email,password:n.userCredentials.password},n.userCredentials.role));case 9:return Z(80),t.next=12,e((0,u.II)());case 12:Z(100);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.Z,{color:"#2b7a2b",height:4,progress:b,onLoaderFinished:function(){return Z(0)}}),(0,h.jsx)("div",{className:"flex justify-center items-center h-[100vh] w-full",children:(0,h.jsxs)("div",{className:"flex flex-col justify-center items-stretch h-full w-full bg-white",children:[(0,h.jsxs)("div",{className:"flex items-center justify-center flex-col my-12",children:[(0,h.jsx)("div",{className:"text-4xl text-green-600 my-2",children:"Verify OTP"}),(0,h.jsx)("div",{className:"sub-heading my-2 text-lg text-gray-400 italic",children:"We have sent you the OTP on email."})]}),(0,h.jsxs)("form",{className:"flex flex-col justify-center items-center",onChange:function(e){return function(e){k(e.target.value)}(e)},onSubmit:function(e){return I(e)},children:[(0,h.jsxs)("div",{className:"flex items-center",children:[(0,h.jsx)("div",{className:"absolute ml-2",children:(0,h.jsx)(c.Z,{})}),(0,h.jsx)("input",{style:{width:"28rem"},className:"bg-green-100 pl-12 py-3 my-2 rounded-md",type:"number",placeholder:"Enter OTP",name:"otp",value:C})]}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{type:"submit",className:"rounded-full bg-green-500 py-3 px-16 mt-4 shadow-md text-white font-bold hover:bg-green-300",children:"VERIFY OTP"})})]})]})})]})}},7197:function(e,t,n){var r=n(5318);t.Z=void 0;var o=r(n(5649)),a=n(184),s=(0,o.default)((0,a.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"}),"Security");t.Z=s},5443:function(e,t,n){var r=n(1413),o=n(885),a=n(2791),s=function(){};function i(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var c=(0,a.forwardRef)((function(e,t){var n=e.progress,c=e.height,l=void 0===c?2:c,u=e.className,f=void 0===u?"":u,d=e.color,v=void 0===d?"red":d,h=e.background,m=void 0===h?"transparent":h,p=e.onLoaderFinished,g=e.transitionTime,x=void 0===g?300:g,b=e.loaderSpeed,Z=void 0===b?500:b,y=e.waitingTime,w=void 0===y?1e3:y,S=e.shadow,j=void 0===S||S,E=e.containerStyle,N=void 0===E?{}:E,C=e.style,k=void 0===C?{}:C,I=e.shadowStyle,R=void 0===I?{}:I,T=e.containerClassName,V=void 0===T?"":T,Y=(0,a.useRef)(!1),P=(0,a.useState)(0),F=(0,o.Z)(P,2),O=F[0],z=F[1],D=(0,a.useState)({active:!1,startingValue:20,refreshRate:1e3}),M=(0,o.Z)(D,2),H=M[0],L=M[1],q=(0,a.useState)(!1),U=(0,o.Z)(q,2),W=U[0],A=U[1],B=(0,a.useState)({active:!1,value:20}),G=(0,o.Z)(B,2),J=G[0],K=G[1],Q={height:"100%",background:v,transition:"all ".concat(Z,"ms ease"),width:"0%"},X={position:"fixed",top:0,left:0,height:l,background:m,zIndex:99999999999,width:"100%"},$={boxShadow:"0 0 10px ".concat(v,", 0 0 10px ").concat(v),width:"5%",opacity:1,position:"absolute",height:"100%",transition:"all ".concat(Z,"ms ease"),transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},_=(0,a.useState)(Q),ee=(0,o.Z)(_,2),te=ee[0],ne=ee[1],re=(0,a.useState)($),oe=(0,o.Z)(re,2),ae=oe[0],se=oe[1];(0,a.useEffect)((function(){return Y.current=!0,function(){Y.current=!1}}),[]),(0,a.useImperativeHandle)(t,(function(){return{continuousStart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(!J.active)if(W)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var n=e||i(10,20);L({active:!0,refreshRate:t,startingValue:e}),z(n),ie(n)}},staticStart:function(e){if(!H.active)if(W)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var t=e||i(30,50);K({active:!0,value:t}),z(t),ie(t)}},complete:function(){W?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(z(100),ie(100))}}})),(0,a.useEffect)((function(){ne((0,r.Z)((0,r.Z)({},te),{},{background:v})),se((0,r.Z)((0,r.Z)({},ae),{},{boxShadow:"0 0 10px ".concat(v,", 0 0 5px ").concat(v)}))}),[v]),(0,a.useEffect)((function(){if(t){if(t&&void 0!==n)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');ie(O),A(!1)}else n&&ie(n),A(!0)}),[n]);var ie=function e(t){t>=100?(ne((0,r.Z)((0,r.Z)({},te),{},{width:"100%"})),j&&se((0,r.Z)((0,r.Z)({},ae),{},{left:t-10+"%"})),setTimeout((function(){Y.current&&(ne((0,r.Z)((0,r.Z)({},te),{},{opacity:0,width:"100%",transition:"all ".concat(x,"ms ease-out"),color:v})),setTimeout((function(){Y.current&&(H.active&&(L((0,r.Z)((0,r.Z)({},H),{},{active:!1})),z(0),e(0)),J.active&&(K((0,r.Z)((0,r.Z)({},J),{},{active:!1})),z(0),e(0)),p&&p(),z(0),e(0))}),x))}),w)):(ne((function(e){return(0,r.Z)((0,r.Z)({},e),{},{width:t+"%",opacity:1,transition:t>0?"all ".concat(Z,"ms ease"):""})})),j&&se((0,r.Z)((0,r.Z)({},ae),{},{left:t-5.5+"%",transition:t>0?"all ".concat(Z,"ms ease"):""})))};return function(e,t,n){var r=(0,a.useRef)(s);(0,a.useEffect)((function(){r.current=e})),(0,a.useEffect)((function(){n&&null!==t&&!1!==t&&r.current()}),[n]),(0,a.useEffect)((function(){if(null!==t&&!1!==t){var e=setInterval((function(){return r.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e=i(10,20);O+e<90&&(z(O+e),ie(O+e))}),H.active?H.refreshRate:null),(0,a.createElement)("div",{className:V,style:(0,r.Z)((0,r.Z)({},X),N)},(0,a.createElement)("div",{className:f,style:(0,r.Z)((0,r.Z)({},te),k)},j?(0,a.createElement)("div",{style:(0,r.Z)((0,r.Z)({},ae),R)}):null))}));t.Z=c}}]);
//# sourceMappingURL=533.3f8d07bc.chunk.js.map