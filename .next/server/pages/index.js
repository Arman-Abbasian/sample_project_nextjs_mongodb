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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* This is a database connection function*/ \nconst connection = {} /* creating connection object*/ ;\nasync function dbConnect() {\n    /* check if we have connection to our databse*/ if (connection.isConnected) {\n        console.log(\"db connected\");\n        return;\n    }\n    /* connecting to our database */ const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n    console.log(connection);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5Q0FBeUMsR0FDVDtBQUVoQyxNQUFNQyxhQUFhLENBQUMsRUFBRSw2QkFBNkI7QUFFbkQsZUFBZUMsWUFBWTtJQUN6Qiw2Q0FBNkMsR0FDN0MsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGLENBQUM7SUFDRCw4QkFBOEIsR0FDOUIsTUFBTUMsS0FBSyxNQUFNTix1REFBZ0IsQ0FBQ1EsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7UUFDekRDLGlCQUFpQixJQUFJO1FBQ3JCQyxvQkFBb0IsSUFBSTtJQUMxQjtJQUNBWCxXQUFXRSxXQUFXLEdBQUdHLEdBQUdPLFdBQVcsQ0FBQyxFQUFFLENBQUNDLFVBQVU7SUFDckRWLFFBQVFDLEdBQUcsQ0FBQ0o7QUFDZDtBQUVBLGlFQUFlQyxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1vbmdvZGItYXBwLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGlzIGlzIGEgZGF0YWJhc2UgY29ubmVjdGlvbiBmdW5jdGlvbiovXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fSAvKiBjcmVhdGluZyBjb25uZWN0aW9uIG9iamVjdCovXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgLyogY2hlY2sgaWYgd2UgaGF2ZSBjb25uZWN0aW9uIHRvIG91ciBkYXRhYnNlKi9cclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYiBjb25uZWN0ZWRcIilcclxuICAgIHJldHVyblxyXG4gIH1cclxuICAvKiBjb25uZWN0aW5nIHRvIG91ciBkYXRhYmFzZSAqL1xyXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSlcclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZVxyXG4gIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/mongodb.js\n");

/***/ }),

