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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_FormComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/FormComponent */ \"./components/FormComponent.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\"useclient\";\nconst CraeteTodo = (param)=>{\n    let { findedUser  } = param;\n    _s();\n    const user = JSON.parse(findedUser);\n    const id = user._id;\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        todoName: \"\",\n        todoDate: \"\"\n    });\n    console.log(formData);\n    const changeHandler = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        setFormData({\n            ...formData,\n            todoDate: new Date(formData.todoDate).getTime()\n        });\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/todos/staticTodos\", {\n            ...formData,\n            id\n        }).then((res)=>{\n            setFormData({\n                todoName: \"\",\n                todoDate: \"\"\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(res.data.message);\n        }).catch((err)=>console.log(err));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/todos/create\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"text-teal-500 hover:text-teal-800\",\n                    children: \"Todo list?\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 53\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto max-w-md mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col gap-6\",\n                    onSubmit: submitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"todo name\",\n                            name: \"todoName\",\n                            onChange: changeHandler,\n                            value: formData.todoName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            label: \"todo date\",\n                            name: \"todoDate\",\n                            onChange: changeHandler,\n                            value: formData.todoDate,\n                            type: \"date\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Add\",\n                            className: \"submitButton\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\create\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CraeteTodo, \"aBY+l6WtHlXTm5MatEa5SpnfyLE=\");\n_c = CraeteTodo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CraeteTodo);\nvar _c;\n$RefreshReg$(_c, \"CraeteTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9jcmVhdGUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBSWtCO0FBRUs7QUFDYTtBQUNqQztBQUU3QjtBQUNBLE1BQU1PLGFBQWEsU0FBa0I7UUFBakIsRUFBQ0MsV0FBVSxFQUFDOztJQUM1QixNQUFNQyxPQUFLQyxLQUFLQyxLQUFLLENBQUNIO0lBQ3RCLE1BQU1JLEtBQUdILEtBQUtJLEdBQUc7SUFDakIsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUNiLCtDQUFRQSxDQUFDO1FBQUNjLFVBQVM7UUFBR0MsVUFBUztJQUFFO0lBQ2hFQyxRQUFRQyxHQUFHLENBQUNMO0lBQ1YsTUFBTU0sZ0JBQWMsQ0FBQ0MsSUFBSTtRQUNyQk4sWUFBWTtZQUFDLEdBQUdELFFBQVE7WUFBQyxDQUFDTyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFDRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFBQTtJQUMzRDtJQUNBLE1BQU1DLGdCQUFjLENBQUNKLElBQUk7UUFDckJBLEVBQUVLLGNBQWM7UUFDaEJYLFlBQVk7WUFBQyxHQUFHRCxRQUFRO1lBQUNHLFVBQVMsSUFBSVUsS0FBS2IsU0FBU0csUUFBUSxFQUFFVyxPQUFPO1FBQUU7UUFDdkU1QixrREFBVSxDQUFDLDBCQUF5QjtZQUFDLEdBQUdjLFFBQVE7WUFBQ0Y7UUFBRSxHQUNsRGtCLElBQUksQ0FBQ0MsQ0FBQUEsTUFBSztZQUNUaEIsWUFBWTtnQkFBQ0MsVUFBUztnQkFBR0MsVUFBUztZQUFFO1lBQ3BDZCwrREFBYSxDQUFDNEIsSUFBSUUsSUFBSSxDQUFDQyxPQUFPO1FBQ2hDLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS2xCLFFBQVFDLEdBQUcsQ0FBQ2lCO0lBQzVCO0lBQ0EscUJBQ0ksOERBQUNDOzswQkFDQyw4REFBQy9CLGtEQUFJQTtnQkFBQ2dDLE1BQUs7Z0JBQWdCQyxjQUFjOzBCQUFDLDRFQUFDQztvQkFBRUMsV0FBVTs4QkFBb0M7Ozs7Ozs7Ozs7OzBCQUN6Riw4REFBQ0o7Z0JBQUlJLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFLRCxXQUFVO29CQUFzQkUsVUFBVWxCOztzQ0FDOUMsOERBQUNwQixpRUFBYUE7NEJBQUN1QyxPQUFPOzRCQUFhckIsTUFBTTs0QkFBWXNCLFVBQVV6Qjs0QkFBZUksT0FBT1YsU0FBU0UsUUFBUTs7Ozs7O3NDQUN0Ryw4REFBQ1gsaUVBQWFBOzRCQUFDdUMsT0FBTzs0QkFBYXJCLE1BQU07NEJBQVlzQixVQUFVekI7NEJBQWVJLE9BQU9WLFNBQVNHLFFBQVE7NEJBQUU2QixNQUFLOzs7Ozs7c0NBQzNHLDhEQUFDQzs0QkFBTUQsTUFBSzs0QkFBU3RCLE9BQU07NEJBQU1pQixXQUFVOzs7Ozs7c0NBQzNDLDhEQUFDckMsb0RBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVCO0dBL0JNRztLQUFBQTs7QUFpQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb3MvY3JlYXRlL2luZGV4LmpzPzM0ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwuanMnXHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbiBcclxuJ3VzZWNsaWVudCdcclxuY29uc3QgQ3JhZXRlVG9kbyA9ICh7ZmluZGVkVXNlcn0pID0+IHtcclxuICAgIGNvbnN0IHVzZXI9SlNPTi5wYXJzZShmaW5kZWRVc2VyKTtcclxuICAgIGNvbnN0IGlkPXVzZXIuX2lkO1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLHNldEZvcm1EYXRhXT11c2VTdGF0ZSh7dG9kb05hbWU6XCJcIix0b2RvRGF0ZTpcIlwifSk7XHJcbiAgY29uc29sZS5sb2coZm9ybURhdGEpXHJcbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSxbZS50YXJnZXQubmFtZV06ZS50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlcj0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLHRvZG9EYXRlOm5ldyBEYXRlKGZvcm1EYXRhLnRvZG9EYXRlKS5nZXRUaW1lKCl9KVxyXG4gICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL3RvZG9zL3N0YXRpY1RvZG9zXCIsey4uLmZvcm1EYXRhLGlkfSlcclxuICAgICAgICAudGhlbihyZXM9PntcclxuICAgICAgICAgIHNldEZvcm1EYXRhKHt0b2RvTmFtZTpcIlwiLHRvZG9EYXRlOlwiXCJ9KTtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL3RvZG9zL2NyZWF0ZScgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTUwMCBob3Zlcjp0ZXh0LXRlYWwtODAwXCI+VG9kbyBsaXN0PzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctbWQgbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTZcIiBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29tcG9uZW50IGxhYmVsPXtcInRvZG8gbmFtZVwifSBuYW1lPXtcInRvZG9OYW1lXCJ9IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSB2YWx1ZT17Zm9ybURhdGEudG9kb05hbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnQgbGFiZWw9e1widG9kbyBkYXRlXCJ9IG5hbWU9e1widG9kb0RhdGVcIn0gb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IHZhbHVlPXtmb3JtRGF0YS50b2RvRGF0ZX0gdHlwZT1cImRhdGVcIi8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBZGRcIiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0ZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IENyYWV0ZVRvZG87XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgICBjb25zdCB0b2tlbj1nZXRDb29raWUoJ3RvZG9Ub2tlbicseyByZXEsIHJlcyB9KTtcclxuICAgIGlmKCF0b2tlbil7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOnt9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgW2JlYXJlcixtYWluXT10b2tlbi5zcGxpdChcIiBcIik7XHJcbiAgICBjb25zdCBwYXlsb2FkPWp3dC52ZXJpZnkobWFpbixwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcclxuICAgIGNvbnN0IHttb2JpbGUsZW1haWx9PXBheWxvYWQ7XHJcbiAgICAvL2Nvbm5lY3QgdG8gREJcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgLy9zZWFyY2ggdGhlIHVzZXIgYmFzZWQgb24gbW9iaWxlIGFuZCBlbWFpbFxyXG4gICAgY29uc3QgdXNlcj1hd2FpdCBVc2VyLmZpbmRPbmUoe21vYmlsZX0pXHJcbiAgICAgICAgICAvLyBpZiBtb2JpbGUgbnVtYmVyIGlzIG5vdCBmb3VuZFxyXG4gICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vMi0gY2hlY2sgaWYgdGhlIHVzZXJFbWFpbCBpbiBEQiBtYXRjaCB3aXRoIHRoZSBlbWFpbCBpbiB0b2tlblxyXG4gICAgICAgICAgY29uc3QgY29tcGFyZVJlc3VsdD0odXNlci5lbWFpbD09PWVtYWlsKVxyXG4gICAgICAgICBpZighY29tcGFyZVJlc3VsdCl7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgIC8vMy0gc2V0IHRoZSB0b2tlbiB0byB0aGUgaGVhZGVyIGFuZCByZWRpcmVjdCB0byB0aGUgbWFpbiBwYWdlXHJcbiAgICAgICAgICBjb25zdCBmaW5kZWRVc2VyPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgICAgIHJldHVybiB7IHByb3BzOiB7ZmluZGVkVXNlcn0gfTtcclxuICAgICAgfSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidG9hc3QiLCJUb2FzdGVyIiwiRm9ybUNvbXBvbmVudCIsIkxpbmsiLCJDcmFldGVUb2RvIiwiZmluZGVkVXNlciIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJpZCIsIl9pZCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0b2RvTmFtZSIsInRvZG9EYXRlIiwiY29uc29sZSIsImxvZyIsImNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiRGF0ZSIsImdldFRpbWUiLCJwb3N0IiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJkYXRhIiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwib25DaGFuZ2UiLCJ0eXBlIiwiaW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todos/create/index.js\n"));

/***/ })

});