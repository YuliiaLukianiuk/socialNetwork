(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(34),a=n(5),s="SEND-MESSAGE",c={dialogData:[{id:1,name:"Yuliia"},{id:2,name:"Anna"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Hello!!!"},{id:4,message:"Hi"},{id:5,message:"How are you?"},{id:6,message:"yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:7,message:n}])});default:return e}}},135:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3VAEM",selectedPage:"users_selectedPage__16QLb",pageNumber:"users_pageNumber__3VQtP"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(132),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"6e47cc31-4791-45a1-9bde-719317a38571"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method.Please profileApi object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},16:function(e,t,n){e.exports={nav:"Navbar_nav__JzKXi",item:"Navbar_item__OH7lF",active:"Navbar_active__jBKW_"}},166:function(e,t,n){},167:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(67),c=n.n(s),i=(n(166),n(36)),o=n(37),u=n(39),l=n(38),d=(n(167),n(13)),j=n(16),f=n.n(j),b=n(1),p=function(){return Object(b.jsxs)("nav",{className:f.a.nav,children:[Object(b.jsx)("div",{className:f.a.item,children:Object(b.jsx)(d.b,{to:"/profile",activeClassName:f.a.active,children:"Profile"})}),Object(b.jsx)("div",{className:f.a.item,children:Object(b.jsx)(d.b,{to:"/dialogs",activeClassName:f.a.active,children:"Messages"})}),Object(b.jsx)("div",{className:f.a.item,children:Object(b.jsx)(d.b,{to:"/news",activeClassName:f.a.active,children:"News"})}),Object(b.jsx)("div",{className:f.a.item,children:Object(b.jsx)(d.b,{to:"/music",activeClassName:f.a.active,children:"Music"})}),Object(b.jsx)("div",{className:f.a.item,children:Object(b.jsx)(d.b,{to:"/setting",activeClassName:f.a.active,children:"Settings"})}),Object(b.jsx)("div",{className:f.a.item,children:Object(b.jsx)(d.b,{to:"/users",activeClassName:f.a.active,children:"Users"})})]})},h=n(11),g=n(5),O=n(93),m=n.n(O),v=function(e){return Object(b.jsxs)("header",{className:m.a.header,children:[Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"}),Object(b.jsx)("div",{className:m.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(b.jsx)(d.b,{to:"/login",children:"Login"})})]})},x=n(18),w=n(10),P=n.n(w),_=n(20),y=n(15),S=n(44),C="samurai-networks/auth/SET_USER_DATA",N={userId:null,email:null,login:null,isAuth:!1},k=function(e,t,n,r){return{type:C,data:{userId:e,email:t,login:n,isAuth:r}}},E=function(){return function(){var e=Object(_.a)(P.a.mark((function e(t){var n,r,a,s,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(k(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(g.a)(Object(g.a)({},e),t.data);default:return e}},T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(v,Object(g.a)({},this.props))}}]),n}(a.a.Component),U=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(_.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),z=n(129),A=n(33),F=n(68),L=n(52),M=n.n(L),D=Object(z.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(b.jsxs)("form",{onSubmit:t,children:[Object(A.a)("Email","email",[F.b],A.b),Object(A.a)("Password","password",[F.b],A.b,{type:"password"}),Object(A.a)(null,"rememberMe",[F.b],A.b,{type:"checkbox"},"remember me"),n&&Object(b.jsx)("div",{className:M.a.formSummaryError,children:n}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"LOGIN"})})]})})),G=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(_.a)(P.a.mark((function r(a){var s,c;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(E()):(c=s.data.messages.length>0?s.data.messages[0]:"Some Error",a(Object(S.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){console.log(e);return e.isAuth?Object(b.jsx)(h.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(D,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),H=n(34),R=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},B="FOLLOW",V="UNFOLLOW",W="SET_USERS",X="SET_CURRENT_PAGE",J="SET_TOTAL_USERS_COUNT",K="TOGGLE_IS_FETCHING",q="TOGGLE_IS_FOLLOWING",Q={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Y=function(e){return{type:B,userId:e}},Z=function(e){return{type:V,userId:e}},$=function(e){return{type:X,currentPage:e}},ee=function(e){return{type:K,isFetching:e}},te=function(e,t){return{type:q,isFetching:e,userId:t}},ne=function(){var e=Object(_.a)(P.a.mark((function e(t,n,r,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(te(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(g.a)(Object(g.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!0})});case V:return Object(g.a)(Object(g.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!1})});case W:return Object(g.a)(Object(g.a)({},e),{},{users:Object(H.a)(t.users)});case X:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case J:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case K:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case q:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ae=n(56),se=n(130),ce=n(97),ie=n.n(ce),oe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?15:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),j=Object(r.useState)(1),f=Object(se.a)(j,2),p=f[0],h=f[1],g=(p-1)*i+1,O=p*i;return Object(b.jsxs)("div",{children:[p>1&&Object(b.jsx)("button",{onClick:function(){h(p-1)},children:"PREV"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(b.jsx)("span",{className:a===e?ie.a.selectedPage:ie.a.pageNumber,style:{cursor:"pointer",marginTop:33,padding:10},onClick:function(t){s(e)},children:e})})),d>p&&Object(b.jsx)("button",{onClick:function(){h(p+1)},children:"NEXT"})]})},ue=n(135),le=n.n(ue),de=n.p+"static/media/user.9cd48d3d.png",je=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/profile/"+t.id,children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:de,className:le.a.userPhoto})})}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow "}):Object(b.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("span",{children:[Object(b.jsxs)("div",{children:[t.name," "]}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("span",{children:[Object(b.jsxs)("div",{children:["location.country"," "]}),Object(b.jsxs)("div",{children:["location.city"," "]})]})]})]})},fe=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,s=e.users,c=Object(ae.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",height:40},children:Object(b.jsx)(oe,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a})}),s.map((function(e){return Object(b.jsx)(je,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)}))]})},be=n(50),pe=n(9),he=function(e){return e.usersPage.users},ge=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},xe=function(e){return e.usersPage.followingInProgress},we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(be.a,{}):null,Object(b.jsx)(fe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Pe=Object(pe.d)(Object(x.b)((function(e){return{users:he(e),pageSize:ge(e),totalUsersCount:Oe(e),currentPage:me(e),isFetching:ve(e),followingInProgress:xe(e)}}),{follow:function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=y.c.follow.bind(y.c),ne(n,e,r,Y);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=y.c.unfollow.bind(y.c),ne(n,e,r,Z);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:$,toggleFollowingProgress:te,getUsers:function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ee(!0)),r($(e)),n.next=4,y.c.getUsers(e,t);case 4:a=n.sent,r(ee(!1)),r((c=a.items,{type:W,users:c})),r((s=a.totalCount,{type:J,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(we),_e="INITIALIZED_SUCCESSv",ye={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},Ce=n(128),Ne=n(98),ke=n(136),Ee=n(131),Ie=Object(pe.c)({profilePage:Ne.b,messagePage:Ce.a,usersPage:re,auth:I,form:Ee.a,app:Se}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,Ue=Object(pe.e)(Ie,Te(Object(pe.a)(ke.a))),ze=a.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),Ae=a.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),Fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(U,{}),Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsxs)(a.a.Suspense,{fallback:Object(b.jsx)(be.a,{}),children:[Object(b.jsx)(h.b,{path:"/dialogs",render:function(){return Object(b.jsx)(ze,{})}}),Object(b.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(Ae,{})}})]}),Object(b.jsx)(h.b,{path:"/users",render:function(){return Object(b.jsx)(Pe,{})}}),Object(b.jsx)(h.b,{path:"/login",render:function(){return Object(b.jsx)(G,{})}})]})]}):Object(b.jsx)(be.a,{})}}]),n}(a.a.Component),Le=Object(pe.d)(h.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(E());Promise.all([t]).then((function(){e({type:_e})}))}}}))(Fe),Me=function(e){return Object(b.jsx)(d.a,{children:Object(b.jsx)(x.a,{store:Ue,children:Object(b.jsx)(Le,{})})})};c.a.render(Object(b.jsx)(Me,{}),document.getElementById("root"))},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return j}));var r=n(5),a=n(56),s=(n(0),n(52)),c=n.n(s),i=n(90),o=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(s?c.a.error:""),children:[Object(o.jsx)("div",{children:a}),s&&Object(o.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},s))," ",c]})}},50:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.c665d296.svg",a=(n(0),n(1));t.a=function(e){return Object(a.jsx)("img",{src:r})}},52:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2R5H1",error:"FormsControl_error__38ckv",formSummaryError:"FormsControl_formSummaryError__1e0-U"}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,n){e.exports={header:"Header_header__3fG4-",loginBlock:"Header_loginBlock__qOm-P"}},97:function(e,t,n){e.exports={selectedPage:"Pagination_selectedPage__1kCuB",pageNumber:"Pagination_pageNumber__2sViN"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(10),a=n.n(r),s=n(20),c=n(34),i=n(5),o=n(15),u="ADD-POST",l="SET_USERS_PROFILE",d="SET_STATUS",j="SET_POST_DELETE",f={posts:[{id:1,message:"Hi, how are you?",likesCount:"27"},{id:2,message:"It's my first post",likesCount:"2"}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostNext:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.19c2b6b9.chunk.js.map