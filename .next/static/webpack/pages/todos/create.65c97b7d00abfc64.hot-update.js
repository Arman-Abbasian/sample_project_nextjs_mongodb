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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\"useclient\";\nconst CraeteTodo = (param)=>{\n    let { findedUser  } = param;\n    _s();\n    const user = JSON.parse(findedUser);\n    const id = user._id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        todoName: \"\",\n        todoDate: \"\"\n    });\n    console.log(formData);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        setFormData({\n            ...formData,\n            todoDate: new Date(formData.todoDate).getTime()\n        });\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/todos/staticTodos\", {\n            ...formData,\n            id\n        }).then((res)=>{\n            setFormData({\n                todoName: \"\",\n                todoDate: \"\"\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(res.data.message);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto max-w-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-6\",\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoName\",\n                                children: \"todo name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"todoName\",\n                                id: \"todoName\",\n                                className: \"form-input rounded-md border-teal-700 focus:border-none focus:ring-teal-400 shadow-sm\",\n                                onChange: changeHandler,\n                                value: formData.todoName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoDate\",\n                                children: \"todo date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"todoDate\",\n                                id: \"todoDate\",\n                                className: \"form-input\",\n                                onChange: changeHandler,\n                                value: formData.todoDate\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Add\",\n                        className: \"bg-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CraeteTodo, \"aBY+l6WtHlXTm5MatEa5SpnfyLE=\");\n_c = CraeteTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraeteTodo);\nvar _c;\n$RefreshReg$(_c, \"CraeteTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBSWtCO0FBRUs7QUFFakQ7QUFDQSxNQUFNSyxhQUFhLFNBQWtCO1FBQWpCLEVBQUNDLFdBQVUsRUFBQzs7SUFDNUIsTUFBTUMsT0FBS0MsS0FBS0MsS0FBSyxDQUFDSDtJQUN0QixNQUFNSSxLQUFHSCxLQUFLSSxHQUFHO0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFDWCwrQ0FBUUEsQ0FBQztRQUFDWSxVQUFTO1FBQUdDLFVBQVM7SUFBRTtJQUNoRUMsUUFBUUMsR0FBRyxDQUFDTDtJQUNWLE1BQU1NLGdCQUFjLENBQUNDLElBQUk7UUFDckJOLFlBQVk7WUFBQyxHQUFHRCxRQUFRO1lBQUMsQ0FBQ08sRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBQ0YsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUE7SUFDM0Q7SUFDQSxNQUFNQyxnQkFBYyxDQUFDSixJQUFJO1FBQ3JCQSxFQUFFSyxjQUFjO1FBQ2hCWCxZQUFZO1lBQUMsR0FBR0QsUUFBUTtZQUFDRyxVQUFTLElBQUlVLEtBQUtiLFNBQVNHLFFBQVEsRUFBRVcsT0FBTztRQUFFO1FBQ3ZFMUIsa0RBQVUsQ0FBQywwQkFBeUI7WUFBQyxHQUFHWSxRQUFRO1lBQUNGO1FBQUUsR0FDbERrQixJQUFJLENBQUNDLENBQUFBLE1BQUs7WUFDVGhCLFlBQVk7Z0JBQUNDLFVBQVM7Z0JBQUdDLFVBQVM7WUFBRTtZQUNwQ1osK0RBQWEsQ0FBQzBCLElBQUlFLElBQUksQ0FBQ0MsT0FBTztRQUNoQyxHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQUtsQixRQUFRQyxHQUFHLENBQUNpQjtJQUM1QjtJQUNBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQUtELFdBQVU7Z0JBQXNCRSxVQUFVZjs7a0NBQzVDLDhEQUFDWTt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNHO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT3JCLE1BQUs7Z0NBQVdYLElBQUc7Z0NBQVcwQixXQUFVO2dDQUF3Rk8sVUFBVXpCO2dDQUFlSSxPQUFPVixTQUFTRSxRQUFROzs7Ozs7Ozs7Ozs7a0NBRXBNLDhEQUFDcUI7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9yQixNQUFLO2dDQUFXWCxJQUFHO2dDQUFXMEIsV0FBVTtnQ0FBYU8sVUFBVXpCO2dDQUFlSSxPQUFPVixTQUFTRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBRXpILDhEQUFDMEI7d0JBQU1DLE1BQUs7d0JBQVNwQixPQUFNO3dCQUFNYyxXQUFVOzs7Ozs7a0NBQzNDLDhEQUFDaEMsb0RBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUI7R0FwQ01DO0tBQUFBOztBQXNDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanM/MzRmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIjtcclxuaW1wb3J0ICBqd3QgIGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdXNlci5tb2RlbC5qcydcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG4gXHJcbid1c2VjbGllbnQnXHJcbmNvbnN0IENyYWV0ZVRvZG8gPSAoe2ZpbmRlZFVzZXJ9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyPUpTT04ucGFyc2UoZmluZGVkVXNlcik7XHJcbiAgICBjb25zdCBpZD11c2VyLl9pZDtcclxuICAgIGNvbnN0IFtmb3JtRGF0YSxzZXRGb3JtRGF0YV09dXNlU3RhdGUoe3RvZG9OYW1lOlwiXCIsdG9kb0RhdGU6XCJcIn0pO1xyXG4gIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxyXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsW2UudGFyZ2V0Lm5hbWVdOmUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSx0b2RvRGF0ZTpuZXcgRGF0ZShmb3JtRGF0YS50b2RvRGF0ZSkuZ2V0VGltZSgpfSlcclxuICAgICAgICBheGlvcy5wb3N0KFwiL2FwaS90b2Rvcy9zdGF0aWNUb2Rvc1wiLHsuLi5mb3JtRGF0YSxpZH0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICBzZXRGb3JtRGF0YSh7dG9kb05hbWU6XCJcIix0b2RvRGF0ZTpcIlwifSk7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT5jb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNlwiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZG9OYW1lXCI+dG9kbyBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidG9kb05hbWVcIiBpZD1cInRvZG9OYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCByb3VuZGVkLW1kIGJvcmRlci10ZWFsLTcwMCBmb2N1czpib3JkZXItbm9uZSBmb2N1czpyaW5nLXRlYWwtNDAwIHNoYWRvdy1zbVwiIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudG9kb05hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvRGF0ZVwiPnRvZG8gZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInRvZG9EYXRlXCIgaWQ9XCJ0b2RvRGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRvZG9EYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ3JhZXRlVG9kbztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIGNvbnN0IHRva2VuPWdldENvb2tpZSgndG9kb1Rva2VuJyx7IHJlcSwgcmVzIH0pO1xyXG4gICAgaWYoIXRva2VuKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBbYmVhcmVyLG1haW5dPXRva2VuLnNwbGl0KFwiIFwiKTtcclxuICAgIGNvbnN0IHBheWxvYWQ9and0LnZlcmlmeShtYWluLHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpO1xyXG4gICAgY29uc3Qge21vYmlsZSxlbWFpbH09cGF5bG9hZDtcclxuICAgIC8vY29ubmVjdCB0byBEQlxyXG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICAvL3NlYXJjaCB0aGUgdXNlciBiYXNlZCBvbiBtb2JpbGUgYW5kIGVtYWlsXHJcbiAgICBjb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7bW9iaWxlfSlcclxuICAgICAgICAgIC8vIGlmIG1vYmlsZSBudW1iZXIgaXMgbm90IGZvdW5kXHJcbiAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8yLSBjaGVjayBpZiB0aGUgdXNlckVtYWlsIGluIERCIG1hdGNoIHdpdGggdGhlIGVtYWlsIGluIHRva2VuXHJcbiAgICAgICAgICBjb25zdCBjb21wYXJlUmVzdWx0PSh1c2VyLmVtYWlsPT09ZW1haWwpXHJcbiAgICAgICAgIGlmKCFjb21wYXJlUmVzdWx0KXtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICAgLy8zLSBzZXQgdGhlIHRva2VuIHRvIHRoZSBoZWFkZXIgYW5kIHJlZGlyZWN0IHRvIHRoZSBtYWluIHBhZ2VcclxuICAgICAgICAgIGNvbnN0IGZpbmRlZFVzZXI9IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHtmaW5kZWRVc2VyfSB9O1xyXG4gICAgICB9Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJDcmFldGVUb2RvIiwiZmluZGVkVXNlciIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJpZCIsIl9pZCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0b2RvTmFtZSIsInRvZG9EYXRlIiwiY29uc29sZSIsImxvZyIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiRGF0ZSIsImdldFRpbWUiLCJwb3N0IiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJkYXRhIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todos/create/index.js\n"));

/***/ })

});