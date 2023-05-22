"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 6794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2978);
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geolib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5372);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_3__);




function Map({ events  }) {
    const [selectedLocation, setSelectedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const coordinates = events.map((result)=>({
            longitude: result.place.longitude,
            latitude: result.place.latitude
        }));
    const center = geolib__WEBPACK_IMPORTED_MODULE_1__.getCenter(coordinates);
    const [viewState, setViewState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        // @ts-ignore
        longitude: center.longitude,
        // @ts-ignore
        latitude: center.latitude,
        zoom: 11
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_map_gl__WEBPACK_IMPORTED_MODULE_3___default()), {
        style: {
            width: "100%",
            height: "100%"
        },
        ...viewState,
        mapStyle: "mapbox://styles/ryosuke8291/clg8pdois001i01pgqj6xnd0z",
        mapboxAccessToken: "pk.eyJ1Ijoicnlvc3VrZTgyOTEiLCJhIjoiY2xnN2U1ZnF2MGo0YzNlcDhqYms2MmhpaCJ9.s9xjQmfrRuez9yuLp-C6tQ",
        onMove: (e)=>setViewState(e.viewState),
        children: events.map((result)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Marker, {
                        longitude: result.place.longitude,
                        latitude: result.place.latitude,
                        offset: [
                            -20,
                            -10
                        ],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            role: "img",
                            onClick: ()=>setSelectedLocation(result.place),
                            className: "cursor-pointer text-2xl animate-bounce",
                            "aria-label": "push-pin",
                            children: "\uD83D\uDCCD"
                        })
                    }),
                    // @ts-ignore
                    selectedLocation.longitude === result.place.longitude ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_3__.Popup, {
                        onClose: ()=>setSelectedLocation(false),
                        closeButton: true,
                        closeOnClick: false,
                        latitude: result.place.latitude,
                        longitude: result.place.longitude,
                        children: result.place.location
                    }) : false
                ]
            }, result.place.longitude))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ })

};
;