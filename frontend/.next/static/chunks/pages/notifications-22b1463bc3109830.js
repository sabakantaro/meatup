(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{1865:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notifications",function(){return s(1097)}])},2066:function(e,t,s){"use strict";var r=s(5893),n=s(7294),a=s(3634);t.Z=function(){var e=(0,n.useContext)(a.AuthContext).currentUser;return(0,r.jsxs)("footer",{className:"grid grid-cols-1 md:grid-cols-3 gap-y-4 px-8 md:px-32 py-14 bg-slate-800 text-white",children:[(0,r.jsxs)("div",{className:"space-y-4 text-xs text-gray-300",children:[(0,r.jsx)("h5",{className:"font-bold",children:"ACCOUNT"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/users/".concat(null==e?void 0:e.id,"/show"),children:"My Page"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/events/create",children:"Become a Host"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/notifications",children:"Notifications"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/chatrooms",children:"Messages"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/signout",children:"Logout"})]}),(0,r.jsxs)("div",{className:"space-y-4 text-xs text-gray-300",children:[(0,r.jsx)("h5",{className:"font-bold pt-3 md:pt-0",children:"DISCOVER"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/search",children:"Search Events"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/search",children:"Workout place"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/search",children:"Sponsored Event"})]}),(0,r.jsxs)("div",{className:"space-y-4 text-xs text-gray-300",children:[(0,r.jsx)("h5",{className:"font-bold pt-3 md:pt-0",children:"MEATUP"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/",children:"About Us"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/",children:"Privacy & Policy"}),(0,r.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/",children:"Terms of Service"})]})]})}},1090:function(e,t,s){"use strict";s.d(t,{Z:function(){return f}});var r=s(828),n=s(5893),a=s(7294),i=s(1163),c=s(3520),o=s(286);s(1759),s(5138);var l=s(3634),u=s(2606),d=s(7106),h=function(e){var t=e.items,s=e.button;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(u.v,{as:"div",className:"relative inline-block text-left",children:[s,(0,n.jsx)(d.u,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsx)(u.v.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,n.jsx)("div",{className:"py-1",children:t.map(function(e){return(0,n.jsx)(u.v.Item,{children:function(t){var s=t.active;return(0,n.jsx)("a",{href:e.href,className:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}(s?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:e.name})}})})})})})]})})},x=s(6162),m=s(1613),f=function(e){var t=e.placeholder,s=(0,i.useRouter)(),d=s.query,f=d.location,g=d.date,p=(0,a.useContext)(l.AuthContext),v=p.currentUser,j=p.isSignedIn,N=(0,r.Z)((0,a.useState)(f||""),2),y=N[0],b=N[1],w=(0,r.Z)((0,a.useState)(!0),2),k=w[0],_=w[1],C=(0,r.Z)((0,a.useState)(!1),2),Z=C[0],S=C[1],E=(0,r.Z)((0,a.useState)(!1),2),P=E[0],T=E[1],A=(0,r.Z)((0,a.useState)(new Date(g)),2),U=A[0],D=A[1];(0,a.useEffect)(function(){D(new Date(g||new Date))},[s]),(0,a.useEffect)(function(){var e=function(){T(window.innerWidth<768)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),(0,a.useEffect)(function(){var e=setTimeout(function(){_(!1)},800);return function(){return clearTimeout(e)}},[]);var F=(0,n.jsxs)("div",{className:"flex items-center border-2 rounded-full py-2 shadow-sm m-auto max-w-[400px] w-full mt-5 md:mt-0",children:[(0,n.jsx)("input",{value:y,onChange:function(e){b(e.target.value),S(!0)},className:"flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full",type:"text",placeholder:t||"Start your search..."}),(0,n.jsx)(c,{className:"inline-flex h-8 w-9 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2",onClick:function(){return S(!0)}})]}),B=j?(0,n.jsx)(h,{items:[{name:"Profile",href:"/users/".concat(v&&v.id,"/show")},{name:"Create Event",href:"/events/create"},{name:"Notifications",href:"/notifications"},{name:"Messages",href:"/chatrooms"},{name:"Logout",href:"/signout"}],button:P?(0,n.jsx)(u.v.Button,{children:(0,n.jsx)(x,{className:"h-6"})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(u.v.Button,{className:"flex items-center space-x-2 border-2 p-2 rounded-full",children:[(0,n.jsx)(x,{className:"h-6"}),(0,n.jsx)(m,{className:"h-6"})]})})}):(0,n.jsx)("button",{className:"inline cursor-pointer",onClick:function(){return s.push("/signin")},children:"Sign In"});return k?(0,n.jsx)("header",{className:"top-0 z-50 bg-white shadow-mb p-5 px-10 border-b border-s-gray-500",children:(0,n.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3",children:[P&&(0,n.jsx)("div",{className:"w-5"}),(0,n.jsx)("div",{className:"animate-pulse flex items-center justify-center md:justify-start h-10 cursor-pointer my-auto",children:(0,n.jsx)("div",{className:"bg-gray-300 h-4 w-16 rounded-full"})}),!P&&(0,n.jsx)("div",{className:"animate-pulse flex items-center md:border-2 rounded-full py-2 md:shadow-sm",children:(0,n.jsx)("div",{className:"bg-gray-300 h-4 w-40 rounded-full"})}),(0,n.jsxs)("div",{className:"flex items-center space-x-0 justify-end text-gray-500",children:[(0,n.jsx)("div",{className:"animate-pulse bg-gray-300 h-4 w-20 rounded-full"}),(0,n.jsx)("div",{className:"animate-pulse bg-gray-300 h-4 w-20 rounded-full"})]})]})}):(0,n.jsxs)("header",{className:"top-0 z-50 bg-white shadow-mb p-5 px-10 border-b border-s-gray-500",children:[(0,n.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3",children:[P&&(0,n.jsx)("div",{className:"w-5"}),(0,n.jsx)("div",{onClick:function(){return s.push("/")},className:"relative flex item-center justify-center md:justify-start h-10 cursor-pointer my-auto",children:(0,n.jsx)("picture",{children:(0,n.jsx)("img",{src:"/meatup_title.png",alt:"Meatup Logo",className:"h-10 object-contain cursor-pointer"})})}),!P&&F,(0,n.jsxs)("div",{className:"flex items-center space-x-0 justify-end text-gray-500",children:[(0,n.jsx)("p",{className:"hidden md:inline cursor-pointer mr-5",onClick:function(){return s.push("/events/create")},children:"Become a host"}),B]})]}),P&&F,Z&&(0,n.jsxs)("div",{className:"flex flex-col col-span-3 mx-auto items-center",children:[(0,n.jsx)(o.f,{date:U,minDate:new Date,color:"#FD5B61",onChange:function(e){return D(e)},onPreviewChange:function(){return D(null)}}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("button",{className:"flex-grow text-gray-500",onClick:function(){return S(!1)},children:"Cancel"}),(0,n.jsx)("div",{className:"w-40"}),(0,n.jsx)("button",{className:"flex-grow text-red-400",onClick:function(){s.push({pathname:"/search",query:{location:y,date:U?U.toISOString():null}})},children:"Search"})]})]})]})}},3875:function(e,t,s){"use strict";var r=s(5893);s(7294),t.Z=function(e){var t=e.src,s=e.userName;return(0,r.jsx)("div",{className:"inline-block rounded-full overflow-hidden bg-red-400 w-12 h-12",children:t?(0,r.jsx)("img",{src:t,alt:"User Avatar",className:"object-cover w-12 h-12"}):(0,r.jsx)("div",{className:"flex items-center justify-center text-white text-xl font-bold uppercase w-12 h-12",children:(void 0===s?"user":s).charAt()})})}},1097:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var r=s(7568),n=s(828),a=s(655),i=s(5893),c=s(7294),o=s(1163),l=s(3875),u=s(1955),d=s(4480),h=s(1090),x=s(2066),m=s(9008),f=s.n(m),g=function(){var e,t,s=(0,n.Z)((0,c.useState)(!0),2),m=s[0],g=s[1],p=(0,n.Z)((0,c.useState)([]),2),v=p[0],j=p[1],N=(0,o.useRouter)(),y=(e=(0,r.Z)(function(){var e;return(0,a.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,d.Z.get("/notifications",{headers:{"access-token":u.Z.get("_access_token"),client:u.Z.get("_client"),uid:u.Z.get("_uid")}})];case 1:return(e=t.sent())?j(e.data.notifications):console.log("No notifications"),[3,3];case 2:return console.log(t.sent()),[3,3];case 3:return g(!1),[2]}})}),function(){return e.apply(this,arguments)});(0,c.useEffect)(function(){y()},[]);var b=(t=(0,r.Z)(function(e){return(0,a.__generator)(this,function(t){switch(t.label){case 0:var s;return t.trys.push([0,2,,3]),[4,(s=String(e.id),d.Z.patch("/notifications/".concat(s)))];case 1:return t.sent()&&N.push(e.linkUrl),[3,3];case 2:return console.log(t.sent()),[3,3];case 3:return g(!1),[2]}})}),function(e){return t.apply(this,arguments)});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(f(),{children:[(0,i.jsx)("title",{children:"Meatup | Notification Page"}),(0,i.jsx)("link",{rel:"icon",href:"/meatup_logo.png"})]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"bg-gray-100 gap-4 h-screen max-w-screen-md m-auto",children:m?null:v.length>0?v.map(function(e){return(0,i.jsx)("div",{className:"bg-white rounded-lg shadow-md cursor-pointer transition duration-300 hover:shadow-lg m-1",children:(0,i.jsxs)("div",{onClick:function(){b(e)},className:"relative p-4 flex items-start",children:[!(null==e?void 0:e.isChecked)&&(0,i.jsx)("div",{className:"absolute top-0 right-0 w-4 h-4 bg-red-400 rounded-full"}),(0,i.jsxs)("div",{className:"flex items-center p-0",children:[(0,i.jsx)("div",{className:"mr-3",children:(0,i.jsx)(l.Z,{alt:"avatar",src:e.imageUrl})}),(0,i.jsx)("div",{className:"flex flex-col flex-grow",children:(0,i.jsx)("h4",{className:"text-xl pb-2 overflow-ellipsis line-clamp-2",children:e.content})})]})]})},null==e?void 0:e.id)}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center pt-10",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/meatup_logo.png",alt:"empty",className:"object-contain h-10 grayscale"})}),(0,i.jsx)("p",{className:"text-gray-500 pt-3",children:"No notifications for now."})]})}),(0,i.jsx)(x.Z,{})]})}},9008:function(e,t,s){e.exports=s(2636)}},function(e){e.O(0,[439,774,888,179],function(){return e(e.s=1865)}),_N_E=e.O()}]);