exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(600);
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5191);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5991);
/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_api_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_auth__WEBPACK_IMPORTED_MODULE_7__]);
_pages_api_auth__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const progress = new (_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_3___default())({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100
});
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on("routeChangeStart", progress.start);
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on("routeChangeComplete", progress.finish);
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on("routeChangeError", progress.finish);
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_6__.createContext)({});
function App({ Component , pageProps  }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    const [isSignedIn, setIsSignedIn] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const handleGetCurrentUser = async ()=>{
        try {
            const res = await (0,_pages_api_auth__WEBPACK_IMPORTED_MODULE_7__/* .getCurrentUser */ .ts)();
            console.log(res);
            if (res?.status === 200) {
                setIsSignedIn(true);
                setCurrentUser(res?.data.currentUser);
            } else {
                console.log("No current user");
            }
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        handleGetCurrentUser();
    }, []);
    // Redirect unauthenticated users to the sign-in page
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (!loading && !isSignedIn && router.pathname === "/events/create" || router.pathname === "/place") {
            router.push("/signin");
        }
    }, [
        loading,
        isSignedIn,
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            loading,
            setLoading,
            isSignedIn,
            setIsSignedIn,
            currentUser,
            setCurrentUser
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ts": () => (/* binding */ getCurrentUser),
/* harmony export */   "w7": () => (/* binding */ signOut),
/* harmony export */   "y1": () => (/* binding */ signUp),
/* harmony export */   "zB": () => (/* binding */ signIn)
/* harmony export */ });
/* harmony import */ var _pages_api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6807);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_client__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_pages_api_client__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const signUp = (data)=>{
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("auth", data);
};
const signIn = (data)=>{
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("auth/sign_in", data);
};
const signOut = ()=>{
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"]("auth/sign_out", {
        headers: {
            "access-token": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_access_token"),
            "client": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_client"),
            "uid": js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_uid")
        }
    });
};
const getCurrentUser = ()=>{
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_access_token") || !js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_client") || !js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("_uid")) return;
    return _pages_api_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("/auth/sessions", {
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

/***/ 6807:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 5991:
/***/ (() => {



/***/ }),

/***/ 600:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;