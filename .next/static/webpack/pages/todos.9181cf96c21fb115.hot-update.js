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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Todos = (param)=>{\n    let { userTodos  } = param;\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        data: JSON.parse(userTodos),\n        loading: false,\n        error: null\n    });\n    const render = ()=>{\n        if (todos.loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 30\n        }, undefined);\n        if (todos.data.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"no todo\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 38\n        }, undefined);\n        todos.data.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: item.todoName\n            }, item._id, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 14\n            }, undefined);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/todos/create\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"add new todo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 58\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"todo list\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined),\n            render()\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Todos, \"/GvExFJLrFlQAiLPpyUkCmqm/Mk=\");\n_c = Todos;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkI7QUFLSTtBQUVqQyxNQUFNRSxRQUFRLFNBQWlCO1FBQWhCLEVBQUNDLFVBQVMsRUFBQzs7SUFDeEIsTUFBTSxDQUFDQyxPQUFNQyxTQUFTLEdBQUNKLCtDQUFRQSxDQUFDO1FBQUNLLE1BQUtDLEtBQUtDLEtBQUssQ0FBQ0w7UUFBV00sU0FBUSxLQUFLO1FBQUNDLE9BQU0sSUFBSTtJQUFBO0lBQ3BGLE1BQU1DLFNBQU8sSUFBSTtRQUNmLElBQUdQLE1BQU1LLE9BQU8sRUFBRSxxQkFBTyw4REFBQ0c7c0JBQUU7Ozs7OztRQUM1QixJQUFHUixNQUFNRSxJQUFJLENBQUNPLE1BQU0sS0FBRyxHQUFHLHFCQUFPLDhEQUFDRDtzQkFBRTs7Ozs7O1FBQ3BDUixNQUFNRSxJQUFJLENBQUNRLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBTTtZQUNuQixxQkFBTyw4REFBQ0g7MEJBQWtCRyxLQUFLQyxRQUFRO2VBQXhCRCxLQUFLRSxHQUFHOzs7OztRQUN6QjtJQUNGO0lBQ0UscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ2xCLGtEQUFJQTtnQkFBQ21CLE1BQU07Z0JBQWlCQyxjQUFjOzBCQUFFLDRFQUFDQzs4QkFBRTs7Ozs7Ozs7Ozs7MEJBQ3BELDhEQUFDSDswQkFBSTs7Ozs7O1lBQ0pQOzs7Ozs7O0FBR1Q7R0FoQk1UO0tBQUFBOztBQWtFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9pbmRleC5qcz81YWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgIGp3dCAgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbC5qcydcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8ubW9kZWwnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUb2RvcyA9ICh7dXNlclRvZG9zfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2RvcyxzZXRUb2Rvc109dXNlU3RhdGUoe2RhdGE6SlNPTi5wYXJzZSh1c2VyVG9kb3MpLGxvYWRpbmc6ZmFsc2UsZXJyb3I6bnVsbH0pXHJcbiAgY29uc3QgcmVuZGVyPSgpPT57XHJcbiAgICBpZih0b2Rvcy5sb2FkaW5nKSByZXR1cm4gPHA+bG9hZGluZzwvcD5cclxuICAgIGlmKHRvZG9zLmRhdGEubGVuZ3RoPT09MCkgcmV0dXJuIDxwPm5vIHRvZG88L3A+XHJcbiAgICB0b2Rvcy5kYXRhLm1hcChpdGVtPT57XHJcbiAgICAgIHJldHVybiA8cCBrZXk9e2l0ZW0uX2lkfT57aXRlbS50b2RvTmFtZX08L3A+XHJcbiAgICB9KVxyXG4gIH1cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3RvZG9zL2NyZWF0ZVwifSBsZWdhY3lCZWhhdmlvciA+PGE+YWRkIG5ldyB0b2RvPC9hPjwvTGluaz5cclxuICAgICAgICA8ZGl2PnRvZG8gbGlzdDwvZGl2PlxyXG4gICAgICAgIHtyZW5kZXIoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG5jb25zdCB0b2tlbj1nZXRDb29raWUoJ3RvZG9Ub2tlbicseyByZXEsIHJlcyB9KTtcclxuaWYoIXRva2VuKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVkaXJlY3Q6IHtcclxuICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6e30sXHJcbiAgfTtcclxufVxyXG5jb25zdCBbYmVhcmVyLG1haW5dPXRva2VuLnNwbGl0KFwiIFwiKTtcclxuY29uc3QgcGF5bG9hZD1qd3QudmVyaWZ5KG1haW4scHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSk7XHJcbmNvbnN0IHttb2JpbGUsZW1haWx9PXBheWxvYWQ7XHJcbi8vY29ubmVjdCB0byBEQlxyXG5hd2FpdCBkYkNvbm5lY3QoKTtcclxuLy9zZWFyY2ggdGhlIHVzZXIgYmFzZWQgb24gbW9iaWxlIGFuZCBlbWFpbFxyXG5jb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7bW9iaWxlfSlcclxuICAgICAgLy8gaWYgbW9iaWxlIG51bWJlciBpcyBub3QgZm91bmRcclxuICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIC8vMi0gY2hlY2sgaWYgdGhlIHVzZXJFbWFpbCBpbiBEQiBtYXRjaCB3aXRoIHRoZSBlbWFpbCBpbiB0b2tlblxyXG4gICAgICBjb25zdCBjb21wYXJlUmVzdWx0PSh1c2VyLmVtYWlsPT09ZW1haWwpXHJcbiAgICAgaWYoIWNvbXBhcmVSZXN1bHQpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczp7fSxcclxuICAgICAgfTtcclxuICAgICB9XHJcbiAgICAgICAvLzMtIHNldCB0aGUgdG9rZW4gdG8gdGhlIGhlYWRlciBhbmQgcmVkaXJlY3QgdG8gdGhlIG1haW4gcGFnZVxyXG4gICAgICAgY29uc3QgX2lkPXVzZXIuX2lkXHJcbiAgICAgICBjb25zdCB0b2Rvcz1hd2FpdCBUb2RvLmZpbmQoe3VzZXJJRDpfaWR9KTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgICBjb25zdCB1c2VyVG9kb3M9IEpTT04uc3RyaW5naWZ5KHRvZG9zKVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7dXNlclRvZG9zfSB9O1xyXG4gIH1cclxuICAgXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJUb2RvcyIsInVzZXJUb2RvcyIsInRvZG9zIiwic2V0VG9kb3MiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibG9hZGluZyIsImVycm9yIiwicmVuZGVyIiwicCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ0b2RvTmFtZSIsIl9pZCIsImRpdiIsImhyZWYiLCJsZWdhY3lCZWhhdmlvciIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n"));

/***/ })

});