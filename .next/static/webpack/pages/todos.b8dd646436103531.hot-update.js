"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos",{

/***/ "./pages/todos/index.js":
/*!******************************!*\
  !*** ./pages/todos/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Todo */ \"./components/Todo.jsx\");\n/* harmony import */ var _components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TodosHeader/TodosFilter */ \"./components/TodosHeader/TodosFilter.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Todos = (param)=>{\n    let { userTodos  } = param;\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        data: JSON.parse(userTodos),\n        loading: false,\n        error: null\n    });\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        condition: \"All\"\n    });\n    const remainedTime = (todoDate)=>{\n        const remainedDay = (new Date(todoDate).getTime() - Date.now()) / 86400000;\n        console.log(remainedDay);\n        if (remainedDay < 0) return \"expired\";\n        const day = Math.floor(remainedDay);\n        const hour = Math.floor(remainedDay % 1 * 24);\n        return \"\".concat(day, \" day & \").concat(hour, \" hour left\");\n    };\n    const changeConditionHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].patch(\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"changed\");\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    const todoDeleteHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(res.data.message);\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: todos.loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 49,\n            columnNumber: 27\n        }, undefined) : todos.data.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"no todo\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 50,\n            columnNumber: 31\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-3 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/todos/create\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-teal-500 hover:text-teal-800\",\n                        children: \"Add new Todo?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 49\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10\",\n                    children: todos.data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            todoName: item.todoName,\n                            id: item._id,\n                            remainedTime: remainedTime(item.todoDate),\n                            completed: item.completed,\n                            onChangeCondition: ()=>changeConditionHandler(item._id),\n                            onCompleteHandler: ()=>completeHandler(item._id),\n                            onTodoDelete: ()=>todoDeleteHandler(item._id)\n                        }, item._id, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 8\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 51,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Todos, \"efnuVeJs6iprTFXB2qaXwxmbfMg=\");\n_c = Todos;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs0QkFDL0NLLGNBQWMsSUFBSWpCLGtCQUFrQlUsS0FBS0UsR0FBRzsyQkFKaENGLEtBQUtFLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztxQkFRakI7Ozs7OztBQUlWO0dBdkRNN0M7S0FBQUE7O0FBd0dOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG9zL2luZGV4LmpzPzVhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsLmpzJ1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tb2RlbCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9kb28gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVG9kb1wiO1xyXG5pbXBvcnQgVG9kb0ZpbHRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ub2Rvc0hlYWRlci9Ub2Rvc0ZpbHRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuY29uc3QgVG9kb3MgPSAoe3VzZXJUb2Rvc30pID0+IHtcclxuICBjb25zdCBbdG9kb3Msc2V0VG9kb3NdPXVzZVN0YXRlKHtkYXRhOkpTT04ucGFyc2UodXNlclRvZG9zKSxsb2FkaW5nOmZhbHNlLGVycm9yOm51bGx9KVxyXG4gIGNvbnN0IFtmaWx0ZXJzLHNldEZpbHRlcnNdPXVzZVN0YXRlKHtjb25kaXRpb246XCJBbGxcIn0pXHJcbiAgY29uc3QgcmVtYWluZWRUaW1lPSh0b2RvRGF0ZSk9PntcclxuICAgIGNvbnN0IHJlbWFpbmVkRGF5PShuZXcgRGF0ZSh0b2RvRGF0ZSkuZ2V0VGltZSgpLURhdGUubm93KCkpLzg2NDAwMDAwO1xyXG4gICAgY29uc29sZS5sb2cocmVtYWluZWREYXkpXHJcbiAgICBpZihyZW1haW5lZERheTwwKSByZXR1cm4gXCJleHBpcmVkXCI7XHJcbiAgICBjb25zdCBkYXk9TWF0aC5mbG9vcihyZW1haW5lZERheSlcclxuICAgIGNvbnN0IGhvdXI9TWF0aC5mbG9vcigocmVtYWluZWREYXkgJSAxKSoyNClcclxuICAgIHJldHVybiBgJHtkYXl9IGRheSAmICR7aG91cn0gaG91ciBsZWZ0YFxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VDb25kaXRpb25IYW5kbGVyPShpZCk9PntcclxuICAgIGF4aW9zLnBhdGNoKGAvYXBpL3RvZG9zL2R5bmFtaWNUb2Rvcy8ke2lkfWApXHJcbiAgICAudGhlbihyZXM9PntcclxuICAgICAgc2V0VG9kb3Moey4uLnRvZG9zLGRhdGE6cmVzLmRhdGEudG9kb3N9KTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcImNoYW5nZWRcIilcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgIHNldFRvZG9zKHsuLi50b2RvcyxlcnJvcjplcnJ9KTtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCB0b2RvRGVsZXRlSGFuZGxlcj0oaWQpPT57XHJcbiAgICBheGlvcy5kZWxldGUoYC9hcGkvdG9kb3MvZHluYW1pY1RvZG9zLyR7aWR9YClcclxuICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRUb2Rvcyh7Li4udG9kb3MsZGF0YTpyZXMuZGF0YS50b2Rvc30pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgc2V0VG9kb3Moey4uLnRvZG9zLGVycm9yOmVycn0pO1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAodG9kb3MubG9hZGluZykgPyA8cD5sb2FkaW5nPC9wPiA6XHJcbiAgICAodG9kb3MuZGF0YS5sZW5ndGg9PT0wKSA/IDxwPm5vIHRvZG88L3A+IDpcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyB3LWZ1bGxcIj5cclxuICAgICAgPFRvZG9GaWx0ZXIgLz5cclxuICAgICAgPExpbmsgaHJlZj0nL3RvZG9zL2NyZWF0ZScgbGVnYWN5QmVoYXZpb3I+PGEgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTUwMCBob3Zlcjp0ZXh0LXRlYWwtODAwXCI+QWRkIG5ldyBUb2RvPzwvYT48L0xpbms+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cclxuICAgIHt0b2Rvcy5kYXRhLm1hcChpdGVtPT4oXHJcbiAgICAgICA8VG9kb28ga2V5PXtpdGVtLl9pZH0gdG9kb05hbWU9e2l0ZW0udG9kb05hbWV9IGlkPXtpdGVtLl9pZH0gXHJcbiAgICAgICByZW1haW5lZFRpbWU9e3JlbWFpbmVkVGltZShpdGVtLnRvZG9EYXRlKX0gY29tcGxldGVkPXtpdGVtLmNvbXBsZXRlZH1cclxuICAgICAgIG9uQ2hhbmdlQ29uZGl0aW9uPXsoKT0+Y2hhbmdlQ29uZGl0aW9uSGFuZGxlcihpdGVtLl9pZCl9IFxyXG4gICAgICAgb25Db21wbGV0ZUhhbmRsZXI9eygpPT5jb21wbGV0ZUhhbmRsZXIoaXRlbS5faWQpfSBcclxuICAgICAgIG9uVG9kb0RlbGV0ZT17KCk9PnRvZG9EZWxldGVIYW5kbGVyKGl0ZW0uX2lkKX1cclxuICAgICAgIC8+XHJcbiAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG5jb25zdCB0b2tlbj1nZXRDb29raWUoJ3RvZG9Ub2tlbicseyByZXEsIHJlcyB9KTtcclxuaWYoIXRva2VuKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVkaXJlY3Q6IHtcclxuICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6e30sXHJcbiAgfTtcclxufVxyXG5jb25zdCBbYmVhcmVyLG1haW5dPXRva2VuLnNwbGl0KFwiIFwiKTtcclxuY29uc3QgcGF5bG9hZD1qd3QudmVyaWZ5KG1haW4scHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSk7XHJcbmNvbnN0IHttb2JpbGUsZW1haWx9PXBheWxvYWQ7XHJcbi8vY29ubmVjdCB0byBEQlxyXG5hd2FpdCBkYkNvbm5lY3QoKTtcclxuLy9zZWFyY2ggdGhlIHVzZXIgYmFzZWQgb24gbW9iaWxlIGFuZCBlbWFpbFxyXG5jb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7bW9iaWxlfSlcclxuICAgICAgLy8gaWYgbW9iaWxlIG51bWJlciBpcyBub3QgZm91bmRcclxuICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIC8vMi0gY2hlY2sgaWYgdGhlIHVzZXJFbWFpbCBpbiBEQiBtYXRjaCB3aXRoIHRoZSBlbWFpbCBpbiB0b2tlblxyXG4gICAgICBjb25zdCBjb21wYXJlUmVzdWx0PSh1c2VyLmVtYWlsPT09ZW1haWwpXHJcbiAgICAgaWYoIWNvbXBhcmVSZXN1bHQpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczp7fSxcclxuICAgICAgfTtcclxuICAgICB9XHJcbiAgICAgICAvLzMtIHNldCB0aGUgdG9rZW4gdG8gdGhlIGhlYWRlciBhbmQgcmVkaXJlY3QgdG8gdGhlIG1haW4gcGFnZVxyXG4gICAgICAgY29uc3QgX2lkPXVzZXIuX2lkXHJcbiAgICAgICBjb25zdCB0b2Rvcz1hd2FpdCBUb2RvLmZpbmQoe3VzZXJJRDpfaWR9KTtcclxuICAgICAgY29uc3QgdXNlclRvZG9zPSBKU09OLnN0cmluZ2lmeSh0b2RvcylcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczoge3VzZXJUb2Rvc30gfTtcclxuICB9XHJcbiAgIFxyXG5leHBvcnQgZGVmYXVsdCBUb2RvczsiXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9kb28iLCJUb2RvRmlsdGVyIiwiYXhpb3MiLCJ0b2FzdCIsIlRvZG9zIiwidXNlclRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsImNvbmRpdGlvbiIsInJlbWFpbmVkVGltZSIsInRvZG9EYXRlIiwicmVtYWluZWREYXkiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJkYXkiLCJNYXRoIiwiZmxvb3IiLCJob3VyIiwiY2hhbmdlQ29uZGl0aW9uSGFuZGxlciIsImlkIiwicGF0Y2giLCJ0aGVuIiwicmVzIiwic3VjY2VzcyIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsInRvZG9EZWxldGVIYW5kbGVyIiwiZGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImxlbmd0aCIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJtYXAiLCJpdGVtIiwidG9kb05hbWUiLCJfaWQiLCJjb21wbGV0ZWQiLCJvbkNoYW5nZUNvbmRpdGlvbiIsIm9uQ29tcGxldGVIYW5kbGVyIiwiY29tcGxldGVIYW5kbGVyIiwib25Ub2RvRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n"));

/***/ })

});