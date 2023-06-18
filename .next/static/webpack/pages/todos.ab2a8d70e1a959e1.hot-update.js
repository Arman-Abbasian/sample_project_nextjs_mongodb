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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Todo */ \"./components/Todo.jsx\");\n/* harmony import */ var _components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/TodosHeader/TodosFilter */ \"./components/TodosHeader/TodosFilter.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Todos = (param)=>{\n    let { userTodos  } = param;\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        data: JSON.parse(userTodos),\n        loading: false,\n        error: null\n    });\n    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        condition: \"All\"\n    });\n    const remainedTime = (todoDate)=>{\n        console.log();\n        const remainedDay = (new Date(todoDate).getTime() - Date.now()) / 864000000;\n        console.log(remainedDay);\n        if (remainedDay < 0) return \"expired\";\n        const day = Math.round(remainedDay);\n        const hour = Math.floor(remainedDay % 1 * 24);\n        return \"\".concat(day, \" day & \").concat(hour, \" hour to do\");\n    };\n    const changeConditionHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].patch(\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"changed\");\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    const todoDeleteHandler = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"/api/todos/dynamicTodos/\".concat(id)).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"todo removed\");\n            setTodos({\n                ...todos,\n                data: res.data.todos\n            });\n        }).catch((err)=>{\n            setTodos({\n                ...todos,\n                error: err\n            });\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: todos.loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 51,\n            columnNumber: 27\n        }, undefined) : todos.data.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"no todo\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 31\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-3 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodosHeader_TodosFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                }, undefined),\n                todos.data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        todoName: item.todoName,\n                        id: item._id,\n                        remainedTime: remainedTime(item.todoDate),\n                        completed: item.completed,\n                        onChangeCondition: ()=>changeConditionHandler(item._id),\n                        onCompleteHandler: ()=>completeHandler(item._id),\n                        onTodoDelete: ()=>todoDeleteHandler(item._id)\n                    }, item._id, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 8\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\todos\\\\index.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Todos, \"efnuVeJs6iprTFXB2qaXwxmbfMg=\");\n_c = Todos;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90b2Rvcy9pbmRleC5qcz81YWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCJjb29raWVzLW5leHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgIGp3dCAgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi9saWIvbW9uZ29kYlwiO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci5tb2RlbC5qcydcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8ubW9kZWwnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUb2RvbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ub2RvXCI7XHJcbmltcG9ydCBUb2RvRmlsdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RvZG9zSGVhZGVyL1RvZG9zRmlsdGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG5jb25zdCBUb2RvcyA9ICh7dXNlclRvZG9zfSkgPT4ge1xyXG4gIGNvbnN0IFt0b2RvcyxzZXRUb2Rvc109dXNlU3RhdGUoe2RhdGE6SlNPTi5wYXJzZSh1c2VyVG9kb3MpLGxvYWRpbmc6ZmFsc2UsZXJyb3I6bnVsbH0pXHJcbiAgY29uc3QgW2ZpbHRlcnMsc2V0RmlsdGVyc109dXNlU3RhdGUoe2NvbmRpdGlvbjpcIkFsbFwifSlcclxuICBjb25zdCByZW1haW5lZFRpbWU9KHRvZG9EYXRlKT0+e1xyXG4gICAgY29uc29sZS5sb2coKVxyXG4gICAgY29uc3QgcmVtYWluZWREYXk9KG5ldyBEYXRlKHRvZG9EYXRlKS5nZXRUaW1lKCktRGF0ZS5ub3coKSkvODY0MDAwMDAwO1xyXG4gICAgY29uc29sZS5sb2cocmVtYWluZWREYXkpXHJcbiAgICBpZihyZW1haW5lZERheTwwKSByZXR1cm4gXCJleHBpcmVkXCI7XHJcbiAgICBjb25zdCBkYXk9TWF0aC5yb3VuZChyZW1haW5lZERheSlcclxuICAgIGNvbnN0IGhvdXI9TWF0aC5mbG9vcigocmVtYWluZWREYXkgJSAxKSoyNClcclxuICAgIHJldHVybiBgJHtkYXl9IGRheSAmICR7aG91cn0gaG91ciB0byBkb2BcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlQ29uZGl0aW9uSGFuZGxlcj0oaWQpPT57XHJcbiAgICBheGlvcy5wYXRjaChgL2FwaS90b2Rvcy9keW5hbWljVG9kb3MvJHtpZH1gKVxyXG4gICAgLnRoZW4ocmVzPT57XHJcbiAgICAgIHNldFRvZG9zKHsuLi50b2RvcyxkYXRhOnJlcy5kYXRhLnRvZG9zfSk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJjaGFuZ2VkXCIpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycj0+e1xyXG4gICAgICBzZXRUb2Rvcyh7Li4udG9kb3MsZXJyb3I6ZXJyfSk7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVyci5tZXNzYWdlKVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgdG9kb0RlbGV0ZUhhbmRsZXI9KGlkKT0+e1xyXG4gICAgYXhpb3MuZGVsZXRlKGAvYXBpL3RvZG9zL2R5bmFtaWNUb2Rvcy8ke2lkfWApXHJcbiAgICAudGhlbihyZXM9PntcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcInRvZG8gcmVtb3ZlZFwiKTtcclxuICAgICAgc2V0VG9kb3Moey4uLnRvZG9zLGRhdGE6cmVzLmRhdGEudG9kb3N9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyPT57XHJcbiAgICAgIHNldFRvZG9zKHsuLi50b2RvcyxlcnJvcjplcnJ9KTtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICh0b2Rvcy5sb2FkaW5nKSA/IDxwPmxvYWRpbmc8L3A+IDpcclxuICAgICh0b2Rvcy5kYXRhLmxlbmd0aD09PTApID8gPHA+bm8gdG9kbzwvcD4gOlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIHctZnVsbFwiPlxyXG4gICAgICA8VG9kb0ZpbHRlciAvPlxyXG4gICAge3RvZG9zLmRhdGEubWFwKGl0ZW09PihcclxuICAgICAgIDxUb2RvbyBrZXk9e2l0ZW0uX2lkfSB0b2RvTmFtZT17aXRlbS50b2RvTmFtZX0gaWQ9e2l0ZW0uX2lkfSBcclxuICAgICAgIHJlbWFpbmVkVGltZT17cmVtYWluZWRUaW1lKGl0ZW0udG9kb0RhdGUpfSBjb21wbGV0ZWQ9e2l0ZW0uY29tcGxldGVkfVxyXG4gICAgICAgb25DaGFuZ2VDb25kaXRpb249eygpPT5jaGFuZ2VDb25kaXRpb25IYW5kbGVyKGl0ZW0uX2lkKX0gXHJcbiAgICAgICBvbkNvbXBsZXRlSGFuZGxlcj17KCk9PmNvbXBsZXRlSGFuZGxlcihpdGVtLl9pZCl9IFxyXG4gICAgICAgb25Ub2RvRGVsZXRlPXsoKT0+dG9kb0RlbGV0ZUhhbmRsZXIoaXRlbS5faWQpfVxyXG4gICAgICAgLz5cclxuICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxLCByZXMgfSkge1xyXG5jb25zdCB0b2tlbj1nZXRDb29raWUoJ3RvZG9Ub2tlbicseyByZXEsIHJlcyB9KTtcclxuaWYoIXRva2VuKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVkaXJlY3Q6IHtcclxuICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6e30sXHJcbiAgfTtcclxufVxyXG5jb25zdCBbYmVhcmVyLG1haW5dPXRva2VuLnNwbGl0KFwiIFwiKTtcclxuY29uc3QgcGF5bG9hZD1qd3QudmVyaWZ5KG1haW4scHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSk7XHJcbmNvbnN0IHttb2JpbGUsZW1haWx9PXBheWxvYWQ7XHJcbi8vY29ubmVjdCB0byBEQlxyXG5hd2FpdCBkYkNvbm5lY3QoKTtcclxuLy9zZWFyY2ggdGhlIHVzZXIgYmFzZWQgb24gbW9iaWxlIGFuZCBlbWFpbFxyXG5jb25zdCB1c2VyPWF3YWl0IFVzZXIuZmluZE9uZSh7bW9iaWxlfSlcclxuICAgICAgLy8gaWYgbW9iaWxlIG51bWJlciBpcyBub3QgZm91bmRcclxuICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdXNlcnMvbG9naW5cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBwcm9wczp7fSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIC8vMi0gY2hlY2sgaWYgdGhlIHVzZXJFbWFpbCBpbiBEQiBtYXRjaCB3aXRoIHRoZSBlbWFpbCBpbiB0b2tlblxyXG4gICAgICBjb25zdCBjb21wYXJlUmVzdWx0PSh1c2VyLmVtYWlsPT09ZW1haWwpXHJcbiAgICAgaWYoIWNvbXBhcmVSZXN1bHQpe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wczp7fSxcclxuICAgICAgfTtcclxuICAgICB9XHJcbiAgICAgICAvLzMtIHNldCB0aGUgdG9rZW4gdG8gdGhlIGhlYWRlciBhbmQgcmVkaXJlY3QgdG8gdGhlIG1haW4gcGFnZVxyXG4gICAgICAgY29uc3QgX2lkPXVzZXIuX2lkXHJcbiAgICAgICBjb25zdCB0b2Rvcz1hd2FpdCBUb2RvLmZpbmQoe3VzZXJJRDpfaWR9KTtcclxuICAgICAgY29uc3QgdXNlclRvZG9zPSBKU09OLnN0cmluZ2lmeSh0b2RvcylcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczoge3VzZXJUb2Rvc30gfTtcclxuICB9XHJcbiAgIFxyXG5leHBvcnQgZGVmYXVsdCBUb2RvczsiXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiVG9kb28iLCJUb2RvRmlsdGVyIiwiYXhpb3MiLCJ0b2FzdCIsIlRvZG9zIiwidXNlclRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsImNvbmRpdGlvbiIsInJlbWFpbmVkVGltZSIsInRvZG9EYXRlIiwiY29uc29sZSIsImxvZyIsInJlbWFpbmVkRGF5IiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJkYXkiLCJNYXRoIiwicm91bmQiLCJob3VyIiwiZmxvb3IiLCJjaGFuZ2VDb25kaXRpb25IYW5kbGVyIiwiaWQiLCJwYXRjaCIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwidG9kb0RlbGV0ZUhhbmRsZXIiLCJkZWxldGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsInRvZG9OYW1lIiwiX2lkIiwiY29tcGxldGVkIiwib25DaGFuZ2VDb25kaXRpb24iLCJvbkNvbXBsZXRlSGFuZGxlciIsImNvbXBsZXRlSGFuZGxlciIsIm9uVG9kb0RlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/todos/index.js\n"));

/***/ })

});