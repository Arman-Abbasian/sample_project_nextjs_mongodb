"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos/[edit]",{

/***/ "./pages/todos/[edit]/index.js":
/*!*************************************!*\
  !*** ./pages/todos/[edit]/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_inputDate_Format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/inputDate.Format */ \"./utils/inputDate.Format.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst EditTodo = (param)=>{\n    let { findedTodo  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const todo = JSON.parse(findedTodo);\n    const id = todo._id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        todoName: todo.todoName,\n        todoDate: todo.todoDate\n    });\n    console.log(formData);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].put(\"/api/todos/dynamicTodos/\".concat(id), {\n            ...formData,\n            id\n        }).then((res)=>{\n            console.log(res.data);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n            router.push(\"/todos\");\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto max-w-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-6\",\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoName\",\n                                children: \"todo name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"todoName\",\n                                id: \"todoName\",\n                                className: \"form-input\",\n                                onChange: changeHandler,\n                                value: formData.todoName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoDate\",\n                                children: \"todo date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"todoDate\",\n                                id: \"todoDate\",\n                                className: \"form-input\",\n                                onChange: changeHandler,\n                                value: formData.todoDate\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"update\",\n                        className: \"bg-blue-500 cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditTodo, \"EDUdPC0+988vmbtkcRx2Ipoc8UY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = EditTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTodo);\nvar _c;\n$RefreshReg$(_c, \"EditTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9bZWRpdF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFLb0I7QUFDaEI7QUFDaUM7QUFDeEM7QUFDYztBQUV4QyxNQUFNTyxXQUFXLFNBQWtCO1FBQWpCLEVBQUNDLFdBQVUsRUFBQzs7SUFDNUIsTUFBTUMsU0FBT0gsc0RBQVNBO0lBQ3BCLE1BQU1JLE9BQUtDLEtBQUtDLEtBQUssQ0FBQ0o7SUFDdEIsTUFBTUssS0FBR0gsS0FBS0ksR0FBRztJQUVqQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBQ2IsK0NBQVFBLENBQUM7UUFBQ2MsVUFBU1AsS0FBS08sUUFBUTtRQUFDQyxVQUFTUixLQUFLUSxRQUFRO0lBQUE7SUFDcEZDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDWixNQUFNTSxnQkFBYyxDQUFDQyxJQUFJO1FBQ3JCTixZQUFZO1lBQUMsR0FBR0QsUUFBUTtZQUFDLENBQUNPLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUNGLEVBQUVDLE1BQU0sQ0FBQ0UsS0FBSztRQUFBO0lBQzNEO0lBQ0EsTUFBTUMsZ0JBQWMsQ0FBQ0osSUFBSTtRQUNyQkEsRUFBRUssY0FBYztRQUNoQnRCLGlEQUFTLENBQUMsMkJBQThCLE9BQUhRLEtBQUs7WUFBQyxHQUFHRSxRQUFRO1lBQUNGO1FBQUUsR0FDeERnQixJQUFJLENBQUNDLENBQUFBLE1BQUs7WUFDVFgsUUFBUUMsR0FBRyxDQUFDVSxJQUFJQyxJQUFJO1lBQ3BCN0IsMERBQWEsQ0FBQzRCLElBQUlDLElBQUksQ0FBQ0UsT0FBTztZQUM5QnhCLE9BQU95QixJQUFJLENBQUM7UUFDZCxHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQUtqQixRQUFRQyxHQUFHLENBQUNnQjtJQUM1QjtJQUNBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQUtELFdBQVU7Z0JBQXNCRSxVQUFVZDs7a0NBQzVDLDhEQUFDVzt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNHO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT3BCLE1BQUs7Z0NBQVdYLElBQUc7Z0NBQVd5QixXQUFVO2dDQUFhTyxVQUFVeEI7Z0NBQWVJLE9BQU9WLFNBQVNFLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFekgsOERBQUNvQjt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNHO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT3BCLE1BQUs7Z0NBQVdYLElBQUc7Z0NBQVd5QixXQUFVO2dDQUFhTyxVQUFVeEI7Z0NBQWVJLE9BQU9WLFNBQVNHLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFekgsOERBQUN5Qjt3QkFBTUMsTUFBSzt3QkFBU25CLE9BQU07d0JBQVNhLFdBQVU7Ozs7OztrQ0FDOUMsOERBQUNyQyxvREFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QjtHQXRDTU07O1FBQ1NELGtEQUFTQTs7O0tBRGxCQzs7QUF3Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb3MvW2VkaXRdL2luZGV4LmpzP2Y1NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyLm1vZGVsJ1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdG9kby5tb2RlbCdcclxuaW1wb3J0IHsgVG9hc3RlciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGlucHV0RGF0ZUZvcm1hdCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9pbnB1dERhdGUuRm9ybWF0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBFZGl0VG9kbyA9ICh7ZmluZGVkVG9kb30pID0+IHtcclxuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB0b2RvPUpTT04ucGFyc2UoZmluZGVkVG9kbyk7XHJcbiAgICBjb25zdCBpZD10b2RvLl9pZDtcclxuXHJcbiAgICBjb25zdCBbZm9ybURhdGEsc2V0Rm9ybURhdGFdPXVzZVN0YXRlKHt0b2RvTmFtZTp0b2RvLnRvZG9OYW1lLHRvZG9EYXRlOnRvZG8udG9kb0RhdGV9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxyXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsW2UudGFyZ2V0Lm5hbWVdOmUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF4aW9zLnB1dChgL2FwaS90b2Rvcy9keW5hbWljVG9kb3MvJHtpZH1gLHsuLi5mb3JtRGF0YSxpZH0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3RvZG9zXCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT5jb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNlwiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZG9OYW1lXCI+dG9kbyBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidG9kb05hbWVcIiBpZD1cInRvZG9OYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudG9kb05hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvRGF0ZVwiPnRvZG8gZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInRvZG9EYXRlXCIgaWQ9XCJ0b2RvRGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRvZG9EYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJ1cGRhdGVcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBjdXJzb3ItcG9pbnRlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRWRpdFRvZG87XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyxxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB0b2tlbj1nZXRDb29raWUoJ3RvZG9Ub2tlbicseyByZXEsIHJlcyB9KTtcclxuICAgIGlmKCF0b2tlbil7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOnt9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgW2JlYXJlcixtYWluXT10b2tlbi5zcGxpdChcIiBcIik7XHJcbiAgICBjb25zdCBwYXlsb2FkPWp3dC52ZXJpZnkobWFpbixwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcclxuICAgIGNvbnN0IHttb2JpbGUsZW1haWx9PXBheWxvYWQ7XHJcbiAgICAvL2Nvbm5lY3QgdG8gREJcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgLy9zZWFyY2ggdGhlIHVzZXIgYmFzZWQgb24gbW9iaWxlIGFuZCBlbWFpbFxyXG4gICAgY29uc3QgdXNlcj1hd2FpdCBVc2VyLmZpbmRPbmUoe21vYmlsZX0pXHJcbiAgICAgICAgICAvLyBpZiBtb2JpbGUgbnVtYmVyIGlzIG5vdCBmb3VuZFxyXG4gICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vMi0gY2hlY2sgaWYgdGhlIHVzZXJFbWFpbCBpbiBEQiBtYXRjaCB3aXRoIHRoZSBlbWFpbCBpbiB0b2tlblxyXG4gICAgICAgICAgY29uc3QgY29tcGFyZVJlc3VsdD0odXNlci5lbWFpbD09PWVtYWlsKVxyXG4gICAgICAgICBpZighY29tcGFyZVJlc3VsdCl7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgIC8vMy0gc2V0IHRoZSB0b2tlbiB0byB0aGUgaGVhZGVyIGFuZCByZWRpcmVjdCB0byB0aGUgbWFpbiBwYWdlXHJcbiAgICAgICAgICAgY29uc3QgX2lkPXVzZXIuX2lkXHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocXVlcnkuZWRpdClcclxuICAgICAgICAgICBjb25zdCB0b2RvPWF3YWl0IFRvZG8uZmluZE9uZSh7dXNlcklEOl9pZCxfaWQ6cXVlcnkuZWRpdH0pO1xyXG4gICAgICAgICAgY29uc3QgZmluZGVkVG9kbz0gSlNPTi5zdHJpbmdpZnkodG9kbylcclxuICAgICAgICByZXR1cm4geyBwcm9wczoge2ZpbmRlZFRvZG99IH07XHJcbiAgICAgIH0iXSwibmFtZXMiOlsiTGluayIsIlRvYXN0ZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwiaW5wdXREYXRlRm9ybWF0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJFZGl0VG9kbyIsImZpbmRlZFRvZG8iLCJyb3V0ZXIiLCJ0b2RvIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJfaWQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidG9kb05hbWUiLCJ0b2RvRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInB1dCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos/[edit]/index.js\n"));

/***/ })

});