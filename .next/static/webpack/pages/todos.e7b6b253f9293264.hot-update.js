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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Todo */ \"./components/Todo.jsx\");\n/* harmony import */ var _components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TodosHeader/TodosFilter */ \"./components/TodosHeader/TodosFilter.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Todos = (param)=>{\n    let { userTodos  } = param;\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        data: JSON.parse(userTodos),\n        loading: false,\n        error: null\n    });\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        condition: \"All\"\n    });\n    const remainedTime = (todoDate)=>{\n        const remainedDay = (new Date(todoDate).getTime() - Date.now()) / 86400000;\n        console.log(remainedDay);\n        if (remainedDay < 0) return \"expired\";\n        const day = Math.floor(remainedDay);\n        const hour = Math.floor(remainedDay % 1 * 24);\n        return \"\".concat(day, \" day & \").concat(hour, \" hour left\");\n    };\n    const changeConditionHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].patch(\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"changed\");\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    const todoDeleteHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(res.data.message);\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: todos.loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 49,\n            columnNumber: 27\n        }, undefined) : todos.data.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"no todo\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 50,\n            columnNumber: 31\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-3 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/todos/create\",\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-teal-500\",\n                        children: \"Add new Todo?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 49\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, undefined),\n                todos.data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        todoName: item.todoName,\n                        id: item._id,\n                        remainedTime: remainedTime(item.todoDate),\n                        completed: item.completed,\n                        onChangeCondition: ()=>changeConditionHandler(item._id),\n                        onCompleteHandler: ()=>completeHandler(item._id),\n                        onTodoDelete: ()=>todoDeleteHandler(item._id)\n                    }, item._id, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 8\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 51,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Todos, \"efnuVeJs6iprTFXB2qaXwxmbfMg=\");\n_c = Todos;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JVLEtBQUtFLEdBQUc7dUJBSmhDRixLQUFLRSxHQUFHOzs7Ozs7Ozs7O3FCQU9qQjs7Ozs7O0FBSVY7R0FyRE03QztLQUFBQTs7QUFzR04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb3MvaW5kZXguanM/NWFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiY29va2llcy1uZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICBqd3QgIGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXIubW9kZWwuanMnXHJcbmltcG9ydCBUb2RvIGZyb20gJy4uLy4uL21vZGVscy90b2RvLm1vZGVsJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2RvbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ub2RvXCI7XHJcbmltcG9ydCBUb2RvRmlsdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RvZG9zSGVhZGVyL1RvZG9zRmlsdGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG5jb25zdCBUb2RvcyA9ICh7dXNlclRvZG9zfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2RvcyxzZXRUb2Rvc109dXNlU3RhdGUoe2RhdGE6SlNPTi5wYXJzZSh1c2VyVG9kb3MpLGxvYWRpbmc6ZmFsc2UsZXJyb3I6bnVsbH0pXHJcbiAgY29uc3QgW2ZpbHRlcnMsc2V0RmlsdGVyc109dXNlU3RhdGUoe2NvbmRpdGlvbjpcIkFsbFwifSlcclxuICBjb25zdCByZW1haW5lZFRpbWU9KHRvZG9EYXRlKT0+e1xyXG4gICAgY29uc3QgcmVtYWluZWREYXk9KG5ldyBEYXRlKHRvZG9EYXRlKS5nZXRUaW1lKCktRGF0ZS5ub3coKSkvODY0MDAwMDA7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1haW5lZERheSlcclxuICAgIGlmKHJlbWFpbmVkRGF5PDApIHJldHVybiBcImV4cGlyZWRcIjtcclxuICAgIGNvbnN0IGRheT1NYXRoLmZsb29yKHJlbWFpbmVkRGF5KVxyXG4gICAgY29uc3QgaG91cj1NYXRoLmZsb29yKChyZW1haW5lZERheSAlIDEpKjI0KVxyXG4gICAgcmV0dXJuIGAke2RheX0gZGF5ICYgJHtob3VyfSBob3VyIGxlZnRgXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZUNvbmRpdGlvbkhhbmRsZXI9KGlkKT0+e1xyXG4gICAgYXhpb3MucGF0Y2goYC9hcGkvdG9kb3MvZHluYW1pY1RvZG9zLyR7aWR9YClcclxuICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICBzZXRUb2Rvcyh7Li4udG9kb3MsZGF0YTpyZXMuZGF0YS50b2Rvc30pO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiY2hhbmdlZFwiKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnI9PntcclxuICAgICAgc2V0VG9kb3Moey4uLnRvZG9zLGVycm9yOmVycn0pO1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IHRvZG9EZWxldGVIYW5kbGVyPShpZCk9PntcclxuICAgIGF4aW9zLmRlbGV0ZShgL2FwaS90b2Rvcy9keW5hbWljVG9kb3MvJHtpZH1gKVxyXG4gICAgLnRoZW4ocmVzPT57XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgIHNldFRvZG9zKHsuLi50b2RvcyxkYXRhOnJlcy5kYXRhLnRvZG9zfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICBzZXRUb2Rvcyh7Li4udG9kb3MsZXJyb3I6ZXJyfSk7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICh0b2Rvcy5sb2FkaW5nKSA/IDxwPmxvYWRpbmc8L3A+IDpcclxuICAgICh0b2Rvcy5kYXRhLmxlbmd0aD09PTApID8gPHA+bm8gdG9kbzwvcD4gOlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIHctZnVsbFwiPlxyXG4gICAgICA8VG9kb0ZpbHRlciAvPlxyXG4gICAgICA8TGluayBocmVmPScvdG9kb3MvY3JlYXRlJyBsZWdhY3lCZWhhdmlvcj48YSBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwXCI+QWRkIG5ldyBUb2RvPzwvYT48L0xpbms+XHJcbiAgICB7dG9kb3MuZGF0YS5tYXAoaXRlbT0+KFxyXG4gICAgICAgPFRvZG9vIGtleT17aXRlbS5faWR9IHRvZG9OYW1lPXtpdGVtLnRvZG9OYW1lfSBpZD17aXRlbS5faWR9IFxyXG4gICAgICAgcmVtYWluZWRUaW1lPXtyZW1haW5lZFRpbWUoaXRlbS50b2RvRGF0ZSl9IGNvbXBsZXRlZD17aXRlbS5jb21wbGV0ZWR9XHJcbiAgICAgICBvbkNoYW5nZUNvbmRpdGlvbj17KCk9PmNoYW5nZUNvbmRpdGlvbkhhbmRsZXIoaXRlbS5faWQpfSBcclxuICAgICAgIG9uQ29tcGxldGVIYW5kbGVyPXsoKT0+Y29tcGxldGVIYW5kbGVyKGl0ZW0uX2lkKX0gXHJcbiAgICAgICBvblRvZG9EZWxldGU9eygpPT50b2RvRGVsZXRlSGFuZGxlcihpdGVtLl9pZCl9XHJcbiAgICAgICAvPlxyXG4gICAgKSl9XHJcbiAgICA8L2Rpdj5cclxufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbmNvbnN0IHRva2VuPWdldENvb2tpZSgndG9kb1Rva2VuJyx7IHJlcSwgcmVzIH0pO1xyXG5pZighdG9rZW4pe1xyXG4gIHJldHVybiB7XHJcbiAgICByZWRpcmVjdDoge1xyXG4gICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgIH0sXHJcbiAgICBwcm9wczp7fSxcclxuICB9O1xyXG59XHJcbmNvbnN0IFtiZWFyZXIsbWFpbl09dG9rZW4uc3BsaXQoXCIgXCIpO1xyXG5jb25zdCBwYXlsb2FkPWp3dC52ZXJpZnkobWFpbixwcm9jZXNzLmVudi5TRUNSRVRfS0VZKTtcclxuY29uc3Qge21vYmlsZSxlbWFpbH09cGF5bG9hZDtcclxuLy9jb25uZWN0IHRvIERCXHJcbmF3YWl0IGRiQ29ubmVjdCgpO1xyXG4vL3NlYXJjaCB0aGUgdXNlciBiYXNlZCBvbiBtb2JpbGUgYW5kIGVtYWlsXHJcbmNvbnN0IHVzZXI9YXdhaXQgVXNlci5maW5kT25lKHttb2JpbGV9KVxyXG4gICAgICAvLyBpZiBtb2JpbGUgbnVtYmVyIGlzIG5vdCBmb3VuZFxyXG4gICAgICBpZighdXNlcil7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHByb3BzOnt9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgLy8yLSBjaGVjayBpZiB0aGUgdXNlckVtYWlsIGluIERCIG1hdGNoIHdpdGggdGhlIGVtYWlsIGluIHRva2VuXHJcbiAgICAgIGNvbnN0IGNvbXBhcmVSZXN1bHQ9KHVzZXIuZW1haWw9PT1lbWFpbClcclxuICAgICBpZighY29tcGFyZVJlc3VsdCl7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOnt9LFxyXG4gICAgICB9O1xyXG4gICAgIH1cclxuICAgICAgIC8vMy0gc2V0IHRoZSB0b2tlbiB0byB0aGUgaGVhZGVyIGFuZCByZWRpcmVjdCB0byB0aGUgbWFpbiBwYWdlXHJcbiAgICAgICBjb25zdCBfaWQ9dXNlci5faWRcclxuICAgICAgIGNvbnN0IHRvZG9zPWF3YWl0IFRvZG8uZmluZCh7dXNlcklEOl9pZH0pO1xyXG4gICAgICBjb25zdCB1c2VyVG9kb3M9IEpTT04uc3RyaW5naWZ5KHRvZG9zKVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7dXNlclRvZG9zfSB9O1xyXG4gIH1cclxuICAgXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb2RvbyIsIlRvZG9GaWx0ZXIiLCJheGlvcyIsInRvYXN0IiwiVG9kb3MiLCJ1c2VyVG9kb3MiLCJ0b2RvcyIsInNldFRvZG9zIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImxvYWRpbmciLCJlcnJvciIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiY29uZGl0aW9uIiwicmVtYWluZWRUaW1lIiwidG9kb0RhdGUiLCJyZW1haW5lZERheSIsIkRhdGUiLCJnZXRUaW1lIiwibm93IiwiY29uc29sZSIsImxvZyIsImRheSIsIk1hdGgiLCJmbG9vciIsImhvdXIiLCJjaGFuZ2VDb25kaXRpb25IYW5kbGVyIiwiaWQiLCJwYXRjaCIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwidG9kb0RlbGV0ZUhhbmRsZXIiLCJkZWxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibGVuZ3RoIiwiaHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwiYSIsIm1hcCIsIml0ZW0iLCJ0b2RvTmFtZSIsIl9pZCIsImNvbXBsZXRlZCIsIm9uQ2hhbmdlQ29uZGl0aW9uIiwib25Db21wbGV0ZUhhbmRsZXIiLCJjb21wbGV0ZUhhbmRsZXIiLCJvblRvZG9EZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n"));

/***/ })

});