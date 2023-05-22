"use strict";
(() => {
var exports = {};
exports.id = 110;
exports.ids = [110,888];
exports.modules = {

/***/ 2395:
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
        className: `inline-block rounded-full overflow-hidden bg-red-400 w-32 h-32`,
        children: src ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: src,
            alt: "User Avatar",
            className: `object-cover w-32 h-32`
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `flex items-center justify-center text-white text-xl font-bold uppercase w-32 h-32`,
            children: userName.charAt()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);


/***/ }),

/***/ 9114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6807);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__]);
_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const updateUser = (id, data)=>{
    return _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].patch */ .Z.patch(`/users/${id}`, data);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(932);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9852);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_users_AvatarLarge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2395);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4178);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_api_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9114);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_2__, _pages_app__WEBPACK_IMPORTED_MODULE_5__, _pages_api_user__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_2__, _pages_app__WEBPACK_IMPORTED_MODULE_5__, _pages_api_user__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const show = ({ result  })=>{
    const { currentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_5__.AuthContext);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { id  } = router.query;
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(result?.user?.name);
    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(result?.user?.profile);
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(result?.user?.image?.url);
    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(result?.user?.image?.url);
    const [birthDate, setBirthDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(result?.user?.birth_date && moment__WEBPACK_IMPORTED_MODULE_8___default()(result?.user?.birth_date).format("YYYY-MM-DD"));
    const [gender, setGender] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(result?.user?.gender);
    console.log(birthDate);
    const uploadImage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        const file = e.target.files[0];
        setImage(file);
    }, []);
    const previewImage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e)=>{
        const file = e.target.files[0];
        setPreview(URL.createObjectURL(file));
    }, []);
    const createFormData = ()=>{
        const formData = new FormData();
        formData.append("user[name]", name);
        formData.append("user[profile]", profile);
        formData.append("user[birth_date]", birthDate);
        formData.append("user[gender]", gender);
        if (image !== result?.user?.image?.url) {
            formData.append("user[image]", image);
        }
        return formData;
    };
    const handleEditProfile = async (e)=>{
        e.preventDefault();
        const data = createFormData();
        try {
            const res = await (0,_pages_api_user__WEBPACK_IMPORTED_MODULE_7__/* .updateUser */ .N)(id, data);
            if (currentUser?.id == id && res) {
                setTimeout(()=>{
                    router.push(`/users/${id}/show`);
                }, 500);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            result?.user?.name || "User",
                            " | Meatup"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/meatup_logo.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full max-w-screen-sm mx-auto px-4 md:px-8 my-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "flex flex-col space-y-3 items-start flex-grow lg:px-15",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-3xl font-bold mb-6",
                            children: "Edit profile"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-3 md:space-y-0 items-center w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative flex flex-col",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_users_AvatarLarge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        userName: result?.user?.name,
                                        src: preview || "",
                                        size: 32
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        htmlFor: "icon-button-file",
                                        className: "cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                accept: "image/*",
                                                id: "icon-button-file",
                                                type: "file",
                                                className: "hidden",
                                                onChange: (e)=>{
                                                    uploadImage(e);
                                                    previewImage(e);
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "w-100 whitespace-nowrap rounded-lg border p-3 text-gray-500 hover:text-gray-400 hover:border-gray-400",
                                                children: "Choose from library"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-xl font-bold",
                            children: "Name"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            id: "name",
                            placeholder: "Your name",
                            name: "name",
                            className: "w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5",
                            value: name,
                            onChange: (e)=>setName(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-xl font-bold",
                            children: "Profile"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            rows: 4,
                            id: "profile",
                            placeholder: "Your profile",
                            name: "profile",
                            className: "w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5",
                            value: profile,
                            onChange: (e)=>setProfile(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-xl font-bold",
                            children: "Birth date"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "date",
                            id: "birthDate",
                            placeholder: "Your birth date",
                            name: "birthDate",
                            className: "w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5",
                            value: birthDate,
                            onChange: (e)=>setBirthDate(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-xl font-bold",
                            children: "Gender"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            id: "gender",
                            name: "gender",
                            className: "w-full py-2 px-3 text-base rounded border outline-none placeholder:text-gray6 hover:border-gray6 focus:border-viridian pr-7 border-gray5",
                            value: gender,
                            onChange: (e)=>setGender(e.target.value),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "male",
                                    children: "male"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "female",
                                    children: "female"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "other",
                                    children: "other"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-white bg-red-500 rounded-lg p-4 cursor-pointer",
                            onClick: handleEditProfile,
                            children: "Save Changes"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (show);
async function getServerSideProps(context) {
    const { query  } = context;
    const { id  } = query;
    try {
        const result = await fetch("http://localhost:5000/api/v1" + `/users/${id}`).then((res)=>res.json());
        return {
            props: {
                result
            }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                result: {}
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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [178,852,932], () => (__webpack_exec__(6450)));
module.exports = __webpack_exports__;

})();