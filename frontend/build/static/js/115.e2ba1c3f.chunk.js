"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[115],{1115:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(5861),r=n(7757),c=n.n(r),o=n(2791),u=n(6030),s=n(6871),p=n(9166),i=n(184),l=function(e){var t=e.score;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"bg-white my-2 mx-2 rounded-md p-2 flex justify-between",children:[(0,i.jsx)("div",{className:"italic text-lg text-center w-1/3 m-auto",children:t.studentId.name}),(0,i.jsx)("div",{className:"italic text-lg text-center w-1/3 m-auto",children:t.score}),(0,i.jsxs)("div",{className:"italic text-lg text-center w-1/3 m-auto",children:[100*t.score/t.examId.questions.length,"%"]})]})})},d=function(){var e,t,n=(0,u.I0)(),r=(0,u.v9)((function(e){return e.score})),d=(0,s.UO)().examId;return(0,o.useEffect)((0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n((0,p.AE)(d));case 2:case"end":return e.stop()}}),e)}))),[]),(0,o.useEffect)((function(){var e,t;console.log(r),null===r||void 0===r||null===(e=r.score)||void 0===e||null===(t=e.scores)||void 0===t||t.map((function(e){console.log(e)}))}),[r]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"bg-white my-2 mx-2 rounded-md p-2 flex justify-between",children:[(0,i.jsx)("div",{className:"font-bold text-lg text-center w-1/3 m-auto",children:"Name Of Student"}),(0,i.jsx)("div",{className:"font-bold text-lg text-center w-1/3 m-auto",children:"Score"}),(0,i.jsx)("div",{className:"font-bold text-lg text-center w-1/3 m-auto",children:"Percent"})]}),null===r||void 0===r||null===(e=r.score)||void 0===e||null===(t=e.scores)||void 0===t?void 0:t.map((function(e){return(0,i.jsx)(l,{score:e})}))]})}},9166:function(e,t,n){n.d(t,{$r:function(){return T},AE:function(){return g},Ag:function(){return v},F7:function(){return j},Ft:function(){return m},G:function(){return i},Ni:function(){return d},OM:function(){return h},Vf:function(){return k},Ym:function(){return y},go:function(){return f},iM:function(){return w},mB:function(){return S},md:function(){return l},un:function(){return x}});var a=n(5861),r=n(7757),c=n.n(r),o=n(4569),u=n.n(o),s="";function p(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),a=0;a<n.length;a++){for(var r=n[a];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""}var i=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireGetStudents"}),a="".concat(s,"/api/v1/searchStudent?keyword=").concat(e),{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},r=p("authToken"),t.next=7,u().post(a,{authToken:r});case 7:o=t.sent,i=o.data,n({type:"GetStudentSuccess",payload:i}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:"GetStudentFail",payload:t.t0.response.data});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireGetTeachers"}),a="".concat(s,"/api/v1/searchTeacher?keyword=").concat(e),r=p("authToken"),t.next=6,u().post(a,{authToken:r});case 6:o=t.sent,i=o.data,n({type:"GetTeacherSuccess",payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"GetTeacherFail",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireGetStudents"}),a="".concat(s,"/api/v1/getStudentProfile/").concat(e),{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},t.next=6,u().get(a);case 6:r=t.sent,o=r.data,n({type:"GetStudentSuccess",payload:o}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"GetStudentFail",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"RequireGetStudents"}),n="".concat(s,"/api/v1/showStudents"),a=p("authToken"),e.next=6,u().post(n,{authToken:a});case 6:r=e.sent,o=r.data,t({type:"GetStudentSuccess",payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"GetStudentFail",payload:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireAddStudents"}),a="".concat(s,"/api/v1/addStudent/").concat(e),r=p("authToken"),{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},t.next=7,u().post(a,{authToken:r});case 7:o=t.sent,i=o.data,n({type:"AddStudentSuccess",payload:i}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n({type:"AddStudentFail",payload:t.t0.response.data});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"RequireGetExam"}),n=p("authToken"),a="".concat(s,"/api/v1/getExams"),e.next=6,u().post(a,{authToken:n});case 6:r=e.sent,o=r.data,t({type:"GetExamSuccess",payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"GetExamFail",payload:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=(0,a.Z)(c().mark((function e(t){var n,a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"RequireMyExam"}),n=p("authToken"),e.next=5,u().post("".concat(s,"/api/v1/getMyExams"),{authToken:n});case 5:a=e.sent,r=a.data,t({type:"GetMyExamSuccess",payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"GetMyExamFailure",payload:e.t0.response.data});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e,t){return function(){var n=(0,a.Z)(c().mark((function n(a){var r,o,i,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:"RequireCreateExam"}),r=p("authToken"),o="".concat(s,"/api/v1/createExam"),n.next=6,u().post(o,{startDate:e,endDate:t,authToken:r},{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});case 6:i=n.sent,l=i.data,a({type:"CreateExamSuccess",payload:l}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:"CreateExamFailure",payload:n.t0.response.data});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},m=function(){return function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"clearCreateExam"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"clearSendAnswer"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireTakeExam"}),a=p("authToken"),r="".concat(s,"/api/v1/takeExam/").concat(e),t.next=6,u().post(r,{authToken:a},{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});case 6:o=t.sent,i=o.data,n({type:"TakeExamSuccess",payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"TakeExamFailure",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var n=(0,a.Z)(c().mark((function n(a){var r,o,i,l;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:"RequireSendAnswers"}),r="".concat(s,"/api/v1/getAnswers/").concat(t),o=p("authToken"),n.next=6,u().post(r,{answers:e,authToken:o},{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});case 6:i=n.sent,l=i.data,a({type:"SendAnswerSuccess",payload:l}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:"SendAnswerFailure",payload:n.t0.response.data});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},S=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireCalScore"}),a=p("authToken"),r="".concat(s,"/api/v1/calculateScore/").concat(e),t.next=6,u().post(r,{authToken:a},{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});case 6:o=t.sent,i=o.data,n({type:"CalScoreSuccess",payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"CalScoreFailure",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireGetScore"}),a="".concat(s,"/api/v1/getScore/").concat(e),r=p("authToken"),t.next=6,u().post(a,{authToken:r},{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});case 6:o=t.sent,i=o.data,n({type:"GetScoreSuccess",payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"GetScoreFailure",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=(0,a.Z)(c().mark((function t(n){var a,r,o,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"RequireGetScore"}),a="".concat(s,"/api/v1/getMyScore/").concat(e),r=p("authToken"),t.next=6,u().post(a,{authToken:r},{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"});case 6:o=t.sent,i=o.data,n({type:"GetScoreSuccess",payload:i}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"GetScoreFailure",payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=115.e2ba1c3f.chunk.js.map