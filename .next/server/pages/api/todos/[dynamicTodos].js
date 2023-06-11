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
exports.id = "pages/api/todos/[dynamicTodos]";
exports.ids = ["pages/api/todos/[dynamicTodos]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("yup");

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

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"(api)/./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _mongoose = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst _yup = __webpack_require__(/*! yup */ \"yup\");\nvar Schema = _mongoose.default.Schema, ObjectId = Schema.ObjectId;\n/* PetSchema will correspond to a collection in your MongoDB database. */ const TodoSchema = new _mongoose.default.Schema({\n    todoName: {\n        type: String,\n        required: [\n            true,\n            \"please enter the name\"\n        ],\n        maxlength: [\n            20,\n            \"Name cannot be more than 20 characters\"\n        ],\n        minlength: [\n            3,\n            \"Name cannot be less than 3 characters\"\n        ]\n    },\n    todoDate: {\n        type: String,\n        required: [\n            true,\n            \"please enter the email\"\n        ]\n    },\n    completed: {\n        type: Boolean,\n        default: false\n    },\n    userID: {\n        type: ObjectId,\n        required: true\n    }\n});\nmodule.exports = _mongoose.default.models.Todo || _mongoose.default.model(\"Todo\", TodoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdG9kby5tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OzsrRUFBcUI7aUNBQ0E7QUFDckIsSUFBSUEsU0FBU0MsaUJBQVEsQ0FBQ0QsTUFBTSxFQUN4QkUsV0FBV0YsT0FBT0UsUUFBUTtBQUM5Qix1RUFBdUUsR0FDdkUsTUFBTUMsYUFBYSxJQUFJRixpQkFBUSxDQUFDRCxNQUFNLENBQUM7SUFDckNJLFVBQVU7UUFDUkMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBQztTQUF3QjtRQUN4Q0MsV0FBVztZQUFDO1lBQUk7U0FBeUM7UUFDekRDLFdBQVc7WUFBQztZQUFHO1NBQXdDO0lBQ3pEO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBQztTQUF5QjtJQUMzQztJQUNGSSxXQUFVO1FBQ1JOLE1BQUtPO1FBQ0xDLFNBQVEsS0FBSztJQUNmO0lBQ0FDLFFBQU87UUFDSFQsTUFBTUg7UUFDTkssVUFBUyxJQUFJO0lBQ2pCO0FBRUE7QUFDQVEsT0FBT0MsT0FBTyxHQUFHZixpQkFBUSxDQUFDZ0IsTUFBTSxDQUFDQyxJQUFJLElBQUlqQixpQkFBUSxDQUFDa0IsS0FBSyxDQUFDLFFBQVFoQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tb25nb2RiLWFwcC8uL21vZGVscy90b2RvLm1vZGVsLmpzPzM0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5pbXBvcnQgeyBib29sIH0gZnJvbSAneXVwJztcclxudmFyIFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSxcclxuICAgIE9iamVjdElkID0gU2NoZW1hLk9iamVjdElkO1xyXG4vKiBQZXRTY2hlbWEgd2lsbCBjb3JyZXNwb25kIHRvIGEgY29sbGVjdGlvbiBpbiB5b3VyIE1vbmdvREIgZGF0YWJhc2UuICovXHJcbmNvbnN0IFRvZG9TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB0b2RvTmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLFwicGxlYXNlIGVudGVyIHRoZSBuYW1lXCJdLFxyXG4gICAgbWF4bGVuZ3RoOiBbMjAsICdOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddLFxyXG4gICAgbWlubGVuZ3RoOiBbMywgJ05hbWUgY2Fubm90IGJlIGxlc3MgdGhhbiAzIGNoYXJhY3RlcnMnXSxcclxuICB9LFxyXG4gIHRvZG9EYXRlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsXCJwbGVhc2UgZW50ZXIgdGhlIGVtYWlsXCJdLFxyXG4gIH0sXHJcbmNvbXBsZXRlZDp7XHJcbiAgdHlwZTpCb29sZWFuLFxyXG4gIGRlZmF1bHQ6ZmFsc2VcclxufSxcclxudXNlcklEOntcclxuICAgIHR5cGU6IE9iamVjdElkLFxyXG4gICAgcmVxdWlyZWQ6dHJ1ZVxyXG59XHJcblxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Ub2RvIHx8IG1vbmdvb3NlLm1vZGVsKCdUb2RvJywgVG9kb1NjaGVtYSkiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9uZ29vc2UiLCJPYmplY3RJZCIsIlRvZG9TY2hlbWEiLCJ0b2RvTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsIm1pbmxlbmd0aCIsInRvZG9EYXRlIiwiY29tcGxldGVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ1c2VySUQiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiVG9kbyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/todo.model.js\n");

/***/ }),

