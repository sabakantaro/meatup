"use strict";
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 9024:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_api_participant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9715);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4178);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BookmarkButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7171);
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8034);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_participant__WEBPACK_IMPORTED_MODULE_3__, _pages_app__WEBPACK_IMPORTED_MODULE_4__, _BookmarkButton__WEBPACK_IMPORTED_MODULE_6__]);
([_pages_api_participant__WEBPACK_IMPORTED_MODULE_3__, _pages_app__WEBPACK_IMPORTED_MODULE_4__, _BookmarkButton__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function AttendanceFooter({ event  }) {
    const { currentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_4__.AuthContext);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const handleParticipant = ()=>{
        const data = {
            user_id: currentUser?.id,
            event_id: event?.id
        };
        const res = (0,_pages_api_participant__WEBPACK_IMPORTED_MODULE_3__/* .createParticipant */ .Y)(data);
        if (res) {
            router.push(`/events/${event?.id}/attendance`);
        }
    };
    const copyUrlToClipboard = ()=>{
        navigator.clipboard.writeText(window.location.href);
        alert("Copied to clipboard");
    };
    const isEnable = // !event?.participants?.some((p: any) => p?.userId === currentUser?.id) && // Not already joined
    event?.participants?.length === 0 && // No participants
    event?.user?.id !== currentUser?.id; // Not the owner
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "sticky bottom-0 bg-white w-full py-5 z-10 px-5 lg:px-20",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:max-w-screen mx-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between text-gray-700",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hidden sm:flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-col uppercase text-sm leading-5 tracking-tight lg:text-base",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                        children: event?.meetingDatetime && moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(event?.meetingDatetime)).format("dddd, MMMM DD, YYYY HH:mm")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-semibold",
                                        children: event?.title
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full sm:w-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-around",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center md:block",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "font-semibold",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "FREE"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center space-x-5 ml-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookmarkButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            item: event
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-5 ml-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "py-3.5 px-4 border border-teal-700 rounded-lg leading-8 font-semibold transition-all fill-current text-teal-700 hover:bg-teal-700 hover:text-white",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex items-center flex-row-reverse",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShareButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: `py-2.5 px-8  rounded-lg border leading-8 text-white font-semibold whitespace-nowrap ${!isEnable ? "bg-gray-400 border-gray-400" : "bg-red-400 border-red-400 hover:bg-red-300 hover:border-red-300"}`,
                                                    onClick: ()=>handleParticipant(),
                                                    disabled: !isEnable,
                                                    children: "Join"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttendanceFooter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EY": () => (/* binding */ getEvent),
/* harmony export */   "yM": () => (/* binding */ createEvent)
/* harmony export */ });
/* unused harmony exports getEvents, deleteEvent */
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__]);
_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getEvents = ()=>{
    return client.get("/events");
};
const getEvent = (id)=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`/events/${id}`);
};
const createEvent = (data)=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/events", data);
};
const deleteEvent = (id)=>{
    return client.delete(`/events/${id}`);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ createParticipant)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__]);
_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createParticipant = (data)=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("/participants", data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;