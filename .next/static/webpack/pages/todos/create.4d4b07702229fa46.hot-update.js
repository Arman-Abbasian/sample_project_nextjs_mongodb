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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_FormComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FormComponent */ \"./components/FormComponent.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\"useclient\";\nconst CraeteTodo = (param)=>{\n    let { findedUser  } = param;\n    _s();\n    const user = JSON.parse(findedUser);\n    const id = user._id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        todoName: \"\",\n        todoDate: \"\"\n    });\n    console.log(formData);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        setFormData({\n            ...formData,\n            todoDate: new Date(formData.todoDate).getTime()\n        });\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/todos/staticTodos\", {\n            ...formData,\n            id\n        }).then((res)=>{\n            setFormData({\n                todoName: \"\",\n                todoDate: \"\"\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(res.data.message);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                href: \"/todos/create\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"text-teal-500 hover:text-teal-800\",\n                    children: \"Add new Todo?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 53\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto max-w-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col gap-6\",\n                    onSubmit: submitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"todo name\",\n                            name: \"todoName\",\n                            onChange: changeHandler,\n                            value: formData.todoName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"todo date\",\n                            name: \"todoDate\",\n                            onChange: changeHandler,\n                            value: formData.todoDate,\n                            type: \"date\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Add\",\n                            className: \"submitButton\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CraeteTodo, \"aBY+l6WtHlXTm5MatEa5SpnfyLE=\");\n_c = CraeteTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraeteTodo);\nvar _c;\n$RefreshReg$(_c, \"CraeteTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUlrQjtBQUVLO0FBQ2E7QUFFOUQ7QUFDQSxNQUFNTSxhQUFhLFNBQWtCO1FBQWpCLEVBQUNDLFdBQVUsRUFBQzs7SUFDNUIsTUFBTUMsT0FBS0MsS0FBS0MsS0FBSyxDQUFDSDtJQUN0QixNQUFNSSxLQUFHSCxLQUFLSSxHQUFHO0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBU0MsWUFBWSxHQUFDWiwrQ0FBUUEsQ0FBQztRQUFDYSxVQUFTO1FBQUdDLFVBQVM7SUFBRTtJQUNoRUMsUUFBUUMsR0FBRyxDQUFDTDtJQUNWLE1BQU1NLGdCQUFjLENBQUNDLElBQUk7UUFDckJOLFlBQVk7WUFBQyxHQUFHRCxRQUFRO1lBQUMsQ0FBQ08sRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBQ0YsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUE7SUFDM0Q7SUFDQSxNQUFNQyxnQkFBYyxDQUFDSixJQUFJO1FBQ3JCQSxFQUFFSyxjQUFjO1FBQ2hCWCxZQUFZO1lBQUMsR0FBR0QsUUFBUTtZQUFDRyxVQUFTLElBQUlVLEtBQUtiLFNBQVNHLFFBQVEsRUFBRVcsT0FBTztRQUFFO1FBQ3ZFM0Isa0RBQVUsQ0FBQywwQkFBeUI7WUFBQyxHQUFHYSxRQUFRO1lBQUNGO1FBQUUsR0FDbERrQixJQUFJLENBQUNDLENBQUFBLE1BQUs7WUFDVGhCLFlBQVk7Z0JBQUNDLFVBQVM7Z0JBQUdDLFVBQVM7WUFBRTtZQUNwQ2IsK0RBQWEsQ0FBQzJCLElBQUlFLElBQUksQ0FBQ0MsT0FBTztRQUNoQyxHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQUtsQixRQUFRQyxHQUFHLENBQUNpQjtJQUM1QjtJQUNBLHFCQUNJLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFLQyxNQUFLO2dCQUFnQkMsY0FBYzswQkFBQyw0RUFBQ0M7b0JBQUVDLFdBQVU7OEJBQW9DOzs7Ozs7Ozs7OzswQkFDekYsOERBQUNMO2dCQUFJSyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBS0QsV0FBVTtvQkFBc0JFLFVBQVVuQjs7c0NBQzlDLDhEQUFDbkIsaUVBQWFBOzRCQUFDdUMsT0FBTzs0QkFBYXRCLE1BQU07NEJBQVl1QixVQUFVMUI7NEJBQWVJLE9BQU9WLFNBQVNFLFFBQVE7Ozs7OztzQ0FDdEcsOERBQUNWLGlFQUFhQTs0QkFBQ3VDLE9BQU87NEJBQWF0QixNQUFNOzRCQUFZdUIsVUFBVTFCOzRCQUFlSSxPQUFPVixTQUFTRyxRQUFROzRCQUFFOEIsTUFBSzs7Ozs7O3NDQUMzRyw4REFBQ0M7NEJBQU1ELE1BQUs7NEJBQVN2QixPQUFNOzRCQUFNa0IsV0FBVTs7Ozs7O3NDQUMzQyw4REFBQ3JDLG9EQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QjtHQS9CTUU7S0FBQUE7O0FBaUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG9zL2NyZWF0ZS9pbmRleC5qcz8zNGYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgIGp3dCAgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyLm1vZGVsLmpzJ1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0Zvcm1Db21wb25lbnRcIjtcclxuIFxyXG4ndXNlY2xpZW50J1xyXG5jb25zdCBDcmFldGVUb2RvID0gKHtmaW5kZWRVc2VyfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlcj1KU09OLnBhcnNlKGZpbmRlZFVzZXIpO1xyXG4gICAgY29uc3QgaWQ9dXNlci5faWQ7XHJcbiAgICBjb25zdCBbZm9ybURhdGEsc2V0Rm9ybURhdGFdPXVzZVN0YXRlKHt0b2RvTmFtZTpcIlwiLHRvZG9EYXRlOlwiXCJ9KTtcclxuICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcclxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsdG9kb0RhdGU6bmV3IERhdGUoZm9ybURhdGEudG9kb0RhdGUpLmdldFRpbWUoKX0pXHJcbiAgICAgICAgYXhpb3MucG9zdChcIi9hcGkvdG9kb3Mvc3RhdGljVG9kb3NcIix7Li4uZm9ybURhdGEsaWR9KVxyXG4gICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgc2V0Rm9ybURhdGEoe3RvZG9OYW1lOlwiXCIsdG9kb0RhdGU6XCJcIn0pO1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGluayBocmVmPScvdG9kb3MvY3JlYXRlJyBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIGhvdmVyOnRleHQtdGVhbC04MDBcIj5BZGQgbmV3IFRvZG8/PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNlwiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnQgbGFiZWw9e1widG9kbyBuYW1lXCJ9IG5hbWU9e1widG9kb05hbWVcIn0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50b2RvTmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbXBvbmVudCBsYWJlbD17XCJ0b2RvIGRhdGVcIn0gbmFtZT17XCJ0b2RvRGF0ZVwifSBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gdmFsdWU9e2Zvcm1EYXRhLnRvZG9EYXRlfSB0eXBlPVwiZGF0ZVwiLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgQ3JhZXRlVG9kbztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAgIGNvbnN0IHRva2VuPWdldENvb2tpZSgndG9kb1Rva2VuJyx7IHJlcSwgcmVzIH0pO1xyXG4gICAgaWYoIXRva2VuKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBbYmVhcmVyLG1haW5dPXRva2VuLnNwbGl0KFwiIFwiKTtcclxuICAgIGNvbnN0IHBheWxvYWQ9and0LnZlcmlmeShtYWluLHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpO1xyXG4gICAgY29uc3Qge21vYmlsZSxlbWFpbH09cGF5bG9hZDtcclxuICAgIC8vY29ubmVjdCB0byBEQlxyXG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICAvL3NlYXJjaCB0aGUgdXNlciBiYXNlZCBvbiBtb2JpbGUgYW5kIGVtYWlsXHJcbiAgICBjb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7bW9iaWxlfSlcclxuICAgICAgICAgIC8vIGlmIG1vYmlsZSBudW1iZXIgaXMgbm90IGZvdW5kXHJcbiAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8yLSBjaGVjayBpZiB0aGUgdXNlckVtYWlsIGluIERCIG1hdGNoIHdpdGggdGhlIGVtYWlsIGluIHRva2VuXHJcbiAgICAgICAgICBjb25zdCBjb21wYXJlUmVzdWx0PSh1c2VyLmVtYWlsPT09ZW1haWwpXHJcbiAgICAgICAgIGlmKCFjb21wYXJlUmVzdWx0KXtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJvcHM6e30sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICAgLy8zLSBzZXQgdGhlIHRva2VuIHRvIHRoZSBoZWFkZXIgYW5kIHJlZGlyZWN0IHRvIHRoZSBtYWluIHBhZ2VcclxuICAgICAgICAgIGNvbnN0IGZpbmRlZFVzZXI9IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHtmaW5kZWRVc2VyfSB9O1xyXG4gICAgICB9Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJGb3JtQ29tcG9uZW50IiwiQ3JhZXRlVG9kbyIsImZpbmRlZFVzZXIiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJfaWQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidG9kb05hbWUiLCJ0b2RvRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIkRhdGUiLCJnZXRUaW1lIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwiZGF0YSIsIm1lc3NhZ2UiLCJjYXRjaCIsImVyciIsImRpdiIsIkxpbmsiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJvbkNoYW5nZSIsInR5cGUiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos/create/index.js\n"));

/***/ })

});