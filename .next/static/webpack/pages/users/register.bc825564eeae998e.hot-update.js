"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/register",{

/***/ "./pages/users/register.js":
/*!*********************************!*\
  !*** ./pages/users/register.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Register() {\n    _s();\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_1__.useFormik)({\n        initialValues: {\n            name: \"\",\n            email: \"\",\n            mobile: \"\",\n            password: \"\",\n            confirmPassword: \"\"\n        },\n        onSubmit: function(values) {\n            alert(\"You are registered! Name: \".concat(values.name, \". Email: \").concat(values.email, \". Profession: \").concat(values.profession, \". \\n            Age: \").concat(values.age));\n        },\n        validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__.object({\n            name: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"please enter the Name\").min(3, \"Name cannot be less than 3 characters\").max(20, \"Name cannot be more than 20 characters\"),\n            email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email(\"email format is not true\").required(\"please enter the email\").max(30, \"email cannot be more than 60 characters\"),\n            mobile: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"please enter the mobile\").min(3, '\"mobile number is not true').max(20, '\"mobile number is not true')\n        })\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-300 min-w-screen min-h-screen overflow-x-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: formik.handleSubmit,\n            className: \"max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl mb-3 text-center\",\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"name\",\n                            children: \"Full Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            id: \"name\",\n                            className: \"block w-full rounded border py-1 px-2 \".concat(formik.touched.name && formik.errors.name ? \"border-red-400\" : \"border-gray-300\"),\n                            onChange: formik.handleChange,\n                            onBlur: formik.handleBlur,\n                            value: formik.values.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        formik.touched.name && formik.errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-red-400\",\n                            children: formik.errors.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"email\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            name: \"email\",\n                            id: \"email\",\n                            className: \"block w-full rounded border py-1 px-2 \".concat(formik.touched.email && formik.errors.email ? \"border-red-400\" : \"border-gray-300\"),\n                            onChange: formik.handleChange,\n                            onBlur: formik.handleBlur,\n                            value: formik.values.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this),\n                        formik.touched.email && formik.errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-red-400\",\n                            children: formik.errors.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            for: \"age\",\n                            children: \"Age\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"age\",\n                            id: \"age\",\n                            className: \"block w-full rounded border py-1 px-2 \".concat(formik.touched.age && formik.errors.age ? \"border-red-400\" : \"border-gray-300\"),\n                            onChange: formik.handleChange,\n                            onBlur: formik.handleBlur,\n                            value: formik.values.age\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        formik.touched.age && formik.errors.age && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-red-400\",\n                            children: formik.errors.age\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 rounded p-3 text-white\",\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\users\\\\register.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Register, \"B/4rI4IXClQ7sG7psKj+pOuRe5Q=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_1__.useFormik\n    ];\n});\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2pCLEdBQUcsSUFBSVgsT0FBTzZCLE1BQU0sQ0FBQ2xCLEdBQUcsR0FBRyxtQkFBbUIsaUJBQWlCOzRCQUNsSW1CLFVBQVU5QixPQUFPK0IsWUFBWTs0QkFBRUMsUUFBUWhDLE9BQU9pQyxVQUFVOzRCQUFFQyxPQUFPbEMsT0FBT1EsTUFBTSxDQUFDRyxHQUFHOzs7Ozs7d0JBQ25GWCxPQUFPNEIsT0FBTyxDQUFDakIsR0FBRyxJQUFJWCxPQUFPNkIsTUFBTSxDQUFDbEIsR0FBRyxrQkFDdEMsOERBQUN3Qjs0QkFBS2hCLFdBQVU7c0NBQWdCbkIsT0FBTzZCLE1BQU0sQ0FBQ2xCLEdBQUc7Ozs7Ozs7Ozs7Ozs4QkFHckQsOERBQUNPO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDaUI7d0JBQU9qQixXQUFVO3dCQUFxQ08sTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRSxDQUFDO0dBN0RxQjNCOztRQUNMRiw2Q0FBU0E7OztLQURKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9yZWdpc3Rlci5qcz85MDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICAgIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBtb2JpbGU6ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6JycsXHJcbiAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VibWl0OiBmdW5jdGlvbiAodmFsdWVzKSB7XHJcbiAgICAgICAgICBhbGVydChgWW91IGFyZSByZWdpc3RlcmVkISBOYW1lOiAke3ZhbHVlcy5uYW1lfS4gRW1haWw6ICR7dmFsdWVzLmVtYWlsfS4gUHJvZmVzc2lvbjogJHt2YWx1ZXMucHJvZmVzc2lvbn0uIFxyXG4gICAgICAgICAgICBBZ2U6ICR7dmFsdWVzLmFnZX1gKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICBuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJwbGVhc2UgZW50ZXIgdGhlIE5hbWVcIilcclxuICAgICAgICAgICAgLm1pbigzLCAnTmFtZSBjYW5ub3QgYmUgbGVzcyB0aGFuIDMgY2hhcmFjdGVycycpXHJcbiAgICAgICAgICAgIC5tYXgoMjAsICdOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycycpLFxyXG4gICAgICAgICAgICBlbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiZW1haWwgZm9ybWF0IGlzIG5vdCB0cnVlXCIpLnJlcXVpcmVkKFwicGxlYXNlIGVudGVyIHRoZSBlbWFpbFwiKVxyXG4gICAgICAgICAgICAubWF4KDMwLFwiZW1haWwgY2Fubm90IGJlIG1vcmUgdGhhbiA2MCBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgICAgICAgICBtb2JpbGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcInBsZWFzZSBlbnRlciB0aGUgbW9iaWxlXCIpXHJcbiAgICAgICAgICAgIC5taW4oMywgJ1wibW9iaWxlIG51bWJlciBpcyBub3QgdHJ1ZScpXHJcbiAgICAgICAgICAgIC5tYXgoMjAsICdcIm1vYmlsZSBudW1iZXIgaXMgbm90IHRydWUnKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS0zMDAgbWluLXctc2NyZWVuIG1pbi1oLXNjcmVlbiBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnIG10LTcgcC0zXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgbWItMyB0ZXh0LWNlbnRlcic+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPkZ1bGwgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgdy1mdWxsIHJvdW5kZWQgYm9yZGVyIHB5LTEgcHgtMiAke2Zvcm1pay50b3VjaGVkLm5hbWUgJiYgZm9ybWlrLmVycm9ycy5uYW1lID8gJ2JvcmRlci1yZWQtNDAwJyA6ICdib3JkZXItZ3JheS0zMDAnfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9IHZhbHVlPXtmb3JtaWsudmFsdWVzLm5hbWV9IC8+XHJcbiAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5uYW1lICYmIGZvcm1pay5lcnJvcnMubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAnPntmb3JtaWsuZXJyb3JzLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctZnVsbCByb3VuZGVkIGJvcmRlciBweS0xIHB4LTIgJHtmb3JtaWsudG91Y2hlZC5lbWFpbCAmJiBmb3JtaWsuZXJyb3JzLmVtYWlsID8gJ2JvcmRlci1yZWQtNDAwJyA6ICdib3JkZXItZ3JheS0zMDAnfWB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9IHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfSAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAnPntmb3JtaWsuZXJyb3JzLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWdlXCI+QWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYWdlXCIgaWQ9XCJhZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctZnVsbCByb3VuZGVkIGJvcmRlciBweS0xIHB4LTIgJHtmb3JtaWsudG91Y2hlZC5hZ2UgJiYgZm9ybWlrLmVycm9ycy5hZ2UgPyAnYm9yZGVyLXJlZC00MDAnIDogJ2JvcmRlci1ncmF5LTMwMCd9YH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX0gb25CbHVyPXtmb3JtaWsuaGFuZGxlQmx1cn0gdmFsdWU9e2Zvcm1pay52YWx1ZXMuYWdlfSAvPlxyXG4gICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuYWdlICYmIGZvcm1pay5lcnJvcnMuYWdlICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtcmVkLTQwMCc+e2Zvcm1pay5lcnJvcnMuYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIHJvdW5kZWQgcC0zIHRleHQtd2hpdGUnIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0iXSwibmFtZXMiOlsidXNlRm9ybWlrIiwiWXVwIiwiUmVnaXN0ZXIiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibmFtZSIsImVtYWlsIiwibW9iaWxlIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImFsZXJ0IiwicHJvZmVzc2lvbiIsImFnZSIsInZhbGlkYXRpb25TY2hlbWEiLCJvYmplY3QiLCJzdHJpbmciLCJyZXF1aXJlZCIsIm1pbiIsIm1heCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJoYW5kbGVTdWJtaXQiLCJoMSIsImxhYmVsIiwiZm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ0b3VjaGVkIiwiZXJyb3JzIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJvbkJsdXIiLCJoYW5kbGVCbHVyIiwidmFsdWUiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/register.js\n"));

/***/ })

});