"use strict";
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 7621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Avatar = ({ src , userName ="user"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "inline-block rounded-full overflow-hidden bg-red-400 w-12 h-12",
        children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: src,
            alt: "User Avatar",
            className: "object-cover w-12 h-12"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center text-white text-xl font-bold uppercase w-12 h-12",
            children: userName.charAt()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);


/***/ }),

/***/ 6574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getChatrooms),
/* harmony export */   "v": () => (/* binding */ getChatroom)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6807);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_client__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getChatrooms = ()=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("chatrooms", {
        headers: {
            "access-token": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_access_token"),
            "client": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_client"),
            "uid": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_uid")
        }
    });
};
const getChatroom = (id)=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(`chatrooms/${id}`, {
        headers: {
            "access-token": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_access_token"),
            "client": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_client"),
            "uid": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_uid")
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;