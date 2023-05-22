"use strict";
(() => {
var exports = {};
exports.id = 313;
exports.ids = [313,547];
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

/***/ }),

/***/ 1082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNotifications": () => (/* binding */ getNotifications),
/* harmony export */   "updateNotification": () => (/* binding */ updateNotification)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2096);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _client__WEBPACK_IMPORTED_MODULE_1__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_0__, _client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getNotifications = ()=>{
    return _client__WEBPACK_IMPORTED_MODULE_1__["default"].get("/notifications", {
        headers: {
            "access-token": js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("_access_token"),
            client: js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("_client"),
            uid: js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("_uid")
        }
    });
};
const updateNotification = (id)=>{
    return _client__WEBPACK_IMPORTED_MODULE_1__["default"].patch(`/notifications/${id}`);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1082));
module.exports = __webpack_exports__;

})();