"use strict";
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 7171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8802);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4178);
/* harmony import */ var _pages_api_bookmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5512);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_api_bookmark__WEBPACK_IMPORTED_MODULE_5__]);
([_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_api_bookmark__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BookmarkButton = ({ item  })=>{
    const { isSignedIn , currentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_4__.AuthContext);
    const [bookmark, setBookmark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const setUsersBookmarks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (isSignedIn) {
            setBookmark(currentUser?.bookmarks?.some((b)=>b?.eventId === item?.id));
        }
    }, [
        isSignedIn,
        currentUser,
        item
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setUsersBookmarks();
    }, [
        setUsersBookmarks
    ]);
    const handleBookmarks = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (e)=>{
        e.stopPropagation();
        if (!isSignedIn) {
            return;
        }
        if (bookmark) {
            await (0,_pages_api_bookmark__WEBPACK_IMPORTED_MODULE_5__/* .deleteBookmark */ .T)(String(item?.id), currentUser?.bookmarks.filter((b)=>b?.eventId === item?.id)[0]?.id);
            setBookmark(false);
        } else {
            const data = {
                eventId: String(item?.id),
                userId: currentUser?.id
            };
            await (0,_pages_api_bookmark__WEBPACK_IMPORTED_MODULE_5__/* .createBookmark */ .K)(String(item?.id), data);
            setBookmark(true);
        }
    }, [
        currentUser,
        item,
        bookmark
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setUsersBookmarks();
    }, [
        setUsersBookmarks
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center z-10",
            onClick: (e)=>handleBookmarks(e),
            children: isSignedIn && bookmark ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__.BookmarkIcon, {
                className: "h-6 text-teal-700 cursor-pointer"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.BookmarkIcon, {
                className: "h-6 text-gray-500 hover:text-gray-400 cursor-pointer"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarkButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);



function ShareButton({}) {
    const copyUrlToClipboard = (e)=>{
        e.stopPropagation();
        navigator.clipboard.writeText(window.location.href);
        alert("Copied to clipboard");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClick: (e)=>copyUrlToClipboard(e),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowUpOnSquareIcon, {
                className: "w-6 h-6"
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);


/***/ }),

/***/ 5512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ createBookmark),
/* harmony export */   "T": () => (/* binding */ deleteBookmark)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__]);
_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createBookmark = (eventId, data)=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`events/${eventId}/bookmarks`, data);
};
const deleteBookmark = (eventId, id)=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](`/events/${eventId}/bookmarks/${id}`);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;