/***/ "(api)/./pages/api/todos/[dynamicTodos]/index.js":
/*!*************************************************!*\
  !*** ./pages/api/todos/[dynamicTodos]/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/todo.model */ \"(api)/./models/todo.model.js\");\n/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_todo_model__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(method){\n        case \"PATCH\":\n            try {\n                const { dynamicTodos  } = req.query;\n                const todo = await _models_todo_model__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                    _id: dynamicTodos\n                });\n                if (!todo) res.status(404).json({\n                    success: false,\n                    message: \"todo not found\"\n                });\n                const updateTodo = await _models_todo_model__WEBPACK_IMPORTED_MODULE_1___default().updateOne({\n                    _id: dynamicTodos\n                }, {\n                    $set: {\n                        completed: !todo.completed\n                    }\n                });\n                if (updateTodo.modifiedCount === 0) res.status(404).json({\n                    success: false,\n                    message: \"server error\"\n                });\n                const todos = await _models_todo_model__WEBPACK_IMPORTED_MODULE_1___default().find({});\n                res.status(200).json({\n                    success: true,\n                    message: \"todo updated successfully\",\n                    todos\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false,\n                    message: error.message\n                });\n            }\n        default:\n            res.status(400).json({\n                success: false,\n                message: \"error\"\n            });\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvW2R5bmFtaWNUb2Rvc10vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNDO0FBRWpDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBQ25CLE1BQU1ILHdEQUFTQTtJQUNmLE9BQVFLO1FBQ04sS0FBSztZQUNILElBQUk7Z0JBQ0YsTUFBTSxFQUFDQyxhQUFZLEVBQUMsR0FBQ0gsSUFBSUksS0FBSztnQkFDOUIsTUFBTUMsT0FBTSxNQUFNUCxpRUFBWSxDQUFDO29CQUFDUyxLQUFJSjtnQkFBWTtnQkFDaEQsSUFBRyxDQUFDRSxNQUFNSixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFDQyxTQUFRLEtBQUs7b0JBQUNDLFNBQVE7Z0JBQWdCO2dCQUN0RSxNQUFNQyxhQUFhLE1BQU1kLG1FQUFjLENBQ25DO29CQUFFUyxLQUFNSjtnQkFBYSxHQUNyQjtvQkFBRVcsTUFBTTt3QkFBRUMsV0FBWSxDQUFDVixLQUFLVSxTQUFTO29CQUFDO2dCQUFFO2dCQUUzQyxJQUFHSCxXQUFXSSxhQUFhLEtBQUcsR0FBR2YsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBQ0MsU0FBUSxLQUFLO29CQUFDQyxTQUFRO2dCQUFjO2dCQUMzRixNQUFNTSxRQUFNLE1BQU1uQiw4REFBUyxDQUFDLENBQUM7Z0JBQzlCRyxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLElBQUk7b0JBQUVDLFNBQVM7b0JBQTRCTTtnQkFBTTtZQUNuRixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RsQixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTLEtBQUs7b0JBQUNDLFNBQVFRLE1BQU1SLE9BQU87Z0JBQUM7WUFDOUQ7UUFDRjtZQUNFVixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTLEtBQUs7Z0JBQUNDLFNBQVE7WUFBUTtZQUN0RCxLQUFLO0lBQ1Q7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1vbmdvZGItYXBwLy4vcGFnZXMvYXBpL3RvZG9zL1tkeW5hbWljVG9kb3NdL2luZGV4LmpzP2FjNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi8uLi9saWIvbW9uZ29kYidcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL3RvZG8ubW9kZWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcVxyXG4gIGF3YWl0IGRiQ29ubmVjdCgpXHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgJ1BBVENIJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7ZHluYW1pY1RvZG9zfT1yZXEucXVlcnk7XHJcbiAgICAgICAgY29uc3QgdG9kbz0gYXdhaXQgVG9kby5maW5kT25lKHtfaWQ6ZHluYW1pY1RvZG9zfSlcclxuICAgICAgICBpZighdG9kbykgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6ZmFsc2UsbWVzc2FnZTpcInRvZG8gbm90IGZvdW5kXCJ9KVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRvZG8gPSBhd2FpdCBUb2RvLnVwZGF0ZU9uZShcclxuICAgICAgICAgICAgeyBfaWQgOiBkeW5hbWljVG9kb3MgfSxcclxuICAgICAgICAgICAgeyAkc2V0OiB7IGNvbXBsZXRlZCA6ICF0b2RvLmNvbXBsZXRlZCB9IH1cclxuICAgICAgICAgKTtcclxuICAgICAgICAgaWYodXBkYXRlVG9kby5tb2RpZmllZENvdW50PT09MCkgcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6ZmFsc2UsbWVzc2FnZTpcInNlcnZlciBlcnJvclwifSlcclxuICAgICAgICAgY29uc3QgdG9kb3M9YXdhaXQgVG9kby5maW5kKHt9KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJ0b2RvIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsdG9kb3MgfSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLG1lc3NhZ2U6ZXJyb3IubWVzc2FnZSB9KVxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLG1lc3NhZ2U6XCJlcnJvclwiIH0pXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlRvZG8iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZHluYW1pY1RvZG9zIiwicXVlcnkiLCJ0b2RvIiwiZmluZE9uZSIsIl9pZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsInVwZGF0ZVRvZG8iLCJ1cGRhdGVPbmUiLCIkc2V0IiwiY29tcGxldGVkIiwibW9kaWZpZWRDb3VudCIsInRvZG9zIiwiZmluZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/[dynamicTodos]/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/[dynamicTodos]/index.js"));
module.exports = __webpack_exports__;

})();