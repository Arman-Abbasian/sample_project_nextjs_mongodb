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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\"useclient\";\nconst CraeteTodo = (param)=>{\n    let { findedUser  } = param;\n    _s();\n    const user = JSON.parse(findedUser);\n    console.log(user._id);\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        todoName: \"\",\n        todoDate: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/todos/staticTodos\", {\n            ...formData,\n            id\n        }).then((res)=>console.log(res.data)).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto max-w-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-6\",\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoName\",\n                                children: \"todo name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"todoName\",\n                                id: \"todoName\",\n                                className: \"form-input\",\n                                onChange: changeHandler\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoDate\",\n                                children: \"todo date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"todoDate\",\n                                id: \"todoDate\",\n                                className: \"form-input\",\n                                onChange: changeHandler\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Add\",\n                        className: \"bg-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CraeteTodo, \"erP9HHIPCieWbEOq00bpTUAF9Jk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CraeteTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraeteTodo);\nvar _c;\n$RefreshReg$(_c, \"CraeteTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBSUk7QUFFNUM7QUFDQSxNQUFNSSxhQUFhLFNBQWtCO1FBQWpCLEVBQUNDLFdBQVUsRUFBQzs7SUFDNUIsTUFBTUMsT0FBS0MsS0FBS0MsS0FBSyxDQUFDSDtJQUN0QkksUUFBUUMsR0FBRyxDQUFDSixLQUFLSyxHQUFHO0lBQ3BCLE1BQU0sRUFBQ0MsS0FBSSxFQUFDLEdBQUNYLHNEQUFTQTtJQUN0QixNQUFNLENBQUNZLFVBQVNDLFlBQVksR0FBQ1gsK0NBQVFBLENBQUM7UUFBQ1ksVUFBUztRQUFHQyxVQUFTO0lBQUU7SUFDOURkLGdEQUFTQSxDQUFDLElBQUksQ0FHZCxHQUFFLEVBQUU7SUFDSixNQUFNZSxnQkFBYyxDQUFDQyxJQUFJO1FBQ3JCSixZQUFZO1lBQUMsR0FBR0QsUUFBUTtZQUFDLENBQUNLLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUNGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFBO0lBQzNEO0lBQ0EsTUFBTUMsZ0JBQWMsSUFBSTtRQUNwQnRCLGtEQUFVLENBQUMsMEJBQXlCO1lBQUMsR0FBR2EsUUFBUTtZQUFDVztRQUFFLEdBQ2xEQyxJQUFJLENBQUNDLENBQUFBLE1BQUtqQixRQUFRQyxHQUFHLENBQUNnQixJQUFJQyxJQUFJLEdBQzlCQyxLQUFLLENBQUNDLENBQUFBLE1BQUtwQixRQUFRQyxHQUFHLENBQUNtQjtJQUM1QjtJQUNBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQUtELFdBQVU7Z0JBQXNCRSxVQUFVWDs7a0NBQzVDLDhEQUFDUTt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNHO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT2pCLE1BQUs7Z0NBQVdJLElBQUc7Z0NBQVdPLFdBQVU7Z0NBQWFPLFVBQVVyQjs7Ozs7Ozs7Ozs7O2tDQUVsRiw4REFBQ2E7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9qQixNQUFLO2dDQUFXSSxJQUFHO2dDQUFXTyxXQUFVO2dDQUFhTyxVQUFVckI7Ozs7Ozs7Ozs7OztrQ0FFbEYsOERBQUNtQjt3QkFBTUMsTUFBSzt3QkFBU2hCLE9BQU07d0JBQU1VLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0Q7R0FsQ00zQjs7UUFHV0gsa0RBQVNBOzs7S0FIcEJHOztBQW9DTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanM/MzRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwuanMnXHJcbid1c2VjbGllbnQnXHJcbmNvbnN0IENyYWV0ZVRvZG8gPSAoe2ZpbmRlZFVzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyPUpTT04ucGFyc2UoZmluZGVkVXNlcik7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyLl9pZClcclxuICAgIGNvbnN0IHtwdXNofT11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtmb3JtRGF0YSxzZXRGb3JtRGF0YV09dXNlU3RhdGUoe3RvZG9OYW1lOlwiXCIsdG9kb0RhdGU6XCJcIn0pO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsW2UudGFyZ2V0Lm5hbWVdOmUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXI9KCk9PntcclxuICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS90b2Rvcy9zdGF0aWNUb2Rvc1wiLHsuLi5mb3JtRGF0YSxpZH0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT5jb25zb2xlLmxvZyhyZXMuZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctbWRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTZcIiBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvTmFtZVwiPnRvZG8gbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRvZG9OYW1lXCIgaWQ9XCJ0b2RvTmFtZVwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZG9EYXRlXCI+dG9kbyBkYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwidG9kb0RhdGVcIiBpZD1cInRvZG9EYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENyYWV0ZVRvZG87XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICBjb25zdCB0b2tlbj1nZXRDb29raWUoJ3RvZG9Ub2tlbicseyByZXEsIHJlcyB9KTtcclxuICAgIGNvbnN0IFtiZWFyZXIsbWFpbl09dG9rZW4uc3BsaXQoXCIgXCIpO1xyXG4gICAgY29uc3QgcGF5bG9hZD1qd3QudmVyaWZ5KG1haW4scHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSk7XHJcbiAgICBjb25zdCB7bW9iaWxlLGVtYWlsfT1wYXlsb2FkO1xyXG4gICAgLy9jb25uZWN0IHRvIERCXHJcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgIC8vc2VhcmNoIHRoZSB1c2VyIGJhc2VkIG9uIG1vYmlsZSBhbmQgZW1haWxcclxuICAgIGNvbnN0IHVzZXI9YXdhaXQgVXNlci5maW5kT25lKHttb2JpbGV9KVxyXG4gICAgICAgICAgLy8gaWYgbW9iaWxlIG51bWJlciBpcyBub3QgZm91bmRcclxuICAgICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcInVzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vMi0gY2hlY2sgaWYgdGhlIHVzZXJFbWFpbCBpbiBEQiBtYXRjaCB3aXRoIHRoZSBlbWFpbCBpbiB0b2tlblxyXG4gICAgICAgICAgY29uc3QgY29tcGFyZVJlc3VsdD0odXNlci5lbWFpbD09PWVtYWlsKVxyXG4gICAgICAgICBpZighY29tcGFyZVJlc3VsdCl7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwidXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICAgLy8zLSBzZXQgdGhlIHRva2VuIHRvIHRoZSBoZWFkZXIgYW5kIHJlZGlyZWN0IHRvIHRoZSBtYWluIHBhZ2VcclxuICAgICAgICAgIGNvbnN0IGZpbmRlZFVzZXI9IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHtmaW5kZWRVc2VyfSB9O1xyXG4gICAgICB9Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDcmFldGVUb2RvIiwiZmluZGVkVXNlciIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiX2lkIiwicHVzaCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0b2RvTmFtZSIsInRvZG9EYXRlIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwicG9zdCIsImlkIiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todos/create/index.js\n"));

/***/ })

});