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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\n\n\n\nconst Todoo = (param)=>{\n    let { id , todoName , remainedTime , completed , onChangeCondition , onTodoDelete  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-6 p-4 shadow-md rounded-md gap-6 \".concat(completed ? \"bg-teal-700 \" : \"bg-teal-300\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between item-center flex-1 col-span-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: todoName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, undefined),\n                    completed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"done\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 30\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: remainedTime\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 44\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end items-center gap-4 col-span-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center\",\n                        children: [\n                            completed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCheck, {\n                                className: \"icon hover:text-teal-900 cursor-pointer\",\n                                onClick: onChangeCondition\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 31\n                            }, undefined),\n                            !completed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdCheckBoxOutlineBlank, {\n                                className: \"icon cursor-pointer\",\n                                onClick: onChangeCondition\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 32\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        legacyBehavior: true,\n                        href: \"/todos/\".concat(id),\n                        className: \"flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineEdit, {\n                                className: \"icon cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 104\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 101\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineDelete, {\n                            className: \"icon cursor-pointer\",\n                            onClick: onTodoDelete\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 63\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n                lineNumber: 12,\n                columnNumber: 12\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\components\\\\Todo.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Todoo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todoo);\nvar _c;\n$RefreshReg$(_c, \"Todoo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZCO0FBQ2lEO0FBQ3RCO0FBRXhELE1BQU1LLFFBQVEsU0FBeUU7UUFBeEUsRUFBQ0MsR0FBRSxFQUFDQyxTQUFRLEVBQUNDLGFBQVksRUFBQ0MsVUFBUyxFQUFDQyxrQkFBaUIsRUFBQ0MsYUFBWSxFQUFDO0lBQzlFLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXLG1EQUEwRixPQUF2Q0osWUFBVSxpQkFBZSxhQUFhOzswQkFDckcsOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7a0NBQUdQOzs7Ozs7b0JBQ0hFLDBCQUFZLDhEQUFDSztrQ0FBRTs7Ozs7a0RBQVcsOERBQUNBO2tDQUFHTjs7Ozs7aUNBQWlCOzs7Ozs7OzBCQUVyRCw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQ1ZKLDJCQUFhLDhEQUFDUiwwREFBY0E7Z0NBQUNZLFdBQVU7Z0NBQTBDRSxTQUFTTDs7Ozs7OzRCQUMxRixDQUFDRCwyQkFBYSw4REFBQ0wsa0VBQXNCQTtnQ0FBQ1MsV0FBVTtnQ0FBc0JFLFNBQVNMOzs7Ozs7Ozs7Ozs7a0NBRXBGLDhEQUFDVixrREFBSUE7d0JBQUNnQixjQUFjO3dCQUFDQyxNQUFNLFVBQWEsT0FBSFg7d0JBQU1PLFdBQVU7a0NBQW1DLDRFQUFDSztzQ0FBRSw0RUFBQ2hCLHlEQUFhQTtnQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FDcEgsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFtQyw0RUFBQ1YsMkRBQWVBOzRCQUFDVSxXQUFVOzRCQUFzQkUsU0FBU0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hIO0tBbEJNTjtBQW9CTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG8uanN4PzZlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVDaGVjayxBaU91dGxpbmVFZGl0LEFpT3V0bGluZURlbGV0ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBNZENoZWNrQm94T3V0bGluZUJsYW5rIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCBUb2RvbyA9ICh7aWQsdG9kb05hbWUscmVtYWluZWRUaW1lLGNvbXBsZXRlZCxvbkNoYW5nZUNvbmRpdGlvbixvblRvZG9EZWxldGV9KSA9PiB7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdyaWQgZ3JpZC1jb2xzLTYgcC00IHNoYWRvdy1tZCByb3VuZGVkLW1kIGdhcC02ICR7Y29tcGxldGVkPydiZy10ZWFsLTcwMCAnOidiZy10ZWFsLTMwMCd9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbS1jZW50ZXIgZmxleC0xIGNvbC1zcGFuLTRcIj5cclxuICAgICAgICAgICAgICAgIDxwPnt0b2RvTmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICB7Y29tcGxldGVkID8gPHA+ZG9uZTwvcD4gOiA8cD57cmVtYWluZWRUaW1lfTwvcD59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgZ2FwLTQgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29tcGxldGVkICYmIDxBaU91dGxpbmVDaGVjayBjbGFzc05hbWU9XCJpY29uIGhvdmVyOnRleHQtdGVhbC05MDAgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtvbkNoYW5nZUNvbmRpdGlvbn0gLz59XHJcbiAgICAgICAgICAgICAgICB7IWNvbXBsZXRlZCAmJiA8TWRDaGVja0JveE91dGxpbmVCbGFuayBjbGFzc05hbWU9XCJpY29uIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17b25DaGFuZ2VDb25kaXRpb259IC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgaHJlZj17YC90b2Rvcy8ke2lkfWB9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+PGE+PEFpT3V0bGluZUVkaXQgY2xhc3NOYW1lPVwiaWNvbiBjdXJzb3ItcG9pbnRlclwiLz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+PEFpT3V0bGluZURlbGV0ZSBjbGFzc05hbWU9XCJpY29uIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17b25Ub2RvRGVsZXRlfS8+PC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICk7XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBUb2RvbzsiXSwibmFtZXMiOlsiTGluayIsIkFpT3V0bGluZUNoZWNrIiwiQWlPdXRsaW5lRWRpdCIsIkFpT3V0bGluZURlbGV0ZSIsIk1kQ2hlY2tCb3hPdXRsaW5lQmxhbmsiLCJUb2RvbyIsImlkIiwidG9kb05hbWUiLCJyZW1haW5lZFRpbWUiLCJjb21wbGV0ZWQiLCJvbkNoYW5nZUNvbmRpdGlvbiIsIm9uVG9kb0RlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwibGVnYWN5QmVoYXZpb3IiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Todo.jsx\n"));

/***/ })

});