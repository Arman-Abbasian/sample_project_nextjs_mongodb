"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos/create",{

/***/ "./pages/todos/create/index.js":
/*!*************************************!*\
  !*** ./pages/todos/create/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\"useclient\";\nconst CraeteTodo = (param)=>{\n    let { findedUser  } = param;\n    _s();\n    const user = JSON.parse(findedUser);\n    const id = user._id;\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        todoName: \"\",\n        todoDate: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/todos/staticTodos\", {\n            ...formData,\n            id\n        }).then((res)=>{\n            setFormData({\n                todoName: \"\",\n                todoDate: \"\"\n            });\n            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(res.data.message);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto max-w-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-6\",\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoName\",\n                                children: \"todo name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"todoName\",\n                                id: \"todoName\",\n                                className: \"form-input\",\n                                onChange: changeHandler\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoDate\",\n                                children: \"todo date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"todoDate\",\n                                id: \"todoDate\",\n                                className: \"form-input\",\n                                onChange: changeHandler\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Add\",\n                        className: \"bg-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CraeteTodo, \"erP9HHIPCieWbEOq00bpTUAF9Jk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CraeteTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraeteTodo);\nvar _c;\n$RefreshReg$(_c, \"CraeteTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUlJO0FBRUs7QUFFakQ7QUFDQSxNQUFNTSxhQUFhLFNBQWtCO1FBQWpCLEVBQUNDLFdBQVUsRUFBQzs7SUFDNUIsTUFBTUMsT0FBS0MsS0FBS0MsS0FBSyxDQUFDSDtJQUN0QixNQUFNSSxLQUFHSCxLQUFLSSxHQUFHO0lBQ2pCLE1BQU0sRUFBQ0MsS0FBSSxFQUFDLEdBQUNaLHNEQUFTQTtJQUN0QixNQUFNLENBQUNhLFVBQVNDLFlBQVksR0FBQ1osK0NBQVFBLENBQUM7UUFBQ2EsVUFBUztRQUFHQyxVQUFTO0lBQUU7SUFDOURmLGdEQUFTQSxDQUFDLElBQUksQ0FHZCxHQUFFLEVBQUU7SUFDSixNQUFNZ0IsZ0JBQWMsQ0FBQ0MsSUFBSTtRQUNyQkosWUFBWTtZQUFDLEdBQUdELFFBQVE7WUFBQyxDQUFDSyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFDRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQTtJQUMzRDtJQUNBLE1BQU1DLGdCQUFjLENBQUNKLElBQUk7UUFDckJBLEVBQUVLLGNBQWM7UUFDaEJ4QixrREFBVSxDQUFDLDBCQUF5QjtZQUFDLEdBQUdjLFFBQVE7WUFBQ0g7UUFBRSxHQUNsRGUsSUFBSSxDQUFDQyxDQUFBQSxNQUFLO1lBQ1RaLFlBQVk7Z0JBQUNDLFVBQVM7Z0JBQUdDLFVBQVM7WUFBRTtZQUNwQ2IsMkRBQUtBLENBQUN1QixJQUFJQyxJQUFJLENBQUNDLE9BQU87UUFDeEIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGO0lBQzVCO0lBQ0EscUJBQ0ksOERBQUNHO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDQztnQkFBS0QsV0FBVTtnQkFBc0JFLFVBQVVkOztrQ0FDNUMsOERBQUNXO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPcEIsTUFBSztnQ0FBV1YsSUFBRztnQ0FBV3dCLFdBQVU7Z0NBQWFPLFVBQVV4Qjs7Ozs7Ozs7Ozs7O2tDQUVsRiw4REFBQ2dCO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPcEIsTUFBSztnQ0FBV1YsSUFBRztnQ0FBV3dCLFdBQVU7Z0NBQWFPLFVBQVV4Qjs7Ozs7Ozs7Ozs7O2tDQUVsRiw4REFBQ3NCO3dCQUFNQyxNQUFLO3dCQUFTbkIsT0FBTTt3QkFBTWEsV0FBVTs7Ozs7O2tDQUMzQyw4REFBQzlCLG9EQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCO0dBdkNNQzs7UUFHV0wsa0RBQVNBOzs7S0FIcEJLOztBQXlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanM/MzRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwuanMnXHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuIFxyXG4ndXNlY2xpZW50J1xyXG5jb25zdCBDcmFldGVUb2RvID0gKHtmaW5kZWRVc2VyfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlcj1KU09OLnBhcnNlKGZpbmRlZFVzZXIpO1xyXG4gICAgY29uc3QgaWQ9dXNlci5faWQ7XHJcbiAgICBjb25zdCB7cHVzaH09dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsc2V0Rm9ybURhdGFdPXVzZVN0YXRlKHt0b2RvTmFtZTpcIlwiLHRvZG9EYXRlOlwiXCJ9KTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS90b2Rvcy9zdGF0aWNUb2Rvc1wiLHsuLi5mb3JtRGF0YSxpZH0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICBzZXRGb3JtRGF0YSh7dG9kb05hbWU6XCJcIix0b2RvRGF0ZTpcIlwifSk7XHJcbiAgICAgICAgICB0b2FzdChyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctbWRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTZcIiBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvTmFtZVwiPnRvZG8gbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRvZG9OYW1lXCIgaWQ9XCJ0b2RvTmFtZVwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZG9EYXRlXCI+dG9kbyBkYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwidG9kb0RhdGVcIiBpZD1cInRvZG9EYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ3JhZXRlVG9kbztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIGNvbnN0IHRva2VuPWdldENvb2tpZSgndG9kb1Rva2VuJyx7IHJlcSwgcmVzIH0pO1xyXG4gICAgaWYoIXRva2VuKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBbYmVhcmVyLG1haW5dPXRva2VuLnNwbGl0KFwiIFwiKTtcclxuICAgIGNvbnN0IHBheWxvYWQ9and0LnZlcmlmeShtYWluLHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpO1xyXG4gICAgY29uc3Qge21vYmlsZSxlbWFpbH09cGF5bG9hZDtcclxuICAgIC8vY29ubmVjdCB0byBEQlxyXG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICAvL3NlYXJjaCB0aGUgdXNlciBiYXNlZCBvbiBtb2JpbGUgYW5kIGVtYWlsXHJcbiAgICBjb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7bW9iaWxlfSlcclxuICAgICAgICAgIC8vIGlmIG1vYmlsZSBudW1iZXIgaXMgbm90IGZvdW5kXHJcbiAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8yLSBjaGVjayBpZiB0aGUgdXNlckVtYWlsIGluIERCIG1hdGNoIHdpdGggdGhlIGVtYWlsIGluIHRva2VuXHJcbiAgICAgICAgICBjb25zdCBjb21wYXJlUmVzdWx0PSh1c2VyLmVtYWlsPT09ZW1haWwpXHJcbiAgICAgICAgIGlmKCFjb21wYXJlUmVzdWx0KXtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCJ1c2Vycy9sb2dpblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgICAvLzMtIHNldCB0aGUgdG9rZW4gdG8gdGhlIGhlYWRlciBhbmQgcmVkaXJlY3QgdG8gdGhlIG1haW4gcGFnZVxyXG4gICAgICAgICAgY29uc3QgZmluZGVkVXNlcj0gSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgICByZXR1cm4geyBwcm9wczoge2ZpbmRlZFVzZXJ9IH07XHJcbiAgICAgIH0iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiVG9hc3RlciIsIkNyYWV0ZVRvZG8iLCJmaW5kZWRVc2VyIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImlkIiwiX2lkIiwicHVzaCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0b2RvTmFtZSIsInRvZG9EYXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todos/create/index.js\n"));

/***/ })

});