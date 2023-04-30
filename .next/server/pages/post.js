"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post/index.js":
/*!*****************************!*\
  !*** ./pages/post/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Posts = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3000/api/addPost\").then((res)=>console.log(res.data)).catch((err)=>console.log(err));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\post\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\post\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:3000/api/addPost\");\n    console.log(res.data);\n    const posts = res.data;\n    // Pass data to the page via props\n    return {\n        props: {\n            posts\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1E7QUFFakMsTUFBTUUsUUFBTSxJQUFJO0lBQ1pELGdEQUFTQSxDQUFDLElBQUk7UUFDVkQsaURBQVMsQ0FBQyxxQ0FDVEksSUFBSSxDQUFDQyxDQUFBQSxNQUFLQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLElBQUksR0FDOUJDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBS0osUUFBUUMsR0FBRyxDQUFDRztJQUM1QixHQUFFLEVBQUU7SUFDSixxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNDOzs7Ozs7Ozs7O0FBT2I7QUFDTyxlQUFlQyxxQkFBcUI7SUFDdkMsK0JBQStCO0lBQy9CLE1BQU1SLE1BQU0sTUFBTUwsaURBQVMsQ0FBQztJQUM1Qk0sUUFBUUMsR0FBRyxDQUFDRixJQUFJRyxJQUFJO0lBQ3BCLE1BQU1NLFFBQVFULElBQUlHLElBQUk7SUFFdEIsa0NBQWtDO0lBQ2xDLE9BQU87UUFBRU8sT0FBTztZQUFFRDtRQUFNO0lBQUU7QUFDNUIsQ0FBQztBQUNELGlFQUFlWixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1vbmdvZGItYXBwLy4vcGFnZXMvcG9zdC9pbmRleC5qcz9lYzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUG9zdHM9KCk9PntcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWRkUG9zdFwiKVxyXG4gICAgICAgIC50aGVuKHJlcz0+Y29uc29sZS5sb2cocmVzLmRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHsvKiB7cG9zdHMubWFwKHBvc3Q9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17cG9zdC5faWR9Pntwb3N0LnRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KX0gKi99XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWRkUG9zdFwiKVxyXG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICBjb25zdCBwb3N0cyA9IHJlcy5kYXRhXHJcbiAgXHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb3N0cyB9IH1cclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgUG9zdHM7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwiUG9zdHMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVyciIsImRpdiIsInVsIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicG9zdHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/index.js"));
module.exports = __webpack_exports__;

})();