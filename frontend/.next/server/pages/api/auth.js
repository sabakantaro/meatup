"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508,547];
exports.modules = {

/***/ 5892:
/***/ ((module) => {

module.exports = require("axios-case-converter");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 7646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentUser": () => (/* binding */ getCurrentUser),
/* harmony export */   "signIn": () => (/* binding */ signIn),
/* harmony export */   "signOut": () => (/* binding */ signOut),
/* harmony export */   "signUp": () => (/* binding */ signUp)
/* harmony export */ });
/* harmony import */ var _pages_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2096);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_client__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_pages_api_client__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const signUp = (data)=>{
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__["default"].post("auth", data);
};
const signIn = (data)=>{
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__["default"].post("auth/sign_in", data);
};
const signOut = ()=>{
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("auth/sign_out", {
        headers: {
            "access-token": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_access_token"),
            "client": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_client"),
            "uid": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_uid")
        }
    });
};
const getCurrentUser = ()=>{
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_access_token") || !js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_client") || !js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_uid")) return;
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__["default"].get("/auth/sessions", {
        headers: {
            "access-token": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_access_token"),
            "client": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_client"),
            "uid": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_uid")
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios_case_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5892);
/* harmony import */ var axios_case_converter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_case_converter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const options = {
    ignoreHeaders: true
};
const client = axios_case_converter__WEBPACK_IMPORTED_MODULE_0___default()(axios__WEBPACK_IMPORTED_MODULE_1__["default"].create({
    baseURL: "http://localhost:5000/api/v1"
}), options);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7646));
module.exports = __webpack_exports__;

})();