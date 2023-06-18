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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Todo */ \"./components/Todo.jsx\");\n/* harmony import */ var _components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TodosHeader/TodosFilter */ \"./components/TodosHeader/TodosFilter.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Todos = (param)=>{\n    let { userTodos  } = param;\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        data: JSON.parse(userTodos),\n        loading: false,\n        error: null\n    });\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        condition: \"All\"\n    });\n    const remainedTime = (todoDate)=>{\n        console.log(new Date(todoDate).getTime() - Date.now());\n        const remainedDay = (new Date(todoDate).getTime() - Date.now()) / 864000000;\n        console.log(remainedDay);\n        if (remainedDay < 0) return \"expired\";\n        const day = Math.round(remainedDay);\n        const hour = Math.floor(remainedDay % 1 * 24);\n        return \"\".concat(day, \" day & \").concat(hour, \" hour to do\");\n    };\n    const changeConditionHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].patch(\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"changed\");\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    const todoDeleteHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(res.data.message);\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: todos.loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 51,\n            columnNumber: 27\n        }, undefined) : todos.data.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"no todo\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 31\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-3 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined),\n                todos.data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        todoName: item.todoName,\n                        id: item._id,\n                        remainedTime: remainedTime(item.todoDate),\n                        completed: item.completed,\n                        onChangeCondition: ()=>changeConditionHandler(item._id),\n                        onCompleteHandler: ()=>completeHandler(item._id),\n                        onTodoDelete: ()=>todoDeleteHandler(item._id)\n                    }, item._id, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 8\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Todos, \"efnuVeJs6iprTFXB2qaXwxmbfMg=\");\n_c = Todos;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRzs7Ozs7Ozs7OztxQkFPakI7Ozs7OztBQUlWO0dBdERNM0M7S0FBQUE7O0FBdUdOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG9zL2luZGV4LmpzPzVhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsLmpzJ1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tb2RlbCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRvZG9vIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RvZG9cIjtcclxuaW1wb3J0IFRvZG9GaWx0ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVG9kb3NIZWFkZXIvVG9kb3NGaWx0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmNvbnN0IFRvZG9zID0gKHt1c2VyVG9kb3N9KSA9PiB7XHJcbiAgY29uc3QgW3RvZG9zLHNldFRvZG9zXT11c2VTdGF0ZSh7ZGF0YTpKU09OLnBhcnNlKHVzZXJUb2RvcyksbG9hZGluZzpmYWxzZSxlcnJvcjpudWxsfSlcclxuICBjb25zdCBbZmlsdGVycyxzZXRGaWx0ZXJzXT11c2VTdGF0ZSh7Y29uZGl0aW9uOlwiQWxsXCJ9KVxyXG4gIGNvbnN0IHJlbWFpbmVkVGltZT0odG9kb0RhdGUpPT57XHJcbiAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSh0b2RvRGF0ZSkuZ2V0VGltZSgpLURhdGUubm93KCkpXHJcbiAgICBjb25zdCByZW1haW5lZERheT0obmV3IERhdGUodG9kb0RhdGUpLmdldFRpbWUoKS1EYXRlLm5vdygpKS84NjQwMDAwMDA7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1haW5lZERheSlcclxuICAgIGlmKHJlbWFpbmVkRGF5PDApIHJldHVybiBcImV4cGlyZWRcIjtcclxuICAgIGNvbnN0IGRheT1NYXRoLnJvdW5kKHJlbWFpbmVkRGF5KVxyXG4gICAgY29uc3QgaG91cj1NYXRoLmZsb29yKChyZW1haW5lZERheSAlIDEpKjI0KVxyXG4gICAgcmV0dXJuIGAke2RheX0gZGF5ICYgJHtob3VyfSBob3VyIHRvIGRvYFxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VDb25kaXRpb25IYW5kbGVyPShpZCk9PntcclxuICAgIGF4aW9zLnBhdGNoKGAvYXBpL3RvZG9zL2R5bmFtaWNUb2Rvcy8ke2lkfWApXHJcbiAgICAudGhlbihyZXM9PntcclxuICAgICAgc2V0VG9kb3Moey4uLnRvZG9zLGRhdGE6cmVzLmRhdGEudG9kb3N9KTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcImNoYW5nZWRcIilcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgIHNldFRvZG9zKHsuLi50b2RvcyxlcnJvcjplcnJ9KTtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCB0b2RvRGVsZXRlSGFuZGxlcj0oaWQpPT57XHJcbiAgICBheGlvcy5kZWxldGUoYC9hcGkvdG9kb3MvZHluYW1pY1RvZG9zLyR7aWR9YClcclxuICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICBzZXRUb2Rvcyh7Li4udG9kb3MsZGF0YTpyZXMuZGF0YS50b2Rvc30pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgc2V0VG9kb3Moey4uLnRvZG9zLGVycm9yOmVycn0pO1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgKHRvZG9zLmxvYWRpbmcpID8gPHA+bG9hZGluZzwvcD4gOlxyXG4gICAgKHRvZG9zLmRhdGEubGVuZ3RoPT09MCkgPyA8cD5ubyB0b2RvPC9wPiA6XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgdy1mdWxsXCI+XHJcbiAgICAgIDxUb2RvRmlsdGVyIC8+XHJcbiAgICB7dG9kb3MuZGF0YS5tYXAoaXRlbT0+KFxyXG4gICAgICAgPFRvZG9vIGtleT17aXRlbS5faWR9IHRvZG9OYW1lPXtpdGVtLnRvZG9OYW1lfSBpZD17aXRlbS5faWR9IFxyXG4gICAgICAgcmVtYWluZWRUaW1lPXtyZW1haW5lZFRpbWUoaXRlbS50b2RvRGF0ZSl9IGNvbXBsZXRlZD17aXRlbS5jb21wbGV0ZWR9XHJcbiAgICAgICBvbkNoYW5nZUNvbmRpdGlvbj17KCk9PmNoYW5nZUNvbmRpdGlvbkhhbmRsZXIoaXRlbS5faWQpfSBcclxuICAgICAgIG9uQ29tcGxldGVIYW5kbGVyPXsoKT0+Y29tcGxldGVIYW5kbGVyKGl0ZW0uX2lkKX0gXHJcbiAgICAgICBvblRvZG9EZWxldGU9eygpPT50b2RvRGVsZXRlSGFuZGxlcihpdGVtLl9pZCl9XHJcbiAgICAgICAvPlxyXG4gICAgKSl9XHJcbiAgICA8L2Rpdj5cclxufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbmNvbnN0IHRva2VuPWdldENvb2tpZSgndG9kb1Rva2VuJyx7IHJlcSwgcmVzIH0pO1xyXG5pZighdG9rZW4pe1xyXG4gIHJldHVybiB7XHJcbiAgICByZWRpcmVjdDoge1xyXG4gICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgIH0sXHJcbiAgICBwcm9wczp7fSxcclxuICB9O1xyXG59XHJcbmNvbnN0IFtiZWFyZXIsbWFpbl09dG9rZW4uc3BsaXQoXCIgXCIpO1xyXG5jb25zdCBwYXlsb2FkPWp3dC52ZXJpZnkobWFpbixwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcclxuY29uc3Qge21vYmlsZSxlbWFpbH09cGF5bG9hZDtcclxuLy9jb25uZWN0IHRvIERCXHJcbmF3YWl0IGRiQ29ubmVjdCgpO1xyXG4vL3NlYXJjaCB0aGUgdXNlciBiYXNlZCBvbiBtb2JpbGUgYW5kIGVtYWlsXHJcbmNvbnN0IHVzZXI9YXdhaXQgVXNlci5maW5kT25lKHttb2JpbGV9KVxyXG4gICAgICAvLyBpZiBtb2JpbGUgbnVtYmVyIGlzIG5vdCBmb3VuZFxyXG4gICAgICBpZighdXNlcil7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8yLSBjaGVjayBpZiB0aGUgdXNlckVtYWlsIGluIERCIG1hdGNoIHdpdGggdGhlIGVtYWlsIGluIHRva2VuXHJcbiAgICAgIGNvbnN0IGNvbXBhcmVSZXN1bHQ9KHVzZXIuZW1haWw9PT1lbWFpbClcclxuICAgICBpZighY29tcGFyZVJlc3VsdCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOnt9LFxyXG4gICAgICB9O1xyXG4gICAgIH1cclxuICAgICAgIC8vMy0gc2V0IHRoZSB0b2tlbiB0byB0aGUgaGVhZGVyIGFuZCByZWRpcmVjdCB0byB0aGUgbWFpbiBwYWdlXHJcbiAgICAgICBjb25zdCBfaWQ9dXNlci5faWRcclxuICAgICAgIGNvbnN0IHRvZG9zPWF3YWl0IFRvZG8uZmluZCh7dXNlcklEOl9pZH0pO1xyXG4gICAgICBjb25zdCB1c2VyVG9kb3M9IEpTT04uc3RyaW5naWZ5KHRvZG9zKVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7dXNlclRvZG9zfSB9O1xyXG4gIH1cclxuICAgXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJUb2RvbyIsIlRvZG9GaWx0ZXIiLCJheGlvcyIsInRvYXN0IiwiVG9kb3MiLCJ1c2VyVG9kb3MiLCJ0b2RvcyIsInNldFRvZG9zIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxvYWRpbmciLCJlcnJvciIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiY29uZGl0aW9uIiwicmVtYWluZWRUaW1lIiwidG9kb0RhdGUiLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJyZW1haW5lZERheSIsImRheSIsIk1hdGgiLCJyb3VuZCIsImhvdXIiLCJmbG9vciIsImNoYW5nZUNvbmRpdGlvbkhhbmRsZXIiLCJpZCIsInBhdGNoIiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJ0b2RvRGVsZXRlSGFuZGxlciIsImRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwidG9kb05hbWUiLCJfaWQiLCJjb21wbGV0ZWQiLCJvbkNoYW5nZUNvbmRpdGlvbiIsIm9uQ29tcGxldGVIYW5kbGVyIiwiY29tcGxldGVIYW5kbGVyIiwib25Ub2RvRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n"));

/***/ })

});