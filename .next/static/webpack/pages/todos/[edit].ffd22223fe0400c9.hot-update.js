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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst EditTodo = (param)=>{\n    let { findedTodo  } = param;\n    _s();\n    const todo = JSON.parse(findedTodo);\n    console.log(formData);\n    const id = findedTodo._id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        todoName: todo.todoName,\n        todoDate: todo.todoDate\n    });\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        axios.put(\"/api/todos/staticTodos\", {\n            ...formData,\n            id\n        }).then((res)=>{\n            setFormData({\n                todoName: \"\",\n                todoDate: \"\"\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(res.data.message);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto max-w-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col gap-6\",\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoName\",\n                                children: \"todo name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"todoName\",\n                                id: \"todoName\",\n                                className: \"form-input\",\n                                onChange: changeHandler,\n                                value: formData.todoName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"todoDate\",\n                                children: \"todo date\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"todoDate\",\n                                id: \"todoDate\",\n                                className: \"form-input\",\n                                onChange: changeHandler,\n                                value: formData.todoDate\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Add\",\n                        className: \"bg-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\[edit]\\\\index.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditTodo, \"ktdMoevCn/zwCaGCfaIMO9LDP4I=\");\n_c = EditTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTodo);\nvar _c;\n$RefreshReg$(_c, \"EditTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9bZWRpdF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUtvQjtBQUNoQjtBQUVqQyxNQUFNSSxXQUFXLFNBQWtCO1FBQWpCLEVBQUNDLFdBQVUsRUFBQzs7SUFDMUIsTUFBTUMsT0FBS0MsS0FBS0MsS0FBSyxDQUFDSDtJQUN0QkksUUFBUUMsR0FBRyxDQUFDQztJQUNaLE1BQU1DLEtBQUdQLFdBQVdRLEdBQUc7SUFDdkIsTUFBTSxDQUFDRixVQUFTRyxZQUFZLEdBQUNYLCtDQUFRQSxDQUFDO1FBQUNZLFVBQVNULEtBQUtTLFFBQVE7UUFBQ0MsVUFBU1YsS0FBS1UsUUFBUTtJQUFBO0lBQ3BGLE1BQU1DLGdCQUFjLENBQUNDLElBQUk7UUFDckJKLFlBQVk7WUFBQyxHQUFHSCxRQUFRO1lBQUMsQ0FBQ08sRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBQ0YsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUE7SUFDM0Q7SUFDQSxNQUFNQyxnQkFBYyxDQUFDSixJQUFJO1FBQ3JCQSxFQUFFSyxjQUFjO1FBQ2hCQyxNQUFNQyxHQUFHLENBQUMsMEJBQXlCO1lBQUMsR0FBR2QsUUFBUTtZQUFDQztRQUFFLEdBQ2pEYyxJQUFJLENBQUNDLENBQUFBLE1BQUs7WUFDVGIsWUFBWTtnQkFBQ0MsVUFBUztnQkFBR0MsVUFBUztZQUFFO1lBQ3BDZCwwREFBYSxDQUFDeUIsSUFBSUUsSUFBSSxDQUFDQyxPQUFPO1FBQ2hDLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS3ZCLFFBQVFDLEdBQUcsQ0FBQ3NCO0lBQzVCO0lBQ0EscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDQTtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDQztnQkFBS0QsV0FBVTtnQkFBc0JFLFVBQVVkOztrQ0FDNUMsOERBQUNXO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPcEIsTUFBSztnQ0FBV1IsSUFBRztnQ0FBV3NCLFdBQVU7Z0NBQWFPLFVBQVV4QjtnQ0FBZUksT0FBT1YsU0FBU0ksUUFBUTs7Ozs7Ozs7Ozs7O2tDQUV6SCw4REFBQ2tCO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPcEIsTUFBSztnQ0FBV1IsSUFBRztnQ0FBV3NCLFdBQVU7Z0NBQWFPLFVBQVV4QjtnQ0FBZUksT0FBT1YsU0FBU0ssUUFBUTs7Ozs7Ozs7Ozs7O2tDQUV6SCw4REFBQ3VCO3dCQUFNQyxNQUFLO3dCQUFTbkIsT0FBTTt3QkFBTWEsV0FBVTs7Ozs7O2tDQUMzQyw4REFBQ2pDLG9EQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCO0dBbkNNRztLQUFBQTs7QUFxQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb3MvW2VkaXRdL2luZGV4LmpzP2Y1NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyLm1vZGVsJ1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdG9kby5tb2RlbCdcclxuaW1wb3J0IHsgVG9hc3RlciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBFZGl0VG9kbyA9ICh7ZmluZGVkVG9kb30pID0+IHtcclxuICAgIGNvbnN0IHRvZG89SlNPTi5wYXJzZShmaW5kZWRUb2RvKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxyXG4gICAgY29uc3QgaWQ9ZmluZGVkVG9kby5faWQ7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsc2V0Rm9ybURhdGFdPXVzZVN0YXRlKHt0b2RvTmFtZTp0b2RvLnRvZG9OYW1lLHRvZG9EYXRlOnRvZG8udG9kb0RhdGV9KTtcclxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBheGlvcy5wdXQoXCIvYXBpL3RvZG9zL3N0YXRpY1RvZG9zXCIsey4uLmZvcm1EYXRhLGlkfSlcclxuICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgIHNldEZvcm1EYXRhKHt0b2RvTmFtZTpcIlwiLHRvZG9EYXRlOlwiXCJ9KTtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02XCIgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidG9kb05hbWVcIj50b2RvIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0b2RvTmFtZVwiIGlkPVwidG9kb05hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCIgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50b2RvTmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZG9EYXRlXCI+dG9kbyBkYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwidG9kb0RhdGVcIiBpZD1cInRvZG9EYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudG9kb0RhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VG9kbztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzLHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IHRva2VuPWdldENvb2tpZSgndG9kb1Rva2VuJyx7IHJlcSwgcmVzIH0pO1xyXG4gICAgaWYoIXRva2VuKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBbYmVhcmVyLG1haW5dPXRva2VuLnNwbGl0KFwiIFwiKTtcclxuICAgIGNvbnN0IHBheWxvYWQ9and0LnZlcmlmeShtYWluLHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpO1xyXG4gICAgY29uc3Qge21vYmlsZSxlbWFpbH09cGF5bG9hZDtcclxuICAgIC8vY29ubmVjdCB0byBEQlxyXG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICAvL3NlYXJjaCB0aGUgdXNlciBiYXNlZCBvbiBtb2JpbGUgYW5kIGVtYWlsXHJcbiAgICBjb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7bW9iaWxlfSlcclxuICAgICAgICAgIC8vIGlmIG1vYmlsZSBudW1iZXIgaXMgbm90IGZvdW5kXHJcbiAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8yLSBjaGVjayBpZiB0aGUgdXNlckVtYWlsIGluIERCIG1hdGNoIHdpdGggdGhlIGVtYWlsIGluIHRva2VuXHJcbiAgICAgICAgICBjb25zdCBjb21wYXJlUmVzdWx0PSh1c2VyLmVtYWlsPT09ZW1haWwpXHJcbiAgICAgICAgIGlmKCFjb21wYXJlUmVzdWx0KXtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICAgLy8zLSBzZXQgdGhlIHRva2VuIHRvIHRoZSBoZWFkZXIgYW5kIHJlZGlyZWN0IHRvIHRoZSBtYWluIHBhZ2VcclxuICAgICAgICAgICBjb25zdCBfaWQ9dXNlci5faWRcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVyeS5lZGl0KVxyXG4gICAgICAgICAgIGNvbnN0IHRvZG89YXdhaXQgVG9kby5maW5kT25lKHt1c2VySUQ6X2lkLF9pZDpxdWVyeS5lZGl0fSk7XHJcbiAgICAgICAgICBjb25zdCBmaW5kZWRUb2RvPSBKU09OLnN0cmluZ2lmeSh0b2RvKVxyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7ZmluZGVkVG9kb30gfTtcclxuICAgICAgfSJdLCJuYW1lcyI6WyJMaW5rIiwiVG9hc3RlciIsInRvYXN0IiwidXNlU3RhdGUiLCJFZGl0VG9kbyIsImZpbmRlZFRvZG8iLCJ0b2RvIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImZvcm1EYXRhIiwiaWQiLCJfaWQiLCJzZXRGb3JtRGF0YSIsInRvZG9OYW1lIiwidG9kb0RhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHV0IiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJkYXRhIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todos/[edit]/index.js\n"));

/***/ })

});