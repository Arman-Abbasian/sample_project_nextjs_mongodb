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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_inputDate_Format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/inputDate.Format */ \"./utils/inputDate.Format.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_FormComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/FormComponent */ \"./components/FormComponent.jsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst EditTodo = (param)=>{\n    let { findedTodo  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const todo = JSON.parse(findedTodo);\n    const id = todo._id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        todoName: todo.todoName,\n        todoDate: todo.todoDate\n    });\n    console.log(formData);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].put(\"/api/todos/dynamicTodos/\".concat(id), {\n            ...formData,\n            id\n        }).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n            router.push(\"/todos\");\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineArrowLeft, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto max-w-md mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col gap-6\",\n                    onSubmit: submitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            label: \"todo name\",\n                            name: \"todoName\",\n                            onChange: changeHandler,\n                            value: formData.todoName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            label: \"todo date\",\n                            name: \"todoDate\",\n                            onChange: changeHandler,\n                            value: formData.todoDate,\n                            type: \"date\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"update\",\n                            className: \"submitButton\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditTodo, \"EDUdPC0+988vmbtkcRx2Ipoc8UY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = EditTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTodo);\nvar _c;\n$RefreshReg$(_c, \"EditTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9bZWRpdF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUtvQjtBQUNoQjtBQUNpQztBQUN4QztBQUNjO0FBQ3NCO0FBQ1g7QUFFbkQsTUFBTVMsV0FBVyxTQUFrQjtRQUFqQixFQUFDQyxXQUFVLEVBQUM7O0lBQzVCLE1BQU1DLFNBQU9MLHNEQUFTQTtJQUNwQixNQUFNTSxPQUFLQyxLQUFLQyxLQUFLLENBQUNKO0lBQ3RCLE1BQU1LLEtBQUdILEtBQUtJLEdBQUc7SUFFakIsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUNmLCtDQUFRQSxDQUFDO1FBQUNnQixVQUFTUCxLQUFLTyxRQUFRO1FBQUNDLFVBQVNSLEtBQUtRLFFBQVE7SUFBQTtJQUNwRkMsUUFBUUMsR0FBRyxDQUFDTDtJQUNaLE1BQU1NLGdCQUFjLENBQUNDLElBQUk7UUFDckJOLFlBQVk7WUFBQyxHQUFHRCxRQUFRO1lBQUMsQ0FBQ08sRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBQ0YsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUE7SUFDM0Q7SUFDQSxNQUFNQyxnQkFBYyxDQUFDSixJQUFJO1FBQ3JCQSxFQUFFSyxjQUFjO1FBQ2hCeEIsaURBQVMsQ0FBQywyQkFBOEIsT0FBSFUsS0FBSztZQUFDLEdBQUdFLFFBQVE7WUFBQ0Y7UUFBRSxHQUN4RGdCLElBQUksQ0FBQ0MsQ0FBQUEsTUFBSztZQUNUOUIsMERBQWEsQ0FBQzhCLElBQUlFLElBQUksQ0FBQ0MsT0FBTztZQUM5QnhCLE9BQU95QixJQUFJLENBQUM7UUFDZCxHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQUtqQixRQUFRQyxHQUFHLENBQUNnQjtJQUM1QjtJQUNBLHFCQUNJLDhEQUFDQzs7MEJBQ0MsOERBQUMvQiw4REFBa0JBOzs7OzswQkFDakIsOERBQUMrQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUtELFdBQVU7b0JBQXNCRSxVQUFVZDs7c0NBQ2hELDhEQUFDckIsaUVBQWFBOzRCQUFDb0MsT0FBTzs0QkFBYWpCLE1BQU07NEJBQVlrQixVQUFVckI7NEJBQWVJLE9BQU9WLFNBQVNFLFFBQVE7Ozs7OztzQ0FDcEcsOERBQUNaLGlFQUFhQTs0QkFBQ29DLE9BQU87NEJBQWFqQixNQUFNOzRCQUFZa0IsVUFBVXJCOzRCQUFlSSxPQUFPVixTQUFTRyxRQUFROzRCQUFFeUIsTUFBSzs7Ozs7O3NDQUMzRyw4REFBQ0M7NEJBQU1ELE1BQUs7NEJBQVNsQixPQUFNOzRCQUFTYSxXQUFVOzs7Ozs7c0NBQzlDLDhEQUFDdkMsb0RBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCO0dBaENNUTs7UUFDU0gsa0RBQVNBOzs7S0FEbEJHOztBQWtDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9bZWRpdF0vaW5kZXguanM/ZjU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICBqd3QgIGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwnXHJcbmltcG9ydCBUb2RvIGZyb20gJy4uLy4uLy4uL21vZGVscy90b2RvLm1vZGVsJ1xyXG5pbXBvcnQgeyBUb2FzdGVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaW5wdXREYXRlRm9ybWF0IH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2lucHV0RGF0ZS5Gb3JtYXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd0xlZnR9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuY29uc3QgRWRpdFRvZG8gPSAoe2ZpbmRlZFRvZG99KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgdG9kbz1KU09OLnBhcnNlKGZpbmRlZFRvZG8pO1xyXG4gICAgY29uc3QgaWQ9dG9kby5faWQ7XHJcblxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLHNldEZvcm1EYXRhXT11c2VTdGF0ZSh7dG9kb05hbWU6dG9kby50b2RvTmFtZSx0b2RvRGF0ZTp0b2RvLnRvZG9EYXRlfSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcclxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBheGlvcy5wdXQoYC9hcGkvdG9kb3MvZHluYW1pY1RvZG9zLyR7aWR9YCx7Li4uZm9ybURhdGEsaWR9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvdG9kb3NcIilcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEFpT3V0bGluZUFycm93TGVmdCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1heC13LW1kIG10LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02XCIgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnQgbGFiZWw9e1widG9kbyBuYW1lXCJ9IG5hbWU9e1widG9kb05hbWVcIn0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50b2RvTmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbXBvbmVudCBsYWJlbD17XCJ0b2RvIGRhdGVcIn0gbmFtZT17XCJ0b2RvRGF0ZVwifSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRvZG9EYXRlfSB0eXBlPVwiZGF0ZVwiLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInVwZGF0ZVwiIGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRWRpdFRvZG87XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyxxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB0b2tlbj1nZXRDb29raWUoJ3RvZG9Ub2tlbicseyByZXEsIHJlcyB9KTtcclxuICAgIGlmKCF0b2tlbil7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOnt9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgW2JlYXJlcixtYWluXT10b2tlbi5zcGxpdChcIiBcIik7XHJcbiAgICBjb25zdCBwYXlsb2FkPWp3dC52ZXJpZnkobWFpbixwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcclxuICAgIGNvbnN0IHttb2JpbGUsZW1haWx9PXBheWxvYWQ7XHJcbiAgICAvL2Nvbm5lY3QgdG8gREJcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgLy9zZWFyY2ggdGhlIHVzZXIgYmFzZWQgb24gbW9iaWxlIGFuZCBlbWFpbFxyXG4gICAgY29uc3QgdXNlcj1hd2FpdCBVc2VyLmZpbmRPbmUoe21vYmlsZX0pXHJcbiAgICAgICAgICAvLyBpZiBtb2JpbGUgbnVtYmVyIGlzIG5vdCBmb3VuZFxyXG4gICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vMi0gY2hlY2sgaWYgdGhlIHVzZXJFbWFpbCBpbiBEQiBtYXRjaCB3aXRoIHRoZSBlbWFpbCBpbiB0b2tlblxyXG4gICAgICAgICAgY29uc3QgY29tcGFyZVJlc3VsdD0odXNlci5lbWFpbD09PWVtYWlsKVxyXG4gICAgICAgICBpZighY29tcGFyZVJlc3VsdCl7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgIC8vMy0gc2V0IHRoZSB0b2tlbiB0byB0aGUgaGVhZGVyIGFuZCByZWRpcmVjdCB0byB0aGUgbWFpbiBwYWdlXHJcbiAgICAgICAgICAgY29uc3QgX2lkPXVzZXIuX2lkXHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocXVlcnkuZWRpdClcclxuICAgICAgICAgICBjb25zdCB0b2RvPWF3YWl0IFRvZG8uZmluZE9uZSh7dXNlcklEOl9pZCxfaWQ6cXVlcnkuZWRpdH0pO1xyXG4gICAgICAgICAgY29uc3QgZmluZGVkVG9kbz0gSlNPTi5zdHJpbmdpZnkodG9kbylcclxuICAgICAgICByZXR1cm4geyBwcm9wczoge2ZpbmRlZFRvZG99IH07XHJcbiAgICAgIH0iXSwibmFtZXMiOlsiTGluayIsIlRvYXN0ZXIiLCJ0b2FzdCIsInVzZVN0YXRlIiwiaW5wdXREYXRlRm9ybWF0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJGb3JtQ29tcG9uZW50IiwiQWlPdXRsaW5lQXJyb3dMZWZ0IiwiRWRpdFRvZG8iLCJmaW5kZWRUb2RvIiwicm91dGVyIiwidG9kbyIsIkpTT04iLCJwYXJzZSIsImlkIiwiX2lkIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInRvZG9OYW1lIiwidG9kb0RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJwdXQiLCJ0aGVuIiwicmVzIiwic3VjY2VzcyIsImRhdGEiLCJtZXNzYWdlIiwicHVzaCIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJvbkNoYW5nZSIsInR5cGUiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos/[edit]/index.js\n"));

/***/ })

});