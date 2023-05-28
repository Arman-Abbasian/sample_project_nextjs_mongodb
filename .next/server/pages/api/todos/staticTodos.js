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
exports.id = "pages/api/todos/staticTodos";
exports.ids = ["pages/api/todos/staticTodos"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* This is a database connection function*/ \nconst connection = {} /* creating connection object*/ ;\nasync function dbConnect() {\n    /* check if we have connection to our databse*/ if (connection.isConnected) {\n        console.log(\"db connected\");\n        return;\n    }\n    /* connecting to our database */ const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n    console.log(connection);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5Q0FBeUMsR0FDVDtBQUVoQyxNQUFNQyxhQUFhLENBQUMsRUFBRSw2QkFBNkI7QUFFbkQsZUFBZUMsWUFBWTtJQUN6Qiw2Q0FBNkMsR0FDN0MsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGLENBQUM7SUFDRCw4QkFBOEIsR0FDOUIsTUFBTUMsS0FBSyxNQUFNTix1REFBZ0IsQ0FBQ1EsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7UUFDekRDLGlCQUFpQixJQUFJO1FBQ3JCQyxvQkFBb0IsSUFBSTtJQUMxQjtJQUNBWCxXQUFXRSxXQUFXLEdBQUdHLEdBQUdPLFdBQVcsQ0FBQyxFQUFFLENBQUNDLFVBQVU7SUFDckRWLFFBQVFDLEdBQUcsQ0FBQ0o7QUFDZDtBQUVBLGlFQUFlQyxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1vbmdvZGItYXBwLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGlzIGEgZGF0YWJhc2UgY29ubmVjdGlvbiBmdW5jdGlvbiovXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fSAvKiBjcmVhdGluZyBjb25uZWN0aW9uIG9iamVjdCovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgLyogY2hlY2sgaWYgd2UgaGF2ZSBjb25uZWN0aW9uIHRvIG91ciBkYXRhYnNlKi9cclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYiBjb25uZWN0ZWRcIilcclxuICAgIHJldHVyblxyXG4gIH1cclxuICAvKiBjb25uZWN0aW5nIHRvIG91ciBkYXRhYmFzZSAqL1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSlcclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZVxyXG4gIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./models/todo.model.js":
/*!******************************!*\
  !*** ./models/todo.model.js ***!
  \******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _mongoose = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! mongoose */ \"mongoose\"));\n/* PetSchema will correspond to a collection in your MongoDB database. */ const TodoSchema = new _mongoose.default.Schema({\n    todoName: {\n        type: String,\n        required: [\n            true,\n            \"please enter the name\"\n        ],\n        maxlength: [\n            20,\n            \"Name cannot be more than 20 characters\"\n        ],\n        minlength: [\n            3,\n            \"Name cannot be less than 3 characters\"\n        ]\n    },\n    todoDate: {\n        type: Date,\n        required: [\n            true,\n            \"please enter the email\"\n        ]\n    },\n    todayDate: {\n        type: String,\n        dafault: Date.now()\n    },\n    userID: {\n        type: String,\n        required: true\n    }\n});\nmodule.exports = _mongoose.default.models.Todo || _mongoose.default.model(\"Todo\", TodoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdG9kby5tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OzsrRUFBcUI7QUFFckIsdUVBQXVFLEdBQ3ZFLE1BQU1BLGFBQWEsSUFBSUMsaUJBQVEsQ0FBQ0MsTUFBTSxDQUFDO0lBQ3JDQyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUM7U0FBd0I7UUFDeENDLFdBQVc7WUFBQztZQUFJO1NBQXlDO1FBQ3pEQyxXQUFXO1lBQUM7WUFBRztTQUF3QztJQUN6RDtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1NO1FBQ05KLFVBQVU7WUFBQyxJQUFJO1lBQUM7U0FBeUI7SUFDM0M7SUFDQUssV0FBVTtRQUNWUCxNQUFNQztRQUNOTyxTQUFRRixLQUFLRyxHQUFHO0lBQ2xCO0lBQ0FDLFFBQU87UUFDSFYsTUFBS0M7UUFDTEMsVUFBUyxJQUFJO0lBQ2pCO0FBRUE7QUFDQVMsT0FBT0MsT0FBTyxHQUFHZixpQkFBUSxDQUFDZ0IsTUFBTSxDQUFDQyxJQUFJLElBQUlqQixpQkFBUSxDQUFDa0IsS0FBSyxDQUFDLFFBQVFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tb25nb2RiLWFwcC8uL21vZGVscy90b2RvLm1vZGVsLmpzPzM0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuLyogUGV0U2NoZW1hIHdpbGwgY29ycmVzcG9uZCB0byBhIGNvbGxlY3Rpb24gaW4geW91ciBNb25nb0RCIGRhdGFiYXNlLiAqL1xyXG5jb25zdCBUb2RvU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdG9kb05hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSxcInBsZWFzZSBlbnRlciB0aGUgbmFtZVwiXSxcclxuICAgIG1heGxlbmd0aDogWzIwLCAnTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXSxcclxuICAgIG1pbmxlbmd0aDogWzMsICdOYW1lIGNhbm5vdCBiZSBsZXNzIHRoYW4gMyBjaGFyYWN0ZXJzJ10sXHJcbiAgfSxcclxuICB0b2RvRGF0ZToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSxcInBsZWFzZSBlbnRlciB0aGUgZW1haWxcIl0sXHJcbiAgfSxcclxuICB0b2RheURhdGU6e1xyXG4gIHR5cGU6IFN0cmluZyxcclxuICBkYWZhdWx0OkRhdGUubm93KClcclxufSxcclxudXNlcklEOntcclxuICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6dHJ1ZVxyXG59XHJcblxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Ub2RvIHx8IG1vbmdvb3NlLm1vZGVsKCdUb2RvJywgVG9kb1NjaGVtYSkiXSwibmFtZXMiOlsiVG9kb1NjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidG9kb05hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJtaW5sZW5ndGgiLCJ0b2RvRGF0ZSIsIkRhdGUiLCJ0b2RheURhdGUiLCJkYWZhdWx0Iiwibm93IiwidXNlcklEIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlRvZG8iLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/todo.model.js\n");

/***/ }),

/***/ "(api)/./pages/api/todos/staticTodos/index.js":
/*!**********************************************!*\
  !*** ./pages/api/todos/staticTodos/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb.js */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _models_todo_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/todo.model.js */ \"(api)/./models/todo.model.js\");\n/* harmony import */ var _models_todo_model_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_todo_model_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongodb_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(method){\n        case \"GET\":\n            try {\n                const todos = await _models_todo_model_js__WEBPACK_IMPORTED_MODULE_1___default().find({});\n                /* find all the data in our database */ res.status(200).json({\n                    success: true,\n                    data: todos\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false,\n                    message: error.message\n                });\n            }\n        case \"POST\":\n            try {\n                console.log(req.body);\n            // const users = await Todo.create({}) /* find all the data in our database */\n            // res.status(200).json({ success: true, data: users })\n            } catch (error) {\n                res.status(400).json({\n                    success: false,\n                    message: error.message\n                });\n            }\n        default:\n            res.status(400).json({\n                success: false,\n                message: \"error\"\n            });\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3Mvc3RhdGljVG9kb3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNrRDtBQUNDO0FBRXBDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBQ25CLE1BQU1ILDJEQUFTQTtJQUNmLE9BQVFLO1FBQ04sS0FBSztZQUNILElBQUk7Z0JBQ0YsTUFBTUMsUUFBUSxNQUFNTCxpRUFBUyxDQUFDLENBQUM7Z0JBQUcscUNBQXFDLEdBQ3ZFRyxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLElBQUk7b0JBQUVDLE1BQU1MO2dCQUFNO1lBQ3BELEVBQUUsT0FBT00sT0FBTztnQkFDZFIsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxLQUFLO29CQUFDRyxTQUFRRCxNQUFNQyxPQUFPO2dCQUFDO1lBQzlEO1FBQ0EsS0FBSztZQUNMLElBQUk7Z0JBQ0ZDLFFBQVFDLEdBQUcsQ0FBQ1osSUFBSWEsSUFBSTtZQUNwQiw4RUFBOEU7WUFDOUUsdURBQXVEO1lBQ3pELEVBQUUsT0FBT0osT0FBTztnQkFDZFIsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUyxLQUFLO29CQUFDRyxTQUFRRCxNQUFNQyxPQUFPO2dCQUFDO1lBQzlEO1FBQ0Y7WUFDRVQsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUyxLQUFLO2dCQUFDRyxTQUFRO1lBQVE7WUFDdEQsS0FBSztJQUNUO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tb25nb2RiLWFwcC8uL3BhZ2VzL2FwaS90b2Rvcy9zdGF0aWNUb2Rvcy9pbmRleC5qcz9hNzdlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9tb25nb2RiLmpzJ1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvdG9kby5tb2RlbC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxXHJcbiAgYXdhaXQgZGJDb25uZWN0KClcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnR0VUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IGF3YWl0IFRvZG8uZmluZCh7fSkgLyogZmluZCBhbGwgdGhlIGRhdGEgaW4gb3VyIGRhdGFiYXNlICovXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0b2RvcyB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsbWVzc2FnZTplcnJvci5tZXNzYWdlIH0pXHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpXHJcbiAgICAgICAgLy8gY29uc3QgdXNlcnMgPSBhd2FpdCBUb2RvLmNyZWF0ZSh7fSkgLyogZmluZCBhbGwgdGhlIGRhdGEgaW4gb3VyIGRhdGFiYXNlICovXHJcbiAgICAgICAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1c2VycyB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsbWVzc2FnZTplcnJvci5tZXNzYWdlIH0pXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsbWVzc2FnZTpcImVycm9yXCIgfSlcclxuICAgICAgYnJlYWtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiVG9kbyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0b2RvcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/staticTodos/index.js\n");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbW9uZ29kYi1hcHAvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzPzUyYTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0O1xuZnVuY3Rpb24gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/staticTodos/index.js"));
module.exports = __webpack_exports__;

})();