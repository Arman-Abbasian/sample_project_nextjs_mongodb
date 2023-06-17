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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst EditTodo = (param)=>{\n    let { findedTodo  } = param;\n    _s();\n    const todo = JSON.parse(findedTodo);\n    const id = findedTodo._id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        todoName: todo.todoName,\n        todoDate: Date(todo.todoDate)\n    });\n    console.log(formData);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        axios.put(\"/api/todos/staticTodos\", {\n            ...formData,\n            id\n        }).then((res)=>{\n            setFormData({\n                todoName: \"\",\n                todoDate: \"\"\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto max-w-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-6\",\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoName\",\n                                children: \"todo name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"todoName\",\n                                id: \"todoName\",\n                                className: \"form-input\",\n                                onChange: changeHandler,\n                                value: formData.todoName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoDate\",\n                                children: \"todo date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"todoDate\",\n                                id: \"todoDate\",\n                                className: \"form-input\",\n                                onChange: changeHandler,\n                                value: formData.todoDate\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Add\",\n                        className: \"bg-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditTodo, \"78dAF9Rl4td/uWkKtNSBw68nfwI=\");\n_c = EditTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTodo);\nvar _c;\n$RefreshReg$(_c, \"EditTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9bZWRpdF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUtvQjtBQUNoQjtBQUVqQyxNQUFNSSxXQUFXLFNBQWtCO1FBQWpCLEVBQUNDLFdBQVUsRUFBQzs7SUFDMUIsTUFBTUMsT0FBS0MsS0FBS0MsS0FBSyxDQUFDSDtJQUN0QixNQUFNSSxLQUFHSixXQUFXSyxHQUFHO0lBQ3ZCLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFDVCwrQ0FBUUEsQ0FBQztRQUFDVSxVQUFTUCxLQUFLTyxRQUFRO1FBQUNDLFVBQVNDLEtBQUtULEtBQUtRLFFBQVE7SUFBQztJQUMxRkUsUUFBUUMsR0FBRyxDQUFDTjtJQUNaLE1BQU1PLGdCQUFjLENBQUNDLElBQUk7UUFDckJQLFlBQVk7WUFBQyxHQUFHRCxRQUFRO1lBQUMsQ0FBQ1EsRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBQ0YsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUE7SUFDM0Q7SUFDQSxNQUFNQyxnQkFBYyxDQUFDSixJQUFJO1FBQ3JCQSxFQUFFSyxjQUFjO1FBQ2hCQyxNQUFNQyxHQUFHLENBQUMsMEJBQXlCO1lBQUMsR0FBR2YsUUFBUTtZQUFDRjtRQUFFLEdBQ2pEa0IsSUFBSSxDQUFDQyxDQUFBQSxNQUFLO1lBQ1RoQixZQUFZO2dCQUFDQyxVQUFTO2dCQUFHQyxVQUFTO1lBQUU7WUFDcENaLDBEQUFhLENBQUMwQixJQUFJRSxJQUFJLENBQUNDLE9BQU87UUFDaEMsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFLakIsUUFBUUMsR0FBRyxDQUFDZ0I7SUFDNUI7SUFDQSxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNBO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNDO2dCQUFLRCxXQUFVO2dCQUFzQkUsVUFBVWQ7O2tDQUM1Qyw4REFBQ1c7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9wQixNQUFLO2dDQUFXWixJQUFHO2dDQUFXMEIsV0FBVTtnQ0FBYU8sVUFBVXhCO2dDQUFlSSxPQUFPWCxTQUFTRSxRQUFROzs7Ozs7Ozs7Ozs7a0NBRXpILDhEQUFDcUI7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9wQixNQUFLO2dDQUFXWixJQUFHO2dDQUFXMEIsV0FBVTtnQ0FBYU8sVUFBVXhCO2dDQUFlSSxPQUFPWCxTQUFTRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBRXpILDhEQUFDMEI7d0JBQU1DLE1BQUs7d0JBQVNuQixPQUFNO3dCQUFNYSxXQUFVOzs7Ozs7a0NBQzNDLDhEQUFDbEMsb0RBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUI7R0FuQ01HO0tBQUFBOztBQXFDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9bZWRpdF0vaW5kZXguanM/ZjU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICBqd3QgIGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnXHJcbmltcG9ydCBUb2RvIGZyb20gJy4uLy4uLy4uL21vZGVscy90b2RvLm1vZGVsJ1xyXG5pbXBvcnQgeyBUb2FzdGVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEVkaXRUb2RvID0gKHtmaW5kZWRUb2RvfSkgPT4ge1xyXG4gICAgY29uc3QgdG9kbz1KU09OLnBhcnNlKGZpbmRlZFRvZG8pO1xyXG4gICAgY29uc3QgaWQ9ZmluZGVkVG9kby5faWQ7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsc2V0Rm9ybURhdGFdPXVzZVN0YXRlKHt0b2RvTmFtZTp0b2RvLnRvZG9OYW1lLHRvZG9EYXRlOkRhdGUodG9kby50b2RvRGF0ZSl9KTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxyXG4gICAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsW2UudGFyZ2V0Lm5hbWVdOmUudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF4aW9zLnB1dChcIi9hcGkvdG9kb3Mvc3RhdGljVG9kb3NcIix7Li4uZm9ybURhdGEsaWR9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgc2V0Rm9ybURhdGEoe3RvZG9OYW1lOlwiXCIsdG9kb0RhdGU6XCJcIn0pO1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctbWRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTZcIiBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0b2RvTmFtZVwiPnRvZG8gbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRvZG9OYW1lXCIgaWQ9XCJ0b2RvTmFtZVwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRvZG9OYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9kb0RhdGVcIj50b2RvIGRhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJ0b2RvRGF0ZVwiIGlkPVwidG9kb0RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50b2RvRGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWRkXCIgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRUb2RvO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMscXVlcnkgfSkge1xyXG4gICAgY29uc3QgdG9rZW49Z2V0Q29va2llKCd0b2RvVG9rZW4nLHsgcmVxLCByZXMgfSk7XHJcbiAgICBpZighdG9rZW4pe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczp7fSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtiZWFyZXIsbWFpbl09dG9rZW4uc3BsaXQoXCIgXCIpO1xyXG4gICAgY29uc3QgcGF5bG9hZD1qd3QudmVyaWZ5KG1haW4scHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSk7XHJcbiAgICBjb25zdCB7bW9iaWxlLGVtYWlsfT1wYXlsb2FkO1xyXG4gICAgLy9jb25uZWN0IHRvIERCXHJcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgIC8vc2VhcmNoIHRoZSB1c2VyIGJhc2VkIG9uIG1vYmlsZSBhbmQgZW1haWxcclxuICAgIGNvbnN0IHVzZXI9YXdhaXQgVXNlci5maW5kT25lKHttb2JpbGV9KVxyXG4gICAgICAgICAgLy8gaWYgbW9iaWxlIG51bWJlciBpcyBub3QgZm91bmRcclxuICAgICAgICAgIGlmKCF1c2VyKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLzItIGNoZWNrIGlmIHRoZSB1c2VyRW1haWwgaW4gREIgbWF0Y2ggd2l0aCB0aGUgZW1haWwgaW4gdG9rZW5cclxuICAgICAgICAgIGNvbnN0IGNvbXBhcmVSZXN1bHQ9KHVzZXIuZW1haWw9PT1lbWFpbClcclxuICAgICAgICAgaWYoIWNvbXBhcmVSZXN1bHQpe1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgICAvLzMtIHNldCB0aGUgdG9rZW4gdG8gdGhlIGhlYWRlciBhbmQgcmVkaXJlY3QgdG8gdGhlIG1haW4gcGFnZVxyXG4gICAgICAgICAgIGNvbnN0IF9pZD11c2VyLl9pZFxyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5LmVkaXQpXHJcbiAgICAgICAgICAgY29uc3QgdG9kbz1hd2FpdCBUb2RvLmZpbmRPbmUoe3VzZXJJRDpfaWQsX2lkOnF1ZXJ5LmVkaXR9KTtcclxuICAgICAgICAgIGNvbnN0IGZpbmRlZFRvZG89IEpTT04uc3RyaW5naWZ5KHRvZG8pXHJcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHtmaW5kZWRUb2RvfSB9O1xyXG4gICAgICB9Il0sIm5hbWVzIjpbIkxpbmsiLCJUb2FzdGVyIiwidG9hc3QiLCJ1c2VTdGF0ZSIsIkVkaXRUb2RvIiwiZmluZGVkVG9kbyIsInRvZG8iLCJKU09OIiwicGFyc2UiLCJpZCIsIl9pZCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0b2RvTmFtZSIsInRvZG9EYXRlIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHV0IiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJkYXRhIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todos/[edit]/index.js\n"));

/***/ })

});