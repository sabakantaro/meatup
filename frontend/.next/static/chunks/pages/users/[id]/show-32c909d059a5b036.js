(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{2222:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[id]/show",function(){return r(5048)}])},2066:function(e,s,r){"use strict";var t=r(5893),n=r(7294),l=r(3634);s.Z=function(){var e=(0,n.useContext)(l.AuthContext).currentUser;return(0,t.jsxs)("footer",{className:"grid grid-cols-1 md:grid-cols-3 gap-y-4 px-8 md:px-32 py-14 bg-slate-800 text-white",children:[(0,t.jsxs)("div",{className:"space-y-4 text-xs text-gray-300",children:[(0,t.jsx)("h5",{className:"font-bold",children:"ACCOUNT"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/users/".concat(null==e?void 0:e.id,"/show"),children:"My Page"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/events/create",children:"Become a Host"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/notifications",children:"Notifications"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/chatrooms",children:"Messages"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/signout",children:"Logout"})]}),(0,t.jsxs)("div",{className:"space-y-4 text-xs text-gray-300",children:[(0,t.jsx)("h5",{className:"font-bold pt-3 md:pt-0",children:"DISCOVER"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/search",children:"Search Events"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/search",children:"Workout place"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/search",children:"Sponsored Event"})]}),(0,t.jsxs)("div",{className:"space-y-4 text-xs text-gray-300",children:[(0,t.jsx)("h5",{className:"font-bold pt-3 md:pt-0",children:"MEATUP"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/",children:"About Us"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/",children:"Privacy & Policy"}),(0,t.jsx)("a",{className:"hover:text-gray-400 cursor-pointer block",href:"/",children:"Terms of Service"})]})]})}},1090:function(e,s,r){"use strict";r.d(s,{Z:function(){return v}});var t=r(828),n=r(5893),l=r(7294),a=r(1163),i=r(3520),o=r(286);r(1759),r(5138);var c=r(3634),d=r(2606),u=r(7106),x=function(e){var s=e.items,r=e.button;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(d.v,{as:"div",className:"relative inline-block text-left",children:[r,(0,n.jsx)(u.u,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsx)(d.v.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,n.jsx)("div",{className:"py-1",children:s.map(function(e){return(0,n.jsx)(d.v.Item,{children:function(s){var r=s.active;return(0,n.jsx)("a",{href:e.href,className:function(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return s.filter(Boolean).join(" ")}(r?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"),children:e.name})}})})})})})]})})},m=r(6162),h=r(1613),v=function(e){var s=e.placeholder,r=(0,a.useRouter)(),u=r.query,v=u.location,f=u.date,p=(0,l.useContext)(c.AuthContext),j=p.currentUser,g=p.isSignedIn,N=(0,t.Z)((0,l.useState)(v||""),2),w=N[0],b=N[1],y=(0,t.Z)((0,l.useState)(!0),2),k=y[0],C=y[1],_=(0,t.Z)((0,l.useState)(!1),2),S=_[0],E=_[1],M=(0,t.Z)((0,l.useState)(!1),2),z=M[0],L=M[1],A=(0,t.Z)((0,l.useState)(new Date(f)),2),Z=A[0],B=A[1];(0,l.useEffect)(function(){B(new Date(f||new Date))},[r]),(0,l.useEffect)(function(){var e=function(){L(window.innerWidth<768)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]),(0,l.useEffect)(function(){var e=setTimeout(function(){C(!1)},800);return function(){return clearTimeout(e)}},[]);var P=(0,n.jsxs)("div",{className:"flex items-center border-2 rounded-full py-2 shadow-sm m-auto max-w-[400px] w-full mt-5 md:mt-0",children:[(0,n.jsx)("input",{value:w,onChange:function(e){b(e.target.value),E(!0)},className:"flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 w-full",type:"text",placeholder:s||"Start your search..."}),(0,n.jsx)(i,{className:"inline-flex h-8 w-9 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2",onClick:function(){return E(!0)}})]}),T=g?(0,n.jsx)(x,{items:[{name:"Profile",href:"/users/".concat(j&&j.id,"/show")},{name:"Create Event",href:"/events/create"},{name:"Notifications",href:"/notifications"},{name:"Messages",href:"/chatrooms"},{name:"Logout",href:"/signout"}],button:z?(0,n.jsx)(d.v.Button,{children:(0,n.jsx)(m,{className:"h-6"})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(d.v.Button,{className:"flex items-center space-x-2 border-2 p-2 rounded-full",children:[(0,n.jsx)(m,{className:"h-6"}),(0,n.jsx)(h,{className:"h-6"})]})})}):(0,n.jsx)("button",{className:"inline cursor-pointer",onClick:function(){return r.push("/signin")},children:"Sign In"});return k?(0,n.jsx)("header",{className:"top-0 z-50 bg-white shadow-mb p-5 px-10 border-b border-s-gray-500",children:(0,n.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3",children:[z&&(0,n.jsx)("div",{className:"w-5"}),(0,n.jsx)("div",{className:"animate-pulse flex items-center justify-center md:justify-start h-10 cursor-pointer my-auto",children:(0,n.jsx)("div",{className:"bg-gray-300 h-4 w-16 rounded-full"})}),!z&&(0,n.jsx)("div",{className:"animate-pulse flex items-center md:border-2 rounded-full py-2 md:shadow-sm",children:(0,n.jsx)("div",{className:"bg-gray-300 h-4 w-40 rounded-full"})}),(0,n.jsxs)("div",{className:"flex items-center space-x-0 justify-end text-gray-500",children:[(0,n.jsx)("div",{className:"animate-pulse bg-gray-300 h-4 w-20 rounded-full"}),(0,n.jsx)("div",{className:"animate-pulse bg-gray-300 h-4 w-20 rounded-full"})]})]})}):(0,n.jsxs)("header",{className:"top-0 z-50 bg-white shadow-mb p-5 px-10 border-b border-s-gray-500",children:[(0,n.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3",children:[z&&(0,n.jsx)("div",{className:"w-5"}),(0,n.jsx)("div",{onClick:function(){return r.push("/")},className:"relative flex item-center justify-center md:justify-start h-10 cursor-pointer my-auto",children:(0,n.jsx)("picture",{children:(0,n.jsx)("img",{src:"/meatup_title.png",alt:"Meatup Logo",className:"h-10 object-contain cursor-pointer"})})}),!z&&P,(0,n.jsxs)("div",{className:"flex items-center space-x-0 justify-end text-gray-500",children:[(0,n.jsx)("p",{className:"hidden md:inline cursor-pointer mr-5",onClick:function(){return r.push("/events/create")},children:"Become a host"}),T]})]}),z&&P,S&&(0,n.jsxs)("div",{className:"flex flex-col col-span-3 mx-auto items-center",children:[(0,n.jsx)(o.f,{date:Z,minDate:new Date,color:"#FD5B61",onChange:function(e){return B(e)},onPreviewChange:function(){return B(null)}}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("button",{className:"flex-grow text-gray-500",onClick:function(){return E(!1)},children:"Cancel"}),(0,n.jsx)("div",{className:"w-40"}),(0,n.jsx)("button",{className:"flex-grow text-red-400",onClick:function(){r.push({pathname:"/search",query:{location:w,date:Z?Z.toISOString():null}})},children:"Search"})]})]})]})}},2395:function(e,s,r){"use strict";var t=r(5893);r(7294),s.Z=function(e){var s=e.src,r=e.userName;return(0,t.jsx)("div",{className:"inline-block rounded-full overflow-hidden bg-red-400 w-32 h-32",children:s?(0,t.jsx)("img",{src:s,alt:"User Avatar",className:"object-cover w-32 h-32"}):(0,t.jsx)("div",{className:"flex items-center justify-center text-white text-xl font-bold uppercase w-32 h-32",children:(void 0===r?"user":r).charAt()})})}},5048:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSP:function(){return h}});var t=r(5893),n=r(2066),l=r(1090),a=r(7294),i=r(2395),o=r(381),c=r.n(o),d=r(3634),u=r(1163),x=r(9008),m=r.n(x),h=!0;s.default=function(e){var s,r,o,x,h,v,f,p,j,g,N,w,b,y,k,C,_,S=e.result,E=(0,a.useContext)(d.AuthContext).currentUser,M=(0,u.useRouter)(),z=M.query.id,L=(null==S?void 0:null===(s=S.user)||void 0===s?void 0:null===(r=s.events)||void 0===r?void 0:r.length)===0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(m(),{children:[(0,t.jsxs)("title",{children:[(null==S?void 0:null===(o=S.user)||void 0===o?void 0:o.name)||"User"," | Meetup"]}),(0,t.jsx)("link",{rel:"icon",href:"/meatup_logo.png"})]}),(0,t.jsx)(l.Z,{}),(0,t.jsxs)("div",{className:"w-full max-w-screen-sm mx-auto px-4 md:px-8 my-6",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center mt-5 border-b-2 pb-10",children:[(0,t.jsx)(i.Z,{userName:(null==S?void 0:null===(x=S.user)||void 0===x?void 0:x.name)||"",src:null==S?void 0:null===(h=S.user)||void 0===h?void 0:h.image.url,size:32}),(0,t.jsx)("h1",{className:"text-4xl font-bold mt-5",children:null==S?void 0:null===(v=S.user)||void 0===v?void 0:v.name}),(0,t.jsxs)("p",{className:"text-xl font-semibold mt-2 text-center",children:["Member since"," ",(null==S?void 0:null===(f=S.user)||void 0===f?void 0:f.created_at)?c()(null==S?void 0:null===(p=S.user)||void 0===p?void 0:p.created_at).format("LL"):"--"]}),(0,t.jsx)("p",{className:"text-base text-gray-500 mt-3 max-w-[600px]",children:(null==S?void 0:null===(j=S.user)||void 0===j?void 0:j.profile)||"Np profile yet..."}),(0,t.jsx)("div",{className:"flex flex-col items-center md:items-start space-y-2 pt-2",children:(0,t.jsxs)("div",{className:"flex flex-row space-x-2 items-center fill-current font-normal text-gray-500",children:[(0,t.jsx)("div",{className:"fill-current",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",clipRule:"evenodd"})})}),(0,t.jsx)("span",{children:(null==S?void 0:null===(g=S.user)||void 0===g?void 0:g.gender)||"Not specified"})]})}),(0,t.jsx)("div",{className:"flex flex-col items-center md:items-start space-y-2 pt-3",children:(0,t.jsxs)("div",{className:"flex flex-row space-x-2 items-center fill-current font-normal text-gray-500",children:[(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:(0,t.jsx)("path",{d:"M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z"})}),(0,t.jsx)("span",{children:(null==S?void 0:null===(N=S.user)||void 0===N?void 0:N.birth_date)?c()(null==S?void 0:null===(w=S.user)||void 0===w?void 0:w.birth_date).format("LL"):"Not detected"})]})})]}),(0,t.jsx)("div",{className:"flex flex-col border-b-2",children:(0,t.jsxs)("div",{className:"px-6 sm:px-4 xl:px-0 md:max-w-screen py-4 w-full flex flex-row justify-between",children:[(0,t.jsx)("div",{className:"flex flex-row space-x-2 md:space-x-4 items-center",children:(0,t.jsxs)("a",{className:"font-normal hover:no-underline hover:text-teal-700 text-center space-x-2 cursor-pointer",children:[(0,t.jsx)("div",{className:"inline-block bg-teal-700 text-white text-sm rounded-full px-2 pt-0.5",children:L?0:null==S?void 0:null===(b=S.user)||void 0===b?void 0:null===(y=b.events)||void 0===y?void 0:y.length}),(0,t.jsx)("span",{onClick:function(){L&&M.push("/events/create")},children:L?"Become a Host":"Organised"})]})}),(0,t.jsx)("div",{className:"flex flex-row items-center",children:(null==E?void 0:E.id)===(null==S?void 0:null===(k=S.user)||void 0===k?void 0:k.id)&&(0,t.jsx)("button",{className:"text-white bg-red-400 rounded-lg p-4 cursor-pointer",onClick:function(){return M.push("/users/".concat(z,"/edit"))},children:"Edit profile"})})]})}),!L&&(0,t.jsxs)("div",{className:"flex flex-col mt-5 pb-10",children:[(0,t.jsx)("h2",{id:"groups-title",className:"text-3xl font-bold mb-6",children:"Organised"}),(0,t.jsx)("ul",{className:"grid grid-cols-1 gap-y-4 gap-x-4 md:gap-x-6",children:null==S?void 0:null===(C=S.user)||void 0===C?void 0:null===(_=C.events)||void 0===_?void 0:_.map(function(e){var s;return(0,t.jsx)("li",{className:"flex flex-row",children:(0,t.jsxs)("a",{className:"flex flex-row w-full items-center border rounded-lg border-gray3 p-3  space-x-4 hover:no-underline hover:opacity-75 min-h-[94px] cursor-pointer",onClick:function(){return M.push("/events/".concat(e.id,"/show"))},children:[(0,t.jsx)("div",{className:"relative min-w-[68px]",children:(0,t.jsx)("div",{className:"w-full h-full",children:(0,t.jsx)("img",{alt:"Image of ".concat(null==e?void 0:e.title),src:null==e?void 0:null===(s=e.place)||void 0===s?void 0:s.image.url,className:"rounded-md object-cover object-center w-16 h-16"})})}),(0,t.jsx)("span",{className:"font-semibold text-xl leading-6",children:null==e?void 0:e.title})]})})})})]})]}),(0,t.jsx)(n.Z,{})]})}},9008:function(e,s,r){e.exports=r(2636)}},function(e){e.O(0,[885,439,774,888,179],function(){return e(e.s=2222)}),_N_E=e.O()}]);