"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603,888];
exports.modules = {

/***/ 6721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4178);
/* harmony import */ var _pages_api_bookmark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5512);
/* harmony import */ var _BookmarkButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7171);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8034);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_5__, _pages_api_bookmark__WEBPACK_IMPORTED_MODULE_6__, _BookmarkButton__WEBPACK_IMPORTED_MODULE_7__]);
([_pages_app__WEBPACK_IMPORTED_MODULE_5__, _pages_api_bookmark__WEBPACK_IMPORTED_MODULE_6__, _BookmarkButton__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function InfoCard({ item  }) {
    const { isSignedIn , currentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.AuthContext);
    const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [bookmark, setBookmark] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const setUsersBookmarks = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (isSignedIn) {
            setBookmark(currentUser?.bookmarks?.some((b)=>b?.eventId === item?.id));
        }
    }, [
        isSignedIn,
        currentUser,
        item
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const img = new Image();
        img.src = item?.place?.image?.url;
        img.onload = ()=>{
            setImageLoaded(true);
        };
        setUsersBookmarks();
    }, [
        item,
        setUsersBookmarks
    ]);
    const handleBookmarks = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (e)=>{
        e.stopPropagation();
        if (bookmark) {
            await (0,_pages_api_bookmark__WEBPACK_IMPORTED_MODULE_6__/* .deleteBookmark */ .T)(String(item?.id), currentUser?.bookmarks.filter((b)=>b?.eventId === item?.id)[0]?.id);
            setBookmark(false);
        } else {
            const data = {
                eventId: String(item?.id),
                userId: currentUser?.id
            };
            await (0,_pages_api_bookmark__WEBPACK_IMPORTED_MODULE_6__/* .createBookmark */ .K)(String(item?.id), data);
            setBookmark(true);
        }
    }, [
        currentUser,
        item,
        bookmark
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: ()=>router.push(`/events/${item.id}/show`),
        className: "jsx-a5b5aa26f7c0a10b" + " " + "flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-a5b5aa26f7c0a10b" + " " + "relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0",
                children: [
                    !imageLoaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-a5b5aa26f7c0a10b" + " " + "animate-pulse bg-gray-200 rounded-2xl w-full h-full"
                    }),
                    imageLoaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        alt: "Place Image",
                        src: item?.place?.image?.url,
                        className: "jsx-a5b5aa26f7c0a10b" + " " + "rounded-2xl w-full h-full object-cover image-loaded"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-a5b5aa26f7c0a10b" + " " + "flex flex-col flex-grow pl-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-a5b5aa26f7c0a10b" + " " + "flex justify-between text-orange-700 pb-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "jsx-a5b5aa26f7c0a10b" + " " + "",
                            children: item?.meeting_datetime && moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date(item?.meeting_datetime)).format("dddd, MMMM DD, YYYY HH:mm")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "jsx-a5b5aa26f7c0a10b" + " " + "text-xl pb-2",
                        children: item.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-a5b5aa26f7c0a10b" + " " + "w-10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "jsx-a5b5aa26f7c0a10b" + " " + "text-sm text-gray-500 flex-grow overflow-ellipsis line-clamp-3",
                        children: item.description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-a5b5aa26f7c0a10b" + " " + "flex justify-between items-end pt-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-a5b5aa26f7c0a10b",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "jsx-a5b5aa26f7c0a10b" + " " + "text-right font-extralight",
                                    children: item?.price && item?.price > 0 ? item.price : "FREE"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-a5b5aa26f7c0a10b" + " " + "flex items-center space-x-5 ml-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "jsx-a5b5aa26f7c0a10b" + " " + "text-gray-500 hover:text-gray-400",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShareButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookmarkButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        item: item
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a5b5aa26f7c0a10b",
                children: ".image-loaded.jsx-a5b5aa26f7c0a10b{opacity:1}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9852);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(932);
/* harmony import */ var _components_events_InfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6721);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6794);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_events_InfoCard__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_events_InfoCard__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Search({ searchResults =[]  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { location , date  } = router.query;
    const formattedDate = date && (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(new Date(date), "dd MMMM");
    let searchEvents = searchResults?.events?.filter((item)=>{
        const itemDate = new Date(item?.meeting_datetime);
        const searchDate = date ? new Date(date) : null;
        const lowercaseLocation = location?.toLowerCase();
        return (!lowercaseLocation || item?.place?.location?.toLowerCase().includes(lowercaseLocation)) && (!searchDate || itemDate.getFullYear() === searchDate.getFullYear() && itemDate.getMonth() === searchDate.getMonth() && itemDate.getDate() === searchDate.getDate());
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Meatup | Search Events Page"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/meatup_logo.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                placeholder: `${location} | ${formattedDate}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex min-h-[400px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "flex-grow pt-14",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-xs px-6",
                                children: [
                                    searchEvents.length,
                                    "+ Events - ",
                                    formattedDate
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-3xl font-semibold mt-2 mb-6 px-6",
                                children: [
                                    "Events in ",
                                    location
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap px-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "button",
                                        children: "Cancellation Flexibility"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "button",
                                        children: "Type of Place"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "button",
                                        children: "Cancellation Flexibility"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "button",
                                        children: "Type of Place"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col",
                                children: searchEvents.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_events_InfoCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        item: item
                                    }, item.id))
                            })
                        ]
                    }),
                    searchEvents.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "hidden xl:inline-flex xl:min-w-[600px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Map__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            events: searchResults?.events
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
async function getServerSideProps() {
    try {
        const searchResults = await fetch("http://localhost:5000/api/v1" + "/events").then((res)=>res.json());
        return {
            props: {
                searchResults
            }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                searchResults: {}
            }
        };
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5191:
/***/ ((module) => {

module.exports = require("@badrap/bar-of-progress");

/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 8802:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/solid");

/***/ }),

/***/ 5892:
/***/ ((module) => {

module.exports = require("axios-case-converter");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2978:
/***/ ((module) => {

module.exports = require("geolib");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4304:
/***/ ((module) => {

module.exports = require("react-date-range");

/***/ }),

/***/ 5372:
/***/ ((module) => {

module.exports = require("react-map-gl");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [178,852,932,789,794], () => (__webpack_exec__(2314)));
module.exports = __webpack_exports__;

})();