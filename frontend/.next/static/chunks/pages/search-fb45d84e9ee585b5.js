(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2350:function(){},8266:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(7263)}])},6794:function(e,t,n){"use strict";var i=n(1799),s=n(9396),r=n(828),o=n(5893),l=n(7698),a=n(7294),u=n(3545);t.Z=function(e){var t=e.events,n=(0,r.Z)((0,a.useState)({}),2),c=n[0],d=n[1],h=t.map(function(e){return{longitude:e.place.longitude,latitude:e.place.latitude}}),f=l.getCenter(h),p=(0,r.Z)((0,a.useState)({longitude:f.longitude,latitude:f.latitude,zoom:11}),2),m=p[0],v=p[1];return(0,o.jsx)(u.ZP,(0,s.Z)((0,i.Z)({style:{width:"100%",height:"100%"}},m),{mapStyle:"mapbox://styles/ryosuke8291/clg8pdois001i01pgqj6xnd0z",mapboxAccessToken:"pk.eyJ1Ijoicnlvc3VrZTgyOTEiLCJhIjoiY2xnN2U1ZnF2MGo0YzNlcDhqYms2MmhpaCJ9.s9xjQmfrRuez9yuLp-C6tQ",onMove:function(e){return v(e.viewState)},children:t.map(function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Jx,{longitude:e.place.longitude,latitude:e.place.latitude,offset:[-20,-10],children:(0,o.jsx)("p",{role:"img",onClick:function(){return d(e.place)},className:"cursor-pointer text-2xl animate-bounce","aria-label":"push-pin",children:"\uD83D\uDCCD"})}),c.longitude===e.place.longitude&&(0,o.jsx)(u.GI,{onClose:function(){return d(!1)},closeButton:!0,closeOnClick:!1,latitude:e.place.latitude,longitude:e.place.longitude,children:e.place.location})]},e.place.longitude)})}))}},9578:function(e,t,n){var i,s,r,o,l,a=n(3454);n(2350);var u=n(7294),c=u&&"object"==typeof u&&"default"in u?u:{default:u};function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=void 0!==a&&a.env&&!0,f=function(e){return"[object String]"===Object.prototype.toString.call(e)},p=((s=(i=function(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,r=void 0===s?h:s;m(f(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",m("boolean"==typeof r,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=r,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}).prototype).setOptimizeForSpeed=function(e){m("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),m(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(m(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(h||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(m(f(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return h||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){h||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];m(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},s.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];m(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},s.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},s.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},s.makeStyleTag=function(e,t,n){t&&m(f(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(i,n):s.appendChild(i),i},d(i.prototype,[{key:"length",get:function(){return this._rulesCount}}]),r&&d(i,r),i);function m(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var v=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},x={};function _(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return x[i]||(x[i]="jsx-"+v(e+"-"+n)),x[i]}function g(e,t){var n=e+t;return x[n]||(x[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),x[n]}var y=((l=(o=function(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,s=t.optimizeForSpeed,r=void 0!==s&&s;this._sheet=i||new p({name:"styled-jsx",optimizeForSpeed:r}),this._sheet.inject(),i&&"boolean"==typeof r&&(this._sheet.setOptimizeForSpeed(r),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}).prototype).add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,s=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var r=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=r,this._instancesCounts[i]=1},l.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},l.update=function(e,t){this.add(t),this.remove(e)},l.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},l.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},l.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return c.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},l.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var s=_(i,n);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return g(s,e)}):[g(s,t)]}}return{styleId:_(i),rules:Array.isArray(t)?t:[t]}},l.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},o),S=u.createContext(null);S.displayName="StyleSheetContext";var b=c.default.useInsertionEffect||c.default.useLayoutEffect,j=new y;function C(e){var t=j||u.useContext(S);return t&&b(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}C.dynamic=function(e){return e.map(function(e){return _(e[0],e[1])}).join(" ")},t.style=C},6465:function(e,t,n){"use strict";e.exports=n(9578).style},7263:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return C},default:function(){return w}});var i=n(5893),s=n(7294),r=n(1090),o=n(2066),l=n(7568),a=n(828),u=n(655),c=n(6465),d=n.n(c),h=n(1163),f=n(381),p=n.n(f),m=n(3634),v=n(5512),x=n(7171),_=n(8034),g=function(e){var t,n,r,o=e.item,c=(0,s.useContext)(m.AuthContext),f=c.isSignedIn,g=c.currentUser,y=(0,a.Z)((0,s.useState)(!1),2),S=y[0],b=y[1],j=(0,a.Z)((0,s.useState)(!1),2),C=j[0],w=j[1],N=(0,h.useRouter)(),F=(0,s.useCallback)(function(){if(f){var e;w(null==g?void 0:null===(e=g.bookmarks)||void 0===e?void 0:e.some(function(e){return(null==e?void 0:e.eventId)===(null==o?void 0:o.id)}))}},[f,g,o]);return(0,s.useEffect)(function(){var e,t,n=new Image;n.src=null==o?void 0:null===(e=o.place)||void 0===e?void 0:null===(t=e.image)||void 0===t?void 0:t.url,n.onload=function(){b(!0)},F()},[o,F]),(0,s.useCallback)((t=(0,l.Z)(function(e){var t,n;return(0,u.__generator)(this,function(i){switch(i.label){case 0:if(e.stopPropagation(),!C)return[3,2];return[4,(0,v.T)(String(null==o?void 0:o.id),null===(t=null==g?void 0:g.bookmarks.filter(function(e){return(null==e?void 0:e.eventId)===(null==o?void 0:o.id)})[0])||void 0===t?void 0:t.id)];case 1:return i.sent(),w(!1),[3,4];case 2:return n={eventId:String(null==o?void 0:o.id),userId:null==g?void 0:g.id},[4,(0,v.K)(String(null==o?void 0:o.id),n)];case 3:i.sent(),w(!0),i.label=4;case 4:return[2]}})}),function(e){return t.apply(this,arguments)}),[g,o,C]),(0,i.jsxs)("div",{onClick:function(){return N.push("/events/".concat(o.id,"/show"))},className:"jsx-a5b5aa26f7c0a10b flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t",children:[(0,i.jsxs)("div",{className:"jsx-a5b5aa26f7c0a10b relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0",children:[!S&&(0,i.jsx)("div",{className:"jsx-a5b5aa26f7c0a10b animate-pulse bg-gray-200 rounded-2xl w-full h-full"}),S&&(0,i.jsx)("img",{alt:"Place Image",src:null==o?void 0:null===(n=o.place)||void 0===n?void 0:null===(r=n.image)||void 0===r?void 0:r.url,className:"jsx-a5b5aa26f7c0a10b rounded-2xl w-full h-full object-cover image-loaded"})]}),(0,i.jsxs)("div",{className:"jsx-a5b5aa26f7c0a10b flex flex-col flex-grow pl-5",children:[(0,i.jsx)("div",{className:"jsx-a5b5aa26f7c0a10b flex justify-between text-orange-700 pb-1",children:(0,i.jsx)("p",{className:"jsx-a5b5aa26f7c0a10b ",children:(null==o?void 0:o.meeting_datetime)&&p()(new Date(null==o?void 0:o.meeting_datetime)).format("dddd, MMMM DD, YYYY HH:mm")})}),(0,i.jsx)("h4",{className:"jsx-a5b5aa26f7c0a10b text-xl pb-2",children:o.title}),(0,i.jsx)("div",{className:"jsx-a5b5aa26f7c0a10b w-10"}),(0,i.jsx)("p",{className:"jsx-a5b5aa26f7c0a10b text-sm text-gray-500 flex-grow overflow-ellipsis line-clamp-3",children:o.description}),(0,i.jsxs)("div",{className:"jsx-a5b5aa26f7c0a10b flex justify-between items-end pt-5",children:[(0,i.jsx)("div",{className:"jsx-a5b5aa26f7c0a10b",children:(0,i.jsx)("p",{className:"jsx-a5b5aa26f7c0a10b text-right font-extralight",children:(null==o?void 0:o.price)&&(null==o?void 0:o.price)>0?o.price:"FREE"})}),(0,i.jsxs)("div",{className:"jsx-a5b5aa26f7c0a10b flex items-center space-x-5 ml-5",children:[(0,i.jsx)("button",{className:"jsx-a5b5aa26f7c0a10b text-gray-500 hover:text-gray-400",children:(0,i.jsx)(_.Z,{})}),(0,i.jsx)(x.Z,{item:o})]})]})]}),(0,i.jsx)(d(),{id:"a5b5aa26f7c0a10b",children:".image-loaded.jsx-a5b5aa26f7c0a10b{opacity:1}"})]})},y=n(6794),S=n(2298),b=n(9008),j=n.n(b),C=!0,w=function(e){var t,n=e.searchResults,s=void 0===n?[]:n,l=(0,h.useRouter)().query,a=l.location,u=l.date,c=u&&(0,S.default)(new Date(u),"dd MMMM"),d=null==s?void 0:null===(t=s.events)||void 0===t?void 0:t.filter(function(e){var t,n,i=new Date(null==e?void 0:e.meeting_datetime),s=u?new Date(u):null,r=null==a?void 0:a.toLowerCase();return(!r||(null==e?void 0:null===(t=e.place)||void 0===t?void 0:null===(n=t.location)||void 0===n?void 0:n.toLowerCase().includes(r)))&&(!s||i.getFullYear()===s.getFullYear()&&i.getMonth()===s.getMonth()&&i.getDate()===s.getDate())});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(j(),{children:[(0,i.jsx)("title",{children:"Meatup | Search Events Page"}),(0,i.jsx)("link",{rel:"icon",href:"/meatup_logo.png"})]}),(0,i.jsx)(r.Z,{placeholder:"".concat(a," | ").concat(c)}),(0,i.jsxs)("main",{className:"flex min-h-[400px]",children:[(0,i.jsxs)("section",{className:"flex-grow pt-14",children:[(0,i.jsxs)("p",{className:"text-xs px-6",children:[d.length,"+ Events - ",c]}),(0,i.jsxs)("h1",{className:"text-3xl font-semibold mt-2 mb-6 px-6",children:["Events in ",a]}),(0,i.jsxs)("div",{className:"hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap px-6",children:[(0,i.jsx)("p",{className:"button",children:"Cancellation Flexibility"}),(0,i.jsx)("p",{className:"button",children:"Type of Place"}),(0,i.jsx)("p",{className:"button",children:"Cancellation Flexibility"}),(0,i.jsx)("p",{className:"button",children:"Type of Place"})]}),(0,i.jsx)("div",{className:"flex flex-col",children:d.map(function(e){return(0,i.jsx)(g,{item:e},e.id)})})]}),d.length>0&&(0,i.jsx)("section",{className:"hidden xl:inline-flex xl:min-w-[600px]",children:(0,i.jsx)(y.Z,{events:null==s?void 0:s.events})})]}),(0,i.jsx)(o.Z,{})]})}},9008:function(e,t,n){e.exports=n(2636)}},function(e){e.O(0,[885,439,786,206,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);