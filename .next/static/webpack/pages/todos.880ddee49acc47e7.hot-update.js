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

/***/ "./components/Todo.jsx":
/*!*****************************!*\
  !*** ./components/Todo.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\n\n\n\nconst Todoo = (param)=>{\n    let { id , todoName , remainedTime , completed , onChangeCondition , onTodoDelete  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center p-4 shadow-md rounded-md \".concat(completed ? \"bg-teal-700 \" : \"bg-teal-300 gap-6\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between item-center flex-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: todoName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, undefined),\n                    completed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"done\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 30\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: remainedTime\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 44\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center\",\n                        children: [\n                            completed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCheck, {\n                                className: \"w-5 h-5 cursor-pointer\",\n                                onClick: onChangeCondition\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 31\n                            }, undefined),\n                            !completed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdCheckBoxOutlineBlank, {\n                                className: \"w-5 h-5 cursor-pointer\",\n                                onClick: onChangeCondition\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 32\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        legacyBehavior: true,\n                        href: \"/todos/\".concat(id),\n                        className: \"flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineEdit, {\n                                className: \"w-5 h-5 cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 104\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 101\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineDelete, {\n                            className: \"w-5 h-5 cursor-pointer\",\n                            onClick: onTodoDelete\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 63\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                lineNumber: 12,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Todoo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todoo);\nvar _c;\n$RefreshReg$(_c, \"Todoo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZCO0FBQ2lEO0FBQ3RCO0FBRXhELE1BQU1LLFFBQVEsU0FBeUU7UUFBeEUsRUFBQ0MsR0FBRSxFQUFDQyxTQUFRLEVBQUNDLGFBQVksRUFBQ0MsVUFBUyxFQUFDQyxrQkFBaUIsRUFBQ0MsYUFBWSxFQUFDO0lBQzlFLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXLDZEQUEwRyxPQUE3Q0osWUFBVSxpQkFBZSxtQkFBbUI7OzBCQUNySCw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBR1A7Ozs7OztvQkFDSEUsMEJBQVksOERBQUNLO2tDQUFFOzs7OztrREFBVyw4REFBQ0E7a0NBQUdOOzs7OztpQ0FBaUI7Ozs7Ozs7MEJBRXJELDhEQUFDSTtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDVkosMkJBQWEsOERBQUNSLDBEQUFjQTtnQ0FBQ1ksV0FBVTtnQ0FBeUJFLFNBQVNMOzs7Ozs7NEJBQ3pFLENBQUNELDJCQUFhLDhEQUFDTCxrRUFBc0JBO2dDQUFDUyxXQUFVO2dDQUF5QkUsU0FBU0w7Ozs7Ozs7Ozs7OztrQ0FFdkYsOERBQUNWLGtEQUFJQTt3QkFBQ2dCLGNBQWM7d0JBQUNDLE1BQU0sVUFBYSxPQUFIWDt3QkFBTU8sV0FBVTtrQ0FBbUMsNEVBQUNLO3NDQUFFLDRFQUFDaEIseURBQWFBO2dDQUFDVyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUNwSCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQW1DLDRFQUFDViwyREFBZUE7NEJBQUNVLFdBQVU7NEJBQXlCRSxTQUFTSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0g7S0FsQk1OO0FBb0JOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kby5qc3g/NmU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUNoZWNrLEFpT3V0bGluZUVkaXQsQWlPdXRsaW5lRGVsZXRlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IE1kQ2hlY2tCb3hPdXRsaW5lQmxhbmsgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmNvbnN0IFRvZG9vID0gKHtpZCx0b2RvTmFtZSxyZW1haW5lZFRpbWUsY29tcGxldGVkLG9uQ2hhbmdlQ29uZGl0aW9uLG9uVG9kb0RlbGV0ZX0pID0+IHtcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC00IHNoYWRvdy1tZCByb3VuZGVkLW1kICR7Y29tcGxldGVkPydiZy10ZWFsLTcwMCAnOidiZy10ZWFsLTMwMCBnYXAtNid9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbS1jZW50ZXIgZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8cD57dG9kb05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAge2NvbXBsZXRlZCA/IDxwPmRvbmU8L3A+IDogPHA+e3JlbWFpbmVkVGltZX08L3A+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge2NvbXBsZXRlZCAmJiA8QWlPdXRsaW5lQ2hlY2sgY2xhc3NOYW1lPVwidy01IGgtNSBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e29uQ2hhbmdlQ29uZGl0aW9ufSAvPn1cclxuICAgICAgICAgICAgICAgIHshY29tcGxldGVkICYmIDxNZENoZWNrQm94T3V0bGluZUJsYW5rIGNsYXNzTmFtZT1cInctNSBoLTUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtvbkNoYW5nZUNvbmRpdGlvbn0gLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBocmVmPXtgL3RvZG9zLyR7aWR9YH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj48YT48QWlPdXRsaW5lRWRpdCBjbGFzc05hbWU9XCJ3LTUgaC01IGN1cnNvci1wb2ludGVyXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj48QWlPdXRsaW5lRGVsZXRlIGNsYXNzTmFtZT1cInctNSBoLTUgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtvblRvZG9EZWxldGV9Lz48L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9vOyJdLCJuYW1lcyI6WyJMaW5rIiwiQWlPdXRsaW5lQ2hlY2siLCJBaU91dGxpbmVFZGl0IiwiQWlPdXRsaW5lRGVsZXRlIiwiTWRDaGVja0JveE91dGxpbmVCbGFuayIsIlRvZG9vIiwiaWQiLCJ0b2RvTmFtZSIsInJlbWFpbmVkVGltZSIsImNvbXBsZXRlZCIsIm9uQ2hhbmdlQ29uZGl0aW9uIiwib25Ub2RvRGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJsZWdhY3lCZWhhdmlvciIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Todo.jsx\n"));

/***/ })

});