/***/ "./models/user.model.js":
/*!******************************!*\
  !*** ./models/user.model.js ***!
  \******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _mongoose = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! mongoose */ \"mongoose\"));\n/* PetSchema will correspond to a collection in your MongoDB database. */ const UserSchema = new _mongoose.default.Schema({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"please enter the name\"\n        ],\n        maxlength: [\n            20,\n            \"Name cannot be more than 20 characters\"\n        ],\n        minlength: [\n            3,\n            \"Name cannot be less than 3 characters\"\n        ]\n    },\n    email: {\n        type: String,\n        email: [\n            true,\n            \"email format is not true\"\n        ],\n        required: [\n            true,\n            \"please enter the email\"\n        ],\n        maxlength: [\n            30,\n            \"email cannot be more than 60 characters\"\n        ],\n        unique: true\n    },\n    mobile: {\n        type: String,\n        required: [\n            true,\n            \"please enter the mobile\"\n        ],\n        minlength: [\n            11,\n            \"mobile number is not true\"\n        ],\n        maxlength: [\n            11,\n            \"mobile number is not true\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"please enter the password\"\n        ]\n    },\n    token: {\n        type: String,\n        default: \"\"\n    }\n});\nmodule.exports = _mongoose.default.models.User || _mongoose.default.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlci5tb2RlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OzsrRUFBcUI7QUFFckIsdUVBQXVFLEdBQ3ZFLE1BQU1BLGFBQWEsSUFBSUMsaUJBQVEsQ0FBQ0MsTUFBTSxDQUFDO0lBQ3JDQyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUM7U0FBd0I7UUFDeENDLFdBQVc7WUFBQztZQUFJO1NBQXlDO1FBQ3pEQyxXQUFXO1lBQUM7WUFBRztTQUF3QztJQUN6RDtJQUNBQyxPQUFPO1FBQ0xMLE1BQU1DO1FBQ05JLE9BQU07WUFBQyxJQUFJO1lBQUM7U0FBMkI7UUFDdkNILFVBQVU7WUFBQyxJQUFJO1lBQUM7U0FBeUI7UUFDekNDLFdBQVc7WUFBQztZQUFJO1NBQTBDO1FBQzFERyxRQUFPLElBQUk7SUFDYjtJQUNBQyxRQUFPO1FBQ1BQLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUM7U0FBMEI7UUFDMUNFLFdBQVc7WUFBQztZQUFJO1NBQTRCO1FBQzVDRCxXQUFXO1lBQUM7WUFBSTtTQUE0QjtRQUM1Q0csUUFBTyxJQUFJO0lBQ2I7SUFDQUUsVUFBUztRQUNQUixNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFDO1NBQTRCO0lBQzlDO0lBQ0VPLE9BQU07UUFDSlQsTUFBS0M7UUFDTFMsU0FBUTtJQUNWO0FBQ0Y7QUFDQUMsT0FBT0MsT0FBTyxHQUFHZixpQkFBUSxDQUFDZ0IsTUFBTSxDQUFDQyxJQUFJLElBQUlqQixpQkFBUSxDQUFDa0IsS0FBSyxDQUFDLFFBQVFuQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tb25nb2RiLWFwcC8uL21vZGVscy91c2VyLm1vZGVsLmpzP2QwMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuLyogUGV0U2NoZW1hIHdpbGwgY29ycmVzcG9uZCB0byBhIGNvbGxlY3Rpb24gaW4geW91ciBNb25nb0RCIGRhdGFiYXNlLiAqL1xyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLFwicGxlYXNlIGVudGVyIHRoZSBuYW1lXCJdLFxyXG4gICAgbWF4bGVuZ3RoOiBbMjAsICdOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddLFxyXG4gICAgbWlubGVuZ3RoOiBbMywgJ05hbWUgY2Fubm90IGJlIGxlc3MgdGhhbiAzIGNoYXJhY3RlcnMnXSxcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBlbWFpbDpbdHJ1ZSxcImVtYWlsIGZvcm1hdCBpcyBub3QgdHJ1ZVwiXSxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSxcInBsZWFzZSBlbnRlciB0aGUgZW1haWxcIl0sXHJcbiAgICBtYXhsZW5ndGg6IFszMCwgXCJlbWFpbCBjYW5ub3QgYmUgbW9yZSB0aGFuIDYwIGNoYXJhY3RlcnNcIl0sXHJcbiAgICB1bmlxdWU6dHJ1ZVxyXG4gIH0sXHJcbiAgbW9iaWxlOntcclxuICB0eXBlOiBTdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFt0cnVlLFwicGxlYXNlIGVudGVyIHRoZSBtb2JpbGVcIl0sXHJcbiAgbWlubGVuZ3RoOiBbMTEsIFwibW9iaWxlIG51bWJlciBpcyBub3QgdHJ1ZVwiXSxcclxuICBtYXhsZW5ndGg6IFsxMSwgXCJtb2JpbGUgbnVtYmVyIGlzIG5vdCB0cnVlXCJdLFxyXG4gIHVuaXF1ZTp0cnVlXHJcbn0sXHJcbnBhc3N3b3JkOntcclxuICB0eXBlOiBTdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFt0cnVlLFwicGxlYXNlIGVudGVyIHRoZSBwYXNzd29yZFwiXSxcclxufSxcclxuICB0b2tlbjp7XHJcbiAgICB0eXBlOlN0cmluZyxcclxuICAgIGRlZmF1bHQ6XCJcIlxyXG4gIH0sXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKSJdLCJuYW1lcyI6WyJVc2VyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4bGVuZ3RoIiwibWlubGVuZ3RoIiwiZW1haWwiLCJ1bmlxdWUiLCJtb2JpbGUiLCJwYXNzd29yZCIsInRva2VuIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/user.model.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/mongodb */ \"./lib/mongodb.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_user_model__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"bg-slate-500\",\n            children: \"Todo App\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\AMOZESH\\\\Desktop\\\\nextjs projects\\\\nextjs-mongodb-app\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps({ req , res  }) {\n    const token = (0,cookies_next__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"todoToken\", {\n        req,\n        res\n    });\n    if (!token) {\n        return {\n            redirect: {\n                permanent: false,\n                destination: \"/users/login\"\n            },\n            props: {}\n        };\n    }\n    const [bearer, main] = token.split(\" \");\n    const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(main, process.env.SECRET_KEY);\n    const { mobile , email  } = payload;\n    //connect to DB\n    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    //search the user based on mobile and email\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_4___default().findOne({\n        mobile\n    });\n    // if mobile number is not found\n    if (!user) {\n        return {\n            redirect: {\n                permanent: false,\n                destination: \"/users/login\"\n            },\n            props: {}\n        };\n    }\n    //2- check if the userEmail in DB match with the email in token\n    const compareResult = user.email === email;\n    if (!compareResult) {\n        return {\n            redirect: {\n                permanent: false,\n                destination: \"/users/login\"\n            },\n            props: {}\n        };\n    }\n    //3- set the token to the header and redirect to the main page\n    return {\n        redirect: {\n            permanent: false,\n            destination: \"/todos\"\n        },\n        props: {}\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDUjtBQUNNO0FBQ0E7QUFFeEIsU0FBU0ksT0FBTztJQUM3QixxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQUVDLFdBQVU7c0JBQWU7Ozs7Ozs7Ozs7O0FBR2xDLENBQUM7QUFDTSxlQUFlQyxtQkFBbUIsRUFBRUMsSUFBRyxFQUFFQyxJQUFHLEVBQUUsRUFBRTtJQUNyRCxNQUFNQyxRQUFNWCx1REFBU0EsQ0FBQyxhQUFZO1FBQUVTO1FBQUtDO0lBQUk7SUFDN0MsSUFBRyxDQUFDQyxPQUFNO1FBQ1IsT0FBTztZQUNMQyxVQUFVO2dCQUNSQyxXQUFXLEtBQUs7Z0JBQ2hCQyxhQUFhO1lBQ2Y7WUFDQUMsT0FBTSxDQUFDO1FBQ1Q7SUFDRixDQUFDO0lBQ0QsTUFBTSxDQUFDQyxRQUFPQyxLQUFLLEdBQUNOLE1BQU1PLEtBQUssQ0FBQztJQUNoQyxNQUFNQyxVQUFRbEIsMERBQVUsQ0FBQ2dCLE1BQUtJLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNwRCxNQUFNLEVBQUNDLE9BQU0sRUFBQ0MsTUFBSyxFQUFDLEdBQUNOO0lBQ3JCLGVBQWU7SUFDZixNQUFNakIsd0RBQVNBO0lBQ2YsMkNBQTJDO0lBQzNDLE1BQU13QixPQUFLLE1BQU12QixpRUFBWSxDQUFDO1FBQUNxQjtJQUFNO0lBQy9CLGdDQUFnQztJQUNoQyxJQUFHLENBQUNFLE1BQUs7UUFDUCxPQUFPO1lBQ0xkLFVBQVU7Z0JBQ1JDLFdBQVcsS0FBSztnQkFDaEJDLGFBQWE7WUFDZjtZQUNBQyxPQUFNLENBQUM7UUFDVDtJQUNGLENBQUM7SUFDRCwrREFBK0Q7SUFDL0QsTUFBTWEsZ0JBQWVGLEtBQUtELEtBQUssS0FBR0E7SUFDbkMsSUFBRyxDQUFDRyxlQUFjO1FBQ2pCLE9BQU87WUFDTGhCLFVBQVU7Z0JBQ1JDLFdBQVcsS0FBSztnQkFDaEJDLGFBQWE7WUFDZjtZQUNBQyxPQUFNLENBQUM7UUFDVDtJQUNELENBQUM7SUFDQyw4REFBOEQ7SUFDOUQsT0FBTztRQUNOSCxVQUFVO1lBQ1JDLFdBQVcsS0FBSztZQUNoQkMsYUFBYTtRQUNmO1FBQ0FDLE9BQU0sQ0FBQztJQUNUO0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tb25nb2RiLWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcImNvb2tpZXMtbmV4dFwiO1xuaW1wb3J0ICBqd3QgIGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi9saWIvbW9uZ29kYlwiO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXIubW9kZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT0nYmctc2xhdGUtNTAwJz5Ub2RvIEFwcDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcbiAgY29uc3QgdG9rZW49Z2V0Q29va2llKCd0b2RvVG9rZW4nLHsgcmVxLCByZXMgfSk7XG4gIGlmKCF0b2tlbil7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxuICAgICAgfSxcbiAgICAgIHByb3BzOnt9LFxuICAgIH07XG4gIH1cbiAgY29uc3QgW2JlYXJlcixtYWluXT10b2tlbi5zcGxpdChcIiBcIik7XG4gIGNvbnN0IHBheWxvYWQ9and0LnZlcmlmeShtYWluLHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpO1xuICBjb25zdCB7bW9iaWxlLGVtYWlsfT1wYXlsb2FkO1xuICAvL2Nvbm5lY3QgdG8gREJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIC8vc2VhcmNoIHRoZSB1c2VyIGJhc2VkIG9uIG1vYmlsZSBhbmQgZW1haWxcbiAgY29uc3QgdXNlcj1hd2FpdCBVc2VyLmZpbmRPbmUoe21vYmlsZX0pXG4gICAgICAgIC8vIGlmIG1vYmlsZSBudW1iZXIgaXMgbm90IGZvdW5kXG4gICAgICAgIGlmKCF1c2VyKXtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL3VzZXJzL2xvZ2luXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHM6e30sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLzItIGNoZWNrIGlmIHRoZSB1c2VyRW1haWwgaW4gREIgbWF0Y2ggd2l0aCB0aGUgZW1haWwgaW4gdG9rZW5cbiAgICAgICAgY29uc3QgY29tcGFyZVJlc3VsdD0odXNlci5lbWFpbD09PWVtYWlsKVxuICAgICAgIGlmKCFjb21wYXJlUmVzdWx0KXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi91c2Vycy9sb2dpblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvcHM6e30sXG4gICAgICAgIH07XG4gICAgICAgfVxuICAgICAgICAgLy8zLSBzZXQgdGhlIHRva2VuIHRvIHRoZSBoZWFkZXIgYW5kIHJlZGlyZWN0IHRvIHRoZSBtYWluIHBhZ2VcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvdG9kb3NcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3BzOnt9LFxuICAgICAgICB9O1xuICBcbiAgICB9XG4iXSwibmFtZXMiOlsiZ2V0Q29va2llIiwiand0IiwiZGJDb25uZWN0IiwiVXNlciIsIkhvbWUiLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwidG9rZW4iLCJyZWRpcmVjdCIsInBlcm1hbmVudCIsImRlc3RpbmF0aW9uIiwicHJvcHMiLCJiZWFyZXIiLCJtYWluIiwic3BsaXQiLCJwYXlsb2FkIiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9LRVkiLCJtb2JpbGUiLCJlbWFpbCIsInVzZXIiLCJmaW5kT25lIiwiY29tcGFyZVJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbW9uZ29kYi1hcHAvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzP2NlODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0O1xuZnVuY3Rpb24gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();