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
exports.id = "pages/api/addPost";
exports.ids = ["pages/api/addPost"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(process.env.MONGODB_URI);\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nconsole.log(uri);\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckNDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNLCtDQUE4QztBQUNoRSxDQUFDO0FBRUQsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1HLFVBQVUsQ0FBQztBQUNqQlAsUUFBUUMsR0FBRyxDQUFDSztBQUVaLElBQUlFO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNQLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsTUFBTSwyQ0FBMEM7QUFDNUQsQ0FBQztBQUVELElBQUlILElBQXlCLEVBQWU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNRLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSCxTQUFTLElBQUlULGdEQUFXQSxDQUFDTyxLQUFLQztRQUM5QkcsT0FBT0MsbUJBQW1CLEdBQUdILE9BQU9JLE9BQU87SUFDN0MsQ0FBQztJQUNESCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1vbmdvZGItYXBwLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXHJcblxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5NT05HT0RCX1VSSSlcclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuY29uc3Qgb3B0aW9ucyA9IHt9XHJcbmNvbnNvbGUubG9nKHVyaSlcclxuXHJcbmxldCBjbGllbnRcclxubGV0IGNsaWVudFByb21pc2VcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpXHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxyXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcclxufVxyXG5cclxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcclxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/addPost.js":
/*!******************************!*\
  !*** ./pages/api/addPost.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function getPosts(req, res) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        const db = client.db(\"test\");\n        const posts = await db.collection(\"posts\").find({}).limit(20).toArray();\n        console.log(posts);\n        res.json(posts);\n    } catch (e) {\n        console.error(e);\n        throw new Error(e).message;\n    }\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPosts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUc1QyxlQUFlQyxTQUFTQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNsQyxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNSixvREFBYUE7UUFDbEMsTUFBTUssS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBQ3JCLE1BQU1DLFFBQVEsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLFNBQVNDLElBQUksQ0FBQyxDQUFDLEdBQUdDLEtBQUssQ0FBQyxJQUFJQyxPQUFPO1FBQ3JFQyxRQUFRQyxHQUFHLENBQUNOO1FBQ1pILElBQUlVLElBQUksQ0FBQ1A7SUFDWCxFQUFFLE9BQU9RLEdBQUc7UUFDVkgsUUFBUUksS0FBSyxDQUFDRDtRQUNkLE1BQU0sSUFBSUUsTUFBTUYsR0FBR0csT0FBTyxDQUFDO0lBQzdCO0FBQ0Y7O0FBQ0EsaUVBQWVoQixRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1vbmdvZGItYXBwLy4vcGFnZXMvYXBpL2FkZFBvc3QuanM/NDIwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcInRlc3RcIik7XHJcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJwb3N0c1wiKS5maW5kKHt9KS5saW1pdCgyMCkudG9BcnJheSgpO1xyXG4gICAgY29uc29sZS5sb2cocG9zdHMpXHJcbiAgICByZXMuanNvbihwb3N0cyk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHRocm93IG5ldyBFcnJvcihlKS5tZXNzYWdlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZ2V0UG9zdHMiXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImdldFBvc3RzIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJwb3N0cyIsImNvbGxlY3Rpb24iLCJmaW5kIiwibGltaXQiLCJ0b0FycmF5IiwiY29uc29sZSIsImxvZyIsImpzb24iLCJlIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addPost.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addPost.js"));
module.exports = __webpack_exports__;

})();