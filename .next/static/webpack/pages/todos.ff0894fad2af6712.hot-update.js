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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Todos = (param)=>{\n    let { userTodos  } = param;\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        data: JSON.parse(userTodos),\n        loading: false,\n        error: null\n    });\n    const render = ()=>{\n        if (todos.loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 30\n        }, undefined);\n        if (todos.data.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"no todo\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 38\n        }, undefined);\n        todos.data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: item.todoName\n            }, item._id, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 8\n            }, undefined));\n    };\n    console.log(todos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/todos/create\",\n                legacyBehavior: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"add new todo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 58\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"todo list\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            render()\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Todos, \"/GvExFJLrFlQAiLPpyUkCmqm/Mk=\");\n_c = Todos;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2Rvcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkI7QUFLSTtBQUVqQyxNQUFNRSxRQUFRLFNBQWlCO1FBQWhCLEVBQUNDLFVBQVMsRUFBQzs7SUFDeEIsTUFBTSxDQUFDQyxPQUFNQyxTQUFTLEdBQUNKLCtDQUFRQSxDQUFDO1FBQUNLLE1BQUtDLEtBQUtDLEtBQUssQ0FBQ0w7UUFBV00sU0FBUSxLQUFLO1FBQUNDLE9BQU0sSUFBSTtJQUFBO0lBQ3BGLE1BQU1DLFNBQU8sSUFBSTtRQUNmLElBQUdQLE1BQU1LLE9BQU8sRUFBRSxxQkFBTyw4REFBQ0c7c0JBQUU7Ozs7OztRQUM1QixJQUFHUixNQUFNRSxJQUFJLENBQUNPLE1BQU0sS0FBRyxHQUFHLHFCQUFPLDhEQUFDRDtzQkFBRTs7Ozs7O1FBQ3BDUixNQUFNRSxJQUFJLENBQUNRLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1osOERBQUNIOzBCQUFrQkcsS0FBS0MsUUFBUTtlQUF4QkQsS0FBS0UsR0FBRzs7Ozs7SUFFckI7SUFDQUMsUUFBUUMsR0FBRyxDQUFDZjtJQUNWLHFCQUNJLDhEQUFDZ0I7OzBCQUNHLDhEQUFDcEIsa0RBQUlBO2dCQUFDcUIsTUFBTTtnQkFBaUJDLGNBQWM7MEJBQUUsNEVBQUNDOzhCQUFFOzs7Ozs7Ozs7OzswQkFDcEQsOERBQUNIOzBCQUFJOzs7Ozs7WUFDSlQ7Ozs7Ozs7QUFHVDtHQWpCTVQ7S0FBQUE7O0FBa0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RvZG9zL2luZGV4LmpzPzVhZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCAgand0ICBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uL2xpYi9tb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsLmpzJ1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tb2RlbCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRvZG9zID0gKHt1c2VyVG9kb3N9KSA9PiB7XHJcbiAgY29uc3QgW3RvZG9zLHNldFRvZG9zXT11c2VTdGF0ZSh7ZGF0YTpKU09OLnBhcnNlKHVzZXJUb2RvcyksbG9hZGluZzpmYWxzZSxlcnJvcjpudWxsfSlcclxuICBjb25zdCByZW5kZXI9KCk9PntcclxuICAgIGlmKHRvZG9zLmxvYWRpbmcpIHJldHVybiA8cD5sb2FkaW5nPC9wPlxyXG4gICAgaWYodG9kb3MuZGF0YS5sZW5ndGg9PT0wKSByZXR1cm4gPHA+bm8gdG9kbzwvcD5cclxuICAgIHRvZG9zLmRhdGEubWFwKGl0ZW09PihcclxuICAgICAgIDxwIGtleT17aXRlbS5faWR9PntpdGVtLnRvZG9OYW1lfTwvcD5cclxuICAgICkpXHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvdG9kb3MvY3JlYXRlXCJ9IGxlZ2FjeUJlaGF2aW9yID48YT5hZGQgbmV3IHRvZG88L2E+PC9MaW5rPlxyXG4gICAgICAgIDxkaXY+dG9kbyBsaXN0PC9kaXY+XHJcbiAgICAgICAge3JlbmRlcigpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbmNvbnN0IHRva2VuPWdldENvb2tpZSgndG9kb1Rva2VuJyx7IHJlcSwgcmVzIH0pO1xyXG5pZighdG9rZW4pe1xyXG4gIHJldHVybiB7XHJcbiAgICByZWRpcmVjdDoge1xyXG4gICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgIH0sXHJcbiAgICBwcm9wczp7fSxcclxuICB9O1xyXG59XHJcbmNvbnN0IFtiZWFyZXIsbWFpbl09dG9rZW4uc3BsaXQoXCIgXCIpO1xyXG5jb25zdCBwYXlsb2FkPWp3dC52ZXJpZnkobWFpbixwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcclxuY29uc3Qge21vYmlsZSxlbWFpbH09cGF5bG9hZDtcclxuLy9jb25uZWN0IHRvIERCXHJcbmF3YWl0IGRiQ29ubmVjdCgpO1xyXG4vL3NlYXJjaCB0aGUgdXNlciBiYXNlZCBvbiBtb2JpbGUgYW5kIGVtYWlsXHJcbmNvbnN0IHVzZXI9YXdhaXQgVXNlci5maW5kT25lKHttb2JpbGV9KVxyXG4gICAgICAvLyBpZiBtb2JpbGUgbnVtYmVyIGlzIG5vdCBmb3VuZFxyXG4gICAgICBpZighdXNlcil7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8yLSBjaGVjayBpZiB0aGUgdXNlckVtYWlsIGluIERCIG1hdGNoIHdpdGggdGhlIGVtYWlsIGluIHRva2VuXHJcbiAgICAgIGNvbnN0IGNvbXBhcmVSZXN1bHQ9KHVzZXIuZW1haWw9PT1lbWFpbClcclxuICAgICBpZighY29tcGFyZVJlc3VsdCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOnt9LFxyXG4gICAgICB9O1xyXG4gICAgIH1cclxuICAgICAgIC8vMy0gc2V0IHRoZSB0b2tlbiB0byB0aGUgaGVhZGVyIGFuZCByZWRpcmVjdCB0byB0aGUgbWFpbiBwYWdlXHJcbiAgICAgICBjb25zdCBfaWQ9dXNlci5faWRcclxuICAgICAgIGNvbnN0IHRvZG9zPWF3YWl0IFRvZG8uZmluZCh7dXNlcklEOl9pZH0pO1xyXG4gICAgICBjb25zdCB1c2VyVG9kb3M9IEpTT04uc3RyaW5naWZ5KHRvZG9zKVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7dXNlclRvZG9zfSB9O1xyXG4gIH1cclxuICAgXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJUb2RvcyIsInVzZXJUb2RvcyIsInRvZG9zIiwic2V0VG9kb3MiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibG9hZGluZyIsImVycm9yIiwicmVuZGVyIiwicCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJ0b2RvTmFtZSIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJocmVmIiwibGVnYWN5QmVoYXZpb3IiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n"));

/***/ })

});