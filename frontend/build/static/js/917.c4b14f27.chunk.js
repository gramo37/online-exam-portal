"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[917],{6917:function(e,t,n){n.r(t);var r=n(5861),o=n(885),a=n(7757),s=n.n(a),i=n(2791),c=n(5457),l=n(6030),u=n(9358),d=n(810),f=n(5443),h=n(6871),v=n(184);t.default=function(){var e=(0,i.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],m=(0,l.I0)(),p=(0,d.VY)(),g=(0,i.useState)(0),x=(0,o.Z)(g,2),b=x[0],Z=x[1],y=(0,l.v9)((function(e){return e.linkStatus})),w=(0,h.s0)();(0,i.useEffect)((function(){console.log(y),void 0===y.error||""===y.error||y.error.success?void 0!==y.linkStatus&&""!==y.linkStatus&&y.linkStatus.success&&p.success(y.linkStatus.message):p.error(y.error.message)}),[y]);var S=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),Z(40),e.next=4,m((0,u.aY)(n));case 4:Z(100),w("/api/v1/reset/password"),console.log(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.Z,{color:"#2b7a2b",height:4,progress:b,onLoaderFinished:function(){return Z(0)}}),(0,v.jsx)("div",{className:"flex justify-center items-center h-[100vh] w-full",children:(0,v.jsxs)("div",{className:"flex flex-col justify-center items-stretch h-full w-full bg-white",children:[(0,v.jsxs)("div",{className:"flex items-center justify-center flex-col my-12",children:[(0,v.jsx)("div",{className:"text-4xl text-green-600 my-2",children:"Forgot Password"}),(0,v.jsx)("div",{className:"sub-heading my-2 px-2 text-lg text-gray-400 text-center italic",children:"We will send you the password reset link on mail. Kindly enter your Mail"})]}),(0,v.jsxs)("form",{className:"flex flex-col justify-center items-center",onSubmit:S,children:[(0,v.jsxs)("div",{className:"flex items-center",children:[(0,v.jsx)("div",{className:"absolute ml-2",children:(0,v.jsx)(c.Z,{})}),(0,v.jsx)("input",{className:"bg-green-100 border-2 pl-12 py-2 my-2 rounded-md w-[18rem] sm:w-[20rem]",type:"email",placeholder:"Enter Email",value:n,onChange:function(e){return a(e.target.value)}})]}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{style:{padding:"10px"},type:"submit",className:"rounded-md bg-green-500 mt-4 shadow-md text-white font-bold hover:bg-green-300",children:"Send Link"})})]})]})})]})}},5457:function(e,t,n){var r=n(5318);t.Z=void 0;var o=r(n(5649)),a=n(184),s=(0,o.default)((0,a.jsx)("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}),"EmailOutlined");t.Z=s},5443:function(e,t,n){var r=n(1413),o=n(885),a=n(2791),s=function(){};function i(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var c=(0,a.forwardRef)((function(e,t){var n=e.progress,c=e.height,l=void 0===c?2:c,u=e.className,d=void 0===u?"":u,f=e.color,h=void 0===f?"red":f,v=e.background,m=void 0===v?"transparent":v,p=e.onLoaderFinished,g=e.transitionTime,x=void 0===g?300:g,b=e.loaderSpeed,Z=void 0===b?500:b,y=e.waitingTime,w=void 0===y?1e3:y,S=e.shadow,j=void 0===S||S,k=e.containerStyle,N=void 0===k?{}:k,E=e.style,R=void 0===E?{}:E,Y=e.shadowStyle,I=void 0===Y?{}:Y,V=e.containerClassName,z=void 0===V?"":V,C=(0,a.useRef)(!1),F=(0,a.useState)(0),M=(0,o.Z)(F,2),T=M[0],H=M[1],L=(0,a.useState)({active:!1,startingValue:20,refreshRate:1e3}),P=(0,o.Z)(L,2),D=P[0],K=P[1],O=(0,a.useState)(!1),W=(0,o.Z)(O,2),q=W[0],A=W[1],B=(0,a.useState)({active:!1,value:20}),G=(0,o.Z)(B,2),J=G[0],Q=G[1],U={height:"100%",background:h,transition:"all ".concat(Z,"ms ease"),width:"0%"},X={position:"fixed",top:0,left:0,height:l,background:m,zIndex:99999999999,width:"100%"},$={boxShadow:"0 0 10px ".concat(h,", 0 0 10px ").concat(h),width:"5%",opacity:1,position:"absolute",height:"100%",transition:"all ".concat(Z,"ms ease"),transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},_=(0,a.useState)(U),ee=(0,o.Z)(_,2),te=ee[0],ne=ee[1],re=(0,a.useState)($),oe=(0,o.Z)(re,2),ae=oe[0],se=oe[1];(0,a.useEffect)((function(){return C.current=!0,function(){C.current=!1}}),[]),(0,a.useImperativeHandle)(t,(function(){return{continuousStart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(!J.active)if(q)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var n=e||i(10,20);K({active:!0,refreshRate:t,startingValue:e}),H(n),ie(n)}},staticStart:function(e){if(!D.active)if(q)console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");else{var t=e||i(30,50);Q({active:!0,value:t}),H(t),ie(t)}},complete:function(){q?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(H(100),ie(100))}}})),(0,a.useEffect)((function(){ne((0,r.Z)((0,r.Z)({},te),{},{background:h})),se((0,r.Z)((0,r.Z)({},ae),{},{boxShadow:"0 0 10px ".concat(h,", 0 0 5px ").concat(h)}))}),[h]),(0,a.useEffect)((function(){if(t){if(t&&void 0!==n)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');ie(T),A(!1)}else n&&ie(n),A(!0)}),[n]);var ie=function e(t){t>=100?(ne((0,r.Z)((0,r.Z)({},te),{},{width:"100%"})),j&&se((0,r.Z)((0,r.Z)({},ae),{},{left:t-10+"%"})),setTimeout((function(){C.current&&(ne((0,r.Z)((0,r.Z)({},te),{},{opacity:0,width:"100%",transition:"all ".concat(x,"ms ease-out"),color:h})),setTimeout((function(){C.current&&(D.active&&(K((0,r.Z)((0,r.Z)({},D),{},{active:!1})),H(0),e(0)),J.active&&(Q((0,r.Z)((0,r.Z)({},J),{},{active:!1})),H(0),e(0)),p&&p(),H(0),e(0))}),x))}),w)):(ne((function(e){return(0,r.Z)((0,r.Z)({},e),{},{width:t+"%",opacity:1,transition:t>0?"all ".concat(Z,"ms ease"):""})})),j&&se((0,r.Z)((0,r.Z)({},ae),{},{left:t-5.5+"%",transition:t>0?"all ".concat(Z,"ms ease"):""})))};return function(e,t,n){var r=(0,a.useRef)(s);(0,a.useEffect)((function(){r.current=e})),(0,a.useEffect)((function(){n&&null!==t&&!1!==t&&r.current()}),[n]),(0,a.useEffect)((function(){if(null!==t&&!1!==t){var e=setInterval((function(){return r.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e=i(10,20);T+e<90&&(H(T+e),ie(T+e))}),D.active?D.refreshRate:null),(0,a.createElement)("div",{className:z,style:(0,r.Z)((0,r.Z)({},X),N)},(0,a.createElement)("div",{className:d,style:(0,r.Z)((0,r.Z)({},te),R)},j?(0,a.createElement)("div",{style:(0,r.Z)((0,r.Z)({},ae),I)}):null))}));t.Z=c}}]);
//# sourceMappingURL=917.c4b14f27.chunk.js.map